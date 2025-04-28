# [News Summary](https://kherrick.github.io/news-summary/)

## Facial Recognition and Surveillance Concerns

* [Milwaukee Police Consider Trading Millions of Mugshots For Free Facial Recognition Access](https://yro.slashdot.org/story/25/04/28/1914200/milwaukee-police-consider-trading-millions-of-mugshots-for-free-facial-recognition-access?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Neurotech Companies Are Selling Brain Data, Senators Warn](https://slashdot.org/story/25/04/28/197227/neurotech-companies-are-selling-brain-data-senators-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [23andMe Requiring Potential Bidders To Affirm They Will Uphold Data Privacy](https://yro.slashdot.org/story/25/04/28/193247/23andme-requiring-potential-bidders-to-affirm-they-will-uphold-data-privacy?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Unauthorized AI Bot Experiment Infiltrated Reddit To Test Persuasion Capabilities](https://slashdot.org/story/25/04/28/1642223/unauthorized-ai-bot-experiment-infiltrated-reddit-to-test-persuasion-capabilities?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## AI Breakthroughs and Ethical Discussions

* [OpenAI Adds Shopping to ChatGPT in a Challenge to Google](https://www.wired.com/story/openai-adds-shopping-to-chatgpt/)

* [Qwen3: Think Deeper, Act Faster](https://qwenlm.github.io/blog/qwen3/)

* [AI Helps Unravel a Cause of Alzheimer’s Disease and Identify a Therapeutic Candidate](https://science.slashdot.org/story/25/04/28/0610254/ai-helps-unravel-a-cause-of-alzheimers-disease-and-identify-a-therapeutic-candidate?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Could a 'Math Genius' AI Co-author Proofs Within Three Years?](https://science.slashdot.org/story/25/04/28/0255248/could-a-math-genius-ai-co-author-proofs-within-three-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Developments in Cryptocurrency and Tech Regulation

* [Monero Likely Pumped 50% Due To Suspected $330 Million Bitcoin Theft](https://slashdot.org/story/25/04/28/198238/monero-likely-pumped-50-due-to-suspected-330-million-bitcoin-theft?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Kickstarter Introduces 'Tariff Manager Tool' To Add Charges To Already Fully Funded Projects](https://news.slashdot.org/story/25/04/28/1857213/kickstarter-introduces-tariff-manager-tool-to-add-charges-to-already-fully-funded-projects?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Emerging Technologies and Hardware Innovations

* [China's Huawei Develops New AI Chip, Seeking To Match Nvidia](https://slashdot.org/story/25/04/28/1727240/chinas-huawei-develops-new-ai-chip-seeking-to-match-nvidia?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Nuclear Fusion Pioneer Abandons Plan for Prototype Reactor, Will License Reaction-Boosting Nuclear Fuel Capsule](https://hardware.slashdot.org/story/25/04/28/013206/nuclear-fusion-pioneer-abandons-plan-for-prototype-reactor-will-license-reaction-boosting-nuclear-fuel-capsule?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [IBM Pledges $150 Billion US Investment](https://news.slashdot.org/story/25/04/28/1523232/ibm-pledges-150-billion-us-investment?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Insights into Engineering and Software Innovations

* [The design of software engineering course projects](https://austinhenley.com/blog/groupprojects.html)

* [Reanimation of the original Logic Theorist, the first AI, in IPL-V [video]](https://www.youtube.com/watch?v=qmE5o2ezqBg)

* [Vision Transformers Need Registers](https://arxiv.org/abs/2309.16588)

* [A Dependently Typed Assembly Language](https://www.cs.cmu.edu/~rwh/papers/dtal/OGI-CSE-99-008.pdf)

## Climate and Sustainability Updates

* [$8 Billion of US Climate Tech Projects Have Been Canceled So Far in 2025](https://soylentnews.org/article.pl?sid=25/04/28/044252&from=rss)

* [Reports of the death of California High-Speed Rail have been greatly exaggerated](https://asteriskmag.com/issues/10/reports-of-the-death-of-california-high-speed-rail-have-been-greatly-exaggerated)

## Creative and Entertainment Innovations

* [Legal art forgery, for the sake of movies](https://www.vanityfair.com/hollywood/2014/04/art-in-movies)

* [Boxie - an always offline audio player for my 3 year old](https://mariozechner.at/posts/2025-04-20-boxie/)

* [Presentation Slides with Markdown](https://sli.dev)

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

* [2025-04-28, 21:40:00](https://yro.slashdot.org/story/25/04/28/1914200/milwaukee-police-consider-trading-millions-of-mugshots-for-free-facial-recognition-access?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Milwaukee Police Consider Trading Millions of Mugshots For Free Facial Recognition Access](https://yro.slashdot.org/story/25/04/28/1914200/milwaukee-police-consider-trading-millions-of-mugshots-for-free-facial-recognition-access?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 21:01:59](https://news.ycombinator.com/item?id=43826065) - [Legal art forgery, for the sake of movies](https://www.vanityfair.com/hollywood/2014/04/art-in-movies)
* [2025-04-28, 21:00:00](https://slashdot.org/story/25/04/28/198238/monero-likely-pumped-50-due-to-suspected-330-million-bitcoin-theft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Monero Likely Pumped 50% Due To Suspected $330 Million Bitcoin Theft](https://slashdot.org/story/25/04/28/198238/monero-likely-pumped-50-due-to-suspected-330-million-bitcoin-theft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 20:51:07](https://lobste.rs/s/lllomq/i486sx_soft_fpu_bring_back_fpu_emulation) - [i486SX_soft_FPU: Bring back FPU emulation for i486SX CPU on NetBSD](https://github.com/mezantrop/i486SX_soft_FPU)
* [2025-04-28, 20:44:25](https://news.ycombinator.com/item?id=43825900) - [Qwen3: Think Deeper, Act Faster](https://qwenlm.github.io/blog/qwen3/)
* [2025-04-28, 20:38:45](https://lobste.rs/s/tsr2cw/design_software_engineering_course) - [The design of software engineering course projects](https://austinhenley.com/blog/groupprojects.html)
* [2025-04-28, 20:37:32](https://lobste.rs/s/szvnbf/giving_software_away_for_free) - [Giving software away for free](https://simonwillison.net/2025/Apr/28/give-it-away-for-free/)
* [2025-04-28, 20:34:56](https://news.ycombinator.com/item?id=43825798) - [Beyond Elk: Lightweight and Scalable Cloud-Native Log Monitoring](https://greptime.com/blogs/2025-04-24-elasticsearch-greptimedb-comparison-performance)
* [2025-04-28, 20:20:00](https://slashdot.org/story/25/04/28/197227/neurotech-companies-are-selling-brain-data-senators-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Neurotech Companies Are Selling Brain Data, Senators Warn](https://slashdot.org/story/25/04/28/197227/neurotech-companies-are-selling-brain-data-senators-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 20:03:08](https://lobste.rs/s/b1sweu/elo_rating_system_mlb) - [The Elo Rating System in the MLB](https://thelinell.com/posts/2025/elo_in_the_mlb/)
* [2025-04-28, 19:52:02](https://news.ycombinator.com/item?id=43825336) - [One Million Chessboards](https://eieio.games/blog/one-million-chessboards/)
* [2025-04-28, 19:41:00](https://soylentnews.org/article.pl?sid=25/04/28/044252&amp;from=rss) - [$8 Billion of US Climate Tech Projects Have Been Canceled So Far in 2025](https://soylentnews.org/article.pl?sid=25/04/28/044252&amp;from=rss)
* [2025-04-28, 19:40:00](https://yro.slashdot.org/story/25/04/28/193247/23andme-requiring-potential-bidders-to-affirm-they-will-uphold-data-privacy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [23andMe Requiring Potential Bidders To Affirm They Will Uphold Data Privacy](https://yro.slashdot.org/story/25/04/28/193247/23andme-requiring-potential-bidders-to-affirm-they-will-uphold-data-privacy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 19:18:41](https://news.ycombinator.com/item?id=43824952) - [OpenAI Adds Shopping to ChatGPT in a Challenge to Google](https://www.wired.com/story/openai-adds-shopping-to-chatgpt/)
* [2025-04-28, 19:00:00](https://news.slashdot.org/story/25/04/28/1857213/kickstarter-introduces-tariff-manager-tool-to-add-charges-to-already-fully-funded-projects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kickstarter Introduces &apos;Tariff Manager Tool&apos; To Add Charges To Already Fully Funded Projects](https://news.slashdot.org/story/25/04/28/1857213/kickstarter-introduces-tariff-manager-tool-to-add-charges-to-already-fully-funded-projects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 18:47:36](https://news.ycombinator.com/item?id=43824640) - [Migrating away from Rust](https://deadmoney.gg/news/articles/migrating-away-from-rust)
* [2025-04-28, 18:42:18](https://news.ycombinator.com/item?id=43824583) - [Show HN: Heart Rate Zones Plus – The first iOS app I ever developed](https://apps.apple.com/us/app/heart-rate-zones-plus/id6744743232)
* [2025-04-28, 18:38:46](https://news.ycombinator.com/item?id=43824544) - [Reports of the death of California High-Speed Rail have been greatly exaggerated](https://asteriskmag.com/issues/10/reports-of-the-death-of-california-high-speed-rail-have-been-greatly-exaggerated)
* [2025-04-28, 18:01:59](https://news.ycombinator.com/item?id=43824193) - [Generating Mazes with Inductive Graphs (2017)](https://jelv.is/blog/Generating-Mazes-with-Inductive-Graphs/)
* [2025-04-28, 17:58:55](https://lobste.rs/s/msdbji/generating_mazes_with_inductive_graphs) - [Generating Mazes with Inductive Graphs (2017)](https://jelv.is/blog/Generating-Mazes-with-Inductive-Graphs/)
* [2025-04-28, 17:28:09](https://news.ycombinator.com/item?id=43823851) - [Is outbound going to die?](https://rnikhil.com/2025/04/25/sales-outbound-ai-dead)
* [2025-04-28, 17:27:00](https://slashdot.org/story/25/04/28/1727240/chinas-huawei-develops-new-ai-chip-seeking-to-match-nvidia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Huawei Develops New AI Chip, Seeking To Match Nvidia](https://slashdot.org/story/25/04/28/1727240/chinas-huawei-develops-new-ai-chip-seeking-to-match-nvidia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 17:06:49](https://lobste.rs/s/erys14/dependently_typed_assembly_language) - [A Dependently Typed Assembly Language](https://www.cs.cmu.edu/~rwh/papers/dtal/OGI-CSE-99-008.pdf)
* [2025-04-28, 17:05:29](https://news.ycombinator.com/item?id=43823620) - [The side hustle from hell](https://blog.jacobstechtavern.com/p/the-side-hustle-from-hell)
* [2025-04-28, 17:01:20](https://news.ycombinator.com/item?id=43823580) - [Activeloop (YC S18) is hiring a VP of Engineering in Mountain View (on-site)](https://careers.activeloop.ai/)
* [2025-04-28, 16:53:08](https://news.ycombinator.com/item?id=43823485) - [Vision Transformers Need Registers](https://arxiv.org/abs/2309.16588)
* [2025-04-28, 16:43:00](https://slashdot.org/story/25/04/28/1642223/unauthorized-ai-bot-experiment-infiltrated-reddit-to-test-persuasion-capabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Unauthorized AI Bot Experiment Infiltrated Reddit To Test Persuasion Capabilities](https://slashdot.org/story/25/04/28/1642223/unauthorized-ai-bot-experiment-infiltrated-reddit-to-test-persuasion-capabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 16:33:48](https://lobste.rs/s/9ne34p/one_million_chessboards) - [One million chessboards](https://onemillionchessboards.com/)
* [2025-04-28, 16:14:31](https://news.ycombinator.com/item?id=43823096) - [Show HN: Sim Studio – Open-Source Agent Workflow GUI](https://github.com/simstudioai/sim)
* [2025-04-28, 16:10:21](https://news.ycombinator.com/item?id=43823044) - [Show HN: A pure WebGL image editor with filters, crop and perspective correction](https://github.com/xdadda/mini-photo-editor)
* [2025-04-28, 16:04:00](https://slashdot.org/story/25/04/28/164253/dyson-founder-says-he-has-lived-a-life-of-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dyson Founder Says He Has Lived a &apos;Life of Failure&apos;](https://slashdot.org/story/25/04/28/164253/dyson-founder-says-he-has-lived-a-life-of-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 15:36:25](https://news.ycombinator.com/item?id=43822659) - [Show HN: Web-eval-agent – Let the coding agent debug itself](https://github.com/Operative-Sh/web-eval-agent)
* [2025-04-28, 15:36:00](https://lobste.rs/s/7ousya/audit_rust_p256_crate) - [Audit of the Rust p256 Crate](https://reports.zksecurity.xyz/reports/near-p256/)
* [2025-04-28, 15:33:32](https://news.ycombinator.com/item?id=43822619) - [Reanimation of the original Logic Theorist, the first AI, in IPL-V [video]](https://www.youtube.com/watch?v=qmE5o2ezqBg)
* [2025-04-28, 15:30:14](https://news.ycombinator.com/item?id=43822575) - [Show HN: Autarkie – Instant grammar fuzzing using Rust macros](https://github.com/R9295/autarkie)
* [2025-04-28, 15:23:00](https://news.slashdot.org/story/25/04/28/1523232/ibm-pledges-150-billion-us-investment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM Pledges $150 Billion US Investment](https://news.slashdot.org/story/25/04/28/1523232/ibm-pledges-150-billion-us-investment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 15:22:28](https://lobste.rs/s/5qynev/anticrawl) - [anticrawl](https://flak.tedunangst.com/post/anticrawl)
* [2025-04-28, 15:11:27](https://lobste.rs/s/uai76x/what_if_we_embraced_simulation_driven) - [What if we embraced simulation-driven development?](https://pierrezemb.fr/posts/simulation-driven-development/)
* [2025-04-28, 15:00:11](https://lobste.rs/s/ahnsrl/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/ahnsrl/what_are_you_doing_this_week)
* [2025-04-28, 14:54:00](https://soylentnews.org/article.pl?sid=25/04/28/0358222&amp;from=rss) - [Everyone Should Stop Working on AI Now](https://soylentnews.org/article.pl?sid=25/04/28/0358222&amp;from=rss)
* [2025-04-28, 14:45:00](https://tech.slashdot.org/story/25/04/28/1444215/dont-make-google-sell-chrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Don&apos;t Make Google Sell Chrome&apos;](https://tech.slashdot.org/story/25/04/28/1444215/dont-make-google-sell-chrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 14:35:43](https://lobste.rs/s/4eany6/openbsd_7_7) - [OpenBSD 7.7](https://www.openbsd.org/77.html)
* [2025-04-28, 14:00:00](https://slashdot.org/story/25/04/28/1245258/widespread-power-outage-is-reported-in-spain-france-and-portugal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Widespread Power Outage Is Reported in Spain, France and Portugal](https://slashdot.org/story/25/04/28/1245258/widespread-power-outage-is-reported-in-spain-france-and-portugal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 13:50:24](https://lobste.rs/s/qom44w/python_sub_micro_gpio) - [Python sub-micro GPIO](https://www.runpyxl.com/gpio)
* [2025-04-28, 12:37:03](https://lobste.rs/s/eku5qh/computer_architects_can_t_find_average) - [Computer Architects Can&apos;t Find the Average](https://dgsq.net/2025-04-27-averages/)
* [2025-04-28, 11:44:54](https://news.ycombinator.com/item?id=43820228) - [Show HN: I built a hardware processor that runs Python](https://www.runpyxl.com/gpio)
* [2025-04-28, 11:34:00](https://tech.slashdot.org/story/25/04/28/0736204/americas-electric-vehicle-sales-have-jumped-106-compared-to-2024?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Electric Vehicle Sales Have Jumped 10.6% Compared to 2024](https://tech.slashdot.org/story/25/04/28/0736204/americas-electric-vehicle-sales-have-jumped-106-compared-to-2024?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 11:29:39](https://news.ycombinator.com/item?id=43820076) - [Uncovering the mechanics of The Games: Winter Challenge](https://mrwint.github.io/winter/writeup/writeup.html)
* [2025-04-28, 11:24:41](https://news.ycombinator.com/item?id=43820022) - [Tiny-LLM – a course of serving LLM on Apple Silicon for systems engineers](https://github.com/skyzh/tiny-llm)
* [2025-04-28, 10:50:58](https://news.ycombinator.com/item?id=43819791) - [Widespread power outage in Spain and Portugal](https://www.bbc.com/news/live/c9wpq8xrvd9t)
* [2025-04-28, 10:09:00](https://soylentnews.org/article.pl?sid=25/04/26/1734201&amp;from=rss) - [Multi-Microbiome-Mashup](https://soylentnews.org/article.pl?sid=25/04/26/1734201&amp;from=rss)
* [2025-04-28, 08:42:12](https://lobste.rs/s/vwyvcn/optimizing_go_microservices_for_low) - [Optimizing Go Microservices for Low Latency &amp; High Throughput](http://muratdemirci.com.tr/en/optimizing-go-microservices/)
* [2025-04-28, 07:40:00](https://science.slashdot.org/story/25/04/28/0610254/ai-helps-unravel-a-cause-of-alzheimers-disease-and-identify-a-therapeutic-candidate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Helps Unravel a Cause of Alzheimer&apos;s Disease and Identify a Therapeutic Candidate](https://science.slashdot.org/story/25/04/28/0610254/ai-helps-unravel-a-cause-of-alzheimers-disease-and-identify-a-therapeutic-candidate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 07:18:53](https://lobste.rs/s/dstgbs/using_haproxy_protect_me_from_scrapers) - [Using HAProxy to protect me from scrapers](https://dgl.cx/2025/04/using-haproxy-to-stop-scrapers)
* [2025-04-28, 06:30:44](https://lobste.rs/s/xy1rk1/nouveau_rule_based_language_family) - [Nouveau: The Rule Based Language Family](https://nouveau.community/)
* [2025-04-28, 05:23:00](https://soylentnews.org/article.pl?sid=25/04/26/1715246&amp;from=rss) - [Windows 11’s Voice Typing Will Soon Let You Turn Off the ****ing Profanity Filter](https://soylentnews.org/article.pl?sid=25/04/26/1715246&amp;from=rss)
* [2025-04-28, 05:01:10](https://news.ycombinator.com/item?id=43817726) - [Why Momentum Works (2017)](https://distill.pub/2017/momentum/)
* [2025-04-28, 02:59:00](https://science.slashdot.org/story/25/04/28/0255248/could-a-math-genius-ai-co-author-proofs-within-three-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could a &apos;Math Genius&apos; AI Co-author Proofs Within Three Years?](https://science.slashdot.org/story/25/04/28/0255248/could-a-math-genius-ai-co-author-proofs-within-three-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 02:20:47](https://lobste.rs/s/ashwpk/boxie_always_offline_audio_player_for_my_3) - [Boxie - an always offline audio player for my 3 year old](https://mariozechner.at/posts/2025-04-20-boxie/)
* [2025-04-28, 01:21:01](https://news.ycombinator.com/item?id=43816634) - [Presentation Slides with Markdown](https://sli.dev)
* [2025-04-28, 01:05:00](https://hardware.slashdot.org/story/25/04/28/013206/nuclear-fusion-pioneer-abandons-plan-for-prototype-reactor-will-license-reaction-boosting-nuclear-fuel-capsule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nuclear Fusion Pioneer Abandons Plan for Prototype Reactor, Will License Reaction-Boosting Nuclear Fuel Capsule](https://hardware.slashdot.org/story/25/04/28/013206/nuclear-fusion-pioneer-abandons-plan-for-prototype-reactor-will-license-reaction-boosting-nuclear-fuel-capsule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 00:58:05](https://lobste.rs/s/azvdtw/how_single_line_code_could_brick_your) - [How a Single Line Of Code Could Brick Your iPhone](https://rambo.codes/posts/2025-04-24-how-a-single-line-of-code-could-brick-your-iphone)
* [2025-04-28, 00:56:11](https://lobste.rs/s/geord9/watching_o3_guess_photo_s_location_is) - [Watching o3 guess a photo’s location is surreal, dystopian and wildly entertaining](https://simonwillison.net/2025/Apr/26/o3-photo-locations/)
* [2025-04-28, 00:42:00](https://soylentnews.org/article.pl?sid=25/04/26/1713213&amp;from=rss) - [Fedora Considers Dropping GNOME X11 Session From Repositories](https://soylentnews.org/article.pl?sid=25/04/26/1713213&amp;from=rss)
* [2025-04-28, 00:22:39](https://lobste.rs/s/drhief/import_death_die) - [import death; die](https://web.archive.org/web/20240206194712/https://bpa.st/3FGA)
* [2025-04-27, 22:19:26](https://news.ycombinator.com/item?id=43815590) - [Beating the Crowd](https://www.withentropy.com/blog/2025-04-21-beating_the_crowd/)
* [2025-04-27, 22:08:21](https://news.ycombinator.com/item?id=43815523) - [Ask HN: What are you working on? (April 2025)](https://news.ycombinator.com/item?id=43815523)
* [2025-04-27, 20:40:09](https://lobste.rs/s/rm20ex/silent_bugs_matter_study_compiler) - [Silent Bugs Matter: A Study of Compiler-Introduced Security Bugs](https://www.usenix.org/conference/usenixsecurity23/presentation/xu-jianhao)
* [2025-04-27, 20:38:17](https://lobste.rs/s/zihgia/what_s_new_apt_3_0) - [What&apos;s new in APT 3.0](https://lwn.net/Articles/1017315/)
* [2025-04-27, 20:09:08](https://news.ycombinator.com/item?id=43814716) - [My takeaways from DjangoCon EU 2025](https://www.zachbellay.com/posts/djangocon-eu-2025/)
* [2025-04-27, 19:56:00](https://soylentnews.org/article.pl?sid=25/04/26/179216&amp;from=rss) - [9-Mile-Thick Layer of Solid Diamonds May Lurk Beneath Mercury&apos;s Surface, Study Hints](https://soylentnews.org/article.pl?sid=25/04/26/179216&amp;from=rss)
* [2025-04-27, 18:55:10](https://lobste.rs/s/jcscxj/are_ai_systems_really_tools) - [Are \&quot;AI\&quot; systems really tools?](https://tante.cc/2025/04/27/are-ai-system-really-tools/)
* [2025-04-27, 17:21:00](https://soylentnews.org/politics/article.pl?sid=25/04/26/174238&amp;from=rss) - [XKCD Cartoon Protest](https://soylentnews.org/politics/article.pl?sid=25/04/26/174238&amp;from=rss)
* [2025-04-27, 15:12:00](https://soylentnews.org/article.pl?sid=25/04/26/171205&amp;from=rss) - [The EU is Implementing Energy Labels and Minimum Requirements for Phones and Tablets](https://soylentnews.org/article.pl?sid=25/04/26/171205&amp;from=rss)
* [2025-04-27, 10:45:54](https://news.ycombinator.com/item?id=43810918) - [Comparing Voltage Boosting Circuits](https://blog.georgovassilis.com/2025/04/24/comparing-the-efficiency-of-dc-voltage-boost-circuits/)
* [2025-04-27, 10:30:00](https://soylentnews.org/article.pl?sid=25/04/26/1332253&amp;from=rss) - [NASA’s Lucy Spacecraft Images Asteroid Donaldjohanson](https://soylentnews.org/article.pl?sid=25/04/26/1332253&amp;from=rss)
* [2025-04-27, 07:58:54](https://lobste.rs/s/hnqkhk/remove_these_tags_from_head) - [Remove these tags from &lt;head&gt;](https://getoutofmyhead.dev/)
* [2025-04-27, 07:50:07](https://news.ycombinator.com/item?id=43810211) - [Running Clojure in WASM with GraalVM](https://romanliutikov.com/blog/running-clojure-in-wasm)
* [2025-04-27, 05:43:00](https://soylentnews.org/article.pl?sid=25/04/26/1324227&amp;from=rss) - [Post-Quantum Crypto: McEliece Standardization](https://soylentnews.org/article.pl?sid=25/04/26/1324227&amp;from=rss)
* [2025-04-27, 01:00:00](https://soylentnews.org/article.pl?sid=25/04/26/1322229&amp;from=rss) - [Kennedy Promises Studies Using Private Health Data to Identify Factors That May Cause Autism](https://soylentnews.org/article.pl?sid=25/04/26/1322229&amp;from=rss)
* [2025-04-27, 00:18:31](https://news.ycombinator.com/item?id=43808381) - [Co-designing a sparse music codec with ChatGPT o3](https://akuz.me/co-designing-a-sparse-music-codec-with-chatgpt-o3-in-one-day-my-mini-pied-piper.html)
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
* [2025-04-24, 20:24:00](https://soylentnews.org/article.pl?sid=25/04/23/1538243&amp;from=rss) - [C64 Demo Using Audio for Video and Vice Versa](https://soylentnews.org/article.pl?sid=25/04/23/1538243&amp;from=rss)
* [2025-04-24, 15:38:00](https://soylentnews.org/article.pl?sid=25/04/23/1521205&amp;from=rss) - [Open Home passes 2 million homes equipped](https://soylentnews.org/article.pl?sid=25/04/23/1521205&amp;from=rss)
* [2025-04-24, 10:53:00](https://soylentnews.org/article.pl?sid=25/04/23/1515240&amp;from=rss) - [Sophisticated Gmail Attack Highlights Dangers of Trusting Big Tech with Personal Data](https://soylentnews.org/article.pl?sid=25/04/23/1515240&amp;from=rss)
* [2025-04-24, 06:11:00](https://soylentnews.org/article.pl?sid=25/04/23/0422241&amp;from=rss) - [World&apos;s First Drone System for Fighting Lightning Protects Cities and Infrastructure](https://soylentnews.org/article.pl?sid=25/04/23/0422241&amp;from=rss)
* [2025-04-24, 01:26:00](https://soylentnews.org/article.pl?sid=25/04/23/0353259&amp;from=rss) - [Lone Black Hole Discovered](https://soylentnews.org/article.pl?sid=25/04/23/0353259&amp;from=rss)
