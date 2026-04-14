# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Emerging Technologies

* [Two Months After I Gave an AI $100 and No Instructions](https://www.sebastian-jais.de/blog/two-months-alma-experiment) ([Comments](https://news.ycombinator.com/item?id=47765458))

* [Stanford Report Highlights Growing Disconnect Between AI Insiders and Everyone Else](https://slashdot.org/story/26/04/14/0038207/stanford-report-highlights-growing-disconnect-between-ai-insiders-and-everyone-else?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47760764))

* [Anthropic Asks Christian Leaders for Help Steering Claude's Spiritual Development](https://slashdot.org/story/26/04/13/0156227/anthropic-asks-christian-leaders-for-help-steering-claudes-spiritual-development?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47760529))

* [Multi-Agentic Software Development Is a Distributed Systems Problem](https://kirancodes.me/posts/log-distributed-llms.html) ([Comments](https://news.ycombinator.com/item?id=47761625))

## Open Source and Software Development

* [The exponential curve behind open source backlogs](https://armanckeser.com/writing/jellyfin-flow) ([Comments](https://news.ycombinator.com/item?id=47764265))

* [Modifying FileZilla to Workaround Bambu 3D Printer's FTP Issue](https://lantian.pub/en/article/modify-computer/modify-filezilla-workaround-bambu-3d-printer-ftp-issue.lantian/) ([Comments](https://lobste.rs/s/nabvvv/modifying_filezilla_workaround_bambu_3d))

* [sem: Semantic version control CLI](https://github.com/Ataraxy-Labs/sem) ([Comments](https://lobste.rs/s/iw7kz1/sem_semantic_version_control_cli))

* [Lean proved this program correct; then I found a bug](https://kirancodes.me/posts/log-who-watches-the-watchers.html) ([Comments](https://news.ycombinator.com/item?id=47759709))

* [GitHub Stacked PRs](https://github.github.com/gh-stack/) ([Comments](https://lobste.rs/s/xr9g5d/github_stacked_prs))

## Cybersecurity and Data Breaches

* [Ransomware Is Growing Three Times Faster Than the Spending Meant to Stop It](https://ciphercue.com/blog/ransomware-claims-grew-faster-than-security-spend-2025) ([Comments](https://news.ycombinator.com/item?id=47762994))

* [Someone bought 30 WordPress plugins and planted a backdoor in all of them](https://anchor.host/someone-bought-30-wordpress-plugins-and-planted-a-backdoor-in-all-of-them/) ([Comments](https://news.ycombinator.com/item?id=47755629))

* [A new spam policy for “back button hijacking”](https://developers.google.com/search/blog/2026/04/back-button-hijacking) ([Comments](https://news.ycombinator.com/item?id=47760764))

## Tech Innovations and Releases

* [DaVinci Resolve – Photo](https://www.blackmagicdesign.com/products/davinciresolve/photo) ([Comments](https://news.ycombinator.com/item?id=47760529))

* [Startup Secures $30 Million Contract to 3D Print Jet Engines for the USAF](https://soylentnews.org/article.pl?sid=26/04/12/170200&from=rss) ([Comments](https://news.ycombinator.com/item?id=47765458))

* [NimConf 2026: Dates Announced, Registrations Open](https://nim-lang.org/blog/2026/04/07/nimconf-2026.html) ([Comments](https://news.ycombinator.com/item?id=47764098))

* [Apple AI Glasses Will Rival Meta's With Several Styles, Oval Cameras](https://apple.slashdot.org/story/26/04/13/215252/apple-ai-glasses-will-rival-metas-with-several-styles-oval-cameras?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://lobste.rs/s/hedf1w/rust_should_have_stable_tail_calls))

## Technology in Society

* [Air Force Pushed Out UFO Investigator](https://entertainment.slashdot.org/story/26/04/14/013232/air-force-pushed-out-ufo-investigator?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47764098))

* [US appeals court declares 158-year-old home distilling ban unconstitutional](https://nypost.com/2026/04/11/us-news/us-appeals-court-declares-158-year-old-home-distilling-ban-unconstitutional/) ([Comments](https://news.ycombinator.com/item?id=47751781))

* [Maine Set To Become First State With Data Center Ban](https://yro.slashdot.org/story/26/04/13/0335254/maine-set-to-become-first-state-with-data-center-ban?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47760529))

## Science and Exploration

* [Standard Model of Particle Physics Verified to One Trillionth Accuracy](https://soylentnews.org/article.pl?sid=26/04/10/0256206&from=rss) ([Comments](https://news.ycombinator.com/item?id=47728970))

* [Little Snitch for Linux Released!](https://soylentnews.org/article.pl?sid=26/04/11/0355254&from=rss) ([Comments](https://news.ycombinator.com/item?id=47751981))

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

* [2026-04-14, 13:46:31](https://news.ycombinator.com/item?id=47765604) - [Rare concert records going on Internet Archive](https://techcrunch.com/2026/04/13/thousands-of-rare-concert-recordings-are-landing-on-the-internet-archive-listen-now/)
* [2026-04-14, 13:34:24](https://news.ycombinator.com/item?id=47765458) - [Two Months After I Gave an AI $100 and No Instructions](https://www.sebastian-jais.de/blog/two-months-alma-experiment)
* [2026-04-14, 13:04:11](https://lobste.rs/s/nabvvv/modifying_filezilla_workaround_bambu_3d) - [Modifying FileZilla to Workaround Bambu 3D Printer&apos;s FTP Issue](https://lantian.pub/en/article/modify-computer/modify-filezilla-workaround-bambu-3d-printer-ftp-issue.lantian/)
* [2026-04-14, 12:30:43](https://lobste.rs/s/abl7vj/embed_you_ponyc_for_great_good) - [Embed You a ponyc for Great Good](https://www.ponylang.io/blog/2026/04/embed-you-a-ponyc-for-great-good/)
* [2026-04-14, 11:37:56](https://news.ycombinator.com/item?id=47764265) - [The exponential curve behind open source backlogs](https://armanckeser.com/writing/jellyfin-flow)
* [2026-04-14, 11:34:55](https://lobste.rs/s/dl4jb6/dependency_cooldowns_turn_you_into_free) - [Dependency cooldowns turn you into a free-rider](https://calpaterson.com/deps.html)
* [2026-04-14, 11:26:25](https://news.ycombinator.com/item?id=47764164) - [The Case Against Gameplay Loops](https://blog.joeyschutz.com/the-case-against-gameplay-loops/)
* [2026-04-14, 11:19:10](https://news.ycombinator.com/item?id=47764098) - [NimConf 2026: Dates Announced, Registrations Open](https://nim-lang.org/blog/2026/04/07/nimconf-2026.html)
* [2026-04-14, 11:04:21](https://lobste.rs/s/hedf1w/rust_should_have_stable_tail_calls) - [Rust should have stable tail calls](https://trifectatech.org/blog/tail-calls-project-goal/)
* [2026-04-14, 11:00:00](https://entertainment.slashdot.org/story/26/04/14/013232/air-force-pushed-out-ufo-investigator?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Air Force Pushed Out UFO Investigator](https://entertainment.slashdot.org/story/26/04/14/013232/air-force-pushed-out-ufo-investigator?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 10:56:57](https://lobste.rs/s/bvuhnp/120_icons_counting) - [120+ Icons and Counting](https://blog.jimmac.eu/posts/app-icon-requests/)
* [2026-04-14, 10:33:39](https://news.ycombinator.com/item?id=47763759) - [What is jj and why should I care?](https://steveklabnik.github.io/jujutsu-tutorial/introduction/what-is-jj-and-why-should-i-care.html)
* [2026-04-14, 09:12:00](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss) - [Linux Kernel Maintainers Are Following Through on Removing Intel 486 Support](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss)
* [2026-04-14, 09:08:18](https://lobste.rs/s/fsudf4/claude_code_s_source_3_167_line_function) - [Claude Code&apos;s Source: 3,167-Line Function, Regex Sentiment](https://techtrenches.dev/p/the-snake-that-ate-itself-what-claude)
* [2026-04-14, 08:54:44](https://lobste.rs/s/iw7kz1/sem_semantic_version_control_cli) - [sem: Semantic version control CLI](https://github.com/Ataraxy-Labs/sem)
* [2026-04-14, 08:52:12](https://news.ycombinator.com/item?id=47762994) - [Ransomware Is Growing Three Times Faster Than the Spending Meant to Stop It](https://ciphercue.com/blog/ransomware-claims-grew-faster-than-security-spend-2025)
* [2026-04-14, 08:30:27](https://news.ycombinator.com/item?id=47762864) - [Backblaze has stopped backing up your data](https://rareese.com/posts/backblaze/)
* [2026-04-14, 07:57:33](https://news.ycombinator.com/item?id=47762641) - [Introspective Diffusion Language Models](https://introspective-diffusion.github.io/)
* [2026-04-14, 07:40:30](https://lobste.rs/s/fj8fzm/5nf_database_design) - [5NF and Database Design](https://kb.databasedesignbook.com/posts/5nf/)
* [2026-04-14, 07:27:57](https://lobste.rs/s/iiykct/razor1911_razor1911) - [Razor1911 – Razor1911](https://www.youtube.com/watch?v=2AnbYNudAyM)
* [2026-04-14, 07:00:00](https://news.slashdot.org/story/26/04/14/0044242/weatherbug-data-says-october-8-is-the-real-perfect-date?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WeatherBug Data Says October 8 Is the Real Perfect Date](https://news.slashdot.org/story/26/04/14/0044242/weatherbug-data-says-october-8-is-the-real-perfect-date?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 06:31:44](https://news.ycombinator.com/item?id=47761997) - [Distributed DuckDB Instance](https://github.com/citguru/openduck)
* [2026-04-14, 05:46:49](https://news.ycombinator.com/item?id=47761723) - [MOS tech 6502 8-bit microprocessor in pure SQL powered by Postgres](https://github.com/lasect/pg_6502)
* [2026-04-14, 05:32:48](https://news.ycombinator.com/item?id=47761625) - [Multi-Agentic Software Development Is a Distributed Systems Problem](https://kirancodes.me/posts/log-distributed-llms.html)
* [2026-04-14, 05:24:38](https://lobste.rs/s/qqfsfo/moonbit_0_9_introducing_first_class) - [MoonBit 0.9: Introducing First-Class Formal Verification](https://www.moonbitlang.com/blog/moonbit-0-9-release)
* [2026-04-14, 04:29:00](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss) - [Startup Secures $30 Million Contract to 3D Print Jet Engines for the USAF](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss)
* [2026-04-14, 03:30:00](https://slashdot.org/story/26/04/14/0038207/stanford-report-highlights-growing-disconnect-between-ai-insiders-and-everyone-else?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stanford Report Highlights Growing Disconnect Between AI Insiders and Everyone Else](https://slashdot.org/story/26/04/14/0038207/stanford-report-highlights-growing-disconnect-between-ai-insiders-and-everyone-else?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 03:09:12](https://lobste.rs/s/mrlfu8/tracking_down_25_regression_on_llvm_risc_v) - [Tracking down a 25% Regression on LLVM RISC-V](https://blog.kaving.me/blog/tracking-down-a-25-regression-on-llvm-risc-v/)
* [2026-04-14, 03:06:27](https://news.ycombinator.com/item?id=47760764) - [A new spam policy for “back button hijacking”](https://developers.google.com/search/blog/2026/04/back-button-hijacking)
* [2026-04-14, 02:31:46](https://lobste.rs/s/gvgrij/no_one_can_force_me_have_secure_website) - [No one can force me to have a secure website](https://tom7.org/httpv/httpv.pdf)
* [2026-04-14, 02:25:15](https://news.ycombinator.com/item?id=47760529) - [DaVinci Resolve – Photo](https://www.blackmagicdesign.com/products/davinciresolve/photo)
* [2026-04-14, 00:25:08](https://news.ycombinator.com/item?id=47759709) - [Lean proved this program correct; then I found a bug](https://kirancodes.me/posts/log-who-watches-the-watchers.html)
* [2026-04-13, 23:44:00](https://soylentnews.org/article.pl?sid=26/04/12/1524251&amp;from=rss) - [Human Echolocation Works Step by Step](https://soylentnews.org/article.pl?sid=26/04/12/1524251&amp;from=rss)
* [2026-04-13, 23:33:18](https://news.ycombinator.com/item?id=47759341) - [WiiFin – Jellyfin Client for Nintendo Wii](https://github.com/fabienmillet/WiiFin)
* [2026-04-13, 23:23:31](https://lobste.rs/s/ucjode/microsoft_exec_suggests_ai_agents_will) - [Microsoft exec suggests AI agents will need to buy software licenses, just like employees](https://www.businessinsider.com/microsoft-executive-suggests-ai-agents-buy-software-licenses-seats-2026-4)
* [2026-04-13, 23:00:00](https://apple.slashdot.org/story/26/04/13/215252/apple-ai-glasses-will-rival-metas-with-several-styles-oval-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple AI Glasses Will Rival Meta&apos;s With Several Styles, Oval Cameras](https://apple.slashdot.org/story/26/04/13/215252/apple-ai-glasses-will-rival-metas-with-several-styles-oval-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 22:00:00](https://slashdot.org/story/26/04/13/2056254/hollywood-stars-sign-open-letter-protesting-paramount-warner-bros-merger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hollywood Stars Sign Open Letter Protesting Paramount-Warner Bros Merger](https://slashdot.org/story/26/04/13/2056254/hollywood-stars-sign-open-letter-protesting-paramount-warner-bros-merger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 21:05:39](https://lobste.rs/s/xr9g5d/github_stacked_prs) - [GitHub Stacked PRs](https://github.github.com/gh-stack/)
* [2026-04-13, 21:00:00](https://yro.slashdot.org/story/26/04/13/2037240/fbi-raids-texas-home-of-man-suspected-of-firebombing-sam-altmans-sf-mansion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Raids Texas Home of Man Suspected of Firebombing Sam Altman&apos;s SF Mansion](https://yro.slashdot.org/story/26/04/13/2037240/fbi-raids-texas-home-of-man-suspected-of-firebombing-sam-altmans-sf-mansion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 20:36:49](https://news.ycombinator.com/item?id=47757495) - [GitHub Stacked PRs](https://github.github.com/gh-stack/)
* [2026-04-13, 20:00:00](https://yro.slashdot.org/story/26/04/13/1930253/meta-is-warned-that-facial-recognition-glasses-will-arm-sexual-predators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Warned That Facial Recognition Glasses Will Arm Sexual Predators](https://yro.slashdot.org/story/26/04/13/1930253/meta-is-warned-that-facial-recognition-glasses-will-arm-sexual-predators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 19:24:49](https://lobste.rs/s/uqhwj1/how_make_firefox_builds_17_faster) - [How to make Firefox builds 17% faster](https://blog.farre.se/posts/2026/04/10/caching-webidl-codegen/)
* [2026-04-13, 19:00:00](https://linux.slashdot.org/story/26/04/13/1857240/linux-70-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux 7.0 Released](https://linux.slashdot.org/story/26/04/13/1857240/linux-70-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 18:56:34](https://lobste.rs/s/fxh7ma/can_we_finally_use_c_modules_2026) - [Can we finally use C++ Modules in 2026?](https://mropert.github.io/2026/04/13/modules_in_2026/)
* [2026-04-13, 18:54:00](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss) - [OpenAI Backs Bill That Would Limit Liability for AI-Enabled Mass Deaths or Financial Disasters](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss)
* [2026-04-13, 18:00:00](https://it.slashdot.org/story/26/04/13/1653212/bookingcom-hit-by-data-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Booking.com Hit By Data Breach](https://it.slashdot.org/story/26/04/13/1653212/bookingcom-hit-by-data-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 17:54:39](https://news.ycombinator.com/item?id=47755629) - [Someone bought 30 WordPress plugins and planted a backdoor in all of them](https://anchor.host/someone-bought-30-wordpress-plugins-and-planted-a-backdoor-in-all-of-them/)
* [2026-04-13, 17:38:21](https://lobste.rs/s/n6j8tr/hybrid_constructions_post_quantum) - [Hybrid Constructions: The Post-Quantum Safety Blanket](https://soatok.blog/2026/04/13/hybrid-constructions-the-post-quantum-safety-blanket/)
* [2026-04-13, 17:00:00](https://meta.slashdot.org/story/26/04/13/1642228/mark-zuckerberg-is-reportedly-building-an-ai-clone-to-replace-him-in-meetings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Is Reportedly Building an AI Clone To Replace Him In Meetings](https://meta.slashdot.org/story/26/04/13/1642228/mark-zuckerberg-is-reportedly-building-an-ai-clone-to-replace-him-in-meetings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 16:28:30](https://lobste.rs/s/9muqc5/debloat_your_async_rust) - [Debloat your async Rust](https://tweedegolf.nl/en/blog/235/debloat-your-async-rust)
* [2026-04-13, 16:04:27](https://lobste.rs/s/wwr6zu/lean_proved_this_program_was_correct_then) - [Lean proved this program was correct; then I found a bug](https://kirancodes.me/posts/log-who-watches-the-watchers.html)
* [2026-04-13, 16:00:00](https://yro.slashdot.org/story/26/04/13/0335254/maine-set-to-become-first-state-with-data-center-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Maine Set To Become First State With Data Center Ban](https://yro.slashdot.org/story/26/04/13/0335254/maine-set-to-become-first-state-with-data-center-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 15:31:06](https://news.ycombinator.com/item?id=47753472) - [Nothing Ever Happens: Polymarket bot that always buys No on non-sports markets](https://github.com/sterlingcrispin/nothing-ever-happens)
* [2026-04-13, 15:12:52](https://lobste.rs/s/pvawq1/configuration_flags_are_where_software) - [Configuration flags are where software goes to rot](https://00f.net/2026/04/11/config-flags/)
* [2026-04-13, 15:00:00](https://slashdot.org/story/26/04/13/0330204/californians-sue-over-ai-tool-that-records-doctor-visits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Californians Sue Over AI Tool That Records Doctor Visits](https://slashdot.org/story/26/04/13/0330204/californians-sue-over-ai-tool-that-records-doctor-visits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 14:48:55](https://news.ycombinator.com/item?id=47752819) - [Make tmux pretty and usable (2024)](https://hamvocke.com/blog/a-guide-to-customizing-your-tmux-conf/)
* [2026-04-13, 14:11:00](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss) - [Intel Introduces its Own Neural Compression Technology With a Fallback Mode That Works on All GPUs](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss)
* [2026-04-13, 13:42:04](https://lobste.rs/s/f8vyzy/servo_0_1_0_first_lts_version_is_now) - [Servo 0.1.0 (first LTS version) is now available on crates.io](https://servo.org/blog/2026/04/13/servo-0.1.0-release/)
* [2026-04-13, 13:37:33](https://news.ycombinator.com/item?id=47751781) - [US appeals court declares 158-year-old home distilling ban unconstitutional](https://nypost.com/2026/04/11/us-news/us-appeals-court-declares-158-year-old-home-distilling-ban-unconstitutional/)
* [2026-04-13, 13:18:10](https://lobste.rs/s/xcurde/little_latex_pearls) - [Little LaTeX Pearls](https://ionathan.ch/2026/04/08/LaTeX.html)
* [2026-04-13, 11:43:10](https://lobste.rs/s/sslbph/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/sslbph/what_are_you_doing_this_week)
* [2026-04-13, 11:34:00](https://developers.slashdot.org/story/26/04/12/2225245/will-some-programmers-become-ai-babysitters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Some Programmers Become &apos;AI Babysitters&apos;?](https://developers.slashdot.org/story/26/04/12/2225245/will-some-programmers-become-ai-babysitters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 10:30:59](https://lobste.rs/s/rnx6fh/all_elementary_functions_from_single) - [All elementary functions from a single binary operator](https://arxiv.org/abs/2603.21852)
* [2026-04-13, 09:24:00](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss) - [Cloudflare and GoDaddy Team Up to Curb AI Bot Brigades](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss)
* [2026-04-13, 07:34:00](https://slashdot.org/story/26/04/13/0156227/anthropic-asks-christian-leaders-for-help-steering-claudes-spiritual-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Asks Christian Leaders for Help Steering Claude&apos;s Spiritual Development](https://slashdot.org/story/26/04/13/0156227/anthropic-asks-christian-leaders-for-help-steering-claudes-spiritual-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 05:53:07](https://lobste.rs/s/eqawpx/did_you_notice_command_error_exit_shell) - [Did you notice the command error exit in the shell?](https://monzool.net/blog/2026/04/10/error-banner-in-shell/)
* [2026-04-13, 04:35:00](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss) - [Little Snitch for Linux Released!](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss)
* [2026-04-13, 03:34:00](https://yro.slashdot.org/story/26/04/13/0219250/sam-altmans-home-targeted-a-second-time-two-suspects-arrested?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Altman&apos;s Home Targeted a Second Time, Two Suspects Arrested](https://yro.slashdot.org/story/26/04/13/0219250/sam-altmans-home-targeted-a-second-time-two-suspects-arrested?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 23:48:00](https://soylentnews.org/article.pl?sid=26/04/11/0321245&amp;from=rss) - [&apos;Dead End&apos;: Radical 20-Year Study Reveals Genetic Cloning Hits a Limit](https://soylentnews.org/article.pl?sid=26/04/11/0321245&amp;from=rss)
* [2026-04-12, 19:02:00](https://soylentnews.org/article.pl?sid=26/04/11/0313203&amp;from=rss) - [Tech Industry Lays Off Nearly 80,000 Employees in the First Quarter of 2026 (Almost 50% Due to AI)](https://soylentnews.org/article.pl?sid=26/04/11/0313203&amp;from=rss)
* [2026-04-12, 14:15:00](https://soylentnews.org/article.pl?sid=26/04/11/037238&amp;from=rss) - [Dad Stuck in Support Nightmare After Teen Lied About Age on Discord](https://soylentnews.org/article.pl?sid=26/04/11/037238&amp;from=rss)
* [2026-04-12, 09:33:00](https://soylentnews.org/article.pl?sid=26/04/11/0256207&amp;from=rss) - [Federal Cyber Experts Called Microsoft&apos;s Cloud a “Pile of Sh*T,” Approved It Anyway](https://soylentnews.org/article.pl?sid=26/04/11/0256207&amp;from=rss)
* [2026-04-12, 04:44:00](https://soylentnews.org/article.pl?sid=26/04/11/0245252&amp;from=rss) - [3D Printing a Motor--Some First Steps](https://soylentnews.org/article.pl?sid=26/04/11/0245252&amp;from=rss)
* [2026-04-12, 00:03:00](https://soylentnews.org/article.pl?sid=26/04/11/0242235&amp;from=rss) - [This New &apos;Laughing Rat&apos; Malware Will Steal Your Data, Hack Your Systems, and Laugh at You](https://soylentnews.org/article.pl?sid=26/04/11/0242235&amp;from=rss)
* [2026-04-11, 19:18:00](https://soylentnews.org/article.pl?sid=26/04/10/0259257&amp;from=rss) - [EFF is Leaving X](https://soylentnews.org/article.pl?sid=26/04/10/0259257&amp;from=rss)
* [2026-04-11, 14:35:00](https://soylentnews.org/article.pl?sid=26/04/10/0256206&amp;from=rss) - [Standard Model of Particle Physics Verified to One Trillionth Accuracy](https://soylentnews.org/article.pl?sid=26/04/10/0256206&amp;from=rss)
* [2026-04-11, 09:50:00](https://soylentnews.org/article.pl?sid=26/04/10/0254231&amp;from=rss) - [Toward Cheaper, Cleaner Hydrogen Production](https://soylentnews.org/article.pl?sid=26/04/10/0254231&amp;from=rss)
* [2026-04-11, 09:20:45](https://news.ycombinator.com/item?id=47728970) - [Write less code, be more responsible](https://blog.orhun.dev/code-responsibly/)
* [2026-04-11, 05:09:00](https://soylentnews.org/article.pl?sid=26/04/10/0250211&amp;from=rss) - [Honda Hits Brakes On EV Rollout Amid Rising Losses](https://soylentnews.org/article.pl?sid=26/04/10/0250211&amp;from=rss)
* [2026-04-11, 00:27:00](https://soylentnews.org/article.pl?sid=26/04/10/0248230&amp;from=rss) - [Ancient Rocks Reveal Evidence of the First Continents and Crust Recycling Processes on Earth](https://soylentnews.org/article.pl?sid=26/04/10/0248230&amp;from=rss)
* [2026-04-10, 22:23:03](https://news.ycombinator.com/item?id=47724408) - [The Great Majority: Body Snatching and Burial Reform in 19th-Century Britain](https://publicdomainreview.org/essay/the-great-majority/)
* [2026-04-10, 19:36:00](https://soylentnews.org/article.pl?sid=26/04/09/067240&amp;from=rss) - [Adobe Secretly Modifies Your Hosts File for the Stupidest Reason](https://soylentnews.org/article.pl?sid=26/04/09/067240&amp;from=rss)
* [2026-04-10, 19:33:08](https://news.ycombinator.com/item?id=47722629) - [Franklin&apos;s bad ads for Apple ][ clones and the beloved impersonator they depict](https://buttondown.com/suchbadtechads/archive/franklin-ace-1000/)
* [2026-04-10, 14:53:00](https://soylentnews.org/article.pl?sid=26/04/09/065206&amp;from=rss) - [Debian’s APT 3.2 Released with History, Undo, Redo, and Rollback Support](https://soylentnews.org/article.pl?sid=26/04/09/065206&amp;from=rss)
* [2026-04-10, 13:59:26](https://news.ycombinator.com/item?id=47718284) - [Design and implementation of DuckDB internals](https://duckdb.org/library/design-and-implementation-of-duckdb-internals/)
* [2026-04-10, 12:37:27](https://news.ycombinator.com/item?id=47717192) - [The acyclic e-graph: Cranelift&apos;s mid-end optimizer](https://cfallin.org/blog/2026/04/09/aegraph/)
* [2026-04-10, 10:07:00](https://soylentnews.org/article.pl?sid=26/04/08/1917256&amp;from=rss) - [Researchers Discover How to Dampen Electronic Noise Using Nanowires](https://soylentnews.org/article.pl?sid=26/04/08/1917256&amp;from=rss)
* [2026-04-10, 07:28:29](https://news.ycombinator.com/item?id=47714770) - [Show HN: Run GUIs as Scripts](https://github.com/skinnyjames/hokusai-pocket)
* [2026-04-10, 05:23:00](https://soylentnews.org/article.pl?sid=26/04/08/1916208&amp;from=rss) - [White House Seeks Deep NASA Cuts as Artemis II Breaks Spaceflight Record](https://soylentnews.org/article.pl?sid=26/04/08/1916208&amp;from=rss)
* [2026-04-10, 00:37:00](https://soylentnews.org/article.pl?sid=26/04/08/1912232&amp;from=rss) - [&apos;Voorhees Law&apos; Explains Why the Slower Car Often Catches up](https://soylentnews.org/article.pl?sid=26/04/08/1912232&amp;from=rss)
