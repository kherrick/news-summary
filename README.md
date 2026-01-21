# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Advancements and Innovations

* [Building Critical Infrastructure with htmx: Network Automation for the Paris 2024 Olympics](https://htmx.org/essays/paris-2024-olympics-htmx-network-automation/) - Learn how htmx was utilized to build robust network automation solutions for the Paris 2024 Olympics.

* [Develops a new macOS native DAW integrating a Git branching model for streamlined audio editing](https://www.scratchtrackaudio.com).

* [Rust's Standard Library on GPUs](https://vectorware.com/blog/rust-std-on-gpu/) - Discover efforts to port Rust's standard library to GPU environments.

* [A Static Site Generator Written in POSIX Shell](https://aashvik.com/posts/shell-ssg) - A unique approach to building static websites using POSIX Shell.

* [Show HN: TopicRadar – Track trending topics across HN, GitHub, ArXiv, and more](https://apify.com/mick-johnson/topic-radar) - An impressive tool to follow trending discussions across various platforms.

## AI, Ethics, and Social Implications

* [Palantir CEO Says AI To Make Large-Scale Immigration Obsolete](https://slashdot.org/story/26/01/20/1834222/palantir-ceo-says-ai-to-make-large-scale-immigration-obsolete?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A perspective on how AI could reshape immigration by making it largely unnecessary.

* [Which AI Lies Best? A game theory classic designed by John Nash](https://so-long-sucker.vercel.app/) - Investigate the nuances of deception among AI systems.

* [AI Is Still Making Code Worse: A New CMU Study Confirms](https://blog.robbowley.net/2025/12/04/ai-is-still-making-code-worse-a-new-cmu-study-confirms/) - Learn about the ongoing challenges in improving code quality with AI.

* [Meta's Oversight Board Takes Up Permanent Bans in Landmark Case](https://meta.slashdot.org/story/26/01/20/2115249/metas-oversight-board-takes-up-permanent-bans-in-landmark-case?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discusses the ethical implications of permanent bans reviewed by Meta's oversight board.

## Social and Cultural Trends

* [The World of Japanese Snack Bars](https://www.bbc.com/travel/article/20260116-inside-the-secret-world-of-japanese-snack-bars) - A mesmerizing look into the unique and private culture of Japan's snack bars.

* [California is Free of Drought for the First Time in 25 Years](https://www.latimes.com/california/story/2026-01-09/california-has-no-areas-of-dryness-first-time-in-25-years) - An optimistic environmental update for the Golden State.

* [Mosquitoes' Thirst for Human Blood Has Increased as Biodiversity Loss Worsens](https://soylentnews.org/article.pl?sid=26/01/19/046252&from=rss) - A concerning examination into how biodiversity loss is altering mosquito behavior.

## Space and Science Updates

* [Building the World's First Graviton Detector](https://soylentnews.org/article.pl?sid=26/01/19/166239&from=rss) - A groundbreaking project probing the mysteries of gravitational waves.

* [HHS Announces New Study on Cellphone Radiation and Health](https://mobile.slashdot.org/story/26/01/20/2215254/hhs-announces-new-study-of-cellphone-radiation-and-health?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Updates on the Health Department's research.

* [Anthropologists Offer New Evidence of Bipedalism in Fossil Discovery](https://soylentnews.org/article.pl?sid=26/01/18/0043231&from=rss) - Insights into human evolution from fossil studies.

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

* [2026-01-21, 00:45:00](https://tech.slashdot.org/story/26/01/20/2226236/developer-rescues-stadia-bluetooth-tool-that-google-killed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Developer Rescues Stadia Bluetooth Tool That Google Killed](https://tech.slashdot.org/story/26/01/20/2226236/developer-rescues-stadia-bluetooth-tool-that-google-killed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 00:21:13](https://news.ycombinator.com/item?id=46699597) - [Who Owns Rudolph&apos;s Nose?](https://creativelawcenter.com/copyright-rudolph-reindeer/)
* [2026-01-21, 00:05:10](https://news.ycombinator.com/item?id=46699441) - [Show HN: macOS native DAW with Git branching model](https://www.scratchtrackaudio.com)
* [2026-01-21, 00:02:00](https://mobile.slashdot.org/story/26/01/20/2215254/hhs-announces-new-study-of-cellphone-radiation-and-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HHS Announces New Study of Cellphone Radiation and Health](https://mobile.slashdot.org/story/26/01/20/2215254/hhs-announces-new-study-of-cellphone-radiation-and-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 23:51:00](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss) - [Building the World&apos;s First Graviton Detector](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss)
* [2026-01-20, 23:26:06](https://news.ycombinator.com/item?id=46699072) - [Claude Chill: Fix Claude Code&apos;s Flickering in Terminal](https://github.com/davidbeesley/claude-chill)
* [2026-01-20, 23:20:00](https://news.slashdot.org/story/26/01/20/2150205/uk-mulls-australia-like-social-media-ban-for-users-under-16?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Mulls Australia-Like Social Media Ban For Users Under 16](https://news.slashdot.org/story/26/01/20/2150205/uk-mulls-australia-like-social-media-ban-for-users-under-16?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 22:40:00](https://slashdot.org/story/26/01/20/2133237/majority-of-ceos-report-zero-payoff-from-ai-splurge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Majority of CEOs Report Zero Payoff From AI Splurge](https://slashdot.org/story/26/01/20/2133237/majority-of-ceos-report-zero-payoff-from-ai-splurge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 22:39:26](https://news.ycombinator.com/item?id=46698660) - [California is free of drought for the first time in 25 years](https://www.latimes.com/california/story/2026-01-09/california-has-no-areas-of-dryness-first-time-in-25-years)
* [2026-01-20, 22:36:23](https://news.ycombinator.com/item?id=46698623) - [Lunar Radio Telescope to Unlock Cosmic Mysteries](https://spectrum.ieee.org/lunar-radio-telescope)
* [2026-01-20, 22:18:53](https://news.ycombinator.com/item?id=46698469) - [Provably unmasking malicious behavior through execution traces](https://arxiv.org/abs/2512.13821)
* [2026-01-20, 22:09:49](https://news.ycombinator.com/item?id=46698370) - [Which AI Lies Best? A game theory classic designed by John Nash](https://so-long-sucker.vercel.app/)
* [2026-01-20, 22:02:00](https://meta.slashdot.org/story/26/01/20/2115249/metas-oversight-board-takes-up-permanent-bans-in-landmark-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s Oversight Board Takes Up Permanent Bans In Landmark Case](https://meta.slashdot.org/story/26/01/20/2115249/metas-oversight-board-takes-up-permanent-bans-in-landmark-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 21:36:34](https://news.ycombinator.com/item?id=46698061) - [The challenges of soft delete](https://atlas9.dev/blog/soft-delete.html)
* [2026-01-20, 21:34:06](https://news.ycombinator.com/item?id=46698038) - [The world of Japanese snack bars](https://www.bbc.com/travel/article/20260116-inside-the-secret-world-of-japanese-snack-bars)
* [2026-01-20, 21:25:21](https://lobste.rs/s/xfugsm/designing_service_with_indieauth_email) - [Designing a service with IndieAuth and email-based login](https://jamesg.blog/2026/01/20/indieauth-email-login-design/)
* [2026-01-20, 21:22:00](https://slashdot.org/story/26/01/20/1924238/56-of-companies-have-seen-zero-financial-return-from-ai-investments-pwc-survey-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [56% of Companies Have Seen Zero Financial Return From AI Investments, PwC Survey Says](https://slashdot.org/story/26/01/20/1924238/56-of-companies-have-seen-zero-financial-return-from-ai-investments-pwc-survey-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 21:14:03](https://lobste.rs/s/cxwenf/i_made_zig_compute_33_million_satellite) - [I Made Zig Compute 33 Million Satellite Positions in 3 Seconds. No GPU Required](https://atempleton.bearblog.dev/i-made-zig-compute-33-million-satellite-positions-in-3-seconds-no-gpu-required/)
* [2026-01-20, 20:45:00](https://apple.slashdot.org/story/26/01/20/1855225/setapp-mobile-to-close-in-february-as-alternative-ios-app-store-economics-prove-untenable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Setapp Mobile To Close in February as Alternative iOS App Store Economics Prove Untenable](https://apple.slashdot.org/story/26/01/20/1855225/setapp-mobile-to-close-in-february-as-alternative-ios-app-store-economics-prove-untenable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 20:02:00](https://slashdot.org/story/26/01/20/1813225/anthropic-ceo-says-government-should-help-ensure-ais-economic-upside-is-shared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic CEO Says Government Should Help Ensure AI&apos;s Economic Upside Is Shared](https://slashdot.org/story/26/01/20/1813225/anthropic-ceo-says-government-should-help-ensure-ais-economic-upside-is-shared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 19:34:48](https://news.ycombinator.com/item?id=46696699) - [Our approach to age prediction](https://openai.com/index/our-approach-to-age-prediction/)
* [2026-01-20, 19:22:00](https://it.slashdot.org/story/26/01/20/1825218/ai-agents-perilous-for-secure-apps-such-as-signal-whittaker-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Agents &apos;Perilous&apos; for Secure Apps Such as Signal, Whittaker Says](https://it.slashdot.org/story/26/01/20/1825218/ai-agents-perilous-for-secure-apps-such-as-signal-whittaker-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 19:18:28](https://lobste.rs/s/cnkpcm/little_sound_dj) - [Little Sound Dj](https://www.littlesounddj.com/lsd/index.php)
* [2026-01-20, 19:08:22](https://lobste.rs/s/udglku/building_critical_infrastructure_with) - [Building Critical Infrastructure with htmx: Network Automation for the Paris 2024 Olympics](https://htmx.org/essays/paris-2024-olympics-htmx-network-automation/)
* [2026-01-20, 19:06:56](https://news.ycombinator.com/item?id=46696357) - [Instabridge has acquired Nova Launcher](https://novalauncher.com/nova-is-here-to-stay)
* [2026-01-20, 19:06:07](https://lobste.rs/s/ezyebi/where_i_m_at_with_ai) - [Where I&apos;m at with AI](https://paulosman.me/2026/01/18/where-im-at-with-ai/)
* [2026-01-20, 19:06:00](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss) - [China&apos;s Wind Farms Are Doing a Lot More Than Generating Electricity](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss)
* [2026-01-20, 19:01:44](https://lobste.rs/s/qy6azg/reliable_signals_honest_intent) - [Reliable Signals of Honest Intent](https://zanlib.dev/blog/reliable-signals-of-honest-intent/)
* [2026-01-20, 19:01:30](https://news.ycombinator.com/item?id=46696276) - [Maintenance: Of Everything, Part One](https://press.stripe.com/maintenance-part-one)
* [2026-01-20, 18:35:00](https://slashdot.org/story/26/01/20/1834222/palantir-ceo-says-ai-to-make-large-scale-immigration-obsolete?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Palantir CEO Says AI To Make Large-Scale Immigration Obsolete](https://slashdot.org/story/26/01/20/1834222/palantir-ceo-says-ai-to-make-large-scale-immigration-obsolete?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 18:16:09](https://news.ycombinator.com/item?id=46695628) - [A 26,000-year astronomical monument hidden in plain sight (2019)](https://longnow.org/ideas/the-26000-year-astronomical-monument-hidden-in-plain-sight/)
* [2026-01-20, 18:09:16](https://lobste.rs/s/6xnhvt/building_your_own_efficient_uint128_c) - [Building Your Own Efficient uint128 in C++](https://solidean.com/blog/2026/building-your-own-u128/)
* [2026-01-20, 18:02:00](https://news.slashdot.org/story/26/01/20/174243/crypto-news-outlet-cointelegraph-loses-80-of-traffic-after-google-penalty-for-parasitic-blackhat-seo-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Crypto News Outlet Cointelegraph Loses 80% of Traffic After Google Penalty For Parasitic Blackhat SEO Deal](https://news.slashdot.org/story/26/01/20/174243/crypto-news-outlet-cointelegraph-loses-80-of-traffic-after-google-penalty-for-parasitic-blackhat-seo-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 17:21:00](https://science.slashdot.org/story/26/01/20/1647209/he-went-to-prison-for-gene-editing-babies-now-hes-planning-to-do-it-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [He Went To Prison for Gene-Editing Babies. Now He&apos;s Planning To Do It Again](https://science.slashdot.org/story/26/01/20/1647209/he-went-to-prison-for-gene-editing-babies-now-hes-planning-to-do-it-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 16:48:59](https://news.ycombinator.com/item?id=46694124) - [The Unix Pipe Card Game](https://punkx.org/unix-pipe-game/)
* [2026-01-20, 16:44:00](https://slashdot.org/story/26/01/20/1620212/europe-must-invest-in-open-source-ai-or-cede-to-china-schmidt-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe Must Invest in Open Source AI or Cede To China, Schmidt Says](https://slashdot.org/story/26/01/20/1620212/europe-must-invest-in-open-source-ai-or-cede-to-china-schmidt-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 16:39:26](https://lobste.rs/s/qywnk6/rust_s_standard_library_on_gpu) - [Rust&apos;s standard library on the GPU](https://vectorware.com/blog/rust-std-on-gpu/)
* [2026-01-20, 16:38:56](https://news.ycombinator.com/item?id=46693959) - [Show HN: Mastra 1.0, open-source JavaScript agent framework from the Gatsby devs](https://github.com/mastra-ai/mastra)
* [2026-01-20, 16:25:33](https://news.ycombinator.com/item?id=46693728) - [Cloudflare zero-day: Accessing any host globally](https://fearsoff.org/research/cloudflare-acme)
* [2026-01-20, 16:14:51](https://lobste.rs/s/smh8hs/venus_v5_released_modern_oo_standard) - [Venus v5 released: Modern OO standard library (and more) for Perl 5](https://www.reddit.com/r/perl/comments/1qi4sf8/venus_v5_released_modern_oo_standard_library_and/)
* [2026-01-20, 16:12:34](https://lobste.rs/s/kvviy0/type_safe_eval_grace) - [Type-safe eval in Grace](https://haskellforall.com/2026/01/typesafe-eval)
* [2026-01-20, 16:05:00](https://slashdot.org/story/26/01/20/1546245/ukraine-to-share-wartime-combat-data-with-allies-to-help-train-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ukraine To Share Wartime Combat Data With Allies To Help Train AI](https://slashdot.org/story/26/01/20/1546245/ukraine-to-share-wartime-combat-data-with-allies-to-help-train-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 15:56:07](https://news.ycombinator.com/item?id=46693205) - [Nvidia Stock Crash Prediction](https://entropicthoughts.com/nvidia-stock-crash-prediction)
* [2026-01-20, 15:29:00](https://hardware.slashdot.org/story/26/01/20/1529245/energy-costs-will-decide-which-countries-win-the-ai-race-microsofts-nadella-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Energy Costs Will Decide Which Countries Win the AI Race, Microsoft&apos;s Nadella Says](https://hardware.slashdot.org/story/26/01/20/1529245/energy-costs-will-decide-which-countries-win-the-ai-race-microsofts-nadella-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 15:19:22](https://news.ycombinator.com/item?id=46692692) - [Dockerhub for Skill.md](https://skillregistry.io/)
* [2026-01-20, 15:11:45](https://news.ycombinator.com/item?id=46692594) - [Danish pension fund divesting US Treasuries](https://www.reuters.com/business/danish-pension-fund-divest-its-us-treasuries-2026-01-20/)
* [2026-01-20, 14:47:50](https://news.ycombinator.com/item?id=46692347) - [Show HN: TopicRadar – Track trending topics across HN, GitHub, ArXiv, and more](https://apify.com/mick-johnson/topic-radar)
* [2026-01-20, 14:38:22](https://lobste.rs/s/tldid3/ip_addresses_through_2025) - [IP Addresses Through 2025](https://www.potaroo.net/ispcol/2026-01/addr2025.html)
* [2026-01-20, 14:24:13](https://lobste.rs/s/hrsaz6/unconventional_postgresql) - [Unconventional PostgreSQL Optimizations](https://hakibenita.com/postgresql-unconventional-optimizations)
* [2026-01-20, 14:23:44](https://news.ycombinator.com/item?id=46692116) - [Unconventional PostgreSQL Optimizations](https://hakibenita.com/postgresql-unconventional-optimizations)
* [2026-01-20, 14:22:00](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss) - [Mosquitoes&apos; Thirst for Human Blood Has Increased as Biodiversity Loss Worsens](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss)
* [2026-01-20, 13:51:03](https://news.ycombinator.com/item?id=46691835) - [IP Addresses Through 2025](https://www.potaroo.net/ispcol/2026-01/addr2025.html)
* [2026-01-20, 13:48:11](https://lobste.rs/s/nsjybj/why_alter_table_is_such_problem_for_sqlite) - [Why ALTER TABLE is such a problem for SQLite](https://www.sqlite.org/lang_altertable.html#why_alter_table_is_such_a_problem_for_sqlite)
* [2026-01-20, 13:16:22](https://lobste.rs/s/oxeeyz/my_week_with_opencode) - [My week with opencode](https://deadsimpletech.com/blog/week_with_opencode)
* [2026-01-20, 12:45:57](https://news.ycombinator.com/item?id=46691243) - [Ask HN: Do you have any evidence that agentic coding works?](https://news.ycombinator.com/item?id=46691243)
* [2026-01-20, 12:23:41](https://lobste.rs/s/tq0yv5/jule_programming_language) - [The Jule Programming Language](https://jule.dev/)
* [2026-01-20, 12:12:54](https://lobste.rs/s/1obt9w/lost_art_xml) - [The lost art of XML](https://marcosmagueta.com/blog/the-lost-art-of-xml/)
* [2026-01-20, 11:58:34](https://news.ycombinator.com/item?id=46690907) - [Running Claude Code dangerously (safely)](https://blog.emilburzo.com/2026/01/running-claude-code-dangerously-safely/)
* [2026-01-20, 10:54:51](https://lobste.rs/s/fsq2qu/static_site_generator_written_posix) - [A static site generator written in POSIX shell](https://aashvik.com/posts/shell-ssg)
* [2026-01-20, 10:47:25](https://news.ycombinator.com/item?id=46690402) - [I&apos;m addicted to being useful](https://www.seangoedecke.com/addicted-to-being-useful/)
* [2026-01-20, 09:44:51](https://lobste.rs/s/egujjx/ai_is_still_making_code_worse_new_cmu_study) - [AI Is still making code worse: A new CMU study confirms (2025)](https://blog.robbowley.net/2025/12/04/ai-is-still-making-code-worse-a-new-cmu-study-confirms/)
* [2026-01-20, 09:34:00](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss) - [New Studies Can Explain Why Comet 3I/Atlas Isn&apos;t an Alien (Probably)](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss)
* [2026-01-20, 09:01:25](https://lobste.rs/s/parmy3/giving_university_exams_age_chatbots) - [Giving University Exams in the Age of Chatbots](https://ploum.net/2026-01-19-exam-with-chatbots.html)
* [2026-01-20, 08:31:31](https://lobste.rs/s/5jvboe/lessons_from_creating_gaming_oriented) - [Lessons from creating a gaming-oriented scheduler](https://lwn.net/Articles/1051430/)
* [2026-01-20, 04:44:00](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss) - [Stellantis Drops Jeep, Chrysler Plug-in Hybrids Amid EV Sales Slowdown](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss)
* [2026-01-20, 03:55:21](https://lobste.rs/s/ymhppr/llms_your_career) - [LLMs and your career](https://notes.eatonphil.com/2026-01-19-llms-and-your-career.html)
* [2026-01-20, 01:23:58](https://lobste.rs/s/yzsckk/prediction_within_15_years_microsoft) - [Prediction: Within 15 years Microsoft will discontinue Windows in favor of a Windows themed Linux distribution](https://gamesbymason.com/blog/2026/microsoft/)
* [2026-01-20, 00:02:00](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss) - [Anthropologists Offer New Evidence of Bipedalism in Long-Debated Fossil Discovery](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss)
* [2026-01-19, 22:21:20](https://lobste.rs/s/nbsclr/floating_point_printing_parsing_can_be) - [Floating-Point Printing and Parsing Can Be Simple And Fast](https://research.swtch.com/fp)
* [2026-01-19, 22:07:47](https://lobste.rs/s/fsqjwr/personal_infrastructure_setup_2026) - [Personal infrastructure setup 2026](https://linderud.dev/blog/personal-infrastructure-setup-2026/)
* [2026-01-19, 20:11:38](https://lobste.rs/s/bv4yod/only_two_markup_languages) - [The Only Two Markup Languages](https://www.gingerbill.org/article/2026/01/19/two-families-of-markup-languages/)
* [2026-01-19, 19:11:00](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss) - [Linux Mint 22.3 “Zena” is Now Available for Download, Here&apos;s What&apos;s New](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss)
* [2026-01-19, 14:38:00](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss) - [Anything-Goes “Anyons” May be at the Root of Surprising Quantum Experiments](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss)
* [2026-01-19, 09:45:00](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss) - [AI and the Corporate Capture of Knowledge](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss)
* [2026-01-19, 09:19:45](https://news.ycombinator.com/item?id=46676708) - [Building Robust Helm Charts](https://www.willmunn.xyz/devops/helm/kubernetes/2026/01/17/building-robust-helm-charts.html)
* [2026-01-19, 06:30:49](https://news.ycombinator.com/item?id=46675630) - [Are Arrays Functions?](https://futhark-lang.org/blog/2026-01-16-are-arrays-functions.html)
* [2026-01-19, 05:03:00](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss) - [AWS Flips Switch on Euro Cloud as Customers Fret About Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss)
* [2026-01-19, 00:22:00](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss) - [Are You Dead?](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss)
* [2026-01-18, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss) - [How Screwed is Generation Alpha, and the Generations Which Will Depend on Them?](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss)
* [2026-01-18, 14:50:00](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss) - [Hobby FPV Drone Developer Breaks 400mph Limit With New World Record](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss)
* [2026-01-18, 10:03:00](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss) - [Sorry, Eh](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss)
* [2026-01-18, 05:13:00](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss) - [Linux Kernel Bugs Hide for 2+ Years on Average](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss)
* [2026-01-18, 00:29:00](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss) - [Wormholes May Not Exist—We&apos;ve Found They Reveal Something Deeper About Time and the Universe](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss)
* [2026-01-17, 19:43:00](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss) - [&apos;Society Cannot Function If No One is Accountable for AI&apos; — Jaron Lanier](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss)
* [2026-01-17, 16:44:45](https://news.ycombinator.com/item?id=46659465) - [Apples, Trees, and Quasimodes](https://systemstack.dev/2025/09/humane-computing/)
* [2026-01-17, 15:00:00](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss) - [Why Flies Matter, Their Vital Role in Ecosystems, and Surprising Diversity](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss)
* [2026-01-17, 10:18:00](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss) - [Researchers Expose WHILL Wheelchair Safety Risks Via Remote Hacking](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss)
* [2026-01-17, 05:30:00](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss) - [Signal Creator Moxie Marlinspike Wants to Do for AI What He Did for Messaging](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss)
* [2026-01-17, 00:42:00](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss) - [X Didn&apos;t Fix Grok&apos;s ‘Undressing’ Problem. It Just Makes People Pay for It](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss)
