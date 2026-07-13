# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Human Emacs](https://human-emacs.org/) - A novel take on humanizing Emacs usage, exploring the intersection of technology and human interaction. [Comments](https://lobste.rs/s/t0aqzy/human_emacs)

* [Linus Torvalds on Rust, C, Bugs, and AI Patch-Checking Tools](https://linux.slashdot.org/story/26/07/12/2126243/linus-torvalds-on-rust-c-bugs-and-ai-patch-checking-tools?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Torvalds discusses the convergence of tools like Rust and AI, which have implications for bug prevention. [Comments](https://linux.slashdot.org/story/26/07/12/2126243/linus-torvalds-on-rust-c-bugs-and-ai-patch-checking-tools?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Engineering High-Performance Parsers with Data-Oriented Design](https://arshad.fyi/writings/engineering-high-performance-parsers) - Delving into efficient parsing techniques leveraging data-oriented programming paradigms. [Comments](https://lobste.rs/s/4smkjv/engineering_high_performance_parsers)

* [Introducing Bobbin: A diskless, API-only AppView for Tangled](https://blog.tangled.org/bobbin/) - A unique solution for managing modern applications without disk dependencies. [Comments](https://lobste.rs/s/uoiw3u/introducing_bobbin_diskless_api_only)

## Science and Exploration

* [Japan's Space Agency Conducts First Test Flight For Experimental Reusable Rocket](https://science.slashdot.org/story/26/07/13/0522200/japans-space-agency-conducts-first-test-flight-for-experimental-reusable-rocket?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A look at Japan's advancements in reusable rocket technology and space exploration. [Comments](https://science.slashdot.org/story/26/07/13/0522200/japans-space-agency-conducts-first-test-flight-for-experimental-reusable-rocket?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Scientists Discover the Deep Sleep Circuit That Builds Muscle, Burns Fat, and Boosts the Brain](https://soylentnews.org/article.pl?sid=26/07/10/0916227&amp;from=rss) - Unveiling the science behind how sleep enhances physical and cognitive functions. [Comments](https://soylentnews.org/article.pl?sid=26/07/10/0916227&amp;from=rss)

* [Why Navies Around The World Keep Submarine Propeller Designs So Secretive](https://soylentnews.org/article.pl?sid=26/07/12/2127219&amp;from=rss) - Intriguing insights into the technology and secrecy behind submarine design. [Comments](https://soylentnews.org/article.pl?sid=26/07/12/2127219&amp;from=rss)

## Social Trends and Society

* [Why 55% of Americans Stopped Posting On Social Media](https://tech.slashdot.org/story/26/07/13/0548235/why-55-of-americans-stopped-posting-on-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Examining the shift in online behavior and its broader societal implications. [Comments](https://tech.slashdot.org/story/26/07/13/0548235/why-55-of-americans-stopped-posting-on-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [A voxel Tokyo in real Japan time – ride the Yamanote line and study Japanese](https://jivx.com/densha) - A fascinating interactive tool combining urban modeling and real-time elements. [Comments](https://news.ycombinator.com/item?id=48890959)

## Tech Ethics and Privacy

* [Wikipedia escapes Category 1 designation under the UK Online Safety Act for now](https://en.wikipedia.org/wiki/Wikipedia:Wikipedia_Signpost/2026-07-13/Special_report) - Updates on how Wikipedia navigates regulatory challenges related to digital safety. [Comments](https://news.ycombinator.com/item?id=48894671)

* [LAPD lets contract with surveillance giant Flock expire](https://techcrunch.com/2026/07/13/lapd-lets-contract-with-surveillance-giant-flock-expire-citing-serious-concerns-over-civil-liberties-and-privacy/) - Insight into privacy and civil liberty considerations in modern surveillance practices. [Comments](https://news.ycombinator.com/item?id=48893947)

* [Grok uploaded my user directory to xAI's servers](https://twitter.com/a_green_being/status/2076598897779020159) - Controversial revelation about a command-line tool's unexpected data upload. [Comments](https://news.ycombinator.com/item?id=48892512)

## Engineering Advancements

* [Quadrupling code performance with a 'useless' if](https://purplesyringa.moe/blog/quadrupling-code-performance-with-a-useless-if/) - Exploring an unconventional coding optimization method. [Comments](https://lobste.rs/s/1an425/quadrupling_code_performance_with)

* [Backtrack-Free Cursive](https://mmapped.blog/posts/52-backtrack-free-cursive) - Innovative approaches to text rendering using backtrack-free algorithms. [Comments](https://news.ycombinator.com/item?id=48888518)

## Creative and Niche Projects

* [Hacker Fables - A satirical cyberpunk novella you can read as a man page](https://hacker-fables.onrender.com) - An imaginative take on combining storytelling with man page formats. [Comments](https://lobste.rs/s/sca1qx/hacker_fables_satirical_cyberpunk)

* [Tiny Emulators](https://floooh.github.io/tiny8bit-preview/index.html) - A project spotlighting miniaturized emulators for retro gaming fans. [Comments](https://news.ycombinator.com/item?id=48884395)

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

* [2026-07-13, 16:18:36](https://lobste.rs/s/t0aqzy/human_emacs) - [Human Emacs](https://human-emacs.org/)
* [2026-07-13, 16:06:08](https://news.ycombinator.com/item?id=48894752) - [Apple&apos;s new SpeechAnalyzer API, benchmarked against Whisper and its predecessor](https://get-inscribe.com/blog/apple-speech-api-benchmark.html)
* [2026-07-13, 16:01:28](https://lobste.rs/s/yf6vbc/just_let_me_write_digits) - [Just Let Me Write Digits](https://gendignoux.com/blog/2026/07/13/input-digits.html)
* [2026-07-13, 16:00:00](https://tech.slashdot.org/story/26/07/13/0548235/why-55-of-americans-stopped-posting-on-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why 55% of Americans Stopped Posting On Social Media](https://tech.slashdot.org/story/26/07/13/0548235/why-55-of-americans-stopped-posting-on-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 15:59:36](https://news.ycombinator.com/item?id=48894671) - [Wikipedia escapes Category 1 designation under the UK Online Safety Act for now](https://en.wikipedia.org/wiki/Wikipedia:Wikipedia_Signpost/2026-07-13/Special_report)
* [2026-07-13, 15:56:39](https://news.ycombinator.com/item?id=48894641) - [DOGE is done. What happened to its records?](https://www.ms.now/opinion/doge-government-efficiency-records-job-cuts-elon-musk-foia)
* [2026-07-13, 15:56:22](https://news.ycombinator.com/item?id=48894637) - [Go-Flavored Concurrency in C](https://antonz.org/concurrency-in-c/)
* [2026-07-13, 15:35:04](https://lobste.rs/s/5t3wzn/control_ideas_not_code) - [Control the ideas, not the code](https://antirez.com/news/169)
* [2026-07-13, 15:29:25](https://lobste.rs/s/2q39ny/don_t_use_aria_label_on_static_text) - [Don’t Use aria-label on Static Text Elements (2024)](https://benmyers.dev/blog/dont-use-aria-label-on-static-text-elements/)
* [2026-07-13, 15:23:52](https://lobste.rs/s/abza3v/how_early_sunos_did_diskless) - [How early SunOS did diskless workstations before NFS](https://utcc.utoronto.ca/~cks/space/blog/solaris/SunOSDisklessWithoutNFS)
* [2026-07-13, 15:11:50](https://news.ycombinator.com/item?id=48893947) - [LAPD lets contract with surveillance giant Flock expire](https://techcrunch.com/2026/07/13/lapd-lets-contract-with-surveillance-giant-flock-expire-citing-serious-concerns-over-civil-liberties-and-privacy/)
* [2026-07-13, 15:00:00](https://slashdot.org/story/26/07/13/0530223/china-russia-and-others-seek-to-inflame-debate-over-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China, Russia and Others Seek To Inflame Debate Over AI Data Centers](https://slashdot.org/story/26/07/13/0530223/china-russia-and-others-seek-to-inflame-debate-over-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 14:52:33](https://news.ycombinator.com/item?id=48893639) - [The art and engineering of Sega CD Silpheed](https://fabiensanglard.net/silpheed/index.html)
* [2026-07-13, 14:48:34](https://lobste.rs/s/xwkpvf/how_organize_ruby_conference) - [How to Organize a Ruby Conference](https://guides.rubyevents.org/conferences/)
* [2026-07-13, 14:39:38](https://news.ycombinator.com/item?id=48893446) - [Precursor](https://blog.cloudflare.com/introducing-precursor/)
* [2026-07-13, 14:02:03](https://news.ycombinator.com/item?id=48892859) - [Show HN: Clawk – Give coding agents a disposable Linux VM, not your laptop](https://github.com/clawkwork/clawk)
* [2026-07-13, 13:48:42](https://news.ycombinator.com/item?id=48892638) - [Benchmarking 15 \&quot;E-Waste\&quot; GPUs with Modern Workloads](https://esologic.com/benchmarking-tesla-gpus/)
* [2026-07-13, 13:39:59](https://news.ycombinator.com/item?id=48892512) - [Grok uploaded my user directory to xAI&apos;s servers](https://twitter.com/a_green_being/status/2076598897779020159)
* [2026-07-13, 13:35:32](https://news.ycombinator.com/item?id=48892468) - [Grok CLI uploaded the whole home directory to GCS](https://twitter.com/i/status/2076598897779020159)
* [2026-07-13, 13:20:01](https://lobste.rs/s/4smkjv/engineering_high_performance_parsers) - [Engineering High-Performance Parsers with Data-Oriented Design](https://arshad.fyi/writings/engineering-high-performance-parsers)
* [2026-07-13, 11:53:00](https://soylentnews.org/article.pl?sid=26/07/12/2127219&amp;from=rss) - [Why Navies Around The World Keep Submarine Propeller Designs So Secretive](https://soylentnews.org/article.pl?sid=26/07/12/2127219&amp;from=rss)
* [2026-07-13, 11:51:56](https://news.ycombinator.com/item?id=48891267) - [Show HN: DOM-docx – HTML to native, editable Word docs (MIT)](https://github.com/floodtide/dom-docx)
* [2026-07-13, 11:45:36](https://news.ycombinator.com/item?id=48891184) - [Control the Ideas, Not the Code](https://antirez.com/news/169)
* [2026-07-13, 11:34:00](https://linux.slashdot.org/story/26/07/12/2126243/linus-torvalds-on-rust-c-bugs-and-ai-patch-checking-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds on Rust, C, Bugs, and AI Patch-Checking Tools](https://linux.slashdot.org/story/26/07/12/2126243/linus-torvalds-on-rust-c-bugs-and-ai-patch-checking-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 11:33:27](https://lobste.rs/s/posxmd/crates_io_development_update) - [crates.io: development update](https://blog.rust-lang.org/2026/07/13/crates-io-development-update/)
* [2026-07-13, 11:18:30](https://news.ycombinator.com/item?id=48890959) - [A voxel Tokyo in real Japan time – ride the Yamanote line and study Japanese](https://jivx.com/densha)
* [2026-07-13, 09:44:13](https://lobste.rs/s/ozcrd0/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/ozcrd0/what_are_you_doing_this_week)
* [2026-07-13, 09:28:38](https://lobste.rs/s/4rbnnj/ipv6_over_drainage_pipe) - [IPv6 over drainage pipe](https://chaos.social/@marble/116720125530089009)
* [2026-07-13, 08:54:00](https://science.slashdot.org/story/26/07/13/0522200/japans-space-agency-conducts-first-test-flight-for-experimental-reusable-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan&apos;s Space Agency Conducts First Test Flight For Experimental Reusable Rocket](https://science.slashdot.org/story/26/07/13/0522200/japans-space-agency-conducts-first-test-flight-for-experimental-reusable-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 08:39:39](https://news.ycombinator.com/item?id=48889637) - [Zig Creator Calls Spade a Spade, Anthropic Blows Smoke](https://raymyers.org/post/zed-creator-calls-spade-a-spade/)
* [2026-07-13, 08:04:30](https://news.ycombinator.com/item?id=48889350) - [Interrail: 6,379Km and 13 Countries over 7 weeks](https://shkspr.mobi/blog/2026/07/another-ridiculous-interrail-holiday-6379km-and-13-countries-over-7-weeks/)
* [2026-07-13, 07:41:04](https://lobste.rs/s/goqanz/webextension_query_any_html_table_with) - [WebExtension to query any HTML table with PRQL](https://avlasov.cabal.run/notes/001/index.html)
* [2026-07-13, 07:15:47](https://lobste.rs/s/uoiw3u/introducing_bobbin_diskless_api_only) - [Introducing Bobbin: A diskless, API-only AppView for Tangled](https://blog.tangled.org/bobbin/)
* [2026-07-13, 07:07:00](https://soylentnews.org/article.pl?sid=26/07/12/150251&amp;from=rss) - [Electric Drone Breaks World Air Speed Record at 434 Mph, Designed for Anti-Aircraft Interceptor Role](https://soylentnews.org/article.pl?sid=26/07/12/150251&amp;from=rss)
* [2026-07-13, 06:55:28](https://lobste.rs/s/temfk6/wwdc_26_update_on_building_mac_assed_app) - [A WWDC 26 Update on Building a Mac-assed App with SwiftUI](https://pfandrade.me/blog/swiftui-mac-assed-wwdc27-update/)
* [2026-07-13, 06:40:36](https://lobste.rs/s/sca1qx/hacker_fables_satirical_cyberpunk) - [Hacker Fables - A satirical cyberpunk novella you can read as a man page](https://hacker-fables.onrender.com)
* [2026-07-13, 06:08:12](https://news.ycombinator.com/item?id=48888518) - [Backtrack-Free Cursive](https://mmapped.blog/posts/52-backtrack-free-cursive)
* [2026-07-13, 05:35:27](https://news.ycombinator.com/item?id=48888331) - [The Graph That Should Be Front-Page News](https://www.lyrebirddreaming.com/post/the-graph-that-should-be-front-page-news)
* [2026-07-13, 05:15:14](https://news.ycombinator.com/item?id=48888193) - [Beavis Ultrasound PnP ISA Sound Card Replica](https://github.com/schlae/BeavisUltrasound)
* [2026-07-13, 04:54:00](https://it.slashdot.org/story/26/07/13/0443258/america-may-soon-be-facing-its-largest-labor-shortage-in-its-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America May Soon Be Facing It&apos;s Largest Labor Shortage in Its History](https://it.slashdot.org/story/26/07/13/0443258/america-may-soon-be-facing-its-largest-labor-shortage-in-its-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 03:33:01](https://lobste.rs/s/1an425/quadrupling_code_performance_with) - [Quadrupling code performance with a \&quot;useless\&quot; if](https://purplesyringa.moe/blog/quadrupling-code-performance-with-a-useless-if/)
* [2026-07-13, 02:27:00](https://soylentnews.org/article.pl?sid=26/07/11/1848242&amp;from=rss) - [Higher Blood Glucose Levels Linked to Faster Brain Aging](https://soylentnews.org/article.pl?sid=26/07/11/1848242&amp;from=rss)
* [2026-07-13, 01:54:00](https://tech.slashdot.org/story/26/07/13/0121226/semi-trailer-trucks-test-converting-into-plug-in-hybrids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Semi-Trailer Trucks Test Converting Into Plug-In Hybrids](https://tech.slashdot.org/story/26/07/13/0121226/semi-trailer-trucks-test-converting-into-plug-in-hybrids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 00:16:59](https://lobste.rs/s/feikm9/overhauled_homelab) - [Overhauled homelab](https://timharek.no/blog/kaizen-4/)
* [2026-07-12, 23:34:00](https://news.slashdot.org/story/26/07/12/2326225/billionaire-exodus-california-drew-10x-more-venture-capital-than-any-other-state-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Billionaire Exodus? California Drew 10x More Venture Capital Than Any Other State This Year&apos;](https://news.slashdot.org/story/26/07/12/2326225/billionaire-exodus-california-drew-10x-more-venture-capital-than-any-other-state-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 23:06:14](https://lobste.rs/s/idlqxp/browsers_do_math_differently_on_every_os) - [Browsers Do Math Differently on Every OS; Anti-Bot Systems Read the Bits](https://scrapfly.dev/posts/browser-math-os-fingerprint/)
* [2026-07-12, 22:45:31](https://news.ycombinator.com/item?id=48885643) - [Cyberpunk Comics, Manga and Graphic Novels](https://shellzine.net/cyberpunk-comics/)
* [2026-07-12, 22:29:00](https://it.slashdot.org/story/26/07/12/2224249/forget-coders-the-real-ai-threat-is-in-the-back-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Forget Coders. The Real AI Threat Is In the Back Office&apos;](https://it.slashdot.org/story/26/07/12/2224249/forget-coders-the-real-ai-threat-is-in-the-back-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 22:12:06](https://lobste.rs/s/7ke9cs/know_thine_enemy_critical_engagement) - [Know thine enemy: A critical engagement with AI-assisted software development](https://medium.com/bits-and-behavior/know-thine-enemy-a-critical-engagement-with-ai-assisted-software-development-e41d9b058ab1)
* [2026-07-12, 21:45:00](https://soylentnews.org/article.pl?sid=26/07/11/1846204&amp;from=rss) - [Volkswagen Sales Plunge as German Automaker Lays Out Plan to Slash Number of Brands](https://soylentnews.org/article.pl?sid=26/07/11/1846204&amp;from=rss)
* [2026-07-12, 20:55:00](https://linux.slashdot.org/story/26/07/12/2053201/linus-torvalds-on-ai-junk-patches-humans-and-godzilla?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds on AI, Junk Patches, Humans, and Godzilla](https://linux.slashdot.org/story/26/07/12/2053201/linus-torvalds-on-ai-junk-patches-humans-and-godzilla?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 20:23:05](https://news.ycombinator.com/item?id=48884395) - [Tiny Emulators](https://floooh.github.io/tiny8bit-preview/index.html)
* [2026-07-12, 19:56:07](https://lobste.rs/s/ncsslp/infinitediffusion_bridging_learned) - [InfiniteDiffusion: Bridging Learned Fidelity and Procedural Utility for Open-World Terrain Generation](https://xandergos.github.io/terrain-diffusion/)
* [2026-07-12, 18:58:31](https://lobste.rs/s/7840ca/closing_three_year_old_issue_using_rust) - [Closing a three-year-old issue using Rust arenas](https://giacomocavalieri.me/writing/gleam-rust-arenas)
* [2026-07-12, 18:50:00](https://tech.slashdot.org/story/26/07/12/1842219/elon-musk-and-sam-altman-spar-on-x-after-apple-files-openai-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Elon Musk And Sam Altman Spar On X After Apple Files OpenAI Lawsuit](https://tech.slashdot.org/story/26/07/12/1842219/elon-musk-and-sam-altman-spar-on-x-after-apple-files-openai-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 17:50:00](https://hardware.slashdot.org/story/26/07/12/1747258/sk-hynix-ceo-warns-2027-will-be-memorys-worst-year-ever-shortages-may-outlast-the-decade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SK Hynix CEO Warns 2027 Will Be Memory&apos;s &apos;Worst Year&apos; Ever. Shortages May Outlast the Decade](https://hardware.slashdot.org/story/26/07/12/1747258/sk-hynix-ceo-warns-2027-will-be-memorys-worst-year-ever-shortages-may-outlast-the-decade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 16:57:00](https://soylentnews.org/article.pl?sid=26/07/11/1844243&amp;from=rss) - [Quantum Mechanics Surprisingly Based on Real Numbers](https://soylentnews.org/article.pl?sid=26/07/11/1844243&amp;from=rss)
* [2026-07-12, 16:34:00](https://slashdot.org/story/26/07/12/0643218/wsj-reports-on-hard-line-activists-ramping-up-for-the-war-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WSJ Reports on &apos;Hard-line Activists Ramping Up for the War With AI&apos;](https://slashdot.org/story/26/07/12/0643218/wsj-reports-on-hard-line-activists-ramping-up-for-the-war-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 15:47:16](https://news.ycombinator.com/item?id=48882056) - [How to read more books](https://scotto.me/blog/2026-07-12-how-to-read-more-books/)
* [2026-07-12, 15:34:00](https://tech.slashdot.org/story/26/07/12/0543243/is-the-cosmic-desktop-getting-better-than-kde-and-gnome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the COSMIC Desktop Getting Better Than KDE and GNOME?](https://tech.slashdot.org/story/26/07/12/0543243/is-the-cosmic-desktop-getting-better-than-kde-and-gnome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 15:19:32](https://lobste.rs/s/beqyuc/evan_s_jujutsu_tutorial) - [Evan&apos;s Jujutsu Tutorial](https://evmar.github.io/jjtut/)
* [2026-07-12, 14:34:00](https://slashdot.org/story/26/07/11/1944220/ai-driven-datacenter-builds-increased-microsofts-emissions-25-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI-driven Datacenter Builds Increased Microsoft&apos;s Emissions 25% In One Year](https://slashdot.org/story/26/07/11/1944220/ai-driven-datacenter-builds-increased-microsofts-emissions-25-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 12:18:13](https://lobste.rs/s/xgdsao/ghostel_el_terminal_emulator_powered_by) - [ghostel.el - Terminal emulator powered by libghostty](https://dakra.github.io/ghostel/)
* [2026-07-12, 12:10:00](https://soylentnews.org/article.pl?sid=26/07/11/0144241&amp;from=rss) - [New Dental Robot Attaches to Patient&apos;s Teeth for Drilling](https://soylentnews.org/article.pl?sid=26/07/11/0144241&amp;from=rss)
* [2026-07-12, 11:34:00](https://games.slashdot.org/story/26/07/12/058235/id-co-founders-carmack-and-romero-respond-to-microsofts-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Id Co-founders Carmack and Romero Respond to Microsoft&apos;s Layoffs](https://games.slashdot.org/story/26/07/12/058235/id-co-founders-carmack-and-romero-respond-to-microsofts-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 07:21:00](https://soylentnews.org/article.pl?sid=26/07/11/0138228&amp;from=rss) - [Failed Aussie Blockchain Project Ends With Big Fine for Fibs About It Being on Track](https://soylentnews.org/article.pl?sid=26/07/11/0138228&amp;from=rss)
* [2026-07-12, 06:40:15](https://lobste.rs/s/2vsvdm/proportional_web) - [The Proportional Web](https://owickstrom.github.io/the-proportional-web/)
* [2026-07-12, 02:38:00](https://soylentnews.org/article.pl?sid=26/07/11/0130201&amp;from=rss) - [NHTSA Calls Out Autonomous Cars for Interfering With First Responders](https://soylentnews.org/article.pl?sid=26/07/11/0130201&amp;from=rss)
* [2026-07-12, 02:34:31](https://lobste.rs/s/ktew3s/who_does_anubis_actually_stop) - [Who does Anubis actually stop?](https://fzakaria.com/2026/07/09/who-does-anubis-actually-stop)
* [2026-07-11, 21:49:00](https://soylentnews.org/article.pl?sid=26/07/11/0123222&amp;from=rss) - [Woman&apos;s Puzzling Decline Turns Out to be Cobalt Poisoning From Hip Replacement](https://soylentnews.org/article.pl?sid=26/07/11/0123222&amp;from=rss)
* [2026-07-11, 21:05:50](https://lobste.rs/s/tedtzz/where_did_my_segfault_go) - [Where did my segfault go?](https://rmpr.xyz/Where-did-my-segfault-go/)
* [2026-07-11, 17:07:00](https://soylentnews.org/article.pl?sid=26/07/10/0939213&amp;from=rss) - [Geopolitical Tensions Are Complicating Research Efforts in the Norwegian Archipelago of Svalbar](https://soylentnews.org/article.pl?sid=26/07/10/0939213&amp;from=rss)
* [2026-07-11, 12:23:00](https://soylentnews.org/article.pl?sid=26/07/10/0919216&amp;from=rss) - [Secure Unix Ancestor KSOS Did Type Safety Before Rust Made It Cool](https://soylentnews.org/article.pl?sid=26/07/10/0919216&amp;from=rss)
* [2026-07-11, 07:41:00](https://soylentnews.org/article.pl?sid=26/07/10/0916227&amp;from=rss) - [Scientists Discover the Deep Sleep Circuit That Builds Muscle, Burns Fat, and Boosts the Brain](https://soylentnews.org/article.pl?sid=26/07/10/0916227&amp;from=rss)
* [2026-07-11, 02:54:00](https://soylentnews.org/article.pl?sid=26/07/09/1625207&amp;from=rss) - [Suspecting AI Cheating, Ivy League Prof Ordered an in-Person Final; Scores Fell 50%](https://soylentnews.org/article.pl?sid=26/07/09/1625207&amp;from=rss)
* [2026-07-10, 21:44:00](https://soylentnews.org/article.pl?sid=26/07/09/0348202&amp;from=rss) - [Qualcomm Buys Lattner&apos;s Modular for Almost $4bn](https://soylentnews.org/article.pl?sid=26/07/09/0348202&amp;from=rss)
* [2026-07-10, 17:01:00](https://soylentnews.org/article.pl?sid=26/07/09/0343224&amp;from=rss) - [Alibaba Bans Anthropic&apos;s Claude Code After an Alleged Hidden China-Detection Backdoor is Uncovered](https://soylentnews.org/article.pl?sid=26/07/09/0343224&amp;from=rss)
* [2026-07-10, 12:17:00](https://soylentnews.org/article.pl?sid=26/07/09/0339222&amp;from=rss) - [Back to Basics, or Masm. Writing a Tiny Notepad for W11.](https://soylentnews.org/article.pl?sid=26/07/09/0339222&amp;from=rss)
* [2026-07-10, 07:30:00](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss) - [Record-Breaking Ocean Drilling Reveals Why Japan&apos;s 2011 Tsunami Was So Deadly](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss)
* [2026-07-10, 04:52:34](https://news.ycombinator.com/item?id=48855881) - [Counting ArXiv Delays](https://fi-le.net/arxiv/)
* [2026-07-10, 02:46:00](https://soylentnews.org/article.pl?sid=26/07/09/0329217&amp;from=rss) - [Bethesda, Id Software Reportedly Hit Hard by Microsoft Layoffs](https://soylentnews.org/article.pl?sid=26/07/09/0329217&amp;from=rss)
* [2026-07-09, 22:06:00](https://soylentnews.org/article.pl?sid=26/07/08/0159235&amp;from=rss) - [Interoception:  the Sense of How You Feel Inside](https://soylentnews.org/article.pl?sid=26/07/08/0159235&amp;from=rss)
* [2026-07-09, 17:23:00](https://soylentnews.org/article.pl?sid=26/07/08/0155211&amp;from=rss) - [NASA May Send A Backup, Nuclear-Powered Mars Rover To The Moon](https://soylentnews.org/article.pl?sid=26/07/08/0155211&amp;from=rss)
* [2026-07-09, 12:32:00](https://soylentnews.org/article.pl?sid=26/07/08/0153215&amp;from=rss) - [The Twenty-Ninth International Obfuscated C Code Contest is back](https://soylentnews.org/article.pl?sid=26/07/08/0153215&amp;from=rss)
* [2026-07-09, 10:45:36](https://news.ycombinator.com/item?id=48843775) - [Frieve Vinyl Explained – Microscopic stylus/groove physics simulation](https://frieve-a.github.io/sound_toolbox/vinyl_explained/vinyl_explained.html)
* [2026-07-09, 07:51:00](https://soylentnews.org/article.pl?sid=26/07/08/0151252&amp;from=rss) - [The Supreme Court Just Lit a Fuse Under Flock&apos;s License Plate Camera Empire](https://soylentnews.org/article.pl?sid=26/07/08/0151252&amp;from=rss)
* [2026-07-09, 07:00:17](https://news.ycombinator.com/item?id=48841962) - [Cursed circuits #6: reverse avalanche oscillator](https://lcamtuf.substack.com/p/cursed-circuits-6-reverse-avalanche)
* [2026-07-09, 03:08:00](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss) - [Rats Show Empathy, According to Model](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss)
