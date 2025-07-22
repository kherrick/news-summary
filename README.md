# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology

* [SoftBank and OpenAI's $500 Billion AI Project Struggles To Get Off Ground](https://slashdot.org/story/25/07/21/220229/softbank-and-open-ais-500-billion-ai-project-struggles-to-get-off-ground?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/07/21/220229/softbank-and-open-ais-500-billion-ai-project-struggles-to-get-off-ground?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Spotify Publishes AI-Generated Songs From Dead Artists Without Permission](https://entertainment.slashdot.org/story/25/07/21/2037254/spotify-publishes-ai-generated-songs-from-dead-artists-without-permission?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/25/07/21/2037254/spotify-publishes-ai-generated-songs-from-dead-artists-without-permission?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [AI comes up with bizarre physics experiments, but they work](https://www.quantamagazine.org/ai-comes-up-with-bizarre-physics-experiments-but-they-work-20250721/) ([comments](https://news.ycombinator.com/item?id=44642349))

* [Semi-Automated Assembly Verification in Python using pypcode Semantics](https://www.philipzucker.com/assembly_verify/) ([comments](https://lobste.rs/s/nfqut5/semi_automated_assembly_verification))

## Cultural Insights and History

* [Thelonious Monk, the Teenage Weirdo, and the Battle Over a Lost Sonic Masterpiece](https://soylentnews.org/article.pl?sid=25/07/21/1617239&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/07/21/1617239&from=rss))

* [Complete silence is always hallucinated as \\"ترجمة نانسي قنقر\\" in Arabic](https://github.com/openai/whisper/discussions/2608) ([comments](https://news.ycombinator.com/item?id=44643564))

## Innovative Product Developments

* [Jujutsu for busy devs](https://maddie.wtf/posts/2025-07-21-jujutsu-for-busy-devs) ([comments](https://news.ycombinator.com/item?id=44641961))

* [devenv 1.8: Progress TUI, SecretSpec Integration, Listing Tasks, and Smaller Containers](https://devenv.sh/blog/2025/07/22/devenv-18-progress-tui-secretspec-integration-listing-tasks-and-smaller-containers) ([comments](https://lobste.rs/s/r79s3w/devenv_1_8_progress_tui_secretspec))

## Societal and Corporate Dynamics

* [Workers at Snopes.com win voluntary recognition](https://newsguild.org/workers-at-snopes-com-win-voluntary-union-recognition/) ([comments](https://news.ycombinator.com/item?id=44643055))

* [We have made the decision to not continue paying for BBB accreditation](https://mycherrytree.com/blogs/news/why-we-have-made-the-decision-to-not-continue-paying-for-accreditation-from-the-better-business-bureau-bbb) ([comments](https://news.ycombinator.com/item?id=44642796))

## Scientific Exploration and Research

* [AI could have written this: Birth of a classist slur in knowledge work [pdf]](https://advait.org/files/sarkar_2025_ai_shaming.pdf) ([comments](https://news.ycombinator.com/item?id=44642736))

* [Meta is Building \\"Several\\" Multi-Gigawatt Compute Clusters](https://soylentnews.org/article.pl?sid=25/07/20/2227233&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/07/20/2227233&from=rss))

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

* [2025-07-22, 07:00:35](https://news.ycombinator.com/item?id=44643981) - [Kapa.ai (YC S23) is hiring a software engineers (EU remote)](https://www.ycombinator.com/companies/kapa-ai/jobs/JPE2ofG-software-engineer-full-stack)
* [2025-07-22, 06:23:25](https://lobste.rs/s/nfqut5/semi_automated_assembly_verification) - [Semi-Automated Assembly Verification in Python using pypcode Semantics](https://www.philipzucker.com/assembly_verify/)
* [2025-07-22, 05:47:00](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss) - [Thelonious Monk, the Teenage Weirdo, and the Battle Over a Lost Sonic Masterpiece](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss)
* [2025-07-22, 05:42:10](https://news.ycombinator.com/item?id=44643564) - [Complete silence is always hallucinated as \&quot;ترجمة نانسي قنقر\&quot; in Arabic](https://github.com/openai/whisper/discussions/2608)
* [2025-07-22, 04:27:28](https://lobste.rs/s/r79s3w/devenv_1_8_progress_tui_secretspec) - [devenv 1.8: Progress TUI, SecretSpec Integration, Listing Tasks, and Smaller Containers](https://devenv.sh/blog/2025/07/22/devenv-18-progress-tui-secretspec-integration-listing-tasks-and-smaller-containers)
* [2025-07-22, 03:48:34](https://news.ycombinator.com/item?id=44643055) - [Workers at Snopes.com win voluntary recognition](https://newsguild.org/workers-at-snopes-com-win-voluntary-union-recognition/)
* [2025-07-22, 02:49:29](https://news.ycombinator.com/item?id=44642796) - [We have made the decision to not continue paying for BBB accreditation](https://mycherrytree.com/blogs/news/why-we-have-made-the-decision-to-not-continue-paying-for-accreditation-from-the-better-business-bureau-bbb)
* [2025-07-22, 02:39:03](https://news.ycombinator.com/item?id=44642736) - [AI could have written this: Birth of a classist slur in knowledge work [pdf]](https://advait.org/files/sarkar_2025_ai_shaming.pdf)
* [2025-07-22, 01:40:00](https://slashdot.org/story/25/07/21/220229/softbank-and-open-ais-500-billion-ai-project-struggles-to-get-off-ground?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SoftBank and Open AI&apos;s $500 Billion AI Project Struggles To Get Off Ground](https://slashdot.org/story/25/07/21/220229/softbank-and-open-ais-500-billion-ai-project-struggles-to-get-off-ground?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 01:28:49](https://news.ycombinator.com/item?id=44642349) - [AI comes up with bizarre physics experiments, but they work](https://www.quantamagazine.org/ai-comes-up-with-bizarre-physics-experiments-but-they-work-20250721/)
* [2025-07-22, 01:04:00](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss) - [Meta is Building “Several” Multi-Gigawatt Compute Clusters](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss)
* [2025-07-22, 01:00:00](https://tech.slashdot.org/story/25/07/21/2044200/fcc-to-eliminate-gigabit-speed-goal-scrap-analysis-of-broadband-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC To Eliminate Gigabit Speed Goal, Scrap Analysis of Broadband Prices](https://tech.slashdot.org/story/25/07/21/2044200/fcc-to-eliminate-gigabit-speed-goal-scrap-analysis-of-broadband-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 00:21:48](https://news.ycombinator.com/item?id=44641961) - [Jujutsu for busy devs](https://maddie.wtf/posts/2025-07-21-jujutsu-for-busy-devs)
* [2025-07-22, 00:20:00](https://entertainment.slashdot.org/story/25/07/21/2037254/spotify-publishes-ai-generated-songs-from-dead-artists-without-permission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Publishes AI-Generated Songs From Dead Artists Without Permission](https://entertainment.slashdot.org/story/25/07/21/2037254/spotify-publishes-ai-generated-songs-from-dead-artists-without-permission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 23:41:28](https://lobste.rs/s/j5ahk8/jujutsu_for_busy_devs) - [Jujutsu For Busy Devs](https://maddie.wtf/posts/2025-07-21-jujutsu-for-busy-devs)
* [2025-07-21, 23:40:00](https://it.slashdot.org/story/25/07/21/2025255/alaska-airlines-resumes-operations-after-system-glitch-grounds-all-flights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Alaska Airlines Resumes Operations After System Glitch Grounds All Flights](https://it.slashdot.org/story/25/07/21/2025255/alaska-airlines-resumes-operations-after-system-glitch-grounds-all-flights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 23:39:56](https://lobste.rs/s/yicxrs/reckless_introduction_hindley_milner) - [A reckless introduction to Hindley-Milner type inference](https://reasonableapproximation.net/2019/05/05/hindley-milner.html)
* [2025-07-21, 23:26:40](https://news.ycombinator.com/item?id=44641521) - [Uv: Running a script with dependencies](https://docs.astral.sh/uv/guides/scripts/#running-a-script-with-dependencies)
* [2025-07-21, 23:18:14](https://news.ycombinator.com/item?id=44641464) - [FCC to eliminate gigabit speed goal and scrap analysis of broadband prices](https://arstechnica.com/civis/threads/fcc-to-eliminate-gigabit-speed-goal-and-scrap-analysis-of-broadband-prices.1508451/page-2)
* [2025-07-21, 23:00:00](https://slashdot.org/story/25/07/21/2016251/figma-aims-at-164-billion-valuation-as-tech-ipos-bounce-back?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Figma Aims At $16.4 Billion Valuation As Tech IPOs Bounce Back](https://slashdot.org/story/25/07/21/2016251/figma-aims-at-164-billion-valuation-as-tech-ipos-bounce-back?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 22:52:49](https://lobste.rs/s/mzrah6/rfc_865_quote_day_protocol) - [RFC 865: Quote of the Day Protocol](https://datatracker.ietf.org/doc/html/rfc865)
* [2025-07-21, 22:20:00](https://news.slashdot.org/story/25/07/21/207245/nvidia-makes-more-hopper-blackwell-header-files-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NVIDIA Makes More Hopper, Blackwell Header Files Open-Source](https://news.slashdot.org/story/25/07/21/207245/nvidia-makes-more-hopper-blackwell-header-files-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 21:53:24](https://lobste.rs/s/brxlbh/advanced_version_gemini_with_deep_think) - [Advanced version of Gemini with Deep Think officially achieves gold-medal standard at the International Mathematical Olympiad](https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/)
* [2025-07-21, 21:49:28](https://lobste.rs/s/h8bfgy/sapling) - [Sapling](https://sapling-scm.com/)
* [2025-07-21, 21:16:10](https://lobste.rs/s/cvhdvw/garbage_collection_for_systems) - [Garbage Collection for Systems Programmers](https://bitbashing.io/gc-for-systems-programmers.html)
* [2025-07-21, 21:10:55](https://lobste.rs/s/obhc4f/working_on_programming_language_age_llms) - [Working on a Programming Language in the Age of LLMs](https://ryelang.org/blog/posts/programming-language-in-age-of-llms/)
* [2025-07-21, 20:57:11](https://news.ycombinator.com/item?id=44640331) - [The surprising geography of American left-handedness (2015)](https://www.washingtonpost.com/news/wonk/wp/2015/09/22/the-surprising-geography-of-american-left-handedness/)
* [2025-07-21, 20:49:09](https://lobste.rs/s/6uj96z/automating_away_claude_s_bad_habits_with) - [Automating Away Claude&apos;s Bad Habits with Hooks](https://writeaheadblogg.ing/posts/claude-hooks-auto-fix-trailing-whitespace/)
* [2025-07-21, 20:40:00](https://games.slashdot.org/story/25/07/21/201226/xbox-cloud-games-will-soon-follow-you-across-xbox-pc-and-windows-handhelds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xbox Cloud Games Will Soon Follow You Across Xbox, PC, and Windows Handhelds](https://games.slashdot.org/story/25/07/21/201226/xbox-cloud-games-will-soon-follow-you-across-xbox-pc-and-windows-handhelds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 20:19:00](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss) - [Weird Space Weather Seems to Have Influenced Human Behavior 41,000 years ago](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss)
* [2025-07-21, 20:00:00](https://yro.slashdot.org/story/25/07/21/1957210/weak-password-allowed-hackers-to-sink-a-158-year-old-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Weak Password Allowed Hackers To Sink a 158-Year-Old Company](https://yro.slashdot.org/story/25/07/21/1957210/weak-password-allowed-hackers-to-sink-a-158-year-old-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 19:48:42](https://lobste.rs/s/lgcpmp/fuzzing_kotlin_compiler) - [Fuzzing the Kotlin Compiler](https://blog.jetbrains.com/research/2025/07/fuzzing-the-kotlin-compiler/)
* [2025-07-21, 19:47:51](https://lobste.rs/s/ddklvz/cppq_simple_reliable_efficient) - [cppq: Simple, reliable &amp; efficient distributed task queues for C++17](https://github.com/h2337/cppq)
* [2025-07-21, 19:40:15](https://news.ycombinator.com/item?id=44639524) - [Erlang 28 on GRiSP Nano using only 16 MB](https://www.grisp.org/blog/posts/2025-06-11-grisp-nano-codebeam-sto)
* [2025-07-21, 19:31:43](https://news.ycombinator.com/item?id=44639421) - [Scarcity, Inventory, and Inequity: A Deep Dive into Airline Fare Buckets](https://blog.getjetback.com/scarcity-inventory-and-inequity-a-deep-dive-into-airline-fare-buckets/)
* [2025-07-21, 19:08:00](https://science.slashdot.org/story/25/07/21/198231/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Advanced Version of Gemini With Deep Think Officially Achieves Gold-Medal Standard at the International Mathematical Olympiad](https://science.slashdot.org/story/25/07/21/198231/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 18:52:26](https://news.ycombinator.com/item?id=44638948) - [I know genomes. Don&apos;t delete your DNA](https://stevensalzberg.substack.com/p/i-know-genomes-dont-delete-your-dna)
* [2025-07-21, 18:22:11](https://news.ycombinator.com/item?id=44638580) - [What went wrong inside recalled Anker PowerCore 10000 power banks?](https://www.lumafield.com/article/what-went-wrong-inside-these-recalled-power-banks)
* [2025-07-21, 18:16:10](https://news.ycombinator.com/item?id=44638510) - [Show HN: Lotas – Cursor for RStudio](https://www.lotas.ai/)
* [2025-07-21, 18:16:07](https://news.ycombinator.com/item?id=44638509) - [What will become of the CIA?](https://www.newyorker.com/magazine/2025/07/28/the-mission-the-cia-in-the-21st-century-tim-weiner-book-review)
* [2025-07-21, 18:11:00](https://it.slashdot.org/story/25/07/21/1811221/former-google-ceo-tells-workers-turn-off-your-phone-to-focus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former Google CEO Tells Workers: Turn Off Your Phone To Focus](https://it.slashdot.org/story/25/07/21/1811221/former-google-ceo-tells-workers-turn-off-your-phone-to-focus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 18:09:56](https://lobste.rs/s/1ylyds/pogocache_fast_caching_software) - [Pogocache - Fast caching software](https://github.com/tidwall/pogocache)
* [2025-07-21, 17:59:00](https://news.ycombinator.com/item?id=44638300) - [The Game Genie Generation](https://tedium.co/2025/07/21/the-game-genie-generation/)
* [2025-07-21, 17:38:00](https://it.slashdot.org/story/25/07/21/1739207/hackers-exploit-a-blind-spot-by-hiding-malware-inside-dns-records?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Exploit a Blind Spot By Hiding Malware Inside DNS Records](https://it.slashdot.org/story/25/07/21/1739207/hackers-exploit-a-blind-spot-by-hiding-malware-inside-dns-records?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 17:16:41](https://news.ycombinator.com/item?id=44637715) - [Don&apos;t bother parsing: Just use images for RAG](https://www.morphik.ai/blog/stop-parsing-docs)
* [2025-07-21, 16:48:28](https://news.ycombinator.com/item?id=44637352) - [AccountingBench: Evaluating LLMs on real long-horizon business tasks](https://accounting.penrose.com/)
* [2025-07-21, 16:44:00](https://news.slashdot.org/story/25/07/21/1643245/uk-backing-down-on-apple-encryption-backdoor-after-pressure-from-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Backing Down on Apple Encryption Backdoor After Pressure From US](https://news.slashdot.org/story/25/07/21/1643245/uk-backing-down-on-apple-encryption-backdoor-after-pressure-from-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 16:01:00](https://slashdot.org/story/25/07/21/1548229/microsoft-to-help-france-showcase-paris-notre-dame-cathedral-in-digital-replica?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft To Help France Showcase Paris&apos; Notre-Dame Cathedral in Digital Replica](https://slashdot.org/story/25/07/21/1548229/microsoft-to-help-france-showcase-paris-notre-dame-cathedral-in-digital-replica?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 15:48:48](https://lobste.rs/s/sdpydb/connmap_x11_desktop_widget_shows) - [connmap: X11 desktop widget that shows location of your current network peers on a world map in real-time](https://github.com/h2337/connmap)
* [2025-07-21, 15:48:30](https://lobste.rs/s/nfbjbr/ll_lr_parsing_demystified_2013) - [LL and LR Parsing Demystified (2013)](https://blog.reverberate.org/2013/07/ll-and-lr-parsing-demystified.html)
* [2025-07-21, 15:39:00](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss) - [HP is Going to Monitor PC Usage With a \&quot;Carfax for PCs\&quot; ](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss)
* [2025-07-21, 15:23:00](https://it.slashdot.org/story/25/07/21/1523207/microsoft-releases-emergency-patches-for-actively-exploited-sharepoint-zero-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Releases Emergency Patches for Actively Exploited SharePoint Zero-Days](https://it.slashdot.org/story/25/07/21/1523207/microsoft-releases-emergency-patches-for-actively-exploited-sharepoint-zero-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 15:18:41](https://news.ycombinator.com/item?id=44636204) - [New records on Wendelstein 7-X](https://www.iter.org/node/20687/new-records-wendelstein-7-x)
* [2025-07-21, 14:54:41](https://news.ycombinator.com/item?id=44635867) - [Occasionally USPS sends me pictures of other people&apos;s mail](https://the418.substack.com/p/a-bug-in-the-mail)
* [2025-07-21, 14:51:13](https://news.ycombinator.com/item?id=44635808) - [TrackWeight: Turn your MacBook&apos;s trackpad into a digital weighing scale](https://github.com/KrishKrosh/TrackWeight)
* [2025-07-21, 14:47:00](https://tech.slashdot.org/story/25/07/21/1447258/t-mobile-is-bringing-low-latency-tech-to-5g-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [T-Mobile is Bringing Low-Latency Tech To 5G For the First Time](https://tech.slashdot.org/story/25/07/21/1447258/t-mobile-is-bringing-low-latency-tech-to-5g-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 14:31:34](https://lobste.rs/s/svrctd/rickrolling_turso_db_sqlite_rewrite_rust) - [Rickrolling Turso DB (SQLite rewrite in Rust)](https://avi.im/blag/2025/rickrolling-turso/)
* [2025-07-21, 13:20:45](https://lobste.rs/s/uzzuto/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/uzzuto/what_are_you_doing_this_week)
* [2025-07-21, 12:34:37](https://lobste.rs/s/qykvpg/deeper_theories_program_design) - [Deeper theories of program design](https://typesanitizer.com/blog/deeper-theories.html)
* [2025-07-21, 12:27:24](https://news.ycombinator.com/item?id=44634340) - [I&apos;ve launched 37 products in 5 years and not doing that again](https://www.indiehackers.com/post/ive-launched-37-products-in-5-years-and-not-doing-that-again-0b66e6e8b3)
* [2025-07-21, 12:13:19](https://lobste.rs/s/adii2s/dissertation_typesetting) - [Dissertation Typesetting Considerations](https://tony-zorman.com/posts/phd-typesetting.html)
* [2025-07-21, 11:11:27](https://lobste.rs/s/xeqwij/gren_25s_easier_interop_concurrent_tasks) - [Gren 25S: Easier interop, concurrent tasks and zero-install packages](https://gren-lang.org/news/250721_gren_25s/)
* [2025-07-21, 10:55:00](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss) - [Delta Air Lines is Using AI to Set the Maximum Price You’re Willing to Pay](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss)
* [2025-07-21, 10:03:07](https://lobste.rs/s/hxgrd2/safe_cell_field_projection_rust_2020) - [Safe Cell field projection in Rust (2020)](https://www.abubalay.com/blog/2020/01/05/cell-field-projection)
* [2025-07-21, 08:14:44](https://lobste.rs/s/dvzkbd/how_do_you_bundle_application_data) - [How do you bundle application data in different languages?](https://lobste.rs/s/dvzkbd/how_do_you_bundle_application_data)
* [2025-07-21, 06:09:00](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss) - [For Algorithms, a Little Memory Outweighs a Lot of Time](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss)
* [2025-07-21, 01:22:00](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss) - [Open, Free, and Completely Ignored: The Strange Afterlife of Symbian](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss)
* [2025-07-20, 23:32:43](https://lobste.rs/s/tpmdss/why_lexing_parsing_should_be_separate) - [Why Lexing and Parsing Should Be Separate](https://github.com/oils-for-unix/oils/wiki/Why-Lexing-and-Parsing-Should-Be-Separate)
* [2025-07-20, 21:58:06](https://news.ycombinator.com/item?id=44629710) - [Global hack on Microsoft Sharepoint hits U.S., state agencies, researchers say](https://www.washingtonpost.com/technology/2025/07/20/microsoft-sharepoint-hack/)
* [2025-07-20, 20:35:00](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss) - [Iran Seeks Three Cloud Providers To Power Its Government](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss)
* [2025-07-20, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss) - [Remote Access Trojan (RAT) Found in the AUR (Arch Linux User Repository)](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss)
* [2025-07-20, 17:00:46](https://lobste.rs/s/ihmxdn/they_re_putting_blue_food_coloring) - [They&apos;re putting blue food coloring in everything](https://blog.foxtrotluna.social/theyre-putting-blue-food-coloring-in-everything/)
* [2025-07-20, 15:49:00](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss) - [Intel Has Discontinued Clear Linux, Effective Immediately](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss)
* [2025-07-20, 12:22:09](https://lobste.rs/s/6ifojq/coding_with_llms_summer_2025_update) - [Coding with LLMs in the summer of 2025 (an update)](https://antirez.com/news/154)
* [2025-07-20, 11:04:00](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss) - [The Latest Windows PCs Remember Everything](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss)
* [2025-07-20, 06:18:00](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss) - [Infographic: Every Microsoft Acquisition Since 1986](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss)
* [2025-07-20, 01:33:00](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss) - [Is Tor Trustworthy and Safe?](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss)
* [2025-07-19, 20:33:00](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss) - [The Fascinating Science of Pain – and Why Everyone Feels it Differently](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss)
* [2025-07-19, 15:50:00](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss) - [FuguIta: OpenBSD Live CD - Desktop Environment Demo Version with XFCE v.4.20.0](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss)
* [2025-07-19, 12:41:15](https://news.ycombinator.com/item?id=44615033) - [NASA’s X-59 quiet supersonic aircraft begins taxi tests](https://www.nasa.gov/image-article/nasas-x-59-quiet-supersonic-aircraft-begins-taxi-tests/)
* [2025-07-19, 11:08:00](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss) - [Most Warming This Century May Be Due To Air Pollution Cuts](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss)
* [2025-07-19, 06:20:00](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss) - [Two Guys Hated Using Comcast, So They Built Their Own Fiber ISP](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss)
* [2025-07-19, 01:37:00](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss) - [Radio Hobbyists, Rejoice! Good News for LoRa &amp; Mesh](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss)
* [2025-07-19, 00:17:10](https://news.ycombinator.com/item?id=44611298) - [Tokyo&apos;s retro shotengai arcades are falling victim to gentrification](https://www.theguardian.com/world/2025/jul/18/cult-of-convenience-how-tokyos-retro-shotengai-arcades-are-falling-victim-to-gentrification)
* [2025-07-18, 20:55:00](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss) - [Drones, AI and Robot Pickers: Meet the Fully Autonomous Farm](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss)
* [2025-07-18, 16:31:42](https://news.ycombinator.com/item?id=44606653) - [Look up macOS system binaries](https://macosbin.com)
* [2025-07-18, 16:10:00](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss) - [DOGE Staffer With Access to Americans&apos; Personal Data Leaked Private xAI API Key](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss)
* [2025-07-18, 14:47:16](https://news.ycombinator.com/item?id=44605245) - [Losing language features: some stories about disjoint unions](https://graydon2.dreamwidth.org/318788.html)
* [2025-07-18, 11:26:00](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss) - [Intel Axes Thousands of Technicians and Engineers in Sweeping U.S. Layoffs](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss)
* [2025-07-18, 08:55:56](https://news.ycombinator.com/item?id=44602609) - [An unprecedented window into how diseases take hold years before symptoms appear](https://www.bloomberg.com/news/articles/2025-07-18/what-scientists-learned-scanning-the-bodies-of-100-000-brits)
* [2025-07-18, 07:35:49](https://news.ycombinator.com/item?id=44602197) - [What happens when an octopus engages with art?](https://www.cnn.com/2025/07/17/style/what-happens-when-an-octopus-engages-with-art)
* [2025-07-18, 06:49:00](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss) - [Engineering the Origin of the Wheel](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss)
* [2025-07-18, 02:05:00](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss) - [Nvidia Chips Become the First GPUs to Fall to Rowhammer Bit-Flip Attacks](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss)
