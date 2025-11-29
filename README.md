# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Uber Launches Driverless Robotaxi Service in Abu Dhabi, and Plans Many More](https://tech.slashdot.org/story/25/11/29/0727225/uber-launches-driverless-robotaxi-service-in-abu-dhabi-and-plans-many-more?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Uber has officially started a driverless robotaxi service in Abu Dhabi and plans to expand similar services to other regions.

* [System 7 natively boots on the Mac mini G4](https://macos9lives.com/smforum/index.php?topic=7711.0) - A retro computing enthusiast successfully booted System 7 on the Mac Mini G4, pushing the boundaries of operating system legacy compatibility.

* [New Hyperloop Projects Continue in Europe](https://tech.slashdot.org/story/25/11/29/0557235/new-hyperloop-projects-continue-in-europe?utm_source=rss1.0mainlinkanon&utm_medium=feed) - European countries continue to invest in hyperloop initiatives aimed at revolutionizing transit systems across the continent.

* [Magiclip – an all-in-one AI studio](https://magiclip.io/) - An innovative AI studio comes to life, promising to simplify workflows and optimize collaborative tools.

* [Beijing Unveils Supercritical CO2 Turbine That Could Upend Power Tech](https://soylentnews.org/article.pl?sid=25/11/26/149224&from=rss) - A groundbreaking supercritical CO2 turbine from Beijing may revolutionize energy capabilities.

## Scientific Advancements

* [We&apos;re learning more about what Vitamin D does to our bodies](https://www.technologyreview.com/2025/11/21/1128206/vitamin-d-bodies-bone-health-immune/) - Research sheds light on the extended health implications of Vitamin D beyond traditional bone health benefits.

* [Scientists Think They&apos;ve Solved Why One of History&apos;s Most Advanced Civilizations Vanished](https://science.slashdot.org/story/25/11/28/1721249/scientists-think-theyve-solved-why-one-of-historys-most-advanced-civilizations-vanished?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Experts claim to have deciphered causes behind the mysterious disappearance of a once thriving civilization.

* [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&from=rss) - A new method to eliminate harmful PFAS from activated carbon has been discovered.

## Environmental and Societal Risks

* [Iceland declares ocean-current instability a national security risk](https://www.dagens.com/news/iceland-declares-ocean-current-instability-a-national-security-risk) - Iceland officially recognizes the threats posed by unstable ocean currents on national security.

* [Airbus Issues Major A320 Recall, Threatening Global Flight Disruption](https://news.slashdot.org/story/25/11/29/0515215/airbus-issues-major-a320-recall-threatening-global-flight-disruption?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major recall for A320 aircraft potentially impacts global flight schedules significantly.

## Privacy and Cryptography

* [Chainalysis Successful Deanonymization Attack on Monero](https://darkwebinformer.com/chainalysis-successful-deanonymization-attack-on-monero-2/) - Chainalysis reports a successful attack on Monero, raising significant privacy concerns.

* [Tor Switches to New Counter Galois Onion Relay Encryption Algorithm](https://soylentnews.org/article.pl?sid=25/11/26/1550227&from=rss) - The Tor network adopts a novel encryption algorithm to reinforce onion relay security.

## Legacy Computing and Engineering Insights

* [Rope science, part 11 - practical syntax highlighting (2017)](https://xi-editor.io/docs/rope_science_11.html) - Detailed exploration of efficient text representations for advancing editor capabilities.

* [Garfield&apos;s Proof of the Pythagorean Theorem](https://en.wikipedia.org/wiki/Garfield%27s_proof_of_the_Pythagorean_theorem) - A spotlight on James Garfield’s geometric proof of the Pythagorean theorem highlights mathematical history.

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

* [2025-11-29, 18:34:00](https://tech.slashdot.org/story/25/11/29/0727225/uber-launches-driverless-robotaxi-service-in-abu-dhabi-and-plans-many-more?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Launches Driverless Robotaxi Service in Abu Dhabi, and Plans Many More](https://tech.slashdot.org/story/25/11/29/0727225/uber-launches-driverless-robotaxi-service-in-abu-dhabi-and-plans-many-more?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 18:19:29](https://news.ycombinator.com/item?id=46089579) - [An Update on the Farphone&apos;s Battery](https://far.computer/battery-update/)
* [2025-11-29, 17:53:57](https://news.ycombinator.com/item?id=46089394) - [Zero Knowlege Proof of Compositeness](https://www.johndcook.com/blog/2025/11/29/zkp-composite/)
* [2025-11-29, 17:34:00](https://hardware.slashdot.org/story/25/11/29/0629207/how-bad-will-ram-and-memory-shortages-get?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Bad Will RAM and Memory Shortages Get?](https://hardware.slashdot.org/story/25/11/29/0629207/how-bad-will-ram-and-memory-shortages-get?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 17:00:23](https://news.ycombinator.com/item?id=46089008) - [AccessOwl (YC S22) Is Hiring a Technical Account Manager (IAM)](https://www.ycombinator.com/companies/accessowl/jobs/dGC3pcO-technical-account-manager-identity-access-management)
* [2025-11-29, 16:58:58](https://news.ycombinator.com/item?id=46088998) - [We&apos;re learning more about what Vitamin D does to our bodies](https://www.technologyreview.com/2025/11/21/1128206/vitamin-d-bodies-bone-health-immune/)
* [2025-11-29, 16:44:34](https://lobste.rs/s/qtsdoi/schubfach_smallest_state_art_double) - [Schubfach: The smallest state-of-the-art double-to-string implementation](https://vitaut.net/posts/2025/smallest-dtoa/)
* [2025-11-29, 16:41:56](https://lobste.rs/s/ycwei1/setting_wallpaper_with_less_than_250_kb) - [Setting a wallpaper with less than 250 Kb](https://www.lgfae.com/posts/2025-11-21-SettingAWallpaperWithLessThan250KB.html)
* [2025-11-29, 16:35:50](https://lobste.rs/s/uxqquq/system_7_natively_boots_on_mac_mini_g4) - [System 7 natively boots on the Mac mini G4](https://macos9lives.com/smforum/index.php?topic=7711.0)
* [2025-11-29, 16:34:00](https://tech.slashdot.org/story/25/11/29/0557235/new-hyperloop-projects-continue-in-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Hyperloop Projects Continue in Europe](https://tech.slashdot.org/story/25/11/29/0557235/new-hyperloop-projects-continue-in-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 16:05:37](https://lobste.rs/s/d9ionb/context_plumbing) - [Context plumbing](https://interconnected.org/home/2025/11/28/plumbing)
* [2025-11-29, 15:34:00](https://entertainment.slashdot.org/story/25/11/29/0457250/viral-song-created-with-sunos-genai-removed-from-streaming-platforms-re-released-with-human-vocals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Viral Song Created with Suno&apos;s genAI Removed From Streaming Platforms, Re-Released With Human Vocals](https://entertainment.slashdot.org/story/25/11/29/0457250/viral-song-created-with-sunos-genai-removed-from-streaming-platforms-re-released-with-human-vocals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 15:26:58](https://news.ycombinator.com/item?id=46088236) - [Major AI conference flooded with peer reviews written by AI](https://www.nature.com/articles/d41586-025-03506-6)
* [2025-11-29, 15:21:29](https://news.ycombinator.com/item?id=46088192) - [Iceland declares ocean-current instability a national security risk](https://www.dagens.com/news/iceland-declares-ocean-current-instability-a-national-security-risk)
* [2025-11-29, 14:22:18](https://lobste.rs/s/gtcrvu/langjam_gamejam_build_programming) - [Langjam Gamejam: Build a programming language then make a game with it](https://langjamgamejam.com/)
* [2025-11-29, 14:20:46](https://news.ycombinator.com/item?id=46087737) - [It&apos;s Always the Process, Stupid](https://its.promp.td/its-always-the-process-stupid/)
* [2025-11-29, 14:02:23](https://news.ycombinator.com/item?id=46087596) - [DNS LOC Record (2014)](https://blog.cloudflare.com/the-weird-and-wonderful-world-of-dns-loc-records/)
* [2025-11-29, 13:59:35](https://lobste.rs/s/dw73zv/symfonycon_2025_talks_slides_code) - [SymfonyCon 2025 talks, slides and code examples are on GitHub](https://github.com/SymfonyCon/2025-talks)
* [2025-11-29, 13:56:04](https://news.ycombinator.com/item?id=46087549) - [Hachi: An Image Search Engine](https://eagledot.xyz/hachi.md.html)
* [2025-11-29, 13:00:00](https://slashdot.org/story/25/11/28/1442237/openai-partners-amass-100-billion-debt-pile-to-fund-its-ambitions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Partners Amass $100 Billion Debt Pile To Fund Its Ambitions](https://slashdot.org/story/25/11/28/1442237/openai-partners-amass-100-billion-debt-pile-to-fund-its-ambitions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 12:59:02](https://lobste.rs/s/vthifs/what_do_when_creating_your_codeql) - [What to Do When Creating Your CodeQL Database Fails – and How to Report the Perfect Reproducer Using cvise](https://intrigus.org/research/2025/11/28/what-to-do-when-codeql-database-creation-fails/)
* [2025-11-29, 12:53:02](https://lobste.rs/s/ehcqlu/airbus_issues_major_a320_recall_due) - [Airbus issues major A320 recall due to software issue](https://www.reuters.com/business/aerospace-defense/airbus-issues-major-a320-recall-after-flight-control-incident-2025-11-28/)
* [2025-11-29, 12:26:54](https://news.ycombinator.com/item?id=46087029) - [Chainalysis Successful Deanonymization Attack on Monero](https://darkwebinformer.com/chainalysis-successful-deanonymization-attack-on-monero-2/)
* [2025-11-29, 12:26:00](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss) - [This Linux OS Has Got a Million Downloads Since Windows 10 Support Ended](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss)
* [2025-11-29, 12:25:35](https://news.ycombinator.com/item?id=46087022) - [The CRDT Dictionary: A Field Guide to Conflict-Free Replicated Data Types](https://www.iankduncan.com/engineering/2025-11-27-crdt-dictionary/)
* [2025-11-29, 12:04:23](https://news.ycombinator.com/item?id=46086920) - [Show HN: I built Magiclip – an all-in-one AI studio](https://magiclip.io/)
* [2025-11-29, 11:00:00](https://news.slashdot.org/story/25/11/28/151231/officials-clashed-in-investigation-of-deadly-air-india-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Officials Clashed in Investigation of Deadly Air India Crash](https://news.slashdot.org/story/25/11/28/151231/officials-clashed-in-investigation-of-deadly-air-india-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 08:01:00](https://news.slashdot.org/story/25/11/28/1516243/the-mysterious-black-fungus-from-chernobyl-that-may-eat-radiation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Mysterious Black Fungus From Chernobyl That May Eat Radiation](https://news.slashdot.org/story/25/11/28/1516243/the-mysterious-black-fungus-from-chernobyl-that-may-eat-radiation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 07:43:00](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss) - [Americans with four-year degrees now comprise a record 25% of unemployed workers](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss)
* [2025-11-29, 07:26:00](https://lobste.rs/s/cljhyb/self_hosting_my_photos_with_immich) - [Self-hosting my photos with Immich](https://michael.stapelberg.ch/posts/2025-11-29-self-hosting-photos-with-immich/)
* [2025-11-29, 07:20:52](https://lobste.rs/s/7v8oy2/acmeleaf_simple_declarative_dns_01_acme) - [acmeleaf: Simple declarative DNS-01 ACME client](https://codeberg.org/lindenii/acmeleaf)
* [2025-11-29, 06:37:05](https://news.ycombinator.com/item?id=46085585) - [Garfield&apos;s Proof of the Pythagorean Theorem](https://en.wikipedia.org/wiki/Garfield%27s_proof_of_the_Pythagorean_theorem)
* [2025-11-29, 06:10:27](https://lobste.rs/s/dd97sm/no_more_self_censorship) - [No More Self-Censorship](https://kerrick.blog/articles/2025/confessions-of-a-software-developer-no-more-self-censorship/)
* [2025-11-29, 05:15:00](https://news.slashdot.org/story/25/11/29/0515215/airbus-issues-major-a320-recall-threatening-global-flight-disruption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbus Issues Major A320 Recall, Threatening Global Flight Disruption](https://news.slashdot.org/story/25/11/29/0515215/airbus-issues-major-a320-recall-threatening-global-flight-disruption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 05:01:00](https://apple.slashdot.org/story/25/11/28/172222/eu-to-examine-if-apple-ads-and-maps-subject-to-tough-rules-apple-says-no?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU To Examine If Apple Ads and Maps Subject To Tough Rules, Apple Says No](https://apple.slashdot.org/story/25/11/28/172222/eu-to-examine-if-apple-ads-and-maps-subject-to-tough-rules-apple-says-no?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 04:46:18](https://lobste.rs/s/ltpdkh/adventures_with_chimera_linux) - [Adventures with Chimera Linux](https://blog.xiaket.org/2025/chimera.html)
* [2025-11-29, 04:42:51](https://lobste.rs/s/hv9zpj/popping_locking_zed_theme) - [popping-and-locking-zed-theme](https://github.com/randoneering/popping-and-locking-zed-theme)
* [2025-11-29, 03:26:01](https://news.ycombinator.com/item?id=46084956) - [System 7 natively boots on the Mac mini G4](https://macos9lives.com/smforum/index.php?topic=7711.0)
* [2025-11-29, 02:58:00](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss) - [China Launches Shenzhou-22 Early for Stranded Space Station Crew](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss)
* [2025-11-29, 02:02:00](https://science.slashdot.org/story/25/11/28/1721249/scientists-think-theyve-solved-why-one-of-historys-most-advanced-civilizations-vanished?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Think They&apos;ve Solved Why One of History&apos;s Most Advanced Civilizations Vanished](https://science.slashdot.org/story/25/11/28/1721249/scientists-think-theyve-solved-why-one-of-historys-most-advanced-civilizations-vanished?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-29, 01:37:42](https://news.ycombinator.com/item?id=46084535) - [Every mathematician has only a few tricks (2020)](https://mathoverflow.net/questions/363119/every-mathematician-has-only-a-few-tricks)
* [2025-11-29, 00:32:24](https://lobste.rs/s/sn1nq2/rope_science_part_11_practical_syntax) - [Rope science, part 11 - practical syntax highlighting (2017)](https://xi-editor.io/docs/rope_science_11.html)
* [2025-11-28, 23:35:00](https://slashdot.org/story/25/11/28/1636212/china-netherlands-chip-fight-turns-into-corporate-civil-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China-Netherlands Chip Fight Turns Into Corporate Civil War](https://slashdot.org/story/25/11/28/1636212/china-netherlands-chip-fight-turns-into-corporate-civil-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 22:21:25](https://news.ycombinator.com/item?id=46083303) - [Confessions of a Software Developer: No More Self-Censorship](https://kerrick.blog/articles/2025/confessions-of-a-software-developer-no-more-self-censorship/)
* [2025-11-28, 22:06:00](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss) - [Cryptology Firm Cancels Elections After Losing Encryption Key](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss)
* [2025-11-28, 22:02:57](https://lobste.rs/s/jxppk7/how_good_engineers_write_bad_code_at_big) - [How good engineers write bad code at big companies](https://www.seangoedecke.com/bad-code-at-big-companies/)
* [2025-11-28, 21:40:21](https://news.ycombinator.com/item?id=46083004) - [Airbus A320 – intense solar radiation may corrupt data critical for flight](https://www.airbus.com/en/newsroom/press-releases/2025-11-airbus-update-on-a320-family-precautionary-fleet-action)
* [2025-11-28, 21:31:00](https://news.slashdot.org/story/25/11/28/1654207/australia-risks-2035-climate-goal-without-bigger-emissions-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia Risks 2035 Climate Goal Without Bigger Emissions Cuts](https://news.slashdot.org/story/25/11/28/1654207/australia-risks-2035-climate-goal-without-bigger-emissions-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 21:20:38](https://lobste.rs/s/0nveim/brief_history_nsa_backdoors_2013) - [A Brief History of NSA Backdoors (2013)](https://www.ethanheilman.com/x/12/index.html)
* [2025-11-28, 20:02:00](https://news.slashdot.org/story/25/11/28/1646244/singapore-takes-top-spot-in-global-talent-index?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Singapore Takes Top Spot in Global Talent Index](https://news.slashdot.org/story/25/11/28/1646244/singapore-takes-top-spot-in-global-talent-index?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 19:24:05](https://lobste.rs/s/wizzoj/oss_friday_update_fiber_scheduler_is) - [OSS Friday Update - The Fiber Scheduler is Taking Shape](https://noteflakes.com/articles/2025-11-28-friday-update)
* [2025-11-28, 19:00:00](https://slashdot.org/story/25/11/28/1712223/europe-fears-it-cant-catch-up-in-great-power-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe Fears It Can&apos;t Catch Up in Great Power Competition](https://slashdot.org/story/25/11/28/1712223/europe-fears-it-cant-catch-up-in-great-power-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 18:21:55](https://lobste.rs/s/404y8w/tiny_tpu) - [Tiny TPU](https://www.tinytpu.com/)
* [2025-11-28, 18:15:50](https://news.ycombinator.com/item?id=46081188) - [Imgur geo-blocked the UK, so I geo-unblocked my network](https://blog.tymscar.com/posts/imgurukproxy/)
* [2025-11-28, 18:01:00](https://apple.slashdot.org/story/25/11/28/1531245/someone-is-trying-to-hack-people-through-apple-podcasts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Someone Is Trying To &apos;Hack&apos; People Through Apple Podcasts](https://apple.slashdot.org/story/25/11/28/1531245/someone-is-trying-to-hack-people-through-apple-podcasts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 17:48:25](https://news.ycombinator.com/item?id=46080916) - [Molly: An Improved Signal App](https://molly.im/)
* [2025-11-28, 17:21:00](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss) - [Rust For Linux Kernel Co-Maintainer Formally Steps Down](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss)
* [2025-11-28, 16:54:56](https://news.ycombinator.com/item?id=46080364) - [So you wanna build a local RAG?](https://blog.yakkomajuri.com/blog/local-rag)
* [2025-11-28, 15:59:49](https://lobste.rs/s/0i4chy/don_t_tug_on_you_never_know_what_it_might_be) - [Don&apos;t tug on that, you never know what it might be attached to (2016)](https://blog.plover.com/2016/07/01/#tmpdir)
* [2025-11-28, 15:30:03](https://lobste.rs/s/xbsdvw/bfs_breadth_first_version_unix_find) - [bfs: A breadth-first version of the UNIX find command](https://github.com/tavianator/bfs)
* [2025-11-28, 13:57:54](https://lobste.rs/s/l77zlu/update_on_farphone_s_battery) - [An update on the farphone&apos;s battery](https://far.computer/battery-update/)
* [2025-11-28, 12:37:00](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss) - [Tor Switches to New Counter Galois Onion Relay Encryption Algorithm](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss)
* [2025-11-28, 11:16:06](https://lobste.rs/s/ogf9hk/help_my_java_object_vanished_gc_is_not_at) - [Help, My Java Object Vanished (and the GC is Not at Fault)](https://arraying.de/posts/markword/)
* [2025-11-28, 10:46:09](https://lobste.rs/s/60v35g/crdt_dictionary_field_guide_conflict) - [The CRDT Dictionary: A Field Guide to Conflict-Free Replicated Data Types](https://www.iankduncan.com/engineering/2025-11-27-crdt-dictionary)
* [2025-11-28, 09:55:11](https://lobste.rs/s/9rpx3i/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/9rpx3i/what_are_you_doing_this_weekend)
* [2025-11-28, 08:45:32](https://lobste.rs/s/ybp9wx/is_matrix_multiplication_ugly) - [Is Matrix Multiplication Ugly?](https://mathenchant.wordpress.com/2025/11/21/is-matrix-multiplication-ugly/)
* [2025-11-28, 07:53:00](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss) - [Beijing Unveils Supercritical CO2 Turbine That Could Upend Power Tech](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss)
* [2025-11-28, 03:12:00](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss) - [The Unpowered SSDs in Your Drawer Are Slowly Losing Your Data](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss)
* [2025-11-27, 22:23:00](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss) - [Horse Virus EHV-1 Outbreak Spreads to Eight Texas Counties: Two Horses Have Died](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss)
* [2025-11-27, 17:38:00](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss) - [Scientists Unveil Breakthrough Low-Temperature Fuel Cell That Could Revolutionize Hydrogen Power](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss)
* [2025-11-27, 12:53:00](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss) - [Myths About Rapid Spread of the Black Death Influenced by Single “Literary Tale”](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss)
* [2025-11-27, 08:10:00](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss) - [A Rare GM EV1 Saved From The Crusher is Going to be Driveable Again](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss)
* [2025-11-27, 03:26:00](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss) - [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss)
* [2025-11-26, 22:43:00](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss) - [The Escape Room Challenge: How One Person&apos;s Narcissism Can Undermine a Whole Team](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss)
* [2025-11-26, 17:55:00](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss) - [Mozilla Resolves 21-Year-Old Bug, Adds Full XDG Directory Support](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss)
* [2025-11-26, 13:11:00](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss) - [The Reshoring Initiative - Real Reasons to Bring Jobs Back to USA From Asia](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss)
* [2025-11-26, 12:20:04](https://news.ycombinator.com/item?id=46056715) - [Running a Business Means Contact with Reality](https://fredkozlowski.com/2025/11/02/running-a-business-means-contact-with-reality/)
* [2025-11-26, 08:24:00](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) - [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss)
* [2025-11-26, 07:03:27](https://news.ycombinator.com/item?id=46054879) - [Anthony Bourdain&apos;s Lost Li.st&apos;s](https://bourdain.greg.technology/)
* [2025-11-26, 03:41:00](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss) - [HP and Dell Disable HEVC Support Built Into Their Laptops’ CPUs](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss)
* [2025-11-25, 22:57:00](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss) - [Is Matrix Multiplication Ugly?](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss)
* [2025-11-25, 22:03:00](https://news.ycombinator.com/item?id=46051332) - [Building road signs at home using a Cricut Machine](https://annanay.dev/build-a-signboard/)
* [2025-11-25, 18:12:00](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss) - [In 1982, a Physics Joke Gone Wrong Sparked the Invention of the Emoticon](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss)
* [2025-11-25, 13:28:00](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss) - [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss)
* [2025-11-25, 12:34:25](https://news.ycombinator.com/item?id=46045207) - [WinApps: Run Windows apps as if they were a part of the native Linux OS](https://github.com/winapps-org/winapps)
* [2025-11-25, 08:41:00](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss) - [I Set a Trap to Catch My Students Cheating With AI and the Results Were Shocking](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss)
* [2025-11-25, 07:43:39](https://news.ycombinator.com/item?id=46043318) - [Build Your Own Router with URLPattern()](https://jschof.dev/posts/2025/11/build-your-own-router/)
* [2025-11-25, 04:00:00](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss) - [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss)
