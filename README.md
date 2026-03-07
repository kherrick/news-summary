# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Computing

* [Seagate Just Unleashed 44TB Hard Drives](https://hardware.slashdot.org/story/26/03/07/0649230/seagate-just-unleashed-44tb-hard-drives?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Seagate has introduced their latest 44TB hard drives aimed at providing massive storage solutions, emphasizing storage evolution and the demand for high capacity devices.

* [New Chapter for the Nix Language, Courtesy of WebAssembly](https://determinate.systems/blog/builtins-wasm/) - WebAssembly brings a transformative chapter to the Nix programming language, enhancing its capabilities and potential in the evolving software development domain.

* [China Releases First Homegrown Quantum Computing OS](https://tech.slashdot.org/story/26/03/07/0038223/china-releases-first-homegrown-quantum-computing-os?utm_source=rss1.0mainlinkanon&utm_medium=feed) - China has achieved a significant technological milestone by releasing its first ever domestically developed quantum computing operating system.

* [Ki Editor | Multi-cursor structural editor](https://ki-editor.org/) - An innovative text editor that leverages multi-cursor editing for improved efficiency and intuitive performance.

* [µJS, a 5KB Alternative to Htmx and Turbo with Zero Dependencies](https://mujs.org) - Introducing µJS, a lightweight JavaScript library that simplifies development and offers an alternative to widely-used libraries with zero dependencies.

## Artificial Intelligence and Machine Learning

* [Verification debt: the hidden cost of AI-generated code](https://fazy.medium.com/agentic-coding-ais-adolescence-b0d13452f981) - A comprehensive discussion on the latent challenges and quality assurance issues arising from relying on AI-generated code.

* [The First AI Agent Worm Is Months Away, If That](https://dustycloud.org/blog/the-first-ai-agent-worm-is-months-away-if-that/) - Insight into the potential for autonomous AI agents to evolve into malicious entities within months.

* [Destroyed Servers and DoS Attacks: What Can Happen When OpenClaw AI Agents Interact](https://soylentnews.org/article.pl?sid=26/03/05/2246218&from=rss) - A reflection on destructive scenarios tied to AI agent interactions, highlighting risks of server outages and denial of service attacks.

## Social Issues and Policy

* [Indonesia To Ban Social Media For Children Under 16](https://yro.slashdot.org/story/26/03/06/2116214/indonesia-to-ban-social-media-for-children-under-16?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A policy proposal by Indonesia that introduces restrictions on social media usage for children under 16, aiming to address concerns about its impact on youth.

* [Prediction Market 'Kalshi' Sued for Not Paying $54 Million for Bets on Khamenei's Death](https://news.slashdot.org/story/26/03/07/0251222/prediction-market-kalshi-sued-for-not-paying-54-million-for-bets-on-khamenei-s-death?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Legal troubles for prediction market Kalshi as users dispute unpaid winnings related to bets about Iranian Supreme Leader Khamenei.

## Science and Space

* [What Crystals Older Than the Sun Reveal About the Start of the Solar System](https://soylentnews.org/article.pl?sid=26/03/06/1335212&from=rss) - A fascinating study of ancient crystals that sheds light on the early formation and events of our solar system.

* [The Millisecond That Could Change Cancer Treatment](https://spectrum.ieee.org/flash-radiotherapy) - Exploration of how flash radiotherapy delivered within a millisecond could revolutionize cancer care by targeting tumors more effectively.

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

* [2026-03-07, 19:03:04](https://lobste.rs/s/hgqhp4/my_favorite_39c3_talks) - [My Favorite 39C3 Talks](https://asindu.xyz/my-favorite-39c3-talks/)
* [2026-03-07, 18:34:00](https://tech.slashdot.org/story/26/03/07/0521211/military-gps-jamming-is-interfering-with-the-navigation-systems-of-commercial-ships?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Military GPS Jamming is Interfering with the Navigation Systems of Commercial Ships](https://tech.slashdot.org/story/26/03/07/0521211/military-gps-jamming-is-interfering-with-the-navigation-systems-of-commercial-ships?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 17:34:00](https://hardware.slashdot.org/story/26/03/07/0649230/seagate-just-unleashed-44tb-hard-drives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Seagate Just Unleashed 44TB Hard Drives](https://hardware.slashdot.org/story/26/03/07/0649230/seagate-just-unleashed-44tb-hard-drives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 17:08:30](https://news.ycombinator.com/item?id=47289406) - [Verification debt: the hidden cost of AI-generated code](https://fazy.medium.com/agentic-coding-ais-adolescence-b0d13452f981)
* [2026-03-07, 17:04:46](https://lobste.rs/s/xndrk0/usage_specification) - [Usage Specification](https://usage.jdx.dev/spec/)
* [2026-03-07, 17:01:14](https://news.ycombinator.com/item?id=47289357) - [SigNoz (YC W21, open source Datadog) Is Hiring across roles](https://signoz.io/careers)
* [2026-03-07, 16:56:53](https://news.ycombinator.com/item?id=47289331) - [The Banality of Surveillance](https://benn.substack.com/p/the-banality-of-surveillance)
* [2026-03-07, 16:55:18](https://news.ycombinator.com/item?id=47289311) - [A Decade of Docker Containers](https://cacm.acm.org/research/a-decade-of-docker-containers/)
* [2026-03-07, 16:52:29](https://lobste.rs/s/2zk3oe/pushing_pulling_three_reactivity) - [Pushing and Pulling: Three Reactivity Algorithms](https://jonathan-frere.com/posts/reactivity-algorithms/)
* [2026-03-07, 16:34:00](https://tech.slashdot.org/story/26/03/07/0616225/first-solar-car-rolls-off-validation-assembly-line-at-aptera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Solar Car Rolls Off Validation Assembly Line At Aptera](https://tech.slashdot.org/story/26/03/07/0616225/first-solar-car-rolls-off-validation-assembly-line-at-aptera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 16:28:12](https://lobste.rs/s/nfdkkg/implicitcad_programmatic_cad_haskell) - [ImplicitCAD –  Programmatic CAD in Haskell](https://implicitcad.org/)
* [2026-03-07, 16:03:22](https://lobste.rs/s/u8x6xv/ki_editor_multi_cursor_structural_editor) - [Ki Editor | Multi-cursor structural editor](https://ki-editor.org/)
* [2026-03-07, 15:34:00](https://news.slashdot.org/story/26/03/07/0251222/prediction-market-kalshi-sued-for-not-paying-54-million-for-bets-on-khameneis-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Prediction Market &apos;Kalshi&apos; Sued for Not Paying $54 Million for Bets on Khamenei&apos;s Death](https://news.slashdot.org/story/26/03/07/0251222/prediction-market-kalshi-sued-for-not-paying-54-million-for-bets-on-khameneis-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 15:33:36](https://news.ycombinator.com/item?id=47288533) - [The Millisecond That Could Change Cancer Treatment](https://spectrum.ieee.org/flash-radiotherapy)
* [2026-03-07, 15:07:02](https://lobste.rs/s/ekhniu/rewriting_our_database_rust) - [Rewriting Our Database in Rust](https://medium.com/airtable-eng/rewriting-our-database-in-rust-f64e37a482ef)
* [2026-03-07, 15:07:00](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss) - [Starlink Mobile Teases ‘5G Speeds From Space With 100X the Data Density’](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss)
* [2026-03-07, 14:34:16](https://news.ycombinator.com/item?id=47288007) - [Show HN: ANSI-Saver – A macOS Screensaver](https://github.com/lardissone/ansi-saver)
* [2026-03-07, 14:10:17](https://news.ycombinator.com/item?id=47287792) - [PC processors entered the Gigahertz era today in the year 2000 with AMD&apos;s Athlon](https://www.tomshardware.com/pc-components/cpus/pc-processors-entered-the-gigahertz-era-today-in-the-year-2000-with-amds-athlon-amd-hit-marketing-gold-with-its-1-ghz-athlon-beat-intel-by-a-nose)
* [2026-03-07, 14:06:46](https://news.ycombinator.com/item?id=47287763) - [Tinnitus Is Connected to Sleep](https://www.sciencealert.com/tinnitus-is-somehow-connected-to-a-crucial-bodily-function)
* [2026-03-07, 13:32:44](https://lobste.rs/s/jreugl/how_stop_fighting_with_coherence_start) - [How to stop fighting with coherence and start writing context-generic trait impls](https://contextgeneric.dev/blog/rustlab-2025-coherence)
* [2026-03-07, 13:12:40](https://news.ycombinator.com/item?id=47287344) - [The yoghurt delivery women combatting loneliness in Japan](https://www.bbc.com/travel/article/20260302-the-yoghurt-delivery-women-combatting-loneliness-in-japan)
* [2026-03-07, 13:00:00](https://yro.slashdot.org/story/26/03/06/2116214/indonesia-to-ban-social-media-for-children-under-16?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Indonesia To Ban Social Media For Children Under 16](https://yro.slashdot.org/story/26/03/06/2116214/indonesia-to-ban-social-media-for-children-under-16?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 11:21:36](https://lobste.rs/s/9o02lu/how_apple_used_design_its_laptops_for) - [How Apple Used to Design Its Laptops for Repairability](https://www.ifixit.com/News/115995/how-apple-used-to-design-its-laptops-for-repairability)
* [2026-03-07, 10:48:43](https://news.ycombinator.com/item?id=47286408) - [Filesystems Are Having a Moment](https://madalitso.me/notes/why-everyone-is-talking-about-filesystems/)
* [2026-03-07, 10:29:13](https://news.ycombinator.com/item?id=47286311) - [Ki Editor - an editor that operates on the AST](https://ki-editor.org/)
* [2026-03-07, 10:21:00](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss) - [What Crystals Older Than the Sun Reveal About the Start of the Solar System](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss)
* [2026-03-07, 10:00:00](https://tech.slashdot.org/story/26/03/07/0038223/china-releases-first-homegrown-quantum-computing-os?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Releases First Homegrown Quantum Computing OS](https://tech.slashdot.org/story/26/03/07/0038223/china-releases-first-homegrown-quantum-computing-os?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 09:39:13](https://lobste.rs/s/azkace/lenovo_s_new_t_series_thinkpads_score_10_10) - [Lenovo’s New T-Series ThinkPads Score 10/10 for Repairability](https://www.ifixit.com/News/115827/new-thinkpads-score-perfect-10-repairability)
* [2026-03-07, 09:18:40](https://news.ycombinator.com/item?id=47285960) - [Uploading Pirated Books via BitTorrent Qualifies as Fair Use, Meta Argues](https://torrentfreak.com/uploading-pirated-books-via-bittorrent-qualifies-as-fair-use-meta/)
* [2026-03-07, 08:59:11](https://news.ycombinator.com/item?id=47285876) - [Show HN: µJS, a 5KB alternative to Htmx and Turbo with zero dependencies](https://mujs.org)
* [2026-03-07, 08:53:47](https://news.ycombinator.com/item?id=47285846) - [QGIS 4.0](https://changelog.qgis.org/en/version/4.0/)
* [2026-03-07, 08:47:27](https://lobste.rs/s/upwrm3/internals_postgresql) - [The Internals of PostgreSQL](https://www.interdb.jp/pg/)
* [2026-03-07, 08:13:46](https://lobste.rs/s/r6hdqf/editing_changes_patch_format_with) - [Editing changes in patch format with Jujutsu](https://www.knifepoint.net/~kat/kb-jj-patchedit.html)
* [2026-03-07, 07:00:00](https://science.slashdot.org/story/26/03/07/0028222/asteroid-2024-yr4-will-not-impact-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Asteroid 2024 YR4 Will Not Impact the Moon](https://science.slashdot.org/story/26/03/07/0028222/asteroid-2024-yr4-will-not-impact-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 05:40:00](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss) - [Holy C Batman, He Built an Operating System!](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss)
* [2026-03-07, 05:34:58](https://lobste.rs/s/osvwbe/first_ai_agent_worm_is_months_away_if) - [The first AI agent worm is months away, if that](https://dustycloud.org/blog/the-first-ai-agent-worm-is-months-away-if-that/)
* [2026-03-07, 03:52:56](https://lobste.rs/s/lsk3gq/ply_build_cross_platform_apps_rust) - [Ply: Build cross-platform apps in Rust](https://plyx.iz.rs/blog/introducing-ply/)
* [2026-03-07, 03:00:00](https://news.slashdot.org/story/26/03/06/2210215/humanity-heating-planet-faster-than-ever-before-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humanity Heating Planet Faster Than Ever Before, Study Finds](https://news.slashdot.org/story/26/03/06/2210215/humanity-heating-planet-faster-than-ever-before-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 02:03:21](https://news.ycombinator.com/item?id=47283665) - [UUID package coming to Go standard library](https://github.com/golang/go/issues/62026)
* [2026-03-07, 01:17:57](https://news.ycombinator.com/item?id=47283337) - [LLMs work best when the user defines their acceptance criteria first](https://blog.katanaquant.com/p/your-llm-doesnt-write-correct-code)
* [2026-03-07, 01:12:37](https://lobste.rs/s/oual8j/netbird_open_source_zero_trust) - [NetBird - Open Source Zero Trust Networking](https://netbird.io/)
* [2026-03-07, 01:00:00](https://yro.slashdot.org/story/26/03/06/2224256/trump-administration-says-it-cant-process-tariff-refunds-because-of-computer-problems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration Says It Can&apos;t Process Tariff Refunds Because of Computer Problems](https://yro.slashdot.org/story/26/03/06/2224256/trump-administration-says-it-cant-process-tariff-refunds-because-of-computer-problems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 00:53:00](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss) - [vscreen: A Real Browser for AI Agents, Streamed Live via WebRTC](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss)
* [2026-03-07, 00:43:00](https://lobste.rs/s/drtput/some_words_on_wigglypaint) - [Some Words on WigglyPaint](https://beyondloom.com/blog/onwigglypaint.html)
* [2026-03-07, 00:30:08](https://lobste.rs/s/qorrgl/i_m_not_consulting_llm) - [I&apos;m not consulting an LLM](https://lr0.org/blog/p/gpt/)
* [2026-03-07, 00:05:06](https://news.ycombinator.com/item?id=47282777) - [Tell HN: I&apos;m 60 years old. Claude Code has re-ignited a passion](https://news.ycombinator.com/item?id=47282777)
* [2026-03-06, 23:59:16](https://news.ycombinator.com/item?id=47282736) - [Plasma Bigscreen – 10-foot interface for KDE plasma](https://plasma-bigscreen.org)
* [2026-03-06, 23:53:29](https://news.ycombinator.com/item?id=47282701) - [Helix: A post-modern text editor](https://helix-editor.com/)
* [2026-03-06, 23:38:43](https://lobste.rs/s/mktb13/spa_vs_hypermedia_real_world_performance) - [SPA vs. Hypermedia: Real-World Performance Under Load](https://zweiundeins.gmbh/en/methodology/spa-vs-hypermedia-real-world-performance-under-load)
* [2026-03-06, 23:00:00](https://tech.slashdot.org/story/26/03/06/2019200/oura-buys-gesture-navigation-startup-doublepoint?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oura Buys Gesture-Navigation Startup DoublePoint](https://tech.slashdot.org/story/26/03/06/2019200/oura-buys-gesture-navigation-startup-doublepoint?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 22:00:00](https://apple.slashdot.org/story/26/03/06/1910245/apple-blocks-us-users-from-downloading-bytedances-chinese-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Blocks US Users From Downloading ByteDance&apos;s Chinese Apps](https://apple.slashdot.org/story/26/03/06/1910245/apple-blocks-us-users-from-downloading-bytedances-chinese-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 21:52:44](https://news.ycombinator.com/item?id=47281593) - [this css proves me human](https://will-keleher.com/posts/this-css-makes-me-human/)
* [2026-03-06, 21:36:26](https://lobste.rs/s/tqsgwm/how_irc_bot_inspired_creation_curl) - [How an IRC bot inspired the creation of cURL](https://www.youtube.com/watch?v=ohzzGy5K9Dk)
* [2026-03-06, 21:00:00](https://tech.slashdot.org/story/26/03/06/1851235/system76-comments-on-recent-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [System76 Comments On Recent Age Verification Laws](https://tech.slashdot.org/story/26/03/06/1851235/system76-comments-on-recent-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 20:57:07](https://news.ycombinator.com/item?id=47280958) - [Re-creating the complex cuisine of prehistoric Europeans](https://arstechnica.com/science/2026/03/recreating-the-complex-cuisine-of-prehistoric-europeans/)
* [2026-03-06, 20:39:27](https://lobste.rs/s/traf1f/jank_is_off_great_start_2026) - [jank is off to a great start in 2026](https://jank-lang.org/blog/2026-03-06-great-start/)
* [2026-03-06, 20:11:00](https://soylentnews.org/article.pl?sid=26/03/05/233230&amp;from=rss) - [Reminder:  VPNs Can&apos;t Make You Anonymous Online](https://soylentnews.org/article.pl?sid=26/03/05/233230&amp;from=rss)
* [2026-03-06, 20:00:00](https://news.slashdot.org/story/26/03/06/1634257/mozilla-is-working-on-a-big-firefox-redesign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Is Working On a Big Firefox Redesign](https://news.slashdot.org/story/26/03/06/1634257/mozilla-is-working-on-a-big-firefox-redesign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 19:40:25](https://lobste.rs/s/uaavl6/reflections_on_vibecoding_ticket_el) - [Reflections on vibecoding ticket.el](https://blogsystem5.substack.com/p/vibecoding-ticket-el)
* [2026-03-06, 19:00:00](https://tech.slashdot.org/story/26/03/06/1629255/iran-war-provides-a-large-scale-test-for-ai-assisted-warfare?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran War Provides a Large-Scale Test For AI-Assisted Warfare](https://tech.slashdot.org/story/26/03/06/1629255/iran-war-provides-a-large-scale-test-for-ai-assisted-warfare?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 18:00:00](https://developers.slashdot.org/story/26/03/06/1614252/python-chardet-package-replaced-with-llm-generated-clone-re-licensed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Python &apos;Chardet&apos; Package Replaced With LLM-Generated Clone, Re-Licensed](https://developers.slashdot.org/story/26/03/06/1614252/python-chardet-package-replaced-with-llm-generated-clone-re-licensed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 15:30:00](https://soylentnews.org/article.pl?sid=26/03/05/2246218&amp;from=rss) - [Destroyed Servers and DoS Attacks: What Can Happen When OpenClaw AI Agents Interact](https://soylentnews.org/article.pl?sid=26/03/05/2246218&amp;from=rss)
* [2026-03-06, 11:38:35](https://lobste.rs/s/wxltff/hardening_firefox_with_anthropic_s_red) - [Hardening Firefox with Anthropic’s Red Team](https://blog.mozilla.org/en/firefox/hardening-firefox-anthropic-red-team/)
* [2026-03-06, 10:43:00](https://soylentnews.org/article.pl?sid=26/03/05/1853251&amp;from=rss) - [As Moon Interest Heats Up, Two Companies Unveil Plans for a Lunar \&quot;Harvester\&quot;](https://soylentnews.org/article.pl?sid=26/03/05/1853251&amp;from=rss)
* [2026-03-06, 10:19:42](https://lobste.rs/s/lx1wc2/mozilla_is_working_on_big_firefox) - [Mozilla is working on a big Firefox redesign, here is what it looks like](https://www.neowin.net/news/mozilla-is-working-on-a-big-firefox-redesign-here-is-what-it-looks-like/)
* [2026-03-06, 10:14:35](https://lobste.rs/s/msjuyz/eupl_european_union_public_license) - [EUPL: European Union Public License](https://eupl.eu/)
* [2026-03-06, 07:45:11](https://lobste.rs/s/uwdjjy/new_chapter_for_nix_language_courtesy) - [A new chapter for the Nix language, courtesy of WebAssembly](https://determinate.systems/blog/builtins-wasm/)
* [2026-03-06, 06:33:49](https://lobste.rs/s/e5vqyc/10_firefox_crashes_are_caused_by_bitflips) - [10% of Firefox crashes are caused by bitflips](https://mas.to/@gabrielesvelto/116171750653898304)
* [2026-03-06, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/05/1850205&amp;from=rss) - [DOS Memory Management](https://soylentnews.org/article.pl?sid=26/03/05/1850205&amp;from=rss)
* [2026-03-06, 01:10:00](https://soylentnews.org/article.pl?sid=26/03/05/1846224&amp;from=rss) - [Micron Sampling First 256GB SOCAMM2 Memory Packages — 2TB of RAM Per CPU for Datacenters](https://soylentnews.org/article.pl?sid=26/03/05/1846224&amp;from=rss)
* [2026-03-05, 23:48:26](https://news.ycombinator.com/item?id=47268838) - [Self-Portrait by Ernst Mach (1886)](https://publicdomainreview.org/collection/self-portrait-by-ernst-mach-1886/)
* [2026-03-05, 20:25:00](https://soylentnews.org/article.pl?sid=26/03/05/0529259&amp;from=rss) - [To Update Blobs or Not to Update Blobs](https://soylentnews.org/article.pl?sid=26/03/05/0529259&amp;from=rss)
* [2026-03-05, 16:47:27](https://news.ycombinator.com/item?id=47263938) - [Galileo&apos;s handwritten notes found in ancient astronomy text](https://www.science.org/content/article/galileo-s-handwritten-notes-found-ancient-astronomy-text)
* [2026-03-05, 15:42:00](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss) - [AI Art Isn&apos;t Art, or Copyrightable Art Anyway](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss)
* [2026-03-05, 10:52:00](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss) - [Drones Attack Several AWS Middle East Region Data Centers Amid Iran War, Leading to Outages](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss)
* [2026-03-05, 10:33:19](https://news.ycombinator.com/item?id=47260028) - [Bourdieu&apos;s theory of taste: a grumbling abrégé](https://dynomight.net/bourdieu/)
* [2026-03-05, 06:11:00](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss) - [No Fooling: NASA Targets April 1 for Artemis II Launch to the Moon](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss)
* [2026-03-05, 00:23:00](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss) - [Anonymous Credentials: an Illustrated Primer](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss)
* [2026-03-05, 00:10:42](https://news.ycombinator.com/item?id=47255798) - [48x32, a 1536 LED Game Computer (2023)](https://jacquesmattheij.com/48x32-introduction/)
* [2026-03-04, 19:39:00](https://soylentnews.org/article.pl?sid=26/03/04/1320238&amp;from=rss) - [Small Web, IndieWeb, Gemini… a Guide to the Retro-Web](https://soylentnews.org/article.pl?sid=26/03/04/1320238&amp;from=rss)
* [2026-03-04, 17:05:00](https://news.ycombinator.com/item?id=47250500) - [macOS code injection for fun and no profit (2024)](https://mariozechner.at/posts/2024-07-20-macos-code-injection-fun/)
* [2026-03-04, 14:53:00](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss) - [LLMs Can Unmask Pseudonymous Users at Scale With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss)
* [2026-03-04, 10:07:00](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss) - [Medical Journal the Lancet Blasts RFK Jr.’s Health Work as a Failure](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss)
* [2026-03-04, 05:22:00](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss) - [&apos;Cancel ChatGPT&apos;: AI Boycott Surges After OpenAI-Pentagon Military Deal](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss)
* [2026-03-04, 03:42:17](https://news.ycombinator.com/item?id=47242775) - [Lock Scroll with a Vengeance](https://unsung.aresluna.org/lock-scroll-with-a-vengeance/)
* [2026-03-04, 00:30:00](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss) - [Entry-Level PC Market To ‘Disappear’ By 2028 — Rising Memory Prices Pile More Strain On Consumer PC ](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss)
* [2026-03-03, 22:45:10](https://news.ycombinator.com/item?id=47240169) - [Compiling Prolog to Forth [pdf]](https://vfxforth.com/flag/jfar/vol4/no4/article4.pdf)
* [2026-03-03, 19:54:00](https://soylentnews.org/article.pl?sid=26/03/02/2022221&amp;from=rss) - [Across Cultures, People Combine Reference Frames to Orient Themselves](https://soylentnews.org/article.pl?sid=26/03/02/2022221&amp;from=rss)
* [2026-03-03, 18:12:06](https://news.ycombinator.com/item?id=47236346) - [Seurat Most Famous for Paris Park Painting Yet Half His Paintings Were Seascapes](https://www.smithsonianmag.com/smart-news/georges-seurat-is-most-famous-for-his-pointillist-painting-of-a-paris-park-but-more-than-half-of-his-canvases-were-stunning-seascapes-180988245/)
* [2026-03-03, 15:13:00](https://soylentnews.org/article.pl?sid=26/03/02/2020204&amp;from=rss) - [Pathways to a Fair Technological Future](https://soylentnews.org/article.pl?sid=26/03/02/2020204&amp;from=rss)
* [2026-03-03, 15:02:32](https://news.ycombinator.com/item?id=47233441) - [Working and Communicating with Japanese Engineers](https://www.tokyodev.com/articles/working-and-communicating-with-japanese-engineers)
* [2026-03-03, 10:28:00](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss) - [Satellites Found a &apos;Brown Ribbon&apos; Near Africa – Now Scientists Are Sounding Alarms](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss)
* [2026-03-03, 05:43:00](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss) - [Datacenters in Space Are a Terrible, Horrible, No Good Idea.](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss)
* [2026-03-03, 00:58:00](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss) - [Cleaner Ship Fuel is Reducing Lightning in Key Shipping Lanes](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss)
