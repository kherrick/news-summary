# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Innovations

* [Writing your own CUPS printer driver in 100 lines of Python](https://behind.pretix.eu/2018/01/20/cups-driver/): A guide to creating a custom CUPS printer driver using Python, surprising in its simplicity. [Comments](https://lobste.rs/s/9wauzr/writing_your_own_cups_printer_driver_100)

* [SerenityOS Creator Is Building an Independent, Standards-First Browser Called 'Ladybird'](https://news.slashdot.org/story/25/05/24/173222/serenityos-creator-is-building-an-independent-standards-first-browser-called-ladybird?utm_source=rss1.0mainlinkanon&utm_medium=feed): A detailed update on the Ladybird browser, a new entry in the browser ecosystem focused on web standards. [Comments](https://news.slashdot.org/story/25/05/24/173222/serenityos-creator-is-building-an-independent-standards-first-browser-called-ladybird?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Fast, Simple and Open Firebase Alternative: TrailBase](https://github.com/trailbaseio/trailbase/releases/tag/v0.12.0): Explore TrailBase, a lightweight alternative to Firebase, emphasizing openness and ease of use. [Comments](https://news.ycombinator.com/item?id=44087687)

## Creative Engineering and Design

* [UE1 homebrew 1-bit vacuum computer in action](https://www.youtube.com/watch?v=kT3TMb9n26Q): A fascinating showcase of a homebrew 1-bit vacuum computer pushing the boundaries of DIY computing. [Comments](https://lobste.rs/s/liypey/ue1_homebrew_1_bit_vacuum_computer_action)

* [Mathpad: A mathematical keypad for students and professionals](https://github.com/Summa-Cogni/Mathpad): Dive into Mathpad, a specialized device tailored for math enthusiasts, students, and professionals. [Comments](https://lobste.rs/s/szpyf0/mathpad_mathematical_keypad_for)

## Experimental Advancements in Science and Physics

* ['Strange metals' point to a whole new way to understand electricity](https://www.science.org/content/article/strange-metals-point-whole-new-way-understand-electricity): Research into 'strange metals' opens unexpected approaches to understanding fundamental aspects of electricity. [Comments](https://news.ycombinator.com/item?id=44087916)

* [Researchers Build 'The World's Fastest Petahertz Quantum Transistor'. They Predict Lightwave Electronics](https://science.slashdot.org/story/25/05/24/0337249/researchers-build-the-worlds-fastest-petahertz-quantum-transistor-they-predict-lightwave-electronics?utm_source=rss1.0mainlinkanon&utm_medium=feed): A groundbreaking milestone achieved in quantum electronics, with implications for futuristic computational devices. [Comments](https://science.slashdot.org/story/25/05/24/0337249/researchers-build-the-worlds-fastest-petahertz-quantum-transistor-they-predict-lightwave-electronics?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Historical and Geopolitical Curiosities

* [The USSR Once Tried Reversing a River's Direction with 'Peaceful Nuclear Explosions'](https://hardware.slashdot.org/story/25/05/25/0040259/the-ussr-once-tried-reversing-a-rivers-direction-with-peaceful-nuclear-explosions?utm_source=rss1.0mainlinkanon&utm_medium=feed): An intriguing account of a Soviet-era attempt to modify natural geography using nuclear technology. [Comments](https://hardware.slashdot.org/story/25/05/25/0040259/the-ussr-once-tried-reversing-a-rivers-direction-with-peaceful-nuclear-explosions?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Gaming Innovations and Retrospectives

* [Show HN: Wall Go – browser remake of a Devil's Plan 2 mini-game](https://schaoss.github.io/wall-go/): Steps back into retro gaming nostalgia with a web-based version of a playful classic. [Comments](https://news.ycombinator.com/item?id=44088248)

* [Why old games never die, but new ones do](https://pleromanonx86.wordpress.com/2025/05/06/why-old-games-never-die-but-new-ones-do/): An analysis of the factors influencing the longevity of older games versus newer titles. [Comments](https://news.ycombinator.com/item?id=44083917)

## Cybersecurity Insights

* [How I used o3 to find CVE-2025-37899, a remote zeroday vulnerability in the Linux kernel’s SMB implementation](https://sean.heelan.io/2025/05/22/how-i-used-o3-to-find-cve-2025-37899-a-remote-zeroday-vulnerability-in-the-linux-kernels-smb-implementation/): A walkthrough on leveraging tool innovations to uncover critical software flaws. [Comments](https://lobste.rs/s/uvw5lp/how_i_used_o3_find_cve_2025_37899_remote)

* [Remote Prompt Injection in GitLab Duo Leads to Source Code Theft](https://www.legitsecurity.com/blog/remote-prompt-injection-in-gitlab-duo): A cautionary tale of prompt injection vulnerabilities leading to significant code exposure. [Comments](https://lobste.rs/s/g8nnd1/remote_prompt_injection_gitlab_duo_leads)

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

* [2025-05-25, 15:51:04](https://lobste.rs/s/9wauzr/writing_your_own_cups_printer_driver_100) - [Writing your own CUPS printer driver in 100 lines of Python](https://behind.pretix.eu/2018/01/20/cups-driver/)
* [2025-05-25, 15:34:00](https://news.slashdot.org/story/25/05/24/173222/serenityos-creator-is-building-an-independent-standards-first-browser-called-ladybird?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SerenityOS Creator Is Building an Independent, Standards-First Browser Called &apos;Ladybird&apos;](https://news.slashdot.org/story/25/05/24/173222/serenityos-creator-is-building-an-independent-standards-first-browser-called-ladybird?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-25, 15:02:39](https://lobste.rs/s/liypey/ue1_homebrew_1_bit_vacuum_computer_action) - [UE1 homebrew 1-bit vacuum computer in action](https://www.youtube.com/watch?v=kT3TMb9n26Q)
* [2025-05-25, 14:49:46](https://news.ycombinator.com/item?id=44088248) - [Show HN: Wall Go – browser remake of a Devil&apos;s Plan 2 mini-game](https://schaoss.github.io/wall-go/)
* [2025-05-25, 14:45:47](https://news.ycombinator.com/item?id=44088216) - [Lottie is an open format for animated vector graphics](https://lottie.github.io/)
* [2025-05-25, 14:34:00](https://hardware.slashdot.org/story/25/05/25/0618250/will-gms-bet-on-battery-tech-jumpstart-the-transition-to-electric-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will GM&apos;s Bet on Battery Tech Jumpstart the Transition to Electric Cars?](https://hardware.slashdot.org/story/25/05/25/0618250/will-gms-bet-on-battery-tech-jumpstart-the-transition-to-electric-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-25, 14:02:19](https://news.ycombinator.com/item?id=44087916) - [&apos;Strange metals&apos; point to a whole new way to understand electricity](https://www.science.org/content/article/strange-metals-point-whole-new-way-understand-electricity)
* [2025-05-25, 13:51:55](https://news.ycombinator.com/item?id=44087844) - [Design Pressure: The Invisible Hand That Shapes Your Code](https://hynek.me/talks/design-pressure/)
* [2025-05-25, 13:30:53](https://news.ycombinator.com/item?id=44087687) - [Fast, Simple and Open Firebase Alternative: TrailBase](https://github.com/trailbaseio/trailbase/releases/tag/v0.12.0)
* [2025-05-25, 13:22:59](https://lobste.rs/s/ipqjvb/how_guarantee_your_red_team_will_fail) - [How to Guarantee Your Red Team Will Fail](https://0xda.de/garden/guarantee-red-team-failure/)
* [2025-05-25, 12:36:13](https://lobste.rs/s/mkpgoe/on_file_formats) - [On File Formats](https://solhsa.com/oldernews2025.html#ON-FILE-FORMATS)
* [2025-05-25, 12:35:30](https://news.ycombinator.com/item?id=44087373) - [Programming on 34 Keys (2022)](https://oppi.li/posts/programming_on_34_keys/)
* [2025-05-25, 12:33:37](https://lobste.rs/s/qcjjqo/programming_on_34_keys_2022) - [Programming On 34 Keys (2022)](https://oppi.li/posts/programming_on_34_keys/)
* [2025-05-25, 11:56:16](https://news.ycombinator.com/item?id=44087183) - [Investigating physical attacks targeting cryptocurrency users (2024) [pdf]](https://drops.dagstuhl.de/storage/00lipics/lipics-vol316-aft2024/LIPIcs.AFT.2024.24/LIPIcs.AFT.2024.24.pdf)
* [2025-05-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss) - [The Pedestrians Who Abetted a Hawk’s Deadly Attack](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss)
* [2025-05-25, 11:34:00](https://apple.slashdot.org/story/25/05/25/0017230/apples-bad-news-keeps-coming-can-they-still-turn-it-around?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Bad News Keeps Coming. Can They Still Turn It Around?](https://apple.slashdot.org/story/25/05/25/0017230/apples-bad-news-keeps-coming-can-they-still-turn-it-around?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-25, 11:24:35](https://lobste.rs/s/jpxyx9/systematic_design_multi_join_group_by) - [Systematic design of multi-join GROUP BY queries](https://kb.databasedesignbook.com/posts/systematic-design-of-join-queries/)
* [2025-05-25, 11:21:22](https://news.ycombinator.com/item?id=44087049) - [Show HN: SVG Animation Software](https://expressive.app/expressive-animator/)
* [2025-05-25, 10:21:45](https://lobste.rs/s/szpyf0/mathpad_mathematical_keypad_for) - [Mathpad: A mathematical keypad for students and professionals](https://github.com/Summa-Cogni/Mathpad)
* [2025-05-25, 08:51:38](https://lobste.rs/s/suuuaw/what_works_doesn_t_selling_formal_methods) - [What Works (and Doesn&apos;t) Selling Formal Methods](https://www.galois.com/articles/what-works-and-doesnt-selling-formal-methods)
* [2025-05-25, 07:34:00](https://hardware.slashdot.org/story/25/05/25/0040259/the-ussr-once-tried-reversing-a-rivers-direction-with-peaceful-nuclear-explosions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The USSR Once Tried Reversing a River&apos;s Direction with &apos;Peaceful Nuclear Explosions&apos;](https://hardware.slashdot.org/story/25/05/25/0040259/the-ussr-once-tried-reversing-a-rivers-direction-with-peaceful-nuclear-explosions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-25, 06:55:00](https://soylentnews.org/article.pl?sid=25/05/24/1716210&amp;from=rss) - [Jupiter Was Formerly Twice Its Current Size and Had a Much Stronger Magnetic Field ](https://soylentnews.org/article.pl?sid=25/05/24/1716210&amp;from=rss)
* [2025-05-25, 06:45:41](https://lobste.rs/s/dklehn/clojure_mcp) - [Clojure MCP](https://github.com/bhauman/clojure-mcp)
* [2025-05-25, 06:06:39](https://news.ycombinator.com/item?id=44085920) - [Claude 4 System Card](https://simonwillison.net/2025/May/25/claude-4-system-card/)
* [2025-05-25, 05:01:29](https://lobste.rs/s/gc36ej/reinvent_wheel) - [Reinvent the Wheel](https://endler.dev/2025/reinvent-the-wheel/)
* [2025-05-25, 04:58:35](https://lobste.rs/s/tsqrcl/fedora_43_cleared_ship_with_wayland_only) - [Fedora 43 Cleared To Ship With Wayland-Only GNOME](https://www.phoronix.com/news/Fedora-43-Wayland-Only-GNOME)
* [2025-05-25, 04:34:00](https://tech.slashdot.org/story/25/05/25/0347239/duolingo-faces-massive-social-media-backlash-after-ai-first-comments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Duolingo Faces Massive Social Media Backlash After &apos;AI-First&apos; Comments](https://tech.slashdot.org/story/25/05/25/0347239/duolingo-faces-massive-social-media-backlash-after-ai-first-comments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-25, 03:21:07](https://lobste.rs/s/juxpci/goal_embeddable_scripting_array) - [goal - embeddable scripting array language](https://codeberg.org/anaseto/goal)
* [2025-05-25, 02:09:00](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss) - [VPN Service Cancels Customers&apos; Lifetime Subscriptions After Takeover](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss)
* [2025-05-25, 01:43:14](https://lobste.rs/s/ozdlss/hierarchical_hypermedia_world_hyper_g) - [The hierarchical hypermedia world of Hyper-G](http://oldvcr.blogspot.com/2025/05/prior-art-dept-hierarchical-hypermedia.html)
* [2025-05-25, 01:34:54](https://news.ycombinator.com/item?id=44084885) - [How to Install Windows NT 4 Server on Proxmox](https://blog.pipetogrep.org/2025/05/23/how-to-install-windows-nt-4-server-on-proxmox/)
* [2025-05-25, 01:34:00](https://games.slashdot.org/story/25/05/24/2356233/new-doom-the-dark-ages-already-adjusted-to-add-even-more-dangerous-demons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New &apos;Doom: The Dark Ages&apos; Already Adjusted to Add Even More Dangerous Demons](https://games.slashdot.org/story/25/05/24/2356233/new-doom-the-dark-ages-already-adjusted-to-add-even-more-dangerous-demons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-25, 00:07:12](https://news.ycombinator.com/item?id=44084577) - [Domain Theory Lecture Notes](https://liamoc.net/forest/dt-001Y/index.xml)
* [2025-05-25, 00:04:48](https://lobste.rs/s/6sidoz/domain_theory_lecture_notes) - [Domain Theory Lecture Notes](https://liamoc.net/forest/dt-001Y/index.xml)
* [2025-05-24, 22:34:00](https://tech.slashdot.org/story/25/05/24/1740221/mcp-will-be-built-into-windows-to-make-an-agentic-os---bringing-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MCP Will Be Built Into Windows To Make an &apos;Agentic OS&apos; - Bringing Security Concerns](https://tech.slashdot.org/story/25/05/24/1740221/mcp-will-be-built-into-windows-to-make-an-agentic-os---bringing-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 22:24:00](https://soylentnews.org/article.pl?sid=25/05/23/1731218&amp;from=rss) - [Be A Great Communicator To Progress In Engineering](https://soylentnews.org/article.pl?sid=25/05/23/1731218&amp;from=rss)
* [2025-05-24, 22:15:31](https://lobste.rs/s/g8nnd1/remote_prompt_injection_gitlab_duo_leads) - [Remote Prompt Injection in GitLab Duo Leads to Source Code Theft](https://www.legitsecurity.com/blog/remote-prompt-injection-in-gitlab-duo)
* [2025-05-24, 21:34:00](https://entertainment.slashdot.org/story/25/05/24/201246/amazon-cancels-the-wheel-of-time-prime-video-series-after-3-seasons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Cancels the &apos;Wheel of Time&apos; Prime Video Series After 3 Seasons](https://entertainment.slashdot.org/story/25/05/24/201246/amazon-cancels-the-wheel-of-time-prime-video-series-after-3-seasons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 21:29:05](https://news.ycombinator.com/item?id=44083917) - [Why old games never die, but new ones do](https://pleromanonx86.wordpress.com/2025/05/06/why-old-games-never-die-but-new-ones-do/)
* [2025-05-24, 21:27:02](https://news.ycombinator.com/item?id=44083910) - [Using the Apple ][+ with the RetroTink-5X](https://nicole.express/2025/apple-ii-more-like-apple-5x.html)
* [2025-05-24, 20:52:09](https://lobste.rs/s/2adp0p/there_is_no_diffie_hellman_elliptic_curve) - [There is no Diffie-Hellman but Elliptic Curve Diffie-Hellman](https://keymaterial.net/2025/05/23/there-is-no-diffie-hellman-but-elliptic-curve-diffie-hellman/)
* [2025-05-24, 20:45:00](https://lobste.rs/s/qjol4n/captchas_don_t_work_any_more_for_ticket) - [CAPTCHAs don&apos;t work any more for ticket sellers](https://behind.pretix.eu/2025/05/23/captchas-are-over/)
* [2025-05-24, 20:34:00](https://slashdot.org/story/25/05/24/1946203/people-should-know-about-the-beliefs-llms-form-about-them-while-conversing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [People Should Know About the &apos;Beliefs&apos; LLMs Form About Them While Conversing](https://slashdot.org/story/25/05/24/1946203/people-should-know-about-the-beliefs-llms-form-about-them-while-conversing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 20:05:12](https://news.ycombinator.com/item?id=44083467) - [Reinvent the Wheel](https://endler.dev/2025/reinvent-the-wheel/)
* [2025-05-24, 19:50:41](https://news.ycombinator.com/item?id=44083388) - [Tachy0n: The Last 0day Jailbreak](https://blog.siguza.net/tachy0n/)
* [2025-05-24, 19:48:07](https://lobste.rs/s/wzishi/tachy0n_last_0day_jailbreak) - [tachy0n: The last 0day jailbreak](https://blog.siguza.net/tachy0n/)
* [2025-05-24, 19:34:00](https://it.slashdot.org/story/25/05/24/0530234/how-many-qubits-will-it-take-to-break-secure-public-key-cryptography-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Many Qubits Will It Take to Break Secure Public Key Cryptography Algorithms?](https://it.slashdot.org/story/25/05/24/0530234/how-many-qubits-will-it-take-to-break-secure-public-key-cryptography-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 19:16:27](https://lobste.rs/s/uvw5lp/how_i_used_o3_find_cve_2025_37899_remote) - [How I used o3 to find CVE-2025-37899, a remote zeroday vulnerability in the Linux kernel’s SMB implementation](https://sean.heelan.io/2025/05/22/how-i-used-o3-to-find-cve-2025-37899-a-remote-zeroday-vulnerability-in-the-linux-kernels-smb-implementation/)
* [2025-05-24, 18:52:16](https://lobste.rs/s/w1k7fr/having_your_compile_time_cake_eating_it) - [Having your compile-time cake and eating it too](https://0x44.xyz/blog/comptime-1)
* [2025-05-24, 18:34:00](https://news.slashdot.org/story/25/05/24/0619227/firefox-creates-a-smarter-simpler-address-bar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Creates &apos;A Smarter, Simpler Address Bar&apos;](https://news.slashdot.org/story/25/05/24/0619227/firefox-creates-a-smarter-simpler-address-bar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 18:24:05](https://news.ycombinator.com/item?id=44082892) - [Lone coder cracks 50-year puzzle to find Boggle&apos;s top-scoring board](https://www.ft.com/content/0ab64ced-1ed1-466d-acd3-78510d10c3a1)
* [2025-05-24, 17:54:06](https://lobste.rs/s/worahh/petnames_humane_approach_secure) - [Petnames: A humane approach to secure, decentralized naming](https://files.spritely.institute/papers/petnames.html)
* [2025-05-24, 17:51:49](https://lobste.rs/s/xk3zpc/building_interactive_web_pages_with) - [Building interactive web pages with Guile Hoot](https://spritely.institute/news/building-interactive-web-pages-with-guile-hoot.html)
* [2025-05-24, 17:44:00](https://soylentnews.org/article.pl?sid=25/05/23/1716207&amp;from=rss) - [EU-US Trade War Inevitable](https://soylentnews.org/article.pl?sid=25/05/23/1716207&amp;from=rss)
* [2025-05-24, 17:34:00](https://science.slashdot.org/story/25/05/24/0213237/bird-feeders-have-caused-a-dramatic-evolution-of-california-hummingbirds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bird Feeders Have Caused a Dramatic Evolution of California Hummingbirds](https://science.slashdot.org/story/25/05/24/0213237/bird-feeders-have-caused-a-dramatic-evolution-of-california-hummingbirds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 16:34:00](https://science.slashdot.org/story/25/05/24/0337249/researchers-build-the-worlds-fastest-petahertz-quantum-transistor-they-predict-lightwave-electronics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Build &apos;The World&apos;s Fastest Petahertz Quantum Transistor&apos;. They Predict Lightwave Electronics](https://science.slashdot.org/story/25/05/24/0337249/researchers-build-the-worlds-fastest-petahertz-quantum-transistor-they-predict-lightwave-electronics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 15:34:00](https://ask.slashdot.org/story/25/05/24/0430214/ask-slashdot-do-we-need-opt-out-by-default-privacy-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot:  Do We Need Opt-Out-By-Default Privacy Laws?](https://ask.slashdot.org/story/25/05/24/0430214/ask-slashdot-do-we-need-opt-out-by-default-privacy-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 15:03:37](https://news.ycombinator.com/item?id=44081586) - [Good Writing](https://paulgraham.com/goodwriting.html)
* [2025-05-24, 14:49:14](https://lobste.rs/s/o8zujx/gail_ai_powered_github_issue_labeler) - [gail: An AI-powered GitHub Issue Labeler](https://github.com/atgreen/gail)
* [2025-05-24, 14:49:02](https://news.ycombinator.com/item?id=44081494) - [You’re a little company, now act like one (2009)](https://longform.asmartbear.com/little-company/)
* [2025-05-24, 14:34:00](https://linux.slashdot.org/story/25/05/24/041237/red-hat-collaborates-with-sifive-on-risc-v-support-as-rhel-10-brings-ai-assistant-and-post-quantum-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Red Hat Collaborates with SIFive on RISC-V Support, as RHEL 10 Brings AI Assistant and Post-Quantum Security](https://linux.slashdot.org/story/25/05/24/041237/red-hat-collaborates-with-sifive-on-risc-v-support-as-rhel-10-brings-ai-assistant-and-post-quantum-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 14:25:45](https://news.ycombinator.com/item?id=44081338) - [I used o3 to find a remote zeroday in the Linux SMB implementation](https://sean.heelan.io/2025/05/22/how-i-used-o3-to-find-cve-2025-37899-a-remote-zeroday-vulnerability-in-the-linux-kernels-smb-implementation/)
* [2025-05-24, 13:45:02](https://news.ycombinator.com/item?id=44081081) - [Peer Programming with LLMs, for Senior+ Engineers](https://pmbanugo.me/blog/peer-programming-with-llms)
* [2025-05-24, 13:03:00](https://soylentnews.org/article.pl?sid=25/05/23/1218209&amp;from=rss) - [All Living Things Emit Subtle Light Until They Die, Study Suggests](https://soylentnews.org/article.pl?sid=25/05/23/1218209&amp;from=rss)
* [2025-05-24, 13:02:00](https://news.ycombinator.com/item?id=44080803) - [Show HN: Rotary Phone Dial Linux Kernel Driver](https://gitlab.com/sephalon/rotary_dial_kmod)
* [2025-05-24, 12:08:15](https://news.ycombinator.com/item?id=44080549) - [Hong Kong&apos;s Famous Bamboo Scaffolding Hangs on (For Now)](https://www.nytimes.com/2025/05/24/world/asia/hongkong-bamboo-scaffolding.html)
* [2025-05-24, 12:06:06](https://news.ycombinator.com/item?id=44080533) - [The Xenon Death Flash: How a Camera Nearly Killed the Raspberry Pi 2](https://magnus919.com/2025/05/the-xenon-death-flash-how-a-camera-nearly-killed-the-raspberry-pi-2/)
* [2025-05-24, 11:43:52](https://lobste.rs/s/ggrjtg/sandboxing_ai_tools_with_guix_containers) - [Sandboxing AI Tools with Guix Containers](https://200ok.ch/posts/2025-05-23_sandboxing_ai_tools:_how_guix_containers_keep_your_host_safe_while_empowering_llms.html)
* [2025-05-24, 08:20:00](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss) - [In Lawsuit Over Teen&apos;s Death, Judge Rejects Arguments That AI Chatbots Have Free Speech Rights](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss)
* [2025-05-24, 07:04:22](https://lobste.rs/s/r1co0s/why_i_no_longer_have_old_school_cert_on_my) - [Why I no longer have an old-school cert on my https site](https://rachelbythebay.com/w/2025/05/22/ssl/)
* [2025-05-24, 03:36:00](https://soylentnews.org/article.pl?sid=25/05/23/128247&amp;from=rss) - [TSMC&apos;s US Factory Shows the Limits of Reshoring and Tariffs](https://soylentnews.org/article.pl?sid=25/05/23/128247&amp;from=rss)
* [2025-05-23, 22:49:00](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss) - [High Priority Exploits Fixed in Firefox and Chrome](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss)
* [2025-05-23, 18:00:00](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss) - [A Nasa Mars Rover Looked Up At A Moody Sky. What It Saw Wasn&apos;t A Star. ](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss)
* [2025-05-23, 13:56:36](https://news.ycombinator.com/item?id=44072929) - [Show HN: Open-source protein and ligand viewer](https://github.com/David-OConnor/daedalus)
* [2025-05-23, 13:17:00](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss) - [The US Has a New Most-Powerful Laser](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss)
* [2025-05-23, 12:14:22](https://news.ycombinator.com/item?id=44072137) - [Now you can watch the Internet Archive preserve documents in real time](https://www.theverge.com/news/672682/internet-archive-microfiche-lo-fi-beats-channel)
* [2025-05-23, 11:15:01](https://news.ycombinator.com/item?id=44071769) - [Graduate Student Solves Classic Problem About the Limits of Addition](https://www.quantamagazine.org/graduate-student-solves-classic-problem-about-the-limits-of-addition-20250522/)
* [2025-05-23, 08:32:00](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss) - [Police Secretly Monitored New Orleans With Facial Recognition Cameras](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss)
* [2025-05-23, 03:45:00](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss) - [UK Farmers Pray For Rain Amid Driest Spring Since 1852](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss)
* [2025-05-22, 23:06:00](https://soylentnews.org/article.pl?sid=25/05/22/012214&amp;from=rss) - [A Look at OpenAI From 2019](https://soylentnews.org/article.pl?sid=25/05/22/012214&amp;from=rss)
* [2025-05-22, 23:05:57](https://news.ycombinator.com/item?id=44068119) - [Hydra: Vehicles on the island – &apos;After the works they abandon them here&apos;](https://en.protothema.gr/2025/05/19/hydra-see-photos-of-vehicles-on-the-island-after-the-works-they-abandon-them-here-say-residents/)
* [2025-05-22, 22:11:52](https://news.ycombinator.com/item?id=44067711) - [Contacts let you see in the dark with your eyes closed](https://scitechdaily.com/from-sci-fi-to-superpower-these-contacts-let-you-see-in-the-dark-with-your-eyes-closed/)
* [2025-05-22, 18:20:00](https://soylentnews.org/article.pl?sid=25/05/22/0059205&amp;from=rss) - [Bill Tries to End Supersonic Speed Limits in the US Skies](https://soylentnews.org/article.pl?sid=25/05/22/0059205&amp;from=rss)
* [2025-05-22, 13:35:00](https://soylentnews.org/article.pl?sid=25/05/21/1543207&amp;from=rss) - [Chicago Sun-Times Prints Summer Reading List Full of Fake Books](https://soylentnews.org/article.pl?sid=25/05/21/1543207&amp;from=rss)
* [2025-05-22, 08:42:00](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss) - [Italy Fines Thousands as Crackdown on Pirate IPTV Targets Viewers](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss)
* [2025-05-22, 03:59:00](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss) - [Laser-Powered Fusion Experiment More Than Doubles its Power Output](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss)
* [2025-05-21, 23:11:00](https://soylentnews.org/article.pl?sid=25/05/21/127244&amp;from=rss) - [Opinion: Unending Ransomware Attacks Are a Symptom, Not the Illness](https://soylentnews.org/article.pl?sid=25/05/21/127244&amp;from=rss)
* [2025-05-21, 18:29:00](https://soylentnews.org/article.pl?sid=25/05/21/1154206&amp;from=rss) - [\&quot;Big Surprise\&quot;: Astronomers Find Planet in Perpendicular Orbit Around Pair of Stars](https://soylentnews.org/article.pl?sid=25/05/21/1154206&amp;from=rss)
* [2025-05-21, 13:42:00](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss) - [Annual Tech Waste Footprint Per Person is 11.2 Kg](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss)
* [2025-05-21, 11:27:21](https://news.ycombinator.com/item?id=44050295) - [Space is not a wall: toward a less architectural level design](https://www.blog.radiator.debacle.us/2025/05/space-is-not-wall-toward-less.html)
* [2025-05-21, 08:58:00](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss) - [Apple is Developing Tech So Users Can Control Devices With Only Their Thoughts](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss)
* [2025-05-21, 07:57:59](https://news.ycombinator.com/item?id=44049282) - [An Almost Pointless Exercise in GPU Optimization](https://blog.speechmatics.com/pointless-gpu-optimization-exercise)
* [2025-05-21, 04:14:00](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss) - [AWS Claims That Britain Needs More Nuclear Power for AI Datacenters](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss)
