# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [5NF and Database Design](https://kb.databasedesignbook.com/posts/5nf/) ([Comments](https://news.ycombinator.com/item?id=47767676)) - Delve into database normalization and the fifth normal form for system optimization.

* [Zig 0.16.0 Release Notes](https://ziglang.org/download/0.16.0/release-notes.html) ([Comments](https://lobste.rs/s/4vvozb/zig_0_16_0_release_notes)) - The Zig programming language introduces new updates, enhancements, and features.

* [Unlocking the power of Ark VCS for game development](https://ark-vcs.com/) ([Comments](https://lobste.rs/s/1fwhvf/ark_vcs_version_control_for_games)) - Meet Ark VCS, a version control tool designed specifically for game projects.

* [Rust should have stable tail calls](https://trifectatech.org/blog/tail-calls-project-goal/) ([Comments](https://lobste.rs/s/hedf1w/rust_should_have_stable_tail_calls)) - A case is made for adding stable tail call support to Rust programming language.

## AI and Programming

* [Introspective Diffusion Language Models](https://introspective-diffusion.github.io/) ([Comments](https://news.ycombinator.com/item?id=47762641)) - An innovative approach to language models developed using introspective diffusion methods.

* [Microsoft Exec on AI Licensing](https://www.businessinsider.com/microsoft-executive-suggests-ai-agents-buy-software-licenses-seats-2026-4) ([Comments](https://lobste.rs/s/ucjode/microsoft_exec_suggests_ai_agents_will)) - A Microsoft executive predicts that AI agents might need to purchase software licenses akin to employees.

## Science and Space

* [A New Computer Chip Could Finally Withstand the Hellscape of Venus](https://science.slashdot.org/story/26/04/14/0356227/a-new-computer-chip-could-finally-withstand-the-hellscape-of-venus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47766550)) - Engineers develop a robust computer chip that could endure Venus’s extreme conditions.

* [Startup Secures $30 Million Contract to 3D Print Jet Engines for the USAF](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss)) - A game-changing development as a startup receives funding to 3D-print jet engines for military applications.

## Privacy and Digital Freedoms

* [EFF is Leaving X](https://soylentnews.org/article.pl?sid=26/04/10/0259257&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/04/10/0259257&amp;from=rss)) - The Electronic Frontier Foundation announces its decision to leave 'X', amidst concerns over digital freedoms.

* [Someone bought 30 WordPress plugins and planted a backdoor in all of them](https://anchor.host/someone-bought-30-wordpress-plugins-and-planted-a-backdoor-in-all-of-them/) ([Comments](https://news.ycombinator.com/item?id=47755629)) - Analysis of a disturbing cybersecurity breach involving WordPress plugins.

## Sustainability and Environment

* [For the first time in the U.S., renewables generate more power than natural gas](https://e360.yale.edu/digest/us-renewables-natural-gas-coal) ([Comments](https://news.ycombinator.com/item?id=47767160)) - A pivotal moment for renewable energy as it surpasses natural gas power generation in the U.S.

## Open Source and Community

* [Rare concert recordings are landing on the Internet Archive](https://techcrunch.com/2026/04/13/thousands-of-rare-concert-recordings-are-landing-on-the-internet-archive-listen-now/) ([Comments](https://news.ycombinator.com/item?id=47765604)) - Thousands of rare concert recordings are available for streaming, hosted by the Internet Archive.

* [Maine Set To Become First State With Data Center Ban](https://yro.slashdot.org/story/26/04/13/0335254/maine-set-to-become-first-state-with-data-center-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://yro.slashdot.org/story/26/04/13/0335254/maine-set-to-become-first-state-with-data-center-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - Maine's ground-breaking legislative steps to restrict data center operations.

* [Lean proved this program correct; then I found a bug](https://kirancodes.me/posts/log-who-watches-the-watchers.html) ([Comments](https://news.ycombinator.com/item?id=47759709)) - Discover how a verified program still contained an unexpected bug.

## Entertainment and Culture

* [Let’s Talk Space Toilets](https://mceglowski.substack.com/p/lets-talk-space-toilets) ([Comments](https://news.ycombinator.com/item?id=47758870)) - A humorous yet informative dive into the potential future of space exploration hygiene.

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

* [2026-04-14, 16:22:49](https://news.ycombinator.com/item?id=47767676) - [5NF and Database Design](https://kb.databasedesignbook.com/posts/5nf/)
* [2026-04-14, 16:15:51](https://lobste.rs/s/4vvozb/zig_0_16_0_release_notes) - [Zig 0.16.0 Release Notes](https://ziglang.org/download/0.16.0/release-notes.html)
* [2026-04-14, 16:13:26](https://lobste.rs/s/ko3ur4/faith_based_computing_versus_unnatural) - [Faith-based computing versus the unnatural science](https://queue.acm.org/detail.cfm?id=3806209)
* [2026-04-14, 16:00:00](https://yro.slashdot.org/story/26/04/14/048209/google-faces-mass-arbitration-by-advertisers-seeking-billions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Faces Mass Arbitration By Advertisers Seeking Billions](https://yro.slashdot.org/story/26/04/14/048209/google-faces-mass-arbitration-by-advertisers-seeking-billions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 15:44:15](https://news.ycombinator.com/item?id=47767160) - [For the first time in the U.S., renewables generate more power than natural gas](https://e360.yale.edu/digest/us-renewables-natural-gas-coal)
* [2026-04-14, 15:42:48](https://news.ycombinator.com/item?id=47767143) - [The Fediverse deserves a dumb graphical client](https://adele.pages.casa/md/blog/the-fediverse-deserves-a-dumb-graphical-client.md)
* [2026-04-14, 15:10:25](https://lobste.rs/s/1fwhvf/ark_vcs_version_control_for_games) - [Ark VCS - Version Control For Games](https://ark-vcs.com/)
* [2026-04-14, 15:00:45](https://news.ycombinator.com/item?id=47766550) - [The future of everything is lies, I guess: Work](https://aphyr.com/posts/418-the-future-of-everything-is-lies-i-guess-work)
* [2026-04-14, 15:00:00](https://science.slashdot.org/story/26/04/14/0356227/a-new-computer-chip-could-finally-withstand-the-hellscape-of-venus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A New Computer Chip Could Finally Withstand The Hellscape of Venus](https://science.slashdot.org/story/26/04/14/0356227/a-new-computer-chip-could-finally-withstand-the-hellscape-of-venus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 14:48:46](https://news.ycombinator.com/item?id=47766370) - [Show HN: LangAlpha – what if Claude Code was built for Wall Street?](https://github.com/ginlix-ai/langalpha)
* [2026-04-14, 14:02:00](https://soylentnews.org/article.pl?sid=26/04/12/173259&amp;from=rss) - [Tea: A Stimulant That Made the Modern World ](https://soylentnews.org/article.pl?sid=26/04/12/173259&amp;from=rss)
* [2026-04-14, 13:46:31](https://news.ycombinator.com/item?id=47765604) - [Rare concert recordings are landing on the Internet Archive](https://techcrunch.com/2026/04/13/thousands-of-rare-concert-recordings-are-landing-on-the-internet-archive-listen-now/)
* [2026-04-14, 13:32:20](https://lobste.rs/s/ytim7h/collection_small_low_stakes_low_effort) - [A collection of small, low stakes and low effort tools](https://tools.rmv.fyi)
* [2026-04-14, 13:26:53](https://news.ycombinator.com/item?id=47765374) - [Show HN: Kontext CLI – Credential broker for AI coding agents in Go](https://github.com/kontext-dev/kontext-cli)
* [2026-04-14, 13:04:11](https://lobste.rs/s/nabvvv/modifying_filezilla_workaround_bambu_3d) - [Modifying FileZilla to Workaround Bambu 3D Printer&apos;s FTP Issue](https://lantian.pub/en/article/modify-computer/modify-filezilla-workaround-bambu-3d-printer-ftp-issue.lantian/)
* [2026-04-14, 12:30:43](https://lobste.rs/s/abl7vj/embed_you_ponyc_for_great_good) - [Embed You a ponyc for Great Good](https://www.ponylang.io/blog/2026/04/embed-you-a-ponyc-for-great-good/)
* [2026-04-14, 11:37:56](https://news.ycombinator.com/item?id=47764265) - [The exponential curve behind open source backlogs](https://armanckeser.com/writing/jellyfin-flow)
* [2026-04-14, 11:34:55](https://lobste.rs/s/dl4jb6/dependency_cooldowns_turn_you_into_free) - [Dependency cooldowns turn you into a free-rider](https://calpaterson.com/deps.html)
* [2026-04-14, 11:19:10](https://news.ycombinator.com/item?id=47764098) - [NimConf 2026: Dates Announced, Registrations Open](https://nim-lang.org/blog/2026/04/07/nimconf-2026.html)
* [2026-04-14, 11:04:21](https://lobste.rs/s/hedf1w/rust_should_have_stable_tail_calls) - [Rust should have stable tail calls](https://trifectatech.org/blog/tail-calls-project-goal/)
* [2026-04-14, 11:00:00](https://entertainment.slashdot.org/story/26/04/14/013232/air-force-pushed-out-ufo-investigator?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Air Force Pushed Out UFO Investigator](https://entertainment.slashdot.org/story/26/04/14/013232/air-force-pushed-out-ufo-investigator?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 10:56:57](https://lobste.rs/s/bvuhnp/120_icons_counting) - [120+ Icons and Counting](https://blog.jimmac.eu/posts/app-icon-requests/)
* [2026-04-14, 10:33:39](https://news.ycombinator.com/item?id=47763759) - [jj – the CLI for Jujutsu](https://steveklabnik.github.io/jujutsu-tutorial/introduction/what-is-jj-and-why-should-i-care.html)
* [2026-04-14, 09:12:00](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss) - [Linux Kernel Maintainers Are Following Through on Removing Intel 486 Support](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss)
* [2026-04-14, 09:08:18](https://lobste.rs/s/fsudf4/claude_code_s_source_3_167_line_function) - [Claude Code&apos;s Source: 3,167-Line Function, Regex Sentiment](https://techtrenches.dev/p/the-snake-that-ate-itself-what-claude)
* [2026-04-14, 08:54:44](https://lobste.rs/s/iw7kz1/sem_semantic_version_control_cli) - [sem: Semantic version control CLI](https://github.com/Ataraxy-Labs/sem)
* [2026-04-14, 08:30:27](https://news.ycombinator.com/item?id=47762864) - [Backblaze has stopped backing up OneDrive and Dropbox folders and maybe others](https://rareese.com/posts/backblaze/)
* [2026-04-14, 07:57:33](https://news.ycombinator.com/item?id=47762641) - [Introspective Diffusion Language Models](https://introspective-diffusion.github.io/)
* [2026-04-14, 07:40:30](https://lobste.rs/s/fj8fzm/5nf_database_design) - [5NF and Database Design](https://kb.databasedesignbook.com/posts/5nf/)
* [2026-04-14, 07:27:57](https://lobste.rs/s/iiykct/razor1911_razor1911) - [Razor1911 – Razor1911](https://www.youtube.com/watch?v=2AnbYNudAyM)
* [2026-04-14, 07:00:00](https://news.slashdot.org/story/26/04/14/0044242/weatherbug-data-says-october-8-is-the-real-perfect-date?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WeatherBug Data Says October 8 Is the Real Perfect Date](https://news.slashdot.org/story/26/04/14/0044242/weatherbug-data-says-october-8-is-the-real-perfect-date?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 06:31:44](https://news.ycombinator.com/item?id=47761997) - [Distributed DuckDB Instance](https://github.com/citguru/openduck)
* [2026-04-14, 05:32:48](https://news.ycombinator.com/item?id=47761625) - [Multi-Agentic Software Development Is a Distributed Systems Problem](https://kirancodes.me/posts/log-distributed-llms.html)
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
* [2026-04-13, 22:41:19](https://news.ycombinator.com/item?id=47758870) - [Let&apos;s Talk Space Toilets](https://mceglowski.substack.com/p/lets-talk-space-toilets)
* [2026-04-13, 22:00:00](https://slashdot.org/story/26/04/13/2056254/hollywood-stars-sign-open-letter-protesting-paramount-warner-bros-merger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hollywood Stars Sign Open Letter Protesting Paramount-Warner Bros Merger](https://slashdot.org/story/26/04/13/2056254/hollywood-stars-sign-open-letter-protesting-paramount-warner-bros-merger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 21:05:39](https://lobste.rs/s/xr9g5d/github_stacked_prs) - [GitHub Stacked PRs](https://github.github.com/gh-stack/)
* [2026-04-13, 21:00:00](https://yro.slashdot.org/story/26/04/13/2037240/fbi-raids-texas-home-of-man-suspected-of-firebombing-sam-altmans-sf-mansion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Raids Texas Home of Man Suspected of Firebombing Sam Altman&apos;s SF Mansion](https://yro.slashdot.org/story/26/04/13/2037240/fbi-raids-texas-home-of-man-suspected-of-firebombing-sam-altmans-sf-mansion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 20:36:49](https://news.ycombinator.com/item?id=47757495) - [GitHub Stacked PRs](https://github.github.com/gh-stack/)
* [2026-04-13, 20:00:00](https://yro.slashdot.org/story/26/04/13/1930253/meta-is-warned-that-facial-recognition-glasses-will-arm-sexual-predators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Warned That Facial Recognition Glasses Will Arm Sexual Predators](https://yro.slashdot.org/story/26/04/13/1930253/meta-is-warned-that-facial-recognition-glasses-will-arm-sexual-predators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 19:00:00](https://linux.slashdot.org/story/26/04/13/1857240/linux-70-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux 7.0 Released](https://linux.slashdot.org/story/26/04/13/1857240/linux-70-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 18:56:34](https://lobste.rs/s/fxh7ma/can_we_finally_use_c_modules_2026) - [Can we finally use C++ Modules in 2026?](https://mropert.github.io/2026/04/13/modules_in_2026/)
* [2026-04-13, 18:54:00](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss) - [OpenAI Backs Bill That Would Limit Liability for AI-Enabled Mass Deaths or Financial Disasters](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss)
* [2026-04-13, 18:00:00](https://it.slashdot.org/story/26/04/13/1653212/bookingcom-hit-by-data-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Booking.com Hit By Data Breach](https://it.slashdot.org/story/26/04/13/1653212/bookingcom-hit-by-data-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 17:54:39](https://news.ycombinator.com/item?id=47755629) - [Someone bought 30 WordPress plugins and planted a backdoor in all of them](https://anchor.host/someone-bought-30-wordpress-plugins-and-planted-a-backdoor-in-all-of-them/)
* [2026-04-13, 17:00:00](https://meta.slashdot.org/story/26/04/13/1642228/mark-zuckerberg-is-reportedly-building-an-ai-clone-to-replace-him-in-meetings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Is Reportedly Building an AI Clone To Replace Him In Meetings](https://meta.slashdot.org/story/26/04/13/1642228/mark-zuckerberg-is-reportedly-building-an-ai-clone-to-replace-him-in-meetings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 16:28:30](https://lobste.rs/s/9muqc5/debloat_your_async_rust) - [Debloat your async Rust](https://tweedegolf.nl/en/blog/235/debloat-your-async-rust)
* [2026-04-13, 16:04:27](https://lobste.rs/s/wwr6zu/lean_proved_this_program_was_correct_then) - [Lean proved this program was correct; then I found a bug](https://kirancodes.me/posts/log-who-watches-the-watchers.html)
* [2026-04-13, 16:00:00](https://yro.slashdot.org/story/26/04/13/0335254/maine-set-to-become-first-state-with-data-center-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Maine Set To Become First State With Data Center Ban](https://yro.slashdot.org/story/26/04/13/0335254/maine-set-to-become-first-state-with-data-center-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 15:12:52](https://lobste.rs/s/pvawq1/configuration_flags_are_where_software) - [Configuration flags are where software goes to rot](https://00f.net/2026/04/11/config-flags/)
* [2026-04-13, 15:00:00](https://slashdot.org/story/26/04/13/0330204/californians-sue-over-ai-tool-that-records-doctor-visits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Californians Sue Over AI Tool That Records Doctor Visits](https://slashdot.org/story/26/04/13/0330204/californians-sue-over-ai-tool-that-records-doctor-visits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 14:11:00](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss) - [Intel Introduces its Own Neural Compression Technology With a Fallback Mode That Works on All GPUs](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss)
* [2026-04-13, 13:42:04](https://lobste.rs/s/f8vyzy/servo_0_1_0_first_lts_version_is_now) - [Servo 0.1.0 (first LTS version) is now available on crates.io](https://servo.org/blog/2026/04/13/servo-0.1.0-release/)
* [2026-04-13, 11:43:10](https://lobste.rs/s/sslbph/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/sslbph/what_are_you_doing_this_week)
* [2026-04-13, 11:34:00](https://developers.slashdot.org/story/26/04/12/2225245/will-some-programmers-become-ai-babysitters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Some Programmers Become &apos;AI Babysitters&apos;?](https://developers.slashdot.org/story/26/04/12/2225245/will-some-programmers-become-ai-babysitters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 10:30:59](https://lobste.rs/s/rnx6fh/all_elementary_functions_from_single) - [All elementary functions from a single binary operator](https://arxiv.org/abs/2603.21852)
* [2026-04-13, 09:24:00](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss) - [Cloudflare and GoDaddy Team Up to Curb AI Bot Brigades](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss)
* [2026-04-13, 05:53:07](https://lobste.rs/s/eqawpx/did_you_notice_command_error_exit_shell) - [Did you notice the command error exit in the shell?](https://monzool.net/blog/2026/04/10/error-banner-in-shell/)
* [2026-04-13, 04:35:00](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss) - [Little Snitch for Linux Released!](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss)
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
* [2026-04-10, 19:36:00](https://soylentnews.org/article.pl?sid=26/04/09/067240&amp;from=rss) - [Adobe Secretly Modifies Your Hosts File for the Stupidest Reason](https://soylentnews.org/article.pl?sid=26/04/09/067240&amp;from=rss)
* [2026-04-10, 19:33:08](https://news.ycombinator.com/item?id=47722629) - [Franklin&apos;s bad ads for Apple II clones and the beloved impersonator they depict](https://buttondown.com/suchbadtechads/archive/franklin-ace-1000/)
* [2026-04-10, 18:43:00](https://news.ycombinator.com/item?id=47722031) - [Carol&apos;s Causal Conundrum: a zine intro to causally ordered message delivery](https://decomposition.al/zines/)
* [2026-04-10, 14:53:00](https://soylentnews.org/article.pl?sid=26/04/09/065206&amp;from=rss) - [Debian’s APT 3.2 Released with History, Undo, Redo, and Rollback Support](https://soylentnews.org/article.pl?sid=26/04/09/065206&amp;from=rss)
* [2026-04-10, 12:37:27](https://news.ycombinator.com/item?id=47717192) - [The acyclic e-graph: Cranelift&apos;s mid-end optimizer](https://cfallin.org/blog/2026/04/09/aegraph/)
* [2026-04-10, 12:06:43](https://news.ycombinator.com/item?id=47716840) - [Nucleus Nouns](https://ben-mini.com/2026/nucleus-nouns)
* [2026-04-10, 10:07:00](https://soylentnews.org/article.pl?sid=26/04/08/1917256&amp;from=rss) - [Researchers Discover How to Dampen Electronic Noise Using Nanowires](https://soylentnews.org/article.pl?sid=26/04/08/1917256&amp;from=rss)
* [2026-04-10, 07:28:29](https://news.ycombinator.com/item?id=47714770) - [Show HN: Run GUIs as Scripts](https://github.com/skinnyjames/hokusai-pocket)
* [2026-04-10, 05:23:00](https://soylentnews.org/article.pl?sid=26/04/08/1916208&amp;from=rss) - [White House Seeks Deep NASA Cuts as Artemis II Breaks Spaceflight Record](https://soylentnews.org/article.pl?sid=26/04/08/1916208&amp;from=rss)
* [2026-04-10, 00:37:00](https://soylentnews.org/article.pl?sid=26/04/08/1912232&amp;from=rss) - [&apos;Voorhees Law&apos; Explains Why the Slower Car Often Catches up](https://soylentnews.org/article.pl?sid=26/04/08/1912232&amp;from=rss)
