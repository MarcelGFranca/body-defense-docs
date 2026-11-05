# Body Defense - public pages

This repository serves the public web pages of **Apolo Systems** and of **Body Defense**, an Android tower defense game by Apolo Systems.

## About the game

Body Defense is a single-player, offline, portrait tower defense for Android. The human body defends itself against viruses and bacteria: enemies walk along veins, the towers are immune cells, and the currency is amino acids. It has 10 levels, 10 towers, 13 enemies, 3 difficulties and 7 languages (English, Portuguese, French, Spanish, Italian, Chinese and Japanese). It has no accounts, no ads, no in-app purchases and no network access.

## Pages

| Page | Address |
|---|---|
| Body Defense privacy policy (English and Portuguese) | https://marcelgfranca.github.io/body-defense-docs/ |
| Apolo Systems landing page (mentions PKBattle and Body Defense) | https://marcelgfranca.github.io/body-defense-docs/apolo/ |
| Body Defense landing page | https://marcelgfranca.github.io/body-defense-docs/body-defense/ |

The privacy policy stays at the root because that address is registered in the Google Play Console. Both landing pages are in English and Portuguese: they pick the language from the browser (`navigator.languages`), the EN/PT buttons change it, and the choice is saved only on the visitor's device (`localStorage`). No location is requested.

## Contact

contact.apolosystems@gmail.com

## Files

- `index.html`: the privacy policy, served by GitHub Pages from the `main` branch.
- `apolo/index.html`: the Apolo Systems landing page.
- `body-defense/index.html`: the Body Defense landing page.
- `assets/site.css`: the style shared by the landing pages.
- `assets/i18n.js`: language detection and the Portuguese texts (English is the HTML itself; add a `data-i18n` key to every new text).
- `assets/apolo/`, `assets/body-defense/`, `assets/pkbattle/`: logos, icons, screenshots and tower animations used by the landing pages.
- `.nojekyll`: tells GitHub Pages to serve the files as they are.
