# [News Summary](https://kherrick.github.io/news-summary/)

## Aerospace and Aviation Updates

* [Airbus issues major A320 recall due to software issue](https://www.reuters.com/business/aerospace-defense/airbus-issues-major-a320-recall-after-flight-control-incident-2025-11-28/) ([comments](https://lobste.rs/s/ehcqlu/airbus_issues_major_a320_recall_due))

* [Officials Clashed in Investigation of Deadly Air India Crash](https://news.slashdot.org/story/25/11/28/151231/officials-clashed-in-investigation-of-deadly-air-india-crash?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/11/28/151231/officials-clashed-in-investigation-of-deadly-air-india-crash?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Scientific Breakthroughs and Research

* [The Mysterious Black Fungus From Chernobyl That May Eat Radiation](https://news.slashdot.org/story/25/11/28/1516243/the-mysterious-black-fungus-from-chernobyl-that-may-eat-radiation?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/11/28/1516243/the-mysterious-black-fungus-from-chernobyl-that-may-eat-radiation?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [DMT-induced shifts in criticality correlate with self-dissolution](https://www.jneurosci.org/content/early/2025/10/24/JNEUROSCI.0344-25.2025) ([comments](https://news.ycombinator.com/item?id=46086863))

## Technological Developments

* [Self-hosting my photos with Immich](https://michael.stapelberg.ch/posts/2025-11-29-self-hosting-photos-with-immich/) ([comments](https://lobste.rs/s/cljhyb/self_hosting_my_photos_with_immich))

* [Leak confirms OpenAI is preparing ads on ChatGPT for public roll out](https://www.bleepingcomputer.com/news/artificial-intelligence/leak-confirms-openai-is-preparing-ads-on-chatgpt-for-public-roll-out/) ([comments](https://news.ycombinator.com/item?id=46086771))

## Coding and Programming Insights

* [Garfield's Proof of the Pythagorean Theorem](https://en.wikipedia.org/wiki/Garfield%27s_proof_of_the_Pythagorean_theorem) ([comments](https://news.ycombinator.com/item?id=46085585))

* [popping-and-locking-zed-theme](https://github.com/randoneering/popping-and-locking-zed-theme) ([comments](https://lobste.rs/s/hv9zpj/popping_locking_zed_theme))

* [git-embigenner: Spam empty commits](https://github.com/veqqq/git-embigenner) ([comments](https://lobste.rs/s/uqv5en/git_embigenner_spam_empty_commits))

## Society and Environmental Concerns

* [Belgian Police exposed using botnets to manipulate EU data law impact assessment](https://old.reddit.com/r/europe/comments/1p9kxhm/belgian_federal_police_forgot_to_turn_their_vpn/) ([comments](https://news.ycombinator.com/item?id=46086681))

* [High Air Pollution Could Diminish Exercise Benefits by 50%, Study Finds](https://scienceclock.com/exercise-may-protect-less-when-air-pollution-is-high-study-finds/) ([comments](https://news.ycombinator.com/item?id=46086624))

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

* [2025-11-29, 12:53:02](https://lobste.rs/s/ehcqlu/airbus_issues_major_a320_recall_due) - [Airbus issues major A320 recall due to software issue](https://www.reuters.com/business/aerospace-defense/airbus-issues-major-a320-recall-after-flight-control-incident-2025-11-28/)
* [2025-11-29, 11:52:21](https://news.ycombinator.com/item?id=46086863) - [DMT-induced shifts in criticality correlate with self-dissolution](https://www.jneurosci.org/content/early/2025/10/24/JNEUROSCI.0344-25.2025)
* [2025-11-29, 11:31:58](https://news.ycombinator.com/item?id=46086771) - [Leak confirms OpenAI is preparing ads on ChatGPT for public roll out](https://www.bleepingcomputer.com/news/artificial-intelligence/leak-confirms-openai-is-preparing-ads-on-chatgpt-for-public-roll-out/)
* [2025-11-29, 11:10:39](https://news.ycombinator.com/item?id=46086681) - [Belgian Police exposed using botnets to manipulate EU data law impact assessment](https://old.reddit.com/r/europe/comments/1p9kxhm/belgian_federal_police_forgot_to_turn_their_vpn/)
* [2025-11-29, 11:00:00](https://news.slashdot.org/story/25/11/28/151231/officials-clashed-in-investigation-of-deadly-air-india-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Officials Clashed in Investigation of Deadly Air India Crash](https://news.slashdot.org/story/25/11/28/151231/officials-clashed-in-investigation-of-deadly-air-india-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 10:54:16](https://news.ycombinator.com/item?id=46086624) - [High Air Pollution Could Diminish Exercise Benefits by 50%, Study Finds](https://scienceclock.com/exercise-may-protect-less-when-air-pollution-is-high-study-finds/)
* [2025-11-29, 10:08:24](https://news.ycombinator.com/item?id=46086410) - [I Know We&apos;re in an AI Bubble Because Nobody Wants Me](https://petewarden.com/2025/11/29/i-know-were-in-an-ai-bubble-because-nobody-wants-me-%f0%9f%98%ad/)
* [2025-11-29, 08:01:00](https://news.slashdot.org/story/25/11/28/1516243/the-mysterious-black-fungus-from-chernobyl-that-may-eat-radiation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Mysterious Black Fungus From Chernobyl That May Eat Radiation](https://news.slashdot.org/story/25/11/28/1516243/the-mysterious-black-fungus-from-chernobyl-that-may-eat-radiation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 07:26:00](https://lobste.rs/s/cljhyb/self_hosting_my_photos_with_immich) - [Self-hosting my photos with Immich](https://michael.stapelberg.ch/posts/2025-11-29-self-hosting-photos-with-immich/)
* [2025-11-29, 07:20:52](https://lobste.rs/s/7v8oy2/acmeleaf_simple_declarative_dns_01_acme) - [acmeleaf: Simple declarative DNS-01 ACME client](https://codeberg.org/lindenii/acmeleaf)
* [2025-11-29, 06:37:05](https://news.ycombinator.com/item?id=46085585) - [Garfield&apos;s Proof of the Pythagorean Theorem](https://en.wikipedia.org/wiki/Garfield%27s_proof_of_the_Pythagorean_theorem)
* [2025-11-29, 06:10:27](https://lobste.rs/s/dd97sm/no_more_self_censorship) - [No More Self-Censorship](https://kerrick.blog/articles/2025/confessions-of-a-software-developer-no-more-self-censorship/)
* [2025-11-29, 05:15:00](https://news.slashdot.org/story/25/11/29/0515215/airbus-issues-major-a320-recall-threatening-global-flight-disruption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbus Issues Major A320 Recall, Threatening Global Flight Disruption](https://news.slashdot.org/story/25/11/29/0515215/airbus-issues-major-a320-recall-threatening-global-flight-disruption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 05:01:00](https://apple.slashdot.org/story/25/11/28/172222/eu-to-examine-if-apple-ads-and-maps-subject-to-tough-rules-apple-says-no?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU To Examine If Apple Ads and Maps Subject To Tough Rules, Apple Says No](https://apple.slashdot.org/story/25/11/28/172222/eu-to-examine-if-apple-ads-and-maps-subject-to-tough-rules-apple-says-no?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 04:46:18](https://lobste.rs/s/ltpdkh/adventures_with_chimera_linux) - [Adventures with Chimera Linux](https://blog.xiaket.org/2025/chimera.html)
* [2025-11-29, 04:42:51](https://lobste.rs/s/hv9zpj/popping_locking_zed_theme) - [popping-and-locking-zed-theme](https://github.com/randoneering/popping-and-locking-zed-theme)
* [2025-11-29, 03:26:01](https://news.ycombinator.com/item?id=46084956) - [System 7 natively boots on the Mac mini G4](https://macos9lives.com/smforum/index.php?topic=7711.0)
* [2025-11-29, 03:02:14](https://lobste.rs/s/uqv5en/git_embigenner_spam_empty_commits) - [git-embigenner: Spam empty commits](https://github.com/veqqq/git-embigenner)
* [2025-11-29, 02:47:15](https://lobste.rs/s/bkr0ih/fabric_node_creative_coding_3d_image) - [Fabric: Node Creative Coding / 3D / Image Processing tool inspired by Quartz Composer](https://github.com/Fabric-Project/Fabric)
* [2025-11-29, 02:02:00](https://science.slashdot.org/story/25/11/28/1721249/scientists-think-theyve-solved-why-one-of-historys-most-advanced-civilizations-vanished?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Think They&apos;ve Solved Why One of History&apos;s Most Advanced Civilizations Vanished](https://science.slashdot.org/story/25/11/28/1721249/scientists-think-theyve-solved-why-one-of-historys-most-advanced-civilizations-vanished?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 01:37:42](https://news.ycombinator.com/item?id=46084535) - [Every mathematician has only a few tricks (2020)](https://mathoverflow.net/questions/363119/every-mathematician-has-only-a-few-tricks)
* [2025-11-29, 00:32:24](https://lobste.rs/s/sn1nq2/rope_science_part_11_practical_syntax) - [Rope science, part 11 - practical syntax highlighting (2017)](https://xi-editor.io/docs/rope_science_11.html)
* [2025-11-29, 00:26:42](https://news.ycombinator.com/item?id=46084122) - [A triangle whose interior angles sum to zero](https://www.johndcook.com/blog/2025/11/28/tricusp-triangle/)
* [2025-11-28, 23:35:00](https://slashdot.org/story/25/11/28/1636212/china-netherlands-chip-fight-turns-into-corporate-civil-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China-Netherlands Chip Fight Turns Into Corporate Civil War](https://slashdot.org/story/25/11/28/1636212/china-netherlands-chip-fight-turns-into-corporate-civil-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 22:21:25](https://news.ycombinator.com/item?id=46083303) - [Confessions of a Software Developer: No More Self-Censorship](https://kerrick.blog/articles/2025/confessions-of-a-software-developer-no-more-self-censorship/)
* [2025-11-28, 22:02:57](https://lobste.rs/s/jxppk7/how_good_engineers_write_bad_code_at_big) - [How good engineers write bad code at big companies](https://www.seangoedecke.com/bad-code-at-big-companies/)
* [2025-11-28, 21:46:07](https://news.ycombinator.com/item?id=46083051) - [A first look at Django&apos;s new background tasks](https://roam.be/notes/2025/a-first-look-at-djangos-new-background-tasks/)
* [2025-11-28, 21:40:21](https://news.ycombinator.com/item?id=46083004) - [Airbus A320 – intense solar radiation may corrupt data critical for flight](https://www.airbus.com/en/newsroom/press-releases/2025-11-airbus-update-on-a320-family-precautionary-fleet-action)
* [2025-11-28, 21:39:39](https://lobste.rs/s/li0ido/it_is_ok_say_css_variables_instead) - [It is OK to Say “CSS Variables” Instead of (or Alongside) “Custom Properties”](https://blog.kizu.dev/css-variables/)
* [2025-11-28, 21:31:00](https://news.slashdot.org/story/25/11/28/1654207/australia-risks-2035-climate-goal-without-bigger-emissions-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia Risks 2035 Climate Goal Without Bigger Emissions Cuts](https://news.slashdot.org/story/25/11/28/1654207/australia-risks-2035-climate-goal-without-bigger-emissions-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 21:20:38](https://lobste.rs/s/0nveim/brief_history_nsa_backdoors_2013) - [A Brief History of NSA Backdoors (2013)](https://www.ethanheilman.com/x/12/index.html)
* [2025-11-28, 20:59:33](https://lobste.rs/s/zxwjap/metafun_compile_haskell_like_code_c) - [MetaFun: Compile Haskell-like code to C++ template metaprograms](https://gergo.erdi.hu/projects/metafun/)
* [2025-11-28, 20:06:30](https://news.ycombinator.com/item?id=46082291) - [Electron vs. Tauri](https://www.dolthub.com/blog/2025-11-13-electron-vs-tauri/)
* [2025-11-28, 20:02:00](https://news.slashdot.org/story/25/11/28/1646244/singapore-takes-top-spot-in-global-talent-index?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Singapore Takes Top Spot in Global Talent Index](https://news.slashdot.org/story/25/11/28/1646244/singapore-takes-top-spot-in-global-talent-index?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 19:58:13](https://news.ycombinator.com/item?id=46082204) - [The original ABC language, Python&apos;s predecessor (1991)](https://github.com/gvanrossum/abc-unix)
* [2025-11-28, 19:29:05](https://lobste.rs/s/z4d88o/putting_rigid_bodies_rest) - [Putting Rigid Bodies to Rest](https://hbaktash.github.io/projects/putting-rigid-bodies-to-rest/)
* [2025-11-28, 19:24:05](https://lobste.rs/s/wizzoj/oss_friday_update_fiber_scheduler_is) - [OSS Friday Update - The Fiber Scheduler is Taking Shape](https://noteflakes.com/articles/2025-11-28-friday-update)
* [2025-11-28, 19:00:00](https://slashdot.org/story/25/11/28/1712223/europe-fears-it-cant-catch-up-in-great-power-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe Fears It Can&apos;t Catch Up in Great Power Competition](https://slashdot.org/story/25/11/28/1712223/europe-fears-it-cant-catch-up-in-great-power-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 18:21:55](https://lobste.rs/s/404y8w/tiny_tpu) - [Tiny TPU](https://www.tinytpu.com/)
* [2025-11-28, 18:15:50](https://news.ycombinator.com/item?id=46081188) - [Imgur geo-blocked the UK, so I geo-unblocked my network](https://blog.tymscar.com/posts/imgurukproxy/)
* [2025-11-28, 18:02:04](https://news.ycombinator.com/item?id=46081053) - [28M Hacker News comments as vector embedding search dataset](https://clickhouse.com/docs/getting-started/example-datasets/hackernews-vector-search-dataset)
* [2025-11-28, 18:01:00](https://apple.slashdot.org/story/25/11/28/1531245/someone-is-trying-to-hack-people-through-apple-podcasts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Someone Is Trying To &apos;Hack&apos; People Through Apple Podcasts](https://apple.slashdot.org/story/25/11/28/1531245/someone-is-trying-to-hack-people-through-apple-podcasts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 17:48:25](https://news.ycombinator.com/item?id=46080916) - [Molly: An Improved Signal App](https://molly.im/)
* [2025-11-28, 17:01:00](https://entertainment.slashdot.org/story/25/11/28/1522252/australias-streaming-quotas-become-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia&apos;s Streaming Quotas Become Law](https://entertainment.slashdot.org/story/25/11/28/1522252/australias-streaming-quotas-become-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 16:54:56](https://news.ycombinator.com/item?id=46080364) - [So you wanna build a local RAG?](https://blog.yakkomajuri.com/blog/local-rag)
* [2025-11-28, 16:49:12](https://news.ycombinator.com/item?id=46080289) - [Airloom – 3D Flight Tracker](https://objectiveunclear.com/airloom.html)
* [2025-11-28, 16:35:24](https://news.ycombinator.com/item?id=46080143) - [True P2P Email on Top of Yggdrasil Network](https://github.com/JB-SelfCompany/Tyr)
* [2025-11-28, 16:01:00](https://hardware.slashdot.org/story/25/11/28/1435209/robots-and-ai-are-already-remaking-the-chinese-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robots and AI Are Already Remaking the Chinese Economy](https://hardware.slashdot.org/story/25/11/28/1435209/robots-and-ai-are-already-remaking-the-chinese-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 15:59:49](https://lobste.rs/s/0i4chy/don_t_tug_on_you_never_know_what_it_might_be) - [Don&apos;t tug on that, you never know what it might be attached to (2016)](https://blog.plover.com/2016/07/01/#tmpdir)
* [2025-11-28, 15:30:03](https://lobste.rs/s/xbsdvw/bfs_breadth_first_version_unix_find) - [bfs: A breadth-first version of the UNIX find command](https://github.com/tavianator/bfs)
* [2025-11-28, 15:00:00](https://news.slashdot.org/story/25/11/28/1356212/violent-conflict-over-water-hit-a-record-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Violent Conflict Over Water Hit a Record Last Year](https://news.slashdot.org/story/25/11/28/1356212/violent-conflict-over-water-hit-a-record-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 14:42:19](https://news.ycombinator.com/item?id=46079073) - [Language is primarily a tool for communication rather than thought (2024) [pdf]](https://gwern.net/doc/psychology/linguistics/2024-fedorenko.pdf)
* [2025-11-28, 14:14:25](https://lobste.rs/s/bhoqqp/1_million_dollar_apple_macintosh) - [A $1 Million Dollar Apple Macintosh PowerBook 170](https://www.ebay.ca/itm/326104837538)
* [2025-11-28, 14:00:00](https://news.slashdot.org/story/25/11/28/139247/major-ai-conference-flooded-with-peer-reviews-written-fully-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Major AI Conference Flooded With Peer Reviews Written Fully By AI](https://news.slashdot.org/story/25/11/28/139247/major-ai-conference-flooded-with-peer-reviews-written-fully-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 13:57:54](https://lobste.rs/s/l77zlu/update_on_farphone_s_battery) - [An update on the farphone&apos;s battery](https://far.computer/battery-update/)
* [2025-11-28, 12:30:00](https://slashdot.org/story/25/11/28/0135214/why-cant-chatgpt-tell-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Can&apos;t ChatGPT Tell Time?](https://slashdot.org/story/25/11/28/0135214/why-cant-chatgpt-tell-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 11:16:06](https://lobste.rs/s/ogf9hk/help_my_java_object_vanished_gc_is_not_at) - [Help, My Java Object Vanished (and the GC is Not at Fault)](https://arraying.de/posts/markword/)
* [2025-11-28, 10:46:09](https://lobste.rs/s/60v35g/crdt_dictionary_field_guide_conflict) - [The CRDT Dictionary: A Field Guide to Conflict-Free Replicated Data Types](https://www.iankduncan.com/engineering/2025-11-27-crdt-dictionary)
* [2025-11-28, 09:55:11](https://lobste.rs/s/9rpx3i/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/9rpx3i/what_are_you_doing_this_weekend)
* [2025-11-28, 08:45:32](https://lobste.rs/s/ybp9wx/is_matrix_multiplication_ugly) - [Is Matrix Multiplication Ugly?](https://mathenchant.wordpress.com/2025/11/21/is-matrix-multiplication-ugly/)
* [2025-11-28, 05:00:00](https://lobste.rs/s/v6ct3o/ml_kem_mythbusting) - [ML-KEM Mythbusting](https://keymaterial.net/2025/11/27/ml-kem-mythbusting/)
* [2025-11-27, 03:26:00](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss) - [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss)
* [2025-11-26, 22:43:00](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss) - [The Escape Room Challenge: How One Person&apos;s Narcissism Can Undermine a Whole Team](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss)
* [2025-11-26, 17:55:00](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss) - [Mozilla Resolves 21-Year-Old Bug, Adds Full XDG Directory Support](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss)
* [2025-11-26, 13:11:00](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss) - [The Reshoring Initiative - Real Reasons to Bring Jobs Back to USA From Asia](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss)
* [2025-11-26, 08:24:00](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) - [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss)
* [2025-11-26, 07:03:27](https://news.ycombinator.com/item?id=46054879) - [Show HN: Anthony Bourdain&apos;s Lost Li.st&apos;s](https://bourdain.greg.technology/)
* [2025-11-26, 03:41:00](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss) - [HP and Dell Disable HEVC Support Built Into Their Laptops’ CPUs](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss)
* [2025-11-25, 22:57:00](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss) - [Is Matrix Multiplication Ugly?](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss)
* [2025-11-25, 18:12:00](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss) - [In 1982, a Physics Joke Gone Wrong Sparked the Invention of the Emoticon](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss)
* [2025-11-25, 13:28:00](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss) - [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss)
* [2025-11-25, 12:34:25](https://news.ycombinator.com/item?id=46045207) - [WinApps: Run Windows apps as if they were a part of the native Linux OS](https://github.com/winapps-org/winapps)
* [2025-11-25, 08:41:00](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss) - [I Set a Trap to Catch My Students Cheating With AI and the Results Were Shocking](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss)
* [2025-11-25, 04:00:00](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss) - [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss)
