# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Innovations

* [Garbage collected handles are lifetime-contravariant](https://trynova.dev/blog/garbage-collection-is-contrarian)

* [Prompting 101: Show, don’t tell](https://www.haskellforall.com/2026/01/prompting-101-show-dont-tell.html)

* [QtNat – Open you port with Qt UPnP](http://renaudguezennec.eu/index.php/2026/01/09/qtnat-open-you-port-with-qt/)

* [How we made Python's packaging library 3x faster](https://iscinumpy.dev/post/packaging-faster/)

* [Amazon's New Manager Dashboard Flags 'Low-Time Badgers' and 'Zero Badgers'](https://slashdot.org/story/26/01/09/1728223/amazons-new-manager-dashboard-flags-low-time-badgers-and-zero-badgers?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Making Tools Developers Actually Use](https://www.youtube.com/watch?v=119qVkHxPkM)

## Scientific Discoveries and Medical Advances

* [The Golden Age of Vaccine Development](https://science.slashdot.org/story/26/01/09/1755211/the-golden-age-of-vaccine-development?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Exercise can be nearly as effective as therapy for depression](https://www.sciencedaily.com/releases/2026/01/260107225516.htm)

* [Fusion Physicists Found a Way Around a Long-Standing Density Limit](https://science.slashdot.org/story/26/01/09/0319216/fusion-physicists-found-a-way-around-a-long-standing-density-limit?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Ultimate Camouflage Tech Mimics Octopus In Scientific First](https://science.slashdot.org/story/26/01/09/0312218/ultimate-camouflage-tech-mimics-octopus-in-scientific-first?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Some Super-Smart Dogs Can Learn New Words Just By Eavesdropping](https://science.slashdot.org/story/26/01/08/2249216/some-super-smart-dogs-can-learn-new-words-just-by-eavesdropping?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Digital Security and Cyber Issues

* [SendGrid isn’t emailing about ICE or BLM – it’s a phishing attack](https://fredbenenson.com/blog/2026/01/09/sendgrid-isnt-emailing-you-about-ice-or-blm-its-a-phishing-attack/)

* [Handling secrets (somewhat) securely in shells](https://linus.schreibt.jetzt/posts/shell-secrets.html)

* [Vietnam government has banned rooted phones from using any banking app](https://xdaforums.com/t/discussion-the-root-and-mod-hiding-fingerprint-spoofing-keybox-stealing-cat-and-mouse-game.4425939/page-118)

## Gaming and Creative Projects

* [RTX 5090 and Raspberry Pi: Can It Game?](https://scottjg.com/posts/2026-01-08-crappy-computer-showdown/)

* [Show HN: I made a memory game to teach you to play piano by ear](https://lend-me-your-ears.specr.net)

* [Shell scripts](https://f5n.org/blog/2026/shell-scripts/)

## Cultural and Industry Trends

* [America Is Falling Out of Love With Pizza](https://news.slashdot.org/story/26/01/09/1857257/america-is-falling-out-of-love-with-pizza?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Craigslist at 30: No Algorithms, No Ads, No Problem](https://tech.slashdot.org/story/26/01/09/1618243/craigslist-at-30-no-algorithms-no-ads-no-problem?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [London–Calcutta bus service](https://en.wikipedia.org/wiki/London%E2%80%93Calcutta_bus_service)

* [How Markdown took over the world](https://www.anildash.com/2026/01/09/how-markdown-took-over-the-world/)

## Environmental and Climate Insights

* [Record Ocean Heat is Intensifying Climate Disasters, Data Shows](https://news.slashdot.org/story/26/01/09/148202/record-ocean-heat-is-intensifying-climate-disasters-data-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [While the World Cools on EVs, Norway Pushes to 96% Electric Sales](https://soylentnews.org/article.pl?sid=26/01/07/1228222&from=rss)

* [Strengthening Asphalt Roads With a Unique Green Ingredient: Algae](https://soylentnews.org/article.pl?sid=26/01/03/0139235&from=rss)

## Historical Insights and Unique Finds

* [Scientists discover oldest poison, on 60k-year-old arrows](https://www.nytimes.com/2026/01/07/science/poison-arrows-south-africa.html)

* [In 1962, a Geologist Went Into a Cave. 2 Months Later, He'd Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&from=rss)

* [The Worst CPUs Ever Made](https://soylentnews.org/article.pl?sid=26/01/02/1627244&from=rss)

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

* [2026-01-09, 21:25:00](https://news.slashdot.org/story/26/01/09/1742218/microsoft-windows-media-player-stops-serving-up-cd-album-info?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Windows Media Player Stops Serving Up CD Album Info](https://news.slashdot.org/story/26/01/09/1742218/microsoft-windows-media-player-stops-serving-up-cd-album-info?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 21:15:10](https://lobste.rs/s/jydyuw/garbage_collected_handles_are_lifetime) - [Garbage collected handles are lifetime-contravariant](https://trynova.dev/blog/garbage-collection-is-contrarian)
* [2026-01-09, 20:41:00](https://news.slashdot.org/story/26/01/09/1832229/identity-and-ideology-in-the-school-boardroom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Identity and Ideology in the School Boardroom](https://news.slashdot.org/story/26/01/09/1832229/identity-and-ideology-in-the-school-boardroom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 20:27:03](https://lobste.rs/s/zdwvdw/prompting_101_show_don_t_tell) - [Prompting 101: Show, don’t tell](https://www.haskellforall.com/2026/01/prompting-101-show-dont-tell.html)
* [2026-01-09, 20:17:07](https://news.ycombinator.com/item?id=46558739) - [QtNat – Open you port with Qt UPnP](http://renaudguezennec.eu/index.php/2026/01/09/qtnat-open-you-port-with-qt/)
* [2026-01-09, 20:01:00](https://science.slashdot.org/story/26/01/09/1755211/the-golden-age-of-vaccine-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Golden Age of Vaccine Development](https://science.slashdot.org/story/26/01/09/1755211/the-golden-age-of-vaccine-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 19:33:47](https://news.ycombinator.com/item?id=46558148) - [RTX 5090 and Raspberry Pi: Can It Game?](https://scottjg.com/posts/2026-01-08-crappy-computer-showdown/)
* [2026-01-09, 19:25:00](https://news.slashdot.org/story/26/01/09/1857257/america-is-falling-out-of-love-with-pizza?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America Is Falling Out of Love With Pizza](https://news.slashdot.org/story/26/01/09/1857257/america-is-falling-out-of-love-with-pizza?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 19:15:21](https://news.ycombinator.com/item?id=46557879) - [Show HN: Rocket Launch and Orbit Simulator](https://www.donutthejedi.com/)
* [2026-01-09, 19:11:57](https://news.ycombinator.com/item?id=46557823) - [Show HN: EuConform – Offline-first EU AI Act compliance tool (open source)](https://github.com/Hiepler/EuConform)
* [2026-01-09, 18:48:30](https://news.ycombinator.com/item?id=46557489) - [JavaScript Demos in 140 Characters](https://beta.dwitter.net)
* [2026-01-09, 18:47:25](https://lobste.rs/s/yzdhxz/how_we_made_python_s_packaging_library_3x) - [How we made Python&apos;s packaging library 3x faster](https://iscinumpy.dev/post/packaging-faster/)
* [2026-01-09, 18:44:00](https://slashdot.org/story/26/01/09/1728223/amazons-new-manager-dashboard-flags-low-time-badgers-and-zero-badgers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s New Manager Dashboard Flags &apos;Low-Time Badgers&apos; and &apos;Zero Badgers&apos;](https://slashdot.org/story/26/01/09/1728223/amazons-new-manager-dashboard-flags-low-time-badgers-and-zero-badgers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 18:38:34](https://news.ycombinator.com/item?id=46557352) - [Turn a single image into a navigable 3D Gaussian Splat with depth](https://lab.revelium.studio/ml-sharp)
* [2026-01-09, 18:29:35](https://news.ycombinator.com/item?id=46557233) - [Exercise can be nearly as effective as therapy for depression](https://www.sciencedaily.com/releases/2026/01/260107225516.htm)
* [2026-01-09, 18:15:16](https://news.ycombinator.com/item?id=46557029) - [Show HN: Scroll Wikipedia like TikTok](https://quack.sdan.io)
* [2026-01-09, 18:05:00](https://linux.slashdot.org/story/26/01/09/1649237/torvalds-tells-kernel-devs-to-stop-debating-ai-slop---bad-actors-wont-follow-the-rules-anyway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Torvalds Tells Kernel Devs To Stop Debating AI Slop - Bad Actors Won&apos;t Follow the Rules Anyway](https://linux.slashdot.org/story/26/01/09/1649237/torvalds-tells-kernel-devs-to-stop-debating-ai-slop---bad-actors-wont-follow-the-rules-anyway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 18:00:56](https://news.ycombinator.com/item?id=46556822) - [Replit (YC W18) Is Hiring](https://jobs.ashbyhq.com/replit)
* [2026-01-09, 17:52:20](https://news.ycombinator.com/item?id=46556695) - [How Markdown took over the world](https://www.anildash.com/2026/01/09/how-markdown-took-over-the-world/)
* [2026-01-09, 17:36:00](https://soylentnews.org/article.pl?sid=26/01/08/0319211&amp;from=rss) - [Palo Alto Networks Security-Intel Boss Calls AI Agents 2026&apos;S Biggest Insider Threat](https://soylentnews.org/article.pl?sid=26/01/08/0319211&amp;from=rss)
* [2026-01-09, 17:24:00](https://tech.slashdot.org/story/26/01/09/1618243/craigslist-at-30-no-algorithms-no-ads-no-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Craigslist at 30: No Algorithms, No Ads, No Problem](https://tech.slashdot.org/story/26/01/09/1618243/craigslist-at-30-no-algorithms-no-ads-no-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 17:17:28](https://news.ycombinator.com/item?id=46556210) - [Show HN: I made a memory game to teach you to play piano by ear](https://lend-me-your-ears.specr.net)
* [2026-01-09, 17:00:11](https://news.ycombinator.com/item?id=46555963) - [The Vietnam government has banned rooted phones from using any banking app](https://xdaforums.com/t/discussion-the-root-and-mod-hiding-fingerprint-spoofing-keybox-stealing-cat-and-mouse-game.4425939/page-118)
* [2026-01-09, 16:46:48](https://news.ycombinator.com/item?id=46555760) - [Cloudflare CEO on the Italy fines](https://twitter.com/eastdakota/status/2009654937303896492)
* [2026-01-09, 16:45:00](https://tech.slashdot.org/story/26/01/09/162240/ios-26-shows-unusually-slow-adoption-months-after-release?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iOS 26 Shows Unusually Slow Adoption Months After Release](https://tech.slashdot.org/story/26/01/09/162240/ios-26-shows-unusually-slow-adoption-months-after-release?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 16:36:48](https://news.ycombinator.com/item?id=46555615) - [SendGrid isn’t emailing about ICE or BLM – it’s a phishing attack](https://fredbenenson.com/blog/2026/01/09/sendgrid-isnt-emailing-you-about-ice-or-blm-its-a-phishing-attack/)
* [2026-01-09, 16:36:27](https://lobste.rs/s/h8fjkm/making_tools_developers_actually_use) - [Making Tools Developers Actually Use](https://www.youtube.com/watch?v=119qVkHxPkM)
* [2026-01-09, 16:23:44](https://news.ycombinator.com/item?id=46555485) - [Cloudspecs: Cloud Hardware Evolution Through the Looking Glass](http://muratbuffalo.blogspot.com/2026/01/cloudspecs-cloud-hardware-evolution.html)
* [2026-01-09, 16:06:58](https://lobste.rs/s/1j4fbo/answer_set_programming_2019) - [Answer Set Programming (2019)](https://www.cs.utexas.edu/~vl/teaching/378/ASP.pdf)
* [2026-01-09, 16:05:00](https://slashdot.org/story/26/01/09/1545239/amazon-wants-to-know-what-every-corporate-employee-accomplished-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Wants To Know What Every Corporate Employee Accomplished Last Year](https://slashdot.org/story/26/01/09/1545239/amazon-wants-to-know-what-every-corporate-employee-accomplished-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 15:30:00](https://it.slashdot.org/story/26/01/09/1516254/send-to-kindle-from-microsoft-word-is-discontinued?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Send To Kindle from Microsoft Word is Discontinued](https://it.slashdot.org/story/26/01/09/1516254/send-to-kindle-from-microsoft-word-is-discontinued?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 15:29:37](https://news.ycombinator.com/item?id=46554897) - [Amiga Pointer Archive](https://heckmeck.de/pointers/)
* [2026-01-09, 15:21:19](https://lobste.rs/s/6rp1jv/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/6rp1jv/what_are_you_doing_this_weekend)
* [2026-01-09, 15:18:36](https://lobste.rs/s/nx9uwg/which_programming_languages_are_most) - [Which programming languages are most token-efficient?](https://martinalderson.com/posts/which-programming-languages-are-most-token-efficient/)
* [2026-01-09, 15:16:22](https://lobste.rs/s/hmlt2f/handling_secrets_somewhat_securely) - [Handling secrets (somewhat) securely in shells](https://linus.schreibt.jetzt/posts/shell-secrets.html)
* [2026-01-09, 14:59:00](https://slashdot.org/story/26/01/09/1459249/why-care-about-debt-to-gdp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Care About Debt-to-GDP?](https://slashdot.org/story/26/01/09/1459249/why-care-about-debt-to-gdp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 14:57:14](https://lobste.rs/s/e7lpyy/i_cannot_ssh_into_my_server_anymore_s_fine) - [I Cannot SSH Into My Server Anymore (And That’s Fine)](https://soap.coffee/~lthms/posts/i-cannot-ssh-into-my-server-anymore.html)
* [2026-01-09, 14:50:48](https://news.ycombinator.com/item?id=46554462) - [London–Calcutta bus service](https://en.wikipedia.org/wiki/London%E2%80%93Calcutta_bus_service)
* [2026-01-09, 14:47:06](https://lobste.rs/s/jo3dnh/str) - [&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;str](https://ohadravid.github.io/posts/2026-01-09-fourteen-ref/)
* [2026-01-09, 14:43:39](https://lobste.rs/s/1eqclp/slidge_im_gateways_from_xmpp_other) - [slidge.im - Gateways from XMPP to Other Networks](https://slidge.im/)
* [2026-01-09, 14:21:33](https://lobste.rs/s/yvgsct/automatic_tls_certificates_for_common) - [Automatic TLS Certificates for Common Lisp with pure-tls/acme](https://atgreen.github.io/repl-yell/posts/pure-tls-acme/)
* [2026-01-09, 14:07:00](https://news.slashdot.org/story/26/01/09/148202/record-ocean-heat-is-intensifying-climate-disasters-data-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Record Ocean Heat is Intensifying Climate Disasters, Data Shows](https://news.slashdot.org/story/26/01/09/148202/record-ocean-heat-is-intensifying-climate-disasters-data-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 13:32:39](https://lobste.rs/s/3o5wil/celeste_towerfall_physics) - [Celeste &amp; TowerFall Physics](https://www.maddymakesgames.com/articles/celeste_and_towerfall_physics/index.html)
* [2026-01-09, 12:53:00](https://soylentnews.org/article.pl?sid=26/01/07/1246247&amp;from=rss) - [OpenAI Bets Big on Audio as Silicon Valley Declares War on Screens](https://soylentnews.org/article.pl?sid=26/01/07/1246247&amp;from=rss)
* [2026-01-09, 11:47:51](https://lobste.rs/s/sew4le/shell_scripts) - [Shell scripts](https://f5n.org/blog/2026/shell-scripts/)
* [2026-01-09, 10:00:00](https://science.slashdot.org/story/26/01/09/0319216/fusion-physicists-found-a-way-around-a-long-standing-density-limit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fusion Physicists Found a Way Around a Long-Standing Density Limit](https://science.slashdot.org/story/26/01/09/0319216/fusion-physicists-found-a-way-around-a-long-standing-density-limit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 09:51:19](https://lobste.rs/s/zfrf8k/european_commission_issues_call_for) - [European Commission issues call for evidence on open source](https://lwn.net/Articles/1053107/)
* [2026-01-09, 09:30:10](https://lobste.rs/s/omlcbk/magicall_end_end_encrypted) - [Magicall: end-to-end encrypted videoconferencing in the browser, now in alpha](https://magicall.online)
* [2026-01-09, 08:07:00](https://soylentnews.org/article.pl?sid=26/01/07/1228222&amp;from=rss) - [While the World Cools on EVs, Norway Pushes to 96% Electric Sales](https://soylentnews.org/article.pl?sid=26/01/07/1228222&amp;from=rss)
* [2026-01-09, 07:26:51](https://lobste.rs/s/8l9ysn/jxl_rs_merged_into_chromium) - [jxl-rs merged into Chromium](https://github.com/chromium/chromium/commit/3badff27281339878293e935a5e0fbb41da553bf)
* [2026-01-09, 07:06:41](https://news.ycombinator.com/item?id=46550895) - [Mathematics for Computer Science (2018) [pdf]](https://courses.csail.mit.edu/6.042/spring18/mcs.pdf)
* [2026-01-09, 07:00:00](https://science.slashdot.org/story/26/01/09/0312218/ultimate-camouflage-tech-mimics-octopus-in-scientific-first?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ultimate Camouflage Tech Mimics Octopus In Scientific First](https://science.slashdot.org/story/26/01/09/0312218/ultimate-camouflage-tech-mimics-octopus-in-scientific-first?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 05:44:58](https://news.ycombinator.com/item?id=46550453) - [Agonist-Antagonist Myoneural Interface](https://www.media.mit.edu/projects/agonist-antagonist-myoneural-interface-ami/overview/)
* [2026-01-09, 03:30:00](https://science.slashdot.org/story/26/01/08/2249216/some-super-smart-dogs-can-learn-new-words-just-by-eavesdropping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Super-Smart Dogs Can Learn New Words Just By Eavesdropping](https://science.slashdot.org/story/26/01/08/2249216/some-super-smart-dogs-can-learn-new-words-just-by-eavesdropping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 03:24:00](https://soylentnews.org/article.pl?sid=26/01/06/1126220&amp;from=rss) - [Scientists Create a “Periodic Table” for Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/01/06/1126220&amp;from=rss)
* [2026-01-09, 02:13:01](https://news.ycombinator.com/item?id=46549333) - [Show HN: Various shape regularization algorithms](https://github.com/nickponline/shreg)
* [2026-01-09, 01:59:32](https://news.ycombinator.com/item?id=46549231) - [Show HN: A website that auctions itself daily](https://www.thedailyauction.com/)
* [2026-01-08, 23:24:30](https://news.ycombinator.com/item?id=46547962) - [Scientists discover oldest poison, on 60k-year-old arrows](https://www.nytimes.com/2026/01/07/science/poison-arrows-south-africa.html)
* [2026-01-08, 22:38:00](https://soylentnews.org/article.pl?sid=26/01/06/1123219&amp;from=rss) - [Ford Wants to Turn Your Sun Visor Into a Head-Up Display](https://soylentnews.org/article.pl?sid=26/01/06/1123219&amp;from=rss)
* [2026-01-08, 22:22:06](https://lobste.rs/s/a2clkv/data_model_for_git) - [A data model for Git](https://jvns.ca/blog/2026/01/08/a-data-model-for-git/)
* [2026-01-08, 20:41:30](https://lobste.rs/s/fou2tb/jujutsu_v0_37_0_released) - [jujutsu v0.37.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.37.0)
* [2026-01-08, 19:54:26](https://news.ycombinator.com/item?id=46545620) - [How to code Claude Code in 200 lines of code](https://www.mihaileric.com/The-Emperor-Has-No-Clothes/)
* [2026-01-08, 19:36:51](https://lobste.rs/s/72fowr/dell_seems_be_first_realise_we_don_t) - [Dell seems to be the first to realise we don&apos;t actually care about AI PCs](https://www.pcgamer.com/hardware/dells-ces-2026-chat-was-the-most-pleasingly-un-ai-briefing-ive-had-in-maybe-5-years/)
* [2026-01-08, 19:05:23](https://lobste.rs/s/pza074/how_terminals_work) - [How Terminals Work](https://how-terminals-work.vercel.app/)
* [2026-01-08, 17:53:00](https://soylentnews.org/article.pl?sid=26/01/06/1120251&amp;from=rss) - [The French University Where Spies Go for Training](https://soylentnews.org/article.pl?sid=26/01/06/1120251&amp;from=rss)
* [2026-01-08, 14:54:42](https://lobste.rs/s/bufcbw/how_i_program_awk) - [How I program in AWK](https://maximullaris.com/program-in-awk.html)
* [2026-01-08, 14:39:47](https://lobste.rs/s/g3boya/dialogue_between_developer_kid) - [Dialogue Between a Developer and a Kid](https://riggraz.dev/dialogue-developer.html)
* [2026-01-08, 13:10:03](https://lobste.rs/s/elj9pq/what_happened_webassembly) - [What Happened To WebAssembly](https://emnudge.dev/blog/what-happened-to-webassembly/)
* [2026-01-08, 13:08:00](https://soylentnews.org/article.pl?sid=26/01/06/1049201&amp;from=rss) - [A Post-American, Enshittification-Resistant Internet](https://soylentnews.org/article.pl?sid=26/01/06/1049201&amp;from=rss)
* [2026-01-08, 08:19:00](https://soylentnews.org/article.pl?sid=26/01/06/1042201&amp;from=rss) - [The Search for Gravitons: Modifying Gravity Waves With Light](https://soylentnews.org/article.pl?sid=26/01/06/1042201&amp;from=rss)
* [2026-01-08, 06:41:44](https://lobste.rs/s/dzcugr/tailwind_labs_loses_80_revenue_75) - [Tailwind Labs loses 80% of revenue and 75% of engineering due to AI](https://adams-morning-walk.transistor.fm/episodes/we-had-six-months-left)
* [2026-01-08, 03:36:00](https://soylentnews.org/article.pl?sid=26/01/06/0751234&amp;from=rss) - [How Do I Make Clear Ice at Home? a Food Scientist Shares Easy Tips](https://soylentnews.org/article.pl?sid=26/01/06/0751234&amp;from=rss)
* [2026-01-07, 22:47:00](https://soylentnews.org/article.pl?sid=26/01/06/0744236&amp;from=rss) - [Scientists Say Ozempic Could Change How You Feel After Drinking Alcohol](https://soylentnews.org/article.pl?sid=26/01/06/0744236&amp;from=rss)
* [2026-01-07, 18:00:00](https://soylentnews.org/article.pl?sid=26/01/06/0740234&amp;from=rss) - [China Leads Research in 90% of Crucial Technologies](https://soylentnews.org/article.pl?sid=26/01/06/0740234&amp;from=rss)
* [2026-01-07, 13:17:00](https://soylentnews.org/article.pl?sid=26/01/06/0727248&amp;from=rss) - [Stingless Bees from the Amazon Granted Legal Rights in World First](https://soylentnews.org/article.pl?sid=26/01/06/0727248&amp;from=rss)
* [2026-01-07, 09:57:33](https://news.ycombinator.com/item?id=46524519) - [CI-Hush](https://gitlab.com/jjg/ci-hush)
* [2026-01-07, 08:31:00](https://soylentnews.org/article.pl?sid=26/01/06/0722246&amp;from=rss) - [Lisuan&apos;s G100 Series Has Reportedly Begun Shipping Out to Customers in First Batch of Deliveries](https://soylentnews.org/article.pl?sid=26/01/06/0722246&amp;from=rss)
* [2026-01-07, 03:47:00](https://soylentnews.org/article.pl?sid=26/01/05/1230257&amp;from=rss) - [China Mandates 50% Domestic Equipment Rule for Chipmakers](https://soylentnews.org/article.pl?sid=26/01/05/1230257&amp;from=rss)
* [2026-01-06, 23:01:00](https://soylentnews.org/article.pl?sid=26/01/05/1222243&amp;from=rss) - [Blu-Ray Hits 20 Years Old, and It Isn&apos;t Dead Yet](https://soylentnews.org/article.pl?sid=26/01/05/1222243&amp;from=rss)
* [2026-01-06, 18:19:00](https://soylentnews.org/article.pl?sid=26/01/03/0139235&amp;from=rss) - [Strengthening Asphalt Roads With a Unique Green Ingredient: Algae](https://soylentnews.org/article.pl?sid=26/01/03/0139235&amp;from=rss)
* [2026-01-06, 16:36:50](https://news.ycombinator.com/item?id=46514559) - [Show HN: Repogen – a static site generator for package repositories](https://github.com/ralt/repogen)
* [2026-01-06, 13:37:00](https://soylentnews.org/article.pl?sid=26/01/03/0137246&amp;from=rss) - [Venus Cloud Research Highlights Value of Combining Light and Polarization Measurements](https://soylentnews.org/article.pl?sid=26/01/03/0137246&amp;from=rss)
* [2026-01-06, 13:23:39](https://news.ycombinator.com/item?id=46511903) - [Show HN: Similarity = cosine(your_GitHub_stars, Karpathy) Client-side](https://puzer.github.io/github_recommender/)
* [2026-01-06, 08:44:00](https://soylentnews.org/article.pl?sid=26/01/03/0135207&amp;from=rss) - [How Talking Slows Eye Movements Behind the Wheel](https://soylentnews.org/article.pl?sid=26/01/03/0135207&amp;from=rss)
* [2026-01-06, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss) - [Mystery Solved: Scientists Discover Why Colorectal Cancer Defies Immune System Rules](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss)
* [2026-01-05, 23:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1627244&amp;from=rss) - [The Worst CPUs Ever Made](https://soylentnews.org/article.pl?sid=26/01/02/1627244&amp;from=rss)
* [2026-01-05, 18:37:00](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss) - [Parkinson&apos;s is the Canary in the Coal Mine Warning Us That Our Environment is Sick](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss)
* [2026-01-05, 13:53:00](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss) - [U.S. Allows TSMC to Import Chipmaking Equipment to its China Fabs](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss)
* [2026-01-05, 09:03:00](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss) - [How Do We Hold Companies Accountable for \&quot;Do as I Say, Not as I Do\&quot; Security Practices?](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss)
* [2026-01-05, 04:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss) - [In 1962, a Geologist Went Into a Cave. 2 Months Later, He&apos;d Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss)
