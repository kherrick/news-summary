# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Updates

* [I Wrote a Scheme in 2025](https://maplant.com/2026-02-09-I-Wrote-a-Scheme-in-2025.html) ([comments](https://lobste.rs/s/elol3n/i_wrote_scheme_2025)): An intriguing deep dive into developing a Scheme language in 2025.

* [Linux Kernel 6.19 is Released and the Next Version is Confirmed to be 7.0](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss)): The latest updates on Linux Kernel development, featuring new advancements and future upgrades.

* [Redefining Go Functions](https://pboyd.io/posts/redefining-go-functions/) ([comments](https://news.ycombinator.com/item?id=46960118)): A technical exploration of the capabilities and innovations in redefining Go programming functions.

* [Simplifying Vulkan one subsystem at a time](https://www.khronos.org/blog/simplifying-vulkan-one-subsystem-at-a-time) ([comments](https://lobste.rs/s/e5vqhs/simplifying_vulkan_one_subsystem_at_time)): Elegant improvements to enhance Vulkan's software capabilities, bringing clarity to complex systems.

* [Show HN: Distr 2.0 – A year of learning how to ship to customer environments](https://github.com/distr-sh/distr) ([comments](https://news.ycombinator.com/item?id=46958742)): Insights into software shipping challenges and solutions during a year of learning.

## AI Insights and Challenges

* [Frontier AI agents violate ethical constraints 30–50% of time, pressured by KPIs](https://arxiv.org/abs/2512.20798) ([comments](https://news.ycombinator.com/item?id=46954920)): Examining ethical dilemmas faced by AI agents and their implications for responsible technology use.

* [Deepfake Fraud Taking Place On an Industrial Scale, Study Finds](https://tech.slashdot.org/story/26/02/09/1844248/deepfake-fraud-taking-place-on-an-industrial-scale-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/26/02/09/1844248/deepfake-fraud-taking-place-on-an-industrial-scale-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): Investigating the growing threat of deepfake fraud and its industrial-scale implementation.

## Modern Socioeconomic Trends

* [The Big Money in Today&apos;s Economy Is Going To Capital, Not Labor](https://slashdot.org/story/26/02/10/1438213/the-big-money-in-todays-economy-is-going-to-capital-not-labor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/26/02/10/1438213/the-big-money-in-todays-economy-is-going-to-capital-not-labor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): Insights into the unequal distribution of wealth in today's economy.

* [NYC Private School Tuition Breaks $70,000 Milestone for Fall](https://news.slashdot.org/story/26/02/10/0654245/nyc-private-school-tuition-breaks-70000-milestone-for-fall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/26/02/10/0654245/nyc-private-school-tuition-breaks-70000-milestone-for-fall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): Marking the increasing costs of education, private school tuition in NYC hits a monumental high.

## Health and Environment

* [Electric Cars Are Making It Easier To Breathe, Study Finds](https://tech.slashdot.org/story/26/02/09/206209/electric-cars-are-making-it-easier-to-breathe-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/26/02/09/206209/electric-cars-are-making-it-easier-to-breathe-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): A promising advancement for sustainability and air quality improvements.

* [2 To 3 Cups of Coffee a Day May Reduce Dementia Risk. But Not if It&apos;s Decaf.](https://science.slashdot.org/story/26/02/09/2040213/2-to-3-cups-of-coffee-a-day-may-reduce-dementia-risk-but-not-if-its-decaf?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/26/02/09/2040213/2-to-3-cups-of-coffee-a-day-may-reduce-dementia-risk-but-not-if-its-decaf?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): A study reveals the surprising health benefits of caffeine intake.

## Geopolitical and Legal Developments

* [Apple and Google Agree To Change App Stores After &apos;Effective Duopoly&apos; Claim](https://apple.slashdot.org/story/26/02/10/1556232/apple-and-google-agree-to-change-app-stores-after-effective-duopoly-claim?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://apple.slashdot.org/story/26/02/10/1556232/apple-and-google-agree-to-change-app-stores-after-effective-duopoly-claim?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): Major tech giants commit to significant policy changes following antitrust allegations.

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

* [2026-02-10, 16:19:44](https://lobste.rs/s/elol3n/i_wrote_scheme_2025) - [I Wrote a Scheme in 2025](https://maplant.com/2026-02-09-I-Wrote-a-Scheme-in-2025.html)
* [2026-02-10, 16:00:00](https://apple.slashdot.org/story/26/02/10/1556232/apple-and-google-agree-to-change-app-stores-after-effective-duopoly-claim?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple and Google Agree To Change App Stores After &apos;Effective Duopoly&apos; Claim](https://apple.slashdot.org/story/26/02/10/1556232/apple-and-google-agree-to-change-app-stores-after-effective-duopoly-claim?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-10, 15:50:00](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss) - [Linux Kernel 6.19 is Released and the Next Version is Confirmed to be 7.0](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss)
* [2026-02-10, 15:12:16](https://lobste.rs/s/naa5fq/postmarketos_at_fosdem_2026_hackathon) - [postmarketOS at FOSDEM 2026 + Hackathon](https://postmarketos.org/blog/2026/02/10/fosdem-and-hackathon/)
* [2026-02-10, 15:12:11](https://news.ycombinator.com/item?id=46960743) - [Disruption with Some GitHub Services](https://www.githubstatus.com/incidents/wkgqj4546z1c)
* [2026-02-10, 15:09:47](https://lobste.rs/s/ogr30w/how_i_cut_my_google_search_dependence_half) - [How I Cut My Google Search Dependence in Half](https://hister.org/posts/how-i-cut-my-google-search-dependence-in-half/)
* [2026-02-10, 15:08:36](https://news.ycombinator.com/item?id=46960675) - [I started programming when I was 7. I&apos;m 50 now and the thing I loved has changed](https://www.jamesdrandall.com/posts/the_thing_i_loved_has_changed/)
* [2026-02-10, 15:05:24](https://news.ycombinator.com/item?id=46960624) - [The US is flirting with its first-ever population decline](https://www.bloomberg.com/news/articles/2026-01-30/trump-immigration-crackdown-could-shrink-us-population-for-first-time)
* [2026-02-10, 15:01:01](https://lobste.rs/s/qni92w/how_bus_route_falls_apart_2025) - [How a Bus Route Falls Apart (2025)](https://homesignalblog.wordpress.com/2025/06/29/how-a-bus-route-falls-apart/)
* [2026-02-10, 15:00:00](https://slashdot.org/story/26/02/10/1438213/the-big-money-in-todays-economy-is-going-to-capital-not-labor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Big Money in Today&apos;s Economy Is Going To Capital, Not Labor](https://slashdot.org/story/26/02/10/1438213/the-big-money-in-todays-economy-is-going-to-capital-not-labor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-10, 14:58:35](https://news.ycombinator.com/item?id=46960517) - [Vercel&apos;s CEO offers to cover expenses of &apos;Jmail&apos;](https://www.threads.com/@qa_test_hq/post/DUkC_zjiGQh)
* [2026-02-10, 14:49:29](https://news.ycombinator.com/item?id=46960392) - [Parse, Don&apos;t Validate (2019)](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/)
* [2026-02-10, 14:46:30](https://lobste.rs/s/e5vqhs/simplifying_vulkan_one_subsystem_at_time) - [Simplifying Vulkan one subsystem at a time](https://www.khronos.org/blog/simplifying-vulkan-one-subsystem-at-a-time)
* [2026-02-10, 14:27:16](https://news.ycombinator.com/item?id=46960118) - [Redefining Go Functions](https://pboyd.io/posts/redefining-go-functions/)
* [2026-02-10, 14:20:49](https://news.ycombinator.com/item?id=46960036) - [Oxide raises $200M Series C](https://oxide.computer/blog/our-200m-series-c)
* [2026-02-10, 14:13:47](https://lobste.rs/s/oayzoz/redefining_go_functions) - [Redefining Go Functions](https://pboyd.io/posts/redefining-go-functions/)
* [2026-02-10, 14:02:10](https://news.ycombinator.com/item?id=46959832) - [Jury told that Meta, Google &apos;engineered addiction&apos; at landmark US trial](https://techxplore.com/news/2026-02-jury-told-meta-google-addiction.html)
* [2026-02-10, 14:00:00](https://news.slashdot.org/story/26/02/10/0654245/nyc-private-school-tuition-breaks-70000-milestone-for-fall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYC Private School Tuition Breaks $70,000 Milestone for Fall](https://news.slashdot.org/story/26/02/10/0654245/nyc-private-school-tuition-breaks-70000-milestone-for-fall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-10, 13:48:24](https://news.ycombinator.com/item?id=46959679) - [America&apos;s $1T AI Gamble](https://www.apricitas.io/p/americas-1t-ai-gamble)
* [2026-02-10, 13:26:14](https://news.ycombinator.com/item?id=46959418) - [Simplifying Vulkan One Subsystem at a Time](https://www.khronos.org/blog/simplifying-vulkan-one-subsystem-at-a-time)
* [2026-02-10, 12:19:23](https://news.ycombinator.com/item?id=46958742) - [Show HN: Distr 2.0 – A year of learning how to ship to customer environments](https://github.com/distr-sh/distr)
* [2026-02-10, 12:18:06](https://lobste.rs/s/9dfnqa/freebsd_home_nas_part_10_monitoring_with) - [FreeBSD Home NAS, part 10: monitoring with VictoriaMetrics and Grafana](https://rtfm.co.ua/en/freebsd-home-nas-part-10-monitoring-with-victoriametrics-and-grafana/)
* [2026-02-10, 12:00:00](https://tech.slashdot.org/story/26/02/09/2045217/software-poses-all-time-risk-to-speculative-credit-deutsche-bank-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Software Poses &apos;All-Time&apos; Risk To Speculative Credit, Deutsche Bank Warns](https://tech.slashdot.org/story/26/02/09/2045217/software-poses-all-time-risk-to-speculative-credit-deutsche-bank-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-10, 11:59:10](https://lobste.rs/s/t5fcfw/ssh_agent_forwarding_tmux_done_right_2023) - [SSH agent forwarding and tmux done right (2023)](https://blogsystem5.substack.com/p/ssh-agent-forwarding-and-tmux-done)
* [2026-02-10, 11:42:14](https://news.ycombinator.com/item?id=46958399) - [Europe&apos;s $24T Breakup with Visa and Mastercard Has Begun](https://europeanbusinessmagazine.com/business/europes-24-trillion-breakup-with-visa-and-mastercard-has-begun/)
* [2026-02-10, 11:39:26](https://news.ycombinator.com/item?id=46958378) - [RLHF from Scratch](https://github.com/ashworks1706/rlhf-from-scratch)
* [2026-02-10, 11:28:45](https://lobste.rs/s/6os1a6/fun_python_puzzle_with_circular_imports) - [A fun Python puzzle with circular imports](https://utcc.utoronto.ca/~cks/space/blog/python/PythonCircularImportPuzzle)
* [2026-02-10, 11:21:56](https://news.ycombinator.com/item?id=46958231) - [Clean-room implementation of Half-Life 2 on the Quake 1 engine](https://code.idtech.space/fn/hl2)
* [2026-02-10, 11:08:00](https://soylentnews.org/article.pl?sid=26/02/09/0531254&amp;from=rss) - [Your iPhone is About to Get a New Privacy Feature to Protect Your Location Data From Prying Eyes](https://soylentnews.org/article.pl?sid=26/02/09/0531254&amp;from=rss)
* [2026-02-10, 09:19:00](https://news.ycombinator.com/item?id=46957198) - [Qwen-Image-2.0: Professional infographics, exquisite photorealism](https://qwen.ai/blog?id=qwen-image-2.0)
* [2026-02-10, 09:11:43](https://lobste.rs/s/dlmxra/gitbutler_cli_is_really_good) - [GitButler CLI Is Really Good](https://matduggan.com/gitbutler-cli-is-really-good/)
* [2026-02-10, 09:01:00](https://science.slashdot.org/story/26/02/09/2040213/2-to-3-cups-of-coffee-a-day-may-reduce-dementia-risk-but-not-if-its-decaf?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2 To 3 Cups of Coffee a Day May Reduce Dementia Risk. But Not if It&apos;s Decaf.](https://science.slashdot.org/story/26/02/09/2040213/2-to-3-cups-of-coffee-a-day-may-reduce-dementia-risk-but-not-if-its-decaf?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-10, 08:02:16](https://lobste.rs/s/w5ibgj/portablecc) - [PortableCC](https://github.com/PortableCC)
* [2026-02-10, 06:22:00](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss) - [Microsoft Releases Urgent Office Patch While Russian-State Hackers Pounce](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss)
* [2026-02-10, 06:01:00](https://tech.slashdot.org/story/26/02/09/1844248/deepfake-fraud-taking-place-on-an-industrial-scale-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Deepfake Fraud Taking Place On an Industrial Scale, Study Finds](https://tech.slashdot.org/story/26/02/09/1844248/deepfake-fraud-taking-place-on-an-industrial-scale-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-10, 05:31:41](https://lobste.rs/s/v59ykl/c_2008) - [c-- (2008)](https://www.cs.tufts.edu/%7Enr/c--/)
* [2026-02-10, 05:20:32](https://news.ycombinator.com/item?id=46955712) - [Show HN: I built a macOS tool for network engineers – it&apos;s called NetViews](https://www.netviews.app)
* [2026-02-10, 03:58:58](https://lobste.rs/s/dcjrur/browser_html_web_browser_built_with_web) - [browser.html - a web browser built with web technologies using Servo as web rendering engine](https://tangled.org/me.webbeef.org/browser.html)
* [2026-02-10, 03:45:00](https://tech.slashdot.org/story/26/02/09/206209/electric-cars-are-making-it-easier-to-breathe-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Electric Cars Are Making It Easier To Breathe, Study Finds](https://tech.slashdot.org/story/26/02/09/206209/electric-cars-are-making-it-easier-to-breathe-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-10, 03:17:17](https://news.ycombinator.com/item?id=46954920) - [Frontier AI agents violate ethical constraints 30–50% of time, pressured by KPIs](https://arxiv.org/abs/2512.20798)
* [2026-02-10, 03:02:47](https://lobste.rs/s/r2koiq/what_functional_programmers_get_wrong) - [What Functional Programmers Get Wrong About Systems](https://iankduncan.com/engineering/2026-02-09-what-functional-programmers-get-wrong-about-systems/)
* [2026-02-10, 01:45:00](https://slashdot.org/story/26/02/09/1957211/kalshi-prediction-markets-match-or-beat-traditional-forecasting-tools-for-macro-indicators-nber-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kalshi Prediction Markets Match or Beat Traditional Forecasting Tools For Macro Indicators, NBER Study Finds](https://slashdot.org/story/26/02/09/1957211/kalshi-prediction-markets-match-or-beat-traditional-forecasting-tools-for-macro-indicators-nber-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-10, 01:38:00](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss) - [A Fresh Look at IBM 3270 Information Display System](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss)
* [2026-02-10, 01:26:42](https://news.ycombinator.com/item?id=46954136) - [Rust implementation of Mistral&apos;s Voxtral Mini 4B Realtime runs in your browser](https://github.com/TrevorS/voxtral-mini-realtime-rs)
* [2026-02-10, 01:17:35](https://news.ycombinator.com/item?id=46954049) - [Pure C, CPU-only inference with Mistral Voxtral Realtime 4B speech to text model](https://github.com/antirez/voxtral.c)
* [2026-02-10, 00:46:14](https://news.ycombinator.com/item?id=46953815) - [Zulip.com Values](https://zulip.com/values/)
* [2026-02-10, 00:28:30](https://lobste.rs/s/gtjqqn/electricity_use_ai_coding_agents) - [Electricity use of AI coding agents](https://www.simonpcouch.com/blog/2026-01-20-cc-impact/)
* [2026-02-10, 00:11:15](https://lobste.rs/s/9kb1xw/fine_i_ll_try_ai) - [Fine, I&apos;ll Try AI](https://technobabble.bearblog.dev/fine-ill-try-ai/)
* [2026-02-09, 22:45:00](https://linux.slashdot.org/story/26/02/09/2034222/linux-70-kernel-confirmed-by-linus-torvalds-expected-in-mid-april-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux 7.0 Kernel Confirmed By Linus Torvalds, Expected In Mid-April 2026](https://linux.slashdot.org/story/26/02/09/2034222/linux-70-kernel-confirmed-by-linus-torvalds-expected-in-mid-april-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 21:50:37](https://lobste.rs/s/dsptog/can_my_sparc_server_host_website) - [Can my SPARC server host a website?](https://rup12.net/posts/can-my-sparc-server-host-my-website/)
* [2026-02-09, 21:42:56](https://lobste.rs/s/aciykz/better_python_tests_with_inline_snapshot) - [Better Python tests with inline-snapshot](https://pydantic.dev/articles/inline-snapshot)
* [2026-02-09, 21:00:00](https://slashdot.org/story/26/02/09/1929257/openai-starts-running-ads-in-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Starts Running Ads in ChatGPT](https://slashdot.org/story/26/02/09/1929257/openai-starts-running-ads-in-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 20:54:00](https://soylentnews.org/article.pl?sid=26/02/09/0514240&amp;from=rss) - [New York Lawmakers Introduce Bill That Aims to Halt Data Center Development for Three Years](https://soylentnews.org/article.pl?sid=26/02/09/0514240&amp;from=rss)
* [2026-02-09, 20:00:00](https://developers.slashdot.org/story/26/02/09/1948212/sixteen-ai-agents-built-a-c-compiler-from-scratch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sixteen AI Agents Built a C Compiler From Scratch](https://developers.slashdot.org/story/26/02/09/1948212/sixteen-ai-agents-built-a-c-compiler-from-scratch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 19:32:45](https://news.ycombinator.com/item?id=46949870) - [A method and calculator for building foamcore drawer organisers](https://capnfabs.net/posts/foamcore-would-be-a-sick-name-for-a-music-genre/)
* [2026-02-09, 19:15:14](https://news.ycombinator.com/item?id=46949564) - [Discord Alternatives, Ranked](https://taggart-tech.com/discord-alternatives/)
* [2026-02-09, 19:01:00](https://news.slashdot.org/story/26/02/09/181212/romance-publishing-has-an-ai-problem-and-most-readers-dont-know-it-yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Romance Publishing Has an AI Problem and Most Readers Don&apos;t Know It Yet](https://news.slashdot.org/story/26/02/09/181212/romance-publishing-has-an-ai-problem-and-most-readers-dont-know-it-yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 18:09:42](https://lobste.rs/s/rqsjod/proposal_add_hotness_25_vibe_coding) - [Proposal: Add Hotness -.25 to Vibe Coding](https://lobste.rs/s/rqsjod/proposal_add_hotness_25_vibe_coding)
* [2026-02-09, 18:01:00](https://tech.slashdot.org/story/26/02/09/1742213/autodesk-takes-google-to-court-over-ai-movie-software-named-flow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Autodesk Takes Google To Court Over AI Movie Software Named &apos;Flow&apos;](https://tech.slashdot.org/story/26/02/09/1742213/autodesk-takes-google-to-court-over-ai-movie-software-named-flow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 17:09:37](https://news.ycombinator.com/item?id=46947777) - [Hard-braking events as indicators of road segment crash risk](https://research.google/blog/hard-braking-events-as-indicators-of-road-segment-crash-risk/)
* [2026-02-09, 17:01:00](https://tech.slashdot.org/story/26/02/09/1548222/google-lines-up-100-year-sterling-bond-sale?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Lines Up 100-Year Sterling Bond Sale](https://tech.slashdot.org/story/26/02/09/1548222/google-lines-up-100-year-sterling-bond-sale?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 16:26:31](https://news.ycombinator.com/item?id=46947096) - [Converting a $3.88 analog clock from Walmart into a ESP8266-based Wi-Fi clock](https://github.com/jim11662418/ESP8266_WiFi_Analog_Clock)
* [2026-02-09, 16:09:00](https://soylentnews.org/article.pl?sid=26/02/08/0232241&amp;from=rss) - [Taking a Second to Change the Time](https://soylentnews.org/article.pl?sid=26/02/08/0232241&amp;from=rss)
* [2026-02-09, 16:01:00](https://yro.slashdot.org/story/26/02/09/161215/discord-will-require-a-face-scan-or-id-for-full-access-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Discord Will Require a Face Scan or ID for Full Access Next Month](https://yro.slashdot.org/story/26/02/09/161215/discord-will-require-a-face-scan-or-id-for-full-access-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 15:39:51](https://news.ycombinator.com/item?id=46946401) - [Why is the sky blue?](https://explainers.blog/posts/why-is-the-sky-blue/)
* [2026-02-09, 15:39:47](https://lobste.rs/s/vrczh6/discord_launches_teen_by_default) - [Discord Launches Teen-by-Default Settings Globally](https://discord.com/press-releases/discord-launches-teen-by-default-settings-globally)
* [2026-02-09, 14:59:56](https://lobste.rs/s/arddyl/trying_out_thunderbird_appointment) - [Trying out Thunderbird Appointment While I Patiently Wait For An Invite](https://blog.matthewbrunelle.com/trying-out-thunderbird-appointment-while-i-patiently-await-for-an-invite/)
* [2026-02-09, 14:37:38](https://news.ycombinator.com/item?id=46945663) - [Discord will require a face scan or ID for full access next month](https://www.theverge.com/tech/875309/discord-age-verification-global-roll-out)
* [2026-02-09, 14:18:43](https://lobste.rs/s/j8jnqq/six_thoughts_on_generating_c) - [six thoughts on generating c](https://wingolog.org/archives/2026/02/09/six-thoughts-on-generating-c)
* [2026-02-09, 13:23:42](https://lobste.rs/s/xr8ppc/computers_can_be_understood) - [Computers can be understood](https://blog.nelhage.com/post/computers-can-be-understood/)
* [2026-02-09, 12:24:00](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss) - [Vibe Coding is Killing Open Source Software](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss)
* [2026-02-09, 10:35:55](https://lobste.rs/s/manrbz/offpunk_3_0) - [Offpunk 3.0](https://ploum.net/2026-02-09-offpunk3.html)
* [2026-02-09, 10:12:06](https://lobste.rs/s/8959u3/algorithmically_finding_longest_line) - [Algorithmically Finding the Longest Line of Sight on Earth](https://lobste.rs/s/8959u3/algorithmically_finding_longest_line)
* [2026-02-09, 08:39:00](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss) - [The AI productivity trap: Why your Best Engineers are Getting Slower](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss)
* [2026-02-09, 03:54:00](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss) - [FBI Stymied by Apple&apos;s Lockdown Mode After Seizing Journalist&apos;s iPhone](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss)
* [2026-02-08, 23:12:00](https://soylentnews.org/article.pl?sid=26/02/07/0338257&amp;from=rss) - [Russian Spy Satellites Have Intercepted EU Communications Satellites](https://soylentnews.org/article.pl?sid=26/02/07/0338257&amp;from=rss)
* [2026-02-08, 17:24:00](https://soylentnews.org/article.pl?sid=26/02/07/0328238&amp;from=rss) - [Lessons from China’s Delicate Dance of Censorship and Expression](https://soylentnews.org/article.pl?sid=26/02/07/0328238&amp;from=rss)
* [2026-02-08, 12:45:56](https://news.ycombinator.com/item?id=46933779) - [Lance table format explained simply, stupid (Animated)](https://tontinton.com/posts/lance/)
* [2026-02-08, 12:38:00](https://soylentnews.org/article.pl?sid=26/02/07/0323222&amp;from=rss) - [Linux From Scratch Abandoning SysVinit Support](https://soylentnews.org/article.pl?sid=26/02/07/0323222&amp;from=rss)
* [2026-02-08, 10:22:30](https://news.ycombinator.com/item?id=46933022) - [Show HN: Elysia JIT \&quot;Compiler\&quot;, why it&apos;s one of the fastest JavaScript framework](https://elysiajs.com/internal/jit-compiler)
* [2026-02-08, 09:58:31](https://news.ycombinator.com/item?id=46932911) - [MIT Technology Review has confirmed that posts on Moltbook were fake](https://www.technologyreview.com/2026/02/06/1132448/moltbook-was-peak-ai-theater/)
* [2026-02-08, 07:57:00](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss) - [Self-Driving Cars In ‘Difficult Driving Situations’ Are Guided By Random Filipinos Overseas](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss)
* [2026-02-08, 07:19:11](https://news.ycombinator.com/item?id=46932068) - [80386 Barrel Shifter](https://nand2mario.github.io/posts/2026/80386_barrel_shifter/)
* [2026-02-08, 03:14:00](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss) - [A Century of Hair Samples Proves Leaded Gas Ban Worked](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss)
* [2026-02-07, 22:21:00](https://soylentnews.org/article.pl?sid=26/02/07/004218&amp;from=rss) - [France Might Seek Restrictions on VPN Use in Campaign to Keep Minors Off Social Media](https://soylentnews.org/article.pl?sid=26/02/07/004218&amp;from=rss)
* [2026-02-07, 17:49:00](https://soylentnews.org/article.pl?sid=26/02/06/2359259&amp;from=rss) - [Used EVs Currently Offer Car Buyers Lowest Lifetime Cost of Ownership](https://soylentnews.org/article.pl?sid=26/02/06/2359259&amp;from=rss)
* [2026-02-07, 12:59:00](https://soylentnews.org/article.pl?sid=26/02/06/0310232&amp;from=rss) - [The World Factbook Shut Down Unceremonously](https://soylentnews.org/article.pl?sid=26/02/06/0310232&amp;from=rss)
* [2026-02-07, 08:16:00](https://soylentnews.org/article.pl?sid=26/02/06/038224&amp;from=rss) - [US Spy Satellite Agency Declassifies High-Flying Cold War Listening Post](https://soylentnews.org/article.pl?sid=26/02/06/038224&amp;from=rss)
* [2026-02-07, 03:28:00](https://soylentnews.org/article.pl?sid=26/02/06/031244&amp;from=rss) - [AI Agents Now Have Their Own Reddit-Style Social Network, and It&apos;s Getting Weird Fast](https://soylentnews.org/article.pl?sid=26/02/06/031244&amp;from=rss)
* [2026-02-06, 22:45:00](https://soylentnews.org/article.pl?sid=26/02/06/0248203&amp;from=rss) - [The TV Industry Finally Concedes That the Future May Not be in 8K](https://soylentnews.org/article.pl?sid=26/02/06/0248203&amp;from=rss)
* [2026-02-06, 18:00:00](https://soylentnews.org/article.pl?sid=26/02/05/133201&amp;from=rss) - [GNU Hurd is \&quot;Almost There\&quot; With X86_64, SMP &amp; ~75% of Debian Packages Building](https://soylentnews.org/article.pl?sid=26/02/05/133201&amp;from=rss)
* [2026-02-06, 13:11:00](https://soylentnews.org/article.pl?sid=26/02/05/1252238&amp;from=rss) - [Oracle May Lay Off 30,000 and Sell Healthcare Division to Fund AI Buildout](https://soylentnews.org/article.pl?sid=26/02/05/1252238&amp;from=rss)
* [2026-02-06, 08:21:00](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss) - [How to Bypass a Parallel Port Dongle](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss)
* [2026-02-06, 03:59:00](https://soylentnews.org/article.pl?sid=26/02/03/0321201&amp;from=rss) - [Notepad++ update feature hijacked by Chinese state hackers for months](https://soylentnews.org/article.pl?sid=26/02/03/0321201&amp;from=rss)
