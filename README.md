# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI

* [Amazon remembers it has an Android app store, kills it](https://arstechnica.com/gadgets/2025/02/amazon-remembers-it-has-an-android-app-store-kills-it/) ([Comments](https://news.ycombinator.com/item?id=43120404))

* [When AI Thinks It Will Lose, It Sometimes Cheats, Study Finds](https://slashdot.org/story/25/02/20/1117213/when-ai-thinks-it-will-lose-it-sometimes-cheats-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://slashdot.org/story/25/02/20/1117213/when-ai-thinks-it-will-lose-it-sometimes-cheats-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Helix: A Vision-Language-Action Model for Generalist Humanoid Control](https://www.figure.ai/news/helix) ([Comments](https://news.ycombinator.com/item?id=43115079))

* [Implementing a Game Boy emulator in Ruby](https://sacckey.dev/posts/implementing-a-game-boy-emulator-in-ruby/) ([Comments](https://lobste.rs/s/ui7yri/implementing_game_boy_emulator_ruby))

## Scientific Discoveries

* [Rare Genetic Disorder Treated in Womb For the First Time](https://science.slashdot.org/story/25/02/20/133212/rare-genetic-disorder-treated-in-womb-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43117895))

* [Curiosity Mars rover discovers evidence of ripples from ancient Red Planet lake](https://www.space.com/space-exploration/mars-rovers/nasas-curiosity-mars-rover-discovers-evidence-of-ripples-from-an-ancient-red-planet-lake-images) ([Comments](https://news.ycombinator.com/item?id=43119028))

* [Scientists Just Discovered ‘Quipu,’ the New Largest Structure in Our Cosmos](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss))

## Software and Development

* [Running Pong in 240 Browser Tabs](https://eieio.games/blog/running-pong-in-240-browser-tabs/) ([Comments](https://lobste.rs/s/rcddil/running_pong_240_browser_tabs))

* [Announcing Rust 1.85.0 and Rust 2024](https://blog.rust-lang.org/2025/02/20/Rust-1.85.0.html) ([Comments](https://lobste.rs/s/zsngat/announcing_rust_1_85_0_rust_2024))

* [Demystifying monads in Rust through property-based testing](https://sunshowers.io/posts/monads-through-pbt/) ([Comments](https://lobste.rs/s/isl4u6/demystifying_monads_rust_through))

* [New Horizons for Julia](https://lwn.net/Articles/1006117/) ([Comments](https://news.ycombinator.com/item?id=43118962))

## Global and Social Developments

* [FTC Launches Broad Tech 'Censorship' Probe Targeting Meta, Uber](https://yro.slashdot.org/story/25/02/20/1953229/ftc-launches-broad-tech-censorship-probe-targeting-meta-uber?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43116633))

* [Amazon Surpasses Walmart in Revenue For First Time](https://slashdot.org/story/25/02/20/1943242/amazon-surpasses-walmart-in-revenue-for-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43118592))

* [Canada Announces First High-Speed Rail Between Toronto and Quebec City](https://tech.slashdot.org/story/25/02/20/0540215/canada-announces-first-high-speed-rail-between-toronto-and-quebec-city?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43113024))

* [HP Deliberately Adds 15 Minutes Waiting Time For Telephone Support Calls](https://it.slashdot.org/story/25/02/20/1827203/hp-deliberately-adds-15-minutes-waiting-time-for-telephone-support-calls?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43118634))

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

* [2025-02-20, 21:25:06](https://news.ycombinator.com/item?id=43120404) - [Amazon remembers it has an Android app store, kills it](https://arstechnica.com/gadgets/2025/02/amazon-remembers-it-has-an-android-app-store-kills-it/)
* [2025-02-20, 21:21:00](https://it.slashdot.org/story/25/02/20/137233/dark-mode-might-be-burning-more-juice-than-you-think?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [ Dark Mode Might Be Burning More Juice Than You Think](https://it.slashdot.org/story/25/02/20/137233/dark-mode-might-be-burning-more-juice-than-you-think?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 21:13:58](https://lobste.rs/s/sucvnw/hello_policy_gradient) - [Hello, Policy Gradient](http://www.kirkroerig.com/article/policy_gradient)
* [2025-02-20, 21:00:33](https://news.ycombinator.com/item?id=43120130) - [Helpcare AI (YC F24) Is Hiring Full Stack Engineer](https://news.ycombinator.com/item?id=43120130)
* [2025-02-20, 20:42:06](https://lobste.rs/s/rcddil/running_pong_240_browser_tabs) - [Running Pong in 240 Browser Tabs ·](https://eieio.games/blog/running-pong-in-240-browser-tabs/)
* [2025-02-20, 20:41:33](https://lobste.rs/s/qiagr8/bash_bash_with_classes) - [Bash++: Bash with Classes](https://bpp.sh/)
* [2025-02-20, 20:41:00](https://slashdot.org/story/25/02/20/1943242/amazon-surpasses-walmart-in-revenue-for-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Surpasses Walmart in Revenue For First Time](https://slashdot.org/story/25/02/20/1943242/amazon-surpasses-walmart-in-revenue-for-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 20:40:01](https://lobste.rs/s/adk7dp/what_is_wrong_with_architecture_internet) - [What is wrong with the architecture of the Internet?](https://ouroboros.rocks/blog/2022/02/12/what-is-wrong-with-the-architecture-of-the-internet/)
* [2025-02-20, 20:00:00](https://yro.slashdot.org/story/25/02/20/1953229/ftc-launches-broad-tech-censorship-probe-targeting-meta-uber?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FTC Launches Broad Tech 'Censorship' Probe Targeting Meta, Uber](https://yro.slashdot.org/story/25/02/20/1953229/ftc-launches-broad-tech-censorship-probe-targeting-meta-uber?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 19:46:43](https://news.ycombinator.com/item?id=43119238) - [Lynx Browser: The Land That Time Revived (2022)](https://popzazzle.blogspot.com/2022/06/lynx-browser-land-that-time-revived.html)
* [2025-02-20, 19:33:28](https://news.ycombinator.com/item?id=43119086) - [Running Pong in 240 browser tabs](https://eieio.games/blog/running-pong-in-240-browser-tabs/)
* [2025-02-20, 19:28:53](https://news.ycombinator.com/item?id=43119028) - [Curiosity Mars rover discovers evidence of ripples from ancient Red Planet lake](https://www.space.com/space-exploration/mars-rovers/nasas-curiosity-mars-rover-discovers-evidence-of-ripples-from-an-ancient-red-planet-lake-images)
* [2025-02-20, 19:23:29](https://news.ycombinator.com/item?id=43118962) - [New Horizons for Julia](https://lwn.net/Articles/1006117/)
* [2025-02-20, 19:22:00](https://games.slashdot.org/story/25/02/20/1313234/twitch-is-limiting-streamers-to-100-hours-of-highlights-and-uploads?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Twitch is Limiting Streamers To 100 hours of Highlights and Uploads](https://games.slashdot.org/story/25/02/20/1313234/twitch-is-limiting-streamers-to-100-hours-of-highlights-and-uploads?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 18:57:48](https://news.ycombinator.com/item?id=43118634) - [OpenEuroLLM](https://openeurollm.eu/)
* [2025-02-20, 18:54:44](https://news.ycombinator.com/item?id=43118592) - [AWS S3 SDK breaks its compatible services](https://xuanwo.io/links/2025/02/aws_s3_sdk_breaks_its_compatible_services/)
* [2025-02-20, 18:49:24](https://news.ycombinator.com/item?id=43118512) - [You can't build a moat with AI](https://frontierai.substack.com/p/you-cant-build-a-moat-with-ai-redux)
* [2025-02-20, 18:30:00](https://it.slashdot.org/story/25/02/20/1827203/hp-deliberately-adds-15-minutes-waiting-time-for-telephone-support-calls?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [HP Deliberately Adds 15 Minutes Waiting Time For Telephone Support Calls](https://it.slashdot.org/story/25/02/20/1827203/hp-deliberately-adds-15-minutes-waiting-time-for-telephone-support-calls?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 18:01:00](https://science.slashdot.org/story/25/02/20/133212/rare-genetic-disorder-treated-in-womb-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Rare Genetic Disorder Treated in Womb For the First Time](https://science.slashdot.org/story/25/02/20/133212/rare-genetic-disorder-treated-in-womb-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 17:53:34](https://news.ycombinator.com/item?id=43117895) - [Show HN: WinCse – Integrating AWS S3 with Windows Explorer](https://github.com/cbh34680/WinCse)
* [2025-02-20, 17:37:12](https://lobste.rs/s/zsngat/announcing_rust_1_85_0_rust_2024) - [Announcing Rust 1.85.0 and Rust 2024](https://blog.rust-lang.org/2025/02/20/Rust-1.85.0.html)
* [2025-02-20, 17:27:00](https://soylentnews.org/article.pl?sid=25/02/20/1249208&from=rss) - [Scientists Use Crystals to Cram Terabytes of Data Into Millimeter-Sized Memory](https://soylentnews.org/article.pl?sid=25/02/20/1249208&from=rss)
* [2025-02-20, 17:20:00](https://slashdot.org/story/25/02/20/0828253/amazon-to-shut-down-chime-communications-platform-in-2026?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon To Shut Down Chime Communications Platform in 2026](https://slashdot.org/story/25/02/20/0828253/amazon-to-shut-down-chime-communications-platform-in-2026?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 16:59:49](https://news.ycombinator.com/item?id=43117159) - [Lifestyle and environmental factors affect health and ageing more than our genes](https://www.ox.ac.uk/news/2025-02-20-lifestyle-and-environmental-factors-affect-health-and-ageing-more-our-genes)
* [2025-02-20, 16:40:00](https://science.slashdot.org/story/25/02/20/1230236/research-reveals-data-on-which-institutions-are-retraction-hotspots?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Research Reveals Data on Which Institutions Are Retraction Hotspots](https://science.slashdot.org/story/25/02/20/1230236/research-reveals-data-on-which-institutions-are-retraction-hotspots?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 16:23:56](https://news.ycombinator.com/item?id=43116633) - [Launch HN: Confident AI (YC W25) – Open-source evaluation framework for LLM apps](https://news.ycombinator.com/item?id=43116633)
* [2025-02-20, 16:15:55](https://lobste.rs/s/im5ysx/ugly_code_dumb_things) - [Ugly Code and Dumb Things](https://lucumr.pocoo.org/2025/2/20/ugly-code/)
* [2025-02-20, 16:03:31](https://lobste.rs/s/ziemvn/new_interpreter_python_3_14_delivers_free) - [A new interpreter in Python 3.14 delivers a free speed boost](https://www.infoworld.com/article/3820890/a-new-interpreter-in-python-3-14-delivers-a-free-speed-boost.html)
* [2025-02-20, 16:02:29](https://lobste.rs/s/ui7yri/implementing_game_boy_emulator_ruby) - [Implementing a Game Boy emulator in Ruby](https://sacckey.dev/posts/implementing-a-game-boy-emulator-in-ruby/)
* [2025-02-20, 16:01:00](https://news.slashdot.org/story/25/02/20/1223208/melting-glaciers-caused-almost-2cm-of-sea-level-rise-this-century-study-reveals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Melting Glaciers Caused Almost 2cm of Sea Level Rise This Century, Study Reveals](https://news.slashdot.org/story/25/02/20/1223208/melting-glaciers-caused-almost-2cm-of-sea-level-rise-this-century-study-reveals?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 15:47:09](https://news.ycombinator.com/item?id=43116112) - [Spice86 – A PC emulator for real mode reverse engineering](https://github.com/OpenRakis/Spice86)
* [2025-02-20, 15:20:08](https://news.ycombinator.com/item?id=43115735) - [Lox – Oxidized Astrodynamics – A safe, ergonomic astrodynamics library](https://github.com/lox-space/lox)
* [2025-02-20, 15:20:00](https://slashdot.org/story/25/02/20/1117213/when-ai-thinks-it-will-lose-it-sometimes-cheats-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [When AI Thinks It Will Lose, It Sometimes Cheats, Study Finds](https://slashdot.org/story/25/02/20/1117213/when-ai-thinks-it-will-lose-it-sometimes-cheats-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 14:40:00](https://slashdot.org/story/25/02/20/0848204/malaysia-is-betting-on-data-centers-to-boost-its-economy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Malaysia is Betting on Data Centers To Boost Its Economy](https://slashdot.org/story/25/02/20/0848204/malaysia-is-betting-on-data-centers-to-boost-its-economy?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 14:30:54](https://news.ycombinator.com/item?id=43115079) - [Helix: A Vision-Language-Action Model for Generalist Humanoid Control](https://www.figure.ai/news/helix)
* [2025-02-20, 14:25:44](https://lobste.rs/s/wd9ine/retrospective_interview_w_leonard) - [A Retrospective Interview w/Leonard Richardson (of RMM fame)](https://htmx.org/essays/interviews/leonard-richardson/)
* [2025-02-20, 14:21:48](https://lobste.rs/s/jqyzio/five_kinds_nondeterminism) - [Five Kinds of Nondeterminism](https://buttondown.com/hillelwayne/archive/five-kinds-of-nondeterminism/)
* [2025-02-20, 14:20:07](https://lobste.rs/s/tlload/faq_on_microsoft_s_topological_qubit) - [FAQ on Microsoft’s topological qubit thing](https://scottaaronson.blog/?p=8669)
* [2025-02-20, 14:00:00](https://slashdot.org/story/25/02/20/1245240/amazon-to-shut-down-android-appstore?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon To Shut Down Android Appstore](https://slashdot.org/story/25/02/20/1245240/amazon-to-shut-down-android-appstore?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 13:40:05](https://lobste.rs/s/5ii6ie/travertine_cve_2025_24118_race_condition) - [TRAVERTINE (CVE-2025-24118): Race condition in XNU](https://jprx.io/cve-2025-24118/)
* [2025-02-20, 13:31:27](https://lobste.rs/s/s75rfx/sapf_forth_like_language_for_audio) - [sapf: - a Forth-like language for audio synthesis using lazy lists and APL-like auto-mapping](https://github.com/lfnoise/sapf)
* [2025-02-20, 13:27:56](https://lobste.rs/s/7cbgyr/ai_vs_extra_minute_shower) - [AI vs. an extra minute in the shower](https://kmaasrud.com/blog/ai-vs-shower.html)
* [2025-02-20, 13:26:17](https://news.ycombinator.com/item?id=43114362) - [RT64: N64 graphics renderer in emulators and native ports](https://github.com/rt64/rt64)
* [2025-02-20, 13:00:00](https://science.slashdot.org/story/25/02/20/0546242/scented-products-cause-indoor-air-pollution-on-par-with-car-exhaust?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Scented Products Cause Indoor Air Pollution On Par With Car Exhaust](https://science.slashdot.org/story/25/02/20/0546242/scented-products-cause-indoor-air-pollution-on-par-with-car-exhaust?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 12:45:00](https://soylentnews.org/article.pl?sid=25/02/20/1244255&from=rss) - [Noise-Cancelling Headphones Possible Source of Hearing Problems](https://soylentnews.org/article.pl?sid=25/02/20/1244255&from=rss)
* [2025-02-20, 12:13:57](https://news.ycombinator.com/item?id=43113790) - [Customizable HTML Select](https://developer.chrome.com/blog/rfc-customizable-select)
* [2025-02-20, 12:13:00](https://lobste.rs/s/ud4pbl/pgbouncer_is_useful_important_fraught) - [PgBouncer is useful, important, and fraught with peril](https://jpcamara.com/2023/04/12/pgbouncer-is-useful.html)
* [2025-02-20, 11:18:36](https://lobste.rs/s/sm7pk7/ipv6_transition) - [The IPv6 transition](https://blog.apnic.net/2024/10/22/the-ipv6-transition/)
* [2025-02-20, 10:29:37](https://news.ycombinator.com/item?id=43113134) - [Do ambiguous images provide psychological insights? Testing a popular claim](https://peerj.com/articles/19022/)
* [2025-02-20, 10:09:56](https://news.ycombinator.com/item?id=43113024) - [After 20 Years, Math Couple Solves Major Group Theory Problem](https://www.quantamagazine.org/after-20-years-math-couple-solves-major-group-theory-problem-20250219/)
* [2025-02-20, 10:00:00](https://tech.slashdot.org/story/25/02/20/0540215/canada-announces-first-high-speed-rail-between-toronto-and-quebec-city?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Canada Announces First High-Speed Rail Between Toronto and Quebec City](https://tech.slashdot.org/story/25/02/20/0540215/canada-announces-first-high-speed-rail-between-toronto-and-quebec-city?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 08:39:48](https://lobste.rs/s/yk5qhb/meshtastic_decentralized) - [Meshtastic: decentralized communication with low-power devices](https://lwn.net/SubscriberLink/1009782/1d1e1918a55396b6/)
* [2025-02-20, 07:53:00](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss) - [Scientists Just Discovered ‘Quipu,’ the New Largest Structure in Our Cosmos](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss)
* [2025-02-20, 07:25:20](https://news.ycombinator.com/item?id=43112021) - [FAQ on Microsoft's topological qubit thing](https://scottaaronson.blog/?p=8669)
* [2025-02-20, 07:01:00](https://news.slashdot.org/story/25/02/20/0333203/palantir-ceo-calls-for-tech-patriotism-warns-of-ai-warfare?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Palantir CEO Calls for Tech Patriotism, Warns of AI Warfare](https://news.slashdot.org/story/25/02/20/0333203/palantir-ceo-calls-for-tech-patriotism-warns-of-ai-warfare?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 03:10:00](https://soylentnews.org/article.pl?sid=25/02/19/033237&from=rss) - [Arm Poaching Talent to Produce Their Own Chips](https://soylentnews.org/article.pl?sid=25/02/19/033237&from=rss)
* [2025-02-20, 03:09:24](https://lobste.rs/s/w3ajso/raspberry_pi_rp2040_gets_surprise_speed) - [The Raspberry Pi RP2040 Gets a Surprise Speed Boost, Unlocks an Official 200MHz Mode](https://www.hackster.io/news/the-raspberry-pi-rp2040-gets-a-surprise-speed-boost-unlocks-an-official-200mhz-mode-d6c9d267de5a)
* [2025-02-20, 00:21:16](https://lobste.rs/s/isl4u6/demystifying_monads_rust_through) - [Demystifying monads in Rust through property-based testing](https://sunshowers.io/posts/monads-through-pbt/)
* [2025-02-19, 23:10:57](https://lobste.rs/s/patajy/what_i_saw_at_evolution_plan_9) - [What I Saw at the Evolution of Plan 9](https://adi.onl/oral.pdf)
* [2025-02-19, 22:39:02](https://news.ycombinator.com/item?id=43108673) - [AI killed the tech interview. Now what?](https://kanenarraway.com/posts/ai-killed-the-tech-interview-now-what/)
* [2025-02-19, 22:29:46](https://lobste.rs/s/ex0nul/build_your_own_sqlite_rust_part_5) - [Build your own SQLite in Rust, Part 5: Evaluating queries](https://blog.sylver.dev/build-your-own-sqlite-part-5-evaluating-queries)
* [2025-02-19, 22:27:29](https://lobste.rs/s/2t027q/we_trust_you_have_received_usual_lecture) - [We trust you have received the usual lecture from the local System Administrator](https://lobste.rs/s/2t027q/we_trust_you_have_received_usual_lecture)
* [2025-02-19, 22:23:00](https://soylentnews.org/article.pl?sid=25/02/18/224256&from=rss) - [Scented Products Cause Indoor Air Pollution on Par With Car Exhaust](https://soylentnews.org/article.pl?sid=25/02/18/224256&from=rss)
* [2025-02-19, 21:46:02](https://news.ycombinator.com/item?id=43108157) - [Egg prices are soaring. Are backyard chickens the answer?](https://civileats.com/2025/02/18/op-ed-egg-prices-are-soaring-bring-out-the-backyard-hens/)
* [2025-02-19, 21:41:07](https://news.ycombinator.com/item?id=43108091) - [1972 Unix V2 \"Beta\" Resurrected](https://www.tuhs.org/pipermail/tuhs/2025-February/031420.html)
* [2025-02-19, 19:11:22](https://lobste.rs/s/ktwqmj/typst_0_13_is_out_now_experimental_html) - [Typst 0.13 is out now: Experimental HTML export, semantic paragraphs, and more](https://typst.app/blog/2025/typst-0.13/)
* [2025-02-19, 18:54:00](https://soylentnews.org/meta/article.pl?sid=25/02/19/1852221&from=rss) - [SITE PROBLEMS](https://soylentnews.org/meta/article.pl?sid=25/02/19/1852221&from=rss)
* [2025-02-19, 17:48:08](https://news.ycombinator.com/item?id=43105028) - [When imperfect systems are good: Bluesky's lossy timelines](https://jazco.dev/2025/02/19/imperfection/)
* [2025-02-19, 17:41:00](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss) - [Record-Breaking Neutrino is Most Energetic Ever Detected](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss)
* [2025-02-19, 15:48:18](https://lobste.rs/s/hdj2q4/greg_kroah_hartman_makes_compelling_case) - [Greg Kroah-Hartman Makes A Compelling Case For New Linux Kernel Drivers To Be Written In Rust](https://www.phoronix.com/news/Greg-KH-On-New-Rust-Code)
* [2025-02-19, 13:17:55](https://lobste.rs/s/utonjg/being_happy_nixer_on_mac) - [Being a happy Nixer on a Mac](https://paretosecurity.com/blog/being-a-happy-nixer-on-a-mac)
* [2025-02-19, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss) - [Open Source Maintainers Are Feeling The Squeeze](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss)
* [2025-02-19, 08:10:00](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss) - [AI Study: AI Can Clone Itself Under the Right Conditions](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss)
* [2025-02-19, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss) - [New OpenSSH Flaws Enable Man-in-the-Middle and DoS Attacks](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss)
* [2025-02-18, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss) - [Chinese GPUs Surpass Nvidia Chips by Nearly Tenfold in Supercomputer Simulation](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss)
* [2025-02-18, 16:52:00](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss) - [New Book-Sorting Algorithm Almost Reaches Perfection](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss)
* [2025-02-18, 14:39:38](https://news.ycombinator.com/item?id=43089985) - [Show HN: EVMole for Analysing EVM Bytecode](https://evmole.xyz)
* [2025-02-18, 13:37:57](https://news.ycombinator.com/item?id=43089294) - [Show HN: Agriquery – helping people sell their food](https://agriquery.com)
* [2025-02-18, 12:04:00](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss) - [EU Bans Bisphenol A From Contact With Food](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss)
* [2025-02-18, 08:10:51](https://news.ycombinator.com/item?id=43087204) - [iText PDF Library turns 25](https://itextpdf.com/blog/technical-notes/itext-suite-91-25-years-svg-css-faster-tables)
* [2025-02-18, 07:19:00](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss) - [Targeting Amino Acids to Search for Life on Mars](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss)
* [2025-02-18, 02:29:00](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss) - [DOGE as a National Cyberattack](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss)
* [2025-02-17, 20:44:00](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss) - [Octet Of ESP32s Lets You See WiFi Like Never Before](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss)
* [2025-02-17, 16:02:00](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss) - [Women Speak Some 3000ish Words More Per Day Than Men](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss)
* [2025-02-17, 11:15:00](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss) - [Wiggling Ears May Have Once Helped Us Hear](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss)
* [2025-02-17, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss) - [AUKUS Blasts Holes In Lockbit's Bulletproof Hosting Provider](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss)
* [2025-02-17, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss) - [Ignorance Bliss When You’Re Drowning In Information](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss)
* [2025-02-16, 20:54:00](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss) - [The Guy Who Accidentally Threw Away $700 Million in Bitcoin Wants to Buy the Landfill to Find It](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss)
* [2025-02-16, 18:56:34](https://news.ycombinator.com/item?id=43070558) - [The 8-Bit Era's Weird Uncle: The TI-99/4A](https://bumbershootsoft.wordpress.com/2025/02/15/the-8-bit-eras-weird-uncle-the-ti-99-4a/)
* [2025-02-16, 16:12:00](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss) - [Waste Surveillance at Just 20 Airports Could Spot the Next Pandemic](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss)
* [2025-02-16, 11:27:00](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss) - [AI Reveals Hidden Interior Design Rules of the Cell](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss)
* [2025-02-16, 11:20:42](https://news.ycombinator.com/item?id=43067230) - [Animate Anyone 2: High-Fidelity Character Image Animation](https://humanaigc.github.io/animate-anyone-2/)
* [2025-02-16, 07:08:51](https://news.ycombinator.com/item?id=43066047) - [Softmax forever, or why I like softmax](https://kyunghyuncho.me/softmax-forever-or-why-i-like-softmax/)
* [2025-02-16, 06:42:00](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss) - [Key Takeaways From The Paris AI Summit](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss)
* [2025-02-16, 01:58:00](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss) - [If You Ever Stacked Cups In Gym Class, Blame My Dad](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss)
