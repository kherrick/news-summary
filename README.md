# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Technology Advancements

* [A First for Humanity Confirmed: NASA's DART Mission Slowed the Asteroid's Orbit](https://science.slashdot.org/story/26/03/08/004240/a-first-for-humanity-confirmed-nasas-dart-mission-slowed-the-asteroids-orbit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NASA's DART mission successfully altered an asteroid's orbit, a landmark achievement in planetary defense.

* [Japan Approves Stem-Cell Treatments For Parkinson's, Heart Failure In World Firsts](https://science.slashdot.org/story/26/03/07/2249259/japan-approves-stem-cell-treatments-for-parkinsons-heart-failure-in-world-firsts?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Japan has approved groundbreaking stem-cell therapies, marking advancements in treatments for Parkinson's and heart failure.

* [Astronomers Think They've Spotted a Galaxy That's 99.9% Dark Matter](https://science.slashdot.org/story/26/03/07/0753224/astronomers-think-theyve-spotted-a-galaxy-thats-999-dark-matter?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Scientists observe a galaxy believed to consist almost entirely of dark matter, opening doors to new cosmic insights.

* [How Anthropic's Claude Helped Mozilla Improve Firefox's Security](https://news.slashdot.org/story/26/03/07/204222/how-anthropics-claude-helped-mozilla-improve-firefoxs-security?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Mozilla partnered with AI Claude on groundbreaking enhancements to Firefox’s security measures.

## AI, Ethics and Innovations

* [Lawsuit: Google Gemini Sent Man on Violent Missions, Set Suicide 'Countdown'](https://soylentnews.org/article.pl?sid=26/03/06/1541249&from=rss) .--- Unexpected causal debates dominating killings directly involving AI campaigns.

* OpenAI Robotics Lead dept echoes dept fruastractions  pentogtonAssocitions with loards absent checking decisions

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

* [2026-03-08, 12:55:05](https://news.ycombinator.com/item?id=47296932) - [Show HN: I logged Gemini&apos;s stock predictions for 38 days to study LLM drift](https://huggingface.co/datasets/louidev/glassballai)
* [2026-03-08, 12:50:13](https://lobste.rs/s/guir7q/adm_grace_hopper_on_future_possibilities) - [Adm. Grace Hopper on Future Possibilities: Data, Hardware, Software, and People (1982)](https://www.nsa.gov/helpful-links/nsa-foia/declassification-transparency-initiatives/historical-releases/view/article/3880193/capt-grace-hopper-on-future-possibilities-data-hardware-software-and-people-1982/)
* [2026-03-08, 12:40:14](https://news.ycombinator.com/item?id=47296849) - [I ported Linux to the PS5 and turned it into a Steam Machine](https://xcancel.com/theflow0/status/2030011206040256841)
* [2026-03-08, 12:30:31](https://news.ycombinator.com/item?id=47296787) - [You Don&apos;t Need a Vector Database](https://vecstore.app/blog/you-dont-need-a-vector-database)
* [2026-03-08, 11:41:17](https://news.ycombinator.com/item?id=47296547) - [Ask HN: How to Be Alone?](https://news.ycombinator.com/item?id=47296547)
* [2026-03-08, 11:34:00](https://yro.slashdot.org/story/26/03/07/2058213/ai-ceos-worry-the-government-will-nationalize-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI CEOs Worry the Government Will Nationalize AI](https://yro.slashdot.org/story/26/03/07/2058213/ai-ceos-worry-the-government-will-nationalize-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 11:27:41](https://lobste.rs/s/hekrwd/if_it_quacks_like_package_manager) - [If It Quacks Like a Package Manager](https://nesbitt.io/2026/03/08/if-it-quacks-like-a-package-manager.html)
* [2026-03-08, 11:10:14](https://lobste.rs/s/kgpyat/put_zip_code_first) - [Put the ZIP code first](https://zipcodefirst.com/)
* [2026-03-08, 11:04:04](https://news.ycombinator.com/item?id=47296355) - [Show HN: Eyot, A programming language where the GPU is just another thread](https://cowleyforniastudios.com/2026/03/08/announcing-eyot/)
* [2026-03-08, 10:54:32](https://news.ycombinator.com/item?id=47296302) - [Apple&apos;s 512GB Mac Studio vanishes, a quiet acknowledgment of the RAM shortage](https://arstechnica.com/gadgets/2026/03/apples-512gb-mac-studio-vanishes-a-quiet-acknowledgement-of-the-ram-shortage/)
* [2026-03-08, 10:13:00](https://soylentnews.org/article.pl?sid=26/03/06/1545254&amp;from=rss) - [Would Aliens Do Physics, or is Science a Human Invention?](https://soylentnews.org/article.pl?sid=26/03/06/1545254&amp;from=rss)
* [2026-03-08, 09:24:54](https://news.ycombinator.com/item?id=47295837) - [Notes on Writing WASM](https://notes.brooklynzelenka.com/Blog/Notes-on-Writing-Wasm)
* [2026-03-08, 08:34:00](https://yro.slashdot.org/story/26/03/08/015225/daylight-saving-time-ritual-continues-but-are-there-alternatives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Daylight Saving Time Ritual Continues. But Are There Alternatives?](https://yro.slashdot.org/story/26/03/08/015225/daylight-saving-time-ritual-continues-but-are-there-alternatives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 08:11:50](https://news.ycombinator.com/item?id=47295537) - [SWE-CI: Evaluating Agent Capabilities in Maintaining Codebases via CI](https://arxiv.org/abs/2603.03823)
* [2026-03-08, 07:16:15](https://news.ycombinator.com/item?id=47295279) - [Show HN: Curiosity – DIY 6\&quot; Newtonian Reflector Telescope](https://curiosity-telescope.vercel.app/)
* [2026-03-08, 06:01:26](https://news.ycombinator.com/item?id=47294924) - [Sem – Semantic version control. Entity-level diffs on top of Git](https://github.com/ataraxy-labs/sem)
* [2026-03-08, 05:24:00](https://soylentnews.org/article.pl?sid=26/03/06/1541249&amp;from=rss) - [Lawsuit: Google Gemini Sent Man on Violent Missions, Set Suicide “Countdown”](https://soylentnews.org/article.pl?sid=26/03/06/1541249&amp;from=rss)
* [2026-03-08, 04:44:00](https://tech.slashdot.org/story/26/03/07/0321225/as-us-tariffs-hit-evs-hyundai-discontinues-its-cheapest-ioniq-6-while-kia-delays-ev6-adn-ev9-gt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As US Tariffs Hit EVs, Hyundai Discontinues Its Cheapest IONIQ 6, While Kia Delays EV6 adn EV9 GT](https://tech.slashdot.org/story/26/03/07/0321225/as-us-tariffs-hit-evs-hyundai-discontinues-its-cheapest-ioniq-6-while-kia-delays-ev6-adn-ev9-gt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 03:07:32](https://lobste.rs/s/nylilr/juno_j_web_ide) - [Juno - J Web IDE](https://jsoftware.github.io/juno/app/)
* [2026-03-08, 02:34:00](https://entertainment.slashdot.org/story/26/03/08/0150256/steven-spielberg--dinosaurs--netflix--mixed-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steven Spielberg + Dinosaurs + Netflix = Mixed Reviews](https://entertainment.slashdot.org/story/26/03/08/0150256/steven-spielberg--dinosaurs--netflix--mixed-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 02:27:29](https://lobste.rs/s/w047bo/coloring_for_colorblindness) - [Coloring for Colorblindness](https://davidmathlogic.com/colorblind)
* [2026-03-08, 02:16:02](https://news.ycombinator.com/item?id=47293682) - [MonoGame: A .NET framework for making cross-platform games](https://github.com/MonoGame/MonoGame)
* [2026-03-08, 02:03:13](https://lobste.rs/s/8dz5tt/primitive_proposal_for_human_interface) - [Primitive proposal for human-interface improvement on Lobste.rs](https://www.figma.com/proto/wyDB0nvSiZCmvlsSLCf4eY/Websites?node-id=244-252&amp;p=f&amp;t=hi5Tfa6PoucMf2hW-1&amp;scaling=scale-down-width&amp;content-scaling=fixed&amp;page-id=140%3A126)
* [2026-03-08, 01:35:21](https://news.ycombinator.com/item?id=47293415) - [Warn about PyPy being unmaintained](https://github.com/astral-sh/uv/pull/17643)
* [2026-03-08, 00:58:16](https://lobste.rs/s/bjb3dz/window_chrome_our_discontent) - [The Window Chrome of Our Discontent](https://pxlnv.com/blog/window-chrome-of-our-discontent/)
* [2026-03-08, 00:44:32](https://news.ycombinator.com/item?id=47293119) - [Cloud VM benchmarks 2026](https://devblog.ecuadors.net/cloud-vm-benchmarks-2026-performance-price-1i1m.html)
* [2026-03-08, 00:39:00](https://soylentnews.org/article.pl?sid=26/03/06/1538243&amp;from=rss) - [Clueless Cops Post Seized Crypto Wallet Password. $5M Quickly Stolen.](https://soylentnews.org/article.pl?sid=26/03/06/1538243&amp;from=rss)
* [2026-03-08, 00:16:00](https://science.slashdot.org/story/26/03/08/004240/a-first-for-humanity-confirmed-nasas-dart-mission-slowed-the-asteroids-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A First for Humanity Confirmed: NASA&apos;s DART Mission Slowed the Asteroid&apos;s Orbit](https://science.slashdot.org/story/26/03/08/004240/a-first-for-humanity-confirmed-nasas-dart-mission-slowed-the-asteroids-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 00:13:00](https://lobste.rs/s/e174yb/mujs_lightweight_javascript) - [MuJS - lightweight Javascript interpreter designed for embedding in other software](https://mujs.com/)
* [2026-03-07, 23:32:17](https://news.ycombinator.com/item?id=47292522) - [How to run Qwen 3.5 locally](https://unsloth.ai/docs/models/qwen3.5)
* [2026-03-07, 23:16:00](https://science.slashdot.org/story/26/03/07/2249259/japan-approves-stem-cell-treatments-for-parkinsons-heart-failure-in-world-firsts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Approves Stem-Cell Treatments For Parkinson&apos;s, Heart Failure In World Firsts](https://science.slashdot.org/story/26/03/07/2249259/japan-approves-stem-cell-treatments-for-parkinsons-heart-failure-in-world-firsts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 22:16:16](https://lobste.rs/s/c7tzjs/perfect_types_with_sethtml) - [Perfect types with `setHTML()`](https://frederikbraun.de/perfect-types-with-sethtml.html)
* [2026-03-07, 22:16:00](https://hardware.slashdot.org/story/26/03/07/2213221/openais-head-of-robotics-resigns-says-pentagon-deal-was-rushed-without-the-guardrails-defined?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s Head of Robotics Resigns, Says Pentagon Deal Was &apos;Rushed Without the Guardrails Defined&apos;](https://hardware.slashdot.org/story/26/03/07/2213221/openais-head-of-robotics-resigns-says-pentagon-deal-was-rushed-without-the-guardrails-defined?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 22:15:12](https://lobste.rs/s/w5czhm/nix_is_lie_s_ok) - [Nix is a lie, and that’s ok](https://fzakaria.com/2026/03/07/nix-is-a-lie-and-that-s-ok)
* [2026-03-07, 21:25:39](https://lobste.rs/s/dnhs6a/typst_meetup_2026_keynote) - [Typst Meetup 2026: Keynote](https://youtu.be/WOQXL6vRrJs)
* [2026-03-07, 21:07:00](https://science.slashdot.org/story/26/03/07/0753224/astronomers-think-theyve-spotted-a-galaxy-thats-999-dark-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Think They&apos;ve Spotted a Galaxy That&apos;s 99.9% Dark Matter](https://science.slashdot.org/story/26/03/07/0753224/astronomers-think-theyve-spotted-a-galaxy-thats-999-dark-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 20:43:51](https://news.ycombinator.com/item?id=47291292) - [CasNum](https://github.com/0x0mer/CasNum)
* [2026-03-07, 20:22:45](https://news.ycombinator.com/item?id=47291123) - [Autoresearch: Agents researching on single-GPU nanochat training automatically](https://github.com/karpathy/autoresearch)
* [2026-03-07, 20:07:00](https://news.slashdot.org/story/26/03/07/204222/how-anthropics-claude-helped-mozilla-improve-firefoxs-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Anthropic&apos;s Claude Helped Mozilla Improve Firefox&apos;s Security](https://news.slashdot.org/story/26/03/07/204222/how-anthropics-claude-helped-mozilla-improve-firefoxs-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss) - [Congress Extends ISS and Tells NASA to Get Moving on Private Space Stations](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss)
* [2026-03-07, 19:03:04](https://lobste.rs/s/hgqhp4/my_favorite_39c3_talks) - [My Favorite 39C3 Talks](https://asindu.xyz/my-favorite-39c3-talks/)
* [2026-03-07, 18:34:00](https://tech.slashdot.org/story/26/03/07/0521211/military-gps-jamming-is-interfering-with-the-navigation-systems-of-commercial-ships?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Military GPS Jamming is Interfering with the Navigation Systems of Commercial Ships](https://tech.slashdot.org/story/26/03/07/0521211/military-gps-jamming-is-interfering-with-the-navigation-systems-of-commercial-ships?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 18:32:05](https://news.ycombinator.com/item?id=47290198) - [The surprising whimsy of the Time Zone Database](https://muddy.jprs.me/links/2026-03-06-the-surprising-whimsy-of-the-time-zone-database/)
* [2026-03-07, 17:34:00](https://hardware.slashdot.org/story/26/03/07/0649230/seagate-just-unleashed-44tb-hard-drives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Seagate Just Unleashed 44TB Hard Drives](https://hardware.slashdot.org/story/26/03/07/0649230/seagate-just-unleashed-44tb-hard-drives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 17:04:46](https://lobste.rs/s/xndrk0/usage_specification) - [Usage Specification](https://usage.jdx.dev/spec/)
* [2026-03-07, 16:55:18](https://news.ycombinator.com/item?id=47289311) - [A decade of Docker containers](https://cacm.acm.org/research/a-decade-of-docker-containers/)
* [2026-03-07, 16:52:29](https://lobste.rs/s/2zk3oe/pushing_pulling_three_reactivity) - [Pushing and Pulling: Three Reactivity Algorithms](https://jonathan-frere.com/posts/reactivity-algorithms/)
* [2026-03-07, 16:34:00](https://tech.slashdot.org/story/26/03/07/0616225/first-solar-car-rolls-off-validation-assembly-line-at-aptera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Solar Car Rolls Off Validation Assembly Line At Aptera](https://tech.slashdot.org/story/26/03/07/0616225/first-solar-car-rolls-off-validation-assembly-line-at-aptera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 16:28:12](https://lobste.rs/s/nfdkkg/implicitcad_programmatic_cad_haskell) - [ImplicitCAD –  Programmatic CAD in Haskell](https://implicitcad.org/)
* [2026-03-07, 16:03:22](https://lobste.rs/s/u8x6xv/ki_editor_multi_cursor_structural_editor) - [Ki Editor | Multi-cursor structural editor](https://ki-editor.org/)
* [2026-03-07, 15:34:00](https://news.slashdot.org/story/26/03/07/0251222/prediction-market-kalshi-sued-for-not-paying-54-million-for-bets-on-khameneis-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Prediction Market &apos;Kalshi&apos; Sued for Not Paying $54 Million for Bets on Khamenei&apos;s Death](https://news.slashdot.org/story/26/03/07/0251222/prediction-market-kalshi-sued-for-not-paying-54-million-for-bets-on-khameneis-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 15:07:02](https://lobste.rs/s/ekhniu/rewriting_our_database_rust) - [Rewriting Our Database in Rust](https://medium.com/airtable-eng/rewriting-our-database-in-rust-f64e37a482ef)
* [2026-03-07, 15:07:00](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss) - [Starlink Mobile Teases ‘5G Speeds From Space With 100X the Data Density’](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss)
* [2026-03-07, 13:12:40](https://news.ycombinator.com/item?id=47287344) - [Yoghurt delivery women combatting loneliness in Japan](https://www.bbc.com/travel/article/20260302-the-yoghurt-delivery-women-combatting-loneliness-in-japan)
* [2026-03-07, 13:00:00](https://yro.slashdot.org/story/26/03/06/2116214/indonesia-to-ban-social-media-for-children-under-16?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Indonesia To Ban Social Media For Children Under 16](https://yro.slashdot.org/story/26/03/06/2116214/indonesia-to-ban-social-media-for-children-under-16?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 11:21:36](https://lobste.rs/s/9o02lu/how_apple_used_design_its_laptops_for) - [How Apple Used to Design Its Laptops for Repairability](https://www.ifixit.com/News/115995/how-apple-used-to-design-its-laptops-for-repairability)
* [2026-03-07, 10:48:43](https://news.ycombinator.com/item?id=47286408) - [Files are the interface humans and agents interact with](https://madalitso.me/notes/why-everyone-is-talking-about-filesystems/)
* [2026-03-07, 10:21:00](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss) - [What Crystals Older Than the Sun Reveal About the Start of the Solar System](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss)
* [2026-03-07, 10:00:00](https://tech.slashdot.org/story/26/03/07/0038223/china-releases-first-homegrown-quantum-computing-os?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Releases First Homegrown Quantum Computing OS](https://tech.slashdot.org/story/26/03/07/0038223/china-releases-first-homegrown-quantum-computing-os?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 09:39:13](https://lobste.rs/s/azkace/lenovo_s_new_t_series_thinkpads_score_10_10) - [Lenovo’s New T-Series ThinkPads Score 10/10 for Repairability](https://www.ifixit.com/News/115827/new-thinkpads-score-perfect-10-repairability)
* [2026-03-07, 08:47:27](https://lobste.rs/s/upwrm3/internals_postgresql) - [The Internals of PostgreSQL](https://www.interdb.jp/pg/)
* [2026-03-07, 05:40:00](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss) - [Holy C Batman, He Built an Operating System!](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss)
* [2026-03-07, 05:34:58](https://lobste.rs/s/osvwbe/first_ai_agent_worm_is_months_away_if) - [The first AI agent worm is months away, if that](https://dustycloud.org/blog/the-first-ai-agent-worm-is-months-away-if-that/)
* [2026-03-07, 01:21:47](https://news.ycombinator.com/item?id=47283365) - [Some Words on WigglyPaint](https://beyondloom.com/blog/onwigglypaint.html)
* [2026-03-07, 00:53:00](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss) - [vscreen: A Real Browser for AI Agents, Streamed Live via WebRTC](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss)
* [2026-03-07, 00:43:00](https://lobste.rs/s/drtput/some_words_on_wigglypaint) - [Some Words on WigglyPaint](https://beyondloom.com/blog/onwigglypaint.html)
* [2026-03-07, 00:30:08](https://lobste.rs/s/qorrgl/i_m_not_consulting_llm) - [I&apos;m not consulting an LLM](https://lr0.org/blog/p/gpt/)
* [2026-03-06, 23:38:43](https://lobste.rs/s/mktb13/spa_vs_hypermedia_real_world_performance) - [SPA vs. Hypermedia: Real-World Performance Under Load](https://zweiundeins.gmbh/en/methodology/spa-vs-hypermedia-real-world-performance-under-load)
* [2026-03-06, 20:39:27](https://lobste.rs/s/traf1f/jank_is_off_great_start_2026) - [jank is off to a great start in 2026](https://jank-lang.org/blog/2026-03-06-great-start/)
* [2026-03-06, 20:11:00](https://soylentnews.org/article.pl?sid=26/03/05/233230&amp;from=rss) - [Reminder:  VPNs Can&apos;t Make You Anonymous Online](https://soylentnews.org/article.pl?sid=26/03/05/233230&amp;from=rss)
* [2026-03-06, 15:30:00](https://soylentnews.org/article.pl?sid=26/03/05/2246218&amp;from=rss) - [Destroyed Servers and DoS Attacks: What Can Happen When OpenClaw AI Agents Interact](https://soylentnews.org/article.pl?sid=26/03/05/2246218&amp;from=rss)
* [2026-03-06, 10:43:00](https://soylentnews.org/article.pl?sid=26/03/05/1853251&amp;from=rss) - [As Moon Interest Heats Up, Two Companies Unveil Plans for a Lunar \&quot;Harvester\&quot;](https://soylentnews.org/article.pl?sid=26/03/05/1853251&amp;from=rss)
* [2026-03-06, 07:17:48](https://news.ycombinator.com/item?id=47271988) - [Dumping Lego NXT firmware off of an existing brick (2025)](https://arcanenibble.github.io/dumping-lego-nxt-firmware-off-of-an-existing-brick.html)
* [2026-03-06, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/05/1850205&amp;from=rss) - [DOS Memory Management](https://soylentnews.org/article.pl?sid=26/03/05/1850205&amp;from=rss)
* [2026-03-06, 01:10:00](https://soylentnews.org/article.pl?sid=26/03/05/1846224&amp;from=rss) - [Micron Sampling First 256GB SOCAMM2 Memory Packages — 2TB of RAM Per CPU for Datacenters](https://soylentnews.org/article.pl?sid=26/03/05/1846224&amp;from=rss)
* [2026-03-05, 20:25:00](https://soylentnews.org/article.pl?sid=26/03/05/0529259&amp;from=rss) - [To Update Blobs or Not to Update Blobs](https://soylentnews.org/article.pl?sid=26/03/05/0529259&amp;from=rss)
* [2026-03-05, 15:42:00](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss) - [AI Art Isn&apos;t Art, or Copyrightable Art Anyway](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss)
* [2026-03-05, 10:52:00](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss) - [Drones Attack Several AWS Middle East Region Data Centers Amid Iran War, Leading to Outages](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss)
* [2026-03-05, 10:23:15](https://news.ycombinator.com/item?id=47259961) - [Emacs internals: Deconstructing Lisp_Object in C (Part 2)](https://thecloudlet.github.io/blog/project/emacs-02/)
* [2026-03-05, 06:11:00](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss) - [No Fooling: NASA Targets April 1 for Artemis II Launch to the Moon](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss)
* [2026-03-05, 00:23:00](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss) - [Anonymous Credentials: an Illustrated Primer](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss)
* [2026-03-04, 19:39:00](https://soylentnews.org/article.pl?sid=26/03/04/1320238&amp;from=rss) - [Small Web, IndieWeb, Gemini… a Guide to the Retro-Web](https://soylentnews.org/article.pl?sid=26/03/04/1320238&amp;from=rss)
* [2026-03-04, 16:16:23](https://news.ycombinator.com/item?id=47249685) - [Digital Iris [video]](https://www.youtube.com/watch?v=Kg_2MAgS_pE)
* [2026-03-04, 15:42:49](https://news.ycombinator.com/item?id=47249139) - [Rijksmuseum researchers discover new painting by Rembrandt van Rijn](https://www.rijksmuseum.nl/en/press/press-releases/rijksmuseum-researchers-discover-new-painting-by-rembrandt-van-rijn)
* [2026-03-04, 14:53:00](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss) - [LLMs Can Unmask Pseudonymous Users at Scale With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss)
* [2026-03-04, 14:24:24](https://news.ycombinator.com/item?id=47247762) - [Show HN: A weird thing that detects your pulse from the browser video](https://pulsefeedback.io/)
* [2026-03-04, 14:16:31](https://news.ycombinator.com/item?id=47247644) - [In 1985 Maxell built a bunch of life-size robots for its bad floppy ad](https://buttondown.com/suchbadtechads/archive/maxell-life-size-robots/)
* [2026-03-04, 13:39:34](https://news.ycombinator.com/item?id=47247248) - [The Collective Ambition Behind Odysseus, a Game-Changing Sci-Fi Larp](https://mssv.net/2025/03/19/the-collective-ambition-behind-odysseus/)
* [2026-03-04, 10:07:00](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss) - [Medical Journal the Lancet Blasts RFK Jr.’s Health Work as a Failure](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss)
* [2026-03-04, 09:24:13](https://news.ycombinator.com/item?id=47245061) - [From RGB to L*a*b* color space (2024)](https://kaizoudou.com/from-rgb-to-lab-color-space/)
* [2026-03-04, 05:22:00](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss) - [&apos;Cancel ChatGPT&apos;: AI Boycott Surges After OpenAI-Pentagon Military Deal](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss)
* [2026-03-04, 00:30:00](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss) - [Entry-Level PC Market To ‘Disappear’ By 2028 — Rising Memory Prices Pile More Strain On Consumer PC ](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss)
