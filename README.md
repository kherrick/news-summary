# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [Willow - Protocols for an uncertain future](https://fosdem.org/2026/schedule/event/CVGZAV-willow/) - A deep dive into the fascinating world of 'Willow', a set of protocols designed to address an uncertain technological future. [Comments](https://lobste.rs/s/m5v4gb/willow_protocols_for_uncertain_future)

* [The World's First Sodium-Ion Battery in Commercial EVs - Great at Low Temperatures](https://tech.slashdot.org/story/26/02/08/0113249/the-worlds-first-sodium-ion-battery-in-commercial-evs---great-at-low-temperatures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An introduction to sodium-ion batteries now being implemented in commercial electric vehicles, offering better performance in low-temperature conditions. [Comments](https://tech.slashdot.org/story/26/02/08/0113249/the-worlds-first-sodium-ion-battery-in-commercial-evs---great-at-low-temperatures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Anthropic's Claude Opus 4.6 Found 500 High-Severity Vulnerabilities](https://it.slashdot.org/story/26/02/08/0159234/a-new-era-for-security-anthropics-claude-opus-46-found-500-high-severity-vulnerabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A milestone in security as AI tool Claude Opus 4.6 identifies an unprecedented number of high-severity vulnerabilities. [Comments](https://it.slashdot.org/story/26/02/08/0159234/a-new-era-for-security-anthropics-claude-opus-46-found-500-high-severity-vulnerabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Emerging Trends in AI

* [LLMs as Language Compilers: Lessons from Fortran for the Future of Coding](https://cyber-omelette.com/posts/the-abstraction-rises.html) - Explore how Large Language Models (LLMs) are evolving as modern-day programming language compilers, drawing parallels with Fortran. [Comments](https://news.ycombinator.com/item?id=46932388)

* [Good News: We Saved the Bees. Bad News: We Saved the Wrong Ones.](https://news.slashdot.org/story/26/02/07/033225/good-news-we-saved-the-bees-bad-news-we-saved-the-wrong-ones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An informed perspective on how conservation efforts may have inadvertently favored certain bee species over others. [Comments](https://news.slashdot.org/story/26/02/07/033225/good-news-we-saved-the-bees-bad-news-we-saved-the-wrong-ones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Security & Privacy Alerts

* [Substack confirms data breach affects users’ email addresses and phone numbers](https://techcrunch.com/2026/02/05/substack-confirms-data-breach-affecting-email-addresses-and-phone-numbers/) - Substack discloses a significant data breach that has compromised users' email addresses and phone numbers. [Comments](https://news.ycombinator.com/item?id=46931347)

* [France Might Seek Restrictions on VPN Use in Campaign to Keep Minors Off Social Media](https://soylentnews.org/article.pl?sid=26/02/07/004218&amp;from=rss) - Controversial proposal in France may limit VPN usage to control underage access to social media. [Comments](https://soylentnews.org/article.pl?sid=26/02/07/004218&amp;from=rss)

## Exploring Coding and Open Source Innovations

* [DoNotNotify is now Open Source](https://donotnotify.com/opensource.html) - The popular notification management tool DoNotNotify goes open source, inviting contributions. [Comments](https://news.ycombinator.com/item?id=46932192)

* [Show HN: LocalGPT – A local-first AI assistant in Rust with persistent memory](https://github.com/localgpt-app/localgpt) - An innovative Rust-based local AI assistant focusing on privacy and persistent memory is now available. [Comments](https://news.ycombinator.com/item?id=46930391)

* [Golfing APL/K in 90 Lines of Python](https://aljamal.substack.com/p/golfing-aplk-in-90-lines-of-python) - A fascinating implementation of APL/K golfed to just 90 lines of Python. [Comments](https://lobste.rs/s/zxbykd/golfing_apl_k_90_lines_python)

## Environmental and Energy Developments

* [Are Big Tech's Nuclear Construction Deals a Tipping Point for Small Modular Reactors?](https://hardware.slashdot.org/story/26/02/08/0430252/are-big-techs-nuclear-construction-deals-a-tipping-point-for-small-modular-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analysis of small modular reactors' growth spurred by major tech companies' investments. [Comments](https://hardware.slashdot.org/story/26/02/08/0430252/are-big-techs-nuclear-construction-deals-a-tipping-point-for-small-modular-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [A Century of Hair Samples Proves Leaded Gas Ban Worked](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss) - Historical analysis from hair samples strengthens the case for the global leaded gas ban. [Comments](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss)

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

* [2026-02-08, 08:49:59](https://lobste.rs/s/m5v4gb/willow_protocols_for_uncertain_future) - [Willow - Protocols for an uncertain future](https://fosdem.org/2026/schedule/event/CVGZAV-willow/)
* [2026-02-08, 08:34:00](https://science.slashdot.org/story/26/02/07/0410235/have-we-been-thinking-about-exercise-wrong-for-half-a-century?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Have We Been Thinking About Exercise Wrong for Half a Century?](https://science.slashdot.org/story/26/02/07/0410235/have-we-been-thinking-about-exercise-wrong-for-half-a-century?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 08:15:36](https://news.ycombinator.com/item?id=46932388) - [LLMs as Language Compilers: Lessons from Fortran for the Future of Coding](https://cyber-omelette.com/posts/the-abstraction-rises.html)
* [2026-02-08, 07:57:00](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss) - [Self-Driving Cars In ‘Difficult Driving Situations’ Are Guided By Random Filipinos Overseas](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss)
* [2026-02-08, 07:39:49](https://news.ycombinator.com/item?id=46932192) - [DoNotNotify is now Open Source](https://donotnotify.com/opensource.html)
* [2026-02-08, 07:13:10](https://lobste.rs/s/9z1smp/npm_nodejs_should_do_more_make_es_modules) - [NPM and NodeJS should do more to make ES Modules easy to use (2024)](https://borischerny.com/javascript,/typescript/2024/06/19/ES-Modules-Are-A-Mess.html)
* [2026-02-08, 05:33:15](https://news.ycombinator.com/item?id=46931595) - [LineageOS 23.2](https://lineageos.org/Changelog-31/)
* [2026-02-08, 05:25:33](https://news.ycombinator.com/item?id=46931559) - [Roger Ebert Reviews \&quot;The Shawshank Redemption\&quot; (1999)](https://www.rogerebert.com/reviews/great-movie-the-shawshank-redemption-1994)
* [2026-02-08, 04:35:00](https://hardware.slashdot.org/story/26/02/08/0430252/are-big-techs-nuclear-construction-deals-a-tipping-point-for-small-modular-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Big Tech&apos;s Nuclear Construction Deals a Tipping Point for Small Modular Reactors?](https://hardware.slashdot.org/story/26/02/08/0430252/are-big-techs-nuclear-construction-deals-a-tipping-point-for-small-modular-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 04:34:50](https://news.ycombinator.com/item?id=46931347) - [Substack confirms data breach affects users’ email addresses and phone numbers](https://techcrunch.com/2026/02/05/substack-confirms-data-breach-affecting-email-addresses-and-phone-numbers/)
* [2026-02-08, 03:51:58](https://lobste.rs/s/jbfw5x/busy_months_kde_linux) - [Busy months in KDE Linux](https://pointieststick.com/2026/02/06/busy-months-in-kde-linux/)
* [2026-02-08, 03:14:00](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss) - [A Century of Hair Samples Proves Leaded Gas Ban Worked](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss)
* [2026-02-08, 02:34:00](https://it.slashdot.org/story/26/02/08/0159234/a-new-era-for-security-anthropics-claude-opus-46-found-500-high-severity-vulnerabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A New Era for Security? Anthropic&apos;s Claude Opus 4.6 Found 500 High-Severity Vulnerabilities](https://it.slashdot.org/story/26/02/08/0159234/a-new-era-for-security-anthropics-claude-opus-46-found-500-high-severity-vulnerabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 02:10:16](https://news.ycombinator.com/item?id=46930634) - [The Scriptovision Super Micro Script video titler is almost a home computer](http://oldvcr.blogspot.com/2026/02/the-scriptovision-super-micro-script.html)
* [2026-02-08, 02:08:37](https://lobste.rs/s/iszba0/scriptovision_super_micro_script_video) - [The Scriptovision Super Micro Script video titler is almost a home computer](http://oldvcr.blogspot.com/2026/02/the-scriptovision-super-micro-script.html)
* [2026-02-08, 01:55:09](https://news.ycombinator.com/item?id=46930565) - [Haskell for all: Beyond agentic coding](https://haskellforall.com/2026/02/beyond-agentic-coding)
* [2026-02-08, 01:26:38](https://news.ycombinator.com/item?id=46930391) - [Show HN: LocalGPT – A local-first AI assistant in Rust with persistent memory](https://github.com/localgpt-app/localgpt)
* [2026-02-08, 01:23:32](https://lobste.rs/s/1mwu6x/implementing_auto_tiling_with_just_5) - [Implementing Auto Tiling With Just 5 Tiles](https://kyledunbar.dev/2026/02/05/Implementing-auto-tiling-with-just-5-tiles.html)
* [2026-02-08, 01:17:00](https://tech.slashdot.org/story/26/02/08/0113249/the-worlds-first-sodium-ion-battery-in-commercial-evs---great-at-low-temperatures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The World&apos;s First Sodium-Ion Battery in Commercial EVs - Great at Low Temperatures](https://tech.slashdot.org/story/26/02/08/0113249/the-worlds-first-sodium-ion-battery-in-commercial-evs---great-at-low-temperatures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 00:24:04](https://lobste.rs/s/gxdha5/source_code_was_moat_not_anymore) - [The source code was the moat. But not anymore](https://philipotoole.com/the-source-code-was-the-moat-no-longer/)
* [2026-02-07, 23:12:00](https://news.slashdot.org/story/26/02/07/2310212/is-the-death-of-reading-narrative-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the &apos;Death of Reading&apos; Narrative Wrong?](https://news.slashdot.org/story/26/02/07/2310212/is-the-death-of-reading-narrative-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 22:34:11](https://lobste.rs/s/zxbykd/golfing_apl_k_90_lines_python) - [Golfing APL/K in 90 Lines of Python](https://aljamal.substack.com/p/golfing-aplk-in-90-lines-of-python)
* [2026-02-07, 22:32:51](https://lobste.rs/s/7yorzl/compiling_prolog_forth) - [Compiling Prolog to Forth](https://vfxforth.com/flag/jfar/vol4/no4/article4.pdf)
* [2026-02-07, 22:21:00](https://soylentnews.org/article.pl?sid=26/02/07/004218&amp;from=rss) - [France Might Seek Restrictions on VPN Use in Campaign to Keep Minors Off Social Media](https://soylentnews.org/article.pl?sid=26/02/07/004218&amp;from=rss)
* [2026-02-07, 22:03:31](https://lobste.rs/s/cgxhwz/vouch_contributor_trust_management) - [vouch: a contributor trust management system based on explicit vouches to participate](https://github.com/mitchellh/vouch)
* [2026-02-07, 21:41:00](https://tech.slashdot.org/story/26/02/07/2140203/waymo-reveals-remote-workers-in-philippines-sometimes-advise-its-driverless-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Reveals Remote Workers In Philippines Sometimes Advise Its Driverless Cars](https://tech.slashdot.org/story/26/02/07/2140203/waymo-reveals-remote-workers-in-philippines-sometimes-advise-its-driverless-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 21:07:18](https://lobste.rs/s/2jczsd/your_best_thinking_is_wasted_on_wrong) - [Your Best Thinking Is Wasted on the Wrong Decisions](https://iankduncan.com/engineering/2026-02-07-your-best-thinking-is-wasted-on-the-wrong-decisions/)
* [2026-02-07, 21:03:39](https://lobste.rs/s/uysha5/adventures_guix_packaging) - [Adventures in Guix Packaging](https://nemin.hu/guix-packaging.html)
* [2026-02-07, 20:34:42](https://lobste.rs/s/ipes8i/8vim_virtual_android_keyboard_drawing) - [8VIM: a virtual Android keyboard drawing inspiration from 8pen and Vim](https://github.com/8VIM/8VIM)
* [2026-02-07, 20:34:00](https://news.slashdot.org/story/26/02/07/033225/good-news-we-saved-the-bees-bad-news-we-saved-the-wrong-ones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Good News: We Saved the Bees. Bad News: We Saved the Wrong Ones.](https://news.slashdot.org/story/26/02/07/033225/good-news-we-saved-the-bees-bad-news-we-saved-the-wrong-ones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 19:34:00](https://slashdot.org/story/26/02/07/1914240/bitcoin-dropped-nearly-30-this-week-but-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bitcoin Dropped Nearly 30% This Week. But Why?](https://slashdot.org/story/26/02/07/1914240/bitcoin-dropped-nearly-30-this-week-but-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 19:18:28](https://lobste.rs/s/xd7x2w/going_through_snowden_documents_part_1) - [Going Through Snowden Documents, Part 1](https://libroot.org/posts/going-through-snowden-documents-part-1/)
* [2026-02-07, 19:07:27](https://news.ycombinator.com/item?id=46926576) - [Brookhaven Lab&apos;s RHIC concludes 25-year run with final collisions](https://www.hpcwire.com/off-the-wire/brookhaven-labs-rhic-concludes-25-year-run-with-final-collisions/)
* [2026-02-07, 18:55:50](https://lobste.rs/s/m8nxql/game_boy_advance_d_pad_capacitor) - [Game Boy Advance d-pad capacitor measurements](https://gekkio.fi/blog/2026/game-boy-advance-d-pad-capacitor-measurements/)
* [2026-02-07, 18:34:00](https://news.slashdot.org/story/26/02/07/073233/firefox-announces-ai-controls-to-block-its-upcoming-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Announces &apos;AI Controls&apos; To Block Its Upcoming AI Features](https://news.slashdot.org/story/26/02/07/073233/firefox-announces-ai-controls-to-block-its-upcoming-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 18:08:23](https://news.ycombinator.com/item?id=46926043) - [Speed up responses with fast mode](https://code.claude.com/docs/en/fast-mode)
* [2026-02-07, 17:49:00](https://soylentnews.org/article.pl?sid=26/02/06/2359259&amp;from=rss) - [Used EVs Currently Offer Car Buyers Lowest Lifetime Cost of Ownership](https://soylentnews.org/article.pl?sid=26/02/06/2359259&amp;from=rss)
* [2026-02-07, 17:45:27](https://news.ycombinator.com/item?id=46925811) - [Show HN: I saw this cool navigation reveal, so I made a simple HTML+CSS version](https://github.com/Momciloo/fun-with-clip-path)
* [2026-02-07, 17:39:53](https://news.ycombinator.com/item?id=46925741) - [SectorC: A C Compiler in 512 bytes (2023)](https://xorvoid.com/sectorc.html)
* [2026-02-07, 17:34:00](https://apple.slashdot.org/story/26/02/07/0830248/apple-plans-to-allow-outside-voice-controlled-ai-chatbots-in-carplay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Plans to Allow Outside Voice-Controlled AI Chatbots in CarPlay](https://apple.slashdot.org/story/26/02/07/0830248/apple-plans-to-allow-outside-voice-controlled-ai-chatbots-in-carplay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 17:27:49](https://lobste.rs/s/gvlmu1/beyond_agentic_coding) - [Beyond agentic coding](https://haskellforall.com/2026/02/beyond-agentic-coding)
* [2026-02-07, 17:01:24](https://lobste.rs/s/nhbnjf/bsky_thread_this_turns_maintainer_into) - [(Bsky thread) \&quot;This turns the maintainer into an unwitting vibe coder\&quot;](https://bsky.app/profile/fullmoon.id/post/3meadfaulhk2s)
* [2026-02-07, 16:34:00](https://hardware.slashdot.org/story/26/02/07/0624254/free-bi-directional-ev-chargers-tested-to-improve-massachusetts-power-grid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Free Bi-Directional EV Chargers Tested to Improve Massachusetts Power Grid](https://hardware.slashdot.org/story/26/02/07/0624254/free-bi-directional-ev-chargers-tested-to-improve-massachusetts-power-grid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 15:52:42](https://news.ycombinator.com/item?id=46924790) - [Al Lowe on model trains, funny deaths and working with Disney](https://spillhistorie.no/2026/02/06/interview-with-sierra-veteran-al-lowe/)
* [2026-02-07, 15:34:00](https://hardware.slashdot.org/story/26/02/07/0529254/moltbook-reddit-and-the-great-ai-bot-uprising-that-wasnt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Moltbook, Reddit, and The Great AI-Bot Uprising That Wasn&apos;t](https://hardware.slashdot.org/story/26/02/07/0529254/moltbook-reddit-and-the-great-ai-bot-uprising-that-wasnt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 15:30:09](https://lobste.rs/s/ab9jza/purpose_continuous_integration_is_fail) - [The purpose of Continuous Integration is to fail](https://blog.nix-ci.com/post/2026-02-05_the-purpose-of-ci-is-to-fail)
* [2026-02-07, 15:25:49](https://news.ycombinator.com/item?id=46924591) - [First Proof](https://arxiv.org/abs/2602.05192)
* [2026-02-07, 15:05:56](https://news.ycombinator.com/item?id=46924426) - [Software factories and the agentic moment](https://factory.strongdm.ai/)
* [2026-02-07, 14:58:44](https://lobste.rs/s/ocspc1/rememory_split_recovery_key_among) - [ReMemory - Split a recovery key among friends](https://eljojo.github.io/rememory/)
* [2026-02-07, 14:42:16](https://news.ycombinator.com/item?id=46924264) - [Stories from 25 Years of Software Development](https://susam.net/twenty-five-years-of-computing.html)
* [2026-02-07, 13:23:48](https://lobste.rs/s/ihzxzs/llms_could_be_shouldn_t_be_compilers) - [LLMs could be, but shouldn&apos;t be compilers](https://alperenkeles.com/posts/llms-could-be-but-shouldnt-be-compilers/)
* [2026-02-07, 13:20:25](https://lobste.rs/s/w3wixc/horrible_conclusion) - [A Horrible Conclusion](https://addisoncrump.info/research/a-horrible-conclusion/)
* [2026-02-07, 12:59:00](https://soylentnews.org/article.pl?sid=26/02/06/0310232&amp;from=rss) - [The World Factbook Shut Down Unceremonously](https://soylentnews.org/article.pl?sid=26/02/06/0310232&amp;from=rss)
* [2026-02-07, 12:27:25](https://lobste.rs/s/lrnqdz/stories_from_25_years_software) - [Stories From 25 Years of Software Development](https://susam.net/twenty-five-years-of-computing.html)
* [2026-02-07, 12:18:20](https://news.ycombinator.com/item?id=46923254) - [Hoot: Scheme on WebAssembly](https://www.spritely.institute/hoot/)
* [2026-02-07, 12:00:00](https://developers.slashdot.org/story/26/02/06/1953233/claude-code-is-the-inflection-point?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Claude Code is the Inflection Point](https://developers.slashdot.org/story/26/02/06/1953233/claude-code-is-the-inflection-point?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 11:30:30](https://lobste.rs/s/8dkwea/flirt_native_backend) - [Flirt: The Native Backend](https://blog.buenzli.dev/flirt-native-backend/)
* [2026-02-07, 11:21:29](https://news.ycombinator.com/item?id=46922969) - [The AI boom is causing shortages everywhere else](https://www.washingtonpost.com/technology/2026/02/07/ai-spending-economy-shortages/)
* [2026-02-07, 10:01:00](https://news.slashdot.org/story/26/02/06/1958258/new-bill-in-new-york-would-require-disclaimers-on-ai-generated-news-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Bill in New York Would Require Disclaimers on AI-Generated News Content](https://news.slashdot.org/story/26/02/06/1958258/new-bill-in-new-york-would-require-disclaimers-on-ai-generated-news-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 08:16:00](https://soylentnews.org/article.pl?sid=26/02/06/038224&amp;from=rss) - [US Spy Satellite Agency Declassifies High-Flying Cold War Listening Post](https://soylentnews.org/article.pl?sid=26/02/06/038224&amp;from=rss)
* [2026-02-07, 07:37:03](https://news.ycombinator.com/item?id=46922049) - [Vocal Guide – belt sing without killing yourself](https://jesperordrup.github.io/vocal-guide/)
* [2026-02-07, 07:30:00](https://it.slashdot.org/story/26/02/06/2027244/neocities-founder-stuck-in-chatbot-hell-after-bing-blocked-15-million-sites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Neocities Founder Stuck in Chatbot Hell After Bing Blocked 1.5 Million Sites](https://it.slashdot.org/story/26/02/06/2027244/neocities-founder-stuck-in-chatbot-hell-after-bing-blocked-15-million-sites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 05:15:15](https://lobste.rs/s/kbr1er/bob_beck_openbsd_on_why_vi_should_stay_vi) - [Bob Beck (OpenBSD) on why vi should stay vi (2006)](https://marc.info/?l=openbsd-misc&amp;m=115820462402673&amp;w=2)
* [2026-02-07, 03:28:00](https://soylentnews.org/article.pl?sid=26/02/06/031244&amp;from=rss) - [AI Agents Now Have Their Own Reddit-Style Social Network, and It&apos;s Getting Weird Fast](https://soylentnews.org/article.pl?sid=26/02/06/031244&amp;from=rss)
* [2026-02-06, 22:45:00](https://soylentnews.org/article.pl?sid=26/02/06/0248203&amp;from=rss) - [The TV Industry Finally Concedes That the Future May Not be in 8K](https://soylentnews.org/article.pl?sid=26/02/06/0248203&amp;from=rss)
* [2026-02-06, 21:51:23](https://news.ycombinator.com/item?id=46918612) - [OpenCiv3: Open-source, cross-platform reimagining of Civilization III](https://openciv3.org/)
* [2026-02-06, 21:40:16](https://lobste.rs/s/ahca9t/maple_mono_open_source_monospace_font) - [Maple Mono: Open source monospace font](https://font.subf.dev/en/)
* [2026-02-06, 21:33:11](https://news.ycombinator.com/item?id=46918429) - [Show HN: Look Ma, No Linux: Shell, App Installer, Vi, Cc on ESP32-S3 / BreezyBox](https://github.com/valdanylchuk/breezydemo)
* [2026-02-06, 18:00:00](https://soylentnews.org/article.pl?sid=26/02/05/133201&amp;from=rss) - [GNU Hurd is \&quot;Almost There\&quot; With X86_64, SMP &amp; ~75% of Debian Packages Building](https://soylentnews.org/article.pl?sid=26/02/05/133201&amp;from=rss)
* [2026-02-06, 13:11:00](https://soylentnews.org/article.pl?sid=26/02/05/1252238&amp;from=rss) - [Oracle May Lay Off 30,000 and Sell Healthcare Division to Fund AI Buildout](https://soylentnews.org/article.pl?sid=26/02/05/1252238&amp;from=rss)
* [2026-02-06, 12:36:01](https://lobste.rs/s/xq1ta4/tactical_tornado_is_new_default) - [Tactical tornado is the new default](https://olano.dev/blog/tactical-tornado)
* [2026-02-06, 08:21:00](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss) - [How to Bypass a Parallel Port Dongle](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss)
* [2026-02-06, 03:59:00](https://soylentnews.org/article.pl?sid=26/02/03/0321201&amp;from=rss) - [Notepad++ update feature hijacked by Chinese state hackers for months](https://soylentnews.org/article.pl?sid=26/02/03/0321201&amp;from=rss)
* [2026-02-05, 23:17:00](https://soylentnews.org/article.pl?sid=26/02/03/0318252&amp;from=rss) - [Overly Involved Parents May Hold Their Kids Back Professionally](https://soylentnews.org/article.pl?sid=26/02/03/0318252&amp;from=rss)
* [2026-02-05, 18:29:00](https://soylentnews.org/article.pl?sid=26/02/03/0317238&amp;from=rss) - [The Brain’s Response To A Heart Attack May Worsen Recovery](https://soylentnews.org/article.pl?sid=26/02/03/0317238&amp;from=rss)
* [2026-02-05, 13:43:00](https://soylentnews.org/article.pl?sid=26/02/02/1520246&amp;from=rss) - [Amutable: Systemd Creator Lennart Poettering Launches New Linux Security Venture](https://soylentnews.org/article.pl?sid=26/02/02/1520246&amp;from=rss)
* [2026-02-05, 11:46:00](https://soylentnews.org/article.pl?sid=26/02/02/150245&amp;from=rss) - [RIP Didier Spaier](https://soylentnews.org/article.pl?sid=26/02/02/150245&amp;from=rss)
* [2026-02-05, 09:02:00](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss) - [Exploring How Gut Bacteria Alter the Flavor of Black Ivory Coffee Beans](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss)
* [2026-02-05, 08:56:25](https://news.ycombinator.com/item?id=46897407) - [Wood Gas Vehicles: Firewood in the Fuel Tank (2010)](https://solar.lowtechmagazine.com/2010/01/wood-gas-vehicles-firewood-in-the-fuel-tank/)
* [2026-02-05, 04:15:00](https://soylentnews.org/article.pl?sid=26/02/02/1450223&amp;from=rss) - [Autonomous Cars Vulnerable to Prompt Injection](https://soylentnews.org/article.pl?sid=26/02/02/1450223&amp;from=rss)
* [2026-02-04, 23:31:00](https://soylentnews.org/article.pl?sid=26/02/02/1443223&amp;from=rss) - [The UK Government Gets It Spectacularly Wrong On AI](https://soylentnews.org/article.pl?sid=26/02/02/1443223&amp;from=rss)
* [2026-02-04, 19:59:12](https://news.ycombinator.com/item?id=46890814) - [Start all of your commands with a comma (2009)](https://rhodesmill.org/brandon/2009/commands-with-comma/)
* [2026-02-04, 18:47:00](https://soylentnews.org/article.pl?sid=26/02/02/1438258&amp;from=rss) - [Cooler Bedroom Temperatures Help the Heart Recover During Sleep](https://soylentnews.org/article.pl?sid=26/02/02/1438258&amp;from=rss)
* [2026-02-04, 14:00:00](https://soylentnews.org/communityreviews/article.pl?sid=26/02/01/0325230&amp;from=rss) - [Review of iwStack.com](https://soylentnews.org/communityreviews/article.pl?sid=26/02/01/0325230&amp;from=rss)
* [2026-02-04, 11:13:33](https://news.ycombinator.com/item?id=46884412) - [Show HN: A luma dependent chroma compression algorithm (image compression)](https://www.bitsnbites.eu/a-spatial-domain-variable-block-size-luma-dependent-chroma-compression-algorithm/)
* [2026-02-04, 09:16:00](https://soylentnews.org/article.pl?sid=26/02/02/1228214&amp;from=rss) - [When 20-Year-Old Bill Gates Fought the &apos;Thieves&apos; Who Stole His First Code](https://soylentnews.org/article.pl?sid=26/02/02/1228214&amp;from=rss)
* [2026-02-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/02/02/0110236&amp;from=rss) - [Research Team Reports Breakthrough in Pancreatic Cancer Treatment](https://soylentnews.org/article.pl?sid=26/02/02/0110236&amp;from=rss)
