# [News Summary](https://kherrick.github.io/news-summary/)

## Geopolitics and Global Tech

* [European military personnel arrive in Greenland as Trump says US needs island](https://www.bbc.com/news/articles/cd0ydjvxpejo) ([comments](https://news.ycombinator.com/item?id=46634263))

* [US Approves Sale of Nvidia's Advanced AI Chips To China](https://hardware.slashdot.org/story/26/01/14/2156254/us-approves-sale-of-nvidias-advanced-ai-chips-to-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/26/01/14/2156254/us-approves-sale-of-nvidias-advanced-ai-chips-to-china?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Innovations and Advancements in AI and Technology

* [Wikipedia Signs AI Licensing Deals On Its 25th Birthday](https://news.slashdot.org/story/26/01/15/1516207/wikipedia-signs-ai-licensing-deals-on-its-25th-birthday?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/26/01/15/1516207/wikipedia-signs-ai-licensing-deals-on-its-25th-birthday?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Anthropic's Index Shows Job Evolution Over Replacement](https://slashdot.org/story/26/01/15/1436248/anthropics-index-shows-job-evolution-over-replacement?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/26/01/15/1436248/anthropics-index-shows-job-evolution-over-replacement?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [AI Models Are Starting To Crack High-Level Math Problems](https://science.slashdot.org/story/26/01/15/059238/ai-models-are-starting-to-crack-high-level-math-problems?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/26/01/15/059238/ai-models-are-starting-to-crack-high-level-math-problems?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Raspberry Pi's New AI Hat Adds 8GB of RAM for Local LLMs](https://www.jeffgeerling.com/blog/2026/raspberry-pi-ai-hat-2/) ([comments](https://news.ycombinator.com/item?id=46629682))

## Innovative Projects and Tools

* [Codeless Code - Fables & Koans for the Software Engineer](https://thecodelesscode.com) ([comments](https://lobste.rs/s/whv98g/codeless_code_fables_koans_for_software))

* [TinyCity – A tiny city SIM for MicroPython (Thumby micro console)](https://github.com/chrisdiana/TinyCity) ([comments](https://news.ycombinator.com/item?id=46632768))

* [SelfCI - a minimalistic local-first Unix-philosophy-abiding CI](https://app.radicle.xyz/nodes/radicle.dpc.pw/rad:z2tDzYbAXxTQEKTGFVwiJPajkbeDU) ([comments](https://lobste.rs/s/xa4ndh/selfci_minimalistic_local_first_unix))

## Legal and Ethical Decisions in Technology

* [French Court Orders Popular VPNs to Block More Pirate Sites, Despite Opposition](https://torrentfreak.com/french-court-orders-popular-vpns-to-block-more-pirate-sites-despite-opposition/) ([comments](https://news.ycombinator.com/item?id=46632004))

* [Bandcamp Bans AI Music](https://entertainment.slashdot.org/story/26/01/14/2149259/bandcamp-bans-ai-music?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/26/01/14/2149259/bandcamp-bans-ai-music?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Insights into Hardware and Environment

* [A Fix for Frost: Engineers Use Electricity to Zap Ice Without Heat or Chemicals](https://soylentnews.org/article.pl?sid=26/01/13/166232&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/01/13/166232&from=rss))

* [Britain Awards Wind Farm Contracts That Will Power 12 Million Homes](https://hardware.slashdot.org/story/26/01/15/0436220/britain-awards-wind-farm-contracts-that-will-power-12-million-homes?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/26/01/15/0436220/britain-awards-wind-farm-contracts-that-will-power-12-million-homes?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Historical Accounts and Unique Perspectives

* [Cray Customer Service – Memories (1979 to 2014) by Charles Clark](https://soylentnews.org/article.pl?sid=26/01/13/1612200&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/01/13/1612200&from=rss))

* [The 3D Software Rendering Technology of 1998's Thief: The Dark Project (2019)](https://nothings.org/gamedev/thief_rendering.html) ([comments](https://news.ycombinator.com/item?id=46630798))

* [Writing Anteforth, a Forth-like in SPARK](https://pyjarrett.github.io/2026/01/13/anteforth.html) ([comments](https://lobste.rs/s/8hjgvt/writing_anteforth_forth_like_spark))

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

* [2026-01-15, 15:49:23](https://news.ycombinator.com/item?id=46634263) - [European military personnel arrive in Greenland as Trump says US needs island](https://www.bbc.com/news/articles/cd0ydjvxpejo)
* [2026-01-15, 15:31:00](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss) - [Cray Customer Service – Memories (1979 to 2014) by Charles Clark](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss)
* [2026-01-15, 15:20:00](https://news.slashdot.org/story/26/01/15/1516207/wikipedia-signs-ai-licensing-deals-on-its-25th-birthday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wikipedia Signs AI Licensing Deals On Its 25th Birthday](https://news.slashdot.org/story/26/01/15/1516207/wikipedia-signs-ai-licensing-deals-on-its-25th-birthday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 15:02:42](https://news.ycombinator.com/item?id=46633488) - [Apple Is Fighting for TSMC Capacity as Nvidia Takes Center Stage](https://www.culpium.com/p/exclusiveapple-is-fighting-for-tsmc)
* [2026-01-15, 14:57:53](https://news.ycombinator.com/item?id=46633429) - [OBS Studio 32.1.0 Beta 1 available](https://github.com/obsproject/obs-studio/releases/tag/32.1.0-beta1)
* [2026-01-15, 14:54:51](https://news.ycombinator.com/item?id=46633378) - [The Palantir app helping ICE raids in Minneapolis](https://www.404media.co/elite-the-palantir-app-ice-uses-to-find-neighborhoods-to-raid/)
* [2026-01-15, 14:40:00](https://slashdot.org/story/26/01/15/1436248/anthropics-index-shows-job-evolution-over-replacement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s Index Shows Job Evolution Over Replacement](https://slashdot.org/story/26/01/15/1436248/anthropics-index-shows-job-evolution-over-replacement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 14:16:02](https://news.ycombinator.com/item?id=46632837) - [I spent a year on Linux and forgot to miss Windows](https://www.theverge.com/features/861968/year-using-linux)
* [2026-01-15, 14:11:30](https://news.ycombinator.com/item?id=46632768) - [Show HN: TinyCity – A tiny city SIM for MicroPython (Thumby micro console)](https://github.com/chrisdiana/TinyCity)
* [2026-01-15, 14:10:40](https://lobste.rs/s/ahdtzt/forgejo_v14_0_is_available) - [Forgejo v14.0 is available](https://forgejo.org/2026-01-release-v14-0/)
* [2026-01-15, 14:05:00](https://slashdot.org/story/26/01/15/145254/white-collar-workers-shouldnt-dismiss-a-blue-collar-career-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;White-Collar Workers Shouldn&apos;t Dismiss a Blue-Collar Career Change&apos;](https://slashdot.org/story/26/01/15/145254/white-collar-workers-shouldnt-dismiss-a-blue-collar-career-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 13:44:44](https://lobste.rs/s/kgu8if/those_who_fired_didn_t_hire_tech_writers) - [To those who fired or didn&apos;t hire tech writers because of AI](https://passo.uno/letter-those-who-fired-tech-writers-ai/)
* [2026-01-15, 13:26:20](https://lobste.rs/s/xe6dnb/iterative_image_reconstruction_using) - [iterative image reconstruction using random cubic bézier strokes](https://tangled.org/luthenwald.tngl.sh/splined)
* [2026-01-15, 13:18:10](https://news.ycombinator.com/item?id=46632039) - [Programming, Evolved: Lessons and Observations](https://github.com/kulesh/dotfiles/blob/main/dev/dev/docs/programming-evolved.md)
* [2026-01-15, 13:17:07](https://news.ycombinator.com/item?id=46632023) - [25 Years of Wikipedia](https://wikipedia25.org)
* [2026-01-15, 13:15:40](https://news.ycombinator.com/item?id=46632004) - [French Court Orders Popular VPNs to Block More Pirate Sites, Despite Opposition](https://torrentfreak.com/french-court-orders-popular-vpns-to-block-more-pirate-sites-despite-opposition/)
* [2026-01-15, 13:11:39](https://lobste.rs/s/1atb7q/i_m_captain_now_hijacking_global_ocean) - [I’m The Captain Now: Hijacking a global ocean supply chain network](https://eaton-works.com/2026/01/14/bluspark-bluvoyix-hack/)
* [2026-01-15, 13:00:00](https://science.slashdot.org/story/26/01/15/059238/ai-models-are-starting-to-crack-high-level-math-problems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Models Are Starting To Crack High-Level Math Problems](https://science.slashdot.org/story/26/01/15/059238/ai-models-are-starting-to-crack-high-level-math-problems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 12:53:34](https://news.ycombinator.com/item?id=46631728) - [The 500k-ton typo: Why data center copper math doesn&apos;t add up](https://investinglive.com/news/the-500000-ton-typo-why-data-center-copper-math-doesnt-add-up-20260113/)
* [2026-01-15, 12:27:40](https://lobste.rs/s/pddded/why_senior_engineers_let_bad_projects) - [Why Senior Engineers Let Bad Projects Fail](https://lalitm.com/post/why-senior-engineers-let-bad-projects-fail/)
* [2026-01-15, 12:00:37](https://news.ycombinator.com/item?id=46631276) - [Jiga (YC W21) Is Hiring Full Stack Engineers](https://jiga.io/about-us)
* [2026-01-15, 11:44:04](https://lobste.rs/s/fbkls4/people_who_built_wikipedia_technically) - [The people who built Wikipedia, technically (2021)](https://en.wikipedia.org/wiki/Wikipedia:Wikipedia_Signpost/2021-01-31/Technology_report)
* [2026-01-15, 10:59:32](https://lobste.rs/s/isnir7/mysql_vs_postgresql_performance) - [MySQL vs PostgreSQL Performance: throughput &amp; latency, reads &amp; writes](https://binaryigor.com/mysql-vs-postgresql-performance.html)
* [2026-01-15, 10:59:08](https://news.ycombinator.com/item?id=46630798) - [The 3D Software Rendering Technology of 1998&apos;s Thief: The Dark Project (2019)](https://nothings.org/gamedev/thief_rendering.html)
* [2026-01-15, 10:50:00](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss) - [A Fix for Frost: Engineers Use Electricity to Zap Ice Without Heat or Chemicals](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss)
* [2026-01-15, 10:00:00](https://games.slashdot.org/story/26/01/15/0446208/warhammer-maker-games-workshop-bans-its-staff-from-using-ai-in-its-content-or-designs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warhammer Maker Games Workshop Bans Its Staff From Using AI In Its Content or Designs](https://games.slashdot.org/story/26/01/15/0446208/warhammer-maker-games-workshop-bans-its-staff-from-using-ai-in-its-content-or-designs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 09:15:51](https://lobste.rs/s/whv98g/codeless_code_fables_koans_for_software) - [Codeless Code - Fables &amp; Koans for the Software Engineer](https://thecodelesscode.com)
* [2026-01-15, 09:11:29](https://lobste.rs/s/7cucs1/discoveries_continuations) - [The discoveries of continuations](https://homepages.inf.ed.ac.uk/wadler/papers/papers-we-love/reynolds-discoveries.pdf)
* [2026-01-15, 09:00:47](https://news.ycombinator.com/item?id=46629964) - [Python: Tprof, a Targeting Profiler](https://adamj.eu/tech/2026/01/14/python-introducing-tprof/)
* [2026-01-15, 08:38:27](https://lobste.rs/s/hshaq4/alternatives_minio_for_single_node_local) - [Alternatives to MinIO for single-node local S3](https://rmoff.net/2026/01/14/alternatives-to-minio-for-single-node-local-s3/)
* [2026-01-15, 08:23:02](https://news.ycombinator.com/item?id=46629682) - [Raspberry Pi&apos;s New AI Hat Adds 8GB of RAM for Local LLMs](https://www.jeffgeerling.com/blog/2026/raspberry-pi-ai-hat-2/)
* [2026-01-15, 08:10:06](https://lobste.rs/s/r7rdk7/lobsters_battlestations_screenshots) - [Lobsters Battlestations and Screenshots (2026)](https://lobste.rs/s/r7rdk7/lobsters_battlestations_screenshots)
* [2026-01-15, 07:20:02](https://news.ycombinator.com/item?id=46629191) - [Show HN: MailPilot – Freedom to go anywhere while your agents work](https://news.ycombinator.com/item?id=46629191)
* [2026-01-15, 07:05:31](https://lobste.rs/s/busryv/claude_cowork_exfiltrates_files) - [Claude Cowork Exfiltrates Files](https://www.promptarmor.com/resources/claude-cowork-exfiltrates-files)
* [2026-01-15, 07:00:00](https://hardware.slashdot.org/story/26/01/15/0436220/britain-awards-wind-farm-contracts-that-will-power-12-million-homes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Britain Awards Wind Farm Contracts That Will Power 12 Million Homes](https://hardware.slashdot.org/story/26/01/15/0436220/britain-awards-wind-farm-contracts-that-will-power-12-million-homes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 06:12:00](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss) - [Resuscitating a 1934 Briggs &amp; Stratton Washing Machine Engine](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss)
* [2026-01-15, 03:30:00](https://science.slashdot.org/story/26/01/14/2332240/the-swedish-start-up-aiming-to-conquer-americas-full-body-scan-craze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Swedish Start-Up Aiming To Conquer America&apos;s Full-Body-Scan Craze](https://science.slashdot.org/story/26/01/14/2332240/the-swedish-start-up-aiming-to-conquer-americas-full-body-scan-craze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 03:28:20](https://news.ycombinator.com/item?id=46627652) - [The URL shortener that makes your links look as suspicious as possible](https://creepylink.com/)
* [2026-01-15, 02:48:00](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss) - [RIP - &apos;Dilbert&apos; Creator Scott Adams Dies at 68 After Prostate Cancer Battle](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss)
* [2026-01-15, 02:02:00](https://mobile.slashdot.org/story/26/01/14/2319204/are-qwerty-phones-trying-to-make-a-comeback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are QWERTY Phones Trying To Make a Comeback?](https://mobile.slashdot.org/story/26/01/14/2319204/are-qwerty-phones-trying-to-make-a-comeback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 01:45:22](https://news.ycombinator.com/item?id=46626836) - [Bubblewrap: A nimble way to prevent agents from accessing your .env files](https://patrickmccanna.net/a-better-way-to-limit-claude-code-and-other-coding-agents-access-to-secrets/)
* [2026-01-15, 01:25:00](https://tech.slashdot.org/story/26/01/14/233241/digg-launches-its-new-reddit-rival-to-the-public?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Digg Launches Its New Reddit Rival To the Public](https://tech.slashdot.org/story/26/01/14/233241/digg-launches-its-new-reddit-rival-to-the-public?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 01:25:00](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss) - [The AIdigest.org&apos;s AI Village](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss)
* [2026-01-15, 00:47:22](https://lobste.rs/s/8hjgvt/writing_anteforth_forth_like_spark) - [Writing Anteforth, a Forth-like in SPARK](https://pyjarrett.github.io/2026/01/13/anteforth.html)
* [2026-01-15, 00:45:00](https://slashdot.org/story/26/01/14/2253220/cerebras-scores-openai-deal-worth-over-10-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cerebras Scores OpenAI Deal Worth Over $10 Billion](https://slashdot.org/story/26/01/14/2253220/cerebras-scores-openai-deal-worth-over-10-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 00:34:59](https://news.ycombinator.com/item?id=46626210) - [New Safari developer tools provide insight into CSS Grid Lanes](https://webkit.org/blog/17746/new-safari-developer-tools-provide-insight-into-css-grid-lanes/)
* [2026-01-15, 00:02:00](https://news.slashdot.org/story/26/01/14/225243/doordash-and-ubereats-cost-drivers-550-million-in-tips-nyc-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DoorDash and UberEats Cost Drivers $550 Million In Tips, NYC Says](https://news.slashdot.org/story/26/01/14/225243/doordash-and-ubereats-cost-drivers-550-million-in-tips-nyc-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 23:20:00](https://hardware.slashdot.org/story/26/01/14/2156254/us-approves-sale-of-nvidias-advanced-ai-chips-to-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Approves Sale of Nvidia&apos;s Advanced AI Chips To China](https://hardware.slashdot.org/story/26/01/14/2156254/us-approves-sale-of-nvidias-advanced-ai-chips-to-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 22:50:08](https://lobste.rs/s/o9acsn/state_openssl_for_pyca_cryptography) - [The State of OpenSSL for pyca/cryptography](https://cryptography.io/en/latest/statements/state-of-openssl/)
* [2026-01-14, 22:40:00](https://entertainment.slashdot.org/story/26/01/14/2149259/bandcamp-bans-ai-music?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bandcamp Bans AI Music](https://entertainment.slashdot.org/story/26/01/14/2149259/bandcamp-bans-ai-music?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 22:26:17](https://news.ycombinator.com/item?id=46624658) - [Crafting Interpreters](https://craftinginterpreters.com/)
* [2026-01-14, 22:23:42](https://lobste.rs/s/hqyoa2/i_built_2x_faster_lexer_then_discovered_i_o) - [I built a 2x faster lexer, then discovered I/O was the real bottleneck](https://modulovalue.com/blog/syscall-overhead-tar-gz-io-performance/)
* [2026-01-14, 22:18:04](https://news.ycombinator.com/item?id=46624541) - [Scaling long-running autonomous coding](https://cursor.com/blog/scaling-agents)
* [2026-01-14, 22:04:10](https://news.ycombinator.com/item?id=46624352) - [The State of OpenSSL for pyca/cryptography](https://cryptography.io/en/latest/statements/state-of-openssl/)
* [2026-01-14, 22:02:00](https://it.slashdot.org/story/26/01/14/2143252/house-sysadmin-stole-200-phones-caught-by-house-it-desk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [House Sysadmin Stole 200 Phones, Caught By House IT Desk](https://it.slashdot.org/story/26/01/14/2143252/house-sysadmin-stole-200-phones-caught-by-house-it-desk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 21:25:00](https://news.slashdot.org/story/26/01/14/1924225/uk-scraps-mandatory-digital-id-enrollment-for-workers-after-public-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Scraps Mandatory Digital ID Enrollment for Workers After Public Backlash](https://news.slashdot.org/story/26/01/14/1924225/uk-scraps-mandatory-digital-id-enrollment-for-workers-after-public-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 20:55:24](https://lobste.rs/s/4icz4n/what_does_it_take_ship_rust_safety) - [What does it take to ship Rust in safety-critical?](https://blog.rust-lang.org/2026/01/14/what-does-it-take-to-ship-rust-in-safety-critical/)
* [2026-01-14, 20:55:19](https://lobste.rs/s/u1ypx5/stop_using_mysql_2026_it_is_not_true_open) - [Stop using MySQL in 2026, it is not true open source](https://optimizedbyotto.com/post/reasons-to-stop-using-mysql/)
* [2026-01-14, 20:52:21](https://lobste.rs/s/xa4ndh/selfci_minimalistic_local_first_unix) - [SelfCI - a minimalistic local-first Unix-philosophy-abiding CI](https://app.radicle.xyz/nodes/radicle.dpc.pw/rad:z2tDzYbAXxTQEKTGFVwiJPajkbeDU)
* [2026-01-14, 20:33:00](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss) - [Tech Bloggers Switching From Windows to Linux](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss)
* [2026-01-14, 20:12:25](https://news.ycombinator.com/item?id=46622328) - [Claude Cowork exfiltrates files](https://www.promptarmor.com/resources/claude-cowork-exfiltrates-files)
* [2026-01-14, 19:31:57](https://lobste.rs/s/mj7k0s/coding_on_phone_what_i_learned_building) - [Coding on a Phone: What I Learned Building Software on Mobile in the Last Three Weeks](https://rahulpandita.me/blog/2026-01-14-Mobile-Development)
* [2026-01-14, 19:16:11](https://lobste.rs/s/jluhmx/chat_is_least_interesting_interface_llms) - [Chat is the least interesting interface to LLMs](https://www.haskellforall.com/2026/01/chat-is-least-interesting-interface-to.html)
* [2026-01-14, 19:04:52](https://lobste.rs/s/pxaxqn/my_gripes_with_prolog) - [My Gripes with Prolog](https://buttondown.com/hillelwayne/archive/my-gripes-with-prolog/)
* [2026-01-14, 17:54:25](https://news.ycombinator.com/item?id=46619464) - [Ask HN: What did you find out or explore today?](https://news.ycombinator.com/item?id=46619464)
* [2026-01-14, 17:07:42](https://news.ycombinator.com/item?id=46618714) - [Ask HN: Share your personal website](https://news.ycombinator.com/item?id=46618714)
* [2026-01-14, 15:49:00](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss) - [China Expected to Approve H200 Imports in Early 2026, Report Claims](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss)
* [2026-01-14, 15:44:22](https://news.ycombinator.com/item?id=46617360) - [Find a pub that needs you](https://www.ismypubfucked.com/)
* [2026-01-14, 14:44:28](https://lobste.rs/s/vnkwyb/my_opinion_on_spelling_run_time_vs_run_time) - [My Opinion on Spelling Run Time vs. Run-time vs. Runtime](https://bobrubbens.nl/post/my-opinion-on-spelling-runtime/)
* [2026-01-14, 14:38:29](https://news.ycombinator.com/item?id=46616529) - [Ask HN: How are you doing RAG locally?](https://news.ycombinator.com/item?id=46616529)
* [2026-01-14, 12:12:39](https://lobste.rs/s/6vnavr/servo_2025_stats) - [Servo 2025 Stats](https://blogs.igalia.com/mrego/servo-2025-stats/)
* [2026-01-14, 11:54:54](https://lobste.rs/s/wyvqyq/interactive_ebpf_playground) - [Interactive eBPF playground](https://ebpf.party)
* [2026-01-14, 11:06:00](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss) - [Some Dogs Eavesdrop on Their Owners to Learn New Words](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss)
* [2026-01-14, 08:10:28](https://lobste.rs/s/knwdud/just_browser) - [Just the Browser](https://justthebrowser.com/)
* [2026-01-14, 06:24:00](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss) - [An Ultra-Fast Quantum Tunneling Device for the 6G Terahertz Era](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss)
* [2026-01-14, 01:41:00](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss) - [Volkswagen is Bringing Physical Buttons Back to the Dashboard With the Polo EV](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss)
* [2026-01-13, 20:52:00](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss) - [A Sit-Stand Ratio ‘Sweet Spot’ May Boost Office Productivity](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss)
* [2026-01-13, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss) - [Poul-Henning Kamp&apos;s Feedback to the EU on Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss)
* [2026-01-13, 11:26:00](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss) - [A 2,000-Year-Old Fingerprint May Solve Mystery of Scandinavia&apos;s Oldest Wooden Boat](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss)
* [2026-01-13, 06:45:00](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss) - [How Doubting Your Doubts May Increase Commitment to Goals](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss)
* [2026-01-13, 01:52:00](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss) - [The Book Only Gets 3 Stars, but is Considered Great Literature](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss)
* [2026-01-12, 21:11:00](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss) - [NASA Postponed ISS Spacewalk Over Medical Issue, Crew Will Return Early](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss)
* [2026-01-12, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss) - [Very Tough Microbes May Help Us Cement Our Future on Mars](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss)
* [2026-01-12, 12:03:00](https://news.ycombinator.com/item?id=46587284) - [Impeccable Style](https://impeccable.style)
* [2026-01-12, 12:00:00](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss) - [Oceans Are Struggling To Absorb Carbon As Microplastics Flood Their Waters](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss)
* [2026-01-12, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss) - [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss)
* [2026-01-12, 05:42:09](https://news.ycombinator.com/item?id=46584523) - [Z80 Mem­ber­ship Card](https://sunrise-ev.com/z80.htm)
* [2026-01-12, 02:33:00](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss) - [Bose Open-Sources its SoundTouch Home Theater Smart Speakers Ahead of End-of-Life](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss)
* [2026-01-11, 21:52:00](https://soylentnews.org/article.pl?sid=26/01/10/0115240&amp;from=rss) - [Dell Reveals People Don&apos;t Care About AI in PCs – and a New Truly Embarrassing Windows 11 Fail ](https://soylentnews.org/article.pl?sid=26/01/10/0115240&amp;from=rss)
* [2026-01-11, 17:13:00](https://soylentnews.org/article.pl?sid=26/01/10/0111244&amp;from=rss) - [Your Daily Cup of Tea Could Help Fight Heart Disease, Cancer, Aging, and More](https://soylentnews.org/article.pl?sid=26/01/10/0111244&amp;from=rss)
* [2026-01-11, 12:26:00](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss) - [Finding Runaway Stars to Help Map Dark Matter in the Milky Way](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss)
* [2026-01-11, 07:24:00](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss) - [Virginia&apos;s Datacenter Tax Breaks Cost State $1.6B in 2025](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss)
* [2026-01-11, 02:54:00](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss) - [Some People Get Drunk Without Drinking and Scientists Finally Know Why](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss)
