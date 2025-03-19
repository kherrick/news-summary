# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Updates

* [Conflict-free Database over Virtual File System](https://www.bartoszsypytkowski.com/conflict-free-database-over-virtual-file-system/) - Exploring the innovative application of a conflict-free replicated database utilizing a virtual file system.

* [GNOME 48 released](https://release.gnome.org/48/) - Announcement of the latest GNOME platform update with new features and tweaks.

* [Red v0.6.6: Memory Management Improvements](https://www.red-lang.org/2025/03/066-memory-management-improvements.html) - Summary of memory management upgrades in the latest version of the Red programming language.

* [Intel 9 285K on ASUS Z890: not stable](https://michael.stapelberg.ch/posts/2025-03-19-intel-core-ultra-9-285k-on-asus-z890-not-stable/) - Tech commentary on the instability issues of Intel's latest processor on a prominent motherboard.

* [Looking Ahead at Intel's Xe3 GPU Architecture](https://chipsandcheese.com/p/looking-ahead-at-intels-xe3-gpu-architecture) - A deep dive into the future plans for Intel's Xe3 graphics architecture.

* [Markprompt (YC W24) – Stripe for customer support – is hiring founding eng in SF](https://markprompt.com/jobs) - A pitch for Markprompt's innovative approach to customer support, modeled after the Stripe API.

## Artificial Intelligence and Robotics

* [AI Blindspots](https://ezyang.github.io/ai-blindspots/) - An analysis of identified shortcomings and limitations in large language models.

* [Nvidia Says 'the Age of Generalist Robotics Is Here'](https://hardware.slashdot.org/story/25/03/18/2312229/nvidia-says-the-age-of-generalist-robotics-is-here?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Nvidia's vision for the next era of versatile robotics capabilities.

* [AI Crawlers Haven't Learned To Play Nice With Websites](https://slashdot.org/story/25/03/19/1027251/ai-crawlers-havent-learned-to-play-nice-with-websites?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Challenges and conflicts faced by AI web crawlers in respecting website rules.

## Space and Science Developments

* [Pierogi in Space](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Pierogi_in_space) - ESA’s fascinating exploration project sending pierogi to space.

* [Muons used to test the condition of a road bridge in Estonia](https://news.err.ee/1609634600/muons-used-to-test-the-condition-of-a-road-bridge-in-estonia) - Highlighting advancements in technology using muons for structural inspections.

## Cultural and Industry Shifts

* [Video game workers in North America now have an industry-wide union](https://www.engadget.com/big-tech/video-game-workers-in-north-america-now-have-an-industry-wide-union-130024730.html) - A historic step towards unionization in the video game industry.

* [The Future of Fauna](https://fauna.com/blog/the-future-of-fauna) - Insights into Fauna's future direction amidst industry changes.

* [Supply constraints do not explain house price, quantity growth across US cities](https://www.nber.org/papers/w33576) - Academic findings challenging commonly held beliefs about housing market dynamics.

## Historic Perspectives and Innovations

* [The Lost Art of Research as Leisure](https://kasurian.com/p/research-as-leisure) - A contemplative piece on the value of leisurely academic research.

* [Bell Labs' Unsung Heros in the History of Computing (2012)](https://dobbse.net/thinair/2012/04/unsung-heros-sigsaly.html) - Celebrating lesser-known contributors to major computing advancements.

* [A Brief, Incomplete, and Mostly Wrong History of Programming Languages (2009)](http://james-iry.blogspot.com/2009/05/brief-incomplete-and-mostly-wrong.html) - A humorous yet critical reflection on the evolution of programming languages.

* [Copyright and the demoscene](https://www.datagubbe.se/scenecop/) - Discusses copyright's influence on the vibrant digital art subculture of the demoscene.

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

* [2025-03-19, 21:18:07](https://lobste.rs/s/pxgyte/conflict_free_database_over_virtual_file) - [Conflict-free Database over Virtual File System](https://www.bartoszsypytkowski.com/conflict-free-database-over-virtual-file-system/)
* [2025-03-19, 21:00:00](https://tech.slashdot.org/story/25/03/19/201211/pci-express-70s-blazing-speeds-are-nearly-here-but-pcie-6-is-still-vapor?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [PCI Express 7.0's Blazing Speeds Are Nearly Here, But PCIe 6 is Still Vapor](https://tech.slashdot.org/story/25/03/19/201211/pci-express-70s-blazing-speeds-are-nearly-here-but-pcie-6-is-still-vapor?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 20:39:58](https://lobste.rs/s/0h4nyk/ai_blindspots) - [AI Blindspots](https://ezyang.github.io/ai-blindspots/)
* [2025-03-19, 20:31:13](https://news.ycombinator.com/item?id=43416961) - [Looking Ahead at Intel's Xe3 GPU Architecture](https://chipsandcheese.com/p/looking-ahead-at-intels-xe3-gpu-architecture)
* [2025-03-19, 20:00:00](https://entertainment.slashdot.org/story/25/03/19/1928245/plex-raises-premium-subscription-prices-for-first-time-in-decade?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Plex Raises Premium Subscription Prices for First Time in Decade](https://entertainment.slashdot.org/story/25/03/19/1928245/plex-raises-premium-subscription-prices-for-first-time-in-decade?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 19:54:08](https://news.ycombinator.com/item?id=43416558) - [Control your attention on the web – Block sites on certain days and times](https://github.com/Bsodoge/Focus-Mode)
* [2025-03-19, 19:43:58](https://news.ycombinator.com/item?id=43416481) - [Scoping a Local-First Image Archive](https://www.scottishstoater.com/2025/03/scoping-a-local-first-image-archive/)
* [2025-03-19, 19:36:11](https://news.ycombinator.com/item?id=43416400) - [ByteCraft: Generating video games and animations through bytes](https://emygervais.github.io/2025/03/15/bytecraft.html)
* [2025-03-19, 19:26:03](https://news.ycombinator.com/item?id=43416302) - [Pierogi in Space](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Pierogi_in_space)
* [2025-03-19, 19:11:32](https://lobste.rs/s/gm6ggq/note_c_standards_committee_members_on) - [Note to the C++ standards committee members on profiles and safety](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3651r0.pdf)
* [2025-03-19, 18:58:00](https://apple.slashdot.org/story/25/03/19/1857241/eu-orders-apple-to-open-ecosystem-to-rivals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [EU Orders Apple To Open Ecosystem To Rivals](https://apple.slashdot.org/story/25/03/19/1857241/eu-orders-apple-to-open-ecosystem-to-rivals?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 18:32:21](https://lobste.rs/s/1pyypm/gnome_48_released) - [GNOME 48 released](https://release.gnome.org/48/)
* [2025-03-19, 18:27:26](https://lobste.rs/s/tohxky/future_fauna) - [The Future of Fauna](https://fauna.com/blog/the-future-of-fauna)
* [2025-03-19, 18:14:14](https://news.ycombinator.com/item?id=43415477) - [Notebooks as reusable Python programs](https://marimo.io/blog/python-not-json)
* [2025-03-19, 17:34:43](https://news.ycombinator.com/item?id=43414992) - [The Collective Ambition Behind Odysseus, a Game-Changing Sci-Fi Larp](https://mssv.net/2025/03/19/the-collective-ambition-behind-odysseus-a-game-changing-sci-fi-larp/)
* [2025-03-19, 17:29:00](https://soylentnews.org/article.pl?sid=25/03/18/1610234&from=rss) - [U.S. Atari Parts Store Still Open After 41 Years, Has Spent $100K+ Designing New Parts](https://soylentnews.org/article.pl?sid=25/03/18/1610234&from=rss)
* [2025-03-19, 17:25:00](https://slashdot.org/story/25/03/19/1027251/ai-crawlers-havent-learned-to-play-nice-with-websites?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Crawlers Haven't Learned To Play Nice With Websites](https://slashdot.org/story/25/03/19/1027251/ai-crawlers-havent-learned-to-play-nice-with-websites?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 17:20:03](https://lobste.rs/s/ezweb7/intel_9_285k_on_asus_z890_not_stable) - [Intel 9 285K on ASUS Z890: not stable](https://michael.stapelberg.ch/posts/2025-03-19-intel-core-ultra-9-285k-on-asus-z890-not-stable/)
* [2025-03-19, 17:17:04](https://news.ycombinator.com/item?id=43414742) - [Fauna Service Winding Down](https://fauna.com/blog/the-future-of-fauna)
* [2025-03-19, 17:00:13](https://news.ycombinator.com/item?id=43414527) - [Markprompt (YC W24) – Stripe for customer support – is hiring founding eng in SF](https://markprompt.com/jobs)
* [2025-03-19, 17:00:00](https://news.slashdot.org/story/25/03/19/1022245/more-than-150-unprecedented-climate-disasters-struck-world-in-2024-says-un?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [More Than 150 'Unprecedented' Climate Disasters Struck World in 2024, Says UN](https://news.slashdot.org/story/25/03/19/1022245/more-than-150-unprecedented-climate-disasters-struck-world-in-2024-says-un?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 16:50:05](https://news.ycombinator.com/item?id=43414405) - [Launch HN: Modernbanc (YC W20) – Modern and fast accounting software](https://news.ycombinator.com/item?id=43414405)
* [2025-03-19, 16:48:32](https://news.ycombinator.com/item?id=43414393) - [AI Blindspots – Blindspots in LLMs I've noticed while AI coding](https://ezyang.github.io/ai-blindspots/)
* [2025-03-19, 16:34:45](https://news.ycombinator.com/item?id=43414235) - [Fine-tune Google's Gemma 3](https://unsloth.ai/blog/gemma3)
* [2025-03-19, 16:26:55](https://lobste.rs/s/d1eytn/red_v0_6_6_memory_management_improvements) - [Red v0.6.6: Memory Management Improvements](https://www.red-lang.org/2025/03/066-memory-management-improvements.html)
* [2025-03-19, 16:13:20](https://news.ycombinator.com/item?id=43413935) - [How fast the days are getting longer](https://joe-antognini.github.io/astronomy/daylight)
* [2025-03-19, 16:10:23](https://lobste.rs/s/re1anu/memory_safety_for_web_fonts) - [Memory safety for web fonts](https://developer.chrome.com/blog/memory-safety-fonts)
* [2025-03-19, 16:00:00](https://yro.slashdot.org/story/25/03/19/0927253/fedex-data-scraping-and-telecom-insider-bribes-powered-nationwide-iphone-theft-operation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FedEx Data Scraping and Telecom Insider Bribes Powered Nationwide iPhone Theft Operation](https://yro.slashdot.org/story/25/03/19/0927253/fedex-data-scraping-and-telecom-insider-bribes-powered-nationwide-iphone-theft-operation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 15:59:12](https://lobste.rs/s/mg1khc/does_unsafe_undermine_rust_s_guarantees) - [Does unsafe undermine Rust's guarantees?](https://steveklabnik.com/writing/does-unsafe-undermine-rusts-guarantees/)
* [2025-03-19, 15:40:35](https://news.ycombinator.com/item?id=43413478) - [The Business of Phish (2013)](https://priceonomics.com/business-of-phish/)
* [2025-03-19, 15:16:48](https://news.ycombinator.com/item?id=43413125) - [Memory safety for web fonts](https://developer.chrome.com/blog/memory-safety-fonts)
* [2025-03-19, 15:02:36](https://lobste.rs/s/fcepiv/macos_blog_post_ft_hackintosh) - [The macOS Blog Post (ft. Hackintosh)](https://lilysthings.org/blog/the-macos-blog-post/)
* [2025-03-19, 15:00:00](https://slashdot.org/story/25/03/19/088253/microsoft-quantum-computing-claim-still-lacks-evidence?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Quantum Computing Claim Still Lacks Evidence](https://slashdot.org/story/25/03/19/088253/microsoft-quantum-computing-claim-still-lacks-evidence?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 14:10:40](https://lobste.rs/s/1hexlm/no_longer_my_favorite_git_commit) - [No Longer My Favorite Git Commit](https://mtlynch.io/no-longer-my-favorite-git-commit/)
* [2025-03-19, 14:10:33](https://lobste.rs/s/ql2ohv/weird_sometimes_useful_charts) - [Weird but (sometimes) useful charts](https://xeno.graphics/)
* [2025-03-19, 14:00:00](https://entertainment.slashdot.org/story/25/03/19/0743248/sony-unveils-rgb-led-backlight-tech-that-outperforms-traditional-mini-led?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sony Unveils RGB LED Backlight Tech That Outperforms Traditional Mini LED](https://entertainment.slashdot.org/story/25/03/19/0743248/sony-unveils-rgb-led-backlight-tech-that-outperforms-traditional-mini-led?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 13:47:02](https://news.ycombinator.com/item?id=43411934) - [Video game workers in North America now have an industry-wide union](https://www.engadget.com/big-tech/video-game-workers-in-north-america-now-have-an-industry-wide-union-130024730.html)
* [2025-03-19, 13:44:25](https://news.ycombinator.com/item?id=43411898) - [The clustering behavior of sliding windows](https://arxiv.org/abs/2503.14393)
* [2025-03-19, 13:33:49](https://news.ycombinator.com/item?id=43411755) - [Ikemen-GO: open-source reimplementation of MUGEN](https://github.com/ikemen-engine/Ikemen-GO)
* [2025-03-19, 13:00:00](https://slashdot.org/story/25/03/18/2321249/five-charged-in-european-parliament-huawei-bribery-probe?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Five Charged In European Parliament Huawei Bribery Probe](https://slashdot.org/story/25/03/18/2321249/five-charged-in-european-parliament-huawei-bribery-probe?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 12:56:46](https://lobste.rs/s/ptsvae/how_speed_up_rust_compiler_march_2025) - [How to speed up the Rust compiler in March 2025](https://nnethercote.github.io/2025/03/19/how-to-speed-up-the-rust-compiler-in-march-2025.html)
* [2025-03-19, 12:56:03](https://news.ycombinator.com/item?id=43411258) - [Supply constraints do not explain house price, quantity growth across US cities](https://www.nber.org/papers/w33576)
* [2025-03-19, 12:46:00](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss) - [Discord Launches SDK to Help Developers Enhance Social Experiences in Their Games](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss)
* [2025-03-19, 12:30:48](https://news.ycombinator.com/item?id=43410988) - [Konva.js - Declarative 2D Canvas for React, Vue, and Svelte](https://konvajs.org/)
* [2025-03-19, 12:24:55](https://lobste.rs/s/j61hod/search_next_great_programming_language) - [In Search of the Next Great Programming Language](https://git.sr.ht/~robheghan/glogg/tree/main/item/docs/motivation.md)
* [2025-03-19, 12:16:06](https://news.ycombinator.com/item?id=43410885) - [The Origin of the Pork Taboo](https://archaeology.org/issues/march-april-2025/letters-from/on-the-origin-of-the-pork-taboo/)
* [2025-03-19, 11:44:17](https://news.ycombinator.com/item?id=43410692) - [fd: A simple, fast and user-friendly alternative to 'find'](https://github.com/sharkdp/fd)
* [2025-03-19, 10:09:15](https://news.ycombinator.com/item?id=43410061) - [The Lost Art of Research as Leisure](https://kasurian.com/p/research-as-leisure)
* [2025-03-19, 10:02:57](https://lobste.rs/s/5scnsn/bell_labs_unsung_heros_history_computing) - [Bell Labs' Unsung Heros in the History of Computing (2012)](https://dobbse.net/thinair/2012/04/unsung-heros-sigsaly.html)
* [2025-03-19, 10:00:00](https://yro.slashdot.org/story/25/03/18/2047251/the-effect-of-application-fees-on-entry-into-patenting?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Effect of Application Fees on Entry into Patenting](https://yro.slashdot.org/story/25/03/18/2047251/the-effect-of-application-fees-on-entry-into-patenting?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 09:35:03](https://lobste.rs/s/xttfur/language_interop_extensible_compiler) - [Language interop and the extensible compiler](https://smallcultfollowing.com/babysteps/blog/2025/03/18/lang-interop-extensibility/)
* [2025-03-19, 08:17:57](https://lobste.rs/s/ziolhm/brief_incomplete_mostly_wrong_history) - [A Brief, Incomplete, and Mostly Wrong History of Programming Languages (2009)](http://james-iry.blogspot.com/2009/05/brief-incomplete-and-mostly-wrong.html)
* [2025-03-19, 08:02:00](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss) - [Iguanas Floated One-Fifth of the Way Around the World to Colonize Fiji, Genetic Analysis Indicates](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss)
* [2025-03-19, 07:20:06](https://lobste.rs/s/dnsezi/asahi_lina_pausing_work_on_apple_gpu_linux) - [Asahi Lina Pausing Work On Apple GPU Linux Driver Development](https://www.phoronix.com/news/Asahi-Lina-Steps-Down-Linux-GPU)
* [2025-03-19, 07:14:12](https://lobste.rs/s/ugwn0j/failing_upwards_twitter_encrypted_dm) - [Failing upwards: the Twitter encrypted DM failure](https://mjg59.dreamwidth.org/71188.html)
* [2025-03-19, 07:13:23](https://news.ycombinator.com/item?id=43409028) - [The Internet Slum: is abandoning the Internet the next big thing? (2004)](https://www.fourmilab.ch/documents/netslum/)
* [2025-03-19, 07:00:00](https://hardware.slashdot.org/story/25/03/18/2312229/nvidia-says-the-age-of-generalist-robotics-is-here?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia Says 'the Age of Generalist Robotics Is Here'](https://hardware.slashdot.org/story/25/03/18/2312229/nvidia-says-the-age-of-generalist-robotics-is-here?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 05:01:36](https://lobste.rs/s/ki7hmf/comptime_zig_orm) - [Comptime Zig ORM](https://matklad.github.io/2025/03/19/comptime-zig-orm.html)
* [2025-03-19, 03:30:00](https://science.slashdot.org/story/25/03/18/2243230/researchers-engineer-bacteria-to-produce-plastics?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Researchers Engineer Bacteria To Produce Plastics](https://science.slashdot.org/story/25/03/18/2243230/researchers-engineer-bacteria-to-produce-plastics?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 03:18:00](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss) - [Everything You Say to Your Echo Will be Sent to Amazon Starting on March 28](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss)
* [2025-03-19, 02:22:05](https://lobste.rs/s/jlm5ug/copyright_demoscene) - [Copyright and the demoscene](https://www.datagubbe.se/scenecop/)
* [2025-03-19, 02:02:00](https://news.slashdot.org/story/25/03/18/2231255/italian-newspaper-says-it-has-published-worlds-first-ai-generated-edition?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Italian Newspaper Says It Has Published World's First AI-Generated Edition](https://news.slashdot.org/story/25/03/18/2231255/italian-newspaper-says-it-has-published-worlds-first-ai-generated-edition?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 01:25:00](https://it.slashdot.org/story/25/03/18/2226205/microsoft-isnt-fixing-8-year-old-shortcut-exploit-abused-for-spying?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Isn't Fixing 8-Year-Old Shortcut Exploit Abused For Spying](https://it.slashdot.org/story/25/03/18/2226205/microsoft-isnt-fixing-8-year-old-shortcut-exploit-abused-for-spying?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 00:45:00](https://mobile.slashdot.org/story/25/03/18/2220249/gavin-newsom-is-reportedly-sending-burner-phones-to-tech-ceos?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Gavin Newsom Is Reportedly Sending Burner Phones To Tech CEOs](https://mobile.slashdot.org/story/25/03/18/2220249/gavin-newsom-is-reportedly-sending-burner-phones-to-tech-ceos?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 22:33:00](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss) - [People are Using Google's New AI Model to Remove Watermarks From Images](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss)
* [2025-03-18, 22:05:26](https://lobste.rs/s/vuvvku/announcing_fedora_linux_42_beta) - [Announcing Fedora Linux 42 Beta](https://fedoramagazine.org/announcing-fedora-linux-42-beta/)
* [2025-03-18, 20:08:05](https://lobste.rs/s/dhfjyu/introducing_two_new_pebbleos_watches) - [Introducing two new PebbleOS watches](https://ericmigi.com/blog/introducing-two-new-pebbleos-watches)
* [2025-03-18, 17:49:00](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss) - [Unearthed Notebooks Shed Light on Victorian Genius Who Inspired Einstein](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss)
* [2025-03-18, 13:07:00](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss) - [On the Road to Idiocracy](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss)
* [2025-03-18, 10:26:48](https://lobste.rs/s/otthd0/society_lost_focus) - [A Society That Lost Focus](https://ploum.net/2024-03-18-lost-focus.html)
* [2025-03-18, 10:07:21](https://lobste.rs/s/0sf074/why_i_m_no_longer_talking_architects_about) - [Why I'm No Longer Talking to Architects About Microservices](https://blog.container-solutions.com/why-im-no-longer-talking-to-architects-about-microservices)
* [2025-03-18, 08:24:00](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss) - [Forget Windows 11, SteamOS for Desktops May be Released Soon](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss)
* [2025-03-18, 03:38:00](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss) - [Chaos in Gravity - the Quantum Based Magnetic Monopole of Mass?](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss)
* [2025-03-17, 22:53:00](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss) - [OpenAI Wants All The Data And For US Law To Apply Everywhere](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss)
* [2025-03-17, 21:35:37](https://news.ycombinator.com/item?id=43392951) - [Show HN: Learn where countries are on the world map with Spaced Repetition](https://map.koljapluemer.com)
* [2025-03-17, 18:11:00](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss) - [Six Weeks of CloudFlare Stalling; Still Blocking Niche Browsers](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss)
* [2025-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss) - [NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss)
* [2025-03-17, 08:36:00](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss) - [World's Smallest Microcontroller](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss)
* [2025-03-17, 03:50:00](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss) - [ESA Cuts the Ribbon at 34,000-Core HPC Center](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss)
* [2025-03-16, 23:07:00](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss) - [A New Age for Geothermal](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss)
* [2025-03-16, 18:20:00](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss) - [Apple Encrypted Data Row Case Begins in Secret](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss)
* [2025-03-16, 14:20:13](https://news.ycombinator.com/item?id=43379265) - [The Defer Technical Specification: It Is Time](https://thephd.dev/c2y-the-defer-technical-specification-its-time-go-go-go)
* [2025-03-16, 13:34:00](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss) - [5 Years After Covid-19 Became a Pandemic, Are We Ready for What's Next?](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss)
* [2025-03-16, 12:44:11](https://news.ycombinator.com/item?id=43378587) - [How I got 100% off my train travel](https://readbunce.com/p/how-i-got-100-off-my-train-travel)
* [2025-03-16, 12:05:53](https://news.ycombinator.com/item?id=43378358) - [Muons used to test the condition of a road bridge in Estonia](https://news.err.ee/1609634600/muons-used-to-test-the-condition-of-a-road-bridge-in-estonia)
* [2025-03-16, 08:46:00](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss) - [Sidewinder Advanced Persistent Threat (APT) Shifts to Targeting of Nuclear, Maritime Orgs](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss)
* [2025-03-16, 04:01:00](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss) - [SpaceX Launches Astronauts for Long-Awaited International Space Station Crew Swap](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss)
* [2025-03-16, 03:32:04](https://news.ycombinator.com/item?id=43376769) - [Decoding JSON sum types in Go without panicking](https://nicolashery.com/decoding-json-sum-types-in-go/)
* [2025-03-15, 23:17:00](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss) - [No Project is an Island: Why You Need SBOMs and Dependency Management](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss)
* [2025-03-15, 18:33:00](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss) - [How a Rapidly Growing Population of Crocs Has Been Impacting Northern Territories Ecosystem](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss)
* [2025-03-15, 13:48:00](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss) - [Judge Calls Doge Firings A \"Sham\", Orders Thousands Of Workers To Be Reinstated Immediately](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss)
* [2025-03-15, 09:07:00](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss) - [Bad News for Low Orbit Satellites: Earth's Thermosphere is Shrinking](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss)
* [2025-03-15, 04:22:00](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss) - [AMD's Zen 6-Based Desktop Processors May Feature Up to 24 Cores](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss)
