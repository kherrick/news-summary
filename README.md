# [News Summary](https://kherrick.github.io/news-summary/)

## Advances in Technology

* [Your Phone's Next Speed Boost May Come From Magnetic Chips](https://tech.slashdot.org/story/26/04/22/2314218/your-phones-next-speed-boost-may-come-from-magnetic-chips?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers are exploring the potential of magnetic chips to revolutionize phone processing power.

* [Writing a C Compiler, in Zig (2025)](https://ar-ms.me/thoughts/c-compiler-1-zig/) - A fascinating exploration of creating a full C compiler from scratch using the Zig programming language.

* [Gecko: a fast GLR parser with automatic syntax error recovery](https://vnmakarov.github.io/parsing/compilers/c/open-source/2026/04/22/gecko-glr.html) - A deep dive into Gecko, a new GLR parser that features automatic syntax error recovery.

* [raylib v6.0](https://github.com/raysan5/raylib/releases/tag/6.0) - An update on the newest release of the open-source raylib library for game development, version 6.0.

## Artificial Intelligence Developments

* [OpenAI Says Its New GPT-5.5 Model Is More Efficient and Better At Coding](https://slashdot.org/story/26/04/23/1931220/openai-says-its-new-gpt-55-model-is-more-efficient-and-better-at-coding?utm_source=rss1.0mainlinkanon&utm_medium=feed) - OpenAI introduces GPT-5.5 model, claiming significant improvements in efficiency and coding capabilities.

* [GPT-5.5: Mythos-Like Hacking, Open to All](https://xbow.com/blog/mythos-like-hacking-open-to-all) - A detailed look into GPT-5.5, with a focus on its innovative hacking capabilities and accessibility.

* [Scientists Load Quantum Computer With First Complete Genome to Crack Biology's 'Impossible' Puzzle](https://soylentnews.org/article.pl?sid=26/04/23/1112242&from=rss) - Quantum computing takes a leap forward with a complete genome successfully loaded to tackle complex biological puzzles.

## Significant Corporate Updates

* [Microsoft Plans First-Ever Voluntary Employee Buyout](https://slashdot.org/story/26/04/23/1628235/microsoft-plans-first-ever-voluntary-employee-buyout?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft unveils plans for a voluntary employee buyout, marking a significant shift in corporate policy.

* [Meta Is Laying Off 10% of Its Workforce](https://meta.slashdot.org/story/26/04/23/1917223/meta-is-laying-off-10-of-its-workforce?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Meta announces a major layoff, impacting 10% of its employees in a bid to streamline its operations.

* [Intel Lands Tesla As First Major Customer For 14A Chip Technology](https://hardware.slashdot.org/story/26/04/23/0442209/intel-lands-tesla-as-first-major-customer-for-14a-chip-technology?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Intel secures Tesla as the first major client for its cutting-edge 14A chip technology.

## Science and Discoveries

* [Astronomers find the edge of the Milky Way](https://skyandtelescope.org/astronomy-news/astronomers-find-the-edge-of-the-milky-way/) - Groundbreaking discovery by astronomers as they define the outer limits of our galaxy for the first time.

* [Girl, 10, finds rare Mexican axolotl under Welsh bridge](https://www.bbc.com/news/articles/c9d4zgnqpqeo) - A young girl discovers a rare Mexican axolotl in an unexpected location under a Welsh bridge.

## Security and Cybersecurity

* [France Confirms Data Breach At Government Agency That Manages Citizens' IDs](https://it.slashdot.org/story/26/04/23/1646252/france-confirms-data-breach-at-government-agency-that-manages-citizens-ids?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A data breach at a French government agency compromises citizens' sensitive information.

* [Bitwarden CLI Compromised in Ongoing Checkmarx Supply Chain Campaign](https://socket.dev/blog/bitwarden-cli-compromised) - Security researchers expose a supply chain vulnerability affecting Bitwarden CLI.

* [New York Sues Coinbase and Gemini, Seeking To Halt Unlicensed Prediction Market Businesses](https://yro.slashdot.org/story/26/04/23/1611254/new-york-sues-coinbase-and-gemini-seeking-to-halt-unlicensed-prediction-market-businesses?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New York takes legal action against Coinbase and Gemini over alleged unlicensed prediction markets.

## Cultural Insights and Ethical Issues

* [How the Tech World Turned Evil](https://newrepublic.com/article/208876/tech-world-evil-musk-bezos-thiel) - An article exploring the controversial transformation of the tech industry.

* [If America's so rich, how'd it get so sad?](https://www.derekthompson.org/p/if-americas-so-rich-howd-it-get-so) - Thought-provoking discourse on wealth disparity and its impact on American society.

* [Palantir employees are starting to wonder if they're the bad guys](https://www.wired.com/story/palantir-employees-are-starting-to-wonder-if-theyre-the-bad-guys/) - Insights into the ethical quandaries faced by employees of controversial tech company Palantir.

## Historical and Environmental Discoveries

* [Total Solar Eclipse Led to Seismic Quiet for Cities Within its Path](https://soylentnews.org/article.pl?sid=26/04/20/0228241&from=rss) - Researchers study the quieting effect of a total solar eclipse on urban environments.

* [A Renaissance gambling dispute spawned probability theory](https://www.scientificamerican.com/article/how-a-renaissance-gambling-dispute-spawned-probability-theory/) - An interesting narrative on how modern probability theory originated from a historical gambling conflict.

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

* [2026-04-23, 21:47:13](https://lobste.rs/s/wx9ozr/using_perfetto_zjit) - [Using Perfetto in ZJIT](https://railsatscale.com/2026-03-27-using-perfetto-in-zjit/)
* [2026-04-23, 21:21:00](https://soylentnews.org/article.pl?sid=26/04/23/1112242&amp;from=rss) - [Scientists Load Quantum Computer With First Complete Genome to Crack Biology&apos;s &apos;Impossible&apos; Puzzle](https://soylentnews.org/article.pl?sid=26/04/23/1112242&amp;from=rss)
* [2026-04-23, 21:00:00](https://slashdot.org/story/26/04/23/1931220/openai-says-its-new-gpt-55-model-is-more-efficient-and-better-at-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Says Its New GPT-5.5 Model Is More Efficient and Better At Coding](https://slashdot.org/story/26/04/23/1931220/openai-says-its-new-gpt-55-model-is-more-efficient-and-better-at-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 20:58:32](https://lobste.rs/s/9csbvp/configuring_firefox) - [Configuring Firefox](https://sciops.net/information/technology/firefox)
* [2026-04-23, 20:48:55](https://news.ycombinator.com/item?id=47881724) - [How the Tech World Turned Evil](https://newrepublic.com/article/208876/tech-world-evil-musk-bezos-thiel)
* [2026-04-23, 20:36:50](https://lobste.rs/s/eiwtub/raylib_v6_0) - [raylib v6.0](https://github.com/raysan5/raylib/releases/tag/6.0)
* [2026-04-23, 20:14:29](https://news.ycombinator.com/item?id=47881198) - [Using the internet like it&apos;s 1999](https://joshblais.com/blog/using-the-internet-like-its-1999/)
* [2026-04-23, 20:00:00](https://meta.slashdot.org/story/26/04/23/1917223/meta-is-laying-off-10-of-its-workforce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Laying Off 10% of Its Workforce](https://meta.slashdot.org/story/26/04/23/1917223/meta-is-laying-off-10-of-its-workforce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 19:26:51](https://lobste.rs/s/2mpjlh/ubuntu_26_04_lts_release) - [Ubuntu 26.04 LTS Release](https://documentation.ubuntu.com/release-notes/26.04/)
* [2026-04-23, 19:09:40](https://news.ycombinator.com/item?id=47880189) - [Girl, 10, finds rare Mexican axolotl under Welsh bridge](https://www.bbc.com/news/articles/c9d4zgnqpqeo)
* [2026-04-23, 19:00:00](https://it.slashdot.org/story/26/04/23/1646252/france-confirms-data-breach-at-government-agency-that-manages-citizens-ids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France Confirms Data Breach At Government Agency That Manages Citizens&apos; IDs](https://it.slashdot.org/story/26/04/23/1646252/france-confirms-data-breach-at-government-agency-that-manages-citizens-ids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 18:59:50](https://lobste.rs/s/ney8qz/http_security_headers_for_python_web) - [HTTP security headers for Python web applications](https://github.com/TypeError/secure)
* [2026-04-23, 18:55:32](https://news.ycombinator.com/item?id=47879986) - [Meta to cut 10% of jobs](https://techcrunch.com/2026/04/23/meta-job-cuts-10-percent-8000-employees/)
* [2026-04-23, 18:16:55](https://news.ycombinator.com/item?id=47879330) - [GPT-5.5: Mythos-Like Hacking, Open to All](https://xbow.com/blog/mythos-like-hacking-open-to-all)
* [2026-04-23, 18:11:29](https://news.ycombinator.com/item?id=47879239) - [Astronomers find the edge of the Milky Way](https://skyandtelescope.org/astronomy-news/astronomers-find-the-edge-of-the-milky-way/)
* [2026-04-23, 18:01:39](https://news.ycombinator.com/item?id=47879092) - [GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
* [2026-04-23, 18:00:00](https://apple.slashdot.org/story/26/04/23/1642215/tim-cook-calls-apple-maps-launch-his-first-really-big-mistake-as-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tim Cook Calls Apple Maps Launch His &apos;First Really Big Mistake&apos; as CEO](https://apple.slashdot.org/story/26/04/23/1642215/tim-cook-calls-apple-maps-launch-his-first-really-big-mistake-as-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 17:48:38](https://news.ycombinator.com/item?id=47878905) - [An update on recent Claude Code quality reports](https://www.anthropic.com/engineering/april-23-postmortem)
* [2026-04-23, 17:30:05](https://news.ycombinator.com/item?id=47878633) - [Palantir employees are starting to wonder if they&apos;re the bad guys](https://www.wired.com/story/palantir-employees-are-starting-to-wonder-if-theyre-the-bad-guys/)
* [2026-04-23, 17:20:42](https://lobste.rs/s/9p8j3s/security_issues_found_within_rust) - [Security issues found within rust-coreutils](https://discourse.ubuntu.com/t/an-update-on-rust-coreutils/80773)
* [2026-04-23, 17:00:00](https://slashdot.org/story/26/04/23/1628235/microsoft-plans-first-ever-voluntary-employee-buyout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Plans First-Ever Voluntary Employee Buyout](https://slashdot.org/story/26/04/23/1628235/microsoft-plans-first-ever-voluntary-employee-buyout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 16:55:13](https://news.ycombinator.com/item?id=47878117) - [MeshCore development team splits over trademark dispute and AI-generated code](https://blog.meshcore.io/2026/04/23/the-split)
* [2026-04-23, 16:34:00](https://soylentnews.org/article.pl?sid=26/04/22/0215210&amp;from=rss) - [Europe&apos;s EV Sales Jump 51% as Iran War Sends Gasoline Prices Soaring](https://soylentnews.org/article.pl?sid=26/04/22/0215210&amp;from=rss)
* [2026-04-23, 16:27:07](https://news.ycombinator.com/item?id=47877715) - [My phone replaced a brass plug](https://drobinin.com/posts/my-phone-replaced-a-brass-plug/)
* [2026-04-23, 16:23:43](https://lobste.rs/s/nlaxri/serving_for_you_feed) - [Serving the For You Feed](https://atproto.com/blog/serving-the-for-you-feed)
* [2026-04-23, 16:23:35](https://lobste.rs/s/nepijn/everyone_wants_servers_nobody_wants) - [Everyone Wants Servers And Nobody Wants Servers](https://connectedplaces.online/reports/fr160-everyone-wants-servers-and-nobody-wants-servers/)
* [2026-04-23, 16:21:55](https://news.ycombinator.com/item?id=47877644) - [Incident with multple GitHub services](https://www.githubstatus.com/incidents/myrbk7jvvs6p)
* [2026-04-23, 16:15:00](https://yro.slashdot.org/story/26/04/23/1611254/new-york-sues-coinbase-and-gemini-seeking-to-halt-unlicensed-prediction-market-businesses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New York Sues Coinbase and Gemini, Seeking To Halt Unlicensed Prediction Market Businesses](https://yro.slashdot.org/story/26/04/23/1611254/new-york-sues-coinbase-and-gemini-seeking-to-halt-unlicensed-prediction-market-businesses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 16:13:36](https://lobste.rs/s/izqocw/meshcore_io_why_split) - [Meshcore.io - Why The Split?](https://blog.meshcore.io/2026/04/23/the-split)
* [2026-04-23, 16:05:30](https://news.ycombinator.com/item?id=47877429) - [If America&apos;s so rich, how&apos;d it get so sad?](https://www.derekthompson.org/p/if-americas-so-rich-howd-it-get-so)
* [2026-04-23, 15:59:55](https://news.ycombinator.com/item?id=47877366) - [French government agency confirms breach as hacker offers to sell data](https://www.bleepingcomputer.com/news/security/french-govt-agency-confirms-breach-as-hacker-offers-to-sell-data/)
* [2026-04-23, 15:26:22](https://lobste.rs/s/x79usb/bitwarden_cli_compromised_ongoing) - [Bitwarden CLI Compromised in Ongoing Checkmarx Supply Chain](https://socket.dev/blog/bitwarden-cli-compromised)
* [2026-04-23, 15:00:00](https://hardware.slashdot.org/story/26/04/23/0442209/intel-lands-tesla-as-first-major-customer-for-14a-chip-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Lands Tesla As First Major Customer For 14A Chip Technology](https://hardware.slashdot.org/story/26/04/23/0442209/intel-lands-tesla-as-first-major-customer-for-14a-chip-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 14:17:08](https://news.ycombinator.com/item?id=47876043) - [Bitwarden CLI compromised in ongoing Checkmarx supply chain campaign](https://socket.dev/blog/bitwarden-cli-compromised)
* [2026-04-23, 13:58:03](https://news.ycombinator.com/item?id=47875843) - [UK Biobank health data keeps ending up on GitHub](https://biobank.rocher.lc)
* [2026-04-23, 12:37:18](https://news.ycombinator.com/item?id=47875025) - [I spent years trying to make CSS states predictable](https://tenphi.me/blog/why-i-spent-years-trying-to-make-css-states-predictable/)
* [2026-04-23, 12:02:44](https://news.ycombinator.com/item?id=47874734) - [Jiga (YC W21) Is Hiring](https://jiga.io/about-us/)
* [2026-04-23, 11:57:45](https://lobste.rs/s/3l5gw0/email_could_have_been_x_400_times_better) - [Email could have been X.400 times better](https://buttondown.com/blog/x400-vs-smtp-email)
* [2026-04-23, 11:53:11](https://news.ycombinator.com/item?id=47874647) - [Show HN: Honker – Postgres NOTIFY/LISTEN Semantics for SQLite](https://github.com/russellromney/honker)
* [2026-04-23, 11:50:00](https://soylentnews.org/article.pl?sid=26/04/22/023218&amp;from=rss) - [Bluetooth Tracker Hidden in a Postcard and Mailed to a Warship Exposed its Location](https://soylentnews.org/article.pl?sid=26/04/22/023218&amp;from=rss)
* [2026-04-23, 11:35:57](https://lobste.rs/s/tzws72/single_pass_palette_refinement_ordered) - [Single-pass palette refinement and ordered dithering](https://30fps.net/pages/bayer-order-online-kmeans/)
* [2026-04-23, 11:00:00](https://news.slashdot.org/story/26/04/23/0432254/53-nations-gather-to-plan-a-fossil-fuel-phaseout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [53 Nations Gather To Plan a Fossil Fuel Phaseout](https://news.slashdot.org/story/26/04/23/0432254/53-nations-gather-to-plan-a-fossil-fuel-phaseout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 10:46:49](https://lobste.rs/s/vr4rsc/who_even_uses_jemalloc_2026_anyway_many) - [Who even uses jemalloc in 2026 anyway? (many major projects)](https://theconsensus.dev/p/2026/04/16/who-even-uses-jemalloc-anyway.html)
* [2026-04-23, 09:20:47](https://news.ycombinator.com/item?id=47873694) - [Writing a C Compiler, in Zig (2025)](https://ar-ms.me/thoughts/c-compiler-1-zig/)
* [2026-04-23, 08:42:44](https://lobste.rs/s/yghhn6/i_am_building_cloud) - [I am building a cloud](https://crawshaw.io/blog/building-a-cloud)
* [2026-04-23, 08:22:39](https://lobste.rs/s/l4eo1q/linux_desktop_x86_64_assembly) - [A Linux desktop in x86_64 Assembly](https://isene.org/2026/04/MyTools.html)
* [2026-04-23, 07:07:00](https://soylentnews.org/article.pl?sid=26/04/21/2358226&amp;from=rss) - [The NAND Gate of Continuous Math](https://soylentnews.org/article.pl?sid=26/04/21/2358226&amp;from=rss)
* [2026-04-23, 07:00:00](https://tech.slashdot.org/story/26/04/22/2314218/your-phones-next-speed-boost-may-come-from-magnetic-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Your Phone&apos;s Next Speed Boost May Come From Magnetic Chips](https://tech.slashdot.org/story/26/04/22/2314218/your-phones-next-speed-boost-may-come-from-magnetic-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 06:18:22](https://lobste.rs/s/chsbgc/gecko_fast_glr_parser_with_automatic) - [Gecko: a fast GLR parser with automatic syntax error recovery](https://vnmakarov.github.io/parsing/compilers/c/open-source/2026/04/22/gecko-glr.html)
* [2026-04-23, 04:44:19](https://news.ycombinator.com/item?id=47872324) - [I am building a cloud](https://crawshaw.io/blog/building-a-cloud)
* [2026-04-23, 04:04:05](https://lobste.rs/s/t04nvc/how_heck_does_shazam_work) - [How The Heck Does Shazam Work?](https://perthirtysix.com/how-the-heck-does-shazam-work)
* [2026-04-23, 03:30:00](https://news.slashdot.org/story/26/04/22/2345209/nearly-half-of-us-children-are-breathing-dangerous-levels-of-air-pollution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nearly Half of US Children Are Breathing Dangerous Levels of Air Pollution](https://news.slashdot.org/story/26/04/22/2345209/nearly-half-of-us-children-are-breathing-dangerous-levels-of-air-pollution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 03:03:53](https://lobste.rs/s/qvfr0h/modern_rendering_culling_techniques) - [Modern rendering culling techniques](https://krupitskas.com/posts/modern_culling_techniques/)
* [2026-04-23, 02:53:48](https://lobste.rs/s/5jkwmc/borrow_checking_without_type_checking) - [Borrow-checking without type-checking](https://www.scattered-thoughts.net/writing/borrow-checking-without-type-checking/)
* [2026-04-23, 02:22:00](https://soylentnews.org/article.pl?sid=26/04/21/2355256&amp;from=rss) - [WebinarTV’s Rampant Scraping of Online Meetings ](https://soylentnews.org/article.pl?sid=26/04/21/2355256&amp;from=rss)
* [2026-04-23, 01:59:08](https://news.ycombinator.com/item?id=47871519) - [Arch Linux Now Has a Bit-for-Bit Reproducible Docker Image](https://antiz.fr/blog/archlinux-now-has-a-reproducible-docker-image/)
* [2026-04-22, 23:00:00](https://yro.slashdot.org/story/26/04/22/2146235/billionaire-backer-sues-trump-familys-crypto-firm-over-alleged-extortion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Billionaire Backer Sues Trump Family&apos;s Crypto Firm Over Alleged Extortion](https://yro.slashdot.org/story/26/04/22/2146235/billionaire-backer-sues-trump-familys-crypto-firm-over-alleged-extortion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 22:00:00](https://hardware.slashdot.org/story/26/04/22/2138211/ping-pong-robot-makes-history-by-beating-top-level-human-players?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ping-Pong Robot Makes History By Beating Top-Level Human Players](https://hardware.slashdot.org/story/26/04/22/2138211/ping-pong-robot-makes-history-by-beating-top-level-human-players?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 21:39:00](https://soylentnews.org/article.pl?sid=26/04/21/2350253&amp;from=rss) - [How Museums Can Use Biomolecular Archaeology to Bring Ancient Scents to Life](https://soylentnews.org/article.pl?sid=26/04/21/2350253&amp;from=rss)
* [2026-04-22, 21:00:00](https://it.slashdot.org/story/26/04/22/2038241/anthropics-mythos-model-is-being-accessed-by-unauthorized-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s Mythos Model Is Being Accessed by Unauthorized Users](https://it.slashdot.org/story/26/04/22/2038241/anthropics-mythos-model-is-being-accessed-by-unauthorized-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 20:56:45](https://lobste.rs/s/ivj2o8/nondescript_simple_embedded) - [nondescript: a simple embedded programming language](https://github.com/deadpixi/nondescript)
* [2026-04-22, 20:27:31](https://news.ycombinator.com/item?id=47868867) - [Apple fixes bug that cops used to extract deleted chat messages from iPhones](https://techcrunch.com/2026/04/22/apple-fixes-bug-that-cops-used-to-extract-deleted-chat-messages-from-iphones/)
* [2026-04-22, 20:00:00](https://news.slashdot.org/story/26/04/22/1934234/the-missing-scientist-story-is-unbelievably-dumb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The &apos;Missing-Scientist&apos; Story Is Unbelievably Dumb](https://news.slashdot.org/story/26/04/22/1934234/the-missing-scientist-story-is-unbelievably-dumb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 19:23:18](https://lobste.rs/s/fbwdco/we_found_stable_firefox_identifier) - [We Found a Stable Firefox Identifier Linking All Your Private Tor Identities](https://fingerprint.com/blog/firefox-tor-indexeddb-privacy-vulnerability/)
* [2026-04-22, 19:04:20](https://lobste.rs/s/wps0js/arch_linux_now_has_bit_for_bit) - [Arch Linux now has a bit-for-bit reproducible Docker image](https://antiz.fr/blog/archlinux-now-has-a-reproducible-docker-image/)
* [2026-04-22, 19:00:00](https://slashdot.org/story/26/04/22/195209/gates-foundation-to-cut-20-of-staff-review-epstein-ties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gates Foundation To Cut 20% of Staff, Review Epstein Ties](https://slashdot.org/story/26/04/22/195209/gates-foundation-to-cut-20-of-staff-review-epstein-ties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 18:39:32](https://lobste.rs/s/sz3gab/what_are_your_favorite_emacs_packages) - [What are your favorite Emacs packages?](https://lobste.rs/s/sz3gab/what_are_your_favorite_emacs_packages)
* [2026-04-22, 18:26:48](https://lobste.rs/s/guiymx/forge) - [Forge](https://nesbitt.io/2026/03/13/forge.html)
* [2026-04-22, 16:53:00](https://soylentnews.org/article.pl?sid=26/04/20/0241235&amp;from=rss) - [Tech Companies Are Trying to Neuter Colorado&apos;s Landmark Right-to-Repair Law](https://soylentnews.org/article.pl?sid=26/04/20/0241235&amp;from=rss)
* [2026-04-22, 16:29:25](https://news.ycombinator.com/item?id=47865868) - [Alberta startup sells no-tech tractors for half price](https://wheelfront.com/this-alberta-startup-sells-no-tech-tractors-for-half-price/)
* [2026-04-22, 16:25:28](https://news.ycombinator.com/item?id=47865822) - [Show HN: Agent Vault – Open-source credential proxy and vault for agents](https://github.com/Infisical/agent-vault)
* [2026-04-22, 12:09:00](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss) - [Sperm Whales Speak With a Complex Alphabet and Even Have ‘Vowels,’ Study Finds](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss)
* [2026-04-22, 07:27:00](https://soylentnews.org/article.pl?sid=26/04/20/0227209&amp;from=rss) - [The Friction We Forgot](https://soylentnews.org/article.pl?sid=26/04/20/0227209&amp;from=rss)
* [2026-04-22, 06:33:53](https://lobste.rs/s/ipyknz/wsl9x_windows_9x_subsystem_for_linux) - [wsl9x: Windows 9x subsystem for Linux](https://codeberg.org/hails/wsl9x)
* [2026-04-22, 02:34:00](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss) - [Total Solar Eclipse Led to Seismic Quiet for Cities Within its Path](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss)
* [2026-04-21, 21:50:00](https://soylentnews.org/article.pl?sid=26/04/19/1341258&amp;from=rss) - [A Fresh Scar on the Moon: Newly Discovered Crater Reveals Recent Impact](https://soylentnews.org/article.pl?sid=26/04/19/1341258&amp;from=rss)
* [2026-04-21, 21:26:25](https://news.ycombinator.com/item?id=47854710) - [WireGuard for Windows Reaches v1.0](https://lists.zx2c4.com/pipermail/wireguard/2026-April/009580.html)
* [2026-04-21, 17:05:00](https://soylentnews.org/article.pl?sid=26/04/19/1338217&amp;from=rss) - [Europol Launches Operation PowerOFF — Warns 75,000 DDoS Users and Takes Down 53 Domains](https://soylentnews.org/article.pl?sid=26/04/19/1338217&amp;from=rss)
* [2026-04-21, 14:50:40](https://news.ycombinator.com/item?id=47849628) - [Advanced Packaging Limits Come into Focus](https://semiengineering.com/advanced-packaging-limits-come-into-focus/)
* [2026-04-21, 12:59:59](https://news.ycombinator.com/item?id=47848162) - [A Renaissance gambling dispute spawned probability theory](https://www.scientificamerican.com/article/how-a-renaissance-gambling-dispute-spawned-probability-theory/)
* [2026-04-21, 12:19:00](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss) - [Soviet CDs and CD Players Existed, and They Were Strange](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss)
* [2026-04-21, 09:52:09](https://news.ycombinator.com/item?id=47846688) - [Your hex editor should color-code bytes](https://simonomi.dev/blog/color-code-your-bytes/)
* [2026-04-21, 08:52:33](https://news.ycombinator.com/item?id=47846307) - [A programmable watch you can actually wear](https://www.hackster.io/news/a-diy-watch-you-can-actually-wear-8f91c2dac682)
* [2026-04-21, 07:32:00](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss) - [Chinese Carmaker Patents Voice-Controlled &apos;in-Vehicle Toilet&apos;](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss)
* [2026-04-21, 02:47:00](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss) - [In the Face of Rampant AI, is ‘Data Poisoning’ a New Form of Civil Disobedience?](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss)
* [2026-04-20, 22:02:00](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss) - [The Quiet Colossus](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss)
* [2026-04-20, 17:16:00](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss) - [How Much Does Chatbot Bias Influence Users? A Lot, It Turns Out](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss)
* [2026-04-20, 12:29:00](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss) - [Russia Hits European Thermal Power Plant in Attempted ‘Destructive’ Cyberattack](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss)
* [2026-04-20, 07:43:00](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss) - [How Two Motorola Transistors Became the World&apos;s Default NPNs](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss)
* [2026-04-20, 03:01:00](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss) - [10 Math Books That Sharpen Your Thinking](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss)
* [2026-04-19, 22:16:00](https://soylentnews.org/article.pl?sid=26/04/18/2348241&amp;from=rss) - [“TotalRecall Reloaded” Tool Finds a Side Entrance to the Windows 11 Recall Database](https://soylentnews.org/article.pl?sid=26/04/18/2348241&amp;from=rss)
* [2026-04-19, 17:34:00](https://soylentnews.org/article.pl?sid=26/04/18/195238&amp;from=rss) - [Pentagon Reportedly Asks Detroit to Use More Car Factories as Arms Factories](https://soylentnews.org/article.pl?sid=26/04/18/195238&amp;from=rss)
* [2026-04-19, 12:51:00](https://soylentnews.org/article.pl?sid=26/04/18/192211&amp;from=rss) - [The \&quot;Passive Income\&quot; Trap Ate a Generation of Entrepreneurs](https://soylentnews.org/article.pl?sid=26/04/18/192211&amp;from=rss)
* [2026-04-19, 08:03:00](https://soylentnews.org/article.pl?sid=26/04/18/1855201&amp;from=rss) - [Why the Phrase &apos;Super El Niño&apos; Makes Australian Climate Scientists Roll Their Eyes](https://soylentnews.org/article.pl?sid=26/04/18/1855201&amp;from=rss)
* [2026-04-19, 03:14:00](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss) - [Irish Bog Plant Revives Ancient Remedy as a New Weapon Vs Superbugs](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss)
