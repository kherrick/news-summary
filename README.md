# [News Summary](https://kherrick.github.io/news-summary/)

## Environment and Climate

* [As the Arctic's Winter Sea Ice Hits a New Record Low - What Happens Next?](https://news.slashdot.org/story/25/03/29/0435221/as-the-arctics-winter-sea-ice-hits-a-new-record-low---what-happens-next?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Scientists discuss the implications and the potential cascading effects of rapidly declining Arctic winter sea ice.

* [Giant, Fungus-Like Organism May Be Completely Unknown Branch of Life](https://science.slashdot.org/story/25/03/28/238210/giant-fungus-like-organism-may-be-completely-unknown-branch-of-life?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers discovered an unusual organism in the wild that challenges our understanding of life forms.

* [Martian Dust May Pose Health Risk To Humans Exploring Red Planet, Study Finds](https://science.slashdot.org/story/25/03/29/0035216/martian-dust-may-pose-health-risk-to-humans-exploring-red-planet-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A study identifies health risks for astronauts due to Martian dust during exploration missions.

## Technology and Computing

* [New Ubuntu Linux Security Bypasses Require Manual Mitigations](https://it.slashdot.org/story/25/03/29/0555241/new-ubuntu-linux-security-bypasses-require-manual-mitigations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Dangerous Ubuntu vulnerabilities require user intervention to secure affected systems.

* [Building a search engine from scratch, in Rust: part 1](https://jdrouet.github.io/posts/202503170800-search-engine-part-1/) - A developer outlines the process of constructing a search engine using Rust, focusing on part one of the journey.

* ["Moonshots" Initiative to Secure the Future of RISC OS](https://www.riscosopen.org/news/articles/2025/03/28/moonshots-initiative-to-secure-the-future-of-the-os) - A new initiative aims to revitalize and future-proof RISC OS.

* [Language Server for Postgres](https://github.com/supabase-community/postgres-language-server) - The first release of a Postgres language server tailored for developers.

## Space Exploration

* [NASA Adds SpaceX's Starship To Launch Services Program Fleet](https://science.slashdot.org/story/25/03/29/0950235/nasa-adds-spacexs-starship-to-launch-services-program-fleet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NASA officially integrates SpaceX's Starship into its suite of launch vehicles.

* [Record-Breaking Explosion by Black Hole Spotted](https://soylentnews.org/article.pl?sid=25/03/28/1215217&from=rss) - Astronomers detect an unprecedentedly powerful black hole explosion.

## Artificial Intelligence and Machine Learning

* [First Trial of Generative AI Therapy Shows It Might Help With Depression](https://slashdot.org/story/25/03/29/101206/first-trial-of-generative-ai-therapy-shows-it-might-help-with-depression?utm_source=rss1.0mainlinkanon&utm_medium=feed) - AI-based therapy shows promise in reducing symptoms of depression, spurring hope for mental health treatments.

* [On the Biology of a Large Language Model](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) - Researchers explore the internal workings of large language models in a biological context.

* [Open Source Devs Are Fighting AI Crawlers With Cleverness and Vengeance](https://soylentnews.org/article.pl?sid=25/03/28/1210259&from=rss) - Developers employ innovative strategies to counteract AI web crawlers scraping their data.

## Gaming and Creative Development

* [I made a little puzzle game about a rogue chess knight](https://knightride.rakhim.org/) - A new indie puzzle game centers around the unique movement of a chess knight.

* [Real Time Chess – A physical chess board without the concept of turns](https://github.com/misprit7/real-time-chess) - Inventive chess variant eliminates turns and creates a continuous real-time gameplay experience.

* [Paged out issue 06](https://pagedout.institute/download/PagedOut_006.pdf) - A zine on retrocomputing releases its latest issue, packed with geek lore.

## Privacy and Ethics

* [Pixelfed leaks private posts from other Fediverse instances](https://fokus.cool/2025/03/25/pixelfed-vulnerability.html) - A vulnerability in Pixelfed raises concerns over privacy and security across federated social media platforms.

* [Madison Square Garden Bans Fan After Surveillance System IDs Him as Critic of Its CEO](https://yro.slashdot.org/story/25/03/29/0028217/madison-square-garden-bans-fan-after-surveillance-system-ids-him-as-critic-of-its-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Controversy sparks as surveillance misuse leads to a critic's ban from MSG.

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

* [2025-03-29, 15:34:00](https://news.slashdot.org/story/25/03/29/0435221/as-the-arctics-winter-sea-ice-hits-a-new-record-low---what-happens-next?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [As the Arctic's Winter Sea Ice Hits a New Record Low - What Happens Next?](https://news.slashdot.org/story/25/03/29/0435221/as-the-arctics-winter-sea-ice-hits-a-new-record-low---what-happens-next?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 14:50:05](https://lobste.rs/s/dducfq/i_made_little_puzzle_game_about_rogue) - [I made a little puzzle game about a rogue chess knight](https://knightride.rakhim.org/)
* [2025-03-29, 14:40:49](https://lobste.rs/s/6ue8gr/how_become_hacker_step_by_step_guide) - [How To Become A Hacker: A Step-By-Step Guide](https://sebastiancarlos.medium.com/how-to-become-a-hacker-a-step-by-step-guide-94902dc425b0)
* [2025-03-29, 14:34:00](https://it.slashdot.org/story/25/03/29/0555241/new-ubuntu-linux-security-bypasses-require-manual-mitigations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Ubuntu Linux Security Bypasses Require Manual Mitigations](https://it.slashdot.org/story/25/03/29/0555241/new-ubuntu-linux-security-bypasses-require-manual-mitigations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 13:58:59](https://lobste.rs/s/evrduc/where_do_bytes_go) - [where do the bytes go?](https://flak.tedunangst.com/post/where-do-the-bytes-go)
* [2025-03-29, 13:53:31](https://news.ycombinator.com/item?id=43515563) - [Why I'm No Longer Talking to Architects About Microservices](https://blog.container-solutions.com/why-im-no-longer-talking-to-architects-about-microservices)
* [2025-03-29, 13:00:00](https://slashdot.org/story/25/03/29/101206/first-trial-of-generative-ai-therapy-shows-it-might-help-with-depression?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [First Trial of Generative AI Therapy Shows It Might Help With Depression](https://slashdot.org/story/25/03/29/101206/first-trial-of-generative-ai-therapy-shows-it-might-help-with-depression?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 12:33:00](https://soylentnews.org/article.pl?sid=25/03/28/1215217&from=rss) - [Record-Breaking Explosion by Black Hole Spotted](https://soylentnews.org/article.pl?sid=25/03/28/1215217&from=rss)
* [2025-03-29, 12:32:20](https://lobste.rs/s/govrnx/paged_out_issue_06) - [Paged out issue 06](https://pagedout.institute/download/PagedOut_006.pdf)
* [2025-03-29, 12:28:30](https://lobste.rs/s/xs2sdb/item_flow_part_1_new_unified_concept_for) - [Item Flow, Part 1: A new unified concept for layout](https://webkit.org/blog/16587/item-flow-part-1-a-new-unified-concept-for-layout/)
* [2025-03-29, 12:14:48](https://news.ycombinator.com/item?id=43514915) - [Koto Programming Language](https://koto.dev/)
* [2025-03-29, 12:04:55](https://lobste.rs/s/hg1kpm/pixelfed_leaks_private_posts_from_other) - [Pixelfed leaks private posts from other Fediverse instances](https://fokus.cool/2025/03/25/pixelfed-vulnerability.html)
* [2025-03-29, 11:57:10](https://lobste.rs/s/qdhcqx/moonshots_initiative_secure_future_risc) - [\"Moonshots\" Initiative to Secure the Future of RISC OS](https://www.riscosopen.org/news/articles/2025/03/28/moonshots-initiative-to-secure-the-future-of-the-os)
* [2025-03-29, 11:46:05](https://lobste.rs/s/owlocr/on_biology_large_language_model) - [On the Biology of a Large Language Model](https://transformer-circuits.pub/2025/attribution-graphs/biology.html)
* [2025-03-29, 11:41:54](https://news.ycombinator.com/item?id=43514695) - [Real Time Chess – A physical chess board without the concept of turns](https://github.com/misprit7/real-time-chess)
* [2025-03-29, 10:58:44](https://lobste.rs/s/ypuwrw/building_search_engine_from_scratch_rust) - [Building a search engine from scratch, in Rust: part 1](https://jdrouet.github.io/posts/202503170800-search-engine-part-1/)
* [2025-03-29, 10:42:26](https://news.ycombinator.com/item?id=43514383) - [Show HN: Physical Pomodoro Timer with ESP32 and e-paper screen](https://github.com/Rukenshia/pomodoro)
* [2025-03-29, 10:39:01](https://lobste.rs/s/7yz8sf/total_functions_beyond) - [Total functions and beyond](https://ericnormand.substack.com/p/total-functions-and-beyond)
* [2025-03-29, 10:37:23](https://lobste.rs/s/od7zlr/expressing_japanese_grammar_through) - [Expressing Japanese Grammar Through TypeScript Type System](https://github.com/typedgrammar/typed-japanese/blob/main/blog.md)
* [2025-03-29, 10:27:33](https://news.ycombinator.com/item?id=43514308) - [Et Tu, Grammarly?](https://dbushell.com/2025/03/29/et-tu-grammarly/)
* [2025-03-29, 10:23:45](https://lobste.rs/s/fstz1l/language_server_for_postgres) - [A Language Server for Postgres](https://github.com/supabase-community/postgres-language-server)
* [2025-03-29, 10:00:00](https://science.slashdot.org/story/25/03/29/0950235/nasa-adds-spacexs-starship-to-launch-services-program-fleet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA Adds SpaceX's Starship To Launch Services Program Fleet](https://science.slashdot.org/story/25/03/29/0950235/nasa-adds-spacexs-starship-to-launch-services-program-fleet?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 09:32:00](https://news.ycombinator.com/item?id=43514075) - [Caido – A lightweight web security auditing toolkit](https://caido.io/)
* [2025-03-29, 09:13:43](https://news.ycombinator.com/item?id=43513996) - [Postgres Language Server: Initial Release](https://github.com/supabase-community/postgres-language-server)
* [2025-03-29, 07:49:00](https://soylentnews.org/article.pl?sid=25/03/28/1210259&from=rss) - [Open Source Devs Are Fighting AI Crawlers With Cleverness and Vengeance](https://soylentnews.org/article.pl?sid=25/03/28/1210259&from=rss)
* [2025-03-29, 07:00:00](https://science.slashdot.org/story/25/03/29/0035216/martian-dust-may-pose-health-risk-to-humans-exploring-red-planet-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Martian Dust May Pose Health Risk To Humans Exploring Red Planet, Study Finds](https://science.slashdot.org/story/25/03/29/0035216/martian-dust-may-pose-health-risk-to-humans-exploring-red-planet-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 06:58:08](https://news.ycombinator.com/item?id=43513397) - [Mathematical Compact Models of Advanced Transistors [pdf]](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2018/EECS-2018-24.pdf)
* [2025-03-29, 04:09:33](https://lobste.rs/s/11chzy/broligarchs_don_t_speak_for_me) - [The \"broligarchs\" don't speak for me](https://ratfactor.com/tech-nope)
* [2025-03-29, 04:00:00](https://soylentnews.org/article.pl?sid=25/03/28/1139202&from=rss) - [Soylent News Entering a New Phase](https://soylentnews.org/article.pl?sid=25/03/28/1139202&from=rss)
* [2025-03-29, 03:55:02](https://news.ycombinator.com/item?id=43512589) - [Plain – a web framework for building products with Python](https://plainframework.com/)
* [2025-03-29, 03:32:00](https://lobste.rs/s/qpymbd/openwrt_two_approval) - [OpenWrt Two Approval](https://openwrt.org/voting/2025-02-12-openwrt-two)
* [2025-03-29, 03:30:00](https://yro.slashdot.org/story/25/03/29/0028217/madison-square-garden-bans-fan-after-surveillance-system-ids-him-as-critic-of-its-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Madison Square Garden Bans Fan After Surveillance System IDs Him as Critic of Its CEO](https://yro.slashdot.org/story/25/03/29/0028217/madison-square-garden-bans-fan-after-surveillance-system-ids-him-as-critic-of-its-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 03:15:03](https://lobste.rs/s/y7jhdy/condition_system_for_fennel_language_lua) - [Condition system for Fennel language and Lua runtime](https://andreyor.st/posts/2021-08-08-condition-system-for-fennel-language-and-lua-runtime/)
* [2025-03-29, 03:00:00](https://soylentnews.org/article.pl?sid=25/03/28/122201&from=rss) - [Security Vulnerability Fixed in Firefox 136.0.4, Firefox ESR 128.8.1, Firefox ESR 115.21.1](https://soylentnews.org/article.pl?sid=25/03/28/122201&from=rss)
* [2025-03-29, 01:10:00](https://science.slashdot.org/story/25/03/28/238210/giant-fungus-like-organism-may-be-completely-unknown-branch-of-life?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Giant, Fungus-Like Organism May Be Completely Unknown Branch of Life](https://science.slashdot.org/story/25/03/28/238210/giant-fungus-like-organism-may-be-completely-unknown-branch-of-life?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 00:30:00](https://slashdot.org/story/25/03/28/2252217/fdic-rescinds-guidance-around-banks-and-crypto?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FDIC Rescinds Guidance Around Banks and Crypto](https://slashdot.org/story/25/03/28/2252217/fdic-rescinds-guidance-around-banks-and-crypto?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 23:55:49](https://lobste.rs/s/2qafif/learn_css_layout_pedantic_way) - [Learn CSS Layout The Pedantic Way](https://book.mixu.net/css/)
* [2025-03-28, 23:50:00](https://science.slashdot.org/story/25/03/28/232215/a-new-image-file-format-efficiently-stores-invisible-light-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [A New Image File Format Efficiently Stores Invisible Light Data](https://science.slashdot.org/story/25/03/28/232215/a-new-image-file-format-efficiently-stores-invisible-light-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 23:10:00](https://developers.slashdot.org/story/25/03/28/2148205/doge-to-rewrite-ssa-codebase-in-months?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DOGE To Rewrite SSA Codebase In 'Months'](https://developers.slashdot.org/story/25/03/28/2148205/doge-to-rewrite-ssa-codebase-in-months?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 22:30:00](https://developers.slashdot.org/story/25/03/28/2025251/oracle-health-breach-compromises-patient-data-at-us-hospitals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Oracle Health Breach Compromises Patient Data At US Hospitals](https://developers.slashdot.org/story/25/03/28/2025251/oracle-health-breach-compromises-patient-data-at-us-hospitals?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 22:16:00](https://soylentnews.org/article.pl?sid=25/03/28/1127247&from=rss) - [Napster Sold for $200+ Million in the Year 2025](https://soylentnews.org/article.pl?sid=25/03/28/1127247&from=rss)
* [2025-03-28, 22:10:00](https://tech.slashdot.org/story/25/03/28/2156237/xai-acquires-x?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [xAI Acquires X](https://tech.slashdot.org/story/25/03/28/2156237/xai-acquires-x?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 21:50:00](https://yro.slashdot.org/story/25/03/28/2041200/trump-pardons-founder-of-electric-vehicle-start-up-nikola-trevor-milton?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Trump Pardons Founder of Electric Vehicle Start-Up Nikola, Trevor Milton](https://yro.slashdot.org/story/25/03/28/2041200/trump-pardons-founder-of-electric-vehicle-start-up-nikola-trevor-milton?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 21:23:42](https://news.ycombinator.com/item?id=43509923) - [xAI has acquired X, xAI now valued at $80B](https://twitter.com/elonmusk/status/1905731750275510312)
* [2025-03-28, 21:10:00](https://science.slashdot.org/story/25/03/28/1959225/nearly-half-of-people-in-the-us-have-toxic-pfas-in-their-drinking-water?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nearly Half of People in the US Have Toxic PFAS in Their Drinking Water](https://science.slashdot.org/story/25/03/28/1959225/nearly-half-of-people-in-the-us-have-toxic-pfas-in-their-drinking-water?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 21:01:49](https://news.ycombinator.com/item?id=43509782) - [Finley (YC W21) Is Hiring a Technical Implementations Specialist](https://ats.rippling.com/finley-technologies/jobs)
* [2025-03-28, 20:30:00](https://entertainment.slashdot.org/story/25/03/28/1944230/smart-tvs-are-employing-screen-monitoring-tech-to-harvest-user-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Smart TVs Are Employing Screen Monitoring Tech To Harvest User Data](https://entertainment.slashdot.org/story/25/03/28/1944230/smart-tvs-are-employing-screen-monitoring-tech-to-harvest-user-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 20:29:32](https://news.ycombinator.com/item?id=43509548) - [Digital Echoes and Unquiet Minds](https://www.chrbutler.com/digital-echoes-and-unquiet-minds)
* [2025-03-28, 20:03:13](https://lobste.rs/s/mmxm3v/organic_maps_github_has_gone_long_live) - [Organic Maps: GitHub has gone - long live Forgejo](https://mastodon.social/@organicmaps/114233788700982882)
* [2025-03-28, 19:41:55](https://lobste.rs/s/gldsdm/ode_game_boy_advance) - [An Ode To The Game Boy Advance](https://brainbaking.com/post/2025/03/an-ode-to-the-game-boy-advance/)
* [2025-03-28, 18:25:21](https://news.ycombinator.com/item?id=43508546) - [Superhyperbola](https://www.johndcook.com/blog/2025/03/27/superhyperbola/)
* [2025-03-28, 18:12:58](https://news.ycombinator.com/item?id=43508418) - [We hacked Gemini's Python sandbox and leaked its source code (at least some)](https://www.landh.tech/blog/20250327-we-hacked-gemini-source-code/)
* [2025-03-28, 17:37:42](https://news.ycombinator.com/item?id=43508061) - [Show HN: Hexi – Modern header-only network binary serialisation for C++](https://github.com/EmberEmu/Hexi)
* [2025-03-28, 17:32:00](https://soylentnews.org/article.pl?sid=25/03/27/1154254&from=rss) - [A Chip Has Broken the Critical Barrier That Could Ultimately Begin the Singularity](https://soylentnews.org/article.pl?sid=25/03/27/1154254&from=rss)
* [2025-03-28, 17:23:33](https://lobste.rs/s/uov26c/can_jank_beat_clojure_s_error_reporting) - [Can jank beat Clojure's error reporting?](https://jank-lang.org/blog/2025-03-28-error-reporting/)
* [2025-03-28, 16:39:10](https://news.ycombinator.com/item?id=43507404) - [The Real Book (2021)](https://99percentinvisible.org/episode/the-real-book/)
* [2025-03-28, 15:55:17](https://news.ycombinator.com/item?id=43506951) - [Show HN Pianoboi – displays sheet music as you play your piano](https://pianoboi.site)
* [2025-03-28, 15:06:22](https://lobste.rs/s/u07ssx/terrible_horrible_no_good_very_bad_python) - [Terrible Horrible No Good Very Bad Python](https://jyn.dev/terrible-horrible-no-good-very-bad-python/)
* [2025-03-28, 14:55:54](https://news.ycombinator.com/item?id=43506238) - [Decomposing a Factorial into Large Factors](https://terrytao.wordpress.com/2025/03/26/decomposing-a-factorial-into-large-factors/)
* [2025-03-28, 14:45:23](https://lobste.rs/s/jyqgmq/handling_form_errors_htmx) - [Handling form errors in htmx](https://dev.to/yawaramin/handling-form-errors-in-htmx-3ncg)
* [2025-03-28, 14:11:07](https://news.ycombinator.com/item?id=43505646) - [Building Statically Linked Go Executables with CGO and Zig](https://calabro.io/zig-cgo)
* [2025-03-28, 14:09:51](https://lobste.rs/s/va0h3b/building_statically_linked_go) - [Building Statically Linked Go Executables with CGO and Zig](https://calabro.io/zig-cgo)
* [2025-03-28, 12:45:00](https://soylentnews.org/article.pl?sid=25/03/27/0346219&from=rss) - [SpaceX Reportedly Has a Secret Backdoor for Chinese Investment](https://soylentnews.org/article.pl?sid=25/03/27/0346219&from=rss)
* [2025-03-28, 11:17:35](https://lobste.rs/s/ej4ps3/safeishly_use_non_reentrant_libraries) - [Safeishly use non-reentrant libraries with POSIX threads](https://git.sr.ht/~runxiyu/dlcage)
* [2025-03-28, 11:01:19](https://news.ycombinator.com/item?id=43503872) - [How to write blog posts that developers read](https://refactoringenglish.com/chapters/write-blog-posts-developers-read/)
* [2025-03-28, 10:26:26](https://lobste.rs/s/i3ya4n/apple_needs_snow_sequoia) - [Apple Needs a Snow Sequoia](https://reviews.ofb.biz/safari/article/1300.html)
* [2025-03-28, 07:56:00](https://soylentnews.org/article.pl?sid=25/03/26/1637237&from=rss) - [ReactOS 0.4.15 Released](https://soylentnews.org/article.pl?sid=25/03/26/1637237&from=rss)
* [2025-03-28, 06:54:03](https://lobste.rs/s/ment9k/xee_modern_xpath_xslt_engine_rust) - [Xee: A Modern XPath and XSLT Engine in Rust](https://blog.startifact.com/posts/xee/)
* [2025-03-28, 06:48:18](https://news.ycombinator.com/item?id=43502291) - [Xee: A Modern XPath and XSLT Engine in Rust](https://blog.startifact.com/posts/xee/)
* [2025-03-28, 03:13:00](https://soylentnews.org/article.pl?sid=25/03/26/1635243&from=rss) - [Order to Chaos: The Fascinating Math That All Pedestrians Need to Know](https://soylentnews.org/article.pl?sid=25/03/26/1635243&from=rss)
* [2025-03-27, 22:28:00](https://soylentnews.org/article.pl?sid=25/03/26/1631253&from=rss) - [Postel's Law and the Three Ring Circus](https://soylentnews.org/article.pl?sid=25/03/26/1631253&from=rss)
* [2025-03-27, 17:46:00](https://soylentnews.org/article.pl?sid=25/03/26/1629222&from=rss) - [Eric Schmidt Suggests Countries Could Engage in Mutual Assured AI Malfunction (MAIM)](https://soylentnews.org/article.pl?sid=25/03/26/1629222&from=rss)
* [2025-03-27, 13:02:00](https://soylentnews.org/article.pl?sid=25/03/26/1623212&from=rss) - [Is Your Job Making You Happy ?](https://soylentnews.org/article.pl?sid=25/03/26/1623212&from=rss)
* [2025-03-27, 08:14:00](https://soylentnews.org/article.pl?sid=25/03/26/0319206&from=rss) - [Chicago-Sized Iceberg Hid Ancient Ecosystem](https://soylentnews.org/article.pl?sid=25/03/26/0319206&from=rss)
* [2025-03-27, 03:26:00](https://soylentnews.org/article.pl?sid=25/03/26/038215&from=rss) - [EU OS Aims to Free the European Public Sector Desktop](https://soylentnews.org/article.pl?sid=25/03/26/038215&from=rss)
* [2025-03-27, 01:02:00](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss) - [The Search for Missing Plane MH370 is Back on](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss)
* [2025-03-27, 00:37:21](https://news.ycombinator.com/item?id=43489173) - [Beyond Bohr and Einstein](https://cerncourier.com/beyond-bohr-and-einstein/)
* [2025-03-26, 20:20:00](https://soylentnews.org/article.pl?sid=25/03/26/0237223&from=rss) - [Producing Wafers at TSMC Arizona is Only 10% More Expensive Than in Taiwan](https://soylentnews.org/article.pl?sid=25/03/26/0237223&from=rss)
* [2025-03-26, 18:38:14](https://news.ycombinator.com/item?id=43485373) - [You Need Subtyping](https://blog.polybdenum.com/2025/03/26/why-you-need-subtyping.html)
* [2025-03-26, 15:35:00](https://soylentnews.org/article.pl?sid=25/03/26/0243240&from=rss) - [4-Day Work-Week UK Pilot Due in Tech Land by Early Summer](https://soylentnews.org/article.pl?sid=25/03/26/0243240&from=rss)
* [2025-03-26, 14:43:37](https://news.ycombinator.com/item?id=43482792) - [Low responsiveness of ML models to critical or deteriorating health conditions](https://www.nature.com/articles/s43856-025-00775-0)
* [2025-03-26, 10:53:00](https://soylentnews.org/article.pl?sid=25/03/24/1817219&from=rss) - [European Coalition Pushes For Second Chips Act Funding To Boost Semiconductor Sector](https://soylentnews.org/article.pl?sid=25/03/24/1817219&from=rss)
* [2025-03-26, 06:10:00](https://soylentnews.org/article.pl?sid=25/03/24/1815205&from=rss) - [Harnessing Nature's Fractals for Flexible Electronics: Biomimetic Fabrication Technique Uses Leaf](https://soylentnews.org/article.pl?sid=25/03/24/1815205&from=rss)
* [2025-03-26, 01:25:00](https://soylentnews.org/article.pl?sid=25/03/24/1812238&from=rss) - [The 25 Years of Finnix](https://soylentnews.org/article.pl?sid=25/03/24/1812238&from=rss)
* [2025-03-25, 21:07:40](https://news.ycombinator.com/item?id=43475982) - [The Curious Case of Beam CPU Usage (2019)](https://stressgrid.com/blog/beam_cpu_usage/)
* [2025-03-25, 20:38:00](https://soylentnews.org/article.pl?sid=25/03/24/154217&from=rss) - [Device Enables Direct Communication Among Multiple Quantum Processors](https://soylentnews.org/article.pl?sid=25/03/24/154217&from=rss)
* [2025-03-25, 16:33:50](https://news.ycombinator.com/item?id=43473195) - [Emulating the YM2612: Part 1 – Interface](https://jsgroth.dev/blog/posts/emulating-ym2612-part-1/)
* [2025-03-25, 15:52:00](https://soylentnews.org/article.pl?sid=25/03/24/1454238&from=rss) - [Decades-Long Quest Leads to New Antibiotic Compounds](https://soylentnews.org/article.pl?sid=25/03/24/1454238&from=rss)
* [2025-03-25, 14:39:52](https://news.ycombinator.com/item?id=43471907) - [Chimpanzees act as 'engineers', choosing materials to make tools](https://www.sciencedaily.com/releases/2025/03/250324142002.htm)
* [2025-03-25, 14:34:17](https://news.ycombinator.com/item?id=43471838) - [Show HN: Bknd – Firebase alternative that embeds into any React stack](https://github.com/bknd-io/bknd)
* [2025-03-25, 12:30:00](https://news.ycombinator.com/item?id=43470416) - [Playstation Mod Turns the PSOne into a Crustacean](https://gizmodo.com/the-carcinisation-of-playstation-is-complete-say-hello-to-playstacean-2000579934)
* [2025-03-25, 11:09:00](https://soylentnews.org/article.pl?sid=25/03/24/0347235&from=rss) - [Squirrels Inspire Leaping Strategy for Salto Robot](https://soylentnews.org/article.pl?sid=25/03/24/0347235&from=rss)
* [2025-03-25, 09:55:21](https://news.ycombinator.com/item?id=43469535) - [Optimizing Matrix Multiplication on RDNA3](https://seb-v.github.io/optimization/update/2025/01/20/Fast-GPU-Matrix-multiplication.html)
* [2025-03-25, 06:24:00](https://soylentnews.org/article.pl?sid=25/03/24/0335233&from=rss) - [Sperm Donation Giant California Cryobank Warns of a Data Breach](https://soylentnews.org/article.pl?sid=25/03/24/0335233&from=rss)
* [2025-03-25, 01:37:00](https://soylentnews.org/article.pl?sid=25/03/23/1454225&from=rss) - [Cement Sand Substitute Made Directly From Seawater, Electricity and CO2](https://soylentnews.org/article.pl?sid=25/03/23/1454225&from=rss)
