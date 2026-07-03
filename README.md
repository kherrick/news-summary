# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technologies and Innovations

* [‘guix substitute‘ and ‘guix pull‘ vulnerabilities](https://guix.gnu.org/en/blog/2026/guix-substitute-pull-vulnerabilities/) - An in-depth analysis of vulnerabilities found in GNU Guix's substitute and pull processes, with recommendations to mitigate these risks. [Comments](https://lobste.rs/s/xg4bbg/guix_substitute_guix_pull)

* [Until_Heat_Death_Do_Us_Part: Counting until the heat death of the universe, broadcasting counter every second over 100Mbps ethernet](https://github.com/Essenceia/Until_Heat_Death_Do_Us_Part) - A fascinating project to transmit a countdown to the universe's hypothetical end over wired ethernet. [Comments](https://lobste.rs/s/jlj10f/until_heat_death_do_us_part_counting_until)

* [Amazon Has Enough Satellites To Launch Its Starlink Competitor](https://tech.slashdot.org/story/26/07/02/2149203/amazon-has-enough-satellites-to-launch-its-starlink-competitor?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Amazon's ambitious plans to challenge SpaceX's Starlink with its own satellite internet service. [Comments](https://tech.slashdot.org/story/26/07/02/2149203/amazon-has-enough-satellites-to-launch-its-starlink-competitor?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [NASA Tests An In-Orbit Refueling Device For Deep Space Missions](https://soylentnews.org/article.pl?sid=26/07/01/0621219&from=rss) - An exploration of NASA's test of an innovative device aimed at refueling spacecrafts for deep space exploration. [Comments](https://soylentnews.org/article.pl?sid=26/07/01/0621219&from=rss)

## Cybersecurity Incidents and Tech Vulnerabilities

* [Arbitrary code execution breaking sandboxes in KDE Plasma](https://blog.kimiblock.top/2026/07/01/arbitrary-code-execution-in-kde-plasma/) - Exploring critical vulnerabilities in the KDE Plasma desktop environment that could lead to security risks. [Comments](https://lobste.rs/s/ovcwkm/arbitrary_code_execution_breaking)

* [Core dump epidemiology: fixing an 18-year-old bug](https://openai.com/index/core-dump-epidemiology-data-infrastructure-bug/) - The fascinating journey of fixing a nearly two-decade-old bug within system data infrastructure. [Comments](https://lobste.rs/s/qacs6u/core_dump_epidemiology_fixing_18_year_old)

* [Virginia bans sale of geolocation data](https://www.hunton.com/privacy-and-cybersecurity-law-blog/virginia-bans-sale-of-geolocation-data) - How Virginia is tackling privacy concerns by prohibiting the sale of geolocation data. [Comments](https://news.ycombinator.com/item?id=48767347)

* [Meta Is Charging a Subscription for Smart Glasses Features](https://news.slashdot.org/story/26/07/02/182227/meta-is-charging-a-subscription-for-smart-glasses-features?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A look at Meta's decision to introduce subscription fees for advanced features in their smart glasses. [Comments](https://news.slashdot.org/story/26/07/02/182227/meta-is-charging-a-subscription-for-smart-glasses-features?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Software Updates and Technologies

* [Podman v6.0.0](https://blog.podman.io/2026/07/introducing-podman-v6-0-0/) - Key updates and features introduced in the latest version of the Podman utility for managing Linux containers. [Comments](https://news.ycombinator.com/item?id=48762098)

* [Postgres transactions are a distributed systems superpower](https://www.dbos.dev/blog/co-locating-workflow-state-with-your-data) - An explanation of why PostgreSQL’s transaction model sets it apart in distributed system architectures. [Comments](https://news.ycombinator.com/item?id=48765639)

* [jj v0.43.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.43.0) - The latest release of jj, a VCS tool, highlighting its changelog and improvements. [Comments](https://lobste.rs/s/e1uduo/jj_v0_43_0_released)

## Cultural and Societal Insights

* [Six-part Series from the Internet Archive on Vanishing Culture](https://soylentnews.org/article.pl?sid=26/07/02/0455216&from=rss) - Documentation and research from the Internet Archive exploring disappearing cultural artifacts. [Comments](https://soylentnews.org/article.pl?sid=26/07/02/0455216&from=rss)

* [Why Switzerland has 25 gbit internet and America doesn’t](https://stefan.schueller.net/posts/the-free-market-lie/) - A deep dive into how market structures have influenced internet infrastructure disparities worldwide. [Comments](https://news.ycombinator.com/item?id=48770647)

* [Mystery identity of ‘Green Boots’ climber is finally solved after DNA test](https://www.dailymail.com/news/article-15943905/Mystery-identity-Green-Boots-climber-macabre-landmark-frozen-ice-dying-Everest-finally-solved-DNA-test.html) - A breakthrough in identifying one of Mount Everest’s most well-known landmarks. [Comments](https://news.ycombinator.com/item?id=48768336)

* [The Great Salt Lake Tracker – Grow the Flow](https://growtheflowutah.org/laketracker/) - Utilizing data and advocacy to address water shortages and preserve Utah's iconic Great Salt Lake. [Comments](https://news.ycombinator.com/item?id=48766286)

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

* [2026-07-03, 06:45:52](https://lobste.rs/s/xg4bbg/guix_substitute_guix_pull) - [‘guix substitute‘ and ‘guix pull‘ vulnerabilities](https://guix.gnu.org/en/blog/2026/guix-substitute-pull-vulnerabilities/)
* [2026-07-03, 06:21:44](https://news.ycombinator.com/item?id=48771515) - [Ask HN: Is anyone experimenting with different ways of using LLMs for coding?](https://news.ycombinator.com/item?id=48771515)
* [2026-07-03, 06:16:09](https://lobste.rs/s/jlj10f/until_heat_death_do_us_part_counting_until) - [Until_Heat_Death_Do_Us_Part: Counting until the heat death of the universe, broadcasting counter every second over 100Mbps ethernet](https://github.com/Essenceia/Until_Heat_Death_Do_Us_Part)
* [2026-07-03, 06:14:00](https://soylentnews.org/article.pl?sid=26/07/02/0455216&amp;from=rss) - [Six-part Series from the Internet Archive on Vanishing Culture](https://soylentnews.org/article.pl?sid=26/07/02/0455216&amp;from=rss)
* [2026-07-03, 06:00:00](https://tech.slashdot.org/story/26/07/02/2149203/amazon-has-enough-satellites-to-launch-its-starlink-competitor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Has Enough Satellites To Launch Its Starlink Competitor](https://tech.slashdot.org/story/26/07/02/2149203/amazon-has-enough-satellites-to-launch-its-starlink-competitor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-03, 05:25:28](https://lobste.rs/s/asi79o/clickhouse_is_winning_observability) - [Clickhouse is winning the Observability Wars](https://matduggan.com/clickhouse-is-winning-the-observability-wars/)
* [2026-07-03, 04:16:17](https://news.ycombinator.com/item?id=48770647) - [Why Switzerland has 25 gbit internet and America doesn&apos;t](https://stefan.schueller.net/posts/the-free-market-lie/)
* [2026-07-03, 03:49:47](https://news.ycombinator.com/item?id=48770477) - [14× faster embeddings: how we rebuilt the ONNX path in Manticore](https://manticoresearch.com/blog/onnx-embeddings-speedup/)
* [2026-07-03, 02:39:28](https://lobste.rs/s/ovcwkm/arbitrary_code_execution_breaking) - [Arbitrary code execution breaking sandboxes in KDE Plasma](https://blog.kimiblock.top/2026/07/01/arbitrary-code-execution-in-kde-plasma/)
* [2026-07-03, 02:05:33](https://lobste.rs/s/qacs6u/core_dump_epidemiology_fixing_18_year_old) - [Core dump epidemiology: fixing an 18-year-old bug](https://openai.com/index/core-dump-epidemiology-data-infrastructure-bug/)
* [2026-07-03, 02:00:00](https://science.slashdot.org/story/26/07/02/2116205/sitting-for-more-than-30-minutes-at-a-time-linked-to-higher-risk-of-cancer-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sitting For More Than 30 Minutes At a Time Linked To Higher Risk of Cancer Death](https://science.slashdot.org/story/26/07/02/2116205/sitting-for-more-than-30-minutes-at-a-time-linked-to-higher-risk-of-cancer-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-03, 01:37:11](https://news.ycombinator.com/item?id=48769639) - [The Safari MCP server for web developers](https://webkit.org/blog/18136/introducing-the-safari-mcp-server-for-web-developers/)
* [2026-07-03, 01:21:00](https://soylentnews.org/article.pl?sid=26/07/02/0453224&amp;from=rss) - [How to Burst the AI Bubble: Strike at its Roots](https://soylentnews.org/article.pl?sid=26/07/02/0453224&amp;from=rss)
* [2026-07-03, 01:02:45](https://news.ycombinator.com/item?id=48769397) - [CarPlay Is Additive](https://www.caseyliss.com/2026/7/2/carplay-is-additive-you-dolts)
* [2026-07-03, 00:01:06](https://news.ycombinator.com/item?id=48768992) - [An American Privacy Emergency](https://scottaaronson.blog/?p=9902)
* [2026-07-02, 23:54:03](https://news.ycombinator.com/item?id=48768951) - [Right to Local Intelligence](https://righttointelligence.org/)
* [2026-07-02, 23:32:37](https://lobste.rs/s/65hqvm/proposal_async_context_async_context_for) - [proposal-async-context: Async Context for JavaScript](https://github.com/tc39/proposal-async-context)
* [2026-07-02, 23:19:21](https://lobste.rs/s/ryny2c/crustc_entirety_rustc_translated_c) - [crustc: Entirety of rustc, translated to C](https://github.com/FractalFir/crustc)
* [2026-07-02, 23:04:59](https://lobste.rs/s/irmpmz/understanding_is_new_bottleneck) - [Understanding is the new bottleneck](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck.html)
* [2026-07-02, 22:57:35](https://news.ycombinator.com/item?id=48768464) - [crustc: entirety of `rustc`, translated to C](https://github.com/FractalFir/crustc)
* [2026-07-02, 22:44:04](https://news.ycombinator.com/item?id=48768336) - [Mystery identity of &apos;Green Boots&apos; climber is finally solved after DNA test](https://www.dailymail.com/news/article-15943905/Mystery-identity-Green-Boots-climber-macabre-landmark-frozen-ice-dying-Everest-finally-solved-DNA-test.html)
* [2026-07-02, 21:05:00](https://news.slashdot.org/story/26/07/02/213229/labor-force-participation-rate-falls-to-lowest-in-50-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Labor Force Participation Rate Falls To Lowest In 50 years](https://news.slashdot.org/story/26/07/02/213229/labor-force-participation-rate-falls-to-lowest-in-50-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 21:03:45](https://news.ycombinator.com/item?id=48767347) - [Virginia bans sale of geolocation data](https://www.hunton.com/privacy-and-cybersecurity-law-blog/virginia-bans-sale-of-geolocation-data)
* [2026-07-02, 20:40:00](https://soylentnews.org/article.pl?sid=26/07/01/0621219&amp;from=rss) - [NASA Tests An In-Orbit Refueling Device For Deep Space Missions](https://soylentnews.org/article.pl?sid=26/07/01/0621219&amp;from=rss)
* [2026-07-02, 20:19:52](https://lobste.rs/s/2eyryl/my_quest_see_all_tetris) - [My quest to see all of Tetris](https://antithesis.com/blog/2026/tetris-quest/)
* [2026-07-02, 20:14:02](https://lobste.rs/s/loubrx/ds_css_css_framework_recreating_ds_ds_lite) - [ds.css: A css framework recreating the DS / DS Lite&apos;s UI](https://github.com/spiritov/ds.css)
* [2026-07-02, 20:05:50](https://lobste.rs/s/bm2vcf/circular_obstacle_pathfinding) - [Circular Obstacle Pathfinding](https://redblobgames.github.io/circular-obstacle-pathfinding/)
* [2026-07-02, 20:01:20](https://news.ycombinator.com/item?id=48766598) - [Lightning Memory-Mapped Database Manager (LMDB) 1.0](http://www.lmdb.tech/doc/)
* [2026-07-02, 20:00:00](https://it.slashdot.org/story/26/07/02/1849243/ai-agent-executes-first-end-to-end-ransomware-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Agent Executes &apos;First&apos; End-To-End Ransomware Attack](https://it.slashdot.org/story/26/07/02/1849243/ai-agent-executes-first-end-to-end-ransomware-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 19:33:55](https://news.ycombinator.com/item?id=48766286) - [Great Salt Lake Tracker – Grow the Flow](https://growtheflowutah.org/laketracker/)
* [2026-07-02, 19:27:38](https://news.ycombinator.com/item?id=48766209) - [EFF letter to FTC on X consent order [pdf]](https://www.eff.org/deeplinks/2026/06/eff-and-allies-xs-ftc-petition-waive-privacy-violation-order-should-be-rejected)
* [2026-07-02, 19:11:57](https://news.ycombinator.com/item?id=48766026) - [The short leash AI coding method for beating Fable](https://blog.okturtles.org/2026/07/short-leash-ai-method/)
* [2026-07-02, 19:10:12](https://news.ycombinator.com/item?id=48766005) - [Claude-real-video － any LLM can watch a video](https://github.com/HUANGCHIHHUNGLeo/claude-real-video)
* [2026-07-02, 19:00:00](https://games.slashdot.org/story/26/07/02/1839237/godot-game-engine-no-longer-accepts-ai-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Godot Game Engine No Longer Accepts AI Code](https://games.slashdot.org/story/26/07/02/1839237/godot-game-engine-no-longer-accepts-ai-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 18:45:00](https://lobste.rs/s/nvwvup/since_linux_6_9_may_2024_luks_encryption) - [Since Linux 6.9 (May 2024), the LUKS encryption key remained resident in memory across suspend](https://mathstodon.xyz/@iblech/116769502749142438)
* [2026-07-02, 18:43:32](https://lobste.rs/s/oe8pxn/no_llm_code_dependencies) - [No LLM code in dependencies](https://joeyh.name/blog/entry/no_LLM_code_in_dependencies/)
* [2026-07-02, 18:41:19](https://news.ycombinator.com/item?id=48765663) - [Exapunks (2018)](https://www.zachtronics.com/exapunks/)
* [2026-07-02, 18:38:32](https://news.ycombinator.com/item?id=48765639) - [Postgres transactions are a distributed systems superpower](https://www.dbos.dev/blog/co-locating-workflow-state-with-your-data)
* [2026-07-02, 18:36:09](https://news.ycombinator.com/item?id=48765607) - [This is my attempt to get Vulkan going on NetBSD](https://github.com/segaboy/vulkan-netbsd)
* [2026-07-02, 18:05:00](https://news.slashdot.org/story/26/07/02/182227/meta-is-charging-a-subscription-for-smart-glasses-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Charging a Subscription for Smart Glasses Features](https://news.slashdot.org/story/26/07/02/182227/meta-is-charging-a-subscription-for-smart-glasses-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 17:00:00](https://yro.slashdot.org/story/26/07/02/1623259/openai-in-early-talks-to-give-5-stake-to-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI &apos;In Early Talks To Give 5% Stake To US Government&apos;](https://yro.slashdot.org/story/26/07/02/1623259/openai-in-early-talks-to-give-5-stake-to-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 16:33:28](https://lobste.rs/s/3kvccm/gitignore_isn_t_only_way_ignore_files_git) - [.gitignore Isn’t the Only Way To Ignore Files in Git](https://nelson.cloud/.gitignore-isnt-the-only-way-to-ignore-files-in-git/)
* [2026-07-02, 16:00:00](https://yro.slashdot.org/story/26/07/02/0253203/whatsapp-usernames-are-already-raising-impersonation-red-flags?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WhatsApp Usernames Are Already Raising Impersonation Red Flags](https://yro.slashdot.org/story/26/07/02/0253203/whatsapp-usernames-are-already-raising-impersonation-red-flags?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 15:58:00](https://soylentnews.org/article.pl?sid=26/07/01/0619241&amp;from=rss) - [Remote-Controlled Cockroach Swarm Can Now Breathe Underwater](https://soylentnews.org/article.pl?sid=26/07/01/0619241&amp;from=rss)
* [2026-07-02, 15:40:05](https://news.ycombinator.com/item?id=48763246) - [Show HN: zkGolf – Competitive optimization of formally verified circuits](https://zk.golf/)
* [2026-07-02, 15:25:16](https://news.ycombinator.com/item?id=48763035) - [Since Linux 6.9, LUKS suspend stopped wiping disk-encryption keys from memory](https://mathstodon.xyz/@iblech/116769502749142438)
* [2026-07-02, 15:00:00](https://mobile.slashdot.org/story/26/07/02/0244215/oneplus-is-quietly-steering-customers-toward-oppo-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OnePlus Is Quietly Steering Customers Toward OPPO Products](https://mobile.slashdot.org/story/26/07/02/0244215/oneplus-is-quietly-steering-customers-toward-oppo-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 14:41:56](https://news.ycombinator.com/item?id=48762372) - [FoundationDB&apos;s Flow – Bringing Actor-Based Concurrency to C++11](https://apple.github.io/foundationdb/flow.html)
* [2026-07-02, 14:23:09](https://news.ycombinator.com/item?id=48762098) - [Podman v6.0.0](https://blog.podman.io/2026/07/introducing-podman-v6-0-0/)
* [2026-07-02, 14:13:26](https://news.ycombinator.com/item?id=48761944) - [Immich 3.0](https://github.com/immich-app/immich/discussions/29439)
* [2026-07-02, 14:04:10](https://lobste.rs/s/ubl3i2/tools_techniques_for_conveying_mental) - [Tools or techniques for conveying mental models?](https://lobste.rs/s/ubl3i2/tools_techniques_for_conveying_mental)
* [2026-07-02, 13:31:04](https://lobste.rs/s/uswzil/opening_up_zero_knowledge_proof) - [Opening up ‘Zero-Knowledge Proof’ technology to promote privacy in age assurance](https://blog.google/innovation-and-ai/technology/safety-security/opening-up-zero-knowledge-proof-technology-to-promote-privacy-in-age-assurance/)
* [2026-07-02, 12:46:11](https://lobste.rs/s/omfy64/kernel_asynchronous_reads_postgresql_19) - [kernel asynchronous reads in PostgreSQL 19 (io_uring)](https://dev.to/franckpachot/iouring-buffered-reads-in-postgresql-19-iouring-mcn)
* [2026-07-02, 12:01:19](https://lobste.rs/s/e1uduo/jj_v0_43_0_released) - [jj v0.43.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.43.0)
* [2026-07-02, 11:13:00](https://soylentnews.org/article.pl?sid=26/07/01/0613242&amp;from=rss) - [Supreme Court Ruling Guts Government’s Use Of Geofence Warrants](https://soylentnews.org/article.pl?sid=26/07/01/0613242&amp;from=rss)
* [2026-07-02, 11:02:59](https://lobste.rs/s/agwtde/preventing_token_theft) - [Preventing token theft](https://codon.org.uk/~mjg59/blog/p/preventing-token-theft/)
* [2026-07-02, 11:00:00](https://science.slashdot.org/story/26/07/02/0230210/the-space-based-data-center-hype-machine-is-already-in-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Space-Based Data Center Hype Machine Is Already In Orbit ](https://science.slashdot.org/story/26/07/02/0230210/the-space-based-data-center-hype-machine-is-already-in-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 10:27:01](https://lobste.rs/s/znejf4/modern_app) - [The modern app](https://dbushell.com/2026/07/02/the-modern-app/)
* [2026-07-02, 10:05:50](https://lobste.rs/s/hejdhj/wordgard_release_0_1) - [Wordgard Release 0.1](https://marijnhaverbeke.nl/blog/wordgard-0.1.html)
* [2026-07-02, 07:00:00](https://hardware.slashdot.org/story/26/07/02/0217230/spacex-reportedly-has-an-ai-device-prototype?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Reportedly Has an AI Device Prototype](https://hardware.slashdot.org/story/26/07/02/0217230/spacex-reportedly-has-an-ai-device-prototype?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 06:31:00](https://soylentnews.org/article.pl?sid=26/07/01/0611205&amp;from=rss) - [FreeBSD Vs. Linux: the Eternal Open-Source Showdown](https://soylentnews.org/article.pl?sid=26/07/01/0611205&amp;from=rss)
* [2026-07-02, 05:21:42](https://lobste.rs/s/vuqsur/on_ditching_vagrant) - [On Ditching Vagrant](https://benjamintoll.com/2026/06/29/on-ditching-vagrant/)
* [2026-07-02, 04:23:14](https://lobste.rs/s/q8vdre/physics_memory_aka_can_javascript_ecs) - [The Physics of Memory (aka can Javascript ECS?)](https://www.dmurph.com/posts/2026/06/ecs_vs_oop_benchmark/ecs_vs_oop_benchmark.html)
* [2026-07-02, 03:30:00](https://hardware.slashdot.org/story/26/07/01/237251/us-home-battery-installations-hit-record-high-on-rising-electricity-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Home Battery Installations Hit Record High On Rising Electricity Costs](https://hardware.slashdot.org/story/26/07/01/237251/us-home-battery-installations-hit-record-high-on-rising-electricity-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 01:47:00](https://soylentnews.org/article.pl?sid=26/07/01/0552223&amp;from=rss) - [Prompt Injection as Role Confusion](https://soylentnews.org/article.pl?sid=26/07/01/0552223&amp;from=rss)
* [2026-07-02, 01:11:56](https://lobste.rs/s/khdiby/artificial_adventures) - [Artificial adventures](https://www.scattered-thoughts.net/writing/artificial-adventures/)
* [2026-07-01, 23:00:00](https://yro.slashdot.org/story/26/07/01/2255231/t-mobile-appears-to-be-quitting-vmware-amid-support-rights-lawsuit-with-broadcom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [T-Mobile Appears To Be Quitting VMware Amid Support Rights Lawsuit With Broadcom](https://yro.slashdot.org/story/26/07/01/2255231/t-mobile-appears-to-be-quitting-vmware-amid-support-rights-lawsuit-with-broadcom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-01, 22:00:00](https://meta.slashdot.org/story/26/07/01/1952253/meta-is-reportedly-building-its-own-cloud-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Reportedly Building Its Own Cloud Business](https://meta.slashdot.org/story/26/07/01/1952253/meta-is-reportedly-building-its-own-cloud-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-01, 21:05:00](https://soylentnews.org/article.pl?sid=26/06/30/0946220&amp;from=rss) - [Malaysia Ponders Regulating Management of IP Addresses](https://soylentnews.org/article.pl?sid=26/06/30/0946220&amp;from=rss)
* [2026-07-01, 21:00:00](https://tech.slashdot.org/story/26/07/01/1930218/cloudflare-pushes-ai-companies-to-pay-for-publishers-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Pushes AI Companies To Pay For Publishers&apos; Content](https://tech.slashdot.org/story/26/07/01/1930218/cloudflare-pushes-ai-companies-to-pay-for-publishers-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-01, 16:20:00](https://soylentnews.org/article.pl?sid=26/06/30/0941251&amp;from=rss) - [Australia&apos;s Floating Solar Panels Solve Two Resource Problems at Once](https://soylentnews.org/article.pl?sid=26/06/30/0941251&amp;from=rss)
* [2026-07-01, 14:55:34](https://lobste.rs/s/thkwcf/us_supreme_court_just_blew_up_eu_us_data) - [US Supreme Court just blew up EU-US Data Transfers](https://noyb.eu/en/us-supreme-court-just-blew-eu-us-data-transfers)
* [2026-07-01, 11:38:00](https://soylentnews.org/article.pl?sid=26/06/30/0939227&amp;from=rss) - [PlayStation Removes Over 500 Purchased Movies](https://soylentnews.org/article.pl?sid=26/06/30/0939227&amp;from=rss)
* [2026-07-01, 06:51:00](https://soylentnews.org/article.pl?sid=26/06/30/0934235&amp;from=rss) - [Lenovo Says The &apos;RAMageddon&apos; Is The New Normal, Outlines Survival Guide](https://soylentnews.org/article.pl?sid=26/06/30/0934235&amp;from=rss)
* [2026-07-01, 02:10:00](https://soylentnews.org/article.pl?sid=26/06/30/0929204&amp;from=rss) - [Scientists Build a Better Pixel Capable of Emitting and Receiving Light](https://soylentnews.org/article.pl?sid=26/06/30/0929204&amp;from=rss)
* [2026-06-30, 21:28:32](https://news.ycombinator.com/item?id=48739459) - [Superpowers 6](https://blog.fsck.com/2026/06/15/Superpowers-6/)
* [2026-06-30, 21:25:00](https://soylentnews.org/article.pl?sid=26/06/29/191210&amp;from=rss) - [I Built A Whole-Home Ad Blocker With A $7 ESP32-S3 Board - And It Took Just Minutes](https://soylentnews.org/article.pl?sid=26/06/29/191210&amp;from=rss)
* [2026-06-30, 16:41:00](https://soylentnews.org/article.pl?sid=26/06/29/1852228&amp;from=rss) - [Ford Rehires ‘Gray Beard’ Engineers After AI Falls Short](https://soylentnews.org/article.pl?sid=26/06/29/1852228&amp;from=rss)
* [2026-06-30, 11:49:00](https://soylentnews.org/article.pl?sid=26/06/29/1850225&amp;from=rss) - [Intel&apos;s Next-Gen 52-Core Nova Lake CPU Could Pull Up To 474W — May Need Three 8-Pin Power Connectors](https://soylentnews.org/article.pl?sid=26/06/29/1850225&amp;from=rss)
* [2026-06-30, 11:40:50](https://news.ycombinator.com/item?id=48731252) - [I Type Holes in Keyboard Covers – This One Survived](https://medium.com/@jamesgarside_/i-type-holes-in-keyboard-covers-e5664732ef93)
* [2026-06-30, 07:05:00](https://soylentnews.org/article.pl?sid=26/06/29/1848249&amp;from=rss) - [Mark Zuckerberg Is Selflessly Building Yet Another Horrible Product Nobody Asked For](https://soylentnews.org/article.pl?sid=26/06/29/1848249&amp;from=rss)
* [2026-06-30, 02:18:00](https://soylentnews.org/article.pl?sid=26/06/29/1844208&amp;from=rss) - [The Boeing 747 Begins Its Final Descent](https://soylentnews.org/article.pl?sid=26/06/29/1844208&amp;from=rss)
* [2026-06-29, 21:33:00](https://soylentnews.org/article.pl?sid=26/06/28/1824219&amp;from=rss) - [Administration Tells US Techies It Expects American Quantum Computer by 2028](https://soylentnews.org/article.pl?sid=26/06/28/1824219&amp;from=rss)
* [2026-06-29, 20:54:14](https://news.ycombinator.com/item?id=48725093) - [Underwater Suit-Wearing Cyborg Insect Capable of Diving and Terra-Aqua Travel](https://www.nature.com/articles/s41467-026-74235-1)
* [2026-06-29, 20:18:58](https://news.ycombinator.com/item?id=48724608) - [Perform DFU Restores on Apple Silicon Macs with Macvdmtool (2021)](https://www.bkurtz.io/posts/macvdmtool/)
* [2026-06-29, 16:48:00](https://soylentnews.org/article.pl?sid=26/06/28/1820239&amp;from=rss) - [Brits Still Reckon Big Tech Isn&apos;t Paying Enough Tax](https://soylentnews.org/article.pl?sid=26/06/28/1820239&amp;from=rss)
* [2026-06-29, 15:40:13](https://news.ycombinator.com/item?id=48720728) - [Cowboys, Frontiersmen, Settlers, Townspeople, Cityfolk](https://huntersoftwareconsulting.com/posts/2026-06-28-company-phase-changes/)
* [2026-06-29, 12:02:00](https://soylentnews.org/article.pl?sid=26/06/28/1816241&amp;from=rss) - [Five Eyes Spooks Warn AI Means Infosec Incidents Can Become &apos;Major Operational and Financial Crises&apos;](https://soylentnews.org/article.pl?sid=26/06/28/1816241&amp;from=rss)
* [2026-06-29, 07:16:00](https://soylentnews.org/article.pl?sid=26/06/28/188242&amp;from=rss) - [SK Telecom Named as the Korean Carrier at the Center of Anthropic&apos;s Mythos Export Controls](https://soylentnews.org/article.pl?sid=26/06/28/188242&amp;from=rss)
* [2026-06-29, 02:32:00](https://soylentnews.org/article.pl?sid=26/06/28/183229&amp;from=rss) - [Photoshop Now Censors Your Art as You Edit](https://soylentnews.org/article.pl?sid=26/06/28/183229&amp;from=rss)
