# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [par: experimental concurrent language with an interactive playground](https://github.com/faiface/par-lang) ([Comments](https://lobste.rs/s/u4mgvq/par_experimental_concurrent_language))

* [Honda's New US Factory Will Mass-Produce EVs - But Can Also Build Gas-Powered Cars](https://tech.slashdot.org/story/25/02/02/1646255/hondas-new-us-factory-will-mass-produce-evs---but-can-also-build-gas-powered-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://tech.slashdot.org/story/25/02/02/1646255/hondas-new-us-factory-will-mass-produce-evs---but-can-also-build-gas-powered-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Show HN: Groundhog AI Spring API](https://groundhog-day.com/api) ([Comments](https://news.ycombinator.com/item?id=42910105))

## Cybersecurity and Privacy

* [Everyone knows your location: tracking myself down through in-app ads](https://timsh.org/tracking-myself-down-through-in-app-ads/) ([Comments](https://news.ycombinator.com/item?id=42909921))

* [Remote Cybersecurity Scans and F-35 Updates: A US Navy Aircraft Carrier Gets High-Speed Internet](https://news.slashdot.org/story/25/02/02/1756215/remote-cybersecurity-scans-and-f-35-updates-a-us-navy-aircraft-carrier-gets-high-speed-internet?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.slashdot.org/story/25/02/02/1756215/remote-cybersecurity-scans-and-f-35-updates-a-us-navy-aircraft-carrier-gets-high-speed-internet?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Fake Google Ads Trick Mac Users To Install Homebrew Malware](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss))

## Artificial Intelligence and Machine Learning

* [Reinforcement Learning: An Overview (December 2024)](https://arxiv.org/abs/2412.05265) ([Comments](https://news.ycombinator.com/item?id=42910028))

* [DeepSeek AI Refuses To Answer Questions About Tiananmen Square 'Tank Man' Photo](https://yro.slashdot.org/story/25/02/02/0434206/deepseek-ai-refuses-to-answer-questions-about-tiananmen-square-tank-man-photo?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://yro.slashdot.org/story/25/02/02/0434206/deepseek-ai-refuses-to-answer-questions-about-tiananmen-square-tank-man-photo?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [LLMs: harmful to technical innovation?](https://evanhahn.com/llms-and-technical-innovation/) ([Comments](https://lobste.rs/s/xflmye/llms_harmful_technical_innovation))

## Programming and Tooling

* [Mutool – all purpose tool for dealing with PDF files](https://www.mankier.com/1/mutool) ([Comments](https://news.ycombinator.com/item?id=42910013))

* [5 Python Details and their Consequences](https://youtu.be/t863QfAOmlY) ([Comments](https://lobste.rs/s/nsnkts/5_python_details_their_consequences))

* [Unexpected Benefits of Building Your Own Tools](https://tiniuc.com/make-more-tools/) ([Comments](https://lobste.rs/s/ockgcp/unexpected_benefits_building_your_own))

## Miscellaneous

* [Maker Resurrects Toshiba T1000 With a Raspberry Pi 4 and a Slew of Upgrades](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss))

* [For Sale: Binaries Compiled From Hand-Crafted Artisanal Code](https://jasonbrownlee.me/blog/posts/hand-crafted-code/) ([Comments](https://lobste.rs/s/jhweis/for_sale_binaries_compiled_from_hand))

* [Life Is More Than an Engineering Problem – Interview with Ted Chiang](https://lareviewofbooks.org/article/life-is-more-than-an-engineering-problem/) ([Comments](https://news.ycombinator.com/item?id=42907268))

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

* [2025-02-02, 18:39:35](https://lobste.rs/s/u4mgvq/par_experimental_concurrent_language) - [par: experimental concurrent language with an interactive playground](https://github.com/faiface/par-lang)
* [2025-02-02, 18:34:00](https://news.slashdot.org/story/25/02/02/1756215/remote-cybersecurity-scans-and-f-35-updates-a-us-navy-aircraft-carrier-gets-high-speed-internet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Remote Cybersecurity Scans and F-35 Updates: A US Navy Aircraft Carrier Gets High-Speed Internet](https://news.slashdot.org/story/25/02/02/1756215/remote-cybersecurity-scans-and-f-35-updates-a-us-navy-aircraft-carrier-gets-high-speed-internet?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 18:26:27](https://lobste.rs/s/rpf1rn/committees_paper) - [Committees Paper](https://www.melconway.com/Home/Committees_Paper.html)
* [2025-02-02, 17:38:00](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss) - [Maker Resurrects Toshiba T1000 With a Raspberry Pi 4 and a Slew of Upgrades](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss)
* [2025-02-02, 17:34:00](https://tech.slashdot.org/story/25/02/02/1646255/hondas-new-us-factory-will-mass-produce-evs---but-can-also-build-gas-powered-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Honda's New US Factory Will Mass-Produce EVs - But Can Also Build Gas-Powered Cars](https://tech.slashdot.org/story/25/02/02/1646255/hondas-new-us-factory-will-mass-produce-evs---but-can-also-build-gas-powered-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 17:29:24](https://news.ycombinator.com/item?id=42910105) - [Show HN: Groundhog AI Spring API](https://groundhog-day.com/api)
* [2025-02-02, 17:20:21](https://news.ycombinator.com/item?id=42910028) - [Reinforcement Learning: An Overview (December 2024)](https://arxiv.org/abs/2412.05265)
* [2025-02-02, 17:18:45](https://news.ycombinator.com/item?id=42910013) - [Mutool – all purpose tool for dealing with PDF files](https://www.mankier.com/1/mutool)
* [2025-02-02, 17:07:31](https://news.ycombinator.com/item?id=42909921) - [Everyone knows your location: tracking myself down through in-app ads](https://timsh.org/tracking-myself-down-through-in-app-ads/)
* [2025-02-02, 16:36:41](https://lobste.rs/s/nsnkts/5_python_details_their_consequences) - [5 Python Details and their Consequences](https://youtu.be/t863QfAOmlY)
* [2025-02-02, 16:34:00](https://mobile.slashdot.org/story/25/02/02/167204/iphones-and-some-android-phones-will-support-starlink-direct-to-cell-coverage-in-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [IPhones and Some Android Phones Will Support Starlink Direct-to-Cell Coverage in US](https://mobile.slashdot.org/story/25/02/02/167204/iphones-and-some-android-phones-will-support-starlink-direct-to-cell-coverage-in-us?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 16:14:49](https://news.ycombinator.com/item?id=42909530) - [Sniffnet – monitor your Internet traffic](https://github.com/GyulyVGC/sniffnet)
* [2025-02-02, 15:34:00](https://yro.slashdot.org/story/25/02/02/0434206/deepseek-ai-refuses-to-answer-questions-about-tiananmen-square-tank-man-photo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek AI Refuses To Answer Questions About Tiananmen Square 'Tank Man' Photo](https://yro.slashdot.org/story/25/02/02/0434206/deepseek-ai-refuses-to-answer-questions-about-tiananmen-square-tank-man-photo?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 15:19:56](https://lobste.rs/s/btjtkr/what_software_do_you_dream_about_do_not) - [What software do you dream about, but do not have time to code yourself?](https://lobste.rs/s/btjtkr/what_software_do_you_dream_about_do_not)
* [2025-02-02, 13:39:59](https://lobste.rs/s/jhweis/for_sale_binaries_compiled_from_hand) - [For Sale: Binaries Compiled From Hand-Crafted Artisanal Code](https://jasonbrownlee.me/blog/posts/hand-crafted-code/)
* [2025-02-02, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss) - [Trump Says Microsoft is in Contention to Buy TikTok](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss)
* [2025-02-02, 12:34:00](https://tech.slashdot.org/story/25/02/02/0357206/after-copilot-price-hike-for-microsoft-365-its-ending-its-free-vpn?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [After 'Copilot Price Hike' for Microsoft 365, It's Ending Its Free VPN](https://tech.slashdot.org/story/25/02/02/0357206/after-copilot-price-hike-for-microsoft-365-its-ending-its-free-vpn?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 12:15:50](https://lobste.rs/s/yhixpo/how_train_ai_image_model_on_yourself) - [How to Train an AI Image Model on Yourself](https://www.coryzue.com/writing/make-ai-pictures-of-yourself/)
* [2025-02-02, 11:46:22](https://news.ycombinator.com/item?id=42908061) - [Show HN: Lume – OS lightweight CLI for MacOS & Linux VMs on Apple Silicon.](https://github.com/trycua/lume)
* [2025-02-02, 10:47:11](https://lobste.rs/s/3nmvvr/eat_your_greens_philosophy_for_language) - [Eat your greens - A philosophy for language design](https://www.youtube.com/watch?v=bzUXK5VBbXc)
* [2025-02-02, 10:38:07](https://lobste.rs/s/ockgcp/unexpected_benefits_building_your_own) - [Unexpected Benefits of Building Your Own Tools](https://tiniuc.com/make-more-tools/)
* [2025-02-02, 10:32:40](https://news.ycombinator.com/item?id=42907766) - [Reverse-engineering and analysis of SanDisk High Endurance microSDXC card (2020)](https://ripitapart.com/2020/07/16/reverse-engineering-and-analysis-of-sandisk-high-endurance-microsdxc-card/)
* [2025-02-02, 10:32:30](https://news.ycombinator.com/item?id=42907765) - [Show HN: Modest – musical harmony library for Lua](https://github.com/esbudylin/modest)
* [2025-02-02, 10:08:43](https://lobste.rs/s/4verux/proposal_sync_v2) - [proposal: sync/v2](https://github.com/golang/go/issues/71076)
* [2025-02-02, 10:02:54](https://lobste.rs/s/cl8ldl/building_running_mariadb_on_mac) - [Building and Running MariaDB on mac](https://hp77-creator.github.io/blogs/building-understanding-mariaDB)
* [2025-02-02, 09:44:08](https://lobste.rs/s/su4otl/safety_programming_languages_is_means) - [Safety in Programming Languages is a Means to an End](https://lewiscampbell.tech/blog/250202.html)
* [2025-02-02, 09:37:05](https://news.ycombinator.com/item?id=42907488) - [Analyzing the codebase of Caffeine: a high performance caching library](https://adriacabeza.github.io/2024/07/12/caffeine-cache.html)
* [2025-02-02, 08:53:58](https://news.ycombinator.com/item?id=42907268) - [Life Is More Than an Engineering Problem – Interview with Ted Chiang](https://lareviewofbooks.org/article/life-is-more-than-an-engineering-problem/)
* [2025-02-02, 08:34:00](https://science.slashdot.org/story/25/02/01/0559217/could-earthquake-sensors-help-detect-falling-space-junk?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Could Earthquake Sensors Help Detect Falling Space Junk?](https://science.slashdot.org/story/25/02/01/0559217/could-earthquake-sensors-help-detect-falling-space-junk?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 08:31:12](https://news.ycombinator.com/item?id=42907139) - [Fixing Left and Mutual Recursions in Grammars](https://brightprogrammer.in/posts/fixing-recursions-in-grammar/)
* [2025-02-02, 08:08:00](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss) - [DeepDive into DeepSeek](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss)
* [2025-02-02, 05:35:16](https://lobste.rs/s/burhgj/you_re_missing_your_near_misses) - [You’re missing your near misses](https://surfingcomplexity.blog/2025/02/01/youre-missing-your-near-misses/)
* [2025-02-02, 05:34:00](https://slashdot.org/story/25/02/02/0319217/openai-tests-its-ais-persuasiveness-by-comparing-it-to-reddit-posts?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Tests Its AI's Persuasiveness By Comparing It to Reddit Posts ](https://slashdot.org/story/25/02/02/0319217/openai-tests-its-ais-persuasiveness-by-comparing-it-to-reddit-posts?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 04:13:16](https://lobste.rs/s/xflmye/llms_harmful_technical_innovation) - [LLMs: harmful to technical innovation?](https://evanhahn.com/llms-and-technical-innovation/)
* [2025-02-02, 04:01:50](https://lobste.rs/s/xjxdr2/tai64_wild_is_sometimes_not_tai) - [TAI64 in the wild is (sometimes) not TAI](https://blog.dave.tf/post/tai64-is-not-tai/)
* [2025-02-02, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss) - [Fake Google Ads Trick Mac Users To Install Homebrew Malware](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss)
* [2025-02-02, 03:21:07](https://news.ycombinator.com/item?id=42905453) - [Recent results show that LLMs struggle with compositional tasks](https://www.quantamagazine.org/chatbot-software-begins-to-face-fundamental-limitations-20250131/)
* [2025-02-02, 03:11:56](https://lobste.rs/s/un0fut/freebsd_alongside_windows) - [FreeBSD Alongside Windows](https://vermaden.wordpress.com/2025/02/02/freebsd-alongside-windows/)
* [2025-02-02, 02:36:00](https://developers.slashdot.org/story/25/02/02/0233216/slashdot-asks-do-you-remember-your-high-schools-computer-room?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Slashdot Asks:  Do You Remember Your High School's 'Computer Room'?](https://developers.slashdot.org/story/25/02/02/0233216/slashdot-asks-do-you-remember-your-high-schools-computer-room?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 02:10:34](https://lobste.rs/s/mxouhv/3_tools_for_2025) - [3 Tools for 2025](http://yosemitesam.ch/3-tools-for-2025/)
* [2025-02-02, 02:08:16](https://lobste.rs/s/rfcmwu/waydroid_android_linux_container) - [Waydroid - Android in a Linux container](https://waydro.id/)
* [2025-02-02, 00:59:00](https://hardware.slashdot.org/story/25/02/01/2235213/one-blogger-helped-spark-nvidias-600b-stock-collapse?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [One Blogger Helped Spark NVIDIA's $600B Stock Collapse](https://hardware.slashdot.org/story/25/02/01/2235213/one-blogger-helped-spark-nvidias-600b-stock-collapse?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 23:59:00](https://yro.slashdot.org/story/25/02/01/2356252/us-blocks-open-source-help-from-these-countries?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Blocks Open Source 'Help' From These Countries](https://yro.slashdot.org/story/25/02/01/2356252/us-blocks-open-source-help-from-these-countries?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 22:42:00](https://soylentnews.org/article.pl?sid=25/02/01/1359255&from=rss) - [Phone Metadata Suddenly Not So ‘Harmless’ When It's the FBI's Data Being Harvested](https://soylentnews.org/article.pl?sid=25/02/01/1359255&from=rss)
* [2025-02-01, 22:12:00](https://science.slashdot.org/story/25/02/01/0632248/americas-fda-warns-about-backdoor-found-in-chinese-companys-patient-monitors?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [America's FDA Warns About Backdoor Found in Chinese Company's Patient Monitors](https://science.slashdot.org/story/25/02/01/0632248/americas-fda-warns-about-backdoor-found-in-chinese-companys-patient-monitors?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 22:11:45](https://news.ycombinator.com/item?id=42902936) - [RLHF Book](https://rlhfbook.com/)
* [2025-02-01, 21:46:16](https://news.ycombinator.com/item?id=42902691) - [Macrodata Refinement](https://lumon-industries.com/)
* [2025-02-01, 21:12:37](https://news.ycombinator.com/item?id=42902395) - [A bookmarklet to kill sticky headers (2013)](https://alisdair.mcdiarmid.org/kill-sticky-headers/)
* [2025-02-01, 21:09:00](https://it.slashdot.org/story/25/02/01/0659255/sensitive-deepseek-data-was-exposed-to-the-web-cybersecurity-firm-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sensitive DeepSeek Data Was Exposed to the Web, Cybersecurity Firm Says](https://it.slashdot.org/story/25/02/01/0659255/sensitive-deepseek-data-was-exposed-to-the-web-cybersecurity-firm-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 20:09:00](https://it.slashdot.org/story/25/02/01/207203/malicious-pdf-links-hidden-in-text-message-scam-impersonating-us-postal-service?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Malicious PDF Links Hidden in Text Message Scam Impersonating US Postal Service](https://it.slashdot.org/story/25/02/01/207203/malicious-pdf-links-hidden-in-text-message-scam-impersonating-us-postal-service?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 19:57:37](https://news.ycombinator.com/item?id=42901616) - [Python 3, Pygame, and Debian Bookworm on the Miyoo A30](https://www.jtolio.com/2025/02/py3-pygame-miyoo-a30/)
* [2025-02-01, 19:54:59](https://lobste.rs/s/u292ym/python_3_pygame_debian_bookworm_on_miyoo) - [Python 3, Pygame, and Debian Bookworm on the Miyoo A30](https://www.jtolio.com/2025/02/py3-pygame-miyoo-a30/)
* [2025-02-01, 19:11:26](https://news.ycombinator.com/item?id=42901184) - [The origin and unexpected evolution of the word \"mainframe\"](https://www.righto.com/2025/02/origin-of-mainframe-term.html)
* [2025-02-01, 19:10:06](https://lobste.rs/s/nbmpqe/origin_unexpected_evolution_word) - [The origin and unexpected evolution of the word \"mainframe\"](https://www.righto.com/2025/02/origin-of-mainframe-term.html)
* [2025-02-01, 18:51:31](https://news.ycombinator.com/item?id=42901007) - [Show HN: ESP32 RC Cars](https://github.com/mattsroufe/esp32_rc_cars)
* [2025-02-01, 18:34:00](https://hardware.slashdot.org/story/25/02/01/1831253/california-built-the-worlds-largest-solar-power-tower-plant-now-it-may-close?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [California Built the World's Largest Solar Power Tower Plant.  Now It May Close](https://hardware.slashdot.org/story/25/02/01/1831253/california-built-the-worlds-largest-solar-power-tower-plant-now-it-may-close?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 17:57:00](https://soylentnews.org/article.pl?sid=25/02/01/1349238&from=rss) - [A Story About USB Floppy Drives](https://soylentnews.org/article.pl?sid=25/02/01/1349238&from=rss)
* [2025-02-01, 17:34:00](https://tech.slashdot.org/story/25/02/01/0749206/bluesky-grows-to-30-million-users-threads-adds-20-million-more-just-in-january?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bluesky Grows to 30 Million Users. Threads Adds 20 Million More Just in January](https://tech.slashdot.org/story/25/02/01/0749206/bluesky-grows-to-30-million-users-threads-adds-20-million-more-just-in-january?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 16:46:01](https://news.ycombinator.com/item?id=42899713) - [Bzip3: A spiritual successor to BZip2](https://github.com/kspalaiologos/bzip3)
* [2025-02-01, 16:02:27](https://lobste.rs/s/mob1j1/extending_coreutils_project_rewriting) - [Extending the Coreutils project - Rewriting base tools in Rust](https://uutils.github.io/blog/2025-02-extending/)
* [2025-02-01, 15:59:17](https://lobste.rs/s/eazsn7/next_chapter_swift_build_technologies) - [The Next Chapter in Swift Build Technologies](https://swift.org/blog/the-next-chapter-in-swift-build-technologies/)
* [2025-02-01, 15:06:18](https://lobste.rs/s/si9lwe/using_serde_quote_syn_proc_macro2) - [Using serde, quote, syn and proc_macro2 to implement the Kafka protocol sans-io in Rust](https://blog.tansu.io/articles/serde-kafka-protocol)
* [2025-02-01, 14:40:39](https://lobste.rs/s/crxqgn/chatbot_software_begins_face) - [Chatbot Software Begins to Face Fundamental Limitations](https://www.quantamagazine.org/chatbot-software-begins-to-face-fundamental-limitations-20250131/)
* [2025-02-01, 13:13:00](https://soylentnews.org/article.pl?sid=25/02/01/1314204&from=rss) - [Hubble's Largest Panorama Ever Showcases 200 Million Stars In The Andromeda Galaxy](https://soylentnews.org/article.pl?sid=25/02/01/1314204&from=rss)
* [2025-02-01, 13:08:08](https://lobste.rs/s/sv1ulo/hell_is_overconfident_developers) - [Hell Is Overconfident Developers Writing Encryption Code](https://soatok.blog/2025/01/31/hell-is-overconfident-developers-writing-encryption-code/)
* [2025-02-01, 10:59:56](https://lobste.rs/s/mcj6ic/visualizing_all_books_world_isbn_space) - [Visualizing all books of the world in ISBN-Space](https://phiresky.github.io/blog/2025/visualizing-all-books-in-isbn-space/)
* [2025-02-01, 09:27:06](https://news.ycombinator.com/item?id=42897120) - [Visualizing all books of the world in ISBN-Space](https://phiresky.github.io/blog/2025/visualizing-all-books-in-isbn-space/)
* [2025-02-01, 08:22:00](https://soylentnews.org/article.pl?sid=25/01/31/1358254&from=rss) - [FCC Chair Nixes Plan to Boost Broadband Competition in Apartment Buildings](https://soylentnews.org/article.pl?sid=25/01/31/1358254&from=rss)
* [2025-02-01, 03:37:00](https://soylentnews.org/article.pl?sid=25/01/30/227223&from=rss) - [Revival of the Pebble Smartwatch](https://soylentnews.org/article.pl?sid=25/01/30/227223&from=rss)
* [2025-01-31, 22:57:00](https://soylentnews.org/article.pl?sid=25/01/30/2221238&from=rss) - [Chevron Joins The Race To Generate Power For AI](https://soylentnews.org/article.pl?sid=25/01/30/2221238&from=rss)
* [2025-01-31, 18:12:00](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss) - [AI Haters Build Tarpits to Trap and Trick AI Scrapers That Ignore Robots.Txt](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss)
* [2025-01-31, 13:31:00](https://soylentnews.org/article.pl?sid=25/01/31/0918230&from=rss) - [Tails Linux 6.11 Released: Critical Security Fixes](https://soylentnews.org/article.pl?sid=25/01/31/0918230&from=rss)
* [2025-01-31, 08:42:00](https://soylentnews.org/article.pl?sid=25/01/30/166219&from=rss) - [Humanity’s Last Exam, a Groundbreaking New Benchmark](https://soylentnews.org/article.pl?sid=25/01/30/166219&from=rss)
* [2025-01-31, 03:55:00](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss) - [OpenAI Launches Operator, an AI Agent That Can Operate Your Computer](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss)
* [2025-01-30, 23:12:08](https://news.ycombinator.com/item?id=42883178) - [The PETG adhesive test [video]](https://www.youtube.com/watch?v=tyo8vLorpZo)
* [2025-01-30, 23:11:00](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss) - [NASA Spacewalkers to Swab the ISS for Microbial Life](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss)
* [2025-01-30, 19:40:33](https://news.ycombinator.com/item?id=42881367) - [Archivists work to save disappearing data.gov datasets](https://www.404media.co/archivists-work-to-identify-and-save-the-thousands-of-datasets-disappearing-from-data-gov/)
* [2025-01-30, 18:25:22](https://news.ycombinator.com/item?id=42880585) - [A Rust procedural language handler for PostgreSQL](https://github.com/tcdi/plrust)
* [2025-01-30, 18:22:00](https://soylentnews.org/article.pl?sid=25/01/29/1217252&from=rss) - [Google Agrees to Crack Down on Fake Reviews for UK Businesses](https://soylentnews.org/article.pl?sid=25/01/29/1217252&from=rss)
* [2025-01-30, 18:02:51](https://news.ycombinator.com/item?id=42880317) - [Repeat Offenders May Be Responsible for Many Shark Attacks](https://nautil.us/the-problem-with-problem-sharks-1186682/)
* [2025-01-30, 14:21:20](https://news.ycombinator.com/item?id=42877910) - [String of recent killings linked to Bay Area 'Zizians'](https://www.sfgate.com/bayarea/article/bay-area-death-cult-zizian-murders-20064333.php)
* [2025-01-30, 13:34:00](https://soylentnews.org/article.pl?sid=25/01/29/124257&from=rss) - [Baltic Undersea Cable Likely Damaged by External Force, Latvia Says](https://soylentnews.org/article.pl?sid=25/01/29/124257&from=rss)
* [2025-01-30, 08:29:00](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss) - [Mice with Two Dads have been Created Using CRISPR](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss)
* [2025-01-30, 03:45:00](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss) - [Complexity Physics Finds Crucial Tipping Points in Chess Games](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss)
* [2025-01-29, 23:02:00](https://soylentnews.org/article.pl?sid=25/01/28/0319228&from=rss) - [Millions of Subarus Could be Remotely Unlocked, Tracked Due to Security Flaws](https://soylentnews.org/article.pl?sid=25/01/28/0319228&from=rss)
* [2025-01-29, 19:51:12](https://news.ycombinator.com/item?id=42870216) - [Inheritance and Subtyping](https://blog.frankel.ch/on-inheritance/)
* [2025-01-29, 19:16:42](https://news.ycombinator.com/item?id=42869730) - [AstroForge selects target for \"high risk, seat of the pants\" asteroid mission](https://arstechnica.com/space/2025/01/astroforge-selects-target-for-high-risk-seat-of-the-pants-asteroid-mission/)
* [2025-01-29, 18:17:00](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss) - [Linux is the Name That Shall Not be Spoken at Facebook](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss)
* [2025-01-29, 14:59:23](https://news.ycombinator.com/item?id=42865611) - [Enhancing your MIDI devices with Perl](https://fuzzix.org/enhancing-midi-hardware-with-perl)
* [2025-01-29, 13:33:00](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss) - [Backdoor Infecting VPNs Used “Magic Packets” for Stealth and Security](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss)
* [2025-01-29, 12:42:25](https://news.ycombinator.com/item?id=42864221) - [The Doctor Who Drank Infectious Broth and Solved a Medical Mystery (2010)](https://www.discovermagazine.com/health/the-doctor-who-drank-infectious-broth-gave-himself-an-ulcer-and-solved-a-medical-mystery)
* [2025-01-29, 08:49:00](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss) - [How Good is Tesla Full Self Driving, by a Motor Trend Road Tester](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss)
* [2025-01-29, 04:03:00](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss) - [5 Super Creepy New Technologies That Should Chill All Of Us To The Core](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss)
* [2025-01-29, 01:00:03](https://news.ycombinator.com/item?id=42860172) - [LMD: A new, less wasteful metal 3D printing technique](https://www.core77.com/posts/135194/LMD-A-New-Less-Wasteful-Metal-3D-Printing-Technique)
