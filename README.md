# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Innovations

* [AI May Already Be Shrinking Entry-Level Jobs In Tech, New Research Suggests](https://slashdot.org/story/25/05/28/2239206/ai-may-already-be-shrinking-entry-level-jobs-in-tech-new-research-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Comments highlight concerns over automation's impact on career opportunities.

* [Simple programming language with offline usable browser IDE](https://tiki.li/apps/tut_learn.html?v=2505e) - A new tool for coding enthusiasts to start programming without setup complications.

* [Humanoid AI-powered Robots Duke It Out In China Fight Competition](https://soylentnews.org/article.pl?sid=25/05/27/2358202&utm_medium=feed) - Showcasing the rapid evolution of robotics in competitive settings.

* [Microsoft Is Opening Windows Update To Third-Party Apps](https://tech.slashdot.org/story/25/05/28/2232237/microsoft-is-opening-windows-update-to-third-party-apps?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Potentially game-changing integration for Windows users and developers.

## Science and Space Exploration

* [Astronomers Discover Mystery Cosmic Body Bursting With X-Rays](https://science.slashdot.org/story/25/05/29/0238200/astronomers-discover-mystery-cosmic-body-bursting-with-x-rays?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Unprecedented findings shedding new light on cosmic phenomena.

* [Scientists Just Discovered A Mysterious New World Far Beyond Pluto](https://soylentnews.org/article.pl?sid=25/05/28/0352254&utm_medium=feed) - Comments speculate on the implications for our understanding of the solar system.

* [Evidence for 'Planet Nine' Lurking on the Fringes of the Solar System is Building](https://soylentnews.org/article.pl?sid=25/05/24/1755248&utm_medium=feed) - Theoretical planet continues to intrigue astronomers worldwide.

## Cybersecurity and Privacy

* [Data Broker Giant LexisNexis Says Breach Exposed Personal Information of Over 364,000 People](https://it.slashdot.org/story/25/05/29/0232235/data-broker-giant-lexisnexis-says-breach-exposed-personal-information-of-over-364000-people?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A stark reminder of vulnerabilities in data privacy.

* [Mysterious Database of 184 Million Records Exposes Vast Array of Login Credentials](https://yro.slashdot.org/story/25/05/28/2024243/mysterious-database-of-184-million-records-exposes-vast-array-of-login-credentials?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Comments discuss preventative measures against large-scale breaches.

* [Security News: Telemessage Worsens, Predictive Patching, GoDaddy Incompetence, Credential DB Found](https://soylentnews.org/article.pl?sid=25/05/27/120223&utm_medium=feed) - A roundup revealing ongoing cybersecurity challenges.

## Programming and Software Tools

* [Show HN: I made a Zero-config tool to visualize your code](https://staying.fun/en) - Innovating the way programmers interact with source code.

* [Compiler Explorer and the Promise of URLs That Last Forever](https://xania.org/202505/compiler-explorer-urls-forever) - Comments discuss the long-term reliability of shared compiler states.

* [RSyncUI – A SwiftUI based macOS GUI for rsync](https://github.com/rsyncOSX/RsyncUI) - Streamlining a classic tool for data synchronization and backups.

* [Show HN: Typed-FFmpeg 3.0–Typed Interface to FFmpeg and Visual Filter Editor](https://github.com/livingbio/typed-ffmpeg) - For enthusiasts working with audio and video data processing.

## Climate and Environment

* [World Faces New Danger of 'Economic Denial' in Climate Fight, Cop30 Head Says](https://news.slashdot.org/story/25/05/28/2048209/world-faces-new-danger-of-economic-denial-in-climate-fight-cop30-head-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Challenges in balancing financial commitments and environmental goals.

* [80% Chance of Record Heat in Coming Years, Climate Agencies Forecast](https://news.slashdot.org/story/25/05/28/1616255/80-chance-of-record-heat-in-coming-years-climate-agencies-forecast?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Urgent implications for global warming predictions.

## Miscellaneous

* [The MAHA Report Cites Studies That Don't Exist](https://www.notus.org/health-science/make-america-healthy-again-report-citation-errors) - Questions raised about the validity of cited scientific research.

* [I taught my 3-year-old to read like a 9-year-old](https://www.theintrinsicperspective.com/p/how-i-taught-my-3-year-old-to-read) - A deep dive into effective early childhood education strategies.

* [They used Xenon to climb Everest in days – is it the future of mountaineering?](https://www.nytimes.com/2025/05/27/world/europe/mount-everest-xenon-gas-nepal-uk-climbers.html) - Controversial innovations reshaping extreme sports.

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

* [2025-05-29, 13:00:00](https://slashdot.org/story/25/05/28/2239206/ai-may-already-be-shrinking-entry-level-jobs-in-tech-new-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI May Already Be Shrinking Entry-Level Jobs In Tech, New Research Suggests](https://slashdot.org/story/25/05/28/2239206/ai-may-already-be-shrinking-entry-level-jobs-in-tech-new-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 12:30:35](https://lobste.rs/s/n2fzkf/first_version_elicitation_mcp_draft) - [First version of Elicitation to the MCP draft specification](https://modelcontextprotocol.io/specification/draft/client/elicitation)
* [2025-05-29, 12:29:27](https://lobste.rs/s/hs7frz/orthogonal_persistence_model) - [Orthogonal Persistence, the Model](https://www.youtube.com/watch?v=stEl-RBJVdA)
* [2025-05-29, 12:06:17](https://news.ycombinator.com/item?id=44125183) - [The MAHA Report Cites Studies That Don&apos;t Exist](https://www.notus.org/health-science/make-america-healthy-again-report-citation-errors)
* [2025-05-29, 11:47:55](https://news.ycombinator.com/item?id=44125059) - [I taught my 3-year-old to read like a 9-year-old](https://www.theintrinsicperspective.com/p/how-i-taught-my-3-year-old-to-read)
* [2025-05-29, 11:18:04](https://lobste.rs/s/0hfgse/what_s_cooking_on_sourcehut_q2_2025) - [What&apos;s cooking on SourceHut? Q2 2025](https://sourcehut.org/blog/2025-05-29-whats-cooking-q2/)
* [2025-05-29, 11:06:00](https://soylentnews.org/article.pl?sid=25/05/28/1747229&amp;from=rss) - [Some Signs of AI Model Collapse Begin to Reveal Themselves](https://soylentnews.org/article.pl?sid=25/05/28/1747229&amp;from=rss)
* [2025-05-29, 11:04:21](https://news.ycombinator.com/item?id=44124808) - [Simple programming language with offline usable browser IDE](https://tiki.li/apps/tut_learn.html?v=2505e)
* [2025-05-29, 10:44:05](https://news.ycombinator.com/item?id=44124713) - [What programmers should know about how CPUs work [video]](https://www.youtube.com/watch?v=-HNpim5x-IE)
* [2025-05-29, 10:42:27](https://lobste.rs/s/gwlgay/golden_file_testing) - [Golden File Testing](https://matttproud.com/blog/posts/golden-file-testing.html)
* [2025-05-29, 10:29:31](https://news.ycombinator.com/item?id=44124652) - [Show HN: I made a Zero-config tool to visualize your code](https://staying.fun/en)
* [2025-05-29, 10:22:57](https://lobste.rs/s/hkhmdn/helonium_s_hartree_fock_program) - [Helonium&apos;s Hartree-Fock program](https://panadestein.github.io/blog/posts/hf.html)
* [2025-05-29, 10:05:53](https://lobste.rs/s/e7ybwh/terraria_celeste_ported_webassembly) - [Terraria and Celeste ported to WebAssembly](https://velzie.rip/blog/celeste-wasm)
* [2025-05-29, 10:01:21](https://lobste.rs/s/ovdyqg/openbao_v2_3_now_supports_namespaces) - [OpenBao v2.3 now supports Namespaces (HashiCorp Vault fork)](https://openbao.org/blog/namespaces-announcement/)
* [2025-05-29, 10:00:00](https://news.slashdot.org/story/25/05/28/2048209/world-faces-new-danger-of-economic-denial-in-climate-fight-cop30-head-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World Faces New Danger of &apos;Economic Denial&apos; in Climate Fight, Cop30 Head Says](https://news.slashdot.org/story/25/05/28/2048209/world-faces-new-danger-of-economic-denial-in-climate-fight-cop30-head-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 09:13:03](https://lobste.rs/s/n7ly8i/3_ways_javascript_frameworks_render_dom) - [The 3 Ways JavaScript Frameworks Render the DOM](https://www.youtube.com/watch?v=0C-y59betmY)
* [2025-05-29, 07:58:55](https://news.ycombinator.com/item?id=44123953) - [Edamagit: Magit for VSCode](https://github.com/kahole/edamagit)
* [2025-05-29, 07:33:02](https://news.ycombinator.com/item?id=44123852) - [Gurus of 90s Web Design: Zeldman, Siegel, Nielsen](https://cybercultural.com/p/web-design-1997/)
* [2025-05-29, 07:00:00](https://science.slashdot.org/story/25/05/29/0238200/astronomers-discover-mystery-cosmic-body-bursting-with-x-rays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Discover Mystery Cosmic Body Bursting With X-Rays](https://science.slashdot.org/story/25/05/29/0238200/astronomers-discover-mystery-cosmic-body-bursting-with-x-rays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 06:15:00](https://soylentnews.org/article.pl?sid=25/05/28/0352254&amp;from=rss) - [Scientists Just Discovered A Mysterious New World Far Beyond Pluto](https://soylentnews.org/article.pl?sid=25/05/28/0352254&amp;from=rss)
* [2025-05-29, 05:05:43](https://news.ycombinator.com/item?id=44123289) - [RSyncUI – A SwiftUI based macOS GUI for rsync](https://github.com/rsyncOSX/RsyncUI)
* [2025-05-29, 04:23:11](https://news.ycombinator.com/item?id=44123098) - [Show HN: Typed-FFmpeg 3.0–Typed Interface to FFmpeg and Visual Filter Editor](https://github.com/livingbio/typed-ffmpeg)
* [2025-05-29, 03:30:00](https://it.slashdot.org/story/25/05/29/0232235/data-broker-giant-lexisnexis-says-breach-exposed-personal-information-of-over-364000-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Data Broker Giant LexisNexis Says Breach Exposed Personal Information of Over 364,000 People](https://it.slashdot.org/story/25/05/29/0232235/data-broker-giant-lexisnexis-says-breach-exposed-personal-information-of-over-364000-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 02:30:28](https://news.ycombinator.com/item?id=44122582) - [Run a C# file directly using dotnet run app.cs](https://devblogs.microsoft.com/dotnet/announcing-dotnet-run-app/)
* [2025-05-29, 01:30:00](https://soylentnews.org/article.pl?sid=25/05/27/2358202&amp;from=rss) - [Humanoid AI-powered Robots Duke It Out In China Fight Competition](https://soylentnews.org/article.pl?sid=25/05/27/2358202&amp;from=rss)
* [2025-05-29, 01:00:00](https://tech.slashdot.org/story/25/05/28/2232237/microsoft-is-opening-windows-update-to-third-party-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Is Opening Windows Update To Third-Party Apps](https://tech.slashdot.org/story/25/05/28/2232237/microsoft-is-opening-windows-update-to-third-party-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 00:20:00](https://games.slashdot.org/story/25/05/28/2226236/ea-cancels-black-panther-game-closes-cliffhanger-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EA Cancels Black Panther Game, Closes Cliffhanger Games](https://games.slashdot.org/story/25/05/28/2226236/ea-cancels-black-panther-game-closes-cliffhanger-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 23:40:00](https://news.slashdot.org/story/25/05/28/2221220/discords-new-currency-pays-users-to-interact-with-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Discord&apos;s New Currency Pays Users To Interact With Ads](https://news.slashdot.org/story/25/05/28/2221220/discords-new-currency-pays-users-to-interact-with-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 23:00:00](https://yro.slashdot.org/story/25/05/28/2024243/mysterious-database-of-184-million-records-exposes-vast-array-of-login-credentials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mysterious Database of 184 Million Records Exposes Vast Array of Login Credentials](https://yro.slashdot.org/story/25/05/28/2024243/mysterious-database-of-184-million-records-exposes-vast-array-of-login-credentials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 22:36:26](https://lobste.rs/s/uw4lp1/go_may_require_prefaulting_mmap) - [go may require prefaulting mmap](https://flak.tedunangst.com/post/go-may-require-prefaulting-mmap)
* [2025-05-28, 22:22:18](https://news.ycombinator.com/item?id=44121177) - [HTAP is Dead](https://www.mooncake.dev/blog/htap-is-dead)
* [2025-05-28, 22:20:00](https://games.slashdot.org/story/25/05/28/2018208/cd-projekt-red-is-moving-forward-with-cyberpunk-2?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CD Projekt Red is Moving Forward With Cyberpunk 2](https://games.slashdot.org/story/25/05/28/2018208/cd-projekt-red-is-moving-forward-with-cyberpunk-2?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 22:02:47](https://lobste.rs/s/029ntw/parking_lot_ffffffffffffffff) - [parking_lot: ffffffffffffffff](https://fly.io/blog/parking-lot-ffffffffffffffff/)
* [2025-05-28, 21:40:00](https://yro.slashdot.org/story/25/05/28/201215/us-will-ban-foreign-officials-to-punish-countries-for-social-media-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Will Ban Foreign Officials To Punish Countries For Social Media Rules](https://yro.slashdot.org/story/25/05/28/201215/us-will-ban-foreign-officials-to-punish-countries-for-social-media-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 21:18:00](https://lobste.rs/s/djzqbn/can_we_fix_retire_vibecoding_tag) - [Can we fix (or retire) the vibecoding tag?](https://lobste.rs/s/djzqbn/can_we_fix_retire_vibecoding_tag)
* [2025-05-28, 21:00:00](https://apple.slashdot.org/story/25/05/28/1953246/apple-will-announce-ios-26-at-wwdc-not-ios-19?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Will Announce iOS 26 at WWDC, Not iOS 19](https://apple.slashdot.org/story/25/05/28/1953246/apple-will-announce-ios-26-at-wwdc-not-ios-19?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 20:49:00](https://soylentnews.org/article.pl?sid=25/05/27/2241220&amp;from=rss) - [Intel Uncovers Alleged Embezzlement Involving Former Employee And Supplier](https://soylentnews.org/article.pl?sid=25/05/27/2241220&amp;from=rss)
* [2025-05-28, 20:47:30](https://news.ycombinator.com/item?id=44120507) - [Long live American Science and Surplus](https://milwaukeerecord.com/city-life/long-live-american-science-surplus-which-needs-your-help/)
* [2025-05-28, 20:38:43](https://lobste.rs/s/s6utq0/saying_bye_glitch) - [Saying Bye to Glitch](https://pketh.org/bye-glitch.html)
* [2025-05-28, 20:20:00](https://slashdot.org/story/25/05/28/1946247/xai-to-pay-telegram-300-million-to-integrate-grok-into-chat-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [xAI To Pay Telegram $300 Million To Integrate Grok Into Chat App](https://slashdot.org/story/25/05/28/1946247/xai-to-pay-telegram-300-million-to-integrate-grok-into-chat-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 20:15:43](https://news.ycombinator.com/item?id=44120241) - [A toy RTOS inside Super Mario Bros. using emulator save states](https://prettygoodblog.com/p/what-threads-are-part-2)
* [2025-05-28, 19:51:25](https://lobste.rs/s/ghh3w5/using_sat_get_world_record_on_linkedin_s) - [Using SAT to Get the World Record on LinkedIn&apos;s Queens](https://ryanberger.me/posts/queens/)
* [2025-05-28, 19:42:00](https://tech.slashdot.org/story/25/05/28/1940259/google-photos-turns-10-with-major-editor-redesign-qr-code-sharing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Photos Turns 10 With Major Editor Redesign, QR Code Sharing](https://tech.slashdot.org/story/25/05/28/1940259/google-photos-turns-10-with-major-editor-redesign-qr-code-sharing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 19:37:47](https://news.ycombinator.com/item?id=44119890) - [What does “Undecidable” mean, anyway](https://buttondown.com/hillelwayne/archive/what-does-undecidable-mean-anyway/)
* [2025-05-28, 19:34:34](https://lobste.rs/s/rqc5yc/compiler_explorer_promise_urls_last) - [Compiler Explorer and the Promise of URLs That Last Forever](https://xania.org/202505/compiler-explorer-urls-forever)
* [2025-05-28, 18:40:00](https://slashdot.org/story/25/05/28/111250/japanese-authorities-refer-spoiler-website-operators-to-prosecutors-in-rare-corporate-copyright-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japanese Authorities Refer &apos;Spoiler Website&apos; Operators To Prosecutors in Rare Corporate Copyright Case](https://slashdot.org/story/25/05/28/111250/japanese-authorities-refer-spoiler-website-operators-to-prosecutors-in-rare-corporate-copyright-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 18:00:00](https://news.slashdot.org/story/25/05/28/1616255/80-chance-of-record-heat-in-coming-years-climate-agencies-forecast?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [80% Chance of Record Heat in Coming Years, Climate Agencies Forecast](https://news.slashdot.org/story/25/05/28/1616255/80-chance-of-record-heat-in-coming-years-climate-agencies-forecast?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-28, 17:35:48](https://lobste.rs/s/42qb2p/i_am_disappointed_ai_discourse) - [I am disappointed in the AI discourse](https://steveklabnik.com/writing/i-am-disappointed-in-the-ai-discourse/)
* [2025-05-28, 17:22:47](https://news.ycombinator.com/item?id=44118373) - [Compiling a neural net to C for a speedup](https://slightknack.dev/blog/difflogic/)
* [2025-05-28, 17:14:58](https://lobste.rs/s/v0yrwa/compiling_neural_net_c_for_1_744x_speedup) - [Compiling a Neural Net to C for a 1,744× speedup](https://slightknack.dev/blog/difflogic/)
* [2025-05-28, 17:07:55](https://lobste.rs/s/sd0qfz/mullvad_leta) - [Mullvad Leta](https://leta.mullvad.net)
* [2025-05-28, 16:53:11](https://news.ycombinator.com/item?id=44118023) - [Show HN: I rewrote my Mac Electron app in Rust](https://desktopdocs.com/?v=2025)
* [2025-05-28, 16:51:19](https://lobste.rs/s/fxlce7/ray_tracing_j) - [Ray Tracing in J](https://idle.nprescott.com/2020/ray-tracing-in-j.html)
* [2025-05-28, 16:33:49](https://news.ycombinator.com/item?id=44117779) - [Japan Post launches &apos;digital address&apos; system](https://www.japantimes.co.jp/business/2025/05/27/companies/japan-post-digital-address/)
* [2025-05-28, 16:28:20](https://news.ycombinator.com/item?id=44117722) - [Compiler Explorer and the promise of URLs that last forever](https://xania.org/202505/compiler-explorer-urls-forever)
* [2025-05-28, 16:04:00](https://soylentnews.org/article.pl?sid=25/05/27/2237231&amp;from=rss) - [Telescope Upgrade Reveals Sun&apos;s \&quot;Coronal Rain\&quot; In Unprecedented Detail](https://soylentnews.org/article.pl?sid=25/05/27/2237231&amp;from=rss)
* [2025-05-28, 15:36:54](https://lobste.rs/s/xe61v2/llm_codegen_go_brrr_parallelization_with) - [LLM Codegen go Brrr – Parallelization with Git Worktrees and Tmux](https://www.skeptrune.com/posts/git-worktrees-agents-and-tmux/)
* [2025-05-28, 15:27:42](https://news.ycombinator.com/item?id=44117059) - [Show HN: Tesseral – Open-Source Auth](https://github.com/tesseral-labs/tesseral)
* [2025-05-28, 11:53:47](https://news.ycombinator.com/item?id=44114982) - [My website is ugly because I made it](https://goodinternetmagazine.com/my-website-is-ugly-because-i-made-it/)
* [2025-05-28, 11:19:00](https://soylentnews.org/article.pl?sid=25/05/27/2233218&amp;from=rss) - [iPhone Won&apos;t Be Made In US Anytime Soon: Analysts ](https://soylentnews.org/article.pl?sid=25/05/27/2233218&amp;from=rss)
* [2025-05-28, 10:57:50](https://lobste.rs/s/1kfzkq/cory_doctorow_on_how_we_lost_internet) - [Cory Doctorow on how we lost the internet](https://lwn.net/SubscriberLink/1021871/ffeed46818908c91/)
* [2025-05-28, 09:40:28](https://lobste.rs/s/byk1vh/personal_software_runtime_inspired_by) - [A Personal Software Runtime inspired by Emacs, Plan 9, Erlang, Hypermedia, and Unix](https://github.com/leoshimo/vrs)
* [2025-05-28, 08:44:52](https://lobste.rs/s/pslyxg/why_are_2025_05_28_2025_05_28_different_days) - [Why are 2025/05/28 and 2025-05-28 different days in JavaScript?](https://brandondong.github.io/blog/javascript_dates/)
* [2025-05-28, 08:33:36](https://lobste.rs/s/koodxv/thought_on_javascript_proof_work_anti) - [A thought on JavaScript \&quot;proof of work\&quot; anti-scraper systems](https://utcc.utoronto.ca/~cks/space/blog/web/JavaScriptScraperObstacles)
* [2025-05-28, 06:34:00](https://soylentnews.org/article.pl?sid=25/05/27/124252&amp;from=rss) - [The CIA Used A Star Wars Fan Site To Secretly Communicate With Spies](https://soylentnews.org/article.pl?sid=25/05/27/124252&amp;from=rss)
* [2025-05-28, 06:32:01](https://lobste.rs/s/kj0aux/firefox_139_adds_experimental_ai_powered) - [Firefox 139 adds experimental AI-powered link previews](https://9to5mac.com/2025/05/27/firefox-ai-link-previews/)
* [2025-05-28, 01:53:43](https://news.ycombinator.com/item?id=44112149) - [High-quality OLED displays now enabling integrated thin and multichannel audio](https://www.sciencedaily.com/releases/2025/05/250521125055.htm)
* [2025-05-28, 01:47:00](https://soylentnews.org/article.pl?sid=25/05/27/120223&amp;from=rss) - [Security News: Telemessage Worsens, Predictive Patching, GoDaddy Incompetence, Credential DB Found](https://soylentnews.org/article.pl?sid=25/05/27/120223&amp;from=rss)
* [2025-05-27, 21:04:00](https://soylentnews.org/article.pl?sid=25/05/27/1135228&amp;from=rss) - [Gabe Newell&apos;s Brain-Computer Interface Startup to Reveal First Chips Later This Year](https://soylentnews.org/article.pl?sid=25/05/27/1135228&amp;from=rss)
* [2025-05-27, 20:09:15](https://news.ycombinator.com/item?id=44110264) - [They used Xenon to climb Everest in days – is it the future of mountaineering?](https://www.nytimes.com/2025/05/27/world/europe/mount-everest-xenon-gas-nepal-uk-climbers.html)
* [2025-05-27, 16:16:00](https://soylentnews.org/article.pl?sid=25/05/27/1132236&amp;from=rss) - [Texas is Getting Ready to Ban Social Media for Anyone Under 18](https://soylentnews.org/article.pl?sid=25/05/27/1132236&amp;from=rss)
* [2025-05-27, 13:45:20](https://lobste.rs/s/9xx7gs/list_tech_for_good_job_boards) - [List of \&quot;tech for good\&quot; job boards](https://evanhahn.com/list-of-tech-for-good-job-boards/)
* [2025-05-27, 12:29:12](https://news.ycombinator.com/item?id=44106285) - [Chimps strike stones against trees as communication, study suggests](https://phys.org/news/2025-05-year-chimpanzees-stones-trees-communication.html)
* [2025-05-27, 11:31:00](https://soylentnews.org/article.pl?sid=25/05/27/0520206&amp;from=rss) - [Research Reveals &apos;Forever Chemicals&apos; Present in Beer](https://soylentnews.org/article.pl?sid=25/05/27/0520206&amp;from=rss)
* [2025-05-27, 08:59:51](https://news.ycombinator.com/item?id=44105148) - [Can Open Source Projects Exit Foundations?](https://www.infoq.com/news/2025/05/nats-cncf-open-source/)
* [2025-05-27, 06:43:00](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss) - [Scientists Discover Potential New Targets For Alzheimer’s Drugs](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss)
* [2025-05-27, 01:53:00](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss) - [Google Brings Ads to AI Search](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss)
* [2025-05-26, 23:49:11](https://news.ycombinator.com/item?id=44102712) - [Apollo Lunar Surface Journal](https://www.nasa.gov/history/alsj/)
* [2025-05-26, 21:07:00](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss) - [The Sun is Producing Strong Solar Flares; Are There More Than Expected During This Solar Cycle?](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss)
* [2025-05-26, 20:06:25](https://news.ycombinator.com/item?id=44101175) - [Show HN: Porting Terraria and Celeste to WebAssembly](https://velzie.rip/blog/celeste-wasm)
* [2025-05-26, 16:21:00](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss) - [Ex-NSA Listened to Scattered Spider&apos;s Calls: &apos;They&apos;re Good&apos;](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss)
* [2025-05-26, 13:43:45](https://news.ycombinator.com/item?id=44097362) - [From Finite Integral Domains to Finite Fields](https://susam.net/from-finite-integral-domains-to-finite-fields.html)
* [2025-05-26, 12:29:53](https://news.ycombinator.com/item?id=44096823) - [Grass Rendering Series](https://hexaquo.at/pages/grass-rendering-series-part-1-theory/)
* [2025-05-26, 11:36:00](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss) - [GitHub Copilot Angles for Promotion From Assistant to Agent](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss)
* [2025-05-26, 06:48:00](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss) - [Positive Proof-of-Concept Experiments May Lead to the World&apos;s First Treatment for Celiac Disease](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss)
* [2025-05-26, 02:00:00](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss) - [We did the Math on AI’s Energy Footprint. Here’s the Story you Haven’t Heard.](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss)
* [2025-05-25, 21:11:00](https://soylentnews.org/article.pl?sid=25/05/24/1755248&amp;from=rss) - [Evidence for &apos;Planet Nine&apos; Lurking on the Fringes of the Solar System is Building](https://soylentnews.org/article.pl?sid=25/05/24/1755248&amp;from=rss)
* [2025-05-25, 16:25:00](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss) - [The Roman Massacre That Never Happened](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss)
* [2025-05-25, 13:46:56](https://news.ycombinator.com/item?id=44087809) - [What If We Had Bigger Brains? Imagining Minds Beyond Ours](https://writings.stephenwolfram.com/2025/05/what-if-we-had-bigger-brains-imagining-minds-beyond-ours/)
* [2025-05-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss) - [The Pedestrians Who Abetted a Hawk’s Deadly Attack](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss)
* [2025-05-25, 08:33:46](https://news.ycombinator.com/item?id=44086429) - [Visualize and debug Rust programs with a new lens](https://firedbg.sea-ql.org/)
* [2025-05-25, 06:55:00](https://soylentnews.org/article.pl?sid=25/05/24/1716210&amp;from=rss) - [Jupiter Was Formerly Twice Its Current Size and Had a Much Stronger Magnetic Field ](https://soylentnews.org/article.pl?sid=25/05/24/1716210&amp;from=rss)
* [2025-05-25, 02:09:00](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss) - [VPN Service Cancels Customers&apos; Lifetime Subscriptions After Takeover](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss)
