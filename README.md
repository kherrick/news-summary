# [News Summary](https://kherrick.github.io/news-summary/)

## Browser Innovations

* [Vivaldi 8.0 Arrives With 'Most Significant Design Overhaul' In Browser's History](https://tech.slashdot.org/story/26/05/21/1921205/vivaldi-80-arrives-with-most-significant-design-overhaul-in-browsers-history?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Announcing Web Serial Support in Firefox](https://hacks.mozilla.org/2026/05/web-serial-support-in-firefox/)

## Tech Industry and AI Developments

* [Trump Calls Off AI Executive Order Over Concern It Could Weaken US Tech Edge](https://yro.slashdot.org/story/26/05/21/2034246/trump-calls-off-ai-executive-order-over-concern-it-could-weaken-us-tech-edge?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Intuit To Lay Off Over 3,000 Employees To Refocus On AI](https://slashdot.org/story/26/05/20/2038203/intuit-to-lay-off-over-3000-employees-to-refocus-on-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Google Publishes Exploit Code Threatening Millions of Chromium Users](https://it.slashdot.org/story/26/05/20/2013252/google-publishes-exploit-code-threatening-millions-of-chromium-users?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cybersecurity Updates

* [CVE-2026-47243: Kata Containers guest-root to host-root escape via virtiofs](https://www.openwall.com/lists/oss-security/2026/05/21/14)

* [FatGid - FreeBSD 14.x kernel LPE](https://fatgid.io/)

* [Chromium publishes fixed exploit 4 years later, turns out it's actually unfixed](https://infosec.exchange/@rebane2001/116606719764376414)

## Quantum and Space Discoveries

* [US To Award $2 Billion To Quantum Companies, Take Equity Stakes](https://yro.slashdot.org/story/26/05/21/1758205/us-to-award-2-billion-to-quantum-companies-take-equity-stakes?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [NASA's Psyche Spacecraft Just Got An Assist From Mars On The Way To Its Asteroid Namesake](https://soylentnews.org/article.pl?sid=26/05/18/1730215&from=rss)

## Innovative Technologies and Projects

* [Flipper One Could Be the Ultimate Linux Cyberdeck](https://hardware.slashdot.org/story/26/05/21/194249/flipper-one-could-be-the-ultimate-linux-cyberdeck?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [OpenSMTPD Is The Mail Server For The Future](https://bsdly.blogspot.com/2026/05/opensmtpd-is-mail-server-for-future.html)

* [Gobee: write eBPF programs in Go, transpiled via clang](https://github.com/boratanrikulu/gobee)

## AI Role in Math and Coding

* [OpenAI Claims It Solved an 80-Year-Old Math Problem](https://science.slashdot.org/story/26/05/21/0351218/openai-claims-it-solved-an-80-year-old-math-problem?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [An OpenAI model has disproved a central conjecture in discrete geometry](https://openai.com/index/model-disproves-discrete-geometry-conjecture/)

## Fascinating Breakthroughs

* [Casimir Force Co-Opted to Generate Free Energy, Midichlorians Not Included](https://soylentnews.org/article.pl?sid=26/05/19/1128257&from=rss)

* [Chewing gum restores dad's taste and smell years after Covid](https://discover.swns.com/2026/05/chewing-gum-restores-dads-taste-and-smell-years-after-covid/)

* [Lost Images from the 1945 Trinity Nuclear Test Restored](https://spectrum.ieee.org/trinity-nuclear-test)

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

* [2026-05-21, 22:34:00](https://soylentnews.org/article.pl?sid=26/05/19/1728216&amp;from=rss) - [Iran Demands Big Tech Pay Fees For Undersea Internet Cables In Strait Of Hormuz](https://soylentnews.org/article.pl?sid=26/05/19/1728216&amp;from=rss)
* [2026-05-21, 22:00:00](https://tech.slashdot.org/story/26/05/21/1921205/vivaldi-80-arrives-with-most-significant-design-overhaul-in-browsers-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vivaldi 8.0 Arrives With &apos;Most Significant Design Overhaul&apos; In Browser&apos;s History](https://tech.slashdot.org/story/26/05/21/1921205/vivaldi-80-arrives-with-most-significant-design-overhaul-in-browsers-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-21, 21:00:00](https://yro.slashdot.org/story/26/05/21/2034246/trump-calls-off-ai-executive-order-over-concern-it-could-weaken-us-tech-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Calls Off AI Executive Order Over Concern It Could Weaken US Tech Edge](https://yro.slashdot.org/story/26/05/21/2034246/trump-calls-off-ai-executive-order-over-concern-it-could-weaken-us-tech-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-21, 20:41:26](https://lobste.rs/s/blhd1c/cve_2026_47243_kata_containers_guest_root) - [CVE-2026-47243: Kata Containers guest-root to host-root escape via virtiofs](https://www.openwall.com/lists/oss-security/2026/05/21/14)
* [2026-05-21, 20:02:05](https://lobste.rs/s/tbxmm1/announcing_web_serial_support_firefox) - [Announcing Web Serial Support in Firefox](https://hacks.mozilla.org/2026/05/web-serial-support-in-firefox/)
* [2026-05-21, 20:00:59](https://lobste.rs/s/r6lw7v/how_open_calc_exe_from_s_box) - [How to open calc.exe from S&amp;Box](https://slugcat.systems/post/26-05-21-how-to-open-calc-exe-from-sbox/)
* [2026-05-21, 20:00:00](https://hardware.slashdot.org/story/26/05/21/194249/flipper-one-could-be-the-ultimate-linux-cyberdeck?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [    Flipper One Could Be the Ultimate Linux Cyberdeck](https://hardware.slashdot.org/story/26/05/21/194249/flipper-one-could-be-the-ultimate-linux-cyberdeck?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-21, 19:37:26](https://news.ycombinator.com/item?id=48227923) - [Multi-Stream LLMs: new paper on parallelizing/separating prompts, thinking, I/O](https://arxiv.org/abs/2605.12460)
* [2026-05-21, 19:32:16](https://news.ycombinator.com/item?id=48227860) - [Using Kagi Search with Low Vision](https://veroniiiica.com/using-kagi-search-with-low-vision/)
* [2026-05-21, 19:14:04](https://lobste.rs/s/jyhbzg/dependency_cooldowns_are_unfair_we) - [Dependency cooldowns are unfair; we should use phased rollouts instead](https://illegalcode.net/rfcs/phased_rollouts.html)
* [2026-05-21, 19:13:40](https://lobste.rs/s/ae6wd0/introducing_arkts_huawei_s_next) - [Introducing ArkTS, Huawei’s Next-Generation Development Language](https://dev.to/harmonyos/introducing-arkts-huaweis-next-generation-development-language-jg7)
* [2026-05-21, 19:00:00](https://yro.slashdot.org/story/26/05/21/1758205/us-to-award-2-billion-to-quantum-companies-take-equity-stakes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US To Award $2 Billion To Quantum Companies, Take Equity Stakes](https://yro.slashdot.org/story/26/05/21/1758205/us-to-award-2-billion-to-quantum-companies-take-equity-stakes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-21, 18:54:55](https://news.ycombinator.com/item?id=48227397) - [Blog ran on Ubuntu 16.04 for 10 years. I migrated it to FreeBSD](https://crocidb.com/post/this-blog-ran-on-ubuntu-16-04-for-10-years-i-migrated-it-to-freebsd/)
* [2026-05-21, 18:21:37](https://news.ycombinator.com/item?id=48226944) - [BBEdit 16](https://www.barebones.com/products/bbedit/bbedit16.html)
* [2026-05-21, 18:04:17](https://news.ycombinator.com/item?id=48226703) - [Where are all the UK red telephone kiosks?](https://www.thek6project.co.uk/)
* [2026-05-21, 18:00:00](https://entertainment.slashdot.org/story/26/05/21/1713205/spotify-will-start-reserving-concert-tickets-for-fans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Will Start Reserving Concert Tickets For Fans](https://entertainment.slashdot.org/story/26/05/21/1713205/spotify-will-start-reserving-concert-tickets-for-fans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-21, 17:55:58](https://news.ycombinator.com/item?id=48226588) - [Seattle Shield, an intelligence-sharing network operated by the Seattle police](https://prismreports.org/2026/05/20/seattle-shield-private-companies-surveillance/)
* [2026-05-21, 17:51:00](https://soylentnews.org/article.pl?sid=26/05/19/1726205&amp;from=rss) - [Physicists at Odds Over Greatest Physics Mysteries](https://soylentnews.org/article.pl?sid=26/05/19/1726205&amp;from=rss)
* [2026-05-21, 17:47:22](https://lobste.rs/s/ggqpxg/private_pkg_repo_behind_mutual_tls) - [A Private pkg Repo Behind Mutual TLS](https://oshogbo.com/blog/88/)
* [2026-05-21, 17:37:58](https://lobste.rs/s/fxqjqu/flipper_one_we_need_your_help) - [Flipper One — we need your help](https://blog.flipper.net/flipper-one-we-need-your-help/)
* [2026-05-21, 17:14:56](https://news.ycombinator.com/item?id=48226038) - [Chewing gum restores dad&apos;s taste and smell years after Covid](https://discover.swns.com/2026/05/chewing-gum-restores-dads-taste-and-smell-years-after-covid/)
* [2026-05-21, 17:08:19](https://lobste.rs/s/52g7rz/gobee_write_ebpf_programs_go_transpiled) - [Gobee: write eBPF programs in Go, transpiled via clang](https://github.com/boratanrikulu/gobee)
* [2026-05-21, 17:02:00](https://tech.slashdot.org/story/26/05/21/170236/waymo-pauses-atlanta-service-as-its-robotaxis-keep-driving-into-floods?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Pauses Atlanta Service As Its Robotaxis Keep Driving Into Floods](https://tech.slashdot.org/story/26/05/21/170236/waymo-pauses-atlanta-service-as-its-robotaxis-keep-driving-into-floods?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-21, 17:00:52](https://news.ycombinator.com/item?id=48225852) - [ParadeDB (YC S23) Is Hiring Distributed Systems/Platform Engineers](https://news.ycombinator.com/item?id=48225852)
* [2026-05-21, 16:59:27](https://news.ycombinator.com/item?id=48225838) - [News outlets are limiting the Internet Archive’s access to their journalism](https://www.niemanlab.org/2026/05/more-than-340-local-news-outlets-are-limiting-the-internet-archives-access-to-their-journalism/)
* [2026-05-21, 16:42:34](https://news.ycombinator.com/item?id=48225596) - [Show HN: Agent.email – sign up via curl, claim with a human OTP](https://news.ycombinator.com/item?id=48225596)
* [2026-05-21, 16:30:47](https://news.ycombinator.com/item?id=48225426) - [Waymo pauses Atlanta service as its robotaxis keep driving into floods](https://techcrunch.com/2026/05/21/waymo-pauses-atlanta-service-as-its-robotaxis-keep-driving-into-floods/)
* [2026-05-21, 16:26:58](https://news.ycombinator.com/item?id=48225357) - [Spotify will start reserving concert tickets for fans](https://www.hollywoodreporter.com/music/music-industry-news/spotify-will-start-reserving-concert-tickets-for-superfans-1236603106/)
* [2026-05-21, 16:23:11](https://news.ycombinator.com/item?id=48225297) - [Project Hail Mary – Stellar Navigation Chart](https://valhovey.github.io/gaia-mary/)
* [2026-05-21, 16:07:13](https://news.ycombinator.com/item?id=48225040) - [Launch HN: Runtime (YC P26) – Sandboxed coding agents for everyone on a team](https://www.runtm.com/)
* [2026-05-21, 16:00:00](https://games.slashdot.org/story/26/05/21/041208/microsoft-hires-analyst-with-influential-video-game-blog-to-fix-xbox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Hires Analyst With Influential Video Game Blog To Fix Xbox](https://games.slashdot.org/story/26/05/21/041208/microsoft-hires-analyst-with-influential-video-game-blog-to-fix-xbox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-21, 15:50:04](https://news.ycombinator.com/item?id=48224768) - [Museum of Pocket Calculating Devices](https://www.calculators.de/)
* [2026-05-21, 15:35:29](https://lobste.rs/s/gl13es/john_regehr_s_integers_c_quiz) - [John Regehr&apos;s Integers in C Quiz](https://acepace.net/integerQuiz/)
* [2026-05-21, 15:09:32](https://lobste.rs/s/r87zln/internships_for_early_university_no) - [Internships for early university / no former employment](https://lobste.rs/s/r87zln/internships_for_early_university_no)
* [2026-05-21, 15:00:00](https://science.slashdot.org/story/26/05/21/0351218/openai-claims-it-solved-an-80-year-old-math-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Claims It Solved an 80-Year-Old Math Problem](https://science.slashdot.org/story/26/05/21/0351218/openai-claims-it-solved-an-80-year-old-math-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-21, 14:34:57](https://news.ycombinator.com/item?id=48223362) - [Show HN: Freenet, a peer-to-peer platform for decentralized apps](https://freenet.org/)
* [2026-05-21, 14:01:37](https://news.ycombinator.com/item?id=48222733) - [Indexing a year of video locally on a 2021 MacBook with Gemma4-31B (50GB swap)](https://blog.simbastack.com/indexed-a-year-of-video-locally/)
* [2026-05-21, 13:50:59](https://news.ycombinator.com/item?id=48222529) - [Google&apos;s Antigravity bait and switch](https://www.0xsid.com/blog/antigravity-bait-n-switch)
* [2026-05-21, 13:42:03](https://lobste.rs/s/yy3xax/fatgid_freebsd_14_x_kernel_lpe) - [FatGid - FreeBSD 14.x kernel LPE](https://fatgid.io/)
* [2026-05-21, 13:34:58](https://lobste.rs/s/ulkriy/church_encoding_parametricity_yoneda) - [Church Encoding, Parametricity, and the Yoneda Lemma](https://blog.wybxc.cc/blog/parametricity/)
* [2026-05-21, 13:16:44](https://lobste.rs/s/n5qtds/python_3_15_features_didn_t_make_headlines) - [Python 3.15: features that didn&apos;t make the headlines](https://blog.changs.co.uk/python-315-features-that-didnt-make-the-headlines.html)
* [2026-05-21, 13:03:00](https://soylentnews.org/article.pl?sid=26/05/19/1720228&amp;from=rss) - [Barnes &amp; Noble CEO Backs Selling AI-Written Books in Stores](https://soylentnews.org/article.pl?sid=26/05/19/1720228&amp;from=rss)
* [2026-05-21, 12:55:16](https://news.ycombinator.com/item?id=48221877) - [Who wins and who loses in prediction markets? Evidence from Polymarket](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6443103)
* [2026-05-21, 12:15:02](https://news.ycombinator.com/item?id=48221415) - [FatGid: FreeBSD 14.x kernel local privilege escalation](https://fatgid.io/)
* [2026-05-21, 11:10:11](https://news.ycombinator.com/item?id=48220696) - [Python 3.15: features that didn&apos;t make the headlines](https://blog.changs.co.uk/python-315-features-that-didnt-make-the-headlines.html)
* [2026-05-21, 11:03:38](https://news.ycombinator.com/item?id=48220647) - [Flipper One – we need your help](https://blog.flipper.net/flipper-one-we-need-your-help/)
* [2026-05-21, 11:02:26](https://news.ycombinator.com/item?id=48220639) - [Lost Images from the 1945 Trinity Nuclear Test Restored](https://spectrum.ieee.org/trinity-nuclear-test)
* [2026-05-21, 11:00:00](https://news.slashdot.org/story/26/05/21/0343258/spacex-reveals-its-finances-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Reveals Its Finances For the First Time](https://news.slashdot.org/story/26/05/21/0343258/spacex-reveals-its-finances-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-21, 10:27:31](https://lobste.rs/s/iggblv/kubernetes_anger) - [Kubernetes In Anger](https://samof76.space/kubernetes-in-anger.html)
* [2026-05-21, 09:49:46](https://news.ycombinator.com/item?id=48220105) - [We&apos;re testing new ad formats in Search and expanding our Direct Offers pilot](https://blog.google/products/ads-commerce/google-marketing-live-search-ads/)
* [2026-05-21, 09:31:15](https://news.ycombinator.com/item?id=48219992) - [Throwing AI-generated walls of text into conversations](https://noslopgrenade.com/)
* [2026-05-21, 08:17:00](https://soylentnews.org/article.pl?sid=26/05/19/1718231&amp;from=rss) - [PlayStation Plus to Raise Monthly Subscription Fee](https://soylentnews.org/article.pl?sid=26/05/19/1718231&amp;from=rss)
* [2026-05-21, 07:21:55](https://news.ycombinator.com/item?id=48219060) - [Vivaldi 8.0](https://vivaldi.com/blog/vivaldi-on-desktop-8-0/)
* [2026-05-21, 07:20:24](https://lobste.rs/s/w0uimq/tailwind_suffering_from_success) - [Tailwind: Suffering From Success](https://blog.sebin-nyshkim.net/posts/tailwind-suffering-from-success/)
* [2026-05-21, 07:00:00](https://science.slashdot.org/story/26/05/21/0123247/nasa-expects-chinese-crewed-mission-around-the-moon-in-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Expects Chinese Crewed Mission Around the Moon In 2027](https://science.slashdot.org/story/26/05/21/0123247/nasa-expects-chinese-crewed-mission-around-the-moon-in-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-21, 06:51:15](https://lobste.rs/s/vfxdtu/rfc_llvm_foundation_statement_favor_open) - [[RFC] LLVM Foundation statement in favor of open access to standards documents](https://discourse.llvm.org/t/rfc-open-access-to-standards-documents/90856)
* [2026-05-21, 04:27:58](https://lobste.rs/s/qmvgke/opensmtpd_is_mail_server_for_future) - [OpenSMTPD Is The Mail Server For The Future](https://bsdly.blogspot.com/2026/05/opensmtpd-is-mail-server-for-future.html)
* [2026-05-21, 03:51:01](https://lobste.rs/s/k21pdb/aggressive_ai_scrapers_are_making_it) - [Aggressive AI scrapers are making it kinda suck to run wikis](https://weirdgloop.org/blog/clankers)
* [2026-05-21, 03:36:00](https://soylentnews.org/article.pl?sid=26/05/19/1128257&amp;from=rss) - [Casimir Force Co-Opted to Generate Free Energy, Midichlorians Not Included](https://soylentnews.org/article.pl?sid=26/05/19/1128257&amp;from=rss)
* [2026-05-21, 03:30:00](https://science.slashdot.org/story/26/05/21/0112253/colossal-biosciences-is-growing-chickens-in-a-3d-printed-artificial-eggshell?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Colossal Biosciences Is Growing Chickens In a 3D-Printed Artificial Eggshell](https://science.slashdot.org/story/26/05/21/0112253/colossal-biosciences-is-growing-chickens-in-a-3d-printed-artificial-eggshell?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-21, 03:07:20](https://lobste.rs/s/3ltdmy/twelve_ways_be_wrong_about_ai_assisted) - [Twelve Ways to Be Wrong About AI-Assisted Coding](https://third-bit.com/2026/05/20/twelve-ways-to-be-wrong/)
* [2026-05-21, 01:07:08](https://lobste.rs/s/rwu7ah/mislabeled_bricks_utopia) - [The Mislabeled Bricks of Utopia](https://orib.dev/nexus.html)
* [2026-05-20, 23:00:00](https://slashdot.org/story/26/05/20/2038203/intuit-to-lay-off-over-3000-employees-to-refocus-on-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intuit To Lay Off Over 3,000 Employees To Refocus On AI](https://slashdot.org/story/26/05/20/2038203/intuit-to-lay-off-over-3000-employees-to-refocus-on-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 22:51:00](https://soylentnews.org/article.pl?sid=26/05/19/0444246&amp;from=rss) - [Software Developers Say AI Is Rotting Their Brains](https://soylentnews.org/article.pl?sid=26/05/19/0444246&amp;from=rss)
* [2026-05-20, 22:45:06](https://lobste.rs/s/hqzkqg/openai_model_has_disproved_central) - [An OpenAI model has disproved a central conjecture in discrete geometry](https://openai.com/index/model-disproves-discrete-geometry-conjecture/)
* [2026-05-20, 22:00:00](https://it.slashdot.org/story/26/05/20/2013252/google-publishes-exploit-code-threatening-millions-of-chromium-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Publishes Exploit Code Threatening Millions of Chromium Users](https://it.slashdot.org/story/26/05/20/2013252/google-publishes-exploit-code-threatening-millions-of-chromium-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 21:00:00](https://linux.slashdot.org/story/26/05/20/203252/rhel-102-released-with-new-ai-command-line-assistance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [RHEL 10.2 Released With New AI Command Line Assistance](https://linux.slashdot.org/story/26/05/20/203252/rhel-102-released-with-new-ai-command-line-assistance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 20:29:05](https://lobste.rs/s/e7lsqn/chromium_publishes_fixed_exploit_4_years) - [Chromium publishes fixed exploit 4 years later, turns out it&apos;s actually unfixed](https://infosec.exchange/@rebane2001/116606719764376414)
* [2026-05-20, 20:12:38](https://lobste.rs/s/garq37/why_does_arrow_operator_c_exist) - [Why does the arrow (-&gt;) operator in C exist?](https://stackoverflow.com/questions/13366083/why-does-the-arrow-operator-in-c-exist)
* [2026-05-20, 20:00:00](https://it.slashdot.org/story/26/05/20/197246/githubs-internal-repos-breached-via-employees-use-of-malicious-vs-code-extension?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GitHub&apos;s Internal Repos Breached Via Employee&apos;s Use of Malicious VS Code Extension](https://it.slashdot.org/story/26/05/20/197246/githubs-internal-repos-breached-via-employees-use-of-malicious-vs-code-extension?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 19:20:32](https://lobste.rs/s/k8mkgs/xss_is_deadly_for_passkeys_hidden_risk) - [XSS Is Deadly for Passkeys: The Hidden Risk of Attestation None](https://scotthelme.co.uk/xss-is-deadly-for-passkeys-the-hidden-risk-of-attestation-none/)
* [2026-05-20, 18:06:00](https://soylentnews.org/article.pl?sid=26/05/19/0438213&amp;from=rss) - [Ollama Out-of-Bounds Read Vulnerability Allows Remote Process Memory Leak](https://soylentnews.org/article.pl?sid=26/05/19/0438213&amp;from=rss)
* [2026-05-20, 13:19:00](https://soylentnews.org/article.pl?sid=26/05/18/1730215&amp;from=rss) - [NASA&apos;s Psyche Spacecraft Just Got An Assist From Mars On The Way To Its Asteroid Namesake](https://soylentnews.org/article.pl?sid=26/05/18/1730215&amp;from=rss)
* [2026-05-20, 08:34:00](https://soylentnews.org/article.pl?sid=26/05/18/1728202&amp;from=rss) - [Texas County Passes Data Center Ban for Rural Areas for a Year](https://soylentnews.org/article.pl?sid=26/05/18/1728202&amp;from=rss)
* [2026-05-20, 04:25:35](https://lobste.rs/s/n1gytv/why_ruby_still_feels_like_home_after_all) - [Why Ruby Still Feels Like Home After All These Years](https://caio.ca/blog/why-ruby-still-feels-like-home)
* [2026-05-20, 03:51:00](https://soylentnews.org/article.pl?sid=26/05/18/1714233&amp;from=rss) - [Cell Phone Users Can&apos;t Stop Incriminating Themselves](https://soylentnews.org/article.pl?sid=26/05/18/1714233&amp;from=rss)
* [2026-05-19, 23:05:00](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss) - [Exposure to Burn Injuries Played Key Role in Shaping Human Evolution](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss)
* [2026-05-19, 18:26:00](https://soylentnews.org/article.pl?sid=26/05/18/174235&amp;from=rss) - [Short Interview with Vint Cerf at El País](https://soylentnews.org/article.pl?sid=26/05/18/174235&amp;from=rss)
* [2026-05-19, 13:41:00](https://soylentnews.org/article.pl?sid=26/05/17/1438201&amp;from=rss) - [Your Doctor is Most Likely Consulting This Free AI Chatbot](https://soylentnews.org/article.pl?sid=26/05/17/1438201&amp;from=rss)
* [2026-05-19, 09:32:58](https://news.ycombinator.com/item?id=48191192) - [Bournegol??? (2014)](https://oldhome.schmorp.de/marc/bournegol.html)
* [2026-05-19, 08:56:00](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss) - [AI Data Centers Face Increasing Complaints About Inaudible but &apos;Felt&apos; Infrasound](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss)
* [2026-05-19, 07:32:56](https://news.ycombinator.com/item?id=48190373) - [Mounting git commits as folders with NFS (2023)](https://jvns.ca/blog/2023/12/04/mounting-git-commits-as-folders-with-nfs/)
* [2026-05-19, 07:17:24](https://news.ycombinator.com/item?id=48190272) - [Thoughts on People and Blogs](https://afranca.com.br/thoughts-on-people-and-blogs/)
* [2026-05-19, 04:09:00](https://soylentnews.org/article.pl?sid=26/05/17/1424241&amp;from=rss) - [A Simple Blood Test Could Predict Your Odds of Living Longer With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/05/17/1424241&amp;from=rss)
* [2026-05-18, 23:22:00](https://soylentnews.org/article.pl?sid=26/05/17/144228&amp;from=rss) - [Huge Landslide Created a 500-Meter-High Tsunami in a Major Tourist Area](https://soylentnews.org/article.pl?sid=26/05/17/144228&amp;from=rss)
* [2026-05-18, 19:33:03](https://news.ycombinator.com/item?id=48184402) - [Was my $48K GPU server worth it?](https://rosmine.ai/2026/05/13/was-my-48k-gpu-worth-it/)
* [2026-05-18, 18:37:00](https://soylentnews.org/article.pl?sid=26/05/17/1359222&amp;from=rss) - [What Will It Take to Modernize the US Power Grid?](https://soylentnews.org/article.pl?sid=26/05/17/1359222&amp;from=rss)
* [2026-05-18, 13:51:00](https://soylentnews.org/article.pl?sid=26/05/17/1346233&amp;from=rss) - [China Court Rules Against Job Cut From AI](https://soylentnews.org/article.pl?sid=26/05/17/1346233&amp;from=rss)
* [2026-05-18, 09:05:00](https://soylentnews.org/article.pl?sid=26/05/17/1229217&amp;from=rss) - [The Context Window Has Been Shattered: Subquadratic Debuts a 12-Million-Token Window](https://soylentnews.org/article.pl?sid=26/05/17/1229217&amp;from=rss)
* [2026-05-18, 04:24:00](https://soylentnews.org/article.pl?sid=26/05/17/0153208&amp;from=rss) - [SteamOS Scared Microsoft Into Making Windows Less Like Windows](https://soylentnews.org/article.pl?sid=26/05/17/0153208&amp;from=rss)
* [2026-05-17, 23:37:00](https://soylentnews.org/article.pl?sid=26/05/17/0150209&amp;from=rss) - [Scientists May Have Discovered How Parkinson’s Disease Spreads Through the Brain](https://soylentnews.org/article.pl?sid=26/05/17/0150209&amp;from=rss)
* [2026-05-17, 18:56:00](https://soylentnews.org/article.pl?sid=26/05/17/0147228&amp;from=rss) - [Removing the Modem and GPS From My 2024 RAV4 Hybrid](https://soylentnews.org/article.pl?sid=26/05/17/0147228&amp;from=rss)
* [2026-05-17, 14:03:00](https://soylentnews.org/article.pl?sid=26/05/17/0146201&amp;from=rss) - [A Security Researcher Says Microsoft Secretly Built a Backdoor into BitLocker](https://soylentnews.org/article.pl?sid=26/05/17/0146201&amp;from=rss)
* [2026-05-17, 09:23:00](https://soylentnews.org/article.pl?sid=26/05/16/0314220&amp;from=rss) - [EVs Cause Honda’s First Ever Money-Losing Year in the US](https://soylentnews.org/article.pl?sid=26/05/16/0314220&amp;from=rss)
* [2026-05-17, 04:43:00](https://soylentnews.org/article.pl?sid=26/05/16/0015203&amp;from=rss) - [Here&apos;s Why European Cars Can&apos;t Use American Engine Oil](https://soylentnews.org/article.pl?sid=26/05/16/0015203&amp;from=rss)
