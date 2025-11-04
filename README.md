# [News Summary](https://kherrick.github.io/news-summary/)

## Social Media and AI Controversies

* [Tell HN: X is opening any tweet link in a webview whether you press it or not](https://news.ycombinator.com/item?id=45807775)

* [Once Again, Chat Control Flails After Strong Public Pressure](https://soylentnews.org/article.pl?sid=25/11/02/2011253&from=rss)

* [Spotify Sued Over 'Billions' of Fraudulent Drake Streams](https://yro.slashdot.org/story/25/11/04/0011221/spotify-sued-over-billions-of-fraudulent-drake-streams?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [arXiv Changes Rules After Getting Spammed With AI-Generated 'Research' Papers](https://slashdot.org/story/25/11/03/1716252/arxiv-changes-rules-after-getting-spammed-with-ai-generated-research-papers?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Studio Ghibli, Bandai Namco, Square Enix Demand OpenAI Stop Using Their Content To Train AI](https://slashdot.org/story/25/11/03/1857255/studio-ghibli-bandai-namco-square-enix-demand-openai-stop-using-their-content-to-train-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Environment and Technology Transformations

* [Antarctic Glacier Saw the Fastest Retreat In Modern History](https://news.slashdot.org/story/25/11/04/0026217/antarctic-glacier-saw-the-fastest-retreat-in-modern-history?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [LADWP Says It Will Shift Its Largest Gas Power Plant To Hydrogen](https://hardware.slashdot.org/story/25/11/03/2351252/ladwp-says-it-will-shift-its-largest-gas-power-plant-to-hydrogen?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Windows 7 Squeezed To 69MB in Proof-of-Concept Build](https://tech.slashdot.org/story/25/11/03/1816216/windows-7-squeezed-to-69mb-in-proof-of-concept-build?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Ukraine First To Demo Open Source Security Platform To Help Secure Power Grid](https://hardware.slashdot.org/story/25/11/04/000255/ukraine-first-to-demo-open-source-security-platform-to-help-secure-power-grid?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Interesting Personal Projects and Innovations

* [Show HN: MyTimers.app offline-first PWA with no build step and zero dependencies](https://mytimers.app/)

* [I Built My Own Google Drive](https://lorbic.com/i-built-my-own-google-drive/)

* [My Truck Desk](https://www.theparisreview.org/blog/2025/10/29/truck-desk/)

* [Gallery of wonderful drawings our little thermal printer received](https://guestbook.goodenough.us)

* [Things you can do with diodes](https://lcamtuf.substack.com/p/things-you-can-do-with-diodes)

## Security and Vulnerabilities

* [CISA: High-Severity Linux Flaw Now Exploited by Ransomware Gangs](https://soylentnews.org/article.pl?sid=25/11/01/1652253&from=rss)

* [Massive Surge of NFC Relay Malware Steals Europeans’ Credit Cards](https://soylentnews.org/article.pl?sid=25/11/01/1951249&from=rss)

* [Qilin Ransomware Abuses WSL to Run Linux Encryptors in Windows](https://soylentnews.org/article.pl?sid=25/11/01/2018214&from=rss)

* [Defeating KASLR by Doing Nothing at All](https://googleprojectzero.blogspot.com/2025/11/defeating-kaslr-by-doing-nothing-at-all.html)

## Science and Exploration

* [First recording of a dying human brain shows waves similar to memory flashbacks (2022)](https://louisville.edu/medicine/news/first-ever-recording-of-a-dying-human-brain-shows-waves-similar-to-memory-flashbacks)

* [Skyfall-GS – Synthesizing Immersive 3D Urban Scenes from Satellite Imagery](https://skyfall-gs.jayinnn.dev/)

* [Deep Antarctic Waters Hold Geometric Communities of Fish Nests](https://soylentnews.org/article.pl?sid=25/10/30/0038222&from=rss)

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

* [2025-11-04, 05:53:02](https://news.ycombinator.com/item?id=45807775) - [Tell HN: X is opening any tweet link in a webview whether you press it or not](https://news.ycombinator.com/item?id=45807775)
* [2025-11-04, 05:23:00](https://soylentnews.org/article.pl?sid=25/11/02/2011253&amp;from=rss) - [Once Again, Chat Control Flails After Strong Public Pressure](https://soylentnews.org/article.pl?sid=25/11/02/2011253&amp;from=rss)
* [2025-11-04, 04:53:46](https://news.ycombinator.com/item?id=45807542) - [Why AC is cheap, but AC repair is a luxury](https://a16z.substack.com/p/why-ac-is-cheap-but-ac-repair-is)
* [2025-11-04, 04:52:39](https://lobste.rs/s/wjs6o2/what_laptops_are_lobsters_rocking_2025) - [What laptops are Lobsters rocking in 2025?](https://lobste.rs/s/wjs6o2/what_laptops_are_lobsters_rocking_2025)
* [2025-11-04, 04:46:47](https://news.ycombinator.com/item?id=45807502) - [Show HN: MyTimers.app offline-first PWA with no build step and zero dependencies](https://mytimers.app/)
* [2025-11-04, 03:46:39](https://lobste.rs/s/rxe2bq/webassembly_arch_support_for_linux) - [WebAssembly arch support for the Linux kernel](https://github.com/joelseverin/linux-wasm)
* [2025-11-04, 03:30:00](https://news.slashdot.org/story/25/11/04/0026217/antarctic-glacier-saw-the-fastest-retreat-in-modern-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Antarctic Glacier Saw the Fastest Retreat In Modern History](https://news.slashdot.org/story/25/11/04/0026217/antarctic-glacier-saw-the-fastest-retreat-in-modern-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-04, 02:58:40](https://news.ycombinator.com/item?id=45807018) - [An individual can change an organization](https://notes.eatonphil.com/2025-11-03-an-individual-can-change-an-organization.html)
* [2025-11-04, 02:37:01](https://news.ycombinator.com/item?id=45806903) - [My Truck Desk](https://www.theparisreview.org/blog/2025/10/29/truck-desk/)
* [2025-11-04, 02:10:00](https://hardware.slashdot.org/story/25/11/03/2351252/ladwp-says-it-will-shift-its-largest-gas-power-plant-to-hydrogen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LADWP Says It Will Shift Its Largest Gas Power Plant To Hydrogen](https://hardware.slashdot.org/story/25/11/03/2351252/ladwp-says-it-will-shift-its-largest-gas-power-plant-to-hydrogen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-04, 01:30:00](https://yro.slashdot.org/story/25/11/04/0011221/spotify-sued-over-billions-of-fraudulent-drake-streams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Sued Over &apos;Billions&apos; of Fraudulent Drake Streams](https://yro.slashdot.org/story/25/11/04/0011221/spotify-sued-over-billions-of-fraudulent-drake-streams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-04, 00:50:00](https://hardware.slashdot.org/story/25/11/04/000255/ukraine-first-to-demo-open-source-security-platform-to-help-secure-power-grid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ukraine First To Demo Open Source Security Platform To Help Secure Power Grid](https://hardware.slashdot.org/story/25/11/04/000255/ukraine-first-to-demo-open-source-security-platform-to-help-secure-power-grid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-04, 00:48:56](https://news.ycombinator.com/item?id=45806348) - [When stick figures fought](https://animationobsessive.substack.com/p/when-stick-figures-fought)
* [2025-11-04, 00:39:00](https://soylentnews.org/article.pl?sid=25/11/01/2010247&amp;from=rss) - [Cyber Exec with Lavish Lifestyle Charged with Selling Secrets to Russia](https://soylentnews.org/article.pl?sid=25/11/01/2010247&amp;from=rss)
* [2025-11-04, 00:10:00](https://tech.slashdot.org/story/25/11/03/2142220/amd-will-continue-game-optimization-support-for-older-radeon-gpus-after-all?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMD Will Continue Game Optimization Support For Older Radeon GPU&apos;s After All](https://tech.slashdot.org/story/25/11/03/2142220/amd-will-continue-game-optimization-support-for-older-radeon-gpus-after-all?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-04, 00:05:16](https://lobste.rs/s/oftb3t/free_software_scares_normal_people) - [Free software scares normal people](http://danieldelaney.net/normal/)
* [2025-11-03, 23:49:03](https://news.ycombinator.com/item?id=45805900) - [Things you can do with diodes](https://lcamtuf.substack.com/p/things-you-can-do-with-diodes)
* [2025-11-03, 23:30:00](https://tech.slashdot.org/story/25/11/03/2134217/waymo-to-expand-robotaxi-service-to-las-vegas-san-diego-and-detroit-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo To Expand Robotaxi Service To Las Vegas, San Diego and Detroit Next Year](https://tech.slashdot.org/story/25/11/03/2134217/waymo-to-expand-robotaxi-service-to-las-vegas-san-diego-and-detroit-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 23:04:22](https://news.ycombinator.com/item?id=45805539) - [A friendly tour of process memory on Linux](https://www.0xkato.xyz/linux-process-memory/)
* [2025-11-03, 23:01:08](https://news.ycombinator.com/item?id=45805514) - [Linkers (2007)](https://www.airs.com/blog/archives/38)
* [2025-11-03, 22:54:20](https://news.ycombinator.com/item?id=45805458) - [Guideline has been acquired by Gusto](https://help.guideline.com/en/articles/12694322-guideline-has-joined-gusto-faqs-about-our-recent-acquisition)
* [2025-11-03, 22:50:00](https://slashdot.org/story/25/11/03/2129227/coca-colas-new-ai-holiday-ad-is-a-sloppy-eyesore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Coca-Cola&apos;s New AI Holiday Ad Is a Sloppy Eyesore](https://slashdot.org/story/25/11/03/2129227/coca-colas-new-ai-holiday-ad-is-a-sloppy-eyesore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 22:10:00](https://tech.slashdot.org/story/25/11/03/2124238/google-removes-gemma-models-from-ai-studio-after-gop-senators-complaint?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Removes Gemma Models From AI Studio After GOP Senator&apos;s Complaint](https://tech.slashdot.org/story/25/11/03/2124238/google-removes-gemma-models-from-ai-studio-after-gop-senators-complaint?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 21:41:43](https://lobste.rs/s/wsrjf8/agent_shell_0_17_improvements_melpa) - [agent-shell 0.17 improvements + MELPA](https://xenodium.com/agent-shell-016-improvements-melpa)
* [2025-11-03, 21:30:00](https://news.slashdot.org/story/25/11/03/2018216/a-fight-over-credit-scores-turns-into-all-out-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Fight Over Credit Scores Turns Into All-Out War](https://news.slashdot.org/story/25/11/03/2018216/a-fight-over-credit-scores-turns-into-all-out-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 21:09:59](https://lobste.rs/s/ckuhmd/defeating_kaslr_by_doing_nothing_at_all) - [Defeating KASLR by Doing Nothing at All](https://googleprojectzero.blogspot.com/2025/11/defeating-kaslr-by-doing-nothing-at-all.html)
* [2025-11-03, 21:01:09](https://news.ycombinator.com/item?id=45804377) - [AI&apos;s Dial-Up Era](https://www.wreflection.com/p/ai-dial-up-era)
* [2025-11-03, 20:55:57](https://lobste.rs/s/snct9i/learning_read_arthur_whitney_s_c_become) - [Learning to read Arthur Whitney&apos;s C to become Smart](https://needleful.net/blog/2024/01/arthur_whitney.html)
* [2025-11-03, 20:45:00](https://apple.slashdot.org/story/25/11/03/2014204/apple-to-white-label-googles-gemini-model-for-next-generation-siri-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple To White-Label Google&apos;s Gemini Model for Next-Generation Siri, Report Says](https://apple.slashdot.org/story/25/11/03/2014204/apple-to-white-label-googles-gemini-model-for-next-generation-siri-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 20:37:34](https://news.ycombinator.com/item?id=45804122) - [The Mack Super Pumper was a locomotive engined fire fighter (2018)](https://bangshift.com/bangshiftxl/mack-super-pumper-system-locomotive-engine-powered-pumper-extinguish-hell-often/)
* [2025-11-03, 20:06:00](https://tech.slashdot.org/story/25/11/03/1930232/internet-archives-legal-fights-are-over-but-its-founder-mourns-what-was-lost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internet Archive&apos;s Legal Fights Are Over, But Its Founder Mourns What Was Lost](https://tech.slashdot.org/story/25/11/03/1930232/internet-archives-legal-fights-are-over-but-its-founder-mourns-what-was-lost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 19:55:50](https://lobste.rs/s/lqvf6n/fetch_ening) - [The fetch()ening](https://htmx.org/essays/the-fetchening/)
* [2025-11-03, 19:53:00](https://soylentnews.org/article.pl?sid=25/11/02/0832213&amp;from=rss) - [October&apos;s Research Roundup: 6 Cool Science Stories We Almost Missed](https://soylentnews.org/article.pl?sid=25/11/02/0832213&amp;from=rss)
* [2025-11-03, 19:40:00](https://lobste.rs/s/yc7dps/rdseed_failure_on_amd_zen_5_processors) - [RDSEED Failure on AMD “Zen 5” Processors](https://www.amd.com/en/resources/product-security/bulletin/amd-sb-7055.html)
* [2025-11-03, 19:36:22](https://lobste.rs/s/flln5g/state_terminal_emulators_2025_errant) - [State of Terminal Emulators in 2025: The Errant Champions](https://www.jeffquast.com/post/state-of-terminal-emulation-2025/)
* [2025-11-03, 19:25:00](https://tech.slashdot.org/story/25/11/03/1916215/the-curious-case-of-the-bizarre-disappearing-captcha?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Curious Case of the Bizarre, Disappearing Captcha](https://tech.slashdot.org/story/25/11/03/1916215/the-curious-case-of-the-bizarre-disappearing-captcha?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 19:01:52](https://lobste.rs/s/qcx6fq/i_built_my_own_google_drive) - [I Built My Own Google Drive](https://lorbic.com/i-built-my-own-google-drive/)
* [2025-11-03, 18:57:00](https://slashdot.org/story/25/11/03/1857255/studio-ghibli-bandai-namco-square-enix-demand-openai-stop-using-their-content-to-train-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Studio Ghibli, Bandai Namco, Square Enix Demand OpenAI Stop Using Their Content To Train AI](https://slashdot.org/story/25/11/03/1857255/studio-ghibli-bandai-namco-square-enix-demand-openai-stop-using-their-content-to-train-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 18:27:32](https://news.ycombinator.com/item?id=45802459) - [Gallery of wonderful drawings our little thermal printer received](https://guestbook.goodenough.us)
* [2025-11-03, 18:16:00](https://tech.slashdot.org/story/25/11/03/1816216/windows-7-squeezed-to-69mb-in-proof-of-concept-build?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 7 Squeezed To 69MB in Proof-of-Concept Build](https://tech.slashdot.org/story/25/11/03/1816216/windows-7-squeezed-to-69mb-in-proof-of-concept-build?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 17:55:10](https://news.ycombinator.com/item?id=45802029) - [The Case That A.I. Is Thinking](https://www.newyorker.com/magazine/2025/11/10/the-case-that-ai-is-thinking)
* [2025-11-03, 17:39:44](https://lobste.rs/s/kbp8xn/you_don_t_need_kafka_just_use_postgres) - [\&quot;You Don&apos;t Need Kafka, Just Use Postgres\&quot; Considered Harmful](https://www.morling.dev/blog/you-dont-need-kafka-just-use-postgres-considered-harmful/)
* [2025-11-03, 17:21:00](https://slashdot.org/story/25/11/03/1716252/arxiv-changes-rules-after-getting-spammed-with-ai-generated-research-papers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [arXiv Changes Rules After Getting Spammed With AI-Generated &apos;Research&apos; Papers](https://slashdot.org/story/25/11/03/1716252/arxiv-changes-rules-after-getting-spammed-with-ai-generated-research-papers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 16:23:11](https://news.ycombinator.com/item?id=45800777) - [Learning to read Arthur Whitney&apos;s C to become smart (2024)](https://needleful.net/blog/2024/01/arthur_whitney.html)
* [2025-11-03, 16:06:26](https://lobste.rs/s/l6q8rj/cheriot_1_0_released) - [CHERIoT 1.0 Released](https://cheriot.org/sail/specification/release/2025/11/03/cheriot-1.0.html)
* [2025-11-03, 16:00:00](https://news.ycombinator.com/item?id=45800465) - [Ask HN: Who is hiring? (November 2025)](https://news.ycombinator.com/item?id=45800465)
* [2025-11-03, 16:00:00](https://news.ycombinator.com/item?id=45800464) - [Ask HN: Who wants to be hired? (November 2025)](https://news.ycombinator.com/item?id=45800464)
* [2025-11-03, 15:10:00](https://soylentnews.org/article.pl?sid=25/11/01/2018214&amp;from=rss) - [Qilin Ransomware Abuses WSL to Run Linux Encryptors in Windows](https://soylentnews.org/article.pl?sid=25/11/01/2018214&amp;from=rss)
* [2025-11-03, 15:02:25](https://lobste.rs/s/tqwmbn/cast_x_as_string_casts_integer_sqlite) - [CAST(x AS STRING) casts to integer in SQLite](https://lalitm.com/cast-x-as-string-casts-to-integer-in-sqlite/)
* [2025-11-03, 14:40:51](https://news.ycombinator.com/item?id=45799478) - [State of Terminal Emulators in 2025: The Errant Champions](https://www.jeffquast.com/post/state-of-terminal-emulation-2025/)
* [2025-11-03, 14:15:23](https://lobste.rs/s/sbrnnl/c_move_semantics_from_scratch_2022) - [C++ move semantics from scratch (2022)](https://cbarrete.com/move-from-scratch.html)
* [2025-11-03, 13:46:19](https://news.ycombinator.com/item?id=45798881) - [Skyfall-GS – Synthesizing Immersive 3D Urban Scenes from Satellite Imagery](https://skyfall-gs.jayinnn.dev/)
* [2025-11-03, 13:31:19](https://lobste.rs/s/mp8rib/prefer_boring_technology) - [Prefer boring technology](https://itwont.work/blog/prefer-boring-technology)
* [2025-11-03, 13:21:09](https://news.ycombinator.com/item?id=45798681) - [Why Nextcloud feels slow to use](https://ounapuu.ee/posts/2025/11/03/nextcloud-slow/)
* [2025-11-03, 12:50:27](https://news.ycombinator.com/item?id=45798479) - [The Case Against PGVector](https://alex-jacobs.com/posts/the-case-against-pgvector/)
* [2025-11-03, 12:27:46](https://lobste.rs/s/neu41n/soiree_into_symbols_ruby) - [A Soiree into Symbols in Ruby](https://tech.stonecharioteer.com/posts/2025/ruby-symbols/)
* [2025-11-03, 12:18:50](https://lobste.rs/s/2eofir/a11y_css) - [a11y.css](https://ffoodd.github.io/a11y.css/)
* [2025-11-03, 10:47:29](https://lobste.rs/s/wca9sz/cure_verification_first_programming_for) - [Cure - Verification-First Programming for the BEAM](https://cure-lang.org/)
* [2025-11-03, 10:25:00](https://soylentnews.org/article.pl?sid=25/11/02/0835217&amp;from=rss) - [Nvidia Hits Record $5 Trillion Mark as CEO Dismisses AI Bubble Concerns](https://soylentnews.org/article.pl?sid=25/11/02/0835217&amp;from=rss)
* [2025-11-03, 09:24:39](https://lobste.rs/s/7rhkpy/absurd_workflows_durable_execution_with) - [Absurd Workflows: Durable Execution With Just Postgres](https://lucumr.pocoo.org/2025/11/3/absurd-workflows)
* [2025-11-03, 06:43:41](https://lobste.rs/s/wiokzi/don_t_give_postgres_too_much_memory) - [Don&apos;t give Postgres too much memory](https://vondra.me/posts/dont-give-postgres-too-much-memory/)
* [2025-11-03, 06:39:13](https://news.ycombinator.com/item?id=45796421) - [First recording of a dying human brain shows waves similar to memory flashbacks (2022)](https://louisville.edu/medicine/news/first-ever-recording-of-a-dying-human-brain-shows-waves-similar-to-memory-flashbacks)
* [2025-11-03, 06:30:45](https://lobste.rs/s/j8dni3/why_don_t_you_use_dependent_types) - [\&quot;Why don&apos;t you use dependent types?\&quot;](https://lawrencecpaulson.github.io//2025/11/02/Why-not-dependent.html)
* [2025-11-03, 05:40:00](https://soylentnews.org/article.pl?sid=25/11/01/1951249&amp;from=rss) - [Massive Surge of NFC Relay Malware Steals Europeans’ Credit Cards](https://soylentnews.org/article.pl?sid=25/11/01/1951249&amp;from=rss)
* [2025-11-03, 01:00:00](https://soylentnews.org/article.pl?sid=25/11/01/1944249&amp;from=rss) - [AI Review Paper Slop Changing Moderation Policy at arXiv CS](https://soylentnews.org/article.pl?sid=25/11/01/1944249&amp;from=rss)
* [2025-11-02, 23:51:03](https://lobste.rs/s/q7wvs1/i_ing_hate_science_2021) - [I ****ing hate Science (2021)](https://buttondown.com/hillelwayne/archive/i-ing-hate-science/)
* [2025-11-02, 22:52:04](https://lobste.rs/s/gig2wt/you_don_t_need_anubis) - [You don&apos;t need anubis](https://fxgn.dev/blog/anubis/)
* [2025-11-02, 20:20:00](https://soylentnews.org/article.pl?sid=25/11/01/1849207&amp;from=rss) - [Meta: Pirated Adult Film Downloads Were For “Personal Use,” Not AI Training](https://soylentnews.org/article.pl?sid=25/11/01/1849207&amp;from=rss)
* [2025-11-02, 15:39:00](https://soylentnews.org/article.pl?sid=25/11/01/1652253&amp;from=rss) - [CISA: High-Severity Linux Flaw Now Exploited by Ransomware Gangs](https://soylentnews.org/article.pl?sid=25/11/01/1652253&amp;from=rss)
* [2025-11-02, 15:10:45](https://lobste.rs/s/uwyfpy/build_system_tradeoffs) - [build system tradeoffs](https://jyn.dev/build-system-tradeoffs)
* [2025-11-02, 13:12:30](https://lobste.rs/s/ug6vbv/prison_my_own_making) - [A prison of my own making](https://jsteuernagel.de/posts/a-prison-of-my-own-making/)
* [2025-11-02, 10:56:00](https://soylentnews.org/article.pl?sid=25/11/01/1648226&amp;from=rss) - [Bonfire of the Vanities](https://soylentnews.org/article.pl?sid=25/11/01/1648226&amp;from=rss)
* [2025-11-02, 06:07:00](https://soylentnews.org/article.pl?sid=25/11/01/1239234&amp;from=rss) - [Spinning Up an Onion Mirror is Stupid Easy](https://soylentnews.org/article.pl?sid=25/11/01/1239234&amp;from=rss)
* [2025-11-02, 01:26:00](https://soylentnews.org/article.pl?sid=25/10/31/1858243&amp;from=rss) - [‘Spaceballs 2’ Starts Production](https://soylentnews.org/article.pl?sid=25/10/31/1858243&amp;from=rss)
* [2025-11-01, 20:39:00](https://soylentnews.org/article.pl?sid=25/10/31/1854228&amp;from=rss) - [China Releases &apos;UBIOS&apos; Standard to Replace UEFI](https://soylentnews.org/article.pl?sid=25/10/31/1854228&amp;from=rss)
* [2025-11-01, 16:39:05](https://news.ycombinator.com/item?id=45783074) - [WebAssembly (WASM) arch support for the Linux kernel](https://github.com/joelseverin/linux-wasm)
* [2025-11-01, 15:55:00](https://soylentnews.org/article.pl?sid=25/10/31/1847233&amp;from=rss) - [Nvidia Reveals Vera Rubin Superchip for the First Time](https://soylentnews.org/article.pl?sid=25/10/31/1847233&amp;from=rss)
* [2025-11-01, 11:11:00](https://soylentnews.org/article.pl?sid=25/10/31/1242232&amp;from=rss) - [ICE and CBP Agents Are Scanning Peoples’ Faces on the Street to Verify Citizenship](https://soylentnews.org/article.pl?sid=25/10/31/1242232&amp;from=rss)
* [2025-11-01, 06:27:00](https://soylentnews.org/article.pl?sid=25/10/31/1238201&amp;from=rss) - [Nearly 90% of Windows Games Now Run on Linux](https://soylentnews.org/article.pl?sid=25/10/31/1238201&amp;from=rss)
* [2025-11-01, 01:41:00](https://soylentnews.org/article.pl?sid=25/10/31/1232227&amp;from=rss) - [Quantum Mechanics Trumps the Second Law of Thermodynamics at the Atomic Scale](https://soylentnews.org/article.pl?sid=25/10/31/1232227&amp;from=rss)
* [2025-10-31, 20:57:00](https://soylentnews.org/article.pl?sid=25/10/30/1428231&amp;from=rss) - [Tor Browser 15.0 Anonymous Web Browser Is Out Based on Firefox 140 ESR Series](https://soylentnews.org/article.pl?sid=25/10/30/1428231&amp;from=rss)
* [2025-10-31, 16:13:00](https://soylentnews.org/article.pl?sid=25/10/30/1156208&amp;from=rss) - [Red Hat and Other Distros to Provide Easy Access to NVIDIA CUDA Tools](https://soylentnews.org/article.pl?sid=25/10/30/1156208&amp;from=rss)
* [2025-10-31, 11:25:00](https://soylentnews.org/article.pl?sid=25/10/30/0038222&amp;from=rss) - [Deep Antarctic Waters Hold Geometric Communities of Fish Nests](https://soylentnews.org/article.pl?sid=25/10/30/0038222&amp;from=rss)
* [2025-10-31, 06:36:00](https://soylentnews.org/article.pl?sid=25/10/30/0034203&amp;from=rss) - [China Submerges a Data Center in the Ocean to Conserve Water, is That Even a Good Idea?](https://soylentnews.org/article.pl?sid=25/10/30/0034203&amp;from=rss)
* [2025-10-31, 01:42:00](https://soylentnews.org/article.pl?sid=25/10/30/0024205&amp;from=rss) - [US EV Sales Will Collapse 60% In October, J.D. Power Forecasts](https://soylentnews.org/article.pl?sid=25/10/30/0024205&amp;from=rss)
