# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements

* [How S3 scales to petabytes a second on top of tens of millions of slow HDDs](https://bigdatastream.substack.com/p/how-aws-s3-scales-with-tens-of-millions-of-hard-drives) - A deep dive into the engineering feats behind AWS S3's performance.

* [Moving fast in hardware: how the iPod shipped in 6 months](https://www.hscott.net/moving-fast-in-hardware-how-the-ipod-shipped-in-6-months/) - A retrospective on how Apple’s original iPod was developed at breakneck speed.

* [ZubanLS: A Mypy-compatible Python Language Server built in Rust](https://zubanls.com/) - Explore the creation of ZubanLS for Python developers, combining type-checking and performance through Rust.

* [Quadratic memory reductions for Zero-knowledge Proofs](https://github.com/logannye/space-efficient-zero-knowledge-proofs) - Research into enhancing memory efficiency in cryptographic zero-knowledge proof systems.

* [From Rust to Reality: The Hidden Journey of fetch_max](https://questdb.com/blog/rust-fetch-max-compiler-journey/) - A tech exploration of compiler optimizations in Rust.

## AI and Machine Learning

* [AI is impressive because we’ve failed at semantic web and personal computing](https://rakhim.exotext.com/ai-is-impressive-because-we-ve-failed-at-semantic-web-and-personal-computing) - Reflections on AI's success compared to the challenges faced by semantic web projects.

* [Greatest irony of the AI age: Humans hired to clean AI slop](https://www.sify.com/ai-analytics/greatest-irony-of-the-ai-age-humans-being-increasingly-hired-to-clean-ai-slop/) - An exploration of the increasing reliance on human intervention to fix AI-generated errors.

* [Microsoft Is Reportedly Building An AI Marketplace To Pay Publishers For Content](https://slashdot.org/story/25/09/23/2355226/microsoft-is-reportedly-building-an-ai-marketplace-to-pay-publishers-for-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft’s plans to create a marketplace for AI-generated content to compensate publishers.

## Science and Environment

* [A new study shows plants and animals emit a visible light that expires at death](https://pubs.acs.org/doi/10.1021/acs.jpclett.4c03546) - Insightful new research about bioluminescence and its connection to life cycles.

* [When Cancer Targets the Young](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss) - A detailed discussion on the growing prevalence of cancer among younger individuals.

* [Scientists Found 7,000-Year-Old Mummies in the Desert That Don’t Share DNA With Modern Humans](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss) - The fascinating discovery of ancient human remains with no modern genetic links.

## Social Impact and Policy

* [Vietnam Shuts Down Millions of Bank Accounts Over Biometric Rules](https://news.slashdot.org/story/25/09/24/005245/vietnam-shuts-down-millions-of-bank-accounts-over-biometric-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Vietnam enforces stringent biometric account verification, affecting millions.

* [Meta's Massive AI Data Center is Stressing Out a Louisiana Community](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss) - How Meta’s AI operations are impacting local communities and their energy infrastructure.

## Open Source and Development

* [VBARE: A simple alternative to Protobuf & Cap'n Proto for schema evolution](https://www.rivet.dev/blog/2025-09-24-vbare-simple-schema-evolution-with-maximum-performance) - An alternative for simplified data serialization in software development.

* [Rust Foundation Signs Joint Statement on Open Source Infrastructure Stewardship](https://rustfoundation.org/media/rust-foundation-signs-joint-statement-on-open-source-infrastructure-stewardship/) - Rust organization doubles down on its commitment to open-source infrastructure support.

* [Google continues to invest 350k in the Rust ecosystem](https://www.linkedin.com/posts/lars-a-bergstrom_android-rust-security-activity-7376353918022270976-Y73P) - Google's latest commitments to secure the Rust programming environment.

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

* [2025-09-24, 10:03:24](https://lobste.rs/s/p1mdwu/how_s3_scales_petabytes_second_on_top_tens) - [How S3 scales to petabytes a second on top of tens of millions of slow HDDs](https://bigdatastream.substack.com/p/how-aws-s3-scales-with-tens-of-millions-of-hard-drives)
* [2025-09-24, 08:24:20](https://news.ycombinator.com/item?id=45357693) - [That Secret Service SIM farm story is bogus](https://cybersect.substack.com/p/that-secret-service-sim-farm-story)
* [2025-09-24, 08:16:00](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss) - [&apos;a Black Hole of Energy Use&apos;: Meta&apos;s Massive AI Data Center is Stressing Out a Louisiana Community](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss)
* [2025-09-24, 07:05:46](https://news.ycombinator.com/item?id=45357222) - [Ruby Central Is Not Behaving in Good Faith, and I&apos;ve Got Receipts](https://jaredwhite.com/articles/ruby-central-is-not-operating-in-good-faith)
* [2025-09-24, 06:36:20](https://lobste.rs/s/capy02/moving_fast_hardware_how_ipod_shipped_6) - [Moving fast in hardware: how the iPod shipped in 6 months](https://www.hscott.net/moving-fast-in-hardware-how-the-ipod-shipped-in-6-months/)
* [2025-09-24, 06:26:05](https://news.ycombinator.com/item?id=45356958) - [You didn&apos;t see it coming](https://aishwaryagoel.com/you-didnt-see-it-coming/)
* [2025-09-24, 05:51:36](https://lobste.rs/s/njnyic/vbare_simple_alternative_protobuf_cap_n) - [VBARE: A simple alternative to Protobuf &amp; Cap&apos;n Proto for schema evolution](https://www.rivet.dev/blog/2025-09-24-vbare-simple-schema-evolution-with-maximum-performance)
* [2025-09-24, 05:07:10](https://lobste.rs/s/zfktn9/google_continues_invest_350k_rust) - [Google continues to invest 350k in the Rust ecosystem](https://www.linkedin.com/posts/lars-a-bergstrom_android-rust-security-activity-7376353918022270976-Y73P)
* [2025-09-24, 04:21:33](https://lobste.rs/s/y6e06t/ai_is_impressive_because_we_ve_failed_at) - [AI is impressive because we’ve failed at semantic web and personal computing](https://rakhim.exotext.com/ai-is-impressive-because-we-ve-failed-at-semantic-web-and-personal-computing)
* [2025-09-24, 04:15:04](https://news.ycombinator.com/item?id=45356226) - [Greatest irony of the AI age: Humans hired to clean AI slop](https://www.sify.com/ai-analytics/greatest-irony-of-the-ai-age-humans-being-increasingly-hired-to-clean-ai-slop/)
* [2025-09-24, 03:41:06](https://lobste.rs/s/pn4hqe/should_neovim_support_transitive_plugin) - [Should Neovim support transitive plugin dependencies?](https://sink.io/jmk/neovim-plugin-deps/)
* [2025-09-24, 03:38:08](https://lobste.rs/s/gl18mt/zubanls_mypy_compatible_python_language) - [ZubanLS: A Mypy-compatible Python Language Server built in Rust](https://zubanls.com/)
* [2025-09-24, 03:35:00](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss) - [When Cancer Targets the Young](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss)
* [2025-09-24, 03:27:41](https://news.ycombinator.com/item?id=45355965) - [New study shows plants and animals emit a visible light that expires at death](https://pubs.acs.org/doi/10.1021/acs.jpclett.4c03546)
* [2025-09-24, 02:12:58](https://news.ycombinator.com/item?id=45355514) - [Quadratic memory reductions for Zero-knowledge Proofs](https://github.com/logannye/space-efficient-zero-knowledge-proofs)
* [2025-09-24, 02:07:23](https://news.ycombinator.com/item?id=45355462) - [Zutty: Zero-cost Unicode Teletype, high-end terminal for low-end systems](https://git.hq.sig7.se/zutty.git)
* [2025-09-24, 01:25:00](https://news.slashdot.org/story/25/09/24/005245/vietnam-shuts-down-millions-of-bank-accounts-over-biometric-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vietnam Shuts Down Millions of Bank Accounts Over Biometric Rules](https://news.slashdot.org/story/25/09/24/005245/vietnam-shuts-down-millions-of-bank-accounts-over-biometric-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 01:09:55](https://lobste.rs/s/bfrugi/from_rust_reality_hidden_journey_fetch) - [From Rust to Reality: The Hidden Journey of fetch_max](https://questdb.com/blog/rust-fetch-max-compiler-journey/)
* [2025-09-24, 00:45:00](https://news.slashdot.org/story/25/09/23/2358239/disney-hulu-are-hiking-prices-again-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney+, Hulu Are Hiking Prices Again Next Month](https://news.slashdot.org/story/25/09/23/2358239/disney-hulu-are-hiking-prices-again-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 00:33:24](https://news.ycombinator.com/item?id=45354689) - [Periodic Table of Cognition](https://kk.org/thetechnium/the-periodic-table-of-cognition/)
* [2025-09-24, 00:26:59](https://news.ycombinator.com/item?id=45354644) - [Baldur&apos;s Gate 3 Steam Deck – Native Version](https://larian.com/support/faqs/steam-deck-native-version_121)
* [2025-09-24, 00:02:00](https://slashdot.org/story/25/09/23/2355226/microsoft-is-reportedly-building-an-ai-marketplace-to-pay-publishers-for-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Is Reportedly Building An AI Marketplace To Pay Publishers For Content](https://slashdot.org/story/25/09/23/2355226/microsoft-is-reportedly-building-an-ai-marketplace-to-pay-publishers-for-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 23:42:50](https://news.ycombinator.com/item?id=45354314) - [Top Programming Languages 2025](https://spectrum.ieee.org/top-programming-languages-2025)
* [2025-09-23, 23:20:00](https://tech.slashdot.org/story/25/09/23/2139249/why-volvo-is-replacing-every-ex90s-central-computer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Volvo Is Replacing Every EX90&apos;s Central Computer](https://tech.slashdot.org/story/25/09/23/2139249/why-volvo-is-replacing-every-ex90s-central-computer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 23:09:31](https://lobste.rs/s/t0ejz7/walking_around_compiler) - [Walking around the compiler](https://bernsteinbear.com/blog/walking-around/)
* [2025-09-23, 22:55:38](https://lobste.rs/s/shbssy/benjamin_button_reviews_macos) - [Benjamin Button Reviews macOS](https://rakhim.exotext.com/benjamin-button-reviews-macos)
* [2025-09-23, 22:48:00](https://soylentnews.org/article.pl?sid=25/09/22/2131204&amp;from=rss) - [Porsche EV Roll-Out Delay Deals $6 Billion Hit to Parent Volkswagen](https://soylentnews.org/article.pl?sid=25/09/22/2131204&amp;from=rss)
* [2025-09-23, 22:40:00](https://hardware.slashdot.org/story/25/09/23/2131259/mlb-approves-robot-umps-in-2026-for-challenges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MLB Approves Robot Umps In 2026 For Challenges](https://hardware.slashdot.org/story/25/09/23/2131259/mlb-approves-robot-umps-in-2026-for-challenges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 22:00:00](https://news.slashdot.org/story/25/09/23/2123257/youtube-reinstating-creators-banned-for-covid-19-election-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Reinstating Creators Banned For COVID-19, Election Content](https://news.slashdot.org/story/25/09/23/2123257/youtube-reinstating-creators-banned-for-covid-19-election-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 21:24:45](https://news.ycombinator.com/item?id=45352944) - [From Rust to reality: The hidden journey of fetch_max](https://questdb.com/blog/rust-fetch-max-compiler-journey/)
* [2025-09-23, 21:20:00](https://developers.slashdot.org/story/25/09/23/2115212/dedicated-mobile-apps-for-vibe-coding-have-so-far-failed-to-gain-traction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dedicated Mobile Apps For Vibe Coding Have So Far Failed To Gain Traction](https://developers.slashdot.org/story/25/09/23/2115212/dedicated-mobile-apps-for-vibe-coding-have-so-far-failed-to-gain-traction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 20:59:17](https://news.ycombinator.com/item?id=45352672) - [Qwen3-VL](https://qwen.ai/blog?id=99f0335c4ad9ff6153e517418d48535ab6d8afef&amp;from=research.latest-advancements-list)
* [2025-09-23, 20:57:14](https://lobste.rs/s/qrbf0u/what_if_humanity_forgot_how_make_cpus) - [What if Humanity forgot how to make CPUs?](https://www.youtube.com/watch?v=L2OJFqs8bUk)
* [2025-09-23, 20:50:32](https://lobste.rs/s/btqhds/confidential_computing_with_openbsd) - [Confidential Computing with OpenBSD](https://toobnix.org/w/v7xpcN8MyouxGTnwYt35WM)
* [2025-09-23, 20:46:24](https://news.ycombinator.com/item?id=45352533) - [Is life a form of computation?](https://thereader.mitpress.mit.edu/is-life-a-form-of-computation/)
* [2025-09-23, 20:40:21](https://news.ycombinator.com/item?id=45352460) - [Podman Desktop celebrates 3M downloads](https://podman-desktop.io/blog/3-million)
* [2025-09-23, 20:35:51](https://lobste.rs/s/jxrtjp/rust_foundation_signs_joint_statement_on) - [Rust Foundation Signs Joint Statement on Open Source Infrastructure Stewardship](https://rustfoundation.org/media/rust-foundation-signs-joint-statement-on-open-source-infrastructure-stewardship/)
* [2025-09-23, 20:02:00](https://science.slashdot.org/story/25/09/23/1825258/journals-infiltrated-with-copycat-papers-that-can-be-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Journals Infiltrated With &apos;Copycat&apos; Papers That Can Be Written By AI](https://science.slashdot.org/story/25/09/23/1825258/journals-infiltrated-with-copycat-papers-that-can-be-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 19:29:26](https://news.ycombinator.com/item?id=45351624) - [Is Fortran better than Python for teaching basics of numerical linear algebra?](https://loiseaujc.github.io/posts/blog-title/fortran_vs_python.html)
* [2025-09-23, 19:21:00](https://it.slashdot.org/story/25/09/23/1758250/microsoft-brings-microfluidics-to-datacenter-cooling-with-3x-performance-gain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Brings Microfluidics To Datacenter Cooling With 3X Performance Gain](https://it.slashdot.org/story/25/09/23/1758250/microsoft-brings-microfluidics-to-datacenter-cooling-with-3x-performance-gain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 19:13:36](https://lobste.rs/s/iibpk0/128_language_quine_relay_2018) - [The 128-Language Quine Relay (2018)](https://esoteric.codes/blog/the-128-language-quine-relay)
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
* [2025-09-23, 15:20:00](https://news.slashdot.org/story/25/09/23/1441229/us-secret-service-dismantles-telecommunications-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Secret Service &apos;Dismantles Telecommunications Threat&apos;](https://news.slashdot.org/story/25/09/23/1441229/us-secret-service-dismantles-telecommunications-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 14:52:07](https://news.ycombinator.com/item?id=45347914) - [Launch HN: Strata (YC X25) – One MCP server for AI to handle thousands of tools](https://news.ycombinator.com/item?id=45347914)
* [2025-09-23, 14:27:36](https://news.ycombinator.com/item?id=45347532) - [Getting AI to work in complex codebases](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/ace-fca.md)
* [2025-09-23, 13:56:28](https://news.ycombinator.com/item?id=45347117) - [Libghostty is coming](https://mitchellh.com/writing/libghostty-is-coming)
* [2025-09-23, 13:41:23](https://lobste.rs/s/wb9ocu/using_dns_for_responding_acme_challenges) - [Using DNS for responding to ACME challenges](https://hsm.tunnel53.net/article/dns-for-acme-challenges/)
* [2025-09-23, 13:24:00](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss) - [Deaths From Flesh-Eating Bacteria are on the Rise. Who is at Risk?](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss)
* [2025-09-23, 12:30:20](https://lobste.rs/s/x2jobn/go_has_added_valgrind_support) - [Go has added Valgrind support](https://go-review.googlesource.com/c/go/+/674077)
* [2025-09-23, 12:18:01](https://news.ycombinator.com/item?id=45345950) - [Mesh: I tried Htmx, then ditched it](https://ajmoon.com/posts/mesh-i-tried-htmx-then-ditched-it)
* [2025-09-23, 10:47:46](https://lobste.rs/s/6wzpji/crypto_miner_hotio_qbittorrent) - [Crypto Miner in hotio/qbittorrent](https://apogliaghi.com/2025/09/crypto-miner-in-hotio/qbittorrent/)
* [2025-09-23, 08:35:00](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss) - [We Risk a Deluge of AI-Written ‘Science’ Pushing Corporate Interests](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss)
* [2025-09-23, 06:40:51](https://lobste.rs/s/f6yv3w/wild_linker_update_0_6_0) - [Wild Linker Update - 0.6.0](https://davidlattimore.github.io/posts/2025/09/23/wild-update-0.6.0.html)
* [2025-09-23, 03:52:00](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss) - [Something Extremely Strange is Happening at the Event Horizon of This Supermassive Blackhole](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss)
* [2025-09-23, 02:11:38](https://lobste.rs/s/yiq42c/ai_generated_workslop_is_destroying) - [AI-Generated “Workslop” Is Destroying Productivity](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity)
* [2025-09-22, 23:08:00](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss) - [OpenAI&apos;s Research on AI Models Deliberately Lying is Wild](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss)
* [2025-09-22, 22:47:42](https://lobste.rs/s/uirhie/libghostty_is_coming) - [Libghostty Is Coming](https://mitchellh.com/writing/libghostty-is-coming)
* [2025-09-22, 22:08:27](https://lobste.rs/s/a8bwsw/imagining_language_without_booleans) - [Imagining a Language without Booleans](https://justinpombrio.net/2025/09/22/imagining-a-language-without-booleans.html)
* [2025-09-22, 18:23:00](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss) - [Online Book:  The Pattern Language of Software Architecture](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss)
* [2025-09-22, 13:40:00](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss) - [Electronic Locks Have Backdoors, Too](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss)
* [2025-09-22, 13:06:10](https://lobste.rs/s/xbmvou/why_i_m_spoiled_by_apple_silicon_still_love) - [Why I&apos;m Spoiled By Apple Silicon (But Still Love Framework)](https://simonhartcher.com/posts/2025-09-22-why-im-spoiled-by-apple-silicon-but-still-love-framework/)
* [2025-09-22, 08:53:00](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss) - [Rare Apple-1 With Storied Ownership Fetched Over $500,000 at Auction](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss)
* [2025-09-22, 04:22:32](https://news.ycombinator.com/item?id=45329080) - [Building a better online editor for TypeScript](https://blog.val.town/vtlsp)
* [2025-09-22, 04:07:00](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss) - [AI Can Forecast Your Future Health – Just Like the Weather](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss)
* [2025-09-21, 23:23:00](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss) - [When Non-Avian Dinosaurs Went Extinct, the Earth Changed](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss)
* [2025-09-21, 18:44:00](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss) - [Half a Million Screens go Dark . . .](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss)
* [2025-09-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss) - [Netscape Navigator 2.0 Was Released 30 years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss)
* [2025-09-21, 09:08:00](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss) - [Brazil&apos;s Payment System Puts Credit Card Firms to the Test](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss)
* [2025-09-21, 05:52:51](https://news.ycombinator.com/item?id=45320382) - [A webshell and a normal file that have the same MD5](https://github.com/phith0n/collision-webshell)
* [2025-09-21, 04:22:00](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss) - [IG Nobel 2025 winners](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss)
* [2025-09-21, 03:30:07](https://news.ycombinator.com/item?id=45319791) - [Processing Strings 109x Faster Than Nvidia on H100](https://ashvardanian.com/posts/stringwars-on-gpus/)
* [2025-09-20, 23:38:00](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss) - [Education Report Calling for Ethical AI Use Contains Over 15 Fake Sources](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss)
* [2025-09-20, 18:51:00](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss) - [Scientists: It&apos;s Do or Die Time for America&apos;s Primacy Exploring the Solar System](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss)
* [2025-09-20, 14:07:00](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss) - [Nobody Wanted This: Samsung Fridges are Getting Ads](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss)
* [2025-09-20, 11:33:47](https://news.ycombinator.com/item?id=45312403) - [A vibrator helped me debug a motorcycle brake light system](https://bikesafe.me/blogs/news/how-a-vibrator-helped-me-debug-a-motorcycle-brake-light-system)
* [2025-09-20, 10:42:06](https://news.ycombinator.com/item?id=45312153) - [Simplifying Cross-Chain Transactions Using Intents](https://blog.shodipoayomide.com/Simplifying-Cross-Chain-Transactions-Using-Intents)
* [2025-09-20, 09:21:00](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss) - [L.A. Man Sentenced to 14 Days in Prison for Accidentally Crashing Drone Into Firefighting Plane](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss)
* [2025-09-20, 08:22:41](https://news.ycombinator.com/item?id=45311498) - [Introduction to Programming Languages](https://hjaem.info/itpl)
* [2025-09-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss) - [Feds Launch Investigation Into Faulty Tesla Doors](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss)
