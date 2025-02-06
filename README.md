# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Programming Developments

* [Mixing Rust and C in Linux Likened To Cancer By Kernel Maintainer](https://linux.slashdot.org/story/25/02/06/1830233/mixing-rust-and-c-in-linux-likened-to-cancer-by-kernel-maintainer?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Hugging Face Clones OpenAI's Deep Research In 24 Hours](https://news.slashdot.org/story/25/02/06/216251/hugging-face-clones-openais-deep-research-in-24-hours?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Updating a large codebase to Rust 2024](https://codeandbitters.com/rust-2024-upgrade/)

* [Researchers Created an Open Rival To OpenAI's o1 'Reasoning' Model for Under $50](https://slashdot.org/story/25/02/06/1445231/researchers-created-an-open-rival-to-openais-o1-reasoning-model-for-under-50?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [GitHub Copilot: The agent awakens](https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens/)

* [Fabrication begins for production OpenTitan silicon](https://opensource.googleblog.com/2025/02/fabrication-begins-for-production-opentitan-silicon.html)

## Artificial Intelligence and Innovations

* [DeepSeek's AI App Will 'Highly Likely' Get Banned in the US, Jefferies Says](https://slashdot.org/story/25/02/06/1544203/deepseeks-ai-app-will-highly-likely-get-banned-in-the-us-jefferies-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [An Anonymous Investor Is Spending Millions To Make Underwater Homes](https://news.slashdot.org/story/25/02/06/057212/an-anonymous-investor-is-spending-millions-to-make-underwater-homes?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Llama's Paradox - Exploiting Llama.cpp](https://retr0.blog/blog/llama-rpc-rce)

## Entertainment and Culture

* [Warner Bros. Releases Dozens of Old Films for Free on YouTube, Bypassing Paid Streaming](https://entertainment.slashdot.org/story/25/02/06/1728243/warner-bros-releases-dozens-of-old-films-for-free-on-youtube-bypassing-paid-streaming?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [DOOM running on Apple Lightning to HDMI dongle](https://youtu.be/4XCkeN0XuqA)

* [Verse (YC W22) Is Hiring](https://news.ycombinator.com/item?id=42966455)

## Scientific Discoveries and Research

* [Grand Canyon-Sized Valleys On the Moon Formed Within 10 Minutes](https://science.slashdot.org/story/25/02/06/0425233/grand-canyon-sized-valleys-on-the-moon-formed-within-10-minutes?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Humanlike 'Teeth' Have Been Grown in Mini Pigs](https://science.slashdot.org/story/25/02/06/1556257/humanlike-teeth-have-been-grown-in-mini-pigs?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Air Pollution Reduces People's Ability To Focus on Everyday Tasks, Study Finds](https://news.slashdot.org/story/25/02/06/1816221/air-pollution-reduces-peoples-ability-to-focus-on-everyday-tasks-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Quirky and Unique Features

* [Cooking Flawless Pasta - it's Science!](https://soylentnews.org/article.pl?sid=25/02/04/1518208&from=rss)

* [Perpetual Stew](https://en.wikipedia.org/wiki/Perpetual_stew)

* [Transfinite NIM (the game, not the programming language)](https://jdh.hamkins.org/transfinite-nim/)

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

* [2025-02-06, 21:50:00](https://games.slashdot.org/story/25/02/06/2120258/esa-wants-to-replace-e3-with-a-bunch-of-buzzwords?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [ESA Wants To Replace E3 With a Bunch of Buzzwords](https://games.slashdot.org/story/25/02/06/2120258/esa-wants-to-replace-e3-with-a-bunch-of-buzzwords?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 21:14:16](https://lobste.rs/s/2tt5ju/llama_s_paradox_exploiting_llama_cpp) - [Llama's Paradox - Exploiting Llama.cpp](https://retr0.blog/blog/llama-rpc-rce)
* [2025-02-06, 21:12:00](https://soylentnews.org/article.pl?sid=25/02/04/1537254&from=rss) - [Warmer, More Crowded Cities Bring Out the Rats](https://soylentnews.org/article.pl?sid=25/02/04/1537254&from=rss)
* [2025-02-06, 21:08:00](https://news.slashdot.org/story/25/02/06/216251/hugging-face-clones-openais-deep-research-in-24-hours?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hugging Face Clones OpenAI's Deep Research In 24 Hours](https://news.slashdot.org/story/25/02/06/216251/hugging-face-clones-openais-deep-research-in-24-hours?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 21:00:23](https://news.ycombinator.com/item?id=42966455) - [Verse (YC W22) Is Hiring](https://news.ycombinator.com/item?id=42966455)
* [2025-02-06, 20:35:44](https://lobste.rs/s/cxpkpn/doom_running_on_apple_lightning_hdmi) - [DOOM running on Apple Lightning to HDMI dongle](https://youtu.be/4XCkeN0XuqA)
* [2025-02-06, 20:10:04](https://lobste.rs/s/x0yjt0/negotiability_severity_levels) - [The Negotiability of “Severity” Levels](https://www.adaptivecapacitylabs.com/2019/05/20/the-negotiability-of-severity-levels/)
* [2025-02-06, 20:02:03](https://news.ycombinator.com/item?id=42965954) - [R1 Computer Use](https://github.com/agentsea/r1-computer-use)
* [2025-02-06, 19:57:09](https://lobste.rs/s/2waxyd/closer_look_at_tanmatsu) - [A Closer Look At The Tanmatsu](https://hackaday.com/2025/02/04/a-closer-look-at-the-tanmatsu/)
* [2025-02-06, 19:27:56](https://lobste.rs/s/zqpfyj/fabrication_begins_for_production) - [Fabrication begins for production OpenTitan silicon](https://opensource.googleblog.com/2025/02/fabrication-begins-for-production-opentitan-silicon.html)
* [2025-02-06, 19:27:37](https://news.ycombinator.com/item?id=42965627) - [Perpetual Stew](https://en.wikipedia.org/wiki/Perpetual_stew)
* [2025-02-06, 19:26:26](https://lobste.rs/s/pszqzl/github_copilot_agent_awakens) - [GitHub Copilot: The agent awakens](https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens/)
* [2025-02-06, 19:22:00](https://linux.slashdot.org/story/25/02/06/1830233/mixing-rust-and-c-in-linux-likened-to-cancer-by-kernel-maintainer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mixing Rust and C in Linux Likened To Cancer By Kernel Maintainer](https://linux.slashdot.org/story/25/02/06/1830233/mixing-rust-and-c-in-linux-likened-to-cancer-by-kernel-maintainer?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 19:03:50](https://news.ycombinator.com/item?id=42965404) - [Microsoft Go 1.24 FIPS changes](https://devblogs.microsoft.com/go/go-1-24-fips-update/)
* [2025-02-06, 18:48:05](https://news.ycombinator.com/item?id=42965267) - [Self-hosted, simple web browser service – send URL, get screenshots](https://github.com/US-Artificial-Intelligence/scraper)
* [2025-02-06, 18:41:00](https://news.slashdot.org/story/25/02/06/1816221/air-pollution-reduces-peoples-ability-to-focus-on-everyday-tasks-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Air Pollution Reduces People's Ability To Focus on Everyday Tasks, Study Finds](https://news.slashdot.org/story/25/02/06/1816221/air-pollution-reduces-peoples-ability-to-focus-on-everyday-tasks-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 18:40:30](https://news.ycombinator.com/item?id=42965198) - [SQLite Disk Page Explorer](https://github.com/QuadrupleA/sqlite-page-explorer)
* [2025-02-06, 18:00:00](https://entertainment.slashdot.org/story/25/02/06/1728243/warner-bros-releases-dozens-of-old-films-for-free-on-youtube-bypassing-paid-streaming?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Warner Bros. Releases Dozens of Old Films for Free on YouTube, Bypassing Paid Streaming](https://entertainment.slashdot.org/story/25/02/06/1728243/warner-bros-releases-dozens-of-old-films-for-free-on-youtube-bypassing-paid-streaming?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 17:54:50](https://news.ycombinator.com/item?id=42964773) - [Scala 3 Migration: Report from the Field](https://blog.pierre-ricadat.com/scala-3-migration-report-from-the-field)
* [2025-02-06, 17:50:10](https://lobste.rs/s/ficdn9/updating_large_codebase_rust_2024) - [Updating a large codebase to Rust 2024](https://codeandbitters.com/rust-2024-upgrade/)
* [2025-02-06, 17:22:00](https://it.slashdot.org/story/25/02/06/171222/qwertykeys-halts-keyboard-shipments-to-us-over-tariff-costs-and-confusion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Qwertykeys Halts Keyboard Shipments To US Over Tariff Costs and Confusion](https://it.slashdot.org/story/25/02/06/171222/qwertykeys-halts-keyboard-shipments-to-us-over-tariff-costs-and-confusion?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 16:40:00](https://science.slashdot.org/story/25/02/06/1556257/humanlike-teeth-have-been-grown-in-mini-pigs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Humanlike 'Teeth' Have Been Grown in Mini Pigs](https://science.slashdot.org/story/25/02/06/1556257/humanlike-teeth-have-been-grown-in-mini-pigs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 16:39:36](https://lobste.rs/s/hfa6dy/frink_data_file_for_non_changing_units) - [Frink data file for non-changing units](https://frinklang.org/frinkdata/units.txt)
* [2025-02-06, 16:24:00](https://soylentnews.org/article.pl?sid=25/02/04/1528253&from=rss) - [Who's Your Pick?  Eagles or Chiefs? Or Statistics?](https://soylentnews.org/article.pl?sid=25/02/04/1528253&from=rss)
* [2025-02-06, 16:16:21](https://lobste.rs/s/jpuqs4/which_rich_text_editor_framework_should) - [Which rich text editor framework should you choose in 2025?](https://liveblocks.io/blog/which-rich-text-editor-framework-should-you-choose-in-2025)
* [2025-02-06, 16:00:00](https://slashdot.org/story/25/02/06/1544203/deepseeks-ai-app-will-highly-likely-get-banned-in-the-us-jefferies-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek's AI App Will 'Highly Likely' Get Banned in the US, Jefferies Says](https://slashdot.org/story/25/02/06/1544203/deepseeks-ai-app-will-highly-likely-get-banned-in-the-us-jefferies-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 15:48:54](https://news.ycombinator.com/item?id=42963501) - [Transfinite NIM (the game, not the programming language)](https://jdh.hamkins.org/transfinite-nim/)
* [2025-02-06, 15:35:32](https://news.ycombinator.com/item?id=42963346) - [Show HN: An homage to Tom Dowdy's 1991 screensaver, \"Kaos\"](https://thestrikeagency.com/kaos/)
* [2025-02-06, 15:21:00](https://tech.slashdot.org/story/25/02/06/1514246/amd-is-making-another-run-at-nvidia-with-new-4k-ready-gpus-as-sales-collapse?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AMD is Making Another Run at Nvidia With New 4K-Ready GPUs as Sales Collapse](https://tech.slashdot.org/story/25/02/06/1514246/amd-is-making-another-run-at-nvidia-with-new-4k-ready-gpus-as-sales-collapse?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 14:53:39](https://lobste.rs/s/nghoy0/ais_robots_should_sound_robotic) - [AIs and Robots Should Sound Robotic](https://www.schneier.com/blog/archives/2025/02/ais-and-robots-should-sound-robotic.html)
* [2025-02-06, 14:50:28](https://lobste.rs/s/89h9eb/html_whitespace_is_broken) - [HTML Whitespace is Broken](https://blog.dwac.dev/posts/html-whitespace/)
* [2025-02-06, 14:45:00](https://slashdot.org/story/25/02/06/1445231/researchers-created-an-open-rival-to-openais-o1-reasoning-model-for-under-50?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Researchers Created an Open Rival To OpenAI's o1 'Reasoning' Model for Under $50](https://slashdot.org/story/25/02/06/1445231/researchers-created-an-open-rival-to-openais-o1-reasoning-model-for-under-50?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 14:35:04](https://news.ycombinator.com/item?id=42962702) - [U.S. Government Disclosed 39 Zero-Day Vulnerabilities in 2023, First-Ever Report](https://www.zetter-zeroday.com/u-s-government-disclosed-39-zero-day-vulnerabilities-in-2023-per-first-ever-report/)
* [2025-02-06, 14:15:28](https://news.ycombinator.com/item?id=42962508) - [Simulating Water over Terrain](https://lisyarus.github.io/blog/posts/simulating-water-over-terrain.html)
* [2025-02-06, 14:14:15](https://lobste.rs/s/ahndh2/three_basic_rules_safety_hygiene) - [The Three Basic Rules of Safety Hygiene](https://jack.wrenn.fyi/blog/safety-hygiene/)
* [2025-02-06, 14:00:00](https://tech.slashdot.org/story/25/02/06/0947248/believing-in-aliens-derailed-this-internet-pioneers-career-now-hes-facing-prison?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Believing in Aliens Derailed This Internet Pioneer's Career. Now He's Facing Prison](https://tech.slashdot.org/story/25/02/06/0947248/believing-in-aliens-derailed-this-internet-pioneers-career-now-hes-facing-prison?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 13:24:50](https://lobste.rs/s/ytdpaw/inevitability_borrow_checker) - [The inevitability of the borrow checker](https://yorickpeterse.com/articles/the-inevitability-of-the-borrow-checker/)
* [2025-02-06, 13:16:25](https://lobste.rs/s/5jsqeq/profiling_production_with_function_call) - [Profiling in production with function call traces](https://yosefk.com/blog/profiling-in-production-with-function-call-traces.html)
* [2025-02-06, 13:00:00](https://tech.slashdot.org/story/25/02/06/0454231/the-enshittification-hall-of-shame?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Enshittification Hall of Shame](https://tech.slashdot.org/story/25/02/06/0454231/the-enshittification-hall-of-shame?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 12:58:27](https://lobste.rs/s/e8tdsr/asdf_version_manager_has_been_re_written) - [Asdf Version Manager Has Been Re-Written in Golang](https://stratus3d.com/blog/2025/02/03/asdf-has-been-rewritten-in-go)
* [2025-02-06, 12:39:37](https://news.ycombinator.com/item?id=42961795) - [Explorable Flexagons: Learn to create and flex flexagons (2020)](http://loki3.com/flex/explore/)
* [2025-02-06, 12:09:55](https://news.ycombinator.com/item?id=42961606) - [Science of Microwave Ovens (2016)](https://www.genuineideas.com/ArticlesIndex/wave.html)
* [2025-02-06, 11:40:00](https://soylentnews.org/article.pl?sid=25/02/04/1521226&from=rss) - [Google Offering ‘Voluntary Exit’ for Employees Working on Pixel, Android](https://soylentnews.org/article.pl?sid=25/02/04/1521226&from=rss)
* [2025-02-06, 10:38:45](https://lobste.rs/s/wysspc/just_because_you_re_getting_index_scan) - [Just because you’re getting an index scan, doesn't mean you can’t do better](https://www.pgmustard.com/blog/index-scan-doesnt-mean-its-fast)
* [2025-02-06, 10:31:06](https://news.ycombinator.com/item?id=42960989) - [Pre-Trained Large Language Models Use Fourier Features for Addition (2024)](https://arxiv.org/abs/2406.03445)
* [2025-02-06, 10:13:26](https://news.ycombinator.com/item?id=42960907) - [Aluminum Batteries Outlive Lithium-Ion with a Pinch of Salt](https://spectrum.ieee.org/aluminum-battery)
* [2025-02-06, 10:07:14](https://lobste.rs/s/ljvz0s/freebsd_hi_fi_audio_setup_bit_perfect) - [FreeBSD and hi-fi audio setup: bit-perfect, equalizer, real-time](https://m4c.pl/blog/freebsd-audio-setup-bitperfect-equalizer-realtime/)
* [2025-02-06, 10:00:00](https://news.slashdot.org/story/25/02/06/057212/an-anonymous-investor-is-spending-millions-to-make-underwater-homes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [An Anonymous Investor Is Spending Millions To Make Underwater Homes](https://news.slashdot.org/story/25/02/06/057212/an-anonymous-investor-is-spending-millions-to-make-underwater-homes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 09:36:36](https://lobste.rs/s/cbvnzl/string_vs_str) - [String vs &str](https://blog.sulami.xyz/posts/string-vs-str/)
* [2025-02-06, 09:03:33](https://lobste.rs/s/2etd7f/sqlite_postgresql_it_s_complicated) - [SQLite or PostgreSQL? It's Complicated](https://www.twilio.com/en-us/blog/sqlite-postgresql-complicated)
* [2025-02-06, 08:53:46](https://lobste.rs/s/dp5e4g/it_is_time_standardize_principles) - [It Is Time to Standardize Principles and Practices for Software Memory Safety](https://cacm.acm.org/opinion/it-is-time-to-standardize-principles-and-practices-for-software-memory-safety/)
* [2025-02-06, 07:58:33](https://news.ycombinator.com/item?id=42960144) - [Paper Apps](https://gladdendesign.com/collections/paper-apps)
* [2025-02-06, 07:02:06](https://lobste.rs/s/3vhpzg/hotline_for_modern_apple_systems) - [Hotline for modern Apple systems](https://github.com/mierau/hotline)
* [2025-02-06, 07:00:00](https://science.slashdot.org/story/25/02/06/0425233/grand-canyon-sized-valleys-on-the-moon-formed-within-10-minutes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Grand Canyon-Sized Valleys On the Moon Formed Within 10 Minutes](https://science.slashdot.org/story/25/02/06/0425233/grand-canyon-sized-valleys-on-the-moon-formed-within-10-minutes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 06:55:00](https://soylentnews.org/article.pl?sid=25/02/04/1518208&from=rss) - [Cooking Flawless Pasta - it's Science!](https://soylentnews.org/article.pl?sid=25/02/04/1518208&from=rss)
* [2025-02-06, 04:54:18](https://news.ycombinator.com/item?id=42959226) - [Show HN: Heap Explorer](https://github.com/heap-exploitation/heap-explorer)
* [2025-02-06, 03:30:34](https://news.ycombinator.com/item?id=42958696) - [Programming SDF Animations of Rick and Morty](https://danielchasehooper.com/posts/code-animated-rick/)
* [2025-02-06, 03:30:00](https://tech.slashdot.org/story/25/02/06/0028228/lets-encrypt-is-ending-expiration-notice-emails?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Let's Encrypt Is Ending Expiration Notice Emails](https://tech.slashdot.org/story/25/02/06/0028228/lets-encrypt-is-ending-expiration-notice-emails?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 02:13:00](https://soylentnews.org/article.pl?sid=25/02/04/1511202&from=rss) - [These Smart Glasses Help People With Macular Degeneration By Eliminating Blind Spots](https://soylentnews.org/article.pl?sid=25/02/04/1511202&from=rss)
* [2025-02-06, 01:28:17](https://news.ycombinator.com/item?id=42957823) - [I believe 6502 instruction set is a good first assembly language](https://nemanjatrifunovic.substack.com/p/6502-is-a-good-starting-point-for)
* [2025-02-05, 21:24:00](https://soylentnews.org/article.pl?sid=25/02/04/157244&from=rss) - [Giant Study Questions Link Between Autism and Maternal Health](https://soylentnews.org/article.pl?sid=25/02/04/157244&from=rss)
* [2025-02-05, 21:10:25](https://news.ycombinator.com/item?id=42955176) - [Okta Bcrypt incident lessons for designing better APIs](https://n0rdy.foo/posts/20250121/okta-bcrypt-lessons-for-better-apis/)
* [2025-02-05, 19:28:56](https://lobste.rs/s/cyotj6/all_bear_blogs_can_use_hashtags_now_via) - [All Bear blogs can use hashtags now via Octothorpes](https://octothorpes.bearblog.dev/you-can-use-hashtags-on-your-bear-blog-now/)
* [2025-02-05, 19:21:34](https://lobste.rs/s/khlha3/sudoku_affair) - [the sudoku affair](https://explaining.software/archive/the-sudoku-affair/)
* [2025-02-05, 19:08:12](https://news.ycombinator.com/item?id=42953508) - [Tell HN: Cloudflare is blocking Pale Moon and other non-mainstream browsers](https://news.ycombinator.com/item?id=42953508)
* [2025-02-05, 18:05:28](https://news.ycombinator.com/item?id=42952605) - [Ingesting PDFs and why Gemini 2.0 changes everything](https://www.sergey.fyi/articles/gemini-flash-2)
* [2025-02-05, 16:43:00](https://soylentnews.org/article.pl?sid=25/02/04/1455221&from=rss) - [Everyone Knows Your Location: Tracking Myself Down Through in-App Ads](https://soylentnews.org/article.pl?sid=25/02/04/1455221&from=rss)
* [2025-02-05, 15:53:40](https://lobste.rs/s/tdnc9j/go_supply_chain_attack_malicious_package) - [Go Supply Chain Attack: Malicious Package Exploits Go Module](https://socket.dev/blog/malicious-package-exploits-go-module-proxy-caching-for-persistence)
* [2025-02-05, 14:47:32](https://news.ycombinator.com/item?id=42949181) - [Why is Warner Bros. Discovery putting old movies on YouTube?](https://tedium.co/2025/02/05/warner-bros-youtube-full-movie-releases/)
* [2025-02-05, 13:15:00](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss) - [Soylent Update - February 2025](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss)
* [2025-02-05, 12:17:47](https://news.ycombinator.com/item?id=42947447) - [OpenLDK: A Java JIT compiler and runtime in Common Lisp](https://github.com/atgreen/openldk)
* [2025-02-05, 12:00:00](https://soylentnews.org/article.pl?sid=25/02/04/042215&from=rss) - [Microsoft Defender's VPN Feature Will be Killed Off at the End of February](https://soylentnews.org/article.pl?sid=25/02/04/042215&from=rss)
* [2025-02-05, 11:35:13](https://news.ycombinator.com/item?id=42947081) - [My Status Circles](https://www.overcomingbias.com/p/my-status-circles)
* [2025-02-05, 10:53:02](https://news.ycombinator.com/item?id=42946752) - [Steve Meretzky – Working with Douglas Adams on the Hitchhiker's Guide](https://spillhistorie.no/qa-with-game-designer-steve-meretzky/)
* [2025-02-05, 07:17:00](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss) - [Tesla and BMW Sue European Commission Over Chinese EV Tariffs](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss)
* [2025-02-05, 03:00:28](https://lobste.rs/s/pwqgmz/zig_what_i_think_after_months_using_it) - [Zig; what I think after months of using it](https://strongly-typed-thoughts.net/blog/zig-2025)
* [2025-02-05, 02:35:00](https://soylentnews.org/article.pl?sid=25/02/04/0355255&from=rss) - [Medical Monitoring Machines Spotted Stealing Patient Data](https://soylentnews.org/article.pl?sid=25/02/04/0355255&from=rss)
* [2025-02-04, 21:50:00](https://soylentnews.org/article.pl?sid=25/02/04/0352219&from=rss) - [Artificial Gills Unlock Long-Range Underwater Robots](https://soylentnews.org/article.pl?sid=25/02/04/0352219&from=rss)
* [2025-02-04, 17:08:00](https://soylentnews.org/article.pl?sid=25/02/03/1327213&from=rss) - [NASA's Returned Asteroid Samples Hold the Ingredients of Life From a Watery World](https://soylentnews.org/article.pl?sid=25/02/03/1327213&from=rss)
* [2025-02-04, 12:23:00](https://soylentnews.org/article.pl?sid=25/02/02/1444250&from=rss) - [Fediverse Explosive Growth - 100m Posts in January](https://soylentnews.org/article.pl?sid=25/02/02/1444250&from=rss)
* [2025-02-04, 07:41:00](https://soylentnews.org/article.pl?sid=25/02/02/1338233&from=rss) - [US to Deploy Molten Salt Reactors to Turn Wastewater Into Freshwater](https://soylentnews.org/article.pl?sid=25/02/02/1338233&from=rss)
* [2025-02-04, 02:56:00](https://soylentnews.org/article.pl?sid=25/02/02/141218&from=rss) - [How Does DeepSeek R1 Really Fare Against OpenAI's Best Reasoning Models?](https://soylentnews.org/article.pl?sid=25/02/02/141218&from=rss)
* [2025-02-03, 22:13:00](https://soylentnews.org/article.pl?sid=25/02/02/1354257&from=rss) - [Bug That Kills PC's Audio is Seriously Widespread Affecting Multiple Windows Versions](https://soylentnews.org/article.pl?sid=25/02/02/1354257&from=rss)
* [2025-02-03, 17:25:00](https://soylentnews.org/article.pl?sid=25/02/02/1347234&from=rss) - [The Growing Antibiotic Resistance Problem Requires Better Policy](https://soylentnews.org/article.pl?sid=25/02/02/1347234&from=rss)
* [2025-02-03, 12:40:00](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss) - [About Zusie (Relay Based Computer)](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss)
* [2025-02-03, 11:22:44](https://news.ycombinator.com/item?id=42917135) - [T1: A RISC-V Vector processor implementation](https://github.com/chipsalliance/t1)
* [2025-02-03, 07:54:34](https://news.ycombinator.com/item?id=42915944) - [Evaluating Code Embeddings](https://blog.voyageai.com/2024/12/04/code-retrieval-eval/)
* [2025-02-03, 07:51:00](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss) - [The Network State Coup is Happening Right Now](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss)
* [2025-02-03, 03:07:00](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss) - [How One YouTuber is Trying to Poison the AI Bots Stealing Her Content](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss)
* [2025-02-02, 22:23:00](https://soylentnews.org/article.pl?sid=25/02/01/1439213&from=rss) - [Infosec Was Trump's Lowest Priority, But He'll Change Bigly](https://soylentnews.org/article.pl?sid=25/02/01/1439213&from=rss)
* [2025-02-02, 18:41:04](https://news.ycombinator.com/item?id=42910667) - [Par: Process language with an interactive playground for exploring concurrency](https://github.com/faiface/par-lang)
* [2025-02-02, 17:38:00](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss) - [Maker Resurrects Toshiba T1000 With a Raspberry Pi 4 and a Slew of Upgrades](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss)
* [2025-02-02, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss) - [Trump Says Microsoft is in Contention to Buy TikTok](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss)
* [2025-02-02, 08:08:00](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss) - [DeepDive into DeepSeek](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss)
* [2025-02-02, 04:43:00](https://news.ycombinator.com/item?id=42905900) - [Minimum effective dose](https://winnielim.org/journal/minimum-effective-dose/)
* [2025-02-02, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss) - [Fake Google Ads Trick Mac Users To Install Homebrew Malware](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss)
