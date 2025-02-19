# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Security

* [Debugging Hetzner: Uncovering failures with powerstat, sensors, and dmidecode](https://www.ubicloud.com/blog/debugging-hetzner-uncovering-failures-with-powerstat-sensors-and-dmidecode) - An in-depth look at techniques to diagnose datacenter hardware issues using advanced tools. [Comments](https://news.ycombinator.com/item?id=43101430).

* [Russian phishing campaigns exploit Signal's device-linking feature](https://www.bleepingcomputer.com/news/security/russian-phishing-campaigns-exploit-signals-device-linking-feature/) - Explores vulnerabilities in Signal's device-linking feature, exploited by sophisticated phishing campaigns. [Comments](https://lobste.rs/s/208z0p/russian_phishing_campaigns_exploit).

* [New OpenSSH Flaws Enable Man-in-the-Middle and DoS Attacks](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss) - Explains recent vulnerabilities in OpenSSH that could permit critical cybersecurity risks. [Comments](https://soylentnews.org/comments.pl?sid=25/02/19/0312225).

* [Hackers Planted a Steam Game With Malware To Steal Gamers' Passwords](https://it.slashdot.org/story/25/02/19/0031255/hackers-planted-a-steam-game-with-malware-to-steal-gamers-passwords?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Investigation into a malicious Steam game designed to capture user credentials. [Comments](https://it.slashdot.org/comments.pl?sid=25/02/19/0031255).

## Science and Space

* [NASA says 'City killer' asteroid now has 3.1% chance of hitting Earth](https://www.france24.com/en/live-news/20250218-city-killer-asteroid-now-has-3-1-chance-of-hitting-earth-nasa) - Highlights a significant update on asteroid collision predictions with Earth by NASA. [Comments](https://news.ycombinator.com/item?id=43101231).

* [3D Map of Exoplanet Atmosphere Shows Wacky Climate](https://science.slashdot.org/story/25/02/19/0058237/3d-map-of-exoplanet-atmosphere-shows-wacky-climate?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Details the fascinating discoveries of an exoplanet's atmospheric characteristics. [Comments](https://science.slashdot.org/comments.pl?sid=25/02/19/0058237).

## AI and Machine Learning

* [Mira Murati Is Launching Her OpenAI Rival: Thinking Machines Lab](https://slashdot.org/story/25/02/18/2235256/mira-murati-is-launching-her-openai-rival-thinking-machines-lab?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Describes plans for a new competitor to OpenAI founded by notable AI expert Mira Murati. [Comments](https://slashdot.org/comments.pl?sid=25/02/18/2235256).

* [Serving local LLMs with MLX](https://kconner.com/2025/02/17/running-local-llms-with-mlx.html) - Discusses tools and methods for deploying local LLMs (Large Language Models) effectively. [Comments](https://lobste.rs/s/vxyx7a/serving_local_llms_with_mlx).

## Programming Insights

* [Learning: the hardest problem in computer science](https://www.herostrat.us/posts/learning-the-hardest-problem-in-computer-science/) - A discussion on the challenges of learning within the computer science domain. [Comments](https://lobste.rs/s/syjb5i/learning_hardest_problem_computer).

* [Programming with Math | The Lambda Calculus](https://youtu.be/ViPNHMSUcog) - A video tutorial exploring the fundamentals of functional programming through lambda calculus. [Comments](https://lobste.rs/s/1ao83l/programming_with_math_lambda_calculus).

## Design and Creativity

* [In Video Games, The Player Never Moves](https://www.youtube.com/watch?v=wiYTxjJjfxs) - A conceptual video explaining the optical illusion of player movement in games. [Comments](https://lobste.rs/s/d7r6cd/video_games_player_never_moves).

* [The 88x31 GIF Collection](https://cyber.dabamos.de/88x31/) - An archive showcasing nostalgic 88x31 GIF banners from the early web era. [Comments](https://news.ycombinator.com/item?id=43099793).

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

* [2025-02-19, 12:55:47](https://lobste.rs/s/gxibvy/pain_linear_types_rust_2017) - [The Pain Of Linear Types In Rust [2017]](https://faultlore.com/blah/linear-rust/)
* [2025-02-19, 12:40:58](https://news.ycombinator.com/item?id=43101430) - [Debugging Hetzner: Uncovering failures with powerstat, sensors, and dmidecode](https://www.ubicloud.com/blog/debugging-hetzner-uncovering-failures-with-powerstat-sensors-and-dmidecode)
* [2025-02-19, 12:39:13](https://lobste.rs/s/qepnbe/where_are_all_rewrite_rules) - [Where are all the Rewrite Rules?](https://www.philipzucker.com/rewrite_rules/)
* [2025-02-19, 12:16:21](https://news.ycombinator.com/item?id=43101231) - [NASA says 'City killer' asteroid now has 3.1% chance of hitting Earth](https://www.france24.com/en/live-news/20250218-city-killer-asteroid-now-has-3-1-chance-of-hitting-earth-nasa)
* [2025-02-19, 12:09:50](https://lobste.rs/s/208z0p/russian_phishing_campaigns_exploit) - [Russian phishing campaigns exploit Signal's device-linking feature](https://www.bleepingcomputer.com/news/security/russian-phishing-campaigns-exploit-signals-device-linking-feature/)
* [2025-02-19, 11:51:07](https://lobste.rs/s/urlqst/changing_every_line_three_times) - [Changing every line three times](https://daniel.haxx.se/blog/2025/02/18/changing-every-line-three-times/)
* [2025-02-19, 11:17:22](https://lobste.rs/s/flhcsy/proposal_starting_tasks_synchronously) - [Proposal: Starting tasks synchronously from caller context](https://github.com/ktoso/swift-evolution/blob/wip-task-synchronously-start/proposals/NNNN-task-start-synchronously-on-caller-context.md)
* [2025-02-19, 11:01:12](https://lobste.rs/s/1ao83l/programming_with_math_lambda_calculus) - [Programming with Math | The Lambda Calculus](https://youtu.be/ViPNHMSUcog)
* [2025-02-19, 10:35:28](https://news.ycombinator.com/item?id=43100648) - [The reality of long-term software maintenance from the maintainer's perspective](https://www.construct.net/en/blogs/ashleys-blog-2/reality-long-term-software-1892)
* [2025-02-19, 10:28:21](https://lobste.rs/s/syjb5i/learning_hardest_problem_computer) - [Learning: the hardest problem in computer science](https://www.herostrat.us/posts/learning-the-hardest-problem-in-computer-science/)
* [2025-02-19, 10:23:09](https://lobste.rs/s/d7r6cd/video_games_player_never_moves) - [In Video Games, The Player Never Moves](https://www.youtube.com/watch?v=wiYTxjJjfxs)
* [2025-02-19, 10:00:00](https://tech.slashdot.org/story/25/02/19/055211/microsoft-reminds-admins-to-prepare-for-wsus-driver-sync-deprecation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Reminds Admins To Prepare For WSUS Driver Sync Deprecation](https://tech.slashdot.org/story/25/02/19/055211/microsoft-reminds-admins-to-prepare-for-wsus-driver-sync-deprecation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 09:24:50](https://lobste.rs/s/oizlxo/add_wayland_color_management_protocol) - [Add Wayland color-management protocol](https://gitlab.freedesktop.org/wayland/wayland-protocols/-/commit/452e943b4991)
* [2025-02-19, 08:04:45](https://news.ycombinator.com/item?id=43099793) - [The 88x31 GIF Collection](https://cyber.dabamos.de/88x31/)
* [2025-02-19, 07:00:00](https://science.slashdot.org/story/25/02/19/0458222/in-a-last-minute-decision-white-house-decides-not-to-terminate-nasa-employees?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [In a Last-Minute Decision, White House Decides Not To Terminate NASA Employees](https://science.slashdot.org/story/25/02/19/0458222/in-a-last-minute-decision-white-house-decides-not-to-terminate-nasa-employees?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 05:08:01](https://lobste.rs/s/wwgtxt/append_only_programming) - [Append-only programming](https://iafisher.com/blog/2024/08/append-only-programming)
* [2025-02-19, 04:49:46](https://news.ycombinator.com/item?id=43098705) - [Ensuring Accountability for All Agencies](https://www.whitehouse.gov/presidential-actions/2025/02/ensuring-accountability-for-all-agencies/)
* [2025-02-19, 04:48:09](https://news.ycombinator.com/item?id=43098690) - [Go-msquic: A new QUIC/HTTP3 library for Go](https://github.com/noboruma/go-msquic)
* [2025-02-19, 04:35:16](https://news.ycombinator.com/item?id=43098626) - [Steve Jackson Games Is Bringing the Fighting Fantasy Books to the US](https://www.sjgames.com/fightingfantasy/)
* [2025-02-19, 04:13:31](https://lobste.rs/s/vxyx7a/serving_local_llms_with_mlx) - [Serving local LLMs with MLX](https://kconner.com/2025/02/17/running-local-llms-with-mlx.html)
* [2025-02-19, 03:41:48](https://news.ycombinator.com/item?id=43098318) - [Thoughts on Daylight Computer](https://jon.bo/posts/daylight-computer-1/)
* [2025-02-19, 03:41:14](https://lobste.rs/s/d9lnbi/towards_simple_expressive_query) - [Towards A Simple and Expressive Query Language](https://www.youtube.com/watch?v=TBAf5l1RmcA)
* [2025-02-19, 03:30:00](https://science.slashdot.org/story/25/02/19/0058237/3d-map-of-exoplanet-atmosphere-shows-wacky-climate?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [3D Map of Exoplanet Atmosphere Shows Wacky Climate](https://science.slashdot.org/story/25/02/19/0058237/3d-map-of-exoplanet-atmosphere-shows-wacky-climate?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss) - [New OpenSSH Flaws Enable Man-in-the-Middle and DoS Attacks](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss)
* [2025-02-19, 02:37:10](https://news.ycombinator.com/item?id=43097932) - [Implementing LLaMA3 in 100 Lines of Pure Jax](https://saurabhalone.com/blogs/llama3/web)
* [2025-02-19, 02:21:15](https://lobste.rs/s/8mexgt/tcl_misunderstood_2006) - [Tcl the Misunderstood (2006)](https://antirez.com/articoli/tclmisunderstood.html)
* [2025-02-19, 02:20:00](https://tech.slashdot.org/story/25/02/19/0038255/nvidia-ends-32-bit-cuda-app-support-for-geforce-rtx-50-series?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia Ends 32-Bit CUDA App Support For GeForce RTX 50 Series](https://tech.slashdot.org/story/25/02/19/0038255/nvidia-ends-32-bit-cuda-app-support-for-geforce-rtx-50-series?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 02:09:49](https://news.ycombinator.com/item?id=43097747) - [The Unbrickable Pledge](https://usetrmnl.com/blog/the-unbrickable-pledge)
* [2025-02-19, 01:40:00](https://it.slashdot.org/story/25/02/19/0031255/hackers-planted-a-steam-game-with-malware-to-steal-gamers-passwords?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hackers Planted a Steam Game With Malware To Steal Gamers' Passwords](https://it.slashdot.org/story/25/02/19/0031255/hackers-planted-a-steam-game-with-malware-to-steal-gamers-passwords?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 01:08:45](https://lobste.rs/s/ml4irc/continued_fraction_arithmetic_1978) - [Continued Fraction Arithmetic (1978)](https://perl.plover.com/classes/cftalk/INFO/gosper.txt)
* [2025-02-19, 01:00:00](https://tech.slashdot.org/story/25/02/19/0017218/whatsapp-faces-tougher-eu-rules-as-users-top-45-million?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [WhatsApp Faces Tougher EU Rules As Users Top 45 Million](https://tech.slashdot.org/story/25/02/19/0017218/whatsapp-faces-tougher-eu-rules-as-users-top-45-million?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-19, 00:25:10](https://news.ycombinator.com/item?id=43096975) - [Parsing JSON in 500 lines of Rust](https://www.krish.gg/blog/json-parser-in-rust)
* [2025-02-19, 00:20:00](https://apple.slashdot.org/story/25/02/18/2158214/google-play-books-purchases-on-ios-now-skirt-the-app-stores-commission?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Play Books Purchases on iOS Now Skirt the App Store's Commission](https://apple.slashdot.org/story/25/02/18/2158214/google-play-books-purchases-on-ios-now-skirt-the-app-stores-commission?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 23:40:00](https://slashdot.org/story/25/02/18/2235256/mira-murati-is-launching-her-openai-rival-thinking-machines-lab?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mira Murati Is Launching Her OpenAI Rival: Thinking Machines Lab](https://slashdot.org/story/25/02/18/2235256/mira-murati-is-launching-her-openai-rival-thinking-machines-lab?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 23:22:22](https://news.ycombinator.com/item?id=43096422) - [Alice Hamilton waged a one-woman campaign to get the lead out of everything](https://www.smithsonianmag.com/innovation/how-alice-hamilton-waged-one-woman-campaign-get-lead-out-everything-180985960/)
* [2025-02-18, 23:18:27](https://lobste.rs/s/l6bhjh/introducing_pi_hole_v6) - [Introducing Pi-hole v6](https://pi-hole.net/blog/2025/02/18/introducing-pi-hole-v6/)
* [2025-02-18, 23:00:00](https://slashdot.org/story/25/02/18/2245242/hp-to-acquire-parts-of-humane-shut-down-the-ai-pin?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [HP To Acquire Parts of Humane, Shut Down the AI Pin](https://slashdot.org/story/25/02/18/2245242/hp-to-acquire-parts-of-humane-shut-down-the-ai-pin?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 22:40:00](https://linux.slashdot.org/story/25/02/18/227222/linus-torvalds-would-reportedly-merge-rust-kernel-code-over-maintainer-objections?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Linus Torvalds Would Reportedly Merge Rust Kernel Code Over Maintainer Objections](https://linux.slashdot.org/story/25/02/18/227222/linus-torvalds-would-reportedly-merge-rust-kernel-code-over-maintainer-objections?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 22:20:00](https://tech.slashdot.org/story/25/02/18/2150212/uber-for-armed-guards-rushes-to-market?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Uber For Armed Guards' Rushes To Market](https://tech.slashdot.org/story/25/02/18/2150212/uber-for-armed-guards-rushes-to-market?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 22:15:05](https://news.ycombinator.com/item?id=43095811) - [HP Acquires Humane's AI Software](https://humane.com/media/humane-hp)
* [2025-02-18, 21:46:00](https://yro.slashdot.org/story/25/02/18/2147200/ai-hallucinations-in-court-papers-spell-trouble-for-lawyers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI 'Hallucinations' in Court Papers Spell Trouble For Lawyers](https://yro.slashdot.org/story/25/02/18/2147200/ai-hallucinations-in-court-papers-spell-trouble-for-lawyers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss) - [Chinese GPUs Surpass Nvidia Chips by Nearly Tenfold in Supercomputer Simulation](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss)
* [2025-02-18, 21:39:01](https://lobste.rs/s/8yz0ap/general_wine_proton_developer_open) - [General Wine/Proton Developer (Open-Source Programmer)](https://www.codeweavers.com/about/jobs#job-dev)
* [2025-02-18, 21:09:19](https://news.ycombinator.com/item?id=43095157) - [A year of uv: pros, cons, and should you migrate](https://www.bitecode.dev/p/a-year-of-uv-pros-cons-and-should)
* [2025-02-18, 20:46:38](https://lobste.rs/s/7clfly/bellroy_technology_team_2024_review) - [Bellroy Technology Team: 2024 in Review](https://exploring-better-ways.bellroy.com/bellroy-technology-team-2024-in-review.html)
* [2025-02-18, 20:05:00](https://news.slashdot.org/story/25/02/18/205226/groups-ask-us-court-to-reconsider-ruling-blocking-net-neutrality-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Groups Ask US Court To Reconsider Ruling Blocking Net Neutrality Rules](https://news.slashdot.org/story/25/02/18/205226/groups-ask-us-court-to-reconsider-ruling-blocking-net-neutrality-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 19:57:17](https://news.ycombinator.com/item?id=43094260) - [Valve releases Team Fortress 2 code](https://github.com/ValveSoftware/source-sdk-2013/commit/0759e2e8e179d5352d81d0d4aaded72c1704b7a9)
* [2025-02-18, 19:26:33](https://news.ycombinator.com/item?id=43093939) - [Nuclear fusion: WEST beats the world record for plasma duration](https://www.cea.fr/english/Pages/News/nuclear-fusion-west-beats-the-world-record-for-plasma-duration.aspx)
* [2025-02-18, 19:03:55](https://lobste.rs/s/r0ybx2/representing_graphs_postgresql_with_sql) - [Representing graphs in Postgresql with SQL/PGQ](https://www.enterprisedb.com/blog/representing-graphs-postgresql-sqlpgq)
* [2025-02-18, 18:50:00](https://it.slashdot.org/story/25/02/18/1722255/lloyds-is-auditing-thousands-of-it-staffers-technical-skills?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Lloyds Is Auditing Thousands of IT Staffers' Technical Skills](https://it.slashdot.org/story/25/02/18/1722255/lloyds-is-auditing-thousands-of-it-staffers-technical-skills?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 18:10:00](https://slashdot.org/story/25/02/18/1718255/27-of-job-listings-for-cfos-now-mention-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [27% of Job Listings For CFOs Now Mention AI](https://slashdot.org/story/25/02/18/1718255/27-of-job-listings-for-cfos-now-mention-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 17:30:39](https://news.ycombinator.com/item?id=43092522) - [Launch HN: Promptless (YC W25) – Automatic updates for customer-facing docs](https://news.ycombinator.com/item?id=43092522)
* [2025-02-18, 17:21:31](https://news.ycombinator.com/item?id=43092386) - [Try thinking and learning without working memory (2008)](https://sharpbrains.com/blog/2008/05/25/try-thinking-and-learning-without-working-memory/)
* [2025-02-18, 17:08:22](https://lobste.rs/s/bfm4af/mitm_attack_against_openssh_s) - [MitM attack against OpenSSH's VerifyHostKeyDNS-enabled client](https://marc.info/?l=oss-security&m=173986993304277&w=2)
* [2025-02-18, 16:55:22](https://news.ycombinator.com/item?id=43092003) - [One year after switching from Java to Go](https://glasskube.dev/blog/from-java-to-go/)
* [2025-02-18, 16:52:00](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss) - [New Book-Sorting Algorithm Almost Reaches Perfection](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss)
* [2025-02-18, 16:30:33](https://lobste.rs/s/fiagu7/build_rails_apps_with_components) - [Build Rails Apps with Components](https://terminalwire.com/articles/superview)
* [2025-02-18, 16:24:01](https://news.ycombinator.com/item?id=43091466) - [File Pilot: A file explorer built for speed with a modern, robust interface](https://filepilot.tech/)
* [2025-02-18, 16:13:43](https://lobste.rs/s/76ifpd/these_years_common_lisp_2023_2024_review) - [These years in Common Lisp: 2023-2024 in review](https://lisp-journey.gitlab.io/blog/these-years-in-common-lisp-2023-2024-in-review/)
* [2025-02-18, 15:47:25](https://news.ycombinator.com/item?id=43090857) - [Migraine is more than a headache – a rethink offers hope](https://www.nature.com/articles/d41586-025-00456-x)
* [2025-02-18, 14:57:09](https://news.ycombinator.com/item?id=43090214) - [Show HN: Scripton – Python IDE with built-in realtime visualizations](https://scripton.dev)
* [2025-02-18, 13:49:53](https://lobste.rs/s/nkhjec/japanese_engineers_talk_about) - [Japanese engineers talk about difficulties they faced with the Nintendo Switch](https://automaton-media.com/en/game-development/the-nintendo-switch-limited-cpu-and-ram-but-it-also-made-optimization-a-fun-puzzle-to-figure-out-japanese-engineers-talk-about-difficulties-they-faced/)
* [2025-02-18, 12:33:50](https://lobste.rs/s/aexhi5/reviewing_cryptography_used_by_signal) - [Reviewing the Cryptography Used by Signal](https://soatok.blog/2025/02/18/reviewing-the-cryptography-used-by-signal/)
* [2025-02-18, 12:04:00](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss) - [EU Bans Bisphenol A From Contact With Food](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss)
* [2025-02-18, 10:02:30](https://news.ycombinator.com/item?id=43087944) - [XOR](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/xor/)
* [2025-02-18, 07:19:00](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss) - [Targeting Amino Acids to Search for Life on Mars](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss)
* [2025-02-18, 05:25:05](https://news.ycombinator.com/item?id=43086347) - [SWE-Lancer: a benchmark of freelance software engineering tasks from Upwork](https://arxiv.org/abs/2502.12115)
* [2025-02-18, 02:29:00](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss) - [DOGE as a National Cyberattack](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss)
* [2025-02-17, 22:11:33](https://lobste.rs/s/ch64l3/new_junior_developers_can_t_actually_code) - [New Junior Developers Can’t Actually Code](https://nmn.gl/blog/ai-and-learning)
* [2025-02-17, 20:44:00](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss) - [Octet Of ESP32s Lets You See WiFi Like Never Before](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss)
* [2025-02-17, 20:29:53](https://lobste.rs/s/zm1g8r/why_i_m_writing_scheme_implementation) - [Why I'm Writing a Scheme Implementation in 2025 (The Answer is Async Rust)](https://maplant.com/2025-02-17-Why-I'm-Writing-a-Scheme-Implementation-in-2025-(The-Answer-is-Async-Rust).html)
* [2025-02-17, 16:02:00](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss) - [Women Speak Some 3000ish Words More Per Day Than Men](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss)
* [2025-02-17, 11:15:00](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss) - [Wiggling Ears May Have Once Helped Us Hear](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss)
* [2025-02-17, 09:56:55](https://news.ycombinator.com/item?id=43077091) - [An early social un-network](https://paperstack.com/an_early_social_unnetwork/)
* [2025-02-17, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss) - [AUKUS Blasts Holes In Lockbit's Bulletproof Hosting Provider](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss)
* [2025-02-17, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss) - [Ignorance Bliss When You’Re Drowning In Information](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss)
* [2025-02-16, 20:54:00](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss) - [The Guy Who Accidentally Threw Away $700 Million in Bitcoin Wants to Buy the Landfill to Find It](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss)
* [2025-02-16, 19:13:15](https://news.ycombinator.com/item?id=43070744) - [Grim Fandango Puzzle Document (1996) [pdf]](http://gameshelf.jmac.org/2008/11/13/GrimPuzzleDoc_small.pdf)
* [2025-02-16, 16:12:00](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss) - [Waste Surveillance at Just 20 Airports Could Spot the Next Pandemic](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss)
* [2025-02-16, 11:27:00](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss) - [AI Reveals Hidden Interior Design Rules of the Cell](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss)
* [2025-02-16, 10:13:31](https://news.ycombinator.com/item?id=43066927) - [Meta Project Aria - Smart Glasses Research Kit](https://www.projectaria.com/research-kit/?_fb_noscript=1)
* [2025-02-16, 06:42:00](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss) - [Key Takeaways From The Paris AI Summit](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss)
* [2025-02-16, 01:58:00](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss) - [If You Ever Stacked Cups In Gym Class, Blame My Dad](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss)
* [2025-02-16, 00:52:52](https://news.ycombinator.com/item?id=43064200) - [How X-Plane Works](https://www.x-plane.com/desktop/how-x-plane-works/)
* [2025-02-15, 21:09:00](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss) - [Let’s Buy California from Trump – Denmark’s Next Big Adventure ](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss)
* [2025-02-15, 16:24:00](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss) - [Flies Play Too, Carousel Study Suggests](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss)
* [2025-02-15, 12:04:31](https://news.ycombinator.com/item?id=43057898) - [Engineering of human cells reveals genome's resilience to structural changes](https://phys.org/news/2025-01-complex-human-cell-lines-reveals.html)
* [2025-02-15, 11:38:00](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss) - [Anyone Can Push Updates to the DOGE.gov Website](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss)
* [2025-02-15, 06:52:00](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss) - [RTX5090 Cable Overheats to 150 C Where Uneven Current Distribution Likely the Culprit](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss)
* [2025-02-15, 02:44:05](https://news.ycombinator.com/item?id=43055400) - [Little Sisyphus A physics-based platformer for the NES](https://pubby.games/sisyphus.html)
* [2025-02-15, 02:08:00](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss) - [EU Will Put Over $200 Billion Toward AI Development](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss)
