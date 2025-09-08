# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Innovations

* [Show HN: TheAuditor – Offline security scanner for AI-generated code](https://github.com/TheAuditorTool/Auditor) ([comments](https://news.ycombinator.com/item?id=45165897))

* [Microsoft Shows Off its Latest Analog Optical Computer](https://soylentnews.org/article.pl?sid=25/09/07/0222253&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/07/0222253&from=rss))

* [Analog optical computer for AI inference and combinatorial optimization](https://www.nature.com/articles/s41586-025-09430-z) ([comments](https://news.ycombinator.com/item?id=45129507))

## Cybersecurity and Cryptography

* [Vibe-coded build system NX gets hacked, steals vibe-coders’ crypto](https://pivot-to-ai.com/2025/08/29/vibe-coded-build-system-nx-gets-hacked-steals-vibe-coders-crypto/) ([comments](https://lobste.rs/s/zctogg/vibe_coded_build_system_nx_gets_hacked))

* [Keeping secrets out of logs (2024)](https://allan.reyes.sh/posts/keeping-secrets-out-of-logs/) ([comments](https://news.ycombinator.com/item?id=45160774))

## Deep Learning and Computational Advancements

* [Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges (2021)](https://arxiv.org/abs/2104.13478) ([comments](https://lobste.rs/s/7npfkd/geometric_deep_learning_grids_groups))

* [Hashed sorting is typically faster than hash tables](https://reiner.org/hashed-sorting) ([comments](https://lobste.rs/s/4cnnuw/hashed_sorting_is_typically_faster_than))

* [Hilbert space: treating functions as vectors](https://eli.thegreenplace.net/2025/hilbert-space-treating-functions-as-vectors/) ([comments](https://lobste.rs/s/twnxj9/hilbert_space_treating_functions_as))

## Science and Climate Concern

* [This Unlikely Chemical Could be a Powerful Weapon Against Climate Change](https://soylentnews.org/article.pl?sid=25/09/07/005257&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/07/005257&from=rss))

* [Scientists Tap 'Secret' Fresh Water Under the Ocean, Raising Hopes For a Thirsty World](https://news.slashdot.org/story/25/09/05/160234/scientists-tap-secret-fresh-water-under-the-ocean-raising-hopes-for-a-thirsty-world?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/09/05/160234/scientists-tap-secret-fresh-water-under-the-ocean-raising-hopes-for-a-thirsty-world?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Technology and Hardware Developments

* [Intel Arc Pro B50 GPU Launched at $349 for Compact Workstations](https://www.guru3d.com/story/intel-arc-pro-b50-gpu-launched-at-for-compact-workstations/) ([comments](https://news.ycombinator.com/item?id=45162626))

* [Nvidia’s Next-Gen AI Chip Could Be Double the Price of H20 If China Export is Approved](https://soylentnews.org/article.pl?sid=25/09/06/1514247&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/06/1514247&from=rss))

* [The MacBook has a sensor that knows the exact angle of the screen hinge](https://twitter.com/samhenrigold/status/1964428927159382261) ([comments](https://news.ycombinator.com/item?id=45158968))

## Programming and Software Engineering Insights

* [‘Make invalid states unrepresentable’ considered harmful](https://www.seangoedecke.com/invalid-states/) ([comments](https://lobste.rs/s/itj50a/make_invalid_states_unrepresentable))

* [How I solved a distributed queue problem after 15 years | DBOS](https://www.dbos.dev/blog/durable-queues) ([comments](https://lobste.rs/s/eo4uo7/how_i_solved_distributed_queue_problem))

* [Deliberate Abstraction](https://entropicthoughts.com/deliberate-abstraction) ([comments](https://lobste.rs/s/jwreod/deliberate_abstraction))

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

* [2025-09-08, 09:36:50](https://lobste.rs/s/z3iuxt/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/z3iuxt/what_are_you_doing_this_week)
* [2025-09-08, 08:39:36](https://lobste.rs/s/itj50a/make_invalid_states_unrepresentable) - [&apos;Make invalid states unrepresentable&apos; considered harmful](https://www.seangoedecke.com/invalid-states/)
* [2025-09-08, 08:28:15](https://news.ycombinator.com/item?id=45165897) - [Show HN: TheAuditor – Offline security scanner for AI-generated code](https://github.com/TheAuditorTool/Auditor)
* [2025-09-08, 08:25:21](https://lobste.rs/s/zctogg/vibe_coded_build_system_nx_gets_hacked) - [Vibe-coded build system NX gets hacked, steals vibe-coders’ crypto](https://pivot-to-ai.com/2025/08/29/vibe-coded-build-system-nx-gets-hacked-steals-vibe-coders-crypto/)
* [2025-09-08, 08:13:37](https://lobste.rs/s/7npfkd/geometric_deep_learning_grids_groups) - [Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges (2021)](https://arxiv.org/abs/2104.13478)
* [2025-09-08, 08:01:17](https://lobste.rs/s/4cnnuw/hashed_sorting_is_typically_faster_than) - [Hashed sorting is typically faster than hash tables](https://reiner.org/hashed-sorting)
* [2025-09-08, 07:18:20](https://lobste.rs/s/jwreod/deliberate_abstraction) - [Deliberate Abstraction](https://entropicthoughts.com/deliberate-abstraction)
* [2025-09-08, 06:43:00](https://soylentnews.org/article.pl?sid=25/09/07/1352214&amp;from=rss) - [Trump Family&apos;s Crypto Token Just Made Them $5 Billion Richer](https://soylentnews.org/article.pl?sid=25/09/07/1352214&amp;from=rss)
* [2025-09-08, 06:38:34](https://news.ycombinator.com/item?id=45165245) - [Show HN: Veena Chromatic Tuner](https://play.google.com/store/apps/details?id=in.magima.digitaltuner&amp;hl=en_US)
* [2025-09-08, 06:04:51](https://news.ycombinator.com/item?id=45165066) - [Show HN: C++ library for reading MacBook lid angle sensor data](https://github.com/ufoym/mac-angle)
* [2025-09-08, 05:27:05](https://lobste.rs/s/eo4uo7/how_i_solved_distributed_queue_problem) - [How I solved a distributed queue problem after 15 years | DBOS](https://www.dbos.dev/blog/durable-queues)
* [2025-09-08, 04:01:03](https://lobste.rs/s/eipoef/adventures_porting_wayland_compositor) - [Adventures in porting a Wayland Compositor to NetBSD and OpenBSD](https://youtu.be/oo_8gnWQ4xo)
* [2025-09-08, 02:00:00](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss) - [Microsoft Shows Off its Latest Analog Optical Computer](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss)
* [2025-09-08, 01:48:27](https://lobste.rs/s/vryfua/ready_prek_go) - [Ready prek go](https://hugovk.dev/blog/2025/ready-prek-go/)
* [2025-09-08, 01:14:21](https://lobste.rs/s/oyw6ya/css_bed) - [CSS Bed](https://www.cssbed.com/)
* [2025-09-08, 00:17:31](https://lobste.rs/s/zgnsn4/using_claude_code_modernize_25_year_old) - [Using Claude Code to modernize a 25-year-old kernel driver](https://dmitrybrant.com/2025/09/07/using-claude-code-to-modernize-a-25-year-old-kernel-driver)
* [2025-09-07, 23:53:47](https://news.ycombinator.com/item?id=45163362) - [Using Claude Code to modernize a 25-year-old kernel driver](https://dmitrybrant.com/2025/09/07/using-claude-code-to-modernize-a-25-year-old-kernel-driver)
* [2025-09-07, 23:08:42](https://news.ycombinator.com/item?id=45163043) - [Formatting code should be unnecessary](https://maxleiter.com/blog/formatting)
* [2025-09-07, 22:34:23](https://news.ycombinator.com/item?id=45162803) - [The demo scene is dying, but that&apos;s alright](https://www.datagubbe.se/sceneherit/)
* [2025-09-07, 22:21:38](https://lobste.rs/s/hboytm/beyond_markdown_2018) - [Beyond Markdown (2018)](https://johnmacfarlane.net/beyond-markdown.html)
* [2025-09-07, 22:06:35](https://news.ycombinator.com/item?id=45162626) - [Intel Arc Pro B50 GPU Launched at $349 for Compact Workstations](https://www.guru3d.com/story/intel-arc-pro-b50-gpu-launched-at-for-compact-workstations/)
* [2025-09-07, 22:03:13](https://news.ycombinator.com/item?id=45162593) - [Taking Buildkite from a side project to a global company](https://www.valleyofdoubt.com/p/taking-buildkite-from-a-side-project)
* [2025-09-07, 21:50:30](https://news.ycombinator.com/item?id=45162501) - [Creative Technology: The Sound Blaster](https://www.abortretry.fail/p/the-story-of-creative-technology)
* [2025-09-07, 21:32:45](https://lobste.rs/s/6mhq6t/ever_shared_spotify_link_on_internet) - [Ever shared a Spotify link on the internet? Someone you don&apos;t know can now message you](https://www.androidauthority.com/psa-spotify-messages-tracker-urls-3593498/)
* [2025-09-07, 21:29:39](https://lobste.rs/s/a3hcsy/pico_css_minimal_css_framework_for) - [Pico CSS • Minimal CSS Framework for semantic HTML](https://picocss.com)
* [2025-09-07, 21:26:00](https://soylentnews.org/article.pl?sid=25/09/07/005257&amp;from=rss) - [This Unlikely Chemical Could be a Powerful Weapon Against Climate Change](https://soylentnews.org/article.pl?sid=25/09/07/005257&amp;from=rss)
* [2025-09-07, 21:14:08](https://news.ycombinator.com/item?id=45162220) - [Taco Bell AI Drive-Thru](https://aidarwinawards.org/nominees/taco-bell-ai-drive-thru.html)
* [2025-09-07, 20:26:30](https://news.ycombinator.com/item?id=45161816) - [Everything from 1991 Radio Shack ad I now do with my phone (2014)](https://www.trendingbuffalo.com/life/uncle-steves-buffalo/everything-from-1991-radio-shack-ad-now/)
* [2025-09-07, 20:11:28](https://lobste.rs/s/twnxj9/hilbert_space_treating_functions_as) - [Hilbert space: treating functions as vectors](https://eli.thegreenplace.net/2025/hilbert-space-treating-functions-as-vectors/)
* [2025-09-07, 19:53:03](https://news.ycombinator.com/item?id=45161556) - [No Silver Bullet: Essence and Accidents of Software Engineering (1986) [pdf]](https://www.cs.unc.edu/techreports/86-020.pdf)
* [2025-09-07, 19:09:45](https://news.ycombinator.com/item?id=45161229) - [How to make metals from Martian dirt](https://www.csiro.au/en/news/All/Articles/2025/August/Metals-out-of-martian-dirt)
* [2025-09-07, 18:16:30](https://news.ycombinator.com/item?id=45160774) - [Keeping secrets out of logs (2024)](https://allan.reyes.sh/posts/keeping-secrets-out-of-logs/)
* [2025-09-07, 16:47:00](https://soylentnews.org/article.pl?sid=25/09/07/001206&amp;from=rss) - [What the Hell is Going on Right Now?](https://soylentnews.org/article.pl?sid=25/09/07/001206&amp;from=rss)
* [2025-09-07, 15:20:29](https://news.ycombinator.com/item?id=45158968) - [The MacBook has a sensor that knows the exact angle of the screen hinge](https://twitter.com/samhenrigold/status/1964428927159382261)
* [2025-09-07, 15:03:46](https://news.ycombinator.com/item?id=45158814) - [SQLite&apos;s Use of Tcl (2017)](https://www.tcl-lang.org/community/tcl2017/assets/talk93/Paper.html)
* [2025-09-07, 13:56:39](https://lobste.rs/s/y5iegk/algebraic_effects_practice_with_flix) - [Algebraic Effects in Practice with Flix](https://www.relax.software/blog/flix-effects-intro/)
* [2025-09-07, 13:50:46](https://lobste.rs/s/htogek/everything_is_u8) - [Everything is a []u8](https://www.openmymind.net/Everything-Is-A-u8-array/)
* [2025-09-07, 13:24:14](https://lobste.rs/s/6j4xmw/expression_problem_its_solutions_2016) - [The Expression Problem and its solutions (2016)](https://eli.thegreenplace.net/2016/the-expression-problem-and-its-solutions)
* [2025-09-07, 12:41:32](https://lobste.rs/s/odeql3/do_you_have_personal_wiki) - [Do you have a personal wiki?](https://lobste.rs/s/odeql3/do_you_have_personal_wiki)
* [2025-09-07, 12:12:01](https://lobste.rs/s/chvsdq/semantic_line_breaks) - [Semantic Line Breaks](https://sembr.org)
* [2025-09-07, 11:56:00](https://soylentnews.org/article.pl?sid=25/09/06/1527240&amp;from=rss) - [France Fines Google, SHEIN for Undercooked Cookie Policies](https://soylentnews.org/article.pl?sid=25/09/06/1527240&amp;from=rss)
* [2025-09-07, 09:52:56](https://news.ycombinator.com/item?id=45156826) - [What is the origin of the private network address 192.168.*.*? (2009)](https://lists.ding.net/othersite/isoc-internet-history/2009/oct/msg00000.html)
* [2025-09-07, 07:11:00](https://soylentnews.org/article.pl?sid=25/09/06/1514247&amp;from=rss) - [Nvidia&apos;s Next-Gen AI Chip Could Be Double  the Price of H20 If China Export is Approved](https://soylentnews.org/article.pl?sid=25/09/06/1514247&amp;from=rss)
* [2025-09-07, 06:54:29](https://news.ycombinator.com/item?id=45155986) - [I am giving up on Intel and have bought an AMD Ryzen 9950X3D](https://michael.stapelberg.ch/posts/2025-09-07-bye-intel-hi-amd-9950x3d/)
* [2025-09-07, 06:51:47](https://lobste.rs/s/mwhbyo/bye_intel_hi_amd_i_m_done_after_2_dead_intels) - [Bye Intel, hi AMD! I’m done after 2 dead Intels](https://michael.stapelberg.ch/posts/2025-09-07-bye-intel-hi-amd-9950x3d/)
* [2025-09-07, 02:27:00](https://soylentnews.org/article.pl?sid=25/09/06/1510251&amp;from=rss) - [Porsche&apos;s New Cayenne Will Charge Itself Like No Other EV](https://soylentnews.org/article.pl?sid=25/09/06/1510251&amp;from=rss)
* [2025-09-07, 01:14:47](https://lobste.rs/s/hu3jkb/secret_web) - [A Secret Web](https://blog.clew.se/posts/secret-web/)
* [2025-09-06, 21:42:00](https://soylentnews.org/article.pl?sid=25/09/05/0544216&amp;from=rss) - [Bill Gates’ 48-Year-Old Microsoft 6502 BASIC Goes Open Source](https://soylentnews.org/article.pl?sid=25/09/05/0544216&amp;from=rss)
* [2025-09-06, 20:33:06](https://lobste.rs/s/sp4unw/don_t_write_bugs) - [Don&apos;t write bugs](https://www.teamten.com/lawrence/programming/dont-write-bugs.html)
* [2025-09-06, 19:42:48](https://news.ycombinator.com/item?id=45152284) - [GPT-5 Thinking in ChatGPT (a.k.a. Research Goblin) is good at search](https://simonwillison.net/2025/Sep/6/research-goblin/)
* [2025-09-06, 18:19:51](https://lobste.rs/s/deaem7/stop_writing_cli_validation_parse_it) - [Stop writing CLI validation. Parse it right the first time](https://hackers.pub/@hongminhee/2025/stop-writing-cli-validation-parse-it-right-the-first-time)
* [2025-09-06, 16:59:00](https://soylentnews.org/article.pl?sid=25/09/05/0540222&amp;from=rss) - [Jury Orders Google to Pay $425 Million for Unlawfully Tracking Millions of Users](https://soylentnews.org/article.pl?sid=25/09/05/0540222&amp;from=rss)
* [2025-09-06, 14:35:48](https://lobste.rs/s/9jwjca/oldest_recorded_transaction) - [Oldest recorded transaction](https://avi.im/blag/2025/oldest-txn/)
* [2025-09-06, 12:13:00](https://soylentnews.org/article.pl?sid=25/09/05/0536245&amp;from=rss) - [China Likely to Land on Moon Before US Does Again](https://soylentnews.org/article.pl?sid=25/09/05/0536245&amp;from=rss)
* [2025-09-06, 07:29:00](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss) - [New Hollow-Core Fiber Outperforms Glass, Pushing Data Closer to Light Speed](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss)
* [2025-09-06, 02:45:00](https://soylentnews.org/article.pl?sid=25/09/05/0259211&amp;from=rss) - [The Fight Against Labeling Long-Term Streaming Rentals as “Purchases” You “Buy”](https://soylentnews.org/article.pl?sid=25/09/05/0259211&amp;from=rss)
* [2025-09-06, 01:25:00](https://hardware.slashdot.org/story/25/09/05/2319259/apples-vision-pro-gaining-traction-in-some-niches-of-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Vision Pro Gaining Traction in Some Niches of Business](https://hardware.slashdot.org/story/25/09/05/2319259/apples-vision-pro-gaining-traction-in-some-niches-of-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-06, 00:45:00](https://hardware.slashdot.org/story/25/09/05/2126200/americas-first-sodium-ion-battery-manufacturer-ceases-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s First Sodium-Ion Battery Manufacturer Ceases Operations](https://hardware.slashdot.org/story/25/09/05/2126200/americas-first-sodium-ion-battery-manufacturer-ceases-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-06, 00:02:00](https://tech.slashdot.org/story/25/09/05/1957250/canada-delaying-plan-to-force-automakers-to-hit-evs-sales-targets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada Delaying Plan To Force Automakers To Hit EVs Sales Targets](https://tech.slashdot.org/story/25/09/05/1957250/canada-delaying-plan-to-force-automakers-to-hit-evs-sales-targets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 23:20:00](https://news.slashdot.org/story/25/09/05/1859232/trump-to-impose-tariffs-on-semiconductor-imports-from-firms-not-moving-production-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump To Impose Tariffs On Semiconductor Imports From Firms Not Moving Production To US](https://news.slashdot.org/story/25/09/05/1859232/trump-to-impose-tariffs-on-semiconductor-imports-from-firms-not-moving-production-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 22:40:00](https://news.slashdot.org/story/25/09/05/199223/firefox-ending-32-bit-linux-support-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Ending 32-bit Linux Support Next Year](https://news.slashdot.org/story/25/09/05/199223/firefox-ending-32-bit-linux-support-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 22:00:00](https://it.slashdot.org/story/25/09/05/196218/boffins-build-automated-android-bug-hunting-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boffins Build Automated Android Bug Hunting System](https://it.slashdot.org/story/25/09/05/196218/boffins-build-automated-android-bug-hunting-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 21:57:00](https://soylentnews.org/article.pl?sid=25/09/04/155234&amp;from=rss) - [M365 Copilot Fails to Up Productivity in UK Government Trial](https://soylentnews.org/article.pl?sid=25/09/04/155234&amp;from=rss)
* [2025-09-05, 21:20:00](https://yro.slashdot.org/story/25/09/05/1941245/anthropic-agrees-to-pay-record-15-billion-to-settle-authors-ai-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Agrees To Pay Record $1.5 Billion To Settle Authors&apos; AI Lawsuit](https://yro.slashdot.org/story/25/09/05/1941245/anthropic-agrees-to-pay-record-15-billion-to-settle-authors-ai-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 20:42:04](https://news.ycombinator.com/item?id=45143347) - [Default musl allocator considered harmful to performance](https://nickb.dev/blog/default-musl-allocator-considered-harmful-to-performance/)
* [2025-09-05, 20:41:00](https://news.slashdot.org/story/25/09/05/160234/scientists-tap-secret-fresh-water-under-the-ocean-raising-hopes-for-a-thirsty-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Tap &apos;Secret&apos; Fresh Water Under the Ocean, Raising Hopes For a Thirsty World](https://news.slashdot.org/story/25/09/05/160234/scientists-tap-secret-fresh-water-under-the-ocean-raising-hopes-for-a-thirsty-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 20:19:00](https://news.ycombinator.com/item?id=45143154) - [Show HN: Stroboscopic Instrument Tuner](https://github.com/dsego/strobe-tuner)
* [2025-09-05, 20:01:00](https://it.slashdot.org/story/25/09/05/1628256/microsoft-365-personal-is-now-free-for-us-college-students-for-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft 365 Personal is Now Free For US College Students For a Year](https://it.slashdot.org/story/25/09/05/1628256/microsoft-365-personal-is-now-free-for-us-college-students-for-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 19:20:00](https://news.slashdot.org/story/25/09/05/1543244/rising-river-temperatures-threaten-pariss-water-based-building-cooling-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rising River Temperatures Threaten Paris&apos;s Water-Based Building Cooling Network](https://news.slashdot.org/story/25/09/05/1543244/rising-river-temperatures-threaten-pariss-water-based-building-cooling-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 18:41:00](https://news.slashdot.org/story/25/09/05/1418221/columbia-tries-using-ai-to-cool-off-student-tensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Columbia Tries Using AI To Cool Off Student Tensions](https://news.slashdot.org/story/25/09/05/1418221/columbia-tries-using-ai-to-cool-off-student-tensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 18:27:24](https://news.ycombinator.com/item?id=45141907) - [Why Is Japan Still Investing in Custom Floating Point Accelerators?](https://www.nextplatform.com/2025/09/04/why-is-japan-still-investing-in-custom-floating-point-accelerators/)
* [2025-09-05, 18:01:00](https://slashdot.org/story/25/09/05/0535228/anthropic-clamps-down-on-ai-services-for-chinese-owned-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Clamps Down on AI Services for Chinese-Owned Firms](https://slashdot.org/story/25/09/05/0535228/anthropic-clamps-down-on-ai-services-for-chinese-owned-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 17:20:00](https://news.slashdot.org/story/25/09/05/1436209/public-strongly-backs-aim-of-30-of-land-and-sea-set-aside-for-nature-poll-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Public Strongly Backs Aim of 30% of Land and Sea Set Aside For Nature, Poll Finds](https://news.slashdot.org/story/25/09/05/1436209/public-strongly-backs-aim-of-30-of-land-and-sea-set-aside-for-nature-poll-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 17:13:00](https://soylentnews.org/article.pl?sid=25/09/04/150221&amp;from=rss) - [Nvidia Blasts Proposed US Bill That Would Force It to Give American Buyers First Option](https://soylentnews.org/article.pl?sid=25/09/04/150221&amp;from=rss)
* [2025-09-05, 16:40:00](https://slashdot.org/story/25/09/05/1428223/geoffrey-hinton-ai-will-make-a-few-people-much-richer-and-most-people-poorer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Geoffrey Hinton: &apos;AI Will Make a Few People Much Richer and Most People Poorer&apos;](https://slashdot.org/story/25/09/05/1428223/geoffrey-hinton-ai-will-make-a-few-people-much-richer-and-most-people-poorer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 16:00:00](https://tech.slashdot.org/story/25/09/05/1527251/google-hit-with-345-billion-eu-antitrust-fine-over-adtech-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Hit With $3.45 Billion EU Antitrust Fine Over Adtech Practices](https://tech.slashdot.org/story/25/09/05/1527251/google-hit-with-345-billion-eu-antitrust-fine-over-adtech-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 14:48:15](https://news.ycombinator.com/item?id=45139228) - [How big are our embeddings now and why?](https://vickiboykis.com/2025/09/01/how-big-are-our-embeddings-now-and-why/)
* [2025-09-05, 12:33:11](https://news.ycombinator.com/item?id=45137772) - [Forty-Four Esolangs: The Art of Esoteric Code](https://spectrum.ieee.org/esoteric-programming-languages-daniel-temkin)
* [2025-09-05, 12:28:00](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss) - [Stressed Ice Generates Electricity, Researchers Find](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss)
* [2025-09-05, 08:50:24](https://news.ycombinator.com/item?id=45136411) - [Tokyo has an unmanned, honor-system electronics and appliance shop](https://soranews24.com/2021/08/21/tokyo-has-a-completely-unmanned-honor-system-electronics-and-appliance-shop%e3%80%90photos%e3%80%91/)
* [2025-09-05, 07:47:00](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss) - [Google Won&apos;t Have to Sell Chrome, Judge Rules](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss)
* [2025-09-05, 07:18:12](https://news.ycombinator.com/item?id=45135839) - [Truco and clones: the beginnings of Argentinian computer gaming](https://zeitgame.net/archives/18373)
* [2025-09-05, 03:03:00](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss) - [U.S. Gov&apos;t Revokes TSMC&apos;s Authorization to Ship Tools to its Fabs in China](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss)
* [2025-09-04, 22:22:05](https://news.ycombinator.com/item?id=45132899) - [Hungry Hungry Hippos Autoplay (2017)](https://www.mikekohn.net/micro/hungry_hungry_hippos.php)
* [2025-09-04, 22:16:00](https://soylentnews.org/article.pl?sid=25/09/04/048238&amp;from=rss) - [Scammers Will Try to Trick You Into Filling Out Google Forms. Don’t Fall for It](https://soylentnews.org/article.pl?sid=25/09/04/048238&amp;from=rss)
* [2025-09-04, 17:29:00](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss) - [Passkeys Are Incompatible With Open-Source Software](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss)
* [2025-09-04, 17:06:14](https://news.ycombinator.com/item?id=45129507) - [Analog optical computer for AI inference and combinatorial optimization](https://www.nature.com/articles/s41586-025-09430-z)
* [2025-09-04, 12:44:00](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss) - [Get Ready for Plastic Blood](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss)
* [2025-09-04, 07:57:00](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss) - [Nearly 40% of Nvidia&apos;s Revenue Tied to Two Mystery Customers, Filing Shows](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss)
* [2025-09-04, 07:25:21](https://news.ycombinator.com/item?id=45124560) - [How many dimensions is this?](https://lcamtuf.substack.com/p/how-many-dimensions-is-this)
* [2025-09-04, 03:14:00](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss) - [People Who Believe in Conspiracy Theories Process Information Differently at the Neural Level](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss)
