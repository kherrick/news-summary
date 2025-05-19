# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Introducing Obelisk deterministic workflow engine](https://obeli.sk/blog/introducing-obelisk/) - Obelisk is a new deterministic workflow engine aimed at simplifying and improving regular workflow automation.

* [Coding Without a Laptop - Two Weeks with AR Glasses and Linux on Android](https://holdtherobot.com/blog/2025/05/11/linux-on-android-with-ar-glasses/) - Experiment using augmented reality glasses as a replacement for laptops in software development.

* [Git: Move files from one repo to another with history (2021)](https://vivekdhami.com/posts/git-move-repo-files-with-history/) - A guide on transferring files between Git repositories while preserving history.

* [The fastest Postgres inserts](https://docs.hatchet.run/blog/fastest-postgres-inserts) - Research and methods to achieve high-performance inserts in PostgreSQL.

* [Language that compiles to Scratch](https://github.com/aspizu/goboscript) and [Show HN: Goboscript, text-based programming language, compiles to Scratch](https://github.com/aspizu/goboscript) - Goboscript introduces a text-based programming language that compiles into Scratch for beginner-friendly programming.

* [Another HTML/CSS engine](https://github.com/skift-org/vaev) - A new browser engine built from scratch with unique rendering approaches, as demonstrated in rendering complex pages like google.com.

* [async/await versus the Calloop Model](https://notgull.net/calloop/) - Analysis of programming paradigms in concurrency within Rust language and beyond.

* [iOS Deep-Linking with Bevy in Rust](https://rustunit.com/blog/2025/05-18-bevy-ios-deep-linking/) - Exploring how deep-linking can be implemented in Rust for iOS platforms.

## Artificial Intelligence and Data

* [How a New Type of AI is Helping Police Skirt Facial Recognition Bans](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss) - Insights on AI-surveillance technologies bypassing existing bans on facial recognition.

* [Why We're Unlikely to Get Artificial General Intelligence Any Time Soon](https://slashdot.org/story/25/05/19/003225/why-were-unlikely-to-get-artificial-general-intelligence-any-time-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Perspectives on the challenges and timeline for achieving AGI.

* [Layers All the Way Down: The Untold Story of Shader Compilation](https://moonside.games/posts/layers-all-the-way-down/) - Delving into the complexities behind GPU shader compilation in gaming and other graphics-heavy applications.

* [LLM text chat is everywhere. Who’s optimizing its UX?](https://xenodium.com/llm-text-chat-is-everywhere-whos-optimizing-ux) - A critical look at user experience for the increasingly ubiquitous LLM-based text chat.

* [U.S. Inks Bill to Force Geo-Tracking Tech for High-End Gaming and AI GPUs](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss) - Recent legislation impacting the regulation and tracking of advanced GPUs.

## Science and Environment

* [Mars May Have Vast Underground Oceans](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss) - New findings suggest that underground water reserves might exist on Mars.

* [Since 2022 Nuclear Fusion Breakthrough, US Researchers Have More Than Doubled Its Power Output](https://hardware.slashdot.org/story/25/05/19/0044238/since-2022-nuclear-fusion-breakthrough-us-researchers-have-more-than-doubled-its-power-output?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Remarkable progress in nuclear fusion technology enhancing its potential as a clean energy source.

* [InventWood is about to mass-produce wood that's stronger than steel](https://techcrunch.com/2025/05/12/inventwood-is-about-to-mass-produce-wood-thats-stronger-than-steel/) - A breakthrough in materials science with eco-friendly applications.

* [New research reveals the strongest solar event ever detected, in 12350 BC](https://phys.org/news/2025-05-reveals-strongest-solar-event-bc.html) - Historical analysis unveils one of the most powerful solar phenomena.

* [Scientists Find Lead Really Can Be Turned Into Gold (With Help From The LHC)](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss) - A modern twist on alchemy, using advanced particle physics experimentation.

## Cybersecurity and Privacy

* [Postman is logging all your secrets and environment variables](https://anonymousdata.medium.com/postman-is-logging-all-your-secrets-and-environment-variables-9c316e92d424) - Uncovering critical issues in popular development tools logging sensitive information.

* [When a Company Does Job Interviews with a Malfunctioning AI - and Then Rejects You](https://it.slashdot.org/story/25/05/18/1842225/when-a-company-does-job-interviews-with-a-malfunctioning-ai---and-then-rejects-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A case highlighting concerns with AI-driven recruitment processes.

* [White House Scraps Plan to Block Data Brokers From Selling Americans’ Sensitive Data](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss) - Policy debate on data privacy and regulatory measures.

## Gaming and Virtual Worlds

* [Show HN: Vaev – A browser engine built from scratch (It renders google.com)](https://github.com/skift-org/vaev) - A self-built lightweight browser showcasing unique approaches in rendering.

* [Bungie Blames Stolen 'Marathon' Art On Former Developer](https://games.slashdot.org/story/25/05/18/2216254/bungie-blames-stolen-marathon-art-on-former-developer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Industry updates on creative ownership disputes in game development.

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

* [2025-05-19, 09:44:07](https://lobste.rs/s/wlnnvz/introducing_obelisk_deterministic) - [Introducing Obelisk deterministic workflow engine](https://obeli.sk/blog/introducing-obelisk/)
* [2025-05-19, 09:39:00](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss) - [How a New Type of AI is Helping Police Skirt Facial Recognition Bans](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss)
* [2025-05-19, 09:17:20](https://news.ycombinator.com/item?id=44027867) - [Show HN: Every side project I&apos;ve built since 2009](https://naeemnur.com/side-projects/)
* [2025-05-19, 08:55:24](https://news.ycombinator.com/item?id=44027768) - [Emulator Debugging: Area 5150&apos;s Lake Effect](https://martypc.blogspot.com/2025/05/emulator-debugging-area-5150s-lake.html)
* [2025-05-19, 08:45:48](https://news.ycombinator.com/item?id=44027722) - [Seagate claims spinning disks beat SSDs on carbon footprint – Blocks and Files](https://blocksandfiles.com/2025/04/16/seagate-decarbonizing-data-report/)
* [2025-05-19, 08:00:42](https://lobste.rs/s/acpxje/coding_without_laptop_two_weeks_with_ar) - [Coding Without a Laptop - Two Weeks with AR Glasses and Linux on Android](https://holdtherobot.com/blog/2025/05/11/linux-on-android-with-ar-glasses/)
* [2025-05-19, 07:40:24](https://news.ycombinator.com/item?id=44027379) - [What does the end of mathematics look like?](https://www.awanderingmind.blog/posts/2025-05-18-what-does-the-end-of-mathematics-look-like.html)
* [2025-05-19, 07:39:22](https://lobste.rs/s/dymvtx/don_t_unwrap_options_there_are_better_ways) - [Don&apos;t Unwrap Options: There Are Better Ways](https://corrode.dev/blog/rust-option-handling-best-practices/)
* [2025-05-19, 07:36:28](https://lobste.rs/s/urxhxj/git_move_files_from_one_repo_another_with) - [Git: Move files from one repo to another with history (2021)](https://vivekdhami.com/posts/git-move-repo-files-with-history/)
* [2025-05-19, 07:35:09](https://lobste.rs/s/6icest/fastest_postgres_inserts) - [The fastest Postgres inserts](https://docs.hatchet.run/blog/fastest-postgres-inserts)
* [2025-05-19, 07:34:36](https://lobste.rs/s/6m8jml/racket_v8_17) - [Racket v8.17](https://blog.racket-lang.org/2025/05/racket-v8-17.html)
* [2025-05-19, 07:27:04](https://lobste.rs/s/sqojzs/how_have_browser_pick_contrasting_color) - [How to have the browser pick a contrasting color in CSS](https://webkit.org/blog/16929/contrast-color/)
* [2025-05-19, 07:24:55](https://lobste.rs/s/kzjcyk/frida_17_0_0_released) - [Frida 17.0.0 Released](https://frida.re/news/2025/05/17/frida-17-0-0-released/)
* [2025-05-19, 07:23:39](https://lobste.rs/s/rmce9u/language_compiles_scratch) - [Language that compiles to Scratch](https://github.com/aspizu/goboscript)
* [2025-05-19, 07:16:00](https://tech.slashdot.org/story/25/05/19/0149259/ev-sales-keep-growing-in-the-us-represent-20-of-global-car-sales-and-half-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EV Sales Keep Growing In the US, Represent 20% of Global Car Sales and Half in China](https://tech.slashdot.org/story/25/05/19/0149259/ev-sales-keep-growing-in-the-us-represent-20-of-global-car-sales-and-half-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 05:51:02](https://news.ycombinator.com/item?id=44026799) - [Show HN: Goboscript, text-based programming language, compiles to Scratch](https://github.com/aspizu/goboscript)
* [2025-05-19, 04:54:00](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss) - [The Day Grok Lost its Mind](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss)
* [2025-05-19, 03:47:41](https://lobste.rs/s/b019cn/another_html_css_engine) - [Another HTML/CSS engine](https://github.com/skift-org/vaev)
* [2025-05-19, 03:06:00](https://hardware.slashdot.org/story/25/05/19/0044238/since-2022-nuclear-fusion-breakthrough-us-researchers-have-more-than-doubled-its-power-output?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Since 2022 Nuclear Fusion Breakthrough, US Researchers Have More Than Doubled Its Power Output](https://hardware.slashdot.org/story/25/05/19/0044238/since-2022-nuclear-fusion-breakthrough-us-researchers-have-more-than-doubled-its-power-output?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 02:49:25](https://news.ycombinator.com/item?id=44026170) - [Layers All the Way Down: The Untold Story of Shader Compilation](https://moonside.games/posts/layers-all-the-way-down/)
* [2025-05-19, 02:47:20](https://lobste.rs/s/sa8b5n/async_await_versus_calloop_model) - [async/await versus the Calloop Model](https://notgull.net/calloop/)
* [2025-05-19, 01:39:38](https://lobste.rs/s/lnr9im/mapgen4_trade_routes) - [Mapgen4 trade routes](https://www.redblobgames.com/blog/2025-05-08-mapgen4-trade-routes/)
* [2025-05-19, 00:38:34](https://news.ycombinator.com/item?id=44025484) - [Show HN: Job board aggregator for best paying remote SWE jobs in the U.S.](https://www.remoteswe.fyi)
* [2025-05-19, 00:31:34](https://news.ycombinator.com/item?id=44025439) - [“There are people who can see and others who cannot even look”](https://worldhistory.substack.com/p/there-are-people-who-can-see-and)
* [2025-05-19, 00:06:00](https://slashdot.org/story/25/05/19/003225/why-were-unlikely-to-get-artificial-general-intelligence-any-time-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why We&apos;re Unlikely to Get Artificial General Intelligence Any Time Soon](https://slashdot.org/story/25/05/19/003225/why-were-unlikely-to-get-artificial-general-intelligence-any-time-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss) - [Mars May Have Vast Underground Oceans](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss)
* [2025-05-18, 23:34:39](https://lobste.rs/s/iqxqcd/little_editor_could) - [The little editor that could](https://www.youtube.com/watch?v=GoyNMFccbow)
* [2025-05-18, 22:27:07](https://news.ycombinator.com/item?id=44024759) - [France Endorses UN Open Source Principles](https://social.numerique.gouv.fr/@codegouvfr/114529954373492878)
* [2025-05-18, 22:19:00](https://games.slashdot.org/story/25/05/18/2216254/bungie-blames-stolen-marathon-art-on-former-developer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bungie Blames Stolen &apos;Marathon&apos; Art On Former Developer](https://games.slashdot.org/story/25/05/18/2216254/bungie-blames-stolen-marathon-art-on-former-developer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 21:34:58](https://lobste.rs/s/mwvvha/mimalloc_cigarette_losing_one_week_my) - [Mimalloc Cigarette: Losing one week of my life catching a memory leak](https://pwy.io/posts/mimalloc-cigarette/)
* [2025-05-18, 21:02:00](https://tech.slashdot.org/story/25/05/18/2059226/the-people-stuck-using-ancient-windows-computers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The People Stuck Using Ancient Windows Computers&apos;](https://tech.slashdot.org/story/25/05/18/2059226/the-people-stuck-using-ancient-windows-computers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 20:41:51](https://news.ycombinator.com/item?id=44024173) - [Hyper Typing](https://pscanf.com/s/341/)
* [2025-05-18, 20:37:38](https://lobste.rs/s/loggq6/ditching_obsidian_building_my_own) - [Ditching Obsidian and building my own](https://amberwilliams.io/blogs/building-my-own-pkms)
* [2025-05-18, 20:36:51](https://lobste.rs/s/zr2vsn/ios_deep_linking_with_bevy_rust) - [iOS Deep-Linking with Bevy in Rust](https://rustunit.com/blog/2025/05-18-bevy-ios-deep-linking/)
* [2025-05-18, 20:22:33](https://news.ycombinator.com/item?id=44024055) - [Show HN: Python Simulator of David Deutsch’s “Constructor Theory of Time”](https://github.com/gvelesandro/constructor-theory-simulator)
* [2025-05-18, 20:11:09](https://lobste.rs/s/yeq24m/llm_text_chat_is_everywhere_who_s) - [LLM text chat is everywhere. Who’s optimizing its UX?](https://xenodium.com/llm-text-chat-is-everywhere-whos-optimizing-ux)
* [2025-05-18, 19:59:00](https://tech.slashdot.org/story/25/05/18/1957205/why-two-amazon-drones-crashed-at-a-test-facility-in-a-december?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Two Amazon Drones Crashed at a Test Facility in a December](https://tech.slashdot.org/story/25/05/18/1957205/why-two-amazon-drones-crashed-at-a-test-facility-in-a-december?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss) - [U.S. Inks Bill to Force Geo-Tracking Tech for High-End Gaming and AI GPUs](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss)
* [2025-05-18, 19:16:41](https://news.ycombinator.com/item?id=44023680) - [K-Scale Labs: Open-source humanoid robots, built for developers](https://www.kscale.dev/)
* [2025-05-18, 19:10:29](https://news.ycombinator.com/item?id=44023634) - [Show HN: Sshsync – CLI tool to run shell commands across multiple remote servers](https://github.com/Blackmamoth/sshsync)
* [2025-05-18, 18:45:00](https://it.slashdot.org/story/25/05/18/1842225/when-a-company-does-job-interviews-with-a-malfunctioning-ai---and-then-rejects-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [When a Company Does Job Interviews with a Malfunctioning AI - and Then  Rejects You](https://it.slashdot.org/story/25/05/18/1842225/when-a-company-does-job-interviews-with-a-malfunctioning-ai---and-then-rejects-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 18:36:54](https://news.ycombinator.com/item?id=44023423) - [The Fall of Roam (2022)](https://every.to/superorganizers/the-fall-of-roam)
* [2025-05-18, 17:54:12](https://news.ycombinator.com/item?id=44023144) - [Show HN: Vaev – A browser engine built from scratch (It renders google.com)](https://github.com/skift-org/vaev)
* [2025-05-18, 17:34:00](https://developers.slashdot.org/story/25/05/18/0257255/rust-is-so-good-you-can-get-paid-20k-to-make-it-as-fast-as-c?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Rust is So Good You Can Get Paid $20K to Make It as Fast as C&apos;](https://developers.slashdot.org/story/25/05/18/0257255/rust-is-so-good-you-can-get-paid-20k-to-make-it-as-fast-as-c?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 17:05:56](https://news.ycombinator.com/item?id=44022758) - [$30 Homebrew Automated Blinds Opener](https://sifter.org/~simon/journal/20240718.html)
* [2025-05-18, 16:34:00](https://hardware.slashdot.org/story/25/05/18/1549202/taiwan-shuts-down-its-last-nuclear-reactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Taiwan Shuts Down Its Last Nuclear Reactor](https://hardware.slashdot.org/story/25/05/18/1549202/taiwan-shuts-down-its-last-nuclear-reactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 16:21:50](https://news.ycombinator.com/item?id=44022448) - [Ditching Obsidian and building my own](https://amberwilliams.io/blogs/building-my-own-pkms)
* [2025-05-18, 16:09:01](https://news.ycombinator.com/item?id=44022353) - [Show HN: I modeled the Voynich Manuscript with SBERT to test for structure](https://github.com/brianmg/voynich-nlp-analysis)
* [2025-05-18, 16:01:41](https://lobste.rs/s/aluo6d/macos_vms_docker_container) - [macOS VMs in a Docker Container](https://github.com/trycua/cua/tree/main/libs/lumier)
* [2025-05-18, 15:48:57](https://news.ycombinator.com/item?id=44022225) - [Spaced Repetition Memory System](https://notes.andymatuschak.org/Spaced_repetition_memory_system)
* [2025-05-18, 15:47:53](https://news.ycombinator.com/item?id=44022215) - [What do wealthy people buy, that ordinary people know nothing about? (2015)](https://old.reddit.com/r/AskReddit/comments/2s9u0s/comment/cnnmca8/)
* [2025-05-18, 15:34:00](https://tech.slashdot.org/story/25/05/18/0558219/firefox-announces-same-day-update-after-two-minor-pwn2own-exploits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Announces Same-Day Update After Two Minor Pwn2Own Exploits](https://tech.slashdot.org/story/25/05/18/0558219/firefox-announces-same-day-update-after-two-minor-pwn2own-exploits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 14:50:40](https://lobste.rs/s/qjo0bn/building_my_childhood_dream_pc) - [Building my childhood dream PC](https://fabiensanglard.net/2168/index.html)
* [2025-05-18, 14:38:00](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss) - [NASA Keeps Ancient Voyager 1 Spacecraft Alive With Hail Mary Thruster Fix](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss)
* [2025-05-18, 14:34:00](https://news.slashdot.org/story/25/05/18/044230/osus-open-source-lab-eyes-infrastructure-upgrades-and-sustainability-after-recent-funding-success?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OSU&apos;s Open Source Lab Eyes Infrastructure Upgrades and Sustainability After Recent Funding Success](https://news.slashdot.org/story/25/05/18/044230/osus-open-source-lab-eyes-infrastructure-upgrades-and-sustainability-after-recent-funding-success?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 13:03:34](https://lobste.rs/s/65b89t/safe_yaml_monster) - [\&quot;Safe\&quot; YAML monster](https://gist.github.com/taramtrampam/fca4e599992909b48a3ba1ce69e215a2)
* [2025-05-18, 12:30:26](https://lobste.rs/s/f5uxc4/x220_thinkpad_is_best_laptop_world_2023) - [The X220 ThinkPad is the Best Laptop in the World (2023)](https://btxx.org/posts/x220/)
* [2025-05-18, 12:22:39](https://news.ycombinator.com/item?id=44020832) - [InventWood is about to mass-produce wood that&apos;s stronger than steel](https://techcrunch.com/2025/05/12/inventwood-is-about-to-mass-produce-wood-thats-stronger-than-steel/)
* [2025-05-18, 12:08:43](https://lobste.rs/s/her8rf/adding_mastodon_comments_your_blog) - [Adding Mastodon Comments to your Blog](https://beej.us/blog/data/mastodon-comments/)
* [2025-05-18, 12:04:27](https://lobste.rs/s/p9lo9w/beginner_s_guide_sourcehut) - [A Beginner&apos;s Guide to SourceHut](https://btxx.org/posts/beginners-guide-sourcehut/)
* [2025-05-18, 11:42:19](https://news.ycombinator.com/item?id=44020591) - [Spaced repetition systems have gotten better](https://domenic.me/fsrs/)
* [2025-05-18, 11:34:00](https://news.slashdot.org/story/25/05/17/1954232/youtube-announces-gemini-ai-feature-to-target-ads-when-viewers-are-most-engaged?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Announces Gemini AI Feature to Target Ads When Viewers are Most Engaged](https://news.slashdot.org/story/25/05/17/1954232/youtube-announces-gemini-ai-feature-to-target-ads-when-viewers-are-most-engaged?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 09:53:00](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss) - [White House Scraps Plan to Block Data Brokers From Selling Americans’ Sensitive Data](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss)
* [2025-05-18, 07:34:00](https://linux.slashdot.org/story/25/05/18/0452232/9-months-later-microsoft-finally-fixes-linux-dual-booting-bug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [9 Months Later, Microsoft Finally Fixes Linux Dual-Booting Bug](https://linux.slashdot.org/story/25/05/18/0452232/9-months-later-microsoft-finally-fixes-linux-dual-booting-bug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 05:32:50](https://lobste.rs/s/olwjn7/mystical) - [Mystical](https://suberic.net/~dmm/projects/mystical/README.html)
* [2025-05-18, 05:12:00](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss) - [China&apos;s Hygon Details C86-5G: A 128-Core X86 CPU with Advanced Features and Four-Way SMT](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss)
* [2025-05-18, 03:34:00](https://developers.slashdot.org/story/25/05/18/019247/ask-slashdot-would-you-consider-a-low-latency-javascript-runtime-for-your-workflow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot: Would You Consider a Low-Latency JavaScript Runtime For Your Workflow?](https://developers.slashdot.org/story/25/05/18/019247/ask-slashdot-would-you-consider-a-low-latency-javascript-runtime-for-your-workflow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 01:34:00](https://tech.slashdot.org/story/25/05/17/2312252/google-restores-nextcloud-users-file-access-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Restores Nextcloud Users&apos; File Access on Android](https://tech.slashdot.org/story/25/05/17/2312252/google-restores-nextcloud-users-file-access-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 00:24:00](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss) - [Oniux by Tor: Isolating Linux Applications at the Kernel Level for Secure Connections](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss)
* [2025-05-17, 22:36:32](https://lobste.rs/s/tudmqv/postman_is_logging_all_your_secrets) - [Postman is logging all your secrets and environment variables](https://anonymousdata.medium.com/postman-is-logging-all-your-secrets-and-environment-variables-9c316e92d424)
* [2025-05-17, 19:39:00](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss) - [NCSC and Industry at Odds Over How to Tackle Shoddy Software](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss)
* [2025-05-17, 14:50:00](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss) - [EU Bug Database Fully Operational as US Slashes Infosec](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss)
* [2025-05-17, 10:05:00](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss) - [A US Court Just Put Ownership of CRISPR Back in Play](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss)
* [2025-05-17, 06:30:59](https://news.ycombinator.com/item?id=44012418) - [Programming in Martin-Lof&apos;s Type Theory: An Introduction (1990)](https://www.cse.chalmers.se/research/group/logic/book/)
* [2025-05-17, 05:44:50](https://news.ycombinator.com/item?id=44012283) - [`This Printer company served you malware for months, called them false positives](https://www.neowin.net/news/this-printer-company-served-you-malware-for-months-and-dismissed-it-as-false-positives/)
* [2025-05-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss) - [Bluetooth 6.1 Enhances Privacy With Randomized RPA Timing](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss)
* [2025-05-17, 00:31:00](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss) - [Nvidia Reportedly Raises GPU Prices by 10-15% as Tariffs and TSMC Price Hikes Filter Down](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss)
* [2025-05-16, 23:22:44](https://news.ycombinator.com/item?id=44010684) - [The Connoisseur of Desire](https://www.nybooks.com/articles/2025/05/29/the-connoisseur-of-desire-the-annotated-great-gatsby/)
* [2025-05-16, 21:52:52](https://news.ycombinator.com/item?id=44010096) - [Font Activations: A Note on the Type](https://robhorning.substack.com/p/font-activations)
* [2025-05-16, 19:50:45](https://news.ycombinator.com/item?id=44009185) - [Comparing Parallel Functional Array Languages: Programming and Performance](https://arxiv.org/abs/2505.08906)
* [2025-05-16, 19:45:00](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss) - [Scientists Find Lead Really Can Be Turned Into Gold (With Help From The LHC)](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss)
* [2025-05-16, 15:01:00](https://soylentnews.org/article.pl?sid=25/05/14/2259213&amp;from=rss) - [Why Bell Labs Worked](https://soylentnews.org/article.pl?sid=25/05/14/2259213&amp;from=rss)
* [2025-05-16, 14:05:52](https://news.ycombinator.com/item?id=44005692) - [Show HN: A platform to find tech conferences, discounts, and ticket giveaways](https://www.tech.tickets/)
* [2025-05-16, 10:20:00](https://soylentnews.org/article.pl?sid=25/05/15/0224241&amp;from=rss) - [A Chemical in Plastics is Tied to Heart Disease Deaths](https://soylentnews.org/article.pl?sid=25/05/15/0224241&amp;from=rss)
* [2025-05-16, 05:32:00](https://soylentnews.org/article.pl?sid=25/05/15/0157228&amp;from=rss) - [FTC Pushes The Enforcement Of Its &apos;Click-To-Cancel&apos; Rule Back To July](https://soylentnews.org/article.pl?sid=25/05/15/0157228&amp;from=rss)
* [2025-05-16, 00:45:00](https://soylentnews.org/article.pl?sid=25/05/15/0147219&amp;from=rss) - [When Your Favorite Song Plays, Your Brain ‘Physically Embodies’ Music](https://soylentnews.org/article.pl?sid=25/05/15/0147219&amp;from=rss)
* [2025-05-15, 20:00:00](https://soylentnews.org/article.pl?sid=25/05/14/0440229&amp;from=rss) - [\&quot;Prompt Engineering\&quot; Is No Longer A Job, But A Skill](https://soylentnews.org/article.pl?sid=25/05/14/0440229&amp;from=rss)
* [2025-05-15, 15:16:00](https://soylentnews.org/article.pl?sid=25/05/14/1148216&amp;from=rss) - [&apos;World&apos;s First&apos; AMD GPU Driven Via USB3 - Tiny Corp Tests EGPUs on Apple Silicon, Linux and Windows](https://soylentnews.org/article.pl?sid=25/05/14/1148216&amp;from=rss)
* [2025-05-15, 13:48:46](https://news.ycombinator.com/item?id=43995067) - [New research reveals the strongest solar event ever detected, in 12350 BC](https://phys.org/news/2025-05-reveals-strongest-solar-event-bc.html)
* [2025-05-15, 10:30:00](https://soylentnews.org/article.pl?sid=25/05/14/1143244&amp;from=rss) - [A New Lazarus Arises – for the Fourth Time – for Pascal Fans](https://soylentnews.org/article.pl?sid=25/05/14/1143244&amp;from=rss)
* [2025-05-15, 09:34:28](https://news.ycombinator.com/item?id=43993311) - [Llama from scratch (2023)](https://blog.briankitano.com/llama-from-scratch/)
* [2025-05-15, 05:47:00](https://soylentnews.org/politics/article.pl?sid=25/05/14/1136218&amp;from=rss) - [Copyright Office Thinks AI Companies Sometimes Stole Content](https://soylentnews.org/politics/article.pl?sid=25/05/14/1136218&amp;from=rss)
* [2025-05-15, 01:01:00](https://soylentnews.org/article.pl?sid=25/05/14/0413235&amp;from=rss) - [New Way To Pull Uranium From Water Can Help China&apos;s Nuclear Power Push](https://soylentnews.org/article.pl?sid=25/05/14/0413235&amp;from=rss)
