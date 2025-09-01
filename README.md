# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology

* [The Age of Cheap Online Shopping is Ending](https://slashdot.org/story/25/09/01/1818247/the-age-of-cheap-online-shopping-is-ending?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An analysis of the shifting economic and logistical landscape that signals the end of bargain-basement online shopping.

* [Tesla Denied Having Fatal Crash Data Until a Hacker Found It](https://soylentnews.org/article.pl?sid=25/08/31/1355250&from=rss) - A whistleblowing hacker exposes Tesla for denying existence of critical crash data.

* [Adaptive LLM routing under budget constraints](https://arxiv.org/abs/2508.21141) - A groundbreaking paper explores adaptive routing techniques for large language models under budgetary limitations.

* [Lessons from building an AI data analyst](https://www.pedronasc.com/articles/lessons-building-ai-data-analyst) - A technical reflection on creating AI-powered data analysis systems.

* [AI enters the grant game, picking winners](https://www.science.org/content/article/ai-enters-grant-game-picking-winners) - AI algorithms now contribute to the process of evaluating grant proposals, raising both opportunities and ethical questions.

## Cybersecurity and Privacy

* [Massive Data Breach: Google Warns 2.5 Billion Gmail Users](https://soylentnews.org/article.pl?sid=25/08/31/1353201&from=rss) - Google faces a crisis as hackers target Gmail accounts, impacting billions worldwide.

* [OpenAI Is Scanning Users' ChatGPT Conversations and Reporting Content To Police](https://yro.slashdot.org/story/25/08/31/2311231/openai-is-scanning-users-chatgpt-conversations-and-reporting-content-to-police?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A controversial move by OpenAI brings privacy policies and ethical concerns around AI usage to the spotlight.

## Legal and Ethical Issues in Technology

* [Lawsuit Says Amazon Prime Video Misleads When You 'Buy' a Long-Term Streaming Rental](https://yro.slashdot.org/story/25/09/01/051247/lawsuit-says-amazon-prime-video-misleads-when-you-buy-a-long-term-streaming-rental?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Legal scrutiny over perceived misleading practices by Amazon's Prime Video.

* [400 'Tech Utopian' Refuges Consider New Crypto-Friendly State](https://yro.slashdot.org/story/25/09/01/0047230/400-tech-utopian-refuges-consider-new-crypto-friendly-state?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Crypto advocates plan an ambitious move to establish a novel crypto-friendly sovereign entity.

## Programming and Software

* [Zfsbackrest: Pgbackrest style encrypted backups for ZFS filesystems](https://github.com/gargakshit/zfsbackrest) - A new tool offering encrypted, organized backups for ZFS users.

* [Default Methods in Go](https://mcyoung.xyz/2025/08/25/go-default-methods/) - Advancements in Go programming's utility through default methods are discussed.

## Unique Scientific and Cultural Insights

* [Can You Develop Film in a Jägerbomb?](https://petapixel.com/2025/08/04/can-you-develop-film-in-a-jagerbomb/) - A quirky experiment fuses photography with alcoholic beverages, revealing unexpected results.

* [The Mysterious Shortwave Radio Station Stoking US-Russia Nuclear Fears](https://soylentnews.org/article.pl?sid=25/08/30/157235&from=rss) - A mysterious shortwave radio station heightens geopolitical fears in times of tension.

* [Rare Quadruple Star System May Solve the Mystery of Brown Dwarfs](https://soylentnews.org/article.pl?sid=25/08/29/2330255&from=rss) - A unique astronomical discovery contributes to our understanding of stellar formations.

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

* [2025-09-01, 18:18:00](https://slashdot.org/story/25/09/01/1818247/the-age-of-cheap-online-shopping-is-ending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Age of Cheap Online Shopping is Ending](https://slashdot.org/story/25/09/01/1818247/the-age-of-cheap-online-shopping-is-ending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-01, 18:14:00](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss) - [Tesla Denied Having Fatal Crash Data Until a Hacker Found It](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss)
* [2025-09-01, 18:04:37](https://news.ycombinator.com/item?id=45095079) - [Territorial Markings as a Predictor of Driver Aggression and Road Rage (2008)](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1559-1816.2008.00364.x?prevSearch=allfield%3A%28szlemko%29)
* [2025-09-01, 17:51:27](https://news.ycombinator.com/item?id=45094953) - [The Steve Ballmer Interview](https://www.acquired.fm/episodes/the-steve-ballmer-interview)
* [2025-09-01, 17:49:20](https://news.ycombinator.com/item?id=45094936) - [Show HN: woomarks, transfer your Pocket links to this app or self-host it](https://woomarks.com)
* [2025-09-01, 17:25:08](https://news.ycombinator.com/item?id=45094692) - [One of Britain&apos;s largest stocks of second-hand books ever amassed](https://www.worldofinteriors.com/story/richard-axe-second-hand-books-yorkshire)
* [2025-09-01, 17:15:00](https://it.slashdot.org/story/25/09/01/1621214/azure-budget-alerts-go-berserk-after-microsoft-account-migration-misfire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Azure Budget Alerts Go Berserk After Microsoft Account Migration Misfire](https://it.slashdot.org/story/25/09/01/1621214/azure-budget-alerts-go-berserk-after-microsoft-account-migration-misfire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-01, 17:02:14](https://news.ycombinator.com/item?id=45094471) - [Optery (YC W22) Is Hiring in Engineering, Legal, Sales, Marketing (U.S., Latam)](https://www.optery.com/careers/)
* [2025-09-01, 16:57:38](https://news.ycombinator.com/item?id=45094421) - [Adaptive LLM routing under budget constraints](https://arxiv.org/abs/2508.21141)
* [2025-09-01, 16:40:24](https://news.ycombinator.com/item?id=45094256) - [Lessons from building an AI data analyst](https://www.pedronasc.com/articles/lessons-building-ai-data-analyst)
* [2025-09-01, 16:35:32](https://lobste.rs/s/gukaij/baba_yaga_license) - [Baba Yaga License](https://smallandnearlysilent.com/baba-yaga/LICENSE.txt)
* [2025-09-01, 16:15:00](https://news.slashdot.org/story/25/09/01/1614253/americans-are-having-less-sex-than-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Americans Are Having Less Sex Than Ever](https://news.slashdot.org/story/25/09/01/1614253/americans-are-having-less-sex-than-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-01, 16:13:04](https://news.ycombinator.com/item?id=45093956) - [A Unique, High-Tech (Family) Computer](https://nicole.express/2025/a-computer-in-your-home.html)
* [2025-09-01, 15:54:24](https://news.ycombinator.com/item?id=45093765) - [The time picker on the iPhone&apos;s alarm app isn&apos;t circular, it&apos;s just a long list](https://old.reddit.com/r/interestingasfuck/comments/1n5lztw/the_time_picker_on_the_iphones_alarm_app_isnt/)
* [2025-09-01, 15:47:56](https://news.ycombinator.com/item?id=45093693) - [Search engine referral report for 2025 Q2](https://radar.cloudflare.com/reports/search-engine-market-share-2025-q2)
* [2025-09-01, 15:37:10](https://news.ycombinator.com/item?id=45093590) - [Isolated(any)](https://nshipster.com/isolated-any/)
* [2025-09-01, 15:12:00](https://tech.slashdot.org/story/25/09/01/1512223/why-do-waymos-keep-loitering-in-front-of-my-house?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Why Do Waymos Keep Loitering in Front of My House?&apos;](https://tech.slashdot.org/story/25/09/01/1512223/why-do-waymos-keep-loitering-in-front-of-my-house?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-01, 15:01:02](https://news.ycombinator.com/item?id=45093192) - [Ask HN: Who is hiring? (September 2025)](https://news.ycombinator.com/item?id=45093192)
* [2025-09-01, 15:01:02](https://news.ycombinator.com/item?id=45093190) - [Ask HN: Who wants to be hired? (September 2025)](https://news.ycombinator.com/item?id=45093190)
* [2025-09-01, 14:49:25](https://news.ycombinator.com/item?id=45093090) - [Cloudflare Radar: AI Insights](https://radar.cloudflare.com/ai-insights)
* [2025-09-01, 14:43:37](https://news.ycombinator.com/item?id=45093022) - [Effective learning: Rules of formulating knowledge (1999)](https://www.supermemo.com/en/blog/twenty-rules-of-formulating-knowledge)
* [2025-09-01, 14:27:17](https://news.ycombinator.com/item?id=45092925) - [Google AI Overview made up an elaborate story about me](https://bsky.app/profile/bennjordan.bsky.social/post/3lxojrbessk2z)
* [2025-09-01, 14:21:12](https://news.ycombinator.com/item?id=45092880) - [AI enters the grant game, picking winners](https://www.science.org/content/article/ai-enters-grant-game-picking-winners)
* [2025-09-01, 14:03:00](https://science.slashdot.org/story/25/09/01/143252/our-preoccupation-with-protein-intake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Our Preoccupation With Protein Intake](https://science.slashdot.org/story/25/09/01/143252/our-preoccupation-with-protein-intake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-01, 13:51:27](https://lobste.rs/s/izvlyh/qweremin) - [The Qweremin](https://www.linusakesson.net/qweremin/index.php)
* [2025-09-01, 13:45:09](https://lobste.rs/s/zyinea/c_memory_safety_webkit) - [C++ Memory Safety in WebKit](https://m.youtube.com/watch?v=RLw13wLM5Ko)
* [2025-09-01, 13:35:52](https://news.ycombinator.com/item?id=45092605) - [Zfsbackrest: Pgbackrest style encrypted backups for ZFS filesystems](https://github.com/gargakshit/zfsbackrest)
* [2025-09-01, 13:32:43](https://lobste.rs/s/ewbgui/zfsbackrest_pgbackrest_style_encrypted) - [zfsbackrest: pgbackrest style encrypted backups for ZFS filesystems](https://github.com/gargakshit/zfsbackrest)
* [2025-09-01, 13:32:00](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss) - [Massive Data Breach: Google Warns 2.5 Billion Gmail Users](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss)
* [2025-09-01, 13:17:56](https://news.ycombinator.com/item?id=45092490) - [Bear is now source-available](https://herman.bearblog.dev/license/)
* [2025-09-01, 13:14:28](https://lobste.rs/s/r9td7g/ascii_side_moon) - [The ASCII Side of the Moon](https://aleyan.com/projects/ascii-side-of-the-moon/)
* [2025-09-01, 12:49:57](https://news.ycombinator.com/item?id=45092324) - [Tetris is NP-hard even with O(1) rows or columns (2020) [pdf]](https://martindemaine.org/papers/ThinTetris_JIP/paper.pdf)
* [2025-09-01, 11:51:55](https://lobste.rs/s/ocmdra/review_nim_2_good_bad_with_example_code) - [A Review of Nim 2: The Good &amp; Bad with Example Code](https://miguel-martin.com/blog/nim2-review)
* [2025-09-01, 11:34:00](https://it.slashdot.org/story/25/09/01/0413204/blizzards-diablo-devs-unionize-theres-now-3500-unionized-microsoft-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blizzard&apos;s &apos;Diablo&apos; Devs Unionize. There&apos;s Now 3,500 Unionized Microsoft Workers](https://it.slashdot.org/story/25/09/01/0413204/blizzards-diablo-devs-unionize-theres-now-3500-unionized-microsoft-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-01, 10:39:25](https://news.ycombinator.com/item?id=45091493) - [CocoaPods trunk read-only plan](https://blog.cocoapods.org/CocoaPods-Specs-Repo/)
* [2025-09-01, 09:40:47](https://news.ycombinator.com/item?id=45091119) - [UK&apos;s largest battery storage facility at Tilbury substation](https://www.nationalgrid.com/national-grid-connects-uks-largest-battery-storage-facility-tilbury-substation)
* [2025-09-01, 09:30:20](https://lobste.rs/s/q5b8bj/what_every_argument_about_sideloading) - [What Every Argument About Sideloading Gets Wrong](https://hugotunius.se/2025/08/31/what-every-argument-about-sideloading-gets-wrong.html)
* [2025-09-01, 09:11:42](https://lobste.rs/s/uu8ynw/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/uu8ynw/what_are_you_doing_this_week)
* [2025-09-01, 08:44:00](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss) - [Medical Cannabis Fails the Long-Term Test: 58% of Patients Quit Within a Year](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss)
* [2025-09-01, 08:04:50](https://lobste.rs/s/qejtqj/passkeys_are_incompatible_with_open) - [Passkeys are incompatible with open-source software](https://www.smokingonabike.com/2025/01/04/passkey-marketing-is-lying-to-you/)
* [2025-09-01, 07:34:00](https://yro.slashdot.org/story/25/09/01/051247/lawsuit-says-amazon-prime-video-misleads-when-you-buy-a-long-term-streaming-rental?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lawsuit Says Amazon Prime Video Misleads When You &apos;Buy&apos; a Long-Term Streaming Rental](https://yro.slashdot.org/story/25/09/01/051247/lawsuit-says-amazon-prime-video-misleads-when-you-buy-a-long-term-streaming-rental?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-01, 06:27:18](https://lobste.rs/s/6d8btd/end_windows_10) - [End of (Windows) 10](https://endof10.org/)
* [2025-09-01, 06:23:24](https://lobste.rs/s/kkkmdg/unholy_saga_phoenix_hyperspace_2023) - [The Unholy Saga of Phoenix Hyperspace (2023)](https://gekk.info/articles/hyperspace.htm)
* [2025-09-01, 06:14:31](https://news.ycombinator.com/item?id=45089938) - [Preserving Order in Concurrent Go Apps: Three Approaches Compared](https://destel.dev/blog/preserving-order-in-concurrent-go)
* [2025-09-01, 04:01:00](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss) - [The Mysterious Shortwave Radio Station Stoking US-Russia Nuclear Fears](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss)
* [2025-09-01, 03:45:33](https://news.ycombinator.com/item?id=45089256) - [What Is Complexity in Chess?](https://lichess.org/@/Toadofsky/blog/what-is-complexity/pKo1swFh)
* [2025-09-01, 03:34:00](https://entertainment.slashdot.org/story/25/09/01/0136236/first-ai-music-creator-signed-by-record-label-more-ahead-or-just-a-copyright-quandry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First &apos;AI Music Creator&apos; Signed by Record Label. More Ahead, or Just a Copyright Quandry?](https://entertainment.slashdot.org/story/25/09/01/0136236/first-ai-music-creator-signed-by-record-label-more-ahead-or-just-a-copyright-quandry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-01, 01:55:40](https://lobste.rs/s/bgdaix/why_do_browsers_throttle_javascript) - [Why do browsers throttle JavaScript timers?](https://nolanlawson.com/2025/08/31/why-do-browsers-throttle-javascript-timers/)
* [2025-09-01, 01:17:24](https://lobste.rs/s/ravmmh/things_rust_shipped_without_2015) - [things rust shipped without (2015)](https://graydon2.dreamwidth.org/218040.html)
* [2025-09-01, 01:09:12](https://lobste.rs/s/ifqebf/default_methods_go) - [Default Methods in Go](https://mcyoung.xyz/2025/08/25/go-default-methods/)
* [2025-09-01, 00:50:00](https://yro.slashdot.org/story/25/09/01/0047230/400-tech-utopian-refuges-consider-new-crypto-friendly-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [400 &apos;Tech Utopian&apos; Refuges Consider New Crypto-Friendly State](https://yro.slashdot.org/story/25/09/01/0047230/400-tech-utopian-refuges-consider-new-crypto-friendly-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-01, 00:40:06](https://lobste.rs/s/3fwabw/case_study_rewriting_critical_service) - [A Case Study in Rewriting a Critical Service in Rust](https://wxiaoyun.com/blog/rust-rewrite-case-study/)
* [2025-08-31, 23:19:00](https://yro.slashdot.org/story/25/08/31/2311231/openai-is-scanning-users-chatgpt-conversations-and-reporting-content-to-police?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Is Scanning Users&apos; ChatGPT Conversations and Reporting Content To Police](https://yro.slashdot.org/story/25/08/31/2311231/openai-is-scanning-users-chatgpt-conversations-and-reporting-content-to-police?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-31, 23:13:00](https://soylentnews.org/article.pl?sid=25/08/30/1445255&amp;from=rss) - [Elon Musk Says xAI Has Open Sourced Grok 2.5](https://soylentnews.org/article.pl?sid=25/08/30/1445255&amp;from=rss)
* [2025-08-31, 22:34:20](https://lobste.rs/s/j9oc3z/lively_linear_lisp_1992) - [Lively Linear Lisp (1992)](https://www.plover.com/misc/hbaker-archive/LinearLisp.html)
* [2025-08-31, 22:19:00](https://slashdot.org/story/25/08/31/2216231/humans-are-being-hired-to-make-ai-slop-look-less-sloppy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humans Are Being Hired to Make AI Slop Look Less Sloppy](https://slashdot.org/story/25/08/31/2216231/humans-are-being-hired-to-make-ai-slop-look-less-sloppy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-31, 21:46:26](https://news.ycombinator.com/item?id=45087396) - [We should have the ability to run any code we want on hardware we own](https://hugotunius.se/2025/08/31/what-every-argument-about-sideloading-gets-wrong.html)
* [2025-08-31, 21:11:00](https://news.slashdot.org/story/25/08/31/219220/former-us-government-site-climategov-attempts-relaunch-as-non-profit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former US Government Site Climate.Gov Attempts Relaunch as Non-Profit](https://news.slashdot.org/story/25/08/31/219220/former-us-government-site-climategov-attempts-relaunch-as-non-profit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-31, 19:56:52](https://lobste.rs/s/b1swcr/1_problem_16_programming_languages_2021) - [1 Problem, 16 Programming Languages (2021)](https://www.youtube.com/watch?v=UVUjnzpQKUo)
* [2025-08-31, 19:49:47](https://lobste.rs/s/en1p2u/we_need_seriously_think_about_what_do_with) - [We need to seriously think about what to do with C++ modules](https://nibblestew.blogspot.com/2025/08/we-need-to-seriously-think-about-what.html)
* [2025-08-31, 19:46:11](https://lobste.rs/s/nyubar/thinking_about_coding) - [Thinking about coding](https://www.robinsloan.com/lab/thinking-about-coding/)
* [2025-08-31, 19:27:00](https://science.slashdot.org/story/25/08/31/1854245/beta-blockers-for-heart-attack-survivors-may-have-no-benefit-for-most-could-actually-harm-women?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Beta Blockers for Heart Attack Survivors: May Have No Benefit for Most, Could Actually Harm Women](https://science.slashdot.org/story/25/08/31/1854245/beta-blockers-for-heart-attack-survivors-may-have-no-benefit-for-most-could-actually-harm-women?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-31, 18:27:00](https://tech.slashdot.org/story/25/08/31/1820249/are-ai-web-crawlers-destroying-websites-in-their-hunt-for-training-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are AI Web Crawlers &apos;Destroying Websites&apos; In Their Hunt for Training Data?](https://tech.slashdot.org/story/25/08/31/1820249/are-ai-web-crawlers-destroying-websites-in-their-hunt-for-training-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-31, 18:25:00](https://soylentnews.org/article.pl?sid=25/08/30/1427217&amp;from=rss) - [US Military&apos;s X-37B Spaceplane Stays Relevant With Launch of Another Mission](https://soylentnews.org/article.pl?sid=25/08/30/1427217&amp;from=rss)
* [2025-08-31, 17:27:00](https://developers.slashdot.org/story/25/08/30/044226/what-happened-when-unix-co-creator-brian-kernighan-tried-rust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happened When Unix Co-Creator Brian Kernighan Tried Rust?](https://developers.slashdot.org/story/25/08/30/044226/what-happened-when-unix-co-creator-brian-kernighan-tried-rust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-31, 16:06:52](https://lobste.rs/s/opwycf/baby_s_first_type_checker) - [Baby&apos;s first type checker](https://austinhenley.com/blog/babytypechecker.html)
* [2025-08-31, 15:29:08](https://lobste.rs/s/s4fffm/jujutsu_for_everyone) - [Jujutsu for everyone](https://jj-for-everyone.github.io/)
* [2025-08-31, 14:00:23](https://lobste.rs/s/lvfpzx/is_it_possible_allow_sideloading_keep) - [Is it possible to allow sideloading *and* keep users safe?](https://shkspr.mobi/blog/2025/08/is-it-possible-to-allow-sideloading-and-keep-users-safe/)
* [2025-08-31, 13:38:00](https://soylentnews.org/article.pl?sid=25/08/30/1419247&amp;from=rss) - [A New Security Flaw in TheTruthSpy Phone Spyware is Putting Victims at Risk](https://soylentnews.org/article.pl?sid=25/08/30/1419247&amp;from=rss)
* [2025-08-31, 12:40:47](https://lobste.rs/s/09czfs/this_telegram_must_be_closely) - [\&quot;This telegram must be closely paraphrased before being communicated to anyone.\&quot; Why?](https://history.stackexchange.com/questions/79371/this-telegram-must-be-closely-paraphrased-before-being-communicated-to-anyone)
* [2025-08-31, 10:44:59](https://lobste.rs/s/rdhzeo/run_legal_lte_network_at_home_for_100) - [Run a legal LTE network at home for $100](https://lantian.pub/en/article/modify-computer/legal-lte-network-at-home-for-100-bucks.lantian/)
* [2025-08-31, 10:03:32](https://lobste.rs/s/ql4odp/three_years_building_no_code_software_for) - [Three years of building no-code software for grassroots political organizations](https://write.as/conjure-utopia/three-years-of-building-no-code-software-for-political-organizations)
* [2025-08-31, 08:47:00](https://soylentnews.org/article.pl?sid=25/08/29/2355251&amp;from=rss) - [Transport for London (TfL) Asks Mobile Users to Wear Headphones](https://soylentnews.org/article.pl?sid=25/08/29/2355251&amp;from=rss)
* [2025-08-31, 03:59:00](https://soylentnews.org/article.pl?sid=25/08/29/2346225&amp;from=rss) - [Scientists Produce Quantum Entanglement-like Results Without Entangled Particles](https://soylentnews.org/article.pl?sid=25/08/29/2346225&amp;from=rss)
* [2025-08-30, 23:14:00](https://soylentnews.org/article.pl?sid=25/08/29/2330255&amp;from=rss) - [Rare Quadruple Star System May Solve the Mystery of Brown Dwarfs](https://soylentnews.org/article.pl?sid=25/08/29/2330255&amp;from=rss)
* [2025-08-30, 18:34:00](https://soylentnews.org/article.pl?sid=25/08/29/1422213&amp;from=rss) - [4chan and Kiwi Farms Sue UK Regulator Ofcom Over Online Censorship Law](https://soylentnews.org/article.pl?sid=25/08/29/1422213&amp;from=rss)
* [2025-08-30, 13:51:00](https://soylentnews.org/article.pl?sid=25/08/29/0536231&amp;from=rss) - [US Attorneys General Tell AI Companies They &apos;Will be Held Accountable&apos; for Child Safety Failures](https://soylentnews.org/article.pl?sid=25/08/29/0536231&amp;from=rss)
* [2025-08-30, 09:04:00](https://soylentnews.org/article.pl?sid=25/08/29/0527204&amp;from=rss) - [ADAS (Driver Assist) Gen 2 From BMW](https://soylentnews.org/article.pl?sid=25/08/29/0527204&amp;from=rss)
* [2025-08-30, 04:21:00](https://soylentnews.org/article.pl?sid=25/08/29/0523215&amp;from=rss) - [A Gentle Introduction to CP/M](https://soylentnews.org/article.pl?sid=25/08/29/0523215&amp;from=rss)
* [2025-08-29, 23:35:00](https://soylentnews.org/article.pl?sid=25/08/27/1236219&amp;from=rss) - [Punycode - an Overview by a Soylentil](https://soylentnews.org/article.pl?sid=25/08/27/1236219&amp;from=rss)
* [2025-08-29, 18:51:00](https://soylentnews.org/article.pl?sid=25/08/28/1853258&amp;from=rss) - [Linux Foundation Says Yes to NoSQL Via DocumentDB](https://soylentnews.org/article.pl?sid=25/08/28/1853258&amp;from=rss)
* [2025-08-29, 14:07:00](https://soylentnews.org/article.pl?sid=25/08/28/1849238&amp;from=rss) - [Large Reasoning Models Hitting Limits, Say Apple Researchers](https://soylentnews.org/article.pl?sid=25/08/28/1849238&amp;from=rss)
* [2025-08-29, 09:22:00](https://soylentnews.org/article.pl?sid=25/08/28/1843236&amp;from=rss) - [Breathwork Can Induce Altered States of Consciousness](https://soylentnews.org/article.pl?sid=25/08/28/1843236&amp;from=rss)
* [2025-08-29, 07:52:54](https://news.ycombinator.com/item?id=45061376) - [India&apos;s billion-dollar e-waste empire](https://restofworld.org/2025/india-e-waste-recycling-electronics/)
* [2025-08-29, 04:43:00](https://soylentnews.org/article.pl?sid=25/08/28/1214205&amp;from=rss) - [Mercedes Demonstrates Five Minute BEV Charging While Setting Speed Records](https://soylentnews.org/article.pl?sid=25/08/28/1214205&amp;from=rss)
* [2025-08-29, 03:38:35](https://news.ycombinator.com/item?id=45059888) - [An adventure in writing compatible systems](https://turso.tech/blog/an-adventure-in-writing-compatible-systems)
* [2025-08-29, 02:12:25](https://news.ycombinator.com/item?id=45059272) - [Can You Develop Film in a Jägerbomb?](https://petapixel.com/2025/08/04/can-you-develop-film-in-a-jagerbomb/)
* [2025-08-28, 23:59:00](https://soylentnews.org/article.pl?sid=25/08/28/1211212&amp;from=rss) - [Microsoft&apos;s Windows 95 Release Was 30 Years Ago, the First Time Software Was a Pop Culture Smash](https://soylentnews.org/article.pl?sid=25/08/28/1211212&amp;from=rss)
* [2025-08-28, 22:25:10](https://news.ycombinator.com/item?id=45057734) - [A review of Nim 2: The good and bad with example code](https://miguel-martin.com/blog/nim2-review)
* [2025-08-28, 19:10:00](https://soylentnews.org/article.pl?sid=25/08/27/1455216&amp;from=rss) - [SpaceX’s Latest Dragon Mission Will Breathe More Fire at the Space Station](https://soylentnews.org/article.pl?sid=25/08/27/1455216&amp;from=rss)
* [2025-08-28, 18:12:34](https://news.ycombinator.com/item?id=45055205) - [Making Minecraft Spherical](https://www.bowerbyte.com/posts/blocky-planet/)
* [2025-08-28, 14:22:00](https://soylentnews.org/article.pl?sid=25/08/27/1449220&amp;from=rss) - [How the Cavefish Lost its Eyes— Again and Again](https://soylentnews.org/article.pl?sid=25/08/27/1449220&amp;from=rss)
* [2025-08-28, 09:34:00](https://soylentnews.org/article.pl?sid=25/08/27/2323243&amp;from=rss) - [An Empty Strip and Fewer Tips: is Las Vegas in Trouble?](https://soylentnews.org/article.pl?sid=25/08/27/2323243&amp;from=rss)
* [2025-08-28, 04:52:00](https://soylentnews.org/article.pl?sid=25/08/27/1232257&amp;from=rss) - [Science Marches on](https://soylentnews.org/article.pl?sid=25/08/27/1232257&amp;from=rss)
* [2025-08-28, 00:04:00](https://soylentnews.org/article.pl?sid=25/08/27/1225221&amp;from=rss) - [Xz Format Inadequate for General Use](https://soylentnews.org/article.pl?sid=25/08/27/1225221&amp;from=rss)
