# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations

* [cpu: cpu command in Go, inspired by the Plan 9 cpu command](https://github.com/u-root/cpu) - A Go implementation of the Plan 9-inspired 'cpu' command offering new features for developers.

* [polyglot-image: A disk image that boots on multiple architectures](https://github.com/blitz/polyglot-image) - Multi-architecture bootable disk image aiming for wide usability.

* [sqlite-wasm-http: An experimental HTTP VFS driver for SQLite WASM](https://github.com/mmomtchev/sqlite-wasm-http) - A SQLite innovation enabling HTTP-based access to WASM versions.

* [dirlock](https://gitlab.steamos.cloud/holo/dirlock) - A new utility to manage files securely through locking mechanisms.

## Artificial Intelligence and Computing

* [Firefox Will Ship With an “AI Kill Switch” to Completely Disable All AI Features](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss) - Mozilla introduces an emergency switch for users to disable AI functionalities in Firefox.

* [LAVD: Meta's New Default Scheduler [pdf]](https://lpc.events/event/19/contributions/2099/attachments/1875/4020/lpc-2025-lavd-meta.pdf) - Meta opts for the Linux scheduler designed for Valve's Steam Deck in server operations.

* [Local AI is driving the biggest change in laptops in decades](https://spectrum.ieee.org/ai-models-locally) - Insights into how local AI implementations are revolutionizing laptops.

## Gaming and Display Technology

* [Samsung's 2026 Gaming Monitors Promise 6K, 3D, and Up To 1,040Hz](https://entertainment.slashdot.org/story/25/12/23/1944212/samsungs-2026-gaming-monitors-promise-6k-3d-and-up-to-1040hz?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Samsung's next-generation monitors aim to redefine gaming with extreme specifications.

* [5K Gaming Is Too Hard, Even for an RTX 5090D](https://games.slashdot.org/story/25/12/23/1728203/5k-gaming-is-too-hard-even-for-an-rtx-5090d?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Challenges in rendering 5K graphics even with top-tier GPUs like RTX 5090D.

## Data Privacy and Regulation

* [Apple Fined $116 Million Over App Privacy Prompts](https://apple.slashdot.org/story/25/12/23/151231/apple-fined-116-million-over-app-privacy-prompts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Regulatory actions against Apple over app privacy prompts.

* [NPM Package With 56K Downloads Caught Stealing WhatsApp Messages](https://www.koi.ai/blog/npm-package-with-56k-downloads-malware-stealing-whatsapp-messages) - Discovery of malware in a widely-used NPM package stealing user data.

## Historical Analysis and Discoveries

* [An initial analysis of the discovered Unix V4 tape](https://www.spinellis.gr/blog/20251223/?yc261223) - Insights and learnings from a historical Unix V4 tape.

* [Terrence Malick's Disciples](https://yalereview.org/article/bilge-ebiri-terrence-malick) - Exploration of the influence and legacy of Terrence Malick in cinema.

## Environmental and Resource Concerns

* [Australia Poised for Desalination Boom as Water Shortages Loom](https://slashdot.org/story/25/12/23/1816257/australia-poised-for-desalination-boom-as-water-shortages-loom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Water shortage solutions through proposed desalination projects.

* [Where Do Microplastics Go Once They Sink Into the Ocean?](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss) - Research into the movement and ecological impact of microplastics.

## Security Developments

* [New UEFI Flaw Enables Pre-Boot Attacks on Motherboards From Gigabyte, MSI, ASUS, ASRock](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss) - Analysis of vulnerabilities in modern motherboard security.

* [A Better Zip Bomb](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss) - A novel evolution of the traditional zip bomb in cybersecurity.

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

* [2025-12-23, 21:47:03](https://lobste.rs/s/aipma8/cpu_cpu_command_go_inspired_by_plan_9_cpu) - [cpu: cpu command in Go, inspired by the Plan 9 cpu command](https://github.com/u-root/cpu)
* [2025-12-23, 21:46:08](https://lobste.rs/s/fkjkjv/polyglot_image_disk_image_boots_on) - [polyglot-image: A disk image that boots on multiple architectures](https://github.com/blitz/polyglot-image)
* [2025-12-23, 21:41:00](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss) - [Firefox Will Ship With an “AI Kill Switch” to Completely Disable All AI Features](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss)
* [2025-12-23, 21:30:00](https://tech.slashdot.org/story/25/12/23/1830242/fragmented-microsoft-tools-undercut-efficiency-at-amazon-and-whole-foods-internal-deloitte-review-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Fragmented&apos; Microsoft Tools Undercut Efficiency at Amazon and Whole Foods, Internal Deloitte Review Finds](https://tech.slashdot.org/story/25/12/23/1830242/fragmented-microsoft-tools-undercut-efficiency-at-amazon-and-whole-foods-internal-deloitte-review-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 20:51:00](https://news.slashdot.org/story/25/12/23/191223/is-the-dictionary-done-for?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the Dictionary Done For?](https://news.slashdot.org/story/25/12/23/191223/is-the-dictionary-done-for?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 20:10:00](https://tech.slashdot.org/story/25/12/23/1843236/europes-public-institutions-are-quietly-ditching-us-cloud-providers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe&apos;s Public Institutions Are Quietly Ditching US Cloud Providers](https://tech.slashdot.org/story/25/12/23/1843236/europes-public-institutions-are-quietly-ditching-us-cloud-providers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 19:44:00](https://entertainment.slashdot.org/story/25/12/23/1944212/samsungs-2026-gaming-monitors-promise-6k-3d-and-up-to-1040hz?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung&apos;s 2026 Gaming Monitors Promise 6K, 3D, and Up To 1,040Hz](https://entertainment.slashdot.org/story/25/12/23/1944212/samsungs-2026-gaming-monitors-promise-6k-3d-and-up-to-1040hz?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 19:41:39](https://news.ycombinator.com/item?id=46368616) - [HTTP Caching, a Refresher](https://danburzo.ro/http-caching-refresher/)
* [2025-12-23, 19:41:14](https://news.ycombinator.com/item?id=46368608) - [Fixed-Wing Runway Design](https://www.wbdg.org/building/aviation/fixed-wing-runway-design)
* [2025-12-23, 19:35:20](https://news.ycombinator.com/item?id=46368557) - [Terrence Malick&apos;s Disciples](https://yalereview.org/article/bilge-ebiri-terrence-malick)
* [2025-12-23, 19:26:36](https://news.ycombinator.com/item?id=46368471) - [Un-Redactor](https://github.com/kvthweatt/unredactor)
* [2025-12-23, 19:09:45](https://news.ycombinator.com/item?id=46368300) - [Help My c64 caught on fire](https://c0de517e.com/026_c64fire.htm)
* [2025-12-23, 19:09:43](https://lobste.rs/s/zoqaeq/initial_analysis_discovered_unix_v4_tape) - [An initial analysis of the discovered Unix V4 tape](https://www.spinellis.gr/blog/20251223/?yc261223)
* [2025-12-23, 19:04:13](https://news.ycombinator.com/item?id=46368235) - [LAVD: Meta&apos;s New Default Scheduler [pdf]](https://lpc.events/event/19/contributions/2099/attachments/1875/4020/lpc-2025-lavd-meta.pdf)
* [2025-12-23, 18:59:54](https://lobste.rs/s/nyqw6y/sqlite_wasm_http_experimental_http_vfs) - [sqlite-wasm-http: An experimental HTTP VFS driver for SQLite WASM](https://github.com/mmomtchev/sqlite-wasm-http)
* [2025-12-23, 18:50:00](https://slashdot.org/story/25/12/23/1836252/remote-work-is-officially-dead-says-the-worlds-largest-recruiter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Remote Work is Officially Dead, Says the World&apos;s Largest Recruiter](https://slashdot.org/story/25/12/23/1836252/remote-work-is-officially-dead-says-the-worlds-largest-recruiter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 18:22:23](https://news.ycombinator.com/item?id=46367744) - [An initial analysis of the discovered Unix V4 tape](https://www.spinellis.gr/blog/20251223/?yc261223)
* [2025-12-23, 18:16:00](https://slashdot.org/story/25/12/23/1816257/australia-poised-for-desalination-boom-as-water-shortages-loom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia Poised for Desalination Boom as Water Shortages Loom](https://slashdot.org/story/25/12/23/1816257/australia-poised-for-desalination-boom-as-water-shortages-loom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 18:00:31](https://news.ycombinator.com/item?id=46367475) - [We replaced H.264 streaming with JPEG screenshots (and it worked better)](https://blog.helix.ml/p/we-mass-deployed-15-year-old-screen)
* [2025-12-23, 17:34:22](https://news.ycombinator.com/item?id=46367232) - [Towards a secure peer-to-peer app platform for Clan](https://clan.lol/blog/towards-app-platform-vmtech/)
* [2025-12-23, 17:33:42](https://news.ycombinator.com/item?id=46367224) - [Fabrice Bellard Releases MicroQuickJS](https://github.com/bellard/mquickjs/blob/main/README.md)
* [2025-12-23, 17:28:00](https://games.slashdot.org/story/25/12/23/1728203/5k-gaming-is-too-hard-even-for-an-rtx-5090d?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [5K Gaming Is Too Hard, Even for an RTX 5090D](https://games.slashdot.org/story/25/12/23/1728203/5k-gaming-is-too-hard-even-for-an-rtx-5090d?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 17:08:34](https://news.ycombinator.com/item?id=46366998) - [Meta is using the Linux scheduler designed for Valve&apos;s Steam Deck on its servers](https://www.phoronix.com/news/Meta-SCX-LAVD-Steam-Deck-Server)
* [2025-12-23, 16:57:00](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss) - [A Better Zip Bomb](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss)
* [2025-12-23, 16:41:00](https://slashdot.org/story/25/12/23/1516239/ryanair-fined-301m-over-abusive-strategy-to-limit-ticket-sales-by-online-travel-agencies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ryanair Fined $301M Over &apos;Abusive Strategy&apos; To Limit Ticket Sales By Online Travel Agencies](https://slashdot.org/story/25/12/23/1516239/ryanair-fined-301m-over-abusive-strategy-to-limit-ticket-sales-by-online-travel-agencies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 16:35:53](https://lobste.rs/s/xz6fwz/unix_find_expressions_compiled_bytecode) - [Unix \&quot;find\&quot; expressions compiled to bytecode](https://nullprogram.com/blog/2025/12/23/)
* [2025-12-23, 16:01:00](https://apple.slashdot.org/story/25/12/23/158236/apple-and-google-asking-some-employees-with-h-1b-visas-to-avoid-international-travel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple and Google Asking Some Employees With H-1B Visas To Avoid International Travel](https://apple.slashdot.org/story/25/12/23/158236/apple-and-google-asking-some-employees-with-h-1b-visas-to-avoid-international-travel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 15:53:35](https://lobste.rs/s/eqsxsc/linux_kernel_is_just_program) - [The Linux kernel is just a program](https://serversfor.dev/linux-inside-out/the-linux-kernel-is-just-a-program/)
* [2025-12-23, 15:50:04](https://lobste.rs/s/mogfta/folder_zone_share_end_end_encrypted) - [folder.zone: Share end-to-end encrypted folders live](https://folder.zone)
* [2025-12-23, 15:47:38](https://lobste.rs/s/kpvesz/reproducing_nixos_25_11_minimal) - [Reproducing the NixOS 25.11 Minimal Installation ISO](https://arnout.engelen.eu/blog/reproducing-nixos-25.11-minimal-iso/)
* [2025-12-23, 15:22:00](https://apple.slashdot.org/story/25/12/23/151231/apple-fined-116-million-over-app-privacy-prompts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Fined $116 Million Over App Privacy Prompts](https://apple.slashdot.org/story/25/12/23/151231/apple-fined-116-million-over-app-privacy-prompts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 14:57:11](https://lobste.rs/s/hcnzsm/wonder_msbuild) - [The wonder of MSBuild](https://mmagueta.capivaras.dev/blog/the-wonder-of-msbuild/)
* [2025-12-23, 14:40:00](https://news.slashdot.org/story/25/12/23/1435213/us-to-impose-tariffs-on-chips-from-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US To Impose Tariffs on Chips From China](https://news.slashdot.org/story/25/12/23/1435213/us-to-impose-tariffs-on-chips-from-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 14:25:17](https://lobste.rs/s/hq8sig/schrodinger_s_test_dev_mem_case) - [Schrödinger’s test: The /dev/mem case](https://elisa.tech/ambassadors/2025/12/10/schrodingers-test-the-dev-mem-case/)
* [2025-12-23, 14:02:13](https://lobste.rs/s/60fjs1/mquickjs_micro_quickjs_javascript) - [mquickjs: Micro QuickJS Javascript Engine](https://github.com/bellard/mquickjs)
* [2025-12-23, 14:01:00](https://slashdot.org/story/25/12/23/1334206/china-bans-e-commerce-platforms-from-forcing-lowest-prices-or-abusing-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Bans E-commerce Platforms From Forcing Lowest Prices or Abusing Algorithms](https://slashdot.org/story/25/12/23/1334206/china-bans-e-commerce-platforms-from-forcing-lowest-prices-or-abusing-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 13:48:00](https://lobste.rs/s/jmj5oa/dirlock) - [dirlock](https://gitlab.steamos.cloud/holo/dirlock)
* [2025-12-23, 13:30:28](https://lobste.rs/s/zs8egh/vigil_clean_fast_build_watcher_for_zig) - [Vigil - A clean, fast build watcher for Zig (inspired by Bacon for Rust)](https://github.com/chase-lambert/vigil)
* [2025-12-23, 13:00:00](https://tech.slashdot.org/story/25/12/22/2219206/uber-lyft-set-to-trial-robotaxis-in-the-uk-in-partnership-with-chinas-baidu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber, Lyft Set To Trial Robotaxis In the UK In Partnership With China&apos;s Baidu](https://tech.slashdot.org/story/25/12/22/2219206/uber-lyft-set-to-trial-robotaxis-in-the-uk-in-partnership-with-chinas-baidu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 12:56:50](https://news.ycombinator.com/item?id=46364973) - [Test, don&apos;t just verify](https://alperenkeles.com/posts/test-dont-verify/)
* [2025-12-23, 12:14:00](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss) - [Titan&apos;s Slushy Oceans](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss)
* [2025-12-23, 11:06:45](https://lobste.rs/s/znesuz/instant_database_clones_with_postgresql) - [Instant database clones with PostgreSQL 18](https://boringsql.com/posts/instant-database-clones/)
* [2025-12-23, 10:53:07](https://news.ycombinator.com/item?id=46364272) - [Ryanair fined €256M over ‘abusive strategy’ to limit ticket sales by OTAs](https://www.theguardian.com/business/2025/dec/23/ryanair-fined-limit-online-travel-agencies-ticket-sales-ota)
* [2025-12-23, 10:28:09](https://news.ycombinator.com/item?id=46364131) - [Font with Built-In Syntax Highlighting (2024)](https://blog.glyphdrawing.club/font-with-built-in-syntax-highlighting/)
* [2025-12-23, 10:00:00](https://science.slashdot.org/story/25/12/23/0839241/safety-panel-says-nasa-should-have-taken-starliner-incident-more-seriously?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Safety Panel Says NASA Should Have Taken Starliner Incident More Seriously](https://science.slashdot.org/story/25/12/23/0839241/safety-panel-says-nasa-should-have-taken-starliner-incident-more-seriously?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 09:52:07](https://lobste.rs/s/ef5wcv/are_we_loong_yet) - [Are we Loong yet?](https://areweloongyet.com/en/)
* [2025-12-23, 09:17:42](https://news.ycombinator.com/item?id=46363751) - [Carnap – A formal logic framework for Haskell](https://carnap.io/)
* [2025-12-23, 07:58:25](https://news.ycombinator.com/item?id=46363360) - [Instant database clones with PostgreSQL 18](https://boringsql.com/posts/instant-database-clones/)
* [2025-12-23, 07:50:03](https://news.ycombinator.com/item?id=46363319) - [10 years bootstrapped: €6.5M revenue with a team of 13](https://www.datocms.com/blog/a-look-back-at-2025)
* [2025-12-23, 07:38:18](https://lobste.rs/s/st1mpl/lightest_notes_app_implementation_111) - [The lightest notes app implementation in 111 loc](https://github.com/antonmedv/textarea)
* [2025-12-23, 07:31:00](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss) - [New UEFI Flaw Enables Pre-Boot Attacks on Motherboards From Gigabyte, MSI, ASUS, ASRock](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss)
* [2025-12-23, 07:11:39](https://lobste.rs/s/a9qem9/npm_package_with_56k_downloads_caught) - [NPM Package With 56K Downloads Caught Stealing WhatsApp Messages](https://www.koi.ai/blog/npm-package-with-56k-downloads-malware-stealing-whatsapp-messages)
* [2025-12-23, 07:00:00](https://science.slashdot.org/story/25/12/23/018200/how-a-power-outage-in-colorado-caused-us-official-time-to-be-48-microseconds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How a Power Outage In Colorado Caused US Official Time To Be 4.8 Microseconds](https://science.slashdot.org/story/25/12/23/018200/how-a-power-outage-in-colorado-caused-us-official-time-to-be-48-microseconds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 06:22:21](https://news.ycombinator.com/item?id=46362927) - [iOS 26.3 brings AirPods-like pairing to third-party devices in EU under DMA](https://www.macrumors.com/2025/12/22/ios-26-3-dma-airpods-pairing/)
* [2025-12-23, 02:44:00](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss) - [Creating Apps Like Signal or WhatsApp Could be &apos;Hostile Activity,&apos; Claims UK Watchdog](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss)
* [2025-12-23, 02:05:38](https://lobste.rs/s/ldlty4/freebsd_closes_laptop_gap_year_one) - [FreeBSD Closes the Laptop Gap: Year One Project Update](https://freebsdfoundation.org/blog/freebsd-closes-the-laptop-gap-year-one-project-update/)
* [2025-12-23, 00:46:51](https://lobste.rs/s/mvqno1/introducing_open_forms) - [Introducing Open Forms](https://www.aryank.in/posts/2025-12-21-introducing-open-forms/)
* [2025-12-23, 00:12:16](https://news.ycombinator.com/item?id=46360856) - [Local AI is driving the biggest change in laptops in decades](https://spectrum.ieee.org/ai-models-locally)
* [2025-12-22, 22:02:00](https://soylentnews.org/article.pl?sid=25/12/21/099243&amp;from=rss) - [Communities Are Rising Up Against Data Centers — and Winning](https://soylentnews.org/article.pl?sid=25/12/21/099243&amp;from=rss)
* [2025-12-22, 21:57:53](https://lobste.rs/s/bhsl9h/i_foretold_mac_app_notarization_is) - [I foretold that Mac app notarization is security theater](https://lapcatsoftware.com/articles/2025/12/5.html)
* [2025-12-22, 19:50:22](https://lobste.rs/s/qbi2ee/lua_5_5_released) - [Lua 5.5 Released](https://www.lua.org/manual/5.5/readme.html#changes)
* [2025-12-22, 19:10:36](https://lobste.rs/s/fjlwli/what_s_new_miri_also_there_s_miri_paper) - [What&apos;s \&quot;new\&quot; in Miri (and also, there&apos;s a Miri paper!)](https://www.ralfj.de/blog/2025/12/22/miri.html)
* [2025-12-22, 18:27:57](https://lobste.rs/s/p6gjfj/uncomfortable_necessary_discussion) - [An uncomfortable but necessary discussion about the Debian bug tracker](https://nibblestew.blogspot.com/2025/12/an-uncomfortable-but-necessary.html)
* [2025-12-22, 17:17:00](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss) - [Where Do Microplastics Go Once They Sink Into the Ocean?](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss)
* [2025-12-22, 17:02:41](https://lobste.rs/s/3w65ir/email_simplicity_vs_decentralized_chat) - [Email Simplicity vs Decentralized Chat](https://lobste.rs/s/3w65ir/email_simplicity_vs_decentralized_chat)
* [2025-12-22, 15:12:40](https://news.ycombinator.com/item?id=46354737) - [Toad is a unified experience for AI in the terminal](https://willmcgugan.github.io/toad-released/)
* [2025-12-22, 15:06:13](https://news.ycombinator.com/item?id=46354674) - [Lua 5.5](https://lua.org/versions.html#5.5)
* [2025-12-22, 12:32:00](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss) - [North Korean Infiltrator Caught Working in Amazon IT Department Thanks to Keystroke Lag](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss)
* [2025-12-22, 11:12:29](https://lobste.rs/s/zzvn7y/i_m_former_cto_here_is_15_sec_coding_test_i) - [I’m a former CTO. Here is the 15 sec coding test I used to instantly filter out 50% of unqualified applicants](https://josezarazua.com/im-a-former-cto-here-is-the-15-sec-coding-test-i-used-to-instantly-filter-out-50-of-unqualified-applicants/)
* [2025-12-22, 08:08:46](https://news.ycombinator.com/item?id=46352191) - [Dancing around the rhythm space with Euclid](https://pv.wtf/posts/euclidean-rhythms)
* [2025-12-22, 07:47:00](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss) - [Google is Shutting Down its Dark Web Report Feature in January](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss)
* [2025-12-22, 03:04:00](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss) - [Senators Count the Shady Ways Data Centers Pass Energy Costs on to Americans](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss)
* [2025-12-21, 22:18:00](https://soylentnews.org/article.pl?sid=25/12/20/1439207&amp;from=rss) - [Google&apos;s New &apos;Disco&apos; Browser Turns Tabs Into Custom Web Apps](https://soylentnews.org/article.pl?sid=25/12/20/1439207&amp;from=rss)
* [2025-12-21, 17:36:00](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss) - [The Secret Life of Moles: What They&apos;re Really Up to Underground](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss)
* [2025-12-21, 12:49:00](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss) - [Public Domain Day 2026](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss)
* [2025-12-21, 08:08:00](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss) - [Home Depot Exposed Access to Internal Systems for a Year](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss)
* [2025-12-21, 04:40:00](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss) - [Ventoy 1.1.09 Released With Experimental Btrfs Support](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss)
* [2025-12-21, 03:17:00](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss) - [Indoor Tanning Makes Youthful Skin Much Older on a Genetic Level](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss)
* [2025-12-20, 22:34:00](https://soylentnews.org/article.pl?sid=25/12/19/0538241&amp;from=rss) - [Fake Leonardo DiCaprio Movie Torrent Drops Agent Tesla Through Layered PowerShell Chain](https://soylentnews.org/article.pl?sid=25/12/19/0538241&amp;from=rss)
* [2025-12-20, 18:47:23](https://news.ycombinator.com/item?id=46338480) - [Space Math Academy](https://space-math.academy)
* [2025-12-20, 17:44:00](https://soylentnews.org/article.pl?sid=25/12/19/0524257&amp;from=rss) - [Nissan Adds Hearing Test and Custom Equilization to Car Audio](https://soylentnews.org/article.pl?sid=25/12/19/0524257&amp;from=rss)
* [2025-12-20, 12:57:00](https://soylentnews.org/article.pl?sid=25/12/19/0522251&amp;from=rss) - [iRobot Swept Into Bankruptcy](https://soylentnews.org/article.pl?sid=25/12/19/0522251&amp;from=rss)
* [2025-12-20, 10:25:38](https://news.ycombinator.com/item?id=46335069) - [The post-GeForce era: What if Nvidia abandons PC gaming?](https://www.pcworld.com/article/3013044/the-post-geforce-era-what-if-nvidia-abandons-pc-gaming.html)
* [2025-12-20, 08:17:00](https://soylentnews.org/article.pl?sid=25/12/19/0429209&amp;from=rss) - [Google Releases its New Google Sans Flex Font as Open Source](https://soylentnews.org/article.pl?sid=25/12/19/0429209&amp;from=rss)
* [2025-12-20, 07:14:53](https://news.ycombinator.com/item?id=46334206) - [Perfect Software – Software for an Audience of One](https://outofdesk.netlify.app/blog/perfect-software)
* [2025-12-20, 03:27:00](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss) - [This Star is Being Eaten Alive—and its Explosive Death Will be Visible in Broad Daylight](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss)
* [2025-12-19, 22:43:00](https://soylentnews.org/article.pl?sid=25/12/18/133249&amp;from=rss) - [Mozilla&apos;s New CEO: Firefox Will Become an “AI Browser”](https://soylentnews.org/article.pl?sid=25/12/18/133249&amp;from=rss)
* [2025-12-19, 19:44:41](https://news.ycombinator.com/item?id=46330012) - [Astrophotography Target Planner: Discover Hidden Nebulas](https://astroimagery.com/techniques/imaging/astrophotography-target-planner/)
* [2025-12-19, 17:55:00](https://soylentnews.org/article.pl?sid=25/12/18/046237&amp;from=rss) - [Resolving to Spend Less Time on Your Smartphone? Understanding Your Travel Habits Can Help](https://soylentnews.org/article.pl?sid=25/12/18/046237&amp;from=rss)
* [2025-12-19, 16:34:41](https://news.ycombinator.com/item?id=46327692) - [What makes you senior](https://terriblesoftware.org/2025/11/25/what-actually-makes-you-senior/)
* [2025-12-19, 13:21:00](https://soylentnews.org/article.pl?sid=25/12/18/044218&amp;from=rss) - [UK to “Encourage” Apple and Google to Put Nudity-Blocking Systems on Phones](https://soylentnews.org/article.pl?sid=25/12/18/044218&amp;from=rss)
* [2025-12-19, 08:14:00](https://soylentnews.org/article.pl?sid=25/12/18/0358200&amp;from=rss) - [Google Translate expands live translation to all earbuds on Android](https://soylentnews.org/article.pl?sid=25/12/18/0358200&amp;from=rss)
* [2025-12-19, 08:11:00](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss) - [British Billboards Are Watching You](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss)
* [2025-12-19, 03:37:00](https://soylentnews.org/article.pl?sid=25/12/17/0218212&amp;from=rss) - [UK Strengthens Subsea Cables Against Russian Interference](https://soylentnews.org/article.pl?sid=25/12/17/0218212&amp;from=rss)
