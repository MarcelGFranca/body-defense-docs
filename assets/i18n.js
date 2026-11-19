/* Language of the landing pages: English is the HTML itself; Portuguese is applied from this table.
   The language comes from the saved choice, else from the browser language (navigator.languages). */
(function () {
	var PT = {
		"nav.products": "Produtos", "nav.about": "Sobre", "nav.contact": "Contato",
		"nav.how": "Como funciona", "nav.defenders": "Defensores", "nav.screens": "Capturas", "nav.faq": "Perguntas", "nav.privacy": "Privacidade",
		"apolo.title": "Apolo Systems - Software e jogos",
		"apolo.desc": "A Apolo Systems cria apps e jogos: PKBattle, gestão de torneios de card games, e Body Defense, um tower defense dentro do corpo humano.",
		"apolo.h1": "Software pequeno, feito com cuidado.",
		"apolo.lead": "A Apolo Systems é um estúdio independente que cria apps e jogos para celular e web: simples de usar, rápidos e que respeitam os seus dados.",
		"apolo.see": "Ver os produtos",
		"products": "Produtos",
		"pk.tag": "App web e Android",
		"pk.text": "Comande um torneio de card game como um profissional. Rodadas suíças, Top Cut, um relógio de rodada compartilhado e classificação ao vivo, no bolso dos seus jogadores. Para Pokémon, Magic: The Gathering, Lorcana, One Piece e RiftBound.",
		"bd.tag": "Jogo para Android",
		"bd.card": "Um tower defense em pixel art dentro do corpo humano. Células de defesa enfrentam vírus e bactérias por veias e órgãos. Joga offline, sem contas, com anúncios leves entre as fases.",
		"bd.page": "Página do jogo", "bd.privacy": "Política de privacidade", "foot.terms": "Termos de uso",
		"about": "Sobre",
		"about.1": "Fazemos o software que gostaríamos de usar. O PKBattle nasceu da necessidade de organizadores de torneios cansados de chaves no papel e planilhas. O Body Defense nasceu da vontade de fazer um tower defense com uma ideia clara e sem poluição: um polegar, um corpo, uma luta.",
		"about.2": "O Body Defense mostra anúncios leves entre as fases e só envia dados anônimos de jogo se o jogador concordar. Veja como ele trata dados na <a data-privacy href=\"../privacy/\">política de privacidade</a>.",
		"contact": "Contato",
		"contact.text": "Dúvidas, sugestões ou parcerias: ",
		"foot.made": "Feito pela",
		"bdp.title": "Body Defense: tower defense offline dentro do corpo humano",
		"bdp.desc": "Tower defense em pixel art para Android. Posicione células de defesa contra vírus e bactérias em 16 fases pelo corpo humano. Joga offline, sem conta.",
		"bdp.h1": "Body Defense: tower defense dentro do corpo humano",
		"bdp.hook": "Algo está infectando o corpo. Só você pode impedir.",
		"bdp.lead": "Body Defense é um jogo de tower defense offline em pixel art para Android. Vírus, bactérias e fungos marcham por veias e órgãos; você posiciona células de defesa para detê-los.",
		"bdp.soon": "Em breve no Google Play",
		"f.levels": "fases pelo corpo", "f.cells": "células de defesa", "f.germs": "vírus, bactérias e fungos", "f.diff": "dificuldades", "f.lang": "idiomas",
		"how": "Como funciona",
		"how.build": "Construa", "how.build.t": "Toque num espaço vazio no caminho para colocar uma célula de defesa. Toque numa célula para vendê-la.",
		"how.earn": "Ganhe aminoácidos", "how.earn.t": "Inimigos derrotados soltam aminoácidos, sua única moeda. Construa com cuidado e mantenha a economia girando.",
		"how.read": "Conheça o inimigo", "how.read.t": "Toque num germe para ler a ficha dele. Alguns entram em dormência e ficam imunes, outros se dividem em dois, outros resistem à lentidão, outros voltam dos mortos.",
		"how.thumb": "Um polegar", "how.thumb.t": "Joga-se na vertical. Chame a próxima onda mais cedo, acelere o jogo ou pause para pensar.",
		"def": "10 defensores", "def.t": "Cada célula luta do seu jeito, e a combinação certa vence as fases.",
		"shots": "Capturas de tela",
		"body": "Da garganta aos linfonodos",
		"body.1": "Lute pela garganta e traqueia, pulmões, esôfago, estômago, intestinos, corrente sanguínea, fígado, baço e linfonodos, e depois por um segundo capítulo de infecções por fungos: pele e unhas, boca e intestino, os pulmões de novo, os seios da face e o cérebro, e a sepse. Seis chefes esperam pelo caminho, do HIV ao Ebola.",
		"body.2": "<strong>Sem contas. Joga offline. Anúncios leves entre as fases.</strong> Música e efeitos sonoros originais. Disponível em inglês, português, francês, espanhol, italiano, chinês e japonês. Seu progresso fica no seu celular; os dados anônimos de jogo e os rankings são opcionais, e os anúncios seguem as suas escolhas de consentimento (veja a política de privacidade).",
		"glance": "Resumo em fatos",
		"g.platform": "Plataforma", "g.platform.t": "Android 7.0 ou mais novo (celulares de 64 bits), jogado na vertical",
		"g.status": "Situação", "g.status.t": "Em breve no Google Play",
		"g.price": "Preço", "g.price.t": "Grátis para baixar e jogar, com um anúncio leve entre as fases; sem compras no app",
		"g.offline": "Offline", "g.offline.t": "Sim, o jogo inteiro roda sem internet",
		"g.account": "Conta", "g.account.t": "Não precisa",
		"g.content": "Conteúdo", "g.content.t": "16 fases em dois capítulos, 10 defensores, 23 inimigos, 6 chefes, 3 dificuldades, modo infinito, 28 conquistas",
		"g.lang": "Idiomas", "g.lang.t": "Inglês, português, francês, espanhol, italiano, chinês, japonês",
		"g.age": "Idade", "g.age.t": "Feito para jogadores de 13 anos ou mais",
		"g.data": "Dados", "g.data.t": "Dados anônimos de jogo e rankings são opcionais; veja a <a data-privacy href=\"privacy/\">política de privacidade</a>",
		"g.dev": "Desenvolvedora", "g.dev.t": "Apolo Systems, Brasil",
		"faq": "Perguntas e respostas",
		"faq.q1": "O que é o Body Defense?",
		"faq.a1": "Body Defense é um jogo de tower defense em pixel art para Android, ambientado dentro do corpo humano. Vírus, bactérias e fungos andam por veias e órgãos, e você posiciona células de defesa, como macrófagos e linfócitos, para detê-los. Tem 16 fases, 10 defensores, 23 inimigos e 3 dificuldades.",
		"faq.q2": "O Body Defense é grátis?",
		"faq.a2": "Sim. É grátis para baixar e jogar, e não tem compras no app. Mostra um anúncio leve (Google AdMob) entre as fases, nunca durante a partida.",
		"faq.q3": "Funciona offline?",
		"faq.a3": "Sim. O jogo inteiro roda sem conexão com a internet. A conexão só é usada para mostrar anúncios, para enviar dados anônimos de jogo se você concordar e para mostrar os rankings.",
		"faq.q4": "Tem anúncios?",
		"faq.a4": "Sim, um anúncio curto pode aparecer depois que você vence uma fase e toca para continuar. Anúncios nunca aparecem durante a partida, nem nas primeiras fases. Onde a lei exige, por exemplo na Europa e no Reino Unido, o jogo pede o seu consentimento antes.",
		"faq.q5": "Que dados ele coleta?",
		"faq.a5": "Não precisa de conta e não pede seu nome nem e-mail. Na primeira vez que você abre, o jogo pergunta se pode enviar dados anônimos de jogo (fases, resultados, torres usadas e um identificador aleatório de jogador); você pode dizer não, ou mudar a qualquer momento nas Configurações. Os anúncios, fornecidos pelo Google AdMob, coletam os próprios dados segundo a política do Google. O jogo em si não usa sua localização, contatos, câmera, microfone, fotos nem arquivos. Todos os detalhes estão na <a data-privacy href=\"privacy/\">política de privacidade</a>.",
		"faq.q6": "Em quais idiomas ele fala?",
		"faq.a6": "Inglês, português, francês, espanhol, italiano, chinês e japonês.",
		"faq.q7": "Quais versões do Android ele precisa?",
		"faq.a7": "Android 7.0 ou mais novo, em um celular de 64 bits (arm64). O jogo é jogado na vertical.",
		"faq.q8": "É um jogo para crianças?",
		"faq.a8": "É feito para jogadores de 13 anos ou mais, e seus anúncios não são direcionados a crianças. É um jogo, não uma aula nem um conselho médico, mas os inimigos são micróbios reais com seus nomes reais, então estudantes e curiosos podem aprender alguns fatos enquanto jogam.",
		"faq.q9": "Onde eu consigo?",
		"faq.a9": "O Body Defense está chegando ao Google Play para Android. Esta página vai levar à loja assim que o jogo for público.",
		"faq.q10": "Quem fez?",
		"faq.a10": "O Body Defense é feito pela Apolo Systems, um estúdio independente no Brasil.",
		"faq.q11": "Como falo com o desenvolvedor?",
		"faq.a11": "Escreva para <a href=\"mailto:contact.apolosystems@gmail.com\">contact.apolosystems@gmail.com</a>. Sugestões e dúvidas são bem-vindas.",
		"alt.hero": "Logo do Body Defense em pixel art, com células de defesa diante de vírus em uma veia",
		"alt.s1": "Menu inicial do Body Defense: uma célula de defesa diante de um vírus verde",
		"alt.s2": "Cartão da fase do estômago com suas ondas, torres e inimigos",
		"alt.s3": "Fase 3, os pulmões: células de defesa protegem um caminho rosa contra ondas de germes",
		"alt.s4": "Fase 7, a corrente sanguínea: uma veia vermelha com células de defesa e germes chegando",
		"alt.s5": "Fase 5, o estômago: um caminho amarelo serpenteando pelo estômago",
		"alt.s6": "Fase 10, os linfonodos: um caminho azul sinuoso com defensores posicionados",
		"t.macrophage": "Macrófago", "alt.t.macrophage": "Macrófago, uma célula de defesa, animado",
		"t.mucus-cell": "Célula de Muco", "alt.t.mucus-cell": "Célula de Muco, uma célula de defesa, animado",
		"t.interferon": "Interferon", "alt.t.interferon": "Interferon, uma célula de defesa, animado",
		"t.neutrophil": "Neutrófilo", "alt.t.neutrophil": "Neutrófilo, uma célula de defesa, animado",
		"t.lysozyme": "Lisozima", "alt.t.lysozyme": "Lisozima, uma célula de defesa, animado",
		"t.platelet": "Plaqueta", "alt.t.platelet": "Plaqueta, uma célula de defesa, animado",
		"t.hypothalamus": "Hipotálamo", "alt.t.hypothalamus": "Hipotálamo, uma célula de defesa, animado",
		"t.t-lymphocyte": "Linfócito T", "alt.t.t-lymphocyte": "Linfócito T, uma célula de defesa, animado",
		"t.b-lymphocyte": "Linfócito B", "alt.t.b-lymphocyte": "Linfócito B, uma célula de defesa, animado",
		"t.bone-marrow": "Medula Óssea", "alt.t.bone-marrow": "Medula Óssea, uma célula de defesa, animado",
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
		var imgs = document.querySelectorAll("[data-i18n-alt]");
		for (var m = 0; m < imgs.length; m++) {
			var im = imgs[m], ak = im.getAttribute("data-i18n-alt");
			if (im.getAttribute("data-en-alt") === null) im.setAttribute("data-en-alt", im.getAttribute("alt"));
			im.setAttribute("alt", lang === "pt" && PT[ak] !== undefined ? PT[ak] : im.getAttribute("data-en-alt"));
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
		for (var j = 0; j < alts.length; j++) alts[j].setAttribute("href", alts[j].getAttribute("href").split("#")[0] + (lang === "pt" ? "#pt" : ""));
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
