# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements in Artificial Intelligence and Robotics

* [Apple's Next-Gen Version of Siri Is 'On Par' With ChatGPT](https://apple.slashdot.org/story/25/05/19/2119226/apples-next-gen-version-of-siri-is-on-par-with-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple's revamped Siri is reportedly competitive with top AI tools like ChatGPT. [Comments on Hacker News](https://news.ycombinator.com/item?id=44036438).

* [AI is More Persuasive Than People in Online Debates](https://slashdot.org/story/25/05/19/1910215/ai-is-more-persuasive-than-people-in-online-debates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Research reveals AI systems outperform humans in online persuasive discussions. [Discussion on Hacker News](https://news.ycombinator.com/item?id=44027867).

## Tech Industry Updates

* [Google Launches NotebookLM App For Android and iOS](https://tech.slashdot.org/story/25/05/19/211254/google-launches-notebooklm-app-for-android-and-ios?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google releases its project management app combining AI technology and note-taking tools. [Comments on Hacker News](https://news.ycombinator.com/item?id=44034329).

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

* [2025-05-20, 00:50:00](https://apple.slashdot.org/story/25/05/19/2119226/apples-next-gen-version-of-siri-is-on-par-with-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Next-Gen Version of Siri Is &apos;On Par&apos; With ChatGPT](https://apple.slashdot.org/story/25/05/19/2119226/apples-next-gen-version-of-siri-is-on-par-with-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 00:19:44](https://news.ycombinator.com/item?id=44036438) - [is-even-ai – Check if a number is even using the power of AI](https://www.npmjs.com/package/is-even-ai)
* [2025-05-20, 00:10:00](https://games.slashdot.org/story/25/05/19/2112252/sony-mass-bans-russian-playstation-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Mass-Bans Russian PlayStation Accounts](https://games.slashdot.org/story/25/05/19/2112252/sony-mass-bans-russian-playstation-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 23:49:00](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss) - [Nextcloud Cries Foul Over Google Play Store App Rejection](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss)
* [2025-05-19, 23:30:00](https://hardware.slashdot.org/story/25/05/19/2047236/qualcomm-to-launch-data-center-processors-that-link-to-nvidia-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Qualcomm To Launch Data Center Processors That Link To Nvidia Chips](https://hardware.slashdot.org/story/25/05/19/2047236/qualcomm-to-launch-data-center-processors-that-link-to-nvidia-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 22:53:17](https://news.ycombinator.com/item?id=44035793) - [Self-Hosting Moose with Docker Compose, Redis, Temporal, Redpanda and ClickHouse](https://docs.fiveonefour.com/moose/deploying/self-hosting/deploying-with-docker-compose)
* [2025-05-19, 22:50:26](https://news.ycombinator.com/item?id=44035770) - [Terraform MCP Server](https://github.com/hashicorp/terraform-mcp-server)
* [2025-05-19, 22:50:00](https://tech.slashdot.org/story/25/05/19/2054230/google-decided-against-offering-publishers-options-in-ai-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Decided Against Offering Publishers Options In AI Search](https://tech.slashdot.org/story/25/05/19/2054230/google-decided-against-offering-publishers-options-in-ai-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 22:19:27](https://lobste.rs/s/aeslga/value_model_checking_distributed) - [The value of model checking in distributed protocols design](https://protocols-made-fun.com/modelchecking/2025/04/08/value.html)
* [2025-05-19, 22:10:00](https://tech.slashdot.org/story/25/05/19/211254/google-launches-notebooklm-app-for-android-and-ios?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches NotebookLM App For Android and iOS](https://tech.slashdot.org/story/25/05/19/211254/google-launches-notebooklm-app-for-android-and-ios?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 21:55:36](https://lobste.rs/s/wefsbz/making_modern_email_protocol) - [Making a modern Email protocol](https://youtu.be/nALc9GwZdFc)
* [2025-05-19, 21:37:23](https://news.ycombinator.com/item?id=44035158) - [Have I Been Pwned 2.0 is Now Live](https://www.troyhunt.com/have-i-been-pwned-2-0-is-now-live/)
* [2025-05-19, 21:30:00](https://yro.slashdot.org/story/25/05/19/2039213/regeneron-pharmaceuticals-to-buy-23andme-and-its-data-for-256-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Regeneron Pharmaceuticals To Buy 23andMe and Its Data For $256 Million](https://yro.slashdot.org/story/25/05/19/2039213/regeneron-pharmaceuticals-to-buy-23andme-and-its-data-for-256-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 21:21:54](https://lobste.rs/s/uq4igx/making_video_games_2025_without_engine) - [Making Video Games in 2025 (without an engine)](https://noelberry.ca/posts/making_games_in_2025/)
* [2025-05-19, 21:12:47](https://news.ycombinator.com/item?id=44034918) - [Jules: An Asynchronous Coding Agent](https://jules.google/)
* [2025-05-19, 20:50:00](https://slashdot.org/story/25/05/19/2033214/xais-grok-3-comes-to-microsoft-azure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [xAI&apos;s Grok 3 Comes To Microsoft Azure](https://slashdot.org/story/25/05/19/2033214/xais-grok-3-comes-to-microsoft-azure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 20:32:41](https://lobste.rs/s/lptak4/building_personal_archive_web_slow_way) - [Building a personal archive of the web, the slow way](https://alexwlchan.net/2025/personal-archive-of-the-web/)
* [2025-05-19, 20:28:29](https://news.ycombinator.com/item?id=44034459) - [Kilo: A text editor in less than 1000 LOC with syntax highlight and search](https://github.com/antirez/kilo)
* [2025-05-19, 20:16:13](https://news.ycombinator.com/item?id=44034329) - [WireGuard-vanity-keygen: WireGuard vanity key generator](https://github.com/axllent/wireguard-vanity-keygen)
* [2025-05-19, 20:10:00](https://slashdot.org/story/25/05/19/1910215/ai-is-more-persuasive-than-people-in-online-debates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI is More Persuasive Than People in Online Debates](https://slashdot.org/story/25/05/19/1910215/ai-is-more-persuasive-than-people-in-online-debates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 19:37:47](https://lobste.rs/s/gdd7r2/submissions_spring_lisp_game_jam_2025) - [Submissions to Spring Lisp Game Jam 2025](https://itch.io/jam/spring-lisp-game-jam-2025/entries)
* [2025-05-19, 19:30:00](https://news.slashdot.org/story/25/05/19/195203/european-green-investments-hold-billions-in-fossil-fuel-majors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European &apos;Green&apos; Investments Hold Billions in Fossil Fuel Majors](https://news.slashdot.org/story/25/05/19/195203/european-green-investments-hold-billions-in-fossil-fuel-majors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 19:10:18](https://lobste.rs/s/wadme2/internationalization_puzzles) - [Internationalization puzzles](https://i18n-puzzles.com/)
* [2025-05-19, 19:06:00](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss) - [The End of the Universe is Nigh!](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss)
* [2025-05-19, 18:53:00](https://developers.slashdot.org/story/25/05/19/1853221/microsofts-edit-on-windows-is-a-new-command-line-text-editor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Edit on Windows is a New Command-Line Text Editor](https://developers.slashdot.org/story/25/05/19/1853221/microsofts-edit-on-windows-is-a-new-command-line-text-editor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 18:45:41](https://news.ycombinator.com/item?id=44033310) - [The forbidden railway: Vienna-Pyongyang (2008)](http://vienna-pyongyang.blogspot.com/2008/04/how-everything-began.html)
* [2025-05-19, 18:30:54](https://lobste.rs/s/vjhylh/steve_langasek_one_ubuntu_linux_s_leading) - [Steve Langasek, One of Ubuntu Linux&apos;s Leading Lights, Has Died](https://thenewstack.io/steve-langasek-one-of-ubuntu-linuxs-leading-lights-has-died/)
* [2025-05-19, 18:18:35](https://lobste.rs/s/aohy4i/python_frozenset_interpretation) - [A Python frozenset interpretation of Dependent Type Theory](https://www.philipzucker.com/frozenset_dtt/)
* [2025-05-19, 18:10:00](https://slashdot.org/story/25/05/19/187253/linkedin-executive-warns-ai-threatens-entry-level-jobs-as-graduate-unemployment-rises?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LinkedIn Executive Warns AI Threatens Entry-Level Jobs as Graduate Unemployment Rises](https://slashdot.org/story/25/05/19/187253/linkedin-executive-warns-ai-threatens-entry-level-jobs-as-graduate-unemployment-rises?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 18:07:36](https://lobste.rs/s/qef6s9/microsoft_edit_is_now_open_source) - [Microsoft Edit is now open source](https://devblogs.microsoft.com/commandline/edit-is-now-open-source/)
* [2025-05-19, 18:04:06](https://news.ycombinator.com/item?id=44032777) - [Claude Code SDK](https://docs.anthropic.com/en/docs/claude-code/sdk)
* [2025-05-19, 17:59:16](https://news.ycombinator.com/item?id=44032717) - [Microsoft&apos;s ICC blockade: digital dependence comes at a cost](https://www.techzine.eu/news/privacy-compliance/131536/microsofts-icc-blockade-digital-dependence-comes-at-a-cost/)
* [2025-05-19, 17:39:59](https://news.ycombinator.com/item?id=44032470) - [Show HN: Windows 98 themed website in 1 HTML file for my post punk band](https://corp.band)
* [2025-05-19, 17:30:00](https://tech.slashdot.org/story/25/05/19/1729259/microsofts-plan-to-fix-the-web-letting-every-website-run-ai-search-for-cheap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Plan To Fix the Web: Letting Every Website Run AI Search for Cheap](https://tech.slashdot.org/story/25/05/19/1729259/microsofts-plan-to-fix-the-web-letting-every-website-run-ai-search-for-cheap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 17:00:43](https://news.ycombinator.com/item?id=44031917) - [Dilbert creator Scott Adams says he will die soon from same cancer as Joe Biden](https://www.thewrap.com/dilbert-scott-adams-prostate-cancer-biden/)
* [2025-05-19, 17:00:10](https://news.ycombinator.com/item?id=44031912) - [Glasskube (YC S24) is hiring in Vienna to build Open Source deployment tools](https://www.ycombinator.com/companies/glasskube/jobs/wjB77iZ-founding-engineer-go-typescript-kubernetes-docker)
* [2025-05-19, 16:54:00](https://news.slashdot.org/story/25/05/19/1654225/microsoft-open-sources-windows-subsystem-for-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Open Sources Windows Subsystem for Linux](https://news.slashdot.org/story/25/05/19/1654225/microsoft-open-sources-windows-subsystem-for-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 16:51:55](https://lobste.rs/s/v4xwjv/windows_subsystem_for_linux_is_now_open) - [The Windows Subsystem for Linux is now open source](https://blogs.windows.com/windowsdeveloper/2025/05/19/the-windows-subsystem-for-linux-is-now-open-source/)
* [2025-05-19, 16:28:18](https://news.ycombinator.com/item?id=44031535) - [Game theory illustrated by an animated cartoon game](https://ncase.me/trust/)
* [2025-05-19, 16:17:56](https://news.ycombinator.com/item?id=44031432) - [GitHub Copilot Coding Agent](https://github.blog/changelog/2025-05-19-github-copilot-coding-agent-in-public-preview/)
* [2025-05-19, 16:14:35](https://news.ycombinator.com/item?id=44031387) - [xAI&apos;s Grok 3 comes to Microsoft Azure](https://techcrunch.com/2025/05/19/xais-grok-3-comes-to-microsoft-azure/)
* [2025-05-19, 16:14:15](https://news.ycombinator.com/item?id=44031385) - [The Windows Subsystem for Linux is now open source](https://blogs.windows.com/windowsdeveloper/2025/05/19/the-windows-subsystem-for-linux-is-now-open-source/)
* [2025-05-19, 16:01:00](https://hardware.slashdot.org/story/25/05/19/1456219/germany-drops-opposition-to-nuclear-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Germany Drops Opposition To Nuclear Power](https://hardware.slashdot.org/story/25/05/19/1456219/germany-drops-opposition-to-nuclear-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 15:40:32](https://news.ycombinator.com/item?id=44031009) - [Too Much Go Misdirection](https://flak.tedunangst.com/post/too-much-go-misdirection)
* [2025-05-19, 15:28:30](https://lobste.rs/s/4hqkqt/is_winter_coming) - [Is Winter Coming?](https://www.datagubbe.se/winter/)
* [2025-05-19, 15:24:58](https://news.ycombinator.com/item?id=44030850) - [Zod 4](https://zod.dev/v4)
* [2025-05-19, 15:22:00](https://news.slashdot.org/story/25/05/19/1451202/how-miami-schools-are-leading-100000-students-into-the-ai-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Miami Schools Are Leading 100,000 Students Into the A.I. Future](https://news.slashdot.org/story/25/05/19/1451202/how-miami-schools-are-leading-100000-students-into-the-ai-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 15:14:17](https://lobste.rs/s/rvfxuy/new_flag_options_for_misleading) - [New flag options for “misleading” and “clickbait”?](https://lobste.rs/s/rvfxuy/new_flag_options_for_misleading)
* [2025-05-19, 15:14:08](https://lobste.rs/s/lolkdn/too_much_go_misdirection) - [too much go misdirection](https://flak.tedunangst.com/post/too-much-go-misdirection)
* [2025-05-19, 15:01:20](https://lobste.rs/s/1debtb/malware_attack_counterattack) - [Malware attack and counterattack](https://www.antoineschmitt.com/malware-attack-and-counterattack/)
* [2025-05-19, 14:48:03](https://news.ycombinator.com/item?id=44030492) - [Launch HN: Better Auth (YC X25) – Authentication Framework for TypeScript](https://news.ycombinator.com/item?id=44030492)
* [2025-05-19, 14:24:00](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss) - [UK Retail Sector Hit by Ransomware Spree](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss)
* [2025-05-19, 13:21:49](https://lobste.rs/s/wfpw3u/justification_filler_phrases) - [Justification Filler Phrases](https://serce.me/posts/2025-05-19-justification-filler-phrases)
* [2025-05-19, 13:12:00](https://lobste.rs/s/zthrjb/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/zthrjb/what_are_you_doing_this_week)
* [2025-05-19, 13:06:55](https://news.ycombinator.com/item?id=44029435) - [Diffusion models explained simply](https://www.seangoedecke.com/diffusion-models-explained/)
* [2025-05-19, 12:31:33](https://news.ycombinator.com/item?id=44029142) - [ClawPDF – Open-Source Virtual/Network PDF Printer with OCR and Image Support](https://github.com/clawsoftware/clawPDF)
* [2025-05-19, 11:23:55](https://lobste.rs/s/glybaa/don_t_guess_my_language) - [Don&apos;t Guess My Language](https://vitonsky.net/blog/2025/05/17/language-detection/)
* [2025-05-19, 09:44:07](https://lobste.rs/s/wlnnvz/introducing_obelisk_deterministic) - [Introducing Obelisk deterministic workflow engine](https://obeli.sk/blog/introducing-obelisk/)
* [2025-05-19, 09:39:00](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss) - [How a New Type of AI is Helping Police Skirt Facial Recognition Bans](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss)
* [2025-05-19, 09:17:20](https://news.ycombinator.com/item?id=44027867) - [Side projects I&apos;ve built since 2009](https://naeemnur.com/side-projects/)
* [2025-05-19, 08:00:42](https://lobste.rs/s/acpxje/coding_without_laptop_two_weeks_with_ar) - [Coding Without a Laptop - Two Weeks with AR Glasses and Linux on Android](https://holdtherobot.com/blog/2025/05/11/linux-on-android-with-ar-glasses/)
* [2025-05-19, 07:39:22](https://lobste.rs/s/dymvtx/don_t_unwrap_options_there_are_better_ways) - [Don&apos;t Unwrap Options: There Are Better Ways](https://corrode.dev/blog/rust-option-handling-best-practices/)
* [2025-05-19, 07:34:36](https://lobste.rs/s/6m8jml/racket_v8_17) - [Racket v8.17](https://blog.racket-lang.org/2025/05/racket-v8-17.html)
* [2025-05-19, 07:27:04](https://lobste.rs/s/sqojzs/how_have_browser_pick_contrasting_color) - [How to have the browser pick a contrasting color in CSS](https://webkit.org/blog/16929/contrast-color/)
* [2025-05-19, 04:54:00](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss) - [The Day Grok Lost its Mind](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss)
* [2025-05-19, 02:47:20](https://lobste.rs/s/sa8b5n/async_await_versus_calloop_model) - [async/await versus the Calloop Model](https://notgull.net/calloop/)
* [2025-05-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss) - [Mars May Have Vast Underground Oceans](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss)
* [2025-05-18, 20:37:38](https://lobste.rs/s/loggq6/ditching_obsidian_building_my_own) - [Ditching Obsidian and building my own](https://amberwilliams.io/blogs/building-my-own-pkms)
* [2025-05-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss) - [U.S. Inks Bill to Force Geo-Tracking Tech for High-End Gaming and AI GPUs](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss)
* [2025-05-18, 14:38:00](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss) - [NASA Keeps Ancient Voyager 1 Spacecraft Alive With Hail Mary Thruster Fix](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss)
* [2025-05-18, 12:04:27](https://lobste.rs/s/p9lo9w/beginner_s_guide_sourcehut) - [A Beginner&apos;s Guide to SourceHut](https://btxx.org/posts/beginners-guide-sourcehut/)
* [2025-05-18, 09:53:00](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss) - [White House Scraps Plan to Block Data Brokers From Selling Americans’ Sensitive Data](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss)
* [2025-05-18, 05:12:00](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss) - [China&apos;s Hygon Details C86-5G: A 128-Core X86 CPU with Advanced Features and Four-Way SMT](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss)
* [2025-05-18, 00:24:00](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss) - [Oniux by Tor: Isolating Linux Applications at the Kernel Level for Secure Connections](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss)
* [2025-05-17, 19:39:00](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss) - [NCSC and Industry at Odds Over How to Tackle Shoddy Software](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss)
* [2025-05-17, 14:50:00](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss) - [EU Bug Database Fully Operational as US Slashes Infosec](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss)
* [2025-05-17, 13:49:06](https://news.ycombinator.com/item?id=44014323) - [Show HN: A MCP server to evaluate Python code in WASM VM using RustPython](https://github.com/tuananh/hyper-mcp/tree/main/examples/plugins/eval-py)
* [2025-05-17, 10:05:00](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss) - [A US Court Just Put Ownership of CRISPR Back in Play](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss)
* [2025-05-17, 08:56:10](https://news.ycombinator.com/item?id=44013000) - [Don&apos;t Use ISO/IEC 14977:1996 Extended Backus-Naur Form (EBNF) (2023)](https://dwheeler.com/essays/dont-use-iso-14977-ebnf.html)
* [2025-05-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss) - [Bluetooth 6.1 Enhances Privacy With Randomized RPA Timing](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss)
* [2025-05-17, 00:31:00](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss) - [Nvidia Reportedly Raises GPU Prices by 10-15% as Tariffs and TSMC Price Hikes Filter Down](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss)
* [2025-05-16, 19:45:00](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss) - [Scientists Find Lead Really Can Be Turned Into Gold (With Help From The LHC)](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss)
* [2025-05-16, 19:03:32](https://news.ycombinator.com/item?id=44008793) - [Dominion Energy&apos;s NEM 2.0 Proposal: What It Means for Solar in Virginia](https://www.virtuesolar.com/2025/05/16/dominion-nem-2/)
* [2025-05-16, 15:27:26](https://news.ycombinator.com/item?id=44006634) - [The truth behind the accuracy of weather forecasts](https://www.abc.net.au/news/2025-05-16/weather-forecast-accuracy-bom/105297540)
* [2025-05-16, 15:01:00](https://soylentnews.org/article.pl?sid=25/05/14/2259213&amp;from=rss) - [Why Bell Labs Worked](https://soylentnews.org/article.pl?sid=25/05/14/2259213&amp;from=rss)
* [2025-05-16, 13:19:20](https://news.ycombinator.com/item?id=44005157) - [Rivers](https://www.futilitycloset.com/2025/05/15/rivers/)
* [2025-05-16, 10:20:00](https://soylentnews.org/article.pl?sid=25/05/15/0224241&amp;from=rss) - [A Chemical in Plastics is Tied to Heart Disease Deaths](https://soylentnews.org/article.pl?sid=25/05/15/0224241&amp;from=rss)
* [2025-05-16, 08:55:27](https://news.ycombinator.com/item?id=44003184) - [Run your GitHub Actions locally](https://github.com/nektos/act)
* [2025-05-16, 05:32:00](https://soylentnews.org/article.pl?sid=25/05/15/0157228&amp;from=rss) - [FTC Pushes The Enforcement Of Its &apos;Click-To-Cancel&apos; Rule Back To July](https://soylentnews.org/article.pl?sid=25/05/15/0157228&amp;from=rss)
* [2025-05-16, 03:54:02](https://news.ycombinator.com/item?id=44001696) - [Remarks on AI from NZ](https://nealstephenson.substack.com/p/remarks-on-ai-from-nz)
* [2025-05-16, 00:45:00](https://soylentnews.org/article.pl?sid=25/05/15/0147219&amp;from=rss) - [When Your Favorite Song Plays, Your Brain ‘Physically Embodies’ Music](https://soylentnews.org/article.pl?sid=25/05/15/0147219&amp;from=rss)
