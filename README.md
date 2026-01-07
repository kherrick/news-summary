# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI Innovations

* [Utah Allows AI To Renew Medical Prescriptions](https://science.slashdot.org/story/26/01/06/2227211/utah-allows-ai-to-renew-medical-prescriptions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Explore how Utah is pioneering the use of AI to renew medical prescriptions, raising discussions on automation in healthcare.

* [Nvidia Details New AI Chips and Autonomous Car Project With Mercedes](https://tech.slashdot.org/story/26/01/06/222251/nvidia-details-new-ai-chips-and-autonomous-car-project-with-mercedes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Nvidia unveils cutting-edge AI chips and a partnership with Mercedes on autonomous driving technology.

* [Nvidia's New G-Sync Pulsar Monitors Target Motion Blur at the Human Retina Level](https://tech.slashdot.org/story/26/01/06/1859211/nvidias-new-g-sync-pulsar-monitors-target-motion-blur-at-the-human-retina-level?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Dive into Nvidia's innovative G-Sync Pulsar monitors, specifically designed to minimize motion blur to the human retina level, promising a new gaming experience.

* [Intel Is Making Its Own Handheld Gaming PC Chips At CES 2026](https://hardware.slashdot.org/story/26/01/06/2141257/intel-is-making-its-own-handheld-gaming-pc-chips-at-ces-2026?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Intel announces the development of specialized chips for handheld gaming PCs, showcasing new tech from CES 2026.

* [HarperCollins Will Use AI To Translate Harlequin Romance Novels](https://news.slashdot.org/story/26/01/06/1624238/harpercollins-will-use-ai-to-translate-harlequin-romance-novels?utm_source=rss1.0mainlinkanon&utm_medium=feed) - HarperCollins leverages AI for efficient translation of Harlequin romance novels into multiple languages.

## Science and Environment

* [Study Casts Doubt on Potential For Life on Jupiter's Moon Europa](https://science.slashdot.org/story/26/01/06/1913207/study-casts-doubt-on-potential-for-life-on-jupiters-moon-europa?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A recent study questions the habitability potential of Jupiter's moon Europa, challenging previous speculations.

* [Strengthening Asphalt Roads With a Unique Green Ingredient: Algae](https://soylentnews.org/article.pl?sid=26/01/03/0139235&from=rss) - Explore how algae is being used to enhance the durability and environmental sustainability of asphalt roads.

## Cybersecurity and Digital Privacy

* [NYC Wegmans Is Storing Biometric Data On Shoppers' Eyes, Voices and Faces](https://yro.slashdot.org/story/26/01/06/2231258/nyc-wegmans-is-storing-biometric-data-on-shoppers-eyes-voices-and-faces?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Questions arise over privacy as NYC Wegmans is accused of storing biometric data from shoppers.

* [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&from=rss) - A security flaw in MongoDB exposes thousands of servers to potential data breaches, underscoring the need for improved safeguards.

## Space and Astronomy

* [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&from=rss) - A UK company's experiment with a 1,000-degree furnace orbited to explore the potential of manufacturing chips in space.

* [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&from=rss) - Significant upgrades for the Large Hadron Collider aim to further advance particle physics research and experiments.

## Software and Programming

* [JavaScript's for-of loops are actually fast](https://waspdev.com/articles/2026-01-01/javascript-for-of-loops-are-actually-fast) - A detailed take on the performance realities associated with JavaScript's for-of loops.

* [Go 1.26 interactive tour](https://antonz.org/go-1-26/) - Take an interactive tour of the new features and updates included in Go 1.26.

## Cultural and Consumer Insights

* [Lego Unveils Smart Bricks, Its 'Most Significant Evolution' in 50 years](https://tech.slashdot.org/story/26/01/06/1842257/lego-unveils-smart-bricks-its-most-significant-evolution-in-50-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Lego introduces high-tech smart bricks as a game-changer in construction playsets for children.

* [Vietnam Bans Unskippable Ads](https://yro.slashdot.org/story/26/01/06/2148253/vietnam-bans-unskippable-ads?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New consumer-friendly regulation in Vietnam ensures unskippable video ads won't ruin user experience.

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

* [2026-01-07, 06:23:33](https://lobste.rs/s/7bdvsi/xmpp_metadata) - [XMPP and metadata](https://blog.mathieui.net/xmpp-and-metadata.html)
* [2026-01-07, 05:44:54](https://news.ycombinator.com/item?id=46523029) - [Bill to Eliminate H-1B Visa Program Introduced in Congress](https://www.newsweek.com/eliminate-h1b-visa-program-congress-bill-marjorie-taylor-greene-11312655)
* [2026-01-07, 04:48:50](https://news.ycombinator.com/item?id=46522686) - [A glimpse into V8 development for RISC-V](https://riseproject.dev/2025/12/09/a-glimpse-into-v8-development-for-risc-v/)
* [2026-01-07, 04:46:32](https://lobste.rs/s/gvzpf5/freestyle_linked_lists_tricks) - [Freestyle linked lists tricks](https://nullprogram.com/blog/2025/12/31/)
* [2026-01-07, 03:48:05](https://news.ycombinator.com/item?id=46522308) - [On the slow death of scaling](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5877662)
* [2026-01-07, 03:47:00](https://soylentnews.org/article.pl?sid=26/01/05/1230257&amp;from=rss) - [China Mandates 50% Domestic Equipment Rule for Chipmakers](https://soylentnews.org/article.pl?sid=26/01/05/1230257&amp;from=rss)
* [2026-01-07, 03:30:00](https://developers.slashdot.org/story/26/01/06/2239243/creator-of-claude-code-reveals-his-workflow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Creator of Claude Code Reveals His Workflow](https://developers.slashdot.org/story/26/01/06/2239243/creator-of-claude-code-reveals-his-workflow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 02:37:09](https://news.ycombinator.com/item?id=46521860) - [Microsoft probably killed my Snapdragon Dev Kit](https://jasoneckert.github.io/myblog/how-microsoft-killed-my-snapdragon-devkit/)
* [2026-01-07, 02:02:00](https://news.slashdot.org/story/26/01/07/003225/discord-files-confidentially-for-ipo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Discord Files Confidentially For IPO](https://news.slashdot.org/story/26/01/07/003225/discord-files-confidentially-for-ipo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 01:25:00](https://yro.slashdot.org/story/26/01/06/2231258/nyc-wegmans-is-storing-biometric-data-on-shoppers-eyes-voices-and-faces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYC Wegmans Is Storing Biometric Data On Shoppers&apos; Eyes, Voices and Faces](https://yro.slashdot.org/story/26/01/06/2231258/nyc-wegmans-is-storing-biometric-data-on-shoppers-eyes-voices-and-faces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 00:50:58](https://news.ycombinator.com/item?id=46521084) - [PassSeeds – hijacking Passkeys to unlock new cryptographic use cases](https://backalleycoder.com/posts/passseeds-an-experiment-in-hijacking-passkeys-to-unlock-cryptographic-use-cases/)
* [2026-01-07, 00:45:00](https://science.slashdot.org/story/26/01/06/2227211/utah-allows-ai-to-renew-medical-prescriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Utah Allows AI To Renew Medical Prescriptions](https://science.slashdot.org/story/26/01/06/2227211/utah-allows-ai-to-renew-medical-prescriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 00:44:43](https://news.ycombinator.com/item?id=46521029) - [We recreated Steve Jobs&apos;s 1975 Atari horoscope program](https://blog.adafruit.com/2026/01/06/we-recreated-steve-jobss-1975-atari-horoscope-program-and-you-can-run-it/)
* [2026-01-07, 00:31:01](https://news.ycombinator.com/item?id=46520935) - [Electronic nose for indoor mold detection and identification](https://advanced.onlinelibrary.wiley.com/doi/10.1002/adsr.202500124)
* [2026-01-07, 00:30:09](https://news.ycombinator.com/item?id=46520926) - [Show HN: SMTP Tunnel – A SOCKS5 proxy disguised as email traffic to bypass DPI](https://github.com/x011/smtp-tunnel-proxy)
* [2026-01-07, 00:22:06](https://news.ycombinator.com/item?id=46520879) - [Why the trans flag emoji is the 5-codepoint sequence it is](https://hecate.pink/blog/2026/trans-flag-emoji/)
* [2026-01-07, 00:20:18](https://lobste.rs/s/1uubbb/why_trans_flag_emoji_is_5_codepoint) - [why the trans flag emoji is the 5-codepoint sequence it is](https://hecate.pink/blog/2026/trans-flag-emoji/)
* [2026-01-07, 00:02:00](https://tech.slashdot.org/story/26/01/06/222251/nvidia-details-new-ai-chips-and-autonomous-car-project-with-mercedes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Details New AI Chips and Autonomous Car Project With Mercedes](https://tech.slashdot.org/story/26/01/06/222251/nvidia-details-new-ai-chips-and-autonomous-car-project-with-mercedes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 23:45:42](https://lobste.rs/s/xtfpdr/this_month_redox_december_2025) - [This Month in Redox - December 2025](https://www.redox-os.org/news/this-month-251231/)
* [2026-01-06, 23:20:00](https://tech.slashdot.org/story/26/01/06/2154225/google-will-now-only-release-android-source-code-twice-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Will Now Only Release Android Source Code Twice a Year](https://tech.slashdot.org/story/26/01/06/2154225/google-will-now-only-release-android-source-code-twice-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 23:06:07](https://lobste.rs/s/bffnsm/where_are_all_low_level_jits) - [Where are all the low-level JITs?](https://lobste.rs/s/bffnsm/where_are_all_low_level_jits)
* [2026-01-06, 23:01:00](https://soylentnews.org/article.pl?sid=26/01/05/1222243&amp;from=rss) - [Blu-Ray Hits 20 Years Old, and It Isn&apos;t Dead Yet](https://soylentnews.org/article.pl?sid=26/01/05/1222243&amp;from=rss)
* [2026-01-06, 22:40:00](https://yro.slashdot.org/story/26/01/06/2148253/vietnam-bans-unskippable-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vietnam Bans Unskippable Ads](https://yro.slashdot.org/story/26/01/06/2148253/vietnam-bans-unskippable-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 22:02:00](https://hardware.slashdot.org/story/26/01/06/2141257/intel-is-making-its-own-handheld-gaming-pc-chips-at-ces-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Is Making Its Own Handheld Gaming PC Chips At CES 2026](https://hardware.slashdot.org/story/26/01/06/2141257/intel-is-making-its-own-handheld-gaming-pc-chips-at-ces-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 21:46:04](https://news.ycombinator.com/item?id=46519326) - [CES 2026: Taking the Lids Off AMD&apos;s Venice and MI400 SoCs](https://chipsandcheese.com/p/ces-2026-taking-the-lids-off-amds)
* [2026-01-06, 21:44:37](https://news.ycombinator.com/item?id=46519303) - [Laylo (YC S20) – Head of Growth (Organic and Partners and Loops and AI) – Remote US](https://www.ycombinator.com/companies/laylo/jobs/ZtLHRXe-head-of-growth)
* [2026-01-06, 21:23:07](https://news.ycombinator.com/item?id=46518996) - [Comparing AI agents to cybersecurity professionals in real-world pen testing](https://arxiv.org/abs/2512.09882)
* [2026-01-06, 21:22:00](https://science.slashdot.org/story/26/01/06/1913207/study-casts-doubt-on-potential-for-life-on-jupiters-moon-europa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Casts Doubt on Potential For Life on Jupiter&apos;s Moon Europa](https://science.slashdot.org/story/26/01/06/1913207/study-casts-doubt-on-potential-for-life-on-jupiters-moon-europa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 21:10:47](https://news.ycombinator.com/item?id=46518804) - [Oral microbiome sequencing after taking probiotics](https://blog.booleanbiotech.com/oral-microbiome-biogaia)
* [2026-01-06, 20:55:01](https://news.ycombinator.com/item?id=46518573) - [A 30B Qwen model walks into a Raspberry Pi and runs in real time](https://byteshape.com/blogs/Qwen3-30B-A3B-Instruct-2507/)
* [2026-01-06, 20:42:00](https://tech.slashdot.org/story/26/01/06/1859211/nvidias-new-g-sync-pulsar-monitors-target-motion-blur-at-the-human-retina-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia&apos;s New G-Sync Pulsar Monitors Target Motion Blur at the Human Retina Level](https://tech.slashdot.org/story/26/01/06/1859211/nvidias-new-g-sync-pulsar-monitors-target-motion-blur-at-the-human-retina-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 20:39:36](https://lobste.rs/s/b0sfwb/high_performance_dbmss_with_io_uring_when) - [High-Performance DBMSs with io_uring: When and How to use it](https://arxiv.org/abs/2512.04859)
* [2026-01-06, 20:24:45](https://news.ycombinator.com/item?id=46518129) - [Calling All Hackers: How money works (2024)](https://phrack.org/issues/71/17)
* [2026-01-06, 20:01:00](https://tech.slashdot.org/story/26/01/06/1842257/lego-unveils-smart-bricks-its-most-significant-evolution-in-50-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lego Unveils Smart Bricks, Its &apos;Most Significant Evolution&apos; in 50 years](https://tech.slashdot.org/story/26/01/06/1842257/lego-unveils-smart-bricks-its-most-significant-evolution-in-50-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 19:38:32](https://news.ycombinator.com/item?id=46517458) - [Stop Doom Scrolling, Start Doom Coding: Build via the terminal from your phone](https://github.com/rberg27/doom-coding)
* [2026-01-06, 19:29:15](https://news.ycombinator.com/item?id=46517319) - [High-Performance DBMSs with io_uring: When and How to use it](https://arxiv.org/abs/2512.04859)
* [2026-01-06, 19:26:47](https://lobste.rs/s/uaaaao/diffs_js_library_for_rendering_diffs) - [Diffs - JS library for rendering diffs](https://diffs.com)
* [2026-01-06, 19:21:00](https://news.slashdot.org/story/26/01/06/1814242/elite-colleges-are-back-at-the-top-of-the-list-for-company-recruiters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Elite Colleges Are Back at the Top of the List For Company Recruiters](https://news.slashdot.org/story/26/01/06/1814242/elite-colleges-are-back-at-the-top-of-the-list-for-company-recruiters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 19:05:56](https://lobste.rs/s/xa27z2/postgresql_scripting_tips) - [PostgreSQL Scripting Tips](https://www.pgrs.net/2026/01/06/postgresql-scripting-tips/)
* [2026-01-06, 18:42:00](https://news.slashdot.org/story/26/01/06/1624238/harpercollins-will-use-ai-to-translate-harlequin-romance-novels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HarperCollins Will Use AI To Translate Harlequin Romance Novels](https://news.slashdot.org/story/26/01/06/1624238/harpercollins-will-use-ai-to-translate-harlequin-romance-novels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 18:19:00](https://soylentnews.org/article.pl?sid=26/01/03/0139235&amp;from=rss) - [Strengthening Asphalt Roads With a Unique Green Ingredient: Algae](https://soylentnews.org/article.pl?sid=26/01/03/0139235&amp;from=rss)
* [2026-01-06, 18:11:51](https://news.ycombinator.com/item?id=46516137) - [Passing of Joe Mancuso](https://github.com/MasoniteFramework/masonite/discussions/853)
* [2026-01-06, 18:01:00](https://news.slashdot.org/story/26/01/06/1614223/many-schools-dont-think-students-can-read-full-novels-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Many Schools Don&apos;t Think Students Can Read Full Novels Anymore](https://news.slashdot.org/story/26/01/06/1614223/many-schools-dont-think-students-can-read-full-novels-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 18:00:27](https://news.ycombinator.com/item?id=46515948) - [Locating a Photo of a Vehicle in 30 Seconds with GeoSpy](https://geospy.ai/blog/locating-a-photo-of-a-vehicle-in-30-seconds-with-geospy)
* [2026-01-06, 17:49:56](https://news.ycombinator.com/item?id=46515777) - [Launch HN: Tamarind Bio (YC W24) – AI Inference Provider for Drug Discovery](https://news.ycombinator.com/item?id=46515777)
* [2026-01-06, 17:45:37](https://news.ycombinator.com/item?id=46515696) - [Opus 4.5 is not the normal AI agent experience that I have had thus far](https://burkeholland.github.io/posts/opus-4-5-change-everything/)
* [2026-01-06, 17:33:50](https://lobste.rs/s/zly6jq/self_exchange_leaves_us_valid) - [Self-exchange leaves us in a valid but unspecified state](https://aatango.codeberg.page/cpp-self-exchange.html)
* [2026-01-06, 17:20:00](https://tech.slashdot.org/story/26/01/06/1353214/uk-urged-to-unplug-from-us-tech-giants-as-digital-sovereignty-fears-grow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Urged To Unplug From US Tech Giants as Digital Sovereignty Fears Grow](https://tech.slashdot.org/story/26/01/06/1353214/uk-urged-to-unplug-from-us-tech-giants-as-digital-sovereignty-fears-grow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 17:00:30](https://lobste.rs/s/uqsbvk/zero_heap_allocation_http_server_using) - [Zero heap allocation HTTP server using OxCaml](https://github.com/avsm/httpz)
* [2026-01-06, 16:45:42](https://news.ycombinator.com/item?id=46514677) - [Vietnam bans unskippable ads](https://saigoneer.com/vietnam-news/28652-vienam-bans-unskippable-ads,-requires-skip-button-to-appear-after-5-seconds)
* [2026-01-06, 15:52:09](https://news.ycombinator.com/item?id=46513860) - [The 5 Knights of the MCP Apocalypse](https://foojay.io/today/the-5-knights-of-the-mcp-apocalypse/)
* [2026-01-06, 15:23:17](https://lobste.rs/s/mg7vml/gemini_protocol_stats) - [Gemini Protocol Stats](https://www.obsessivefacts.com/gemini-proxy?uri=gemini%3A%2F%2Fgemini.bortzmeyer.org%2Fsoftware%2Flupa%2Fstats.gmi)
* [2026-01-06, 15:10:00](https://lobste.rs/s/5ymlmt/h_neurons_on_existence_impact_origin) - [H-Neurons: On the Existence, Impact, and Origin of Hallucination-Associated Neurons in LLMs](https://arxiv.org/pdf/2512.01797)
* [2026-01-06, 14:38:19](https://lobste.rs/s/gszn6p/there_were_bgp_anomalies_during) - [There Were BGP Anomalies During The Venezuela Blackout](https://loworbitsecurity.com/radar/radar16/)
* [2026-01-06, 13:50:48](https://news.ycombinator.com/item?id=46512203) - [Show HN: VaultSandbox – Test your real MailGun/SES/etc. integration](https://vaultsandbox.com/)
* [2026-01-06, 13:37:00](https://soylentnews.org/article.pl?sid=26/01/03/0137246&amp;from=rss) - [Venus Cloud Research Highlights Value of Combining Light and Polarization Measurements](https://soylentnews.org/article.pl?sid=26/01/03/0137246&amp;from=rss)
* [2026-01-06, 13:01:06](https://lobste.rs/s/rvgvgj/best_line_length_is_88) - [The Best Line Length is 88](https://blog.glyph.im/2025/08/the-best-line-length.html)
* [2026-01-06, 12:09:38](https://lobste.rs/s/cvk3lx/adding_insular_script_like_it_s_1626) - [Adding insular script like it&apos;s 1626](https://djmurphy.net/blog/clo-gaelach/)
* [2026-01-06, 12:06:02](https://lobste.rs/s/ntvlee/easy_horizontal_scrollbar_fixes_for_your) - [Easy (Horizontal Scrollbar) Fixes for Your Blog CSS](https://aartaka.me/easy-fixes.html)
* [2026-01-06, 11:01:13](https://lobste.rs/s/eflriy/javascript_s_for_loops_are_actually_fast) - [JavaScript&apos;s for-of loops are actually fast](https://waspdev.com/articles/2026-01-01/javascript-for-of-loops-are-actually-fast)
* [2026-01-06, 08:44:00](https://soylentnews.org/article.pl?sid=26/01/03/0135207&amp;from=rss) - [How Talking Slows Eye Movements Behind the Wheel](https://soylentnews.org/article.pl?sid=26/01/03/0135207&amp;from=rss)
* [2026-01-06, 07:59:56](https://lobste.rs/s/ep8rbp/i_switched_from_vscode_zed) - [I switched from VSCode to Zed](https://tenthousandmeters.com/blog/i-switched-from-vscode-to-zed/)
* [2026-01-06, 04:28:12](https://lobste.rs/s/9c952c/minimal_keyboard_key_effect_with_css) - [A minimal keyboard key effect with CSS](https://pjg1.site/kbd-css.html)
* [2026-01-06, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss) - [Mystery Solved: Scientists Discover Why Colorectal Cancer Defies Immune System Rules](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss)
* [2026-01-06, 03:54:19](https://lobste.rs/s/2kheyy/i_o_is_no_longer_bottleneck_2022) - [I/O is no longer the bottleneck? (2022)](https://stoppels.ch/2022/11/27/io-is-no-longer-the-bottleneck.html)
* [2026-01-06, 03:13:41](https://lobste.rs/s/eb73xx/so_you_want_chunk_really_fast) - [so, you want to chunk really fast?](https://minha.sh/posts/so,-you-want-to-chunk-really-fast)
* [2026-01-06, 03:07:08](https://lobste.rs/s/a8x19t/why_markdown_emphasis_fails_cjk_deep_dive) - [Why Markdown emphasis fails in CJK: A deep dive into CommonMark&apos;s delimiter rules](https://hackers.pub/@yurume/019b912a-cc3b-7e45-9227-d08f0d1eafe8)
* [2026-01-05, 23:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1627244&amp;from=rss) - [The Worst CPUs Ever Made](https://soylentnews.org/article.pl?sid=26/01/02/1627244&amp;from=rss)
* [2026-01-05, 20:30:43](https://lobste.rs/s/exv2eq/go_sum_is_not_lockfile) - [go.sum Is Not a Lockfile](https://words.filippo.io/gosum/)
* [2026-01-05, 18:37:00](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss) - [Parkinson&apos;s is the Canary in the Coal Mine Warning Us That Our Environment is Sick](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss)
* [2026-01-05, 18:10:50](https://lobste.rs/s/7d6b5i/go_1_26_interactive_tour) - [Go 1.26 interactive tour](https://antonz.org/go-1-26/)
* [2026-01-05, 17:54:03](https://news.ycombinator.com/item?id=46502148) - [Show HN: Make audio loops online](https://makeloops.online/)
* [2026-01-05, 13:53:00](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss) - [U.S. Allows TSMC to Import Chipmaking Equipment to its China Fabs](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss)
* [2026-01-05, 13:28:01](https://lobste.rs/s/2gvk2r/it_s_hard_justify_tahoe_icons) - [It’s hard to justify Tahoe icons](https://tonsky.me/blog/tahoe-icons/)
* [2026-01-05, 09:03:00](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss) - [How Do We Hold Companies Accountable for \&quot;Do as I Say, Not as I Do\&quot; Security Practices?](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss)
* [2026-01-05, 04:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss) - [In 1962, a Geologist Went Into a Cave. 2 Months Later, He&apos;d Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss)
* [2026-01-04, 23:40:30](https://news.ycombinator.com/item?id=46493607) - [Two ways to crack a walnut, per Grothendieck (2025)](https://shreevatsa.net/post/grothendieck-approaches/)
* [2026-01-04, 23:36:00](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss) - [He Made Beer That&apos;s Also a Vaccine. Now Controversy is Brewing](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss)
* [2026-01-04, 18:52:00](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss) - [HP-UX Hits End-of-Life](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss)
* [2026-01-04, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss) - [Americans Lost $333 Million to Bitcoin ATM Fraud in 2025](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss)
* [2026-01-04, 09:22:00](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss) - [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss)
* [2026-01-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss) - [Ozempic is Changing the Foods Americans Buy](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss)
* [2026-01-03, 23:48:00](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss) - [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss)
* [2026-01-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss) - [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss)
* [2026-01-03, 14:19:00](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss) - [Start-Up Proposes Scaled Up AI Data Center &apos;Active Radio Cable&apos; Connectivity](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss)
* [2026-01-03, 09:30:00](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss) - [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss)
* [2026-01-03, 04:45:00](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss) - [QNX Releases New Desktop-Focused Image: QNX 8.0 With Xfce on Wayland](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss)
* [2026-01-03, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss) - [For Computational Devices, Talk Isn&apos;t Cheap](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss)
