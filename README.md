# [News Summary](https://kherrick.github.io/news-summary/)

## Security and Supply Chain Issues

* [LiteLLM Compromised by Credential Stealer](https://futuresearch.ai/blog/litellm-pypi-supply-chain-attack/) ([comments](https://lobste.rs/s/plmvuv/litellm_compromised_by_credential))

* [FCC Bans Imports of New Foreign-Made Routers, Citing Security Concerns](https://mobile.slashdot.org/story/26/03/24/0435224/fcc-bans-imports-of-new-foreign-made-routers-citing-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://mobile.slashdot.org/story/26/03/24/0435224/fcc-bans-imports-of-new-foreign-made-routers-citing-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Invisible Malicious Code Attacks 151 GitHub Repos And VS Code — Glassworm Attack Uses Blockchain](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss))

## AI and Language Models

* [Run a 1T parameter model on a 32gb Mac by streaming tensors from NVMe](https://github.com/t8/hypura) ([comments](https://news.ycombinator.com/item?id=47504695))

* [LLM Neuroanatomy II: Modern LLM Hacking and Hints of a Universal Language?](https://dnhkng.github.io/posts/rys-ii/) ([comments](https://news.ycombinator.com/item?id=47500709))

* [So where are all the AI apps?](https://www.answer.ai/posts/2026-03-12-so-where-are-all-the-ai-apps.html) ([comments](https://news.ycombinator.com/item?id=47503006))

## Programming Tools and Innovations

* [Hegel, a universal property-based testing protocol and family of PBT libraries](https://hegel.dev) ([comments](https://lobste.rs/s/juc8ix/hegel_universal_property_based_testing))

* [Announcing TypeScript 6.0](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/) ([comments](https://lobste.rs/s/hb04np/announcing_typescript_6_0))

* [Ripgrep is faster than grep, ag, git grep, ucg, pt, sift (2016)](https://burntsushi.net/ripgrep/) ([comments](https://news.ycombinator.com/item?id=47499245))

## Cutting-Edge Hardware and Technology

* [Nanobrew: The fastest macOS package manager compatible with brew](https://nanobrew.trilok.ai/) ([comments](https://news.ycombinator.com/item?id=47501211))

* [Nvidia is Trying to Make a Computer for Orbital AI Data Centers](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss))

* [BIO – The Bao I/O Co-Processor](https://www.crowdsupply.com/baochip/dabao/updates/bio-the-bao-i-o-co-processor) ([comments](https://news.ycombinator.com/item?id=47469744))

## Unique and Historical Insights

* [The Mouse Programming Language on CP/M](https://techtinkering.com/articles/the-mouse-programming-language-on-cpm/) ([comments](https://lobste.rs/s/g53l7b/mouse_programming_language_on_cp_m))

* [Opera: Rewind The Web to 1996 (Opera at 30)](https://www.web-rewind.com) ([comments](https://news.ycombinator.com/item?id=47499721))

* [Ironies of Automation (1983)](http://www.complexcognition.co.uk/2021/06/ironies-of-automation.html) ([comments](https://lobste.rs/s/6fpjhn/ironies_automation_1983))

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

* [2026-03-24, 16:02:22](https://news.ycombinator.com/item?id=47504695) - [Run a 1T parameter model on a 32gb Mac by streaming tensors from NVMe](https://github.com/t8/hypura)
* [2026-03-24, 16:00:00](https://mobile.slashdot.org/story/26/03/24/0435224/fcc-bans-imports-of-new-foreign-made-routers-citing-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Bans Imports of New Foreign-Made Routers, Citing Security Concerns](https://mobile.slashdot.org/story/26/03/24/0435224/fcc-bans-imports-of-new-foreign-made-routers-citing-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 15:58:57](https://lobste.rs/s/plmvuv/litellm_compromised_by_credential) - [LiteLLM Compromised by Credential Stealer](https://futuresearch.ai/blog/litellm-pypi-supply-chain-attack/)
* [2026-03-24, 15:58:33](https://lobste.rs/s/juc8ix/hegel_universal_property_based_testing) - [Hegel, a universal property-based testing protocol and family of PBT libraries](https://hegel.dev)
* [2026-03-24, 15:58:18](https://lobste.rs/s/gmss5r/inside_ohm_s_peg_wasm_compiler) - [Inside Ohm&apos;s PEG-to-Wasm compiler](https://ohmjs.org/blog/2026/03/12/peg-to-wasm)
* [2026-03-24, 15:58:04](https://news.ycombinator.com/item?id=47504615) - [No Terms. No Conditions](https://notermsnoconditions.com)
* [2026-03-24, 15:51:55](https://news.ycombinator.com/item?id=47504498) - [WolfGuard: WireGuard with FIPS 140-3 cryptography](https://github.com/wolfssl/wolfguard)
* [2026-03-24, 15:32:35](https://lobste.rs/s/ftfy60/proposing_botwatch) - [Proposing Botwatch](https://7hird.dev/3mhr2nnuhh22m)
* [2026-03-24, 15:29:41](https://news.ycombinator.com/item?id=47504112) - [Apple Business](https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/)
* [2026-03-24, 15:28:17](https://news.ycombinator.com/item?id=47504094) - [Hypothesis, Antithesis, Synthesis](https://antithesis.com/blog/2026/hegel/)
* [2026-03-24, 15:20:01](https://lobste.rs/s/0amepo/when_upserts_don_t_update_still_write) - [When upserts don&apos;t update but still write: Debugging Postgres performance at scale](https://www.datadoghq.com/blog/engineering/debugging-postgres-performance/)
* [2026-03-24, 15:19:19](https://news.ycombinator.com/item?id=47503965) - [LaGuardia pilots raised safety alarms months before deadly runway crash](https://www.theguardian.com/us-news/2026/mar/24/laguardia-airplane-pilots-safety-concerns-crash)
* [2026-03-24, 15:00:00](https://yro.slashdot.org/story/26/03/23/2334252/intuit-beats-ftc-in-court-ending-restrictions-on-free-turbotax-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intuit Beats FTC In Court, Ending Restrictions On &apos;Free&apos; TurboTax Ads](https://yro.slashdot.org/story/26/03/23/2334252/intuit-beats-ftc-in-court-ending-restrictions-on-free-turbotax-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 14:58:27](https://news.ycombinator.com/item?id=47503617) - [Show HN: Gemini can now natively embed video, so I built sub-second video search](https://github.com/ssrajadh/sentrysearch)
* [2026-03-24, 14:45:31](https://lobste.rs/s/zbe88n/pine64_fosdem_2026_update) - [Pine64 FOSDEM 2026 Update](https://pine64.org/2026/03/24/march_2026_fosdem/)
* [2026-03-24, 14:39:20](https://news.ycombinator.com/item?id=47503296) - [The bridge to wealth is being pulled up with AI](https://danielhomola.com/m%20&amp;%20e/ai/your-bridge-to-wealth-is-being-pulled-up/)
* [2026-03-24, 14:19:59](https://news.ycombinator.com/item?id=47503006) - [So where are all the AI apps?](https://www.answer.ai/posts/2026-03-12-so-where-are-all-the-ai-apps.html)
* [2026-03-24, 13:32:17](https://lobste.rs/s/c8k9tt/slopification_its_discontents) - [Slopification and its Discontents](https://charlesleifer.com/blog/slopification-and-its-discontents/)
* [2026-03-24, 13:21:24](https://news.ycombinator.com/item?id=47502193) - [io_uring, libaio performance across Linux kernels and an unexpected IOMMU trap](https://blog.ydb.tech/how-io-uring-overtook-libaio-performance-across-linux-kernels-and-an-unexpected-iommu-trap-ea6126d9ef14)
* [2026-03-24, 12:48:04](https://news.ycombinator.com/item?id=47501840) - [NanoClaw Adopts OneCLI Agent Vault](https://nanoclaw.dev/blog/nanoclaw-agent-vault/)
* [2026-03-24, 12:36:20](https://news.ycombinator.com/item?id=47501729) - [LiteLLM Python package compromised by supply-chain attack](https://github.com/BerriAI/litellm/issues/24512)
* [2026-03-24, 12:14:56](https://news.ycombinator.com/item?id=47501511) - [Secure Domain Name System (DNS) Deployment 2026 Guide [pdf]](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-81r3.pdf)
* [2026-03-24, 12:10:00](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss) - [Musk&apos;s Tactic of Blaming Users for Grok Sex Images May be Foiled by EU Law](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss)
* [2026-03-24, 12:00:56](https://lobste.rs/s/brcq3a/curl_dev_sda) - [curl &gt; dev/sda](https://astrid.tech/2026/03/24/0/curl-to-dev-sda/)
* [2026-03-24, 11:40:21](https://news.ycombinator.com/item?id=47501211) - [Nanobrew: The fastest macOS package manager compatible with brew](https://nanobrew.trilok.ai/)
* [2026-03-24, 11:00:00](https://news.slashdot.org/story/26/03/23/2340216/canonical-joins-rust-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canonical Joins Rust Foundation](https://news.slashdot.org/story/26/03/23/2340216/canonical-joins-rust-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 10:54:53](https://lobste.rs/s/flmhja/debunking_zswap_zram_myths) - [Debunking zswap and zram myths](https://chrisdown.name/2026/03/24/zswap-vs-zram-when-to-use-what.html)
* [2026-03-24, 10:39:21](https://news.ycombinator.com/item?id=47500746) - [Debunking Zswap and Zram Myths](https://chrisdown.name/2026/03/24/zswap-vs-zram-when-to-use-what.html)
* [2026-03-24, 10:33:54](https://news.ycombinator.com/item?id=47500709) - [LLM Neuroanatomy II: Modern LLM Hacking and Hints of a Universal Language?](https://dnhkng.github.io/posts/rys-ii/)
* [2026-03-24, 10:06:02](https://news.ycombinator.com/item?id=47500522) - [curl &gt; /dev/sda: How I made a Linux distro that runs wget | dd](https://astrid.tech/2026/03/24/0/curl-to-dev-sda/)
* [2026-03-24, 09:36:29](https://news.ycombinator.com/item?id=47500335) - [Microsoft&apos;s \&quot;Fix\&quot; for Windows 11: Flowers After the Beating](https://www.sambent.com/microsofts-plan-to-fix-windows-11-is-gaslighting/)
* [2026-03-24, 09:36:16](https://lobste.rs/s/hb04np/announcing_typescript_6_0) - [Announcing TypeScript 6.0](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/)
* [2026-03-24, 08:44:54](https://lobste.rs/s/6fpjhn/ironies_automation_1983) - [Ironies of Automation (1983)](http://www.complexcognition.co.uk/2021/06/ironies-of-automation.html)
* [2026-03-24, 07:54:02](https://news.ycombinator.com/item?id=47499721) - [Opera: Rewind The Web to 1996 (Opera at 30)](https://www.web-rewind.com)
* [2026-03-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss) - [Nvidia is Trying to Make a Computer for Orbital AI Data Centers](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss)
* [2026-03-24, 07:00:00](https://it.slashdot.org/story/26/03/23/2323217/cyberattack-on-a-car-breathalyzer-firm-leaves-drivers-stuck?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cyberattack on a Car Breathalyzer Firm Leaves Drivers Stuck](https://it.slashdot.org/story/26/03/23/2323217/cyberattack-on-a-car-breathalyzer-firm-leaves-drivers-stuck?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 06:31:39](https://news.ycombinator.com/item?id=47499245) - [Ripgrep is faster than grep, ag, git grep, ucg, pt, sift (2016)](https://burntsushi.net/ripgrep/)
* [2026-03-24, 05:32:53](https://news.ycombinator.com/item?id=47498924) - [Log File Viewer for the Terminal](https://lnav.org/)
* [2026-03-24, 05:24:40](https://lobste.rs/s/aewrgf/can_it_resolve_doom_game_engine_2_000_dns) - [Can it Resolve DOOM? Game Engine in 2,000 DNS Records](https://blog.rice.is/post/doom-over-dns/)
* [2026-03-24, 03:30:00](https://news.slashdot.org/story/26/03/23/2221232/trump-administration-to-pay-french-company-1-billion-to-stop-offshore-wind-farms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration To Pay French Company $1 Billion To Stop Offshore Wind Farms](https://news.slashdot.org/story/26/03/23/2221232/trump-administration-to-pay-french-company-1-billion-to-stop-offshore-wind-farms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 02:34:00](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss) - [Never Mind Band-Aids, Neanderthals Had Antiseptic Birch Tar](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss)
* [2026-03-24, 01:41:33](https://lobste.rs/s/g53l7b/mouse_programming_language_on_cp_m) - [The Mouse Programming Language on CP/M](https://techtinkering.com/articles/the-mouse-programming-language-on-cpm/)
* [2026-03-23, 23:00:00](https://tech.slashdot.org/story/26/03/23/2214245/nvidia-ceo-says-hes-empathetic-to-dlss-5-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia CEO Says He&apos;s &apos;Empathetic&apos; To DLSS 5 Concerns](https://tech.slashdot.org/story/26/03/23/2214245/nvidia-ceo-says-hes-empathetic-to-dlss-5-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 22:58:41](https://lobste.rs/s/up2chu/rocksdb_development_finds_cpu_bug) - [RocksDB development finds a CPU bug](http://rocksdb.org/blog/2026/02/17/cpu-bug.html)
* [2026-03-23, 22:20:31](https://lobste.rs/s/pem3or/playbit_runtime) - [Playbit runtime](https://playbit.app/)
* [2026-03-23, 22:00:00](https://yro.slashdot.org/story/26/03/23/2015241/bipartisan-bill-seeks-to-ban-sports-betting-on-prediction-market-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bipartisan Bill Seeks To Ban Sports Betting On Prediction Market Platforms](https://yro.slashdot.org/story/26/03/23/2015241/bipartisan-bill-seeks-to-ban-sports-betting-on-prediction-market-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 21:47:00](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss) - [Big Tech’s Security Problem Just Hit Gaming](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss)
* [2026-03-23, 21:32:59](https://lobste.rs/s/nhnfob/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/nhnfob/what_are_you_doing_this_week)
* [2026-03-23, 21:28:02](https://news.ycombinator.com/item?id=47495344) - [FCC updates covered list to include foreign-made consumer routers](https://www.fcc.gov/document/fcc-updates-covered-list-include-foreign-made-consumer-routers)
* [2026-03-23, 21:00:00](https://tech.slashdot.org/story/26/03/23/208238/wing-expands-its-drone-delivery-service-to-the-bay-area?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wing Expands Its Drone Delivery Service To the Bay Area](https://tech.slashdot.org/story/26/03/23/208238/wing-expands-its-drone-delivery-service-to-the-bay-area?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 20:09:54](https://lobste.rs/s/msgigh/guideline_rust_style) - [Guideline: Rust Style](https://epage.github.io/dev/rust-style/)
* [2026-03-23, 20:00:00](https://search.slashdot.org/story/26/03/23/1839224/apple-prepares-to-add-search-ads-to-apple-maps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Prepares To Add Search Ads To Apple Maps](https://search.slashdot.org/story/26/03/23/1839224/apple-prepares-to-add-search-ads-to-apple-maps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 19:11:08](https://lobste.rs/s/joe31h/tla_mental_models) - [TLA+ mental models](http://muratbuffalo.blogspot.com/2026/03/tla-mental-models.html)
* [2026-03-23, 19:00:00](https://tech.slashdot.org/story/26/03/23/1829217/us-car-buyers-envy-what-they-cannot-have-affordable-chinese-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Car Buyers Envy What They Cannot Have: Affordable Chinese EVs](https://tech.slashdot.org/story/26/03/23/1829217/us-car-buyers-envy-what-they-cannot-have-affordable-chinese-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 18:43:27](https://lobste.rs/s/jbyzxt/rewriting_20_year_old_python_library) - [Rewriting a 20-year-old Python library](https://www.b-list.org/weblog/2026/mar/23/20-year-library/)
* [2026-03-23, 18:40:58](https://news.ycombinator.com/item?id=47493460) - [Autoresearch on an old research idea](https://ykumar.me/blog/eclip-autoresearch/)
* [2026-03-23, 18:00:00](https://tech.slashdot.org/story/26/03/23/1759212/mark-zuckerberg-is-building-an-ai-agent-to-help-him-be-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Is Building an AI Agent To Help Him Be CEO](https://tech.slashdot.org/story/26/03/23/1759212/mark-zuckerberg-is-building-an-ai-agent-to-help-him-be-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 17:02:00](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss) - [Workers Who Love ‘Synergizing Paradigms’ Might be Bad at Their Jobs](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss)
* [2026-03-23, 17:00:00](https://tech.slashdot.org/story/26/03/23/1537238/walmart-chatgpt-checkout-converted-3x-worse-than-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart: ChatGPT Checkout Converted 3x Worse Than Website](https://tech.slashdot.org/story/26/03/23/1537238/walmart-chatgpt-checkout-converted-3x-worse-than-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 16:30:00](https://tech.slashdot.org/story/26/03/23/1624236/onlyfans-owner-dies-at-43?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OnlyFans Owner Dies At 43](https://tech.slashdot.org/story/26/03/23/1624236/onlyfans-owner-dies-at-43?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 16:00:00](https://tech.slashdot.org/story/26/03/23/0425234/ubers-deal-blitz-to-stop-a-robotaxi-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber&apos;s Deal Blitz To Stop a Robotaxi Monopoly](https://tech.slashdot.org/story/26/03/23/0425234/ubers-deal-blitz-to-stop-a-robotaxi-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 15:04:47](https://lobste.rs/s/7dzkuh/generators_lone_lisp) - [Generators in lone lisp](https://www.matheusmoreira.com/articles/generators-in-lone-lisp)
* [2026-03-23, 14:34:00](https://tech.slashdot.org/story/26/03/23/041250/reddit-is-weighing-identity-verification-methods-to-combat-its-bot-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Is Weighing Identity Verification Methods To Combat Its Bot Problem](https://tech.slashdot.org/story/26/03/23/041250/reddit-is-weighing-identity-verification-methods-to-combat-its-bot-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 14:30:45](https://lobste.rs/s/tuyk3l/semi_retirement_really_changing_my) - [Semi-retirement, or, really, changing my relationship with the BSDs](https://briancallahan.net/blog/20260322.html)
* [2026-03-23, 14:30:10](https://news.ycombinator.com/item?id=47490070) - [iPhone 17 Pro Demonstrated Running a 400B LLM](https://twitter.com/anemll/status/2035901335984611412)
* [2026-03-23, 14:14:41](https://lobste.rs/s/cxpn2j/markdown_ate_world) - [Markdown Ate the World](https://matduggan.com/markdown-ate-the-world/)
* [2026-03-23, 14:06:01](https://lobste.rs/s/i0cskl/incoherent_rust) - [An Incoherent Rust](https://www.boxyuwu.blog/posts/an-incoherent-rust/)
* [2026-03-23, 12:42:00](https://news.ycombinator.com/item?id=47488686) - [Box of Secrets: Discreetly modding an apartment intercom to work with Apple Home](https://www.jackhogan.me/blog/box-of-secrets/)
* [2026-03-23, 12:17:00](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss) - [Concerns Due to TrueNAS Moving its Build Repository to Private Servers](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss)
* [2026-03-23, 12:12:53](https://lobste.rs/s/he8mhk/death_character_game_console_interfaces) - [The Death of Character in Game Console Interfaces](https://vale.rocks/posts/game-console-interfaces)
* [2026-03-23, 09:39:39](https://lobste.rs/s/sz4bzf/native_instant_space_switching_on_macos) - [Native Instant Space Switching on MacOS](https://arhan.sh/blog/native-instant-space-switching-on-macos/)
* [2026-03-23, 07:32:00](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss) - [Moltbook Was Peak AI Theater](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss)
* [2026-03-23, 02:42:00](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss) - [Commission Says EU Inc Will be in Place by End of 2026](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss)
* [2026-03-22, 21:54:00](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss) - [Proton Mail Helped FBI Unmask Anonymous ‘Stop Cop City’ Protester](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss)
* [2026-03-22, 17:09:00](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss) - [Wayland Set the Linux Desktop Back by 10 Years](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss)
* [2026-03-22, 13:47:57](https://news.ycombinator.com/item?id=47477525) - [Testing the Swift C compatibility with Raylib (+WASM)](https://carette.xyz/posts/swift_c_compatibility_with_raylib/)
* [2026-03-22, 12:22:00](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss) - [Analysis From West Point Warns That Strait of Hormuz Blockade Will Strangle US Defense Industry](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss)
* [2026-03-22, 07:37:00](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss) - [This Fungus Can Make Water Freeze](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss)
* [2026-03-22, 02:52:00](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss) - [Tech Hobbyist Makes Shoulder-Mounted Guided Missile Prototype With $96 In Parts And A 3D Printer](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss)
* [2026-03-21, 22:07:00](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss) - [Nearly Half of UK Adults Happy to Use ChatGPT as a Counsellor](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss)
* [2026-03-21, 18:21:01](https://news.ycombinator.com/item?id=47469744) - [BIO – The Bao I/O Co-Processor](https://www.crowdsupply.com/baochip/dabao/updates/bio-the-bao-i-o-co-processor)
* [2026-03-21, 17:22:00](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss) - [Nvidia Resumes Manufacturing of H200 Chips for China, CEO Says](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss)
* [2026-03-21, 14:47:58](https://news.ycombinator.com/item?id=47467543) - [MSA: Memory Sparse Attention](https://github.com/EverMind-AI/MSA)
* [2026-03-21, 12:40:00](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss) - [Tundra Tongue: The Science Behind a Very Cold Mistake](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss)
* [2026-03-21, 07:55:00](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss) - [Afroman Wins &apos;Lemon Pound Cake&apos; Lawsuit Over Raid-Turned-Music-Video](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss)
* [2026-03-21, 03:07:00](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss) - [How Should We Define Mathematical Beauty in the AI Age?](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss)
* [2026-03-20, 22:15:00](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss) - [Invisible Malicious Code Attacks 151 GitHub Repos And VS Code — Glassworm Attack Uses Blockchain](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss)
* [2026-03-20, 17:53:00](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss) - [Researchers Played Music to Cells – Aggressiveness of Laryngeal Cancer Decreased](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss)
* [2026-03-20, 15:49:20](https://news.ycombinator.com/item?id=47456320) - [The Jellies That Evolved a Different Way to Keep Time](https://www.quantamagazine.org/the-jellies-that-evolved-a-different-way-to-keep-time-20260320/)
* [2026-03-20, 12:46:00](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss) - [Elon Musk Says His Chipmaking &apos;Terafab Project&apos; Venture Will Launch in Seven Days](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss)
* [2026-03-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss) - [Massive Interpol Operation Takes Down 45,000 Ip Addresses and Leads to 94 Arrests](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss)
* [2026-03-20, 03:11:00](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss) - [The Ongoing Strait of Hormuz Blockage Will Impact the Semiconductor and AI Industries](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss)
