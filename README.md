# [News Summary](https://kherrick.github.io/news-summary/)

## Health and Biology

* [Dad's Fitness May Be Packaged and Passed Down in Sperm RNA](https://www.quantamagazine.org/how-dads-fitness-may-be-packaged-and-passed-down-in-sperm-rna-20251222/) - A study reveals how physical fitness traits may be inherited through specific RNA in sperm, potentially impacting generations.

* [MIT Reveals How High-Fat Diets Quietly Prime the Liver for Cancer](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss) - New research elucidates the connection between high-fat diets and an increased risk of liver cancer.

## Technology and Programming Insights

* [Replacing JavaScript with Just HTML](https://www.htmhell.dev/adventcalendar/2025/27/) - A re-imagining of web development, proposing feasible alternatives for certain JavaScript functionalities using only HTML.

* [Why Reliability Demands Functional Programming](https://blog.rastrian.dev/post/why-reliability-demands-functional-programming-adts-safety-and-critical-infrastructure) - This article explores the reliability benefits of using functional programming in critical systems.

* [TIL: serde's borrowing can be treacherous](https://yossarian.net/til/post/serde-s-borrowing-can-be-treacherous) - Developers share cautionary insights about handling data with the Rust library `serde`.

## Cybersecurity Moments

* [CVE-2025-14847: MongoBleed](https://cybersecuritynews.com/mongobleed-poc-exploit-mongodb/) - A proof-of-concept highlights security vulnerabilities in MongoDB indicating potential exploits for attackers.

* [39C3: To sign or not to sign: Practical vulnerabilities in GPG & friends](https://media.ccc.de/v/39c3-to-sign-or-not-to-sign-practical-vulnerabilities-i) - A comprehensive discussion on the exploitable weaknesses in common GPG implementations.

## Consumer and Pet Tech

* [Petlibro: Your Pet Feeder Is Feeding Data To Anyone Who Asks](https://bobdahacker.com/blog/petlibro) - A deep dive into how this connected pet feeder is exposing data unexpectedly.

## Artificial Intelligence and Ethics

* [We May Never be Able to Tell If AI Becomes Conscious, Argues Philosopher](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss) - A philosopher ponders whether humanity will ever be able to determine AI consciousness.

## Unique Hardware Innovations

* [39C3: Power Cycles Streaming](https://streaming.media.ccc.de/39c3) - An engaging presentation on the use of streaming technology in addressing energy challenges.

## Privacy and Surveillance

* [Say No to Palantir in the NHS](https://notopalantir.goodlawproject.org/email-to-target/stop-palantir-in-the-nhs/) - A campaign highlighting concerns around Palantir's involvement with Britain's National Health Service.

## Astronomy and Space Exploration

* [Cosmic Crash Caught on Camera](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss) - Scientists capture detailed visuals of a galactic collision, shedding light on cosmic dynamics.

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

* [2025-12-28, 01:33:10](https://news.ycombinator.com/item?id=46407502) - [Dad&apos;s Fitness May Be Packaged and Passed Down in Sperm RNA](https://www.quantamagazine.org/how-dads-fitness-may-be-packaged-and-passed-down-in-sperm-rna-20251222/)
* [2025-12-28, 01:07:09](https://news.ycombinator.com/item?id=46407337) - [Replacing JavaScript with Just HTML](https://www.htmhell.dev/adventcalendar/2025/27/)
* [2025-12-28, 00:51:06](https://lobste.rs/s/4zhhy8/petlibro_your_pet_feeder_is_feeding_data) - [Petlibro: Your Pet Feeder Is Feeding Data To Anyone Who Asks](https://bobdahacker.com/blog/petlibro)
* [2025-12-28, 00:48:16](https://news.ycombinator.com/item?id=46407198) - [Show HN: What 4M posts reveal about going viral on Hacker News](https://hn-ph.vercel.app)
* [2025-12-28, 00:22:02](https://lobste.rs/s/skyr0k/pgp_problem_2019) - [The PGP problem (2019)](https://www.latacora.com/blog/2019/07/16/the-pgp-problem/)
* [2025-12-28, 00:05:52](https://news.ycombinator.com/item?id=46406901) - [Why Reliability Demands Functional Programming](https://blog.rastrian.dev/post/why-reliability-demands-functional-programming-adts-safety-and-critical-infrastructure)
* [2025-12-27, 23:44:00](https://hardware.slashdot.org/story/25/12/27/225211/researchers-show-some-robots-can-be-hijacked-just-through-spoken-commands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Show Some Robots Can Be Hijacked Just Through Spoken Commands](https://hardware.slashdot.org/story/25/12/27/225211/researchers-show-some-robots-can-be-hijacked-just-through-spoken-commands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 23:16:55](https://news.ycombinator.com/item?id=46406486) - [Show HN: Waycore – an open-source, offline-first modular field computer](https://news.ycombinator.com/item?id=46406486)
* [2025-12-27, 22:51:18](https://lobste.rs/s/inixlr/release_age_v1_3_0_post_quantum_more) - [Release age v1.3.0: post-quantum (and more)](https://github.com/FiloSottile/age/releases/tag/v1.3.0)
* [2025-12-27, 22:49:53](https://news.ycombinator.com/item?id=46406213) - [7- and 14-segment fonts \&quot;DSEG\&quot;](https://www.keshikan.net/fonts.html)
* [2025-12-27, 22:36:23](https://lobste.rs/s/n7u47v/liberating_bluetooth_on_esp32) - [Liberating Bluetooth on the ESP32](https://exquisite.tube/w/mEzF442Q4hUXnhQ8HmfZuq)
* [2025-12-27, 22:34:00](https://linux.slashdot.org/story/25/12/27/2053239/new-runtime-standby-abi-proposed-for-linux-like-microsoft-windows-modern-standby?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ New Runtime Standby ABI Proposed for Linux Like Microsoft Windows&apos; &apos;Modern Standby&apos;](https://linux.slashdot.org/story/25/12/27/2053239/new-runtime-standby-abi-proposed-for-linux-like-microsoft-windows-modern-standby?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 22:28:50](https://lobste.rs/s/dl3hxi/39c3_sign_not_sign_practical) - [39C3: To sign or not to sign: Practical vulnerabilities in GPG &amp; friends](https://media.ccc.de/v/39c3-to-sign-or-not-to-sign-practical-vulnerabilities-i)
* [2025-12-27, 22:00:20](https://lobste.rs/s/ouzxwu/goodbye_sass) - [Goodbye Sass](https://www.redblobgames.com/blog/2025-12-27-goodbye-sass/)
* [2025-12-27, 21:36:27](https://news.ycombinator.com/item?id=46405481) - [How We Found Out About COINTELPRO (2014)](https://monthlyreview.org/articles/how-we-found-out-about-cointelpro/)
* [2025-12-27, 21:36:22](https://news.ycombinator.com/item?id=46405480) - [Pfizer ended up passing on my GLP-1 work back in the early &apos;90s (2024)](https://www.statnews.com/2024/09/09/glp-1-history-pfizer-john-baxter-jeffrey-flier-calbio-metabio/)
* [2025-12-27, 21:34:00](https://science.slashdot.org/story/25/12/27/2023253/is-russia-developing-an-anti-satellite-weapon-to-target-starlink?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Russia Developing an Anti-Satellite Weapon to Target Starlink?](https://science.slashdot.org/story/25/12/27/2023253/is-russia-developing-an-anti-satellite-weapon-to-target-starlink?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 21:15:35](https://news.ycombinator.com/item?id=46405309) - [Say No to Palantir in the NHS](https://notopalantir.goodlawproject.org/email-to-target/stop-palantir-in-the-nhs/)
* [2025-12-27, 21:15:14](https://news.ycombinator.com/item?id=46405306) - [Richard Stallman at the First Hackers Conference in 1984 [video]](https://www.youtube.com/watch?v=Hf2pfzzWPYE)
* [2025-12-27, 20:56:37](https://lobste.rs/s/387hab/on_llms_programming) - [On LLMs in programming](https://blog.danieljanus.pl/2025/12/27/llms/)
* [2025-12-27, 20:44:00](https://soylentnews.org/article.pl?sid=25/12/25/226213&amp;from=rss) - [Night Waking Impacts Cognitive Performance Regardless of Sleep Duration](https://soylentnews.org/article.pl?sid=25/12/25/226213&amp;from=rss)
* [2025-12-27, 20:34:00](https://linux.slashdot.org/story/25/12/27/0744237/nvidia-drops-pascal-support-on-linux-causing-chaos-on-arch-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NVIDIA Drops Pascal Support On Linux, Causing Chaos On Arch Linux](https://linux.slashdot.org/story/25/12/27/0744237/nvidia-drops-pascal-support-on-linux-causing-chaos-on-arch-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 20:15:01](https://news.ycombinator.com/item?id=46404848) - [How we lost communication to entertainment](https://ploum.net/2025-12-15-communication-entertainment.html)
* [2025-12-27, 19:45:28](https://news.ycombinator.com/item?id=46404597) - [Rainbow Six Siege hacked as players get billions of credits and random bans](https://www.shanethegamer.com/esports-news/rainbow-six-siege-hacked-global-server-outage/)
* [2025-12-27, 19:34:00](https://tech.slashdot.org/story/25/12/27/0645206/waymo-updates-vehicles-to-better-handle-power-outages---but-still-faces-criticism?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Updates Vehicles to Better Handle Power Outages - But Still Faces Criticism](https://tech.slashdot.org/story/25/12/27/0645206/waymo-updates-vehicles-to-better-handle-power-outages---but-still-faces-criticism?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 18:55:02](https://lobste.rs/s/4fomxu/fastverse_suite_high_performance_low) - [Fastverse: A Suite of High-Performance and Low-Dependency R Packages](https://fastverse.org/fastverse/)
* [2025-12-27, 18:34:00](https://news.slashdot.org/story/25/12/27/0541200/open-source-initiative-estimates-the-top-open-source-licenses-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Open Source Initiative Estimates the &apos;Top Open Source Licenses in 2025&apos;](https://news.slashdot.org/story/25/12/27/0541200/open-source-initiative-estimates-the-top-open-source-licenses-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 18:31:27](https://news.ycombinator.com/item?id=46403992) - [Toll roads are spreading in America](https://www.economist.com/united-states/2025/12/18/toll-roads-are-spreading-in-america)
* [2025-12-27, 18:25:41](https://lobste.rs/s/my90vn/cve_2025_14847_mongobleed) - [CVE-2025-14847: MongoBleed](https://cybersecuritynews.com/mongobleed-poc-exploit-mongodb/)
* [2025-12-27, 18:22:05](https://news.ycombinator.com/item?id=46403915) - [Windows 2 for the Apricot PC/Xi](https://www.ninakalinina.com/notes/win2apri/)
* [2025-12-27, 18:19:25](https://lobste.rs/s/j4b398/windows_2_for_apricot_pc_xi) - [Windows 2 for the Apricot PC/Xi](https://www.ninakalinina.com/notes/win2apri/)
* [2025-12-27, 17:42:46](https://news.ycombinator.com/item?id=46403559) - [Nvidia&apos;s $20B antitrust loophole](https://ossa-ma.github.io/blog/groq)
* [2025-12-27, 17:34:00](https://hardware.slashdot.org/story/25/12/27/0510206/japan-votes-to-restart-worlds-biggest-nuclear-plant-15-years-after-fukushima-meltdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Votes to Restart World&apos;s Biggest Nuclear Plant 15 Years After Fukushima Meltdown](https://hardware.slashdot.org/story/25/12/27/0510206/japan-votes-to-restart-worlds-biggest-nuclear-plant-15-years-after-fukushima-meltdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 17:16:08](https://news.ycombinator.com/item?id=46403291) - [Janet Jackson had the power to crash laptop computers (2022)](https://devblogs.microsoft.com/oldnewthing/20220816-00/?p=106994)
* [2025-12-27, 17:05:50](https://news.ycombinator.com/item?id=46403200) - [Gpg.fail](https://gpg.fail)
* [2025-12-27, 16:49:35](https://lobste.rs/s/vob9fu/this_png_will_show_different_version_if) - [This PNG will show different version if you open it in Chrome than in Safari](https://lr0.org/blog/p/pngchanges/)
* [2025-12-27, 16:34:00](https://science.slashdot.org/story/25/12/27/042221/should-physicists-study-the-question-what-is-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should Physicists Study the Question: What is Life?](https://science.slashdot.org/story/25/12/27/042221/should-physicists-study-the-question-what-is-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 15:53:00](https://soylentnews.org/article.pl?sid=25/12/25/224204&amp;from=rss) - [EU Offers UK Early Gift: Data Adequacy Until 2031](https://soylentnews.org/article.pl?sid=25/12/25/224204&amp;from=rss)
* [2025-12-27, 15:34:00](https://news.slashdot.org/story/25/12/27/036241/free-software-foundation-receives-historic-donations-worth-nearly-900k---in-monero?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Free Software Foundation Receives &apos;Historic&apos; Donations Worth Nearly $900K - in Monero](https://news.slashdot.org/story/25/12/27/036241/free-software-foundation-receives-historic-donations-worth-nearly-900k---in-monero?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 15:00:28](https://lobste.rs/s/byxxmk/why_is_calling_my_asm_function_from_rust) - [Why is calling my asm function from Rust slower than calling it from C?](https://ohadravid.github.io/posts/2025-12-rav1d-faster-asm/)
* [2025-12-27, 14:51:13](https://lobste.rs/s/kccoly/commandry_command_line_parser_for) - [Commandry - A Command-Line Parser for Standard ML](https://github.com/PerplexSystems/commandry)
* [2025-12-27, 14:44:11](https://lobste.rs/s/mhciaq/easel_turns_one_one_year_building_my_own) - [Easel Turns One! One year of building my own IDE in Clojure](https://blog.phronemophobic.com/easel-one-year.html)
* [2025-12-27, 13:39:41](https://lobste.rs/s/ibgvjk/getting_started_with_playdate_on_ubuntu) - [Getting started with Playdate on Ubuntu](https://sethmlarson.dev/getting-started-with-playdate-on-ubuntu)
* [2025-12-27, 13:13:00](https://news.ycombinator.com/item?id=46401612) - [Floor796](https://floor796.com/)
* [2025-12-27, 12:51:15](https://news.ycombinator.com/item?id=46401499) - [OrangePi 6 Plus Review](https://boilingsteam.com/orange-pi-6-plus-review/)
* [2025-12-27, 12:00:00](https://slashdot.org/story/25/12/27/0142219/video-call-glitches-evoke-uncanniness-damage-consequential-life-outcomes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Video Call Glitches Evoke Uncanniness, Damage Consequential Life Outcomes](https://slashdot.org/story/25/12/27/0142219/video-call-glitches-evoke-uncanniness-damage-consequential-life-outcomes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 11:16:00](https://soylentnews.org/article.pl?sid=25/12/25/222237&amp;from=rss) - [Science Sleuths Raise Concerns About Scores of Bioengineering Papers](https://soylentnews.org/article.pl?sid=25/12/25/222237&amp;from=rss)
* [2025-12-27, 10:48:14](https://lobste.rs/s/72piqg/you_can_t_design_software_you_don_t_work_on) - [You can&apos;t design software you don&apos;t work on](https://seangoedecke.com/you-cant-design-software-you-dont-work-on/)
* [2025-12-27, 10:31:43](https://lobste.rs/s/l3cjbq/arcan_0_7_1_minutes_midnight) - [Arcan 0.7.1 – Minutes To Midnight](https://arcan-fe.com/2025/12/27/arcan-0-7-1-minutes-to-midnight/)
* [2025-12-27, 10:01:00](https://it.slashdot.org/story/25/12/27/0236249/taiwans-ipass-releases-floppy-disk-pre-paid-cash-card?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Taiwan&apos;s iPass Releases Floppy Disk Pre-Paid Cash Card](https://it.slashdot.org/story/25/12/27/0236249/taiwans-ipass-releases-floppy-disk-pre-paid-cash-card?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 08:52:40](https://lobste.rs/s/xmy2nk/qnx_self_hosted_developer_desktop_brings) - [QNX Self-Hosted Developer Desktop Brings QNX 8.0 To A Wayland + Xfce Desktop](https://www.phoronix.com/news/QNX-Self-Hosted-Dev-Desktop)
* [2025-12-27, 08:45:46](https://news.ycombinator.com/item?id=46400251) - [Show HN: Ez FFmpeg – Video editing in plain English](http://npmjs.com/package/ezff)
* [2025-12-27, 08:18:45](https://lobste.rs/s/p2yx0g/39c3_power_cycles_streaming) - [39C3: Power Cycles Streaming](https://streaming.media.ccc.de/39c3)
* [2025-12-27, 08:02:00](https://tech.slashdot.org/story/25/12/27/0224259/toll-roads-are-spreading-in-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Toll Roads Are Spreading in America](https://tech.slashdot.org/story/25/12/27/0224259/toll-roads-are-spreading-in-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 06:25:00](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss) - [We May Never be Able to Tell If AI Becomes Conscious, Argues Philosopher](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss)
* [2025-12-27, 05:01:00](https://science.slashdot.org/story/25/12/27/010236/rocket-crashes-in-brazils-first-commercial-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rocket Crashes in Brazil&apos;s First Commercial Launch](https://science.slashdot.org/story/25/12/27/010236/rocket-crashes-in-brazils-first-commercial-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 03:44:30](https://lobste.rs/s/pjysyq/pre_commit_hooks_are_fundamentally) - [pre-commit hooks are fundamentally broken](https://jyn.dev/pre-commit-hooks-are-fundamentally-broken/)
* [2025-12-27, 02:00:00](https://mobile.slashdot.org/story/25/12/27/002258/mesh-networks-are-about-to-escape-apple-amazon-and-google-silos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mesh Networks Are About To Escape Apple, Amazon and Google Silos](https://mobile.slashdot.org/story/25/12/27/002258/mesh-networks-are-about-to-escape-apple-amazon-and-google-silos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 01:40:00](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss) - [MIT Reveals How High-Fat Diets Quietly Prime the Liver for Cancer](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss)
* [2025-12-27, 00:30:00](https://tech.slashdot.org/story/25/12/26/2355244/driverless-future-gains-momentum-with-global-robotaxi-deployments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Driverless Future Gains Momentum With Global Robotaxi Deployments](https://tech.slashdot.org/story/25/12/26/2355244/driverless-future-gains-momentum-with-global-robotaxi-deployments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 20:55:00](https://soylentnews.org/article.pl?sid=25/12/23/0437256&amp;from=rss) - [Disaster After Disaster: Do We Have Enough Raw Materials to &apos;Build Back Better?&apos;](https://soylentnews.org/article.pl?sid=25/12/23/0437256&amp;from=rss)
* [2025-12-26, 20:41:47](https://lobste.rs/s/mn8h3l/how_i_think_about_kubernetes) - [How I think about Kubernetes](https://garnaudov.com/writings/how-i-think-about-kubernetes/)
* [2025-12-26, 18:16:09](https://lobste.rs/s/dqwid1/how_uv_got_so_fast) - [How uv got so fast](https://nesbitt.io/2025/12/26/how-uv-got-so-fast.html)
* [2025-12-26, 18:01:00](https://soylentnews.org/article.pl?sid=25/12/26/1546258&amp;from=rss) - [Options to Break Free From Smart TV Ads and Tracking](https://soylentnews.org/article.pl?sid=25/12/26/1546258&amp;from=rss)
* [2025-12-26, 16:30:59](https://lobste.rs/s/pl1lmb/til_serde_s_borrowing_can_be_treacherous) - [TIL: serde&apos;s borrowing can be treacherous](https://yossarian.net/til/post/serde-s-borrowing-can-be-treacherous/)
* [2025-12-26, 16:12:00](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss) - [Reddit challenges AUS Social Media law in court](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss)
* [2025-12-26, 15:32:38](https://lobste.rs/s/j6spka/play_monty_hall_game) - [Play the Monty Hall game](https://monty.donk.systems)
* [2025-12-26, 11:20:00](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss) - [Climate Misinformation is Becoming a National Security Threat. Canada Isn&apos;t Ready for It](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss)
* [2025-12-26, 11:17:15](https://lobste.rs/s/n4kxdf/rob_pike_goes_nuclear_over_genai) - [Rob Pike Goes Nuclear over GenAI](https://imgur.com/nUJCI3o)
* [2025-12-26, 06:46:00](https://soylentnews.org/article.pl?sid=25/12/23/0429249&amp;from=rss) - [Seven Projects Killed by Ubuntu (but I Still Miss Them)](https://soylentnews.org/article.pl?sid=25/12/23/0429249&amp;from=rss)
* [2025-12-26, 01:55:00](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss) - [Pennsylvania High Court Rules Police Can Access Google Searches Without Warrant](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss)
* [2025-12-25, 21:13:00](https://soylentnews.org/article.pl?sid=25/12/22/1756237&amp;from=rss) - [In-Car Touchscreens Are Way More Distracting Than We First Thought, Says New Study](https://soylentnews.org/article.pl?sid=25/12/22/1756237&amp;from=rss)
* [2025-12-25, 16:27:00](https://soylentnews.org/article.pl?sid=25/12/22/1755209&amp;from=rss) - [Trump Signs Executive Order Reclassifying Cannabis, Opening Door to Broader Weed Access](https://soylentnews.org/article.pl?sid=25/12/22/1755209&amp;from=rss)
* [2025-12-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss) - [Danish Postal Service to Stop Delivering Letters After 400 Years](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss)
* [2025-12-25, 06:58:00](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss) - [Cosmic Crash Caught on Camera](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss)
* [2025-12-25, 02:15:00](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss) - [The Lost Story of Alan Turing’s Secret “Delilah” Project](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss)
* [2025-12-24, 23:11:50](https://news.ycombinator.com/item?id=46380317) - [Rust the Process](https://www.amalbansode.com/writing/2025-12-24-rust-the-process/)
* [2025-12-24, 21:30:00](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss) - [Research Explores the Indigenous Origins of the Hammock](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss)
* [2025-12-24, 16:45:00](https://soylentnews.org/article.pl?sid=25/12/22/0125252&amp;from=rss) - [Nvidia Plans Heavy Cuts to GPU Supply in Early 2026](https://soylentnews.org/article.pl?sid=25/12/22/0125252&amp;from=rss)
* [2025-12-24, 11:52:00](https://soylentnews.org/article.pl?sid=25/12/22/0124250&amp;from=rss) - [Is Talented Youth Nurtured the Wrong Way? Top Performers Develop Differently Than Assumed](https://soylentnews.org/article.pl?sid=25/12/22/0124250&amp;from=rss)
* [2025-12-24, 07:10:00](https://soylentnews.org/article.pl?sid=25/12/22/0121248&amp;from=rss) - [Ford EV Battery Joint Venture Plant Lays Off All Workers](https://soylentnews.org/article.pl?sid=25/12/22/0121248&amp;from=rss)
* [2025-12-24, 02:28:00](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss) - [Google Search Now Lets You Upload Images and PDFs for Analysis](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss)
