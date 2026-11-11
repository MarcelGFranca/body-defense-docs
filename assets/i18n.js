/* Language of the landing pages: English is the HTML itself; Portuguese is applied from this table.
   The language comes from the saved choice, else from the browser language (navigator.languages). */
(function () {
	var PT = {
		"nav.products": "Produtos", "nav.about": "Sobre", "nav.contact": "Contato",
		"nav.how": "Como funciona", "nav.defenders": "Defensores", "nav.screens": "Capturas", "nav.privacy": "Privacidade",
		"apolo.title": "Apolo Systems - Software e jogos",
		"apolo.desc": "A Apolo Systems cria apps e jogos: PKBattle, gestão de torneios de card games, e Body Defense, um tower defense dentro do corpo humano.",
		"apolo.h1": "Software pequeno, feito com cuidado.",
		"apolo.lead": "A Apolo Systems é um estúdio independente que cria apps e jogos para celular e web: simples de usar, rápidos e que respeitam os seus dados.",
		"apolo.see": "Ver os produtos",
		"products": "Produtos",
		"pk.tag": "App web e Android",
		"pk.text": "Comande um torneio de card game como um profissional. Rodadas suíças, Top Cut, um relógio de rodada compartilhado e classificação ao vivo, no bolso dos seus jogadores. Para Pokémon, Magic: The Gathering, Lorcana, One Piece e RiftBound.",
		"bd.tag": "Jogo para Android",
		"bd.card": "Um tower defense em pixel art dentro do corpo humano. Células de defesa enfrentam vírus e bactérias por veias e órgãos. Joga offline, sem anúncios, sem contas.",
		"bd.page": "Página do jogo", "bd.privacy": "Política de privacidade",
		"about": "Sobre",
		"about.1": "Fazemos o software que gostaríamos de usar. O PKBattle nasceu da necessidade de organizadores de torneios cansados de chaves no papel e planilhas. O Body Defense nasceu da vontade de fazer um tower defense com uma ideia clara e sem poluição: um polegar, um corpo, uma luta.",
		"about.2": "Nossos jogos não têm anúncios. O Body Defense só envia dados anônimos de jogo se o jogador concordar. Veja como ele trata dados na <a data-privacy href=\"../\">política de privacidade</a>.",
		"contact": "Contato",
		"contact.text": "Dúvidas, sugestões ou parcerias: ",
		"foot.made": "Feito pela",
		"bdp.title": "Body Defense - Tower defense dentro do corpo humano",
		"bdp.desc": "Body Defense é um tower defense em pixel art para Android. Posicione células de defesa contra vírus e bactérias em 16 fases pelo corpo humano. Joga offline, sem anúncios, sem contas.",
		"bdp.h1": "Algo está infectando o corpo.<br>Só você pode impedir.",
		"bdp.lead": "Um tower defense em pixel art dentro do corpo humano. Vírus e bactérias marcham por veias e órgãos; você posiciona células de defesa para detê-los.",
		"bdp.soon": "Em breve no Google Play",
		"f.levels": "fases pelo corpo", "f.cells": "células de defesa", "f.germs": "vírus e bactérias", "f.diff": "dificuldades", "f.lang": "idiomas",
		"how": "Como funciona",
		"how.build": "Construa", "how.build.t": "Toque num espaço vazio no caminho para colocar uma célula de defesa. Toque numa célula para vendê-la.",
		"how.earn": "Ganhe aminoácidos", "how.earn.t": "Inimigos derrotados soltam aminoácidos, sua única moeda. Construa com cuidado e mantenha a economia girando.",
		"how.read": "Conheça o inimigo", "how.read.t": "Toque num germe para ler a ficha dele. Alguns entram em dormência e ficam imunes, outros se dividem em dois, outros resistem à lentidão, outros voltam dos mortos.",
		"how.thumb": "Um polegar", "how.thumb.t": "Joga-se na vertical. Chame a próxima onda mais cedo, acelere o jogo ou pause para pensar.",
		"def": "10 defensores", "def.t": "Cada célula luta do seu jeito, e a combinação certa vence as fases.",
		"shots": "Capturas de tela",
		"body": "Da garganta aos linfonodos",
		"body.1": "Lute pela garganta e traqueia, pulmões, esôfago, estômago, intestinos, corrente sanguínea, fígado, baço e linfonodos. Três fases terminam com um chefe, e a última é o HIV.",
		"body.2": "<strong>Sem anúncios. Sem contas. Joga offline.</strong> Música e efeitos sonoros originais. Disponível em inglês, português, francês, espanhol, italiano, chinês e japonês. Seu progresso fica no seu celular; os dados anônimos de jogo e os rankings são opcionais.",
		"bdp.contact": "Sugestões e dúvidas: "
	};
	var lang = null;
	try { lang = localStorage.getItem("lang"); } catch (e) {}
	if (lang !== "pt" && lang !== "en") {
		lang = "en";
		var prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
		for (var i = 0; i < prefs.length; i++) {
			var p = String(prefs[i]).toLowerCase();
			if (p.indexOf("pt") === 0) { lang = "pt"; break; }
			if (p.indexOf("en") === 0) { break; }
		}
	}
	function apply() {
		document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
		var nodes = document.querySelectorAll("[data-i18n]");
		for (var i = 0; i < nodes.length; i++) {
			var el = nodes[i], key = el.getAttribute("data-i18n");
			if (el.getAttribute("data-en") === null) el.setAttribute("data-en", el.innerHTML);
			el.innerHTML = lang === "pt" && PT[key] !== undefined ? PT[key] : el.getAttribute("data-en");
		}
		var title = document.querySelector("title"), desc = document.querySelector("meta[name=description]");
		[title, desc].forEach(function (el) {
			if (!el) return;
			var key = el.getAttribute("data-i18n");
			if (!key) return;
			var attr = el === title ? "textContent" : "content";
			if (!el.hasAttribute("data-en")) el.setAttribute("data-en", el[attr] || el.getAttribute("content"));
			var val = lang === "pt" && PT[key] !== undefined ? PT[key] : el.getAttribute("data-en");
			if (el === title) el.textContent = val; else el.setAttribute("content", val);
		});
		var alts = document.querySelectorAll("[data-privacy]");
		for (var j = 0; j < alts.length; j++) alts[j].setAttribute("href", "../" + (lang === "pt" ? "#pt" : ""));
		var btns = document.querySelectorAll("[data-lang]");
		for (var k = 0; k < btns.length; k++) btns[k].setAttribute("aria-pressed", btns[k].getAttribute("data-lang") === lang ? "true" : "false");
	}
	document.addEventListener("click", function (e) {
		var b = e.target.closest ? e.target.closest("[data-lang]") : null;
		if (!b) return;
		lang = b.getAttribute("data-lang");
		try { localStorage.setItem("lang", lang); } catch (err) {}
		apply();
	});
	apply();
})();
