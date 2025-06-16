# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements in Technology and Science

* [Buried Under 2 Kilometers of Antarctic Ice, Scientists Find a 34-Million-Year-Old Lost World](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss) - [Comments](https://news.ycombinator.com/item?id=44288943)

* [Photonic Processor Could Streamline 6G Wireless Signal Processing](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss) - [Comments](https://news.ycombinator.com/item?id=44288912)

* [Real-time CO2 monitoring without batteries or external power](https://news.kaist.ac.kr/newsen/html/news/?mode=V&amp;mng_no=47450) - [Comments](https://news.ycombinator.com/item?id=44285634)

## Innovations in AI and Computing

* [Meta&apos;s Llama 3.1 Can Recall 42% of the First Harry Potter Book](https://slashdot.org/story/25/06/15/2230206/metas-llama-31-can-recall-42-of-the-first-harry-potter-book) - [Comments](https://news.ycombinator.com/item?id=44285392)

* [Is Gravity Just Entropy Rising? Long-Shot Idea Gets Another Look](https://www.quantamagazine.org/is-gravity-just-entropy-rising-long-shot-idea-gets-another-look-20250613/) - [Comments](https://news.ycombinator.com/item?id=44285874)

* [RGSQL: A test suite to help you build your own database engine](https://technicaldeft.com/posts/rgsql-a-test-suite-for-database-engines) - [Comments](https://news.ycombinator.com/item?id=44285749)

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

* [2025-06-16, 12:00:18](https://news.ycombinator.com/item?id=44288748) - [Infracost (YC W21) is hiring software engineers (GMT+2 to GMT-6)](https://infracost.io/join-the-team)
* [2025-06-16, 11:40:54](https://news.ycombinator.com/item?id=44288643) - [Show HN: Socket-call – Call socket.io events like normal JavaScript functions](https://github.com/bperel/socket-call)
* [2025-06-16, 11:34:00](https://tech.slashdot.org/story/25/06/16/0537255/walmarts-drone-deliveries-expand-now-in-five-different-us-states?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart&apos;s Drone Deliveries Expand, Now in Five Different US States](https://tech.slashdot.org/story/25/06/16/0537255/walmarts-drone-deliveries-expand-now-in-five-different-us-states?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 10:25:00](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss) - [Buried Under 2 Kilometers of Antarctic Ice, Scientists Find a 34-Million-Year-Old Lost World](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss)
* [2025-06-16, 10:13:51](https://lobste.rs/s/pobirg/changes_kubernetes_slack) - [Changes to Kubernetes Slack](https://www.kubernetes.dev/blog/2025/06/16/changes-to-kubernetes-slack-2025/)
* [2025-06-16, 10:12:49](https://lobste.rs/s/k7nyyu/rgsql_test_suite_help_you_build_your_own) - [rgSQL: A test suite to help you build your own database engine](https://technicaldeft.com/posts/rgsql-a-test-suite-for-database-engines)
* [2025-06-16, 10:08:37](https://lobste.rs/s/zvukta/debugging_tricks_for_intellij) - [Debugging tricks for IntelliJ](https://andreabergia.com/blog/2025/06/debugging-tricks-for-intellij/)
* [2025-06-16, 10:04:40](https://lobste.rs/s/joykng/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/joykng/what_are_you_doing_this_week)
* [2025-06-16, 08:54:44](https://lobste.rs/s/r9tamc/architectural_approach) - [An Architectural Approach to Decentralization](https://www.infocentral.org/)
* [2025-06-16, 08:14:20](https://lobste.rs/s/jxnovw/css_classes_considered_harmful) - [CSS Classes considered harmful](https://www.keithcirkel.co.uk/css-classes-considered-harmful/)
* [2025-06-16, 07:44:00](https://tech.slashdot.org/story/25/06/16/068252/libreoffice-explains-real-costs-of-upgrading-to-microsofts-windows-11-urges-taking-control-with-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LibreOffice Explains &apos;Real Costs&apos; of Upgrading to Microsoft&apos;s Windows 11, Urges Taking Control with Linux ](https://tech.slashdot.org/story/25/06/16/068252/libreoffice-explains-real-costs-of-upgrading-to-microsofts-windows-11-urges-taking-control-with-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 07:38:17](https://news.ycombinator.com/item?id=44287395) - [Start your own Internet Resiliency Club](https://bowshock.nl/irc/)
* [2025-06-16, 07:35:31](https://lobste.rs/s/xsmnaz/start_your_own_internet_resiliency_club) - [Start your own Internet Resiliency Club](https://bowshock.nl/irc/)
* [2025-06-16, 06:14:56](https://news.ycombinator.com/item?id=44287043) - [Nanonets-OCR-s – OCR model that transforms documents into structured markdown](https://huggingface.co/nanonets/Nanonets-OCR-s)
* [2025-06-16, 05:41:00](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss) - [Photonic Processor Could Streamline 6G Wireless Signal Processing](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss)
* [2025-06-16, 04:54:00](https://news.slashdot.org/story/25/06/16/0451226/fake-bands-and-artificial-songs-are-taking-over-youtube-and-spotify?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fake Bands and Artificial Songs are Taking Over YouTube and Spotify](https://news.slashdot.org/story/25/06/16/0451226/fake-bands-and-artificial-songs-are-taking-over-youtube-and-spotify?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 02:01:50](https://news.ycombinator.com/item?id=44286134) - [The Hewlett-Packard Archive](https://hparchive.com)
* [2025-06-16, 01:34:00](https://it.slashdot.org/story/25/06/16/0047207/amazons-return-to-office-mandate-sparks-complaints-from-disabled-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Return-to-Office Mandate Sparks Complaints from Disabled Employees](https://it.slashdot.org/story/25/06/16/0047207/amazons-return-to-office-mandate-sparks-complaints-from-disabled-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 00:58:00](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss) - [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss)
* [2025-06-16, 00:54:19](https://lobste.rs/s/ijyyt9/devtui_swiss_army_app_for_developers) - [DevTUI - A Swiss-army app for developers](https://devtui.com)
* [2025-06-16, 00:36:41](https://news.ycombinator.com/item?id=44285874) - [Is Gravity Just Entropy Rising? Long-Shot Idea Gets Another Look](https://www.quantamagazine.org/is-gravity-just-entropy-rising-long-shot-idea-gets-another-look-20250613/)
* [2025-06-16, 00:14:55](https://news.ycombinator.com/item?id=44285781) - [Jokes and Humour in the Public Android API](https://voxelmanip.se/2025/06/14/jokes-and-humour-in-the-public-android-api/)
* [2025-06-16, 00:12:02](https://lobste.rs/s/llzfuy/jokes_humour_public_android_api) - [Jokes and Humour in the public Android API](https://voxelmanip.se/2025/06/14/jokes-and-humour-in-the-public-android-api/)
* [2025-06-15, 23:39:03](https://lobste.rs/s/s6fvfd/building_software_on_top_large_language) - [Building software on top of Large Language Models](https://simonwillison.net/2025/May/15/building-on-llms/)
* [2025-06-15, 23:38:00](https://tech.slashdot.org/story/25/06/15/2336200/mitsubishi-launches-ev-battery-swap-network-in-tokyo---for-both-cars-and-trucks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mitsubishi Launches EV Battery Swap Network in Tokyo - for Both Cars and Trucks](https://tech.slashdot.org/story/25/06/15/2336200/mitsubishi-launches-ev-battery-swap-network-in-tokyo---for-both-cars-and-trucks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 23:01:38](https://news.ycombinator.com/item?id=44285521) - [Reinventing circuit breakers with supercritical CO2](https://spectrum.ieee.org/sf6-gas-replacement)
* [2025-06-15, 22:40:40](https://news.ycombinator.com/item?id=44285440) - [DARPA program sets distance record for power beaming](https://www.darpa.mil/news/2025/darpa-program-distance-record-power-beaming)
* [2025-06-15, 22:32:00](https://slashdot.org/story/25/06/15/2230206/metas-llama-31-can-recall-42-of-the-first-harry-potter-book?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s Llama 3.1 Can Recall 42% of the First Harry Potter Book](https://slashdot.org/story/25/06/15/2230206/metas-llama-31-can-recall-42-of-the-first-harry-potter-book?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 22:29:34](https://news.ycombinator.com/item?id=44285392) - [Real-time CO2 monitoring without batteries or external power](https://news.kaist.ac.kr/newsen/html/news/?mode=V&amp;mng_no=47450)
* [2025-06-15, 21:29:00](https://apple.slashdot.org/story/25/06/15/2126220/apple-migrates-its-password-monitoring-service-to-swift-from-java-gains-40-performance-uplift?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Migrates Its Password Monitoring Service to Swift from Java, Gains 40% Performance Uplift](https://apple.slashdot.org/story/25/06/15/2126220/apple-migrates-its-password-monitoring-service-to-swift-from-java-gains-40-performance-uplift?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 21:00:59](https://lobste.rs/s/3rujno/datalog_minikanren) - [Datalog in Minikanren](https://deosjr.github.io/dynamicland/datalog.html)
* [2025-06-15, 20:49:18](https://news.ycombinator.com/item?id=44284871) - [Show HN: Zeekstd – Rust Implementation of the ZSTD Seekable Format](https://github.com/rorosen/zeekstd)
* [2025-06-15, 20:12:00](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss) - [Nematode Tower Power](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss)
* [2025-06-15, 20:10:00](https://news.slashdot.org/story/25/06/15/207237/could-this-city-be-the-model-for-how-to-tackle-the-both-the-climate-and-housing-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could This City Be the Model for How to Tackle the Both the Climate and Housing Crisis?](https://news.slashdot.org/story/25/06/15/207237/could-this-city-be-the-model-for-how-to-tackle-the-both-the-climate-and-housing-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 20:07:27](https://news.ycombinator.com/item?id=44284657) - [Twin – A Textmode WINdow Environment](https://github.com/cosmos72/twin)
* [2025-06-15, 19:52:44](https://lobste.rs/s/qaqvjx/how_fast_can_rpython_gc_allocate) - [How fast can the RPython GC allocate?](https://pypy.org/posts/2025/06/rpython-gc-allocation-speed.html)
* [2025-06-15, 19:37:18](https://lobste.rs/s/ogh0zp/breaking_down_echoleak_first_zero_click) - [Breaking down ‘EchoLeak’, the First Zero-Click AI Vulnerability Enabling Data Exfiltration from Microsoft 365 Copilot](https://www.aim.security/lp/aim-labs-echoleak-blogpost)
* [2025-06-15, 19:33:43](https://news.ycombinator.com/item?id=44284466) - [Telephone Exchanges in the UK](https://telephone-exchanges.org.uk/)
* [2025-06-15, 19:28:26](https://lobste.rs/s/0j5y9e/quick_takes_on_gcp_public_incident_write) - [Quick takes on the GCP public incident write-up](https://surfingcomplexity.blog/2025/06/14/quick-takes-on-the-gcp-public-incident-write-up/)
* [2025-06-15, 19:00:04](https://lobste.rs/s/d3rzjl/writing_toy_software_is_joy) - [Writing Toy Software Is A Joy](https://www.jsbarretto.com/blog/software-is-joy/)
* [2025-06-15, 18:46:19](https://lobste.rs/s/ww7kp7/elixir_pipe_operator) - [The Elixir Pipe Operator](https://dev.to/adolfont/the-elixir-pipe-operator-38fa)
* [2025-06-15, 18:20:00](https://slashdot.org/story/25/06/15/1817236/facial-recognition-error-sees-woman-wrongly-accused-of-theft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facial Recognition Error Sees Woman Wrongly Accused of Theft](https://slashdot.org/story/25/06/15/1817236/facial-recognition-error-sees-woman-wrongly-accused-of-theft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 18:17:48](https://lobste.rs/s/iy730l/modifying_hdmi_dummy_plug_s_edid_using) - [Modifying an HDMI dummy plug’s EDID using a Raspberry Pi](https://www.downtowndougbrown.com/2025/06/modifying-an-hdmi-dummy-plugs-edid-using-a-raspberry-pi/)
* [2025-06-15, 17:26:38](https://news.ycombinator.com/item?id=44283614) - [Simplest C++ Callback, from SumatraPDF](https://blog.kowalczyk.info/a-stsj/simplest-c-callback-from-sumatrapdf.html)
* [2025-06-15, 17:26:28](https://lobste.rs/s/rqthj0/simplest_c_callback_from_sumatrapdf) - [Simplest C++ callback, from SumatraPDF](https://blog.kowalczyk.info/a-stsj/simplest-c-callback-from-sumatrapdf.html)
* [2025-06-15, 16:44:48](https://lobste.rs/s/os8uyh/1x_forth_1999) - [1x Forth (1999)](https://www.ultratechnology.com/1xforth.htm)
* [2025-06-15, 16:34:00](https://news.slashdot.org/story/25/06/15/046216/new-york-state-begins-asking-employers-to-offically-identify-layoffs-caused-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New York State Begins Asking Employers to Offically Identify Layoffs Caused by AI](https://news.slashdot.org/story/25/06/15/046216/new-york-state-begins-asking-employers-to-offically-identify-layoffs-caused-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 16:16:08](https://news.ycombinator.com/item?id=44283093) - [Datalog in miniKanren](https://deosjr.github.io/dynamicland/datalog.html)
* [2025-06-15, 16:00:43](https://news.ycombinator.com/item?id=44282998) - [Modifying an HDMI dummy plug&apos;s EDID using a Raspberry Pi](https://www.downtowndougbrown.com/2025/06/modifying-an-hdmi-dummy-plugs-edid-using-a-raspberry-pi/)
* [2025-06-15, 15:34:00](https://tech.slashdot.org/story/25/06/15/0148202/17-year-old-student-builds-3d-printed-drone-in-garage-interests-dod-and-mit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [17-Year-Old Student Builds 3D-printed Drone In Garage, Interests DoD and MIT](https://tech.slashdot.org/story/25/06/15/0148202/17-year-old-student-builds-3d-printed-drone-in-garage-interests-dod-and-mit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 15:26:00](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss) - [\&quot;Impossible\&quot; Particle That Hit Earth May Have Been Dark Matter](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss)
* [2025-06-15, 14:59:09](https://lobste.rs/s/hhhvbw/sqlite_vfs_for_remote_databases_via_grpc) - [A SQLite VFS for remote databases via gRPC](https://github.com/danthegoodman1/gRPSQLite)
* [2025-06-15, 14:34:00](https://news.slashdot.org/story/25/06/15/0323209/site-for-accelerating-ai-use-across-the-us-government-accidentally-leaked-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Site for &apos;Accelerating&apos; AI Use Across the US Government Accidentally Leaked on GitHub](https://news.slashdot.org/story/25/06/15/0323209/site-for-accelerating-ai-use-across-the-us-government-accidentally-leaked-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 14:10:37](https://news.ycombinator.com/item?id=44282378) - [Why SSL was renamed to TLS in late 90s (2014)](https://tim.dierks.org/2014/05/security-standards-and-name-changes-in.html)
* [2025-06-15, 14:08:45](https://lobste.rs/s/dygkfr/why_ssl_was_renamed_tls_late_90s_2014) - [Why SSL was renamed to TLS in late 90s (2014)](https://tim.dierks.org/2014/05/security-standards-and-name-changes-in.html)
* [2025-06-15, 13:12:42](https://news.ycombinator.com/item?id=44282143) - [Childhood leukemia: how a deadly cancer became treatable](https://ourworldindata.org/childhood-leukemia-treatment-history)
* [2025-06-15, 12:40:07](https://news.ycombinator.com/item?id=44282017) - [How to modify Starlink Mini to run without the built-in WiFi router](https://olegkutkov.me/2025/06/15/how-to-modify-starlink-mini-to-run-without-the-built-in-wifi-router/)
* [2025-06-15, 11:34:00](https://slashdot.org/story/25/06/14/1648202/do-people-actually-want-smart-glasses-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do People Actually Want Smart Glasses Now?](https://slashdot.org/story/25/06/14/1648202/do-people-actually-want-smart-glasses-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 11:18:40](https://news.ycombinator.com/item?id=44281727) - [Datalog in Rust](https://github.com/frankmcsherry/blog/blob/master/posts/2025-06-03.md)
* [2025-06-15, 10:41:00](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss) - [RIP: Bill Atkinson, Co-Creator Of Apple Lisa And Mac](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss)
* [2025-06-15, 10:27:40](https://lobste.rs/s/bvyeh9/breaking_my_security_assignments) - [Breaking my Security Assignments](https://www.akpain.net/blog/breaking-secnet-assignments/)
* [2025-06-15, 10:11:41](https://news.ycombinator.com/item?id=44281506) - [Foundations of Computer Vision (2024)](https://visionbook.mit.edu)
* [2025-06-15, 07:34:00](https://science.slashdot.org/story/25/06/15/053254/space-is-the-perfect-place-to-study-cancer-and-someday-even-treat-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Space is the Perfect Place to Study Cancer and Someday Even Treat It](https://science.slashdot.org/story/25/06/15/053254/space-is-the-perfect-place-to-study-cancer-and-someday-even-treat-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 07:05:12](https://lobste.rs/s/ui5omv/art_lisp_writing) - [The Art of Lisp &amp; Writing](https://www.dreamsongs.com/ArtOfLisp.html)
* [2025-06-15, 05:57:00](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss) - [Navy Backs Right to Repair After $13B Carrier Goes Half-Fed](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss)
* [2025-06-15, 03:49:00](https://news.slashdot.org/story/25/06/15/0115241/executives-from-meta-openai-and-palantir-commissioned-into-the-us-army-reserve?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Executives from Meta, OpenAI, and Palantir Commissioned Into the US Army Reserve](https://news.slashdot.org/story/25/06/15/0115241/executives-from-meta-openai-and-palantir-commissioned-into-the-us-army-reserve?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 01:13:00](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss) - [Stay Hungry,  Stay Foolish ... 20 Years on](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss)
* [2025-06-14, 20:27:00](https://soylentnews.org/article.pl?sid=25/06/14/1315217&amp;from=rss) - [Jupiter Takes Europe&apos;s HPC Crown in 793Pf Top500 Run](https://soylentnews.org/article.pl?sid=25/06/14/1315217&amp;from=rss)
* [2025-06-14, 18:27:31](https://lobste.rs/s/s7katz/mosh_mobile_shell) - [Mosh: the mobile shell](https://mosh.org)
* [2025-06-14, 16:36:55](https://lobste.rs/s/9e8spk/todo_txt_tasks_my_trmnl) - [todo.txt tasks in my TRMNL](https://akselmo.dev/posts/todotxt-in-my-trmnl/)
* [2025-06-14, 15:42:00](https://soylentnews.org/article.pl?sid=25/06/13/1243246&amp;from=rss) - [Toyota Math: 9 Million EVs Are Just as Polluting as 27 Million Hybrids](https://soylentnews.org/article.pl?sid=25/06/13/1243246&amp;from=rss)
* [2025-06-14, 12:09:51](https://news.ycombinator.com/item?id=44275900) - [Solving LinkedIn Queens with APL](https://pitr.ca/2025-06-14-queens)
* [2025-06-14, 11:23:55](https://news.ycombinator.com/item?id=44275679) - [Lisp-stat: Lisp environment for statistical computing](https://lisp-stat.dev/about/)
* [2025-06-14, 10:57:00](https://soylentnews.org/article.pl?sid=25/06/13/0159230&amp;from=rss) - [Climate Change Is Coming For Your Cheese](https://soylentnews.org/article.pl?sid=25/06/13/0159230&amp;from=rss)
* [2025-06-14, 10:22:06](https://news.ycombinator.com/item?id=44275471) - [Chemical knowledge and reasoning of large language models vs. chemist expertise](https://www.nature.com/articles/s41557-025-01815-x)
* [2025-06-14, 08:48:25](https://news.ycombinator.com/item?id=44275134) - [Maya Blue: Unlocking the Mysteries of an Ancient Pigment](https://www.mexicolore.co.uk/maya/home/maya-blue-unlocking-the-mysteries-of-an-ancient-pigment)
* [2025-06-14, 06:19:00](https://news.ycombinator.com/item?id=44274582) - [The long afterlife of a literary classic](https://thecritic.co.uk/the-long-afterlife-of-a-literary-classic/)
* [2025-06-14, 06:12:00](https://soylentnews.org/article.pl?sid=25/06/13/0152245&amp;from=rss) - [Mistral Releases a Vibe Coding Client, Mistral Code](https://soylentnews.org/article.pl?sid=25/06/13/0152245&amp;from=rss)
* [2025-06-14, 04:43:12](https://news.ycombinator.com/item?id=44274237) - [LLM Chat via SSH](https://github.com/ccbikai/ssh-ai-chat)
* [2025-06-14, 01:25:00](https://soylentnews.org/article.pl?sid=25/06/13/0146252&amp;from=rss) - [Vital Chipmaking Software Access Restored to China After High-Level Call Between Trump/Xi Jinping](https://soylentnews.org/article.pl?sid=25/06/13/0146252&amp;from=rss)
* [2025-06-13, 20:41:00](https://soylentnews.org/article.pl?sid=25/06/13/0143245&amp;from=rss) - [The Federal Government in the Age of Artificial Intelligence](https://soylentnews.org/article.pl?sid=25/06/13/0143245&amp;from=rss)
* [2025-06-13, 15:58:00](https://soylentnews.org/article.pl?sid=25/06/13/0135229&amp;from=rss) - [Starlink Shut Down on United Regional Jets - Reports of Radio Interference on Embraer E175](https://soylentnews.org/article.pl?sid=25/06/13/0135229&amp;from=rss)
* [2025-06-13, 11:13:00](https://soylentnews.org/article.pl?sid=25/06/13/0124202&amp;from=rss) - [Google Brute-Force Attack Exposes Phone Numbers in Minutes](https://soylentnews.org/article.pl?sid=25/06/13/0124202&amp;from=rss)
* [2025-06-13, 06:29:00](https://soylentnews.org/article.pl?sid=25/06/12/159242&amp;from=rss) - [1.5Tb of James Webb Space Telescope Data Dumped On The Internet - New Searchable Database](https://soylentnews.org/article.pl?sid=25/06/12/159242&amp;from=rss)
* [2025-06-13, 01:43:00](https://soylentnews.org/article.pl?sid=25/06/12/075226&amp;from=rss) - [Making Hydrogen With Soda Cans and Seawater](https://soylentnews.org/article.pl?sid=25/06/12/075226&amp;from=rss)
* [2025-06-12, 21:01:00](https://soylentnews.org/article.pl?sid=25/06/11/1726256&amp;from=rss) - [ChessGPT \&quot;Wrecked\&quot; by Atari 2600](https://soylentnews.org/article.pl?sid=25/06/11/1726256&amp;from=rss)
* [2025-06-12, 18:26:43](https://news.ycombinator.com/item?id=44261118) - [First 2D, non-silicon computer developed](https://www.psu.edu/news/research/story/worlds-first-2d-non-silicon-computer-developed)
* [2025-06-12, 16:16:00](https://soylentnews.org/article.pl?sid=25/06/11/1627232&amp;from=rss) - [Cyberattack Cripples North America&apos;s Largest Grocery Distributor, Threatening Supply Chain](https://soylentnews.org/article.pl?sid=25/06/11/1627232&amp;from=rss)
* [2025-06-12, 16:00:19](https://news.ycombinator.com/item?id=44259238) - [Hyperspectral scans of historical pigments and painting reconstructions](https://github.com/rubenwiersma/painting_tools)
* [2025-06-12, 13:13:39](https://news.ycombinator.com/item?id=44257422) - [Fields where Native Americans farmed a thousand years ago discovered in Michigan](https://www.smithsonianmag.com/smart-news/massive-field-where-native-american-farmers-grew-corn-beans-and-squash-1000-years-ago-discovered-in-michigan-180986758/)
* [2025-06-12, 11:31:00](https://soylentnews.org/article.pl?sid=25/06/10/2233256&amp;from=rss) - [Dolphin LLM](https://soylentnews.org/article.pl?sid=25/06/10/2233256&amp;from=rss)
* [2025-06-12, 06:45:00](https://soylentnews.org/article.pl?sid=25/06/11/0156201&amp;from=rss) - [The Xerox Alto, Smalltalk, and Rewriting a Running GUI](https://soylentnews.org/article.pl?sid=25/06/11/0156201&amp;from=rss)
* [2025-06-12, 01:56:00](https://soylentnews.org/article.pl?sid=25/06/11/0154240&amp;from=rss) - [The Bethesda Declaration](https://soylentnews.org/article.pl?sid=25/06/11/0154240&amp;from=rss)
