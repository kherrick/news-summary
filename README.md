# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [Nix that looks like Bazel](https://fzakaria.com/2025/04/02/nix-that-looks-like-bazel) explores adapting Nix workflows to resemble Bazel for developers more familiar with build systems like Bazel, fostering easier adoption for complex CI setups. [Comments](https://lobste.rs/s/jopsqd/nix_looks_like_bazel)

* [Show HN: Offline JavaScript PubSub between browser tabs](https://simon-frey.com/tabsub/) introduces TabSub, enabling browser tabs to communicate offline using JavaScript PubSub, pushing the limits of web-based interactivity. [Comments](https://news.ycombinator.com/item?id=43569961)

* [Show HN: Novnaode, Global load balancing with Caddy, no vendor lock-in](https://news.ycombinator.com/item?id=43570749) showcases an open tool for global load balancing and decentralization utilizing Caddy with no dependence on specific vendors.

* [arena: Arena Allocator implementation in pure C as an stb-style single-file library](https://github.com/tsoding/arena) discusses the utility of a lightweight memory management library tailored for C developers. [Comments](https://lobste.rs/s/vslqmv/arena_arena_allocator_implementation)

* [Ray on Kubernetes at Uber](https://www.uber.com/en-GB/blog/ubers-journey-to-ray-on-kubernetes-ray-setup/) highlights Uber's experience transitioning to Ray on Kubernetes for scalable machine learning workflows. [Comments](https://lobste.rs/s/g3tvug/ray_on_kubernetes_at_uber)

## Programming, Tools, and Open Source

* [Introducing Nix Ninja – open-source Ninja-compatible build system for Nix](https://github.com/pdtpartners/nix-ninja) offers an innovative integration of Ninja build systems with Nix for enhanced build management capabilities. [Comments](https://lobste.rs/s/0jxkj4/introducing_nix_ninja_open_source_ninja)

* [Announcing Rust 1.86.0](https://blog.rust-lang.org/2025/04/03/Rust-1.86.0.html) celebrates new updates and features in Rust, emphasizing improvements in performance and developer tools. [Comments](https://lobste.rs/s/t90zb0/announcing_rust_1_86_0)

* [Microsoft Pulls Back on Data Centers From Chicago To Jakarta](https://slashdot.org/story/25/04/03/144259/microsoft-pulls-back-on-data-centers-from-chicago-to-jakarta?utm_source=rss1.0mainlinkanon&utm_medium=feed) reports on Microsoft's reduction in global data center investments, signaling market adjustments. [Comments](https://lobste.rs/s/h7btkw/celebrate_50_years_microsoft_with)

* [DST for async Rust](https://s2.dev/blog/dst) unfolds strategies to implement dynamically sized types within async Rust, broadening its capabilities. [Comments](https://lobste.rs/s/qftydp/dst_for_async_rust)

* [Show HN: Zxc – Rust TLS proxy with tmux and Vim as UI, BurpSuite alternative](https://github.com/hail-hydrant/zxc) positions itself as a competitive Rust-powered TLS proxy with extensible developer features. [Comments](https://news.ycombinator.com/item?id=43568771)

## AI and Machine Learning

* [Search-R1: Training LLMs to Reason and Leverage Search Engines with RL](https://arxiv.org/abs/2503.09516) introduces methodologies for improving large language models’ reasoning capacities through search engine enhancement and reinforcement learning. [Comments](https://news.ycombinator.com/item?id=43563265)

* [AI ambivalence](https://nolanlawson.com/2025/04/02/ai-ambivalence/) reflects on the polarized discourse around AI developments, questioning its role in society. [Comments](https://lobste.rs/s/l7any5/ai_ambivalence)

* [Vibe Coded AI App Generates Recipes With Very Few Guardrails](https://tech.slashdot.org/story/25/04/03/0230255/vibe-coded-ai-app-generates-recipes-with-very-few-guardrails?utm_source=rss1.0mainlinkanon&utm_medium=feed) probes into the challenges and quirks of AI-generated culinary recipes with limited oversight. [Comments](https://lobste.rs/s/qftydp/dst_for_async_rust)

## Space and Environment

* [ESA's New Documentary Paints Worrying Picture of Earth's Orbital Junk Problem](https://science.slashdot.org/story/25/04/03/0248204/esas-new-documentary-paints-worrying-picture-of-earths-orbital-junk-problem?utm_source=rss1.0mainlinkanon&utm_medium=feed) sheds light on the growing issue of space debris, urging action from global players. [Comments](https://lobste.rs/s/9ghf2s/keeping_lhc_colliding_providing)

* [Amazon Set To Launch First Operational Satellites For Project Kuiper Network](https://tech.slashdot.org/story/25/04/03/0237250/amazon-set-to-launch-first-operational-satellites-for-project-kuiper-network?utm_source=rss1.0mainlinkanon&utm_medium=feed) showcases Amazon’s ambitious efforts to rollout its satellite-based internet services network. [Comments](https://lobste.rs/s/9ghf2s/keeping_lhc_colliding_providing)

* [First Orbital Rocket Launched From Mainland Europe Crashes After Takeoff](https://soylentnews.org/article.pl?sid=25/04/02/034207&from=rss) covers the European space industry's setback in deploying a successful orbital mission. [Comments](https://lobste.rs/s/9ghf2s/keeping_lhc_colliding_providing)

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

* [2025-04-03, 16:01:22](https://lobste.rs/s/jopsqd/nix_looks_like_bazel) - [Nix that looks like Bazel](https://fzakaria.com/2025/04/02/nix-that-looks-like-bazel)
* [2025-04-03, 15:51:19](https://lobste.rs/s/utis5o/initware_systemd_like_clone_for_bsds) - [InitWare: systemd-like clone for BSDs](https://github.com/InitWare/InitWare)
* [2025-04-03, 15:30:35](https://lobste.rs/s/g3tvug/ray_on_kubernetes_at_uber) - [Ray on Kubernetes at Uber](https://www.uber.com/en-GB/blog/ubers-journey-to-ray-on-kubernetes-ray-setup/)
* [2025-04-03, 15:27:00](https://news.slashdot.org/story/25/04/03/1526250/av1-is-supposed-to-make-streaming-better-so-why-isnt-everyone-using-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AV1 is Supposed To Make Streaming Better, So Why Isn&apos;t Everyone Using It?](https://news.slashdot.org/story/25/04/03/1526250/av1-is-supposed-to-make-streaming-better-so-why-isnt-everyone-using-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-03, 14:59:42](https://news.ycombinator.com/item?id=43570749) - [Show HN: Novnaode, Global load balancing with Caddy, no vendor lock-in](https://news.ycombinator.com/item?id=43570749)
* [2025-04-03, 14:47:00](https://tech.slashdot.org/story/25/04/03/1447221/schrodingers-economics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Schrodinger&apos;s Economics](https://tech.slashdot.org/story/25/04/03/1447221/schrodingers-economics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-03, 14:36:41](https://news.ycombinator.com/item?id=43570324) - [Overengineered Anchor Links](https://thirty-five.com/overengineered-anchoring)
* [2025-04-03, 14:09:59](https://news.ycombinator.com/item?id=43569961) - [Show HN: Offline JavaScript PubSub between browser tabs](https://simon-frey.com/tabsub/)
* [2025-04-03, 14:04:00](https://slashdot.org/story/25/04/03/144259/microsoft-pulls-back-on-data-centers-from-chicago-to-jakarta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Pulls Back on Data Centers From Chicago To Jakarta](https://slashdot.org/story/25/04/03/144259/microsoft-pulls-back-on-data-centers-from-chicago-to-jakarta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-03, 13:55:38](https://news.ycombinator.com/item?id=43569724) - [Show HN: The C3 programming language (C alternative language)](https://news.ycombinator.com/item?id=43569724)
* [2025-04-03, 13:35:00](https://soylentnews.org/article.pl?sid=25/04/02/036222&amp;from=rss) - [News Outlets Fighting Back Against Distrust With \&quot;Ethics Boxes\&quot;??](https://soylentnews.org/article.pl?sid=25/04/02/036222&amp;from=rss)
* [2025-04-03, 13:19:05](https://news.ycombinator.com/item?id=43569190) - [Show HN: OpenNutrition – A free, public nutrition database](https://www.opennutrition.app/search)
* [2025-04-03, 13:03:34](https://news.ycombinator.com/item?id=43569009) - [Hackers stole billions in crypto to keep North Korea’s regime afloat](https://www.wsj.com/world/asia/north-korea-cryptocurrency-580d7d3f)
* [2025-04-03, 13:00:00](https://yro.slashdot.org/story/25/04/03/0253238/microsoft-amazon-execs-call-out-washingtons-low-performing-9-year-olds-in-tax-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft, Amazon Execs Call Out Washington&apos;s Low-Performing 9-Year-Olds In Tax Pushback](https://yro.slashdot.org/story/25/04/03/0253238/microsoft-amazon-execs-call-out-washingtons-low-performing-9-year-olds-in-tax-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-03, 12:41:10](https://news.ycombinator.com/item?id=43568771) - [Show HN: Zxc – Rust TLS proxy with tmux and Vim as UI, BurpSuite alternative](https://github.com/hail-hydrant/zxc)
* [2025-04-03, 12:11:51](https://news.ycombinator.com/item?id=43568503) - [InitWare, a portable systemd fork running on BSDs and Linux](https://github.com/InitWare/InitWare)
* [2025-04-03, 12:08:57](https://lobste.rs/s/h7btkw/celebrate_50_years_microsoft_with) - [Celebrate 50 years of Microsoft with the company&apos;s original source code](https://www.gatesnotes.com/meet-bill/source-code/reader/microsoft-original-source-code?WT.mc_id=20250331100000_Microsoft-50th_MED-MED)
* [2025-04-03, 12:00:16](https://news.ycombinator.com/item?id=43568380) - [Type (YC W23) is hiring a senior software engineer](https://www.ycombinator.com/companies/type/jobs/m3GcN1t-senior-software-engineer)
* [2025-04-03, 11:12:56](https://news.ycombinator.com/item?id=43567923) - [The Steam Deck is software-freedom friendly](https://isomorphism.xyz/blog/2024/steam-deck/)
* [2025-04-03, 11:11:40](https://lobste.rs/s/trlke6/steam_deck_is_software_freedom_friendly) - [The Steam Deck is Software-Freedom friendly](https://agnishom.github.io/blog/2024/steam-deck/)
* [2025-04-03, 11:10:32](https://lobste.rs/s/0jxkj4/introducing_nix_ninja_open_source_ninja) - [Introducing Nix Ninja – open-source Ninja-compatible build system for Nix](https://github.com/pdtpartners/nix-ninja)
* [2025-04-03, 10:31:23](https://lobste.rs/s/t90zb0/announcing_rust_1_86_0) - [Announcing Rust 1.86.0](https://blog.rust-lang.org/2025/04/03/Rust-1.86.0.html)
* [2025-04-03, 10:00:00](https://science.slashdot.org/story/25/04/03/0248204/esas-new-documentary-paints-worrying-picture-of-earths-orbital-junk-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ESA&apos;s New Documentary Paints Worrying Picture of Earth&apos;s Orbital Junk Problem](https://science.slashdot.org/story/25/04/03/0248204/esas-new-documentary-paints-worrying-picture-of-earths-orbital-junk-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-03, 09:31:40](https://lobste.rs/s/6iylqh/graphite_rusty_foss_procedural_2d_design) - [Graphite (Rusty FOSS procedural 2D design app) new feature demos from Q4](https://graphite.rs/blog/graphite-progress-report-q4-2024/)
* [2025-04-03, 08:52:00](https://soylentnews.org/article.pl?sid=25/04/02/034207&amp;from=rss) - [First Orbital Rocket Launched From Mainland Europe Crashes After Takeoff](https://soylentnews.org/article.pl?sid=25/04/02/034207&amp;from=rss)
* [2025-04-03, 08:44:46](https://lobste.rs/s/9ghf2s/keeping_lhc_colliding_providing) - [Keeping the LHC colliding: Providing Extended Lifecycle support for EL7 (by moving to Debian)](https://indico.cern.ch/event/1477299/contributions/6366311/attachments/3044120/5378338/20250403-HEPiX-cern-els7.pdf)
* [2025-04-03, 08:02:22](https://lobste.rs/s/mdtf4k/nelm_helm_3_alternative_is_generally) - [Nelm, a Helm 3 alternative, is generally available now](https://github.com/werf/nelm)
* [2025-04-03, 07:00:00](https://tech.slashdot.org/story/25/04/03/0237250/amazon-set-to-launch-first-operational-satellites-for-project-kuiper-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Set To Launch First Operational Satellites For Project Kuiper Network](https://tech.slashdot.org/story/25/04/03/0237250/amazon-set-to-launch-first-operational-satellites-for-project-kuiper-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-03, 06:45:35](https://lobste.rs/s/vslqmv/arena_arena_allocator_implementation) - [arena: Arena Allocator implementation in pure C as an stb-style single-file library](https://github.com/tsoding/arena)
* [2025-04-03, 04:41:53](https://lobste.rs/s/cpewo2/minimal_css_only_blurry_image) - [Minimal CSS-only blurry image placeholders](https://leanrada.com/notes/css-only-lqip/)
* [2025-04-03, 04:06:00](https://soylentnews.org/article.pl?sid=25/04/01/1135252&amp;from=rss) - [Honeybee Deaths Surge in U.S.: &apos;Something Real Bad is Going on&apos;](https://soylentnews.org/article.pl?sid=25/04/01/1135252&amp;from=rss)
* [2025-04-03, 04:04:40](https://lobste.rs/s/btggvs/openssh_10_call_for_testing_dsa) - [OpenSSH 10 call for testing, DSA deprecated](https://lists.mindrot.org/pipermail/openssh-unix-dev/2025-April/041855.html)
* [2025-04-03, 03:39:36](https://lobste.rs/s/vsdeih/c_26_variadic_friends) - [C++26: variadic friends](https://www.sandordargo.com/blog/2025/04/02/cpp26-variadic-friends)
* [2025-04-03, 03:30:30](https://news.ycombinator.com/item?id=43564386) - [Dijkstra On the foolishness of \&quot;natural language programming\&quot;](https://www.cs.utexas.edu/~EWD/transcriptions/EWD06xx/EWD667.html)
* [2025-04-03, 03:30:00](https://tech.slashdot.org/story/25/04/03/0230255/vibe-coded-ai-app-generates-recipes-with-very-few-guardrails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vibe Coded AI App Generates Recipes With Very Few Guardrails](https://tech.slashdot.org/story/25/04/03/0230255/vibe-coded-ai-app-generates-recipes-with-very-few-guardrails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-03, 02:40:08](https://news.ycombinator.com/item?id=43564111) - [I maintain a 17 year old ThinkPad](https://pilledtexts.com/why-i-use-a-17-year-old-thinkpad/)
* [2025-04-03, 02:17:07](https://lobste.rs/s/qftydp/dst_for_async_rust) - [DST for async Rust](https://s2.dev/blog/dst)
* [2025-04-03, 01:45:00](https://hardware.slashdot.org/story/25/04/03/0110212/open-source-tool-designed-to-throttle-pc-and-server-performance-based-on-electricity-pricing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Open-Source Tool Designed To Throttle PC and Server Performance Based On Electricity Pricing](https://hardware.slashdot.org/story/25/04/03/0110212/open-source-tool-designed-to-throttle-pc-and-server-performance-based-on-electricity-pricing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-03, 01:07:00](https://tech.slashdot.org/story/25/04/03/015223/nanowrimo-to-close-after-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NaNoWriMo To Close After 20 Years](https://tech.slashdot.org/story/25/04/03/015223/nanowrimo-to-close-after-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-03, 00:23:29](https://news.ycombinator.com/item?id=43563396) - [An open source, self-hosted implementation of the Tailscale control server](https://github.com/juanfont/headscale)
* [2025-04-03, 00:20:00](https://tech.slashdot.org/story/25/04/02/236215/five-vpn-apps-in-the-app-store-had-links-to-chinese-military?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Five VPN Apps In the App Store Had Links To Chinese Military](https://tech.slashdot.org/story/25/04/02/236215/five-vpn-apps-in-the-app-store-had-links-to-chinese-military?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-03, 00:02:16](https://news.ycombinator.com/item?id=43563265) - [Search-R1: Training LLMs to Reason and Leverage Search Engines with RL](https://arxiv.org/abs/2503.09516)
* [2025-04-02, 23:40:00](https://news.slashdot.org/story/25/04/02/232215/anthropic-launches-an-ai-chatbot-plan-for-colleges-and-universities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Launches an AI Chatbot Plan For Colleges and Universities](https://news.slashdot.org/story/25/04/02/232215/anthropic-launches-an-ai-chatbot-plan-for-colleges-and-universities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 23:22:00](https://soylentnews.org/article.pl?sid=25/03/31/0416212&amp;from=rss) - [FuguIta: OpenBSD Live CD - Celebrates Their 20th Anniversary!](https://soylentnews.org/article.pl?sid=25/03/31/0416212&amp;from=rss)
* [2025-04-02, 23:10:55](https://news.ycombinator.com/item?id=43562860) - [Web Server for AoE 1, 2 and 3 DE supporting LAN multiplayer 100% offline](https://github.com/luskaner/ageLANServer)
* [2025-04-02, 23:00:00](https://slashdot.org/story/25/04/02/2152245/india-set-for-100-billion-startup-ipo-surge-by-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India Set For $100 Billion Startup IPO Surge By 2027](https://slashdot.org/story/25/04/02/2152245/india-set-for-100-billion-startup-ipo-surge-by-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 22:20:53](https://news.ycombinator.com/item?id=43562384) - [Multi-Token Attention](https://arxiv.org/abs/2504.00927)
* [2025-04-02, 22:20:00](https://slashdot.org/story/25/04/02/2145238/bill-gates-celebrates-microsofts-50th-by-releasing-altair-basic-source-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bill Gates Celebrates Microsoft&apos;s 50th By Releasing Altair BASIC Source Code](https://slashdot.org/story/25/04/02/2145238/bill-gates-celebrates-microsofts-50th-by-releasing-altair-basic-source-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 21:54:13](https://news.ycombinator.com/item?id=43562109) - [MIT 6.5950 Secure Hardware Design – An open-source course on hardware attacks](https://shd.mit.edu/home/)
* [2025-04-02, 21:41:00](https://yro.slashdot.org/story/25/04/02/2140214/vast-pedophile-network-shut-down-in-europols-largest-csam-operation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vast Pedophile Network Shut Down In Europol&apos;s Largest CSAM Operation](https://yro.slashdot.org/story/25/04/02/2140214/vast-pedophile-network-shut-down-in-europols-largest-csam-operation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 21:01:00](https://yro.slashdot.org/story/25/04/02/204208/global-scam-industry-evolving-at-unprecedented-scale-despite-recent-crackdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Global Scam Industry Evolving at &apos;Unprecedented Scale&apos; Despite Recent Crackdown](https://yro.slashdot.org/story/25/04/02/204208/global-scam-industry-evolving-at-unprecedented-scale-despite-recent-crackdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 20:39:06](https://news.ycombinator.com/item?id=43561253) - [US Administration announces 34% tariffs on China, 20% on EU](https://www.bbc.com/news/live/c1dr7vy39eet)
* [2025-04-02, 20:02:09](https://news.ycombinator.com/item?id=43560899) - [Pico.sh – SSH powered services for developers](https://pico.sh/)
* [2025-04-02, 19:59:17](https://lobste.rs/s/aupah1/gerrit_gitbutler_jujutsu_projects) - [Gerrit, GitButler, and Jujutsu projects collaborating on change-id commit footer](https://lore.kernel.org/git/CAESOdVAspxUJKGAA58i0tvks4ZOfoGf1Aa5gPr0FXzdcywqUUw@mail.gmail.com/T/#u)
* [2025-04-02, 19:54:40](https://lobste.rs/s/d6x0lo/year_rust_clickhouse) - [A Year of Rust in ClickHouse](https://clickhouse.com/blog/rust)
* [2025-04-02, 18:47:59](https://lobste.rs/s/lvofny/valkey_new_hash_table) - [Valkey - A new hash table](https://valkey.io/blog/new-hash-table/)
* [2025-04-02, 18:20:39](https://lobste.rs/s/l7any5/ai_ambivalence) - [AI ambivalence](https://nolanlawson.com/2025/04/02/ai-ambivalence/)
* [2025-04-02, 18:14:44](https://news.ycombinator.com/item?id=43559605) - [Why I don&apos;t discuss politics with friends](https://shwin.co/blog/why-i-dont-discuss-politics-with-friends)
* [2025-04-02, 17:24:39](https://lobste.rs/s/s6nlac/cell_phone_opsec_for_border_crossings) - [Cell Phone OPSEC for Border Crossings](https://www.schneier.com/blog/archives/2025/04/cell-phone-opsec-for-border-crossings.html)
* [2025-04-02, 16:49:56](https://news.ycombinator.com/item?id=43558671) - [Tell HN: Announcing tomhow as a public moderator](https://news.ycombinator.com/item?id=43558671)
* [2025-04-02, 16:24:00](https://soylentnews.org/article.pl?sid=25/03/31/1729253&amp;from=rss) - [AI Search Engines Cite Incorrect News Sources at an Alarming 60% Rate, Study Says](https://soylentnews.org/article.pl?sid=25/03/31/1729253&amp;from=rss)
* [2025-04-02, 15:57:55](https://lobste.rs/s/8emy5x/chawan_tui_web_browser) - [chawan: TUI Web Browser](https://sr.ht/%7Ebptato/chawan/)
* [2025-04-02, 15:35:25](https://news.ycombinator.com/item?id=43557873) - [Animals Made from 13 Circles (2016)](https://www.dorithegiant.com/2016/05/13-animals-made-from-13-circles.html)
* [2025-04-02, 14:10:57](https://lobste.rs/s/oliu4b/django_5_2_released) - [Django 5.2 released](https://www.djangoproject.com/weblog/2025/apr/02/django-52-released/)
* [2025-04-02, 13:11:55](https://lobste.rs/s/autpsf/how_crawlers_impact_operations) - [How crawlers impact the operations of the Wikimedia projects](https://diff.wikimedia.org/2025/04/01/how-crawlers-impact-the-operations-of-the-wikimedia-projects/)
* [2025-04-02, 11:38:00](https://soylentnews.org/article.pl?sid=25/03/31/1720218&amp;from=rss) - [Study Reveals Tool Use in Tropical Fish Species](https://soylentnews.org/article.pl?sid=25/03/31/1720218&amp;from=rss)
* [2025-04-02, 11:29:24](https://lobste.rs/s/rhkjsk/grepping_logs_remains_terrible) - [Grepping logs remains terrible](https://chronicles.mad-scientist.club/tales/grepping-logs-remains-terrible/)
* [2025-04-02, 10:28:37](https://lobste.rs/s/1xj2y2/fifth_kind_optimisation) - [The Fifth Kind of Optimisation](https://tratt.net/laurie/blog/2025/the_fifth_kind_of_optimisation.html)
* [2025-04-02, 06:53:00](https://soylentnews.org/article.pl?sid=25/03/31/1714219&amp;from=rss) - [75% of US Scientists Who Answered Nature Poll Consider Leaving](https://soylentnews.org/article.pl?sid=25/03/31/1714219&amp;from=rss)
* [2025-04-02, 02:07:00](https://soylentnews.org/article.pl?sid=25/03/31/1248211&amp;from=rss) - [Microsoft&apos;s Killing Script Used to Avoid Microsoft Account in Windows 11](https://soylentnews.org/article.pl?sid=25/03/31/1248211&amp;from=rss)
* [2025-04-01, 21:24:00](https://soylentnews.org/article.pl?sid=25/03/31/1243220&amp;from=rss) - [The Internet Oracle Has Pondered Your Question Deeply - Revisiting an Old Friend](https://soylentnews.org/article.pl?sid=25/03/31/1243220&amp;from=rss)
* [2025-04-01, 16:38:00](https://soylentnews.org/article.pl?sid=25/03/31/1218257&amp;from=rss) - [Back to Cash: Life Without Money in Your Pocket is Not the Utopia Sweden Hoped](https://soylentnews.org/article.pl?sid=25/03/31/1218257&amp;from=rss)
* [2025-04-01, 11:55:00](https://soylentnews.org/article.pl?sid=25/04/01/0749220&amp;from=rss) - [After Trump&apos;s Decree: Fight for US Funding for Tor, F-Droid and Let&apos;s Encrypt](https://soylentnews.org/article.pl?sid=25/04/01/0749220&amp;from=rss)
* [2025-04-01, 07:09:00](https://soylentnews.org/article.pl?sid=25/03/31/0411203&amp;from=rss) - [Ending Remote Work Has Major Consequences for Women](https://soylentnews.org/article.pl?sid=25/03/31/0411203&amp;from=rss)
* [2025-04-01, 02:23:00](https://soylentnews.org/article.pl?sid=25/03/31/045231&amp;from=rss) - [Word of the Day: Zwitterionic](https://soylentnews.org/article.pl?sid=25/03/31/045231&amp;from=rss)
* [2025-03-31, 21:37:00](https://soylentnews.org/article.pl?sid=25/03/31/042242&amp;from=rss) - [NASA Early Galaxy Discovery Shines Light on &apos;Cosmic Dark Ages&apos;](https://soylentnews.org/article.pl?sid=25/03/31/042242&amp;from=rss)
* [2025-03-31, 19:41:46](https://news.ycombinator.com/item?id=43538986) - [AI/Math Puzzle](https://aggressivelyparaphrasing.me/2025/03/31/can-you-solve-this-ai-math-puzzle-and-get-a-prize-i-couldnt/)
* [2025-03-31, 16:55:00](https://soylentnews.org/article.pl?sid=25/03/31/0349222&amp;from=rss) - [The Practical Limitations of End-to-End Encryption](https://soylentnews.org/article.pl?sid=25/03/31/0349222&amp;from=rss)
* [2025-03-31, 15:10:04](https://news.ycombinator.com/item?id=43535937) - [John Cage recital set to last 639 years recently witnessed a chord change](https://www.spectator.co.uk/article/what-were-we-all-doing-here-my-600-mile-trip-to-hear-an-organ-play-a-d-natural/)
* [2025-03-31, 12:54:46](https://news.ycombinator.com/item?id=43534480) - [Flame – BBS and MUD](https://www.ucc.asn.au/services/flame.ucc)
* [2025-03-31, 12:09:00](https://soylentnews.org/article.pl?sid=25/03/31/0347227&amp;from=rss) - [Elon Musk’s X Has a New Owner](https://soylentnews.org/article.pl?sid=25/03/31/0347227&amp;from=rss)
* [2025-03-31, 08:25:20](https://news.ycombinator.com/item?id=43532551) - [Apple&apos;s Cubify Anything: Scaling Indoor 3D Object Detection](https://github.com/apple/ml-cubifyanything)
* [2025-03-31, 07:24:00](https://soylentnews.org/article.pl?sid=25/03/31/0341226&amp;from=rss) - [Apple and Google Face Billions in Liability From Trump&apos;s Tiktok Ban Delay](https://soylentnews.org/article.pl?sid=25/03/31/0341226&amp;from=rss)
* [2025-03-31, 06:15:52](https://news.ycombinator.com/item?id=43531695) - [An AlphaStation&apos;s SROM](https://thejpster.org.uk/blog/blog-2025-03-30/)
* [2025-03-31, 06:00:00](https://soylentnews.org/article.pl?sid=25/03/28/1139202&amp;from=rss) - [Soylent News Entering a New Phase](https://soylentnews.org/article.pl?sid=25/03/28/1139202&amp;from=rss)
* [2025-03-31, 05:35:54](https://news.ycombinator.com/item?id=43531465) - [Bedded Bugs and Stung Beetles: The Cameraman&apos;s Revenge (1912)](https://publicdomainreview.org/collection/cameramans-revenge/)
* [2025-03-31, 02:39:00](https://soylentnews.org/article.pl?sid=25/03/28/1410255&amp;from=rss) - [23andMe Customers Struggle to Delete Their Data](https://soylentnews.org/article.pl?sid=25/03/28/1410255&amp;from=rss)
* [2025-03-30, 21:53:00](https://soylentnews.org/article.pl?sid=25/03/28/1431238&amp;from=rss) - [New Utah Law Makes App Stores Responsible for Age Verification](https://soylentnews.org/article.pl?sid=25/03/28/1431238&amp;from=rss)
* [2025-03-30, 19:44:55](https://news.ycombinator.com/item?id=43526957) - [Show HN: Chip-8 emulator written in JavaScript](https://github.com/victorqribeiro/Chip8js)
* [2025-03-30, 17:14:00](https://soylentnews.org/article.pl?sid=25/03/28/1425255&amp;from=rss) - [DragonOS is a Lubuntu-Based Desktop Distro Which is Focused on Software Defined Radio (SDR)](https://soylentnews.org/article.pl?sid=25/03/28/1425255&amp;from=rss)
* [2025-03-30, 12:28:00](https://soylentnews.org/article.pl?sid=25/03/30/0940218&amp;from=rss) - [I&apos;m an American Software Developer and the \&quot;Broligarchs\&quot; Don&apos;t Speak for Me (or Anyone I Know.)](https://soylentnews.org/article.pl?sid=25/03/30/0940218&amp;from=rss)
* [2025-03-30, 11:11:35](https://news.ycombinator.com/item?id=43523220) - [Minimal CSS-only blurry image placeholders](https://leanrada.com/notes/css-only-lqip/)
* [2025-03-30, 07:42:00](https://soylentnews.org/article.pl?sid=25/03/28/146215&amp;from=rss) - [A Tardigrade Protein Helped Reduce Radiation Damage In Mice](https://soylentnews.org/article.pl?sid=25/03/28/146215&amp;from=rss)
* [2025-03-30, 03:03:00](https://soylentnews.org/article.pl?sid=25/03/28/1353243&amp;from=rss) - [Tor Network Status - A Pretty Yet Detailed Current List of Nodes and Type](https://soylentnews.org/article.pl?sid=25/03/28/1353243&amp;from=rss)
