# [News Summary](https://kherrick.github.io/news-summary/)

## Privacy and Technology

* [We Found a Stable Firefox Identifier Linking All Your Private Tor Identities](https://fingerprint.com/blog/firefox-tor-indexeddb-privacy-vulnerability/) - A critical vulnerability in Firefox and Tor allowing identification linking all private identities has been revealed. [Comments](https://lobste.rs/s/fbwdco/we_found_stable_firefox_identifier).

* [GitHub CLI now collects pseudoanonymous telemetry](https://cli.github.com/telemetry) - GitHub's command-line interface is now implementing pseudoanonymous data collection, sparking user concerns. [Comments](https://news.ycombinator.com/item?id=47862331).

* [AI Tool Rips Off Open Source Software Without Violating Copyright](https://news.slashdot.org/story/26/04/22/1631212/ai-tool-rips-off-open-source-software-without-violating-copyright?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An AI tool's controversial ability to circumvent copyright laws while using open-source software has raised eyebrows. [Comments](https://news.slashdot.org/story/26/04/22/1631212/ai-tool-rips-off-open-source-software-without-violating-copyright?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Surveillance Pricing: Exploiting Information Asymmetries](https://lpeproject.org/blog/surveillance-pricing-exploiting-information-asymmetries/) - Explores how surveillance data is used for determining consumer-specific pricing strategies. [Comments](https://news.ycombinator.com/item?id=47866395).

## Innovations in Technology and Science

* [China's CATL Reveals 621-Mile EV Battery, Under-7-Minute Charging](https://hardware.slashdot.org/story/26/04/22/0422252/chinas-catl-reveals-621-mile-ev-battery-under-7-minute-charging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A new electric vehicle battery promises a 621-mile range with under seven-minute charging, a leap forward in EV technology. [Comments](https://hardware.slashdot.org/story/26/04/22/0422252/chinas-catl-reveals-621-mile-ev-battery-under-7-minute-charging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Google Unveils Two New AI Chips For the 'Agentic Era'](https://tech.slashdot.org/story/26/04/22/1746252/google-unveils-two-new-ai-chips-for-the-agentic-era?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google introduces advanced AI chips designed to support its vision for the "Agentic Era". [Comments](https://tech.slashdot.org/story/26/04/22/1746252/google-unveils-two-new-ai-chips-for-the-agentic-era?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Mars Rover Detects Never-Before-Seen Organic Compounds In New Experiment](https://science.slashdot.org/story/26/04/22/0357247/mars-rover-detects-never-before-seen-organic-compounds-in-new-experiment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Groundbreaking discovery by Mars Rover finds novel organic compounds on Mars, hinting at possible signs of life. [Comments](https://science.slashdot.org/story/26/04/22/0357247/mars-rover-detects-never-before-seen-organic-compounds-in-new-experiment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Educational Research

* [Scores Decline Again for 13-year-old Students in Reading and Mathematics](https://www.nationsreportcard.gov/highlights/ltt/2023/) - A new report highlights nationwide declines in reading and math scores among 13-year-olds. [Comments](https://news.ycombinator.com/item?id=47867755).

* [Youth Suicides Declined After Creation of National Hotline](https://www.nytimes.com/2026/04/22/science/988-youth-suicides-decline.html) - Positive outcomes seen with the establishment of a national youth suicide prevention hotline. [Comments](https://news.ycombinator.com/item?id=47865622).

## Open Source Achievements

* [Arch Linux Now Has a Bit-For-Bit Reproducible Docker Image](https://antiz.fr/blog/archlinux-now-has-a-reproducible-docker-image/) - Arch Linux celebrates the development of its reproducible Docker image, ensuring consistency in deployments. [Comments](https://lobste.rs/s/wps0js/arch_linux_now_has_bit_for_bit).

* [DuckDB 1.5.2 – SQL Database That Runs on Laptop, Server, in the Browser](https://duckdb.org/2026/04/13/announcing-duckdb-152) - Announcement of the updated DuckDB version with enhanced compatibility and performance. [Comments](https://news.ycombinator.com/item?id=47864454).

## AI and Machine Learning

* [Parallel Agents in Zed](https://zed.dev/blog/parallel-agents) - Introducing parallel agents in Zed for improved AI-driven programming workflows. [Comments](https://news.ycombinator.com/item?id=47866750).

* [Workspace Agents in ChatGPT](https://openai.com/index/introducing-workspace-agents-in-chatgpt/) - OpenAI develops Workspace Agents in ChatGPT to boost virtual collaboration and task automation. [Comments](https://news.ycombinator.com/item?id=47866860).

* [Qwen3.6-27B: Flagship-Level Coding in a 27B Dense Model](https://qwen.ai/blog?id=qwen3.6-27b) - Qwen AI unveils a new dense language model with advanced coding capabilities. [Comments](https://news.ycombinator.com/item?id=47863217).

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

* [2026-04-22, 19:23:18](https://lobste.rs/s/fbwdco/we_found_stable_firefox_identifier) - [We Found a Stable Firefox Identifier Linking All Your Private Tor Identities](https://fingerprint.com/blog/firefox-tor-indexeddb-privacy-vulnerability/)
* [2026-04-22, 19:04:20](https://lobste.rs/s/wps0js/arch_linux_now_has_bit_for_bit) - [Arch Linux now has a bit-for-bit reproducible Docker image](https://antiz.fr/blog/archlinux-now-has-a-reproducible-docker-image/)
* [2026-04-22, 19:00:00](https://slashdot.org/story/26/04/22/195209/gates-foundation-to-cut-20-of-staff-review-epstein-ties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gates Foundation To Cut 20% of Staff, Review Epstein Ties](https://slashdot.org/story/26/04/22/195209/gates-foundation-to-cut-20-of-staff-review-epstein-ties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 18:57:20](https://news.ycombinator.com/item?id=47867755) - [Scores decline again for 13-year-old students in reading and mathematics](https://www.nationsreportcard.gov/highlights/ltt/2023/)
* [2026-04-22, 18:52:34](https://lobste.rs/s/bonwlu/telemetry_driven_development) - [Telemetry-Driven Development](https://www.youtube.com/watch?v=irQicdafnyM)
* [2026-04-22, 18:39:32](https://lobste.rs/s/sz3gab/what_are_your_favorite_emacs_packages) - [What are your favorite Emacs packages?](https://lobste.rs/s/sz3gab/what_are_your_favorite_emacs_packages)
* [2026-04-22, 18:26:48](https://lobste.rs/s/guiymx/forge) - [Forge](https://nesbitt.io/2026/03/13/forge.html)
* [2026-04-22, 18:01:18](https://news.ycombinator.com/item?id=47867048) - [Website streamed live directly from a model](https://flipbook.page/)
* [2026-04-22, 18:00:00](https://tech.slashdot.org/story/26/04/22/1746252/google-unveils-two-new-ai-chips-for-the-agentic-era?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Unveils Two New AI Chips For the &apos;Agentic Era&apos;](https://tech.slashdot.org/story/26/04/22/1746252/google-unveils-two-new-ai-chips-for-the-agentic-era?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 17:51:17](https://news.ycombinator.com/item?id=47866913) - [Over-editing refers to a model modifying code beyond what is necessary](https://nrehiew.github.io/blog/minimal_editing/)
* [2026-04-22, 17:47:07](https://news.ycombinator.com/item?id=47866860) - [Workspace Agents in ChatGPT](https://openai.com/index/introducing-workspace-agents-in-chatgpt/)
* [2026-04-22, 17:38:57](https://news.ycombinator.com/item?id=47866750) - [Parallel Agents in Zed](https://zed.dev/blog/parallel-agents)
* [2026-04-22, 17:35:03](https://news.ycombinator.com/item?id=47866697) - [We found a stable Firefox identifier linking all your private Tor identities](https://fingerprint.com/blog/firefox-tor-indexeddb-privacy-vulnerability/)
* [2026-04-22, 17:19:38](https://lobste.rs/s/4tuujf/lemmascript_verification_toolchain_for) - [LemmaScript: A Verification Toolchain for TypeScript via Dafny](https://midspiral.com/blog/lemmascript-a-verification-toolchain-for-typescript/)
* [2026-04-22, 17:13:19](https://news.ycombinator.com/item?id=47866395) - [Surveillance Pricing: Exploiting Information Asymmetries](https://lpeproject.org/blog/surveillance-pricing-exploiting-information-asymmetries/)
* [2026-04-22, 17:00:00](https://news.slashdot.org/story/26/04/22/1631212/ai-tool-rips-off-open-source-software-without-violating-copyright?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Tool Rips Off Open Source Software Without Violating Copyright](https://news.slashdot.org/story/26/04/22/1631212/ai-tool-rips-off-open-source-software-without-violating-copyright?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 16:53:00](https://soylentnews.org/article.pl?sid=26/04/20/0241235&amp;from=rss) - [Tech Companies Are Trying to Neuter Colorado&apos;s Landmark Right-to-Repair Law](https://soylentnews.org/article.pl?sid=26/04/20/0241235&amp;from=rss)
* [2026-04-22, 16:46:37](https://lobste.rs/s/gjegzz/it_s_all_just_trees_with_web_origami) - [It&apos;s All Just Trees With Web Origami](https://vale.rocks/posts/web-origami)
* [2026-04-22, 16:29:25](https://news.ycombinator.com/item?id=47865868) - [Alberta startup sells no-tech tractors for half price](https://wheelfront.com/this-alberta-startup-sells-no-tech-tractors-for-half-price/)
* [2026-04-22, 16:11:23](https://news.ycombinator.com/item?id=47865661) - [Martin Fowler: Technical, Cognitive, and Intent Debt](https://martinfowler.com/fragments/2026-04-14.html)
* [2026-04-22, 16:09:56](https://news.ycombinator.com/item?id=47865642) - [Show HN: Broccoli, one shot coding agent on the cloud](https://github.com/besimple-oss/broccoli)
* [2026-04-22, 16:07:56](https://news.ycombinator.com/item?id=47865622) - [Youth Suicides Declined After Creation of National Hotline](https://www.nytimes.com/2026/04/22/science/988-youth-suicides-decline.html)
* [2026-04-22, 16:00:00](https://hardware.slashdot.org/story/26/04/22/0422252/chinas-catl-reveals-621-mile-ev-battery-under-7-minute-charging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s CATL Reveals 621-Mile EV Battery, Under-7-Minute Charging](https://hardware.slashdot.org/story/26/04/22/0422252/chinas-catl-reveals-621-mile-ev-battery-under-7-minute-charging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 15:00:19](https://lobste.rs/s/fnvugl/using_llms_find_python_c_extension_bugs) - [Using LLMs to find Python C-extension bugs](https://lwn.net/SubscriberLink/1067234/e5312bed2037a102/)
* [2026-04-22, 15:00:00](https://yro.slashdot.org/story/26/04/22/0411248/pentagon-wants-54-billion-for-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Wants $54 Billion For Drones](https://yro.slashdot.org/story/26/04/22/0411248/pentagon-wants-54-billion-for-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 14:49:02](https://news.ycombinator.com/item?id=47864454) - [DuckDB 1.5.2 – SQL database that runs on laptop, server, in the browser](https://duckdb.org/2026/04/13/announcing-duckdb-152)
* [2026-04-22, 14:44:32](https://news.ycombinator.com/item?id=47864393) - [Scoring Show HN submissions for AI design patterns](https://www.adriankrebs.ch/blog/design-slop/)
* [2026-04-22, 14:02:30](https://lobste.rs/s/hkwyrc/edge_safe_rust) - [The Edge of Safe Rust](https://kyju.org/blog/tokioconf-2026/)
* [2026-04-22, 13:39:12](https://lobste.rs/s/5plavs/some_general_notes_on_network_booting) - [Some general notes on network booting UEFI machines](https://utcc.utoronto.ca/~cks/space/blog/tech/UEFINetworkBootNotes)
* [2026-04-22, 13:28:40](https://news.ycombinator.com/item?id=47863324) - [Ultraviolet corona discharges on treetops during storms](https://www.psu.edu/news/earth-and-mineral-sciences/story/treetops-glowing-during-storms-captured-film-first-time)
* [2026-04-22, 13:19:58](https://news.ycombinator.com/item?id=47863217) - [Qwen3.6-27B: Flagship-Level Coding in a 27B Dense Model](https://qwen.ai/blog?id=qwen3.6-27b)
* [2026-04-22, 12:51:17](https://lobste.rs/s/qetyqh/markdown_2004) - [Markdown (2004)](http://www.aaronsw.com/weblog/001189)
* [2026-04-22, 12:31:29](https://lobste.rs/s/zjceyu/github_actions_for_gleam_monorepo) - [GitHub Actions for a Gleam monorepo](https://crowdhailer.me/2026-04-21/github-actions-for-a-gleam-monorepo/)
* [2026-04-22, 12:30:14](https://news.ycombinator.com/item?id=47862626) - [Columnar Storage Is Normalization](https://buttondown.com/jaffray/archive/columnar-storage-is-normalization/)
* [2026-04-22, 12:17:43](https://lobste.rs/s/xs2xus/what_async_promised_what_it_delivered) - [What Async Promised and What it Delivered](https://causality.blog/essays/what-async-promised/)
* [2026-04-22, 12:15:29](https://news.ycombinator.com/item?id=47862497) - [Our eighth generation TPUs: two chips for the agentic era](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/)
* [2026-04-22, 12:09:00](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss) - [Sperm Whales Speak With a Complex Alphabet and Even Have ‘Vowels,’ Study Finds](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss)
* [2026-04-22, 12:04:30](https://news.ycombinator.com/item?id=47862386) - [3.4M Solar Panels](https://tech.marksblogg.com/american-solar-farms-v2.html)
* [2026-04-22, 11:58:58](https://news.ycombinator.com/item?id=47862331) - [GitHub CLI now collects pseudoanonymous telemetry](https://cli.github.com/telemetry)
* [2026-04-22, 11:34:24](https://lobste.rs/s/cs4kew/ai_as_fascist_artifact) - [AI as a Fascist Artifact](https://tante.cc/2026/04/21/ai-as-a-fascist-artifact/)
* [2026-04-22, 11:00:00](https://science.slashdot.org/story/26/04/22/0357247/mars-rover-detects-never-before-seen-organic-compounds-in-new-experiment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mars Rover Detects Never-Before-Seen Organic Compounds In New Experiment](https://science.slashdot.org/story/26/04/22/0357247/mars-rover-detects-never-before-seen-organic-compounds-in-new-experiment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 09:52:52](https://news.ycombinator.com/item?id=47861270) - [Windows 9x Subsystem for Linux](https://social.hails.org/@hailey/116446826733136456)
* [2026-04-22, 09:22:05](https://news.ycombinator.com/item?id=47861087) - [How does GPS work?](https://perthirtysix.com/how-the-heck-does-gps-work)
* [2026-04-22, 08:25:32](https://news.ycombinator.com/item?id=47860682) - [You don&apos;t need advice from editors on rejected manuscripts](https://twitter.com/orsonscottcard/status/2046702294406680751)
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
* [2026-04-21, 18:17:05](https://lobste.rs/s/ojh2aq/highlights_from_git_2_54) - [Highlights from Git 2.54](https://github.blog/open-source/git/highlights-from-git-2-54/)
* [2026-04-21, 18:00:00](https://developers.slashdot.org/story/26/04/21/1655253/googles-internal-politics-leave-it-playing-catch-up-on-ai-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Internal Politics Leave It Playing Catch-Up On AI Coding](https://developers.slashdot.org/story/26/04/21/1655253/googles-internal-politics-leave-it-playing-catch-up-on-ai-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 17:05:00](https://soylentnews.org/article.pl?sid=26/04/19/1338217&amp;from=rss) - [Europol Launches Operation PowerOFF — Warns 75,000 DDoS Users and Takes Down 53 Domains](https://soylentnews.org/article.pl?sid=26/04/19/1338217&amp;from=rss)
* [2026-04-21, 17:00:00](https://games.slashdot.org/story/26/04/21/1639222/xbox-game-pass-ultimate-gets-a-price-cut?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xbox Game Pass Ultimate Gets a Price Cut](https://games.slashdot.org/story/26/04/21/1639222/xbox-game-pass-ultimate-gets-a-price-cut?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 13:48:53](https://lobste.rs/s/ual4t5/grasp_simple_protocol_for_decentralized) - [grasp: a simple protocol for decentralized git](https://gitgrasp.com/)
* [2026-04-21, 12:19:00](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss) - [Soviet CDs and CD Players Existed, and They Were Strange](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss)
* [2026-04-21, 10:09:48](https://lobste.rs/s/xqmug2/what_is_your_go_project_for_learning_new) - [What is your go-to project for learning a new language?](https://lobste.rs/s/xqmug2/what_is_your_go_project_for_learning_new)
* [2026-04-21, 07:32:00](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss) - [Chinese Carmaker Patents Voice-Controlled &apos;in-Vehicle Toilet&apos;](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss)
* [2026-04-21, 02:47:00](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss) - [In the Face of Rampant AI, is ‘Data Poisoning’ a New Form of Civil Disobedience?](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss)
* [2026-04-20, 23:35:06](https://news.ycombinator.com/item?id=47842569) - [Making RAM at Home [video]](https://www.youtube.com/watch?v=h6GWikWlAQA)
* [2026-04-20, 22:02:00](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss) - [The Quiet Colossus](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss)
* [2026-04-20, 21:00:43](https://news.ycombinator.com/item?id=47840618) - [Who Killed the Florida Orange?](https://slate.com/business/2026/04/florida-state-orange-food-houses-real-estate.html)
* [2026-04-20, 17:58:13](https://news.ycombinator.com/item?id=47838134) - [Anonymous credentials: an illustrated primer (Part 2)](https://blog.cryptographyengineering.com/2026/04/17/anonymous-credentials-an-illustrated-primer-part-2/)
* [2026-04-20, 17:16:00](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss) - [How Much Does Chatbot Bias Influence Users? A Lot, It Turns Out](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss)
* [2026-04-20, 12:29:00](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss) - [Russia Hits European Thermal Power Plant in Attempted ‘Destructive’ Cyberattack](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss)
* [2026-04-20, 07:43:00](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss) - [How Two Motorola Transistors Became the World&apos;s Default NPNs](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss)
* [2026-04-20, 03:01:00](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss) - [10 Math Books That Sharpen Your Thinking](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss)
* [2026-04-19, 22:16:00](https://soylentnews.org/article.pl?sid=26/04/18/2348241&amp;from=rss) - [“TotalRecall Reloaded” Tool Finds a Side Entrance to the Windows 11 Recall Database](https://soylentnews.org/article.pl?sid=26/04/18/2348241&amp;from=rss)
* [2026-04-19, 17:34:00](https://soylentnews.org/article.pl?sid=26/04/18/195238&amp;from=rss) - [Pentagon Reportedly Asks Detroit to Use More Car Factories as Arms Factories](https://soylentnews.org/article.pl?sid=26/04/18/195238&amp;from=rss)
* [2026-04-19, 15:19:28](https://news.ycombinator.com/item?id=47824943) - [5x5 Pixel font for tiny screens](https://maurycyz.com/projects/mcufont/)
* [2026-04-19, 12:51:00](https://soylentnews.org/article.pl?sid=26/04/18/192211&amp;from=rss) - [The \&quot;Passive Income\&quot; Trap Ate a Generation of Entrepreneurs](https://soylentnews.org/article.pl?sid=26/04/18/192211&amp;from=rss)
* [2026-04-19, 08:03:00](https://soylentnews.org/article.pl?sid=26/04/18/1855201&amp;from=rss) - [Why the Phrase &apos;Super El Niño&apos; Makes Australian Climate Scientists Roll Their Eyes](https://soylentnews.org/article.pl?sid=26/04/18/1855201&amp;from=rss)
* [2026-04-19, 03:14:00](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss) - [Irish Bog Plant Revives Ancient Remedy as a New Weapon Vs Superbugs](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss)
* [2026-04-18, 22:26:00](https://soylentnews.org/article.pl?sid=26/04/17/0348237&amp;from=rss) - [Netgear Routers Seemingly Won&apos;t be Banned in the US After All](https://soylentnews.org/article.pl?sid=26/04/17/0348237&amp;from=rss)
* [2026-04-18, 17:42:00](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss) - [Scientists Invented a Fake Disease. AI Told People It Was Real](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss)
* [2026-04-18, 12:54:00](https://soylentnews.org/article.pl?sid=26/04/17/0336248&amp;from=rss) - [Online Response to the Attack on Sam Altman&apos;s House Shows a Generational Divide](https://soylentnews.org/article.pl?sid=26/04/17/0336248&amp;from=rss)
* [2026-04-18, 08:12:00](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss) - [Meet Orpheus—a Hopper Mission Built to Hunt for Life in Martian Volcanoes](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss)
* [2026-04-18, 03:30:00](https://soylentnews.org/article.pl?sid=26/04/17/0318245&amp;from=rss) - [IPv6 Adoption Reaches 50% - The Long Journey Toward Internet&apos;s Next Generation](https://soylentnews.org/article.pl?sid=26/04/17/0318245&amp;from=rss)
* [2026-04-18, 02:26:57](https://news.ycombinator.com/item?id=47812649) - [Bodega cats of New York](https://bodegacatsofnewyork.com)
