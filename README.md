# [News Summary](https://kherrick.github.io/news-summary/)

## Business and Legal Developments

* [Boring Company fined nearly $500K after it dumped drilling fluids into manholes](https://www.yahoo.com/news/articles/elon-musk-boring-company-fined-150000426.html) ([Comments](https://news.ycombinator.com/item?id=45862674))

* [Judge denies request to exempt Flock footage from Public Records Act](https://www.goskagit.com/news/local_news/court-denies-request-that-it-find-flock-safety-camera-data-is-exempt-from-public-records/article_f1edd028-d242-479c-ada8-f2dfca73a1b1.html) ([Comments](https://news.ycombinator.com/item?id=45861829))

* [Bank of America Faces Lawsuit Over Alleged Unpaid Time for Windows Bootup, Logins, and Security Token Requests](https://tech.slashdot.org/story/25/11/08/0836254/bank-of-america-faces-lawsuit-over-alleged-unpaid-time-for-windows-bootup-logins-and-security-token-requests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Technological and Environmental Innovations

* [Largest cargo sailboat completes first Atlantic crossing](https://www.marineinsight.com/shipping-news/worlds-largest-cargo-sailboat-completes-historic-first-atlantic-crossing/) ([Comments](https://news.ycombinator.com/item?id=45859471))

* [Scientists Edit Gene in 15 Patients That May Permanently Reduce High Cholesterol](https://science.slashdot.org/story/25/11/08/2021211/scientists-edit-gene-in-15-patients-that-may-permanently-reduce-high-cholesterol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The First New Subsea Habitat In 40 Years Is About To Launch](https://science.slashdot.org/story/25/11/08/0215248/the-first-new-subsea-habitat-in-40-years-is-about-to-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## AI and Programming Advances

* [GPT-5-Codex-Mini – A more compact and cost-efficient version of GPT-5-Codex](https://github.com/openai/codex/releases/tag/rust-v0.56.0) ([Comments](https://news.ycombinator.com/item?id=45861329))

* [Marko – A declarative, HTML‑based language](https://markojs.com/) ([Comments](https://news.ycombinator.com/item?id=45858905))

* [Ironclad – formally verified, real-time capable, Unix-like OS kernel](https://ironclad-os.org/) ([Comments](https://news.ycombinator.com/item?id=45860843))

## Major Cultural Highlights

* [Humanity's Endgame](https://www.noemamag.com/humanitys-endgame/) ([Comments](https://news.ycombinator.com/item?id=45861411))

* [Lego Unveils First-Ever Star Trek Set](https://games.slashdot.org/story/25/11/08/0226233/lego-unveils-first-ever-star-trek-set?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Vibe Coding Named Word of the Year By Collins Dictionary](https://slashdot.org/story/25/11/08/0155228/vibe-coding-named-word-of-the-year-by-collins-dictionary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-11-09, 03:32:46](https://news.ycombinator.com/item?id=45862674) - [Boring Company fined nearly $500K after it dumped drilling fluids into manholes](https://www.yahoo.com/news/articles/elon-musk-boring-company-fined-150000426.html)
* [2025-11-09, 03:15:33](https://news.ycombinator.com/item?id=45862591) - [Syntax and Semantics of Programming Languages (1995)](https://homepage.cs.uiowa.edu/~slonnegr/plf/Book/)
* [2025-11-09, 03:15:20](https://lobste.rs/s/bcyczw/ofcom_files_part_2_ip_blocking_uk_is_not) - [The Ofcom Files, Part 2: IP Blocking the UK is Not Enough to Comply with the Online Safety Act](https://prestonbyrne.com/2025/11/06/the-ofcom-files-part-2-ip-blocking-the-uk-is-not-enough-to-comply-with-the-online-safety-act/)
* [2025-11-09, 02:53:45](https://news.ycombinator.com/item?id=45862470) - [Tabloid: The Clickbait Headline Programming Language](https://tabloid.vercel.app/)
* [2025-11-09, 02:34:00](https://news.slashdot.org/story/25/11/08/2136253/new-firefox-mascot-kit-unveiled-on-new-web-page?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Firefox Mascot &apos;Kit&apos; Unveiled On New Web Page](https://news.slashdot.org/story/25/11/08/2136253/new-firefox-mascot-kit-unveiled-on-new-web-page?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 01:19:00](https://news.ycombinator.com/item?id=45861984) - [How Airbus Took Off](https://worksinprogress.co/issue/how-airbus-took-off/)
* [2025-11-09, 01:08:50](https://news.ycombinator.com/item?id=45861933) - [He Chunhui&apos;s Tiny386 Turns an ESP32-S3 into a Fully-Functional 386-Powered PC](https://www.hackster.io/news/he-chunhui-s-tiny386-turns-the-humble-esp32-s3-into-a-fully-functional-386-powered-desktop-pc-5454cf6e36a1)
* [2025-11-09, 00:55:47](https://lobste.rs/s/jf65nn/fixing_biggest_problem_with_mechanical) - [Fixing the Biggest Problem With Mechanical Keyboards](https://youtu.be/N3FEv1qw4_w)
* [2025-11-09, 00:53:07](https://news.ycombinator.com/item?id=45861829) - [Judge denies request to exempt Flock footage from Public Records Act](https://www.goskagit.com/news/local_news/court-denies-request-that-it-find-flock-safety-camera-data-is-exempt-from-public-records/article_f1edd028-d242-479c-ada8-f2dfca73a1b1.html)
* [2025-11-08, 23:58:08](https://news.ycombinator.com/item?id=45861411) - [Humanity&apos;s Endgame](https://www.noemamag.com/humanitys-endgame/)
* [2025-11-08, 23:48:58](https://news.ycombinator.com/item?id=45861329) - [GPT-5-Codex-Mini – A more compact and cost-efficient version of GPT-5-Codex](https://github.com/openai/codex/releases/tag/rust-v0.56.0)
* [2025-11-08, 23:43:11](https://lobste.rs/s/qvajex/trait_constrained_enums_rust) - [Trait-Constrained Enums in Rust](https://kcsongor.github.io/gadts-in-rust/)
* [2025-11-08, 23:34:00](https://tech.slashdot.org/story/25/11/08/1930213/common-crawl-criticized-for-quietly-funneling-paywalled-articles-to-ai-developers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Common Crawl Criticized for &apos;Quietly Funneling Paywalled Articles to AI Developers&apos;](https://tech.slashdot.org/story/25/11/08/1930213/common-crawl-criticized-for-quietly-funneling-paywalled-articles-to-ai-developers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 23:18:00](https://soylentnews.org/article.pl?sid=25/11/06/0740218&amp;from=rss) - [Does Academia Need a Wake Up Call on Wikibooks?](https://soylentnews.org/article.pl?sid=25/11/06/0740218&amp;from=rss)
* [2025-11-08, 23:17:43](https://lobste.rs/s/mfglpw/dijkstra_s_algorithm_js) - [Dijkstra’s Algorithm in JS](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/dijkstra/README.md)
* [2025-11-08, 23:03:10](https://news.ycombinator.com/item?id=45860843) - [Ironclad – formally verified, real-time capable, Unix-like OS kernel](https://ironclad-os.org/)
* [2025-11-08, 22:34:00](https://science.slashdot.org/story/25/11/08/2021211/scientists-edit-gene-in-15-patients-that-may-permanently-reduce-high-cholesterol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Edit Gene in 15 Patients That May Permanently Reduce High Cholesterol](https://science.slashdot.org/story/25/11/08/2021211/scientists-edit-gene-in-15-patients-that-may-permanently-reduce-high-cholesterol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 22:33:56](https://news.ycombinator.com/item?id=45860654) - [IP blocking the UK is not enough to comply with the Online Safety Act](https://prestonbyrne.com/2025/11/06/the-ofcom-files-part-2-ip-blocking-the-uk-is-not-enough-to-comply-with-the-online-safety-act/)
* [2025-11-08, 22:30:58](https://news.ycombinator.com/item?id=45860638) - [Debugging BeagleBoard USB boot with a sniffer: fixing omap_loader on modern PCs](https://www.downtowndougbrown.com/2025/11/debugging-beagleboard-usb-boot-with-a-sniffer-fixing-omap_loader-on-modern-pcs/)
* [2025-11-08, 22:28:16](https://lobste.rs/s/qzunfk/debugging_beagleboard_usb_boot_with) - [Debugging BeagleBoard USB boot with a sniffer: fixing omap_loader on modern PCs](https://www.downtowndougbrown.com/2025/11/debugging-beagleboard-usb-boot-with-a-sniffer-fixing-omap_loader-on-modern-pcs/)
* [2025-11-08, 21:34:00](https://tech.slashdot.org/story/25/11/08/0836254/bank-of-america-faces-lawsuit-over-alleged-unpaid-time-for-windows-bootup-logins-and-security-token-requests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bank of America Faces Lawsuit Over Alleged Unpaid Time for Windows Bootup, Logins, and Security Token Requests](https://tech.slashdot.org/story/25/11/08/0836254/bank-of-america-faces-lawsuit-over-alleged-unpaid-time-for-windows-bootup-logins-and-security-token-requests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 20:34:00](https://science.slashdot.org/story/25/11/08/0735217/chan-zuckerberg-initiative-shifts-bulk-of-philanthropy-going-all-in-on-ai-powered-biology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chan Zuckerberg Initiative Shifts Bulk of Philanthropy, &apos;Going All In on AI-Powered Biology&apos;](https://science.slashdot.org/story/25/11/08/0735217/chan-zuckerberg-initiative-shifts-bulk-of-philanthropy-going-all-in-on-ai-powered-biology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 19:57:52](https://news.ycombinator.com/item?id=45859471) - [Largest cargo sailboat completes first Atlantic crossing](https://www.marineinsight.com/shipping-news/worlds-largest-cargo-sailboat-completes-historic-first-atlantic-crossing/)
* [2025-11-08, 19:34:00](https://tech.slashdot.org/story/25/11/08/1759258/worlds-largest-cargo-sailboat-completes-historic-first-atlantic-crossing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s Largest Cargo Sailboat Completes Historic First Atlantic Crossing](https://tech.slashdot.org/story/25/11/08/1759258/worlds-largest-cargo-sailboat-completes-historic-first-atlantic-crossing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 19:29:44](https://news.ycombinator.com/item?id=45859243) - [Avería: The Average Font (2011)](http://iotic.com/averia/)
* [2025-11-08, 19:02:58](https://lobste.rs/s/ojxoor/gsoc_2025_reports_using_bubblewrap_add) - [GSOC 2025 Reports: Using bubblewrap to add sandboxing to NetBSD](https://blog.netbsd.org/tnf/entry/gsoc2025_bubblewrap_sandboxing)
* [2025-11-08, 18:49:47](https://news.ycombinator.com/item?id=45858945) - [WriterdeckOS](https://writerdeckos.com)
* [2025-11-08, 18:43:55](https://news.ycombinator.com/item?id=45858905) - [Marko – A declarative, HTML‑based language](https://markojs.com/)
* [2025-11-08, 18:34:00](https://tech.slashdot.org/story/25/11/08/0653232/bombshell-report-exposes-how-meta-relied-on-scam-ad-profits-to-fund-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bombshell Report Exposes How Meta Relied On Scam Ad Profits To Fund AI](https://tech.slashdot.org/story/25/11/08/0653232/bombshell-report-exposes-how-meta-relied-on-scam-ad-profits-to-fund-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 18:34:00](https://soylentnews.org/article.pl?sid=25/11/06/0735234&amp;from=rss) - [OpenAI Looking for Taxpayers to Bail Them Out If the Bubble Bursts](https://soylentnews.org/article.pl?sid=25/11/06/0735234&amp;from=rss)
* [2025-11-08, 17:34:00](https://tech.slashdot.org/story/25/11/08/0754249/japanese-volunteer-translators-quit-after-mozilla-begins-using-translation-bot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japanese Volunteer Translators Quit After Mozilla Begins Using Translation Bot](https://tech.slashdot.org/story/25/11/08/0754249/japanese-volunteer-translators-quit-after-mozilla-begins-using-translation-bot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 16:40:12](https://news.ycombinator.com/item?id=45857988) - [Opencloud – An alternative to Nextcloud written in Go](https://github.com/opencloud-eu/opencloud)
* [2025-11-08, 16:37:51](https://lobste.rs/s/sdc7ki/opencloud_alternative_nextcloud) - [opencloud - an alternative to nextcloud written in Go](https://github.com/opencloud-eu/opencloud)
* [2025-11-08, 16:34:00](https://tech.slashdot.org/story/25/11/08/0816223/ups-and-fedex-ground-dozens-of-md-11-aircraft-after-tuesdays-crash-in-kentucky?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UPS (and FedEx) Ground Dozens of MD-11 Aircraft After Tuesday&apos;s Crash in Kentucky](https://tech.slashdot.org/story/25/11/08/0816223/ups-and-fedex-ground-dozens-of-md-11-aircraft-after-tuesdays-crash-in-kentucky?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 16:25:41](https://news.ycombinator.com/item?id=45857836) - [Cloudflare scrubs Aisuru botnet from top domains list](https://krebsonsecurity.com/2025/11/cloudflare-scrubs-aisuru-botnet-from-top-domains-list/)
* [2025-11-08, 15:34:59](https://lobste.rs/s/ogyjwm/local_first_htmx) - [Local First HTMX](https://elijahm.com/posts/local_first_htmx/)
* [2025-11-08, 15:34:00](https://slashdot.org/story/25/11/08/0533205/stratospheric-ai-spending-by-four-wealthy-companies-reaches-360b-just-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Stratospheric&apos; AI Spending By Four Wealthy Companies Reaches $360B Just For Data Centers](https://slashdot.org/story/25/11/08/0533205/stratospheric-ai-spending-by-four-wealthy-companies-reaches-360b-just-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 15:12:30](https://lobste.rs/s/44dgd7/small_language_models_are_future_agentic) - [Small Language Models are the Future of Agentic AI](https://arxiv.org/pdf/2506.02153)
* [2025-11-08, 14:59:05](https://news.ycombinator.com/item?id=45857053) - [Ticker: Don&apos;t die of heart disease](https://myticker.com/)
* [2025-11-08, 14:58:03](https://news.ycombinator.com/item?id=45857045) - [An Algebraic Language for the Manipulation of Symbolic Expressions (1958) [pdf]](https://softwarepreservation.computerhistory.org/LISP/MIT/AIM-001.pdf)
* [2025-11-08, 14:18:22](https://news.ycombinator.com/item?id=45856804) - [Study identifies weaknesses in how AI systems are evaluated](https://www.oii.ox.ac.uk/news-events/study-identifies-weaknesses-in-how-ai-systems-are-evaluated/)
* [2025-11-08, 13:48:00](https://soylentnews.org/article.pl?sid=25/11/06/0723234&amp;from=rss) - [FuguIta 7.8 - OpenBSD-based Live System - Released!](https://soylentnews.org/article.pl?sid=25/11/06/0723234&amp;from=rss)
* [2025-11-08, 13:00:00](https://tech.slashdot.org/story/25/11/08/0241231/facebook-dating-is-a-surprise-hit-for-the-social-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Dating Is a Surprise Hit For the Social Network](https://tech.slashdot.org/story/25/11/08/0241231/facebook-dating-is-a-surprise-hit-for-the-social-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 11:27:34](https://lobste.rs/s/epolln/valdi_is_cross_platform_ui_framework) - [Valdi is a cross-platform UI framework that delivers native performance without sacrificing developer velocity](https://github.com/Snapchat/Valdi)
* [2025-11-08, 10:33:39](https://lobste.rs/s/wbyo8d/jelly_slider) - [Jelly Slider](https://docs.swmansion.com/TypeGPU/examples/#example=rendering--jelly-slider)
* [2025-11-08, 10:21:17](https://lobste.rs/s/zfoetk/profiling_tools_i_use_for_qemu_storage) - [Profiling tools I use for QEMU storage performance optimization](http://blog.vmsplice.net/2025/06/profiling-tools-i-use-for-qemu-storage.html)
* [2025-11-08, 10:00:00](https://science.slashdot.org/story/25/11/08/0232221/unesco-adopts-global-standards-on-wild-west-field-of-neurotechnology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Unesco Adopts Global Standards On &apos;Wild West&apos; Field of Neurotechnology](https://science.slashdot.org/story/25/11/08/0232221/unesco-adopts-global-standards-on-wild-west-field-of-neurotechnology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 09:06:00](https://soylentnews.org/article.pl?sid=25/11/06/0715239&amp;from=rss) - [Uncle Sam Wants to Scan Your Iris and Collect Your DNA, Citizen or Not](https://soylentnews.org/article.pl?sid=25/11/06/0715239&amp;from=rss)
* [2025-11-08, 07:29:35](https://news.ycombinator.com/item?id=45854862) - [Making Democracy Work: Fixing and Simplifying Egalitarian Paxos](https://arxiv.org/abs/2511.02743)
* [2025-11-08, 07:00:00](https://games.slashdot.org/story/25/11/08/0226233/lego-unveils-first-ever-star-trek-set?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lego Unveils First-Ever Star Trek Set](https://games.slashdot.org/story/25/11/08/0226233/lego-unveils-first-ever-star-trek-set?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 04:19:00](https://soylentnews.org/article.pl?sid=25/11/06/0710228&amp;from=rss) - [Study Concludes Cybersecurity Training Doesn&apos;t Work](https://soylentnews.org/article.pl?sid=25/11/06/0710228&amp;from=rss)
* [2025-11-08, 03:30:00](https://science.slashdot.org/story/25/11/08/0215248/the-first-new-subsea-habitat-in-40-years-is-about-to-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The First New Subsea Habitat In 40 Years Is About To Launch](https://science.slashdot.org/story/25/11/08/0215248/the-first-new-subsea-habitat-in-40-years-is-about-to-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 02:20:00](https://slashdot.org/story/25/11/08/0155228/vibe-coding-named-word-of-the-year-by-collins-dictionary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Vibe Coding&apos; Named Word of the Year By Collins Dictionary](https://slashdot.org/story/25/11/08/0155228/vibe-coding-named-word-of-the-year-by-collins-dictionary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 01:40:45](https://lobste.rs/s/1fa70r/bootc_for_workstation_use) - [Bootc for workstation use](https://lwn.net/SubscriberLink/1042708/90b68e222a964524/)
* [2025-11-08, 00:14:50](https://news.ycombinator.com/item?id=45852854) - [Valdi – A cross-platform UI framework that delivers native performance](https://github.com/Snapchat/Valdi)
* [2025-11-07, 23:35:00](https://soylentnews.org/article.pl?sid=25/11/06/0317205&amp;from=rss) - [Developer Warns Users That Fake Download Site is Hosting Windows 11 Upgrade Bypass Tool](https://soylentnews.org/article.pl?sid=25/11/06/0317205&amp;from=rss)
* [2025-11-07, 23:04:39](https://news.ycombinator.com/item?id=45852328) - [Why is Zig so cool?](https://nilostolte.github.io/tech/articles/ZigCool.html)
* [2025-11-07, 21:13:54](https://lobste.rs/s/ghkvqm/challenges_benefits_upgrading_sea) - [Challenges and Benefits of Upgrading Sea of Thieves From C++14 to C++20](https://www.youtube.com/watch?v=Nm9-xKsZoNI)
* [2025-11-07, 20:01:09](https://news.ycombinator.com/item?id=45850382) - [How did I get here?](https://how-did-i-get-here.net/)
* [2025-11-07, 19:35:18](https://lobste.rs/s/bmen3e/from_milliamperes_microamperes_lessons) - [From Milliamperes to Microamperes: Lessons in Low-Power Gadgetmaking](https://www.crowdsupply.com/teardown/portland-2025/long-talk/from-milliamperes-to-microamperes-lessons-in-low-power-gadgetmaking)
* [2025-11-07, 19:27:56](https://lobste.rs/s/9p9dup/why_nextcloud_feels_slow_use) - [Why Nextcloud feels slow to use](https://ounapuu.ee/posts/2025/11/03/nextcloud-slow/)
* [2025-11-07, 19:15:34](https://lobste.rs/s/scwreg/ffmpeg_assembly_language_lessons) - [FFmpeg Assembly Language Lessons](https://github.com/FFmpeg/asm-lessons)
* [2025-11-07, 19:10:22](https://lobste.rs/s/pexrmo/state_rust_dependency_ecosystem) - [The state of the Rust dependency ecosystem](https://00f.net/2025/10/17/state-of-the-rust-ecosystem/)
* [2025-11-07, 18:53:00](https://soylentnews.org/article.pl?sid=25/11/06/0311253&amp;from=rss) - [LM8560, the Eternal Chip From the 1980 Years](https://soylentnews.org/article.pl?sid=25/11/06/0311253&amp;from=rss)
* [2025-11-07, 16:11:29](https://lobste.rs/s/ku3ul2/from_web_developer_database_developer_10) - [From web developer to database developer in 10 years](https://notes.eatonphil.com/2025-02-15-from-web-developer-to-database-developer-in-10-years.html)
* [2025-11-07, 14:11:59](https://lobste.rs/s/syxfbv/problems_with_move_semantics_c) - [Problems With Move Semantics in C++](https://youtu.be/Klq-sNxuP2g)
* [2025-11-07, 14:09:00](https://soylentnews.org/article.pl?sid=25/11/06/0257203&amp;from=rss) - [Ubuntu Certification Now Available Through Canonical Academy](https://soylentnews.org/article.pl?sid=25/11/06/0257203&amp;from=rss)
* [2025-11-07, 12:26:05](https://lobste.rs/s/swncgw/why_i_don_t_test_different_designs_at_same) - [Why I don’t test different designs at the same time](https://adamsilver.io/blog/why-i-dont-test-different-designs-at-the-same-time/)
* [2025-11-07, 11:20:14](https://lobste.rs/s/fikz3p/typst_unlit_write_literate_haskell) - [Typst-Unlit: Write literate Haskell programs in Typst](https://cdn.oppi.li/typst-unlit.pdf)
* [2025-11-07, 10:59:03](https://lobste.rs/s/mkquz5/error_codes_for_control_flow) - [Error Codes for Control Flow](https://matklad.github.io/2025/11/06/error-codes-for-control-flow.html)
* [2025-11-07, 09:28:00](https://soylentnews.org/article.pl?sid=25/11/05/1549218&amp;from=rss) - [Australian Law To Require EV Cars To Be Noisy For Blind People](https://soylentnews.org/article.pl?sid=25/11/05/1549218&amp;from=rss)
* [2025-11-07, 09:19:01](https://lobste.rs/s/i0rf97/introduction_incusos) - [Introduction to IncusOS](https://linuxcontainers.org/incus-os/)
* [2025-11-07, 04:46:00](https://soylentnews.org/article.pl?sid=25/11/05/1540235&amp;from=rss) - [7 Basic Science Discoveries That Changed the World](https://soylentnews.org/article.pl?sid=25/11/05/1540235&amp;from=rss)
* [2025-11-07, 00:01:00](https://soylentnews.org/article.pl?sid=25/11/06/0331241&amp;from=rss) - [GNOME Mutter Now \&quot;Completely Drops the Whole X11 Backend\&quot;](https://soylentnews.org/article.pl?sid=25/11/06/0331241&amp;from=rss)
* [2025-11-06, 22:47:52](https://lobste.rs/s/l5nsnw/unix_v4_tape_found_at_university_utah) - [Unix V4 tape found at The University of Utah](https://discuss.systems/@ricci/115504720054699983)
* [2025-11-06, 19:17:00](https://soylentnews.org/article.pl?sid=25/11/05/1530214&amp;from=rss) - [Tiny Electric Motor is as Powerful as Four Tesla Motors Put Together](https://soylentnews.org/article.pl?sid=25/11/05/1530214&amp;from=rss)
* [2025-11-06, 14:31:00](https://soylentnews.org/article.pl?sid=25/11/05/1242201&amp;from=rss) - [Canada Says Hacktivists Breached Water and Energy Facilities](https://soylentnews.org/article.pl?sid=25/11/05/1242201&amp;from=rss)
* [2025-11-06, 09:42:00](https://soylentnews.org/article.pl?sid=25/11/05/1236251&amp;from=rss) - [What Happened to Running What You Wanted on Your Own Machine?](https://soylentnews.org/article.pl?sid=25/11/05/1236251&amp;from=rss)
* [2025-11-06, 05:00:00](https://soylentnews.org/article.pl?sid=25/11/04/0243254&amp;from=rss) - [World&apos;s Largest Wind-Powered Cargo Ship Takes to the Seas](https://soylentnews.org/article.pl?sid=25/11/04/0243254&amp;from=rss)
* [2025-11-06, 00:14:00](https://soylentnews.org/article.pl?sid=25/11/04/0228209&amp;from=rss) - [Powered by Mushrooms, Living Computers Are on the Rise](https://soylentnews.org/article.pl?sid=25/11/04/0228209&amp;from=rss)
* [2025-11-05, 19:28:00](https://soylentnews.org/article.pl?sid=25/11/04/0220218&amp;from=rss) - [Debian Introduces Rust Toolchain Dependencies to Apt](https://soylentnews.org/article.pl?sid=25/11/04/0220218&amp;from=rss)
* [2025-11-05, 14:41:00](https://soylentnews.org/article.pl?sid=25/11/04/0214241&amp;from=rss) - [We&apos;re About to Find Many More Interstellar Interlopers—Here&apos;s How to Visit One](https://soylentnews.org/article.pl?sid=25/11/04/0214241&amp;from=rss)
* [2025-11-05, 09:55:00](https://soylentnews.org/article.pl?sid=25/11/04/025235&amp;from=rss) - [Bats Eat the Birds They Pluck From the Sky While on the Wing](https://soylentnews.org/article.pl?sid=25/11/04/025235&amp;from=rss)
* [2025-11-05, 05:45:22](https://news.ycombinator.com/item?id=45819635) - [GPS &apos;kill&apos; switch allows state police cruisers to go dark and disable tracking](https://www.boston25news.com/news/local/25-investigates-gps-kill-switch-allows-msp-cruisers-go-dark-disable-tracking/5OKMJEUJDNAVXPLN4WKFADNPLM/)
* [2025-11-05, 05:06:00](https://soylentnews.org/article.pl?sid=25/11/04/0147220&amp;from=rss) - [SUSE to Include Agentic AI in SLE 16](https://soylentnews.org/article.pl?sid=25/11/04/0147220&amp;from=rss)
* [2025-11-05, 00:22:00](https://soylentnews.org/article.pl?sid=25/11/03/0150212&amp;from=rss) - [Company Remote Kills Robo Vacuum](https://soylentnews.org/article.pl?sid=25/11/03/0150212&amp;from=rss)
