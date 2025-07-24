# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Updates

* [systemd 258-rc1 Is A Massive Feature Release With New Tools, More Than 260 Changes](https://www.phoronix.com/news/systemd-258-rc1) ([Comments](https://lobste.rs/s/p1fztx/systemd_258_rc1_is_massive_feature))

* [FDA's New Drug Approval AI Is Generating Fake Studies](https://science.slashdot.org/story/25/07/23/2044251/fdas-new-drug-approval-ai-is-generating-fake-studies?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://science.slashdot.org/story/25/07/23/2044251/fdas-new-drug-approval-ai-is-generating-fake-studies?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [You Can Now Disable All AI Features in Zed](https://zed.dev/blog/disable-ai-features) ([Comments](https://lobste.rs/s/sk2yop/you_can_now_disable_all_ai_features_zed))

* [NPM 'accidentally' removes Stylus package, breaks builds and pipelines](https://www.bleepingcomputer.com/news/security/npm-accidentally-removes-stylus-package-breaks-builds-and-pipelines/) ([Comments](https://lobste.rs/s/2i7to2/npm_accidentally_removes_stylus_package))

## Cybersecurity Concerns and Incidents

* [Shattering the Rotation Illusion: The Attacker View & AWSKeyLockdown](https://www.clutch.security/blog/shattering-the-rotation-illusion-part-6-the-attackers-perspective-and-introducing-awskeylockdown) ([Comments](https://news.ycombinator.com/item?id=44667472))

* [A Surveillance Vendor Was Caught Exploiting a New SS7 Attack to Track People's Phone Locations](https://soylentnews.org/article.pl?sid=25/07/23/1249230&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/07/23/1249230&from=rss))

* [Jitsi privacy flaw enables one-click stealth audio and video capture](https://zimzi.substack.com/p/jitsi-privacy-flaw-that-enables-one) ([Comments](https://news.ycombinator.com/item?id=44663684))

* [US Nuclear Weapons Agency 'Among 400 Organizations Breached By Chinese Hackers'](https://news.slashdot.org/story/25/07/23/1652240/us-nuclear-weapons-agency-among-400-organizations-breached-by-chinese-hackers?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.slashdot.org/story/25/07/23/1652240/us-nuclear-weapons-agency-among-400-organizations-breached-by-chinese-hackers?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Innovative and Unique Projects

* [BGP.Tools: Browse the Internet Ecosystem](https://bgp.tools/) ([Comments](https://news.ycombinator.com/item?id=44665815))

* [TrackWeight: Use your Mac trackpad as a weighing scale](https://github.com/KrishKrosh/TrackWeight) ([Comments](https://lobste.rs/s/dtmziw/trackweight_use_your_mac_trackpad_as))

* [CARA – High precision robot dog using rope](https://www.aaedmusa.com/projects/cara) ([Comments](https://news.ycombinator.com/item?id=44661846))

* [Meta Unveils Wristband That Controls Computers With Muscle Signals](https://tech.slashdot.org/story/25/07/23/1714242/meta-unveils-wristband-that-controls-computers-with-muscle-signals?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://tech.slashdot.org/story/25/07/23/1714242/meta-unveils-wristband-that-controls-computers-with-muscle-signals?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Environmental and Societal Developments

* [Electric cars produce far less brake dust pollution than combustion-engine cars](https://modernengineeringmarvels.com/2025/07/22/surprising-science-how-electric-cars-quietly-transform-urban-air/) ([Comments](https://news.ycombinator.com/item?id=44666157))

* [Matson Suspends Shipping EVs Citing Hazards of Lithium-ion Batteries](https://soylentnews.org/article.pl?sid=25/07/22/074257&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/07/22/074257&from=rss))

* [Top UN Court Says Countries Can Sue Each Other Over Climate Change](https://news.slashdot.org/story/25/07/23/1741214/top-un-court-says-countries-can-sue-each-other-over-climate-change?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.slashdot.org/story/25/07/23/1741214/top-un-court-says-countries-can-sue-each-other-over-climate-change?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [How Much Would You Pay For an American-Made Laptop? Palmer Luckey Wants To Know](https://hardware.slashdot.org/story/25/07/23/218247/how-much-would-you-pay-for-an-american-made-laptop-palmer-luckey-wants-to-know?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://hardware.slashdot.org/story/25/07/23/218247/how-much-would-you-pay-for-an-american-made-laptop-palmer-luckey-wants-to-know?utm_source=rss1.0mainlinkanon&utm_medium=feed))

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

* [2025-07-24, 06:40:48](https://news.ycombinator.com/item?id=44667667) - [Itch.io: Update on NSFW Content](https://itch.io/updates/update-on-nsfw-content)
* [2025-07-24, 06:23:36](https://lobste.rs/s/p1fztx/systemd_258_rc1_is_massive_feature) - [systemd 258-rc1 Is A Massive Feature Release With New Tools, More Than 260 Changes](https://www.phoronix.com/news/systemd-258-rc1)
* [2025-07-24, 06:07:17](https://news.ycombinator.com/item?id=44667472) - [Shattering the Rotation Illusion: The Attacker View &amp; AWSKeyLockdown](https://www.clutch.security/blog/shattering-the-rotation-illusion-part-6-the-attackers-perspective-and-introducing-awskeylockdown)
* [2025-07-24, 06:04:03](https://lobste.rs/s/ucm2ip/jnj_j_janet) - [JNJ: J iN Janet](https://sr.ht/~subsetpark/JNJ/)
* [2025-07-24, 05:28:00](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss) - [A Surveillance Vendor Was Caught Exploiting a New SS7 Attack to Track People&apos;s Phone Locations](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss)
* [2025-07-24, 04:20:52](https://news.ycombinator.com/item?id=44666896) - [CVE-2025-54090: Apache HTTP Server: &apos;RewriteCond expr&apos; always evaluates to true](https://github.com/apache/httpd/commit/8abb3d06b23975705ebcf4bf4476464fd0b9bd0b)
* [2025-07-24, 02:13:20](https://news.ycombinator.com/item?id=44666157) - [Electric cars produce far less brake dust pollution than combustion-engine cars](https://modernengineeringmarvels.com/2025/07/22/surprising-science-how-electric-cars-quietly-transform-urban-air/)
* [2025-07-24, 02:10:00](https://science.slashdot.org/story/25/07/23/2021220/us-to-withdraw-from-unesco-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US To Withdraw From UNESCO Again](https://science.slashdot.org/story/25/07/23/2021220/us-to-withdraw-from-unesco-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 01:41:55](https://news.ycombinator.com/item?id=44665984) - [A small web July](https://smallcypress.bearblog.dev/a-small-web-july/)
* [2025-07-24, 01:30:00](https://yro.slashdot.org/story/25/07/24/0055200/administrator-of-major-dark-web-cybercrime-forum-arrested-in-ukraine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Administrator of Major Dark Web Cybercrime Forum Arrested In Ukraine](https://yro.slashdot.org/story/25/07/24/0055200/administrator-of-major-dark-web-cybercrime-forum-arrested-in-ukraine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 01:12:14](https://news.ycombinator.com/item?id=44665815) - [BGP.Tools: Browse the Internet Ecosystem](https://bgp.tools/)
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
* [2025-07-23, 19:02:46](https://news.ycombinator.com/item?id=44662757) - [Major rule about cooking meat turns out to be wrong](https://www.seriouseats.com/meat-resting-science-11776272)
* [2025-07-23, 18:50:00](https://games.slashdot.org/story/25/07/23/1810221/sony-is-fighting-climate-change-by-scaling-back-ps5-performance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony is Fighting Climate Change By Scaling Back PS5 Performance](https://games.slashdot.org/story/25/07/23/1810221/sony-is-fighting-climate-change-by-scaling-back-ps5-performance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 18:21:29](https://lobste.rs/s/sk2yop/you_can_now_disable_all_ai_features_zed) - [You Can Now Disable All AI Features in Zed](https://zed.dev/blog/disable-ai-features)
* [2025-07-23, 18:10:00](https://news.slashdot.org/story/25/07/23/1741214/top-un-court-says-countries-can-sue-each-other-over-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Top UN Court Says Countries Can Sue Each Other Over Climate Change](https://news.slashdot.org/story/25/07/23/1741214/top-un-court-says-countries-can-sue-each-other-over-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 17:38:20](https://news.ycombinator.com/item?id=44661846) - [CARA – High precision robot dog using rope](https://www.aaedmusa.com/projects/cara)
* [2025-07-23, 17:30:00](https://tech.slashdot.org/story/25/07/23/1714242/meta-unveils-wristband-that-controls-computers-with-muscle-signals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Unveils Wristband That Controls Computers With Muscle Signals](https://tech.slashdot.org/story/25/07/23/1714242/meta-unveils-wristband-that-controls-computers-with-muscle-signals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 17:24:32](https://news.ycombinator.com/item?id=44661682) - [The Promised LAN](https://tpl.house/)
* [2025-07-23, 17:09:47](https://news.ycombinator.com/item?id=44661527) - [FastVLM: Efficient Vision Encoding for Vision Language Models](https://machinelearning.apple.com/research/fast-vision-language-models)
* [2025-07-23, 16:59:16](https://lobste.rs/s/qpakro/promised_lan) - [The Promised LAN](https://tpl.house/)
* [2025-07-23, 16:52:00](https://news.slashdot.org/story/25/07/23/1652240/us-nuclear-weapons-agency-among-400-organizations-breached-by-chinese-hackers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Nuclear Weapons Agency &apos;Among 400 Organizations Breached By Chinese Hackers&apos;](https://news.slashdot.org/story/25/07/23/1652240/us-nuclear-weapons-agency-among-400-organizations-breached-by-chinese-hackers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 16:19:05](https://lobste.rs/s/lzfgwb/superfunctions_solve_color_problem) - [Superfunctions: solve the \&quot;color\&quot; problem of Python](https://github.com/pomponchik/transfunctions)
* [2025-07-23, 16:14:40](https://lobste.rs/s/x6qsw2/how_we_discovered_recovered_from) - [How we discovered, and recovered from, Postgres corruption on the matrix.org homeserver](https://matrix.org/blog/2025/07/postgres-corruption-postmortem/)
* [2025-07-23, 15:37:40](https://news.ycombinator.com/item?id=44660437) - [Neil Armstrong&apos;s customs form for moon rocks (2016)](https://magazine.uc.edu/editors_picks/recent_features/armstrong/moonrocks.html)
* [2025-07-23, 15:28:58](https://news.ycombinator.com/item?id=44660323) - [US AI Action Plan](https://www.ai.gov/action-plan)
* [2025-07-23, 15:10:00](https://soylentnews.org/article.pl?sid=25/07/22/0822201&amp;from=rss) - [Microsoft Wants to Find Out Why Windows 11 is So Slow](https://soylentnews.org/article.pl?sid=25/07/22/0822201&amp;from=rss)
* [2025-07-23, 14:56:31](https://news.ycombinator.com/item?id=44659921) - [Building better AI tools](https://hazelweakly.me/blog/stop-building-ai-tools-backwards/)
* [2025-07-23, 14:37:12](https://news.ycombinator.com/item?id=44659712) - [Tram Trains](https://www.worksinprogress.news/p/tram-trains)
* [2025-07-23, 14:35:04](https://lobste.rs/s/w2l7hb/migrating_zfs_pool_from_raidz1_raidz2) - [Migrating a ZFS pool from RAIDZ1 to RAIDZ2](https://mtlynch.io/raidz1-to-raidz2/)
* [2025-07-23, 14:31:47](https://lobste.rs/s/uemodw/using_radicle_ci_for_development) - [Using Radicle CI for Development](https://radicle.xyz/2025/07/23/using-radicle-ci-for-development)
* [2025-07-23, 14:01:50](https://lobste.rs/s/2i7to2/npm_accidentally_removes_stylus_package) - [NPM &apos;accidentally&apos; removes Stylus package, breaks builds and pipelines](https://www.bleepingcomputer.com/news/security/npm-accidentally-removes-stylus-package-breaks-builds-and-pipelines/)
* [2025-07-23, 13:52:47](https://news.ycombinator.com/item?id=44659251) - [Why Elixir? Common misconceptions](https://matthewsinclair.com/blog/0181-why-elixir)
* [2025-07-23, 13:27:38](https://news.ycombinator.com/item?id=44659019) - [What to expect from Debian/Trixie](https://michael-prokop.at/blog/2025/07/20/what-to-expect-from-debian-trixie-newintrixie/)
* [2025-07-23, 13:17:38](https://news.ycombinator.com/item?id=44658908) - [Cops say criminals use a Google Pixel with GrapheneOS – I say that&apos;s freedom](https://www.androidauthority.com/why-i-use-grapheneos-on-pixel-3575477/)
* [2025-07-23, 13:06:54](https://lobste.rs/s/5hr5yn/computational_tyranny) - [Computational Tyranny](https://happyfellow.bearblog.dev/computational-tyranny/)
* [2025-07-23, 13:00:55](https://lobste.rs/s/c53kzb/20_years_linux_on_desktop_part_4) - [20 years of Linux on the Desktop (part 4)](https://ploum.net/2025-07-23-linux_desktop4.html)
* [2025-07-23, 12:24:54](https://lobste.rs/s/dtmziw/trackweight_use_your_mac_trackpad_as) - [TrackWeight: Use your Mac trackpad as a weighing scale](https://github.com/KrishKrosh/TrackWeight)
* [2025-07-23, 11:32:31](https://lobste.rs/s/ixfukh/font_size_adjust_is_useful) - [font-size-adjust Is Useful](https://matklad.github.io/2025/07/16/font-size-adjust.html)
* [2025-07-23, 10:24:00](https://soylentnews.org/article.pl?sid=25/07/22/079200&amp;from=rss) - [The Atomic Bomb Marker Inside Your Body](https://soylentnews.org/article.pl?sid=25/07/22/079200&amp;from=rss)
* [2025-07-23, 10:22:42](https://news.ycombinator.com/item?id=44657556) - [Lumo: Privacy-first AI assistant](https://proton.me/blog/lumo-ai)
* [2025-07-23, 10:19:00](https://lobste.rs/s/25kvql/what_is_x_forwarded_for_when_can_you_trust) - [What is X-Forwarded-For and when can you trust it?](https://httptoolkit.com/blog/what-is-x-forwarded-for/)
* [2025-07-23, 09:00:29](https://lobste.rs/s/9tmoou/what_expect_from_debian_trixie) - [What to expect from Debian/trixie](https://michael-prokop.at/blog/2025/07/20/what-to-expect-from-debian-trixie-newintrixie/)
* [2025-07-23, 05:52:14](https://lobste.rs/s/wghfos/extending_emacs_with_fennel_2024) - [Extending Emacs with Fennel (2024)](https://andreyor.st/posts/2024-12-20-extending-emacs-with-fennel/)
* [2025-07-23, 05:35:00](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss) - [Matson Suspends Shipping EVs Citing Hazards of Lithium-ion Batteries](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss)
* [2025-07-23, 00:54:00](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss) - [11,000-Year-Old Feast Uncovered: Why Hunters Hauled Wild Boars Across Mountains](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss)
* [2025-07-22, 22:22:15](https://lobste.rs/s/itpokq/python_3_14_release_candidate_1_is_go) - [Python 3.14 release candidate 1 is go](https://pythoninsider.blogspot.com/2025/07/python-314-release-candidate-1-is-go.html)
* [2025-07-22, 21:20:16](https://news.ycombinator.com/item?id=44653136) - [Vector Tiles are deployed on OpenStreetMap.org](https://blog.openstreetmap.org/2025/07/22/vector-tiles-are-deployed-on-openstreetmap-org/)
* [2025-07-22, 20:09:00](https://soylentnews.org/article.pl?sid=25/07/21/2142206&amp;from=rss) - [Popular Sugar Substitute Linked to Brain Cell Damage and Stroke Risk](https://soylentnews.org/article.pl?sid=25/07/21/2142206&amp;from=rss)
* [2025-07-22, 18:48:00](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss) - [RIP - Ozzy Osborne](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss)
* [2025-07-22, 16:50:09](https://lobste.rs/s/5u6ydr/tailwind_is_worst_all_worlds) - [Tailwind is the Worst of All Worlds](https://colton.dev/blog/tailwind-is-the-worst-of-all-worlds/)
* [2025-07-22, 15:22:00](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss) - [A Strange Fossil at the Edge of the Solar System Just Shook Up Planet Nine Theories](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss)
* [2025-07-22, 13:40:34](https://lobste.rs/s/j1hijj/todos_aren_t_for_doing) - [TODOs aren’t for doing](https://sophiebits.com/2025/07/21/todos-arent-for-doing)
* [2025-07-22, 10:33:00](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss) - [Microsoft Says It Will No Longer Use Engineers in China for Department of Defense Work](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss)
* [2025-07-22, 05:47:00](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss) - [Thelonious Monk, the Teenage Weirdo, and the Battle Over a Lost Sonic Masterpiece](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss)
* [2025-07-22, 01:04:00](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss) - [Meta is Building “Several” Multi-Gigawatt Compute Clusters](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss)
* [2025-07-21, 20:19:00](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss) - [Weird Space Weather Seems to Have Influenced Human Behavior 41,000 years ago](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss)
* [2025-07-21, 15:39:00](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss) - [HP is Going to Monitor PC Usage With a \&quot;Carfax for PCs\&quot; ](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss)
* [2025-07-21, 13:18:47](https://news.ycombinator.com/item?id=44634756) - [(Python) Poste Italiane document parser](https://github.com/genbs/poste-italiane-parser)
* [2025-07-21, 10:55:00](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss) - [Delta Air Lines is Using AI to Set the Maximum Price You’re Willing to Pay](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss)
* [2025-07-21, 07:52:20](https://news.ycombinator.com/item?id=44632739) - [Leprechauns, root causes, and other fairy tales](https://www.tomdalling.com/blog/software-processes/leprechauns-root-causes-and-other-fairy-tails/)
* [2025-07-21, 06:09:00](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss) - [For Algorithms, a Little Memory Outweighs a Lot of Time](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss)
* [2025-07-21, 01:22:00](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss) - [Open, Free, and Completely Ignored: The Strange Afterlife of Symbian](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss)
* [2025-07-20, 22:09:27](https://news.ycombinator.com/item?id=44629805) - [Distillation makes AI models smaller and cheaper](https://www.quantamagazine.org/how-distillation-makes-ai-models-smaller-and-cheaper-20250718/)
* [2025-07-20, 20:35:00](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss) - [Iran Seeks Three Cloud Providers To Power Its Government](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss)
* [2025-07-20, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss) - [Remote Access Trojan (RAT) Found in the AUR (Arch Linux User Repository)](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss)
* [2025-07-20, 15:51:15](https://news.ycombinator.com/item?id=44626359) - [Checklists are hard, but still a good thing](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/ChecklistsAreHardButGood)
* [2025-07-20, 15:49:00](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss) - [Intel Has Discontinued Clear Linux, Effective Immediately](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss)
* [2025-07-20, 11:04:00](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss) - [The Latest Windows PCs Remember Everything](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss)
* [2025-07-20, 08:16:26](https://news.ycombinator.com/item?id=44622994) - [Seven Sisters eclipse will temporarily block stars from view](https://www.discovermagazine.com/the-sciences/the-seven-sisters-eclipse-will-temporarily-block-stars-from-view)
* [2025-07-20, 06:18:00](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss) - [Infographic: Every Microsoft Acquisition Since 1986](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss)
* [2025-07-20, 01:33:00](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss) - [Is Tor Trustworthy and Safe?](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss)
