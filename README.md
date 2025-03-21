# [News Summary](https://kherrick.github.io/news-summary/)

## Operating Systems and Software Innovations

* [Recommendations for an OS to install on an old Mac laptop?](https://lobste.rs/s/xzfc84/recommendations_for_os_install_on_old_mac) [(comments)](https://lobste.rs/s/xzfc84/recommendations_for_os_install_on_old_mac)

* [Calibre 8.0](https://calibre-ebook.com/whats-new) [(comments)](https://news.ycombinator.com/item?id=43432890)

* [PeanoScript: TypeScript but it's a theorem prover](https://peanoscript.mjgrzymek.com/tutorial) [(comments)](https://lobste.rs/s/qnndyo/peanoscript_typescript_it_s_theorem)

## Technology Regulatory and Legal Developments

* [U.S. blocks Canadian access to iconic Stanstead border-straddling library](https://www.cbc.ca/lite/story/1.7489528) [(comments)](https://news.ycombinator.com/item?id=43434925)

* [Trump Signs Order Aiming To Close the Education Department](https://news.slashdot.org/story/25/03/21/044244/trump-signs-order-aiming-to-close-the-education-department?utm_source=rss1.0mainlinkanon&utm_medium=feed) [(comments)](https://news.ycombinator.com/item?id=43431675)

* [EU forces Apple to open up notifications and other iOS features to third-party developers](https://mezha.media/en/news/yes-zmushuye-apple-vidkriti-spovishchennya-ios-300592/) [(comments)](https://lobste.rs/s/bkmzxl/eu_forces_apple_open_up_notifications)

## AI and Emerging Technology

* [Nvidia CEO Huang Says He Was Wrong About Timeline For Quantum](https://tech.slashdot.org/story/25/03/21/0439241/nvidia-ceo-huang-says-he-was-wrong-about-timeline-for-quantum?utm_source=rss1.0mainlinkanon&utm_medium=feed) [(comments)](https://news.ycombinator.com/item?id=43434093)

* [Boston Dynamics shows off another major leap in humanoid mobility](https://newatlas.com/ai-humanoids/boston-dynamics-atlas-athletic/) [(comments)](https://news.ycombinator.com/item?id=43434040)

* [NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss) [(comments)](https://news.ycombinator.com/item?id=43388024)

## Cybersecurity and Data Privacy

* [Clearview Attempted To Buy Social Security Numbers and Mugshots for its Database](https://yro.slashdot.org/story/25/03/20/1925212/clearview-attempted-to-buy-social-security-numbers-and-mugshots-for-its-database?utm_source=rss1.0mainlinkanon&utm_medium=feed) [(comments)](https://news.ycombinator.com/item?id=43432485)

* [The FBI Seized This Woman's Life Savings–Without Telling Her Why](https://reason.com/2025/03/20/the-fbi-seized-this-womans-life-savings-without-telling-her-why/) [(comments)](https://news.ycombinator.com/item?id=43433694)

## Programming and Developer Tools

* ["Vibe Coding" vs Reality](https://cendyne.dev/posts/2025-03-19-vibe-coding-vs-reality.html) [(comments)](https://lobste.rs/s/ahk6h5/vibe_coding_vs_reality)

* [Show HN: My Attempt to Organize the World of AI Dev Tools](https://aicode.danvoronov.com/tools/) [(comments)](https://news.ycombinator.com/item?id=43434325)

* [Deliberate Practice for Developers](https://alexalejandre.com/programming/deliberate-practice-for-developers/) [(comments)](https://lobste.rs/s/csdwrg/deliberate_practice_for_developers)

## Scientific and Natural World Insights

* [Is Dark Energy Getting Weaker? New Evidence Strengthens the Case.](https://science.slashdot.org/story/25/03/20/1431243/is-dark-energy-getting-weaker-new-evidence-strengthens-the-case?utm_source=rss1.0mainlinkanon&utm_medium=feed) [(comments)](https://news.ycombinator.com/item?id=43426022)

* [Iguanas Floated One-Fifth of the Way Around the World to Colonize Fiji, Genetic Analysis Indicates](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss) [(comments)](https://news.ycombinator.com/item?id=43397055)

* [Unearthed Notebooks Shed Light on Victorian Genius Who Inspired Einstein](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss) [(comments)](https://news.ycombinator.com/item?id=43392753)

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

* [2025-03-21, 12:51:05](https://lobste.rs/s/xzfc84/recommendations_for_os_install_on_old_mac) - [Recommendations for an OS to install on an old Mac laptop?](https://lobste.rs/s/xzfc84/recommendations_for_os_install_on_old_mac)
* [2025-03-21, 12:42:44](https://lobste.rs/s/tjhvij/understanding_various_syntaxes) - [Understanding various syntaxes to annotate a function's type in TypeScript](https://bhoot.dev/2025/typescript-function-type-syntaxes/)
* [2025-03-21, 12:39:16](https://news.ycombinator.com/item?id=43434925) - [U.S. blocks Canadian access to iconic Stanstead border-straddling library](https://www.cbc.ca/lite/story/1.7489528)
* [2025-03-21, 12:30:00](https://slashdot.org/story/25/03/21/0658224/european-central-bank-chief-economist-warns-of-us-financial-dominance?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [European Central Bank Chief Economist Warns of US Financial Dominance](https://slashdot.org/story/25/03/21/0658224/european-central-bank-chief-economist-warns-of-us-financial-dominance?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 12:16:45](https://news.ycombinator.com/item?id=43434730) - [Wheel Reinventor's Principles](https://tobloef.com/blog/wheel-reinventors-principles/)
* [2025-03-21, 12:04:00](https://soylentnews.org/article.pl?sid=25/03/20/0658243&from=rss) - [The Naturalness of the Seasonal Time Change: Researchers Question Basis of Modern Criticism](https://soylentnews.org/article.pl?sid=25/03/20/0658243&from=rss)
* [2025-03-21, 11:57:57](https://lobste.rs/s/yl2jwa/mistakes_missed_opportunities_design) - [The mistakes and missed opportunities in the design of IPv6 (episode 1)](https://ipv6.hanazo.no/posts/ipv6-missed-opportunities-1/)
* [2025-03-21, 11:42:09](https://news.ycombinator.com/item?id=43434466) - [Imagine telling 2010 devs that in 2025, collapsing a div would require $8/ month](https://old.reddit.com/r/webdev/comments/1jged6g/imagine_telling_2010_devs_that_in_2025_collapsing/)
* [2025-03-21, 11:22:44](https://news.ycombinator.com/item?id=43434325) - [Show HN: My Attempt to Organize the World of AI Dev Tools](https://aicode.danvoronov.com/tools/)
* [2025-03-21, 11:18:33](https://lobste.rs/s/exoxg9/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/exoxg9/what_are_you_doing_this_weekend)
* [2025-03-21, 10:58:28](https://news.ycombinator.com/item?id=43434152) - [Notetime: Minimalistic notes where everything is timestamped](https://www.notetimeapp.com)
* [2025-03-21, 10:49:41](https://news.ycombinator.com/item?id=43434093) - [Career Development: What It Means to Be a Manager, Director, or VP (2015)](https://kellblog.com/2015/03/08/career-development-what-it-really-means-to-be-a-manager-director-or-vp/)
* [2025-03-21, 10:43:10](https://news.ycombinator.com/item?id=43434040) - [Boston Dynamics shows off another major leap in humanoid mobility](https://newatlas.com/ai-humanoids/boston-dynamics-atlas-athletic/)
* [2025-03-21, 10:30:00](https://tech.slashdot.org/story/25/03/21/0439241/nvidia-ceo-huang-says-he-was-wrong-about-timeline-for-quantum?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia CEO Huang Says He Was Wrong About Timeline For Quantum](https://tech.slashdot.org/story/25/03/21/0439241/nvidia-ceo-huang-says-he-was-wrong-about-timeline-for-quantum?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 09:50:57](https://news.ycombinator.com/item?id=43433694) - [The FBI Seized This Woman's Life Savings–Without Telling Her Why](https://reason.com/2025/03/20/the-fbi-seized-this-womans-life-savings-without-telling-her-why/)
* [2025-03-21, 09:35:33](https://news.ycombinator.com/item?id=43433599) - [Numbering should start at zero (1982)](https://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD831.html)
* [2025-03-21, 08:37:46](https://lobste.rs/s/bnikjo/indieweb_doesn_t_need_take_off) - [The IndieWeb Doesn't Need to \"Take Off\"](https://susam.net/indieweb-does-not-need-to-take-off.html)
* [2025-03-21, 07:56:29](https://news.ycombinator.com/item?id=43432890) - [Calibre 8.0](https://calibre-ebook.com/whats-new)
* [2025-03-21, 07:30:00](https://yro.slashdot.org/story/25/03/20/1925212/clearview-attempted-to-buy-social-security-numbers-and-mugshots-for-its-database?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Clearview Attempted To Buy Social Security Numbers and Mugshots for its Database](https://yro.slashdot.org/story/25/03/20/1925212/clearview-attempted-to-buy-social-security-numbers-and-mugshots-for-its-database?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 07:21:00](https://soylentnews.org/article.pl?sid=25/03/20/0652220&from=rss) - [North Korea's Bitcoin Reserve Thought to be 3rd Largest in World](https://soylentnews.org/article.pl?sid=25/03/20/0652220&from=rss)
* [2025-03-21, 06:44:14](https://news.ycombinator.com/item?id=43432485) - [Not dropping RISC-V support after all, maybe](https://chimera-linux.org/news/2025/03/new-riscv-server.html)
* [2025-03-21, 05:52:42](https://lobste.rs/s/6vbtjd/chimera_linux_not_dropping_risc_v_support) - [Chimera Linux NOT dropping RISC-V support after all](https://chimera-linux.org/news/2025/03/new-riscv-server.html)
* [2025-03-21, 05:37:04](https://lobste.rs/s/iopiee/hyper_mcp_mcp_server_rust_with_plugin) - [Hyper-MCP - MCP server in Rust with plugin system powered by WebAssembly and OCI registry](https://github.com/tuananh/hyper-mcp)
* [2025-03-21, 04:22:38](https://lobste.rs/s/qnndyo/peanoscript_typescript_it_s_theorem) - [PeanoScript: TypeScript but it's a theorem prover](https://peanoscript.mjgrzymek.com/tutorial)
* [2025-03-21, 04:04:00](https://news.slashdot.org/story/25/03/21/044244/trump-signs-order-aiming-to-close-the-education-department?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Trump Signs Order Aiming To Close the Education Department](https://news.slashdot.org/story/25/03/21/044244/trump-signs-order-aiming-to-close-the-education-department?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 04:01:00](https://news.ycombinator.com/item?id=43431675) - [Apple shuffles AI executive ranks in bid to turn around Siri](https://finance.yahoo.com/news/apple-shuffles-ai-executive-ranks-162500488.html)
* [2025-03-21, 03:40:33](https://lobste.rs/s/bkmzxl/eu_forces_apple_open_up_notifications) - [EU forces Apple to open up notifications and other iOS features to third-party developers](https://mezha.media/en/news/yes-zmushuye-apple-vidkriti-spovishchennya-ios-300592/)
* [2025-03-21, 03:04:37](https://lobste.rs/s/ahk6h5/vibe_coding_vs_reality) - [\"Vibe Coding\" vs Reality](https://cendyne.dev/posts/2025-03-19-vibe-coding-vs-reality.html)
* [2025-03-21, 02:39:09](https://lobste.rs/s/2xjpig/asahi_linux_progress_report_linux_kernel) - [Asahi Linux progress report: Linux kernel 6.14](https://asahilinux.org/2025/03/progress-report-6-14/)
* [2025-03-21, 02:37:00](https://soylentnews.org/article.pl?sid=25/03/19/1458230&from=rss) - [New Undersea Cable Tech Listens For Sabotage  Can Be Retrofitted To Existing Fiber Optic Line](https://soylentnews.org/article.pl?sid=25/03/19/1458230&from=rss)
* [2025-03-21, 02:00:00](https://entertainment.slashdot.org/story/25/03/20/1834218/lgs-nft-marketplace-for-tvs-is-shutting-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [LG's NFT Marketplace For TVs is Shutting Down](https://entertainment.slashdot.org/story/25/03/20/1834218/lgs-nft-marketplace-for-tvs-is-shutting-down?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 01:46:31](https://news.ycombinator.com/item?id=43431068) - [The indieweb doesn't need to “take off”](https://susam.net/indieweb-does-not-need-to-take-off.html)
* [2025-03-21, 00:01:42](https://lobste.rs/s/sdi7d9/dear_apple_google_still_no_app_rollbacks) - [Dear Apple and Google: still no app rollbacks?](https://www.tramline.app/blog/dear-apple-and-google-still-no-app-rollbacks)
* [2025-03-20, 23:30:00](https://tech.slashdot.org/story/25/03/20/1910204/worlds-tiniest-led-display-has-pixels-smaller-than-a-virus?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [World's Tiniest LED Display Has Pixels Smaller Than a Virus](https://tech.slashdot.org/story/25/03/20/1910204/worlds-tiniest-led-display-has-pixels-smaller-than-a-virus?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 22:20:09](https://lobste.rs/s/ow0koa/cmake_4_0_release_notes) - [CMake 4.0 Release Notes](https://cmake.org/cmake/help/latest/release/4.0.html)
* [2025-03-20, 22:00:00](https://hardware.slashdot.org/story/25/03/20/1853218/hp-escapes-customer-payouts-in-printer-bricking-lawsuit-settlement?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [HP Escapes Customer Payouts in Printer-Bricking Lawsuit Settlement](https://hardware.slashdot.org/story/25/03/20/1853218/hp-escapes-customer-payouts-in-printer-bricking-lawsuit-settlement?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 21:56:00](https://soylentnews.org/article.pl?sid=25/03/19/1456215&from=rss) - [Microsoft's Quantum Breakthrough Claim Labeled 'Unreliable'](https://soylentnews.org/article.pl?sid=25/03/19/1456215&from=rss)
* [2025-03-20, 21:54:17](https://news.ycombinator.com/item?id=43429417) - [Retro Boy: simple Game Boy emulator written in Rust, can be played on the web](https://github.com/smparsons/retroboy)
* [2025-03-20, 21:37:10](https://lobste.rs/s/sknzdg/anubis_self_hostable_scraper_defense) - [Anubis: self hostable scraper defense software](https://anubis.techaro.lol/)
* [2025-03-20, 21:00:00](https://tech.slashdot.org/story/25/03/20/1839239/gmail-rolls-out-ai-powered-search?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Gmail Rolls Out AI-Powered Search](https://tech.slashdot.org/story/25/03/20/1839239/gmail-rolls-out-ai-powered-search?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 20:20:52](https://lobste.rs/s/zojlfy/turning_my_esp32_into_dns_sinkhole_fight) - [Turning my ESP32 into a DNS sinkhole to fight doomscrolling](https://amanvir.com/blog/turning-my-esp32-into-a-dns-sinkhole)
* [2025-03-20, 20:00:00](https://news.slashdot.org/story/25/03/20/1918213/kids-are-spending-too-much-class-time-on-laptops?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Kids Are Spending Too Much Class Time on Laptops'](https://news.slashdot.org/story/25/03/20/1918213/kids-are-spending-too-much-class-time-on-laptops?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 19:08:44](https://lobste.rs/s/csdwrg/deliberate_practice_for_developers) - [Deliberate Practice for Developers](https://alexalejandre.com/programming/deliberate-practice-for-developers/)
* [2025-03-20, 19:02:00](https://tech.slashdot.org/story/25/03/20/1811249/ai-driven-weather-prediction-breakthrough-reported?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI-Driven Weather Prediction Breakthrough Reported](https://tech.slashdot.org/story/25/03/20/1811249/ai-driven-weather-prediction-breakthrough-reported?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 18:27:33](https://lobste.rs/s/imht55/tiling_window_managers_on_macos) - [Tiling Window Managers on macOS](https://lilysthings.org/blog/tiling-macos/)
* [2025-03-20, 18:01:00](https://slashdot.org/story/25/03/20/177251/ibm-cuts-thousands-of-jobs-cloud-classic-unit-hit-hard-report?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [IBM Cuts Thousands of Jobs, Cloud Classic Unit Hit Hard: Report](https://slashdot.org/story/25/03/20/177251/ibm-cuts-thousands-of-jobs-cloud-classic-unit-hit-hard-report?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 17:25:21](https://lobste.rs/s/48hqpz/faster_interpreters_go_catching_up_with_c) - [Faster interpreters in Go: Catching up with C++](https://planetscale.com/blog/faster-interpreters-in-go-catching-up-with-cpp)
* [2025-03-20, 17:18:00](https://news.ycombinator.com/item?id=43426022) - [OpenAI Audio Models](https://www.openai.fm/)
* [2025-03-20, 17:08:00](https://soylentnews.org/politics/article.pl?sid=25/03/19/1440251&from=rss) - [FTC Removes Posts Critical of Amazon, Microsoft, and AI Companies](https://soylentnews.org/politics/article.pl?sid=25/03/19/1440251&from=rss)
* [2025-03-20, 17:01:00](https://it.slashdot.org/story/25/03/20/170225/nvidia-sells-rtx-gpus-from-a-food-truck?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia Sells RTX GPUs From a 'Food Truck'](https://it.slashdot.org/story/25/03/20/170225/nvidia-sells-rtx-gpus-from-a-food-truck?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 16:51:12](https://news.ycombinator.com/item?id=43425655) - [Claude can now search the web](https://www.anthropic.com/news/web-search)
* [2025-03-20, 16:38:30](https://lobste.rs/s/iguimj/dead_simple_snapshot_testing_zig) - [Dead Simple Snapshot Testing In Zig](https://kristoff.it/blog/dead-simple-snapshot-testing/)
* [2025-03-20, 16:07:00](https://apple.slashdot.org/story/25/03/20/168205/apple-shakes-up-ai-executive-ranks-in-bid-to-turn-around-siri?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Shakes Up AI Executive Ranks in Bid to Turn Around Siri](https://apple.slashdot.org/story/25/03/20/168205/apple-shakes-up-ai-executive-ranks-in-bid-to-turn-around-siri?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 15:31:29](https://lobste.rs/s/xhxvr9/life_altering_postgresql_patterns) - [Life Altering Postgresql Patterns](https://mccue.dev/pages/3-11-25-life-altering-postgresql-patterns)
* [2025-03-20, 15:00:00](https://science.slashdot.org/story/25/03/20/1431243/is-dark-energy-getting-weaker-new-evidence-strengthens-the-case?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Is Dark Energy Getting Weaker? New Evidence Strengthens the Case.](https://science.slashdot.org/story/25/03/20/1431243/is-dark-energy-getting-weaker-new-evidence-strengthens-the-case?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 14:53:32](https://lobste.rs/s/f6ciaz/national_security_case_for_email_plus) - [The National Security Case for Email Plus Addressing](https://sagi.io//the-national-security-case-for-email-plus-addressing/)
* [2025-03-20, 14:33:28](https://news.ycombinator.com/item?id=43424065) - [ACARS Drama](https://acarsdrama.com/)
* [2025-03-20, 14:02:16](https://lobste.rs/s/84qcvn/how_nixos_reproducible_builds_could_have) - [How NixOS and reproducible builds could have detected the xz backdoorfor the benefit of all](https://luj.fr/blog/how-nixos-could-have-detected-xz.html)
* [2025-03-20, 14:02:00](https://apple.slashdot.org/story/25/03/20/142227/pebble-founder-warns-of-limited-iphone-compatibility-for-revived-smartwatch?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Pebble Founder Warns of Limited iPhone Compatibility for Revived Smartwatch](https://apple.slashdot.org/story/25/03/20/142227/pebble-founder-warns-of-limited-iphone-compatibility-for-revived-smartwatch?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 12:25:31](https://news.ycombinator.com/item?id=43422162) - [The Frontend Treadmill](https://polotek.net/posts/the-frontend-treadmill/)
* [2025-03-20, 12:25:00](https://soylentnews.org/article.pl?sid=25/03/19/120255&from=rss) - [Apple Loses 2025 Antitrust Appeal in Germany](https://soylentnews.org/article.pl?sid=25/03/19/120255&from=rss)
* [2025-03-20, 10:13:40](https://lobste.rs/s/z4halj/half_constructed_objects_are) - [Half Constructed Objects Are Unnecessary](https://jerf.org/iri/post/2025/fp_lessons_half_constructed_objects/)
* [2025-03-20, 08:34:24](https://lobste.rs/s/z9dtvj/non_obvious_haskell_idiom_guard_sequence) - [Non-Obvious Haskell Idiom: Guard-Sequence](https://entropicthoughts.com/non-obvious-haskell-idiom-guard-sequence)
* [2025-03-20, 07:41:00](https://soylentnews.org/article.pl?sid=25/03/19/1152214&from=rss) - [Firefly Bids Farewell to its Lunar Lander After 14 Days on the Moon](https://soylentnews.org/article.pl?sid=25/03/19/1152214&from=rss)
* [2025-03-20, 03:37:31](https://news.ycombinator.com/item?id=43419701) - [The Pain That Is GitHub Actions](https://www.feldera.com/blog/the-pain-that-is-github-actions)
* [2025-03-20, 02:57:00](https://soylentnews.org/article.pl?sid=25/03/19/1145216&from=rss) - [UK's Internet Watchdog Puts Storage and File-Sharing Services on Watch Over CSAM](https://soylentnews.org/article.pl?sid=25/03/19/1145216&from=rss)
* [2025-03-19, 22:14:00](https://soylentnews.org/article.pl?sid=25/03/18/1622242&from=rss) - [Tobacco's Hidden Friendly Side: How the Controversial Plant Could be Used for Good](https://soylentnews.org/article.pl?sid=25/03/18/1622242&from=rss)
* [2025-03-19, 17:29:00](https://soylentnews.org/article.pl?sid=25/03/18/1610234&from=rss) - [U.S. Atari Parts Store Still Open After 41 Years, Has Spent $100K+ Designing New Parts](https://soylentnews.org/article.pl?sid=25/03/18/1610234&from=rss)
* [2025-03-19, 14:10:40](https://lobste.rs/s/1hexlm/no_longer_my_favorite_git_commit) - [No Longer My Favorite Git Commit](https://mtlynch.io/no-longer-my-favorite-git-commit/)
* [2025-03-19, 12:46:00](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss) - [Discord Launches SDK to Help Developers Enhance Social Experiences in Their Games](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss)
* [2025-03-19, 08:02:00](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss) - [Iguanas Floated One-Fifth of the Way Around the World to Colonize Fiji, Genetic Analysis Indicates](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss)
* [2025-03-19, 03:18:00](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss) - [Everything You Say to Your Echo Will be Sent to Amazon Starting on March 28](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss)
* [2025-03-18, 22:33:00](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss) - [People are Using Google's New AI Model to Remove Watermarks From Images](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss)
* [2025-03-18, 17:49:00](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss) - [Unearthed Notebooks Shed Light on Victorian Genius Who Inspired Einstein](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss)
* [2025-03-18, 17:23:30](https://news.ycombinator.com/item?id=43402058) - [NASA Whoosh Rocket](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/whoosh-rocket/)
* [2025-03-18, 13:07:00](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss) - [On the Road to Idiocracy](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss)
* [2025-03-18, 11:25:54](https://news.ycombinator.com/item?id=43398148) - [Debugging PostgreSQL More Easily](https://www.cybertec-postgresql.com/en/debugging-postgresql-more-easily/)
* [2025-03-18, 10:18:12](https://news.ycombinator.com/item?id=43397640) - [Sync Engines Are the Future](https://www.instantdb.com/essays/sync_future)
* [2025-03-18, 10:15:41](https://news.ycombinator.com/item?id=43397625) - [Manifest: A 1-file micro-back end](https://github.com/mnfst/manifest)
* [2025-03-18, 09:00:16](https://news.ycombinator.com/item?id=43397055) - [Component Simplicity](https://jerf.org/iri/post/2025/fp_lessons_simplicity/)
* [2025-03-18, 08:24:00](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss) - [Forget Windows 11, SteamOS for Desktops May be Released Soon](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss)
* [2025-03-18, 03:38:00](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss) - [Chaos in Gravity - the Quantum Based Magnetic Monopole of Mass?](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss)
* [2025-03-18, 00:56:19](https://news.ycombinator.com/item?id=43394591) - [Zero-knowledge proofs, encoding Sudoku and Mario speedruns without semantic leak](https://vasekrozhon.wordpress.com/2025/03/17/zero-knowledge-proofs/)
* [2025-03-17, 22:53:00](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss) - [OpenAI Wants All The Data And For US Law To Apply Everywhere](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss)
* [2025-03-17, 21:08:03](https://news.ycombinator.com/item?id=43392753) - [Help Identify the Photographer Who Captured Many Images of 1960s San Francisco](https://www.smithsonianmag.com/smart-news/can-you-identify-the-mystery-photographer-who-captured-thousands-of-captivating-images-of-1960s-san-francisco-180986107/)
* [2025-03-17, 18:11:00](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss) - [Six Weeks of CloudFlare Stalling; Still Blocking Niche Browsers](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss)
* [2025-03-17, 16:07:16](https://news.ycombinator.com/item?id=43389970) - [The mistakes and missed opportunities in the design of IPv6](https://ipv6.hanazo.no/posts/ipv6-missed-opportunities-1)
* [2025-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss) - [NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss)
* [2025-03-17, 13:11:23](https://news.ycombinator.com/item?id=43388218) - [History of Null Pointer Dereferences on macOS](https://afine.com/history-of-null-pointer-dereferences-on-macos/)
* [2025-03-17, 12:53:52](https://news.ycombinator.com/item?id=43388024) - [McLaren invented new carbon fiber tape to build even more complex parts](https://www.thedrive.com/news/mclaren-invented-new-carbon-fiber-tape-to-build-even-more-complex-parts)
* [2025-03-17, 08:36:00](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss) - [World's Smallest Microcontroller](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss)
* [2025-03-17, 03:50:00](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss) - [ESA Cuts the Ribbon at 34,000-Core HPC Center](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss)
* [2025-03-17, 02:42:16](https://news.ycombinator.com/item?id=43384697) - [Next generation LEDs are cheap and sustainable](https://liu.se/en/news-item/nasta-generations-lysdioder-ar-billiga-och-miljovanliga)
