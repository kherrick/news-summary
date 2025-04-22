# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Supabase raises $200M Series D at $2B valuation](https://finance.yahoo.com/news/exclusive-supabase-raises-200-million-112154867.html) - [Comments](https://news.ycombinator.com/item?id=43763225)

* [Launch HN: Infra.new (YC W23) – DevOps Copilot with Guardrails Built In](https://news.ycombinator.com/item?id=43763026) - [Comments](https://news.ycombinator.com/item?id=43763026)

* [Google Pays Samsung 'Enormous Sums' for Gemini AI App Installs](https://tech.slashdot.org/story/25/04/22/0953209/google-pays-samsung-enormous-sums-for-gemini-ai-app-installs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://tech.slashdot.org/story/25/04/22/0953209/google-pays-samsung-enormous-sums-for-gemini-ai-app-installs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Evertop: E-ink IBM XT clone with solar power, ultra low power consumption, and ultra long battery life](https://github.com/ericjenott/Evertop) - [Comments](https://lobste.rs/s/wnuoeu/evertop_e_ink_ibm_xt_clone_with_solar_power)

## Artificial Intelligence

* [I Open-Sourced My AI Toy Company That Runs on ESP32 and OpenAI Realtime API](https://github.com/akdeb/ElatoAI) - [Comments](https://news.ycombinator.com/item?id=43762409)

* [Movies Made With AI Can Win Oscars, Academy Says](https://entertainment.slashdot.org/story/25/04/22/1438236/movies-made-with-ai-can-win-oscars-academy-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://entertainment.slashdot.org/story/25/04/22/1438236/movies-made-with-ai-can-win-oscars-academy-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Science

* [Using physics simulations to find targeting strategies in tenpin bowling](https://pubs.aip.org/aip/adv/article/15/4/045222/3344017/Using-physics-simulations-to-find-targeting) - [Comments](https://news.ycombinator.com/item?id=43762451)

* [Scientists Can Tell Healthy And Cancerous Cells Apart By How They Move](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss) - [Comments](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss)

## Programming and Development

* [Start with a clean slate: Integration testing with PostgreSQL](https://blog.dogac.dev/pg-test-table-track/) - [Comments](https://lobste.rs/s/84ysx5/start_with_clean_slate_integration)

* [Abusing DuckDB-WASM by making SQL draw 3D graphics (Sort Of)](https://www.hey.earth/posts/duckdb-doom) - [Comments](https://news.ycombinator.com/item?id=43761998)

* [The Partially Dynamic Web (2024)](https://digitalflapjack.com/blog/the-partially-dynamic-web/) - [Comments](https://lobste.rs/s/k4y6j2/partially_dynamic_web_2024)

## Notable Events

* [Oldest Serving US Astronaut Returns to Earth on 70th Birthday](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss) - [Comments](https://news.ycombinator.com/item?id=43761119)

* [Attacking My Landlord's Boiler](https://blog.videah.net/attacking-my-landlords-boiler/) - [Comments](https://lobste.rs/s/18ycoz/attacking_my_landlord_s_boiler)

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

* [2025-04-22, 15:24:53](https://news.ycombinator.com/item?id=43763291) - [Surprises in Logic (2016)](https://math.ucr.edu/home/baez/surprises.html)
* [2025-04-22, 15:20:00](https://entertainment.slashdot.org/story/25/04/22/1438236/movies-made-with-ai-can-win-oscars-academy-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Movies Made With AI Can Win Oscars, Academy Says](https://entertainment.slashdot.org/story/25/04/22/1438236/movies-made-with-ai-can-win-oscars-academy-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 15:17:23](https://news.ycombinator.com/item?id=43763225) - [Supabase raises $200M Series D at $2B valuation](https://finance.yahoo.com/news/exclusive-supabase-raises-200-million-112154867.html)
* [2025-04-22, 15:17:21](https://news.ycombinator.com/item?id=43763223) - [David Tong Lectures on Theoretical Physics](https://www.damtp.cam.ac.uk/user/tong/books.html)
* [2025-04-22, 15:11:15](https://lobste.rs/s/84ysx5/start_with_clean_slate_integration) - [Start with a clean slate: Integration testing with PostgreSQL](https://blog.dogac.dev/pg-test-table-track/)
* [2025-04-22, 14:59:53](https://news.ycombinator.com/item?id=43763026) - [Launch HN: Infra.new (YC W23) – DevOps Copilot with Guardrails Built In](https://news.ycombinator.com/item?id=43763026)
* [2025-04-22, 14:41:02](https://news.ycombinator.com/item?id=43762789) - [Introduction to Graph Transformers](https://kumo.ai/research/introduction-to-graph-transformers/)
* [2025-04-22, 14:40:00](https://news.slashdot.org/story/25/04/22/1429255/us-scientists-flee-abroad-as-research-funding-cuts-deepen-nature?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Scientists Flee Abroad as Research Funding Cuts Deepen: Nature](https://news.slashdot.org/story/25/04/22/1429255/us-scientists-flee-abroad-as-research-funding-cuts-deepen-nature?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 14:14:28](https://news.ycombinator.com/item?id=43762451) - [Using physics simulations to find targeting strategies in tenpin bowling](https://pubs.aip.org/aip/adv/article/15/4/045222/3344017/Using-physics-simulations-to-find-targeting)
* [2025-04-22, 14:10:59](https://news.ycombinator.com/item?id=43762409) - [I Open-Sourced My AI Toy Company That Runs on ESP32 and OpenAI Realtime API](https://github.com/akdeb/ElatoAI)
* [2025-04-22, 14:00:00](https://tech.slashdot.org/story/25/04/22/0953209/google-pays-samsung-enormous-sums-for-gemini-ai-app-installs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Pays Samsung &apos;Enormous Sums&apos; for Gemini AI App Installs](https://tech.slashdot.org/story/25/04/22/0953209/google-pays-samsung-enormous-sums-for-gemini-ai-app-installs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 13:53:05](https://lobste.rs/s/k4y6j2/partially_dynamic_web_2024) - [The Partially Dynamic Web (2024)](https://digitalflapjack.com/blog/the-partially-dynamic-web/)
* [2025-04-22, 13:36:13](https://lobste.rs/s/aafqoa/detecting_if_expression_is_constant_c) - [Detecting if an expression is constant in C](https://nrk.neocities.org/articles/c-constexpr-macro)
* [2025-04-22, 13:35:47](https://news.ycombinator.com/item?id=43761998) - [Abusing DuckDB-WASM by making SQL draw 3D graphics (Sort Of)](https://www.hey.earth/posts/duckdb-doom)
* [2025-04-22, 13:34:27](https://news.ycombinator.com/item?id=43761976) - [Join the W3C Exploration Interest Group: where standards start](https://www.w3.org/blog/2025/join-the-w3c-exploration-interest-group-where-standards-start/)
* [2025-04-22, 13:24:52](https://news.ycombinator.com/item?id=43761835) - [The Cold Start Problem: Using Network Effects to Scale Your Product – A Review](https://madhavajay.com/the-cold-start-problem-using-network-effects-to-scale-your-product/)
* [2025-04-22, 13:00:00](https://it.slashdot.org/story/25/04/22/0214252/logitech-quietly-raises-prices-by-up-to-25?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Logitech Quietly Raises Prices By Up To 25%](https://it.slashdot.org/story/25/04/22/0214252/logitech-quietly-raises-prices-by-up-to-25?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 12:53:45](https://lobste.rs/s/yjypaz/event_hidden_architectures) - [Event-Hidden Architectures](https://skiplabs.io/blog/event-hidden-arch)
* [2025-04-22, 12:38:19](https://lobste.rs/s/n6su5j/ssh_keys_aren_t_real) - [SSH Keys Aren&apos;t Real](https://ssh-keys.arent-real.com)
* [2025-04-22, 12:00:06](https://news.ycombinator.com/item?id=43761119) - [GiveCampus (YC S15) Is Hiring Sr engineers passionate about education](https://givecampus.breezy.hr/p/0c4a97691730)
* [2025-04-22, 11:27:00](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss) - [Oldest Serving US Astronaut Returns to Earth on 70th Birthday](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss)
* [2025-04-22, 10:24:43](https://news.ycombinator.com/item?id=43760626) - [SerenityOS is a love letter to &apos;90s user interfaces](https://serenityos.org/)
* [2025-04-22, 10:24:37](https://news.ycombinator.com/item?id=43760625) - [Does RL Incentivize Reasoning in LLMs Beyond the Base Model?](https://limit-of-rlvr.github.io/)
* [2025-04-22, 10:00:45](https://lobste.rs/s/wnuoeu/evertop_e_ink_ibm_xt_clone_with_solar_power) - [Evertop: E-ink IBM XT clone with solar power, ultra low power consumption, and ultra long battery life](https://github.com/ericjenott/Evertop)
* [2025-04-22, 10:00:00](https://tech.slashdot.org/story/25/04/22/0137218/google-says-doj-breakup-would-harm-us-in-global-race-with-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says DOJ Breakup Would Harm US In &apos;Global Race With China&apos;](https://tech.slashdot.org/story/25/04/22/0137218/google-says-doj-breakup-would-harm-us-in-global-race-with-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 09:12:57](https://lobste.rs/s/c8irws/adding_shortcodes_marksmith_editor) - [Adding shortcodes to the Marksmith editor](https://avohq.io/blog/marksmith-shortcodes)
* [2025-04-22, 08:56:10](https://lobste.rs/s/tlbyzv/make_your_own_internet_presence_with) - [Make Your Own Internet Presence with NetBSD and a 1 euro VPS – Part 1: Your Blog](https://it-notes.dragas.net/2025/04/22/make-your-own-internet-presence-with-netbsd-and-a-1-euro-vps-part-1-your-blog/)
* [2025-04-22, 07:00:00](https://science.slashdot.org/story/25/04/22/026253/nasas-oldest-astronaut-celebrates-70th-birthday-with-return-to-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA&apos;s Oldest Astronaut Celebrates 70th Birthday With Return To Earth](https://science.slashdot.org/story/25/04/22/026253/nasas-oldest-astronaut-celebrates-70th-birthday-with-return-to-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 06:44:00](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss) - [Scientists Can Tell Healthy And Cancerous Cells Apart By How They Move](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss)
* [2025-04-22, 06:31:29](https://lobste.rs/s/ydxus1/pipelining_might_be_my_favorite) - [Pipelining might be my favorite programming language feature](https://herecomesthemoon.net/2025/04/pipelining/)
* [2025-04-22, 06:28:00](https://soylentnews.org/meta/article.pl?sid=25/04/22/0619254&amp;from=rss) - [ \&quot;Only 2 submissions in the queue.\&quot;](https://soylentnews.org/meta/article.pl?sid=25/04/22/0619254&amp;from=rss)
* [2025-04-22, 06:15:49](https://news.ycombinator.com/item?id=43759513) - [AI for Network Engineers: Understanding Flow, Flowlet, and Packet-Based LB](https://nwktimes.blogspot.com/2025/04/ai-for-network-engineers-understanding.html)
* [2025-04-22, 05:59:28](https://news.ycombinator.com/item?id=43759436) - [Fujitsu and RIKEN develop world-leading 256-qubit sup quantum computer](https://www.fujitsu.com/global/about/resources/news/press-releases/2025/0422-01.html)
* [2025-04-22, 05:49:15](https://lobste.rs/s/y0kdjy/scritch_modified_scratch_optimised_for) - [Scritch | modified scratch optimised for teaching](https://jonathanalland.com/scritch.html)
* [2025-04-22, 04:27:40](https://news.ycombinator.com/item?id=43759073) - [Attacking My Landlord&apos;s Boiler](https://blog.videah.net/attacking-my-landlords-boiler/)
* [2025-04-22, 04:27:02](https://lobste.rs/s/18ycoz/attacking_my_landlord_s_boiler) - [Attacking My Landlord&apos;s Boiler](https://blog.videah.net/attacking-my-landlords-boiler/)
* [2025-04-22, 04:07:04](https://news.ycombinator.com/item?id=43758999) - [Welcome to our website for the 1963 BBC MCR21 OB Van](https://mcr21.org.uk/)
* [2025-04-22, 04:01:59](https://lobste.rs/s/naazom/cheating_reaper_go) - [Cheating the Reaper in Go](https://mcyoung.xyz/2025/04/21/go-arenas/)
* [2025-04-22, 03:30:00](https://news.slashdot.org/story/25/04/21/2056255/the-quest-to-build-islands-with-ocean-currents-in-the-maldives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Quest To Build Islands With Ocean Currents In the Maldives](https://news.slashdot.org/story/25/04/21/2056255/the-quest-to-build-islands-with-ocean-currents-in-the-maldives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 02:01:00](https://soylentnews.org/article.pl?sid=25/04/20/1820252&amp;from=rss) - [Jim Zemlin on Taking a &apos;Portfolio Approach&apos; to Linux Foundation Projects](https://soylentnews.org/article.pl?sid=25/04/20/1820252&amp;from=rss)
* [2025-04-22, 01:40:00](https://it.slashdot.org/story/25/04/22/0118200/ai-hallucinations-lead-to-a-new-cyber-threat-slopsquatting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Hallucinations Lead To a New Cyber Threat: Slopsquatting](https://it.slashdot.org/story/25/04/22/0118200/ai-hallucinations-lead-to-a-new-cyber-threat-slopsquatting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 01:19:50](https://lobste.rs/s/klqcce/decentralizing_schemes) - [Decentralizing Schemes](https://www.tbray.org/ongoing/When/202x/2025/04/16/Decentralized-Schemes)
* [2025-04-22, 01:12:00](https://news.slashdot.org/story/25/04/22/0110251/airbnb-now-shows-the-full-price-of-your-stay-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbnb Now Shows the Full Price of Your Stay By Default](https://news.slashdot.org/story/25/04/22/0110251/airbnb-now-shows-the-full-price-of-your-stay-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 01:08:00](https://slashdot.org/story/25/04/22/018236/microsoft-implements-stricter-performance-management-system-with-two-year-rehire-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Implements Stricter Performance Management System With Two-Year Rehire Ban](https://slashdot.org/story/25/04/22/018236/microsoft-implements-stricter-performance-management-system-with-two-year-rehire-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 00:25:12](https://news.ycombinator.com/item?id=43757916) - [Prolog Adventure Game](https://github.com/stefanrodrigues2/Prolog-Adventure-game)
* [2025-04-22, 00:23:26](https://lobste.rs/s/llxpp7/first_impressions_pocket_flow_s_tutorial) - [First impressions of Pocket Flow’s tutorial generator](https://technicalwriting.dev/ml/pocketflow/index.html)
* [2025-04-21, 23:40:00](https://hardware.slashdot.org/story/25/04/21/2049235/chinas-catl-says-it-has-overtaken-byd-on-5-minute-ev-charging-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s CATL Says It Has Overtaken BYD On 5-Minute EV Charging Time](https://hardware.slashdot.org/story/25/04/21/2049235/chinas-catl-says-it-has-overtaken-byd-on-5-minute-ev-charging-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 23:06:49](https://lobste.rs/s/gt4wye/record_tuple_ecmascript_proposal_has) - [The Record/Tuple ECMAScript Proposal has been withdrawn](https://github.com/tc39/proposal-record-tuple)
* [2025-04-21, 23:00:00](https://hardware.slashdot.org/story/25/04/21/2039200/wd-launches-hdd-recycling-process-that-reclaims-rare-earth-elements-cuts-out-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WD Launches HDD Recycling Process That Reclaims Rare Earth Elements, Cuts Out China](https://hardware.slashdot.org/story/25/04/21/2039200/wd-launches-hdd-recycling-process-that-reclaims-rare-earth-elements-cuts-out-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 22:47:38](https://news.ycombinator.com/item?id=43757341) - [101 BASIC Computer Games](https://github.com/maurymarkowitz/101-BASIC-Computer-Games)
* [2025-04-21, 22:20:00](https://slashdot.org/story/25/04/21/2031221/amazon-has-paused-some-data-center-lease-commitments-wells-fargo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Has Paused Some Data Center Lease Commitments, Wells Fargo Says](https://slashdot.org/story/25/04/21/2031221/amazon-has-paused-some-data-center-lease-commitments-wells-fargo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 22:15:40](https://lobste.rs/s/z2jpjn/building_website_fit_for_1999) - [Building a Website Fit for 1999](https://www.wezm.net/v2/posts/2025/website-fit-for-1999/)
* [2025-04-21, 22:07:49](https://news.ycombinator.com/item?id=43757037) - [Evertop: E-ink IBM XT clone with 100+ hours of battery life](https://github.com/ericjenott/Evertop)
* [2025-04-21, 21:46:32](https://news.ycombinator.com/item?id=43756871) - [Cheating the Reaper in Go](https://mcyoung.xyz/2025/04/21/go-arenas/)
* [2025-04-21, 21:40:00](https://tech.slashdot.org/story/25/04/21/2031245/cursor-ais-own-support-bot-hallucinated-its-usage-policy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cursor AI&apos;s Own Support Bot Hallucinated Its Usage Policy](https://tech.slashdot.org/story/25/04/21/2031245/cursor-ais-own-support-bot-hallucinated-its-usage-policy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 21:13:00](https://soylentnews.org/article.pl?sid=25/04/20/0513237&amp;from=rss) - [Deepseek Open Source model Promotes Fast Innovation and Extensive Application in China](https://soylentnews.org/article.pl?sid=25/04/20/0513237&amp;from=rss)
* [2025-04-21, 20:57:00](https://tech.slashdot.org/story/25/04/21/2027253/wine-106-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wine 10.6 Released](https://tech.slashdot.org/story/25/04/21/2027253/wine-106-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 19:31:00](https://lobste.rs/s/eqqops/this_blog_is_hosted_on_nintendo_wii) - [This blog is hosted on a Nintendo Wii](https://blog.infected.systems/posts/2025-04-21-this-blog-is-hosted-on-a-nintendo-wii/)
* [2025-04-21, 18:33:02](https://lobste.rs/s/awsduo/new_form_verification_on_bluesky) - [A New Form of Verification on Bluesky](https://bsky.social/about/blog/04-21-2025-verification)
* [2025-04-21, 18:29:04](https://news.ycombinator.com/item?id=43754953) - [Blog hosted on a Nintendo Wii](https://blog.infected.systems/posts/2025-04-21-this-blog-is-hosted-on-a-nintendo-wii/)
* [2025-04-21, 17:07:07](https://news.ycombinator.com/item?id=43754124) - [Show HN: Dia, an open-weights TTS model for generating realistic dialogue](https://github.com/nari-labs/dia)
* [2025-04-21, 16:28:00](https://soylentnews.org/article.pl?sid=25/04/20/059216&amp;from=rss) - [The Universe Isn&apos;t Just Expanding—It May be Spinning](https://soylentnews.org/article.pl?sid=25/04/20/059216&amp;from=rss)
* [2025-04-21, 15:25:47](https://lobste.rs/s/qnvvne/pgdog_horizontal_scaling_for_postgresql) - [pgdog: Horizontal scaling for PostgreSQL with automatic sharding](https://github.com/pgdogdev/pgdog)
* [2025-04-21, 14:07:03](https://news.ycombinator.com/item?id=43752176) - [Launch HN: Magic Patterns (YC W23) – AI Design and Prototyping for Product Teams](https://news.ycombinator.com/item?id=43752176)
* [2025-04-21, 12:52:27](https://lobste.rs/s/3s9y3i/nerdlog_fast_multi_host_tui_log_viewer) - [Nerdlog: Fast, multi-host TUI log viewer with timeline histogram](https://dmitryfrank.com/projects/nerdlog/article)
* [2025-04-21, 12:37:19](https://lobste.rs/s/mdshkf/getting_forked_by_microsoft) - [Getting Forked by Microsoft](https://philiplaine.com/posts/getting-forked-by-microsoft/)
* [2025-04-21, 11:41:00](https://soylentnews.org/article.pl?sid=25/04/20/051250&amp;from=rss) - [Google Introduces Firebase Studio, an End-to-End Platform That Builds Custom Apps in-Browser](https://soylentnews.org/article.pl?sid=25/04/20/051250&amp;from=rss)
* [2025-04-21, 11:18:31](https://lobste.rs/s/vioyel/projects_for_old_os_x) - [Projects For Old OS X](https://jonathanalland.com/old-osx-projects.html)
* [2025-04-21, 10:03:03](https://lobste.rs/s/66gzvi/reverse_engineering_obfuscated_tiktok) - [Reverse engineering the obfuscated TikTok VM](https://github.com/LukasOgunfeitimi/TikTok-ReverseEngineering)
* [2025-04-21, 09:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss) - [Pope Francis Has Died on Easter Monday Aged 88](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss)
* [2025-04-21, 06:53:00](https://soylentnews.org/article.pl?sid=25/04/20/0455204&amp;from=rss) - [Intel Agrees to Sell Controlling Stake in Altera Chip Business](https://soylentnews.org/article.pl?sid=25/04/20/0455204&amp;from=rss)
* [2025-04-21, 02:16:15](https://lobste.rs/s/p5g7rn/python_s_new_t_strings) - [Python&apos;s new t-strings](https://davepeck.org/2025/04/11/pythons-new-t-strings/)
* [2025-04-21, 02:08:00](https://soylentnews.org/article.pl?sid=25/04/20/0452238&amp;from=rss) - [Google Has Illegal Advertising Monopoly, Judge Rules](https://soylentnews.org/article.pl?sid=25/04/20/0452238&amp;from=rss)
* [2025-04-20, 21:22:00](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss) - [Astronomers Say They’ve Recorded the Strongest Sign Yet of Life Beyond Earth](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss)
* [2025-04-20, 20:47:42](https://lobste.rs/s/7od3uk/how_i_use_kate_editor) - [How I use Kate Editor](https://akselmo.dev/posts/how-i-use-kate-editor/)
* [2025-04-20, 19:38:29](https://news.ycombinator.com/item?id=43745987) - [Verus: Verified Rust for low-level systems code](https://github.com/secure-foundations/verus)
* [2025-04-20, 17:13:22](https://news.ycombinator.com/item?id=43745038) - [Handheld detector for all types of ionizing radiation improves radiation safety](https://phys.org/news/2025-04-handheld-detector-ionizing-safety.html)
* [2025-04-20, 16:39:00](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss) - [Some Tropical Trees Act as Lightning Rods to Fend Off Rivals](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss)
* [2025-04-20, 11:55:00](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss) - [Spyware Maker NSO Group is Paving a Path Back Into Trump’s America](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss)
* [2025-04-20, 07:13:00](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss) - [Here&apos;s How a Satellite Ended Up as a Ghostly Apparition on Google Earth](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss)
* [2025-04-20, 02:28:00](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss) - [Everyone in AI is Talking About Manus. We Put It to the Test.](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss)
* [2025-04-19, 21:47:00](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss) - [Medical Cannabis Shows Potential to Fight Cancer, Largest-Ever Study Finds](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss)
* [2025-04-19, 17:33:05](https://news.ycombinator.com/item?id=43737916) - [Libro: a command-line tool to track your books](https://github.com/mkaz/libro)
* [2025-04-19, 17:02:00](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss) - [How a 1980s Toy Robot Arm Inspired Modern Robotics](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss)
* [2025-04-19, 12:25:58](https://news.ycombinator.com/item?id=43735960) - [A Real-Time Algorithm for Non-Convex Powered Descent Guidance [pdf]](https://depts.washington.edu/uwrainlab/wordpress/wp-content/uploads/2020/01/AIAA_SciTech_2020.pdf)
* [2025-04-19, 12:19:00](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss) - [Inside arXiv—the Most Transformative Platform in All of Science](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss)
* [2025-04-19, 08:37:00](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss) - [Vibe Coding _ !@#$% Kids! ](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss)
* [2025-04-19, 07:59:05](https://news.ycombinator.com/item?id=43734938) - [Pike – a dynamic programming language with a syntax similar to Java and C](https://pike.lysator.liu.se/)
* [2025-04-19, 04:53:00](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss) - [UK Founders Grow Frustrated Over Dearth of Funding: &apos;the Problem is Getting Worse&apos;](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss)
* [2025-04-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss) - [Dirty Tricks 6502 Programmers Use](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss)
* [2025-04-18, 22:59:43](https://news.ycombinator.com/item?id=43732632) - [We Diagnosed and Fixed the 2023 Voyager 1 Anomaly from 15B Miles Away [video]](https://www.youtube.com/watch?v=YcUycQoz0zg)
* [2025-04-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/04/17/1348247&amp;from=rss) - [States are Banning Forever Chemicals. Industry is Fighting Back](https://soylentnews.org/article.pl?sid=25/04/17/1348247&amp;from=rss)
* [2025-04-18, 14:34:00](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss) - [The Friendship Recession: The Lost Art of Connecting](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss)
* [2025-04-18, 09:52:00](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss) - [‘End of an Era’: The Last RadioShack in Maryland is Closing its Doors](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss)
* [2025-04-18, 05:07:00](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss) - [Oxygen Discovered in Most Distant Known Galaxy](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss)
* [2025-04-18, 00:21:00](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss) - [Phase Two of Military AI Has Arrived](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss)
