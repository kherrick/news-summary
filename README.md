# [News Summary](https://kherrick.github.io/news-summary/)

## Corporate Updates and Legal Battles

* [Qualcomm Buys Lattner's Modular for Almost $4bn](https://soylentnews.org/article.pl?sid=26/07/09/0348202&amp;from=rss) - Qualcomm has acquired Chris Lattner's AI software startup, Modular, for nearly $4 billion to strengthen its position in AI infrastructure.

* [Apple Sues OpenAI, Accusing It of Stealing Company Secrets](https://www.nytimes.com/2026/07/10/technology/apple-openai-lawsuit.html) - Apple has filed a lawsuit against OpenAI, alleging the AI company appropriated proprietary information.

* [OpenAI to Retire ChatGPT Atlas Browser Less Than a Year After Launch](https://slashdot.org/story/26/07/10/0852224/openai-to-retire-chatgpt-atlas-browser-less-than-a-year-after-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - OpenAI's experimental browser project will be discontinued less than a year post-launch.

* [Alibaba Bans Anthropic's Claude Code After an Alleged Hidden China-Detection Backdoor is Uncovered](https://soylentnews.org/article.pl?sid=26/07/09/0343224&amp;from=rss) - Alibaba has prohibited the use of Anthropic's Claude code following reports of a hidden backdoor designed to detect information about China.

## Advances in AI and Computing

* [Prismata: Confining cross-site prompt injection in web agents](https://arxiv.org/abs/2607.08147) - Researchers propose novel defenses against cross-site injection attacks targeted at web agents.

* [Postgres rewritten in Rust, now passing 100% of the Postgres regression tests](https://github.com/malisper/pgrust) - Significant progress and compatibility achieved with rewriting the database in Rust.

* [GPT-5.6, Grok 4.5, Claude, and Muse Spark build the same 4 apps](https://www.tryai.dev/blog/gpt-5.6-build-off-12-models) - AI models compete in building identical applications; comparison highlights abilities and limitations.

* [GPT-5.6 Sol Ultra produces proof of the Cycle Double Cover Conjecture](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf) - OpenAI's latest language model offers a mathematical proof for a longstanding conjecture.

## Cybersecurity and Threats

* [GhostLock, a stack-UAF that has existed in ALL Linux distributions for 15 years](https://nebusec.ai/research/ionstack-part-2/) - Researchers uncover a long-standing vulnerability in Linux systems related to uninitialized memory use.

* [An Update on the scraper situation](https://lwn.net/SubscriberLink/1080822/990a8a5e2d379085/) - The rise of data scraping continues to create challenges for content creators and platforms.

* [How the terrorist group Boko Haram uses frontier AI](https://casp.ac/reports/ai-enabled-terrorism) - A deep dive into how extremist organizations are leveraging artificial intelligence to enhance their operations.

## Policy and Technology Regulation

* [Feds Demand Autonomous Vehicle Companies Stop Interfering With First Responders](https://tech.slashdot.org/story/26/07/10/1947248/feds-demand-autonomous-vehicle-companies-stop-interfering-with-first-responders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - US government pushes for stricter rules on how autonomous vehicles interact with emergency services.

* [NYC To Become First In US To Ban Deceptive Subscription Practices](https://news.slashdot.org/story/26/07/10/1940229/nyc-to-become-first-in-us-to-ban-deceptive-subscription-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A new law in New York City aims to prohibit misleading subscription tactics.

* [Disable Autoplay and Infinite Scroll Or Risk Massive Fines, EU Tells Meta](https://meta.slashdot.org/story/26/07/10/1737224/disable-autoplay-and-infinite-scroll-or-risk-massive-fines-eu-tells-meta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The EU issues a warning to Meta against employing potentially addictive design patterns in their platforms.

## Engineering and Technological Breakthroughs

* [War Atlas: An interactive cartography of every named war in human history](https://waratlas.org) - A fascinating project mapping all named conflicts across human history.

* [QuadRF can spot drones and see WiFi through my wall](https://www.jeffgeerling.com/blog/2026/quadrf-can-spot-drones-and-see-wifi-through-my-wall/) - Cutting-edge radio frequency technology reveals new surveillance capabilities.

* [Humanoid Robots Controlled By Surgeons Did World-First Operation On Live Pigs](https://hardware.slashdot.org/story/26/07/10/0128252/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A groundbreaking surgical procedure performed using humanoid robots.

## Cultural, Historical, and Scientific Discoveries

* [Record-Breaking Ocean Drilling Reveals Why Japan's 2011 Tsunami Was So Deadly](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss) - New insights into geological events behind the devastating 2011 tsunami in Japan.

* [Lost city discovered beneath Egypt's desert with ancient church](https://www.dailymail.com/sciencetech/article-15956159/Incredible-lost-city-discovered-Egypts-desert.html) - Archaeologists unearth an ancient city complete with a preserved church in Egypt’s desert.

* [For The First Time, A Cell Built From Scratch Grows And Divides](https://soylentnews.org/article.pl?sid=26/07/05/1924207&amp;from=rss) - Scientists achieve a milestone in synthetic biology by creating the first-ever fully synthetic cell capable of growth and division.

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

* [2026-07-10, 21:44:00](https://soylentnews.org/article.pl?sid=26/07/09/0348202&amp;from=rss) - [Qualcomm Buys Lattner&apos;s Modular for Almost $4bn](https://soylentnews.org/article.pl?sid=26/07/09/0348202&amp;from=rss)
* [2026-07-10, 21:20:29](https://news.ycombinator.com/item?id=48865431) - [Apple Sues OpenAI, Accusing It of Stealing Company Secrets](https://www.nytimes.com/2026/07/10/technology/apple-openai-lawsuit.html)
* [2026-07-10, 21:11:18](https://news.ycombinator.com/item?id=48865332) - [Moss (YC F25) Is Hiring](https://www.ycombinator.com/companies/moss/jobs/52LnqLQ-software-engineer-sdk)
* [2026-07-10, 21:03:38](https://news.ycombinator.com/item?id=48865238) - [Prismata: Confining cross-site prompt injection in web agents](https://arxiv.org/abs/2607.08147)
* [2026-07-10, 21:00:00](https://tech.slashdot.org/story/26/07/10/1947248/feds-demand-autonomous-vehicle-companies-stop-interfering-with-first-responders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Feds Demand Autonomous Vehicle Companies Stop Interfering With First Responders](https://tech.slashdot.org/story/26/07/10/1947248/feds-demand-autonomous-vehicle-companies-stop-interfering-with-first-responders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 20:52:39](https://lobste.rs/s/qtui32/adding_go_browser_code_runner) - [Adding Go to a browser code runner](https://blog.lvmbdv.dev/posts/adding-go-to-a-browser-code-runner/)
* [2026-07-10, 20:52:28](https://news.ycombinator.com/item?id=48865093) - [GPT-5.6, Grok 4.5, Claude, and Muse Spark build the same 4 apps](https://www.tryai.dev/blog/gpt-5.6-build-off-12-models)
* [2026-07-10, 20:43:02](https://news.ycombinator.com/item?id=48864969) - [GhostLock, a stack-UAF that has existed in ALL Linux distributions for 15 years](https://nebusec.ai/research/ionstack-part-2/)
* [2026-07-10, 20:00:28](https://news.ycombinator.com/item?id=48864507) - [Don&apos;t discontinue Gemini 2.5 Flash](https://discuss.ai.google.dev/t/please-dont-discontinue-gemini-2-5-flash/174246)
* [2026-07-10, 20:00:00](https://news.slashdot.org/story/26/07/10/1940229/nyc-to-become-first-in-us-to-ban-deceptive-subscription-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYC To Become First In US To Ban Deceptive Subscription Practices](https://news.slashdot.org/story/26/07/10/1940229/nyc-to-become-first-in-us-to-ban-deceptive-subscription-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 19:38:34](https://news.ycombinator.com/item?id=48864252) - [An Update on the scraper situation](https://lwn.net/SubscriberLink/1080822/990a8a5e2d379085/)
* [2026-07-10, 19:12:27](https://lobste.rs/s/6fmohi/package_management_as_org_chart) - [Package Management as Org Chart](https://nesbitt.io/2026/07/10/package-management-as-org-chart.html)
* [2026-07-10, 19:05:12](https://lobste.rs/s/le3iri/postgres_rewritten_rust_now_passing_100) - [Postgres rewritten in Rust, now passing 100% of the Postgres regression tests](https://github.com/malisper/pgrust)
* [2026-07-10, 19:03:36](https://news.ycombinator.com/item?id=48863849) - [Materials innovation has a scale-up problem, not discovery](https://www.atomscale.ai/updates/our-thesis-atom-to-scale)
* [2026-07-10, 19:00:00](https://meta.slashdot.org/story/26/07/10/1737224/disable-autoplay-and-infinite-scroll-or-risk-massive-fines-eu-tells-meta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disable Autoplay and Infinite Scroll Or Risk Massive Fines, EU Tells Meta](https://meta.slashdot.org/story/26/07/10/1737224/disable-autoplay-and-infinite-scroll-or-risk-massive-fines-eu-tells-meta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 18:49:26](https://news.ycombinator.com/item?id=48863707) - [How the terrorist group Boko Haram uses frontier AI](https://casp.ac/reports/ai-enabled-terrorism)
* [2026-07-10, 18:29:19](https://news.ycombinator.com/item?id=48863490) - [GPT-5.6 Sol Ultra produces proof of the Cycle Double Cover Conjecture [pdf]](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf)
* [2026-07-10, 18:26:24](https://news.ycombinator.com/item?id=48863464) - [New York City to become first in US to ban deceptive subscription practices](https://www.theguardian.com/us-news/2026/jul/10/new-york-city-deceptive-subscriptions-ban)
* [2026-07-10, 18:03:05](https://lobste.rs/s/ifefxo/debugging_performance_regressions) - [Debugging performance regressions](https://hpc.guix.info/blog/2026/07/debugging-performance-regressions/)
* [2026-07-10, 18:00:58](https://lobste.rs/s/mcrqed/running_1000_tests_1s_2022) - [Running 1000 tests in 1s (2022)](https://marvinh.dev/blog/running-1000-test-in-1s/)
* [2026-07-10, 18:00:00](https://entertainment.slashdot.org/story/26/07/10/1727227/disney-explores-a-free-tier-as-youtube-draws-tv-viewers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney+ Explores a Free Tier As YouTube Draws TV Viewers](https://entertainment.slashdot.org/story/26/07/10/1727227/disney-explores-a-free-tier-as-youtube-draws-tv-viewers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 17:52:48](https://news.ycombinator.com/item?id=48863080) - [War Atlas: An interactive cartography of every named war in human history](https://waratlas.org)
* [2026-07-10, 17:17:58](https://lobste.rs/s/fxuz6h/what_every_python_developer_should_know) - [What Every Python Developer Should Know About the CPython ABI](https://labs.quansight.org/blog/python-abi-abi3t)
* [2026-07-10, 17:01:00](https://soylentnews.org/article.pl?sid=26/07/09/0343224&amp;from=rss) - [Alibaba Bans Anthropic&apos;s Claude Code After an Alleged Hidden China-Detection Backdoor is Uncovered](https://soylentnews.org/article.pl?sid=26/07/09/0343224&amp;from=rss)
* [2026-07-10, 17:00:00](https://slashdot.org/story/26/07/10/0852224/openai-to-retire-chatgpt-atlas-browser-less-than-a-year-after-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI to Retire ChatGPT Atlas Browser Less Than a Year After Launch](https://slashdot.org/story/26/07/10/0852224/openai-to-retire-chatgpt-atlas-browser-less-than-a-year-after-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 16:48:41](https://news.ycombinator.com/item?id=48862365) - [The tech of &apos;Terminator 2&apos; – an oral history (2017)](https://vfxblog.com/2017/08/23/the-tech-of-terminator-2-an-oral-history/)
* [2026-07-10, 16:48:37](https://lobste.rs/s/t4f6jt/after_7_years_production_scarf_has) - [After 7 years in production, Scarf has reluctantly moved away from Haskell](https://avi.press/posts/2026-07-10-after-7-years-in-production-scarf-has-reluctantly-moved-away-from-haskell.html)
* [2026-07-10, 16:37:52](https://news.ycombinator.com/item?id=48862252) - [Snails&apos; teeth beats spider silk as nature&apos;s strongest material (2015)](https://www.smithsonianmag.com/smart-news/spider-silk-loses-top-spot-natures-strongest-material-snails-teeth-180954346/)
* [2026-07-10, 16:28:11](https://lobste.rs/s/w8svjr/hannah_montana_linux_v26_0) - [Hannah Montana Linux v26.0](https://gitlab.com/DecaCagle/hannahmontanalinux26)
* [2026-07-10, 16:00:00](https://tech.slashdot.org/story/26/07/10/0846241/sap-makes-it-easier-for-customers-to-shop-for-legacy-product-support-ending-eu-antitrust-probe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SAP Makes It Easier For Customers To Shop For Legacy Product Support, Ending EU Antitrust Probe](https://tech.slashdot.org/story/26/07/10/0846241/sap-makes-it-easier-for-customers-to-shop-for-legacy-product-support-ending-eu-antitrust-probe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 15:59:53](https://news.ycombinator.com/item?id=48861717) - [QuadRF can spot drones and see WiFi through my wall](https://www.jeffgeerling.com/blog/2026/quadrf-can-spot-drones-and-see-wifi-through-my-wall/)
* [2026-07-10, 15:42:38](https://lobste.rs/s/cq3mft/practical_algorithms_for_incremental) - [Practical Algorithms for Incremental Software Development Environments](https://www2.eecs.berkeley.edu/Pubs/TechRpts/1997/Archive/CSD-97-946.pdf)
* [2026-07-10, 15:23:50](https://news.ycombinator.com/item?id=48861217) - [Show HN: SubjectiveZero, an open-source agentic node editor for creative coding](https://sxp.studio/apps/subz)
* [2026-07-10, 15:23:42](https://news.ycombinator.com/item?id=48861213) - [Computation as a universal and fundamental concept](https://ergo.org/courses/computation-as-a-universal-and-fundamental-concept)
* [2026-07-10, 15:00:00](https://slashdot.org/story/26/07/10/052227/openais-ceo-of-agi-deployment-fidji-simo-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s CEO of AGI Deployment, Fidji Simo, Is Stepping Down](https://slashdot.org/story/26/07/10/052227/openais-ceo-of-agi-deployment-fidji-simo-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 13:33:00](https://news.ycombinator.com/item?id=48859701) - [Write code like a human will maintain it](https://unstack.io/write-code-like-a-human-will-maintain-it)
* [2026-07-10, 13:31:08](https://news.ycombinator.com/item?id=48859678) - [Successful Companies Go Blind](https://ianreppel.org/how-successful-companies-go-blind/)
* [2026-07-10, 12:17:00](https://soylentnews.org/article.pl?sid=26/07/09/0339222&amp;from=rss) - [Back to Basics, or Masm. Writing a Tiny Notepad for W11.](https://soylentnews.org/article.pl?sid=26/07/09/0339222&amp;from=rss)
* [2026-07-10, 12:01:41](https://lobste.rs/s/ey7far/two_ways_design) - [Two Ways To Design](https://wiki.c2.com/?TwoWaysToDesign)
* [2026-07-10, 12:00:00](https://tech.slashdot.org/story/26/07/10/0838224/microsoft-to-retire-owa-light-client-in-exchange-server?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft to Retire OWA Light Client In Exchange Server](https://tech.slashdot.org/story/26/07/10/0838224/microsoft-to-retire-owa-light-client-in-exchange-server?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 11:59:55](https://news.ycombinator.com/item?id=48858737) - [Late Bronze Age Collapse](https://acoup.blog/2026/01/30/collections-the-late-bronze-age-collapse-a-very-brief-introduction/)
* [2026-07-10, 10:44:48](https://lobste.rs/s/u9yf5l/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/u9yf5l/what_are_you_doing_this_weekend)
* [2026-07-10, 10:32:41](https://news.ycombinator.com/item?id=48858121) - [Good Tools Are Invisible](https://www.gingerbill.org/article/2026/07/10/good-tools-are-invisible/)
* [2026-07-10, 09:00:00](https://science.slashdot.org/story/26/07/10/0830229/nobel-winning-us-chemist-will-move-to-china-to-lead-ai-institute?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nobel-Winning US Chemist Will Move to China to Lead AI Institute](https://science.slashdot.org/story/26/07/10/0830229/nobel-winning-us-chemist-will-move-to-china-to-lead-ai-institute?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 07:30:00](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss) - [Record-Breaking Ocean Drilling Reveals Why Japan&apos;s 2011 Tsunami Was So Deadly](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss)
* [2026-07-10, 05:28:45](https://lobste.rs/s/skiumt/let_s_build_simple_interpreter_for_apl) - [Let&apos;s build a simple interpreter for APL](https://mathspp.com/blog/lsbasi-apl-part1)
* [2026-07-10, 03:30:00](https://hardware.slashdot.org/story/26/07/10/0128252/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humanoid Robots Controlled By Surgeons Did World-First Operation On Live Pigs](https://hardware.slashdot.org/story/26/07/10/0128252/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 03:24:53](https://lobste.rs/s/xyotoa/cpp2rust_automatic_translation_c_safe) - [Cpp2Rust: Automatic Translation of C++ to Safe Rust](https://github.com/Cpp2Rust/cpp2rust)
* [2026-07-10, 02:46:00](https://soylentnews.org/article.pl?sid=26/07/09/0329217&amp;from=rss) - [Bethesda, Id Software Reportedly Hit Hard by Microsoft Layoffs](https://soylentnews.org/article.pl?sid=26/07/09/0329217&amp;from=rss)
* [2026-07-10, 01:25:59](https://lobste.rs/s/2jgiax/superoptimizer_look_at_smallest_program) - [Superoptimizer -- A Look at the Smallest Program](https://dl.acm.org/doi/epdf/10.1145/36177.36194)
* [2026-07-10, 00:46:25](https://lobste.rs/s/e85zgh/road_lisp_why_lisp) - [A road to Lisp: Why Lisp](https://scotto.me/blog/2026-07-09-why-lisp/)
* [2026-07-09, 23:49:39](https://lobste.rs/s/bcf7pk/repo_local_documentation_system_for) - [Repo-Local Documentation System for Humans &amp; Agents](https://gist.github.com/lukewilson2002/cb48062397d8b51954034d94b8c19d6d)
* [2026-07-09, 23:00:00](https://news.slashdot.org/story/26/07/09/1947218/lawmakers-probe-growing-use-of-chinese-ai-models-in-us-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lawmakers Probe Growing Use of Chinese AI Models In US Companies ](https://news.slashdot.org/story/26/07/09/1947218/lawmakers-probe-growing-use-of-chinese-ai-models-in-us-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 22:06:00](https://soylentnews.org/article.pl?sid=26/07/08/0159235&amp;from=rss) - [Interoception:  the Sense of How You Feel Inside](https://soylentnews.org/article.pl?sid=26/07/08/0159235&amp;from=rss)
* [2026-07-09, 22:00:00](https://tech.slashdot.org/story/26/07/09/1829252/google-search-hits-all-time-usage-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Search Hits All-Time Usage Record](https://tech.slashdot.org/story/26/07/09/1829252/google-search-hits-all-time-usage-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 21:00:00](https://yro.slashdot.org/story/26/07/09/1835232/meta-patents-ai-device-that-tracks-your-emotions-watches-you-take-your-meds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Patents AI Device That Tracks Your Emotions, Watches You Take Your Meds](https://yro.slashdot.org/story/26/07/09/1835232/meta-patents-ai-device-that-tracks-your-emotions-watches-you-take-your-meds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 20:36:43](https://lobste.rs/s/lep7wh/how_build_circular_lcd_clock) - [How to build a circular LCD clock](https://blinry.org/lcd-clock/)
* [2026-07-09, 20:06:04](https://lobste.rs/s/eehcpl/page_weight_matters) - [Page weight matters](https://nh3.dev/blog/05-bloat)
* [2026-07-09, 20:00:00](https://slashdot.org/story/26/07/09/1821245/openai-rolls-out-gpt-56-after-government-greenlight-announces-chatgpt-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Rolls Out GPT-5.6 After Government Greenlight, Announces &apos;ChatGPT Work&apos;](https://slashdot.org/story/26/07/09/1821245/openai-rolls-out-gpt-56-after-government-greenlight-announces-chatgpt-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 19:49:37](https://news.ycombinator.com/item?id=48851476) - [Show HN: Reviving my 2001 college band with AI](https://www.fadingmaize.com)
* [2026-07-09, 19:00:00](https://news.slashdot.org/story/26/07/09/1659227/google-hands-open-health-stack-to-the-linux-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Hands Open Health Stack To the Linux Foundation](https://news.slashdot.org/story/26/07/09/1659227/google-hands-open-health-stack-to-the-linux-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 17:23:00](https://soylentnews.org/article.pl?sid=26/07/08/0155211&amp;from=rss) - [NASA May Send A Backup, Nuclear-Powered Mars Rover To The Moon](https://soylentnews.org/article.pl?sid=26/07/08/0155211&amp;from=rss)
* [2026-07-09, 16:26:15](https://lobste.rs/s/pg7hce/conviviality_computational_science) - [Conviviality in computational science](https://blog.khinsen.net/posts/2026/07/06/conviviality.html)
* [2026-07-09, 15:45:17](https://news.ycombinator.com/item?id=48847834) - [Show HN: Reverse-engineering web apps into agent tools](https://news.ycombinator.com/item?id=48847834)
* [2026-07-09, 15:41:15](https://lobste.rs/s/0mam5k/lobsters_interview_with_mitchellh) - [Lobsters Interview with mitchellh](https://alexalejandre.com/programming/interview-with-mitchell-hashimoto/)
* [2026-07-09, 15:21:30](https://lobste.rs/s/tedi5h/you_paid_me_long_time_linux_user_use) - [You paid me, a long-time Linux user, to use Windows 11 exclusively for a month: here’s how it went](https://www.osnews.com/story/145459/you-paid-me-a-long-time-linux-user-to-use-windows-11-exclusively-for-a-month-heres-how-it-went/)
* [2026-07-09, 14:56:32](https://lobste.rs/s/o9edbl/announcing_rust_1_97_0) - [Announcing Rust 1.97.0](https://blog.rust-lang.org/2026/07/09/Rust-1.97.0/)
* [2026-07-09, 12:53:46](https://lobste.rs/s/3eo2nv/i_did_not_kill_stanley_lieber_how_draw_with) - [I Did Not Kill Stanley Lieber: How to draw (with 9front)](https://triapul.cz/automa/i_did_not_kill_stanley_lieber)
* [2026-07-09, 12:32:00](https://soylentnews.org/article.pl?sid=26/07/08/0153215&amp;from=rss) - [The Twenty-Ninth International Obfuscated C Code Contest is back](https://soylentnews.org/article.pl?sid=26/07/08/0153215&amp;from=rss)
* [2026-07-09, 11:16:18](https://news.ycombinator.com/item?id=48844046) - [Show HN: Wyrm – Solve algebra by touch, built on an open-source soundness engine](https://github.com/dicroce/wyrm_math)
* [2026-07-09, 08:23:07](https://lobste.rs/s/v5hkjy/two_case_studies_nan) - [two case studies of NaN](https://sebsite.pw/w/20260709-nan.html)
* [2026-07-09, 07:51:00](https://soylentnews.org/article.pl?sid=26/07/08/0151252&amp;from=rss) - [The Supreme Court Just Lit a Fuse Under Flock&apos;s License Plate Camera Empire](https://soylentnews.org/article.pl?sid=26/07/08/0151252&amp;from=rss)
* [2026-07-09, 03:08:00](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss) - [Rats Show Empathy, According to Model](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss)
* [2026-07-08, 22:22:00](https://soylentnews.org/article.pl?sid=26/07/08/0147225&amp;from=rss) - [Kernel Anti-Cheat Digital Restrictions Management Technology Is an Overreach](https://soylentnews.org/article.pl?sid=26/07/08/0147225&amp;from=rss)
* [2026-07-08, 21:50:54](https://lobste.rs/s/6rkdik/rewriting_bun_rust) - [Rewriting Bun in Rust](https://bun.com/blog/bun-in-rust)
* [2026-07-08, 17:37:00](https://soylentnews.org/article.pl?sid=26/07/06/2010203&amp;from=rss) - [Zombie ‘Who Owns Unix?’ Lawsuit Comes Alive Again](https://soylentnews.org/article.pl?sid=26/07/06/2010203&amp;from=rss)
* [2026-07-08, 12:53:00](https://soylentnews.org/article.pl?sid=26/07/06/204247&amp;from=rss) - [Paper Mill Cancer Studies Get Double the Number of Citations as Genuine Papers](https://soylentnews.org/article.pl?sid=26/07/06/204247&amp;from=rss)
* [2026-07-08, 08:05:00](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss) - [South Korea to Spend $1T on More Memory Chip Production and Humanoid Robots](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss)
* [2026-07-08, 03:21:00](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss) - [Google Loses Final Appeal Over $4.7 Billion EU Android Antitrust Fine](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss)
* [2026-07-07, 22:44:00](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss) - [New Attack Provides One More Reason Why AI Browsers Are A Bad Idea](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss)
* [2026-07-07, 18:00:00](https://soylentnews.org/article.pl?sid=26/07/05/2125258&amp;from=rss) - [Florida Bans Local Governments From Pursuing Net-Zero Emissions Goals](https://soylentnews.org/article.pl?sid=26/07/05/2125258&amp;from=rss)
* [2026-07-07, 13:13:00](https://soylentnews.org/article.pl?sid=26/07/05/2113231&amp;from=rss) - [NetNut Cracked As Google And FBI Target 2 Million-Device Botnet](https://soylentnews.org/article.pl?sid=26/07/05/2113231&amp;from=rss)
* [2026-07-07, 12:20:54](https://news.ycombinator.com/item?id=48816724) - [Show HN: Frugon – Find which LLM calls a cheaper model could handle (local, MIT)](https://github.com/Rodiun/frugon)
* [2026-07-07, 08:34:00](https://soylentnews.org/article.pl?sid=26/07/05/1926209&amp;from=rss) - [Amazon is Ready to Deploy the LEO Satellite Broadband Service](https://soylentnews.org/article.pl?sid=26/07/05/1926209&amp;from=rss)
* [2026-07-07, 07:33:13](https://news.ycombinator.com/item?id=48814724) - [The Clouds of Hiroshima](https://doomsdaymachines.net/p/the-clouds-of-hiroshima)
* [2026-07-07, 06:59:27](https://news.ycombinator.com/item?id=48814503) - [Why We Don&apos;t Trust the Database with Authentication](https://blog.sturdystatistics.com/posts/api_keys/)
* [2026-07-07, 06:06:25](https://news.ycombinator.com/item?id=48814170) - [Inference Optimization for MiMo v2.5: Pushing Hybrid SWA Efficiency to the Limit](https://mimo.xiaomi.com/blog/mimo-v2-5-inference)
* [2026-07-07, 03:52:00](https://soylentnews.org/article.pl?sid=26/07/05/1924207&amp;from=rss) - [For The First Time, A Cell Built From Scratch Grows And Divides](https://soylentnews.org/article.pl?sid=26/07/05/1924207&amp;from=rss)
* [2026-07-06, 23:04:00](https://soylentnews.org/article.pl?sid=26/07/05/1921216&amp;from=rss) - [David Rosenthal on the LLM Negative Feedback Loop](https://soylentnews.org/article.pl?sid=26/07/05/1921216&amp;from=rss)
* [2026-07-06, 18:23:00](https://soylentnews.org/article.pl?sid=26/07/05/1917212&amp;from=rss) - [Travel like it&apos;s 0 AD. ](https://soylentnews.org/article.pl?sid=26/07/05/1917212&amp;from=rss)
* [2026-07-06, 13:42:00](https://soylentnews.org/article.pl?sid=26/07/05/1911206&amp;from=rss) - [Modern Life May be Outpacing the Human Mind](https://soylentnews.org/article.pl?sid=26/07/05/1911206&amp;from=rss)
* [2026-07-06, 12:32:57](https://news.ycombinator.com/item?id=48803707) - [Lost city discovered beneath Egypt&apos;s desert with ancient church](https://www.dailymail.com/sciencetech/article-15956159/Incredible-lost-city-discovered-Egypts-desert.html)
* [2026-07-06, 09:00:00](https://soylentnews.org/article.pl?sid=26/07/05/092233&amp;from=rss) - [New Law Could Let Tesla Ship Cars With No Brake Pedals Installed](https://soylentnews.org/article.pl?sid=26/07/05/092233&amp;from=rss)
* [2026-07-06, 04:16:00](https://soylentnews.org/article.pl?sid=26/07/05/0859246&amp;from=rss) - [The Weirdness of Neutrinos Could Completely Rewrite Particle Physics](https://soylentnews.org/article.pl?sid=26/07/05/0859246&amp;from=rss)
