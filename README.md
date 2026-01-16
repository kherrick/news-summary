# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Advancements

* [Survey: Even Meta And Microsoft Engineers Ditch Company AI For Claude](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss) - Highlights how engineers from major tech companies are opting for Claude over in-house AI tools for superior functionality. [Comments](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss)

* [Show HN: Gambit, an open-source agent harness for building reliable AI agents](https://github.com/bolt-foundry/gambit) - A framework designed for developing robust AI applications. [Comments](https://news.ycombinator.com/item?id=46641362)

* [New Social Web Working Group at W3C](https://socialwebfoundation.org/2026/01/15/new-social-web-working-group-at-w3c/) - Outlines efforts to create updated standards for improved social web functionality. [Comments](https://lobste.rs/s/aijblh/new_social_web_working_group_at_w3c)

* [Many People Who Come Off GLP-1 Drugs Regain Weight Within 2 Years, Review Suggests](https://science.slashdot.org/story/26/01/15/1717234/many-people-who-come-off-glp-1-drugs-regain-weight-within-2-years-review-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examines the complex dynamics of weight management using medical innovation. [Comments](https://science.slashdot.org/comments.pl?sid=26700164&amp;cid=2271423)

## Internet and Privacy Insights

* [Iran's Internet Shutdown Is Now One of the Longest Ever](https://tech.slashdot.org/story/26/01/15/2228257/irans-internet-shutdown-is-now-one-of-the-longest-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analyzes Iran's extreme measures to control internet access, highlighting implications for privacy. [Comments](https://tech.slashdot.org/story/26/01/15/2228257/comments#comments)

* [Italy's Privacy Watchdog, Scourge of US Big Tech, Hit By Corruption Probe](https://yro.slashdot.org/story/26/01/15/2120216/italys-privacy-watchdog-scourge-of-us-big-tech-hit-by-corruption-probe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Questions the crackdown on privacy violations amidst allegations of corruption. [Comments](https://yro.slashdot.org/comments.pl?sid=26696216&amp;cid=2271021)

* [Briar keeps Iran connected via Bluetooth and Wi-Fi when the internet goes dark](https://briarproject.org/manual/fa/) - A tool keeping connectivity alive despite internet disruptions. [Comments](https://news.ycombinator.com/item?id=46638013)

## Software Innovations and Development

* [Why is Zig so Cool?](https://nilostolte.github.io/tech/articles/ZigCool.html) - An exploration of what makes the Zig programming language unique and attractive. [Comments](https://lobste.rs/s/e3xhzq/why_is_zig_so_cool)

* [JuiceFS is a distributed POSIX file system built on top of Redis and S3](https://github.com/juicedata/juicefs) - Introduces an innovative distributed file system for various workflows. [Comments](https://news.ycombinator.com/item?id=46637165)

* [Interactive eBPF playground](https://ebpf.party) - Learn about eBPF through this interactive educational tool. [Comments](https://lobste.rs/s/wyvqyq/interactive_ebpf_playground)

## Science and Space Exploration

* [Astronauts Splash Down To Earth After Medical Evacuation From ISS](https://science.slashdot.org/story/26/01/15/2134216/astronauts-splash-down-to-earth-after-medical-evacuation-from-iss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Details the return journey of astronauts following a medical emergency on the ISS. [Comments](https://science.slashdot.org/comments.pl?sid=26703916&amp;cid=22703998)

* [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss) - Fascinating discovery into ancient bee behavior. [Comments](https://soylentnews.org/comments.pl?sid=26/01/10/227243&amp;from=rss)

## Noteworthy Miscellaneous Developments

* [Resuscitating a 1934 Briggs & Stratton Washing Machine Engine](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss) - Chronicles the revival of vintage machinery and its historical significance. [Comments](https://soylentnews.org/comments.pl?sid=26/01/13/161243&amp;from=rss)

* [Raspberry Pi's New Add-on Board Has 8GB of RAM For Running Gen AI Models](https://it.slashdot.org/story/26/01/15/1849235/raspberry-pis-new-add-on-board-has-8gb-of-ram-for-running-gen-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Showcases a powerful tool for machine learning and AI applications. [Comments](https://it.slashdot.org/comments.pl?sid=26695435&amp;cid=2271024)

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

* [2026-01-16, 01:06:00](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss) - [Survey: Even Meta And Microsoft Engineers Ditch Company AI For Claude](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss)
* [2026-01-16, 00:45:00](https://tech.slashdot.org/story/26/01/15/2228257/irans-internet-shutdown-is-now-one-of-the-longest-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran&apos;s Internet Shutdown Is Now One of the Longest Ever](https://tech.slashdot.org/story/26/01/15/2228257/irans-internet-shutdown-is-now-one-of-the-longest-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 00:15:53](https://lobste.rs/s/e3xhzq/why_is_zig_so_cool) - [Why is Zig so Cool?](https://nilostolte.github.io/tech/articles/ZigCool.html)
* [2026-01-16, 00:13:25](https://news.ycombinator.com/item?id=46641362) - [Show HN: Gambit, an open-source agent harness for building reliable AI agents](https://github.com/bolt-foundry/gambit)
* [2026-01-16, 00:11:28](https://news.ycombinator.com/item?id=46641348) - [My Gripes with Prolog](https://buttondown.com/hillelwayne/archive/my-gripes-with-prolog/)
* [2026-01-16, 00:02:00](https://science.slashdot.org/story/26/01/15/2134216/astronauts-splash-down-to-earth-after-medical-evacuation-from-iss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronauts Splash Down To Earth After Medical Evacuation From ISS](https://science.slashdot.org/story/26/01/15/2134216/astronauts-splash-down-to-earth-after-medical-evacuation-from-iss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 00:01:51](https://lobste.rs/s/esmvsj/http_ratelimit_headers) - [HTTP RateLimit headers](https://dotat.at/@/2026-01-13-http-ratelimit.html)
* [2026-01-15, 23:37:42](https://news.ycombinator.com/item?id=46641042) - [Tldraw pauses external contributions due to AI slop](https://github.com/tldraw/tldraw/issues/7695)
* [2026-01-15, 23:20:00](https://tech.slashdot.org/story/26/01/15/2126254/asus-stops-producing-nvidia-rtx-5070-ti-and-5060-ti-16gb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ASUS Stops Producing Nvidia RTX 5070 Ti and 5060 Ti 16GB](https://tech.slashdot.org/story/26/01/15/2126254/asus-stops-producing-nvidia-rtx-5070-ti-and-5060-ti-16gb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 22:40:00](https://yro.slashdot.org/story/26/01/15/2120216/italys-privacy-watchdog-scourge-of-us-big-tech-hit-by-corruption-probe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Italy&apos;s Privacy Watchdog, Scourge of US Big Tech, Hit By Corruption Probe](https://yro.slashdot.org/story/26/01/15/2120216/italys-privacy-watchdog-scourge-of-us-big-tech-hit-by-corruption-probe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 22:33:58](https://news.ycombinator.com/item?id=46640366) - [Why senior engineers let bad projects fail](https://lalitm.com/post/why-senior-engineers-let-bad-projects-fail/)
* [2026-01-15, 22:04:48](https://lobste.rs/s/ijrlrq/how_parametrize_exception_testing) - [How to parametrize exception testing in PyTest?](https://borutzki.github.io/2026/01/15/how-to-parametrize-exception-testing-in-pytest.html)
* [2026-01-15, 22:02:00](https://developers.slashdot.org/story/26/01/15/2114210/oracle-trying-to-lure-workers-to-nashville-for-new-global-hq?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oracle Trying To Lure Workers To Nashville For New &apos;Global&apos; HQ](https://developers.slashdot.org/story/26/01/15/2114210/oracle-trying-to-lure-workers-to-nashville-for-new-global-hq?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 21:22:00](https://tech.slashdot.org/story/26/01/15/1859211/boeing-knew-about-flaws-in-ups-plane-that-crashed-in-louisville-ntsb-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boeing Knew About Flaws in UPS Plane That Crashed in Louisville, NTSB Says](https://tech.slashdot.org/story/26/01/15/1859211/boeing-knew-about-flaws-in-ups-plane-that-crashed-in-louisville-ntsb-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 21:00:42](https://news.ycombinator.com/item?id=46639248) - [Aviator (YC S21) is hiring to build multiplayer AI coding platform](https://www.ycombinator.com/companies/aviator/jobs)
* [2026-01-15, 20:45:00](https://it.slashdot.org/story/26/01/15/1849235/raspberry-pis-new-add-on-board-has-8gb-of-ram-for-running-gen-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Raspberry Pi&apos;s New Add-on Board Has 8GB of RAM For Running Gen AI Models](https://it.slashdot.org/story/26/01/15/1849235/raspberry-pis-new-add-on-board-has-8gb-of-ram-for-running-gen-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 20:30:28](https://lobste.rs/s/ywvwhg/twc_security_party_group_education_event) - [TWC Security Party - Group education event for tech workers to improve their privacy and make friends - Jan 26, 17:30 ET](https://dev.techworkerscoalition.org/u/secparty)
* [2026-01-15, 20:20:13](https://news.ycombinator.com/item?id=46638629) - [Linux boxes via SSH: suspended when disconected](https://shellbox.dev/)
* [2026-01-15, 20:17:00](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss) - [GNOME Dev Gives Fans of Linux&apos;s Middle-Click Paste the Middle Finger](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss)
* [2026-01-15, 20:02:00](https://news.slashdot.org/story/26/01/15/1846223/why-go-is-going-nowhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Go is Going Nowhere](https://news.slashdot.org/story/26/01/15/1846223/why-go-is-going-nowhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 19:54:42](https://news.ycombinator.com/item?id=46638241) - [How I learned everything I know about programming](https://agentultra.com/blog/how-i-learned-everything-i-know/index.html)
* [2026-01-15, 19:38:02](https://news.ycombinator.com/item?id=46638013) - [Briar keeps Iran connected via Bluetooth and Wi-Fi when the internet goes dark](https://briarproject.org/manual/fa/)
* [2026-01-15, 19:22:00](https://news.slashdot.org/story/26/01/15/1835210/students-increasingly-choosing-community-college-or-certificates-over-four-year-degrees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Students Increasingly Choosing Community College or Certificates Over Four-Year Degrees](https://news.slashdot.org/story/26/01/15/1835210/students-increasingly-choosing-community-college-or-certificates-over-four-year-degrees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 18:54:32](https://news.ycombinator.com/item?id=46637328) - [Data is the only moat](https://frontierai.substack.com/p/data-is-your-only-moat)
* [2026-01-15, 18:48:51](https://lobste.rs/s/wt74cp/reverse_engineering_my_cloud_connected_e) - [Reverse engineering my cloud-connected e-scooter and finding the master key to unlock all scooters](https://blog.nns.ee/2026/01/06/aike-ble/)
* [2026-01-15, 18:45:18](https://news.ycombinator.com/item?id=46637165) - [JuiceFS is a distributed POSIX file system built on top of Redis and S3](https://github.com/juicedata/juicefs)
* [2026-01-15, 18:41:00](https://news.slashdot.org/story/26/01/15/1754223/microsoft-is-closing-its-employee-library-and-cutting-back-on-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is Closing Its Employee Library and Cutting Back on Subscriptions](https://news.slashdot.org/story/26/01/15/1754223/microsoft-is-closing-its-employee-library-and-cutting-back-on-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 18:21:12](https://news.ycombinator.com/item?id=46636786) - [Show HN: Control Claude permissions using a cloud-based decision table UI](https://github.com/rulebricks/claude-code-guardrails)
* [2026-01-15, 18:02:00](https://science.slashdot.org/story/26/01/15/1717234/many-people-who-come-off-glp-1-drugs-regain-weight-within-2-years-review-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Many People Who Come Off GLP-1 Drugs Regain Weight Within 2 Years, Review Suggests](https://science.slashdot.org/story/26/01/15/1717234/many-people-who-come-off-glp-1-drugs-regain-weight-within-2-years-review-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 17:51:24](https://news.ycombinator.com/item?id=46636387) - [CVEs affecting the Svelte ecosystem](https://svelte.dev/blog/cves-affecting-the-svelte-ecosystem)
* [2026-01-15, 17:30:10](https://news.ycombinator.com/item?id=46636093) - [Supply Chain Vuln Compromised Core AWS GitHub Repos &amp; Threatened the AWS Console](https://www.wiz.io/blog/wiz-research-codebreach-vulnerability-aws-codebuild)
* [2026-01-15, 17:21:00](https://slashdot.org/story/26/01/15/176246/amazon-threatens-drastic-action-after-saks-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Threatens &apos;Drastic Action&apos; After Saks Bankruptcy](https://slashdot.org/story/26/01/15/176246/amazon-threatens-drastic-action-after-saks-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 16:49:13](https://news.ycombinator.com/item?id=46635345) - [Ask HN: How can we solve the loneliness epidemic?](https://news.ycombinator.com/item?id=46635345)
* [2026-01-15, 16:48:00](https://tech.slashdot.org/story/26/01/15/1648212/the-united-states-needs-fewer-bus-stops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The United States Needs Fewer Bus Stops](https://tech.slashdot.org/story/26/01/15/1648212/the-united-states-needs-fewer-bus-stops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 16:07:00](https://apple.slashdot.org/story/26/01/15/166213/apple-is-fighting-for-tsmc-capacity-as-nvidia-takes-center-stage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple is Fighting for TSMC Capacity as Nvidia Takes Center Stage](https://apple.slashdot.org/story/26/01/15/166213/apple-is-fighting-for-tsmc-capacity-as-nvidia-takes-center-stage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 15:59:21](https://news.ycombinator.com/item?id=46634450) - [Design and Implementation of Sprites](https://fly.io/blog/design-and-implementation/)
* [2026-01-15, 15:49:33](https://lobste.rs/s/aijblh/new_social_web_working_group_at_w3c) - [New Social Web Working Group at W3C](https://socialwebfoundation.org/2026/01/15/new-social-web-working-group-at-w3c/)
* [2026-01-15, 15:31:00](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss) - [Cray Customer Service – Memories (1979 to 2014) by Charles Clark](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss)
* [2026-01-15, 15:20:00](https://news.slashdot.org/story/26/01/15/1516207/wikipedia-signs-ai-licensing-deals-on-its-25th-birthday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wikipedia Signs AI Licensing Deals On Its 25th Birthday](https://news.slashdot.org/story/26/01/15/1516207/wikipedia-signs-ai-licensing-deals-on-its-25th-birthday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 15:16:58](https://lobste.rs/s/2sl7bs/going_immutable_on_macos) - [Going immutable on macOS](https://carette.xyz/posts/going_immutable_macos/)
* [2026-01-15, 15:09:16](https://news.ycombinator.com/item?id=46633574) - [Found: Medieval Cargo Ship – Largest Vessel of Its Kind Ever](https://www.smithsonianmag.com/smart-news/archaeologists-say-theyve-unearthed-a-massive-medieval-cargo-ship-thats-the-largest-vessel-of-its-kind-ever-found-180987984/)
* [2026-01-15, 15:02:42](https://news.ycombinator.com/item?id=46633488) - [Apple is fighting for TSMC capacity as Nvidia takes center stage](https://www.culpium.com/p/exclusiveapple-is-fighting-for-tsmc)
* [2026-01-15, 14:11:30](https://news.ycombinator.com/item?id=46632768) - [Show HN: TinyCity – A tiny city SIM for MicroPython (Thumby micro console)](https://github.com/chrisdiana/TinyCity)
* [2026-01-15, 14:10:40](https://lobste.rs/s/ahdtzt/forgejo_v14_0_is_available) - [Forgejo v14.0 is available](https://forgejo.org/2026-01-release-v14-0/)
* [2026-01-15, 13:44:44](https://lobste.rs/s/kgu8if/those_who_fired_didn_t_hire_tech_writers) - [To those who fired or didn&apos;t hire tech writers because of AI](https://passo.uno/letter-those-who-fired-tech-writers-ai/)
* [2026-01-15, 13:26:20](https://lobste.rs/s/xe6dnb/iterative_image_reconstruction_using) - [iterative image reconstruction using random cubic bézier strokes](https://tangled.org/luthenwald.tngl.sh/splined)
* [2026-01-15, 13:17:07](https://news.ycombinator.com/item?id=46632023) - [25 Years of Wikipedia](https://wikipedia25.org)
* [2026-01-15, 13:11:39](https://lobste.rs/s/1atb7q/i_m_captain_now_hijacking_global_ocean) - [I’m The Captain Now: Hijacking a global ocean supply chain network](https://eaton-works.com/2026/01/14/bluspark-bluvoyix-hack/)
* [2026-01-15, 12:27:40](https://lobste.rs/s/pddded/why_senior_engineers_let_bad_projects) - [Why Senior Engineers Let Bad Projects Fail](https://lalitm.com/post/why-senior-engineers-let-bad-projects-fail/)
* [2026-01-15, 11:44:04](https://lobste.rs/s/fbkls4/people_who_built_wikipedia_technically) - [The people who built Wikipedia, technically (2021)](https://en.wikipedia.org/wiki/Wikipedia:Wikipedia_Signpost/2021-01-31/Technology_report)
* [2026-01-15, 10:59:32](https://lobste.rs/s/isnir7/mysql_vs_postgresql_performance) - [MySQL vs PostgreSQL Performance: throughput &amp; latency, reads &amp; writes](https://binaryigor.com/mysql-vs-postgresql-performance.html)
* [2026-01-15, 10:50:00](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss) - [A Fix for Frost: Engineers Use Electricity to Zap Ice Without Heat or Chemicals](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss)
* [2026-01-15, 09:54:10](https://news.ycombinator.com/item?id=46630369) - [Photos capture the breathtaking scale of China&apos;s wind and solar buildout](https://e360.yale.edu/digest/china-renewable-photo-essay)
* [2026-01-15, 09:15:51](https://lobste.rs/s/whv98g/codeless_code_fables_koans_for_software) - [Codeless Code - Fables &amp; Koans for the Software Engineer](https://thecodelesscode.com)
* [2026-01-15, 09:11:29](https://lobste.rs/s/7cucs1/discoveries_continuations) - [The discoveries of continuations](https://homepages.inf.ed.ac.uk/wadler/papers/papers-we-love/reynolds-discoveries.pdf)
* [2026-01-15, 08:38:27](https://lobste.rs/s/hshaq4/alternatives_minio_for_single_node_local) - [Alternatives to MinIO for single-node local S3](https://rmoff.net/2026/01/14/alternatives-to-minio-for-single-node-local-s3/)
* [2026-01-15, 08:10:06](https://lobste.rs/s/r7rdk7/lobsters_battlestations_screenshots) - [Lobsters Battlestations and Screenshots (2026)](https://lobste.rs/s/r7rdk7/lobsters_battlestations_screenshots)
* [2026-01-15, 07:36:15](https://news.ycombinator.com/item?id=46629295) - [Use of Bayesian methodology in clinical trials of drug and biological products [pdf]](https://www.fda.gov/media/190505/download)
* [2026-01-15, 07:05:31](https://lobste.rs/s/busryv/claude_cowork_exfiltrates_files) - [Claude Cowork Exfiltrates Files](https://www.promptarmor.com/resources/claude-cowork-exfiltrates-files)
* [2026-01-15, 06:12:00](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss) - [Resuscitating a 1934 Briggs &amp; Stratton Washing Machine Engine](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss)
* [2026-01-15, 05:14:08](https://news.ycombinator.com/item?id=46628329) - [Pocket TTS: A high quality TTS that gives your CPU a voice](https://kyutai.org/blog/2026-01-13-pocket-tts)
* [2026-01-15, 02:48:00](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss) - [RIP - &apos;Dilbert&apos; Creator Scott Adams Dies at 68 After Prostate Cancer Battle](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss)
* [2026-01-15, 01:25:00](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss) - [The AIdigest.org&apos;s AI Village](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss)
* [2026-01-14, 22:50:08](https://lobste.rs/s/o9acsn/state_openssl_for_pyca_cryptography) - [The State of OpenSSL for pyca/cryptography](https://cryptography.io/en/latest/statements/state-of-openssl/)
* [2026-01-14, 20:55:24](https://lobste.rs/s/4icz4n/what_does_it_take_ship_rust_safety) - [What does it take to ship Rust in safety-critical?](https://blog.rust-lang.org/2026/01/14/what-does-it-take-to-ship-rust-in-safety-critical/)
* [2026-01-14, 20:52:21](https://lobste.rs/s/xa4ndh/selfci_minimalistic_local_first_unix) - [SelfCI - a minimalistic local-first Unix-philosophy-abiding CI](https://app.radicle.xyz/nodes/radicle.dpc.pw/rad:z2tDzYbAXxTQEKTGFVwiJPajkbeDU)
* [2026-01-14, 20:33:00](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss) - [Tech Bloggers Switching From Windows to Linux](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss)
* [2026-01-14, 19:04:52](https://lobste.rs/s/pxaxqn/my_gripes_with_prolog) - [My Gripes with Prolog](https://buttondown.com/hillelwayne/archive/my-gripes-with-prolog/)
* [2026-01-14, 16:26:11](https://news.ycombinator.com/item?id=46618042) - [Claude is good at assembling blocks, but still falls apart at creating them](https://www.approachwithalacrity.com/claude-ne/)
* [2026-01-14, 15:49:00](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss) - [China Expected to Approve H200 Imports in Early 2026, Report Claims](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss)
* [2026-01-14, 11:54:54](https://lobste.rs/s/wyvqyq/interactive_ebpf_playground) - [Interactive eBPF playground](https://ebpf.party)
* [2026-01-14, 11:06:00](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss) - [Some Dogs Eavesdrop on Their Owners to Learn New Words](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss)
* [2026-01-14, 08:10:28](https://lobste.rs/s/knwdud/just_browser) - [Just the Browser](https://justthebrowser.com/)
* [2026-01-14, 07:26:52](https://news.ycombinator.com/item?id=46613324) - [Inside The Internet Archive&apos;s Infrastructure](https://hackernoon.com/the-long-now-of-the-web-inside-the-internet-archives-fight-against-forgetting)
* [2026-01-14, 07:21:54](https://news.ycombinator.com/item?id=46613304) - [Claude Cowork runs Linux VM via Apple virtualization framework](https://gist.github.com/simonw/35732f187edbe4fbd0bf976d013f22c8)
* [2026-01-14, 06:24:00](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss) - [An Ultra-Fast Quantum Tunneling Device for the 6G Terahertz Era](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss)
* [2026-01-14, 06:14:26](https://news.ycombinator.com/item?id=46612919) - [First impressions of Claude Cowork](https://simonw.substack.com/p/first-impressions-of-claude-cowork)
* [2026-01-14, 04:55:04](https://news.ycombinator.com/item?id=46612494) - [Show HN: OpenWork – an open-source alternative to Claude Cowork](https://github.com/different-ai/openwork)
* [2026-01-14, 01:41:00](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss) - [Volkswagen is Bringing Physical Buttons Back to the Dashboard With the Polo EV](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss)
* [2026-01-13, 20:52:00](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss) - [A Sit-Stand Ratio ‘Sweet Spot’ May Boost Office Productivity](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss)
* [2026-01-13, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss) - [Poul-Henning Kamp&apos;s Feedback to the EU on Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss)
* [2026-01-13, 11:26:00](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss) - [A 2,000-Year-Old Fingerprint May Solve Mystery of Scandinavia&apos;s Oldest Wooden Boat](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss)
* [2026-01-13, 06:45:00](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss) - [How Doubting Your Doubts May Increase Commitment to Goals](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss)
* [2026-01-13, 01:52:00](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss) - [The Book Only Gets 3 Stars, but is Considered Great Literature](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss)
* [2026-01-12, 21:11:00](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss) - [NASA Postponed ISS Spacewalk Over Medical Issue, Crew Will Return Early](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss)
* [2026-01-12, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss) - [Very Tough Microbes May Help Us Cement Our Future on Mars](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss)
* [2026-01-12, 13:32:42](https://news.ycombinator.com/item?id=46588243) - [Go-legacy-winxp: Compile Golang 1.24 code for Windows XP](https://github.com/syncguy/go-legacy-winxp/tree/winxp-compat)
* [2026-01-12, 12:00:00](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss) - [Oceans Are Struggling To Absorb Carbon As Microplastics Flood Their Waters](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss)
* [2026-01-12, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss) - [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss)
* [2026-01-12, 02:33:00](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss) - [Bose Open-Sources its SoundTouch Home Theater Smart Speakers Ahead of End-of-Life](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss)
