# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software

* [Why did Windows 7, for a few months, log on slower if you have a solid color background?](https://devblogs.microsoft.com/oldnewthing/20250428-00/?p=111121) - An exploration into the unexpected technical quirks that slowed login times on Windows 7.

* [LibreLingo – FOSS Alternative to Duolingo](https://librelingo.app) - Examine this free and open-source alternative to popular language-learning platforms.

* [A single line of code cost $8000](https://pietrasiak.com/one-line-of-code-that-did-cost-dollar8000) - A fascinating case study on how a small coding error led to significant financial repercussions.

* [Migrating away from Rust](https://deadmoney.gg/news/articles/migrating-away-from-rust) - An article discussing reasons for and challenges in moving away from using Rust in development.

* [Qwen3: Think Deeper, Act Faster](https://qwenlm.github.io/blog/qwen3/) - Insights into Qwen3's innovative approaches toward strategy and execution.

* [OpenAI Upgrades ChatGPT Search With Shopping Features](https://tech.slashdot.org/story/25/04/28/1945203/openai-upgrades-chatgpt-search-with-shopping-features?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Exploring the latest enhancements to ChatGPT's search capabilities, including integration with shopping features.

## Science and Health

* [Drinking champagne could reduce risk of sudden cardiac arrest, study suggests](https://www.theguardian.com/society/2025/apr/29/drink-champagne-reduce-risk-sudden-cardiac-arrest-study-suggests) - A study that links champagne consumption to potentially improved heart health.

* [Differential Equations and Urine](https://soylentnews.org/article.pl?sid=25/04/28/0428200&from=rss) - Examining an offbeat application of differential equations in medical scenarios.

* [$8 Billion of US Climate Tech Projects Have Been Canceled So Far in 2025](https://soylentnews.org/article.pl?sid=25/04/28/044252&from=rss) - A review of significant setbacks to climate initiatives in the US.

* [Multi-Microbiome-Mashup](https://soylentnews.org/article.pl?sid=25/04/26/1734201&from=rss) - A new perspective on how microbiome interactions affect human health.

* [Out-of-Balance Bacteria is Linked to Multiple Sclerosis − the Ratio Can Predict Severity of Disease](https://soylentnews.org/article.pl?sid=25/04/24/0626241&from=rss) - Innovative research into the relationship between gut bacteria imbalances and multiple sclerosis.

## Privacy and Ethics

* [Car Subscription Features Raise Your Risk of Government Surveillance, Police Records Show](https://yro.slashdot.org/story/25/04/29/0058230/car-subscription-features-raise-your-risk-of-government-surveillance-police-records-show?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Investigations into how modern vehicle tech may increase surveillance risks.

* [Neurotech Companies Are Selling Brain Data, Senators Warn](https://slashdot.org/story/25/04/28/197227/neurotech-companies-are-selling-brain-data-senators-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A thought-provoking look into ethical concerns regarding brain data commercialization.

* [23andMe Requiring Potential Bidders To Affirm They Will Uphold Data Privacy](https://yro.slashdot.org/story/25/04/28/193247/23andme-requiring-potential-bidders-to-affirm-they-will-uphold-data-privacy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A report on data privacy and ethical commitments in genetic research services.

* [Unauthorized AI Bot Experiment Infiltrated Reddit To Test Persuasion Capabilities](https://slashdot.org/story/25/04/28/1642223/unauthorized-ai-bot-experiment-infiltrated-reddit-to-test-persuasion-capabilities?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discussing the implications of unapproved AI experiments on social platforms.

## History and Culture

* [Ice Age Pyrotechnology: This is How Humans Made Fire Tens of Thousands of Years Ago](https://soylentnews.org/article.pl?sid=25/04/28/0420232&from=rss) - Insights into humanity's early advancements in pyrotechnology.

* [Legal art forgery, for the sake of movies (2014)](https://www.vanityfair.com/hollywood/2014/04/art-in-movies) - A look into how forgery plays a role in cinematic art production.

* [The History of Timekeeping](https://soylentnews.org/article.pl?sid=25/04/25/0329237&from=rss) - A comprehensive exploration of mankind's methods of tracking time through history.

* [NASA’s Lucy Spacecraft Images Asteroid Donaldjohanson](https://soylentnews.org/article.pl?sid=25/04/26/1332253&from=rss) - A scientific update highlighting NASA's milestones in space exploration.

* [First Confirmed Footage of a Colossal Squid](https://soylentnews.org/article.pl?sid=25/04/25/0336217&from=rss) - Rare insights into deep-sea life with newly captured footage of a colossal squid.

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

* [2025-04-29, 06:46:36](https://news.ycombinator.com/item?id=43829356) - [Spain is about to face the challenge of a \&quot;black start\&quot;](https://arstechnica.com/science/2025/04/why-restarting-a-power-grid-is-so-hard/)
* [2025-04-29, 06:35:03](https://lobste.rs/s/nyc9ob/migrating_away_from_rust) - [Migrating away from Rust](https://deadmoney.gg/news/articles/migrating-away-from-rust)
* [2025-04-29, 06:12:56](https://news.ycombinator.com/item?id=43829167) - [The Homebrew Channel repository is archived (Apr 28, 2025)](https://github.com/fail0verflow/hbc)
* [2025-04-29, 05:52:16](https://lobste.rs/s/9qgzmq/why_did_windows_7_for_few_months_log_on) - [Why did Windows 7, for a few months, log on slower if you have a solid color background?](https://devblogs.microsoft.com/oldnewthing/20250428-00/?p=111121)
* [2025-04-29, 05:45:53](https://news.ycombinator.com/item?id=43829035) - [LibreLingo – FOSS Alternative to Duolingo](https://librelingo.app)
* [2025-04-29, 05:40:35](https://news.ycombinator.com/item?id=43829006) - [A single line of code cost $8000](https://pietrasiak.com/one-line-of-code-that-did-cost-dollar8000)
* [2025-04-29, 05:30:00](https://yro.slashdot.org/story/25/04/29/0058230/car-subscription-features-raise-your-risk-of-government-surveillance-police-records-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Car Subscription Features Raise Your Risk of Government Surveillance, Police Records Show](https://yro.slashdot.org/story/25/04/29/0058230/car-subscription-features-raise-your-risk-of-government-surveillance-police-records-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 05:25:47](https://news.ycombinator.com/item?id=43828915) - [Oracle engineers caused five days software outage at U.S. hospitals](https://www.cnbc.com/2025/04/28/oracle-engineers-caused-days-long-software-outage-at-us-hospitals.html)
* [2025-04-29, 05:15:00](https://soylentnews.org/article.pl?sid=25/04/28/0428200&amp;from=rss) - [Differential Equations and Urine](https://soylentnews.org/article.pl?sid=25/04/28/0428200&amp;from=rss)
* [2025-04-29, 05:13:32](https://news.ycombinator.com/item?id=43828860) - [Drinking champagne could reduce risk of sudden cardiac arrest, study suggests](https://www.theguardian.com/society/2025/apr/29/drink-champagne-reduce-risk-sudden-cardiac-arrest-study-suggests)
* [2025-04-29, 05:02:11](https://lobste.rs/s/wtzly9/good_regulator_theorem) - [Good regulator theorem](https://en.wikipedia.org/wiki/Good_regulator_theorem)
* [2025-04-29, 04:33:03](https://news.ycombinator.com/item?id=43828713) - [Knowledge-based society, my ass](https://mihaiolteanu.me/knowledge-based-society-my-ass)
* [2025-04-29, 03:57:40](https://news.ycombinator.com/item?id=43828568) - [Congress passes Take It Down act despite major flaws](https://www.eff.org/deeplinks/2025/04/congress-passes-take-it-down-act-despite-major-flaws)
* [2025-04-29, 03:00:00](https://developers.slashdot.org/story/25/04/29/0259256/oracle-engineers-caused-days-long-software-outage-at-us-hospitals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oracle Engineers Caused Days-Long Software Outage at US Hospitals](https://developers.slashdot.org/story/25/04/29/0259256/oracle-engineers-caused-days-long-software-outage-at-us-hospitals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 02:09:28](https://news.ycombinator.com/item?id=43828096) - [Greek Particles (1990)](https://specgram.com/Babel.I.2/07.sriyatha.greek.html)
* [2025-04-29, 01:49:43](https://lobste.rs/s/zoxm37/what_heck_is_aead_again) - [What the heck is AEAD again?](https://ochagavia.nl/blog/what-the-heck-is-aead-again/)
* [2025-04-29, 01:33:47](https://lobste.rs/s/xys6af/qwen3_think_deeper_act_faster) - [Qwen3: Think Deeper, Act Faster](https://qwenlm.github.io/blog/qwen3/)
* [2025-04-29, 01:00:00](https://news.slashdot.org/story/25/04/29/0049233/duolingo-will-replace-contract-workers-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Duolingo Will Replace Contract Workers With AI](https://news.slashdot.org/story/25/04/29/0049233/duolingo-will-replace-contract-workers-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 00:28:00](https://soylentnews.org/article.pl?sid=25/04/28/0420232&amp;from=rss) - [Ice Age Pyrotechnology: This is How Humans Made Fire Tens of Thousands of Years Ago](https://soylentnews.org/article.pl?sid=25/04/28/0420232&amp;from=rss)
* [2025-04-28, 23:40:00](https://it.slashdot.org/story/25/04/28/1945215/digital-photo-frame-company-nixplay-slashes-free-cloud-storage-from-10gb-to-500mb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Digital Photo Frame Company Nixplay Slashes Free Cloud Storage From 10GB To 500MB](https://it.slashdot.org/story/25/04/28/1945215/digital-photo-frame-company-nixplay-slashes-free-cloud-storage-from-10gb-to-500mb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 23:27:11](https://news.ycombinator.com/item?id=43827214) - [Why did Windows 7 log on slower for months if you had a solid color background?](https://devblogs.microsoft.com/oldnewthing/20250428-00/?p=111121)
* [2025-04-28, 23:12:28](https://news.ycombinator.com/item?id=43827108) - [The 12-bit rainbow palette](https://iamkate.com/data/12-bit-rainbow/)
* [2025-04-28, 23:00:00](https://tech.slashdot.org/story/25/04/28/1945203/openai-upgrades-chatgpt-search-with-shopping-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Upgrades ChatGPT Search With Shopping Features](https://tech.slashdot.org/story/25/04/28/1945203/openai-upgrades-chatgpt-search-with-shopping-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 22:35:21](https://lobste.rs/s/x04hyl/packed_data_support_haskell) - [Packed Data support in Haskell](https://arthi-chaud.github.io/posts/packed/)
* [2025-04-28, 22:20:00](https://hardware.slashdot.org/story/25/04/28/1923224/soft-vine-like-robot-helps-rescuers-find-survivors-in-disaster-zones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Soft Vine-Like Robot Helps Rescuers Find Survivors In Disaster Zones](https://hardware.slashdot.org/story/25/04/28/1923224/soft-vine-like-robot-helps-rescuers-find-survivors-in-disaster-zones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 21:58:52](https://news.ycombinator.com/item?id=43826584) - [The One-Person Framework in Practice](https://link.mail.beehiiv.com/ss/c/u001.5SRwDQ9qxPQW8vmD5Do73b3R4eTCi2vXqPyztEk6wMFC9_fqEAcDVx6xEJ96T4BSMXrPS7z5exEBSTF4pF48z8SqJkJnkAwMUW9LtYdd8lWmvkDinT92nsk5HmXOHdWgLsysm9FMGrqmu7dnG57cXpga8ZOe8X0IV8pyeC3AswdRMaitfT307y7naP-_6W5CiolKhXCKrEndMGCW2PftFUu9ieYOxpVJ_fhu82gAh-4/4g1/wA_MG-I5SVCyR3KY66oEaQ/h30/h001.kLDFZMgisudi21zmTPbd_O8U7X98d4UxYqZjQTb_D7o)
* [2025-04-28, 21:40:00](https://yro.slashdot.org/story/25/04/28/1914200/milwaukee-police-consider-trading-millions-of-mugshots-for-free-facial-recognition-access?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Milwaukee Police Consider Trading Millions of Mugshots For Free Facial Recognition Access](https://yro.slashdot.org/story/25/04/28/1914200/milwaukee-police-consider-trading-millions-of-mugshots-for-free-facial-recognition-access?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 21:01:59](https://news.ycombinator.com/item?id=43826065) - [Legal art forgery, for the sake of movies (2014)](https://www.vanityfair.com/hollywood/2014/04/art-in-movies)
* [2025-04-28, 21:00:00](https://slashdot.org/story/25/04/28/198238/monero-likely-pumped-50-due-to-suspected-330-million-bitcoin-theft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Monero Likely Pumped 50% Due To Suspected $330 Million Bitcoin Theft](https://slashdot.org/story/25/04/28/198238/monero-likely-pumped-50-due-to-suspected-330-million-bitcoin-theft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 20:57:49](https://news.ycombinator.com/item?id=43826021) - [Packed Data Support in Haskell](https://arthi-chaud.github.io/posts/packed/)
* [2025-04-28, 20:51:07](https://lobste.rs/s/lllomq/i486sx_soft_fpu_bring_back_fpu_emulation) - [i486SX_soft_FPU: Bring back FPU emulation for i486SX CPU on NetBSD](https://github.com/mezantrop/i486SX_soft_FPU)
* [2025-04-28, 20:49:24](https://news.ycombinator.com/item?id=43825958) - [Requirements change until they don&apos;t](https://buttondown.com/hillelwayne/archive/requirements-change-until-they-dont/)
* [2025-04-28, 20:44:25](https://news.ycombinator.com/item?id=43825900) - [Qwen3: Think deeper, act faster](https://qwenlm.github.io/blog/qwen3/)
* [2025-04-28, 20:38:45](https://lobste.rs/s/tsr2cw/design_software_engineering_course) - [The design of software engineering course projects](https://austinhenley.com/blog/groupprojects.html)
* [2025-04-28, 20:37:32](https://lobste.rs/s/szvnbf/giving_software_away_for_free) - [Giving software away for free](https://simonwillison.net/2025/Apr/28/give-it-away-for-free/)
* [2025-04-28, 20:20:00](https://slashdot.org/story/25/04/28/197227/neurotech-companies-are-selling-brain-data-senators-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Neurotech Companies Are Selling Brain Data, Senators Warn](https://slashdot.org/story/25/04/28/197227/neurotech-companies-are-selling-brain-data-senators-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 20:05:47](https://lobste.rs/s/b9pw4r/no_engine_gamedev_using_odin_raylib) - [No-engine gamedev using Odin + Raylib](https://zylinski.se/posts/no-engine-gamedev-using-odin-and-raylib/)
* [2025-04-28, 20:03:08](https://lobste.rs/s/b1sweu/elo_rating_system_mlb) - [The Elo Rating System in the MLB](https://thelinell.com/posts/2025/elo_in_the_mlb/)
* [2025-04-28, 19:52:02](https://news.ycombinator.com/item?id=43825336) - [One Million Chessboards](https://onemillionchessboards.com/#199,276)
* [2025-04-28, 19:41:00](https://soylentnews.org/article.pl?sid=25/04/28/044252&amp;from=rss) - [$8 Billion of US Climate Tech Projects Have Been Canceled So Far in 2025](https://soylentnews.org/article.pl?sid=25/04/28/044252&amp;from=rss)
* [2025-04-28, 19:40:00](https://yro.slashdot.org/story/25/04/28/193247/23andme-requiring-potential-bidders-to-affirm-they-will-uphold-data-privacy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [23andMe Requiring Potential Bidders To Affirm They Will Uphold Data Privacy](https://yro.slashdot.org/story/25/04/28/193247/23andme-requiring-potential-bidders-to-affirm-they-will-uphold-data-privacy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 19:00:00](https://news.slashdot.org/story/25/04/28/1857213/kickstarter-introduces-tariff-manager-tool-to-add-charges-to-already-fully-funded-projects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kickstarter Introduces &apos;Tariff Manager Tool&apos; To Add Charges To Already Fully Funded Projects](https://news.slashdot.org/story/25/04/28/1857213/kickstarter-introduces-tariff-manager-tool-to-add-charges-to-already-fully-funded-projects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 18:47:36](https://news.ycombinator.com/item?id=43824640) - [Migrating away from Rust](https://deadmoney.gg/news/articles/migrating-away-from-rust)
* [2025-04-28, 18:42:18](https://news.ycombinator.com/item?id=43824583) - [Show HN: Heart Rate Zones Plus – The first iOS app I developed](https://apps.apple.com/us/app/heart-rate-zones-plus/id6744743232)
* [2025-04-28, 18:38:46](https://news.ycombinator.com/item?id=43824544) - [Reports of the death of California High-Speed Rail have been greatly exaggerated](https://asteriskmag.com/issues/10/reports-of-the-death-of-california-high-speed-rail-have-been-greatly-exaggerated)
* [2025-04-28, 17:58:55](https://lobste.rs/s/msdbji/generating_mazes_with_inductive_graphs) - [Generating Mazes with Inductive Graphs (2017)](https://jelv.is/blog/Generating-Mazes-with-Inductive-Graphs/)
* [2025-04-28, 17:27:00](https://slashdot.org/story/25/04/28/1727240/chinas-huawei-develops-new-ai-chip-seeking-to-match-nvidia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Huawei Develops New AI Chip, Seeking To Match Nvidia](https://slashdot.org/story/25/04/28/1727240/chinas-huawei-develops-new-ai-chip-seeking-to-match-nvidia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 17:06:49](https://lobste.rs/s/erys14/dependently_typed_assembly_language) - [A Dependently Typed Assembly Language](https://www.cs.cmu.edu/~rwh/papers/dtal/OGI-CSE-99-008.pdf)
* [2025-04-28, 17:01:20](https://news.ycombinator.com/item?id=43823580) - [Activeloop (YC S18) is hiring a VP of Engineering in Mountain View (on-site)](https://careers.activeloop.ai/)
* [2025-04-28, 16:43:00](https://slashdot.org/story/25/04/28/1642223/unauthorized-ai-bot-experiment-infiltrated-reddit-to-test-persuasion-capabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Unauthorized AI Bot Experiment Infiltrated Reddit To Test Persuasion Capabilities](https://slashdot.org/story/25/04/28/1642223/unauthorized-ai-bot-experiment-infiltrated-reddit-to-test-persuasion-capabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 16:33:48](https://lobste.rs/s/9ne34p/one_million_chessboards) - [One million chessboards](https://onemillionchessboards.com/)
* [2025-04-28, 16:14:31](https://news.ycombinator.com/item?id=43823096) - [Show HN: Sim Studio – Open-Source Agent Workflow GUI](https://github.com/simstudioai/sim)
* [2025-04-28, 16:10:21](https://news.ycombinator.com/item?id=43823044) - [Show HN: A pure WebGL image editor with filters, crop and perspective correction](https://github.com/xdadda/mini-photo-editor)
* [2025-04-28, 16:04:00](https://slashdot.org/story/25/04/28/164253/dyson-founder-says-he-has-lived-a-life-of-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dyson Founder Says He Has Lived a &apos;Life of Failure&apos;](https://slashdot.org/story/25/04/28/164253/dyson-founder-says-he-has-lived-a-life-of-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 15:36:25](https://news.ycombinator.com/item?id=43822659) - [Show HN: Web-eval-agent – Let the coding agent debug itself](https://github.com/Operative-Sh/web-eval-agent)
* [2025-04-28, 15:36:00](https://lobste.rs/s/7ousya/audit_rust_p256_crate) - [Audit of the Rust p256 Crate](https://reports.zksecurity.xyz/reports/near-p256/)
* [2025-04-28, 15:23:00](https://news.slashdot.org/story/25/04/28/1523232/ibm-pledges-150-billion-us-investment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM Pledges $150 Billion US Investment](https://news.slashdot.org/story/25/04/28/1523232/ibm-pledges-150-billion-us-investment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 15:22:28](https://lobste.rs/s/5qynev/anticrawl) - [anticrawl](https://flak.tedunangst.com/post/anticrawl)
* [2025-04-28, 15:11:27](https://lobste.rs/s/uai76x/what_if_we_embraced_simulation_driven) - [What if we embraced simulation-driven development?](https://pierrezemb.fr/posts/simulation-driven-development/)
* [2025-04-28, 15:00:11](https://lobste.rs/s/ahnsrl/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/ahnsrl/what_are_you_doing_this_week)
* [2025-04-28, 14:54:00](https://soylentnews.org/article.pl?sid=25/04/28/0358222&amp;from=rss) - [Everyone Should Stop Working on AI Now](https://soylentnews.org/article.pl?sid=25/04/28/0358222&amp;from=rss)
* [2025-04-28, 14:35:43](https://lobste.rs/s/4eany6/openbsd_7_7) - [OpenBSD 7.7](https://www.openbsd.org/77.html)
* [2025-04-28, 13:50:24](https://lobste.rs/s/qom44w/python_sub_micro_gpio) - [Python sub-micro GPIO](https://www.runpyxl.com/gpio)
* [2025-04-28, 12:37:03](https://lobste.rs/s/eku5qh/computer_architects_can_t_find_average) - [Computer Architects Can&apos;t Find the Average](https://dgsq.net/2025-04-27-averages/)
* [2025-04-28, 11:44:54](https://news.ycombinator.com/item?id=43820228) - [Show HN: I built a hardware processor that runs Python](https://www.runpyxl.com/gpio)
* [2025-04-28, 11:24:41](https://news.ycombinator.com/item?id=43820022) - [Tiny-LLM – a course of serving LLM on Apple Silicon for systems engineers](https://github.com/skyzh/tiny-llm)
* [2025-04-28, 10:50:58](https://news.ycombinator.com/item?id=43819791) - [Widespread power outage in Spain and Portugal](https://www.bbc.com/news/live/c9wpq8xrvd9t)
* [2025-04-28, 10:09:00](https://soylentnews.org/article.pl?sid=25/04/26/1734201&amp;from=rss) - [Multi-Microbiome-Mashup](https://soylentnews.org/article.pl?sid=25/04/26/1734201&amp;from=rss)
* [2025-04-28, 08:42:12](https://lobste.rs/s/vwyvcn/optimizing_go_microservices_for_low) - [Optimizing Go Microservices for Low Latency &amp; High Throughput](http://muratdemirci.com.tr/en/optimizing-go-microservices/)
* [2025-04-28, 07:18:53](https://lobste.rs/s/dstgbs/using_haproxy_protect_me_from_scrapers) - [Using HAProxy to protect me from scrapers](https://dgl.cx/2025/04/using-haproxy-to-stop-scrapers)
* [2025-04-28, 05:23:00](https://soylentnews.org/article.pl?sid=25/04/26/1715246&amp;from=rss) - [Windows 11’s Voice Typing Will Soon Let You Turn Off the ****ing Profanity Filter](https://soylentnews.org/article.pl?sid=25/04/26/1715246&amp;from=rss)
* [2025-04-28, 05:01:10](https://news.ycombinator.com/item?id=43817726) - [Why Momentum Works (2017)](https://distill.pub/2017/momentum/)
* [2025-04-28, 02:20:47](https://lobste.rs/s/ashwpk/boxie_always_offline_audio_player_for_my_3) - [Boxie - an always offline audio player for my 3 year old](https://mariozechner.at/posts/2025-04-20-boxie/)
* [2025-04-28, 00:56:11](https://lobste.rs/s/geord9/watching_o3_guess_photo_s_location_is) - [Watching o3 guess a photo’s location is surreal, dystopian and wildly entertaining](https://simonwillison.net/2025/Apr/26/o3-photo-locations/)
* [2025-04-28, 00:42:00](https://soylentnews.org/article.pl?sid=25/04/26/1713213&amp;from=rss) - [Fedora Considers Dropping GNOME X11 Session From Repositories](https://soylentnews.org/article.pl?sid=25/04/26/1713213&amp;from=rss)
* [2025-04-27, 22:08:21](https://news.ycombinator.com/item?id=43815523) - [Ask HN: What are you working on? (April 2025)](https://news.ycombinator.com/item?id=43815523)
* [2025-04-27, 19:56:00](https://soylentnews.org/article.pl?sid=25/04/26/179216&amp;from=rss) - [9-Mile-Thick Layer of Solid Diamonds May Lurk Beneath Mercury&apos;s Surface, Study Hints](https://soylentnews.org/article.pl?sid=25/04/26/179216&amp;from=rss)
* [2025-04-27, 17:21:00](https://soylentnews.org/politics/article.pl?sid=25/04/26/174238&amp;from=rss) - [XKCD Cartoon Protest](https://soylentnews.org/politics/article.pl?sid=25/04/26/174238&amp;from=rss)
* [2025-04-27, 15:12:00](https://soylentnews.org/article.pl?sid=25/04/26/171205&amp;from=rss) - [The EU is Implementing Energy Labels and Minimum Requirements for Phones and Tablets](https://soylentnews.org/article.pl?sid=25/04/26/171205&amp;from=rss)
* [2025-04-27, 10:30:00](https://soylentnews.org/article.pl?sid=25/04/26/1332253&amp;from=rss) - [NASA’s Lucy Spacecraft Images Asteroid Donaldjohanson](https://soylentnews.org/article.pl?sid=25/04/26/1332253&amp;from=rss)
* [2025-04-27, 07:50:07](https://news.ycombinator.com/item?id=43810211) - [Running Clojure in WASM with GraalVM](https://romanliutikov.com/blog/running-clojure-in-wasm)
* [2025-04-27, 05:43:00](https://soylentnews.org/article.pl?sid=25/04/26/1324227&amp;from=rss) - [Post-Quantum Crypto: McEliece Standardization](https://soylentnews.org/article.pl?sid=25/04/26/1324227&amp;from=rss)
* [2025-04-27, 01:00:00](https://soylentnews.org/article.pl?sid=25/04/26/1322229&amp;from=rss) - [Kennedy Promises Studies Using Private Health Data to Identify Factors That May Cause Autism](https://soylentnews.org/article.pl?sid=25/04/26/1322229&amp;from=rss)
* [2025-04-26, 20:12:00](https://soylentnews.org/article.pl?sid=25/04/25/0336217&amp;from=rss) - [First Confirmed Footage of a Colossal Squid](https://soylentnews.org/article.pl?sid=25/04/25/0336217&amp;from=rss)
* [2025-04-26, 15:28:00](https://soylentnews.org/article.pl?sid=25/04/25/0329237&amp;from=rss) - [The History of Timekeeping](https://soylentnews.org/article.pl?sid=25/04/25/0329237&amp;from=rss)
* [2025-04-26, 10:42:00](https://soylentnews.org/article.pl?sid=25/04/25/0327235&amp;from=rss) - [Drawing a Line From the Gut Microbiome to Inflammation and Depression](https://soylentnews.org/article.pl?sid=25/04/25/0327235&amp;from=rss)
* [2025-04-26, 05:55:00](https://soylentnews.org/article.pl?sid=25/04/25/0319203&amp;from=rss) - [German Team Demonstrates Quantum Communication Over an Existing 254km Fibre Optic Network](https://soylentnews.org/article.pl?sid=25/04/25/0319203&amp;from=rss)
* [2025-04-26, 01:08:00](https://soylentnews.org/article.pl?sid=25/04/25/035210&amp;from=rss) - [Matter Mediates Ultrastrong Coupling Between Light Particles](https://soylentnews.org/article.pl?sid=25/04/25/035210&amp;from=rss)
* [2025-04-25, 20:20:00](https://soylentnews.org/article.pl?sid=25/04/24/0635218&amp;from=rss) - [First SD Express 8.0 Memory Card From Adata Hits 1.6 GB/s Read Speeds](https://soylentnews.org/article.pl?sid=25/04/24/0635218&amp;from=rss)
* [2025-04-25, 15:34:00](https://soylentnews.org/politics/article.pl?sid=25/04/24/0632233&amp;from=rss) - [Harvard Stands Up for the First Amendment](https://soylentnews.org/politics/article.pl?sid=25/04/24/0632233&amp;from=rss)
* [2025-04-25, 10:47:00](https://soylentnews.org/article.pl?sid=25/04/24/0626241&amp;from=rss) - [Out-of-Balance Bacteria is Linked to Multiple Sclerosis − the Ratio Can Predict Severity of Disease](https://soylentnews.org/article.pl?sid=25/04/24/0626241&amp;from=rss)
* [2025-04-25, 06:02:00](https://soylentnews.org/article.pl?sid=25/04/24/0233226&amp;from=rss) - [4chan May be Dead, but its Toxic Legacy Lives on](https://soylentnews.org/article.pl?sid=25/04/24/0233226&amp;from=rss)
* [2025-04-25, 01:13:00](https://soylentnews.org/article.pl?sid=25/04/23/1540254&amp;from=rss) - [Crosswalk Button Voices Altered](https://soylentnews.org/article.pl?sid=25/04/23/1540254&amp;from=rss)
