# [News Summary](https://kherrick.github.io/news-summary/)

## Decentralized Technologies and Communication

* [Meshtastic: decentralized communication with low-power devices](https://lwn.net/SubscriberLink/1009782/1d1e1918a55396b6/) ([comments](https://lobste.rs/s/yk5qhb/meshtastic_decentralized)) - An in-depth look at low-power, decentralized mesh communication using Meshtastic technology.

## Computing Innovations

* [The Plan 9 Foundation](https://plan9foundation.org/) ([comments](https://news.ycombinator.com/item?id=43112036)) - A new organization dedicated to the continued evolution and support of Plan 9, a revolutionary distributed operating system.

* [FAQ on Microsoft's topological qubit thing](https://scottaaronson.blog/?p=8669) ([comments](https://news.ycombinator.com/item?id=43112021)) - A deep dive into the science behind Microsoft's advancement in topological qubits.

* [KubeVPN: Revolutionizing Kubernetes Local Development](https://github.com/kubenetworks/kubevpn) ([comments](https://news.ycombinator.com/item?id=43111335)) - Exploring a novel approach to enhance Kubernetes development with KubeVPN.

* [Magma: A foundation model for multimodal AI agents](https://microsoft.github.io/Magma/) ([comments](https://news.ycombinator.com/item?id=43110265)) - Microsoft's latest AI framework for designing versatile multimodal agents.

## Cosmos and Scientific Discoveries

* [Scientists Just Discovered ‘Quipu,’ the New Largest Structure in Our Cosmos](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss)) - A groundbreaking discovery and its implications for our understanding of the universe.

## Unique Developments in AI

* [Palantir CEO Calls for Tech Patriotism, Warns of AI Warfare](https://news.slashdot.org/story/25/02/20/0333203/palantir-ceo-calls-for-tech-patriotism-warns-of-ai-warfare?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/02/20/0333203/palantir-ceo-calls-for-tech-patriotism-warns-of-ai-warfare?utm_source=rss1.0mainlinkanon&utm_medium=feed)) - A key conversation on the geopolitics and future direction of AI-driven warfare.

* [Microsoft Shows Progress Toward Real-Time AI-Generated Game Worlds](https://games.slashdot.org/story/25/02/19/2051259/microsoft-shows-progress-toward-real-time-ai-generated-game-worlds?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://games.slashdot.org/story/25/02/19/2051259/microsoft-shows-progress-toward-real-time-ai-generated-game-worlds?utm_source=rss1.0mainlinkanon&utm_medium=feed)) - Advancements in using AI to create immersive, real-time gaming environments.

* [DOGE has 'god mode' access to government data](https://www.theatlantic.com/technology/archive/2025/02/doge-god-mode-access/681719/) ([comments](https://news.ycombinator.com/item?id=43112084)) - The unexpected influence and capabilities of DOGE in the intersection of technology and governance.

## Specialized Hardware and Devices

* [The Raspberry Pi RP2040 Gets a Surprise Speed Boost, Unlocks an Official 200MHz Mode](https://www.hackster.io/news/the-raspberry-pi-rp2040-gets-a-surprise-speed-boost-unlocks-an-official-200mhz-mode-d6c9d267de5a) ([comments](https://lobste.rs/s/w3ajso/raspberry_pi_rp2040_gets_surprise_speed)) - A new performance enhancement for Raspberry Pi's microcontroller chip.

## Environment and Sustainability

* [Historic Ocean Liner Departs Philadelphia On Voyage To Become the World's Largest Artificial Reef](https://news.slashdot.org/story/25/02/19/221253/historic-ocean-liner-departs-philadelphia-on-voyage-to-become-the-worlds-largest-artificial-reef?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/02/19/221253/historic-ocean-liner-departs-philadelphia-on-voyage-to-become-the-worlds-largest-artificial-reef?utm_source=rss1.0mainlinkanon&utm_medium=feed)) - A transformative repurposing of a historic ship to benefit marine ecosystems.

## Education and Programming

* [Demystifying monads in Rust through property-based testing](https://sunshowers.io/posts/monads-through-pbt/) ([comments](https://lobste.rs/s/isl4u6/demystifying_monads_rust_through)) - An approachable narrative unpacking an advanced functional programming concept using Rust.

* [Build your own SQLite in Rust, Part 5: Evaluating queries](https://blog.sylver.dev/build-your-own-sqlite-part-5-evaluating-queries) ([comments](https://news.ycombinator.com/item?id=43108614)) - A hands-on guide to database development in Rust.

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

* [2025-02-20, 08:39:48](https://lobste.rs/s/yk5qhb/meshtastic_decentralized) - [Meshtastic: decentralized communication with low-power devices](https://lwn.net/SubscriberLink/1009782/1d1e1918a55396b6/)
* [2025-02-20, 07:53:00](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss) - [Scientists Just Discovered ‘Quipu,’ the New Largest Structure in Our Cosmos](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss)
* [2025-02-20, 07:36:34](https://news.ycombinator.com/item?id=43112084) - [DOGE has 'god mode' access to government data](https://www.theatlantic.com/technology/archive/2025/02/doge-god-mode-access/681719/)
* [2025-02-20, 07:27:55](https://news.ycombinator.com/item?id=43112036) - [The Plan 9 Foundation](https://plan9foundation.org/)
* [2025-02-20, 07:25:20](https://news.ycombinator.com/item?id=43112021) - [FAQ on Microsoft's topological qubit thing](https://scottaaronson.blog/?p=8669)
* [2025-02-20, 07:15:12](https://news.ycombinator.com/item?id=43111963) - [Grok 3: Another win for the bitter lesson](https://www.thealgorithmicbridge.com/p/grok-3-another-win-for-the-bitter)
* [2025-02-20, 07:01:00](https://news.slashdot.org/story/25/02/20/0333203/palantir-ceo-calls-for-tech-patriotism-warns-of-ai-warfare?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Palantir CEO Calls for Tech Patriotism, Warns of AI Warfare](https://news.slashdot.org/story/25/02/20/0333203/palantir-ceo-calls-for-tech-patriotism-warns-of-ai-warfare?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 07:00:22](https://news.ycombinator.com/item?id=43111898) - [The Forecasting Company (YC S24) Is Hiring](https://www.ycombinator.com/companies/the-forecasting-company/jobs/yxUzVUm-founding-machine-learning-engineer)
* [2025-02-20, 05:09:38](https://news.ycombinator.com/item?id=43111335) - [KubeVPN: Revolutionizing Kubernetes Local Development](https://github.com/kubenetworks/kubevpn)
* [2025-02-20, 05:00:00](https://it.slashdot.org/story/25/02/20/0227241/microsoft-declutters-windows-11-file-explorer-in-the-name-of-euro-privacy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Declutters Windows 11 File Explorer in the Name of Euro Privacy](https://it.slashdot.org/story/25/02/20/0227241/microsoft-declutters-windows-11-file-explorer-in-the-name-of-euro-privacy?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 03:30:00](https://hardware.slashdot.org/story/25/02/19/2211224/chinas-electric-vehicle-to-humanoid-robot-pivot?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [China's Electric-Vehicle-To-Humanoid-Robot Pivot](https://hardware.slashdot.org/story/25/02/19/2211224/chinas-electric-vehicle-to-humanoid-robot-pivot?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 03:10:00](https://soylentnews.org/article.pl?sid=25/02/19/033237&from=rss) - [Arm Poaching Talent to Produce Their Own Chips](https://soylentnews.org/article.pl?sid=25/02/19/033237&from=rss)
* [2025-02-20, 03:09:24](https://lobste.rs/s/w3ajso/raspberry_pi_rp2040_gets_surprise_speed) - [The Raspberry Pi RP2040 Gets a Surprise Speed Boost, Unlocks an Official 200MHz Mode](https://www.hackster.io/news/the-raspberry-pi-rp2040-gets-a-surprise-speed-boost-unlocks-an-official-200mhz-mode-d6c9d267de5a)
* [2025-02-20, 02:11:25](https://news.ycombinator.com/item?id=43110265) - [Magma: A foundation model for multimodal AI agents](https://microsoft.github.io/Magma/)
* [2025-02-20, 01:54:10](https://news.ycombinator.com/item?id=43110173) - [Run structured extraction on documents/images locally with Ollama and Pydantic](https://github.com/vlm-run/vlmrun-hub)
* [2025-02-20, 01:06:56](https://news.ycombinator.com/item?id=43109903) - [Obscura VPN – Privacy that's more than a promise](https://obscura.net/)
* [2025-02-20, 01:00:00](https://news.slashdot.org/story/25/02/19/221253/historic-ocean-liner-departs-philadelphia-on-voyage-to-become-the-worlds-largest-artificial-reef?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Historic Ocean Liner Departs Philadelphia On Voyage To Become the World's Largest Artificial Reef](https://news.slashdot.org/story/25/02/19/221253/historic-ocean-liner-departs-philadelphia-on-voyage-to-become-the-worlds-largest-artificial-reef?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 00:21:16](https://lobste.rs/s/isl4u6/demystifying_monads_rust_through) - [Demystifying monads in Rust through property-based testing](https://sunshowers.io/posts/monads-through-pbt/)
* [2025-02-19, 23:53:28](https://news.ycombinator.com/item?id=43109366) - [Scented products cause indoor air pollution on par with car exhaust](https://newatlas.com/environment/indoor-air-pollution-scented-terpenes/)
* [2025-02-19, 23:40:03](https://news.ycombinator.com/item?id=43109255) - [What Makes a Great Software Engineer (Dissertation) (2016) [pdf]](https://faculty.washington.edu/ajko/dissertations/Li2016Dissertation.pdf)
* [2025-02-19, 23:10:57](https://lobste.rs/s/patajy/what_i_saw_at_evolution_plan_9) - [What I Saw at the Evolution of Plan 9](https://adi.onl/oral.pdf)
* [2025-02-19, 23:00:00](https://yro.slashdot.org/story/25/02/19/2151255/murena-released-a-de-googled-version-of-the-pixel-tablet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Murena Released a De-Googled Version of the Pixel Tablet](https://yro.slashdot.org/story/25/02/19/2151255/murena-released-a-de-googled-version-of-the-pixel-tablet?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 22:32:18](https://news.ycombinator.com/item?id=43108614) - [Build your own SQLite in Rust, Part 5: Evaluating queries](https://blog.sylver.dev/build-your-own-sqlite-part-5-evaluating-queries)
* [2025-02-19, 22:29:46](https://lobste.rs/s/ex0nul/build_your_own_sqlite_rust_part_5) - [Build your own SQLite in Rust, Part 5: Evaluating queries](https://blog.sylver.dev/build-your-own-sqlite-part-5-evaluating-queries)
* [2025-02-19, 22:27:29](https://lobste.rs/s/2t027q/we_trust_you_have_received_usual_lecture) - [We trust you have received the usual lecture from the local System Administrator](https://lobste.rs/s/2t027q/we_trust_you_have_received_usual_lecture)
* [2025-02-19, 22:23:00](https://soylentnews.org/article.pl?sid=25/02/18/224256&from=rss) - [Scented Products Cause Indoor Air Pollution on Par With Car Exhaust](https://soylentnews.org/article.pl?sid=25/02/18/224256&from=rss)
* [2025-02-19, 22:20:00](https://games.slashdot.org/story/25/02/19/2145217/valve-releases-team-fortress-2-full-client-and-source-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Valve Releases Team Fortress 2 Full Client and Source Code](https://games.slashdot.org/story/25/02/19/2145217/valve-releases-team-fortress-2-full-client-and-source-code?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 22:14:38](https://lobste.rs/s/g38ges/knight_tv_resurrection) - [Knight TV resurrection](http://pdp-6.net/knight-tv/knight-tv.html)
* [2025-02-19, 21:46:02](https://news.ycombinator.com/item?id=43108157) - [Egg prices are soaring. Are backyard chickens the answer?](https://civileats.com/2025/02/18/op-ed-egg-prices-are-soaring-bring-out-the-backyard-hens/)
* [2025-02-19, 21:41:07](https://news.ycombinator.com/item?id=43108091) - [1972 Unix V2 \"Beta\" Resurrected](https://www.tuhs.org/pipermail/tuhs/2025-February/031420.html)
* [2025-02-19, 21:40:00](https://it.slashdot.org/story/25/02/19/2059256/palo-alto-firewalls-under-attack-as-miscreants-chain-flaws-for-root-access?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Palo Alto Firewalls Under Attack As Miscreants Chain Flaws For Root Access](https://it.slashdot.org/story/25/02/19/2059256/palo-alto-firewalls-under-attack-as-miscreants-chain-flaws-for-root-access?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 21:00:00](https://games.slashdot.org/story/25/02/19/2051259/microsoft-shows-progress-toward-real-time-ai-generated-game-worlds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Shows Progress Toward Real-Time AI-Generated Game Worlds](https://games.slashdot.org/story/25/02/19/2051259/microsoft-shows-progress-toward-real-time-ai-generated-game-worlds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 20:36:29](https://lobste.rs/s/2oykhm/practical_alloy_hands_on_guide_formal) - [Practical Alloy: A hands-on guide to formal software design](https://practicalalloy.github.io/)
* [2025-02-19, 20:01:00](https://news.slashdot.org/story/25/02/19/1942232/us-army-soldier-pleads-guilty-to-att-and-verizon-hacks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Army Soldier Pleads Guilty To AT&amp;T and Verizon Hacks](https://news.slashdot.org/story/25/02/19/1942232/us-army-soldier-pleads-guilty-to-att-and-verizon-hacks?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 19:22:00](https://science.slashdot.org/story/25/02/19/1922241/france-runs-fusion-reactor-for-record-22-minutes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [France Runs Fusion Reactor For Record 22 Minutes](https://science.slashdot.org/story/25/02/19/1922241/france-runs-fusion-reactor-for-record-22-minutes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 19:11:22](https://lobste.rs/s/ktwqmj/typst_0_13_is_out_now_experimental_html) - [Typst 0.13 is out now: Experimental HTML export, semantic paragraphs, and more](https://typst.app/blog/2025/typst-0.13/)
* [2025-02-19, 18:54:00](https://soylentnews.org/meta/article.pl?sid=25/02/19/1852221&from=rss) - [SITE PROBLEMS](https://soylentnews.org/meta/article.pl?sid=25/02/19/1852221&from=rss)
* [2025-02-19, 18:40:00](https://tech.slashdot.org/story/25/02/19/1459220/nikola-files-for-bankruptcy-with-plans-to-sell-assets-wind-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nikola Files for Bankruptcy With Plans To Sell Assets, Wind Down](https://tech.slashdot.org/story/25/02/19/1459220/nikola-files-for-bankruptcy-with-plans-to-sell-assets-wind-down?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 18:14:16](https://lobste.rs/s/a1thyf/when_imperfect_systems_are_good_actually) - [When Imperfect Systems are Good, Actually: Bluesky’s Lossy Timelines](https://jazco.dev/2025/02/19/imperfection/)
* [2025-02-19, 18:02:00](https://mobile.slashdot.org/story/25/02/19/1658240/apple-launches-the-iphone-16e-with-in-house-modem-and-support-for-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Launches the iPhone 16E, With In-House Modem and Support For AI](https://mobile.slashdot.org/story/25/02/19/1658240/apple-launches-the-iphone-16e-with-in-house-modem-and-support-for-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 17:48:08](https://news.ycombinator.com/item?id=43105028) - [When imperfect systems are good: Bluesky's lossy timelines](https://jazco.dev/2025/02/19/imperfection/)
* [2025-02-19, 17:47:56](https://lobste.rs/s/bgpdjz/so_you_want_better_debug_info) - [So you want better debug info?](https://walnut356.github.io/posts/so-you-want-better-debug-info/)
* [2025-02-19, 17:41:00](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss) - [Record-Breaking Neutrino is Most Energetic Ever Detected](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss)
* [2025-02-19, 17:33:46](https://lobste.rs/s/et8xra/collection_code_examples_from_prominent) - [A collection of code examples from prominent open-source projects (2021)](https://codecatalog.org/)
* [2025-02-19, 17:31:11](https://lobste.rs/s/tlkkq4/multiple_vulnerabilities_u_boot) - [Multiple Vulnerabilities in U-Boot](https://www.openwall.com/lists/oss-security/2025/02/17/2)
* [2025-02-19, 17:25:00](https://tech.slashdot.org/story/25/02/19/1651235/microsoft-reveals-its-first-quantum-computing-chip-the-majorana-1?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Reveals Its First Quantum Computing Chip, the Majorana 1](https://tech.slashdot.org/story/25/02/19/1651235/microsoft-reveals-its-first-quantum-computing-chip-the-majorana-1?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 16:56:11](https://lobste.rs/s/gydrm1/secret_maze_debian_images) - [The secret maze of Debian images](https://blog.fai-project.org/posts/cdimages-maze/)
* [2025-02-19, 16:40:00](https://slashdot.org/story/25/02/19/1217252/all-of-humanes-ai-pins-will-stop-working-in-10-days?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [All of Humane's AI Pins Will Stop Working in 10 Days](https://slashdot.org/story/25/02/19/1217252/all-of-humanes-ai-pins-will-stop-working-in-10-days?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 16:06:10](https://lobste.rs/s/cpswqi/relaxed_radix_balanced_trees) - [Relaxed Radix Balanced Trees](https://peter.horne-khan.com/relaxed-radix-balanced-trees/)
* [2025-02-19, 16:05:10](https://news.ycombinator.com/item?id=43103604) - [Relaxed Radix Balanced Trees (2024)](https://peter.horne-khan.com/relaxed-radix-balanced-trees/)
* [2025-02-19, 16:01:00](https://slashdot.org/story/25/02/19/1356215/microsoft-puts-notepads-ai-rewrite-feature-behind-paywall?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Puts Notepad's AI Rewrite Feature Behind Paywall](https://slashdot.org/story/25/02/19/1356215/microsoft-puts-notepads-ai-rewrite-feature-behind-paywall?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 15:48:18](https://lobste.rs/s/hdj2q4/greg_kroah_hartman_makes_compelling_case) - [Greg Kroah-Hartman Makes A Compelling Case For New Linux Kernel Drivers To Be Written In Rust](https://www.phoronix.com/news/Greg-KH-On-New-Rust-Code)
* [2025-02-19, 15:45:32](https://lobste.rs/s/gi6ed9/http3_2_1) - [HTTP3, 2, 1](https://maxmcd.com/posts/http321/)
* [2025-02-19, 15:25:08](https://news.ycombinator.com/item?id=43103073) - [Show HN: Mastra – Open-source JS agent framework, by the developers of Gatsby](https://github.com/mastra-ai/mastra)
* [2025-02-19, 14:05:23](https://news.ycombinator.com/item?id=43102284) - [Multiple Russia-aligned threat actors actively targeting Signal Messenger](https://cloud.google.com/blog/topics/threat-intelligence/russia-targeting-signal-messenger)
* [2025-02-19, 13:17:55](https://lobste.rs/s/utonjg/being_happy_nixer_on_mac) - [Being a happy Nixer on a Mac](https://paretosecurity.com/blog/being-a-happy-nixer-on-a-mac)
* [2025-02-19, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss) - [Open Source Maintainers Are Feeling The Squeeze](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss)
* [2025-02-19, 12:36:06](https://news.ycombinator.com/item?id=43101383) - [Broken legs and ankles heal better if you walk on them within weeks](https://www.scientificamerican.com/article/broken-legs-and-ankles-heal-better-if-you-walk-on-them-within-weeks/)
* [2025-02-19, 11:01:12](https://lobste.rs/s/1ao83l/programming_with_math_lambda_calculus) - [Programming with Math | The Lambda Calculus](https://youtu.be/ViPNHMSUcog)
* [2025-02-19, 10:28:21](https://lobste.rs/s/syjb5i/learning_hardest_problem_computer) - [Learning: the hardest problem in computer science](https://www.herostrat.us/posts/learning-the-hardest-problem-in-computer-science/)
* [2025-02-19, 09:24:50](https://lobste.rs/s/oizlxo/add_wayland_color_management_protocol) - [Add Wayland color-management protocol](https://gitlab.freedesktop.org/wayland/wayland-protocols/-/commit/452e943b4991)
* [2025-02-19, 08:10:00](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss) - [AI Study: AI Can Clone Itself Under the Right Conditions](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss)
* [2025-02-19, 05:08:01](https://lobste.rs/s/wwgtxt/append_only_programming) - [Append-only programming](https://iafisher.com/blog/2024/08/append-only-programming)
* [2025-02-19, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss) - [New OpenSSH Flaws Enable Man-in-the-Middle and DoS Attacks](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss)
* [2025-02-19, 02:21:15](https://lobste.rs/s/8mexgt/tcl_misunderstood_2006) - [Tcl the Misunderstood (2006)](https://antirez.com/articoli/tclmisunderstood.html)
* [2025-02-18, 23:29:17](https://news.ycombinator.com/item?id=43096477) - [Show HN: Subtrace – Wireshark for Docker Containers](https://github.com/subtrace/subtrace)
* [2025-02-18, 23:18:27](https://lobste.rs/s/l6bhjh/introducing_pi_hole_v6) - [Introducing Pi-hole v6](https://pi-hole.net/blog/2025/02/18/introducing-pi-hole-v6/)
* [2025-02-18, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss) - [Chinese GPUs Surpass Nvidia Chips by Nearly Tenfold in Supercomputer Simulation](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss)
* [2025-02-18, 16:52:00](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss) - [New Book-Sorting Algorithm Almost Reaches Perfection](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss)
* [2025-02-18, 13:31:49](https://news.ycombinator.com/item?id=43089238) - [Show HN: A Fast HTTP Request CLI Powered by HTTL](https://httl.dev/docs/cli)
* [2025-02-18, 12:33:50](https://lobste.rs/s/aexhi5/reviewing_cryptography_used_by_signal) - [Reviewing the Cryptography Used by Signal](https://soatok.blog/2025/02/18/reviewing-the-cryptography-used-by-signal/)
* [2025-02-18, 12:04:00](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss) - [EU Bans Bisphenol A From Contact With Food](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss)
* [2025-02-18, 10:37:55](https://news.ycombinator.com/item?id=43088124) - [A secret poker game you can play on the subway](https://experience.prfalken.dev/english/subway-poker/)
* [2025-02-18, 09:36:18](https://news.ycombinator.com/item?id=43087774) - [The Fall of FiveM](https://fivem.team/)
* [2025-02-18, 07:19:00](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss) - [Targeting Amino Acids to Search for Life on Mars](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss)
* [2025-02-18, 02:29:00](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss) - [DOGE as a National Cyberattack](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss)
* [2025-02-17, 21:24:17](https://news.ycombinator.com/item?id=43083429) - [F8 – an 8 bit architecture designed for C and memory efficiency [video]](https://fosdem.org/2025/schedule/event/fosdem-2025-4902-f8-an-8-bit-architecture-designed-for-c-and-memory-efficiency/)
* [2025-02-17, 20:44:00](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss) - [Octet Of ESP32s Lets You See WiFi Like Never Before](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss)
* [2025-02-17, 16:02:00](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss) - [Women Speak Some 3000ish Words More Per Day Than Men](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss)
* [2025-02-17, 11:15:00](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss) - [Wiggling Ears May Have Once Helped Us Hear](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss)
* [2025-02-17, 07:12:38](https://news.ycombinator.com/item?id=43076088) - [A tail calling interpreter for Python (already landed in CPython)](https://blog.reverberate.org/2025/02/10/tail-call-updates.html)
* [2025-02-17, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss) - [AUKUS Blasts Holes In Lockbit's Bulletproof Hosting Provider](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss)
* [2025-02-17, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss) - [Ignorance Bliss When You’Re Drowning In Information](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss)
* [2025-02-16, 20:54:00](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss) - [The Guy Who Accidentally Threw Away $700 Million in Bitcoin Wants to Buy the Landfill to Find It](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss)
* [2025-02-16, 18:56:34](https://news.ycombinator.com/item?id=43070558) - [The 8-Bit Era's Weird Uncle: The TI-99/4A](https://bumbershootsoft.wordpress.com/2025/02/15/the-8-bit-eras-weird-uncle-the-ti-99-4a/)
* [2025-02-16, 16:12:00](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss) - [Waste Surveillance at Just 20 Airports Could Spot the Next Pandemic](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss)
* [2025-02-16, 11:27:00](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss) - [AI Reveals Hidden Interior Design Rules of the Cell](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss)
* [2025-02-16, 11:20:42](https://news.ycombinator.com/item?id=43067230) - [Animate Anyone 2: High-Fidelity Character Image Animation](https://humanaigc.github.io/animate-anyone-2/)
* [2025-02-16, 10:24:13](https://news.ycombinator.com/item?id=43067002) - [Requesting SDK for Meta Ray-Ban Smart Glasses for Visually Impaired Users](https://communityforums.atmeta.com/t5/General-VR-MR-Development/Suggestion-for-Developing-an-SDK-for-Meta-Ray-ban-Glasses/td-p/1196341/page/2)
* [2025-02-16, 08:20:25](https://news.ycombinator.com/item?id=43066328) - [Speed matters (2021)](https://www.scattered-thoughts.net/writing/speed-matters/)
* [2025-02-16, 07:08:51](https://news.ycombinator.com/item?id=43066047) - [Softmax forever, or why I like softmax](https://kyunghyuncho.me/softmax-forever-or-why-i-like-softmax/)
* [2025-02-16, 06:42:00](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss) - [Key Takeaways From The Paris AI Summit](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss)
* [2025-02-16, 01:58:00](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss) - [If You Ever Stacked Cups In Gym Class, Blame My Dad](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss)
