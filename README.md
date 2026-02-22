# [News Summary](https://kherrick.github.io/news-summary/)

## Software Development and Programming

* [Comparing C/C++ unity build with regular build on a large codebase (2024)](https://hereket.com/posts/cpp-unity-compile-inkscape/) - Provides detailed insights into the performance and benefits of unity builds versus regular builds in software development. [Comments](https://lobste.rs/s/0eqbn3/comparing_c_c_unity_build_with_regular)

* [Swift Import Declarations (2019)](https://nshipster.com/import/) - An accessible guide to working with import declarations in Swift programming. [Comments](https://lobste.rs/s/zyv3xz/swift_import_declarations_2019)

* [Read Locks Are Not Your Friends](https://eventual-consistency.vercel.app/posts/write-locks-faster) - Examines performance trade-offs of read locks in concurrent programming. [Comments](https://lobste.rs/s/qzwdla/read_locks_are_not_your_friends)

* [Bit-fields](https://mocelik.com/c/bit-fields/) - Explores the concept of bit-fields and their application in C programming. [Comments](https://lobste.rs/s/pnvimn/bit_fields)

* [Are Compilers Deterministic?](https://blog.onepatchdown.net/2026/02/22/are-compilers-deterministic-nerd-version/) - Discusses the deterministic nature of compilers and the implications for software developers. [Comments](https://lobste.rs/s/qpatpu/are_compilers_deterministic)

## Technology Trends and Innovations

* [In a World Without BlackBerry, Physical Keyboards on Phones Are Making a Comeback](https://www.cnet.com/tech/mobile/in-a-world-without-blackberry-physical-keyboards-on-phones-are-making-a-comeback/) - Explores the surprising return of physical keyboards in modern smartphones. [Comments](https://news.ycombinator.com/item?id=47114412)

* [Researchers Develop Detachable Crawling Robotic Hand](https://hardware.slashdot.org/story/26/02/22/1810206/researchers-develop-detachable-crawling-robotic-hand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A new innovation in robotics offers versatile applications for adaptive tasks. [Comments](https://hardware.slashdot.org/story/26/02/22/1810206/researchers-develop-detachable-crawling-robotic-hand?utm_source=rss1.0mainlinkanon)

## Artificial Intelligence and Its Impact

* [Long Before Tech CEOs Turned To Layoffs To Cover AI Expenses, There Was WorldCom](https://tech.slashdot.org/story/26/02/22/2019241/long-before-tech-ceos-turned-to-layoffs-to-cover-ai-expenses-there-was-worldcom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Offers a historical perspective on financial decisions influenced by technology investments. [Comments](https://tech.slashdot.org/story/26/02/22/2019241/long-before-tech-ceos-turned-to-layoffs-to-cover-ai-expenses-there-was-worldcom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [AI Now Helps Manage 16% of America's Apartments](https://slashdot.org/story/26/02/22/1632217/ai-now-helps-manage-16-of-americas-apartments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A report on the increasing role of AI in property management. [Comments](https://slashdot.org/story/26/02/22/1632217/ai-now-helps-manage-16-of-americas-apartments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Has the AI Disruption Arrived - and Will It Just Make Software Cheaper and More Accessible?](https://developers.slashdot.org/story/26/02/22/0620244/has-the-ai-disruption-arrived---and-will-it-just-make-software-cheaper-and-more-accessible?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analyzes the impact of AI disruption on the software industry. [Comments](https://developers.slashdot.org/story/26/02/22/0620244/has-the-ai-disruption-arrived---and-will-it-just-make-software-cheaper-and-more-accessible?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Innovation and Experimental Projects

* [I built Timeframe, our family e-paper dashboard](https://hawksley.org/2026/02/17/timeframe.html) - A DIY project creating a customized e-paper display for organizing family schedules. [Comments](https://news.ycombinator.com/item?id=47113728)

* [Emulated Windows 3.11 in the Browser](https://pieter.com/) - A nostalgic dive into an old operating system, emulated completely in a web browser for modern audiences. [Comments](https://news.ycombinator.com/item?id=47112892)

## Thought Leadership and Opinion

* [The Tears of Donald Knuth](https://cacm.acm.org/opinion/the-tears-of-donald-knuth/) - A reflective piece honoring Donald Knuth's profound contributions to computer science. [Comments](https://lobste.rs/s/cgo4vm/tears_donald_knuth)

* [You are not left behind](https://www.ufried.com/blog/not_left_behind/) - A motivational essay for staying optimistic in an ever-changing tech landscape. [Comments](https://lobste.rs/s/vdueen/you_are_not_left_behind)

* [Attention Media ≠ Social Networks](https://susam.net/attention-media-vs-social-networks.html) - A thought-provoking argument on the differences and impacts of social networks and media platforms. [Comments](https://news.ycombinator.com/item?id=47110515)

## Cybersecurity and Privacy

* [We hid backdoors in ~40MB binaries and asked AI + Ghidra to find them](https://quesma.com/blog/introducing-binaryaudit/) - A fascinating experiment assessing AI tools in detecting vulnerabilities. [Comments](https://lobste.rs/s/vqcpbb/we_hid_backdoors_40mb_binaries_asked_ai)

* [Proposal: add "AI generated" as a flag reason](https://lobste.rs/s/rkjpob/proposal_add_ai_generated_as_flag_reason) - Discusses the growing need to regulate and flag AI-generated content. [Comments](https://lobste.rs/s/rkjpob/proposal_add_ai_generated_as_flag_reason)

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

* [2026-02-22, 21:42:53](https://lobste.rs/s/0eqbn3/comparing_c_c_unity_build_with_regular) - [Comparing C/C++ unity build with regular build on a large codebase (2024)](https://hereket.com/posts/cpp-unity-compile-inkscape/)
* [2026-02-22, 21:34:00](https://tech.slashdot.org/story/26/02/22/2019241/long-before-tech-ceos-turned-to-layoffs-to-cover-ai-expenses-there-was-worldcom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Long Before Tech CEOs Turned To Layoffs To Cover AI Expenses, There Was WorldCom](https://tech.slashdot.org/story/26/02/22/2019241/long-before-tech-ceos-turned-to-layoffs-to-cover-ai-expenses-there-was-worldcom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 21:06:17](https://news.ycombinator.com/item?id=47114672) - [Music Discovery](https://www.secondtrack.co/)
* [2026-02-22, 20:56:18](https://news.ycombinator.com/item?id=47114579) - [Global Intelligence Crisis](https://www.citriniresearch.com/p/2028gic)
* [2026-02-22, 20:43:58](https://lobste.rs/s/zyv3xz/swift_import_declarations_2019) - [Swift Import Declarations (2019)](https://nshipster.com/import/)
* [2026-02-22, 20:38:55](https://news.ycombinator.com/item?id=47114412) - [In World Without BlackBerry, Physical Keyboards on Phones Are Making a Comeback](https://www.cnet.com/tech/mobile/in-a-world-without-blackberry-physical-keyboards-on-phones-are-making-a-comeback/)
* [2026-02-22, 20:34:00](https://news.slashdot.org/story/26/02/22/1926234/open-source-registries-dont-have-enough-money-to-implement-basic-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Open Source Registries Don&apos;t Have Enough Money To Implement Basic Security&apos;](https://news.slashdot.org/story/26/02/22/1926234/open-source-registries-dont-have-enough-money-to-implement-basic-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 19:57:03](https://lobste.rs/s/xlgbrz/confusables_txt_nfkc_disagree_on_31) - [confusables.txt and NFKC disagree on 31 characters](https://paultendo.github.io/posts/unicode-confusables-nfkc-conflict/)
* [2026-02-22, 19:52:52](https://news.ycombinator.com/item?id=47114043) - [&apos;Peanut butter&apos; pay raises could cost companies their top performers](https://www.cnbc.com/2026/02/22/peanut-butter-pay-raises-could-cost-companies-their-top-performers-according-to-experts-its-such-a-shortsighted-strategy.html)
* [2026-02-22, 19:52:23](https://lobste.rs/s/cgo4vm/tears_donald_knuth) - [The Tears of Donald Knuth](https://cacm.acm.org/opinion/the-tears-of-donald-knuth/)
* [2026-02-22, 19:40:40](https://lobste.rs/s/qzwdla/read_locks_are_not_your_friends) - [Read Locks Are Not Your Friends](https://eventual-consistency.vercel.app/posts/write-locks-faster)
* [2026-02-22, 19:34:00](https://hardware.slashdot.org/story/26/02/22/1810206/researchers-develop-detachable-crawling-robotic-hand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Develop Detachable Crawling Robotic Hand](https://hardware.slashdot.org/story/26/02/22/1810206/researchers-develop-detachable-crawling-robotic-hand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 19:33:22](https://news.ycombinator.com/item?id=47113892) - [Factory-built housing hasn&apos;t taken off in California](https://www.latimes.com/california/story/2026-02-14/factory-built-housing-hasnt-taken-off-in-california-yet-but-this-year-might-be-different)
* [2026-02-22, 19:32:54](https://lobste.rs/s/pnvimn/bit_fields) - [Bit-fields](https://mocelik.com/c/bit-fields/)
* [2026-02-22, 19:25:15](https://lobste.rs/s/ch5jcd/documentary_about_mozilla_firefox_at) - [Documentary about Mozilla Firefox at pwn2own (part 1)](https://www.youtube.com/watch?v=YQEq5s4SRxY)
* [2026-02-22, 19:21:21](https://news.ycombinator.com/item?id=47113796) - [Six Math Essentials](https://terrytao.wordpress.com/2026/02/16/six-math-essentials/)
* [2026-02-22, 19:20:59](https://news.ycombinator.com/item?id=47113793) - [Symplex, an open-source protocol semantic negotiation between distributed agents](https://github.com/olserra/symplex)
* [2026-02-22, 19:19:31](https://news.ycombinator.com/item?id=47113782) - [Black-White Array: fast, ordered and based on with O(log N) memory allocations](https://github.com/dronnix/bwarr)
* [2026-02-22, 19:18:03](https://news.ycombinator.com/item?id=47113769) - [An Unbothered Jimmy Wales Calls Grokipedia a &apos;Cartoon Imitation&apos; of Wikipedia](https://gizmodo.com/an-unbothered-jimmy-wales-calls-grokipedia-a-cartoon-imitation-of-wikipedia-2000725070)
* [2026-02-22, 19:12:50](https://news.ycombinator.com/item?id=47113731) - [NanoClaw Moved from Apple Containers to Docker](https://twitter.com/Gavriel_Cohen/status/2025603982769410356)
* [2026-02-22, 19:12:31](https://news.ycombinator.com/item?id=47113728) - [I built Timeframe, our family e-paper dashboard](https://hawksley.org/2026/02/17/timeframe.html)
* [2026-02-22, 18:56:40](https://news.ycombinator.com/item?id=47113618) - [Loops is a federated, open-source TikTok](https://joinloops.org/)
* [2026-02-22, 18:52:05](https://lobste.rs/s/ihlgsi/cslib_lean_computer_science_library) - [CSLib: The Lean Computer Science Library](https://arxiv.org/abs/2602.04846)
* [2026-02-22, 18:50:14](https://news.ycombinator.com/item?id=47113567) - [Show HN: Local-First Linux MicroVMs for macOS](https://shuru.run)
* [2026-02-22, 18:45:56](https://news.ycombinator.com/item?id=47113527) - [Linuxulator on FreeBSD Feels Like Magic](https://hayzam.com/blog/02-linuxulator-is-awesome/)
* [2026-02-22, 18:34:00](https://slashdot.org/story/26/02/22/1632217/ai-now-helps-manage-16-of-americas-apartments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Now Helps Manage 16% of America&apos;s Apartments](https://slashdot.org/story/26/02/22/1632217/ai-now-helps-manage-16-of-americas-apartments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 18:20:31](https://news.ycombinator.com/item?id=47113325) - [Fresh File Explorer – VS Code extension for navigating recent work](https://github.com/FreHu/vscode-fresh-file-explorer)
* [2026-02-22, 17:39:50](https://news.ycombinator.com/item?id=47112925) - [Hello Worg, the Org-Mode Community](https://orgmode.org/worg/)
* [2026-02-22, 17:37:14](https://news.ycombinator.com/item?id=47112892) - [Emulated Windows 3.11 in the Browser](https://pieter.com/)
* [2026-02-22, 17:34:00](https://slashdot.org/story/26/02/22/0650216/amazon-disputes-report-an-aws-service-was-taken-down-by-its-ai-coding-bot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Disputes Report an AWS Service Was Taken Down By Its AI Coding Bot](https://slashdot.org/story/26/02/22/0650216/amazon-disputes-report-an-aws-service-was-taken-down-by-its-ai-coding-bot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 17:28:00](https://soylentnews.org/article.pl?sid=26/02/21/1339255&amp;from=rss) - [NASA Releases Starliner Failures Report as It Preps for March Launch of Artemis 2](https://soylentnews.org/article.pl?sid=26/02/21/1339255&amp;from=rss)
* [2026-02-22, 17:16:58](https://lobste.rs/s/y5dgkw/back_freebsd_part_1) - [Back to FreeBSD: Part 1](https://hypha.pub/back-to-freebsd-part-1)
* [2026-02-22, 17:05:11](https://lobste.rs/s/qpatpu/are_compilers_deterministic) - [Are Compilers Deterministic?](https://blog.onepatchdown.net/2026/02/22/are-compilers-deterministic-nerd-version/)
* [2026-02-22, 16:40:21](https://lobste.rs/s/kamh7k/four_color_theorem_1852_1976) - [The Four-Color Theorem 1852–1976](https://www.ams.org/journals/notices/202603/noti3305/noti3305.html)
* [2026-02-22, 16:34:00](https://hardware.slashdot.org/story/26/02/22/0510212/man-accidentally-gains-control-of-7000-robot-vacuums?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Man Accidentally Gains Control of 7,000 Robot Vacuums](https://hardware.slashdot.org/story/26/02/22/0510212/man-accidentally-gains-control-of-7000-robot-vacuums?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 16:12:31](https://news.ycombinator.com/item?id=47112174) - [Fix your tools](https://ochagavia.nl/blog/fix-your-tools/)
* [2026-02-22, 15:53:02](https://news.ycombinator.com/item?id=47111981) - [Show HN: 3D Mahjong, Built in CSS](https://voxjong.com)
* [2026-02-22, 15:34:00](https://news.slashdot.org/story/26/02/22/0213244/f-35-software-could-be-jailbreaked-like-an-iphone-dutch-defense-minister?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [F-35 Software Could Be Jailbreaked Like an IPhone: Dutch Defense Minister](https://news.slashdot.org/story/26/02/22/0213244/f-35-software-could-be-jailbreaked-like-an-iphone-dutch-defense-minister?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 15:17:50](https://lobste.rs/s/dpzhs5/drowse_nix_dynamic_derivations_made_easy) - [Drowse: Nix dynamic derivations made easy](https://github.com/figsoda/drowse)
* [2026-02-22, 15:12:15](https://news.ycombinator.com/item?id=47111626) - [Xweather Live – Interactive global vector weather map](https://live.xweather.com/)
* [2026-02-22, 15:03:56](https://lobste.rs/s/vqcpbb/we_hid_backdoors_40mb_binaries_asked_ai) - [We hid backdoors in ~40MB binaries and asked AI + Ghidra to find them](https://quesma.com/blog/introducing-binaryaudit/)
* [2026-02-22, 14:50:44](https://news.ycombinator.com/item?id=47111440) - [We hid backdoors in ~40MB binaries and asked AI + Ghidra to find them](https://quesma.com/blog/introducing-binaryaudit/)
* [2026-02-22, 14:21:35](https://news.ycombinator.com/item?id=47111218) - [Git&apos;s Magic Files](https://nesbitt.io/2026/02/05/git-magic-files.html)
* [2026-02-22, 13:56:02](https://lobste.rs/s/b5f1ni/parse_don_t_validate_aka_some_c_safety_tips) - [Parse, Don’t Validate AKA Some C Safety Tips](https://www.lelanthran.com/chap13/content.html)
* [2026-02-22, 12:41:00](https://soylentnews.org/article.pl?sid=26/02/21/1334230&amp;from=rss) - [Microsoft&apos;s New Windows 11 Speed Test is Just a Link to Ookla&apos;s Speedtest Via Bing](https://soylentnews.org/article.pl?sid=26/02/21/1334230&amp;from=rss)
* [2026-02-22, 12:36:46](https://news.ycombinator.com/item?id=47110515) - [Attention Media ≠ Social Networks](https://susam.net/attention-media-vs-social-networks.html)
* [2026-02-22, 12:28:41](https://news.ycombinator.com/item?id=47110473) - [What is a database transaction?](https://planetscale.com/blog/database-transactions)
* [2026-02-22, 11:34:00](https://developers.slashdot.org/story/26/02/22/0620244/has-the-ai-disruption-arrived---and-will-it-just-make-software-cheaper-and-more-accessible?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Has the AI Disruption Arrived - and Will It Just Make Software Cheaper and More Accessible?](https://developers.slashdot.org/story/26/02/22/0620244/has-the-ai-disruption-arrived---and-will-it-just-make-software-cheaper-and-more-accessible?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 09:23:54](https://lobste.rs/s/vdueen/you_are_not_left_behind) - [You are not left behind](https://www.ufried.com/blog/not_left_behind/)
* [2026-02-22, 08:51:23](https://lobste.rs/s/931ohm/accessibility_is_civil_rights_ai_must) - [Accessibility Is Civil Rights. AI Must Stop Shipping Barriers](https://conesible.de/wab/)
* [2026-02-22, 08:34:00](https://news.slashdot.org/story/26/02/21/0735210/after-16-years-interim-cto-finally-eradicating-fujitsu-and-horizon-from-the-uks-post-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After 16 Years, &apos;Interim&apos; CTO Finally Eradicating Fujitsu and Horizon From the UK&apos;s Post Office](https://news.slashdot.org/story/26/02/21/0735210/after-16-years-interim-cto-finally-eradicating-fujitsu-and-horizon-from-the-uks-post-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 08:23:04](https://lobste.rs/s/4ypj10/cosmologically_unique_ids) - [Cosmologically Unique IDs](https://jasonfantl.com/posts/Universal-Unique-IDs/)
* [2026-02-22, 07:59:00](https://soylentnews.org/article.pl?sid=26/02/21/1326214&amp;from=rss) - [It&apos;s Time to Get Rid of Networked Cameras](https://soylentnews.org/article.pl?sid=26/02/21/1326214&amp;from=rss)
* [2026-02-22, 07:16:27](https://news.ycombinator.com/item?id=47108989) - [Back to FreeBSD: Part 1](https://hypha.pub/back-to-freebsd-part-1)
* [2026-02-22, 07:14:22](https://news.ycombinator.com/item?id=47108977) - [What&apos;s the best way to learn a new language?](https://www.bbc.com/future/article/20260220-whats-the-best-way-to-learn-a-new-language)
* [2026-02-22, 05:54:28](https://lobste.rs/s/rkjpob/proposal_add_ai_generated_as_flag_reason) - [Proposal: add \&quot;AI generated\&quot; as a flag reason](https://lobste.rs/s/rkjpob/proposal_add_ai_generated_as_flag_reason)
* [2026-02-22, 05:34:00](https://ask.slashdot.org/story/26/02/22/0111249/ask-slashdot-whats-your-boot-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot:  What&apos;s Your Boot Time?](https://ask.slashdot.org/story/26/02/22/0111249/ask-slashdot-whats-your-boot-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 03:14:00](https://soylentnews.org/article.pl?sid=26/02/21/1322208&amp;from=rss) - [Mechanochemical Breakthrough Unlocks Cheap, Safe, Powdered Hydrogen](https://soylentnews.org/article.pl?sid=26/02/21/1322208&amp;from=rss)
* [2026-02-22, 02:53:48](https://lobste.rs/s/pvfqcr/cl_kawa_turducken_programming_languages) - [cl-kawa: A Turducken of Programming Languages](https://atgreen.github.io/repl-yell/posts/cl-kawa/)
* [2026-02-22, 02:48:35](https://lobste.rs/s/rzbstd/how_we_fixed_yaml_comment_preservation) - [How We Fixed YAML Comment Preservation in Ruby (And Why We Sponsored It)](https://blog.discourse.org/2026/02/how-we-fixed-yaml-comment-preservation-in-ruby-and-why-we-sponsored-it/)
* [2026-02-22, 02:34:00](https://yro.slashdot.org/story/26/02/22/004205/dna-technology-convicts-a-64-year-old-for-murdering-a-teenager-in-1982?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DNA Technology Convicts a 64-Year-Old for Murdering a Teenager in 1982](https://yro.slashdot.org/story/26/02/22/004205/dna-technology-convicts-a-64-year-old-for-murdering-a-teenager-in-1982?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 02:32:21](https://lobste.rs/s/s3en46/fix_your_tools) - [Fix your tools](https://ochagavia.nl/blog/fix-your-tools/)
* [2026-02-22, 00:37:47](https://lobste.rs/s/awr4cx/how_why_local_llms_perform_on_framework_13) - [How and Why Local LLMs Perform On Framework 13 AMD Strix Point](https://msf.github.io/blogpost/local-llm-performance-framework13.html)
* [2026-02-21, 23:43:00](https://yro.slashdot.org/story/26/02/21/2316255/pro-gamer-consumer-movement-stop-killing-games-will-launch-ngos-in-america-and-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pro-Gamer Consumer Movement &apos;Stop Killing Games&apos; Will Launch NGOs in America and the EU](https://yro.slashdot.org/story/26/02/21/2316255/pro-gamer-consumer-movement-stop-killing-games-will-launch-ngos-in-america-and-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 22:43:00](https://developers.slashdot.org/story/26/02/21/2220205/hit-piece-writing-ai-deleted-but-is-this-a-warning-about-ai-generated-harassment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hit Piece-Writing AI Deleted. But Is This a Warning About AI-Generated Harassment?](https://developers.slashdot.org/story/26/02/21/2220205/hit-piece-writing-ai-deleted-but-is-this-a-warning-about-ai-generated-harassment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 22:32:00](https://soylentnews.org/article.pl?sid=26/02/21/137227&amp;from=rss) - [Did We Just See a Black Hole Explode?](https://soylentnews.org/article.pl?sid=26/02/21/137227&amp;from=rss)
* [2026-02-21, 21:43:00](https://yro.slashdot.org/story/26/02/21/2140216/americas-peace-corps-announces-tech-corps-volunteers-to-help-bring-ai-to-foreign-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Peace Corps Announces &apos;Tech Corps&apos; Volunteers to Help Bring AI to Foreign Countries](https://yro.slashdot.org/story/26/02/21/2140216/americas-peace-corps-announces-tech-corps-volunteers-to-help-bring-ai-to-foreign-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 21:30:11](https://lobste.rs/s/oz7ebk/lobste_rs_migrates_from_mariadb_sqlite) - [lobste.rs migrates from MariaDB to SQLite](https://lobste.rs/s/oz7ebk/lobste_rs_migrates_from_mariadb_sqlite)
* [2026-02-21, 20:35:00](https://news.slashdot.org/story/26/02/21/1932253/codeorg-president-steps-down-citing-upending-of-cs-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Code.org President Steps Down Citing &apos;Upending&apos; of CS By AI](https://news.slashdot.org/story/26/02/21/1932253/codeorg-president-steps-down-citing-upending-of-cs-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 17:49:00](https://soylentnews.org/article.pl?sid=26/02/21/0130244&amp;from=rss) - [AIRD -  a New Term for Workers Freaking Out Over Being Replaced by AI](https://soylentnews.org/article.pl?sid=26/02/21/0130244&amp;from=rss)
* [2026-02-21, 12:55:54](https://lobste.rs/s/l0gv3h/fastest_way_board_airplane) - [The Fastest Way to Board an Airplane](https://navendu.me/posts/airlines-hate-this-trick/)
* [2026-02-21, 12:55:00](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss) - [Hackers Expose Age-Verification Software Powering Surveillance Web](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss)
* [2026-02-21, 08:12:00](https://soylentnews.org/article.pl?sid=26/02/21/0123209&amp;from=rss) - [Visualizing the Internet in 2026](https://soylentnews.org/article.pl?sid=26/02/21/0123209&amp;from=rss)
* [2026-02-21, 03:20:00](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss) - [Palo Alto CEO Says AI Isn&apos;t Great for Business, Yet](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss)
* [2026-02-20, 22:40:00](https://soylentnews.org/article.pl?sid=26/02/19/1712216&amp;from=rss) - [Bacteria Frozen Inside 5,000-Year-Old Ice Cave is Crazy Resistant to Antibiotics ](https://soylentnews.org/article.pl?sid=26/02/19/1712216&amp;from=rss)
* [2026-02-20, 19:18:35](https://lobste.rs/s/w1bsle/lobsters_interview_with_steveklabnik) - [Lobsters Interview with steveklabnik](https://alexalejandre.com/programming/steve-klabnik-interview/)
* [2026-02-20, 17:56:00](https://soylentnews.org/article.pl?sid=26/02/19/178226&amp;from=rss) - [OpenClaw Security Fears Lead Meta, Other AI Firms to Restrict its Use](https://soylentnews.org/article.pl?sid=26/02/19/178226&amp;from=rss)
* [2026-02-20, 13:13:00](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss) - [Texas Sues Wi-Fi Router Maker Over Alleged China Links](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss)
* [2026-02-20, 08:25:00](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss) - [Data Centres Consider Backing Uranium Projects, NexGen CEO Says](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss)
* [2026-02-20, 03:49:00](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss) - [Password Managers Less Secure Than Promised](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss)
* [2026-02-19, 22:56:00](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss) - [Streaming Service Crunchyroll Raises Prices Weeks After Killing its Free Tier](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss)
* [2026-02-19, 18:10:00](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss) - [Ring Cancels Flock Deal After Dystopian Super Bowl Ad Prompts Mass Outrage](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss)
* [2026-02-19, 14:43:25](https://news.ycombinator.com/item?id=47074287) - [International box-sizing Awareness Day (2014)](https://css-tricks.com/international-box-sizing-awareness-day/)
* [2026-02-19, 13:24:00](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss) - [What in the World Is Going on in Our Public Schools?](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss)
* [2026-02-19, 08:32:00](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss) - [Western Digital Has No More HDD Capacity Left, as CEO Reveals Massive AI Deals](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss)
* [2026-02-19, 03:55:00](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss) - [Incredible Chinese Humanoid Robot Show on CCTV Chinese New Year TV Gala this Week](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss)
* [2026-02-18, 23:08:00](https://soylentnews.org/article.pl?sid=26/02/17/1849228&amp;from=rss) - [How to Incentivize Problem Solving in Groups](https://soylentnews.org/article.pl?sid=26/02/17/1849228&amp;from=rss)
* [2026-02-18, 18:21:00](https://soylentnews.org/article.pl?sid=26/02/17/1842234&amp;from=rss) - [This Bonobo Just Did Something Scientists Thought Only Humans Could Do](https://soylentnews.org/article.pl?sid=26/02/17/1842234&amp;from=rss)
* [2026-02-18, 13:39:00](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss) - [A Fluid Can Store Solar Energy and Then Release It as Heat Months Later](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss)
* [2026-02-18, 10:29:08](https://news.ycombinator.com/item?id=47059516) - [Monkey Patching in VBA](https://ecp-solutions.github.io/ASF/Language%20reference.html)
* [2026-02-18, 08:57:00](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss) - [New ClickFix Attack Abuses Nslookup to Retrieve PowerShell Payload Via DNS](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss)
* [2026-02-18, 04:09:00](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss) - [Instruction Decoding in the Intel 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss)
