# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Robotics Developments

* [Trump Administration Bans New Chinese Humanoid Robots](https://hardware.slashdot.org/story/26/07/29/0441240/trump-administration-bans-new-chinese-humanoid-robots?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The U.S. government has moved to block the import of new Chinese humanoid robots, citing security concerns and intensifying trade tensions.

* [Transformer Transformer: A Unified Model for Motion-Conditioned Robot Co-Design](https://transformer-transformer.github.io/) - A transformative unified model is presented for developing motion-conditioned robotic designs, showcasing advancements in co-design.

* [LearnVector – Andrew Ng's AI company building one‑to‑one learning experiences](https://learnvector.ai/) - Andrew Ng's AI firm aims to create personalized learning platforms, featuring advanced AI-tutored educational technology.

* [Personalized AI Tutoring: LearnVector Aims for Tailored Knowledge](https://learnvector.ai/) - Andrew Ng explores futuristic one-on-one learning experiences through advanced AI capabilities.

## Privacy and Security Issues

* [Activist Charged With Felony After Giving Border Agent “Duress Code” That Wiped His Phone](https://soylentnews.org/article.pl?sid=26/07/28/1933258&from=rss) - Legal implications arise as an activist faces charges for activating a phone-wiping code during a border interaction.

* [GrapheneOS Defends Data-Wiping Function That Blocked US Border Search](https://yro.slashdot.org/story/26/07/28/1652243/grapheneos-defends-data-wiping-function-that-blocked-us-border-search?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Privacy-focused OS justifies its built-in security feature that erases data under pressure, emphasizing users’ rights and encryption.

## Innovations in Software and Development

* [Writing Toy Software Is A Joy (2025)](https://blog.jsbarretto.com/post/software-is-joy) - A reflective take on the joys of creating fun, experimental software projects.

* [Manganin: tools matter](https://blog.manganin.dev/blog/tools-matter/) - Explores the importance of using the right tools in software development and their impact on productivity.

* [State of multi-player Wayland](https://blinry.org/multi-seat-wayland/) - Updates on enhancements in Wayland for multi-user graphical interfaces.

* [Starling: A Linux Desktop written from scratch](https://starling.build) - A minimalist reimagining of what a Linux desktop should be, built entirely from scratch.

## Space and Science Advancements

* [JWST Just Examined Two Stars Suspected of Harboring Dyson Spheres](https://soylentnews.org/article.pl?sid=26/07/28/1925225&from=rss) - Findings from the James Webb Space Telescope reignite discussions on the potential for advanced extraterrestrial civilizations.

* [Astronomers Found the First Atmosphere on a Planet in Another Star's Habitable Zone](https://soylentnews.org/article.pl?sid=26/07/25/2045217&from=rss) - A major milestone as scientists identify an exoplanet with atmospheric conditions possibly supportive of life.

## Technology and Hardware Highlights

* [Cracking Windows Open: Porting RADV to Win32](https://www.collabora.com/news-and-blog/news-and-events/cracking-windows-open-porting-radv-to-win32.html) - Developers succeed in bringing RADV, a Vulkan-based open-source driver, to Windows.

* [Half-Life ported to Mac OS 9](https://mac-classic.com/news/half-life-ported-to-mac-os-9/) - The classic game makes a surprising appearance on a legacy operating system.

* [Review Roundup: Framework Laptop 13 Pro](https://hardware.slashdot.org/story/26/07/28/0123243/review-roundup-framework-laptop-13-pro?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A deeper dive into the modular Framework Laptop for improved durability and repairability.

## Digital Ethics and Market Dynamics

* [Tons of Peoples' Claude Chats and Creations Are Exposed On Google](https://yro.slashdot.org/story/26/07/28/0052221/tons-of-peoples-claude-chats-and-creations-are-exposed-on-google?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Recent exposures reveal a concerning lack of privacy protections for AI conversations and creations.

* [Judge Blocks First State Law That Would Have Banned Prediction Markets](https://yro.slashdot.org/story/26/07/28/1858208/judge-blocks-first-state-law-that-would-have-banned-prediction-markets?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A legal ruling protects the continued operation of prediction markets, preserving their informational utility.

## AI Impact on Industries

* [Workplaces Look For Cheaper AI As 'Tokenmaxxing' Fades As a Corporate Fad](https://news.slashdot.org/story/26/07/28/2242250/workplaces-look-for-cheaper-ai-as-tokenmaxxing-fades-as-a-corporate-fad?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Businesses start rethinking cost-heavy AI trends in search of more sustainable solutions.

* [Google Just Had Its First Negative Cash Flow Quarter Due To Massive AI Spending](https://soylentnews.org/article.pl?sid=26/07/26/1920201&from=rss) - AI investments impact Google's financial performance, highlighting the cost of staying ahead in AI tech.

## Historical and Cultural Reflections

* [Earth's Biggest Disasters Strike In a Hidden Pattern Every 27 Million Years](https://science.slashdot.org/story/26/07/28/0047230/earths-biggest-disasters-strike-in-a-hidden-pattern-every-27-million-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Research uncovers intriguing periodic patterns in Earth's catastrophic events.

* [60 Years Ago, a Submerged Submarine Circled the Globe for the First Time (2020)](https://www.popularmechanics.com/military/weapons/a32009109/operation-sandblast-sumbarine-circumnavigation/) - A retrospective on a groundbreaking naval achievement in submarine technology.

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

* [2026-07-29, 05:30:00](https://hardware.slashdot.org/story/26/07/29/0441240/trump-administration-bans-new-chinese-humanoid-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration Bans New Chinese Humanoid Robots](https://hardware.slashdot.org/story/26/07/29/0441240/trump-administration-bans-new-chinese-humanoid-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-29, 05:14:46](https://lobste.rs/s/ax6col/writing_toy_software_is_joy_2025) - [Writing Toy Software Is A Joy (2025)](https://blog.jsbarretto.com/post/software-is-joy)
* [2026-07-29, 05:04:00](https://soylentnews.org/article.pl?sid=26/07/28/1933258&amp;from=rss) - [Activist Charged With Felony After Giving Border Agent “Duress Code” That Wiped His Phone](https://soylentnews.org/article.pl?sid=26/07/28/1933258&amp;from=rss)
* [2026-07-29, 04:58:46](https://news.ycombinator.com/item?id=49093569) - [More Tailscale tricks for your jailbroken Kindle](https://tailscale.com/blog/jailbroken-kindle-proxy-tun-modes)
* [2026-07-29, 04:44:39](https://lobste.rs/s/c9xa6h/manganin_tools_matter) - [Manganin: tools matter](https://blog.manganin.dev/blog/tools-matter/)
* [2026-07-29, 04:30:47](https://news.ycombinator.com/item?id=49093435) - [Cracking Windows Open: Porting RADV to Win32](https://www.collabora.com/news-and-blog/news-and-events/cracking-windows-open-porting-radv-to-win32.html)
* [2026-07-29, 04:30:36](https://news.ycombinator.com/item?id=49093434) - [User Interfaces of the Demo Scene](https://www.datagubbe.se/scenegui/)
* [2026-07-29, 03:52:29](https://news.ycombinator.com/item?id=49093232) - [Transformer Transformer: A Unified Model for Motion-Conditioned Robot Co-Design](https://transformer-transformer.github.io/)
* [2026-07-29, 03:30:00](https://news.slashdot.org/story/26/07/28/2242250/workplaces-look-for-cheaper-ai-as-tokenmaxxing-fades-as-a-corporate-fad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Workplaces Look For Cheaper AI As &apos;Tokenmaxxing&apos; Fades As a Corporate Fad](https://news.slashdot.org/story/26/07/28/2242250/workplaces-look-for-cheaper-ai-as-tokenmaxxing-fades-as-a-corporate-fad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-29, 02:25:29](https://news.ycombinator.com/item?id=49092754) - [Hooray for the Sockets Interface](https://blog.apnic.net/2026/07/28/hooray-for-the-sockets-interface/)
* [2026-07-29, 01:49:19](https://news.ycombinator.com/item?id=49092499) - [LearnVector – Andrew Ng&apos;s AI company building one‑to‑one learning experiences](https://learnvector.ai/)
* [2026-07-29, 01:41:06](https://lobste.rs/s/o2couk/cp_m_68k_emulator) - [CP/M-68K emulator](https://kobolt.github.io/article-264.html)
* [2026-07-29, 01:30:21](https://lobste.rs/s/0yc3r0/lobste_rs_on_spinel) - [Lobste.rs on Spinel](https://intertwingly.net/blog/2026/07/28/What-Happens-After-You-IPO.html)
* [2026-07-29, 00:59:37](https://news.ycombinator.com/item?id=49092112) - [Multiple Mouse Cursors in Wayland](https://blinry.org/multi-seat-wayland/)
* [2026-07-29, 00:32:08](https://news.ycombinator.com/item?id=49091895) - [Lightweight Spring Boot Monitoring Without Prometheus and Grafana](https://pvrlabs.xyz/articles/lightweight-spring-boot-monitoring.html)
* [2026-07-29, 00:19:00](https://soylentnews.org/article.pl?sid=26/07/28/1925225&amp;from=rss) - [JWST Just Examined Two Stars Suspected of Harboring Dyson Spheres](https://soylentnews.org/article.pl?sid=26/07/28/1925225&amp;from=rss)
* [2026-07-29, 00:11:23](https://news.ycombinator.com/item?id=49091730) - [Hubble: Open-source notetaking app for you and your agents](https://www.hubble.md/)
* [2026-07-28, 23:27:09](https://news.ycombinator.com/item?id=49091379) - [ReFrame – The EPaper Camera](https://reframe.camera/)
* [2026-07-28, 23:00:00](https://mobile.slashdot.org/story/26/07/28/2121200/apple-retires-iphone-upgrade-program-for-klarna-backed-leases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Retires iPhone Upgrade Program For Klarna-Backed Leases](https://mobile.slashdot.org/story/26/07/28/2121200/apple-retires-iphone-upgrade-program-for-klarna-backed-leases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 22:30:05](https://lobste.rs/s/wdo7aj/proof_types_dart_using_final_classes_as) - [Proof types in Dart: Using final classes as computational witnesses](https://modulovalue.com/blog/proof-types-in-dart/)
* [2026-07-28, 22:09:06](https://news.ycombinator.com/item?id=49090607) - [Show HN: I was tired of opening 2 tabs for every HN link, so I made a userscript](https://github.com/twalichiewicz/HNewhere)
* [2026-07-28, 22:00:00](https://it.slashdot.org/story/26/07/28/212240/ai-found-bugs-arent-proving-any-easier-to-exploit-despite-the-hype?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI-Found Bugs Aren&apos;t Proving Any Easier to Exploit Despite the Hype](https://it.slashdot.org/story/26/07/28/212240/ai-found-bugs-arent-proving-any-easier-to-exploit-despite-the-hype?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 21:16:29](https://lobste.rs/s/vnh6b2/why_rocq_is_better_than_lean_for_program) - [Why Rocq is better than Lean for program verification](https://joomy.korkutblech.com/posts/2026-07-28-why-rocq-is-better.html)
* [2026-07-28, 21:14:59](https://lobste.rs/s/anvtjk/state_multi_player_wayland) - [State of multi-player Wayland](https://blinry.org/multi-seat-wayland/)
* [2026-07-28, 21:03:27](https://lobste.rs/s/pxczeo/anatomy_frontier_lab_agent_intrusion) - [Anatomy of a Frontier Lab Agent Intrusion: A Technical Timeline of the July 2026 Incident](https://huggingface.co/blog/agent-intrusion-technical-timeline)
* [2026-07-28, 21:00:00](https://news.slashdot.org/story/26/07/28/2051229/ebay-reaches-56-million-settlement-with-e-commerce-newsletter-writers-it-terrorized-in-2019?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [eBay Reaches $56 Million Settlement With E-Commerce Newsletter Writers It Terrorized In 2019](https://news.slashdot.org/story/26/07/28/2051229/ebay-reaches-56-million-settlement-with-e-commerce-newsletter-writers-it-terrorized-in-2019?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 20:58:39](https://news.ycombinator.com/item?id=49089814) - [Half-Life ported to Mac OS 9](https://mac-classic.com/news/half-life-ported-to-mac-os-9/)
* [2026-07-28, 20:52:55](https://news.ycombinator.com/item?id=49089755) - [Codex Security](https://github.com/openai/codex-security)
* [2026-07-28, 20:09:09](https://news.ycombinator.com/item?id=49089240) - [Pacing the frontier](https://www.pacingthefrontier.com/)
* [2026-07-28, 20:00:00](https://it.slashdot.org/story/26/07/28/1911218/anthropic-ai-model-finds-flaws-in-tough-to-crack-encryption-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic AI Model Finds Flaws in Tough-to-Crack Encryption Algorithms](https://it.slashdot.org/story/26/07/28/1911218/anthropic-ai-model-finds-flaws-in-tough-to-crack-encryption-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 19:34:00](https://soylentnews.org/article.pl?sid=26/07/27/0445232&amp;from=rss) - [Google Breaks Alibaba’s Record For Europe’s Largest DMA Fine](https://soylentnews.org/article.pl?sid=26/07/27/0445232&amp;from=rss)
* [2026-07-28, 19:13:36](https://lobste.rs/s/2dc0gb/cipher_behind_qsyrupwd_reconstructing) - [The Cipher Behind QSYRUPWD: Reconstructing IBM i Password Hashes](https://blog.silentsignal.eu/2026/07/28/the-cipher-behind-qsyrupwd-reconstructing-ibm-i-password-hashes/)
* [2026-07-28, 19:00:00](https://yro.slashdot.org/story/26/07/28/1858208/judge-blocks-first-state-law-that-would-have-banned-prediction-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Blocks First State Law That Would Have Banned Prediction Markets](https://yro.slashdot.org/story/26/07/28/1858208/judge-blocks-first-state-law-that-would-have-banned-prediction-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 18:53:28](https://lobste.rs/s/p0fdmk/mean_means_nothing) - [The mean means nothing](https://fzakaria.com/2026/07/27/the-mean-means-nothing)
* [2026-07-28, 18:00:00](https://yro.slashdot.org/story/26/07/28/171225/def-con-bans-meta-style-pervert-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DEF CON Bans Meta-Style &apos;Pervert Glasses&apos;](https://yro.slashdot.org/story/26/07/28/171225/def-con-bans-meta-style-pervert-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 17:37:12](https://news.ycombinator.com/item?id=49087306) - [The iPhone Upgrade Program is being replaced by Apple Upgrade](https://www.apple.com/shop/iphone/iphone-upgrade-program)
* [2026-07-28, 17:22:16](https://news.ycombinator.com/item?id=49087091) - [Discovering Cryptographic Weaknesses with Claude](https://www.anthropic.com/research/discovering-cryptographic-weaknesses)
* [2026-07-28, 17:11:54](https://news.ycombinator.com/item?id=49086971) - [Steel Bank Common Lisp version 2.6.7](https://sbcl.org/all-news.html?2.6.7)
* [2026-07-28, 17:01:39](https://lobste.rs/s/jjap0n/you_could_have_come_up_with_kimi_delta) - [You Could Have Come Up With Kimi Delta Attention](https://blog.doubleword.ai/you-could-have-come-up-with-kimi-delta-attention)
* [2026-07-28, 17:00:00](https://yro.slashdot.org/story/26/07/28/1652243/grapheneos-defends-data-wiping-function-that-blocked-us-border-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GrapheneOS Defends Data-Wiping Function That Blocked US Border Search](https://yro.slashdot.org/story/26/07/28/1652243/grapheneos-defends-data-wiping-function-that-blocked-us-border-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 16:58:31](https://news.ycombinator.com/item?id=49086788) - [Substack writers, you need a website](https://elizabethtai.com/2026/06/10/substack-writers-you-need-a-website/)
* [2026-07-28, 16:56:05](https://lobste.rs/s/tahynj/starling_linux_desktop_written_from) - [Starling, a Linux Desktop written from scratch](https://starling.build)
* [2026-07-28, 16:00:00](https://hardware.slashdot.org/story/26/07/28/0123243/review-roundup-framework-laptop-13-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Review Roundup: Framework Laptop 13 Pro](https://hardware.slashdot.org/story/26/07/28/0123243/review-roundup-framework-laptop-13-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 15:50:38](https://news.ycombinator.com/item?id=49085731) - [Delayed Gratification – Proud to Be &apos;Last to Breaking News&apos;](https://www.slow-journalism.com/)
* [2026-07-28, 15:48:34](https://news.ycombinator.com/item?id=49085698) - [Kimi K3 Architecture Overview and Notes](https://sebastianraschka.com/blog/2026/kimi-k3-architecture-notes.html)
* [2026-07-28, 15:46:45](https://news.ycombinator.com/item?id=49085666) - [Zig&apos;s Incremental Compilation Internals](https://mlugg.co.uk/posts/incremental-compilation-internals/)
* [2026-07-28, 15:18:40](https://lobste.rs/s/cxbtfq/dependency_cultures_richard_feldman) - [Dependency Cultures - Richard Feldman (Software Should Work Conf 2026)](https://www.youtube.com/watch?v=E82ly38YEEQ)
* [2026-07-28, 15:01:12](https://news.ycombinator.com/item?id=49084987) - [Now is the time to give LLMs access to the ACM digital library](https://cacm.acm.org/opinion/now-is-the-time-to-give-llms-access-to-the-acm-digital-library/)
* [2026-07-28, 15:00:00](https://yro.slashdot.org/story/26/07/28/0052221/tons-of-peoples-claude-chats-and-creations-are-exposed-on-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tons of Peoples&apos; Claude Chats and Creations Are Exposed On Google](https://yro.slashdot.org/story/26/07/28/0052221/tons-of-peoples-claude-chats-and-creations-are-exposed-on-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 14:52:00](https://soylentnews.org/article.pl?sid=26/07/27/0440212&amp;from=rss) - [The Fight Against AI Data Centers is Important – but It&apos;s Just a Starting Point](https://soylentnews.org/article.pl?sid=26/07/27/0440212&amp;from=rss)
* [2026-07-28, 14:48:13](https://news.ycombinator.com/item?id=49084813) - [Una GPS smart watch – Repairable, USB-C charging, developer-friendly](https://unawatch.com/)
* [2026-07-28, 14:39:46](https://lobste.rs/s/nhixqy/parallel_json_parsing_on_gpu_with_compute) - [Parallel JSON parsing on the GPU with compute shaders](https://github.com/friendlymatthew/slurpjson#slurpjson)
* [2026-07-28, 14:38:19](https://lobste.rs/s/jyiecw/where_are_third_places_for_learners) - [Where are the third places for learners?](https://kernelkennel.com/blog/where-is-the-middle-space/)
* [2026-07-28, 14:14:06](https://lobste.rs/s/rmzzdb/inside_zig_s_incremental_compilation) - [Inside Zig&apos;s Incremental Compilation](https://mlugg.co.uk/posts/incremental-compilation-internals/)
* [2026-07-28, 13:33:00](https://lobste.rs/s/49nob7/i_designed_custom_pcb_avoid_pressing) - [I Designed A Custom PCB To Avoid Pressing A Button Three Times](https://blog.tymscar.com/posts/opensourcedimmer/)
* [2026-07-28, 13:10:24](https://lobste.rs/s/wdopf8/building_systems_software_with_nix) - [Building (systems) software with Nix](https://hondu.co/blog/building-systems-software)
* [2026-07-28, 12:14:24](https://lobste.rs/s/7qtdhk/what_even_are_microservices) - [What even are microservices?](https://var0.xyz/posts/what-even-are-microservices.html)
* [2026-07-28, 11:00:00](https://news.slashdot.org/story/26/07/28/012244/arizona-state-launches-influencer-degree-where-students-must-gain-real-followers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arizona State Launches Influencer Degree Where Students Must Gain Real Followers](https://news.slashdot.org/story/26/07/28/012244/arizona-state-launches-influencer-degree-where-students-must-gain-real-followers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 10:32:54](https://lobste.rs/s/jrq2d9/develop_cross_platform_cli_gui_tools_with) - [Develop Cross-Platform CLI and GUI Tools With Tcl/Tk](https://cgicoffee.com/blog/2026/04/tcl-tk-develop-cross-platform-cli-gui-tools-tutorial-guide)
* [2026-07-28, 10:11:18](https://lobste.rs/s/ewifzf/making_kio_copy_many_files_fast) - [Making KIO copy many files fast](https://blogs.kde.org/2026/07/28/making-kio-copy-many-files-fast/)
* [2026-07-28, 10:05:00](https://soylentnews.org/article.pl?sid=26/07/27/0428208&amp;from=rss) - [South Korea Making its Own Security-Centric AI Model](https://soylentnews.org/article.pl?sid=26/07/27/0428208&amp;from=rss)
* [2026-07-28, 07:00:00](https://science.slashdot.org/story/26/07/28/0047230/earths-biggest-disasters-strike-in-a-hidden-pattern-every-27-million-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Earth&apos;s Biggest Disasters Strike In a Hidden Pattern Every 27 Million Years](https://science.slashdot.org/story/26/07/28/0047230/earths-biggest-disasters-strike-in-a-hidden-pattern-every-27-million-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 05:24:00](https://soylentnews.org/article.pl?sid=26/07/26/2115230&amp;from=rss) - [If You&apos;re Reading This, You&apos;re Probably an AI Bot](https://soylentnews.org/article.pl?sid=26/07/26/2115230&amp;from=rss)
* [2026-07-28, 03:30:00](https://yro.slashdot.org/story/26/07/28/0037231/a-missing-underscore-sent-innocent-man-to-prison-for-18-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Missing Underscore Sent Innocent Man To Prison For 18 Months](https://yro.slashdot.org/story/26/07/28/0037231/a-missing-underscore-sent-innocent-man-to-prison-for-18-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-28, 03:15:40](https://lobste.rs/s/yo5wxp/framework_13_pro_review_much_better) - [Framework 13 Pro review: Much better battery, much worse price](https://arstechnica.com/gadgets/2026/07/framework-laptop-13-pro-review-much-better-battery-much-worse-price/)
* [2026-07-28, 00:43:29](https://lobste.rs/s/pzsmzv/try_new_firefox_design_nightly) - [Try the New Firefox Design in Nightly](https://blog.nightly.mozilla.org/2026/07/27/new-firefox-design/)
* [2026-07-28, 00:38:00](https://soylentnews.org/article.pl?sid=26/07/26/1939241&amp;from=rss) - [China Advances Plans For National Single-Stack IPv6 Network, And Its Surveillance-Friendly Version](https://soylentnews.org/article.pl?sid=26/07/26/1939241&amp;from=rss)
* [2026-07-27, 23:33:04](https://news.ycombinator.com/item?id=49077040) - [Interview with Boris Cherny [video]](https://www.youtube.com/watch?v=qyPCVqFUyDo)
* [2026-07-27, 23:00:00](https://news.slashdot.org/story/26/07/27/1942254/peacock-to-be-included-with-youtube-premium-in-major-streaming-tie-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Peacock to Be Included With YouTube Premium In Major Streaming Tie-Up](https://news.slashdot.org/story/26/07/27/1942254/peacock-to-be-included-with-youtube-premium-in-major-streaming-tie-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-27, 22:42:11](https://news.ycombinator.com/item?id=49076450) - [60 Years Ago, a Submerged Submarine Circled the Globe for the First Time (2020)](https://www.popularmechanics.com/military/weapons/a32009109/operation-sandblast-sumbarine-circumnavigation/)
* [2026-07-27, 22:27:54](https://lobste.rs/s/nfcclq/setup_simple_self_hosted_web_server_with) - [Setup a Simple, Self-Hosted Web Server with OpenBSD](https://btxx.org/posts/self-hosted-openbsd/)
* [2026-07-27, 19:55:00](https://soylentnews.org/article.pl?sid=26/07/26/1934211&amp;from=rss) - [When Your Vehicle Outlives its Cloud: What Happens Next?](https://soylentnews.org/article.pl?sid=26/07/26/1934211&amp;from=rss)
* [2026-07-27, 18:04:30](https://news.ycombinator.com/item?id=49073357) - [Beyond Greece and Rome](https://aeon.co/essays/uncovering-a-global-ancient-history-beyond-greece-and-rome)
* [2026-07-27, 15:09:00](https://soylentnews.org/article.pl?sid=26/07/26/1927253&amp;from=rss) - [Firefox Containers Preview: Introducing Native Containers in Firefox 153 ](https://soylentnews.org/article.pl?sid=26/07/26/1927253&amp;from=rss)
* [2026-07-27, 13:34:39](https://lobste.rs/s/yijxwe/blogging_can_just_be_stating_obvious) - [Blogging Can Just Be Stating The Obvious](https://blog.jim-nielsen.com/2026/blogging-stating-the-obvious/)
* [2026-07-27, 12:56:36](https://news.ycombinator.com/item?id=49069033) - [Truth is not a direction: a Tarski attack on LLM probes](https://abeljansma.nl/2026/07/10/truth-is-not-a-direction.html)
* [2026-07-27, 10:23:00](https://soylentnews.org/article.pl?sid=26/07/26/1920201&amp;from=rss) - [Google Just Had Its First Negative Cash Flow Quarter Due To Massive AI Spending](https://soylentnews.org/article.pl?sid=26/07/26/1920201&amp;from=rss)
* [2026-07-27, 05:38:00](https://soylentnews.org/article.pl?sid=26/07/26/041247&amp;from=rss) - [Orange-Lipped Monkey That Roars and Snorts Deep in Congo Rainforest is New Species to Science](https://soylentnews.org/article.pl?sid=26/07/26/041247&amp;from=rss)
* [2026-07-27, 00:52:00](https://soylentnews.org/article.pl?sid=26/07/26/0345250&amp;from=rss) - [GitHub Slashes Public Bug Bounty Payouts as AI Report Flood Buries its Security Team](https://soylentnews.org/article.pl?sid=26/07/26/0345250&amp;from=rss)
* [2026-07-26, 20:06:00](https://soylentnews.org/article.pl?sid=26/07/26/0337236&amp;from=rss) - [India&apos;s First Privately Developed Rocket Reaches Orbit on Dramatic Debut Launch](https://soylentnews.org/article.pl?sid=26/07/26/0337236&amp;from=rss)
* [2026-07-26, 15:19:00](https://soylentnews.org/article.pl?sid=26/07/25/2052238&amp;from=rss) - [The ACLU is Arming Lawyers to Expose State Surveillance Secrets](https://soylentnews.org/article.pl?sid=26/07/25/2052238&amp;from=rss)
* [2026-07-26, 10:35:00](https://soylentnews.org/article.pl?sid=26/07/25/2048246&amp;from=rss) - [Your Cookware Got Worse on Purpose](https://soylentnews.org/article.pl?sid=26/07/25/2048246&amp;from=rss)
* [2026-07-26, 08:06:45](https://news.ycombinator.com/item?id=49055816) - [Teach yourself programming in ten years (1998)](https://www.norvig.com/21-days.html)
* [2026-07-26, 05:43:00](https://soylentnews.org/article.pl?sid=26/07/25/2045217&amp;from=rss) - [Astronomers Found the First Atmosphere on a Planet in Another Star&apos;s Habitable Zone](https://soylentnews.org/article.pl?sid=26/07/25/2045217&amp;from=rss)
* [2026-07-26, 01:00:00](https://soylentnews.org/article.pl?sid=26/07/25/2042256&amp;from=rss) - [MIT to Become Hotbed of AI Video Surveillance](https://soylentnews.org/article.pl?sid=26/07/25/2042256&amp;from=rss)
* [2026-07-25, 20:17:00](https://soylentnews.org/article.pl?sid=26/07/25/2039220&amp;from=rss) - [Ben Thompson is Wrong: US [AI] Frontier Labs are Right to be Panicking](https://soylentnews.org/article.pl?sid=26/07/25/2039220&amp;from=rss)
* [2026-07-25, 15:34:00](https://soylentnews.org/article.pl?sid=26/07/24/1452216&amp;from=rss) - [There Isn&apos;t a Single Consumer Wi-Fi Router That is 100% American-Made](https://soylentnews.org/article.pl?sid=26/07/24/1452216&amp;from=rss)
* [2026-07-25, 10:50:00](https://soylentnews.org/article.pl?sid=26/07/24/1448254&amp;from=rss) - [Alan Turing&apos;s Top Secret DIY Project](https://soylentnews.org/article.pl?sid=26/07/24/1448254&amp;from=rss)
* [2026-07-25, 06:04:00](https://soylentnews.org/article.pl?sid=26/07/24/1428215&amp;from=rss) - [OpenAI&apos;s Rogue Agents are a Wake-up Call to Risks Posed by Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/07/24/1428215&amp;from=rss)
* [2026-07-25, 01:21:00](https://soylentnews.org/article.pl?sid=26/07/24/1423206&amp;from=rss) - [US Blocks SSL Security Certificates for Iran&apos;s Fars News Agency](https://soylentnews.org/article.pl?sid=26/07/24/1423206&amp;from=rss)
