# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Internet Innovations

* [Google Removed 749 Million Anna's Archive URLs From Its Search Results](https://yro.slashdot.org/story/25/11/05/0018255/google-removed-749-million-annas-archive-urls-from-its-search-results?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Apple Brings Its App Store To the Web](https://tech.slashdot.org/story/25/11/05/0026232/apple-brings-its-app-store-to-the-web?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AWS DynamoDB Outage Analysis](https://entropicthoughts.com/aws-dynamodb-outage-stpa)

* [New HDR10+ Advanced Standard Will Try To Fix the Soap Opera Effect](https://news.slashdot.org/story/25/11/04/2229238/new-hdr10-advanced-standard-will-try-to-fix-the-soap-opera-effect?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Artificial Intelligence Applications

* [Hypothesis: Property-Based Testing for Python](https://hypothesis.readthedocs.io/en/latest/)

* [Google's New Hurricane Model Was Breathtakingly Good This Season](https://tech.slashdot.org/story/25/11/05/0031244/googles-new-hurricane-model-was-breathtakingly-good-this-season?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Chat Control Flails After Strong Public Pressure](https://soylentnews.org/article.pl?sid=25/11/02/2011253&from=rss)

## Scientific Advances and Discoveries

* [China Achieves Thorium-Uranium Conversion Within Molten Salt Reactor](https://hardware.slashdot.org/story/25/11/05/0052206/china-achieves-thorium-uranium-conversion-within-molten-salt-reactor?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Trump Re-Nominates Billionaire Jared Isaacman To Run NASA](https://science.slashdot.org/story/25/11/05/010250/trump-re-nominates-billionaire-jared-isaacman-to-run-nasa?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Matrix Collapses: Mathematics Proves the Universe Cannot be a Computer Simulation](https://soylentnews.org/article.pl?sid=25/11/03/0140258&from=rss)

* [The World's Tallest Chip Defies the Limits of Computing: Goodbye To Moore's Law?](https://hardware.slashdot.org/story/25/11/04/235241/the-worlds-tallest-chip-defies-the-limits-of-computing-goodbye-to-moores-law?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cybersecurity Challenges

* [Massive Surge of NFC Relay Malware Steals Europeans’ Credit Cards](https://soylentnews.org/article.pl?sid=25/11/01/1951249&from=rss)

* [Ex-Cybersecurity Staff Charged With Moonlighting as Hackers](https://yro.slashdot.org/story/25/11/04/1911217/ex-cybersecurity-staff-charged-with-moonlighting-as-hackers?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Data Breach At Major Swedish Software Supplier Impacts 1.5 Million](https://yro.slashdot.org/story/25/11/05/0013234/data-breach-at-major-swedish-software-supplier-impacts-15-million?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Historical Contexts and Debates

* [The Hacker’s Manifesto (1986)](https://phrack.org/issues/7/3)

* [This week in 1988, Robert Morris unleashed his eponymous worm](https://www.tomshardware.com/tech-industry/cyber-security/on-this-day-in-1988-the-morris-worm-slithered-out-and-sparked-a-new-era-in-cybersecurity-10-percent-of-the-internet-was-infected-within-24-hours)

* [Free software scares normal people](http://danieldelaney.net/normal/)

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

* [2025-11-05, 12:27:04](https://lobste.rs/s/8vtfg7/strange_attractors) - [Strange Attractors](https://blog.shashanktomar.com/posts/strange-attractors)
* [2025-11-05, 12:13:08](https://news.ycombinator.com/item?id=45822018) - [YouTube Erased More Than 700 Videos Documenting Israeli Human Rights Violations](https://theintercept.com/2025/11/04/youtube-google-israel-palestine-human-rights-censorship/)
* [2025-11-05, 12:00:17](https://news.ycombinator.com/item?id=45821921) - [Founder in Residence at Woz (San Francisco)](https://news.ycombinator.com/item?id=45821921)
* [2025-11-05, 11:37:40](https://lobste.rs/s/ctbibn/short_survey_compiler_backends) - [A Short Survey of Compiler Backends](https://abhinavsarkar.net/notes/2025-compiler-backend-survey/)
* [2025-11-05, 10:35:54](https://lobste.rs/s/hk9jux/apps_apple_com_app_store_web_version) - [apps.apple.com: App Store web version](https://github.com/rxliuli/apps.apple.com)
* [2025-11-05, 10:00:00](https://science.slashdot.org/story/25/11/05/010250/trump-re-nominates-billionaire-jared-isaacman-to-run-nasa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Re-Nominates Billionaire Jared Isaacman To Run NASA](https://science.slashdot.org/story/25/11/05/010250/trump-re-nominates-billionaire-jared-isaacman-to-run-nasa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 09:55:00](https://soylentnews.org/article.pl?sid=25/11/04/025235&amp;from=rss) - [Bats Eat the Birds They Pluck From the Sky While on the Wing](https://soylentnews.org/article.pl?sid=25/11/04/025235&amp;from=rss)
* [2025-11-05, 09:44:38](https://lobste.rs/s/rpygtc/inside_isotemp_ocxo107_10_oven) - [Inside an Isotemp OCXO107-10 Oven Controlled Crystal Oscillator](https://tomverbeure.github.io/2025/10/26/Inside-an-Isotemp-OCXO107-10.html)
* [2025-11-05, 08:54:11](https://news.ycombinator.com/item?id=45820872) - [I’m worried that they put co-pilot in Excel](https://simonwillison.net/2025/Nov/5/brenda/)
* [2025-11-05, 08:28:04](https://news.ycombinator.com/item?id=45820715) - [The Hacker’s Manifesto (1986)](https://phrack.org/issues/7/3)
* [2025-11-05, 07:22:12](https://lobste.rs/s/cvcjiz/announcing_rust_foundation_maintainers) - [Announcing the Rust Foundation Maintainers Fund](https://rustfoundation.org/media/announcing-the-rust-foundation-maintainers-fund/)
* [2025-11-05, 07:00:00](https://hardware.slashdot.org/story/25/11/05/0052206/china-achieves-thorium-uranium-conversion-within-molten-salt-reactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Achieves Thorium-Uranium Conversion Within Molten Salt Reactor](https://hardware.slashdot.org/story/25/11/05/0052206/china-achieves-thorium-uranium-conversion-within-molten-salt-reactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 06:22:49](https://lobste.rs/s/zhzxfg/things_i_don_t_like_configuration) - [Things I Don&apos;t Like in Configuration Languages](https://medv.io/blog/things-i-dont-like-in-configuration-languages)
* [2025-11-05, 05:33:18](https://lobste.rs/s/mncjin/what_is_cosh_list_bool_beyond_algebra) - [What is cosh(List(Bool))? Or beyond algebra: analysis of data types](https://cofault.com/aodt.html)
* [2025-11-05, 05:06:00](https://soylentnews.org/article.pl?sid=25/11/04/0147220&amp;from=rss) - [SUSE to Include Agentic AI in SLE 16](https://soylentnews.org/article.pl?sid=25/11/04/0147220&amp;from=rss)
* [2025-11-05, 04:34:59](https://lobste.rs/s/xk4bug/microsoft_softcard_for_apple_ii_two) - [Microsoft SoftCard for Apple II: two processors, same memory](https://devblogs.microsoft.com/oldnewthing/20251104-00/?p=111758)
* [2025-11-05, 03:30:00](https://tech.slashdot.org/story/25/11/05/0031244/googles-new-hurricane-model-was-breathtakingly-good-this-season?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s New Hurricane Model Was Breathtakingly Good This Season](https://tech.slashdot.org/story/25/11/05/0031244/googles-new-hurricane-model-was-breathtakingly-good-this-season?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 03:15:37](https://news.ycombinator.com/item?id=45818562) - [Hypothesis: Property-Based Testing for Python](https://hypothesis.readthedocs.io/en/latest/)
* [2025-11-05, 03:04:58](https://news.ycombinator.com/item?id=45818499) - [Preventing Kubernetes from Pulling the Pause Image from the Internet](https://kyle.cascade.family/posts/preventing-kubernetes-from-pulling-the-pause-image-from-the-internet/)
* [2025-11-05, 02:58:25](https://news.ycombinator.com/item?id=45818471) - [The Microsoft SoftCard for the Apple II: Getting two processors to share memory](https://devblogs.microsoft.com/oldnewthing/20251104-00/?p=111758)
* [2025-11-05, 02:30:38](https://news.ycombinator.com/item?id=45818319) - [Direct File won&apos;t happen in 2026, IRS tells states](https://www.nextgov.com/digital-government/2025/11/direct-file-wont-happen-2026-irs-tells-states/409309/)
* [2025-11-05, 01:59:01](https://lobste.rs/s/xuggiu/mr_tiff) - [Mr TIFF](https://inventingthefuture.ghost.io/mr-tiff/)
* [2025-11-05, 01:50:00](https://yro.slashdot.org/story/25/11/05/0018255/google-removed-749-million-annas-archive-urls-from-its-search-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Removed 749 Million Anna&apos;s Archive URLs From Its Search Results](https://yro.slashdot.org/story/25/11/05/0018255/google-removed-749-million-annas-archive-urls-from-its-search-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 01:30:00](https://tech.slashdot.org/story/25/11/05/0026232/apple-brings-its-app-store-to-the-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Brings Its App Store To the Web](https://tech.slashdot.org/story/25/11/05/0026232/apple-brings-its-app-store-to-the-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 01:10:00](https://yro.slashdot.org/story/25/11/05/0013234/data-breach-at-major-swedish-software-supplier-impacts-15-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Data Breach At Major Swedish Software Supplier Impacts 1.5 Million](https://yro.slashdot.org/story/25/11/05/0013234/data-breach-at-major-swedish-software-supplier-impacts-15-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 00:30:00](https://hardware.slashdot.org/story/25/11/04/235241/the-worlds-tallest-chip-defies-the-limits-of-computing-goodbye-to-moores-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The World&apos;s Tallest Chip Defies the Limits of Computing: Goodbye To Moore&apos;s Law?](https://hardware.slashdot.org/story/25/11/04/235241/the-worlds-tallest-chip-defies-the-limits-of-computing-goodbye-to-moores-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-05, 00:22:00](https://soylentnews.org/article.pl?sid=25/11/03/0150212&amp;from=rss) - [Company Remote Kills Robo Vacuum](https://soylentnews.org/article.pl?sid=25/11/03/0150212&amp;from=rss)
* [2025-11-04, 23:50:00](https://apple.slashdot.org/story/25/11/04/2247202/apple-delays-home-app-update-requirement-until-february-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Delays Home App Update Requirement Until February 2026](https://apple.slashdot.org/story/25/11/04/2247202/apple-delays-home-app-update-requirement-until-february-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-04, 23:35:27](https://news.ycombinator.com/item?id=45817167) - [Uncle Sam wants to scan your iris and collect your DNA, citizen or not](https://www.theregister.com/2025/11/04/dhs_wants_to_collect_biometric_data/)
* [2025-11-04, 23:29:31](https://news.ycombinator.com/item?id=45817114) - [Bluetui – A TUI for managing Bluetooth on Linux](https://github.com/pythops/bluetui)
* [2025-11-04, 23:10:53](https://news.ycombinator.com/item?id=45816963) - [UPS plane crashes near Louisville airport](https://avherald.com/h?article=52f5748f&amp;opt=0)
* [2025-11-04, 23:10:00](https://science.slashdot.org/story/25/11/04/2236207/googles-next-moonshot-is-putting-tpus-in-space-with-project-suncatcher?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Next Moonshot Is Putting TPUs In Space With &apos;Project Suncatcher&apos;](https://science.slashdot.org/story/25/11/04/2236207/googles-next-moonshot-is-putting-tpus-in-space-with-project-suncatcher?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-04, 22:59:22](https://news.ycombinator.com/item?id=45816879) - [Patching 68K Software – SimpleText](https://tinkerdifferent.com/threads/patching-68k-software-simpletext.4793/)
* [2025-11-04, 22:57:12](https://news.ycombinator.com/item?id=45816853) - [Mr TIFF](https://inventingthefuture.ghost.io/mr-tiff/)
* [2025-11-04, 22:35:58](https://news.ycombinator.com/item?id=45816673) - [Grayskull: A tiny computer vision library in C for embedded systems, etc.](https://github.com/zserge/grayskull)
* [2025-11-04, 22:30:00](https://news.slashdot.org/story/25/11/04/2229238/new-hdr10-advanced-standard-will-try-to-fix-the-soap-opera-effect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New HDR10+ Advanced Standard Will Try To Fix the Soap Opera Effect](https://news.slashdot.org/story/25/11/04/2229238/new-hdr10-advanced-standard-will-try-to-fix-the-soap-opera-effect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-04, 21:30:00](https://tech.slashdot.org/story/25/11/04/1942258/windows-10-update-incorrectly-tells-some-users-theyve-reached-end-of-life-despite-having-extended-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 10 Update Incorrectly Tells Some Users They&apos;ve Reached End-of-Life, Despite Having Extended Support](https://tech.slashdot.org/story/25/11/04/1942258/windows-10-update-incorrectly-tells-some-users-theyve-reached-end-of-life-despite-having-extended-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-04, 21:22:15](https://news.ycombinator.com/item?id=45816041) - [I took all my projects off the cloud, saving thousands of dollars](https://rameerez.com/send-this-article-to-your-friend-who-still-thinks-the-cloud-is-a-good-idea/)
* [2025-11-04, 20:51:00](https://tech.slashdot.org/story/25/11/04/1935209/ferrari-aims-at-ai-generation-with-crypto-auction-for-le-mans-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ferrari Aims at AI Generation With Crypto Auction For Le Mans Car](https://tech.slashdot.org/story/25/11/04/1935209/ferrari-aims-at-ai-generation-with-crypto-auction-for-le-mans-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-04, 20:10:00](https://tech.slashdot.org/story/25/11/04/1932232/ibm-to-cut-thousands-of-roles-in-focus-on-software-growth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM To Cut Thousands of Roles in Focus on Software Growth](https://tech.slashdot.org/story/25/11/04/1932232/ibm-to-cut-thousands-of-roles-in-focus-on-software-growth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-04, 19:36:00](https://soylentnews.org/article.pl?sid=25/11/03/0140258&amp;from=rss) - [Matrix Collapses: Mathematics Proves the Universe Cannot be a Computer Simulation](https://soylentnews.org/article.pl?sid=25/11/03/0140258&amp;from=rss)
* [2025-11-04, 19:30:00](https://yro.slashdot.org/story/25/11/04/1911217/ex-cybersecurity-staff-charged-with-moonlighting-as-hackers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ex-Cybersecurity Staff Charged With Moonlighting as Hackers](https://yro.slashdot.org/story/25/11/04/1911217/ex-cybersecurity-staff-charged-with-moonlighting-as-hackers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-04, 18:50:00](https://tech.slashdot.org/story/25/11/04/1839231/amazon-accuses-perplexity-of-computer-fraud-demands-it-stop-ai-agent-from-buying-on-its-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Accuses Perplexity of Computer Fraud, Demands It Stop AI Agent From Buying On Its Site](https://tech.slashdot.org/story/25/11/04/1839231/amazon-accuses-perplexity-of-computer-fraud-demands-it-stop-ai-agent-from-buying-on-its-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-04, 18:04:43](https://lobste.rs/s/vq2xdc/socketaddrv6_is_not_roundtrip) - [SocketAddrV6 is not roundtrip serializable](https://sunshowers.io/posts/socketaddrv6-not-roundtrip/)
* [2025-11-04, 18:01:22](https://lobste.rs/s/jhklpz/freebsd_officially_supported_oci) - [FreeBSD Officially Supported in OCI Runtime Specification v1.3](https://freebsdfoundation.org/blog/freebsd-officially-supported-in-oci-runtime-specification-v1-3/)
* [2025-11-04, 17:47:09](https://news.ycombinator.com/item?id=45813767) - [Codemaps: Understand Code, Before You Vibe It](https://cognition.ai/blog/codemaps)
* [2025-11-04, 17:21:42](https://lobste.rs/s/ld2jef/on_async_mutexes) - [On Async Mutexes](https://matklad.github.io/2025/11/04/on-async-mutexes.html)
* [2025-11-04, 17:07:47](https://news.ycombinator.com/item?id=45813310) - [Launch HN: Plexe (YC X25) – Build production-grade ML models from prompts](https://www.plexe.ai/)
* [2025-11-04, 16:19:59](https://lobste.rs/s/xvwll1/you_don_t_need_kafka_building_message) - [You don&apos;t need Kafka: Building a message queue with only two UNIX signals](https://leandronsp.com/articles/you-dont-need-kafka-building-a-message-queue-with-only-two-unix-signals)
* [2025-11-04, 16:12:27](https://news.ycombinator.com/item?id=45812606) - [Pg_lake: Postgres with Iceberg and data lake access](https://github.com/Snowflake-Labs/pg_lake)
* [2025-11-04, 15:23:14](https://news.ycombinator.com/item?id=45812024) - [This week in 1988, Robert Morris unleashed his eponymous worm](https://www.tomshardware.com/tech-industry/cyber-security/on-this-day-in-1988-the-morris-worm-slithered-out-and-sparked-a-new-era-in-cybersecurity-10-percent-of-the-internet-was-infected-within-24-hours)
* [2025-11-04, 15:21:08](https://lobste.rs/s/cuq12x/reforging_rescript_build_system) - [Reforging the ReScript Build System](https://rescript-lang.org/blog/reforging-build-system)
* [2025-11-04, 14:52:00](https://soylentnews.org/article.pl?sid=25/11/03/0135217&amp;from=rss) - [Las Vegas Police Debut the World&apos;s First Tesla Cybertruck Patrol Fleet](https://soylentnews.org/article.pl?sid=25/11/03/0135217&amp;from=rss)
* [2025-11-04, 14:16:31](https://lobste.rs/s/drrzx2/i_made_website_vibe_codes_itself) - [I made a website that vibe-codes itself](https://theboard.stavros.io)
* [2025-11-04, 12:37:17](https://lobste.rs/s/uxim1u/tag_proposal_self_hosting) - [Tag proposal: self-hosting](https://lobste.rs/s/uxim1u/tag_proposal_self_hosting)
* [2025-11-04, 12:30:59](https://lobste.rs/s/pdizwd/aws_dynamodb_outage_analysis) - [AWS DynamoDB Outage Analysis](https://entropicthoughts.com/aws-dynamodb-outage-stpa)
* [2025-11-04, 11:30:42](https://lobste.rs/s/jfoodj/reagami_minimal_zero_deps_reagent_like) - [reagami: A minimal zero-deps Reagent-like for Squint and ClojureScript](https://github.com/borkdude/reagami)
* [2025-11-04, 10:58:38](https://lobste.rs/s/isgtqx/this_month_redox_october_2025) - [This Month in Redox - October 2025](https://www.redox-os.org/news/this-month-251031/)
* [2025-11-04, 10:49:26](https://lobste.rs/s/rnt3rk/pain_points_ocaml) - [Pain points of OCaml](https://quamserena.com/2025-11-03/pain-points-of-ocaml)
* [2025-11-04, 10:08:00](https://soylentnews.org/article.pl?sid=25/11/02/2015201&amp;from=rss) - [Tesla&apos;s ‘Robotaxis&apos; Keep Crashing-Even With Human ‘Safety Monitors&apos; Onboard](https://soylentnews.org/article.pl?sid=25/11/02/2015201&amp;from=rss)
* [2025-11-04, 09:37:45](https://lobste.rs/s/ooxamp/jvm_exceptions_are_weird_decompiler) - [JVM exceptions are weird: a decompiler perspective](https://purplesyringa.moe/blog/jvm-exceptions-are-weird-a-decompiler-perspective/)
* [2025-11-04, 05:23:00](https://soylentnews.org/article.pl?sid=25/11/02/2011253&amp;from=rss) - [Once Again, Chat Control Flails After Strong Public Pressure](https://soylentnews.org/article.pl?sid=25/11/02/2011253&amp;from=rss)
* [2025-11-04, 05:10:33](https://lobste.rs/s/jrwaey/why_engineers_can_t_be_rational_about) - [Why Engineers Can&apos;t Be Rational About Programming Languages](https://spf13.com/p/the-hidden-conversation/)
* [2025-11-04, 04:52:39](https://lobste.rs/s/wjs6o2/what_laptops_are_lobsters_rocking_2025) - [What laptops are Lobsters rocking in 2025?](https://lobste.rs/s/wjs6o2/what_laptops_are_lobsters_rocking_2025)
* [2025-11-04, 00:39:00](https://soylentnews.org/article.pl?sid=25/11/01/2010247&amp;from=rss) - [Cyber Exec with Lavish Lifestyle Charged with Selling Secrets to Russia](https://soylentnews.org/article.pl?sid=25/11/01/2010247&amp;from=rss)
* [2025-11-04, 00:05:16](https://lobste.rs/s/oftb3t/free_software_scares_normal_people) - [Free software scares normal people](http://danieldelaney.net/normal/)
* [2025-11-03, 19:53:00](https://soylentnews.org/article.pl?sid=25/11/02/0832213&amp;from=rss) - [October&apos;s Research Roundup: 6 Cool Science Stories We Almost Missed](https://soylentnews.org/article.pl?sid=25/11/02/0832213&amp;from=rss)
* [2025-11-03, 19:36:22](https://lobste.rs/s/flln5g/state_terminal_emulators_2025_errant) - [State of Terminal Emulators in 2025: The Errant Champions](https://www.jeffquast.com/post/state-of-terminal-emulation-2025/)
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
