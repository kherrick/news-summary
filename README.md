# News Summary

## Technology Advancements and Innovations

* ['Scientists May Have Discovered How To Extract Power From the Earth's Rotation'](https://hardware.slashdot.org/story/25/03/29/0536241/scientists-may-have-discovered-how-to-extract-power-from-the-earths-rotation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A groundbreaking discovery could enable the extraction of power from Earth's rotation, opening new frontiers for sustainable energy.

* ['A New Image File Format Efficiently Stores Invisible Light Data'](https://science.slashdot.org/story/25/03/28/232215/a-new-image-file-format-efficiently-stores-invisible-light-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Scientists have unveiled a file format capable of storing invisible light data, expanding capabilities in imaging technologies.

* ['NASA Adds SpaceX's Starship To Launch Services Program Fleet'](https://science.slashdot.org/story/25/03/29/0950235/nasa-adds-spacexs-starship-to-launch-services-program-fleet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NASA's endorsement of SpaceX's Starship solidifies its role in future space missions as part of the agency's launch services program.

* ['Giant, Fungus-Like Organism May Be Completely Unknown Branch of Life'](https://science.slashdot.org/story/25/03/28/238210/giant-fungus-like-organism-may-be-completely-unknown-branch-of-life?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers have identified a massive fungus-like organism that could represent an entirely new branch of life.

## Digital Privacy and Security

* ['Pixelfed leaks private posts from other Fediverse instances'](https://fokus.cool/2025/03/25/pixelfed-vulnerability.html) - A significant vulnerability in Pixelfed exposed private posts from other connected platforms, raising concerns about digital privacy.

* ['Three bypasses of Ubuntu's unprivileged user namespace restrictions'](https://seclists.org/oss-sec/2025/q1/253) - The discovery of bypasses in Ubuntu's user namespace highlights ongoing challenges in securing operating systems.

* ['Free Output – AI output copyright status checker'](https://freeoutput.org/) - Introducing a useful tool for checking the copyright status of AI-generated content, addressing concerns about intellectual property.

## Emerging Artificial Intelligence

* ['Apple's AI isn't a letdown. AI is the letdown'](https://www.cnn.com/2025/03/27/tech/apple-ai-artificial-intelligence/index.html) - A critical perspective on AI technologies, analyzing limitations and societal expectations.

* ['First Trial of Generative AI Therapy Shows It Might Help With Depression'](https://slashdot.org/story/25/03/29/101206/first-trial-of-generative-ai-therapy-shows-it-might-help-with-depression?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Promising results from a trial exploring the potential of AI to assist in addressing mental health challenges such as depression.

* ['Open Source Devs Are Fighting AI Crawlers With Cleverness and Vengeance'](https://soylentnews.org/article.pl?sid=25/03/28/1210259&from=rss) - Developers are using innovative techniques to combat AI crawlers, seeking to protect their open-source contributions.

## Culture and Entertainment

* ['All of the Commercials That David Lynch Has Directed: A 30-Minute Compilation'](https://www.openculture.com/2018/07/watch-commercials-david-lynch-directed-big-30-minute-compilation.html) - Explore the surreal world of David Lynch through his compilation of ad creations.

* ['I made a little puzzle game about a rogue chess knight'](https://rakhim.exotext.com/knight-ride-a-game-about-rogue-chess-knight) - A unique puzzle game delves into the journey of a rogue chess knight, blending strategy and creativity.

* ['The Candid Naivety of Geeks'](https://ploum.net/2025-03-28-geeks-naivety.html) - A reflective piece on the idealism and practical challenges faced by tech enthusiasts.

## Environmental and Scientific Discoveries

* ['As the Arctic's Winter Sea Ice Hits a New Record Low - What Happens Next?'](https://news.slashdot.org/story/25/03/29/0435221/as-the-arctics-winter-sea-ice-hits-a-new-record-low---what-happens-next?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Alarming decline in Arctic winter sea ice prompts urgent discussions on climate change impacts.

* ['Record-Breaking Explosion by Black Hole Spotted'](https://soylentnews.org/article.pl?sid=25/03/28/1215217&from=rss) - Astronomers observe a spectacular black hole explosion, shedding light on cosmic phenomena.

* ['Martian Dust May Pose Health Risk To Humans Exploring Red Planet, Study Finds'](https://science.slashdot.org/story/25/03/29/0035216/martian-dust-may-pose-health-risk-to-humans-exploring-red-planet-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A study highlights potential health risks from Martian dust, crucial for future planetary exploration.

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

* [2025-03-29, 21:00:35](https://news.ycombinator.com/item?id=43518695) - [Spark AI (YC W24) Is Hiring a Full-Stack Engineer in San Francisco](https://www.ycombinator.com/companies/spark/jobs/kDeJlPK-software-engineer-full-stack)
* [2025-03-29, 20:45:22](https://news.ycombinator.com/item?id=43518576) - [Apple's AI isn't a letdown. AI is the letdown](https://www.cnn.com/2025/03/27/tech/apple-ai-artificial-intelligence/index.html)
* [2025-03-29, 20:44:00](https://it.slashdot.org/story/25/03/29/0626254/are-tech-driven-career-meltdowns-hitting-generation-x?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Are Tech-Driven 'Career Meltdowns' Hitting Generation X?](https://it.slashdot.org/story/25/03/29/0626254/are-tech-driven-career-meltdowns-hitting-generation-x?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 20:43:42](https://news.ycombinator.com/item?id=43518560) - [CVE-2025-31160 Atop 2.11 heap problems](https://openwall.com/lists/oss-security/2025/03/29/1)
* [2025-03-29, 20:42:24](https://lobste.rs/s/tuxppn/web_framework_for_building_products_with) - [A web framework for building products with Python · Plain](https://plainframework.com/)
* [2025-03-29, 20:31:21](https://news.ycombinator.com/item?id=43518466) - [All of the Commercials That David Lynch Has Directed: A 30-Minute Compilation](https://www.openculture.com/2018/07/watch-commercials-david-lynch-directed-big-30-minute-compilation.html)
* [2025-03-29, 20:04:43](https://news.ycombinator.com/item?id=43518251) - [Decline of cash credited for drop in surgery for children swallowing objects](https://www.theguardian.com/society/2025/mar/28/decline-of-cash-credited-for-drop-in-nhs-surgery-for-children-swallowing-objects)
* [2025-03-29, 20:00:33](https://news.ycombinator.com/item?id=43518220) - [Matrix Calculus (For Machine Learning and Beyond)](https://arxiv.org/abs/2501.14787)
* [2025-03-29, 19:45:46](https://news.ycombinator.com/item?id=43518087) - [The Candid Naivety of Geeks](https://ploum.net/2025-03-28-geeks-naivety.html)
* [2025-03-29, 19:40:07](https://news.ycombinator.com/item?id=43518030) - [Proof that Steins;Gate world is a running simulation](https://samyar.me/posts/steins-gate-and-hamming-code/)
* [2025-03-29, 19:34:00](https://mobile.slashdot.org/story/25/03/29/0236203/why-a-lost-cellphone-forced-an-airplane-to-turn-around-in-mid-flight?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Why a Lost Cellphone Forced an Airplane to Turn Around in Mid-Flight](https://mobile.slashdot.org/story/25/03/29/0236203/why-a-lost-cellphone-forced-an-airplane-to-turn-around-in-mid-flight?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 19:12:38](https://news.ycombinator.com/item?id=43517779) - [Beautiful and Minimalistic Chrome Extension](https://lofitab.com/)
* [2025-03-29, 19:07:44](https://news.ycombinator.com/item?id=43517734) - [OSS-SEC: Three bypasses of Ubuntu's unprivileged user namespace restrictions](https://seclists.org/oss-sec/2025/q1/253)
* [2025-03-29, 18:48:44](https://news.ycombinator.com/item?id=43517603) - [Body Doubling](https://en.wikipedia.org/wiki/Body_doubling)
* [2025-03-29, 18:45:22](https://lobste.rs/s/a8t2pp/ente_photos_v1) - [Ente Photos v1](https://ente.io/blog/v1)
* [2025-03-29, 18:44:49](https://news.ycombinator.com/item?id=43517588) - [Show HN: Appear as anyone in video calls like zoom or Google meets](https://www.phazr.ai/)
* [2025-03-29, 18:44:08](https://news.ycombinator.com/item?id=43517585) - [Free Output – AI output copyright status checker](https://freeoutput.org/)
* [2025-03-29, 18:42:43](https://news.ycombinator.com/item?id=43517576) - [Lvgl: Embedded graphics library to create beautiful UIs](https://github.com/lvgl/lvgl)
* [2025-03-29, 18:34:00](https://tech.slashdot.org/story/25/03/29/1831231/an-open-letter-to-meta-support-true-messaging-interoperability-with-xmpp?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['An Open Letter To Meta: Support True Messaging Interoperability With XMPP'](https://tech.slashdot.org/story/25/03/29/1831231/an-open-letter-to-meta-support-true-messaging-interoperability-with-xmpp?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 18:12:03](https://news.ycombinator.com/item?id=43517375) - [Paged Out #6 is out](https://pagedout.institute/?page=blog.php#entry-2025-03-29)
* [2025-03-29, 18:10:07](https://news.ycombinator.com/item?id=43517365) - [The Wrong Way to Use a Signed Distance Function (SDF)](https://winterbloed.be/the-wrong-way-to-use-a-signed-distance-function/)
* [2025-03-29, 18:05:08](https://news.ycombinator.com/item?id=43517337) - [Veloren – voxel action-adventure role-playing in Rust](https://veloren.net/)
* [2025-03-29, 18:00:48](https://news.ycombinator.com/item?id=43517301) - [Why Apple's Severance gets edited over remote desktop software](https://tedium.co/2025/03/29/severance-apple-remote-editing-weirdness/)
* [2025-03-29, 17:51:12](https://news.ycombinator.com/item?id=43517234) - [Vramfs: Vram Based Filesystem for Linux](https://github.com/Overv/vramfs)
* [2025-03-29, 17:37:57](https://lobste.rs/s/ryacpm/vramfs_vram_based_file_system_for_linux) - [vramfs: VRAM based file system for Linux](https://github.com/Overv/vramfs)
* [2025-03-29, 17:34:00](https://hardware.slashdot.org/story/25/03/29/0536241/scientists-may-have-discovered-how-to-extract-power-from-the-earths-rotation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Scientists May Have Discovered How To Extract Power From the Earth's Rotation](https://hardware.slashdot.org/story/25/03/29/0536241/scientists-may-have-discovered-how-to-extract-power-from-the-earths-rotation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 17:32:28](https://news.ycombinator.com/item?id=43517108) - [Making of the New York and Erie Railroad Organizational Diagram](https://www.c82.net/blog/?id=98)
* [2025-03-29, 17:17:00](https://soylentnews.org/article.pl?sid=25/03/28/1347215&from=rss) - [Nitisinone Makes Human Blood Lethal to Mosquitoes and Outlasts Ivermectin, Study Shows](https://soylentnews.org/article.pl?sid=25/03/28/1347215&from=rss)
* [2025-03-29, 17:06:30](https://lobste.rs/s/lmf0ot/horseless_intelligence) - [Horseless intelligence](https://nedbatchelder.com/blog/202503/horseless_intelligence.html)
* [2025-03-29, 16:38:01](https://news.ycombinator.com/item?id=43516733) - [Accessible open textbooks in math-heavy disciplines](https://richardzach.org/2025/03/accessible-open-textbooks-in-math-heavy-disciplines/)
* [2025-03-29, 16:34:00](https://science.slashdot.org/story/25/03/29/0315205/scientists-create-new-heavy-metal-molecule-berkelocene?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Scientists Create New Heavy-Metal Molecule:  'Berkelocene'](https://science.slashdot.org/story/25/03/29/0315205/scientists-create-new-heavy-metal-molecule-berkelocene?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 15:34:00](https://news.slashdot.org/story/25/03/29/0435221/as-the-arctics-winter-sea-ice-hits-a-new-record-low---what-happens-next?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [As the Arctic's Winter Sea Ice Hits a New Record Low - What Happens Next?](https://news.slashdot.org/story/25/03/29/0435221/as-the-arctics-winter-sea-ice-hits-a-new-record-low---what-happens-next?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 14:50:05](https://lobste.rs/s/dducfq/i_made_little_puzzle_game_about_rogue) - [I made a little puzzle game about a rogue chess knight](https://rakhim.exotext.com/knight-ride-a-game-about-rogue-chess-knight)
* [2025-03-29, 14:40:49](https://lobste.rs/s/6ue8gr/how_become_hacker_step_by_step_guide) - [How To Become A Hacker: A Step-By-Step Guide](https://sebastiancarlos.medium.com/how-to-become-a-hacker-a-step-by-step-guide-94902dc425b0)
* [2025-03-29, 14:34:00](https://it.slashdot.org/story/25/03/29/0555241/new-ubuntu-linux-security-bypasses-require-manual-mitigations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Ubuntu Linux Security Bypasses Require Manual Mitigations](https://it.slashdot.org/story/25/03/29/0555241/new-ubuntu-linux-security-bypasses-require-manual-mitigations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 13:58:59](https://lobste.rs/s/evrduc/where_do_bytes_go) - [where do the bytes go?](https://flak.tedunangst.com/post/where-do-the-bytes-go)
* [2025-03-29, 13:36:14](https://news.ycombinator.com/item?id=43515426) - [Typed Japanese](https://github.com/typedgrammar/typed-japanese)
* [2025-03-29, 13:00:00](https://slashdot.org/story/25/03/29/101206/first-trial-of-generative-ai-therapy-shows-it-might-help-with-depression?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [First Trial of Generative AI Therapy Shows It Might Help With Depression](https://slashdot.org/story/25/03/29/101206/first-trial-of-generative-ai-therapy-shows-it-might-help-with-depression?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 12:33:00](https://soylentnews.org/article.pl?sid=25/03/28/1215217&from=rss) - [Record-Breaking Explosion by Black Hole Spotted](https://soylentnews.org/article.pl?sid=25/03/28/1215217&from=rss)
* [2025-03-29, 12:32:20](https://lobste.rs/s/govrnx/paged_out_issue_06) - [Paged out issue 06](https://pagedout.institute/download/PagedOut_006.pdf)
* [2025-03-29, 12:28:30](https://lobste.rs/s/xs2sdb/item_flow_part_1_new_unified_concept_for) - [Item Flow, Part 1: A new unified concept for layout](https://webkit.org/blog/16587/item-flow-part-1-a-new-unified-concept-for-layout/)
* [2025-03-29, 12:04:55](https://lobste.rs/s/hg1kpm/pixelfed_leaks_private_posts_from_other) - [Pixelfed leaks private posts from other Fediverse instances](https://fokus.cool/2025/03/25/pixelfed-vulnerability.html)
* [2025-03-29, 11:57:10](https://lobste.rs/s/qdhcqx/moonshots_initiative_secure_future_risc) - [\"Moonshots\" Initiative to Secure the Future of RISC OS](https://www.riscosopen.org/news/articles/2025/03/28/moonshots-initiative-to-secure-the-future-of-the-os)
* [2025-03-29, 11:41:54](https://news.ycombinator.com/item?id=43514695) - [Real Time Chess – A physical chess board without the concept of turns](https://github.com/misprit7/real-time-chess)
* [2025-03-29, 10:58:44](https://lobste.rs/s/ypuwrw/building_search_engine_from_scratch_rust) - [Building a search engine from scratch, in Rust: part 1](https://jdrouet.github.io/posts/202503170800-search-engine-part-1/)
* [2025-03-29, 10:42:26](https://news.ycombinator.com/item?id=43514383) - [Show HN: Physical Pomodoro Timer with ESP32 and e-paper screen](https://github.com/Rukenshia/pomodoro)
* [2025-03-29, 10:37:23](https://lobste.rs/s/od7zlr/expressing_japanese_grammar_through) - [Expressing Japanese Grammar Through TypeScript Type System](https://github.com/typedgrammar/typed-japanese/blob/main/blog.md)
* [2025-03-29, 10:23:45](https://lobste.rs/s/fstz1l/language_server_for_postgres) - [A Language Server for Postgres](https://github.com/supabase-community/postgres-language-server)
* [2025-03-29, 10:00:00](https://science.slashdot.org/story/25/03/29/0950235/nasa-adds-spacexs-starship-to-launch-services-program-fleet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA Adds SpaceX's Starship To Launch Services Program Fleet](https://science.slashdot.org/story/25/03/29/0950235/nasa-adds-spacexs-starship-to-launch-services-program-fleet?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 09:13:43](https://news.ycombinator.com/item?id=43513996) - [Postgres Language Server: Initial Release](https://github.com/supabase-community/postgres-language-server)
* [2025-03-29, 07:49:00](https://soylentnews.org/article.pl?sid=25/03/28/1210259&from=rss) - [Open Source Devs Are Fighting AI Crawlers With Cleverness and Vengeance](https://soylentnews.org/article.pl?sid=25/03/28/1210259&from=rss)
* [2025-03-29, 07:00:00](https://science.slashdot.org/story/25/03/29/0035216/martian-dust-may-pose-health-risk-to-humans-exploring-red-planet-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Martian Dust May Pose Health Risk To Humans Exploring Red Planet, Study Finds](https://science.slashdot.org/story/25/03/29/0035216/martian-dust-may-pose-health-risk-to-humans-exploring-red-planet-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
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
* [2025-03-28, 22:16:00](https://soylentnews.org/article.pl?sid=25/03/28/1127247&from=rss) - [Napster Sold for $200+ Million in the Year 2025](https://soylentnews.org/article.pl?sid=25/03/28/1127247&from=rss)
* [2025-03-28, 20:03:13](https://lobste.rs/s/mmxm3v/organic_maps_github_has_gone_long_live) - [Organic Maps: GitHub has gone - long live Forgejo](https://mastodon.social/@organicmaps/114233788700982882)
* [2025-03-28, 18:12:58](https://news.ycombinator.com/item?id=43508418) - [We hacked Gemini's Python sandbox and leaked its source code (at least some)](https://www.landh.tech/blog/20250327-we-hacked-gemini-source-code/)
* [2025-03-28, 17:32:00](https://soylentnews.org/article.pl?sid=25/03/27/1154254&from=rss) - [A Chip Has Broken the Critical Barrier That Could Ultimately Begin the Singularity](https://soylentnews.org/article.pl?sid=25/03/27/1154254&from=rss)
* [2025-03-28, 17:23:33](https://lobste.rs/s/uov26c/can_jank_beat_clojure_s_error_reporting) - [Can jank beat Clojure's error reporting?](https://jank-lang.org/blog/2025-03-28-error-reporting/)
* [2025-03-28, 15:06:22](https://lobste.rs/s/u07ssx/terrible_horrible_no_good_very_bad_python) - [Terrible Horrible No Good Very Bad Python](https://jyn.dev/terrible-horrible-no-good-very-bad-python/)
* [2025-03-28, 14:45:23](https://lobste.rs/s/jyqgmq/handling_form_errors_htmx) - [Handling form errors in htmx](https://dev.to/yawaramin/handling-form-errors-in-htmx-3ncg)
* [2025-03-28, 14:09:51](https://lobste.rs/s/va0h3b/building_statically_linked_go) - [Building Statically Linked Go Executables with CGO and Zig](https://calabro.io/zig-cgo)
* [2025-03-28, 12:45:00](https://soylentnews.org/article.pl?sid=25/03/27/0346219&from=rss) - [SpaceX Reportedly Has a Secret Backdoor for Chinese Investment](https://soylentnews.org/article.pl?sid=25/03/27/0346219&from=rss)
* [2025-03-28, 10:26:26](https://lobste.rs/s/i3ya4n/apple_needs_snow_sequoia) - [Apple Needs a Snow Sequoia](https://reviews.ofb.biz/safari/article/1300.html)
* [2025-03-28, 07:56:00](https://soylentnews.org/article.pl?sid=25/03/26/1637237&from=rss) - [ReactOS 0.4.15 Released](https://soylentnews.org/article.pl?sid=25/03/26/1637237&from=rss)
* [2025-03-28, 06:54:03](https://lobste.rs/s/ment9k/xee_modern_xpath_xslt_engine_rust) - [Xee: A Modern XPath and XSLT Engine in Rust](https://blog.startifact.com/posts/xee/)
* [2025-03-28, 03:13:00](https://soylentnews.org/article.pl?sid=25/03/26/1635243&from=rss) - [Order to Chaos: The Fascinating Math That All Pedestrians Need to Know](https://soylentnews.org/article.pl?sid=25/03/26/1635243&from=rss)
* [2025-03-27, 22:28:00](https://soylentnews.org/article.pl?sid=25/03/26/1631253&from=rss) - [Postel's Law and the Three Ring Circus](https://soylentnews.org/article.pl?sid=25/03/26/1631253&from=rss)
* [2025-03-27, 17:46:00](https://soylentnews.org/article.pl?sid=25/03/26/1629222&from=rss) - [Eric Schmidt Suggests Countries Could Engage in Mutual Assured AI Malfunction (MAIM)](https://soylentnews.org/article.pl?sid=25/03/26/1629222&from=rss)
* [2025-03-27, 15:50:08](https://news.ycombinator.com/item?id=43494894) - [XAN: A Modern CSV-Centric Data Manipulation Toolkit for the Terminal](https://github.com/medialab/xan)
* [2025-03-27, 13:02:00](https://soylentnews.org/article.pl?sid=25/03/26/1623212&from=rss) - [Is Your Job Making You Happy ?](https://soylentnews.org/article.pl?sid=25/03/26/1623212&from=rss)
* [2025-03-27, 08:14:00](https://soylentnews.org/article.pl?sid=25/03/26/0319206&from=rss) - [Chicago-Sized Iceberg Hid Ancient Ecosystem](https://soylentnews.org/article.pl?sid=25/03/26/0319206&from=rss)
* [2025-03-27, 03:26:00](https://soylentnews.org/article.pl?sid=25/03/26/038215&from=rss) - [EU OS Aims to Free the European Public Sector Desktop](https://soylentnews.org/article.pl?sid=25/03/26/038215&from=rss)
* [2025-03-27, 01:02:00](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss) - [The Search for Missing Plane MH370 is Back on](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss)
* [2025-03-26, 20:20:00](https://soylentnews.org/article.pl?sid=25/03/26/0237223&from=rss) - [Producing Wafers at TSMC Arizona is Only 10% More Expensive Than in Taiwan](https://soylentnews.org/article.pl?sid=25/03/26/0237223&from=rss)
* [2025-03-26, 18:51:00](https://news.ycombinator.com/item?id=43485514) - [The disappearance of Gaia, ESA spacecraft will be turned off on 27 March 2025](https://www.cosmos.esa.int/web/gaia/news)
* [2025-03-26, 15:35:00](https://soylentnews.org/article.pl?sid=25/03/26/0243240&from=rss) - [4-Day Work-Week UK Pilot Due in Tech Land by Early Summer](https://soylentnews.org/article.pl?sid=25/03/26/0243240&from=rss)
* [2025-03-26, 10:53:00](https://soylentnews.org/article.pl?sid=25/03/24/1817219&from=rss) - [European Coalition Pushes For Second Chips Act Funding To Boost Semiconductor Sector](https://soylentnews.org/article.pl?sid=25/03/24/1817219&from=rss)
* [2025-03-26, 08:07:20](https://news.ycombinator.com/item?id=43479906) - [Show HN: I implemented Snake in a tmux config file](https://willhbr.net/2025/03/20/snakes-in-a-pane/)
* [2025-03-26, 06:10:00](https://soylentnews.org/article.pl?sid=25/03/24/1815205&from=rss) - [Harnessing Nature's Fractals for Flexible Electronics: Biomimetic Fabrication Technique Uses Leaf](https://soylentnews.org/article.pl?sid=25/03/24/1815205&from=rss)
* [2025-03-26, 01:25:00](https://soylentnews.org/article.pl?sid=25/03/24/1812238&from=rss) - [The 25 Years of Finnix](https://soylentnews.org/article.pl?sid=25/03/24/1812238&from=rss)
* [2025-03-25, 20:38:00](https://soylentnews.org/article.pl?sid=25/03/24/154217&from=rss) - [Device Enables Direct Communication Among Multiple Quantum Processors](https://soylentnews.org/article.pl?sid=25/03/24/154217&from=rss)
* [2025-03-25, 15:52:00](https://soylentnews.org/article.pl?sid=25/03/24/1454238&from=rss) - [Decades-Long Quest Leads to New Antibiotic Compounds](https://soylentnews.org/article.pl?sid=25/03/24/1454238&from=rss)
* [2025-03-25, 11:09:00](https://soylentnews.org/article.pl?sid=25/03/24/0347235&from=rss) - [Squirrels Inspire Leaping Strategy for Salto Robot](https://soylentnews.org/article.pl?sid=25/03/24/0347235&from=rss)
* [2025-03-25, 06:24:00](https://soylentnews.org/article.pl?sid=25/03/24/0335233&from=rss) - [Sperm Donation Giant California Cryobank Warns of a Data Breach](https://soylentnews.org/article.pl?sid=25/03/24/0335233&from=rss)
* [2025-03-25, 01:37:00](https://soylentnews.org/article.pl?sid=25/03/23/1454225&from=rss) - [Cement Sand Substitute Made Directly From Seawater, Electricity and CO2](https://soylentnews.org/article.pl?sid=25/03/23/1454225&from=rss)
