# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Developments

* [How to Influence Query Planning in Postgresql](https://chriskiehl.com/article/query-plan-management) - Learn techniques for optimizing query plans in PostgreSQL by leveraging various customizable parameters. [Comments](https://lobste.rs/s/j9atea/how_influence_query_planning_postgresql).

* [OpenWrt 24.10.0 – First Stable Release](https://openwrt.org/releases/24.10/notes-24.10.0) - The OpenWrt team has announced its first stable release for version 24.10. [Comments](https://news.ycombinator.com/item?id=42958202).

* [Tips for more effective fuzz testing with AFL++](https://nullprogram.com/blog/2025/02/05/) - Improve your fuzz testing strategies using AFL++. [Comments](https://lobste.rs/s/3as5ex/tips_for_more_effective_fuzz_testing_with).

* [Gemini 2.0 is now available to everyone](https://blog.google/technology/google-deepmind/gemini-model-updates-february-2025/) - Google announces the availability of Gemini 2.0, a new model for advanced AI applications. [Comments](https://lobste.rs/s/f9biav/gemini_2_0_is_now_available_everyone).

* [Implementation of a RingBuffer in Java with optional FIFO like semantics](https://github.com/evolvedbinary/j8cu?tab=readme-ov-file#ring-buffer) - Explore this Java implementation for creating efficient data buffers. [Comments](https://lobste.rs/s/6cb3tb/implementation_ringbuffer_java_with).

## Security and Privacy

* [First OCR Spyware Breaches Both Apple and Google App Stores To Steal Crypto Wallet Phrases](https://it.slashdot.org/story/25/02/05/1826259/first-ocr-spyware-breaches-both-apple-and-google-app-stores-to-steal-crypto-wallet-phrases?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A newly discovered spyware exploits vulnerabilities in app stores to target cryptocurrency users. [Comments](https://news.ycombinator.com/item?id=42952605).

* [Researchers Link DeepSeek To Chinese Telecom Banned In US](https://yro.slashdot.org/story/25/02/05/2019200/researchers-link-deepseek-to-chinese-telecom-banned-in-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Research reveals connections between DeepSeek and Chinese telecom entities. [Comments](https://news.ycombinator.com/item?id=42955613).

* [Go Supply Chain Attack: Malicious Package Exploits Go Module](https://socket.dev/blog/malicious-package-exploits-go-module-proxy-caching-for-persistence) - A malicious package within Go Modules underscores the challenges of securing dependency chains. [Comments](https://lobste.rs/s/tdnc9j/go_supply_chain_attack_malicious_package).

## Artificial Intelligence and Machine Learning

* [The Evolving Landscape of LLM Evaluation](https://www.ruder.io/the-evolving-landscape-of-llm-evaluation/) - This piece analyzes advancements and methodologies in evaluating large language models. [Comments](https://lobste.rs/s/rwgppq/evolving_landscape_llm_evaluation).

* [Andrej Karpathy: Deep Dive into LLMs Like ChatGPT [video]](https://www.youtube.com/watch?v=7xTGNNLPyMI) - Andrej Karpathy provides in-depth insights on how large language models like ChatGPT function. [Comments](https://news.ycombinator.com/item?id=42952960).

## Unconventional and Creative Projects

* [I wrote a screenplay for a programming language introduction](https://jan.miksovsky.com/) - Using storytelling to teach computer programming. [Comments](https://news.ycombinator.com/item?id=42959626).

* [Programming SDF Animations of Rick and Morty](https://danielchasehooper.com/posts/code-animated-rick/) - An innovative approach to creating animations using code. [Comments](https://news.ycombinator.com/item?id=42958696).

* [A hexagonal-tiled cartogram for U.S. counties](https://www.jordanroga.com/blog/introducing-a-hexagonal-tiled-cartogram-for-u-s-counties) - A new and visually engaging way to represent U.S. county data. [Comments](https://news.ycombinator.com/item?id=42943271).

## Notable Industry and Market Trends

* [AMD Outsells Intel In the Datacenter For the First Time](https://hardware.slashdot.org/story/25/02/05/2327252/amd-outsells-intel-in-the-datacenter-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - AMD achieves a historic milestone in the datacenter market. [Comments](https://news.ycombinator.com/item?id=42952584).

* [Disney+ Lost 700,000 Subscribers From October-December 2024](https://entertainment.slashdot.org/story/25/02/06/0038245/disney-lost-700000-subscribers-from-october-december-2024?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Disney+ sees notable subscriber losses during the last quarter of 2024. [Comments](https://news.ycombinator.com/item?id=42958218).

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

* [2025-02-06, 06:54:45](https://lobste.rs/s/j9atea/how_influence_query_planning_postgresql) - [How to Influence Query Planning in Postgresql](https://chriskiehl.com/article/query-plan-management)
* [2025-02-06, 06:23:49](https://news.ycombinator.com/item?id=42959626) - [I wrote a screenplay for a programming language introduction](https://jan.miksovsky.com/)
* [2025-02-06, 05:13:01](https://lobste.rs/s/rwgppq/evolving_landscape_llm_evaluation) - [The Evolving Landscape of LLM Evaluation](https://www.ruder.io/the-evolving-landscape-of-llm-evaluation/)
* [2025-02-06, 03:30:34](https://news.ycombinator.com/item?id=42958696) - [Programming SDF Animations of Rick and Morty](https://danielchasehooper.com/posts/code-animated-rick/)
* [2025-02-06, 03:30:00](https://tech.slashdot.org/story/25/02/06/0028228/lets-encrypt-is-ending-expiration-notice-emails?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Let's Encrypt Is Ending Expiration Notice Emails](https://tech.slashdot.org/story/25/02/06/0028228/lets-encrypt-is-ending-expiration-notice-emails?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 02:19:49](https://news.ycombinator.com/item?id=42958218) - [Mystery brain disease patients in New Brunswick say they welcome investigation](https://www.ctvnews.ca/atlantic/new-brunswick/article/good-first-step-nb-mystery-brain-disease-patients-welcome-new-investigation/)
* [2025-02-06, 02:17:47](https://news.ycombinator.com/item?id=42958202) - [OpenWrt 24.10.0 – First Stable Release](https://openwrt.org/releases/24.10/notes-24.10.0)
* [2025-02-06, 02:13:00](https://soylentnews.org/article.pl?sid=25/02/04/1511202&from=rss) - [These Smart Glasses Help People With Macular Degeneration By Eliminating Blind Spots](https://soylentnews.org/article.pl?sid=25/02/04/1511202&from=rss)
* [2025-02-06, 02:10:00](https://entertainment.slashdot.org/story/25/02/06/0038245/disney-lost-700000-subscribers-from-october-december-2024?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Disney+ Lost 700,000 Subscribers From October-December 2024](https://entertainment.slashdot.org/story/25/02/06/0038245/disney-lost-700000-subscribers-from-october-december-2024?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 01:52:13](https://news.ycombinator.com/item?id=42958012) - [Deep Reinforcement Learning: Pong from Pixels (2016)](http://karpathy.github.io/2016/05/31/rl/)
* [2025-02-06, 01:30:00](https://developers.slashdot.org/story/25/02/05/2345236/oracle-starts-laying-mines-in-javascript-trademark-battle?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Oracle Starts Laying Mines In JavaScript Trademark Battle](https://developers.slashdot.org/story/25/02/05/2345236/oracle-starts-laying-mines-in-javascript-trademark-battle?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 01:28:17](https://news.ycombinator.com/item?id=42957823) - [I believe 6502 instruction set is a good first assembly language](https://nemanjatrifunovic.substack.com/p/6502-is-a-good-starting-point-for)
* [2025-02-06, 01:13:32](https://news.ycombinator.com/item?id=42957726) - [Microplastics in the human brain](https://www.smithsonianmag.com/smart-news/the-human-brain-may-contain-as-much-as-a-spoons-worth-of-microplastics-new-research-suggests-180985995/)
* [2025-02-06, 01:11:55](https://lobste.rs/s/3as5ex/tips_for_more_effective_fuzz_testing_with) - [Tips for more effective fuzz testing with AFL++](https://nullprogram.com/blog/2025/02/05/)
* [2025-02-06, 00:50:00](https://hardware.slashdot.org/story/25/02/05/2327252/amd-outsells-intel-in-the-datacenter-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AMD Outsells Intel In the Datacenter For the First Time](https://hardware.slashdot.org/story/25/02/05/2327252/amd-outsells-intel-in-the-datacenter-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 00:02:00](https://yro.slashdot.org/story/25/02/05/2019200/researchers-link-deepseek-to-chinese-telecom-banned-in-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Researchers Link DeepSeek To Chinese Telecom Banned In US](https://yro.slashdot.org/story/25/02/05/2019200/researchers-link-deepseek-to-chinese-telecom-banned-in-us?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 23:37:00](https://tech.slashdot.org/story/25/02/05/2336200/google-says-commercial-quantum-computing-applications-arriving-within-5-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Says Commercial Quantum Computing Applications Arriving Within 5 Years](https://tech.slashdot.org/story/25/02/05/2336200/google-says-commercial-quantum-computing-applications-arriving-within-5-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 22:40:00](https://mobile.slashdot.org/story/25/02/05/205231/mobile-ban-in-schools-not-improving-grades-or-behavior-study-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mobile Ban In Schools Not Improving Grades or Behavior, Study Suggests](https://mobile.slashdot.org/story/25/02/05/205231/mobile-ban-in-schools-not-improving-grades-or-behavior-study-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 22:02:00](https://mobile.slashdot.org/story/25/02/05/200253/robocallers-posing-as-fcc-staff-blocked-after-robocalling-real-fcc-staff?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Robocallers Posing As FCC Staff Blocked After Robocalling Real FCC Staff](https://mobile.slashdot.org/story/25/02/05/200253/robocallers-posing-as-fcc-staff-blocked-after-robocalling-real-fcc-staff?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 21:42:20](https://news.ycombinator.com/item?id=42955613) - [It's unlikely that there will be any further releases of mt32-pi](https://github.com/dwhinham/mt32-pi/blob/075b52809e77420c6e80828825fe42430336b369/README.md)
* [2025-02-05, 21:24:00](https://soylentnews.org/article.pl?sid=25/02/04/157244&from=rss) - [Giant Study Questions Link Between Autism and Maternal Health](https://soylentnews.org/article.pl?sid=25/02/04/157244&from=rss)
* [2025-02-05, 21:23:09](https://news.ycombinator.com/item?id=42955356) - [News from Scroll 5](https://scrollprize.substack.com/p/exciting-news-from-scroll-5)
* [2025-02-05, 21:23:00](https://slashdot.org/story/25/02/05/1830205/workday-to-cut-nearly-2000-workers-on-profitability-focus?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Workday To Cut Nearly 2,000 Workers on Profitability Focus](https://slashdot.org/story/25/02/05/1830205/workday-to-cut-nearly-2000-workers-on-profitability-focus?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 21:10:25](https://news.ycombinator.com/item?id=42955176) - [Okta Bcrypt incident lessons for designing better APIs](https://n0rdy.foo/posts/20250121/okta-bcrypt-lessons-for-better-apis/)
* [2025-02-05, 21:08:16](https://lobste.rs/s/ikydnz/versioning_versus_coordination) - [Versioning versus Coordination](https://brooker.co.za/blog/2025/02/04/versioning.html)
* [2025-02-05, 20:42:00](https://it.slashdot.org/story/25/02/05/1826259/first-ocr-spyware-breaches-both-apple-and-google-app-stores-to-steal-crypto-wallet-phrases?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [First OCR Spyware Breaches Both Apple and Google App Stores To Steal Crypto Wallet Phrases](https://it.slashdot.org/story/25/02/05/1826259/first-ocr-spyware-breaches-both-apple-and-google-app-stores-to-steal-crypto-wallet-phrases?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 20:01:00](https://news.slashdot.org/story/25/02/05/1819218/im-done-with-ubuntu?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['I'm Done With Ubuntu'](https://news.slashdot.org/story/25/02/05/1819218/im-done-with-ubuntu?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 19:28:56](https://lobste.rs/s/cyotj6/all_bear_blogs_can_use_hashtags_now_via) - [All Bear blogs can use hashtags now via Octothorpes](https://octothorpes.bearblog.dev/you-can-use-hashtags-on-your-bear-blog-now/)
* [2025-02-05, 19:21:34](https://lobste.rs/s/khlha3/sudoku_affair) - [the sudoku affair](https://explaining.software/archive/the-sudoku-affair/)
* [2025-02-05, 19:20:00](https://tech.slashdot.org/story/25/02/05/1458211/nissan-set-to-step-back-from-merger-with-honda?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nissan Set To Step Back From Merger With Honda](https://tech.slashdot.org/story/25/02/05/1458211/nissan-set-to-step-back-from-merger-with-honda?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 19:08:12](https://news.ycombinator.com/item?id=42953508) - [Tell HN: Cloudflare is blocking Pale Moon and other non-mainstream browsers](https://news.ycombinator.com/item?id=42953508)
* [2025-02-05, 18:40:00](https://science.slashdot.org/story/25/02/05/1448222/the-long-quest-for-artificial-blood?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Long Quest for Artificial Blood](https://science.slashdot.org/story/25/02/05/1448222/the-long-quest-for-artificial-blood?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 18:37:49](https://lobste.rs/s/6cb3tb/implementation_ringbuffer_java_with) - [Implementation of a RingBuffer in Java with optional FIFO like semantics](https://github.com/evolvedbinary/j8cu?tab=readme-ov-file#ring-buffer)
* [2025-02-05, 18:29:30](https://news.ycombinator.com/item?id=42952960) - [Andrej Karpathy: Deep Dive into LLMs Like ChatGPT [video]](https://www.youtube.com/watch?v=7xTGNNLPyMI)
* [2025-02-05, 18:08:15](https://lobste.rs/s/i2vzuc/collaborative_text_editing_with_eg) - [Collaborative Text Editing with Eg-Walker](https://www.youtube.com/watch?v=rjbEG7COj7o)
* [2025-02-05, 18:05:28](https://news.ycombinator.com/item?id=42952605) - [Ingesting PDFs and why Gemini 2.0 changes everything](https://www.sergey.fyi/articles/gemini-flash-2)
* [2025-02-05, 18:04:20](https://news.ycombinator.com/item?id=42952584) - [Running ArchiveTeam's Warrior in Kubernetes](https://gabrielsimmer.com/blog/archiveteam-warrior-kubernetes)
* [2025-02-05, 18:02:47](https://lobste.rs/s/gn3nym/comic_web_markup_comic_web_is_markup) - [comic-web-markup: Comic-web is a markup language for describing comics, as well as a rendering engine for this language](https://github.com/abuseofnotation/comic-web-markup)
* [2025-02-05, 18:01:00](https://tech.slashdot.org/story/25/02/05/1436238/microsofts-windows-10-extended-security-updates-will-start-at-61-per-pc-for-businesses?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft's Windows 10 Extended Security Updates Will Start at $61 per PC for Businesses](https://tech.slashdot.org/story/25/02/05/1436238/microsofts-windows-10-extended-security-updates-will-start-at-61-per-pc-for-businesses?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 17:34:01](https://lobste.rs/s/tz6ybl/zasper_fastest_most_efficient_ide_run) - [zasper: Fastest and Most Efficient IDE to run Jupyter Notebooks](https://github.com/zasper-io/zasper)
* [2025-02-05, 17:31:53](https://lobste.rs/s/f9biav/gemini_2_0_is_now_available_everyone) - [Gemini 2.0 is now available to everyone](https://blog.google/technology/google-deepmind/gemini-model-updates-february-2025/)
* [2025-02-05, 17:20:00](https://slashdot.org/story/25/02/05/1426220/ai-granny-driving-scammers-up-the-wall?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['AI Granny' Driving Scammers Up the Wall](https://slashdot.org/story/25/02/05/1426220/ai-granny-driving-scammers-up-the-wall?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 17:00:43](https://news.ycombinator.com/item?id=42951511) - [Ploomber (YC W22) Is Hiring Engineers (Infra, Backend, Growth) and Ex-Founders](https://www.ycombinator.com/companies/ploomber/jobs)
* [2025-02-05, 16:43:00](https://soylentnews.org/article.pl?sid=25/02/04/1455221&from=rss) - [Everyone Knows Your Location: Tracking Myself Down Through in-App Ads](https://soylentnews.org/article.pl?sid=25/02/04/1455221&from=rss)
* [2025-02-05, 16:31:24](https://news.ycombinator.com/item?id=42950929) - [Eggs US – Price – Chart](https://tradingeconomics.com/commodity/eggs-us)
* [2025-02-05, 16:03:18](https://news.ycombinator.com/item?id=42950454) - [Gemini 2.0 is now available to everyone](https://blog.google/technology/google-deepmind/gemini-model-updates-february-2025/)
* [2025-02-05, 15:53:40](https://lobste.rs/s/tdnc9j/go_supply_chain_attack_malicious_package) - [Go Supply Chain Attack: Malicious Package Exploits Go Module](https://socket.dev/blog/malicious-package-exploits-go-module-proxy-caching-for-persistence)
* [2025-02-05, 15:38:09](https://lobste.rs/s/b6vlan/prediction_games) - [Prediction Games](https://www.argmin.net/p/prediction-games)
* [2025-02-05, 15:03:09](https://news.ycombinator.com/item?id=42949390) - [Servo's progress in 2024](https://servo.org/blog/2025/01/31/servo-in-2024/)
* [2025-02-05, 14:55:03](https://news.ycombinator.com/item?id=42949277) - [Avoiding outrage fatigue while staying informed](https://www.scientificamerican.com/podcast/episode/how-to-avoid-outrage-fatigue-and-tune-in-without-burning-out/)
* [2025-02-05, 14:47:32](https://news.ycombinator.com/item?id=42949181) - [Why is Warner Bros. Discovery putting old movies on YouTube?](https://tedium.co/2025/02/05/warner-bros-youtube-full-movie-releases/)
* [2025-02-05, 13:15:00](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss) - [Soylent Update - February 2025](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss)
* [2025-02-05, 12:18:25](https://lobste.rs/s/4p3ovs/java_jit_compiler_runtime_common_lisp) - [A Java JIT Compiler and Runtime in Common Lisp](https://github.com/atgreen/openldk)
* [2025-02-05, 12:00:00](https://soylentnews.org/article.pl?sid=25/02/04/042215&from=rss) - [Microsoft Defender's VPN Feature Will be Killed Off at the End of February](https://soylentnews.org/article.pl?sid=25/02/04/042215&from=rss)
* [2025-02-05, 11:05:40](https://news.ycombinator.com/item?id=42946854) - [S1: A $6 R1 competitor?](https://timkellogg.me/blog/2025/02/03/s1)
* [2025-02-05, 09:50:30](https://news.ycombinator.com/item?id=42946281) - [Software development topics I've changed my mind on](https://chriskiehl.com/article/thoughts-after-10-years)
* [2025-02-05, 07:30:59](https://news.ycombinator.com/item?id=42945146) - [GNU Make Standard Library](https://gmsl.jgc.org/)
* [2025-02-05, 07:17:00](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss) - [Tesla and BMW Sue European Commission Over Chinese EV Tariffs](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss)
* [2025-02-05, 07:01:30](https://lobste.rs/s/l9pkbz/radiant_foam) - [Radiant Foam](https://radfoam.github.io/)
* [2025-02-05, 06:43:43](https://lobste.rs/s/sxxchv/rewriting_slipshow_ocaml_undo_able_monad) - [Rewriting Slipshow in OCaml: The undo-able monad](https://choum.net/panglesd/undo-monad/)
* [2025-02-05, 03:18:22](https://news.ycombinator.com/item?id=42943271) - [A hexagonal-tiled cartogram for U.S. counties](https://www.jordanroga.com/blog/introducing-a-hexagonal-tiled-cartogram-for-u-s-counties)
* [2025-02-05, 03:00:28](https://lobste.rs/s/pwqgmz/zig_what_i_think_after_months_using_it) - [Zig; what I think after months of using it](https://strongly-typed-thoughts.net/blog/zig-2025)
* [2025-02-05, 02:35:00](https://soylentnews.org/article.pl?sid=25/02/04/0355255&from=rss) - [Medical Monitoring Machines Spotted Stealing Patient Data](https://soylentnews.org/article.pl?sid=25/02/04/0355255&from=rss)
* [2025-02-05, 01:48:08](https://lobste.rs/s/x7nhcq/framework_ships_risc_v_board_for_its_13) - [Framework ships RISC-V board for its 13\" laptops along with \"boardless\" laptop chassis](https://arstechnica.com/gadgets/2025/02/framework-laptop-expands-beyond-x86-with-its-first-ever-risc-v-based-motherboard/)
* [2025-02-05, 01:06:49](https://lobste.rs/s/rdgq0m/decentralized_networking_technology) - [Decentralized Networking Technology](https://spritely.institute/)
* [2025-02-04, 23:58:30](https://lobste.rs/s/jtd6tb/ambsheets_spreadsheets_for_exploring) - [Ambsheets: Spreadsheets for exploring scenarios](https://www.inkandswitch.com/ambsheets/)
* [2025-02-04, 21:50:00](https://soylentnews.org/article.pl?sid=25/02/04/0352219&from=rss) - [Artificial Gills Unlock Long-Range Underwater Robots](https://soylentnews.org/article.pl?sid=25/02/04/0352219&from=rss)
* [2025-02-04, 21:12:40](https://lobste.rs/s/quy6ev/developer_serenityos_is_challenging) - [The developer of SerenityOS is challenging the browser duopoly](https://thenextweb.com/news/serenityos-creator-building-ladybird-browser)
* [2025-02-04, 19:30:51](https://lobste.rs/s/ycbpnz/animating_rick_morty_one_pixel_at_time) - [Animating Rick and Morty One Pixel at a Time](https://danielchasehooper.com/posts/code-animated-rick/)
* [2025-02-04, 17:18:45](https://lobste.rs/s/0jknbl/roc_rewrites_compiler_zig) - [Roc rewrites the compiler in Zig](https://gist.github.com/rtfeldman/77fb430ee57b42f5f2ca973a3992532f)
* [2025-02-04, 17:08:00](https://soylentnews.org/article.pl?sid=25/02/03/1327213&from=rss) - [NASA's Returned Asteroid Samples Hold the Ingredients of Life From a Watery World](https://soylentnews.org/article.pl?sid=25/02/03/1327213&from=rss)
* [2025-02-04, 15:52:01](https://lobste.rs/s/ou6ky6/big_packages_many_dependencies) - [Big Packages or Many Dependencies ](https://v5.chriskrycho.com/notes/big-packages-or-many-dependencies/)
* [2025-02-04, 13:42:50](https://lobste.rs/s/wucizv/no_panic_rust_nice_technique_for_systems) - [No-Panic Rust: A Nice Technique for Systems Programming](https://blog.reverberate.org/2025/02/03/no-panic-rust.html)
* [2025-02-04, 12:23:00](https://soylentnews.org/article.pl?sid=25/02/02/1444250&from=rss) - [Fediverse Explosive Growth - 100m Posts in January](https://soylentnews.org/article.pl?sid=25/02/02/1444250&from=rss)
* [2025-02-04, 07:41:00](https://soylentnews.org/article.pl?sid=25/02/02/1338233&from=rss) - [US to Deploy Molten Salt Reactors to Turn Wastewater Into Freshwater](https://soylentnews.org/article.pl?sid=25/02/02/1338233&from=rss)
* [2025-02-04, 02:56:00](https://soylentnews.org/article.pl?sid=25/02/02/141218&from=rss) - [How Does DeepSeek R1 Really Fare Against OpenAI's Best Reasoning Models?](https://soylentnews.org/article.pl?sid=25/02/02/141218&from=rss)
* [2025-02-04, 01:40:06](https://news.ycombinator.com/item?id=42926359) - [Ask HN: Do you know travel blogs that have animated SVG maps of their travels?](https://news.ycombinator.com/item?id=42926359)
* [2025-02-03, 22:13:00](https://soylentnews.org/article.pl?sid=25/02/02/1354257&from=rss) - [Bug That Kills PC's Audio is Seriously Widespread Affecting Multiple Windows Versions](https://soylentnews.org/article.pl?sid=25/02/02/1354257&from=rss)
* [2025-02-03, 17:25:00](https://soylentnews.org/article.pl?sid=25/02/02/1347234&from=rss) - [The Growing Antibiotic Resistance Problem Requires Better Policy](https://soylentnews.org/article.pl?sid=25/02/02/1347234&from=rss)
* [2025-02-03, 12:53:31](https://news.ycombinator.com/item?id=42917712) - [Show HN: Marksmith – a GitHub-style Markdown editor for Ruby on Rails](https://avohq.io/blog/ruby-on-rails-markdown-editor-marksmith)
* [2025-02-03, 12:40:00](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss) - [About Zusie (Relay Based Computer)](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss)
* [2025-02-03, 12:31:15](https://news.ycombinator.com/item?id=42917522) - [The Language Construction Kit (1996, 2012)](https://www.zompist.com/kit.html)
* [2025-02-03, 11:49:49](https://news.ycombinator.com/item?id=42917268) - [Discord client that works on Win95*, Win98 and above](https://github.com/DiscordMessenger/dm)
* [2025-02-03, 07:51:00](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss) - [The Network State Coup is Happening Right Now](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss)
* [2025-02-03, 03:07:00](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss) - [How One YouTuber is Trying to Poison the AI Bots Stealing Her Content](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss)
* [2025-02-02, 22:23:00](https://soylentnews.org/article.pl?sid=25/02/01/1439213&from=rss) - [Infosec Was Trump's Lowest Priority, But He'll Change Bigly](https://soylentnews.org/article.pl?sid=25/02/01/1439213&from=rss)
* [2025-02-02, 17:38:00](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss) - [Maker Resurrects Toshiba T1000 With a Raspberry Pi 4 and a Slew of Upgrades](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss)
* [2025-02-02, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss) - [Trump Says Microsoft is in Contention to Buy TikTok](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss)
* [2025-02-02, 08:08:00](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss) - [DeepDive into DeepSeek](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss)
* [2025-02-02, 04:43:00](https://news.ycombinator.com/item?id=42905900) - [Minimum effective dose](https://winnielim.org/journal/minimum-effective-dose/)
* [2025-02-02, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss) - [Fake Google Ads Trick Mac Users To Install Homebrew Malware](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss)
* [2025-02-02, 01:32:33](https://news.ycombinator.com/item?id=42904670) - [A Mount Lyell shrew has just been photographed alive](https://www.sfgate.com/bayarea/article/elusive-california-mammal-photographed-20040772.php)
