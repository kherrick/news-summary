# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements and Innovations

* [China Releases First Homegrown Quantum Computing OS](https://tech.slashdot.org/story/26/03/07/0038223/china-releases-first-homegrown-quantum-computing-os?utm_source=rss1.0mainlinkanon&utm_medium=feed) - China's quantum computing breakthrough with the release of its first indigenous quantum computing operating system.

* [Ki Editor - an editor that operates on the AST](https://ki-editor.org/) - Discover a unique editor which works directly with abstract syntax trees (ASTs).

* [Ply: Build cross-platform apps in Rust](https://plyx.iz.rs/blog/introducing-ply/) - Introduction to Ply, a tool designed to simplify building cross-platform applications in Rust.

* [UUID package coming to Go standard library](https://github.com/golang/go/issues/62026) - Go programming language to add support for universally unique identifiers (UUIDs) soon.

* [Micron Sampling First 256GB SOCAMM2 Memory Packages — 2TB of RAM Per CPU for Datacenters](https://soylentnews.org/article.pl?sid=26/03/05/1846224&from=rss) - Micron unveils advanced memory packages, allowing data centers to pack up to 2TB RAM per CPU.

## Social Media and Online Platforms

* [Indonesia To Ban Social Media For Children Under 16](https://yro.slashdot.org/story/26/03/06/2116214/indonesia-to-ban-social-media-for-children-under-16?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A policy expected to have wide-reaching implications for minors and the digital landscape.

* [Boy I was wrong about the Fediverse](https://matduggan.com/boy-i-was-wrong-about-the-fediverse/) - A reflection on the evolving impact of decentralized social platforms like the Fediverse.

## Scientific Discoveries and Space Exploration

* [What Crystals Older Than the Sun Reveal About the Start of the Solar System](https://soylentnews.org/article.pl?sid=26/03/06/1335212&from=rss) - Insights into the origins of the solar system based on ancient extraterrestrial crystals.

* [As Moon Interest Heats Up, Two Companies Unveil Plans for a Lunar "Harvester"](https://soylentnews.org/article.pl?sid=26/03/05/1853251&from=rss) - Innovative plans for resource extraction on the moon as space exploration intensifies.

* [Asteroid 2024 YR4 Will Not Impact the Moon](https://science.slashdot.org/story/26/03/07/0028222/asteroid-2024-yr4-will-not-impact-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Good news from space observers, this asteroid poses no threat to the moon.

## Environmental and Societal Concerns

* [Humanity Heating Planet Faster Than Ever Before, Study Finds](https://news.slashdot.org/story/26/03/06/2210215/humanity-heating-planet-faster-than-ever-before-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A sobering study about the accelerating pace of anthropogenic global warming.

* [Galileo's handwritten notes found in ancient astronomy text](https://www.science.org/content/article/galileo-s-handwritten-notes-found-ancient-astronomy-text) - Historians uncover remarkable notes by the famed scientist Galileo in an old text.

## Open Source and Software Development

* [Sarvam 105B, the first competitive Indian open source LLM](https://www.sarvam.ai/blogs/sarvam-30b-105b) - India's open-source movement gains momentum with Sarvam, a large-scale language model.

* [NetBird - Open Source Zero Trust Networking](https://netbird.io/) - Secure networking with NetBird, an open-source initiative for zero-trust environments.

* [OpenWrt 25.12.0 Released](https://forum.openwrt.org/t/openwrt-25-12-0-stable-release/247228) - A major update for the OpenWrt project enhances routing and networking features.

* [Announcing TypeScript 6.0 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0-rc/) - Microsoft announces the release candidate of TypeScript 6.0 with new features and improvements.

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

* [2026-03-07, 13:00:00](https://yro.slashdot.org/story/26/03/06/2116214/indonesia-to-ban-social-media-for-children-under-16?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Indonesia To Ban Social Media For Children Under 16](https://yro.slashdot.org/story/26/03/06/2116214/indonesia-to-ban-social-media-for-children-under-16?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 12:13:04](https://news.ycombinator.com/item?id=47286933) - [US economy sheds 92,000 jobs in February in sharp slide](https://www.ft.com/content/6542bd0c-59ca-493b-ab5d-2d69e4e00cae)
* [2026-03-07, 10:29:13](https://news.ycombinator.com/item?id=47286311) - [Ki Editor - an editor that operates on the AST](https://ki-editor.org/)
* [2026-03-07, 10:21:00](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss) - [What Crystals Older Than the Sun Reveal About the Start of the Solar System](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss)
* [2026-03-07, 10:11:13](https://news.ycombinator.com/item?id=47286221) - [Show HN: The Fastest Way to Ship TanStack Apps](https://tanstackstarterkit.com/)
* [2026-03-07, 10:00:00](https://tech.slashdot.org/story/26/03/07/0038223/china-releases-first-homegrown-quantum-computing-os?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Releases First Homegrown Quantum Computing OS](https://tech.slashdot.org/story/26/03/07/0038223/china-releases-first-homegrown-quantum-computing-os?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 09:45:58](https://news.ycombinator.com/item?id=47286082) - [Boy I was wrong about the Fediverse](https://matduggan.com/boy-i-was-wrong-about-the-fediverse/)
* [2026-03-07, 09:39:13](https://lobste.rs/s/azkace/lenovo_s_new_t_series_thinkpads_score_10_10) - [Lenovo’s New T-Series ThinkPads Score 10/10 for Repairability](https://www.ifixit.com/News/115827/new-thinkpads-score-perfect-10-repairability)
* [2026-03-07, 09:18:40](https://news.ycombinator.com/item?id=47285960) - [Uploading Pirated Books via BitTorrent Qualifies as Fair Use, Meta Argues](https://torrentfreak.com/uploading-pirated-books-via-bittorrent-qualifies-as-fair-use-meta/)
* [2026-03-07, 08:53:47](https://news.ycombinator.com/item?id=47285846) - [QGIS 4.0](https://changelog.qgis.org/en/version/4.0/)
* [2026-03-07, 08:47:27](https://lobste.rs/s/upwrm3/internals_postgresql) - [The Internals of PostgreSQL](https://www.interdb.jp/pg/)
* [2026-03-07, 08:13:46](https://lobste.rs/s/r6hdqf/editing_changes_patch_format_with) - [Editing changes in patch format with Jujutsu](https://www.knifepoint.net/~kat/kb-jj-patchedit.html)
* [2026-03-07, 07:43:57](https://news.ycombinator.com/item?id=47285422) - [Sarvam 105B, the first competitive Indian open source LLM](https://www.sarvam.ai/blogs/sarvam-30b-105b)
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
* [2026-03-07, 00:22:34](https://lobste.rs/s/zocl5m/fosdemflix) - [fosdemflix](https://fosdemflix.netlify.app/)
* [2026-03-07, 00:05:06](https://news.ycombinator.com/item?id=47282777) - [Tell HN: I&apos;m 60 years old. Claude Code has re-ignited a passion](https://news.ycombinator.com/item?id=47282777)
* [2026-03-06, 23:59:16](https://news.ycombinator.com/item?id=47282736) - [Plasma Bigscreen – 10-foot interface for KDE plasma](https://plasma-bigscreen.org)
* [2026-03-06, 23:53:29](https://news.ycombinator.com/item?id=47282701) - [Helix: A post-modern text editor](https://helix-editor.com/)
* [2026-03-06, 23:38:43](https://lobste.rs/s/mktb13/spa_vs_hypermedia_real_world_performance) - [SPA vs. Hypermedia: Real-World Performance Under Load](https://zweiundeins.gmbh/en/methodology/spa-vs-hypermedia-real-world-performance-under-load)
* [2026-03-06, 23:00:00](https://tech.slashdot.org/story/26/03/06/2019200/oura-buys-gesture-navigation-startup-doublepoint?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oura Buys Gesture-Navigation Startup DoublePoint](https://tech.slashdot.org/story/26/03/06/2019200/oura-buys-gesture-navigation-startup-doublepoint?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 22:29:55](https://lobste.rs/s/cyvbof/fortify_your_app_essential_strategies) - [Fortify your app: Essential strategies to strengthen security](https://www.youtube.com/watch?v=UZeSyodAszc)
* [2026-03-06, 22:00:00](https://apple.slashdot.org/story/26/03/06/1910245/apple-blocks-us-users-from-downloading-bytedances-chinese-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Blocks US Users From Downloading ByteDance&apos;s Chinese Apps](https://apple.slashdot.org/story/26/03/06/1910245/apple-blocks-us-users-from-downloading-bytedances-chinese-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 21:52:44](https://news.ycombinator.com/item?id=47281593) - [this css proves me human](https://will-keleher.com/posts/this-css-makes-me-human/)
* [2026-03-06, 21:36:26](https://lobste.rs/s/tqsgwm/how_irc_bot_inspired_creation_curl) - [How an IRC bot inspired the creation of cURL](https://www.youtube.com/watch?v=ohzzGy5K9Dk)
* [2026-03-06, 21:11:21](https://lobste.rs/s/fkxest/this_css_proves_me_human) - [this css proves me human](https://will-keleher.com/posts/this-css-makes-me-human/)
* [2026-03-06, 21:00:00](https://tech.slashdot.org/story/26/03/06/1851235/system76-comments-on-recent-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [System76 Comments On Recent Age Verification Laws](https://tech.slashdot.org/story/26/03/06/1851235/system76-comments-on-recent-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 20:56:16](https://lobste.rs/s/vupk6p/announcing_typescript_6_0_rc) - [Announcing TypeScript 6.0 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0-rc/)
* [2026-03-06, 20:39:27](https://lobste.rs/s/traf1f/jank_is_off_great_start_2026) - [jank is off to a great start in 2026](https://jank-lang.org/blog/2026-03-06-great-start/)
* [2026-03-06, 20:11:00](https://soylentnews.org/article.pl?sid=26/03/05/233230&amp;from=rss) - [Reminder:  VPNs Can&apos;t Make You Anonymous Online](https://soylentnews.org/article.pl?sid=26/03/05/233230&amp;from=rss)
* [2026-03-06, 20:00:00](https://news.slashdot.org/story/26/03/06/1634257/mozilla-is-working-on-a-big-firefox-redesign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Is Working On a Big Firefox Redesign](https://news.slashdot.org/story/26/03/06/1634257/mozilla-is-working-on-a-big-firefox-redesign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 19:40:25](https://lobste.rs/s/uaavl6/reflections_on_vibecoding_ticket_el) - [Reflections on vibecoding ticket.el](https://blogsystem5.substack.com/p/vibecoding-ticket-el)
* [2026-03-06, 19:00:00](https://tech.slashdot.org/story/26/03/06/1629255/iran-war-provides-a-large-scale-test-for-ai-assisted-warfare?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran War Provides a Large-Scale Test For AI-Assisted Warfare](https://tech.slashdot.org/story/26/03/06/1629255/iran-war-provides-a-large-scale-test-for-ai-assisted-warfare?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 18:26:21](https://news.ycombinator.com/item?id=47278980) - [Launch HN: Palus Finance (YC W26): Better yields on idle cash for startups, SMBs](https://news.ycombinator.com/item?id=47278980)
* [2026-03-06, 18:19:48](https://lobste.rs/s/uztaai/why_go_can_t_try) - [Why Go Can&apos;t Try](https://niketpatel.com/essays/why-go-cant-try)
* [2026-03-06, 18:00:00](https://developers.slashdot.org/story/26/03/06/1614252/python-chardet-package-replaced-with-llm-generated-clone-re-licensed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Python &apos;Chardet&apos; Package Replaced With LLM-Generated Clone, Re-Licensed](https://developers.slashdot.org/story/26/03/06/1614252/python-chardet-package-replaced-with-llm-generated-clone-re-licensed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 17:46:45](https://news.ycombinator.com/item?id=47278426) - [Tech employment now significantly worse than the 2008 or 2020 recessions](https://twitter.com/JosephPolitano/status/2029916364664611242)
* [2026-03-06, 17:00:00](https://yro.slashdot.org/story/26/03/06/166252/proton-mail-helped-fbi-unmask-anonymous-stop-cop-city-protester?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Proton Mail Helped FBI Unmask Anonymous &apos;Stop Cop City&apos; Protester](https://yro.slashdot.org/story/26/03/06/166252/proton-mail-helped-fbi-unmask-anonymous-stop-cop-city-protester?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 16:00:00](https://yro.slashdot.org/story/26/03/06/1557234/ai-startup-sues-ex-ceo-saying-he-took-41gb-of-email-lied-on-resume?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Startup Sues Ex-CEO Saying He Took 41GB of Email, Lied On Resume](https://yro.slashdot.org/story/26/03/06/1557234/ai-startup-sues-ex-ceo-saying-he-took-41gb-of-email-lied-on-resume?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 15:53:32](https://news.ycombinator.com/item?id=47276539) - [Entomologists use a particle accelerator to image ants at scale](https://spectrum.ieee.org/3d-scanning-particle-accelerator-antscan)
* [2026-03-06, 15:30:00](https://soylentnews.org/article.pl?sid=26/03/05/2246218&amp;from=rss) - [Destroyed Servers and DoS Attacks: What Can Happen When OpenClaw AI Agents Interact](https://soylentnews.org/article.pl?sid=26/03/05/2246218&amp;from=rss)
* [2026-03-06, 15:00:00](https://games.slashdot.org/story/26/03/06/026213/the-national-videogame-museum-acquires-the-mythical-nintendo-playstation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The National Videogame Museum Acquires the Mythical Nintendo Playstation](https://games.slashdot.org/story/26/03/06/026213/the-national-videogame-museum-acquires-the-mythical-nintendo-playstation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 14:22:59](https://news.ycombinator.com/item?id=47275236) - [Show HN: Moongate – Ultima Online server emulator in .NET 10 with Lua scripting](https://github.com/moongate-community/moongatev2)
* [2026-03-06, 14:16:06](https://news.ycombinator.com/item?id=47275152) - [CT Scans of Health Wearables](https://www.lumafield.com/scan-of-the-month/health-wearables)
* [2026-03-06, 14:00:00](https://yro.slashdot.org/story/26/03/06/0147206/florida-woman-gets-prison-time-for-illegally-selling-microsoft-product-keys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Florida Woman Gets Prison Time For Illegally Selling Microsoft Product Keys](https://yro.slashdot.org/story/26/03/06/0147206/florida-woman-gets-prison-time-for-illegally-selling-microsoft-product-keys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 11:53:18](https://news.ycombinator.com/item?id=47273854) - [Hardening Firefox with Anthropic&apos;s Red Team](https://www.anthropic.com/news/mozilla-firefox-security)
* [2026-03-06, 11:38:35](https://lobste.rs/s/wxltff/hardening_firefox_with_anthropic_s_red) - [Hardening Firefox with Anthropic’s Red Team](https://blog.mozilla.org/en/firefox/hardening-firefox-anthropic-red-team/)
* [2026-03-06, 10:43:00](https://soylentnews.org/article.pl?sid=26/03/05/1853251&amp;from=rss) - [As Moon Interest Heats Up, Two Companies Unveil Plans for a Lunar \&quot;Harvester\&quot;](https://soylentnews.org/article.pl?sid=26/03/05/1853251&amp;from=rss)
* [2026-03-06, 10:24:42](https://lobste.rs/s/tx3f5n/ambiguity_c) - [Ambiguity in C](https://longtran2904.substack.com/p/ambiguity-in-c)
* [2026-03-06, 10:19:42](https://lobste.rs/s/lx1wc2/mozilla_is_working_on_big_firefox) - [Mozilla is working on a big Firefox redesign, here is what it looks like](https://www.neowin.net/news/mozilla-is-working-on-a-big-firefox-redesign-here-is-what-it-looks-like/)
* [2026-03-06, 10:14:35](https://lobste.rs/s/msjuyz/eupl_european_union_public_license) - [EUPL: European Union Public License](https://eupl.eu/)
* [2026-03-06, 09:40:08](https://lobste.rs/s/ewojng/xkcd_dependency_p5_js) - [XKCD dependency in p5.js](https://editor.p5js.org/isohedral/full/vJa5RiZWs)
* [2026-03-06, 07:52:00](https://lobste.rs/s/m0ajbc/openwrt_25_12_0_released) - [OpenWrt 25.12.0 Released](https://forum.openwrt.org/t/openwrt-25-12-0-stable-release/247228)
* [2026-03-06, 07:45:11](https://lobste.rs/s/uwdjjy/new_chapter_for_nix_language_courtesy) - [A new chapter for the Nix language, courtesy of WebAssembly](https://determinate.systems/blog/builtins-wasm/)
* [2026-03-06, 06:33:49](https://lobste.rs/s/e5vqyc/10_firefox_crashes_are_caused_by_bitflips) - [10% of Firefox crashes are caused by bitflips](https://mas.to/@gabrielesvelto/116171750653898304)
* [2026-03-06, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/05/1850205&amp;from=rss) - [DOS Memory Management](https://soylentnews.org/article.pl?sid=26/03/05/1850205&amp;from=rss)
* [2026-03-06, 01:10:00](https://soylentnews.org/article.pl?sid=26/03/05/1846224&amp;from=rss) - [Micron Sampling First 256GB SOCAMM2 Memory Packages — 2TB of RAM Per CPU for Datacenters](https://soylentnews.org/article.pl?sid=26/03/05/1846224&amp;from=rss)
* [2026-03-05, 20:25:00](https://soylentnews.org/article.pl?sid=26/03/05/0529259&amp;from=rss) - [To Update Blobs or Not to Update Blobs](https://soylentnews.org/article.pl?sid=26/03/05/0529259&amp;from=rss)
* [2026-03-05, 18:47:57](https://news.ycombinator.com/item?id=47265580) - [Modernizing swapping: virtual swap spaces](https://lwn.net/Articles/1059201/)
* [2026-03-05, 17:43:33](https://news.ycombinator.com/item?id=47264742) - [My application programmer instincts failed when debugging assembler](https://landedstar.com/blog/posts/how-my-application-programmer-instincts-failed-when-debugging-assembler/)
* [2026-03-05, 16:47:27](https://news.ycombinator.com/item?id=47263938) - [Galileo&apos;s handwritten notes found in ancient astronomy text](https://www.science.org/content/article/galileo-s-handwritten-notes-found-ancient-astronomy-text)
* [2026-03-05, 15:42:00](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss) - [AI Art Isn&apos;t Art, or Copyrightable Art Anyway](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss)
* [2026-03-05, 10:52:00](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss) - [Drones Attack Several AWS Middle East Region Data Centers Amid Iran War, Leading to Outages](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss)
* [2026-03-05, 06:11:00](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss) - [No Fooling: NASA Targets April 1 for Artemis II Launch to the Moon](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss)
* [2026-03-05, 00:23:00](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss) - [Anonymous Credentials: an Illustrated Primer](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss)
* [2026-03-05, 00:10:42](https://news.ycombinator.com/item?id=47255798) - [48x32, a 1536 LED Game Computer (2023)](https://jacquesmattheij.com/48x32-introduction/)
* [2026-03-04, 20:53:33](https://news.ycombinator.com/item?id=47253643) - [Compiling Match Statements to Bytecode](https://xnacly.me/posts/2026/compiling-match-statements-to-bytecode/)
* [2026-03-04, 19:39:00](https://soylentnews.org/article.pl?sid=26/03/04/1320238&amp;from=rss) - [Small Web, IndieWeb, Gemini… a Guide to the Retro-Web](https://soylentnews.org/article.pl?sid=26/03/04/1320238&amp;from=rss)
* [2026-03-04, 14:53:00](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss) - [LLMs Can Unmask Pseudonymous Users at Scale With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss)
* [2026-03-04, 13:21:24](https://news.ycombinator.com/item?id=47247030) - [Editing changes in patch format with Jujutsu](https://www.knifepoint.net/~kat/kb-jj-patchedit.html)
* [2026-03-04, 10:07:00](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss) - [Medical Journal the Lancet Blasts RFK Jr.’s Health Work as a Failure](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss)
* [2026-03-04, 09:00:56](https://news.ycombinator.com/item?id=47244882) - [What canceled my Go context?](https://rednafi.com/go/context-cancellation-cause/)
* [2026-03-04, 05:22:00](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss) - [&apos;Cancel ChatGPT&apos;: AI Boycott Surges After OpenAI-Pentagon Military Deal](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss)
* [2026-03-04, 03:42:17](https://news.ycombinator.com/item?id=47242775) - [Lock Scroll with a Vengeance](https://unsung.aresluna.org/lock-scroll-with-a-vengeance/)
* [2026-03-04, 00:30:00](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss) - [Entry-Level PC Market To ‘Disappear’ By 2028 — Rising Memory Prices Pile More Strain On Consumer PC ](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss)
* [2026-03-03, 19:54:00](https://soylentnews.org/article.pl?sid=26/03/02/2022221&amp;from=rss) - [Across Cultures, People Combine Reference Frames to Orient Themselves](https://soylentnews.org/article.pl?sid=26/03/02/2022221&amp;from=rss)
* [2026-03-03, 16:19:08](https://news.ycombinator.com/item?id=47234689) - [The Longing (1999)](https://www.cluetrain.com/book/longing.html)
* [2026-03-03, 15:13:00](https://soylentnews.org/article.pl?sid=26/03/02/2020204&amp;from=rss) - [Pathways to a Fair Technological Future](https://soylentnews.org/article.pl?sid=26/03/02/2020204&amp;from=rss)
* [2026-03-03, 15:02:32](https://news.ycombinator.com/item?id=47233441) - [Working and Communicating with Japanese Engineers](https://www.tokyodev.com/articles/working-and-communicating-with-japanese-engineers)
* [2026-03-03, 13:17:11](https://news.ycombinator.com/item?id=47231871) - [Querying 3B Vectors](https://vickiboykis.com/2026/02/21/querying-3-billion-vectors/)
* [2026-03-03, 10:28:00](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss) - [Satellites Found a &apos;Brown Ribbon&apos; Near Africa – Now Scientists Are Sounding Alarms](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss)
* [2026-03-03, 05:43:00](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss) - [Datacenters in Space Are a Terrible, Horrible, No Good Idea.](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss)
* [2026-03-03, 00:58:00](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss) - [Cleaner Ship Fuel is Reducing Lightning in Key Shipping Lanes](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss)
