# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Data

* [Deutsche Bank Explores Hedges For Data Centre Exposure as AI Lending Booms](https://slashdot.org/story/25/11/05/182230/deutsche-bank-explores-hedges-for-data-centre-exposure-as-ai-lending-booms?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [OpenAI ends legal and medical advice on ChatGPT](https://www.ctvnews.ca/sci-tech/article/openai-updates-policies-so-chatgpt-wont-provide-medical-or-legal-advice/)

* [China Bans Foreign AI Chips From State-Funded Data Centres](https://slashdot.org/story/25/11/05/1752200/china-bans-foreign-ai-chips-from-state-funded-data-centres?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [DRAM Costs Surge Past Gold as AI Demand Strains Supply](https://it.slashdot.org/story/25/11/05/147220/dram-costs-surge-past-gold-as-ai-demand-strains-supply?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cybersecurity and Software

* [oss-security - runc container breakouts via procfs writes: CVE-2025-31133, CVE-2025-52565, and CVE-2025-52881](https://www.openwall.com/lists/oss-security/2025/11/05/3)

* [Norway reviews cybersecurity after remote-access feature found in Chinese buses](https://scandasia.com/norway-reviews-cybersecurity-after-hidden-remote-access-feature-found-in-chinese-buses/)

* [Removing XSLT for a more secure browser](https://developer.chrome.com/docs/web-platform/deprecating-xslt)

* [Data Breach At Major Swedish Software Supplier Impacts 1.5 Million](https://yro.slashdot.org/story/25/11/05/0013234/data-breach-at-major-swedish-software-supplier-impacts-15-million?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Technology and Hardware

* [Kodak Quietly Begins Directly Selling Kodak Gold and Ultramax Film Again](https://it.slashdot.org/story/25/11/05/1643214/kodak-quietly-begins-directly-selling-kodak-gold-and-ultramax-film-again?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [China Achieves Thorium-Uranium Conversion Within Molten Salt Reactor](https://hardware.slashdot.org/story/25/11/05/0052206/china-achieves-thorium-uranium-conversion-within-molten-salt-reactor?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [The World's Tallest Chip Defies the Limits of Computing: Goodbye To Moore's Law?](https://hardware.slashdot.org/story/25/11/04/235241/the-worlds-tallest-chip-defies-the-limits-of-computing-goodbye-to-moores-law?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Environment and Science

* [Brazil Proposes a New Type of Fund To Protect Tropical Forests](https://news.slashdot.org/story/25/11/05/1441220/brazil-proposes-a-new-type-of-fund-to-protect-tropical-forests?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Trump Re-Nominates Billionaire Jared Isaacman To Run NASA](https://science.slashdot.org/story/25/11/05/010250/trump-re-nominates-billionaire-jared-isaacman-to-run-nasa?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [We're About to Find Many More Interstellar Interlopers—Here's How to Visit One](https://soylentnews.org/article.pl?sid=25/11/04/0214241&from=rss)

## Industry and Economics

* [Epic and Google Settle Antitrust Case With Global Fee Cuts and Easier Third-Party Store Access](https://tech.slashdot.org/story/25/11/05/1729212/epic-and-google-settle-antitrust-case-with-global-fee-cuts-and-easier-third-party-store-access?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [World Economic Forum Chief Warns of Three Possible 'Bubbles' in Global Economy](https://slashdot.org/story/25/11/05/1542255/world-economic-forum-chief-warns-of-three-possible-bubbles-in-global-economy?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Microsoft Can't Keep EU Data Safe from US Authorities](https://www.forbes.com/sites/emmawoollacott/2025/07/22/microsoft-cant-keep-eu-data-safe-from-us-authorities/)

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

* [2025-11-05, 18:50:00](https://slashdot.org/story/25/11/05/182230/deutsche-bank-explores-hedges-for-data-centre-exposure-as-ai-lending-booms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Deutsche Bank Explores Hedges For Data Centre Exposure as AI Lending Booms](https://slashdot.org/story/25/11/05/182230/deutsche-bank-explores-hedges-for-data-centre-exposure-as-ai-lending-booms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 18:20:31](https://lobste.rs/s/qf0qls/bikeshedding_handle_other_follow_up) - [Bikeshedding `Handle` and other follow-up thoughts](https://smallcultfollowing.com/babysteps/blog/2025/11/05/bikeshedding-handle/)
* [2025-11-05, 18:11:16](https://news.ycombinator.com/item?id=45825965) - [OpenAI ends legal and medical advice on ChatGPT](https://www.ctvnews.ca/sci-tech/article/openai-updates-policies-so-chatgpt-wont-provide-medical-or-legal-advice/)
* [2025-11-05, 18:10:00](https://slashdot.org/story/25/11/05/1752200/china-bans-foreign-ai-chips-from-state-funded-data-centres?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Bans Foreign AI Chips From State-Funded Data Centres](https://slashdot.org/story/25/11/05/1752200/china-bans-foreign-ai-chips-from-state-funded-data-centres?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 17:29:00](https://tech.slashdot.org/story/25/11/05/1729212/epic-and-google-settle-antitrust-case-with-global-fee-cuts-and-easier-third-party-store-access?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Epic and Google Settle Antitrust Case With Global Fee Cuts and Easier Third-Party Store Access](https://tech.slashdot.org/story/25/11/05/1729212/epic-and-google-settle-antitrust-case-with-global-fee-cuts-and-easier-third-party-store-access?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 17:14:21](https://lobste.rs/s/7w2aj3/myna_monospace_typeface_designed_for) - [Myna: monospace typeface designed for symbol-heavy programming languages](https://github.com/sayyadirfanali/Myna)
* [2025-11-05, 17:02:48](https://lobste.rs/s/lkuzol/oss_security_runc_container_breakouts) - [oss-security - runc container breakouts via procfs writes: CVE-2025-31133, CVE-2025-52565, and CVE-2025-52881](https://www.openwall.com/lists/oss-security/2025/11/05/3)
* [2025-11-05, 16:44:00](https://it.slashdot.org/story/25/11/05/1643214/kodak-quietly-begins-directly-selling-kodak-gold-and-ultramax-film-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kodak Quietly Begins Directly Selling Kodak Gold and Ultramax Film Again](https://it.slashdot.org/story/25/11/05/1643214/kodak-quietly-begins-directly-selling-kodak-gold-and-ultramax-film-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 16:27:28](https://lobste.rs/s/8vhdqn/lixcon_2026) - [LixCon in 2026](https://lix.systems/blog/2025-11-05-lixcon-2026/)
* [2025-11-05, 16:18:01](https://news.ycombinator.com/item?id=45824658) - [Norway reviews cybersecurity after remote-access feature found in Chinese buses](https://scandasia.com/norway-reviews-cybersecurity-after-hidden-remote-access-feature-found-in-chinese-buses/)
* [2025-11-05, 16:05:01](https://lobste.rs/s/543etf/what_laptops_are_lobsters_rocking_2025) - [What laptops are Lobsters rocking in 2025 -- collected data](https://alopex.li/data/lobsters-laptops-2025.ods)
* [2025-11-05, 16:04:00](https://slashdot.org/story/25/11/05/1542255/world-economic-forum-chief-warns-of-three-possible-bubbles-in-global-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World Economic Forum Chief Warns of Three Possible &apos;Bubbles&apos; in Global Economy](https://slashdot.org/story/25/11/05/1542255/world-economic-forum-chief-warns-of-three-possible-bubbles-in-global-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 15:33:00](https://tech.slashdot.org/story/25/11/05/1533219/europes-self-driving-cars-arent-even-at-the-starting-line?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe&apos;s Self-Driving Cars Aren&apos;t Even at the Starting Line](https://tech.slashdot.org/story/25/11/05/1533219/europes-self-driving-cars-arent-even-at-the-starting-line?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 15:24:35](https://news.ycombinator.com/item?id=45823831) - [Ruby and Its Neighbors: Smalltalk](https://noelrappin.com/blog/2025/11/ruby-and-its-neighbors-smalltalk/)
* [2025-11-05, 15:24:05](https://lobste.rs/s/jzw3ih/disassembling_terabytes_random_data) - [Disassembling Terabytes of Random Data with Zig and Capstone to Prove a Point](https://jstrieb.github.io/posts/random-instructions/)
* [2025-11-05, 14:55:01](https://lobste.rs/s/qxwozm/recursive_macros_c_demystified_once_ugly) - [Recursive macros in C, demystified (once the ugly crying stops)](https://h4x0r.org/big-mac-ro-attack/)
* [2025-11-05, 14:45:00](https://news.slashdot.org/story/25/11/05/1441220/brazil-proposes-a-new-type-of-fund-to-protect-tropical-forests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brazil Proposes a New Type of Fund To Protect Tropical Forests](https://news.slashdot.org/story/25/11/05/1441220/brazil-proposes-a-new-type-of-fund-to-protect-tropical-forests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 14:41:00](https://soylentnews.org/article.pl?sid=25/11/04/0214241&amp;from=rss) - [We&apos;re About to Find Many More Interstellar Interlopers—Here&apos;s How to Visit One](https://soylentnews.org/article.pl?sid=25/11/04/0214241&amp;from=rss)
* [2025-11-05, 14:39:32](https://lobste.rs/s/929qoz/preventing_kubernetes_from_pulling) - [Preventing Kubernetes from Pulling the Pause Image from the Internet](https://kyle.cascade.family/posts/preventing-kubernetes-from-pulling-the-pause-image-from-the-internet/)
* [2025-11-05, 14:31:49](https://lobste.rs/s/vhfgkd/zensical_modern_static_site_generator) - [Zensical: A modern static site generator](https://squidfunk.github.io/mkdocs-material/blog/2025/11/05/zensical/)
* [2025-11-05, 14:29:49](https://news.ycombinator.com/item?id=45823234) - [Ask HN: My family business runs on a 1993-era text-based-UI (TUI). Anybody else?](https://news.ycombinator.com/item?id=45823234)
* [2025-11-05, 14:25:36](https://news.ycombinator.com/item?id=45823186) - [Carice TC2 – A non-digital electric car](https://www.caricecars.com/)
* [2025-11-05, 14:21:13](https://news.ycombinator.com/item?id=45823141) - [The shadows lurking in the equations](https://gods.art/articles/equation_shadows.html)
* [2025-11-05, 14:14:23](https://news.ycombinator.com/item?id=45823059) - [Removing XSLT for a more secure browser](https://developer.chrome.com/docs/web-platform/deprecating-xslt)
* [2025-11-05, 14:06:22](https://news.ycombinator.com/item?id=45822982) - [A P2P Vision for QUIC (2024)](https://seemann.io/posts/2024-10-26---p2p-quic/)
* [2025-11-05, 14:06:00](https://it.slashdot.org/story/25/11/05/147220/dram-costs-surge-past-gold-as-ai-demand-strains-supply?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DRAM Costs Surge Past Gold as AI Demand Strains Supply](https://it.slashdot.org/story/25/11/05/147220/dram-costs-surge-past-gold-as-ai-demand-strains-supply?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 14:00:41](https://news.ycombinator.com/item?id=45822902) - [Microsoft Can&apos;t Keep EU Data Safe from US Authorities](https://www.forbes.com/sites/emmawoollacott/2025/07/22/microsoft-cant-keep-eu-data-safe-from-us-authorities/)
* [2025-11-05, 13:22:35](https://news.ycombinator.com/item?id=45822559) - [Radiant Computer](https://radiant.computer)
* [2025-11-05, 12:51:44](https://news.ycombinator.com/item?id=45822302) - [iOS 26.2 to allow third-party app stores in Japan ahead of regulatory deadline](https://www.macrumors.com/2025/11/05/ios-26-2-third-party-app-stores-japan/)
* [2025-11-05, 12:27:04](https://lobste.rs/s/8vtfg7/strange_attractors) - [Strange Attractors](https://blog.shashanktomar.com/posts/strange-attractors)
* [2025-11-05, 12:21:39](https://news.ycombinator.com/item?id=45822071) - [The grim truth behind the Pied Piper (2020)](https://www.bbc.com/travel/article/20200902-the-grim-truth-behind-the-pied-piper)
* [2025-11-05, 12:00:17](https://news.ycombinator.com/item?id=45821921) - [Founder in Residence at Woz (San Francisco)](https://news.ycombinator.com/item?id=45821921)
* [2025-11-05, 11:37:40](https://lobste.rs/s/ctbibn/short_survey_compiler_targets) - [A Short Survey of Compiler Targets](https://abhinavsarkar.net/notes/2025-compiler-backend-survey/)
* [2025-11-05, 10:35:54](https://lobste.rs/s/hk9jux/apps_apple_com_app_store_web_version) - [apps.apple.com: App Store web version](https://github.com/rxliuli/apps.apple.com)
* [2025-11-05, 10:00:00](https://science.slashdot.org/story/25/11/05/010250/trump-re-nominates-billionaire-jared-isaacman-to-run-nasa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Re-Nominates Billionaire Jared Isaacman To Run NASA](https://science.slashdot.org/story/25/11/05/010250/trump-re-nominates-billionaire-jared-isaacman-to-run-nasa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 09:55:00](https://soylentnews.org/article.pl?sid=25/11/04/025235&amp;from=rss) - [Bats Eat the Birds They Pluck From the Sky While on the Wing](https://soylentnews.org/article.pl?sid=25/11/04/025235&amp;from=rss)
* [2025-11-05, 09:44:38](https://lobste.rs/s/rpygtc/inside_isotemp_ocxo107_10_oven) - [Inside an Isotemp OCXO107-10 Oven Controlled Crystal Oscillator](https://tomverbeure.github.io/2025/10/26/Inside-an-Isotemp-OCXO107-10.html)
* [2025-11-05, 07:22:12](https://lobste.rs/s/cvcjiz/announcing_rust_foundation_maintainers) - [Announcing the Rust Foundation Maintainers Fund](https://rustfoundation.org/media/announcing-the-rust-foundation-maintainers-fund/)
* [2025-11-05, 07:00:00](https://hardware.slashdot.org/story/25/11/05/0052206/china-achieves-thorium-uranium-conversion-within-molten-salt-reactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Achieves Thorium-Uranium Conversion Within Molten Salt Reactor](https://hardware.slashdot.org/story/25/11/05/0052206/china-achieves-thorium-uranium-conversion-within-molten-salt-reactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 06:22:49](https://lobste.rs/s/zhzxfg/things_i_don_t_like_configuration) - [Things I Don&apos;t Like in Configuration Languages](https://medv.io/blog/things-i-dont-like-in-configuration-languages)
* [2025-11-05, 05:33:18](https://lobste.rs/s/mncjin/what_is_cosh_list_bool_beyond_algebra) - [What is cosh(List(Bool))? Or beyond algebra: analysis of data types](https://cofault.com/aodt.html)
* [2025-11-05, 05:06:00](https://soylentnews.org/article.pl?sid=25/11/04/0147220&amp;from=rss) - [SUSE to Include Agentic AI in SLE 16](https://soylentnews.org/article.pl?sid=25/11/04/0147220&amp;from=rss)
* [2025-11-05, 04:34:59](https://lobste.rs/s/xk4bug/microsoft_softcard_for_apple_ii_two) - [Microsoft SoftCard for Apple II: two processors, same memory](https://devblogs.microsoft.com/oldnewthing/20251104-00/?p=111758)
* [2025-11-05, 03:30:00](https://tech.slashdot.org/story/25/11/05/0031244/googles-new-hurricane-model-was-breathtakingly-good-this-season?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s New Hurricane Model Was Breathtakingly Good This Season](https://tech.slashdot.org/story/25/11/05/0031244/googles-new-hurricane-model-was-breathtakingly-good-this-season?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 03:15:37](https://news.ycombinator.com/item?id=45818562) - [Hypothesis: Property-Based Testing for Python](https://hypothesis.readthedocs.io/en/latest/)
* [2025-11-05, 02:58:25](https://news.ycombinator.com/item?id=45818471) - [The Microsoft SoftCard for the Apple II: Getting two processors to share memory](https://devblogs.microsoft.com/oldnewthing/20251104-00/?p=111758)
* [2025-11-05, 01:59:01](https://lobste.rs/s/xuggiu/mr_tiff) - [Mr TIFF](https://inventingthefuture.ghost.io/mr-tiff/)
* [2025-11-05, 01:50:00](https://yro.slashdot.org/story/25/11/05/0018255/google-removed-749-million-annas-archive-urls-from-its-search-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Removed 749 Million Anna&apos;s Archive URLs From Its Search Results](https://yro.slashdot.org/story/25/11/05/0018255/google-removed-749-million-annas-archive-urls-from-its-search-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 01:30:00](https://tech.slashdot.org/story/25/11/05/0026232/apple-brings-its-app-store-to-the-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Brings Its App Store To the Web](https://tech.slashdot.org/story/25/11/05/0026232/apple-brings-its-app-store-to-the-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 01:10:00](https://yro.slashdot.org/story/25/11/05/0013234/data-breach-at-major-swedish-software-supplier-impacts-15-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Data Breach At Major Swedish Software Supplier Impacts 1.5 Million](https://yro.slashdot.org/story/25/11/05/0013234/data-breach-at-major-swedish-software-supplier-impacts-15-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 00:30:00](https://hardware.slashdot.org/story/25/11/04/235241/the-worlds-tallest-chip-defies-the-limits-of-computing-goodbye-to-moores-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The World&apos;s Tallest Chip Defies the Limits of Computing: Goodbye To Moore&apos;s Law?](https://hardware.slashdot.org/story/25/11/04/235241/the-worlds-tallest-chip-defies-the-limits-of-computing-goodbye-to-moores-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 00:22:00](https://soylentnews.org/article.pl?sid=25/11/03/0150212&amp;from=rss) - [Company Remote Kills Robo Vacuum](https://soylentnews.org/article.pl?sid=25/11/03/0150212&amp;from=rss)
* [2025-11-04, 23:29:31](https://news.ycombinator.com/item?id=45817114) - [Bluetui – A TUI for managing Bluetooth on Linux](https://github.com/pythops/bluetui)
* [2025-11-04, 23:10:53](https://news.ycombinator.com/item?id=45816963) - [UPS plane crashes near Louisville airport](https://avherald.com/h?article=52f5748f&amp;opt=0)
* [2025-11-04, 22:57:12](https://news.ycombinator.com/item?id=45816853) - [Mr TIFF](https://inventingthefuture.ghost.io/mr-tiff/)
* [2025-11-04, 22:35:58](https://news.ycombinator.com/item?id=45816673) - [Grayskull: A tiny computer vision library in C for embedded systems, etc.](https://github.com/zserge/grayskull)
* [2025-11-04, 19:36:00](https://soylentnews.org/article.pl?sid=25/11/03/0140258&amp;from=rss) - [Matrix Collapses: Mathematics Proves the Universe Cannot be a Computer Simulation](https://soylentnews.org/article.pl?sid=25/11/03/0140258&amp;from=rss)
* [2025-11-04, 18:04:43](https://lobste.rs/s/vq2xdc/socketaddrv6_is_not_roundtrip) - [SocketAddrV6 is not roundtrip serializable](https://sunshowers.io/posts/socketaddrv6-not-roundtrip/)
* [2025-11-04, 18:01:22](https://lobste.rs/s/jhklpz/freebsd_officially_supported_oci) - [FreeBSD Officially Supported in OCI Runtime Specification v1.3](https://freebsdfoundation.org/blog/freebsd-officially-supported-in-oci-runtime-specification-v1-3/)
* [2025-11-04, 16:26:09](https://news.ycombinator.com/item?id=45812756) - [An eBPF Loophole: Using XDP for Egress Traffic](https://loopholelabs.io/blog/xdp-for-egress-traffic)
* [2025-11-04, 16:19:59](https://lobste.rs/s/xvwll1/you_don_t_need_kafka_building_message) - [You don&apos;t need Kafka: Building a message queue with only two UNIX signals](https://leandronsp.com/articles/you-dont-need-kafka-building-a-message-queue-with-only-two-unix-signals)
* [2025-11-04, 14:52:00](https://soylentnews.org/article.pl?sid=25/11/03/0135217&amp;from=rss) - [Las Vegas Police Debut the World&apos;s First Tesla Cybertruck Patrol Fleet](https://soylentnews.org/article.pl?sid=25/11/03/0135217&amp;from=rss)
* [2025-11-04, 14:16:31](https://lobste.rs/s/drrzx2/i_made_website_vibe_codes_itself) - [I made a website that vibe-codes itself](https://theboard.stavros.io)
* [2025-11-04, 12:37:17](https://lobste.rs/s/uxim1u/tag_proposal_self_hosting) - [Tag proposal: self-hosting](https://lobste.rs/s/uxim1u/tag_proposal_self_hosting)
* [2025-11-04, 10:49:26](https://lobste.rs/s/rnt3rk/pain_points_ocaml) - [Pain points of OCaml](https://quamserena.com/2025-11-03/pain-points-of-ocaml)
* [2025-11-04, 10:08:00](https://soylentnews.org/article.pl?sid=25/11/02/2015201&amp;from=rss) - [Tesla&apos;s ‘Robotaxis&apos; Keep Crashing-Even With Human ‘Safety Monitors&apos; Onboard](https://soylentnews.org/article.pl?sid=25/11/02/2015201&amp;from=rss)
* [2025-11-04, 05:23:00](https://soylentnews.org/article.pl?sid=25/11/02/2011253&amp;from=rss) - [Once Again, Chat Control Flails After Strong Public Pressure](https://soylentnews.org/article.pl?sid=25/11/02/2011253&amp;from=rss)
* [2025-11-04, 04:52:39](https://lobste.rs/s/wjs6o2/what_laptops_are_lobsters_rocking_2025) - [What laptops are Lobsters rocking in 2025?](https://lobste.rs/s/wjs6o2/what_laptops_are_lobsters_rocking_2025)
* [2025-11-04, 00:39:00](https://soylentnews.org/article.pl?sid=25/11/01/2010247&amp;from=rss) - [Cyber Exec with Lavish Lifestyle Charged with Selling Secrets to Russia](https://soylentnews.org/article.pl?sid=25/11/01/2010247&amp;from=rss)
* [2025-11-03, 19:53:00](https://soylentnews.org/article.pl?sid=25/11/02/0832213&amp;from=rss) - [October&apos;s Research Roundup: 6 Cool Science Stories We Almost Missed](https://soylentnews.org/article.pl?sid=25/11/02/0832213&amp;from=rss)
* [2025-11-03, 15:10:00](https://soylentnews.org/article.pl?sid=25/11/01/2018214&amp;from=rss) - [Qilin Ransomware Abuses WSL to Run Linux Encryptors in Windows](https://soylentnews.org/article.pl?sid=25/11/01/2018214&amp;from=rss)
* [2025-11-03, 10:25:00](https://soylentnews.org/article.pl?sid=25/11/02/0835217&amp;from=rss) - [Nvidia Hits Record $5 Trillion Mark as CEO Dismisses AI Bubble Concerns](https://soylentnews.org/article.pl?sid=25/11/02/0835217&amp;from=rss)
* [2025-11-03, 05:40:00](https://soylentnews.org/article.pl?sid=25/11/01/1951249&amp;from=rss) - [Massive Surge of NFC Relay Malware Steals Europeans’ Credit Cards](https://soylentnews.org/article.pl?sid=25/11/01/1951249&amp;from=rss)
* [2025-11-03, 01:00:00](https://soylentnews.org/article.pl?sid=25/11/01/1944249&amp;from=rss) - [AI Review Paper Slop Changing Moderation Policy at arXiv CS](https://soylentnews.org/article.pl?sid=25/11/01/1944249&amp;from=rss)
* [2025-11-02, 20:20:00](https://soylentnews.org/article.pl?sid=25/11/01/1849207&amp;from=rss) - [Meta: Pirated Adult Film Downloads Were For “Personal Use,” Not AI Training](https://soylentnews.org/article.pl?sid=25/11/01/1849207&amp;from=rss)
* [2025-11-02, 15:39:00](https://soylentnews.org/article.pl?sid=25/11/01/1652253&amp;from=rss) - [CISA: High-Severity Linux Flaw Now Exploited by Ransomware Gangs](https://soylentnews.org/article.pl?sid=25/11/01/1652253&amp;from=rss)
* [2025-11-02, 10:56:00](https://soylentnews.org/article.pl?sid=25/11/01/1648226&amp;from=rss) - [Bonfire of the Vanities](https://soylentnews.org/article.pl?sid=25/11/01/1648226&amp;from=rss)
* [2025-11-02, 07:04:59](https://news.ycombinator.com/item?id=45788385) - [Intervaltree with Rust Back End](https://github.com/Athe-kunal/intervaltree_rs)
* [2025-11-02, 06:07:00](https://soylentnews.org/article.pl?sid=25/11/01/1239234&amp;from=rss) - [Spinning Up an Onion Mirror is Stupid Easy](https://soylentnews.org/article.pl?sid=25/11/01/1239234&amp;from=rss)
* [2025-11-02, 05:47:46](https://news.ycombinator.com/item?id=45788086) - [Moving tables across PostgreSQL instances](https://ananthakumaran.in/2025/11/02/moving-tables-across-postgres-instances.html)
* [2025-11-02, 01:26:00](https://soylentnews.org/article.pl?sid=25/10/31/1858243&amp;from=rss) - [‘Spaceballs 2’ Starts Production](https://soylentnews.org/article.pl?sid=25/10/31/1858243&amp;from=rss)
* [2025-11-01, 20:39:00](https://soylentnews.org/article.pl?sid=25/10/31/1854228&amp;from=rss) - [China Releases &apos;UBIOS&apos; Standard to Replace UEFI](https://soylentnews.org/article.pl?sid=25/10/31/1854228&amp;from=rss)
* [2025-11-01, 15:55:00](https://soylentnews.org/article.pl?sid=25/10/31/1847233&amp;from=rss) - [Nvidia Reveals Vera Rubin Superchip for the First Time](https://soylentnews.org/article.pl?sid=25/10/31/1847233&amp;from=rss)
* [2025-11-01, 11:11:00](https://soylentnews.org/article.pl?sid=25/10/31/1242232&amp;from=rss) - [ICE and CBP Agents Are Scanning Peoples’ Faces on the Street to Verify Citizenship](https://soylentnews.org/article.pl?sid=25/10/31/1242232&amp;from=rss)
* [2025-11-01, 06:27:00](https://soylentnews.org/article.pl?sid=25/10/31/1238201&amp;from=rss) - [Nearly 90% of Windows Games Now Run on Linux](https://soylentnews.org/article.pl?sid=25/10/31/1238201&amp;from=rss)
* [2025-11-01, 01:41:00](https://soylentnews.org/article.pl?sid=25/10/31/1232227&amp;from=rss) - [Quantum Mechanics Trumps the Second Law of Thermodynamics at the Atomic Scale](https://soylentnews.org/article.pl?sid=25/10/31/1232227&amp;from=rss)
