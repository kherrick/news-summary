# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Innovations

* [China Lands Rocket During an Orbital Launch For First Time](https://science.slashdot.org/story/26/07/10/1840220/china-lands-rocket-during-an-orbital-launch-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A significant milestone for China's space program as they succeed in landing a rocket during an orbital launch, marking a new era in reusable launch technology.

* [Zeal Z80-based computer](https://zeal8bit.com/) - A deep dive into the Zeal project, which showcases a Z80-based computer for retro enthusiasts and hardware tinkerers.

* [I tried NetBSD as a desktop, and it felt like stepping into the '90s in a good way](https://www.howtogeek.com/i-tried-netbsd-as-a-desktop-and-it-felt-like-stepping-into-the-90s-in-a-good-way/) - Exploring the nostalgic experience of running NetBSD as a desktop operating system.

* [GPT-5.6 Sol Ultra produces proof of the Cycle Double Cover Conjecture [pdf]](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf) - The latest iteration of GPT AI produces a mathematical proof, demonstrating advancements in AI's capabilities.

* [Humanoid Robots Controlled By Surgeons Did World-First Operation On Live Pigs](https://hardware.slashdot.org/story/26/07/10/0128252/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A breakthrough in surgical robotics with operating humanoids performing procedures on live animals.

* [War Atlas: An interactive cartography of every named war in human history](https://waratlas.org) - An innovative platform cataloging every named war throughout history in an interactive and navigable format.

## Artificial Intelligence and Ethics

* [Apple Sues OpenAI, Accusing It of Stealing Company Secrets](https://yro.slashdot.org/story/26/07/10/2223208/apple-sues-openai-accusing-it-of-stealing-company-secrets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple takes legal action against OpenAI over allegations of trade secret theft.

* [Suspecting AI Cheating, Ivy League Prof Ordered an in-Person Final; Scores Fell 50%](https://soylentnews.org/article.pl?sid=26/07/09/1625207&amp;from=rss) - A professor examines the consequences of suspected AI-aided cheating, revealing major shifts in student performance during in-person finals.

* [Brown Professor Suspects Majority of His Class Used AI To Cheat](https://news.slashdot.org/story/26/07/10/2215249/brown-professor-suspects-majority-of-his-class-used-ai-to-cheat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Insights into the challenges educators face with increased usage of AI tools in academic settings.

* [AI 2040: Plan A](https://ai-2040.com/) - A futuristic perspective on how artificial intelligence might shape life by the year 2040.

## Software Development and Cybersecurity

* [Postgres rewritten in Rust, now passing 100% of the Postgres regression tests](https://github.com/malisper/pgrust) - An ambitious project to rewrite Postgres in the safe and modern Rust programming language achieves a milestone.

* [GhostLock, a stack-UAF that has existed in ALL Linux distributions for 15 years](https://nebusec.ai/research/ionstack-part-2/) - Disclosure of a potential security flaw impacting Linux distributions for over a decade.

* [Cpp2Rust: Automatic Translation of C++ to Safe Rust](https://github.com/Cpp2Rust/cpp2rust) - An automated tool for translating C++ code to safe Rust is introduced, emphasizing memory safety and modern coding practices.

## Academic and Scientific Discoveries

* [Einstein's relativity rules chemical bonds in heavy elements, new research shows](https://www.brown.edu/news/2026-07-09/chemical-bonds-relativity) - A novel study reveals how Einstein's theories influence the behavior of chemical bonds in heavy elements.

* [Record-Breaking Ocean Drilling Reveals Why Japan's 2011 Tsunami Was So Deadly](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss) - Scientific breakthroughs on the geological factors that contributed to the devastation of Japan's 2011 tsunami.

* [Silent speech with ultrasound](https://alephneuro.com/blog/silent-speech) - An innovative exploration into reading speech using ultrasound technology, without audible cues.

## Business and Industry Updates

* [SpaceX wants to launch 100k more Starlink satellites for 100x the bandwidth](https://www.zdnet.com/home-and-office/networking/spacex-wants-to-launch-100000-more-starlink-satellites/) - SpaceX's ambitious plans to expand its Starlink satellite network for significantly increased global connectivity.

* [Qualcomm Buys Lattner's Modular for Almost $4bn](https://soylentnews.org/article.pl?sid=26/07/09/0348202&amp;from=rss) - Qualcomm makes a significant acquisition, strengthening its position in modular technology.

* [Disney+ Explores a Free Tier As YouTube Draws TV Viewers](https://entertainment.slashdot.org/story/26/07/10/1727227/disney-explores-a-free-tier-as-youtube-draws-tv-viewers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Disney+ considers ad-supported free-tier offerings to compete with YouTube's growing dominance.

## Cultural and Historical Highlights

* [The vintage beauty of Soviet control rooms (2018)](https://designyoutrust.com/2018/01/vintage-beauty-soviet-control-rooms/) - A nostalgic appreciation of the aesthetics and design of Soviet-era control rooms.

* [Late Bronze Age Collapse](https://acoup.blog/2026/01/30/collections-the-late-bronze-age-collapse-a-very-brief-introduction/) - An exploration of one of history's major societal declines and its underlying causes.

* [The tech of 'Terminator 2' – an oral history (2017)](https://vfxblog.com/2017/08/23/the-tech-of-terminator-2-an-oral-history/) - A retrospective look at the groundbreaking technology behind the iconic film *Terminator 2: Judgment Day*.

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

* [2026-07-11, 07:00:00](https://science.slashdot.org/story/26/07/10/1840220/china-lands-rocket-during-an-orbital-launch-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Lands Rocket During an Orbital Launch For First Time](https://science.slashdot.org/story/26/07/10/1840220/china-lands-rocket-during-an-orbital-launch-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-11, 06:09:33](https://news.ycombinator.com/item?id=48869243) - [What&apos;s the best way to do authentication in modern applications](https://neciudan.dev/most-secure-way-to-store-auth-token)
* [2026-07-11, 05:24:30](https://lobste.rs/s/vhbvwc/i_converted_android_app_webpage) - [I converted an Android app to a webpage](https://danq.me/2026/07/09/your-app-could-have-been-a-webpage/)
* [2026-07-11, 05:19:41](https://news.ycombinator.com/item?id=48868996) - [The vintage beauty of Soviet control rooms (2018)](https://designyoutrust.com/2018/01/vintage-beauty-soviet-control-rooms/)
* [2026-07-11, 04:19:31](https://lobste.rs/s/yabn7v/zeal_z80_based_computer) - [Zeal Z80-based computer](https://zeal8bit.com/)
* [2026-07-11, 03:30:18](https://lobste.rs/s/ovbeds/i_tried_netbsd_as_desktop_it_felt_like) - [I tried NetBSD as a desktop, and it felt like stepping into the &apos;90s in a good way](https://www.howtogeek.com/i-tried-netbsd-as-a-desktop-and-it-felt-like-stepping-into-the-90s-in-a-good-way/)
* [2026-07-11, 03:30:00](https://yro.slashdot.org/story/26/07/10/2223208/apple-sues-openai-accusing-it-of-stealing-company-secrets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Sues OpenAI, Accusing It of Stealing Company Secrets](https://yro.slashdot.org/story/26/07/10/2223208/apple-sues-openai-accusing-it-of-stealing-company-secrets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-11, 02:54:00](https://soylentnews.org/article.pl?sid=26/07/09/1625207&amp;from=rss) - [Suspecting AI Cheating, Ivy League Prof Ordered an in-Person Final; Scores Fell 50%](https://soylentnews.org/article.pl?sid=26/07/09/1625207&amp;from=rss)
* [2026-07-10, 23:02:53](https://lobste.rs/s/kpaxih/update_on_scraper_situation) - [An update on the scraper situation](https://lwn.net/SubscriberLink/1080822/990a8a5e2d379085/)
* [2026-07-10, 23:00:00](https://news.slashdot.org/story/26/07/10/2215249/brown-professor-suspects-majority-of-his-class-used-ai-to-cheat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brown Professor Suspects Majority of His Class Used AI To Cheat](https://news.slashdot.org/story/26/07/10/2215249/brown-professor-suspects-majority-of-his-class-used-ai-to-cheat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 22:30:44](https://news.ycombinator.com/item?id=48866134) - [Einstein&apos;s relativity rules chemical bonds in heavy elements, new research shows](https://www.brown.edu/news/2026-07-09/chemical-bonds-relativity)
* [2026-07-10, 22:00:00](https://tech.slashdot.org/story/26/07/10/1957214/russia-hacks-doorbell-cameras-to-spy-on-nato-bases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Hacks Doorbell Cameras To Spy On NATO Bases](https://tech.slashdot.org/story/26/07/10/1957214/russia-hacks-doorbell-cameras-to-spy-on-nato-bases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 21:44:00](https://soylentnews.org/article.pl?sid=26/07/09/0348202&amp;from=rss) - [Qualcomm Buys Lattner&apos;s Modular for Almost $4bn](https://soylentnews.org/article.pl?sid=26/07/09/0348202&amp;from=rss)
* [2026-07-10, 21:11:18](https://news.ycombinator.com/item?id=48865332) - [Moss (YC F25) Is Hiring](https://www.ycombinator.com/companies/moss/jobs/52LnqLQ-software-engineer-sdk)
* [2026-07-10, 21:00:00](https://tech.slashdot.org/story/26/07/10/1947248/feds-demand-autonomous-vehicle-companies-stop-interfering-with-first-responders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Feds Demand Autonomous Vehicle Companies Stop Interfering With First Responders](https://tech.slashdot.org/story/26/07/10/1947248/feds-demand-autonomous-vehicle-companies-stop-interfering-with-first-responders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 20:52:39](https://lobste.rs/s/qtui32/adding_go_browser_code_runner) - [Adding Go to a browser code runner](https://blog.lvmbdv.dev/posts/adding-go-to-a-browser-code-runner/)
* [2026-07-10, 20:47:09](https://news.ycombinator.com/item?id=48865019) - [Apple sues OpenAI, accuses ex-employees of stealing trade secrets](https://9to5mac.com/2026/07/10/apple-sues-openai-trade-secret-theft/)
* [2026-07-10, 20:43:02](https://news.ycombinator.com/item?id=48864969) - [GhostLock, a stack-UAF that has existed in ALL Linux distributions for 15 years](https://nebusec.ai/research/ionstack-part-2/)
* [2026-07-10, 20:00:00](https://news.slashdot.org/story/26/07/10/1940229/nyc-to-become-first-in-us-to-ban-deceptive-subscription-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYC To Become First In US To Ban Deceptive Subscription Practices](https://news.slashdot.org/story/26/07/10/1940229/nyc-to-become-first-in-us-to-ban-deceptive-subscription-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 19:38:34](https://news.ycombinator.com/item?id=48864252) - [An update on residential proxies and the scraper situation](https://lwn.net/SubscriberLink/1080822/990a8a5e2d379085/)
* [2026-07-10, 19:12:27](https://lobste.rs/s/6fmohi/package_management_as_org_chart) - [Package Management as Org Chart](https://nesbitt.io/2026/07/10/package-management-as-org-chart.html)
* [2026-07-10, 19:05:12](https://lobste.rs/s/le3iri/postgres_rewritten_rust_now_passing_100) - [Postgres rewritten in Rust, now passing 100% of the Postgres regression tests](https://github.com/malisper/pgrust)
* [2026-07-10, 19:00:00](https://meta.slashdot.org/story/26/07/10/1737224/disable-autoplay-and-infinite-scroll-or-risk-massive-fines-eu-tells-meta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disable Autoplay and Infinite Scroll Or Risk Massive Fines, EU Tells Meta](https://meta.slashdot.org/story/26/07/10/1737224/disable-autoplay-and-infinite-scroll-or-risk-massive-fines-eu-tells-meta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 18:29:19](https://news.ycombinator.com/item?id=48863490) - [GPT-5.6 Sol Ultra produces proof of the Cycle Double Cover Conjecture [pdf]](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf)
* [2026-07-10, 18:26:24](https://news.ycombinator.com/item?id=48863464) - [New York City to ban deceptive subscription practices](https://www.theguardian.com/us-news/2026/jul/10/new-york-city-deceptive-subscriptions-ban)
* [2026-07-10, 18:03:05](https://lobste.rs/s/ifefxo/debugging_performance_regressions) - [Debugging performance regressions](https://hpc.guix.info/blog/2026/07/debugging-performance-regressions/)
* [2026-07-10, 18:00:58](https://lobste.rs/s/mcrqed/running_1000_tests_1s_2022) - [Running 1000 tests in 1s (2022)](https://marvinh.dev/blog/running-1000-test-in-1s/)
* [2026-07-10, 18:00:00](https://entertainment.slashdot.org/story/26/07/10/1727227/disney-explores-a-free-tier-as-youtube-draws-tv-viewers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney+ Explores a Free Tier As YouTube Draws TV Viewers](https://entertainment.slashdot.org/story/26/07/10/1727227/disney-explores-a-free-tier-as-youtube-draws-tv-viewers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 17:52:48](https://news.ycombinator.com/item?id=48863080) - [War Atlas: An interactive cartography of every named war in human history](https://waratlas.org)
* [2026-07-10, 17:51:07](https://news.ycombinator.com/item?id=48863064) - [SpaceX wants to launch 100k more Starlink satellites for 100x the bandwidth](https://www.zdnet.com/home-and-office/networking/spacex-wants-to-launch-100000-more-starlink-satellites/)
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
* [2026-07-10, 15:30:44](https://news.ycombinator.com/item?id=48861319) - [A love letter to flashcards](https://lesleylai.info/en/flashcards/)
* [2026-07-10, 15:23:42](https://news.ycombinator.com/item?id=48861213) - [Computation as a universal and fundamental concept](https://ergo.org/courses/computation-as-a-universal-and-fundamental-concept)
* [2026-07-10, 15:00:00](https://slashdot.org/story/26/07/10/052227/openais-ceo-of-agi-deployment-fidji-simo-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s CEO of AGI Deployment, Fidji Simo, Is Stepping Down](https://slashdot.org/story/26/07/10/052227/openais-ceo-of-agi-deployment-fidji-simo-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 13:30:41](https://news.ycombinator.com/item?id=48859673) - [After 7 years in production, Scarf has reluctantly moved away from Haskell](https://avi.press/posts/2026-07-10-after-7-years-in-production-scarf-has-reluctantly-moved-away-from-haskell.html)
* [2026-07-10, 12:17:00](https://soylentnews.org/article.pl?sid=26/07/09/0339222&amp;from=rss) - [Back to Basics, or Masm. Writing a Tiny Notepad for W11.](https://soylentnews.org/article.pl?sid=26/07/09/0339222&amp;from=rss)
* [2026-07-10, 12:01:41](https://lobste.rs/s/ey7far/two_ways_design) - [Two Ways To Design](https://wiki.c2.com/?TwoWaysToDesign)
* [2026-07-10, 12:00:00](https://tech.slashdot.org/story/26/07/10/0838224/microsoft-to-retire-owa-light-client-in-exchange-server?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft to Retire OWA Light Client In Exchange Server](https://tech.slashdot.org/story/26/07/10/0838224/microsoft-to-retire-owa-light-client-in-exchange-server?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 11:59:55](https://news.ycombinator.com/item?id=48858737) - [Late Bronze Age Collapse](https://acoup.blog/2026/01/30/collections-the-late-bronze-age-collapse-a-very-brief-introduction/)
* [2026-07-10, 10:44:48](https://lobste.rs/s/u9yf5l/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/u9yf5l/what_are_you_doing_this_weekend)
* [2026-07-10, 10:32:41](https://news.ycombinator.com/item?id=48858121) - [Good Tools Are Invisible](https://www.gingerbill.org/article/2026/07/10/good-tools-are-invisible/)
* [2026-07-10, 09:00:00](https://science.slashdot.org/story/26/07/10/0830229/nobel-winning-us-chemist-will-move-to-china-to-lead-ai-institute?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nobel-Winning US Chemist Will Move to China to Lead AI Institute](https://science.slashdot.org/story/26/07/10/0830229/nobel-winning-us-chemist-will-move-to-china-to-lead-ai-institute?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 07:30:00](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss) - [Record-Breaking Ocean Drilling Reveals Why Japan&apos;s 2011 Tsunami Was So Deadly](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss)
* [2026-07-10, 03:30:00](https://hardware.slashdot.org/story/26/07/10/0128252/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humanoid Robots Controlled By Surgeons Did World-First Operation On Live Pigs](https://hardware.slashdot.org/story/26/07/10/0128252/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 03:24:53](https://lobste.rs/s/xyotoa/cpp2rust_automatic_translation_c_safe) - [Cpp2Rust: Automatic Translation of C++ to Safe Rust](https://github.com/Cpp2Rust/cpp2rust)
* [2026-07-10, 02:46:00](https://soylentnews.org/article.pl?sid=26/07/09/0329217&amp;from=rss) - [Bethesda, Id Software Reportedly Hit Hard by Microsoft Layoffs](https://soylentnews.org/article.pl?sid=26/07/09/0329217&amp;from=rss)
* [2026-07-10, 00:46:25](https://lobste.rs/s/e85zgh/road_lisp_why_lisp) - [A road to Lisp: Why Lisp](https://scotto.me/blog/2026-07-09-why-lisp/)
* [2026-07-09, 23:00:00](https://news.slashdot.org/story/26/07/09/1947218/lawmakers-probe-growing-use-of-chinese-ai-models-in-us-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lawmakers Probe Growing Use of Chinese AI Models In US Companies ](https://news.slashdot.org/story/26/07/09/1947218/lawmakers-probe-growing-use-of-chinese-ai-models-in-us-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 22:06:00](https://soylentnews.org/article.pl?sid=26/07/08/0159235&amp;from=rss) - [Interoception:  the Sense of How You Feel Inside](https://soylentnews.org/article.pl?sid=26/07/08/0159235&amp;from=rss)
* [2026-07-09, 20:36:43](https://lobste.rs/s/lep7wh/how_build_circular_lcd_clock) - [How to build a circular LCD clock](https://blinry.org/lcd-clock/)
* [2026-07-09, 20:06:04](https://lobste.rs/s/eehcpl/page_weight_matters) - [Page weight matters](https://nh3.dev/blog/05-bloat)
* [2026-07-09, 17:23:00](https://soylentnews.org/article.pl?sid=26/07/08/0155211&amp;from=rss) - [NASA May Send A Backup, Nuclear-Powered Mars Rover To The Moon](https://soylentnews.org/article.pl?sid=26/07/08/0155211&amp;from=rss)
* [2026-07-09, 16:26:15](https://lobste.rs/s/pg7hce/conviviality_computational_science) - [Conviviality in computational science](https://blog.khinsen.net/posts/2026/07/06/conviviality.html)
* [2026-07-09, 16:21:44](https://news.ycombinator.com/item?id=48848425) - [AI 2040: Plan A](https://ai-2040.com/)
* [2026-07-09, 15:41:15](https://lobste.rs/s/0mam5k/lobsters_interview_with_mitchellh) - [Lobsters Interview with mitchellh](https://alexalejandre.com/programming/interview-with-mitchell-hashimoto/)
* [2026-07-09, 15:21:30](https://lobste.rs/s/tedi5h/you_paid_me_long_time_linux_user_use) - [You paid me, a long-time Linux user, to use Windows 11 exclusively for a month: here’s how it went](https://www.osnews.com/story/145459/you-paid-me-a-long-time-linux-user-to-use-windows-11-exclusively-for-a-month-heres-how-it-went/)
* [2026-07-09, 14:56:32](https://lobste.rs/s/o9edbl/announcing_rust_1_97_0) - [Announcing Rust 1.97.0](https://blog.rust-lang.org/2026/07/09/Rust-1.97.0/)
* [2026-07-09, 12:53:46](https://lobste.rs/s/3eo2nv/i_did_not_kill_stanley_lieber_how_draw_with) - [I Did Not Kill Stanley Lieber: How to draw (with 9front)](https://triapul.cz/automa/i_did_not_kill_stanley_lieber)
* [2026-07-09, 12:32:00](https://soylentnews.org/article.pl?sid=26/07/08/0153215&amp;from=rss) - [The Twenty-Ninth International Obfuscated C Code Contest is back](https://soylentnews.org/article.pl?sid=26/07/08/0153215&amp;from=rss)
* [2026-07-09, 08:23:07](https://lobste.rs/s/v5hkjy/two_case_studies_nan) - [two case studies of NaN](https://sebsite.pw/w/20260709-nan.html)
* [2026-07-09, 08:05:04](https://news.ycombinator.com/item?id=48842459) - [Show HN: Getting GLM 5.2 running on my slow computer](https://github.com/JustVugg/colibri)
* [2026-07-09, 07:51:00](https://soylentnews.org/article.pl?sid=26/07/08/0151252&amp;from=rss) - [The Supreme Court Just Lit a Fuse Under Flock&apos;s License Plate Camera Empire](https://soylentnews.org/article.pl?sid=26/07/08/0151252&amp;from=rss)
* [2026-07-09, 03:08:00](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss) - [Rats Show Empathy, According to Model](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss)
* [2026-07-08, 22:22:00](https://soylentnews.org/article.pl?sid=26/07/08/0147225&amp;from=rss) - [Kernel Anti-Cheat Digital Restrictions Management Technology Is an Overreach](https://soylentnews.org/article.pl?sid=26/07/08/0147225&amp;from=rss)
* [2026-07-08, 17:37:00](https://soylentnews.org/article.pl?sid=26/07/06/2010203&amp;from=rss) - [Zombie ‘Who Owns Unix?’ Lawsuit Comes Alive Again](https://soylentnews.org/article.pl?sid=26/07/06/2010203&amp;from=rss)
* [2026-07-08, 13:38:04](https://news.ycombinator.com/item?id=48831814) - [Preemption is GC for memory reordering (2019)](https://pvk.ca/Blog/2019/01/09/preemption-is-gc-for-memory-reordering/)
* [2026-07-08, 12:53:00](https://soylentnews.org/article.pl?sid=26/07/06/204247&amp;from=rss) - [Paper Mill Cancer Studies Get Double the Number of Citations as Genuine Papers](https://soylentnews.org/article.pl?sid=26/07/06/204247&amp;from=rss)
* [2026-07-08, 08:05:00](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss) - [South Korea to Spend $1T on More Memory Chip Production and Humanoid Robots](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss)
* [2026-07-08, 05:20:31](https://news.ycombinator.com/item?id=48827834) - [The Lindy effect in software](https://www.clemsau.com/posts/the-lindy-effect-in-software/)
* [2026-07-08, 03:21:00](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss) - [Google Loses Final Appeal Over $4.7 Billion EU Android Antitrust Fine](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss)
* [2026-07-07, 23:06:09](https://news.ycombinator.com/item?id=48825216) - [Silent speech with ultrasound](https://alephneuro.com/blog/silent-speech)
* [2026-07-07, 22:44:00](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss) - [New Attack Provides One More Reason Why AI Browsers Are A Bad Idea](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss)
* [2026-07-07, 18:00:00](https://soylentnews.org/article.pl?sid=26/07/05/2125258&amp;from=rss) - [Florida Bans Local Governments From Pursuing Net-Zero Emissions Goals](https://soylentnews.org/article.pl?sid=26/07/05/2125258&amp;from=rss)
* [2026-07-07, 13:30:17](https://news.ycombinator.com/item?id=48817539) - [An iroh powered smart fan](https://www.iroh.computer/blog/an-iroh-powered-smart-fan)
* [2026-07-07, 13:13:00](https://soylentnews.org/article.pl?sid=26/07/05/2113231&amp;from=rss) - [NetNut Cracked As Google And FBI Target 2 Million-Device Botnet](https://soylentnews.org/article.pl?sid=26/07/05/2113231&amp;from=rss)
* [2026-07-07, 08:34:00](https://soylentnews.org/article.pl?sid=26/07/05/1926209&amp;from=rss) - [Amazon is Ready to Deploy the LEO Satellite Broadband Service](https://soylentnews.org/article.pl?sid=26/07/05/1926209&amp;from=rss)
* [2026-07-07, 06:06:25](https://news.ycombinator.com/item?id=48814170) - [Inference Optimization for MiMo v2.5: Pushing Hybrid SWA Efficiency to the Limit](https://mimo.xiaomi.com/blog/mimo-v2-5-inference)
* [2026-07-07, 03:52:00](https://soylentnews.org/article.pl?sid=26/07/05/1924207&amp;from=rss) - [For The First Time, A Cell Built From Scratch Grows And Divides](https://soylentnews.org/article.pl?sid=26/07/05/1924207&amp;from=rss)
* [2026-07-07, 03:04:46](https://news.ycombinator.com/item?id=48813246) - [The footgun of right-to-left decorative characters](https://blog.alexbeals.com/posts/the-footgun-of-right-to-left-decorative-characters)
