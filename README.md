# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Innovations

* [Counter-Strike analytics with Bevy and React](https://youtu.be/6b3qTeIl2Ak) - An exploration of analytics in the popular game Counter-Strike using Bevy and React.

* [Collaborative Text Editing with Eg-Walker](https://www.youtube.com/watch?v=rjbEG7COj7o) - A video demonstrating new capabilities in collaborative text editing.

* [Ingesting PDFs and why Gemini 2.0 changes everything](https://www.sergey.fyi/articles/gemini-flash-2) - Insights into how Gemini 2.0 revolutionizes PDF content ingestion.

* [zasper: Fastest and Most Efficient IDE to run Jupyter Notebooks](https://github.com/zasper-io/zasper) - A new IDE designed for unparalleled performance with Jupyter Notebooks.

* [Radiant Foam](https://radfoam.github.io/) - A technical look at Radiant Foam innovation.

* [Artificial Gills Unlock Long-Range Underwater Robots](https://soylentnews.org/article.pl?sid=25/02/04/0352219&from=rss) - Breakthrough artificial gills technology for improving underwater robot range.

* [Framework ships RISC-V board for its 13" laptops along with "boardless" laptop chassis](https://arstechnica.com/gadgets/2025/02/framework-laptop-expands-beyond-x86-with-its-first-ever-risc-v-based-motherboard/) - Framework innovates with a RISC-V board and modular laptop design.

## Cybersecurity Developments

* [OCR Crypto Stealers in Google Play and App Store](https://securelist.com/sparkcat-stealer-in-app-store-and-google-play/115385/) - Discovery of OCR-based crypto-stealing spyware breaching major app stores.

* [Go Supply Chain Attack: Malicious Package Exploits Go Module](https://socket.dev/blog/malicious-package-exploits-go-module-proxy-caching-for-persistence) - Malware found circumventing Go module proxy caching for persistence.

## Artificial Intelligence and Machine Learning

* [Andrej Karpathy: Deep Dive into LLMs Like ChatGPT [video]](https://www.youtube.com/watch?v=7xTGNNLPyMI) - A focused dive into large language models with Andrej Karpathy.

* [Gemini 2.0 is now available to everyone](https://blog.google/technology/google-deepmind/gemini-model-updates-february-2025/) - Release of the next-generation Gemini AI model for public use.

* ['AI Granny' Driving Scammers Up the Wall](https://slashdot.org/story/25/02/05/1426220/ai-granny-driving-scammers-up-the-wall?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An AI application causing headaches for scam calls.

## Environmental and Scientific Breakthroughs

* [Physicists Confirm The Existence of a Third Form of Magnetism](https://science.slashdot.org/story/25/02/05/0530255/physicists-confirm-the-existence-of-a-third-form-of-magnetism?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Confirmation of a new form of magnetism, advancing the field of physics.

* [Temperatures at North Pole 20C Above Average and Beyond Ice Melting Point](https://news.slashdot.org/story/25/02/05/1213210/temperatures-at-north-pole-20c-above-average-and-beyond-ice-melting-point?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Alarming temperature anomalies at the North Pole indicating severe climate change impacts.

* [NASA's Returned Asteroid Samples Hold the Ingredients of Life From a Watery World](https://soylentnews.org/article.pl?sid=25/02/03/1327213&from=rss) - NASA uncovers significant findings in returned asteroid samples related to early life.

## Economic and Corporate News

* [Workday To Cut Nearly 2,000 Workers on Profitability Focus](https://slashdot.org/story/25/02/05/1830205/workday-to-cut-nearly-2000-workers-on-profitability-focus?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Workforce reductions at Workday as part of profitability focus.

* [Microsoft's Windows 10 Extended Security Updates Will Start at $61 per PC for Businesses](https://tech.slashdot.org/story/25/02/05/1436238/microsofts-windows-10-extended-security-updates-will-start-at-61-per-pc-for-businesses?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft introduces extended security plans for Windows 10.

## Software Development and Programming

* [Zig; what I think after months of using it](https://strongly-typed-thoughts.net/blog/zig-2025) - A detailed user experience recount on adopting the Zig programming language.

* [Versioning versus Coordination](https://brooker.co.za/blog/2025/02/04/versioning.html) - A technical exploration of software versioning paradigms.

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

* [2025-02-05, 21:54:34](https://lobste.rs/s/p1xtcw/counter_strike_analytics_with_bevy_react) - [Counter-Strike analytics with Bevy and React](https://youtu.be/6b3qTeIl2Ak)
* [2025-02-05, 21:24:00](https://soylentnews.org/article.pl?sid=25/02/04/157244&from=rss) - [Giant Study Questions Link Between Autism and Maternal Health](https://soylentnews.org/article.pl?sid=25/02/04/157244&from=rss)
* [2025-02-05, 21:23:00](https://slashdot.org/story/25/02/05/1830205/workday-to-cut-nearly-2000-workers-on-profitability-focus?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Workday To Cut Nearly 2,000 Workers on Profitability Focus](https://slashdot.org/story/25/02/05/1830205/workday-to-cut-nearly-2000-workers-on-profitability-focus?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 21:10:25](https://news.ycombinator.com/item?id=42955176) - [Okta Bcrypt incident lessons for designing better APIs](https://n0rdy.foo/posts/20250121/okta-bcrypt-lessons-for-better-apis/)
* [2025-02-05, 21:08:16](https://lobste.rs/s/ikydnz/versioning_versus_coordination) - [Versioning versus Coordination](https://brooker.co.za/blog/2025/02/04/versioning.html)
* [2025-02-05, 20:57:33](https://news.ycombinator.com/item?id=42955009) - [OCR Crypto Stealers in Google Play and App Store](https://securelist.com/sparkcat-stealer-in-app-store-and-google-play/115385/)
* [2025-02-05, 20:42:00](https://it.slashdot.org/story/25/02/05/1826259/first-ocr-spyware-breaches-both-apple-and-google-app-stores-to-steal-crypto-wallet-phrases?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [First OCR Spyware Breaches Both Apple and Google App Stores To Steal Crypto Wallet Phrases](https://it.slashdot.org/story/25/02/05/1826259/first-ocr-spyware-breaches-both-apple-and-google-app-stores-to-steal-crypto-wallet-phrases?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 20:26:00](https://news.ycombinator.com/item?id=42954621) - [DARPA solicitation for the Active Social Engineering Defense program (2017)](https://www.highergov.com/contract-opportunity/active-social-engineering-defense-ased-hr001117s0050-p-67f55/)
* [2025-02-05, 20:01:00](https://news.slashdot.org/story/25/02/05/1819218/im-done-with-ubuntu?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['I'm Done With Ubuntu'](https://news.slashdot.org/story/25/02/05/1819218/im-done-with-ubuntu?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 19:28:56](https://lobste.rs/s/cyotj6/all_bear_blogs_can_use_hashtags_now_via) - [All Bear blogs can use hashtags now via Octothorpes](https://octothorpes.bearblog.dev/you-can-use-hashtags-on-your-bear-blog-now/)
* [2025-02-05, 19:21:34](https://lobste.rs/s/khlha3/sudoku_affair) - [the sudoku affair](https://explaining.software/archive/the-sudoku-affair/)
* [2025-02-05, 19:20:00](https://tech.slashdot.org/story/25/02/05/1458211/nissan-set-to-step-back-from-merger-with-honda?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nissan Set To Step Back From Merger With Honda](https://tech.slashdot.org/story/25/02/05/1458211/nissan-set-to-step-back-from-merger-with-honda?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 19:08:12](https://news.ycombinator.com/item?id=42953508) - [Tell HN: Cloudflare is blocking Pale Moon and other non-mainstream browsers](https://news.ycombinator.com/item?id=42953508)
* [2025-02-05, 18:45:55](https://news.ycombinator.com/item?id=42953206) - [Zig Guide](https://zig.guide/)
* [2025-02-05, 18:43:28](https://news.ycombinator.com/item?id=42953168) - [The Sudoku Affair](https://explaining.software/archive/the-sudoku-affair/)
* [2025-02-05, 18:40:00](https://science.slashdot.org/story/25/02/05/1448222/the-long-quest-for-artificial-blood?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Long Quest for Artificial Blood](https://science.slashdot.org/story/25/02/05/1448222/the-long-quest-for-artificial-blood?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 18:37:49](https://lobste.rs/s/6cb3tb/implementation_ringbuffer_java_with) - [Implementation of a RingBuffer in Java with optional FIFO like semantics](https://github.com/evolvedbinary/j8cu?tab=readme-ov-file#ring-buffer)
* [2025-02-05, 18:29:30](https://news.ycombinator.com/item?id=42952960) - [Andrej Karpathy: Deep Dive into LLMs Like ChatGPT [video]](https://www.youtube.com/watch?v=7xTGNNLPyMI)
* [2025-02-05, 18:13:25](https://news.ycombinator.com/item?id=42952720) - [21st Century C++](https://cacm.acm.org/blogcacm/21st-century-c/)
* [2025-02-05, 18:08:15](https://lobste.rs/s/i2vzuc/collaborative_text_editing_with_eg) - [Collaborative Text Editing with Eg-Walker](https://www.youtube.com/watch?v=rjbEG7COj7o)
* [2025-02-05, 18:05:28](https://news.ycombinator.com/item?id=42952605) - [Ingesting PDFs and why Gemini 2.0 changes everything](https://www.sergey.fyi/articles/gemini-flash-2)
* [2025-02-05, 18:04:20](https://news.ycombinator.com/item?id=42952584) - [Running ArchiveTeam's Warrior in Kubernetes](https://gabrielsimmer.com/blog/archiveteam-warrior-kubernetes)
* [2025-02-05, 18:02:47](https://lobste.rs/s/gn3nym/comic_web_markup_comic_web_is_markup) - [comic-web-markup: Comic-web is a markup language for describing comics, as well as a rendering engine for this language](https://github.com/abuseofnotation/comic-web-markup)
* [2025-02-05, 18:01:00](https://tech.slashdot.org/story/25/02/05/1436238/microsofts-windows-10-extended-security-updates-will-start-at-61-per-pc-for-businesses?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft's Windows 10 Extended Security Updates Will Start at $61 per PC for Businesses](https://tech.slashdot.org/story/25/02/05/1436238/microsofts-windows-10-extended-security-updates-will-start-at-61-per-pc-for-businesses?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 17:34:01](https://lobste.rs/s/tz6ybl/zasper_fastest_most_efficient_ide_run) - [zasper: Fastest and Most Efficient IDE to run Jupyter Notebooks](https://github.com/zasper-io/zasper)
* [2025-02-05, 17:31:53](https://lobste.rs/s/f9biav/gemini_2_0_is_now_available_everyone) - [Gemini 2.0 is now available to everyone](https://blog.google/technology/google-deepmind/gemini-model-updates-february-2025/)
* [2025-02-05, 17:20:00](https://slashdot.org/story/25/02/05/1426220/ai-granny-driving-scammers-up-the-wall?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['AI Granny' Driving Scammers Up the Wall](https://slashdot.org/story/25/02/05/1426220/ai-granny-driving-scammers-up-the-wall?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 17:00:43](https://news.ycombinator.com/item?id=42951511) - [Ploomber (YC W22) Is Hiring Engineers (Infra, Backend, Growth) and Ex-Founders](https://www.ycombinator.com/companies/ploomber/jobs)
* [2025-02-05, 16:58:14](https://news.ycombinator.com/item?id=42951458) - [DOGE employees ordered to stop using Slack](https://www.404media.co/doge-employees-ordered-to-stop-using-slack-while-agency-transitions-to-a-records-system-not-subject-to-foia/)
* [2025-02-05, 16:43:00](https://soylentnews.org/article.pl?sid=25/02/04/1455221&from=rss) - [Everyone Knows Your Location: Tracking Myself Down Through in-App Ads](https://soylentnews.org/article.pl?sid=25/02/04/1455221&from=rss)
* [2025-02-05, 16:40:00](https://tech.slashdot.org/story/25/02/05/1156248/google-to-spend-75-billion-on-ai-push?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google To Spend $75 Billion on AI Push](https://tech.slashdot.org/story/25/02/05/1156248/google-to-spend-75-billion-on-ai-push?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 16:31:24](https://news.ycombinator.com/item?id=42950929) - [Eggs US – Price – Chart](https://tradingeconomics.com/commodity/eggs-us)
* [2025-02-05, 16:23:10](https://news.ycombinator.com/item?id=42950790) - [20k federal workers take \"buyout\" so far, official says](https://www.axios.com/2025/02/04/trump-buyout-federal-workers-20000)
* [2025-02-05, 16:03:18](https://news.ycombinator.com/item?id=42950454) - [Gemini 2.0 is now available to everyone](https://blog.google/technology/google-deepmind/gemini-model-updates-february-2025/)
* [2025-02-05, 16:00:00](https://it.slashdot.org/story/25/02/05/1314221/developer-runs-doom-on-50-apple-lightning-to-hdmi-adapter?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Developer Runs Doom On $50 Apple Lightning To HDMI Adapter](https://it.slashdot.org/story/25/02/05/1314221/developer-runs-doom-on-50-apple-lightning-to-hdmi-adapter?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 15:53:40](https://lobste.rs/s/tdnc9j/go_supply_chain_attack_malicious_package) - [Go Supply Chain Attack: Malicious Package Exploits Go Module](https://socket.dev/blog/malicious-package-exploits-go-module-proxy-caching-for-persistence)
* [2025-02-05, 15:40:57](https://news.ycombinator.com/item?id=42950066) - [Prediction Games](https://www.argmin.net/p/prediction-games)
* [2025-02-05, 15:38:21](https://news.ycombinator.com/item?id=42950016) - [OpenWISP: Multi-device fleet management for OpenWrt routers](https://openwisp.org)
* [2025-02-05, 15:38:09](https://lobste.rs/s/b6vlan/prediction_games) - [Prediction Games](https://www.argmin.net/p/prediction-games)
* [2025-02-05, 15:20:00](https://news.slashdot.org/story/25/02/05/1213210/temperatures-at-north-pole-20c-above-average-and-beyond-ice-melting-point?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Temperatures at North Pole 20C Above Average and Beyond Ice Melting Point](https://news.slashdot.org/story/25/02/05/1213210/temperatures-at-north-pole-20c-above-average-and-beyond-ice-melting-point?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 15:03:09](https://news.ycombinator.com/item?id=42949390) - [Servo's progress in 2024](https://servo.org/blog/2025/01/31/servo-in-2024/)
* [2025-02-05, 14:55:03](https://news.ycombinator.com/item?id=42949277) - [Avoiding outrage fatigue while staying informed](https://www.scientificamerican.com/podcast/episode/how-to-avoid-outrage-fatigue-and-tune-in-without-burning-out/)
* [2025-02-05, 14:47:32](https://news.ycombinator.com/item?id=42949181) - [Why is Warner Bros. Discovery putting old movies on YouTube?](https://tedium.co/2025/02/05/warner-bros-youtube-full-movie-releases/)
* [2025-02-05, 14:40:00](https://apple.slashdot.org/story/25/02/05/127253/china-weighs-probe-into-apples-app-store-fees-practices?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [China Weighs Probe Into Apple's App Store Fees, Practices](https://apple.slashdot.org/story/25/02/05/127253/china-weighs-probe-into-apples-app-store-fees-practices?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 14:37:02](https://news.ycombinator.com/item?id=42949019) - [Show HN: Matle – A Daily Chess Puzzle Inspired by Wordle](https://www.matle.io/)
* [2025-02-05, 14:00:00](https://tech.slashdot.org/story/25/02/05/1348250/thailand-cuts-internet-and-power-supply-to-some-areas-in-myanmar-in-blow-to-scam-centers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Thailand Cuts Internet and Power Supply To Some Areas in Myanmar in Blow To Scam Centers](https://tech.slashdot.org/story/25/02/05/1348250/thailand-cuts-internet-and-power-supply-to-some-areas-in-myanmar-in-blow-to-scam-centers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 13:15:00](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss) - [Soylent Update - February 2025](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss)
* [2025-02-05, 13:00:00](https://news.slashdot.org/story/25/02/05/0557256/climate-change-target-of-2c-is-dead?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Climate Change Target of 2C Is 'Dead'](https://news.slashdot.org/story/25/02/05/0557256/climate-change-target-of-2c-is-dead?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 12:18:25](https://lobste.rs/s/4p3ovs/java_jit_compiler_runtime_common_lisp) - [A Java JIT Compiler and Runtime in Common Lisp](https://github.com/atgreen/openldk)
* [2025-02-05, 12:00:00](https://soylentnews.org/article.pl?sid=25/02/04/042215&from=rss) - [Microsoft Defender's VPN Feature Will be Killed Off at the End of February](https://soylentnews.org/article.pl?sid=25/02/04/042215&from=rss)
* [2025-02-05, 11:09:19](https://lobste.rs/s/pmiplu/zig_elm_linters_2022) - [Zig, Elm, and linters (2022)](https://gotopia.tech/articles/233/zig-programming-language-and-linters)
* [2025-02-05, 11:05:40](https://news.ycombinator.com/item?id=42946854) - [S1: A $6 R1 competitor?](https://timkellogg.me/blog/2025/02/03/s1)
* [2025-02-05, 10:49:12](https://news.ycombinator.com/item?id=42946718) - [Chrome 133 Supports DOM State-Preserving Move with moveBefore()](https://chromestatus.com/feature/5135990159835136)
* [2025-02-05, 10:01:00](https://tech.slashdot.org/story/25/02/05/038254/meta-cto-2025-make-or-break-year-for-metaverse?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta CTO: 2025 Make or Break Year for Metaverse](https://tech.slashdot.org/story/25/02/05/038254/meta-cto-2025-make-or-break-year-for-metaverse?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 09:50:30](https://news.ycombinator.com/item?id=42946281) - [Software development topics I've changed my mind on](https://chriskiehl.com/article/thoughts-after-10-years)
* [2025-02-05, 07:17:00](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss) - [Tesla and BMW Sue European Commission Over Chinese EV Tariffs](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss)
* [2025-02-05, 07:01:30](https://lobste.rs/s/l9pkbz/radiant_foam) - [Radiant Foam](https://radfoam.github.io/)
* [2025-02-05, 07:00:00](https://science.slashdot.org/story/25/02/05/0530255/physicists-confirm-the-existence-of-a-third-form-of-magnetism?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Physicists Confirm The Existence of a Third Form of Magnetism](https://science.slashdot.org/story/25/02/05/0530255/physicists-confirm-the-existence-of-a-third-form-of-magnetism?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 06:43:43](https://lobste.rs/s/sxxchv/rewriting_slipshow_ocaml_undo_able_monad) - [Rewriting Slipshow in OCaml: The undo-able monad](https://choum.net/panglesd/undo-monad/)
* [2025-02-05, 05:50:16](https://news.ycombinator.com/item?id=42944371) - [Fair Pricing](https://kagi.com/changelog#6155)
* [2025-02-05, 05:25:19](https://news.ycombinator.com/item?id=42944203) - [The FAA’s Hiring Scandal](https://www.tracingwoodgrains.com/p/the-full-story-of-the-faas-hiring)
* [2025-02-05, 03:00:28](https://lobste.rs/s/pwqgmz/zig_what_i_think_after_months_using_it) - [Zig; what I think after months of using it](https://strongly-typed-thoughts.net/blog/zig-2025)
* [2025-02-05, 02:35:00](https://soylentnews.org/article.pl?sid=25/02/04/0355255&from=rss) - [Medical Monitoring Machines Spotted Stealing Patient Data](https://soylentnews.org/article.pl?sid=25/02/04/0355255&from=rss)
* [2025-02-05, 01:48:08](https://lobste.rs/s/x7nhcq/framework_ships_risc_v_board_for_its_13) - [Framework ships RISC-V board for its 13\" laptops along with \"boardless\" laptop chassis](https://arstechnica.com/gadgets/2025/02/framework-laptop-expands-beyond-x86-with-its-first-ever-risc-v-based-motherboard/)
* [2025-02-05, 01:06:49](https://lobste.rs/s/rdgq0m/decentralized_networking_technology) - [Decentralized Networking Technology](https://spritely.institute/)
* [2025-02-04, 23:58:30](https://lobste.rs/s/jtd6tb/ambsheets_spreadsheets_for_exploring) - [Ambsheets: Spreadsheets for exploring scenarios](https://www.inkandswitch.com/ambsheets/)
* [2025-02-04, 21:50:00](https://soylentnews.org/article.pl?sid=25/02/04/0352219&from=rss) - [Artificial Gills Unlock Long-Range Underwater Robots](https://soylentnews.org/article.pl?sid=25/02/04/0352219&from=rss)
* [2025-02-04, 21:12:40](https://lobste.rs/s/quy6ev/developer_serenityos_is_challenging) - [The developer of SerenityOS is challenging the browser duopoly](https://thenextweb.com/news/serenityos-creator-building-ladybird-browser)
* [2025-02-04, 19:30:51](https://lobste.rs/s/ycbpnz/animating_rick_morty_one_pixel_at_time) - [Animating Rick and Morty One Pixel at a Time](https://danielchasehooper.com/posts/code-animated-rick/)
* [2025-02-04, 17:32:08](https://lobste.rs/s/av0ka1/fat_rand_how_many_lines_do_you_need) - [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](https://lucumr.pocoo.org/2025/2/4/fat-rand/)
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
* [2025-02-03, 12:40:00](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss) - [About Zusie (Relay Based Computer)](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss)
* [2025-02-03, 09:43:05](https://news.ycombinator.com/item?id=42916574) - [Conway's Law (2022)](https://martinfowler.com/bliki/ConwaysLaw.html)
* [2025-02-03, 07:51:00](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss) - [The Network State Coup is Happening Right Now](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss)
* [2025-02-03, 07:44:07](https://news.ycombinator.com/item?id=42915901) - [Catgrad: A categorical deep learning compiler](https://catgrad.com/)
* [2025-02-03, 03:07:00](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss) - [How One YouTuber is Trying to Poison the AI Bots Stealing Her Content](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss)
* [2025-02-02, 22:23:00](https://soylentnews.org/article.pl?sid=25/02/01/1439213&from=rss) - [Infosec Was Trump's Lowest Priority, But He'll Change Bigly](https://soylentnews.org/article.pl?sid=25/02/01/1439213&from=rss)
* [2025-02-02, 17:38:00](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss) - [Maker Resurrects Toshiba T1000 With a Raspberry Pi 4 and a Slew of Upgrades](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss)
* [2025-02-02, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss) - [Trump Says Microsoft is in Contention to Buy TikTok](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss)
* [2025-02-02, 08:08:00](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss) - [DeepDive into DeepSeek](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss)
* [2025-02-02, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss) - [Fake Google Ads Trick Mac Users To Install Homebrew Malware](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss)
* [2025-02-02, 01:32:33](https://news.ycombinator.com/item?id=42904670) - [An elusive California mammal has just been photographed alive](https://www.sfgate.com/bayarea/article/elusive-california-mammal-photographed-20040772.php)
* [2025-02-01, 22:42:00](https://soylentnews.org/article.pl?sid=25/02/01/1359255&from=rss) - [Phone Metadata Suddenly Not So ‘Harmless’ When It's the FBI's Data Being Harvested](https://soylentnews.org/article.pl?sid=25/02/01/1359255&from=rss)
* [2025-02-01, 17:57:00](https://soylentnews.org/article.pl?sid=25/02/01/1349238&from=rss) - [A Story About USB Floppy Drives](https://soylentnews.org/article.pl?sid=25/02/01/1349238&from=rss)
* [2025-02-01, 13:13:00](https://soylentnews.org/article.pl?sid=25/02/01/1314204&from=rss) - [Hubble's Largest Panorama Ever Showcases 200 Million Stars In The Andromeda Galaxy](https://soylentnews.org/article.pl?sid=25/02/01/1314204&from=rss)
* [2025-02-01, 08:22:00](https://soylentnews.org/article.pl?sid=25/01/31/1358254&from=rss) - [FCC Chair Nixes Plan to Boost Broadband Competition in Apartment Buildings](https://soylentnews.org/article.pl?sid=25/01/31/1358254&from=rss)
* [2025-02-01, 03:37:00](https://soylentnews.org/article.pl?sid=25/01/30/227223&from=rss) - [Revival of the Pebble Smartwatch](https://soylentnews.org/article.pl?sid=25/01/30/227223&from=rss)
