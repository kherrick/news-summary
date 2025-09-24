# [News Summary](https://kherrick.github.io/news-summary/)

## Software and Technology Innovation

* [Should Neovim support transitive plugin dependencies?](https://sink.io/jmk/neovim-plugin-deps/) - Explores whether Neovim should adopt a feature to handle plugin dependencies more efficiently. [Comments](https://lobste.rs/s/pn4hqe/should_neovim_support_transitive_plugin)

* [ZubanLS: A Mypy-compatible Python Language Server built in Rust](https://zubanls.com/) - Highlights a new Rust-based Python language server with compatibility to Mypy. [Comments](https://lobste.rs/s/gl18mt/zubanls_mypy_compatible_python_language)

* [Zutty: Zero-cost Unicode Teletype, high-end terminal for low-end systems](https://git.hq.sig7.se/zutty.git) - Showcases a high-performance Unicode terminal designed for low-resource environments. [Comments](https://news.ycombinator.com/item?id=45355462)

* [Rust Foundation Signs Joint Statement on Open Source Infrastructure Stewardship](https://rustfoundation.org/media/rust-foundation-signs-joint-statement-on-open-source-infrastructure-stewardship/) - Details the Rust Foundation's commitment towards secure open source software infrastructure. [Comments](https://lobste.rs/s/jxrtjp/rust_foundation_signs_joint_statement_on)

## Artificial Intelligence Advancements and Impacts

* [Microsoft Is Reportedly Building An AI Marketplace To Pay Publishers For Content](https://slashdot.org/story/25/09/23/2355226/microsoft-is-reportedly-building-an-ai-marketplace-to-pay-publishers-for-content?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discusses efforts to develop a marketplace where publishers are compensated for their AI training datasets. [Comments](https://news.ycombinator.com/item?id=45354689)

* [Journals Infiltrated With 'Copycat' Papers That Can Be Written By AI](https://science.slashdot.org/story/25/09/23/1825258/journals-infiltrated-with-copycat-papers-that-can-be-written-by-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Reveals how AI-generated papers are increasingly infiltrating academic publications. [Comments](https://news.ycombinator.com/item?id=45351524)

* [AI-Generated 'Workslop' Is Destroying Productivity](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity) - Analyzes the disruptive effects of AI on workplace efficiency. [Comments](https://lobste.rs/s/yiq42c/ai_generated_workslop_is_destroying)

## Scientific Developments and Discoveries

* [When Cancer Targets the Young](https://soylentnews.org/article.pl?sid=25/09/23/0552218&from=rss) - A deep dive into the rising cases of cancer among younger demographics. [Comments](https://soylentnews.org/article.pl?sid=25/09/23/0552218&from=rss)

* [Scientists Found 7,000-Year-Old Mummies in the Desert That Don't Share DNA With Modern Humans](https://soylentnews.org/article.pl?sid=25/09/22/1156248&from=rss) - Unearths a prehistoric find that challenges current understanding of human evolution. [Comments](https://news.ycombinator.com/item?id=45350690)

## Economic and Policy Updates

* [Vietnam Shuts Down Millions of Bank Accounts Over Biometric Rules](https://news.slashdot.org/story/25/09/24/005245/vietnam-shuts-down-millions-of-bank-accounts-over-biometric-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Reports on nationwide bank account closures triggered by new biometric regulations. [Comments](https://news.ycombinator.com/item?id=45353551)

* [Disney+, Hulu Are Hiking Prices Again Next Month](https://news.slashdot.org/story/25/09/23/2358239/disney-hulu-are-hiking-prices-again-next-month?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Examines the recurring subscription price increases for streaming giants Disney+ and Hulu. [Comments](https://lobste.rs/s/bfbrug/from_rust_reality_hidden_journey_fetch)

## Futurism and Thought-Provoking Ideas

* [What if Humanity Forgot How to Make CPUs?](https://www.youtube.com/watch?v=L2OJFqs8bUk) - Reflects on the potential challenges humanity could face in the absence of chip-making expertise. [Comments](https://lobste.rs/s/qrbf0u/what_if_humanity_forgot_how_make_cpus)

* [Is Life a Form of Computation?](https://thereader.mitpress.mit.edu/is-life-a-form-of-computation/) - Explores philosophical questions about life's similarities to computation. [Comments](https://news.ycombinator.com/item?id=45352533)

## Cultural and Historical Perspectives

* [Periodic Table of Cognition](https://kk.org/thetechnium/the-periodic-table-of-cognition/) - Creates a comprehensive framework akin to the periodic table but applied to cognition. [Comments](https://news.ycombinator.com/item?id=45354689)

* [Netscape Navigator 2.0 Was Released 30 Years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&from=rss) - Celebrates a milestone in web browser history, marking 30 years since Netscape Navigator's breakthrough release. [Comments](https://soylentnews.org/article.pl?sid=25/09/20/0338224&from=rss)

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

* [2025-09-24, 03:41:06](https://lobste.rs/s/pn4hqe/should_neovim_support_transitive_plugin) - [Should Neovim support transitive plugin dependencies?](https://sink.io/jmk/neovim-plugin-deps/)
* [2025-09-24, 03:38:08](https://lobste.rs/s/gl18mt/zubanls_mypy_compatible_python_language) - [ZubanLS: A Mypy-compatible Python Language Server built in Rust](https://zubanls.com/)
* [2025-09-24, 03:35:00](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss) - [When Cancer Targets the Young](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss)
* [2025-09-24, 02:59:45](https://news.ycombinator.com/item?id=45355806) - [America&apos;s top companies keep talking about AI – but can&apos;t explain the upsides](https://www.ft.com/content/e93e56df-dd9b-40c1-b77a-dba1ca01e473)
* [2025-09-24, 02:12:58](https://news.ycombinator.com/item?id=45355514) - [Quadratic memory reductions for Zero-knowledge Proofs](https://github.com/logannye/space-efficient-zero-knowledge-proofs)
* [2025-09-24, 02:07:23](https://news.ycombinator.com/item?id=45355462) - [Zutty: Zero-cost Unicode Teletype, high-end terminal for low-end systems](https://git.hq.sig7.se/zutty.git)
* [2025-09-24, 01:25:00](https://news.slashdot.org/story/25/09/24/005245/vietnam-shuts-down-millions-of-bank-accounts-over-biometric-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vietnam Shuts Down Millions of Bank Accounts Over Biometric Rules](https://news.slashdot.org/story/25/09/24/005245/vietnam-shuts-down-millions-of-bank-accounts-over-biometric-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 01:09:55](https://lobste.rs/s/bfrugi/from_rust_reality_hidden_journey_fetch) - [From Rust to Reality: The Hidden Journey of fetch_max](https://questdb.com/blog/rust-fetch-max-compiler-journey/)
* [2025-09-24, 00:45:00](https://news.slashdot.org/story/25/09/23/2358239/disney-hulu-are-hiking-prices-again-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney+, Hulu Are Hiking Prices Again Next Month](https://news.slashdot.org/story/25/09/23/2358239/disney-hulu-are-hiking-prices-again-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 00:33:24](https://news.ycombinator.com/item?id=45354689) - [Periodic Table of Cognition](https://kk.org/thetechnium/the-periodic-table-of-cognition/)
* [2025-09-24, 00:26:59](https://news.ycombinator.com/item?id=45354644) - [Baldur&apos;s Gate 3 Steam Deck – Native Version](https://larian.com/support/faqs/steam-deck-native-version_121)
* [2025-09-24, 00:02:00](https://slashdot.org/story/25/09/23/2355226/microsoft-is-reportedly-building-an-ai-marketplace-to-pay-publishers-for-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Is Reportedly Building An AI Marketplace To Pay Publishers For Content](https://slashdot.org/story/25/09/23/2355226/microsoft-is-reportedly-building-an-ai-marketplace-to-pay-publishers-for-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 23:42:50](https://news.ycombinator.com/item?id=45354314) - [Top Programming Languages 2025](https://spectrum.ieee.org/top-programming-languages-2025)
* [2025-09-23, 23:41:54](https://news.ycombinator.com/item?id=45354304) - [MLB approves robot umpires for 2026 as part of challenge system](https://www.espn.com/mlb/story/_/id/46357017/mlb-approves-robot-umpires-2026-part-challenge-system)
* [2025-09-23, 23:36:16](https://news.ycombinator.com/item?id=45354262) - [NYC Telecom Raid: What&apos;s Up with Those Weird SIM Banks?](https://tedium.co/2025/09/23/secret-service-raid-sim-bank-telecom-hardware/)
* [2025-09-23, 23:20:00](https://tech.slashdot.org/story/25/09/23/2139249/why-volvo-is-replacing-every-ex90s-central-computer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Volvo Is Replacing Every EX90&apos;s Central Computer](https://tech.slashdot.org/story/25/09/23/2139249/why-volvo-is-replacing-every-ex90s-central-computer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 23:09:31](https://lobste.rs/s/t0ejz7/walking_around_compiler) - [Walking around the compiler](https://bernsteinbear.com/blog/walking-around/)
* [2025-09-23, 22:55:38](https://lobste.rs/s/shbssy/benjamin_button_reviews_macos) - [Benjamin Button Reviews macOS](https://rakhim.exotext.com/benjamin-button-reviews-macos)
* [2025-09-23, 22:48:00](https://soylentnews.org/article.pl?sid=25/09/22/2131204&amp;from=rss) - [Porsche EV Roll-Out Delay Deals $6 Billion Hit to Parent Volkswagen](https://soylentnews.org/article.pl?sid=25/09/22/2131204&amp;from=rss)
* [2025-09-23, 22:40:00](https://hardware.slashdot.org/story/25/09/23/2131259/mlb-approves-robot-umps-in-2026-for-challenges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MLB Approves Robot Umps In 2026 For Challenges](https://hardware.slashdot.org/story/25/09/23/2131259/mlb-approves-robot-umps-in-2026-for-challenges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 22:00:00](https://news.slashdot.org/story/25/09/23/2123257/youtube-reinstating-creators-banned-for-covid-19-election-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Reinstating Creators Banned For COVID-19, Election Content](https://news.slashdot.org/story/25/09/23/2123257/youtube-reinstating-creators-banned-for-covid-19-election-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 21:24:45](https://news.ycombinator.com/item?id=45352944) - [From Rust to reality: The hidden journey of fetch_max](https://questdb.com/blog/rust-fetch-max-compiler-journey/)
* [2025-09-23, 21:20:15](https://news.ycombinator.com/item?id=45352901) - [Context Engineering for AI Agents: Lessons](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)
* [2025-09-23, 21:20:00](https://developers.slashdot.org/story/25/09/23/2115212/dedicated-mobile-apps-for-vibe-coding-have-so-far-failed-to-gain-traction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dedicated Mobile Apps For Vibe Coding Have So Far Failed To Gain Traction](https://developers.slashdot.org/story/25/09/23/2115212/dedicated-mobile-apps-for-vibe-coding-have-so-far-failed-to-gain-traction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 20:59:17](https://news.ycombinator.com/item?id=45352672) - [Qwen3-VL](https://qwen.ai/blog?id=99f0335c4ad9ff6153e517418d48535ab6d8afef&amp;from=research.latest-advancements-list)
* [2025-09-23, 20:57:14](https://lobste.rs/s/qrbf0u/what_if_humanity_forgot_how_make_cpus) - [What if Humanity forgot how to make CPUs?](https://www.youtube.com/watch?v=L2OJFqs8bUk)
* [2025-09-23, 20:50:32](https://lobste.rs/s/btqhds/confidential_computing_with_openbsd) - [Confidential Computing with OpenBSD](https://toobnix.org/w/v7xpcN8MyouxGTnwYt35WM)
* [2025-09-23, 20:46:24](https://news.ycombinator.com/item?id=45352533) - [Is life a form of computation?](https://thereader.mitpress.mit.edu/is-life-a-form-of-computation/)
* [2025-09-23, 20:40:21](https://news.ycombinator.com/item?id=45352460) - [Podman Desktop celebrates 3M downloads](https://podman-desktop.io/blog/3-million)
* [2025-09-23, 20:35:51](https://lobste.rs/s/jxrtjp/rust_foundation_signs_joint_statement_on) - [Rust Foundation Signs Joint Statement on Open Source Infrastructure Stewardship](https://rustfoundation.org/media/rust-foundation-signs-joint-statement-on-open-source-infrastructure-stewardship/)
* [2025-09-23, 20:16:47](https://news.ycombinator.com/item?id=45352213) - [YouTube says it&apos;ll bring back creators banned for Covid and election content](https://www.businessinsider.com/youtube-reinstate-channels-banned-over-covid-content-policies-2025-9)
* [2025-09-23, 20:02:00](https://science.slashdot.org/story/25/09/23/1825258/journals-infiltrated-with-copycat-papers-that-can-be-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Journals Infiltrated With &apos;Copycat&apos; Papers That Can Be Written By AI](https://science.slashdot.org/story/25/09/23/1825258/journals-infiltrated-with-copycat-papers-that-can-be-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 19:29:26](https://news.ycombinator.com/item?id=45351624) - [Is Fortran better than Python for teaching basics of numerical linear algebra?](https://loiseaujc.github.io/posts/blog-title/fortran_vs_python.html)
* [2025-09-23, 19:21:00](https://it.slashdot.org/story/25/09/23/1758250/microsoft-brings-microfluidics-to-datacenter-cooling-with-3x-performance-gain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Brings Microfluidics To Datacenter Cooling With 3X Performance Gain](https://it.slashdot.org/story/25/09/23/1758250/microsoft-brings-microfluidics-to-datacenter-cooling-with-3x-performance-gain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 19:19:53](https://lobste.rs/s/xfurcn/procedural_rhetoric_opinions_as) - [Procedural Rhetoric: Opinions as Algorithms](https://entropicthoughts.com/reed-on-opinions-as-algorithms)
* [2025-09-23, 19:13:36](https://lobste.rs/s/iibpk0/128_language_quine_relay_2018) - [The 128-Language Quine Relay (2018)](https://esoteric.codes/blog/the-128-language-quine-relay)
* [2025-09-23, 19:12:54](https://news.ycombinator.com/item?id=45351446) - [consumed.today](https://consumed.today/)
* [2025-09-23, 19:12:08](https://news.ycombinator.com/item?id=45351437) - [Apple A19 SoC die shot](https://chipwise.tech/our-portfolio/apple-a19-dieshot/)
* [2025-09-23, 19:09:50](https://news.ycombinator.com/item?id=45351410) - [How to draw construction equipment for kids](https://alyssarosenberg.substack.com/p/how-to-draw-construction-equipment)
* [2025-09-23, 18:41:00](https://tech.slashdot.org/story/25/09/23/1748209/pope-leo-xiv-rejects-ai-avatar-for-virtual-papal-audiences?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pope Leo XIV Rejects AI Avatar for Virtual Papal Audiences](https://tech.slashdot.org/story/25/09/23/1748209/pope-leo-xiv-rejects-ai-avatar-for-virtual-papal-audiences?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 18:06:07](https://news.ycombinator.com/item?id=45350690) - [Find SF parking cops](https://walzr.com/sf-parking/)
* [2025-09-23, 18:06:00](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss) - [Scientists Found 7,000-Year-Old Mummies in the Desert That Don&apos;t Share DNA With Modern Humans](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss)
* [2025-09-23, 18:02:00](https://slashdot.org/story/25/09/23/1729234/quarter-of-workers-under-35-expect-ai-to-take-their-jobs-within-two-years-deutsche-bank-survey-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Quarter of Workers Under 35 Expect AI To Take Their Jobs Within Two Years, Deutsche Bank Survey Finds](https://slashdot.org/story/25/09/23/1729234/quarter-of-workers-under-35-expect-ai-to-take-their-jobs-within-two-years-deutsche-bank-survey-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 17:22:00](https://news.slashdot.org/story/25/09/23/1719228/are-elites-meritocratic-and-efficiency-seeking-evidence-from-mba-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Elites Meritocratic and Efficiency-Seeking? Evidence from MBA Students](https://news.slashdot.org/story/25/09/23/1719228/are-elites-meritocratic-and-efficiency-seeking-evidence-from-mba-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 16:59:35](https://lobste.rs/s/ga0vwq/fifty_years_open_source_software_supply) - [Fifty Years of Open Source Software Supply-Chain Security](https://cacm.acm.org/practice/fifty-years-of-open-source-software-supply-chain-security/)
* [2025-09-23, 16:55:45](https://lobste.rs/s/slysq6/our_plan_for_more_secure_npm_supply_chain) - [Our plan for a more secure npm supply chain](https://github.blog/security/supply-chain-security/our-plan-for-a-more-secure-npm-supply-chain/)
* [2025-09-23, 16:48:00](https://yro.slashdot.org/story/25/09/23/1648213/dhs-has-been-collecting-us-citizens-dna-for-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DHS Has Been Collecting US Citizens&apos; DNA for Years](https://yro.slashdot.org/story/25/09/23/1648213/dhs-has-been-collecting-us-citizens-dna-for-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 16:20:57](https://lobste.rs/s/slrphg/preemption_go_2021) - [Preemption in Go (2021)](https://hidetatz.github.io/goroutine_preemption/)
* [2025-09-23, 16:05:00](https://news.slashdot.org/story/25/09/23/166206/us-news-rankings-are-out-after-a-tumultuous-year-for-colleges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [U.S. News Rankings Are Out After a Tumultuous Year for Colleges](https://news.slashdot.org/story/25/09/23/166206/us-news-rankings-are-out-after-a-tumultuous-year-for-colleges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 15:33:23](https://news.ycombinator.com/item?id=45348495) - [Always Invite Anna](https://sharif.io/anna-alexei)
* [2025-09-23, 15:25:29](https://news.ycombinator.com/item?id=45348390) - [Shopify, pulling strings at Ruby Central, forces Bundler and RubyGems takeover](https://joel.drapper.me/p/rubygems-takeover/)
* [2025-09-23, 15:20:00](https://news.slashdot.org/story/25/09/23/1441229/us-secret-service-dismantles-telecommunications-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Secret Service &apos;Dismantles Telecommunications Threat&apos;](https://news.slashdot.org/story/25/09/23/1441229/us-secret-service-dismantles-telecommunications-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 15:09:50](https://news.ycombinator.com/item?id=45348183) - [From MCP to shell: MCP auth flaws enable RCE in Claude Code, Gemini CLI and more](https://verialabs.com/blog/from-mcp-to-shell/)
* [2025-09-23, 14:52:07](https://news.ycombinator.com/item?id=45347914) - [Launch HN: Strata (YC X25) – One MCP server for AI to handle thousands of tools](https://news.ycombinator.com/item?id=45347914)
* [2025-09-23, 14:27:36](https://news.ycombinator.com/item?id=45347532) - [Getting AI to work in complex codebases](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/ace-fca.md)
* [2025-09-23, 14:10:16](https://lobste.rs/s/gloou0/symmetric_multiprocessing_hyper) - [Symmetric MultiProcessing, Hyper-Threading and scheduling on Maestro](https://blog.lenot.re/a/smp)
* [2025-09-23, 13:56:28](https://news.ycombinator.com/item?id=45347117) - [Libghostty is coming](https://mitchellh.com/writing/libghostty-is-coming)
* [2025-09-23, 13:41:23](https://lobste.rs/s/wb9ocu/using_dns_for_responding_acme_challenges) - [Using DNS for responding to ACME challenges](https://hsm.tunnel53.net/article/dns-for-acme-challenges/)
* [2025-09-23, 13:24:00](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss) - [Deaths From Flesh-Eating Bacteria are on the Rise. Who is at Risk?](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss)
* [2025-09-23, 12:30:20](https://lobste.rs/s/x2jobn/go_has_added_valgrind_support) - [Go has added Valgrind support](https://go-review.googlesource.com/c/go/+/674077)
* [2025-09-23, 12:18:01](https://news.ycombinator.com/item?id=45345950) - [Mesh: I tried Htmx, then ditched it](https://ajmoon.com/posts/mesh-i-tried-htmx-then-ditched-it)
* [2025-09-23, 12:11:22](https://lobste.rs/s/bosvl3/lark_1_3_0_introduces_text_slices_earley) - [Lark 1.3.0 - Introduces text-slices, Earley fix, and various small improvements](https://github.com/lark-parser/lark/releases/tag/1.3.0)
* [2025-09-23, 10:47:46](https://lobste.rs/s/6wzpji/crypto_miner_hotio_qbittorrent) - [Crypto Miner in hotio/qbittorrent](https://apogliaghi.com/2025/09/crypto-miner-in-hotio/qbittorrent/)
* [2025-09-23, 08:48:06](https://lobste.rs/s/yxzt5m/why_was_winhelp_called_online_help_system) - [Why was WinHelp called an online help system when it ran offline?](https://devblogs.microsoft.com/oldnewthing/20250922-00/?p=111619)
* [2025-09-23, 08:35:00](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss) - [We Risk a Deluge of AI-Written ‘Science’ Pushing Corporate Interests](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss)
* [2025-09-23, 06:40:51](https://lobste.rs/s/f6yv3w/wild_linker_update_0_6_0) - [Wild Linker Update - 0.6.0](https://davidlattimore.github.io/posts/2025/09/23/wild-update-0.6.0.html)
* [2025-09-23, 03:52:00](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss) - [Something Extremely Strange is Happening at the Event Horizon of This Supermassive Blackhole](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss)
* [2025-09-23, 02:11:38](https://lobste.rs/s/yiq42c/ai_generated_workslop_is_destroying) - [AI-Generated “Workslop” Is Destroying Productivity](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity)
* [2025-09-22, 23:08:00](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss) - [OpenAI&apos;s Research on AI Models Deliberately Lying is Wild](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss)
* [2025-09-22, 22:47:42](https://lobste.rs/s/uirhie/libghostty_is_coming) - [Libghostty Is Coming](https://mitchellh.com/writing/libghostty-is-coming)
* [2025-09-22, 22:08:27](https://lobste.rs/s/a8bwsw/imagining_language_without_booleans) - [Imagining a Language without Booleans](https://justinpombrio.net/2025/09/22/imagining-a-language-without-booleans.html)
* [2025-09-22, 18:23:00](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss) - [Online Book:  The Pattern Language of Software Architecture](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss)
* [2025-09-22, 14:16:18](https://lobste.rs/s/oaxcep/cloudflare_is_sponsoring_ladybird) - [Cloudflare is sponsoring Ladybird and Omarchy](https://blog.cloudflare.com/supporting-the-future-of-the-open-web/)
* [2025-09-22, 13:40:00](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss) - [Electronic Locks Have Backdoors, Too](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss)
* [2025-09-22, 13:06:10](https://lobste.rs/s/xbmvou/why_i_m_spoiled_by_apple_silicon_still_love) - [Why I&apos;m Spoiled By Apple Silicon (But Still Love Framework)](https://simonhartcher.com/posts/2025-09-22-why-im-spoiled-by-apple-silicon-but-still-love-framework/)
* [2025-09-22, 08:53:00](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss) - [Rare Apple-1 With Storied Ownership Fetched Over $500,000 at Auction](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss)
* [2025-09-22, 04:07:00](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss) - [AI Can Forecast Your Future Health – Just Like the Weather](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss)
* [2025-09-21, 23:23:00](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss) - [When Non-Avian Dinosaurs Went Extinct, the Earth Changed](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss)
* [2025-09-21, 18:44:00](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss) - [Half a Million Screens go Dark . . .](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss)
* [2025-09-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss) - [Netscape Navigator 2.0 Was Released 30 years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss)
* [2025-09-21, 09:08:00](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss) - [Brazil&apos;s Payment System Puts Credit Card Firms to the Test](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss)
* [2025-09-21, 07:11:50](https://news.ycombinator.com/item?id=45320715) - [How is einx notation universal?](https://einx.readthedocs.io/en/stable/faq/universal.html)
* [2025-09-21, 04:22:00](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss) - [IG Nobel 2025 winners](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss)
* [2025-09-20, 23:38:00](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss) - [Education Report Calling for Ethical AI Use Contains Over 15 Fake Sources](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss)
* [2025-09-20, 18:51:00](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss) - [Scientists: It&apos;s Do or Die Time for America&apos;s Primacy Exploring the Solar System](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss)
* [2025-09-20, 14:07:00](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss) - [Nobody Wanted This: Samsung Fridges are Getting Ads](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss)
* [2025-09-20, 11:33:47](https://news.ycombinator.com/item?id=45312403) - [A vibrator helped me debug a motorcycle brake light system](https://bikesafe.me/blogs/news/how-a-vibrator-helped-me-debug-a-motorcycle-brake-light-system)
* [2025-09-20, 09:21:00](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss) - [L.A. Man Sentenced to 14 Days in Prison for Accidentally Crashing Drone Into Firefighting Plane](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss)
* [2025-09-20, 08:22:41](https://news.ycombinator.com/item?id=45311498) - [Introduction to Programming Languages](https://hjaem.info/itpl)
* [2025-09-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss) - [Feds Launch Investigation Into Faulty Tesla Doors](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss)
