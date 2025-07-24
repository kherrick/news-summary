# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Privacy Concerns

* [Web fingerprinting is worse than I thought](https://www.bitestring.com/posts/2023-03-19-web-fingerprinting-is-worse-than-I-thought.html) ([comments](https://news.ycombinator.com/item?id=44669853))

* [Jitsi privacy flaw enables one-click stealth audio and video capture](https://zimzi.substack.com/p/jitsi-privacy-flaw-that-enables-one) ([comments](https://news.ycombinator.com/item?id=44663684))

* [Shattering the Rotation Illusion: The Attacker View & AWSKeyLockdown](https://www.clutch.security/blog/shattering-the-rotation-illusion-part-6-the-attackers-perspective-and-introducing-awskeylockdown) ([comments](https://news.ycombinator.com/item?id=44667472))

* [SharePoint Vulnerability With 9.8 Severity Rating Under Exploit Across Globe](https://soylentnews.org/article.pl?sid=25/07/23/1254253&from=rss)

## AI and Technology Trends

* [AI overviews cause massive drop in search clicks](https://arstechnica.com/ai/2025/07/research-shows-google-ai-overviews-reduce-website-clicks-by-almost-half/) ([comments](https://news.ycombinator.com/item?id=44663227))

* [FDA's New Drug Approval AI Is Generating Fake Studies](https://science.slashdot.org/story/25/07/23/2044251/fdas-new-drug-approval-ai-is-generating-fake-studies?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [How much do you spend on AI-assisted tools?](https://lobste.rs/s/jcfozl/how_much_do_you_spend_on_ai_assisted_tools)

* [Meta Unveils Wristband That Controls Computers With Muscle Signals](https://tech.slashdot.org/story/25/07/23/1714242/meta-unveils-wristband-that-controls-computers-with-muscle-signals?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Software and Open Source Developments

* [Wayback 0.1 released](https://wayback.freedesktop.org/news/2025/07/23/wayback-0.1-released/) ([comments](https://lobste.rs/s/sf2q8y/wayback_0_1_released))

* [Detekt – A static code analyzer for Kotlin](https://detekt.dev/) ([comments](https://news.ycombinator.com/item?id=44669365))

* [A valid HTML zip bomb](https://ache.one/notes/html_zip_bomb) ([comments](https://lobste.rs/s/tao1sp/valid_html_zip_bomb))

* [NPM 'accidentally' removes Stylus package, breaks builds and pipelines](https://www.bleepingcomputer.com/news/security/npm-accidentally-removes-stylus-package-breaks-builds-and-pipelines/) ([comments](https://lobste.rs/s/2i7to2/npm_accidentally_removes_stylus_package))

## Innovation in Hardware

* [How Much Would You Pay For an American-Made Laptop? Palmer Luckey Wants To Know](https://hardware.slashdot.org/story/25/07/23/218247/how-much-would-you-pay-for-an-american-made-laptop-palmer-luckey-wants-to-know?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Custom mechanical keyboard: OS-specific custom RGB lighting with QMK](https://quantum5.ca/2024/06/30/custom-mechanical-keyboard-os-specific-rgb-lighting-qmk/) ([comments](https://lobste.rs/s/15hetb/custom_mechanical_keyboard_os_specific))

* [systemd 258-rc1 Is A Massive Feature Release With New Tools, More Than 260 Changes](https://www.phoronix.com/news/systemd-258-rc1) ([comments](https://lobste.rs/s/p1fztx/systemd_258_rc1_is_massive_feature))

## Historical and Cultural Highlights

* [Neil Armstrong's customs form for moon rocks (2016)](https://magazine.uc.edu/editors_picks/recent_features/armstrong/moonrocks.html) ([comments](https://news.ycombinator.com/item?id=44660437))

* [11,000-Year-Old Feast Uncovered: Why Hunters Hauled Wild Boars Across Mountains](https://soylentnews.org/article.pl?sid=25/07/21/225220&from=rss)

* [Julian LeFay, 'Father of The Elder Scrolls,' Has Died Aged 59](https://games.slashdot.org/story/25/07/23/2058221/julian-lefay-father-of-the-elder-scrolls-has-died-aged-59?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-07-24, 13:14:09](https://lobste.rs/s/tao1sp/valid_html_zip_bomb) - [A valid HTML zip bomb](https://ache.one/notes/html_zip_bomb)
* [2025-07-24, 12:47:29](https://news.ycombinator.com/item?id=44669998) - [Vet is a safety net for the risky curl | bash pattern](https://github.com/vet-run/vet)
* [2025-07-24, 12:29:35](https://news.ycombinator.com/item?id=44669858) - [Wix: Introduce the Open Source Maintenance Fee](https://github.com/wixtoolset/issues/issues/8974)
* [2025-07-24, 12:28:31](https://news.ycombinator.com/item?id=44669853) - [Web fingerprinting is worse than I thought](https://www.bitestring.com/posts/2023-03-19-web-fingerprinting-is-worse-than-I-thought.html)
* [2025-07-24, 12:16:28](https://lobste.rs/s/sf2q8y/wayback_0_1_released) - [Wayback 0.1 released](https://wayback.freedesktop.org/news/2025/07/23/wayback-0.1-released/)
* [2025-07-24, 12:00:13](https://news.ycombinator.com/item?id=44669631) - [Thunder Compute (YC S24) Is Hiring a C++ Systems Engineer](https://www.ycombinator.com/companies/thunder-compute/jobs/DhML6Uf-c-systems-engineer)
* [2025-07-24, 11:20:25](https://news.ycombinator.com/item?id=44669393) - [System View for Inspecting DSM Registry Allocations in PostgreSQL](https://tselai.com/pg-dsm-registry-allocations)
* [2025-07-24, 11:16:48](https://news.ycombinator.com/item?id=44669368) - [What does connecting with someone mean?](https://talk.bradwoods.io/blog/connect/)
* [2025-07-24, 11:16:19](https://news.ycombinator.com/item?id=44669365) - [Detekt – A static code analyzer for Kotlin](https://detekt.dev/)
* [2025-07-24, 11:09:26](https://news.ycombinator.com/item?id=44669318) - [XOR_singleheader: Header-only binary fuse and XOR filter library](https://github.com/FastFilter/xor_singleheader)
* [2025-07-24, 10:15:00](https://soylentnews.org/meta/article.pl?sid=25/07/24/1019233&amp;from=rss) - [Bots, Spiders, Scrapers and AI - Connections to SN](https://soylentnews.org/meta/article.pl?sid=25/07/24/1019233&amp;from=rss)
* [2025-07-24, 10:11:00](https://soylentnews.org/article.pl?sid=25/07/23/1253202&amp;from=rss) - [Fearful of AI-Generated Grant Proposals, NIH Limits Scientists to Six Applications Per Year](https://soylentnews.org/article.pl?sid=25/07/23/1253202&amp;from=rss)
* [2025-07-24, 09:12:07](https://lobste.rs/s/jcfozl/how_much_do_you_spend_on_ai_assisted_tools) - [How much do you spend on AI-assisted tools?](https://lobste.rs/s/jcfozl/how_much_do_you_spend_on_ai_assisted_tools)
* [2025-07-24, 06:23:36](https://lobste.rs/s/p1fztx/systemd_258_rc1_is_massive_feature) - [systemd 258-rc1 Is A Massive Feature Release With New Tools, More Than 260 Changes](https://www.phoronix.com/news/systemd-258-rc1)
* [2025-07-24, 06:07:17](https://news.ycombinator.com/item?id=44667472) - [Shattering the Rotation Illusion: The Attacker View &amp; AWSKeyLockdown](https://www.clutch.security/blog/shattering-the-rotation-illusion-part-6-the-attackers-perspective-and-introducing-awskeylockdown)
* [2025-07-24, 06:04:03](https://lobste.rs/s/ucm2ip/jnj_j_janet) - [JNJ: J iN Janet](https://sr.ht/~subsetpark/JNJ/)
* [2025-07-24, 05:28:00](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss) - [A Surveillance Vendor Was Caught Exploiting a New SS7 Attack to Track People&apos;s Phone Locations](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss)
* [2025-07-24, 04:20:52](https://news.ycombinator.com/item?id=44666896) - [Apache HTTP Server: &apos;RewriteCond expr&apos; always evaluates to true](https://github.com/apache/httpd/commit/8abb3d06b23975705ebcf4bf4476464fd0b9bd0b)
* [2025-07-24, 02:13:20](https://news.ycombinator.com/item?id=44666157) - [Electric cars produce far less brake dust pollution than combustion-engine cars](https://modernengineeringmarvels.com/2025/07/22/surprising-science-how-electric-cars-quietly-transform-urban-air/)
* [2025-07-24, 02:10:00](https://science.slashdot.org/story/25/07/23/2021220/us-to-withdraw-from-unesco-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US To Withdraw From UNESCO Again](https://science.slashdot.org/story/25/07/23/2021220/us-to-withdraw-from-unesco-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 01:30:00](https://yro.slashdot.org/story/25/07/24/0055200/administrator-of-major-dark-web-cybercrime-forum-arrested-in-ukraine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Administrator of Major Dark Web Cybercrime Forum Arrested In Ukraine](https://yro.slashdot.org/story/25/07/24/0055200/administrator-of-major-dark-web-cybercrime-forum-arrested-in-ukraine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 01:12:14](https://news.ycombinator.com/item?id=44665815) - [BGP.Tools: Browse the Internet Ecosystem](https://bgp.tools/)
* [2025-07-24, 00:57:51](https://lobste.rs/s/15hetb/custom_mechanical_keyboard_os_specific) - [Custom mechanical keyboard: OS-specific custom RGB lighting with QMK](https://quantum5.ca/2024/06/30/custom-mechanical-keyboard-os-specific-rgb-lighting-qmk/)
* [2025-07-24, 00:51:11](https://lobste.rs/s/hip584/death_industrial_design_era_dull) - [The Death Of Industrial Design And The Era Of Dull Electronics](https://hackaday.com/2025/07/23/the-death-of-industrial-design-and-the-era-of-dull-electronics/)
* [2025-07-24, 00:50:00](https://hardware.slashdot.org/story/25/07/23/218247/how-much-would-you-pay-for-an-american-made-laptop-palmer-luckey-wants-to-know?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Much Would You Pay For an American-Made Laptop? Palmer Luckey Wants To Know](https://hardware.slashdot.org/story/25/07/23/218247/how-much-would-you-pay-for-an-american-made-laptop-palmer-luckey-wants-to-know?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 00:39:00](https://soylentnews.org/article.pl?sid=25/07/23/1254253&amp;from=rss) - [SharePoint Vulnerability With 9.8 Severity Rating Under Exploit Across Globe](https://soylentnews.org/article.pl?sid=25/07/23/1254253&amp;from=rss)
* [2025-07-24, 00:10:00](https://science.slashdot.org/story/25/07/23/2044251/fdas-new-drug-approval-ai-is-generating-fake-studies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FDA&apos;s New Drug Approval AI Is Generating Fake Studies](https://science.slashdot.org/story/25/07/23/2044251/fdas-new-drug-approval-ai-is-generating-fake-studies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 23:56:25](https://news.ycombinator.com/item?id=44665373) - [I drank every cocktail](https://aaronson.org/blog/i-drank-every-cocktail)
* [2025-07-23, 23:50:49](https://lobste.rs/s/fgo66i/kernel) - [Kernel](https://web.cs.wpi.edu/%7Ejshutt/kernel.html#:%7E:text=On%20the%20theoretical%20side%2C%20the,also:%20My%20Academic%20Work%20page)
* [2025-07-23, 23:30:00](https://hardware.slashdot.org/story/25/07/23/2031219/leading-3d-printing-site-bans-firearm-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Leading 3D Printing Site Bans Firearm Files](https://hardware.slashdot.org/story/25/07/23/2031219/leading-3d-printing-site-bans-firearm-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 22:53:27](https://news.ycombinator.com/item?id=44664873) - [Show HN: Tinder but it&apos;s only pictures of my wife and I can only swipe right](https://trytender.app/)
* [2025-07-23, 22:50:00](https://tech.slashdot.org/story/25/07/23/2024201/starlink-powered-t-satellite-service-is-now-live-on-t-mobile?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Starlink-Powered &apos;T-Satellite&apos; Service Is Now Live On T-Mobile](https://tech.slashdot.org/story/25/07/23/2024201/starlink-powered-t-satellite-service-is-now-live-on-t-mobile?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 22:34:09](https://lobste.rs/s/xtmt3s/vintage_macintosh_programming_book) - [Vintage Macintosh Programming Book Library](https://vintageapple.org/macprogramming/index_year.html)
* [2025-07-23, 22:10:00](https://games.slashdot.org/story/25/07/23/2058221/julian-lefay-father-of-the-elder-scrolls-has-died-aged-59?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Julian LeFay, &apos;Father of The Elder Scrolls,&apos; Has Died Aged 59](https://games.slashdot.org/story/25/07/23/2058221/julian-lefay-father-of-the-elder-scrolls-has-died-aged-59?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 21:30:00](https://yro.slashdot.org/story/25/07/23/2018211/after-380-million-hack-clorox-sues-its-service-desk-vendor-for-simply-giving-out-passwords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After $380 Million Hack, Clorox Sues Its &apos;Service Desk&apos; Vendor For Simply Giving Out Passwords](https://yro.slashdot.org/story/25/07/23/2018211/after-380-million-hack-clorox-sues-its-service-desk-vendor-for-simply-giving-out-passwords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 21:23:16](https://lobste.rs/s/fkukju/branch_coverage_won_t_prove_collatz) - [Branch Coverage Won&apos;t Prove The Collatz Conjecture](https://concerningquality.com/collatz-conjecture/)
* [2025-07-23, 20:51:00](https://news.slashdot.org/story/25/07/23/204215/why-247-trading-is-a-bad-idea?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why 24/7 Trading is a Bad Idea](https://news.slashdot.org/story/25/07/23/204215/why-247-trading-is-a-bad-idea?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 20:45:44](https://lobste.rs/s/ludz2l/implementing_dynamic_scope_for_fennel) - [Implementing dynamic scope for Fennel and Lua](https://andreyor.st/posts/2025-06-09-implementing-dynamic-scope-for-fennel-and-lua/)
* [2025-07-23, 20:45:32](https://lobste.rs/s/yd7mzj/developing_our_position_on_ai) - [Developing our position on AI](https://www.recurse.com/blog/191-developing-our-position-on-ai)
* [2025-07-23, 20:31:16](https://news.ycombinator.com/item?id=44663684) - [Jitsi privacy flaw enables one-click stealth audio and video capture](https://zimzi.substack.com/p/jitsi-privacy-flaw-that-enables-one)
* [2025-07-23, 20:10:00](https://tech.slashdot.org/story/25/07/23/1915209/power-cuts-cable-damage-and-government-shutdowns-behind-q2-internet-outages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Power Cuts, Cable Damage, and Government Shutdowns Behind Q2 Internet Outages](https://tech.slashdot.org/story/25/07/23/1915209/power-cuts-cable-damage-and-government-shutdowns-behind-q2-internet-outages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 19:54:00](https://soylentnews.org/article.pl?sid=25/07/22/0833233&amp;from=rss) - [Conversations Between LLMs Could Automate the Creation of Exploits, Study Shows](https://soylentnews.org/article.pl?sid=25/07/22/0833233&amp;from=rss)
* [2025-07-23, 19:50:12](https://news.ycombinator.com/item?id=44663227) - [AI overviews cause massive drop in search clicks](https://arstechnica.com/ai/2025/07/research-shows-google-ai-overviews-reduce-website-clicks-by-almost-half/)
* [2025-07-23, 19:30:00](https://tech.slashdot.org/story/25/07/23/192212/war-on-hidden-motors-goes-undercover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [War on Hidden Motors Goes Undercover](https://tech.slashdot.org/story/25/07/23/192212/war-on-hidden-motors-goes-undercover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 18:50:00](https://games.slashdot.org/story/25/07/23/1810221/sony-is-fighting-climate-change-by-scaling-back-ps5-performance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony is Fighting Climate Change By Scaling Back PS5 Performance](https://games.slashdot.org/story/25/07/23/1810221/sony-is-fighting-climate-change-by-scaling-back-ps5-performance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 18:21:29](https://lobste.rs/s/sk2yop/you_can_now_disable_all_ai_features_zed) - [You Can Now Disable All AI Features in Zed](https://zed.dev/blog/disable-ai-features)
* [2025-07-23, 18:10:00](https://news.slashdot.org/story/25/07/23/1741214/top-un-court-says-countries-can-sue-each-other-over-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Top UN Court Says Countries Can Sue Each Other Over Climate Change](https://news.slashdot.org/story/25/07/23/1741214/top-un-court-says-countries-can-sue-each-other-over-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 17:38:20](https://news.ycombinator.com/item?id=44661846) - [CARA – High precision robot dog using rope](https://www.aaedmusa.com/projects/cara)
* [2025-07-23, 17:30:00](https://tech.slashdot.org/story/25/07/23/1714242/meta-unveils-wristband-that-controls-computers-with-muscle-signals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Unveils Wristband That Controls Computers With Muscle Signals](https://tech.slashdot.org/story/25/07/23/1714242/meta-unveils-wristband-that-controls-computers-with-muscle-signals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 17:24:32](https://news.ycombinator.com/item?id=44661682) - [The Promised LAN](https://tpl.house/)
* [2025-07-23, 16:59:16](https://lobste.rs/s/qpakro/promised_lan) - [The Promised LAN](https://tpl.house/)
* [2025-07-23, 16:52:00](https://news.slashdot.org/story/25/07/23/1652240/us-nuclear-weapons-agency-among-400-organizations-breached-by-chinese-hackers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Nuclear Weapons Agency &apos;Among 400 Organizations Breached By Chinese Hackers&apos;](https://news.slashdot.org/story/25/07/23/1652240/us-nuclear-weapons-agency-among-400-organizations-breached-by-chinese-hackers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 16:19:05](https://lobste.rs/s/lzfgwb/superfunctions_solve_color_problem) - [Superfunctions: solve the \&quot;color\&quot; problem of Python](https://github.com/pomponchik/transfunctions)
* [2025-07-23, 16:14:40](https://lobste.rs/s/x6qsw2/how_we_discovered_recovered_from) - [How we discovered, and recovered from, Postgres corruption on the matrix.org homeserver](https://matrix.org/blog/2025/07/postgres-corruption-postmortem/)
* [2025-07-23, 15:37:40](https://news.ycombinator.com/item?id=44660437) - [Neil Armstrong&apos;s customs form for moon rocks (2016)](https://magazine.uc.edu/editors_picks/recent_features/armstrong/moonrocks.html)
* [2025-07-23, 15:28:58](https://news.ycombinator.com/item?id=44660323) - [US AI Action Plan](https://www.ai.gov/action-plan)
* [2025-07-23, 15:10:00](https://soylentnews.org/article.pl?sid=25/07/22/0822201&amp;from=rss) - [Microsoft Wants to Find Out Why Windows 11 is So Slow](https://soylentnews.org/article.pl?sid=25/07/22/0822201&amp;from=rss)
* [2025-07-23, 14:56:31](https://news.ycombinator.com/item?id=44659921) - [Building better AI tools](https://hazelweakly.me/blog/stop-building-ai-tools-backwards/)
* [2025-07-23, 14:35:04](https://lobste.rs/s/w2l7hb/migrating_zfs_pool_from_raidz1_raidz2) - [Migrating a ZFS pool from RAIDZ1 to RAIDZ2](https://mtlynch.io/raidz1-to-raidz2/)
* [2025-07-23, 14:01:50](https://lobste.rs/s/2i7to2/npm_accidentally_removes_stylus_package) - [NPM &apos;accidentally&apos; removes Stylus package, breaks builds and pipelines](https://www.bleepingcomputer.com/news/security/npm-accidentally-removes-stylus-package-breaks-builds-and-pipelines/)
* [2025-07-23, 13:06:54](https://lobste.rs/s/5hr5yn/computational_tyranny) - [Computational Tyranny](https://happyfellow.bearblog.dev/computational-tyranny/)
* [2025-07-23, 13:00:55](https://lobste.rs/s/c53kzb/20_years_linux_on_desktop_part_4) - [20 years of Linux on the Desktop (part 4)](https://ploum.net/2025-07-23-linux_desktop4.html)
* [2025-07-23, 12:24:54](https://lobste.rs/s/dtmziw/trackweight_use_your_mac_trackpad_as) - [TrackWeight: Use your Mac trackpad as a weighing scale](https://github.com/KrishKrosh/TrackWeight)
* [2025-07-23, 11:32:31](https://lobste.rs/s/ixfukh/font_size_adjust_is_useful) - [font-size-adjust Is Useful](https://matklad.github.io/2025/07/16/font-size-adjust.html)
* [2025-07-23, 10:24:00](https://soylentnews.org/article.pl?sid=25/07/22/079200&amp;from=rss) - [The Atomic Bomb Marker Inside Your Body](https://soylentnews.org/article.pl?sid=25/07/22/079200&amp;from=rss)
* [2025-07-23, 10:22:42](https://news.ycombinator.com/item?id=44657556) - [Lumo: Privacy-first AI assistant](https://proton.me/blog/lumo-ai)
* [2025-07-23, 09:00:29](https://lobste.rs/s/9tmoou/what_expect_from_debian_trixie) - [What to expect from Debian/trixie](https://michael-prokop.at/blog/2025/07/20/what-to-expect-from-debian-trixie-newintrixie/)
* [2025-07-23, 05:35:00](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss) - [Matson Suspends Shipping EVs Citing Hazards of Lithium-ion Batteries](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss)
* [2025-07-23, 00:54:00](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss) - [11,000-Year-Old Feast Uncovered: Why Hunters Hauled Wild Boars Across Mountains](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss)
* [2025-07-22, 22:22:15](https://lobste.rs/s/itpokq/python_3_14_release_candidate_1_is_go) - [Python 3.14 release candidate 1 is go](https://pythoninsider.blogspot.com/2025/07/python-314-release-candidate-1-is-go.html)
* [2025-07-22, 21:20:16](https://news.ycombinator.com/item?id=44653136) - [Vector Tiles are deployed on OpenStreetMap.org](https://blog.openstreetmap.org/2025/07/22/vector-tiles-are-deployed-on-openstreetmap-org/)
* [2025-07-22, 20:09:00](https://soylentnews.org/article.pl?sid=25/07/21/2142206&amp;from=rss) - [Popular Sugar Substitute Linked to Brain Cell Damage and Stroke Risk](https://soylentnews.org/article.pl?sid=25/07/21/2142206&amp;from=rss)
* [2025-07-22, 18:48:00](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss) - [RIP - Ozzy Osborne](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss)
* [2025-07-22, 16:50:09](https://lobste.rs/s/5u6ydr/tailwind_is_worst_all_worlds) - [Tailwind is the Worst of All Worlds](https://colton.dev/blog/tailwind-is-the-worst-of-all-worlds/)
* [2025-07-22, 15:22:00](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss) - [A Strange Fossil at the Edge of the Solar System Just Shook Up Planet Nine Theories](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss)
* [2025-07-22, 10:33:00](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss) - [Microsoft Says It Will No Longer Use Engineers in China for Department of Defense Work](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss)
* [2025-07-22, 05:47:00](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss) - [Thelonious Monk, the Teenage Weirdo, and the Battle Over a Lost Sonic Masterpiece](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss)
* [2025-07-22, 01:04:00](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss) - [Meta is Building “Several” Multi-Gigawatt Compute Clusters](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss)
* [2025-07-21, 20:19:00](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss) - [Weird Space Weather Seems to Have Influenced Human Behavior 41,000 years ago](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss)
* [2025-07-21, 15:39:00](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss) - [HP is Going to Monitor PC Usage With a \&quot;Carfax for PCs\&quot; ](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss)
* [2025-07-21, 15:20:49](https://news.ycombinator.com/item?id=44636240) - [Covers as a way of learning music and code](https://ntietz.com/blog/covers-as-a-way-of-learning/)
* [2025-07-21, 13:18:47](https://news.ycombinator.com/item?id=44634756) - [A Python tool to parse PDF statements from Poste Italiane](https://github.com/genbs/poste-italiane-parser)
* [2025-07-21, 10:55:00](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss) - [Delta Air Lines is Using AI to Set the Maximum Price You’re Willing to Pay](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss)
* [2025-07-21, 06:30:21](https://news.ycombinator.com/item?id=44632314) - [Writing Is Thinking](https://www.nature.com/articles/s44222-025-00323-4)
* [2025-07-21, 06:09:00](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss) - [For Algorithms, a Little Memory Outweighs a Lot of Time](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss)
* [2025-07-21, 01:22:00](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss) - [Open, Free, and Completely Ignored: The Strange Afterlife of Symbian](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss)
* [2025-07-20, 22:09:27](https://news.ycombinator.com/item?id=44629805) - [Distillation makes AI models smaller and cheaper](https://www.quantamagazine.org/how-distillation-makes-ai-models-smaller-and-cheaper-20250718/)
* [2025-07-20, 21:05:19](https://news.ycombinator.com/item?id=44629300) - [Vanishing home field advantage in English football](https://blog.engora.com/2025/07/vanishing-home-field-advantage-in.html)
* [2025-07-20, 20:35:00](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss) - [Iran Seeks Three Cloud Providers To Power Its Government](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss)
* [2025-07-20, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss) - [Remote Access Trojan (RAT) Found in the AUR (Arch Linux User Repository)](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss)
* [2025-07-20, 15:49:00](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss) - [Intel Has Discontinued Clear Linux, Effective Immediately](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss)
* [2025-07-20, 15:03:56](https://news.ycombinator.com/item?id=44625846) - [Solving a Childhood Mystery: How BASIC Games Learned to Win](https://sublevelgames.github.io/blogs/2025-07-20-basic-game-hexapawn/)
* [2025-07-20, 11:04:00](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss) - [The Latest Windows PCs Remember Everything](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss)
* [2025-07-20, 06:18:00](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss) - [Infographic: Every Microsoft Acquisition Since 1986](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss)
* [2025-07-20, 01:33:00](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss) - [Is Tor Trustworthy and Safe?](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss)
