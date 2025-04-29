# [News Summary](https://kherrick.github.io/news-summary/)

## Data Breaches and Legal Challenges

* [SK Telecom Offers SIM Replacements After Major Data Breach](https://tech.slashdot.org/story/25/04/29/1815202/sk-telecom-offers-sim-replacements-after-major-data-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [India Court Orders Proton Mail Block On Security Grounds](https://yro.slashdot.org/story/25/04/29/1730240/india-court-orders-proton-mail-block-on-security-grounds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Reddit Issuing 'Formal Legal Demands' Against Researchers Who Conducted Secret AI Experiment on Users](https://slashdot.org/story/25/04/29/1556234/reddit-issuing-formal-legal-demands-against-researchers-who-conducted-secret-ai-experiment-on-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## AI Innovations and Ethical Concerns

* [Meta AI App built with Llama 4](https://about.fb.com/news/2025/04/introducing-meta-ai-app-new-way-access-ai-assistant/)

* [I made my AI think harder by making it argue with itself. It works stupidly well](https://github.com/PhialsBasement/Chain-of-Recursive-Thoughts)

* [OpenAI-Microsoft Alliance Fractures as AI Titans Chart Separate Paths](https://slashdot.org/story/25/04/29/0445225/openai-microsoft-alliance-fractures-as-ai-titans-chart-separate-paths?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Environmental and Scientific Discoveries

* [One-sixth of the planet's cropland has toxic levels of one or more metals](https://english.elpais.com/science-tech/2025-04-17/one-sixth-of-the-planets-cropland-has-toxic-levels-of-one-or-more-metals.html)

* [After 53 years, a failed Soviet Venus spacecraft is crashing back to Earth](https://gizmodo.com/after-53-years-a-failed-soviet-venus-spacecraft-is-crashing-back-to-earth-2000595234)

* [New Framework Suggests Stars Dissolve Into Neutrons to Forge Heavy Elements](https://soylentnews.org/article.pl?sid=25/04/29/0655255&amp;from=rss)

## Open-Source and Tech Launches

* [Amazon Launches First Kuiper Internet Satellites](https://tech.slashdot.org/story/25/04/29/0435203/amazon-launches-first-kuiper-internet-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Firefox tab groups are here](https://blog.mozilla.org/en/firefox/tab-groups-community/)

* [Archie anonymous FTP search revival](http://archie.macdomain.net/)

## Unique Innovations and Tools

* [Show HN: Beatsync – perfect audio sync across multiple devices](https://github.com/freeman-jiang/beatsync)

* [Pyrefly - A faster Python type checker written in Rust](https://pyrefly.org/)

* [Show HN: Flowcode – Turing-complete visual programming platform](https://app.getflowcode.io/playground/example1)

## Economic and Social Impacts

* [Bitcoin Mining Costs Surge Beyond Profitability Threshold](https://slashdot.org/story/25/04/29/1614226/bitcoin-mining-costs-surge-beyond-profitability-threshold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Generative AI is not replacing jobs or hurting wages at all, say economists](https://www.theregister.com/2025/04/29/generative_ai_no_effect_jobs_wages/)

* [Car Subscription Features Raise Your Risk of Government Surveillance, Police Records Show](https://yro.slashdot.org/story/25/04/29/0058230/car-subscription-features-raise-your-risk-of-government-surveillance-police-records-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-04-29, 18:45:00](https://tech.slashdot.org/story/25/04/29/1815202/sk-telecom-offers-sim-replacements-after-major-data-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SK Telecom Offers SIM Replacements After Major Data Breach](https://tech.slashdot.org/story/25/04/29/1815202/sk-telecom-offers-sim-replacements-after-major-data-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 18:10:00](https://news.slashdot.org/story/25/04/29/1754248/it-could-be-a-250-billion-market-but-almost-no-one-is-interested?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [It Could Be a $250 Billion Market, But Almost No One Is Interested](https://news.slashdot.org/story/25/04/29/1754248/it-could-be-a-250-billion-market-but-almost-no-one-is-interested?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 17:35:48](https://news.ycombinator.com/item?id=43835623) - [Beyond Performance: Measuring the Environmental Impact of Analytical Databases](https://arxiv.org/abs/2504.18980)
* [2025-04-29, 17:32:25](https://news.ycombinator.com/item?id=43835584) - [Show HN: Beatsync – perfect audio sync across multiple devices](https://github.com/freeman-jiang/beatsync)
* [2025-04-29, 17:30:00](https://yro.slashdot.org/story/25/04/29/1730240/india-court-orders-proton-mail-block-on-security-grounds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India Court Orders Proton Mail Block On Security Grounds](https://yro.slashdot.org/story/25/04/29/1730240/india-court-orders-proton-mail-block-on-security-grounds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 17:24:29](https://news.ycombinator.com/item?id=43835495) - [Bamba: An open-source LLM that crosses a transformer with an SSM](https://research.ibm.com/blog/bamba-ssm-transformer-model)
* [2025-04-29, 17:19:04](https://news.ycombinator.com/item?id=43835445) - [I made my AI think harder by making it argue with itself. It works stupidly well](https://github.com/PhialsBasement/Chain-of-Recursive-Thoughts)
* [2025-04-29, 17:17:23](https://news.ycombinator.com/item?id=43835424) - [Everything we announced at our first-ever LlamaCon](https://ai.meta.com/blog/llamacon-llama-news/?_fb_noscript=1)
* [2025-04-29, 17:01:15](https://news.ycombinator.com/item?id=43835216) - [Hestus, Inc. (YC S24) Is Hiring an ML Engineer to Revolutionize CAD](https://www.ycombinator.com/companies/hestus-inc/jobs/WQVdwX8-machine-learning-engineer)
* [2025-04-29, 16:48:42](https://news.ycombinator.com/item?id=43835044) - [O3 beats a master-level GeoGuessr player, even with fake EXIF data](https://sampatt.com/blog/2025-04-28-can-o3-beat-a-geoguessr-master)
* [2025-04-29, 16:41:27](https://news.ycombinator.com/item?id=43834942) - [Indian court orders blocking of Proton Mail](https://techcrunch.com/2025/04/29/indian-court-orders-blocking-of-proton-mail/)
* [2025-04-29, 16:41:00](https://slashdot.org/story/25/04/29/1614226/bitcoin-mining-costs-surge-beyond-profitability-threshold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bitcoin Mining Costs Surge Beyond Profitability Threshold](https://slashdot.org/story/25/04/29/1614226/bitcoin-mining-costs-surge-beyond-profitability-threshold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 16:32:14](https://lobste.rs/s/gmh1nw/archie_anonymous_ftp_search_revival) - [Archie anonymous FTP search revival](http://archie.macdomain.net/)
* [2025-04-29, 16:01:00](https://slashdot.org/story/25/04/29/1556234/reddit-issuing-formal-legal-demands-against-researchers-who-conducted-secret-ai-experiment-on-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Issuing &apos;Formal Legal Demands&apos; Against Researchers Who Conducted Secret AI Experiment on Users](https://slashdot.org/story/25/04/29/1556234/reddit-issuing-formal-legal-demands-against-researchers-who-conducted-secret-ai-experiment-on-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 15:37:10](https://news.ycombinator.com/item?id=43834101) - [Firefox tab groups are here](https://blog.mozilla.org/en/firefox/tab-groups-community/)
* [2025-04-29, 15:25:00](https://tech.slashdot.org/story/25/04/29/1525220/government-hackers-are-leading-the-use-of-attributed-zero-days-google-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Government Hackers Are Leading the Use of Attributed Zero-Days, Google Says](https://tech.slashdot.org/story/25/04/29/1525220/government-hackers-are-leading-the-use-of-attributed-zero-days-google-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 15:13:27](https://news.ycombinator.com/item?id=43833783) - [Meta AI App built with Llama 4](https://about.fb.com/news/2025/04/introducing-meta-ai-app-new-way-access-ai-assistant/)
* [2025-04-29, 15:12:11](https://lobste.rs/s/hlhfpg/elasticsearch_hybrid_search_recipes) - [Elasticsearch Hybrid Search Recipes - Benchmarked](https://softwaredoug.com/blog/2025/03/13/elasticsearch-hybrid-search-strategies)
* [2025-04-29, 14:53:14](https://lobste.rs/s/bxixuu/cheat_sheet_for_why_using_chatgpt_is_not) - [A cheat sheet for why using ChatGPT is not bad for the environment](https://andymasley.substack.com/p/a-cheat-sheet-for-conversations-about)
* [2025-04-29, 14:45:00](https://yro.slashdot.org/story/25/04/29/1445247/fired-disney-employee-gets-3-years-in-prison-for-hacking-and-changing-menus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fired Disney Employee Gets 3 Years in Prison For Hacking and Changing Menus](https://yro.slashdot.org/story/25/04/29/1445247/fired-disney-employee-gets-3-years-in-prison-for-hacking-and-changing-menus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 14:41:00](https://soylentnews.org/article.pl?sid=25/04/29/0824210&amp;from=rss) - [AI-Powered, Non-Intrusive Terminal Assistant ](https://soylentnews.org/article.pl?sid=25/04/29/0824210&amp;from=rss)
* [2025-04-29, 14:38:43](https://news.ycombinator.com/item?id=43833310) - [ArkFlow: High-performance Rust stream processing engine](https://github.com/arkflow-rs/arkflow)
* [2025-04-29, 14:30:26](https://lobste.rs/s/dycg15/jepsen_amazon_rds_for_postgresql_17_4) - [Jepsen: Amazon RDS for PostgreSQL 17.4](https://jepsen.io/analyses/amazon-rds-for-postgresql-17.4)
* [2025-04-29, 14:00:58](https://news.ycombinator.com/item?id=43832765) - [One-sixth of the planet&apos;s cropland has toxic levels of one or more metals](https://english.elpais.com/science-tech/2025-04-17/one-sixth-of-the-planets-cropland-has-toxic-levels-of-one-or-more-metals.html)
* [2025-04-29, 14:00:00](https://slashdot.org/story/25/04/29/1031207/amazon-to-display-tariff-costs-for-consumers-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon To Display Tariff Costs For Consumers, Report Says](https://slashdot.org/story/25/04/29/1031207/amazon-to-display-tariff-costs-for-consumers-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 13:25:59](https://lobste.rs/s/djq7xn/hello_0_days_my_old_friend_2024_zero_day) - [Hello 0-Days, My Old Friend: A 2024 Zero-Day Exploitation Analysis](https://cloud.google.com/blog/topics/threat-intelligence/2024-zero-day-trends)
* [2025-04-29, 13:00:00](https://bsd.slashdot.org/story/25/04/29/0456227/openbsd-77-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenBSD 7.7 Released](https://bsd.slashdot.org/story/25/04/29/0456227/openbsd-77-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 12:58:52](https://lobste.rs/s/iqrbtk/efficiency_vs_resilience) - [Efficiency vs. Resilience](https://cacm.acm.org/opinion/efficiency-vs-resilience/)
* [2025-04-29, 12:29:44](https://news.ycombinator.com/item?id=43831705) - [Performance optimization is hard because it&apos;s fundamentally a brute-force task](https://purplesyringa.moe/blog/why-performance-optimization-is-hard-work/)
* [2025-04-29, 12:28:36](https://lobste.rs/s/e4tygw/why_performance_optimization_is_hard) - [Why performance optimization is hard work](https://purplesyringa.moe/blog/why-performance-optimization-is-hard-work/)
* [2025-04-29, 12:23:57](https://lobste.rs/s/ctopbt/programming_languages_should_have_tree) - [Programming languages should have a tree traversal primitive](https://blog.tylerglaiel.com/p/programming-languages-should-have)
* [2025-04-29, 12:23:19](https://news.ycombinator.com/item?id=43831628) - [Programming languages should have a tree traversal primitive](https://blog.tylerglaiel.com/p/programming-languages-should-have)
* [2025-04-29, 12:20:10](https://news.ycombinator.com/item?id=43831602) - [After 53 years, a failed Soviet Venus spacecraft is crashing back to Earth](https://gizmodo.com/after-53-years-a-failed-soviet-venus-spacecraft-is-crashing-back-to-earth-2000595234)
* [2025-04-29, 12:13:31](https://news.ycombinator.com/item?id=43831524) - [Pyrefly - A faster Python type checker written in Rust](https://pyrefly.org/)
* [2025-04-29, 11:57:17](https://news.ycombinator.com/item?id=43831363) - [Gaussian Splatting Meets ROS2](https://github.com/shadygm/ROSplat)
* [2025-04-29, 11:49:55](https://news.ycombinator.com/item?id=43831298) - [Show HN: A Chrome extension that will auto-reject non-essential cookies](https://blog.bymitch.com/posts/reject-cookies/)
* [2025-04-29, 11:44:50](https://lobste.rs/s/d3neqf/syntactic_musings_on_match_expressions) - [Syntactic musings on match expressions](https://blog.yoshuawuyts.com/syntactic-musings-on-match-expressions/)
* [2025-04-29, 11:35:03](https://news.ycombinator.com/item?id=43831142) - [Heart disease deaths worldwide linked to chemical widely used in plastics](https://medicalxpress.com/news/2025-04-heart-disease-deaths-worldwide-linked.html)
* [2025-04-29, 10:08:09](https://news.ycombinator.com/item?id=43830613) - [Generative AI is not replacing jobs or hurting wages at all, say economists](https://www.theregister.com/2025/04/29/generative_ai_no_effect_jobs_wages/)
* [2025-04-29, 10:01:00](https://soylentnews.org/article.pl?sid=25/04/29/0655255&amp;from=rss) - [New Framework Suggests Stars Dissolve Into Neutrons to Forge Heavy Elements](https://soylentnews.org/article.pl?sid=25/04/29/0655255&amp;from=rss)
* [2025-04-29, 10:00:00](https://slashdot.org/story/25/04/29/0445225/openai-microsoft-alliance-fractures-as-ai-titans-chart-separate-paths?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI-Microsoft Alliance Fractures as AI Titans Chart Separate Paths](https://slashdot.org/story/25/04/29/0445225/openai-microsoft-alliance-fractures-as-ai-titans-chart-separate-paths?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 09:59:04](https://news.ycombinator.com/item?id=43830544) - [How to build Intrinsic Motivation: a review of the science](https://erringtowardsanswers.substack.com/p/intrinsic-motivation)
* [2025-04-29, 09:04:35](https://news.ycombinator.com/item?id=43830193) - [Show HN: Flowcode – Turing-complete visual programming platform](https://app.getflowcode.io/playground/example1)
* [2025-04-29, 07:08:50](https://news.ycombinator.com/item?id=43829490) - [Try Switching to Kagi](https://daringfireball.net/2025/04/try_switching_to_kagi)
* [2025-04-29, 07:00:00](https://tech.slashdot.org/story/25/04/29/0435203/amazon-launches-first-kuiper-internet-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Launches First Kuiper Internet Satellites](https://tech.slashdot.org/story/25/04/29/0435203/amazon-launches-first-kuiper-internet-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 06:35:03](https://lobste.rs/s/nyc9ob/migrating_away_from_rust) - [Migrating away from Rust](https://deadmoney.gg/news/articles/migrating-away-from-rust)
* [2025-04-29, 05:52:16](https://lobste.rs/s/9qgzmq/why_did_windows_7_for_few_months_log_on) - [Why did Windows 7, for a few months, log on slower if you have a solid color background?](https://devblogs.microsoft.com/oldnewthing/20250428-00/?p=111121)
* [2025-04-29, 05:45:53](https://news.ycombinator.com/item?id=43829035) - [LibreLingo – FOSS Alternative to Duolingo](https://librelingo.app)
* [2025-04-29, 05:40:35](https://news.ycombinator.com/item?id=43829006) - [A single line of code cost $8000](https://pietrasiak.com/one-line-of-code-that-did-cost-dollar8000)
* [2025-04-29, 05:30:00](https://yro.slashdot.org/story/25/04/29/0058230/car-subscription-features-raise-your-risk-of-government-surveillance-police-records-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Car Subscription Features Raise Your Risk of Government Surveillance, Police Records Show](https://yro.slashdot.org/story/25/04/29/0058230/car-subscription-features-raise-your-risk-of-government-surveillance-police-records-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 05:15:00](https://soylentnews.org/article.pl?sid=25/04/28/0428200&amp;from=rss) - [Differential Equations and Urine](https://soylentnews.org/article.pl?sid=25/04/28/0428200&amp;from=rss)
* [2025-04-29, 05:02:11](https://lobste.rs/s/wtzly9/good_regulator_theorem) - [Good regulator theorem](https://en.wikipedia.org/wiki/Good_regulator_theorem)
* [2025-04-29, 03:00:00](https://developers.slashdot.org/story/25/04/29/0259256/oracle-engineers-caused-days-long-software-outage-at-us-hospitals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oracle Engineers Caused Days-Long Software Outage at US Hospitals](https://developers.slashdot.org/story/25/04/29/0259256/oracle-engineers-caused-days-long-software-outage-at-us-hospitals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 01:49:43](https://lobste.rs/s/zoxm37/what_heck_is_aead_again) - [What the heck is AEAD again?](https://ochagavia.nl/blog/what-the-heck-is-aead-again/)
* [2025-04-29, 01:33:47](https://lobste.rs/s/xys6af/qwen3_think_deeper_act_faster) - [Qwen3: Think Deeper, Act Faster](https://qwenlm.github.io/blog/qwen3/)
* [2025-04-29, 01:00:00](https://news.slashdot.org/story/25/04/29/0049233/duolingo-will-replace-contract-workers-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Duolingo Will Replace Contract Workers With AI](https://news.slashdot.org/story/25/04/29/0049233/duolingo-will-replace-contract-workers-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-29, 00:28:00](https://soylentnews.org/article.pl?sid=25/04/28/0420232&amp;from=rss) - [Ice Age Pyrotechnology: This is How Humans Made Fire Tens of Thousands of Years Ago](https://soylentnews.org/article.pl?sid=25/04/28/0420232&amp;from=rss)
* [2025-04-28, 23:40:00](https://it.slashdot.org/story/25/04/28/1945215/digital-photo-frame-company-nixplay-slashes-free-cloud-storage-from-10gb-to-500mb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Digital Photo Frame Company Nixplay Slashes Free Cloud Storage From 10GB To 500MB](https://it.slashdot.org/story/25/04/28/1945215/digital-photo-frame-company-nixplay-slashes-free-cloud-storage-from-10gb-to-500mb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 23:27:11](https://news.ycombinator.com/item?id=43827214) - [Why did Windows 7 log on slower for months if you had a solid color background?](https://devblogs.microsoft.com/oldnewthing/20250428-00/?p=111121)
* [2025-04-28, 22:35:21](https://lobste.rs/s/x04hyl/packed_data_support_haskell) - [Packed Data support in Haskell](https://arthi-chaud.github.io/posts/packed/)
* [2025-04-28, 21:58:52](https://news.ycombinator.com/item?id=43826584) - [The One-Person Framework in Practice](https://link.mail.beehiiv.com/ss/c/u001.5SRwDQ9qxPQW8vmD5Do73b3R4eTCi2vXqPyztEk6wMFC9_fqEAcDVx6xEJ96T4BSMXrPS7z5exEBSTF4pF48z8SqJkJnkAwMUW9LtYdd8lWmvkDinT92nsk5HmXOHdWgLsysm9FMGrqmu7dnG57cXpga8ZOe8X0IV8pyeC3AswdRMaitfT307y7naP-_6W5CiolKhXCKrEndMGCW2PftFUu9ieYOxpVJ_fhu82gAh-4/4g1/wA_MG-I5SVCyR3KY66oEaQ/h30/h001.kLDFZMgisudi21zmTPbd_O8U7X98d4UxYqZjQTb_D7o)
* [2025-04-28, 20:44:25](https://news.ycombinator.com/item?id=43825900) - [Qwen3: Think deeper, act faster](https://qwenlm.github.io/blog/qwen3/)
* [2025-04-28, 20:38:45](https://lobste.rs/s/tsr2cw/design_software_engineering_course) - [The design of software engineering course projects](https://austinhenley.com/blog/groupprojects.html)
* [2025-04-28, 20:37:32](https://lobste.rs/s/szvnbf/giving_software_away_for_free) - [Giving software away for free](https://simonwillison.net/2025/Apr/28/give-it-away-for-free/)
* [2025-04-28, 20:03:08](https://lobste.rs/s/b1sweu/elo_rating_system_mlb) - [The Elo Rating System in the MLB](https://thelinell.com/posts/2025/elo_in_the_mlb/)
* [2025-04-28, 19:52:02](https://news.ycombinator.com/item?id=43825336) - [One Million Chessboards](https://onemillionchessboards.com/#199,276)
* [2025-04-28, 19:41:00](https://soylentnews.org/article.pl?sid=25/04/28/044252&amp;from=rss) - [$8 Billion of US Climate Tech Projects Have Been Canceled So Far in 2025](https://soylentnews.org/article.pl?sid=25/04/28/044252&amp;from=rss)
* [2025-04-28, 17:06:49](https://lobste.rs/s/erys14/dependently_typed_assembly_language) - [A Dependently Typed Assembly Language](https://www.cs.cmu.edu/~rwh/papers/dtal/OGI-CSE-99-008.pdf)
* [2025-04-28, 16:33:48](https://lobste.rs/s/9ne34p/one_million_chessboards) - [One million chessboards](https://onemillionchessboards.com/)
* [2025-04-28, 15:36:00](https://lobste.rs/s/7ousya/audit_rust_p256_crate) - [Audit of the Rust p256 Crate](https://reports.zksecurity.xyz/reports/near-p256/)
* [2025-04-28, 15:22:28](https://lobste.rs/s/5qynev/anticrawl) - [anticrawl](https://flak.tedunangst.com/post/anticrawl)
* [2025-04-28, 14:54:00](https://soylentnews.org/article.pl?sid=25/04/28/0358222&amp;from=rss) - [Everyone Should Stop Working on AI Now](https://soylentnews.org/article.pl?sid=25/04/28/0358222&amp;from=rss)
* [2025-04-28, 14:35:43](https://lobste.rs/s/4eany6/openbsd_7_7) - [OpenBSD 7.7](https://www.openbsd.org/77.html)
* [2025-04-28, 10:09:00](https://soylentnews.org/article.pl?sid=25/04/26/1734201&amp;from=rss) - [Multi-Microbiome-Mashup](https://soylentnews.org/article.pl?sid=25/04/26/1734201&amp;from=rss)
* [2025-04-28, 07:18:53](https://lobste.rs/s/dstgbs/using_haproxy_protect_me_from_scrapers) - [Using HAProxy to protect me from scrapers](https://dgl.cx/2025/04/using-haproxy-to-stop-scrapers)
* [2025-04-28, 05:23:00](https://soylentnews.org/article.pl?sid=25/04/26/1715246&amp;from=rss) - [Windows 11’s Voice Typing Will Soon Let You Turn Off the ****ing Profanity Filter](https://soylentnews.org/article.pl?sid=25/04/26/1715246&amp;from=rss)
* [2025-04-28, 02:20:47](https://lobste.rs/s/ashwpk/boxie_always_offline_audio_player_for_my_3) - [Boxie - an always offline audio player for my 3 year old](https://mariozechner.at/posts/2025-04-20-boxie/)
* [2025-04-28, 00:42:00](https://soylentnews.org/article.pl?sid=25/04/26/1713213&amp;from=rss) - [Fedora Considers Dropping GNOME X11 Session From Repositories](https://soylentnews.org/article.pl?sid=25/04/26/1713213&amp;from=rss)
* [2025-04-27, 22:08:21](https://news.ycombinator.com/item?id=43815523) - [Ask HN: What are you working on? (April 2025)](https://news.ycombinator.com/item?id=43815523)
* [2025-04-27, 19:56:00](https://soylentnews.org/article.pl?sid=25/04/26/179216&amp;from=rss) - [9-Mile-Thick Layer of Solid Diamonds May Lurk Beneath Mercury&apos;s Surface, Study Hints](https://soylentnews.org/article.pl?sid=25/04/26/179216&amp;from=rss)
* [2025-04-27, 17:21:00](https://soylentnews.org/politics/article.pl?sid=25/04/26/174238&amp;from=rss) - [XKCD Cartoon Protest](https://soylentnews.org/politics/article.pl?sid=25/04/26/174238&amp;from=rss)
* [2025-04-27, 15:12:00](https://soylentnews.org/article.pl?sid=25/04/26/171205&amp;from=rss) - [The EU is Implementing Energy Labels and Minimum Requirements for Phones and Tablets](https://soylentnews.org/article.pl?sid=25/04/26/171205&amp;from=rss)
* [2025-04-27, 10:30:00](https://soylentnews.org/article.pl?sid=25/04/26/1332253&amp;from=rss) - [NASA’s Lucy Spacecraft Images Asteroid Donaldjohanson](https://soylentnews.org/article.pl?sid=25/04/26/1332253&amp;from=rss)
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
