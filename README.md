# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [3D printing my laptop ergonomic setup](https://ntietz.com/blog/3d-printing-my-laptop-ergonomic-setup/) - A personal project on redesigning laptop ergonomics using 3D printing technology. [Comments](https://lobste.rs/s/u9mo7b/3d_printing_my_laptop_ergonomic_setup)

* [High Cardinality Metrics: How Prometheus and ClickHouse Handle Scale](https://last9.io/blog/high-cardinality-metrics-prometheus-clickhouse/) - A detailed exploration of how these systems manage the challenges of scaling metrics. [Comments](https://lobste.rs/s/x8hrkv/high_cardinality_metrics_how_prometheus)

* [Scaling long-running autonomous coding](https://simonwillison.net/2026/Jan/19/scaling-long-running-autonomous-coding/) - Insights into the intricacies of scaling autonomous coding tools. [Comments](https://news.ycombinator.com/item?id=46686418)

* [Nanolang: A tiny experimental language designed to be targeted by coding LLMs](https://github.com/jordanhubbard/nanolang) - Designing a modular experimental language for coding in collaboration with language models. [Comments](https://news.ycombinator.com/item?id=46684958)

## Artificial Intelligence and Machine Learning

* [Chatbot Psychosis](https://en.wikipedia.org/wiki/Chatbot_psychosis) - Examining the psychological implications and potential outcomes of engaging with chatbots. [Comments](https://news.ycombinator.com/item?id=46688122)

* [The coming industrialisation of exploit generation with LLMs](https://sean.heelan.io/2026/01/18/on-the-coming-industrialisation-of-exploit-generation-with-llms/) - A thought-provoking article on the role of AI in automation of exploit generation. [Comments](https://news.ycombinator.com/item?id=46676081)

## Business and Industry

* [Stellantis Drops Jeep, Chrysler Plug-in Hybrids Amid EV Sales Slowdown](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss) - A significant shift in Stellantis' EV strategy raises questions about the future of the market. [Comments](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss)

* [Germany's EV Subsidies Will Include Chinese Brands](https://tech.slashdot.org/story/26/01/19/2341242/germanys-ev-subsidies-will-include-chinese-brands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Updates to Germany's policies expand EV subsidies to Chinese manufacturers. [Comments](https://tech.slashdot.org/story/26/01/19/2341242/germanys-ev-subsidies-will-include-chinese-brands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Space and Science

* [The Fastest Human Spaceflight Mission In History Crawls Closer To Liftoff](https://science.slashdot.org/story/26/01/19/2332237/the-fastest-human-spaceflight-mission-in-history-crawls-closer-to-liftoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Advancements in space exploration as new records are set in human spaceflight. [Comments](https://science.slashdot.org/story/26/01/19/2332237/the-fastest-human-spaceflight-mission-in-history-crawls-closer-to-liftoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Anthropologists Offer New Evidence of Bipedalism in Long-Debated Fossil Discovery](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss) - New findings in evolutionary biology provide insights on bipedal development. [Comments](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss)

## Human-Computer Interaction and Interfaces

* [Nova Launcher added Facebook and Google Ads tracking](https://lemdro.id/post/lemdro.id/35049920) - Tracking changes in popular third-party Android launchers. [Comments](https://news.ycombinator.com/item?id=46686655)

* [x86 prefixes and escape opcodes flowchart](https://soc.me/interfaces/x86-prefixes-and-escape-opcodes-flowchart.html) - Understanding x86 architecture through an insightful flowchart. [Comments](https://news.ycombinator.com/item?id=46687705)

## Security and Cryptography

* [Reticulum, a secure and anonymous mesh networking stack](https://github.com/markqvist/Reticulum) - Exploring a new approach to anonymous and secure communication. [Comments](https://news.ycombinator.com/item?id=46686273)

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

* [2026-01-20, 06:08:05](https://lobste.rs/s/u9mo7b/3d_printing_my_laptop_ergonomic_setup) - [3D printing my laptop ergonomic setup](https://ntietz.com/blog/3d-printing-my-laptop-ergonomic-setup/)
* [2026-01-20, 05:19:35](https://lobste.rs/s/r4bdft/c_26_reflection_hearts_qrangemodel) - [C++26 Reflection hearts QRangeModel](https://www.qt.io/blog/c26-reflection-qrangemodel)
* [2026-01-20, 05:08:57](https://news.ycombinator.com/item?id=46688122) - [Chatbot Psychosis](https://en.wikipedia.org/wiki/Chatbot_psychosis)
* [2026-01-20, 04:44:00](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss) - [Stellantis Drops Jeep, Chrysler Plug-in Hybrids Amid EV Sales Slowdown](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss)
* [2026-01-20, 03:55:21](https://lobste.rs/s/ymhppr/llms_your_career) - [LLMs and your career](https://notes.eatonphil.com/2026-01-19-llms-and-your-career.html)
* [2026-01-20, 03:47:21](https://news.ycombinator.com/item?id=46687705) - [x86 prefixes and escape opcodes flowchart](https://soc.me/interfaces/x86-prefixes-and-escape-opcodes-flowchart.html)
* [2026-01-20, 03:30:36](https://lobste.rs/s/x8hrkv/high_cardinality_metrics_how_prometheus) - [High Cardinality Metrics: How Prometheus and ClickHouse Handle Scale](https://last9.io/blog/high-cardinality-metrics-prometheus-clickhouse/)
* [2026-01-20, 03:30:00](https://science.slashdot.org/story/26/01/19/2332237/the-fastest-human-spaceflight-mission-in-history-crawls-closer-to-liftoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Fastest Human Spaceflight Mission In History Crawls Closer To Liftoff](https://science.slashdot.org/story/26/01/19/2332237/the-fastest-human-spaceflight-mission-in-history-crawls-closer-to-liftoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 03:26:25](https://news.ycombinator.com/item?id=46687588) - [F-16 Falcon Strike](https://webchrono.pl/F16FalconStrike/index.html)
* [2026-01-20, 03:14:47](https://news.ycombinator.com/item?id=46687504) - [Show HN: Artificial Ivy in the Browser](https://da.nmcardle.com/grow)
* [2026-01-20, 02:42:45](https://lobste.rs/s/py23pa/basis_universal_v2) - [Basis Universal v2](https://github.com/BinomialLLC/basis_universal)
* [2026-01-20, 02:30:00](https://science.slashdot.org/story/26/01/19/2324236/the-worlds-longest-running-lab-experiment-is-almost-100-years-old?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The World&apos;s Longest-Running Lab Experiment Is Almost 100 Years Old](https://science.slashdot.org/story/26/01/19/2324236/the-worlds-longest-running-lab-experiment-is-almost-100-years-old?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 01:50:00](https://tech.slashdot.org/story/26/01/19/2341242/germanys-ev-subsidies-will-include-chinese-brands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Germany&apos;s EV Subsidies Will Include Chinese Brands](https://tech.slashdot.org/story/26/01/19/2341242/germanys-ev-subsidies-will-include-chinese-brands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 01:23:58](https://lobste.rs/s/yzsckk/prediction_within_15_years_microsoft) - [Prediction: Within 15 years Microsoft will discontinue Windows in favor of a Windows themed Linux distribution](https://gamesbymason.com/blog/2026/microsoft/)
* [2026-01-20, 01:21:35](https://news.ycombinator.com/item?id=46686745) - [Legal Structures for Latin American Startups (2021)](https://latamlist.com/legal-structures-for-latin-american-startups/)
* [2026-01-20, 01:10:00](https://news.slashdot.org/story/26/01/19/2320223/a-second-us-sphere-could-come-to-maryland?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Second US Sphere Could Come To Maryland](https://news.slashdot.org/story/26/01/19/2320223/a-second-us-sphere-could-come-to-maryland?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 01:03:52](https://news.ycombinator.com/item?id=46686655) - [Nova Launcher added Facebook and Google Ads tracking](https://lemdro.id/post/lemdro.id/35049920)
* [2026-01-20, 01:01:36](https://news.ycombinator.com/item?id=46686640) - [Porsche sold more electrified cars in Europe in 2025 than pure gas-powered cars](https://newsroom.porsche.com/en/2026/company/porsche-deliveries-2025-41516.html)
* [2026-01-20, 00:30:00](https://yro.slashdot.org/story/26/01/19/2257241/nvidia-contacted-annas-archive-to-secure-access-to-millions-of-pirated-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Contacted Anna&apos;s Archive To Secure Access To Millions of Pirated Books](https://yro.slashdot.org/story/26/01/19/2257241/nvidia-contacted-annas-archive-to-secure-access-to-millions-of-pirated-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 00:23:01](https://news.ycombinator.com/item?id=46686418) - [Scaling long-running autonomous coding](https://simonwillison.net/2026/Jan/19/scaling-long-running-autonomous-coding/)
* [2026-01-20, 00:02:00](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss) - [Anthropologists Offer New Evidence of Bipedalism in Long-Debated Fossil Discovery](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss)
* [2026-01-19, 23:59:54](https://news.ycombinator.com/item?id=46686273) - [Reticulum, a secure and anonymous mesh networking stack](https://github.com/markqvist/Reticulum)
* [2026-01-19, 23:50:00](https://devices.slashdot.org/story/26/01/19/2249208/openai-cfo-says-annualized-revenue-crosses-20-billion-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI CFO Says Annualized Revenue Crosses $20 Billion In 2025](https://devices.slashdot.org/story/26/01/19/2249208/openai-cfo-says-annualized-revenue-crosses-20-billion-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 23:39:57](https://news.ycombinator.com/item?id=46686131) - [3D printing my laptop ergonomic setup](https://www.ntietz.com/blog/3d-printing-my-laptop-ergonomic-setup/)
* [2026-01-19, 23:10:00](https://tech.slashdot.org/story/26/01/19/2240209/threads-usage-overtakes-x-on-mobile?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Threads Usage Overtakes X On Mobile](https://tech.slashdot.org/story/26/01/19/2240209/threads-usage-overtakes-x-on-mobile?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 22:22:00](https://yro.slashdot.org/story/26/01/19/2221237/congress-wants-to-hand-your-parenting-to-big-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Congress Wants To Hand Your Parenting To Big Tech](https://yro.slashdot.org/story/26/01/19/2221237/congress-wants-to-hand-your-parenting-to-big-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 22:21:20](https://lobste.rs/s/nbsclr/floating_point_printing_parsing_can_be) - [Floating-Point Printing and Parsing Can Be Simple And Fast](https://research.swtch.com/fp)
* [2026-01-19, 22:07:47](https://lobste.rs/s/fsqjwr/personal_infrastructure_setup_2026) - [Personal infrastructure setup 2026](https://linderud.dev/blog/personal-infrastructure-setup-2026/)
* [2026-01-19, 21:48:07](https://news.ycombinator.com/item?id=46684958) - [Nanolang: A tiny experimental language designed to be targeted by coding LLMs](https://github.com/jordanhubbard/nanolang)
* [2026-01-19, 21:39:44](https://news.ycombinator.com/item?id=46684862) - [Use Social Media Mindfully](https://danielleheberling.xyz/blog/mindful-social-media/)
* [2026-01-19, 21:35:31](https://news.ycombinator.com/item?id=46684815) - [Targeted Bets: An alternative approach to the job hunt](https://www.seanmuirhead.com/blog/targeted-bets)
* [2026-01-19, 21:30:00](https://it.slashdot.org/story/26/01/19/1955239/rackspace-customers-grapple-with-devastating-email-hosting-price-hike?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rackspace Customers Grapple With &apos;Devastating&apos; Email Hosting Price Hike](https://it.slashdot.org/story/26/01/19/1955239/rackspace-customers-grapple-with-devastating-email-hosting-price-hike?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 21:25:16](https://news.ycombinator.com/item?id=46684708) - [The assistant axis: situating and stabilizing the character of LLMs](https://www.anthropic.com/research/assistant-axis)
* [2026-01-19, 20:45:00](https://news.slashdot.org/story/26/01/19/1946207/the-rise-and-fall-of-the-american-monoculture?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Rise and Fall of the American Monoculture](https://news.slashdot.org/story/26/01/19/1946207/the-rise-and-fall-of-the-american-monoculture?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 20:37:35](https://lobste.rs/s/xa7vqf/bc_crunch_tiny_lossless_compressor_for_bc) - [bc_crunch: tiny lossless compressor for BC/DXT texture streams](https://github.com/Geolm/bc_crunch)
* [2026-01-19, 20:26:19](https://news.ycombinator.com/item?id=46684056) - [Level S4 solar radiation event](https://www.swpc.noaa.gov/news/g4-severe-geomagnetic-storm-levels-reached-19-jan-2026)
* [2026-01-19, 20:23:19](https://lobste.rs/s/f1cmlk/faster_restart_windows_95_when_you_hold) - [Faster restart of Windows 95 when you hold the shift key](https://devblogs.microsoft.com/oldnewthing/20260119-06/?p=111995)
* [2026-01-19, 20:11:38](https://lobste.rs/s/bv4yod/only_two_markup_languages) - [The Only Two Markup Languages](https://www.gingerbill.org/article/2026/01/19/two-families-of-markup-languages/)
* [2026-01-19, 20:05:00](https://mobile.slashdot.org/story/26/01/19/1933224/asus-confirms-it-wont-launch-phones-in-2026-may-leave-android-altogether?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Asus Confirms It Won&apos;t Launch Phones in 2026, May Leave Android Altogether](https://mobile.slashdot.org/story/26/01/19/1933224/asus-confirms-it-wont-launch-phones-in-2026-may-leave-android-altogether?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 19:59:50](https://lobste.rs/s/ekkm0z/understanding_c_ownership_system) - [Understanding C++ Ownership System](https://blog.aiono.dev/posts/understanding-c++-ownership-system.html)
* [2026-01-19, 19:25:00](https://yro.slashdot.org/story/26/01/19/1919236/whatsapp-texts-are-not-contracts-judge-rules-in-2m-divorce-row?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WhatsApp Texts Are Not Contracts, Judge Rules in $2M Divorce Row](https://yro.slashdot.org/story/26/01/19/1919236/whatsapp-texts-are-not-contracts-judge-rules-in-2m-divorce-row?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 19:11:00](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss) - [Linux Mint 22.3 “Zena” is Now Available for Download, Here&apos;s What&apos;s New](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss)
* [2026-01-19, 18:45:00](https://games.slashdot.org/story/26/01/19/1842246/microsofts-xbox-cloud-gaming-may-soon-let-you-stream-your-own-games-for-free---if-you-watch-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Xbox Cloud Gaming May Soon Let You Stream Your Own Games for Free - If You Watch Ads](https://games.slashdot.org/story/26/01/19/1842246/microsofts-xbox-cloud-gaming-may-soon-let-you-stream-your-own-games-for-free---if-you-watch-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 18:36:41](https://lobste.rs/s/bemom7/incredible_overcomplexity_shadcn_radio) - [The Incredible Overcomplexity of the Shadcn Radio Button](https://paulmakeswebsites.com/writing/shadcn-radio-button/)
* [2026-01-19, 18:15:48](https://news.ycombinator.com/item?id=46682518) - [Notes on Apple&apos;s Nano Texture (2025)](https://jon.bo/posts/nano-texture/)
* [2026-01-19, 18:10:00](https://slashdot.org/story/26/01/19/188250/erp-isnt-dead-yet---but-most-execs-are-planning-the-wake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ERP Isn&apos;t Dead Yet - But Most Execs Are Planning the Wake](https://slashdot.org/story/26/01/19/188250/erp-isnt-dead-yet---but-most-execs-are-planning-the-wake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 17:47:38](https://news.ycombinator.com/item?id=46682115) - [Show HN: An interactive physics simulator with 1000’s of balls, in your terminal](https://github.com/minimaxir/ballin)
* [2026-01-19, 17:35:00](https://games.slashdot.org/story/26/01/19/1735231/valve-has-significantly-rewritten-steams-rules-for-how-developers-must-disclose-ai-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Has &apos;Significantly&apos; Rewritten Steam&apos;s Rules For How Developers Must Disclose AI Use](https://games.slashdot.org/story/26/01/19/1735231/valve-has-significantly-rewritten-steams-rules-for-how-developers-must-disclose-ai-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 17:13:59](https://news.ycombinator.com/item?id=46681611) - [What came first: the CNAME or the A record?](https://blog.cloudflare.com/cname-a-record-order-dns-standards/)
* [2026-01-19, 16:36:11](https://news.ycombinator.com/item?id=46680974) - [Apple testing new App Store design that blurs the line between ads and results](https://9to5mac.com/2026/01/16/iphone-apple-app-store-search-results-ads-new-design/)
* [2026-01-19, 16:05:50](https://news.ycombinator.com/item?id=46680515) - [The microstructure of wealth transfer in prediction markets](https://www.jbecker.dev/research/prediction-market-microstructure)
* [2026-01-19, 15:21:50](https://lobste.rs/s/igcrnj/creusot_0_9_0_launching_creusot_devlog) - [Creusot 0.9.0: Launching the Creusot Devlog](https://creusot-rs.github.io/devlog/2026-01-19/)
* [2026-01-19, 15:03:13](https://lobste.rs/s/2u1av3/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/2u1av3/what_are_you_doing_this_week)
* [2026-01-19, 14:38:00](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss) - [Anything-Goes “Anyons” May be at the Root of Surprising Quantum Experiments](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss)
* [2026-01-19, 13:45:14](https://lobste.rs/s/efxvf7/creating_virtual_block_devices_with_ublk) - [Creating virtual block devices with ublk](https://jpospisil.com/posts/2026-01-13-creating-virtual-block-devices-with-ublk)
* [2026-01-19, 13:16:39](https://lobste.rs/s/zagyj5/follow_up_new_sponsors_strengthen_alpine) - [Follow-Up: New Sponsors Strengthen Alpine Linux’s Infrastructure and CI Ecosystem](https://alpinelinux.org/posts/2026-01-18-new-sponsors-strenghten-infrastructure.html)
* [2026-01-19, 11:21:45](https://lobste.rs/s/8nv2w5/tale_udp_tracking_hytale_server_auto_stop) - [A Tale of UDP tracking: Hytale server auto stop and start with systemd](https://nwildner.com/posts/2026-01-19-hytale/)
* [2026-01-19, 10:01:03](https://lobste.rs/s/cqp4m6/avx_512_first_impressions_on_performance) - [AVX-512: First impressions on performance and programmability](https://shihab-shahriar.github.io//blog/2026/AVX-512-First-Impressions-on-Performance-and-Programmability/)
* [2026-01-19, 09:45:00](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss) - [AI and the Corporate Capture of Knowledge](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss)
* [2026-01-19, 09:00:14](https://news.ycombinator.com/item?id=46676554) - [I was a top 0.01% Cursor user, then switched to Claude Code 2.0](https://blog.silennai.com/claude-code)
* [2026-01-19, 07:57:04](https://news.ycombinator.com/item?id=46676081) - [The coming industrialisation of exploit generation with LLMs](https://sean.heelan.io/2026/01/18/on-the-coming-industrialisation-of-exploit-generation-with-llms/)
* [2026-01-19, 06:28:55](https://lobste.rs/s/f6zsyd/are_arrays_functions) - [Are arrays functions?](https://futhark-lang.org/blog/2026-01-16-are-arrays-functions.html)
* [2026-01-19, 05:03:00](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss) - [AWS Flips Switch on Euro Cloud as Customers Fret About Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss)
* [2026-01-19, 04:08:49](https://lobste.rs/s/txknsm/my_thoughts_on_gas_town_after_10_000_hours) - [My thoughts on Gas Town after 10,000 hours of Claude Code](https://simonhartcher.com/posts/2026-01-19-my-thoughts-on-gas-town-after-10000-hours-of-claude-code)
* [2026-01-19, 02:25:35](https://lobste.rs/s/docfzx/people_cannot_just_pay_attention_boring) - [People cannot \&quot;just pay attention\&quot; to (boring, routine) things](https://utcc.utoronto.ca/~cks/space/blog/tech/PeopleCannotPayAttention)
* [2026-01-19, 00:22:00](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss) - [Are You Dead?](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss)
* [2026-01-18, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss) - [How Screwed is Generation Alpha, and the Generations Which Will Depend on Them?](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss)
* [2026-01-18, 17:17:04](https://lobste.rs/s/ngwloq/how_lobsters_front_page_works) - [How the Lobsters front page works](https://atharvaraykar.com/lobsters/)
* [2026-01-18, 15:49:59](https://lobste.rs/s/b6veve/some_c_habits_i_employ_for_modern_day) - [some C habits I employ for the modern day](https://www.unix.dog/~yosh/blog/c-habits-for-me.html)
* [2026-01-18, 14:50:00](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss) - [Hobby FPV Drone Developer Breaks 400mph Limit With New World Record](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss)
* [2026-01-18, 11:02:03](https://lobste.rs/s/0pxvyd/agent_psychosis_are_we_going_insane) - [Agent Psychosis: Are We Going Insane?](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/)
* [2026-01-18, 10:03:00](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss) - [Sorry, Eh](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss)
* [2026-01-18, 05:13:00](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss) - [Linux Kernel Bugs Hide for 2+ Years on Average](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss)
* [2026-01-18, 00:29:00](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss) - [Wormholes May Not Exist—We&apos;ve Found They Reveal Something Deeper About Time and the Universe](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss)
* [2026-01-17, 19:43:00](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss) - [&apos;Society Cannot Function If No One is Accountable for AI&apos; — Jaron Lanier](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss)
* [2026-01-17, 15:00:00](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss) - [Why Flies Matter, Their Vital Role in Ecosystems, and Surprising Diversity](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss)
* [2026-01-17, 10:18:00](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss) - [Researchers Expose WHILL Wheelchair Safety Risks Via Remote Hacking](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss)
* [2026-01-17, 05:30:00](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss) - [Signal Creator Moxie Marlinspike Wants to Do for AI What He Did for Messaging](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss)
* [2026-01-17, 00:42:00](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss) - [X Didn&apos;t Fix Grok&apos;s ‘Undressing’ Problem. It Just Makes People Pay for It](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss)
* [2026-01-16, 21:48:40](https://news.ycombinator.com/item?id=46652690) - [I set all 376 Vim options and I&apos;m still a fool](https://evanhahn.com/i-set-all-376-vim-options-and-im-still-a-fool/)
* [2026-01-16, 20:00:00](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss) - [Meta to Cut More than 1,000 Jobs as its Shifts Focus to AI Wearables](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss)
* [2026-01-16, 15:23:00](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss) - [You Need A Kitchen Slide Rule](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss)
* [2026-01-16, 13:33:17](https://news.ycombinator.com/item?id=46646173) - [Face as a QR Code](https://bookofjoe2.blogspot.com/2025/12/your-face-as-qr-code.html)
* [2026-01-16, 10:30:00](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss) - [Over Half a Million Windows Users are Switching to Linux](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss)
* [2026-01-16, 08:00:07](https://news.ycombinator.com/item?id=46644173) - [How we made Python&apos;s packaging library 3x faster](https://iscinumpy.dev/post/packaging-faster/)
* [2026-01-16, 05:47:00](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss) - [BreachForum Breach](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss)
* [2026-01-16, 02:53:21](https://news.ycombinator.com/item?id=46642458) - [British redcoat&apos;s lost memoir reveals realities of life as a disabled veteran](https://phys.org/news/2026-01-british-redcoat-lost-memoir-reveals.html)
* [2026-01-16, 01:06:00](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss) - [Survey: Even Meta And Microsoft Engineers Ditch Company AI For Claude](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss)
