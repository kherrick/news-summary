# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Machine Learning

* [When AI Thinks It Will Lose, It Sometimes Cheats, Study Finds](https://slashdot.org/story/25/02/20/1117213/when-ai-thinks-it-will-lose-it-sometimes-cheats-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43115735))

* [Grok 3: Another win for the bitter lesson](https://www.thealgorithmicbridge.com/p/grok-3-another-win-for-the-bitter) ([comments](https://news.ycombinator.com/item?id=43111963))

* [Helix: A Vision-Language-Action Model for Generalist Humanoid Control](https://www.figure.ai/news/helix) ([comments](https://news.ycombinator.com/item?id=43115079))

## Software and Programming

* [Demystifying monads in Rust through property-based testing](https://sunshowers.io/posts/monads-through-pbt/) ([comments](https://lobste.rs/s/isl4u6/demystifying_monads_rust_through))

* [CMU 17-712: Fantastic Bugs and How to Find Them](https://cmu-fantastic-bugs.github.io/) ([comments](https://lobste.rs/s/pemfzb/cmu_17_712_fantastic_bugs_how_find_them))

* [RT64: N64 graphics renderer in emulators and native ports](https://github.com/rt64/rt64) ([comments](https://news.ycombinator.com/item?id=43114362))

## Science and Technology Breakthroughs

* [After 20 Years, Math Couple Solves Major Group Theory Problem](https://www.quantamagazine.org/after-20-years-math-couple-solves-major-group-theory-problem-20250219/) ([comments](https://news.ycombinator.com/item?id=43113024))

* [Scientists Just Discovered ‘Quipu,’ the New Largest Structure in Our Cosmos](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss) ([comments](https://news.ycombinator.com/item?id=43112084))

* [TRAVERTINE (CVE-2025-24118): Race condition in XNU](https://jprx.io/cve-2025-24118/) ([comments](https://lobste.rs/s/5ii6ie/travertine_cve_2025_24118_race_condition))

## Infrastructure and Economic Development

* [Malaysia is Betting on Data Centers To Boost Its Economy](https://slashdot.org/story/25/02/20/0848204/malaysia-is-betting-on-data-centers-to-boost-its-economy?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43113397))

* [Canada Announces First High-Speed Rail Between Toronto and Quebec City](https://tech.slashdot.org/story/25/02/20/0540215/canada-announces-first-high-speed-rail-between-toronto-and-quebec-city?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43112084))

## Consumer and Environmental Insights

* [Scented Products Cause Indoor Air Pollution On Par With Car Exhaust](https://science.slashdot.org/story/25/02/20/0546242/scented-products-cause-indoor-air-pollution-on-par-with-car-exhaust?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43108673))

* [Noise-Cancelling Headphones Possible Source of Hearing Problems](https://soylentnews.org/article.pl?sid=25/02/20/1244255&from=rss) ([comments](https://news.ycombinator.com/item?id=43114362))

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

* [2025-02-20, 15:20:08](https://news.ycombinator.com/item?id=43115735) - [Lox – Oxidized Astrodynamics – A safe, ergonomic astrodynamics library](https://github.com/lox-space/lox)
* [2025-02-20, 15:20:00](https://slashdot.org/story/25/02/20/1117213/when-ai-thinks-it-will-lose-it-sometimes-cheats-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [When AI Thinks It Will Lose, It Sometimes Cheats, Study Finds](https://slashdot.org/story/25/02/20/1117213/when-ai-thinks-it-will-lose-it-sometimes-cheats-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 15:10:38](https://lobste.rs/s/pemfzb/cmu_17_712_fantastic_bugs_how_find_them) - [CMU 17-712: Fantastic Bugs and How to Find Them](https://cmu-fantastic-bugs.github.io/)
* [2025-02-20, 14:40:00](https://slashdot.org/story/25/02/20/0848204/malaysia-is-betting-on-data-centers-to-boost-its-economy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Malaysia is Betting on Data Centers To Boost Its Economy](https://slashdot.org/story/25/02/20/0848204/malaysia-is-betting-on-data-centers-to-boost-its-economy?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 14:30:54](https://news.ycombinator.com/item?id=43115079) - [Helix: A Vision-Language-Action Model for Generalist Humanoid Control](https://www.figure.ai/news/helix)
* [2025-02-20, 14:25:44](https://lobste.rs/s/wd9ine/retrospective_interview_w_leonard) - [A Retrospective Interview w/Leonard Richardson (of RMM fame)](https://htmx.org/essays/interviews/leonard-richardson/)
* [2025-02-20, 14:21:48](https://lobste.rs/s/jqyzio/five_kinds_nondeterminism) - [Five Kinds of Nondeterminism](https://buttondown.com/hillelwayne/archive/five-kinds-of-nondeterminism/)
* [2025-02-20, 14:20:07](https://lobste.rs/s/tlload/faq_on_microsoft_s_topological_qubit) - [FAQ on Microsoft’s topological qubit thing](https://scottaaronson.blog/?p=8669)
* [2025-02-20, 13:40:05](https://lobste.rs/s/5ii6ie/travertine_cve_2025_24118_race_condition) - [TRAVERTINE (CVE-2025-24118): Race condition in XNU](https://jprx.io/cve-2025-24118/)
* [2025-02-20, 13:31:27](https://lobste.rs/s/s75rfx/sapf_forth_like_language_for_audio) - [sapf: - a Forth-like language for audio synthesis using lazy lists and APL-like auto-mapping](https://github.com/lfnoise/sapf)
* [2025-02-20, 13:27:56](https://lobste.rs/s/7cbgyr/ai_vs_extra_minute_shower) - [AI vs. an extra minute in the shower](https://kmaasrud.com/blog/ai-vs-shower.html)
* [2025-02-20, 13:26:17](https://news.ycombinator.com/item?id=43114362) - [RT64: N64 graphics renderer in emulators and native ports](https://github.com/rt64/rt64)
* [2025-02-20, 13:00:00](https://science.slashdot.org/story/25/02/20/0546242/scented-products-cause-indoor-air-pollution-on-par-with-car-exhaust?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Scented Products Cause Indoor Air Pollution On Par With Car Exhaust](https://science.slashdot.org/story/25/02/20/0546242/scented-products-cause-indoor-air-pollution-on-par-with-car-exhaust?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 12:45:00](https://slashdot.org/story/25/02/20/1245240/amazon-to-shut-down-android-appstore?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon To Shut Down Android Appstore](https://slashdot.org/story/25/02/20/1245240/amazon-to-shut-down-android-appstore?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 12:45:00](https://soylentnews.org/article.pl?sid=25/02/20/1244255&from=rss) - [Noise-Cancelling Headphones Possible Source of Hearing Problems](https://soylentnews.org/article.pl?sid=25/02/20/1244255&from=rss)
* [2025-02-20, 12:13:00](https://lobste.rs/s/ud4pbl/pgbouncer_is_useful_important_fraught) - [PgBouncer is useful, important, and fraught with peril](https://jpcamara.com/2023/04/12/pgbouncer-is-useful.html)
* [2025-02-20, 11:18:36](https://lobste.rs/s/sm7pk7/ipv6_transition) - [The IPv6 transition](https://blog.apnic.net/2024/10/22/the-ipv6-transition/)
* [2025-02-20, 11:13:46](https://news.ycombinator.com/item?id=43113397) - [The Amazon Appstore for Android devices will be discontinued on August 20, 2025](https://www.amazon.com/gp/mas/appstore/android/faq)
* [2025-02-20, 10:09:56](https://news.ycombinator.com/item?id=43113024) - [After 20 Years, Math Couple Solves Major Group Theory Problem](https://www.quantamagazine.org/after-20-years-math-couple-solves-major-group-theory-problem-20250219/)
* [2025-02-20, 10:00:00](https://tech.slashdot.org/story/25/02/20/0540215/canada-announces-first-high-speed-rail-between-toronto-and-quebec-city?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Canada Announces First High-Speed Rail Between Toronto and Quebec City](https://tech.slashdot.org/story/25/02/20/0540215/canada-announces-first-high-speed-rail-between-toronto-and-quebec-city?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 08:39:48](https://lobste.rs/s/yk5qhb/meshtastic_decentralized) - [Meshtastic: decentralized communication with low-power devices](https://lwn.net/SubscriberLink/1009782/1d1e1918a55396b6/)
* [2025-02-20, 07:53:00](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss) - [Scientists Just Discovered ‘Quipu,’ the New Largest Structure in Our Cosmos](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss)
* [2025-02-20, 07:36:34](https://news.ycombinator.com/item?id=43112084) - [DOGE has 'god mode' access to government data](https://www.theatlantic.com/technology/archive/2025/02/doge-god-mode-access/681719/)
* [2025-02-20, 07:25:20](https://news.ycombinator.com/item?id=43112021) - [FAQ on Microsoft's topological qubit thing](https://scottaaronson.blog/?p=8669)
* [2025-02-20, 07:15:12](https://news.ycombinator.com/item?id=43111963) - [Grok 3: Another win for the bitter lesson](https://www.thealgorithmicbridge.com/p/grok-3-another-win-for-the-bitter)
* [2025-02-20, 07:01:00](https://news.slashdot.org/story/25/02/20/0333203/palantir-ceo-calls-for-tech-patriotism-warns-of-ai-warfare?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Palantir CEO Calls for Tech Patriotism, Warns of AI Warfare](https://news.slashdot.org/story/25/02/20/0333203/palantir-ceo-calls-for-tech-patriotism-warns-of-ai-warfare?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 07:00:22](https://news.ycombinator.com/item?id=43111898) - [The Forecasting Company (YC S24) Is Hiring](https://www.ycombinator.com/companies/the-forecasting-company/jobs/yxUzVUm-founding-machine-learning-engineer)
* [2025-02-20, 05:09:38](https://news.ycombinator.com/item?id=43111335) - [KubeVPN: Revolutionizing Kubernetes Local Development](https://github.com/kubenetworks/kubevpn)
* [2025-02-20, 05:00:00](https://it.slashdot.org/story/25/02/20/0227241/microsoft-declutters-windows-11-file-explorer-in-the-name-of-euro-privacy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Declutters Windows 11 File Explorer in the Name of Euro Privacy](https://it.slashdot.org/story/25/02/20/0227241/microsoft-declutters-windows-11-file-explorer-in-the-name-of-euro-privacy?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 03:30:00](https://hardware.slashdot.org/story/25/02/19/2211224/chinas-electric-vehicle-to-humanoid-robot-pivot?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [China's Electric-Vehicle-To-Humanoid-Robot Pivot](https://hardware.slashdot.org/story/25/02/19/2211224/chinas-electric-vehicle-to-humanoid-robot-pivot?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 03:10:00](https://soylentnews.org/article.pl?sid=25/02/19/033237&from=rss) - [Arm Poaching Talent to Produce Their Own Chips](https://soylentnews.org/article.pl?sid=25/02/19/033237&from=rss)
* [2025-02-20, 03:09:24](https://lobste.rs/s/w3ajso/raspberry_pi_rp2040_gets_surprise_speed) - [The Raspberry Pi RP2040 Gets a Surprise Speed Boost, Unlocks an Official 200MHz Mode](https://www.hackster.io/news/the-raspberry-pi-rp2040-gets-a-surprise-speed-boost-unlocks-an-official-200mhz-mode-d6c9d267de5a)
* [2025-02-20, 01:06:56](https://news.ycombinator.com/item?id=43109903) - [Obscura VPN – Privacy that's more than a promise](https://obscura.net/)
* [2025-02-20, 01:00:00](https://news.slashdot.org/story/25/02/19/221253/historic-ocean-liner-departs-philadelphia-on-voyage-to-become-the-worlds-largest-artificial-reef?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Historic Ocean Liner Departs Philadelphia On Voyage To Become the World's Largest Artificial Reef](https://news.slashdot.org/story/25/02/19/221253/historic-ocean-liner-departs-philadelphia-on-voyage-to-become-the-worlds-largest-artificial-reef?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 00:21:16](https://lobste.rs/s/isl4u6/demystifying_monads_rust_through) - [Demystifying monads in Rust through property-based testing](https://sunshowers.io/posts/monads-through-pbt/)
* [2025-02-19, 23:53:28](https://news.ycombinator.com/item?id=43109366) - [Scented products cause indoor air pollution on par with car exhaust](https://newatlas.com/environment/indoor-air-pollution-scented-terpenes/)
* [2025-02-19, 23:10:57](https://lobste.rs/s/patajy/what_i_saw_at_evolution_plan_9) - [What I Saw at the Evolution of Plan 9](https://adi.onl/oral.pdf)
* [2025-02-19, 23:00:00](https://yro.slashdot.org/story/25/02/19/2151255/murena-released-a-de-googled-version-of-the-pixel-tablet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Murena Released a De-Googled Version of the Pixel Tablet](https://yro.slashdot.org/story/25/02/19/2151255/murena-released-a-de-googled-version-of-the-pixel-tablet?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 22:39:02](https://news.ycombinator.com/item?id=43108673) - [AI killed the tech interview. Now what?](https://kanenarraway.com/posts/ai-killed-the-tech-interview-now-what/)
* [2025-02-19, 22:32:18](https://news.ycombinator.com/item?id=43108614) - [Build your own SQLite in Rust, Part 5: Evaluating queries](https://blog.sylver.dev/build-your-own-sqlite-part-5-evaluating-queries)
* [2025-02-19, 22:29:46](https://lobste.rs/s/ex0nul/build_your_own_sqlite_rust_part_5) - [Build your own SQLite in Rust, Part 5: Evaluating queries](https://blog.sylver.dev/build-your-own-sqlite-part-5-evaluating-queries)
* [2025-02-19, 22:27:29](https://lobste.rs/s/2t027q/we_trust_you_have_received_usual_lecture) - [We trust you have received the usual lecture from the local System Administrator](https://lobste.rs/s/2t027q/we_trust_you_have_received_usual_lecture)
* [2025-02-19, 22:23:00](https://soylentnews.org/article.pl?sid=25/02/18/224256&from=rss) - [Scented Products Cause Indoor Air Pollution on Par With Car Exhaust](https://soylentnews.org/article.pl?sid=25/02/18/224256&from=rss)
* [2025-02-19, 22:20:00](https://games.slashdot.org/story/25/02/19/2145217/valve-releases-team-fortress-2-full-client-and-source-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Valve Releases Team Fortress 2 Full Client and Source Code](https://games.slashdot.org/story/25/02/19/2145217/valve-releases-team-fortress-2-full-client-and-source-code?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 21:46:02](https://news.ycombinator.com/item?id=43108157) - [Egg prices are soaring. Are backyard chickens the answer?](https://civileats.com/2025/02/18/op-ed-egg-prices-are-soaring-bring-out-the-backyard-hens/)
* [2025-02-19, 21:41:07](https://news.ycombinator.com/item?id=43108091) - [1972 Unix V2 \"Beta\" Resurrected](https://www.tuhs.org/pipermail/tuhs/2025-February/031420.html)
* [2025-02-19, 21:40:00](https://it.slashdot.org/story/25/02/19/2059256/palo-alto-firewalls-under-attack-as-miscreants-chain-flaws-for-root-access?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Palo Alto Firewalls Under Attack As Miscreants Chain Flaws For Root Access](https://it.slashdot.org/story/25/02/19/2059256/palo-alto-firewalls-under-attack-as-miscreants-chain-flaws-for-root-access?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 21:00:00](https://games.slashdot.org/story/25/02/19/2051259/microsoft-shows-progress-toward-real-time-ai-generated-game-worlds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Shows Progress Toward Real-Time AI-Generated Game Worlds](https://games.slashdot.org/story/25/02/19/2051259/microsoft-shows-progress-toward-real-time-ai-generated-game-worlds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 20:36:29](https://lobste.rs/s/2oykhm/practical_alloy_hands_on_guide_formal) - [Practical Alloy: A hands-on guide to formal software design](https://practicalalloy.github.io/)
* [2025-02-19, 20:01:00](https://news.slashdot.org/story/25/02/19/1942232/us-army-soldier-pleads-guilty-to-att-and-verizon-hacks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Army Soldier Pleads Guilty To AT&amp;T and Verizon Hacks](https://news.slashdot.org/story/25/02/19/1942232/us-army-soldier-pleads-guilty-to-att-and-verizon-hacks?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 19:22:00](https://science.slashdot.org/story/25/02/19/1922241/france-runs-fusion-reactor-for-record-22-minutes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [France Runs Fusion Reactor For Record 22 Minutes](https://science.slashdot.org/story/25/02/19/1922241/france-runs-fusion-reactor-for-record-22-minutes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 19:11:22](https://lobste.rs/s/ktwqmj/typst_0_13_is_out_now_experimental_html) - [Typst 0.13 is out now: Experimental HTML export, semantic paragraphs, and more](https://typst.app/blog/2025/typst-0.13/)
* [2025-02-19, 18:54:00](https://soylentnews.org/meta/article.pl?sid=25/02/19/1852221&from=rss) - [SITE PROBLEMS](https://soylentnews.org/meta/article.pl?sid=25/02/19/1852221&from=rss)
* [2025-02-19, 18:14:16](https://lobste.rs/s/a1thyf/when_imperfect_systems_are_good_actually) - [When Imperfect Systems are Good, Actually: Bluesky’s Lossy Timelines](https://jazco.dev/2025/02/19/imperfection/)
* [2025-02-19, 17:48:08](https://news.ycombinator.com/item?id=43105028) - [When imperfect systems are good: Bluesky's lossy timelines](https://jazco.dev/2025/02/19/imperfection/)
* [2025-02-19, 17:41:00](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss) - [Record-Breaking Neutrino is Most Energetic Ever Detected](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss)
* [2025-02-19, 17:33:46](https://lobste.rs/s/et8xra/collection_code_examples_from_prominent) - [A collection of code examples from prominent open-source projects (2021)](https://codecatalog.org/)
* [2025-02-19, 16:56:11](https://lobste.rs/s/gydrm1/secret_maze_debian_images) - [The secret maze of Debian images](https://blog.fai-project.org/posts/cdimages-maze/)
* [2025-02-19, 16:05:10](https://news.ycombinator.com/item?id=43103604) - [Relaxed Radix Balanced Trees (2024)](https://peter.horne-khan.com/relaxed-radix-balanced-trees/)
* [2025-02-19, 15:48:18](https://lobste.rs/s/hdj2q4/greg_kroah_hartman_makes_compelling_case) - [Greg Kroah-Hartman Makes A Compelling Case For New Linux Kernel Drivers To Be Written In Rust](https://www.phoronix.com/news/Greg-KH-On-New-Rust-Code)
* [2025-02-19, 15:45:32](https://lobste.rs/s/gi6ed9/http3_2_1) - [HTTP3, 2, 1](https://maxmcd.com/posts/http321/)
* [2025-02-19, 15:25:08](https://news.ycombinator.com/item?id=43103073) - [Show HN: Mastra – Open-source JS agent framework, by the developers of Gatsby](https://github.com/mastra-ai/mastra)
* [2025-02-19, 14:05:23](https://news.ycombinator.com/item?id=43102284) - [Multiple Russia-aligned threat actors actively targeting Signal Messenger](https://cloud.google.com/blog/topics/threat-intelligence/russia-targeting-signal-messenger)
* [2025-02-19, 13:17:55](https://lobste.rs/s/utonjg/being_happy_nixer_on_mac) - [Being a happy Nixer on a Mac](https://paretosecurity.com/blog/being-a-happy-nixer-on-a-mac)
* [2025-02-19, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss) - [Open Source Maintainers Are Feeling The Squeeze](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss)
* [2025-02-19, 12:36:06](https://news.ycombinator.com/item?id=43101383) - [Broken legs and ankles heal better if you walk on them within weeks](https://www.scientificamerican.com/article/broken-legs-and-ankles-heal-better-if-you-walk-on-them-within-weeks/)
* [2025-02-19, 09:24:50](https://lobste.rs/s/oizlxo/add_wayland_color_management_protocol) - [Add Wayland color-management protocol](https://gitlab.freedesktop.org/wayland/wayland-protocols/-/commit/452e943b4991)
* [2025-02-19, 08:10:00](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss) - [AI Study: AI Can Clone Itself Under the Right Conditions](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss)
* [2025-02-19, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss) - [New OpenSSH Flaws Enable Man-in-the-Middle and DoS Attacks](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss)
* [2025-02-19, 02:21:15](https://lobste.rs/s/8mexgt/tcl_misunderstood_2006) - [Tcl the Misunderstood (2006)](https://antirez.com/articoli/tclmisunderstood.html)
* [2025-02-18, 23:29:17](https://news.ycombinator.com/item?id=43096477) - [Show HN: Subtrace – Wireshark for Docker Containers](https://github.com/subtrace/subtrace)
* [2025-02-18, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss) - [Chinese GPUs Surpass Nvidia Chips by Nearly Tenfold in Supercomputer Simulation](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss)
* [2025-02-18, 16:52:00](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss) - [New Book-Sorting Algorithm Almost Reaches Perfection](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss)
* [2025-02-18, 14:53:44](https://news.ycombinator.com/item?id=43090167) - [Agent-Less System Monitoring with Elixir Broadway](https://opsmaru.com/blog/agent-less-system-monitoring-with-elixir-broadway)
* [2025-02-18, 13:31:49](https://news.ycombinator.com/item?id=43089238) - [Show HN: A Fast HTTP Request CLI Powered by HTTL](https://httl.dev/docs/cli)
* [2025-02-18, 12:34:12](https://news.ycombinator.com/item?id=43088773) - [All-optical control of charge-trapping defects in rare-earth doped oxides](https://www.degruyter.com/document/doi/10.1515/nanoph-2024-0635/html)
* [2025-02-18, 12:04:00](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss) - [EU Bans Bisphenol A From Contact With Food](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss)
* [2025-02-18, 07:19:00](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss) - [Targeting Amino Acids to Search for Life on Mars](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss)
* [2025-02-18, 02:29:00](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss) - [DOGE as a National Cyberattack](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss)
* [2025-02-17, 21:24:17](https://news.ycombinator.com/item?id=43083429) - [F8 – an 8 bit architecture designed for C and memory efficiency [video]](https://fosdem.org/2025/schedule/event/fosdem-2025-4902-f8-an-8-bit-architecture-designed-for-c-and-memory-efficiency/)
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
* [2025-02-16, 08:20:25](https://news.ycombinator.com/item?id=43066328) - [Speed matters (2021)](https://www.scattered-thoughts.net/writing/speed-matters/)
* [2025-02-16, 07:08:51](https://news.ycombinator.com/item?id=43066047) - [Softmax forever, or why I like softmax](https://kyunghyuncho.me/softmax-forever-or-why-i-like-softmax/)
* [2025-02-16, 06:42:00](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss) - [Key Takeaways From The Paris AI Summit](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss)
* [2025-02-16, 01:58:00](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss) - [If You Ever Stacked Cups In Gym Class, Blame My Dad](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss)
