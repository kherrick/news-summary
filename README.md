# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Developments

* [go-attention: A full attention mechanism and transformer in pure Go](https://github.com/takara-ai/go-attention) - Explore a pure Go implementation of a full attention mechanism and transformer, reflecting advancements in machine learning frameworks. [Comments](https://lobste.rs/s/9ectnm/go_attention_full_attention_mechanism)

* [xAI Releases Its Latest Flagship Model, Grok 3](https://slashdot.org/story/25/02/18/0711226/xai-releases-its-latest-flagship-model-grok-3?utm_source=rss1.0mainlinkanon&utm_medium=feed) - xAI unveils Grok 3, its newest flagship AI model with significant potential for machine learning applications. [Comments](https://slashdot.org/story/25/02/18/0711226/xai-releases-its-latest-flagship-model-grok-3?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Sandisk Puts Petabyte SSDs On the Roadmap](https://hardware.slashdot.org/story/25/02/18/047217/sandisk-puts-petabyte-ssds-on-the-roadmap?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Sandisk outlines plans for petabyte-scale SSDs, paving the way for monumental data storage solutions. [Comments](https://hardware.slashdot.org/story/25/02/18/047217/sandisk-puts-petabyte-ssds-on-the-roadmap?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [ACCESS.bus: The Forgotten USB Competitor](https://tedium.co/2025/02/17/access-bus-i2c-usb-competitor-history/) - Dive into the forgotten history of ACCESS.bus, a USB alternative that could have changed computing connectivity. [Comments](https://lobste.rs/s/a83yzz/access_bus_forgotten_usb_competitor)

## Science and Exploration

* [Targeting Amino Acids to Search for Life on Mars](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss) - New methods to detect amino acids on Mars could revolutionize our understanding of extraterrestrial life. [Comments](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss)

* [670nm red light exposure improved aged mitochondrial function, colour vision](https://www.nature.com/articles/s41598-021-02311-1) - Research shows red light therapy improves mitochondrial function and color vision, shedding light on anti-aging techniques. [Comments](https://news.ycombinator.com/item?id=43066394)

## Unique and Quirky

* [Show HN: Live-updating version of the 'What a week, huh?' meme](https://tintin.dlazaro.ca/) - This project offers a live-updating take on the iconic meme, combining humor with innovative technology. [Comments](https://news.ycombinator.com/item?id=43086479)

* [A web platform for using YouTube as a drum sequencer](https://youtubesequencer.com/) - A creative platform enabling users to turn YouTube videos into drum sequences for musical experimentation. [Comments](https://news.ycombinator.com/item?id=43085492)

## Software and Programming

* [New "faux bus" API merged for Linux 6.14, including both Rust & C bindings](https://www.phoronix.com/news/Linux-6.14-Faux-Bus-Merged) - Linux 6.14 introduces a new API with support for innovative Rust and C bindings. [Comments](https://lobste.rs/s/sg14pc/new_faux_bus_api_merged_for_linux_6_14)

* [Learning Lean: Part 1](https://rkirov.github.io/posts/lean1/) - An accessible entry point for mastering Lean, a powerful proof assistant enabling formal verification. [Comments](https://lobste.rs/s/cdbjll/learning_lean_part_1)

## Cultural and Historical Insights

* [Sony FX-300 Jackal: A technological marvel of the late 70s (2021)](https://swling.com/blog/2021/03/the-sony-fx-300-jackal-a-holy-grail-technological-marvel-of-the-late-70s/) - A retrospective on the Sony FX-300, a groundbreaking device from the late 1970s that captivated technology enthusiasts. [Comments](https://news.ycombinator.com/item?id=43085687)

* [Why can't we remember our lives as babies or toddlers?](https://www.theguardian.com/science/2025/feb/16/why-cant-we-remember-our-lives-as-babies-or-toddlers) - A scientific exploration into childhood amnesia and the mysteries of early memory development. [Comments](https://news.ycombinator.com/item?id=43084355)

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

* [2025-02-18, 09:19:26](https://lobste.rs/s/9ectnm/go_attention_full_attention_mechanism) - [go-attention: A full attention mechanism and transformer in pure Go](https://github.com/takara-ai/go-attention)
* [2025-02-18, 08:39:50](https://lobste.rs/s/vpiex3/code_style_sheets_css_for_code) - [Code Style Sheets: CSS for Code](https://arxiv.org/pdf/2502.09386)
* [2025-02-18, 07:30:00](https://slashdot.org/story/25/02/18/0711226/xai-releases-its-latest-flagship-model-grok-3?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [xAI Releases Its Latest Flagship Model, Grok 3](https://slashdot.org/story/25/02/18/0711226/xai-releases-its-latest-flagship-model-grok-3?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 07:19:00](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss) - [Targeting Amino Acids to Search for Life on Mars](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss)
* [2025-02-18, 06:56:01](https://lobste.rs/s/cdbjll/learning_lean_part_1) - [Learning Lean: Part 1](https://rkirov.github.io/posts/lean1/)
* [2025-02-18, 06:30:00](https://hardware.slashdot.org/story/25/02/18/047217/sandisk-puts-petabyte-ssds-on-the-roadmap?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sandisk Puts Petabyte SSDs On the Roadmap](https://hardware.slashdot.org/story/25/02/18/047217/sandisk-puts-petabyte-ssds-on-the-roadmap?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 06:02:13](https://lobste.rs/s/ds1odn/mtr_metrics) - [mtr metrics](http://mk16.de/blog/mtr-metrics/)
* [2025-02-18, 05:53:55](https://news.ycombinator.com/item?id=43086479) - [Show HN: Live-updating version of the 'What a week, huh?' meme](https://tintin.dlazaro.ca/)
* [2025-02-18, 05:03:34](https://lobste.rs/s/sg14pc/new_faux_bus_api_merged_for_linux_6_14) - [New \"faux bus\" API merged for Linux 6.14, including both Rust & C bindings](https://www.phoronix.com/news/Linux-6.14-Faux-Bus-Merged)
* [2025-02-18, 04:54:44](https://lobste.rs/s/7zwyoh/arcaos_5_1_1_released_modern_os_2) - [ArcaOS 5.1.1 released (modern OS/2)](https://www.arcanoae.com/wiki/arcaos/change-history-arcaos-5-1/)
* [2025-02-18, 04:51:01](https://news.ycombinator.com/item?id=43086170) - [Go 1.24](https://tip.golang.org/doc/go1.24)
* [2025-02-18, 04:04:54](https://news.ycombinator.com/item?id=43085957) - [Grok3 Launch [video]](https://x.com/xai/status/1891699715298730482)
* [2025-02-18, 04:02:00](https://hardware.slashdot.org/story/25/02/18/0348230/nand-flash-prices-plunge-amid-supply-glut-factory-output-cut?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NAND Flash Prices Plunge Amid Supply Glut, Factory Output Cut](https://hardware.slashdot.org/story/25/02/18/0348230/nand-flash-prices-plunge-amid-supply-glut-factory-output-cut?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 03:47:00](https://news.ycombinator.com/item?id=43085885) - [The Generative AI Con](https://www.wheresyoured.at/longcon/)
* [2025-02-18, 03:45:28](https://news.ycombinator.com/item?id=43085876) - [My washing machine refreshed my thinking on software estimation](https://www.cosive.com/blog/my-washing-machine-refreshed-my-thinking-on-software-effort-estimation)
* [2025-02-18, 03:07:45](https://news.ycombinator.com/item?id=43085687) - [Sony FX-300 Jackal: A technological marvel of the late 70s (2021)](https://swling.com/blog/2021/03/the-sony-fx-300-jackal-a-holy-grail-technological-marvel-of-the-late-70s/)
* [2025-02-18, 03:03:09](https://lobste.rs/s/a83yzz/access_bus_forgotten_usb_competitor) - [ACCESS.bus: The Forgotten USB Competitor](https://tedium.co/2025/02/17/access-bus-i2c-usb-competitor-history/)
* [2025-02-18, 03:00:00](https://tech.slashdot.org/story/25/02/18/0252258/mexico-threatens-to-sue-google-over-gulf-renaming?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mexico Threatens To Sue Google Over Gulf Renaming](https://tech.slashdot.org/story/25/02/18/0252258/mexico-threatens-to-sue-google-over-gulf-renaming?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 02:34:37](https://news.ycombinator.com/item?id=43085492) - [A web platform for using YouTube as a drum sequencer](https://youtubesequencer.com/)
* [2025-02-18, 02:29:00](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss) - [DOGE as a National Cyberattack](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss)
* [2025-02-18, 01:57:00](https://news.slashdot.org/story/25/02/18/0156241/when-a-lifetime-subscription-can-save-you-money---and-when-its-risky?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [When a Lifetime Subscription Can Save You Money - and When It's Risky](https://news.slashdot.org/story/25/02/18/0156241/when-a-lifetime-subscription-can-save-you-money---and-when-its-risky?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 01:08:41](https://news.ycombinator.com/item?id=43084958) - [Have you ever seen a goth downtown?](https://danco.substack.com/p/have-you-ever-seen-a-goth-downtown)
* [2025-02-17, 23:44:28](https://news.ycombinator.com/item?id=43084355) - [Why can't we remember our lives as babies or toddlers?](https://www.theguardian.com/science/2025/feb/16/why-cant-we-remember-our-lives-as-babies-or-toddlers)
* [2025-02-17, 23:12:29](https://news.ycombinator.com/item?id=43084154) - [Getting a charge out of wasted automobile heat (2012)](https://climate.nasa.gov/news/667/getting-a-charge-out-of-wasted-automobile-heat/)
* [2025-02-17, 23:11:33](https://news.ycombinator.com/item?id=43084145) - [On David Lynch's Revenge of the Jedi (2018)](https://www.benningtonreview.org/adam-golaski)
* [2025-02-17, 22:11:33](https://lobste.rs/s/ch64l3/new_junior_developers_can_t_actually_code) - [New Junior Developers Can’t Actually Code](https://nmn.gl/blog/ai-and-learning)
* [2025-02-17, 22:09:09](https://news.ycombinator.com/item?id=43083772) - [List of DRM-Free Bookshops](https://libreture.com/bookshops/)
* [2025-02-17, 21:59:14](https://news.ycombinator.com/item?id=43083687) - [Setting up a trusted, self-signed SSL/TLS certificate authority in Linux](https://previnder.com/tls-ca-linux/)
* [2025-02-17, 21:32:00](https://tech.slashdot.org/story/25/02/17/2133224/chase-will-soon-block-zelle-payments-to-sellers-on-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Chase Will Soon Block Zelle Payments To Sellers on Social Media](https://tech.slashdot.org/story/25/02/17/2133224/chase-will-soon-block-zelle-payments-to-sellers-on-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 21:22:38](https://lobste.rs/s/gsyz6c/swift_evolution_proposal_inlinearray) - [Swift Evolution Proposal:  InlineArray, a fixed-size array](https://github.com/swiftlang/swift-evolution/blob/main/proposals/0453-vector.md)
* [2025-02-17, 21:14:03](https://news.ycombinator.com/item?id=43083345) - [Find Your 2%Ers (2023)](https://joyarbitrage.substack.com/p/find-your-2ers)
* [2025-02-17, 21:00:29](https://news.ycombinator.com/item?id=43083255) - [TestRigor (YC S21) Is Hiring VP of Engineering](https://www.ycombinator.com/companies/testrigor/jobs/AuTkpC9-vp-of-engineering)
* [2025-02-17, 20:44:00](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss) - [Octet Of ESP32s Lets You See WiFi Like Never Before](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss)
* [2025-02-17, 20:43:08](https://lobste.rs/s/dfhwq1/nes86_x86_emulation_on_nes) - [nes86: x86 emulation on the NES](https://github.com/decrazyo/nes86)
* [2025-02-17, 20:30:04](https://news.ycombinator.com/item?id=43083012) - [Plane crashes, overturns during landing at Toronto airport](https://www.cbc.ca/news/canada/toronto/toronto-pearson-overturned-airplane-1.7461227)
* [2025-02-17, 20:29:53](https://lobste.rs/s/zm1g8r/why_i_m_writing_scheme_implementation) - [Why I'm Writing a Scheme Implementation in 2025 (The Answer is Async Rust)](https://maplant.com/2025-02-17-Why-I'm-Writing-a-Scheme-Implementation-in-2025-(The-Answer-is-Async-Rust).html)
* [2025-02-17, 19:57:16](https://news.ycombinator.com/item?id=43082739) - [NES86 – IBM PC Emulator for the NES](https://github.com/decrazyo/nes86)
* [2025-02-17, 19:56:23](https://lobste.rs/s/ckjevs/choosing_browser) - [Choosing a browser](https://eligrey.com/blog/choosing-a-browser/)
* [2025-02-17, 19:15:00](https://slashdot.org/story/25/02/17/1916201/the-white-collar-recession-is-pummeling-office-workers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The 'White Collar' Recession is Pummeling Office Workers](https://slashdot.org/story/25/02/17/1916201/the-white-collar-recession-is-pummeling-office-workers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 19:12:48](https://lobste.rs/s/1xykzf/debugging_undebuggable_app) - [Debugging An Undebuggable App](https://bryce.co/undebuggable/)
* [2025-02-17, 18:10:35](https://news.ycombinator.com/item?id=43081713) - [Debugging an Undebuggable App](https://bryce.co/undebuggable/)
* [2025-02-17, 18:03:01](https://lobste.rs/s/5damlp/how_browsers_really_load_web_pages) - [How browsers really load Web pages](https://fosdem.org/2025/schedule/event/fosdem-2025-4852-how-browsers-really-load-web-pages/)
* [2025-02-17, 18:01:00](https://tech.slashdot.org/story/25/02/17/1733222/reddit-mods-are-fighting-to-keep-ai-slop-off-subreddits?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Reddit Mods Are Fighting To Keep AI Slop Off Subreddits](https://tech.slashdot.org/story/25/02/17/1733222/reddit-mods-are-fighting-to-keep-ai-slop-off-subreddits?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 17:49:24](https://lobste.rs/s/c6rk0l/14_years_systemd) - [14 years of systemd](https://lwn.net/SubscriberLink/1008721/7c31808d76480012/)
* [2025-02-17, 17:28:48](https://lobste.rs/s/8zd1tm/mac_menubar_swiftui) - [The Mac Menubar and SwiftUI](https://troz.net/post/2025/mac_menu_data/)
* [2025-02-17, 17:20:00](https://apple.slashdot.org/story/25/02/17/1720232/hardware-mod-showcases-an-iphone-se-3-in-the-body-of-a-windows-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hardware Mod Showcases an iPhone SE 3 in the Body of a Windows Phone](https://apple.slashdot.org/story/25/02/17/1720232/hardware-mod-showcases-an-iphone-se-3-in-the-body-of-a-windows-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 16:54:52](https://news.ycombinator.com/item?id=43080895) - [Launch HN: Roark (YC W25) – Taking the pain out of voice AI testing](https://news.ycombinator.com/item?id=43080895)
* [2025-02-17, 16:23:07](https://news.ycombinator.com/item?id=43080531) - [Watch R1 \"think\" with animated chains of thought](https://github.com/dhealy05/frames_of_mind)
* [2025-02-17, 16:02:00](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss) - [Women Speak Some 3000ish Words More Per Day Than Men](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss)
* [2025-02-17, 16:01:00](https://yro.slashdot.org/story/25/02/17/1557220/nearly-10-years-after-data-and-goliath-bruce-schneier-says-privacys-still-screwed?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nearly 10 Years After Data and Goliath, Bruce Schneier Says: Privacy's Still Screwed](https://yro.slashdot.org/story/25/02/17/1557220/nearly-10-years-after-data-and-goliath-bruce-schneier-says-privacys-still-screwed?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 15:36:24](https://lobste.rs/s/y713xl/accessible_color_palette_tester) - [Accessible color palette tester](https://palette-tester.9elements.com/)
* [2025-02-17, 15:29:07](https://lobste.rs/s/yipk5r/can_i_ethically_use_llms) - [Can I ethically use LLMs?](https://ntietz.com/blog/can-i-ethically-use-llms/)
* [2025-02-17, 15:20:00](https://apple.slashdot.org/story/25/02/17/1520242/apple-weighs-adding-paid-business-listings-to-maps-app?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Weighs Adding Paid Business Listings To Maps App](https://apple.slashdot.org/story/25/02/17/1520242/apple-weighs-adding-paid-business-listings-to-maps-app?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 14:00:00](https://developers.slashdot.org/story/25/02/17/1317210/new-junior-developers-cant-actually-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['New Junior Developers Can't Actually Code'](https://developers.slashdot.org/story/25/02/17/1317210/new-junior-developers-cant-actually-code?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 13:27:34](https://lobste.rs/s/evay67/design_build_some_elegant_fully) - [Design/build of some elegant, fully parametric speaker cabinets](https://calbryant.uk/blog/speakers/)
* [2025-02-17, 13:11:35](https://lobste.rs/s/b5dnjh/0_0_0_c_thread_local_storage_performance) - [0+0 > 0: C++ thread-local storage performance](https://yosefk.com/blog/cxx-thread-local-storage-performance.html)
* [2025-02-17, 12:42:07](https://lobste.rs/s/5hmdqi/searchcode_com_s_sqlite_database_is) - [searchcode.com’s SQLite database is probably 6 terabytes bigger than yours](https://boyter.org/posts/searchcode-bigger-sqlite-than-you/)
* [2025-02-17, 12:34:00](https://it.slashdot.org/story/25/02/17/0713230/will-amazons-return-to-office-mandate-revitalize-downtown-seattle?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Will Amazon's Return-to-Office Mandate Revitalize Downtown Seattle?](https://it.slashdot.org/story/25/02/17/0713230/will-amazons-return-to-office-mandate-revitalize-downtown-seattle?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 11:15:00](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss) - [Wiggling Ears May Have Once Helped Us Hear](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss)
* [2025-02-17, 10:57:46](https://news.ycombinator.com/item?id=43077519) - [Show HN: TimeRetain – A browser-based personal time tracker, no sign-up needed](https://timeretain.com/)
* [2025-02-17, 10:21:54](https://lobste.rs/s/mfmvmj/tutorial_introduction_lambda_calculus) - [A Tutorial Introduction to the Lambda Calculus (2015)](https://arxiv.org/pdf/1503.09060)
* [2025-02-17, 08:34:00](https://yro.slashdot.org/story/25/02/17/064219/deepseek-removed-from-south-korea-app-stores-pending-privacy-review?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek Removed from South Korea App Stores Pending Privacy Review](https://yro.slashdot.org/story/25/02/17/064219/deepseek-removed-from-south-korea-app-stores-pending-privacy-review?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 08:00:25](https://lobste.rs/s/qpjxpb/f8_8_bit_architecture_designed_for_c) - [f8 - an 8 bit architecture designed for C and memory efficiency](https://fosdem.org/2025/schedule/event/fosdem-2025-4902-f8-an-8-bit-architecture-designed-for-c-and-memory-efficiency/)
* [2025-02-17, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss) - [AUKUS Blasts Holes In Lockbit's Bulletproof Hosting Provider](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss)
* [2025-02-17, 05:22:00](https://tech.slashdot.org/story/25/02/17/0511251/california-considers-taking-over-some-oil-refineries?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [California Considers Taking Over Some Oil Refineries](https://tech.slashdot.org/story/25/02/17/0511251/california-considers-taking-over-some-oil-refineries?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 02:05:28](https://lobste.rs/s/sag0p3/making_web_more_readable_with_stylus) - [Making the Web More Readable With Stylus](https://www.wezm.net/v2/posts/2025/stylus/)
* [2025-02-17, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss) - [Ignorance Bliss When You’Re Drowning In Information](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss)
* [2025-02-16, 21:42:03](https://news.ycombinator.com/item?id=43071983) - [I helped fix sleep-wake hangs on Linux with AMD GPUs](https://nyanpasu64.gitlab.io/blog/amdgpu-sleep-wake-hang/)
* [2025-02-16, 20:54:00](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss) - [The Guy Who Accidentally Threw Away $700 Million in Bitcoin Wants to Buy the Landfill to Find It](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss)
* [2025-02-16, 17:14:25](https://lobste.rs/s/xjrlj2/how_android_s_calculator_works_with_real) - [How Android's calculator works with real numbers](https://chadnauseam.com/coding/random/calculator-app)
* [2025-02-16, 16:12:00](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss) - [Waste Surveillance at Just 20 Airports Could Spot the Next Pandemic](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss)
* [2025-02-16, 11:27:00](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss) - [AI Reveals Hidden Interior Design Rules of the Cell](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss)
* [2025-02-16, 08:33:47](https://news.ycombinator.com/item?id=43066394) - [670nm red light exposure improved aged mitochondrial function, colour vision](https://www.nature.com/articles/s41598-021-02311-1)
* [2025-02-16, 06:42:00](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss) - [Key Takeaways From The Paris AI Summit](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss)
* [2025-02-16, 01:58:00](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss) - [If You Ever Stacked Cups In Gym Class, Blame My Dad](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss)
* [2025-02-15, 21:09:00](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss) - [Let’s Buy California from Trump – Denmark’s Next Big Adventure ](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss)
* [2025-02-15, 18:59:52](https://news.ycombinator.com/item?id=43061176) - [Back to the Future with Gordon Moore](https://thechipletter.substack.com/p/back-to-the-future-with-gordon-moore)
* [2025-02-15, 16:24:00](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss) - [Flies Play Too, Carousel Study Suggests](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss)
* [2025-02-15, 11:38:00](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss) - [Anyone Can Push Updates to the DOGE.gov Website](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss)
* [2025-02-15, 06:52:00](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss) - [RTX5090 Cable Overheats to 150 C Where Uneven Current Distribution Likely the Culprit](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss)
* [2025-02-15, 06:44:40](https://news.ycombinator.com/item?id=43056456) - [The Joy of Nand2Tetris](https://tristanrhodes.com/blog/The-Joy-of-Nand2Tetris)
* [2025-02-15, 02:08:00](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss) - [EU Will Put Over $200 Billion Toward AI Development](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss)
* [2025-02-14, 21:25:00](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss) - [8 Million Requests Later, We Made The SolarWinds Supply Chain Attack Look Amateur](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss)
* [2025-02-14, 20:16:10](https://news.ycombinator.com/item?id=43052635) - [Visualize Ownership and Lifetimes in Rust](https://github.com/cordx56/rustowl)
* [2025-02-14, 16:17:00](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss) - [Judge Agrees Trump's Removal Of Health Websites Threatens The Public](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss)
* [2025-02-14, 15:53:34](https://news.ycombinator.com/item?id=43049659) - [Siren Call of SQLite on the Server](https://pid1.dev/posts/siren-call-of-sqlite-on-the-server/)
* [2025-02-14, 11:36:39](https://news.ycombinator.com/item?id=43047341) - [You're not a senior engineer until you've worked on a legacy project (2023)](https://www.infobip.com/developers/blog/seniors-working-on-a-legacy-project)
* [2025-02-14, 11:34:00](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss) - [Earth's Inner Core is Less Solid Than Previously Thought: Study Reveals Structural Transformation](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss)
* [2025-02-14, 09:42:05](https://news.ycombinator.com/item?id=43046631) - [Why Quantum Cryptanalysis is Bollocks [pdf]](https://www.cs.auckland.ac.nz/~pgut001/pubs/bollocks.pdf)
* [2025-02-14, 06:50:00](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss) - [Hackers Leak Cop Manuals for Departments Nationwide After Breaching Major Provider](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss)
* [2025-02-14, 02:04:00](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss) - [The Science of Why There's Less Passing in the Daytona 500](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss)
