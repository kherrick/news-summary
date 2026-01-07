# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Innovations and Discoveries

* [Dell Walks Back AI-First Messaging After Learning Consumers Don't Care](https://tech.slashdot.org/story/26/01/07/1556212/dell-walks-back-ai-first-messaging-after-learning-consumers-dont-care?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [NES Top Gun: landing hotfix](https://relaxing.run/blag/posts/top-gun-sim)

* [Commodore 64 floppy drive has the power to be a computer and runs BASIC](https://www.tomshardware.com/pc-components/cpus/commodore-64-floppy-drive-has-the-power-to-be-a-computer-bulky-1982-commodore-1541-5-25-inch-drive-packs-a-1-mhz-mos-6502-cpu)

* [Hermes Studio demo (my React Native decompiler and disassembler)](https://www.youtube.com/watch?v=9wi8wMzmg-U)

* [Shipmap.org](https://www.shipmap.org/)

* [XMPP and metadata](https://blog.mathieui.net/xmpp-and-metadata.html)

## Environmental and Legal Developments

* [Sugar industry influenced researchers and blamed fat for CVD](https://www.ucsf.edu/news/2016/09/404081/sugar-papers-reveal-industry-role-shifting-national-heart-disease-focus)

* [Stingless Bees from the Amazon Granted Legal Rights in World First](https://soylentnews.org/article.pl?sid=26/01/06/0727248&amp;from=rss)

* [South Korea's President Identifies a New Enemy: Baldness](https://entertainment.slashdot.org/story/26/01/07/094206/south-koreas-president-identifies-a-new-enemy-baldness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [An AI-Generated NWS Map Invented Fake Towns In Idaho](https://yro.slashdot.org/story/26/01/07/0014200/an-ai-generated-nws-map-invented-fake-towns-in-idaho?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Security and Ethics in Tech

* [Founder of Spyware Maker PcTattletale Pleads Guilty To Hacking, Advertising Surveillance Software](https://yro.slashdot.org/story/26/01/07/0033238/founder-of-spyware-maker-pctattletale-pleads-guilty-to-hacking-advertising-surveillance-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [NYC Wegmans Is Storing Biometric Data On Shoppers' Eyes, Voices and Faces](https://yro.slashdot.org/story/26/01/06/2231258/nyc-wegmans-is-storing-biometric-data-on-shoppers-eyes-voices-and-faces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [US Job Openings Decline to Lowest Level in More Than a Year](https://www.bloomberg.com/news/articles/2026-01-07/us-job-openings-decline-to-lowest-level-in-more-than-a-year)

* [Supreme Court Increasingly Favors the Rich, Economists Say](https://www.nytimes.com/2026/01/05/us/politics/supreme-court-study-rich-poor.html)

## Creativity and Programming

* [Effortless animations with CSS view transitions](https://giacomocavalieri.me/writing/effortless-animations-with-css-view-transitions)

* [Show HN: RepoReaper – AST-aware, JIT-loading code audit agent (Python/AsyncIO)](https://github.com/tzzp1224/RepoReaper)

* [LaTeX Coffee Stains [pdf] (2021)](https://ctan.math.illinois.edu/graphics/pgf/contrib/coffeestains/coffeestains-en.pdf)

* [Open Source Mapping for News: Reuters](https://scottreinhardmaps.com/blogs/custom-mapping-projects/custom-reuters-open-source-mapping)

* [A4 Paper Stories](https://susam.net/a4-paper-stories.html)

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

* [2026-01-07, 16:00:00](https://tech.slashdot.org/story/26/01/07/1556212/dell-walks-back-ai-first-messaging-after-learning-consumers-dont-care?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dell Walks Back AI-First Messaging After Learning Consumers Don&apos;t Care](https://tech.slashdot.org/story/26/01/07/1556212/dell-walks-back-ai-first-messaging-after-learning-consumers-dont-care?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 15:53:21](https://lobste.rs/s/krxqsa/nes_top_gun_landing_hotfix) - [NES Top Gun: landing hotfix](https://relaxing.run/blag/posts/top-gun-sim)
* [2026-01-07, 15:37:41](https://news.ycombinator.com/item?id=46527600) - [Commodore 64 floppy drive has the power to be a computer and runs BASIC](https://www.tomshardware.com/pc-components/cpus/commodore-64-floppy-drive-has-the-power-to-be-a-computer-bulky-1982-commodore-1541-5-25-inch-drive-packs-a-1-mhz-mos-6502-cpu)
* [2026-01-07, 15:36:25](https://news.ycombinator.com/item?id=46527581) - [LLM Problems Observed in Humans](https://embd.cc/llm-problems-observed-in-humans)
* [2026-01-07, 15:32:44](https://news.ycombinator.com/item?id=46527533) - [US Job Openings Decline to Lowest Level in More Than a Year](https://www.bloomberg.com/news/articles/2026-01-07/us-job-openings-decline-to-lowest-level-in-more-than-a-year)
* [2026-01-07, 15:27:22](https://news.ycombinator.com/item?id=46527471) - [We might have been slower to abandon StackOverflow if it wasn&apos;t a toxic hellhole](https://www.pcloadletter.dev/blog/abandoning-stackoverflow/)
* [2026-01-07, 15:24:42](https://news.ycombinator.com/item?id=46527443) - [Supreme Court Increasingly Favors the Rich, Economists Say](https://www.nytimes.com/2026/01/05/us/politics/supreme-court-study-rich-poor.html)
* [2026-01-07, 15:20:00](https://it.slashdot.org/story/26/01/07/152242/everyone-hates-onedrive-microsofts-cloud-app-that-steals-then-deletes-all-your-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Everyone Hates OneDrive, Microsoft&apos;s Cloud App That Steals Then Deletes All Your Files&apos;](https://it.slashdot.org/story/26/01/07/152242/everyone-hates-onedrive-microsofts-cloud-app-that-steals-then-deletes-all-your-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 15:03:41](https://news.ycombinator.com/item?id=46527161) - [Shipmap.org](https://www.shipmap.org/)
* [2026-01-07, 15:03:34](https://news.ycombinator.com/item?id=46527157) - [Meditation as Wakeful Relaxation: Unclenching Smooth Muscle](https://psychotechnology.substack.com/p/meditation-as-wakeful-relaxation)
* [2026-01-07, 15:00:05](https://lobste.rs/s/zpwlya/effortless_animations_with_css_view) - [Effortless animations with CSS view transitions](https://giacomocavalieri.me/writing/effortless-animations-with-css-view-transitions)
* [2026-01-07, 14:58:59](https://lobste.rs/s/wzlpbz/hermes_studio_demo_my_react_native) - [Hermes Studio demo (my React Native decompiler and disassembler)](https://www.youtube.com/watch?v=9wi8wMzmg-U)
* [2026-01-07, 14:46:31](https://news.ycombinator.com/item?id=46526933) - [LaTeX Coffee Stains [pdf] (2021)](https://ctan.math.illinois.edu/graphics/pgf/contrib/coffeestains/coffeestains-en.pdf)
* [2026-01-07, 14:40:00](https://news.slashdot.org/story/26/01/07/1438220/polymarket-refuses-to-pay-bets-that-us-would-invade-venezuela?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Polymarket Refuses To Pay Bets That US Would &apos;Invade&apos; Venezuela](https://news.slashdot.org/story/26/01/07/1438220/polymarket-refuses-to-pay-bets-that-us-would-invade-venezuela?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 14:29:25](https://news.ycombinator.com/item?id=46526740) - [Sugar industry influenced researchers and blamed fat for CVD](https://www.ucsf.edu/news/2016/09/404081/sugar-papers-reveal-industry-role-shifting-national-heart-disease-focus)
* [2026-01-07, 14:15:32](https://news.ycombinator.com/item?id=46526584) - [Show HN: RepoReaper – AST-aware, JIT-loading code audit agent (Python/AsyncIO)](https://github.com/tzzp1224/RepoReaper)
* [2026-01-07, 14:00:00](https://entertainment.slashdot.org/story/26/01/07/094206/south-koreas-president-identifies-a-new-enemy-baldness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Korea&apos;s President Identifies a New Enemy: Baldness](https://entertainment.slashdot.org/story/26/01/07/094206/south-koreas-president-identifies-a-new-enemy-baldness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 13:40:57](https://lobste.rs/s/vgbfpl/open_source_mapping_for_news_reuters) - [Open Source Mapping for News: Reuters](https://scottreinhardmaps.com/blogs/custom-mapping-projects/custom-reuters-open-source-mapping)
* [2026-01-07, 13:23:02](https://lobste.rs/s/jcmtaa/a4_paper_stories) - [A4 Paper Stories](https://susam.net/a4-paper-stories.html)
* [2026-01-07, 13:22:35](https://news.ycombinator.com/item?id=46526088) - [Show HN: KeelTest – AI-driven VS Code unit test generator with bug discovery](https://keelcode.dev/keeltest)
* [2026-01-07, 13:17:00](https://soylentnews.org/article.pl?sid=26/01/06/0727248&amp;from=rss) - [Stingless Bees from the Amazon Granted Legal Rights in World First](https://soylentnews.org/article.pl?sid=26/01/06/0727248&amp;from=rss)
* [2026-01-07, 13:00:00](https://yro.slashdot.org/story/26/01/07/0033238/founder-of-spyware-maker-pctattletale-pleads-guilty-to-hacking-advertising-surveillance-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Founder of Spyware Maker PcTattletale Pleads Guilty To Hacking, Advertising Surveillance Software](https://yro.slashdot.org/story/26/01/07/0033238/founder-of-spyware-maker-pctattletale-pleads-guilty-to-hacking-advertising-surveillance-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 12:54:43](https://news.ycombinator.com/item?id=46525888) - [A4 Paper Stories](https://susam.net/a4-paper-stories.html)
* [2026-01-07, 12:29:11](https://news.ycombinator.com/item?id=46525640) - [“Stop Designing Languages. Write Libraries Instead” (2016)](https://lbstanza.org/purpose_of_programming_languages.html)
* [2026-01-07, 12:19:01](https://news.ycombinator.com/item?id=46525542) - [The Eric and Wendy Schmidt Observatory System](https://www.schmidtsciences.org/schmidt-observatory-system/)
* [2026-01-07, 12:00:20](https://news.ycombinator.com/item?id=46525394) - [Optery (YC W22) Hiring a CISO and Web Scraping Engineers (Node) (US and Latam)](https://www.optery.com/careers/)
* [2026-01-07, 11:24:34](https://lobste.rs/s/0mdcpr/most_popular_go_dependency_is) - [The most popular Go dependency is…](https://blog.thibaut-rousseau.com/blog/the-most-popular-go-dependency-is/)
* [2026-01-07, 11:05:02](https://lobste.rs/s/43g9u2/c_from_scratch_learn_build_safety) - [c-from-scratch: Learn to build safety-critical systems in C](https://github.com/williamofai/c-from-scratch)
* [2026-01-07, 10:29:46](https://lobste.rs/s/jx4zeh/gothub_ssh_signup) - [GoTHub SSH Signup](https://gothub.org/signup.html)
* [2026-01-07, 10:00:00](https://yro.slashdot.org/story/26/01/07/0026210/congressman-introduces-legislation-to-criminalize-insider-trading-on-prediction-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Congressman Introduces Legislation To Criminalize Insider Trading On Prediction Markets](https://yro.slashdot.org/story/26/01/07/0026210/congressman-introduces-legislation-to-criminalize-insider-trading-on-prediction-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 08:52:26](https://lobste.rs/s/skyxh7/what_is_index_overhead_on_writes) - [What is index overhead on writes?](https://www.depesz.com/2026/01/06/what-is-index-overhead-on-writes/)
* [2026-01-07, 08:34:12](https://lobste.rs/s/2vbnuj/postgresql_18_returning_enhancements) - [PostgreSQL 18 RETURNING Enhancements: A Game Changer for Modern Applications](https://www.pgedge.com/blog/postgresql-18-returning-enhancements-a-game-changer-for-modern-applications)
* [2026-01-07, 08:31:00](https://soylentnews.org/article.pl?sid=26/01/06/0722246&amp;from=rss) - [Lisuan&apos;s G100 Series Has Reportedly Begun Shipping Out to Customers in First Batch of Deliveries](https://soylentnews.org/article.pl?sid=26/01/06/0722246&amp;from=rss)
* [2026-01-07, 07:00:00](https://yro.slashdot.org/story/26/01/07/0014200/an-ai-generated-nws-map-invented-fake-towns-in-idaho?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An AI-Generated NWS Map Invented Fake Towns In Idaho](https://yro.slashdot.org/story/26/01/07/0014200/an-ai-generated-nws-map-invented-fake-towns-in-idaho?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 06:23:33](https://lobste.rs/s/7bdvsi/xmpp_metadata) - [XMPP and metadata](https://blog.mathieui.net/xmpp-and-metadata.html)
* [2026-01-07, 04:46:32](https://lobste.rs/s/gvzpf5/freestyle_linked_lists_tricks) - [Freestyle linked lists tricks](https://nullprogram.com/blog/2025/12/31/)
* [2026-01-07, 03:48:05](https://news.ycombinator.com/item?id=46522308) - [On the slow death of scaling](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5877662)
* [2026-01-07, 03:47:00](https://soylentnews.org/article.pl?sid=26/01/05/1230257&amp;from=rss) - [China Mandates 50% Domestic Equipment Rule for Chipmakers](https://soylentnews.org/article.pl?sid=26/01/05/1230257&amp;from=rss)
* [2026-01-07, 03:30:00](https://developers.slashdot.org/story/26/01/06/2239243/creator-of-claude-code-reveals-his-workflow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Creator of Claude Code Reveals His Workflow](https://developers.slashdot.org/story/26/01/06/2239243/creator-of-claude-code-reveals-his-workflow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 02:02:00](https://news.slashdot.org/story/26/01/07/003225/discord-files-confidentially-for-ipo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Discord Files Confidentially For IPO](https://news.slashdot.org/story/26/01/07/003225/discord-files-confidentially-for-ipo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 01:25:00](https://yro.slashdot.org/story/26/01/06/2231258/nyc-wegmans-is-storing-biometric-data-on-shoppers-eyes-voices-and-faces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYC Wegmans Is Storing Biometric Data On Shoppers&apos; Eyes, Voices and Faces](https://yro.slashdot.org/story/26/01/06/2231258/nyc-wegmans-is-storing-biometric-data-on-shoppers-eyes-voices-and-faces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 00:45:00](https://science.slashdot.org/story/26/01/06/2227211/utah-allows-ai-to-renew-medical-prescriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Utah Allows AI To Renew Medical Prescriptions](https://science.slashdot.org/story/26/01/06/2227211/utah-allows-ai-to-renew-medical-prescriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 00:31:01](https://news.ycombinator.com/item?id=46520935) - [Electronic nose for indoor mold detection and identification](https://advanced.onlinelibrary.wiley.com/doi/10.1002/adsr.202500124)
* [2026-01-07, 00:30:09](https://news.ycombinator.com/item?id=46520926) - [Show HN: SMTP Tunnel – A SOCKS5 proxy disguised as email traffic to bypass DPI](https://github.com/x011/smtp-tunnel-proxy)
* [2026-01-07, 00:20:18](https://lobste.rs/s/1uubbb/why_trans_flag_emoji_is_5_codepoint) - [why the trans flag emoji is the 5-codepoint sequence it is](https://hecate.pink/blog/2026/trans-flag-emoji/)
* [2026-01-07, 00:02:00](https://tech.slashdot.org/story/26/01/06/222251/nvidia-details-new-ai-chips-and-autonomous-car-project-with-mercedes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Details New AI Chips and Autonomous Car Project With Mercedes](https://tech.slashdot.org/story/26/01/06/222251/nvidia-details-new-ai-chips-and-autonomous-car-project-with-mercedes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 23:45:42](https://lobste.rs/s/xtfpdr/this_month_redox_december_2025) - [This Month in Redox - December 2025](https://www.redox-os.org/news/this-month-251231/)
* [2026-01-06, 23:20:00](https://tech.slashdot.org/story/26/01/06/2154225/google-will-now-only-release-android-source-code-twice-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Will Now Only Release Android Source Code Twice a Year](https://tech.slashdot.org/story/26/01/06/2154225/google-will-now-only-release-android-source-code-twice-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 23:06:07](https://lobste.rs/s/bffnsm/where_are_all_low_level_jits) - [Where are all the low-level JITs?](https://lobste.rs/s/bffnsm/where_are_all_low_level_jits)
* [2026-01-06, 23:01:00](https://soylentnews.org/article.pl?sid=26/01/05/1222243&amp;from=rss) - [Blu-Ray Hits 20 Years Old, and It Isn&apos;t Dead Yet](https://soylentnews.org/article.pl?sid=26/01/05/1222243&amp;from=rss)
* [2026-01-06, 22:40:00](https://yro.slashdot.org/story/26/01/06/2148253/vietnam-bans-unskippable-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vietnam Bans Unskippable Ads](https://yro.slashdot.org/story/26/01/06/2148253/vietnam-bans-unskippable-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 22:02:00](https://hardware.slashdot.org/story/26/01/06/2141257/intel-is-making-its-own-handheld-gaming-pc-chips-at-ces-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Is Making Its Own Handheld Gaming PC Chips At CES 2026](https://hardware.slashdot.org/story/26/01/06/2141257/intel-is-making-its-own-handheld-gaming-pc-chips-at-ces-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 20:55:01](https://news.ycombinator.com/item?id=46518573) - [A 30B Qwen model walks into a Raspberry Pi and runs in real time](https://byteshape.com/blogs/Qwen3-30B-A3B-Instruct-2507/)
* [2026-01-06, 20:39:36](https://lobste.rs/s/b0sfwb/high_performance_dbmss_with_io_uring_when) - [High-Performance DBMSs with io_uring: When and How to use it](https://arxiv.org/abs/2512.04859)
* [2026-01-06, 19:38:32](https://news.ycombinator.com/item?id=46517458) - [Stop Doom Scrolling, Start Doom Coding: Build via the terminal from your phone](https://github.com/rberg27/doom-coding)
* [2026-01-06, 19:26:47](https://lobste.rs/s/uaaaao/diffs_js_library_for_rendering_diffs) - [Diffs - JS library for rendering diffs](https://diffs.com)
* [2026-01-06, 19:05:56](https://lobste.rs/s/xa27z2/postgresql_scripting_tips) - [PostgreSQL Scripting Tips](https://www.pgrs.net/2026/01/06/postgresql-scripting-tips/)
* [2026-01-06, 18:19:00](https://soylentnews.org/article.pl?sid=26/01/03/0139235&amp;from=rss) - [Strengthening Asphalt Roads With a Unique Green Ingredient: Algae](https://soylentnews.org/article.pl?sid=26/01/03/0139235&amp;from=rss)
* [2026-01-06, 17:45:37](https://news.ycombinator.com/item?id=46515696) - [Opus 4.5 is not the normal AI agent experience that I have had thus far](https://burkeholland.github.io/posts/opus-4-5-change-everything/)
* [2026-01-06, 17:33:50](https://lobste.rs/s/zly6jq/self_exchange_leaves_us_valid) - [Self-exchange leaves us in a valid but unspecified state](https://aatango.codeberg.page/cpp-self-exchange.html)
* [2026-01-06, 17:00:30](https://lobste.rs/s/uqsbvk/zero_heap_allocation_http_server_using) - [Zero heap allocation HTTP server using OxCaml](https://github.com/avsm/httpz)
* [2026-01-06, 16:45:42](https://news.ycombinator.com/item?id=46514677) - [Vietnam bans unskippable ads](https://saigoneer.com/vietnam-news/28652-vienam-bans-unskippable-ads,-requires-skip-button-to-appear-after-5-seconds)
* [2026-01-06, 15:23:17](https://lobste.rs/s/mg7vml/gemini_protocol_stats) - [Gemini Protocol Stats](https://www.obsessivefacts.com/gemini-proxy?uri=gemini%3A%2F%2Fgemini.bortzmeyer.org%2Fsoftware%2Flupa%2Fstats.gmi)
* [2026-01-06, 14:38:19](https://lobste.rs/s/gszn6p/there_were_bgp_anomalies_during) - [There Were BGP Anomalies During The Venezuela Blackout](https://loworbitsecurity.com/radar/radar16/)
* [2026-01-06, 13:37:00](https://soylentnews.org/article.pl?sid=26/01/03/0137246&amp;from=rss) - [Venus Cloud Research Highlights Value of Combining Light and Polarization Measurements](https://soylentnews.org/article.pl?sid=26/01/03/0137246&amp;from=rss)
* [2026-01-06, 13:01:06](https://lobste.rs/s/rvgvgj/best_line_length_is_88) - [The Best Line Length is 88](https://blog.glyph.im/2025/08/the-best-line-length.html)
* [2026-01-06, 12:06:02](https://lobste.rs/s/ntvlee/easy_horizontal_scrollbar_fixes_for_your) - [Easy (Horizontal Scrollbar) Fixes for Your Blog CSS](https://aartaka.me/easy-fixes.html)
* [2026-01-06, 08:44:00](https://soylentnews.org/article.pl?sid=26/01/03/0135207&amp;from=rss) - [How Talking Slows Eye Movements Behind the Wheel](https://soylentnews.org/article.pl?sid=26/01/03/0135207&amp;from=rss)
* [2026-01-06, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss) - [Mystery Solved: Scientists Discover Why Colorectal Cancer Defies Immune System Rules](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss)
* [2026-01-05, 23:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1627244&amp;from=rss) - [The Worst CPUs Ever Made](https://soylentnews.org/article.pl?sid=26/01/02/1627244&amp;from=rss)
* [2026-01-05, 18:37:00](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss) - [Parkinson&apos;s is the Canary in the Coal Mine Warning Us That Our Environment is Sick](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss)
* [2026-01-05, 13:53:00](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss) - [U.S. Allows TSMC to Import Chipmaking Equipment to its China Fabs](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss)
* [2026-01-05, 13:28:01](https://lobste.rs/s/2gvk2r/it_s_hard_justify_tahoe_icons) - [It’s hard to justify Tahoe icons](https://tonsky.me/blog/tahoe-icons/)
* [2026-01-05, 09:03:00](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss) - [How Do We Hold Companies Accountable for \&quot;Do as I Say, Not as I Do\&quot; Security Practices?](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss)
* [2026-01-05, 04:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss) - [In 1962, a Geologist Went Into a Cave. 2 Months Later, He&apos;d Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss)
* [2026-01-04, 23:36:00](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss) - [He Made Beer That&apos;s Also a Vaccine. Now Controversy is Brewing](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss)
* [2026-01-04, 20:24:18](https://news.ycombinator.com/item?id=46491808) - [Quake Brutalist Jam III](https://www.slipseer.com/index.php?resources/quake-brutalist-jam-iii.549/)
* [2026-01-04, 18:52:00](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss) - [HP-UX Hits End-of-Life](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss)
* [2026-01-04, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss) - [Americans Lost $333 Million to Bitcoin ATM Fraud in 2025](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss)
* [2026-01-04, 09:22:00](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss) - [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss)
* [2026-01-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss) - [Ozempic is Changing the Foods Americans Buy](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss)
* [2026-01-04, 00:48:38](https://news.ycombinator.com/item?id=46483550) - [Show HN: Comet MCP – Give Claude Code a browser that can click](https://github.com/hanzili/comet-mcp)
* [2026-01-03, 23:48:00](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss) - [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss)
* [2026-01-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss) - [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss)
* [2026-01-03, 14:19:00](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss) - [Start-Up Proposes Scaled Up AI Data Center &apos;Active Radio Cable&apos; Connectivity](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss)
* [2026-01-03, 09:30:00](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss) - [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss)
* [2026-01-03, 06:49:52](https://news.ycombinator.com/item?id=46473400) - [Formal methods only solve half my problems](https://brooker.co.za/blog/2022/06/02/formal.html)
* [2026-01-03, 06:08:18](https://news.ycombinator.com/item?id=46473247) - [Vector graphics on GPU](https://gasiulis.name/vector-graphics-on-gpu/)
* [2026-01-03, 04:45:00](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss) - [QNX Releases New Desktop-Focused Image: QNX 8.0 With Xfce on Wayland](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss)
* [2026-01-03, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss) - [For Computational Devices, Talk Isn&apos;t Cheap](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss)
