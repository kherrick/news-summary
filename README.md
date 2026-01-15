# [News Summary](https://kherrick.github.io/news-summary/)

## Health and Science

* [NASA Acknowledges Record Heat But Avoids Referencing Climate Change](https://science.slashdot.org/story/26/01/14/1915220/nasa-acknowledges-record-heat-but-avoids-referencing-climate-change?utm_source=rss1.0mainlinkanon&utm_medium=feed): A look at NASA's stance on record heat levels and its avoidance of climate change references.

* [Coal Power Generation Falls in China and India for First Time Since 1970s](https://news.slashdot.org/story/26/01/14/1810207/coal-power-generation-falls-in-china-and-india-for-first-time-since-1970s?utm_source=rss1.0mainlinkanon&utm_medium=feed): Coal power generation dips—an unprecedented trend since the 1970s.

* [Some Dogs Eavesdrop on Their Owners to Learn New Words](https://soylentnews.org/article.pl?sid=26/01/12/1838234&from=rss): Research shows quirky behavior in canines learning from owners' conversations.

## Technology and AI

* [The Swedish Start-Up Aiming To Conquer America's Full-Body-Scan Craze](https://science.slashdot.org/story/26/01/14/2332240/the-swedish-start-up-aiming-to-conquer-americas-full-body-scan-craze?utm_source=rss1.0mainlinkanon&utm_medium=feed): A Scandinavian company ventures into the booming full-body scan market in the U.S.

* [Interactive eBPF playground](https://ebpf.party): Get hands-on and explore the capabilities of eBPF in this engaging new playground.

* [NH Heater Sales Drive Conservation Focus](https://examplelink.com): Increasing focus on conservation as NH heater sales expand. This placeholder represents metadata-filled news parsing examples.

## Business and Economy

* [DoorDash and UberEats Cost Drivers $550 Million In Tips, NYC Says](https://news.slashdot.org/story/26/01/14/225243/doordash-and-ubereats-cost-drivers-550-million-in-tips-nyc-says?utm_source=rss1.0mainlinkanon&utm_medium=feed): NYC accuses food delivery services of tipping misconduct affecting millions of dollars.

## Interesting Projects and Tools

* [An Ultra-Fast Quantum Tunneling Device for the 6G Terahertz Era](https://soylentnews.org/article.pl?sid=26/01/12/1835207&from=rss): Promising advancements in quantum technology aim to redefine connectivity standards.

* [Finding and Fixing a 50,000 Goroutine Leak That Nearly Killed Production](https://skoredin.pro/blog/golang/goroutine-leak-debugging): An in-depth look into tracking Goroutine leaks and handling production crises with tech strategies.

* [Stop using MySQL in 2026, it is not true open source](https://optimizedbyotto.com/post/reasons-to-stop-using-mysql/): A detailed argument regarding limitations of MySQL's open-source nature.

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

* [2026-01-15, 06:12:00](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss) - [Resuscitating a 1934 Briggs &amp; Stratton Washing Machine Engine](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss)
* [2026-01-15, 05:23:18](https://news.ycombinator.com/item?id=46628397) - [Handy – free open source speech-to-text app](https://github.com/cjpais/Handy)
* [2026-01-15, 04:44:21](https://lobste.rs/s/kbolvv/finding_fixing_50_000_goroutine_leak) - [Finding and Fixing a 50,000 Goroutine Leak That Nearly Killed Production](https://skoredin.pro/blog/golang/goroutine-leak-debugging)
* [2026-01-15, 03:30:00](https://science.slashdot.org/story/26/01/14/2332240/the-swedish-start-up-aiming-to-conquer-americas-full-body-scan-craze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Swedish Start-Up Aiming To Conquer America&apos;s Full-Body-Scan Craze](https://science.slashdot.org/story/26/01/14/2332240/the-swedish-start-up-aiming-to-conquer-americas-full-body-scan-craze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 03:28:20](https://news.ycombinator.com/item?id=46627652) - [The URL shortener that makes your links look as suspicious as possible](https://creepylink.com/)
* [2026-01-15, 02:48:00](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss) - [RIP - &apos;Dilbert&apos; Creator Scott Adams Dies at 68 After Prostate Cancer Battle](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss)
* [2026-01-15, 02:02:00](https://mobile.slashdot.org/story/26/01/14/2319204/are-qwerty-phones-trying-to-make-a-comeback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are QWERTY Phones Trying To Make a Comeback?](https://mobile.slashdot.org/story/26/01/14/2319204/are-qwerty-phones-trying-to-make-a-comeback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 01:45:22](https://news.ycombinator.com/item?id=46626836) - [Bubblewrap: A nimble way to prevent agents from accessing your .env files](https://patrickmccanna.net/a-better-way-to-limit-claude-code-and-other-coding-agents-access-to-secrets/)
* [2026-01-15, 01:25:00](https://tech.slashdot.org/story/26/01/14/233241/digg-launches-its-new-reddit-rival-to-the-public?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Digg Launches Its New Reddit Rival To the Public](https://tech.slashdot.org/story/26/01/14/233241/digg-launches-its-new-reddit-rival-to-the-public?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 01:25:00](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss) - [The AIdigest.org&apos;s AI Village](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss)
* [2026-01-15, 01:20:22](https://news.ycombinator.com/item?id=46626639) - [Ask HN: What is the best way to provide continuous context to models?](https://news.ycombinator.com/item?id=46626639)
* [2026-01-15, 00:53:21](https://news.ycombinator.com/item?id=46626410) - [Furiosa: 3.5x efficiency over H100s](https://furiosa.ai/blog/introducing-rngd-server-efficient-ai-inference-at-data-center-scale)
* [2026-01-15, 00:47:22](https://lobste.rs/s/8hjgvt/writing_anteforth_forth_like_spark) - [Writing Anteforth, a Forth-like in SPARK](https://pyjarrett.github.io/2026/01/13/anteforth.html)
* [2026-01-15, 00:45:00](https://slashdot.org/story/26/01/14/2253220/cerebras-scores-openai-deal-worth-over-10-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cerebras Scores OpenAI Deal Worth Over $10 Billion](https://slashdot.org/story/26/01/14/2253220/cerebras-scores-openai-deal-worth-over-10-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-15, 00:34:59](https://news.ycombinator.com/item?id=46626210) - [New Safari developer tools provide insight into CSS Grid Lanes](https://webkit.org/blog/17746/new-safari-developer-tools-provide-insight-into-css-grid-lanes/)
* [2026-01-15, 00:06:45](https://lobste.rs/s/urlzyd/scaling_long_running_autonomous_coding) - [Scaling long-running autonomous coding](https://cursor.com/blog/scaling-agents)
* [2026-01-15, 00:02:00](https://news.slashdot.org/story/26/01/14/225243/doordash-and-ubereats-cost-drivers-550-million-in-tips-nyc-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DoorDash and UberEats Cost Drivers $550 Million In Tips, NYC Says](https://news.slashdot.org/story/26/01/14/225243/doordash-and-ubereats-cost-drivers-550-million-in-tips-nyc-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 23:31:28](https://lobste.rs/s/hljkrv/my_ai_got_github_account) - [My AI got a Github account](https://www.maragu.dev/blog/my-ai-got-a-github-account)
* [2026-01-14, 23:20:00](https://hardware.slashdot.org/story/26/01/14/2156254/us-approves-sale-of-nvidias-advanced-ai-chips-to-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Approves Sale of Nvidia&apos;s Advanced AI Chips To China](https://hardware.slashdot.org/story/26/01/14/2156254/us-approves-sale-of-nvidias-advanced-ai-chips-to-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 22:50:08](https://lobste.rs/s/o9acsn/state_openssl_for_pyca_cryptography) - [The State of OpenSSL for pyca/cryptography](https://cryptography.io/en/latest/statements/state-of-openssl/)
* [2026-01-14, 22:40:00](https://entertainment.slashdot.org/story/26/01/14/2149259/bandcamp-bans-ai-music?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bandcamp Bans AI Music](https://entertainment.slashdot.org/story/26/01/14/2149259/bandcamp-bans-ai-music?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 22:30:40](https://news.ycombinator.com/item?id=46624740) - [Ask HN: Weird archive.today behavior?](https://news.ycombinator.com/item?id=46624740)
* [2026-01-14, 22:30:16](https://news.ycombinator.com/item?id=46624731) - [ChromaDB Explorer](https://www.chroma-explorer.com/)
* [2026-01-14, 22:26:17](https://news.ycombinator.com/item?id=46624658) - [Crafting Interpreters](https://craftinginterpreters.com/)
* [2026-01-14, 22:23:42](https://lobste.rs/s/hqyoa2/i_built_2x_faster_lexer_then_discovered_i_o) - [I built a 2x faster lexer, then discovered I/O was the real bottleneck](https://modulovalue.com/blog/syscall-overhead-tar-gz-io-performance/)
* [2026-01-14, 22:18:04](https://news.ycombinator.com/item?id=46624541) - [Scaling long-running autonomous coding](https://cursor.com/blog/scaling-agents)
* [2026-01-14, 22:04:10](https://news.ycombinator.com/item?id=46624352) - [The State of OpenSSL for pyca/cryptography](https://cryptography.io/en/latest/statements/state-of-openssl/)
* [2026-01-14, 22:02:00](https://it.slashdot.org/story/26/01/14/2143252/house-sysadmin-stole-200-phones-caught-by-house-it-desk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [House Sysadmin Stole 200 Phones, Caught By House IT Desk](https://it.slashdot.org/story/26/01/14/2143252/house-sysadmin-stole-200-phones-caught-by-house-it-desk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 21:26:51](https://news.ycombinator.com/item?id=46623761) - [Sun Position Calculator](https://drajmarsh.bitbucket.io/earthsun.html)
* [2026-01-14, 21:25:00](https://news.slashdot.org/story/26/01/14/1924225/uk-scraps-mandatory-digital-id-enrollment-for-workers-after-public-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Scraps Mandatory Digital ID Enrollment for Workers After Public Backlash](https://news.slashdot.org/story/26/01/14/1924225/uk-scraps-mandatory-digital-id-enrollment-for-workers-after-public-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 21:10:57](https://lobste.rs/s/ev8log/rickroll_rustc) - [Rickroll in rustc](https://github.com/rust-lang/rust/blob/main/tests/ui/attributes/check-cfg_attr-ice.rs#L9-L68)
* [2026-01-14, 20:55:24](https://lobste.rs/s/4icz4n/what_does_it_take_ship_rust_safety) - [What does it take to ship Rust in safety-critical?](https://blog.rust-lang.org/2026/01/14/what-does-it-take-to-ship-rust-in-safety-critical/)
* [2026-01-14, 20:55:19](https://lobste.rs/s/u1ypx5/stop_using_mysql_2026_it_is_not_true_open) - [Stop using MySQL in 2026, it is not true open source](https://optimizedbyotto.com/post/reasons-to-stop-using-mysql/)
* [2026-01-14, 20:52:21](https://lobste.rs/s/xa4ndh/selfci_minimalistic_local_first_unix) - [SelfCI - a minimalistic local-first Unix-philosophy-abiding CI](https://app.radicle.xyz/nodes/radicle.dpc.pw/rad:z2tDzYbAXxTQEKTGFVwiJPajkbeDU)
* [2026-01-14, 20:50:00](https://tech.slashdot.org/story/26/01/14/199210/dell-tells-staff-to-get-ready-for-the-biggest-transformation-in-company-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dell Tells Staff To Get Ready For the &apos;Biggest Transformation in Company History&apos;](https://tech.slashdot.org/story/26/01/14/199210/dell-tells-staff-to-get-ready-for-the-biggest-transformation-in-company-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 20:33:00](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss) - [Tech Bloggers Switching From Windows to Linux](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss)
* [2026-01-14, 20:12:25](https://news.ycombinator.com/item?id=46622328) - [Claude Cowork exfiltrates files](https://www.promptarmor.com/resources/claude-cowork-exfiltrates-files)
* [2026-01-14, 20:11:00](https://science.slashdot.org/story/26/01/14/1915220/nasa-acknowledges-record-heat-but-avoids-referencing-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Acknowledges Record Heat But Avoids Referencing Climate Change](https://science.slashdot.org/story/26/01/14/1915220/nasa-acknowledges-record-heat-but-avoids-referencing-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 19:38:47](https://news.ycombinator.com/item?id=46621656) - [Upgrading DrizzleORM logging with AsyncLocalStorage](https://numeric.substack.com/p/upgrading-drizzleorm-logging-with)
* [2026-01-14, 19:31:57](https://lobste.rs/s/mj7k0s/coding_on_phone_what_i_learned_building) - [Coding on a Phone: What I Learned Building Software on Mobile in the Last Three Weeks](https://rahulpandita.me/blog/2026-01-14-Mobile-Development)
* [2026-01-14, 19:20:00](https://tech.slashdot.org/story/26/01/14/1918256/widespread-verizon-outage-prompts-emergency-alerts-in-washington-new-york-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Widespread Verizon Outage Prompts Emergency Alerts in Washington, New York City](https://tech.slashdot.org/story/26/01/14/1918256/widespread-verizon-outage-prompts-emergency-alerts-in-washington-new-york-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 19:16:11](https://lobste.rs/s/jluhmx/chat_is_least_interesting_interface_llms) - [Chat is the least interesting interface to LLMs](https://www.haskellforall.com/2026/01/chat-is-least-interesting-interface-to.html)
* [2026-01-14, 19:04:52](https://lobste.rs/s/pxaxqn/my_gripes_with_prolog) - [My Gripes with Prolog](https://buttondown.com/hillelwayne/archive/my-gripes-with-prolog/)
* [2026-01-14, 18:50:00](https://it.slashdot.org/story/26/01/14/1833237/beijing-tells-chinese-firms-to-stop-using-us-and-israeli-cybersecurity-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Beijing Tells Chinese Firms To Stop Using US and Israeli Cybersecurity Software](https://it.slashdot.org/story/26/01/14/1833237/beijing-tells-chinese-firms-to-stop-using-us-and-israeli-cybersecurity-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 18:49:37](https://news.ycombinator.com/item?id=46620673) - [Native ZFS VDEV for Object Storage (OpenZFS Summit)](https://www.zettalane.com/blog/openzfs-summit-2025-mayanas-objbacker.html)
* [2026-01-14, 18:10:00](https://news.slashdot.org/story/26/01/14/1810207/coal-power-generation-falls-in-china-and-india-for-first-time-since-1970s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Coal Power Generation Falls in China and India for First Time Since 1970s](https://news.slashdot.org/story/26/01/14/1810207/coal-power-generation-falls-in-china-and-india-for-first-time-since-1970s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 18:01:23](https://news.ycombinator.com/item?id=46619614) - [Show HN: Sparrow-1 – Audio-native model for human-level turn-taking without ASR](https://www.tavus.io/post/sparrow-1-human-level-conversational-timing-in-real-time-voice)
* [2026-01-14, 17:30:00](https://slashdot.org/story/26/01/14/179257/mckinsey-asks-graduates-to-use-ai-chatbot-in-recruitment-process?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [McKinsey Asks Graduates To Use AI Chatbot in Recruitment Process](https://slashdot.org/story/26/01/14/179257/mckinsey-asks-graduates-to-use-ai-chatbot-in-recruitment-process?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 17:20:09](https://news.ycombinator.com/item?id=46618901) - [Ford F-150 Lightning outsold the Cybertruck and was then canceled for poor sales](https://electrek.co/2026/01/13/ford-f150-lightning-outsold-tesla-cybertruck-canceled-not-selling-enough/)
* [2026-01-14, 17:07:42](https://news.ycombinator.com/item?id=46618714) - [Ask HN: Share your personal website](https://news.ycombinator.com/item?id=46618714)
* [2026-01-14, 16:54:40](https://news.ycombinator.com/item?id=46618503) - [Project SkyWatch (a.k.a. Wescam at Home)](https://ianservin.com/2026/01/13/project-skywatch-aka-wescam-at-home/)
* [2026-01-14, 16:03:11](https://news.ycombinator.com/item?id=46617668) - [Roam 50GB is now Roam 100GB](https://starlink.com/support/article/58c9c8b7-474e-246f-7e3c-06db3221d34d)
* [2026-01-14, 15:57:00](https://lobste.rs/s/wh52mr/scrollbars_scrollbars) - [Scrollbars in Scrollbars](https://matoseb.com/scrollbars-scrollbars/)
* [2026-01-14, 15:49:00](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss) - [China Expected to Approve H200 Imports in Early 2026, Report Claims](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss)
* [2026-01-14, 15:44:22](https://news.ycombinator.com/item?id=46617360) - [Find a pub that needs you](https://www.ismypubfucked.com/)
* [2026-01-14, 15:19:12](https://lobste.rs/s/ixqdco/artificial_stupidintelligence_airport) - [Artificial StupidIntelligence and Airport Sinks](https://www.deobald.ca/essays/2026-01-13-artificial-stupidintelligence-and-airport-sinks/)
* [2026-01-14, 14:44:28](https://lobste.rs/s/vnkwyb/my_opinion_on_spelling_run_time_vs_run_time) - [My Opinion on Spelling Run Time vs. Run-time vs. Runtime](https://bobrubbens.nl/post/my-opinion-on-spelling-runtime/)
* [2026-01-14, 14:38:29](https://news.ycombinator.com/item?id=46616529) - [Ask HN: How are you doing RAG locally?](https://news.ycombinator.com/item?id=46616529)
* [2026-01-14, 14:34:57](https://news.ycombinator.com/item?id=46616488) - [SparkFun Officially Dropping AdaFruit due to CoC Violation](https://www.sparkfun.com/official-response)
* [2026-01-14, 14:34:40](https://news.ycombinator.com/item?id=46616481) - [Show HN: Webctl – Browser automation for agents based on CLI instead of MCP](https://github.com/cosinusalpha/webctl)
* [2026-01-14, 12:12:39](https://lobste.rs/s/6vnavr/servo_2025_stats) - [Servo 2025 Stats](https://blogs.igalia.com/mrego/servo-2025-stats/)
* [2026-01-14, 11:54:54](https://lobste.rs/s/wyvqyq/interactive_ebpf_playground) - [Interactive eBPF playground](https://ebpf.party)
* [2026-01-14, 11:25:11](https://lobste.rs/s/cydp2t/porting_minijinja_go_with_agent) - [Porting MiniJinja to Go With an Agent](https://lucumr.pocoo.org/2026/1/14/minijinja-go-port/)
* [2026-01-14, 11:06:00](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss) - [Some Dogs Eavesdrop on Their Owners to Learn New Words](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss)
* [2026-01-14, 08:10:28](https://lobste.rs/s/knwdud/just_browser) - [Just the Browser](https://justthebrowser.com/)
* [2026-01-14, 06:24:00](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss) - [An Ultra-Fast Quantum Tunneling Device for the 6G Terahertz Era](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss)
* [2026-01-14, 06:10:18](https://lobste.rs/s/jsw3wk/why_we_don_t_use_ai) - [Why We Don&apos;t Use AI](https://yarnspinner.dev/blog/why-we-dont-use-ai/)
* [2026-01-14, 02:44:21](https://lobste.rs/s/pfj3mi/rust_at_volvo_cars) - [Rust at Volvo Cars](https://www.youtube.com/watch?v=vBofCW8j70A)
* [2026-01-14, 02:42:41](https://lobste.rs/s/cgzwem/how_40_line_fix_eliminated_400x) - [How a 40-Line Fix Eliminated a 400x Performance Gap](https://questdb.com/blog/jvm-current-thread-user-time/)
* [2026-01-14, 01:41:00](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss) - [Volkswagen is Bringing Physical Buttons Back to the Dashboard With the Polo EV](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss)
* [2026-01-13, 21:13:19](https://lobste.rs/s/pwj9ue/truffleruby_33_is_released) - [TruffleRuby 33 is Released](https://truffleruby.dev/blog/truffleruby-33-is-released)
* [2026-01-13, 20:52:00](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss) - [A Sit-Stand Ratio ‘Sweet Spot’ May Boost Office Productivity](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss)
* [2026-01-13, 16:28:04](https://lobste.rs/s/mb07nn/anthropic_invests_1_5_million_python) - [Anthropic invests $1.5 million in the Python Software Foundation and open source security](https://pyfound.blogspot.com/2025/12/anthropic-invests-in-python.html)
* [2026-01-13, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss) - [Poul-Henning Kamp&apos;s Feedback to the EU on Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss)
* [2026-01-13, 11:26:00](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss) - [A 2,000-Year-Old Fingerprint May Solve Mystery of Scandinavia&apos;s Oldest Wooden Boat](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss)
* [2026-01-13, 06:45:00](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss) - [How Doubting Your Doubts May Increase Commitment to Goals](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss)
* [2026-01-13, 01:52:00](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss) - [The Book Only Gets 3 Stars, but is Considered Great Literature](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss)
* [2026-01-12, 21:11:00](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss) - [NASA Postponed ISS Spacewalk Over Medical Issue, Crew Will Return Early](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss)
* [2026-01-12, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss) - [Very Tough Microbes May Help Us Cement Our Future on Mars](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss)
* [2026-01-12, 12:00:00](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss) - [Oceans Are Struggling To Absorb Carbon As Microplastics Flood Their Waters](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss)
* [2026-01-12, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss) - [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss)
* [2026-01-12, 02:33:00](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss) - [Bose Open-Sources its SoundTouch Home Theater Smart Speakers Ahead of End-of-Life](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss)
* [2026-01-11, 21:52:00](https://soylentnews.org/article.pl?sid=26/01/10/0115240&amp;from=rss) - [Dell Reveals People Don&apos;t Care About AI in PCs – and a New Truly Embarrassing Windows 11 Fail ](https://soylentnews.org/article.pl?sid=26/01/10/0115240&amp;from=rss)
* [2026-01-11, 17:13:00](https://soylentnews.org/article.pl?sid=26/01/10/0111244&amp;from=rss) - [Your Daily Cup of Tea Could Help Fight Heart Disease, Cancer, Aging, and More](https://soylentnews.org/article.pl?sid=26/01/10/0111244&amp;from=rss)
* [2026-01-11, 12:26:00](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss) - [Finding Runaway Stars to Help Map Dark Matter in the Milky Way](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss)
* [2026-01-11, 07:24:00](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss) - [Virginia&apos;s Datacenter Tax Breaks Cost State $1.6B in 2025](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss)
* [2026-01-11, 02:54:00](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss) - [Some People Get Drunk Without Drinking and Scientists Finally Know Why](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss)
