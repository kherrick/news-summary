# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Innovation

* [Arithmetic Coding for Data Compression](https://dl.acm.org/doi/pdf/10.1145/214762.214771) - A detailed exploration of arithmetic coding, a key method in data compression systems. [Comments](https://lobste.rs/s/jfsmzp/arithmetic_coding_for_data_compression)

* [Using Local Translation Models on Android](https://blog.davidv.dev/posts/mobile-translator/) - Discusses deploying local translation models on mobile devices, enhancing offline capabilities. [Comments](https://lobste.rs/s/14jyfc/using_local_translation_models_on)

* [Learn Common Lisp by Example: GTK GUI with SBCL](https://goober99.hashnode.dev/learn-common-lisp-by-example-gtk-gui-with-sbcl) - A step-by-step guide to building GUIs with Common Lisp, showcasing practical programming techniques. [Comments](https://lobste.rs/s/eypjyq/learn_common_lisp_by_example_gtk_gui_with)

* [Unexpected Benefits of Building Your Own Tools](https://tiniuc.com/make-more-tools/) - An exploration of how crafting personalized software tools can yield surprising advantages. [Comments](https://lobste.rs/s/ockgcp/unexpected_benefits_building_your_own)

## Artificial Intelligence and Its Impacts

* [AI systems with 'unacceptable risk' are now banned in the EU](https://techcrunch.com/2025/02/02/ai-systems-with-unacceptable-risk-are-now-banned-in-the-eu/) - Analysis of newly enacted EU policies targeting AI systems deemed excessively risky. [Comments](https://news.ycombinator.com/item?id=42916849)

* [How One YouTuber is Trying to Poison the AI Bots Stealing Her Content](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss) - Innovative measures against AI scraping showcase the tense relationship between creators and AI tech. [Comments](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss)

* [LLMs: harmful to technical innovation?](https://evanhahn.com/llms-and-technical-innovation/) - Discussion on whether large language models are stifling genuine technological progress. [Comments](https://lobste.rs/s/xflmye/llms_harmful_technical_innovation)

## Open Source and Security

* [Nix: string interpolation of directories gone awry](https://fzakaria.com/2025/02/02/nix-string-interpolation-of-directories-gone-awry.html) - Troubleshooting issues in the Nix package manager due to incorrect string interpolation. [Comments](https://lobste.rs/s/e7clsc/nix_string_interpolation_directories)

* [RUSTSEC-2025-0004: openssl: ssl::select_next_proto use after free](https://rustsec.org/advisories/RUSTSEC-2025-0004) - A security advisory detailing a vulnerability in the openssl library used in Rust. [Comments](https://lobste.rs/s/kc63sr/rustsec_2025_0004_openssl_ssl_select_next)

## Digital Rights and Platforms

* [YouTube shut down audio developer's channel of 15 years standing for 'reasons'](https://bsky.app/profile/sinevibes.bsky.social/post/3lhazuyn5as2t) - Overview of content moderation challenges with YouTube's takedown actions. [Comments](https://news.ycombinator.com/item?id=42917454)

* [Bluesky now has 30 million users](https://bsky.app/profile/bsky.app/post/3lgu4lg6j2k2v) - Highlights milestone success for decentralized social media platform Bluesky. [Comments](https://news.ycombinator.com/item?id=42916770)

---

## Below are the rules that were sent.

### System content.

Rules:

1. You are a news robot that summarizes a list of links and their associated descriptions.
2. Use the following markdown for the top most header in the final output: [News Summary](https://kherrick.github.io/news-summary/)
3. The news items are given to you in date ordered markdown format.
4. Make one section per day, but do not include dates in the section headers.
5. Under each day's section, group each item of news together under a commonly themed sub-section with an appropriate description.
6. While each news item is a string, use valid markdown to include relevant links to articles and their associated comments.
7. Within a news item, do not use links for articles and comments from other news items' article or comment links.
8. You must ONLY RESPOND IN JSON according to the following JSON Schema:

```json
{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://kherrick.github.io/news-summary/news-summary-schema.json","type":"object","properties":{"heading":{"type":"string"},"sections":{"type":"array","items":{"type":"object","properties":{"title":{"type":"string"},"newsItems":{"type":"array","items":{"type":"string"},"minItems":1}},"required":["title","newsItems"]},"minItems":1}},"required":["heading","sections"]}
```

### User content.

Highlight the most unique and interesting articles from within the bulleted list that follows:

* [2025-02-03, 12:55:00](https://lobste.rs/s/jfsmzp/arithmetic_coding_for_data_compression) - [Arithmetic Coding for Data Compression](https://dl.acm.org/doi/pdf/10.1145/214762.214771)
* [2025-02-03, 12:50:19](https://lobste.rs/s/tn67at/five_coding_hats) - [Five coding hats](https://dubroy.com/blog/five-coding-hats/)
* [2025-02-03, 12:40:00](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss) - [About Zusie (Relay Based Computer)](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss)
* [2025-02-03, 12:39:06](https://lobste.rs/s/rtb671/porting_crystal_realms_android_with_bevy) - [Porting Crystal Realms to Android with Bevy](https://www.youtube.com/watch?v=4EE_bhHZZA4)
* [2025-02-03, 12:24:42](https://lobste.rs/s/o8opng/patient_programmer) - [The Patient Programmer](https://dbushell.com/2025/01/31/the-patient-programmer/)
* [2025-02-03, 12:21:52](https://news.ycombinator.com/item?id=42917454) - [YouTube shut down audio developer's channel of 15 years standing for \"reasons\"](https://bsky.app/profile/sinevibes.bsky.social/post/3lhazuyn5as2t)
* [2025-02-03, 11:32:50](https://lobste.rs/s/5snozq/perfect_is_enemy_good) - [Perfect is the enemy of good](https://medv.io/blog/perfect-is-the-enemy-of-good)
* [2025-02-03, 10:31:13](https://news.ycombinator.com/item?id=42916849) - [AI systems with 'unacceptable risk' are now banned in the EU](https://techcrunch.com/2025/02/02/ai-systems-with-unacceptable-risk-are-now-banned-in-the-eu/)
* [2025-02-03, 10:24:05](https://lobste.rs/s/kc63sr/rustsec_2025_0004_openssl_ssl_select_next) - [RUSTSEC-2025-0004: openssl: ssl::select_next_proto use after free](https://rustsec.org/advisories/RUSTSEC-2025-0004)
* [2025-02-03, 10:22:40](https://lobste.rs/s/e5tc2a/selfish_personal_argument_for_releasing) - [A selfish personal argument for releasing code as Open Source](https://simonwillison.net/2025/Jan/24/selfish-open-source/)
* [2025-02-03, 10:17:41](https://news.ycombinator.com/item?id=42916770) - [Bluesky now has 30 million users](https://bsky.app/profile/bsky.app/post/3lgu4lg6j2k2v)
* [2025-02-03, 09:48:09](https://lobste.rs/s/14jyfc/using_local_translation_models_on) - [Using local translation models on Android](https://blog.davidv.dev/posts/mobile-translator/)
* [2025-02-03, 09:33:18](https://lobste.rs/s/fc8vhe/freedoms_for_who_revisited_briefly) - [freedoms-for-who, revisited briefly](https://lu.is/2025/02/freedoms-for-who-revisited-briefly/)
* [2025-02-03, 08:54:53](https://lobste.rs/s/e7clsc/nix_string_interpolation_directories) - [Nix: string interpolation of directories gone awry](https://fzakaria.com/2025/02/02/nix-string-interpolation-of-directories-gone-awry.html)
* [2025-02-03, 08:46:27](https://news.ycombinator.com/item?id=42916219) - [Bayesian Epistemology](https://plato.stanford.edu/entries/epistemology-bayesian/)
* [2025-02-03, 08:34:00](https://news.slashdot.org/story/25/02/02/2257234/ubuntus-dev-discussions-will-move-from-irc-to-matrix?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ubuntu's Dev Discussions Will Move From IRC to Matrix](https://news.slashdot.org/story/25/02/02/2257234/ubuntus-dev-discussions-will-move-from-irc-to-matrix?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 07:51:00](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss) - [The Network State Coup is Happening Right Now](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss)
* [2025-02-03, 07:46:37](https://news.ycombinator.com/item?id=42915905) - [Anthropic: \"Applicants should not use AI assistants\"](https://simonwillison.net/2025/Feb/2/anthropic/)
* [2025-02-03, 07:00:25](https://lobste.rs/s/8pbipx/caveat_with_statically_linked_language) - [A caveat with statically linked language runtimes](https://thinkingeek.com/2025/01/31/caveat-with-statically-linked-language-runtimes/)
* [2025-02-03, 06:22:27](https://lobste.rs/s/vploy1/incident_sev_scales_are_waste_time) - [Incident SEV scales are a waste of time](https://blog.danslimmon.com/2025/01/29/incident-sev-scales-are-a-waste-of-time/)
* [2025-02-03, 06:19:00](https://hardware.slashdot.org/story/25/02/03/0452259/will-cryptomining-facilities-change-into-ai-data-centers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Will Cryptomining Facilities Change Into AI Data Centers?](https://hardware.slashdot.org/story/25/02/03/0452259/will-cryptomining-facilities-change-into-ai-data-centers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 05:19:52](https://news.ycombinator.com/item?id=42915231) - [London Street Views (1840)](https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~323099~90092214:Composite--London-Street-Views-No--)
* [2025-02-03, 04:53:11](https://news.ycombinator.com/item?id=42915113) - [Polish city is using mussels to monitor water quality (2020)](https://www.awa.asn.au/resources/latest-news/technology/innovation/polish-city-using-mussels-monitor-water-quality)
* [2025-02-03, 04:16:57](https://lobste.rs/s/mvtj4c/python_free_threading_guide) - [Python free-threading guide](https://py-free-threading.github.io/)
* [2025-02-03, 04:03:00](https://it.slashdot.org/story/25/02/03/040259/google-stops-malicious-apps-with-ai-powered-threat-detection-and-continuous-scanning?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Stops Malicious Apps With 'AI-Powered Threat Detection' and Continuous Scanning ](https://it.slashdot.org/story/25/02/03/040259/google-stops-malicious-apps-with-ai-powered-threat-detection-and-continuous-scanning?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 03:07:00](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss) - [How One YouTuber is Trying to Poison the AI Bots Stealing Her Content](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss)
* [2025-02-03, 02:59:00](https://news.ycombinator.com/item?id=42914431) - [Chaplin: Local visual speech recognition (VSR) in real-time](https://github.com/amanvirparhar/chaplin)
* [2025-02-03, 02:51:18](https://lobste.rs/s/eypjyq/learn_common_lisp_by_example_gtk_gui_with) - [Learn Common Lisp by Example: GTK GUI with SBCL](https://goober99.hashnode.dev/learn-common-lisp-by-example-gtk-gui-with-sbcl)
* [2025-02-03, 02:34:59](https://lobste.rs/s/kns9xb/android_binder) - [Android Binder](https://elinux.org/Android_Binder)
* [2025-02-03, 02:19:02](https://lobste.rs/s/f03vpe/how_i_use_ai_early_2025) - [How I Use AI: Early 2025](https://benjamincongdon.me/blog/2025/02/02/How-I-Use-AI-Early-2025/)
* [2025-02-03, 01:50:00](https://tech.slashdot.org/story/25/02/03/0148221/boeing-acquires-spirit-aerosystems-while-boeings-starliner-unit-gets-a-new-vp?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Boeing Acquires Spirit AeroSystems, While Boeing's 'Starliner' Unit Gets a New VP](https://tech.slashdot.org/story/25/02/03/0148221/boeing-acquires-spirit-aerosystems-while-boeings-starliner-unit-gets-a-new-vp?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 01:18:07](https://news.ycombinator.com/item?id=42913831) - [Patterns for Personal Web Sites (2003)](http://www.rdrop.com/~half/Creations/Writings/Web.patterns/index.html)
* [2025-02-03, 00:06:10](https://news.ycombinator.com/item?id=42913251) - [Introducing deep research](https://openai.com/index/introducing-deep-research/)
* [2025-02-02, 23:58:37](https://news.ycombinator.com/item?id=42913180) - [The Art of Dithering and Retro Shading for the Web (2024)](https://blog.maximeheckel.com/posts/the-art-of-dithering-and-retro-shading-web/)
* [2025-02-02, 23:45:16](https://lobste.rs/s/0enkqp/hollywood_split_computer_console_into) - [Hollywood: split a computer console into multiple panes of genuine technical melodrama](https://a.hollywood.computer/)
* [2025-02-02, 23:44:00](https://slashdot.org/story/25/02/02/2342245/openai-holds-surprise-livestream-to-announce-multi-step-deep-research-capability?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Holds Surprise Livestream to Announce Multi-Step 'Deep Research' Capability](https://slashdot.org/story/25/02/02/2342245/openai-holds-surprise-livestream-to-announce-multi-step-deep-research-capability?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 23:13:34](https://lobste.rs/s/gtpau6/it_utilities) - [it - utilities](https://github.com/theHamdiz/it)
* [2025-02-02, 22:27:54](https://news.ycombinator.com/item?id=42912515) - [GarminDB](https://github.com/tcgoetz/GarminDB)
* [2025-02-02, 22:23:00](https://soylentnews.org/article.pl?sid=25/02/01/1439213&from=rss) - [Infosec Was Trump's Lowest Priority, But He'll Change Bigly](https://soylentnews.org/article.pl?sid=25/02/01/1439213&from=rss)
* [2025-02-02, 22:15:30](https://news.ycombinator.com/item?id=42912412) - [Emergence of a second law of thermodynamics in isolated quantum systems](https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.6.010309)
* [2025-02-02, 21:58:00](https://news.slashdot.org/story/25/02/02/2156241/mozilla-adapts-fakespot-into-an-ai-detecting-firefox-add-on?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mozilla Adapts 'Fakespot' Into an AI-Detecting Firefox Add-on](https://news.slashdot.org/story/25/02/02/2156241/mozilla-adapts-fakespot-into-an-ai-detecting-firefox-add-on?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 21:07:48](https://news.ycombinator.com/item?id=42911842) - [Costa Rican supermarket wins trademark battle against Nintendo](https://ticotimes.net/2025/01/30/david-vs-goliath-costa-rican-super-mario-defeats-nintendo-in-court)
* [2025-02-02, 20:34:00](https://it.slashdot.org/story/25/02/02/1948240/should-we-sing-the-praises-of-agile-or-bury-it?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Should We Sing the Praises of Agile, or Bury It?](https://it.slashdot.org/story/25/02/02/1948240/should-we-sing-the-praises-of-agile-or-bury-it?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 20:29:11](https://lobste.rs/s/gisler/everyone_knows_your_location_tracking) - [Everyone knows your location: tracking myself down through in-app ads](https://timsh.org/tracking-myself-down-through-in-app-ads/)
* [2025-02-02, 19:34:00](https://tech.slashdot.org/story/25/02/02/1837253/facebook-admits-linux-post-crackdown-was-in-error-fixes-moderation-error?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Facebook Admits Linux-Post Crackdown Was 'In Error', Fixes Moderation Error](https://tech.slashdot.org/story/25/02/02/1837253/facebook-admits-linux-post-crackdown-was-in-error-fixes-moderation-error?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 19:29:45](https://news.ycombinator.com/item?id=42911042) - [Waydroid – Android in a Linux container](https://waydro.id/)
* [2025-02-02, 19:00:10](https://news.ycombinator.com/item?id=42910829) - [The legacy of lies in Alzheimer's science](https://www.nytimes.com/2025/01/24/opinion/alzheimers-fraud-cure.html)
* [2025-02-02, 18:34:00](https://news.slashdot.org/story/25/02/02/1756215/remote-cybersecurity-scans-and-f-35-updates-a-us-navy-aircraft-carrier-gets-high-speed-internet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Remote Cybersecurity Scans and F-35 Updates: A US Navy Aircraft Carrier Gets High-Speed Internet](https://news.slashdot.org/story/25/02/02/1756215/remote-cybersecurity-scans-and-f-35-updates-a-us-navy-aircraft-carrier-gets-high-speed-internet?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 17:38:00](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss) - [Maker Resurrects Toshiba T1000 With a Raspberry Pi 4 and a Slew of Upgrades](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss)
* [2025-02-02, 17:34:00](https://tech.slashdot.org/story/25/02/02/1646255/hondas-new-us-factory-will-mass-produce-evs---but-can-also-build-gas-powered-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Honda's New US Factory Will Mass-Produce EVs - But Can Also Build Gas-Powered Cars](https://tech.slashdot.org/story/25/02/02/1646255/hondas-new-us-factory-will-mass-produce-evs---but-can-also-build-gas-powered-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 17:07:31](https://news.ycombinator.com/item?id=42909921) - [Everyone knows your location: tracking myself down through in-app ads](https://timsh.org/tracking-myself-down-through-in-app-ads/)
* [2025-02-02, 16:34:00](https://mobile.slashdot.org/story/25/02/02/167204/iphones-and-some-android-phones-will-support-starlink-direct-to-cell-coverage-in-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [IPhones and Some Android Phones Will Support Starlink Direct-to-Cell Coverage in US](https://mobile.slashdot.org/story/25/02/02/167204/iphones-and-some-android-phones-will-support-starlink-direct-to-cell-coverage-in-us?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 15:34:00](https://yro.slashdot.org/story/25/02/02/0434206/deepseek-ai-refuses-to-answer-questions-about-tiananmen-square-tank-man-photo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek AI Refuses To Answer Questions About Tiananmen Square 'Tank Man' Photo](https://yro.slashdot.org/story/25/02/02/0434206/deepseek-ai-refuses-to-answer-questions-about-tiananmen-square-tank-man-photo?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 15:19:56](https://lobste.rs/s/btjtkr/what_software_do_you_dream_about_do_not) - [What software do you dream about, but do not have time to code yourself?](https://lobste.rs/s/btjtkr/what_software_do_you_dream_about_do_not)
* [2025-02-02, 15:19:32](https://news.ycombinator.com/item?id=42909166) - [Ask HN: What is interviewing like now with everyone using AI?](https://news.ycombinator.com/item?id=42909166)
* [2025-02-02, 13:39:59](https://lobste.rs/s/jhweis/for_sale_binaries_compiled_from_hand) - [For Sale: Binaries Compiled From Hand-Crafted Artisanal Code](https://jasonbrownlee.me/blog/posts/hand-crafted-code/)
* [2025-02-02, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss) - [Trump Says Microsoft is in Contention to Buy TikTok](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss)
* [2025-02-02, 12:34:00](https://tech.slashdot.org/story/25/02/02/0357206/after-copilot-price-hike-for-microsoft-365-its-ending-its-free-vpn?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [After 'Copilot Price Hike' for Microsoft 365, It's Ending Its Free VPN](https://tech.slashdot.org/story/25/02/02/0357206/after-copilot-price-hike-for-microsoft-365-its-ending-its-free-vpn?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 11:46:22](https://news.ycombinator.com/item?id=42908061) - [Show HN: Lume – OS lightweight CLI for MacOS and Linux VMs on Apple Silicon](https://github.com/trycua/lume)
* [2025-02-02, 10:38:07](https://lobste.rs/s/ockgcp/unexpected_benefits_building_your_own) - [Unexpected Benefits of Building Your Own Tools](https://tiniuc.com/make-more-tools/)
* [2025-02-02, 10:32:40](https://news.ycombinator.com/item?id=42907766) - [Reverse-engineering and analysis of SanDisk High Endurance microSDXC card (2020)](https://ripitapart.com/2020/07/16/reverse-engineering-and-analysis-of-sandisk-high-endurance-microsdxc-card/)
* [2025-02-02, 09:44:08](https://lobste.rs/s/su4otl/safety_programming_languages_is_means) - [Safety in Programming Languages is a Means to an End](https://lewiscampbell.tech/blog/250202.html)
* [2025-02-02, 09:37:05](https://news.ycombinator.com/item?id=42907488) - [Analyzing the codebase of Caffeine, a high performance caching library](https://adriacabeza.github.io/2024/07/12/caffeine-cache.html)
* [2025-02-02, 08:34:00](https://science.slashdot.org/story/25/02/01/0559217/could-earthquake-sensors-help-detect-falling-space-junk?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Could Earthquake Sensors Help Detect Falling Space Junk?](https://science.slashdot.org/story/25/02/01/0559217/could-earthquake-sensors-help-detect-falling-space-junk?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 08:08:00](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss) - [DeepDive into DeepSeek](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss)
* [2025-02-02, 05:34:00](https://slashdot.org/story/25/02/02/0319217/openai-tests-its-ais-persuasiveness-by-comparing-it-to-reddit-posts?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Tests Its AI's Persuasiveness By Comparing It to Reddit Posts ](https://slashdot.org/story/25/02/02/0319217/openai-tests-its-ais-persuasiveness-by-comparing-it-to-reddit-posts?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 04:13:16](https://lobste.rs/s/xflmye/llms_harmful_technical_innovation) - [LLMs: harmful to technical innovation?](https://evanhahn.com/llms-and-technical-innovation/)
* [2025-02-02, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss) - [Fake Google Ads Trick Mac Users To Install Homebrew Malware](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss)
* [2025-02-02, 02:10:34](https://lobste.rs/s/mxouhv/3_tools_for_2025) - [3 Tools for 2025](http://yosemitesam.ch/3-tools-for-2025/)
* [2025-02-01, 22:42:00](https://soylentnews.org/article.pl?sid=25/02/01/1359255&from=rss) - [Phone Metadata Suddenly Not So ‘Harmless’ When It's the FBI's Data Being Harvested](https://soylentnews.org/article.pl?sid=25/02/01/1359255&from=rss)
* [2025-02-01, 18:51:31](https://news.ycombinator.com/item?id=42901007) - [Show HN: ESP32 RC Cars](https://github.com/mattsroufe/esp32_rc_cars)
* [2025-02-01, 17:57:00](https://soylentnews.org/article.pl?sid=25/02/01/1349238&from=rss) - [A Story About USB Floppy Drives](https://soylentnews.org/article.pl?sid=25/02/01/1349238&from=rss)
* [2025-02-01, 13:13:00](https://soylentnews.org/article.pl?sid=25/02/01/1314204&from=rss) - [Hubble's Largest Panorama Ever Showcases 200 Million Stars In The Andromeda Galaxy](https://soylentnews.org/article.pl?sid=25/02/01/1314204&from=rss)
* [2025-02-01, 08:22:00](https://soylentnews.org/article.pl?sid=25/01/31/1358254&from=rss) - [FCC Chair Nixes Plan to Boost Broadband Competition in Apartment Buildings](https://soylentnews.org/article.pl?sid=25/01/31/1358254&from=rss)
* [2025-02-01, 03:37:00](https://soylentnews.org/article.pl?sid=25/01/30/227223&from=rss) - [Revival of the Pebble Smartwatch](https://soylentnews.org/article.pl?sid=25/01/30/227223&from=rss)
* [2025-02-01, 03:07:35](https://news.ycombinator.com/item?id=42895265) - [Hytradboi 2025 Program](https://www.hytradboi.com/2025/)
* [2025-01-31, 22:57:00](https://soylentnews.org/article.pl?sid=25/01/30/2221238&from=rss) - [Chevron Joins The Race To Generate Power For AI](https://soylentnews.org/article.pl?sid=25/01/30/2221238&from=rss)
* [2025-01-31, 20:04:30](https://news.ycombinator.com/item?id=42891284) - [Global variables are not the problem](https://codestyleandtaste.com/globals-are-not-the-problem.html)
* [2025-01-31, 18:12:00](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss) - [AI Haters Build Tarpits to Trap and Trick AI Scrapers That Ignore Robots.Txt](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss)
* [2025-01-31, 16:37:36](https://news.ycombinator.com/item?id=42889148) - [High-Speed Face-Tracking for Dynamic Facial Projection Mapping](https://www.vision.ict.e.titech.ac.jp/projects/DFPM/)
* [2025-01-31, 13:31:00](https://soylentnews.org/article.pl?sid=25/01/31/0918230&from=rss) - [Tails Linux 6.11 Released: Critical Security Fixes](https://soylentnews.org/article.pl?sid=25/01/31/0918230&from=rss)
* [2025-01-31, 13:19:19](https://news.ycombinator.com/item?id=42887356) - [NASA's Asteroid Bennu Sample Reveals Mix of Life's Ingredients](https://www.nasa.gov/news-release/nasas-asteroid-bennu-sample-reveals-mix-of-lifes-ingredients/)
* [2025-01-31, 12:10:46](https://news.ycombinator.com/item?id=42886860) - ['It's buzzing here': Detroit's revival takes shape after decades of decay](https://www.theguardian.com/us-news/2025/jan/04/detroit-revitalization)
* [2025-01-31, 08:42:00](https://soylentnews.org/article.pl?sid=25/01/30/166219&from=rss) - [Humanity’s Last Exam, a Groundbreaking New Benchmark](https://soylentnews.org/article.pl?sid=25/01/30/166219&from=rss)
* [2025-01-31, 03:55:00](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss) - [OpenAI Launches Operator, an AI Agent That Can Operate Your Computer](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss)
* [2025-01-30, 23:11:00](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss) - [NASA Spacewalkers to Swab the ISS for Microbial Life](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss)
* [2025-01-30, 18:22:00](https://soylentnews.org/article.pl?sid=25/01/29/1217252&from=rss) - [Google Agrees to Crack Down on Fake Reviews for UK Businesses](https://soylentnews.org/article.pl?sid=25/01/29/1217252&from=rss)
* [2025-01-30, 16:27:15](https://news.ycombinator.com/item?id=42879323) - [Goose: An open-source, extensible AI agent that goes beyond code suggestions](https://block.github.io/goose/)
* [2025-01-30, 16:14:22](https://news.ycombinator.com/item?id=42879145) - [Dart Macros and Focus](https://shorebird.dev/blog/dart-macros/)
* [2025-01-30, 14:19:12](https://news.ycombinator.com/item?id=42877886) - [Why Durable Execution Should Be Lightweight](https://www.dbos.dev/blog/what-is-lightweight-durable-execution)
* [2025-01-30, 13:34:00](https://soylentnews.org/article.pl?sid=25/01/29/124257&from=rss) - [Baltic Undersea Cable Likely Damaged by External Force, Latvia Says](https://soylentnews.org/article.pl?sid=25/01/29/124257&from=rss)
* [2025-01-30, 08:29:00](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss) - [Mice with Two Dads have been Created Using CRISPR](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss)
* [2025-01-30, 03:45:00](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss) - [Complexity Physics Finds Crucial Tipping Points in Chess Games](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss)
