# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements and Challenges in Engineering and Development

* [A triangle whose interior angles sum to zero](https://www.johndcook.com/blog/2025/11/28/tricusp-triangle/) - A mathematical exploration of unconventional geometry and shapes.

* [How good engineers write bad code at big companies](https://www.seangoedecke.com/bad-code-at-big-companies/) - Insights into challenges faced even by skilled engineers while working in corporate environments.

* [The original ABC language, Python's predecessor (1991)](https://github.com/gvanrossum/abc-unix) - Revisit the historic roots of Python through its predecessor ABC language.

* [Airloom – 3D Flight Tracker](https://objectiveunclear.com/airloom.html) - A novel 3D flight tracker that visualizes aviation data in unique ways.

* [JSON Schema Demystified: Dialects, Vocabularies and Metaschemas](https://www.iankduncan.com/engineering/2025-11-24-json-schema-demystified/) - A technical breakdown of JSON Schema, addressing complexity in its implementations.

## Technology Transformations and Innovations

* [China-Netherlands Chip Fight Turns Into Corporate Civil War](https://slashdot.org/story/25/11/28/1636212/china-netherlands-chip-fight-turns-into-corporate-civil-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Geopolitical struggles manifest through technological and corporate battles.

* [Major AI Conference Flooded With Peer Reviews Written Fully By AI](https://news.slashdot.org/story/25/11/28/139247/major-ai-conference-flooded-with-peer-reviews-written-fully-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An AI-driven twist in academic peer reviews.

* [MetaFun: Compile Haskell-like code to C++ template metaprograms](https://gergo.erdi.hu/projects/metafun/) - A revolutionary step in converting high-level programming to C++ templates.

* [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) - The iconic text-based games become open for expansion and adaptation.

* [True P2P Email on Top of Yggdrasil Network](https://github.com/JB-SelfCompany/Tyr) - An innovative approach to creating a decentralized, peer-to-peer email system.

## Environmental and Global Challenges

* [Australia Risks 2035 Climate Goal Without Bigger Emissions Cuts](https://news.slashdot.org/story/25/11/28/1654207/australia-risks-2035-climate-goal-without-bigger-emissions-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Australia's emission policies examined in the context of global climate objectives.

* [Violent Conflict Over Water Hit a Record Last Year](https://news.slashdot.org/story/25/11/28/1356212/violent-conflict-over-water-hit-a-record-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examines the growing humanitarian crises over water resources.

* [Canada Rolls Back Climate Rules To Boost Investments](https://news.slashdot.org/story/25/11/28/0042205/canada-rolls-back-climate-rules-to-boost-investments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analysis of Canada's policy shift on climate rules for economic growth.

## Historical and Curious Explorations

* [In 1982, a Physics Joke Gone Wrong Sparked the Invention of the Emoticon](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss) - A lighthearted story of how the emoticon was accidentally birthed.

* [A Brief History of NSA Backdoors](https://www.ethanheilman.com/x/12/index.html) - A detailed investigation into the history of governmental influence on cybersecurity.

* [A $1 Million Dollar Apple Macintosh PowerBook 170](https://www.ebay.ca/itm/326104837538) - A rare listing and discussion around the high valuation of vintage tech.

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

* [2025-11-29, 00:32:24](https://lobste.rs/s/sn1nq2/rope_science_part_11_practical_syntax) - [Rope science, part 11 - practical syntax highlighting (2017)](https://xi-editor.io/docs/rope_science_11.html)
* [2025-11-29, 00:26:42](https://news.ycombinator.com/item?id=46084122) - [A triangle whose interior angles sum to zero](https://www.johndcook.com/blog/2025/11/28/tricusp-triangle/)
* [2025-11-28, 23:35:00](https://slashdot.org/story/25/11/28/1636212/china-netherlands-chip-fight-turns-into-corporate-civil-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China-Netherlands Chip Fight Turns Into Corporate Civil War](https://slashdot.org/story/25/11/28/1636212/china-netherlands-chip-fight-turns-into-corporate-civil-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 23:24:16](https://news.ycombinator.com/item?id=46083730) - [The Fatal Trap UBI Boosters Keep Falling Into](https://thereader.mitpress.mit.edu/the-fatal-trap-ubi-boosters-keep-falling-into/)
* [2025-11-28, 22:32:03](https://news.ycombinator.com/item?id=46083375) - [Fabric Project](https://github.com/Fabric-Project/Fabric)
* [2025-11-28, 22:21:25](https://news.ycombinator.com/item?id=46083303) - [Confessions of a Software Developer: No More Self-Censorship](https://kerrick.blog/articles/2025/confessions-of-a-software-developer-no-more-self-censorship/)
* [2025-11-28, 22:02:57](https://lobste.rs/s/jxppk7/how_good_engineers_write_bad_code_at_big) - [How good engineers write bad code at big companies](https://www.seangoedecke.com/bad-code-at-big-companies/)
* [2025-11-28, 21:56:58](https://news.ycombinator.com/item?id=46083137) - [How to Short the Bubbliest Firms](https://www.economist.com/finance-and-economics/2025/11/26/how-to-short-the-bubbliest-firms)
* [2025-11-28, 21:55:28](https://lobste.rs/s/9hjl1b/universal_tbxi_patchset_tbxi_classic_mac) - [universal-tbxi-patchset: TBXI (classic Mac OS New World ROM) patchset to boot System 7.5+](https://github.com/Wack0/universal-tbxi-patchset)
* [2025-11-28, 21:46:07](https://news.ycombinator.com/item?id=46083051) - [A first look at Django&apos;s new background tasks](https://roam.be/notes/2025/a-first-look-at-djangos-new-background-tasks/)
* [2025-11-28, 21:40:21](https://news.ycombinator.com/item?id=46083004) - [Airbus A320 – intense solar radiation may corrupt data critical for flight](https://www.airbus.com/en/newsroom/press-releases/2025-11-airbus-update-on-a320-family-precautionary-fleet-action)
* [2025-11-28, 21:39:39](https://lobste.rs/s/li0ido/it_is_ok_say_css_variables_instead) - [It is OK to Say “CSS Variables” Instead of (or Alongside) “Custom Properties”](https://blog.kizu.dev/css-variables/)
* [2025-11-28, 21:31:00](https://news.slashdot.org/story/25/11/28/1654207/australia-risks-2035-climate-goal-without-bigger-emissions-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia Risks 2035 Climate Goal Without Bigger Emissions Cuts](https://news.slashdot.org/story/25/11/28/1654207/australia-risks-2035-climate-goal-without-bigger-emissions-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 21:20:38](https://lobste.rs/s/0nveim/brief_history_nsa_backdoors) - [A Brief History of NSA Backdoors](https://www.ethanheilman.com/x/12/index.html)
* [2025-11-28, 21:16:46](https://news.ycombinator.com/item?id=46082825) - [Flight disruption warning as Airbus requests modifications to 6k planes](https://www.bbc.com/news/live/cvg4y6g74ert)
* [2025-11-28, 20:59:33](https://lobste.rs/s/zxwjap/metafun_compile_haskell_like_code_c) - [MetaFun: Compile Haskell-like code to C++ template metaprograms](https://gergo.erdi.hu/projects/metafun/)
* [2025-11-28, 20:02:00](https://news.slashdot.org/story/25/11/28/1646244/singapore-takes-top-spot-in-global-talent-index?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Singapore Takes Top Spot in Global Talent Index](https://news.slashdot.org/story/25/11/28/1646244/singapore-takes-top-spot-in-global-talent-index?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 19:59:32](https://news.ycombinator.com/item?id=46082223) - [How good engineers write bad code at big companies](https://www.seangoedecke.com/bad-code-at-big-companies/)
* [2025-11-28, 19:58:13](https://news.ycombinator.com/item?id=46082204) - [The original ABC language, Python&apos;s predecessor (1991)](https://github.com/gvanrossum/abc-unix)
* [2025-11-28, 19:29:05](https://lobste.rs/s/z4d88o/putting_rigid_bodies_rest) - [Putting Rigid Bodies to Rest](https://hbaktash.github.io/projects/putting-rigid-bodies-to-rest/)
* [2025-11-28, 19:24:05](https://lobste.rs/s/wizzoj/oss_friday_update_fiber_scheduler_is) - [OSS Friday Update - The Fiber Scheduler is Taking Shape](https://noteflakes.com/articles/2025-11-28-friday-update)
* [2025-11-28, 19:05:16](https://news.ycombinator.com/item?id=46081704) - [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
* [2025-11-28, 19:00:00](https://slashdot.org/story/25/11/28/1712223/europe-fears-it-cant-catch-up-in-great-power-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe Fears It Can&apos;t Catch Up in Great Power Competition](https://slashdot.org/story/25/11/28/1712223/europe-fears-it-cant-catch-up-in-great-power-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 18:39:34](https://news.ycombinator.com/item?id=46081443) - [Show HN: Pulse 2.0 – Live co-listening rooms where anyone can be a DJ](https://473999.net/pulse)
* [2025-11-28, 18:21:55](https://lobste.rs/s/404y8w/tiny_tpu) - [Tiny TPU](https://www.tinytpu.com/)
* [2025-11-28, 18:15:50](https://news.ycombinator.com/item?id=46081188) - [Imgur geo-blocked the UK, so I geo-unblocked my network](https://blog.tymscar.com/posts/imgurukproxy/)
* [2025-11-28, 18:02:04](https://news.ycombinator.com/item?id=46081053) - [28M Hacker News comments as vector embedding search dataset](https://clickhouse.com/docs/getting-started/example-datasets/hackernews-vector-search-dataset)
* [2025-11-28, 18:01:00](https://apple.slashdot.org/story/25/11/28/1531245/someone-is-trying-to-hack-people-through-apple-podcasts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Someone Is Trying To &apos;Hack&apos; People Through Apple Podcasts](https://apple.slashdot.org/story/25/11/28/1531245/someone-is-trying-to-hack-people-through-apple-podcasts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 17:48:25](https://news.ycombinator.com/item?id=46080916) - [Molly: An Improved Signal App](https://molly.im/)
* [2025-11-28, 17:34:26](https://news.ycombinator.com/item?id=46080769) - [JSON Schema Demystified: Dialects, Vocabularies and Metaschemas](https://www.iankduncan.com/engineering/2025-11-24-json-schema-demystified/)
* [2025-11-28, 17:30:41](https://news.ycombinator.com/item?id=46080737) - [Show HN: An LLM-Powered Tool to Catch PCB Schematic Mistakes](https://netlist.io/)
* [2025-11-28, 17:15:20](https://news.ycombinator.com/item?id=46080579) - [C++ Web Server on my custom hobby OS](https://oshub.org/projects/retros-32/posts/getting-a-webserver-running)
* [2025-11-28, 17:05:31](https://news.ycombinator.com/item?id=46080473) - [Bringing Sexy Back. Internet surveillance has killed eroticism](https://lux-magazine.com/article/privacy-eroticism/)
* [2025-11-28, 17:01:00](https://entertainment.slashdot.org/story/25/11/28/1522252/australias-streaming-quotas-become-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia&apos;s Streaming Quotas Become Law](https://entertainment.slashdot.org/story/25/11/28/1522252/australias-streaming-quotas-become-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 16:54:56](https://news.ycombinator.com/item?id=46080364) - [So you wanna build a local RAG?](https://blog.yakkomajuri.com/blog/local-rag)
* [2025-11-28, 16:49:12](https://news.ycombinator.com/item?id=46080289) - [Airloom – 3D Flight Tracker](https://objectiveunclear.com/airloom.html)
* [2025-11-28, 16:42:46](https://news.ycombinator.com/item?id=46080218) - [Lobsters Interview](https://susam.net/my-lobsters-interview.html)
* [2025-11-28, 16:35:24](https://news.ycombinator.com/item?id=46080143) - [True P2P Email on Top of Yggdrasil Network](https://github.com/JB-SelfCompany/Tyr)
* [2025-11-28, 16:01:01](https://news.ycombinator.com/item?id=46079785) - [Don&apos;t tug on that, you never know what it might be attached to (2016)](https://blog.plover.com/2016/07/01/#tmpdir)
* [2025-11-28, 16:01:00](https://hardware.slashdot.org/story/25/11/28/1435209/robots-and-ai-are-already-remaking-the-chinese-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robots and AI Are Already Remaking the Chinese Economy](https://hardware.slashdot.org/story/25/11/28/1435209/robots-and-ai-are-already-remaking-the-chinese-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 15:59:49](https://lobste.rs/s/0i4chy/don_t_tug_on_you_never_know_what_it_might_be) - [Don&apos;t tug on that, you never know what it might be attached to](https://blog.plover.com/2016/07/01/#tmpdir)
* [2025-11-28, 15:53:39](https://news.ycombinator.com/item?id=46079721) - [Can Dutch universities do without Microsoft?](https://dub.uu.nl/en/news/can-dutch-universities-do-without-microsoft)
* [2025-11-28, 15:39:28](https://lobste.rs/s/pxk1qt/generating_3d_meshes_from_text) - [Generating 3D Meshes From Text](https://cprimozic.net/notes/posts/generating-3d-meshes-from-text/)
* [2025-11-28, 15:30:03](https://lobste.rs/s/xbsdvw/bfs_breadth_first_version_unix_find) - [bfs: A breadth-first version of the UNIX find command](https://github.com/tavianator/bfs)
* [2025-11-28, 15:00:00](https://news.slashdot.org/story/25/11/28/1356212/violent-conflict-over-water-hit-a-record-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Violent Conflict Over Water Hit a Record Last Year](https://news.slashdot.org/story/25/11/28/1356212/violent-conflict-over-water-hit-a-record-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 14:14:25](https://lobste.rs/s/bhoqqp/1_million_dollar_apple_macintosh) - [A $1 Million Dollar Apple Macintosh PowerBook 170](https://www.ebay.ca/itm/326104837538)
* [2025-11-28, 14:00:00](https://news.slashdot.org/story/25/11/28/139247/major-ai-conference-flooded-with-peer-reviews-written-fully-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Major AI Conference Flooded With Peer Reviews Written Fully By AI](https://news.slashdot.org/story/25/11/28/139247/major-ai-conference-flooded-with-peer-reviews-written-fully-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 13:57:54](https://lobste.rs/s/l77zlu/update_on_farphone_s_battery) - [An update on the farphone&apos;s battery](https://far.computer/battery-update/)
* [2025-11-28, 12:30:00](https://slashdot.org/story/25/11/28/0135214/why-cant-chatgpt-tell-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Can&apos;t ChatGPT Tell Time?](https://slashdot.org/story/25/11/28/0135214/why-cant-chatgpt-tell-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 12:15:29](https://lobste.rs/s/t8afff/is_anyone_using_project_hummingbird) - [Is anyone using Project Hummingbird?](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux/hummingbird)
* [2025-11-28, 11:16:06](https://lobste.rs/s/ogf9hk/help_my_java_object_vanished_gc_is_not_at) - [Help, My Java Object Vanished (and the GC is Not at Fault)](https://arraying.de/posts/markword/)
* [2025-11-28, 10:58:18](https://lobste.rs/s/gnpury/fort_knox_for_your_secrets_manage_secrets) - [Fort Knox for your secrets -  Manage secrets with encryption or cloud providers](https://fnox.jdx.dev/guide/what-is-fnox.html)
* [2025-11-28, 10:46:09](https://lobste.rs/s/60v35g/crdt_dictionary_field_guide_conflict) - [The CRDT Dictionary: A Field Guide to Conflict-Free Replicated Data Types](https://www.iankduncan.com/engineering/2025-11-27-crdt-dictionary)
* [2025-11-28, 10:01:00](https://it.slashdot.org/story/25/11/28/0118256/aws-introduces-dns-failover-feature-for-its-notoriously-unreliable-us-east-region?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AWS Introduces DNS Failover Feature for Its Notoriously Unreliable US East Region](https://it.slashdot.org/story/25/11/28/0118256/aws-introduces-dns-failover-feature-for-its-notoriously-unreliable-us-east-region?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 09:55:11](https://lobste.rs/s/9rpx3i/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/9rpx3i/what_are_you_doing_this_weekend)
* [2025-11-28, 08:45:32](https://lobste.rs/s/ybp9wx/is_matrix_multiplication_ugly) - [Is Matrix Multiplication Ugly?](https://mathenchant.wordpress.com/2025/11/21/is-matrix-multiplication-ugly/)
* [2025-11-28, 07:47:50](https://lobste.rs/s/9c4iun/foundation_for_building_tools_on_at) - [A foundation for building tools on the AT Protocol using Unison](https://notes.kaushikc.org/3m6kc5nudgc2x)
* [2025-11-28, 07:31:00](https://it.slashdot.org/story/25/11/28/019235/seven-years-later-airbus-is-still-trying-to-kick-its-microsoft-habit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Seven Years Later, Airbus is Still Trying To Kick Its Microsoft Habit](https://it.slashdot.org/story/25/11/28/019235/seven-years-later-airbus-is-still-trying-to-kick-its-microsoft-habit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 06:44:17](https://lobste.rs/s/ihf3a1/million_ways_die_from_data_race_go) - [A million ways to die from a data race in Go](https://gaultier.github.io/blog/a_million_ways_to_data_race_in_go.html)
* [2025-11-28, 05:01:00](https://news.slashdot.org/story/25/11/28/0042205/canada-rolls-back-climate-rules-to-boost-investments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada Rolls Back Climate Rules To Boost Investments](https://news.slashdot.org/story/25/11/28/0042205/canada-rolls-back-climate-rules-to-boost-investments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 05:00:00](https://lobste.rs/s/v6ct3o/ml_kem_mythbusting) - [ML-KEM Mythbusting](https://keymaterial.net/2025/11/27/ml-kem-mythbusting/)
* [2025-11-28, 02:30:00](https://yro.slashdot.org/story/25/11/28/0037205/us-patent-office-issues-new-guidelines-for-ai-assisted-inventions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Patent Office Issues New Guidelines For AI-Assisted Inventions](https://yro.slashdot.org/story/25/11/28/0037205/us-patent-office-issues-new-guidelines-for-ai-assisted-inventions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 01:10:00](https://games.slashdot.org/story/25/11/28/0033246/epics-sweeney-says-platforms-should-stop-tagging-games-made-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Epic&apos;s Sweeney Says Platforms Should Stop Tagging Games Made With AI](https://games.slashdot.org/story/25/11/28/0033246/epics-sweeney-says-platforms-should-stop-tagging-games-made-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 17:41:20](https://lobste.rs/s/zzy9fy/electron_vs_tauri) - [Electron vs. Tauri](https://www.dolthub.com/blog/2025-11-13-electron-vs-tauri/)
* [2025-11-27, 14:53:22](https://lobste.rs/s/iro8m3/lowtype_elegant_types_ruby) - [Lowtype: Elegant types in Ruby](https://codeberg.org/Iow/type)
* [2025-11-27, 03:26:00](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss) - [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss)
* [2025-11-26, 22:43:00](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss) - [The Escape Room Challenge: How One Person&apos;s Narcissism Can Undermine a Whole Team](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss)
* [2025-11-26, 17:55:00](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss) - [Mozilla Resolves 21-Year-Old Bug, Adds Full XDG Directory Support](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss)
* [2025-11-26, 13:11:00](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss) - [The Reshoring Initiative - Real Reasons to Bring Jobs Back to USA From Asia](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss)
* [2025-11-26, 08:24:00](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) - [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss)
* [2025-11-26, 03:41:00](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss) - [HP and Dell Disable HEVC Support Built Into Their Laptops’ CPUs](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss)
* [2025-11-26, 01:19:17](https://news.ycombinator.com/item?id=46053017) - [Space: 1999 – Special Effects Techniques](https://catacombs.space1999.net/main/pguide/upsfx.html)
* [2025-11-25, 22:57:00](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss) - [Is Matrix Multiplication Ugly?](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss)
* [2025-11-25, 18:12:00](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss) - [In 1982, a Physics Joke Gone Wrong Sparked the Invention of the Emoticon](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss)
* [2025-11-25, 13:28:00](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss) - [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss)
* [2025-11-25, 08:41:00](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss) - [I Set a Trap to Catch My Students Cheating With AI and the Results Were Shocking](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss)
* [2025-11-25, 04:00:00](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss) - [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss)
