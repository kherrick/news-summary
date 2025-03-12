# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning Innovations

* [OpenAI Pushes AI Agent Capabilities With New Developer API](https://developers.slashdot.org/story/25/03/11/2154229/openai-pushes-ai-agent-capabilities-with-new-developer-api?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43339629))

* [Happy 10k Day](https://blog.comma.ai/happy10kday/) ([comments](https://news.ycombinator.com/item?id=43339158))

* [New tools for building agents](https://openai.com/index/new-tools-for-building-agents/) ([comments](https://news.ycombinator.com/item?id=43334644))

* [Here’s how I use LLMs to help me write code](https://simonwillison.net/2025/Mar/11/using-llms-for-code/) ([comments](https://lobste.rs/s/gvkxlf/here_s_how_i_use_llms_help_me_write_code))

## Astounding Technological Advancements

* [Australian man survives 100 days with artificial heart](https://www.theguardian.com/australia-news/2025/mar/12/australian-man-survives-100-days-with-artificial-heart-in-world-first-success) ([comments](https://news.ycombinator.com/item?id=43338596))

* [Sorting algorithms with CUDA](https://ashwanirathee.com/blog/2025/sort2/) ([comments](https://news.ycombinator.com/item?id=43338405))

* [Modern Baby: A pioneering computer from Manchester](https://thechipletter.substack.com/p/modern-baby) ([comments](https://news.ycombinator.com/item?id=43329761))

## Space and Astronomy Developments

* [NASA to launch space observatory that will map 450M galaxies](https://www.nbcnews.com/science/space/nasa-spherex-space-observatory-launch-map-galaxies-universe-rcna190877) ([comments](https://news.ycombinator.com/item?id=43296184))

* [Stars Made From Only Primordial Gas Finally Spotted](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss) ([comments](https://news.ycombinator.com/item?id=43338584))

* [A Paleoarchaean Impact Crater in the Pilbara Craton, Western Australia](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss) ([comments](https://news.ycombinator.com/item?id=43330900))

## Cybersecurity Concerns

* [The Insecurity of Telecom Stacks in the Wake of Salt Typhoon](https://soatok.blog/2025/03/12/on-the-insecurity-of-telecom-stacks-in-the-wake-of-salt-typhoon/) ([comments](https://news.ycombinator.com/item?id=43340196))

* [Thousands of TP-Link Routers Have Been Infected By a Botnet To Spread Malware](https://it.slashdot.org/story/25/03/11/207242/thousands-of-tp-link-routers-have-been-infected-by-a-botnet-to-spread-malware?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43334190))

* [Microsoft Admits GitHub Used to Store Malware That Infected Almost a Million Devices](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss) ([comments](https://news.ycombinator.com/item?id=43331582))

## Environmental and Energy Innovations

* [Geothermal Could Power Nearly All New Data Centers Through 2030](https://news.slashdot.org/story/25/03/11/2149222/geothermal-could-power-nearly-all-new-data-centers-through-2030?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43338190))

* [Only Seven Countries Worldwide Meet WHO Dirty Air Guidelines, Study Shows](https://news.slashdot.org/story/25/03/11/1648211/only-seven-countries-worldwide-meet-who-dirty-air-guidelines-study-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43334120))

## Open Source Innovations

* [Show HN: VSC – An open source 3D Rendering Engine in C++](https://github.com/WW92030-STORAGE/VSC) ([comments](https://news.ycombinator.com/item?id=43339584))

* [Show HN: Krep a High-Performance String Search Utility Written in C](https://davidesantangelo.github.io/krep/) ([comments](https://news.ycombinator.com/item?id=43333946))

* [Show HN: XPipe, a shell connection hub for SSH, Docker, K8s, VMs, and more](https://xpipe.io/) ([comments](https://news.ycombinator.com/item?id=43339629))

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

* [2025-03-12, 06:39:17](https://news.ycombinator.com/item?id=43340491) - [Gemma 3 Technical Report [pdf]](https://storage.googleapis.com/deepmind-media/gemma/Gemma3Report.pdf)
* [2025-03-12, 05:21:33](https://news.ycombinator.com/item?id=43340196) - [The Insecurity of Telecom Stacks in the Wake of Salt Typhoon](https://soatok.blog/2025/03/12/on-the-insecurity-of-telecom-stacks-in-the-wake-of-salt-typhoon/)
* [2025-03-12, 04:50:00](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss) - [Political Poll News Site 538 to Close Amid Larger Shuttering Across ABC and Disney](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss)
* [2025-03-12, 04:48:38](https://lobste.rs/s/z66ftn/art_formatting_code) - [The Art of Formatting Code](https://mcyoung.xyz/2025/03/11/formatters/)
* [2025-03-12, 03:30:00](https://developers.slashdot.org/story/25/03/11/2154229/openai-pushes-ai-agent-capabilities-with-new-developer-api?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Pushes AI Agent Capabilities With New Developer API](https://developers.slashdot.org/story/25/03/11/2154229/openai-pushes-ai-agent-capabilities-with-new-developer-api?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 03:16:28](https://news.ycombinator.com/item?id=43339629) - [Show HN: XPipe, a shell connection hub for SSH, Docker, K8s, VMs, and more](https://xpipe.io/)
* [2025-03-12, 03:08:23](https://news.ycombinator.com/item?id=43339584) - [Show HN: VSC – An open source 3D Rendering Engine in C++](https://github.com/WW92030-STORAGE/VSC)
* [2025-03-12, 03:05:47](https://news.ycombinator.com/item?id=43339563) - [Beyond Diffusion: Inductive Moment Matching](https://lumalabs.ai/news/inductive-moment-matching)
* [2025-03-12, 02:17:09](https://lobste.rs/s/ejs3uh/future_is_niri) - [The Future is Niri](https://ersei.net/en/blog/niri)
* [2025-03-12, 01:56:30](https://lobste.rs/s/1cqlzd/perspectives_from_technical_university) - [Perspectives from the Technical University of Munich](https://mirawelner.com/posts/TUM_thoughts.html)
* [2025-03-12, 01:46:27](https://news.ycombinator.com/item?id=43339158) - [Happy 10k Day](https://blog.comma.ai/happy10kday/)
* [2025-03-12, 01:25:00](https://news.slashdot.org/story/25/03/11/2149222/geothermal-could-power-nearly-all-new-data-centers-through-2030?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Geothermal Could Power Nearly All New Data Centers Through 2030](https://news.slashdot.org/story/25/03/11/2149222/geothermal-could-power-nearly-all-new-data-centers-through-2030?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 01:17:25](https://lobste.rs/s/u09ig5/translating_bzip2_with_c2rust) - [Translating bzip2 with c2rust](https://tweedegolf.nl/en/blog/151/translating-bzip2-with-c2rust)
* [2025-03-12, 00:45:00](https://entertainment.slashdot.org/story/25/03/11/2143232/team-behind-las-vegas-sphere-plans-5000-capacity-mini-spheres?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Team Behind Las Vegas Sphere Plans 5,000-Capacity 'Mini-Spheres'](https://entertainment.slashdot.org/story/25/03/11/2143232/team-behind-las-vegas-sphere-plans-5000-capacity-mini-spheres?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 00:17:34](https://news.ycombinator.com/item?id=43338596) - [Australian man survives 100 days with artificial heart](https://www.theguardian.com/australia-news/2025/mar/12/australian-man-survives-100-days-with-artificial-heart-in-world-first-success)
* [2025-03-12, 00:05:00](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss) - [Stars Made From Only Primordial Gas Finally Spotted](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss)
* [2025-03-12, 00:02:00](https://hardware.slashdot.org/story/25/03/11/2126204/amd-ryzen-9-9950x3d-with-3d-v-cache-impresses-in-launch-day-testing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AMD Ryzen 9 9950X3D With 3D V-Cache Impresses In Launch Day Testing](https://hardware.slashdot.org/story/25/03/11/2126204/amd-ryzen-9-9950x3d-with-3d-v-cache-impresses-in-launch-day-testing?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 23:47:43](https://news.ycombinator.com/item?id=43338405) - [Sorting algorithms with CUDA](https://ashwanirathee.com/blog/2025/sort2/)
* [2025-03-11, 23:20:00](https://it.slashdot.org/story/25/03/11/2037221/microsoft-is-replacing-remote-desktop-with-its-new-windows-app?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft is Replacing Remote Desktop With Its New Windows App](https://it.slashdot.org/story/25/03/11/2037221/microsoft-is-replacing-remote-desktop-with-its-new-windows-app?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 23:05:11](https://lobste.rs/s/34dsf7/re_writing_interpreter_rust) - [(Re)writing an interpreter in Rust](https://www.dannyvankooten.com/blog/2022/rewriting-interpreter-rust/)
* [2025-03-11, 22:40:00](https://science.slashdot.org/story/25/03/11/2031217/preprint-sites-biorxiv-and-medrxiv-launch-new-era-of-independence?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Preprint Sites bioRxiv and medRxiv Launch New Era of Independence](https://science.slashdot.org/story/25/03/11/2031217/preprint-sites-biorxiv-and-medrxiv-launch-new-era-of-independence?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 22:18:42](https://news.ycombinator.com/item?id=43337703) - [The Startup CTO's Handbook](https://github.com/ZachGoldberg/Startup-CTO-Handbook/blob/main/StartupCTOHandbook.md)
* [2025-03-11, 22:09:40](https://lobste.rs/s/4eobii/how_afterhour_built_ultra_scalable_chat) - [How AfterHour built an ultra-scalable chat service in one month with Rama](https://blog.redplanetlabs.com/2025/03/11/how-afterhour-built-an-ultra-scalable-chat-service-in-one-month-with-rama/)
* [2025-03-11, 22:00:00](https://tech.slashdot.org/story/25/03/11/2015220/zoox-robotaxis-do-not-meet-federal-safety-standards-agency-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Zoox Robotaxis Do Not Meet Federal Safety Standards, Agency Says](https://tech.slashdot.org/story/25/03/11/2015220/zoox-robotaxis-do-not-meet-federal-safety-standards-agency-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 21:22:01](https://lobste.rs/s/pbqsop/unix_needs_true_integrated_environment) - [UNIX Needs A True Integrated Environment: CASE Closed (1989)](http://www.bitsavers.org/pdf/xerox/parc/techReports/CSL-89-4_UNIX_Needs_A_True_Integrated_Environment.pdf)
* [2025-03-11, 21:20:00](https://it.slashdot.org/story/25/03/11/207242/thousands-of-tp-link-routers-have-been-infected-by-a-botnet-to-spread-malware?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Thousands of TP-Link Routers Have Been Infected By a Botnet To Spread Malware](https://it.slashdot.org/story/25/03/11/207242/thousands-of-tp-link-routers-have-been-infected-by-a-botnet-to-spread-malware?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 21:01:39](https://news.ycombinator.com/item?id=43336957) - [Continue (YC S23) Is Hiring a Software Engineer in San Francisco](https://www.ycombinator.com/companies/continue/jobs/smcxRnM-software-engineer)
* [2025-03-11, 20:59:46](https://lobste.rs/s/qsmfvf/owi_cross_language_bugfinder) - [owi: Cross-language Bugfinder](https://github.com/OCamlPro/owi)
* [2025-03-11, 20:57:41](https://lobste.rs/s/kgdcna/r7rs_large_stygian_blue_reddish_green) - [R7RS Large Stygian Blue/Reddish Green ballot](https://surveys.nonceword.org/?r=survey/index&sid=242775&lang=en)
* [2025-03-11, 20:46:07](https://lobste.rs/s/hoirtg/making_multiplayer_action_game_haskell) - [Making a multiplayer action game in Haskell](https://gitlab.com/-/snippets/4817016)
* [2025-03-11, 20:40:00](https://news.slashdot.org/story/25/03/11/200242/spain-to-impose-massive-fines-for-not-labeling-ai-generated-content?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Spain To Impose Massive Fines For Not Labeling AI-Generated Content](https://news.slashdot.org/story/25/03/11/200242/spain-to-impose-massive-fines-for-not-labeling-ai-generated-content?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 20:37:56](https://lobste.rs/s/rf4qpg/goatdb_lightweight_nodb_for_deno_react) - [goatdb: Lightweight NoDB for Deno & React](https://github.com/goatplatform/goatdb)
* [2025-03-11, 20:08:58](https://lobste.rs/s/oi1vqm/rust_trait_object_layout) - [Rust trait object layout](https://neugierig.org/software/blog/2025/03/trait-object-layout.html)
* [2025-03-11, 20:00:00](https://slashdot.org/story/25/03/11/1953254/vodafone-tells-employees-to-follow-rto-policy-or-lose-bonuses?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Vodafone Tells Employees To Follow RTO Policy Or Lose Bonuses](https://slashdot.org/story/25/03/11/1953254/vodafone-tells-employees-to-follow-rto-policy-or-lose-bonuses?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 19:57:53](https://lobste.rs/s/jgpcfa/rsync_over_grpc_demo_program_rsync_file) - [rsync-over-grpc: demo program: rsync file transfer (with the gokrazy/rsync module) over gRPC transport](https://github.com/stapelberg/rsync-over-grpc)
* [2025-03-11, 19:25:09](https://lobste.rs/s/mwoxoe/every_line_code_is_always_documented_2014) - [Every line of code is always documented (2014)](https://mislav.net/2014/02/hidden-documentation/)
* [2025-03-11, 19:23:00](https://soylentnews.org/article.pl?sid=25/03/11/1134214&from=rss) - [How to Build a Static Website on a Raspberry Pi](https://soylentnews.org/article.pl?sid=25/03/11/1134214&from=rss)
* [2025-03-11, 18:59:00](https://news.slashdot.org/story/25/03/11/1859238/southwest-airlines-to-end-free-checked-bags-policy-for-first-time-in-its-54-year-history?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Southwest Airlines To End Free Checked Bags Policy For First Time in Its 54-Year History](https://news.slashdot.org/story/25/03/11/1859238/southwest-airlines-to-end-free-checked-bags-policy-for-first-time-in-its-54-year-history?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 18:05:00](https://science.slashdot.org/story/25/03/11/1755217/the-surprising-impact-of-qr-code-menus-on-diminishing-customer-loyalty?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Surprising Impact of QR Code Menus on Diminishing Customer Loyalty](https://science.slashdot.org/story/25/03/11/1755217/the-surprising-impact-of-qr-code-menus-on-diminishing-customer-loyalty?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 17:49:11](https://lobste.rs/s/mewqa9/thoughts_about_naming_things) - [Thoughts About Naming Things](http://11spades.net/posts/on-naming-things/)
* [2025-03-11, 17:26:00](https://it.slashdot.org/story/25/03/11/1726218/why-extracting-data-from-pdfs-remains-a-nightmare-for-data-experts?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Why Extracting Data from PDFs Remains a Nightmare for Data Experts](https://it.slashdot.org/story/25/03/11/1726218/why-extracting-data-from-pdfs-remains-a-nightmare-for-data-experts?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 17:04:57](https://news.ycombinator.com/item?id=43334644) - [New tools for building agents](https://openai.com/index/new-tools-for-building-agents/)
* [2025-03-11, 17:00:46](https://news.ycombinator.com/item?id=43334589) - [Launch HN: Sift Dev (YC W25) – AI-Powered Datadog Alternative](https://news.ycombinator.com/item?id=43334589)
* [2025-03-11, 16:47:00](https://news.slashdot.org/story/25/03/11/1648211/only-seven-countries-worldwide-meet-who-dirty-air-guidelines-study-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Only Seven Countries Worldwide Meet WHO Dirty Air Guidelines, Study Shows](https://news.slashdot.org/story/25/03/11/1648211/only-seven-countries-worldwide-meet-who-dirty-air-guidelines-study-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 16:44:39](https://lobste.rs/s/y1dvmd/representing_type_lattices_compactly) - [Representing type lattices compactly](https://bernsteinbear.com/blog/lattice-bitset/)
* [2025-03-11, 16:33:24](https://news.ycombinator.com/item?id=43334190) - [Fastplotlib: GPU-accelerated, fast, and interactive plotting library](https://medium.com/@caitlin9165/fastplotlib-driving-scientific-discovery-through-data-visualization-418f8bff094c)
* [2025-03-11, 16:12:43](https://news.ycombinator.com/item?id=43333946) - [Show HN: Krep a High-Performance String Search Utility Written in C](https://davidesantangelo.github.io/krep/)
* [2025-03-11, 16:05:00](https://slashdot.org/story/25/03/11/166203/half-past-four-is-the-new-five-oclock-in-more-efficient-workday?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Half-Past Four Is the New Five O'Clock in More Efficient Workday](https://slashdot.org/story/25/03/11/166203/half-past-four-is-the-new-five-oclock-in-more-efficient-workday?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 15:32:46](https://news.ycombinator.com/item?id=43333484) - [AI-Generated Voice Evidence Poses Dangers in Court](https://www.lawfaremedia.org/article/ai-generated-voice-evidence-poses-dangers-in-court)
* [2025-03-11, 14:49:30](https://lobste.rs/s/ee6kb4/can_i_use_secure_curves_web_platform) - [Can I use Secure Curves in the Web Platform?](https://blogs.igalia.com/jfernandez/2025/02/28/can-i-use-secure-curves-in-the-web-platform/)
* [2025-03-11, 14:44:44](https://news.ycombinator.com/item?id=43332944) - [NIST selects HQC as fifth algorithm for post-quantum encryption](https://www.nist.gov/news-events/news/2025/03/nist-selects-hqc-fifth-algorithm-post-quantum-encryption)
* [2025-03-11, 14:41:12](https://lobste.rs/s/3q0ei5/10x_faster_typescript) - [A 10x Faster TypeScript](https://devblogs.microsoft.com/typescript/typescript-native-port/)
* [2025-03-11, 14:34:00](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss) - [Musk Complains: X Site Under Attack, and DOGE Interferes With His Job](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss)
* [2025-03-11, 14:32:23](https://news.ycombinator.com/item?id=43332830) - [A 10x Faster TypeScript](https://devblogs.microsoft.com/typescript/typescript-native-port/)
* [2025-03-11, 14:24:48](https://news.ycombinator.com/item?id=43332752) - [The US island that speaks Elizabethan English](https://www.bbc.com/travel/article/20190623-the-us-island-that-speaks-elizabethan-english)
* [2025-03-11, 14:16:54](https://lobste.rs/s/gvkxlf/here_s_how_i_use_llms_help_me_write_code) - [Here’s how I use LLMs to help me write code](https://simonwillison.net/2025/Mar/11/using-llms-for-code/)
* [2025-03-11, 14:14:35](https://news.ycombinator.com/item?id=43332658) - [Happy 20th Birthday, Y Combinator](https://twitter.com/garrytan/status/1899092996702048709)
* [2025-03-11, 13:15:40](https://lobste.rs/s/paim15/beyond_bad_output) - [Beyond Bad Output](https://hey.paris/posts/beyond-bad-output/)
* [2025-03-11, 12:02:02](https://news.ycombinator.com/item?id=43331582) - [Show HN: Factorio Learning Environment – Agents Build Factories](https://jackhopkins.github.io/factorio-learning-environment/)
* [2025-03-11, 11:49:22](https://lobste.rs/s/clt1it/small_template_engine_for_c) - [A small template engine for C](https://www.omarpolo.com/post/template.html)
* [2025-03-11, 11:44:27](https://lobste.rs/s/j6bb5k/implementation_j_roger_hui) - [An Implementation of J - Roger Hui](https://www.jsoftware.com/books/pdf/aioj.pdf)
* [2025-03-11, 11:25:13](https://news.ycombinator.com/item?id=43331358) - [America Is Missing The New Labor Economy – Robotics Part 1](https://semianalysis.com/2025/03/11/america-is-missing-the-new-labor-economy-robotics-part-1/)
* [2025-03-11, 10:07:17](https://news.ycombinator.com/item?id=43330900) - [What makes code hard to read: Visual patterns of complexity (2023)](https://seeinglogic.com/posts/visual-readability-patterns/)
* [2025-03-11, 09:50:00](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss) - [A Paleoarchaean Impact Crater in the Pilbara Craton, Western Australia](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss)
* [2025-03-11, 07:51:34](https://lobste.rs/s/fwcnkf/early_look_at_nix_dynamic_derivations) - [An early look at Nix Dynamic Derivations](https://fzakaria.com/2025/03/10/an-early-look-at-nix-dynamic-derivations)
* [2025-03-11, 06:37:14](https://news.ycombinator.com/item?id=43329761) - [Modern Baby: A pioneering computer from Manchester](https://thechipletter.substack.com/p/modern-baby)
* [2025-03-11, 05:06:00](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss) - [Microsoft Admits GitHub Used to Store Malware That Infected Almost a Million Devices](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss)
* [2025-03-11, 04:03:51](https://lobste.rs/s/jalbsf/how_i_built_this_website_on_raspberry_pi) - [How I built this website on a Raspberry Pi](https://mirawelner.com/posts/website_howto.html)
* [2025-03-11, 00:20:00](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss) - [US Supreme Court Weakens Rules on Discharge of Raw Sewage Into Water Supplies](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss)
* [2025-03-10, 20:01:55](https://lobste.rs/s/ekuzbe/introducing_sidekiq_8_0) - [Introducing Sidekiq 8.0](https://www.mikeperham.com/2025/03/05/introducing-sidekiq-8.0/)
* [2025-03-10, 19:35:00](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss) - [Undocumented Commands Found in Bluetooth Chip Used by a Billion Devices](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss)
* [2025-03-10, 14:46:00](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss) - [How Tiny Can You Scale It Until Things Won't Work?](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss)
* [2025-03-10, 09:27:00](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss) - [CISA Tags Windows, Cisco Vulnerabilities as Actively Exploited](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss)
* [2025-03-10, 04:40:00](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss) - ['Jetsons' Robot Finally Arrives: Sweater-Wearing Neo Gamma Android Helps With Household Chores](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss)
* [2025-03-10, 00:01:00](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss) - [Billions of Years Ago, Mars Featured Beaches Fit for a Vacation, Astronomers Say](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss)
* [2025-03-09, 19:18:00](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss) - [‘Slime’ Keeps the Brain Safe ― and Could Guard Against Ageing](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss)
* [2025-03-09, 19:08:45](https://news.ycombinator.com/item?id=43312527) - [Internationalization-puzzles: Daily programming puzzles just like Advent of Code](https://i18n-puzzles.com/)
* [2025-03-09, 14:37:00](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss) - [Meet Rayhunter: A New Open Source Tool from EFF to Detect Cellular Spying](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss)
* [2025-03-09, 12:44:44](https://news.ycombinator.com/item?id=43308636) - [The Early History of Deferred Shading and Lighting](https://sites.google.com/site/richgel99/the-early-history-of-deferred-shading-and-lighting)
* [2025-03-09, 12:21:57](https://news.ycombinator.com/item?id=43308477) - [Show HN: Daylight – track sunrise / sunset times in your terminal](https://github.com/jbreckmckye/daylight)
* [2025-03-09, 09:53:00](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss) - [Asteroid Mining Startup Loses its Spacecraft Somewhere Beyond the Moon](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss)
* [2025-03-09, 05:07:00](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss) - [Amid a Growing Measles Outbreak, Doctors Worry RFK is Sending the Wrong Message](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss)
* [2025-03-09, 03:15:51](https://news.ycombinator.com/item?id=43305842) - [In contrast to Earth, Mars's middle atmosphere appears driven by gravity waves](https://phys.org/news/2025-03-contrast-earth-mars-middle-atmosphere.html)
* [2025-03-09, 00:23:00](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss) - [Some DOGE Staffers Are Drawing Six-Figure Government Salaries](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss)
* [2025-03-08, 19:41:00](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss) - [Alphabet's Taara Chip Uses Light Beams To Provide High-Speed Internet](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss)
* [2025-03-08, 15:46:57](https://news.ycombinator.com/item?id=43301068) - [When Corporate Branding Goes Wrong](https://www.nytimes.com/2025/03/07/world/europe/aberdeen-abrdn-rebrand-vowels.html)
* [2025-03-08, 15:37:00](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss) - [Temporary Problem with Stripe](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss)
* [2025-03-08, 14:52:00](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss) - [Hugging Face's Chief Science Officer Worries AI is Becoming 'Yes-Men on Servers'](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss)
* [2025-03-08, 10:07:00](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss) - [Eerily Realistic AI Voice Demo Sparks Amazement and Discomfort Online](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss)
* [2025-03-08, 05:22:00](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss) - [Apple Refuses to Break Encryption, Seeks Reversal of UK Demand for Backdoor](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss)
* [2025-03-08, 00:37:00](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss) - [The International Space Station Lacks Microbial Diversity. Is It Too Clean?](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss)
* [2025-03-08, 00:07:15](https://news.ycombinator.com/item?id=43296184) - [NASA to launch space observatory that will map 450M galaxies](https://www.nbcnews.com/science/space/nasa-spherex-space-observatory-launch-map-galaxies-universe-rcna190877)
