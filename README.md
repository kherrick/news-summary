# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Innovations

* [Open Source Devs Are Fighting AI Crawlers With Cleverness and Vengeance](https://soylentnews.org/article.pl?sid=25/03/28/1210259&from=rss) - A fascinating look into how open-source developers are devising strategies to thwart AI systems exploiting their projects.

* [Plain – a web framework for building products with Python](https://plainframework.com/) - Introducing a Python-based framework that aims to simplify product development.

* [Hexi – Modern header-only network binary serialisation for C++](https://github.com/EmberEmu/Hexi) - A modern approach to network binary serialization tailored for C++ developers.

* [Mathematical Compact Models of Advanced Transistors [pdf]](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2018/EECS-2018-24.pdf) - Insights into compact transistor models by renowned researchers.

* [Xee: A Modern XPath and XSLT Engine in Rust](https://blog.startifact.com/posts/xee/) - A new engine for XML processing using Rust, showcasing improved performance and functionality.

## Privacy, Security, and Ethical Concerns

* [Today Google bricked my Chromebook by force-installing a hidden extension](https://cloudisland.nz/@rmi/114219847307106213) - A detailed user account of Google's overreach with forced extension installations.

* [Upcoming Windows 11 builds cannot install without internet and Microsoft Account](https://infosec.exchange/@wdormann/114242475168860209) - Microsoft's move towards mandatory online connectivity sparks privacy concerns.

* [Madison Square Garden Bans Fan After Surveillance System IDs Him as Critic of Its CEO](https://yro.slashdot.org/story/25/03/29/0028217/madison-square-garden-bans-fan-after-surveillance-system-ids-him-as-critic-of-its-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An alarming example of surveillance technologies used to suppress dissent.

* [Scammers Steal $1T a Year – Mostly from Americans](https://www.wired.com/video/watch/incognito-mode-romance-scams) - Shocking statistics reveal the toll of global scamming activities.

* [Smart TVs Are Employing Screen Monitoring Tech To Harvest User Data](https://entertainment.slashdot.org/story/25/03/28/1944230/smart-tvs-are-employing-screen-monitoring-tech-to-harvest-user-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - How modern home gadgets surveil and monetize on user behaviors.

## Science and Space Exploration

* [Martian Dust May Pose Health Risk To Humans Exploring Red Planet, Study Finds](https://science.slashdot.org/story/25/03/29/0035216/martian-dust-may-pose-health-risk-to-humans-exploring-red-planet-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New findings detail challenges for future Martian explorers.

* [Giant, Fungus-Like Organism May Be Completely Unknown Branch of Life](https://science.slashdot.org/story/25/03/28/238210/giant-fungus-like-organism-may-be-completely-unknown-branch-of-life?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discovery of a mysterious life form could redefine biological classifications.

* [Scientists Propose 'Bodyoids' To Address Medical Research and Organ Shortage Challenges](https://science.slashdot.org/story/25/03/28/1933234/scientists-propose-bodyoids-to-address-medical-research-and-organ-shortage-challenges?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A novel idea to tackle organ scarcity and advance biomedical research.

* [Order to Chaos: The Fascinating Math That All Pedestrians Need to Know](https://soylentnews.org/article.pl?sid=25/03/26/1635243&from=rss) - Exploring mathematical principles influencing pedestrian motion.

* [4-Day Work-Week UK Pilot Due in Tech Land by Early Summer](https://soylentnews.org/article.pl?sid=25/03/26/0243240&from=rss) - The implications of future workplace experiments for employee wellbeing.

## Business and Economic Shifts

* [FDIC Rescinds Guidance Around Banks and Crypto](https://slashdot.org/story/25/03/28/2252217/fdic-rescinds-guidance-around-banks-and-crypto?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A move shaping the relationships between financial institutions and cryptocurrency.

* [Soylent News Entering a New Phase](https://soylentnews.org/article.pl?sid=25/03/28/1139202&from=rss) - The well-known tech blog describes its pivot.

* [Oracle Health Breach Compromises Patient Data At US Hospitals](https://developers.slashdot.org/story/25/03/28/2025251/oracle-health-breach-compromises-patient-data-at-us-hospitals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - How a breach impacted healthcare systems and patient trust.

* [SpaceX Reportedly Has a Secret Backdoor for Chinese Investment](https://soylentnews.org/article.pl?sid=25/03/27/0346219&from=rss) - Claims of non-transparent funding practices surface for the space giant.

* [Napster Sold for $200+ Million in the Year 2025](https://soylentnews.org/article.pl?sid=25/03/28/1127247&from=rss) - The comeback of a once-iconic digital music pioneer recounted.

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

* [2025-03-29, 09:35:01](https://news.ycombinator.com/item?id=43514087) - [Today Google bricked my Chromebook by force-installing a hidden extension](https://cloudisland.nz/@rmi/114219847307106213)
* [2025-03-29, 08:39:57](https://news.ycombinator.com/item?id=43513850) - [Scammers Steal $1T a Year – Mostly from Americans](https://www.wired.com/video/watch/incognito-mode-romance-scams)
* [2025-03-29, 08:29:27](https://news.ycombinator.com/item?id=43513811) - [Trump's attacks on universities get darker, with shadows reaching our shores](https://christinapagel.substack.com/p/trumps-attacks-on-universities-get)
* [2025-03-29, 07:49:00](https://soylentnews.org/article.pl?sid=25/03/28/1210259&from=rss) - [Open Source Devs Are Fighting AI Crawlers With Cleverness and Vengeance](https://soylentnews.org/article.pl?sid=25/03/28/1210259&from=rss)
* [2025-03-29, 07:00:00](https://science.slashdot.org/story/25/03/29/0035216/martian-dust-may-pose-health-risk-to-humans-exploring-red-planet-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Martian Dust May Pose Health Risk To Humans Exploring Red Planet, Study Finds](https://science.slashdot.org/story/25/03/29/0035216/martian-dust-may-pose-health-risk-to-humans-exploring-red-planet-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 06:58:08](https://news.ycombinator.com/item?id=43513397) - [Mathematical Compact Models of Advanced Transistors [pdf]](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2018/EECS-2018-24.pdf)
* [2025-03-29, 04:13:04](https://news.ycombinator.com/item?id=43512660) - [Upcoming Windows 11 builds cannot install without internet and Microsoft Account](https://infosec.exchange/@wdormann/114242475168860209)
* [2025-03-29, 04:11:45](https://news.ycombinator.com/item?id=43512657) - [Self-Supervised Learning from Images with JEPA](https://arxiv.org/abs/2301.08243)
* [2025-03-29, 04:00:00](https://soylentnews.org/article.pl?sid=25/03/28/1139202&from=rss) - [Soylent News Entering a New Phase](https://soylentnews.org/article.pl?sid=25/03/28/1139202&from=rss)
* [2025-03-29, 03:55:02](https://news.ycombinator.com/item?id=43512589) - [Plain – a web framework for building products with Python](https://plainframework.com/)
* [2025-03-29, 03:34:07](https://news.ycombinator.com/item?id=43512495) - [OpenWrt Two Approval](https://openwrt.org/voting/2025-02-12-openwrt-two)
* [2025-03-29, 03:32:00](https://lobste.rs/s/qpymbd/openwrt_two_approval) - [OpenWrt Two Approval](https://openwrt.org/voting/2025-02-12-openwrt-two)
* [2025-03-29, 03:30:00](https://yro.slashdot.org/story/25/03/29/0028217/madison-square-garden-bans-fan-after-surveillance-system-ids-him-as-critic-of-its-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Madison Square Garden Bans Fan After Surveillance System IDs Him as Critic of Its CEO](https://yro.slashdot.org/story/25/03/29/0028217/madison-square-garden-bans-fan-after-surveillance-system-ids-him-as-critic-of-its-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 03:15:03](https://lobste.rs/s/y7jhdy/condition_system_for_fennel_language_lua) - [Condition system for Fennel language and Lua runtime](https://andreyor.st/posts/2021-08-08-condition-system-for-fennel-language-and-lua-runtime/)
* [2025-03-29, 03:00:00](https://soylentnews.org/article.pl?sid=25/03/28/122201&from=rss) - [Security Vulnerability Fixed in Firefox 136.0.4, Firefox ESR 128.8.1, Firefox ESR 115.21.1](https://soylentnews.org/article.pl?sid=25/03/28/122201&from=rss)
* [2025-03-29, 01:10:00](https://science.slashdot.org/story/25/03/28/238210/giant-fungus-like-organism-may-be-completely-unknown-branch-of-life?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Giant, Fungus-Like Organism May Be Completely Unknown Branch of Life](https://science.slashdot.org/story/25/03/28/238210/giant-fungus-like-organism-may-be-completely-unknown-branch-of-life?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 00:30:00](https://slashdot.org/story/25/03/28/2252217/fdic-rescinds-guidance-around-banks-and-crypto?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FDIC Rescinds Guidance Around Banks and Crypto](https://slashdot.org/story/25/03/28/2252217/fdic-rescinds-guidance-around-banks-and-crypto?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 00:22:21](https://news.ycombinator.com/item?id=43511464) - [iCloud Mail has DNS misconfigured?](https://www.mail-tester.com/test-p3tdhnk3o)
* [2025-03-29, 00:11:00](https://lobste.rs/s/jxmcph/introducing_git_revise_2019) - [Introducing git-revise (2019)](https://mystor.github.io/git-revise.html)
* [2025-03-28, 23:55:49](https://lobste.rs/s/2qafif/learn_css_layout_pedantic_way) - [Learn CSS Layout The Pedantic Way](https://book.mixu.net/css/)
* [2025-03-28, 23:50:00](https://science.slashdot.org/story/25/03/28/232215/a-new-image-file-format-efficiently-stores-invisible-light-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [A New Image File Format Efficiently Stores Invisible Light Data](https://science.slashdot.org/story/25/03/28/232215/a-new-image-file-format-efficiently-stores-invisible-light-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 23:10:00](https://developers.slashdot.org/story/25/03/28/2148205/doge-to-rewrite-ssa-codebase-in-months?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DOGE To Rewrite SSA Codebase In 'Months'](https://developers.slashdot.org/story/25/03/28/2148205/doge-to-rewrite-ssa-codebase-in-months?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 22:46:43](https://news.ycombinator.com/item?id=43510710) - [Show HN: An Almost Free, Open Source TURN Server](https://github.com/lvidgen/WebRTC/blob/master/FOSS_TURN_Server/howto.md)
* [2025-03-28, 22:30:00](https://developers.slashdot.org/story/25/03/28/2025251/oracle-health-breach-compromises-patient-data-at-us-hospitals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Oracle Health Breach Compromises Patient Data At US Hospitals](https://developers.slashdot.org/story/25/03/28/2025251/oracle-health-breach-compromises-patient-data-at-us-hospitals?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 22:16:00](https://soylentnews.org/article.pl?sid=25/03/28/1127247&from=rss) - [Napster Sold for $200+ Million in the Year 2025](https://soylentnews.org/article.pl?sid=25/03/28/1127247&from=rss)
* [2025-03-28, 22:10:00](https://tech.slashdot.org/story/25/03/28/2156237/xai-acquires-x?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [xAI Acquires X](https://tech.slashdot.org/story/25/03/28/2156237/xai-acquires-x?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 21:59:46](https://lobste.rs/s/x3hgqy/could_javascript_have_synchronous_await) - [Could JavaScript have synchronous await?](https://2ality.com/2025/03/sync-await.html)
* [2025-03-28, 21:50:00](https://yro.slashdot.org/story/25/03/28/2041200/trump-pardons-founder-of-electric-vehicle-start-up-nikola-trevor-milton?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Trump Pardons Founder of Electric Vehicle Start-Up Nikola, Trevor Milton](https://yro.slashdot.org/story/25/03/28/2041200/trump-pardons-founder-of-electric-vehicle-start-up-nikola-trevor-milton?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 21:37:21](https://news.ycombinator.com/item?id=43510036) - [DIY PTP Grandmaster Clock with a Raspberry Pi](https://www.jeffgeerling.com/blog/2025/diy-ptp-grandmaster-clock-raspberry-pi)
* [2025-03-28, 21:23:42](https://news.ycombinator.com/item?id=43509923) - [xAI has acquired X, xAI now valued at $80B](https://twitter.com/elonmusk/status/1905731750275510312)
* [2025-03-28, 21:10:00](https://science.slashdot.org/story/25/03/28/1959225/nearly-half-of-people-in-the-us-have-toxic-pfas-in-their-drinking-water?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nearly Half of People in the US Have Toxic PFAS in Their Drinking Water](https://science.slashdot.org/story/25/03/28/1959225/nearly-half-of-people-in-the-us-have-toxic-pfas-in-their-drinking-water?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 21:01:49](https://news.ycombinator.com/item?id=43509782) - [Finley (YC W21) Is Hiring a Technical Implementations Specialist](https://ats.rippling.com/finley-technologies/jobs)
* [2025-03-28, 20:30:00](https://entertainment.slashdot.org/story/25/03/28/1944230/smart-tvs-are-employing-screen-monitoring-tech-to-harvest-user-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Smart TVs Are Employing Screen Monitoring Tech To Harvest User Data](https://entertainment.slashdot.org/story/25/03/28/1944230/smart-tvs-are-employing-screen-monitoring-tech-to-harvest-user-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 20:29:32](https://news.ycombinator.com/item?id=43509548) - [Digital Echoes and Unquiet Minds](https://www.chrbutler.com/digital-echoes-and-unquiet-minds)
* [2025-03-28, 20:27:15](https://lobste.rs/s/yyitxy/introducing_swiftly_1_0) - [Introducing swiftly 1.0](https://swift.org/blog/introducing-swiftly_10/)
* [2025-03-28, 20:22:47](https://lobste.rs/s/zpnypl/colonel_s_bequest_case_cracked) - [The Colonel’s Bequest – Case Cracked](https://www.benshoof.org/blog/case-cracked)
* [2025-03-28, 20:03:13](https://lobste.rs/s/mmxm3v/organic_maps_github_has_gone_long_live) - [Organic Maps: GitHub has gone - long live Forgejo](https://mastodon.social/@organicmaps/114233788700982882)
* [2025-03-28, 19:50:00](https://science.slashdot.org/story/25/03/28/1933234/scientists-propose-bodyoids-to-address-medical-research-and-organ-shortage-challenges?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Scientists Propose 'Bodyoids' To Address Medical Research and Organ Shortage Challenges](https://science.slashdot.org/story/25/03/28/1933234/scientists-propose-bodyoids-to-address-medical-research-and-organ-shortage-challenges?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 19:41:55](https://lobste.rs/s/gldsdm/ode_game_boy_advance) - [An Ode To The Game Boy Advance](https://brainbaking.com/post/2025/03/an-ode-to-the-game-boy-advance/)
* [2025-03-28, 19:15:00](https://yro.slashdot.org/story/25/03/28/1915238/again-and-again-nso-groups-customers-keep-getting-their-spyware-operations-caught?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Again and Again, NSO Group's Customers Keep Getting Their Spyware Operations Caught](https://yro.slashdot.org/story/25/03/28/1915238/again-and-again-nso-groups-customers-keep-getting-their-spyware-operations-caught?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 18:35:00](https://news.slashdot.org/story/25/03/28/184236/uk-govt-data-people-not-technical-says-ex-downing-st-data-science-head?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [UK Govt Data People Not Technical, Says Ex-Downing St Data Science Head](https://news.slashdot.org/story/25/03/28/184236/uk-govt-data-people-not-technical-says-ex-downing-st-data-science-head?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 18:12:58](https://news.ycombinator.com/item?id=43508418) - [We hacked Gemini's Python sandbox and leaked its source code (at least some)](https://www.landh.tech/blog/20250327-we-hacked-gemini-source-code/)
* [2025-03-28, 17:57:00](https://entertainment.slashdot.org/story/25/03/28/1757237/inside-youtubes-weird-world-of-fake-movie-trailers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Inside YouTube's Weird World Of Fake Movie Trailers](https://entertainment.slashdot.org/story/25/03/28/1757237/inside-youtubes-weird-world-of-fake-movie-trailers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 17:37:42](https://news.ycombinator.com/item?id=43508061) - [Show HN: Hexi – Modern header-only network binary serialisation for C++](https://github.com/EmberEmu/Hexi)
* [2025-03-28, 17:32:00](https://soylentnews.org/article.pl?sid=25/03/27/1154254&from=rss) - [A Chip Has Broken the Critical Barrier That Could Ultimately Begin the Singularity](https://soylentnews.org/article.pl?sid=25/03/27/1154254&from=rss)
* [2025-03-28, 17:23:33](https://lobste.rs/s/uov26c/can_jank_beat_clojure_s_error_reporting) - [Can jank beat Clojure's error reporting?](https://jank-lang.org/blog/2025-03-28-error-reporting/)
* [2025-03-28, 15:55:17](https://news.ycombinator.com/item?id=43506951) - [Show HN Pianoboi – displays sheet music as you play your piano](https://pianoboi.site)
* [2025-03-28, 15:06:22](https://lobste.rs/s/u07ssx/terrible_horrible_no_good_very_bad_python) - [Terrible Horrible No Good Very Bad Python](https://jyn.dev/terrible-horrible-no-good-very-bad-python/)
* [2025-03-28, 14:55:54](https://news.ycombinator.com/item?id=43506238) - [Decomposing a Factorial into Large Factors](https://terrytao.wordpress.com/2025/03/26/decomposing-a-factorial-into-large-factors/)
* [2025-03-28, 14:45:23](https://lobste.rs/s/jyqgmq/handling_form_errors_htmx) - [Handling form errors in htmx](https://dev.to/yawaramin/handling-form-errors-in-htmx-3ncg)
* [2025-03-28, 14:29:32](https://lobste.rs/s/zjrctq/problem_with_ool_is_not_oo_2009) - [The problem with OOL is not the OO (2009)](https://www.rebol.com/article/0425.html)
* [2025-03-28, 14:09:51](https://lobste.rs/s/va0h3b/building_statically_linked_go) - [Building Statically Linked Go Executables with CGO and Zig](https://calabro.io/zig-cgo)
* [2025-03-28, 13:49:02](https://lobste.rs/s/816nbi/compress_better_compute_bigger) - [Compress Better, Compute Bigger](https://ironarray.io/blog/compute-bigger)
* [2025-03-28, 13:35:16](https://lobste.rs/s/dfjcom/data_demand_some_damn_respect) - [Data demand some damn respect](https://taylor.town/flat-scraps-002)
* [2025-03-28, 12:45:00](https://soylentnews.org/article.pl?sid=25/03/27/0346219&from=rss) - [SpaceX Reportedly Has a Secret Backdoor for Chinese Investment](https://soylentnews.org/article.pl?sid=25/03/27/0346219&from=rss)
* [2025-03-28, 12:42:41](https://lobste.rs/s/05vftn/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/05vftn/what_are_you_doing_this_weekend)
* [2025-03-28, 12:14:06](https://news.ycombinator.com/item?id=43504413) - [I asked police to send me their public surveillance footage of my car](https://cardinalnews.org/2025/03/28/i-drove-300-miles-in-rural-virginia-then-asked-police-to-send-me-their-public-surveillance-footage-of-my-car-heres-what-i-learned/)
* [2025-03-28, 11:17:35](https://lobste.rs/s/ej4ps3/safeishly_use_non_reentrant_libraries) - [Safeishly use non-reentrant libraries with POSIX threads](https://git.sr.ht/~runxiyu/dlcage)
* [2025-03-28, 11:01:19](https://news.ycombinator.com/item?id=43503872) - [How to write blog posts that developers read](https://refactoringenglish.com/chapters/write-blog-posts-developers-read/)
* [2025-03-28, 10:26:26](https://lobste.rs/s/i3ya4n/apple_needs_snow_sequoia) - [Apple Needs a Snow Sequoia](https://reviews.ofb.biz/safari/article/1300.html)
* [2025-03-28, 07:56:00](https://soylentnews.org/article.pl?sid=25/03/26/1637237&from=rss) - [ReactOS 0.4.15 Released](https://soylentnews.org/article.pl?sid=25/03/26/1637237&from=rss)
* [2025-03-28, 06:54:03](https://lobste.rs/s/ment9k/xee_modern_xpath_xslt_engine_rust) - [Xee: A Modern XPath and XSLT Engine in Rust](https://blog.startifact.com/posts/xee/)
* [2025-03-28, 06:48:18](https://news.ycombinator.com/item?id=43502291) - [Xee: A Modern XPath and XSLT Engine in Rust](https://blog.startifact.com/posts/xee/)
* [2025-03-28, 03:20:28](https://lobste.rs/s/qqvrip/way_we_re_thinking_about_breaking_changes) - [The way we're thinking about breaking changes is really silly](https://welltypedwitch.bearblog.dev/the-way-were-thinking-about-breaking-changes-is-really-silly/)
* [2025-03-28, 03:13:00](https://soylentnews.org/article.pl?sid=25/03/26/1635243&from=rss) - [Order to Chaos: The Fascinating Math That All Pedestrians Need to Know](https://soylentnews.org/article.pl?sid=25/03/26/1635243&from=rss)
* [2025-03-27, 23:58:05](https://lobste.rs/s/ki4dkb/take_this_on_call_rotation_shove_it) - [Take this on-call rotation and shove it](https://www.scottsmitelli.com/articles/take-oncall-and-shove-it/)
* [2025-03-27, 22:28:00](https://soylentnews.org/article.pl?sid=25/03/26/1631253&from=rss) - [Postel's Law and the Three Ring Circus](https://soylentnews.org/article.pl?sid=25/03/26/1631253&from=rss)
* [2025-03-27, 17:46:00](https://soylentnews.org/article.pl?sid=25/03/26/1629222&from=rss) - [Eric Schmidt Suggests Countries Could Engage in Mutual Assured AI Malfunction (MAIM)](https://soylentnews.org/article.pl?sid=25/03/26/1629222&from=rss)
* [2025-03-27, 17:37:44](https://lobste.rs/s/g8pxhy/things_go_wrong_with_disk_io) - [Things that go wrong with disk IO](https://notes.eatonphil.com/2025-03-27-things-that-go-wrong-with-disk-io.html)
* [2025-03-27, 16:10:00](https://lobste.rs/s/2tfh34/spade_hardware_description_language) - [Spade, a hardware description language inspired by modern software languages](https://spade-lang.org/)
* [2025-03-27, 13:26:01](https://lobste.rs/s/youq7y/how_write_blog_posts_developers_read) - [How to Write Blog Posts that Developers Read](https://refactoringenglish.com/chapters/write-blog-posts-developers-read/)
* [2025-03-27, 13:02:00](https://soylentnews.org/article.pl?sid=25/03/26/1623212&from=rss) - [Is Your Job Making You Happy ?](https://soylentnews.org/article.pl?sid=25/03/26/1623212&from=rss)
* [2025-03-27, 08:14:00](https://soylentnews.org/article.pl?sid=25/03/26/0319206&from=rss) - [Chicago-Sized Iceberg Hid Ancient Ecosystem](https://soylentnews.org/article.pl?sid=25/03/26/0319206&from=rss)
* [2025-03-27, 03:26:00](https://soylentnews.org/article.pl?sid=25/03/26/038215&from=rss) - [EU OS Aims to Free the European Public Sector Desktop](https://soylentnews.org/article.pl?sid=25/03/26/038215&from=rss)
* [2025-03-27, 01:02:00](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss) - [The Search for Missing Plane MH370 is Back on](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss)
* [2025-03-26, 20:20:00](https://soylentnews.org/article.pl?sid=25/03/26/0237223&from=rss) - [Producing Wafers at TSMC Arizona is Only 10% More Expensive Than in Taiwan](https://soylentnews.org/article.pl?sid=25/03/26/0237223&from=rss)
* [2025-03-26, 18:38:14](https://news.ycombinator.com/item?id=43485373) - [You Need Subtyping](https://blog.polybdenum.com/2025/03/26/why-you-need-subtyping.html)
* [2025-03-26, 15:35:00](https://soylentnews.org/article.pl?sid=25/03/26/0243240&from=rss) - [4-Day Work-Week UK Pilot Due in Tech Land by Early Summer](https://soylentnews.org/article.pl?sid=25/03/26/0243240&from=rss)
* [2025-03-26, 10:53:00](https://soylentnews.org/article.pl?sid=25/03/24/1817219&from=rss) - [European Coalition Pushes For Second Chips Act Funding To Boost Semiconductor Sector](https://soylentnews.org/article.pl?sid=25/03/24/1817219&from=rss)
* [2025-03-26, 06:10:00](https://soylentnews.org/article.pl?sid=25/03/24/1815205&from=rss) - [Harnessing Nature's Fractals for Flexible Electronics: Biomimetic Fabrication Technique Uses Leaf](https://soylentnews.org/article.pl?sid=25/03/24/1815205&from=rss)
* [2025-03-26, 04:08:45](https://news.ycombinator.com/item?id=43478789) - [Conquest of the Incas](https://mattlakeman.org/2025/03/24/conquest-of-the-incas/)
* [2025-03-26, 03:08:01](https://news.ycombinator.com/item?id=43478480) - [Window cleaner in quest to confirm priceless Shakespeare portrait](https://www.bbc.com/news/articles/c5yr37nlzv8o)
* [2025-03-26, 01:25:00](https://soylentnews.org/article.pl?sid=25/03/24/1812238&from=rss) - [The 25 Years of Finnix](https://soylentnews.org/article.pl?sid=25/03/24/1812238&from=rss)
* [2025-03-25, 21:07:40](https://news.ycombinator.com/item?id=43475982) - [The Curious Case of Beam CPU Usage (2019)](https://stressgrid.com/blog/beam_cpu_usage/)
* [2025-03-25, 20:38:00](https://soylentnews.org/article.pl?sid=25/03/24/154217&from=rss) - [Device Enables Direct Communication Among Multiple Quantum Processors](https://soylentnews.org/article.pl?sid=25/03/24/154217&from=rss)
* [2025-03-25, 16:33:50](https://news.ycombinator.com/item?id=43473195) - [Emulating the YM2612: Part 1 – Interface](https://jsgroth.dev/blog/posts/emulating-ym2612-part-1/)
* [2025-03-25, 15:52:00](https://soylentnews.org/article.pl?sid=25/03/24/1454238&from=rss) - [Decades-Long Quest Leads to New Antibiotic Compounds](https://soylentnews.org/article.pl?sid=25/03/24/1454238&from=rss)
* [2025-03-25, 12:30:00](https://news.ycombinator.com/item?id=43470416) - [Playstation Mod Turns the PSOne into a Crustacean](https://gizmodo.com/the-carcinisation-of-playstation-is-complete-say-hello-to-playstacean-2000579934)
* [2025-03-25, 12:00:56](https://news.ycombinator.com/item?id=43470192) - [Testing Without Mocks: A Pattern Language (2023)](https://www.jamesshore.com/v2/projects/nullables/testing-without-mocks)
* [2025-03-25, 11:09:00](https://soylentnews.org/article.pl?sid=25/03/24/0347235&from=rss) - [Squirrels Inspire Leaping Strategy for Salto Robot](https://soylentnews.org/article.pl?sid=25/03/24/0347235&from=rss)
* [2025-03-25, 09:55:21](https://news.ycombinator.com/item?id=43469535) - [Optimizing Matrix Multiplication on RDNA3](https://seb-v.github.io/optimization/update/2025/01/20/Fast-GPU-Matrix-multiplication.html)
* [2025-03-25, 06:24:00](https://soylentnews.org/article.pl?sid=25/03/24/0335233&from=rss) - [Sperm Donation Giant California Cryobank Warns of a Data Breach](https://soylentnews.org/article.pl?sid=25/03/24/0335233&from=rss)
* [2025-03-25, 03:56:17](https://news.ycombinator.com/item?id=43467988) - [Noise cancellation improves turn-taking for AI Voice Agents](https://krisp.ai/blog/improving-turn-taking-of-ai-voice-agents-with-background-voice-cancellation/)
* [2025-03-25, 01:37:00](https://soylentnews.org/article.pl?sid=25/03/23/1454225&from=rss) - [Cement Sand Substitute Made Directly From Seawater, Electricity and CO2](https://soylentnews.org/article.pl?sid=25/03/23/1454225&from=rss)
