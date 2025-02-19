# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI Innovations

* [Microsoft Reveals Its First Quantum Computing Chip, the Majorana 1](https://tech.slashdot.org/story/25/02/19/1651235/microsoft-reveals-its-first-quantum-computing-chip-the-majorana-1?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft takes a significant leap in quantum computing with its new Majorana 1 chip, leveraging topological qubit technology.

* [Apple Launches the iPhone 16E, With In-House Modem and Support For AI](https://mobile.slashdot.org/story/25/02/19/1658240/apple-launches-the-iphone-16e-with-in-house-modem-and-support-for-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Apple debuts its AI-driven iPhone 16E, integrating an in-house developed modem for better performance.

* [Google Builds AI 'Co-Scientist' Tool To Speed Up Research](https://tech.slashdot.org/story/25/02/19/1433205/google-builds-ai-co-scientist-tool-to-speed-up-research?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google's new AI co-scientist tool is engineered to accelerate research outputs.

* [AI Can Write Code But Lacks Engineer's Instinct, OpenAI Study Finds](https://developers.slashdot.org/story/25/02/19/1212257/ai-can-write-code-but-lacks-engineers-instinct-openai-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An OpenAI study critiques AI code-writing capabilities, citing the lack of human instinct.

## Cybersecurity and System Vulnerabilities

* [New OpenSSH Flaws Enable Man-in-the-Middle and DoS Attacks](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss) - Recently discovered OpenSSH vulnerabilities expose systems to man-in-the-middle and Denial of Service (DoS) attacks.

* [Russian phishing campaigns exploit Signal's device-linking feature](https://www.bleepingcomputer.com/news/security/russian-phishing-campaigns-exploit-signals-device-linking-feature/) - Signal users are targeted by Russia-aligned phishing campaigns due to a flaw in the app's device-linking functionality.

* [GymTok: Breaking TLS Using the Alt-Svc Header](https://blog.pspaul.de/posts/gymtok-breaking-tls-with-alt-svc/) - A novel method to compromise TLS security using alternative service headers.

* [Hackers Planted a Steam Game With Malware To Steal Gamers' Passwords](https://it.slashdot.org/story/25/02/19/0031255/hackers-planted-a-steam-game-with-malware-to-steal-gamers-passwords?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Malware disguised as a Steam game targets gamers' passwords.

## Science and Research Breakthroughs

* [Record-Breaking Neutrino is Most Energetic Ever Detected](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss) - Researchers identify the most energetic neutrino ever detected, pushing the boundaries of particle physics.

* [3D Map of Exoplanet Atmosphere Shows Wacky Climate](https://science.slashdot.org/story/25/02/19/0058237/3d-map-of-exoplanet-atmosphere-shows-wacky-climate?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A groundbreaking 3D map reveals the bizarre atmospheric dynamics of an exoplanet.

* [Broken Legs and Ankles Heal Better If You Walk on Them Within Weeks](https://www.scientificamerican.com/article/broken-legs-and-ankles-heal-better-if-you-walk-on-them-within-weeks/) - New research challenges conventional wisdom, advocating controlled walking for quicker recovery from fractures.

## Corporate and Industry News

* [Nikola Files for Bankruptcy With Plans To Sell Assets, Wind Down](https://tech.slashdot.org/story/25/02/19/1459220/nikola-files-for-bankruptcy-with-plans-to-sell-assets-wind-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Electric vehicle maker Nikola faces financial challenges as it opts for bankruptcy and asset liquidation.

* ['Pokemon Go' Maker Nears $3.5 Billion Deal To Sell Games Unit](https://games.slashdot.org/story/25/02/19/059211/pokemon-go-maker-nears-35-billion-deal-to-sell-games-unit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Niantic, the creator of 'Pokemon Go,' reportedly prepares to sell its gaming division.

* [National Science Foundation fires roughly 10% of its workforce](https://www.npr.org/2025/02/18/nx-s1-5301049/national-science-foundation-fires-roughly-10-of-its-workforce) - Financial difficulties lead the NSF to a workforce reduction of nearly 10%.

## Unique Historical and Cultural Insights

* [1977 Jazz-Funk Musical Adaptation of Dune](https://www.openculture.com/2025/02/hear-the-jazz-funk-musical-adaptation-of-dune-by-david-matthews-1977.html) - Explore the rare 1977 jazz-funk reinterpretation of Frank Herbert's Dune.

* [Seeing Through the Spartan Mirage](https://worldhistory.substack.com/p/the-spartan-mirage) - An analysis of the myths surrounding ancient Spartan society and its realities.

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

* [2025-02-19, 18:40:00](https://tech.slashdot.org/story/25/02/19/1459220/nikola-files-for-bankruptcy-with-plans-to-sell-assets-wind-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nikola Files for Bankruptcy With Plans To Sell Assets, Wind Down](https://tech.slashdot.org/story/25/02/19/1459220/nikola-files-for-bankruptcy-with-plans-to-sell-assets-wind-down?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 18:22:09](https://news.ycombinator.com/item?id=43105444) - [Typst 0.13 is out now](https://typst.app/blog/2025/typst-0.13/)
* [2025-02-19, 18:21:51](https://lobste.rs/s/9fjfm6/modview_effortlessly_visualize_mod) - [modview: Effortlessly visualize mod graph with all external dependencies for your Go projects](https://github.com/bayraktugrul/modview)
* [2025-02-19, 18:16:06](https://news.ycombinator.com/item?id=43105357) - [An inside look at NSA tactics, techniques and procedures from China's lens](https://www.inversecos.com/2025/02/an-inside-look-at-nsa-equation-group.html)
* [2025-02-19, 18:14:16](https://lobste.rs/s/a1thyf/when_imperfect_systems_are_good_actually) - [When Imperfect Systems are Good, Actually: Bluesky’s Lossy Timelines](https://jazco.dev/2025/02/19/imperfection/)
* [2025-02-19, 18:06:18](https://news.ycombinator.com/item?id=43105234) - [National Science Foundation fires roughly 10% of its workforce](https://www.npr.org/2025/02/18/nx-s1-5301049/national-science-foundation-fires-roughly-10-of-its-workforce)
* [2025-02-19, 18:02:00](https://mobile.slashdot.org/story/25/02/19/1658240/apple-launches-the-iphone-16e-with-in-house-modem-and-support-for-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Launches the iPhone 16E, With In-House Modem and Support For AI](https://mobile.slashdot.org/story/25/02/19/1658240/apple-launches-the-iphone-16e-with-in-house-modem-and-support-for-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 18:00:32](https://lobste.rs/s/ph44ps/gymtok_breaking_tls_using_alt_svc_header) - [GymTok: Breaking TLS Using the Alt-Svc Header](https://blog.pspaul.de/posts/gymtok-breaking-tls-with-alt-svc/)
* [2025-02-19, 17:49:11](https://news.ycombinator.com/item?id=43105035) - [Bill prohibiting police from lying to children passes Virginia Senate](https://www.courthousenews.com/bill-prohibiting-police-from-lying-to-children-passes-virginia-senate/)
* [2025-02-19, 17:48:08](https://news.ycombinator.com/item?id=43105028) - [When imperfect systems are good: Bluesky's lossy timelines](https://jazco.dev/2025/02/19/imperfection/)
* [2025-02-19, 17:47:15](https://news.ycombinator.com/item?id=43105014) - [The Future of Watmm](https://forum.watmm.com/announcement/67-the-future-of-watmm-please-read/)
* [2025-02-19, 17:41:00](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss) - [Record-Breaking Neutrino is Most Energetic Ever Detected](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss)
* [2025-02-19, 17:33:46](https://lobste.rs/s/et8xra/collection_code_examples_from_prominent) - [A collection of code examples from prominent open-source projects (2021)](https://codecatalog.org/)
* [2025-02-19, 17:31:11](https://lobste.rs/s/tlkkq4/multiple_vulnerabilities_u_boot) - [Multiple Vulnerabilities in U-Boot](https://www.openwall.com/lists/oss-security/2025/02/17/2)
* [2025-02-19, 17:25:00](https://tech.slashdot.org/story/25/02/19/1651235/microsoft-reveals-its-first-quantum-computing-chip-the-majorana-1?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Reveals Its First Quantum Computing Chip, the Majorana 1](https://tech.slashdot.org/story/25/02/19/1651235/microsoft-reveals-its-first-quantum-computing-chip-the-majorana-1?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 17:00:42](https://news.ycombinator.com/item?id=43104400) - [Unsloth AI (YC S24) is hiring ML engineers](https://x.com/danielhanchen/status/1891194528931209644)
* [2025-02-19, 16:56:11](https://lobste.rs/s/gydrm1/secret_maze_debian_images) - [The secret maze of Debian images](https://blog.fai-project.org/posts/cdimages-maze/)
* [2025-02-19, 16:50:44](https://lobste.rs/s/ban2oh/testing_concurrent_code_with_testing) - [Testing concurrent code with testing/synctest - The Go Programming Language](https://go.dev/blog/synctest)
* [2025-02-19, 16:40:00](https://slashdot.org/story/25/02/19/1217252/all-of-humanes-ai-pins-will-stop-working-in-10-days?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [All of Humane's AI Pins Will Stop Working in 10 Days](https://slashdot.org/story/25/02/19/1217252/all-of-humanes-ai-pins-will-stop-working-in-10-days?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 16:35:51](https://news.ycombinator.com/item?id=43104071) - [Microsoft unveils Majorana 1 quantum processor](https://azure.microsoft.com/en-us/blog/quantum/2025/02/19/microsoft-unveils-majorana-1-the-worlds-first-quantum-processor-powered-by-topological-qubits/)
* [2025-02-19, 16:06:10](https://lobste.rs/s/cpswqi/relaxed_radix_balanced_trees) - [Relaxed Radix Balanced Trees](https://peter.horne-khan.com/relaxed-radix-balanced-trees/)
* [2025-02-19, 16:05:10](https://news.ycombinator.com/item?id=43103604) - [Relaxed Radix Balanced Trees (2024)](https://peter.horne-khan.com/relaxed-radix-balanced-trees/)
* [2025-02-19, 16:01:00](https://slashdot.org/story/25/02/19/1356215/microsoft-puts-notepads-ai-rewrite-feature-behind-paywall?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Puts Notepad's AI Rewrite Feature Behind Paywall](https://slashdot.org/story/25/02/19/1356215/microsoft-puts-notepads-ai-rewrite-feature-behind-paywall?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 15:48:18](https://lobste.rs/s/hdj2q4/greg_kroah_hartman_makes_compelling_case) - [Greg Kroah-Hartman Makes A Compelling Case For New Linux Kernel Drivers To Be Written In Rust](https://www.phoronix.com/news/Greg-KH-On-New-Rust-Code)
* [2025-02-19, 15:45:32](https://lobste.rs/s/gi6ed9/http3_2_1) - [HTTP3, 2, 1](https://maxmcd.com/posts/http321/)
* [2025-02-19, 15:25:08](https://news.ycombinator.com/item?id=43103073) - [Show HN: Mastra – Open-source JS agent framework, by the developers of Gatsby](https://github.com/mastra-ai/mastra)
* [2025-02-19, 15:21:00](https://apple.slashdot.org/story/25/02/19/1349205/apple-says-uk-regulators-remedy-options-on-mobile-browsers-will-hit-innovation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Says UK Regulator's Remedy Options on Mobile Browsers Will Hit Innovation](https://apple.slashdot.org/story/25/02/19/1349205/apple-says-uk-regulators-remedy-options-on-mobile-browsers-will-hit-innovation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 14:40:00](https://tech.slashdot.org/story/25/02/19/1433205/google-builds-ai-co-scientist-tool-to-speed-up-research?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Builds AI 'Co-Scientist' Tool To Speed Up Research](https://tech.slashdot.org/story/25/02/19/1433205/google-builds-ai-co-scientist-tool-to-speed-up-research?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 14:32:54](https://news.ycombinator.com/item?id=43102528) - [Accelerating scientific breakthroughs with an AI co-scientist](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/)
* [2025-02-19, 14:29:11](https://news.ycombinator.com/item?id=43102491) - [1977 Jazz-Funk Musical Adaptation of Dune](https://www.openculture.com/2025/02/hear-the-jazz-funk-musical-adaptation-of-dune-by-david-matthews-1977.html)
* [2025-02-19, 14:05:23](https://news.ycombinator.com/item?id=43102284) - [Multiple Russia-aligned threat actors actively targeting Signal Messenger](https://cloud.google.com/blog/topics/threat-intelligence/russia-targeting-signal-messenger)
* [2025-02-19, 14:00:00](https://developers.slashdot.org/story/25/02/19/1212257/ai-can-write-code-but-lacks-engineers-instinct-openai-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Can Write Code But Lacks Engineer's Instinct, OpenAI Study Finds](https://developers.slashdot.org/story/25/02/19/1212257/ai-can-write-code-but-lacks-engineers-instinct-openai-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 13:54:51](https://news.ycombinator.com/item?id=43102182) - [Seeing Through the Spartan Mirage](https://worldhistory.substack.com/p/the-spartan-mirage)
* [2025-02-19, 13:17:55](https://lobste.rs/s/utonjg/being_happy_nixer_on_mac) - [Being a happy Nixer on a Mac](https://paretosecurity.com/blog/being-a-happy-nixer-on-a-mac)
* [2025-02-19, 13:00:00](https://games.slashdot.org/story/25/02/19/059211/pokemon-go-maker-nears-35-billion-deal-to-sell-games-unit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Pokemon Go' Maker Nears $3.5 Billion Deal To Sell Games Unit](https://games.slashdot.org/story/25/02/19/059211/pokemon-go-maker-nears-35-billion-deal-to-sell-games-unit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 12:55:47](https://lobste.rs/s/gxibvy/pain_linear_types_rust_2017) - [The Pain Of Linear Types In Rust (2017)](https://faultlore.com/blah/linear-rust/)
* [2025-02-19, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss) - [Open Source Maintainers Are Feeling The Squeeze](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss)
* [2025-02-19, 12:40:58](https://news.ycombinator.com/item?id=43101430) - [Debugging Hetzner: Uncovering failures with powerstat, sensors, and dmidecode](https://www.ubicloud.com/blog/debugging-hetzner-uncovering-failures-with-powerstat-sensors-and-dmidecode)
* [2025-02-19, 12:39:13](https://lobste.rs/s/qepnbe/where_are_all_rewrite_rules) - [Where are all the Rewrite Rules?](https://www.philipzucker.com/rewrite_rules/)
* [2025-02-19, 12:36:06](https://news.ycombinator.com/item?id=43101383) - [Broken Legs and Ankles Heal Better If You Walk on Them Within Weeks](https://www.scientificamerican.com/article/broken-legs-and-ankles-heal-better-if-you-walk-on-them-within-weeks/)
* [2025-02-19, 12:09:50](https://lobste.rs/s/208z0p/russian_phishing_campaigns_exploit) - [Russian phishing campaigns exploit Signal's device-linking feature](https://www.bleepingcomputer.com/news/security/russian-phishing-campaigns-exploit-signals-device-linking-feature/)
* [2025-02-19, 11:51:07](https://lobste.rs/s/urlqst/changing_every_line_three_times) - [Changing every line three times](https://daniel.haxx.se/blog/2025/02/18/changing-every-line-three-times/)
* [2025-02-19, 11:01:12](https://lobste.rs/s/1ao83l/programming_with_math_lambda_calculus) - [Programming with Math | The Lambda Calculus](https://youtu.be/ViPNHMSUcog)
* [2025-02-19, 10:28:21](https://lobste.rs/s/syjb5i/learning_hardest_problem_computer) - [Learning: the hardest problem in computer science](https://www.herostrat.us/posts/learning-the-hardest-problem-in-computer-science/)
* [2025-02-19, 10:00:00](https://tech.slashdot.org/story/25/02/19/055211/microsoft-reminds-admins-to-prepare-for-wsus-driver-sync-deprecation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Reminds Admins To Prepare For WSUS Driver Sync Deprecation](https://tech.slashdot.org/story/25/02/19/055211/microsoft-reminds-admins-to-prepare-for-wsus-driver-sync-deprecation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 09:24:50](https://lobste.rs/s/oizlxo/add_wayland_color_management_protocol) - [Add Wayland color-management protocol](https://gitlab.freedesktop.org/wayland/wayland-protocols/-/commit/452e943b4991)
* [2025-02-19, 08:10:00](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss) - [AI Study: AI Can Clone Itself Under the Right Conditions](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss)
* [2025-02-19, 07:00:00](https://science.slashdot.org/story/25/02/19/0458222/in-a-last-minute-decision-white-house-decides-not-to-terminate-nasa-employees?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [In a Last-Minute Decision, White House Decides Not To Terminate NASA Employees](https://science.slashdot.org/story/25/02/19/0458222/in-a-last-minute-decision-white-house-decides-not-to-terminate-nasa-employees?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 05:08:01](https://lobste.rs/s/wwgtxt/append_only_programming) - [Append-only programming](https://iafisher.com/blog/2024/08/append-only-programming)
* [2025-02-19, 04:49:46](https://news.ycombinator.com/item?id=43098705) - [\"Ensuring Accountability for All Agencies\" – Executive Order](https://www.whitehouse.gov/presidential-actions/2025/02/ensuring-accountability-for-all-agencies/)
* [2025-02-19, 04:13:31](https://lobste.rs/s/vxyx7a/serving_local_llms_with_mlx) - [Serving local LLMs with MLX](https://kconner.com/2025/02/17/running-local-llms-with-mlx.html)
* [2025-02-19, 03:41:48](https://news.ycombinator.com/item?id=43098318) - [Thoughts on Daylight Computer](https://jon.bo/posts/daylight-computer-1/)
* [2025-02-19, 03:30:00](https://science.slashdot.org/story/25/02/19/0058237/3d-map-of-exoplanet-atmosphere-shows-wacky-climate?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [3D Map of Exoplanet Atmosphere Shows Wacky Climate](https://science.slashdot.org/story/25/02/19/0058237/3d-map-of-exoplanet-atmosphere-shows-wacky-climate?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss) - [New OpenSSH Flaws Enable Man-in-the-Middle and DoS Attacks](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss)
* [2025-02-19, 02:37:10](https://news.ycombinator.com/item?id=43097932) - [Implementing LLaMA3 in 100 Lines of Pure Jax](https://saurabhalone.com/blogs/llama3/web)
* [2025-02-19, 02:21:15](https://lobste.rs/s/8mexgt/tcl_misunderstood_2006) - [Tcl the Misunderstood (2006)](https://antirez.com/articoli/tclmisunderstood.html)
* [2025-02-19, 02:20:00](https://tech.slashdot.org/story/25/02/19/0038255/nvidia-ends-32-bit-cuda-app-support-for-geforce-rtx-50-series?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia Ends 32-Bit CUDA App Support For GeForce RTX 50 Series](https://tech.slashdot.org/story/25/02/19/0038255/nvidia-ends-32-bit-cuda-app-support-for-geforce-rtx-50-series?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 01:40:00](https://it.slashdot.org/story/25/02/19/0031255/hackers-planted-a-steam-game-with-malware-to-steal-gamers-passwords?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hackers Planted a Steam Game With Malware To Steal Gamers' Passwords](https://it.slashdot.org/story/25/02/19/0031255/hackers-planted-a-steam-game-with-malware-to-steal-gamers-passwords?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 01:00:00](https://tech.slashdot.org/story/25/02/19/0017218/whatsapp-faces-tougher-eu-rules-as-users-top-45-million?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [WhatsApp Faces Tougher EU Rules As Users Top 45 Million](https://tech.slashdot.org/story/25/02/19/0017218/whatsapp-faces-tougher-eu-rules-as-users-top-45-million?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 23:29:17](https://news.ycombinator.com/item?id=43096477) - [Show HN: Subtrace – Wireshark for Docker Containers](https://github.com/subtrace/subtrace)
* [2025-02-18, 23:22:22](https://news.ycombinator.com/item?id=43096422) - [Alice Hamilton waged a one-woman campaign to get the lead out of everything](https://www.smithsonianmag.com/innovation/how-alice-hamilton-waged-one-woman-campaign-get-lead-out-everything-180985960/)
* [2025-02-18, 23:18:27](https://lobste.rs/s/l6bhjh/introducing_pi_hole_v6) - [Introducing Pi-hole v6](https://pi-hole.net/blog/2025/02/18/introducing-pi-hole-v6/)
* [2025-02-18, 22:15:05](https://news.ycombinator.com/item?id=43095811) - [HP Acquires Humane's AI Software](https://humane.com/media/humane-hp)
* [2025-02-18, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss) - [Chinese GPUs Surpass Nvidia Chips by Nearly Tenfold in Supercomputer Simulation](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss)
* [2025-02-18, 21:39:01](https://lobste.rs/s/8yz0ap/general_wine_proton_developer_open) - [General Wine/Proton Developer (Open-Source Programmer)](https://www.codeweavers.com/about/jobs#job-dev)
* [2025-02-18, 19:57:17](https://news.ycombinator.com/item?id=43094260) - [Valve releases Team Fortress 2 code](https://github.com/ValveSoftware/source-sdk-2013/commit/0759e2e8e179d5352d81d0d4aaded72c1704b7a9)
* [2025-02-18, 19:26:33](https://news.ycombinator.com/item?id=43093939) - [Nuclear fusion: WEST beats the world record for plasma duration](https://www.cea.fr/english/Pages/News/nuclear-fusion-west-beats-the-world-record-for-plasma-duration.aspx)
* [2025-02-18, 16:52:00](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss) - [New Book-Sorting Algorithm Almost Reaches Perfection](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss)
* [2025-02-18, 16:13:43](https://lobste.rs/s/76ifpd/these_years_common_lisp_2023_2024_review) - [These years in Common Lisp: 2023-2024 in review](https://lisp-journey.gitlab.io/blog/these-years-in-common-lisp-2023-2024-in-review/)
* [2025-02-18, 12:33:50](https://lobste.rs/s/aexhi5/reviewing_cryptography_used_by_signal) - [Reviewing the Cryptography Used by Signal](https://soatok.blog/2025/02/18/reviewing-the-cryptography-used-by-signal/)
* [2025-02-18, 12:04:00](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss) - [EU Bans Bisphenol A From Contact With Food](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss)
* [2025-02-18, 10:37:55](https://news.ycombinator.com/item?id=43088124) - [The Secret Poker Game You Can Play on the Subway](https://experience.prfalken.dev/english/subway-poker/)
* [2025-02-18, 10:02:30](https://news.ycombinator.com/item?id=43087944) - [XOR](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/xor/)
* [2025-02-18, 07:19:00](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss) - [Targeting Amino Acids to Search for Life on Mars](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss)
* [2025-02-18, 02:29:00](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss) - [DOGE as a National Cyberattack](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss)
* [2025-02-17, 20:44:00](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss) - [Octet Of ESP32s Lets You See WiFi Like Never Before](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss)
* [2025-02-17, 16:15:48](https://news.ycombinator.com/item?id=43080445) - [How Louis Armstrong shaped the sound of Ghana](https://www.atlasobscura.com/articles/louis-armstrong-jazz-highlife-ghana)
* [2025-02-17, 16:02:00](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss) - [Women Speak Some 3000ish Words More Per Day Than Men](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss)
* [2025-02-17, 11:15:00](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss) - [Wiggling Ears May Have Once Helped Us Hear](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss)
* [2025-02-17, 09:56:55](https://news.ycombinator.com/item?id=43077091) - [An early social un-network](https://paperstack.com/an_early_social_unnetwork/)
* [2025-02-17, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss) - [AUKUS Blasts Holes In Lockbit's Bulletproof Hosting Provider](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss)
* [2025-02-17, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss) - [Ignorance Bliss When You’Re Drowning In Information](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss)
* [2025-02-16, 20:54:00](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss) - [The Guy Who Accidentally Threw Away $700 Million in Bitcoin Wants to Buy the Landfill to Find It](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss)
* [2025-02-16, 16:12:00](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss) - [Waste Surveillance at Just 20 Airports Could Spot the Next Pandemic](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss)
* [2025-02-16, 11:27:00](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss) - [AI Reveals Hidden Interior Design Rules of the Cell](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss)
* [2025-02-16, 10:13:31](https://news.ycombinator.com/item?id=43066927) - [Meta Project Aria - Smart Glasses Research Kit](https://www.projectaria.com/research-kit/?_fb_noscript=1)
* [2025-02-16, 06:42:00](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss) - [Key Takeaways From The Paris AI Summit](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss)
* [2025-02-16, 01:58:00](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss) - [If You Ever Stacked Cups In Gym Class, Blame My Dad](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss)
* [2025-02-15, 21:09:00](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss) - [Let’s Buy California from Trump – Denmark’s Next Big Adventure ](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss)
* [2025-02-15, 20:04:30](https://news.ycombinator.com/item?id=43061803) - [Reasons to Not Parse Localized Strings](https://blog.sffc.xyz/post/190943794505/why-you-should-not-parse-localized-strings)
* [2025-02-15, 16:24:00](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss) - [Flies Play Too, Carousel Study Suggests](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss)
* [2025-02-15, 11:38:00](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss) - [Anyone Can Push Updates to the DOGE.gov Website](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss)
* [2025-02-15, 06:52:00](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss) - [RTX5090 Cable Overheats to 150 C Where Uneven Current Distribution Likely the Culprit](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss)
* [2025-02-15, 02:08:00](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss) - [EU Will Put Over $200 Billion Toward AI Development](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss)
