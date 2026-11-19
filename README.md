# Body Defense - public pages

This repository serves the public web pages of **Apolo Systems** and of **Body Defense**, an Android tower defense game by Apolo Systems.

## About the game

Body Defense is a single-player, offline, portrait tower defense for Android. The human body defends itself against viruses and bacteria: enemies walk along veins, the towers are immune cells, and the currency is amino acids. It has 16 levels, 10 towers, 23 enemies, 3 difficulties per level and 7 languages (English, Portuguese, French, Spanish, Italian, Chinese and Japanese). It can be played offline. It shows a light ad (Google AdMob) between levels, has no in-app purchases and needs no account; it sends anonymous play data and ladder scores only if the player agrees, and signing in with Google Play Games (achievements only) is optional (see the privacy policy and the terms of use).

## Pages

The site is served at https://bodydefense.com.br by the Caddy of the host (see `server/deploy/README.md` in the game repository). The pages use relative links, so they also open from a local folder.

| Page | Address |
|---|---|
| Body Defense landing page | https://bodydefense.com.br/ |
| Body Defense landing page in Portuguese (static copy) | https://bodydefense.com.br/pt/ |
| Body Defense privacy policy (English and Portuguese) | https://bodydefense.com.br/privacy/ |
| Body Defense terms of use (English and Portuguese) | https://bodydefense.com.br/terms/ |
| Apolo Systems landing page (mentions PKBattle and Body Defense) | https://bodydefense.com.br/apolo/ |

The privacy policy address is registered in the Google Play Console and on the Google Cloud branding page: if a page moves again, change both. Both landing pages are in English and Portuguese: they pick the language from the browser (`navigator.languages`), the EN/PT buttons change it, and the choice is saved only on the visitor's device (`localStorage`). No location is requested.

## Contact

contact.apolosystems@gmail.com

## Files

- `index.html`: the Body Defense landing page (English; the head carries the title, description, canonical, hreflang, Open Graph, Twitter cards and the JSON-LD).
- `pt/index.html`: the Portuguese landing page, **generated** by `tools/sync-pt.py` from `index.html` and the PT table of `assets/i18n.js`. Do not edit it by hand.
- `robots.txt`, `sitemap.xml`, `llms.txt`: crawler rules, the five real URLs and a short factual summary for AI assistants. Update the facts in `llms.txt` and the FAQ together when the game changes or the Google Play page opens.
- `favicon.ico`, `assets/body-defense/og-image.png` (1200 x 630 link preview), `assets/body-defense/apple-touch-icon.png`.
- `tools/sync-pt.py`: run `python3 tools/sync-pt.py` after changing the landing page text or the PT table; it refreshes the JSON-LD and `pt/index.html`. `tools/check-site.py` checks titles, descriptions, alt texts, JSON-LD against the visible FAQ, links and the sitemap (needs Python with Pillow). Neither runs on the server: the site stays a plain folder.
- `privacy/index.html`: the privacy policy (English and Portuguese).
- `terms/index.html`: the terms of use (English and Portuguese, same style as the privacy policy).
- `apolo/index.html`: the Apolo Systems landing page.
- `404.html`: the page Caddy shows for an address that does not exist.
- `assets/site.css`: the style shared by the landing pages.
- `assets/i18n.js`: language detection and the Portuguese texts (English is the HTML itself; add a `data-i18n` key to every new text).
- `assets/apolo/`, `assets/body-defense/`, `assets/pkbattle/`: logos, icons, screenshots and tower animations used by the landing pages.
- `.nojekyll`: left from the GitHub Pages time; harmless.

## Visit statistics

Every page loads the tracker of the Umami that Apolo Systems runs (`https://umami.pkbattle.com.br/script.js`, the same one pkbattle uses; the dashboard is only on the tailnet). The `<script>` tag is in the `<head>` of each page with the website id of "Body Defense site" in Umami. `data-domains="bodydefense.com.br"` makes a local or preview copy count nothing, and `data-do-not-track="true"` respects the browser's signal. No cookie, no stored network address; the privacy policy has a section "This website" and a retention row (24 months) that must stay true: delete older records by hand (see `openspec/changes/add-site-analytics` in the game repository). When the Google Play button becomes a real link, give it `data-umami-event="play-store-click"` to count the clicks.
