# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning

* [56% of Companies Have Seen Zero Financial Return From AI Investments, PwC Survey Says](https://slashdot.org/story/26/01/20/1924238/56-of-companies-have-seen-zero-financial-return-from-ai-investments-pwc-survey-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A PwC survey reports that more than half of companies investing in AI technology have yet to see any financial returns, raising questions about its tangible benefits and implementation.

* [Anthropic CEO Says Government Should Help Ensure AI&apos;s Economic Upside Is Shared](https://slashdot.org/story/26/01/20/1813225/anthropic-ceo-says-government-should-help-ensure-ais-economic-upside-is-shared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The CEO of Anthropic highlights the necessity for governmental involvement to ensure fair sharing of AI-driven economic benefits.

* [Europe Must Invest in Open Source AI or Cede To China, Schmidt Says](https://slashdot.org/story/26/01/20/1620212/europe-must-invest-in-open-source-ai-or-cede-to-china-schmidt-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Calls for Europe to strategically invest in open-source AI to maintain a competitive edge against China's advancements.

* [AI Agents &apos;Perilous&apos; for Secure Apps Such as Signal, Whittaker Says](https://it.slashdot.org/story/26/01/20/1825218/ai-agents-perilous-for-secure-apps-such-as-signal-whittaker-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Concerns are raised about the impact of AI agents on the security of encrypted applications like Signal.

* [Without benchmarking LLMs, you&apos;re likely overpaying 5-10x](https://karllorey.com/posts/without-benchmarking-llms-youre-overpaying) - An analysis showing that failing to benchmark Large Language Models (LLMs) can result in significant overpaying for services.

## Cybersecurity and Technology Insights

* [A scammer&apos;s blueprint: How cybercriminals plot to rob a target in a week](https://www.reuters.com/graphics/SOUTHEASTASIA-SCAMS/MANUALS/klpyjlqelvg/) - A detailed examination of how cybercriminals meticulously plan fraud and theft over just one week.

* [Crypto News Outlet Cointelegraph Loses 80% of Traffic After Google Penalty For Parasitic Blackhat SEO Deal](https://news.slashdot.org/story/26/01/20/174243/crypto-news-outlet-cointelegraph-loses-80-of-traffic-after-google-penalty-for-parasitic-blackhat-seo-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A case study on the implications of unethical SEO tactics penalized by Google.

* [Linux kernel framework for PCIe device emulation, in userspace](https://github.com/cakehonolulu/pciem) - Exploring new possibilities with PCIe device emulation directly in userspace within the Linux kernel framework.

## Historical and Cultural Discoveries

* [The 26,000-Year Astronomical Monument Hidden in Plain Sight](https://longnow.org/ideas/the-26000-year-astronomical-monument-hidden-in-plain-sight/) - Dive into the mystery behind an ancient astronomical monument that has left researchers fascinated.

* [The secret medieval tunnels that we still don&apos;t understand](https://weirdmedievalguys.substack.com/p/the-secret-medieval-tunnels-that) - A look at ancient medieval tunnels whose origins and purposes remain a subject of intrigue.

## Emerging Technologies

* [Rust&apos;s standard library on the GPU](https://vectorware.com/blog/rust-std-on-gpu/) - Exploring the exciting possibility of leveraging Rust's standard library on GPUs for advanced applications.

* [Venus v5 released: Modern OO standard library (and more) for Perl 5](https://www.reddit.com/r/perl/comments/1qi4sf8/venus_v5_released_modern_oo_standard_library_and/) - A comprehensive release introducing modern object-oriented features for Perl 5 developers.

## Environment and Global Trends

* [Ocean Damage Nearly Doubles the Cost of Climate Change](https://news.slashdot.org/story/26/01/20/0053209/ocean-damage-nearly-doubles-the-cost-of-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - New findings on how oceanic damage significantly amplifies the financial impact of climate change.

* [Mosquitoes&apos; Thirst for Human Blood Has Increased as Biodiversity Loss Worsens](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss) - A study connecting the increase in mosquito attacks with the ongoing loss in global biodiversity.

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

* [2026-01-20, 21:22:00](https://slashdot.org/story/26/01/20/1924238/56-of-companies-have-seen-zero-financial-return-from-ai-investments-pwc-survey-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [56% of Companies Have Seen Zero Financial Return From AI Investments, PwC Survey Says](https://slashdot.org/story/26/01/20/1924238/56-of-companies-have-seen-zero-financial-return-from-ai-investments-pwc-survey-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 21:13:05](https://lobste.rs/s/8hsnqv/on_coding_with_llms) - [On coding with LLMs](https://www.abareplace.com/blog/ai/)
* [2026-01-20, 20:45:00](https://apple.slashdot.org/story/26/01/20/1855225/setapp-mobile-to-close-in-february-as-alternative-ios-app-store-economics-prove-untenable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Setapp Mobile To Close in February as Alternative iOS App Store Economics Prove Untenable](https://apple.slashdot.org/story/26/01/20/1855225/setapp-mobile-to-close-in-february-as-alternative-ios-app-store-economics-prove-untenable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 20:23:55](https://news.ycombinator.com/item?id=46697287) - [A scammer&apos;s blueprint: How cybercriminals plot to rob a target in a week](https://www.reuters.com/graphics/SOUTHEASTASIA-SCAMS/MANUALS/klpyjlqelvg/)
* [2026-01-20, 20:02:00](https://slashdot.org/story/26/01/20/1813225/anthropic-ceo-says-government-should-help-ensure-ais-economic-upside-is-shared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic CEO Says Government Should Help Ensure AI&apos;s Economic Upside Is Shared](https://slashdot.org/story/26/01/20/1813225/anthropic-ceo-says-government-should-help-ensure-ais-economic-upside-is-shared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 19:32:49](https://news.ycombinator.com/item?id=46696683) - [The secret medieval tunnels that we still don&apos;t understand](https://weirdmedievalguys.substack.com/p/the-secret-medieval-tunnels-that)
* [2026-01-20, 19:22:00](https://it.slashdot.org/story/26/01/20/1825218/ai-agents-perilous-for-secure-apps-such-as-signal-whittaker-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Agents &apos;Perilous&apos; for Secure Apps Such as Signal, Whittaker Says](https://it.slashdot.org/story/26/01/20/1825218/ai-agents-perilous-for-secure-apps-such-as-signal-whittaker-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 19:18:28](https://lobste.rs/s/cnkpcm/little_sound_dj) - [Little Sound Dj](https://www.littlesounddj.com/lsd/index.php)
* [2026-01-20, 19:06:56](https://news.ycombinator.com/item?id=46696357) - [Instabridge has acquired Nova Launcher](https://novalauncher.com/nova-is-here-to-stay)
* [2026-01-20, 19:06:07](https://lobste.rs/s/ezyebi/where_i_m_at_with_ai) - [Where I&apos;m at with AI](https://paulosman.me/2026/01/18/where-im-at-with-ai/)
* [2026-01-20, 19:06:00](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss) - [China&apos;s Wind Farms Are Doing a Lot More Than Generating Electricity](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss)
* [2026-01-20, 19:03:25](https://news.ycombinator.com/item?id=46696300) - [Without benchmarking LLMs, you&apos;re likely overpaying 5-10x](https://karllorey.com/posts/without-benchmarking-llms-youre-overpaying)
* [2026-01-20, 19:01:44](https://lobste.rs/s/qy6azg/reliable_signals_honest_intent) - [Reliable Signals of Honest Intent](https://zanlib.dev/blog/reliable-signals-of-honest-intent/)
* [2026-01-20, 19:01:30](https://news.ycombinator.com/item?id=46696276) - [Stewart Brand – Maintenance: Of Everything, Part One](https://press.stripe.com/maintenance-part-one)
* [2026-01-20, 18:40:19](https://news.ycombinator.com/item?id=46695978) - [When \&quot;Likers&apos;&apos; Go Private: Engagement with Reputationally Risky Content on X](https://arxiv.org/abs/2601.11140)
* [2026-01-20, 18:35:00](https://slashdot.org/story/26/01/20/1834222/palantir-ceo-says-ai-to-make-large-scale-immigration-obsolete?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Palantir CEO Says AI To Make Large-Scale Immigration Obsolete](https://slashdot.org/story/26/01/20/1834222/palantir-ceo-says-ai-to-make-large-scale-immigration-obsolete?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 18:16:09](https://news.ycombinator.com/item?id=46695628) - [The 26,000-Year Astronomical Monument Hidden in Plain Sight](https://longnow.org/ideas/the-26000-year-astronomical-monument-hidden-in-plain-sight/)
* [2026-01-20, 18:09:16](https://lobste.rs/s/6xnhvt/building_your_own_efficient_uint128_c) - [Building Your Own Efficient uint128 in C++](https://solidean.com/blog/2026/building-your-own-u128/)
* [2026-01-20, 18:02:00](https://news.slashdot.org/story/26/01/20/174243/crypto-news-outlet-cointelegraph-loses-80-of-traffic-after-google-penalty-for-parasitic-blackhat-seo-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Crypto News Outlet Cointelegraph Loses 80% of Traffic After Google Penalty For Parasitic Blackhat SEO Deal](https://news.slashdot.org/story/26/01/20/174243/crypto-news-outlet-cointelegraph-loses-80-of-traffic-after-google-penalty-for-parasitic-blackhat-seo-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 17:21:00](https://science.slashdot.org/story/26/01/20/1647209/he-went-to-prison-for-gene-editing-babies-now-hes-planning-to-do-it-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [He Went To Prison for Gene-Editing Babies. Now He&apos;s Planning To Do It Again](https://science.slashdot.org/story/26/01/20/1647209/he-went-to-prison-for-gene-editing-babies-now-hes-planning-to-do-it-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 17:00:06](https://lobste.rs/s/l1xqzx/long_now_web_inside_internet_archive_s) - [The Long Now of the Web: Inside the Internet Archive’s Fight Against Forgetting](https://hackernoon.com/the-long-now-of-the-web-inside-the-internet-archives-fight-against-forgetting)
* [2026-01-20, 16:48:59](https://news.ycombinator.com/item?id=46694124) - [The Unix Pipe Card Game](https://punkx.org/unix-pipe-game/)
* [2026-01-20, 16:44:00](https://slashdot.org/story/26/01/20/1620212/europe-must-invest-in-open-source-ai-or-cede-to-china-schmidt-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe Must Invest in Open Source AI or Cede To China, Schmidt Says](https://slashdot.org/story/26/01/20/1620212/europe-must-invest-in-open-source-ai-or-cede-to-china-schmidt-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 16:43:31](https://lobste.rs/s/1y3v8c/visualizing_delaunay_triangulation) - [Visualizing Delaunay Triangulation (2022)](https://ianthehenry.com/posts/delaunay/)
* [2026-01-20, 16:39:26](https://lobste.rs/s/qywnk6/rust_s_standard_library_on_gpu) - [Rust&apos;s standard library on the GPU](https://vectorware.com/blog/rust-std-on-gpu/)
* [2026-01-20, 16:14:51](https://lobste.rs/s/smh8hs/venus_v5_released_modern_oo_standard) - [Venus v5 released: Modern OO standard library (and more) for Perl 5](https://www.reddit.com/r/perl/comments/1qi4sf8/venus_v5_released_modern_oo_standard_library_and/)
* [2026-01-20, 16:12:34](https://lobste.rs/s/kvviy0/type_safe_eval_grace) - [Type-safe eval in Grace](https://haskellforall.com/2026/01/typesafe-eval)
* [2026-01-20, 16:05:00](https://slashdot.org/story/26/01/20/1546245/ukraine-to-share-wartime-combat-data-with-allies-to-help-train-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ukraine To Share Wartime Combat Data With Allies To Help Train AI](https://slashdot.org/story/26/01/20/1546245/ukraine-to-share-wartime-combat-data-with-allies-to-help-train-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 16:03:21](https://news.ycombinator.com/item?id=46693346) - [De-dollarization: Is the US dollar losing its dominance? (2025)](https://www.jpmorgan.com/insights/global-research/currencies/de-dollarization)
* [2026-01-20, 15:56:07](https://news.ycombinator.com/item?id=46693205) - [Nvidia Stock Crash Prediction](https://entropicthoughts.com/nvidia-stock-crash-prediction)
* [2026-01-20, 15:29:00](https://hardware.slashdot.org/story/26/01/20/1529245/energy-costs-will-decide-which-countries-win-the-ai-race-microsofts-nadella-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Energy Costs Will Decide Which Countries Win the AI Race, Microsoft&apos;s Nadella Says](https://hardware.slashdot.org/story/26/01/20/1529245/energy-costs-will-decide-which-countries-win-the-ai-race-microsofts-nadella-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 14:40:00](https://news.slashdot.org/story/26/01/20/1411250/amazon-ceo-jassy-says-tariffs-have-started-to-creep-into-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon CEO Jassy Says Tariffs Have Started To &apos;Creep&apos; Into Prices](https://news.slashdot.org/story/26/01/20/1411250/amazon-ceo-jassy-says-tariffs-have-started-to-creep-into-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 14:38:22](https://lobste.rs/s/tldid3/ip_addresses_through_2025) - [IP Addresses Through 2025](https://www.potaroo.net/ispcol/2026-01/addr2025.html)
* [2026-01-20, 14:24:13](https://lobste.rs/s/hrsaz6/unconventional_postgresql) - [Unconventional PostgreSQL Optimizations](https://hakibenita.com/postgresql-unconventional-optimizations)
* [2026-01-20, 14:23:44](https://news.ycombinator.com/item?id=46692116) - [Unconventional PostgreSQL Optimizations](https://hakibenita.com/postgresql-unconventional-optimizations)
* [2026-01-20, 14:22:00](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss) - [Mosquitoes&apos; Thirst for Human Blood Has Increased as Biodiversity Loss Worsens](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss)
* [2026-01-20, 14:00:00](https://entertainment.slashdot.org/story/26/01/20/1356253/sony-is-ceding-control-of-tv-hardware-business-to-chinas-tcl?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Is Ceding Control of TV Hardware Business To China&apos;s TCL](https://entertainment.slashdot.org/story/26/01/20/1356253/sony-is-ceding-control-of-tv-hardware-business-to-chinas-tcl?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 13:51:03](https://news.ycombinator.com/item?id=46691835) - [IP Addresses Through 2025](https://www.potaroo.net/ispcol/2026-01/addr2025.html)
* [2026-01-20, 13:48:11](https://lobste.rs/s/nsjybj/why_alter_table_is_such_problem_for_sqlite) - [Why ALTER TABLE is such a problem for SQLite](https://www.sqlite.org/lang_altertable.html#why_alter_table_is_such_a_problem_for_sqlite)
* [2026-01-20, 13:34:16](https://news.ycombinator.com/item?id=46691660) - [The Zen of Reticulum](https://github.com/markqvist/Reticulum/blob/master/Zen%20of%20Reticulum.md)
* [2026-01-20, 13:16:22](https://lobste.rs/s/oxeeyz/my_week_with_opencode) - [My week with opencode](https://deadsimpletech.com/blog/week_with_opencode)
* [2026-01-20, 13:10:08](https://news.ycombinator.com/item?id=46691454) - [Show HN: Ocrbase – pdf → .md/.json document OCR and structured extraction API](https://github.com/majcheradam/ocrbase)
* [2026-01-20, 13:00:00](https://developers.slashdot.org/story/26/01/20/0112259/just-because-linus-torvalds-vibe-codes-doesnt-mean-its-a-good-idea?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Just Because Linus Torvalds Vibe Codes Doesn&apos;t Mean It&apos;s a Good Idea&apos;](https://developers.slashdot.org/story/26/01/20/0112259/just-because-linus-torvalds-vibe-codes-doesnt-mean-its-a-good-idea?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 12:23:41](https://lobste.rs/s/tq0yv5/jule_programming_language) - [The Jule Programming Language](https://jule.dev/)
* [2026-01-20, 12:12:54](https://lobste.rs/s/1obt9w/lost_art_xml) - [The lost art of XML](https://marcosmagueta.com/blog/the-lost-art-of-xml/)
* [2026-01-20, 12:00:31](https://news.ycombinator.com/item?id=46690920) - [Channel3 (YC S25) Is Hiring](https://www.ycombinator.com/companies/channel3/jobs/3DIAYYY-backend-engineer)
* [2026-01-20, 11:58:34](https://news.ycombinator.com/item?id=46690907) - [Running Claude Code dangerously (safely)](https://blog.emilburzo.com/2026/01/running-claude-code-dangerously-safely/)
* [2026-01-20, 11:06:54](https://news.ycombinator.com/item?id=46690530) - [IP over Avian Carriers with Quality of Service (1999)](https://www.rfc-editor.org/rfc/rfc2549.html)
* [2026-01-20, 10:54:51](https://lobste.rs/s/fsq2qu/static_site_generator_written_posix) - [A static site generator written in POSIX shell](https://aashvik.com/posts/shell-ssg)
* [2026-01-20, 10:47:25](https://news.ycombinator.com/item?id=46690402) - [I&apos;m addicted to being useful](https://www.seangoedecke.com/addicted-to-being-useful/)
* [2026-01-20, 10:00:00](https://news.slashdot.org/story/26/01/20/0053209/ocean-damage-nearly-doubles-the-cost-of-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ocean Damage Nearly Doubles the Cost of Climate Change](https://news.slashdot.org/story/26/01/20/0053209/ocean-damage-nearly-doubles-the-cost-of-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 09:44:51](https://lobste.rs/s/egujjx/ai_is_still_making_code_worse_new_cmu_study) - [AI Is still making code worse: A new CMU study confirms (2025)](https://blog.robbowley.net/2025/12/04/ai-is-still-making-code-worse-a-new-cmu-study-confirms/)
* [2026-01-20, 09:34:00](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss) - [New Studies Can Explain Why Comet 3I/Atlas Isn&apos;t an Alien (Probably)](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss)
* [2026-01-20, 09:01:25](https://lobste.rs/s/parmy3/giving_university_exams_age_chatbots) - [Giving University Exams in the Age of Chatbots](https://ploum.net/2026-01-19-exam-with-chatbots.html)
* [2026-01-20, 08:31:31](https://lobste.rs/s/5jvboe/lessons_from_creating_gaming_oriented) - [Lessons from creating a gaming-oriented scheduler](https://lwn.net/Articles/1051430/)
* [2026-01-20, 07:51:12](https://news.ycombinator.com/item?id=46689065) - [Linux kernel framework for PCIe device emulation, in userspace](https://github.com/cakehonolulu/pciem)
* [2026-01-20, 07:00:00](https://entertainment.slashdot.org/story/26/01/20/0045220/bank-of-england-must-plan-for-a-financial-crisis-triggered-by-aliens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bank of England &apos;Must Plan For a Financial Crisis Triggered By Aliens&apos;](https://entertainment.slashdot.org/story/26/01/20/0045220/bank-of-england-must-plan-for-a-financial-crisis-triggered-by-aliens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 04:44:00](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss) - [Stellantis Drops Jeep, Chrysler Plug-in Hybrids Amid EV Sales Slowdown](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss)
* [2026-01-20, 03:55:21](https://lobste.rs/s/ymhppr/llms_your_career) - [LLMs and your career](https://notes.eatonphil.com/2026-01-19-llms-and-your-career.html)
* [2026-01-20, 01:23:58](https://lobste.rs/s/yzsckk/prediction_within_15_years_microsoft) - [Prediction: Within 15 years Microsoft will discontinue Windows in favor of a Windows themed Linux distribution](https://gamesbymason.com/blog/2026/microsoft/)
* [2026-01-20, 00:02:00](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss) - [Anthropologists Offer New Evidence of Bipedalism in Long-Debated Fossil Discovery](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss)
* [2026-01-19, 23:59:54](https://news.ycombinator.com/item?id=46686273) - [Reticulum, a secure and anonymous mesh networking stack](https://github.com/markqvist/Reticulum)
* [2026-01-19, 22:21:20](https://lobste.rs/s/nbsclr/floating_point_printing_parsing_can_be) - [Floating-Point Printing and Parsing Can Be Simple And Fast](https://research.swtch.com/fp)
* [2026-01-19, 22:07:47](https://lobste.rs/s/fsqjwr/personal_infrastructure_setup_2026) - [Personal infrastructure setup 2026](https://linderud.dev/blog/personal-infrastructure-setup-2026/)
* [2026-01-19, 20:26:19](https://news.ycombinator.com/item?id=46684056) - [Level S4 solar radiation event](https://www.swpc.noaa.gov/news/g4-severe-geomagnetic-storm-levels-reached-19-jan-2026)
* [2026-01-19, 20:11:38](https://lobste.rs/s/bv4yod/only_two_markup_languages) - [The Only Two Markup Languages](https://www.gingerbill.org/article/2026/01/19/two-families-of-markup-languages/)
* [2026-01-19, 19:11:00](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss) - [Linux Mint 22.3 “Zena” is Now Available for Download, Here&apos;s What&apos;s New](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss)
* [2026-01-19, 18:15:48](https://news.ycombinator.com/item?id=46682518) - [Notes on Apple&apos;s Nano Texture (2025)](https://jon.bo/posts/nano-texture/)
* [2026-01-19, 17:13:59](https://news.ycombinator.com/item?id=46681611) - [What came first: the CNAME or the A record?](https://blog.cloudflare.com/cname-a-record-order-dns-standards/)
* [2026-01-19, 14:38:00](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss) - [Anything-Goes “Anyons” May be at the Root of Surprising Quantum Experiments](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss)
* [2026-01-19, 09:45:00](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss) - [AI and the Corporate Capture of Knowledge](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss)
* [2026-01-19, 07:57:04](https://news.ycombinator.com/item?id=46676081) - [The coming industrialisation of exploit generation with LLMs](https://sean.heelan.io/2026/01/18/on-the-coming-industrialisation-of-exploit-generation-with-llms/)
* [2026-01-19, 05:03:00](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss) - [AWS Flips Switch on Euro Cloud as Customers Fret About Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss)
* [2026-01-19, 00:22:00](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss) - [Are You Dead?](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss)
* [2026-01-18, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss) - [How Screwed is Generation Alpha, and the Generations Which Will Depend on Them?](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss)
* [2026-01-18, 18:20:25](https://news.ycombinator.com/item?id=46670524) - [Prediction markets are ushering in a world in which news becomes about gambling](https://www.theatlantic.com/technology/2026/01/america-polymarket-disaster/685662/)
* [2026-01-18, 14:50:00](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss) - [Hobby FPV Drone Developer Breaks 400mph Limit With New World Record](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss)
* [2026-01-18, 10:03:00](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss) - [Sorry, Eh](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss)
* [2026-01-18, 05:13:00](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss) - [Linux Kernel Bugs Hide for 2+ Years on Average](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss)
* [2026-01-18, 00:29:00](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss) - [Wormholes May Not Exist—We&apos;ve Found They Reveal Something Deeper About Time and the Universe](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss)
* [2026-01-17, 19:43:00](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss) - [&apos;Society Cannot Function If No One is Accountable for AI&apos; — Jaron Lanier](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss)
* [2026-01-17, 15:00:00](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss) - [Why Flies Matter, Their Vital Role in Ecosystems, and Surprising Diversity](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss)
* [2026-01-17, 14:00:11](https://news.ycombinator.com/item?id=46658116) - [LG UltraFine Evo 6K 32-inch Monitor Review](https://www.wired.com/review/lg-ultrafine-evo-6k-32-inch-monitor/)
* [2026-01-17, 10:18:00](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss) - [Researchers Expose WHILL Wheelchair Safety Risks Via Remote Hacking](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss)
* [2026-01-17, 05:30:00](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss) - [Signal Creator Moxie Marlinspike Wants to Do for AI What He Did for Messaging](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss)
* [2026-01-17, 00:42:00](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss) - [X Didn&apos;t Fix Grok&apos;s ‘Undressing’ Problem. It Just Makes People Pay for It](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss)
* [2026-01-16, 21:37:51](https://news.ycombinator.com/item?id=46652569) - [Fast Concordance: Instant concordance on a corpus of &gt;1,200 books](https://iafisher.com/concordance/)
* [2026-01-16, 20:00:00](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss) - [Meta to Cut More than 1,000 Jobs as its Shifts Focus to AI Wearables](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss)
* [2026-01-16, 15:23:00](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss) - [You Need A Kitchen Slide Rule](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss)
* [2026-01-16, 10:30:00](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss) - [Over Half a Million Windows Users are Switching to Linux](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss)
* [2026-01-16, 05:47:00](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss) - [BreachForum Breach](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss)
* [2026-01-16, 01:06:00](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss) - [Survey: Even Meta And Microsoft Engineers Ditch Company AI For Claude](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss)
