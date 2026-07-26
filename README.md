# [News Summary](https://kherrick.github.io/news-summary/)

## Retro Tech Perspectives

* [No Stack Overflow, No Autocomplete: What Coding Felt Like in the 80s](https://comuniq.xyz/post?t=1439) ([Comments](https://news.ycombinator.com/item?id=49056424))

## Technology Advancements

* [Ruff v0.16.0 – Significant new updates – 413 default rules up from 59](https://astral.sh/blog/ruff-v0.16.0) ([Comments](https://news.ycombinator.com/item?id=49056112))

* [GrapheneOS protections against data extraction from locked devices](https://discuss.grapheneos.org/d/40700-grapheneos-protections-against-data-extraction-from-locked-devices) ([Comments](https://news.ycombinator.com/item?id=49055169))

* [Himalaya v2.0.0: CLI to manage emails](https://fosstodon.org/@pimalaya/116983467890532240) ([Comments](https://lobste.rs/s/sd5em2/himalaya_v2_0_0_cli_manage_emails))

* [Inflect-Micro-v2: complete voice in 9.36M parameters](https://huggingface.co/owensong/Inflect-Micro-v2) ([Comments](https://news.ycombinator.com/item?id=49053375))

* [JetZero](https://www.jetzero.aero) ([Comments](https://news.ycombinator.com/item?id=49054224))

## Space Discoveries

* [Astronomers Found the First Atmosphere on a Planet in Another Star's Habitable Zone](https://soylentnews.org/article.pl?sid=26/07/25/2045217&amp;from=rss) ([Comments](https://news.ycombinator.com/item?id=49055169))

* [Alien World Chemistry Found Inside Meteorite That Struck New Jersey Home](https://www.seti.org/news/alien-world-chemistry-found-inside-meteorite/) ([Comments](https://news.ycombinator.com/item?id=49053708))

## AI and Software Discussions

* [32 of 35 Students Caught Using Hilariously Wrong AI-Generated Answers for Professor's Midterm](https://news.slashdot.org/story/26/07/25/2114259/32-of-35-students-caught-using-hilariously-wrong-ai-generated-answers-for-professors-midterm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=49053382))

* [Cloudflare's new AI traffic options for customers](https://blog.cloudflare.com/content-independence-day-ai-options/) ([Comments](https://news.ycombinator.com/item?id=49052564))

* [LLM Usage in Debian: Three Proposals](https://www.debian.org/vote/2026/vote_002) ([Comments](https://news.ycombinator.com/item?id=49050859))

* [Amazon Cracks Down On Use of AI Images By Sellers](https://slashdot.org/story/26/07/25/0545246/amazon-cracks-down-on-use-of-ai-images-by-sellers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=49050512))

## Science Breakthroughs

* [Drying Lakebeds Are Releasing Massive Amounts of Carbon, Study Finds](https://news.slashdot.org/story/26/07/25/0417232/drying-lakebeds-are-releasing-massive-amounts-of-carbon-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=49051947))

* [China is Creating a Herd of 100 Elite Yak Clones](https://science.slashdot.org/story/26/07/25/1656259/china-is-creating-a-herd-of-100-elite-yak-clones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=49054532))

## Entertainment and Media

* [Comic-Con 2026 Debuts Trailers for 'Coyote vs Acme' Movie, Plus 'Neuromancer' and 'Blade Runner 2099' Series](https://entertainment.slashdot.org/story/26/07/26/038200/comic-con-2026-debuts-trailers-for-coyote-vs-acme-movie-plus-neuromancer-and-blade-runner-2099-series?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=49053385))

## Industry and Consumer Impacts

* [Hyundai Claims Humanoid Robot Plan Is Not Part of Talks With Striking Workers](https://hardware.slashdot.org/story/26/07/25/0343230/hyundai-claims-humanoid-robot-plan-is-not-part-of-talks-with-striking-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=49055211))

* [Did Virginia Regulators Downplay Data Center Health Concerns?](https://hardware.slashdot.org/story/26/07/25/1747227/did-virginia-regulators-downplay-data-center-health-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=49053106))

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

* [2026-07-26, 09:58:11](https://news.ycombinator.com/item?id=49056424) - [No Stack Overflow, No Autocomplete: What Coding Felt Like in the 80s](https://comuniq.xyz/post?t=1439)
* [2026-07-26, 09:01:39](https://news.ycombinator.com/item?id=49056112) - [Ruff v0.16.0 – Significant new updates – 413 default rules up from 59](https://astral.sh/blog/ruff-v0.16.0)
* [2026-07-26, 07:34:00](https://entertainment.slashdot.org/story/26/07/26/038200/comic-con-2026-debuts-trailers-for-coyote-vs-acme-movie-plus-neuromancer-and-blade-runner-2099-series?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comic-Con 2026 Debuts Trailers for &apos;Coyote vs Acme&apos; Movie, Plus &apos;Neuromancer&apos; and &apos;Blade Runner 2099&apos; Series](https://entertainment.slashdot.org/story/26/07/26/038200/comic-con-2026-debuts-trailers-for-coyote-vs-acme-movie-plus-neuromancer-and-blade-runner-2099-series?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-26, 05:57:22](https://news.ycombinator.com/item?id=49055169) - [GrapheneOS protections against data extraction from locked devices](https://discuss.grapheneos.org/d/40700-grapheneos-protections-against-data-extraction-from-locked-devices)
* [2026-07-26, 05:43:00](https://soylentnews.org/article.pl?sid=26/07/25/2045217&amp;from=rss) - [Astronomers Found the First Atmosphere on a Planet in Another Star&apos;s Habitable Zone](https://soylentnews.org/article.pl?sid=26/07/25/2045217&amp;from=rss)
* [2026-07-26, 04:53:21](https://lobste.rs/s/jgaxxy/beginner_j_dealing_cards) - [Beginner J: Dealing Cards](https://www.youtube.com/watch?v=eXGKK8BkCkg)
* [2026-07-26, 04:19:59](https://news.ycombinator.com/item?id=49054697) - [W4ME Station – a WASM-4 runtime for Java ME phones](https://github.com/mulfyx/w4me-station)
* [2026-07-26, 03:34:00](https://news.slashdot.org/story/26/07/25/2114259/32-of-35-students-caught-using-hilariously-wrong-ai-generated-answers-for-professors-midterm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [32 of 35 Students Caught Using Hilariously Wrong AI-Generated Answers for Professor&apos;s Midterm](https://news.slashdot.org/story/26/07/25/2114259/32-of-35-students-caught-using-hilariously-wrong-ai-generated-answers-for-professors-midterm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-26, 03:15:08](https://lobste.rs/s/asgpfk/scanwheel_drum_style_mechanical) - [Scanwheel: a drum style mechanical television you can build yourself](https://github.com/AncientJames/Scanwheel/)
* [2026-07-26, 02:55:50](https://news.ycombinator.com/item?id=49054224) - [JetZero](https://www.jetzero.aero)
* [2026-07-26, 02:35:43](https://news.ycombinator.com/item?id=49054107) - [An ESP32 based plane radar for my desk](https://blog.ktz.me/esp32-plane-radar/)
* [2026-07-26, 02:22:26](https://news.ycombinator.com/item?id=49054010) - [Show HN: I mapped every US golf course](https://golfcoursebrowser.com/)
* [2026-07-26, 01:35:03](https://news.ycombinator.com/item?id=49053708) - [Alien World Chemistry Found Inside Meteorite That Struck New Jersey Home](https://www.seti.org/news/alien-world-chemistry-found-inside-meteorite/)
* [2026-07-26, 01:34:00](https://news.slashdot.org/story/26/07/25/1944229/firefoxs-new-tab-page-will-get-widgets---including-an-ai-powered-daily-crossword?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox&apos;s New Tab Page Will Get Widgets - Including an AI-Powered Daily Crossword](https://news.slashdot.org/story/26/07/25/1944229/firefoxs-new-tab-page-will-get-widgets---including-an-ai-powered-daily-crossword?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-26, 01:00:00](https://soylentnews.org/article.pl?sid=26/07/25/2042256&amp;from=rss) - [MIT to Become Hotbed of AI Video Surveillance](https://soylentnews.org/article.pl?sid=26/07/25/2042256&amp;from=rss)
* [2026-07-26, 00:45:08](https://lobste.rs/s/sd5em2/himalaya_v2_0_0_cli_manage_emails) - [Himalaya v2.0.0: CLI to manage emails](https://fosstodon.org/@pimalaya/116983467890532240)
* [2026-07-26, 00:37:54](https://news.ycombinator.com/item?id=49053385) - [Git rebase -I is not that scary](https://cachebag.sh/journal/interactive-rebasing/)
* [2026-07-26, 00:37:30](https://news.ycombinator.com/item?id=49053382) - [Systems and Delays](https://martin.janiczek.cz/2026/07/24/systems-and-delays.html)
* [2026-07-26, 00:36:30](https://news.ycombinator.com/item?id=49053375) - [Inflect-Micro-v2: complete voice in 9.36M parameters](https://huggingface.co/owensong/Inflect-Micro-v2)
* [2026-07-25, 23:32:50](https://news.ycombinator.com/item?id=49052912) - [DeepSeek pause fundraise after comments on compute gap to US leaked (transcript) [pdf]](https://github.com/demo-zexuan/liang-wenfeng-investor-meeting-2026-7-22/blob/master/%E6%A2%81%E6%96%87%E9%94%8B%E6%8A%95%E8%B5%84%E8%80%85%E4%BA%A4%E6%B5%81%E4%BC%9A-%E6%96%87%E5%AD%97%E7%A8%BF_1_18_translate_20260723201651.pdf)
* [2026-07-25, 23:00:00](https://hardware.slashdot.org/story/26/07/25/1747227/did-virginia-regulators-downplay-data-center-health-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Did Virginia Regulators Downplay Data Center Health Concerns?](https://hardware.slashdot.org/story/26/07/25/1747227/did-virginia-regulators-downplay-data-center-health-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 22:57:17](https://news.ycombinator.com/item?id=49052628) - [Clinical failure rates over the decades: yikes](https://www.science.org/content/blog-post/clinical-failure-rates-over-decades-yikes)
* [2026-07-25, 22:51:10](https://news.ycombinator.com/item?id=49052570) - [What is happening to jobs? Separating AI hype from reality](https://siepr.stanford.edu/publications/policy-brief/what-really-happening-jobs-separating-ai-hype-reality)
* [2026-07-25, 22:50:49](https://news.ycombinator.com/item?id=49052564) - [Cloudflare&apos;s new AI traffic options for customers](https://blog.cloudflare.com/content-independence-day-ai-options/)
* [2026-07-25, 22:13:07](https://lobste.rs/s/krsvrp/maybe_we_should_revisit_microkernels) - [Maybe we should revisit microkernels](https://notes.hella.cheap/maybe-we-should-revisit-microkernels.html)
* [2026-07-25, 22:00:00](https://news.slashdot.org/story/26/07/25/0417232/drying-lakebeds-are-releasing-massive-amounts-of-carbon-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Drying Lakebeds Are Releasing Massive Amounts of Carbon, Study Finds](https://news.slashdot.org/story/26/07/25/0417232/drying-lakebeds-are-releasing-massive-amounts-of-carbon-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 21:48:22](https://news.ycombinator.com/item?id=49051947) - [GM Backs Sodium Ion Batteries for U.S. Grid Storage](https://spectrum.ieee.org/sodium-ion-battery-peak-energy)
* [2026-07-25, 21:39:39](https://lobste.rs/s/bvjwbk/banner_highway_01) - [Banner Highway 01](https://highway-01.banner-depot-2000.net/)
* [2026-07-25, 21:38:29](https://lobste.rs/s/x7jtkt/memory_safety_absolutists) - [Memory Safety Absolutists](https://itsallaboutthebit.com/memory-safety-absolutists/)
* [2026-07-25, 21:32:58](https://lobste.rs/s/sh9bbn/how_self_host_servers_your_living_room_on) - [How to self-host servers in your living room on static IPs](https://vimuser.org/l2tp.html)
* [2026-07-25, 21:00:00](https://hardware.slashdot.org/story/26/07/25/0343230/hyundai-claims-humanoid-robot-plan-is-not-part-of-talks-with-striking-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hyundai Claims Humanoid Robot Plan Is Not Part of Talks With Striking Workers ](https://hardware.slashdot.org/story/26/07/25/0343230/hyundai-claims-humanoid-robot-plan-is-not-part-of-talks-with-striking-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 20:52:49](https://lobste.rs/s/utnhmy/how_i_find_problems_solve_as_staff) - [How I Find Problems to Solve as a Staff Engineer](https://lalitm.com/post/find-problems-staff-engineer/)
* [2026-07-25, 20:42:35](https://news.ycombinator.com/item?id=49051361) - [The new rules of context engineering for Claude 5 generation models](https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models)
* [2026-07-25, 20:17:00](https://soylentnews.org/article.pl?sid=26/07/25/2039220&amp;from=rss) - [Ben Thompson is Wrong: US [AI] Frontier Labs are Right to be Panicking](https://soylentnews.org/article.pl?sid=26/07/25/2039220&amp;from=rss)
* [2026-07-25, 20:00:00](https://slashdot.org/story/26/07/25/0545246/amazon-cracks-down-on-use-of-ai-images-by-sellers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Cracks Down On Use of AI Images By Sellers](https://slashdot.org/story/26/07/25/0545246/amazon-cracks-down-on-use-of-ai-images-by-sellers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 19:44:39](https://news.ycombinator.com/item?id=49050859) - [LLM Usage in Debian: Three Proposals](https://www.debian.org/vote/2026/vote_002)
* [2026-07-25, 19:00:00](https://news.slashdot.org/story/26/07/25/030246/top-online-sites-debate-cutting-off-googles-crawlers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Top Online Sites Debate Cutting Off Google&apos;s Crawlers](https://news.slashdot.org/story/26/07/25/030246/top-online-sites-debate-cutting-off-googles-crawlers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 18:59:50](https://news.ycombinator.com/item?id=49050512) - [Running a 28.9M parameter LLM on an $8 microcontroller](https://github.com/slvDev/esp32-ai)
* [2026-07-25, 18:19:08](https://lobste.rs/s/wee5yh/your_harddrive_is_probably_full) - [Your harddrive is probably full](https://www.marginalia.nu/log/a_139_hdd/)
* [2026-07-25, 18:00:00](https://science.slashdot.org/story/26/07/25/1656259/china-is-creating-a-herd-of-100-elite-yak-clones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China is Creating a Herd of 100 Elite Yak Clones](https://science.slashdot.org/story/26/07/25/1656259/china-is-creating-a-herd-of-100-elite-yak-clones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 17:34:34](https://news.ycombinator.com/item?id=49049693) - [Show HN: Brolly, a plain-text weather forecast site](https://brolly.sh/forecast/RWFP2qW8)
* [2026-07-25, 17:00:00](https://tech.slashdot.org/story/26/07/25/064249/facebook-offers-a-verification-system-certifying-to-other-users-that-youre-a-real-human?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Offers a Verification System Certifying to Other Users That You&apos;re a Real Human](https://tech.slashdot.org/story/26/07/25/064249/facebook-offers-a-verification-system-certifying-to-other-users-that-youre-a-real-human?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 16:10:47](https://lobste.rs/s/ygobr3/general_resolution_llm_usage_debian) - [General Resolution: LLM usage in Debian](https://www.debian.org/vote/2026/vote_002)
* [2026-07-25, 16:08:48](https://lobste.rs/s/usdhrd/verse_new_scripting_language) - [Verse: A New Scripting Language](https://youtube.com/watch?v=ebqKYLKjL6U)
* [2026-07-25, 16:00:00](https://science.slashdot.org/story/26/07/24/2246224/risks-of-parkinsons-disease-may-increase-with-prolonged-exposure-to-road-traffic-noise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Risks of Parkinson&apos;s Disease May Increase With Prolonged Exposure to Road Traffic Noise](https://science.slashdot.org/story/26/07/24/2246224/risks-of-parkinsons-disease-may-increase-with-prolonged-exposure-to-road-traffic-noise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 15:34:00](https://soylentnews.org/article.pl?sid=26/07/24/1452216&amp;from=rss) - [There Isn&apos;t a Single Consumer Wi-Fi Router That is 100% American-Made](https://soylentnews.org/article.pl?sid=26/07/24/1452216&amp;from=rss)
* [2026-07-25, 15:13:27](https://lobste.rs/s/ljg2qr/languages_as_designed_latent_spaces) - [Languages as designed latent spaces](https://blog.jsbarretto.com/post/languages-as-latent-spaces)
* [2026-07-25, 15:00:00](https://yro.slashdot.org/story/26/07/24/2111219/trump-threatens-new-tariffs-against-eu-over-google-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Threatens New Tariffs Against EU Over Google Fine](https://yro.slashdot.org/story/26/07/24/2111219/trump-threatens-new-tariffs-against-eu-over-google-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 13:33:49](https://news.ycombinator.com/item?id=49047453) - [A shell colon does nothing. Use it anyway](https://refp.se/articles/your-shell-and-the-magic-colon)
* [2026-07-25, 12:58:43](https://lobste.rs/s/s75zd9/zig_by_example) - [Zig by Example](https://zigbyexample.neocities.org/)
* [2026-07-25, 11:33:00](https://lobste.rs/s/eidh3u/shell_colon_does_nothing_use_it_anyway) - [A shell colon does nothing. Use it anyway](https://refp.se/articles/your-shell-and-the-magic-colon)
* [2026-07-25, 11:14:51](https://lobste.rs/s/pqkfur/emacs_writing_machine) - [Emacs Writing Machine](https://chainsawriot.com/postmannheim/2026/07/25/writeredeck.html)
* [2026-07-25, 11:00:00](https://tech.slashdot.org/story/26/07/25/014225/wine-1114-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wine 11.14 Released](https://tech.slashdot.org/story/26/07/25/014225/wine-1114-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 10:50:00](https://soylentnews.org/article.pl?sid=26/07/24/1448254&amp;from=rss) - [Alan Turing&apos;s Top Secret DIY Project](https://soylentnews.org/article.pl?sid=26/07/24/1448254&amp;from=rss)
* [2026-07-25, 10:01:03](https://lobste.rs/s/t5os1h/android_may_soon_restrict_on_device_adb) - [Android May Soon Restrict On-Device ADB, Affecting Shizuku, libadb and Developers](https://kitsumed.github.io/blog/posts/android-may-soon-restrict-on-device-adb/)
* [2026-07-25, 09:10:12](https://lobste.rs/s/bvgaff/stinkpot_sqlite_backed_shell_history) - [stinkpot: sqlite-backed shell history](https://tangled.org/oppi.li/stinkpot)
* [2026-07-25, 07:00:00](https://science.slashdot.org/story/26/07/25/0511222/spacexs-starship-megarocket-hits-key-milestones-in-lucky-13-test-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX&apos;s Starship Megarocket Hits Key Milestones in &apos;Lucky 13&apos; Test Flight](https://science.slashdot.org/story/26/07/25/0511222/spacexs-starship-megarocket-hits-key-milestones-in-lucky-13-test-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 06:57:14](https://news.ycombinator.com/item?id=49045159) - [Android may soon restrict on-device ADB](https://kitsumed.github.io/blog/posts/android-may-soon-restrict-on-device-adb/)
* [2026-07-25, 06:07:49](https://lobste.rs/s/ypgw9x/perils_parsing_type_inference) - [the perils of parsing type inference declarations in c](https://sebsite.pw/w/20260725-auto.html)
* [2026-07-25, 06:04:00](https://soylentnews.org/article.pl?sid=26/07/24/1428215&amp;from=rss) - [OpenAI&apos;s Rogue Agents are a Wake-up Call to Risks Posed by Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/07/24/1428215&amp;from=rss)
* [2026-07-25, 05:29:51](https://lobste.rs/s/yajc8q/i_m_running_icfp_programming_contest) - [I&apos;m running the ICFP programming contest](https://eieio.games/blog/im-running-the-icfp-programming-contest/)
* [2026-07-25, 03:30:00](https://yro.slashdot.org/story/26/07/25/0059247/openais-rogue-agent-went-unnoticed-for-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s Rogue Agent Went Unnoticed For a Week](https://yro.slashdot.org/story/26/07/25/0059247/openais-rogue-agent-went-unnoticed-for-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 03:00:20](https://lobste.rs/s/zfvln5/we_are_not_special_2021) - [We Are Not Special (2021)](https://www.hillelwayne.com/post/we-are-not-special/)
* [2026-07-25, 01:21:00](https://soylentnews.org/article.pl?sid=26/07/24/1423206&amp;from=rss) - [US Blocks SSL Security Certificates for Iran&apos;s Fars News Agency](https://soylentnews.org/article.pl?sid=26/07/24/1423206&amp;from=rss)
* [2026-07-24, 23:04:57](https://lobste.rs/s/c76s0r/chrome_registers_global_shortcut_for) - [Chrome registers a global shortcut for Gemini popup window](https://unsung.aresluna.org/chromes-breaking-and-entering/)
* [2026-07-24, 22:11:44](https://lobste.rs/s/yia0pc/systems_delays_2026) - [Systems and Delays (2026)](https://martin.janiczek.cz/2026/07/24/systems-and-delays.html)
* [2026-07-24, 20:37:00](https://soylentnews.org/article.pl?sid=26/07/23/229219&amp;from=rss) - [Former Microsoft AI Leaders Are Spending $1M to Prove AI Can Replace CEOs](https://soylentnews.org/article.pl?sid=26/07/23/229219&amp;from=rss)
* [2026-07-24, 20:34:19](https://lobste.rs/s/u60zv9/watching_go_s_new_garbage_collector_move) - [Watching Go&apos;s new garbage collector move through the heap](https://theconsensus.dev/p/2026/07/19/observing-gos-garbage-collector-old-and-new.html)
* [2026-07-24, 20:24:48](https://lobste.rs/s/khaizc/delightful_integration_tests_rust) - [Delightful integration tests in Rust](https://github.com/alexpusch/rust-magic-patterns/blob/master/delightful-integration-tests/Readme.md)
* [2026-07-24, 18:37:06](https://news.ycombinator.com/item?id=49039868) - [Show HN: I made some transistor animations](https://brandonli.net/semisim/animations)
* [2026-07-24, 15:55:00](https://soylentnews.org/article.pl?sid=26/07/23/225237&amp;from=rss) - [Scientists Believed This Near-Earth Object Was an Asteroid for 28 Years. They Were Wrong](https://soylentnews.org/article.pl?sid=26/07/23/225237&amp;from=rss)
* [2026-07-24, 14:24:29](https://lobste.rs/s/td8rne/don_t_take_black_pill) - [Don&apos;t take the black pill](https://www.youtube.com/watch?v=zLZwpH5lCD4)
* [2026-07-24, 12:44:32](https://news.ycombinator.com/item?id=49034777) - [Stinkpot: SQLite-backed shell history](https://tangled.org/oppi.li/stinkpot)
* [2026-07-24, 11:08:00](https://soylentnews.org/article.pl?sid=26/07/23/221216&amp;from=rss) - [I Wanted a Clock That Never Needed Setting. Things Escalated.](https://soylentnews.org/article.pl?sid=26/07/23/221216&amp;from=rss)
* [2026-07-24, 06:26:00](https://soylentnews.org/article.pl?sid=26/07/23/0249220&amp;from=rss) - [I Could&apos;ve Rickrolled the Entire FIFA World Cup and All I Needed Was My ID](https://soylentnews.org/article.pl?sid=26/07/23/0249220&amp;from=rss)
* [2026-07-24, 01:43:00](https://soylentnews.org/article.pl?sid=26/07/23/0234212&amp;from=rss) - [Former OpenAI CTO Does What Altman Won&apos;t: Releases a Frontier AI Model That&apos;s Actually Open](https://soylentnews.org/article.pl?sid=26/07/23/0234212&amp;from=rss)
* [2026-07-23, 21:17:34](https://news.ycombinator.com/item?id=49028169) - [Pip install Postgres – no Docker/Brew/apt](https://github.com/leontrolski/postgresql-testing)
* [2026-07-23, 20:55:00](https://soylentnews.org/article.pl?sid=26/07/23/0228206&amp;from=rss) - [NASA&apos;s Artemis III Will Need Three Rockets to Do the Job Apollo Did With One](https://soylentnews.org/article.pl?sid=26/07/23/0228206&amp;from=rss)
* [2026-07-23, 17:12:48](https://news.ycombinator.com/item?id=49024980) - [Rethinking Legal Education in the AI Era](https://www.law.uchicago.edu/news/ai-strategy-statement)
* [2026-07-23, 16:08:00](https://soylentnews.org/article.pl?sid=26/07/23/029223&amp;from=rss) - [Could China and Russia Really Destroy Starlink?](https://soylentnews.org/article.pl?sid=26/07/23/029223&amp;from=rss)
* [2026-07-23, 11:20:00](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss) - [Sweet! Sugar Found in Raspberries Was Discovered Near the Milky Way&apos;s Center](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss)
* [2026-07-23, 06:38:00](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss) - [Zilog Z80 Turns 50 as an Open-Source Replacement Heads to Drop-in DIP40 Silicon](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss)
* [2026-07-23, 01:56:00](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss) - [Open Source Misses the Point and Cannot Save Us](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss)
* [2026-07-22, 21:14:00](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss) - [Five Tech Giants are Hiding $1.65tn in AI Debt, Using the Trick that Toppled Enron](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss)
* [2026-07-22, 21:09:59](https://news.ycombinator.com/item?id=49013464) - [SIMD for Collision](https://box2d.org/posts/2026/07/simd-for-collision/)
* [2026-07-22, 16:23:00](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss) - [German Startup Qurie Bags Funding for Molecular Heat Pump](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss)
* [2026-07-22, 13:41:00](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss) - [My Hunt for the Original McDonald’s French-Fry Recipe](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss)
* [2026-07-22, 11:44:30](https://news.ycombinator.com/item?id=49005197) - [Overloaded Overloading](https://powerfulpython.com/blog/overloaded-overloading/)
* [2026-07-22, 11:36:00](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss) - [The 2024 New York City Meteorite Contains Amino Acids](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss)
* [2026-07-22, 06:57:00](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss) - [How a Gang of Thieves Pulled Off a Multimillion-Dollar Data Center Heist](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss)
* [2026-07-22, 06:52:20](https://news.ycombinator.com/item?id=49002762) - [DskDitto: Ultra-fast, parallel duplicate-file detector](https://github.com/jdefrancesco/dskDitto)
* [2026-07-22, 02:12:00](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss) - [Doctors Document Rare Case of Dropped Head Syndrome Caused by Drug Use](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss)
