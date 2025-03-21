# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Game of Trees](https://gameoftrees.org/index.html) - A version control system designed with simplicity and portability, aimed at supporting open-source projects.

* [Artificial Intelligence Learns to Reason](https://www.science.org/doi/10.1126/science.adw5211) - A new milestone in AI as researchers make strides in enabling machines to perform reasoning tasks.

* [IronRDP: a Rust implementation of Microsoft's RDP protocol](https://github.com/Devolutions/IronRDP) - Provides a secure and efficient remote desktop protocol developed in Rust.

## AI and Ethics

* [OpenAI Study Finds Links Between ChatGPT Use and Loneliness](https://slashdot.org/story/25/03/21/1851233/openai-study-finds-links-between-chatgpt-use-and-loneliness?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A study by OpenAI delves into potential mental health implications of heavy ChatGPT usage.

## Security and Privacy

* [Chunking Attacks on File Backup Services Using Content-Defined Chunking [pdf]](https://www.daemonology.net/blog/chunking-attacks.pdf) - Research highlights vulnerabilities in file backup services and how attackers could exploit data chunking processes.

* [The mistakes and missed opportunities in the design of IPv6 (episode 1)](https://ipv6.hanazo.no/posts/ipv6-missed-opportunities-1/) - Analysis on the lessons learned and design mistakes in IPv6 to improve future protocols.

## Open Source Projects

* [retroboy: A Game Boy emulator written in Rust that runs on the web](https://github.com/smparsons/retroboy) - An open-source emulator allowing retro gamers to play Game Boy games directly in the browser.

* [Mathup: Easy MathML authoring tool with a quick to write syntax](https://mathup.xyz/) - Simplifying mathematical content creation with a user-friendly authoring interface.

## Policy and Regulation

* [US Removes Tornado Cash Sanctions](https://news.slashdot.org/story/25/03/21/1611253/us-removes-tornado-cash-sanctions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The United States reverses its sanctions on Tornado Cash, impacting cryptocurrency privacy and usage.

* [EU forces Apple to open up notifications and other iOS features to third-party developers](https://mezha.media/en/news/yes-zmushuye-apple-vidkriti-spovishchennya-ios-300592/) - Legal pressure in Europe mandates increased accessibility for iOS applications.

## Engineering and Design

* [Engineering flexible permissions for Zulip open-source team chat](https://blog.zulip.com/2025/03/20/engineering-flexible-permissions/) - Building smarter permissions systems to enhance collaboration in open-source applications.

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

* [2025-03-21, 19:00:00](https://slashdot.org/story/25/03/21/1851233/openai-study-finds-links-between-chatgpt-use-and-loneliness?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Study Finds Links Between ChatGPT Use and Loneliness](https://slashdot.org/story/25/03/21/1851233/openai-study-finds-links-between-chatgpt-use-and-loneliness?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 18:14:30](https://news.ycombinator.com/item?id=43439186) - [Artificial Intelligence Learns to Reason](https://www.science.org/doi/10.1126/science.adw5211)
* [2025-03-21, 18:00:00](https://news.slashdot.org/story/25/03/21/1611253/us-removes-tornado-cash-sanctions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Removes Tornado Cash Sanctions](https://news.slashdot.org/story/25/03/21/1611253/us-removes-tornado-cash-sanctions?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 17:43:25](https://news.ycombinator.com/item?id=43438797) - [Show HN: A terminal emulator in pure PHP](https://github.com/soloterm/screen)
* [2025-03-21, 17:33:54](https://news.ycombinator.com/item?id=43438659) - [Game of Trees](https://gameoftrees.org/index.html)
* [2025-03-21, 17:30:34](https://news.ycombinator.com/item?id=43438601) - [Chunking Attacks on File Backup Services Using Content-Deﬁned Chunking [pdf]](https://www.daemonology.net/blog/chunking-attacks.pdf)
* [2025-03-21, 17:03:27](https://news.ycombinator.com/item?id=43438206) - [Bigscreen Beyond 2](https://www.bigscreenvr.com/)
* [2025-03-21, 17:02:17](https://news.ycombinator.com/item?id=43438192) - [Mathup: Easy MathML authoring tool with a quick to write syntax](https://mathup.xyz/)
* [2025-03-21, 17:00:58](https://news.ycombinator.com/item?id=43438166) - [GoGoGrandparent (YC S16) is hiring Back end Engineers](https://news.ycombinator.com/item?id=43438166)
* [2025-03-21, 16:56:07](https://lobste.rs/s/xowxoq/retroboy_game_boy_emulator_written_rust) - [retroboy: A Game Boy emulator written in Rust that runs on the web](https://github.com/smparsons/retroboy)
* [2025-03-21, 16:53:50](https://lobste.rs/s/fvvcmv/pow_bot_deterrent_proof_work_based_bot) - [pow-bot-deterrent: A proof-of-work based bot deterrent](https://github.com/sequentialread/pow-bot-deterrent)
* [2025-03-21, 16:51:00](https://soylentnews.org/article.pl?sid=25/03/20/0714208&from=rss) - [Los Alamos Scientists Invent Speedometer For Satellites](https://soylentnews.org/article.pl?sid=25/03/20/0714208&from=rss)
* [2025-03-21, 16:26:34](https://lobste.rs/s/patoqt/what_comes_after_github_actions) - [What Comes After GitHub Actions?](https://garnix.io/blog/what-comes-after-gha)
* [2025-03-21, 16:25:00](https://tech.slashdot.org/story/25/03/21/1623227/microsoft-tells-windows-10-users-to-buy-new-pcs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Tells Windows 10 Users To Buy New PCs](https://tech.slashdot.org/story/25/03/21/1623227/microsoft-tells-windows-10-users-to-buy-new-pcs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 15:50:00](https://tech.slashdot.org/story/25/03/21/1550212/yahoo-sells-techcrunch?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Yahoo Sells TechCrunch](https://tech.slashdot.org/story/25/03/21/1550212/yahoo-sells-techcrunch?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 15:35:27](https://news.ycombinator.com/item?id=43436894) - [IronRDP: a Rust implementation of Microsoft's RDP protocol](https://github.com/Devolutions/IronRDP)
* [2025-03-21, 15:12:54](https://lobste.rs/s/ybyno6/trapping_misbehaving_bots_ai_labyrinth) - [Trapping misbehaving bots in an AI Labyrinth](https://blog.cloudflare.com/ai-labyrinth/)
* [2025-03-21, 15:00:00](https://tech.slashdot.org/story/25/03/21/1126233/google-sues-scammers-over-fake-maps-listings?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Sues Scammers Over Fake Maps Listings](https://tech.slashdot.org/story/25/03/21/1126233/google-sues-scammers-over-fake-maps-listings?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 14:40:28](https://lobste.rs/s/qtbsnz/torch_lens_maker_library_for) - [Torch Lens Maker - library for differentiable geometric optics based on PyTorch](https://victorpoughon.github.io/torchlensmaker/)
* [2025-03-21, 14:00:00](https://apple.slashdot.org/story/25/03/21/1114253/hey-siri-what-month-is-it?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Hey Siri, What Month Is It?'](https://apple.slashdot.org/story/25/03/21/1114253/hey-siri-what-month-is-it?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 13:42:25](https://lobste.rs/s/qpa6h5/engineering_flexible_permissions_for) - [Engineering flexible permissions for Zulip open-source team chat](https://blog.zulip.com/2025/03/20/engineering-flexible-permissions/)
* [2025-03-21, 13:29:11](https://news.ycombinator.com/item?id=43435438) - [Show HN: Torch Lens Maker – Differentiable Geometric Optics in PyTorch](https://victorpoughon.github.io/torchlensmaker/)
* [2025-03-21, 12:51:05](https://lobste.rs/s/xzfc84/recommendations_for_os_install_on_old_mac) - [Recommendations for an OS to install on an old Mac laptop?](https://lobste.rs/s/xzfc84/recommendations_for_os_install_on_old_mac)
* [2025-03-21, 12:42:44](https://lobste.rs/s/tjhvij/understanding_various_syntaxes) - [Understanding various syntaxes to annotate a function's type in TypeScript](https://bhoot.dev/2025/typescript-function-type-syntaxes/)
* [2025-03-21, 12:38:20](https://news.ycombinator.com/item?id=43434910) - [Legged Locomotion Meets Skateboarding](https://umich-curly.github.io/DHAL/)
* [2025-03-21, 12:30:00](https://slashdot.org/story/25/03/21/0658224/european-central-bank-chief-economist-warns-of-us-financial-dominance?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [European Central Bank Chief Economist Warns of US Financial Dominance](https://slashdot.org/story/25/03/21/0658224/european-central-bank-chief-economist-warns-of-us-financial-dominance?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 12:16:45](https://news.ycombinator.com/item?id=43434730) - [Wheel Reinventor’s Principles (2024)](https://tobloef.com/blog/wheel-reinventors-principles/)
* [2025-03-21, 12:04:00](https://soylentnews.org/article.pl?sid=25/03/20/0658243&from=rss) - [The Naturalness of the Seasonal Time Change: Researchers Question Basis of Modern Criticism](https://soylentnews.org/article.pl?sid=25/03/20/0658243&from=rss)
* [2025-03-21, 11:57:57](https://lobste.rs/s/yl2jwa/mistakes_missed_opportunities_design) - [The mistakes and missed opportunities in the design of IPv6 (episode 1)](https://ipv6.hanazo.no/posts/ipv6-missed-opportunities-1/)
* [2025-03-21, 11:41:16](https://lobste.rs/s/1091vg/right_way_do_data_fixtures_go) - [The right way to do data fixtures in Go](https://brandur.org/fragments/go-data-fixtures)
* [2025-03-21, 11:18:33](https://lobste.rs/s/exoxg9/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/exoxg9/what_are_you_doing_this_weekend)
* [2025-03-21, 10:49:41](https://news.ycombinator.com/item?id=43434093) - [Career Development: What It Means to Be a Manager, Director, or VP (2015)](https://kellblog.com/2015/03/08/career-development-what-it-really-means-to-be-a-manager-director-or-vp/)
* [2025-03-21, 10:30:00](https://tech.slashdot.org/story/25/03/21/0439241/nvidia-ceo-huang-says-he-was-wrong-about-timeline-for-quantum?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia CEO Huang Says He Was Wrong About Timeline For Quantum](https://tech.slashdot.org/story/25/03/21/0439241/nvidia-ceo-huang-says-he-was-wrong-about-timeline-for-quantum?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 09:35:33](https://news.ycombinator.com/item?id=43433599) - [Numbering should start at zero (1982)](https://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD831.html)
* [2025-03-21, 08:37:46](https://lobste.rs/s/bnikjo/indieweb_doesn_t_need_take_off) - [The IndieWeb Doesn't Need to \"Take Off\"](https://susam.net/indieweb-does-not-need-to-take-off.html)
* [2025-03-21, 07:30:00](https://yro.slashdot.org/story/25/03/20/1925212/clearview-attempted-to-buy-social-security-numbers-and-mugshots-for-its-database?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Clearview Attempted To Buy Social Security Numbers and Mugshots for its Database](https://yro.slashdot.org/story/25/03/20/1925212/clearview-attempted-to-buy-social-security-numbers-and-mugshots-for-its-database?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 07:21:00](https://soylentnews.org/article.pl?sid=25/03/20/0652220&from=rss) - [North Korea's Bitcoin Reserve Thought to be 3rd Largest in World](https://soylentnews.org/article.pl?sid=25/03/20/0652220&from=rss)
* [2025-03-21, 06:08:04](https://news.ycombinator.com/item?id=43432291) - ['The Celts: A Modern History' by Ian Stewart Review](https://www.historytoday.com/archive/review/celts-modern-history-ian-stewart-review)
* [2025-03-21, 05:52:42](https://lobste.rs/s/6vbtjd/chimera_linux_not_dropping_risc_v_support) - [Chimera Linux NOT dropping RISC-V support after all](https://chimera-linux.org/news/2025/03/new-riscv-server.html)
* [2025-03-21, 05:37:04](https://lobste.rs/s/iopiee/hyper_mcp_mcp_server_rust_with_plugin) - [Hyper-MCP - MCP server in Rust with plugin system powered by WebAssembly and OCI registry](https://github.com/tuananh/hyper-mcp)
* [2025-03-21, 04:04:00](https://news.slashdot.org/story/25/03/21/044244/trump-signs-order-aiming-to-close-the-education-department?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Trump Signs Order Aiming To Close the Education Department](https://news.slashdot.org/story/25/03/21/044244/trump-signs-order-aiming-to-close-the-education-department?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 04:01:00](https://news.ycombinator.com/item?id=43431675) - [Apple shuffles AI executive ranks in bid to turn around Siri](https://finance.yahoo.com/news/apple-shuffles-ai-executive-ranks-162500488.html)
* [2025-03-21, 03:40:33](https://lobste.rs/s/bkmzxl/eu_forces_apple_open_up_notifications) - [EU forces Apple to open up notifications and other iOS features to third-party developers](https://mezha.media/en/news/yes-zmushuye-apple-vidkriti-spovishchennya-ios-300592/)
* [2025-03-21, 03:31:06](https://news.ycombinator.com/item?id=43431567) - [London's Heathrow Airport announces complete shutdown due to power outage](https://www.cnn.com/2025/03/20/travel/london-heathrow-airport-shut-intl-hnk/index.html)
* [2025-03-21, 03:04:37](https://lobste.rs/s/ahk6h5/vibe_coding_vs_reality) - [\"Vibe Coding\" vs Reality](https://cendyne.dev/posts/2025-03-19-vibe-coding-vs-reality.html)
* [2025-03-21, 02:39:09](https://lobste.rs/s/2xjpig/asahi_linux_progress_report_linux_kernel) - [Asahi Linux progress report: Linux kernel 6.14](https://asahilinux.org/2025/03/progress-report-6-14/)
* [2025-03-21, 02:37:00](https://soylentnews.org/article.pl?sid=25/03/19/1458230&from=rss) - [New Undersea Cable Tech Listens For Sabotage  Can Be Retrofitted To Existing Fiber Optic Line](https://soylentnews.org/article.pl?sid=25/03/19/1458230&from=rss)
* [2025-03-21, 02:00:00](https://entertainment.slashdot.org/story/25/03/20/1834218/lgs-nft-marketplace-for-tvs-is-shutting-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [LG's NFT Marketplace For TVs is Shutting Down](https://entertainment.slashdot.org/story/25/03/20/1834218/lgs-nft-marketplace-for-tvs-is-shutting-down?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 00:01:42](https://lobste.rs/s/sdi7d9/dear_apple_google_still_no_app_rollbacks) - [Dear Apple and Google: still no app rollbacks?](https://www.tramline.app/blog/dear-apple-and-google-still-no-app-rollbacks)
* [2025-03-20, 23:30:00](https://tech.slashdot.org/story/25/03/20/1910204/worlds-tiniest-led-display-has-pixels-smaller-than-a-virus?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [World's Tiniest LED Display Has Pixels Smaller Than a Virus](https://tech.slashdot.org/story/25/03/20/1910204/worlds-tiniest-led-display-has-pixels-smaller-than-a-virus?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 22:00:00](https://hardware.slashdot.org/story/25/03/20/1853218/hp-escapes-customer-payouts-in-printer-bricking-lawsuit-settlement?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [HP Escapes Customer Payouts in Printer-Bricking Lawsuit Settlement](https://hardware.slashdot.org/story/25/03/20/1853218/hp-escapes-customer-payouts-in-printer-bricking-lawsuit-settlement?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 21:56:00](https://soylentnews.org/article.pl?sid=25/03/19/1456215&from=rss) - [Microsoft's Quantum Breakthrough Claim Labeled 'Unreliable'](https://soylentnews.org/article.pl?sid=25/03/19/1456215&from=rss)
* [2025-03-20, 21:54:17](https://news.ycombinator.com/item?id=43429417) - [Retro Boy: simple Game Boy emulator written in Rust, can be played on the web](https://github.com/smparsons/retroboy)
* [2025-03-20, 21:37:10](https://lobste.rs/s/sknzdg/anubis_self_hostable_scraper_defense) - [Anubis: self hostable scraper defense software](https://anubis.techaro.lol/)
* [2025-03-20, 21:00:00](https://tech.slashdot.org/story/25/03/20/1839239/gmail-rolls-out-ai-powered-search?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Gmail Rolls Out AI-Powered Search](https://tech.slashdot.org/story/25/03/20/1839239/gmail-rolls-out-ai-powered-search?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 20:00:00](https://news.slashdot.org/story/25/03/20/1918213/kids-are-spending-too-much-class-time-on-laptops?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Kids Are Spending Too Much Class Time on Laptops'](https://news.slashdot.org/story/25/03/20/1918213/kids-are-spending-too-much-class-time-on-laptops?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 19:08:44](https://lobste.rs/s/csdwrg/deliberate_practice_for_developers) - [Deliberate Practice for Developers](https://alexalejandre.com/programming/deliberate-practice-for-developers/)
* [2025-03-20, 18:27:33](https://lobste.rs/s/imht55/tiling_window_managers_on_macos) - [Tiling Window Managers on macOS](https://lilysthings.org/blog/tiling-macos/)
* [2025-03-20, 18:23:00](https://news.ycombinator.com/item?id=43426984) - [Ancient DNA Shows Stone Age Europeans Voyaged by Sea to Africa](https://www.nature.com/articles/d41586-025-00764-2)
* [2025-03-20, 17:08:00](https://soylentnews.org/politics/article.pl?sid=25/03/19/1440251&from=rss) - [FTC Removes Posts Critical of Amazon, Microsoft, and AI Companies](https://soylentnews.org/politics/article.pl?sid=25/03/19/1440251&from=rss)
* [2025-03-20, 16:51:12](https://news.ycombinator.com/item?id=43425655) - [Claude can now search the web](https://www.anthropic.com/news/web-search)
* [2025-03-20, 15:31:29](https://lobste.rs/s/xhxvr9/life_altering_postgresql_patterns) - [Life Altering Postgresql Patterns](https://mccue.dev/pages/3-11-25-life-altering-postgresql-patterns)
* [2025-03-20, 14:53:32](https://lobste.rs/s/f6ciaz/national_security_case_for_email_plus) - [The National Security Case for Email Plus Addressing](https://sagi.io//the-national-security-case-for-email-plus-addressing/)
* [2025-03-20, 14:02:16](https://lobste.rs/s/84qcvn/how_nixos_reproducible_builds_could_have) - [How NixOS and reproducible builds could have detected the xz backdoorfor the benefit of all](https://luj.fr/blog/how-nixos-could-have-detected-xz.html)
* [2025-03-20, 12:25:31](https://news.ycombinator.com/item?id=43422162) - [The Frontend Treadmill](https://polotek.net/posts/the-frontend-treadmill/)
* [2025-03-20, 12:25:00](https://soylentnews.org/article.pl?sid=25/03/19/120255&from=rss) - [Apple Loses 2025 Antitrust Appeal in Germany](https://soylentnews.org/article.pl?sid=25/03/19/120255&from=rss)
* [2025-03-20, 10:13:40](https://lobste.rs/s/z4halj/half_constructed_objects_are) - [Half Constructed Objects Are Unnecessary](https://jerf.org/iri/post/2025/fp_lessons_half_constructed_objects/)
* [2025-03-20, 07:41:00](https://soylentnews.org/article.pl?sid=25/03/19/1152214&from=rss) - [Firefly Bids Farewell to its Lunar Lander After 14 Days on the Moon](https://soylentnews.org/article.pl?sid=25/03/19/1152214&from=rss)
* [2025-03-20, 02:57:00](https://soylentnews.org/article.pl?sid=25/03/19/1145216&from=rss) - [UK's Internet Watchdog Puts Storage and File-Sharing Services on Watch Over CSAM](https://soylentnews.org/article.pl?sid=25/03/19/1145216&from=rss)
* [2025-03-19, 22:14:00](https://soylentnews.org/article.pl?sid=25/03/18/1622242&from=rss) - [Tobacco's Hidden Friendly Side: How the Controversial Plant Could be Used for Good](https://soylentnews.org/article.pl?sid=25/03/18/1622242&from=rss)
* [2025-03-19, 17:29:00](https://soylentnews.org/article.pl?sid=25/03/18/1610234&from=rss) - [U.S. Atari Parts Store Still Open After 41 Years, Has Spent $100K+ Designing New Parts](https://soylentnews.org/article.pl?sid=25/03/18/1610234&from=rss)
* [2025-03-19, 12:46:00](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss) - [Discord Launches SDK to Help Developers Enhance Social Experiences in Their Games](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss)
* [2025-03-19, 12:14:46](https://news.ycombinator.com/item?id=43410874) - ['Bluey's World': How a Cute Aussie Puppy Became a $2B Juggernaut](https://www.hollywoodreporter.com/tv/tv-features/blueys-world-success-puppy-juggernaut-1236164905/)
* [2025-03-19, 08:02:00](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss) - [Iguanas Floated One-Fifth of the Way Around the World to Colonize Fiji, Genetic Analysis Indicates](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss)
* [2025-03-19, 05:21:33](https://news.ycombinator.com/item?id=43408487) - [Even the worst mass extinction had its oases](https://arstechnica.com/science/2025/03/even-the-worst-mass-extinction-had-its-oases/)
* [2025-03-19, 03:18:00](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss) - [Everything You Say to Your Echo Will be Sent to Amazon Starting on March 28](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss)
* [2025-03-18, 22:33:00](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss) - [People are Using Google's New AI Model to Remove Watermarks From Images](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss)
* [2025-03-18, 17:49:00](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss) - [Unearthed Notebooks Shed Light on Victorian Genius Who Inspired Einstein](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss)
* [2025-03-18, 17:23:30](https://news.ycombinator.com/item?id=43402058) - [NASA Whoosh Rocket](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/whoosh-rocket/)
* [2025-03-18, 13:07:00](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss) - [On the Road to Idiocracy](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss)
* [2025-03-18, 12:58:40](https://news.ycombinator.com/item?id=43398908) - [Specializing Python with E-Graphs](https://vectorfold.studio/blog/egglog)
* [2025-03-18, 12:21:12](https://news.ycombinator.com/item?id=43398539) - [Liberapay](https://en.liberapay.com/)
* [2025-03-18, 11:50:38](https://news.ycombinator.com/item?id=43398308) - [Global population datasets systematically underrepresent rural population](https://www.nature.com/articles/s41467-025-56906-7)
* [2025-03-18, 10:18:12](https://news.ycombinator.com/item?id=43397640) - [Sync Engines Are the Future](https://www.instantdb.com/essays/sync_future)
* [2025-03-18, 10:15:41](https://news.ycombinator.com/item?id=43397625) - [Manifest: A 1-file micro-back end](https://github.com/mnfst/manifest)
* [2025-03-18, 08:24:00](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss) - [Forget Windows 11, SteamOS for Desktops May be Released Soon](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss)
* [2025-03-18, 03:38:00](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss) - [Chaos in Gravity - the Quantum Based Magnetic Monopole of Mass?](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss)
* [2025-03-18, 01:10:47](https://news.ycombinator.com/item?id=43394698) - ['The Maverick's Museum' Review: Albert Barnes and the Art of Collecting](https://www.wsj.com/arts-culture/books/the-mavericks-museum-review-albert-barnes-and-the-art-of-collecting-11f6c5e3)
* [2025-03-17, 22:53:00](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss) - [OpenAI Wants All The Data And For US Law To Apply Everywhere](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss)
* [2025-03-17, 18:11:00](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss) - [Six Weeks of CloudFlare Stalling; Still Blocking Niche Browsers](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss)
* [2025-03-17, 15:16:03](https://news.ycombinator.com/item?id=43389455) - [Napkin Math Tool](https://taylor.town/napkin-math)
* [2025-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss) - [NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss)
* [2025-03-17, 08:36:00](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss) - [World's Smallest Microcontroller](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss)
* [2025-03-17, 03:50:00](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss) - [ESA Cuts the Ribbon at 34,000-Core HPC Center](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss)
