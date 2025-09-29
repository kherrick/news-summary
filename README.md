# [News Summary](https://kherrick.github.io/news-summary/)

## Open Source and Software Development

* [Open Source Android Repository F-Droid Says Google's New Rules Will Shut It Down](https://tech.slashdot.org/story/25/09/29/2015257/open-source-android-repository-f-droid-says-googles-new-rules-will-shut-it-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - F-Droid, an open-source Android repository, warns Google's new regulations could lead to its shutdown, raising concerns over open-source software sustainability.

* [Subtleties of SQLite Indexes](https://emschwartz.me/subtleties-of-sqlite-indexes/) - A deep dive into the lesser-known quirks and optimizations of SQLite indexes, offering essential tips for developers striving for database efficiency.

* [Jax: Fast Combinations Calculation](https://github.com/phoenicyan/combinadics) - Introducing a Python library leveraging Jax for high-performance combinations calculations, particularly in computational-heavy research scenarios.

## Artificial Intelligence and its Impacts

* [OpenAI's New Sora Video Generator To Require Copyright Holders To Opt Out](https://slashdot.org/story/25/09/29/1959236/openais-new-sora-video-generator-to-require-copyright-holders-to-opt-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - OpenAI's latest video generator introduces a controversial opt-out system for copyright holders, signaling critical ethical debates in AI usage.

* [California governor signs AI transparency bill into law](https://www.gov.ca.gov/2025/09/29/governor-newsom-signs-sb-53-advancing-californias-world-leading-artificial-intelligence-industry/) - California sets a legal precedent for AI transparency requirements, aiming to build trust in artificial intelligence applications.

* [Big Tech Told Kids to Code. The Jobs Didn’t Follow.](https://www.nytimes.com/2025/09/29/podcasts/the-daily/big-tech-told-kids-to-code-the-jobs-didnt-follow.html) - A podcast exploring the disparity between programming initiatives and the actual availability of tech jobs for young programmers.

## Innovative Uses of Technology

* [The Gameboy emulator that runs everywhere (Terminal, Web, Desktop)](https://github.com/raphamorim/gameboy) - A versatile Gameboy emulator designed to operate seamlessly across several platforms, showcasing innovation in retro gaming tech.

* [We built our coding agent for Slack instead of the terminal](https://www.mintlify.com/blog/we-built-our-coding-agent-for-slack) - An inventive coding tool that integrates directly with Slack, enhancing developer collaboration and productivity.

* [Buy It in ChatGPT: Instant Checkout and the Agentic Commerce Protocol](https://openai.com/index/buy-it-in-chatgpt/) - Revolutionary commerce features allow users to make online purchases directly through ChatGPT, pioneering an 'agentic commerce' approach.

## AI and Scientific Advancements

* [John Jumper: AI Is Revolutionizing Scientific Discovery [video]](https://www.youtube.com/watch?v=2Yguz5U-Nic) - A video featuring DeepMind’s John Jumper discussing how AI is transforming scientific inquiry and accelerating discovery.

* [Huntington's Disease Successfully Treated for First Time](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss) - Milestone achievement in AI-driven therapeutic development for Huntington's disease highlights new medical possibilities.

* [Does AI Get Bored?](https://timkellogg.me/blog/2025/09/27/boredom) - A philosophical exploration into whether AI systems might exhibit or simulate boredom, providing insights into machine learning models and human-like behavior.

## Environmental and Technological Insights

* [Microplastics Could Be Weakening Your Bones, Research Suggests](https://science.slashdot.org/story/25/09/29/1818259/microplastics-could-be-weakening-your-bones-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Groundbreaking research links microplastics with potential adverse effects on human bone health.

* [Environmental Damage is Putting European Way of Life at Risk, Says Report](https://news.slashdot.org/story/25/09/29/191252/environmental-damage-is-putting-european-way-of-life-at-risk-says-report?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A comprehensive analysis identifies environmental threats to Europe's societal and cultural sustainability.

* [Daylight Savings Time Is So Bad, It's Messing With Our View of the Cosmos](https://news.slashdot.org/story/25/09/29/1934243/daylight-savings-time-is-so-bad-its-messing-with-our-view-of-the-cosmos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Experts critique daylight savings time for disrupting astronomical research and natural human time rhythms.

## Cybersecurity and Governance

* [UK Government To Guarantee $2 Billion Jaguar Land Rover Loan After Cyber Shutdown](https://news.slashdot.org/story/25/09/29/1945254/uk-government-to-guarantee-2-billion-jaguar-land-rover-loan-after-cyber-shutdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The UK government provides financial support to Jaguar Land Rover following the significant impact of a cyberattack.

* [Landlords Are Demanding Tenants' Workplace Login Details To Verify Their Income](https://news.slashdot.org/story/25/09/29/1634200/landlords-are-demanding-tenants-workplace-login-details-to-verify-their-income?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Controversial trend sees landlords demanding workplace credentials for income verification, raising privacy concerns.

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

* [2025-09-29, 21:41:00](https://tech.slashdot.org/story/25/09/29/2015257/open-source-android-repository-f-droid-says-googles-new-rules-will-shut-it-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Open Source Android Repository F-Droid Says Google&apos;s New Rules Will Shut It Down](https://tech.slashdot.org/story/25/09/29/2015257/open-source-android-repository-f-droid-says-googles-new-rules-will-shut-it-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 21:17:16](https://news.ycombinator.com/item?id=45418875) - [Jax: Fast Combinations Calculation](https://github.com/phoenicyan/combinadics)
* [2025-09-29, 21:16:41](https://lobste.rs/s/t88zhp/gameboy_emulator_runs_everywhere) - [The Gameboy emulator that runs everywhere (Terminal, Web, Desktop)](https://github.com/raphamorim/gameboy)
* [2025-09-29, 21:03:21](https://news.ycombinator.com/item?id=45418713) - [Big Tech Told Kids to Code. The Jobs Didn’t Follow.](https://www.nytimes.com/2025/09/29/podcasts/the-daily/big-tech-told-kids-to-code-the-jobs-didnt-follow.html)
* [2025-09-29, 21:00:00](https://slashdot.org/story/25/09/29/1959236/openais-new-sora-video-generator-to-require-copyright-holders-to-opt-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s New Sora Video Generator To Require Copyright Holders To Opt Out](https://slashdot.org/story/25/09/29/1959236/openais-new-sora-video-generator-to-require-copyright-holders-to-opt-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 20:58:11](https://news.ycombinator.com/item?id=45418675) - [Ask HN: What are you working on? (September 2025)](https://news.ycombinator.com/item?id=45418675)
* [2025-09-29, 20:33:14](https://news.ycombinator.com/item?id=45418428) - [California governor signs AI transparency bill into law](https://www.gov.ca.gov/2025/09/29/governor-newsom-signs-sb-53-advancing-californias-world-leading-artificial-intelligence-industry/)
* [2025-09-29, 20:20:00](https://news.slashdot.org/story/25/09/29/1945254/uk-government-to-guarantee-2-billion-jaguar-land-rover-loan-after-cyber-shutdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Government To Guarantee $2 Billion Jaguar Land Rover Loan After Cyber Shutdown](https://news.slashdot.org/story/25/09/29/1945254/uk-government-to-guarantee-2-billion-jaguar-land-rover-loan-after-cyber-shutdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 20:19:54](https://news.ycombinator.com/item?id=45418269) - [Remember: Kurt Vonnegut Was 47](https://www.joanwestenberg.com/p/remember-kurt-vonnegut-was-47)
* [2025-09-29, 19:46:00](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss) - [New World Screwworm Parasite Detected in Northern Mexico Near US Border](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss)
* [2025-09-29, 19:40:00](https://news.slashdot.org/story/25/09/29/1934243/daylight-savings-time-is-so-bad-its-messing-with-our-view-of-the-cosmos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Daylight Savings Time Is So Bad, It&apos;s Messing With Our View of the Cosmos](https://news.slashdot.org/story/25/09/29/1934243/daylight-savings-time-is-so-bad-its-messing-with-our-view-of-the-cosmos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 19:31:22](https://news.ycombinator.com/item?id=45417771) - [What is artificial general intelligence?](https://arxiv.org/abs/2503.23923)
* [2025-09-29, 19:16:40](https://news.ycombinator.com/item?id=45417637) - [Don&apos;t Become a Scientist](https://yangxiao.cs.ua.edu/Don%27t%20Become%20a%20Scientist!.htm)
* [2025-09-29, 19:01:00](https://news.slashdot.org/story/25/09/29/191252/environmental-damage-is-putting-european-way-of-life-at-risk-says-report?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Environmental Damage is Putting European Way of Life at Risk, Says Report](https://news.slashdot.org/story/25/09/29/191252/environmental-damage-is-putting-european-way-of-life-at-risk-says-report?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 18:59:12](https://lobste.rs/s/nd2kgt/std_flip) - [std::flip](https://morwenn.github.io//c++/2025/09/25/TSB004-std-flip.html)
* [2025-09-29, 18:46:15](https://news.ycombinator.com/item?id=45417300) - [Diagnosing a Linux Performance Regression](https://automattic.com/2024/03/14/systems-report-linux-performance-regression/)
* [2025-09-29, 18:18:00](https://science.slashdot.org/story/25/09/29/1818259/microplastics-could-be-weakening-your-bones-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microplastics Could Be Weakening Your Bones, Research Suggests](https://science.slashdot.org/story/25/09/29/1818259/microplastics-could-be-weakening-your-bones-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 17:57:55](https://lobste.rs/s/ljvnlu/we_built_our_coding_agent_for_slack) - [We built our coding agent for Slack instead of the terminal](https://www.mintlify.com/blog/we-built-our-coding-agent-for-slack)
* [2025-09-29, 17:37:52](https://lobste.rs/s/eayslm/adding_new_instruction_risc_v_backend) - [Adding a new instruction to RISC-V backend in LLVM](https://blog.gustavoleite.me/llvm-riscv-instruction)
* [2025-09-29, 17:35:26](https://lobste.rs/s/2ofre3/can_ligo_detect_daylight_savings_time) - [Can LIGO Detect Daylight Savings Time?](https://arxiv.org/abs/2509.11849)
* [2025-09-29, 17:33:00](https://developers.slashdot.org/story/25/09/29/1733238/new-claude-model-runs-30-hour-marathon-to-create-11000-line-slack-clone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Claude Model Runs 30-Hour Marathon To Create 11,000-Line Slack Clone](https://developers.slashdot.org/story/25/09/29/1733238/new-claude-model-runs-30-hour-marathon-to-create-11000-line-slack-clone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 17:12:58](https://news.ycombinator.com/item?id=45416231) - [FCC Accidentally Leaked iPhone Schematics](https://www.engadget.com/big-tech/fcc-accidentally-leaked-iphone-schematics-potentially-giving-rivals-a-peek-at-company-secrets-154551807.html)
* [2025-09-29, 17:12:13](https://news.ycombinator.com/item?id=45416228) - [Claude Code 2.0](https://www.npmjs.com/package/@anthropic-ai/claude-code)
* [2025-09-29, 17:03:28](https://lobste.rs/s/gtnuao/introducing_claude_sonnet_4_5) - [Introducing Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5)
* [2025-09-29, 17:00:42](https://news.ycombinator.com/item?id=45416080) - [Buy It in ChatGPT: Instant Checkout and the Agentic Commerce Protocol](https://openai.com/index/buy-it-in-chatgpt/)
* [2025-09-29, 16:52:59](https://news.ycombinator.com/item?id=45415962) - [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5)
* [2025-09-29, 16:40:05](https://news.ycombinator.com/item?id=45415814) - [Sandboxing AI agents at the kernel level](https://www.greptile.com/blog/sandboxing-agents-at-the-kernel-level)
* [2025-09-29, 16:40:00](https://news.slashdot.org/story/25/09/29/1634200/landlords-are-demanding-tenants-workplace-login-details-to-verify-their-income?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Landlords Are Demanding Tenants&apos; Workplace Login Details To Verify Their Income](https://news.slashdot.org/story/25/09/29/1634200/landlords-are-demanding-tenants-workplace-login-details-to-verify-their-income?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 16:12:30](https://news.ycombinator.com/item?id=45415510) - [ML on Apple ][+](https://mdcramer.github.io/apple-2-blog/k-means/)
* [2025-09-29, 16:10:00](https://slashdot.org/story/25/09/29/1610226/microsoft-launches-vibe-working-in-excel-and-word?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Launches &apos;Vibe Working&apos; in Excel and Word](https://slashdot.org/story/25/09/29/1610226/microsoft-launches-vibe-working-in-excel-and-word?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 16:07:52](https://lobste.rs/s/7kspja/subtleties_sqlite_indexes) - [Subtleties of SQLite Indexes](https://emschwartz.me/subtleties-of-sqlite-indexes/)
* [2025-09-29, 15:54:42](https://news.ycombinator.com/item?id=45415332) - [Subtleties of SQLite Indexes](https://emschwartz.me/subtleties-of-sqlite-indexes/)
* [2025-09-29, 15:50:13](https://lobste.rs/s/adqhqf/unix99_unix_for_ti_99_4a) - [UNIX99: UNIX for the TI-99/4A](https://www.osnews.com/story/143436/unix99-unix-for-the-ti-99-4a/)
* [2025-09-29, 15:45:33](https://news.ycombinator.com/item?id=45415232) - [Write the damn code](https://antonz.org/write-code/)
* [2025-09-29, 15:42:46](https://news.ycombinator.com/item?id=45415207) - [Loadmo.re: design inspiration for unconventional web](https://loadmo.re)
* [2025-09-29, 15:40:30](https://news.ycombinator.com/item?id=45415178) - [How the Brain Balances Excitation and Inhibition](https://www.quantamagazine.org/how-the-brain-balances-excitation-and-inhibition-20250929/)
* [2025-09-29, 15:25:26](https://lobste.rs/s/rrwwar/announcing_software_you_can_love_2026) - [Announcing Software You Can Love 2026](https://mattnite.net/blog/sycl-2026-announcement/)
* [2025-09-29, 15:21:00](https://slashdot.org/story/25/09/29/1459255/china-opens-worlds-highest-bridge-breaking-its-own-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Opens World&apos;s Highest Bridge, Breaking Its Own Record](https://slashdot.org/story/25/09/29/1459255/china-opens-worlds-highest-bridge-breaking-its-own-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 15:20:11](https://news.ycombinator.com/item?id=45414933) - [John Jumper: AI Is Revolutionizing Scientific Discovery [video]](https://www.youtube.com/watch?v=2Yguz5U-Nic)
* [2025-09-29, 15:02:00](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss) - [8,000 years of Human Activities Aave Caused Wild Animals to Shrink and Domestic Animals to Grow](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss)
* [2025-09-29, 14:46:11](https://news.ycombinator.com/item?id=45414479) - [Not all OCuLink eGPU docks are created equal](https://www.jeffgeerling.com/blog/2025/not-all-oculink-egpu-docks-are-created-equal)
* [2025-09-29, 14:40:00](https://tech.slashdot.org/story/25/09/29/1329246/no-driver-no-hands-no-clue-waymo-pulled-over-for-illegal-u-turn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;No Driver, No Hands, No Clue&apos;: Waymo Pulled Over For Illegal U-turn](https://tech.slashdot.org/story/25/09/29/1329246/no-driver-no-hands-no-clue-waymo-pulled-over-for-illegal-u-turn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 14:22:39](https://news.ycombinator.com/item?id=45414215) - [Vertical Solar Panels Are Out Standing](https://hackaday.com/2025/09/25/vertical-solar-panels-are-out-standing/)
* [2025-09-29, 14:00:00](https://games.slashdot.org/story/25/09/29/134259/saudi-takeover-of-ea-in-55-billion-deal-raises-serious-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Saudi Takeover of EA in $55 Billion Deal Raises Serious Concerns](https://games.slashdot.org/story/25/09/29/134259/saudi-takeover-of-ea-in-55-billion-deal-raises-serious-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 13:39:53](https://news.ycombinator.com/item?id=45413654) - [Why friction is necessary for growth](https://jameelur.com/blog/overcoming-friction-leads-to-growth)
* [2025-09-29, 13:34:43](https://lobste.rs/s/qzcqyx/code_golfing_tiny_demo_using_maths_pinch) - [Code golfing a tiny demo using maths and a pinch of insanity](https://blog.pkh.me/p/45-code-golfing-a-tiny-demo-using-maths-and-a-pinch-of-insanity.html)
* [2025-09-29, 13:29:55](https://news.ycombinator.com/item?id=45413525) - [A SQL Heuristic: Ors Are Expensive](https://ethanseal.com/articles/ors-are-expensive)
* [2025-09-29, 13:09:53](https://lobste.rs/s/vvlwde/my_concurrency_wishlist_for_xcode_27) - [My (concurrency) Wishlist for Xcode 27](https://iamkonstantin.eu/blog/my-concurrency-wishlist-for-xcode-27/)
* [2025-09-29, 12:38:40](https://lobste.rs/s/wf4bnp/what_s_new_postgresql_18_developer_s) - [What&apos;s New in PostgreSQL 18 - a Developer&apos;s Perspective](https://www.bytebase.com/blog/what-is-new-in-postgres-18-for-developer/)
* [2025-09-29, 12:36:02](https://lobste.rs/s/oiiocr/go_proposal_architecture_specific_simd) - [Go Proposal: architecture-specific SIMD intrinsics](https://github.com/golang/go/issues/73787)
* [2025-09-29, 12:33:44](https://lobste.rs/s/x7fe8h/dbos_durable_workflow_orchestration) - [dbos: Durable Workflow Orchestration with Go and Postgresql](https://github.com/dbos-inc/dbos-transact-golang)
* [2025-09-29, 11:35:01](https://lobste.rs/s/ayncvk/ai_is_writing_90_code) - [AI is writing 90% of the code](https://lucumr.pocoo.org/2025/9/29/90-percent/)
* [2025-09-29, 11:34:00](https://developers.slashdot.org/story/25/09/29/029201/professor-warns-cs-graduates-are-struggling-to-find-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Professor Warns CS Graduates are Struggling to Find Jobs](https://developers.slashdot.org/story/25/09/29/029201/professor-warns-cs-graduates-are-struggling-to-find-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 11:30:32](https://lobste.rs/s/sieihh/spent_hour_so_working_with_claude_write) - [Spent an hour or so working with claude to write a minimal static web server in COBOL](https://github.com/jmsdnns/webbol)
* [2025-09-29, 11:28:06](https://news.ycombinator.com/item?id=45412419) - [What if I don&apos;t want videos of my hobby time available to the world?](https://neilzone.co.uk/2025/09/what-if-i-dont-want-videos-of-my-hobby-time-available-to-the-entire-world/)
* [2025-09-29, 10:43:45](https://lobste.rs/s/f5xxtl/does_ai_get_bored) - [Does AI Get Bored?](https://timkellogg.me/blog/2025/09/27/boredom)
* [2025-09-29, 10:17:00](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss) - [Physicists Nearly Double Speed of Superconducting Qubit Readout in Quantum Computers](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss)
* [2025-09-29, 10:11:20](https://news.ycombinator.com/item?id=45412022) - [Optimizing a 6502 image decoder, from 70 minutes to 1 minute](https://www.colino.net/wordpress/en/archives/2025/09/28/optimizing-a-6502-image-decoder-from-70-minutes-to-1-minute/)
* [2025-09-29, 09:46:08](https://lobste.rs/s/pvyfsg/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/pvyfsg/what_are_you_doing_this_week)
* [2025-09-29, 07:44:00](https://news.slashdot.org/story/25/09/29/0446226/ladybird-browser-gains-cloudflare-support-to-challenge-the-status-quo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ladybird Browser Gains Cloudflare Support to Challenge the Status Quo](https://news.slashdot.org/story/25/09/29/0446226/ladybird-browser-gains-cloudflare-support-to-challenge-the-status-quo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 06:42:58](https://lobste.rs/s/x1sdu5/f_droid_google_s_developer_registration) - [F-Droid and Google&apos;s Developer Registration Decree](https://f-droid.org/2025/09/29/google-developer-registration-decree.html)
* [2025-09-29, 06:41:27](https://news.ycombinator.com/item?id=45410940) - [What is “good taste” in software engineering?](https://www.seangoedecke.com/taste/)
* [2025-09-29, 05:59:35](https://lobste.rs/s/jbaxru/comparing_rust_carbon) - [Comparing Rust to Carbon](https://lwn.net/Articles/1036912/)
* [2025-09-29, 05:35:00](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss) - [The Cyber Vulnerabilities Lurking in CRM Systems](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss)
* [2025-09-29, 04:59:00](https://entertainment.slashdot.org/story/25/09/29/041251/ai-powered-stan-lee-hologram-debuts-at-la-comic-con?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI-Powered Stan Lee Hologram Debuts at LA Comic Con](https://entertainment.slashdot.org/story/25/09/29/041251/ai-powered-stan-lee-hologram-debuts-at-la-comic-con?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 04:07:21](https://lobste.rs/s/olfuo0/just_let_me_select_text) - [Just Let Me Select Text](https://aartaka.me/select-text.html)
* [2025-09-29, 00:49:00](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss) - [This Experimental Computer Chip Reuses Energy](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss)
* [2025-09-28, 23:22:35](https://lobste.rs/s/trzzcd/c_modules_globally_unique_module_names) - [In C++ modules globally unique module names seem to be unavoidable](https://nibblestew.blogspot.com/2025/09/in-c-modules-globally-unique-module.html)
* [2025-09-28, 21:50:45](https://lobste.rs/s/dkjswm/stupid_jj_tricks) - [stupid jj tricks](https://andre.arko.net/2025/09/28/stupid-jj-tricks/)
* [2025-09-28, 20:01:00](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss) - [US Uncovers 100,000 SIM Cards That Could Have “Shut Down” NYC Cell Network](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss)
* [2025-09-28, 16:13:36](https://lobste.rs/s/gchwhh/why_i_m_not_rushing_take_sides_rubygems) - [Why I&apos;m not rushing to take sides in the RubyGems fiasco](https://justin.searls.co/posts/why-im-not-rushing-to-take-sides-in-the-rubygems-fiasco/)
* [2025-09-28, 15:15:00](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss) - [Physics-Informed AI Learns Local Rules Behind Flocking and Collective Motion Behaviors](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss)
* [2025-09-28, 11:44:44](https://lobste.rs/s/wshruu/small_data) - [Small Data](https://topicpartition.io/definitions/small-data)
* [2025-09-28, 10:29:00](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss) - [US Intel Officials “Concerned” China Will Soon Master Reusable Launch](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss)
* [2025-09-28, 05:44:00](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss) - [Consumer Reports Slams Microsoft for Windows 10 Mess, Urges Extension of Free Updates](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss)
* [2025-09-28, 00:56:00](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss) - [Airlines Seen as Vulnerable After Confirmed Ransomware Cyberattack, Suspect Arrested](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss)
* [2025-09-27, 21:42:14](https://news.ycombinator.com/item?id=45399572) - [Using Cesium-137 testing to find counterfeit wine](https://kitchensisters.org/hiddenkitchens/atomic-wine/)
* [2025-09-27, 20:13:00](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss) - [How AI is Subsidized by Your Utility Bills and Drives Copper Prices](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss)
* [2025-09-27, 15:27:00](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss) - [Cloudflare DDoSed Itself With React UseEffect Hook Blunder](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss)
* [2025-09-27, 13:15:37](https://news.ycombinator.com/item?id=45395468) - [Users only care about 20% of your application](https://idiallo.com/blog/users-only-care-about-20-percent)
* [2025-09-27, 10:41:00](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss) - [Magma Displacement Triggered Tens of Thousands of Earthquakes, Santorini Swarm Study Finds](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss)
* [2025-09-27, 05:56:00](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss) - [China&apos;s Latest GPU Arrives With Claims of CUDA Compatibility and RT Support](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss)
* [2025-09-27, 01:06:00](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss) - [How India&apos;s Unplanned Hydropower Dams and Tunnels Are Disrupting Himalayan Landscapes](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss)
* [2025-09-26, 20:20:00](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss) - [American Kids Can’t Read or Do Math Anymore](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss)
* [2025-09-26, 15:35:00](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss) - [More Than Half of World&apos;s Coastal Settlements Retreating From Rising Seas, Study Shows](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss)
* [2025-09-26, 10:53:00](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss) - [Huntington&apos;s Disease Successfully Treated for First Time](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss)
* [2025-09-26, 09:13:23](https://news.ycombinator.com/item?id=45384438) - [If Odin Had Macros](https://www.gingerbill.org/article/2025/07/31/if-odin-had-macros/)
* [2025-09-26, 06:11:00](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss) - [Facebook Data Reveal the Devastating Real-World Harms Caused by the Spread of Misinformation](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss)
* [2025-09-26, 01:27:00](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss) - [China Starts Producing World-First Non-Binary AI Chips for Aviation, Manufacturing](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss)
* [2025-09-25, 21:16:24](https://news.ycombinator.com/item?id=45379196) - [The phaseout of the mmap() file operation in Linux](https://lwn.net/SubscriberLink/1038715/e4a2f8f50c244545/)
* [2025-09-25, 20:42:00](https://soylentnews.org/article.pl?sid=25/09/25/1225209&amp;from=rss) - [The Future of Nuclear Reactors is Making its Way to the US](https://soylentnews.org/article.pl?sid=25/09/25/1225209&amp;from=rss)
* [2025-09-25, 15:54:00](https://soylentnews.org/article.pl?sid=25/09/25/1221237&amp;from=rss) - [Different Types of Magic Mushrooms Use Unique Biochemical Paths to Produce the Same Active Compound](https://soylentnews.org/article.pl?sid=25/09/25/1221237&amp;from=rss)
* [2025-09-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss) - [The Ganges River is Drying at an Unprecedented Rate](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss)
* [2025-09-25, 07:01:00](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss) - [Nvidia&apos;s $100 Billion Investment in OpenAI Raises Big Antitrust Concerns](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss)
* [2025-09-25, 03:16:00](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss) - [The End of EU-Imposed Cookie Consent Pop-Ups Could be Nigh](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss)
