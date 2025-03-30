# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Samsung Unveils AI-Powered, Screen-Enabled Home Appliances](https://slashdot.org/story/25/03/30/0421248/samsung-unveils-ai-powered-screen-enabled-home-appliances?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Samsung introduces appliances merging artificial intelligence with advanced interfaces, creating a futuristic user experience.

* [NASA Adds SpaceX's Starship To Launch Services Program Fleet](https://science.slashdot.org/story/25/03/29/0950235/nasa-adds-spacexs-starship-to-launch-services-program-fleet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - SpaceX's Starship becomes part of NASA's long-term exploration strategy, a notable addition to its launch offerings.

* [Koto Programming Language](https://koto.dev/) - Introducing an approachable multi-paradigm language with a focus on simplicity and versatility for small projects.

* [Aptera Takes First 300-Mile Highway Trip in Solar-Powered EV](https://hardware.slashdot.org/story/25/03/30/026200/aptera-takes-first-300-mile-highway-trip-in-solar-powered-ev?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A successful milestone for Aptera as their solar-powered car achieves a 300-mile highway trip.

* [Sim Daltonism: The color blindness simulator](https://michelf.ca/projects/sim-daltonism/) - A tool to simulate color blindness and assist designers in creating accessible visuals.

## Science and Environment

* [A Tardigrade Protein Helped Reduce Radiation Damage In Mice](https://soylentnews.org/article.pl?sid=25/03/28/146215&from=rss) - Research reveals how a protein inspired by tardigrades can mitigate cellular radiation damage in mammals.

* [Scientists Create New Heavy-Metal Molecule: 'Berkelocene'](https://science.slashdot.org/story/25/03/29/0315205/scientists-create-new-heavy-metal-molecule-berkelocene?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A new molecular discovery with potentially significant implications for materials science.

* [Did Life on Earth Come from 'Microlightning' Between Charged Water Droplets?](https://science.slashdot.org/story/25/03/29/2326255/did-life-on-earth-come-from-microlightning-between-charged-water-droplets?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A hypothesis exploring the origins of Earthly life through electrical phenomena in water.

* [As the Arctic's Winter Sea Ice Hits a New Record Low - What Happens Next?](https://news.slashdot.org/story/25/03/29/0435221/as-the-arctics-winter-sea-ice-hits-a-new-record-low---what-happens-next?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A worrisome marker of climate change raises urgent questions about the Arctic's future.

* [Scientists May Have Discovered How To Extract Power From the Earth's Rotation](https://hardware.slashdot.org/story/25/03/29/0536241/scientists-may-have-discovered-how-to-extract-power-from-the-earths-rotation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Innovators propose a mechanism to harness energy from Earth's rotational movement.

## Privacy and Security

* [Nearly 1.5 Million Private Photos from Five Dating Apps Were Exposed Online](https://yro.slashdot.org/story/25/03/30/0236216/nearly-15-million-private-photos-from-five-dating-apps-were-exposed-online?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A significant breach highlights vulnerabilities in digital platforms managing personal data.

* [Pixelfed leaks private posts from other Fediverse instances](https://fokus.cool/2025/03/25/pixelfed-vulnerability.html) - Concerns arise over a privacy flaw in a leading decentralized social media platform.

* [Everyone knows all the apps on your phone](https://peabee.substack.com/p/everyone-knows-what-apps-you-use) - A study sheds light on how user behavior and installed apps may be easily tracked.

## Notable Developments in Software and Programming

* [Towards fearless SIMD, 7 years later](https://linebender.org/blog/towards-fearless-simd/) - Reflections on progress and challenges in simplifying SIMD programming.

* [Kalua: An OpenWrt extension for building large mesh-networks](https://github.com/bittorf/kalua) - A promising tool aimed at scaling mesh networking capabilities.

* [Building a search engine from scratch, in Rust: part 1](https://jdrouet.github.io/posts/202503170800-search-engine-part-1/) - A Rust-centric guide for enthusiasts diving into the intricacies of search engine construction.

* [syntax highlighting with tree-sitter](https://dotat.at/@/2025-03-30-hilite.html) - Exploring advanced syntax highlighting through the integration of tree-sitter.

* [Labor of Division (2010)](https://ridiculousfish.com/blog/posts/labor-of-division-episode-i.html) - A mathematical and historical dive into how division is approached and optimized in programming.

## Cultural and Quirky Focus

* [Why a plane turned around when a passenger lost a phone midflight](https://www.washingtonpost.com/travel/2025/03/28/air-france-lost-cellphone/) - The intriguing tale behind an unexpected mid-air flight decision.

* [Commercials that David Lynch directed (2018)](https://www.openculture.com/2018/07/watch-commercials-david-lynch-directed-big-30-minute-compilation.html) - A look at how the acclaimed director brought his artistry to advertising.

* [I made a little puzzle game about a rogue chess knight](https://rakhim.exotext.com/knight-ride-a-game-about-rogue-chess-knight) - An innovative blend of puzzles and chess mechanics for gaming enthusiasts.

* [It's the hottest car company. You can't buy one in America](https://www.cnn.com/2025/03/26/cars/china-byd-profile-tesla-rival-intl-hnk/index.html) - Insights into China's BYD automotive giant and why they're steering clear of U.S. markets.

* ['Why Did the Government Declare War on My Adorable Tiny Truck?'](https://tech.slashdot.org/story/25/03/29/2126251/why-did-the-government-declare-war-on-my-adorable-tiny-truck?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A humorous yet serious look at government regulations clashing with quirky vehicles.

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

* [2025-03-30, 12:57:09](https://news.ycombinator.com/item?id=43523797) - [It's the hottest car company. You can't buy one in America](https://www.cnn.com/2025/03/26/cars/china-byd-profile-tesla-rival-intl-hnk/index.html)
* [2025-03-30, 12:50:45](https://news.ycombinator.com/item?id=43523765) - [Why a plane turned around when a passenger lost a phone midflight](https://www.washingtonpost.com/travel/2025/03/28/air-france-lost-cellphone/)
* [2025-03-30, 12:47:07](https://news.ycombinator.com/item?id=43523741) - [Tail Call Recursion in Java with ASM (2023)](https://unlinkedlist.org/2023/03/19/tail-call-recursion-in-java-with-asm/)
* [2025-03-30, 12:28:00](https://soylentnews.org/article.pl?sid=25/03/30/0940218&from=rss) - [I'm an American Software Developer and the \"Broligarchs\" Don't Speak for Me (or Anyone I Know.)](https://soylentnews.org/article.pl?sid=25/03/30/0940218&from=rss)
* [2025-03-30, 12:16:15](https://lobste.rs/s/pn9gok/labor_division_2010) - [Labor of Division (2010)](https://ridiculousfish.com/blog/posts/labor-of-division-episode-i.html)
* [2025-03-30, 12:02:05](https://lobste.rs/s/dqezic/koto_programming_language) - [Koto Programming Language](https://koto.dev/)
* [2025-03-30, 12:02:01](https://lobste.rs/s/g1z2pu/towards_fearless_simd_7_years_later) - [Towards fearless SIMD, 7 years later](https://linebender.org/blog/towards-fearless-simd/)
* [2025-03-30, 11:34:00](https://yro.slashdot.org/story/25/03/30/0236216/nearly-15-million-private-photos-from-five-dating-apps-were-exposed-online?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nearly 1.5 Million Private Photos from Five Dating Apps Were Exposed Online](https://yro.slashdot.org/story/25/03/30/0236216/nearly-15-million-private-photos-from-five-dating-apps-were-exposed-online?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 11:23:50](https://lobste.rs/s/tobrqw/convert_linux_windows) - [Convert Linux to Windows](https://philipbohun.com/blog/0007.html)
* [2025-03-30, 11:15:19](https://lobste.rs/s/mvcoat/rust_any_part_3_finally_we_have_upcasts) - [Rust Any part 3: Finally we have upcasts](https://lucumr.pocoo.org/2025/3/27/any-upcast/)
* [2025-03-30, 11:15:12](https://news.ycombinator.com/item?id=43523238) - [Rust Any part 3: we have upcasts](https://lucumr.pocoo.org/2025/3/27/any-upcast/)
* [2025-03-30, 08:14:11](https://news.ycombinator.com/item?id=43522363) - [Four Lectures on Standard ML (1989) [pdf]](https://www.cs.tufts.edu/~nr/cs257/archive/mads-tofte/four-lectures.pdf)
* [2025-03-30, 07:42:00](https://soylentnews.org/article.pl?sid=25/03/28/146215&from=rss) - [A Tardigrade Protein Helped Reduce Radiation Damage In Mice](https://soylentnews.org/article.pl?sid=25/03/28/146215&from=rss)
* [2025-03-30, 07:34:00](https://slashdot.org/story/25/03/30/0421248/samsung-unveils-ai-powered-screen-enabled-home-appliances?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Samsung Unveils AI-Powered, Screen-Enabled Home Appliances](https://slashdot.org/story/25/03/30/0421248/samsung-unveils-ai-powered-screen-enabled-home-appliances?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 07:15:49](https://news.ycombinator.com/item?id=43522059) - [Kalua: An OpenWrt extension for building large mesh-networks](https://github.com/bittorf/kalua)
* [2025-03-30, 06:27:06](https://lobste.rs/s/q2rxjn/arpa_rdns_few_magical_icmp_hacks) - [.arpa, rDNS and a few magical ICMP hacks](https://sdomi.pl/weblog/24-arpa-hacks/)
* [2025-03-30, 05:00:00](https://soylentnews.org/article.pl?sid=25/03/28/1139202&from=rss) - [Soylent News Entering a New Phase](https://soylentnews.org/article.pl?sid=25/03/28/1139202&from=rss)
* [2025-03-30, 03:34:00](https://hardware.slashdot.org/story/25/03/30/026200/aptera-takes-first-300-mile-highway-trip-in-solar-powered-ev?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Aptera Takes First 300-Mile Highway Trip in Solar-Powered EV](https://hardware.slashdot.org/story/25/03/30/026200/aptera-takes-first-300-mile-highway-trip-in-solar-powered-ev?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 03:14:36](https://news.ycombinator.com/item?id=43520953) - [Show HN: Cloud-Ready Postgres MCP Server](https://github.com/stuzero/pg-mcp)
* [2025-03-30, 03:03:00](https://soylentnews.org/article.pl?sid=25/03/28/1353243&from=rss) - [Tor Network Status - A Pretty Yet Detailed Current List of Nodes and Type](https://soylentnews.org/article.pl?sid=25/03/28/1353243&from=rss)
* [2025-03-30, 01:55:08](https://lobste.rs/s/mk6n0l/syntax_highlighting_with_tree_sitter) - [syntax highlighting with tree-sitter](https://dotat.at/@/2025-03-30-hilite.html)
* [2025-03-30, 01:42:04](https://lobste.rs/s/mekrcq/programmer_s_reading_list_100_articles_i) - [A Programmer's Reading List: 100 Articles I Enjoyed (1-50)](https://www.piglei.com/articles/en-programmer-reading-list-part-one/)
* [2025-03-30, 01:34:00](https://science.slashdot.org/story/25/03/29/2326255/did-life-on-earth-come-from-microlightning-between-charged-water-droplets?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Did Life on Earth Come from 'Microlightning' Between Charged Water Droplets?](https://science.slashdot.org/story/25/03/29/2326255/did-life-on-earth-come-from-microlightning-between-charged-water-droplets?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 00:34:00](https://tech.slashdot.org/story/25/03/29/2152217/reddits-50-stock-price-plunge-fails-to-entice-buyers-as-growth-slows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Reddit's 50% Stock-Price Plunge Fails to Entice Buyers as Growth Slows](https://tech.slashdot.org/story/25/03/29/2152217/reddits-50-stock-price-plunge-fails-to-entice-buyers-as-growth-slows?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 23:52:00](https://news.ycombinator.com/item?id=43519823) - [Towards fearless SIMD, 7 years later](https://linebender.org/blog/towards-fearless-simd/)
* [2025-03-29, 23:22:58](https://news.ycombinator.com/item?id=43519669) - [Self-contained Python scripts with uv](http://blog.dusktreader.dev/2025/03/29/self-contained-python-scripts-with-uv/)
* [2025-03-29, 23:20:36](https://lobste.rs/s/4jwyfk/self_contained_python_scripts_with_uv) - [Self-contained Python scripts with uv](http://blog.dusktreader.dev/2025/03/29/self-contained-python-scripts-with-uv/)
* [2025-03-29, 22:34:00](https://tech.slashdot.org/story/25/03/29/2126251/why-did-the-government-declare-war-on-my-adorable-tiny-truck?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Why Did the Government Declare War on My Adorable Tiny Truck?'](https://tech.slashdot.org/story/25/03/29/2126251/why-did-the-government-declare-war-on-my-adorable-tiny-truck?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 22:04:00](https://soylentnews.org/article.pl?sid=25/03/28/140245&from=rss) - [Certified Genuine Randomness](https://soylentnews.org/article.pl?sid=25/03/28/140245&from=rss)
* [2025-03-29, 21:34:02](https://news.ycombinator.com/item?id=43518917) - [Convert Linux to Windows](https://philipbohun.com/blog/0007.html)
* [2025-03-29, 21:26:32](https://news.ycombinator.com/item?id=43518866) - [Everyone knows all the apps on your phone](https://peabee.substack.com/p/everyone-knows-what-apps-you-use)
* [2025-03-29, 20:44:00](https://it.slashdot.org/story/25/03/29/0626254/are-tech-driven-career-meltdowns-hitting-generation-x?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Are Tech-Driven 'Career Meltdowns' Hitting Generation X?](https://it.slashdot.org/story/25/03/29/0626254/are-tech-driven-career-meltdowns-hitting-generation-x?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 20:43:42](https://news.ycombinator.com/item?id=43518560) - [Atop 2.11 heap problems](https://openwall.com/lists/oss-security/2025/03/29/1)
* [2025-03-29, 20:31:21](https://news.ycombinator.com/item?id=43518466) - [Commercials that David Lynch directed (2018)](https://www.openculture.com/2018/07/watch-commercials-david-lynch-directed-big-30-minute-compilation.html)
* [2025-03-29, 20:30:25](https://lobste.rs/s/2bbkse/thoughts_on_ecs) - [Thoughts on ECS](https://blog.voxagon.se/2025/03/28/thoughts-on-ecs.html)
* [2025-03-29, 20:00:33](https://news.ycombinator.com/item?id=43518220) - [Matrix Calculus (For Machine Learning and Beyond)](https://arxiv.org/abs/2501.14787)
* [2025-03-29, 19:34:00](https://mobile.slashdot.org/story/25/03/29/0236203/why-a-lost-cellphone-forced-an-airplane-to-turn-around-in-mid-flight?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Why a Lost Cellphone Forced an Airplane to Turn Around in Mid-Flight](https://mobile.slashdot.org/story/25/03/29/0236203/why-a-lost-cellphone-forced-an-airplane-to-turn-around-in-mid-flight?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 19:19:05](https://news.ycombinator.com/item?id=43517833) - [Utah becomes first US state to ban fluoride in its water](https://www.bbc.com/news/articles/c4gmggp2y99o)
* [2025-03-29, 18:45:22](https://lobste.rs/s/a8t2pp/ente_photos_v1) - [Ente Photos v1](https://ente.io/blog/v1)
* [2025-03-29, 18:42:43](https://news.ycombinator.com/item?id=43517576) - [Lvgl: Embedded graphics library to create beautiful UIs](https://github.com/lvgl/lvgl)
* [2025-03-29, 18:34:00](https://tech.slashdot.org/story/25/03/29/1831231/an-open-letter-to-meta-support-true-messaging-interoperability-with-xmpp?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['An Open Letter To Meta: Support True Messaging Interoperability With XMPP'](https://tech.slashdot.org/story/25/03/29/1831231/an-open-letter-to-meta-support-true-messaging-interoperability-with-xmpp?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 18:12:03](https://news.ycombinator.com/item?id=43517375) - [Paged Out #6 [pdf]](https://pagedout.institute/download/PagedOut_006.pdf)
* [2025-03-29, 18:00:48](https://news.ycombinator.com/item?id=43517301) - [Why Apple's Severance gets edited over remote desktop software](https://tedium.co/2025/03/29/severance-apple-remote-editing-weirdness/)
* [2025-03-29, 17:37:57](https://lobste.rs/s/ryacpm/vramfs_vram_based_file_system_for_linux) - [vramfs: VRAM based file system for Linux](https://github.com/Overv/vramfs)
* [2025-03-29, 17:34:00](https://hardware.slashdot.org/story/25/03/29/0536241/scientists-may-have-discovered-how-to-extract-power-from-the-earths-rotation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Scientists May Have Discovered How To Extract Power From the Earth's Rotation](https://hardware.slashdot.org/story/25/03/29/0536241/scientists-may-have-discovered-how-to-extract-power-from-the-earths-rotation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 17:17:00](https://soylentnews.org/article.pl?sid=25/03/28/1347215&from=rss) - [Nitisinone Makes Human Blood Lethal to Mosquitoes and Outlasts Ivermectin, Study Shows](https://soylentnews.org/article.pl?sid=25/03/28/1347215&from=rss)
* [2025-03-29, 17:06:30](https://lobste.rs/s/lmf0ot/horseless_intelligence) - [Horseless intelligence](https://nedbatchelder.com/blog/202503/horseless_intelligence.html)
* [2025-03-29, 16:38:01](https://news.ycombinator.com/item?id=43516733) - [Accessible open textbooks in math-heavy disciplines](https://richardzach.org/2025/03/accessible-open-textbooks-in-math-heavy-disciplines/)
* [2025-03-29, 16:34:00](https://science.slashdot.org/story/25/03/29/0315205/scientists-create-new-heavy-metal-molecule-berkelocene?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Scientists Create New Heavy-Metal Molecule:  'Berkelocene'](https://science.slashdot.org/story/25/03/29/0315205/scientists-create-new-heavy-metal-molecule-berkelocene?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 15:34:00](https://news.slashdot.org/story/25/03/29/0435221/as-the-arctics-winter-sea-ice-hits-a-new-record-low---what-happens-next?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [As the Arctic's Winter Sea Ice Hits a New Record Low - What Happens Next?](https://news.slashdot.org/story/25/03/29/0435221/as-the-arctics-winter-sea-ice-hits-a-new-record-low---what-happens-next?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 14:50:05](https://lobste.rs/s/dducfq/i_made_little_puzzle_game_about_rogue) - [I made a little puzzle game about a rogue chess knight](https://rakhim.exotext.com/knight-ride-a-game-about-rogue-chess-knight)
* [2025-03-29, 14:40:49](https://lobste.rs/s/6ue8gr/how_become_hacker_step_by_step_guide) - [How To Become A Hacker: A Step-By-Step Guide](https://sebastiancarlos.medium.com/how-to-become-a-hacker-a-step-by-step-guide-94902dc425b0)
* [2025-03-29, 14:34:00](https://it.slashdot.org/story/25/03/29/0555241/new-ubuntu-linux-security-bypasses-require-manual-mitigations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Ubuntu Linux Security Bypasses Require Manual Mitigations](https://it.slashdot.org/story/25/03/29/0555241/new-ubuntu-linux-security-bypasses-require-manual-mitigations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 13:58:59](https://lobste.rs/s/evrduc/where_do_bytes_go) - [where do the bytes go?](https://flak.tedunangst.com/post/where-do-the-bytes-go)
* [2025-03-29, 13:00:00](https://slashdot.org/story/25/03/29/101206/first-trial-of-generative-ai-therapy-shows-it-might-help-with-depression?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [First Trial of Generative AI Therapy Shows It Might Help With Depression](https://slashdot.org/story/25/03/29/101206/first-trial-of-generative-ai-therapy-shows-it-might-help-with-depression?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 12:33:00](https://soylentnews.org/article.pl?sid=25/03/28/1215217&from=rss) - [Record-Breaking Explosion by Black Hole Spotted](https://soylentnews.org/article.pl?sid=25/03/28/1215217&from=rss)
* [2025-03-29, 12:32:20](https://lobste.rs/s/govrnx/paged_out_issue_06) - [Paged out issue 06](https://pagedout.institute/download/PagedOut_006.pdf)
* [2025-03-29, 12:28:30](https://lobste.rs/s/xs2sdb/item_flow_part_1_new_unified_concept_for) - [Item Flow, Part 1: A new unified concept for layout](https://webkit.org/blog/16587/item-flow-part-1-a-new-unified-concept-for-layout/)
* [2025-03-29, 12:14:48](https://news.ycombinator.com/item?id=43514915) - [Koto Programming Language](https://koto.dev/)
* [2025-03-29, 12:04:55](https://lobste.rs/s/hg1kpm/pixelfed_leaks_private_posts_from_other) - [Pixelfed leaks private posts from other Fediverse instances](https://fokus.cool/2025/03/25/pixelfed-vulnerability.html)
* [2025-03-29, 10:58:44](https://lobste.rs/s/ypuwrw/building_search_engine_from_scratch_rust) - [Building a search engine from scratch, in Rust: part 1](https://jdrouet.github.io/posts/202503170800-search-engine-part-1/)
* [2025-03-29, 10:23:45](https://lobste.rs/s/fstz1l/language_server_for_postgres) - [A Language Server for Postgres](https://github.com/supabase-community/postgres-language-server)
* [2025-03-29, 10:00:00](https://science.slashdot.org/story/25/03/29/0950235/nasa-adds-spacexs-starship-to-launch-services-program-fleet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA Adds SpaceX's Starship To Launch Services Program Fleet](https://science.slashdot.org/story/25/03/29/0950235/nasa-adds-spacexs-starship-to-launch-services-program-fleet?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 07:49:00](https://soylentnews.org/article.pl?sid=25/03/28/1210259&from=rss) - [Open Source Devs Are Fighting AI Crawlers With Cleverness and Vengeance](https://soylentnews.org/article.pl?sid=25/03/28/1210259&from=rss)
* [2025-03-29, 04:09:33](https://lobste.rs/s/11chzy/broligarchs_don_t_speak_for_me) - [The \"broligarchs\" don't speak for me](https://ratfactor.com/tech-nope)
* [2025-03-29, 03:32:00](https://lobste.rs/s/qpymbd/openwrt_two_approval) - [OpenWrt Two Approval](https://openwrt.org/voting/2025-02-12-openwrt-two)
* [2025-03-29, 03:00:00](https://soylentnews.org/article.pl?sid=25/03/28/122201&from=rss) - [Security Vulnerability Fixed in Firefox 136.0.4, Firefox ESR 128.8.1, Firefox ESR 115.21.1](https://soylentnews.org/article.pl?sid=25/03/28/122201&from=rss)
* [2025-03-28, 22:16:00](https://soylentnews.org/article.pl?sid=25/03/28/1127247&from=rss) - [Napster Sold for $200+ Million in the Year 2025](https://soylentnews.org/article.pl?sid=25/03/28/1127247&from=rss)
* [2025-03-28, 20:03:13](https://lobste.rs/s/mmxm3v/organic_maps_github_has_gone_long_live) - [Organic Maps: GitHub has gone - long live Forgejo](https://mastodon.social/@organicmaps/114233788700982882)
* [2025-03-28, 17:32:00](https://soylentnews.org/article.pl?sid=25/03/27/1154254&from=rss) - [A Chip Has Broken the Critical Barrier That Could Ultimately Begin the Singularity](https://soylentnews.org/article.pl?sid=25/03/27/1154254&from=rss)
* [2025-03-28, 17:23:33](https://lobste.rs/s/uov26c/can_jank_beat_clojure_s_error_reporting) - [Can jank beat Clojure's error reporting?](https://jank-lang.org/blog/2025-03-28-error-reporting/)
* [2025-03-28, 17:04:21](https://news.ycombinator.com/item?id=43507725) - [Calculate Throughput with LLVM's Scheduling Model](https://myhsu.xyz/llvm-sched-interval-throughput/)
* [2025-03-28, 12:45:00](https://soylentnews.org/article.pl?sid=25/03/27/0346219&from=rss) - [SpaceX Reportedly Has a Secret Backdoor for Chinese Investment](https://soylentnews.org/article.pl?sid=25/03/27/0346219&from=rss)
* [2025-03-28, 10:32:18](https://news.ycombinator.com/item?id=43503670) - [Sim Daltonism: The color blindness simulator](https://michelf.ca/projects/sim-daltonism/)
* [2025-03-28, 07:56:00](https://soylentnews.org/article.pl?sid=25/03/26/1637237&from=rss) - [ReactOS 0.4.15 Released](https://soylentnews.org/article.pl?sid=25/03/26/1637237&from=rss)
* [2025-03-28, 03:13:00](https://soylentnews.org/article.pl?sid=25/03/26/1635243&from=rss) - [Order to Chaos: The Fascinating Math That All Pedestrians Need to Know](https://soylentnews.org/article.pl?sid=25/03/26/1635243&from=rss)
* [2025-03-27, 22:28:00](https://soylentnews.org/article.pl?sid=25/03/26/1631253&from=rss) - [Postel's Law and the Three Ring Circus](https://soylentnews.org/article.pl?sid=25/03/26/1631253&from=rss)
* [2025-03-27, 19:59:43](https://news.ycombinator.com/item?id=43497506) - [The way we're thinking about breaking changes is silly](https://welltypedwitch.bearblog.dev/the-way-were-thinking-about-breaking-changes-is-really-silly/)
* [2025-03-27, 17:46:00](https://soylentnews.org/article.pl?sid=25/03/26/1629222&from=rss) - [Eric Schmidt Suggests Countries Could Engage in Mutual Assured AI Malfunction (MAIM)](https://soylentnews.org/article.pl?sid=25/03/26/1629222&from=rss)
* [2025-03-27, 15:50:08](https://news.ycombinator.com/item?id=43494894) - [XAN: A Modern CSV-Centric Data Manipulation Toolkit for the Terminal](https://github.com/medialab/xan)
* [2025-03-27, 13:02:00](https://soylentnews.org/article.pl?sid=25/03/26/1623212&from=rss) - [Is Your Job Making You Happy ?](https://soylentnews.org/article.pl?sid=25/03/26/1623212&from=rss)
* [2025-03-27, 08:14:00](https://soylentnews.org/article.pl?sid=25/03/26/0319206&from=rss) - [Chicago-Sized Iceberg Hid Ancient Ecosystem](https://soylentnews.org/article.pl?sid=25/03/26/0319206&from=rss)
* [2025-03-27, 04:02:56](https://news.ycombinator.com/item?id=43490290) - [C. Elegans: The Worm That No Computer Scientist Can Crack](https://www.wired.com/story/openworm-worm-simulator-biology-code/)
* [2025-03-27, 03:26:00](https://soylentnews.org/article.pl?sid=25/03/26/038215&from=rss) - [EU OS Aims to Free the European Public Sector Desktop](https://soylentnews.org/article.pl?sid=25/03/26/038215&from=rss)
* [2025-03-27, 02:02:40](https://news.ycombinator.com/item?id=43489698) - [It's five grand a day to miss our S3 exit](https://world.hey.com/dhh/it-s-five-grand-a-day-to-miss-our-s3-exit-b8293563)
* [2025-03-27, 01:02:00](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss) - [The Search for Missing Plane MH370 is Back on](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss)
* [2025-03-26, 20:20:00](https://soylentnews.org/article.pl?sid=25/03/26/0237223&from=rss) - [Producing Wafers at TSMC Arizona is Only 10% More Expensive Than in Taiwan](https://soylentnews.org/article.pl?sid=25/03/26/0237223&from=rss)
* [2025-03-26, 18:51:00](https://news.ycombinator.com/item?id=43485514) - [The disappearance of Gaia, ESA spacecraft will be turned off on 27 March 2025](https://www.cosmos.esa.int/web/gaia/news)
* [2025-03-26, 16:41:18](https://news.ycombinator.com/item?id=43484100) - [Certified randomness using a trapped-ion quantum processor](https://www.nature.com/articles/s41586-025-08737-1)
* [2025-03-26, 15:35:00](https://soylentnews.org/article.pl?sid=25/03/26/0243240&from=rss) - [4-Day Work-Week UK Pilot Due in Tech Land by Early Summer](https://soylentnews.org/article.pl?sid=25/03/26/0243240&from=rss)
* [2025-03-26, 14:10:36](https://news.ycombinator.com/item?id=43482468) - [Some Reflections After a Month of Tracking My Own Online Activity](https://mcwhittemore.com/posts/page-activity-report-2025-03-20.html)
* [2025-03-26, 12:49:09](https://news.ycombinator.com/item?id=43481652) - [Bringing Record and Replay debugging everywhere on Linux](https://github.com/sidkshatriya/me/blob/master/008-rr-everywhere.md)
* [2025-03-26, 10:53:00](https://soylentnews.org/article.pl?sid=25/03/24/1817219&from=rss) - [European Coalition Pushes For Second Chips Act Funding To Boost Semiconductor Sector](https://soylentnews.org/article.pl?sid=25/03/24/1817219&from=rss)
* [2025-03-26, 06:10:00](https://soylentnews.org/article.pl?sid=25/03/24/1815205&from=rss) - [Harnessing Nature's Fractals for Flexible Electronics: Biomimetic Fabrication Technique Uses Leaf](https://soylentnews.org/article.pl?sid=25/03/24/1815205&from=rss)
* [2025-03-26, 01:25:00](https://soylentnews.org/article.pl?sid=25/03/24/1812238&from=rss) - [The 25 Years of Finnix](https://soylentnews.org/article.pl?sid=25/03/24/1812238&from=rss)
