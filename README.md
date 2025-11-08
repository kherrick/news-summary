# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [GSOC 2025 Reports: Using bubblewrap to add sandboxing to NetBSD](https://blog.netbsd.org/tnf/entry/gsoc2025_bubblewrap_sandboxing) - Highlights the integration of bubblewrap to enhance sandboxing capabilities on NetBSD, showcasing efforts in secure computing.

* [opencloud - an alternative to nextcloud written in Go](https://github.com/opencloud-eu/opencloud) - This project proposes a Go-based alternative to Nextcloud that focuses on functionality and performance.

* [Small Language Models are the Future of Agentic AI](https://arxiv.org/pdf/2506.02153) - Explores the potential of small language models in building more efficient agentic AI systems.

* [Bootc for workstation use](https://lwn.net/SubscriberLink/1042708/90b68e222a964524/) - Provides insights into optimizing Bootc for workstation environments.

* [Valdi – A cross-platform UI framework that delivers native performance](https://github.com/Snapchat/Valdi) - Snapchat introduces a UI framework for high performance and efficient development processes.

## AI and Big Tech

* [Bombshell Report Exposes How Meta Relied On Scam Ad Profits To Fund AI](https://tech.slashdot.org/story/25/11/08/0653232/bombshell-report-exposes-how-meta-relied-on-scam-ad-profits-to-fund-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Investigates Meta's questionable funding tactics for AI innovation.

* [AI benchmarks are a bad joke – and LLM makers are the ones laughing](https://www.theregister.com/2025/11/07/measuring_ai_models_hampered_by/) - Critiques the reliability of AI benchmarks and the motivations behind them.

* [Cloudflare Scrubs Aisuru Botnet from Top Domains List](https://krebsonsecurity.com/2025/11/cloudflare-scrubs-aisuru-botnet-from-top-domains-list/) - Examines Cloudflare's successful counteraction against a pervasive botnet threat.

## Social and Cultural Developments

* [Mothers say chatbots encouraged their sons to kill themselves](https://www.bbc.com/news/articles/ce3xgwyywe4o) - A chilling investigation into the unintended consequences of chatbot interactions.

* [Driver livestreams on TikTok as she apparently hits and kills man in Chicago](https://www.theguardian.com/us-news/2025/nov/08/tiktok-live-stream-fatal-crash-chicago) - Raises concerns over social media's role in encouraging reckless behaviors for online attention.

* [Denmark's Government Aims To Ban Access To Social Media For Children Under 15](https://tech.slashdot.org/story/25/11/07/2223206/denmarks-government-aims-to-ban-access-to-social-media-for-children-under-15?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Policy proposal to limit minors’ exposure to social media amidst safety and mental health concerns.

## Historical and Scientific Discoveries

* [52 Year old data tape could contain Unix history](https://www.theregister.com/2025/11/07/unix_fourth_edition_tape_rediscovered/) - An old tape containing Unix’s 4th edition potentially reveals rare insights into computing history.

* [7 Basic Science Discoveries That Changed the World](https://soylentnews.org/article.pl?sid=25/11/05/1540235&amp;from=rss) - A tribute to groundbreaking scientific discoveries that redefined our understanding of the world.

* [James D. Watson, Co-Discoverer of the Structure of DNA, Is Dead At 97](https://science.slashdot.org/story/25/11/07/2314257/james-d-watson-co-discoverer-of-the-structure-of-dna-is-dead-at-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Commemorates the life of James D. Watson, co-discoverer of DNA’s structure.

## Industry and Consumer Trends

* [Japanese Volunteer Translators Quit After Mozilla Begins Using Translation Bot](https://tech.slashdot.org/story/25/11/08/0754249/japanese-volunteer-translators-quit-after-mozilla-begins-using-translation-bot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Reports on Mozilla’s transition to translation bots leading to a revolt among volunteers.

* [Uncle Sam Wants to Scan Your Iris and Collect Your DNA, Citizen or Not](https://soylentnews.org/article.pl?sid=25/11/06/0715239&amp;from=rss) - Reflects on controversial government surveillance and biometric collection policies.

* [Immutable Software Deploys Using ZFS Jails on FreeBSD](https://conradresearch.com/articles/immutable-software-deploy-zfs-jails) - Details the shift towards more secure and immutable software deployment methods.

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

* [2025-11-08, 19:02:58](https://lobste.rs/s/ojxoor/gsoc_2025_reports_using_bubblewrap_add) - [GSOC 2025 Reports: Using bubblewrap to add sandboxing to NetBSD](https://blog.netbsd.org/tnf/entry/gsoc2025_bubblewrap_sandboxing)
* [2025-11-08, 18:53:01](https://news.ycombinator.com/item?id=45858967) - [The Medici Method](https://letter.palladiummag.com/p/early-article-the-medici-method)
* [2025-11-08, 18:34:00](https://tech.slashdot.org/story/25/11/08/0653232/bombshell-report-exposes-how-meta-relied-on-scam-ad-profits-to-fund-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bombshell Report Exposes How Meta Relied On Scam Ad Profits To Fund AI](https://tech.slashdot.org/story/25/11/08/0653232/bombshell-report-exposes-how-meta-relied-on-scam-ad-profits-to-fund-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 18:34:00](https://soylentnews.org/article.pl?sid=25/11/06/0735234&amp;from=rss) - [OpenAI Looking for Taxpayers to Bail Them Out If the Bubble Bursts](https://soylentnews.org/article.pl?sid=25/11/06/0735234&amp;from=rss)
* [2025-11-08, 17:34:39](https://news.ycombinator.com/item?id=45858404) - [Driver livestreams on TikTok as she apparently hits and kills man in Chicago](https://www.theguardian.com/us-news/2025/nov/08/tiktok-live-stream-fatal-crash-chicago)
* [2025-11-08, 17:34:00](https://tech.slashdot.org/story/25/11/08/0754249/japanese-volunteer-translators-quit-after-mozilla-begins-using-translation-bot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japanese Volunteer Translators Quit After Mozilla Begins Using Translation Bot](https://tech.slashdot.org/story/25/11/08/0754249/japanese-volunteer-translators-quit-after-mozilla-begins-using-translation-bot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 16:37:51](https://lobste.rs/s/sdc7ki/opencloud_alternative_nextcloud) - [opencloud - an alternative to nextcloud written in Go](https://github.com/opencloud-eu/opencloud)
* [2025-11-08, 16:34:00](https://tech.slashdot.org/story/25/11/08/0816223/ups-and-fedex-ground-dozens-of-md-11-aircraft-after-tuesdays-crash-in-kentucky?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UPS (and FedEx) Ground Dozens of MD-11 Aircraft After Tuesday&apos;s Crash in Kentucky](https://tech.slashdot.org/story/25/11/08/0816223/ups-and-fedex-ground-dozens-of-md-11-aircraft-after-tuesdays-crash-in-kentucky?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 16:30:32](https://news.ycombinator.com/item?id=45857890) - [Mothers say chatbots encouraged their sons to kill themselves](https://www.bbc.com/news/articles/ce3xgwyywe4o)
* [2025-11-08, 16:25:41](https://news.ycombinator.com/item?id=45857836) - [Cloudflare Scrubs Aisuru Botnet from Top Domains List](https://krebsonsecurity.com/2025/11/cloudflare-scrubs-aisuru-botnet-from-top-domains-list/)
* [2025-11-08, 16:12:14](https://news.ycombinator.com/item?id=45857695) - [52 Year old data tape could contain Unix history](https://www.theregister.com/2025/11/07/unix_fourth_edition_tape_rediscovered/)
* [2025-11-08, 15:34:59](https://lobste.rs/s/ogyjwm/local_first_htmx) - [Local First HTMX](https://elijahm.com/posts/local_first_htmx/)
* [2025-11-08, 15:34:00](https://slashdot.org/story/25/11/08/0533205/stratospheric-ai-spending-by-four-wealthy-companies-reaches-360b-just-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Stratospheric&apos; AI Spending By Four Wealthy Companies Reaches $360B Just For Data Centers](https://slashdot.org/story/25/11/08/0533205/stratospheric-ai-spending-by-four-wealthy-companies-reaches-360b-just-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 15:12:30](https://lobste.rs/s/44dgd7/small_language_models_are_future_agentic) - [Small Language Models are the Future of Agentic AI](https://arxiv.org/pdf/2506.02153)
* [2025-11-08, 14:59:05](https://news.ycombinator.com/item?id=45857053) - [Ticker: Don&apos;t Die of Heart Disease](https://myticker.com/)
* [2025-11-08, 14:58:03](https://news.ycombinator.com/item?id=45857045) - [An Algebraic Language for the Manipulation of Symbolic Expressions (1958) [pdf]](https://softwarepreservation.computerhistory.org/LISP/MIT/AIM-001.pdf)
* [2025-11-08, 14:50:51](https://news.ycombinator.com/item?id=45856987) - [Btop: A better modern alternative of htop with a gamified interface](https://github.com/aristocratos/btop)
* [2025-11-08, 14:18:22](https://news.ycombinator.com/item?id=45856804) - [AI benchmarks are a bad joke – and LLM makers are the ones laughing](https://www.theregister.com/2025/11/07/measuring_ai_models_hampered_by/)
* [2025-11-08, 13:48:00](https://soylentnews.org/article.pl?sid=25/11/06/0723234&amp;from=rss) - [FuguIta 7.8 - OpenBSD-based Live System - Released!](https://soylentnews.org/article.pl?sid=25/11/06/0723234&amp;from=rss)
* [2025-11-08, 13:00:00](https://tech.slashdot.org/story/25/11/08/0241231/facebook-dating-is-a-surprise-hit-for-the-social-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Dating Is a Surprise Hit For the Social Network](https://tech.slashdot.org/story/25/11/08/0241231/facebook-dating-is-a-surprise-hit-for-the-social-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 12:00:50](https://news.ycombinator.com/item?id=45856069) - [Cekura (YC F24) Is Hiring](https://news.ycombinator.com/item?id=45856069)
* [2025-11-08, 11:27:56](https://news.ycombinator.com/item?id=45855933) - [My friends and I accidentally faked the Ryzen 7 9700X3D leaks](https://old.reddit.com/r/pcmasterrace/comments/1orc6jl/my_friends_and_i_accidentally_faked_the_ryzen_7/)
* [2025-11-08, 11:27:34](https://lobste.rs/s/epolln/valdi_is_cross_platform_ui_framework) - [Valdi is a cross-platform UI framework that delivers native performance without sacrificing developer velocity](https://github.com/Snapchat/Valdi)
* [2025-11-08, 11:24:43](https://news.ycombinator.com/item?id=45855918) - [Always Be Ready to Leave (Even If You Never Do)](https://andreacanton.dev/posts/2025-11-08-always-ready-to-leave/)
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
* [2025-11-08, 01:40:00](https://science.slashdot.org/story/25/11/07/2314257/james-d-watson-co-discoverer-of-the-structure-of-dna-is-dead-at-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [James D. Watson, Co-Discoverer of the Structure of DNA, Is Dead At 97](https://science.slashdot.org/story/25/11/07/2314257/james-d-watson-co-discoverer-of-the-structure-of-dna-is-dead-at-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 01:00:00](https://games.slashdot.org/story/25/11/07/2319237/nintendo-has-too-many-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Nintendo Has Too Many Apps&apos;](https://games.slashdot.org/story/25/11/07/2319237/nintendo-has-too-many-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 00:37:36](https://news.ycombinator.com/item?id=45852974) - [Mullvad: Shutting down our search proxy Leta](https://mullvad.net/en/blog/shutting-down-our-search-proxy-leta)
* [2025-11-08, 00:21:45](https://news.ycombinator.com/item?id=45852895) - [Immutable Software Deploys Using ZFS Jails on FreeBSD](https://conradresearch.com/articles/immutable-software-deploy-zfs-jails)
* [2025-11-08, 00:20:00](https://news.slashdot.org/story/25/11/07/238257/you-cant-leave-unless-you-buy-something?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [You Can&apos;t Leave Unless You Buy Something](https://news.slashdot.org/story/25/11/07/238257/you-cant-leave-unless-you-buy-something?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 00:14:50](https://news.ycombinator.com/item?id=45852854) - [Valdi – A cross-platform UI framework that delivers native performance](https://github.com/Snapchat/Valdi)
* [2025-11-08, 00:00:27](https://news.ycombinator.com/item?id=45852751) - [Cerebras Code now supports GLM 4.6 at 1000 tokens/sec](https://www.cerebras.ai/code)
* [2025-11-07, 23:40:00](https://yro.slashdot.org/story/25/11/07/232253/texas-sues-roblox-for-allegedly-failing-to-protect-children-on-its-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Texas Sues Roblox For Allegedly Failing To Protect Children On Its Platform](https://yro.slashdot.org/story/25/11/07/232253/texas-sues-roblox-for-allegedly-failing-to-protect-children-on-its-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 23:35:00](https://soylentnews.org/article.pl?sid=25/11/06/0317205&amp;from=rss) - [Developer Warns Users That Fake Download Site is Hosting Windows 11 Upgrade Bypass Tool](https://soylentnews.org/article.pl?sid=25/11/06/0317205&amp;from=rss)
* [2025-11-07, 23:04:39](https://news.ycombinator.com/item?id=45852328) - [Why is Zig so cool?](https://nilostolte.github.io/tech/articles/ZigCool.html)
* [2025-11-07, 23:02:00](https://tech.slashdot.org/story/25/11/07/2256226/gemini-starts-rolling-out-on-android-auto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gemini Starts Rolling Out On Android Auto](https://tech.slashdot.org/story/25/11/07/2256226/gemini-starts-rolling-out-on-android-auto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 22:25:00](https://tech.slashdot.org/story/25/11/07/2223206/denmarks-government-aims-to-ban-access-to-social-media-for-children-under-15?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Denmark&apos;s Government Aims To Ban Access To Social Media For Children Under 15](https://tech.slashdot.org/story/25/11/07/2223206/denmarks-government-aims-to-ban-access-to-social-media-for-children-under-15?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 21:13:54](https://lobste.rs/s/ghkvqm/challenges_benefits_upgrading_sea) - [Challenges and Benefits of Upgrading Sea of Thieves From C++14 to C++20](https://www.youtube.com/watch?v=Nm9-xKsZoNI)
* [2025-11-07, 20:01:09](https://news.ycombinator.com/item?id=45850382) - [How did I get here?](https://how-did-i-get-here.net/)
* [2025-11-07, 19:35:18](https://lobste.rs/s/bmen3e/from_milliamperes_microamperes_lessons) - [From Milliamperes to Microamperes: Lessons in Low-Power Gadgetmaking](https://www.crowdsupply.com/teardown/portland-2025/long-talk/from-milliamperes-to-microamperes-lessons-in-low-power-gadgetmaking)
* [2025-11-07, 19:27:56](https://lobste.rs/s/9p9dup/why_nextcloud_feels_slow_use) - [Why Nextcloud feels slow to use](https://ounapuu.ee/posts/2025/11/03/nextcloud-slow/)
* [2025-11-07, 19:15:34](https://lobste.rs/s/scwreg/ffmpeg_assembly_language_lessons) - [FFmpeg Assembly Language Lessons](https://github.com/FFmpeg/asm-lessons)
* [2025-11-07, 19:10:22](https://lobste.rs/s/pexrmo/state_rust_dependency_ecosystem) - [The state of the Rust dependency ecosystem](https://00f.net/2025/10/17/state-of-the-rust-ecosystem/)
* [2025-11-07, 18:53:00](https://soylentnews.org/article.pl?sid=25/11/06/0311253&amp;from=rss) - [LM8560, the Eternal Chip From the 1980 Years](https://soylentnews.org/article.pl?sid=25/11/06/0311253&amp;from=rss)
* [2025-11-07, 18:27:36](https://news.ycombinator.com/item?id=45849342) - [Myna: Monospace typeface designed for symbol-heavy programming languages](https://github.com/sayyadirfanali/Myna)
* [2025-11-07, 17:48:24](https://lobste.rs/s/bxhftq/weird_parts_position_sticky) - [The Weird Parts of position: sticky](https://frontendmasters.com/blog/the-weird-parts-of-position-sticky/)
* [2025-11-07, 16:11:29](https://lobste.rs/s/ku3ul2/from_web_developer_database_developer_10) - [From web developer to database developer in 10 years](https://notes.eatonphil.com/2025-02-15-from-web-developer-to-database-developer-in-10-years.html)
* [2025-11-07, 14:28:21](https://lobste.rs/s/08srpl/announcing_magika_1_0_now_faster_smarter) - [Announcing Magika 1.0: now faster, smarter, and rebuilt in Rust](https://opensource.googleblog.com/2025/11/announcing-magika-10-now-faster-smarter.html)
* [2025-11-07, 14:11:59](https://lobste.rs/s/syxfbv/problems_with_move_semantics_c) - [Problems With Move Semantics in C++](https://youtu.be/Klq-sNxuP2g)
* [2025-11-07, 14:09:00](https://soylentnews.org/article.pl?sid=25/11/06/0257203&amp;from=rss) - [Ubuntu Certification Now Available Through Canonical Academy](https://soylentnews.org/article.pl?sid=25/11/06/0257203&amp;from=rss)
* [2025-11-07, 14:05:49](https://news.ycombinator.com/item?id=45846517) - [Why I love OCaml (2023)](https://mccd.space/posts/ocaml-the-worlds-best/)
* [2025-11-07, 14:05:14](https://lobste.rs/s/aow9dx/slow_software_for_burning_world) - [Slow Software for a Burning World](https://bonfirenetworks.org/posts/slow-software-for-a-burning-world/)
* [2025-11-07, 12:26:05](https://lobste.rs/s/swncgw/why_i_don_t_test_different_designs_at_same) - [Why I don’t test different designs at the same time](https://adamsilver.io/blog/why-i-dont-test-different-designs-at-the-same-time/)
* [2025-11-07, 11:20:14](https://lobste.rs/s/fikz3p/typst_unlit_write_literate_haskell) - [Typst-Unlit: Write literate Haskell programs in Typst](https://cdn.oppi.li/typst-unlit.pdf)
* [2025-11-07, 10:59:03](https://lobste.rs/s/mkquz5/error_codes_for_control_flow) - [Error Codes for Control Flow](https://matklad.github.io/2025/11/06/error-codes-for-control-flow.html)
* [2025-11-07, 09:57:04](https://lobste.rs/s/eghbhu/linking_shrinking_rust_static_libraries) - [Linking and shrinking Rust static libraries: a tale of fire](https://centricular.com/devlog/2025-11/dragonfire/)
* [2025-11-07, 09:28:00](https://soylentnews.org/article.pl?sid=25/11/05/1549218&amp;from=rss) - [Australian Law To Require EV Cars To Be Noisy For Blind People](https://soylentnews.org/article.pl?sid=25/11/05/1549218&amp;from=rss)
* [2025-11-07, 09:19:01](https://lobste.rs/s/i0rf97/introduction_incusos) - [Introduction to IncusOS](https://linuxcontainers.org/incus-os/)
* [2025-11-07, 09:02:03](https://lobste.rs/s/jrg7nx/ai_s_70_problem) - [AI&apos;s 70% Problem](https://zed.dev/blog/ai-70-problem-addy-osmani)
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
* [2025-11-05, 05:06:00](https://soylentnews.org/article.pl?sid=25/11/04/0147220&amp;from=rss) - [SUSE to Include Agentic AI in SLE 16](https://soylentnews.org/article.pl?sid=25/11/04/0147220&amp;from=rss)
* [2025-11-05, 00:22:00](https://soylentnews.org/article.pl?sid=25/11/03/0150212&amp;from=rss) - [Company Remote Kills Robo Vacuum](https://soylentnews.org/article.pl?sid=25/11/03/0150212&amp;from=rss)
* [2025-11-04, 19:36:00](https://soylentnews.org/article.pl?sid=25/11/03/0140258&amp;from=rss) - [Matrix Collapses: Mathematics Proves the Universe Cannot be a Computer Simulation](https://soylentnews.org/article.pl?sid=25/11/03/0140258&amp;from=rss)
* [2025-11-04, 14:52:00](https://soylentnews.org/article.pl?sid=25/11/03/0135217&amp;from=rss) - [Las Vegas Police Debut the World&apos;s First Tesla Cybertruck Patrol Fleet](https://soylentnews.org/article.pl?sid=25/11/03/0135217&amp;from=rss)
* [2025-11-04, 11:33:31](https://news.ycombinator.com/item?id=45809782) - [Computational Complexity of Air Travel Planning (2003) [pdf]](http://www.ai.mit.edu/courses/6.034f/psets/ps1/airtravel.pdf)
* [2025-11-04, 10:08:00](https://soylentnews.org/article.pl?sid=25/11/02/2015201&amp;from=rss) - [Tesla&apos;s ‘Robotaxis&apos; Keep Crashing-Even With Human ‘Safety Monitors&apos; Onboard](https://soylentnews.org/article.pl?sid=25/11/02/2015201&amp;from=rss)
* [2025-11-04, 07:22:46](https://news.ycombinator.com/item?id=45808288) - [Reverse engineering a neural network&apos;s clever solution to binary addition (2023)](https://cprimozic.net/blog/reverse-engineering-a-small-neural-network/)
* [2025-11-04, 05:23:00](https://soylentnews.org/article.pl?sid=25/11/02/2011253&amp;from=rss) - [Once Again, Chat Control Flails After Strong Public Pressure](https://soylentnews.org/article.pl?sid=25/11/02/2011253&amp;from=rss)
* [2025-11-04, 00:39:00](https://soylentnews.org/article.pl?sid=25/11/01/2010247&amp;from=rss) - [Cyber Exec with Lavish Lifestyle Charged with Selling Secrets to Russia](https://soylentnews.org/article.pl?sid=25/11/01/2010247&amp;from=rss)
