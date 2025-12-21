# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [romforth: Ultra Portable, Small, Baremetal Forth for various processors](https://github.com/romforth/romforth) - This project introduces a highly portable and lightweight bare-metal implementation of Forth, optimized for diverse processors.

* [Bell Labs 'Unix' Tape from 1974 Successfully Dumped to a Tarball](https://tech.slashdot.org/story/25/12/21/020235/bell-labs-unix-tape-from-1974-successfully-dumped-to-a-tarball?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A historical Unix tape from 1974 has been successfully converted to a tarball, preserving vintage computation history.

* [WireGuard® implementation written in Rust](https://mullvad.net/en/blog/announcing-gotatun-the-future-of-wireguard-at-mullvad-vpn) - Mullvad VPN reveals a Rust-written WireGuard implementation, aiming for enhanced performance and security.

* [A Decade on Datomic - Davis Shepherd & Jonathan Indig (Netflix)](https://www.youtube.com/watch?v=gJ9UZlr6C6M) - A video reflection on ten years of Datomic's evolution and its usage within Netflix's infrastructure.

* [EV Battery-Swapping Startup That Raised $330 Million Files for Bankruptcy](https://hardware.slashdot.org/story/25/12/20/0733202/ev-battery-swapping-startup-that-raised-330-million-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A significant EV battery-swapping startup declares bankruptcy, raising concerns over its scalability and impact.

## Privacy and Cybersecurity

* [Flock and Cyble Inc. Weaponize "Cybercrime" Takedowns to Silence Critics](https://haveibeenflocked.com/news/cyble-downtime) - An investigation alleges misuse of cybercrime takedown tools to stifle dissent and criticism against corporations.

* [Privacy doesn't mean anything anymore, anonymity does](https://servury.com/blog/privacy-is-marketing-anonymity-is-architecture/) - Analyzing the shift from privacy to anonymity in a highly interconnected digital world.

* [Google Sues SerpApi Over Scraping and Reselling Search Data](https://yro.slashdot.org/story/25/12/19/2317247/google-sues-serpapi-over-scraping-and-reselling-search-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google takes legal action against SerpApi for allegedly scraping and monetizing its search data without authorization.

* [Fake Leonardo DiCaprio Movie Torrent Drops Agent Tesla Through Layered PowerShell Chain](https://soylentnews.org/article.pl?sid=25/12/19/0538241&from=rss) - A warning about a deceptive torrent exploiting security vulnerabilities to spread malware.

* [Flock Executive Says Their Camera Helped Find Shooting Suspect, Addresses Privacy Concerns](https://yro.slashdot.org/story/25/12/20/1940214/flock-executive-says-their-camera-helped-find-shooting-suspect-addresses-privacy-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discussion of surveillance technology's role in criminal investigations and the privacy implications.

## Scientific Discoveries and Innovations

* [James Webb Space Telescope Confirms 1st 'Runaway' Supermassive Black Hole](https://science.slashdot.org/story/25/12/19/2330204/james-webb-space-telescope-confirms-1st-runaway-supermassive-black-hole?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The James Webb Space Telescope identifies a runaway supermassive black hole, marking a breakthrough in space research.

* [Indoor Tanning Makes Youthful Skin Much Older on a Genetic Level](https://soylentnews.org/article.pl?sid=25/12/20/018216&from=rss) - Study reveals tanning's genetic impact on accelerating skin aging.

* [This Star is Being Eaten Alive—and its Explosive Death Will be Visible in Broad Daylight](https://soylentnews.org/article.pl?sid=25/12/18/139231&from=rss) - Astronomers predict a star's explosive demise will soon be observable even during the day.

* [After 50 Years, MIT Chemists Finally Synthesize Elusive Anti-Cancer Compound](https://soylentnews.org/article.pl?sid=25/12/17/0147256&from=rss) - Scientists achieve a half-century-old goal by successfully synthesizing an important anti-cancer compound.

* [Forget Flowers: These Ancient Plants Attract Pollinators by Getting Hot](https://soylentnews.org/article.pl?sid=25/12/17/027253&from=rss) - Exploratory research on plant thermogenesis and its role in pollination strategies.

## Programming and Development Tools

* [Show HN: Jmail – Google Suite for Epstein files](https://www.jmail.world) - An innovative suite allowing exploration of publicly released Epstein files.

* [I spent a week without IPv4 to understand IPv6 transition mechanisms](https://www.apalrd.net/posts/2023/network_ipv6/) - A firsthand account of transitioning entirely to IPv6 as a learning experiment.

* [Hash tables in Go and advantage of self-hosted compilers](https://rushter.com/blog/go-and-hashmaps/) - Insight into Go's use of hashmaps and the benefits of its self-hosted compilation process.

* [Granule, a statically-typed linear functional language with graded modal types](https://github.com/granule-project/granule) - Introducing Granule, a language emphasizing linear functionality with advanced type systems.

* [Go feature: Modernized go fix](https://antonz.org/accepted/modernized-go-fix/) - Updates to Go's 'fix' features for modern software improvements.

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

* [2025-12-21, 03:26:39](https://lobste.rs/s/wrcgvd/romforth_ultra_portable_small_baremetal) - [romforth: Ultra Portable, Small, Baremetal Forth for various processors](https://github.com/romforth/romforth)
* [2025-12-21, 03:17:00](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss) - [Indoor Tanning Makes Youthful Skin Much Older on a Genetic Level](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss)
* [2025-12-21, 03:12:26](https://lobste.rs/s/nghxxz/faster_practical_modular_inversion) - [Faster practical modular inversion](https://purplesyringa.moe/blog/faster-practical-modular-inversion/)
* [2025-12-21, 02:02:00](https://tech.slashdot.org/story/25/12/21/020235/bell-labs-unix-tape-from-1974-successfully-dumped-to-a-tarball?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bell Labs &apos;Unix&apos; Tape from 1974 Successfully Dumped to a Tarball](https://tech.slashdot.org/story/25/12/21/020235/bell-labs-unix-tape-from-1974-successfully-dumped-to-a-tarball?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 01:51:19](https://lobste.rs/s/1ns3ao/how_capacity_hints_work_go) - [How capacity hints work in Go](https://www.grobinson.net/2023/09/30/how-capacity-hints-work-in-go/)
* [2025-12-21, 01:12:31](https://news.ycombinator.com/item?id=46341305) - [Flock and Cyble Inc. Weaponize \&quot;Cybercrime\&quot; Takedowns to Silence Critics](https://haveibeenflocked.com/news/cyble-downtime)
* [2025-12-21, 00:41:14](https://lobste.rs/s/gs1qkp/go_feature_modernized_go_fix) - [Go feature: Modernized go fix](https://antonz.org/accepted/modernized-go-fix/)
* [2025-12-20, 23:38:00](https://developers.slashdot.org/story/25/12/20/2335253/does-ai-really-make-coders-faster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Does AI Really Make Coders Faster?](https://developers.slashdot.org/story/25/12/20/2335253/does-ai-really-make-coders-faster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 23:32:15](https://lobste.rs/s/tilcty/i_spent_week_without_ipv4_understand_ipv6) - [I spent a week without IPv4 to understand IPv6 transition mechanisms](https://www.apalrd.net/posts/2023/network_ipv6/)
* [2025-12-20, 22:38:53](https://lobste.rs/s/zq9zzx/bedrock_2012) - [Bedrock (2012)](https://infrequently.org/2012/04/bedrock/)
* [2025-12-20, 22:34:00](https://soylentnews.org/article.pl?sid=25/12/19/0538241&amp;from=rss) - [Fake Leonardo DiCaprio Movie Torrent Drops Agent Tesla Through Layered PowerShell Chain](https://soylentnews.org/article.pl?sid=25/12/19/0538241&amp;from=rss)
* [2025-12-20, 21:34:00](https://tech.slashdot.org/story/25/12/20/2059205/parrot-os-switches-to-kde-plasma-desktop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Parrot OS Switches to KDE Plasma Desktop](https://tech.slashdot.org/story/25/12/20/2059205/parrot-os-switches-to-kde-plasma-desktop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 21:27:12](https://lobste.rs/s/vdexco/granule_statically_typed_linear) - [Granule, a statically-typed linear functional language with graded modal types](https://github.com/granule-project/granule)
* [2025-12-20, 21:26:14](https://news.ycombinator.com/item?id=46339777) - [Claude in Chrome](https://claude.com/chrome)
* [2025-12-20, 21:17:47](https://lobste.rs/s/ikae1r/backing_up_spotify) - [Backing up Spotify](https://annas-archive.li/blog/backing-up-spotify.html)
* [2025-12-20, 21:00:05](https://news.ycombinator.com/item?id=46339600) - [Show HN: Jmail – Google Suite for Epstein files](https://www.jmail.world)
* [2025-12-20, 20:50:43](https://news.ycombinator.com/item?id=46339537) - [MIRA – An open-source persistent AI entity with memory](https://github.com/taylorsatula/mira-OSS)
* [2025-12-20, 20:34:00](https://yro.slashdot.org/story/25/12/20/1940214/flock-executive-says-their-camera-helped-find-shooting-suspect-addresses-privacy-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Flock Executive Says Their Camera Helped Find Shooting Suspect, Addresses Privacy Concerns](https://yro.slashdot.org/story/25/12/20/1940214/flock-executive-says-their-camera-helped-find-shooting-suspect-addresses-privacy-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 19:56:47](https://news.ycombinator.com/item?id=46339031) - [Ireland’s Diarmuid Early wins world Microsoft Excel title](https://www.bbc.com/news/articles/cj4qzgvxxgvo)
* [2025-12-20, 19:36:16](https://lobste.rs/s/8rpa2g/ruby_s_website_got_overhaul) - [Ruby&apos;s website got an overhaul](https://www.ruby-lang.org/en/)
* [2025-12-20, 19:34:00](https://news.slashdot.org/story/25/12/20/0418259/military-satellites-now-maneuver-watch-each-other-and-monitor-signals-and-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Military Satellites Now Maneuver, Watch Each Other, and Monitor Signals and Data](https://news.slashdot.org/story/25/12/20/0418259/military-satellites-now-maneuver-watch-each-other-and-monitor-signals-and-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 18:34:00](https://slashdot.org/story/25/12/20/0754203/subscription-captivity-when-things-you-buy-own-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Subscription Captivity&apos;: When Things You Buy Own You](https://slashdot.org/story/25/12/20/0754203/subscription-captivity-when-things-you-buy-own-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 18:31:23](https://news.ycombinator.com/item?id=46338365) - [I spent a week without IPv4 (2023)](https://www.apalrd.net/posts/2023/network_ipv6/)
* [2025-12-20, 18:28:41](https://news.ycombinator.com/item?id=46338339) - [Backing Up Spotify](https://annas-archive.li/blog/backing-up-spotify.html)
* [2025-12-20, 18:26:44](https://lobste.rs/s/dmqgar/automated_equality_checks_c_with) - [Automated Equality Checks in C++ with Reflection (C++26)](https://lemire.me/blog/2025/11/09/automated-equality-checks-in-c-with-reflection-c26/)
* [2025-12-20, 18:06:04](https://news.ycombinator.com/item?id=46338156) - [Depot (YC W23) Is Hiring an Enterprise Support Engineer (Remote/US)](https://www.ycombinator.com/companies/depot/jobs/jhGxVjO-enterprise-support-engineer)
* [2025-12-20, 17:49:18](https://news.ycombinator.com/item?id=46338016) - [Big GPUs don&apos;t need big PCs](https://www.jeffgeerling.com/blog/2025/big-gpus-dont-need-big-pcs)
* [2025-12-20, 17:45:48](https://news.ycombinator.com/item?id=46337984) - [OpenSCAD is kinda neat](https://nuxx.net/blog/2025/12/20/openscad-is-kinda-neat/)
* [2025-12-20, 17:44:00](https://soylentnews.org/article.pl?sid=25/12/19/0524257&amp;from=rss) - [Nissan Adds Hearing Test and Custom Equilization to Car Audio](https://soylentnews.org/article.pl?sid=25/12/19/0524257&amp;from=rss)
* [2025-12-20, 17:34:00](https://hardware.slashdot.org/story/25/12/20/0733202/ev-battery-swapping-startup-that-raised-330-million-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EV Battery-Swapping Startup That Raised $330 Million Files for Bankruptcy](https://hardware.slashdot.org/story/25/12/20/0733202/ev-battery-swapping-startup-that-raised-330-million-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 17:10:06](https://news.ycombinator.com/item?id=46337656) - [You have reached the end of the internet (2006)](https://hmpg.net/)
* [2025-12-20, 16:45:48](https://news.ycombinator.com/item?id=46337438) - [Pure Silicon Demo Coding: No CPU, No Memory, Just 4k Gates](https://www.a1k0n.net/2025/12/19/tiny-tapeout-demo.html)
* [2025-12-20, 16:34:00](https://news.slashdot.org/story/25/12/20/0643217/firefox-will-ship-with-an-ai-kill-switch-to-completely-disable-all-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Will Ship With an &apos;AI Kill Switch&apos; To Completely Disable All AI Features](https://news.slashdot.org/story/25/12/20/0643217/firefox-will-ship-with-an-ai-kill-switch-to-completely-disable-all-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 16:08:17](https://news.ycombinator.com/item?id=46337134) - [Why do people leave comments on OpenBenches?](https://shkspr.mobi/blog/2025/12/why-do-people-leave-comments-on-openbenches/)
* [2025-12-20, 16:07:24](https://news.ycombinator.com/item?id=46337123) - [Over 40% of deceased drivers in vehicle crashes test positive for THC: Study](https://www.facs.org/media-center/press-releases/2025/over-40-of-deceased-drivers-in-motor-vehicle-crashes-test-positive-for-thc-study-shows/)
* [2025-12-20, 15:43:15](https://news.ycombinator.com/item?id=46336947) - [Go ahead, self-host Postgres](https://pierce.dev/notes/go-ahead-self-host-postgres#user-content-fn-1)
* [2025-12-20, 15:37:54](https://lobste.rs/s/witasq/detecting_goroutine_leaks_with_synctest) - [Detecting goroutine leaks with synctest/pprof](https://antonz.org/detecting-goroutine-leaks/)
* [2025-12-20, 15:34:00](https://politics.slashdot.org/story/25/12/20/0259228/pro-ai-group-launches-first-of-many-attack-ads-for-us-election?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pro-AI Group Launches First of Many Attack Ads for US Election](https://politics.slashdot.org/story/25/12/20/0259228/pro-ai-group-launches-first-of-many-attack-ads-for-us-election?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 15:03:24](https://lobste.rs/s/wds9um/hash_tables_go_advantage_self_hosted) - [Hash tables in Go and advantage of self-hosted compilers](https://rushter.com/blog/go-and-hashmaps/)
* [2025-12-20, 13:50:26](https://lobste.rs/s/glvd20/mysterious_forces_steering_views_on) - [The Mysterious Forces Steering Views on Hacker News](https://マリウス.com/the-mysterious-forces-steering-views-on-hacker-news/)
* [2025-12-20, 13:39:47](https://news.ycombinator.com/item?id=46336104) - [Show HN: HN Wrapped 2025 - an LLM reviews your year on HN](https://hn-wrapped.kadoa.com?year=2025)
* [2025-12-20, 13:38:24](https://news.ycombinator.com/item?id=46336097) - [Immersa: Open-source Web-based 3D Presentation Tool](https://github.com/ertugrulcetin/immersa)
* [2025-12-20, 13:20:57](https://news.ycombinator.com/item?id=46335994) - [Approaching 50 Years of String Theory](https://www.math.columbia.edu/~woit/wordpress/?p=15401)
* [2025-12-20, 13:13:42](https://lobste.rs/s/codkgd/proving_bounds_for_randomized_maxcut) - [Proving bounds for the Randomized MaxCut Approximation algorithm in Lean4](https://abhamra.com/blog/randomized-maxcut/)
* [2025-12-20, 12:57:00](https://soylentnews.org/article.pl?sid=25/12/19/0522251&amp;from=rss) - [iRobot Swept Into Bankruptcy](https://soylentnews.org/article.pl?sid=25/12/19/0522251&amp;from=rss)
* [2025-12-20, 10:00:00](https://news.slashdot.org/story/25/12/19/2336215/trump-dismantling-national-center-for-atmospheric-research-in-colorado?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Dismantling National Center For Atmospheric Research In Colorado](https://news.slashdot.org/story/25/12/19/2336215/trump-dismantling-national-center-for-atmospheric-research-in-colorado?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 08:17:00](https://soylentnews.org/article.pl?sid=25/12/19/0429209&amp;from=rss) - [Google Releases its New Google Sans Flex Font as Open Source](https://soylentnews.org/article.pl?sid=25/12/19/0429209&amp;from=rss)
* [2025-12-20, 08:09:17](https://news.ycombinator.com/item?id=46334424) - [Skills Officially Comes to Codex](https://developers.openai.com/codex/skills/)
* [2025-12-20, 07:39:26](https://news.ycombinator.com/item?id=46334299) - [NTP at NIST Boulder Has Lost Power](https://lists.nanog.org/archives/list/nanog@lists.nanog.org/message/ACADD3NKOG2QRWZ56OSNNG7UIEKKTZXL/)
* [2025-12-20, 07:00:00](https://science.slashdot.org/story/25/12/19/2330204/james-webb-space-telescope-confirms-1st-runaway-supermassive-black-hole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [James Webb Space Telescope Confirms 1st &apos;Runaway&apos; Supermassive Black Hole](https://science.slashdot.org/story/25/12/19/2330204/james-webb-space-telescope-confirms-1st-runaway-supermassive-black-hole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 06:33:54](https://lobste.rs/s/cmlspo/decade_on_datomic_davis_shepherd) - [A Decade on Datomic - Davis Shepherd &amp; Jonathan Indig (Netflix)](https://www.youtube.com/watch?v=gJ9UZlr6C6M)
* [2025-12-20, 06:22:55](https://lobste.rs/s/rlnnbu/porting_html5_parser_swift) - [Porting an HTML5 Parser to Swift](https://ikyle.me/blog/2025/swift-justhtml-porting-html5-parser-to-swift)
* [2025-12-20, 06:21:05](https://news.ycombinator.com/item?id=46334025) - [Privacy doesn&apos;t mean anything anymore, anonymity does](https://servury.com/blog/privacy-is-marketing-anonymity-is-architecture/)
* [2025-12-20, 03:30:00](https://yro.slashdot.org/story/25/12/19/2317247/google-sues-serpapi-over-scraping-and-reselling-search-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Sues SerpApi Over Scraping and Reselling Search Data](https://yro.slashdot.org/story/25/12/19/2317247/google-sues-serpapi-over-scraping-and-reselling-search-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 03:27:00](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss) - [This Star is Being Eaten Alive—and its Explosive Death Will be Visible in Broad Daylight](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss)
* [2025-12-20, 02:39:37](https://lobste.rs/s/rf5t2n/pedagogy_recommendations) - [Pedagogy Recommendations](https://parentheticallyspeaking.org/articles/pedagogy-recommendations/)
* [2025-12-20, 02:19:19](https://lobste.rs/s/hgqgdt/introducing_css_grid_lanes) - [Introducing CSS Grid Lanes](https://webkit.org/blog/17660/introducing-css-grid-lanes/)
* [2025-12-20, 01:40:00](https://slashdot.org/story/25/12/19/2252254/airbus-moving-critical-systems-away-from-aws-google-and-microsoft-citing-data-sovereignty-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbus Moving Critical Systems Away From AWS, Google, and Microsoft Citing Data Sovereignty Concerns](https://slashdot.org/story/25/12/19/2252254/airbus-moving-critical-systems-away-from-aws-google-and-microsoft-citing-data-sovereignty-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 01:00:00](https://developers.slashdot.org/story/25/12/19/236259/stanford-computer-science-grads-find-their-degrees-no-longer-guarantee-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stanford Computer Science Grads Find Their Degrees No Longer Guarantee Jobs](https://developers.slashdot.org/story/25/12/19/236259/stanford-computer-science-grads-find-their-degrees-no-longer-guarantee-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 00:20:00](https://it.slashdot.org/story/25/12/19/2241221/ten-mistakes-marred-firewall-upgrade-at-australian-telco-contributing-to-two-deaths?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ten Mistakes Marred Firewall Upgrade At Australian Telco, Contributing To Two Deaths](https://it.slashdot.org/story/25/12/19/2241221/ten-mistakes-marred-firewall-upgrade-at-australian-telco-contributing-to-two-deaths?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 00:16:33](https://lobste.rs/s/jflix6/unix_v4_tape_from_university_utah) - [UNIX V4 tape from University of Utah](https://archive.org/details/utah_unix_v4_raw)
* [2025-12-19, 22:47:30](https://lobste.rs/s/uo16ri/what_do_people_love_about_rust) - [What do people love about Rust?](https://blog.rust-lang.org/2025/12/19/what-do-people-love-about-rust/)
* [2025-12-19, 22:43:00](https://soylentnews.org/article.pl?sid=25/12/18/133249&amp;from=rss) - [Mozilla&apos;s New CEO: Firefox Will Become an “AI Browser”](https://soylentnews.org/article.pl?sid=25/12/18/133249&amp;from=rss)
* [2025-12-19, 20:57:45](https://lobste.rs/s/lqvi24/rust_s_block_pattern) - [Rust’s Block Pattern](https://notgull.net/block-pattern/)
* [2025-12-19, 17:55:00](https://soylentnews.org/article.pl?sid=25/12/18/046237&amp;from=rss) - [Resolving to Spend Less Time on Your Smartphone? Understanding Your Travel Habits Can Help](https://soylentnews.org/article.pl?sid=25/12/18/046237&amp;from=rss)
* [2025-12-19, 17:53:00](https://lobste.rs/s/3vdhci/help_my_website_is_too_small) - [Help my website is too small](https://lukeplant.me.uk/blog/posts/help-my-website-is-too-small/)
* [2025-12-19, 17:11:56](https://lobste.rs/s/l854tb/love_letter_raycast) - [A love letter to Raycast](https://rmoff.net/2025/12/18/a-love-letter-to-raycast/)
* [2025-12-19, 14:20:45](https://lobste.rs/s/m1teof/wireguard_implementation_written_rust) - [WireGuard® implementation written in Rust](https://mullvad.net/en/blog/announcing-gotatun-the-future-of-wireguard-at-mullvad-vpn)
* [2025-12-19, 13:21:00](https://soylentnews.org/article.pl?sid=25/12/18/044218&amp;from=rss) - [UK to “Encourage” Apple and Google to Put Nudity-Blocking Systems on Phones](https://soylentnews.org/article.pl?sid=25/12/18/044218&amp;from=rss)
* [2025-12-19, 09:51:01](https://lobste.rs/s/e6zmjh/go_ahead_self_host_postgres) - [Go ahead, self-host Postgres](https://pierce.dev/notes/go-ahead-self-host-postgres)
* [2025-12-19, 08:14:00](https://soylentnews.org/article.pl?sid=25/12/18/0358200&amp;from=rss) - [Google Translate expands live translation to all earbuds on Android](https://soylentnews.org/article.pl?sid=25/12/18/0358200&amp;from=rss)
* [2025-12-19, 08:11:00](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss) - [British Billboards Are Watching You](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss)
* [2025-12-19, 03:37:00](https://soylentnews.org/article.pl?sid=25/12/17/0218212&amp;from=rss) - [UK Strengthens Subsea Cables Against Russian Interference](https://soylentnews.org/article.pl?sid=25/12/17/0218212&amp;from=rss)
* [2025-12-18, 22:51:00](https://soylentnews.org/article.pl?sid=25/12/17/027253&amp;from=rss) - [Forget Flowers: These Ancient Plants Attract Pollinators by Getting Hot](https://soylentnews.org/article.pl?sid=25/12/17/027253&amp;from=rss)
* [2025-12-18, 18:04:00](https://soylentnews.org/article.pl?sid=25/12/17/0155253&amp;from=rss) - [Foxconn is Building a Massive Factory in KY, but Probably Not for Apple](https://soylentnews.org/article.pl?sid=25/12/17/0155253&amp;from=rss)
* [2025-12-18, 13:15:00](https://soylentnews.org/article.pl?sid=25/12/17/0154226&amp;from=rss) - [The Tor Project is Making a Switch to Rust, Ditches C](https://soylentnews.org/article.pl?sid=25/12/17/0154226&amp;from=rss)
* [2025-12-18, 08:38:00](https://soylentnews.org/article.pl?sid=25/12/17/0149259&amp;from=rss) - [Ford Cancels Electric F-150](https://soylentnews.org/article.pl?sid=25/12/17/0149259&amp;from=rss)
* [2025-12-18, 03:46:00](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss) - [After 50 Years, MIT Chemists Finally Synthesize Elusive Anti-Cancer Compound](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss)
* [2025-12-17, 23:01:00](https://soylentnews.org/article.pl?sid=25/12/16/0745203&amp;from=rss) - [This Group Pays Bounties to Repair Broken Devices—Even If the Fix Breaks the Law](https://soylentnews.org/article.pl?sid=25/12/16/0745203&amp;from=rss)
* [2025-12-17, 18:18:00](https://soylentnews.org/article.pl?sid=25/12/16/0740251&amp;from=rss) - [Norovirus Cases Surging in U.S.](https://soylentnews.org/article.pl?sid=25/12/16/0740251&amp;from=rss)
* [2025-12-17, 17:50:45](https://news.ycombinator.com/item?id=46302928) - [Perfecting Steve Baer&apos;s Triple Dome](https://vorth.github.io/vzome-sharing/2024/02/18/baer-dome-from-H4-1001-09-13-04.html)
* [2025-12-17, 13:34:00](https://soylentnews.org/article.pl?sid=25/12/16/0735240&amp;from=rss) - [Verizon Refused to Unlock Man&apos;s iPhone, So He Sued the Carrier and Won](https://soylentnews.org/article.pl?sid=25/12/16/0735240&amp;from=rss)
* [2025-12-17, 12:08:21](https://news.ycombinator.com/item?id=46301059) - [Log level &apos;error&apos; should mean that something needs to be fixed](https://utcc.utoronto.ca/~cks/space/blog/programming/ErrorsShouldRequireFixing)
* [2025-12-17, 08:48:00](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss) - [A Simple Pill Could Replace Injections for Treating Gonorrhea](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss)
* [2025-12-17, 04:03:00](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss) - [Australians Install 100,000 Home Battery Systems in 17 Weeks, and They Are Getting Bigger](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss)
