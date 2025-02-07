# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Updates

* [LKML: Hector Martin: [PATCH] MAINTAINERS: Remove myself](https://lkml.org/lkml/2025/2/7/9) ([comments](https://lobste.rs/s/bvqj9g/lkml_hector_martin_patch_maintainers))

* [Asahi Linux Lead Developer Hector Martin Resigns From Linux Kernel](https://linux.slashdot.org/story/25/02/07/1332241/asahi-linux-lead-developer-hector-martin-resigns-from-linux-kernel?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=42973897))

* [CPython tail-call interpreter merged for Python 3.14, a 10% speedup in benchmarks](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-tail-call) ([comments](https://lobste.rs/s/ui5fzs/cpython_tail_call_interpreter_merged_for))

* [numbat: A statically typed programming language for scientific computations with first class support for physical dimensions and units](https://github.com/sharkdp/numbat) ([comments](https://lobste.rs/s/l4olys/numbat_statically_typed_programming))

* [OpenWrt 24.10.0 - First Stable Release](https://openwrt.org/releases/24.10/notes-24.10.0) ([comments](https://lobste.rs/s/f61avh/openwrt_24_10_0_first_stable_release))

## Emerging AI and Computational Advancements

* [Kokoro WebGPU: Real-time text-to-speech 100% locally in the browser](https://huggingface.co/spaces/webml-community/kokoro-webgpu) ([comments](https://news.ycombinator.com/item?id=42973769))

* [Whalesong patterns follow a universal law of human language, new research finds](https://theconversation.com/whalesong-patterns-follow-a-universal-law-of-human-language-new-research-finds-249271) ([comments](https://news.ycombinator.com/item?id=42971847))

* [Gold-Medalist Performance in Solving Olympiad Geometry with AlphaGeometry2](https://arxiv.org/abs/2502.03544) ([comments](https://news.ycombinator.com/item?id=42969892))

* [Robust autonomy emerges from self-play](https://arxiv.org/abs/2502.03349) ([comments](https://news.ycombinator.com/item?id=42968700))

## Security and Privacy

* [Multiple security flaws found in DeepSeek iOS app, incl sending unencrypted data](https://9to5mac.com/2025/02/07/multiple-security-flaws-found-in-deepseek-ios-app-including-sending-unencrypted-data/) ([comments](https://news.ycombinator.com/item?id=42972678))

* [UK Orders Apple To Let It Spy on Users' Encrypted Accounts](https://apple.slashdot.org/story/25/02/07/1150200/uk-orders-apple-to-let-it-spy-on-users-encrypted-accounts?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=42971761))

* [Russia VPN Crackdown Revelation - VPN Sites Hide Their IP Addresses](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss) ([comments](https://news.ycombinator.com/item?id=42970240))

* [Google Removes Pledge to Not Use AI for Weapons From Website](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss) ([comments](https://news.ycombinator.com/item?id=42967226))

## Scientific Discoveries and Observations

* [Children's arithmetic skills do not transfer between applied and academic math](https://www.nature.com/articles/s41586-024-08502-w) ([comments](https://news.ycombinator.com/item?id=42972781))

* [Scientists Find That Things Really Do Seem Better In the Morning](https://science.slashdot.org/story/25/02/07/0035259/scientists-find-that-things-really-do-seem-better-in-the-morning?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=42971059))

## Technology Failures and Insights

* [Torrenting From a Corporate Laptop Doesn't Feel Right': Meta Emails Unsealed](https://tech.slashdot.org/story/25/02/07/1224244/torrenting-from-a-corporate-laptop-doesnt-feel-right-meta-emails-unsealed?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=42972678))

* [Meta torrented & seeded 81.7 TB dataset containing copyrighted data](https://arstechnica.com/tech-policy/2025/02/meta-torrented-over-81-7tb-of-pirated-books-to-train-ai-authors-say/) ([comments](https://news.ycombinator.com/item?id=42971446))

* [Boeing's Starliner Losses Top $2 Billion](https://science.slashdot.org/story/25/02/07/0058237/boeings-starliner-losses-top-2-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=42971059))

## Historical and Cultural Perspectives

* [When Louis Armstrong Conquered Chicago](https://www.honest-broker.com/p/when-louis-armstrong-conquered-chicago) ([comments](https://news.ycombinator.com/item?id=42973897))

* [Frank Lloyd Wright's mile high skyscraper proposal (2021)](https://www.onverticality.com/blog/frank-lloyd-wright-mile-high-skyscraper) ([comments](https://news.ycombinator.com/item?id=42967226))

* [Donald Knuth's 2024 Christmas Lecture: Strong and Weak Components [video]](https://www.youtube.com/watch?v=Hi8r_63LGyg) ([comments](https://news.ycombinator.com/item?id=42970240))

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

* [2025-02-07, 15:40:38](https://news.ycombinator.com/item?id=42973897) - [When Louis Armstrong Conquered Chicago](https://www.honest-broker.com/p/when-louis-armstrong-conquered-chicago)
* [2025-02-07, 15:35:15](https://lobste.rs/s/bvqj9g/lkml_hector_martin_patch_maintainers) - [LKML: Hector Martin: [PATCH] MAINTAINERS: Remove myself](https://lkml.org/lkml/2025/2/7/9)
* [2025-02-07, 15:30:08](https://news.ycombinator.com/item?id=42973769) - [Kokoro WebGPU: Real-time text-to-speech 100% locally in the browser](https://huggingface.co/spaces/webml-community/kokoro-webgpu)
* [2025-02-07, 15:21:00](https://tech.slashdot.org/story/25/02/07/1224244/torrenting-from-a-corporate-laptop-doesnt-feel-right-meta-emails-unsealed?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Torrenting From a Corporate Laptop Doesn't Feel Right': Meta Emails Unsealed](https://tech.slashdot.org/story/25/02/07/1224244/torrenting-from-a-corporate-laptop-doesnt-feel-right-meta-emails-unsealed?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 14:44:45](https://news.ycombinator.com/item?id=42973131) - [Baltic countries disconnect from the Russian power grid](https://baltic-grid.sympower.net/)
* [2025-02-07, 14:40:00](https://linux.slashdot.org/story/25/02/07/1332241/asahi-linux-lead-developer-hector-martin-resigns-from-linux-kernel?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Asahi Linux Lead Developer Hector Martin Resigns From Linux Kernel](https://linux.slashdot.org/story/25/02/07/1332241/asahi-linux-lead-developer-hector-martin-resigns-from-linux-kernel?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 14:25:28](https://lobste.rs/s/srf2u2/gleam_v1_8_0_released) - [Gleam v1.8.0 released](https://gleam.run/news/gleam-gets-rename-variable/)
* [2025-02-07, 14:18:19](https://news.ycombinator.com/item?id=42972781) - [Children's arithmetic skills do not transfer between applied and academic math](https://www.nature.com/articles/s41586-024-08502-w)
* [2025-02-07, 14:13:44](https://news.ycombinator.com/item?id=42972722) - [Personal Software Is Becoming a Trend](https://xuanwo.io/links/2025/02/personal-software-is-becoming-a-trend/)
* [2025-02-07, 14:10:49](https://lobste.rs/s/ui5fzs/cpython_tail_call_interpreter_merged_for) - [CPython tail-call interpreter merged for Python 3.14, a 10% speedup in benchmarks](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-tail-call)
* [2025-02-07, 14:08:44](https://news.ycombinator.com/item?id=42972678) - [Multiple security flaws found in DeepSeek iOS app, incl sending unencrypted data](https://9to5mac.com/2025/02/07/multiple-security-flaws-found-in-deepseek-ios-app-including-sending-unencrypted-data/)
* [2025-02-07, 14:00:00](https://apple.slashdot.org/story/25/02/07/1150200/uk-orders-apple-to-let-it-spy-on-users-encrypted-accounts?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [UK Orders Apple To Let It Spy on Users' Encrypted Accounts](https://apple.slashdot.org/story/25/02/07/1150200/uk-orders-apple-to-let-it-spy-on-users-encrypted-accounts?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 13:44:09](https://news.ycombinator.com/item?id=42972420) - [Procedural Hydrology: Dynamic Lake and River Simulation (2020)](https://nickmcd.me/2020/04/15/procedural-hydrology/)
* [2025-02-07, 13:43:28](https://lobste.rs/s/y0bakb/refined_simple_refinement_types_for_rust) - [Refined: simple refinement types for Rust](https://jordankaye.dev/posts/refined/)
* [2025-02-07, 13:00:00](https://science.slashdot.org/story/25/02/07/0035259/scientists-find-that-things-really-do-seem-better-in-the-morning?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Scientists Find That Things Really Do Seem Better In the Morning](https://science.slashdot.org/story/25/02/07/0035259/scientists-find-that-things-really-do-seem-better-in-the-morning?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 12:33:23](https://news.ycombinator.com/item?id=42971847) - [Whalesong patterns follow a universal law of human language, new research finds](https://theconversation.com/whalesong-patterns-follow-a-universal-law-of-human-language-new-research-finds-249271)
* [2025-02-07, 12:18:46](https://news.ycombinator.com/item?id=42971761) - [Apple Ordered by UK to Create Global iCloud Encryption Backdoor](https://www.macrumors.com/2025/02/07/uk-government-orders-access-icloud/)
* [2025-02-07, 12:01:02](https://news.ycombinator.com/item?id=42971643) - [InspectMind AI (YC W24) Is Hiring for AI in Construction](https://www.ycombinator.com/companies/inspectmind-ai/jobs/XlRFssT-software-engineer)
* [2025-02-07, 11:28:00](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss) - [Russia VPN Crackdown Revelation - VPN Sites Hide Their IP Addresses ](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss)
* [2025-02-07, 11:27:58](https://lobste.rs/s/xm3hxg/what_f_is_reflection) - [What the f*** is reflection?](https://www.youtube.com/watch?v=vxPKWb0dSqQ)
* [2025-02-07, 11:26:02](https://news.ycombinator.com/item?id=42971446) - [Meta torrented & seeded 81.7 TB dataset containing copyrighted data](https://arstechnica.com/tech-policy/2025/02/meta-torrented-over-81-7tb-of-pirated-books-to-train-ai-authors-say/)
* [2025-02-07, 11:11:40](https://lobste.rs/s/ro1i8v/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/ro1i8v/what_are_you_doing_this_weekend)
* [2025-02-07, 10:01:23](https://news.ycombinator.com/item?id=42971059) - [Shwe Kokko is accused of being a city built on scams](https://www.bbc.co.uk/news/articles/c04nx1vnw17o)
* [2025-02-07, 10:00:00](https://science.slashdot.org/story/25/02/07/0058237/boeings-starliner-losses-top-2-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Boeing's Starliner Losses Top $2 Billion](https://science.slashdot.org/story/25/02/07/0058237/boeings-starliner-losses-top-2-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 08:00:33](https://lobste.rs/s/l4olys/numbat_statically_typed_programming) - [numbat: A statically typed programming language for scientific computations with first class support for physical dimensions and units](https://github.com/sharkdp/numbat)
* [2025-02-07, 07:46:07](https://lobste.rs/s/vlzdgt/fosdem_2025_14_years_systemd) - [FOSDEM 2025 - 14 Years of systemd](https://fosdem.org/2025/schedule/event/fosdem-2025-6648-14-years-of-systemd/)
* [2025-02-07, 07:11:36](https://news.ycombinator.com/item?id=42970240) - [Donald Knuth's 2024 Christmas Lecture: Strong and Weak Components [video]](https://www.youtube.com/watch?v=Hi8r_63LGyg)
* [2025-02-07, 07:02:39](https://lobste.rs/s/ilowht/litestack_6_gems_databases_into_one) - [Litestack: 6 gems and databases into one](https://github.com/oldmoe/litestack)
* [2025-02-07, 07:00:00](https://science.slashdot.org/story/25/02/07/0052210/nasa-plans-twitch-stream-from-iss?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA Plans Twitch Stream From ISS](https://science.slashdot.org/story/25/02/07/0052210/nasa-plans-twitch-stream-from-iss?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 06:43:00](https://soylentnews.org/article.pl?sid=25/02/06/0534246&from=rss) - [Educated but Easily Fooled? Who Falls for Misinformation and Why](https://soylentnews.org/article.pl?sid=25/02/06/0534246&from=rss)
* [2025-02-07, 06:02:14](https://news.ycombinator.com/item?id=42969892) - [Gold-Medalist Performance in Solving Olympiad Geometry with AlphaGeometry2](https://arxiv.org/abs/2502.03544)
* [2025-02-07, 04:52:11](https://lobste.rs/s/zzbfob/you_didn_t_notice_mp3_is_now_free) - [You Didn't Notice MP3 Is Now Free](https://idiallo.com/blog/listen-mp3-is-free)
* [2025-02-07, 04:11:59](https://lobste.rs/s/b9ezyc/three_projections_doctor_futamura) - [The Three Projections of Doctor Futamura](http://blog.sigfpe.com/2009/05/three-projections-of-doctor-futamura.html)
* [2025-02-07, 03:52:24](https://lobste.rs/s/f5ziu7/comments_on_shared_unix_hosting_vs_cloud) - [Comments on Shared Unix Hosting vs. the Cloud](https://oils.pub/blog/2025/02/shared-hosting.html)
* [2025-02-07, 03:38:31](https://lobste.rs/s/9zznlg/llm_curve_impact_on_software_engineers) - [The LLM Curve of Impact on Software Engineers](https://serce.me/posts/2025-02-07-the-llm-curve-of-impact-on-software-engineers)
* [2025-02-07, 03:30:00](https://it.slashdot.org/story/25/02/07/0049222/ransomware-payments-dropped-35-in-2024?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ransomware Payments Dropped 35% In 2024](https://it.slashdot.org/story/25/02/07/0049222/ransomware-payments-dropped-35-in-2024?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 02:44:09](https://news.ycombinator.com/item?id=42968700) - [Robust autonomy emerges from self-play](https://arxiv.org/abs/2502.03349)
* [2025-02-07, 02:10:00](https://slashdot.org/story/25/02/07/0026240/arm-ends-legal-efforts-to-terminate-qualcomms-license?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Arm Ends Legal Efforts To Terminate Qualcomm's License](https://slashdot.org/story/25/02/07/0026240/arm-ends-legal-efforts-to-terminate-qualcomms-license?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 01:55:00](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss) - [Google Removes Pledge to Not Use AI for Weapons From Website](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss)
* [2025-02-07, 01:30:00](https://apple.slashdot.org/story/25/02/07/0013232/apples-long-awaited-overhaul-of-iphone-se-nears-release?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple's Long-Awaited Overhaul of iPhone SE Nears Release](https://apple.slashdot.org/story/25/02/07/0013232/apples-long-awaited-overhaul-of-iphone-se-nears-release?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 01:10:00](https://tech.slashdot.org/story/25/02/06/2354244/google-tests-ai-powered-search-mode-with-employees?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Tests AI-Powered Search Mode With Employees](https://tech.slashdot.org/story/25/02/06/2354244/google-tests-ai-powered-search-mode-with-employees?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 00:30:00](https://yro.slashdot.org/story/25/02/06/2231208/bill-banning-social-media-for-youngsters-advances?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bill Banning Social Media For Youngsters Advances](https://yro.slashdot.org/story/25/02/06/2231208/bill-banning-social-media-for-youngsters-advances?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 23:50:00](https://slashdot.org/story/25/02/06/2210223/openai-considering-16-states-for-data-center-campuses?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Considering 16 States For Data Center Campuses](https://slashdot.org/story/25/02/06/2210223/openai-considering-16-states-for-data-center-campuses?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 23:10:00](https://hardware.slashdot.org/story/25/02/06/2154234/boston-dynamics-joins-forces-with-its-former-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Boston Dynamics Joins Forces With Its Former CEO](https://hardware.slashdot.org/story/25/02/06/2154234/boston-dynamics-joins-forces-with-its-former-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 23:09:39](https://lobste.rs/s/f61avh/openwrt_24_10_0_first_stable_release) - [OpenWrt 24.10.0 - First Stable Release](https://openwrt.org/releases/24.10/notes-24.10.0)
* [2025-02-06, 22:39:22](https://news.ycombinator.com/item?id=42967226) - [Frank Lloyd Wright's mile high skyscraper proposal (2021)](https://www.onverticality.com/blog/frank-lloyd-wright-mile-high-skyscraper)
* [2025-02-06, 22:30:16](https://lobste.rs/s/8yyrkr/ai_by_hand_exercises_excel) - [AI by Hand Exercises in Excel](https://github.com/ImagineAILab/ai-by-hand-excel)
* [2025-02-06, 22:30:00](https://news.slashdot.org/story/25/02/06/2142201/slashdot-asks-does-britains-know-your-place-culture-stifle-innovation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Slashdot Asks: Does Britain's 'Know Your Place' Culture Stifle Innovation?](https://news.slashdot.org/story/25/02/06/2142201/slashdot-asks-does-britains-know-your-place-culture-stifle-innovation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 22:00:01](https://lobste.rs/s/i5phus/decade_tils) - [A Decade of TILs](https://www.visualmode.dev/a-decade-of-tils)
* [2025-02-06, 21:50:00](https://games.slashdot.org/story/25/02/06/2120258/esa-wants-to-replace-e3-with-a-bunch-of-buzzwords?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [ESA Wants To Replace E3 With a Bunch of Buzzwords](https://games.slashdot.org/story/25/02/06/2120258/esa-wants-to-replace-e3-with-a-bunch-of-buzzwords?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-06, 21:34:12](https://news.ycombinator.com/item?id=42966720) - [Understanding Reasoning LLMs](https://magazine.sebastianraschka.com/p/understanding-reasoning-llms)
* [2025-02-06, 21:12:00](https://soylentnews.org/article.pl?sid=25/02/04/1537254&from=rss) - [Warmer, More Crowded Cities Bring Out the Rats](https://soylentnews.org/article.pl?sid=25/02/04/1537254&from=rss)
* [2025-02-06, 20:54:10](https://news.ycombinator.com/item?id=42966402) - [The Inevitability of the Borrow Checker](https://yorickpeterse.com/articles/the-inevitability-of-the-borrow-checker/)
* [2025-02-06, 20:35:44](https://lobste.rs/s/cxpkpn/doom_running_on_apple_lightning_hdmi) - [DOOM running on Apple Lightning to HDMI dongle](https://youtu.be/4XCkeN0XuqA)
* [2025-02-06, 18:40:30](https://news.ycombinator.com/item?id=42965198) - [Show HN: SQLite disk page explorer](https://github.com/QuadrupleA/sqlite-page-explorer)
* [2025-02-06, 17:50:10](https://lobste.rs/s/ficdn9/updating_large_codebase_rust_2024) - [Updating a large codebase to Rust 2024](https://codeandbitters.com/rust-2024-upgrade/)
* [2025-02-06, 16:44:21](https://news.ycombinator.com/item?id=42964124) - [The superconductivity of layered graphene is surprisingly strange](https://www.newscientist.com/article/2466930-the-superconductivity-of-layered-graphene-is-surprisingly-strange/)
* [2025-02-06, 16:24:00](https://soylentnews.org/article.pl?sid=25/02/04/1528253&from=rss) - [Who's Your Pick?  Eagles or Chiefs? Or Statistics?](https://soylentnews.org/article.pl?sid=25/02/04/1528253&from=rss)
* [2025-02-06, 15:35:32](https://news.ycombinator.com/item?id=42963346) - [Show HN: An homage to Tom Dowdy's 1991 screensaver, \"Kaos\"](https://thestrikeagency.com/kaos/)
* [2025-02-06, 14:53:39](https://lobste.rs/s/nghoy0/ais_robots_should_sound_robotic) - [AIs and Robots Should Sound Robotic](https://www.schneier.com/blog/archives/2025/02/ais-and-robots-should-sound-robotic.html)
* [2025-02-06, 14:50:28](https://lobste.rs/s/89h9eb/html_whitespace_is_broken) - [HTML Whitespace is Broken](https://blog.dwac.dev/posts/html-whitespace/)
* [2025-02-06, 14:15:28](https://news.ycombinator.com/item?id=42962508) - [Simulating water over terrain](https://lisyarus.github.io/blog/posts/simulating-water-over-terrain.html)
* [2025-02-06, 12:58:27](https://lobste.rs/s/e8tdsr/asdf_version_manager_has_been_re_written) - [Asdf Version Manager Has Been Re-Written in Golang](https://stratus3d.com/blog/2025/02/03/asdf-has-been-rewritten-in-go)
* [2025-02-06, 11:40:00](https://soylentnews.org/article.pl?sid=25/02/04/1521226&from=rss) - [Google Offering ‘Voluntary Exit’ for Employees Working on Pixel, Android](https://soylentnews.org/article.pl?sid=25/02/04/1521226&from=rss)
* [2025-02-06, 09:36:36](https://lobste.rs/s/cbvnzl/string_vs_str) - [String vs &str](https://blog.sulami.xyz/posts/string-vs-str/)
* [2025-02-06, 09:03:33](https://lobste.rs/s/2etd7f/sqlite_postgresql_it_s_complicated) - [SQLite or PostgreSQL? It's Complicated](https://www.twilio.com/en-us/blog/sqlite-postgresql-complicated)
* [2025-02-06, 08:53:46](https://lobste.rs/s/dp5e4g/it_is_time_standardize_principles) - [It Is Time to Standardize Principles and Practices for Software Memory Safety](https://cacm.acm.org/opinion/it-is-time-to-standardize-principles-and-practices-for-software-memory-safety/)
* [2025-02-06, 06:55:00](https://soylentnews.org/article.pl?sid=25/02/04/1518208&from=rss) - [Cooking Flawless Pasta - it's Science!](https://soylentnews.org/article.pl?sid=25/02/04/1518208&from=rss)
* [2025-02-06, 02:13:00](https://soylentnews.org/article.pl?sid=25/02/04/1511202&from=rss) - [These Smart Glasses Help People With Macular Degeneration By Eliminating Blind Spots](https://soylentnews.org/article.pl?sid=25/02/04/1511202&from=rss)
* [2025-02-05, 21:24:00](https://soylentnews.org/article.pl?sid=25/02/04/157244&from=rss) - [Giant Study Questions Link Between Autism and Maternal Health](https://soylentnews.org/article.pl?sid=25/02/04/157244&from=rss)
* [2025-02-05, 19:21:34](https://lobste.rs/s/khlha3/sudoku_affair) - [the sudoku affair](https://explaining.software/archive/the-sudoku-affair/)
* [2025-02-05, 18:17:58](https://news.ycombinator.com/item?id=42952798) - [Kill the \"user\": Musings of a disillusioned technologist](https://www.pastagang.cc/blog/kill-the-user/)
* [2025-02-05, 16:43:00](https://soylentnews.org/article.pl?sid=25/02/04/1455221&from=rss) - [Everyone Knows Your Location: Tracking Myself Down Through in-App Ads](https://soylentnews.org/article.pl?sid=25/02/04/1455221&from=rss)
* [2025-02-05, 13:15:00](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss) - [Soylent Update - February 2025](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss)
* [2025-02-05, 12:17:47](https://news.ycombinator.com/item?id=42947447) - [OpenLDK: A Java JIT compiler and runtime in Common Lisp](https://github.com/atgreen/openldk)
* [2025-02-05, 12:00:00](https://soylentnews.org/article.pl?sid=25/02/04/042215&from=rss) - [Microsoft Defender's VPN Feature Will be Killed Off at the End of February](https://soylentnews.org/article.pl?sid=25/02/04/042215&from=rss)
* [2025-02-05, 10:53:02](https://news.ycombinator.com/item?id=42946752) - [Steve Meretzky – Working with Douglas Adams on the Hitchhiker's Guide](https://spillhistorie.no/qa-with-game-designer-steve-meretzky/)
* [2025-02-05, 07:17:00](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss) - [Tesla and BMW Sue European Commission Over Chinese EV Tariffs](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss)
* [2025-02-05, 02:35:00](https://soylentnews.org/article.pl?sid=25/02/04/0355255&from=rss) - [Medical Monitoring Machines Spotted Stealing Patient Data](https://soylentnews.org/article.pl?sid=25/02/04/0355255&from=rss)
* [2025-02-04, 21:50:00](https://soylentnews.org/article.pl?sid=25/02/04/0352219&from=rss) - [Artificial Gills Unlock Long-Range Underwater Robots](https://soylentnews.org/article.pl?sid=25/02/04/0352219&from=rss)
* [2025-02-04, 18:24:31](https://news.ycombinator.com/item?id=42936506) - [Show HN: Play with real quantum physics in your browser](https://quantum.orgsoft.org)
* [2025-02-04, 17:08:00](https://soylentnews.org/article.pl?sid=25/02/03/1327213&from=rss) - [NASA's Returned Asteroid Samples Hold the Ingredients of Life From a Watery World](https://soylentnews.org/article.pl?sid=25/02/03/1327213&from=rss)
* [2025-02-04, 12:23:00](https://soylentnews.org/article.pl?sid=25/02/02/1444250&from=rss) - [Fediverse Explosive Growth - 100m Posts in January](https://soylentnews.org/article.pl?sid=25/02/02/1444250&from=rss)
* [2025-02-04, 07:41:00](https://soylentnews.org/article.pl?sid=25/02/02/1338233&from=rss) - [US to Deploy Molten Salt Reactors to Turn Wastewater Into Freshwater](https://soylentnews.org/article.pl?sid=25/02/02/1338233&from=rss)
* [2025-02-04, 02:56:00](https://soylentnews.org/article.pl?sid=25/02/02/141218&from=rss) - [How Does DeepSeek R1 Really Fare Against OpenAI's Best Reasoning Models?](https://soylentnews.org/article.pl?sid=25/02/02/141218&from=rss)
* [2025-02-04, 01:44:45](https://news.ycombinator.com/item?id=42926396) - [What was before the telephone bell? Pencils and Hammers](https://www.calling315.com/annunicators)
* [2025-02-04, 01:00:25](https://news.ycombinator.com/item?id=42925921) - [The Alchemist and His Quicksilver](https://fantasticanachronism.com/2025/02/03/the-alchemist-and-his-quicksilver/)
* [2025-02-03, 22:13:00](https://soylentnews.org/article.pl?sid=25/02/02/1354257&from=rss) - [Bug That Kills PC's Audio is Seriously Widespread Affecting Multiple Windows Versions](https://soylentnews.org/article.pl?sid=25/02/02/1354257&from=rss)
* [2025-02-03, 20:57:49](https://news.ycombinator.com/item?id=42923000) - [There's Math.random(), and then there's Math.random() (2015)](https://v8.dev/blog/math-random)
* [2025-02-03, 18:56:51](https://news.ycombinator.com/item?id=42921493) - [Emil's Story as a Self-Taught AI Researcher (2020)](https://floydhub.ghost.io/emils-story-as-a-self-taught-ai-researcher/)
* [2025-02-03, 17:25:00](https://soylentnews.org/article.pl?sid=25/02/02/1347234&from=rss) - [The Growing Antibiotic Resistance Problem Requires Better Policy](https://soylentnews.org/article.pl?sid=25/02/02/1347234&from=rss)
* [2025-02-03, 12:40:00](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss) - [About Zusie (Relay Based Computer)](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss)
* [2025-02-03, 07:51:00](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss) - [The Network State Coup is Happening Right Now](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss)
* [2025-02-03, 03:07:00](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss) - [How One YouTuber is Trying to Poison the AI Bots Stealing Her Content](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss)
