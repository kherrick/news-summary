# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Announcements

* [Arm Unveils New AGI CPU With Meta As Debut Customer](https://hardware.slashdot.org/story/26/03/24/1933211/arm-unveils-new-agi-cpu-with-meta-as-debut-customer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Arm has launched its new AGI CPU, with Meta as its first customer, aiming to enhance capabilities in AI processing.

* [Announcing TypeScript 6.0](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/) - Microsoft announces TypeScript 6.0, featuring enhancements for developers and new language features.

* [Rust threads on the GPU](https://vectorware.com/blog/threads-on-gpu/) - A detailed exploration of how Rust supports threading on GPUs to optimize parallel processing workloads.

* [Hypura – A storage-tier-aware LLM inference scheduler for Apple Silicon](https://github.com/t8/hypura) - Introducing Hypura, a tool designed to optimize large language model performance specifically for Apple Silicon hardware.

## Artificial Intelligence and Software Developments

* [I wanted to build vertical SaaS for pest control, so I took a technician job](https://www.onhand.pro/p/i-wanted-to-build-vertical-saas-for-pest-control-i-took-a-technician-job-instead) - An entrepreneur documents their journey of gaining hands-on experience to create a vertical SaaS product for pest control.

* [Disney Exits OpenAI Deal After AI Giant Shutters Sora](https://www.hollywoodreporter.com/business/digital/openai-shutting-down-sora-ai-video-app-1236546187/) - Disney parts ways with OpenAI following the shutdown of the Sora AI video app.

* [Anthropic&apos;s Claude Can Now Use Your Computer To Finish Tasks](https://slashdot.org/story/26/03/24/1649222/anthropics-claude-can-now-use-your-computer-to-finish-tasks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Anthropic unveils new capabilities for their AI Claude, allowing it to utilize user computers for task completion.

## Cybersecurity and Software Integrity

* [Self-Propagating Malware Poisons Open Source Software, Wipes Iran-Based Machines](https://news.slashdot.org/story/26/03/24/1638228/self-propagating-malware-poisons-open-source-software-wipes-iran-based-machines?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A new malware strand targets open-source software, significantly affecting systems in Iran.

* [LiteLLM Compromised by Credential Stealer](https://futuresearch.ai/blog/litellm-pypi-supply-chain-attack/) - Credential theft impacts the LiteLLM library, raising concerns over the security of Python software supply chains.

* [Debunking zswap and zram myths](https://chrisdown.name/2026/03/24/zswap-vs-zram-when-to-use-what.html) - An analysis clears up misconceptions surrounding zswap and zram features in Linux.

## Gaming and Entertainment Updates

* [Wine 11 rewrites how Linux runs Windows games at kernel with massive speed gains](https://www.xda-developers.com/wine-11-rewrites-linux-runs-windows-games-speed-gains/) - Wine 11 brings major speed enhancements for running Windows games on Linux by reworking kernel-level handling.

* [Epic Games To Cut More Than 1,000 Jobs As Fortnite Usage Falls](https://games.slashdot.org/story/26/03/24/1628213/epic-games-to-cut-more-than-1000-jobs-as-fortnite-usage-falls?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Decline in Fortnite usage leads Epic Games to announce significant layoffs affecting over 1,000 employees.

* [Show HN: Gridland: make terminal apps that also run in the browser](https://www.gridland.io/) - Introducing Gridland, a tool that aids in building versatile terminal applications compatible with web browsers.

## Engineering, Programming, and Development Practices

* [Structuring Go projects](https://www.alexedwards.net/blog/11-tips-for-structuring-your-go-projects) - Expert advice on structuring Go projects effectively to maintain scalability and performance.

* [Adding structured concurrency to JavaScript](https://github.com/bakkot/structured-concurrency-for-js) - A proposal to incorporate structured concurrency into JavaScript, ensuring better coordination of asynchronous tasks.

* [Hegel, a universal property-based testing protocol and family of PBT libraries](https://hegel.dev) - Hegel introduces a unified property-based testing protocol for widespread use in testing libraries.

## Miscellaneous Highlights and Innovations

* [Missile Defense is NP-Complete](https://smu160.github.io/posts/missile-defense-is-np-complete/) - A mathematical exploration showing the complexities of missile defense systems being classified as NP-complete.

* [Show HN: ProofShot – Give AI coding agents eyes to verify the UI they build](https://github.com/AmElmo/proofshot) - ProofShot introduces a visual verification tool for AI coding agents, improving the accuracy of UI builds.

* [How the world’s first electric grid was built](https://worksinprogress.co/issue/how-the-worlds-first-electric-grid-was-built/) - A historical overview of the development of the world’s inaugural electric grid, paving the way for modern electricity distribution.

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

* [2026-03-24, 21:24:33](https://news.ycombinator.com/item?id=47509571) - [I wanted to build vertical SaaS for pest control, so I took a technician job](https://www.onhand.pro/p/i-wanted-to-build-vertical-saas-for-pest-control-i-took-a-technician-job-instead)
* [2026-03-24, 21:01:21](https://news.ycombinator.com/item?id=47509234) - [Disney Exits OpenAI Deal After AI Giant Shutters Sora](https://www.hollywoodreporter.com/business/digital/openai-shutting-down-sora-ai-video-app-1236546187/)
* [2026-03-24, 21:00:00](https://slashdot.org/story/26/03/24/2050222/openai-discontinues-sora-video-platform-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Discontinues Sora Video Platform App](https://slashdot.org/story/26/03/24/2050222/openai-discontinues-sora-video-platform-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 20:31:08](https://news.ycombinator.com/item?id=47508745) - [Is anybody else bored of talking about AI?](https://blog.jakesaunders.dev/is-anybody-else-bored-of-talking-about-ai/)
* [2026-03-24, 20:23:34](https://news.ycombinator.com/item?id=47508608) - [GitHub is once again down](https://www.githubstatus.com/incidents/kp06czybl7dw)
* [2026-03-24, 20:14:51](https://lobste.rs/s/ucympz/structuring_go_projects) - [Structuring Go projects](https://www.alexedwards.net/blog/11-tips-for-structuring-your-go-projects)
* [2026-03-24, 20:00:00](https://hardware.slashdot.org/story/26/03/24/1933211/arm-unveils-new-agi-cpu-with-meta-as-debut-customer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arm Unveils New AGI CPU With Meta As Debut Customer](https://hardware.slashdot.org/story/26/03/24/1933211/arm-unveils-new-agi-cpu-with-meta-as-debut-customer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 19:53:51](https://news.ycombinator.com/item?id=47508149) - [Welcome to FastMCP](https://gofastmcp.com/getting-started/welcome)
* [2026-03-24, 19:32:32](https://news.ycombinator.com/item?id=47507856) - [Show HN: Antimatter – Match the opposites (Mahjong solitaire mechanic)](https://www.linguabase.org/antimatter/)
* [2026-03-24, 19:04:48](https://lobste.rs/s/4sfusf/choose_boring_technology_innovative) - [Choose Boring Technology and Innovative Practices](https://buttondown.com/hillelwayne/archive/choose-boring-technology-and-innovative-practices/)
* [2026-03-24, 19:00:00](https://slashdot.org/story/26/03/24/1649222/anthropics-claude-can-now-use-your-computer-to-finish-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s Claude Can Now Use Your Computer To Finish Tasks](https://slashdot.org/story/26/03/24/1649222/anthropics-claude-can-now-use-your-computer-to-finish-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 18:34:52](https://news.ycombinator.com/item?id=47507150) - [Wine 11 rewrites how Linux runs Windows games at kernel with massive speed gains](https://www.xda-developers.com/wine-11-rewrites-linux-runs-windows-games-speed-gains/)
* [2026-03-24, 18:00:00](https://news.slashdot.org/story/26/03/24/1638228/self-propagating-malware-poisons-open-source-software-wipes-iran-based-machines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Self-Propagating Malware Poisons Open Source Software, Wipes Iran-Based Machines](https://news.slashdot.org/story/26/03/24/1638228/self-propagating-malware-poisons-open-source-software-wipes-iran-based-machines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 17:59:16](https://news.ycombinator.com/item?id=47506641) - [ARM AGI CPU: Specs and SKUs](https://sbcwiki.com/docs/soc-manufacturers/arm/arm-silicon/)
* [2026-03-24, 17:47:23](https://news.ycombinator.com/item?id=47506490) - [Lago (YC S21) Is Hiring](https://getlago.notion.site/Lago-Product-Engineer-AI-Agents-for-Growth-327ef63110d280cdb030ccf429d3e4d7?source=copy_link)
* [2026-03-24, 17:46:49](https://lobste.rs/s/xt8q7u/adding_structured_concurrency) - [Adding structured concurrency to JavaScript](https://github.com/bakkot/structured-concurrency-for-js)
* [2026-03-24, 17:30:42](https://news.ycombinator.com/item?id=47506251) - [Arm AGI CPU](https://newsroom.arm.com/blog/introducing-arm-agi-cpu)
* [2026-03-24, 17:08:32](https://lobste.rs/s/xarlmy/go_naming_conventions_practical_guide) - [Go Naming Conventions: A Practical Guide](https://www.alexedwards.net/blog/go-naming-conventions)
* [2026-03-24, 17:00:00](https://games.slashdot.org/story/26/03/24/1628213/epic-games-to-cut-more-than-1000-jobs-as-fortnite-usage-falls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Epic Games To Cut More Than 1,000 Jobs As Fortnite Usage Falls](https://games.slashdot.org/story/26/03/24/1628213/epic-games-to-cut-more-than-1000-jobs-as-fortnite-usage-falls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 16:57:47](https://news.ycombinator.com/item?id=47505731) - [Show HN: Gridland: make terminal apps that also run in the browser](https://www.gridland.io/)
* [2026-03-24, 16:26:03](https://lobste.rs/s/swmqhe/announcing_guile_knots) - [Announcing Guile Knots](https://www.cbaines.net/posts/announcing_guile_knots/)
* [2026-03-24, 16:26:00](https://news.ycombinator.com/item?id=47505144) - [Show HN: Email.md – Markdown to responsive, email-safe HTML](https://www.emailmd.dev/)
* [2026-03-24, 16:11:42](https://lobste.rs/s/f0xdeo/missile_defense_is_np_complete) - [Missile Defense is NP-Complete](https://smu160.github.io/posts/missile-defense-is-np-complete/)
* [2026-03-24, 16:02:22](https://news.ycombinator.com/item?id=47504695) - [Hypura – A storage-tier-aware LLM inference scheduler for Apple Silicon](https://github.com/t8/hypura)
* [2026-03-24, 16:00:00](https://mobile.slashdot.org/story/26/03/24/0435224/fcc-bans-imports-of-new-foreign-made-routers-citing-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Bans Imports of New Foreign-Made Routers, Citing Security Concerns](https://mobile.slashdot.org/story/26/03/24/0435224/fcc-bans-imports-of-new-foreign-made-routers-citing-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 15:58:57](https://lobste.rs/s/plmvuv/litellm_compromised_by_credential) - [LiteLLM Compromised by Credential Stealer](https://futuresearch.ai/blog/litellm-pypi-supply-chain-attack/)
* [2026-03-24, 15:58:33](https://lobste.rs/s/juc8ix/hegel_universal_property_based_testing) - [Hegel, a universal property-based testing protocol and family of PBT libraries](https://hegel.dev)
* [2026-03-24, 15:58:18](https://lobste.rs/s/gmss5r/inside_ohm_s_peg_wasm_compiler) - [Inside Ohm&apos;s PEG-to-Wasm compiler](https://ohmjs.org/blog/2026/03/12/peg-to-wasm)
* [2026-03-24, 15:58:04](https://news.ycombinator.com/item?id=47504615) - [No Terms. No Conditions](https://notermsnoconditions.com)
* [2026-03-24, 15:51:55](https://news.ycombinator.com/item?id=47504498) - [WolfGuard: WireGuard with FIPS 140-3 cryptography](https://github.com/wolfssl/wolfguard)
* [2026-03-24, 15:32:35](https://lobste.rs/s/ftfy60/proposing_botwatch) - [Proposing Botwatch](https://7hird.dev/3mhr2nnuhh22m)
* [2026-03-24, 15:29:41](https://news.ycombinator.com/item?id=47504112) - [Apple Business](https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/)
* [2026-03-24, 15:28:17](https://news.ycombinator.com/item?id=47504094) - [Hypothesis, Antithesis, synthesis](https://antithesis.com/blog/2026/hegel/)
* [2026-03-24, 15:25:52](https://news.ycombinator.com/item?id=47504060) - [Mystery jump in oil trading ahead of Trump post draws scrutiny](https://www.bbc.com/news/articles/cg547ljepvzo)
* [2026-03-24, 15:19:19](https://news.ycombinator.com/item?id=47503965) - [LaGuardia pilots raised safety alarms months before deadly runway crash](https://www.theguardian.com/us-news/2026/mar/24/laguardia-airplane-pilots-safety-concerns-crash)
* [2026-03-24, 15:09:30](https://news.ycombinator.com/item?id=47503810) - [Epic Games to cut more than 1k jobs as Fortnite usage falls](https://www.reuters.com/legal/litigation/epic-games-said-tuesday-that-it-will-lay-off-more-than-1000-employees-2026-03-24/)
* [2026-03-24, 15:00:00](https://yro.slashdot.org/story/26/03/23/2334252/intuit-beats-ftc-in-court-ending-restrictions-on-free-turbotax-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intuit Beats FTC In Court, Ending Restrictions On &apos;Free&apos; TurboTax Ads](https://yro.slashdot.org/story/26/03/23/2334252/intuit-beats-ftc-in-court-ending-restrictions-on-free-turbotax-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 14:58:27](https://news.ycombinator.com/item?id=47503617) - [Show HN: Gemini can now natively embed video, so I built sub-second video search](https://github.com/ssrajadh/sentrysearch)
* [2026-03-24, 14:45:31](https://lobste.rs/s/zbe88n/pine64_fosdem_2026_update) - [Pine64 FOSDEM 2026 Update](https://pine64.org/2026/03/24/march_2026_fosdem/)
* [2026-03-24, 14:37:29](https://lobste.rs/s/wjhc9g/rust_threads_on_gpu) - [Rust threads on the GPU](https://vectorware.com/blog/threads-on-gpu/)
* [2026-03-24, 13:32:17](https://lobste.rs/s/c8k9tt/slopification_its_discontents) - [Slopification and its Discontents](https://charlesleifer.com/blog/slopification-and-its-discontents/)
* [2026-03-24, 13:00:38](https://news.ycombinator.com/item?id=47501950) - [Missile defense is NP-complete](https://smu160.github.io/posts/missile-defense-is-np-complete/)
* [2026-03-24, 12:06:29](https://news.ycombinator.com/item?id=47501426) - [Tell HN: Litellm 1.82.7 and 1.82.8 on PyPI are compromised](https://github.com/BerriAI/litellm/issues/24512)
* [2026-03-24, 12:00:56](https://lobste.rs/s/brcq3a/curl_dev_sda) - [curl &gt; dev/sda](https://astrid.tech/2026/03/24/0/curl-to-dev-sda/)
* [2026-03-24, 11:40:21](https://news.ycombinator.com/item?id=47501211) - [Nanobrew: The fastest macOS package manager compatible with brew](https://nanobrew.trilok.ai/)
* [2026-03-24, 11:00:00](https://news.slashdot.org/story/26/03/23/2340216/canonical-joins-rust-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canonical Joins Rust Foundation](https://news.slashdot.org/story/26/03/23/2340216/canonical-joins-rust-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 10:54:53](https://lobste.rs/s/flmhja/debunking_zswap_zram_myths) - [Debunking zswap and zram myths](https://chrisdown.name/2026/03/24/zswap-vs-zram-when-to-use-what.html)
* [2026-03-24, 09:36:16](https://lobste.rs/s/hb04np/announcing_typescript_6_0) - [Announcing TypeScript 6.0](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/)
* [2026-03-24, 07:46:46](https://news.ycombinator.com/item?id=47499672) - [Show HN: ProofShot – Give AI coding agents eyes to verify the UI they build](https://github.com/AmElmo/proofshot)
* [2026-03-24, 07:00:00](https://it.slashdot.org/story/26/03/23/2323217/cyberattack-on-a-car-breathalyzer-firm-leaves-drivers-stuck?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cyberattack on a Car Breathalyzer Firm Leaves Drivers Stuck](https://it.slashdot.org/story/26/03/23/2323217/cyberattack-on-a-car-breathalyzer-firm-leaves-drivers-stuck?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 06:31:39](https://news.ycombinator.com/item?id=47499245) - [Ripgrep is faster than grep, ag, git grep, ucg, pt, sift (2016)](https://burntsushi.net/ripgrep/)
* [2026-03-24, 05:24:40](https://lobste.rs/s/aewrgf/can_it_resolve_doom_game_engine_2_000_dns) - [Can it Resolve DOOM? Game Engine in 2,000 DNS Records](https://blog.rice.is/post/doom-over-dns/)
* [2026-03-24, 03:30:00](https://news.slashdot.org/story/26/03/23/2221232/trump-administration-to-pay-french-company-1-billion-to-stop-offshore-wind-farms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration To Pay French Company $1 Billion To Stop Offshore Wind Farms](https://news.slashdot.org/story/26/03/23/2221232/trump-administration-to-pay-french-company-1-billion-to-stop-offshore-wind-farms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 01:41:33](https://lobste.rs/s/g53l7b/mouse_programming_language_on_cp_m) - [The Mouse Programming Language on CP/M](https://techtinkering.com/articles/the-mouse-programming-language-on-cpm/)
* [2026-03-23, 23:00:00](https://tech.slashdot.org/story/26/03/23/2214245/nvidia-ceo-says-hes-empathetic-to-dlss-5-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia CEO Says He&apos;s &apos;Empathetic&apos; To DLSS 5 Concerns](https://tech.slashdot.org/story/26/03/23/2214245/nvidia-ceo-says-hes-empathetic-to-dlss-5-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 22:58:41](https://lobste.rs/s/up2chu/rocksdb_development_finds_cpu_bug) - [RocksDB development finds a CPU bug](http://rocksdb.org/blog/2026/02/17/cpu-bug.html)
* [2026-03-23, 22:00:00](https://yro.slashdot.org/story/26/03/23/2015241/bipartisan-bill-seeks-to-ban-sports-betting-on-prediction-market-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bipartisan Bill Seeks To Ban Sports Betting On Prediction Market Platforms](https://yro.slashdot.org/story/26/03/23/2015241/bipartisan-bill-seeks-to-ban-sports-betting-on-prediction-market-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 21:00:00](https://tech.slashdot.org/story/26/03/23/208238/wing-expands-its-drone-delivery-service-to-the-bay-area?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wing Expands Its Drone Delivery Service To the Bay Area](https://tech.slashdot.org/story/26/03/23/208238/wing-expands-its-drone-delivery-service-to-the-bay-area?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 20:09:54](https://lobste.rs/s/msgigh/guideline_rust_style) - [Guideline: Rust Style](https://epage.github.io/dev/rust-style/)
* [2026-03-23, 20:00:00](https://search.slashdot.org/story/26/03/23/1839224/apple-prepares-to-add-search-ads-to-apple-maps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Prepares To Add Search Ads To Apple Maps](https://search.slashdot.org/story/26/03/23/1839224/apple-prepares-to-add-search-ads-to-apple-maps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 19:00:00](https://tech.slashdot.org/story/26/03/23/1829217/us-car-buyers-envy-what-they-cannot-have-affordable-chinese-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Car Buyers Envy What They Cannot Have: Affordable Chinese EVs](https://tech.slashdot.org/story/26/03/23/1829217/us-car-buyers-envy-what-they-cannot-have-affordable-chinese-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 18:43:27](https://lobste.rs/s/jbyzxt/rewriting_20_year_old_python_library) - [Rewriting a 20-year-old Python library](https://www.b-list.org/weblog/2026/mar/23/20-year-library/)
* [2026-03-23, 14:14:41](https://lobste.rs/s/cxpn2j/markdown_ate_world) - [Markdown Ate the World](https://matduggan.com/markdown-ate-the-world/)
* [2026-03-23, 14:06:01](https://lobste.rs/s/i0cskl/incoherent_rust) - [An Incoherent Rust](https://www.boxyuwu.blog/posts/an-incoherent-rust/)
* [2026-03-23, 12:12:53](https://lobste.rs/s/he8mhk/death_character_game_console_interfaces) - [The Death of Character in Game Console Interfaces](https://vale.rocks/posts/game-console-interfaces)
* [2026-03-23, 09:39:39](https://lobste.rs/s/sz4bzf/native_instant_space_switching_on_macos) - [Native Instant Space Switching on MacOS](https://arhan.sh/blog/native-instant-space-switching-on-macos/)
* [2026-03-22, 09:55:23](https://news.ycombinator.com/item?id=47475930) - [Data Manipulation in Clojure Compared to R and Python](https://codewithkira.com/2024-07-18-tablecloth-dplyr-pandas-polars.html)
* [2026-03-21, 02:09:08](https://news.ycombinator.com/item?id=47463354) - [purl: a curl-esque CLI for making HTTP requests that require payment](https://www.purl.dev/)
* [2026-03-20, 14:29:48](https://news.ycombinator.com/item?id=47455079) - [How the world’s first electric grid was built](https://worksinprogress.co/issue/how-the-worlds-first-electric-grid-was-built/)
* [2026-03-20, 12:42:37](https://news.ycombinator.com/item?id=47453737) - [Overcoming the friendship recession](https://joeprevite.com/friendship-recession/)
