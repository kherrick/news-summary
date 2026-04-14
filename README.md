# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technology and Innovations

* [The Shinkansen](https://www.worksinprogress.news/p/the-secret-behind-japans-railways) - This article explores the secrets and advanced features behind Japan's world-renowned Shinkansen railway system. [Comments](https://news.ycombinator.com/item?id=47762060)

* [Startup Secures $30 Million Contract to 3D Print Jet Engines for the USAF](https://soylentnews.org/article.pl?sid=26/04/12/170200&from=rss) - A startup lands a $30 million deal with the U.S. Air Force to revolutionize jet engine manufacturing through 3D printing. [Comments](https://soylentnews.org/article.pl?sid=26/04/12/170200&from=rss)

* [Can Claude Fly a Plane?](https://so.long.thanks.fish/can-claude-fly-a-plane/) - An exploration into the capabilities of artificial intelligence robots such as Claude in handling complex real-world tasks like flying a plane. [Comments](https://news.ycombinator.com/item?id=47762006)

## Artificial Intelligence and Machine Learning

* [AI Insiders vs. the World](https://slashdot.org/story/26/04/14/0038207/stanford-report-highlights-growing-disconnect-between-ai-insiders-and-everyone-else?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Stanford's report highlights the growing disconnect between AI insiders and the larger global society about the risks and opportunities AI presents. [Comments](https://news.ycombinator.com/item?id=47761997)

* [Roblox Developers Face Subscription Fees](https://devforum.roblox.com/t/new-publishing-requirements-evaluation-process-for-games/4573166) - Roblox changes its publishing requirements, charging developers a subscription to share their games freely. [Comments](https://news.ycombinator.com/item?id=47761825)

* [Microsoft Exec Suggests AI Agents Need Software Licenses](https://www.businessinsider.com/microsoft-executive-suggests-ai-agents-buy-software-licenses-seats-2026-4) - Microsoft executives propose that AI agents operating in companies might require software licenses akin to employees. [Comments](https://lobste.rs/s/ucjode/microsoft_exec_suggests_ai_agents_will)

## Cybersecurity and Digital Threats

* [WordPress Plugin Backdoor Scandal](https://anchor.host/someone-bought-30-wordpress-plugins-and-planted-a-backdoor-in-all-of-them/) - Individuals purchased 30 WordPress plugins and embedded malicious backdoors, uncovering significant cybersecurity risks. [Comments](https://news.ycombinator.com/item?id=47760764)

* [A New Spam Policy for "Back Button Hijacking"](https://developers.google.com/search/blog/2026/04/back-button-hijacking) - Google introduces a new policy to deter unscrupulous practices like back button hijacking on websites. [Comments](https://news.ycombinator.com/item?id=47760764)

## Academic and Theoretical Breakthroughs

* [Math and the Genius of Srinivasa Ramanujan](https://www.quantamagazine.org/srinivasa-ramanujan-was-a-genius-math-is-still-catching-up-20241021/) - Discover the profound mathematical contributions of Ramanujan and how math is still deciphering his theorems. [Comments](https://news.ycombinator.com/item?id=47761310)

* [Little LaTeX Pearls](https://ionathan.ch/2026/04/08/LaTeX.html) - A whimsical deep dive into the charming world of LaTeX and its lesser-known features, called 'pearls.' [Comments](https://lobste.rs/s/xcurde/little_latex_pearls)

## Environmental and Space Exploration

* [Pixel-Wise Earth Observation Model](https://geotessera.org) - Learn about TESSERA, a new foundation model for detailed earth observation and analysis. [Comments](https://lobste.rs/s/0hmccr/tessera_pixel_wise_earth_observation)

* [Tech Layoffs and the Rise of AI](https://soylentnews.org/article.pl?sid=26/04/11/0313203&from=rss) - The tech industry reported nearly 80,000 layoffs in 2026, with nearly half attributed to artificial intelligence interventions. [Comments](https://soylentnews.org/article.pl?sid=26/04/11/0313203&from=rss)

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

* [2026-04-14, 06:41:01](https://news.ycombinator.com/item?id=47762060) - [The Shinkansen](https://www.worksinprogress.news/p/the-secret-behind-japans-railways)
* [2026-04-14, 06:32:45](https://news.ycombinator.com/item?id=47762006) - [Can Claude Fly a Plane?](https://so.long.thanks.fish/can-claude-fly-a-plane/)
* [2026-04-14, 06:31:44](https://news.ycombinator.com/item?id=47761997) - [Distributed DuckDB Instance](https://github.com/citguru/openduck)
* [2026-04-14, 06:25:48](https://lobste.rs/s/0hmccr/tessera_pixel_wise_earth_observation) - [TESSERA — A pixel-wise earth observation foundation model](https://geotessera.org)
* [2026-04-14, 06:04:31](https://news.ycombinator.com/item?id=47761825) - [Roblox devs now need a subscription to share their games freely](https://devforum.roblox.com/t/new-publishing-requirements-evaluation-process-for-games/4573166)
* [2026-04-14, 05:32:48](https://news.ycombinator.com/item?id=47761625) - [Multi-Agentic Software Development Is a Distributed Systems Problem](https://kirancodes.me/posts/log-distributed-llms.html)
* [2026-04-14, 05:29:30](https://news.ycombinator.com/item?id=47761613) - [UpDown: Efficient Manycore based on Many Threading &amp; Scalable Memory Parallelism](https://people.cs.uchicago.edu/~aachien/lssg/research/10x10/ics26-single-chip-updown.pdf)
* [2026-04-14, 05:28:51](https://news.ycombinator.com/item?id=47761609) - [TanStack Start Now Support React Server Components](https://tanstack.com/blog/react-server-components)
* [2026-04-14, 05:24:38](https://lobste.rs/s/qqfsfo/moonbit_0_9_introducing_first_class) - [MoonBit 0.9: Introducing First-Class Formal Verification](https://www.moonbitlang.com/blog/moonbit-0-9-release)
* [2026-04-14, 04:39:11](https://news.ycombinator.com/item?id=47761310) - [Math Is Still Catching Up to the Mysterious Genius of Srinivasa Ramanujan (2024)](https://www.quantamagazine.org/srinivasa-ramanujan-was-a-genius-math-is-still-catching-up-20241021/)
* [2026-04-14, 04:29:00](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss) - [Startup Secures $30 Million Contract to 3D Print Jet Engines for the USAF](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss)
* [2026-04-14, 04:04:29](https://lobste.rs/s/okihff/someone_bought_30_wordpress_plugins) - [Someone Bought 30 WordPress Plugins and Planted a Backdoor in All of Them](https://anchor.host/someone-bought-30-wordpress-plugins-and-planted-a-backdoor-in-all-of-them/)
* [2026-04-14, 03:30:00](https://slashdot.org/story/26/04/14/0038207/stanford-report-highlights-growing-disconnect-between-ai-insiders-and-everyone-else?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stanford Report Highlights Growing Disconnect Between AI Insiders and Everyone Else](https://slashdot.org/story/26/04/14/0038207/stanford-report-highlights-growing-disconnect-between-ai-insiders-and-everyone-else?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 03:06:27](https://news.ycombinator.com/item?id=47760764) - [A new spam policy for \&quot;back button hijacking\&quot;](https://developers.google.com/search/blog/2026/04/back-button-hijacking)
* [2026-04-14, 02:31:46](https://lobste.rs/s/gvgrij/no_one_can_force_me_have_secure_website) - [No one can force me to have a secure website](https://tom7.org/httpv/httpv.pdf)
* [2026-04-14, 02:25:15](https://news.ycombinator.com/item?id=47760529) - [DaVinci Resolve releases Photo Editor](https://www.blackmagicdesign.com/products/davinciresolve/photo)
* [2026-04-14, 00:25:08](https://news.ycombinator.com/item?id=47759709) - [Lean proved this program correct; then I found a bug](https://kirancodes.me/posts/log-who-watches-the-watchers.html)
* [2026-04-13, 23:44:00](https://soylentnews.org/article.pl?sid=26/04/12/1524251&amp;from=rss) - [Human Echolocation Works Step by Step](https://soylentnews.org/article.pl?sid=26/04/12/1524251&amp;from=rss)
* [2026-04-13, 23:33:18](https://news.ycombinator.com/item?id=47759341) - [WiiFin – Jellyfin Client for Nintendo Wii](https://github.com/fabienmillet/WiiFin)
* [2026-04-13, 23:23:31](https://lobste.rs/s/ucjode/microsoft_exec_suggests_ai_agents_will) - [Microsoft exec suggests AI agents will need to buy software licenses, just like employees](https://www.businessinsider.com/microsoft-executive-suggests-ai-agents-buy-software-licenses-seats-2026-4)
* [2026-04-13, 23:00:00](https://apple.slashdot.org/story/26/04/13/215252/apple-ai-glasses-will-rival-metas-with-several-styles-oval-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple AI Glasses Will Rival Meta&apos;s With Several Styles, Oval Cameras](https://apple.slashdot.org/story/26/04/13/215252/apple-ai-glasses-will-rival-metas-with-several-styles-oval-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 22:00:00](https://slashdot.org/story/26/04/13/2056254/hollywood-stars-sign-open-letter-protesting-paramount-warner-bros-merger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hollywood Stars Sign Open Letter Protesting Paramount-Warner Bros Merger](https://slashdot.org/story/26/04/13/2056254/hollywood-stars-sign-open-letter-protesting-paramount-warner-bros-merger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 21:54:03](https://news.ycombinator.com/item?id=47758347) - [N-Day-Bench – Can LLMs find real vulnerabilities in real codebases?](https://ndaybench.winfunc.com)
* [2026-04-13, 21:05:39](https://lobste.rs/s/xr9g5d/github_stacked_prs) - [GitHub Stacked PRs](https://github.github.com/gh-stack/)
* [2026-04-13, 21:00:00](https://yro.slashdot.org/story/26/04/13/2037240/fbi-raids-texas-home-of-man-suspected-of-firebombing-sam-altmans-sf-mansion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Raids Texas Home of Man Suspected of Firebombing Sam Altman&apos;s SF Mansion](https://yro.slashdot.org/story/26/04/13/2037240/fbi-raids-texas-home-of-man-suspected-of-firebombing-sam-altmans-sf-mansion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 20:36:49](https://news.ycombinator.com/item?id=47757495) - [GitHub Stacked PRs](https://github.github.com/gh-stack/)
* [2026-04-13, 20:00:00](https://yro.slashdot.org/story/26/04/13/1930253/meta-is-warned-that-facial-recognition-glasses-will-arm-sexual-predators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Warned That Facial Recognition Glasses Will Arm Sexual Predators](https://yro.slashdot.org/story/26/04/13/1930253/meta-is-warned-that-facial-recognition-glasses-will-arm-sexual-predators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 19:24:49](https://lobste.rs/s/uqhwj1/how_make_firefox_builds_17_faster) - [How to make Firefox builds 17% faster](https://blog.farre.se/posts/2026/04/10/caching-webidl-codegen/)
* [2026-04-13, 19:23:18](https://lobste.rs/s/5lux00/ducklake_v1_0_lightweight_lakehouse) - [DuckLake v1.0 – The Lightweight Lakehouse Format Reaches Production-Readiness](https://ducklake.select/2026/04/13/ducklake-10/)
* [2026-04-13, 19:00:00](https://linux.slashdot.org/story/26/04/13/1857240/linux-70-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux 7.0 Released](https://linux.slashdot.org/story/26/04/13/1857240/linux-70-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 18:56:34](https://lobste.rs/s/fxh7ma/can_we_finally_use_c_modules_2026) - [Can we finally use C++ Modules in 2026?](https://mropert.github.io/2026/04/13/modules_in_2026/)
* [2026-04-13, 18:54:00](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss) - [OpenAI Backs Bill That Would Limit Liability for AI-Enabled Mass Deaths or Financial Disasters](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss)
* [2026-04-13, 18:50:08](https://news.ycombinator.com/item?id=47756321) - [How to make Firefox builds 17% faster](https://blog.farre.se/posts/2026/04/10/caching-webidl-codegen/)
* [2026-04-13, 18:00:00](https://it.slashdot.org/story/26/04/13/1653212/bookingcom-hit-by-data-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Booking.com Hit By Data Breach](https://it.slashdot.org/story/26/04/13/1653212/bookingcom-hit-by-data-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 17:54:39](https://news.ycombinator.com/item?id=47755629) - [Someone bought 30 WordPress plugins and planted a backdoor in all of them](https://anchor.host/someone-bought-30-wordpress-plugins-and-planted-a-backdoor-in-all-of-them/)
* [2026-04-13, 17:42:53](https://lobste.rs/s/0ib4h6/everything_should_be_typed_scalar_types) - [Everything Should Be Typed: Scalar Types Are Not Enough](https://sot.dev/everything-should-be-typed.html)
* [2026-04-13, 17:38:21](https://lobste.rs/s/n6j8tr/hybrid_constructions_post_quantum) - [Hybrid Constructions: The Post-Quantum Safety Blanket](https://soatok.blog/2026/04/13/hybrid-constructions-the-post-quantum-safety-blanket/)
* [2026-04-13, 17:24:20](https://lobste.rs/s/0isw7j/netbsd_macppc_9_4_installation_on_qemu) - [NetBSD/MacPPC 9.4 Installation on a QEMU emulated PowerPC Macintosh](http://www.rabbitfarm.com/cgi-bin/blosxom/2026/04/12#macppc_9-4_qemu)
* [2026-04-13, 17:00:00](https://meta.slashdot.org/story/26/04/13/1642228/mark-zuckerberg-is-reportedly-building-an-ai-clone-to-replace-him-in-meetings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Is Reportedly Building an AI Clone To Replace Him In Meetings](https://meta.slashdot.org/story/26/04/13/1642228/mark-zuckerberg-is-reportedly-building-an-ai-clone-to-replace-him-in-meetings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 16:28:30](https://lobste.rs/s/9muqc5/debloat_your_async_rust) - [Debloat your async Rust](https://tweedegolf.nl/en/blog/235/debloat-your-async-rust)
* [2026-04-13, 16:04:27](https://lobste.rs/s/wwr6zu/lean_proved_this_program_was_correct_then) - [Lean proved this program was correct; then I found a bug](https://kirancodes.me/posts/log-who-watches-the-watchers.html)
* [2026-04-13, 16:00:00](https://yro.slashdot.org/story/26/04/13/0335254/maine-set-to-become-first-state-with-data-center-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Maine Set To Become First State With Data Center Ban](https://yro.slashdot.org/story/26/04/13/0335254/maine-set-to-become-first-state-with-data-center-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 15:44:02](https://news.ycombinator.com/item?id=47753689) - [Building a CLI for all of Cloudflare](https://blog.cloudflare.com/cf-cli-local-explorer/)
* [2026-04-13, 15:31:06](https://news.ycombinator.com/item?id=47753472) - [Nothing Ever Happens: Polymarket bot that always buys No on non-sports markets](https://github.com/sterlingcrispin/nothing-ever-happens)
* [2026-04-13, 15:28:32](https://lobste.rs/s/v30zok/autoscaling_forgejo_runner) - [Autoscaling Forgejo Runner](https://aahlenst.dev/blog/autoscaling-forgejo-runner/)
* [2026-04-13, 15:12:52](https://lobste.rs/s/pvawq1/configuration_flags_are_where_software) - [Configuration flags are where software goes to rot](https://00f.net/2026/04/11/config-flags/)
* [2026-04-13, 15:00:00](https://slashdot.org/story/26/04/13/0330204/californians-sue-over-ai-tool-that-records-doctor-visits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Californians Sue Over AI Tool That Records Doctor Visits](https://slashdot.org/story/26/04/13/0330204/californians-sue-over-ai-tool-that-records-doctor-visits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 14:48:55](https://news.ycombinator.com/item?id=47752819) - [Make tmux pretty and usable (2024)](https://hamvocke.com/blog/a-guide-to-customizing-your-tmux-conf/)
* [2026-04-13, 14:36:49](https://lobste.rs/s/cyzmjq/recovering_lost_document_habitat) - [Recovering a Lost Document: Habitat Anecdotes (1988)](https://habitatchronicles.com/2026/04/habitat-anecdotes/)
* [2026-04-13, 14:11:00](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss) - [Intel Introduces its Own Neural Compression Technology With a Fallback Mode That Works on All GPUs](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss)
* [2026-04-13, 13:42:04](https://lobste.rs/s/f8vyzy/servo_0_1_0_first_lts_version_is_now) - [Servo 0.1.0 (first LTS version) is now available on crates.io](https://servo.org/blog/2026/04/13/servo-0.1.0-release/)
* [2026-04-13, 13:37:33](https://news.ycombinator.com/item?id=47751781) - [US appeals court declares 158-year-old home distilling ban unconstitutional](https://nypost.com/2026/04/11/us-news/us-appeals-court-declares-158-year-old-home-distilling-ban-unconstitutional/)
* [2026-04-13, 13:18:10](https://lobste.rs/s/xcurde/little_latex_pearls) - [Little LaTeX Pearls](https://ionathan.ch/2026/04/08/LaTeX.html)
* [2026-04-13, 11:48:15](https://news.ycombinator.com/item?id=47750669) - [Android now stops you sharing your location in photos](https://shkspr.mobi/blog/2026/04/android-now-stops-you-sharing-your-location-in-photos/)
* [2026-04-13, 11:43:10](https://lobste.rs/s/sslbph/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/sslbph/what_are_you_doing_this_week)
* [2026-04-13, 11:34:00](https://developers.slashdot.org/story/26/04/12/2225245/will-some-programmers-become-ai-babysitters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Some Programmers Become &apos;AI Babysitters&apos;?](https://developers.slashdot.org/story/26/04/12/2225245/will-some-programmers-become-ai-babysitters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 10:30:59](https://lobste.rs/s/rnx6fh/all_elementary_functions_from_single) - [All elementary functions from a single binary operator](https://arxiv.org/abs/2603.21852)
* [2026-04-13, 09:24:00](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss) - [Cloudflare and GoDaddy Team Up to Curb AI Bot Brigades](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss)
* [2026-04-13, 07:47:03](https://lobste.rs/s/c1tlxi/dumb_introduction_z3) - [A Dumb Introduction to z3](https://ar-ms.me/thoughts/a-gentle-introduction-to-z3/)
* [2026-04-13, 07:34:00](https://slashdot.org/story/26/04/13/0156227/anthropic-asks-christian-leaders-for-help-steering-claudes-spiritual-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Asks Christian Leaders for Help Steering Claude&apos;s Spiritual Development](https://slashdot.org/story/26/04/13/0156227/anthropic-asks-christian-leaders-for-help-steering-claudes-spiritual-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 05:53:07](https://lobste.rs/s/eqawpx/did_you_notice_command_error_exit_shell) - [Did you notice the command error exit in the shell?](https://monzool.net/blog/2026/04/10/error-banner-in-shell/)
* [2026-04-13, 04:35:00](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss) - [Little Snitch for Linux Released!](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss)
* [2026-04-13, 03:34:00](https://yro.slashdot.org/story/26/04/13/0219250/sam-altmans-home-targeted-a-second-time-two-suspects-arrested?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Altman&apos;s Home Targeted a Second Time, Two Suspects Arrested](https://yro.slashdot.org/story/26/04/13/0219250/sam-altmans-home-targeted-a-second-time-two-suspects-arrested?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-13, 01:34:00](https://news.slashdot.org/story/26/04/13/0115243/robot-birds-deployed-by-park-to-attract-real-birds---built-by-high-school-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robot Birds Deployed by Park to Attract Real Birds - Built By High School Students](https://news.slashdot.org/story/26/04/13/0115243/robot-birds-deployed-by-park-to-attract-real-birds---built-by-high-school-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 23:48:00](https://soylentnews.org/article.pl?sid=26/04/11/0321245&amp;from=rss) - [&apos;Dead End&apos;: Radical 20-Year Study Reveals Genetic Cloning Hits a Limit](https://soylentnews.org/article.pl?sid=26/04/11/0321245&amp;from=rss)
* [2026-04-12, 23:32:00](https://developers.slashdot.org/story/26/04/12/2329229/has-the-rust-programming-languages-popularity-reached-its-plateau?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Has the Rust Programming Language&apos;s Popularity Reached Its Plateau?](https://developers.slashdot.org/story/26/04/12/2329229/has-the-rust-programming-languages-popularity-reached-its-plateau?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-12, 19:53:57](https://lobste.rs/s/7fhahl/48_hours_ago_lobste_rs_surpassed_20_000) - [48 hours ago lobste.rs surpassed 20,000 users](https://lobste.rs/s/7fhahl/48_hours_ago_lobste_rs_surpassed_20_000)
* [2026-04-12, 19:17:36](https://lobste.rs/s/tmddcs/peril_laziness_lost) - [The peril of laziness lost](https://bcantrill.dtrace.org/2026/04/12/the-peril-of-laziness-lost/)
* [2026-04-12, 19:02:00](https://soylentnews.org/article.pl?sid=26/04/11/0313203&amp;from=rss) - [Tech Industry Lays Off Nearly 80,000 Employees in the First Quarter of 2026 (Almost 50% Due to AI)](https://soylentnews.org/article.pl?sid=26/04/11/0313203&amp;from=rss)
* [2026-04-12, 14:15:00](https://soylentnews.org/article.pl?sid=26/04/11/037238&amp;from=rss) - [Dad Stuck in Support Nightmare After Teen Lied About Age on Discord](https://soylentnews.org/article.pl?sid=26/04/11/037238&amp;from=rss)
* [2026-04-12, 09:33:00](https://soylentnews.org/article.pl?sid=26/04/11/0256207&amp;from=rss) - [Federal Cyber Experts Called Microsoft&apos;s Cloud a “Pile of Sh*T,” Approved It Anyway](https://soylentnews.org/article.pl?sid=26/04/11/0256207&amp;from=rss)
* [2026-04-12, 04:44:00](https://soylentnews.org/article.pl?sid=26/04/11/0245252&amp;from=rss) - [3D Printing a Motor--Some First Steps](https://soylentnews.org/article.pl?sid=26/04/11/0245252&amp;from=rss)
* [2026-04-12, 00:03:00](https://soylentnews.org/article.pl?sid=26/04/11/0242235&amp;from=rss) - [This New &apos;Laughing Rat&apos; Malware Will Steal Your Data, Hack Your Systems, and Laugh at You](https://soylentnews.org/article.pl?sid=26/04/11/0242235&amp;from=rss)
* [2026-04-11, 19:18:00](https://soylentnews.org/article.pl?sid=26/04/10/0259257&amp;from=rss) - [EFF is Leaving X](https://soylentnews.org/article.pl?sid=26/04/10/0259257&amp;from=rss)
* [2026-04-11, 14:35:00](https://soylentnews.org/article.pl?sid=26/04/10/0256206&amp;from=rss) - [Standard Model of Particle Physics Verified to One Trillionth Accuracy](https://soylentnews.org/article.pl?sid=26/04/10/0256206&amp;from=rss)
* [2026-04-11, 10:36:15](https://news.ycombinator.com/item?id=47729350) - [I just want simple S3](https://blog.feld.me/posts/2026/04/i-just-want-simple-s3/)
* [2026-04-11, 09:50:00](https://soylentnews.org/article.pl?sid=26/04/10/0254231&amp;from=rss) - [Toward Cheaper, Cleaner Hydrogen Production](https://soylentnews.org/article.pl?sid=26/04/10/0254231&amp;from=rss)
* [2026-04-11, 09:32:17](https://news.ycombinator.com/item?id=47729046) - [Air Powered Segment Display? [video]](https://www.youtube.com/watch?v=E1BLGpE5zH0)
* [2026-04-11, 09:20:45](https://news.ycombinator.com/item?id=47728970) - [Write less code, be more responsible](https://blog.orhun.dev/code-responsibly/)
* [2026-04-11, 05:09:00](https://soylentnews.org/article.pl?sid=26/04/10/0250211&amp;from=rss) - [Honda Hits Brakes On EV Rollout Amid Rising Losses](https://soylentnews.org/article.pl?sid=26/04/10/0250211&amp;from=rss)
* [2026-04-11, 00:27:00](https://soylentnews.org/article.pl?sid=26/04/10/0248230&amp;from=rss) - [Ancient Rocks Reveal Evidence of the First Continents and Crust Recycling Processes on Earth](https://soylentnews.org/article.pl?sid=26/04/10/0248230&amp;from=rss)
* [2026-04-10, 19:36:00](https://soylentnews.org/article.pl?sid=26/04/09/067240&amp;from=rss) - [Adobe Secretly Modifies Your Hosts File for the Stupidest Reason](https://soylentnews.org/article.pl?sid=26/04/09/067240&amp;from=rss)
* [2026-04-10, 14:53:00](https://soylentnews.org/article.pl?sid=26/04/09/065206&amp;from=rss) - [Debian’s APT 3.2 Released with History, Undo, Redo, and Rollback Support](https://soylentnews.org/article.pl?sid=26/04/09/065206&amp;from=rss)
* [2026-04-10, 13:59:26](https://news.ycombinator.com/item?id=47718284) - [Design and implementation of DuckDB internals](https://duckdb.org/library/design-and-implementation-of-duckdb-internals/)
* [2026-04-10, 12:03:16](https://news.ycombinator.com/item?id=47716805) - [Anastasia (1997) live action reference material](https://lostmediawiki.com/Anastasia_(partially_found_live-action_reference_material_for_Don_Bluth_animated_film;_1997))
* [2026-04-10, 11:20:38](https://news.ycombinator.com/item?id=47716409) - [A name is succession, legacy and celebration in Japan&apos;s Kabuki theater](https://apnews.com/article/kabuki-name-succession-japan-tradition-theater-d1e9621bc91385498314f36e1481b6fd)
* [2026-04-10, 10:07:00](https://soylentnews.org/article.pl?sid=26/04/08/1917256&amp;from=rss) - [Researchers Discover How to Dampen Electronic Noise Using Nanowires](https://soylentnews.org/article.pl?sid=26/04/08/1917256&amp;from=rss)
* [2026-04-10, 09:01:05](https://news.ycombinator.com/item?id=47715389) - [I shipped a transaction bug, so I built a linter](https://leonh.fr/posts/go-transaction-linter/)
* [2026-04-10, 05:23:00](https://soylentnews.org/article.pl?sid=26/04/08/1916208&amp;from=rss) - [White House Seeks Deep NASA Cuts as Artemis II Breaks Spaceflight Record](https://soylentnews.org/article.pl?sid=26/04/08/1916208&amp;from=rss)
* [2026-04-10, 00:37:00](https://soylentnews.org/article.pl?sid=26/04/08/1912232&amp;from=rss) - [&apos;Voorhees Law&apos; Explains Why the Slower Car Often Catches up](https://soylentnews.org/article.pl?sid=26/04/08/1912232&amp;from=rss)
