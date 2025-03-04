# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology

* [Anthropic's valuation triples to $61.5B in bumper AI funding round](https://www.ft.com/content/05c90475-84fb-4f88-bbfc-6b1a60af90db) ([comments](https://news.ycombinator.com/item?id=43252445))

* [DuckDB goes distributed? DeepSeek’s smallpond takes on Big Data](https://mehdio.substack.com/p/duckdb-goes-distributed-deepseeks) ([comments](https://lobste.rs/s/3ybmrr/duckdb_goes_distributed_deepseek_s))

* [Researchers Find Less-Educated Areas Adopting AI Writing Tools Faster](https://news.slashdot.org/story/25/03/03/2327219/researchers-find-less-educated-areas-adopting-ai-writing-tools-faster?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/03/03/2327219/researchers-find-less-educated-areas-adopting-ai-writing-tools-faster?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Launch HN: Cuckoo (YC W25) – Real-time AI translator for global teams](https://news.ycombinator.com/item?id=43245153)

## Space and Exploration

* [Private Lunar Lander Blue Ghost Aces Moon Touchdown](https://science.slashdot.org/story/25/03/04/0310239/private-lunar-lander-blue-ghost-aces-moon-touchdown?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/03/04/0310239/private-lunar-lander-blue-ghost-aces-moon-touchdown?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [NASA is Watching a Vast, Growing Anomaly in Earth's Magnetic Field](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss))

* ['Utterly Cataclysmic': James Webb Telescope Spots 2 Alien Planets Disintegrating Before Our Eyes](https://soylentnews.org/article.pl?sid=25/03/02/1437201&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/03/02/1437201&from=rss))

## Programming and Development

* [Let’s code a TCP/IP stack, 1: Ethernet and ARP (2016)](https://www.saminiir.com/lets-code-tcp-ip-stack-1-ethernet-arp/) ([comments](https://news.ycombinator.com/item?id=43250093))

* [Do not run any Cargo commands on untrusted projects](https://shnatsel.medium.com/do-not-run-any-cargo-commands-on-untrusted-projects-4c31c89a78d6) ([comments](https://lobste.rs/s/4bxwnl/do_not_run_any_cargo_commands_on_untrusted))

* [Exploiting Python pickles](https://davidhamann.de/2020/04/05/exploiting-python-pickle/) ([comments](https://lobste.rs/s/qs8c0x/exploiting_python_pickles))

## Technology and Society

* [Call Centers Using AI To 'Whiten' Indian Accents](https://slashdot.org/story/25/03/03/2029218/call-centers-using-ai-to-whiten-indian-accents?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/03/03/2029218/call-centers-using-ai-to-whiten-indian-accents?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [A New Android Feature is Scanning Your Photos for 'Sensitive Content'](https://soylentnews.org/article.pl?sid=25/03/02/1651205&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/03/02/1651205&from=rss))

* [The Botfly Test: Characterizing parasitic automated behavior in online communities](https://hannahilea.com/blog/botfly-test/) ([comments](https://lobste.rs/s/eluli7/botfly_test_characterizing_parasitic))

## Noteworthy Events in Industry

* [TSMC Pledges To Spend $100 Billion On US Chip Facilities](https://news.slashdot.org/story/25/03/03/2135222/tsmc-pledges-to-spend-100-billion-on-us-chip-facilities?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/03/03/2135222/tsmc-pledges-to-spend-100-billion-on-us-chip-facilities?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Former Intel CEO Barrett Calls for Board Dismissal and Gelsinger's Return](https://slashdot.org/story/25/03/03/2051256/former-intel-ceo-barrett-calls-for-board-dismissal-and-gelsingers-return?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/03/03/2051256/former-intel-ceo-barrett-calls-for-board-dismissal-and-gelsingers-return?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Anthropic's valuation triples to $61.5B in bumper AI funding round](https://www.ft.com/content/05c90475-84fb-4f88-bbfc-6b1a60af90db) ([comments](https://news.ycombinator.com/item?id=43252445))

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

* [2025-03-04, 09:37:15](https://news.ycombinator.com/item?id=43252445) - [Anthropic's valuation triples to $61.5B in bumper AI funding round](https://www.ft.com/content/05c90475-84fb-4f88-bbfc-6b1a60af90db)
* [2025-03-04, 09:13:53](https://lobste.rs/s/3ybmrr/duckdb_goes_distributed_deepseek_s) - [DuckDB goes distributed? DeepSeek’s smallpond takes on Big Data](https://mehdio.substack.com/p/duckdb-goes-distributed-deepseeks)
* [2025-03-04, 08:37:57](https://lobste.rs/s/4y6yxt/mozilla_updates_firefox_s_terms_again) - [Mozilla updates Firefox's Terms again after backlash](https://thehackernews.com/2025/03/mozilla-updates-firefox-terms-again.html)
* [2025-03-04, 08:05:32](https://lobste.rs/s/4dbx6f/smallpond_lightweight_data_processing) - [smallpond: A lightweight data processing framework built on DuckDB and 3FS](https://github.com/deepseek-ai/smallpond)
* [2025-03-04, 08:05:02](https://news.ycombinator.com/item?id=43251722) - [Why writing small docs is a game changer](https://bufferbuffer.com/why-writing-small-docs-is-a-game-changer/)
* [2025-03-04, 07:00:00](https://science.slashdot.org/story/25/03/04/0310239/private-lunar-lander-blue-ghost-aces-moon-touchdown?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Private Lunar Lander Blue Ghost Aces Moon Touchdown](https://science.slashdot.org/story/25/03/04/0310239/private-lunar-lander-blue-ghost-aces-moon-touchdown?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 06:40:00](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss) - [NASA is Watching a Vast, Growing Anomaly in Earth's Magnetic Field](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss)
* [2025-03-04, 05:59:06](https://lobste.rs/s/qs8c0x/exploiting_python_pickles) - [Exploiting Python pickles](https://davidhamann.de/2020/04/05/exploiting-python-pickle/)
* [2025-03-04, 04:48:17](https://lobste.rs/s/aslonc/making_flow_interview_with_director) - [Making Flow – Interview with director Gints Zilbalodis —](https://www.blender.org/user-stories/making-flow-an-interview-with-director-gints-zilbalodis/)
* [2025-03-04, 03:55:00](https://news.ycombinator.com/item?id=43250093) - [Let’s code a TCP/IP stack, 1: Ethernet and ARP (2016)](https://www.saminiir.com/lets-code-tcp-ip-stack-1-ethernet-arp/)
* [2025-03-04, 03:30:00](https://news.slashdot.org/story/25/03/03/2327219/researchers-find-less-educated-areas-adopting-ai-writing-tools-faster?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Researchers Find Less-Educated Areas Adopting AI Writing Tools Faster](https://news.slashdot.org/story/25/03/03/2327219/researchers-find-less-educated-areas-adopting-ai-writing-tools-faster?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 02:00:00](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss) - [The Next Chapter: Moving From Skype to Microsoft Teams](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss)
* [2025-03-04, 01:30:00](https://science.slashdot.org/story/25/03/03/2346245/nasa-photo-captures-sound-barrier-being-broken?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA Photo Captures Sound Barrier Being Broken](https://science.slashdot.org/story/25/03/03/2346245/nasa-photo-captures-sound-barrier-being-broken?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 01:28:37](https://news.ycombinator.com/item?id=43249068) - [Global sales of combustion engine cars have peaked](https://ourworldindata.org/data-insights/global-sales-of-combustion-engine-cars-have-peaked)
* [2025-03-04, 01:19:39](https://lobste.rs/s/eluli7/botfly_test_characterizing_parasitic) - [The Botfly Test: Characterizing parasitic automated behavior in online communities](https://hannahilea.com/blog/botfly-test/)
* [2025-03-04, 01:09:04](https://news.ycombinator.com/item?id=43248947) - [DeepSeek's smallpond: Bringing Distributed Computing to DuckDB](https://mehdio.substack.com/p/duckdb-goes-distributed-deepseeks)
* [2025-03-04, 00:50:00](https://devices.slashdot.org/story/25/03/03/238215/google-play-is-going-to-start-highlighting-apps-with-widgets?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Play Is Going To Start Highlighting Apps With Widgets](https://devices.slashdot.org/story/25/03/03/238215/google-play-is-going-to-start-highlighting-apps-with-widgets?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 00:44:04](https://lobste.rs/s/4sfqtn/you_need_much_less_memory_than_time) - [You Need Much Less Memory than Time](https://blog.computationalcomplexity.org/2025/02/you-need-much-less-memory-than-time.html)
* [2025-03-04, 00:31:01](https://lobste.rs/s/4bxwnl/do_not_run_any_cargo_commands_on_untrusted) - [Do not run any Cargo commands on untrusted projects](https://shnatsel.medium.com/do-not-run-any-cargo-commands-on-untrusted-projects-4c31c89a78d6)
* [2025-03-04, 00:10:00](https://it.slashdot.org/story/25/03/03/2247209/us-to-halt-offensive-cyber-operations-against-russia?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US To Halt Offensive Cyber Operations Against Russia](https://it.slashdot.org/story/25/03/03/2247209/us-to-halt-offensive-cyber-operations-against-russia?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 00:04:03](https://news.ycombinator.com/item?id=43248429) - [Lawrence of Arabia, Paul Atreides, and the roots of Frank Herbert's Dune (2021)](https://reactormag.com/lawrence-of-arabia-paul-atreides-and-the-roots-of-frank-herberts-dune/)
* [2025-03-03, 23:30:00](https://tech.slashdot.org/story/25/03/03/2213252/driverless-race-car-sets-a-new-autonomous-speed-record?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Driverless Race Car Sets a New Autonomous Speed Record](https://tech.slashdot.org/story/25/03/03/2213252/driverless-race-car-sets-a-new-autonomous-speed-record?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-03, 22:56:01](https://lobste.rs/s/gvv27u/globstar_open_source_static_analysis) - [globstar — open-source static analysis toolkit for writing code checkers in YAML and GO](https://github.com/DeepSourceCorp/globstar)
* [2025-03-03, 22:50:00](https://slashdot.org/story/25/03/03/227225/microsoft-unveils-new-voice-activated-ai-assistant-for-doctors?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Unveils New Voice-Activated AI Assistant For Doctors](https://slashdot.org/story/25/03/03/227225/microsoft-unveils-new-voice-activated-ai-assistant-for-doctors?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-03, 22:19:48](https://lobste.rs/s/2wifpj/fibrovisor_turning_dollar_store_fibre) - [The Fibrovisor: Turning a dollar store fibre optic wand into a low resolution display](https://www.youtube.com/watch?v=zz59e1wWyVc)
* [2025-03-03, 22:14:12](https://lobste.rs/s/np4prk/use_firefox_2025) - [Use Firefox in 2025](https://alexn.org/blog/2025/03/03/use-firefox/)
* [2025-03-03, 22:10:00](https://news.slashdot.org/story/25/03/03/2135222/tsmc-pledges-to-spend-100-billion-on-us-chip-facilities?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [TSMC Pledges To Spend $100 Billion On US Chip Facilities](https://news.slashdot.org/story/25/03/03/2135222/tsmc-pledges-to-spend-100-billion-on-us-chip-facilities?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-03, 21:30:00](https://slashdot.org/story/25/03/03/2051256/former-intel-ceo-barrett-calls-for-board-dismissal-and-gelsingers-return?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Former Intel CEO Barrett Calls for Board Dismissal and Gelsinger's Return](https://slashdot.org/story/25/03/03/2051256/former-intel-ceo-barrett-calls-for-board-dismissal-and-gelsingers-return?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-03, 21:19:56](https://news.ycombinator.com/item?id=43246892) - [Repairable Flatpack Toaster](https://www.kaseyhou.com/#/repairable-flatpack-toaster/)
* [2025-03-03, 21:17:00](https://soylentnews.org/article.pl?sid=25/03/02/1651205&from=rss) - [A New Android Feature is Scanning Your Photos for 'Sensitive Content'](https://soylentnews.org/article.pl?sid=25/03/02/1651205&from=rss)
* [2025-03-03, 21:06:37](https://news.ycombinator.com/item?id=43246703) - [Comparing Fuchsia components and Linux containers [video]](https://fosdem.org/2025/schedule/event/fosdem-2025-5381-comparing-fuchsia-components-and-linux-containers/)
* [2025-03-03, 20:50:00](https://slashdot.org/story/25/03/03/2029218/call-centers-using-ai-to-whiten-indian-accents?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Call Centers Using AI To 'Whiten' Indian Accents](https://slashdot.org/story/25/03/03/2029218/call-centers-using-ai-to-whiten-indian-accents?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-03, 20:11:00](https://news.slashdot.org/story/25/03/03/2011256/the-us-cities-whose-workers-are-most-exposed-to-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The US Cities Whose Workers Are Most Exposed to AI](https://news.slashdot.org/story/25/03/03/2011256/the-us-cities-whose-workers-are-most-exposed-to-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-03, 20:05:32](https://lobste.rs/s/oychrz/vt220_font_emulation_browser) - [VT220 font emulation in browser](https://martin.janiczek.cz/vt220-font-emulation/)
* [2025-03-03, 19:01:04](https://lobste.rs/s/n7alkh/polars_rgonomic_patterns) - [polars’ Rgonomic Patterns](https://www.emilyriederer.com/post/py-rgo-polars)
* [2025-03-03, 18:39:32](https://news.ycombinator.com/item?id=43245153) - [Launch HN: Cuckoo (YC W25) – Real-time AI translator for global teams](https://news.ycombinator.com/item?id=43245153)
* [2025-03-03, 18:10:00](https://news.slashdot.org/story/25/03/03/182255/how-the-british-broke-their-own-economy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [How the British Broke Their Own Economy](https://news.slashdot.org/story/25/03/03/182255/how-the-british-broke-their-own-economy?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-03, 18:06:17](https://news.ycombinator.com/item?id=43244739) - [Hacking the Xbox 360 Hypervisor Part 2: The Bad Update Exploit](https://icode4.coffee/?p=1081)
* [2025-03-03, 17:45:25](https://lobste.rs/s/zonvms/when_declarative_systems_break) - [When declarative systems break](https://interjectedfuture.com/when-declarative-systems-break/)
* [2025-03-03, 17:40:00](https://news.slashdot.org/story/25/03/03/1740212/waiting-for-the-paperback-good-luck?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Waiting For the Paperback? Good Luck.](https://news.slashdot.org/story/25/03/03/1740212/waiting-for-the-paperback-good-luck?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-03, 17:29:12](https://news.ycombinator.com/item?id=43244307) - [SQLite-on-the-server is misunderstood: Better at hyper-scale than micro-scale](https://rivet.gg/blog/2025-02-16-sqlite-on-the-server-is-misunderstood)
* [2025-03-03, 17:17:26](https://news.ycombinator.com/item?id=43244166) - [Show HN: Sonauto API – Generative music for developers](https://sonauto.ai/developers)
* [2025-03-03, 17:03:03](https://news.ycombinator.com/item?id=43243914) - [The power of interning: making a time series database smaller](https://gendignoux.com/blog/2025/03/03/rust-interning-2000x.html)
* [2025-03-03, 17:01:59](https://news.ycombinator.com/item?id=43243893) - [Show HN: Agents.json – OpenAPI Specification for LLMs](https://github.com/wild-card-ai/agents-json)
* [2025-03-03, 17:01:47](https://lobste.rs/s/mlseaq/power_interning_making_time_series) - [The power of interning: making a time series database 2000x smaller in Rust](https://gendignoux.com/blog/2025/03/03/rust-interning-2000x.html)
* [2025-03-03, 16:52:00](https://news.slashdot.org/story/25/03/03/1652255/graduates-from-top-mba-programs-are-struggling-to-land-jobs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Graduates From Top MBA Programs Are Struggling To Land Jobs](https://news.slashdot.org/story/25/03/03/1652255/graduates-from-top-mba-programs-are-struggling-to-land-jobs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-03, 16:51:33](https://news.ycombinator.com/item?id=43243716) - [The Golden Age of Japanese Pencils (2022)](https://notes.stlartsupply.com/the-golden-age-of-japanese-pencils-1952-1967/)
* [2025-03-03, 16:40:34](https://news.ycombinator.com/item?id=43243580) - [TSMC expected to announce $100B investment in U.S.](https://www.wsj.com/tech/trump-chip-maker-tsmc-expected-to-announce-100-billion-investment-in-u-s-02a44399)
* [2025-03-03, 16:38:50](https://news.ycombinator.com/item?id=43243549) - [Go-attention: A full attention mechanism and transformer in pure Go](https://github.com/takara-ai/go-attention)
* [2025-03-03, 16:37:00](https://soylentnews.org/article.pl?sid=25/03/03/1430230&from=rss) - [U.S. Company Firefly Aerospace Just Landed On The Moon With Its Blue Ghost Spacecraft](https://soylentnews.org/article.pl?sid=25/03/03/1430230&from=rss)
* [2025-03-03, 16:06:50](https://news.ycombinator.com/item?id=43243109) - [An Attempt to Catch Up with JIT Compilers](https://arxiv.org/abs/2502.20547)
* [2025-03-03, 16:05:00](https://slashdot.org/story/25/03/03/164209/nvidia-and-broadcom-testing-chips-on-intel-manufacturing-process?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia and Broadcom Testing Chips on Intel Manufacturing Process](https://slashdot.org/story/25/03/03/164209/nvidia-and-broadcom-testing-chips-on-intel-manufacturing-process?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-03, 16:04:13](https://news.ycombinator.com/item?id=43243075) - [Apple's Software Quality Crisis](https://www.eliseomartelli.it/blog/2025-03-02-apple-quality)
* [2025-03-03, 16:01:41](https://news.ycombinator.com/item?id=43243024) - [Ask HN: Who is hiring? (March 2025)](https://news.ycombinator.com/item?id=43243024)
* [2025-03-03, 16:01:41](https://news.ycombinator.com/item?id=43243022) - [Ask HN: Who wants to be hired? (March 2025)](https://news.ycombinator.com/item?id=43243022)
* [2025-03-03, 15:58:56](https://lobste.rs/s/xexk4h/some_things_make_rust_lifetimes_hard) - [Some things that make Rust lifetimes hard to learn](https://ntietz.com/blog/rust-lifetimes-learning/)
* [2025-03-03, 15:43:20](https://news.ycombinator.com/item?id=43242818) - [Show HN: Knowledge graph of restaurants and chefs, built using LLMs](https://theophilecantelob.re/blog/2025/foudinge/)
* [2025-03-03, 14:47:02](https://lobste.rs/s/5ltsh1/why_can_t_we_screenshot_frames_from_drm) - [Why Can’t We Screenshot Frames From DRM-Protected Video on Apple Devices?](https://daringfireball.net/2025/03/why_cant_we_screenshot_frames_from_drm-protected_video)
* [2025-03-03, 14:16:09](https://lobste.rs/s/1npd1l/how_fast_can_you_open_1000_files) - [How fast can you open 1000 files?](https://lemire.me/blog/2025/03/01/how-fast-can-you-open-1000-files/)
* [2025-03-03, 11:50:00](https://soylentnews.org/article.pl?sid=25/03/02/1636204&from=rss) - [Superelastic Alloy That Functions in Extreme Temperatures Could Aid Space Exploration](https://soylentnews.org/article.pl?sid=25/03/02/1636204&from=rss)
* [2025-03-03, 11:44:14](https://lobste.rs/s/ibtxk2/hatetris_obsession_friendship_world) - [HATETRIS - Obsession, Friendship, and World Records](https://corecursive.com/hateris-with-david-and-felipe/)
* [2025-03-03, 11:31:38](https://lobste.rs/s/nydzso/float_walks_into_gradual_type_system) - [A float walks into a gradual type system](https://ruudvanasseldonk.com/2025/a-float-walks-into-a-gradual-type-system)
* [2025-03-03, 11:02:32](https://lobste.rs/s/x2rssd/empty_promise_ai_generated_creativity) - [The Empty Promise of AI-Generated Creativity](https://hey.paris/posts/genai/)
* [2025-03-03, 10:25:59](https://lobste.rs/s/paedv4/see_yourself_at_runtime) - [See yourself, at runtime](https://ryelang.org/blog/posts/see-yourself-at-runtime/)
* [2025-03-03, 08:44:06](https://news.ycombinator.com/item?id=43239699) - [Robust Wavefront OBJ model parsing in C](https://nullprogram.com/blog/2025/03/02/)
* [2025-03-03, 08:17:19](https://lobste.rs/s/tggkmv/illuminant_activitypub_server_with_nntp) - [illuminant - ActivityPub server with NNTP interface](https://koldfront.dk/git/illuminant/tree/README.md)
* [2025-03-03, 08:10:07](https://lobste.rs/s/epok9v/apple_s_software_quality_crisis_when) - [Apple's Software Quality Crisis: When Premium Hardware Meets Subpar Software](https://www.eliseomartelli.it/blog/2025-03-02-apple-quality)
* [2025-03-03, 07:05:00](https://soylentnews.org/article.pl?sid=25/03/02/1442219&from=rss) - [The Surveillance Tech Waiting for Workers as They Return to the Office](https://soylentnews.org/article.pl?sid=25/03/02/1442219&from=rss)
* [2025-03-03, 05:29:02](https://news.ycombinator.com/item?id=43238570) - [Show HN: FlakeUI](https://github.com/tearflake/flake-ui)
* [2025-03-03, 02:18:00](https://soylentnews.org/article.pl?sid=25/03/02/1437201&from=rss) - ['Utterly Cataclysmic': James Webb Telescope Spots 2 Alien Planets Disintegrating Before Our Eyes](https://soylentnews.org/article.pl?sid=25/03/02/1437201&from=rss)
* [2025-03-02, 21:34:00](https://soylentnews.org/article.pl?sid=25/03/02/1031228&from=rss) - [Auto-Color: An Emerging and Evasive Linux Backdoor](https://soylentnews.org/article.pl?sid=25/03/02/1031228&from=rss)
* [2025-03-02, 20:26:42](https://lobste.rs/s/zxthnz/tangled_git_collaboration_platform) - [Tangled — a git collaboration platform built on atproto](https://blog.tangled.sh/intro)
* [2025-03-02, 16:48:00](https://soylentnews.org/article.pl?sid=25/03/01/1531250&from=rss) - [Avast Antivirus Customers Can be Compensated for Harvesting of Their Personal Info](https://soylentnews.org/article.pl?sid=25/03/01/1531250&from=rss)
* [2025-03-02, 12:02:00](https://soylentnews.org/article.pl?sid=25/03/01/1515217&from=rss) - [Journalist Completely Misrepresents Quantum Teleportation](https://soylentnews.org/article.pl?sid=25/03/01/1515217&from=rss)
* [2025-03-02, 07:14:00](https://soylentnews.org/article.pl?sid=25/03/01/155219&from=rss) - [Chinese Chipmaker Claims New Loongson 3B6600 CPU Could Hit 13Th-Gen Intel Performance](https://soylentnews.org/article.pl?sid=25/03/01/155219&from=rss)
* [2025-03-02, 02:31:00](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss) - [Engineers Create Lightweight Multi-Color Fresnel Lens for Telescopes](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss)
* [2025-03-01, 21:49:00](https://soylentnews.org/article.pl?sid=25/03/01/0115227&from=rss) - [SpaceX: Actually, Dying Starlink Satellites Don't Always Fully Burn Up](https://soylentnews.org/article.pl?sid=25/03/01/0115227&from=rss)
* [2025-03-01, 20:11:15](https://news.ycombinator.com/item?id=43223162) - [Ask HN: What less-popular systems programming language are you using?](https://news.ycombinator.com/item?id=43223162)
* [2025-03-01, 17:47:27](https://news.ycombinator.com/item?id=43221633) - [Windows NT for GameCube/Wii](https://github.com/Wack0/entii-for-workcubes)
* [2025-03-01, 17:01:00](https://soylentnews.org/article.pl?sid=25/03/01/0055211&from=rss) - [Pandas \"Tricked\" Into Becoming the World's Biggest Bamboo Fans](https://soylentnews.org/article.pl?sid=25/03/01/0055211&from=rss)
* [2025-03-01, 12:17:00](https://soylentnews.org/article.pl?sid=25/03/01/0049207&from=rss) - [Skype is Shutting Down After Two Decades](https://soylentnews.org/article.pl?sid=25/03/01/0049207&from=rss)
* [2025-03-01, 08:19:11](https://news.ycombinator.com/item?id=43217209) - [The cost of Go's panic and recover](https://jub0bs.com/posts/2025-02-28-cost-of-panic-recover/)
* [2025-03-01, 07:36:00](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss) - [Five Days of Ultra-Processed Food: Study Finds That's Enough to Alter the Brain](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss)
* [2025-03-01, 05:55:24](https://news.ycombinator.com/item?id=43216399) - [4 mains or nothing at all](https://andrews.substack.com/p/4-mains-or-nothing-at-all)
* [2025-03-01, 02:53:00](https://soylentnews.org/article.pl?sid=25/02/28/0654225&from=rss) - [Internet Society Wants to Improve Terrestrial Fibre Maps](https://soylentnews.org/article.pl?sid=25/02/28/0654225&from=rss)
* [2025-02-28, 22:05:00](https://soylentnews.org/article.pl?sid=25/02/28/0647213&from=rss) - [Water Chlorination Might Be Raising Our Risk Of Certain Cancers](https://soylentnews.org/article.pl?sid=25/02/28/0647213&from=rss)
* [2025-02-28, 21:15:36](https://news.ycombinator.com/item?id=43211101) - [Ohio One Construction Timeline Update](https://newsroom.intel.com/corporate/ohio-one-construction-timeline-update)
* [2025-02-28, 17:17:00](https://soylentnews.org/article.pl?sid=25/02/28/0643220&from=rss) - [US Investigates Whether Deepseek Obtained NVidia Chips Through Singapore to Bypass Restrictions](https://soylentnews.org/article.pl?sid=25/02/28/0643220&from=rss)
* [2025-02-28, 15:24:48](https://news.ycombinator.com/item?id=43206622) - [Another Conflict Between Privacy Laws and Age Authentication–Murphy v Confirm ID](https://blog.ericgoldman.org/archives/2025/02/another-conflict-between-privacy-laws-and-age-authentication-murphy-v-confirm-id.htm)
* [2025-02-28, 12:32:00](https://soylentnews.org/article.pl?sid=25/02/28/0640209&from=rss) - [PSA: Amazon Kills “Download & Transfer Via USB” Option for Kindles This Week](https://soylentnews.org/article.pl?sid=25/02/28/0640209&from=rss)
* [2025-02-28, 07:47:00](https://soylentnews.org/article.pl?sid=25/02/27/1641235&from=rss) - [NASA's James Webb Space Telescope Faces Potential 20% Budget Cut Just 4 Years Into its Mission](https://soylentnews.org/article.pl?sid=25/02/27/1641235&from=rss)
* [2025-02-28, 03:05:00](https://soylentnews.org/article.pl?sid=25/02/27/1633200&from=rss) - [Piezoelectric Catalyst Destroys Forever Chemicals](https://soylentnews.org/article.pl?sid=25/02/27/1633200&from=rss)
