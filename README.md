# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Machine Learning

* [GPT-5 outperforms federal judges in legal reasoning experiment](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6155012) - Researchers have demonstrated GPT-5's capabilities in legal reasoning tests, surpassing federal judges' abilities.

* [The Problem with LLMs](https://www.deobald.ca/essays/2026-02-10-the-problem-with-llms/) - A critical perspective on large language models and their limitations in understanding context and intent.

* [Show HN: Agent Alcove – Claude, GPT, and Gemini debate across forums](https://agentalcove.ai) - A platform enabling debates across forums using GPT, Claude, and Gemini agents.

## Technology and Innovations

* [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&from=rss) - A new terahertz microscope uncovers hidden superconducting patterns, enhancing material science research.

* [Heroku is not dead](https://nombiezinja.com/word-things/2026/2/8/heroku-is-not-dead) - An analysis of the state of Heroku, dispelling myths about its demise.

* [Fluorite – A console-grade game engine fully integrated with Flutter](https://fluorite.game/) - A revolutionary game engine that seamlessly integrates with Flutter for developing games.

## Privacy and Surveillance

* [With Ring, American Consumers Built a Surveillance Dragnet](https://yro.slashdot.org/story/26/02/11/1844232/with-ring-american-consumers-built-a-surveillance-dragnet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A report on how the Ring ecosystem has inadvertently fostered a surveillance culture.

* [Amazon Ring's lost dog ad sparks backlash amid fears of mass surveillance](https://www.theverge.com/tech/876866/ring-search-party-super-bowl-ad-online-backlash) - A backlash follows Ring's ad campaign due to concerns over invasive surveillance technology.

* [Discord Tries To Walk Back Age Verification Panic, Says Most Users Won't Need Face Scans](https://yro.slashdot.org/story/26/02/11/0722256/discord-tries-to-walk-back-age-verification-panic-says-most-users-wont-need-face-scans?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discord clarifies their age verification procedures after user concerns over mandatory face scans.

## Environmental and Scientific Development

* [A Hellish 'Hothouse Earth' Getting Closer, Scientists Say](https://news.slashdot.org/story/26/02/11/1814253/a-hellish-hothouse-earth-getting-closer-scientists-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Scientists warn about the realities of climate change and the potential for a 'Hothouse Earth' scenario.

* [Newly Discovered Sungrazing Comet C/2026 A1 (MAPS) Could be the Brightest of the Year](https://soylentnews.org/article.pl?sid=26/02/10/036255&from=rss) - A new comet discovery promises to be a spectacular astrological event this year.

* [A Century of Hair Samples Proves Leaded Gas Ban Worked](https://soylentnews.org/article.pl?sid=26/02/07/006217&from=rss) - New studies reveal how banning leaded gasoline has significantly reduced environmental lead levels.

## Programming and Software

* [Proof-oriented Programming in F*](https://fstar-lang.org/tutorial) - An exploration of proof-oriented programming using the F* language for software verification.

* [Functional programming in m4 (2020)](https://www.tuhs.org/pipermail/tuhs/2020-August/022108.html) - Revisiting functional programming with the m4 macro processor in the modern context.

* [Coding with domain logic outside databases (2023)](https://alexkondov.com/use-databases-without-putting-domain-logic-in-them/) - Rethinking database usage while avoiding entangling domain logic.

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

* [2026-02-12, 06:00:00](https://apple.slashdot.org/story/26/02/12/0528239/siris-ai-overhaul-delayed-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Siri&apos;s AI Overhaul Delayed Again](https://apple.slashdot.org/story/26/02/12/0528239/siris-ai-overhaul-delayed-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 05:48:00](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss) - [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss)
* [2026-02-12, 05:18:49](https://news.ycombinator.com/item?id=46985151) - [Warcraft III Peon Voice Notifications for Claude Code](https://github.com/tonyyont/peon-ping)
* [2026-02-12, 05:18:09](https://news.ycombinator.com/item?id=46985147) - [D Programming Language](https://dlang.org/)
* [2026-02-12, 04:22:26](https://lobste.rs/s/dixmkp/proof_oriented_programming_f) - [Proof-oriented Programming in F*](https://fstar-lang.org/tutorial)
* [2026-02-12, 03:56:26](https://news.ycombinator.com/item?id=46984735) - [How to Make a Living as an Artist](https://essays.fnnch.com/make-a-living)
* [2026-02-12, 03:44:00](https://slashdot.org/story/26/02/11/1849224/anthropic-safety-researcher-quits-warning-world-is-in-peril?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Safety Researcher Quits, Warning &apos;World is in Peril&apos;](https://slashdot.org/story/26/02/11/1849224/anthropic-safety-researcher-quits-warning-world-is-in-peril?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 02:03:33](https://news.ycombinator.com/item?id=46984021) - [The Problem with LLMs](https://www.deobald.ca/essays/2026-02-10-the-problem-with-llms/)
* [2026-02-12, 01:45:00](https://yro.slashdot.org/story/26/02/11/1844232/with-ring-american-consumers-built-a-surveillance-dragnet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [With Ring, American Consumers Built a Surveillance Dragnet](https://yro.slashdot.org/story/26/02/11/1844232/with-ring-american-consumers-built-a-surveillance-dragnet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 01:07:00](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss) - [EU Interferes In Its Own Elections And Ours, Say US Tech Bros](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss)
* [2026-02-12, 00:50:04](https://lobste.rs/s/v1bn0w/technical_issues_separation_function) - [Technical Issues of Separation in Function Cells and Value Cells (1988)](https://www.nhplace.com/kent/Papers/Technical-Issues.html)
* [2026-02-12, 00:20:30](https://news.ycombinator.com/item?id=46983196) - [Heroku is not dead](https://nombiezinja.com/word-things/2026/2/8/heroku-is-not-dead)
* [2026-02-11, 23:54:59](https://news.ycombinator.com/item?id=46982943) - [From 34% to 96%: The Porting Initiative Delivers – Hologram v0.7.0](https://hologram.page/blog/porting-initiative-delivers-hologram-v0-7-0)
* [2026-02-11, 23:37:11](https://news.ycombinator.com/item?id=46982792) - [GPT-5 outperforms federal judges in legal reasoning experiment](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6155012)
* [2026-02-11, 22:56:41](https://news.ycombinator.com/item?id=46982421) - [Discord/Twitch/Snapchat age verification bypass](https://age-verifier.kibty.town/)
* [2026-02-11, 22:45:00](https://linux.slashdot.org/story/26/02/11/1821222/is-linux-mint-burning-out-developers-consider-longer-release-cycle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Linux Mint Burning Out? Developers Consider Longer Release Cycle](https://linux.slashdot.org/story/26/02/11/1821222/is-linux-mint-burning-out-developers-consider-longer-release-cycle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 22:37:08](https://lobste.rs/s/dunvco/new_upcoming_ircv3_features) - [New And Upcoming IRCv3 Features](https://libera.chat/news/new-and-upcoming-features-3)
* [2026-02-11, 21:54:31](https://lobste.rs/s/vrrdhz/do_not_apologize_for_replying_late_my) - [Do not apologize for replying late to my email](https://ploum.net/2026-02-11-do_not_apologize_for_replying_to_my_email.html)
* [2026-02-11, 21:50:23](https://lobste.rs/s/vbob0l/reports_telnet_s_death_have_been_greatly) - [Reports of Telnet’s Death Have Been Greatly Exaggerated](https://www.terracenetworks.com/blog/2026-02-11-telnet-routing)
* [2026-02-11, 21:12:59](https://news.ycombinator.com/item?id=46981058) - [Covering electricity price increases from our data centers](https://www.anthropic.com/news/covering-electricity-price-increases)
* [2026-02-11, 21:00:00](https://news.slashdot.org/story/26/02/11/1814253/a-hellish-hothouse-earth-getting-closer-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Hellish &apos;Hothouse Earth&apos; Getting Closer, Scientists Say](https://news.slashdot.org/story/26/02/11/1814253/a-hellish-hothouse-earth-getting-closer-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 20:23:00](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss) - [After a $26 Billion Hit, Stellantis Shifts Focus Back to What Buyers Want](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss)
* [2026-02-11, 20:20:48](https://news.ycombinator.com/item?id=46980355) - [Reports of Telnet&apos;s death have been greatly exaggerated](https://www.terracenetworks.com/blog/2026-02-11-telnet-routing)
* [2026-02-11, 20:15:21](https://news.ycombinator.com/item?id=46980273) - [Show HN: Agent Alcove – Claude, GPT, and Gemini debate across forums](https://agentalcove.ai)
* [2026-02-11, 20:01:00](https://news.slashdot.org/story/26/02/11/1754240/us-had-almost-no-job-growth-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Had Almost No Job Growth in 2025](https://news.slashdot.org/story/26/02/11/1754240/us-had-almost-no-job-growth-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 19:59:17](https://news.ycombinator.com/item?id=46980039) - [Apple&apos;s latest attempt to launch the new Siri runs into snags](https://www.bloomberg.com/news/articles/2026-02-11/apple-s-ios-26-4-siri-update-runs-into-snags-in-internal-testing-ios-26-5-27)
* [2026-02-11, 19:50:43](https://news.ycombinator.com/item?id=46979936) - [Microwave Oven Failure: Spontaneously turned on by its LED display (2024)](https://blog.stuffedcow.net/2024/06/microwave-failure-spontaneously-turns-on/)
* [2026-02-11, 19:04:31](https://lobste.rs/s/jljsx4/programming_aphorisms) - [Programming Aphorisms](https://matklad.github.io/2026/02/11/programming-aphorisms.html)
* [2026-02-11, 19:04:15](https://lobste.rs/s/xgacfj/using_databases_without_putting_domain) - [Using Databases Without Putting Domain Logic in Them (2023)](https://alexkondov.com/use-databases-without-putting-domain-logic-in-them/)
* [2026-02-11, 19:00:00](https://tech.slashdot.org/story/26/02/11/176205/evs-could-be-cheaper-to-own-than-gas-cars-in-africa-by-2040?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EVs Could Be Cheaper To Own Than Gas Cars in Africa by 2040](https://tech.slashdot.org/story/26/02/11/176205/evs-could-be-cheaper-to-own-than-gas-cars-in-africa-by-2040?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 18:45:50](https://lobste.rs/s/befswy/it_s_all_blur) - [It&apos;s all a blur](https://lcamtuf.substack.com/p/its-all-a-blur)
* [2026-02-11, 18:43:01](https://news.ycombinator.com/item?id=46978966) - [Amazon Ring&apos;s lost dog ad sparks backlash amid fears of mass surveillance](https://www.theverge.com/tech/876866/ring-search-party-super-bowl-ad-online-backlash)
* [2026-02-11, 18:42:38](https://lobste.rs/s/jkqgrt/majutsu_magit_for_jujutsu) - [Majutsu, Magit for jujutsu](https://github.com/0WD0/majutsu)
* [2026-02-11, 18:23:39](https://news.ycombinator.com/item?id=46978710) - [Claude Code is being dumbed down?](https://symmetrybreak.ing/blog/claude-code-is-being-dumbed-down/)
* [2026-02-11, 18:06:11](https://news.ycombinator.com/item?id=46978490) - [NetNewsWire Turns 23](https://netnewswire.blog/2026/02/11/netnewswire-turns.html)
* [2026-02-11, 18:01:00](https://news.slashdot.org/story/26/02/11/1656216/uk-orders-deletion-of-countrys-largest-court-reporting-archive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Orders Deletion of Country&apos;s Largest Court Reporting Archive](https://news.slashdot.org/story/26/02/11/1656216/uk-orders-deletion-of-countrys-largest-court-reporting-archive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 17:00:00](https://hardware.slashdot.org/story/26/02/11/1640236/are-cds-making-a-comeback-a-statistical-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are CDs Making a Comeback? A Statistical Analysis](https://hardware.slashdot.org/story/26/02/11/1640236/are-cds-making-a-comeback-a-statistical-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 16:39:11](https://news.ycombinator.com/item?id=46977175) - [Ireland rolls out basic income scheme for artists](https://www.reuters.com/world/ireland-rolls-out-pioneering-basic-income-scheme-artists-2026-02-10/)
* [2026-02-11, 16:21:10](https://news.ycombinator.com/item?id=46976911) - [Fluorite – A console-grade game engine fully integrated with Flutter](https://fluorite.game/)
* [2026-02-11, 16:07:19](https://lobste.rs/s/noawjw/functional_programming_m4_2020) - [Functional programming in m4 (2020)](https://www.tuhs.org/pipermail/tuhs/2020-August/022108.html)
* [2026-02-11, 16:00:00](https://slashdot.org/story/26/02/11/1549234/hp-now-rents-gaming-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HP Now Rents Gaming Laptops](https://slashdot.org/story/26/02/11/1549234/hp-now-rents-gaming-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss) - [Discord Will Require a Face Scan or ID for Full Access Next Month](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss)
* [2026-02-11, 15:00:00](https://slashdot.org/story/26/02/11/1431206/sony-will-ship-its-final-blu-ray-recorders-this-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Will Ship Its Final Blu-ray Recorders This Month](https://slashdot.org/story/26/02/11/1431206/sony-will-ship-its-final-blu-ray-recorders-this-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 14:48:51](https://lobste.rs/s/4fla1s/re_identification_risk_vs_k_anonymity) - [Re-Identification Risk vs k-Anonymity](https://www.testingbranch.com/re_identification/)
* [2026-02-11, 14:01:00](https://tech.slashdot.org/story/26/02/11/141215/t-mobile-will-live-translate-regular-phone-calls-without-an-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [T-Mobile Will Live Translate Regular Phone Calls Without an App](https://tech.slashdot.org/story/26/02/11/141215/t-mobile-will-live-translate-regular-phone-calls-without-an-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 13:42:16](https://news.ycombinator.com/item?id=46974853) - [GLM-5: Targeting complex systems engineering and long-horizon agentic tasks](https://z.ai/blog/glm-5)
* [2026-02-11, 13:10:23](https://news.ycombinator.com/item?id=46974515) - [Show HN: CodeRLM – Tree-sitter-backed code indexing for LLM agents](https://github.com/JaredStewart/coderlm/blob/main/server/REPL_to_API.md)
* [2026-02-11, 12:43:26](https://lobste.rs/s/xhfkrz/webmentions_with_batteries_included) - [Webmentions with batteries included](https://blog.fabiomanganiello.com/article/webmentions-with-batteries-included)
* [2026-02-11, 12:20:00](https://science.slashdot.org/story/26/02/11/1219230/moderna-says-fda-refuses-to-review-its-application-for-experimental-flu-shot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Moderna Says FDA Refuses To Review Its Application for Experimental Flu Shot](https://science.slashdot.org/story/26/02/11/1219230/moderna-says-fda-refuses-to-review-its-application-for-experimental-flu-shot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 12:09:23](https://lobste.rs/s/kp7jlq/windows_notepad_app_remote_code) - [Windows Notepad App Remote Code Execution Vulnerability](https://www.cve.org/CVERecord?id=CVE-2026-20841)
* [2026-02-11, 11:57:10](https://lobste.rs/s/tqttgj/forwardly_evaluated_build_systems) - [Forwardly-evaluated build systems](https://garnix.io/blog/garn2/)
* [2026-02-11, 10:53:00](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss) - [Newly Discovered Sungrazing Comet C/2026 A1 (MAPS) Could be the Brightest of the Year](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss)
* [2026-02-11, 10:37:49](https://lobste.rs/s/yyh1rg/pax_cache_performance_you_re_looking_for) - [PAX: The Cache Performance You&apos;re Looking For](https://mydbanotebook.org/posts/pax-the-cache-performance-youre-looking-for/)
* [2026-02-11, 09:04:00](https://news.ycombinator.com/item?id=46972610) - [Officials Claim Drone Incursion Led to Shutdown of El Paso Airport](https://www.nytimes.com/2026/02/11/us/faa-el-paso-flight-restrictions.html)
* [2026-02-11, 09:00:00](https://yro.slashdot.org/story/26/02/11/0722256/discord-tries-to-walk-back-age-verification-panic-says-most-users-wont-need-face-scans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Discord Tries To Walk Back Age Verification Panic, Says Most Users Won&apos;t Need Face Scans](https://yro.slashdot.org/story/26/02/11/0722256/discord-tries-to-walk-back-age-verification-panic-says-most-users-wont-need-face-scans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 08:17:48](https://lobste.rs/s/vvg4oz/transducer_ate_our_heap) - [The Transducer That Ate Our Heap](https://www.reddit.com/r/Clojure/comments/1r179s1/the_transducer_that_ate_our_heap/)
* [2026-02-11, 06:05:00](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss) - [Microsoft Does Something Useful, Adds Sysmon to Windows](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss)
* [2026-02-11, 06:00:00](https://slashdot.org/story/26/02/10/2028238/the-first-signs-of-burnout-are-coming-from-the-people-who-embrace-ai-the-most?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The First Signs of Burnout Are Coming From the People Who Embrace AI the Most](https://slashdot.org/story/26/02/10/2028238/the-first-signs-of-burnout-are-coming-from-the-people-who-embrace-ai-the-most?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 01:32:18](https://lobste.rs/s/tryiax/google_chrome_145_released_with_jpeg_xl) - [Google Chrome 145 Released With JPEG-XL Image Support](https://www.phoronix.com/news/Chrome-145-Released)
* [2026-02-11, 01:20:00](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss) - [Ask SN - \&quot;Opt-Out Signal Honored\&quot; - Screen Message](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss)
* [2026-02-10, 23:47:35](https://lobste.rs/s/wcak3g/hylo_systems_programming_language_all_on) - [Hylo: A Systems Programming Language All in on Value Semantics and Generic Programming](https://hylo-lang.org/)
* [2026-02-10, 22:17:33](https://lobste.rs/s/kjbrep/day_telnet_died) - [The Day the telnet Died](https://www.labs.greynoise.io/grimoire/2026-02-10-telnet-falls-silent/)
* [2026-02-10, 21:02:03](https://lobste.rs/s/gipvta/cysqlite_new_sqlite_driver) - [cysqlite - a new sqlite driver](https://charlesleifer.com/blog/cysqlite---a-new-sqlite-driver/)
* [2026-02-10, 20:33:00](https://soylentnews.org/article.pl?sid=26/02/09/1936243&amp;from=rss) - [AI.Com&apos;s $85 Million Super Bowl Ad Campaign Falls Foul as Traffic Crashes Servers](https://soylentnews.org/article.pl?sid=26/02/09/1936243&amp;from=rss)
* [2026-02-10, 20:32:53](https://lobste.rs/s/pybtso/go_1_26_is_released) - [Go 1.26 is released](https://go.dev/blog/go1.26)
* [2026-02-10, 19:23:09](https://lobste.rs/s/00edzp/missing_github_status_page) - [The Missing GitHub Status Page](https://mrshu.github.io/github-statuses/)
* [2026-02-10, 17:26:23](https://lobste.rs/s/7iford/i_started_programming_when_i_was_7_i_m_50_now) - [I Started Programming When I Was 7. I&apos;m 50 Now, and the Thing I Loved Has Changed](https://www.jamesdrandall.com/posts/the_thing_i_loved_has_changed/)
* [2026-02-10, 16:19:44](https://lobste.rs/s/elol3n/i_wrote_scheme_2025) - [I Wrote a Scheme in 2025](https://maplant.com/2026-02-09-I-Wrote-a-Scheme-in-2025.html)
* [2026-02-10, 15:50:00](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss) - [Linux Kernel 6.19 is Released and the Next Version is Confirmed to be 7.0](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss)
* [2026-02-10, 15:09:47](https://lobste.rs/s/ogr30w/how_i_cut_my_google_search_dependence_half) - [How I Cut My Google Search Dependence in Half](https://hister.org/posts/how-i-cut-my-google-search-dependence-in-half/)
* [2026-02-10, 11:08:00](https://soylentnews.org/article.pl?sid=26/02/09/0531254&amp;from=rss) - [Your iPhone is About to Get a New Privacy Feature to Protect Your Location Data From Prying Eyes](https://soylentnews.org/article.pl?sid=26/02/09/0531254&amp;from=rss)
* [2026-02-10, 06:22:00](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss) - [Microsoft Releases Urgent Office Patch While Russian-State Hackers Pounce](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss)
* [2026-02-10, 01:38:00](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss) - [A Fresh Look at IBM 3270 Information Display System](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss)
* [2026-02-09, 20:54:00](https://soylentnews.org/article.pl?sid=26/02/09/0514240&amp;from=rss) - [New York Lawmakers Introduce Bill That Aims to Halt Data Center Development for Three Years](https://soylentnews.org/article.pl?sid=26/02/09/0514240&amp;from=rss)
* [2026-02-09, 19:29:53](https://news.ycombinator.com/item?id=46949814) - [Using an engineering notebook](https://ntietz.com/blog/using-an-engineering-notebook/)
* [2026-02-09, 16:09:00](https://soylentnews.org/article.pl?sid=26/02/08/0232241&amp;from=rss) - [Taking a Second to Change the Time](https://soylentnews.org/article.pl?sid=26/02/08/0232241&amp;from=rss)
* [2026-02-09, 14:57:25](https://news.ycombinator.com/item?id=46945907) - [HeyWhatsThat](https://www.heywhatsthat.com/faq.html)
* [2026-02-09, 12:24:00](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss) - [Vibe Coding is Killing Open Source Software](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss)
* [2026-02-09, 08:39:00](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss) - [The AI productivity trap: Why your Best Engineers are Getting Slower](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss)
* [2026-02-09, 08:14:28](https://news.ycombinator.com/item?id=46942864) - [Text classification with Python 3.14&apos;s ZSTD module](https://maxhalford.github.io/blog/text-classification-zstd/)
* [2026-02-09, 03:54:00](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss) - [FBI Stymied by Apple&apos;s Lockdown Mode After Seizing Journalist&apos;s iPhone](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss)
* [2026-02-08, 23:12:00](https://soylentnews.org/article.pl?sid=26/02/07/0338257&amp;from=rss) - [Russian Spy Satellites Have Intercepted EU Communications Satellites](https://soylentnews.org/article.pl?sid=26/02/07/0338257&amp;from=rss)
* [2026-02-08, 19:09:28](https://news.ycombinator.com/item?id=46937427) - [Deobfuscation and Analysis of Ring-1.io](https://back.engineering/blog/04/02/2026/)
* [2026-02-08, 17:24:00](https://soylentnews.org/article.pl?sid=26/02/07/0328238&amp;from=rss) - [Lessons from China’s Delicate Dance of Censorship and Expression](https://soylentnews.org/article.pl?sid=26/02/07/0328238&amp;from=rss)
* [2026-02-08, 12:38:00](https://soylentnews.org/article.pl?sid=26/02/07/0323222&amp;from=rss) - [Linux From Scratch Abandoning SysVinit Support](https://soylentnews.org/article.pl?sid=26/02/07/0323222&amp;from=rss)
* [2026-02-08, 12:01:50](https://news.ycombinator.com/item?id=46933529) - [“Nothing” is the secret to structuring your work](https://www.vangemert.dev/blog/nothing)
* [2026-02-08, 07:57:00](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss) - [Self-Driving Cars In ‘Difficult Driving Situations’ Are Guided By Random Filipinos Overseas](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss)
* [2026-02-08, 03:14:00](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss) - [A Century of Hair Samples Proves Leaded Gas Ban Worked](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss)
* [2026-02-08, 02:03:27](https://news.ycombinator.com/item?id=46930602) - [The Other Markov&apos;s Inequality](https://www.ethanepperly.com/index.php/2026/01/16/the-other-markovs-inequality/)
