# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Robot Birds Deployed by Park to Attract Real Birds - Built By High School Students](https://news.slashdot.org/story/26/04/13/0115243/robot-birds-deployed-by-park-to-attract-real-birds---built-by-high-school-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - High school students create robotic birds to attract real birds to a park, showcasing innovation in eco-friendly technology.

* [Has the Rust Programming Language's Popularity Reached Its Plateau?](https://developers.slashdot.org/story/26/04/12/2329229/has-the-rust-programming-languages-popularity-reached-its-plateau?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Speculation arises over whether the Rust programming language has reached its peak in popularity.

* [How Good is Windows on Arm With Snapdragon X?](https://hardware.slashdot.org/story/26/04/12/2149242/how-good-is-windows-on-arm-with-snapdragon-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A review and analysis of Windows' performance on Arm architecture using the Snapdragon X platform.

* [AI That Bankrupted a Vending Machine is Now Running a Store in San Francisco](https://slashdot.org/story/26/04/12/0447236/ai-that-bankrupted-a-vending-machine-is-now-running-a-store-in-san-francisco?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A fascinating look at how an AI system that failed in one domain is now being applied to a new use case in San Francisco.

* [A Perfectable Programming Language](https://alok.github.io/lean-pages/perfectable-lean/) - Exploration of the concept of a 'perfectable' programming language and how it could revolutionize software development.

## Scientific Advancements

* [Oxygen Made From Moon Dust For First Time](https://science.slashdot.org/story/26/04/11/2250208/oxygen-made-from-moon-dust-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Scientists achieve a groundbreaking method to produce oxygen directly from moon dust, a potential leap for space exploration.

* [DNA-Level Encryption Developed by Researchers to Protect the Secrets of Bioengineered Cells](https://science.slashdot.org/story/26/04/12/0511204/dna-level-encryption-developed-by-researchers-to-protect-the-secrets-of-bioengineered-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A revolutionary approach to securing bioengineered cells using DNA-level encryption techniques.

## Business and Economics

* [Tech valuations are back to pre-AI boom levels](https://www.apollo.com/wealth/the-daily-spark/tech-valuations-back-to-pre-ai-boom-levels) - Technology companies are witnessing a decline in valuations to levels before the recent AI-driven boom.

## Programming and Development

* [SQL Has Problems. We Can Fix Them: Pipe Syntax In SQL (2024)](https://research.google/pubs/sql-has-problems-we-can-fix-them-pipe-syntax-in-sql/) - Introduction of a new pipe syntax proposed to address inherent problems in SQL development post-2024.

* [Bring Back Idiomatic Design](https://essays.johnloeber.com/p/4-bring-back-idiomatic-design) - A call to revive the principles of design that deliver intuitive and efficient software user experiences.

## Innovative Startups and Projects

* [48 hours ago lobste.rs surpassed 20,000 users](https://lobste.rs/s/7fhahl/48_hours_ago_lobste_rs_surpassed_20_000) - Milestone achievement as the Lobste.rs community grows past 20,000 active participants.

* [Neuroscientist's AI-Powered Startup Aims To Transform Human Cognition With Perfect, Infinite Memory](https://hardware.slashdot.org/story/26/04/12/0640253/neuroscientists-ai-powered-startup-aims-to-transform-human-cognition-with-perfect-infinite-memory?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A startup leverages AI to enhance human cognitive capabilities with infinite, flawless recall memory.

## Historical and Cultural Fascinations

* [An undocumented bug in the Apollo 11 guidance computer code](https://www.juxt.pro/blog/a-bug-on-the-dark-side-of-the-moon/) - Deep dive into a bug in the Apollo 11 guidance system that was never documented but played a role in space history.

* [Investigating How Long-Distance Couples Use Digital Games to Facilitate Intimacy](https://arxiv.org/abs/2505.09509) - Research examines how couples in long-distance relationships use gaming as a medium to sustain emotional closeness.

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

* [2026-04-13, 01:34:00](https://news.slashdot.org/story/26/04/13/0115243/robot-birds-deployed-by-park-to-attract-real-birds---built-by-high-school-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robot Birds Deployed by Park to Attract Real Birds - Built By High School Students](https://news.slashdot.org/story/26/04/13/0115243/robot-birds-deployed-by-park-to-attract-real-birds---built-by-high-school-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 00:53:28](https://lobste.rs/s/yiiupr/sql_has_problems_we_can_fix_them_pipe) - [SQL Has Problems. We Can Fix Them: Pipe Syntax In SQL (2024)](https://research.google/pubs/sql-has-problems-we-can-fix-them-pipe-syntax-in-sql/)
* [2026-04-12, 23:48:00](https://soylentnews.org/article.pl?sid=26/04/11/0321245&amp;from=rss) - [&apos;Dead End&apos;: Radical 20-Year Study Reveals Genetic Cloning Hits a Limit](https://soylentnews.org/article.pl?sid=26/04/11/0321245&amp;from=rss)
* [2026-04-12, 23:32:00](https://lobste.rs/s/6wxsq3/native_raspberry_pi_3b_version_oberon) - [Native Raspberry Pi 3b version of the Oberon System 3](https://github.com/rochus-keller/OberonSystem3Native/releases/tag/2026-04-10)
* [2026-04-12, 23:32:00](https://developers.slashdot.org/story/26/04/12/2329229/has-the-rust-programming-languages-popularity-reached-its-plateau?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Has the Rust Programming Language&apos;s Popularity Reached Its Plateau?](https://developers.slashdot.org/story/26/04/12/2329229/has-the-rust-programming-languages-popularity-reached-its-plateau?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 22:38:45](https://news.ycombinator.com/item?id=47745284) - [Taking on CUDA with ROCm: &apos;One Step After Another&apos;](https://www.eetimes.com/taking-on-cuda-with-rocm-one-step-after-another/)
* [2026-04-12, 22:13:22](https://news.ycombinator.com/item?id=47745120) - [Tech valuations are back to pre-AI boom levels](https://www.apollo.com/wealth/the-daily-spark/tech-valuations-back-to-pre-ai-boom-levels)
* [2026-04-12, 21:52:00](https://hardware.slashdot.org/story/26/04/12/2149242/how-good-is-windows-on-arm-with-snapdragon-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Good is Windows on Arm With Snapdragon X?](https://hardware.slashdot.org/story/26/04/12/2149242/how-good-is-windows-on-arm-with-snapdragon-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 21:34:10](https://lobste.rs/s/pel3uq/undocumented_bug_apollo_11_guidance) - [An undocumented bug in the Apollo 11 guidance computer code](https://www.juxt.pro/blog/a-bug-on-the-dark-side-of-the-moon/)
* [2026-04-12, 21:19:55](https://lobste.rs/s/kulbhu/mark_s_magic_multiply) - [Mark’s Magic Multiply](https://wren.wtf/shower-thoughts/marks-magic-multiply/)
* [2026-04-12, 21:11:24](https://news.ycombinator.com/item?id=47744540) - [A Perfectable Programming Language](https://alok.github.io/lean-pages/perfectable-lean/)
* [2026-04-12, 20:50:50](https://lobste.rs/s/tphqlg/i_want_better_build_action_graph) - [I want a better [build] action graph serialization](https://jyn.dev/i-want-a-better-action-graph-serialization/)
* [2026-04-12, 20:31:59](https://lobste.rs/s/9ihinj/business_case_for_vanilla_js) - [The Business Case for Vanilla JS](https://lewiscampbell.tech/blog/250430.html)
* [2026-04-12, 20:30:11](https://news.ycombinator.com/item?id=47744132) - [Uncharted island soon to appear on nautical charts](https://www.awi.de/en/about-us/service/press/single-view/unkartierte-insel-demnaechst-auf-seekarten-verzeichnet.html)
* [2026-04-12, 20:13:00](https://entertainment.slashdot.org/story/26/04/12/2010229/super-mario-galaxy-movie-and-project-hail-mary-combine-for-best-box-office-in-7-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Super Mario Galaxy Movie&apos; and &apos;Project Hail Mary&apos; Combine for Best Box Office in 7 Years](https://entertainment.slashdot.org/story/26/04/12/2010229/super-mario-galaxy-movie-and-project-hail-mary-combine-for-best-box-office-in-7-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 19:53:57](https://lobste.rs/s/7fhahl/48_hours_ago_lobste_rs_surpassed_20_000) - [48 hours ago lobste.rs surpassed 20,000 users](https://lobste.rs/s/7fhahl/48_hours_ago_lobste_rs_surpassed_20_000)
* [2026-04-12, 19:53:08](https://news.ycombinator.com/item?id=47743730) - [Google removes \&quot;Doki Doki Literature Club\&quot; from Google Play](https://bsky.app/profile/serenityforge.com/post/3mj3r4nbiws2t)
* [2026-04-12, 19:51:06](https://news.ycombinator.com/item?id=47743700) - [European AI. A playbook to own it](https://europe.mistral.ai/)
* [2026-04-12, 19:44:40](https://news.ycombinator.com/item?id=47743628) - [The peril of laziness lost](https://bcantrill.dtrace.org/2026/04/12/the-peril-of-laziness-lost/)
* [2026-04-12, 19:17:36](https://lobste.rs/s/tmddcs/peril_laziness_lost) - [The peril of laziness lost](https://bcantrill.dtrace.org/2026/04/12/the-peril-of-laziness-lost/)
* [2026-04-12, 19:02:00](https://soylentnews.org/article.pl?sid=26/04/11/0313203&amp;from=rss) - [Tech Industry Lays Off Nearly 80,000 Employees in the First Quarter of 2026 (Almost 50% Due to AI)](https://soylentnews.org/article.pl?sid=26/04/11/0313203&amp;from=rss)
* [2026-04-12, 19:01:46](https://lobste.rs/s/o2b59m/forgejo_monthly_report_march_2026) - [Forgejo monthly report - March 2026](https://forgejo.org/2026-03-monthly-report/)
* [2026-04-12, 18:55:00](https://hardware.slashdot.org/story/26/04/12/1854206/hisenses-new-backlit-rgb-led-tv-a-shot-against-oleds-bow-and-includes-a-dp-port?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hisense&apos;s New Backlit RGB LED TV &apos;a Shot Against OLED&apos;s Bow&apos;, and Includes a DP Port](https://hardware.slashdot.org/story/26/04/12/1854206/hisenses-new-backlit-rgb-led-tv-a-shot-against-oleds-bow-and-includes-a-dp-port?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 18:32:46](https://lobste.rs/s/vpdpkq/llm_reviews_cargo_crev) - [LLM Reviews in cargo-crev](https://dpc.pw/posts/llm-reviews-in-cargo-crev/)
* [2026-04-12, 18:30:29](https://news.ycombinator.com/item?id=47742790) - [The Closing of the Frontier](https://tanyaverma.sh/2026/04/10/closing-of-the-frontier.html)
* [2026-04-12, 17:56:19](https://lobste.rs/s/hkmwlc/speeding_up_access_openstreetmap_vector) - [Speeding up access to OpenStreetMap vector tiles](https://www.openstreetmap.org/user/SomeoneElse/diary/408501)
* [2026-04-12, 17:34:00](https://news.slashdot.org/story/26/04/12/1728224/botched-it-upgrade-ended-liquor-sales-for-the-entire-state-of-mississippi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Botched IT Upgrade Ended Liquor Sales for the Entire State of Mississippi](https://news.slashdot.org/story/26/04/12/1728224/botched-it-upgrade-ended-liquor-sales-for-the-entire-state-of-mississippi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 17:25:44](https://news.ycombinator.com/item?id=47742200) - [Show HN: boringBar – a taskbar-style dock replacement for macOS](https://boringbar.app/)
* [2026-04-12, 17:01:26](https://news.ycombinator.com/item?id=47741953) - [EasyPost (YC S13) Is Hiring](https://www.easypost.com/careers)
* [2026-04-12, 16:55:20](https://news.ycombinator.com/item?id=47741889) - [Show HN: Claudraband – Claude Code for the Power User](https://github.com/halfwhey/claudraband)
* [2026-04-12, 16:38:43](https://news.ycombinator.com/item?id=47741701) - [DIY Soft Drinks](https://blinry.org/diy-soft-drinks/)
* [2026-04-12, 16:34:00](https://hardware.slashdot.org/story/26/04/12/0640253/neuroscientists-ai-powered-startup-aims-to-transform-human-cognition-with-perfect-infinite-memory?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Neuroscientist&apos;s AI-Powered Startup Aims To Transform Human Cognition With Perfect, Infinite Memory](https://hardware.slashdot.org/story/26/04/12/0640253/neuroscientists-ai-powered-startup-aims-to-transform-human-cognition-with-perfect-infinite-memory?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 16:24:43](https://news.ycombinator.com/item?id=47741527) - [Ask HN: What Are You Working On? (April 2026)](https://news.ycombinator.com/item?id=47741527)
* [2026-04-12, 16:19:15](https://lobste.rs/s/5ywxzh/bring_back_idiomatic_design) - [Bring Back Idiomatic Design](https://essays.johnloeber.com/p/4-bring-back-idiomatic-design)
* [2026-04-12, 16:17:59](https://news.ycombinator.com/item?id=47741460) - [Investigating How Long-Distance Couples Use Digital Games to Facilitate Intimacy](https://arxiv.org/abs/2505.09509)
* [2026-04-12, 16:10:51](https://news.ycombinator.com/item?id=47741393) - [Textbooks and Methods of Note-Taking in Early Modern Europe (2008)](https://dash.harvard.edu/server/api/core/bitstreams/7312037d-e342-6bd4-e053-0100007fdf3b/content)
* [2026-04-12, 15:53:24](https://lobste.rs/s/gptqt7/how_i_run_multiple_10k_mrr_companies_on_20) - [How I run multiple $10K MRR companies on a $20/month tech stack](https://stevehanov.ca/blog/how-i-run-multiple-10k-mrr-companies-on-a-20month-tech-stack)
* [2026-04-12, 15:34:00](https://science.slashdot.org/story/26/04/12/0511204/dna-level-encryption-developed-by-researchers-to-protect-the-secrets-of-bioengineered-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DNA-Level Encryption Developed by Researchers to Protect the Secrets of Bioengineered Cells](https://science.slashdot.org/story/26/04/12/0511204/dna-level-encryption-developed-by-researchers-to-protect-the-secrets-of-bioengineered-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 14:56:18](https://lobste.rs/s/ogz2ro/what_is_property) - [What is a property?](https://alperenkeles.com/posts/what-is-a-property/)
* [2026-04-12, 14:34:00](https://linux.slashdot.org/story/26/04/12/063252/greg-kroah-hartman-tests-new-clanker-t1000-fuzzing-tool-for-linux-patches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Greg Kroah-Hartman Tests New &apos;Clanker T1000&apos; Fuzzing Tool for Linux Patches](https://linux.slashdot.org/story/26/04/12/063252/greg-kroah-hartman-tests-new-clanker-t1000-fuzzing-tool-for-linux-patches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 14:15:00](https://soylentnews.org/article.pl?sid=26/04/11/037238&amp;from=rss) - [Dad Stuck in Support Nightmare After Teen Lied About Age on Discord](https://soylentnews.org/article.pl?sid=26/04/11/037238&amp;from=rss)
* [2026-04-12, 13:21:39](https://news.ycombinator.com/item?id=47739313) - [Seven countries now generate 100% of their electricity from renewable energy](https://www.the-independent.com/tech/renewable-energy-solar-nepal-bhutan-iceland-b2533699.html)
* [2026-04-12, 13:06:44](https://news.ycombinator.com/item?id=47739174) - [Show HN: Oberon System 3 runs natively on Raspberry Pi 3 (with ready SD card)](https://github.com/rochus-keller/OberonSystem3Native/releases)
* [2026-04-12, 12:28:57](https://news.ycombinator.com/item?id=47738883) - [Tell HN: docker pull fails in spain due to football cloudflare block](https://news.ycombinator.com/item?id=47738883)
* [2026-04-12, 12:21:26](https://news.ycombinator.com/item?id=47738827) - [Bring Back Idiomatic Design](https://essays.johnloeber.com/p/4-bring-back-idiomatic-design)
* [2026-04-12, 11:36:00](https://lobste.rs/s/4kticv/rust_is_just_tool) - [Rust is Just a Tool](https://lewiscampbell.tech/blog/260204.html)
* [2026-04-12, 10:34:00](https://news.slashdot.org/story/26/04/11/2331242/crypto-billionaire-pardoned-in-prison-by-trump-just-wrote-a-memoir?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Crypto Billionaire Pardoned In Prison By Trump Just Wrote a Memoir](https://news.slashdot.org/story/26/04/11/2331242/crypto-billionaire-pardoned-in-prison-by-trump-just-wrote-a-memoir?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 10:29:26](https://news.ycombinator.com/item?id=47738094) - [JVM Options Explorer](https://chriswhocodes.com/vm-options-explorer.html)
* [2026-04-12, 10:04:37](https://lobste.rs/s/apczke/doom_played_over_curl) - [DOOM, played over cURL](https://github.com/xsawyerx/curl-doom)
* [2026-04-12, 10:01:54](https://news.ycombinator.com/item?id=47737876) - [Doom, Played over Curl](https://github.com/xsawyerx/curl-doom)
* [2026-04-12, 09:33:00](https://soylentnews.org/article.pl?sid=26/04/11/0256207&amp;from=rss) - [Federal Cyber Experts Called Microsoft&apos;s Cloud a “Pile of Sh*T,” Approved It Anyway](https://soylentnews.org/article.pl?sid=26/04/11/0256207&amp;from=rss)
* [2026-04-12, 08:38:11](https://news.ycombinator.com/item?id=47737376) - [Phyphox – Physical Experiments Using a Smartphone](https://phyphox.org/)
* [2026-04-12, 07:40:27](https://lobste.rs/s/ipqq90/quest_for_perfect_2d_sprite_pipeline) - [The quest for the perfect 2D sprite pipeline](https://www.coldbytesgames.com/blog/sprite_pipeline/)
* [2026-04-12, 07:34:00](https://slashdot.org/story/26/04/12/0447236/ai-that-bankrupted-a-vending-machine-is-now-running-a-store-in-san-francisco?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI That Bankrupted a Vending Machine is Now Running a Store in San Francisco](https://slashdot.org/story/26/04/12/0447236/ai-that-bankrupted-a-vending-machine-is-now-running-a-store-in-san-francisco?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 06:46:36](https://lobste.rs/s/iy5upt/irda) - [IrDA](https://computer.rip/2026-04-11-IrDA.html)
* [2026-04-12, 05:56:33](https://lobste.rs/s/s8znzv/end_eleventy) - [The End of Eleventy](https://brennan.day/the-end-of-eleventy/)
* [2026-04-12, 05:51:20](https://lobste.rs/s/uahlqe/why_i_m_building_database_engine_c) - [Why I&apos;m Building a Database Engine in C#](https://nockawa.github.io/blog/why-building-database-engine-in-csharp/)
* [2026-04-12, 05:45:52](https://news.ycombinator.com/item?id=47736476) - [Anthropic downgraded cache TTL on March 6th](https://github.com/anthropics/claude-code/issues/46829)
* [2026-04-12, 04:44:00](https://soylentnews.org/article.pl?sid=26/04/11/0245252&amp;from=rss) - [3D Printing a Motor--Some First Steps](https://soylentnews.org/article.pl?sid=26/04/11/0245252&amp;from=rss)
* [2026-04-12, 04:07:00](https://news.slashdot.org/story/26/04/12/0053202/latin-americas-central-banks-establish-digital-payments-used-by-hundreds-of-millions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Latin America&apos;s Central Banks Establish Digital Payments Used By Hundreds of Millions](https://news.slashdot.org/story/26/04/12/0053202/latin-americas-central-banks-establish-digital-payments-used-by-hundreds-of-millions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 02:07:00](https://yro.slashdot.org/story/26/04/12/025259/judge-pauses-arizonas-prosecution-of-kalshi-bars-arizona-from-regulating-prediction-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Pauses Arizona&apos;s Prosecution of Kalshi, Bars Arizona from Regulating Prediction Markets](https://yro.slashdot.org/story/26/04/12/025259/judge-pauses-arizonas-prosecution-of-kalshi-bars-arizona-from-regulating-prediction-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 00:10:54](https://lobste.rs/s/66gclj/surely_there_must_be_way_make_container) - [Surely there must be a way to make container secrets less dangerous?](https://dalmatian.life/2026/04/11/surely-there-must-be-a-way-to-make-container-secrets-less-dangerous/)
* [2026-04-12, 00:03:00](https://soylentnews.org/article.pl?sid=26/04/11/0242235&amp;from=rss) - [This New &apos;Laughing Rat&apos; Malware Will Steal Your Data, Hack Your Systems, and Laugh at You](https://soylentnews.org/article.pl?sid=26/04/11/0242235&amp;from=rss)
* [2026-04-11, 22:52:00](https://science.slashdot.org/story/26/04/11/2250208/oxygen-made-from-moon-dust-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oxygen Made From Moon Dust For First Time](https://science.slashdot.org/story/26/04/11/2250208/oxygen-made-from-moon-dust-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-11, 21:34:00](https://games.slashdot.org/story/26/04/11/2130243/amazon-luna-ends-its-support-for-purchased-games-and-third-party-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Luna Ends Its Support for Purchased Games and Third-Party Subscriptions](https://games.slashdot.org/story/26/04/11/2130243/amazon-luna-ends-its-support-for-purchased-games-and-third-party-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-11, 21:00:27](https://lobste.rs/s/cxwidw/no_one_owes_you_supply_chain_security) - [No one owes you supply-chain security](https://purplesyringa.moe/blog/no-one-owes-you-supply-chain-security/)
* [2026-04-11, 20:26:47](https://lobste.rs/s/0ddkvb/brocards_for_vulnerability_triage) - [Brocards for vulnerability triage](https://blog.yossarian.net/2026/04/11/Brocards-for-vulnerability-triage)
* [2026-04-11, 19:18:00](https://soylentnews.org/article.pl?sid=26/04/10/0259257&amp;from=rss) - [EFF is Leaving X](https://soylentnews.org/article.pl?sid=26/04/10/0259257&amp;from=rss)
* [2026-04-11, 19:15:56](https://news.ycombinator.com/item?id=47733217) - [Exploiting the most prominent AI agent benchmarks](https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/)
* [2026-04-11, 14:35:00](https://soylentnews.org/article.pl?sid=26/04/10/0256206&amp;from=rss) - [Standard Model of Particle Physics Verified to One Trillionth Accuracy](https://soylentnews.org/article.pl?sid=26/04/10/0256206&amp;from=rss)
* [2026-04-11, 11:18:56](https://lobste.rs/s/sqsb24/sqlite_3_53_0) - [SQLite 3.53.0](https://sqlite.org/releaselog/3_53_0.html)
* [2026-04-11, 09:58:56](https://lobste.rs/s/t1uxjh/i_just_want_simple_s3) - [I Just Want Simple S3](https://blog.feld.me/posts/2026/04/i-just-want-simple-s3/)
* [2026-04-11, 09:50:00](https://soylentnews.org/article.pl?sid=26/04/10/0254231&amp;from=rss) - [Toward Cheaper, Cleaner Hydrogen Production](https://soylentnews.org/article.pl?sid=26/04/10/0254231&amp;from=rss)
* [2026-04-11, 09:03:34](https://news.ycombinator.com/item?id=47728879) - [Mark&apos;s Magic Multiply](https://wren.wtf/shower-thoughts/marks-magic-multiply/)
* [2026-04-11, 05:09:00](https://soylentnews.org/article.pl?sid=26/04/10/0250211&amp;from=rss) - [Honda Hits Brakes On EV Rollout Amid Rising Losses](https://soylentnews.org/article.pl?sid=26/04/10/0250211&amp;from=rss)
* [2026-04-11, 00:27:00](https://soylentnews.org/article.pl?sid=26/04/10/0248230&amp;from=rss) - [Ancient Rocks Reveal Evidence of the First Continents and Crust Recycling Processes on Earth](https://soylentnews.org/article.pl?sid=26/04/10/0248230&amp;from=rss)
* [2026-04-10, 19:36:00](https://soylentnews.org/article.pl?sid=26/04/09/067240&amp;from=rss) - [Adobe Secretly Modifies Your Hosts File for the Stupidest Reason](https://soylentnews.org/article.pl?sid=26/04/09/067240&amp;from=rss)
* [2026-04-10, 15:21:07](https://news.ycombinator.com/item?id=47719490) - [I gave every train in New York an instrument](https://www.trainjazz.com/)
* [2026-04-10, 14:53:00](https://soylentnews.org/article.pl?sid=26/04/09/065206&amp;from=rss) - [Debian’s APT 3.2 Released with History, Undo, Redo, and Rollback Support](https://soylentnews.org/article.pl?sid=26/04/09/065206&amp;from=rss)
* [2026-04-10, 13:16:12](https://news.ycombinator.com/item?id=47717690) - [Cooperative Vectors Introduction](https://www.evolvebenchmark.com/blog-posts/cooperative-vectors-introduction)
* [2026-04-10, 10:07:00](https://soylentnews.org/article.pl?sid=26/04/08/1917256&amp;from=rss) - [Researchers Discover How to Dampen Electronic Noise Using Nanowires](https://soylentnews.org/article.pl?sid=26/04/08/1917256&amp;from=rss)
* [2026-04-10, 05:23:00](https://soylentnews.org/article.pl?sid=26/04/08/1916208&amp;from=rss) - [White House Seeks Deep NASA Cuts as Artemis II Breaks Spaceflight Record](https://soylentnews.org/article.pl?sid=26/04/08/1916208&amp;from=rss)
* [2026-04-10, 00:37:00](https://soylentnews.org/article.pl?sid=26/04/08/1912232&amp;from=rss) - [&apos;Voorhees Law&apos; Explains Why the Slower Car Often Catches up](https://soylentnews.org/article.pl?sid=26/04/08/1912232&amp;from=rss)
* [2026-04-09, 19:52:00](https://soylentnews.org/article.pl?sid=26/04/08/198248&amp;from=rss) - [Testing Suggests Google&apos;s AI Overviews Tell Millions of Lies Per Hour](https://soylentnews.org/article.pl?sid=26/04/08/198248&amp;from=rss)
* [2026-04-09, 17:27:39](https://news.ycombinator.com/item?id=47706560) - [A Tour of Oodi](https://blinry.org/oodi/)
* [2026-04-09, 15:05:00](https://soylentnews.org/article.pl?sid=26/04/08/197218&amp;from=rss) - [Social Media is Virtually Useless for Publishers to Attract Readers](https://soylentnews.org/article.pl?sid=26/04/08/197218&amp;from=rss)
* [2026-04-09, 12:35:20](https://news.ycombinator.com/item?id=47702887) - [Most people can&apos;t juggle one ball](https://www.lesswrong.com/posts/jTGbKKGqs5EdyYoRc/most-people-can-t-juggle-one-ball)
* [2026-04-09, 10:19:00](https://soylentnews.org/article.pl?sid=26/04/08/0231247&amp;from=rss) - [Plan 9 is a Uniquely Complete Operating System](https://soylentnews.org/article.pl?sid=26/04/08/0231247&amp;from=rss)
* [2026-04-09, 05:38:00](https://soylentnews.org/article.pl?sid=26/04/07/2126219&amp;from=rss) - [Big Tech Knows New AI Models Ripe For Cyberattacks — But Plans To Release Them Anyway](https://soylentnews.org/article.pl?sid=26/04/07/2126219&amp;from=rss)
* [2026-04-09, 00:56:00](https://soylentnews.org/article.pl?sid=26/04/07/2124219&amp;from=rss) - [OkCupid Gave 3M Users’ Photos to AI Firm, FTC Says](https://soylentnews.org/article.pl?sid=26/04/07/2124219&amp;from=rss)
