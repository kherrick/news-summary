# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* ["Complexity Physics Finds Crucial Tipping Points in Chess Games"](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss) - Highlights a fascinating intersection between physics and game theory, where complexity physics is used to discover critical decision points in chess.

* [An analysis of DeepSeek's R1-Zero and R1](https://arcprize.org/blog/r1-zero-r1-results-analysis) - Explores the intricacies of two advanced AI models, breaking down their effectiveness and implications in the field of artificial intelligence.

* [Building a semantic movie search demo with pgvector and Next.js](https://blog.6nok.org/building-a-semantic-movie-search-demo-with-pgvector-and-next.js) - Demonstrates the integration of modern semantic technologies to create smarter search tools.

* [SmolGPT: A minimal PyTorch implementation for training a small LLM from scratch](https://github.com/Om-Alve/smolGPT) - Presents a compact open-source approach to training a language model, valuable for AI enthusiasts.

* [How Good is Tesla Full Self Driving, by a Motor Trend Road Tester](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss) - A practical evaluation of Tesla's self-driving system by an expert road tester.

## AI and Machine Learning

* [Microsoft Makes DeepSeek's R1 Model Available On Azure AI and GitHub](https://slashdot.org/story/25/01/29/2218253/microsoft-makes-deepseeks-r1-model-available-on-azure-ai-and-github?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft integrates a cutting-edge DeepSeek AI model into its platforms, promising to enhance machine learning accessibility.

* [AI-Assisted Works Can Get Copyright With Enough Human Creativity, Says US Copyright Office](https://yro.slashdot.org/story/25/01/30/0157258/ai-assisted-works-can-get-copyright-with-enough-human-creativity-says-us-copyright-office?utm_source=rss1.0mainlinkanon&utm_medium=feed) - This decision highlights the ongoing debate over the ownership of AI-generated creations.

* [OpenAI says it has evidence DeepSeek used its model to train competitor](https://www.ft.com/content/a0dfedd1-5255-4fa9-8ccc-1fe01de87ea6) - OpenAI's allegations against DeepSeek bring ethical and competitive concerns to the forefront of AI advancements.

* [Chinese and Iranian Hackers Are Using US AI Products To Bolster Cyberattacks](https://it.slashdot.org/story/25/01/29/1730253/chinese-and-iranian-hackers-are-using-us-ai-products-to-bolster-cyberattacks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Examines the dual-use risks of AI technologies in cyber warfare.

* [Mice With Two Dads Have Been Created Using CRISPR](https://science.slashdot.org/story/25/01/29/1831245/mice-with-two-dads-have-been-created-using-crispr?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Explores CRISPR's groundbreaking genetic engineering applications in mouse embryo development.

## Cybersecurity and Privacy

* [Millions of Subarus Could be Remotely Unlocked, Tracked Due to Security Flaws](https://soylentnews.org/article.pl?sid=25/01/28/0319228&from=rss) - A concerning vulnerability in car technology raises pressing privacy and security concerns.

* [Exposed DeepSeek database leaking sensitive information, including chat history](https://www.wiz.io/blog/wiz-research-uncovers-exposed-deepseek-database-leak) - Highlights the critical need for better data protection measures in AI and cloud systems.

* [Zyxel Firewalls Borked By Buggy Update, On-Site Access Required For Fix](https://it.slashdot.org/story/25/01/29/226219/zyxel-firewalls-borked-by-buggy-update-on-site-access-required-for-fix?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discusses the importance of rigorous testing for updates in essential networking equipment.

* [Backdoor Infecting VPNs Used “Magic Packets” for Stealth and Security](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss) - Details yet another alarming exploit targeting remote security tools.

* [We got hit by an alarmingly well-prepared phish spammer](https://utcc.utoronto.ca/~cks/space/blog/spam/WellPreparedPhishSpammer) - Shares insights into a sophisticated phishing attack and possible countermeasures.

## Science and Nature

* [Study of More Than 600 Animal and Plant Species Finds Genetic Diversity Has Declined Globally](https://science.slashdot.org/story/25/01/29/1754252/study-of-more-than-600-animal-and-plant-species-finds-genetic-diversity-has-declined-globally?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A global study examining the alarming reduction in genetic biodiversity across ecosystems.

* [Mysterious Blobs Found Inside Cells Are Rewriting the Story of How Life Works](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss) - This discovery may alter fundamental biological principles.

* [Asteroid Impact on Earth 2032 with Probability 1% and 8Mt Energy](https://cneos.jpl.nasa.gov/sentry/details.html#?des=2024%20YR4) - Investigates a concerning celestial threat with astronomical implications.

* [Ötzi the Lyme Mummy (2019)](https://vetmed.illinois.edu/i-tick/2019/08/09/iceman-lyme-mummy-tattle-the-tick-blog/) - This retrospective link explores fascinating ancient medical evidence from a 5,300-year-old mummy.

* [5 Super Creepy New Technologies That Should Chill All Of Us To The Core](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss) - A look at some of the most unsettling recent scientific and technological advancements.

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

* [2025-01-30, 03:45:00](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss) - [Complexity Physics Finds Crucial Tipping Points in Chess Games](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss)
* [2025-01-30, 03:30:00](https://politics.slashdot.org/story/25/01/30/028201/democrat-teams-up-with-movie-industry-to-propose-website-blocking-law?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Democrat Teams Up With Movie Industry To Propose Website-Blocking Law](https://politics.slashdot.org/story/25/01/30/028201/democrat-teams-up-with-movie-industry-to-propose-website-blocking-law?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 02:56:45](https://news.ycombinator.com/item?id=42874301) - [Commercial jet collides with Black Hawk helicopter near Reagan airport](https://www.mediaite.com/news/breaking-commercial-jet-collides-with-police-chopper-near-reagan-airport/)
* [2025-01-30, 02:02:00](https://yro.slashdot.org/story/25/01/30/0157258/ai-assisted-works-can-get-copyright-with-enough-human-creativity-says-us-copyright-office?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI-Assisted Works Can Get Copyright With Enough Human Creativity, Says US Copyright Office](https://yro.slashdot.org/story/25/01/30/0157258/ai-assisted-works-can-get-copyright-with-enough-human-creativity-says-us-copyright-office?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 01:59:53](https://lobste.rs/s/mumdjf/sql_death_seminar_series_spring_2025) - [SQL or Death? Seminar Series - Spring 2025](https://db.cs.cmu.edu/seminar2025/)
* [2025-01-30, 01:41:10](https://lobste.rs/s/w17cjs/will_i_ever_use_this_real_world) - [\"Will I ever use this in the real world?\"](https://blog.waleedkhan.name/will-i-ever-use-this/)
* [2025-01-30, 01:25:00](https://tech.slashdot.org/story/25/01/29/2242242/nordvpn-says-its-new-protocol-can-circumvent-vpn-blockers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NordVPN Says Its New Protocol Can Circumvent VPN Blockers](https://tech.slashdot.org/story/25/01/29/2242242/nordvpn-says-its-new-protocol-can-circumvent-vpn-blockers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 01:23:54](https://news.ycombinator.com/item?id=42873697) - [Younger cannabis users have reduced brain function, finds largest study yet](https://newatlas.com/brain/young-adult-cannabis-brain-function/)
* [2025-01-30, 01:22:11](https://lobste.rs/s/tdhkb1/picolibc_i18n) - [picolibc-i18n](https://keithp.com/blogs/picolibc-i18n/)
* [2025-01-30, 01:19:37](https://lobste.rs/s/h9ednl/hey_deepseek_can_you_reduce_junk_my_inbox) - [Hey DeepSeek, can you reduce junk in my inbox?](https://loshadki.app/blog/2025-01-29-protect-inbox-with-deepseek/)
* [2025-01-30, 01:02:03](https://news.ycombinator.com/item?id=42873532) - [Etleap (YC W13) Is Hiring a Senior Software Engineer (SF)](https://news.ycombinator.com/item?id=42873532)
* [2025-01-30, 00:53:21](https://news.ycombinator.com/item?id=42873476) - [Classic Duck Hunt game made in JavaScript and Kaplay](https://jslegend.itch.io/duck-hunter)
* [2025-01-30, 00:45:00](https://games.slashdot.org/story/25/01/29/2234210/atari-limited-edition-asteroids-watches-sell-out-instantly-for-45th-anniversary?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Atari Limited-Edition Asteroids Watches Sell Out Instantly For 45th Anniversary](https://games.slashdot.org/story/25/01/29/2234210/atari-limited-edition-asteroids-watches-sell-out-instantly-for-45th-anniversary?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 00:31:53](https://news.ycombinator.com/item?id=42873312) - [Mathesar – an intutive spreadsheet-like interface to Postgres data](https://github.com/mathesar-foundation/mathesar)
* [2025-01-30, 00:12:49](https://news.ycombinator.com/item?id=42873153) - [Blueskyfeedbot: Post RSS Feeds to Bluesky via GitHub Actions](https://github.com/marketplace/actions/feed-to-bluesky)
* [2025-01-30, 00:02:00](https://games.slashdot.org/story/25/01/29/2224212/sony-removes-playstation-account-requirement-from-4-single-player-steam-games?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sony Removes PlayStation Account Requirement From 4 Single-Player Steam Games](https://games.slashdot.org/story/25/01/29/2224212/sony-removes-playstation-account-requirement-from-4-single-player-steam-games?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 23:33:46](https://lobste.rs/s/sn8buz/tv_setup) - [TV Setup](https://push.cx/tv-setup)
* [2025-01-29, 23:20:00](https://slashdot.org/story/25/01/29/2218253/microsoft-makes-deepseeks-r1-model-available-on-azure-ai-and-github?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Makes DeepSeek's R1 Model Available On Azure AI and GitHub](https://slashdot.org/story/25/01/29/2218253/microsoft-makes-deepseeks-r1-model-available-on-azure-ai-and-github?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 23:02:00](https://soylentnews.org/article.pl?sid=25/01/28/0319228&from=rss) - [Millions of Subarus Could be Remotely Unlocked, Tracked Due to Security Flaws](https://soylentnews.org/article.pl?sid=25/01/28/0319228&from=rss)
* [2025-01-29, 22:45:14](https://news.ycombinator.com/item?id=42872276) - [Advice for a friend who wants to start a blog](https://www.henrikkarlsson.xyz/p/start-a-blog)
* [2025-01-29, 22:40:00](https://it.slashdot.org/story/25/01/29/226219/zyxel-firewalls-borked-by-buggy-update-on-site-access-required-for-fix?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Zyxel Firewalls Borked By Buggy Update, On-Site Access Required For Fix](https://it.slashdot.org/story/25/01/29/226219/zyxel-firewalls-borked-by-buggy-update-on-site-access-required-for-fix?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 22:08:30](https://news.ycombinator.com/item?id=42871867) - [An update on Dart macros and data serialization](https://medium.com/dartlang/an-update-on-dart-macros-data-serialization-06d3037d4f12)
* [2025-01-29, 22:03:43](https://lobste.rs/s/nqy7uq/parametric_subtyping_for_structural) - [Parametric Subtyping for Structural Parametric Polymorphism](https://blog.sigplan.org/2025/01/29/parametric-subtyping-for-structural-parametric-polymorphism/)
* [2025-01-29, 22:00:00](https://tech.slashdot.org/story/25/01/29/2159203/alphabets-waymo-to-test-its-autonomous-driving-technology-in-over-10-new-cities?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Alphabet's Waymo To Test Its Autonomous Driving Technology In Over 10 New Cities](https://tech.slashdot.org/story/25/01/29/2159203/alphabets-waymo-to-test-its-autonomous-driving-technology-in-over-10-new-cities?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 21:56:11](https://news.ycombinator.com/item?id=42871743) - [From C++ to Clojure: Jank language promises best of both](https://thenewstack.io/from-c-to-clojure-new-language-promises-best-of-both/)
* [2025-01-29, 21:41:55](https://lobste.rs/s/i6dcix/why_sorting_is_harder_than_it_seems) - [Why sorting is harder than it seems](https://mill.plainopen.com/why-sorting-is-harder-than-it-seems.html)
* [2025-01-29, 21:25:36](https://news.ycombinator.com/item?id=42871371) - [Exposed DeepSeek database leaking sensitive information, including chat history](https://www.wiz.io/blog/wiz-research-uncovers-exposed-deepseek-database-leak)
* [2025-01-29, 21:05:28](https://news.ycombinator.com/item?id=42871143) - [Parsing PDFs (and more) in Elixir using Rust](https://www.chriis.dev/opinion/parsing-pdfs-in-elixir-using-rust)
* [2025-01-29, 20:55:49](https://news.ycombinator.com/item?id=42871040) - [Keymapper: A cross-platform context-aware key remapper](https://github.com/houmain/keymapper)
* [2025-01-29, 20:55:43](https://lobste.rs/s/ugg12c/senders_receivers_introduction) - [Senders/Receivers: An Introduction](https://accu.org/journals/overload/32/184/teodorescu/)
* [2025-01-29, 20:54:01](https://lobste.rs/s/gtuz66/keymapper_cross_platform_context_aware) - [keymapper: A cross-platform context-aware key remapper](https://github.com/houmain/keymapper)
* [2025-01-29, 20:50:53](https://news.ycombinator.com/item?id=42870990) - [Making the video that made Gorillaz](https://animationobsessive.substack.com/p/making-the-video-that-made-gorillaz)
* [2025-01-29, 20:50:00](https://apple.slashdot.org/story/25/01/29/1848226/intel-did-not-know-how-to-be-a-foundry-tim-cook-told-tsmc-chief?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Intel 'Did Not Know How To Be a Foundry,' Tim Cook Told TSMC Chief](https://apple.slashdot.org/story/25/01/29/1848226/intel-did-not-know-how-to-be-a-foundry-tim-cook-told-tsmc-chief?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 20:39:11](https://lobste.rs/s/siaf0m/building_semantic_movie_search_demo_with) - [Building a semantic movie search demo with pgvector and Next.js](https://blog.6nok.org/building-a-semantic-movie-search-demo-with-pgvector-and-next.js/)
* [2025-01-29, 20:27:45](https://lobste.rs/s/0t3yqw/building_t1d_smartwatch_from_scratch) - [Building a (T1D) smartwatch from scratch](https://andrewchilds.com/posts/building-a-t1d-smartwatch-from-scratch)
* [2025-01-29, 20:26:01](https://news.ycombinator.com/item?id=42870690) - [Soviet Shoe Factory Principle](https://wiki.c2.com/?SovietShoeFactoryPrinciple)
* [2025-01-29, 20:10:00](https://science.slashdot.org/story/25/01/29/1831245/mice-with-two-dads-have-been-created-using-crispr?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mice With Two Dads Have Been Created Using CRISPR](https://science.slashdot.org/story/25/01/29/1831245/mice-with-two-dads-have-been-created-using-crispr?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 19:52:27](https://news.ycombinator.com/item?id=42870230) - [Dead Games](https://garry.net/posts/dead-games)
* [2025-01-29, 19:47:51](https://news.ycombinator.com/item?id=42870171) - [Airflow – Stream media files directly from macOS to AirPlay devices](https://airflow.app/)
* [2025-01-29, 19:30:00](https://slashdot.org/story/25/01/29/184223/after-deepseek-shock-alibaba-unveils-rival-ai-model-that-uses-less-computing-power?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [After DeepSeek Shock, Alibaba Unveils Rival AI Model That Uses Less Computing Power](https://slashdot.org/story/25/01/29/184223/after-deepseek-shock-alibaba-unveils-rival-ai-model-that-uses-less-computing-power?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 18:50:00](https://science.slashdot.org/story/25/01/29/1754252/study-of-more-than-600-animal-and-plant-species-finds-genetic-diversity-has-declined-globally?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Study of More Than 600 Animal and Plant Species Finds Genetic Diversity Has Declined Globally](https://science.slashdot.org/story/25/01/29/1754252/study-of-more-than-600-animal-and-plant-species-finds-genetic-diversity-has-declined-globally?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 18:17:00](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss) - [Linux is the Name That Shall Not be Spoken at Facebook](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss)
* [2025-01-29, 18:10:00](https://tech.slashdot.org/story/25/01/29/1738249/comcast-is-rolling-out-ultra-low-lag-tech-that-could-fix-the-internet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comcast Is Rolling Out 'Ultra-Low Lag' Tech That Could Fix the Internet](https://tech.slashdot.org/story/25/01/29/1738249/comcast-is-rolling-out-ultra-low-lag-tech-that-could-fix-the-internet?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 18:09:19](https://news.ycombinator.com/item?id=42868770) - [SmolGPT: A minimal PyTorch implementation for training a small LLM from scratch](https://github.com/Om-Alve/smolGPT)
* [2025-01-29, 17:49:16](https://news.ycombinator.com/item?id=42868464) - [Ötzi the Lyme Mummy (2019)](https://vetmed.illinois.edu/i-tick/2019/08/09/iceman-lyme-mummy-tattle-the-tick-blog/)
* [2025-01-29, 17:44:45](https://news.ycombinator.com/item?id=42868390) - [An analysis of DeepSeek's R1-Zero and R1](https://arcprize.org/blog/r1-zero-r1-results-analysis)
* [2025-01-29, 17:30:00](https://it.slashdot.org/story/25/01/29/1730253/chinese-and-iranian-hackers-are-using-us-ai-products-to-bolster-cyberattacks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Chinese and Iranian Hackers Are Using US AI Products To Bolster Cyberattacks](https://it.slashdot.org/story/25/01/29/1730253/chinese-and-iranian-hackers-are-using-us-ai-products-to-bolster-cyberattacks?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 16:57:59](https://news.ycombinator.com/item?id=42867657) - [A major Postgres upgrade with zero downtime](https://www.instantdb.com/essays/pg_upgrade)
* [2025-01-29, 16:45:00](https://news.slashdot.org/story/25/01/29/1622227/copyright-office-offers-assurances-on-ai-filmmaking-tools?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Copyright Office Offers Assurances on AI Filmmaking Tools](https://news.slashdot.org/story/25/01/29/1622227/copyright-office-offers-assurances-on-ai-filmmaking-tools?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 16:37:05](https://lobste.rs/s/s89gxq/why_trees_without_branches_grow_faster) - [Why Trees Without Branches Grow Faster: The Case for Reducing Branches in Code](https://cedardb.com/blog/reducing_branches/)
* [2025-01-29, 16:30:37](https://lobste.rs/s/gexezf/picking_equatable_names) - [Picking Equatable Names](https://thunderseethe.dev/posts/debruijn-indices/)
* [2025-01-29, 16:22:10](https://lobste.rs/s/oxmxzl/using_v2ray_with_caddy_access_internet) - [Using v2ray with Caddy to Access the Internet in China](https://sequentialread.com/v2ray-caddy-to-access-the-internet-in-china/)
* [2025-01-29, 15:58:20](https://news.ycombinator.com/item?id=42866572) - [Case Study: ByteDance Uses eBPF to Enhance Networking Performance](https://ebpf.foundation/case-study-bytedance-uses-ebpf-to-enhance-networking-performance/)
* [2025-01-29, 15:34:06](https://lobste.rs/s/f6frhd/hell_haskell_shell) - [Hell (Haskell shell)](https://chrisdone.com/posts/hell-year-in-review-2025/)
* [2025-01-29, 13:33:00](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss) - [Backdoor Infecting VPNs Used “Magic Packets” for Stealth and Security](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss)
* [2025-01-29, 12:47:17](https://news.ycombinator.com/item?id=42864272) - [Asteroid Impact on Earth 2032 with Probability 1% and 8Mt Energy](https://cneos.jpl.nasa.gov/sentry/details.html#?des=2024%20YR4)
* [2025-01-29, 09:17:44](https://lobste.rs/s/lpl09r/we_got_hit_by_alarmingly_well_prepared) - [We got hit by an alarmingly well-prepared phish spammer](https://utcc.utoronto.ca/~cks/space/blog/spam/WellPreparedPhishSpammer)
* [2025-01-29, 08:49:00](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss) - [How Good is Tesla Full Self Driving, by a Motor Trend Road Tester](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss)
* [2025-01-29, 08:43:34](https://news.ycombinator.com/item?id=42862873) - [We got hit by an alarmingly well-prepared phish spammer](https://utcc.utoronto.ca/~cks/space/blog/spam/WellPreparedPhishSpammer)
* [2025-01-29, 06:43:43](https://news.ycombinator.com/item?id=42862246) - [I still like Sublime Text](https://ohdoylerules.com/workflows/why-i-still-like-sublime-text-in-2025/)
* [2025-01-29, 04:21:20](https://news.ycombinator.com/item?id=42861475) - [OpenAI says it has evidence DeepSeek used its model to train competitor](https://www.ft.com/content/a0dfedd1-5255-4fa9-8ccc-1fe01de87ea6)
* [2025-01-29, 04:21:18](https://lobste.rs/s/pihql3/you_re_thinking_about_passkeys_wrong) - [You're thinking about passkeys wrong](https://dev.to/yawaramin/youre-thinking-about-passkeys-wrong-171o)
* [2025-01-29, 04:03:00](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss) - [5 Super Creepy New Technologies That Should Chill All Of Us To The Core](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss)
* [2025-01-29, 03:49:27](https://lobste.rs/s/esqs7z/mlx_distributed_computing_for_apple) - [MLX — Distributed Computing for Apple Silicon](https://ml-explore.github.io/mlx/build/html/index.html)
* [2025-01-29, 03:11:04](https://lobste.rs/s/tswf9y/modern_compiler_for_french_tax_code) - [A Modern Compiler for the French Tax Code](https://inria.hal.science/hal-03002266)
* [2025-01-29, 02:03:11](https://lobste.rs/s/n9vtqo/my_history_with_forth_stack_machines_2010) - [My history with Forth & stack machines (2010)](https://yosefk.com/blog/my-history-with-forth-stack-machines.html)
* [2025-01-28, 23:17:00](https://soylentnews.org/article.pl?sid=25/01/27/1659214&from=rss) - [Your Hollywood Career: How to Tell When the End Is Nigh](https://soylentnews.org/article.pl?sid=25/01/27/1659214&from=rss)
* [2025-01-28, 19:48:22](https://news.ycombinator.com/item?id=42857029) - [Cardan grille](https://en.wikipedia.org/wiki/Cardan_grille)
* [2025-01-28, 19:19:15](https://lobste.rs/s/4kvugz/sunsetting_cursed_terminal_emulation) - [Sunsetting Cursed Terminal Emulation](https://arcan-fe.com/2025/01/27/sunsetting-cursed-terminal-emulation/)
* [2025-01-28, 18:57:19](https://lobste.rs/s/pzo2xo/speculation_attacks_on_apple_m3_slap_flop) - [Speculation Attacks on Apple M3: SLAP and FLOP](https://predictors.fail/)
* [2025-01-28, 18:31:00](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss) - [The Invalid 68030 Instruction That Accidentally Allowed the Mac Classic II to Successfully Boot Up](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss)
* [2025-01-28, 18:19:04](https://lobste.rs/s/bkpqln/marginalia_search_engine_prioritizing) - [Marginalia - A search engine prioritizing non-commercial content](https://marginalia-search.com/)
* [2025-01-28, 16:33:32](https://news.ycombinator.com/item?id=42854291) - [Building a T1D smartwatch for my son from scratch](https://andrewchilds.com/posts/building-a-t1d-smartwatch-from-scratch)
* [2025-01-28, 13:45:00](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss) - [China's Second-Largest Foundry Hires Former Intel Executive to Lead Advanced Node Development](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss)
* [2025-01-28, 12:13:43](https://lobste.rs/s/noffmp/seven_things_i_know_after_25_years) - [Seven things I know after 25 years of development](https://zverok.space/blog/2025-01-27-7things-euruko.html)
* [2025-01-28, 09:01:00](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss) - [First-Ever Data Center On The Moon Set To Launch Next Month](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss)
* [2025-01-28, 07:35:08](https://lobste.rs/s/wb8pzw/deepseek_faq) - [DeepSeek FAQ](https://stratechery.com/2025/deepseek-faq/)
* [2025-01-28, 04:14:00](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss) - [The Drunken Plagiarists: Working with Co-pilots](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss)
* [2025-01-27, 23:30:00](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss) - [Data Breach Hitting PowerSchool Looks Very, Very Bad](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss)
* [2025-01-27, 18:44:00](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss) - [Sleeping Pills Stop the Brain’s System for Cleaning Out Waste](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss)
* [2025-01-27, 16:25:00](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss) - [Linux Kernel 6.13 Announced](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss)
* [2025-01-27, 13:55:00](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss) - [Think It Takes 21 Days to Form a Habit? Science Says Think Again](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss)
* [2025-01-27, 09:10:00](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss) - [Medical Device Company Suddenly Stops Hospitals From Fixing Machines Themselves](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss)
* [2025-01-27, 04:22:00](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss) - [Mysterious Blobs Found Inside Cells Are Rewriting the Story of How Life Works](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss)
* [2025-01-26, 23:34:00](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss) - [Florida Man Eats Diet of Butter, Cheese, Beef; Cholesterol Oozes From His Body](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss)
* [2025-01-26, 22:45:24](https://news.ycombinator.com/item?id=42834999) - [The 'no. 8 wire' tradition in New Zealand](https://teara.govt.nz/en/inventions-patents-and-trademarks/page-1)
* [2025-01-26, 18:51:00](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss) - [Real Datacenter Emissions Are A Dirty Secret](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss)
* [2025-01-26, 16:00:50](https://news.ycombinator.com/item?id=42830948) - [Proper decoupling capacitor practices, and why you should leave 100nF behind](https://codeinsecurity.wordpress.com/2025/01/25/proper-decoupling-practices-and-why-you-should-leave-100nf-behind/)
* [2025-01-26, 14:10:00](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss) - [Touchscreen Dashboards Have Finally Taken Over and Ruined Driving](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss)
* [2025-01-26, 09:25:00](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss) - [“Project Mini Rack” Wants Make Your Mini-Homelab a Reality](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss)
* [2025-01-26, 04:38:00](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss) - [Anthropic Chief Says AI Could Surpass “Almost All Humans at Almost Everything” Shortly After 2027](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss)
* [2025-01-26, 03:51:12](https://news.ycombinator.com/item?id=42827552) - [Game developers keep reinventing Tetris](https://www.polygon.com/gaming/513931/tetris-inspired-games-design-reaktor)
