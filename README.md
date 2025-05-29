# [News Summary](https://kherrick.github.io/news-summary/)

## Tech and Corporate Updates

* [Microsoft Is Opening Windows Update To Third-Party Apps](https://tech.slashdot.org/story/25/05/28/2232237/microsoft-is-opening-windows-update-to-third-party-apps?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [EA Cancels Black Panther Game, Closes Cliffhanger Games](https://games.slashdot.org/story/25/05/28/2226236/ea-cancels-black-panther-game-closes-cliffhanger-games?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [CD Projekt Red is Moving Forward With Cyberpunk 2](https://games.slashdot.org/story/25/05/28/2018208/cd-projekt-red-is-moving-forward-with-cyberpunk-2?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Intel Uncovers Alleged Embezzlement Involving Former Employee And Supplier](https://soylentnews.org/article.pl?sid=25/05/27/2241220&from=rss)

## Legal and Policy Developments

* [US Trade Court Finds Trump Tariffs Illegal](https://www.bloomberg.com/news/articles/2025-05-28/trump-s-global-tariffs-blocked-by-us-trade-court)

* [Japanese Authorities Refer 'Spoiler Website' Operators To Prosecutors in Rare Corporate Copyright Case](https://slashdot.org/story/25/05/28/111250/japanese-authorities-refer-spoiler-website-operators-to-prosecutors-in-rare-corporate-copyright-case?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [US Will Ban Foreign Officials To Punish Countries For Social Media Rules](https://yro.slashdot.org/story/25/05/28/201215/us-will-ban-foreign-officials-to-punish-countries-for-social-media-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cutting-Edge Tech and Innovation

* [Humanoid AI-powered Robots Duke It Out In China Fight Competition](https://soylentnews.org/article.pl?sid=25/05/27/2358202&from=rss)

* [A toy RTOS inside Super Mario Bros. using emulator save states](https://prettygoodblog.com/p/what-threads-are-part-2)

* [Launch HN: MindFort (YC X25) – AI agents for continuous pentesting](https://news.ycombinator.com/item?id=44117465)

* [Google Photos Turns 10 With Major Editor Redesign, QR Code Sharing](https://tech.slashdot.org/story/25/05/28/1940259/google-photos-turns-10-with-major-editor-redesign-qr-code-sharing?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cybersecurity Concerns

* [Mysterious Database of 184 Million Records Exposes Vast Array of Login Credentials](https://yro.slashdot.org/story/25/05/28/2024243/mysterious-database-of-184-million-records-exposes-vast-array-of-login-credentials?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Cyberattack Surge Creates Opportunity for Insurers, Prompts Rethink on Premiums](https://it.slashdot.org/story/25/05/28/1215203/cyberattack-surge-creates-opportunity-for-insurers-prompts-rethink-on-premiums?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Getting a Cease and Desist from Waffle House](https://www.jack.bio/blog/wafflehouse)

## Cultural and Gaming Trends

* [Blue Book Sales Surge As Universities Combat AI Cheating](https://news.slashdot.org/story/25/05/28/1526237/blue-book-sales-surge-as-universities-combat-ai-cheating?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Discord's New Currency Pays Users To Interact With Ads](https://news.slashdot.org/story/25/05/28/2221220/discords-new-currency-pays-users-to-interact-with-ads?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [The Hobby Computer Culture](https://it.slashdot.org/story/25/05/28/126210/the-hobby-computer-culture?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Scientific and Environmental Insights

* [The anomalous magnetic moment of the muon in the Standard Model: an update](https://arxiv.org/abs/2505.21476)

* [80% Chance of Record Heat in Coming Years, Climate Agencies Forecast](https://news.slashdot.org/story/25/05/28/1616255/80-chance-of-record-heat-in-coming-years-climate-agencies-forecast?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Telescope Upgrade Reveals Sun's "Coronal Rain" In Unprecedented Detail](https://soylentnews.org/article.pl?sid=25/05/27/2237231&from=rss)

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

* [2025-05-29, 01:30:00](https://soylentnews.org/article.pl?sid=25/05/27/2358202&amp;from=rss) - [Humanoid AI-powered Robots Duke It Out In China Fight Competition](https://soylentnews.org/article.pl?sid=25/05/27/2358202&amp;from=rss)
* [2025-05-29, 01:00:00](https://tech.slashdot.org/story/25/05/28/2232237/microsoft-is-opening-windows-update-to-third-party-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Is Opening Windows Update To Third-Party Apps](https://tech.slashdot.org/story/25/05/28/2232237/microsoft-is-opening-windows-update-to-third-party-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 00:20:00](https://games.slashdot.org/story/25/05/28/2226236/ea-cancels-black-panther-game-closes-cliffhanger-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EA Cancels Black Panther Game, Closes Cliffhanger Games](https://games.slashdot.org/story/25/05/28/2226236/ea-cancels-black-panther-game-closes-cliffhanger-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 00:06:19](https://news.ycombinator.com/item?id=44121732) - [US Trade Court Finds Trump Tariffs Illegal](https://www.bloomberg.com/news/articles/2025-05-28/trump-s-global-tariffs-blocked-by-us-trade-court)
* [2025-05-28, 23:40:00](https://news.slashdot.org/story/25/05/28/2221220/discords-new-currency-pays-users-to-interact-with-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Discord&apos;s New Currency Pays Users To Interact With Ads](https://news.slashdot.org/story/25/05/28/2221220/discords-new-currency-pays-users-to-interact-with-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 23:00:00](https://yro.slashdot.org/story/25/05/28/2024243/mysterious-database-of-184-million-records-exposes-vast-array-of-login-credentials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mysterious Database of 184 Million Records Exposes Vast Array of Login Credentials](https://yro.slashdot.org/story/25/05/28/2024243/mysterious-database-of-184-million-records-exposes-vast-array-of-login-credentials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 22:36:26](https://lobste.rs/s/uw4lp1/go_may_require_prefaulting_mmap) - [go may require prefaulting mmap](https://flak.tedunangst.com/post/go-may-require-prefaulting-mmap)
* [2025-05-28, 22:22:18](https://news.ycombinator.com/item?id=44121177) - [HTAP Databases Are Dead](https://www.mooncake.dev/blog/htap-is-dead)
* [2025-05-28, 22:20:00](https://games.slashdot.org/story/25/05/28/2018208/cd-projekt-red-is-moving-forward-with-cyberpunk-2?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CD Projekt Red is Moving Forward With Cyberpunk 2](https://games.slashdot.org/story/25/05/28/2018208/cd-projekt-red-is-moving-forward-with-cyberpunk-2?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 22:02:47](https://lobste.rs/s/029ntw/parking_lot_ffffffffffffffff) - [parking_lot: ffffffffffffffff](https://fly.io/blog/parking-lot-ffffffffffffffff/)
* [2025-05-28, 21:40:00](https://yro.slashdot.org/story/25/05/28/201215/us-will-ban-foreign-officials-to-punish-countries-for-social-media-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Will Ban Foreign Officials To Punish Countries For Social Media Rules](https://yro.slashdot.org/story/25/05/28/201215/us-will-ban-foreign-officials-to-punish-countries-for-social-media-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 21:00:00](https://apple.slashdot.org/story/25/05/28/1953246/apple-will-announce-ios-26-at-wwdc-not-ios-19?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Will Announce iOS 26 at WWDC, Not iOS 19](https://apple.slashdot.org/story/25/05/28/1953246/apple-will-announce-ios-26-at-wwdc-not-ios-19?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 20:49:00](https://soylentnews.org/article.pl?sid=25/05/27/2241220&amp;from=rss) - [Intel Uncovers Alleged Embezzlement Involving Former Employee And Supplier](https://soylentnews.org/article.pl?sid=25/05/27/2241220&amp;from=rss)
* [2025-05-28, 20:47:30](https://news.ycombinator.com/item?id=44120507) - [Long live American Science and Surplus (which needs your help)](https://milwaukeerecord.com/city-life/long-live-american-science-surplus-which-needs-your-help/)
* [2025-05-28, 20:38:43](https://lobste.rs/s/s6utq0/saying_bye_glitch) - [Saying Bye to Glitch](https://pketh.org/bye-glitch.html)
* [2025-05-28, 20:20:00](https://slashdot.org/story/25/05/28/1946247/xai-to-pay-telegram-300-million-to-integrate-grok-into-chat-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [xAI To Pay Telegram $300 Million To Integrate Grok Into Chat App](https://slashdot.org/story/25/05/28/1946247/xai-to-pay-telegram-300-million-to-integrate-grok-into-chat-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 20:15:43](https://news.ycombinator.com/item?id=44120241) - [A toy RTOS inside Super Mario Bros. using emulator save states](https://prettygoodblog.com/p/what-threads-are-part-2)
* [2025-05-28, 20:13:56](https://news.ycombinator.com/item?id=44120224) - [The anomalous magnetic moment of the muon in the Standard Model: an update](https://arxiv.org/abs/2505.21476)
* [2025-05-28, 19:51:25](https://lobste.rs/s/ghh3w5/using_sat_get_world_record_on_linkedin_s) - [Using SAT to Get the World Record on LinkedIn&apos;s Queens](https://ryanberger.me/posts/queens/)
* [2025-05-28, 19:42:00](https://tech.slashdot.org/story/25/05/28/1940259/google-photos-turns-10-with-major-editor-redesign-qr-code-sharing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Photos Turns 10 With Major Editor Redesign, QR Code Sharing](https://tech.slashdot.org/story/25/05/28/1940259/google-photos-turns-10-with-major-editor-redesign-qr-code-sharing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 19:37:47](https://news.ycombinator.com/item?id=44119890) - [What does “Undecidable” mean, anyway](https://buttondown.com/hillelwayne/archive/what-does-undecidable-mean-anyway/)
* [2025-05-28, 19:34:34](https://lobste.rs/s/rqc5yc/compiler_explorer_promise_urls_last) - [Compiler Explorer and the Promise of URLs That Last Forever](https://xania.org/202505/compiler-explorer-urls-forever)
* [2025-05-28, 19:20:19](https://lobste.rs/s/awmftl/performance_es6_features_relative_es5) - [Performance of ES6 features relative to the ES5 baseline operations per second (2022)](http://incaseofstairs.com/six-speed/)
* [2025-05-28, 18:40:00](https://slashdot.org/story/25/05/28/111250/japanese-authorities-refer-spoiler-website-operators-to-prosecutors-in-rare-corporate-copyright-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japanese Authorities Refer &apos;Spoiler Website&apos; Operators To Prosecutors in Rare Corporate Copyright Case](https://slashdot.org/story/25/05/28/111250/japanese-authorities-refer-spoiler-website-operators-to-prosecutors-in-rare-corporate-copyright-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 18:35:28](https://news.ycombinator.com/item?id=44119173) - [Prohibition and ice cream in the US Navy](https://www.oldsaltblog.com/2025/05/how-ice-cream-replaced-booze-in-the-us-navy-2/)
* [2025-05-28, 18:00:00](https://news.slashdot.org/story/25/05/28/1616255/80-chance-of-record-heat-in-coming-years-climate-agencies-forecast?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [80% Chance of Record Heat in Coming Years, Climate Agencies Forecast](https://news.slashdot.org/story/25/05/28/1616255/80-chance-of-record-heat-in-coming-years-climate-agencies-forecast?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 17:59:02](https://news.ycombinator.com/item?id=44118818) - [Deepseek R1-0528](https://huggingface.co/deepseek-ai/DeepSeek-R1-0528)
* [2025-05-28, 17:35:48](https://lobste.rs/s/42qb2p/i_am_disappointed_ai_discourse) - [I am disappointed in the AI discourse](https://steveklabnik.com/writing/i-am-disappointed-in-the-ai-discourse/)
* [2025-05-28, 17:28:20](https://lobste.rs/s/dsludj/linux_mount_namespaces_persistence) - [Linux Mount Namespaces and persistence](https://jmtd.net/log/mount_namespaces/)
* [2025-05-28, 17:22:47](https://news.ycombinator.com/item?id=44118373) - [Compiling a neural net to C for a speedup](https://slightknack.dev/blog/difflogic/)
* [2025-05-28, 17:20:00](https://it.slashdot.org/story/25/05/28/126210/the-hobby-computer-culture?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Hobby Computer Culture](https://it.slashdot.org/story/25/05/28/126210/the-hobby-computer-culture?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 17:14:58](https://lobste.rs/s/v0yrwa/compiling_neural_net_c_for_1_744x_speedup) - [Compiling a Neural Net to C for a 1,744× speedup](https://slightknack.dev/blog/difflogic/)
* [2025-05-28, 17:07:55](https://lobste.rs/s/sd0qfz/mullvad_leta) - [Mullvad Leta](https://leta.mullvad.net)
* [2025-05-28, 17:04:45](https://lobste.rs/s/kwmhnq/how_i_take_work_notes_as_developer) - [How I take work notes as a developer](https://hamatti.org/posts/how-i-take-work-notes-as-a-developer/)
* [2025-05-28, 17:01:26](https://news.ycombinator.com/item?id=44118127) - [GoGoGrandparent (YC S16) is hiring Back end Engineers](https://news.ycombinator.com/item?id=44118127)
* [2025-05-28, 16:53:11](https://news.ycombinator.com/item?id=44118023) - [Show HN: I rewrote my Mac Electron app in Rust](https://desktopdocs.com/?v=2025)
* [2025-05-28, 16:51:19](https://lobste.rs/s/fxlce7/ray_tracing_j) - [Ray Tracing in J](https://idle.nprescott.com/2020/ray-tracing-in-j.html)
* [2025-05-28, 16:40:00](https://tech.slashdot.org/story/25/05/28/1638216/japan-post-launches-digital-address-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Post Launches &apos;Digital Address&apos; System](https://tech.slashdot.org/story/25/05/28/1638216/japan-post-launches-digital-address-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 16:33:49](https://news.ycombinator.com/item?id=44117779) - [Japan Post launches &apos;digital address&apos; system](https://www.japantimes.co.jp/business/2025/05/27/companies/japan-post-digital-address/)
* [2025-05-28, 16:28:20](https://news.ycombinator.com/item?id=44117722) - [Compiler Explorer and the promise of URLs that last forever](https://xania.org/202505/compiler-explorer-urls-forever)
* [2025-05-28, 16:04:00](https://soylentnews.org/article.pl?sid=25/05/27/2237231&amp;from=rss) - [Telescope Upgrade Reveals Sun&apos;s \&quot;Coronal Rain\&quot; In Unprecedented Detail](https://soylentnews.org/article.pl?sid=25/05/27/2237231&amp;from=rss)
* [2025-05-28, 16:01:00](https://it.slashdot.org/story/25/05/28/1215203/cyberattack-surge-creates-opportunity-for-insurers-prompts-rethink-on-premiums?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cyberattack Surge Creates Opportunity for Insurers, Prompts Rethink on Premiums](https://it.slashdot.org/story/25/05/28/1215203/cyberattack-surge-creates-opportunity-for-insurers-prompts-rethink-on-premiums?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 16:00:44](https://news.ycombinator.com/item?id=44117465) - [Launch HN: MindFort (YC X25) – AI agents for continuous pentesting](https://news.ycombinator.com/item?id=44117465)
* [2025-05-28, 15:48:37](https://news.ycombinator.com/item?id=44117302) - [Getting a Cease and Desist from Waffle House](https://www.jack.bio/blog/wafflehouse)
* [2025-05-28, 15:41:21](https://lobste.rs/s/onpmsm/2024_medley_interlisp_annual_report) - [2024 Medley Interlisp Annual Report](https://interlisp.org/project/status/2024medleyannualreport/)
* [2025-05-28, 15:36:54](https://lobste.rs/s/xe61v2/llm_codegen_go_brrr_parallelization_with) - [LLM Codegen go Brrr – Parallelization with Git Worktrees and Tmux](https://www.skeptrune.com/posts/git-worktrees-agents-and-tmux/)
* [2025-05-28, 15:27:42](https://news.ycombinator.com/item?id=44117059) - [Show HN: Tesseral – Open-Source Auth](https://github.com/tesseral-labs/tesseral)
* [2025-05-28, 15:26:00](https://news.slashdot.org/story/25/05/28/1526237/blue-book-sales-surge-as-universities-combat-ai-cheating?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blue Book Sales Surge As Universities Combat AI Cheating](https://news.slashdot.org/story/25/05/28/1526237/blue-book-sales-surge-as-universities-combat-ai-cheating?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 15:13:38](https://news.ycombinator.com/item?id=44116872) - [LLM codegen go brrr – Parallelization with Git worktrees and tmux](https://www.skeptrune.com/posts/git-worktrees-agents-and-tmux/)
* [2025-05-28, 14:11:47](https://news.ycombinator.com/item?id=44116236) - [De-anonymization attacks against the privacy coin XMR](https://monero.forex/is-monero-totally-private-a-comprehensive-analysis-of-de-anonymization-attacks-against-the-privacy-coin/)
* [2025-05-28, 13:43:38](https://news.ycombinator.com/item?id=44115973) - [The Blowtorch Theory: A new model for structure formation in the universe](https://theeggandtherock.com/p/the-blowtorch-theory-a-new-model)
* [2025-05-28, 11:19:00](https://soylentnews.org/article.pl?sid=25/05/27/2233218&amp;from=rss) - [iPhone Won&apos;t Be Made In US Anytime Soon: Analysts ](https://soylentnews.org/article.pl?sid=25/05/27/2233218&amp;from=rss)
* [2025-05-28, 10:57:50](https://lobste.rs/s/1kfzkq/cory_doctorow_on_how_we_lost_internet) - [Cory Doctorow on how we lost the internet](https://lwn.net/SubscriberLink/1021871/ffeed46818908c91/)
* [2025-05-28, 09:40:28](https://lobste.rs/s/byk1vh/personal_software_runtime_inspired_by) - [A Personal Software Runtime inspired by Emacs, Plan 9, Erlang, Hypermedia, and Unix](https://github.com/leoshimo/vrs)
* [2025-05-28, 08:44:52](https://lobste.rs/s/pslyxg/why_are_2025_05_28_2025_05_28_different_days) - [Why are 2025/05/28 and 2025-05-28 different days in JavaScript?](https://brandondong.github.io/blog/javascript_dates/)
* [2025-05-28, 08:33:36](https://lobste.rs/s/koodxv/thought_on_javascript_proof_work_anti) - [A thought on JavaScript \&quot;proof of work\&quot; anti-scraper systems](https://utcc.utoronto.ca/~cks/space/blog/web/JavaScriptScraperObstacles)
* [2025-05-28, 08:16:11](https://lobste.rs/s/95ekg3/vibe_coding_for_teams_thoughts_date) - [Vibe coding for teams, thoughts to date](https://laughingmeme.org//2025/05/25/vibe-coding-for-teams.html)
* [2025-05-28, 06:34:00](https://soylentnews.org/article.pl?sid=25/05/27/124252&amp;from=rss) - [The CIA Used A Star Wars Fan Site To Secretly Communicate With Spies](https://soylentnews.org/article.pl?sid=25/05/27/124252&amp;from=rss)
* [2025-05-28, 06:32:01](https://lobste.rs/s/kj0aux/firefox_139_adds_experimental_ai_powered) - [Firefox 139 adds experimental AI-powered link previews](https://9to5mac.com/2025/05/27/firefox-ai-link-previews/)
* [2025-05-28, 06:27:11](https://news.ycombinator.com/item?id=44113210) - [As a developer, my most important tools are a pen and a notebook](https://hamatti.org/posts/as-a-developer-my-most-important-tools-are-a-pen-and-a-notebook/)
* [2025-05-28, 01:47:00](https://soylentnews.org/article.pl?sid=25/05/27/120223&amp;from=rss) - [Security News: Telemessage Worsens, Predictive Patching, GoDaddy Incompetence, Credential DB Found](https://soylentnews.org/article.pl?sid=25/05/27/120223&amp;from=rss)
* [2025-05-27, 21:36:31](https://lobste.rs/s/47b4ds/scrappy_make_little_apps_for_you_your) - [Scrappy: make little apps for you and your friends](https://pontus.granstrom.me/scrappy/)
* [2025-05-27, 21:04:00](https://soylentnews.org/article.pl?sid=25/05/27/1135228&amp;from=rss) - [Gabe Newell&apos;s Brain-Computer Interface Startup to Reveal First Chips Later This Year](https://soylentnews.org/article.pl?sid=25/05/27/1135228&amp;from=rss)
* [2025-05-27, 20:53:03](https://news.ycombinator.com/item?id=44110584) - [Show HN: My LLM CLI tool can run tools now, from Python code or plugins](https://simonwillison.net/2025/May/27/llm-tools/)
* [2025-05-27, 19:27:51](https://lobste.rs/s/wfams6/awesome_emacs_on_macos) - [Awesome Emacs on macOS](https://xenodium.com/awesome-emacs-on-macos)
* [2025-05-27, 18:05:42](https://lobste.rs/s/xafw94/own_your_email_domain) - [Own Your Email Domain](https://matthewsanabria.dev/posts/own-your-email-domain/)
* [2025-05-27, 16:55:56](https://lobste.rs/s/2uukup/pyrefly_vs_ty_comparing_python_s_two_new) - [Pyrefly vs. ty: Comparing Python’s Two New Rust-Based Type Checkers](https://blog.edward-li.com/tech/comparing-pyrefly-vs-ty/)
* [2025-05-27, 16:16:00](https://soylentnews.org/article.pl?sid=25/05/27/1132236&amp;from=rss) - [Texas is Getting Ready to Ban Social Media for Anyone Under 18](https://soylentnews.org/article.pl?sid=25/05/27/1132236&amp;from=rss)
* [2025-05-27, 13:45:20](https://lobste.rs/s/9xx7gs/list_tech_for_good_job_boards) - [List of \&quot;tech for good\&quot; job boards](https://evanhahn.com/list-of-tech-for-good-job-boards/)
* [2025-05-27, 11:31:00](https://soylentnews.org/article.pl?sid=25/05/27/0520206&amp;from=rss) - [Research Reveals &apos;Forever Chemicals&apos; Present in Beer](https://soylentnews.org/article.pl?sid=25/05/27/0520206&amp;from=rss)
* [2025-05-27, 06:43:00](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss) - [Scientists Discover Potential New Targets For Alzheimer’s Drugs](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss)
* [2025-05-27, 01:53:00](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss) - [Google Brings Ads to AI Search](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss)
* [2025-05-26, 21:49:48](https://news.ycombinator.com/item?id=44101997) - [Unlocking Ractors: class instance variables in Ruby](https://byroot.github.io/ruby/performance/2025/05/24/unlocking-ractors-class-variables.html)
* [2025-05-26, 21:07:00](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss) - [The Sun is Producing Strong Solar Flares; Are There More Than Expected During This Solar Cycle?](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss)
* [2025-05-26, 16:21:00](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss) - [Ex-NSA Listened to Scattered Spider&apos;s Calls: &apos;They&apos;re Good&apos;](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss)
* [2025-05-26, 12:29:53](https://news.ycombinator.com/item?id=44096823) - [Grass Rendering Series](https://hexaquo.at/pages/grass-rendering-series-part-1-theory/)
* [2025-05-26, 11:36:00](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss) - [GitHub Copilot Angles for Promotion From Assistant to Agent](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss)
* [2025-05-26, 09:23:12](https://news.ycombinator.com/item?id=44095553) - [YAD: display graphical dialogs from shell scripts or command line](http://yad-guide.ingk.se/#_introduction)
* [2025-05-26, 06:48:00](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss) - [Positive Proof-of-Concept Experiments May Lead to the World&apos;s First Treatment for Celiac Disease](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss)
* [2025-05-26, 02:00:00](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss) - [We did the Math on AI’s Energy Footprint. Here’s the Story you Haven’t Heard.](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss)
* [2025-05-25, 21:11:00](https://soylentnews.org/article.pl?sid=25/05/24/1755248&amp;from=rss) - [Evidence for &apos;Planet Nine&apos; Lurking on the Fringes of the Solar System is Building](https://soylentnews.org/article.pl?sid=25/05/24/1755248&amp;from=rss)
* [2025-05-25, 16:25:00](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss) - [The Roman Massacre That Never Happened](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss)
* [2025-05-25, 14:00:07](https://news.ycombinator.com/item?id=44087898) - [A Visual History of Chessmen](https://chesshistory.github.io/)
* [2025-05-25, 13:46:56](https://news.ycombinator.com/item?id=44087809) - [What If We Had Bigger Brains? Imagining Minds Beyond Ours](https://writings.stephenwolfram.com/2025/05/what-if-we-had-bigger-brains-imagining-minds-beyond-ours/)
* [2025-05-25, 12:38:27](https://news.ycombinator.com/item?id=44087390) - [Mathematical Fiction](https://kasmana.people.charleston.edu/MATHFICT/default.html)
* [2025-05-25, 12:10:44](https://news.ycombinator.com/item?id=44087248) - [Basic for the Raspberry Pi Pico and Pico 2](https://geoffg.net/picomite.html)
* [2025-05-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss) - [The Pedestrians Who Abetted a Hawk’s Deadly Attack](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss)
* [2025-05-25, 09:50:06](https://news.ycombinator.com/item?id=44086721) - [Collatz&apos;s Ant and Similarity of Landscapes](https://gbragafibra.github.io/2025/05/18/collatz_ant3.html)
* [2025-05-25, 08:33:46](https://news.ycombinator.com/item?id=44086429) - [Visualize and debug Rust programs with a new lens](https://firedbg.sea-ql.org/)
* [2025-05-25, 06:55:00](https://soylentnews.org/article.pl?sid=25/05/24/1716210&amp;from=rss) - [Jupiter Was Formerly Twice Its Current Size and Had a Much Stronger Magnetic Field ](https://soylentnews.org/article.pl?sid=25/05/24/1716210&amp;from=rss)
* [2025-05-25, 02:09:00](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss) - [VPN Service Cancels Customers&apos; Lifetime Subscriptions After Takeover](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss)
