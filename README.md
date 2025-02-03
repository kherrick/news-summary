# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning

* [Show HN: Klarity – Open-source tool to analyze uncertainty/entropy in LLM output](https://github.com/klara-research/klarity) [(comments)](https://news.ycombinator.com/item?id=42918237)

* [AI Won The Beatles a Grammy 55 Years After They Broke Up](https://slashdot.org/story/25/02/03/1448210/ai-won-the-beatles-a-grammy-55-years-after-they-broke-up?utm_source=rss1.0mainlinkanon&utm_medium=feed) [(comments)](https://slashdot.org/story/25/02/03/1448210/ai-won-the-beatles-a-grammy-55-years-after-they-broke-up?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Google Stops Malicious Apps With 'AI-Powered Threat Detection' and Continuous Scanning](https://it.slashdot.org/story/25/02/03/040259/google-stops-malicious-apps-with-ai-powered-threat-detection-and-continuous-scanning?utm_source=rss1.0mainlinkanon&utm_medium=feed) [(comments)](https://it.slashdot.org/story/25/02/03/040259/google-stops-malicious-apps-with-ai-powered-threat-detection-and-continuous-scanning?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Software Development and Programming

* [Reverse Engineering Apple's typedstream Format](https://chrissardegna.com/blog/reverse-engineering-apples-typedstream-format/) [(comments)](https://news.ycombinator.com/item?id=42919221)

* [Decorator JITs: Python as a DSL](https://eli.thegreenplace.net/2025/decorator-jits-python-as-a-dsl/) [(comments)](https://news.ycombinator.com/item?id=42918846)

* [I Wrote a WebAssembly VM in C](https://irreducible.io/blog/my-wasm-interpreter/) [(comments)](https://news.ycombinator.com/item?id=42918524)

## Open Source and Community Projects

* [What are you doing this week?](https://lobste.rs/s/hflh6v/what_are_you_doing_this_week) [(comments)](https://lobste.rs/s/hflh6v/what_are_you_doing_this_week)

* [Five coding hats](https://dubroy.com/blog/five-coding-hats/) [(comments)](https://lobste.rs/s/tn67at/five_coding_hats)

* [A selfish personal argument for releasing code as Open Source](https://simonwillison.net/2025/Jan/24/selfish-open-source/) [(comments)](https://lobste.rs/s/e5tc2a/selfish_personal_argument_for_releasing)

## Tech Infrastructure and Innovation

* [Pinning Down "Future Is Not Send" Errors](https://emschwartz.me/pinning-down-future-is-not-send-errors/) [(comments)](https://lobste.rs/s/4vgdml/pinning_down_future_is_not_send_errors)

* [What's next for Flathub build infrastructure](https://docs.flathub.org/blog/flathub-build-infrastructure-revamp) [(comments)](https://lobste.rs/s/nfm3gu/what_s_next_for_flathub_build)

* [Using local translation models on Android](https://blog.davidv.dev/posts/mobile-translator/) [(comments)](https://lobste.rs/s/14jyfc/using_local_translation_models_on)

## Scientific Discoveries and Theoretical Explorations

* [When Bohr got it wrong: the impact of a little-known paper on quantum theory](https://physicsworld.com/a/when-bohr-got-it-wrong-the-impact-of-a-little-known-paper-on-the-development-of-quantum-theory/) [(comments)](https://news.ycombinator.com/item?id=42917434)

* [Emergence of a second law of thermodynamics in isolated quantum systems](https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.6.010309) [(comments)](https://news.ycombinator.com/item?id=42912412)

## Entrepreneurship and Creative Ventures

* [Show HN: Check Supply – Send Checks in the Mail](https://check.supply) [(comments)](https://news.ycombinator.com/item?id=42919408)

* [Show HN: I convert videos to printed flipbooks for living](https://www.videotoflip.com/) [(comments)](https://news.ycombinator.com/item?id=42918902)

## Historical and Cultural Insights

* [London Street Views (1840)](https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~323099~90092214:Composite--London-Street-Views-No--) [(comments)](https://news.ycombinator.com/item?id=42915231)

* [Polish city is using mussels to monitor water quality (2020)](https://www.awa.asn.au/resources/latest-news/technology/innovation/polish-city-using-mussels-monitor-water-quality) [(comments)](https://news.ycombinator.com/item?id=42915113)

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

* [2025-02-03, 15:52:34](https://news.ycombinator.com/item?id=42919408) - [Show HN: Check Supply – Send Checks in the Mail](https://check.supply)
* [2025-02-03, 15:48:00](https://news.slashdot.org/story/25/02/03/1549204/new-bill-aims-to-block-foreign-pirate-sites-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Bill Aims To Block Foreign Pirate Sites in the US](https://news.slashdot.org/story/25/02/03/1549204/new-bill-aims-to-block-foreign-pirate-sites-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 15:36:52](https://news.ycombinator.com/item?id=42919221) - [Reverse Engineering Apple's typedstream Format](https://chrissardegna.com/blog/reverse-engineering-apples-typedstream-format/)
* [2025-02-03, 15:32:01](https://lobste.rs/s/nfm3gu/what_s_next_for_flathub_build) - [What's next for Flathub build infrastructure](https://docs.flathub.org/blog/flathub-build-infrastructure-revamp)
* [2025-02-03, 15:09:55](https://news.ycombinator.com/item?id=42918902) - [Show HN: I convert videos to printed flipbooks for living](https://www.videotoflip.com/)
* [2025-02-03, 15:08:59](https://lobste.rs/s/4vgdml/pinning_down_future_is_not_send_errors) - [Pinning Down \"Future Is Not Send\" Errors](https://emschwartz.me/pinning-down-future-is-not-send-errors/)
* [2025-02-03, 15:03:36](https://news.ycombinator.com/item?id=42918846) - [Decorator JITs: Python as a DSL](https://eli.thegreenplace.net/2025/decorator-jits-python-as-a-dsl/)
* [2025-02-03, 14:47:00](https://slashdot.org/story/25/02/03/1448210/ai-won-the-beatles-a-grammy-55-years-after-they-broke-up?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Won The Beatles a Grammy 55 Years After They Broke Up](https://slashdot.org/story/25/02/03/1448210/ai-won-the-beatles-a-grammy-55-years-after-they-broke-up?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 14:30:11](https://news.ycombinator.com/item?id=42918524) - [I Wrote a WebAssembly VM in C](https://irreducible.io/blog/my-wasm-interpreter/)
* [2025-02-03, 14:00:00](https://tech.slashdot.org/story/25/02/03/1328242/metas-investment-in-virtual-reality-on-track-to-top-100-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta's Investment in Virtual Reality on Track To Top $100 Billion](https://tech.slashdot.org/story/25/02/03/1328242/metas-investment-in-virtual-reality-on-track-to-top-100-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 13:55:38](https://lobste.rs/s/hflh6v/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/hflh6v/what_are_you_doing_this_week)
* [2025-02-03, 13:53:48](https://news.ycombinator.com/item?id=42918237) - [Show HN: Klarity – Open-source tool to analyze uncertainty/entropy in LLM output](https://github.com/klara-research/klarity)
* [2025-02-03, 13:37:00](https://lobste.rs/s/u7sehz/optimizing_with_novel_calendrical) - [Optimizing with Novel Calendrical Algorithms](https://jhpratt.dev/blog/optimizing-with-novel-calendrical-algorithms/)
* [2025-02-03, 12:50:36](https://news.ycombinator.com/item?id=42917680) - [\"Anything threatening to be a subculture is commodified before it can walk\" (2014)](https://www.dezeen.com/2014/12/18/william-gibson-subculture-commodification-london-justin-mcguirk-opinion/)
* [2025-02-03, 12:50:19](https://lobste.rs/s/tn67at/five_coding_hats) - [Five coding hats](https://dubroy.com/blog/five-coding-hats/)
* [2025-02-03, 12:40:00](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss) - [About Zusie (Relay Based Computer)](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss)
* [2025-02-03, 12:24:42](https://lobste.rs/s/o8opng/patient_programmer) - [The Patient Programmer](https://dbushell.com/2025/01/31/the-patient-programmer/)
* [2025-02-03, 12:19:19](https://news.ycombinator.com/item?id=42917434) - [When Bohr got it wrong: the impact of a little-known paper on quantum theory](https://physicsworld.com/a/when-bohr-got-it-wrong-the-impact-of-a-little-known-paper-on-the-development-of-quantum-theory/)
* [2025-02-03, 11:32:50](https://lobste.rs/s/5snozq/perfect_is_enemy_good) - [Perfect is the enemy of good](https://medv.io/blog/perfect-is-the-enemy-of-good)
* [2025-02-03, 10:24:05](https://lobste.rs/s/kc63sr/rustsec_2025_0004_openssl_ssl_select_next) - [RUSTSEC-2025-0004: openssl: ssl::select_next_proto use after free](https://rustsec.org/advisories/RUSTSEC-2025-0004)
* [2025-02-03, 10:22:40](https://lobste.rs/s/e5tc2a/selfish_personal_argument_for_releasing) - [A selfish personal argument for releasing code as Open Source](https://simonwillison.net/2025/Jan/24/selfish-open-source/)
* [2025-02-03, 09:48:09](https://lobste.rs/s/14jyfc/using_local_translation_models_on) - [Using local translation models on Android](https://blog.davidv.dev/posts/mobile-translator/)
* [2025-02-03, 09:33:18](https://lobste.rs/s/fc8vhe/freedoms_for_who_revisited_briefly) - [freedoms-for-who, revisited briefly](https://lu.is/2025/02/freedoms-for-who-revisited-briefly/)
* [2025-02-03, 08:54:53](https://lobste.rs/s/e7clsc/nix_string_interpolation_directories) - [Nix: string interpolation of directories gone awry](https://fzakaria.com/2025/02/02/nix-string-interpolation-of-directories-gone-awry.html)
* [2025-02-03, 08:43:13](https://news.ycombinator.com/item?id=42916203) - [Ruby “Thread Contention” Is Simply GVL Queuing](https://island94.org/2025/01/ruby-thread-contention-simply-gvl-queuing)
* [2025-02-03, 08:34:00](https://news.slashdot.org/story/25/02/02/2257234/ubuntus-dev-discussions-will-move-from-irc-to-matrix?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ubuntu's Dev Discussions Will Move From IRC to Matrix](https://news.slashdot.org/story/25/02/02/2257234/ubuntus-dev-discussions-will-move-from-irc-to-matrix?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 07:51:00](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss) - [The Network State Coup is Happening Right Now](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss)
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
* [2025-02-03, 00:06:10](https://news.ycombinator.com/item?id=42913251) - [Introducing deep research](https://openai.com/index/introducing-deep-research/)
* [2025-02-02, 23:58:37](https://news.ycombinator.com/item?id=42913180) - [The Art of Dithering and Retro Shading for the Web (2024)](https://blog.maximeheckel.com/posts/the-art-of-dithering-and-retro-shading-web/)
* [2025-02-02, 23:45:16](https://lobste.rs/s/0enkqp/hollywood_split_computer_console_into) - [Hollywood: split a computer console into multiple panes of genuine technical melodrama](https://a.hollywood.computer/)
* [2025-02-02, 23:44:00](https://slashdot.org/story/25/02/02/2342245/openai-holds-surprise-livestream-to-announce-multi-step-deep-research-capability?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Holds Surprise Livestream to Announce Multi-Step 'Deep Research' Capability](https://slashdot.org/story/25/02/02/2342245/openai-holds-surprise-livestream-to-announce-multi-step-deep-research-capability?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 23:13:34](https://lobste.rs/s/gtpau6/it_utilities) - [it - utilities](https://github.com/theHamdiz/it)
* [2025-02-02, 22:27:54](https://news.ycombinator.com/item?id=42912515) - [GarminDB](https://github.com/tcgoetz/GarminDB)
* [2025-02-02, 22:23:00](https://soylentnews.org/article.pl?sid=25/02/01/1439213&from=rss) - [Infosec Was Trump's Lowest Priority, But He'll Change Bigly](https://soylentnews.org/article.pl?sid=25/02/01/1439213&from=rss)
* [2025-02-02, 22:19:10](https://news.ycombinator.com/item?id=42912438) - [F-strings for C++26 proposal [pdf]](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3412r0.pdf)
* [2025-02-02, 22:15:30](https://news.ycombinator.com/item?id=42912412) - [Emergence of a second law of thermodynamics in isolated quantum systems](https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.6.010309)
* [2025-02-02, 21:58:00](https://news.slashdot.org/story/25/02/02/2156241/mozilla-adapts-fakespot-into-an-ai-detecting-firefox-add-on?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mozilla Adapts 'Fakespot' Into an AI-Detecting Firefox Add-on](https://news.slashdot.org/story/25/02/02/2156241/mozilla-adapts-fakespot-into-an-ai-detecting-firefox-add-on?utm_source=rss1.0mainlinkanon&utm_medium=feed)
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
* [2025-02-02, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss) - [Trump Says Microsoft is in Contention to Buy TikTok](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss)
* [2025-02-02, 10:38:07](https://lobste.rs/s/ockgcp/unexpected_benefits_building_your_own) - [Unexpected Benefits of Building Your Own Tools](https://tiniuc.com/make-more-tools/)
* [2025-02-02, 09:44:08](https://lobste.rs/s/su4otl/safety_programming_languages_is_means) - [Safety in Programming Languages is a Means to an End](https://lewiscampbell.tech/blog/250202.html)
* [2025-02-02, 08:08:00](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss) - [DeepDive into DeepSeek](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss)
* [2025-02-02, 04:13:16](https://lobste.rs/s/xflmye/llms_harmful_technical_innovation) - [LLMs: harmful to technical innovation?](https://evanhahn.com/llms-and-technical-innovation/)
* [2025-02-02, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss) - [Fake Google Ads Trick Mac Users To Install Homebrew Malware](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss)
* [2025-02-02, 02:10:34](https://lobste.rs/s/mxouhv/3_tools_for_2025) - [3 Tools for 2025](http://yosemitesam.ch/3-tools-for-2025/)
* [2025-02-01, 22:42:00](https://soylentnews.org/article.pl?sid=25/02/01/1359255&from=rss) - [Phone Metadata Suddenly Not So ‘Harmless’ When It's the FBI's Data Being Harvested](https://soylentnews.org/article.pl?sid=25/02/01/1359255&from=rss)
* [2025-02-01, 17:57:00](https://soylentnews.org/article.pl?sid=25/02/01/1349238&from=rss) - [A Story About USB Floppy Drives](https://soylentnews.org/article.pl?sid=25/02/01/1349238&from=rss)
* [2025-02-01, 13:13:00](https://soylentnews.org/article.pl?sid=25/02/01/1314204&from=rss) - [Hubble's Largest Panorama Ever Showcases 200 Million Stars In The Andromeda Galaxy](https://soylentnews.org/article.pl?sid=25/02/01/1314204&from=rss)
* [2025-02-01, 08:22:00](https://soylentnews.org/article.pl?sid=25/01/31/1358254&from=rss) - [FCC Chair Nixes Plan to Boost Broadband Competition in Apartment Buildings](https://soylentnews.org/article.pl?sid=25/01/31/1358254&from=rss)
* [2025-02-01, 03:37:00](https://soylentnews.org/article.pl?sid=25/01/30/227223&from=rss) - [Revival of the Pebble Smartwatch](https://soylentnews.org/article.pl?sid=25/01/30/227223&from=rss)
* [2025-02-01, 02:25:39](https://news.ycombinator.com/item?id=42895049) - [Setting up a Linux writecache as a RAM disk](https://www.admin-magazine.com/HPC/Articles/Linux-Writecache)
* [2025-01-31, 22:57:00](https://soylentnews.org/article.pl?sid=25/01/30/2221238&from=rss) - [Chevron Joins The Race To Generate Power For AI](https://soylentnews.org/article.pl?sid=25/01/30/2221238&from=rss)
* [2025-01-31, 18:12:00](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss) - [AI Haters Build Tarpits to Trap and Trick AI Scrapers That Ignore Robots.Txt](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss)
* [2025-01-31, 16:37:36](https://news.ycombinator.com/item?id=42889148) - [High-Speed Face-Tracking for Dynamic Facial Projection Mapping](https://www.vision.ict.e.titech.ac.jp/projects/DFPM/)
* [2025-01-31, 13:31:00](https://soylentnews.org/article.pl?sid=25/01/31/0918230&from=rss) - [Tails Linux 6.11 Released: Critical Security Fixes](https://soylentnews.org/article.pl?sid=25/01/31/0918230&from=rss)
* [2025-01-31, 13:07:38](https://news.ycombinator.com/item?id=42887274) - [Building a Mesh Using Spherical Embedding](https://andrews.wiki/spherical-mesh)
* [2025-01-31, 08:42:00](https://soylentnews.org/article.pl?sid=25/01/30/166219&from=rss) - [Humanity’s Last Exam, a Groundbreaking New Benchmark](https://soylentnews.org/article.pl?sid=25/01/30/166219&from=rss)
* [2025-01-31, 03:57:10](https://news.ycombinator.com/item?id=42884579) - [How many ants live on Earth? (2022)](https://www.science.org/content/article/how-many-ants-live-earth)
* [2025-01-31, 03:55:00](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss) - [OpenAI Launches Operator, an AI Agent That Can Operate Your Computer](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss)
* [2025-01-30, 23:11:00](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss) - [NASA Spacewalkers to Swab the ISS for Microbial Life](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss)
* [2025-01-30, 23:06:42](https://news.ycombinator.com/item?id=42883139) - [Ask HN: Promoted, but Career Path Derailed](https://news.ycombinator.com/item?id=42883139)
* [2025-01-30, 18:42:00](https://news.ycombinator.com/item?id=42880740) - [Forgeries, Fakes, and Phantom Time](https://www.historytoday.com/archive/missing-pieces/forgeries-fakes-and-phantom-time)
* [2025-01-30, 18:22:00](https://soylentnews.org/article.pl?sid=25/01/29/1217252&from=rss) - [Google Agrees to Crack Down on Fake Reviews for UK Businesses](https://soylentnews.org/article.pl?sid=25/01/29/1217252&from=rss)
* [2025-01-30, 16:27:15](https://news.ycombinator.com/item?id=42879323) - [Goose: An open-source, extensible AI agent that goes beyond code suggestions](https://block.github.io/goose/)
* [2025-01-30, 14:19:12](https://news.ycombinator.com/item?id=42877886) - [Why Durable Execution Should Be Lightweight](https://www.dbos.dev/blog/what-is-lightweight-durable-execution)
* [2025-01-30, 13:34:00](https://soylentnews.org/article.pl?sid=25/01/29/124257&from=rss) - [Baltic Undersea Cable Likely Damaged by External Force, Latvia Says](https://soylentnews.org/article.pl?sid=25/01/29/124257&from=rss)
* [2025-01-30, 08:29:00](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss) - [Mice with Two Dads have been Created Using CRISPR](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss)
* [2025-01-30, 03:45:00](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss) - [Complexity Physics Finds Crucial Tipping Points in Chess Games](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss)
