# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation News

* [The future of software engineering - The future of software development retreat](https://www.thoughtworks.com/content/dam/thoughtworks/documents/report/tw_future%20_of_software_development_retreat_%20key_takeaways.pdf) - A discussion on the innovations and future prospects shaping the landscape of software engineering. [Comments](https://lobste.rs/s/qxmhjm/future_software_engineering_future)

* [Hare 0.26.0 released](https://harelang.org/blog/2026-02-13-hare-0.26.0-released/) - Overview of the newest release of the Hare programming language. [Comments](https://lobste.rs/s/wqzxyu/hare_0_26_0_released)

* [Meta Plans To Let Smart Glasses Identify People Through AI-Powered Facial Recognition](https://tech.slashdot.org/story/26/02/13/1336235/meta-plans-to-let-smart-glasses-identify-people-through-ai-powered-facial-recognition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta's potential development to enhance AI-based facial recognition in smart glasses.

## AI and Machine Learning Developments

* [microgpt](http://karpathy.github.io/2026/02/12/microgpt/) - Exploration of a micro-scale GPT model for AI research and development. [Comments](https://lobste.rs/s/uyjjtz/microgpt)

* [Gauntlet AI (YC S17) train you to master building with AI, give you $200k+ job](http://qualify.gauntletAI.com) - A platform promising AI mastery and potential career opportunities. [Comments](https://news.ycombinator.com/item?id=47001968)

* [Ring Cancels Its Partnership With Flock Safety After Surveillance Backlash](https://yro.slashdot.org/story/26/02/13/0846202/ring-cancels-its-partnership-with-flock-safety-after-surveillance-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examining the backlash faced by Ring over safety surveillance concerns.

## Software and Programming Updates

* [The 12-Factor App - 15 Years later. Does it Still Hold Up in 2026?](https://lukasniessen.medium.com/the-12-factor-app-15-years-later-does-it-still-hold-up-in-2026-c8af494e8465) - Revisiting the principles of the 12-Factor App methodology 15 years later. [Comments](https://lobste.rs/s/t7jbfe/12_factor_app_15_years_later_does_it_still)

* [Resizing windows on macOS Tahoe – the saga continues](https://noheger.at/blog/2026/02/12/resizing-windows-on-macos-tahoe-the-saga-continues/) - Analysis on persistent usability issues with window resizing in macOS Tahoe. [Comments](https://lobste.rs/s/kegsv1/resizing_windows_on_macos_tahoe_saga)

* [moss-kernel: Rust Linux-compatible kernel](https://github.com/hexagonal-sun/moss-kernel) - Updates on the moss-kernel, a Rust-based kernel compatible with Linux systems. [Comments](https://lobste.rs/s/9ltmes/moss_kernel_rust_linux_compatible_kernel)

## Privacy and Security Concerns

* [Ring owners are returning their cameras](https://www.msn.com/en-us/lifestyle/shopping/ring-owners-are-returning-their-cameras-here-s-how-much-you-can-get/ar-AA1W8Qa3) - Insights into customer dissatisfaction and product returns at Ring due to privacy concerns. [Comments](https://news.ycombinator.com/item?id=46999545)

* [Russia Fully Blocks WhatsApp](https://tech.slashdot.org/story/26/02/13/067244/russia-fully-blocks-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The geopolitical implications of Russia's decision to fully block WhatsApp services.

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

* [2026-02-13, 16:11:18](https://lobste.rs/s/qxmhjm/future_software_engineering_future) - [The future of software engineering - The future of software development retreat](https://www.thoughtworks.com/content/dam/thoughtworks/documents/report/tw_future%20_of_software_development_retreat_%20key_takeaways.pdf)
* [2026-02-13, 16:08:13](https://lobste.rs/s/uyjjtz/microgpt) - [microgpt](http://karpathy.github.io/2026/02/12/microgpt/)
* [2026-02-13, 15:36:54](https://lobste.rs/s/t7jbfe/12_factor_app_15_years_later_does_it_still) - [The 12-Factor App - 15 Years later. Does it Still Hold Up in 2026?](https://lukasniessen.medium.com/the-12-factor-app-15-years-later-does-it-still-hold-up-in-2026-c8af494e8465)
* [2026-02-13, 15:30:00](https://tech.slashdot.org/story/26/02/13/1527208/waymo-is-asking-doordash-drivers-to-shut-the-doors-of-its-self-driving-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo is Asking DoorDash Drivers To Shut the Doors of Its Self-Driving Cars](https://tech.slashdot.org/story/26/02/13/1527208/waymo-is-asking-doordash-drivers-to-shut-the-doors-of-its-self-driving-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 15:21:06](https://lobste.rs/s/misukt/thanks_for_all_frames_rust_gui) - [Thanks for All the Frames: Rust GUI Observations](https://tritium.legal/blog/desktop)
* [2026-02-13, 15:09:58](https://lobste.rs/s/kegsv1/resizing_windows_on_macos_tahoe_saga) - [Resizing windows on macOS Tahoe – the saga continues](https://noheger.at/blog/2026/02/12/resizing-windows-on-macos-tahoe-the-saga-continues/)
* [2026-02-13, 15:08:00](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss) - [Taiwan Tells Uncle Sam its Chip Ecosystem Ain&apos;t Going Anywhere](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss)
* [2026-02-13, 15:07:14](https://lobste.rs/s/glhu0d/deterministic_simulation_testing) - [Deterministic Simulation Testing: BUGGIFY](https://transactional.blog/simulation/buggify)
* [2026-02-13, 14:36:28](https://news.ycombinator.com/item?id=47003219) - [Open Source Is Not About You (2018)](https://gist.github.com/richhickey/1563cddea1002958f96e7ba9519972d9)
* [2026-02-13, 14:36:07](https://news.ycombinator.com/item?id=47003214) - [Apocalypse no: how almost everything we thought we knew about the Maya is wrong](https://www.theguardian.com/news/2026/feb/12/apocalypse-no-how-almost-everything-we-thought-we-knew-about-the-maya-is-wrong)
* [2026-02-13, 14:30:00](https://news.slashdot.org/story/26/02/13/1424257/bill-introduced-to-replace-west-virginias-new-cs-course-graduation-requirement-with-computer-literacy-proficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bill Introduced To Replace West Virginia&apos;s New CS Course Graduation Requirement With Computer Literacy Proficiency](https://news.slashdot.org/story/26/02/13/1424257/bill-introduced-to-replace-west-virginias-new-cs-course-graduation-requirement-with-computer-literacy-proficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 14:21:01](https://news.ycombinator.com/item?id=47003064) - [Apple, fix my keyboard before the timer ends or I&apos;m leaving iPhone](https://ios-countdown.win/)
* [2026-02-13, 14:13:23](https://lobste.rs/s/9ltmes/moss_kernel_rust_linux_compatible_kernel) - [moss-kernel: Rust Linux-compatible kernel](https://github.com/hexagonal-sun/moss-kernel)
* [2026-02-13, 14:03:14](https://news.ycombinator.com/item?id=47002825) - [Zed editor switching graphics lib from blade to wgpu](https://github.com/zed-industries/zed/pull/46758)
* [2026-02-13, 13:36:00](https://tech.slashdot.org/story/26/02/13/1336235/meta-plans-to-let-smart-glasses-identify-people-through-ai-powered-facial-recognition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Plans To Let Smart Glasses Identify People Through AI-Powered Facial Recognition](https://tech.slashdot.org/story/26/02/13/1336235/meta-plans-to-let-smart-glasses-identify-people-through-ai-powered-facial-recognition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 13:14:23](https://lobste.rs/s/wqzxyu/hare_0_26_0_released) - [Hare 0.26.0 released](https://harelang.org/blog/2026-02-13-hare-0.26.0-released/)
* [2026-02-13, 12:32:05](https://news.ycombinator.com/item?id=47001968) - [Gauntlet AI (YC S17) train you to master building with AI, give you $200k+ job](http://qualify.gauntletAI.com)
* [2026-02-13, 12:18:05](https://news.ycombinator.com/item?id=47001871) - [Monosketch](https://monosketch.io/)
* [2026-02-13, 11:24:17](https://lobste.rs/s/mwwbnx/flemish_elmish_architecture_for_fltk_rs) - [flemish: An elmish architecture for fltk-rs](https://github.com/fltk-rs/flemish)
* [2026-02-13, 10:26:00](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss) - [New Critique Debunks Claim That Trees Can Sense a Solar Eclipse](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss)
* [2026-02-13, 09:15:45](https://lobste.rs/s/mclhjq/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/mclhjq/what_are_you_doing_this_weekend)
* [2026-02-13, 09:00:00](https://yro.slashdot.org/story/26/02/13/0846202/ring-cancels-its-partnership-with-flock-safety-after-surveillance-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ring Cancels Its Partnership With Flock Safety After Surveillance Backlash](https://yro.slashdot.org/story/26/02/13/0846202/ring-cancels-its-partnership-with-flock-safety-after-surveillance-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 08:02:23](https://news.ycombinator.com/item?id=47000164) - [CSS-Doodle](https://css-doodle.com/)
* [2026-02-13, 07:46:03](https://news.ycombinator.com/item?id=47000041) - [MinIO repository is no longer maintained](https://github.com/minio/minio/commit/7aac2a2c5b7c882e68c1ce017d8256be2feea27f)
* [2026-02-13, 06:23:26](https://news.ycombinator.com/item?id=46999545) - [Ring owners are returning their cameras](https://www.msn.com/en-us/lifestyle/shopping/ring-owners-are-returning-their-cameras-here-s-how-much-you-can-get/ar-AA1W8Qa3)
* [2026-02-13, 06:10:00](https://tech.slashdot.org/story/26/02/13/067244/russia-fully-blocks-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Fully Blocks WhatsApp](https://tech.slashdot.org/story/26/02/13/067244/russia-fully-blocks-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 05:38:00](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss) - [Google Recovers “Deleted” Nest Video in High-Profile Abduction Case](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss)
* [2026-02-13, 05:24:40](https://news.ycombinator.com/item?id=46999224) - [MMAcevedo aka Lena by qntm](https://qntm.org/mmacevedo)
* [2026-02-13, 05:17:21](https://lobste.rs/s/hkrawz/google_might_think_your_website_is_down) - [Google might think your Website is down](https://codeinput.com/blog/google-seo)
* [2026-02-13, 03:45:00](https://tech.slashdot.org/story/26/02/12/2111243/windows-11-notepad-flaw-let-files-execute-silently-via-markdown-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 11 Notepad Flaw Let Files Execute Silently via Markdown Links](https://tech.slashdot.org/story/26/02/12/2111243/windows-11-notepad-flaw-let-files-execute-silently-via-markdown-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 03:36:49](https://lobste.rs/s/pc7u1q/i_improved_15_llms_at_coding_one_afternoon) - [I Improved 15 LLMs at Coding in One Afternoon. Only the Harness Changed](https://blog.can.ac/2026/02/12/the-harness-problem/)
* [2026-02-13, 03:03:33](https://lobste.rs/s/x3vd7h/many_flavors_ignore_files) - [The Many Flavors of Ignore Files](https://nesbitt.io/2026/02/12/the-many-flavors-of-ignore-files.html)
* [2026-02-13, 01:30:00](https://news.slashdot.org/story/26/02/12/211223/cia-makes-new-push-to-recruit-chinese-military-officers-as-informants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CIA Makes New Push To Recruit Chinese Military Officers as Informants](https://news.slashdot.org/story/26/02/12/211223/cia-makes-new-push-to-recruit-chinese-military-officers-as-informants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 00:47:00](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss) - [SpaceX is Pivoting to Focus on a Moon Base Before Mars](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss)
* [2026-02-13, 00:07:57](https://news.ycombinator.com/item?id=46997133) - [AWS Adds support for nested virtualization](https://github.com/aws/aws-sdk-go-v2/commit/3dca5e45d5ad05460b93410087833cbaa624754e)
* [2026-02-12, 23:52:24](https://news.ycombinator.com/item?id=46997008) - [Resizing windows on macOS Tahoe – the saga continues](https://noheger.at/blog/2026/02/12/resizing-windows-on-macos-tahoe-the-saga-continues/)
* [2026-02-12, 23:19:34](https://lobste.rs/s/bsprvp/apple_has_transparency_issue) - [Apple has a transparency issue](https://www.youtube.com/watch?v=ejPqAJ0dHwY)
* [2026-02-12, 22:58:58](https://news.ycombinator.com/item?id=46996490) - [Tell HN: Ralph Giles has died (Xiph.org| Rust@Mozilla | Ghostscript)](https://news.ycombinator.com/item?id=46996490)
* [2026-02-12, 22:30:00](https://slashdot.org/story/26/02/12/214250/ibm-plans-to-triple-entry-level-hiring-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM Plans To Triple Entry-Level Hiring in the US](https://slashdot.org/story/26/02/12/214250/ibm-plans-to-triple-entry-level-hiring-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 22:18:47](https://lobste.rs/s/zgdpht/plan_files_2020) - [.plan files (2020)](https://matteolandi.net/plan-files.html)
* [2026-02-12, 21:16:56](https://lobste.rs/s/1nqt8w/timeless_way_programming_2022) - [The Timeless Way of Programming (2022)](https://tomasp.net/blog/2022/timeless-way/)
* [2026-02-12, 21:00:00](https://yro.slashdot.org/story/26/02/12/2055249/wp-engine-says-automattic-planned-to-shake-down-10-hosting-companies-for-wordpress-royalties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WP Engine Says Automattic Planned To Shake Down 10 Hosting Companies For WordPress Royalties](https://yro.slashdot.org/story/26/02/12/2055249/wp-engine-says-automattic-planned-to-shake-down-10-hosting-companies-for-wordpress-royalties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 20:14:57](https://lobste.rs/s/ehw8fx/scripting_on_jvm_with_java_scala_kotlin) - [Scripting on the JVM with Java, Scala, and Kotlin](https://mill-build.org/blog/19-scripting-on-the-jvm.html)
* [2026-02-12, 20:04:00](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss) - [Byte Magazine Artist Robert Tinney, Who Illustrated the Birth of PCs, Dies at 78](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss)
* [2026-02-12, 20:00:00](https://slashdot.org/story/26/02/12/1931255/anthropic-raises-30-billion-at-380-billion-valuation-eyes-ipo-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Raises $30 Billion at $380 Billion Valuation, Eyes IPO This Year](https://slashdot.org/story/26/02/12/1931255/anthropic-raises-30-billion-at-380-billion-valuation-eyes-ipo-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 19:10:00](https://it.slashdot.org/story/26/02/12/196217/palo-alto-chose-not-to-tie-china-to-hacking-campaign-for-fear-of-retaliation-from-beijing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Palo Alto Chose Not To Tie China To Hacking Campaign For Fear of Retaliation From Beijing](https://it.slashdot.org/story/26/02/12/196217/palo-alto-chose-not-to-tie-china-to-hacking-campaign-for-fear-of-retaliation-from-beijing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 18:52:26](https://lobste.rs/s/lel7zt/allocators_from_c_zig) - [Allocators from C to Zig](https://antonz.org/allocators/)
* [2026-02-12, 18:23:20](https://news.ycombinator.com/item?id=46992815) - [Polis: Open-source platform for large-scale civic deliberation](https://pol.is/home2)
* [2026-02-12, 18:18:40](https://lobste.rs/s/qtxw92/workledger_offline_first_engineering) - [Workledger - An offline first  engineering notebook](https://about.workledger.org/)
* [2026-02-12, 18:10:00](https://it.slashdot.org/story/26/02/12/184223/microsoft-plans-smartphone-style-permission-prompts-for-windows-11-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Plans Smartphone-Style Permission Prompts for Windows 11 Apps](https://it.slashdot.org/story/26/02/12/184223/microsoft-plans-smartphone-style-permission-prompts-for-windows-11-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 18:06:09](https://news.ycombinator.com/item?id=46992553) - [GPT‑5.3‑Codex‑Spark](https://openai.com/index/introducing-gpt-5-3-codex-spark/)
* [2026-02-12, 17:14:31](https://lobste.rs/s/n4kbuj/ai_agent_published_hit_piece_on_me) - [An AI Agent Published a Hit Piece on Me](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/)
* [2026-02-12, 17:12:00](https://news.slashdot.org/story/26/02/12/1712232/border-officials-are-said-to-have-caused-el-paso-closure-by-firing-anti-drone-laser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Border Officials Are Said To Have Caused El Paso Closure by Firing Anti-Drone Laser](https://news.slashdot.org/story/26/02/12/1712232/border-officials-are-said-to-have-caused-el-paso-closure-by-firing-anti-drone-laser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 16:55:50](https://news.ycombinator.com/item?id=46991240) - [Gemini 3 Deep Think](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-deep-think/)
* [2026-02-12, 16:23:24](https://news.ycombinator.com/item?id=46990729) - [An AI agent published a hit piece on me](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/)
* [2026-02-12, 16:12:39](https://lobste.rs/s/fna9yv/request_for_sources_discord) - [Request for sources: Discord alternatives](https://lobste.rs/s/fna9yv/request_for_sources_discord)
* [2026-02-12, 16:10:29](https://news.ycombinator.com/item?id=46990578) - [Beginning fully autonomous operations with the 6th-generation Waymo driver](https://waymo.com/blog/2026/02/ro-on-6th-gen-waymo-driver)
* [2026-02-12, 16:00:00](https://developers.slashdot.org/story/26/02/12/1530202/amazon-engineers-want-claude-code-but-the-company-keeps-pushing-its-own-tool?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Engineers Want Claude Code, but the Company Keeps Pushing Its Own Tool](https://developers.slashdot.org/story/26/02/12/1530202/amazon-engineers-want-claude-code-but-the-company-keeps-pushing-its-own-tool?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 15:23:00](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss) - [Malicious Packages for dYdX Cryptocurrency Exchange Empties User Wallets](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss)
* [2026-02-12, 15:16:00](https://lobste.rs/s/i0xmbk/inspecting_source_go_modules) - [Inspecting the Source of Go Modules](https://words.filippo.io/go-source/)
* [2026-02-12, 15:03:00](https://slashdot.org/story/26/02/12/153227/the-are-you-sure-problem-why-your-ai-keeps-changing-its-mind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The \&quot;Are You Sure?\&quot; Problem: Why Your AI Keeps Changing Its Mind](https://slashdot.org/story/26/02/12/153227/the-are-you-sure-problem-why-your-ai-keeps-changing-its-mind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 14:43:25](https://lobste.rs/s/jagwef/css_clicker) - [CSS Clicker](https://lyra.horse/css-clicker/)
* [2026-02-12, 14:24:15](https://news.ycombinator.com/item?id=46989217) - [Major European payment processor can&apos;t send email to Google Workspace users](https://atha.io/blog/2026-02-12-viva)
* [2026-02-12, 14:15:20](https://lobste.rs/s/lzn4pr/future_for_tyr_rust_gpu_driver_for_arm_mali) - [The future for Tyr, a Rust GPU driver for Arm Mali hardware](https://lwn.net/Articles/1055590/)
* [2026-02-12, 13:55:50](https://lobste.rs/s/vyvtz5/commet_matrix_client) - [Commet - Matrix Client](https://commet.chat/)
* [2026-02-12, 13:30:20](https://news.ycombinator.com/item?id=46988596) - [Improving 15 LLMs at Coding in One Afternoon. Only the Harness Changed](http://blog.can.ac/2026/02/12/the-harness-problem/)
* [2026-02-12, 10:33:00](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss) - [Terry Pratchett&apos;s Novels May Have Held Clues to His Dementia a Decade Before Diagnosis](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss)
* [2026-02-12, 05:48:00](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss) - [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss)
* [2026-02-12, 01:07:00](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss) - [EU Interferes In Its Own Elections And Ours, Say US Tech Bros](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss)
* [2026-02-11, 20:23:00](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss) - [After a $26 Billion Hit, Stellantis Shifts Focus Back to What Buyers Want](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss)
* [2026-02-11, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss) - [Discord Will Require a Face Scan or ID for Full Access Next Month](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss)
* [2026-02-11, 10:53:00](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss) - [Newly Discovered Sungrazing Comet C/2026 A1 (MAPS) Could be the Brightest of the Year](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss)
* [2026-02-11, 06:05:00](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss) - [Microsoft Does Something Useful, Adds Sysmon to Windows](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss)
* [2026-02-11, 01:20:00](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss) - [Ask SN - \&quot;Opt-Out Signal Honored\&quot; - Screen Message](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss)
* [2026-02-10, 20:33:00](https://soylentnews.org/article.pl?sid=26/02/09/1936243&amp;from=rss) - [AI.Com&apos;s $85 Million Super Bowl Ad Campaign Falls Foul as Traffic Crashes Servers](https://soylentnews.org/article.pl?sid=26/02/09/1936243&amp;from=rss)
* [2026-02-10, 15:50:00](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss) - [Linux Kernel 6.19 is Released and the Next Version is Confirmed to be 7.0](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss)
* [2026-02-10, 11:08:00](https://soylentnews.org/article.pl?sid=26/02/09/0531254&amp;from=rss) - [Your iPhone is About to Get a New Privacy Feature to Protect Your Location Data From Prying Eyes](https://soylentnews.org/article.pl?sid=26/02/09/0531254&amp;from=rss)
* [2026-02-10, 06:22:00](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss) - [Microsoft Releases Urgent Office Patch While Russian-State Hackers Pounce](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss)
* [2026-02-10, 02:36:34](https://news.ycombinator.com/item?id=46954637) - [Faster Than Dijkstra?](https://systemsapproach.org/2026/02/09/faster-than-dijkstra/)
* [2026-02-10, 01:38:00](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss) - [A Fresh Look at IBM 3270 Information Display System](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss)
* [2026-02-09, 20:54:00](https://soylentnews.org/article.pl?sid=26/02/09/0514240&amp;from=rss) - [New York Lawmakers Introduce Bill That Aims to Halt Data Center Development for Three Years](https://soylentnews.org/article.pl?sid=26/02/09/0514240&amp;from=rss)
* [2026-02-09, 16:09:00](https://soylentnews.org/article.pl?sid=26/02/08/0232241&amp;from=rss) - [Taking a Second to Change the Time](https://soylentnews.org/article.pl?sid=26/02/08/0232241&amp;from=rss)
* [2026-02-09, 14:39:45](https://news.ycombinator.com/item?id=46945693) - [Ruby Newbie Is Joining the Ruby Users Forum](https://www.rubyforum.org/tag/getting-started)
* [2026-02-09, 12:24:00](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss) - [Vibe Coding is Killing Open Source Software](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss)
* [2026-02-09, 08:39:00](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss) - [The AI productivity trap: Why your Best Engineers are Getting Slower](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss)
* [2026-02-09, 03:54:00](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss) - [FBI Stymied by Apple&apos;s Lockdown Mode After Seizing Journalist&apos;s iPhone](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss)
