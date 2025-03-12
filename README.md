# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Google's New Robot AI Can Fold Delicate Origami, Close Zipper Bags](https://hardware.slashdot.org/story/25/03/12/2018222/googles-new-robot-ai-can-fold-delicate-origami-close-zipper-bags?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43347306))

* [D-Wave Claims 'Quantum Supremacy,' Beating Traditional Computers](https://tech.slashdot.org/story/25/03/12/1835207/d-wave-claims-quantum-supremacy-beating-traditional-computers?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43346864))

* [TypeScript 7: 10x Speedup and the Go Language](https://dev.to/anthonymax/typescript-7-10x-speedup-and-the-go-language-1mkf) ([comments](https://lobste.rs/s/bherlz/typescript_7_10x_speedup_go_language))

* [Experiment with Gemini 2.0 Flash native image generation](https://developers.googleblog.com/en/experiment-with-gemini-20-flash-native-image-generation) ([comments](https://news.ycombinator.com/item?id=43344685))

* [A Perplexing Javascript Parsing Puzzle](https://www.hillelwayne.com/post/javascript-puzzle/) ([comments](https://lobste.rs/s/icbgrq/perplexing_javascript_parsing_puzzle))

## Notable Appointments and Decisions

* [Intel Appoints Lip-Bu Tan As CEO](https://slashdot.org/story/25/03/12/2118219/intel-appoints-lip-bu-tan-as-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43347369))

* [Rules for Portable Batteries on Planes Are Changing.](https://it.slashdot.org/story/25/03/12/1717207/rules-for-portable-batteries-on-planes-are-changing?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43346431))

* [IBM CEO Doesn't Think AI Will Replace Programmers Anytime Soon](https://developers.slashdot.org/story/25/03/12/1448242/ibm-ceo-doesnt-think-ai-will-replace-programmers-anytime-soon?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43345297))

## Life and Legacy

* [Mark Klein, AT&T whistleblower who revealed NSA mass spying, has died](https://www.eff.org/deeplinks/2025/03/memoriam-mark-klein-att-whistleblower-about-nsa-mass-spying) ([comments](https://news.ycombinator.com/item?id=43347662))

* [Chris Moore, illustrator for classic sci-fi books, has died](https://www.nytimes.com/2025/03/12/arts/chris-moore-dead.html) ([comments](https://news.ycombinator.com/item?id=43347628))

* [Political Poll News Site 538 to Close Amid Larger Shuttering Across ABC and Disney](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss) ([comments](https://news.ycombinator.com/item?id=43340196))

## Tech Development and Engineering

* [I Built a Mechanical Calculator [video]](https://www.youtube.com/watch?v=E0pJST5mL3A) ([comments](https://news.ycombinator.com/item?id=43347874))

* [The DuckDB Local UI](https://duckdb.org/2025/03/12/duckdb-ui.html) ([comments](https://lobste.rs/s/v7qfbz/duckdb_local_ui))

* [Reverse engineering OpenAI code execution to make it run C and JavaScript](https://twitter.com/benswerd/status/1899853533761200300) ([comments](https://news.ycombinator.com/item?id=43344673))

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

* [2025-03-12, 21:31:31](https://news.ycombinator.com/item?id=43347874) - [I Built a Mechanical Calculator [video]](https://www.youtube.com/watch?v=E0pJST5mL3A)
* [2025-03-12, 21:30:00](https://slashdot.org/story/25/03/12/2118219/intel-appoints-lip-bu-tan-as-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Intel Appoints Lip-Bu Tan As CEO](https://slashdot.org/story/25/03/12/2118219/intel-appoints-lip-bu-tan-as-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 21:12:05](https://news.ycombinator.com/item?id=43347724) - [The Night Watch (2013) [pdf]](https://www.usenix.org/system/files/1311_05-08_mickens.pdf)
* [2025-03-12, 21:05:08](https://news.ycombinator.com/item?id=43347662) - [Mark Klein, AT&T whistleblower who revealed NSA mass spying, has died](https://www.eff.org/deeplinks/2025/03/memoriam-mark-klein-att-whistleblower-about-nsa-mass-spying)
* [2025-03-12, 21:01:26](https://news.ycombinator.com/item?id=43347628) - [Chris Moore, illustrator for classic sci-fi books, has died](https://www.nytimes.com/2025/03/12/arts/chris-moore-dead.html)
* [2025-03-12, 20:50:00](https://hardware.slashdot.org/story/25/03/12/2018222/googles-new-robot-ai-can-fold-delicate-origami-close-zipper-bags?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google's New Robot AI Can Fold Delicate Origami, Close Zipper Bags](https://hardware.slashdot.org/story/25/03/12/2018222/googles-new-robot-ai-can-fold-delicate-origami-close-zipper-bags?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 20:31:39](https://news.ycombinator.com/item?id=43347369) - [Intel appoints Lip-Bu Tan as its CEO](https://www.reuters.com/technology/us-chipmaker-intel-appoints-lip-bu-tan-its-ceo-2025-03-12/)
* [2025-03-12, 20:23:52](https://news.ycombinator.com/item?id=43347306) - [Show HN: Time Portal – Get dropped into history, guess where you landed](https://www.eggnog.ai/entertimeportal)
* [2025-03-12, 20:10:00](https://slashdot.org/story/25/03/12/1839244/the-curious-surge-of-productivity-in-us-restaurants?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Curious Surge of Productivity in US Restaurants](https://slashdot.org/story/25/03/12/1839244/the-curious-surge-of-productivity-in-us-restaurants?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 20:02:38](https://lobste.rs/s/exrq7d/semgrep_upgrading_semgrep_from_ocaml_4) - [Semgrep | Upgrading Semgrep from OCaml 4 to OCaml 5](https://semgrep.dev/blog/2025/upgrading-semgrep-from-ocaml-4-to-ocaml-5/)
* [2025-03-12, 19:39:29](https://lobste.rs/s/bherlz/typescript_7_10x_speedup_go_language) - [TypeScript 7: 10x Speedup and the Go Language](https://dev.to/anthonymax/typescript-7-10x-speedup-and-the-go-language-1mkf)
* [2025-03-12, 19:35:15](https://news.ycombinator.com/item?id=43346864) - [Zinc, a systems programming language prototype](https://sr.ht/~oconnor0/zinc/)
* [2025-03-12, 19:30:00](https://tech.slashdot.org/story/25/03/12/1835207/d-wave-claims-quantum-supremacy-beating-traditional-computers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [D-Wave Claims 'Quantum Supremacy,' Beating Traditional Computers](https://tech.slashdot.org/story/25/03/12/1835207/d-wave-claims-quantum-supremacy-beating-traditional-computers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 19:29:41](https://news.ycombinator.com/item?id=43346816) - [Iconography of the PuTTY tools](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/putty-icons/)
* [2025-03-12, 19:24:56](https://lobste.rs/s/romh86/guile_hoot_with_fibers) - [Guile Hoot with Fibers](https://afmoreno.srht.site/blog/guile-hoot-fibers.html)
* [2025-03-12, 19:09:00](https://soylentnews.org/article.pl?sid=25/03/12/1129229&from=rss) - [DOGE Axes CISA ‘Red Team’ Staffers Amid Ongoing Federal Cuts](https://soylentnews.org/article.pl?sid=25/03/12/1129229&from=rss)
* [2025-03-12, 18:50:00](https://it.slashdot.org/story/25/03/12/1717207/rules-for-portable-batteries-on-planes-are-changing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Rules for Portable Batteries on Planes Are Changing.](https://it.slashdot.org/story/25/03/12/1717207/rules-for-portable-batteries-on-planes-are-changing?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 18:47:17](https://news.ycombinator.com/item?id=43346431) - [Inline Evaluation Adventure](https://rigsomelight.com/2025/03/12/inline-eval-adventure.html)
* [2025-03-12, 18:44:55](https://lobste.rs/s/ec1z6z/inline_evaluation_adventure) - [Inline Evaluation Adventure](https://rigsomelight.com/2025/03/12/inline-eval-adventure.html)
* [2025-03-12, 18:35:32](https://lobste.rs/s/v8vnjo/dropping_risc_v_support) - [Dropping RISC-V support](https://chimera-linux.org/news/2025/03/dropping-riscv.html)
* [2025-03-12, 18:10:00](https://tech.slashdot.org/story/25/03/12/1710248/global-smartwatch-sales-fall-for-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Global Smartwatch Sales Fall For First Time](https://tech.slashdot.org/story/25/03/12/1710248/global-smartwatch-sales-fall-for-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 18:05:05](https://lobste.rs/s/9bgx8t/why_i_stopped_everything_started_writing) - [Why I stopped everything and started writing C again](https://www.kmx.io/blog/why-stopped-everything-and-started-writing-C-again)
* [2025-03-12, 17:37:32](https://lobste.rs/s/vh3n7k/codebase_national_lab_i_worked_at) - [The Codebase of a National Lab I Worked At](https://mirawelner.com/posts/fed_code.html)
* [2025-03-12, 17:30:00](https://tech.slashdot.org/story/25/03/12/176223/ftc-asks-to-delay-amazon-prime-deceptive-practices-case-citing-staffing-shortfalls?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FTC Asks To Delay Amazon Prime Deceptive Practices Case, Citing Staffing Shortfalls](https://tech.slashdot.org/story/25/03/12/176223/ftc-asks-to-delay-amazon-prime-deceptive-practices-case-citing-staffing-shortfalls?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 17:14:16](https://lobste.rs/s/nno4i5/carefully_purposefully_oxidising) - [Carefully But Purposefully Oxidising Ubuntu](https://jnsgr.uk/2025/03/carefully-but-purposefully-oxidising-ubuntu/)
* [2025-03-12, 17:03:35](https://lobste.rs/s/1jwqtt/constant_time_code_pessimist_case) - [Constant-Time Code: The Pessimist Case](https://eprint.iacr.org/2025/435)
* [2025-03-12, 17:01:02](https://news.ycombinator.com/item?id=43345297) - [Artie (YC S23) Is Hiring Engineer #3](https://www.ycombinator.com/companies/artie/jobs/Vz704T1-founding-engineer-distributed-systems)
* [2025-03-12, 17:00:28](https://news.ycombinator.com/item?id=43345285) - [Shenmue (1999) reverse engineering reveals possible sun position oversight](https://wulinshu.com/2025/03/11/reverse-engineering-adventures-3-bug-or-not-bug/)
* [2025-03-12, 16:54:00](https://news.slashdot.org/story/25/03/12/1654217/us-schools-deploy-ai-surveillance-amid-security-lapses-privacy-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Schools Deploy AI Surveillance Amid Security Lapses, Privacy Concerns](https://news.slashdot.org/story/25/03/12/1654217/us-schools-deploy-ai-surveillance-amid-security-lapses-privacy-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 16:21:24](https://lobste.rs/s/8tz0cn/high_performance_png_decoding) - [High-performance PNG decoding](https://blend2d.com/blog/png-image-codec.html)
* [2025-03-12, 16:07:35](https://news.ycombinator.com/item?id=43344703) - [The cultural divide between mathematics and AI](https://sugaku.net/content/understanding-the-cultural-divide-between-mathematics-and-ai/)
* [2025-03-12, 16:06:18](https://news.ycombinator.com/item?id=43344685) - [Experiment with Gemini 2.0 Flash native image generation](https://developers.googleblog.com/en/experiment-with-gemini-20-flash-native-image-generation/)
* [2025-03-12, 16:04:54](https://news.ycombinator.com/item?id=43344673) - [Reverse engineering OpenAI code execution to make it run C and JavaScript](https://twitter.com/benswerd/status/1899853533761200300)
* [2025-03-12, 16:00:00](https://developers.slashdot.org/story/25/03/12/1448242/ibm-ceo-doesnt-think-ai-will-replace-programmers-anytime-soon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [IBM CEO Doesn't Think AI Will Replace Programmers Anytime Soon](https://developers.slashdot.org/story/25/03/12/1448242/ibm-ceo-doesnt-think-ai-will-replace-programmers-anytime-soon?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 15:20:00](https://hardware.slashdot.org/story/25/03/12/1437241/roomba-maker-irobot-warns-of-possible-shutdown-within-12-months?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Roomba-maker iRobot Warns of Possible Shutdown Within 12 Months](https://hardware.slashdot.org/story/25/03/12/1437241/roomba-maker-irobot-warns-of-possible-shutdown-within-12-months?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 15:09:09](https://news.ycombinator.com/item?id=43344082) - [Gemini Robotics](https://deepmind.google/discover/blog/gemini-robotics-brings-ai-into-the-physical-world/)
* [2025-03-12, 14:44:54](https://lobste.rs/s/icbgrq/perplexing_javascript_parsing_puzzle) - [A Perplexing Javascript Parsing Puzzle](https://www.hillelwayne.com/post/javascript-puzzle/)
* [2025-03-12, 14:40:00](https://apple.slashdot.org/story/25/03/12/1416206/morgan-stanley-cuts-iphone-shipment-forecast-on-siri-upgrade-delay-china-tariffs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Morgan Stanley Cuts iPhone Shipment Forecast on Siri Upgrade Delay, China Tariffs](https://apple.slashdot.org/story/25/03/12/1416206/morgan-stanley-cuts-iphone-shipment-forecast-on-siri-upgrade-delay-china-tariffs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 14:30:22](https://lobste.rs/s/0dqswp/hacking_gpo_746_rotary_phone) - [Hacking a GPO 746 rotary phone](https://blog.yaymukund.com/posts/hacking-a-gpo-746-rotary-phone/)
* [2025-03-12, 14:21:00](https://soylentnews.org/article.pl?sid=25/03/11/1158203&from=rss) - [Where Will the 'Blood Moon' Total Lunar Eclipse be Visible in March 2025?](https://soylentnews.org/article.pl?sid=25/03/11/1158203&from=rss)
* [2025-03-12, 14:10:08](https://lobste.rs/s/v7qfbz/duckdb_local_ui) - [The DuckDB Local UI](https://duckdb.org/2025/03/12/duckdb-ui.html)
* [2025-03-12, 14:00:00](https://hardware.slashdot.org/story/25/03/12/1350256/amazon-google-and-meta-support-tripling-nuclear-power-by-2050?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon, Google and Meta Support Tripling Nuclear Power By 2050](https://hardware.slashdot.org/story/25/03/12/1350256/amazon-google-and-meta-support-tripling-nuclear-power-by-2050?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 13:55:43](https://lobste.rs/s/iqtaie/haiku_activity_contract_report_february) - [Haiku Activity & Contract Report, February 2025](https://www.haiku-os.org/blog/waddlesplash/2025-03-11-haiku_activity_contract_report_february_2025/)
* [2025-03-12, 13:00:00](https://yro.slashdot.org/story/25/03/11/225252/allstate-insurance-sued-for-delivering-personal-info-in-plaintext?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Allstate Insurance Sued For Delivering Personal Info In Plaintext](https://yro.slashdot.org/story/25/03/11/225252/allstate-insurance-sued-for-delivering-personal-info-in-plaintext?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 12:56:01](https://news.ycombinator.com/item?id=43342712) - [The DuckDB Local UI](https://duckdb.org/2025/03/12/duckdb-ui.html)
* [2025-03-12, 12:08:43](https://news.ycombinator.com/item?id=43342361) - [Peer-to-peer file transfers in the browser](https://github.com/kern/filepizza)
* [2025-03-12, 11:47:00](https://lobste.rs/s/35dgcs/rmk_rust_keyboard_firmware_library_with) - [rmk: Rust keyboard firmware library with layers, macros, real-time keymap editing, wireless(BLE) and split support](https://github.com/HaoboGu/rmk)
* [2025-03-12, 11:42:16](https://news.ycombinator.com/item?id=43342178) - [The Future Is Niri](https://ersei.net/en/blog/niri)
* [2025-03-12, 11:24:40](https://news.ycombinator.com/item?id=43342071) - [First ammonia-fueled ship hits a snag](https://spectrum.ieee.org/ammonia-fuel-2671266100)
* [2025-03-12, 10:00:00](https://hardware.slashdot.org/story/25/03/11/2133237/solar-adds-more-new-capacity-to-the-us-grid-in-2024-than-any-energy-source-in-20-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Solar Adds More New Capacity To the US Grid In 2024 Than Any Energy Source In 20 Years](https://hardware.slashdot.org/story/25/03/11/2133237/solar-adds-more-new-capacity-to-the-us-grid-in-2024-than-any-energy-source-in-20-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 09:35:00](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss) - [PHP-CGI RCE Flaw Exploited in Attacks on Japan's Tech, Telecom, and E-Commerce Sectors](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss)
* [2025-03-12, 07:38:35](https://news.ycombinator.com/item?id=43340731) - [I stopped everything and started writing C again](https://www.kmx.io/blog/why-stopped-everything-and-started-writing-C-again)
* [2025-03-12, 07:00:00](https://science.slashdot.org/story/25/03/11/2159228/anonymous-sources-starship-needs-a-major-rebuild-after-two-consecutive-failures?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anonymous Sources: Starship Needs a Major Rebuild After Two Consecutive Failures](https://science.slashdot.org/story/25/03/11/2159228/anonymous-sources-starship-needs-a-major-rebuild-after-two-consecutive-failures?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 06:59:39](https://lobste.rs/s/b6vdmd/on_insecurity_telecom_stacks_wake_salt) - [On The Insecurity of Telecom Stacks in the Wake of Salt Typhoon](https://soatok.blog/2025/03/12/on-the-insecurity-of-telecom-stacks-in-the-wake-of-salt-typhoon/)
* [2025-03-12, 06:39:17](https://news.ycombinator.com/item?id=43340491) - [Gemma 3 Technical Report [pdf]](https://storage.googleapis.com/deepmind-media/gemma/Gemma3Report.pdf)
* [2025-03-12, 05:21:33](https://news.ycombinator.com/item?id=43340196) - [The insecurity of telecom stacks in the wake of Salt Typhoon](https://soatok.blog/2025/03/12/on-the-insecurity-of-telecom-stacks-in-the-wake-of-salt-typhoon/)
* [2025-03-12, 04:50:00](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss) - [Political Poll News Site 538 to Close Amid Larger Shuttering Across ABC and Disney](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss)
* [2025-03-12, 04:48:38](https://lobste.rs/s/z66ftn/art_formatting_code) - [The Art of Formatting Code](https://mcyoung.xyz/2025/03/11/formatters/)
* [2025-03-12, 02:17:09](https://lobste.rs/s/ejs3uh/future_is_niri) - [The Future is Niri](https://ersei.net/en/blog/niri)
* [2025-03-12, 01:56:30](https://lobste.rs/s/1cqlzd/perspectives_from_technical_university) - [Perspectives from the Technical University of Munich](https://mirawelner.com/posts/TUM_thoughts.html)
* [2025-03-12, 01:17:25](https://lobste.rs/s/u09ig5/translating_bzip2_with_c2rust) - [Translating bzip2 with c2rust](https://tweedegolf.nl/en/blog/151/translating-bzip2-with-c2rust)
* [2025-03-12, 00:05:00](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss) - [Stars Made From Only Primordial Gas Finally Spotted](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss)
* [2025-03-11, 23:05:11](https://lobste.rs/s/34dsf7/re_writing_interpreter_rust) - [(Re)writing an interpreter in Rust](https://www.dannyvankooten.com/blog/2022/rewriting-interpreter-rust/)
* [2025-03-11, 22:18:42](https://news.ycombinator.com/item?id=43337703) - [The Startup CTO's Handbook](https://github.com/ZachGoldberg/Startup-CTO-Handbook/blob/main/StartupCTOHandbook.md)
* [2025-03-11, 19:57:53](https://lobste.rs/s/jgpcfa/rsync_over_grpc_demo_program_rsync_file) - [rsync-over-grpc: demo program: rsync file transfer (with the gokrazy/rsync module) over gRPC transport](https://github.com/stapelberg/rsync-over-grpc)
* [2025-03-11, 19:23:00](https://soylentnews.org/article.pl?sid=25/03/11/1134214&from=rss) - [How to Build a Static Website on a Raspberry Pi](https://soylentnews.org/article.pl?sid=25/03/11/1134214&from=rss)
* [2025-03-11, 14:41:12](https://lobste.rs/s/3q0ei5/10x_faster_typescript) - [A 10x Faster TypeScript](https://devblogs.microsoft.com/typescript/typescript-native-port/)
* [2025-03-11, 14:34:00](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss) - [Musk Complains: X Site Under Attack, and DOGE Interferes With His Job](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss)
* [2025-03-11, 14:16:54](https://lobste.rs/s/gvkxlf/here_s_how_i_use_llms_help_me_write_code) - [Here’s how I use LLMs to help me write code](https://simonwillison.net/2025/Mar/11/using-llms-for-code/)
* [2025-03-11, 09:50:00](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss) - [A Paleoarchaean Impact Crater in the Pilbara Craton, Western Australia](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss)
* [2025-03-11, 09:45:00](https://news.ycombinator.com/item?id=43330782) - [Fast-PNG: PNG image decoder and encoder](https://github.com/image-js/fast-png)
* [2025-03-11, 05:06:00](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss) - [Microsoft Admits GitHub Used to Store Malware That Infected Almost a Million Devices](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss)
* [2025-03-11, 04:03:51](https://lobste.rs/s/jalbsf/how_i_built_this_website_on_raspberry_pi) - [How I built this website on a Raspberry Pi](https://mirawelner.com/posts/website_howto.html)
* [2025-03-11, 00:20:00](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss) - [US Supreme Court Weakens Rules on Discharge of Raw Sewage Into Water Supplies](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss)
* [2025-03-10, 19:35:00](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss) - [Undocumented Commands Found in Bluetooth Chip Used by a Billion Devices](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss)
* [2025-03-10, 14:46:00](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss) - [How Tiny Can You Scale It Until Things Won't Work?](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss)
* [2025-03-10, 09:27:00](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss) - [CISA Tags Windows, Cisco Vulnerabilities as Actively Exploited](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss)
* [2025-03-10, 04:40:00](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss) - ['Jetsons' Robot Finally Arrives: Sweater-Wearing Neo Gamma Android Helps With Household Chores](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss)
* [2025-03-10, 00:01:00](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss) - [Billions of Years Ago, Mars Featured Beaches Fit for a Vacation, Astronomers Say](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss)
* [2025-03-09, 19:18:00](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss) - [‘Slime’ Keeps the Brain Safe ― and Could Guard Against Ageing](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss)
* [2025-03-09, 15:10:38](https://news.ycombinator.com/item?id=43309696) - [Definite clause grammars and symbolic differentiation](https://bitsandtheorems.com/definite-clause-grammars-and-symbolic-differentiation/)
* [2025-03-09, 14:37:00](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss) - [Meet Rayhunter: A New Open Source Tool from EFF to Detect Cellular Spying](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss)
* [2025-03-09, 13:25:35](https://news.ycombinator.com/item?id=43308907) - [Building websites with lots of little HTML pages](https://blog.jim-nielsen.com/2025/lots-of-little-html-pages/)
* [2025-03-09, 11:53:58](https://news.ycombinator.com/item?id=43308278) - [Open-UI: Maintain an open standard for UI and promote its adherence and adoption](https://github.com/openui/open-ui)
* [2025-03-09, 09:53:00](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss) - [Asteroid Mining Startup Loses its Spacecraft Somewhere Beyond the Moon](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss)
* [2025-03-09, 09:23:39](https://news.ycombinator.com/item?id=43307563) - [Switching from Pyenv to Uv](https://bluesock.org/~willkg/blog/dev/switch_pyenv_to_uv.html)
* [2025-03-09, 07:01:25](https://news.ycombinator.com/item?id=43306916) - [Parnassus plays](https://en.wikipedia.org/wiki/Parnassus_plays)
* [2025-03-09, 05:21:41](https://news.ycombinator.com/item?id=43306514) - [Constant-Time Code: The Pessimist Case [pdf]](https://eprint.iacr.org/2025/435.pdf)
* [2025-03-09, 05:07:00](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss) - [Amid a Growing Measles Outbreak, Doctors Worry RFK is Sending the Wrong Message](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss)
* [2025-03-09, 00:23:00](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss) - [Some DOGE Staffers Are Drawing Six-Figure Government Salaries](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss)
* [2025-03-08, 19:41:00](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss) - [Alphabet's Taara Chip Uses Light Beams To Provide High-Speed Internet](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss)
* [2025-03-08, 15:37:00](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss) - [Temporary Problem with Stripe](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss)
* [2025-03-08, 14:52:00](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss) - [Hugging Face's Chief Science Officer Worries AI is Becoming 'Yes-Men on Servers'](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss)
* [2025-03-08, 10:07:00](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss) - [Eerily Realistic AI Voice Demo Sparks Amazement and Discomfort Online](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss)
* [2025-03-08, 05:22:00](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss) - [Apple Refuses to Break Encryption, Seeks Reversal of UK Demand for Backdoor](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss)
* [2025-03-08, 00:37:00](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss) - [The International Space Station Lacks Microbial Diversity. Is It Too Clean?](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss)
