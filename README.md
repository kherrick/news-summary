# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technologies & AI

* [Norway Reached 96.9% Market Share For EVs In June](https://tech.slashdot.org/story/25/07/03/2341234/norway-reached-969-market-share-for-evs-in-june?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Nearly complete market penetration highlights Norway's dominance in EV adoption and sustainability leadership.

* [ChatGPT Creates Phisher's Paradise By Recommending the Wrong URLs for Major Companies](https://it.slashdot.org/story/25/07/03/1912216/chatgpt-creates-phishers-paradise-by-recommending-the-wrong-urls-for-major-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Concerns rise as ChatGPT dangerously misguides users to incorrect URLs, raising cybersecurity alarms.

* [Hiding AI Prompts in Research Papers To Get Favorable Reviews](https://science.slashdot.org/story/25/07/03/1859237/researchers-caught-hiding-ai-prompts-in-research-papers-to-get-favorable-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A surprising ethical lapse emerges in academic circles as researchers manipulate AI for peer reviews.

* [Wind Knitting Factory](https://www.merelkarhof.nl/work/wind-knitting-factory) - An innovative project uses wind power to automate knitting, marrying craftsmanship and renewable energy.

* [High-Fidelity Simultaneous Speech-to-Speech Translation](https://arxiv.org/abs/2502.03382) - Cutting-edge speech translation technology promises advancements in global communication.

* [Project Vend: Can Claude run a small shop? (And why does that matter?)](https://www.anthropic.com/research/project-vend-1) - Exploring how Claude AI could sustain small-scale operations and redefine automation.

* [At Last, We Are Discovering What Quantum Computers Will be Useful For](https://soylentnews.org/article.pl?sid=25/06/29/1610258&amp;from=rss) - Quantum computing takes its first steps toward practical applications, igniting hopes for breakthroughs.

## Economic & Corporate Interests

* [Wells Fargo Scandal Pushed Customers Toward Fintech, Says UC Davis Study](https://news.slashdot.org/story/25/07/03/2349257/wells-fargo-scandal-pushed-customers-toward-fintech-says-uc-davis-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Fraud and mismanagement steer traditional banking customers toward modern fintech solutions.

* [Samsung Delays $44 Billion Texas Chip Fab Because 'There Are No Customers'](https://hardware.slashdot.org/story/25/07/03/2034239/samsung-delays-44-billion-texas-chip-fab-because-there-are-no-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Economic shifts halt one of the tech world's largest manufacturing expansions.

* [Citi Spends $9 Billion on Tech Overhaul After Series of Costly Errors](https://tech.slashdot.org/story/25/07/03/1635251/citi-spends-9-billion-on-tech-overhaul-after-series-of-costly-errors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Citi invests heavily in technology to rectify lapses and restore trust.

* [A Lot of Product Makers Snub Right To Repair Laws](https://it.slashdot.org/story/25/07/03/1833218/a-lot-of-product-makers-snub-right-to-repair-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Manufacturers resist legislation aimed at empowering users to fix their own devices.

* [Ripple Applies For US Banking License](https://news.slashdot.org/story/25/07/03/2335200/ripple-applies-for-us-banking-license?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Cryptocurrency company Ripple seeks a pivotal role in traditional banking.

## Scientific Discoveries & Engineering

* [CO2 sequestration through accelerated weathering of limestone on ships](https://www.science.org/doi/10.1126/sciadv.adr7250) - Innovative maritime technology tackles carbon emissions using limestone-based solutions.

* [Earthquake-Induced Electricity Offers Answer to Mystery of Gold Nugget Formation](https://soylentnews.org/article.pl?sid=25/07/02/1636207&amp;from=rss) - Researchers uncover the geophysical processes underpinning natural gold nugget deposits.

* [Deutsche Bahn Train Hits 405 km/h Without Falling to Bits](https://soylentnews.org/article.pl?sid=25/07/02/1153235&amp;from=rss) - A new milestone for high-speed rail transportation achieved in Germany.

* [Arm-Based Servers to Grow 70% This Year](https://soylentnews.org/article.pl?sid=25/07/02/1148257&amp;from=rss) - ARM architecture continues to disrupt traditional server markets with remarkable growth.

## Critical Social and Cultural Movements

* [Nearly 1,000 Britons Will Keep Four-Day Work Week After Trial](https://news.slashdot.org/story/25/07/03/2018215/nearly-1000-britons-will-keep-four-day-work-week-after-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Successful trial in the UK solidifies the move to a reduced work week for employees.

* [Stop Killing Games' Consumer Movement Hits Major Milestones](https://games.slashdot.org/story/25/07/03/2022217/stop-killing-games-consumer-movement-hits-major-milestones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Grassroots movement gains traction in preserving gaming communities and content.

* [Stalking the Statistically Improbable Restaurant with Data](https://ethanzuckerman.com/2025/07/03/stalking-the-statistically-improbable-restaurant-with-data/) - A deep dive into the social and culinary implications of big data.

* [Michael Madsen has died](https://www.nytimes.com/2025/07/03/movies/michael-madsen-dead.html) - Hollywood mourns the loss of an acclaimed actor known for iconic roles.

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

* [2025-07-04, 02:10:00](https://news.slashdot.org/story/25/07/03/2349257/wells-fargo-scandal-pushed-customers-toward-fintech-says-uc-davis-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wells Fargo Scandal Pushed Customers Toward Fintech, Says UC Davis Study](https://news.slashdot.org/story/25/07/03/2349257/wells-fargo-scandal-pushed-customers-toward-fintech-says-uc-davis-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 02:04:55](https://news.ycombinator.com/item?id=44460552) - [My open source project was stolen and relicensed by a YC company](https://twitter.com/soham_btw/status/1940952786491027886)
* [2025-07-04, 01:30:00](https://tech.slashdot.org/story/25/07/03/2341234/norway-reached-969-market-share-for-evs-in-june?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Norway Reached 96.9% Market Share For EVs In June](https://tech.slashdot.org/story/25/07/03/2341234/norway-reached-969-market-share-for-evs-in-june?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 00:50:00](https://news.slashdot.org/story/25/07/03/2335200/ripple-applies-for-us-banking-license?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ripple Applies For US Banking License](https://news.slashdot.org/story/25/07/03/2335200/ripple-applies-for-us-banking-license?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 00:10:00](https://hardware.slashdot.org/story/25/07/03/2034239/samsung-delays-44-billion-texas-chip-fab-because-there-are-no-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Delays $44 Billion Texas Chip Fab Because &apos;There Are No Customers&apos;](https://hardware.slashdot.org/story/25/07/03/2034239/samsung-delays-44-billion-texas-chip-fab-because-there-are-no-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 23:59:49](https://lobste.rs/s/apuviy/tiny_great_languages_mouse) - [Tiny Great Languages: MOUSE](https://zserge.com/posts/langs-mouse/)
* [2025-07-03, 23:58:36](https://lobste.rs/s/cnl1yz/anarchy_database_survey_evaluation) - [Anarchy in the Database: A Survey and Evaluation of Database Management System Extensibility](https://www.vldb.org/pvldb/volumes/18/paper/Anarchy%20in%20the%20Database%3A%20A%20Survey%20and%20Evaluation%20of%20Database%20Management%20System%20Extensibility)
* [2025-07-03, 23:31:03](https://news.ycombinator.com/item?id=44459980) - [CO2 sequestration through accelerated weathering of limestone on ships](https://www.science.org/doi/10.1126/sciadv.adr7250)
* [2025-07-03, 23:30:00](https://slashdot.org/story/25/07/03/2028252/microsoft-copilot-joins-chatgpt-at-the-feet-of-the-mighty-atari-2600-video-chess?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Copilot Joins ChatGPT At the Feet of the Mighty Atari 2600 Video Chess](https://slashdot.org/story/25/07/03/2028252/microsoft-copilot-joins-chatgpt-at-the-feet-of-the-mighty-atari-2600-video-chess?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 23:05:10](https://lobste.rs/s/m8wmha/project_vend_can_claude_run_small_shop_why) - [Project Vend: Can Claude run a small shop? (And why does that matter?)](https://www.anthropic.com/research/project-vend-1)
* [2025-07-03, 22:50:00](https://games.slashdot.org/story/25/07/03/2022217/stop-killing-games-consumer-movement-hits-major-milestones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Stop Killing Games&apos; Consumer Movement Hits Major Milestones](https://games.slashdot.org/story/25/07/03/2022217/stop-killing-games-consumer-movement-hits-major-milestones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 22:17:10](https://news.ycombinator.com/item?id=44459608) - [Michael Madsen has died](https://www.nytimes.com/2025/07/03/movies/michael-madsen-dead.html)
* [2025-07-03, 22:10:00](https://news.slashdot.org/story/25/07/03/2018215/nearly-1000-britons-will-keep-four-day-work-week-after-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nearly 1,000 Britons Will Keep Four-Day Work Week After Trial](https://news.slashdot.org/story/25/07/03/2018215/nearly-1000-britons-will-keep-four-day-work-week-after-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 22:05:56](https://lobste.rs/s/seqz3x/writing_little_gosh) - [writing a little gosh](https://flak.tedunangst.com/post/writing-a-gosh)
* [2025-07-03, 21:43:00](https://soylentnews.org/article.pl?sid=25/07/02/1636207&amp;from=rss) - [Earthquake-Induced Electricity Offers Answer to Mystery of Gold Nugget Formation](https://soylentnews.org/article.pl?sid=25/07/02/1636207&amp;from=rss)
* [2025-07-03, 21:30:00](https://tech.slashdot.org/story/25/07/03/1918222/google-ends-recipe-pilot-that-left-creators-fearing-web-traffic-hit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Ends Recipe Pilot That Left Creators Fearing Web-Traffic Hit](https://tech.slashdot.org/story/25/07/03/1918222/google-ends-recipe-pilot-that-left-creators-fearing-web-traffic-hit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 21:01:06](https://news.ycombinator.com/item?id=44459146) - [Converge (YC S23) well-capitalized New York startup seeks product developers](https://www.runconverge.com/careers)
* [2025-07-03, 20:50:00](https://it.slashdot.org/story/25/07/03/1912216/chatgpt-creates-phishers-paradise-by-recommending-the-wrong-urls-for-major-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Creates Phisher&apos;s Paradise By Recommending the Wrong URLs for Major Companies](https://it.slashdot.org/story/25/07/03/1912216/chatgpt-creates-phishers-paradise-by-recommending-the-wrong-urls-for-major-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 20:28:57](https://news.ycombinator.com/item?id=44458890) - [Wind Knitting Factory](https://www.merelkarhof.nl/work/wind-knitting-factory)
* [2025-07-03, 20:27:01](https://news.ycombinator.com/item?id=44458877) - [High-Fidelity Simultaneous Speech-to-Speech Translation](https://arxiv.org/abs/2502.03382)
* [2025-07-03, 20:23:30](https://lobste.rs/s/yx4f4i/when_ai_codes_what_s_left_for_me) - [When AI Codes, What’s Left for me?](https://corecursive.com/coding-agents/)
* [2025-07-03, 20:10:00](https://science.slashdot.org/story/25/07/03/1859237/researchers-caught-hiding-ai-prompts-in-research-papers-to-get-favorable-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Caught Hiding AI Prompts in Research Papers To Get Favorable Reviews](https://science.slashdot.org/story/25/07/03/1859237/researchers-caught-hiding-ai-prompts-in-research-papers-to-get-favorable-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 20:04:25](https://lobste.rs/s/jh7knb/factor_problem_solving) - [Factor Problem Solving](https://github.com/Bubbler-4/factor-problem-solving)
* [2025-07-03, 19:30:00](https://it.slashdot.org/story/25/07/03/1833218/a-lot-of-product-makers-snub-right-to-repair-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Lot of Product Makers Snub Right To Repair Laws](https://it.slashdot.org/story/25/07/03/1833218/a-lot-of-product-makers-snub-right-to-repair-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 18:49:00](https://news.slashdot.org/story/25/07/03/1849252/house-passes-bill-that-slashes-solar-wind-and-ev-tax-credits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [House Passes Bill That Slashes Solar, Wind and EV Tax Credits](https://news.slashdot.org/story/25/07/03/1849252/house-passes-bill-that-slashes-solar-wind-and-ev-tax-credits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 18:14:00](https://it.slashdot.org/story/25/07/03/1814215/developer-accused-of-defrauding-yc-companies-through-simultaneous-employment-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Developer Accused of Defrauding YC Companies Through Simultaneous Employment Scheme](https://it.slashdot.org/story/25/07/03/1814215/developer-accused-of-defrauding-yc-companies-through-simultaneous-employment-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 17:46:44](https://lobste.rs/s/xdfydi/taming_agentic_engineering_prompts_are) - [Taming agentic engineering - Prompts are code, .json/.md files are state](https://mariozechner.at/posts/2025-06-02-prompts-are-code/)
* [2025-07-03, 17:36:13](https://news.ycombinator.com/item?id=44457390) - [Opening up ‘Zero-Knowledge Proof’ technology](https://blog.google/technology/safety-security/opening-up-zero-knowledge-proof-technology-to-promote-privacy-in-age-assurance/)
* [2025-07-03, 17:30:00](https://science.slashdot.org/story/25/07/03/171214/scientists-warn-us-will-lose-a-generation-of-talent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Warn US Will Lose a Generation of Talent](https://science.slashdot.org/story/25/07/03/171214/scientists-warn-us-will-lose-a-generation-of-talent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 17:15:56](https://news.ycombinator.com/item?id=44457215) - [Stalking the Statistically Improbable Restaurant with Data](https://ethanzuckerman.com/2025/07/03/stalking-the-statistically-improbable-restaurant-with-data/)
* [2025-07-03, 17:11:33](https://lobste.rs/s/yncgug/introducing_tmux_rs) - [Introducing tmux-rs](https://richardscollin.github.io/tmux-rs/)
* [2025-07-03, 16:56:00](https://soylentnews.org/article.pl?sid=25/07/02/1214228&amp;from=rss) - [Why the Sun is So Good at Evaporating Water](https://soylentnews.org/article.pl?sid=25/07/02/1214228&amp;from=rss)
* [2025-07-03, 16:50:00](https://tech.slashdot.org/story/25/07/03/1635251/citi-spends-9-billion-on-tech-overhaul-after-series-of-costly-errors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Citi Spends $9 Billion on Tech Overhaul After Series of Costly Errors](https://tech.slashdot.org/story/25/07/03/1635251/citi-spends-9-billion-on-tech-overhaul-after-series-of-costly-errors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 16:44:18](https://news.ycombinator.com/item?id=44456904) - [Launch HN: K-Scale Labs (YC W24) – Open-Source Humanoid Robots](https://news.ycombinator.com/item?id=44456904)
* [2025-07-03, 16:41:47](https://lobste.rs/s/fbwzai/portability_tar_features) - [Portability of tar features](https://mgorny.pl/articles/portability-of-tar-features.html)
* [2025-07-03, 16:38:02](https://news.ycombinator.com/item?id=44456827) - [Postcard is now open source](https://www.contraption.co/postcard-open-source/)
* [2025-07-03, 16:34:51](https://news.ycombinator.com/item?id=44456779) - [AV1@Scale: Film Grain Synthesis, The Awakening](https://netflixtechblog.com/av1-scale-film-grain-synthesis-the-awakening-ee09cfdff40b)
* [2025-07-03, 15:58:32](https://news.ycombinator.com/item?id=44456379) - [Encoding Jake Gyllenhaal into one million checkboxes (2024)](https://ednamode.xyz/blogs/2.html)
* [2025-07-03, 15:35:34](https://news.ycombinator.com/item?id=44456135) - [Poor Man&apos;s Back End-as-a-Service (BaaS), Similar to Firebase/Supabase/Pocketbase](https://github.com/zserge/pennybase)
* [2025-07-03, 15:25:30](https://news.ycombinator.com/item?id=44456027) - [Parallelizing SHA256 Calculation on FPGA](https://www.controlpaths.com/2025/06/29/parallelizing_sha256-calculation-fpga/)
* [2025-07-03, 15:19:20](https://news.ycombinator.com/item?id=44455950) - [AI for Scientific Search](https://arxiv.org/abs/2507.01903)
* [2025-07-03, 15:18:01](https://news.ycombinator.com/item?id=44455933) - [Flounder Mode – Kevin Kelly on a different way to do great work](https://joincolossus.com/article/flounder-mode/)
* [2025-07-03, 15:03:14](https://news.ycombinator.com/item?id=44455787) - [Introducing tmux-rs](https://richardscollin.github.io/tmux-rs/)
* [2025-07-03, 14:56:29](https://lobste.rs/s/vz1z3u/taking_over_60k_spyware_user_accounts) - [Taking over 60k spyware user accounts with SQL injection](https://ericdaigle.ca/posts/taking-over-60k-spyware-user-accounts/)
* [2025-07-03, 14:16:06](https://lobste.rs/s/8we4dn/lucky_13_lobsters) - [Lucky 13 Lobsters](https://lobste.rs/s/8we4dn/lucky_13_lobsters)
* [2025-07-03, 14:05:05](https://news.ycombinator.com/item?id=44455222) - [Peasant Railgun](https://knightsdigest.com/what-exactly-is-the-peasant-railgun-in-dd-5e/)
* [2025-07-03, 13:44:55](https://news.ycombinator.com/item?id=44455022) - [Where is my von Braun wheel?](https://angadh.com/wherevonbraunwheel)
* [2025-07-03, 13:07:52](https://lobste.rs/s/msjy28/10_features_d_i_love) - [10 features of D that I love](https://bradley.chatha.dev/blog/dlang-propaganda/features-of-d-that-i-love/)
* [2025-07-03, 12:46:13](https://lobste.rs/s/irjbzn/most_mysterious_bug_i_solved_at_work) - [The most mysterious bug I solved at work](https://cadence.moe/blog/2025-07-02-the-most-mysterious-bug-i-solved-at-work)
* [2025-07-03, 12:22:38](https://lobste.rs/s/zslatp/goharddrive_leaked_personal_data_for) - [goHardDrive Leaked Personal Data for Thousands of Customers](https://mtlynch.io/goharddrive-leak/)
* [2025-07-03, 12:11:00](https://soylentnews.org/article.pl?sid=25/07/02/1153235&amp;from=rss) - [Deutsche Bahn Train Hits 405 km/h Without Falling to Bits](https://soylentnews.org/article.pl?sid=25/07/02/1153235&amp;from=rss)
* [2025-07-03, 11:38:22](https://lobste.rs/s/koetct/porting_openbsd_risc_v_isa_2020) - [Porting OpenBSD to RISC-V ISA (2020)](https://www.openbsd.org/papers/Porting_OpenBSD_to_RISCV_FinalReport.pdf)
* [2025-07-03, 09:05:41](https://lobste.rs/s/wiu8md/writing_code_was_never_bottleneck) - [Writing Code Was Never The Bottleneck](https://ordep.dev/posts/writing-code-was-never-the-bottleneck)
* [2025-07-03, 08:47:38](https://lobste.rs/s/rpb1g7/rfc_9799_acme_extensions_for_onion) - [RFC 9799: ACME Extensions for \&quot;.onion\&quot;](https://datatracker.ietf.org/doc/rfc9799/)
* [2025-07-03, 08:16:00](https://soylentnews.org/article.pl?sid=25/07/02/1148257&amp;from=rss) - [Arm-Based Servers to Grow 70% This Year](https://soylentnews.org/article.pl?sid=25/07/02/1148257&amp;from=rss)
* [2025-07-03, 07:59:55](https://lobste.rs/s/rxdnnq/introducing_first_alpha_turso_next) - [Introducing the first alpha of Turso: The next evolution of SQLite](https://turso.tech/blog/turso-the-next-evolution-of-sqlite?ref=console.dev)
* [2025-07-03, 03:33:00](https://soylentnews.org/article.pl?sid=25/07/02/1144216&amp;from=rss) - [Bruce Schneier on How Cybersecurity Fears Affect Confidence in Voting Systems](https://soylentnews.org/article.pl?sid=25/07/02/1144216&amp;from=rss)
* [2025-07-03, 03:19:24](https://news.ycombinator.com/item?id=44451329) - [Astronomers discover 3I/ATLAS – Third interstellar object to visit Solar System](https://www.abc.net.au/news/science/2025-07-03/3i-atlas-a11pl3z-interstellar-object-in-our-solar-system/105489180)
* [2025-07-03, 01:40:11](https://lobste.rs/s/pdl32t/copyleft_next) - [copyleft-next](https://next.copyleft.org/)
* [2025-07-02, 22:50:00](https://soylentnews.org/article.pl?sid=25/07/02/1141208&amp;from=rss) - [Fedora: Proposal for the Removal of i686 Withdrawn](https://soylentnews.org/article.pl?sid=25/07/02/1141208&amp;from=rss)
* [2025-07-02, 20:53:56](https://lobste.rs/s/yo1kk1/jujutsu_v0_31_0_released) - [jujutsu v0.31.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.31.0)
* [2025-07-02, 19:59:23](https://lobste.rs/s/twznlx/why_i_m_dialing_back_my_llm_usage) - [Why I&apos;m Dialing Back My LLM Usage](https://zed.dev/blog/dialing-back-my-llm-usage-with-alberto-fortin)
* [2025-07-02, 18:12:32](https://lobste.rs/s/7abrl9/500x_faster_four_different_ways_speed_up) - [500× faster: Four different ways to speed up your code](https://pythonspeed.com/articles/different-ways-speed/)
* [2025-07-02, 18:05:00](https://soylentnews.org/article.pl?sid=25/07/02/0734207&amp;from=rss) - [Are Brother&apos;s Insecure Printers Illegal in the UK?](https://soylentnews.org/article.pl?sid=25/07/02/0734207&amp;from=rss)
* [2025-07-02, 17:20:38](https://lobste.rs/s/tht66b/higgs_bugson_linux_kernel) - [A Higgs-bugson in the Linux Kernel](https://blog.janestreet.com/a-higgs-bugson-in-the-linux-kernel/)
* [2025-07-02, 16:56:01](https://lobste.rs/s/tnvcca/this_overly_long_variable_name_could_have) - [This Overly Long Variable Name Could Have Been a Comment](https://jonathan-frere.com/posts/names-vs-comments/)
* [2025-07-02, 13:17:00](https://soylentnews.org/article.pl?sid=25/07/02/0110229&amp;from=rss) - [Mexican Drug Cartel Hacker Spied on FBI Official&apos;s Phone to Track and Kill Informants](https://soylentnews.org/article.pl?sid=25/07/02/0110229&amp;from=rss)
* [2025-07-02, 12:00:53](https://lobste.rs/s/jovlqw/yet_another_zip_trick) - [Yet another ZIP trick](https://hackarcana.com/article/yet-another-zip-trick)
* [2025-07-02, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/01/0415211&amp;from=rss) - [Genetic Study Reveals Humanity&apos;s Longest Migration](https://soylentnews.org/article.pl?sid=25/07/01/0415211&amp;from=rss)
* [2025-07-02, 04:59:00](https://soylentnews.org/meta/article.pl?sid=25/07/02/0418216&amp;from=rss) - [Stripe Donations Back Online](https://soylentnews.org/meta/article.pl?sid=25/07/02/0418216&amp;from=rss)
* [2025-07-02, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/01/028205&amp;from=rss) - [New Theory Proposes Time Has Three Dimensions, With Space as a Secondary Effect](https://soylentnews.org/article.pl?sid=25/07/01/028205&amp;from=rss)
* [2025-07-01, 22:53:00](https://soylentnews.org/article.pl?sid=25/06/30/1817206&amp;from=rss) - [Ex-Nato Hacker: In Cyber, There’s No Such Thing As A Ceasefire](https://soylentnews.org/article.pl?sid=25/06/30/1817206&amp;from=rss)
* [2025-07-01, 18:12:00](https://soylentnews.org/article.pl?sid=25/06/30/1738246&amp;from=rss) - [As AI Kills Search Traffic, Google Launches Offerwall to Boost Publisher Revenue](https://soylentnews.org/article.pl?sid=25/06/30/1738246&amp;from=rss)
* [2025-07-01, 16:05:36](https://news.ycombinator.com/item?id=44435309) - [Copper is Faster than Fiber (2017) [pdf]](https://www.arista.com/assets/data/pdf/Copper-Faster-Than-Fiber-Brief.pdf)
* [2025-07-01, 14:00:33](https://news.ycombinator.com/item?id=44433996) - [Fei-Fei Li: Spatial intelligence is the next frontier in AI [video]](https://www.youtube.com/watch?v=_PioN-CpOP0)
* [2025-07-01, 13:28:00](https://soylentnews.org/article.pl?sid=25/06/30/1737227&amp;from=rss) - [Facebook is Starting to Feed its AI With Private, Unpublished Photos](https://soylentnews.org/article.pl?sid=25/06/30/1737227&amp;from=rss)
* [2025-07-01, 10:42:46](https://news.ycombinator.com/item?id=44432506) - [Caching is an abstraction, not an optimization](https://buttondown.com/jaffray/archive/caching-is-an-abstraction-not-an-optimization/)
* [2025-07-01, 10:12:50](https://news.ycombinator.com/item?id=44432351) - [An Algorithm for a Better Bookshelf](https://cacm.acm.org/news/an-algorithm-for-a-better-bookshelf/)
* [2025-07-01, 09:16:43](https://news.ycombinator.com/item?id=44432055) - [You are what you launch: how software became a lifestyle brand](https://omeru.bearblog.dev/lifestyle/)
* [2025-07-01, 08:42:00](https://soylentnews.org/article.pl?sid=25/06/30/1153228&amp;from=rss) - [Bluetooth Flaws Could Let Hackers Spy Through Your Microphone](https://soylentnews.org/article.pl?sid=25/06/30/1153228&amp;from=rss)
* [2025-07-01, 08:32:19](https://news.ycombinator.com/item?id=44431828) - [Ubuntu 25.10 Raises RISC-V Profile Requirements](https://www.omgubuntu.co.uk/2025/06/ubuntu-riscv-rva23-support)
* [2025-07-01, 03:57:00](https://soylentnews.org/article.pl?sid=25/06/30/1149231&amp;from=rss) - [CISA, NSA Repeat Call for Memory Safe Programming Languages](https://soylentnews.org/article.pl?sid=25/06/30/1149231&amp;from=rss)
* [2025-07-01, 02:48:16](https://news.ycombinator.com/item?id=44430117) - [About AI Evals](https://hamel.dev/blog/posts/evals-faq/)
* [2025-06-30, 23:13:00](https://soylentnews.org/article.pl?sid=25/06/30/0625204&amp;from=rss) - [Group of Investors Represented by Youtuber Perifractic Buys Commodore](https://soylentnews.org/article.pl?sid=25/06/30/0625204&amp;from=rss)
* [2025-06-30, 18:30:00](https://soylentnews.org/article.pl?sid=25/06/30/0230251&amp;from=rss) - [Scientists Unlock the Light-Bending Secrets of Squid Skin](https://soylentnews.org/article.pl?sid=25/06/30/0230251&amp;from=rss)
* [2025-06-30, 18:02:06](https://news.ycombinator.com/item?id=44426153) - [Alice&apos;s Adventures in a Differentiable Wonderland](https://arxiv.org/abs/2404.17625)
* [2025-06-30, 13:45:00](https://soylentnews.org/article.pl?sid=25/06/30/020252&amp;from=rss) - [You Sound Like ChatGPT](https://soylentnews.org/article.pl?sid=25/06/30/020252&amp;from=rss)
* [2025-06-30, 10:15:52](https://news.ycombinator.com/item?id=44421490) - [Manipulating trapped air bubbles in ice for message storage in cold regions](https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864(25)00221-8)
* [2025-06-30, 09:03:00](https://soylentnews.org/article.pl?sid=25/06/29/1626204&amp;from=rss) - [Why Are the Physical Constants of the Universe So Perfect for Life?](https://soylentnews.org/article.pl?sid=25/06/29/1626204&amp;from=rss)
* [2025-06-30, 08:10:27](https://news.ycombinator.com/item?id=44420711) - [Show HN: I rewrote my notepad calculator as a local-first app with CRDT syncing](https://numpad.io)
* [2025-06-30, 04:18:00](https://soylentnews.org/article.pl?sid=25/06/29/1610258&amp;from=rss) - [At Last, We Are Discovering What Quantum Computers Will be Useful for](https://soylentnews.org/article.pl?sid=25/06/29/1610258&amp;from=rss)
