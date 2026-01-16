# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [The Magic of the Better Software Conference](https://www.rfleury.com/p/the-magic-of-the-better-software) - A look into an inspiring software conference aimed at fostering creativity and innovation ([Comments](https://lobste.rs/s/x59zd7/magic_better_software_conference)).

* [Interactive eBPF](https://ebpf.party/) - Dive into a hands-on environment for learning and experimenting with eBPF ([Comments](https://news.ycombinator.com/item?id=46644181)).

* [Reverse engineering my cloud-connected e-scooter and finding the master key to unlock all scooters](https://blog.nns.ee/2026/01/06/aike-ble/) - Insights into hacking an e-scooter's cloud connectivity and security vulnerabilities ([Comments](https://lobste.rs/s/wt74cp/reverse_engineering_my_cloud_connected_e)).

* [Pocket TTS: A high quality TTS that gives your CPU a voice](https://kyutai.org/blog/2026-01-13-pocket-tts) - A project showcasing advancements in text-to-speech technology using minimal resources ([Comments](https://news.ycombinator.com/item?id=46628329)).

* [JuiceFS is a distributed POSIX file system built on top of Redis and S3](https://github.com/juicedata/juicefs) - Explore a unique approach to distributed file systems leveraging Redis and S3 ([Comments](https://news.ycombinator.com/item?id=46637165)).

## Security and Privacy

* [StackWarp Vulnerability](https://stackwarpattack.com/) - A deep dive into security flaws dubbed 'StackWarp' and their potential consequences ([Comments](https://lobste.rs/s/gpvztk/stackwarp_vulnerability)).

* [New York Introduces Legislation To Crack Down On 3D Printers That Make Ghost Guns](https://hardware.slashdot.org/story/26/01/15/2236205/new-york-introduces-legislation-to-crack-down-on-3d-printers-that-make-ghost-guns?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A legislative move to address the growing issue of 3D-printed guns ([Comments](https://hardware.slashdot.org/story/26/01/15/2236205/new-york-introduces-legislation-to-crack-down-on-3d-printers-that-make-ghost-guns?utm_source=rss1.0mainlinkanon&utm_medium=feed)).

* [Boeing knew of flaw in part linked to UPS plane crash, NTSB report says](https://www.bbc.com/news/articles/cly56w0p9e1o) - Investigation reveals critical flaws contributing to a plane crash ([Comments](https://news.ycombinator.com/item?id=46642920)).

* [Iran's Internet Shutdown Is Now One of the Longest Ever](https://tech.slashdot.org/story/26/01/15/2228257/irans-internet-shutdown-is-now-one-of-the-longest-ever?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Examining the implications of prolonged internet censorship in Iran ([Comments](https://tech.slashdot.org/story/26/01/15/2228257/irans-internet-shutdown-is-now-one-of-the-longest-ever?utm_source=rss1.0mainlinkanon&utm_medium=feed)).

* [Quint Visualizer: a GraphViz-like visualizer for Quint traces](https://quint-visualizer.noghartt.dev/) - A new tool for visualizing program traces, inspired by GraphViz ([Comments](https://lobste.rs/s/09tygd/quint_visualizer_graphviz_like)).

## Environmental Concerns

* [US Carbon Pollution Rose In 2025, a Reversal From Prior Years](https://news.slashdot.org/story/26/01/16/043253/us-carbon-pollution-rose-in-2025-a-reversal-from-prior-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A concerning rise in the United States' carbon emissions despite previous progress ([Comments](https://news.slashdot.org/story/26/01/16/043253/us-carbon-pollution-rose-in-2025-a-reversal-from-prior-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)).

* [Oceans Are Struggling To Absorb Carbon As Microplastics Flood Their Waters](https://soylentnews.org/article.pl?sid=26/01/10/2213252&from=rss) - The compounding effects of carbon emissions and plastic pollution in marine ecosystems ([Comments](https://soylentnews.org/article.pl?sid=26/01/10/2213252&from=rss)).

* [Very Tough Microbes May Help Us Cement Our Future on Mars](https://soylentnews.org/article.pl?sid=26/01/10/2218252&from=rss) - Discovering resilient microbial life that may contribute to life support systems in space ([Comments](https://soylentnews.org/article.pl?sid=26/01/10/2218252&from=rss)).

## Science and Space Exploration

* [Astronauts Splash Down To Earth After Medical Evacuation From ISS](https://science.slashdot.org/story/26/01/15/2134216/astronauts-splash-down-to-earth-after-medical-evacuation-from-iss?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An overview of the latest medical evacuation mission from the International Space Station ([Comments](https://science.slashdot.org/story/26/01/15/2134216/astronauts-splash-down-to-earth-after-medical-evacuation-from-iss?utm_source=rss1.0mainlinkanon&utm_medium=feed)).

* [Some Dogs Eavesdrop on Their Owners to Learn New Words](https://soylentnews.org/article.pl?sid=26/01/12/1838234&from=rss) - Fascinating evidence of how dogs may interpret human language ([Comments](https://soylentnews.org/article.pl?sid=26/01/12/1838234&from=rss)).

* [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243&from=rss) - A curious adaptation in ancient bee species for survival ([Comments](https://soylentnews.org/article.pl?sid=26/01/10/227243&from=rss)).

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

* [2026-01-16, 10:01:31](https://lobste.rs/s/x59zd7/magic_better_software_conference) - [The Magic of the Better Software Conference](https://www.rfleury.com/p/the-magic-of-the-better-software)
* [2026-01-16, 09:27:03](https://news.ycombinator.com/item?id=46644661) - [The spectrum of isolation: From bare metal to WebAssembly](https://buildsoftwaresystems.com/post/guide-to-execution-environments/)
* [2026-01-16, 09:12:07](https://lobste.rs/s/hr7ajl/postgresql_gleam_with_pog_squirrel) - [PostgreSQL in Gleam with pog, squirrel, and cigogne](https://nulltree.xyz/articles/basic-postgres-setup-in-gleam/)
* [2026-01-16, 09:06:45](https://news.ycombinator.com/item?id=46644541) - [pf: Make af-to less magical](https://undeadly.org/cgi?action=article;sid=20260116085115)
* [2026-01-16, 08:01:02](https://news.ycombinator.com/item?id=46644181) - [Interactive eBPF](https://ebpf.party/)
* [2026-01-16, 07:37:07](https://lobste.rs/s/gpvztk/stackwarp_vulnerability) - [StackWarp Vulnerability](https://stackwarpattack.com/)
* [2026-01-16, 07:00:00](https://news.slashdot.org/story/26/01/16/043253/us-carbon-pollution-rose-in-2025-a-reversal-from-prior-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Carbon Pollution Rose In 2025, a Reversal From Prior Years](https://news.slashdot.org/story/26/01/16/043253/us-carbon-pollution-rose-in-2025-a-reversal-from-prior-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 06:52:03](https://news.ycombinator.com/item?id=46643737) - [Building a better Bugbot](https://cursor.com/blog/building-bugbot)
* [2026-01-16, 06:24:49](https://lobste.rs/s/go7hr7/histomat_f_oss_we_should_reclaim_llms_not) - [Histomat of F/OSS: We should reclaim LLMs, not reject them](https://writings.hongminhee.org/2026/01/histomat-foss-llm/)
* [2026-01-16, 05:47:00](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss) - [BreachForum Breach](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss)
* [2026-01-16, 04:13:20](https://lobste.rs/s/ngrqg1/my_projects_2025) - [My Projects in 2025](https://simonhartcher.com/posts/2026-01-16-my-projects-in-2025)
* [2026-01-16, 04:11:17](https://news.ycombinator.com/item?id=46642920) - [Boeing knew of flaw in part linked to UPS plane crash, NTSB report says](https://www.bbc.com/news/articles/cly56w0p9e1o)
* [2026-01-16, 03:30:00](https://tech.slashdot.org/story/26/01/15/2248249/study-finds-weak-evidence-linking-social-media-use-to-teen-mental-health-problems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Finds Weak Evidence Linking Social Media Use to Teen Mental Health Problems](https://tech.slashdot.org/story/26/01/15/2248249/study-finds-weak-evidence-linking-social-media-use-to-teen-mental-health-problems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 03:10:36](https://news.ycombinator.com/item?id=46642560) - [OpenBSD-current now runs as guest under Apple Hypervisor](https://www.undeadly.org/cgi?action=article;sid=20260115203619)
* [2026-01-16, 02:18:18](https://lobste.rs/s/09tygd/quint_visualizer_graphviz_like) - [Quint Visualizer: a GraphViz-like visualizer for Quint traces](https://quint-visualizer.noghartt.dev/)
* [2026-01-16, 02:14:15](https://lobste.rs/s/jqntdm/0_click_exploit_chain_for_pixel_9_part_1) - [A 0-click exploit chain for the Pixel 9, part 1: Decoding Dolby](https://projectzero.google/2026/01/pixel-0-click-part-1.html)
* [2026-01-16, 02:07:44](https://lobste.rs/s/xyiyri/integration_tests_are_best_tests) - [Integration tests are best tests](https://jayconrod.com/posts/133/integration-tests-are-best-tests)
* [2026-01-16, 02:02:00](https://entertainment.slashdot.org/story/26/01/15/2239246/amazon-is-making-a-fallout-shelter-competition-reality-tv-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Is Making a Fallout Shelter Competition Reality TV Show](https://entertainment.slashdot.org/story/26/01/15/2239246/amazon-is-making-a-fallout-shelter-competition-reality-tv-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 01:25:00](https://hardware.slashdot.org/story/26/01/15/2236205/new-york-introduces-legislation-to-crack-down-on-3d-printers-that-make-ghost-guns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New York Introduces Legislation To Crack Down On 3D Printers That Make Ghost Guns](https://hardware.slashdot.org/story/26/01/15/2236205/new-york-introduces-legislation-to-crack-down-on-3d-printers-that-make-ghost-guns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 01:06:00](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss) - [Survey: Even Meta And Microsoft Engineers Ditch Company AI For Claude](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss)
* [2026-01-16, 00:52:26](https://news.ycombinator.com/item?id=46641663) - [Show HN: BGP Scout – BGP Network Browser](https://bgpscout.io/)
* [2026-01-16, 00:45:00](https://tech.slashdot.org/story/26/01/15/2228257/irans-internet-shutdown-is-now-one-of-the-longest-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran&apos;s Internet Shutdown Is Now One of the Longest Ever](https://tech.slashdot.org/story/26/01/15/2228257/irans-internet-shutdown-is-now-one-of-the-longest-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 00:15:53](https://lobste.rs/s/e3xhzq/why_is_zig_so_cool) - [Why is Zig so Cool?](https://nilostolte.github.io/tech/articles/ZigCool.html)
* [2026-01-16, 00:11:28](https://news.ycombinator.com/item?id=46641348) - [My Gripes with Prolog](https://buttondown.com/hillelwayne/archive/my-gripes-with-prolog/)
* [2026-01-16, 00:05:01](https://news.ycombinator.com/item?id=46641284) - [List of individual trees](https://en.wikipedia.org/wiki/List_of_individual_trees)
* [2026-01-16, 00:02:00](https://science.slashdot.org/story/26/01/15/2134216/astronauts-splash-down-to-earth-after-medical-evacuation-from-iss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronauts Splash Down To Earth After Medical Evacuation From ISS](https://science.slashdot.org/story/26/01/15/2134216/astronauts-splash-down-to-earth-after-medical-evacuation-from-iss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 00:01:51](https://lobste.rs/s/esmvsj/http_ratelimit_headers) - [HTTP RateLimit headers](https://dotat.at/@/2026-01-13-http-ratelimit.html)
* [2026-01-15, 23:59:06](https://news.ycombinator.com/item?id=46641239) - [All 23-Bit Still Lifes Are Glider Constructible](https://mvr.github.io/posts/xs23.html)
* [2026-01-15, 23:37:42](https://news.ycombinator.com/item?id=46641042) - [Tldraw pauses external contributions due to AI slop](https://github.com/tldraw/tldraw/issues/7695)
* [2026-01-15, 23:20:00](https://tech.slashdot.org/story/26/01/15/2126254/asus-stops-producing-nvidia-rtx-5070-ti-and-5060-ti-16gb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ASUS Stops Producing Nvidia RTX 5070 Ti and 5060 Ti 16GB](https://tech.slashdot.org/story/26/01/15/2126254/asus-stops-producing-nvidia-rtx-5070-ti-and-5060-ti-16gb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 22:40:00](https://yro.slashdot.org/story/26/01/15/2120216/italys-privacy-watchdog-scourge-of-us-big-tech-hit-by-corruption-probe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Italy&apos;s Privacy Watchdog, Scourge of US Big Tech, Hit By Corruption Probe](https://yro.slashdot.org/story/26/01/15/2120216/italys-privacy-watchdog-scourge-of-us-big-tech-hit-by-corruption-probe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 22:04:48](https://lobste.rs/s/ijrlrq/how_parametrize_exception_testing) - [How to parametrize exception testing in PyTest?](https://borutzki.github.io/2026/01/15/how-to-parametrize-exception-testing-in-pytest.html)
* [2026-01-15, 22:02:00](https://developers.slashdot.org/story/26/01/15/2114210/oracle-trying-to-lure-workers-to-nashville-for-new-global-hq?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oracle Trying To Lure Workers To Nashville For New &apos;Global&apos; HQ](https://developers.slashdot.org/story/26/01/15/2114210/oracle-trying-to-lure-workers-to-nashville-for-new-global-hq?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 21:22:00](https://tech.slashdot.org/story/26/01/15/1859211/boeing-knew-about-flaws-in-ups-plane-that-crashed-in-louisville-ntsb-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boeing Knew About Flaws in UPS Plane That Crashed in Louisville, NTSB Says](https://tech.slashdot.org/story/26/01/15/1859211/boeing-knew-about-flaws-in-ups-plane-that-crashed-in-louisville-ntsb-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 21:00:42](https://news.ycombinator.com/item?id=46639248) - [Aviator (YC S21) is hiring to build multiplayer AI coding platform](https://www.ycombinator.com/companies/aviator/jobs)
* [2026-01-15, 20:45:00](https://it.slashdot.org/story/26/01/15/1849235/raspberry-pis-new-add-on-board-has-8gb-of-ram-for-running-gen-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Raspberry Pi&apos;s New Add-on Board Has 8GB of RAM For Running Gen AI Models](https://it.slashdot.org/story/26/01/15/1849235/raspberry-pis-new-add-on-board-has-8gb-of-ram-for-running-gen-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 20:20:13](https://news.ycombinator.com/item?id=46638629) - [Linux boxes via SSH: suspended when disconected](https://shellbox.dev/)
* [2026-01-15, 20:17:00](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss) - [GNOME Dev Gives Fans of Linux&apos;s Middle-Click Paste the Middle Finger](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss)
* [2026-01-15, 20:02:00](https://news.slashdot.org/story/26/01/15/1846223/why-go-is-going-nowhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Go is Going Nowhere](https://news.slashdot.org/story/26/01/15/1846223/why-go-is-going-nowhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 19:38:02](https://news.ycombinator.com/item?id=46638013) - [Briar keeps Iran connected via Bluetooth and Wi-Fi when the internet goes dark](https://briarproject.org/manual/fa/)
* [2026-01-15, 19:22:00](https://news.slashdot.org/story/26/01/15/1835210/students-increasingly-choosing-community-college-or-certificates-over-four-year-degrees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Students Increasingly Choosing Community College or Certificates Over Four-Year Degrees](https://news.slashdot.org/story/26/01/15/1835210/students-increasingly-choosing-community-college-or-certificates-over-four-year-degrees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 18:54:32](https://news.ycombinator.com/item?id=46637328) - [Data is the only moat](https://frontierai.substack.com/p/data-is-your-only-moat)
* [2026-01-15, 18:48:51](https://lobste.rs/s/wt74cp/reverse_engineering_my_cloud_connected_e) - [Reverse engineering my cloud-connected e-scooter and finding the master key to unlock all scooters](https://blog.nns.ee/2026/01/06/aike-ble/)
* [2026-01-15, 18:45:18](https://news.ycombinator.com/item?id=46637165) - [JuiceFS is a distributed POSIX file system built on top of Redis and S3](https://github.com/juicedata/juicefs)
* [2026-01-15, 18:41:00](https://news.slashdot.org/story/26/01/15/1754223/microsoft-is-closing-its-employee-library-and-cutting-back-on-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is Closing Its Employee Library and Cutting Back on Subscriptions](https://news.slashdot.org/story/26/01/15/1754223/microsoft-is-closing-its-employee-library-and-cutting-back-on-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 18:02:00](https://science.slashdot.org/story/26/01/15/1717234/many-people-who-come-off-glp-1-drugs-regain-weight-within-2-years-review-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Many People Who Come Off GLP-1 Drugs Regain Weight Within 2 Years, Review Suggests](https://science.slashdot.org/story/26/01/15/1717234/many-people-who-come-off-glp-1-drugs-regain-weight-within-2-years-review-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 17:51:24](https://news.ycombinator.com/item?id=46636387) - [CVEs affecting the Svelte ecosystem](https://svelte.dev/blog/cves-affecting-the-svelte-ecosystem)
* [2026-01-15, 16:49:13](https://news.ycombinator.com/item?id=46635345) - [Ask HN: How can we solve the loneliness epidemic?](https://news.ycombinator.com/item?id=46635345)
* [2026-01-15, 15:49:33](https://lobste.rs/s/aijblh/new_social_web_working_group_at_w3c) - [New Social Web Working Group at W3C](https://socialwebfoundation.org/2026/01/15/new-social-web-working-group-at-w3c/)
* [2026-01-15, 15:31:00](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss) - [Cray Customer Service – Memories (1979 to 2014) by Charles Clark](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss)
* [2026-01-15, 15:16:58](https://lobste.rs/s/2sl7bs/going_immutable_on_macos) - [Going immutable on macOS](https://carette.xyz/posts/going_immutable_macos/)
* [2026-01-15, 15:02:42](https://news.ycombinator.com/item?id=46633488) - [Apple is fighting for TSMC capacity as Nvidia takes center stage](https://www.culpium.com/p/exclusiveapple-is-fighting-for-tsmc)
* [2026-01-15, 14:10:40](https://lobste.rs/s/ahdtzt/forgejo_v14_0_is_available) - [Forgejo v14.0 is available](https://forgejo.org/2026-01-release-v14-0/)
* [2026-01-15, 13:44:44](https://lobste.rs/s/kgu8if/those_who_fired_didn_t_hire_tech_writers) - [To those who fired or didn&apos;t hire tech writers because of AI](https://passo.uno/letter-those-who-fired-tech-writers-ai/)
* [2026-01-15, 13:26:20](https://lobste.rs/s/xe6dnb/iterative_image_reconstruction_using) - [iterative image reconstruction using random cubic bézier strokes](https://tangled.org/luthenwald.tngl.sh/splined)
* [2026-01-15, 13:11:39](https://lobste.rs/s/1atb7q/i_m_captain_now_hijacking_global_ocean) - [I’m The Captain Now: Hijacking a global ocean supply chain network](https://eaton-works.com/2026/01/14/bluspark-bluvoyix-hack/)
* [2026-01-15, 12:27:40](https://lobste.rs/s/pddded/why_senior_engineers_let_bad_projects) - [Why Senior Engineers Let Bad Projects Fail](https://lalitm.com/post/why-senior-engineers-let-bad-projects-fail/)
* [2026-01-15, 11:44:04](https://lobste.rs/s/fbkls4/people_who_built_wikipedia_technically) - [The people who built Wikipedia, technically (2021)](https://en.wikipedia.org/wiki/Wikipedia:Wikipedia_Signpost/2021-01-31/Technology_report)
* [2026-01-15, 10:59:32](https://lobste.rs/s/isnir7/mysql_vs_postgresql_performance) - [MySQL vs PostgreSQL Performance: throughput &amp; latency, reads &amp; writes](https://binaryigor.com/mysql-vs-postgresql-performance.html)
* [2026-01-15, 10:50:00](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss) - [A Fix for Frost: Engineers Use Electricity to Zap Ice Without Heat or Chemicals](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss)
* [2026-01-15, 09:15:51](https://lobste.rs/s/whv98g/codeless_code_fables_koans_for_software) - [Codeless Code - Fables &amp; Koans for the Software Engineer](https://thecodelesscode.com)
* [2026-01-15, 08:38:27](https://lobste.rs/s/hshaq4/alternatives_minio_for_single_node_local) - [Alternatives to MinIO for single-node local S3](https://rmoff.net/2026/01/14/alternatives-to-minio-for-single-node-local-s3/)
* [2026-01-15, 08:10:06](https://lobste.rs/s/r7rdk7/lobsters_battlestations_screenshots) - [Lobsters Battlestations and Screenshots (2026)](https://lobste.rs/s/r7rdk7/lobsters_battlestations_screenshots)
* [2026-01-15, 06:12:00](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss) - [Resuscitating a 1934 Briggs &amp; Stratton Washing Machine Engine](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss)
* [2026-01-15, 05:14:08](https://news.ycombinator.com/item?id=46628329) - [Pocket TTS: A high quality TTS that gives your CPU a voice](https://kyutai.org/blog/2026-01-13-pocket-tts)
* [2026-01-15, 02:48:00](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss) - [RIP - &apos;Dilbert&apos; Creator Scott Adams Dies at 68 After Prostate Cancer Battle](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss)
* [2026-01-15, 01:25:00](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss) - [The AIdigest.org&apos;s AI Village](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss)
* [2026-01-14, 20:52:21](https://lobste.rs/s/xa4ndh/selfci_minimalistic_local_first_unix) - [SelfCI - a minimalistic local-first Unix-philosophy-abiding CI](https://app.radicle.xyz/nodes/radicle.dpc.pw/rad:z2tDzYbAXxTQEKTGFVwiJPajkbeDU)
* [2026-01-14, 20:33:00](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss) - [Tech Bloggers Switching From Windows to Linux](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss)
* [2026-01-14, 16:26:11](https://news.ycombinator.com/item?id=46618042) - [Claude is good at assembling blocks, but still falls apart at creating them](https://www.approachwithalacrity.com/claude-ne/)
* [2026-01-14, 15:49:00](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss) - [China Expected to Approve H200 Imports in Early 2026, Report Claims](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss)
* [2026-01-14, 11:06:00](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss) - [Some Dogs Eavesdrop on Their Owners to Learn New Words](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss)
* [2026-01-14, 07:26:52](https://news.ycombinator.com/item?id=46613324) - [Inside The Internet Archive&apos;s Infrastructure](https://hackernoon.com/the-long-now-of-the-web-inside-the-internet-archives-fight-against-forgetting)
* [2026-01-14, 06:24:00](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss) - [An Ultra-Fast Quantum Tunneling Device for the 6G Terahertz Era](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss)
* [2026-01-14, 06:14:26](https://news.ycombinator.com/item?id=46612919) - [First impressions of Claude Cowork](https://simonw.substack.com/p/first-impressions-of-claude-cowork)
* [2026-01-14, 05:38:08](https://news.ycombinator.com/item?id=46612727) - [Bringing the Predators to Life in MAME](https://lysiwyg.mataroa.blog/blog/bringing-the-predators-to-life-in-mame/)
* [2026-01-14, 04:55:04](https://news.ycombinator.com/item?id=46612494) - [Show HN: OpenWork – An open-source alternative to Claude Cowork](https://github.com/different-ai/openwork)
* [2026-01-14, 01:41:00](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss) - [Volkswagen is Bringing Physical Buttons Back to the Dashboard With the Polo EV](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss)
* [2026-01-13, 20:52:00](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss) - [A Sit-Stand Ratio ‘Sweet Spot’ May Boost Office Productivity](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss)
* [2026-01-13, 18:43:13](https://news.ycombinator.com/item?id=46605671) - [Show HN: Timberlogs – Drop-in structured logging for TypeScript](https://news.ycombinator.com/item?id=46605671)
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
