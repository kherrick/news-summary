# [News Summary](https://kherrick.github.io/news-summary/)

## Open Source and Technology Innovations

* [Commoning open-source versus growth-hacking open-source](https://garagehq.deuxfleurs.fr/blog/2025-commoning-opensource/) - A reflective piece on the contrasting approaches to managing open-source projects.

* [Migrating Burningboard.net Mastodon Instance to a Multi-Jail FreeBSD Setup](https://blog.hofstede.it/migrating-burningboardnet-mastodon-instance-to-a-multi-jail-freebsd-setup/index.html) - A detailed migration story of a Mastodon instance on FreeBSD using jails.

* [GitHub Actions Has a Package Manager, and It Might Be the Worst](https://nesbitt.io/2025/12/06/github-actions-package-manager.html) - Criticisms of the new GitHub Actions package manager.

* [Adding unpack syntax to RCL](https://ruudvanasseldonk.com/2025/adding-unpack-to-rcl) - Enhancements in RCL aimed at improving syntax around unpacking.

* [Desperately seeking squircles (2018)](https://www.figma.com/blog/desperately-seeking-squircles/) - A revisit of design trends influenced by the squircle shape.

* [Eurydice: a Rust to C compiler (yes)](http://jonathan.protzenko.fr/2025/10/28/eurydice.html) - Introduction of a unique compiler translating Rust to C.

* [Vanilla CSS is all you need](https://www.zolkos.com/2025/12/03/vanilla-css-is-all-you-need) - Advocacy for simplicity and efficacy in web design with basic CSS.

## Security Highlights

* [potential security breach in syncthing-fork](https://mastodon.pirateparty.be/@surfhosting/115674236291033568) - Discussion of a possible security vulnerability in syncthing-fork.

* [How I discovered a hidden microphone on a Chinese NanoKVM](https://telefoncek.si/2025/02/2025-02-10-hidden-microphone-on-nanokvm/) - A shocking revelation on security concerns in hardware.

* [OpenAI Desperate to Avoid Explaining Why It Deleted Pirated Book Datasets](https://soylentnews.org/article.pl?sid=25/12/05/0728256&amp;from=rss) - Legal controversy surrounding OpenAI's dataset deletion.

* [Why the Sanitizer API is just `setHTML()`](https://frederikbraun.de/why-sethtml.html) - Critical insights on browser security APIs.

* [Syntax Hacking: Researchers Discover Sentence Structure Can Bypass AI Safety Rules](https://soylentnews.org/article.pl?sid=25/12/06/1415242&amp;from=rss) - Exploration of AI vulnerabilities via syntax manipulation.

## Human Factors and Society

* [The f*** off contact page](https://www.nicchan.me/blog/the-f-off-contact-page/) - An irreverent approach to handling misleading contact forms.

* [Why Meetings Can Harm Employee Well-Being](https://it.slashdot.org/story/25/12/08/0132210/why-meetings-can-harm-employee-well-being?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analysis on the detrimental effects of excessive meetings.

* [Why Gen Z is Using Retro Tech](https://games.slashdot.org/story/25/12/07/1842250/why-gen-z-is-using-retro-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Insight into why retro technology is trending among younger generations.

* [College Students Flock To A New Major:  AI](https://news.slashdot.org/story/25/12/07/2330215/college-students-flock-to-a-new-major-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examination of the surge in AI-focused academic interest.

## Science and Environment

* [Was the Airbus A320 Recall Caused By Cosmic Rays?](https://tech.slashdot.org/story/25/12/08/0625216/was-the-airbus-a320-recall-caused-by-cosmic-rays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Hypotheses linking cosmic rays to aviation recalls.

* [Can This Simple Invention Convert Waste Heat Into Electricity?](https://hardware.slashdot.org/story/25/12/08/0236259/can-this-simple-invention-convert-waste-heat-into-electricity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A breakthrough invention for energy conversion.

* [Mechanical power generation using Earth's ambient radiation](https://www.science.org/doi/10.1126/sciadv.adw6833) - Novel research in energy generation using Earth's natural radiation.

* [No Rise in Radiation Levels at Chernobyl, Despite Damage from February's Drone Strike](https://hardware.slashdot.org/story/25/12/06/1916232/no-rise-in-radiation-levels-at-chernobyl-despite-damage-from-februarys-drone-strike?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Update on Chernobyl's radiation safety after recent damages.

## Artificial Intelligence and Performance

* [Recreating the lost SDK for a 42-year-old operating system: VisiCorp Visi On](https://soylentnews.org/article.pl?sid=25/12/08/0147224&amp;from=rss) - Reviving a historical piece of operating system software.

* [Netflix Quietly Drops Support for Casting to Most TVs](https://soylentnews.org/article.pl?sid=25/12/03/1255251&amp;from=rss) - Striking changes involving streaming services.

* [IBM CEO Warns That Ongoing Trillion-Dollar AI Data Center Buildout is Unsustainable](https://soylentnews.org/article.pl?sid=25/12/05/0730234&amp;from=rss) - Concerns about the scalability of the ongoing AI data center expansion.

* [Google Titans architecture, helping AI have long-term memory](https://research.google/blog/titans-miras-helping-ai-have-long-term-memory/) - Google's advancements in memory-focused AI architectures.

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

* [2025-12-08, 09:32:37](https://lobste.rs/s/wr3vrn/commoning_open_source_versus_growth) - [Commoning open-source versus growth-hacking open-source](https://garagehq.deuxfleurs.fr/blog/2025-commoning-opensource/)
* [2025-12-08, 09:16:50](https://lobste.rs/s/j78zip/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/j78zip/what_are_you_doing_this_week)
* [2025-12-08, 09:05:52](https://news.ycombinator.com/item?id=46190051) - [Migrating Burningboard.net Mastodon Instance to a Multi-Jail FreeBSD Setup](https://blog.hofstede.it/migrating-burningboardnet-mastodon-instance-to-a-multi-jail-freebsd-setup/index.html)
* [2025-12-08, 09:02:49](https://lobste.rs/s/4jbw6y/migrating_burningboard_net_mastodon) - [Migrating burningboard.net Mastodon instance to a Multi-Jail FreeBSD Setup](https://blog.hofstede.it/migrating-burningboardnet-mastodon-instance-to-a-multi-jail-freebsd-setup/index.html)
* [2025-12-08, 08:57:19](https://news.ycombinator.com/item?id=46189994) - [The f*** off contact page](https://www.nicchan.me/blog/the-f-off-contact-page/)
* [2025-12-08, 08:55:51](https://lobste.rs/s/urbcpw/potential_security_breach_syncthing) - [potential security breach in syncthing-fork](https://mastodon.pirateparty.be/@surfhosting/115674236291033568)
* [2025-12-08, 08:34:00](https://tech.slashdot.org/story/25/12/08/0625216/was-the-airbus-a320-recall-caused-by-cosmic-rays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Was the Airbus A320 Recall Caused By Cosmic Rays?](https://tech.slashdot.org/story/25/12/08/0625216/was-the-airbus-a320-recall-caused-by-cosmic-rays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 08:16:26](https://news.ycombinator.com/item?id=46189704) - [Applets Are Officially Gone, but Java in the Browser Is Better](https://frequal.com/java/AppletsGoneButJavaInTheBrowserBetterThanEver.html)
* [2025-12-08, 08:15:32](https://news.ycombinator.com/item?id=46189692) - [GitHub Actions Has a Package Manager, and It Might Be the Worst](https://nesbitt.io/2025/12/06/github-actions-package-manager.html)
* [2025-12-08, 08:14:28](https://lobste.rs/s/n6rfvu/adding_unpack_syntax_rcl) - [Adding unpack syntax to RCL](https://ruudvanasseldonk.com/2025/adding-unpack-to-rcl)
* [2025-12-08, 07:58:21](https://lobste.rs/s/cae1mg/from_azure_functions_freebsd) - [From Azure Functions to FreeBSD](https://jmmv.dev/2025/12/from-azure-functions-to-freebsd.html)
* [2025-12-08, 07:36:45](https://news.ycombinator.com/item?id=46189480) - [Show HN: Lockenv – Simple encrypted secrets storage for Git](https://github.com/illarion/lockenv)
* [2025-12-08, 07:00:33](https://news.ycombinator.com/item?id=46189258) - [Truemetrics (YC S23) Is Hiring](https://www.ycombinator.com/companies/truemetrics/jobs/1EHTSyT-python-software-engineer-analystics-and-algorithms)
* [2025-12-08, 06:24:00](https://soylentnews.org/article.pl?sid=25/12/07/1510243&amp;from=rss) - [New Jolla Phone Now Available for Pre-Order as an Independent Linux Phone](https://soylentnews.org/article.pl?sid=25/12/07/1510243&amp;from=rss)
* [2025-12-08, 04:45:20](https://news.ycombinator.com/item?id=46188451) - [Palantir Could Be the Most Overvalued Company That Ever Existed](https://247wallst.com/investing/2025/11/25/palantir-could-be-the-most-overvalued-company-that-ever-existed/)
* [2025-12-08, 04:36:00](https://tech.slashdot.org/story/25/12/08/0310242/all-of-russias-porsches-were-bricked-by-a-mysterious-satellite-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [All of Russia&apos;s Porsches Were Bricked By a Mysterious Satellite Outage](https://tech.slashdot.org/story/25/12/08/0310242/all-of-russias-porsches-were-bricked-by-a-mysterious-satellite-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 03:19:07](https://lobste.rs/s/2s0rxd/desperately_seeking_squircles_2018) - [Desperately seeking squircles (2018)](https://www.figma.com/blog/desperately-seeking-squircles/)
* [2025-12-08, 02:40:00](https://hardware.slashdot.org/story/25/12/08/0236259/can-this-simple-invention-convert-waste-heat-into-electricity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can This Simple Invention Convert Waste Heat Into Electricity?](https://hardware.slashdot.org/story/25/12/08/0236259/can-this-simple-invention-convert-waste-heat-into-electricity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 02:06:00](https://soylentnews.org/article.pl?sid=25/12/08/0147224&amp;from=rss) - [Recreating the lost SDK for a 42-year-old operating system: VisiCorp Visi On](https://soylentnews.org/article.pl?sid=25/12/08/0147224&amp;from=rss)
* [2025-12-08, 01:47:11](https://news.ycombinator.com/item?id=46187387) - [Damn Small Linux](https://www.damnsmalllinux.org/)
* [2025-12-08, 01:38:00](https://soylentnews.org/article.pl?sid=25/12/06/1419220&amp;from=rss) - [Waymo Drives Straight Into Active Police Scene, Ignores Chaos](https://soylentnews.org/article.pl?sid=25/12/06/1419220&amp;from=rss)
* [2025-12-08, 01:35:00](https://it.slashdot.org/story/25/12/08/0132210/why-meetings-can-harm-employee-well-being?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Meetings Can Harm Employee Well-Being](https://it.slashdot.org/story/25/12/08/0132210/why-meetings-can-harm-employee-well-being?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 00:34:00](https://tech.slashdot.org/story/25/12/08/0022229/eu-urged-to-soften-2035-ban-on-internal-combustion-engine-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Urged to Soften 2035 Ban on Internal Combustion Engine Cars](https://tech.slashdot.org/story/25/12/08/0022229/eu-urged-to-soften-2035-ban-on-internal-combustion-engine-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 00:22:52](https://lobste.rs/s/iuzgps/attempt_at_compelling_articulation) - [An Attempt at a Compelling Articulation of Forth&apos;s Practical Strengths and Eternal Usefulness](https://im-just-lee.ing/forth-why-cb234c03.txt)
* [2025-12-07, 23:34:00](https://news.slashdot.org/story/25/12/07/2330215/college-students-flock-to-a-new-major-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [College Students Flock To A New Major:  AI](https://news.slashdot.org/story/25/12/07/2330215/college-students-flock-to-a-new-major-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 23:18:13](https://lobste.rs/s/iohaag/pulldash_fast_filterable_github_pr) - [Pulldash: Fast, filterable GitHub PR review. Entirely client-side](https://github.com/coder/pulldash)
* [2025-12-07, 22:31:22](https://news.ycombinator.com/item?id=46185957) - [Bag of words, have mercy on us](https://www.experimental-history.com/p/bag-of-words-have-mercy-on-us)
* [2025-12-07, 22:18:59](https://news.ycombinator.com/item?id=46185816) - [How I block all online ads](https://troubled.engineer/posts/no-ads/)
* [2025-12-07, 22:07:00](https://hardware.slashdot.org/story/25/12/06/1916232/no-rise-in-radiation-levels-at-chernobyl-despite-damage-from-februarys-drone-strike?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [No Rise in Radiation Levels at Chernobyl, Despite Damage from February&apos;s Drone Strike](https://hardware.slashdot.org/story/25/12/06/1916232/no-rise-in-radiation-levels-at-chernobyl-despite-damage-from-februarys-drone-strike?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 21:55:01](https://news.ycombinator.com/item?id=46185576) - [Mechanical power generation using Earth&apos;s ambient radiation](https://www.science.org/doi/10.1126/sciadv.adw6833)
* [2025-12-07, 21:16:39](https://lobste.rs/s/fiakvo/why_sanitizer_api_is_just_sethtml) - [Why the Sanitizer API is just `setHTML()`](https://frederikbraun.de/why-sethtml.html)
* [2025-12-07, 20:59:00](https://slashdot.org/story/25/12/07/2048213/openai-insists-target-links-in-chatgpt-responses-werent-ads-but-suggestions---but-turns-them-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Insists Target Links in ChatGPT Responses Weren&apos;t Ads But &apos;Suggestions&apos; - But Turns Them Off](https://slashdot.org/story/25/12/07/2048213/openai-insists-target-links-in-chatgpt-responses-werent-ads-but-suggestions---but-turns-them-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 20:50:00](https://soylentnews.org/article.pl?sid=25/12/06/1415242&amp;from=rss) - [Syntax Hacking: Researchers Discover Sentence Structure Can Bypass AI Safety Rules](https://soylentnews.org/article.pl?sid=25/12/06/1415242&amp;from=rss)
* [2025-12-07, 19:59:00](https://news.slashdot.org/story/25/12/07/1955259/how-home-assistant-leads-a-local-first-rebellion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Home Assistant Leads a &apos;Local-First Rebellion&apos;](https://news.slashdot.org/story/25/12/07/1955259/how-home-assistant-leads-a-local-first-rebellion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 19:14:45](https://lobste.rs/s/lp2m1v/estimates_are_difficult_for_developers) - [Estimates are difficult for developers and product owners](https://thorsell.io/2025/12/07/estimates.html)
* [2025-12-07, 18:57:17](https://lobste.rs/s/loqwsc/f35_fighter_jet_s_c_coding_standards) - [F35 Fighter Jet’s C++ Coding Standards](https://www.stroustrup.com/JSF-AV-rules.pdf)
* [2025-12-07, 18:45:00](https://games.slashdot.org/story/25/12/07/1842250/why-gen-z-is-using-retro-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Gen Z is Using Retro Tech](https://games.slashdot.org/story/25/12/07/1842250/why-gen-z-is-using-retro-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 18:07:06](https://news.ycombinator.com/item?id=46183657) - [The C++ standard for the F-35 Fighter Jet [video]](https://www.youtube.com/watch?v=Gv4sDL9Ljww)
* [2025-12-07, 17:34:00](https://entertainment.slashdot.org/story/25/12/06/0459202/is-netflix-trying-to-buy-warner-bros-or-kill-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Netflix Trying to Buy Warner Bros. or Kill It? ](https://entertainment.slashdot.org/story/25/12/06/0459202/is-netflix-trying-to-buy-warner-bros-or-kill-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 17:18:54](https://news.ycombinator.com/item?id=46183294) - [I failed to recreate the 1996 Space Jam website with Claude](https://j0nah.com/i-failed-to-recreate-the-1996-space-jam-website-with-claude/)
* [2025-12-07, 16:34:00](https://tech.slashdot.org/story/25/12/07/0627214/new-freebsd-15-retires-32-bit-ports-and-modernizes-builds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New FreeBSD 15 Retires 32-Bit Ports and Modernizes Builds](https://tech.slashdot.org/story/25/12/07/0627214/new-freebsd-15-retires-32-bit-ports-and-modernizes-builds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 16:12:54](https://lobste.rs/s/4tvzih/gerrit_code_review_iceberg) - [The Gerrit code review iceberg](https://www.haiku-os.org/blog/pulkomandy/2025-11-24-the_gerrit_pending_review_iceberg/)
* [2025-12-07, 16:07:00](https://soylentnews.org/article.pl?sid=25/12/06/140210&amp;from=rss) - [Why People Keep Flocking to Linux in 2025 (and It&apos;s Not Just to Escape Windows)](https://soylentnews.org/article.pl?sid=25/12/06/140210&amp;from=rss)
* [2025-12-07, 15:34:00](https://news.slashdot.org/story/25/12/07/0651234/homebrew-can-now-help-you-install-flatpaks-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Homebrew Can Now Help You Install Flatpaks Too](https://news.slashdot.org/story/25/12/07/0651234/homebrew-can-now-help-you-install-flatpaks-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 15:08:17](https://news.ycombinator.com/item?id=46182202) - [Scala 3 slowed us down?](https://kmaliszewski9.github.io/scala/2025/12/07/scala3-slowdown.html)
* [2025-12-07, 15:02:16](https://lobste.rs/s/q8znua/kollector_publishing_koreader) - [KOllector - Publishing KOReader Highlights](https://tech.stonecharioteer.com/posts/2025/kollector/)
* [2025-12-07, 14:47:02](https://news.ycombinator.com/item?id=46182031) - [Nested Learning: A new ML paradigm for continual learning](https://research.google/blog/introducing-nested-learning-a-new-ml-paradigm-for-continual-learning/)
* [2025-12-07, 14:37:21](https://news.ycombinator.com/item?id=46181962) - [Dollar-stores overcharge customers while promising low prices](https://www.theguardian.com/us-news/2025/dec/03/customers-pay-more-rising-dollar-store-costs)
* [2025-12-07, 13:14:01](https://lobste.rs/s/ml4som/it_is_worth_it_optimize_images_for_your) - [It Is Worth It To Optimize Images For Your Site](https://brainbaking.com/post/2025/10/is-it-worth-it-to-optimize-images-for-your-site/)
* [2025-12-07, 12:57:59](https://news.ycombinator.com/item?id=46181371) - [I wasted years of my life in crypto](https://twitter.com/kenchangh/status/1994854381267947640)
* [2025-12-07, 12:49:14](https://lobste.rs/s/e4pgna/what_do_you_use_typedarrays_for) - [What do you use TypedArrays for in JavaScript/TypeScript?](https://lobste.rs/s/e4pgna/what_do_you_use_typedarrays_for)
* [2025-12-07, 12:34:00](https://news.slashdot.org/story/25/12/06/0812245/many-privileged-students-at-us-universities-are-getting-extra-time-on-tests-after-disability-diagnoses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Many Privileged Students at US Universities are Getting Extra Time on Tests After &apos;Disability&apos; Diagnoses](https://news.slashdot.org/story/25/12/06/0812245/many-privileged-students-at-us-universities-are-getting-extra-time-on-tests-after-disability-diagnoses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 12:31:53](https://news.ycombinator.com/item?id=46181268) - [The Anatomy of a macOS App](https://eclecticlight.co/2025/12/04/the-anatomy-of-a-macos-app/)
* [2025-12-07, 12:23:45](https://news.ycombinator.com/item?id=46181231) - [Google Titans architecture, helping AI have long-term memory](https://research.google/blog/titans-miras-helping-ai-have-long-term-memory/)
* [2025-12-07, 11:26:00](https://soylentnews.org/article.pl?sid=25/12/05/0735244&amp;from=rss) - [UW Nobel Winner&apos;s Lab Releases Most Powerful Protein Design Tool Yet](https://soylentnews.org/article.pl?sid=25/12/05/0735244&amp;from=rss)
* [2025-12-07, 08:34:00](https://developers.slashdot.org/story/25/12/07/0248219/is-ruby-still-a-serious-programming-language?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Ruby Still a &apos;Serious&apos; Programming Language?](https://developers.slashdot.org/story/25/12/07/0248219/is-ruby-still-a-serious-programming-language?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-07, 07:28:03](https://lobste.rs/s/ibjifi/what_i_learnt_about_making_websites_by) - [What I learnt about making websites by reading two thousand web pages](https://alexwlchan.net/2025/learning-how-to-make-websites/)
* [2025-12-07, 06:42:00](https://soylentnews.org/article.pl?sid=25/12/05/0733258&amp;from=rss) - [FreeBSD 15.0 Released With Pkgbase - and With It Come Several Major Changes](https://soylentnews.org/article.pl?sid=25/12/05/0733258&amp;from=rss)
* [2025-12-07, 04:39:56](https://lobste.rs/s/29tpgl/vanilla_css_is_all_you_need) - [Vanilla CSS is all you need](https://www.zolkos.com/2025/12/03/vanilla-css-is-all-you-need)
* [2025-12-07, 03:23:43](https://lobste.rs/s/jkl29r/discovering_indieweb_with_calm_tech) - [Discovering the indieweb with calm tech](https://alexsci.com/blog/calm-tech-discover/)
* [2025-12-07, 01:59:00](https://soylentnews.org/article.pl?sid=25/12/05/0730234&amp;from=rss) - [IBM CEO Warns That Ongoing Trillion-Dollar AI Data Center Buildout is Unsustainable](https://soylentnews.org/article.pl?sid=25/12/05/0730234&amp;from=rss)
* [2025-12-07, 01:39:25](https://lobste.rs/s/1kcrn4/eurydice_rust_c_compiler_yes) - [Eurydice: a Rust to C compiler (yes)](http://jonathan.protzenko.fr/2025/10/28/eurydice.html)
* [2025-12-07, 01:18:06](https://lobste.rs/s/t5zgds/using_llms_at_oxide) - [Using LLMs at Oxide](https://rfd.shared.oxide.computer/rfd/0576)
* [2025-12-06, 21:11:00](https://soylentnews.org/article.pl?sid=25/12/05/0728256&amp;from=rss) - [OpenAI Desperate to Avoid Explaining Why It Deleted Pirated Book Datasets](https://soylentnews.org/article.pl?sid=25/12/05/0728256&amp;from=rss)
* [2025-12-06, 20:00:17](https://news.ycombinator.com/item?id=46176169) - [CATL expects oceanic electric ships in 3 years](https://cleantechnica.com/2025/12/05/catl-expects-oceanic-electric-ships-in-3-years/)
* [2025-12-06, 19:50:43](https://lobste.rs/s/iaspme/use_python_for_scripting) - [Use Python for Scripting](https://hypirion.com/musings/use-python-for-scripting)
* [2025-12-06, 17:40:01](https://lobste.rs/s/zbqvyu/github_actions_has_package_manager_it) - [GitHub Actions Has a Package Manager, and It Might Be the Worst](https://nesbitt.io/2025/12/06/github-actions-package-manager.html)
* [2025-12-06, 17:38:43](https://lobste.rs/s/m3a3la/perl_s_decline_was_cultural) - [Perl&apos;s decline was cultural](https://www.beatworm.co.uk/blog/computers/perls-decline-was-cultural-not-technical)
* [2025-12-06, 16:29:54](https://lobste.rs/s/bj04hv/how_i_discovered_hidden_microphone_on) - [How I discovered a hidden microphone on a Chinese NanoKVM](https://telefoncek.si/2025/02/2025-02-10-hidden-microphone-on-nanokvm/)
* [2025-12-06, 16:29:00](https://soylentnews.org/article.pl?sid=25/12/05/0720258&amp;from=rss) - [New DDR5 Memory Overclocking World Record Set at 13,530 MT/S](https://soylentnews.org/article.pl?sid=25/12/05/0720258&amp;from=rss)
* [2025-12-06, 11:41:00](https://soylentnews.org/article.pl?sid=25/12/04/1138209&amp;from=rss) - [Let’s Encrypt to Reduce Certificate Validity From 90 Days to 45 Days](https://soylentnews.org/article.pl?sid=25/12/04/1138209&amp;from=rss)
* [2025-12-06, 06:53:00](https://soylentnews.org/article.pl?sid=25/12/04/1134226&amp;from=rss) - [After Nearly 30 Years, Crucial Will Stop Selling RAM to Consumers](https://soylentnews.org/article.pl?sid=25/12/04/1134226&amp;from=rss)
* [2025-12-06, 02:12:00](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss) - [Raspberry Pi Launches 1GB Model at $45, Temporarily Raises Prices on Higher-Capacity Boards](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss)
* [2025-12-05, 21:24:00](https://soylentnews.org/article.pl?sid=25/12/04/1131220&amp;from=rss) - [Supreme Court Hears Case That Could Trigger Big Crackdown on Internet Piracy](https://soylentnews.org/article.pl?sid=25/12/04/1131220&amp;from=rss)
* [2025-12-05, 19:32:17](https://news.ycombinator.com/item?id=46166161) - [A two-person method to simulate die rolls (2023)](https://blog.42yeah.is/algorithm/2023/08/05/two-person-die.html)
* [2025-12-05, 15:39:00](https://soylentnews.org/article.pl?sid=25/12/03/1710234&amp;from=rss) - [Oracle&apos;s Credit Risk is Spiking as Wall Street Asks How It&apos;s Going to Pay for All That AI](https://soylentnews.org/article.pl?sid=25/12/03/1710234&amp;from=rss)
* [2025-12-05, 13:56:34](https://news.ycombinator.com/item?id=46161328) - [Emacs is my new window manager](https://www.howardism.org/Technical/Emacs/new-window-manager.html)
* [2025-12-05, 10:54:00](https://soylentnews.org/article.pl?sid=25/12/03/178224&amp;from=rss) - [Dotcom Survivor Syndrome – How Perl’s Early Success Created the Seeds of Its Downfall](https://soylentnews.org/article.pl?sid=25/12/03/178224&amp;from=rss)
* [2025-12-05, 06:01:00](https://soylentnews.org/article.pl?sid=25/12/03/173255&amp;from=rss) - [Space CEO Explains Why He Believes Private Space Stations Are a Viable Business](https://soylentnews.org/article.pl?sid=25/12/03/173255&amp;from=rss)
* [2025-12-05, 01:24:00](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss) - [Linux First, Windows Later! Dell Launches Qualcomm NPU Laptop on Linux Before Windows](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss)
* [2025-12-04, 20:42:00](https://soylentnews.org/article.pl?sid=25/12/03/1255251&amp;from=rss) - [Netflix Quietly Drops Support for Casting to Most TVs](https://soylentnews.org/article.pl?sid=25/12/03/1255251&amp;from=rss)
* [2025-12-04, 15:53:00](https://soylentnews.org/article.pl?sid=25/12/03/1244208&amp;from=rss) - [Google&apos;s Gemini 3 Jailbroken in Minutes, and the Fallout is Alarming](https://soylentnews.org/article.pl?sid=25/12/03/1244208&amp;from=rss)
* [2025-12-04, 13:11:33](https://news.ycombinator.com/item?id=46147285) - [Uninitialized garbage on ia64 can be deadly (2004)](https://devblogs.microsoft.com/oldnewthing/20040119-00/?p=41003)
* [2025-12-04, 11:04:00](https://soylentnews.org/article.pl?sid=25/12/03/0225225&amp;from=rss) - [Datacenters in Space Are a Terrible, Horrible, No Good Idea.](https://soylentnews.org/article.pl?sid=25/12/03/0225225&amp;from=rss)
* [2025-12-04, 06:17:00](https://soylentnews.org/article.pl?sid=25/12/03/0223207&amp;from=rss) - [Flock Uses Overseas Gig Workers to Build its Surveillance AI](https://soylentnews.org/article.pl?sid=25/12/03/0223207&amp;from=rss)
* [2025-12-04, 01:36:00](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss) - [KDE to Drop X11 Session in KDE Plasma 6.8](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss)
