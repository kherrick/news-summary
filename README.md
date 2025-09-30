# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI Developments

* [Gavin Newsom Signs First-In-Nation AI Safety Law](https://slashdot.org/story/25/09/29/2054225/gavin-newsom-signs-first-in-nation-ai-safety-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A pioneering legislation by California focuses on AI safety and transparency measures.

* [ChatGPT Adds 'Instant Checkout' To Shop Directly In Chat](https://news.slashdot.org/story/25/09/29/2119248/chatgpt-adds-instant-checkout-to-shop-directly-in-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - OpenAI integrates e-commerce capabilities into ChatGPT.

* [OpenAI's New Sora Video Generator To Require Copyright Holders To Opt Out](https://slashdot.org/story/25/09/29/1959236/openais-new-sora-video-generator-to-require-copyright-holders-to-opt-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - OpenAI's new tool challenges copyrights by requiring explicit opt-out measures.

* [AI tools I wish existed](https://sharif.io/28-ideas-2025) - A wishlist for innovative AI tools in development.

## Climate and Environmental Concerns

* [Climate Change Spurs Rare Hybrid Between Blue Jay and Green Jay](https://science.slashdot.org/story/25/09/30/000219/climate-change-spurs-rare-hybrid-between-blue-jay-and-green-jay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Climate change impacts spark unprecedented wildlife hybrids.

* [Environmental Damage is Putting European Way of Life at Risk, Says Report](https://news.slashdot.org/story/25/09/29/191252/environmental-damage-is-putting-european-way-of-life-at-risk-says-report?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A major report warns about the escalating threats of environmental destruction on human lifestyle.

## Science and Innovation

* [Physicists Nearly Double Speed of Superconducting Qubit Readout in Quantum Computers](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss) - Advances in quantum computing technology set new speed records.

* [Brownian motion: Modeling random fields over arbitrary geometries](https://stopthrowingrocks.github.io/random-fields/) - An exploration of random fields through advanced modeling techniques.

* [Microplastics Could Be Weakening Your Bones, Research Suggests](https://science.slashdot.org/story/25/09/29/1818259/microplastics-could-be-weakening-your-bones-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - New research examines the potential health impacts of microplastics.

## Global Crises and Policies

* [Afghanistan Hit By Nationwide Internet Blackout As Taliban Cuts Fiber Optic Cables](https://mobile.slashdot.org/story/25/09/29/2059245/afghanistan-hit-by-nationwide-internet-blackout-as-taliban-cuts-fiber-optic-cables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Taliban actions halt internet access throughout Afghanistan.

* [US Intel Officials “Concerned” China Will Soon Master Reusable Launch](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss) - Rising advances in China's space technology cause international anxiety.

## Unconventional and Intriguing Innovations

* [Bad Apple but it's played inside Super Mario Bros](https://tasvideos.org/8991S) - A fascinating integration of visual art inside classic video games.

* [Code golfing a tiny demo using maths and a pinch of insanity](https://blog.pkh.me/p/45-code-golfing-a-tiny-demo-using-maths-and-a-pinch-of-insanity.html) - A creative example of minimalist coding and mathematical ingenuity.

* [The Gameboy emulator that runs everywhere (Terminal, Web, Desktop)](https://github.com/raphamorim/gameboy) - Innovation in emulation technology presents multi-platform support.

## Public Figures and Controversies

* [Reddit Mods Sued By YouTuber Ethan Klein Fight Efforts To Unmask Them](https://yro.slashdot.org/story/25/09/29/2350234/reddit-mods-sued-by-youtuber-ethan-klein-fight-efforts-to-unmask-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A legal battle pits privacy against YouTube influence.

* [Buyers of RadioShack Accused of Running $112 Million Ponzi Scheme](https://yro.slashdot.org/story/25/09/29/2112250/buyers-of-radioshack-accused-of-running-112-million-ponzi-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Fraud allegations tie RadioShack's purchase to Ponzi financing.

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

* [2025-09-30, 07:00:00](https://science.slashdot.org/story/25/09/30/008214/senators-try-to-halt-shuttle-move-saying-little-evidence-of-public-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Senators Try To Halt Shuttle Move, Saying &apos;Little Evidence&apos; of Public Demand](https://science.slashdot.org/story/25/09/30/008214/senators-try-to-halt-shuttle-move-saying-little-evidence-of-public-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 06:23:31](https://news.ycombinator.com/item?id=45422514) - [Geolocation and Starlink](https://www.potaroo.net/ispcol/2025-09/starlinkgeo.html)
* [2025-09-30, 05:41:29](https://lobste.rs/s/i7mmpl/brownian_motion_modeling_random_fields) - [Brownian motion: Modeling random fields over arbitrary geometries](https://stopthrowingrocks.github.io/random-fields/)
* [2025-09-30, 05:38:52](https://lobste.rs/s/t3t3zr/we_move_as_1) - [we move as 1](https://stopthrowingrocks.github.io/wma1/)
* [2025-09-30, 05:27:06](https://lobste.rs/s/06ef3a/maml_new_configuration_language_similar) - [MAML - a new configuration language (similar to JSON, YAML, and TOML)](https://maml.dev/)
* [2025-09-30, 05:18:55](https://lobste.rs/s/mhczmh/pidgin_3_0_experimental_4_2_93_0_has_been) - [Pidgin 3.0 Experimental 4 (2.93.0) has been released](https://discourse.imfreedom.org/t/pidgin-3-0-experimental-4-2-93-0-has-been-released/)
* [2025-09-30, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss) - [Think Twice Before Abandoning X11. Wayland Breaks Everything!](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss)
* [2025-09-30, 04:14:13](https://news.ycombinator.com/item?id=45421812) - [AI tools I wish existed](https://sharif.io/28-ideas-2025)
* [2025-09-30, 03:54:35](https://lobste.rs/s/keyec7/subtext_retrospective) - [Subtext Retrospective](https://www.subtext-lang.org/retrospective.html)
* [2025-09-30, 03:30:00](https://science.slashdot.org/story/25/09/30/000219/climate-change-spurs-rare-hybrid-between-blue-jay-and-green-jay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Climate Change Spurs Rare Hybrid Between Blue Jay and Green Jay](https://science.slashdot.org/story/25/09/30/000219/climate-change-spurs-rare-hybrid-between-blue-jay-and-green-jay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 02:26:39](https://news.ycombinator.com/item?id=45421302) - [Show HN: Devbox – Containers for better dev environments](https://devbox.ar0.eu/)
* [2025-09-30, 02:20:00](https://yro.slashdot.org/story/25/09/29/2350234/reddit-mods-sued-by-youtuber-ethan-klein-fight-efforts-to-unmask-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Mods Sued By YouTuber Ethan Klein Fight Efforts To Unmask Them](https://yro.slashdot.org/story/25/09/29/2350234/reddit-mods-sued-by-youtuber-ethan-klein-fight-efforts-to-unmask-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 02:13:00](https://news.ycombinator.com/item?id=45421221) - [Show HN: Cap&apos;n-rs – Rust implementation of Cloudflare&apos;s Cap&apos;n Web protocol](https://github.com/currentspace/capn-rs)
* [2025-09-30, 01:46:02](https://news.ycombinator.com/item?id=45421067) - [Awakening Bell](https://awakeningbell.org/)
* [2025-09-30, 01:40:00](https://yro.slashdot.org/story/25/09/29/2344210/streameast-reclaims-domain-name-previously-seized-by-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Streameast Reclaims Domain Name Previously Seized By US Government](https://yro.slashdot.org/story/25/09/29/2344210/streameast-reclaims-domain-name-previously-seized-by-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 01:00:00](https://news.slashdot.org/story/25/09/29/2119248/chatgpt-adds-instant-checkout-to-shop-directly-in-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Adds &apos;Instant Checkout&apos; To Shop Directly In Chat](https://news.slashdot.org/story/25/09/29/2119248/chatgpt-adds-instant-checkout-to-shop-directly-in-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 00:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss) - [EA is Reportedly About to be Sold in a Record-Setting $50 Billion Buyout](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss)
* [2025-09-30, 00:20:00](https://yro.slashdot.org/story/25/09/29/2112250/buyers-of-radioshack-accused-of-running-112-million-ponzi-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Buyers of RadioShack Accused of Running $112 Million Ponzi Scheme](https://yro.slashdot.org/story/25/09/29/2112250/buyers-of-radioshack-accused-of-running-112-million-ponzi-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 23:56:31](https://news.ycombinator.com/item?id=45420327) - [FAA is granting Boeing “limited delegation” to certify airworthiness](https://www.theregister.com/2025/09/29/faa_decides_it_trusts_boeing/)
* [2025-09-29, 23:55:58](https://lobste.rs/s/82vmho/how_much_do_you_really_know_about_media) - [How much do you really know about media queries?](https://frontendmasters.com/blog/learn-media-queries/)
* [2025-09-29, 23:40:00](https://yro.slashdot.org/story/25/09/29/215235/fcc-mistakenly-leaks-confidential-iphone-16e-schematics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Mistakenly Leaks Confidential iPhone 16e Schematics](https://yro.slashdot.org/story/25/09/29/215235/fcc-mistakenly-leaks-confidential-iphone-16e-schematics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 23:32:10](https://news.ycombinator.com/item?id=45420173) - [How to create an OS from scratch](https://github.com/cfenollosa/os-tutorial)
* [2025-09-29, 23:12:36](https://news.ycombinator.com/item?id=45420001) - [Safe zero-copy operations in C#](https://ssg.dev/safe-zero-copy-operations-in-c/)
* [2025-09-29, 23:00:00](https://mobile.slashdot.org/story/25/09/29/2059245/afghanistan-hit-by-nationwide-internet-blackout-as-taliban-cuts-fiber-optic-cables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Afghanistan Hit By Nationwide Internet Blackout As Taliban Cuts Fiber Optic Cables](https://mobile.slashdot.org/story/25/09/29/2059245/afghanistan-hit-by-nationwide-internet-blackout-as-taliban-cuts-fiber-optic-cables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 22:20:00](https://slashdot.org/story/25/09/29/2054225/gavin-newsom-signs-first-in-nation-ai-safety-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gavin Newsom Signs First-In-Nation AI Safety Law](https://slashdot.org/story/25/09/29/2054225/gavin-newsom-signs-first-in-nation-ai-safety-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 21:41:00](https://tech.slashdot.org/story/25/09/29/2015257/open-source-android-repository-f-droid-says-googles-new-rules-will-shut-it-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Open Source Android Repository F-Droid Says Google&apos;s New Rules Will Shut It Down](https://tech.slashdot.org/story/25/09/29/2015257/open-source-android-repository-f-droid-says-googles-new-rules-will-shut-it-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 21:17:16](https://news.ycombinator.com/item?id=45418875) - [Jax: Fast Combinations Calculation](https://github.com/phoenicyan/combinadics)
* [2025-09-29, 21:16:41](https://lobste.rs/s/t88zhp/gameboy_emulator_runs_everywhere) - [The Gameboy emulator that runs everywhere (Terminal, Web, Desktop)](https://github.com/raphamorim/gameboy)
* [2025-09-29, 21:00:00](https://slashdot.org/story/25/09/29/1959236/openais-new-sora-video-generator-to-require-copyright-holders-to-opt-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s New Sora Video Generator To Require Copyright Holders To Opt Out](https://slashdot.org/story/25/09/29/1959236/openais-new-sora-video-generator-to-require-copyright-holders-to-opt-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 20:58:11](https://news.ycombinator.com/item?id=45418675) - [Ask HN: What are you working on? (September 2025)](https://news.ycombinator.com/item?id=45418675)
* [2025-09-29, 20:33:14](https://news.ycombinator.com/item?id=45418428) - [California governor signs AI transparency bill into law](https://www.gov.ca.gov/2025/09/29/governor-newsom-signs-sb-53-advancing-californias-world-leading-artificial-intelligence-industry/)
* [2025-09-29, 20:20:00](https://news.slashdot.org/story/25/09/29/1945254/uk-government-to-guarantee-2-billion-jaguar-land-rover-loan-after-cyber-shutdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Government To Guarantee $2 Billion Jaguar Land Rover Loan After Cyber Shutdown](https://news.slashdot.org/story/25/09/29/1945254/uk-government-to-guarantee-2-billion-jaguar-land-rover-loan-after-cyber-shutdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 20:19:08](https://news.ycombinator.com/item?id=45418261) - [iRobot Founder: Don&apos;t Believe the AI and Robotics Hype](https://crazystupidtech.com/2025/09/29/irobot-founder-dont-believe-the-ai-robotics-hype/)
* [2025-09-29, 19:46:00](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss) - [New World Screwworm Parasite Detected in Northern Mexico Near US Border](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss)
* [2025-09-29, 19:40:00](https://news.slashdot.org/story/25/09/29/1934243/daylight-savings-time-is-so-bad-its-messing-with-our-view-of-the-cosmos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Daylight Savings Time Is So Bad, It&apos;s Messing With Our View of the Cosmos](https://news.slashdot.org/story/25/09/29/1934243/daylight-savings-time-is-so-bad-its-messing-with-our-view-of-the-cosmos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 19:16:40](https://news.ycombinator.com/item?id=45417637) - [Don&apos;t Become a Scientist (1999)](https://yangxiao.cs.ua.edu/Don%27t%20Become%20a%20Scientist!.htm)
* [2025-09-29, 19:01:00](https://news.slashdot.org/story/25/09/29/191252/environmental-damage-is-putting-european-way-of-life-at-risk-says-report?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Environmental Damage is Putting European Way of Life at Risk, Says Report](https://news.slashdot.org/story/25/09/29/191252/environmental-damage-is-putting-european-way-of-life-at-risk-says-report?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 18:59:12](https://lobste.rs/s/nd2kgt/std_flip) - [std::flip](https://morwenn.github.io//c++/2025/09/25/TSB004-std-flip.html)
* [2025-09-29, 18:36:36](https://lobste.rs/s/w8sx2z/io_uring_is_not_event_system_2021) - [io_uring is not an event system (2021)](https://despairlabs.com/blog/posts/2021-06-16-io-uring-is-not-an-event-system/)
* [2025-09-29, 18:18:00](https://science.slashdot.org/story/25/09/29/1818259/microplastics-could-be-weakening-your-bones-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microplastics Could Be Weakening Your Bones, Research Suggests](https://science.slashdot.org/story/25/09/29/1818259/microplastics-could-be-weakening-your-bones-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 18:01:46](https://lobste.rs/s/580mjo/introducing_tdom_html_templating_with_t) - [Introducing tdom: HTML templating with t‑strings](https://davepeck.org/2025/09/22/introducing-tdom-html-templating-with-python-t-strings/)
* [2025-09-29, 17:57:55](https://lobste.rs/s/ljvnlu/we_built_our_coding_agent_for_slack) - [We built our coding agent for Slack instead of the terminal](https://www.mintlify.com/blog/we-built-our-coding-agent-for-slack)
* [2025-09-29, 17:37:52](https://lobste.rs/s/eayslm/adding_new_instruction_risc_v_backend) - [Adding a new instruction to RISC-V backend in LLVM](https://blog.gustavoleite.me/llvm-riscv-instruction)
* [2025-09-29, 17:35:26](https://lobste.rs/s/2ofre3/can_ligo_detect_daylight_savings_time) - [Can LIGO Detect Daylight Savings Time?](https://arxiv.org/abs/2509.11849)
* [2025-09-29, 17:12:13](https://news.ycombinator.com/item?id=45416228) - [Claude Code 2.0](https://www.npmjs.com/package/@anthropic-ai/claude-code)
* [2025-09-29, 17:03:28](https://lobste.rs/s/gtnuao/introducing_claude_sonnet_4_5) - [Introducing Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5)
* [2025-09-29, 17:00:42](https://news.ycombinator.com/item?id=45416080) - [Instant Checkout and the Agentic Commerce Protocol](https://openai.com/index/buy-it-in-chatgpt/)
* [2025-09-29, 16:52:59](https://news.ycombinator.com/item?id=45415962) - [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5)
* [2025-09-29, 16:12:30](https://news.ycombinator.com/item?id=45415510) - [ML on Apple ][+](https://mdcramer.github.io/apple-2-blog/k-means/)
* [2025-09-29, 16:07:52](https://lobste.rs/s/7kspja/subtleties_sqlite_indexes) - [Subtleties of SQLite Indexes](https://emschwartz.me/subtleties-of-sqlite-indexes/)
* [2025-09-29, 15:54:42](https://news.ycombinator.com/item?id=45415332) - [Subtleties of SQLite Indexes](https://emschwartz.me/subtleties-of-sqlite-indexes/)
* [2025-09-29, 15:50:13](https://lobste.rs/s/adqhqf/unix99_unix_for_ti_99_4a) - [UNIX99: UNIX for the TI-99/4A](https://www.osnews.com/story/143436/unix99-unix-for-the-ti-99-4a/)
* [2025-09-29, 15:42:46](https://news.ycombinator.com/item?id=45415207) - [Loadmo.re: design inspiration for unconventional web](https://loadmo.re)
* [2025-09-29, 15:25:26](https://lobste.rs/s/rrwwar/announcing_software_you_can_love_2026) - [Announcing Software You Can Love 2026](https://mattnite.net/blog/sycl-2026-announcement/)
* [2025-09-29, 15:20:11](https://news.ycombinator.com/item?id=45414933) - [John Jumper: AI is revolutionizing scientific discovery [video]](https://www.youtube.com/watch?v=2Yguz5U-Nic)
* [2025-09-29, 15:02:00](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss) - [8,000 years of Human Activities Aave Caused Wild Animals to Shrink and Domestic Animals to Grow](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss)
* [2025-09-29, 14:22:39](https://news.ycombinator.com/item?id=45414215) - [Vertical Solar Panels Are Out Standing](https://hackaday.com/2025/09/25/vertical-solar-panels-are-out-standing/)
* [2025-09-29, 13:34:58](https://news.ycombinator.com/item?id=45413588) - [Code golfing a tiny demo using maths and a pinch of insanity](https://blog.pkh.me/p/45-code-golfing-a-tiny-demo-using-maths-and-a-pinch-of-insanity.html)
* [2025-09-29, 13:34:43](https://lobste.rs/s/qzcqyx/code_golfing_tiny_demo_using_maths_pinch) - [Code golfing a tiny demo using maths and a pinch of insanity](https://blog.pkh.me/p/45-code-golfing-a-tiny-demo-using-maths-and-a-pinch-of-insanity.html)
* [2025-09-29, 13:29:55](https://news.ycombinator.com/item?id=45413525) - [A SQL Heuristic: ORs Are Expensive](https://ethanseal.com/articles/ors-are-expensive)
* [2025-09-29, 12:38:40](https://lobste.rs/s/wf4bnp/what_s_new_postgresql_18_developer_s) - [What&apos;s New in PostgreSQL 18 - a Developer&apos;s Perspective](https://www.bytebase.com/blog/what-is-new-in-postgres-18-for-developer/)
* [2025-09-29, 12:36:02](https://lobste.rs/s/oiiocr/go_proposal_architecture_specific_simd) - [Go Proposal: architecture-specific SIMD intrinsics](https://github.com/golang/go/issues/73787)
* [2025-09-29, 11:35:01](https://lobste.rs/s/ayncvk/ai_is_writing_90_code) - [AI is writing 90% of the code](https://lucumr.pocoo.org/2025/9/29/90-percent/)
* [2025-09-29, 10:17:00](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss) - [Physicists Nearly Double Speed of Superconducting Qubit Readout in Quantum Computers](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss)
* [2025-09-29, 09:34:16](https://news.ycombinator.com/item?id=45411831) - [Bad Apple but it&apos;s played inside Super Mario Bros](https://tasvideos.org/8991S)
* [2025-09-29, 06:42:58](https://lobste.rs/s/x1sdu5/f_droid_google_s_developer_registration) - [F-Droid and Google&apos;s Developer Registration Decree](https://f-droid.org/2025/09/29/google-developer-registration-decree.html)
* [2025-09-29, 05:59:35](https://lobste.rs/s/jbaxru/comparing_rust_carbon) - [Comparing Rust to Carbon](https://lwn.net/Articles/1036912/)
* [2025-09-29, 05:35:00](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss) - [The Cyber Vulnerabilities Lurking in CRM Systems](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss)
* [2025-09-29, 04:07:21](https://lobste.rs/s/olfuo0/just_let_me_select_text) - [Just Let Me Select Text](https://aartaka.me/select-text.html)
* [2025-09-29, 00:49:00](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss) - [This Experimental Computer Chip Reuses Energy](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss)
* [2025-09-28, 21:50:45](https://lobste.rs/s/dkjswm/stupid_jj_tricks) - [stupid jj tricks](https://andre.arko.net/2025/09/28/stupid-jj-tricks/)
* [2025-09-28, 20:01:00](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss) - [US Uncovers 100,000 SIM Cards That Could Have “Shut Down” NYC Cell Network](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss)
* [2025-09-28, 15:15:00](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss) - [Physics-Informed AI Learns Local Rules Behind Flocking and Collective Motion Behaviors](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss)
* [2025-09-28, 10:29:00](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss) - [US Intel Officials “Concerned” China Will Soon Master Reusable Launch](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss)
* [2025-09-28, 05:44:00](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss) - [Consumer Reports Slams Microsoft for Windows 10 Mess, Urges Extension of Free Updates](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss)
* [2025-09-28, 00:56:00](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss) - [Airlines Seen as Vulnerable After Confirmed Ransomware Cyberattack, Suspect Arrested](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss)
* [2025-09-27, 20:13:00](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss) - [How AI is Subsidized by Your Utility Bills and Drives Copper Prices](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss)
* [2025-09-27, 15:27:00](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss) - [Cloudflare DDoSed Itself With React UseEffect Hook Blunder](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss)
* [2025-09-27, 10:41:00](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss) - [Magma Displacement Triggered Tens of Thousands of Earthquakes, Santorini Swarm Study Finds](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss)
* [2025-09-27, 05:56:00](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss) - [China&apos;s Latest GPU Arrives With Claims of CUDA Compatibility and RT Support](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss)
* [2025-09-27, 01:06:00](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss) - [How India&apos;s Unplanned Hydropower Dams and Tunnels Are Disrupting Himalayan Landscapes](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss)
* [2025-09-26, 22:02:38](https://news.ycombinator.com/item?id=45391467) - [Visualizing Automorphisms of S6](https://travisdoesmath.github.io/s6/)
* [2025-09-26, 20:20:00](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss) - [American Kids Can’t Read or Do Math Anymore](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss)
* [2025-09-26, 15:43:50](https://news.ycombinator.com/item?id=45387791) - [Spending time with the material](https://www.robinsloan.com/lab/actually-readable/)
* [2025-09-26, 15:35:00](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss) - [More Than Half of World&apos;s Coastal Settlements Retreating From Rising Seas, Study Shows](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss)
* [2025-09-26, 10:53:00](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss) - [Huntington&apos;s Disease Successfully Treated for First Time](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss)
* [2025-09-26, 10:18:24](https://news.ycombinator.com/item?id=45384828) - [Redisearch New Vector Quantization](https://redis.io/blog/tech-dive-comprehensive-compression-leveraging-quantization-and-dimensionality-reduction/)
* [2025-09-26, 09:27:08](https://news.ycombinator.com/item?id=45384521) - [Ahab&apos;s Arithmetic: The Mathematics of Moby-Dick (2021)](https://scholarship.claremont.edu/jhm/vol11/iss1/3/)
* [2025-09-26, 06:15:26](https://news.ycombinator.com/item?id=45383284) - [Managing Dotfiles with Make](https://www.matheusmoreira.com/articles/managing-dotfiles-with-make)
* [2025-09-26, 06:11:00](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss) - [Facebook Data Reveal the Devastating Real-World Harms Caused by the Spread of Misinformation](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss)
* [2025-09-26, 03:28:05](https://news.ycombinator.com/item?id=45382300) - [Voronoi map generation in Civilization VII](https://civilization.2k.com/civ-vii/from-the-devs/map-generation/)
* [2025-09-26, 01:27:00](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss) - [China Starts Producing World-First Non-Binary AI Chips for Aviation, Manufacturing](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss)
