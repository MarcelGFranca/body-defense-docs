#!/usr/bin/env python3
"""Checks of the static site, run from the repository root: python3 tools/check-site.py

Titles and descriptions, alt texts, JSON-LD against the visible FAQ, internal links and
anchors, the files listed in sitemap.xml. Exits with 1 when something fails."""
import json, re, sys, pathlib
from html.parser import HTMLParser
from urllib.parse import urlparse, urldefrag

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = "https://bodydefense.com.br"
PAGES = ["index.html", "pt/index.html", "apolo/index.html", "privacy/index.html", "terms/index.html", "404.html"]
fails = []


def fail(msg):
	fails.append(msg)
	print("FAIL", msg)


class P(HTMLParser):
	def __init__(self):
		super().__init__()
		self.links, self.ids, self.imgs, self.meta, self.title, self.ld, self._in = [], set(), [], {}, "", [], None
		self.h1 = 0

	def handle_starttag(self, tag, a):
		a = dict(a)
		if "id" in a: self.ids.add(a["id"])
		if tag in ("a", "link") and a.get("href"): self.links.append(a["href"])
		if tag in ("img", "script", "source") and a.get("src"): self.links.append(a["src"])
		if tag == "img": self.imgs.append(a)
		if tag == "h1": self.h1 += 1
		if tag == "meta":
			k = a.get("name") or a.get("property")
			if k: self.meta[k] = a.get("content", "")
		if tag == "title": self._in = "title"
		if tag == "script" and a.get("type") == "application/ld+json": self._in = "ld"; self.ld.append("")

	def handle_endtag(self, tag):
		self._in = None

	def handle_data(self, d):
		if self._in == "title": self.title += d
		elif self._in == "ld": self.ld[-1] += d


def parse(rel):
	p = P(); p.feed((ROOT / rel).read_text(encoding="utf-8")); return p


parsed = {r: parse(r) for r in PAGES}
for rel, p in parsed.items():
	t = p.title.strip(); d = p.meta.get("description", "")
	print("%-18s title %2d  desc %3d  h1 %d  imgs %d" % (rel, len(t), len(d), p.h1, len(p.imgs)))
	if rel != "404.html":
		if not 25 <= len(t) <= 62: fail("%s title length %d" % (rel, len(t)))
		if not 120 <= len(d) <= 165: fail("%s description length %d" % (rel, len(d)))
	if p.h1 != 1 and rel not in ("privacy/index.html", "terms/index.html"): fail("%s has %d h1" % (rel, p.h1))
	for im in p.imgs:
		if "alt" not in im: fail("%s image without alt: %s" % (rel, im.get("src")))
	if "umami.pkbattle.com.br/script.js" not in (ROOT / rel).read_text(encoding="utf-8"): fail("%s lacks the Umami tag" % rel)
	for s in p.ld:
		try: json.loads(s)
		except Exception as e: fail("%s JSON-LD does not parse: %s" % (rel, e))
	# internal links and anchors
	base = (ROOT / rel).parent
	for l in p.links:
		if re.match(r"(https?:|mailto:|data:)", l): continue
		u, frag = urldefrag(l)
		target = (base / u) if not u.startswith("/") else (ROOT / u.lstrip("/"))
		if u == "": target = ROOT / rel
		if target.is_dir(): target = target / "index.html"
		if not target.exists(): fail("%s broken link %s" % (rel, l)); continue
		if frag and target.suffix == ".html":
			ids = parsed[str(target.relative_to(ROOT))].ids if str(target.relative_to(ROOT)) in parsed else parse(str(target.relative_to(ROOT))).ids
			if frag not in ids: fail("%s broken anchor %s" % (rel, l))

# JSON-LD FAQ against the visible text
for rel in ("index.html", "pt/index.html"):
	html = (ROOT / rel).read_text(encoding="utf-8")
	faq_html = html[html.index('id="faq"'):]
	items = re.findall(r'<div class="qa">\s*<h3[^>]*>(.*?)</h3>\s*<p[^>]*>(.*?)</p>', faq_html, re.S)
	strip = lambda s: re.sub(r"<[^>]+>", "", s).strip()
	ld = [json.loads(s) for s in parsed[rel].ld][0]["@graph"]
	fq = [x for x in ld if x["@type"] == "FAQPage"][0]["mainEntity"]
	if len(fq) != len(items): fail("%s FAQ count %d vs %d" % (rel, len(fq), len(items)))
	for (q, a), e in zip(items, fq):
		if strip(q) != e["name"] or strip(a) != e["acceptedAnswer"]["text"]: fail("%s FAQ differs: %s" % (rel, strip(q)))

# sitemap, robots
sm = (ROOT / "sitemap.xml").read_text()
for loc in re.findall(r"<loc>(.*?)</loc>", sm):
	path = urlparse(loc).path.lstrip("/")
	f = ROOT / path / "index.html" if path == "" or path.endswith("/") else ROOT / path
	if not f.exists(): fail("sitemap URL without file: " + loc)
for f in ("robots.txt", "llms.txt", "favicon.ico", "assets/body-defense/og-image.png", "assets/body-defense/apple-touch-icon.png"):
	if not (ROOT / f).exists(): fail("missing " + f)
from PIL import Image
im = Image.open(ROOT / "assets/body-defense/og-image.png")
if im.size != (1200, 630) or im.mode != "RGB": fail("og image is %s %s" % (im.size, im.mode))
print("FAILED" if fails else "all checks passed")
sys.exit(1 if fails else 0)
