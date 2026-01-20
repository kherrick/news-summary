# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Shaping the Future

* [Energy Costs Will Decide Which Countries Win the AI Race, Microsoft's Nadella Says](https://hardware.slashdot.org/story/26/01/20/1529245/energy-costs-will-decide-which-countries-win-the-ai-race-microsofts-nadella-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AI Is still making code worse: A new CMU study confirms (2025)](https://blog.robbowley.net/2025/12/04/ai-is-still-making-code-worse-a-new-cmu-study-confirms/)

* [Prediction: Within 15 years Microsoft will discontinue Windows in favor of a Windows themed Linux distribution](https://gamesbymason.com/blog/2026/microsoft/)

* [Running Claude Code dangerously (safely)](https://blog.emilburzo.com/2026/01/running-claude-code-dangerously-safely/)

* [LLMs and your career](https://notes.eatonphil.com/2026-01-19-llms-and-your-career.html)

* [Scaling long-running autonomous coding](https://simonwillison.net/2026/Jan/19/scaling-long-running-autonomous-coding/)

## Economic and Industry Trends

* [Danish pension fund divesting US Treasuries](https://www.reuters.com/business/danish-pension-fund-divest-its-us-treasuries-2026-01-20/)

* [Amazon CEO Jassy Says Tariffs Have Started To 'Creep' Into Prices](https://news.slashdot.org/story/26/01/20/1411250/amazon-ceo-jassy-says-tariffs-have-started-to-creep-into-prices?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Sony Is Ceding Control of TV Hardware Business To China's TCL](https://entertainment.slashdot.org/story/26/01/20/1356253/sony-is-ceding-control-of-tv-hardware-business-to-chinas-tcl?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Stellantis Drops Jeep, Chrysler Plug-in Hybrids Amid EV Sales Slowdown](https://soylentnews.org/article.pl?sid=26/01/18/0044243&from=rss)

* [Germany's EV Subsidies Will Include Chinese Brands](https://tech.slashdot.org/story/26/01/19/2341242/germanys-ev-subsidies-will-include-chinese-brands?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Innovations in Data and Technology

* [Unconventional PostgreSQL Optimizations](https://hakibenita.com/postgresql-unconventional-optimizations)

* [Why ALTER TABLE is such a problem for SQLite](https://www.sqlite.org/lang_altertable.html#why_alter_table_is_such_a_problem_for_sqlite)

* [A static site generator written in POSIX shell](https://aashvik.com/posts/shell-ssg)

* [Kiss Launcher – fast launcher for Android](https://kisslauncher.com/)

* [Channel3 (YC S25) Is Hiring](https://www.ycombinator.com/companies/channel3/jobs/3DIAYYY-backend-engineer)

* [IP Addresses Through 2025](https://www.potaroo.net/ispcol/2026-01/addr2025.html)

## Scientific Discoveries and Environmental Challenges

* [Bank of England 'Must Plan For a Financial Crisis Triggered By Aliens'](https://entertainment.slashdot.org/story/26/01/20/0045220/bank-of-england-must-plan-for-a-financial-crisis-triggered-by-aliens?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Ocean Damage Nearly Doubles the Cost of Climate Change](https://news.slashdot.org/story/26/01/20/0053209/ocean-damage-nearly-doubles-the-cost-of-climate-change?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Mosquitoes' Thirst for Human Blood Has Increased as Biodiversity Loss Worsens](https://soylentnews.org/article.pl?sid=26/01/19/046252&from=rss)

* [Anthropologists Offer New Evidence of Bipedalism in Long-Debated Fossil Discovery](https://soylentnews.org/article.pl?sid=26/01/18/0043231&from=rss)

* [New Studies Can Explain Why Comet 3I/Atlas Isn't an Alien (Probably)](https://soylentnews.org/article.pl?sid=26/01/19/0357224&from=rss)

## Unique Perspectives and Creative Achievements

* [3D printing my laptop ergonomic setup](https://ntietz.com/blog/3d-printing-my-laptop-ergonomic-setup)

* [Lessons from creating a gaming-oriented scheduler](https://lwn.net/Articles/1051430/)

* [My week with opencode](https://deadsimpletech.com/blog/week_with_opencode)

* [The Zen of Reticulum](https://github.com/markqvist/Reticulum/blob/master/Zen%20of%20Reticulum.md)

* [The Overcomplexity of the Shadcn Radio Button](https://paulmakeswebsites.com/writing/shadcn-radio-button/)

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

* [2026-01-20, 15:55:08](https://lobste.rs/s/sxfpbp/nvidia_stock_crash_prediction) - [Nvidia Stock Crash Prediction](https://entropicthoughts.com/nvidia-stock-crash-prediction)
* [2026-01-20, 15:29:00](https://hardware.slashdot.org/story/26/01/20/1529245/energy-costs-will-decide-which-countries-win-the-ai-race-microsofts-nadella-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Energy Costs Will Decide Which Countries Win the AI Race, Microsoft&apos;s Nadella Says](https://hardware.slashdot.org/story/26/01/20/1529245/energy-costs-will-decide-which-countries-win-the-ai-race-microsofts-nadella-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 15:11:45](https://news.ycombinator.com/item?id=46692594) - [Danish pension fund divesting US Treasuries](https://www.reuters.com/business/danish-pension-fund-divest-its-us-treasuries-2026-01-20/)
* [2026-01-20, 14:40:00](https://news.slashdot.org/story/26/01/20/1411250/amazon-ceo-jassy-says-tariffs-have-started-to-creep-into-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon CEO Jassy Says Tariffs Have Started To &apos;Creep&apos; Into Prices](https://news.slashdot.org/story/26/01/20/1411250/amazon-ceo-jassy-says-tariffs-have-started-to-creep-into-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 14:38:22](https://lobste.rs/s/tldid3/ip_addresses_through_2025) - [IP Addresses Through 2025](https://www.potaroo.net/ispcol/2026-01/addr2025.html)
* [2026-01-20, 14:24:13](https://lobste.rs/s/hrsaz6/unconventional_postgresql) - [Unconventional PostgreSQL Optimizations](https://hakibenita.com/postgresql-unconventional-optimizations)
* [2026-01-20, 14:22:00](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss) - [Mosquitoes&apos; Thirst for Human Blood Has Increased as Biodiversity Loss Worsens](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss)
* [2026-01-20, 14:17:37](https://news.ycombinator.com/item?id=46692052) - [Europe could &apos;weaponize&apos; $10T of US assets over Greenland](https://www.bloomberg.com/news/articles/2026-01-19/-weaponizing-10-trillion-of-us-assets-is-tough-ask-for-europe)
* [2026-01-20, 14:00:00](https://entertainment.slashdot.org/story/26/01/20/1356253/sony-is-ceding-control-of-tv-hardware-business-to-chinas-tcl?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Is Ceding Control of TV Hardware Business To China&apos;s TCL](https://entertainment.slashdot.org/story/26/01/20/1356253/sony-is-ceding-control-of-tv-hardware-business-to-chinas-tcl?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 13:51:03](https://news.ycombinator.com/item?id=46691835) - [IP Addresses Through 2025](https://www.potaroo.net/ispcol/2026-01/addr2025.html)
* [2026-01-20, 13:48:11](https://lobste.rs/s/nsjybj/why_alter_table_is_such_problem_for_sqlite) - [Why ALTER TABLE is such a problem for SQLite](https://www.sqlite.org/lang_altertable.html#why_alter_table_is_such_a_problem_for_sqlite)
* [2026-01-20, 13:34:16](https://news.ycombinator.com/item?id=46691660) - [The Zen of Reticulum](https://github.com/markqvist/Reticulum/blob/master/Zen%20of%20Reticulum.md)
* [2026-01-20, 13:16:22](https://lobste.rs/s/oxeeyz/my_week_with_opencode) - [My week with opencode](https://deadsimpletech.com/blog/week_with_opencode)
* [2026-01-20, 13:10:08](https://news.ycombinator.com/item?id=46691454) - [Show HN: Ocrbase – pdf → .md/.json document OCR and structured extraction API](https://github.com/majcheradam/ocrbase)
* [2026-01-20, 13:00:00](https://developers.slashdot.org/story/26/01/20/0112259/just-because-linus-torvalds-vibe-codes-doesnt-mean-its-a-good-idea?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Just Because Linus Torvalds Vibe Codes Doesn&apos;t Mean It&apos;s a Good Idea&apos;](https://developers.slashdot.org/story/26/01/20/0112259/just-because-linus-torvalds-vibe-codes-doesnt-mean-its-a-good-idea?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 12:12:54](https://lobste.rs/s/1obt9w/lost_art_xml) - [The lost art of XML](https://marcosmagueta.com/blog/the-lost-art-of-xml/)
* [2026-01-20, 12:00:31](https://news.ycombinator.com/item?id=46690920) - [Channel3 (YC S25) Is Hiring](https://www.ycombinator.com/companies/channel3/jobs/3DIAYYY-backend-engineer)
* [2026-01-20, 11:58:34](https://news.ycombinator.com/item?id=46690907) - [Running Claude Code dangerously (safely)](https://blog.emilburzo.com/2026/01/running-claude-code-dangerously-safely/)
* [2026-01-20, 11:06:54](https://news.ycombinator.com/item?id=46690530) - [IP over Avian Carriers with Quality of Service (1999)](https://www.rfc-editor.org/rfc/rfc2549.html)
* [2026-01-20, 10:54:51](https://lobste.rs/s/fsq2qu/static_site_generator_written_posix) - [A static site generator written in POSIX shell](https://aashvik.com/posts/shell-ssg)
* [2026-01-20, 10:47:25](https://news.ycombinator.com/item?id=46690402) - [I&apos;m addicted to being useful](https://www.seangoedecke.com/addicted-to-being-useful/)
* [2026-01-20, 10:02:17](https://news.ycombinator.com/item?id=46690092) - [Kiss Launcher – fast launcher for Android](https://kisslauncher.com/)
* [2026-01-20, 10:00:00](https://news.slashdot.org/story/26/01/20/0053209/ocean-damage-nearly-doubles-the-cost-of-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ocean Damage Nearly Doubles the Cost of Climate Change](https://news.slashdot.org/story/26/01/20/0053209/ocean-damage-nearly-doubles-the-cost-of-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 09:44:51](https://lobste.rs/s/egujjx/ai_is_still_making_code_worse_new_cmu_study) - [AI Is still making code worse: A new CMU study confirms (2025)](https://blog.robbowley.net/2025/12/04/ai-is-still-making-code-worse-a-new-cmu-study-confirms/)
* [2026-01-20, 09:34:00](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss) - [New Studies Can Explain Why Comet 3I/Atlas Isn&apos;t an Alien (Probably)](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss)
* [2026-01-20, 09:01:25](https://lobste.rs/s/parmy3/giving_university_exams_age_chatbots) - [Giving University Exams in the Age of Chatbots](https://ploum.net/2026-01-19-exam-with-chatbots.html)
* [2026-01-20, 08:48:42](https://lobste.rs/s/zwfx0h/apple_s_protect_mail_activity_doesn_t_work) - [Apple&apos;s \&quot;Protect Mail Activity\&quot; Doesn&apos;t Work](https://www.grepular.com/Apples_Protect_Mail_Activity_Doesnt_Work)
* [2026-01-20, 08:31:31](https://lobste.rs/s/5jvboe/lessons_from_creating_gaming_oriented) - [Lessons from creating a gaming-oriented scheduler](https://lwn.net/Articles/1051430/)
* [2026-01-20, 07:51:12](https://news.ycombinator.com/item?id=46689065) - [Linux kernel framework for PCIe device emulation, in userspace](https://github.com/cakehonolulu/pciem)
* [2026-01-20, 07:35:09](https://news.ycombinator.com/item?id=46688971) - [The Overcomplexity of the Shadcn Radio Button](https://paulmakeswebsites.com/writing/shadcn-radio-button/)
* [2026-01-20, 07:32:58](https://news.ycombinator.com/item?id=46688954) - [Giving university exams in the age of chatbots](https://ploum.net/2026-01-19-exam-with-chatbots.html)
* [2026-01-20, 07:00:00](https://entertainment.slashdot.org/story/26/01/20/0045220/bank-of-england-must-plan-for-a-financial-crisis-triggered-by-aliens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bank of England &apos;Must Plan For a Financial Crisis Triggered By Aliens&apos;](https://entertainment.slashdot.org/story/26/01/20/0045220/bank-of-england-must-plan-for-a-financial-crisis-triggered-by-aliens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 06:08:05](https://lobste.rs/s/u9mo7b/3d_printing_my_laptop_ergonomic_setup) - [3D printing my laptop ergonomic setup](https://ntietz.com/blog/3d-printing-my-laptop-ergonomic-setup/)
* [2026-01-20, 05:08:08](https://lobste.rs/s/mkrhf6/what_came_first_cname_record) - [What came first: the CNAME or the A record?](https://blog.cloudflare.com/cname-a-record-order-dns-standards/)
* [2026-01-20, 04:44:00](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss) - [Stellantis Drops Jeep, Chrysler Plug-in Hybrids Amid EV Sales Slowdown](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss)
* [2026-01-20, 03:55:21](https://lobste.rs/s/ymhppr/llms_your_career) - [LLMs and your career](https://notes.eatonphil.com/2026-01-19-llms-and-your-career.html)
* [2026-01-20, 03:47:21](https://news.ycombinator.com/item?id=46687705) - [x86 prefixes and escape opcodes flowchart](https://soc.me/interfaces/x86-prefixes-and-escape-opcodes-flowchart.html)
* [2026-01-20, 03:30:00](https://science.slashdot.org/story/26/01/19/2332237/the-fastest-human-spaceflight-mission-in-history-crawls-closer-to-liftoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Fastest Human Spaceflight Mission In History Crawls Closer To Liftoff](https://science.slashdot.org/story/26/01/19/2332237/the-fastest-human-spaceflight-mission-in-history-crawls-closer-to-liftoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 02:30:00](https://science.slashdot.org/story/26/01/19/2324236/the-worlds-longest-running-lab-experiment-is-almost-100-years-old?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The World&apos;s Longest-Running Lab Experiment Is Almost 100 Years Old](https://science.slashdot.org/story/26/01/19/2324236/the-worlds-longest-running-lab-experiment-is-almost-100-years-old?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 01:50:00](https://tech.slashdot.org/story/26/01/19/2341242/germanys-ev-subsidies-will-include-chinese-brands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Germany&apos;s EV Subsidies Will Include Chinese Brands](https://tech.slashdot.org/story/26/01/19/2341242/germanys-ev-subsidies-will-include-chinese-brands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 01:23:58](https://lobste.rs/s/yzsckk/prediction_within_15_years_microsoft) - [Prediction: Within 15 years Microsoft will discontinue Windows in favor of a Windows themed Linux distribution](https://gamesbymason.com/blog/2026/microsoft/)
* [2026-01-20, 01:10:00](https://news.slashdot.org/story/26/01/19/2320223/a-second-us-sphere-could-come-to-maryland?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Second US Sphere Could Come To Maryland](https://news.slashdot.org/story/26/01/19/2320223/a-second-us-sphere-could-come-to-maryland?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 01:01:36](https://news.ycombinator.com/item?id=46686640) - [Porsche sold more electrified cars in Europe in 2025 than pure gas-powered cars](https://newsroom.porsche.com/en/2026/company/porsche-deliveries-2025-41516.html)
* [2026-01-20, 00:30:00](https://yro.slashdot.org/story/26/01/19/2257241/nvidia-contacted-annas-archive-to-secure-access-to-millions-of-pirated-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Contacted Anna&apos;s Archive To Secure Access To Millions of Pirated Books](https://yro.slashdot.org/story/26/01/19/2257241/nvidia-contacted-annas-archive-to-secure-access-to-millions-of-pirated-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 00:23:01](https://news.ycombinator.com/item?id=46686418) - [Scaling long-running autonomous coding](https://simonwillison.net/2026/Jan/19/scaling-long-running-autonomous-coding/)
* [2026-01-20, 00:02:00](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss) - [Anthropologists Offer New Evidence of Bipedalism in Long-Debated Fossil Discovery](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss)
* [2026-01-19, 23:59:54](https://news.ycombinator.com/item?id=46686273) - [Reticulum, a secure and anonymous mesh networking stack](https://github.com/markqvist/Reticulum)
* [2026-01-19, 23:50:00](https://devices.slashdot.org/story/26/01/19/2249208/openai-cfo-says-annualized-revenue-crosses-20-billion-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI CFO Says Annualized Revenue Crosses $20 Billion In 2025](https://devices.slashdot.org/story/26/01/19/2249208/openai-cfo-says-annualized-revenue-crosses-20-billion-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 23:39:57](https://news.ycombinator.com/item?id=46686131) - [3D printing my laptop ergonomic setup](https://www.ntietz.com/blog/3d-printing-my-laptop-ergonomic-setup/)
* [2026-01-19, 23:10:00](https://tech.slashdot.org/story/26/01/19/2240209/threads-usage-overtakes-x-on-mobile?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Threads Usage Overtakes X On Mobile](https://tech.slashdot.org/story/26/01/19/2240209/threads-usage-overtakes-x-on-mobile?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 22:22:00](https://yro.slashdot.org/story/26/01/19/2221237/congress-wants-to-hand-your-parenting-to-big-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Congress Wants To Hand Your Parenting To Big Tech](https://yro.slashdot.org/story/26/01/19/2221237/congress-wants-to-hand-your-parenting-to-big-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 22:21:20](https://lobste.rs/s/nbsclr/floating_point_printing_parsing_can_be) - [Floating-Point Printing and Parsing Can Be Simple And Fast](https://research.swtch.com/fp)
* [2026-01-19, 22:07:47](https://lobste.rs/s/fsqjwr/personal_infrastructure_setup_2026) - [Personal infrastructure setup 2026](https://linderud.dev/blog/personal-infrastructure-setup-2026/)
* [2026-01-19, 21:48:07](https://news.ycombinator.com/item?id=46684958) - [Nanolang: A tiny experimental language designed to be targeted by coding LLMs](https://github.com/jordanhubbard/nanolang)
* [2026-01-19, 21:35:31](https://news.ycombinator.com/item?id=46684815) - [Targeted Bets: An alternative approach to the job hunt](https://www.seanmuirhead.com/blog/targeted-bets)
* [2026-01-19, 21:30:00](https://it.slashdot.org/story/26/01/19/1955239/rackspace-customers-grapple-with-devastating-email-hosting-price-hike?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rackspace Customers Grapple With &apos;Devastating&apos; Email Hosting Price Hike](https://it.slashdot.org/story/26/01/19/1955239/rackspace-customers-grapple-with-devastating-email-hosting-price-hike?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 20:26:19](https://news.ycombinator.com/item?id=46684056) - [Level S4 solar radiation event](https://www.swpc.noaa.gov/news/g4-severe-geomagnetic-storm-levels-reached-19-jan-2026)
* [2026-01-19, 20:11:38](https://lobste.rs/s/bv4yod/only_two_markup_languages) - [The Only Two Markup Languages](https://www.gingerbill.org/article/2026/01/19/two-families-of-markup-languages/)
* [2026-01-19, 19:59:50](https://lobste.rs/s/ekkm0z/understanding_c_ownership_system) - [Understanding C++ Ownership System](https://blog.aiono.dev/posts/understanding-c++-ownership-system.html)
* [2026-01-19, 19:11:00](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss) - [Linux Mint 22.3 “Zena” is Now Available for Download, Here&apos;s What&apos;s New](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss)
* [2026-01-19, 18:36:41](https://lobste.rs/s/bemom7/incredible_overcomplexity_shadcn_radio) - [The Incredible Overcomplexity of the Shadcn Radio Button](https://paulmakeswebsites.com/writing/shadcn-radio-button/)
* [2026-01-19, 18:15:48](https://news.ycombinator.com/item?id=46682518) - [Notes on Apple&apos;s Nano Texture (2025)](https://jon.bo/posts/nano-texture/)
* [2026-01-19, 17:13:59](https://news.ycombinator.com/item?id=46681611) - [What came first: the CNAME or the A record?](https://blog.cloudflare.com/cname-a-record-order-dns-standards/)
* [2026-01-19, 16:36:11](https://news.ycombinator.com/item?id=46680974) - [Apple testing new App Store design that blurs the line between ads and results](https://9to5mac.com/2026/01/16/iphone-apple-app-store-search-results-ads-new-design/)
* [2026-01-19, 14:38:00](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss) - [Anything-Goes “Anyons” May be at the Root of Surprising Quantum Experiments](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss)
* [2026-01-19, 11:21:45](https://lobste.rs/s/8nv2w5/tale_udp_tracking_hytale_server_auto_stop) - [A Tale of UDP tracking: Hytale server auto stop and start with systemd](https://nwildner.com/posts/2026-01-19-hytale/)
* [2026-01-19, 09:45:00](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss) - [AI and the Corporate Capture of Knowledge](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss)
* [2026-01-19, 07:57:04](https://news.ycombinator.com/item?id=46676081) - [The coming industrialisation of exploit generation with LLMs](https://sean.heelan.io/2026/01/18/on-the-coming-industrialisation-of-exploit-generation-with-llms/)
* [2026-01-19, 06:28:55](https://lobste.rs/s/f6zsyd/are_arrays_functions) - [Are arrays functions?](https://futhark-lang.org/blog/2026-01-16-are-arrays-functions.html)
* [2026-01-19, 05:03:00](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss) - [AWS Flips Switch on Euro Cloud as Customers Fret About Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss)
* [2026-01-19, 02:25:35](https://lobste.rs/s/docfzx/people_cannot_just_pay_attention_boring) - [People cannot \&quot;just pay attention\&quot; to (boring, routine) things](https://utcc.utoronto.ca/~cks/space/blog/tech/PeopleCannotPayAttention)
* [2026-01-19, 00:22:00](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss) - [Are You Dead?](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss)
* [2026-01-18, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss) - [How Screwed is Generation Alpha, and the Generations Which Will Depend on Them?](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss)
* [2026-01-18, 18:20:25](https://news.ycombinator.com/item?id=46670524) - [Prediction markets are ushering in a world in which news becomes about gambling](https://www.theatlantic.com/technology/2026/01/america-polymarket-disaster/685662/)
* [2026-01-18, 17:17:04](https://lobste.rs/s/ngwloq/how_lobsters_front_page_works) - [How the Lobsters front page works](https://atharvaraykar.com/lobsters/)
* [2026-01-18, 14:50:00](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss) - [Hobby FPV Drone Developer Breaks 400mph Limit With New World Record](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss)
* [2026-01-18, 11:02:03](https://lobste.rs/s/0pxvyd/agent_psychosis_are_we_going_insane) - [Agent Psychosis: Are We Going Insane?](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/)
* [2026-01-18, 10:03:00](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss) - [Sorry, Eh](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss)
* [2026-01-18, 05:13:00](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss) - [Linux Kernel Bugs Hide for 2+ Years on Average](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss)
* [2026-01-18, 00:29:00](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss) - [Wormholes May Not Exist—We&apos;ve Found They Reveal Something Deeper About Time and the Universe](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss)
* [2026-01-17, 19:43:00](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss) - [&apos;Society Cannot Function If No One is Accountable for AI&apos; — Jaron Lanier](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss)
* [2026-01-17, 15:00:00](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss) - [Why Flies Matter, Their Vital Role in Ecosystems, and Surprising Diversity](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss)
* [2026-01-17, 10:18:00](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss) - [Researchers Expose WHILL Wheelchair Safety Risks Via Remote Hacking](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss)
* [2026-01-17, 05:30:00](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss) - [Signal Creator Moxie Marlinspike Wants to Do for AI What He Did for Messaging](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss)
* [2026-01-17, 00:42:00](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss) - [X Didn&apos;t Fix Grok&apos;s ‘Undressing’ Problem. It Just Makes People Pay for It](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss)
* [2026-01-16, 20:00:00](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss) - [Meta to Cut More than 1,000 Jobs as its Shifts Focus to AI Wearables](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss)
* [2026-01-16, 15:23:00](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss) - [You Need A Kitchen Slide Rule](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss)
* [2026-01-16, 14:48:06](https://news.ycombinator.com/item?id=46646870) - [Benchmarking a Baseline Fully-in-Place Functional Language Compiler [pdf]](https://trendsfp.github.io/papers/tfp26-paper-12.pdf)
* [2026-01-16, 10:30:00](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss) - [Over Half a Million Windows Users are Switching to Linux](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss)
* [2026-01-16, 05:47:00](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss) - [BreachForum Breach](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss)
* [2026-01-16, 02:53:21](https://news.ycombinator.com/item?id=46642458) - [British redcoat&apos;s lost memoir reveals realities of life as a disabled veteran](https://phys.org/news/2026-01-british-redcoat-lost-memoir-reveals.html)
* [2026-01-16, 01:06:00](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss) - [Survey: Even Meta And Microsoft Engineers Ditch Company AI For Claude](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss)
