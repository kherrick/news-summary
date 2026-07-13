# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Emerging Threats

* [US Government Warns That Russia State Hackers Are Coming After Your Router](https://it.slashdot.org/story/26/07/13/2139254/us-government-warns-that-russia-state-hackers-are-coming-after-your-router?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A warning from the US government highlighting the targeting of home routers by Russian state hackers. [Comments](https://it.slashdot.org/story/26/07/13/2139254/us-government-warns-that-russia-state-hackers-are-coming-after-your-router?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [German Firm Files For Insolvency After Cybercriminals Shut Down Production For 6 Weeks](https://slashdot.org/story/26/07/13/2111209/german-firm-files-for-insolvency-after-cybercriminals-shut-down-production-for-6-weeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The devastating economic impact of a cyberattack on a German company's production capabilities. [Comments](https://slashdot.org/story/26/07/13/2111209/german-firm-files-for-insolvency-after-cybercriminals-shut-down-production-for-6-weeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Cloudflare Precursor Watches Your Mouse and Keyboard To Decide If You Are Human](https://tech.slashdot.org/story/26/07/13/1645252/cloudflare-precursor-watches-your-mouse-and-keyboard-to-decide-if-you-are-human?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Cloudflare introduces Precursor, an innovative system to detect bots by monitoring user interactions using mouse and keyboard movements. [Comments](https://tech.slashdot.org/story/26/07/13/1645252/cloudflare-precursor-watches-your-mouse-and-keyboard-to-decide-if-you-are-human?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Artificial Intelligence and Machine Learning

* [OpenAI Job Listing Suggests ChatGPT Could Someday Replace Junior Analysts at Goldman Sachs](https://soylentnews.org/article.pl?sid=26/07/12/1514220&amp;from=rss) - AI's expanding presence in professional roles, as OpenAI considers ChatGPT for data analysis tasks. [Comments](https://soylentnews.org/article.pl?sid=26/07/12/1514220&amp;from=rss).

* [Show HN: BillAI Bass, an AI-Powered Big Mouth Billy Bass Using Strands Agents](https://github.com/morganwilliscloud/billai-bass) - A quirky AI project that combines novelty hardware with neural networks. [Comments](https://news.ycombinator.com/item?id=48896599).

* [Leveraging Language Models to Find and Exploit Kernel Bugs](https://www.praetorian.com/blog/llm-kernel-exploit-development/) - Part 2 of how to utilize AI for identifying vulnerabilities in operating system kernels. [Comments](https://lobste.rs/s/kwesh9/freebsod_leveraging_language_models).

## Innovative Projects and Open-Source Developments

* [Linux 0.11 rewritten in idiomatic Rust, boots in QEMU](https://github.com/Poseidon-fan/linux-0.11-rs) - A modern rewrite of Linux 0.11 using Rust for enhanced safety and performance. [Comments](https://news.ycombinator.com/item?id=48898134).

* [Show HN: Sigwire – a live TUI switchboard for every signal on your Linux box](https://github.com/yeet-src/sigwire) - A terminal UI project for real-time signal monitoring on Linux systems. [Comments](https://news.ycombinator.com/item?id=48898071).

* [Show HN: I implemented a neural network in SQL](https://github.com/xqlsystems/xarray-sql/blob/claude/xarray-sql-mnist-demo/benchmarks/nn.py) - Building a neural network demo entirely in SQL for database-driven machine learning. [Comments](https://news.ycombinator.com/item?id=48897975).

## Tech Industry and Corporate Movements

* [States Sue to Block Paramount-Warner Bros Merger, Defying DOJ](https://yro.slashdot.org/story/26/07/13/1740256/states-sue-to-block-paramount-warner-bros-merger-defying-doj?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Legal challenges arise against a major media merger, highlighting concerns over market power. [Comments](https://yro.slashdot.org/story/26/07/13/1740256/states-sue-to-block-paramount-warner-bros-merger-defying-doj?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Apple Reportedly Agreed to Intel Chips To Avoid White House Tariffs](https://yro.slashdot.org/story/26/07/13/1732247/apple-reportedly-agreed-to-intel-chips-to-avoid-white-house-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The tech giant shifts strategies in response to trade policies. [Comments](https://yro.slashdot.org/story/26/07/13/1732247/apple-reportedly-agreed-to-intel-chips-to-avoid-white-house-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Digital Culture and Web Trends

* [Samsung Health app threatens data deletion if users opt out AI training](https://neow.in/cWsyMTV3) - Controversial moves by Samsung spark debate on user data and AI consent. [Comments](https://news.ycombinator.com/item?id=48897991).

* [Climate.gov was destroyed. Open data saved it](https://werd.io/climate-gov-was-destroyed-open-data-saved-it/) - A compelling story about the resilience and importance of open data systems. [Comments](https://news.ycombinator.com/item?id=48897945).

* [Telegram's t.me domain has been suspended](https://www.whois.com/whois/t.me) - Legal or technical challenges lead to the suspension of Telegram's primary public link domain. [Comments](https://news.ycombinator.com/item?id=48897878).

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

* [2026-07-13, 22:00:00](https://it.slashdot.org/story/26/07/13/2139254/us-government-warns-that-russia-state-hackers-are-coming-after-your-router?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Government Warns That Russia State Hackers Are Coming After Your Router](https://it.slashdot.org/story/26/07/13/2139254/us-government-warns-that-russia-state-hackers-are-coming-after-your-router?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 21:28:36](https://lobste.rs/s/opbq6q/adding_second_middleware_broke_our) - [Adding a second middleware broke our typescript types](https://www.inngest.com/blog/adding-a-second-middleware-broke-our-typescript-types)
* [2026-07-13, 21:22:00](https://soylentnews.org/article.pl?sid=26/07/12/1514220&amp;from=rss) - [OpenAI Job Listing Suggests ChatGPT Could Someday Replace Junior Analysts at Goldman Sachs](https://soylentnews.org/article.pl?sid=26/07/12/1514220&amp;from=rss)
* [2026-07-13, 21:12:00](https://slashdot.org/story/26/07/13/2111209/german-firm-files-for-insolvency-after-cybercriminals-shut-down-production-for-6-weeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [German Firm Files For Insolvency After Cybercriminals Shut Down Production For 6 Weeks](https://slashdot.org/story/26/07/13/2111209/german-firm-files-for-insolvency-after-cybercriminals-shut-down-production-for-6-weeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 21:01:00](https://news.ycombinator.com/item?id=48898814) - [SalesPatriot (YC W25) Is Hiring Full Stack Engineers (SF)](https://jobs.ashbyhq.com/SalesPatriot/df223727-5781-433e-bc75-2aa5bf8dc8d7)
* [2026-07-13, 20:13:14](https://news.ycombinator.com/item?id=48898154) - [Show HN: YouTube Guitar Tab Parser](https://github.com/marcelpanse/youtube-guitar-tab-parser)
* [2026-07-13, 20:11:29](https://news.ycombinator.com/item?id=48898134) - [Linux 0.11 rewritten in idiomatic Rust, boots in QEMU](https://github.com/Poseidon-fan/linux-0.11-rs)
* [2026-07-13, 20:07:45](https://news.ycombinator.com/item?id=48898071) - [Show HN: Sigwire – a live TUI switchboard for every signal on your Linux box](https://github.com/yeet-src/sigwire)
* [2026-07-13, 20:03:24](https://lobste.rs/s/ko1ji1/lobste_rs_is_now_running_on_sqlite) - [lobste.rs is now running on SQLite](https://lobste.rs/s/ko1ji1/lobste_rs_is_now_running_on_sqlite)
* [2026-07-13, 20:01:43](https://news.ycombinator.com/item?id=48897991) - [Samsung Health app threatens data deletion if users opt out AI training](https://neow.in/cWsyMTV3)
* [2026-07-13, 20:00:10](https://news.ycombinator.com/item?id=48897975) - [Show HN: I implemented a neural network in SQL](https://github.com/xqlsystems/xarray-sql/blob/claude/xarray-sql-mnist-demo/benchmarks/nn.py)
* [2026-07-13, 20:00:00](https://yro.slashdot.org/story/26/07/13/1740256/states-sue-to-block-paramount-warner-bros-merger-defying-doj?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [States Sue to Block Paramount-Warner Bros Merger, Defying DOJ](https://yro.slashdot.org/story/26/07/13/1740256/states-sue-to-block-paramount-warner-bros-merger-defying-doj?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 19:57:55](https://news.ycombinator.com/item?id=48897945) - [Climate.gov was destroyed. Open data saved it](https://werd.io/climate-gov-was-destroyed-open-data-saved-it/)
* [2026-07-13, 19:52:25](https://news.ycombinator.com/item?id=48897878) - [Telegram&apos;s t.me domain has been suspended](https://www.whois.com/whois/t.me)
* [2026-07-13, 19:11:17](https://news.ycombinator.com/item?id=48897329) - [TFTP Honey Pot Results](https://bruceediger.com/posts/tftp-honeypot-results/)
* [2026-07-13, 19:00:00](https://yro.slashdot.org/story/26/07/13/1732247/apple-reportedly-agreed-to-intel-chips-to-avoid-white-house-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Reportedly Agreed to Intel Chips To Avoid White House Tariffs](https://yro.slashdot.org/story/26/07/13/1732247/apple-reportedly-agreed-to-intel-chips-to-avoid-white-house-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 18:51:54](https://lobste.rs/s/kwesh9/freebsod_leveraging_language_models) - [FreeBSoD: Leveraging Language Models to Find and Exploit Kernel Bugs (Part 2 of 2)](https://www.praetorian.com/blog/llm-kernel-exploit-development/)
* [2026-07-13, 18:47:11](https://lobste.rs/s/shzox9/farewell_arps_ipv4_service_on_ipv6_only) - [A Farewell to ARPs: IPv4 Service on IPv6-Only Networks](https://labs.ripe.net/author/remco-van-mook/a-farewell-to-arps-ipv4-service-on-ipv6-only-networks/)
* [2026-07-13, 18:33:47](https://news.ycombinator.com/item?id=48896818) - [Thunderbird Desktop settings research: what we learned from your feedback](https://blog.thunderbird.net/2026/07/desktopsettings/)
* [2026-07-13, 18:32:27](https://news.ycombinator.com/item?id=48896800) - [The real prices of frontier models. Tokens * Price, right?](https://playcode.io/blog/real-price-of-frontier-models)
* [2026-07-13, 18:26:04](https://news.ycombinator.com/item?id=48896703) - [Show HN: Nobie – an Excel-compatible runtime for agents and humans](https://nobie.com)
* [2026-07-13, 18:22:16](https://news.ycombinator.com/item?id=48896665) - [Building and Shipping Mac and iOS Apps Without Ever Opening Xcode](https://scottwillsey.com/building-and-shipping-mac-and-ios-apps-without-ever-opening-xcode/)
* [2026-07-13, 18:18:25](https://news.ycombinator.com/item?id=48896600) - [Linux on the Sega 32X. Who needs hardware synchronization primitives anyway?](https://cakehonolulu.github.io/linux-on-32x/)
* [2026-07-13, 18:18:23](https://news.ycombinator.com/item?id=48896599) - [Show HN: BillAI Bass, an AI-Powered Big Mouth Billy Bass Using Strands Agents](https://github.com/morganwilliscloud/billai-bass)
* [2026-07-13, 18:00:00](https://tech.slashdot.org/story/26/07/13/1645252/cloudflare-precursor-watches-your-mouse-and-keyboard-to-decide-if-you-are-human?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Precursor Watches Your Mouse and Keyboard To Decide If You Are Human](https://tech.slashdot.org/story/26/07/13/1645252/cloudflare-precursor-watches-your-mouse-and-keyboard-to-decide-if-you-are-human?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 17:59:47](https://lobste.rs/s/lzls6z/go_flavored_concurrency_c) - [Go-flavored concurrency in C](https://antonz.org/concurrency-in-c/)
* [2026-07-13, 17:49:49](https://news.ycombinator.com/item?id=48896229) - [Logseq 2.0 Beta (DB version) is here](https://github.com/logseq/logseq/releases)
* [2026-07-13, 17:45:29](https://news.ycombinator.com/item?id=48896179) - [Show HN: OpenClawMachines – Extending OpenClaw to the Enterprise](https://github.com/mathaix/OpenClawMachines)
* [2026-07-13, 17:13:22](https://news.ycombinator.com/item?id=48895763) - [A Second-Grade Teacher Revived a Beloved Video Game](https://www.nytimes.com/2026/07/13/style/backyard-baseball-video-game-teacher.html)
* [2026-07-13, 17:00:00](https://tech.slashdot.org/story/26/07/13/1638208/social-media-limits-are-coming-for-teens-across-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Social Media Limits Are Coming For Teens Across Europe](https://tech.slashdot.org/story/26/07/13/1638208/social-media-limits-are-coming-for-teens-across-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 16:40:00](https://soylentnews.org/article.pl?sid=26/07/12/1511228&amp;from=rss) - [China Recovered its First Reusable Rocket and Showed a New Way to Do It](https://soylentnews.org/article.pl?sid=26/07/12/1511228&amp;from=rss)
* [2026-07-13, 16:18:36](https://lobste.rs/s/t0aqzy/human_emacs) - [Human Emacs](https://human-emacs.org/)
* [2026-07-13, 16:06:08](https://news.ycombinator.com/item?id=48894752) - [Apple&apos;s new SpeechAnalyzer API, benchmarked against Whisper and its predecessor](https://get-inscribe.com/blog/apple-speech-api-benchmark.html)
* [2026-07-13, 16:01:28](https://lobste.rs/s/yf6vbc/just_let_me_write_digits) - [Just Let Me Write Digits](https://gendignoux.com/blog/2026/07/13/input-digits.html)
* [2026-07-13, 16:00:00](https://tech.slashdot.org/story/26/07/13/0548235/why-55-of-americans-stopped-posting-on-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why 55% of Americans Stopped Posting On Social Media](https://tech.slashdot.org/story/26/07/13/0548235/why-55-of-americans-stopped-posting-on-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 15:56:02](https://news.ycombinator.com/item?id=48894630) - [Show HN: Jacquard, a programming language for AI-written, human-reviewed code](https://github.com/jbwinters/jacquard-lang)
* [2026-07-13, 15:35:04](https://lobste.rs/s/5t3wzn/control_ideas_not_code) - [Control the ideas, not the code](https://antirez.com/news/169)
* [2026-07-13, 15:29:25](https://lobste.rs/s/2q39ny/don_t_use_aria_label_on_static_text) - [Don’t Use aria-label on Static Text Elements (2024)](https://benmyers.dev/blog/dont-use-aria-label-on-static-text-elements/)
* [2026-07-13, 15:23:52](https://lobste.rs/s/abza3v/how_early_sunos_did_diskless) - [How early SunOS did diskless workstations before NFS](https://utcc.utoronto.ca/~cks/space/blog/solaris/SunOSDisklessWithoutNFS)
* [2026-07-13, 15:11:50](https://news.ycombinator.com/item?id=48893947) - [LAPD lets contract with surveillance giant Flock expire](https://techcrunch.com/2026/07/13/lapd-lets-contract-with-surveillance-giant-flock-expire-citing-serious-concerns-over-civil-liberties-and-privacy/)
* [2026-07-13, 15:00:00](https://slashdot.org/story/26/07/13/0530223/china-russia-and-others-seek-to-inflame-debate-over-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China, Russia and Others Seek To Inflame Debate Over AI Data Centers](https://slashdot.org/story/26/07/13/0530223/china-russia-and-others-seek-to-inflame-debate-over-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 14:52:33](https://news.ycombinator.com/item?id=48893639) - [The art and engineering of Sega CD Silpheed](https://fabiensanglard.net/silpheed/index.html)
* [2026-07-13, 14:48:34](https://lobste.rs/s/xwkpvf/how_organize_ruby_conference) - [How to Organize a Ruby Conference](https://guides.rubyevents.org/conferences/)
* [2026-07-13, 13:48:42](https://news.ycombinator.com/item?id=48892638) - [Benchmarking 15 \&quot;E-Waste\&quot; GPUs with Modern Workloads](https://esologic.com/benchmarking-tesla-gpus/)
* [2026-07-13, 13:20:01](https://lobste.rs/s/4smkjv/engineering_high_performance_parsers) - [Engineering High-Performance Parsers with Data-Oriented Design](https://arshad.fyi/writings/engineering-high-performance-parsers)
* [2026-07-13, 11:53:00](https://soylentnews.org/article.pl?sid=26/07/12/2127219&amp;from=rss) - [Why Navies Around The World Keep Submarine Propeller Designs So Secretive](https://soylentnews.org/article.pl?sid=26/07/12/2127219&amp;from=rss)
* [2026-07-13, 11:51:56](https://news.ycombinator.com/item?id=48891267) - [Show HN: DOM-docx – HTML to native, editable Word docs (MIT)](https://github.com/floodtide/dom-docx)
* [2026-07-13, 11:34:00](https://linux.slashdot.org/story/26/07/12/2126243/linus-torvalds-on-rust-c-bugs-and-ai-patch-checking-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds on Rust, C, Bugs, and AI Patch-Checking Tools](https://linux.slashdot.org/story/26/07/12/2126243/linus-torvalds-on-rust-c-bugs-and-ai-patch-checking-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 11:33:27](https://lobste.rs/s/posxmd/crates_io_development_update) - [crates.io: development update](https://blog.rust-lang.org/2026/07/13/crates-io-development-update/)
* [2026-07-13, 11:18:30](https://news.ycombinator.com/item?id=48890959) - [A voxel Tokyo in real Japan time – ride the Yamanote line and study Japanese](https://jivx.com/densha)
* [2026-07-13, 09:44:13](https://lobste.rs/s/ozcrd0/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/ozcrd0/what_are_you_doing_this_week)
* [2026-07-13, 09:28:38](https://lobste.rs/s/4rbnnj/ipv6_over_drainage_pipe) - [IPv6 over drainage pipe](https://chaos.social/@marble/116720125530089009)
* [2026-07-13, 08:54:00](https://science.slashdot.org/story/26/07/13/0522200/japans-space-agency-conducts-first-test-flight-for-experimental-reusable-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan&apos;s Space Agency Conducts First Test Flight For Experimental Reusable Rocket](https://science.slashdot.org/story/26/07/13/0522200/japans-space-agency-conducts-first-test-flight-for-experimental-reusable-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 07:41:04](https://lobste.rs/s/goqanz/webextension_query_any_html_table_with) - [WebExtension to query any HTML table with PRQL](https://avlasov.cabal.run/notes/001/index.html)
* [2026-07-13, 07:15:47](https://lobste.rs/s/uoiw3u/introducing_bobbin_diskless_api_only) - [Introducing Bobbin: A diskless, API-only AppView for Tangled](https://blog.tangled.org/bobbin/)
* [2026-07-13, 07:07:00](https://soylentnews.org/article.pl?sid=26/07/12/150251&amp;from=rss) - [Electric Drone Breaks World Air Speed Record at 434 Mph, Designed for Anti-Aircraft Interceptor Role](https://soylentnews.org/article.pl?sid=26/07/12/150251&amp;from=rss)
* [2026-07-13, 06:55:28](https://lobste.rs/s/temfk6/wwdc_26_update_on_building_mac_assed_app) - [A WWDC 26 Update on Building a Mac-assed App with SwiftUI](https://pfandrade.me/blog/swiftui-mac-assed-wwdc27-update/)
* [2026-07-13, 06:40:36](https://lobste.rs/s/sca1qx/hacker_fables_satirical_cyberpunk) - [Hacker Fables - A satirical cyberpunk novella you can read as a man page](https://hacker-fables.onrender.com)
* [2026-07-13, 04:54:00](https://it.slashdot.org/story/26/07/13/0443258/america-may-soon-be-facing-largest-labor-shortage-in-its-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America May Soon Be Facing Largest Labor Shortage in Its History](https://it.slashdot.org/story/26/07/13/0443258/america-may-soon-be-facing-largest-labor-shortage-in-its-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 03:33:01](https://lobste.rs/s/1an425/quadrupling_code_performance_with) - [Quadrupling code performance with a \&quot;useless\&quot; if](https://purplesyringa.moe/blog/quadrupling-code-performance-with-a-useless-if/)
* [2026-07-13, 02:27:00](https://soylentnews.org/article.pl?sid=26/07/11/1848242&amp;from=rss) - [Higher Blood Glucose Levels Linked to Faster Brain Aging](https://soylentnews.org/article.pl?sid=26/07/11/1848242&amp;from=rss)
* [2026-07-13, 01:54:00](https://tech.slashdot.org/story/26/07/13/0121226/semi-trailer-trucks-test-converting-into-plug-in-hybrids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Semi-Trailer Trucks Test Converting Into Plug-In Hybrids](https://tech.slashdot.org/story/26/07/13/0121226/semi-trailer-trucks-test-converting-into-plug-in-hybrids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 00:16:59](https://lobste.rs/s/feikm9/overhauled_homelab) - [Overhauled homelab](https://timharek.no/blog/kaizen-4/)
* [2026-07-12, 23:34:00](https://news.slashdot.org/story/26/07/12/2326225/billionaire-exodus-california-drew-10x-more-venture-capital-than-any-other-state-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Billionaire Exodus? California Drew 10x More Venture Capital Than Any Other State This Year&apos;](https://news.slashdot.org/story/26/07/12/2326225/billionaire-exodus-california-drew-10x-more-venture-capital-than-any-other-state-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 23:06:14](https://lobste.rs/s/idlqxp/browsers_do_math_differently_on_every_os) - [Browsers Do Math Differently on Every OS; Anti-Bot Systems Read the Bits](https://scrapfly.dev/posts/browser-math-os-fingerprint/)
* [2026-07-12, 22:29:00](https://it.slashdot.org/story/26/07/12/2224249/forget-coders-the-real-ai-threat-is-in-the-back-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Forget Coders. The Real AI Threat Is In the Back Office&apos;](https://it.slashdot.org/story/26/07/12/2224249/forget-coders-the-real-ai-threat-is-in-the-back-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 22:12:06](https://lobste.rs/s/7ke9cs/know_thine_enemy_critical_engagement) - [Know thine enemy: A critical engagement with AI-assisted software development](https://medium.com/bits-and-behavior/know-thine-enemy-a-critical-engagement-with-ai-assisted-software-development-e41d9b058ab1)
* [2026-07-12, 21:45:00](https://soylentnews.org/article.pl?sid=26/07/11/1846204&amp;from=rss) - [Volkswagen Sales Plunge as German Automaker Lays Out Plan to Slash Number of Brands](https://soylentnews.org/article.pl?sid=26/07/11/1846204&amp;from=rss)
* [2026-07-12, 20:55:00](https://linux.slashdot.org/story/26/07/12/2053201/linus-torvalds-on-ai-junk-patches-humans-and-godzilla?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds on AI, Junk Patches, Humans, and Godzilla](https://linux.slashdot.org/story/26/07/12/2053201/linus-torvalds-on-ai-junk-patches-humans-and-godzilla?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 18:58:31](https://lobste.rs/s/7840ca/closing_three_year_old_issue_using_rust) - [Closing a three-year-old issue using Rust arenas](https://giacomocavalieri.me/writing/gleam-rust-arenas)
* [2026-07-12, 16:57:00](https://soylentnews.org/article.pl?sid=26/07/11/1844243&amp;from=rss) - [Quantum Mechanics Surprisingly Based on Real Numbers](https://soylentnews.org/article.pl?sid=26/07/11/1844243&amp;from=rss)
* [2026-07-12, 15:19:32](https://lobste.rs/s/beqyuc/evan_s_jujutsu_tutorial) - [Evan&apos;s Jujutsu Tutorial](https://evmar.github.io/jjtut/)
* [2026-07-12, 12:10:00](https://soylentnews.org/article.pl?sid=26/07/11/0144241&amp;from=rss) - [New Dental Robot Attaches to Patient&apos;s Teeth for Drilling](https://soylentnews.org/article.pl?sid=26/07/11/0144241&amp;from=rss)
* [2026-07-12, 07:21:00](https://soylentnews.org/article.pl?sid=26/07/11/0138228&amp;from=rss) - [Failed Aussie Blockchain Project Ends With Big Fine for Fibs About It Being on Track](https://soylentnews.org/article.pl?sid=26/07/11/0138228&amp;from=rss)
* [2026-07-12, 02:38:00](https://soylentnews.org/article.pl?sid=26/07/11/0130201&amp;from=rss) - [NHTSA Calls Out Autonomous Cars for Interfering With First Responders](https://soylentnews.org/article.pl?sid=26/07/11/0130201&amp;from=rss)
* [2026-07-11, 22:54:07](https://news.ycombinator.com/item?id=48876621) - [How sea stars build materials that can see](https://www.engineering.upenn.edu/stories/how-sea-stars-build-materials-that-can-see/)
* [2026-07-11, 21:49:00](https://soylentnews.org/article.pl?sid=26/07/11/0123222&amp;from=rss) - [Woman&apos;s Puzzling Decline Turns Out to be Cobalt Poisoning From Hip Replacement](https://soylentnews.org/article.pl?sid=26/07/11/0123222&amp;from=rss)
* [2026-07-11, 17:07:00](https://soylentnews.org/article.pl?sid=26/07/10/0939213&amp;from=rss) - [Geopolitical Tensions Are Complicating Research Efforts in the Norwegian Archipelago of Svalbar](https://soylentnews.org/article.pl?sid=26/07/10/0939213&amp;from=rss)
* [2026-07-11, 12:23:00](https://soylentnews.org/article.pl?sid=26/07/10/0919216&amp;from=rss) - [Secure Unix Ancestor KSOS Did Type Safety Before Rust Made It Cool](https://soylentnews.org/article.pl?sid=26/07/10/0919216&amp;from=rss)
* [2026-07-11, 07:41:00](https://soylentnews.org/article.pl?sid=26/07/10/0916227&amp;from=rss) - [Scientists Discover the Deep Sleep Circuit That Builds Muscle, Burns Fat, and Boosts the Brain](https://soylentnews.org/article.pl?sid=26/07/10/0916227&amp;from=rss)
* [2026-07-11, 03:24:03](https://news.ycombinator.com/item?id=48868417) - [The Origins of Heikki&apos;s Garden of Flowers](https://garden-of-flowers.heikkilotvonen.com/?essay)
* [2026-07-11, 02:54:00](https://soylentnews.org/article.pl?sid=26/07/09/1625207&amp;from=rss) - [Suspecting AI Cheating, Ivy League Prof Ordered an in-Person Final; Scores Fell 50%](https://soylentnews.org/article.pl?sid=26/07/09/1625207&amp;from=rss)
* [2026-07-10, 23:04:50](https://news.ycombinator.com/item?id=48866461) - [The 4-Bitter Lesson: Balancing Stability and Performance in NVFP4 RL](https://humansand.ai/blog/nvfp4-rl)
* [2026-07-10, 21:44:00](https://soylentnews.org/article.pl?sid=26/07/09/0348202&amp;from=rss) - [Qualcomm Buys Lattner&apos;s Modular for Almost $4bn](https://soylentnews.org/article.pl?sid=26/07/09/0348202&amp;from=rss)
* [2026-07-10, 17:01:00](https://soylentnews.org/article.pl?sid=26/07/09/0343224&amp;from=rss) - [Alibaba Bans Anthropic&apos;s Claude Code After an Alleged Hidden China-Detection Backdoor is Uncovered](https://soylentnews.org/article.pl?sid=26/07/09/0343224&amp;from=rss)
* [2026-07-10, 12:17:00](https://soylentnews.org/article.pl?sid=26/07/09/0339222&amp;from=rss) - [Back to Basics, or Masm. Writing a Tiny Notepad for W11.](https://soylentnews.org/article.pl?sid=26/07/09/0339222&amp;from=rss)
* [2026-07-10, 07:30:00](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss) - [Record-Breaking Ocean Drilling Reveals Why Japan&apos;s 2011 Tsunami Was So Deadly](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss)
* [2026-07-10, 02:46:00](https://soylentnews.org/article.pl?sid=26/07/09/0329217&amp;from=rss) - [Bethesda, Id Software Reportedly Hit Hard by Microsoft Layoffs](https://soylentnews.org/article.pl?sid=26/07/09/0329217&amp;from=rss)
* [2026-07-09, 22:06:00](https://soylentnews.org/article.pl?sid=26/07/08/0159235&amp;from=rss) - [Interoception:  the Sense of How You Feel Inside](https://soylentnews.org/article.pl?sid=26/07/08/0159235&amp;from=rss)
* [2026-07-09, 20:47:45](https://news.ycombinator.com/item?id=48852159) - [Ancient Roman Board Game](https://ludus-coriovalli.web.app/)
* [2026-07-09, 17:23:00](https://soylentnews.org/article.pl?sid=26/07/08/0155211&amp;from=rss) - [NASA May Send A Backup, Nuclear-Powered Mars Rover To The Moon](https://soylentnews.org/article.pl?sid=26/07/08/0155211&amp;from=rss)
* [2026-07-09, 12:32:00](https://soylentnews.org/article.pl?sid=26/07/08/0153215&amp;from=rss) - [The Twenty-Ninth International Obfuscated C Code Contest is back](https://soylentnews.org/article.pl?sid=26/07/08/0153215&amp;from=rss)
* [2026-07-09, 07:51:00](https://soylentnews.org/article.pl?sid=26/07/08/0151252&amp;from=rss) - [The Supreme Court Just Lit a Fuse Under Flock&apos;s License Plate Camera Empire](https://soylentnews.org/article.pl?sid=26/07/08/0151252&amp;from=rss)
* [2026-07-09, 03:08:00](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss) - [Rats Show Empathy, According to Model](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss)
