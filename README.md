# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence Innovations and Concerns

* [Anthropic's Claude Can Now Use Your Computer To Finish Tasks](https://slashdot.org/story/26/03/24/1649222/anthropics-claude-can-now-use-your-computer-to-finish-tasks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Anthropic introduces a new feature for its AI, Claude, allowing it to complete tasks using a user's computer.

* [The AI Industry Is Lying to You](https://www.wheresyoured.at/the-ai-industry-is-lying-to-you/) - An essay critically explores the misleading narratives of the AI industry.

* [Show HN: ProofShot – Give AI coding agents eyes to verify the UI they build](https://github.com/AmElmo/proofshot) - A tool allowing AI-driven coding agents to verify user interface designs visually.

## Security and Malware Threats

* [Self-Propagating Malware Poisons Open Source Software, Wipes Iran-Based Machines](https://news.slashdot.org/story/26/03/24/1638228/self-propagating-malware-poisons-open-source-software-wipes-iran-based-machines?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A new self-propagating malware targets open-source projects and causes data destruction in Iranian systems.

* [FCC Bans Imports of New Foreign-Made Routers, Citing Security Concerns](https://mobile.slashdot.org/story/26/03/24/0435224/fcc-bans-imports-of-new-foreign-made-routers-citing-security-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The FCC has implemented a ban on imports of new foreign-made routers due to mounting security issues.

* [LiteLLM Compromised by Credential Stealer](https://futuresearch.ai/blog/litellm-pypi-supply-chain-attack/) - A credential-stealing attack on the LiteLLM library in PyPI highlights open-source security vulnerabilities.

## Video Games and Industry Upheaval

* [Wine 11 rewrites how Linux runs Windows games at kernel with massive speed gains](https://www.xda-developers.com/wine-11-rewrites-linux-runs-windows-games-speed-gains/) - Wine 11 introduces innovative kernel-level improvements, transforming the gaming experience on Linux.

* [Epic Games To Cut More Than 1,000 Jobs As Fortnite Usage Falls](https://games.slashdot.org/story/26/03/24/1628213/epic-games-to-cut-more-than-1000-jobs-as-fortnite-usage-falls?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Epic Games announces large-scale layoffs amidst declining Fortnite player numbers.

* [Can it Resolve DOOM? Game Engine in 2,000 DNS Records](https://blog.rice.is/post/doom-over-dns/) - A creative experiment demonstrates how the DOOM game engine can operate solely using DNS records.

## Programming and Software Development

* [Adding structured concurrency to JavaScript](https://github.com/bakkot/structured-concurrency-for-js) - A proposal to implement structured concurrency into JavaScript to improve async task management.

* [Go Naming Conventions: A Practical Guide](https://www.alexedwards.net/blog/go-naming-conventions) - A deep dive into practical naming conventions for Go developers.

* [Rust threads on the GPU](https://vectorware.com/blog/threads-on-gpu/) - A blog post highlights the increasing use of Rust for GPU-based threading performance.

## Innovative Tools and Technologies

* [Hypura – A storage-tier-aware LLM inference scheduler for Apple Silicon](https://github.com/t8/hypura) - A tool designed for optimizing large language models on Apple Silicon devices.

* [Show HN: Gridland: make terminal apps that also run in the browser](https://www.gridland.io/) - A framework for building terminal applications that seamlessly run in web browsers.

* [Show HN: Gemini can now natively embed video, so I built sub-second video search](https://github.com/ssrajadh/sentrysearch) - Introducing sub-second video search capabilities within behind Gemini's improved functionalities.

## Economic and Market Challenges

* [Young Graduates Face the Grimmest Job Market in Years](https://www.nytimes.com/2026/03/24/business/economy/college-graduates-job-market-hiring.html) - The current economic climate puts young graduates in a tough spot, facing bleak employment prospects.

* [ARM AGI CPU: Specs and SKUs](https://sbcwiki.com/docs/soc-manufacturers/arm/arm-silicon/) - ARM releases specifications for their innovative AGI CPUs, focusing on advanced AI performance.

## Technological Advancements

* [Opera: Rewind The Web to 1996 (Opera at 30)](https://www.web-rewind.com) - Opera celebrates 30 years by launching a nostalgia-inducing 'web rewind' feature.

* [Canonical Joins Rust Foundation](https://news.slashdot.org/story/26/03/23/2340216/canonical-joins-rust-foundation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Canonical aligns with the Rust Foundation to foster collaboration in software development.

* [Announcing TypeScript 6.0](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/) - TypeScript 6.0 introduces new features aimed at enhancing developer productivity and code maintainability.

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

* [2026-03-24, 19:00:00](https://slashdot.org/story/26/03/24/1649222/anthropics-claude-can-now-use-your-computer-to-finish-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s Claude Can Now Use Your Computer To Finish Tasks](https://slashdot.org/story/26/03/24/1649222/anthropics-claude-can-now-use-your-computer-to-finish-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 18:47:13](https://news.ycombinator.com/item?id=47507354) - [Young Graduates Face the Grimmest Job Market in Years](https://www.nytimes.com/2026/03/24/business/economy/college-graduates-job-market-hiring.html)
* [2026-03-24, 18:34:52](https://news.ycombinator.com/item?id=47507150) - [Wine 11 rewrites how Linux runs Windows games at kernel with massive speed gains](https://www.xda-developers.com/wine-11-rewrites-linux-runs-windows-games-speed-gains/)
* [2026-03-24, 18:00:00](https://news.slashdot.org/story/26/03/24/1638228/self-propagating-malware-poisons-open-source-software-wipes-iran-based-machines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Self-Propagating Malware Poisons Open Source Software, Wipes Iran-Based Machines](https://news.slashdot.org/story/26/03/24/1638228/self-propagating-malware-poisons-open-source-software-wipes-iran-based-machines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 17:59:16](https://news.ycombinator.com/item?id=47506641) - [ARM AGI CPU: Specs and SKUs](https://sbcwiki.com/docs/soc-manufacturers/arm/arm-silicon/)
* [2026-03-24, 17:47:23](https://news.ycombinator.com/item?id=47506490) - [Lago (YC S21) Is Hiring](https://getlago.notion.site/Lago-Product-Engineer-AI-Agents-for-Growth-327ef63110d280cdb030ccf429d3e4d7?source=copy_link)
* [2026-03-24, 17:46:49](https://lobste.rs/s/xt8q7u/adding_structured_concurrency) - [Adding structured concurrency to JavaScript](https://github.com/bakkot/structured-concurrency-for-js)
* [2026-03-24, 17:30:55](https://news.ycombinator.com/item?id=47506259) - [The AI Industry Is Lying to You](https://www.wheresyoured.at/the-ai-industry-is-lying-to-you/)
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
* [2026-03-24, 15:20:01](https://lobste.rs/s/0amepo/when_upserts_don_t_update_still_write) - [When upserts don&apos;t update but still write: Debugging Postgres performance at scale](https://www.datadoghq.com/blog/engineering/debugging-postgres-performance/)
* [2026-03-24, 15:19:19](https://news.ycombinator.com/item?id=47503965) - [LaGuardia pilots raised safety alarms months before deadly runway crash](https://www.theguardian.com/us-news/2026/mar/24/laguardia-airplane-pilots-safety-concerns-crash)
* [2026-03-24, 15:09:30](https://news.ycombinator.com/item?id=47503810) - [Epic Games to cut more than 1k jobs as Fortnite usage falls](https://www.reuters.com/legal/litigation/epic-games-said-tuesday-that-it-will-lay-off-more-than-1000-employees-2026-03-24/)
* [2026-03-24, 15:00:00](https://yro.slashdot.org/story/26/03/23/2334252/intuit-beats-ftc-in-court-ending-restrictions-on-free-turbotax-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intuit Beats FTC In Court, Ending Restrictions On &apos;Free&apos; TurboTax Ads](https://yro.slashdot.org/story/26/03/23/2334252/intuit-beats-ftc-in-court-ending-restrictions-on-free-turbotax-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 14:58:27](https://news.ycombinator.com/item?id=47503617) - [Show HN: Gemini can now natively embed video, so I built sub-second video search](https://github.com/ssrajadh/sentrysearch)
* [2026-03-24, 14:45:31](https://lobste.rs/s/zbe88n/pine64_fosdem_2026_update) - [Pine64 FOSDEM 2026 Update](https://pine64.org/2026/03/24/march_2026_fosdem/)
* [2026-03-24, 14:37:29](https://lobste.rs/s/wjhc9g/rust_threads_on_gpu) - [Rust threads on the GPU](https://vectorware.com/blog/threads-on-gpu/)
* [2026-03-24, 14:19:59](https://news.ycombinator.com/item?id=47503006) - [So where are all the AI apps?](https://www.answer.ai/posts/2026-03-12-so-where-are-all-the-ai-apps.html)
* [2026-03-24, 13:32:17](https://lobste.rs/s/c8k9tt/slopification_its_discontents) - [Slopification and its Discontents](https://charlesleifer.com/blog/slopification-and-its-discontents/)
* [2026-03-24, 13:21:24](https://news.ycombinator.com/item?id=47502193) - [io_uring, libaio performance across Linux kernels and an unexpected IOMMU trap](https://blog.ydb.tech/how-io-uring-overtook-libaio-performance-across-linux-kernels-and-an-unexpected-iommu-trap-ea6126d9ef14)
* [2026-03-24, 12:14:56](https://news.ycombinator.com/item?id=47501511) - [Secure Domain Name System (DNS) Deployment 2026 Guide [pdf]](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-81r3.pdf)
* [2026-03-24, 12:06:29](https://news.ycombinator.com/item?id=47501426) - [Tell HN: Litellm 1.82.7 and 1.82.8 on PyPI are compromised](https://github.com/BerriAI/litellm/issues/24512)
* [2026-03-24, 12:00:56](https://lobste.rs/s/brcq3a/curl_dev_sda) - [curl &gt; dev/sda](https://astrid.tech/2026/03/24/0/curl-to-dev-sda/)
* [2026-03-24, 11:40:21](https://news.ycombinator.com/item?id=47501211) - [Nanobrew: The fastest macOS package manager compatible with brew](https://nanobrew.trilok.ai/)
* [2026-03-24, 11:00:00](https://news.slashdot.org/story/26/03/23/2340216/canonical-joins-rust-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canonical Joins Rust Foundation](https://news.slashdot.org/story/26/03/23/2340216/canonical-joins-rust-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 10:54:53](https://lobste.rs/s/flmhja/debunking_zswap_zram_myths) - [Debunking zswap and zram myths](https://chrisdown.name/2026/03/24/zswap-vs-zram-when-to-use-what.html)
* [2026-03-24, 10:39:21](https://news.ycombinator.com/item?id=47500746) - [Debunking Zswap and Zram Myths](https://chrisdown.name/2026/03/24/zswap-vs-zram-when-to-use-what.html)
* [2026-03-24, 10:06:02](https://news.ycombinator.com/item?id=47500522) - [curl &gt; /dev/sda: How I made a Linux distro that runs wget | dd](https://astrid.tech/2026/03/24/0/curl-to-dev-sda/)
* [2026-03-24, 09:36:29](https://news.ycombinator.com/item?id=47500335) - [Microsoft&apos;s \&quot;Fix\&quot; for Windows 11: Flowers After the Beating](https://www.sambent.com/microsofts-plan-to-fix-windows-11-is-gaslighting/)
* [2026-03-24, 09:36:16](https://lobste.rs/s/hb04np/announcing_typescript_6_0) - [Announcing TypeScript 6.0](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/)
* [2026-03-24, 07:54:02](https://news.ycombinator.com/item?id=47499721) - [Opera: Rewind The Web to 1996 (Opera at 30)](https://www.web-rewind.com)
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
* [2026-03-23, 18:00:00](https://tech.slashdot.org/story/26/03/23/1759212/mark-zuckerberg-is-building-an-ai-agent-to-help-him-be-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Is Building an AI Agent To Help Him Be CEO](https://tech.slashdot.org/story/26/03/23/1759212/mark-zuckerberg-is-building-an-ai-agent-to-help-him-be-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 17:00:00](https://tech.slashdot.org/story/26/03/23/1537238/walmart-chatgpt-checkout-converted-3x-worse-than-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart: ChatGPT Checkout Converted 3x Worse Than Website](https://tech.slashdot.org/story/26/03/23/1537238/walmart-chatgpt-checkout-converted-3x-worse-than-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 14:30:45](https://lobste.rs/s/tuyk3l/semi_retirement_really_changing_my) - [Semi-retirement, or, really, changing my relationship with the BSDs](https://briancallahan.net/blog/20260322.html)
* [2026-03-23, 14:14:41](https://lobste.rs/s/cxpn2j/markdown_ate_world) - [Markdown Ate the World](https://matduggan.com/markdown-ate-the-world/)
* [2026-03-23, 14:06:01](https://lobste.rs/s/i0cskl/incoherent_rust) - [An Incoherent Rust](https://www.boxyuwu.blog/posts/an-incoherent-rust/)
* [2026-03-23, 12:12:53](https://lobste.rs/s/he8mhk/death_character_game_console_interfaces) - [The Death of Character in Game Console Interfaces](https://vale.rocks/posts/game-console-interfaces)
* [2026-03-23, 09:39:39](https://lobste.rs/s/sz4bzf/native_instant_space_switching_on_macos) - [Native Instant Space Switching on MacOS](https://arhan.sh/blog/native-instant-space-switching-on-macos/)
* [2026-03-22, 13:47:57](https://news.ycombinator.com/item?id=47477525) - [Testing the Swift C compatibility with Raylib (+WASM)](https://carette.xyz/posts/swift_c_compatibility_with_raylib/)
* [2026-03-22, 09:55:23](https://news.ycombinator.com/item?id=47475930) - [Data Manipulation in Clojure Compared to R and Python](https://codewithkira.com/2024-07-18-tablecloth-dplyr-pandas-polars.html)
* [2026-03-20, 21:43:16](https://news.ycombinator.com/item?id=47461036) - [Tony Hoare and His Imprint on Computer Science](https://cacm.acm.org/blogcacm/tony-hoare-and-his-imprint-on-computer-science/)
