# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [US Bars Five Europeans It Says Pressured Tech Firms To Censor American Viewpoints Online](https://yro.slashdot.org/story/25/12/24/0319202/us-bars-five-europeans-it-says-pressured-tech-firms-to-censor-american-viewpoints-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The US has introduced measures against individuals allegedly involved in influencing tech platforms to censor certain viewpoints.

* [Google Search Now Lets You Upload Images and PDFs for Analysis](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss) - Google Search now includes tools for uploading images and PDFs to facilitate analysis, introducing new capabilities for users.

* [What Might Adding Emojis and Pictures To Text Programming Languages Look Like?](https://developers.slashdot.org/story/25/12/24/0323250/what-might-adding-emojis-and-pictures-to-text-programming-languages-look-like?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A speculative exploration of how visual augmentations like emojis could transform traditional text programming languages.

* [Meta Is Using The Linux Scheduler Designed For Valve's Steam Deck On Its Servers](https://www.phoronix.com/news/Meta-SCX-LAVD-Steam-Deck-Server) - Meta adopts a specialized Linux scheduler geared for Valve's gaming platform, adapting it for server use cases.

## Artificial Intelligence and Lawsuits

* [John Carreyou and Other Authors Bring New Lawsuit Against Six Major AI Companies](https://yro.slashdot.org/story/25/12/23/2254257/john-carreyou-and-other-authors-bring-new-lawsuit-against-six-major-ai-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Renowned authors file legal action targeting AI companies over intellectual property concerns in text generation.

* [Firefox Will Ship With an “AI Kill Switch” to Completely Disable All AI Features](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss) - Mozilla's Firefox browser introduces a feature to fully opt out of AI integrations, offering users extensive control.

## Software and Development

* [Avoid Mini-Frameworks](https://laike9m.com/blog/avoid-mini-frameworks,171/) - A critique of mini-frameworks, emphasizing their drawbacks in software development projects.

* [Custom Cross Compiler with Nix](https://www.hobson.space/posts/nixcross/) - A guide to creating cross compilers using Nix, streamlining development across multiple architectures.

## Historical and Cultural Insights

* [The e-scooter isn’t new – London was zooming around on Autopeds a century ago](https://www.ianvisits.co.uk/articles/the-e-scooter-isnt-new-london-was-zooming-around-on-autopeds-a-century-ago-86263/) - A historical look at how scooters were integral to transportation in London a hundred years ago.

* [What the Internet Was Like in 2003](https://cybercultural.com/p/internet-2003/) - A nostalgic dive into the internet experience during the early 2000s.

* [Don't Become the Machine](https://armeet.bearblog.dev/becoming-the-machine/) - A reflective blog exploring the dangers of losing individuality in modern technological landscapes.

## Academic and Research Highlights

* [Google 2025 recap: Research breakthroughs of the year](https://blog.google/technology/ai/2025-research-breakthroughs/) - Google's annual review highlights major advancements in artificial intelligence and technology.

* [Correspondence Between Don Knuth and Peter van Emde Boas on Priority Deques 1977 [pdf]](https://staff.fnwi.uva.nl/p.vanemdeboas/knuthnote.pdf) - An archive of historical academic correspondence shedding light on developments in data structure research.

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

* [2025-12-24, 13:00:00](https://yro.slashdot.org/story/25/12/24/0319202/us-bars-five-europeans-it-says-pressured-tech-firms-to-censor-american-viewpoints-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Bars Five Europeans It Says Pressured Tech Firms To Censor American Viewpoints Online](https://yro.slashdot.org/story/25/12/24/0319202/us-bars-five-europeans-it-says-pressured-tech-firms-to-censor-american-viewpoints-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 12:46:10](https://lobste.rs/s/mi8vrp/avoid_mini_frameworks) - [Avoid mini-frameworks](https://laike9m.com/blog/avoid-mini-frameworks,171/)
* [2025-12-24, 12:41:43](https://lobste.rs/s/irewer/implementation_optimized_vector) - [Implementation of optimized vector of strings in C++ in SumatraPDF](https://blog.kowalczyk.info/a-u2y2/implementation-of-optimized-vector-of-strings-in-c-in-sumatrapdf.html)
* [2025-12-24, 12:04:02](https://news.ycombinator.com/item?id=46374856) - [Avoid Mini-Frameworks](https://laike9m.com/blog/avoid-mini-frameworks,171/)
* [2025-12-24, 11:52:00](https://soylentnews.org/article.pl?sid=25/12/22/0124250&amp;from=rss) - [Is Talented Youth Nurtured the Wrong Way? Top Performers Develop Differently Than Assumed](https://soylentnews.org/article.pl?sid=25/12/22/0124250&amp;from=rss)
* [2025-12-24, 11:07:01](https://lobste.rs/s/aqyuga/freebsd_installation_on_thinkpad_x200) - [FreeBSD: Installation on a ThinkPad X200 Tablet in 2025](https://rtfm.co.ua/en/freebsd-installation-on-a-thinkpad-x200-tablet-in-2025/)
* [2025-12-24, 10:48:24](https://news.ycombinator.com/item?id=46374413) - [The Ultimate Windows Utility (2022)](https://christitus.com/windows-tool/)
* [2025-12-24, 10:00:00](https://science.slashdot.org/story/25/12/23/2242225/2015-radio-interview-frames-ai-as-high-level-algebra?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2015 Radio Interview Frames AI As &apos;High-Level Algebra&apos;](https://science.slashdot.org/story/25/12/23/2242225/2015-radio-interview-frames-ai-as-high-level-algebra?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 09:50:52](https://news.ycombinator.com/item?id=46374117) - [Permission Systems for Enterprise That Scale](https://eliocapella.com/blog/permission-systems-for-enterprise/)
* [2025-12-24, 09:30:58](https://news.ycombinator.com/item?id=46374018) - [Google 2025 recap: Research breakthroughs of the year](https://blog.google/technology/ai/2025-research-breakthroughs/)
* [2025-12-24, 08:45:08](https://lobste.rs/s/gqhmvm/interactively_visualize_github_actions) - [Interactively visualize GitHub Actions Matrix configurations](https://katexochen.github.io/github-matrix-parser/)
* [2025-12-24, 08:32:27](https://news.ycombinator.com/item?id=46373644) - [The e-scooter isn&apos;t new – London was zooming around on Autopeds a century ago](https://www.ianvisits.co.uk/articles/the-e-scooter-isnt-new-london-was-zooming-around-on-autopeds-a-century-ago-86263/)
* [2025-12-24, 07:10:00](https://soylentnews.org/article.pl?sid=25/12/22/0121248&amp;from=rss) - [Ford EV Battery Joint Venture Plant Lays Off All Workers](https://soylentnews.org/article.pl?sid=25/12/22/0121248&amp;from=rss)
* [2025-12-24, 07:00:00](https://developers.slashdot.org/story/25/12/24/0323250/what-might-adding-emojis-and-pictures-to-text-programming-languages-look-like?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Might Adding Emojis and Pictures To Text Programming Languages Look Like?](https://developers.slashdot.org/story/25/12/24/0323250/what-might-adding-emojis-and-pictures-to-text-programming-languages-look-like?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 06:10:43](https://lobste.rs/s/gnaplv/what_internet_was_like_2003) - [What the Internet Was Like in 2003](https://cybercultural.com/p/internet-2003/)
* [2025-12-24, 05:31:45](https://news.ycombinator.com/item?id=46372771) - [Custom Cross Compiler with Nix](https://www.hobson.space/posts/nixcross/)
* [2025-12-24, 05:28:46](https://lobste.rs/s/3fytym/custom_cross_compiler_with_nix) - [Custom Cross Compiler with Nix](https://www.hobson.space/posts/nixcross/)
* [2025-12-24, 04:35:28](https://lobste.rs/s/judd04/meta_is_using_linux_scheduler_designed) - [Meta Is Using The Linux Scheduler Designed For Valve&apos;s Steam Deck On Its Servers](https://www.phoronix.com/news/Meta-SCX-LAVD-Steam-Deck-Server)
* [2025-12-24, 03:34:31](https://news.ycombinator.com/item?id=46372153) - [Don&apos;t Become the Machine](https://armeet.bearblog.dev/becoming-the-machine/)
* [2025-12-24, 03:30:00](https://yro.slashdot.org/story/25/12/23/2220226/inside-uzbekistans-nationwide-license-plate-surveillance-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Inside Uzbekistan&apos;s Nationwide License Plate Surveillance System](https://yro.slashdot.org/story/25/12/23/2220226/inside-uzbekistans-nationwide-license-plate-surveillance-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 02:28:00](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss) - [Google Search Now Lets You Upload Images and PDFs for Analysis](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss)
* [2025-12-24, 02:21:42](https://news.ycombinator.com/item?id=46371759) - [Correspondence Between Don Knuth and Peter van Emde Boas on Priority Deques 1977 [pdf]](https://staff.fnwi.uva.nl/p.vanemdeboas/knuthnote.pdf)
* [2025-12-24, 02:18:38](https://news.ycombinator.com/item?id=46371743) - [Show HN: Turn raw HTML into production-ready images for free](https://html2png.dev)
* [2025-12-24, 02:16:01](https://news.ycombinator.com/item?id=46371730) - [Autonomously navigating the real world: lessons from the PG&amp;E outage](https://waymo.com/blog/2025/12/autonomously-navigating-the-real-world)
* [2025-12-24, 02:10:00](https://devices.slashdot.org/story/25/12/23/2247241/ios-263-brings-airpods-like-pairing-to-third-party-devices-in-eu-under-dma?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iOS 26.3 Brings AirPods-Like Pairing To Third-Party Devices In EU Under DMA](https://devices.slashdot.org/story/25/12/23/2247241/ios-263-brings-airpods-like-pairing-to-third-party-devices-in-eu-under-dma?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 01:30:00](https://yro.slashdot.org/story/25/12/23/2254257/john-carreyou-and-other-authors-bring-new-lawsuit-against-six-major-ai-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [John Carreyou and Other Authors Bring New Lawsuit Against Six Major AI Companies](https://yro.slashdot.org/story/25/12/23/2254257/john-carreyou-and-other-authors-bring-new-lawsuit-against-six-major-ai-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 01:21:58](https://news.ycombinator.com/item?id=46371429) - [Open source USB to GPIB converter (for Test and Measurement instruments)](https://github.com/xyphro/UsbGpib)
* [2025-12-24, 01:20:39](https://news.ycombinator.com/item?id=46371423) - [Nabokov&apos;s guide to foreigners learning Russian](https://twitter.com/haravayin_hogh/status/2003299405907247502)
* [2025-12-24, 00:50:00](https://linux.slashdot.org/story/25/12/23/227227/meta-is-using-the-linux-scheduler-designed-for-valves-steam-deck-on-its-servers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Using The Linux Scheduler Designed For Valve&apos;s Steam Deck On Its Servers](https://linux.slashdot.org/story/25/12/23/227227/meta-is-using-the-linux-scheduler-designed-for-valves-steam-deck-on-its-servers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 00:30:18](https://news.ycombinator.com/item?id=46371135) - [Unifi Travel Router](https://blog.ui.com/article/travel-in-style-unifi-style-unifi-travel-router)
* [2025-12-24, 00:10:00](https://slashdot.org/story/25/12/23/2313234/servicenow-to-buy-armis-for-775-billion-as-it-bets-big-on-cybersecurity-for-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ServiceNow To Buy Armis For $7.75 Billion As It Bets Big On Cybersecurity For AI](https://slashdot.org/story/25/12/23/2313234/servicenow-to-buy-armis-for-775-billion-as-it-bets-big-on-cybersecurity-for-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 23:30:00](https://tech.slashdot.org/story/25/12/23/2214235/irelands-diarmuid-early-wins-world-microsoft-excel-title?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ireland&apos;s Diarmuid Early Wins World Microsoft Excel Title](https://tech.slashdot.org/story/25/12/23/2214235/irelands-diarmuid-early-wins-world-microsoft-excel-title?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 22:50:00](https://yro.slashdot.org/story/25/12/23/2235204/judge-blocks-texas-app-store-age-verification-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Blocks Texas App Store Age Verification Law](https://yro.slashdot.org/story/25/12/23/2235204/judge-blocks-texas-app-store-age-verification-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 22:37:54](https://lobste.rs/s/urk73b/they_made_me_offer_i_couldn_t_refuse_1997) - [They made me an offer I couldn&apos;t refuse (1997)](http://jens.mooseyard.com/1997/04/13/they-made-me-an-offer-i-couldnt-refuse/)
* [2025-12-23, 22:10:00](https://yro.slashdot.org/story/25/12/23/222221/limewire-re-emerges-in-online-rush-to-share-pulled-60-minutes-segment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LimeWire Re-Emerges In Online Rush To Share Pulled &apos;60 Minutes&apos; Segment](https://yro.slashdot.org/story/25/12/23/222221/limewire-re-emerges-in-online-rush-to-share-pulled-60-minutes-segment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 22:03:46](https://news.ycombinator.com/item?id=46370012) - [Texas app store age verification law blocked by federal judge](https://www.macrumors.com/2025/12/23/texas-app-store-law-blocked/)
* [2025-12-23, 21:58:43](https://lobste.rs/s/8ugoxw/your_favorite_pieces_technical_writing) - [Your favorite pieces of technical writing?](https://lobste.rs/s/8ugoxw/your_favorite_pieces_technical_writing)
* [2025-12-23, 21:54:30](https://news.ycombinator.com/item?id=46369923) - [X-ray: a Python library for finding bad redactions in PDF documents](https://github.com/freelawproject/x-ray)
* [2025-12-23, 21:47:03](https://lobste.rs/s/aipma8/cpu_cpu_command_go_inspired_by_plan_9_cpu) - [cpu: cpu command in Go, inspired by the Plan 9 cpu command](https://github.com/u-root/cpu)
* [2025-12-23, 21:41:00](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss) - [Firefox Will Ship With an “AI Kill Switch” to Completely Disable All AI Features](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss)
* [2025-12-23, 21:30:00](https://tech.slashdot.org/story/25/12/23/1830242/fragmented-microsoft-tools-undercut-efficiency-at-amazon-and-whole-foods-internal-deloitte-review-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Fragmented&apos; Microsoft Tools Undercut Efficiency at Amazon and Whole Foods, Internal Deloitte Review Finds](https://tech.slashdot.org/story/25/12/23/1830242/fragmented-microsoft-tools-undercut-efficiency-at-amazon-and-whole-foods-internal-deloitte-review-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 20:51:00](https://news.slashdot.org/story/25/12/23/191223/is-the-dictionary-done-for?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the Dictionary Done For?](https://news.slashdot.org/story/25/12/23/191223/is-the-dictionary-done-for?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 20:10:30](https://news.ycombinator.com/item?id=46368946) - [Some Epstein file redactions are being undone with hacks](https://www.theguardian.com/us-news/2025/dec/23/epstein-unredacted-files-social-media)
* [2025-12-23, 20:10:00](https://tech.slashdot.org/story/25/12/23/1843236/europes-public-institutions-are-quietly-ditching-us-cloud-providers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe&apos;s Public Institutions Are Quietly Ditching US Cloud Providers](https://tech.slashdot.org/story/25/12/23/1843236/europes-public-institutions-are-quietly-ditching-us-cloud-providers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 19:44:00](https://entertainment.slashdot.org/story/25/12/23/1944212/samsungs-2026-gaming-monitors-promise-6k-3d-and-up-to-1040hz?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung&apos;s 2026 Gaming Monitors Promise 6K, 3D, and Up To 1,040Hz](https://entertainment.slashdot.org/story/25/12/23/1944212/samsungs-2026-gaming-monitors-promise-6k-3d-and-up-to-1040hz?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 19:41:39](https://news.ycombinator.com/item?id=46368616) - [HTTP Caching, a Refresher](https://danburzo.ro/http-caching-refresher/)
* [2025-12-23, 19:09:45](https://news.ycombinator.com/item?id=46368300) - [Help My c64 caught on fire](https://c0de517e.com/026_c64fire.htm)
* [2025-12-23, 19:09:43](https://lobste.rs/s/zoqaeq/initial_analysis_discovered_unix_v4_tape) - [An initial analysis of the discovered Unix V4 tape](https://www.spinellis.gr/blog/20251223/?yc261223)
* [2025-12-23, 18:59:54](https://lobste.rs/s/nyqw6y/sqlite_wasm_http_experimental_http_vfs) - [sqlite-wasm-http: An experimental HTTP VFS driver for SQLite WASM](https://github.com/mmomtchev/sqlite-wasm-http)
* [2025-12-23, 18:33:01](https://news.ycombinator.com/item?id=46367864) - [Volvo Centum is Dalton Maag&apos;s new typeface for Volvo](https://www.wallpaper.com/design-interiors/corporate-design-branding/volvo-new-font-volvo-centum)
* [2025-12-23, 18:00:31](https://news.ycombinator.com/item?id=46367475) - [We replaced H.264 streaming with JPEG screenshots (and it worked better)](https://blog.helix.ml/p/we-mass-deployed-15-year-old-screen)
* [2025-12-23, 17:33:42](https://news.ycombinator.com/item?id=46367224) - [Fabrice Bellard Releases MicroQuickJS](https://github.com/bellard/mquickjs/blob/main/README.md)
* [2025-12-23, 16:57:00](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss) - [A Better Zip Bomb](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss)
* [2025-12-23, 16:35:53](https://lobste.rs/s/xz6fwz/unix_find_expressions_compiled_bytecode) - [Unix \&quot;find\&quot; expressions compiled to bytecode](https://nullprogram.com/blog/2025/12/23/)
* [2025-12-23, 15:53:35](https://lobste.rs/s/eqsxsc/linux_kernel_is_just_program) - [The Linux kernel is just a program](https://serversfor.dev/linux-inside-out/the-linux-kernel-is-just-a-program/)
* [2025-12-23, 15:50:04](https://lobste.rs/s/mogfta/folder_zone_share_end_end_encrypted) - [folder.zone: Share end-to-end encrypted folders live](https://folder.zone)
* [2025-12-23, 15:47:38](https://lobste.rs/s/kpvesz/reproducing_nixos_25_11_minimal) - [Reproducing the NixOS 25.11 Minimal Installation ISO](https://arnout.engelen.eu/blog/reproducing-nixos-25.11-minimal-iso/)
* [2025-12-23, 14:57:11](https://lobste.rs/s/hcnzsm/wonder_msbuild) - [The wonder of MSBuild](https://mmagueta.capivaras.dev/blog/the-wonder-of-msbuild/)
* [2025-12-23, 14:02:13](https://lobste.rs/s/60fjs1/mquickjs_micro_quickjs_javascript) - [mquickjs: Micro QuickJS Javascript Engine](https://github.com/bellard/mquickjs)
* [2025-12-23, 13:48:00](https://lobste.rs/s/jmj5oa/dirlock) - [dirlock](https://gitlab.steamos.cloud/holo/dirlock)
* [2025-12-23, 13:30:28](https://lobste.rs/s/zs8egh/vigil_clean_fast_build_watcher_for_zig) - [Vigil - A clean, fast build watcher for Zig (inspired by Bacon for Rust)](https://github.com/chase-lambert/vigil)
* [2025-12-23, 12:14:00](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss) - [Titan&apos;s Slushy Oceans](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss)
* [2025-12-23, 11:06:45](https://lobste.rs/s/znesuz/instant_database_clones_with_postgresql) - [Instant database clones with PostgreSQL 18](https://boringsql.com/posts/instant-database-clones/)
* [2025-12-23, 09:52:07](https://lobste.rs/s/ef5wcv/are_we_loong_yet) - [Are we Loong yet?](https://areweloongyet.com/en/)
* [2025-12-23, 07:38:18](https://lobste.rs/s/st1mpl/lightest_notes_app_implementation_111) - [The lightest notes app implementation in 111 loc](https://github.com/antonmedv/textarea)
* [2025-12-23, 07:31:00](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss) - [New UEFI Flaw Enables Pre-Boot Attacks on Motherboards From Gigabyte, MSI, ASUS, ASRock](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss)
* [2025-12-23, 02:44:00](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss) - [Creating Apps Like Signal or WhatsApp Could be &apos;Hostile Activity,&apos; Claims UK Watchdog](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss)
* [2025-12-22, 22:02:00](https://soylentnews.org/article.pl?sid=25/12/21/099243&amp;from=rss) - [Communities Are Rising Up Against Data Centers — and Winning](https://soylentnews.org/article.pl?sid=25/12/21/099243&amp;from=rss)
* [2025-12-22, 21:57:53](https://lobste.rs/s/bhsl9h/i_foretold_mac_app_notarization_is) - [I foretold that Mac app notarization is security theater](https://lapcatsoftware.com/articles/2025/12/5.html)
* [2025-12-22, 19:50:22](https://lobste.rs/s/qbi2ee/lua_5_5_released) - [Lua 5.5 Released](https://www.lua.org/manual/5.5/readme.html#changes)
* [2025-12-22, 17:17:00](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss) - [Where Do Microplastics Go Once They Sink Into the Ocean?](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss)
* [2025-12-22, 15:06:13](https://news.ycombinator.com/item?id=46354674) - [Lua 5.5](https://lua.org/versions.html#5.5)
* [2025-12-22, 12:32:00](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss) - [North Korean Infiltrator Caught Working in Amazon IT Department Thanks to Keystroke Lag](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss)
* [2025-12-22, 07:47:00](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss) - [Google is Shutting Down its Dark Web Report Feature in January](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss)
* [2025-12-22, 03:04:00](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss) - [Senators Count the Shady Ways Data Centers Pass Energy Costs on to Americans](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss)
* [2025-12-21, 22:18:00](https://soylentnews.org/article.pl?sid=25/12/20/1439207&amp;from=rss) - [Google&apos;s New &apos;Disco&apos; Browser Turns Tabs Into Custom Web Apps](https://soylentnews.org/article.pl?sid=25/12/20/1439207&amp;from=rss)
* [2025-12-21, 17:36:00](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss) - [The Secret Life of Moles: What They&apos;re Really Up to Underground](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss)
* [2025-12-21, 12:49:00](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss) - [Public Domain Day 2026](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss)
* [2025-12-21, 10:49:52](https://news.ycombinator.com/item?id=46343894) - [I rebuilt FlashAttention in Triton to understand the performance archaeology](https://aminediro.com/posts/flash_attn/)
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
