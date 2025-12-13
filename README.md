# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Computing

* [Recovering Anthony Bourdain's (really) lost Li.st's](https://sandyuraz.com/blogs/bourdain/) - Explore the digital legacy of Anthony Bourdain through a recovered app.

* [Purdue University Approves New AI Requirement for All Undergrads](https://www.forbes.com/sites/michaeltnietzel/2025/12/13/purdue-university-approves-new-ai-requirement-for-all-undergrads/) - Purdue makes AI literacy mandatory for undergraduates.

* [The Rise of Computer Games, Part I: Adventure](https://technicshistory.com/2025/12/13/the-rise-of-computer-games-part-i-adventure/) - Dive into the roots of computer gaming.

* [Using nvi as a Minimal and Fast Text Editor](https://git.sr.ht/~r1w1s1/code-notes/blob/main/notes/NVI_Editor_Guide.txt) - A guide to efficient text editing with nvi.

* [Rust in Linux's Kernel 'is No Longer Experimental'](https://linux.slashdot.org/story/25/12/13/0347245/rust-in-linuxs-kernel-is-no-longer-experimental?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Rust reaches production-ready status in Linux kernels.

* [Rats Play Doom](https://ratsplaydoom.com/) - A surprising approach to neuroscience and gaming.

* [A Lisp Interpreter Implemented in Conway's Game of Life (2021)](https://woodrush.github.io/blog/posts/2022-01-12-lisp-in-life.html) - A creative merging of programming and cellular automation.

* [The Typeframe PX-88 Portable Computing System](https://www.typeframe.net/) - Introducing a new concept in portable computing.

* [Proton Launches Encrypted Sheets as a Privacy-First Alternative to Google, Microsoft Excel](https://soylentnews.org/article.pl?sid=25/12/10/0213247&from=rss) - Proton introduces a privacy-focused spreadsheet solution.

* [Useful patterns for building HTML tools](https://simonwillison.net/2025/Dec/10/html-tools/) - Strategies for crafting effective HTML tools.

## Privacy and Online Security

* [Firefox Survey Finds Only 16% Feel In Control of Their Privacy Choices Online](https://news.slashdot.org/story/25/12/13/2114221/firefox-survey-finds-only-16-feel-in-control-of-their-privacy-choices-online?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A deep dive into Internet users' privacy concerns.

* [VPN location claims don't match real traffic exits](https://ipinfo.io/blog/vpn-location-mismatch-report) - Investigating VPN mismatches with actual traffic exits.

* [USA Wants Your Social Media History If You Visit](https://soylentnews.org/article.pl?sid=25/12/11/092209&from=rss) - Social media scrutiny for U.S. visitors in effect.

* [Chinese Whistleblower Living In US Is Being Hunted By Beijing With US Tech](https://yro.slashdot.org/story/25/12/12/2341230/chinese-whistleblower-living-in-us-is-being-hunted-by-beijing-with-us-tech?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A case of surveillance technology and geopolitics.

* [Russia Says It Might Build its Own Linux Community After Removal of Several Kernel Maintainers](https://soylentnews.org/article.pl?sid=25/12/10/2252241&from=rss) - Russia's reaction to changes in the Linux community.

## Science and Environment

* [Scientists Finally Uncover Why the World’s Most Common Heart Drug Causes Muscle Pain](https://soylentnews.org/article.pl?sid=25/12/11/0919226&from=rss) - New discoveries in medical science.

* [Germany Covers Nearly 56 Percent of 2025 Electricity Use With Renewables](https://hardware.slashdot.org/story/25/12/12/239237/germany-covers-nearly-56-percent-of-2025-electricity-use-with-renewables?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Germany's renewable energy milestones.

* [Germany Bets Billions on Nuclear Fusion for Energy Future](https://soylentnews.org/article.pl?sid=25/12/08/1621249&from=rss) - Research and investment in nuclear fusion energy.

* [A Therapeutic HPV Vaccine Shrank Cervical Tumors in Mice](https://soylentnews.org/article.pl?sid=25/12/08/1614203&from=rss) - Progress in cancer treatment development.

* [Complex Life Started Nearly a Billion Years Earlier Than We Thought](https://soylentnews.org/article.pl?sid=25/12/08/0152232&from=rss) - A paradigm-shifting discovery in evolutionary biology.

## Social and Cultural Impact

* [Want to sway an election? Here’s how much fake online accounts cost](https://www.science.org/content/article/want-sway-election-here-s-how-much-fake-online-accounts-cost) - The role of online manipulation in modern elections.

* [Doom Studio id Software Forms 'Wall-To-Wall' Union](https://games.slashdot.org/story/25/12/12/2316202/doom-studio-id-software-forms-wall-to-wall-union?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Unity among game developers pushing for organized labor.

* [Man Dies of Rabies After Kidney Transplant From Donor Who Saved Kitten From Skunk](https://soylentnews.org/article.pl?sid=25/12/11/023241&from=rss) - A heart-wrenching story of a life-saving act ending in tragedy.

* [This German State Decides to Save €15 Million Each Year By Kicking Out Microsoft for Open Source](https://soylentnews.org/article.pl?sid=25/12/10/0211215&from=rss) - Embracing open-source technology for cost-saving measures.

* [Chattanooga's Municipal Fiber Network Has Delivered $5.3 Billion in Community Benefits](https://soylentnews.org/article.pl?sid=25/12/10/027248&from=rss) - Gigabit internet's impact on local communities.

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

* [2025-12-13, 21:18:01](https://news.ycombinator.com/item?id=46258163) - [Recovering Anthony Bourdain&apos;s (really) lost Li.st&apos;s](https://sandyuraz.com/blogs/bourdain/)
* [2025-12-13, 21:17:00](https://news.slashdot.org/story/25/12/13/2114221/firefox-survey-finds-only-16-feel-in-control-of-their-privacy-choices-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Survey Finds Only 16% Feel In Control of Their Privacy Choices Online](https://news.slashdot.org/story/25/12/13/2114221/firefox-survey-finds-only-16-feel-in-control-of-their-privacy-choices-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 20:58:50](https://news.ycombinator.com/item?id=46257986) - [Workday project at Washington University hits $266M](https://www.theregister.com/2025/12/12/washington_university_workday_costs_revealed/)
* [2025-12-13, 20:54:32](https://news.ycombinator.com/item?id=46257939) - [Purdue University Approves New AI Requirement for All Undergrads](https://www.forbes.com/sites/michaeltnietzel/2025/12/13/purdue-university-approves-new-ai-requirement-for-all-undergrads/)
* [2025-12-13, 20:48:09](https://news.ycombinator.com/item?id=46257871) - [Want to sway an election? Here’s how much fake online accounts cost](https://www.science.org/content/article/want-sway-election-here-s-how-much-fake-online-accounts-cost)
* [2025-12-13, 20:30:34](https://news.ycombinator.com/item?id=46257714) - [Why Twilio Segment moved from microservices back to a monolith](https://www.twilio.com/en-us/blog/developers/best-practices/goodbye-microservices)
* [2025-12-13, 20:19:53](https://news.ycombinator.com/item?id=46257607) - [I fed 24 years of my blog posts to a Markov model](https://susam.net/fed-24-years-of-posts-to-markov-model.html)
* [2025-12-13, 20:19:10](https://news.ycombinator.com/item?id=46257599) - [The Rise of Computer Games, Part I: Adventure](https://technicshistory.com/2025/12/13/the-rise-of-computer-games-part-i-adventure/)
* [2025-12-13, 20:04:26](https://news.ycombinator.com/item?id=46257486) - [Ask HN: How do you handle release notes for multiple audiences?](https://news.ycombinator.com/item?id=46257486)
* [2025-12-13, 20:00:03](https://lobste.rs/s/j90ulf/faster_double_string_conversion) - [Faster double-to-string conversion](https://vitaut.net/posts/2025/faster-dtoa/)
* [2025-12-13, 19:53:23](https://lobste.rs/s/ijztws/go_is_portable_until_it_isn_t) - [Go is portable, until it isn&apos;t](https://simpleobservability.com/blog/go-portable-until-isnt)
* [2025-12-13, 19:46:19](https://news.ycombinator.com/item?id=46257339) - [VPN location claims don&apos;t match real traffic exits](https://ipinfo.io/blog/vpn-location-mismatch-report)
* [2025-12-13, 19:40:53](https://lobste.rs/s/zlsrd2/what_is_build_system_anyway) - [what is a build system, anyway?](https://jyn.dev/what-is-a-build-system-anyway/)
* [2025-12-13, 19:23:00](https://soylentnews.org/article.pl?sid=25/12/11/0919226&amp;from=rss) - [Scientists Finally Uncover Why the World’s Most Common Heart Drug Causes Muscle Pain](https://soylentnews.org/article.pl?sid=25/12/11/0919226&amp;from=rss)
* [2025-12-13, 18:39:53](https://news.ycombinator.com/item?id=46256834) - [Are we stuck with the same Desktop UX forever? [video]](https://www.youtube.com/watch?v=1fZTOjd_bOQ)
* [2025-12-13, 18:34:00](https://hardware.slashdot.org/story/25/12/13/0041234/the-worlds-electric-car-sales-have-spiked-21-so-far-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The World&apos;s Electric Car Sales Have Spiked 21% So Far in 2025](https://hardware.slashdot.org/story/25/12/13/0041234/the-worlds-electric-car-sales-have-spiked-21-so-far-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 17:34:00](https://hardware.slashdot.org/story/25/12/13/0652226/how-a-23-year-old-in-1975-built-the-worlds-first-handheld-digital-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How a 23-Year-Old in 1975 Built the World&apos;s First Handheld Digital Camera](https://hardware.slashdot.org/story/25/12/13/0652226/how-a-23-year-old-in-1975-built-the-worlds-first-handheld-digital-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 17:28:35](https://lobste.rs/s/g535vs/using_nvi_as_minimal_fast_text_editor) - [Using nvi as a Minimal and Fast Text Editor](https://git.sr.ht/~r1w1s1/code-notes/blob/main/notes/NVI_Editor_Guide.txt)
* [2025-12-13, 17:19:16](https://lobste.rs/s/zfnnvr/editors_should_have_opt_for_less) - [Editors should have an opt-in for less assistance (2024)](https://www.da.vidbuchanan.co.uk/blog/annoying-text-editors.html)
* [2025-12-13, 17:01:32](https://lobste.rs/s/aoqsqp/i_tried_gleam_for_advent_code_i_get_hype) - [I Tried Gleam for Advent of Code, and I Get the Hype](https://blog.tymscar.com/posts/gleamaoc2025/)
* [2025-12-13, 17:01:25](https://news.ycombinator.com/item?id=46256002) - [EasyPost (YC S13) Is Hiring](https://www.easypost.com/careers)
* [2025-12-13, 17:00:14](https://news.ycombinator.com/item?id=46255991) - [I tried Gleam for Advent of Code](https://blog.tymscar.com/posts/gleamaoc2025/)
* [2025-12-13, 16:34:00](https://hardware.slashdot.org/story/25/12/13/0254253/more-of-americas-coal-fired-power-plants-cease-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More of America&apos;s Coal-Fired Power Plants Cease Operations](https://hardware.slashdot.org/story/25/12/13/0254253/more-of-americas-coal-fired-power-plants-cease-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 16:08:29](https://lobste.rs/s/49dt7g/indexed_reverse_polish_notation) - [Indexed Reverse Polish Notation, an Alternative to AST](https://burakemir.ch/post/indexed-rpn/)
* [2025-12-13, 15:37:16](https://news.ycombinator.com/item?id=46255285) - [Ask HN: How can I get better at using AI for programming?](https://news.ycombinator.com/item?id=46255285)
* [2025-12-13, 15:34:00](https://linux.slashdot.org/story/25/12/13/0347245/rust-in-linuxs-kernel-is-no-longer-experimental?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rust in Linux&apos;s Kernel &apos;is No Longer Experimental&apos;](https://linux.slashdot.org/story/25/12/13/0347245/rust-in-linuxs-kernel-is-no-longer-experimental?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 15:25:33](https://news.ycombinator.com/item?id=46255175) - [A Giant Ball Will Help This Man Survive a Year on an Iceberg](https://www.outsideonline.com/outdoor-adventure/exploration-survival/how-giant-ball-will-help-man-survive-year-iceberg/)
* [2025-12-13, 14:55:24](https://lobste.rs/s/yxjqu5/skills_vs_dynamic_mcp_loadouts) - [Skills vs Dynamic MCP Loadouts](https://lucumr.pocoo.org/2025/12/13/skills-vs-mcp/)
* [2025-12-13, 14:55:09](https://lobste.rs/s/lsjmah/rats_play_doom) - [Rats Play Doom](https://ratsplaydoom.com/)
* [2025-12-13, 14:37:00](https://soylentnews.org/article.pl?sid=25/12/11/0916209&amp;from=rss) - [Germany Might Have Just Saved Gas Engines From a European Ban](https://soylentnews.org/article.pl?sid=25/12/11/0916209&amp;from=rss)
* [2025-12-13, 13:29:17](https://lobste.rs/s/pjggcx/state_kernel_rust_experiment) - [The state of the kernel Rust experiment](https://lwn.net/SubscriberLink/1050174/63aa7da43214c3ce/)
* [2025-12-13, 13:21:50](https://lobste.rs/s/mrdocw/trying_manual_memory_management_go) - [Trying manual memory management in Go](https://www.youtube.com/watch?v=SHmJTgjldgg)
* [2025-12-13, 12:55:25](https://lobste.rs/s/vx1gr7/please_stop_using_middleware_protect) - [Please stop using middleware to protect your routes (2024)](https://pilcrowonpaper.com/blog/middleware-auth/)
* [2025-12-13, 12:25:31](https://lobste.rs/s/agc8ik/concrete_syntax_matters_actually) - [Concrete syntax matters, actually](https://www.youtube.com/watch?v=kQjrcSMYpaA)
* [2025-12-13, 10:23:56](https://lobste.rs/s/jgiub1/typeframe_px_88_portable_computing) - [The Typeframe PX-88 Portable Computing System](https://www.typeframe.net/)
* [2025-12-13, 10:01:45](https://lobste.rs/s/kchcqe/can_i_use_https_rrs) - [Can I use HTTPS RRs?](https://www.netmeister.org/blog/https-caniuse.html)
* [2025-12-13, 10:00:00](https://hardware.slashdot.org/story/25/12/12/239237/germany-covers-nearly-56-percent-of-2025-electricity-use-with-renewables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Germany Covers Nearly 56 Percent of 2025 Electricity Use With Renewables](https://hardware.slashdot.org/story/25/12/12/239237/germany-covers-nearly-56-percent-of-2025-electricity-use-with-renewables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 09:52:00](https://soylentnews.org/article.pl?sid=25/12/11/0910257&amp;from=rss) - [Space Shuttle Lessons: Backtracks Can Create Breakthroughs](https://soylentnews.org/article.pl?sid=25/12/11/0910257&amp;from=rss)
* [2025-12-13, 08:06:41](https://lobste.rs/s/jkwpjw/what_s_point_lightweight_code_with_modern) - [What&apos;s the point of lightweight code with modern computers?](https://liam-on-linux.dreamwidth.org/97426.html)
* [2025-12-13, 07:19:31](https://lobste.rs/s/klxjty/mostly_complete_unicode_spiral_2022) - [The (Mostly) Complete Unicode Spiral (2022)](https://shkspr.mobi/blog/2022/07/the-mostly-complete-unicode-spiral/)
* [2025-12-13, 07:00:00](https://yro.slashdot.org/story/25/12/12/2341230/chinese-whistleblower-living-in-us-is-being-hunted-by-beijing-with-us-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Whistleblower Living In US Is Being Hunted By Beijing With US Tech](https://yro.slashdot.org/story/25/12/12/2341230/chinese-whistleblower-living-in-us-is-being-hunted-by-beijing-with-us-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 06:55:58](https://lobste.rs/s/npbaul/crypto_fido_security_tokens) - [Crypto, FIDO and Security Tokens](https://docs.google.com/spreadsheets/d/1XlwmreiBkt82F4HG965Yp9ncULkgnFpNyfe7WAAtYPk/edit?gid=0#gid=0)
* [2025-12-13, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss) - [USA Wants Your Social Media History If You Visit](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss)
* [2025-12-13, 04:10:48](https://lobste.rs/s/dndrsh/indices_point_between_elements_2015) - [Indices point between elements (2015)](https://blog.nelhage.com/2015/08/indices-point-between-elements/)
* [2025-12-13, 03:30:00](https://yro.slashdot.org/story/25/12/12/2254245/ukrainians-sue-us-chip-firms-for-powering-russian-drones-missiles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ukrainians Sue US Chip Firms For Powering Russian Drones, Missiles](https://yro.slashdot.org/story/25/12/12/2254245/ukrainians-sue-us-chip-firms-for-powering-russian-drones-missiles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 03:06:53](https://news.ycombinator.com/item?id=46251620) - [A Lisp Interpreter Implemented in Conway&apos;s Game of Life (2021)](https://woodrush.github.io/blog/posts/2022-01-12-lisp-in-life.html)
* [2025-12-13, 03:00:36](https://lobste.rs/s/vpdzua/coming_need_for_formal_specification) - [The Coming Need for Formal Specification](https://benjamincongdon.me/blog/2025/12/12/The-Coming-Need-for-Formal-Specification/)
* [2025-12-13, 02:20:00](https://news.slashdot.org/story/25/12/12/234225/arizona-city-rejects-data-center-after-lobbying-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arizona City Rejects Data Center After Lobbying Push](https://news.slashdot.org/story/25/12/12/234225/arizona-city-rejects-data-center-after-lobbying-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 02:06:05](https://lobste.rs/s/zhfh4t/vacuum_is_lie_about_your_indexes) - [VACUUM Is a Lie: About Your Indexes](https://boringsql.com/posts/vacuum-is-lie/)
* [2025-12-13, 01:40:00](https://hardware.slashdot.org/story/25/12/12/2258200/framework-raises-ddr5-memory-prices-by-50-for-diy-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Framework Raises DDR5 Memory Prices By 50% For DIY Laptops](https://hardware.slashdot.org/story/25/12/12/2258200/framework-raises-ddr5-memory-prices-by-50-for-diy-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 01:20:00](https://games.slashdot.org/story/25/12/12/2316202/doom-studio-id-software-forms-wall-to-wall-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Doom Studio id Software Forms &apos;Wall-To-Wall&apos; Union](https://games.slashdot.org/story/25/12/12/2316202/doom-studio-id-software-forms-wall-to-wall-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 01:00:00](https://yro.slashdot.org/story/25/12/12/2148210/us-to-mandate-ai-vendors-measure-political-bias-for-federal-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US To Mandate AI Vendors Measure Political Bias For Federal Sales](https://yro.slashdot.org/story/25/12/12/2148210/us-to-mandate-ai-vendors-measure-political-bias-for-federal-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss) - [Man Dies of Rabies After Kidney Transplant From Donor Who Saved Kitten From Skunk](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss)
* [2025-12-13, 00:20:00](https://it.slashdot.org/story/25/12/12/2140258/russian-hackers-debut-simple-ransomware-service-but-store-keys-in-plain-text?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Hackers Debut Simple Ransomware Service, But Store Keys In Plain Text](https://it.slashdot.org/story/25/12/12/2140258/russian-hackers-debut-simple-ransomware-service-but-store-keys-in-plain-text?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 23:40:00](https://tech.slashdot.org/story/25/12/12/2136246/bill-gates-daughter-secures-30-million-for-ai-app-built-in-stanford-dorm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bill Gates&apos; Daughter Secures $30 Million For AI App Built In Stanford Dorm](https://tech.slashdot.org/story/25/12/12/2136246/bill-gates-daughter-secures-30-million-for-ai-app-built-in-stanford-dorm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 23:00:00](https://tech.slashdot.org/story/25/12/12/2125205/google-translate-expands-live-translation-to-all-earbuds-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Translate Expands Live Translation To All Earbuds On Android](https://tech.slashdot.org/story/25/12/12/2125205/google-translate-expands-live-translation-to-all-earbuds-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 20:57:34](https://news.ycombinator.com/item?id=46248859) - [GNU Unifont](https://unifoundry.com/unifont/index.html)
* [2025-12-12, 19:36:00](https://soylentnews.org/article.pl?sid=25/12/11/0157235&amp;from=rss) - [ICEBlock App Sues Trump Administration for Censorship and &apos;Unlawful Threats&apos;](https://soylentnews.org/article.pl?sid=25/12/11/0157235&amp;from=rss)
* [2025-12-12, 18:21:22](https://lobste.rs/s/23lzm2/50_years_proof_assistants) - [50 years of proof assistants](https://lawrencecpaulson.github.io//2025/12/05/History_of_Proof_Assistants.html)
* [2025-12-12, 18:12:05](https://lobste.rs/s/aeu3bf/yocaml_framework_used_describe_static) - [YOCaml a framework used to describe static site generator](https://yocaml.github.io/tutorial/index.html)
* [2025-12-12, 14:54:00](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss) - [Ubuntu to Offer AMD ROCm Packages for AI Processing](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss)
* [2025-12-12, 13:37:05](https://lobste.rs/s/ytelgx/rethinking_sudo_with_object) - [Rethinking sudo with object capabilities](https://ariadne.space/2025/12/12/rethinking-sudo-with-object-capabilities.html)
* [2025-12-12, 10:46:40](https://lobste.rs/s/zi1xf6/building_smaller_docker_images_faster) - [Building smaller Docker images faster](https://sgt.hootr.club/blog/docker-protips/)
* [2025-12-12, 10:07:00](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss) - [Porsche Panic in Russia as Pricey Status Symbols Forget How to Car](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss)
* [2025-12-12, 05:22:00](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss) - [Pebble Index 01 Arrives as a Private Open Source Voice Capture Ring](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss)
* [2025-12-12, 00:39:00](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss) - [Russia Says It Might Build its Own Linux Community After Removal of Several Kernel Maintainers](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss)
* [2025-12-11, 19:56:00](https://soylentnews.org/article.pl?sid=25/12/10/2248258&amp;from=rss) - [ER Doctors Are Sounding the Alarm on a Fast-Growing Cannabis Illness](https://soylentnews.org/article.pl?sid=25/12/10/2248258&amp;from=rss)
* [2025-12-11, 19:28:40](https://news.ycombinator.com/item?id=46236001) - [What is the nicest thing a stranger has ever done for you?](https://louplummer.lol/nice-stranger/)
* [2025-12-11, 15:07:00](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss) - [AI Favors Texts Written by Other AIs, Even When They&apos;re Worse Than Human Ones](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss)
* [2025-12-11, 10:25:00](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss) - [Proton Launches Encrypted Sheets as a Privacy-First Alternative to Google, Microsoft Excel](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss)
* [2025-12-11, 05:48:00](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss) - [This German State Decides to Save €15 Million Each Year By Kicking Out Microsoft for Open Source](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss)
* [2025-12-11, 00:52:00](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss) - [Chattanooga&apos;s Municipal Fiber Network Has Delivered $5.3 Billion in Community Benefits](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss)
* [2025-12-10, 21:08:41](https://news.ycombinator.com/item?id=46223882) - [Useful patterns for building HTML tools](https://simonwillison.net/2025/Dec/10/html-tools/)
* [2025-12-10, 20:11:00](https://soylentnews.org/article.pl?sid=25/12/10/023246&amp;from=rss) - [Planned Satellite Constellations May Swamp Future Orbiting Telescopes](https://soylentnews.org/article.pl?sid=25/12/10/023246&amp;from=rss)
* [2025-12-10, 19:13:49](https://news.ycombinator.com/item?id=46222162) - [Researchers seeking better measures of cognitive fatigue](https://www.nature.com/articles/d41586-025-03974-w)
* [2025-12-10, 15:25:00](https://soylentnews.org/article.pl?sid=25/12/08/1621249&amp;from=rss) - [Germany Bets Billions on Nuclear Fusion for Energy Future](https://soylentnews.org/article.pl?sid=25/12/08/1621249&amp;from=rss)
* [2025-12-10, 10:43:00](https://soylentnews.org/article.pl?sid=25/12/08/1614203&amp;from=rss) - [A Therapeutic HPV Vaccine Shrank Cervical Tumors in Mice](https://soylentnews.org/article.pl?sid=25/12/08/1614203&amp;from=rss)
* [2025-12-10, 05:52:00](https://soylentnews.org/article.pl?sid=25/12/08/1611257&amp;from=rss) - [Zig Quits GitHub, Says Microsoft&apos;s AI Obsession Has Ruined the Service](https://soylentnews.org/article.pl?sid=25/12/08/1611257&amp;from=rss)
* [2025-12-10, 01:09:00](https://soylentnews.org/article.pl?sid=25/12/08/0456233&amp;from=rss) - [This Cellular Trick Helps Cancer Spread, but Could Also Stop It](https://soylentnews.org/article.pl?sid=25/12/08/0456233&amp;from=rss)
* [2025-12-09, 21:10:52](https://news.ycombinator.com/item?id=46210705) - [Go Proposal: Secret Mode](https://antonz.org/accepted/runtime-secret/)
* [2025-12-09, 20:23:00](https://soylentnews.org/article.pl?sid=25/12/08/0455213&amp;from=rss) - [Samsung&apos;s First Tri-Fold Phone is Here: Everything You Need to Know](https://soylentnews.org/article.pl?sid=25/12/08/0455213&amp;from=rss)
* [2025-12-09, 20:16:15](https://news.ycombinator.com/item?id=46210044) - [Beautiful Abelian Sandpiles](https://eavan.blog/posts/beautiful-sandpiles.html)
* [2025-12-09, 15:39:00](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss) - [Complex Life Started Nearly a Billion Years Earlier Than We Thought](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss)
* [2025-12-09, 10:51:00](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss) - [US Wants Laws to Force App Store Age Checks, Despite Apple&apos;s Existing Protections](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss)
* [2025-12-09, 06:03:00](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss) - [Common Desktop Environment \&quot;CDE\&quot; 2.5.3 Released After Two Years](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss)
* [2025-12-09, 01:21:00](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss) - [Improved Truncated Wigner Approximation Makes Quantum Calcs on Classical Computers More Accessible](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss)
