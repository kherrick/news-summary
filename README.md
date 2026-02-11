# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Developments and Challenges

* [Apple's Siri revamp reportedly delayed](https://techcrunch.com/2026/02/11/apples-siri-revamp-reportedly-delayed-again/) ([comments](https://news.ycombinator.com/item?id=46981231))

* [iOS 26.3 and macOS 26.3 fix dozens of vulnerabilities](https://www.macrumors.com/2026/02/11/ios-26-3-security-vulnerabilities/) ([comments](https://news.ycombinator.com/item?id=46979643))

* [Claude Code is being dumbed down](https://symmetrybreak.ing/blog/claude-code-is-being-dumbed-down/) ([comments](https://news.ycombinator.com/item?id=46978710))

* [Google Chrome 145 released with JPEG-XL image support](https://www.phoronix.com/news/Chrome-145-Released) ([comments](https://lobste.rs/s/tryiax/google_chrome_145_released_with_jpeg_xl))

* [Microsoft adds Sysmon to Windows](https://soylentnews.org/article.pl?sid=26/02/10/0257251&from=rss) ([comments](https://news.ycombinator.com/item?id=46969616))

## Environmental and Technological Future

* [A Hellish 'Hothouse Earth' getting closer, scientists say](https://news.slashdot.org/story/26/02/11/1814253/a-hellish-hothouse-earth-getting-closer-scientists-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46981015))

* [EVs could be cheaper to own than gas cars in Africa by 2040](https://tech.slashdot.org/story/26/02/11/176205/evs-could-be-cheaper-to-own-than-gas-cars-in-africa-by-2040?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46981214))

* [Iceland preps for potentially uninhabitable climate](https://news.slashdot.org/story/26/02/10/2021208/iceland-is-planning-for-the-possibility-that-its-climate-could-become-uninhabitable?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/item?id=46968015))

## Privacy and Security Concerns

* [Discord walks back age verification panic, assuring minimal face scans](https://yro.slashdot.org/story/26/02/11/0722256/discord-tries-to-walk-back-age-verification-panic-says-most-users-wont-need-face-scans?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://lobste.rs/s/xg32do))

* [Amazon Ring's lost dog ad sparks mass surveillance fears](https://www.theverge.com/tech/876866/ring-search-party-super-bowl-ad-online-backlash) ([comments](https://news.ycombinator.com/item?id=46978966))

## Scientific Discoveries and Innovations

* [Newly discovered sungrazing comet C/2026 A1 (MAPS) could be the brightest of the year](https://soylentnews.org/article.pl?sid=26/02/10/036255&from=rss) ([comments](https://news.ycombinator.com/item?id=46972211))

* [Lost Soviet Moon Lander found](https://science.slashdot.org/story/26/02/10/1834214/lost-soviet-moon-lander-may-have-been-found?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/item?id=46968388))

## Social and Cultural Reflections

* [Communities are not fungible](https://www.joanwestenberg.com/communities-are-not-fungible/) ([comments](https://news.ycombinator.com/item?id=46972056))

* [Typing for love or money: The labor behind modern masterpieces](https://publicdomainreview.org/essay/typing-for-love-or-money/) ([comments](https://news.ycombinator.com/item?id=46971659))

## Programming and Open Source

* [Programming aphorisms](https://matklad.github.io/2026/02/11/programming-aphorisms.html) ([comments](https://lobste.rs/s/jljsx4))

* [Should developers go open source?](https://extremefoundership.substack.com/p/should-your-developer-company-go) ([comments](https://news.ycombinator.com/item?id=46978015))

## Unusual and Unexpected Stories

* [Microwave oven failure: Spontaneously turned on by its LED display](https://blog.stuffedcow.net/2024/06/microwave-failure-spontaneously-turns-on/) ([comments](https://news.ycombinator.com/item?id=46979936))

* [Why vampires live forever](https://machielreyneke.com/blog/vampires-longevity/) ([comments](https://news.ycombinator.com/item?id=46976443))

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

* [2026-02-11, 21:23:39](https://news.ycombinator.com/item?id=46981231) - [Apple&apos;s Siri revamp reportedly delayed again](https://techcrunch.com/2026/02/11/apples-siri-revamp-reportedly-delayed-again/)
* [2026-02-11, 21:09:51](https://news.ycombinator.com/item?id=46981015) - [Q&amp;A: New UK onshore wind and solar is &apos;50% cheaper&apos; than new gas](https://www.carbonbrief.org/qa-new-uk-onshore-wind-and-solar-is-50-cheaper-than-new-gas/)
* [2026-02-11, 21:00:00](https://news.slashdot.org/story/26/02/11/1814253/a-hellish-hothouse-earth-getting-closer-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Hellish &apos;Hothouse Earth&apos; Getting Closer, Scientists Say](https://news.slashdot.org/story/26/02/11/1814253/a-hellish-hothouse-earth-getting-closer-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 20:40:02](https://news.ycombinator.com/item?id=46980591) - [Y Combinator CEO Garry Tan launches group to influence CA politics](https://missionlocal.org/2026/02/sf-garry-tan-california-politics-garrys-list/)
* [2026-02-11, 20:23:00](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss) - [After a $26 Billion Hit, Stellantis Shifts Focus Back to What Buyers Want](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss)
* [2026-02-11, 20:01:00](https://news.slashdot.org/story/26/02/11/1754240/us-had-almost-no-job-growth-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Had Almost No Job Growth in 2025](https://news.slashdot.org/story/26/02/11/1754240/us-had-almost-no-job-growth-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 19:50:43](https://news.ycombinator.com/item?id=46979936) - [Microwave Oven Failure: Spontaneously turned on by its LED display (2024)](https://blog.stuffedcow.net/2024/06/microwave-failure-spontaneously-turns-on/)
* [2026-02-11, 19:42:28](https://news.ycombinator.com/item?id=46979819) - [Paragon accidentally uploaded a photo of its spyware control panel](https://twitter.com/DrWhax/status/2021608609595945442)
* [2026-02-11, 19:30:30](https://news.ycombinator.com/item?id=46979643) - [iOS 26.3 and macOS 26.3 Fix Dozens of Vulnerabilities, Including Zero-Day](https://www.macrumors.com/2026/02/11/ios-26-3-security-vulnerabilities/)
* [2026-02-11, 19:25:18](https://news.ycombinator.com/item?id=46979562) - [The risk of a hothouse Earth trajectory](https://www.cell.com/one-earth/fulltext/S2590-3322%2825%2900391-4)
* [2026-02-11, 19:04:31](https://lobste.rs/s/jljsx4/programming_aphorisms) - [Programming Aphorisms](https://matklad.github.io/2026/02/11/programming-aphorisms.html)
* [2026-02-11, 19:04:15](https://lobste.rs/s/xgacfj/using_databases_without_putting_domain) - [Using Databases Without Putting Domain Logic in Them (2023)](https://alexkondov.com/use-databases-without-putting-domain-logic-in-them/)
* [2026-02-11, 19:00:00](https://tech.slashdot.org/story/26/02/11/176205/evs-could-be-cheaper-to-own-than-gas-cars-in-africa-by-2040?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EVs Could Be Cheaper To Own Than Gas Cars in Africa by 2040](https://tech.slashdot.org/story/26/02/11/176205/evs-could-be-cheaper-to-own-than-gas-cars-in-africa-by-2040?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 18:45:50](https://lobste.rs/s/befswy/it_s_all_blur) - [It&apos;s all a blur](https://lcamtuf.substack.com/p/its-all-a-blur)
* [2026-02-11, 18:43:01](https://news.ycombinator.com/item?id=46978966) - [Amazon Ring&apos;s lost dog ad sparks backlash amid fears of mass surveillance](https://www.theverge.com/tech/876866/ring-search-party-super-bowl-ad-online-backlash)
* [2026-02-11, 18:42:38](https://lobste.rs/s/jkqgrt/majutsu_magit_for_jujutsu) - [Majutsu, Magit for jujutsu](https://github.com/0WD0/majutsu)
* [2026-02-11, 18:23:39](https://news.ycombinator.com/item?id=46978710) - [Claude Code Is Being Dumbed Down](https://symmetrybreak.ing/blog/claude-code-is-being-dumbed-down/)
* [2026-02-11, 18:06:11](https://news.ycombinator.com/item?id=46978490) - [NetNewsWire Turns 23](https://netnewswire.blog/2026/02/11/netnewswire-turns.html)
* [2026-02-11, 18:01:00](https://news.slashdot.org/story/26/02/11/1656216/uk-orders-deletion-of-countrys-largest-court-reporting-archive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Orders Deletion of Country&apos;s Largest Court Reporting Archive](https://news.slashdot.org/story/26/02/11/1656216/uk-orders-deletion-of-countrys-largest-court-reporting-archive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 17:34:27](https://news.ycombinator.com/item?id=46978015) - [Should your developer company go open source?](https://extremefoundership.substack.com/p/should-your-developer-company-go)
* [2026-02-11, 17:00:00](https://hardware.slashdot.org/story/26/02/11/1640236/are-cds-making-a-comeback-a-statistical-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are CDs Making a Comeback? A Statistical Analysis](https://hardware.slashdot.org/story/26/02/11/1640236/are-cds-making-a-comeback-a-statistical-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 16:41:33](https://news.ycombinator.com/item?id=46977210) - [GLM-5: From Vibe Coding to Agentic Engineering](https://z.ai/blog/glm-5)
* [2026-02-11, 16:21:10](https://news.ycombinator.com/item?id=46976911) - [Toyota Fluorite: \&quot;console-grade\&quot; Flutter game engine](https://fluorite.game/)
* [2026-02-11, 16:10:37](https://lobste.rs/s/7hjn6w/problem_with_llms) - [The Problem With LLMs](https://www.deobald.ca/essays/2026-02-10-the-problem-with-llms/)
* [2026-02-11, 16:07:19](https://lobste.rs/s/noawjw/functional_programming_m4) - [Functional programming in m4](https://www.tuhs.org/pipermail/tuhs/2020-August/022108.html)
* [2026-02-11, 16:00:00](https://slashdot.org/story/26/02/11/1549234/hp-now-rents-gaming-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HP Now Rents Gaming Laptops](https://slashdot.org/story/26/02/11/1549234/hp-now-rents-gaming-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 15:50:04](https://news.ycombinator.com/item?id=46976443) - [Why Vampires Live Forever](https://machielreyneke.com/blog/vampires-longevity/)
* [2026-02-11, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss) - [Discord Will Require a Face Scan or ID for Full Access Next Month](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss)
* [2026-02-11, 15:00:00](https://slashdot.org/story/26/02/11/1431206/sony-will-ship-its-final-blu-ray-recorders-this-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Will Ship Its Final Blu-ray Recorders This Month](https://slashdot.org/story/26/02/11/1431206/sony-will-ship-its-final-blu-ray-recorders-this-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 14:48:51](https://lobste.rs/s/4fla1s/re_identification_risk_vs_k_anonymity) - [Re-Identification Risk vs k-Anonymity](https://www.testingbranch.com/re_identification/)
* [2026-02-11, 14:01:00](https://tech.slashdot.org/story/26/02/11/141215/t-mobile-will-live-translate-regular-phone-calls-without-an-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [T-Mobile Will Live Translate Regular Phone Calls Without an App](https://tech.slashdot.org/story/26/02/11/141215/t-mobile-will-live-translate-regular-phone-calls-without-an-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 12:43:26](https://lobste.rs/s/xhfkrz/webmentions_with_batteries_included) - [Webmentions with batteries included](https://blog.fabiomanganiello.com/article/webmentions-with-batteries-included)
* [2026-02-11, 12:29:50](https://lobste.rs/s/6yn5pe/modular_monolith_microservices) - [Modular Monolith and Microservices: Modularity is what truly matters (2023)](https://binaryigor.com/modular-monolith-and-microservices-modularity-is-what-truly-matters.html)
* [2026-02-11, 12:20:00](https://science.slashdot.org/story/26/02/11/1219230/moderna-says-fda-refuses-to-review-its-application-for-experimental-flu-shot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Moderna Says FDA Refuses To Review Its Application for Experimental Flu Shot](https://science.slashdot.org/story/26/02/11/1219230/moderna-says-fda-refuses-to-review-its-application-for-experimental-flu-shot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 12:09:23](https://lobste.rs/s/kp7jlq/windows_notepad_app_remote_code) - [Windows Notepad App Remote Code Execution Vulnerability](https://www.cve.org/CVERecord?id=CVE-2026-20841)
* [2026-02-11, 11:57:10](https://lobste.rs/s/tqttgj/forwardly_evaluated_build_systems) - [Forwardly-evaluated build systems](https://garnix.io/blog/garn2/)
* [2026-02-11, 11:16:23](https://news.ycombinator.com/item?id=46973573) - [Exposure Simulator](http://www.andersenimages.com/tutorials/exposure-simulator/)
* [2026-02-11, 10:53:00](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss) - [Newly Discovered Sungrazing Comet C/2026 A1 (MAPS) Could be the Brightest of the Year](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss)
* [2026-02-11, 10:37:49](https://lobste.rs/s/yyh1rg/pax_cache_performance_you_re_looking_for) - [PAX: The Cache Performance You&apos;re Looking For](https://mydbanotebook.org/posts/pax-the-cache-performance-youre-looking-for/)
* [2026-02-11, 10:30:22](https://lobste.rs/s/irxjid/ai_vampire) - [The AI Vampire](https://steve-yegge.medium.com/the-ai-vampire-eda6e4f07163)
* [2026-02-11, 09:04:00](https://news.ycombinator.com/item?id=46972610) - [FAA halts all flights at El Paso airport for 10 days](https://www.nytimes.com/2026/02/11/us/faa-el-paso-flight-restrictions.html)
* [2026-02-11, 09:00:00](https://yro.slashdot.org/story/26/02/11/0722256/discord-tries-to-walk-back-age-verification-panic-says-most-users-wont-need-face-scans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Discord Tries To Walk Back Age Verification Panic, Says Most Users Won&apos;t Need Face Scans](https://yro.slashdot.org/story/26/02/11/0722256/discord-tries-to-walk-back-age-verification-panic-says-most-users-wont-need-face-scans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 08:17:48](https://lobste.rs/s/vvg4oz/transducer_ate_our_heap) - [The Transducer That Ate Our Heap](https://www.reddit.com/r/Clojure/comments/1r179s1/the_transducer_that_ate_our_heap/)
* [2026-02-11, 07:42:57](https://news.ycombinator.com/item?id=46972056) - [Communities are not fungible](https://www.joanwestenberg.com/communities-are-not-fungible/)
* [2026-02-11, 06:15:33](https://news.ycombinator.com/item?id=46971516) - [Windows Notepad App Remote Code Execution Vulnerability](https://www.cve.org/CVERecord?id=CVE-2026-20841)
* [2026-02-11, 06:05:00](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss) - [Microsoft Does Something Useful, Adds Sysmon to Windows](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss)
* [2026-02-11, 06:00:00](https://slashdot.org/story/26/02/10/2028238/the-first-signs-of-burnout-are-coming-from-the-people-who-embrace-ai-the-most?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The First Signs of Burnout Are Coming From the People Who Embrace AI the Most](https://slashdot.org/story/26/02/10/2028238/the-first-signs-of-burnout-are-coming-from-the-people-who-embrace-ai-the-most?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 05:08:39](https://lobste.rs/s/gx9hvu/how_level_up_fediverse) - [How to level up the fediverse](https://fosdem.org/2026/schedule/event/HVJRNV-how_to_level_up_the_fediverse/)
* [2026-02-11, 03:45:00](https://news.slashdot.org/story/26/02/10/2021208/iceland-is-planning-for-the-possibility-that-its-climate-could-become-uninhabitable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iceland is Planning For the Possibility That Its Climate Could Become Uninhabitable](https://news.slashdot.org/story/26/02/10/2021208/iceland-is-planning-for-the-possibility-that-its-climate-could-become-uninhabitable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 01:50:44](https://news.ycombinator.com/item?id=46969751) - [End of an era for me: no more self-hosted git](https://www.kraxel.org/blog/2026/01/thank-you-ai/)
* [2026-02-11, 01:45:00](https://yro.slashdot.org/story/26/02/10/1913223/bytedance-suspends-seedance-2-feature-that-turns-facial-photos-into-personal-voices-over-potential-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ByteDance Suspends Seedance 2 Feature That Turns Facial Photos Into Personal Voices Over Potential Risks](https://yro.slashdot.org/story/26/02/10/1913223/bytedance-suspends-seedance-2-feature-that-turns-facial-photos-into-personal-voices-over-potential-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 01:32:18](https://lobste.rs/s/tryiax/google_chrome_145_released_with_jpeg_xl) - [Google Chrome 145 Released With JPEG-XL Image Support](https://www.phoronix.com/news/Chrome-145-Released)
* [2026-02-11, 01:20:00](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss) - [Ask SN - \&quot;Opt-Out Signal Honored\&quot; - Screen Message](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss)
* [2026-02-10, 23:47:35](https://lobste.rs/s/wcak3g/hylo_systems_programming_language_all_on) - [Hylo: A Systems Programming Language All in on Value Semantics and Generic Programming](https://hylo-lang.org/)
* [2026-02-10, 23:12:36](https://news.ycombinator.com/item?id=46968374) - [We rendered and embedded one million CAD files](https://cad-search-three.vercel.app/)
* [2026-02-10, 22:45:00](https://hardware.slashdot.org/story/26/02/10/197249/white-house-eyes-data-center-agreements-amid-energy-price-spikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [White House Eyes Data Center Agreements Amid Energy Price Spikes](https://hardware.slashdot.org/story/26/02/10/197249/white-house-eyes-data-center-agreements-amid-energy-price-spikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-10, 22:17:33](https://lobste.rs/s/kjbrep/day_telnet_died) - [The Day the telnet Died](https://www.labs.greynoise.io/grimoire/2026-02-10-telnet-falls-silent/)
* [2026-02-10, 21:02:03](https://lobste.rs/s/gipvta/cysqlite_new_sqlite_driver) - [cysqlite - a new sqlite driver](https://charlesleifer.com/blog/cysqlite---a-new-sqlite-driver/)
* [2026-02-10, 21:00:00](https://science.slashdot.org/story/26/02/10/1834214/lost-soviet-moon-lander-may-have-been-found?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lost Soviet Moon Lander May Have Been Found](https://science.slashdot.org/story/26/02/10/1834214/lost-soviet-moon-lander-may-have-been-found?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-10, 20:33:00](https://soylentnews.org/article.pl?sid=26/02/09/1936243&amp;from=rss) - [AI.Com&apos;s $85 Million Super Bowl Ad Campaign Falls Foul as Traffic Crashes Servers](https://soylentnews.org/article.pl?sid=26/02/09/1936243&amp;from=rss)
* [2026-02-10, 20:32:53](https://lobste.rs/s/pybtso/go_1_26_is_released) - [Go 1.26 is released](https://go.dev/blog/go1.26)
* [2026-02-10, 19:23:09](https://lobste.rs/s/00edzp/missing_github_status_page) - [The Missing GitHub Status Page](https://mrshu.github.io/github-statuses/)
* [2026-02-10, 17:26:23](https://lobste.rs/s/7iford/i_started_programming_when_i_was_7_i_m_50_now) - [I Started Programming When I Was 7. I&apos;m 50 Now, and the Thing I Loved Has Changed](https://www.jamesdrandall.com/posts/the_thing_i_loved_has_changed/)
* [2026-02-10, 16:19:44](https://lobste.rs/s/elol3n/i_wrote_scheme_2025) - [I Wrote a Scheme in 2025](https://maplant.com/2026-02-09-I-Wrote-a-Scheme-in-2025.html)
* [2026-02-10, 15:50:00](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss) - [Linux Kernel 6.19 is Released and the Next Version is Confirmed to be 7.0](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss)
* [2026-02-10, 15:12:16](https://lobste.rs/s/naa5fq/postmarketos_at_fosdem_2026_hackathon) - [postmarketOS at FOSDEM 2026 + Hackathon](https://postmarketos.org/blog/2026/02/10/fosdem-and-hackathon/)
* [2026-02-10, 15:09:47](https://lobste.rs/s/ogr30w/how_i_cut_my_google_search_dependence_half) - [How I Cut My Google Search Dependence in Half](https://hister.org/posts/how-i-cut-my-google-search-dependence-in-half/)
* [2026-02-10, 11:08:00](https://soylentnews.org/article.pl?sid=26/02/09/0531254&amp;from=rss) - [Your iPhone is About to Get a New Privacy Feature to Protect Your Location Data From Prying Eyes](https://soylentnews.org/article.pl?sid=26/02/09/0531254&amp;from=rss)
* [2026-02-10, 06:22:00](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss) - [Microsoft Releases Urgent Office Patch While Russian-State Hackers Pounce](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss)
* [2026-02-10, 01:38:00](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss) - [A Fresh Look at IBM 3270 Information Display System](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss)
* [2026-02-09, 20:54:00](https://soylentnews.org/article.pl?sid=26/02/09/0514240&amp;from=rss) - [New York Lawmakers Introduce Bill That Aims to Halt Data Center Development for Three Years](https://soylentnews.org/article.pl?sid=26/02/09/0514240&amp;from=rss)
* [2026-02-09, 16:09:00](https://soylentnews.org/article.pl?sid=26/02/08/0232241&amp;from=rss) - [Taking a Second to Change the Time](https://soylentnews.org/article.pl?sid=26/02/08/0232241&amp;from=rss)
* [2026-02-09, 15:54:33](https://news.ycombinator.com/item?id=46946593) - [Show HN: AI agents play SimCity through a REST API](https://hallucinatingsplines.com)
* [2026-02-09, 12:24:00](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss) - [Vibe Coding is Killing Open Source Software](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss)
* [2026-02-09, 08:39:00](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss) - [The AI productivity trap: Why your Best Engineers are Getting Slower](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss)
* [2026-02-09, 03:54:00](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss) - [FBI Stymied by Apple&apos;s Lockdown Mode After Seizing Journalist&apos;s iPhone](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss)
* [2026-02-08, 23:12:00](https://soylentnews.org/article.pl?sid=26/02/07/0338257&amp;from=rss) - [Russian Spy Satellites Have Intercepted EU Communications Satellites](https://soylentnews.org/article.pl?sid=26/02/07/0338257&amp;from=rss)
* [2026-02-08, 17:24:00](https://soylentnews.org/article.pl?sid=26/02/07/0328238&amp;from=rss) - [Lessons from China’s Delicate Dance of Censorship and Expression](https://soylentnews.org/article.pl?sid=26/02/07/0328238&amp;from=rss)
* [2026-02-08, 12:38:00](https://soylentnews.org/article.pl?sid=26/02/07/0323222&amp;from=rss) - [Linux From Scratch Abandoning SysVinit Support](https://soylentnews.org/article.pl?sid=26/02/07/0323222&amp;from=rss)
* [2026-02-08, 07:57:00](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss) - [Self-Driving Cars In ‘Difficult Driving Situations’ Are Guided By Random Filipinos Overseas](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss)
* [2026-02-08, 03:14:00](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss) - [A Century of Hair Samples Proves Leaded Gas Ban Worked](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss)
* [2026-02-07, 22:21:00](https://soylentnews.org/article.pl?sid=26/02/07/004218&amp;from=rss) - [France Might Seek Restrictions on VPN Use in Campaign to Keep Minors Off Social Media](https://soylentnews.org/article.pl?sid=26/02/07/004218&amp;from=rss)
* [2026-02-07, 17:49:00](https://soylentnews.org/article.pl?sid=26/02/06/2359259&amp;from=rss) - [Used EVs Currently Offer Car Buyers Lowest Lifetime Cost of Ownership](https://soylentnews.org/article.pl?sid=26/02/06/2359259&amp;from=rss)
* [2026-02-07, 14:15:36](https://news.ycombinator.com/item?id=46924075) - [GLM-OCR: Accurate × Fast × Comprehensive](https://github.com/zai-org/GLM-OCR)
* [2026-02-07, 12:59:00](https://soylentnews.org/article.pl?sid=26/02/06/0310232&amp;from=rss) - [The World Factbook Shut Down Unceremonously](https://soylentnews.org/article.pl?sid=26/02/06/0310232&amp;from=rss)
* [2026-02-07, 09:10:26](https://news.ycombinator.com/item?id=46922453) - [Rome is studded with cannon balls (2022)](https://essenceofrome.com/rome-is-studded-with-cannon-balls)
* [2026-02-07, 08:16:00](https://soylentnews.org/article.pl?sid=26/02/06/038224&amp;from=rss) - [US Spy Satellite Agency Declassifies High-Flying Cold War Listening Post](https://soylentnews.org/article.pl?sid=26/02/06/038224&amp;from=rss)
* [2026-02-07, 05:50:07](https://news.ycombinator.com/item?id=46921659) - [Typing for Love or Money: The Hidden Labor Behind Modern Literary Masterpieces](https://publicdomainreview.org/essay/typing-for-love-or-money/)
* [2026-02-07, 03:28:00](https://soylentnews.org/article.pl?sid=26/02/06/031244&amp;from=rss) - [AI Agents Now Have Their Own Reddit-Style Social Network, and It&apos;s Getting Weird Fast](https://soylentnews.org/article.pl?sid=26/02/06/031244&amp;from=rss)
* [2026-02-07, 01:16:42](https://news.ycombinator.com/item?id=46920315) - [WiFi Could Become an Invisible Mass Surveillance System](https://scitechdaily.com/researchers-warn-wifi-could-become-an-invisible-mass-surveillance-system/)
