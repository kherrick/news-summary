# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Programming Innovations

* [plwm: An X11 window manager written in Prolog](https://github.com/Seeker04/plwm) - A unique implementation of an X11 window manager using Prolog, showcasing programming innovation. [Comments](https://lobste.rs/s/jovc75/plwm_x11_window_manager_written_prolog)

* [Show HN: DaedalOS – Desktop Environment in the Browser](https://github.com/DustinBrett/daedalOS) - A project recreating a desktop environment entirely within a web browser. [Comments](https://news.ycombinator.com/item?id=44088777)

* [Writing your own CUPS printer driver in 100 lines of Python (2018)](https://behind.pretix.eu/2018/01/20/cups-driver/) - A concise tutorial on creating a CUPS printer driver using Python. [Comments](https://news.ycombinator.com/item?id=44088682)

* [Programming on 34 Keys (2022)](https://oppi.li/posts/programming_on_34_keys/) - An exploration into programming efficiency with a minimal keyboard setup. [Comments](https://lobste.rs/s/qcjjqo/programming_on_34_keys_2022)

## Artificial Intelligence and Machine Learning

* [AI Hallucination Cases Database](https://www.damiencharlotin.com/hallucinations/) - A curated resource documenting cases of AI hallucinations, offering insights into neural network limitations. [Comments](https://news.ycombinator.com/item?id=44088772)

* [Claude 4 System Card](https://simonwillison.net/2025/May/25/claude-4-system-card/) - Discussion around Claude 4's capabilities and its emergent behaviors in AI systems. [Comments](https://news.ycombinator.com/item?id=44085920)

## Policy and Ethics in Technology

* [Does the World Need Publicly-Owned Social Networks?](https://yro.slashdot.org/story/25/05/25/175204/does-the-world-need-publicly-owned-social-networks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Investigating the feasibility and need for government-managed social networks. [Comments](https://yro.slashdot.org/story/25/05/25/175204/does-the-world-need-publicly-owned-social-networks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [In Lawsuit Over Teen's Death, Judge Rejects Arguments That AI Chatbots Have Free Speech Rights](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss) - A legal milestone addressing AI accountability in wrongful death cases. [Comments](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss)

## Science Discoveries and Environmental Concerns

* ['Strange metals' point to a whole new way to understand electricity](https://www.science.org/content/article/strange-metals-point-whole-new-way-understand-electricity) - Research into 'strange metals' that could reshape our understanding of electrical conductivity. [Comments](https://news.ycombinator.com/item?id=44087916)

* [Researchers Warn Some Infectious Fungus Could Spread as Earth's Temperatures Rise](https://science.slashdot.org/story/25/05/24/2145226/researchers-warn-some-infectious-fungus-could-spread-as-earths-temperatures-rise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A study highlighting potential health hazards linked to climate change. [Comments](https://news.ycombinator.com/item?id=44088926)

## Historical Insights and Reassessments

* [The Roman Massacre That Never Happened](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss) - Revisiting a purported Roman massacre and its implications for historical scholarship. [Comments](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss)

* [The USSR Once Tried Reversing a River's Direction with 'Peaceful Nuclear Explosions'](https://hardware.slashdot.org/story/25/05/25/0040259/the-ussr-once-tried-reversing-a-rivers-direction-with-peaceful-nuclear-explosions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A look into experimental Cold War-era geoengineering projects. [Comments](https://hardware.slashdot.org/story/25/05/25/0040259/the-ussr-once-tried-reversing-a-rivers-direction-with-peaceful-nuclear-explosions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-05-25, 18:52:44](https://lobste.rs/s/jovc75/plwm_x11_window_manager_written_prolog) - [plwm: An X11 window manager written in Prolog](https://github.com/Seeker04/plwm)
* [2025-05-25, 17:41:11](https://news.ycombinator.com/item?id=44089424) - [Plwm – An X11 window manager written in Prolog](https://github.com/Seeker04/plwm)
* [2025-05-25, 17:34:00](https://yro.slashdot.org/story/25/05/25/175204/does-the-world-need-publicly-owned-social-networks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Does the World Need Publicly-Owned Social Networks?](https://yro.slashdot.org/story/25/05/25/175204/does-the-world-need-publicly-owned-social-networks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-25, 17:06:55](https://news.ycombinator.com/item?id=44089150) - [Path to a free self-taught education in Computer Science](https://github.com/ossu/computer-science)
* [2025-05-25, 17:04:54](https://news.ycombinator.com/item?id=44089134) - [The Newark airport crisis is about to become everyone&apos;s problem](https://www.theverge.com/planes/673462/newark-airport-delay-air-traffic-control-tracon-radar)
* [2025-05-25, 17:00:38](https://news.ycombinator.com/item?id=44089108) - [Martin (YC S23) Is Hiring Founding AI/Product Engineers to Build a Better Siri](https://www.ycombinator.com/companies/martin/jobs)
* [2025-05-25, 17:00:26](https://news.ycombinator.com/item?id=44089106) - [Writing a Self-Mutating x86_64 C Program (2013)](https://ephemeral.cx/2013/12/writing-a-self-mutating-x86_64-c-program/)
* [2025-05-25, 16:52:14](https://news.ycombinator.com/item?id=44089054) - [Show HN: Zli – A Batteries-Included CLI Framework for Zig](https://github.com/xcaeser/zli)
* [2025-05-25, 16:34:28](https://news.ycombinator.com/item?id=44088957) - [Denmark to raise retirement age to 70](https://www.telegraph.co.uk/world-news/2025/05/23/denmark-raise-retirement-age-70/)
* [2025-05-25, 16:34:00](https://science.slashdot.org/story/25/05/24/2145226/researchers-warn-some-infectious-fungus-could-spread-as-earths-temperatures-rise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Warn Some Infectious Fungus Could Spread as Earth&apos;s Temperatures Rise](https://science.slashdot.org/story/25/05/24/2145226/researchers-warn-some-infectious-fungus-could-spread-as-earths-temperatures-rise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-25, 16:28:58](https://news.ycombinator.com/item?id=44088926) - [Can a Corporation Be Pardoned?](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5202339)
* [2025-05-25, 16:25:00](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss) - [The Roman Massacre That Never Happened](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss)
* [2025-05-25, 16:06:12](https://news.ycombinator.com/item?id=44088777) - [Show HN: DaedalOS – Desktop Environment in the Browser](https://github.com/DustinBrett/daedalOS)
* [2025-05-25, 16:05:10](https://news.ycombinator.com/item?id=44088772) - [AI Hallucination Cases Database](https://www.damiencharlotin.com/hallucinations/)
* [2025-05-25, 15:52:48](https://news.ycombinator.com/item?id=44088682) - [Writing your own CUPS printer driver in 100 lines of Python (2018)](https://behind.pretix.eu/2018/01/20/cups-driver/)
* [2025-05-25, 15:51:04](https://lobste.rs/s/9wauzr/writing_your_own_cups_printer_driver_100) - [Writing your own CUPS printer driver in 100 lines of Python](https://behind.pretix.eu/2018/01/20/cups-driver/)
* [2025-05-25, 15:46:56](https://news.ycombinator.com/item?id=44088644) - [Why top posting has won (2018)](https://www.solipsys.co.uk/new/WhyTopPostingHasWon.html?ye25hn)
* [2025-05-25, 15:34:00](https://news.slashdot.org/story/25/05/24/173222/serenityos-creator-is-building-an-independent-standards-first-browser-called-ladybird?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SerenityOS Creator Is Building an Independent, Standards-First Browser Called &apos;Ladybird&apos;](https://news.slashdot.org/story/25/05/24/173222/serenityos-creator-is-building-an-independent-standards-first-browser-called-ladybird?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-25, 15:28:55](https://news.ycombinator.com/item?id=44088513) - [Drawing power out of CCS port](https://openinverter.org/forum/viewtopic.php?t=3551)
* [2025-05-25, 15:24:42](https://news.ycombinator.com/item?id=44088482) - [Authors Are Accidentally Leaving AI Prompts in Their Novels](https://www.404media.co/authors-are-accidentally-leaving-ai-prompts-in-their-novels/)
* [2025-05-25, 15:10:00](https://news.ycombinator.com/item?id=44088392) - [Implementing complex numbers and FFT with just datatypes (2023)](https://gist.github.com/VictorTaelin/5776ede998d0039ad1cc9b12fd96811c)
* [2025-05-25, 14:49:46](https://news.ycombinator.com/item?id=44088248) - [Show HN: Wall Go – browser remake of a Devil&apos;s Plan 2 mini-game](https://schaoss.github.io/wall-go/)
* [2025-05-25, 14:45:47](https://news.ycombinator.com/item?id=44088216) - [Lottie is an open format for animated vector graphics](https://lottie.github.io/)
* [2025-05-25, 14:34:00](https://hardware.slashdot.org/story/25/05/25/0618250/will-gms-bet-on-battery-tech-jumpstart-the-transition-to-electric-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will GM&apos;s Bet on Battery Tech Jumpstart the Transition to Electric Cars?](https://hardware.slashdot.org/story/25/05/25/0618250/will-gms-bet-on-battery-tech-jumpstart-the-transition-to-electric-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-25, 14:02:19](https://news.ycombinator.com/item?id=44087916) - [&apos;Strange metals&apos; point to a whole new way to understand electricity](https://www.science.org/content/article/strange-metals-point-whole-new-way-understand-electricity)
* [2025-05-25, 13:51:55](https://news.ycombinator.com/item?id=44087844) - [Design Pressure: The Invisible Hand That Shapes Your Code](https://hynek.me/talks/design-pressure/)
* [2025-05-25, 13:22:59](https://lobste.rs/s/ipqjvb/how_guarantee_your_red_team_will_fail) - [How to Guarantee Your Red Team Will Fail](https://0xda.de/garden/guarantee-red-team-failure/)
* [2025-05-25, 12:36:13](https://lobste.rs/s/mkpgoe/on_file_formats) - [On File Formats](https://solhsa.com/oldernews2025.html#ON-FILE-FORMATS)
* [2025-05-25, 12:35:30](https://news.ycombinator.com/item?id=44087373) - [Programming on 34 Keys (2022)](https://oppi.li/posts/programming_on_34_keys/)
* [2025-05-25, 12:33:37](https://lobste.rs/s/qcjjqo/programming_on_34_keys_2022) - [Programming On 34 Keys (2022)](https://oppi.li/posts/programming_on_34_keys/)
* [2025-05-25, 11:56:16](https://news.ycombinator.com/item?id=44087183) - [Wrench Attacks: Physical attacks targeting cryptocurrency users (2024) [pdf]](https://drops.dagstuhl.de/storage/00lipics/lipics-vol316-aft2024/LIPIcs.AFT.2024.24/LIPIcs.AFT.2024.24.pdf)
* [2025-05-25, 11:48:30](https://news.ycombinator.com/item?id=44087150) - [At Amazon, some coders say their jobs have begun to resemble warehouse work](https://www.nytimes.com/2025/05/25/business/amazon-ai-coders.html)
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
* [2025-05-25, 04:34:13](https://lobste.rs/s/dnm7jv/concepts_vs_type_traits) - [Concepts vs type traits](https://akrzemi1.wordpress.com/2025/05/24/concepts-vs-type-traits/)
* [2025-05-25, 04:34:00](https://tech.slashdot.org/story/25/05/25/0347239/duolingo-faces-massive-social-media-backlash-after-ai-first-comments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Duolingo Faces Massive Social Media Backlash After &apos;AI-First&apos; Comments](https://tech.slashdot.org/story/25/05/25/0347239/duolingo-faces-massive-social-media-backlash-after-ai-first-comments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-25, 03:21:07](https://lobste.rs/s/juxpci/goal_embeddable_scripting_array) - [goal - embeddable scripting array language](https://codeberg.org/anaseto/goal)
* [2025-05-25, 02:09:00](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss) - [VPN Service Cancels Customers&apos; Lifetime Subscriptions After Takeover](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss)
* [2025-05-25, 01:43:14](https://lobste.rs/s/ozdlss/hierarchical_hypermedia_world_hyper_g) - [The hierarchical hypermedia world of Hyper-G](http://oldvcr.blogspot.com/2025/05/prior-art-dept-hierarchical-hypermedia.html)
* [2025-05-25, 01:34:54](https://news.ycombinator.com/item?id=44084885) - [How to Install Windows NT 4 Server on Proxmox](https://blog.pipetogrep.org/2025/05/23/how-to-install-windows-nt-4-server-on-proxmox/)
* [2025-05-25, 01:34:00](https://games.slashdot.org/story/25/05/24/2356233/new-doom-the-dark-ages-already-adjusted-to-add-even-more-dangerous-demons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New &apos;Doom: The Dark Ages&apos; Already Adjusted to Add Even More Dangerous Demons](https://games.slashdot.org/story/25/05/24/2356233/new-doom-the-dark-ages-already-adjusted-to-add-even-more-dangerous-demons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-25, 00:04:48](https://lobste.rs/s/6sidoz/domain_theory_lecture_notes) - [Domain Theory Lecture Notes](https://liamoc.net/forest/dt-001Y/index.xml)
* [2025-05-24, 22:34:00](https://tech.slashdot.org/story/25/05/24/1740221/mcp-will-be-built-into-windows-to-make-an-agentic-os---bringing-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MCP Will Be Built Into Windows To Make an &apos;Agentic OS&apos; - Bringing Security Concerns](https://tech.slashdot.org/story/25/05/24/1740221/mcp-will-be-built-into-windows-to-make-an-agentic-os---bringing-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 22:24:00](https://soylentnews.org/article.pl?sid=25/05/23/1731218&amp;from=rss) - [Be A Great Communicator To Progress In Engineering](https://soylentnews.org/article.pl?sid=25/05/23/1731218&amp;from=rss)
* [2025-05-24, 21:34:00](https://entertainment.slashdot.org/story/25/05/24/201246/amazon-cancels-the-wheel-of-time-prime-video-series-after-3-seasons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Cancels the &apos;Wheel of Time&apos; Prime Video Series After 3 Seasons](https://entertainment.slashdot.org/story/25/05/24/201246/amazon-cancels-the-wheel-of-time-prime-video-series-after-3-seasons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 21:29:05](https://news.ycombinator.com/item?id=44083917) - [Why old games never die, but new ones do](https://pleromanonx86.wordpress.com/2025/05/06/why-old-games-never-die-but-new-ones-do/)
* [2025-05-24, 20:52:09](https://lobste.rs/s/2adp0p/there_is_no_diffie_hellman_elliptic_curve) - [There is no Diffie-Hellman but Elliptic Curve Diffie-Hellman](https://keymaterial.net/2025/05/23/there-is-no-diffie-hellman-but-elliptic-curve-diffie-hellman/)
* [2025-05-24, 20:45:00](https://lobste.rs/s/qjol4n/captchas_don_t_work_any_more_for_ticket) - [CAPTCHAs don&apos;t work any more for ticket sellers](https://behind.pretix.eu/2025/05/23/captchas-are-over/)
* [2025-05-24, 20:34:00](https://slashdot.org/story/25/05/24/1946203/people-should-know-about-the-beliefs-llms-form-about-them-while-conversing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [People Should Know About the &apos;Beliefs&apos; LLMs Form About Them While Conversing](https://slashdot.org/story/25/05/24/1946203/people-should-know-about-the-beliefs-llms-form-about-them-while-conversing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 20:05:12](https://news.ycombinator.com/item?id=44083467) - [Reinvent the Wheel](https://endler.dev/2025/reinvent-the-wheel/)
* [2025-05-24, 19:48:07](https://lobste.rs/s/wzishi/tachy0n_last_0day_jailbreak) - [tachy0n: The last 0day jailbreak](https://blog.siguza.net/tachy0n/)
* [2025-05-24, 19:34:00](https://it.slashdot.org/story/25/05/24/0530234/how-many-qubits-will-it-take-to-break-secure-public-key-cryptography-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Many Qubits Will It Take to Break Secure Public Key Cryptography Algorithms?](https://it.slashdot.org/story/25/05/24/0530234/how-many-qubits-will-it-take-to-break-secure-public-key-cryptography-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 19:16:27](https://lobste.rs/s/uvw5lp/how_i_used_o3_find_cve_2025_37899_remote) - [How I used o3 to find CVE-2025-37899, a remote zeroday vulnerability in the Linux kernel’s SMB implementation](https://sean.heelan.io/2025/05/22/how-i-used-o3-to-find-cve-2025-37899-a-remote-zeroday-vulnerability-in-the-linux-kernels-smb-implementation/)
* [2025-05-24, 18:52:16](https://lobste.rs/s/w1k7fr/having_your_compile_time_cake_eating_it) - [Having your compile-time cake and eating it too](https://0x44.xyz/blog/comptime-1)
* [2025-05-24, 18:34:00](https://news.slashdot.org/story/25/05/24/0619227/firefox-creates-a-smarter-simpler-address-bar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Creates &apos;A Smarter, Simpler Address Bar&apos;](https://news.slashdot.org/story/25/05/24/0619227/firefox-creates-a-smarter-simpler-address-bar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 17:54:06](https://lobste.rs/s/worahh/petnames_humane_approach_secure) - [Petnames: A humane approach to secure, decentralized naming](https://files.spritely.institute/papers/petnames.html)
* [2025-05-24, 17:51:49](https://lobste.rs/s/xk3zpc/building_interactive_web_pages_with) - [Building interactive web pages with Guile Hoot](https://spritely.institute/news/building-interactive-web-pages-with-guile-hoot.html)
* [2025-05-24, 17:44:00](https://soylentnews.org/article.pl?sid=25/05/23/1716207&amp;from=rss) - [EU-US Trade War Inevitable](https://soylentnews.org/article.pl?sid=25/05/23/1716207&amp;from=rss)
* [2025-05-24, 17:34:00](https://science.slashdot.org/story/25/05/24/0213237/bird-feeders-have-caused-a-dramatic-evolution-of-california-hummingbirds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bird Feeders Have Caused a Dramatic Evolution of California Hummingbirds](https://science.slashdot.org/story/25/05/24/0213237/bird-feeders-have-caused-a-dramatic-evolution-of-california-hummingbirds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 16:34:00](https://science.slashdot.org/story/25/05/24/0337249/researchers-build-the-worlds-fastest-petahertz-quantum-transistor-they-predict-lightwave-electronics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Build &apos;The World&apos;s Fastest Petahertz Quantum Transistor&apos;. They Predict Lightwave Electronics](https://science.slashdot.org/story/25/05/24/0337249/researchers-build-the-worlds-fastest-petahertz-quantum-transistor-they-predict-lightwave-electronics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 14:49:14](https://lobste.rs/s/o8zujx/gail_ai_powered_github_issue_labeler) - [gail: An AI-powered GitHub Issue Labeler](https://github.com/atgreen/gail)
* [2025-05-24, 13:03:00](https://soylentnews.org/article.pl?sid=25/05/23/1218209&amp;from=rss) - [All Living Things Emit Subtle Light Until They Die, Study Suggests](https://soylentnews.org/article.pl?sid=25/05/23/1218209&amp;from=rss)
* [2025-05-24, 11:43:52](https://lobste.rs/s/ggrjtg/sandboxing_ai_tools_with_guix_containers) - [Sandboxing AI Tools with Guix Containers](https://200ok.ch/posts/2025-05-23_sandboxing_ai_tools:_how_guix_containers_keep_your_host_safe_while_empowering_llms.html)
* [2025-05-24, 08:20:00](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss) - [In Lawsuit Over Teen&apos;s Death, Judge Rejects Arguments That AI Chatbots Have Free Speech Rights](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss)
* [2025-05-24, 07:04:22](https://lobste.rs/s/r1co0s/why_i_no_longer_have_old_school_cert_on_my) - [Why I no longer have an old-school cert on my https site](https://rachelbythebay.com/w/2025/05/22/ssl/)
* [2025-05-24, 03:36:00](https://soylentnews.org/article.pl?sid=25/05/23/128247&amp;from=rss) - [TSMC&apos;s US Factory Shows the Limits of Reshoring and Tariffs](https://soylentnews.org/article.pl?sid=25/05/23/128247&amp;from=rss)
* [2025-05-23, 22:49:00](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss) - [High Priority Exploits Fixed in Firefox and Chrome](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss)
* [2025-05-23, 18:00:00](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss) - [A Nasa Mars Rover Looked Up At A Moody Sky. What It Saw Wasn&apos;t A Star. ](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss)
* [2025-05-23, 13:17:00](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss) - [The US Has a New Most-Powerful Laser](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss)
* [2025-05-23, 12:14:22](https://news.ycombinator.com/item?id=44072137) - [Now you can watch the Internet Archive preserve documents in real time](https://www.theverge.com/news/672682/internet-archive-microfiche-lo-fi-beats-channel)
* [2025-05-23, 11:15:01](https://news.ycombinator.com/item?id=44071769) - [Graduate Student Solves Classic Problem About the Limits of Addition](https://www.quantamagazine.org/graduate-student-solves-classic-problem-about-the-limits-of-addition-20250522/)
* [2025-05-23, 08:32:00](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss) - [Police Secretly Monitored New Orleans With Facial Recognition Cameras](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss)
* [2025-05-23, 03:45:00](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss) - [UK Farmers Pray For Rain Amid Driest Spring Since 1852](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss)
* [2025-05-22, 23:06:00](https://soylentnews.org/article.pl?sid=25/05/22/012214&amp;from=rss) - [A Look at OpenAI From 2019](https://soylentnews.org/article.pl?sid=25/05/22/012214&amp;from=rss)
* [2025-05-22, 18:20:00](https://soylentnews.org/article.pl?sid=25/05/22/0059205&amp;from=rss) - [Bill Tries to End Supersonic Speed Limits in the US Skies](https://soylentnews.org/article.pl?sid=25/05/22/0059205&amp;from=rss)
* [2025-05-22, 13:35:00](https://soylentnews.org/article.pl?sid=25/05/21/1543207&amp;from=rss) - [Chicago Sun-Times Prints Summer Reading List Full of Fake Books](https://soylentnews.org/article.pl?sid=25/05/21/1543207&amp;from=rss)
* [2025-05-22, 08:42:00](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss) - [Italy Fines Thousands as Crackdown on Pirate IPTV Targets Viewers](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss)
* [2025-05-22, 08:31:36](https://news.ycombinator.com/item?id=44059994) - [Lisping at JPL](https://flownet.com/gat/jpl-lisp.html)
* [2025-05-22, 03:59:00](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss) - [Laser-Powered Fusion Experiment More Than Doubles its Power Output](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss)
* [2025-05-21, 23:11:00](https://soylentnews.org/article.pl?sid=25/05/21/127244&amp;from=rss) - [Opinion: Unending Ransomware Attacks Are a Symptom, Not the Illness](https://soylentnews.org/article.pl?sid=25/05/21/127244&amp;from=rss)
* [2025-05-21, 18:29:00](https://soylentnews.org/article.pl?sid=25/05/21/1154206&amp;from=rss) - [\&quot;Big Surprise\&quot;: Astronomers Find Planet in Perpendicular Orbit Around Pair of Stars](https://soylentnews.org/article.pl?sid=25/05/21/1154206&amp;from=rss)
* [2025-05-21, 13:42:00](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss) - [Annual Tech Waste Footprint Per Person is 11.2 Kg](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss)
* [2025-05-21, 08:58:00](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss) - [Apple is Developing Tech So Users Can Control Devices With Only Their Thoughts](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss)
* [2025-05-21, 04:14:00](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss) - [AWS Claims That Britain Needs More Nuclear Power for AI Datacenters](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss)
