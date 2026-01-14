# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Developments and Innovations

* [NASA and Department of Energy plan to develop a Lunar Surface Reactor by 2030](https://science.slashdot.org/story/26/01/14/0232205/nasa-department-of-energy-to-develop-lunar-surface-reactor-by-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Dell announces 'Biggest Transformation in Company History'](https://tech.slashdot.org/story/26/01/14/199210/dell-tells-staff-to-get-ready-for-the-biggest-transformation-in-company-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [An Ultra-Fast Quantum Tunneling Device proposed for the 6G Terahertz Era](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss)

* [Show HN: A fast CLI and MCP server for managing Lambda cloud GPU instances](https://github.com/Strand-AI/lambda-cli)

* [What does it take to ship Rust in safety-critical environments?](https://blog.rust-lang.org/2026/01/14/what-does-it-take-to-ship-rust-in-safety-critical/)

* [Show HN: A 10KiB kernel for cloud apps](https://github.com/ReturnInfinity/BareMetal-Cloud)

## Privacy and Security Concerns

* [UK Police blames Microsoft Copilot for intelligence mistake](https://it.slashdot.org/story/26/01/14/1519213/uk-police-blame-microsoft-copilot-for-intelligence-mistake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Beijing advises Chinese firms to ban the use of US and Israeli cybersecurity software](https://it.slashdot.org/story/26/01/14/1833237/beijing-tells-chinese-firms-to-stop-using-us-and-israeli-cybersecurity-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Never-before-seen Linux malware demonstrates advanced capabilities](https://it.slashdot.org/story/26/01/14/0238210/never-before-seen-linux-malware-is-far-more-advanced-than-typical?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [New York City and Washington affected by widespread Verizon outage](https://tech.slashdot.org/story/26/01/14/1918256/widespread-verizon-outage-prompts-emergency-alerts-in-washington-new-york-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## AI and its Impacts

* [Matthew McConaughey trademarks himself to combat AI misuse](https://slashdot.org/story/26/01/14/1549211/matthew-mcconaughey-trademarks-himself-to-fight-ai-misuse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The Influentists: Debunking AI hype without proof](https://carette.xyz/posts/influentists/)

* [Why we don't use AI](https://yarnspinner.dev/blog/why-we-dont-use-ai/)

* [Signal creator Moxie Marlinspike aims to revolutionize AI like he did with messaging](https://arstechnica.com/security/2026/01/signal-creator-moxie-marlinspike-wants-to-do-for-ai-what-he-did-for-messaging/)

## Energy and Environmental Trends

* [Wind power saved Spain 4.6B euros in electricity bills in 2025](https://www.surinenglish.com/spain/wind-power-slashes-billion-euros-off-electricity-bills-20251217082020-nt.html)

* [Coal power generation in China and India declines for the first time since the 1970s](https://news.slashdot.org/story/26/01/14/1810207/coal-power-generation-falls-in-china-and-india-for-first-time-since-1970s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [NASA acknowledges record heat but avoids linking it to climate change](https://science.slashdot.org/story/26/01/14/1915220/nasa-acknowledges-record-heat-but-avoids-referencing-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Oceans struggling to absorb carbon due to microplastics pollution](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss)

## Human Behavior and Demographics

* [Volkswagen to reintroduce physical dashboard buttons in the Polo EV](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss)

* [Some dogs demonstrate the ability to eavesdrop to learn new words](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss)

* [Bali requires three months of bank accounts for visitors](https://soylentnews.org/article.pl?sid=26/01/09/1824225&amp;from=rss)

## Thoughts and Explorations in Technology

* [How a 40-line fix resolved a 400x performance gap](https://questdb.com/blog/jvm-current-thread-user-time/)

* [Interactive eBPF playground for hands-on learning](https://ebpf.party)

* [Build your own programming language (2020)](https://thesephist.com/posts/pl/)

* [AI Coding Assistants are becoming less effective](https://spectrum.ieee.org/ai-coding-degrades)

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

* [2026-01-14, 22:02:00](https://it.slashdot.org/story/26/01/14/2143252/house-sysadmin-stole-200-phones-caught-by-house-it-desk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [House Sysadmin Stole 200 Phones, Caught By House IT Desk](https://it.slashdot.org/story/26/01/14/2143252/house-sysadmin-stole-200-phones-caught-by-house-it-desk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 21:26:51](https://news.ycombinator.com/item?id=46623761) - [Sun Position Calculator](https://drajmarsh.bitbucket.io/earthsun.html)
* [2026-01-14, 21:25:00](https://news.slashdot.org/story/26/01/14/1924225/uk-scraps-mandatory-digital-id-enrollment-for-workers-after-public-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Scraps Mandatory Digital ID Enrollment for Workers After Public Backlash](https://news.slashdot.org/story/26/01/14/1924225/uk-scraps-mandatory-digital-id-enrollment-for-workers-after-public-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 20:55:24](https://lobste.rs/s/4icz4n/what_does_it_take_ship_rust_safety) - [What does it take to ship Rust in safety-critical?](https://blog.rust-lang.org/2026/01/14/what-does-it-take-to-ship-rust-in-safety-critical/)
* [2026-01-14, 20:54:39](https://news.ycombinator.com/item?id=46623195) - [The Influentists: AI hype without proof](https://carette.xyz/posts/influentists/)
* [2026-01-14, 20:52:21](https://lobste.rs/s/xa4ndh/selfci_minimalistic_local_first_unix) - [SelfCI - a minimalistic local-first Unix-philosophy-abiding CI](https://app.radicle.xyz/nodes/radicle.dpc.pw/rad:z2tDzYbAXxTQEKTGFVwiJPajkbeDU)
* [2026-01-14, 20:50:00](https://tech.slashdot.org/story/26/01/14/199210/dell-tells-staff-to-get-ready-for-the-biggest-transformation-in-company-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dell Tells Staff To Get Ready For the &apos;Biggest Transformation in Company History&apos;](https://tech.slashdot.org/story/26/01/14/199210/dell-tells-staff-to-get-ready-for-the-biggest-transformation-in-company-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 20:33:00](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss) - [Tech Bloggers Switching From Windows to Linux](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss)
* [2026-01-14, 20:18:16](https://news.ycombinator.com/item?id=46622463) - [Wind power slashed 4.6B euros off electricity bills in Spain last year](https://www.surinenglish.com/spain/wind-power-slashes-billion-euros-off-electricity-bills-20251217082020-nt.html)
* [2026-01-14, 20:12:25](https://news.ycombinator.com/item?id=46622328) - [Claude Cowork Exfiltrates Files](https://www.promptarmor.com/resources/claude-cowork-exfiltrates-files)
* [2026-01-14, 20:11:00](https://science.slashdot.org/story/26/01/14/1915220/nasa-acknowledges-record-heat-but-avoids-referencing-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Acknowledges Record Heat But Avoids Referencing Climate Change](https://science.slashdot.org/story/26/01/14/1915220/nasa-acknowledges-record-heat-but-avoids-referencing-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 20:02:36](https://news.ycombinator.com/item?id=46622139) - [Show HN: Harmony – AI notetaker for Discord](https://harmonynotetaker.ai/)
* [2026-01-14, 19:45:21](https://news.ycombinator.com/item?id=46621786) - [Show HN: A fast CLI and MCP server for managing Lambda cloud GPU instances](https://github.com/Strand-AI/lambda-cli)
* [2026-01-14, 19:39:27](https://news.ycombinator.com/item?id=46621668) - [US to suspend immigrant visa processing for 75 nations, State Department says](https://www.reuters.com/world/us/us-suspend-visa-processing-75-nations-next-week-fox-news-reports-2026-01-14/)
* [2026-01-14, 19:31:57](https://lobste.rs/s/mj7k0s/coding_on_phone_what_i_learned_building) - [Coding on a Phone: What I Learned Building Software on Mobile in the Last Three Weeks](https://rahulpandita.me/blog/2026-01-14-Mobile-Development)
* [2026-01-14, 19:31:48](https://news.ycombinator.com/item?id=46621518) - [The string theory hype machine will never die](https://www.math.columbia.edu/~woit/wordpress/?p=15407)
* [2026-01-14, 19:20:00](https://tech.slashdot.org/story/26/01/14/1918256/widespread-verizon-outage-prompts-emergency-alerts-in-washington-new-york-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Widespread Verizon Outage Prompts Emergency Alerts in Washington, New York City](https://tech.slashdot.org/story/26/01/14/1918256/widespread-verizon-outage-prompts-emergency-alerts-in-washington-new-york-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 19:16:11](https://lobste.rs/s/jluhmx/chat_is_least_interesting_interface_llms) - [Chat is the least interesting interface to LLMs](https://www.haskellforall.com/2026/01/chat-is-least-interesting-interface-to.html)
* [2026-01-14, 19:06:23](https://news.ycombinator.com/item?id=46620990) - [Ask HN: How do you safely give LLMs SSH/DB access?](https://news.ycombinator.com/item?id=46620990)
* [2026-01-14, 19:04:52](https://lobste.rs/s/pxaxqn/my_gripes_with_prolog) - [My Gripes with Prolog](https://buttondown.com/hillelwayne/archive/my-gripes-with-prolog/)
* [2026-01-14, 18:58:16](https://news.ycombinator.com/item?id=46620835) - [Verizon outages reported across U.S.](https://www.firstcoastnews.com/article/news/nation-world/verizon-outage-reported/507-ef3cb3d0-f595-432f-9f84-d1690a5085a7)
* [2026-01-14, 18:50:00](https://it.slashdot.org/story/26/01/14/1833237/beijing-tells-chinese-firms-to-stop-using-us-and-israeli-cybersecurity-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Beijing Tells Chinese Firms To Stop Using US and Israeli Cybersecurity Software](https://it.slashdot.org/story/26/01/14/1833237/beijing-tells-chinese-firms-to-stop-using-us-and-israeli-cybersecurity-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 18:49:37](https://news.ycombinator.com/item?id=46620673) - [Native ZFS VDEV for Object Storage (OpenZFS Summit)](https://www.zettalane.com/blog/openzfs-summit-2025-mayanas-objbacker.html)
* [2026-01-14, 18:10:00](https://news.slashdot.org/story/26/01/14/1810207/coal-power-generation-falls-in-china-and-india-for-first-time-since-1970s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Coal Power Generation Falls in China and India for First Time Since 1970s](https://news.slashdot.org/story/26/01/14/1810207/coal-power-generation-falls-in-china-and-india-for-first-time-since-1970s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 17:30:00](https://slashdot.org/story/26/01/14/179257/mckinsey-asks-graduates-to-use-ai-chatbot-in-recruitment-process?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [McKinsey Asks Graduates To Use AI Chatbot in Recruitment Process](https://slashdot.org/story/26/01/14/179257/mckinsey-asks-graduates-to-use-ai-chatbot-in-recruitment-process?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 17:27:22](https://news.ycombinator.com/item?id=46619030) - [So, you&apos;ve hit an age gate. what now?](https://www.eff.org/deeplinks/2026/01/so-youve-hit-age-gate-what-now)
* [2026-01-14, 17:07:42](https://news.ycombinator.com/item?id=46618714) - [Ask HN: Share your personal website](https://news.ycombinator.com/item?id=46618714)
* [2026-01-14, 16:55:00](https://it.slashdot.org/story/26/01/14/1655234/bezoss-vision-of-rented-cloud-pcs-looks-less-far-fetched?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bezos&apos;s Vision of Rented Cloud PCs Looks Less Far-Fetched](https://it.slashdot.org/story/26/01/14/1655234/bezoss-vision-of-rented-cloud-pcs-looks-less-far-fetched?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 16:25:07](https://news.ycombinator.com/item?id=46618027) - [GitHub should charge everyone $1 more per month to fund open source](https://blog.greg.technology/2025/11/27/github-should-charge-1-dollar-more-per-month.html)
* [2026-01-14, 16:07:34](https://news.ycombinator.com/item?id=46617744) - [How much of my observability data is waste?](https://usetero.com/blog/the-question-your-observability-vendor-wont-answer)
* [2026-01-14, 16:04:53](https://news.ycombinator.com/item?id=46617705) - [Show HN: A 10KiB kernel for cloud apps](https://github.com/ReturnInfinity/BareMetal-Cloud)
* [2026-01-14, 16:03:11](https://news.ycombinator.com/item?id=46617668) - [Roam 50GB is now Roam 100GB](https://starlink.com/support/article/58c9c8b7-474e-246f-7e3c-06db3221d34d)
* [2026-01-14, 16:02:00](https://slashdot.org/story/26/01/14/1549211/matthew-mcconaughey-trademarks-himself-to-fight-ai-misuse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Matthew McConaughey Trademarks Himself To Fight AI Misuse](https://slashdot.org/story/26/01/14/1549211/matthew-mcconaughey-trademarks-himself-to-fight-ai-misuse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 15:57:00](https://lobste.rs/s/wh52mr/scrollbars_scrollbars) - [Scrollbars in Scrollbars](https://matoseb.com/scrollbars-scrollbars/)
* [2026-01-14, 15:52:46](https://news.ycombinator.com/item?id=46617492) - [Show HN: The Xoscript Programming Language](https://xoscript.com/history.xo)
* [2026-01-14, 15:49:00](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss) - [China Expected to Approve H200 Imports in Early 2026, Report Claims](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss)
* [2026-01-14, 15:29:59](https://news.ycombinator.com/item?id=46617149) - [Government drops plans for mandatory digital ID to work in UK](https://www.bbc.com/news/articles/c3385zrrx73o)
* [2026-01-14, 15:20:00](https://it.slashdot.org/story/26/01/14/1519213/uk-police-blame-microsoft-copilot-for-intelligence-mistake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Police Blame Microsoft Copilot for Intelligence Mistake](https://it.slashdot.org/story/26/01/14/1519213/uk-police-blame-microsoft-copilot-for-intelligence-mistake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 15:19:12](https://lobste.rs/s/ixqdco/artificial_stupidintelligence_airport) - [Artificial StupidIntelligence and Airport Sinks](https://www.deobald.ca/essays/2026-01-13-artificial-stupidintelligence-and-airport-sinks/)
* [2026-01-14, 15:11:35](https://news.ycombinator.com/item?id=46616919) - [Show HN: Digital Carrot – Block social media with programmable rules and goals](https://www.digitalcarrot.app/)
* [2026-01-14, 14:44:28](https://lobste.rs/s/vnkwyb/my_opinion_on_spelling_run_time_vs_run_time) - [My Opinion on Spelling Run Time vs. Run-time vs. Runtime](https://bobrubbens.nl/post/my-opinion-on-spelling-runtime/)
* [2026-01-14, 14:40:00](https://news.slashdot.org/story/26/01/14/1436212/europe-is-rediscovering-the-virtues-of-cash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe is Rediscovering the Virtues of Cash](https://news.slashdot.org/story/26/01/14/1436212/europe-is-rediscovering-the-virtues-of-cash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 14:35:50](https://news.ycombinator.com/item?id=46616496) - [Edge of Emulation: Game Boy Sewing Machines (2020)](https://shonumi.github.io/articles/art22.html)
* [2026-01-14, 14:34:40](https://news.ycombinator.com/item?id=46616481) - [Show HN: Webctl – Browser automation for agents based on CLI instead of MCP](https://github.com/cosinusalpha/webctl)
* [2026-01-14, 14:11:16](https://lobste.rs/s/9jc8z9/from_passwords_passkeys) - [From passwords to passkeys](https://ssg.dev/from-passwords-to-passkeys/)
* [2026-01-14, 14:04:00](https://news.slashdot.org/story/26/01/14/144240/nuclear-weapons-are-now-esg-compliant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nuclear Weapons Are Now ESG Compliant](https://news.slashdot.org/story/26/01/14/144240/nuclear-weapons-are-now-esg-compliant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 13:00:00](https://it.slashdot.org/story/26/01/14/0238210/never-before-seen-linux-malware-is-far-more-advanced-than-typical?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Never-Before-Seen Linux Malware Is &apos;Far More Advanced Than Typical&apos;](https://it.slashdot.org/story/26/01/14/0238210/never-before-seen-linux-malware-is-far-more-advanced-than-typical?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 12:25:59](https://news.ycombinator.com/item?id=46615235) - [Lago (Open-Source Billing) is hiring across teams and geos](https://news.ycombinator.com/item?id=46615235)
* [2026-01-14, 12:12:39](https://lobste.rs/s/6vnavr/servo_2025_stats) - [Servo 2025 Stats](https://blogs.igalia.com/mrego/servo-2025-stats/)
* [2026-01-14, 11:54:54](https://lobste.rs/s/wyvqyq/interactive_ebpf_playground) - [Interactive eBPF playground](https://ebpf.party)
* [2026-01-14, 11:25:11](https://lobste.rs/s/cydp2t/porting_minijinja_go_with_agent) - [Porting MiniJinja to Go With an Agent](https://lucumr.pocoo.org/2026/1/14/minijinja-go-port/)
* [2026-01-14, 11:06:00](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss) - [Some Dogs Eavesdrop on Their Owners to Learn New Words](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss)
* [2026-01-14, 10:57:54](https://lobste.rs/s/j2e4em/black_white_array_new_data_structure_for) - [Black-White Array: A New Data Structure for Dynamic Data Sets](https://arxiv.org/abs/2004.09051)
* [2026-01-14, 10:53:13](https://news.ycombinator.com/item?id=46614558) - [I Hate GitHub Actions with Passion](https://xlii.space/eng/i-hate-github-actions-with-passion/)
* [2026-01-14, 10:34:16](https://lobste.rs/s/oxlocc/how_build_good_software) - [How to Build Good Software](https://knowledge.csc.gov.sg/ethos-issue-21/how-to-build-good-software/)
* [2026-01-14, 10:00:00](https://science.slashdot.org/story/26/01/14/0232205/nasa-department-of-energy-to-develop-lunar-surface-reactor-by-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA, Department of Energy To Develop Lunar Surface Reactor By 2030](https://science.slashdot.org/story/26/01/14/0232205/nasa-department-of-energy-to-develop-lunar-surface-reactor-by-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 09:25:58](https://news.ycombinator.com/item?id=46614037) - [I’m leaving Redis for SolidQueue](https://www.simplethread.com/redis-solidqueue/)
* [2026-01-14, 08:10:28](https://lobste.rs/s/knwdud/just_browser) - [Just the Browser](https://justthebrowser.com/)
* [2026-01-14, 06:24:00](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss) - [An Ultra-Fast Quantum Tunneling Device for the 6G Terahertz Era](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss)
* [2026-01-14, 06:10:18](https://lobste.rs/s/jsw3wk/why_we_don_t_use_ai) - [Why We Don&apos;t Use AI](https://yarnspinner.dev/blog/why-we-dont-use-ai/)
* [2026-01-14, 03:47:56](https://lobste.rs/s/ummoom/build_your_own_programming_language_2020) - [Build your own programming language (2020)](https://thesephist.com/posts/pl/)
* [2026-01-14, 02:44:21](https://lobste.rs/s/pfj3mi/rust_at_volvo_cars) - [Rust at Volvo Cars](https://www.youtube.com/watch?v=vBofCW8j70A)
* [2026-01-14, 02:42:41](https://lobste.rs/s/cgzwem/how_40_line_fix_eliminated_400x) - [How a 40-Line Fix Eliminated a 400x Performance Gap](https://questdb.com/blog/jvm-current-thread-user-time/)
* [2026-01-14, 01:41:00](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss) - [Volkswagen is Bringing Physical Buttons Back to the Dashboard With the Polo EV](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss)
* [2026-01-13, 21:46:21](https://lobste.rs/s/k5yvju/bevy_0_18) - [Bevy 0.18](https://bevy.org/news/bevy-0-18/)
* [2026-01-13, 21:13:19](https://lobste.rs/s/pwj9ue/truffleruby_33_is_released) - [TruffleRuby 33 is Released](https://truffleruby.dev/blog/truffleruby-33-is-released)
* [2026-01-13, 20:52:00](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss) - [A Sit-Stand Ratio ‘Sweet Spot’ May Boost Office Productivity](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss)
* [2026-01-13, 16:28:04](https://lobste.rs/s/mb07nn/anthropic_invests_1_5_million_python) - [Anthropic invests $1.5 million in the Python Software Foundation and open source security](https://pyfound.blogspot.com/2025/12/anthropic-invests-in-python.html)
* [2026-01-13, 16:24:44](https://lobste.rs/s/3bhiap/signal_creator_moxie_marlinspike_wants) - [Signal creator Moxie Marlinspike wants to do for AI what he did for messaging](https://arstechnica.com/security/2026/01/signal-creator-moxie-marlinspike-wants-to-do-for-ai-what-he-did-for-messaging/)
* [2026-01-13, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss) - [Poul-Henning Kamp&apos;s Feedback to the EU on Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss)
* [2026-01-13, 15:38:45](https://lobste.rs/s/6skrep/ai_coding_assistants_are_getting_worse) - [AI Coding Assistants Are Getting Worse](https://spectrum.ieee.org/ai-coding-degrades)
* [2026-01-13, 11:38:59](https://lobste.rs/s/5ttvyj/more_assorted_notes_on_liquid_glass_2025) - [More assorted notes on Liquid Glass (2025)](https://morrick.me/archives/10068)
* [2026-01-13, 11:26:00](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss) - [A 2,000-Year-Old Fingerprint May Solve Mystery of Scandinavia&apos;s Oldest Wooden Boat](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss)
* [2026-01-13, 10:57:02](https://news.ycombinator.com/item?id=46599403) - [Show HN: HyTags – HTML as a Programming Language](https://hytags.org)
* [2026-01-13, 06:45:00](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss) - [How Doubting Your Doubts May Increase Commitment to Goals](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss)
* [2026-01-13, 01:52:00](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss) - [The Book Only Gets 3 Stars, but is Considered Great Literature](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss)
* [2026-01-12, 21:11:00](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss) - [NASA Postponed ISS Spacewalk Over Medical Issue, Crew Will Return Early](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss)
* [2026-01-12, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss) - [Very Tough Microbes May Help Us Cement Our Future on Mars](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss)
* [2026-01-12, 12:00:00](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss) - [Oceans Are Struggling To Absorb Carbon As Microplastics Flood Their Waters](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss)
* [2026-01-12, 07:53:40](https://news.ycombinator.com/item?id=46585372) - [A Brief Introduction to the Basics of Game Theory](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1968579)
* [2026-01-12, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss) - [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss)
* [2026-01-12, 02:33:00](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss) - [Bose Open-Sources its SoundTouch Home Theater Smart Speakers Ahead of End-of-Life](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss)
* [2026-01-11, 21:52:00](https://soylentnews.org/article.pl?sid=26/01/10/0115240&amp;from=rss) - [Dell Reveals People Don&apos;t Care About AI in PCs – and a New Truly Embarrassing Windows 11 Fail ](https://soylentnews.org/article.pl?sid=26/01/10/0115240&amp;from=rss)
* [2026-01-11, 17:13:00](https://soylentnews.org/article.pl?sid=26/01/10/0111244&amp;from=rss) - [Your Daily Cup of Tea Could Help Fight Heart Disease, Cancer, Aging, and More](https://soylentnews.org/article.pl?sid=26/01/10/0111244&amp;from=rss)
* [2026-01-11, 12:26:00](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss) - [Finding Runaway Stars to Help Map Dark Matter in the Milky Way](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss)
* [2026-01-11, 07:24:00](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss) - [Virginia&apos;s Datacenter Tax Breaks Cost State $1.6B in 2025](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss)
* [2026-01-11, 02:58:36](https://news.ycombinator.com/item?id=46572307) - [Why some clothes shrink in the wash and how to unshrink them](https://www.swinburne.edu.au/news/2025/08/why-some-clothes-shrink-in-the-wash-and-how-to-unshrink-them/)
* [2026-01-11, 02:54:00](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss) - [Some People Get Drunk Without Drinking and Scientists Finally Know Why](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss)
* [2026-01-10, 22:58:25](https://news.ycombinator.com/item?id=46570811) - [Ski map artist James Niehues, the &apos;Monet of the mountains&apos; (2021)](https://adventure.com/ski-map-artist-james-niehues/)
* [2026-01-10, 22:10:00](https://soylentnews.org/article.pl?sid=26/01/09/1828213&amp;from=rss) - [Busting the 5 Biggest Myths About Renewable Energy](https://soylentnews.org/article.pl?sid=26/01/09/1828213&amp;from=rss)
* [2026-01-10, 17:27:00](https://soylentnews.org/article.pl?sid=26/01/09/1824225&amp;from=rss) - [Bali Wants Three Months of Bank Account Statements to Visit ](https://soylentnews.org/article.pl?sid=26/01/09/1824225&amp;from=rss)
* [2026-01-10, 12:42:00](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss) - [Microsoft Silently Kills Windows and Office Phone Activation and Forces Online Activation](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss)
* [2026-01-10, 07:53:00](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss) - [Renowned Mathematician Joel David Hamkins Declares AI Models Useless for Solving Math](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss)
* [2026-01-10, 03:09:00](https://soylentnews.org/article.pl?sid=26/01/08/0331227&amp;from=rss) - [The Nation&apos;s Strictest Privacy Law Just Took Effect, to Data Brokers’ Chagrin](https://soylentnews.org/article.pl?sid=26/01/08/0331227&amp;from=rss)
* [2026-01-10, 00:32:10](https://news.ycombinator.com/item?id=46561341) - [Show HN: WebTiles – create a tiny 250x250 website with neighbors around you](https://webtiles.kicya.net/)
