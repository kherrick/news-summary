# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Developments

* [Show HN: Pianoterm – Run shell commands from your Piano. A Linux CLI tool](https://github.com/vustagc/pianoterm) ([Comments](https://news.ycombinator.com/item?id=47223863))

* [Launch HN: OctaPulse (YC W26) – Robotics and computer vision for fish farming](https://news.ycombinator.com/item?id=47220320)

* [Narwhal v0.5.0 – pub/sub messaging server, now powered by io_uring](https://github.com/narwhal-io/narwhal/releases/tag/narwhal-0.5.0) ([Comments](https://lobste.rs/s/fztjyg/narwhal_v0_5_0_pub_sub_messaging_server_now))

* [Lenovo Unveils an Attachable AI Agent 'Companion' for Their Laptops](https://mobile.slashdot.org/story/26/03/02/0530232/lenovo-unveils-an-attachable-ai-agent-companion-for-their-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Socio-Political Impacts of Modern Developments

* [South Korean Police Lose Seized Crypto By Posting Password Online](https://slashdot.org/story/26/03/02/0424251/south-korean-police-lose-seized-crypto-by-posting-password-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Trump Bans Anthropic AI From Federal Agencies While OpenAI Eager to Fill the Void](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss)

## Privacy and AI Concerns

* [Microsoft bans the word 'Microslop' on its Discord, then locks the server](https://www.windowslatest.com/2026/03/02/microsoft-gets-tired-of-microslop-bans-the-word-on-its-discord-then-locks-the-server-after-backlash/) ([Comments](https://news.ycombinator.com/item?id=47216047))

* [Hacking Super Mario 64 using covering spaces (+ hyperbolic geometry)](https://happel.ai/posts/covering-spaces-geometries-visualized/) ([Comments](https://lobste.rs/s/zxtpos/hacking_super_mario_64_using_covering))

## Unique Scientific Discoveries and Health

* [First in-utero stem cell therapy for fetal spina bifida repair is safe: study](https://health.ucdavis.edu/news/headlines/first-ever-in-utero-stem-cell-therapy-for-fetal-spina-bifida-repair-is-safe-study-finds/2026/02) ([Comments](https://news.ycombinator.com/item?id=47218743))

* [Does a New Theory Finally Explain the Mysteries of the Planet Saturn?](https://science.slashdot.org/story/26/03/02/0636232/does-a-new-theory-finally-explain-the-mysteries-of-the-planet-saturn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Programming and Software Insights

* [Reverse engineering “Hello World” in QuickBASIC 3.0](https://marnetto.net/2026/03/01/brun-hello-world) ([Comments](https://lobste.rs/s/drwadb/reverse_engineering_hello_world))

* [Lil' Fun Langs' Guts](https://taylor.town/scrapscript-001) ([Comments](https://lobste.rs/s/xncpfs/lil_fun_langs_guts))

* [JSON Documents Performance, Storage and Search: MongoDB vs PostgreSQL](https://binaryigor.com/json-documents-mongodb-vs-postgresql.html) ([Comments](https://lobste.rs/s/rjgpkd/json_documents_performance_storage))

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

* [2026-03-02, 21:09:47](https://news.ycombinator.com/item?id=47224118) - [Welcome (back) to Macintosh](https://take.surf/2026/03/01/welcome-back-to-macintosh)
* [2026-03-02, 21:00:00](https://yro.slashdot.org/story/26/03/02/1856252/charter-gets-fcc-permission-to-buy-cox-become-largest-isp-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Charter Gets FCC Permission To Buy Cox, Become Largest ISP In the US](https://yro.slashdot.org/story/26/03/02/1856252/charter-gets-fcc-permission-to-buy-cox-become-largest-isp-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 20:58:48](https://lobste.rs/s/3cq649/two_kinds_error) - [The two kinds of error](https://evanhahn.com/the-two-kinds-of-error/)
* [2026-03-02, 20:50:03](https://news.ycombinator.com/item?id=47223863) - [Show HN: Pianoterm – Run shell commands from your Piano. A Linux CLI tool](https://github.com/vustagc/pianoterm)
* [2026-03-02, 20:30:52](https://news.ycombinator.com/item?id=47223620) - [British Columbia to end time changes, adopt year-round daylight time](https://www.cbc.ca/news/canada/british-columbia/b-c-adopting-year-round-daylight-time-9.7111657)
* [2026-03-02, 20:12:00](https://soylentnews.org/article.pl?sid=26/03/01/0744215&amp;from=rss) - [Hail Protection Using Solar Panels](https://soylentnews.org/article.pl?sid=26/03/01/0744215&amp;from=rss)
* [2026-03-02, 20:00:00](https://tech.slashdot.org/story/26/03/02/1847201/microsoft-bans-microslop-on-its-discord-then-locks-the-server?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Bans &apos;Microslop&apos; On Its Discord, Then Locks the Server](https://tech.slashdot.org/story/26/03/02/1847201/microsoft-bans-microslop-on-its-discord-then-locks-the-server?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 19:50:32](https://news.ycombinator.com/item?id=47223147) - [Show HN: uBlock filter list to blur all Instagram Reels](https://gist.github.com/shraiwi/009c652da6ce8c99a6e1e0c86fe66886)
* [2026-03-02, 19:48:04](https://news.ycombinator.com/item?id=47223115) - [Boss-CSS: I created another \&quot;CSS-in-JS\&quot; lib](https://dev.to/wintercounter/boss-css-i-created-another-css-in-js-lib-and-here-is-why-23kc)
* [2026-03-02, 19:42:02](https://lobste.rs/s/gmhq26/free_ip_geolocation_database) - [Free IP Geolocation Database](https://ip66.dev/)
* [2026-03-02, 19:39:54](https://lobste.rs/s/rkzdmk/you_can_t_always_fix_it) - [You can&apos;t always fix it](https://ntietz.com/blog/you-cant-always-fix-it/)
* [2026-03-02, 19:24:59](https://lobste.rs/s/rfjjwq/i_fuzzed_vibe_fixed_vibed_c_compiler) - [I Fuzzed, and Vibe Fixed, the Vibed C Compiler](https://john.regehr.org/writing/claude_c_compiler.html)
* [2026-03-02, 19:00:00](https://tech.slashdot.org/story/26/03/02/178237/motorola-partners-with-grapheneos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Motorola Partners With GrapheneOS](https://tech.slashdot.org/story/26/03/02/178237/motorola-partners-with-grapheneos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 18:48:36](https://news.ycombinator.com/item?id=47222270) - [A case for Go as the best language for AI agents](https://getbruin.com/blog/go-is-the-best-language-for-agents/)
* [2026-03-02, 18:45:12](https://news.ycombinator.com/item?id=47222226) - [\&quot;That Shape Had None\&quot; – A Horror of Substrate Independence (Short Fiction)](https://starlightconvenience.net/#that-shape-had-none)
* [2026-03-02, 18:14:02](https://lobste.rs/s/bvkanl/quantifying_swiss_marriage_tax) - [Quantifying the Swiss marriage tax](https://gendx.dev/blog/2026/03/02/swiss-marriage-tax.html)
* [2026-03-02, 18:00:17](https://lobste.rs/s/drwadb/reverse_engineering_hello_world) - [Reverse engineering “Hello World” in QuickBASIC 3.0](https://marnetto.net/2026/03/01/brun-hello-world)
* [2026-03-02, 18:00:00](https://news.slashdot.org/story/26/03/02/0440220/editor-at-184-year-old-ohio-newspaper-pushes-to-let-ai-draft-news-articles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Editor At 184-Year-Old Ohio Newspaper Pushes To Let AI Draft News Articles](https://news.slashdot.org/story/26/03/02/0440220/editor-at-184-year-old-ohio-newspaper-pushes-to-let-ai-draft-news-articles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 17:15:08](https://lobste.rs/s/umyumz/farewell_felix) - [Farewell, Felix](https://blog.recurity-labs.com/2026-03-02/Farewell_Felix)
* [2026-03-02, 17:08:53](https://news.ycombinator.com/item?id=47220809) - [Show HN: Govbase – Follow a bill from source text to news bias to social posts](https://govbase.com)
* [2026-03-02, 17:01:20](https://news.ycombinator.com/item?id=47220666) - [Reflex (YC W23) Is Hiring Software Engineers – Python](https://www.ycombinator.com/companies/reflex/jobs)
* [2026-03-02, 17:00:00](https://apple.slashdot.org/story/26/03/02/1648230/apple-introduces-iphone-17e-with-magsafe-and-a19?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Introduces iPhone 17e With MagSafe and A19](https://apple.slashdot.org/story/26/03/02/1648230/apple-introduces-iphone-17e-with-magsafe-and-a19?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 16:39:21](https://news.ycombinator.com/item?id=47220320) - [Launch HN: OctaPulse (YC W26) – Robotics and computer vision for fish farming](https://news.ycombinator.com/item?id=47220320)
* [2026-03-02, 16:20:18](https://news.ycombinator.com/item?id=47220020) - [Packaging a Gleam app into a single executable](https://www.dhzdhd.dev/blog/gleam-executable)
* [2026-03-02, 16:10:55](https://lobste.rs/s/ba6cnk/packaging_gleam_app_into_single) - [Packaging a Gleam app into a single executable](https://www.dhzdhd.dev/blog/gleam-executable)
* [2026-03-02, 16:05:58](https://lobste.rs/s/xncpfs/lil_fun_langs_guts) - [Lil&apos; Fun Langs&apos; Guts](https://taylor.town/scrapscript-001)
* [2026-03-02, 16:01:20](https://news.ycombinator.com/item?id=47219688) - [Notes on Lagrange Interpolating Polynomials](https://eli.thegreenplace.net/2026/notes-on-lagrange-interpolating-polynomials/)
* [2026-03-02, 16:00:27](https://news.ycombinator.com/item?id=47219668) - [Ask HN: Who is hiring? (March 2026)](https://news.ycombinator.com/item?id=47219668)
* [2026-03-02, 16:00:26](https://news.ycombinator.com/item?id=47219667) - [Ask HN: Who wants to be hired? (March 2026)](https://news.ycombinator.com/item?id=47219667)
* [2026-03-02, 16:00:00](https://slashdot.org/story/26/03/02/0424251/south-korean-police-lose-seized-crypto-by-posting-password-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Korean Police Lose Seized Crypto By Posting Password Online](https://slashdot.org/story/26/03/02/0424251/south-korean-police-lose-seized-crypto-by-posting-password-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 15:41:08](https://news.ycombinator.com/item?id=47219387) - [Language Model Contains Personality Subnetworks](https://arxiv.org/abs/2602.07164)
* [2026-03-02, 15:27:13](https://lobste.rs/s/cyavky/vibecoding_challenge_2_five_feathers) - [Vibecoding Challenge 2: The Five Feathers (Spring 2026)](https://gist.github.com/MostAwesomeDude/ebb60b9bec53c4795f54606e944fccd7)
* [2026-03-02, 15:24:03](https://lobste.rs/s/txfaym/gram_1_0_released) - [Gram 1.0 released](https://gram.liten.app/posts/first-release/)
* [2026-03-02, 15:23:00](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss) - [Whoops: US Military Laser Strike Takes Down CBP Drone Near Mexican Border](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss)
* [2026-03-02, 15:15:15](https://lobste.rs/s/eyfjod/2025_state_rust_survey_results) - [2025 State of Rust Survey Results](https://blog.rust-lang.org/2026/03/02/2025-State-Of-Rust-Survey-results/)
* [2026-03-02, 15:00:00](https://hardware.slashdot.org/story/26/03/02/0417223/japan-to-ban-in-flight-use-of-power-banks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan To Ban In-Flight Use of Power Banks](https://hardware.slashdot.org/story/26/03/02/0417223/japan-to-ban-in-flight-use-of-power-banks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 14:54:58](https://news.ycombinator.com/item?id=47218743) - [First in-utero stem cell therapy for fetal spina bifida repair is safe: study](https://health.ucdavis.edu/news/headlines/first-ever-in-utero-stem-cell-therapy-for-fetal-spina-bifida-repair-is-safe-study-finds/2026/02)
* [2026-03-02, 14:24:15](https://news.ycombinator.com/item?id=47218318) - [Parallel coding agents with tmux and Markdown specs](https://schipper.ai/posts/parallel-coding-agents/)
* [2026-03-02, 14:11:23](https://news.ycombinator.com/item?id=47218175) - [New iPad Air, powered by M4](https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-ipad-air-powered-by-m4/)
* [2026-03-02, 14:03:00](https://news.ycombinator.com/item?id=47218084) - [iPhone 17e](https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/)
* [2026-03-02, 14:00:00](https://tech.slashdot.org/story/26/03/02/048218/whats-driving-the-saaspocalypse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What&apos;s Driving the SaaSpocalypse](https://tech.slashdot.org/story/26/03/02/048218/whats-driving-the-saaspocalypse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 13:04:55](https://lobste.rs/s/rjgpkd/json_documents_performance_storage) - [JSON Documents Performance, Storage and Search: MongoDB vs PostgreSQL](https://binaryigor.com/json-documents-mongodb-vs-postgresql.html)
* [2026-03-02, 12:45:23](https://lobste.rs/s/7fdbnh/apt_graph_colouring) - [APT Graph Colouring](https://github.com/RyanGibb/apt-graph-colouring)
* [2026-03-02, 12:34:00](https://developers.slashdot.org/story/26/03/02/069217/stack-overflow-adds-new-features-including-ai-assist-rethinks-look-and-feel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stack Overflow Adds New Features (Including AI Assist), Rethinks &apos;Look and Feel&apos;](https://developers.slashdot.org/story/26/03/02/069217/stack-overflow-adds-new-features-including-ai-assist-rethinks-look-and-feel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 12:26:44](https://lobste.rs/s/fztjyg/narwhal_v0_5_0_pub_sub_messaging_server_now) - [Narwhal v0.5.0 – pub/sub messaging server, now powered by io_uring](https://github.com/narwhal-io/narwhal/releases/tag/narwhal-0.5.0)
* [2026-03-02, 11:21:20](https://lobste.rs/s/rlof2z/libxml2_enterprise_edition_agpl_from) - [libxml2 Enterprise Edition (AGPL, from the previous maintainer)](https://codeberg.org/nwellnhof/libxml2-ee)
* [2026-03-02, 10:46:59](https://lobste.rs/s/uqpww1/building_quake_pc) - [Building a Quake PC](https://fabiensanglard.net/quake_pc/)
* [2026-03-02, 10:41:00](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss) - [Trump Bans Anthropic AI From Federal Agencies While OpenAI Eager to Fill the Void](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss)
* [2026-03-02, 10:23:06](https://news.ycombinator.com/item?id=47216047) - [Microsoft bans the word \&quot;Microslop\&quot; on its Discord, then locks the server](https://www.windowslatest.com/2026/03/02/microsoft-gets-tired-of-microslop-bans-the-word-on-its-discord-then-locks-the-server-after-backlash/)
* [2026-03-02, 09:24:21](https://lobste.rs/s/esugjv/hardware_hotplug_events_on_linux_gory) - [Hardware hotplug events on Linux, the gory details](https://arcanenibble.github.io/hardware-hotplug-events-on-linux-the-gory-details.html)
* [2026-03-02, 09:15:06](https://lobste.rs/s/dppelv/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/dppelv/what_are_you_doing_this_week)
* [2026-03-02, 08:50:11](https://lobste.rs/s/zxtpos/hacking_super_mario_64_using_covering) - [Hacking Super Mario 64 using covering spaces (+ hyperbolic geometry)](https://happel.ai/posts/covering-spaces-geometries-visualized/)
* [2026-03-02, 08:36:00](https://science.slashdot.org/story/26/03/02/0636232/does-a-new-theory-finally-explain-the-mysteries-of-the-planet-saturn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Does a New Theory Finally Explain the Mysteries of the Planet Saturn?](https://science.slashdot.org/story/26/03/02/0636232/does-a-new-theory-finally-explain-the-mysteries-of-the-planet-saturn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 08:16:47](https://lobste.rs/s/awwhqz/motorola_s_new_partnership_with) - [Motorola&apos;s new partnership with GrapheneOS](https://motorolanews.com/motorola-three-new-b2b-solutions-at-mwc-2026/)
* [2026-03-02, 08:12:13](https://lobste.rs/s/yyqowj/gram_zed_fork_without_all_ai) - [GRAM: A Zed fork without all the AI](https://gram.liten.app/)
* [2026-03-02, 07:30:12](https://news.ycombinator.com/item?id=47214864) - [How to talk to anyone and why you should](https://www.theguardian.com/lifeandstyle/2026/feb/24/stranger-secret-how-to-talk-to-anyone-why-you-should)
* [2026-03-02, 06:48:07](https://news.ycombinator.com/item?id=47214645) - [Motorola announces a partnership with GrapheneOS](https://motorolanews.com/motorola-three-new-b2b-solutions-at-mwc-2026/)
* [2026-03-02, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss) - [Researchers Discover Massive Wi-Fi Vulnerability Affecting Multiple Access Points](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss)
* [2026-03-02, 05:35:00](https://mobile.slashdot.org/story/26/03/02/0530232/lenovo-unveils-an-attachable-ai-agent-companion-for-their-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lenovo Unveils an Attachable AI Agent &apos;Companion&apos;  for Their Laptops ](https://mobile.slashdot.org/story/26/03/02/0530232/lenovo-unveils-an-attachable-ai-agent-companion-for-their-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 02:34:00](https://tech.slashdot.org/story/26/03/02/023210/does-a-gas-guzzler-revival-risk-dead-end-futures-for-us-automakers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Does a Gas-Guzzler Revival Risk Dead-End Futures for US Automakers?](https://tech.slashdot.org/story/26/03/02/023210/does-a-gas-guzzler-revival-risk-dead-end-futures-for-us-automakers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 01:11:00](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss) - [Removable Batteries in Mobile Phones May be Making a Comeback](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss)
* [2026-03-01, 23:46:00](https://news.slashdot.org/story/26/03/01/2332240/norways-consumer-council-calls-for-right-to-repair-and-antitrust-enforcement---and-mocks-enshittification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Norway&apos;s Consumer Council Calls for Right to Repair and Antitrust Enforcement - and Mocks &apos;Enshittification&apos;](https://news.slashdot.org/story/26/03/01/2332240/norways-consumer-council-calls-for-right-to-repair-and-antitrust-enforcement---and-mocks-enshittification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 22:46:00](https://slashdot.org/story/26/03/01/1924223/ais-cant-stop-recommending-nuclear-strikes-in-war-game-simulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AIs Can&apos;t Stop Recommending Nuclear Strikes In War Game Simulations](https://slashdot.org/story/26/03/01/1924223/ais-cant-stop-recommending-nuclear-strikes-in-war-game-simulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 21:39:00](https://news.slashdot.org/story/26/03/01/2136222/chronic-ocean-heating-fuels-staggering-loss-of-marine-life-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chronic Ocean Heating Fuels &apos;Staggering&apos; Loss of Marine Life, Study Finds](https://news.slashdot.org/story/26/03/01/2136222/chronic-ocean-heating-fuels-staggering-loss-of-marine-life-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 20:22:00](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss) - [Neanderthals Seemed To Have A Thing For Modern Human Women](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss)
* [2026-03-01, 19:53:48](https://lobste.rs/s/zuh3zm/qman_more_modern_man_page_viewer_for_our) - [qman: A more modern man page viewer for our terminals](https://github.com/plp13/qman)
* [2026-03-01, 19:22:52](https://lobste.rs/s/pf4r2b/aws_middle_east_central_zone_uae_down) - [AWS Middle East Central Zone (UAE) down, apparently struck in war](https://health.aws.amazon.com/health/status)
* [2026-03-01, 18:04:31](https://lobste.rs/s/bvuwss/what_even_are_breeze_qtquick_qtwidget) - [What even are Breeze, QtQuick, QtWidget, Union..?](https://akselmo.dev/posts/what-are-breeze-widgets-quick-union/)
* [2026-03-01, 17:11:44](https://news.ycombinator.com/item?id=47208573) - [Inside the M4 Apple Neural Engine, Part 1: Reverse Engineering](https://maderix.substack.com/p/inside-the-m4-apple-neural-engine)
* [2026-03-01, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss) - [US States Are Getting Tougher on Drivers Who Refuse to Move Over](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss)
* [2026-03-01, 10:52:00](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss) - [Human Brain Cells on a Chip Learned to Play Doom in a Week](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss)
* [2026-03-01, 06:10:00](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss) - [Block Lays Off 40% Of Workforce As It Goes All-In On AI Tools](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss)
* [2026-03-01, 01:27:00](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss) - [The US Military Just Made History With A C-17 Plane &amp; A Nuclear Reactor](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss)
* [2026-02-28, 22:43:40](https://news.ycombinator.com/item?id=47201158) - [Programmable Cryptography](https://0xparc.org/writings/programmable-cryptography-1)
* [2026-02-28, 20:41:00](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss) - [OpenAI Secures Record $110 Billion Funding Round Backed By Amazon, Nvidia, and SoftBank](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss)
* [2026-02-28, 15:59:00](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss) - [OsmAnd&apos;s Faster Offline Navigation](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss)
* [2026-02-28, 12:41:33](https://news.ycombinator.com/item?id=47194630) - [Why Objective-C](https://inessential.com/2026/02/27/why-objective-c.html)
* [2026-02-28, 11:11:00](https://soylentnews.org/article.pl?sid=26/02/27/2232251&amp;from=rss) - [Why LLM-Generated Passwords Are Dangerously Insecure](https://soylentnews.org/article.pl?sid=26/02/27/2232251&amp;from=rss)
* [2026-02-28, 06:30:00](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss) - [A Hacker Used Claude to Breach Mexico&apos;s Government and Steal 150GB of Data](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss)
* [2026-02-28, 03:48:14](https://news.ycombinator.com/item?id=47190088) - [Build your own Command Line with ANSI escape codes (2016)](https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html)
* [2026-02-28, 01:40:00](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss) - [Hackers Expose the Massive Surveillance Stack Hiding Inside Your “Age Verification” Check](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss)
* [2026-02-28, 00:47:39](https://news.ycombinator.com/item?id=47188401) - [Zclaw – The 888 KiB Assistant](https://zclaw.dev)
* [2026-02-28, 00:12:24](https://news.ycombinator.com/item?id=47188014) - [LFortran compiles fpm](https://lfortran.org/blog/2026/02/lfortran-compiles-fpm/)
* [2026-02-27, 20:58:00](https://soylentnews.org/article.pl?sid=26/02/26/0429221&amp;from=rss) - [UK Government Upgrades Drones, Deploys Joystick Tweakers to Catch Illegal Dumpers](https://soylentnews.org/article.pl?sid=26/02/26/0429221&amp;from=rss)
* [2026-02-27, 16:14:00](https://soylentnews.org/politics/article.pl?sid=26/02/26/0417224&amp;from=rss) - [The Political Effects of Xitter’s Feed Algorithm](https://soylentnews.org/politics/article.pl?sid=26/02/26/0417224&amp;from=rss)
* [2026-02-27, 11:30:00](https://soylentnews.org/article.pl?sid=26/02/26/0411234&amp;from=rss) - [AMD&apos;s Next-Gen Ryzen 10000 Desktop CPUs Rumored to Come in Seven Different Configs](https://soylentnews.org/article.pl?sid=26/02/26/0411234&amp;from=rss)
* [2026-02-27, 06:47:00](https://soylentnews.org/article.pl?sid=26/02/26/049239&amp;from=rss) - [NASA Officially Classifies Boeing Starliner Failure as a Maximum-Level Type A Mishap](https://soylentnews.org/article.pl?sid=26/02/26/049239&amp;from=rss)
* [2026-02-27, 04:38:15](https://news.ycombinator.com/item?id=47176576) - [Making Video Games in 2025 (without an engine)](https://www.noelberry.ca/posts/making_games_in_2025/)
* [2026-02-27, 01:59:00](https://soylentnews.org/article.pl?sid=26/02/26/042214&amp;from=rss) - [Hungarian Startup Transforming Robot Manufacturing With 3D Tissue Braiding](https://soylentnews.org/article.pl?sid=26/02/26/042214&amp;from=rss)
* [2026-02-26, 21:17:00](https://soylentnews.org/article.pl?sid=26/02/25/1612247&amp;from=rss) - [Tesla &apos;Robotaxi&apos; Adds 5 More Crashes in Austin in a Month](https://soylentnews.org/article.pl?sid=26/02/25/1612247&amp;from=rss)
* [2026-02-26, 16:34:00](https://soylentnews.org/article.pl?sid=26/02/25/1553206&amp;from=rss) - [SpaceX&apos;s Faulty Falcon Spewed Massive Lithium Plume Over Europe, Say Scientists](https://soylentnews.org/article.pl?sid=26/02/25/1553206&amp;from=rss)
* [2026-02-26, 15:03:34](https://news.ycombinator.com/item?id=47167058) - [Use the Mikado Method to do safe changes in a complex codebase](https://understandlegacycode.com/blog/a-process-to-do-safe-changes-in-a-complex-codebase/)
* [2026-02-26, 11:48:00](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss) - [Michael Pollan Says AI May &apos;Think&apos; — but It Will Never be Conscious](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss)
* [2026-02-26, 07:06:00](https://soylentnews.org/article.pl?sid=26/02/25/1546252&amp;from=rss) - [80386 Protection](https://soylentnews.org/article.pl?sid=26/02/25/1546252&amp;from=rss)
* [2026-02-26, 02:20:00](https://soylentnews.org/article.pl?sid=26/02/25/1544219&amp;from=rss) - [AI Bot Seemingly Shames Developer for Rejected Pull Request](https://soylentnews.org/article.pl?sid=26/02/25/1544219&amp;from=rss)
