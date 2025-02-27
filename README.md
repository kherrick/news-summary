# [News Summary](https://kherrick.github.io/news-summary/)

## Open Source and Technology Advances

* [Command and Conquer: Red Alert source code](https://github.com/electronicarts/CnC_Red_Alert) ([article](https://lobste.rs/s/d8ydvt/command_conquer_red_alert_source_code), [comments](https://news.ycombinator.com/item?id=43197131)) - Electronic Arts open-sources the code for its classic RTS 'Command and Conquer: Red Alert,' creating opportunities for community-driven development.

* [Compiler Playground for energy-efficient embedded dataflow processor](https://www.efficient.computer/resources/effcc-compiler-playground-launch) ([comments](https://news.ycombinator.com/item?id=43197100)) - A tool showcasing the potential of a novel compiler targeting power-conscious embedded systems.

* [Semaphore CI/CD platform went Open Source](https://github.com/semaphoreio/semaphore) ([article](https://lobste.rs/s/ackfl2/semaphore_ci_cd_platform_went_open_source)) - The software lifecycle platform Semaphore is now available under an open-source license.

* [Launch HN: Superglue – open source API connector that writes its own code](https://github.com/superglue-ai/superglue) ([comments](https://news.ycombinator.com/item?id=43196374)) - A novel AI-based API connector that automates code generation and bridges APIs effortlessly.

## Innovative AI and Machine Learning Applications

* [Launch HN: Bild AI – Understands Construction Blueprints Using AI](https://news.ycombinator.com/item?id=43196474) - Y Combinator-backed Bild AI adapts to the intricacies of interpreting architectural designs.

* [RoboPianist: Dexterous Piano Playing with Deep Reinforcement Learning](https://kzakka.com/robopianist/#demo) ([comments](https://news.ycombinator.com/item?id=43192751)) - Demonstrating AI-driven dexterity in the domain of piano performance.

## Notable Industry and Science Developments

* [Pokemon Boss Believes Series Can Last Another 50 To 100 Years](https://games.slashdot.org/story/25/02/27/1048224/pokemon-boss-believes-series-can-last-another-50-to-100-years) ([article](https://games.slashdot.org/story/25/02/27/1048224/pokemon-boss-believes-series-can-last-another-50-to-100-years)) - The enduring legacy and vision for the popular franchise.

* [Amazon Unveils Its First Quantum Computing Chip](https://tech.slashdot.org/story/25/02/27/1114246/amazon-unveils-its-first-quantum-computing-chip) ([article](https://tech.slashdot.org/story/25/02/27/1114246/)) - Leap into quantum hardware with advances presented by Amazon.

## Cultural and Unique Perspectives

* [The Odds of a City-Killer Asteroid Impact in 2032 Keep Rising](https://soylentnews.org/article.pl?sid=25/02/22/1627256) ([article](https://soylentnews.org/article.pl?sid=25/02/22/1627256)) - A closer planetary threat gains speculative prominence and scientific intrigue.

* [Solitaire](https://localthunk.com/blog/solitaire) ([comments](https://news.ycombinator.com/item?id=43195516)) - An introspective piece on game design simplicity in digital history.

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

* [2025-02-27, 18:54:19](https://lobste.rs/s/d8ydvt/command_conquer_red_alert_source_code) - [Command and Conquer: Red Alert source code](https://github.com/electronicarts/CnC_Red_Alert)
* [2025-02-27, 18:42:01](https://news.ycombinator.com/item?id=43197131) - [EA Open Sources Command and Conquer: Red Alert](https://github.com/electronicarts/CnC_Red_Alert)
* [2025-02-27, 18:42:01](https://lobste.rs/s/fpidir/accessing_region_locked_ios_features) - [Accessing region-locked iOS features, such as EU app stores](https://downrightnifty.me/blog/2025/02/27/eu-features-outside.html)
* [2025-02-27, 18:41:00](https://games.slashdot.org/story/25/02/27/1048224/pokemon-boss-believes-series-can-last-another-50-to-100-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Pokemon Boss Believes Series Can Last Another 50 To 100 Years](https://games.slashdot.org/story/25/02/27/1048224/pokemon-boss-believes-series-can-last-another-50-to-100-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 18:38:47](https://news.ycombinator.com/item?id=43197100) - [Show HN: Compiler Playground for energy-efficient embedded dataflow processor](https://www.efficient.computer/resources/effcc-compiler-playground-launch)
* [2025-02-27, 18:11:02](https://news.ycombinator.com/item?id=43196845) - [Show HN: LoomLetter – an app to organize newsletters and listen on the go](https://www.loomletter.app/)
* [2025-02-27, 18:07:35](https://news.ycombinator.com/item?id=43196812) - [Show HN: Wampy, interface addon for Linux-based Walkmans](https://github.com/unknown321/wampy)
* [2025-02-27, 18:00:00](https://developers.slashdot.org/story/25/02/27/0931201/the-reality-of-long-term-software-maintenance?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Reality of Long-Term Software Maintenance](https://developers.slashdot.org/story/25/02/27/0931201/the-reality-of-long-term-software-maintenance?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 17:57:17](https://news.ycombinator.com/item?id=43196710) - [Show HN: Ranked Search for Semi-Structured Data](https://demo.tryvoker.com)
* [2025-02-27, 17:35:00](https://soylentnews.org/article.pl?sid=25/02/26/1856235&from=rss) - [Robot With 1,000 Muscles Twitches Like Human While Dangling From Ceiling](https://soylentnews.org/article.pl?sid=25/02/26/1856235&from=rss)
* [2025-02-27, 17:30:51](https://news.ycombinator.com/item?id=43196474) - [Launch HN: Bild AI (YC W25) – Understands Construction Blueprints Using AI](https://news.ycombinator.com/item?id=43196474)
* [2025-02-27, 17:26:21](https://news.ycombinator.com/item?id=43196436) - [Goodbye K-9 Mail](https://cketti.de/2025/02/26/goodbye-k9mail/)
* [2025-02-27, 17:24:20](https://lobste.rs/s/1naw96/goodbye_k_9_mail) - [Goodbye K-9 Mail](https://cketti.de/2025/02/26/goodbye-k9mail/)
* [2025-02-27, 17:21:00](https://tech.slashdot.org/story/25/02/27/1043221/the-new-york-city-subway-is-using-google-pixels-to-listen-for-track-defects?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The New York City Subway Is Using Google Pixels To Listen for Track Defects](https://tech.slashdot.org/story/25/02/27/1043221/the-new-york-city-subway-is-using-google-pixels-to-listen-for-track-defects?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 17:20:22](https://news.ycombinator.com/item?id=43196374) - [Show HN: Superglue – open source API connector that writes its own code](https://github.com/superglue-ai/superglue)
* [2025-02-27, 17:03:39](https://news.ycombinator.com/item?id=43196207) - [Turning a Bluetooth device into an Apple AirTag without root privileges](https://nroottag.github.io/)
* [2025-02-27, 16:40:00](https://tech.slashdot.org/story/25/02/27/0838208/my-washing-machine-refreshed-my-thinking-on-software-effort-estimation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['My Washing Machine Refreshed My Thinking on Software Effort Estimation'](https://tech.slashdot.org/story/25/02/27/0838208/my-washing-machine-refreshed-my-thinking-on-software-effort-estimation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 16:34:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss) - [Adoption of Site Documentation - THIS IS THE VOTE - RESTORED](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss)
* [2025-02-27, 16:14:45](https://news.ycombinator.com/item?id=43195724) - [The muon's magnetic moment exposes a hole in the SM – unless it doesn't](https://physicsworld.com/a/the-muons-magnetic-moment-exposes-a-huge-hole-in-the-standard-model-unless-it-doesnt/)
* [2025-02-27, 16:13:21](https://news.ycombinator.com/item?id=43195710) - [Nigerians are building affordable alternatives to AWS and Google Cloud](https://restofworld.org/2025/aws-google-cloud-nigeria-alternatives/)
* [2025-02-27, 16:12:42](https://news.ycombinator.com/item?id=43195702) - [Distributed Systems Programming Has Stalled](https://www.shadaj.me/writing/distributed-programming-stalled)
* [2025-02-27, 16:00:00](https://slashdot.org/story/25/02/27/1010232/japan-births-fall-to-lowest-in-125-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Japan Births Fall To Lowest in 125 Years](https://slashdot.org/story/25/02/27/1010232/japan-births-fall-to-lowest-in-125-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 15:55:21](https://news.ycombinator.com/item?id=43195525) - [A $100 DIY muon tomographer](https://spectrum.ieee.org/diy-muon-tomography)
* [2025-02-27, 15:54:36](https://news.ycombinator.com/item?id=43195516) - [Solitaire](https://localthunk.com/blog/solitaire)
* [2025-02-27, 15:34:34](https://news.ycombinator.com/item?id=43195308) - [Who was Aleph Null? (2013)](http://bit-player.org/2013/who-was-aleph-null)
* [2025-02-27, 15:22:00](https://it.slashdot.org/story/25/02/27/0923237/is-npm-enough-why-startups-are-coming-after-this-javascript-package-registry?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Is npm Enough? Why Startups Are Coming After This JavaScript Package Registry](https://it.slashdot.org/story/25/02/27/0923237/is-npm-enough-why-startups-are-coming-after-this-javascript-package-registry?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 15:15:28](https://lobste.rs/s/0hxggz/servo_security_report_findings) - [Servo Security Report: findings and solutions](https://servo.org/blog/2025/02/26/servo-security-report/)
* [2025-02-27, 15:02:39](https://news.ycombinator.com/item?id=43194971) - [Show HN: Probly – Spreadsheets, Python, and AI in the browser](https://github.com/PragmaticMachineLearning/probly)
* [2025-02-27, 14:40:00](https://slashdot.org/story/25/02/27/0939257/australia-bans-all-kaspersky-products-on-government-systems-citing-unacceptable-security-risk?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Australia Bans All Kaspersky Products on Government Systems Citing 'Unacceptable Security Risk'](https://slashdot.org/story/25/02/27/0939257/australia-bans-all-kaspersky-products-on-government-systems-citing-unacceptable-security-risk?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 14:39:20](https://lobste.rs/s/jbg9zf/arco_smartest_way_access_big_geospatial) - [ARCO: The Smartest Way to Access Big Geospatial Data](https://blog.lobelia.earth/arco-the-smartest-way-to-access-big-geospatial-data-eaf689eff3c9)
* [2025-02-27, 14:16:38](https://lobste.rs/s/ww96mh/why_are_jujutsu_s_id_prefixes_so_short) - [Why are Jujutsu's ID Prefixes So Short?](https://jonathan-frere.com/posts/jujutsu-shortest-ids/)
* [2025-02-27, 14:05:57](https://lobste.rs/s/4fxbkn/git_for_fansubbing_probably_mistake) - [Git for Fansubbing: Probably a Mistake](https://redvice.org/2025/git-subbing-was-a-mistake/)
* [2025-02-27, 14:00:21](https://news.ycombinator.com/item?id=43194434) - [Time Warp: Delayed-choice quantum erasure](https://drgblackwell.substack.com/p/time-warp-delayed-choice-quantum)
* [2025-02-27, 14:00:00](https://slashdot.org/story/25/02/27/1131220/microsoft-urges-trump-to-overhaul-curbs-on-ai-chip-exports?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Urges Trump To Overhaul Curbs on AI Chip Exports](https://slashdot.org/story/25/02/27/1131220/microsoft-urges-trump-to-overhaul-curbs-on-ai-chip-exports?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 13:59:02](https://lobste.rs/s/ox1tvx/winners_isbn_visualization_bounty) - [Winners of the ISBN visualization bounty](https://annas-archive.org/blog/all-isbns-winners.html)
* [2025-02-27, 13:55:16](https://lobste.rs/s/c7ywce/how_i_automated_my_podcast_transcript) - [How I Automated My Podcast Transcript Production With Local AI](https://den.dev/blog/how-i-automated-podcast-transcription-with-local-ai/)
* [2025-02-27, 13:32:38](https://lobste.rs/s/ym7xhm/release_fish_shell_4_0_0_now_ported_rust) - [Release fish shell 4.0.0, now ported to Rust](https://github.com/fish-shell/fish-shell/releases/tag/4.0.0)
* [2025-02-27, 13:23:53](https://lobste.rs/s/0csx3b/safetycore_new_android_feature_is) - [SafetyCore: new Android feature is scanning your photos for 'sensitive content'](https://www.zdnet.com/article/a-new-android-feature-is-scanning-your-photos-for-sensitive-content-how-to-stop-it/)
* [2025-02-27, 12:51:00](https://soylentnews.org/article.pl?sid=25/02/26/1852225&from=rss) - [Physx Feature Unlocked For RTX 5090 With RTX 3050 'Helper' To Enable Full Performance](https://soylentnews.org/article.pl?sid=25/02/26/1852225&from=rss)
* [2025-02-27, 12:41:00](https://lobste.rs/s/bvzlzb/testing_numbs_us_our_loss_intellectual) - [Testing Numbs Us to Our Loss of Intellectual Control (2020)](https://www.computer.org/csdl/magazine/so/2020/03/09068304/1j30VMzNxLO)
* [2025-02-27, 12:30:00](https://news.slashdot.org/story/25/02/27/0733223/electronic-devices-used-for-car-thefts-set-to-be-banned-in-england?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Electronic Devices Used For Car Thefts Set To Be Banned in England](https://news.slashdot.org/story/25/02/27/0733223/electronic-devices-used-for-car-thefts-set-to-be-banned-in-england?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 12:23:41](https://news.ycombinator.com/item?id=43193714) - [A data analysis of speeches at the Oscars](https://stephenfollows.com/p/harvey-weinstein-thanked-more-than-god)
* [2025-02-27, 12:10:10](https://lobste.rs/s/jivgtn/why_we_designed_tigerbeetle_s_docs_from) - [Why We Designed TigerBeetle's Docs from Scratch](https://tigerbeetle.com/blog/2025-02-27-why-we-designed-tigerbeetles-docs-from-scratch/)
* [2025-02-27, 12:01:37](https://news.ycombinator.com/item?id=43193553) - [Bitmovin (YC S15) Is Hiring Interns in Software Engineering in Austria](https://bitmovin.com/careers/7863755002/)
* [2025-02-27, 11:59:08](https://lobste.rs/s/equl2g/pipe_operator_generics_is_not_sum_type) - [The Pipe Operator In Generics Is Not A Sum Type](https://jerf.org/iri/post/2024/go_faq_pipe_in_generics/)
* [2025-02-27, 11:14:00](https://tech.slashdot.org/story/25/02/27/1114246/amazon-unveils-its-first-quantum-computing-chip?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Unveils Its First Quantum Computing Chip](https://tech.slashdot.org/story/25/02/27/1114246/amazon-unveils-its-first-quantum-computing-chip?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 10:00:00](https://slashdot.org/story/25/02/27/0158229/jensen-huang-ai-has-to-do-100-times-more-computation-now-than-when-chatgpt-was-released?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Jensen Huang: AI Has To Do '100 Times More' Computation Now Than When ChatGPT Was Released](https://slashdot.org/story/25/02/27/0158229/jensen-huang-ai-has-to-do-100-times-more-computation-now-than-when-chatgpt-was-released?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 09:41:23](https://news.ycombinator.com/item?id=43192751) - [RoboPianist: Dexterous Piano Playing with Deep Reinforcement Learning (2023)](https://kzakka.com/robopianist/#demo)
* [2025-02-27, 08:46:54](https://news.ycombinator.com/item?id=43192500) - [Gene Hackman has died](https://www.nytimes.com/2025/02/27/obituaries/gene-hackman-dead.html)
* [2025-02-27, 08:08:00](https://soylentnews.org/article.pl?sid=25/02/26/1850240&from=rss) - [Bubbles That Break Rules: A Fluid Discovery That Defies Logic](https://soylentnews.org/article.pl?sid=25/02/26/1850240&from=rss)
* [2025-02-27, 07:45:13](https://lobste.rs/s/6rl9ah/launching_rdap_sunsetting_whois) - [Launching RDAP; Sunsetting WHOIS](https://www.icann.org/en/announcements/details/icann-update-launching-rdap-sunsetting-whois-27-01-2025-en)
* [2025-02-27, 07:00:00](https://hardware.slashdot.org/story/25/02/27/0149218/german-startup-wins-accolade-for-its-fusion-reactor-design?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [German Startup Wins Accolade For Its Fusion Reactor Design](https://hardware.slashdot.org/story/25/02/27/0149218/german-startup-wins-accolade-for-its-fusion-reactor-design?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 06:24:04](https://lobste.rs/s/tv45be/assorted_macos_tips_tricks) - [Assorted macOS Tips & Tricks](https://saurabhs.org/macos-tips)
* [2025-02-27, 06:02:12](https://lobste.rs/s/ackfl2/semaphore_ci_cd_platform_went_open_source) - [Semaphore CI/CD platform went Open Source](https://github.com/semaphoreio/semaphore)
* [2025-02-27, 03:30:00](https://slashdot.org/story/25/02/27/015210/tokyo-is-turning-to-a-4-day-workweek-to-shed-worlds-oldest-population-title?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Tokyo Is Turning To a 4-Day Workweek To Shed 'World's Oldest Population' Title](https://slashdot.org/story/25/02/27/015210/tokyo-is-turning-to-a-4-day-workweek-to-shed-worlds-oldest-population-title?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 02:27:00](https://soylentnews.org/article.pl?sid=25/02/26/0210231&from=rss) - [As the Kernel Turns: Rust in Linux Saga Reaches the “Linus in All-Caps” Phase](https://soylentnews.org/article.pl?sid=25/02/26/0210231&from=rss)
* [2025-02-27, 01:58:25](https://lobste.rs/s/de2ab1/firefox_adds_terms_use) - [Firefox adds terms of use](https://blog.mozilla.org/en/products/firefox/firefox-news/firefox-terms-of-use/)
* [2025-02-27, 01:40:00](https://tech.slashdot.org/story/25/02/27/0123251/lucid-ceo-steps-down-as-ev-maker-plans-to-double-production?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Lucid CEO Steps Down As EV Maker Plans To Double Production](https://tech.slashdot.org/story/25/02/27/0123251/lucid-ceo-steps-down-as-ev-maker-plans-to-double-production?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 01:00:00](https://science.slashdot.org/story/25/02/26/232258/pixel-watch-3-gets-fda-clearance-for-loss-of-pulse-alerts?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Pixel Watch 3 Gets FDA Clearance For Loss of Pulse Alerts](https://science.slashdot.org/story/25/02/26/232258/pixel-watch-3-gets-fda-clearance-for-loss-of-pulse-alerts?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 00:31:53](https://lobste.rs/s/lragbd/imac_g4_k) - [iMac G4(K)](https://jcs.org/2025/02/26/imacg4k)
* [2025-02-26, 23:48:41](https://lobste.rs/s/olofvt/faster_go_maps_with_swiss_tables) - [Faster Go maps with Swiss Tables](https://go.dev/blog/swisstable)
* [2025-02-26, 22:25:10](https://news.ycombinator.com/item?id=43188971) - [iMac G4(K)](https://jcs.org/2025/02/26/imacg4k)
* [2025-02-26, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/25/0655200&from=rss) - [Software Engineering Job Openings Hit 5-Year Low Amid Industry Shift](https://soylentnews.org/article.pl?sid=25/02/25/0655200&from=rss)
* [2025-02-26, 21:03:13](https://lobste.rs/s/ng16gl/socrates_is_state_machine) - [Socrates is a state machine](https://www.sminez.dev/socrates-is-a-state-machine/)
* [2025-02-26, 18:19:05](https://news.ycombinator.com/item?id=43186406) - [Show HN: I got laid off from Meta and created a minor hit on Steam](https://news.ycombinator.com/item?id=43186406)
* [2025-02-26, 17:24:51](https://news.ycombinator.com/item?id=43185836) - [Show HN: Yaak – An open source, Git-friendly desktop API client](https://yaak.app)
* [2025-02-26, 17:19:59](https://lobste.rs/s/ebpdwe/typescript_types_can_run_doom) - [TypeScript types can run DOOM](https://www.youtube.com/watch?v=0mCsluv5FXA)
* [2025-02-26, 16:53:00](https://soylentnews.org/article.pl?sid=25/02/25/0646226&from=rss) - [Chinese Hackers Compromised Organizations in 70 Nations, Warn US Federal Agencies](https://soylentnews.org/article.pl?sid=25/02/25/0646226&from=rss)
* [2025-02-26, 16:47:10](https://lobste.rs/s/yemc16/cp_copying_all_files_directory_including) - [cp -  copying all files of a directory, including hidden ones](https://bhoot.dev/2025/cp-dot-copies-everything/)
* [2025-02-26, 15:05:02](https://news.ycombinator.com/item?id=43184291) - [TypeScript types can run DOOM [video]](https://www.youtube.com/watch?v=0mCsluv5FXA)
* [2025-02-26, 14:44:54](https://lobste.rs/s/cmnxjz/miserable_state_cellular_modems_mobile) - [The Miserable State of Cellular Modems and Mobile Network Operators](https://blog.golioth.io/the-miserable-state-of-modems-and-mobile-network-operators/)
* [2025-02-26, 12:05:00](https://soylentnews.org/article.pl?sid=25/02/25/0640214&from=rss) - [Seagate's Fraudulent HDD Scandal Expands: Ironwolf Pro Hard Drives Reportedly Also Affected](https://soylentnews.org/article.pl?sid=25/02/25/0640214&from=rss)
* [2025-02-26, 08:56:22](https://lobste.rs/s/vicy6o/i_went_sql_injection_court) - [I Went To SQL Injection Court](https://sockpuppet.org/blog/2025/02/09/fixing-illinois-foia/)
* [2025-02-26, 07:20:00](https://soylentnews.org/article.pl?sid=25/02/25/0633257&from=rss) - [The Secretive X-37B Space Plane Snapped This Picture of Earth From Orbit](https://soylentnews.org/article.pl?sid=25/02/25/0633257&from=rss)
* [2025-02-26, 02:33:00](https://soylentnews.org/article.pl?sid=25/02/24/1625242&from=rss) - [US Treasury Beneficial Ownership Information Reporting is Back On (Again)](https://soylentnews.org/article.pl?sid=25/02/24/1625242&from=rss)
* [2025-02-25, 21:50:00](https://soylentnews.org/article.pl?sid=25/02/24/1621220&from=rss) - [Polish Treasure Hunters Unearth Seriously Badass Two-Handed Medieval Sword](https://soylentnews.org/article.pl?sid=25/02/24/1621220&from=rss)
* [2025-02-25, 17:06:00](https://soylentnews.org/article.pl?sid=25/02/24/1617229&from=rss) - [21st Century C++](https://soylentnews.org/article.pl?sid=25/02/24/1617229&from=rss)
* [2025-02-25, 12:23:00](https://soylentnews.org/politics/article.pl?sid=25/02/24/1615209&from=rss) - [Trump Threatens Tariffs On Any Nation That Taxes Big Tech](https://soylentnews.org/politics/article.pl?sid=25/02/24/1615209&from=rss)
* [2025-02-25, 10:16:14](https://news.ycombinator.com/item?id=43170108) - [Upside Down Air Force](https://www.frontiernet.net/%7Eatlasf/A56UDAF.htm)
* [2025-02-25, 07:37:00](https://soylentnews.org/article.pl?sid=25/02/24/0728229&from=rss) - [Building a Chipmaking Fab in the US Costs Twice as Much, Takes Twice as Long as in Taiwan](https://soylentnews.org/article.pl?sid=25/02/24/0728229&from=rss)
* [2025-02-25, 06:26:56](https://news.ycombinator.com/item?id=43168838) - [Winners of the $10k ISBN visualization bounty](https://annas-archive.org/blog/all-isbns-winners.html)
* [2025-02-25, 05:33:21](https://news.ycombinator.com/item?id=43168533) - [There isn't much point to HTTP/2 past the load balancer](https://byroot.github.io/ruby/performance/2025/02/24/http2-past-the-load-balancer.html)
* [2025-02-25, 02:51:00](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss) - [Astronomers Uncover The Topsy-Turvy Atmosphere Of A Distant Planet](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss)
* [2025-02-24, 22:04:00](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss) - [How to Backdoor Large Language Models](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss)
* [2025-02-24, 17:20:00](https://soylentnews.org/article.pl?sid=25/02/24/0713223&from=rss) - [Bird Flu Endemic in America Cows. Found in Rats](https://soylentnews.org/article.pl?sid=25/02/24/0713223&from=rss)
* [2025-02-24, 12:32:00](https://soylentnews.org/article.pl?sid=25/02/24/078229&from=rss) - [AMD Could Block the Sale of Intel Due to a Cross-Licensing Agreement](https://soylentnews.org/article.pl?sid=25/02/24/078229&from=rss)
* [2025-02-24, 11:05:27](https://news.ycombinator.com/item?id=43158166) - [Show HN: Libredesk – Open-source customer support desk. Single binary app](https://github.com/abhinavxd/libredesk)
* [2025-02-24, 07:47:00](https://soylentnews.org/article.pl?sid=25/02/24/074241&from=rss) - [Apple Pulls End-to-End Encryption From UK Rather Than Provide Government a Backdoor](https://soylentnews.org/article.pl?sid=25/02/24/074241&from=rss)
* [2025-02-24, 03:03:00](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss) - [After 20 Years, Math Couple Solves Major Group Theory Problem](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss)
* [2025-02-23, 22:14:00](https://soylentnews.org/article.pl?sid=25/02/22/1716217&from=rss) - [NVidia to Consume 77% of Wafers Used for AI Processors in 2025](https://soylentnews.org/article.pl?sid=25/02/22/1716217&from=rss)
* [2025-02-23, 21:20:40](https://news.ycombinator.com/item?id=43153324) - [MathB.in Is Shutting Down](https://susam.net/mathbin-is-shutting-down.html)
* [2025-02-23, 17:37:00](https://soylentnews.org/politics/article.pl?sid=25/02/22/1638251&from=rss) - [Trump to Introduce 25% and 'Higher' Tariff on Imported Semiconductors but the Timing is Unclear](https://soylentnews.org/politics/article.pl?sid=25/02/22/1638251&from=rss)
* [2025-02-23, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/22/1636233&from=rss) - [Electric Truck-Maker Nikola Falls Into Bankruptcy Joining a Procession of Failed EV Startups](https://soylentnews.org/article.pl?sid=25/02/22/1636233&from=rss)
* [2025-02-23, 08:05:00](https://soylentnews.org/article.pl?sid=25/02/22/1634220&from=rss) - [Humane's AI Pin is No More and Owners are Left With Nothing](https://soylentnews.org/article.pl?sid=25/02/22/1634220&from=rss)
* [2025-02-23, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/22/1627256&from=rss) - [The Odds of a City-Killer Asteroid Impact in 2032 Keep Rising](https://soylentnews.org/article.pl?sid=25/02/22/1627256&from=rss)
