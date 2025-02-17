# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [Octet Of ESP32s Lets You See WiFi Like Never Before](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss) - Dive into the fascinating uses of ESP32s to visualize WiFi networks with a new perspective. [Comments](https://lobste.rs/s/tkgkfd/this_esp32_antenna_array_can_see_wifi)

* [Why I'm Writing a Scheme Implementation in 2025 (The Answer is Async Rust)](https://maplant.com/2025-02-17-Why-I'm-Writing-a-Scheme-Implementation-in-2025-(The-Answer-is-Async-Rust).html) - Explore a unique perspective on implementing Scheme using asynchronous programming with Rust. [Comments](https://lobste.rs/s/zm1g8r/why_i_m_writing_scheme_implementation)

* [nes86: x86 emulation on the NES](https://github.com/decrazyo/nes86) - Uncover the intricacies of emulating x86 on the limited hardware of the NES. [Comments](https://lobste.rs/s/dfhwq1/nes86_x86_emulation_on_nes)

* [How browsers really load Web pages](https://fosdem.org/2025/schedule/event/fosdem-2025-4852-how-browsers-really-load-web-pages/) - A comprehensive look into the underlying process of how browsers parse and load web content. [Comments](https://lobste.rs/s/5damlp/how_browsers_really_load_web_pages)

* [14 years of systemd](https://lwn.net/SubscriberLink/1008721/7c31808d76480012/) - Reflection on the 14-year impact of systemd and its place in modern computing.

* [f8 - an 8 bit architecture designed for C and memory efficiency](https://fosdem.org/2025/schedule/event/fosdem-2025-4902-f8-an-8-bit-architecture-designed-for-c-and-memory-efficiency/) - Discover the design principles behind the efficient 8-bit architecture framework. [Comments](https://lobste.rs/s/qpjxpb/f8_8_bit_architecture_designed_for_c)

## Legal and Policy Changes

* [NLRB Acting General Counsel Rescinds Non-Compete Labor Policy](https://natlawreview.com/article/nlrb-acting-general-counsel-rescinds-non-compete-labor-policy) - The latest policy shift meant to expand workers' rights by removing restrictions from non-compete clauses. [Comments](https://news.ycombinator.com/item?id=43083295)

* [Chase Will Soon Block Zelle Payments To Sellers on Social Media](https://tech.slashdot.org/story/25/02/17/2133224/chase-will-soon-block-zelle-payments-to-sellers-on-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Learn about Chase's decision to limit Zelle transactions for security and fraud prevention. [Comments](https://tech.slashdot.org/story/25/02/17/2133224/chase-will-soon-block-zelle-payments-to-sellers-on-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Research and Discoveries

* [Fluoxetine promotes metabolic defenses to protect from sepsis-induced lethality](https://www.science.org/doi/10.1126/sciadv.adu4034) - Promising medical research reveals how fluoxetine can enhance metabolic defenses.

* [Representing Graphs in PostgreSQL](https://www.richard-towers.com/2025/02/16/representing-graphs-in-postgres.html) - Techniques for modeling graph structures in traditional databases. [Comments](https://news.ycombinator.com/item?id=43078100)

* [Espargos: ESP32-based WiFi sensing array](https://espargos.net/) - Highlighting innovative hardware applications in WiFi sensing. [Comments](https://news.ycombinator.com/item?id=43079023)

## Social Dynamics and Ethics

* [Can I ethically use LLMs?](https://ntietz.com/blog/can-i-ethically-use-llms/) - Delving into the rising ethical questions surrounding language models and their impact. [Comments](https://lobste.rs/s/yipk5r/can_i_ethically_use_llms)

* [Are noise-cancelling headphones to blame for young people's hearing problems?](https://www.bbc.com/news/articles/cgkjvr7x5x6o) - Discussion on the potential links between modern headphone usage and auditory health risks. [Comments](https://news.ycombinator.com/item?id=43082700)

## Miscellaneous Highlights

* [All Kindles can now be jailbroken](https://kindlemodding.org/jailbreaking/WinterBreak/) - Uncover the latest developments in Kindle device customization. [Comments](https://news.ycombinator.com/item?id=43073969)

* [697-Page Book Publishes a Poet's 2,000 Amazon Reviews Posthumously](https://news.slashdot.org/story/25/02/17/016217/697-page-book-publishes-a-poets-2000-amazon-reviews-posthumously?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A unique compilation celebrating literary creativity through the lens of Amazon reviews.

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

* [2025-02-17, 21:57:07](https://lobste.rs/s/hv9gxk/what_s_ring_buffer_using_them_rust) - [What's in a ring buffer? And using them in Rust](https://ntietz.com/blog/whats-in-a-ring-buffer/#ring)
* [2025-02-17, 21:32:00](https://tech.slashdot.org/story/25/02/17/2133224/chase-will-soon-block-zelle-payments-to-sellers-on-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Chase Will Soon Block Zelle Payments To Sellers on Social Media](https://tech.slashdot.org/story/25/02/17/2133224/chase-will-soon-block-zelle-payments-to-sellers-on-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 21:22:38](https://lobste.rs/s/gsyz6c/swift_evolution_proposal_inlinearray) - [Swift Evolution Proposal:  InlineArray, a fixed-size array](https://github.com/swiftlang/swift-evolution/blob/main/proposals/0453-vector.md)
* [2025-02-17, 21:05:48](https://news.ycombinator.com/item?id=43083295) - [NLRB Acting General Counsel Rescinds Non-Compete Labor Policy](https://natlawreview.com/article/nlrb-acting-general-counsel-rescinds-non-compete-labor-policy)
* [2025-02-17, 21:00:29](https://news.ycombinator.com/item?id=43083255) - [TestRigor (YC S21) Is Hiring VP of Engineering](https://www.ycombinator.com/companies/testrigor/jobs/AuTkpC9-vp-of-engineering)
* [2025-02-17, 20:44:00](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss) - [Octet Of ESP32s Lets You See WiFi Like Never Before](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss)
* [2025-02-17, 20:43:08](https://lobste.rs/s/dfhwq1/nes86_x86_emulation_on_nes) - [nes86: x86 emulation on the NES](https://github.com/decrazyo/nes86)
* [2025-02-17, 20:29:53](https://lobste.rs/s/zm1g8r/why_i_m_writing_scheme_implementation) - [Why I'm Writing a Scheme Implementation in 2025 (The Answer is Async Rust)](https://maplant.com/2025-02-17-Why-I'm-Writing-a-Scheme-Implementation-in-2025-(The-Answer-is-Async-Rust).html)
* [2025-02-17, 19:56:23](https://lobste.rs/s/ckjevs/choosing_browser) - [Choosing a browser](https://eligrey.com/blog/choosing-a-browser/)
* [2025-02-17, 19:53:26](https://news.ycombinator.com/item?id=43082700) - [Are noise-cancelling headphones to blame for young people's hearing problems?](https://www.bbc.com/news/articles/cgkjvr7x5x6o)
* [2025-02-17, 19:15:00](https://slashdot.org/story/25/02/17/1916201/the-white-collar-recession-is-pummeling-office-workers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The 'White Collar' Recession is Pummeling Office Workers](https://slashdot.org/story/25/02/17/1916201/the-white-collar-recession-is-pummeling-office-workers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 19:12:48](https://lobste.rs/s/1xykzf/debugging_undebuggable_app) - [Debugging An Undebuggable App](https://bryce.co/undebuggable/)
* [2025-02-17, 19:12:14](https://news.ycombinator.com/item?id=43082287) - [Who carved South America's mysterious ancient tunnels? [pdf]](https://www.clp.unesp.br/Modulos/Noticias/401/paleoburrows-nature-2025.pdf)
* [2025-02-17, 18:10:35](https://news.ycombinator.com/item?id=43081713) - [Debugging an Undebuggable App](https://bryce.co/undebuggable/)
* [2025-02-17, 18:03:01](https://lobste.rs/s/5damlp/how_browsers_really_load_web_pages) - [How browsers really load Web pages](https://fosdem.org/2025/schedule/event/fosdem-2025-4852-how-browsers-really-load-web-pages/)
* [2025-02-17, 18:01:00](https://tech.slashdot.org/story/25/02/17/1733222/reddit-mods-are-fighting-to-keep-ai-slop-off-subreddits?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Reddit Mods Are Fighting To Keep AI Slop Off Subreddits](https://tech.slashdot.org/story/25/02/17/1733222/reddit-mods-are-fighting-to-keep-ai-slop-off-subreddits?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 17:49:24](https://lobste.rs/s/c6rk0l/14_years_systemd) - [14 years of systemd](https://lwn.net/SubscriberLink/1008721/7c31808d76480012/)
* [2025-02-17, 17:28:48](https://lobste.rs/s/8zd1tm/mac_menubar_swiftui) - [The Mac Menubar and SwiftUI](https://troz.net/post/2025/mac_menu_data/)
* [2025-02-17, 17:20:00](https://apple.slashdot.org/story/25/02/17/1720232/hardware-mod-showcases-an-iphone-se-3-in-the-body-of-a-windows-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hardware Mod Showcases an iPhone SE 3 in the Body of a Windows Phone](https://apple.slashdot.org/story/25/02/17/1720232/hardware-mod-showcases-an-iphone-se-3-in-the-body-of-a-windows-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 16:54:52](https://news.ycombinator.com/item?id=43080895) - [Launch HN: Roark (YC W25) – Taking the pain out of voice AI testing](https://news.ycombinator.com/item?id=43080895)
* [2025-02-17, 16:51:52](https://news.ycombinator.com/item?id=43080858) - [Show HN: Kartoffels – Cellular Automata, Statistics, 32-bit RISC-V](https://pwy.io/posts/kartoffels-v0.7/)
* [2025-02-17, 16:23:30](https://news.ycombinator.com/item?id=43080535) - [Hk, a new Git hook manager](https://hk.jdx.dev/about.html)
* [2025-02-17, 16:23:07](https://news.ycombinator.com/item?id=43080531) - [Watch R1 \"think\" with animated chains of thought](https://github.com/dhealy05/frames_of_mind)
* [2025-02-17, 16:09:47](https://news.ycombinator.com/item?id=43080378) - [Open source projects could sell SBOM fragments](https://www.thomas-huehn.com/open-source-projects-could-sell-sbom-fragments/)
* [2025-02-17, 16:02:00](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss) - [Women Speak Some 3000ish Words More Per Day Then Men](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss)
* [2025-02-17, 16:01:00](https://yro.slashdot.org/story/25/02/17/1557220/nearly-10-years-after-data-and-goliath-bruce-schneier-says-privacys-still-screwed?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nearly 10 Years After Data and Goliath, Bruce Schneier Says: Privacy's Still Screwed](https://yro.slashdot.org/story/25/02/17/1557220/nearly-10-years-after-data-and-goliath-bruce-schneier-says-privacys-still-screwed?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 15:36:24](https://lobste.rs/s/y713xl/accessible_color_palette_tester) - [Accessible color palette tester](https://palette-tester.9elements.com/)
* [2025-02-17, 15:29:07](https://lobste.rs/s/yipk5r/can_i_ethically_use_llms) - [Can I ethically use LLMs?](https://ntietz.com/blog/can-i-ethically-use-llms/)
* [2025-02-17, 15:20:00](https://apple.slashdot.org/story/25/02/17/1520242/apple-weighs-adding-paid-business-listings-to-maps-app?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Weighs Adding Paid Business Listings To Maps App](https://apple.slashdot.org/story/25/02/17/1520242/apple-weighs-adding-paid-business-listings-to-maps-app?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 14:00:00](https://developers.slashdot.org/story/25/02/17/1317210/new-junior-developers-cant-actually-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['New Junior Developers Can't Actually Code'](https://developers.slashdot.org/story/25/02/17/1317210/new-junior-developers-cant-actually-code?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 13:54:40](https://news.ycombinator.com/item?id=43079023) - [Espargos: ESP32-based WiFi sensing array](https://espargos.net/)
* [2025-02-17, 13:27:34](https://lobste.rs/s/evay67/design_build_some_elegant_fully) - [Design/build of some elegant, fully parametric speaker cabinets](https://calbryant.uk/blog/speakers/)
* [2025-02-17, 13:11:35](https://lobste.rs/s/b5dnjh/0_0_0_c_thread_local_storage_performance) - [0+0 > 0: C++ thread-local storage performance](https://yosefk.com/blog/cxx-thread-local-storage-performance.html)
* [2025-02-17, 13:04:34](https://news.ycombinator.com/item?id=43078555) - [Show HN: Inscribed, create stop motion animation and slide powered by Excalidraw](https://inscribed.app/)
* [2025-02-17, 13:02:46](https://news.ycombinator.com/item?id=43078537) - [Fluoxetine promotes metabolic defenses to protect from sepsis-induced lethality](https://www.science.org/doi/10.1126/sciadv.adu4034)
* [2025-02-17, 12:42:07](https://lobste.rs/s/5hmdqi/searchcode_com_s_sqlite_database_is) - [searchcode.com’s SQLite database is probably 6 terabytes bigger than yours](https://boyter.org/posts/searchcode-bigger-sqlite-than-you/)
* [2025-02-17, 12:34:00](https://it.slashdot.org/story/25/02/17/0713230/will-amazons-return-to-office-mandate-revitalize-downtown-seattle?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Will Amazon's Return-to-Office Mandate Revitalize Downtown Seattle?](https://it.slashdot.org/story/25/02/17/0713230/will-amazons-return-to-office-mandate-revitalize-downtown-seattle?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 12:15:01](https://news.ycombinator.com/item?id=43078100) - [Representing Graphs in PostgreSQL](https://www.richard-towers.com/2025/02/16/representing-graphs-in-postgres.html)
* [2025-02-17, 11:29:06](https://lobste.rs/s/y2xa9n/ux_design_rework_1_reworking_my) - [UX Design Rework #1 - reworking my university hoarding](https://bhoot.dev/2025/ux-design-rework-1-i-love-vnsgu/)
* [2025-02-17, 11:20:29](https://lobste.rs/s/ffceax/why_test_first_development_is_so_damn_hard) - [Why Test-First Development Is So Damn Hard](https://jarosz.dev/atomicessay/why-test-first-development-is-so-damn-hard/)
* [2025-02-17, 11:18:29](https://news.ycombinator.com/item?id=43077675) - [0+0 > 0: C++ thread-local storage performance](https://yosefk.com/blog/cxx-thread-local-storage-performance.html)
* [2025-02-17, 11:15:00](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss) - [Wiggling Ears May Have Once Helped Us Hear](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss)
* [2025-02-17, 10:21:54](https://lobste.rs/s/mfmvmj/tutorial_introduction_lambda_calculus) - [A Tutorial Introduction to the Lambda Calculus (2015)](https://arxiv.org/pdf/1503.09060)
* [2025-02-17, 08:34:00](https://yro.slashdot.org/story/25/02/17/064219/deepseek-removed-from-south-korea-app-stores-pending-privacy-review?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek Removed from South Korea App Stores Pending Privacy Review](https://yro.slashdot.org/story/25/02/17/064219/deepseek-removed-from-south-korea-app-stores-pending-privacy-review?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 08:00:25](https://lobste.rs/s/qpjxpb/f8_8_bit_architecture_designed_for_c) - [f8 - an 8 bit architecture designed for C and memory efficiency](https://fosdem.org/2025/schedule/event/fosdem-2025-4902-f8-an-8-bit-architecture-designed-for-c-and-memory-efficiency/)
* [2025-02-17, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss) - [AUKUS Blasts Holes In Lockbit's Bulletproof Hosting Provider](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss)
* [2025-02-17, 05:22:00](https://tech.slashdot.org/story/25/02/17/0511251/california-considers-taking-over-some-oil-refineries?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [California Considers Taking Over Some Oil Refineries](https://tech.slashdot.org/story/25/02/17/0511251/california-considers-taking-over-some-oil-refineries?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 04:23:10](https://news.ycombinator.com/item?id=43075113) - [My Time at MIT](http://muratbuffalo.blogspot.com/2025/02/my-time-at-mit.html)
* [2025-02-17, 03:22:00](https://tech.slashdot.org/story/25/02/17/0318229/why-a-maintainer-of-the-linux-graphics-driver-nouveau-stepped-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Why A Maintainer of the Linux Graphics Driver Nouveau Stepped Down](https://tech.slashdot.org/story/25/02/17/0318229/why-a-maintainer-of-the-linux-graphics-driver-nouveau-stepped-down?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 02:05:28](https://lobste.rs/s/sag0p3/making_web_more_readable_with_stylus) - [Making the Web More Readable With Stylus](https://www.wezm.net/v2/posts/2025/stylus/)
* [2025-02-17, 01:42:12](https://news.ycombinator.com/item?id=43073969) - [All Kindles can now be jailbroken](https://kindlemodding.org/jailbreaking/WinterBreak/)
* [2025-02-17, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss) - [Ignorance Bliss When You’Re Drowning In Information](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss)
* [2025-02-17, 01:22:49](https://news.ycombinator.com/item?id=43073808) - [Homemade polarimetric synthetic aperture radar drone](https://hforsten.com/homemade-polarimetric-synthetic-aperture-radar-drone.html)
* [2025-02-17, 01:09:00](https://news.slashdot.org/story/25/02/17/016217/697-page-book-publishes-a-poets-2000-amazon-reviews-posthumously?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [697-Page Book Publishes a Poet's 2,000 Amazon Reviews Posthumously](https://news.slashdot.org/story/25/02/17/016217/697-page-book-publishes-a-poets-2000-amazon-reviews-posthumously?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 00:26:04](https://news.ycombinator.com/item?id=43073377) - [Making Markets on Kalshi](https://rlafuente.com/post?post=2025-2-16-marketmaking-on-kalshi)
* [2025-02-17, 00:15:50](https://news.ycombinator.com/item?id=43073292) - [San Francisco homelessness: Park ranger helps one person at a time](https://sfstandard.com/2025/02/08/golden-gate-park-ranger-homelessness/)
* [2025-02-17, 00:14:47](https://lobste.rs/s/yyju3z/when_is_oop_more_useful_modelling) - [When is OOP a More Useful Modelling Approach than Other Paradigms?](https://lobste.rs/s/yyju3z/when_is_oop_more_useful_modelling)
* [2025-02-17, 00:06:09](https://lobste.rs/s/tkgkfd/this_esp32_antenna_array_can_see_wifi) - [This ESP32 antenna array can see WiFi](https://www.youtube.com/watch?v=sXwDrcd1t-E)
* [2025-02-16, 23:56:16](https://news.ycombinator.com/item?id=43073149) - [Did missing/corrupt dates in COBOL default to 1875-05-20?](https://retrocomputing.stackexchange.com/questions/31288/does-or-did-cobol-default-to-1875-05-20-for-corrupt-or-missing-dates)
* [2025-02-16, 23:13:00](https://tech.slashdot.org/story/25/02/16/2311215/are-technologies-of-connection-tearing-us-apart?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Are Technologies of Connection Tearing Us Apart?](https://tech.slashdot.org/story/25/02/16/2311215/are-technologies-of-connection-tearing-us-apart?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 21:42:03](https://news.ycombinator.com/item?id=43071983) - [I helped fix sleep-wake hangs on Linux with AMD GPUs](https://nyanpasu64.gitlab.io/blog/amdgpu-sleep-wake-hang/)
* [2025-02-16, 21:41:00](https://science.slashdot.org/story/25/02/16/2138259/after-launch-by-spacex-in-january-firefly-aerospaces-lunar-lander-reaches-moon-orbit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [After Launch by SpaceX in January, Firefly Aerospace's Lunar Lander Reaches Moon Orbit](https://science.slashdot.org/story/25/02/16/2138259/after-launch-by-spacex-in-january-firefly-aerospaces-lunar-lander-reaches-moon-orbit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 21:05:53](https://lobste.rs/s/yapvon/what_do_about_sqlite_busy_errors_despite) - [What to do about SQLITE_BUSY errors despite setting a timeout](https://berthub.eu/articles/posts/a-brief-post-on-sqlite3-database-locked-despite-timeout/)
* [2025-02-16, 20:54:00](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss) - [The Guy Who Accidentally Threw Away $700 Million in Bitcoin Wants to Buy the Landfill to Find It](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss)
* [2025-02-16, 19:53:00](https://news.slashdot.org/story/25/02/16/1921209/argentinian-president-promotes-memecoin-it-then-crashed-95-as-insiders-cashed-out?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Argentinian President Promotes Memecoin. It Then Crashed 95% as Insiders Cashed Out](https://news.slashdot.org/story/25/02/16/1921209/argentinian-president-promotes-memecoin-it-then-crashed-95-as-insiders-cashed-out?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 17:29:01](https://lobste.rs/s/mk577n/civic_tech_s_third_wave) - [Civic Tech's Third Wave](https://www.jpt.sh/posts/third-wave-civic-tech/)
* [2025-02-16, 17:14:25](https://lobste.rs/s/xjrlj2/how_android_s_calculator_works_with_real) - [How Android's calculator works with real numbers](https://chadnauseam.com/coding/random/calculator-app)
* [2025-02-16, 16:12:00](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss) - [Waste Surveillance at Just 20 Airports Could Spot the Next Pandemic](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss)
* [2025-02-16, 11:36:46](https://lobste.rs/s/ykpcqs/can_atproto_scale_down) - [Can atproto scale down?](https://bsky.bad-example.com/can-atproto-scale-down/)
* [2025-02-16, 11:27:00](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss) - [AI Reveals Hidden Interior Design Rules of the Cell](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss)
* [2025-02-16, 08:02:30](https://news.ycombinator.com/item?id=43066247) - [DSLs for Safe iOS/WatchOS Communication](https://defn.io/2025/02/16/type-safe-watchos-communication/)
* [2025-02-16, 06:42:00](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss) - [Key Takeaways From The Paris AI Summit](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss)
* [2025-02-16, 01:58:00](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss) - [If You Ever Stacked Cups In Gym Class, Blame My Dad](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss)
* [2025-02-15, 21:09:00](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss) - [Let’s Buy California from Trump – Denmark’s Next Big Adventure ](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss)
* [2025-02-15, 16:24:00](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss) - [Flies Play Too, Carousel Study Suggests](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss)
* [2025-02-15, 11:38:00](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss) - [Anyone Can Push Updates to the DOGE.gov Website](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss)
* [2025-02-15, 06:52:00](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss) - [RTX5090 Cable Overheats to 150 C Where Uneven Current Distribution Likely the Culprit](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss)
* [2025-02-15, 02:10:04](https://news.ycombinator.com/item?id=43055191) - [The San Francisco stadium that fog killed](https://www.sfgate.com/sports/article/sf-thought-built-stadium-future-fog-ewing-field-20051971.php)
* [2025-02-15, 02:08:00](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss) - [EU Will Put Over $200 Billion Toward AI Development](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss)
* [2025-02-14, 22:45:18](https://news.ycombinator.com/item?id=43053909) - [Barcoding brains](https://www.asimov.press/p/barcoding-brains)
* [2025-02-14, 21:43:50](https://news.ycombinator.com/item?id=43053403) - [George Eliot's reflections on AGI from 1879](https://www.learningfromexamples.com/p/reflections-on-superintelligence)
* [2025-02-14, 21:25:00](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss) - [8 Million Requests Later, We Made The SolarWinds Supply Chain Attack Look Amateur](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss)
* [2025-02-14, 16:17:00](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss) - [Judge Agrees Trump's Removal Of Health Websites Threatens The Public](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss)
* [2025-02-14, 13:30:24](https://news.ycombinator.com/item?id=43048073) - [How do modern compilers choose which variables to put in registers?](https://langdev.stackexchange.com/questions/4325/how-do-modern-compilers-choose-which-variables-to-put-in-registers)
* [2025-02-14, 11:36:39](https://news.ycombinator.com/item?id=43047341) - [You're not a senior engineer until you've worked on a legacy project (2023)](https://www.infobip.com/developers/blog/seniors-working-on-a-legacy-project)
* [2025-02-14, 11:34:00](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss) - [Earth's Inner Core is Less Solid Than Previously Thought: Study Reveals Structural Transformation](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss)
* [2025-02-14, 06:50:00](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss) - [Hackers Leak Cop Manuals for Departments Nationwide After Breaching Major Provider](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss)
* [2025-02-14, 02:04:00](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss) - [The Science of Why There's Less Passing in the Daytona 500](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss)
* [2025-02-13, 21:15:00](https://soylentnews.org/article.pl?sid=25/02/13/0126236&from=rss) - [Money May Have Originated Through Long Distance Trade, New Theory Suggests](https://soylentnews.org/article.pl?sid=25/02/13/0126236&from=rss)
* [2025-02-13, 20:36:11](https://news.ycombinator.com/item?id=43040986) - [Spacetime maps: A map that warps to show travel time](https://maps.vvolhejn.com)
* [2025-02-13, 19:56:30](https://news.ycombinator.com/item?id=43040507) - [Umami is a simple, fast, privacy-focused alternative to Google Analytics](https://github.com/umami-software/umami)
* [2025-02-13, 16:29:00](https://soylentnews.org/article.pl?sid=25/02/12/1247251&from=rss) - [Developer Creates Endless Wikipedia Feed to Fight Algorithm Addiction](https://soylentnews.org/article.pl?sid=25/02/12/1247251&from=rss)
* [2025-02-13, 11:43:00](https://soylentnews.org/article.pl?sid=25/02/12/1237237&from=rss) - [Is the EF5 Tornado Rating Effectively Obsolete?](https://soylentnews.org/article.pl?sid=25/02/12/1237237&from=rss)
* [2025-02-13, 06:57:00](https://soylentnews.org/article.pl?sid=25/02/12/1234248&from=rss) - [A Pinch of Salt Boosts Aluminum Batteries](https://soylentnews.org/article.pl?sid=25/02/12/1234248&from=rss)
* [2025-02-13, 02:12:00](https://soylentnews.org/article.pl?sid=25/02/12/095248&from=rss) - [AI Increases Unemployment Rates in US IT Sector](https://soylentnews.org/article.pl?sid=25/02/12/095248&from=rss)
