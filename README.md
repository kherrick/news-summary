# [News Summary](https://kherrick.github.io/news-summary/)

## Fraud and Misuse of Technology

* [Director Charged With Netflix Fraud After Splurging on Crypto Instead of Finishing Sci-fi Series](https://yro.slashdot.org/story/25/03/21/2343252/director-charged-with-netflix-fraud-after-splurging-on-crypto-instead-of-finishing-sci-fi-series?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Legal and Policy Issues in Tech

* [Apple Sued For False Advertising Over Apple Intelligence](https://apple.slashdot.org/story/25/03/21/2252226/apple-sued-for-false-advertising-over-apple-intelligence?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [France rejects backdoor mandate](https://www.eff.org/deeplinks/2025/03/win-encryption-france-rejects-backdoor-mandate)

* [US Removes Tornado Cash Sanctions](https://news.slashdot.org/story/25/03/21/1611253/us-removes-tornado-cash-sanctions?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Clearview Attempted To Buy Social Security Numbers and Mugshots for its Database](https://yro.slashdot.org/story/25/03/20/1925212/clearview-attempted-to-buy-social-security-numbers-and-mugshots-for-its-database?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Tech Developments and Innovations

* [Shaarli: personal, minimalist, super-fast, database free, bookmarking service](https://github.com/shaarli/Shaarli)

* [Chunking Attacks on File Backup Services Using Content-Deﬁned Chunking [pdf]](https://www.daemonology.net/blog/chunking-attacks.pdf)

* [Frink](https://frinklang.org/)

* [Legged Locomotion Meets Skateboarding](https://umich-curly.github.io/DHAL/)

## Artificial Intelligence and Its Applications

* [Meta Spotted Testing AI-Generated Comments on Instagram](https://tech.slashdot.org/story/25/03/21/2246239/meta-spotted-testing-ai-generated-comments-on-instagram?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Academics Accuse AI Startups of Co-Opting Peer Review for Publicity](https://soylentnews.org/article.pl?sid=25/03/20/0719234&from=rss)

## Privacy and Security Concerns

* [New USPTO Memo Makes Fighting Patent Trolls Even Harder](https://www.eff.org/deeplinks/2025/03/new-uspto-memo-makes-fighting-patent-trolls-even-harder)

* [Trump Signs Order Aiming To Close the Education Department](https://news.slashdot.org/story/25/03/21/044244/trump-signs-order-aiming-to-close-the-education-department?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Open Source and Developer Tools

* [Mathup: Easy MathML authoring tool with a quick to write syntax](https://mathup.xyz/)

* [How to share mouse, keyboard, and monitors between windows, macos, and Linux?](https://lobste.rs/s/hrounk/how_share_mouse_keyboard_monitors)

## Cultural and Historical Insights

* [‘The Celts: A Modern History’ by Ian Stewart Review](https://www.historytoday.com/archive/review/celts-modern-history-ian-stewart-review)

* [Ancient DNA Shows Stone Age Europeans Voyaged by Sea to Africa](https://www.nature.com/articles/d41586-025-00764-2)

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

* [2025-03-22, 01:01:40](https://news.ycombinator.com/item?id=43442360) - [Imbue (YC S17) Is Hiring Product Engineers](https://news.ycombinator.com/item?id=43442360)
* [2025-03-22, 01:00:00](https://yro.slashdot.org/story/25/03/21/2343252/director-charged-with-netflix-fraud-after-splurging-on-crypto-instead-of-finishing-sci-fi-series?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Director Charged With Netflix Fraud After Splurging on Crypto Instead of Finishing Sci-fi Series](https://yro.slashdot.org/story/25/03/21/2343252/director-charged-with-netflix-fraud-after-splurging-on-crypto-instead-of-finishing-sci-fi-series?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-22, 00:30:37](https://news.ycombinator.com/item?id=43442178) - [Monster Cables picked the wrong guy to threaten (2008)](https://www.oncontracts.com/monster-cables-picked-the-wrong-guy-to-threaten/)
* [2025-03-21, 23:54:30](https://news.ycombinator.com/item?id=43441961) - [Not OK Cupid – A story of poor email address validation](https://www.fastmail.com/blog/not-ok-cupid/)
* [2025-03-21, 23:45:00](https://apple.slashdot.org/story/25/03/21/2252226/apple-sued-for-false-advertising-over-apple-intelligence?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Sued For False Advertising Over Apple Intelligence](https://apple.slashdot.org/story/25/03/21/2252226/apple-sued-for-false-advertising-over-apple-intelligence?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 23:03:10](https://lobste.rs/s/swedbj/shaarli_personal_minimalist_super_fast) - [Shaarli: personal, minimalist, super-fast, database free, bookmarking service](https://github.com/shaarli/Shaarli)
* [2025-03-21, 22:53:17](https://lobste.rs/s/h0yytn/c_rust_interoperability_problem) - [C++/Rust Interoperability Problem Statement](https://github.com/rustfoundation/interop-initiative)
* [2025-03-21, 22:46:00](https://tech.slashdot.org/story/25/03/21/2246239/meta-spotted-testing-ai-generated-comments-on-instagram?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta Spotted Testing AI-Generated Comments on Instagram](https://tech.slashdot.org/story/25/03/21/2246239/meta-spotted-testing-ai-generated-comments-on-instagram?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 21:37:00](https://soylentnews.org/article.pl?sid=25/03/20/0719234&from=rss) - [Academics Accuse AI Startups of Co-Opting Peer Review for Publicity](https://soylentnews.org/article.pl?sid=25/03/20/0719234&from=rss)
* [2025-03-21, 21:18:39](https://news.ycombinator.com/item?id=43440920) - [MySQL transactions per second vs. fsyncs per second (2020)](https://sirupsen.com/napkin/problem-10-mysql-transactions-per-second)
* [2025-03-21, 20:35:11](https://news.ycombinator.com/item?id=43440513) - [France rejects backdoor mandate](https://www.eff.org/deeplinks/2025/03/win-encryption-france-rejects-backdoor-mandate)
* [2025-03-21, 20:30:32](https://news.ycombinator.com/item?id=43440473) - [The little book about OS development](https://littleosbook.github.io/)
* [2025-03-21, 20:07:12](https://news.ycombinator.com/item?id=43440267) - [Pen and Paper Exercises in Machine Learning (2022)](https://arxiv.org/abs/2206.13446)
* [2025-03-21, 20:06:52](https://lobste.rs/s/htsyvf/i_want_good_parallel_computer) - [I want a good parallel computer](https://raphlinus.github.io/gpu/2025/03/21/good-parallel-computer.html)
* [2025-03-21, 19:57:00](https://news.ycombinator.com/item?id=43440184) - [Use Long Options in Scripts](https://matklad.github.io/2025/03/21/use-long-options-in-scripts.html)
* [2025-03-21, 19:39:17](https://news.ycombinator.com/item?id=43440046) - [Frink](https://frinklang.org/)
* [2025-03-21, 19:30:32](https://news.ycombinator.com/item?id=43439987) - [Piccolo: Large-Scale Graph Processing with Fine-Grained In-Memory Scatter-Gather](https://arxiv.org/abs/2503.05116)
* [2025-03-21, 19:00:00](https://slashdot.org/story/25/03/21/1851233/openai-study-finds-links-between-chatgpt-use-and-loneliness?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Study Finds Links Between ChatGPT Use and Loneliness](https://slashdot.org/story/25/03/21/1851233/openai-study-finds-links-between-chatgpt-use-and-loneliness?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 18:55:33](https://news.ycombinator.com/item?id=43439610) - [New USPTO Memo Makes Fighting Patent Trolls Even Harder](https://www.eff.org/deeplinks/2025/03/new-uspto-memo-makes-fighting-patent-trolls-even-harder)
* [2025-03-21, 18:09:12](https://lobste.rs/s/hrounk/how_share_mouse_keyboard_monitors) - [How to share mouse, keyboard, and monitors between windows, macos, and Linux?](https://lobste.rs/s/hrounk/how_share_mouse_keyboard_monitors)
* [2025-03-21, 18:00:00](https://news.slashdot.org/story/25/03/21/1611253/us-removes-tornado-cash-sanctions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Removes Tornado Cash Sanctions](https://news.slashdot.org/story/25/03/21/1611253/us-removes-tornado-cash-sanctions?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 17:43:25](https://news.ycombinator.com/item?id=43438797) - [Show HN: A terminal emulator in pure PHP](https://github.com/soloterm/screen)
* [2025-03-21, 17:30:34](https://news.ycombinator.com/item?id=43438601) - [Chunking Attacks on File Backup Services Using Content-Deﬁned Chunking [pdf]](https://www.daemonology.net/blog/chunking-attacks.pdf)
* [2025-03-21, 17:24:41](https://lobste.rs/s/1ridxo/tmp_0ut_volume_4) - [tmp.0ut Volume 4](HTTP://Tmpout.sh/4)
* [2025-03-21, 17:02:17](https://news.ycombinator.com/item?id=43438192) - [Mathup: Easy MathML authoring tool with a quick to write syntax](https://mathup.xyz/)
* [2025-03-21, 16:53:50](https://lobste.rs/s/fvvcmv/pow_bot_deterrent_proof_work_based_bot) - [pow-bot-deterrent: A proof-of-work based bot deterrent](https://github.com/sequentialread/pow-bot-deterrent)
* [2025-03-21, 16:51:00](https://soylentnews.org/article.pl?sid=25/03/20/0714208&from=rss) - [Los Alamos Scientists Invent Speedometer For Satellites](https://soylentnews.org/article.pl?sid=25/03/20/0714208&from=rss)
* [2025-03-21, 16:26:34](https://lobste.rs/s/patoqt/what_comes_after_github_actions) - [What Comes After GitHub Actions?](https://garnix.io/blog/what-comes-after-gha)
* [2025-03-21, 16:25:00](https://tech.slashdot.org/story/25/03/21/1623227/microsoft-tells-windows-10-users-to-buy-new-pcs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Tells Windows 10 Users To Buy New PCs](https://tech.slashdot.org/story/25/03/21/1623227/microsoft-tells-windows-10-users-to-buy-new-pcs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 15:50:00](https://tech.slashdot.org/story/25/03/21/1550212/yahoo-sells-techcrunch?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Yahoo Sells TechCrunch](https://tech.slashdot.org/story/25/03/21/1550212/yahoo-sells-techcrunch?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 15:35:27](https://news.ycombinator.com/item?id=43436894) - [IronRDP: a Rust implementation of Microsoft's RDP protocol](https://github.com/Devolutions/IronRDP)
* [2025-03-21, 15:12:54](https://lobste.rs/s/ybyno6/trapping_misbehaving_bots_ai_labyrinth) - [Trapping misbehaving bots in an AI Labyrinth](https://blog.cloudflare.com/ai-labyrinth/)
* [2025-03-21, 15:00:00](https://tech.slashdot.org/story/25/03/21/1126233/google-sues-scammers-over-fake-maps-listings?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Sues Scammers Over Fake Maps Listings](https://tech.slashdot.org/story/25/03/21/1126233/google-sues-scammers-over-fake-maps-listings?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 14:00:00](https://apple.slashdot.org/story/25/03/21/1114253/hey-siri-what-month-is-it?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Hey Siri, What Month Is It?'](https://apple.slashdot.org/story/25/03/21/1114253/hey-siri-what-month-is-it?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 13:42:25](https://lobste.rs/s/qpa6h5/engineering_flexible_permissions_for) - [Engineering flexible permissions for Zulip open-source team chat](https://blog.zulip.com/2025/03/20/engineering-flexible-permissions/)
* [2025-03-21, 13:29:11](https://news.ycombinator.com/item?id=43435438) - [Show HN: Torch Lens Maker – Differentiable Geometric Optics in PyTorch](https://victorpoughon.github.io/torchlensmaker/)
* [2025-03-21, 12:51:05](https://lobste.rs/s/xzfc84/recommendations_for_os_install_on_old_mac) - [Recommendations for an OS to install on an old Mac laptop?](https://lobste.rs/s/xzfc84/recommendations_for_os_install_on_old_mac)
* [2025-03-21, 12:42:44](https://lobste.rs/s/tjhvij/understanding_various_syntaxes) - [Understanding various syntaxes to annotate a function's type in TypeScript](https://bhoot.dev/2025/typescript-function-type-syntaxes/)
* [2025-03-21, 12:38:20](https://news.ycombinator.com/item?id=43434910) - [Legged Locomotion Meets Skateboarding](https://umich-curly.github.io/DHAL/)
* [2025-03-21, 12:30:00](https://slashdot.org/story/25/03/21/0658224/european-central-bank-chief-economist-warns-of-us-financial-dominance?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [European Central Bank Chief Economist Warns of US Financial Dominance](https://slashdot.org/story/25/03/21/0658224/european-central-bank-chief-economist-warns-of-us-financial-dominance?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 12:04:00](https://soylentnews.org/article.pl?sid=25/03/20/0658243&from=rss) - [The Naturalness of the Seasonal Time Change: Researchers Question Basis of Modern Criticism](https://soylentnews.org/article.pl?sid=25/03/20/0658243&from=rss)
* [2025-03-21, 11:57:57](https://lobste.rs/s/yl2jwa/mistakes_missed_opportunities_design) - [The mistakes and missed opportunities in the design of IPv6 (episode 1)](https://ipv6.hanazo.no/posts/ipv6-missed-opportunities-1/)
* [2025-03-21, 11:41:16](https://lobste.rs/s/1091vg/right_way_do_data_fixtures_go) - [The right way to do data fixtures in Go](https://brandur.org/fragments/go-data-fixtures)
* [2025-03-21, 11:18:33](https://lobste.rs/s/exoxg9/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/exoxg9/what_are_you_doing_this_weekend)
* [2025-03-21, 10:49:41](https://news.ycombinator.com/item?id=43434093) - [Career Development: What It Means to Be a Manager, Director, or VP (2015)](https://kellblog.com/2015/03/08/career-development-what-it-really-means-to-be-a-manager-director-or-vp/)
* [2025-03-21, 10:30:00](https://tech.slashdot.org/story/25/03/21/0439241/nvidia-ceo-huang-says-he-was-wrong-about-timeline-for-quantum?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia CEO Huang Says He Was Wrong About Timeline For Quantum](https://tech.slashdot.org/story/25/03/21/0439241/nvidia-ceo-huang-says-he-was-wrong-about-timeline-for-quantum?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 08:37:46](https://lobste.rs/s/bnikjo/indieweb_doesn_t_need_take_off) - [The IndieWeb Doesn't Need to \"Take Off\"](https://susam.net/indieweb-does-not-need-to-take-off.html)
* [2025-03-21, 07:30:00](https://yro.slashdot.org/story/25/03/20/1925212/clearview-attempted-to-buy-social-security-numbers-and-mugshots-for-its-database?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Clearview Attempted To Buy Social Security Numbers and Mugshots for its Database](https://yro.slashdot.org/story/25/03/20/1925212/clearview-attempted-to-buy-social-security-numbers-and-mugshots-for-its-database?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 07:21:00](https://soylentnews.org/article.pl?sid=25/03/20/0652220&from=rss) - [North Korea's Bitcoin Reserve Thought to be 3rd Largest in World](https://soylentnews.org/article.pl?sid=25/03/20/0652220&from=rss)
* [2025-03-21, 06:08:04](https://news.ycombinator.com/item?id=43432291) - [‘The Celts: A Modern History’ by Ian Stewart Review](https://www.historytoday.com/archive/review/celts-modern-history-ian-stewart-review)
* [2025-03-21, 05:52:42](https://lobste.rs/s/6vbtjd/chimera_linux_not_dropping_risc_v_support) - [Chimera Linux NOT dropping RISC-V support after all](https://chimera-linux.org/news/2025/03/new-riscv-server.html)
* [2025-03-21, 05:37:04](https://lobste.rs/s/iopiee/hyper_mcp_mcp_server_rust_with_plugin) - [Hyper-MCP - MCP server in Rust with plugin system powered by WebAssembly and OCI registry](https://github.com/tuananh/hyper-mcp)
* [2025-03-21, 04:04:00](https://news.slashdot.org/story/25/03/21/044244/trump-signs-order-aiming-to-close-the-education-department?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Trump Signs Order Aiming To Close the Education Department](https://news.slashdot.org/story/25/03/21/044244/trump-signs-order-aiming-to-close-the-education-department?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 03:40:33](https://lobste.rs/s/bkmzxl/eu_forces_apple_open_up_notifications) - [EU forces Apple to open up notifications and other iOS features to third-party developers](https://mezha.media/en/news/yes-zmushuye-apple-vidkriti-spovishchennya-ios-300592/)
* [2025-03-21, 03:04:37](https://lobste.rs/s/ahk6h5/vibe_coding_vs_reality) - [\"Vibe Coding\" vs Reality](https://cendyne.dev/posts/2025-03-19-vibe-coding-vs-reality.html)
* [2025-03-21, 02:39:09](https://lobste.rs/s/2xjpig/asahi_linux_progress_report_linux_kernel) - [Asahi Linux progress report: Linux kernel 6.14](https://asahilinux.org/2025/03/progress-report-6-14/)
* [2025-03-21, 02:37:00](https://soylentnews.org/article.pl?sid=25/03/19/1458230&from=rss) - [New Undersea Cable Tech Listens For Sabotage  Can Be Retrofitted To Existing Fiber Optic Line](https://soylentnews.org/article.pl?sid=25/03/19/1458230&from=rss)
* [2025-03-21, 02:00:00](https://entertainment.slashdot.org/story/25/03/20/1834218/lgs-nft-marketplace-for-tvs-is-shutting-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [LG's NFT Marketplace For TVs is Shutting Down](https://entertainment.slashdot.org/story/25/03/20/1834218/lgs-nft-marketplace-for-tvs-is-shutting-down?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 00:01:42](https://lobste.rs/s/sdi7d9/dear_apple_google_still_no_app_rollbacks) - [Dear Apple and Google: still no app rollbacks?](https://www.tramline.app/blog/dear-apple-and-google-still-no-app-rollbacks)
* [2025-03-20, 23:30:00](https://tech.slashdot.org/story/25/03/20/1910204/worlds-tiniest-led-display-has-pixels-smaller-than-a-virus?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [World's Tiniest LED Display Has Pixels Smaller Than a Virus](https://tech.slashdot.org/story/25/03/20/1910204/worlds-tiniest-led-display-has-pixels-smaller-than-a-virus?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 21:56:00](https://soylentnews.org/article.pl?sid=25/03/19/1456215&from=rss) - [Microsoft's Quantum Breakthrough Claim Labeled 'Unreliable'](https://soylentnews.org/article.pl?sid=25/03/19/1456215&from=rss)
* [2025-03-20, 21:37:10](https://lobste.rs/s/sknzdg/anubis_self_hostable_scraper_defense) - [Anubis: self hostable scraper defense software](https://anubis.techaro.lol/)
* [2025-03-20, 19:08:44](https://lobste.rs/s/csdwrg/deliberate_practice_for_developers) - [Deliberate Practice for Developers](https://alexalejandre.com/programming/deliberate-practice-for-developers/)
* [2025-03-20, 18:27:33](https://lobste.rs/s/imht55/tiling_window_managers_on_macos) - [Tiling Window Managers on macOS](https://lilysthings.org/blog/tiling-macos/)
* [2025-03-20, 18:23:00](https://news.ycombinator.com/item?id=43426984) - [Ancient DNA Shows Stone Age Europeans Voyaged by Sea to Africa](https://www.nature.com/articles/d41586-025-00764-2)
* [2025-03-20, 17:23:00](https://news.ycombinator.com/item?id=43426105) - [Export Predefined Regions in Krita](https://github.com/aldanasjuan/krita_export_region)
* [2025-03-20, 17:08:00](https://soylentnews.org/politics/article.pl?sid=25/03/19/1440251&from=rss) - [FTC Removes Posts Critical of Amazon, Microsoft, and AI Companies](https://soylentnews.org/politics/article.pl?sid=25/03/19/1440251&from=rss)
* [2025-03-20, 17:01:12](https://news.ycombinator.com/item?id=43425767) - [Show HN: Hyperbrowser MCP Server – Connect AI agents to the web through browsers](https://github.com/hyperbrowserai/mcp)
* [2025-03-20, 15:31:29](https://lobste.rs/s/xhxvr9/life_altering_postgresql_patterns) - [Life Altering Postgresql Patterns](https://mccue.dev/pages/3-11-25-life-altering-postgresql-patterns)
* [2025-03-20, 12:25:00](https://soylentnews.org/article.pl?sid=25/03/19/120255&from=rss) - [Apple Loses 2025 Antitrust Appeal in Germany](https://soylentnews.org/article.pl?sid=25/03/19/120255&from=rss)
* [2025-03-20, 07:41:00](https://soylentnews.org/article.pl?sid=25/03/19/1152214&from=rss) - [Firefly Bids Farewell to its Lunar Lander After 14 Days on the Moon](https://soylentnews.org/article.pl?sid=25/03/19/1152214&from=rss)
* [2025-03-20, 02:57:00](https://soylentnews.org/article.pl?sid=25/03/19/1145216&from=rss) - [UK's Internet Watchdog Puts Storage and File-Sharing Services on Watch Over CSAM](https://soylentnews.org/article.pl?sid=25/03/19/1145216&from=rss)
* [2025-03-19, 22:14:00](https://soylentnews.org/article.pl?sid=25/03/18/1622242&from=rss) - [Tobacco's Hidden Friendly Side: How the Controversial Plant Could be Used for Good](https://soylentnews.org/article.pl?sid=25/03/18/1622242&from=rss)
* [2025-03-19, 17:29:00](https://soylentnews.org/article.pl?sid=25/03/18/1610234&from=rss) - [U.S. Atari Parts Store Still Open After 41 Years, Has Spent $100K+ Designing New Parts](https://soylentnews.org/article.pl?sid=25/03/18/1610234&from=rss)
* [2025-03-19, 12:46:00](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss) - [Discord Launches SDK to Help Developers Enhance Social Experiences in Their Games](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss)
* [2025-03-19, 12:14:46](https://news.ycombinator.com/item?id=43410874) - [‘Bluey’s World’: How a Cute Aussie Puppy Became a Juggernaut](https://www.hollywoodreporter.com/tv/tv-features/blueys-world-success-puppy-juggernaut-1236164905/)
* [2025-03-19, 08:43:18](https://news.ycombinator.com/item?id=43409533) - [Rocky Linux from CIQ – Hardened](https://ciq.com/products/rocky-linux/hardened/)
* [2025-03-19, 08:02:00](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss) - [Iguanas Floated One-Fifth of the Way Around the World to Colonize Fiji, Genetic Analysis Indicates](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss)
* [2025-03-19, 05:21:33](https://news.ycombinator.com/item?id=43408487) - [Even the worst mass extinction had its oases](https://arstechnica.com/science/2025/03/even-the-worst-mass-extinction-had-its-oases/)
* [2025-03-19, 03:18:00](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss) - [Everything You Say to Your Echo Will be Sent to Amazon Starting on March 28](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss)
* [2025-03-18, 22:33:00](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss) - [People are Using Google's New AI Model to Remove Watermarks From Images](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss)
* [2025-03-18, 19:25:17](https://news.ycombinator.com/item?id=43403821) - [Oxidizing Ubuntu: adopting Rust utilities by default](https://lwn.net/SubscriberLink/1014002/580b8750bf02cf41/)
* [2025-03-18, 17:49:00](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss) - [Unearthed Notebooks Shed Light on Victorian Genius Who Inspired Einstein](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss)
* [2025-03-18, 17:45:49](https://news.ycombinator.com/item?id=43402361) - [Jagged Flash Attention Optimization](https://www.shaped.ai/blog/jagged-flash-attention-optimization)
* [2025-03-18, 13:07:00](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss) - [On the Road to Idiocracy](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss)
* [2025-03-18, 12:21:12](https://news.ycombinator.com/item?id=43398539) - [Liberapay](https://en.liberapay.com/)
* [2025-03-18, 11:50:38](https://news.ycombinator.com/item?id=43398308) - [Global population datasets systematically underrepresent rural population](https://www.nature.com/articles/s41467-025-56906-7)
* [2025-03-18, 08:24:00](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss) - [Forget Windows 11, SteamOS for Desktops May be Released Soon](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss)
* [2025-03-18, 03:38:00](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss) - [Chaos in Gravity - the Quantum Based Magnetic Monopole of Mass?](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss)
