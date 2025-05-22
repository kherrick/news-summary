# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [Making the rav1d Video Decoder 1% Faster](https://ohadravid.github.io/posts/2025-05-rav1d-faster/) ([comments](https://news.ycombinator.com/item?id=44061160))

* [3 Years of Extremely Remote Work](https://www.brendangregg.com/blog/2025-05-22/3-years-of-extremely-remote-work.html) ([comments](https://lobste.rs/s/ngsbdq/3_years_extremely_remote_work))

* [libinput Preparing To Introduce A Lua-Based Plugin System For Modifying Devices/Events](https://www.phoronix.com/news/libinput-Lua-Plugin-System) ([comments](https://lobste.rs/s/vo1ue5/libinput_preparing_introduce_lua_based))

* [Collaborative Text Editing Without CRDTs or OT](https://mattweidner.com/2025/05/21/text-without-crdts.html) ([comments](https://news.ycombinator.com/item?id=44053560))

## Emerging Scientific Discoveries

* [New Bacteria Have Been Discovered on a Chinese Space Station](https://science.slashdot.org/story/25/05/21/216255/new-bacteria-have-been-discovered-on-a-chinese-space-station?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/05/21/216255/new-bacteria-have-been-discovered-on-a-chinese-space-station?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Laser-Powered Fusion Experiment More Than Doubles its Power Output](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss))

* [The scientific “unit” we call the decibel](https://lcamtuf.substack.com/p/decibels-are-ridiculous) ([comments](https://news.ycombinator.com/item?id=44058778))

## Cultural and Societal Commentaries

* [Usage of Semicolons In English Books Down Almost Half In Two Decades](https://news.slashdot.org/story/25/05/21/2122224/usage-of-semicolons-in-english-books-down-almost-half-in-two-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/05/21/2122224/usage-of-semicolons-in-english-books-down-almost-half-in-two-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [By Default, Signal Doesn't Recall](https://signal.org/blog/signal-doesnt-recall/) ([comments](https://lobste.rs/s/lbf9mb/by_default_signal_doesn_t_recall))

* [Transpiler is a meaningless word](https://people.csail.mit.edu/rachit/post/transpiler/) ([comments](https://lobste.rs/s/qx0wzy/transpiler_is_meaningless_word))

## Space and Sustainability

* [Wisk Aero, NASA Sign 5-Year Partnership To Advance Sustainable Autonomous Flights](https://science.slashdot.org/story/25/05/21/2114243/wisk-aero-nasa-sign-5-year-partnership-to-advance-sustainable-autonomous-flights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/05/21/2114243/wisk-aero-nasa-sign-5-year-partnership-to-advance-sustainable-autonomous-flights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Mars May Have Vast Underground Oceans](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss))

* [Space Computing Satellite Constellation Launched into Orbit](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss))

## Legal and Ethical Challenges

* [Denver Detectives Crack Deadly Arson Case Using Teens' Google Search Histories](https://tech.slashdot.org/story/25/05/22/0226258/denver-detectives-crack-deadly-arson-case-using-teens-google-search-histories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/05/22/0226258/denver-detectives-crack-deadly-arson-case-using-teens-google-search-histories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [SEC Sues Crypto Startup Unicoin and Its Executives For Fraud](https://yro.slashdot.org/story/25/05/21/2055220/sec-sues-crypto-startup-unicoin-and-its-executives-for-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/05/21/2055220/sec-sues-crypto-startup-unicoin-and-its-executives-for-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Italy Fines Thousands as Crackdown on Pirate IPTV Targets Viewers](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss))

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

* [2025-05-22, 13:00:00](https://news.slashdot.org/story/25/05/21/2122224/usage-of-semicolons-in-english-books-down-almost-half-in-two-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Usage of Semicolons In English Books Down Almost Half In Two Decades](https://news.slashdot.org/story/25/05/21/2122224/usage-of-semicolons-in-english-books-down-almost-half-in-two-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 11:59:03](https://news.ycombinator.com/item?id=44061160) - [Making the rav1d Video Decoder 1% Faster](https://ohadravid.github.io/posts/2025-05-rav1d-faster/)
* [2025-05-22, 11:56:47](https://lobste.rs/s/j3mzif/making_rav1d_video_decoder_1_faster) - [Making the rav1d Video Decoder 1% Faster](https://ohadravid.github.io/posts/2025-05-rav1d-faster/)
* [2025-05-22, 11:53:38](https://lobste.rs/s/ngsbdq/3_years_extremely_remote_work) - [3 Years of Extremely Remote Work](https://www.brendangregg.com/blog/2025-05-22/3-years-of-extremely-remote-work.html)
* [2025-05-22, 11:43:57](https://lobste.rs/s/h0roqw/whippet_gc_notes_on_guile_heuristics_heap) - [Whippet GC notes on Guile, heuristics, and heap growth](https://wingolog.org/archives/2025/05/22/whippet-lab-notebook-guile-heuristics-and-heap-growth)
* [2025-05-22, 11:42:04](https://lobste.rs/s/qx0wzy/transpiler_is_meaningless_word) - [Transpiler is a meaningless word](https://people.csail.mit.edu/rachit/post/transpiler/)
* [2025-05-22, 11:40:02](https://lobste.rs/s/zgnlne/machinist_machine) - [Machinist and Machine](https://punkx.org/jackdoe/misery.html)
* [2025-05-22, 11:24:27](https://news.ycombinator.com/item?id=44060943) - [Robert Musil Forgotten Plays Inspired His Greatest Work of Fiction](https://lithub.com/the-austrian-writer-whose-forgotten-plays-inspired-his-greatest-work-of-fiction/)
* [2025-05-22, 10:52:44](https://news.ycombinator.com/item?id=44060772) - [Show HN: Curved Space Shader in Three.js (via 4D sphere projection)](https://github.com/bntre/CurvedSpaceShader)
* [2025-05-22, 10:10:09](https://news.ycombinator.com/item?id=44060533) - [Strengths and limitations of diffusion language models – sean goedecke](https://www.seangoedecke.com/limitations-of-text-diffusion-models/)
* [2025-05-22, 10:00:00](https://science.slashdot.org/story/25/05/21/2114243/wisk-aero-nasa-sign-5-year-partnership-to-advance-sustainable-autonomous-flights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wisk Aero, NASA Sign 5-Year Partnership To Advance Sustainable Autonomous Flights](https://science.slashdot.org/story/25/05/21/2114243/wisk-aero-nasa-sign-5-year-partnership-to-advance-sustainable-autonomous-flights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 09:17:57](https://news.ycombinator.com/item?id=44060305) - [Planetfall](https://somethingaboutmaps.wordpress.com/2025/05/20/planetfall/)
* [2025-05-22, 08:42:00](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss) - [Italy Fines Thousands as Crackdown on Pirate IPTV Targets Viewers](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss)
* [2025-05-22, 07:00:55](https://lobste.rs/s/lbf9mb/by_default_signal_doesn_t_recall) - [By Default, Signal Doesn&apos;t Recall](https://signal.org/blog/signal-doesnt-recall/)
* [2025-05-22, 07:00:22](https://lobste.rs/s/5imt51/oodle_2_9_14_intel_13th_14th_gen_cpus) - [Oodle 2.9.14 and Intel 13th/14th gen CPUs](https://fgiesen.wordpress.com/2025/05/21/oodle-2-9-14-and-intel-13th-14th-gen-cpus/)
* [2025-05-22, 07:00:00](https://science.slashdot.org/story/25/05/21/216255/new-bacteria-have-been-discovered-on-a-chinese-space-station?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Bacteria Have Been Discovered on a Chinese Space Station](https://science.slashdot.org/story/25/05/21/216255/new-bacteria-have-been-discovered-on-a-chinese-space-station?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 06:50:28](https://news.ycombinator.com/item?id=44059411) - [Why does Debian change software?](https://blog.liw.fi/posts/2025/why-debian-changes/)
* [2025-05-22, 06:43:04](https://lobste.rs/s/vo1ue5/libinput_preparing_introduce_lua_based) - [libinput Preparing To Introduce A Lua-Based Plugin System For Modifying Devices/Events](https://www.phoronix.com/news/libinput-Lua-Plugin-System)
* [2025-05-22, 06:24:07](https://lobste.rs/s/fw1rhp/recent_disruptive_changes_from) - [Recent disruptive changes from Setuptools](https://lwn.net/SubscriberLink/1020576/fcef31015579a9b1/)
* [2025-05-22, 05:49:36](https://news.ycombinator.com/item?id=44059122) - [Direct TLS can speed up your connections](https://marc-bowes.com/postgres-direct-tls.html)
* [2025-05-22, 05:00:00](https://tech.slashdot.org/story/25/05/22/0226258/denver-detectives-crack-deadly-arson-case-using-teens-google-search-histories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Denver Detectives Crack Deadly Arson Case Using Teens&apos; Google Search Histories](https://tech.slashdot.org/story/25/05/22/0226258/denver-detectives-crack-deadly-arson-case-using-teens-google-search-histories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 04:24:33](https://news.ycombinator.com/item?id=44058778) - [The scientific “unit” we call the decibel](https://lcamtuf.substack.com/p/decibels-are-ridiculous)
* [2025-05-22, 03:59:00](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss) - [Laser-Powered Fusion Experiment More Than Doubles its Power Output](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss)
* [2025-05-22, 03:30:00](https://tech.slashdot.org/story/25/05/21/211204/brembos-new-brakes-cut-particulate-emissions-by-90-percent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brembo&apos;s New Brakes Cut Particulate Emissions By 90 Percent](https://tech.slashdot.org/story/25/05/21/211204/brembos-new-brakes-cut-particulate-emissions-by-90-percent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 02:46:47](https://news.ycombinator.com/item?id=44058299) - [Kotlin-Lsp: Kotlin Language Server and Plugin for Visual Studio Code](https://github.com/Kotlin/kotlin-lsp)
* [2025-05-22, 02:45:02](https://lobste.rs/s/dtzhkh/kotlin_lsp_kotlin_language_server_plugin) - [kotlin-lsp: Kotlin Language Server and plugin for Visual Studio Code](https://github.com/Kotlin/kotlin-lsp)
* [2025-05-22, 02:00:00](https://tech.slashdot.org/story/25/05/22/0156227/phone-companies-failed-to-warn-senators-about-surveillance-wyden-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Phone Companies Failed To Warn Senators About Surveillance, Wyden Says](https://tech.slashdot.org/story/25/05/22/0156227/phone-companies-failed-to-warn-senators-about-surveillance-wyden-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 01:19:41](https://news.ycombinator.com/item?id=44057841) - [Getting a paper accepted](https://maxwellforbes.com/posts/how-to-get-a-paper-accepted/)
* [2025-05-22, 01:13:50](https://news.ycombinator.com/item?id=44057820) - [Gemini Diffusion](https://simonwillison.net/2025/May/21/gemini-diffusion/)
* [2025-05-22, 00:44:38](https://lobste.rs/s/asm7t8/typeid_lua) - [TypeID in Lua](https://push.cx/typeid-in-lua)
* [2025-05-22, 00:31:01](https://news.ycombinator.com/item?id=44057612) - [Display any CSV file as a searchable, filterable, pretty HTML table](https://github.com/derekeder/csv-to-html-table)
* [2025-05-22, 00:02:00](https://yro.slashdot.org/story/25/05/21/2055220/sec-sues-crypto-startup-unicoin-and-its-executives-for-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SEC Sues Crypto Startup Unicoin and Its Executives For Fraud](https://yro.slashdot.org/story/25/05/21/2055220/sec-sues-crypto-startup-unicoin-and-its-executives-for-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 23:58:50](https://lobste.rs/s/ih8sng/tales_from_mainframe_modernization) - [Tales From Mainframe Modernization](https://oppi.li/posts/tales_from_mainframe_modernization/)
* [2025-05-21, 23:20:00](https://yro.slashdot.org/story/25/05/21/2037230/quebec-to-impose-french-language-quotas-on-streaming-giants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Quebec To Impose French-Language Quotas On Streaming Giants](https://yro.slashdot.org/story/25/05/21/2037230/quebec-to-impose-french-language-quotas-on-streaming-giants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 23:11:00](https://soylentnews.org/article.pl?sid=25/05/21/127244&amp;from=rss) - [Opinion: Unending Ransomware Attacks Are a Symptom, Not the Illness](https://soylentnews.org/article.pl?sid=25/05/21/127244&amp;from=rss)
* [2025-05-21, 22:40:00](https://slashdot.org/story/25/05/21/2021255/the-information-microsoft-engineers-forced-to-dig-their-own-ai-graves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Information: Microsoft Engineers Forced To Dig Their Own AI Graves](https://slashdot.org/story/25/05/21/2021255/the-information-microsoft-engineers-forced-to-dig-their-own-ai-graves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 22:37:05](https://lobste.rs/s/dgxae8/chatgpt_heard_about_eagles_fans) - [ChatGPT Heard About Eagles Fans](https://www.dbreunig.com/2025/05/21/chatgpt-heard-about-eagles-fans.html)
* [2025-05-21, 22:35:56](https://lobste.rs/s/3u09yc/idiomatic_errors_clojure) - [Idiomatic errors in Clojure](https://www.daveliepmann.com/articles/idiomatic-clojure-errors.html)
* [2025-05-21, 22:00:00](https://it.slashdot.org/story/25/05/21/2031216/most-ai-chatbots-easily-tricked-into-giving-dangerous-responses-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Most AI Chatbots Easily Tricked Into Giving Dangerous Responses, Study Finds](https://it.slashdot.org/story/25/05/21/2031216/most-ai-chatbots-easily-tricked-into-giving-dangerous-responses-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 21:52:30](https://news.ycombinator.com/item?id=44056659) - [ITXPlus: A ITX Sized Macintosh Plus Logicboard Reproduction](https://68kmla.org/bb/index.php?threads/itxplus-a-itx-sized-macintosh-plus-logicboard-reproduction.49715/)
* [2025-05-21, 21:20:00](https://tech.slashdot.org/story/25/05/21/2010219/apollo-for-reddit-dev-christian-selig-to-join-digg-as-an-advisor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apollo For Reddit Dev Christian Selig To Join Digg As an Advisor](https://tech.slashdot.org/story/25/05/21/2010219/apollo-for-reddit-dev-christian-selig-to-join-digg-as-an-advisor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 21:18:07](https://news.ycombinator.com/item?id=44056407) - [The Machine Stops (1909)](https://standardebooks.org/ebooks/e-m-forster/short-fiction/text/the-machine-stops)
* [2025-05-21, 20:40:58](https://news.ycombinator.com/item?id=44056104) - [Rocky Linux 10 Will Support RISC-V](https://rockylinux.org/news/rockylinux-support-for-riscv)
* [2025-05-21, 20:40:00](https://slashdot.org/story/25/05/21/202218/android-xr-glasses-get-io-2025-demo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android XR Glasses Get I/O 2025 Demo](https://slashdot.org/story/25/05/21/202218/android-xr-glasses-get-io-2025-demo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 20:00:00](https://it.slashdot.org/story/25/05/21/1954240/microsoft-says-394000-windows-computers-infected-by-lumma-malware-globally?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Says 394,000 Windows Computers Infected By Lumma Malware Globally](https://it.slashdot.org/story/25/05/21/1954240/microsoft-says-394000-windows-computers-infected-by-lumma-malware-globally?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 19:34:20](https://news.ycombinator.com/item?id=44055347) - [For algorithms, a little memory outweighs a lot of time](https://www.quantamagazine.org/for-algorithms-a-little-memory-outweighs-a-lot-of-time-20250521/)
* [2025-05-21, 18:45:00](https://hardware.slashdot.org/story/25/05/21/1844241/ai-set-to-consume-electricity-equivalent-to-22-of-us-homes-by-2028-new-analysis-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Set To Consume Electricity Equivalent To 22% of US Homes By 2028, New Analysis Says](https://hardware.slashdot.org/story/25/05/21/1844241/ai-set-to-consume-electricity-equivalent-to-22-of-us-homes-by-2028-new-analysis-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 18:29:00](https://soylentnews.org/article.pl?sid=25/05/21/1154206&amp;from=rss) - [\&quot;Big Surprise\&quot;: Astronomers Find Planet in Perpendicular Orbit Around Pair of Stars](https://soylentnews.org/article.pl?sid=25/05/21/1154206&amp;from=rss)
* [2025-05-21, 18:05:00](https://news.slashdot.org/story/25/05/21/184249/why-does-the-us-always-run-a-trade-deficit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Does the US Always Run a Trade Deficit?](https://news.slashdot.org/story/25/05/21/184249/why-does-the-us-always-run-a-trade-deficit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 17:53:40](https://news.ycombinator.com/item?id=44054185) - [An upgraded dev experience in Google AI Studio](https://developers.googleblog.com/en/google-ai-studio-native-code-generation-agentic-tools-upgrade/)
* [2025-05-21, 17:18:52](https://news.ycombinator.com/item?id=44053744) - [LLM function calls don&apos;t scale; code orchestration is simpler, more effective](https://jngiam.bearblog.dev/mcp-large-data/)
* [2025-05-21, 17:05:45](https://news.ycombinator.com/item?id=44053560) - [Collaborative Text Editing Without CRDTs or OT](https://mattweidner.com/2025/05/21/text-without-crdts.html)
* [2025-05-21, 17:01:35](https://news.ycombinator.com/item?id=44053518) - [OpenAI to buy AI startup from Jony Ive](https://www.bloomberg.com/news/articles/2025-05-21/openai-to-buy-apple-veteran-jony-ive-s-ai-device-startup-in-6-5-billion-deal)
* [2025-05-21, 16:59:08](https://lobste.rs/s/m3wugb/my_technological_regrets) - [My Technological Regrets](https://jezenthomas.com/2025/01/my-technological-regrets/)
* [2025-05-21, 16:18:30](https://lobste.rs/s/nxroup/introduction_bases_obsidian_help) - [Introduction to Bases - Obsidian Help](https://help.obsidian.md/bases)
* [2025-05-21, 15:33:09](https://lobste.rs/s/eyceuf/vim_vs_kakoune_puzzles) - [Vim vs. Kakoune puzzles](https://strongly-typed-thoughts.net/blog/vim-kakoune-puzzles-2025)
* [2025-05-21, 15:30:47](https://lobste.rs/s/sn6wch/introducing_converse_11_major_leap) - [Introducing Converse 11: A Major Leap Forward for XMPP Webchat](https://opkode.com/blog/2025-05-21-converse-11/)
* [2025-05-21, 14:39:37](https://news.ycombinator.com/item?id=44051958) - [Animated Factorization (2012)](http://www.datapointed.net/visualizations/math/factorization/animated-diagrams/)
* [2025-05-21, 14:21:10](https://news.ycombinator.com/item?id=44051733) - [Devstral](https://mistral.ai/news/devstral)
* [2025-05-21, 14:10:03](https://lobste.rs/s/84kjsg/functional_hash_tables_explained) - [Functional hash tables explained](https://spritely.institute/news/functional-hash-tables-explained.html)
* [2025-05-21, 13:42:00](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss) - [Annual Tech Waste Footprint Per Person is 11.2 Kg](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss)
* [2025-05-21, 13:26:12](https://lobste.rs/s/rff4fc/artiflakery_easy_way_distribute_static) - [Artiflakery, an easy way to distribute static Nix flake artifacts](https://luj.fr/blog/artiflakery-webserver-flake-artifacts.html)
* [2025-05-21, 11:50:03](https://lobste.rs/s/7u3hhv/introducing_roto_compiled_scripting) - [Introducing Roto: A Compiled Scripting Language for Rust](https://blog.nlnetlabs.nl/introducing-roto-a-compiled-scripting-language-for-rust/)
* [2025-05-21, 11:38:07](https://lobste.rs/s/2lbj9k/we_did_math_on_ai_s_energy_footprint_here_s) - [We did the math on AI’s energy footprint. Here’s the story you haven’t heard](https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/)
* [2025-05-21, 10:59:56](https://lobste.rs/s/c6scqf/erlang_otp_28_0_release) - [Erlang/OTP 28.0 Release](https://www.erlang.org/news/180)
* [2025-05-21, 10:14:45](https://lobste.rs/s/96ttp9/reading_code_is_still_most_effective) - [Reading code is still the most effective method to debug multi-thread bug](https://nanxiao.me/en/reading-code-is-still-the-most-effective-method-to-debug-multi-thread-bug/)
* [2025-05-21, 08:58:00](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss) - [Apple is Developing Tech So Users Can Control Devices With Only Their Thoughts](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss)
* [2025-05-21, 08:05:13](https://news.ycombinator.com/item?id=44049310) - [How we made our optical character recognition (OCR) code more accurate](https://pieces.app/blog/how-we-made-our-optical-character-recognition-ocr-code-more-accurate)
* [2025-05-21, 04:14:00](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss) - [AWS Claims That Britain Needs More Nuclear Power for AI Datacenters](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss)
* [2025-05-21, 00:50:35](https://lobste.rs/s/dmx9e3/apply_coop_matching_people_with_jobs_fit) - [apply.coop - Matching people with jobs that fit their values &amp; passions](https://apply.coop)
* [2025-05-20, 23:27:00](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss) - [New Intel CPU Flaws Leak Sensitive Data From Privileged Memory](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss)
* [2025-05-20, 20:30:00](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss) - [UK-To-US English Converter Produced Amazing Mistakes](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss)
* [2025-05-20, 18:45:00](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss) - [Unlocking Voices: AR For Nonverbal Autism](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss)
* [2025-05-20, 14:00:00](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss) - [Regeneron to Buy 23andMe Out of Bankruptcy for $256 Million](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss)
* [2025-05-20, 09:16:00](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss) - [Space Computing Satellite Constellation Launched into Orbit](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss)
* [2025-05-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss) - [Meta Is Making Users Who Opted Out of AI Training Opt Out Again](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss)
* [2025-05-19, 23:49:00](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss) - [Nextcloud Cries Foul Over Google Play Store App Rejection](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss)
* [2025-05-19, 21:33:03](https://news.ycombinator.com/item?id=44035125) - [Hotspot: Linux `perf` GUI for performance analysis](https://github.com/KDAB/hotspot)
* [2025-05-19, 19:18:24](https://news.ycombinator.com/item?id=44033711) - [CERN gears up to ship antimatter across Europe](https://arstechnica.com/science/2025/05/cern-gears-up-to-ship-antimatter-across-europe/)
* [2025-05-19, 19:06:00](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss) - [The End of the Universe is Nigh!](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss)
* [2025-05-19, 14:24:00](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss) - [UK Retail Sector Hit by Ransomware Spree](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss)
* [2025-05-19, 09:39:00](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss) - [How a New Type of AI is Helping Police Skirt Facial Recognition Bans](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss)
* [2025-05-19, 08:39:31](https://news.ycombinator.com/item?id=44027690) - [A lost decade chasing distributed architectures for data analytics?](https://duckdb.org/2025/05/19/the-lost-decade-of-small-data.html)
* [2025-05-19, 07:25:14](https://news.ycombinator.com/item?id=44027278) - [Show HN: Forge – Secure, Multi-Tenant GitHub Actions Runners on K8s or EC2](https://github.com/cisco-open/forge)
* [2025-05-19, 04:54:00](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss) - [The Day Grok Lost its Mind](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss)
* [2025-05-19, 03:44:30](https://news.ycombinator.com/item?id=44026364) - [Four years of sight reading practice](https://sandrock.co.za/carl/2025/05/four-years-of-sight-reading-pracice/)
* [2025-05-19, 00:35:02](https://news.ycombinator.com/item?id=44025459) - [Gemini figured out my nephew’s name](https://blog.nawaz.org/posts/2025/May/gemini-figured-out-my-nephews-name/)
* [2025-05-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss) - [Mars May Have Vast Underground Oceans](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss)
* [2025-05-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss) - [U.S. Inks Bill to Force Geo-Tracking Tech for High-End Gaming and AI GPUs](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss)
* [2025-05-18, 14:38:00](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss) - [NASA Keeps Ancient Voyager 1 Spacecraft Alive With Hail Mary Thruster Fix](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss)
* [2025-05-18, 09:53:00](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss) - [White House Scraps Plan to Block Data Brokers From Selling Americans’ Sensitive Data](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss)
* [2025-05-18, 09:32:39](https://news.ycombinator.com/item?id=44020107) - [Inigo Quilez: computer graphics, mathematics, shaders, fractals, demoscene](https://iquilezles.org/articles/)
* [2025-05-18, 05:12:00](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss) - [China&apos;s Hygon Details C86-5G: A 128-Core X86 CPU with Advanced Features and Four-Way SMT](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss)
* [2025-05-18, 00:24:00](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss) - [Oniux by Tor: Isolating Linux Applications at the Kernel Level for Secure Connections](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss)
