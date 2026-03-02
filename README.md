# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements and Partnerships

* [Motorola Partners With GrapheneOS](https://tech.slashdot.org/story/26/03/02/178237/motorola-partners-with-grapheneos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/26/03/02/178237/motorola-partners-with-grapheneos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Lenovo Unveils an Attachable AI Agent 'Companion' for Their Laptops](https://mobile.slashdot.org/story/26/03/02/0530232/lenovo-unveils-an-attachable-ai-agent-companion-for-their-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://mobile.slashdot.org/story/26/03/02/0530232/lenovo-unveils-an-attachable-ai-agent-companion-for-their-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Stack Overflow Adds New Features (Including AI Assist), Rethinks 'Look and Feel'](https://developers.slashdot.org/story/26/03/02/069217/stack-overflow-adds-new-features-including-ai-assist-rethinks-look-and-feel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://developers.slashdot.org/story/26/03/02/069217/stack-overflow-adds-new-features-including-ai-assist-rethinks-look-and-feel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Advances in Science and Medicine

* [First-ever In-utero Stem Cell Therapy for Fetal Spina Bifida Repair is Safe](https://health.ucdavis.edu/news/headlines/first-ever-in-utero-stem-cell-therapy-for-fetal-spina-bifida-repair-is-safe-study-finds/2026/02) ([comments](https://news.ycombinator.com/item?id=47218743))

* [A Plastic Made From Milk That Vanishes in 13 Weeks](https://www.sciencedaily.com/releases/2026/02/260227071922.htm) ([comments](https://news.ycombinator.com/item?id=47218283))

* [Does a New Theory Finally Explain the Mysteries of the Planet Saturn?](https://science.slashdot.org/story/26/03/02/0636232/does-a-new-theory-finally-explain-the-mysteries-of-the-planet-saturn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/26/03/02/0636232/does-a-new-theory-finally-explain-the-mysteries-of-the-planet-saturn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Security and Vulnerabilities

* [Researchers Discover Massive Wi-Fi Vulnerability Affecting Multiple Access Points](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss))

* [South Korean Police Lose Seized Crypto By Posting Password Online](https://slashdot.org/story/26/03/02/0424251/south-korean-police-lose-seized-crypto-by-posting-password-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/26/03/02/0424251/south-korean-police-lose-seized-crypto-by-posting-password-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Artificial Intelligence and Policy

* [The Generative AI Policy Landscape in Open Source](https://redmonk.com/kholterhoff/2026/02/26/generative-ai-policy-landscape-in-open-source/) ([comments](https://lobste.rs/s/nnripc/generative_ai_policy_landscape_open))

* [Editor At 184-Year-Old Ohio Newspaper Pushes To Let AI Draft News Articles](https://news.slashdot.org/story/26/03/02/0440220/editor-at-184-year-old-ohio-newspaper-pushes-to-let-ai-draft-news-articles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/26/03/02/0440220/editor-at-184-year-old-ohio-newspaper-pushes-to-let-ai-draft-news-articles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Noteworthy Historical and Cultural Articles

* [19th Century Silent Film That First Captured a Robot Attack](https://www.npr.org/2026/02/28/nx-s1-5730373/georges-melies-robot-film-1897-library-of-congress-gugusse-automate) ([comments](https://news.ycombinator.com/item?id=47218541))

* [AMD Am386 Released March 2, 1991](https://dfarq.homeip.net/amd-am386-released-march-2-1991/) ([comments](https://news.ycombinator.com/item?id=47217402))

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

* [2026-03-02, 19:00:00](https://tech.slashdot.org/story/26/03/02/178237/motorola-partners-with-grapheneos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Motorola Partners With GrapheneOS](https://tech.slashdot.org/story/26/03/02/178237/motorola-partners-with-grapheneos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 18:48:36](https://news.ycombinator.com/item?id=47222270) - [Go is the best language for agents](https://getbruin.com/blog/go-is-the-best-language-for-agents/)
* [2026-03-02, 18:29:26](https://news.ycombinator.com/item?id=47221994) - [Bars close and hundreds lose jobs as US firm buys Brewdog in £33M deal](https://www.bbc.com/news/articles/c05v0p1d0peo)
* [2026-03-02, 18:14:02](https://lobste.rs/s/bvkanl/quantifying_swiss_marriage_tax) - [Quantifying the Swiss marriage tax](https://gendx.dev/blog/2026/03/02/swiss-marriage-tax.html)
* [2026-03-02, 18:00:17](https://lobste.rs/s/drwadb/reverse_engineering_hello_world) - [Reverse engineering “Hello World” in QuickBASIC 3.0](https://marnetto.net/2026/03/01/brun-hello-world)
* [2026-03-02, 18:00:00](https://news.slashdot.org/story/26/03/02/0440220/editor-at-184-year-old-ohio-newspaper-pushes-to-let-ai-draft-news-articles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Editor At 184-Year-Old Ohio Newspaper Pushes To Let AI Draft News Articles](https://news.slashdot.org/story/26/03/02/0440220/editor-at-184-year-old-ohio-newspaper-pushes-to-let-ai-draft-news-articles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 17:40:17](https://news.ycombinator.com/item?id=47221264) - [Apple AI servers unused in warehouses due to low Apple Intelligence usage](https://9to5mac.com/2026/03/02/some-apple-ai-servers-are-reportedly-sitting-unused-on-warehouse-shelves-due-to-low-apple-intelligence-usage/)
* [2026-03-02, 17:38:23](https://lobste.rs/s/nnripc/generative_ai_policy_landscape_open) - [The Generative AI Policy Landscape in Open Source](https://redmonk.com/kholterhoff/2026/02/26/generative-ai-policy-landscape-in-open-source/)
* [2026-03-02, 17:08:53](https://news.ycombinator.com/item?id=47220809) - [Show HN: Govbase – Follow a bill from source text to news bias to social posts](https://govbase.com)
* [2026-03-02, 17:01:20](https://news.ycombinator.com/item?id=47220666) - [Reflex (YC W23) Is Hiring Software Engineers – Python](https://www.ycombinator.com/companies/reflex/jobs)
* [2026-03-02, 17:00:00](https://apple.slashdot.org/story/26/03/02/1648230/apple-introduces-iphone-17e-with-magsafe-and-a19?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Introduces iPhone 17e With MagSafe and A19](https://apple.slashdot.org/story/26/03/02/1648230/apple-introduces-iphone-17e-with-magsafe-and-a19?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 16:39:21](https://news.ycombinator.com/item?id=47220320) - [Launch HN: OctaPulse (YC W26) – Robotics and computer vision for fish farming](https://news.ycombinator.com/item?id=47220320)
* [2026-03-02, 16:20:18](https://news.ycombinator.com/item?id=47220020) - [Packaging a Gleam app into a single executable](https://www.dhzdhd.dev/blog/gleam-executable)
* [2026-03-02, 16:10:55](https://lobste.rs/s/ba6cnk/packaging_gleam_app_into_single) - [Packaging a Gleam app into a single executable](https://www.dhzdhd.dev/blog/gleam-executable)
* [2026-03-02, 16:09:15](https://lobste.rs/s/odsvns/what_127_5_million_forms_can_tell_you_about) - [What 127.5 million forms can tell you about the state of front-end input validation on the Web](https://amandastjerna.se/blog/127-million-forms/)
* [2026-03-02, 16:05:58](https://lobste.rs/s/xncpfs/lil_fun_langs_guts) - [Lil&apos; Fun Langs&apos; Guts](https://taylor.town/scrapscript-001)
* [2026-03-02, 16:01:20](https://news.ycombinator.com/item?id=47219688) - [Notes on Lagrange Interpolating Polynomials](https://eli.thegreenplace.net/2026/notes-on-lagrange-interpolating-polynomials/)
* [2026-03-02, 16:00:27](https://news.ycombinator.com/item?id=47219668) - [Ask HN: Who is hiring? (March 2026)](https://news.ycombinator.com/item?id=47219668)
* [2026-03-02, 16:00:00](https://slashdot.org/story/26/03/02/0424251/south-korean-police-lose-seized-crypto-by-posting-password-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Korean Police Lose Seized Crypto By Posting Password Online](https://slashdot.org/story/26/03/02/0424251/south-korean-police-lose-seized-crypto-by-posting-password-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 15:53:23](https://news.ycombinator.com/item?id=47219558) - [Felix \&quot;fx\&quot; Lindner has died](https://blog.recurity-labs.com/2026-03-02/Farewell_Felix)
* [2026-03-02, 15:27:13](https://lobste.rs/s/cyavky/vibecoding_challenge_2_five_feathers) - [Vibecoding Challenge 2: The Five Feathers (Spring 2026)](https://gist.github.com/MostAwesomeDude/ebb60b9bec53c4795f54606e944fccd7)
* [2026-03-02, 15:24:03](https://lobste.rs/s/txfaym/gram_1_0_released) - [Gram 1.0 released](https://gram.liten.app/posts/first-release/)
* [2026-03-02, 15:23:00](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss) - [Whoops: US Military Laser Strike Takes Down CBP Drone Near Mexican Border](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss)
* [2026-03-02, 15:15:15](https://lobste.rs/s/eyfjod/2025_state_rust_survey_results_rust_blog) - [2025 State of Rust Survey Results | Rust Blog](https://blog.rust-lang.org/2026/03/02/2025-State-Of-Rust-Survey-results/)
* [2026-03-02, 15:00:00](https://hardware.slashdot.org/story/26/03/02/0417223/japan-to-ban-in-flight-use-of-power-banks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan To Ban In-Flight Use of Power Banks](https://hardware.slashdot.org/story/26/03/02/0417223/japan-to-ban-in-flight-use-of-power-banks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 14:54:58](https://news.ycombinator.com/item?id=47218743) - [First-ever in-utero stem cell therapy for fetal spina bifida repair is safe](https://health.ucdavis.edu/news/headlines/first-ever-in-utero-stem-cell-therapy-for-fetal-spina-bifida-repair-is-safe-study-finds/2026/02)
* [2026-03-02, 14:41:12](https://news.ycombinator.com/item?id=47218541) - [19th century silent film that first captured a robot attack](https://www.npr.org/2026/02/28/nx-s1-5730373/georges-melies-robot-film-1897-library-of-congress-gugusse-automate)
* [2026-03-02, 14:24:15](https://news.ycombinator.com/item?id=47218318) - [Parallel coding agents with tmux and Markdown specs](https://schipper.ai/posts/parallel-coding-agents/)
* [2026-03-02, 14:21:19](https://news.ycombinator.com/item?id=47218288) - [Anthropic Cowork feature creates 10GB VM bundle on macOS without warning](https://github.com/anthropics/claude-code/issues/22543)
* [2026-03-02, 14:20:35](https://news.ycombinator.com/item?id=47218283) - [A plastic made from milk that vanishes in 13 weeks](https://www.sciencedaily.com/releases/2026/02/260227071922.htm)
* [2026-03-02, 14:12:18](https://news.ycombinator.com/item?id=47218188) - [An Interesting Find: STM32 RDP1 Decryptor](https://carlossless.io/stm32-rdp1-decryptor/)
* [2026-03-02, 14:11:23](https://news.ycombinator.com/item?id=47218175) - [New iPad Air, powered by M4](https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-ipad-air-powered-by-m4/)
* [2026-03-02, 14:03:53](https://news.ycombinator.com/item?id=47218090) - [Why Go Can&apos;t Try](https://niketpatel.com/essays/why-go-cant-try)
* [2026-03-02, 14:00:00](https://tech.slashdot.org/story/26/03/02/048218/whats-driving-the-saaspocalypse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What&apos;s Driving the SaaSpocalypse](https://tech.slashdot.org/story/26/03/02/048218/whats-driving-the-saaspocalypse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 13:04:55](https://lobste.rs/s/rjgpkd/json_documents_performance_storage) - [JSON Documents Performance, Storage and Search: MongoDB vs PostgreSQL](https://binaryigor.com/json-documents-mongodb-vs-postgresql.html)
* [2026-03-02, 12:56:46](https://news.ycombinator.com/item?id=47217402) - [AMD Am386 released March 2, 1991](https://dfarq.homeip.net/amd-am386-released-march-2-1991/)
* [2026-03-02, 12:45:23](https://lobste.rs/s/7fdbnh/apt_graph_colouring) - [APT Graph Colouring](https://github.com/RyanGibb/apt-graph-colouring)
* [2026-03-02, 12:34:00](https://developers.slashdot.org/story/26/03/02/069217/stack-overflow-adds-new-features-including-ai-assist-rethinks-look-and-feel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stack Overflow Adds New Features (Including AI Assist), Rethinks &apos;Look and Feel&apos;](https://developers.slashdot.org/story/26/03/02/069217/stack-overflow-adds-new-features-including-ai-assist-rethinks-look-and-feel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 12:26:44](https://lobste.rs/s/fztjyg/narwhal_v0_5_0_pub_sub_messaging_server_now) - [Narwhal v0.5.0 – pub/sub messaging server, now powered by io_uring](https://github.com/narwhal-io/narwhal/releases/tag/narwhal-0.5.0)
* [2026-03-02, 11:21:20](https://lobste.rs/s/rlof2z/libxml2_enterprise_edition_agpl_from) - [libxml2 Enterprise Edition (AGPL, from the previous maintainer)](https://codeberg.org/nwellnhof/libxml2-ee)
* [2026-03-02, 10:46:59](https://lobste.rs/s/uqpww1/building_quake_pc) - [Building a Quake PC](https://fabiensanglard.net/quake_pc/)
* [2026-03-02, 10:41:45](https://lobste.rs/s/lroieg/sabela_reactive_haskell_notebook) - [Sabela: A Reactive Haskell Notebook](https://datahaskell.org/blog/2026/03/01/sabela-reactive-haskell-notebooks.html)
* [2026-03-02, 10:41:00](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss) - [Trump Bans Anthropic AI From Federal Agencies While OpenAI Eager to Fill the Void](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss)
* [2026-03-02, 10:23:06](https://news.ycombinator.com/item?id=47216047) - [Microsoft bans the word \&quot;Microslop\&quot; on its Discord, then locks the server](https://www.windowslatest.com/2026/03/02/microsoft-gets-tired-of-microslop-bans-the-word-on-its-discord-then-locks-the-server-after-backlash/)
* [2026-03-02, 09:24:21](https://lobste.rs/s/esugjv/hardware_hotplug_events_on_linux_gory) - [Hardware hotplug events on Linux, the gory details](https://arcanenibble.github.io/hardware-hotplug-events-on-linux-the-gory-details.html)
* [2026-03-02, 09:15:06](https://lobste.rs/s/dppelv/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/dppelv/what_are_you_doing_this_week)
* [2026-03-02, 09:09:44](https://news.ycombinator.com/item?id=47215489) - [/e/OS is a complete, fully “deGoogled” mobile ecosystem](https://e.foundation/e-os/)
* [2026-03-02, 08:50:11](https://lobste.rs/s/zxtpos/hacking_super_mario_64_using_covering) - [Hacking Super Mario 64 using covering spaces (+ hyperbolic geometry)](https://happel.ai/posts/covering-spaces-geometries-visualized/)
* [2026-03-02, 08:36:00](https://science.slashdot.org/story/26/03/02/0636232/does-a-new-theory-finally-explain-the-mysteries-of-the-planet-saturn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Does a New Theory Finally Explain the Mysteries of the Planet Saturn?](https://science.slashdot.org/story/26/03/02/0636232/does-a-new-theory-finally-explain-the-mysteries-of-the-planet-saturn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 08:16:47](https://lobste.rs/s/awwhqz/motorola_s_new_partnership_with) - [Motorola&apos;s new partnership with GrapheneOS](https://motorolanews.com/motorola-three-new-b2b-solutions-at-mwc-2026/)
* [2026-03-02, 08:12:13](https://lobste.rs/s/yyqowj/gram_zed_fork_without_all_ai) - [GRAM: A Zed fork without all the AI](https://gram.liten.app/)
* [2026-03-02, 07:30:12](https://news.ycombinator.com/item?id=47214864) - [How to talk to anyone and why you should](https://www.theguardian.com/lifeandstyle/2026/feb/24/stranger-secret-how-to-talk-to-anyone-why-you-should)
* [2026-03-02, 06:48:07](https://news.ycombinator.com/item?id=47214645) - [Motorola announces a partnership with GrapheneOS Foundation](https://motorolanews.com/motorola-three-new-b2b-solutions-at-mwc-2026/)
* [2026-03-02, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss) - [Researchers Discover Massive Wi-Fi Vulnerability Affecting Multiple Access Points](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss)
* [2026-03-02, 05:35:00](https://mobile.slashdot.org/story/26/03/02/0530232/lenovo-unveils-an-attachable-ai-agent-companion-for-their-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lenovo Unveils an Attachable AI Agent &apos;Companion&apos;  for Their Laptops ](https://mobile.slashdot.org/story/26/03/02/0530232/lenovo-unveils-an-attachable-ai-agent-companion-for-their-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 03:20:06](https://lobste.rs/s/mnvpnc/xuv_x11_user_daemon_automatically_run) - [xuv: X11 user daemon to automatically run commands triggered by user specified events](https://codeberg.org/NRK/xuv)
* [2026-03-02, 02:34:00](https://tech.slashdot.org/story/26/03/02/023210/does-a-gas-guzzler-revival-risk-dead-end-futures-for-us-automakers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Does a Gas-Guzzler Revival Risk Dead-End Futures for US Automakers?](https://tech.slashdot.org/story/26/03/02/023210/does-a-gas-guzzler-revival-risk-dead-end-futures-for-us-automakers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 01:11:00](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss) - [Removable Batteries in Mobile Phones May be Making a Comeback](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss)
* [2026-03-01, 23:46:00](https://news.slashdot.org/story/26/03/01/2332240/norways-consumer-council-calls-for-right-to-repair-and-antitrust-enforcement---and-mocks-enshittification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Norway&apos;s Consumer Council Calls for Right to Repair and Antitrust Enforcement - and Mocks &apos;Enshittification&apos;](https://news.slashdot.org/story/26/03/01/2332240/norways-consumer-council-calls-for-right-to-repair-and-antitrust-enforcement---and-mocks-enshittification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 22:46:00](https://slashdot.org/story/26/03/01/1924223/ais-cant-stop-recommending-nuclear-strikes-in-war-game-simulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AIs Can&apos;t Stop Recommending Nuclear Strikes In War Game Simulations](https://slashdot.org/story/26/03/01/1924223/ais-cant-stop-recommending-nuclear-strikes-in-war-game-simulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 21:39:00](https://news.slashdot.org/story/26/03/01/2136222/chronic-ocean-heating-fuels-staggering-loss-of-marine-life-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chronic Ocean Heating Fuels &apos;Staggering&apos; Loss of Marine Life, Study Finds](https://news.slashdot.org/story/26/03/01/2136222/chronic-ocean-heating-fuels-staggering-loss-of-marine-life-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 20:59:00](https://slashdot.org/story/26/02/28/2046221/anthropics-claude-passes-chatgpt-now-1-on-apples-top-apps-chart-after-pentagon-controversy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s Claude Passes ChatGPT, Now #1, on Apple&apos;s &apos;Top Apps&apos; Chart After Pentagon Controversy](https://slashdot.org/story/26/02/28/2046221/anthropics-claude-passes-chatgpt-now-1-on-apples-top-apps-chart-after-pentagon-controversy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 20:22:00](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss) - [Neanderthals Seemed To Have A Thing For Modern Human Women](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss)
* [2026-03-01, 19:53:48](https://lobste.rs/s/zuh3zm/qman_more_modern_man_page_viewer_for_our) - [qman: A more modern man page viewer for our terminals](https://github.com/plp13/qman)
* [2026-03-01, 19:47:00](https://tech.slashdot.org/story/26/03/01/1945208/america-used-anthropics-ai-for-its-attack-on-iran-one-day-after-banning-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America Used Anthropic&apos;s AI for Its Attack On Iran, One Day After Banning It](https://tech.slashdot.org/story/26/03/01/1945208/america-used-anthropics-ai-for-its-attack-on-iran-one-day-after-banning-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 19:22:52](https://lobste.rs/s/pf4r2b/aws_middle_east_central_zone_uae_down) - [AWS Middle East Central Zone (UAE) down, apparently struck in war](https://health.aws.amazon.com/health/status)
* [2026-03-01, 18:04:31](https://lobste.rs/s/bvuwss/what_even_are_breeze_qtquick_qtwidget) - [What even are Breeze, QtQuick, QtWidget, Union..?](https://akselmo.dev/posts/what-are-breeze-widgets-quick-union/)
* [2026-03-01, 17:11:44](https://news.ycombinator.com/item?id=47208573) - [Inside the M4 Apple Neural Engine, Part 1: Reverse Engineering](https://maderix.substack.com/p/inside-the-m4-apple-neural-engine)
* [2026-03-01, 15:40:29](https://lobste.rs/s/39kel0/why_does_c_have_best_file_api) - [Why does C have the best file API?](https://maurycyz.com/misc/c_files/)
* [2026-03-01, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss) - [US States Are Getting Tougher on Drivers Who Refuse to Move Over](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss)
* [2026-03-01, 10:52:00](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss) - [Human Brain Cells on a Chip Learned to Play Doom in a Week](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss)
* [2026-03-01, 06:10:00](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss) - [Block Lays Off 40% Of Workforce As It Goes All-In On AI Tools](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss)
* [2026-03-01, 01:27:00](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss) - [The US Military Just Made History With A C-17 Plane &amp; A Nuclear Reactor](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss)
* [2026-02-28, 20:41:00](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss) - [OpenAI Secures Record $110 Billion Funding Round Backed By Amazon, Nvidia, and SoftBank](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss)
* [2026-02-28, 15:59:00](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss) - [OsmAnd&apos;s Faster Offline Navigation](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss)
* [2026-02-28, 11:11:00](https://soylentnews.org/article.pl?sid=26/02/27/2232251&amp;from=rss) - [Why LLM-Generated Passwords Are Dangerously Insecure](https://soylentnews.org/article.pl?sid=26/02/27/2232251&amp;from=rss)
* [2026-02-28, 06:30:00](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss) - [A Hacker Used Claude to Breach Mexico&apos;s Government and Steal 150GB of Data](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss)
* [2026-02-28, 01:40:00](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss) - [Hackers Expose the Massive Surveillance Stack Hiding Inside Your “Age Verification” Check](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss)
* [2026-02-28, 00:47:39](https://news.ycombinator.com/item?id=47188401) - [Zclaw – The 888 KiB Assistant](https://zclaw.dev)
* [2026-02-27, 20:58:00](https://soylentnews.org/article.pl?sid=26/02/26/0429221&amp;from=rss) - [UK Government Upgrades Drones, Deploys Joystick Tweakers to Catch Illegal Dumpers](https://soylentnews.org/article.pl?sid=26/02/26/0429221&amp;from=rss)
* [2026-02-27, 16:14:00](https://soylentnews.org/politics/article.pl?sid=26/02/26/0417224&amp;from=rss) - [The Political Effects of Xitter’s Feed Algorithm](https://soylentnews.org/politics/article.pl?sid=26/02/26/0417224&amp;from=rss)
* [2026-02-27, 15:28:57](https://news.ycombinator.com/item?id=47181656) - [Mondrian Entered the Public Domain. The Estate Disagrees](https://copyrightlately.com/mondrian-public-domain-controversy/)
* [2026-02-27, 13:54:21](https://news.ycombinator.com/item?id=47180511) - [Writing on Mount Hymettos in Duplo](https://viewsproject.wordpress.com/2026/02/20/writing-on-mount-hymettos-in-duplo/)
* [2026-02-27, 11:30:00](https://soylentnews.org/article.pl?sid=26/02/26/0411234&amp;from=rss) - [AMD&apos;s Next-Gen Ryzen 10000 Desktop CPUs Rumored to Come in Seven Different Configs](https://soylentnews.org/article.pl?sid=26/02/26/0411234&amp;from=rss)
* [2026-02-27, 06:47:00](https://soylentnews.org/article.pl?sid=26/02/26/049239&amp;from=rss) - [NASA Officially Classifies Boeing Starliner Failure as a Maximum-Level Type A Mishap](https://soylentnews.org/article.pl?sid=26/02/26/049239&amp;from=rss)
* [2026-02-27, 04:38:15](https://news.ycombinator.com/item?id=47176576) - [Making Video Games in 2025 (without an engine)](https://www.noelberry.ca/posts/making_games_in_2025/)
* [2026-02-27, 01:59:00](https://soylentnews.org/article.pl?sid=26/02/26/042214&amp;from=rss) - [Hungarian Startup Transforming Robot Manufacturing With 3D Tissue Braiding](https://soylentnews.org/article.pl?sid=26/02/26/042214&amp;from=rss)
* [2026-02-27, 01:35:26](https://news.ycombinator.com/item?id=47175160) - [Thirty years on, Pokémon is still a monster hit](https://www.economist.com/culture/2026/02/26/thirty-years-on-pokemon-is-still-a-monster-hit)
* [2026-02-26, 21:17:00](https://soylentnews.org/article.pl?sid=26/02/25/1612247&amp;from=rss) - [Tesla &apos;Robotaxi&apos; Adds 5 More Crashes in Austin in a Month](https://soylentnews.org/article.pl?sid=26/02/25/1612247&amp;from=rss)
* [2026-02-26, 16:34:00](https://soylentnews.org/article.pl?sid=26/02/25/1553206&amp;from=rss) - [SpaceX&apos;s Faulty Falcon Spewed Massive Lithium Plume Over Europe, Say Scientists](https://soylentnews.org/article.pl?sid=26/02/25/1553206&amp;from=rss)
* [2026-02-26, 15:03:34](https://news.ycombinator.com/item?id=47167058) - [Use the Mikado Method to do safe changes in a complex codebase](https://understandlegacycode.com/blog/a-process-to-do-safe-changes-in-a-complex-codebase/)
* [2026-02-26, 11:48:00](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss) - [Michael Pollan Says AI May &apos;Think&apos; — but It Will Never be Conscious](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss)
* [2026-02-26, 07:06:00](https://soylentnews.org/article.pl?sid=26/02/25/1546252&amp;from=rss) - [80386 Protection](https://soylentnews.org/article.pl?sid=26/02/25/1546252&amp;from=rss)
* [2026-02-26, 02:20:00](https://soylentnews.org/article.pl?sid=26/02/25/1544219&amp;from=rss) - [AI Bot Seemingly Shames Developer for Rejected Pull Request](https://soylentnews.org/article.pl?sid=26/02/25/1544219&amp;from=rss)
