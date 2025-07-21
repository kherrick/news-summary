# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation Highlights

* [connmap: X11 desktop widget that shows location of your current network peers on a world map in real-time](https://github.com/h2337/connmap) ([article](https://lobste.rs/s/sdpydb/connmap_x11_desktop_widget_shows), [comments](https://news.ycombinator.com/item?id=44630648))

* [Using MacBook's trackpad as digital weighing scale](https://github.com/KrishKrosh/TrackWeight) ([comments](https://news.ycombinator.com/item?id=44635808))

* [ESP32-Faikin: ESP32 based module to control Daikin aircon units](https://github.com/revk/ESP32-Faikin) ([article](https://news.ycombinator.com/item?id=44631594), [comments](https://lobste.rs/s/zqttvz/esp32_faikin_esp32_based_module_control))

* [Rickrolling Turso DB (SQLite rewrite in Rust)](https://avi.im/blag/2025/rickrolling-turso/) ([comments](https://lobste.rs/s/svrctd/rickrolling_turso_db_sqlite_rewrite_rust))

* [Gren 25S: Easier interop, concurrent tasks and zero-install packages](https://gren-lang.org/news/250721_gren_25s/) ([comments](https://lobste.rs/s/xeqwij/gren_25s_easier_interop_concurrent_tasks))

## Cybersecurity Updates

* [Microsoft Releases Emergency Patches for Actively Exploited SharePoint Zero-Days](https://it.slashdot.org/story/25/07/21/1523207/microsoft-releases-emergency-patches-for-actively-exploited-sharepoint-zero-days?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://it.slashdot.org/story/25/07/20/2340220/tens-of-thousands-of-sharepoint-servers-at-risk-microsoft-issues-no-patch?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Spanish police arrest five over $542M crypto investment scheme](https://therecord.media/spain-europol-cryptocurrency-investment-scheme-takedown) ([comments](https://news.ycombinator.com/item?id=44635403))

* [Delta Air Lines is Using AI to Set the Maximum Price You’re Willing to Pay](https://soylentnews.org/article.pl?sid=25/07/20/0259241&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/07/20/0259241&from=rss))

## Scientific Discoveries

* [Mysterious Antimatter Physics Discovered at the Large Hadron Collider](https://science.slashdot.org/story/25/07/21/0430256/mysterious-antimatter-physics-discovered-at-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/07/21/0430256/mysterious-antimatter-physics-discovered-at-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [New records on Wendelstein 7-X](https://www.iter.org/node/20687/new-records-wendelstein-7-x) ([comments](https://news.ycombinator.com/item?id=44636204))

* [Fossil Discovered Beyond Pluto Implies \'Something Dramatic\' Happened 400M Years Ago](https://science.slashdot.org/story/25/07/21/0120233/fossil-discovered-beyond-pluto-implies-something-dramatic-happened-400m-years-ago?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/07/21/0120233/fossil-discovered-beyond-pluto-implies-something-dramatic-happened-400m-years-ago?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Science and Technology Challenges

* [Shale Drillers Turn on Each Other as Toxic Water Leaks Hit Biggest US Oil Field](https://www.bloomberg.com/news/articles/2025-07-21/toxic-water-leaks-from-top-us-oil-field-ensnare-devon-dvn-in-texas-court-fight) ([comments](https://news.ycombinator.com/item?id=44635919))

* [Industrial Waste is Turning Into Rock in Just Decades, Study Suggests](https://soylentnews.org/article.pl?sid=25/07/16/1725249&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/07/16/1725249&from=rss))

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

* [2025-07-21, 15:48:48](https://lobste.rs/s/sdpydb/connmap_x11_desktop_widget_shows) - [connmap: X11 desktop widget that shows location of your current network peers on a world map in real-time](https://github.com/h2337/connmap)
* [2025-07-21, 15:48:30](https://lobste.rs/s/nfbjbr/ll_lr_parsing_demystified_2013) - [LL and LR Parsing Demystified (2013)](https://blog.reverberate.org/2013/07/ll-and-lr-parsing-demystified.html)
* [2025-07-21, 15:39:00](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss) - [HP is Going to Monitor PC Usage With a \&quot;Carfax for PCs\&quot; ](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss)
* [2025-07-21, 15:31:21](https://news.ycombinator.com/item?id=44636369) - [Australian anti-porn group claims responsibility for Steams new censorship rules](https://www.pcgamer.com/gaming-industry/australian-anti-porn-group-claims-responsibility-for-steams-new-censorship-rules-in-victory-against-porn-sick-brain-rotted-pedo-gamer-fetishists-and-things-only-get-weirder-from-there/)
* [2025-07-21, 15:23:00](https://it.slashdot.org/story/25/07/21/1523207/microsoft-releases-emergency-patches-for-actively-exploited-sharepoint-zero-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Releases Emergency Patches for Actively Exploited SharePoint Zero-Days](https://it.slashdot.org/story/25/07/21/1523207/microsoft-releases-emergency-patches-for-actively-exploited-sharepoint-zero-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 15:18:41](https://news.ycombinator.com/item?id=44636204) - [New records on Wendelstein 7-X](https://www.iter.org/node/20687/new-records-wendelstein-7-x)
* [2025-07-21, 14:58:07](https://news.ycombinator.com/item?id=44635919) - [Shale Drillers Turn on Each Other as Toxic Water Leaks Hit Biggest US Oil Field](https://www.bloomberg.com/news/articles/2025-07-21/toxic-water-leaks-from-top-us-oil-field-ensnare-devon-dvn-in-texas-court-fight)
* [2025-07-21, 14:54:41](https://news.ycombinator.com/item?id=44635867) - [Occasionally USPS sends me pictures of other people&apos;s mail](https://the418.substack.com/p/a-bug-in-the-mail)
* [2025-07-21, 14:51:13](https://news.ycombinator.com/item?id=44635808) - [Using MacBook&apos;s trackpad as digital weighing scale](https://github.com/KrishKrosh/TrackWeight)
* [2025-07-21, 14:47:00](https://tech.slashdot.org/story/25/07/21/1447258/t-mobile-is-bringing-low-latency-tech-to-5g-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [T-Mobile is Bringing Low-Latency Tech To 5G For the First Time](https://tech.slashdot.org/story/25/07/21/1447258/t-mobile-is-bringing-low-latency-tech-to-5g-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 14:46:40](https://news.ycombinator.com/item?id=44635745) - [UK backing down on Apple encryption backdoor after pressure from US](https://arstechnica.com/tech-policy/2025/07/uk-backing-down-on-apple-encryption-backdoor-after-pressure-from-us/)
* [2025-07-21, 14:31:34](https://lobste.rs/s/svrctd/rickrolling_turso_db_sqlite_rewrite_rust) - [Rickrolling Turso DB (SQLite rewrite in Rust)](https://avi.im/blag/2025/rickrolling-turso/)
* [2025-07-21, 14:19:31](https://news.ycombinator.com/item?id=44635403) - [Spanish police arrest five over $542M crypto investment scheme](https://therecord.media/spain-europol-cryptocurrency-investment-scheme-takedown)
* [2025-07-21, 14:00:00](https://developers.slashdot.org/story/25/07/21/1338204/replit-wiped-production-database-faked-data-to-cover-bugs-saastr-founder-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Replit Wiped Production Database, Faked Data to Cover Bugs, SaaStr Founder Says](https://developers.slashdot.org/story/25/07/21/1338204/replit-wiped-production-database-faked-data-to-cover-bugs-saastr-founder-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 13:20:45](https://lobste.rs/s/uzzuto/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/uzzuto/what_are_you_doing_this_week)
* [2025-07-21, 12:34:37](https://lobste.rs/s/qykvpg/deeper_theories_program_design) - [Deeper theories of program design](https://typesanitizer.com/blog/deeper-theories.html)
* [2025-07-21, 12:27:24](https://news.ycombinator.com/item?id=44634340) - [I&apos;ve launched 37 products in 5 years and not doing that again](https://www.indiehackers.com/post/ive-launched-37-products-in-5-years-and-not-doing-that-again-0b66e6e8b3)
* [2025-07-21, 12:16:42](https://news.ycombinator.com/item?id=44634266) - [What happens when housing prices go down?](https://clmarohn.substack.com/p/what-happens-when-housing-prices)
* [2025-07-21, 12:13:19](https://lobste.rs/s/adii2s/dissertation_typesetting) - [Dissertation Typesetting Considerations](https://tony-zorman.com/posts/phd-typesetting.html)
* [2025-07-21, 12:03:27](https://lobste.rs/s/pr5jaq/transformer_explainer_llm_transformer) - [Transformer Explainer: LLM Transformer Model Visually Explained](https://poloclub.github.io/transformer-explainer/)
* [2025-07-21, 12:00:06](https://news.ycombinator.com/item?id=44634166) - [Extend (YC W23) is hiring engineers to build SOTA document processing](https://jobs.ashbyhq.com/extend)
* [2025-07-21, 11:44:00](https://linux.slashdot.org/story/25/07/21/0633232/debian-130-to-begin-supporting-risc-v-as-an-official-cpu-architecture?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Debian 13.0 To Begin Supporting RISC-V as an Official CPU Architecture](https://linux.slashdot.org/story/25/07/21/0633232/debian-130-to-begin-supporting-risc-v-as-an-official-cpu-architecture?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 11:26:04](https://news.ycombinator.com/item?id=44633933) - [We made Postgres writes faster, but it broke replication](https://www.paradedb.com/blog/lsm_trees_in_postgres)
* [2025-07-21, 11:11:27](https://lobste.rs/s/xeqwij/gren_25s_easier_interop_concurrent_tasks) - [Gren 25S: Easier interop, concurrent tasks and zero-install packages](https://gren-lang.org/news/250721_gren_25s/)
* [2025-07-21, 10:55:00](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss) - [Delta Air Lines is Using AI to Set the Maximum Price You’re Willing to Pay](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss)
* [2025-07-21, 10:23:40](https://news.ycombinator.com/item?id=44633562) - [NIH limits scientists to six applications per year](https://www.science.org/content/article/fearful-ai-generated-grant-proposals-nih-limits-scientists-six-applications-year)
* [2025-07-21, 10:03:07](https://lobste.rs/s/hxgrd2/safe_cell_field_projection_rust_2020) - [Safe Cell field projection in Rust (2020)](https://www.abubalay.com/blog/2020/01/05/cell-field-projection)
* [2025-07-21, 08:14:44](https://lobste.rs/s/dvzkbd/how_do_you_bundle_application_data) - [How do you bundle application data in different languages?](https://lobste.rs/s/dvzkbd/how_do_you_bundle_application_data)
* [2025-07-21, 08:04:00](https://news.slashdot.org/story/25/07/21/0557216/should-californias-grid-join-a-larger-regional-electricity-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should California&apos;s Grid Join a Larger Regional Electricity Market?](https://news.slashdot.org/story/25/07/21/0557216/should-californias-grid-join-a-larger-regional-electricity-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 06:09:00](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss) - [For Algorithms, a Little Memory Outweighs a Lot of Time](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss)
* [2025-07-21, 04:34:00](https://science.slashdot.org/story/25/07/21/0430256/mysterious-antimatter-physics-discovered-at-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mysterious Antimatter Physics Discovered at the Large Hadron Collider](https://science.slashdot.org/story/25/07/21/0430256/mysterious-antimatter-physics-discovered-at-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 03:41:23](https://news.ycombinator.com/item?id=44631594) - [ESP32-Faikin: ESP32 based module to control Daikin aircon units](https://github.com/revk/ESP32-Faikin)
* [2025-07-21, 03:38:31](https://lobste.rs/s/zqttvz/esp32_faikin_esp32_based_module_control) - [ESP32-Faikin: ESP32 based module to control Daikin aircon units](https://github.com/revk/ESP32-Faikin)
* [2025-07-21, 01:44:00](https://science.slashdot.org/story/25/07/21/0120233/fossil-discovered-beyond-pluto-implies-something-dramatic-happened-400m-years-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Fossil&apos; Discovered Beyond Pluto Implies &apos;Something Dramatic&apos; Happened 400M Years Ago](https://science.slashdot.org/story/25/07/21/0120233/fossil-discovered-beyond-pluto-implies-something-dramatic-happened-400m-years-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 01:40:05](https://lobste.rs/s/25zyzd/tools_trade) - [Tools of the Trade](https://www.youtube.com/watch?v=YNtoDGS4uak)
* [2025-07-21, 01:22:00](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss) - [Open, Free, and Completely Ignored: The Strange Afterlife of Symbian](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss)
* [2025-07-21, 01:15:55](https://news.ycombinator.com/item?id=44630927) - [Log by time, not by count](https://johnscolaro.xyz/blog/log-by-time-not-by-count)
* [2025-07-21, 00:40:43](https://news.ycombinator.com/item?id=44630760) - [Man wearing metallic necklace dies after being sucked into MRI machine](https://www.bbc.com/news/articles/cx2n39dvp0po)
* [2025-07-21, 00:33:04](https://news.ycombinator.com/item?id=44630724) - [Agents built from alloys](https://xbow.com/blog/alloy-agents/)
* [2025-07-21, 00:16:25](https://news.ycombinator.com/item?id=44630648) - [Show HN: X11 desktop widget that shows location of your network peers on a map](https://github.com/h2337/connmap)
* [2025-07-20, 23:44:00](https://it.slashdot.org/story/25/07/20/2340220/tens-of-thousands-of-sharepoint-servers-at-risk-microsoft-issues-no-patch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Tens of Thousands&apos; of SharePoint Servers at Risk. Microsoft Issues No Patch](https://it.slashdot.org/story/25/07/20/2340220/tens-of-thousands-of-sharepoint-servers-at-risk-microsoft-issues-no-patch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 23:37:07](https://lobste.rs/s/upfxm3/bad_apple_cd_g_on_karaoke_machine) - [Bad Apple!! CD+G on a karaoke machine](https://gashlin.net/blog/pages/2025-07-19-bad-apple-cdg.html)
* [2025-07-20, 23:32:43](https://lobste.rs/s/tpmdss/why_lexing_parsing_should_be_separate) - [Why Lexing and Parsing Should Be Separate](https://github.com/oils-for-unix/oils/wiki/Why-Lexing-and-Parsing-Should-Be-Separate)
* [2025-07-20, 23:15:11](https://lobste.rs/s/yhhecn/type_level_programming_for_safer) - [Type-level programming for safer resource management](https://frasertweedale.github.io/blog-fp/posts/2025-07-19-type-nats-and-constraints.html)
* [2025-07-20, 22:03:00](https://entertainment.slashdot.org/story/25/07/20/220200/after-superman-scores-400m-globally-how-will-marvel-respond?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After &apos;Superman&apos; Scores $400M Globally, How Will Marvel Respond?](https://entertainment.slashdot.org/story/25/07/20/220200/after-superman-scores-400m-globally-how-will-marvel-respond?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 21:54:25](https://lobste.rs/s/dbbau4/how_i_found_myself_game_industry) - [How I Found Myself In the Game Industry](https://nothings.org/gamedev/how_i_found_myself_in_the_game_industry.html)
* [2025-07-20, 20:44:00](https://slashdot.org/story/25/07/20/2041256/how-did-amazon-spin-this-years-prime-day-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Did Amazon Spin This Year&apos;s Prime Day Sales?](https://slashdot.org/story/25/07/20/2041256/how-did-amazon-spin-this-years-prime-day-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 20:35:00](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss) - [Iran Seeks Three Cloud Providers To Power Its Government](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss)
* [2025-07-20, 19:34:00](https://tech.slashdot.org/story/25/07/20/1714257/kill-russian-soldiers-win-points-is-ukraines-new-drone-scheme-gamifying-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kill Russian Soldiers, Win Points: Is Ukraine&apos;s New Drone Scheme Gamifying War?](https://tech.slashdot.org/story/25/07/20/1714257/kill-russian-soldiers-win-points-is-ukraines-new-drone-scheme-gamifying-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 19:14:55](https://lobste.rs/s/tfc3cb/stdio_3_change_file_is_now_opaque) - [stdio(3) change: FILE is now opaque](https://undeadly.org/cgi?action=article;sid=20250717103345)
* [2025-07-20, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss) - [Remote Access Trojan (RAT) Found in the AUR (Arch Linux User Repository)](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss)
* [2025-07-20, 18:34:00](https://yro.slashdot.org/story/25/07/20/1559242/how-gmail-server-evidence-led-to-a-jury-verdict-of-232-million-for-wrongful-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Gmail Server Evidence Led to a Jury Verdict of $23.2 Million For Wrongful Death](https://yro.slashdot.org/story/25/07/20/1559242/how-gmail-server-evidence-led-to-a-jury-verdict-of-232-million-for-wrongful-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 17:34:00](https://tech.slashdot.org/story/25/07/20/1421220/deltas-boeing-767-makes-emergency-landing-as-engine-catches-fire-moments-after-takeoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Delta&apos;s Boeing 767 Makes Emergency Landing as Engine Catches Fire Moments After Takeoff](https://tech.slashdot.org/story/25/07/20/1421220/deltas-boeing-767-makes-emergency-landing-as-engine-catches-fire-moments-after-takeoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 17:00:46](https://lobste.rs/s/ihmxdn/they_re_putting_blue_food_coloring) - [They&apos;re putting blue food coloring in everything](https://blog.foxtrotluna.social/theyre-putting-blue-food-coloring-in-everything/)
* [2025-07-20, 16:34:00](https://science.slashdot.org/story/25/07/19/0457201/inside-the-silicon-valley-push-to-breed-super-babies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Inside the Silicon Valley Push to Breed Super-Babies&apos;](https://science.slashdot.org/story/25/07/19/0457201/inside-the-silicon-valley-push-to-breed-super-babies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 16:15:17](https://lobste.rs/s/9pp08h/i_m_tired_talking_about_ai) - [I’m Tired of Talking About AI](https://paddy.carvers.com/posts/2025/07/ai/)
* [2025-07-20, 15:49:00](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss) - [Intel Has Discontinued Clear Linux, Effective Immediately](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss)
* [2025-07-20, 14:34:07](https://lobste.rs/s/hikcqp/rust_clippy_performance_status_update) - [Rust Clippy performance status update](https://blog.goose.love/posts/clippy-performance-status-update/)
* [2025-07-20, 14:17:00](https://slashdot.org/story/25/07/20/0557204/why-ibms-amazing-sliding-keyboard-thinkpad-701-never-survived-past-1995?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why IBM&apos;s Amazing &apos;Sliding Keyboard&apos; ThinkPad 701 Never Survived Past 1995](https://slashdot.org/story/25/07/20/0557204/why-ibms-amazing-sliding-keyboard-thinkpad-701-never-survived-past-1995?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 14:04:12](https://lobste.rs/s/7ykaux/introducing_xmlui) - [Introducing XMLUI](https://blog.jonudell.net/2025/07/18/introducing-xmlui/)
* [2025-07-20, 14:03:39](https://news.ycombinator.com/item?id=44625292) - [XMLUI](https://blog.jonudell.net/2025/07/18/introducing-xmlui/)
* [2025-07-20, 12:22:09](https://lobste.rs/s/6ifojq/coding_with_llms_summer_2025_update) - [Coding with LLMs in the summer of 2025 (an update)](https://antirez.com/news/154)
* [2025-07-20, 11:04:00](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss) - [The Latest Windows PCs Remember Everything](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss)
* [2025-07-20, 09:40:45](https://lobste.rs/s/szcq9k/async_i_o_on_linux_durability) - [Async I/O on Linux and durability](https://blog.canoozie.net/async-i-o-on-linux-and-durability/)
* [2025-07-20, 06:18:00](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss) - [Infographic: Every Microsoft Acquisition Since 1986](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss)
* [2025-07-20, 01:33:00](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss) - [Is Tor Trustworthy and Safe?](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss)
* [2025-07-19, 22:50:40](https://lobste.rs/s/z2ehwo/borrowchecker_is_what_i_like_least_about) - [The borrowchecker is what I like the least about Rust](https://viralinstruction.com/posts/borrowchecker/)
* [2025-07-19, 22:11:12](https://lobste.rs/s/pv4vxu/why_you_should_choose_htmx_for_your_next) - [Why you should choose HTMX for your next web-based side project - and ditch the crufty MPA and complex SPA](https://hamy.xyz/blog/2024-02_htmx-for-side-projects)
* [2025-07-19, 21:44:30](https://news.ycombinator.com/item?id=44619709) - [The Gentoo Perl versioning scheme](https://wiki.gentoo.org/wiki/Project:Perl/Version-Scheme)
* [2025-07-19, 20:33:00](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss) - [The Fascinating Science of Pain – and Why Everyone Feels it Differently](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss)
* [2025-07-19, 15:50:00](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss) - [FuguIta: OpenBSD Live CD - Desktop Environment Demo Version with XFCE v.4.20.0](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss)
* [2025-07-19, 11:08:00](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss) - [Most Warming This Century May Be Due To Air Pollution Cuts](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss)
* [2025-07-19, 10:52:43](https://news.ycombinator.com/item?id=44614372) - [The Sumerian Game: The ancestor of modern city builders](https://spillhistorie.no/2025/07/10/the-sumerian-game-the-ancestor-of-modern-city-builders/)
* [2025-07-19, 06:20:00](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss) - [Two Guys Hated Using Comcast, So They Built Their Own Fiber ISP](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss)
* [2025-07-19, 01:37:00](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss) - [Radio Hobbyists, Rejoice! Good News for LoRa &amp; Mesh](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss)
* [2025-07-18, 21:13:34](https://news.ycombinator.com/item?id=44609893) - [Super-resolution microscopes reveal new details of cells and disease](https://knowablemagazine.org/content/article/technology/2025/super-resolution-microscopes-reveal-new-details-cells)
* [2025-07-18, 20:55:00](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss) - [Drones, AI and Robot Pickers: Meet the Fully Autonomous Farm](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss)
* [2025-07-18, 16:10:00](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss) - [DOGE Staffer With Access to Americans&apos; Personal Data Leaked Private xAI API Key](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss)
* [2025-07-18, 14:41:04](https://news.ycombinator.com/item?id=44605169) - [Hiding messages in a deck playing cards](https://asherfalcon.com/blog/posts/3)
* [2025-07-18, 13:13:33](https://news.ycombinator.com/item?id=44604311) - [Using the Matrix Cores of AMD RDNA 4 architecture GPUs](https://gpuopen.com/learn/using_matrix_core_amd_rdna4/)
* [2025-07-18, 12:51:39](https://news.ycombinator.com/item?id=44604149) - [A circle and a hyperbola living in one plot](https://tobylam.xyz/2024/05/24/circle-hyperbola)
* [2025-07-18, 11:26:00](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss) - [Intel Axes Thousands of Technicians and Engineers in Sweeping U.S. Layoffs](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss)
* [2025-07-18, 11:09:07](https://news.ycombinator.com/item?id=44603349) - [“Dynamic programming” is not referring to “computer programming”](https://www.vidarholen.net/contents/blog/?p=1172)
* [2025-07-18, 06:49:00](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss) - [Engineering the Origin of the Wheel](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss)
* [2025-07-18, 02:05:00](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss) - [Nvidia Chips Become the First GPUs to Fall to Rowhammer Bit-Flip Attacks](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss)
* [2025-07-18, 00:59:21](https://news.ycombinator.com/item?id=44600070) - [Quadratic forms beyond arithmetic](https://www.ams.org/journals/notices/202507/noti3192/noti3192.html)
* [2025-07-17, 21:14:00](https://soylentnews.org/article.pl?sid=25/07/16/188244&amp;from=rss) - [Belkin Shows Tech Firms Getting Too Comfortable With Bricking Customers’ Stuff](https://soylentnews.org/article.pl?sid=25/07/16/188244&amp;from=rss)
* [2025-07-17, 20:54:02](https://news.ycombinator.com/item?id=44598090) - [The daily life of a medieval king](https://www.medievalists.net/2025/07/medieval-king-daily-life/)
* [2025-07-17, 16:32:00](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss) - [Holographic Ribbon Aims To Oust Magnetic Tape With 50-Year Life Span And 200Tb Per Cartridge](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss)
* [2025-07-17, 16:01:17](https://news.ycombinator.com/item?id=44594808) - [New colors without shooting lasers into your eyes](https://dynomight.net/colors/)
* [2025-07-17, 12:51:28](https://news.ycombinator.com/item?id=44592797) - [Debugging Bash Like a Sire (2023)](https://blog.brujordet.no/post/bash/debugging_bash_like_a_sire/)
* [2025-07-17, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss) - [AI Slows Down Some Experienced Software Developers](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss)
* [2025-07-17, 09:12:26](https://news.ycombinator.com/item?id=44591305) - [Simulating hand-drawn motion with SVG filters](https://camillovisini.com/coding/simulating-hand-drawn-motion-with-svg-filters)
* [2025-07-17, 07:07:00](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss) - [Industrial Waste is Turning Into Rock in Just Decades, Study Suggests](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss)
* [2025-07-17, 02:22:00](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss) - [Merger of Two Massive Black Holes is One for the Record Books](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss)
