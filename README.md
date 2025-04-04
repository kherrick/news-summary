# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Developments

* [Microsoft Employee Disrupts 50th Anniversary and Calls AI Boss 'War Profiteer'](https://it.slashdot.org/story/25/04/04/1841244/microsoft-employee-disrupts-50th-anniversary-and-calls-ai-boss-war-profiteer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A dramatic confrontation during Microsoft's anniversary event, reflecting tensions around AI ethics and corporate roles.

* [Hackers Strike Australia's Largest Pension Funds in Coordinated Attacks](https://it.slashdot.org/story/25/04/04/174220/hackers-strike-australias-largest-pension-funds-in-coordinated-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Major cybersecurity breaches targeting financial institutions showcase vulnerabilities in digital infrastructure.

* [AI Could Affect 40% of Jobs and Widen Inequality Between Nations, UN Warns](https://slashdot.org/story/25/04/04/1512247/ai-could-affect-40-of-jobs-and-widen-inequality-between-nations-un-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A UN report outlining potential socioeconomic disruptions spurred by AI.

* [DeepMind Details All the Ways AGI Could Wreck the World](https://tech.slashdot.org/story/25/04/03/2236242/deepmind-details-all-the-ways-agi-could-wreck-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - DeepMind explores scenarios revealing risks inherent in artificial general intelligence.

## Creative and Philosophical Explorations

* [A Philosophy of Software Design](https://milkov.tech/assets/psd.pdf) - A structured perspective on balancing complexity and simplicity in modern software development.

* [Syntactic Musings on View Types](https://blog.yoshuawuyts.com/syntactic-musings-on-view-types) - A deep dive into the inner workings of view types and their implications in programming.

* [The Wizard and His Shell](https://terminal.click/posts/2025/04/the-wizard-and-his-shell/) - A whimsical take on the interplay of codecraft and tool mastery.

* [Doing Evil Things with Generative AI and Recipes](https://www.raymondcamden.com/2025/02/06/doing-evil-things-with-generative-ai-and-recipes) - Thought-provoking exploration of generative AI misuse paired with culinary creativity.

## Policies and Economic Shifts

* [China Imposes 34% Reciprocal Tariffs on Imports of US Goods](https://news.slashdot.org/story/25/04/04/1319228/china-imposes-34-reciprocal-tariffs-on-imports-of-us-goods?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An analysis of escalating trade tensions and their economic consequences.

* [Executive Order Aims to Make Mining the Primary Use of Public Lands at ‘As Many Sites As Possible’](https://soylentnews.org/article.pl?sid=25/04/03/1319224&amp;from=rss) - US policy shifts with significant implications for environmental and economic debates.

* [The Curse of Ayn Rand's Heir](https://www.theatlantic.com/ideas/archive/2025/03/ayn-rand-peikoff-inheritance-battle/682219/) - A legal battle entwining financial inheritance and philosophical legacies.

## Notable Industry and Product Updates

* [Nvidia adds native Python support to CUDA](https://thenewstack.io/nvidia-finally-adds-native-python-support-to-cuda/) - A major update simplifying Python integration for GPU-based development.

* [Coreboot 25.03 Released With Support For 22 More Motherboards](https://hardware.slashdot.org/story/25/04/04/0718233/coreboot-2503-released-with-support-for-22-more-motherboards?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Open-source firmware enhancements boosting compatibility and performance.

* [Massive Expansion of Italy's Piracy Shield Underway](https://yro.slashdot.org/story/25/04/03/2257221/massive-expansion-of-italys-piracy-shield-underway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Strengthening intellectual property protection with new enforcement mechanisms.

* [Clawtype - a custom wearable chorded keyboard & mouse](https://github.com/akavel/clawtype) - Innovative input device bringing new possibilities to compact and wearable tech.

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

* [2025-04-04, 18:41:00](https://it.slashdot.org/story/25/04/04/1841244/microsoft-employee-disrupts-50th-anniversary-and-calls-ai-boss-war-profiteer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Employee Disrupts 50th Anniversary and Calls AI Boss &apos;War Profiteer&apos;](https://it.slashdot.org/story/25/04/04/1841244/microsoft-employee-disrupts-50th-anniversary-and-calls-ai-boss-war-profiteer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 18:40:27](https://lobste.rs/s/cl8j5s/philosophy_software_design) - [A Philosophy of Software Design](https://milkov.tech/assets/psd.pdf)
* [2025-04-04, 18:29:21](https://news.ycombinator.com/item?id=43586113) - [Yoko: A Biography](https://www.newstatesman.com/culture/books/book-of-the-day/2025/03/the-yoko-ono-problem)
* [2025-04-04, 18:08:42](https://lobste.rs/s/lwkpnr/doing_evil_things_with_generative_ai) - [Doing Evil Things with Generative AI and Recipes](https://www.raymondcamden.com/2025/02/06/doing-evil-things-with-generative-ai-and-recipes)
* [2025-04-04, 17:59:04](https://lobste.rs/s/1yucfb/opinionated_html_serializer_for_php_8_4) - [An opinionated HTML Serializer for PHP 8.4](https://shkspr.mobi/blog/2025/04/an-opinionated-html-serializer-for-php-8-4/)
* [2025-04-04, 17:53:00](https://soylentnews.org/article.pl?sid=25/04/03/1319224&amp;from=rss) - [Executive Order Aims to Make Mining the Primary Use of Public Lands at ‘As Many Sites As Possible’](https://soylentnews.org/article.pl?sid=25/04/03/1319224&amp;from=rss)
* [2025-04-04, 17:41:42](https://news.ycombinator.com/item?id=43585587) - [YIMBYism as Industrial Policy](https://www.slowboring.com/p/yimbyism-as-industrial-policy)
* [2025-04-04, 17:24:34](https://lobste.rs/s/6rnhbq/syntactic_musings_on_view_types) - [Syntactic Musings on View Types](https://blog.yoshuawuyts.com/syntactic-musings-on-view-types)
* [2025-04-04, 17:22:06](https://news.ycombinator.com/item?id=43585354) - [CINC Is Not Chef](https://cinc.sh/)
* [2025-04-04, 17:03:00](https://it.slashdot.org/story/25/04/04/174220/hackers-strike-australias-largest-pension-funds-in-coordinated-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Strike Australia&apos;s Largest Pension Funds in Coordinated Attacks](https://it.slashdot.org/story/25/04/04/174220/hackers-strike-australias-largest-pension-funds-in-coordinated-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 17:00:40](https://news.ycombinator.com/item?id=43585103) - [Thunder Compute (YC S24) is hiring a GPU systems engineer](https://www.ycombinator.com/companies/thunder-compute/jobs/fRSS8JQ-systems-engineer)
* [2025-04-04, 16:23:42](https://news.ycombinator.com/item?id=43584663) - [The Curse of Ayn Rand&apos;s Heir](https://www.theatlantic.com/ideas/archive/2025/03/ayn-rand-peikoff-inheritance-battle/682219/)
* [2025-04-04, 16:15:48](https://news.ycombinator.com/item?id=43584547) - [Ask HN: As a Founder, is this business model compelling?](https://news.ycombinator.com/item?id=43584547)
* [2025-04-04, 16:13:42](https://lobste.rs/s/o0xmgd/clawtype_custom_wearable_chorded) - [Clawtype - a custom wearable chorded keyboard &amp; mouse](https://github.com/akavel/clawtype)
* [2025-04-04, 16:06:00](https://it.slashdot.org/story/25/04/04/166231/windows-11-poised-to-beat-10-mostly-because-it-has-to?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 11 Poised To Beat 10, Mostly Because It Has To](https://it.slashdot.org/story/25/04/04/166231/windows-11-poised-to-beat-10-mostly-because-it-has-to?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 15:59:47](https://lobste.rs/s/w9l7q5/best_refactoring_you_ve_never_heard) - [The Best Refactoring You&apos;ve Never Heard Of](https://www.pathsensitive.com/2019/07/the-best-refactoring-youve-never-heard.html)
* [2025-04-04, 15:59:28](https://news.ycombinator.com/item?id=43584303) - [Kerosene did not save the sperm whale (2024)](https://edconway.substack.com/p/no-kerosene-did-not-save-the-sperm)
* [2025-04-04, 15:55:37](https://lobste.rs/s/dlrmfi/on_javascript_s_weirdness) - [On JavaScript&apos;s Weirdness](https://stack-auth.com/blog/on-javascripts-weirdness)
* [2025-04-04, 15:31:55](https://lobste.rs/s/ndlwoh/wizard_his_shell) - [The Wizard and His Shell](https://terminal.click/posts/2025/04/the-wizard-and-his-shell/)
* [2025-04-04, 15:20:00](https://slashdot.org/story/25/04/04/1512247/ai-could-affect-40-of-jobs-and-widen-inequality-between-nations-un-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Could Affect 40% of Jobs and Widen Inequality Between Nations, UN Warns](https://slashdot.org/story/25/04/04/1512247/ai-could-affect-40-of-jobs-and-widen-inequality-between-nations-un-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 14:42:00](https://it.slashdot.org/story/25/04/04/1442223/camera-makers-defend-proprietary-raw-formats-despite-open-standard-alternative?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Camera Makers Defend Proprietary RAW Formats Despite Open Standard Alternative](https://it.slashdot.org/story/25/04/04/1442223/camera-makers-defend-proprietary-raw-formats-despite-open-standard-alternative?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 14:00:00](https://news.slashdot.org/story/25/04/04/1319228/china-imposes-34-reciprocal-tariffs-on-imports-of-us-goods?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Imposes 34% Reciprocal Tariffs on Imports of US Goods](https://news.slashdot.org/story/25/04/04/1319228/china-imposes-34-reciprocal-tariffs-on-imports-of-us-goods?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 13:10:00](https://soylentnews.org/article.pl?sid=25/04/03/0151238&amp;from=rss) - [Notes on the Pentium&apos;s Microcode Circuitry](https://soylentnews.org/article.pl?sid=25/04/03/0151238&amp;from=rss)
* [2025-04-04, 13:00:00](https://news.slashdot.org/story/25/04/04/0729216/visa-bids-100-million-to-replace-mastercard-as-apples-new-credit-card-partner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Visa Bids $100 Million To Replace Mastercard As Apple&apos;s New Credit Card Partner](https://news.slashdot.org/story/25/04/04/0729216/visa-bids-100-million-to-replace-mastercard-as-apples-new-credit-card-partner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 12:54:38](https://news.ycombinator.com/item?id=43581584) - [Nvidia adds native Python support to CUDA](https://thenewstack.io/nvidia-finally-adds-native-python-support-to-cuda/)
* [2025-04-04, 10:00:00](https://hardware.slashdot.org/story/25/04/04/0718233/coreboot-2503-released-with-support-for-22-more-motherboards?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Coreboot 25.03 Released With Support For 22 More Motherboards](https://hardware.slashdot.org/story/25/04/04/0718233/coreboot-2503-released-with-support-for-22-more-motherboards?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 09:56:37](https://news.ycombinator.com/item?id=43580103) - [Gumroad’s source is available](https://github.com/antiwork/gumroad)
* [2025-04-04, 09:13:38](https://lobste.rs/s/reznwf/pitfalls_safe_rust) - [Pitfalls of Safe Rust](https://corrode.dev/blog/pitfalls-of-safe-rust/)
* [2025-04-04, 08:28:00](https://soylentnews.org/article.pl?sid=25/04/03/0149258&amp;from=rss) - [What Drives Our Cravings for Food and Drink? Neurons in the Amygdala May Play a Key Role](https://soylentnews.org/article.pl?sid=25/04/03/0149258&amp;from=rss)
* [2025-04-04, 08:10:15](https://lobste.rs/s/nq7bzj/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/nq7bzj/what_are_you_doing_this_weekend)
* [2025-04-04, 07:12:00](https://tech.slashdot.org/story/25/04/04/0710212/the-retro-subway-map-that-design-nerds-love-makes-a-comeback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Retro Subway Map That Design Nerds Love Makes a Comeback](https://tech.slashdot.org/story/25/04/04/0710212/the-retro-subway-map-that-design-nerds-love-makes-a-comeback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 06:15:15](https://lobste.rs/s/9kixmk/csscape_room) - [CSScape Room](https://csscape-room.iamdanielmarino.com/)
* [2025-04-04, 05:37:49](https://lobste.rs/s/afmbja/security_dsa_5892_1_atop_security_update) - [[SECURITY] [DSA 5892-1] atop security update](https://lists.debian.org/debian-security-announce/2025/msg00054.html)
* [2025-04-04, 04:50:45](https://news.ycombinator.com/item?id=43578430) - [DeepSeek: Inference-Time Scaling for Generalist Reward Modeling](https://arxiv.org/abs/2504.02495)
* [2025-04-04, 03:59:44](https://news.ycombinator.com/item?id=43578190) - [Show HN: Transputer emulator in JavaScript (fast enough to be useful)](https://nanochess.org/transputer_emulator.html)
* [2025-04-04, 03:43:00](https://soylentnews.org/article.pl?sid=25/04/03/0144235&amp;from=rss) - [AI Bots Strain Wikimedia as Bandwidth Surges 50%](https://soylentnews.org/article.pl?sid=25/04/03/0144235&amp;from=rss)
* [2025-04-04, 03:30:00](https://news.slashdot.org/story/25/04/04/0153232/wealthy-americans-have-death-rates-on-par-with-poor-europeans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wealthy Americans Have Death Rates On Par With Poor Europeans](https://news.slashdot.org/story/25/04/04/0153232/wealthy-americans-have-death-rates-on-par-with-poor-europeans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 02:20:00](https://tech.slashdot.org/story/25/04/04/0147202/windows-11-tests-taskbar-icons-that-scale-up-and-down-like-on-a-mac?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 11 Tests Taskbar Icons That Scale Up and Down Like On a Mac](https://tech.slashdot.org/story/25/04/04/0147202/windows-11-tests-taskbar-icons-that-scale-up-and-down-like-on-a-mac?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 02:00:48](https://lobste.rs/s/ujvpdn/making_ocaml_safe_for_performance) - [Making OCaml Safe for Performance Engineering](https://youtube.com/watch?v=g3qd4zpm1LA)
* [2025-04-04, 01:40:00](https://news.slashdot.org/story/25/04/03/237231/googles-notebooklm-ai-can-now-discover-sources-for-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s NotebookLM AI Can Now &apos;Discover Sources&apos; For You](https://news.slashdot.org/story/25/04/03/237231/googles-notebooklm-ai-can-now-discover-sources-for-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 01:00:00](https://yro.slashdot.org/story/25/04/03/2257221/massive-expansion-of-italys-piracy-shield-underway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Massive Expansion of Italy&apos;s Piracy Shield Underway](https://yro.slashdot.org/story/25/04/03/2257221/massive-expansion-of-italys-piracy-shield-underway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 00:20:00](https://games.slashdot.org/story/25/04/03/2248237/louvre-museum-in-paris-to-discontinue-nintendo-3ds-audio-guides?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Louvre Museum In Paris to Discontinue Nintendo 3DS Audio Guides](https://games.slashdot.org/story/25/04/03/2248237/louvre-museum-in-paris-to-discontinue-nintendo-3ds-audio-guides?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-03, 23:40:00](https://tech.slashdot.org/story/25/04/03/2236242/deepmind-details-all-the-ways-agi-could-wreck-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DeepMind Details All the Ways AGI Could Wreck the World](https://tech.slashdot.org/story/25/04/03/2236242/deepmind-details-all-the-ways-agi-could-wreck-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-03, 23:04:00](https://soylentnews.org/article.pl?sid=25/04/03/0137241&amp;from=rss) - [Does Listening Really Change Minds? New Study Challenges Common Assumptions](https://soylentnews.org/article.pl?sid=25/04/03/0137241&amp;from=rss)
* [2025-04-03, 22:48:30](https://lobste.rs/s/yq4tc7/introducing_bare_small_modular) - [Introducing Bare, a small and modular JavaScript runtime](https://github.com/holepunchto/bare)
* [2025-04-03, 22:46:18](https://lobste.rs/s/lak6et/why_i_stopped_using_ai_code_editors) - [Why I stopped using AI code editors](https://lucianonooijen.com/blog/why-i-stopped-using-ai-code-editors/)
* [2025-04-03, 21:49:04](https://news.ycombinator.com/item?id=43575884) - [Microsoft’s original source code](https://www.gatesnotes.com/home/home-page-topic/reader/microsoft-original-source-code)
* [2025-04-03, 20:18:54](https://lobste.rs/s/lc9vxp/why_we_decided_go_for_big_rewrite_2019) - [Why we decided to go for the Big Rewrite (2019)](https://www.channable.com/tech/why-we-decided-to-go-for-the-big-rewrite)
* [2025-04-03, 20:03:44](https://lobste.rs/s/m00hji/rewriting_my_site_vanilla_web) - [Rewriting my site in vanilla web](https://leanrada.com/notes/vanilla-web-rewrite/)
* [2025-04-03, 18:17:00](https://soylentnews.org/article.pl?sid=25/04/02/038211&amp;from=rss) - [The April Fools Joke That Might Have Got Me Fired](https://soylentnews.org/article.pl?sid=25/04/02/038211&amp;from=rss)
* [2025-04-03, 17:55:20](https://news.ycombinator.com/item?id=43573156) - [An image of an archeologist adventurer who wears a hat and uses a bullwhip](https://theaiunderwriter.substack.com/p/an-image-of-an-archeologist-adventurer)
* [2025-04-03, 17:43:32](https://lobste.rs/s/iahfeu/fast_er_binary_search_rust) - [Fast(er) binary search in Rust](https://www.bazhenov.me/posts/faster-binary-search-in-rust/)
* [2025-04-03, 17:17:54](https://news.ycombinator.com/item?id=43572733) - [Show HN: Hatchet v1 – A task orchestration platform built on Postgres](https://github.com/hatchet-dev/hatchet)
* [2025-04-03, 17:07:45](https://lobste.rs/s/x9ll4e/why_we_are_still_using_88x31_buttons) - [Why we are still using 88x31 buttons](https://ultrasciencelabs.com/lab-notes/why-we-are-still-using-88x31-buttons)
* [2025-04-03, 16:48:35](https://lobste.rs/s/zxpqz0/regname_mass_renamer_tui_written_rust) - [regname: Mass renamer TUI written in Rust](https://github.com/linkdd/regname)
* [2025-04-03, 16:43:46](https://lobste.rs/s/sirtt6/how_we_got_generics_we_have_how_i_learned) - [How We Got the Generics We Have: (Or, how I learned to stop worrying and love erasure)](https://openjdk.org/projects/valhalla/design-notes/in-defense-of-erasure)
* [2025-04-03, 16:13:02](https://news.ycombinator.com/item?id=43571851) - [AI 2027](https://ai-2027.com/)
* [2025-04-03, 15:24:49](https://news.ycombinator.com/item?id=43571099) - [Curl-impersonate: Special build of curl that can impersonate the major browsers](https://github.com/lwthiker/curl-impersonate)
* [2025-04-03, 14:36:41](https://news.ycombinator.com/item?id=43570324) - [Overengineered Anchor Links](https://thirty-five.com/overengineered-anchoring)
* [2025-04-03, 13:55:38](https://news.ycombinator.com/item?id=43569724) - [Show HN: The C3 programming language (C alternative language)](https://github.com/c3lang/c3c)
* [2025-04-03, 13:35:00](https://soylentnews.org/article.pl?sid=25/04/02/036222&amp;from=rss) - [News Outlets Fighting Back Against Distrust With \&quot;Ethics Boxes\&quot;??](https://soylentnews.org/article.pl?sid=25/04/02/036222&amp;from=rss)
* [2025-04-03, 12:29:08](https://news.ycombinator.com/item?id=43568655) - [A university president makes a case against cowardice](https://www.newyorker.com/news/q-and-a/a-university-president-makes-a-case-against-cowardice)
* [2025-04-03, 11:11:40](https://lobste.rs/s/trlke6/steam_deck_is_software_freedom_friendly) - [The Steam Deck is Software-Freedom friendly](https://agnishom.github.io/blog/2024/steam-deck/)
* [2025-04-03, 11:10:32](https://lobste.rs/s/0jxkj4/introducing_nix_ninja_open_source_ninja) - [Introducing Nix Ninja – open-source Ninja-compatible build system for Nix](https://github.com/pdtpartners/nix-ninja)
* [2025-04-03, 10:31:23](https://lobste.rs/s/t90zb0/announcing_rust_1_86_0) - [Announcing Rust 1.86.0](https://blog.rust-lang.org/2025/04/03/Rust-1.86.0.html)
* [2025-04-03, 08:52:00](https://soylentnews.org/article.pl?sid=25/04/02/034207&amp;from=rss) - [First Orbital Rocket Launched From Mainland Europe Crashes After Takeoff](https://soylentnews.org/article.pl?sid=25/04/02/034207&amp;from=rss)
* [2025-04-03, 04:06:00](https://soylentnews.org/article.pl?sid=25/04/01/1135252&amp;from=rss) - [Honeybee Deaths Surge in U.S.: &apos;Something Real Bad is Going on&apos;](https://soylentnews.org/article.pl?sid=25/04/01/1135252&amp;from=rss)
* [2025-04-02, 23:22:00](https://soylentnews.org/article.pl?sid=25/03/31/0416212&amp;from=rss) - [FuguIta: OpenBSD Live CD - Celebrates Their 20th Anniversary!](https://soylentnews.org/article.pl?sid=25/03/31/0416212&amp;from=rss)
* [2025-04-02, 19:59:17](https://lobste.rs/s/aupah1/gerrit_gitbutler_jujutsu_projects) - [Gerrit, GitButler, and Jujutsu projects collaborating on change-id commit footer](https://lore.kernel.org/git/CAESOdVAspxUJKGAA58i0tvks4ZOfoGf1Aa5gPr0FXzdcywqUUw@mail.gmail.com/T/#u)
* [2025-04-02, 16:24:00](https://soylentnews.org/article.pl?sid=25/03/31/1729253&amp;from=rss) - [AI Search Engines Cite Incorrect News Sources at an Alarming 60% Rate, Study Says](https://soylentnews.org/article.pl?sid=25/03/31/1729253&amp;from=rss)
* [2025-04-02, 11:54:51](https://news.ycombinator.com/item?id=43555728) - [Fantastically Wrong: The Legendary Scientist Who Swore Our Planet Is Hollow](https://www.wired.com/2014/07/fantastically-wrong-hollow-earth/)
* [2025-04-02, 11:50:00](https://news.ycombinator.com/item?id=43555696) - [US labour watchdog halts Apple cases after group’s lawyer picked for top job](https://www.ft.com/content/ad7fcc22-343e-47e3-a6f3-58bfd4294c9d)
* [2025-04-02, 11:38:00](https://soylentnews.org/article.pl?sid=25/03/31/1720218&amp;from=rss) - [Study Reveals Tool Use in Tropical Fish Species](https://soylentnews.org/article.pl?sid=25/03/31/1720218&amp;from=rss)
* [2025-04-02, 10:52:00](https://news.ycombinator.com/item?id=43555409) - [Show HN: I made a platform to load and performance test API&apos;s](https://buzzbench.io/)
* [2025-04-02, 10:13:48](https://news.ycombinator.com/item?id=43555220) - [Supervisors often prefer rule breakers, up to a point](https://journals.aom.org/doi/10.5465/amd.2022.0280.summary)
* [2025-04-02, 07:34:05](https://news.ycombinator.com/item?id=43554444) - [Why do we need modules at all? (2011)](https://groups.google.com/g/erlang-programming/c/LKLesmrss2k)
* [2025-04-02, 06:53:00](https://soylentnews.org/article.pl?sid=25/03/31/1714219&amp;from=rss) - [75% of US Scientists Who Answered Nature Poll Consider Leaving](https://soylentnews.org/article.pl?sid=25/03/31/1714219&amp;from=rss)
* [2025-04-02, 02:07:00](https://soylentnews.org/article.pl?sid=25/03/31/1248211&amp;from=rss) - [Microsoft&apos;s Killing Script Used to Avoid Microsoft Account in Windows 11](https://soylentnews.org/article.pl?sid=25/03/31/1248211&amp;from=rss)
* [2025-04-01, 21:24:00](https://soylentnews.org/article.pl?sid=25/03/31/1243220&amp;from=rss) - [The Internet Oracle Has Pondered Your Question Deeply - Revisiting an Old Friend](https://soylentnews.org/article.pl?sid=25/03/31/1243220&amp;from=rss)
* [2025-04-01, 16:38:00](https://soylentnews.org/article.pl?sid=25/03/31/1218257&amp;from=rss) - [Back to Cash: Life Without Money in Your Pocket is Not the Utopia Sweden Hoped](https://soylentnews.org/article.pl?sid=25/03/31/1218257&amp;from=rss)
* [2025-04-01, 11:55:00](https://soylentnews.org/article.pl?sid=25/04/01/0749220&amp;from=rss) - [After Trump&apos;s Decree: Fight for US Funding for Tor, F-Droid and Let&apos;s Encrypt](https://soylentnews.org/article.pl?sid=25/04/01/0749220&amp;from=rss)
* [2025-04-01, 07:09:00](https://soylentnews.org/article.pl?sid=25/03/31/0411203&amp;from=rss) - [Ending Remote Work Has Major Consequences for Women](https://soylentnews.org/article.pl?sid=25/03/31/0411203&amp;from=rss)
* [2025-04-01, 02:23:00](https://soylentnews.org/article.pl?sid=25/03/31/045231&amp;from=rss) - [Word of the Day: Zwitterionic](https://soylentnews.org/article.pl?sid=25/03/31/045231&amp;from=rss)
* [2025-03-31, 23:46:55](https://news.ycombinator.com/item?id=43541285) - [BBC Verify: What satellite images reveal about Myanmar&apos;s quake](https://www.bbc.com/news/videos/cn4wzyv21jvo)
* [2025-03-31, 22:25:54](https://news.ycombinator.com/item?id=43540626) - [Study finds solo music listening boosts social well-being](https://phys.org/news/2025-03-solo-music-boosts-social.html)
* [2025-03-31, 21:37:00](https://soylentnews.org/article.pl?sid=25/03/31/042242&amp;from=rss) - [NASA Early Galaxy Discovery Shines Light on &apos;Cosmic Dark Ages&apos;](https://soylentnews.org/article.pl?sid=25/03/31/042242&amp;from=rss)
* [2025-03-31, 21:16:21](https://news.ycombinator.com/item?id=43540070) - [Growing Buffers to Avoid Copying Data](https://johnnysswlab.com/growing-buffers-to-avoid-copying-data/)
* [2025-03-31, 19:30:29](https://news.ycombinator.com/item?id=43538853) - [New antibiotic that kills drug-resistant bacteria found in technician&apos;s garden](https://www.nature.com/articles/d41586-025-00945-z)
* [2025-03-31, 16:55:00](https://soylentnews.org/article.pl?sid=25/03/31/0349222&amp;from=rss) - [The Practical Limitations of End-to-End Encryption](https://soylentnews.org/article.pl?sid=25/03/31/0349222&amp;from=rss)
* [2025-03-31, 14:18:52](https://news.ycombinator.com/item?id=43535352) - [New nanoparticle therapies target two major killers](https://www.science.org/content/article/new-nanoparticle-therapies-target-two-major-killers)
* [2025-03-31, 12:09:00](https://soylentnews.org/article.pl?sid=25/03/31/0347227&amp;from=rss) - [Elon Musk’s X Has a New Owner](https://soylentnews.org/article.pl?sid=25/03/31/0347227&amp;from=rss)
* [2025-03-31, 11:29:34](https://news.ycombinator.com/item?id=43533715) - [Build an 8-bit computer from scratch (2016)](https://eater.net/8bit/)
* [2025-03-31, 07:24:00](https://soylentnews.org/article.pl?sid=25/03/31/0341226&amp;from=rss) - [Apple and Google Face Billions in Liability From Trump&apos;s Tiktok Ban Delay](https://soylentnews.org/article.pl?sid=25/03/31/0341226&amp;from=rss)
* [2025-03-31, 06:00:00](https://soylentnews.org/article.pl?sid=25/03/28/1139202&amp;from=rss) - [Soylent News Entering a New Phase](https://soylentnews.org/article.pl?sid=25/03/28/1139202&amp;from=rss)
* [2025-03-31, 02:39:00](https://soylentnews.org/article.pl?sid=25/03/28/1410255&amp;from=rss) - [23andMe Customers Struggle to Delete Their Data](https://soylentnews.org/article.pl?sid=25/03/28/1410255&amp;from=rss)
