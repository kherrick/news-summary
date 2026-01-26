# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Innovations and Impacts

* [Google Discover Replaces News Headlines With Sometimes Inaccurate AI-Generated Alternatives](https://news.slashdot.org/story/26/01/26/001230/google-discover-replaces-news-headlines-with-sometimes-inaccurate-ai-generated-alternatives?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Microsoft suspects some PCs might not boot after Windows 11 January 2026 Update](https://www.windowslatest.com/2026/01/25/microsoft-suspects-some-pcs-might-not-boot-after-windows-11-january-2026-update-kb5074109/)

* [The Android 'NexPhone': Linux on Demand, Dual-Boots Into Windows 11 - and Transforms Into a Workstation](https://mobile.slashdot.org/story/26/01/25/060240/the-android-nexphone-linux-on-demand-dual-boots-into-windows-11---and-transforms-into-a-workstation?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## AI and Ethical Challenges

* [UK MPs Call for AI Stress Testing in Financial Services](https://soylentnews.org/article.pl?sid=26/01/25/0429246&from=rss)

* [The Risks of AI in Schools Outweigh the Benefits, Report Says](https://news.slashdot.org/story/26/01/25/0422212/the-risks-of-ai-in-schools-outweigh-the-benefits-report-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AI tribalism](https://nolanlawson.com/2026/01/24/ai-tribalism/)

## Emerging Tools and Platforms

* [zerobrew is a Rust-based, 5-20x faster drop-in Homebrew alternative](https://github.com/lucasgelfond/zerobrew)

* [sysp: Systems Lisp compiling to C with homoiconic macros, refcounted memory, Hindley-Milner type inference](https://github.com/karans4/sysp)

* [Show HN: Netfence – Like Envoy for eBPF Filters](https://github.com/danthegoodman1/netfence)

## Scientific Discoveries

* [Scientists identify brain waves that define the limits of 'you'](https://www.sciencealert.com/scientists-identify-brain-waves-that-define-the-limits-of-you)

* [Gasoline Out of Thin Air? It's a Reality!](https://hardware.slashdot.org/story/26/01/25/2153246/gasoline-out-of-thin-air-its-a-reality?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Cows Use Tools](https://soylentnews.org/article.pl?sid=26/01/21/0150257&from=rss)

## Historical and Cultural Insights

* [Ancient 'Mosaic' Fossils Found in Morocco Challenge the Timeline of Human Evolution](https://soylentnews.org/article.pl?sid=26/01/23/1016236&from=rss)

* [France Records More Deaths Than Births for First Time Since End of Second World War](https://soylentnews.org/article.pl?sid=26/01/21/0141201&from=rss)

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

* [2026-01-26, 03:26:00](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss) - [UK MPs Call for AI Stress Testing in Financial Services](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss)
* [2026-01-26, 03:04:07](https://news.ycombinator.com/item?id=46761370) - [Tech CEOs attend Amazon-funded \&quot;Melania\&quot; screening at White House](https://www.hollywoodreporter.com/movies/movie-news/white-house-vip-melania-screening-mike-tyson-tim-cook-1236484037/)
* [2026-01-26, 02:15:52](https://news.ycombinator.com/item?id=46761061) - [Microsoft suspects some PCs might not boot after Windows 11 January 2026 Update](https://www.windowslatest.com/2026/01/25/microsoft-suspects-some-pcs-might-not-boot-after-windows-11-january-2026-update-kb5074109/)
* [2026-01-26, 02:04:00](https://bsd.slashdot.org/story/26/01/26/0135254/kdes-plasma-login-manager-stops-supporting-freebsd---because-systemd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE&apos;s &apos;Plasma Login Manager&apos; Stops Supporting FreeBSD - Because Systemd](https://bsd.slashdot.org/story/26/01/26/0135254/kdes-plasma-login-manager-stops-supporting-freebsd---because-systemd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 01:43:12](https://lobste.rs/s/ue0bau/zerobrew_is_rust_based_5_20x_faster_drop) - [zerobrew is a Rust-based, 5-20x faster drop-in Homebrew alternative](https://github.com/lucasgelfond/zerobrew)
* [2026-01-26, 01:23:10](https://lobste.rs/s/d4y8rq/sysp_systems_lisp_compiling_c_with) - [sysp: Systems Lisp compiling to C with homoiconic macros, refcounted memory, Hindley-Milner type inference](https://github.com/karans4/sysp)
* [2026-01-26, 01:04:00](https://hardware.slashdot.org/story/26/01/26/0035209/washington-state-may-mandate-firearm-blueprint-detection-algorithms-for-3d-printers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Washington State May Mandate &apos;Firearm Blueprint Detection Algorithms&apos; For 3D Printers](https://hardware.slashdot.org/story/26/01/26/0035209/washington-state-may-mandate-firearm-blueprint-detection-algorithms-for-3d-printers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 00:44:14](https://lobste.rs/s/xsm4pn/testing_exceptions_caches) - [Testing: exceptions and caches](https://nedbatchelder.com/blog/202601/testing_exceptions_and_caches)
* [2026-01-26, 00:27:41](https://news.ycombinator.com/item?id=46760237) - [Clawdbot - open source personal AI assistant](https://github.com/clawdbot/clawdbot)
* [2026-01-26, 00:10:42](https://news.ycombinator.com/item?id=46760099) - [Scientists identify brain waves that define the limits of &apos;you&apos;](https://www.sciencealert.com/scientists-identify-brain-waves-that-define-the-limits-of-you)
* [2026-01-26, 00:04:00](https://news.slashdot.org/story/26/01/26/001230/google-discover-replaces-news-headlines-with-sometimes-inaccurate-ai-generated-alternatives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Discover Replaces News Headlines With Sometimes Inaccurate AI-Generated Alternatives](https://news.slashdot.org/story/26/01/26/001230/google-discover-replaces-news-headlines-with-sometimes-inaccurate-ai-generated-alternatives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 23:13:06](https://news.ycombinator.com/item?id=46759627) - [Show HN: FaceTime-style calls with an AI Companion (Live2D and long-term memory)](https://thebeni.ai/)
* [2026-01-25, 23:03:05](https://lobste.rs/s/uqfh4p/screeps_how_game_about_programming) - [Screeps: How a game about programming exposed thousands of players to remote code execution](https://outsidetheasylum.blog/screeps/)
* [2026-01-25, 23:01:06](https://news.ycombinator.com/item?id=46759520) - [Show HN: A small programming language where everything is pass-by-value](https://github.com/Jcparkyn/herd)
* [2026-01-25, 22:44:50](https://news.ycombinator.com/item?id=46759352) - [Case study: Creative math – How AI fakes proofs](https://tomaszmachnik.pl/case-study-math-en.html)
* [2026-01-25, 22:36:00](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss) - [Microsoft Gave FBI a Set of BitLocker Encryption Keys to Unlock Suspects’ Laptops](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss)
* [2026-01-25, 22:18:38](https://news.ycombinator.com/item?id=46759063) - [The future of software engineering is SRE](https://swizec.com/blog/the-future-of-software-engineering-is-sre/)
* [2026-01-25, 21:56:00](https://hardware.slashdot.org/story/26/01/25/2153246/gasoline-out-of-thin-air-its-a-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gasoline Out of Thin Air? It&apos;s a Reality!](https://hardware.slashdot.org/story/26/01/25/2153246/gasoline-out-of-thin-air-its-a-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 21:47:14](https://lobste.rs/s/xo4mfg/hand_crafting_domain_specific) - [Hand-Crafting Domain-Specific Compression with an LLM](https://engineering.nanit.com/hand-crafting-domain-specific-compression-with-an-llm-3c42f5c2b070)
* [2026-01-25, 21:39:24](https://lobste.rs/s/sbtjef/spreadsheets_vi_json) - [spreadsheets + vi + json](https://awalgarg.me/untitled_project)
* [2026-01-25, 21:27:11](https://news.ycombinator.com/item?id=46758450) - [The &apos;3.5% rule&apos;: How a small minority can change the world (2019)](https://www.bbc.com/future/article/20190513-it-only-takes-35-of-people-to-change-the-world)
* [2026-01-25, 20:39:25](https://news.ycombinator.com/item?id=46757944) - [Oneplus phone update introduces hardware anti-rollback](https://consumerrights.wiki/w/Oneplus_phone_update_introduces_hardware_anti-rollback)
* [2026-01-25, 19:51:45](https://lobste.rs/s/xmwgtx/how_think_about_gas_town) - [How to think about Gas Town](https://steveklabnik.com/writing/how-to-think-about-gas-town/)
* [2026-01-25, 19:36:00](https://news.slashdot.org/story/26/01/25/1930244/richard-stallman-critiques-ai-connected-cars-smartphones-and-drm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Richard Stallman Critiques AI, Connected Cars, Smartphones, and DRM](https://news.slashdot.org/story/26/01/25/1930244/richard-stallman-critiques-ai-connected-cars-smartphones-and-drm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 19:31:23](https://news.ycombinator.com/item?id=46757357) - [I was right about ATProto key management](https://notes.nora.codes/atproto-again/)
* [2026-01-25, 19:29:25](https://lobste.rs/s/5qylwg/i_was_right_about_atproto_key_management) - [I Was Right About ATProto Key Management](https://notes.nora.codes/atproto-again/)
* [2026-01-25, 19:12:50](https://news.ycombinator.com/item?id=46757162) - [Spanish track was fractured before high-speed train disaster, report finds](https://www.bbc.com/news/articles/c1m77dmxlvlo)
* [2026-01-25, 19:03:40](https://news.ycombinator.com/item?id=46757067) - [First, make me care](https://gwern.net/blog/2026/make-me-care)
* [2026-01-25, 18:06:26](https://news.ycombinator.com/item?id=46756427) - [Show HN: An interactive map of US lighthouses and navigational aids](https://www.lighthouses.app/)
* [2026-01-25, 17:59:43](https://lobste.rs/s/kqt13j/visitor_as_sum_type_2018) - [Visitor as a sum type (2018)](https://blog.ploeh.dk/2018/06/25/visitor-as-a-sum-type/)
* [2026-01-25, 17:53:00](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss) - [This May Be The Grossest Eye Pic Ever—but the Cause is What’s Truly Horrifying](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss)
* [2026-01-25, 17:48:30](https://lobste.rs/s/pnhbjw/allowlist_for_gitignore) - [Allowlist for .gitignore](https://blog.izissise.net/posts/gitignoreallowlist/)
* [2026-01-25, 17:36:19](https://news.ycombinator.com/item?id=46756117) - [ICE using Palantir tool that feeds on Medicaid data](https://www.eff.org/deeplinks/2026/01/report-ice-using-palantir-tool-feeds-medicaid-data)
* [2026-01-25, 17:34:00](https://tech.slashdot.org/story/26/01/24/1845236/us-congress-fails-to-repeal-kill-switch-for-cars-mandate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Congress Fails to Repeal &apos;Kill Switch&apos; for Cars Mandate](https://tech.slashdot.org/story/26/01/24/1845236/us-congress-fails-to-repeal-kill-switch-for-cars-mandate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 16:34:00](https://mobile.slashdot.org/story/26/01/25/060240/the-android-nexphone-linux-on-demand-dual-boots-into-windows-11---and-transforms-into-a-workstation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Android &apos;NexPhone&apos;: Linux on Demand, Dual-Boots Into Windows 11 - and Transforms Into a Workstation](https://mobile.slashdot.org/story/26/01/25/060240/the-android-nexphone-linux-on-demand-dual-boots-into-windows-11---and-transforms-into-a-workstation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 16:22:07](https://lobste.rs/s/4jiqup/software_patches_nixos_for_fun) - [Software patches in NixOS for fun and productivity](https://log.pfad.fr/2026/software-patching-in-nixos/)
* [2026-01-25, 16:00:16](https://lobste.rs/s/o3amdz/because_coordination_is_expensive) - [Because coordination is expensive](https://surfingcomplexity.blog/2026/01/24/because-coordination-is-expensive/)
* [2026-01-25, 15:51:03](https://news.ycombinator.com/item?id=46755115) - [Using PostgreSQL as a Dead Letter Queue for Event-Driven Systems](https://www.diljitpr.net/blog-post-postgresql-dlq)
* [2026-01-25, 15:34:51](https://news.ycombinator.com/item?id=46754944) - [A macOS app that blurs your screen when you slouch](https://github.com/tldev/posturr)
* [2026-01-25, 15:34:00](https://hardware.slashdot.org/story/26/01/24/0452209/the-case-against-small-modular-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Case Against Small Modular Nuclear Reactors](https://hardware.slashdot.org/story/26/01/24/0452209/the-case-against-small-modular-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 15:13:46](https://news.ycombinator.com/item?id=46754724) - [Show HN: Netfence – Like Envoy for eBPF Filters](https://github.com/danthegoodman1/netfence)
* [2026-01-25, 14:55:03](https://news.ycombinator.com/item?id=46754522) - [Bitwise conversion of doubles using only FP multiplication and addition (2020)](https://dougallj.wordpress.com/2020/05/10/bitwise-conversion-of-doubles-using-only-floating-point-multiplication-and-addition/)
* [2026-01-25, 14:20:01](https://lobste.rs/s/vzatmm/welcome_email_expiration_date) - [Welcome to the \&quot;Email Expiration Date\&quot; initiative](https://www.zerocarbon.email/)
* [2026-01-25, 13:55:53](https://lobste.rs/s/yryapx/indieweb_small_web) - [The IndieWeb and Small web](https://christiano.dev/post/indieweb_smallweb/)
* [2026-01-25, 13:02:00](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss) - [OpenAI Rolls Out Ads in ChatGPT as Expenses Skyrocket](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss)
* [2026-01-25, 12:54:53](https://news.ycombinator.com/item?id=46753708) - [Web-based image editor modeled after Deluxe Paint](https://github.com/steffest/DPaint-js)
* [2026-01-25, 12:50:35](https://lobste.rs/s/utenv0/is_it_worth_it) - [Is It Worth It?](https://griffin.com/blog/is-it-worth-it)
* [2026-01-25, 12:50:13](https://lobste.rs/s/wncdwu/cppstat_c_c_compiler_support_status) - [cppstat - C and C++ Compiler Support Status](https://cppstat.dev/)
* [2026-01-25, 12:34:00](https://news.slashdot.org/story/26/01/25/0422212/the-risks-of-ai-in-schools-outweigh-the-benefits-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Risks of AI in Schools Outweigh the Benefits, Report Says](https://news.slashdot.org/story/26/01/25/0422212/the-risks-of-ai-in-schools-outweigh-the-benefits-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 12:22:12](https://news.ycombinator.com/item?id=46753484) - [Doom has been ported to an earbud](https://doombuds.com)
* [2026-01-25, 11:56:42](https://news.ycombinator.com/item?id=46753301) - [Show HN: Bonsplit – Tabs and splits for native macOS apps](https://bonsplit.alasdairmonk.com)
* [2026-01-25, 11:38:53](https://lobste.rs/s/ylgyhu/lament_for_aperture_app_we_ll_never_get) - [A Lament For Aperture, The App We&apos;ll Never Get Over Losing](https://ikennd.ac/blog/2026/01/old-man-yells-at-modern-software-design/)
* [2026-01-25, 11:09:11](https://lobste.rs/s/xefxir/bouncy_ball_will_always_bounce_back) - [Bouncy Ball will always bounce back](https://filipfila.wordpress.com/2026/01/25/bouncy-ball-will-always-bounce-back/)
* [2026-01-25, 09:04:30](https://news.ycombinator.com/item?id=46752151) - [A flawed paper in management science has been cited more than 6k times](https://statmodeling.stat.columbia.edu/2026/01/22/aking/)
* [2026-01-25, 08:44:00](https://linux.slashdot.org/story/26/01/24/2332205/former-canonical-developer-advocate-warns-snap-store-isnt-safe-after-slow-responses-to-malware-reports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former Canonical Developer Advocate Warns Snap Store Isn&apos;t Safe After Slow Responses to Malware Reports](https://linux.slashdot.org/story/26/01/24/2332205/former-canonical-developer-advocate-warns-snap-store-isnt-safe-after-slow-responses-to-malware-reports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 08:30:00](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss) - [Major River Deltas Are Sinking Faster Than Sea-Level Rise](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss)
* [2026-01-25, 08:05:34](https://lobste.rs/s/zktaom/hands_on_with_two_apple_network_server) - [Hands-on with two Apple Network Server prototype ROMs](http://oldvcr.blogspot.com/2026/01/hands-on-with-two-apple-network-server.html)
* [2026-01-25, 06:56:57](https://lobste.rs/s/upkphl/introducing_kitty_cards) - [Introducing Kitty Cards](https://lmno.lol/alvaro/introducing-kitty-cards)
* [2026-01-25, 06:11:57](https://lobste.rs/s/7hxrjv/home_router_recommendations) - [Home router recommendations](https://lobste.rs/s/7hxrjv/home_router_recommendations)
* [2026-01-25, 05:34:00](https://news.slashdot.org/story/26/01/25/0043256/googles-ai-overviews-cite-youtube-for-health-queries-more-than-any-medical-sites-study-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s &apos;AI Overviews&apos; Cite YouTube For Health Queries More Than Any Medical Sites, Study Suggests](https://news.slashdot.org/story/26/01/25/0043256/googles-ai-overviews-cite-youtube-for-health-queries-more-than-any-medical-sites-study-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 04:46:41](https://lobste.rs/s/weixyl/value_things) - [The Value of Things](https://journal.stuffwithstuff.com/2026/01/24/the-value-of-things/)
* [2026-01-25, 03:38:00](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss) - [How Greenwashing Creates &apos;False Stability&apos; for Companies](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss)
* [2026-01-25, 02:34:00](https://it.slashdot.org/story/26/01/25/0131222/infotainment-ev-charger-exploits-earn-1m-at-pwn2own-automotive-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Infotainment, EV Charger Exploits Earn $1M at Pwn2Own Automotive 2026](https://it.slashdot.org/story/26/01/25/0131222/infotainment-ev-charger-exploits-earn-1m-at-pwn2own-automotive-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 23:34:00](https://it.slashdot.org/story/26/01/24/2146216/work-from-office-mandate-expect-top-talent-turnover-culture-rot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Work-From-Office Mandate? Expect Top Talent Turnover, Culture Rot](https://it.slashdot.org/story/26/01/24/2146216/work-from-office-mandate-expect-top-talent-turnover-culture-rot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 22:54:00](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss) - [Ancient “Mosaic” Fossils Found in Morocco Challenge the Timeline of Human Evolution](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss)
* [2026-01-24, 22:34:00](https://tech.slashdot.org/story/26/01/24/2223200/airlines-cancel-over-10000-us-flights-due-to-massive-winter-storm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airlines Cancel Over 10,000 US Flights Due To Massive Winter Storm](https://tech.slashdot.org/story/26/01/24/2223200/airlines-cancel-over-10000-us-flights-due-to-massive-winter-storm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 21:34:00](https://hardware.slashdot.org/story/26/01/24/1938220/cheap-green-tech-allows-faster-path-to-electrification-for-the-developing-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cheap Green Tech Allows Faster Path To Electrification For the Developing World](https://hardware.slashdot.org/story/26/01/24/1938220/cheap-green-tech-allows-faster-path-to-electrification-for-the-developing-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 21:31:36](https://lobste.rs/s/cw6f2s/ai_tribalism) - [AI tribalism](https://nolanlawson.com/2026/01/24/ai-tribalism/)
* [2026-01-24, 18:11:00](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss) - [Micron Acquires PSMC Fab Site in Taiwan for $1.8 Billion](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss)
* [2026-01-24, 18:05:49](https://lobste.rs/s/abqeyo/obvious_things_c_should_do) - [Obvious Things C Should Do](https://www.digitalmars.com/articles/Cobvious.html)
* [2026-01-24, 16:39:37](https://lobste.rs/s/2qsmw8/e9p_pure_erlang_9p_implementation) - [e9p - pure Erlang 9p implementation](https://tangled.org/hauleth.dev/e9p)
* [2026-01-24, 13:25:00](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss) - [Hygienic Conditions in Pompeii&apos;s Early Baths Were Poor](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss)
* [2026-01-24, 08:42:00](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss) - [A Billiard Ball as a Universal Computation Machine](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss)
* [2026-01-24, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss) - [When Order Matters: How A Single DNS Change Broke The Internet For Millions](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss)
* [2026-01-23, 23:16:00](https://soylentnews.org/article.pl?sid=26/01/22/1148259&amp;from=rss) - [Caltech-Led Team Finds New Superconducting State](https://soylentnews.org/article.pl?sid=26/01/22/1148259&amp;from=rss)
* [2026-01-23, 18:32:00](https://soylentnews.org/article.pl?sid=26/01/22/1144249&amp;from=rss) - [Starlink in Iran: How the Regime Jams the Service and What Helps Against It](https://soylentnews.org/article.pl?sid=26/01/22/1144249&amp;from=rss)
* [2026-01-23, 15:03:08](https://news.ycombinator.com/item?id=46733306) - [The Science of Fermentation (The Food Programme)](https://www.bbc.co.uk/programmes/m002pqg6)
* [2026-01-23, 13:45:00](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss) - [Physics of Foam Strangely Resembles AI Training](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss)
* [2026-01-23, 08:59:00](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss) - [Wikipedia Volunteers Spent Years Cataloging AI Tells. Now There&apos;s a Plugin to Avoid Them.](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss)
* [2026-01-23, 04:12:00](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss) - [Nvidia Wanted Pirated Book Stash Access](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss)
* [2026-01-22, 23:28:00](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss) - [Textbooks Were Wrong: Human Hair Doesn&apos;t Grow the Way Scientists Thought](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss)
* [2026-01-22, 18:40:00](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss) - [Cows Use Tools](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss)
* [2026-01-22, 13:46:00](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss) - [AI Bathroom Monitors? Welcome To America’s New Surveillance High Schools](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss)
* [2026-01-22, 13:23:09](https://news.ycombinator.com/item?id=46718923) - [Infinite pancakes, anyone?](https://www.nytimes.com/2026/01/20/science/infinite-pancake-math-puzzle.html)
* [2026-01-22, 09:07:00](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss) - [France Records More Deaths Than Births for First Time Since End of Second World War](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss)
* [2026-01-22, 04:16:00](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss) - [Professors Issue Warning Over Surge in College Students Unable to Read](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss)
* [2026-01-22, 03:37:03](https://news.ycombinator.com/item?id=46714981) - [Delta single handle ball faucets (1963)](https://archive.org/details/DeltaSingleHandleBallFaucets)
