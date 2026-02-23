# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Tools

* [rango: Voice control for browsers](https://github.com/david-tejada/rango) ([comments](https://lobste.rs/s/3jljw5/rango_voice_control_for_browsers))

* [microgpt - LLM visualizer](https://microgpt.boratto.ca/) ([comments](https://lobste.rs/s/kxyicr/microgpt_llm_visualizer))

* [Designing Odin's Casting Syntax](https://www.gingerbill.org/article/2026/02/23/designing-odins-casting-syntax/) ([comments](https://lobste.rs/s/0s4w9x/designing_odin_s_casting_syntax))

* [femtolisp: A lightweight, robust, scheme-like Lisp implementation](https://github.com/JeffBezanson/femtolisp) ([comments](https://news.ycombinator.com/item?id=47121539))

* [Forgejo, AGit, and Pull Request Templates](https://carlo.zancanaro.id.au/posts/forgejo-agit-and-pull-request-templates.html) ([comments](https://lobste.rs/s/favfvi/forgejo_agit_pull_request_templates))

* [Jit: A header-only, cross-platform JIT compiler library in C. Targets x86-32, x86-64, ARM32 and ARM64](https://github.com/abdimoallim/jit) ([comments](https://lobste.rs/s/zbirtc/jit_header_only_cross_platform_jit))

## Scientific Discoveries and Innovations

* [Rule-Breaking Black Hole Growing At 13x the Cosmic 'Speed Limit' Challenges Theories](https://science.slashdot.org/story/26/02/23/0638227/rule-breaking-black-hole-growing-at-13x-the-cosmic-speed-limit-challenges-theories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/26/02/23/0638227/rule-breaking-black-hole-growing-at-13x-the-cosmic-speed-limit-challenges-theories))

* [Concrete “Battery” Developed at MIT Now Packs 10 Times the Power](https://soylentnews.org/article.pl?sid=26/02/22/139236&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/02/22/139236&amp;from=rss))

* [Pink Noise Reduces REM Sleep and May Harm Sleep Quality](https://soylentnews.org/article.pl?sid=26/02/22/1256215&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/02/22/1256215&amp;from=rss))

* [Privacy Is Not a Price You Pay for Growth](https://soylentnews.org/article.pl?sid=26/02/22/1259218&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/02/22/1259218&amp;from=rss))

## Artificial Intelligence and Machine Learning

* [Goldman Sachs, Morgan Stanley Calculate AI's Contribution To U.S. Growth May Be Basically Zero](https://news.slashdot.org/story/26/02/23/1342216/goldman-sachs-morgan-stanley-calculate-ais-contribution-to-us-growth-may-be-basically-zero?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/26/02/23/1342216/goldman-sachs-morgan-stanley-calculate-ais-contribution-to-us-growth-may-be-basically-zero))

* [Bitmovin (YC S15) Is Hiring Interns in AI for Summer 2026 in Austria](https://bitmovin.com/careers/8023403002/) ([comments](https://news.ycombinator.com/item?id=47118990))

* [AI Timeline – 171 LLMs from Transformer (2017) to GPT-5.3 (2026)](https://llm-timeline.com/) ([comments](https://news.ycombinator.com/item?id=47119871))

* [Is AI Impacting Which Programming Language Projects Use?](https://developers.slashdot.org/story/26/02/23/0732245/is-ai-impacting-which-programming-language-projects-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://developers.slashdot.org/story/26/02/23/0732245/is-ai-impacting-which-programming-language-projects-use))

## Business and Societal Impact

* [How in the Hell Did Joann Fabrics Die While Best Buy Survived? It Wasn't Amazon](https://www.governance.fyi/p/how-in-the-hell-did-joann-fabrics) ([comments](https://news.ycombinator.com/item?id=47122337))

* [Hetzner (European hosting provider) to increase prices by up to 38%](https://old.reddit.com/r/BuyFromEU/comments/1rce0lf/hetzner_european_hosting_provider_to_increase/) ([comments](https://news.ycombinator.com/item?id=47121029))

* [Elsevier shuts down its finance journal citation cartel](https://www.chrisbrunet.com/p/elsevier-shuts-down-its-finance-journal) ([comments](https://news.ycombinator.com/item?id=47119530))

* [Sam Altman Would Like To Remind You That Humans Use a Lot of Energy, Too](https://slashdot.org/story/26/02/23/1430235/sam-altman-would-like-to-remind-you-that-humans-use-a-lot-of-energy-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/26/02/23/1430235/sam-altman-would-like-to-remind-you-that-humans-use-a-lot-of-energy-too))

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

* [2026-02-23, 16:08:31](https://lobste.rs/s/3jljw5/rango_voice_control_for_browsers) - [rango: Voice control for browsers](https://github.com/david-tejada/rango)
* [2026-02-23, 16:02:00](https://news.slashdot.org/story/26/02/23/1531240/climate-physicists-face-the-ghosts-in-their-machines-clouds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Climate Physicists Face the Ghosts in Their Machines: Clouds](https://news.slashdot.org/story/26/02/23/1531240/climate-physicists-face-the-ghosts-in-their-machines-clouds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 15:41:13](https://lobste.rs/s/ype4g3/disappointing_phones) - [Disappointing phones](https://cadence.moe/blog/2026-02-08-disappointing-phones)
* [2026-02-23, 15:24:40](https://lobste.rs/s/bto9ju/tracking_nixos_option_values) - [Tracking NixOS option values and dependencies](https://oddlama.org/blog/tracking-options-in-nixos/)
* [2026-02-23, 15:23:11](https://lobste.rs/s/pgh4ss/so_i_ve_been_thinking_about_static_site) - [So I&apos;ve Been Thinking About Static Site Generators](https://wolfgirl.dev/blog/2026-02-23-so-ive-been-thinking-about-static-site-generators/)
* [2026-02-23, 15:22:00](https://science.slashdot.org/story/26/02/23/1459227/stressful-people-in-your-life-could-be-adding-months-to-your-biological-age?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stressful People in Your Life Could Be Adding Months To Your Biological Age](https://science.slashdot.org/story/26/02/23/1459227/stressful-people-in-your-life-could-be-adding-months-to-your-biological-age?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 14:40:00](https://slashdot.org/story/26/02/23/1430235/sam-altman-would-like-to-remind-you-that-humans-use-a-lot-of-energy-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Altman Would Like To Remind You That Humans Use a Lot of Energy, Too](https://slashdot.org/story/26/02/23/1430235/sam-altman-would-like-to-remind-you-that-humans-use-a-lot-of-energy-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 14:28:39](https://news.ycombinator.com/item?id=47122789) - [The peculiar case of Japanese web design](https://sabrinas.space)
* [2026-02-23, 14:22:39](https://news.ycombinator.com/item?id=47122715) - [The Age Verification Trap, Verifying age undermines everyone&apos;s data protection](https://spectrum.ieee.org/age-verification)
* [2026-02-23, 14:15:27](https://lobste.rs/s/tmynah/using_haskell_s_newtype_c) - [Using Haskell&apos;s &apos;newtype&apos; in C](https://blog.nelhage.com/2010/10/using-haskells-newtype-in-c/)
* [2026-02-23, 14:00:00](https://news.slashdot.org/story/26/02/23/1342216/goldman-sachs-morgan-stanley-calculate-ais-contribution-to-us-growth-may-be-basically-zero?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Goldman Sachs, Morgan Stanley Calculate AI&apos;s Contribution To U.S. Growth May Be Basically Zero](https://news.slashdot.org/story/26/02/23/1342216/goldman-sachs-morgan-stanley-calculate-ais-contribution-to-us-growth-may-be-basically-zero?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 13:53:21](https://news.ycombinator.com/item?id=47122337) - [How in the Hell Did Joann Fabrics Die While Best Buy Survived? It Wasn&apos;t Amazon](https://www.governance.fyi/p/how-in-the-hell-did-joann-fabrics)
* [2026-02-23, 13:28:15](https://lobste.rs/s/1ydlk8/ladybird_adopts_rust_with_help_from_ai) - [Ladybird adopts Rust, with help from AI](https://ladybird.org/posts/adopting-rust/)
* [2026-02-23, 13:20:43](https://lobste.rs/s/7zdq2s/you_don_t_need_free_lists) - [You don&apos;t need free lists](https://jakubtomsu.github.io/posts/bit_pools/)
* [2026-02-23, 13:10:56](https://news.ycombinator.com/item?id=47121864) - [VTT Test Donut Lab Battery Reaches 80% Charge in Under 10 Minutes [pdf]](https://pub-fee113bb711e441db5c353d2d31abbb3.r2.dev/VTT_CR_00092_26.pdf)
* [2026-02-23, 12:55:10](https://lobste.rs/s/0s4w9x/designing_odin_s_casting_syntax) - [Designing Odin&apos;s Casting Syntax](https://www.gingerbill.org/article/2026/02/23/designing-odins-casting-syntax/)
* [2026-02-23, 12:47:33](https://lobste.rs/s/tbsdd4/cursed_engineering_jumping_randomly) - [Cursed engineering: jumping randomly through CSV files without hurting yourself](https://github.com/medialab/xan/blob/master/docs/blog/csv_base_jumping.md)
* [2026-02-23, 12:38:54](https://news.ycombinator.com/item?id=47121539) - [femtolisp: A lightweight, robust, scheme-like Lisp implementation](https://github.com/JeffBezanson/femtolisp)
* [2026-02-23, 12:34:00](https://developers.slashdot.org/story/26/02/23/0732245/is-ai-impacting-which-programming-language-projects-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is AI Impacting Which Programming Language Projects Use?](https://developers.slashdot.org/story/26/02/23/0732245/is-ai-impacting-which-programming-language-projects-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 12:22:00](https://soylentnews.org/article.pl?sid=26/02/22/139236&amp;from=rss) - [Concrete “Battery” Developed at MIT Now Packs 10 Times the Power](https://soylentnews.org/article.pl?sid=26/02/22/139236&amp;from=rss)
* [2026-02-23, 11:44:10](https://news.ycombinator.com/item?id=47121029) - [Hetzner (European hosting provider) to increase prices by up to 38%](https://old.reddit.com/r/BuyFromEU/comments/1rce0lf/hetzner_european_hosting_provider_to_increase/)
* [2026-02-23, 11:29:30](https://news.ycombinator.com/item?id=47120901) - [Don&apos;t host email yourself – your reminder in 2026](https://www.coinerella.com/dont-host-email-yourself-your-reminder-in-2026/)
* [2026-02-23, 11:29:22](https://news.ycombinator.com/item?id=47120899) - [Ladybird Browser adopts Rust](https://ladybird.org/posts/adopting-rust/)
* [2026-02-23, 11:27:53](https://lobste.rs/s/favfvi/forgejo_agit_pull_request_templates) - [Forgejo, AGit, and Pull Request Templates](https://carlo.zancanaro.id.au/posts/forgejo-agit-and-pull-request-templates.html)
* [2026-02-23, 11:25:35](https://lobste.rs/s/yi5iu1/hetzner_price_adjustment_hetzner_docs) - [Hetzner Price Adjustment - Hetzner Docs](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/)
* [2026-02-23, 09:58:33](https://news.ycombinator.com/item?id=47120201) - [SETI@home: Data Acquisition and Front-End Processing (2025)](https://iopscience.iop.org/article/10.3847/1538-3881/ade5a7)
* [2026-02-23, 09:57:33](https://news.ycombinator.com/item?id=47120196) - [QRTape – Audio Playback from Paper Tape with Computer Vision (2021)](http://www.theresistornetwork.com/2021/03/qrtape-audio-playback-from-paper-tape.html)
* [2026-02-23, 09:56:57](https://news.ycombinator.com/item?id=47120188) - [Hacker News.love – 22 projects Hacker News didn&apos;t love](https://hackernews.love/)
* [2026-02-23, 09:12:27](https://lobste.rs/s/eaifa0/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/eaifa0/what_are_you_doing_this_week)
* [2026-02-23, 09:07:44](https://news.ycombinator.com/item?id=47119871) - [Show HN: AI Timeline – 171 LLMs from Transformer (2017) to GPT-5.3 (2026)](https://llm-timeline.com/)
* [2026-02-23, 08:34:00](https://science.slashdot.org/story/26/02/23/0638227/rule-breaking-black-hole-growing-at-13x-the-cosmic-speed-limit-challenges-theories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rule-Breaking Black Hole Growing At 13x the Cosmic &apos;Speed Limit&apos; Challenges Theories](https://science.slashdot.org/story/26/02/23/0638227/rule-breaking-black-hole-growing-at-13x-the-cosmic-speed-limit-challenges-theories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 08:25:34](https://lobste.rs/s/kxyicr/microgpt_llm_visualizer) - [microgpt - LLM visualizer](https://microgpt.boratto.ca/)
* [2026-02-23, 08:22:34](https://news.ycombinator.com/item?id=47119530) - [Elsevier shuts down its finance journal citation cartel](https://www.chrisbrunet.com/p/elsevier-shuts-down-its-finance-journal)
* [2026-02-23, 07:49:16](https://lobste.rs/s/3mfu6y/crawling_billion_web_pages_just_over_24) - [Crawling a billion web pages in just over 24 hours](https://andrewkchan.dev/posts/crawler.html)
* [2026-02-23, 07:43:47](https://news.ycombinator.com/item?id=47119274) - [Magical Mushroom – Europe&apos;s first industrial-scale mycelium packaging producer](https://magicalmushroom.com/index)
* [2026-02-23, 07:41:00](https://soylentnews.org/article.pl?sid=26/02/22/1259218&amp;from=rss) - [Privacy Is Not a Price You Pay for Growth](https://soylentnews.org/article.pl?sid=26/02/22/1259218&amp;from=rss)
* [2026-02-23, 07:33:57](https://news.ycombinator.com/item?id=47119210) - [Pope tells priests to use their brains, not AI, to write homilies](https://www.ewtnnews.com/vatican/pope-leo-xiv-tells-priests-to-use-their-brains-not-ai-to-write-homilies)
* [2026-02-23, 07:01:20](https://news.ycombinator.com/item?id=47118990) - [Bitmovin (YC S15) Is Hiring Interns in AI for Summer 2026 in Austria](https://bitmovin.com/careers/8023403002/)
* [2026-02-23, 06:13:29](https://lobste.rs/s/dnyzhk/using_new_bridges_freebsd_15) - [Using The New Bridges of FreeBSD 15](https://blog.feld.me/posts/2026/02/using-new-bridges-freebsd-15/)
* [2026-02-23, 05:35:00](https://it.slashdot.org/story/26/02/23/0531210/should-job-seekers-stop-using-ai-to-write-their-resumes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should Job-Seekers Stop Using AI to Write Their Resumes?](https://it.slashdot.org/story/26/02/23/0531210/should-job-seekers-stop-using-ai-to-write-their-resumes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 03:54:32](https://news.ycombinator.com/item?id=47117886) - [Crawling a billion web pages in just over 24 hours, in 2025](https://andrewkchan.dev/posts/crawler.html)
* [2026-02-23, 02:55:00](https://soylentnews.org/article.pl?sid=26/02/22/1256215&amp;from=rss) - [Pink Noise Reduces REM Sleep and May Harm Sleep Quality](https://soylentnews.org/article.pl?sid=26/02/22/1256215&amp;from=rss)
* [2026-02-23, 02:49:31](https://lobste.rs/s/bysfi9/fast_starting_clojure_runtime_built_with) - [Fast starting Clojure runtime built with GraalVM native-image + Crema](https://github.com/borkdude/cream)
* [2026-02-23, 02:34:00](https://build.slashdot.org/story/26/02/23/0012259/raspberry-pi-stock-rises-over-its-possible-use-with-openclaws-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Raspberry Pi Stock Rises Over Its Possible Use With OpenClaw&apos;s AI Agents](https://build.slashdot.org/story/26/02/23/0012259/raspberry-pi-stock-rises-over-its-possible-use-with-openclaws-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 01:38:11](https://lobste.rs/s/zbirtc/jit_header_only_cross_platform_jit) - [jit: A header-only, cross-platform JIT compiler library in C. Targets x86-32, x86-64, ARM32 and ARM64](https://github.com/abdimoallim/jit)
* [2026-02-22, 23:53:14](https://lobste.rs/s/nddlyy/codespelunker_cli_code_search_tool) - [codespelunker - CLI code search tool that understands code structure and ranks results by relevance. No indexing required](https://github.com/boyter/cs)
* [2026-02-22, 23:45:00](https://it.slashdot.org/story/26/02/22/2332229/telegram-disputes-russias-claim-its-encryption-was-compromised?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Telegram Disputes Russia&apos;s Claim Its Encryption Was Compromised](https://it.slashdot.org/story/26/02/22/2332229/telegram-disputes-russias-claim-its-encryption-was-compromised?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 22:34:00](https://tech.slashdot.org/story/26/02/22/2157236/evs-are-already-making-your-air-cleaner-research-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EVs Are Already Making Your Air Cleaner, Research Shows](https://tech.slashdot.org/story/26/02/22/2157236/evs-are-already-making-your-air-cleaner-research-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 22:10:00](https://soylentnews.org/article.pl?sid=26/02/21/1350257&amp;from=rss) - [Richard Stallman: The Legend of Software Freedom That Saved the World](https://soylentnews.org/article.pl?sid=26/02/21/1350257&amp;from=rss)
* [2026-02-22, 21:34:00](https://tech.slashdot.org/story/26/02/22/2019241/long-before-tech-ceos-turned-to-layoffs-to-cover-ai-expenses-there-was-worldcom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Long Before Tech CEOs Turned To Layoffs To Cover AI Expenses, There Was WorldCom](https://tech.slashdot.org/story/26/02/22/2019241/long-before-tech-ceos-turned-to-layoffs-to-cover-ai-expenses-there-was-worldcom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 20:50:23](https://news.ycombinator.com/item?id=47114530) - [Show HN: CIA World Factbook Archive (1990–2025), searchable and exportable](https://cia-factbook-archive.fly.dev/)
* [2026-02-22, 20:34:00](https://news.slashdot.org/story/26/02/22/1926234/open-source-registries-dont-have-enough-money-to-implement-basic-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Open Source Registries Don&apos;t Have Enough Money To Implement Basic Security&apos;](https://news.slashdot.org/story/26/02/22/1926234/open-source-registries-dont-have-enough-money-to-implement-basic-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 19:57:03](https://lobste.rs/s/xlgbrz/confusables_txt_nfkc_disagree_on_31) - [confusables.txt and NFKC disagree on 31 characters](https://paultendo.github.io/posts/unicode-confusables-nfkc-conflict/)
* [2026-02-22, 19:52:23](https://lobste.rs/s/cgo4vm/tears_donald_knuth_2015) - [The Tears of Donald Knuth (2015)](https://cacm.acm.org/opinion/the-tears-of-donald-knuth/)
* [2026-02-22, 19:40:40](https://lobste.rs/s/qzwdla/read_locks_are_not_your_friends) - [Read Locks Are Not Your Friends](https://eventual-consistency.vercel.app/posts/write-locks-faster)
* [2026-02-22, 19:34:00](https://hardware.slashdot.org/story/26/02/22/1810206/researchers-develop-detachable-crawling-robotic-hand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Develop Detachable Crawling Robotic Hand](https://hardware.slashdot.org/story/26/02/22/1810206/researchers-develop-detachable-crawling-robotic-hand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 19:21:21](https://news.ycombinator.com/item?id=47113796) - [Six Math Essentials](https://terrytao.wordpress.com/2026/02/16/six-math-essentials/)
* [2026-02-22, 19:12:31](https://news.ycombinator.com/item?id=47113728) - [I built Timeframe, our family e-paper dashboard](https://hawksley.org/2026/02/17/timeframe.html)
* [2026-02-22, 18:56:40](https://news.ycombinator.com/item?id=47113618) - [Loops is a federated, open-source TikTok](https://joinloops.org/)
* [2026-02-22, 18:34:00](https://slashdot.org/story/26/02/22/1632217/ai-now-helps-manage-16-of-americas-apartments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Now Helps Manage 16% of America&apos;s Apartments](https://slashdot.org/story/26/02/22/1632217/ai-now-helps-manage-16-of-americas-apartments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 18:28:58](https://news.ycombinator.com/item?id=47113401) - [Benchmarks for concurrent hash map implementations in Go](https://github.com/puzpuzpuz/go-concurrent-map-bench)
* [2026-02-22, 17:34:00](https://slashdot.org/story/26/02/22/0650216/amazon-disputes-report-an-aws-service-was-taken-down-by-its-ai-coding-bot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Disputes Report an AWS Service Was Taken Down By Its AI Coding Bot](https://slashdot.org/story/26/02/22/0650216/amazon-disputes-report-an-aws-service-was-taken-down-by-its-ai-coding-bot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 17:28:00](https://soylentnews.org/article.pl?sid=26/02/21/1339255&amp;from=rss) - [NASA Releases Starliner Failures Report as It Preps for March Launch of Artemis 2](https://soylentnews.org/article.pl?sid=26/02/21/1339255&amp;from=rss)
* [2026-02-22, 15:17:50](https://lobste.rs/s/dpzhs5/drowse_nix_dynamic_derivations_made_easy) - [Drowse: Nix dynamic derivations made easy](https://github.com/figsoda/drowse)
* [2026-02-22, 14:44:42](https://news.ycombinator.com/item?id=47111400) - [Man accidentally gains control of 7k robot vacuums](https://www.popsci.com/technology/robot-vacuum-army/)
* [2026-02-22, 12:41:00](https://soylentnews.org/article.pl?sid=26/02/21/1334230&amp;from=rss) - [Microsoft&apos;s New Windows 11 Speed Test is Just a Link to Ookla&apos;s Speedtest Via Bing](https://soylentnews.org/article.pl?sid=26/02/21/1334230&amp;from=rss)
* [2026-02-22, 09:23:54](https://lobste.rs/s/vdueen/you_are_not_left_behind) - [You are not left behind](https://www.ufried.com/blog/not_left_behind/)
* [2026-02-22, 07:59:00](https://soylentnews.org/article.pl?sid=26/02/21/1326214&amp;from=rss) - [It&apos;s Time to Get Rid of Networked Cameras](https://soylentnews.org/article.pl?sid=26/02/21/1326214&amp;from=rss)
* [2026-02-22, 05:54:28](https://lobste.rs/s/rkjpob/proposal_add_ai_generated_as_flag_reason) - [Proposal: add \&quot;AI generated\&quot; as a flag reason](https://lobste.rs/s/rkjpob/proposal_add_ai_generated_as_flag_reason)
* [2026-02-22, 03:14:00](https://soylentnews.org/article.pl?sid=26/02/21/1322208&amp;from=rss) - [Mechanochemical Breakthrough Unlocks Cheap, Safe, Powdered Hydrogen](https://soylentnews.org/article.pl?sid=26/02/21/1322208&amp;from=rss)
* [2026-02-22, 02:32:21](https://lobste.rs/s/s3en46/fix_your_tools) - [Fix your tools](https://ochagavia.nl/blog/fix-your-tools/)
* [2026-02-21, 22:32:00](https://soylentnews.org/article.pl?sid=26/02/21/137227&amp;from=rss) - [Did We Just See a Black Hole Explode?](https://soylentnews.org/article.pl?sid=26/02/21/137227&amp;from=rss)
* [2026-02-21, 17:49:00](https://soylentnews.org/article.pl?sid=26/02/21/0130244&amp;from=rss) - [AIRD -  a New Term for Workers Freaking Out Over Being Replaced by AI](https://soylentnews.org/article.pl?sid=26/02/21/0130244&amp;from=rss)
* [2026-02-21, 12:55:00](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss) - [Hackers Expose Age-Verification Software Powering Surveillance Web](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss)
* [2026-02-21, 12:02:06](https://news.ycombinator.com/item?id=47099980) - [Pipelined Relational Query Language, Pronounced \&quot;Prequel\&quot;](https://prql-lang.org/)
* [2026-02-21, 08:12:00](https://soylentnews.org/article.pl?sid=26/02/21/0123209&amp;from=rss) - [Visualizing the Internet in 2026](https://soylentnews.org/article.pl?sid=26/02/21/0123209&amp;from=rss)
* [2026-02-21, 03:20:00](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss) - [Palo Alto CEO Says AI Isn&apos;t Great for Business, Yet](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss)
* [2026-02-20, 22:40:00](https://soylentnews.org/article.pl?sid=26/02/19/1712216&amp;from=rss) - [Bacteria Frozen Inside 5,000-Year-Old Ice Cave is Crazy Resistant to Antibiotics ](https://soylentnews.org/article.pl?sid=26/02/19/1712216&amp;from=rss)
* [2026-02-20, 17:56:00](https://soylentnews.org/article.pl?sid=26/02/19/178226&amp;from=rss) - [OpenClaw Security Fears Lead Meta, Other AI Firms to Restrict its Use](https://soylentnews.org/article.pl?sid=26/02/19/178226&amp;from=rss)
* [2026-02-20, 13:13:00](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss) - [Texas Sues Wi-Fi Router Maker Over Alleged China Links](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss)
* [2026-02-20, 08:25:00](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss) - [Data Centres Consider Backing Uranium Projects, NexGen CEO Says](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss)
* [2026-02-20, 03:49:00](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss) - [Password Managers Less Secure Than Promised](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss)
* [2026-02-19, 22:56:00](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss) - [Streaming Service Crunchyroll Raises Prices Weeks After Killing its Free Tier](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss)
* [2026-02-19, 19:37:00](https://news.ycombinator.com/item?id=47078112) - [0 A.D. Release 28: Boiorix](https://play0ad.com/new-release-0-a-d-release-28-boiorix/)
* [2026-02-19, 18:40:35](https://news.ycombinator.com/item?id=47077358) - [What Is a Centipawn Advantage?](https://win-vector.com/2026/02/19/what-is-a-centipawn-advantage/)
* [2026-02-19, 18:10:00](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss) - [Ring Cancels Flock Deal After Dystopian Super Bowl Ad Prompts Mass Outrage](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss)
* [2026-02-19, 17:58:27](https://news.ycombinator.com/item?id=47076789) - [Emulating Goto in Scheme with Continuations](https://terezi.pyrope.net/ccgoto/)
* [2026-02-19, 16:23:39](https://news.ycombinator.com/item?id=47075455) - [Sub-$200 Lidar could reshuffle auto sensor economics](https://spectrum.ieee.org/solid-state-lidar-microvision-adas)
* [2026-02-19, 16:23:19](https://news.ycombinator.com/item?id=47075446) - [Microspeak: Escrow](https://devblogs.microsoft.com/oldnewthing/20260217-00/?p=112067)
* [2026-02-19, 13:24:00](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss) - [What in the World Is Going on in Our Public Schools?](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss)
* [2026-02-19, 08:32:00](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss) - [Western Digital Has No More HDD Capacity Left, as CEO Reveals Massive AI Deals](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss)
* [2026-02-19, 03:55:00](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss) - [Incredible Chinese Humanoid Robot Show on CCTV Chinese New Year TV Gala this Week](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss)
