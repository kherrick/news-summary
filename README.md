# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Machine Learning

* [Microsoft Shows Progress Toward Real-Time AI-Generated Game Worlds](https://games.slashdot.org/story/25/02/19/2051259/microsoft-shows-progress-toward-real-time-ai-generated-game-worlds?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43107777))

* [Google Builds AI 'Co-Scientist' Tool To Speed Up Research](https://tech.slashdot.org/story/25/02/19/1433205/google-builds-ai-co-scientist-tool-to-speed-up-research?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43102528))

* [Apple Launches the iPhone 16E With In-House Modem and Support For AI](https://mobile.slashdot.org/story/25/02/19/1658240/apple-launches-the-iphone-16e-with-in-house-modem-and-support-for-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43103536))

## Software Development Insights

* [Demystifying Monads in Rust Through Property-Based Testing](https://sunshowers.io/posts/monads-through-pbt/) ([Comments](https://lobste.rs/s/isl4u6/demystifying_monads_rust_through))

* [Build Your Own SQLite in Rust, Part 5: Evaluating Queries](https://blog.sylver.dev/build-your-own-sqlite-part-5-evaluating-queries) ([Comments](https://news.ycombinator.com/item?id=43108614))

* [What Makes a Great Software Engineer (Dissertation)](https://faculty.washington.edu/ajko/dissertations/Li2016Dissertation.pdf) ([Comments](https://news.ycombinator.com/item?id=43109255))

## Technological Breakthroughs

* [France Runs Fusion Reactor For Record 22 Minutes](https://science.slashdot.org/story/25/02/19/1922241/france-runs-fusion-reactor-for-record-22-minutes?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43106245))

* [Microsoft Reveals Its First Quantum Computing Chip, the Majorana 1](https://tech.slashdot.org/story/25/02/19/1651235/microsoft-reveals-its-first-quantum-computing-chip-the-majorana-1?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://lobste.rs/s/gydrm1/secret_maze_debian_images))

* [AI Study: AI Can Clone Itself Under the Right Conditions](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss)

## Environmental and Scientific Exploration

* [Historic Ocean Liner Departs Philadelphia on Voyage to Become the World's Largest Artificial Reef](https://news.slashdot.org/story/25/02/19/221253/historic-ocean-liner-departs-philadelphia-on-voyage-to-become-the-worlds-largest-artificial-reef?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43109860))

* [Scented Products Cause Indoor Air Pollution on Par With Car Exhaust](https://newatlas.com/environment/indoor-air-pollution-scented-terpenes/) ([Comments](https://news.ycombinator.com/item?id=43109366))

* [Targeting Amino Acids to Search for Life on Mars](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss)

## Notable Cybersecurity Developments

* [New OpenSSH Flaws Enable Man-in-the-Middle and DoS Attacks](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss) ([Comments](https://news.ycombinator.com/item?id=43101430))

* [Palo Alto Firewalls Under Attack as Miscreants Chain Flaws for Root Access](https://it.slashdot.org/story/25/02/19/2059256/palo-alto-firewalls-under-attack-as-miscreants-chain-flaws-for-root-access?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43101430))

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

* [2025-02-20, 01:00:52](https://news.ycombinator.com/item?id=43109860) - [Corvus Robotics (YC S18) Is Hiring Senior Software Engineer](https://app.dover.com/apply/269adc8b-72b8-46d3-85b9-3a15ea901c84/eaf81e6d-73d3-4fcf-b273-7772720503c2/)
* [2025-02-20, 01:00:00](https://news.slashdot.org/story/25/02/19/221253/historic-ocean-liner-departs-philadelphia-on-voyage-to-become-the-worlds-largest-artificial-reef?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Historic Ocean Liner Departs Philadelphia On Voyage To Become the World's Largest Artificial Reef](https://news.slashdot.org/story/25/02/19/221253/historic-ocean-liner-departs-philadelphia-on-voyage-to-become-the-worlds-largest-artificial-reef?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 00:21:16](https://lobste.rs/s/isl4u6/demystifying_monads_rust_through) - [Demystifying monads in Rust through property-based testing](https://sunshowers.io/posts/monads-through-pbt/)
* [2025-02-20, 00:05:39](https://news.ycombinator.com/item?id=43109466) - [WonderHuman: 3D avatars from single-view video](https://arxiv.org/abs/2502.01045)
* [2025-02-19, 23:53:28](https://news.ycombinator.com/item?id=43109366) - [Scented products cause indoor air pollution on par with car exhaust](https://newatlas.com/environment/indoor-air-pollution-scented-terpenes/)
* [2025-02-19, 23:40:03](https://news.ycombinator.com/item?id=43109255) - [What Makes a Great Software Engineer (Dissertation) [pdf]](https://faculty.washington.edu/ajko/dissertations/Li2016Dissertation.pdf)
* [2025-02-19, 23:10:57](https://lobste.rs/s/patajy/what_i_saw_at_evolution_plan_9) - [What I Saw at the Evolution of Plan 9](https://adi.onl/oral.pdf)
* [2025-02-19, 23:00:00](https://yro.slashdot.org/story/25/02/19/2151255/murena-released-a-de-googled-version-of-the-pixel-tablet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Murena Released a De-Googled Version of the Pixel Tablet](https://yro.slashdot.org/story/25/02/19/2151255/murena-released-a-de-googled-version-of-the-pixel-tablet?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 22:32:18](https://news.ycombinator.com/item?id=43108614) - [Build your own SQLite in Rust, Part 5: Evaluating queries](https://blog.sylver.dev/build-your-own-sqlite-part-5-evaluating-queries)
* [2025-02-19, 22:29:46](https://lobste.rs/s/ex0nul/build_your_own_sqlite_rust_part_5) - [Build your own SQLite in Rust, Part 5: Evaluating queries](https://blog.sylver.dev/build-your-own-sqlite-part-5-evaluating-queries)
* [2025-02-19, 22:27:29](https://lobste.rs/s/2t027q/we_trust_you_have_received_usual_lecture) - [We trust you have received the usual lecture from the local System Administrator](https://lobste.rs/s/2t027q/we_trust_you_have_received_usual_lecture)
* [2025-02-19, 22:23:00](https://soylentnews.org/article.pl?sid=25/02/18/224256&from=rss) - [Scented Products Cause Indoor Air Pollution on Par With Car Exhaust](https://soylentnews.org/article.pl?sid=25/02/18/224256&from=rss)
* [2025-02-19, 22:20:00](https://games.slashdot.org/story/25/02/19/2145217/valve-releases-team-fortress-2-full-client-and-source-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Valve Releases Team Fortress 2 Full Client and Source Code](https://games.slashdot.org/story/25/02/19/2145217/valve-releases-team-fortress-2-full-client-and-source-code?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 21:41:07](https://news.ycombinator.com/item?id=43108091) - [1972 Unix V2 \"Beta\" Resurrected](https://www.tuhs.org/pipermail/tuhs/2025-February/031420.html)
* [2025-02-19, 21:40:00](https://it.slashdot.org/story/25/02/19/2059256/palo-alto-firewalls-under-attack-as-miscreants-chain-flaws-for-root-access?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Palo Alto Firewalls Under Attack As Miscreants Chain Flaws For Root Access](https://it.slashdot.org/story/25/02/19/2059256/palo-alto-firewalls-under-attack-as-miscreants-chain-flaws-for-root-access?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 21:20:01](https://news.ycombinator.com/item?id=43107839) - [Malaysia is betting on data centers to boost its economy](https://apnews.com/article/malaysia-johor-data-centers-energy-electricity-power-cfb087f755d3e203a347463af229e88d)
* [2025-02-19, 21:14:41](https://news.ycombinator.com/item?id=43107777) - [I built a large language model \"from scratch\"](https://brettgfitzgerald.com/posts/build-a-large-language-model/)
* [2025-02-19, 21:00:00](https://games.slashdot.org/story/25/02/19/2051259/microsoft-shows-progress-toward-real-time-ai-generated-game-worlds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Shows Progress Toward Real-Time AI-Generated Game Worlds](https://games.slashdot.org/story/25/02/19/2051259/microsoft-shows-progress-toward-real-time-ai-generated-game-worlds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 20:36:29](https://lobste.rs/s/2oykhm/practical_alloy_hands_on_guide_formal) - [Practical Alloy: A hands-on guide to formal software design](https://practicalalloy.github.io/)
* [2025-02-19, 20:01:00](https://news.slashdot.org/story/25/02/19/1942232/us-army-soldier-pleads-guilty-to-att-and-verizon-hacks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Army Soldier Pleads Guilty To AT&amp;T and Verizon Hacks](https://news.slashdot.org/story/25/02/19/1942232/us-army-soldier-pleads-guilty-to-att-and-verizon-hacks?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 19:36:20](https://news.ycombinator.com/item?id=43106454) - [Minuteman III test showcases readiness of U.S. nuclear force's deterrent](https://www.stratcom.mil/Media/News/News-Article-View/Article/4070577/minuteman-iii-test-launch-showcases-readiness-of-us-nuclear-forces-safe-effecti/)
* [2025-02-19, 19:22:01](https://news.ycombinator.com/item?id=43106245) - [One Head, Two Brains (2015)](https://www.theatlantic.com/health/archive/2015/07/split-brain-research-sperry-gazzaniga/399290/)
* [2025-02-19, 19:22:00](https://science.slashdot.org/story/25/02/19/1922241/france-runs-fusion-reactor-for-record-22-minutes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [France Runs Fusion Reactor For Record 22 Minutes](https://science.slashdot.org/story/25/02/19/1922241/france-runs-fusion-reactor-for-record-22-minutes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 19:11:22](https://lobste.rs/s/ktwqmj/typst_0_13_is_out_now_experimental_html) - [Typst 0.13 is out now: Experimental HTML export, semantic paragraphs, and more](https://typst.app/blog/2025/typst-0.13/)
* [2025-02-19, 18:54:00](https://soylentnews.org/meta/article.pl?sid=25/02/19/1852221&from=rss) - [SITE PROBLEMS](https://soylentnews.org/meta/article.pl?sid=25/02/19/1852221&from=rss)
* [2025-02-19, 18:40:00](https://tech.slashdot.org/story/25/02/19/1459220/nikola-files-for-bankruptcy-with-plans-to-sell-assets-wind-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nikola Files for Bankruptcy With Plans To Sell Assets, Wind Down](https://tech.slashdot.org/story/25/02/19/1459220/nikola-files-for-bankruptcy-with-plans-to-sell-assets-wind-down?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 18:16:06](https://news.ycombinator.com/item?id=43105357) - [An inside look at NSA tactics, techniques and procedures from China's lens](https://www.inversecos.com/2025/02/an-inside-look-at-nsa-equation-group.html)
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
* [2025-02-19, 16:35:51](https://news.ycombinator.com/item?id=43104071) - [Microsoft unveils Majorana 1 quantum processor](https://azure.microsoft.com/en-us/blog/quantum/2025/02/19/microsoft-unveils-majorana-1-the-worlds-first-quantum-processor-powered-by-topological-qubits/)
* [2025-02-19, 16:06:10](https://lobste.rs/s/cpswqi/relaxed_radix_balanced_trees) - [Relaxed Radix Balanced Trees](https://peter.horne-khan.com/relaxed-radix-balanced-trees/)
* [2025-02-19, 16:05:10](https://news.ycombinator.com/item?id=43103604) - [Relaxed Radix Balanced Trees (2024)](https://peter.horne-khan.com/relaxed-radix-balanced-trees/)
* [2025-02-19, 16:01:00](https://slashdot.org/story/25/02/19/1356215/microsoft-puts-notepads-ai-rewrite-feature-behind-paywall?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Puts Notepad's AI Rewrite Feature Behind Paywall](https://slashdot.org/story/25/02/19/1356215/microsoft-puts-notepads-ai-rewrite-feature-behind-paywall?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 16:00:25](https://news.ycombinator.com/item?id=43103536) - [Apple Debuts iPhone 16e](https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/)
* [2025-02-19, 15:48:18](https://lobste.rs/s/hdj2q4/greg_kroah_hartman_makes_compelling_case) - [Greg Kroah-Hartman Makes A Compelling Case For New Linux Kernel Drivers To Be Written In Rust](https://www.phoronix.com/news/Greg-KH-On-New-Rust-Code)
* [2025-02-19, 15:45:32](https://lobste.rs/s/gi6ed9/http3_2_1) - [HTTP3, 2, 1](https://maxmcd.com/posts/http321/)
* [2025-02-19, 15:25:08](https://news.ycombinator.com/item?id=43103073) - [Show HN: Mastra – Open-source JS agent framework, by the developers of Gatsby](https://github.com/mastra-ai/mastra)
* [2025-02-19, 15:21:00](https://apple.slashdot.org/story/25/02/19/1349205/apple-says-uk-regulators-remedy-options-on-mobile-browsers-will-hit-innovation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Says UK Regulator's Remedy Options on Mobile Browsers Will Hit Innovation](https://apple.slashdot.org/story/25/02/19/1349205/apple-says-uk-regulators-remedy-options-on-mobile-browsers-will-hit-innovation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 14:40:00](https://tech.slashdot.org/story/25/02/19/1433205/google-builds-ai-co-scientist-tool-to-speed-up-research?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Builds AI 'Co-Scientist' Tool To Speed Up Research](https://tech.slashdot.org/story/25/02/19/1433205/google-builds-ai-co-scientist-tool-to-speed-up-research?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 14:32:54](https://news.ycombinator.com/item?id=43102528) - [Accelerating scientific breakthroughs with an AI co-scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/)
* [2025-02-19, 14:05:23](https://news.ycombinator.com/item?id=43102284) - [Multiple Russia-aligned threat actors actively targeting Signal Messenger](https://cloud.google.com/blog/topics/threat-intelligence/russia-targeting-signal-messenger)
* [2025-02-19, 14:00:00](https://developers.slashdot.org/story/25/02/19/1212257/ai-can-write-code-but-lacks-engineers-instinct-openai-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Can Write Code But Lacks Engineer's Instinct, OpenAI Study Finds](https://developers.slashdot.org/story/25/02/19/1212257/ai-can-write-code-but-lacks-engineers-instinct-openai-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 13:17:55](https://lobste.rs/s/utonjg/being_happy_nixer_on_mac) - [Being a happy Nixer on a Mac](https://paretosecurity.com/blog/being-a-happy-nixer-on-a-mac)
* [2025-02-19, 12:55:47](https://lobste.rs/s/gxibvy/pain_linear_types_rust_2017) - [The Pain Of Linear Types In Rust (2017)](https://faultlore.com/blah/linear-rust/)
* [2025-02-19, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss) - [Open Source Maintainers Are Feeling The Squeeze](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss)
* [2025-02-19, 12:40:58](https://news.ycombinator.com/item?id=43101430) - [Debugging Hetzner: Uncovering failures with powerstat, sensors, and dmidecode](https://www.ubicloud.com/blog/debugging-hetzner-uncovering-failures-with-powerstat-sensors-and-dmidecode)
* [2025-02-19, 12:36:06](https://news.ycombinator.com/item?id=43101383) - [Broken legs and ankles heal better if you walk on them within weeks](https://www.scientificamerican.com/article/broken-legs-and-ankles-heal-better-if-you-walk-on-them-within-weeks/)
* [2025-02-19, 12:09:50](https://lobste.rs/s/208z0p/russian_phishing_campaigns_exploit) - [Russian phishing campaigns exploit Signal's device-linking feature](https://www.bleepingcomputer.com/news/security/russian-phishing-campaigns-exploit-signals-device-linking-feature/)
* [2025-02-19, 11:51:07](https://lobste.rs/s/urlqst/changing_every_line_three_times) - [Changing every line three times](https://daniel.haxx.se/blog/2025/02/18/changing-every-line-three-times/)
* [2025-02-19, 11:01:12](https://lobste.rs/s/1ao83l/programming_with_math_lambda_calculus) - [Programming with Math | The Lambda Calculus](https://youtu.be/ViPNHMSUcog)
* [2025-02-19, 10:28:21](https://lobste.rs/s/syjb5i/learning_hardest_problem_computer) - [Learning: the hardest problem in computer science](https://www.herostrat.us/posts/learning-the-hardest-problem-in-computer-science/)
* [2025-02-19, 09:24:50](https://lobste.rs/s/oizlxo/add_wayland_color_management_protocol) - [Add Wayland color-management protocol](https://gitlab.freedesktop.org/wayland/wayland-protocols/-/commit/452e943b4991)
* [2025-02-19, 08:10:00](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss) - [AI Study: AI Can Clone Itself Under the Right Conditions](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss)
* [2025-02-19, 05:08:01](https://lobste.rs/s/wwgtxt/append_only_programming) - [Append-only programming](https://iafisher.com/blog/2024/08/append-only-programming)
* [2025-02-19, 04:49:46](https://news.ycombinator.com/item?id=43098705) - [\"Ensuring Accountability for All Agencies\" – Executive Order](https://www.whitehouse.gov/presidential-actions/2025/02/ensuring-accountability-for-all-agencies/)
* [2025-02-19, 03:41:48](https://news.ycombinator.com/item?id=43098318) - [Thoughts on Daylight Computer](https://jon.bo/posts/daylight-computer-1/)
* [2025-02-19, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss) - [New OpenSSH Flaws Enable Man-in-the-Middle and DoS Attacks](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss)
* [2025-02-19, 02:21:15](https://lobste.rs/s/8mexgt/tcl_misunderstood_2006) - [Tcl the Misunderstood (2006)](https://antirez.com/articoli/tclmisunderstood.html)
* [2025-02-18, 23:29:17](https://news.ycombinator.com/item?id=43096477) - [Show HN: Subtrace – Wireshark for Docker Containers](https://github.com/subtrace/subtrace)
* [2025-02-18, 23:18:27](https://lobste.rs/s/l6bhjh/introducing_pi_hole_v6) - [Introducing Pi-hole v6](https://pi-hole.net/blog/2025/02/18/introducing-pi-hole-v6/)
* [2025-02-18, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss) - [Chinese GPUs Surpass Nvidia Chips by Nearly Tenfold in Supercomputer Simulation](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss)
* [2025-02-18, 16:52:00](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss) - [New Book-Sorting Algorithm Almost Reaches Perfection](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss)
* [2025-02-18, 12:33:50](https://lobste.rs/s/aexhi5/reviewing_cryptography_used_by_signal) - [Reviewing the Cryptography Used by Signal](https://soatok.blog/2025/02/18/reviewing-the-cryptography-used-by-signal/)
* [2025-02-18, 12:04:00](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss) - [EU Bans Bisphenol A From Contact With Food](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss)
* [2025-02-18, 10:37:55](https://news.ycombinator.com/item?id=43088124) - [A secret poker game you can play on the subway](https://experience.prfalken.dev/english/subway-poker/)
* [2025-02-18, 07:19:00](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss) - [Targeting Amino Acids to Search for Life on Mars](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss)
* [2025-02-18, 02:29:00](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss) - [DOGE as a National Cyberattack](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss)
* [2025-02-17, 20:44:00](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss) - [Octet Of ESP32s Lets You See WiFi Like Never Before](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss)
* [2025-02-17, 19:47:26](https://news.ycombinator.com/item?id=43082649) - [Show HN: MOS6502 in pure Lua running in WebAssembly](https://carimbo.run/play/1.0.43/willtobyte/MOS6502/1.0.3/480p/)
* [2025-02-17, 16:02:00](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss) - [Women Speak Some 3000ish Words More Per Day Than Men](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss)
* [2025-02-17, 11:15:00](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss) - [Wiggling Ears May Have Once Helped Us Hear](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss)
* [2025-02-17, 09:56:55](https://news.ycombinator.com/item?id=43077091) - [An early social un-network](https://paperstack.com/an_early_social_unnetwork/)
* [2025-02-17, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss) - [AUKUS Blasts Holes In Lockbit's Bulletproof Hosting Provider](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss)
* [2025-02-17, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss) - [Ignorance Bliss When You’Re Drowning In Information](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss)
* [2025-02-16, 20:54:00](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss) - [The Guy Who Accidentally Threw Away $700 Million in Bitcoin Wants to Buy the Landfill to Find It](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss)
* [2025-02-16, 18:56:34](https://news.ycombinator.com/item?id=43070558) - [The 8-Bit Era's Weird Uncle: The TI-99/4A](https://bumbershootsoft.wordpress.com/2025/02/15/the-8-bit-eras-weird-uncle-the-ti-99-4a/)
* [2025-02-16, 16:12:00](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss) - [Waste Surveillance at Just 20 Airports Could Spot the Next Pandemic](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss)
* [2025-02-16, 11:56:21](https://news.ycombinator.com/item?id=43067358) - [The TOMY Screwball Scramble](https://medium.com/@solidi/the-tomy-screwball-scramble-9f4eab3681da)
* [2025-02-16, 11:27:00](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss) - [AI Reveals Hidden Interior Design Rules of the Cell](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss)
* [2025-02-16, 11:20:42](https://news.ycombinator.com/item?id=43067230) - [Animate Anyone 2: High-Fidelity Character Image Animation&Environment Affordance](https://humanaigc.github.io/animate-anyone-2/)
* [2025-02-16, 06:42:00](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss) - [Key Takeaways From The Paris AI Summit](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss)
* [2025-02-16, 01:58:00](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss) - [If You Ever Stacked Cups In Gym Class, Blame My Dad](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss)
