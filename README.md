# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Technology

* [Your Brain Has a Hidden Beat -- and Smarter Minds Sync To It](https://science.slashdot.org/story/25/06/17/0048247/your-brain-has-a-hidden-beat----and-smarter-minds-sync-to-it?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers delve into the rhythmic nature of the brain and how synchronization to this 'hidden beat' could correlate with higher cognitive abilities.

* [Researchers Create World's First Completely Verifiable Random Number Generator](https://science.slashdot.org/story/25/06/16/1656252/researchers-create-worlds-first-completely-verifiable-random-number-generator?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A breakthrough in cryptography as researchers develop a completely transparent and verifiable random number generation process.

* [Photonic Processor Could Streamline 6G Wireless Signal Processing](https://soylentnews.org/article.pl?sid=25/06/15/1353252&from=rss) - Scientists propose a photonics-based processor that may revolutionize next-generation wireless networks.

* [Is gravity just entropy rising? Long-shot idea gets another look](https://www.quantamagazine.org/is-gravity-just-entropy-rising-long-shot-idea-gets-another-look-20250613/) - An intriguing exploration of whether gravity could be explained as an outcome of entropy shifts.

## Artificial Intelligence

* [TIL:AI. Thoughts on AI](https://cocoaphony.micro.blog/2025/06/16/tilai-thoughts-on-ai.html) - A reflective blog detailing insights on the evolving nature and implications of artificial intelligence.

* [Salesforce Study Finds LLM Agents Flunk CRM and Confidentiality Tests](https://yro.slashdot.org/story/25/06/16/2054205/salesforce-study-finds-llm-agents-flunk-crm-and-confidentiality-tests?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A Salesforce study critiques the real-world applications of large language models in customer relationship management.

* [Breaking Quadratic Barriers: A Non-Attention LLM for Ultra-Long Context Horizons](https://arxiv.org/abs/2506.01963) - Researchers present a novel non-attention large language model designed for processing extended context effectively.

* [OpenAI, Growing Frustrated With Microsoft, Has Discussed Making Antitrust Complaints To Regulators](https://slashdot.org/story/25/06/16/2011230/openai-growing-frustrated-with-microsoft-has-discussed-making-antitrust-complaints-to-regulators?utm_source=rss1.0mainlinkanon&utm_medium=feed) - OpenAI expresses dissatisfaction over its partnership with Microsoft, possibly hinting at regulatory intervention.

## Corporate Movements and Industry Trends

* [Intel Will Lay Off 15% To 20% of Its Factory Workers, Memo Says](https://slashdot.org/story/25/06/16/2132227/intel-will-lay-off-15-to-20-of-its-factory-workers-memo-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Intel announces significant layoffs as part of its ongoing business restructuring.

* [TSMC Slows Down Global Plans Due to Soft Demand, but Accelerates Arizona Fab Plans by Six Months](https://soylentnews.org/article.pl?sid=25/06/16/016221&from=rss) - TSMC evaluates global market demands and adjusts its focus on U.S.-based manufacturing.

* [OpenAI wins $200M U.S. defense contract](https://www.cnbc.com/2025/06/16/openai-wins-200-million-us-defense-contract.html) - OpenAI secures a substantial government contract to advance its AI research initiatives.

## Privacy and Security

* [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&from=rss) - A sobering look at global surveillance vulnerabilities with thousands of cameras broadcasting unsecured streams.

* [DRM Can Watch You Too: Privacy Effects of Browsers' Widevine EME (2023)](https://hal.science/hal-04179324v1/document) - Examination of how digital rights management tools compromise user privacy.

* [That 'Unsubscribe' Button Could Be a Trap, Researchers Warn](https://it.slashdot.org/story/25/06/16/1935213/that-unsubscribe-button-could-be-a-trap-researchers-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New research highlights potential risks associated with deceptive unsubscribe mechanisms in emails.

## Miscellaneous Highlights

* [Navy Backs Right to Repair After $13B Carrier Goes Half-Fed](https://soylentnews.org/article.pl?sid=25/06/14/1549226&from=rss) - The U.S. Navy endorses the right-to-repair movement following operational challenges.

* [Writing Toy Software Is A Joy](https://www.jsbarretto.com/blog/software-is-joy/) - A nostalgic take on the joy of building software solely for exploration and fun.

* [What Happens When Clergy Take Psilocybin](https://nautil.us/clergy-blown-away-by-psilocybin-1217112/) - Delving into unique studies on psilocybin's effects on religious leaders.

* [Buried Under 2 Kilometers of Antarctic Ice, Scientists Find a 34-Million-Year-Old Lost World](https://soylentnews.org/article.pl?sid=25/06/15/145200&from=rss) - Scientists uncover a hidden ancient ecosystem beneath Antarctica's icy expanse.

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

* [2025-06-17, 01:30:00](https://science.slashdot.org/story/25/06/17/0048247/your-brain-has-a-hidden-beat----and-smarter-minds-sync-to-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Your Brain Has a Hidden Beat -- and Smarter Minds Sync To It](https://science.slashdot.org/story/25/06/17/0048247/your-brain-has-a-hidden-beat----and-smarter-minds-sync-to-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 01:16:36](https://lobste.rs/s/2f63at/til_ai_thoughts_on_ai) - [TIL:AI. Thoughts on AI](https://cocoaphony.micro.blog/2025/06/16/tilai-thoughts-on-ai.html)
* [2025-06-17, 01:03:19](https://news.ycombinator.com/item?id=44294776) - [Ask HN: How to Deal with a Bad Manager?](https://news.ycombinator.com/item?id=44294776)
* [2025-06-17, 00:50:21](https://lobste.rs/s/6bduaj/phkmalloc) - [phkmalloc](https://phk.freebsd.dk/sagas/phkmalloc/)
* [2025-06-17, 00:50:00](https://tech.slashdot.org/story/25/06/16/2141250/google-cloud-caused-outage-by-ignoring-its-usual-code-quality-protections?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Cloud Caused Outage By Ignoring Its Usual Code Quality Protections](https://tech.slashdot.org/story/25/06/16/2141250/google-cloud-caused-outage-by-ignoring-its-usual-code-quality-protections?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 00:43:00](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss) - [TSMC Slows Down Global Plans Due to Soft Demand, but Accelerates Arizona Fab Plans by Six Months](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss)
* [2025-06-17, 00:40:09](https://lobste.rs/s/zeoymy/comment_on_illusion_thinking) - [Comment on The Illusion of Thinking: Understanding the Strengths and Limitations of Reasoning Models via the Lens of Problem Complexity](https://arxiv.org/pdf/2506.09250)
* [2025-06-17, 00:33:45](https://news.ycombinator.com/item?id=44294633) - [Generative AI coding tools and agents do not work for me](https://blog.miguelgrinberg.com/post/why-generative-ai-coding-tools-and-agents-do-not-work-for-me)
* [2025-06-17, 00:10:00](https://slashdot.org/story/25/06/16/2132227/intel-will-lay-off-15-to-20-of-its-factory-workers-memo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Will Lay Off 15% To 20% of Its Factory Workers, Memo Says](https://slashdot.org/story/25/06/16/2132227/intel-will-lay-off-15-to-20-of-its-factory-workers-memo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 23:30:00](https://tech.slashdot.org/story/25/06/16/2125238/vandals-cut-fiber-optic-lines-causing-outage-for-spectrum-internet-subscribers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vandals Cut Fiber-Optic Lines, Causing Outage For Spectrum Internet Subscribers](https://tech.slashdot.org/story/25/06/16/2125238/vandals-cut-fiber-optic-lines-causing-outage-for-spectrum-internet-subscribers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 23:19:36](https://lobste.rs/s/f4cvx7/triaging_security_issues_reported_by) - [Triaging security issues reported by third parties (#913) · Issues · GNOME / libxml2 ·](https://gitlab.gnome.org/GNOME/libxml2/-/issues/913)
* [2025-06-16, 23:12:12](https://lobste.rs/s/fefns1/xmake_v3_0_released_improve_c_modules) - [Xmake v3.0 released, Improve c++ modules and jobgraph support](https://github.com/xmake-io/xmake/releases/tag/v3.0.0)
* [2025-06-16, 22:50:00](https://tech.slashdot.org/story/25/06/16/2114214/threads-will-let-you-hide-spoilers-in-your-posts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Threads Will Let You Hide Spoilers In Your Posts](https://tech.slashdot.org/story/25/06/16/2114214/threads-will-let-you-hide-spoilers-in-your-posts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 22:31:58](https://news.ycombinator.com/item?id=44293988) - [OpenAI wins $200M U.S. defense contract](https://www.cnbc.com/2025/06/16/openai-wins-200-million-us-defense-contract.html)
* [2025-06-16, 22:22:33](https://news.ycombinator.com/item?id=44293922) - [Battle to eradicate invasive pythons in Florida achieves milestone](https://phys.org/news/2025-06-eradicate-invasive-pythons-florida-stunning.html)
* [2025-06-16, 22:10:00](https://yro.slashdot.org/story/25/06/16/2054205/salesforce-study-finds-llm-agents-flunk-crm-and-confidentiality-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Salesforce Study Finds LLM Agents Flunk CRM and Confidentiality Tests](https://yro.slashdot.org/story/25/06/16/2054205/salesforce-study-finds-llm-agents-flunk-crm-and-confidentiality-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 22:06:58](https://news.ycombinator.com/item?id=44293837) - [DRM Can Watch You Too: Privacy Effects of Browsers&apos; Widevine EME (2023)](https://hal.science/hal-04179324v1/document)
* [2025-06-16, 21:34:09](https://news.ycombinator.com/item?id=44293610) - [What Happens When Clergy Take Psilocybin](https://nautil.us/clergy-blown-away-by-psilocybin-1217112/)
* [2025-06-16, 21:30:00](https://tech.slashdot.org/story/25/06/16/2046238/the-us-navy-is-more-aggressively-telling-startups-we-want-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Navy Is More Aggressively Telling Startups, &apos;We Want You&apos;](https://tech.slashdot.org/story/25/06/16/2046238/the-us-navy-is-more-aggressively-telling-startups-we-want-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 21:04:05](https://lobste.rs/s/19rzdy/suppressions_suppressions) - [Suppressions of Suppressions](https://overreacted.io/suppressions-of-suppressions/)
* [2025-06-16, 21:00:47](https://news.ycombinator.com/item?id=44293358) - [Blaze (YC S24) Is Hiring](https://www.ycombinator.com/companies/blaze-2/jobs/dzNmNuw-junior-software-engineer)
* [2025-06-16, 20:50:00](https://slashdot.org/story/25/06/16/1956251/obscure-chinese-stock-scams-dupe-american-investors-by-the-thousands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Obscure Chinese Stock Scams Dupe American Investors by the Thousands](https://slashdot.org/story/25/06/16/1956251/obscure-chinese-stock-scams-dupe-american-investors-by-the-thousands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 20:48:43](https://news.ycombinator.com/item?id=44293260) - [Show HN: Chawan TUI web browser](https://chawan.net/news/chawan-0-2-0.html)
* [2025-06-16, 20:33:45](https://news.ycombinator.com/item?id=44293147) - [Show HN: Nexus.js - Fabric.js for 3D](https://punk.cam/lab/nexus)
* [2025-06-16, 20:33:14](https://lobste.rs/s/cho8tc/retrobootstrapping_rust_for_some_reason) - [retrobootstrapping rust for some reason](https://graydon2.dreamwidth.org/317484.html)
* [2025-06-16, 20:19:44](https://news.ycombinator.com/item?id=44293044) - [Retrobootstrapping Rust for some reason](https://graydon2.dreamwidth.org/317484.html)
* [2025-06-16, 20:11:00](https://slashdot.org/story/25/06/16/2011230/openai-growing-frustrated-with-microsoft-has-discussed-making-antitrust-complaints-to-regulators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI, Growing Frustrated With Microsoft, Has Discussed Making Antitrust Complaints To Regulators](https://slashdot.org/story/25/06/16/2011230/openai-growing-frustrated-with-microsoft-has-discussed-making-antitrust-complaints-to-regulators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 19:56:00](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss) - [Washington Post in Talks With Substack About Using its Writers](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss)
* [2025-06-16, 19:42:53](https://lobste.rs/s/vqsran/matrix_is_cooked) - [matrix is cooked](https://paper.wf/alexia/matrix-is-cooked)
* [2025-06-16, 19:35:00](https://it.slashdot.org/story/25/06/16/1935213/that-unsubscribe-button-could-be-a-trap-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [That &apos;Unsubscribe&apos; Button Could Be a Trap, Researchers Warn](https://it.slashdot.org/story/25/06/16/1935213/that-unsubscribe-button-could-be-a-trap-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 19:19:57](https://news.ycombinator.com/item?id=44292601) - [Breaking Quadratic Barriers: A Non-Attention LLM for Ultra-Long Context Horizons](https://arxiv.org/abs/2506.01963)
* [2025-06-16, 18:58:00](https://apple.slashdot.org/story/25/06/16/1858200/dutch-court-confirms-apple-abused-dominant-position-in-dating-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dutch Court Confirms Apple Abused Dominant Position in Dating Apps](https://apple.slashdot.org/story/25/06/16/1858200/dutch-court-confirms-apple-abused-dominant-position-in-dating-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 18:51:33](https://news.ycombinator.com/item?id=44292342) - [Transparent peer review to be extended to all of Nature&apos;s research papers](https://www.nature.com/articles/d41586-025-01880-9)
* [2025-06-16, 18:41:55](https://lobste.rs/s/2o1cna/promised_lan) - [The Promised LAN](https://notes.pault.ag/tpl/)
* [2025-06-16, 18:27:59](https://news.ycombinator.com/item?id=44292103) - [Show HN: Canine – A Heroku alternative built on Kubernetes](https://github.com/czhu12/canine)
* [2025-06-16, 18:10:00](https://it.slashdot.org/story/25/06/16/186239/windows-hello-face-unlock-no-longer-works-in-the-dark-and-microsoft-says-its-not-a-bug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows Hello Face Unlock No Longer Works in the Dark and Microsoft Says It&apos;s Not a Bug](https://it.slashdot.org/story/25/06/16/186239/windows-hello-face-unlock-no-longer-works-in-the-dark-and-microsoft-says-its-not-a-bug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 18:07:37](https://news.ycombinator.com/item?id=44291892) - [Dull Men’s Club](https://www.theguardian.com/society/2025/jun/09/meet-the-members-of-the-dull-mens-club-some-of-them-would-bore-the-ears-off-you)
* [2025-06-16, 17:32:00](https://slashdot.org/story/25/06/16/1732226/japan-builds-near-700-million-fund-to-lure-foreign-academic-talent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Builds Near $700 Million Fund To Lure Foreign Academic Talent](https://slashdot.org/story/25/06/16/1732226/japan-builds-near-700-million-fund-to-lure-foreign-academic-talent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 16:56:00](https://science.slashdot.org/story/25/06/16/1656252/researchers-create-worlds-first-completely-verifiable-random-number-generator?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Create World&apos;s First Completely Verifiable Random Number Generator](https://science.slashdot.org/story/25/06/16/1656252/researchers-create-worlds-first-completely-verifiable-random-number-generator?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 16:46:55](https://news.ycombinator.com/item?id=44291204) - [Open-Source RISC-V: Energy Efficiency of Superscalar, Out-of-Order Execution](https://arxiv.org/abs/2505.24363)
* [2025-06-16, 16:01:00](https://mobile.slashdot.org/story/25/06/16/1539258/trump-organization-announces-mobile-plan-499-smartphone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Organization Announces Mobile Plan, $499 Smartphone](https://mobile.slashdot.org/story/25/06/16/1539258/trump-organization-announces-mobile-plan-499-smartphone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-16, 15:46:48](https://lobste.rs/s/q0zon6/goodbye_dark_inc_hello_darklang_inc) - [Goodbye Dark Inc. - Hello Darklang Inc](https://blog.darklang.com/goodbye-dark-inc-welcome-darklang-inc/)
* [2025-06-16, 15:16:47](https://news.ycombinator.com/item?id=44290413) - [Benzene at 200](https://www.chemistryworld.com/opinion/benzene-at-200/4021504.article)
* [2025-06-16, 15:11:37](https://lobste.rs/s/fiaxp8/selfish_reasons_for_building_accessible) - [Selfish reasons for building accessible UIs](https://nolanlawson.com/2025/06/16/selfish-reasons-for-building-accessible-uis/)
* [2025-06-16, 15:11:00](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss) - [Huawei CEO Says Washington Has Exaggerated its Achievements, Saying the Company Isn&apos;t That Powerful](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss)
* [2025-06-16, 15:09:17](https://news.ycombinator.com/item?id=44290331) - [OpenTelemetry for Go: Measuring overhead costs](https://coroot.com/blog/opentelemetry-for-go-measuring-the-overhead/)
* [2025-06-16, 15:07:42](https://news.ycombinator.com/item?id=44290315) - [ZjsComponent: A Pragmatic Approach to Reusable UI Fragments for Web Development](https://arxiv.org/abs/2506.11016)
* [2025-06-16, 14:49:34](https://news.ycombinator.com/item?id=44290121) - [Show HN: dk – A script runner and cross-compiler, written in OCaml](https://diskuv.com/dk/help/latest/)
* [2025-06-16, 14:37:30](https://lobste.rs/s/nngpza/lethal_trifecta_for_ai_agents_private) - [The lethal trifecta for AI agents: private data, untrusted content, and external communication](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)
* [2025-06-16, 14:16:55](https://lobste.rs/s/zx6iiy/working_on_databases_from_prison_how_i_got) - [Working on databases from prison: How I got here, part 2](https://turso.tech/blog/working-on-databases-from-prison)
* [2025-06-16, 14:12:52](https://lobste.rs/s/yntcyd/mathematical_illustrations_manual) - [Mathematical Illustrations: A Manual of Geometry and PostScript](https://personal.math.ubc.ca/~cass/graphics/text/www/)
* [2025-06-16, 13:38:59](https://news.ycombinator.com/item?id=44289412) - [WhatsApp introduces ads in its app](https://www.nytimes.com/2025/06/16/technology/whatsapp-ads.html)
* [2025-06-16, 12:32:02](https://news.ycombinator.com/item?id=44288937) - [Working on databases from prison](https://turso.tech/blog/working-on-databases-from-prison)
* [2025-06-16, 11:01:32](https://news.ycombinator.com/item?id=44288377) - [Snorting the AGI with Claude Code](https://kadekillary.work/blog/#2025-06-16-snorting-the-agi-with-claude-code)
* [2025-06-16, 10:25:00](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss) - [Buried Under 2 Kilometers of Antarctic Ice, Scientists Find a 34-Million-Year-Old Lost World](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss)
* [2025-06-16, 10:13:51](https://lobste.rs/s/pobirg/changes_kubernetes_slack) - [Changes to Kubernetes Slack](https://www.kubernetes.dev/blog/2025/06/16/changes-to-kubernetes-slack-2025/)
* [2025-06-16, 10:12:49](https://lobste.rs/s/k7nyyu/rgsql_test_suite_help_you_build_your_own) - [rgSQL: A test suite to help you build your own database engine](https://technicaldeft.com/posts/rgsql-a-test-suite-for-database-engines)
* [2025-06-16, 10:08:37](https://lobste.rs/s/zvukta/debugging_tricks_for_intellij) - [Debugging tricks for IntelliJ](https://andreabergia.com/blog/2025/06/debugging-tricks-for-intellij/)
* [2025-06-16, 10:04:40](https://lobste.rs/s/joykng/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/joykng/what_are_you_doing_this_week)
* [2025-06-16, 08:14:20](https://lobste.rs/s/jxnovw/css_classes_considered_harmful) - [CSS Classes considered harmful](https://www.keithcirkel.co.uk/css-classes-considered-harmful/)
* [2025-06-16, 07:38:17](https://news.ycombinator.com/item?id=44287395) - [Start your own Internet Resiliency Club](https://bowshock.nl/irc/)
* [2025-06-16, 07:35:31](https://lobste.rs/s/xsmnaz/start_your_own_internet_resiliency_club) - [Start your own Internet Resiliency Club](https://bowshock.nl/irc/)
* [2025-06-16, 06:14:56](https://news.ycombinator.com/item?id=44287043) - [Nanonets-OCR-s – OCR model that transforms documents into structured markdown](https://huggingface.co/nanonets/Nanonets-OCR-s)
* [2025-06-16, 05:41:00](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss) - [Photonic Processor Could Streamline 6G Wireless Signal Processing](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss)
* [2025-06-16, 00:58:00](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss) - [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss)
* [2025-06-16, 00:54:19](https://lobste.rs/s/ijyyt9/devtui_swiss_army_app_for_developers) - [DevTUI - A Swiss-army app for developers](https://devtui.com)
* [2025-06-16, 00:36:41](https://news.ycombinator.com/item?id=44285874) - [Is gravity just entropy rising? Long-shot idea gets another look](https://www.quantamagazine.org/is-gravity-just-entropy-rising-long-shot-idea-gets-another-look-20250613/)
* [2025-06-16, 00:12:02](https://lobste.rs/s/llzfuy/jokes_humour_public_android_api) - [Jokes and Humour in the public Android API](https://voxelmanip.se/2025/06/14/jokes-and-humour-in-the-public-android-api/)
* [2025-06-15, 20:49:18](https://news.ycombinator.com/item?id=44284871) - [Show HN: Zeekstd – Rust Implementation of the ZSTD Seekable Format](https://github.com/rorosen/zeekstd)
* [2025-06-15, 20:12:00](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss) - [Nematode Tower Power](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss)
* [2025-06-15, 19:00:04](https://lobste.rs/s/d3rzjl/writing_toy_software_is_joy) - [Writing Toy Software Is A Joy](https://www.jsbarretto.com/blog/software-is-joy/)
* [2025-06-15, 16:44:48](https://lobste.rs/s/os8uyh/1x_forth_1999) - [1x Forth (1999)](https://www.ultratechnology.com/1xforth.htm)
* [2025-06-15, 15:26:00](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss) - [\&quot;Impossible\&quot; Particle That Hit Earth May Have Been Dark Matter](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss)
* [2025-06-15, 14:08:45](https://lobste.rs/s/dygkfr/why_ssl_was_renamed_tls_late_90s_2014) - [Why SSL was renamed to TLS in late 90s (2014)](https://tim.dierks.org/2014/05/security-standards-and-name-changes-in.html)
* [2025-06-15, 10:41:00](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss) - [RIP: Bill Atkinson, Co-Creator Of Apple Lisa And Mac](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss)
* [2025-06-15, 05:57:00](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss) - [Navy Backs Right to Repair After $13B Carrier Goes Half-Fed](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss)
* [2025-06-15, 01:13:00](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss) - [Stay Hungry,  Stay Foolish ... 20 Years on](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss)
* [2025-06-14, 20:27:00](https://soylentnews.org/article.pl?sid=25/06/14/1315217&amp;from=rss) - [Jupiter Takes Europe&apos;s HPC Crown in 793Pf Top500 Run](https://soylentnews.org/article.pl?sid=25/06/14/1315217&amp;from=rss)
* [2025-06-14, 15:42:00](https://soylentnews.org/article.pl?sid=25/06/13/1243246&amp;from=rss) - [Toyota Math: 9 Million EVs Are Just as Polluting as 27 Million Hybrids](https://soylentnews.org/article.pl?sid=25/06/13/1243246&amp;from=rss)
* [2025-06-14, 12:23:09](https://news.ycombinator.com/item?id=44275974) - [Adding public transport data to Transitous](https://www.volkerkrause.eu/2025/06/14/transitous-adding-data.html)
* [2025-06-14, 10:57:00](https://soylentnews.org/article.pl?sid=25/06/13/0159230&amp;from=rss) - [Climate Change Is Coming For Your Cheese](https://soylentnews.org/article.pl?sid=25/06/13/0159230&amp;from=rss)
* [2025-06-14, 08:15:31](https://news.ycombinator.com/item?id=44275014) - [Occurences of swearing in the Linux kernel source code over time](https://www.vidarholen.net/contents/wordcount/#fuck*,shit*,damn*,idiot*,retard*,crap*)
* [2025-06-14, 06:12:00](https://soylentnews.org/article.pl?sid=25/06/13/0152245&amp;from=rss) - [Mistral Releases a Vibe Coding Client, Mistral Code](https://soylentnews.org/article.pl?sid=25/06/13/0152245&amp;from=rss)
* [2025-06-14, 01:25:00](https://soylentnews.org/article.pl?sid=25/06/13/0146252&amp;from=rss) - [Vital Chipmaking Software Access Restored to China After High-Level Call Between Trump/Xi Jinping](https://soylentnews.org/article.pl?sid=25/06/13/0146252&amp;from=rss)
* [2025-06-13, 20:41:00](https://soylentnews.org/article.pl?sid=25/06/13/0143245&amp;from=rss) - [The Federal Government in the Age of Artificial Intelligence](https://soylentnews.org/article.pl?sid=25/06/13/0143245&amp;from=rss)
* [2025-06-13, 15:58:00](https://soylentnews.org/article.pl?sid=25/06/13/0135229&amp;from=rss) - [Starlink Shut Down on United Regional Jets - Reports of Radio Interference on Embraer E175](https://soylentnews.org/article.pl?sid=25/06/13/0135229&amp;from=rss)
* [2025-06-13, 15:04:57](https://news.ycombinator.com/item?id=44269198) - [What I talk about when I talk about IRs](https://bernsteinbear.com/blog/irs/)
* [2025-06-13, 11:13:00](https://soylentnews.org/article.pl?sid=25/06/13/0124202&amp;from=rss) - [Google Brute-Force Attack Exposes Phone Numbers in Minutes](https://soylentnews.org/article.pl?sid=25/06/13/0124202&amp;from=rss)
* [2025-06-13, 06:29:00](https://soylentnews.org/article.pl?sid=25/06/12/159242&amp;from=rss) - [1.5Tb of James Webb Space Telescope Data Dumped On The Internet - New Searchable Database](https://soylentnews.org/article.pl?sid=25/06/12/159242&amp;from=rss)
* [2025-06-13, 01:57:14](https://news.ycombinator.com/item?id=44265071) - [Identity Assertion Authorization Grant](https://www.ietf.org/archive/id/draft-parecki-oauth-identity-assertion-authz-grant-03.html)
* [2025-06-13, 01:43:00](https://soylentnews.org/article.pl?sid=25/06/12/075226&amp;from=rss) - [Making Hydrogen With Soda Cans and Seawater](https://soylentnews.org/article.pl?sid=25/06/12/075226&amp;from=rss)
