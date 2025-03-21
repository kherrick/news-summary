# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Hardware Innovations

* [World's Tiniest LED Display Has Pixels Smaller Than a Virus](https://tech.slashdot.org/story/25/03/20/1910204/worlds-tiniest-led-display-has-pixels-smaller-than-a-virus?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers have developed an ultra-tiny LED display system with pixels smaller than a virus, opening doors to next-gen display technology. [Comments](https://tech.slashdot.org/story/25/03/20/1910204/worlds-tiniest-led-display-has-pixels-smaller-than-a-virus?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Microsoft Developing Windows 11 Feature To Explain Hardware Performance Issues](https://tech.slashdot.org/story/25/03/20/112211/microsoft-developing-windows-11-feature-to-explain-hardware-performance-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A new Windows 11 feature aims to demystify hardware bottlenecks, offering explanations for lagging systems. [Comments](https://tech.slashdot.org/story/25/03/20/112211/microsoft-developing-windows-11-feature-to-explain-hardware-performance-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Next generation LEDs are cheap and sustainable](https://liu.se/en/news-item/nasta-generations-lysdioder-ar-billiga-och-miljovanliga) - Sustainable and low-cost LED technology shows promise to replace conventional lighting systems. [Comments](https://news.ycombinator.com/item?id=43384697)

## Advancements in Artificial Intelligence

* [Claude can now search the web](https://www.anthropic.com/news/web-search) - The AI chatbot Claude extends its capabilites with web-search, giving it real-time context capabilities. [Comments](https://news.ycombinator.com/item?id=43425655)

* [AI-Driven Weather Prediction Breakthrough Reported](https://tech.slashdot.org/story/25/03/20/1811249/ai-driven-weather-prediction-breakthrough-reported?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers claim a new AI model could revolutionize weather forecasting through unprecedented accuracy and capability. [Comments](https://tech.slashdot.org/story/25/03/20/1811249/ai-driven-weather-prediction-breakthrough-reported?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Policy and Social Issues in Technology

* [Trump Signs Order Aiming To Close the Education Department](https://news.slashdot.org/story/25/03/21/044244/trump-signs-order-aiming-to-close-the-education-department?utm_source=rss1.0mainlinkanon&utm_medium=feed) - President Trump takes a controversial step aimed at shutting down the Department of Education. [Comments](https://news.slashdot.org/story/25/03/21/044244/trump-signs-order-aiming-to-close-the-education-department?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Apple Loses 2025 Antitrust Appeal in Germany](https://soylentnews.org/article.pl?sid=25/03/19/120255&from=rss) - Apple faces a legal setback in Germany in a case that could have global implications for app store monopolies. [Comments](https://soylentnews.org/article.pl?sid=25/03/19/120255&from=rss)

## Open Source Highlights

* [Chimera Linux NOT dropping RISC-V support after all](https://chimera-linux.org/news/2025/03/new-riscv-server.html) - Contrary to earlier concerns, Chimera Linux reaffirms its commitment to RISC-V, showcasing its open-source alignment. [Comments](https://lobste.rs/s/6vbtjd/chimera_linux_not_dropping_risc_v_support)

* [Retro Boy: simple Game Boy emulator written in Rust, can be played on the web](https://github.com/smparsons/retroboy) - A lightweight Game Boy emulator designed in Rust offers a new way of enjoying retro gaming. [Comments](https://news.ycombinator.com/item?id=43429417)

## Society and Sustainability

* [Oxygen discovered in most distant known galaxy](https://www.eso.org/public/news/eso2507/) - Groundbreaking discovery marks the most distant known detection of oxygen in the universe. [Comments](https://news.ycombinator.com/item?id=43422909)

* [Tobacco's Hidden Friendly Side: How the Controversial Plant Could be Used for Good](https://soylentnews.org/article.pl?sid=25/03/18/1622242&from=rss) - Researchers highlight potential non-smoking uses of tobacco for environmental and medicinal benefits. [Comments](https://soylentnews.org/article.pl?sid=25/03/18/1622242&from=rss)

## Curious and Miscellaneous

* [Nvidia Sells RTX GPUs From a 'Food Truck'](https://it.slashdot.org/story/25/03/20/170225/nvidia-sells-rtx-gpus-from-a-food-truck?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Nvidia adopts an innovative retail model by selling GPUs directly from a food truck. [Comments](https://it.slashdot.org/story/25/03/20/170225/nvidia-sells-rtx-gpus-from-a-food-truck?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Iguanas Floated One-Fifth of the Way Around the World to Colonize Fiji, Genetic Analysis Indicates](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss) - Extraordinary genetic evidence supports how iguanas colonized Fiji after an epic drift journey. [Comments](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss)

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

* [2025-03-21, 05:52:42](https://lobste.rs/s/6vbtjd/chimera_linux_not_dropping_risc_v_support) - [Chimera Linux NOT dropping RISC-V support after all](https://chimera-linux.org/news/2025/03/new-riscv-server.html)
* [2025-03-21, 05:37:04](https://lobste.rs/s/iopiee/hyper_mcp_mcp_server_rust_with_plugin) - [Hyper-MCP - MCP server in Rust with plugin system powered by WebAssembly and OCI registry](https://github.com/tuananh/hyper-mcp)
* [2025-03-21, 04:22:38](https://lobste.rs/s/qnndyo/peanoscript_typescript_it_s_theorem) - [PeanoScript: TypeScript but it's a theorem prover](https://peanoscript.mjgrzymek.com/tutorial)
* [2025-03-21, 04:16:32](https://news.ycombinator.com/item?id=43431780) - [Boycott IETF 127](https://boycott-ietf127.org/)
* [2025-03-21, 04:04:00](https://news.slashdot.org/story/25/03/21/044244/trump-signs-order-aiming-to-close-the-education-department?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Trump Signs Order Aiming To Close the Education Department](https://news.slashdot.org/story/25/03/21/044244/trump-signs-order-aiming-to-close-the-education-department?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 03:37:10](https://news.ycombinator.com/item?id=43431587) - [iPhones were being stolen off porches right after delivery, and now we know how](https://9to5mac.com/2025/03/20/iphones-were-being-stolen-off-porches-right-after-delivery-and-now-we-know-how/)
* [2025-03-21, 03:21:12](https://news.ycombinator.com/item?id=43431522) - [The head of South Korea's guard consulted ChatGPT before martial law was imposed](https://www.hani.co.kr/arti/society/society_general/1187705.html)
* [2025-03-21, 03:04:37](https://lobste.rs/s/ahk6h5/vibe_coding_vs_reality) - [\"Vibe Coding\" vs Reality](https://cendyne.dev/posts/2025-03-19-vibe-coding-vs-reality.html)
* [2025-03-21, 02:37:00](https://soylentnews.org/article.pl?sid=25/03/19/1458230&from=rss) - [New Undersea Cable Tech Listens For Sabotage  Can Be Retrofitted To Existing Fiber Optic Line](https://soylentnews.org/article.pl?sid=25/03/19/1458230&from=rss)
* [2025-03-21, 02:00:00](https://entertainment.slashdot.org/story/25/03/20/1834218/lgs-nft-marketplace-for-tvs-is-shutting-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [LG's NFT Marketplace For TVs is Shutting Down](https://entertainment.slashdot.org/story/25/03/20/1834218/lgs-nft-marketplace-for-tvs-is-shutting-down?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-21, 01:46:31](https://news.ycombinator.com/item?id=43431068) - [The IndieWeb Doesn't Need to \"Take Off\"](https://susam.net/indieweb-does-not-need-to-take-off.html)
* [2025-03-21, 01:06:42](https://news.ycombinator.com/item?id=43430856) - [SmolDocling: An ultra-compact VLM for end-to-end multi-modal document conversion](https://arxiv.org/abs/2503.11576)
* [2025-03-21, 00:49:10](https://news.ycombinator.com/item?id=43430750) - [Chibi: PNG-tuber application made in Rust](https://github.com/megabytesofrem/chibi)
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
* [2025-03-20, 19:33:30](https://news.ycombinator.com/item?id=43427850) - [Show HN: Minimalytics – a standalone minimal analytics app built on SQLite](https://github.com/nafey/minimalytics)
* [2025-03-20, 19:29:57](https://lobste.rs/s/znta7f/oscura_vim_vim_port_for_oscura_theme_for) - [oscura-vim: Vim port for Oscura theme for Vscode](https://github.com/vinitkumar/oscura-vim)
* [2025-03-20, 19:08:44](https://lobste.rs/s/csdwrg/deliberate_practice_for_developers) - [Deliberate Practice for Developers](https://alexalejandre.com/programming/deliberate-practice-for-developers/)
* [2025-03-20, 19:02:00](https://tech.slashdot.org/story/25/03/20/1811249/ai-driven-weather-prediction-breakthrough-reported?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI-Driven Weather Prediction Breakthrough Reported](https://tech.slashdot.org/story/25/03/20/1811249/ai-driven-weather-prediction-breakthrough-reported?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 18:27:33](https://lobste.rs/s/imht55/tiling_window_managers_on_macos) - [Tiling Window Managers on macOS](https://lilysthings.org/blog/tiling-macos/)
* [2025-03-20, 18:24:17](https://news.ycombinator.com/item?id=43427002) - [The Burnout Machine](https://unionize.fyi)
* [2025-03-20, 18:01:00](https://slashdot.org/story/25/03/20/177251/ibm-cuts-thousands-of-jobs-cloud-classic-unit-hit-hard-report?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [IBM Cuts Thousands of Jobs, Cloud Classic Unit Hit Hard: Report](https://slashdot.org/story/25/03/20/177251/ibm-cuts-thousands-of-jobs-cloud-classic-unit-hit-hard-report?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 17:25:21](https://lobste.rs/s/48hqpz/faster_interpreters_go_catching_up_with_c) - [Faster interpreters in Go: Catching up with C++](https://planetscale.com/blog/faster-interpreters-in-go-catching-up-with-cpp)
* [2025-03-20, 17:18:00](https://news.ycombinator.com/item?id=43426022) - [OpenAI Audio Models](https://www.openai.fm/)
* [2025-03-20, 17:08:00](https://soylentnews.org/politics/article.pl?sid=25/03/19/1440251&from=rss) - [FTC Removes Posts Critical of Amazon, Microsoft, and AI Companies](https://soylentnews.org/politics/article.pl?sid=25/03/19/1440251&from=rss)
* [2025-03-20, 17:01:00](https://it.slashdot.org/story/25/03/20/170225/nvidia-sells-rtx-gpus-from-a-food-truck?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia Sells RTX GPUs From a 'Food Truck'](https://it.slashdot.org/story/25/03/20/170225/nvidia-sells-rtx-gpus-from-a-food-truck?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 16:55:57](https://lobste.rs/s/yknllw/leaking_passwords_more_on_macos) - [Leaking passwords (and more!) on macOS](https://wts.dev/posts/password-leak/)
* [2025-03-20, 16:51:12](https://news.ycombinator.com/item?id=43425655) - [Claude can now search the web](https://www.anthropic.com/news/web-search)
* [2025-03-20, 16:38:30](https://lobste.rs/s/iguimj/dead_simple_snapshot_testing_zig) - [Dead Simple Snapshot Testing In Zig](https://kristoff.it/blog/dead-simple-snapshot-testing/)
* [2025-03-20, 16:07:00](https://apple.slashdot.org/story/25/03/20/168205/apple-shakes-up-ai-executive-ranks-in-bid-to-turn-around-siri?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Shakes Up AI Executive Ranks in Bid to Turn Around Siri](https://apple.slashdot.org/story/25/03/20/168205/apple-shakes-up-ai-executive-ranks-in-bid-to-turn-around-siri?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 15:31:29](https://lobste.rs/s/xhxvr9/life_altering_postgresql_patterns) - [Life Altering Postgresql Patterns](https://mccue.dev/pages/3-11-25-life-altering-postgresql-patterns)
* [2025-03-20, 15:00:00](https://science.slashdot.org/story/25/03/20/1431243/is-dark-energy-getting-weaker-new-evidence-strengthens-the-case?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Is Dark Energy Getting Weaker? New Evidence Strengthens the Case.](https://science.slashdot.org/story/25/03/20/1431243/is-dark-energy-getting-weaker-new-evidence-strengthens-the-case?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 14:58:12](https://lobste.rs/s/bzjmio/c_implementation_defer_using_goto) - [A C implementation of defer using `goto`](https://gist.github.com/viega/f063010765a47ca9aa000a75ec55f8e2)
* [2025-03-20, 14:53:32](https://lobste.rs/s/f6ciaz/national_security_case_for_email_plus) - [The National Security Case for Email Plus Addressing](https://sagi.io//the-national-security-case-for-email-plus-addressing/)
* [2025-03-20, 14:33:28](https://news.ycombinator.com/item?id=43424065) - [ACARS Drama](https://acarsdrama.com/)
* [2025-03-20, 14:02:16](https://lobste.rs/s/84qcvn/how_nixos_reproducible_builds_could_have) - [How NixOS and reproducible builds could have detected the xz backdoorfor the benefit of all](https://luj.fr/blog/how-nixos-could-have-detected-xz.html)
* [2025-03-20, 14:02:00](https://apple.slashdot.org/story/25/03/20/142227/pebble-founder-warns-of-limited-iphone-compatibility-for-revived-smartwatch?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Pebble Founder Warns of Limited iPhone Compatibility for Revived Smartwatch](https://apple.slashdot.org/story/25/03/20/142227/pebble-founder-warns-of-limited-iphone-compatibility-for-revived-smartwatch?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 13:57:30](https://news.ycombinator.com/item?id=43423523) - [Grease: An Open-Source Tool for Uncovering Hidden Vulnerabilities in Binary Code](https://www.galois.com/articles/introducing-grease)
* [2025-03-20, 13:28:44](https://news.ycombinator.com/item?id=43423032) - [The Last Drops of Mexico City](https://mexicocitywater.longlead.com)
* [2025-03-20, 13:21:34](https://news.ycombinator.com/item?id=43422909) - [Oxygen discovered in most distant known galaxy](https://www.eso.org/public/news/eso2507/)
* [2025-03-20, 13:05:00](https://news.slashdot.org/story/25/03/20/135242/there-are-two-kinds-of-credit-cards?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['There Are Two Kinds of Credit Cards'](https://news.slashdot.org/story/25/03/20/135242/there-are-two-kinds-of-credit-cards?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 12:25:31](https://news.ycombinator.com/item?id=43422162) - [The Frontend Treadmill](https://polotek.net/posts/the-frontend-treadmill/)
* [2025-03-20, 12:25:00](https://soylentnews.org/article.pl?sid=25/03/19/120255&from=rss) - [Apple Loses 2025 Antitrust Appeal in Germany](https://soylentnews.org/article.pl?sid=25/03/19/120255&from=rss)
* [2025-03-20, 12:09:32](https://news.ycombinator.com/item?id=43422033) - [Understanding Solar Energy](https://www.construction-physics.com/p/understanding-solar-energy)
* [2025-03-20, 11:55:13](https://news.ycombinator.com/item?id=43421934) - [Powers of 2 with all even digits](https://oeis.org/A068994)
* [2025-03-20, 11:02:00](https://tech.slashdot.org/story/25/03/20/112211/microsoft-developing-windows-11-feature-to-explain-hardware-performance-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Developing Windows 11 Feature To Explain Hardware Performance Issues](https://tech.slashdot.org/story/25/03/20/112211/microsoft-developing-windows-11-feature-to-explain-hardware-performance-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 10:18:45](https://lobste.rs/s/wrsr3j/healthyig_instagram_without_all_toxic) - [HealthyIG: Instagram without all the toxic features like reels, home page, explore page](https://github.com/AlessandroBonomo28/HealthyIG)
* [2025-03-20, 10:13:40](https://lobste.rs/s/z4halj/half_constructed_objects_are) - [Half Constructed Objects Are Unnecessary](https://jerf.org/iri/post/2025/fp_lessons_half_constructed_objects/)
* [2025-03-20, 09:40:50](https://lobste.rs/s/nukfa9/cve_2024_9956_passkey_account_takeover) - [CVE-2024-9956 - PassKey Account Takeover in All Mobile Browsers](https://mastersplinter.work/research/passkey/)
* [2025-03-20, 08:34:24](https://lobste.rs/s/z9dtvj/non_obvious_haskell_idiom_guard_sequence) - [Non-Obvious Haskell Idiom: Guard-Sequence](https://entropicthoughts.com/non-obvious-haskell-idiom-guard-sequence)
* [2025-03-20, 08:05:00](https://news.slashdot.org/story/25/03/20/086201/government-releases-thousands-of-declassified-pages-related-to-jfk-assassination?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Government Releases Thousands of Declassified Pages Related To JFK Assassination](https://news.slashdot.org/story/25/03/20/086201/government-releases-thousands-of-declassified-pages-related-to-jfk-assassination?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 08:00:54](https://news.ycombinator.com/item?id=43420683) - [Minding the gaps: A new way to draw separators in CSS](https://blogs.windows.com/msedgedev/2025/03/19/minding-the-gaps-a-new-way-to-draw-separators-in-css/)
* [2025-03-20, 07:41:00](https://soylentnews.org/article.pl?sid=25/03/19/1152214&from=rss) - [Firefly Bids Farewell to its Lunar Lander After 14 Days on the Moon](https://soylentnews.org/article.pl?sid=25/03/19/1152214&from=rss)
* [2025-03-20, 03:37:31](https://news.ycombinator.com/item?id=43419701) - [The Pain That Is GitHub Actions](https://www.feldera.com/blog/the-pain-that-is-github-actions)
* [2025-03-20, 02:57:00](https://soylentnews.org/article.pl?sid=25/03/19/1145216&from=rss) - [UK's Internet Watchdog Puts Storage and File-Sharing Services on Watch Over CSAM](https://soylentnews.org/article.pl?sid=25/03/19/1145216&from=rss)
* [2025-03-19, 23:51:23](https://lobste.rs/s/xg2chc/passive_voice_considered_harmful) - [Passive Voice Considered Harmful](https://refactoringenglish.com/chapters/passive-voice-considered-harmful/)
* [2025-03-19, 22:14:00](https://soylentnews.org/article.pl?sid=25/03/18/1622242&from=rss) - [Tobacco's Hidden Friendly Side: How the Controversial Plant Could be Used for Good](https://soylentnews.org/article.pl?sid=25/03/18/1622242&from=rss)
* [2025-03-19, 17:29:00](https://soylentnews.org/article.pl?sid=25/03/18/1610234&from=rss) - [U.S. Atari Parts Store Still Open After 41 Years, Has Spent $100K+ Designing New Parts](https://soylentnews.org/article.pl?sid=25/03/18/1610234&from=rss)
* [2025-03-19, 15:59:12](https://lobste.rs/s/mg1khc/does_unsafe_undermine_rust_s_guarantees) - [Does unsafe undermine Rust's guarantees?](https://steveklabnik.com/writing/does-unsafe-undermine-rusts-guarantees/)
* [2025-03-19, 14:10:40](https://lobste.rs/s/1hexlm/no_longer_my_favorite_git_commit) - [No Longer My Favorite Git Commit](https://mtlynch.io/no-longer-my-favorite-git-commit/)
* [2025-03-19, 12:46:00](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss) - [Discord Launches SDK to Help Developers Enhance Social Experiences in Their Games](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss)
* [2025-03-19, 08:02:00](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss) - [Iguanas Floated One-Fifth of the Way Around the World to Colonize Fiji, Genetic Analysis Indicates](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss)
* [2025-03-19, 03:18:00](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss) - [Everything You Say to Your Echo Will be Sent to Amazon Starting on March 28](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss)
* [2025-03-18, 22:33:00](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss) - [People are Using Google's New AI Model to Remove Watermarks From Images](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss)
* [2025-03-18, 17:49:00](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss) - [Unearthed Notebooks Shed Light on Victorian Genius Who Inspired Einstein](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss)
* [2025-03-18, 17:23:30](https://news.ycombinator.com/item?id=43402058) - [NASA Whoosh Rocket](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/whoosh-rocket/)
* [2025-03-18, 13:07:00](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss) - [On the Road to Idiocracy](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss)
* [2025-03-18, 11:25:54](https://news.ycombinator.com/item?id=43398148) - [Debugging PostgreSQL More Easily](https://www.cybertec-postgresql.com/en/debugging-postgresql-more-easily/)
* [2025-03-18, 10:40:48](https://news.ycombinator.com/item?id=43397811) - [QRP Labs QMX SSB beta firmware relased](https://qrp-labs.com/qmxp/ssbbeta.html)
* [2025-03-18, 10:18:12](https://news.ycombinator.com/item?id=43397640) - [Sync Engines Are the Future](https://www.instantdb.com/essays/sync_future)
* [2025-03-18, 08:24:00](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss) - [Forget Windows 11, SteamOS for Desktops May be Released Soon](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss)
* [2025-03-18, 05:57:56](https://news.ycombinator.com/item?id=43396172) - [Build a Container Image from Scratch](https://danishpraka.sh/posts/build-a-container-image-from-scratch/)
* [2025-03-18, 03:38:00](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss) - [Chaos in Gravity - the Quantum Based Magnetic Monopole of Mass?](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss)
* [2025-03-18, 00:56:19](https://news.ycombinator.com/item?id=43394591) - [Zero-knowledge proofs, encoding Sudoku and Mario speedruns without semantic leak](https://vasekrozhon.wordpress.com/2025/03/17/zero-knowledge-proofs/)
* [2025-03-17, 22:53:00](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss) - [OpenAI Wants All The Data And For US Law To Apply Everywhere](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss)
* [2025-03-17, 21:08:03](https://news.ycombinator.com/item?id=43392753) - [Help Identify the Photographer Who Captured Many Images of 1960s San Francisco](https://www.smithsonianmag.com/smart-news/can-you-identify-the-mystery-photographer-who-captured-thousands-of-captivating-images-of-1960s-san-francisco-180986107/)
* [2025-03-17, 18:11:00](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss) - [Six Weeks of CloudFlare Stalling; Still Blocking Niche Browsers](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss)
* [2025-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss) - [NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss)
* [2025-03-17, 13:11:23](https://news.ycombinator.com/item?id=43388218) - [History of Null Pointer Dereferences on macOS](https://afine.com/history-of-null-pointer-dereferences-on-macos/)
* [2025-03-17, 12:53:52](https://news.ycombinator.com/item?id=43388024) - [McLaren Invented New Carbon Fiber Tape to Build Even More Complex Parts](https://www.thedrive.com/news/mclaren-invented-new-carbon-fiber-tape-to-build-even-more-complex-parts)
* [2025-03-17, 08:36:00](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss) - [World's Smallest Microcontroller](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss)
* [2025-03-17, 03:50:00](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss) - [ESA Cuts the Ribbon at 34,000-Core HPC Center](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss)
* [2025-03-17, 02:42:16](https://news.ycombinator.com/item?id=43384697) - [Next generation LEDs are cheap and sustainable](https://liu.se/en/news-item/nasta-generations-lysdioder-ar-billiga-och-miljovanliga)
