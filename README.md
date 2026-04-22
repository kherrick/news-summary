# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Innovations and Research

* [The Edge of Safe Rust](https://kyju.org/blog/tokioconf-2026/) - A comprehensive dive into the latest advancements in Rust programming, focusing on safety improvements. [Comments](https://lobste.rs/s/hkwyrc/edge_safe_rust)

* [The eighth-generation TPU: An architecture deep dive](https://cloud.google.com/blog/products/compute/tpu-8t-and-tpu-8i-technical-deep-dive) - An in-depth look at Google’s latest TPU innovation for AI applications. [Comments](https://news.ycombinator.com/item?id=47862608)

* [Mars Rover Detects Never-Before-Seen Organic Compounds In New Experiment](https://science.slashdot.org/story/26/04/22/0357247/mars-rover-detects-never-before-seen-organic-compounds-in-new-experiment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - NASA’s Mars rover makes a groundbreaking discovery of unique organic compounds on Mars.

* [Contact Lens Uses Microfluidics to Monitor and Treat Glaucoma](https://spectrum.ieee.org/smart-contact-lens-glaucoma-microfluidics) - New microfluidics-based smart contact lenses show promise for treating glaucoma. [Comments](https://news.ycombinator.com/item?id=47823654)

## Artificial Intelligence and Ethics

* [AI as a Fascist Artifact](https://tante.cc/2026/04/21/ai-as-a-fascist-artifact/) - An exploration of the potential dangers of AI as a tool for authoritarian systems. [Comments](https://lobste.rs/s/cs4kew/ai_as_fascist_artifact)

* [Is Claude Code going to cost $100/month? Probably not—it’s all very confusing](https://simonwillison.net/2026/Apr/22/claude-code-confusion/) - Mixed messages about pricing for the AI programming tool Claude Code. [Comments](https://lobste.rs/s/0qdgc0/is_claude_code_going_cost_100_month)

* [Scientists Invented a Fake Disease. AI Told People It Was Real](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss) - A study shows the risks of AI being used to spread misinformation.

* [Meta To Start Capturing Employee Mouse Movements, Keystrokes For AI Training Data](https://tech.slashdot.org/story/26/04/21/1849217/meta-to-start-capturing-employee-mouse-movements-keystrokes-for-ai-training-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Concerns arise as Meta announces employee tracking for AI training. [Comments](https://news.ycombinator.com/item?id=47851948)

## Space Exploration Developments

* [Meet Orpheus—a Hopper Mission Built to Hunt for Life in Martian Volcanoes](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss) - A new mission to search for life within Martian volcanoes is in the works.

* [Newly Discovered Crater Reveals Recent Impact on the Moon](https://soylentnews.org/article.pl?sid=26/04/19/1341258&amp;from=rss) - A fresh lunar crater signals satellite impacts on its surface.

* [iPhone Video Shows 'Earthset' From Space](https://science.slashdot.org/story/26/04/21/0012245/iphone-video-shows-earthset-from-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Stunning visuals captured by a unique perspective of the Earth from space.

## Energy and Environment

* [3.4M Solar Panels](https://tech.marksblogg.com/american-solar-farms-v2.html) - Exploring the rise of large-scale solar farms in the U.S. [Comments](https://news.ycombinator.com/item?id=47862386)

* [Global Growth In Solar 'the Largest Ever Observed For Any Source'](https://hardware.slashdot.org/story/26/04/21/1549243/global-growth-in-solar-the-largest-ever-observed-for-any-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Reports on exponential solar energy advancements.

## Cybersecurity and Technology Concerns

* [Kernel code removals driven by LLM-created security reports](https://lwn.net/Articles/1068928/) - Machine-generated security reports lead to kernel changes. [Comments](https://news.ycombinator.com/item?id=47862230)

* [Russia Hits European Thermal Power Plant in Attempted ‘Destructive’ Cyberattack](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss) - Cybersecurity experts tackle aggressive cyberattacks on critical infrastructure.

* [The Vercel breach: OAuth attack exposes risk in platform environment variables](https://www.trendmicro.com/en_us/research/26/d/vercel-breach-oauth-supply-chain.html) - A critical analysis of vulnerabilities in development platforms.

* [GitHub CLI now collects pseudoanonymous telemetry](https://cli.github.com/telemetry) - The controversial new telemetry collection policy from GitHub sparks debate. [Comments](https://news.ycombinator.com/item?id=47862331)

## Programming and Tools

* [Announcing TypeScript 7.0 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-beta/) - A preview of the latest updates in the TypeScript 7.0 beta, improving development experiences. [Comments](https://lobste.rs/s/48omfn/announcing_typescript_7_0_beta)

* [How To Make a Fast Dynamic Language Interpreter](https://zef-lang.dev/implementation) - Tips and strategies for achieving speed in dynamic language interpreters. [Comments](https://lobste.rs/s/vrmjge/how_make_fast_dynamic_language)

* [Windows 9x Subsystem for Linux](https://social.hails.org/@hailey/116446826733136456) - Introducing an experimental attempt at running Windows 9x systems on Linux. [Comments](https://lobste.rs/s/ipyknz/wsl9x_windows_9x_subsystem_for_linux)

* [Columnar Storage Is Normalization](https://buttondown.com/jaffray/archive/columnar-storage-is-normalization/) - Exploring the relationship between columnar storage and data normalization. [Comments](https://news.ycombinator.com/item?id=47862626)

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

* [2026-04-22, 14:02:30](https://lobste.rs/s/hkwyrc/edge_safe_rust) - [The Edge of Safe Rust](https://kyju.org/blog/tokioconf-2026/)
* [2026-04-22, 13:39:12](https://lobste.rs/s/5plavs/some_general_notes_on_network_booting) - [Some general notes on network booting UEFI machines](https://utcc.utoronto.ca/~cks/space/blog/tech/UEFINetworkBootNotes)
* [2026-04-22, 13:19:27](https://lobste.rs/s/uthsad/impeccable_design_skills_for_ai) - [Impeccable: Design skills for AI harnesses](https://impeccable.style)
* [2026-04-22, 12:51:17](https://lobste.rs/s/qetyqh/markdown_2004) - [Markdown (2004)](http://www.aaronsw.com/weblog/001189)
* [2026-04-22, 12:31:29](https://lobste.rs/s/zjceyu/github_actions_for_gleam_monorepo) - [GitHub Actions for a Gleam monorepo](https://crowdhailer.me/2026-04-21/github-actions-for-a-gleam-monorepo/)
* [2026-04-22, 12:30:14](https://news.ycombinator.com/item?id=47862626) - [Columnar Storage Is Normalization](https://buttondown.com/jaffray/archive/columnar-storage-is-normalization/)
* [2026-04-22, 12:28:00](https://news.ycombinator.com/item?id=47862608) - [The eighth-generation TPU: An architecture deep dive](https://cloud.google.com/blog/products/compute/tpu-8t-and-tpu-8i-technical-deep-dive)
* [2026-04-22, 12:17:43](https://lobste.rs/s/xs2xus/what_async_promised_what_it_delivered) - [What Async Promised and What it Delivered](https://causality.blog/essays/what-async-promised/)
* [2026-04-22, 12:15:29](https://news.ycombinator.com/item?id=47862497) - [Our eighth generation TPUs: two chips for the agentic era](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/)
* [2026-04-22, 12:09:00](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss) - [Sperm Whales Speak With a Complex Alphabet and Even Have ‘Vowels,’ Study Finds](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss)
* [2026-04-22, 12:04:30](https://news.ycombinator.com/item?id=47862386) - [3.4M Solar Panels](https://tech.marksblogg.com/american-solar-farms-v2.html)
* [2026-04-22, 11:58:58](https://news.ycombinator.com/item?id=47862331) - [GitHub CLI now collects pseudoanonymous telemetry](https://cli.github.com/telemetry)
* [2026-04-22, 11:48:07](https://news.ycombinator.com/item?id=47862230) - [Kernel code removals driven by LLM-created security reports](https://lwn.net/Articles/1068928/)
* [2026-04-22, 11:34:24](https://lobste.rs/s/cs4kew/ai_as_fascist_artifact) - [AI as a Fascist Artifact](https://tante.cc/2026/04/21/ai-as-a-fascist-artifact/)
* [2026-04-22, 11:00:00](https://science.slashdot.org/story/26/04/22/0357247/mars-rover-detects-never-before-seen-organic-compounds-in-new-experiment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mars Rover Detects Never-Before-Seen Organic Compounds In New Experiment](https://science.slashdot.org/story/26/04/22/0357247/mars-rover-detects-never-before-seen-organic-compounds-in-new-experiment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 10:54:49](https://news.ycombinator.com/item?id=47861731) - [Nobody Got Fired for Uber&apos;s $8M Ledger Mistake?](https://news.alvaroduran.com/p/nobody-got-fired-for-ubers-8-million)
* [2026-04-22, 10:51:09](https://news.ycombinator.com/item?id=47861703) - [CATL&apos;s new LFP battery can charge from 10 to 98% in less than 7 minutes](https://arstechnica.com/cars/2026/04/catls-new-lfp-battery-can-charge-from-10-to-98-in-less-than-7-minutes/)
* [2026-04-22, 09:52:52](https://news.ycombinator.com/item?id=47861270) - [Windows 9x Subsystem for Linux](https://social.hails.org/@hailey/116446826733136456)
* [2026-04-22, 09:22:05](https://news.ycombinator.com/item?id=47861087) - [How the heck does GPS work?](https://perthirtysix.com/how-the-heck-does-gps-work)
* [2026-04-22, 07:27:00](https://soylentnews.org/article.pl?sid=26/04/20/0227209&amp;from=rss) - [The Friction We Forgot](https://soylentnews.org/article.pl?sid=26/04/20/0227209&amp;from=rss)
* [2026-04-22, 07:00:00](https://yro.slashdot.org/story/26/04/22/0348204/fbi-looks-into-dead-or-missing-scientists-tied-to-sensitive-us-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Looks Into Dead or Missing Scientists Tied To Sensitive US Research](https://yro.slashdot.org/story/26/04/22/0348204/fbi-looks-into-dead-or-missing-scientists-tied-to-sensitive-us-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 06:38:05](https://news.ycombinator.com/item?id=47859861) - [XOR&apos;ing a register with itself is the idiom for zeroing it out. Why not sub?](https://devblogs.microsoft.com/oldnewthing/20260421-00/?p=112247)
* [2026-04-22, 06:33:53](https://lobste.rs/s/ipyknz/wsl9x_windows_9x_subsystem_for_linux) - [wsl9x: Windows 9x subsystem for Linux](https://codeberg.org/hails/wsl9x)
* [2026-04-22, 05:17:23](https://lobste.rs/s/nvwn1i/math_is_hard_openbsd_on_vax) - [Math is hard (OpenBSD on VAX)](http://miod.online.fr/software/openbsd/stories/vaxfp.html)
* [2026-04-22, 03:30:00](https://developers.slashdot.org/story/26/04/21/2343219/spacex-strikes-deal-with-coding-startup-cursor-for-60-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Strikes Deal With Coding Startup Cursor For $60 Billion](https://developers.slashdot.org/story/26/04/21/2343219/spacex-strikes-deal-with-coding-startup-cursor-for-60-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 02:57:34](https://lobste.rs/s/0qdgc0/is_claude_code_going_cost_100_month) - [Is Claude Code going to cost $100/month? Probably not—it’s all very confusing](https://simonwillison.net/2026/Apr/22/claude-code-confusion/)
* [2026-04-22, 02:34:00](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss) - [Total Solar Eclipse Led to Seismic Quiet for Cities Within its Path](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss)
* [2026-04-21, 23:53:45](https://news.ycombinator.com/item?id=47856535) - [Drunk post: Things I&apos;ve learned as a senior engineer (2021)](https://luminousmen.substack.com/p/drunk-post-things-ive-learned-as)
* [2026-04-21, 23:00:00](https://yro.slashdot.org/story/26/04/21/2039235/florida-launches-criminal-investigation-into-chatgpt-over-school-shooting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Florida Launches Criminal Investigation Into ChatGPT Over School Shooting](https://yro.slashdot.org/story/26/04/21/2039235/florida-launches-criminal-investigation-into-chatgpt-over-school-shooting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 22:13:18](https://news.ycombinator.com/item?id=47855293) - [SpaceX says it has agreement to acquire Cursor for $60B](https://twitter.com/spacex/status/2046713419978453374)
* [2026-04-21, 22:00:00](https://news.slashdot.org/story/26/04/21/2028206/mozilla-uses-anthropics-mythos-to-fix-271-bugs-in-firefox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Uses Anthropic&apos;s Mythos To Fix 271 Bugs In Firefox](https://news.slashdot.org/story/26/04/21/2028206/mozilla-uses-anthropics-mythos-to-fix-271-bugs-in-firefox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 21:50:00](https://soylentnews.org/article.pl?sid=26/04/19/1341258&amp;from=rss) - [A Fresh Scar on the Moon: Newly Discovered Crater Reveals Recent Impact](https://soylentnews.org/article.pl?sid=26/04/19/1341258&amp;from=rss)
* [2026-04-21, 21:00:00](https://hardware.slashdot.org/story/26/04/21/2019256/framework-laptop-13-pro-is-a-major-overhaul-for-the-modular-upgradeable-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Framework Laptop 13 Pro Is a Major Overhaul For the Modular, Upgradeable Laptop](https://hardware.slashdot.org/story/26/04/21/2019256/framework-laptop-13-pro-is-a-major-overhaul-for-the-modular-upgradeable-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 20:52:19](https://news.ycombinator.com/item?id=47854365) - [Another Day Has Come](https://daringfireball.net/2026/04/another_day_has_come)
* [2026-04-21, 20:18:32](https://lobste.rs/s/48omfn/announcing_typescript_7_0_beta) - [Announcing TypeScript 7.0 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-beta/)
* [2026-04-21, 20:02:21](https://lobste.rs/s/p8idoc/i_don_t_want_your_prs_anymore) - [I don&apos;t want your PRs anymore](https://dpc.pw/posts/i-dont-want-your-prs-anymore/)
* [2026-04-21, 20:00:00](https://news.slashdot.org/story/26/04/21/194240/job-cuts-driven-by-ai-are-rising-on-wall-street?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Job Cuts Driven By AI Are Rising On Wall Street](https://news.slashdot.org/story/26/04/21/194240/job-cuts-driven-by-ai-are-rising-on-wall-street?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 19:25:26](https://lobste.rs/s/uczgez/switching_from_uv_pdm) - [Switching from uv to PDM](https://stuartm.nz/2026/04/pdm-rocks/)
* [2026-04-21, 19:24:03](https://lobste.rs/s/0rzs0d/framework_laptop_13_pro_intel_core_ultra_3) - [Framework Laptop 13 Pro: Intel Core Ultra 3 &amp; LPCAMM2](https://frame.work/laptop13pro)
* [2026-04-21, 19:11:02](https://lobste.rs/s/glpz3r/zero_days_are_numbered) - [The zero-days are numbered](https://blog.mozilla.org/en/privacy-security/ai-security-zero-day-vulnerabilities/)
* [2026-04-21, 19:00:00](https://tech.slashdot.org/story/26/04/21/1849217/meta-to-start-capturing-employee-mouse-movements-keystrokes-for-ai-training-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta To Start Capturing Employee Mouse Movements, Keystrokes For AI Training Data](https://tech.slashdot.org/story/26/04/21/1849217/meta-to-start-capturing-employee-mouse-movements-keystrokes-for-ai-training-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 18:50:00](https://news.ycombinator.com/item?id=47852835) - [ChatGPT Images 2.0](https://openai.com/index/introducing-chatgpt-images-2-0/)
* [2026-04-21, 18:17:05](https://lobste.rs/s/ojh2aq/highlights_from_git_2_54) - [Highlights from Git 2.54](https://github.blog/open-source/git/highlights-from-git-2-54/)
* [2026-04-21, 18:00:00](https://developers.slashdot.org/story/26/04/21/1655253/googles-internal-politics-leave-it-playing-catch-up-on-ai-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Internal Politics Leave It Playing Catch-Up On AI Coding](https://developers.slashdot.org/story/26/04/21/1655253/googles-internal-politics-leave-it-playing-catch-up-on-ai-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 17:40:39](https://news.ycombinator.com/item?id=47851948) - [Meta to start capturing employee mouse movements, keystrokes for AI training](https://www.reuters.com/sustainability/boards-policy-regulation/meta-start-capturing-employee-mouse-movements-keystrokes-ai-training-data-2026-04-21/)
* [2026-04-21, 17:33:50](https://news.ycombinator.com/item?id=47851885) - [Britannica11.org – a structured edition of the 1911 Encyclopædia Britannica](https://britannica11.org/)
* [2026-04-21, 17:14:35](https://news.ycombinator.com/item?id=47851634) - [The Vercel breach: OAuth attack exposes risk in platform environment variables](https://www.trendmicro.com/en_us/research/26/d/vercel-breach-oauth-supply-chain.html)
* [2026-04-21, 17:05:00](https://soylentnews.org/article.pl?sid=26/04/19/1338217&amp;from=rss) - [Europol Launches Operation PowerOFF — Warns 75,000 DDoS Users and Takes Down 53 Domains](https://soylentnews.org/article.pl?sid=26/04/19/1338217&amp;from=rss)
* [2026-04-21, 17:00:00](https://games.slashdot.org/story/26/04/21/1639222/xbox-game-pass-ultimate-gets-a-price-cut?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xbox Game Pass Ultimate Gets a Price Cut](https://games.slashdot.org/story/26/04/21/1639222/xbox-game-pass-ultimate-gets-a-price-cut?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 16:00:00](https://hardware.slashdot.org/story/26/04/21/1549243/global-growth-in-solar-the-largest-ever-observed-for-any-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Global Growth In Solar &apos;the Largest Ever Observed For Any Source&apos;](https://hardware.slashdot.org/story/26/04/21/1549243/global-growth-in-solar-the-largest-ever-observed-for-any-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 15:55:07](https://lobste.rs/s/6vx5uy/features_everyone_should_steal_from_npmx) - [Features everyone should steal from npmx](https://nesbitt.io/2026/04/16/features-everyone-should-steal-from-npmx.html)
* [2026-04-21, 15:00:00](https://yro.slashdot.org/story/26/04/21/0115210/maryland-becomes-first-state-to-pass-bill-banning-surveillance-pricing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Maryland Becomes First State To Pass Bill Banning &apos;Surveillance Pricing&apos;](https://yro.slashdot.org/story/26/04/21/0115210/maryland-becomes-first-state-to-pass-bill-banning-surveillance-pricing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 14:03:20](https://lobste.rs/s/fgwvua/performance_wren_programming_language) - [Performance of the Wren programming language](https://wren.io/performance.html)
* [2026-04-21, 13:48:53](https://lobste.rs/s/ual4t5/grasp_simple_protocol_for_decentralized) - [grasp: a simple protocol for decentralized git](https://gitgrasp.com/)
* [2026-04-21, 12:30:49](https://lobste.rs/s/prquts/emacs_is_my_browser) - [Emacs is my browser](https://joshblais.com/blog/emacs-as-my-browser/)
* [2026-04-21, 12:19:00](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss) - [Soviet CDs and CD Players Existed, and They Were Strange](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss)
* [2026-04-21, 11:00:00](https://slashdot.org/story/26/04/21/014228/amazon-to-invest-up-to-another-25-billion-in-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon To Invest Up To Another $25 Billion In Anthropic](https://slashdot.org/story/26/04/21/014228/amazon-to-invest-up-to-another-25-billion-in-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 10:19:49](https://news.ycombinator.com/item?id=47846861) - [Diverse organic molecules on Mars revealed by the first SAM TMAH experiment](https://www.courthousenews.com/preserved-for-billions-of-years-organic-compounds-found-on-mars/)
* [2026-04-21, 10:17:18](https://lobste.rs/s/p3fzyr/finishing_things) - [Finishing Things](https://ratfactor.com/finishing-things)
* [2026-04-21, 10:09:48](https://lobste.rs/s/xqmug2/what_is_your_go_project_for_learning_new) - [What is your go-to project for learning a new language?](https://lobste.rs/s/xqmug2/what_is_your_go_project_for_learning_new)
* [2026-04-21, 09:48:45](https://lobste.rs/s/wt6xvx/wait_is_over_coreboot_on_amd_starbook) - [Wait is over - coreboot on the AMD StarBook](https://starlabs.systems/blogs/news/coreboot-on-the-amd-starbook-finally)
* [2026-04-21, 09:37:13](https://lobste.rs/s/vrmjge/how_make_fast_dynamic_language) - [How To Make a Fast Dynamic Language Interpreter](https://zef-lang.dev/implementation)
* [2026-04-21, 07:32:00](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss) - [Chinese Carmaker Patents Voice-Controlled &apos;in-Vehicle Toilet&apos;](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss)
* [2026-04-21, 07:00:00](https://science.slashdot.org/story/26/04/21/0012245/iphone-video-shows-earthset-from-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iPhone Video Shows &apos;Earthset&apos; From Space](https://science.slashdot.org/story/26/04/21/0012245/iphone-video-shows-earthset-from-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 03:30:00](https://games.slashdot.org/story/26/04/20/2357225/playstation-to-require-age-verification-for-messages-and-voice-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PlayStation To Require Age Verification For Messages and Voice Chat](https://games.slashdot.org/story/26/04/20/2357225/playstation-to-require-age-verification-for-messages-and-voice-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 02:47:00](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss) - [In the Face of Rampant AI, is ‘Data Poisoning’ a New Form of Civil Disobedience?](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss)
* [2026-04-20, 23:35:06](https://news.ycombinator.com/item?id=47842569) - [Making RAM at Home [video]](https://www.youtube.com/watch?v=h6GWikWlAQA)
* [2026-04-20, 22:08:39](https://lobste.rs/s/etrtmp/jujutsu_megamerges_for_fun_profit) - [Jujutsu megamerges for fun and profit](https://isaaccorbrey.com/notes/jujutsu-megamerges-for-fun-and-profit)
* [2026-04-20, 22:02:00](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss) - [The Quiet Colossus](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss)
* [2026-04-20, 17:16:00](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss) - [How Much Does Chatbot Bias Influence Users? A Lot, It Turns Out](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss)
* [2026-04-20, 15:21:16](https://news.ycombinator.com/item?id=47835635) - [Acetaminophen vs. ibuprofen](https://asteriskmag.com/issues/14/the-mystery-in-the-medicine-cabinet)
* [2026-04-20, 12:58:55](https://news.ycombinator.com/item?id=47833651) - [I don&apos;t chain everything in JavaScript anymore](https://allthingssmitty.com/2026/04/20/why-i-dont-chain-everything-in-javascript-anymore/)
* [2026-04-20, 12:29:00](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss) - [Russia Hits European Thermal Power Plant in Attempted ‘Destructive’ Cyberattack](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss)
* [2026-04-20, 11:18:57](https://news.ycombinator.com/item?id=47832720) - [All your agents are going async](https://zknill.io/posts/all-your-agents-are-going-async/)
* [2026-04-20, 07:43:00](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss) - [How Two Motorola Transistors Became the World&apos;s Default NPNs](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss)
* [2026-04-20, 03:01:00](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss) - [10 Math Books That Sharpen Your Thinking](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss)
* [2026-04-19, 22:16:00](https://soylentnews.org/article.pl?sid=26/04/18/2348241&amp;from=rss) - [“TotalRecall Reloaded” Tool Finds a Side Entrance to the Windows 11 Recall Database](https://soylentnews.org/article.pl?sid=26/04/18/2348241&amp;from=rss)
* [2026-04-19, 17:34:00](https://soylentnews.org/article.pl?sid=26/04/18/195238&amp;from=rss) - [Pentagon Reportedly Asks Detroit to Use More Car Factories as Arms Factories](https://soylentnews.org/article.pl?sid=26/04/18/195238&amp;from=rss)
* [2026-04-19, 12:51:00](https://soylentnews.org/article.pl?sid=26/04/18/192211&amp;from=rss) - [The \&quot;Passive Income\&quot; Trap Ate a Generation of Entrepreneurs](https://soylentnews.org/article.pl?sid=26/04/18/192211&amp;from=rss)
* [2026-04-19, 11:53:31](https://news.ycombinator.com/item?id=47823654) - [Contact Lens Uses Microfluidics to Monitor and Treat Glaucoma](https://spectrum.ieee.org/smart-contact-lens-glaucoma-microfluidics)
* [2026-04-19, 09:23:27](https://news.ycombinator.com/item?id=47822968) - [Why Musicians Are Manufacturing Sold-Out Shows](https://www.bloomberg.com/news/articles/2026-04-17/how-bands-like-cameron-winter-s-geese-are-manufacturing-sold-out-shows)
* [2026-04-19, 08:03:00](https://soylentnews.org/article.pl?sid=26/04/18/1855201&amp;from=rss) - [Why the Phrase &apos;Super El Niño&apos; Makes Australian Climate Scientists Roll Their Eyes](https://soylentnews.org/article.pl?sid=26/04/18/1855201&amp;from=rss)
* [2026-04-19, 05:58:16](https://news.ycombinator.com/item?id=47822117) - [Prefill-as-a-Service:KVCache of Next-Generation Models Could Go Cross-Datacenter](https://arxiv.org/abs/2604.15039)
* [2026-04-19, 04:41:59](https://news.ycombinator.com/item?id=47821853) - [Garbage Collection Without Unsafe Code](https://fitzgen.com/2024/02/06/safe-gc.html)
* [2026-04-19, 04:28:31](https://news.ycombinator.com/item?id=47821801) - [Windows Server 2025 Runs Better on ARM](https://jasoneckert.github.io/myblog/server-2025-arm64/)
* [2026-04-19, 03:14:00](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss) - [Irish Bog Plant Revives Ancient Remedy as a New Weapon Vs Superbugs](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss)
* [2026-04-19, 00:34:11](https://news.ycombinator.com/item?id=47820791) - [MuJoCo – Advanced Physics Simulation](https://github.com/google-deepmind/mujoco)
* [2026-04-18, 22:26:00](https://soylentnews.org/article.pl?sid=26/04/17/0348237&amp;from=rss) - [Netgear Routers Seemingly Won&apos;t be Banned in the US After All](https://soylentnews.org/article.pl?sid=26/04/17/0348237&amp;from=rss)
* [2026-04-18, 17:42:00](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss) - [Scientists Invented a Fake Disease. AI Told People It Was Real](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss)
* [2026-04-18, 12:54:00](https://soylentnews.org/article.pl?sid=26/04/17/0336248&amp;from=rss) - [Online Response to the Attack on Sam Altman&apos;s House Shows a Generational Divide](https://soylentnews.org/article.pl?sid=26/04/17/0336248&amp;from=rss)
* [2026-04-18, 10:53:42](https://news.ycombinator.com/item?id=47814874) - [Stephen&apos;s Sausage Roll remains one of the most influential puzzle games](https://thinkygames.com/features/10-years-of-grilling-stephens-sausage-roll-remains-one-of-the-most-influential-puzzle-games-ever-created/)
* [2026-04-18, 08:12:00](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss) - [Meet Orpheus—a Hopper Mission Built to Hunt for Life in Martian Volcanoes](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss)
* [2026-04-18, 03:30:00](https://soylentnews.org/article.pl?sid=26/04/17/0318245&amp;from=rss) - [IPv6 Adoption Reaches 50% - The Long Journey Toward Internet&apos;s Next Generation](https://soylentnews.org/article.pl?sid=26/04/17/0318245&amp;from=rss)
