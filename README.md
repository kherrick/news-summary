# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Programming

* [What Might Adding Emojis and Pictures To Text Programming Languages Look Like?](https://developers.slashdot.org/story/25/12/24/0323250/what-might-adding-emojis-and-pictures-to-text-programming-languages-look-like?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Custom Cross Compiler with Nix](https://www.hobson.space/posts/nixcross/)

* [Meta Is Using The Linux Scheduler Designed For Valve's Steam Deck On Its Servers - Phoronix](https://www.phoronix.com/news/Meta-SCX-LAVD-Steam-Deck-Server)

* [Open source USB to GPIB converter (for Test and Measurement instruments)](https://github.com/xyphro/UsbGpib)

## Artificial Intelligence and New Developments

* [John Carreyou and Other Authors Bring New Lawsuit Against Six Major AI Companies](https://yro.slashdot.org/story/25/12/23/2254257/john-carreyou-and-other-authors-bring-new-lawsuit-against-six-major-ai-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [ServiceNow To Buy Armis For $7.75 Billion As It Bets Big On Cybersecurity For AI](https://slashdot.org/story/25/12/23/2313234/servicenow-to-buy-armis-for-775-billion-as-it-bets-big-on-cybersecurity-for-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Firefox Will Ship With an 'AI Kill Switch' to Completely Disable All AI Features](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss)

## Scientific Discovery and Space Exploration

* [Dracula's Chivito: Hubble reveals largest birthplace of planets ever observed](https://phys.org/news/2025-12-chaotic-dracula-chivito-hubble-reveals.html)

* [Titan's Slushy Oceans](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss)

* [This Star is Being Eaten Alive—and its Explosive Death Will be Visible in Broad Daylight](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss)

## Global and Environmental Issues

* [Australia Poised for Desalination Boom as Water Shortages Loom](https://slashdot.org/story/25/12/23/1816257/australia-poised-for-desalination-boom-as-water-shortages-loom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Where Do Microplastics Go Once They Sink Into the Ocean?](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss)

* [Communities Are Rising Up Against Data Centers — and Winning](https://soylentnews.org/article.pl?sid=25/12/21/099243&amp;from=rss)

## Cybersecurity and Digital Privacy

* [Inside Uzbekistan's Nationwide License Plate Surveillance System](https://yro.slashdot.org/story/25/12/23/2220226/inside-uzbekistans-nationwide-license-plate-surveillance-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Correspondence Between Don Knuth and Peter van Emde Boas on Priority Deques 1977 [pdf]](https://staff.fnwi.uva.nl/p.vanemdeboas/knuthnote.pdf)

* [Some Epstein file redactions are being undone with hacks](https://www.theguardian.com/us-news/2025/dec/23/epstein-unredacted-files-social-media)

## Legal and Corporate Updates

* [Judge Blocks Texas App Store Age Verification Law](https://yro.slashdot.org/story/25/12/23/2235204/judge-blocks-texas-app-store-age-verification-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Creating Apps Like Signal or WhatsApp Could be 'Hostile Activity,' Claims UK Watchdog](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss)

* [LimeWire Re-Emerges In Online Rush To Share Pulled '60 Minutes' Segment](https://yro.slashdot.org/story/25/12/23/222221/limewire-re-emerges-in-online-rush-to-share-pulled-60-minutes-segment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Historical Insights and Digital Preservation

* [An initial analysis of the discovered Unix V4 tape](https://www.spinellis.gr/blog/20251223/?yc261223)

* [I foretold that Mac app notarization is security theater](https://lapcatsoftware.com/articles/2025/12/5.html)

* [Public Domain Day 2026](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss)

## Productivity Tools and Updates

* [Volvo Centum is Dalton Maag's new typeface for Volvo](https://www.wallpaper.com/design-interiors/corporate-design-branding/volvo-new-font-volvo-centum)

* [The wonder of MSBuild](https://mmagueta.capivaras.dev/blog/the-wonder-of-msbuild/)

* [Unifi Travel Router](https://blog.ui.com/article/travel-in-style-unifi-style-unifi-travel-router)

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

* [2025-12-24, 07:00:00](https://developers.slashdot.org/story/25/12/24/0323250/what-might-adding-emojis-and-pictures-to-text-programming-languages-look-like?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Might Adding Emojis and Pictures To Text Programming Languages Look Like?](https://developers.slashdot.org/story/25/12/24/0323250/what-might-adding-emojis-and-pictures-to-text-programming-languages-look-like?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 05:28:46](https://lobste.rs/s/3fytym/custom_cross_compiler_with_nix) - [Custom Cross Compiler with Nix](https://www.hobson.space/posts/nixcross/)
* [2025-12-24, 05:26:36](https://news.ycombinator.com/item?id=46372739) - [Dutch Tesla Fleet Goes Bankrupt After Betting on Musk&apos;s Self-Driving Promises](https://guessingheadlights.com/dutch-tesla-fleet-goes-bust-after-betting-on-musks-self-driving-promises/)
* [2025-12-24, 04:35:28](https://lobste.rs/s/judd04/meta_is_using_linux_scheduler_designed) - [Meta Is Using The Linux Scheduler Designed For Valve&apos;s Steam Deck On Its Servers - Phoronix](https://www.phoronix.com/news/Meta-SCX-LAVD-Steam-Deck-Server)
* [2025-12-24, 03:34:31](https://news.ycombinator.com/item?id=46372153) - [Don&apos;t Become the Machine](https://armeet.bearblog.dev/becoming-the-machine/)
* [2025-12-24, 03:30:00](https://yro.slashdot.org/story/25/12/23/2220226/inside-uzbekistans-nationwide-license-plate-surveillance-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Inside Uzbekistan&apos;s Nationwide License Plate Surveillance System](https://yro.slashdot.org/story/25/12/23/2220226/inside-uzbekistans-nationwide-license-plate-surveillance-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 02:28:00](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss) - [Google Search Now Lets You Upload Images and PDFs for Analysis](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss)
* [2025-12-24, 02:21:42](https://news.ycombinator.com/item?id=46371759) - [Correspondence Between Don Knuth and Peter van Emde Boas on Priority Deques 1977 [pdf]](https://staff.fnwi.uva.nl/p.vanemdeboas/knuthnote.pdf)
* [2025-12-24, 02:18:38](https://news.ycombinator.com/item?id=46371743) - [Show HN: Turn raw HTML into production-ready images for free](https://html2png.dev)
* [2025-12-24, 02:16:01](https://news.ycombinator.com/item?id=46371730) - [Autonomously navigating the real world: lessons from the PG&amp;E outage](https://waymo.com/blog/2025/12/autonomously-navigating-the-real-world)
* [2025-12-24, 02:10:34](https://news.ycombinator.com/item?id=46371705) - [Could lockfiles just be SBOMs?](https://nesbitt.io/2025/12/23/could-lockfiles-just-be-sboms.html)
* [2025-12-24, 02:10:00](https://devices.slashdot.org/story/25/12/23/2247241/ios-263-brings-airpods-like-pairing-to-third-party-devices-in-eu-under-dma?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iOS 26.3 Brings AirPods-Like Pairing To Third-Party Devices In EU Under DMA](https://devices.slashdot.org/story/25/12/23/2247241/ios-263-brings-airpods-like-pairing-to-third-party-devices-in-eu-under-dma?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 02:01:49](https://news.ycombinator.com/item?id=46371673) - [&apos;Dracula&apos;s Chivito&apos;: Hubble reveals largest birthplace of planets ever observed](https://phys.org/news/2025-12-chaotic-dracula-chivito-hubble-reveals.html)
* [2025-12-24, 01:30:00](https://yro.slashdot.org/story/25/12/23/2254257/john-carreyou-and-other-authors-bring-new-lawsuit-against-six-major-ai-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [John Carreyou and Other Authors Bring New Lawsuit Against Six Major AI Companies](https://yro.slashdot.org/story/25/12/23/2254257/john-carreyou-and-other-authors-bring-new-lawsuit-against-six-major-ai-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 01:21:58](https://news.ycombinator.com/item?id=46371429) - [Open source USB to GPIB converter (for Test and Measurement instruments)](https://github.com/xyphro/UsbGpib)
* [2025-12-24, 01:20:39](https://news.ycombinator.com/item?id=46371423) - [Nabokov&apos;s guide to foreigners learning Russian](https://twitter.com/haravayin_hogh/status/2003299405907247502)
* [2025-12-24, 00:50:00](https://linux.slashdot.org/story/25/12/23/227227/meta-is-using-the-linux-scheduler-designed-for-valves-steam-deck-on-its-servers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Using The Linux Scheduler Designed For Valve&apos;s Steam Deck On Its Servers](https://linux.slashdot.org/story/25/12/23/227227/meta-is-using-the-linux-scheduler-designed-for-valves-steam-deck-on-its-servers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 00:30:18](https://news.ycombinator.com/item?id=46371135) - [Unifi Travel Router](https://blog.ui.com/article/travel-in-style-unifi-style-unifi-travel-router)
* [2025-12-24, 00:10:00](https://slashdot.org/story/25/12/23/2313234/servicenow-to-buy-armis-for-775-billion-as-it-bets-big-on-cybersecurity-for-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ServiceNow To Buy Armis For $7.75 Billion As It Bets Big On Cybersecurity For AI](https://slashdot.org/story/25/12/23/2313234/servicenow-to-buy-armis-for-775-billion-as-it-bets-big-on-cybersecurity-for-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 23:30:00](https://tech.slashdot.org/story/25/12/23/2214235/irelands-diarmuid-early-wins-world-microsoft-excel-title?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ireland&apos;s Diarmuid Early Wins World Microsoft Excel Title](https://tech.slashdot.org/story/25/12/23/2214235/irelands-diarmuid-early-wins-world-microsoft-excel-title?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 23:12:03](https://news.ycombinator.com/item?id=46370592) - [Is Northern Virginia still the least reliable AWS region?](https://statusgator.com/blog/aws-least-reliable-region-in-2025/)
* [2025-12-23, 22:50:00](https://yro.slashdot.org/story/25/12/23/2235204/judge-blocks-texas-app-store-age-verification-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Blocks Texas App Store Age Verification Law](https://yro.slashdot.org/story/25/12/23/2235204/judge-blocks-texas-app-store-age-verification-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 22:37:54](https://lobste.rs/s/urk73b/they_made_me_offer_i_couldn_t_refuse_1997) - [They made me an offer I couldn&apos;t refuse (1997)](http://jens.mooseyard.com/1997/04/13/they-made-me-an-offer-i-couldnt-refuse/)
* [2025-12-23, 22:10:00](https://yro.slashdot.org/story/25/12/23/222221/limewire-re-emerges-in-online-rush-to-share-pulled-60-minutes-segment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LimeWire Re-Emerges In Online Rush To Share Pulled &apos;60 Minutes&apos; Segment](https://yro.slashdot.org/story/25/12/23/222221/limewire-re-emerges-in-online-rush-to-share-pulled-60-minutes-segment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 22:09:04](https://lobste.rs/s/1bzwio/pure_silicon_demo_coding_no_cpu_no_memory) - [Pure Silicon Demo Coding: No CPU, No Memory, Just 4k Gates](https://www.a1k0n.net/2025/12/19/tiny-tapeout-demo.html)
* [2025-12-23, 22:03:46](https://news.ycombinator.com/item?id=46370012) - [Texas app store age verification law blocked by federal judge](https://www.macrumors.com/2025/12/23/texas-app-store-law-blocked/)
* [2025-12-23, 21:58:43](https://lobste.rs/s/8ugoxw/your_favorite_pieces_technical_writing) - [Your favorite pieces of technical writing?](https://lobste.rs/s/8ugoxw/your_favorite_pieces_technical_writing)
* [2025-12-23, 21:54:30](https://news.ycombinator.com/item?id=46369923) - [X-ray: a Python library for finding bad redactions in PDF documents](https://github.com/freelawproject/x-ray)
* [2025-12-23, 21:47:03](https://lobste.rs/s/aipma8/cpu_cpu_command_go_inspired_by_plan_9_cpu) - [cpu: cpu command in Go, inspired by the Plan 9 cpu command](https://github.com/u-root/cpu)
* [2025-12-23, 21:41:00](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss) - [Firefox Will Ship With an “AI Kill Switch” to Completely Disable All AI Features](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss)
* [2025-12-23, 21:30:00](https://tech.slashdot.org/story/25/12/23/1830242/fragmented-microsoft-tools-undercut-efficiency-at-amazon-and-whole-foods-internal-deloitte-review-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Fragmented&apos; Microsoft Tools Undercut Efficiency at Amazon and Whole Foods, Internal Deloitte Review Finds](https://tech.slashdot.org/story/25/12/23/1830242/fragmented-microsoft-tools-undercut-efficiency-at-amazon-and-whole-foods-internal-deloitte-review-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 21:29:49](https://lobste.rs/s/du0csx/we_asked_four_ai_coding_agents_rebuild) - [We asked four AI coding agents to rebuild Minesweeper—the results were explosive](https://arstechnica.com/ai/2025/12/the-ars-technica-ai-coding-agent-test-minesweeper-edition/)
* [2025-12-23, 20:51:00](https://news.slashdot.org/story/25/12/23/191223/is-the-dictionary-done-for?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the Dictionary Done For?](https://news.slashdot.org/story/25/12/23/191223/is-the-dictionary-done-for?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 20:10:30](https://news.ycombinator.com/item?id=46368946) - [Some Epstein file redactions are being undone with hacks](https://www.theguardian.com/us-news/2025/dec/23/epstein-unredacted-files-social-media)
* [2025-12-23, 20:10:00](https://tech.slashdot.org/story/25/12/23/1843236/europes-public-institutions-are-quietly-ditching-us-cloud-providers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe&apos;s Public Institutions Are Quietly Ditching US Cloud Providers](https://tech.slashdot.org/story/25/12/23/1843236/europes-public-institutions-are-quietly-ditching-us-cloud-providers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 19:44:00](https://entertainment.slashdot.org/story/25/12/23/1944212/samsungs-2026-gaming-monitors-promise-6k-3d-and-up-to-1040hz?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung&apos;s 2026 Gaming Monitors Promise 6K, 3D, and Up To 1,040Hz](https://entertainment.slashdot.org/story/25/12/23/1944212/samsungs-2026-gaming-monitors-promise-6k-3d-and-up-to-1040hz?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 19:41:39](https://news.ycombinator.com/item?id=46368616) - [HTTP Caching, a Refresher](https://danburzo.ro/http-caching-refresher/)
* [2025-12-23, 19:35:20](https://news.ycombinator.com/item?id=46368557) - [Terrence Malick&apos;s Disciples](https://yalereview.org/article/bilge-ebiri-terrence-malick)
* [2025-12-23, 19:09:45](https://news.ycombinator.com/item?id=46368300) - [Help My c64 caught on fire](https://c0de517e.com/026_c64fire.htm)
* [2025-12-23, 19:09:43](https://lobste.rs/s/zoqaeq/initial_analysis_discovered_unix_v4_tape) - [An initial analysis of the discovered Unix V4 tape](https://www.spinellis.gr/blog/20251223/?yc261223)
* [2025-12-23, 18:59:54](https://lobste.rs/s/nyqw6y/sqlite_wasm_http_experimental_http_vfs) - [sqlite-wasm-http: An experimental HTTP VFS driver for SQLite WASM](https://github.com/mmomtchev/sqlite-wasm-http)
* [2025-12-23, 18:50:00](https://slashdot.org/story/25/12/23/1836252/remote-work-is-officially-dead-says-the-worlds-largest-recruiter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Remote Work is Officially Dead, Says the World&apos;s Largest Recruiter](https://slashdot.org/story/25/12/23/1836252/remote-work-is-officially-dead-says-the-worlds-largest-recruiter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 18:33:01](https://news.ycombinator.com/item?id=46367864) - [Volvo Centum is Dalton Maag&apos;s new typeface for Volvo](https://www.wallpaper.com/design-interiors/corporate-design-branding/volvo-new-font-volvo-centum)
* [2025-12-23, 18:16:00](https://slashdot.org/story/25/12/23/1816257/australia-poised-for-desalination-boom-as-water-shortages-loom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia Poised for Desalination Boom as Water Shortages Loom](https://slashdot.org/story/25/12/23/1816257/australia-poised-for-desalination-boom-as-water-shortages-loom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 18:00:31](https://news.ycombinator.com/item?id=46367475) - [We replaced H.264 streaming with JPEG screenshots (and it worked better)](https://blog.helix.ml/p/we-mass-deployed-15-year-old-screen)
* [2025-12-23, 17:33:42](https://news.ycombinator.com/item?id=46367224) - [Fabrice Bellard Releases MicroQuickJS](https://github.com/bellard/mquickjs/blob/main/README.md)
* [2025-12-23, 16:57:00](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss) - [A Better Zip Bomb](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss)
* [2025-12-23, 16:35:53](https://lobste.rs/s/xz6fwz/unix_find_expressions_compiled_bytecode) - [Unix \&quot;find\&quot; expressions compiled to bytecode](https://nullprogram.com/blog/2025/12/23/)
* [2025-12-23, 15:53:35](https://lobste.rs/s/eqsxsc/linux_kernel_is_just_program) - [The Linux kernel is just a program](https://serversfor.dev/linux-inside-out/the-linux-kernel-is-just-a-program/)
* [2025-12-23, 15:50:04](https://lobste.rs/s/mogfta/folder_zone_share_end_end_encrypted) - [folder.zone: Share end-to-end encrypted folders live](https://folder.zone)
* [2025-12-23, 15:47:38](https://lobste.rs/s/kpvesz/reproducing_nixos_25_11_minimal) - [Reproducing the NixOS 25.11 Minimal Installation ISO](https://arnout.engelen.eu/blog/reproducing-nixos-25.11-minimal-iso/)
* [2025-12-23, 14:57:11](https://lobste.rs/s/hcnzsm/wonder_msbuild) - [The wonder of MSBuild](https://mmagueta.capivaras.dev/blog/the-wonder-of-msbuild/)
* [2025-12-23, 14:25:17](https://lobste.rs/s/hq8sig/schrodinger_s_test_dev_mem_case) - [Schrödinger’s test: The /dev/mem case](https://elisa.tech/ambassadors/2025/12/10/schrodingers-test-the-dev-mem-case/)
* [2025-12-23, 14:02:13](https://lobste.rs/s/60fjs1/mquickjs_micro_quickjs_javascript) - [mquickjs: Micro QuickJS Javascript Engine](https://github.com/bellard/mquickjs)
* [2025-12-23, 13:48:00](https://lobste.rs/s/jmj5oa/dirlock) - [dirlock](https://gitlab.steamos.cloud/holo/dirlock)
* [2025-12-23, 13:30:28](https://lobste.rs/s/zs8egh/vigil_clean_fast_build_watcher_for_zig) - [Vigil - A clean, fast build watcher for Zig (inspired by Bacon for Rust)](https://github.com/chase-lambert/vigil)
* [2025-12-23, 12:14:00](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss) - [Titan&apos;s Slushy Oceans](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss)
* [2025-12-23, 11:06:45](https://lobste.rs/s/znesuz/instant_database_clones_with_postgresql) - [Instant database clones with PostgreSQL 18](https://boringsql.com/posts/instant-database-clones/)
* [2025-12-23, 09:52:07](https://lobste.rs/s/ef5wcv/are_we_loong_yet) - [Are we Loong yet?](https://areweloongyet.com/en/)
* [2025-12-23, 07:38:18](https://lobste.rs/s/st1mpl/lightest_notes_app_implementation_111) - [The lightest notes app implementation in 111 loc](https://github.com/antonmedv/textarea)
* [2025-12-23, 07:31:00](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss) - [New UEFI Flaw Enables Pre-Boot Attacks on Motherboards From Gigabyte, MSI, ASUS, ASRock](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss)
* [2025-12-23, 07:11:39](https://lobste.rs/s/a9qem9/npm_package_with_56k_downloads_caught) - [NPM Package With 56K Downloads Caught Stealing WhatsApp Messages](https://www.koi.ai/blog/npm-package-with-56k-downloads-malware-stealing-whatsapp-messages)
* [2025-12-23, 06:22:21](https://news.ycombinator.com/item?id=46362927) - [iOS 26.3 brings AirPods-like pairing to third-party devices in EU under DMA](https://www.macrumors.com/2025/12/22/ios-26-3-dma-airpods-pairing/)
* [2025-12-23, 02:44:00](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss) - [Creating Apps Like Signal or WhatsApp Could be &apos;Hostile Activity,&apos; Claims UK Watchdog](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss)
* [2025-12-22, 22:02:00](https://soylentnews.org/article.pl?sid=25/12/21/099243&amp;from=rss) - [Communities Are Rising Up Against Data Centers — and Winning](https://soylentnews.org/article.pl?sid=25/12/21/099243&amp;from=rss)
* [2025-12-22, 21:57:53](https://lobste.rs/s/bhsl9h/i_foretold_mac_app_notarization_is) - [I foretold that Mac app notarization is security theater](https://lapcatsoftware.com/articles/2025/12/5.html)
* [2025-12-22, 19:50:22](https://lobste.rs/s/qbi2ee/lua_5_5_released) - [Lua 5.5 Released](https://www.lua.org/manual/5.5/readme.html#changes)
* [2025-12-22, 18:27:57](https://lobste.rs/s/p6gjfj/uncomfortable_necessary_discussion) - [An uncomfortable but necessary discussion about the Debian bug tracker](https://nibblestew.blogspot.com/2025/12/an-uncomfortable-but-necessary.html)
* [2025-12-22, 17:17:00](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss) - [Where Do Microplastics Go Once They Sink Into the Ocean?](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss)
* [2025-12-22, 15:06:13](https://news.ycombinator.com/item?id=46354674) - [Lua 5.5](https://lua.org/versions.html#5.5)
* [2025-12-22, 12:32:00](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss) - [North Korean Infiltrator Caught Working in Amazon IT Department Thanks to Keystroke Lag](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss)
* [2025-12-22, 07:47:00](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss) - [Google is Shutting Down its Dark Web Report Feature in January](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss)
* [2025-12-22, 03:04:00](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss) - [Senators Count the Shady Ways Data Centers Pass Energy Costs on to Americans](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss)
* [2025-12-21, 22:18:00](https://soylentnews.org/article.pl?sid=25/12/20/1439207&amp;from=rss) - [Google&apos;s New &apos;Disco&apos; Browser Turns Tabs Into Custom Web Apps](https://soylentnews.org/article.pl?sid=25/12/20/1439207&amp;from=rss)
* [2025-12-21, 17:36:00](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss) - [The Secret Life of Moles: What They&apos;re Really Up to Underground](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss)
* [2025-12-21, 12:49:00](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss) - [Public Domain Day 2026](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss)
* [2025-12-21, 08:08:00](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss) - [Home Depot Exposed Access to Internal Systems for a Year](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss)
* [2025-12-21, 04:40:00](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss) - [Ventoy 1.1.09 Released With Experimental Btrfs Support](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss)
* [2025-12-21, 03:17:00](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss) - [Indoor Tanning Makes Youthful Skin Much Older on a Genetic Level](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss)
* [2025-12-20, 22:34:00](https://soylentnews.org/article.pl?sid=25/12/19/0538241&amp;from=rss) - [Fake Leonardo DiCaprio Movie Torrent Drops Agent Tesla Through Layered PowerShell Chain](https://soylentnews.org/article.pl?sid=25/12/19/0538241&amp;from=rss)
* [2025-12-20, 17:44:00](https://soylentnews.org/article.pl?sid=25/12/19/0524257&amp;from=rss) - [Nissan Adds Hearing Test and Custom Equilization to Car Audio](https://soylentnews.org/article.pl?sid=25/12/19/0524257&amp;from=rss)
* [2025-12-20, 13:16:21](https://news.ycombinator.com/item?id=46335961) - [Proving Bounds for the Randomized MaxCut Approximation Algorithm in Lean4](https://abhamra.com/blog/randomized-maxcut/)
* [2025-12-20, 12:57:00](https://soylentnews.org/article.pl?sid=25/12/19/0522251&amp;from=rss) - [iRobot Swept Into Bankruptcy](https://soylentnews.org/article.pl?sid=25/12/19/0522251&amp;from=rss)
* [2025-12-20, 08:17:00](https://soylentnews.org/article.pl?sid=25/12/19/0429209&amp;from=rss) - [Google Releases its New Google Sans Flex Font as Open Source](https://soylentnews.org/article.pl?sid=25/12/19/0429209&amp;from=rss)
* [2025-12-20, 07:14:53](https://news.ycombinator.com/item?id=46334206) - [Perfect Software – Software for an Audience of One](https://outofdesk.netlify.app/blog/perfect-software)
* [2025-12-20, 03:27:00](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss) - [This Star is Being Eaten Alive—and its Explosive Death Will be Visible in Broad Daylight](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss)
