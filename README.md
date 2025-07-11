# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI Developments

* [OpenAI's Windsurf deal is off – and its CEO is going to Google](https://www.theverge.com/openai/705999/google-windsurf-ceo-openai) ([Comments](https://news.ycombinator.com/item?id=44536988))

* [Activeloop (YC S18) Is Hiring AI Search and Python Back End Engineers(Onsite, MV)](https://careers.activeloop.ai/) ([Comments](https://news.ycombinator.com/item?id=44536748))

* [ETH Zurich and EPFL to release a LLM developed on public infrastructure](https://ethz.ch/en/news-and-events/eth-news/news/2025/07/a-language-model-built-for-the-public-good.html) ([Comments](https://news.ycombinator.com/item?id=44535637))

* [AI agent benchmarks are broken](https://ddkang.substack.com/p/ai-agent-benchmarks-are-broken) ([Comments](https://news.ycombinator.com/item?id=44531697))

* [Jai Demo and Design Explanation](https://www.youtube.com/watch?v=IdpD5QIVOKQ) ([Comments](https://lobste.rs/s/1batvy/measuring_impact_early_2025_ai_on))

## Innovations and Research

* [Psilocybin Treatment Extends Cellular Lifespan, Improves Survival of Aged Mice](https://science.slashdot.org/story/25/07/11/0354259/psilocybin-treatment-extends-cellular-lifespan-improves-survival-of-aged-mice?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=44530767))

* [Compact GeV Proton Acceleration Using Ultra-Intense Lasers](https://soylentnews.org/article.pl?sid=25/07/09/1058230) ([Comments](https://news.ycombinator.com/item?id=44529387))

* [Why Don’t Bats Get Cancer? Researchers Discover Protection From Genes and Strong Immune Systems](https://soylentnews.org/article.pl?sid=25/07/07/0139229) ([Comments](https://news.ycombinator.com/item?id=44512057))

* [Measuring power network frequency using junk you have in your closet](https://halcy.de/blog/2025/02/09/measuring-power-network-frequency-using-junk-you-have-in-your-closet/) ([Comments](https://lobste.rs/s/ogfcwa/measuring_power_network_frequency_using))

## Social and Cultural Insights

* [In a First, Solar Was Europe's Biggest Source of Power Last Month](https://e360.yale.edu/digest/solar-biggest-power-source-europe-june-2025) ([Comments](https://news.ycombinator.com/item?id=44533843))

* [Lead pigment in turmeric is the culprit in a global poisoning mystery (2024)](https://www.npr.org/sections/goats-and-soda/2024/09/23/nx-s1-5011028/detectives-mystery-lead-poisoning-new-york-bangladesh) ([Comments](https://news.ycombinator.com/item?id=44533337))

* [Few Danes Work Until Official Retirement Age as Government Pushes It to 70](https://slashdot.org/story/25/07/11/1734217/few-danes-work-until-official-retirement-age-as-government-pushes-it-to-70?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=44532306))

* [First Leisure Swim for Parisians Into the Seine in More Than a Century](https://soylentnews.org/article.pl?sid=25/07/06/2238227) ([Comments](https://news.ycombinator.com/item?id=44503536))

## Cybersecurity Updates

* [Cybersecurity Risk Assessment Request](https://daniel.haxx.se/blog/2025/07/11/cybersecurity-risk-assessment-request/) ([Comments](https://lobste.rs/s/c5cxwu/cybersecurity_risk_assessment_request))

* [Google nerfs Pixel 6a batteries following fire hazard](https://arstechnica.com/gadgets/2025/07/a-mess-of-its-own-making-google-nerfs-second-pixel-phone-battery-this-year/) ([Comments](https://news.ycombinator.com/item?id=44535604))

* [Russian Basketball Player Arrested in France Over Alleged Ransomware Ties](https://yro.slashdot.org/story/25/07/11/1515207/russian-basketball-player-arrested-in-france-over-alleged-ransomware-ties?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=44533982))

* [New Android TapTrap Attack Fools Users With Invisible UI Trick](https://soylentnews.org/article.pl?sid=25/07/11/114218&from=rss) ([Comments](https://news.ycombinator.com/item?id=44534787))

## Memorable Personal and Technical Stories

* [Rethinking our Adoption Strategy](https://www.youtube.com/watch?v=YPAaUFGrlEE) ([Comments](https://lobste.rs/s/k6njx6/rethinking_our_adoption_strategy))

* [I’m more proud of these 128 kilobytes than anything I’ve built since](https://medium.com/@mikehall314/im-more-proud-of-these-128-kilobytes-than-anything-i-ve-built-since-53706cfbdc18) ([Comments](https://news.ycombinator.com/item?id=44536248))

* [Show HN: RULER – Easily apply RL to any agent](https://openpipe.ai/blog/ruler) ([Comments](https://news.ycombinator.com/item?id=44535078))

* [The day someone created 184 billion Bitcoin (2020)](https://decrypt.co/39750/184-billion-bitcoin-anonymous-creator) ([Comments](https://news.ycombinator.com/item?id=44528509))

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

* [2025-07-11, 21:35:31](https://news.ycombinator.com/item?id=44536988) - [OpenAI&apos;s Windsurf deal is off – and its CEO is going to Google](https://www.theverge.com/openai/705999/google-windsurf-ceo-openai)
* [2025-07-11, 21:22:00](https://apple.slashdot.org/story/25/07/11/1812202/apple-adds-2013-mac-pro-2019-macbook-air-airports-to-vintage-list?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Adds 2013 Mac Pro, 2019 MacBook Air, AirPorts To Vintage List](https://apple.slashdot.org/story/25/07/11/1812202/apple-adds-2013-mac-pro-2019-macbook-air-airports-to-vintage-list?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-11, 21:01:21](https://news.ycombinator.com/item?id=44536748) - [Activeloop (YC S18) Is Hiring AI Search and Python Back End Engineers(Onsite,MV)](https://careers.activeloop.ai/)
* [2025-07-11, 20:51:56](https://news.ycombinator.com/item?id=44536691) - [Air India Flight 171 Accident Preliminary Report [pdf]](https://aaib.gov.in/What%27s%20New%20Assets/Preliminary%20Report%20VT-ANB.pdf)
* [2025-07-11, 20:40:00](https://science.slashdot.org/story/25/07/11/1750256/us-abandons-hunt-for-signal-of-cosmic-inflation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Abandons Hunt For Signal of Cosmic Inflation](https://science.slashdot.org/story/25/07/11/1750256/us-abandons-hunt-for-signal-of-cosmic-inflation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-11, 20:26:40](https://lobste.rs/s/k6njx6/rethinking_our_adoption_strategy) - [Rethinking our Adoption Strategy](https://www.youtube.com/watch?v=YPAaUFGrlEE)
* [2025-07-11, 20:00:00](https://news.slashdot.org/story/25/07/11/1741218/earth-is-spinning-faster-and-days-are-getting-shorter-for-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Earth Is Spinning Faster and Days Are Getting Shorter, for Now](https://news.slashdot.org/story/25/07/11/1741218/earth-is-spinning-faster-and-days-are-getting-shorter-for-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-11, 19:55:39](https://news.ycombinator.com/item?id=44536248) - [I&apos;m more proud of these 128 kilobytes than anything I&apos;ve built since](https://medium.com/@mikehall314/im-more-proud-of-these-128-kilobytes-than-anything-i-ve-built-since-53706cfbdc18)
* [2025-07-11, 19:53:43](https://lobste.rs/s/ogfcwa/measuring_power_network_frequency_using) - [Measuring power network frequency using junk you have in your closet](https://halcy.de/blog/2025/02/09/measuring-power-network-frequency-using-junk-you-have-in-your-closet/)
* [2025-07-11, 19:46:00](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss) - [New Android TapTrap Attack Fools Users With Invisible UI Trick](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss)
* [2025-07-11, 19:29:00](https://lobste.rs/s/rqkuul/placing_functions) - [Placing functions](https://blog.yoshuawuyts.com/placing-functions/)
* [2025-07-11, 19:26:05](https://lobste.rs/s/ugyxdj/new_date_wtf) - [new Date(\&quot;wtf\&quot;)](https://jsdate.wtf/)
* [2025-07-11, 19:24:24](https://news.ycombinator.com/item?id=44535977) - [Introduction to Digital Filters](https://ccrma.stanford.edu/~jos/filters/)
* [2025-07-11, 19:24:07](https://lobste.rs/s/ltp2yr/wasm_hard_way_porting_chicory_compiler) - [Wasm the Hard Way: Porting the Chicory Compiler to Android](https://blog.evacchi.dev/posts/2025/07/11/wasm-the-hard-way-porting-the-chicory-compiler-to-android/)
* [2025-07-11, 19:20:00](https://slashdot.org/story/25/07/11/1734217/few-danes-work-until-official-retirement-age-as-government-pushes-it-to-70?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Few Danes Work Until Official Retirement Age as Government Pushes It to 70](https://slashdot.org/story/25/07/11/1734217/few-danes-work-until-official-retirement-age-as-government-pushes-it-to-70?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-11, 18:45:10](https://news.ycombinator.com/item?id=44535637) - [ETH Zurich and EPFL to release a LLM developed on public infrastructure](https://ethz.ch/en/news-and-events/eth-news/news/2025/07/a-language-model-built-for-the-public-good.html)
* [2025-07-11, 18:41:14](https://news.ycombinator.com/item?id=44535604) - [Google nerfs Pixel 6a batteries following fire hazard](https://arstechnica.com/gadgets/2025/07/a-mess-of-its-own-making-google-nerfs-second-pixel-phone-battery-this-year/)
* [2025-07-11, 18:40:00](https://news.slashdot.org/story/25/07/11/1728246/how-hot-can-it-get-literally-scientists-weigh-in?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Hot Can It Get, Literally? Scientists Weigh In](https://news.slashdot.org/story/25/07/11/1728246/how-hot-can-it-get-literally-scientists-weigh-in?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-11, 18:01:35](https://lobste.rs/s/w7ft2q/evtx_viewer_windows_event_log_explorer) - [EVTX Viewer - Windows Event Log Explorer](https://omerbenamram.github.io/evtx/)
* [2025-07-11, 18:00:00](https://entertainment.slashdot.org/story/25/07/11/1613249/saving-a-studio-this-looks-like-a-job-for-superman?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Saving a Studio? This Looks Like a Job for Superman!](https://entertainment.slashdot.org/story/25/07/11/1613249/saving-a-studio-this-looks-like-a-job-for-superman?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-11, 17:47:36](https://news.ycombinator.com/item?id=44535078) - [Show HN: RULER – Easily apply RL to any agent](https://openpipe.ai/blog/ruler)
* [2025-07-11, 17:39:49](https://lobste.rs/s/c5cxwu/cybersecurity_risk_assessment_request) - [Cybersecurity Risk Assessment Request](https://daniel.haxx.se/blog/2025/07/11/cybersecurity-risk-assessment-request/)
* [2025-07-11, 17:22:01](https://news.ycombinator.com/item?id=44534787) - [jank is C++](https://jank-lang.org/blog/2025-07-11-jank-is-cpp/)
* [2025-07-11, 17:21:43](https://lobste.rs/s/eagdbx/jank_is_c) - [jank is C++](https://jank-lang.org/blog/2025-07-11-jank-is-cpp/)
* [2025-07-11, 17:20:00](https://tech.slashdot.org/story/25/07/11/1520202/belkin-ending-support-for-most-wemo-smart-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Belkin Ending &apos;Support&apos; For Most Wemo Smart Devices](https://tech.slashdot.org/story/25/07/11/1520202/belkin-ending-support-for-most-wemo-smart-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-11, 17:19:55](https://lobste.rs/s/ccyux0/building_simple_router_with_openbsd) - [Building a Simple Router with OpenBSD](https://btxx.org/posts/openbsd-router/)
* [2025-07-11, 16:40:00](https://yro.slashdot.org/story/25/07/11/1515207/russian-basketball-player-arrested-in-france-over-alleged-ransomware-ties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Basketball Player Arrested in France Over Alleged Ransomware Ties](https://yro.slashdot.org/story/25/07/11/1515207/russian-basketball-player-arrested-in-france-over-alleged-ransomware-ties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-11, 16:19:13](https://news.ycombinator.com/item?id=44533982) - [Pa. House passes &apos;click-to-cancel&apos; subscription bills](https://www.pennlive.com/news/2025/07/pa-house-passes-click-to-cancel-subscription-bills-as-court-throws-out-federal-rule.html)
* [2025-07-11, 16:09:04](https://news.ycombinator.com/item?id=44533843) - [In a First, Solar Was Europe&apos;s Biggest Source of Power Last Month](https://e360.yale.edu/digest/solar-biggest-power-source-europe-june-2025)
* [2025-07-11, 16:00:00](https://slashdot.org/story/25/07/11/1432259/jamie-dimons-blunt-message-for-europe-youre-losing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jamie Dimon&apos;s Blunt Message for Europe: &apos;You&apos;re Losing&apos;](https://slashdot.org/story/25/07/11/1432259/jamie-dimons-blunt-message-for-europe-youre-losing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-11, 15:43:20](https://news.ycombinator.com/item?id=44533464) - [Astronomers race to study interstellar interloper](https://www.science.org/content/article/astronomers-race-study-interstellar-interloper)
* [2025-07-11, 15:33:17](https://news.ycombinator.com/item?id=44533337) - [Lead pigment in turmeric is the culprit in a global poisoning mystery (2024)](https://www.npr.org/sections/goats-and-soda/2024/09/23/nx-s1-5011028/detectives-mystery-lead-poisoning-new-york-bangladesh)
* [2025-07-11, 15:21:00](https://slashdot.org/story/25/07/11/1425212/hmd-scaling-back-in-the-us-killing-nokia-all-over-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HMD &apos;Scaling Back&apos; in the US, Killing Nokia All Over Again](https://slashdot.org/story/25/07/11/1425212/hmd-scaling-back-in-the-us-killing-nokia-all-over-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-11, 15:19:42](https://lobste.rs/s/kphnsz/efficiency_sparse_hash_table) - [Efficiency of a sparse hash table](https://ashutoshpg.blogspot.com/2025/07/efficiency-of-sparse-hash-table.html)
* [2025-07-11, 15:08:52](https://news.ycombinator.com/item?id=44533004) - [Show HN: Vibe Kanban – Kanban board to manage your AI coding agents](https://github.com/BloopAI/vibe-kanban)
* [2025-07-11, 15:02:00](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss) - [What is AGI? Nobody Agrees, and It&apos;s Tearing Microsoft and OpenAI Apart.](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss)
* [2025-07-11, 14:40:00](https://developers.slashdot.org/story/25/07/11/1418225/coding-is-dead-university-of-washington-cs-program-rethinks-curriculum-for-the-ai-era?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Coding is Dead&apos;: University of Washington CS Program Rethinks Curriculum For the AI Era](https://developers.slashdot.org/story/25/07/11/1418225/coding-is-dead-university-of-washington-cs-program-rethinks-curriculum-for-the-ai-era?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-11, 14:06:07](https://news.ycombinator.com/item?id=44532306) - [Upgrading an M4 Pro Mac mini&apos;s storage for half the price](https://www.jeffgeerling.com/blog/2025/upgrading-m4-pro-mac-minis-storage-half-price)
* [2025-07-11, 14:00:00](https://news.slashdot.org/story/25/07/11/0755248/why-is-fertility-so-low-in-high-income-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Is Fertility So Low in High Income Countries?](https://news.slashdot.org/story/25/07/11/0755248/why-is-fertility-so-low-in-high-income-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-11, 13:33:17](https://lobste.rs/s/35tpxv/clustered_postgresql) - [Clustered PostgreSQL](https://arch.dog/bark/clustered-postgresql)
* [2025-07-11, 13:24:30](https://lobste.rs/s/vzkmtj/forget_borrow_checkers_c3_solved_memory) - [Forget Borrow Checkers: C3 Solved Memory Lifetimes With Scopes](https://c3-lang.org/blog/forget-borrow-checkers-c3-solved-memory-lifetimes-with-scopes/)
* [2025-07-11, 13:07:03](https://news.ycombinator.com/item?id=44531707) - [Overtourism in Japan, and how it hurts small businesses](https://craigmod.com/ridgeline/210/)
* [2025-07-11, 13:06:32](https://news.ycombinator.com/item?id=44531697) - [AI agent benchmarks are broken](https://ddkang.substack.com/p/ai-agent-benchmarks-are-broken)
* [2025-07-11, 13:00:00](https://news.slashdot.org/story/25/07/11/0359240/youtube-is-shutting-down-its-trending-page-after-10-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Is Shutting Down Its &apos;Trending&apos; Page After 10 Years](https://news.slashdot.org/story/25/07/11/0359240/youtube-is-shutting-down-its-trending-page-after-10-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-11, 12:53:27](https://news.ycombinator.com/item?id=44531569) - [Repaste Your MacBook](https://christianselig.com/2025/07/repaste-macbook/)
* [2025-07-11, 11:56:19](https://news.ycombinator.com/item?id=44531120) - [At Least 13 People Died by Suicide Amid U.K. Post Office Scandal, Report Says](https://www.nytimes.com/2025/07/10/world/europe/uk-post-office-scandal-report.html)
* [2025-07-11, 11:28:11](https://news.ycombinator.com/item?id=44530922) - [Recovering from AI addiction](https://internetaddictsanonymous.org/internet-and-technology-addiction/signs-of-an-addiction-to-ai/)
* [2025-07-11, 11:03:59](https://news.ycombinator.com/item?id=44530767) - [Bill Atkinson&apos;s psychedelic user interface](https://patternproject.substack.com/p/from-the-mac-to-the-mystical-bill)
* [2025-07-11, 10:00:00](https://science.slashdot.org/story/25/07/11/0354259/psilocybin-treatment-extends-cellular-lifespan-improves-survival-of-aged-mice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Psilocybin Treatment Extends Cellular Lifespan, Improves Survival of Aged Mice](https://science.slashdot.org/story/25/07/11/0354259/psilocybin-treatment-extends-cellular-lifespan-improves-survival-of-aged-mice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-11, 09:40:31](https://lobste.rs/s/dtj5hr/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/dtj5hr/what_are_you_doing_this_weekend)
* [2025-07-11, 09:22:27](https://lobste.rs/s/8zc40x/mill_build_tool_v1_0_0_release_highlights) - [Mill Build Tool v1.0.0 Release Highlights](https://mill-build.org/blog/13-mill-build-tool-v1-0-0.html)
* [2025-07-11, 08:15:00](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss) - [Nvidia Has Become the World’s First Company Worth $4 Trillion](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss)
* [2025-07-11, 07:34:00](https://lobste.rs/s/1r7tgd/not_so_fast_ai_coding_tools_can_actually) - [Not So Fast: AI Coding Tools Can Actually Reduce Productivity](https://secondthoughts.ai/p/ai-coding-slowdown)
* [2025-07-11, 07:00:00](https://science.slashdot.org/story/25/07/11/0349227/senator-calls-out-texas-for-trying-to-steal-shuttle-from-smithsonian?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Senator Calls Out Texas For Trying To Steal Shuttle From Smithsonian](https://science.slashdot.org/story/25/07/11/0349227/senator-calls-out-texas-for-trying-to-steal-shuttle-from-smithsonian?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-11, 06:57:22](https://lobste.rs/s/6bc2lv/sipgate_discovers_null_pointer) - [sipgate discovers null-pointer-dereference  in Mediatek VoLTE stack firmware](https://www.sipgate.de/blog/sipgate-discovers-null-pointer-dereference-in-mediatek-volte-stack-firmware)
* [2025-07-11, 06:27:19](https://news.ycombinator.com/item?id=44528943) - [OpenFront: Realtime Risk-like multiplayer game in the browser](https://openfront.io/)
* [2025-07-11, 04:51:51](https://news.ycombinator.com/item?id=44528509) - [The day someone created 184 billion Bitcoin (2020)](https://decrypt.co/39750/184-billion-bitcoin-anonymous-creator)
* [2025-07-11, 03:30:00](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss) - [Apple Just Released an Interesting Coding Language Model](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss)
* [2025-07-11, 02:40:32](https://news.ycombinator.com/item?id=44527947) - [LLM Inference Handbook](https://bentoml.com/llm/)
* [2025-07-11, 00:38:06](https://lobste.rs/s/aa7ske/anubis_now_supports_non_js_challenges) - [Anubis now supports non-JS challenges](https://anubis.techaro.lol/blog/release/v1.20.0/#no-js-challenge)
* [2025-07-11, 00:36:34](https://lobste.rs/s/z4jhtb/remembrance_matthew_s_trout_mst) - [A remembrance of Matthew S. Trout (mst)](https://curtispoe.org/blog/rip-mst.html)
* [2025-07-10, 23:04:03](https://lobste.rs/s/pzqxqm/postgres_listen_notify_does_not_scale) - [Postgres LISTEN/NOTIFY does not scale](https://www.recall.ai/blog/postgres-listen-notify-does-not-scale)
* [2025-07-10, 22:43:00](https://soylentnews.org/article.pl?sid=25/07/09/1114240&amp;from=rss) - [AI is Scraping the Web, but the Web is Fighting Back](https://soylentnews.org/article.pl?sid=25/07/09/1114240&amp;from=rss)
* [2025-07-10, 21:50:43](https://news.ycombinator.com/item?id=44526015) - [Show HN: Pangolin – Open source alternative to Cloudflare Tunnels](https://github.com/fosrl/pangolin)
* [2025-07-10, 20:11:28](https://lobste.rs/s/jjqmuu/almost_catastrophic_openzfs_bug_humans) - [An (almost) catastrophic OpenZFS bug and the humans that made it (and Rust is here too)](https://despairlabs.com/blog/posts/2025-07-10-an-openzfs-bug-and-the-humans-that-made-it/)
* [2025-07-10, 17:58:00](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss) - [Earth is Going to Spin Much Faster Over the Next Few Months](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss)
* [2025-07-10, 17:24:35](https://lobste.rs/s/1batvy/measuring_impact_early_2025_ai_on) - [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
* [2025-07-10, 15:21:38](https://lobste.rs/s/0yqrym/lessons_from_creating_my_first_text) - [Lessons From Creating My First Text Adventure](https://entropicthoughts.com/lessons-from-creating-first-text-adventure)
* [2025-07-10, 15:10:59](https://lobste.rs/s/eaumem/jai_demo_design_explanation) - [Jai Demo and Design Explanation](https://www.youtube.com/watch?v=IdpD5QIVOKQ)
* [2025-07-10, 14:36:01](https://lobste.rs/s/ta3s2j/what_s_go_nosplit_for) - [What&apos;s //go:nosplit for?](https://mcyoung.xyz/2025/07/07/nosplit/)
* [2025-07-10, 14:02:08](https://news.ycombinator.com/item?id=44521225) - [Andrew Ng: Building Faster with AI [video]](https://www.youtube.com/watch?v=RNJCfif1dPY)
* [2025-07-10, 13:14:00](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss) - [Compact GeV Proton Acceleration Using Ultra-Intense Lasers](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss)
* [2025-07-10, 11:26:12](https://lobste.rs/s/hngren/monitoring_my_homelab_simply) - [Monitoring my Homelab, Simply](https://b.tuxes.uk/simple-homelab-monitoring.html)
* [2025-07-10, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss) - [Shrinking Antarctic Sea Ice Is Warming The Ocean Faster Than Expected](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss)
* [2025-07-10, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss) - [The Curious Rise of Giant Tablets on Wheels](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss)
* [2025-07-09, 23:08:00](https://soylentnews.org/article.pl?sid=25/07/08/1129207&amp;from=rss) - [How to Stop Your LG or Samsung Smart TV From Tracking You](https://soylentnews.org/article.pl?sid=25/07/08/1129207&amp;from=rss)
* [2025-07-09, 18:18:00](https://soylentnews.org/article.pl?sid=25/07/08/1122201&amp;from=rss) - [EU Rattles its Purse and AI Datacenter Builders Come Running](https://soylentnews.org/article.pl?sid=25/07/08/1122201&amp;from=rss)
* [2025-07-09, 13:28:00](https://soylentnews.org/article.pl?sid=25/07/08/1113258&amp;from=rss) - [MIT Engineers Develop Electrochemical Sensors for Cheap, Disposable Diagnostics](https://soylentnews.org/article.pl?sid=25/07/08/1113258&amp;from=rss)
* [2025-07-09, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/07/2242255&amp;from=rss) - [Stop Killing Games Finally Reaches One Million Signature Milestone, but There&apos;s a Pretty Big Catch](https://soylentnews.org/article.pl?sid=25/07/07/2242255&amp;from=rss)
* [2025-07-09, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/07/2215236&amp;from=rss) - [Inside the Australian Lab Growing a Biological Computer](https://soylentnews.org/article.pl?sid=25/07/07/2215236&amp;from=rss)
* [2025-07-08, 23:02:00](https://soylentnews.org/article.pl?sid=25/07/07/0143225&amp;from=rss) - [A New Diabetes Treatment Could Free People From Insulin Injections](https://soylentnews.org/article.pl?sid=25/07/07/0143225&amp;from=rss)
* [2025-07-08, 21:33:50](https://news.ycombinator.com/item?id=44504250) - [Monorail – Turn CSS animations into interactive SVG graphs](https://muffinman.io/monorail/)
* [2025-07-08, 18:11:00](https://soylentnews.org/article.pl?sid=25/07/07/0139229&amp;from=rss) - [Why Don’t Bats Get Cancer? Researchers Discover Protection From Genes and Strong Immune Systems](https://soylentnews.org/article.pl?sid=25/07/07/0139229&amp;from=rss)
* [2025-07-08, 13:30:00](https://soylentnews.org/article.pl?sid=25/07/06/2318236&amp;from=rss) - [The European Commission&apos;s Call for Technical Advisors: Save Privacy](https://soylentnews.org/article.pl?sid=25/07/06/2318236&amp;from=rss)
* [2025-07-08, 08:45:00](https://soylentnews.org/article.pl?sid=25/07/06/2238227&amp;from=rss) - [First Leisure Swim for Parisians Into the Seine in More Than a Century](https://soylentnews.org/article.pl?sid=25/07/06/2238227&amp;from=rss)
* [2025-07-08, 04:31:00](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss) - [UK Eyes New Laws Over Cable Sabotage](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss)
* [2025-07-07, 23:45:00](https://soylentnews.org/article.pl?sid=25/07/06/1317252&amp;from=rss) - [Sniffnet - Comfortably Monitor Your Internet Traffic](https://soylentnews.org/article.pl?sid=25/07/06/1317252&amp;from=rss)
* [2025-07-07, 18:58:00](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss) - [See How the Herpes Virus Reshapes Our Cells’ DNA in Just Eight Hours](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss)
* [2025-07-07, 16:30:18](https://news.ycombinator.com/item?id=44492014) - [Batch Mode in the Gemini API: Process More for Less](https://developers.googleblog.com/en/scale-your-ai-workloads-batch-mode-gemini-api/)
* [2025-07-07, 14:14:00](https://soylentnews.org/article.pl?sid=25/07/06/136235&amp;from=rss) - [The Terrifying Truth About Why Tesla&apos;s Cars Keep Crashing](https://soylentnews.org/article.pl?sid=25/07/06/136235&amp;from=rss)
* [2025-07-07, 14:05:06](https://news.ycombinator.com/item?id=44490510) - [Postgres LISTEN/NOTIFY does not scale](https://www.recall.ai/blog/postgres-listen-notify-does-not-scale)
* [2025-07-07, 13:43:22](https://news.ycombinator.com/item?id=44490308) - [The ChompSaw: A benchtop power tool that&apos;s safe for kids to use](https://www.core77.com/posts/137602/The-ChompSaw-A-Benchtop-Power-Tool-Thats-Safe-for-Kids-to-Use)
* [2025-07-07, 09:31:00](https://soylentnews.org/article.pl?sid=25/07/06/131253&amp;from=rss) - [How to Fully Incapacitate Google Tag Manager and Why You Should (2022)](https://soylentnews.org/article.pl?sid=25/07/06/131253&amp;from=rss)
* [2025-07-07, 04:46:00](https://soylentnews.org/article.pl?sid=25/07/06/1250244&amp;from=rss) - [CISPE Warns EU Against Over-Regulation of Water](https://soylentnews.org/article.pl?sid=25/07/06/1250244&amp;from=rss)
* [2025-07-07, 00:00:00](https://soylentnews.org/article.pl?sid=25/07/06/1241242&amp;from=rss) - [Verizon Denies Legitimacy of 61 Million Records for Sale](https://soylentnews.org/article.pl?sid=25/07/06/1241242&amp;from=rss)
