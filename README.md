# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Language Models

* [Meta's Llama 3.1 can recall 42 percent of the first Harry Potter book](https://www.understandingai.org/p/metas-llama-31-can-recall-42-percent) ([comments](https://news.ycombinator.com/item?id=44286078))

* [Building software on top of Large Language Models](https://simonwillison.net/2025/May/15/building-on-llms/) ([comments](https://lobste.rs/s/s6fvfd/building_software_on_top_large_language))

* [New York State Begins Asking Employers to Officially Identify Layoffs Caused by AI](https://news.slashdot.org/story/25/06/15/046216/new-york-state-begins-asking-employers-to-offically-identify-layoffs-caused-by-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44283093))

## Technological Innovations

* [Mitsubishi Launches EV Battery Swap Network in Tokyo - for Both Cars and Trucks](https://tech.slashdot.org/story/25/06/15/2336200/mitsubishi-launches-ev-battery-swap-network-in-tokyo---for-both-cars-and-trucks?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44285521))

* [A new high-voltage breaker can clear grid-scale faults without greenhouse gas](https://spectrum.ieee.org/sf6-gas-replacement) ([comments](https://news.ycombinator.com/item?id=44285521))

* [DARPA program sets distance record for power beaming](https://www.darpa.mil/news/2025/darpa-program-distance-record-power-beaming) ([comments](https://news.ycombinator.com/item?id=44285440))

## Security and Privacy Concerns

* [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&from=rss) ([comments](https://news.ycombinator.com/item?id=44286078))

* [Breaking down 'EchoLeak', the First Zero-Click AI Vulnerability Enabling Data Exfiltration from Microsoft 365 Copilot](https://www.aim.security/lp/aim-labs-echoleak-blogpost) ([comments](https://lobste.rs/s/ogh0zp/breaking_down_echoleak_first_zero_click))

## Programming and Software Development

* [DevTUI - A Swiss-army app for developers](https://devtui.com) ([comments](https://lobste.rs/s/ijyyt9/devtui_swiss_army_app_for_developers))

* [Simplest C++ Callback, from SumatraPDF](https://blog.kowalczyk.info/a-stsj/simplest-c-callback-from-sumatrapdf.html) ([comments](https://lobste.rs/s/rqthj0/simplest_c_callback_from_sumatrapdf))

* [The Elixir Pipe Operator](https://dev.to/adolfont/the-elixir-pipe-operator-38fa) ([comments](https://lobste.rs/s/ww7kp7/elixir_pipe_operator))

## Curious Historical and Cultural Insights

* [An Introduction to the Hieroglyphic Language of Early 1900s Train-Hoppers](https://www.openculture.com/2018/08/hobo-code-introduction-hieroglyphic-language-early-1900s-train-hoppers.html) ([comments](https://news.ycombinator.com/item?id=44284594))

* [It’s nearly impossible to buy an original Bob Ross painting (2021)](https://thehustle.co/why-its-nearly-impossible-to-buy-an-original-bob-ross-painting) ([comments](https://news.ycombinator.com/item?id=44284723))

* [David Attenborough at 99: 'I will not see how the story ends'](https://www.thetimes.com/life-style/celebrity/article/david-attenborough-book-extract-age-99-lj3rd2fg7) ([comments](https://news.ycombinator.com/item?id=44285054))

## Scientific Discoveries and Space Exploration

* [Cyborg Embryos Offer New Insights into Brain Growth](https://spectrum.ieee.org/embryo-electrode-array) ([comments](https://news.ycombinator.com/item?id=44255867))

* [First 2D, non-silicon computer developed](https://www.psu.edu/news/research/story/worlds-first-2d-non-silicon-computer-developed) ([comments](https://news.ycombinator.com/item?id=44261118))

* [1.5Tb of James Webb Space Telescope Data Dumped On The Internet - New Searchable Database](https://soylentnews.org/article.pl?sid=25/06/12/159242&from=rss) ([comments](https://news.ycombinator.com/item?id=44255867))

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

* [2025-06-16, 01:44:58](https://news.ycombinator.com/item?id=44286078) - [Meta&apos;s Llama 3.1 can recall 42 percent of the first Harry Potter book](https://www.understandingai.org/p/metas-llama-31-can-recall-42-percent)
* [2025-06-16, 01:34:00](https://it.slashdot.org/story/25/06/16/0047207/amazons-return-to-office-mandate-sparks-complaints-from-disabled-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Return-to-Office Mandate Sparks Complaints from Disabled Employees](https://it.slashdot.org/story/25/06/16/0047207/amazons-return-to-office-mandate-sparks-complaints-from-disabled-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 00:58:00](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss) - [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss)
* [2025-06-16, 00:54:19](https://lobste.rs/s/ijyyt9/devtui_swiss_army_app_for_developers) - [DevTUI - A Swiss-army app for developers](https://devtui.com)
* [2025-06-16, 00:12:02](https://lobste.rs/s/llzfuy/jokes_humour_public_android_api) - [Jokes and Humour in the public Android API](https://voxelmanip.se/2025/06/14/jokes-and-humour-in-the-public-android-api/)
* [2025-06-15, 23:39:03](https://lobste.rs/s/s6fvfd/building_software_on_top_large_language) - [Building software on top of Large Language Models](https://simonwillison.net/2025/May/15/building-on-llms/)
* [2025-06-15, 23:38:00](https://tech.slashdot.org/story/25/06/15/2336200/mitsubishi-launches-ev-battery-swap-network-in-tokyo---for-both-cars-and-trucks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mitsubishi Launches EV Battery Swap Network in Tokyo - for Both Cars and Trucks](https://tech.slashdot.org/story/25/06/15/2336200/mitsubishi-launches-ev-battery-swap-network-in-tokyo---for-both-cars-and-trucks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 23:01:38](https://news.ycombinator.com/item?id=44285521) - [A new high-voltage breaker can clear grid-scale faults without greenhouse gas](https://spectrum.ieee.org/sf6-gas-replacement)
* [2025-06-15, 22:40:40](https://news.ycombinator.com/item?id=44285440) - [DARPA program sets distance record for power beaming](https://www.darpa.mil/news/2025/darpa-program-distance-record-power-beaming)
* [2025-06-15, 22:37:12](https://news.ycombinator.com/item?id=44285426) - [Let&apos;s Talk About ChatGPT-Induced Spiritual Psychosis](https://default.blog/p/lets-talk-about-chatgpt-induced-spiritual)
* [2025-06-15, 22:32:00](https://slashdot.org/story/25/06/15/2230206/metas-llama-31-can-recall-42-of-the-first-harry-potter-book?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s Llama 3.1 Can Recall 42% of the First Harry Potter Book](https://slashdot.org/story/25/06/15/2230206/metas-llama-31-can-recall-42-of-the-first-harry-potter-book?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 22:29:34](https://news.ycombinator.com/item?id=44285392) - [KAIST Succeeds in Real-Time CO2 Monitoring Without Batteries or External Power](https://news.kaist.ac.kr/newsen/html/news/?mode=V&amp;mng_no=47450)
* [2025-06-15, 21:29:00](https://apple.slashdot.org/story/25/06/15/2126220/apple-migrates-its-password-monitoring-service-to-swift-from-java-gains-40-performance-uplift?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Migrates Its Password Monitoring Service to Swift from Java, Gains 40% Performance Uplift](https://apple.slashdot.org/story/25/06/15/2126220/apple-migrates-its-password-monitoring-service-to-swift-from-java-gains-40-performance-uplift?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 21:21:28](https://news.ycombinator.com/item?id=44285054) - [David Attenborough at 99: &apos;I will not see how the story ends&apos;](https://www.thetimes.com/life-style/celebrity/article/david-attenborough-book-extract-age-99-lj3rd2fg7)
* [2025-06-15, 21:00:59](https://lobste.rs/s/3rujno/datalog_minikanren) - [Datalog in Minikanren](https://deosjr.github.io/dynamicland/datalog.html)
* [2025-06-15, 20:21:52](https://news.ycombinator.com/item?id=44284723) - [It’s nearly impossible to buy an original Bob Ross painting (2021)](https://thehustle.co/why-its-nearly-impossible-to-buy-an-original-bob-ross-painting)
* [2025-06-15, 20:12:00](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss) - [Nematode Tower Power](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss)
* [2025-06-15, 20:10:00](https://news.slashdot.org/story/25/06/15/207237/could-this-city-be-the-model-for-how-to-tackle-the-both-the-climate-and-housing-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could This City Be the Model for How to Tackle the Both the Climate and Housing Crisis?](https://news.slashdot.org/story/25/06/15/207237/could-this-city-be-the-model-for-how-to-tackle-the-both-the-climate-and-housing-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 20:07:27](https://news.ycombinator.com/item?id=44284657) - [Twin – A Textmode WINdow Environment](https://github.com/cosmos72/twin)
* [2025-06-15, 19:55:29](https://news.ycombinator.com/item?id=44284594) - [An Introduction to the Hieroglyphic Language of Early 1900s Train-Hoppers](https://www.openculture.com/2018/08/hobo-code-introduction-hieroglyphic-language-early-1900s-train-hoppers.html)
* [2025-06-15, 19:55:09](https://news.ycombinator.com/item?id=44284592) - [How fast can the RPython GC allocate?](https://pypy.org/posts/2025/06/rpython-gc-allocation-speed.html)
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
* [2025-06-15, 16:36:27](https://news.ycombinator.com/item?id=44283239) - [The experience continues until you stop experiencing it](https://strangemachine.tv/safespace/popov/)
* [2025-06-15, 16:34:00](https://news.slashdot.org/story/25/06/15/046216/new-york-state-begins-asking-employers-to-offically-identify-layoffs-caused-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New York State Begins Asking Employers to Offically Identify Layoffs Caused by AI](https://news.slashdot.org/story/25/06/15/046216/new-york-state-begins-asking-employers-to-offically-identify-layoffs-caused-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 16:16:08](https://news.ycombinator.com/item?id=44283093) - [Datalog in miniKanren](https://deosjr.github.io/dynamicland/datalog.html)
* [2025-06-15, 16:00:43](https://news.ycombinator.com/item?id=44282998) - [Modifying an HDMI dummy plug&apos;s EDID using a Raspberry Pi](https://www.downtowndougbrown.com/2025/06/modifying-an-hdmi-dummy-plugs-edid-using-a-raspberry-pi/)
* [2025-06-15, 15:34:00](https://tech.slashdot.org/story/25/06/15/0148202/17-year-old-student-builds-3d-printed-drone-in-garage-interests-dod-and-mit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [17-Year-Old Student Builds 3D-printed Drone In Garage, Interests DoD and MIT](https://tech.slashdot.org/story/25/06/15/0148202/17-year-old-student-builds-3d-printed-drone-in-garage-interests-dod-and-mit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 15:26:00](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss) - [\&quot;Impossible\&quot; Particle That Hit Earth May Have Been Dark Matter](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss)
* [2025-06-15, 14:59:09](https://lobste.rs/s/hhhvbw/sqlite_vfs_for_remote_databases_via_grpc) - [A SQLite VFS for remote databases via gRPC](https://github.com/danthegoodman1/gRPSQLite)
* [2025-06-15, 14:34:00](https://news.slashdot.org/story/25/06/15/0323209/site-for-accelerating-ai-use-across-the-us-government-accidentally-leaked-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Site for &apos;Accelerating&apos; AI Use Across the US Government Accidentally Leaked on GitHub](https://news.slashdot.org/story/25/06/15/0323209/site-for-accelerating-ai-use-across-the-us-government-accidentally-leaked-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 14:10:37](https://news.ycombinator.com/item?id=44282378) - [Why SSL was renamed to TLS in late 90s (2014)](https://tim.dierks.org/2014/05/security-standards-and-name-changes-in.html)
* [2025-06-15, 14:08:45](https://lobste.rs/s/dygkfr/why_ssl_was_renamed_tls_late_90s_2014) - [Why SSL was renamed to TLS in late 90s (2014)](https://tim.dierks.org/2014/05/security-standards-and-name-changes-in.html)
* [2025-06-15, 13:23:55](https://news.ycombinator.com/item?id=44282177) - [Canyon.mid](https://canyonmid.com/)
* [2025-06-15, 13:12:42](https://news.ycombinator.com/item?id=44282143) - [Childhood leukemia: how a deadly cancer became treatable](https://ourworldindata.org/childhood-leukemia-treatment-history)
* [2025-06-15, 12:40:07](https://news.ycombinator.com/item?id=44282017) - [How to modify Starlink Mini to run without the built-in WiFi router](https://olegkutkov.me/2025/06/15/how-to-modify-starlink-mini-to-run-without-the-built-in-wifi-router/)
* [2025-06-15, 11:34:00](https://slashdot.org/story/25/06/14/1648202/do-people-actually-want-smart-glasses-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do People Actually Want Smart Glasses Now?](https://slashdot.org/story/25/06/14/1648202/do-people-actually-want-smart-glasses-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 11:18:40](https://news.ycombinator.com/item?id=44281727) - [Datalog in Rust](https://github.com/frankmcsherry/blog/blob/master/posts/2025-06-03.md)
* [2025-06-15, 10:41:00](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss) - [RIP: Bill Atkinson, Co-Creator Of Apple Lisa And Mac](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss)
* [2025-06-15, 10:27:40](https://lobste.rs/s/bvyeh9/breaking_my_security_assignments) - [Breaking my Security Assignments](https://www.akpain.net/blog/breaking-secnet-assignments/)
* [2025-06-15, 10:11:41](https://news.ycombinator.com/item?id=44281506) - [Foundations of Computer Vision](https://visionbook.mit.edu)
* [2025-06-15, 07:34:00](https://science.slashdot.org/story/25/06/15/053254/space-is-the-perfect-place-to-study-cancer-and-someday-even-treat-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Space is the Perfect Place to Study Cancer and Someday Even Treat It](https://science.slashdot.org/story/25/06/15/053254/space-is-the-perfect-place-to-study-cancer-and-someday-even-treat-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 07:07:42](https://news.ycombinator.com/item?id=44281016) - [The Art of Lisp and Writing (2003)](https://www.dreamsongs.com/ArtOfLisp.html)
* [2025-06-15, 07:05:12](https://lobste.rs/s/ui5omv/art_lisp_writing) - [The Art of Lisp &amp; Writing](https://www.dreamsongs.com/ArtOfLisp.html)
* [2025-06-15, 05:57:00](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss) - [Navy Backs Right to Repair After $13B Carrier Goes Half-Fed](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss)
* [2025-06-15, 03:49:00](https://news.slashdot.org/story/25/06/15/0115241/executives-from-meta-openai-and-palantir-commissioned-into-the-us-army-reserve?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Executives from Meta, OpenAI, and Palantir Commissioned Into the US Army Reserve](https://news.slashdot.org/story/25/06/15/0115241/executives-from-meta-openai-and-palantir-commissioned-into-the-us-army-reserve?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 01:49:00](https://developers.slashdot.org/story/25/06/14/2359251/python-creator-guido-van-rossum-asks-is-worse-is-better-still-true-for-programming-languages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Python Creator Guido van Rossum Asks:  Is &apos;Worse is Better&apos; Still True for Programming Languages?](https://developers.slashdot.org/story/25/06/14/2359251/python-creator-guido-van-rossum-asks-is-worse-is-better-still-true-for-programming-languages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-15, 01:13:00](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss) - [Stay Hungry,  Stay Foolish ... 20 Years on](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss)
* [2025-06-15, 00:08:11](https://lobste.rs/s/iiimxs/modular_what_about_mlir_compiler) - [Modular: What about the MLIR compiler infrastructure? (Democratizing AI Compute, Part 8)](https://www.modular.com/blog/democratizing-ai-compute-part-8-what-about-the-mlir-compiler-infrastructure)
* [2025-06-14, 23:49:00](https://news.slashdot.org/story/25/06/14/0329224/ghost-students-are-enrolling-in-us-colleges-just-to-steal-financial-aid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Ghost&apos; Students are Enrolling in US Colleges Just to Steal Financial Aid](https://news.slashdot.org/story/25/06/14/0329224/ghost-students-are-enrolling-in-us-colleges-just-to-steal-financial-aid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-14, 22:49:00](https://news.slashdot.org/story/25/06/14/2242239/do-biofuels-increase-greenhouse-gas-emissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do Biofuels Increase Greenhouse Gas Emissions?](https://news.slashdot.org/story/25/06/14/2242239/do-biofuels-increase-greenhouse-gas-emissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-14, 20:27:00](https://soylentnews.org/article.pl?sid=25/06/14/1315217&amp;from=rss) - [Jupiter Takes Europe&apos;s HPC Crown in 793Pf Top500 Run](https://soylentnews.org/article.pl?sid=25/06/14/1315217&amp;from=rss)
* [2025-06-14, 18:49:15](https://lobste.rs/s/x4dj2z/inside_apollo_8_ball_fdai_flight_director) - [Inside the Apollo \&quot;8-Ball\&quot; FDAI (Flight Director / Attitude Indicator)](http://www.righto.com/2025/06/inside-apollo-fdai.html)
* [2025-06-14, 18:47:55](https://lobste.rs/s/bp7rbk/how_final_cartridge_iii_freezer_works) - [How the Final Cartridge III Freezer works](https://www.pagetable.com/?p=1810)
* [2025-06-14, 18:27:31](https://lobste.rs/s/s7katz/mosh_mobile_shell) - [Mosh: the mobile shell](https://mosh.org)
* [2025-06-14, 16:36:55](https://lobste.rs/s/9e8spk/todo_txt_tasks_my_trmnl) - [todo.txt tasks in my TRMNL](https://akselmo.dev/posts/todotxt-in-my-trmnl/)
* [2025-06-14, 15:42:00](https://soylentnews.org/article.pl?sid=25/06/13/1243246&amp;from=rss) - [Toyota Math: 9 Million EVs Are Just as Polluting as 27 Million Hybrids](https://soylentnews.org/article.pl?sid=25/06/13/1243246&amp;from=rss)
* [2025-06-14, 13:05:59](https://lobste.rs/s/riogyw/meta_analysis_three_different_notions) - [A meta-analysis of three different notions of software complexity](https://typesanitizer.com/blog/complexity-definitions.html)
* [2025-06-14, 11:23:55](https://news.ycombinator.com/item?id=44275679) - [Lisp-stat: Lisp environment for statistical computing](https://lisp-stat.dev/about/)
* [2025-06-14, 10:57:00](https://soylentnews.org/article.pl?sid=25/06/13/0159230&amp;from=rss) - [Climate Change Is Coming For Your Cheese](https://soylentnews.org/article.pl?sid=25/06/13/0159230&amp;from=rss)
* [2025-06-14, 10:22:06](https://news.ycombinator.com/item?id=44275471) - [Chemical knowledge and reasoning of large language models vs. chemist expertise](https://www.nature.com/articles/s41557-025-01815-x)
* [2025-06-14, 10:19:03](https://lobste.rs/s/qz1njr/html_spec_change_escaping_attributes) - [HTML spec change: escaping &lt; and &gt; in attributes](https://developer.chrome.com/blog/escape-attributes)
* [2025-06-14, 07:15:44](https://lobste.rs/s/1swikb/hypershell_type_level_dsl_for_shell) - [Hypershell: A Type-Level DSL for Shell-Scripting in Rust powered by Context-Generic Programming](https://contextgeneric.dev/blog/hypershell-release/)
* [2025-06-14, 06:12:00](https://soylentnews.org/article.pl?sid=25/06/13/0152245&amp;from=rss) - [Mistral Releases a Vibe Coding Client, Mistral Code](https://soylentnews.org/article.pl?sid=25/06/13/0152245&amp;from=rss)
* [2025-06-14, 05:38:07](https://news.ycombinator.com/item?id=44274435) - [Cure Dolly&apos;s Japanese Grammar Lessons](https://kellenok.github.io/cure-script/)
* [2025-06-14, 04:54:58](https://news.ycombinator.com/item?id=44274280) - [SQLite Date and Time Functions (2007)](https://www2.sqlite.org/cvstrac/wiki?p=DateAndTimeFunctions)
* [2025-06-14, 01:25:00](https://soylentnews.org/article.pl?sid=25/06/13/0146252&amp;from=rss) - [Vital Chipmaking Software Access Restored to China After High-Level Call Between Trump/Xi Jinping](https://soylentnews.org/article.pl?sid=25/06/13/0146252&amp;from=rss)
* [2025-06-13, 20:41:00](https://soylentnews.org/article.pl?sid=25/06/13/0143245&amp;from=rss) - [The Federal Government in the Age of Artificial Intelligence](https://soylentnews.org/article.pl?sid=25/06/13/0143245&amp;from=rss)
* [2025-06-13, 15:58:00](https://soylentnews.org/article.pl?sid=25/06/13/0135229&amp;from=rss) - [Starlink Shut Down on United Regional Jets - Reports of Radio Interference on Embraer E175](https://soylentnews.org/article.pl?sid=25/06/13/0135229&amp;from=rss)
* [2025-06-13, 14:23:45](https://lobste.rs/s/unsbmk/oxcaml_jane_street_s_extension_ocaml_is) - [OxCaml, Jane Street&apos;s extension of OCaml is now open-source](https://oxcaml.org)
* [2025-06-13, 11:13:00](https://soylentnews.org/article.pl?sid=25/06/13/0124202&amp;from=rss) - [Google Brute-Force Attack Exposes Phone Numbers in Minutes](https://soylentnews.org/article.pl?sid=25/06/13/0124202&amp;from=rss)
* [2025-06-13, 06:29:00](https://soylentnews.org/article.pl?sid=25/06/12/159242&amp;from=rss) - [1.5Tb of James Webb Space Telescope Data Dumped On The Internet - New Searchable Database](https://soylentnews.org/article.pl?sid=25/06/12/159242&amp;from=rss)
* [2025-06-13, 01:43:00](https://soylentnews.org/article.pl?sid=25/06/12/075226&amp;from=rss) - [Making Hydrogen With Soda Cans and Seawater](https://soylentnews.org/article.pl?sid=25/06/12/075226&amp;from=rss)
* [2025-06-12, 21:01:00](https://soylentnews.org/article.pl?sid=25/06/11/1726256&amp;from=rss) - [ChessGPT \&quot;Wrecked\&quot; by Atari 2600](https://soylentnews.org/article.pl?sid=25/06/11/1726256&amp;from=rss)
* [2025-06-12, 18:26:43](https://news.ycombinator.com/item?id=44261118) - [First 2D, non-silicon computer developed](https://www.psu.edu/news/research/story/worlds-first-2d-non-silicon-computer-developed)
* [2025-06-12, 16:16:00](https://soylentnews.org/article.pl?sid=25/06/11/1627232&amp;from=rss) - [Cyberattack Cripples North America&apos;s Largest Grocery Distributor, Threatening Supply Chain](https://soylentnews.org/article.pl?sid=25/06/11/1627232&amp;from=rss)
* [2025-06-12, 13:13:39](https://news.ycombinator.com/item?id=44257422) - [Fields where Native Americans farmed a thousand years ago discovered in Michigan](https://www.smithsonianmag.com/smart-news/massive-field-where-native-american-farmers-grew-corn-beans-and-squash-1000-years-ago-discovered-in-michigan-180986758/)
* [2025-06-12, 11:31:00](https://soylentnews.org/article.pl?sid=25/06/10/2233256&amp;from=rss) - [Dolphin LLM](https://soylentnews.org/article.pl?sid=25/06/10/2233256&amp;from=rss)
* [2025-06-12, 10:11:17](https://news.ycombinator.com/item?id=44255867) - [Cyborg Embryos Offer New Insights into Brain Growth](https://spectrum.ieee.org/embryo-electrode-array)
* [2025-06-12, 08:15:18](https://news.ycombinator.com/item?id=44255232) - [Ruby on Rails Audit Complete](https://ostif.org/ruby-on-rails-audit-complete/)
* [2025-06-12, 06:45:00](https://soylentnews.org/article.pl?sid=25/06/11/0156201&amp;from=rss) - [The Xerox Alto, Smalltalk, and Rewriting a Running GUI](https://soylentnews.org/article.pl?sid=25/06/11/0156201&amp;from=rss)
* [2025-06-12, 01:56:00](https://soylentnews.org/article.pl?sid=25/06/11/0154240&amp;from=rss) - [The Bethesda Declaration](https://soylentnews.org/article.pl?sid=25/06/11/0154240&amp;from=rss)
