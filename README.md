# [News Summary](https://kherrick.github.io/news-summary/)

## Global Politics

* [US attack on Venezuela raises fears of future Greenland takeover](https://www.theguardian.com/world/2026/jan/04/greenland-denmark-us-venezuela-nicolas-maduro-donald-trump) ([comments](https://news.ycombinator.com/item?id=46487444))

## Technology and Innovation

* [The US Effort to Break China's Rare-Earth Monopoly](https://hardware.slashdot.org/story/26/01/04/0515201/the-us-effort-to-break-chinas-rare-earth-monopoly?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/26/01/04/0515201/the-us-effort-to-break-chinas-rare-earth-monopoly?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [3D printed origami](https://youtu.be/FNVBK7-h9Fs) ([comments](https://lobste.rs/s/qlnufk/3d_printed_origami))

* [Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html) ([comments](https://lobste.rs/s/gtm6o1/neural_networks_zero_hero))

* [Corundum – open-source FPGA-based NIC and platform for in-network compute](https://github.com/corundum/corundum) ([comments](https://news.ycombinator.com/item?id=46485101))

* [Gershwin-desktop: OS X-like Desktop Environment based on GNUStep](https://github.com/gershwin-desktop/gershwin-desktop) ([comments](https://news.ycombinator.com/item?id=46484662))

* [Ken Thompson on How A Disk Scheduling Algorithm Became Unix](https://www.youtube.com/watch?v=8E2cCqAS9AM) ([comments](https://lobste.rs/s/jtzqxs/ken_thompson_on_how_disk_scheduling))

* [Swift on Android: Full Native App Development Now Possible](https://docs.swifdroid.com/app/) ([comments](https://news.ycombinator.com/item?id=46483023))

## Scientific Advancements

* [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/01/02/016205&from=rss))

* [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/01/02/0059210&from=rss))

* [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/12/31/1850201&from=rss))

## Society and Culture

* [Reddit Surges in Popularity to Overtake TikTok in the UK - Thanks to Google's Algorithm?](https://tech.slashdot.org/story/26/01/04/0547242/reddit-surges-in-popularity-to-overtake-tiktok-in-the-uk---thanks-to-googles-algorithm?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/26/01/04/0547242/reddit-surges-in-popularity-to-overtake-tiktok-in-the-uk---thanks-to-googles-algorithm?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Ozempic is Changing the Foods Americans Buy](https://soylentnews.org/article.pl?sid=26/01/02/010257&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/01/02/010257&from=rss))

* [Happy New Year 2026 !](https://soylentnews.org/article.pl?sid=25/12/31/0616216&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/12/31/0616216&from=rss))

* [Aging Immune Cells May Rewrite Their Own DNA to Stay Inflammatory](https://soylentnews.org/article.pl?sid=25/12/31/029210&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/12/31/029210&from=rss))

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

* [2026-01-04, 12:50:18](https://news.ycombinator.com/item?id=46487444) - [US attack on Venezuela raises fears of future Greenland takeover](https://www.theguardian.com/world/2026/jan/04/greenland-denmark-us-venezuela-nicolas-maduro-donald-trump)
* [2026-01-04, 12:34:00](https://hardware.slashdot.org/story/26/01/04/0515201/the-us-effort-to-break-chinas-rare-earth-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Effort to Break China&apos;s Rare-Earth Monopoly](https://hardware.slashdot.org/story/26/01/04/0515201/the-us-effort-to-break-chinas-rare-earth-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 12:12:19](https://lobste.rs/s/qlnufk/3d_printed_origami) - [3D printed origami](https://youtu.be/FNVBK7-h9Fs)
* [2026-01-04, 12:10:20](https://lobste.rs/s/nmsoao/quick_easy_gpu_random_numbers_d3d11_2013) - [Quick And Easy GPU Random Numbers In D3D11 (2013)](https://www.reedbeta.com/blog/quick-and-easy-gpu-random-numbers-in-d3d11/)
* [2026-01-04, 11:55:34](https://news.ycombinator.com/item?id=46487120) - [FreeBSD Home NAS, part 3: WireGuard VPN, routing, and Linux peers](https://rtfm.co.ua/en/freebsd-home-nas-part-3-wireguard-vpn-linux-peer-and-routing/)
* [2026-01-04, 11:52:41](https://lobste.rs/s/jxub7u/freebsd_home_nas_part_3_wireguard_vpn) - [FreeBSD Home NAS, part 3: WireGuard VPN, routing, and Linux peers](https://rtfm.co.ua/en/freebsd-home-nas-part-3-wireguard-vpn-linux-peer-and-routing/)
* [2026-01-04, 11:23:23](https://news.ycombinator.com/item?id=46486978) - [JavaScript engines zoo – Compare every JavaScript engine](https://zoo.js.org/)
* [2026-01-04, 10:47:31](https://lobste.rs/s/gxiqwv/saying_goodbye_servers_at_our_physical) - [Saying goodbye to the servers at our physical datacenter - Stack Overflow](https://stackoverflow.blog/2025/12/24/the-great-unracking-saying-goodbye-to-the-servers-at-our-physical-datacenter/)
* [2026-01-04, 10:43:38](https://news.ycombinator.com/item?id=46486780) - [Maybe Comments _Should_ Explain &apos;What&apos;](https://www.hillelwayne.com/post/what-comments/)
* [2026-01-04, 10:35:58](https://news.ycombinator.com/item?id=46486730) - [Was it a billion dollar mistake?](https://www.gingerbill.org/article/2026/01/02/was-it-really-a-billion-dollar-mistake/)
* [2026-01-04, 10:35:41](https://lobste.rs/s/gtm6o1/neural_networks_zero_hero) - [Neural Networks: Zero To Hero](https://karpathy.ai/zero-to-hero.html)
* [2026-01-04, 10:28:49](https://news.ycombinator.com/item?id=46486681) - [Anatomy of BoltzGen](https://huggingface.co/spaces/ludocomito/anatomy-of-boltzgen)
* [2026-01-04, 09:22:00](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss) - [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss)
* [2026-01-04, 09:11:47](https://news.ycombinator.com/item?id=46486326) - [The PGP Problem (2019)](https://www.latacora.com/blog/2019/07/16/the-pgp-problem/)
* [2026-01-04, 08:35:42](https://news.ycombinator.com/item?id=46486135) - [The Gentle Seduction (1989)](http://www.skyhunter.com/marcs/GentleSeduction.html)
* [2026-01-04, 08:34:00](https://tech.slashdot.org/story/26/01/04/0547242/reddit-surges-in-popularity-to-overtake-tiktok-in-the-uk---thanks-to-googles-algorithm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Surges in Popularity to Overtake TikTok in the UK - Thanks to Google&apos;s Algorithm?](https://tech.slashdot.org/story/26/01/04/0547242/reddit-surges-in-popularity-to-overtake-tiktok-in-the-uk---thanks-to-googles-algorithm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 08:11:22](https://news.ycombinator.com/item?id=46485989) - [Can I start using Wayland in 2026?](https://michael.stapelberg.ch/posts/2026-01-04-wayland-sway-in-2026/)
* [2026-01-04, 08:11:07](https://lobste.rs/s/wewhgh/can_i_finally_start_using_wayland_2026) - [Can I finally start using Wayland in 2026?](https://michael.stapelberg.ch/posts/2026-01-04-wayland-sway-in-2026/)
* [2026-01-04, 07:15:46](https://lobste.rs/s/k41lgd/where_good_ideas_come_from_for_coding) - [Where good ideas come from (for coding agents)](https://sunilpai.dev/posts/seven-ways/)
* [2026-01-04, 06:54:50](https://news.ycombinator.com/item?id=46485629) - [Pixoo Sign Client for Ruby](https://github.com/tenderlove/pixoo-rb)
* [2026-01-04, 05:45:20](https://lobste.rs/s/swytpz/unsigned_char_std_basic_string_c) - [Unsigned char std::basic_string&lt;&gt; in C++](https://berthub.eu/articles/posts/unsigned-char-std-string-cpp/)
* [2026-01-04, 05:34:00](https://hardware.slashdot.org/story/26/01/03/238257/new-tesla-video-shows-tesla-semi-electric-truck-charging-at-12-mw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Tesla Video Shows Tesla Semi Electric Truck Charging at 1.2 MW](https://hardware.slashdot.org/story/26/01/03/238257/new-tesla-video-shows-tesla-semi-electric-truck-charging-at-12-mw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 05:04:29](https://news.ycombinator.com/item?id=46485101) - [Corundum – open-source FPGA-based NIC and platform for in-network compute](https://github.com/corundum/corundum)
* [2026-01-04, 05:02:16](https://news.ycombinator.com/item?id=46485090) - [Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html)
* [2026-01-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss) - [Ozempic is Changing the Foods Americans Buy](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss)
* [2026-01-04, 04:31:11](https://news.ycombinator.com/item?id=46484933) - [Show HN: Claude Reflect – Auto-turn Claude corrections into project config](https://github.com/BayramAnnakov/claude-reflect)
* [2026-01-04, 03:44:23](https://news.ycombinator.com/item?id=46484662) - [Gershwin-desktop: OS X-like Desktop Environment based on GNUStep](https://github.com/gershwin-desktop/gershwin-desktop)
* [2026-01-04, 03:28:32](https://lobste.rs/s/za0nkg/building_tls_1_3_implementation_pure) - [Building a TLS 1.3 Implementation in Pure Common Lisp](https://atgreen.github.io/repl-yell/posts/pure-tls/)
* [2026-01-04, 02:38:49](https://lobste.rs/s/dd21hs/street_fighter_ii_world_warrier_2021) - [Street Fighter II, The World Warrier (2021)](https://fabiensanglard.net/sf2_warrier/)
* [2026-01-04, 02:34:00](https://science.slashdot.org/story/26/01/03/2114246/what-happened-when-alaskas-court-system-tried-answering-questions-with-an-ai-chatbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happened When Alaska&apos;s Court System Tried Answering Questions with an AI Chatbot?](https://science.slashdot.org/story/26/01/03/2114246/what-happened-when-alaskas-court-system-tried-answering-questions-with-an-ai-chatbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 02:13:23](https://news.ycombinator.com/item?id=46484104) - [How Thomas Mann Wrote the Magic Mountain](https://www.theguardian.com/books/2025/dec/31/the-master-of-contradictions-by-morten-hi-jensen-review-how-thomas-mann-wrote-the-magic-mountain)
* [2026-01-04, 01:21:56](https://news.ycombinator.com/item?id=46483776) - [MyTorch – Minimalist autograd in 450 lines of Python](https://github.com/obround/mytorch)
* [2026-01-04, 01:14:25](https://lobste.rs/s/1qbwf7/cost_closure_c_rest) - [The Cost of a Closure in C, The Rest](https://thephd.dev/the-cost-of-a-closure-in-c-c2y-followup)
* [2026-01-04, 00:45:54](https://news.ycombinator.com/item?id=46483531) - [Corroded: Illegal Rust](https://github.com/buyukakyuz/corroded)
* [2026-01-04, 00:38:03](https://lobste.rs/s/7f58yw/minikv_little_kv_store_implementation) - [minikv: A little KV store implementation in OCaml to practice DB systems things](https://github.com/alpha-convert/minikv)
* [2026-01-04, 00:31:42](https://news.ycombinator.com/item?id=46483432) - [KDE onboarding is good now](https://rabbitictranslator.com/kde-onboarding/)
* [2026-01-04, 00:30:46](https://lobste.rs/s/52bxvq/kde_onboarding_is_good_now) - [KDE onboarding is good now](https://rabbitictranslator.com/kde-onboarding/)
* [2026-01-03, 23:48:00](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss) - [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss)
* [2026-01-03, 23:45:00](https://tech.slashdot.org/story/26/01/03/0351247/googles-250m-deal-with-california-to-fund-newsrooms-may-be-stalled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s $250M Deal with California to Fund Newsrooms May Be Stalled](https://tech.slashdot.org/story/26/01/03/0351247/googles-250m-deal-with-california-to-fund-newsrooms-may-be-stalled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 23:39:12](https://news.ycombinator.com/item?id=46483023) - [Swift on Android: Full Native App Development Now Possible](https://docs.swifdroid.com/app/)
* [2026-01-03, 23:24:41](https://news.ycombinator.com/item?id=46482877) - [The suck is why we&apos;re here](https://nik.art/the-suck-is-why-were-here/)
* [2026-01-03, 22:45:00](https://tech.slashdot.org/story/26/01/03/1947258/has-microsoft-discontinued-offline-activation-of-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Has Microsoft Discontinued Offline Activation of Windows?](https://tech.slashdot.org/story/26/01/03/1947258/has-microsoft-discontinued-offline-activation-of-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 22:23:34](https://news.ycombinator.com/item?id=46482345) - [Total monthly number of StackOverflow questions over time](https://data.stackexchange.com/stackoverflow/query/1926661#graph)
* [2026-01-03, 21:45:00](https://slashdot.org/story/26/01/03/200236/the-us-invaded-venezuela-and-captured-nicols-maduro---but-chatgpt-and-perplexity-disagree?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Invaded Venezuela and Captured Nicol&amp;#225;s Maduro - But ChatGPT and Perplexity Disagree](https://slashdot.org/story/26/01/03/200236/the-us-invaded-venezuela-and-captured-nicols-maduro---but-chatgpt-and-perplexity-disagree?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 21:26:07](https://lobste.rs/s/snn5k8/enterprise_integration_patterns) - [Enterprise Integration Patterns: The Routing Slip](https://james-carr.org/posts/2025-01-02-advent-of-eip-day-9-routing-slip/)
* [2026-01-03, 20:46:05](https://lobste.rs/s/kw6ndy/notes_on_expression_problem_type_design) - [Notes on the expression problem and type design (2018)](https://www.tedinski.com/2018/03/06/more-on-the-expression-problem.html)
* [2026-01-03, 20:45:00](https://science.slashdot.org/story/26/01/03/075205/spacex-lowering-orbits-of-4400-starlink-satellites-for-safetys-sake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Lowering Orbits of 4,400 Starlink Satellites for Safety&apos;s Sake](https://science.slashdot.org/story/26/01/03/075205/spacex-lowering-orbits-of-4400-starlink-satellites-for-safetys-sake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 19:45:00](https://it.slashdot.org/story/26/01/03/0510258/could-ai-bring-us-four-day-workweeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could AI Bring Us Four-Day Workweeks?](https://it.slashdot.org/story/26/01/03/0510258/could-ai-bring-us-four-day-workweeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss) - [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss)
* [2026-01-03, 17:45:00](https://news.slashdot.org/story/26/01/03/1740239/airlines-cancel-hundreds-of-flights-after-us-attack-on-venezuela?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airlines Cancel Hundreds of Flights After U.S. Attack on Venezuela](https://news.slashdot.org/story/26/01/03/1740239/airlines-cancel-hundreds-of-flights-after-us-attack-on-venezuela?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 17:33:29](https://lobste.rs/s/ie1366/amiga_desktops_worth_seeing) - [Amiga Desktops Worth Seeing](https://www.datagubbe.se/wbshots/)
* [2026-01-03, 17:16:24](https://lobste.rs/s/o5e7gm/who_owns_memory_part_1_what_is_object) - [Who Owns the Memory? Part 1: What is an Object?](https://lukefleed.xyz/posts/who-owns-the-memory-pt1/)
* [2026-01-03, 17:04:30](https://lobste.rs/s/jtzqxs/ken_thompson_on_how_disk_scheduling) - [Ken Thompson on How A Disk Scheduling Algorithm Became Unix](https://www.youtube.com/watch?v=8E2cCqAS9AM)
* [2026-01-03, 16:34:00](https://news.slashdot.org/story/26/01/03/0429234/interference-with-americas-gps-system-has-grown-dramatically?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Interference With America&apos;s GPS System &apos;Has Grown Dramatically&apos;](https://news.slashdot.org/story/26/01/03/0429234/interference-with-americas-gps-system-has-grown-dramatically?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 16:20:10](https://news.ycombinator.com/item?id=46478377) - [The Most Popular Blogs of Hacker News in 2025](https://refactoringenglish.com/blog/2025-hn-top-5/)
* [2026-01-03, 16:03:43](https://lobste.rs/s/awxarg/how_i_browse_web_2026) - [How I browse the web in 2026](https://bastiangruber.ca/posts/how-i-browse-the-web-in-2026/)
* [2026-01-03, 15:34:00](https://it.slashdot.org/story/26/01/03/0259241/jobs-vulnerable-to-ai-replacement-actually-thriving-not-dying-out-report-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jobs Vulnerable to AI Replacement Actually &apos;Thriving, Not Dying Out&apos;, Report Suggests](https://it.slashdot.org/story/26/01/03/0259241/jobs-vulnerable-to-ai-replacement-actually-thriving-not-dying-out-report-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 14:19:00](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss) - [Start-Up Proposes Scaled Up AI Data Center &apos;Active Radio Cable&apos; Connectivity](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss)
* [2026-01-03, 12:01:00](https://science.slashdot.org/story/26/01/02/196256/after-half-a-decade-the-russian-space-station-segment-stopped-leaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Half a Decade, the Russian Space Station Segment Stopped Leaking](https://science.slashdot.org/story/26/01/02/196256/after-half-a-decade-the-russian-space-station-segment-stopped-leaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 11:47:26](https://lobste.rs/s/9zqi2z/who_s_hiring_q1_2026) - [Who&apos;s Hiring? Q1 2026](https://lobste.rs/s/9zqi2z/who_s_hiring_q1_2026)
* [2026-01-03, 09:30:00](https://news.slashdot.org/story/26/01/02/1919255/nyc-phone-ban-reveals-some-students-cant-read-clocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYC Phone Ban Reveals Some Students Can&apos;t Read Clocks](https://news.slashdot.org/story/26/01/02/1919255/nyc-phone-ban-reveals-some-students-cant-read-clocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 09:30:00](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss) - [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss)
* [2026-01-03, 09:05:32](https://lobste.rs/s/fdhsz0/freebsd_home_nas_part_2_introduction_pf) - [FreeBSD Home NAS, part 2: Introduction to the PF firewall](https://rtfm.co.ua/en/freebsd-home-nas-part-2-introduction-to-packet-filter-pf-firewall/)
* [2026-01-03, 08:31:24](https://lobste.rs/s/xxyfaq/kimwolf_botnet_is_stalking_your_local) - [The Kimwolf Botnet is Stalking Your Local Network](https://krebsonsecurity.com/2026/01/the-kimwolf-botnet-is-stalking-your-local-network/)
* [2026-01-03, 06:01:00](https://science.slashdot.org/story/26/01/02/1954229/economic-inequality-does-not-equate-to-poor-well-being-or-mental-health-massive-meta-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Economic Inequality Does Not Equate To Poor Well-Being or Mental Health, Massive Meta-Analysis Finds](https://science.slashdot.org/story/26/01/02/1954229/economic-inequality-does-not-equate-to-poor-well-being-or-mental-health-massive-meta-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 04:45:00](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss) - [QNX Releases New Desktop-Focused Image: QNX 8.0 With Xfce on Wayland](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss)
* [2026-01-03, 01:08:35](https://news.ycombinator.com/item?id=46471648) - [Show HN: I used AI to recreate a $4000 piece of audio hardware as a plugin](https://news.ycombinator.com/item?id=46471648)
* [2026-01-03, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss) - [For Computational Devices, Talk Isn&apos;t Cheap](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss)
* [2026-01-02, 22:14:29](https://lobste.rs/s/lifxkp/why_i_switched_away_from_zig_c3) - [Why I switched away from Zig to C3](https://lowbytefox.dev/blog/from-zig-to-c3/)
* [2026-01-02, 19:18:00](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss) - [FDA Officially Confirms Kava is a Food Under Federal Law](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss)
* [2026-01-02, 16:09:05](https://lobste.rs/s/eulydi/which_programming_resource_changed_your) - [which programming resource changed your career?](https://lobste.rs/s/eulydi/which_programming_resource_changed_your)
* [2026-01-02, 15:49:33](https://lobste.rs/s/bdzmde/i_m_brave_enough_say_it_linux_is_good_now_if) - [I&apos;m brave enough to say it: Linux is good now, and if you want to feel like you actually own your PC, make 2026 the year of Linux on (your) desktop](https://www.pcgamer.com/software/linux/im-brave-enough-to-say-it-linux-is-good-now-and-if-you-want-to-feel-like-you-actually-own-your-pc-make-2026-the-year-of-linux-on-your-desktop/)
* [2026-01-02, 14:35:00](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss) - [Irish Gov’t to Push for European Union to Ban Anonymous Social Media Accounts](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss)
* [2026-01-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss) - [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss)
* [2026-01-02, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss) - [39C3: Multiple Vulnerabilities in GnuPG and Other Cryptographic Tools](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss)
* [2026-01-02, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss) - [Funding Agencies Can End Profit-First Science Publishing](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss)
* [2026-01-01, 19:38:00](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss) - [Aging Immune Cells May Rewrite Their Own DNA to Stay Inflammatory](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss)
* [2026-01-01, 14:46:00](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss) - [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss)
* [2026-01-01, 10:03:00](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss) - [D7VK Reaches Version 1.1 and Adds New Frontend and Experimental Direct3D 6 Support](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss)
* [2026-01-01, 10:02:00](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss) - [Study Reveals Just How Much AI Slop is on YouTube](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss)
* [2026-01-01, 05:15:00](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss) - [US Insurance Giant Aflac Says Hackers Stole Personal and Health Data of 22.6 Million People](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss)
* [2026-01-01, 00:37:00](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss) - [Not Everyone Reads the Room the Same](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss)
* [2026-01-01, 00:00:00](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss) - [Happy New Year 2026 !](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss)
* [2025-12-31, 19:46:00](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss) - [Jolla&apos;s Community Linux Phone Surpasses its Funding Goal](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss)
* [2025-12-31, 15:03:00](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss) - [Closure of US Institute Will Do Immense Harm to Climate Research](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss)
* [2025-12-31, 10:20:00](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss) - [Company Plans to Build Swarm of 4,000 Giant Mirrors in Low Earth Orbit to “Sell Sunlight\&quot; at Night](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss)
* [2025-12-31, 05:35:00](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss) - [Spotify Disables Accounts After Open-Source Group Scrapes 86 Million Songs From Platform](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss)
* [2025-12-31, 02:23:30](https://news.ycombinator.com/item?id=46440637) - [Using AI generated images to get refunds](https://www.wired.com/story/scammers-in-china-are-using-ai-generated-images-to-get-refunds/)
* [2025-12-31, 00:53:00](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss) - [Is Proton Leaving Switzerland? \&quot;Legal Uncertainty\&quot; of Proposed Surveillance Laws Would be the Reason](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss)
* [2025-12-31, 00:10:19](https://news.ycombinator.com/item?id=46439816) - [The First Video Game Came Long Before Pong](https://www.iflscience.com/the-first-video-game-came-long-before-pong-and-was-invented-by-a-manhattan-project-physicist-81262)
