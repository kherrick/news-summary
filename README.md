# [News Summary](https://kherrick.github.io/news-summary/)

## Space Exploration and Technology

* [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss) - A UK company makes strides in understanding off-planet manufacturing with a high-temperature furnace.

* [SpaceX Lowering Orbits of 4,400 Starlink Satellites for Safety's Sake](https://science.slashdot.org/story/26/01/03/075205/spacex-lowering-orbits-of-4400-starlink-satellites-for-safetys-sake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - SpaceX aims to enhance the safety of its satellite constellation by lowering their orbits.

* [Seven night sky spectacles to watch for in 2026](https://www.bbc.com/weather/articles/cn975wrrvy9o) - A guide to upcoming celestial events worth witnessing in the year 2026.

## Software and Programming Developments

* [A Basic Just-In-Time Compiler (2015)](https://nullprogram.com/blog/2015/03/19/) - An exploration of a simpler just-in-time compiler from 2015.

* [Gnu indirect function](https://maskray.me/blog/2021-01-18-gnu-indirect-function) - Insights into GNU indirect functions and their implementation history.

* [The C3 Programming Language](https://c3-lang.org) - Introducing the C3 programming language, exploring its features and specifications.

* [Ken Thompson on How A Disk Scheduling Algorithm Became Unix](https://www.youtube.com/watch?v=8E2cCqAS9AM) - Unix co-creator Ken Thompson reflects on the integration of a disk scheduling algorithm into Unix.

* [Is tree-sitter good enough? (2022)](https://blog.jez.io/tree-sitter-limitations/) - A critical review of the tree-sitter parsing library.

* [This is the Xsight Labs E1 DPU a 64-Core Arm Neoverse N2 800G DPU](https://www.servethehome.com/this-is-the-xsight-labs-e1-dpu-a-64-core-arm-neoverse-n2-800g-dpu/) - Learn about the innovative 64-core processor redefining hardware capabilities.

## Technology and Security Issues

* [Microsoft kills official way to activate Windows 11/10 without internet](https://www.neowin.net/news/report-microsoft-quietly-kills-official-way-to-activate-windows-1110-without-internet/#google_vignette) - Microsoft's recent policy change affects offline Windows activation.

* [Bypassing RP2350's Secure Boot](https://media.ccc.de/v/39c3-of-boot-vectors-and-double-glitches-bypassing-rp2350-s-secure-boot) - Researchers demonstrate bypassing a secure boot mechanism.

* [The Kimwolf Botnet is Stalking Your Local Network](https://krebsonsecurity.com/2026/01/the-kimwolf-botnet-is-stalking-your-local-network/) - Insights into a botnet's threat to local networks.

* [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss) - Highlighting vulnerabilities in server infrastructures and their exploitation.

## Artificial Intelligence and Society

* [Could AI Bring Us Four-Day Workweeks?](https://it.slashdot.org/story/26/01/03/0510258/could-ai-bring-us-four-day-workweeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analyzing the role of AI in reshaping traditional workweeks.

* [Jobs Vulnerable to AI Replacement Actually 'Thriving, Not Dying Out', Report Suggests](https://it.slashdot.org/story/26/01/03/0259241/jobs-vulnerable-to-ai-replacement-actually-thriving-not-dying-out-report-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Report finds surprising trends in job markets often considered at risk from automation.

* [Recursive Language Models](https://arxiv.org/abs/2512.24601) - Delving into how recursive language models are shaping the future of AI.

## Environmental and Scientific Studies

* [As deep-sea mining race ramps up, mission will assess whether ecosystems recover](https://www.science.org/content/article/deep-sea-mining-race-ramps-mission-will-assess-whether-ecosystems-recover-afterward) - Examining the ecological impact of deep-sea mining.

* [Economic Inequality Does Not Equate To Poor Well-Being or Mental Health, Massive Meta-Analysis Finds](https://science.slashdot.org/story/26/01/02/1954229/economic-inequality-does-not-equate-to-poor-well-being-or-mental-health-massive-meta-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - New research reveals surprising insights into the effects of economic disparity.

## Geopolitics and Current Affairs

* [The US Invaded Venezuela and Captured Nicolás Maduro - But ChatGPT and Perplexity Disagree](https://slashdot.org/story/26/01/03/200236/the-us-invaded-venezuela-and-captured-nicols-maduro---but-chatgpt-and-perplexity-disagree?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Questions arise amid AI commentary on Venezuelan geopolitics.

## Quirky and Unique Discoveries

* [Show HN: Vibe Coding a static site on a $25 Walmart Phone](https://stetsonblake.com/%2425+Walmart+Phone+for+Hackers) - A developer showcases creating a static website using a $25 phone from Walmart.

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

* [2026-01-03, 21:45:00](https://slashdot.org/story/26/01/03/200236/the-us-invaded-venezuela-and-captured-nicols-maduro---but-chatgpt-and-perplexity-disagree?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Invaded Venezuela and Captured Nicol&amp;#225;s Maduro - But ChatGPT and Perplexity Disagree](https://slashdot.org/story/26/01/03/200236/the-us-invaded-venezuela-and-captured-nicols-maduro---but-chatgpt-and-perplexity-disagree?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 21:42:12](https://lobste.rs/s/sshwph/basic_just_time_compiler_2015) - [A Basic Just-In-Time Compiler (2015)](https://nullprogram.com/blog/2015/03/19/)
* [2026-01-03, 21:26:07](https://lobste.rs/s/snn5k8/enterprise_integration_patterns) - [Enterprise Integration Patterns: The Routing Slip](https://james-carr.org/posts/2025-01-02-advent-of-eip-day-9-routing-slip/)
* [2026-01-03, 21:05:49](https://lobste.rs/s/vryfvf/seven_night_sky_spectacles_watch_for_2026) - [Seven night sky spectacles to watch for in 2026](https://www.bbc.com/weather/articles/cn975wrrvy9o)
* [2026-01-03, 20:46:05](https://lobste.rs/s/kw6ndy/notes_on_expression_problem_type_design) - [Notes on the expression problem and type design](https://www.tedinski.com/2018/03/06/more-on-the-expression-problem.html)
* [2026-01-03, 20:45:00](https://science.slashdot.org/story/26/01/03/075205/spacex-lowering-orbits-of-4400-starlink-satellites-for-safetys-sake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Lowering Orbits of 4,400 Starlink Satellites for Safety&apos;s Sake](https://science.slashdot.org/story/26/01/03/075205/spacex-lowering-orbits-of-4400-starlink-satellites-for-safetys-sake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 19:45:00](https://it.slashdot.org/story/26/01/03/0510258/could-ai-bring-us-four-day-workweeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could AI Bring Us Four-Day Workweeks?](https://it.slashdot.org/story/26/01/03/0510258/could-ai-bring-us-four-day-workweeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 19:39:46](https://news.ycombinator.com/item?id=46480677) - [Show HN: Vibe Coding a static site on a $25 Walmart Phone](https://stetsonblake.com/%2425+Walmart+Phone+for+Hackers)
* [2026-01-03, 19:34:52](https://news.ycombinator.com/item?id=46480614) - [Xsight Labs E1 DPU a 64-Core Arm Neoverse N2 800G DPU](https://www.servethehome.com/this-is-the-xsight-labs-e1-dpu-a-64-core-arm-neoverse-n2-800g-dpu/)
* [2026-01-03, 19:25:36](https://news.ycombinator.com/item?id=46480491) - [Doesnt: An Esoteric Programming Language](https://lists.sr.ht/~rabbits/horadric/%3C5d708fd1-1c01-4fb6-a8e5-61213a1e88f8@sheeeeeeeep.art%3E)
* [2026-01-03, 19:14:39](https://news.ycombinator.com/item?id=46480373) - [As deep-sea mining race ramps up, mission will assess whether ecosystems recover](https://www.science.org/content/article/deep-sea-mining-race-ramps-mission-will-assess-whether-ecosystems-recover-afterward)
* [2026-01-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss) - [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss)
* [2026-01-03, 18:53:10](https://news.ycombinator.com/item?id=46480156) - [Microsoft kills official way to activate Windows 11/10 without internet](https://www.neowin.net/news/report-microsoft-quietly-kills-official-way-to-activate-windows-1110-without-internet/#google_vignette)
* [2026-01-03, 18:24:52](https://lobste.rs/s/knttmv/gnu_indirect_function) - [GNU indirect function](https://maskray.me/blog/2021-01-18-gnu-indirect-function)
* [2026-01-03, 18:10:21](https://news.ycombinator.com/item?id=46479673) - [Xr0 verifier, guarantee the safety of C programs at compile time](https://xr0.dev)
* [2026-01-03, 17:45:00](https://news.slashdot.org/story/26/01/03/1740239/airlines-cancel-hundreds-of-flights-after-us-attack-on-venezuela?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airlines Cancel Hundreds of Flights After U.S. Attack on Venezuela](https://news.slashdot.org/story/26/01/03/1740239/airlines-cancel-hundreds-of-flights-after-us-attack-on-venezuela?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 17:33:29](https://lobste.rs/s/ie1366/amiga_desktops_worth_seeing) - [Amiga Desktops Worth Seeing](https://www.datagubbe.se/wbshots/)
* [2026-01-03, 17:16:24](https://lobste.rs/s/o5e7gm/who_owns_memory_part_1_what_is_object) - [Who Owns the Memory? Part 1: What is an Object?](https://lukefleed.xyz/posts/who-owns-the-memory-pt1/)
* [2026-01-03, 17:04:30](https://lobste.rs/s/jtzqxs/ken_thompson_on_how_disk_scheduling) - [Ken Thompson on How A Disk Scheduling Algorithm Became Unix](https://www.youtube.com/watch?v=8E2cCqAS9AM)
* [2026-01-03, 16:41:06](https://news.ycombinator.com/item?id=46478647) - [The C3 Programming Language](https://c3-lang.org)
* [2026-01-03, 16:34:00](https://news.slashdot.org/story/26/01/03/0429234/interference-with-americas-gps-system-has-grown-dramatically?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Interference With America&apos;s GPS System &apos;Has Grown Dramatically&apos;](https://news.slashdot.org/story/26/01/03/0429234/interference-with-americas-gps-system-has-grown-dramatically?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 16:20:10](https://news.ycombinator.com/item?id=46478377) - [The Most Popular Blogs of Hacker News in 2025](https://refactoringenglish.com/blog/2025-hn-top-5/)
* [2026-01-03, 16:03:43](https://lobste.rs/s/awxarg/how_i_browse_web_2026) - [How I browse the web in 2026](https://bastiangruber.ca/posts/how-i-browse-the-web-in-2026/)
* [2026-01-03, 15:55:16](https://news.ycombinator.com/item?id=46478061) - [Show HN: Offline tiles and routing and geocoding in one Docker Compose stack](https://www.corviont.com/)
* [2026-01-03, 15:34:00](https://it.slashdot.org/story/26/01/03/0259241/jobs-vulnerable-to-ai-replacement-actually-thriving-not-dying-out-report-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jobs Vulnerable to AI Replacement Actually &apos;Thriving, Not Dying Out&apos;, Report Suggests](https://it.slashdot.org/story/26/01/03/0259241/jobs-vulnerable-to-ai-replacement-actually-thriving-not-dying-out-report-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 14:19:00](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss) - [Start-Up Proposes Scaled Up AI Data Center &apos;Active Radio Cable&apos; Connectivity](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss)
* [2026-01-03, 13:53:34](https://news.ycombinator.com/item?id=46476636) - [ParadeDB (YC S23) Is Hiring Database Engineers](https://paradedb.notion.site/?p=172ea4ce9deb80898ef5d5097bd65544&amp;pm=s)
* [2026-01-03, 12:01:00](https://science.slashdot.org/story/26/01/02/196256/after-half-a-decade-the-russian-space-station-segment-stopped-leaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Half a Decade, the Russian Space Station Segment Stopped Leaking](https://science.slashdot.org/story/26/01/02/196256/after-half-a-decade-the-russian-space-station-segment-stopped-leaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 11:52:38](https://lobste.rs/s/c8qkpe/bypassing_rp2350_s_secure_boot) - [Bypassing RP2350&apos;s Secure Boot](https://media.ccc.de/v/39c3-of-boot-vectors-and-double-glitches-bypassing-rp2350-s-secure-boot)
* [2026-01-03, 11:47:26](https://lobste.rs/s/9zqi2z/who_s_hiring_q1_2026) - [Who&apos;s Hiring? Q1 2026](https://lobste.rs/s/9zqi2z/who_s_hiring_q1_2026)
* [2026-01-03, 11:37:07](https://news.ycombinator.com/item?id=46475437) - [X-Clacks-Overhead](https://hleb.dev/post/x-clacks-overhead/)
* [2026-01-03, 11:29:33](https://news.ycombinator.com/item?id=46475395) - [Recursive Language Models](https://arxiv.org/abs/2512.24601)
* [2026-01-03, 11:13:48](https://news.ycombinator.com/item?id=46475296) - [Profiling with Ctrl-C (2024)](https://yosefk.com/blog/profiling-with-ctrl-c.html)
* [2026-01-03, 10:15:31](https://lobste.rs/s/jvqhlv/linux_kernel_security_work) - [Linux kernel security work](http://www.kroah.com/log/blog/2026/01/02/linux-kernel-security-work/)
* [2026-01-03, 09:30:00](https://news.slashdot.org/story/26/01/02/1919255/nyc-phone-ban-reveals-some-students-cant-read-clocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYC Phone Ban Reveals Some Students Can&apos;t Read Clocks](https://news.slashdot.org/story/26/01/02/1919255/nyc-phone-ban-reveals-some-students-cant-read-clocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 09:30:00](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss) - [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss)
* [2026-01-03, 09:05:32](https://lobste.rs/s/fdhsz0/freebsd_home_nas_part_2_introduction_pf) - [FreeBSD Home NAS, part 2: Introduction to the PF firewall](https://rtfm.co.ua/en/freebsd-home-nas-part-2-introduction-to-packet-filter-pf-firewall/)
* [2026-01-03, 08:31:24](https://lobste.rs/s/xxyfaq/kimwolf_botnet_is_stalking_your_local) - [The Kimwolf Botnet is Stalking Your Local Network](https://krebsonsecurity.com/2026/01/the-kimwolf-botnet-is-stalking-your-local-network/)
* [2026-01-03, 07:36:02](https://lobste.rs/s/o085u1/benchmarking_windows_against_itself) - [Benchmarking Windows Against Itself, From Windows XP To Windows 11](https://hackaday.com/2026/01/02/benchmarking-windows-against-itself-from-windows-xp-to-windows-11/)
* [2026-01-03, 06:35:21](https://news.ycombinator.com/item?id=46473348) - [Trump says Venezuela’s Maduro captured after strikes](https://www.reuters.com/world/americas/loud-noises-heard-venezuela-capital-southern-area-without-electricity-2026-01-03/)
* [2026-01-03, 06:01:00](https://science.slashdot.org/story/26/01/02/1954229/economic-inequality-does-not-equate-to-poor-well-being-or-mental-health-massive-meta-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Economic Inequality Does Not Equate To Poor Well-Being or Mental Health, Massive Meta-Analysis Finds](https://science.slashdot.org/story/26/01/02/1954229/economic-inequality-does-not-equate-to-poor-well-being-or-mental-health-massive-meta-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 04:45:00](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss) - [QNX Releases New Desktop-Focused Image: QNX 8.0 With Xfce on Wayland](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss)
* [2026-01-03, 03:30:00](https://it.slashdot.org/story/26/01/02/192248/dells-xps-brand-may-return-just-a-year-after-being-retired-report-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dell&apos;s XPS Brand May Return Just a Year After Being Retired, Report Claims](https://it.slashdot.org/story/26/01/02/192248/dells-xps-brand-may-return-just-a-year-after-being-retired-report-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 02:08:22](https://lobste.rs/s/opvscn/is_tree_sitter_good_enough_2022) - [Is tree-sitter good enough? (2022)](https://blog.jez.io/tree-sitter-limitations/)
* [2026-01-03, 01:30:00](https://slashdot.org/story/26/01/02/1851202/microsoft-ceo-time-to-move-beyond-the-arguments-of-slop-vs-sophistication?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft CEO: Time To Move &apos;Beyond the Arguments of Slop vs Sophistication&apos;](https://slashdot.org/story/26/01/02/1851202/microsoft-ceo-time-to-move-beyond-the-arguments-of-slop-vs-sophistication?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 00:15:47](https://news.ycombinator.com/item?id=46471199) - [2026 will be my year of the Linux desktop](https://xeiaso.net/notes/2026/year-linux-desktop/)
* [2026-01-03, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss) - [For Computational Devices, Talk Isn&apos;t Cheap](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss)
* [2026-01-02, 23:34:01](https://lobste.rs/s/hptqsw/how_html_changes_epub) - [How HTML changes in ePub](https://www.htmhell.dev/adventcalendar/2025/11/)
* [2026-01-02, 23:31:00](https://entertainment.slashdot.org/story/26/01/02/1832200/mtvs-music-only-channels-go-off-the-air?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MTV&apos;s Music-Only Channels Go Off the Air](https://entertainment.slashdot.org/story/26/01/02/1832200/mtvs-music-only-channels-go-off-the-air?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 22:14:29](https://lobste.rs/s/lifxkp/why_i_switched_away_from_zig_c3) - [Why I switched away from Zig to C3](https://lowbytefox.dev/blog/from-zig-to-c3/)
* [2026-01-02, 21:31:34](https://news.ycombinator.com/item?id=46469623) - [Linux kernel security work](http://www.kroah.com/log/blog/2026/01/02/linux-kernel-security-work/)
* [2026-01-02, 21:30:00](https://tech.slashdot.org/story/26/01/02/188203/google-ai-overviews-put-people-at-risk-of-harm-with-misleading-health-advice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google AI Overviews Put People at Risk of Harm With Misleading Health Advice](https://tech.slashdot.org/story/26/01/02/188203/google-ai-overviews-put-people-at-risk-of-harm-with-misleading-health-advice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 21:27:44](https://news.ycombinator.com/item?id=46469577) - [Daft Punk Easter Egg in the BPM Tempo of Harder, Better, Faster, Stronger?](https://www.madebywindmill.com/tempi/blog/hbfs-bpm/)
* [2026-01-02, 21:12:14](https://lobste.rs/s/trudnc/state_server_2026) - [State of the Server 2026](https://theorangeone.net/posts/state-of-the-server-2026/)
* [2026-01-02, 20:01:00](https://news.slashdot.org/story/26/01/02/182247/trump-signs-defense-bill-prohibiting-china-based-engineers-in-pentagon-it-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Signs Defense Bill Prohibiting China-Based Engineers in Pentagon IT Work](https://news.slashdot.org/story/26/01/02/182247/trump-signs-defense-bill-prohibiting-china-based-engineers-in-pentagon-it-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 19:48:25](https://news.ycombinator.com/item?id=46468600) - [Publish on your own site, syndicate elsewhere](https://indieweb.org/POSSE#)
* [2026-01-02, 19:36:30](https://lobste.rs/s/fcwjie/was_it_really_billion_dollar_mistake) - [Was it really a Billion Dollar Mistake?](https://www.gingerbill.org/article/2026/01/02/was-it-really-a-billion-dollar-mistake/)
* [2026-01-02, 19:18:00](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss) - [FDA Officially Confirms Kava is a Food Under Federal Law](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss)
* [2026-01-02, 19:01:00](https://slashdot.org/story/26/01/02/1719244/amd-closes-in-on-intel-in-latest-steam-hardware-survey?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMD Closes in on Intel in Latest Steam Hardware Survey](https://slashdot.org/story/26/01/02/1719244/amd-closes-in-on-intel-in-latest-steam-hardware-survey?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 17:23:34](https://lobste.rs/s/1lcrer/darktable_styles_mimicing_fujifilm_s) - [Darktable Styles mimicing Fujifilm&apos;s Film Simulations](https://jssfr.de/dtsolve/2026-01-02-darktable-styles-fujifilm.html)
* [2026-01-02, 17:22:04](https://news.ycombinator.com/item?id=46467057) - [Clicks Communicator](https://www.clicksphone.com/en/communicator)
* [2026-01-02, 16:51:28](https://lobste.rs/s/tdxrs5/releasing_fjall_3_0) - [Releasing Fjall 3.0](https://fjall-rs.github.io/post/fjall-3/)
* [2026-01-02, 16:09:05](https://lobste.rs/s/eulydi/which_programming_resource_changed_your) - [which programming resource changed your career?](https://lobste.rs/s/eulydi/which_programming_resource_changed_your)
* [2026-01-02, 16:00:42](https://news.ycombinator.com/item?id=46466074) - [Ask HN: Who is hiring? (January 2026)](https://news.ycombinator.com/item?id=46466074)
* [2026-01-02, 15:49:33](https://lobste.rs/s/bdzmde/i_m_brave_enough_say_it_linux_is_good_now_if) - [I&apos;m brave enough to say it: Linux is good now, and if you want to feel like you actually own your PC, make 2026 the year of Linux on (your) desktop](https://www.pcgamer.com/software/linux/im-brave-enough-to-say-it-linux-is-good-now-and-if-you-want-to-feel-like-you-actually-own-your-pc-make-2026-the-year-of-linux-on-your-desktop/)
* [2026-01-02, 14:55:09](https://news.ycombinator.com/item?id=46465327) - [IPv6 just turned 30 and still hasn&apos;t taken over the world](https://www.theregister.com/2025/12/31/ipv6_at_30/)
* [2026-01-02, 14:35:00](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss) - [Irish Gov’t to Push for European Union to Ban Anonymous Social Media Accounts](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss)
* [2026-01-02, 12:26:55](https://lobste.rs/s/lrx8vc/assorted_less_1_tips) - [Assorted less(1) tips](https://blog.thechases.com/posts/assorted-less-tips/)
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
* [2025-12-31, 13:00:42](https://news.ycombinator.com/item?id=46443730) - [A Beginner&apos;s Two-Component Crystal-Style Wi-Fi Detector](https://siliconjunction.wordpress.com/2025/12/12/a-beginners-two-component-crystal-style-wi-fi-detector/)
* [2025-12-31, 10:20:00](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss) - [Company Plans to Build Swarm of 4,000 Giant Mirrors in Low Earth Orbit to “Sell Sunlight\&quot; at Night](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss)
* [2025-12-31, 09:16:58](https://news.ycombinator.com/item?id=46442624) - [Cadova: Swift DSL for parametric 3D modeling](https://github.com/tomasf/Cadova)
* [2025-12-31, 08:04:30](https://news.ycombinator.com/item?id=46442293) - [UK company sends factory with 1,000C furnace into space](https://www.bbc.co.uk/news/articles/c62vx0pgyrgo)
* [2025-12-31, 05:54:06](https://news.ycombinator.com/item?id=46441781) - [Sirius DB](https://www.sirius-db.com/)
* [2025-12-31, 05:35:00](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss) - [Spotify Disables Accounts After Open-Source Group Scrapes 86 Million Songs From Platform](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss)
* [2025-12-31, 00:53:00](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss) - [Is Proton Leaving Switzerland? \&quot;Legal Uncertainty\&quot; of Proposed Surveillance Laws Would be the Reason](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss)
* [2025-12-31, 00:43:30](https://news.ycombinator.com/item?id=46440037) - [Exploring Dithering on Spectra 6-color E-Ink Displays](https://myembeddedstuff.com/e-ink-spectra-6-color)
* [2025-12-30, 20:04:00](https://soylentnews.org/article.pl?sid=25/12/28/1123222&amp;from=rss) - [Beware of OpenAI&apos;s &apos;Grantwashing&apos; on AI Harms](https://soylentnews.org/article.pl?sid=25/12/28/1123222&amp;from=rss)
* [2025-12-30, 15:23:00](https://soylentnews.org/article.pl?sid=25/12/28/1121243&amp;from=rss) - [First Ever Version of UNIX Written in C is Running Again](https://soylentnews.org/article.pl?sid=25/12/28/1121243&amp;from=rss)
* [2025-12-30, 15:03:12](https://news.ycombinator.com/item?id=46433967) - [Beating myself at chess](https://log.schemescape.com/posts/diy/beating-myself-at-chess.html)
* [2025-12-30, 10:36:00](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss) - [South Korea to Require Facial Recognition for New Mobile Numbers](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss)
* [2025-12-30, 05:53:00](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss) - [Phoenix Emerges as a Modern X Server Written From Scratch in Zig](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss)
* [2025-12-30, 02:43:50](https://news.ycombinator.com/item?id=46428922) - [Experiments with Ableton-MCP](https://jhurliman.org/post/804323197731373056/experiments-with-ableton-mcp-dec-2025)
* [2025-12-30, 01:12:00](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss) - [Shouting at Seagulls Could Stop Them Stealing Your Food](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss)
