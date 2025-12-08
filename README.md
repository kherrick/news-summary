# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Innovations

* [Spinlocks vs. Mutexes: When to Spin and When to Sleep](https://howtech.substack.com/p/spinlocks-vs-mutexes-when-to-spin) ([comments](https://news.ycombinator.com/item?id=46186997))

* [Show HN: Cdecl-dump - represent C declarations visually](https://github.com/bbu/cdecl-dump) ([comments](https://news.ycombinator.com/item?id=46186917))

* [The Wild West of Post-POSIX IO Interfaces](https://youtu.be/abDWZ9D8kEE) ([comments](https://lobste.rs/s/wsq0v7/wild_west_post_posix_io_interfaces))

* [Eurydice: a Rust to C compiler (yes)](http://jonathan.protzenko.fr/2025/10/28/eurydice.html) ([comments](https://lobste.rs/s/1kcrn4/eurydice_rust_c_compiler_yes))

## AI, Machine Learning, and Prompt Engineering

* [OpenAI Insists Target Links in ChatGPT Responses Weren't Ads But 'Suggestions' - But Turns Them Off](https://slashdot.org/story/25/12/07/2048213/openai-insists-target-links-in-chatgpt-responses-werent-ads-but-suggestions---but-turns-them-off?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46185816))

* [Nested Learning: A new ML paradigm for continual learning](https://research.google/blog/introducing-nested-learning-a-new-ml-paradigm-for-continual-learning/) ([comments](https://news.ycombinator.com/item?id=46182031))

* [Defeating Prompt Injections by Design](https://arxiv.org/pdf/2503.18813) ([comments](https://lobste.rs/s/ldfsmq/defeating_prompt_injections_by_design))

## Surprising Engineering and Programming Stories

* [Toyota Unintended Acceleration and the Big Bowl of \"Spaghetti\" Code(2013)](https://www.safetyresearch.net/toyota-unintended-acceleration-and-the-big-bowl-of-spaghetti-code/) ([comments](https://news.ycombinator.com/item?id=46186950))

* [F35 Fighter Jet’s C++ Coding Standards](https://www.stroustrup.com/JSF-AV-rules.pdf) ([comments](https://lobste.rs/s/loqwsc/f35_fighter_jet_s_c_coding_standards))

* [The Gerrit code review iceberg](https://www.haiku-os.org/blog/pulkomandy/2025-11-24-the_gerrit_pending_review_iceberg/) ([comments](https://lobste.rs/s/4tvzih/gerrit_code_review_iceberg))

## Freedom from Ads and Privacy Topics

* [How I block all online ads](https://troubled.engineer/posts/no-ads/) ([comments](https://news.ycombinator.com/item?id=46185816))

* [Homebrew Can Now Help You Install Flatpaks Too](https://news.slashdot.org/story/25/12/07/0651234/homebrew-can-now-help-you-install-flatpaks-too?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46181231))

* [Why People Keep Flocking to Linux in 2025 (and It's Not Just to Escape Windows)](https://soylentnews.org/article.pl?sid=25/12/06/140210&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/12/06/140210))

## Societal and Behavioral Studies

* [Why Meetings Can Harm Employee Well-Being](https://it.slashdot.org/story/25/12/08/0132210/why-meetings-can-harm-employee-well-being?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://it.slashdot.org/story/25/12/08/0132210/why-meetings-can-harm-employee-well-being?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [College Students Flock To A New Major: AI](https://news.slashdot.org/story/25/12/07/2330215/college-students-flock-to-a-new-major-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/12/07/2330215/college-students-flock-to-a-new-major-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [The Anatomy of a macOS App](https://eclecticlight.co/2025/12/04/the-anatomy-of-a-macos-app/) ([comments](https://news.ycombinator.com/item?id=46181268))

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

* [2025-12-08, 01:38:00](https://soylentnews.org/article.pl?sid=25/12/06/1419220&amp;from=rss) - [Waymo Drives Straight Into Active Police Scene, Ignores Chaos](https://soylentnews.org/article.pl?sid=25/12/06/1419220&amp;from=rss)
* [2025-12-08, 01:35:00](https://it.slashdot.org/story/25/12/08/0132210/why-meetings-can-harm-employee-well-being?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Meetings Can Harm Employee Well-Being](https://it.slashdot.org/story/25/12/08/0132210/why-meetings-can-harm-employee-well-being?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 00:38:44](https://news.ycombinator.com/item?id=46186997) - [Spinlocks vs. Mutexes: When to Spin and When to Sleep](https://howtech.substack.com/p/spinlocks-vs-mutexes-when-to-spin)
* [2025-12-08, 00:34:00](https://tech.slashdot.org/story/25/12/08/0022229/eu-urged-to-soften-2035-ban-on-internal-combustion-engine-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Urged to Soften 2035 Ban on Internal Combustion Engine Cars](https://tech.slashdot.org/story/25/12/08/0022229/eu-urged-to-soften-2035-ban-on-internal-combustion-engine-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 00:31:12](https://news.ycombinator.com/item?id=46186950) - [Toyota Unintended Acceleration and the Big Bowl of \&quot;Spaghetti\&quot; Code(2013)](https://www.safetyresearch.net/toyota-unintended-acceleration-and-the-big-bowl-of-spaghetti-code/)
* [2025-12-08, 00:26:04](https://news.ycombinator.com/item?id=46186917) - [Show HN: Cdecl-dump - represent C declarations visually](https://github.com/bbu/cdecl-dump)
* [2025-12-08, 00:22:52](https://lobste.rs/s/iuzgps/attempt_at_compelling_articulation) - [An Attempt at a Compelling Articulation of Forth&apos;s Practical Strengths and Eternal Usefulness](https://im-just-lee.ing/forth-why-cb234c03.txt)
* [2025-12-07, 23:34:00](https://news.slashdot.org/story/25/12/07/2330215/college-students-flock-to-a-new-major-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [College Students Flock To A New Major:  AI](https://news.slashdot.org/story/25/12/07/2330215/college-students-flock-to-a-new-major-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 23:18:13](https://lobste.rs/s/iohaag/pulldash_fast_filterable_github_pr) - [Pulldash: Fast, filterable GitHub PR review. Entirely client-side](https://github.com/coder/pulldash)
* [2025-12-07, 22:31:22](https://news.ycombinator.com/item?id=46185957) - [Bag of words, have mercy on us](https://www.experimental-history.com/p/bag-of-words-have-mercy-on-us)
* [2025-12-07, 22:18:59](https://news.ycombinator.com/item?id=46185816) - [How I block all online ads](https://troubled.engineer/posts/no-ads/)
* [2025-12-07, 22:07:00](https://hardware.slashdot.org/story/25/12/06/1916232/no-rise-in-radiation-levels-at-chernobyl-despite-damage-from-februarys-drone-strike?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [No Rise in Radiation Levels at Chernobyl, Despite Damage from February&apos;s Drone Strike](https://hardware.slashdot.org/story/25/12/06/1916232/no-rise-in-radiation-levels-at-chernobyl-despite-damage-from-februarys-drone-strike?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 21:55:01](https://news.ycombinator.com/item?id=46185576) - [Mechanical power generation using Earth&apos;s ambient radiation](https://www.science.org/doi/10.1126/sciadv.adw6833)
* [2025-12-07, 21:26:35](https://news.ycombinator.com/item?id=46185317) - [Proxmox delivers its software-defined datacenter contender and VMware escape](https://www.theregister.com/2025/12/05/proxmox_datacenter_manager_1_stable/)
* [2025-12-07, 21:16:39](https://lobste.rs/s/fiakvo/why_sanitizer_api_is_just_sethtml) - [Why the Sanitizer API is just `setHTML()`](https://frederikbraun.de/why-sethtml.html)
* [2025-12-07, 20:59:00](https://slashdot.org/story/25/12/07/2048213/openai-insists-target-links-in-chatgpt-responses-werent-ads-but-suggestions---but-turns-them-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Insists Target Links in ChatGPT Responses Weren&apos;t Ads But &apos;Suggestions&apos; - But Turns Them Off](https://slashdot.org/story/25/12/07/2048213/openai-insists-target-links-in-chatgpt-responses-werent-ads-but-suggestions---but-turns-them-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 20:50:00](https://soylentnews.org/article.pl?sid=25/12/06/1415242&amp;from=rss) - [Syntax Hacking: Researchers Discover Sentence Structure Can Bypass AI Safety Rules](https://soylentnews.org/article.pl?sid=25/12/06/1415242&amp;from=rss)
* [2025-12-07, 19:59:00](https://news.slashdot.org/story/25/12/07/1955259/how-home-assistant-leads-a-local-first-rebellion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Home Assistant Leads a &apos;Local-First Rebellion&apos;](https://news.slashdot.org/story/25/12/07/1955259/how-home-assistant-leads-a-local-first-rebellion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 19:56:03](https://news.ycombinator.com/item?id=46184575) - [Evidence from the One Laptop per Child program in rural Peru](https://www.nber.org/papers/w34495)
* [2025-12-07, 19:17:17](https://news.ycombinator.com/item?id=46184229) - [Estimates are difficult for developers and product owners](https://thorsell.io/2025/12/07/estimates.html)
* [2025-12-07, 19:14:45](https://lobste.rs/s/lp2m1v/estimates_are_difficult_for_developers) - [Estimates are difficult for developers and product owners](https://thorsell.io/2025/12/07/estimates.html)
* [2025-12-07, 19:03:16](https://news.ycombinator.com/item?id=46184128) - [Millions of Americans mess up their taxes, but a new law will help](https://www.wakeuptopolitics.com/p/millions-of-americans-mess-up-their)
* [2025-12-07, 19:02:02](https://lobste.rs/s/ldfsmq/defeating_prompt_injections_by_design) - [Defeating Prompt Injections by Design](https://arxiv.org/pdf/2503.18813)
* [2025-12-07, 18:57:17](https://lobste.rs/s/loqwsc/f35_fighter_jet_s_c_coding_standards) - [F35 Fighter Jet’s C++ Coding Standards](https://www.stroustrup.com/JSF-AV-rules.pdf)
* [2025-12-07, 18:45:00](https://games.slashdot.org/story/25/12/07/1842250/why-gen-z-is-using-retro-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Gen Z is Using Retro Tech](https://games.slashdot.org/story/25/12/07/1842250/why-gen-z-is-using-retro-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 18:42:57](https://news.ycombinator.com/item?id=46183952) - [Show HN: Spotify Wrapped but for LeetCode](https://github.com/collinboler/leetcodewrapped)
* [2025-12-07, 18:07:06](https://news.ycombinator.com/item?id=46183657) - [The C++ standard for the F-35 Fighter Jet [video]](https://www.youtube.com/watch?v=Gv4sDL9Ljww)
* [2025-12-07, 17:34:00](https://entertainment.slashdot.org/story/25/12/06/0459202/is-netflix-trying-to-buy-warner-bros-or-kill-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Netflix Trying to Buy Warner Bros. or Kill It? ](https://entertainment.slashdot.org/story/25/12/06/0459202/is-netflix-trying-to-buy-warner-bros-or-kill-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 17:18:54](https://news.ycombinator.com/item?id=46183294) - [I failed to recreate the 1996 Space Jam website with Claude](https://j0nah.com/i-failed-to-recreate-the-1996-space-jam-website-with-claude/)
* [2025-12-07, 16:54:44](https://news.ycombinator.com/item?id=46183088) - [What the heck is going on at Apple?](https://www.cnn.com/2025/12/06/tech/apple-tim-cook-leadership-changes)
* [2025-12-07, 16:34:00](https://tech.slashdot.org/story/25/12/07/0627214/new-freebsd-15-retires-32-bit-ports-and-modernizes-builds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New FreeBSD 15 Retires 32-Bit Ports and Modernizes Builds](https://tech.slashdot.org/story/25/12/07/0627214/new-freebsd-15-retires-32-bit-ports-and-modernizes-builds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 16:12:54](https://lobste.rs/s/4tvzih/gerrit_code_review_iceberg) - [The Gerrit code review iceberg](https://www.haiku-os.org/blog/pulkomandy/2025-11-24-the_gerrit_pending_review_iceberg/)
* [2025-12-07, 16:07:00](https://soylentnews.org/article.pl?sid=25/12/06/140210&amp;from=rss) - [Why People Keep Flocking to Linux in 2025 (and It&apos;s Not Just to Escape Windows)](https://soylentnews.org/article.pl?sid=25/12/06/140210&amp;from=rss)
* [2025-12-07, 15:34:00](https://news.slashdot.org/story/25/12/07/0651234/homebrew-can-now-help-you-install-flatpaks-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Homebrew Can Now Help You Install Flatpaks Too](https://news.slashdot.org/story/25/12/07/0651234/homebrew-can-now-help-you-install-flatpaks-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 15:08:17](https://news.ycombinator.com/item?id=46182202) - [Scala 3 slowed us down?](https://kmaliszewski9.github.io/scala/2025/12/07/scala3-slowdown.html)
* [2025-12-07, 15:02:16](https://lobste.rs/s/q8znua/kollector_publishing_koreader) - [KOllector - Publishing KOReader Highlights](https://tech.stonecharioteer.com/posts/2025/kollector/)
* [2025-12-07, 14:47:02](https://news.ycombinator.com/item?id=46182031) - [Nested Learning: A new ML paradigm for continual learning](https://research.google/blog/introducing-nested-learning-a-new-ml-paradigm-for-continual-learning/)
* [2025-12-07, 14:37:21](https://news.ycombinator.com/item?id=46181962) - [Dollar-stores overcharge customers while promising low prices](https://www.theguardian.com/us-news/2025/dec/03/customers-pay-more-rising-dollar-store-costs)
* [2025-12-07, 13:21:24](https://news.ycombinator.com/item?id=46181491) - [The state of Schleswig-Holstein is consistently relying on open source](https://www.heise.de/en/news/Goodbye-Microsoft-Schleswig-Holstein-relies-on-Open-Source-and-saves-millions-11105459.html)
* [2025-12-07, 13:16:26](https://news.ycombinator.com/item?id=46181466) - [Over fifty new hallucinations in ICLR 2026 submissions](https://gptzero.me/news/iclr-2026/)
* [2025-12-07, 13:14:01](https://lobste.rs/s/ml4som/it_is_worth_it_optimize_images_for_your) - [It Is Worth It To Optimize Images For Your Site](https://brainbaking.com/post/2025/10/is-it-worth-it-to-optimize-images-for-your-site/)
* [2025-12-07, 12:49:14](https://lobste.rs/s/e4pgna/what_do_you_use_typedarrays_for) - [What do you use TypedArrays for in JavaScript/TypeScript?](https://lobste.rs/s/e4pgna/what_do_you_use_typedarrays_for)
* [2025-12-07, 12:34:00](https://news.slashdot.org/story/25/12/06/0812245/many-privileged-students-at-us-universities-are-getting-extra-time-on-tests-after-disability-diagnoses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Many Privileged Students at US Universities are Getting Extra Time on Tests After &apos;Disability&apos; Diagnoses](https://news.slashdot.org/story/25/12/06/0812245/many-privileged-students-at-us-universities-are-getting-extra-time-on-tests-after-disability-diagnoses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 12:31:53](https://news.ycombinator.com/item?id=46181268) - [The Anatomy of a macOS App](https://eclecticlight.co/2025/12/04/the-anatomy-of-a-macos-app/)
* [2025-12-07, 12:23:45](https://news.ycombinator.com/item?id=46181231) - [Google Titans architecture, helping AI have long-term memory](https://research.google/blog/titans-miras-helping-ai-have-long-term-memory/)
* [2025-12-07, 11:51:02](https://news.ycombinator.com/item?id=46181076) - [Java Hello World, LLVM Edition](https://www.javaadvent.com/2025/12/java-hello-world-llvm-edition.html)
* [2025-12-07, 11:26:00](https://soylentnews.org/article.pl?sid=25/12/05/0735244&amp;from=rss) - [UW Nobel Winner&apos;s Lab Releases Most Powerful Protein Design Tool Yet](https://soylentnews.org/article.pl?sid=25/12/05/0735244&amp;from=rss)
* [2025-12-07, 08:37:38](https://lobste.rs/s/gou975/structural_inheritance_doesn_t_work) - [Structural inheritance doesn&apos;t work where you expect it to](https://trynova.dev/blog/oops-im-dead)
* [2025-12-07, 08:34:00](https://developers.slashdot.org/story/25/12/07/0248219/is-ruby-still-a-serious-programming-language?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Ruby Still a &apos;Serious&apos; Programming Language?](https://developers.slashdot.org/story/25/12/07/0248219/is-ruby-still-a-serious-programming-language?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 08:26:53](https://lobste.rs/s/wsq0v7/wild_west_post_posix_io_interfaces) - [The Wild West of Post-POSIX IO Interfaces](https://youtu.be/abDWZ9D8kEE)
* [2025-12-07, 07:28:03](https://lobste.rs/s/ibjifi/what_i_learnt_about_making_websites_by) - [What I learnt about making websites by reading two thousand web pages](https://alexwlchan.net/2025/learning-how-to-make-websites/)
* [2025-12-07, 06:42:00](https://soylentnews.org/article.pl?sid=25/12/05/0733258&amp;from=rss) - [FreeBSD 15.0 Released With Pkgbase - and With It Come Several Major Changes](https://soylentnews.org/article.pl?sid=25/12/05/0733258&amp;from=rss)
* [2025-12-07, 05:34:00](https://mobile.slashdot.org/story/25/12/07/0523228/new-jolla-phone-now-available-for-pre-order-as-an-independent-linux-phone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Jolla Phone Now Available for Pre-Order as an Independent Linux Phone](https://mobile.slashdot.org/story/25/12/07/0523228/new-jolla-phone-now-available-for-pre-order-as-an-independent-linux-phone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 04:39:56](https://lobste.rs/s/29tpgl/vanilla_css_is_all_you_need) - [Vanilla CSS is all you need](https://www.zolkos.com/2025/12/03/vanilla-css-is-all-you-need)
* [2025-12-07, 04:39:04](https://lobste.rs/s/gffbjq/package_manager_design_tradeoffs) - [Package Manager Design Tradeoffs](https://nesbitt.io/2025/12/05/package-manager-tradeoffs.html)
* [2025-12-07, 03:23:43](https://lobste.rs/s/jkl29r/discovering_indieweb_with_calm_tech) - [Discovering the indieweb with calm tech](https://alexsci.com/blog/calm-tech-discover/)
* [2025-12-07, 02:34:00](https://science.slashdot.org/story/25/12/07/012206/the-anxieties-of-full-body-mri-scans-not-covered-by-insurance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Anxieties of Full-Body MRI Scans (Not Covered by Insurance)](https://science.slashdot.org/story/25/12/07/012206/the-anxieties-of-full-body-mri-scans-not-covered-by-insurance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 01:59:00](https://soylentnews.org/article.pl?sid=25/12/05/0730234&amp;from=rss) - [IBM CEO Warns That Ongoing Trillion-Dollar AI Data Center Buildout is Unsustainable](https://soylentnews.org/article.pl?sid=25/12/05/0730234&amp;from=rss)
* [2025-12-07, 01:39:25](https://lobste.rs/s/1kcrn4/eurydice_rust_c_compiler_yes) - [Eurydice: a Rust to C compiler (yes)](http://jonathan.protzenko.fr/2025/10/28/eurydice.html)
* [2025-12-07, 01:18:06](https://lobste.rs/s/t5zgds/using_llms_at_oxide) - [Using LLMs at Oxide](https://rfd.shared.oxide.computer/rfd/0576)
* [2025-12-07, 00:21:00](https://news.slashdot.org/story/25/12/06/1853227/could-americas-paper-checks-be-on-the-way-out-like-the-penny?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could America&apos;s Paper Checks Be On the Way Out, Like the Penny?](https://news.slashdot.org/story/25/12/06/1853227/could-americas-paper-checks-be-on-the-way-out-like-the-penny?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 00:05:16](https://lobste.rs/s/pohl2l/struggling_towards_algebraic_theory) - [Struggling Towards an Algebraic Theory of Music](https://reasonablypolymorphic.com/blog/algebraic-music/index.html)
* [2025-12-06, 21:11:00](https://soylentnews.org/article.pl?sid=25/12/05/0728256&amp;from=rss) - [OpenAI Desperate to Avoid Explaining Why It Deleted Pirated Book Datasets](https://soylentnews.org/article.pl?sid=25/12/05/0728256&amp;from=rss)
* [2025-12-06, 19:50:43](https://lobste.rs/s/iaspme/use_python_for_scripting) - [Use Python for Scripting](https://hypirion.com/musings/use-python-for-scripting)
* [2025-12-06, 17:40:01](https://lobste.rs/s/zbqvyu/github_actions_has_package_manager_it) - [GitHub Actions Has a Package Manager, and It Might Be the Worst](https://nesbitt.io/2025/12/06/github-actions-package-manager.html)
* [2025-12-06, 17:38:43](https://lobste.rs/s/m3a3la/perl_s_decline_was_cultural) - [Perl&apos;s decline was cultural](https://www.beatworm.co.uk/blog/computers/perls-decline-was-cultural-not-technical)
* [2025-12-06, 17:34:38](https://lobste.rs/s/r93uje/freebsd_15_why_you_ll_want_it) - [FreeBSD 15: Why You’ll Want It](https://freebsdfoundation.org/blog/freebsd-15-why-youll-want-it/)
* [2025-12-06, 16:29:54](https://lobste.rs/s/bj04hv/how_i_discovered_hidden_microphone_on) - [How I discovered a hidden microphone on a Chinese NanoKVM](https://telefoncek.si/2025/02/2025-02-10-hidden-microphone-on-nanokvm/)
* [2025-12-06, 16:29:00](https://soylentnews.org/article.pl?sid=25/12/05/0720258&amp;from=rss) - [New DDR5 Memory Overclocking World Record Set at 13,530 MT/S](https://soylentnews.org/article.pl?sid=25/12/05/0720258&amp;from=rss)
* [2025-12-06, 11:41:00](https://soylentnews.org/article.pl?sid=25/12/04/1138209&amp;from=rss) - [Let’s Encrypt to Reduce Certificate Validity From 90 Days to 45 Days](https://soylentnews.org/article.pl?sid=25/12/04/1138209&amp;from=rss)
* [2025-12-06, 09:42:13](https://lobste.rs/s/8o9mcu/flow_control_programmer_s_text_editor) - [Flow Control: a programmer&apos;s text editor](https://flow-control.dev)
* [2025-12-06, 06:53:00](https://soylentnews.org/article.pl?sid=25/12/04/1134226&amp;from=rss) - [After Nearly 30 Years, Crucial Will Stop Selling RAM to Consumers](https://soylentnews.org/article.pl?sid=25/12/04/1134226&amp;from=rss)
* [2025-12-06, 02:12:00](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss) - [Raspberry Pi Launches 1GB Model at $45, Temporarily Raises Prices on Higher-Capacity Boards](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss)
* [2025-12-05, 21:24:00](https://soylentnews.org/article.pl?sid=25/12/04/1131220&amp;from=rss) - [Supreme Court Hears Case That Could Trigger Big Crackdown on Internet Piracy](https://soylentnews.org/article.pl?sid=25/12/04/1131220&amp;from=rss)
* [2025-12-05, 19:32:17](https://news.ycombinator.com/item?id=46166161) - [A two-person method to simulate die rolls (2023)](https://blog.42yeah.is/algorithm/2023/08/05/two-person-die.html)
* [2025-12-05, 15:39:00](https://soylentnews.org/article.pl?sid=25/12/03/1710234&amp;from=rss) - [Oracle&apos;s Credit Risk is Spiking as Wall Street Asks How It&apos;s Going to Pay for All That AI](https://soylentnews.org/article.pl?sid=25/12/03/1710234&amp;from=rss)
* [2025-12-05, 10:54:00](https://soylentnews.org/article.pl?sid=25/12/03/178224&amp;from=rss) - [Dotcom Survivor Syndrome – How Perl’s Early Success Created the Seeds of Its Downfall](https://soylentnews.org/article.pl?sid=25/12/03/178224&amp;from=rss)
* [2025-12-05, 06:01:00](https://soylentnews.org/article.pl?sid=25/12/03/173255&amp;from=rss) - [Space CEO Explains Why He Believes Private Space Stations Are a Viable Business](https://soylentnews.org/article.pl?sid=25/12/03/173255&amp;from=rss)
* [2025-12-05, 01:24:00](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss) - [Linux First, Windows Later! Dell Launches Qualcomm NPU Laptop on Linux Before Windows](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss)
* [2025-12-04, 20:42:00](https://soylentnews.org/article.pl?sid=25/12/03/1255251&amp;from=rss) - [Netflix Quietly Drops Support for Casting to Most TVs](https://soylentnews.org/article.pl?sid=25/12/03/1255251&amp;from=rss)
* [2025-12-04, 15:53:00](https://soylentnews.org/article.pl?sid=25/12/03/1244208&amp;from=rss) - [Google&apos;s Gemini 3 Jailbroken in Minutes, and the Fallout is Alarming](https://soylentnews.org/article.pl?sid=25/12/03/1244208&amp;from=rss)
* [2025-12-04, 13:11:33](https://news.ycombinator.com/item?id=46147285) - [Uninitialized garbage on ia64 can be deadly (2004)](https://devblogs.microsoft.com/oldnewthing/20040119-00/?p=41003)
* [2025-12-04, 11:04:00](https://soylentnews.org/article.pl?sid=25/12/03/0225225&amp;from=rss) - [Datacenters in Space Are a Terrible, Horrible, No Good Idea.](https://soylentnews.org/article.pl?sid=25/12/03/0225225&amp;from=rss)
* [2025-12-04, 06:17:00](https://soylentnews.org/article.pl?sid=25/12/03/0223207&amp;from=rss) - [Flock Uses Overseas Gig Workers to Build its Surveillance AI](https://soylentnews.org/article.pl?sid=25/12/03/0223207&amp;from=rss)
* [2025-12-04, 01:36:00](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss) - [KDE to Drop X11 Session in KDE Plasma 6.8](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss)
