# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [Jurassic Park computers in excruciating detail](https://fabiensanglard.net/jurrasic_park_computers/index.html) - Explore the technical intricacies and retro charm of the computers featured in the original *Jurassic Park* movie. [Comments](https://lobste.rs/s/xv8dix/jurassic_park_computers_excruciating).

* [Linux 0.11 rewritten in idiomatic Rust, boots in QEMU](https://github.com/Poseidon-fan/linux-0.11-rs) - A revisit to Linux kernel version 0.11, rewritten in Rust to showcase its potential in system-level development. [Comments](https://news.ycombinator.com/item?id=48898134).

* [fred: A text editor that uses C for everything](https://www.youtube.com/watch?v=xz5aPCRxsv4) - A deep dive into a unique text editor implementation that leverages C for all its operations. [Comments](https://lobste.rs/s/nszzsn/fred_text_editor_uses_c_for_everything).

* [Job queues are deceptively tricky](https://typesanitizer.com/blog/job-queues.html) - Insights into the hidden complexities of implementing efficient job queues. [Comments](https://lobste.rs/s/k3frwc/job_queues_are_deceptively_tricky).

* [Git-absorb: git commit --fixup, but automatic](https://github.com/tummychow/git-absorb) - Learn how to streamline your version control process with an automated tool for fixing commits. [Comments](https://lobste.rs/s/nprldj/git_absorb_git_commit_fixup_automatic).

* [The git history command deserves more attention](https://lalitm.com/post/git-history/) - A pitch for an underappreciated Git command and how it could improve your workflow. [Comments](https://lobste.rs/s/tb3el5/git_history_command_deserves_more).

## Science and Discovery

* [Scientists Find Sugar Deep In Our Galaxy](https://science.slashdot.org/story/26/07/14/073233/scientists-find-sugar-deep-in-our-galaxy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Fascinating discovery of sugar molecules far out in our galaxy, hinting at the chemical complexity of space. [Comments](https://science.slashdot.org/story/26/07/14/073233/scientists-find-sugar-deep-in-our-galaxy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Indian scientists produce most detailed 3D atlas of the human brainstem](https://www.bbc.com/news/articles/cg53l737v1qo) - Breakthrough research from India results in the most detailed 3D mapping of the human brainstem. [Comments](https://news.ycombinator.com/item?id=48903082).

* [Japan develops a method to recover up to 90% of lithium from used EV batteries](https://tech.supercarblondie.com/japan-recovers-up-to-90-of-lithium-from-used-ev-batteries/) - A promising new technique for recycling and recovering critical lithium resources. [Comments](https://news.ycombinator.com/item?id=48901569).

* [Alternative(s) to run CUDA on non-Nvidia hardware](https://www.hpcwire.com/2026/07/09/spectral-compute-aims-to-set-cuda-free-will-it-succeed/) - Exploring alternative solutions to CUDA's Nvidia dependence for high-performance computing. [Comments](https://news.ycombinator.com/item?id=48903715).

## Astronomy and Space Exploration

* [New Horizons Pluto Probe Just Woke Itself Up After 321 Days of Hibernation](https://soylentnews.org/article.pl?sid=26/07/12/2132224&amp;from=rss) - NASA's New Horizons spacecraft reactivates after its long hibernation to continue its exploration of the Kuiper Belt. [Comments](https://soylentnews.org/article.pl?sid=26/07/12/2132224&amp;from=rss).

* [Satellite Tracker – Live Map of Starlink and 30k Satellites](https://satellitemap.space/) - Explore the orbits of thousands of satellites, including SpaceX's Starlink, in this fascinating project. [Comments](https://news.ycombinator.com/item?id=48901356).

## Social and Cultural Insights

* [Our Amish Language](https://www.thedial.world/articles/news/amish-pennsylvania-dutch) - A look into the origins and continued use of the Pennsylvania Dutch language among Amish communities. [Comments](https://news.ycombinator.com/item?id=48901645).

* [An Englishwoman who sketched India before photography took hold](https://www.bbc.com/news/articles/cm2drrv6q54o) - Unraveling history through the artwork of a pioneering Englishwoman in India. [Comments](https://news.ycombinator.com/item?id=48900191).

## Environmental and Energy Innovations

* [Australian energy retailers must provide three hours of free daytime electricity](https://lenergy.com.au/free-daytime-electricity-is-coming-heres-how-it-actually-works/) - A novel energy initiative in Australia to incentivize solar power use for households. [Comments](https://news.ycombinator.com/item?id=48902320).

## Business and Economic Impact

* [Over 200 Economists Say 'We Must Act Now' On AI's Economic Impact](https://slashdot.org/story/26/07/13/2210232/over-200-economists-say-we-must-act-now-on-ais-economic-impact?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A coalition of economists highlights the pressing need to address the transformative effects of AI on economy and labor. [Comments](https://slashdot.org/story/26/07/13/2210232/over-200-economists-say-we-must-act-now-on-ais-economic-impact?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Utility Companies Want To Take Control Of Your Home's Smart Thermostat](https://soylentnews.org/article.pl?sid=26/07/12/2137226&amp;from=rss) - An investigation into the increasing control utility companies aim to exert over household smart thermostats. [Comments](https://soylentnews.org/article.pl?sid=26/07/12/2137226&amp;from=rss).

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

* [2026-07-14, 09:24:36](https://lobste.rs/s/xv8dix/jurassic_park_computers_excruciating) - [Jurassic Park computers in excruciating detail](https://fabiensanglard.net/jurrasic_park_computers/index.html)
* [2026-07-14, 08:45:13](https://lobste.rs/s/nprldj/git_absorb_git_commit_fixup_automatic) - [git-absorb: git commit --fixup, but automatic](https://github.com/tummychow/git-absorb)
* [2026-07-14, 08:34:57](https://news.ycombinator.com/item?id=48903777) - [European \&quot;age verification\&quot; \&quot;app\&quot; forcing everyone to use Android or iOS](https://github.com/eu-digital-identity-wallet/av-doc-technical-specification/discussions/19)
* [2026-07-14, 08:24:49](https://news.ycombinator.com/item?id=48903715) - [Alternative(s) to run CUDA on non-Nvidia hardware](https://www.hpcwire.com/2026/07/09/spectral-compute-aims-to-set-cuda-free-will-it-succeed/)
* [2026-07-14, 08:22:52](https://news.ycombinator.com/item?id=48903701) - [Two Case Studies of NaN](https://sebsite.pw/w/20260709-nan.html)
* [2026-07-14, 07:49:04](https://lobste.rs/s/k3frwc/job_queues_are_deceptively_tricky) - [Job queues are deceptively tricky](https://typesanitizer.com/blog/job-queues.html)
* [2026-07-14, 07:05:00](https://science.slashdot.org/story/26/07/14/073233/scientists-find-sugar-deep-in-our-galaxy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Find Sugar Deep In Our Galaxy](https://science.slashdot.org/story/26/07/14/073233/scientists-find-sugar-deep-in-our-galaxy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-14, 06:45:00](https://soylentnews.org/article.pl?sid=26/07/12/2137226&amp;from=rss) - [Utility Companies Want To Take Control Of Your Home&apos;s Smart Thermostat](https://soylentnews.org/article.pl?sid=26/07/12/2137226&amp;from=rss)
* [2026-07-14, 06:43:28](https://news.ycombinator.com/item?id=48903082) - [Indian scientists produce most detailed 3D atlas of the human brainstem](https://www.bbc.com/news/articles/cg53l737v1qo)
* [2026-07-14, 05:57:50](https://news.ycombinator.com/item?id=48902791) - [Just Let Me Write Digits](https://gendx.dev/blog/2026/07/13/input-digits.html)
* [2026-07-14, 05:33:11](https://lobste.rs/s/jfx8do/collection_clock_designs) - [Collection of clock designs](https://clocks.dev)
* [2026-07-14, 04:31:48](https://news.ycombinator.com/item?id=48902320) - [Australian energy retailers must provide three hours of free daytime electricity](https://lenergy.com.au/free-daytime-electricity-is-coming-heres-how-it-actually-works/)
* [2026-07-14, 03:39:55](https://news.ycombinator.com/item?id=48902026) - [YouTrackDB is a general-use object-oriented graph database](https://github.com/JetBrains/youtrackdb)
* [2026-07-14, 03:30:00](https://slashdot.org/story/26/07/13/2210232/over-200-economists-say-we-must-act-now-on-ais-economic-impact?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Over 200 Economists Say &apos;We Must Act Now&apos; On AI&apos;s Economic Impact](https://slashdot.org/story/26/07/13/2210232/over-200-economists-say-we-must-act-now-on-ais-economic-impact?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-14, 03:21:08](https://lobste.rs/s/tb3el5/git_history_command_deserves_more) - [The git history command deserves more attention](https://lalitm.com/post/git-history/)
* [2026-07-14, 02:40:41](https://news.ycombinator.com/item?id=48901645) - [Our Amish Language](https://www.thedial.world/articles/news/amish-pennsylvania-dutch)
* [2026-07-14, 02:29:52](https://lobste.rs/s/xngweb/from_coder_curator) - [From coder to curator](https://staltz.com/from-coder-to-curator)
* [2026-07-14, 02:27:20](https://news.ycombinator.com/item?id=48901569) - [Japan develops a method to recover up to 90% of lithium from used EV batteries](https://tech.supercarblondie.com/japan-recovers-up-to-90-of-lithium-from-used-ev-batteries/)
* [2026-07-14, 02:10:19](https://news.ycombinator.com/item?id=48901454) - [Fundamentals of Wireless Communication (2005)](https://web.stanford.edu/~dntse/wireless_book.html)
* [2026-07-14, 02:00:00](https://soylentnews.org/article.pl?sid=26/07/12/2132224&amp;from=rss) - [New Horizons Pluto Probe Just Woke Itself Up After 321 Days Of Hibernation](https://soylentnews.org/article.pl?sid=26/07/12/2132224&amp;from=rss)
* [2026-07-14, 01:55:24](https://news.ycombinator.com/item?id=48901356) - [Satellite Tracker – Live Map of Starlink and 30k Satellites](https://satellitemap.space/)
* [2026-07-14, 01:36:13](https://news.ycombinator.com/item?id=48901235) - [Is x86 ready to ACE it?](https://chipsandcheese.com/p/is-x86-ready-to-ace-it)
* [2026-07-14, 01:35:23](https://news.ycombinator.com/item?id=48901224) - [The Economics of Recursive Self-Improvement [pdf]](https://elasticity.institute/rsi-paper.pdf)
* [2026-07-14, 01:17:30](https://news.ycombinator.com/item?id=48901126) - [MorphoHDL: A minimalistic language for growing circuits](https://paradigms-of-intelligence.github.io/morpho/)
* [2026-07-14, 01:15:04](https://lobste.rs/s/nszzsn/fred_text_editor_uses_c_for_everything) - [fred: A text editor that uses C for everything](https://www.youtube.com/watch?v=xz5aPCRxsv4)
* [2026-07-14, 00:57:11](https://news.ycombinator.com/item?id=48901010) - [The git history command](https://lalitm.com/post/git-history/)
* [2026-07-13, 23:43:15](https://lobste.rs/s/rtegvw/estimating_heights_new_yorkers_from) - [Estimating the heights of New Yorkers from their scuff marks](https://blog.jse.li/posts/smith9street/)
* [2026-07-13, 23:39:10](https://news.ycombinator.com/item?id=48900432) - [What are Forward Deployed Engineers, and why are they so in demand? (2025)](https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers)
* [2026-07-13, 23:12:22](https://news.ycombinator.com/item?id=48900191) - [An Englishwoman who sketched India before photography took hold](https://www.bbc.com/news/articles/cm2drrv6q54o)
* [2026-07-13, 23:00:00](https://tech.slashdot.org/story/26/07/13/2149251/microsoft-promises-to-fix-search-with-major-windows-11-overhaul?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Promises To Fix Search With Major Windows 11 Overhaul](https://tech.slashdot.org/story/26/07/13/2149251/microsoft-promises-to-fix-search-with-major-windows-11-overhaul?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 22:00:00](https://it.slashdot.org/story/26/07/13/2139254/us-government-warns-that-russia-state-hackers-are-coming-after-your-router?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Government Warns That Russia State Hackers Are Coming After Your Router](https://it.slashdot.org/story/26/07/13/2139254/us-government-warns-that-russia-state-hackers-are-coming-after-your-router?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 21:43:24](https://lobste.rs/s/v3avrp/should_libraries_log_propagate_errors) - [Should Libraries Log or Propagate Errors?](https://lobste.rs/s/v3avrp/should_libraries_log_propagate_errors)
* [2026-07-13, 21:22:00](https://soylentnews.org/article.pl?sid=26/07/12/1514220&amp;from=rss) - [OpenAI Job Listing Suggests ChatGPT Could Someday Replace Junior Analysts at Goldman Sachs](https://soylentnews.org/article.pl?sid=26/07/12/1514220&amp;from=rss)
* [2026-07-13, 21:12:00](https://slashdot.org/story/26/07/13/2111209/german-firm-files-for-insolvency-after-cybercriminals-shut-down-production-for-6-weeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [German Firm Files For Insolvency After Cybercriminals Shut Down Production For 6 Weeks](https://slashdot.org/story/26/07/13/2111209/german-firm-files-for-insolvency-after-cybercriminals-shut-down-production-for-6-weeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 21:01:00](https://news.ycombinator.com/item?id=48898814) - [SalesPatriot (YC W25) Is Hiring Full Stack Engineers (SF)](https://jobs.ashbyhq.com/SalesPatriot/df223727-5781-433e-bc75-2aa5bf8dc8d7)
* [2026-07-13, 20:11:29](https://news.ycombinator.com/item?id=48898134) - [Linux 0.11 rewritten in idiomatic Rust, boots in QEMU](https://github.com/Poseidon-fan/linux-0.11-rs)
* [2026-07-13, 20:03:24](https://lobste.rs/s/ko1ji1/lobste_rs_is_now_running_on_sqlite) - [lobste.rs is now running on SQLite](https://lobste.rs/s/ko1ji1/lobste_rs_is_now_running_on_sqlite)
* [2026-07-13, 20:00:00](https://yro.slashdot.org/story/26/07/13/1740256/states-sue-to-block-paramount-warner-bros-merger-defying-doj?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [States Sue to Block Paramount-Warner Bros Merger, Defying DOJ](https://yro.slashdot.org/story/26/07/13/1740256/states-sue-to-block-paramount-warner-bros-merger-defying-doj?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 19:00:00](https://yro.slashdot.org/story/26/07/13/1732247/apple-reportedly-agreed-to-intel-chips-to-avoid-white-house-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Reportedly Agreed to Intel Chips To Avoid White House Tariffs](https://yro.slashdot.org/story/26/07/13/1732247/apple-reportedly-agreed-to-intel-chips-to-avoid-white-house-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 18:53:53](https://news.ycombinator.com/item?id=48897104) - [The infinite scroll may become endangered if controversial Calif. law passes](https://www.sfgate.com/politics/article/meta-social-media-teenagers-22337724.php)
* [2026-07-13, 18:47:11](https://lobste.rs/s/shzox9/farewell_arps_ipv4_service_on_ipv6_only) - [A Farewell to ARPs: IPv4 Service on IPv6-Only Networks](https://labs.ripe.net/author/remco-van-mook/a-farewell-to-arps-ipv4-service-on-ipv6-only-networks/)
* [2026-07-13, 18:22:16](https://news.ycombinator.com/item?id=48896665) - [Building and shipping Mac and iOS apps without opening Xcode](https://scottwillsey.com/building-and-shipping-mac-and-ios-apps-without-ever-opening-xcode/)
* [2026-07-13, 18:18:25](https://news.ycombinator.com/item?id=48896600) - [Linux on the Sega 32X. Who needs hardware synchronization primitives anyway?](https://cakehonolulu.github.io/linux-on-32x/)
* [2026-07-13, 18:00:00](https://tech.slashdot.org/story/26/07/13/1645252/cloudflare-precursor-watches-your-mouse-and-keyboard-to-decide-if-you-are-human?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Precursor Watches Your Mouse and Keyboard To Decide If You Are Human](https://tech.slashdot.org/story/26/07/13/1645252/cloudflare-precursor-watches-your-mouse-and-keyboard-to-decide-if-you-are-human?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 17:59:47](https://lobste.rs/s/lzls6z/go_flavored_concurrency_c) - [Go-flavored concurrency in C](https://antonz.org/concurrency-in-c/)
* [2026-07-13, 17:00:00](https://tech.slashdot.org/story/26/07/13/1638208/social-media-limits-are-coming-for-teens-across-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Social Media Limits Are Coming For Teens Across Europe](https://tech.slashdot.org/story/26/07/13/1638208/social-media-limits-are-coming-for-teens-across-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 16:40:00](https://soylentnews.org/article.pl?sid=26/07/12/1511228&amp;from=rss) - [China Recovered its First Reusable Rocket and Showed a New Way to Do It](https://soylentnews.org/article.pl?sid=26/07/12/1511228&amp;from=rss)
* [2026-07-13, 16:18:36](https://lobste.rs/s/t0aqzy/human_emacs) - [Human Emacs](https://human-emacs.org/)
* [2026-07-13, 16:01:28](https://lobste.rs/s/yf6vbc/just_let_me_write_digits) - [Just Let Me Write Digits](https://gendignoux.com/blog/2026/07/13/input-digits.html)
* [2026-07-13, 16:00:00](https://tech.slashdot.org/story/26/07/13/0548235/why-55-of-americans-stopped-posting-on-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why 55% of Americans Stopped Posting On Social Media](https://tech.slashdot.org/story/26/07/13/0548235/why-55-of-americans-stopped-posting-on-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 15:35:04](https://lobste.rs/s/5t3wzn/control_ideas_not_code) - [Control the ideas, not the code](https://antirez.com/news/169)
* [2026-07-13, 15:23:52](https://lobste.rs/s/abza3v/how_early_sunos_did_diskless) - [How early SunOS did diskless workstations before NFS](https://utcc.utoronto.ca/~cks/space/blog/solaris/SunOSDisklessWithoutNFS)
* [2026-07-13, 15:00:00](https://slashdot.org/story/26/07/13/0530223/china-russia-and-others-seek-to-inflame-debate-over-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China, Russia and Others Seek To Inflame Debate Over AI Data Centers](https://slashdot.org/story/26/07/13/0530223/china-russia-and-others-seek-to-inflame-debate-over-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 13:54:10](https://news.ycombinator.com/item?id=48892709) - [Nokia’s years of mobile-phone supremacy ended in an afternoon](https://spectrum.ieee.org/nokia-phones-history)
* [2026-07-13, 13:20:01](https://lobste.rs/s/4smkjv/engineering_high_performance_parsers) - [Engineering High-Performance Parsers with Data-Oriented Design](https://arshad.fyi/writings/engineering-high-performance-parsers)
* [2026-07-13, 11:53:00](https://soylentnews.org/article.pl?sid=26/07/12/2127219&amp;from=rss) - [Why Navies Around The World Keep Submarine Propeller Designs So Secretive](https://soylentnews.org/article.pl?sid=26/07/12/2127219&amp;from=rss)
* [2026-07-13, 11:34:00](https://linux.slashdot.org/story/26/07/12/2126243/linus-torvalds-on-rust-c-bugs-and-ai-patch-checking-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds on Rust, C, Bugs, and AI Patch-Checking Tools](https://linux.slashdot.org/story/26/07/12/2126243/linus-torvalds-on-rust-c-bugs-and-ai-patch-checking-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 11:33:27](https://lobste.rs/s/posxmd/crates_io_development_update) - [crates.io: development update](https://blog.rust-lang.org/2026/07/13/crates-io-development-update/)
* [2026-07-13, 09:44:13](https://lobste.rs/s/ozcrd0/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/ozcrd0/what_are_you_doing_this_week)
* [2026-07-13, 09:28:38](https://lobste.rs/s/4rbnnj/ipv6_over_drainage_pipe) - [IPv6 over drainage pipe](https://chaos.social/@marble/116720125530089009)
* [2026-07-13, 08:54:00](https://science.slashdot.org/story/26/07/13/0522200/japans-space-agency-conducts-first-test-flight-for-experimental-reusable-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan&apos;s Space Agency Conducts First Test Flight For Experimental Reusable Rocket](https://science.slashdot.org/story/26/07/13/0522200/japans-space-agency-conducts-first-test-flight-for-experimental-reusable-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 07:07:00](https://soylentnews.org/article.pl?sid=26/07/12/150251&amp;from=rss) - [Electric Drone Breaks World Air Speed Record at 434 Mph, Designed for Anti-Aircraft Interceptor Role](https://soylentnews.org/article.pl?sid=26/07/12/150251&amp;from=rss)
* [2026-07-13, 06:55:28](https://lobste.rs/s/temfk6/wwdc_26_update_on_building_mac_assed_app) - [A WWDC 26 Update on Building a Mac-assed App with SwiftUI](https://pfandrade.me/blog/swiftui-mac-assed-wwdc27-update/)
* [2026-07-13, 06:40:36](https://lobste.rs/s/sca1qx/hacker_fables_satirical_cyberpunk) - [Hacker Fables - A satirical cyberpunk novella you can read as a man page](https://hacker-fables.onrender.com)
* [2026-07-13, 04:54:00](https://it.slashdot.org/story/26/07/13/0443258/america-may-soon-be-facing-largest-labor-shortage-in-its-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America May Soon Be Facing Largest Labor Shortage in Its History](https://it.slashdot.org/story/26/07/13/0443258/america-may-soon-be-facing-largest-labor-shortage-in-its-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-13, 03:33:01](https://lobste.rs/s/1an425/quadrupling_code_performance_with) - [Quadrupling code performance with a \&quot;useless\&quot; if](https://purplesyringa.moe/blog/quadrupling-code-performance-with-a-useless-if/)
* [2026-07-13, 02:27:00](https://soylentnews.org/article.pl?sid=26/07/11/1848242&amp;from=rss) - [Higher Blood Glucose Levels Linked to Faster Brain Aging](https://soylentnews.org/article.pl?sid=26/07/11/1848242&amp;from=rss)
* [2026-07-13, 01:54:00](https://tech.slashdot.org/story/26/07/13/0121226/semi-trailer-trucks-test-converting-into-plug-in-hybrids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Semi-Trailer Trucks Test Converting Into Plug-In Hybrids](https://tech.slashdot.org/story/26/07/13/0121226/semi-trailer-trucks-test-converting-into-plug-in-hybrids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 21:45:00](https://soylentnews.org/article.pl?sid=26/07/11/1846204&amp;from=rss) - [Volkswagen Sales Plunge as German Automaker Lays Out Plan to Slash Number of Brands](https://soylentnews.org/article.pl?sid=26/07/11/1846204&amp;from=rss)
* [2026-07-12, 18:58:31](https://lobste.rs/s/7840ca/closing_three_year_old_issue_using_rust) - [Closing a three-year-old issue using Rust arenas](https://giacomocavalieri.me/writing/gleam-rust-arenas)
* [2026-07-12, 16:57:00](https://soylentnews.org/article.pl?sid=26/07/11/1844243&amp;from=rss) - [Quantum Mechanics Surprisingly Based on Real Numbers](https://soylentnews.org/article.pl?sid=26/07/11/1844243&amp;from=rss)
* [2026-07-12, 15:19:32](https://lobste.rs/s/beqyuc/evan_s_jujutsu_tutorial) - [Evan&apos;s Jujutsu Tutorial](https://evmar.github.io/jjtut/)
* [2026-07-12, 12:10:00](https://soylentnews.org/article.pl?sid=26/07/11/0144241&amp;from=rss) - [New Dental Robot Attaches to Patient&apos;s Teeth for Drilling](https://soylentnews.org/article.pl?sid=26/07/11/0144241&amp;from=rss)
* [2026-07-12, 07:21:00](https://soylentnews.org/article.pl?sid=26/07/11/0138228&amp;from=rss) - [Failed Aussie Blockchain Project Ends With Big Fine for Fibs About It Being on Track](https://soylentnews.org/article.pl?sid=26/07/11/0138228&amp;from=rss)
* [2026-07-12, 02:38:00](https://soylentnews.org/article.pl?sid=26/07/11/0130201&amp;from=rss) - [NHTSA Calls Out Autonomous Cars for Interfering With First Responders](https://soylentnews.org/article.pl?sid=26/07/11/0130201&amp;from=rss)
* [2026-07-11, 21:49:00](https://soylentnews.org/article.pl?sid=26/07/11/0123222&amp;from=rss) - [Woman&apos;s Puzzling Decline Turns Out to be Cobalt Poisoning From Hip Replacement](https://soylentnews.org/article.pl?sid=26/07/11/0123222&amp;from=rss)
* [2026-07-11, 17:07:00](https://soylentnews.org/article.pl?sid=26/07/10/0939213&amp;from=rss) - [Geopolitical Tensions Are Complicating Research Efforts in the Norwegian Archipelago of Svalbar](https://soylentnews.org/article.pl?sid=26/07/10/0939213&amp;from=rss)
* [2026-07-11, 15:38:13](https://news.ycombinator.com/item?id=48872965) - [Zero Knowledge Tolstoyan Art](https://max-amb.github.io/blog/zero_knowledge_tolstoyan_art/)
* [2026-07-11, 15:23:54](https://news.ycombinator.com/item?id=48872833) - [How to build a circular LCD clock](https://blinry.org/lcd-clock/)
* [2026-07-11, 15:19:25](https://news.ycombinator.com/item?id=48872791) - [Jektex 0.2.0 – A Jekyll plugin for LaTeX rendering is now ~10x faster](https://github.com/yagarea/jektex)
* [2026-07-11, 12:23:00](https://soylentnews.org/article.pl?sid=26/07/10/0919216&amp;from=rss) - [Secure Unix Ancestor KSOS Did Type Safety Before Rust Made It Cool](https://soylentnews.org/article.pl?sid=26/07/10/0919216&amp;from=rss)
* [2026-07-11, 07:41:00](https://soylentnews.org/article.pl?sid=26/07/10/0916227&amp;from=rss) - [Scientists Discover the Deep Sleep Circuit That Builds Muscle, Burns Fat, and Boosts the Brain](https://soylentnews.org/article.pl?sid=26/07/10/0916227&amp;from=rss)
* [2026-07-11, 02:54:00](https://soylentnews.org/article.pl?sid=26/07/09/1625207&amp;from=rss) - [Suspecting AI Cheating, Ivy League Prof Ordered an in-Person Final; Scores Fell 50%](https://soylentnews.org/article.pl?sid=26/07/09/1625207&amp;from=rss)
* [2026-07-10, 21:44:00](https://soylentnews.org/article.pl?sid=26/07/09/0348202&amp;from=rss) - [Qualcomm Buys Lattner&apos;s Modular for Almost $4bn](https://soylentnews.org/article.pl?sid=26/07/09/0348202&amp;from=rss)
* [2026-07-10, 17:01:00](https://soylentnews.org/article.pl?sid=26/07/09/0343224&amp;from=rss) - [Alibaba Bans Anthropic&apos;s Claude Code After an Alleged Hidden China-Detection Backdoor is Uncovered](https://soylentnews.org/article.pl?sid=26/07/09/0343224&amp;from=rss)
* [2026-07-10, 12:17:00](https://soylentnews.org/article.pl?sid=26/07/09/0339222&amp;from=rss) - [Back to Basics, or Masm. Writing a Tiny Notepad for W11.](https://soylentnews.org/article.pl?sid=26/07/09/0339222&amp;from=rss)
* [2026-07-10, 07:30:00](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss) - [Record-Breaking Ocean Drilling Reveals Why Japan&apos;s 2011 Tsunami Was So Deadly](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss)
* [2026-07-10, 02:46:00](https://soylentnews.org/article.pl?sid=26/07/09/0329217&amp;from=rss) - [Bethesda, Id Software Reportedly Hit Hard by Microsoft Layoffs](https://soylentnews.org/article.pl?sid=26/07/09/0329217&amp;from=rss)
* [2026-07-10, 02:27:55](https://news.ycombinator.com/item?id=48855045) - [Two Case Studies of NaN](https://sebsite.pw/w/20260709-nan.html)
