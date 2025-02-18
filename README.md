# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence

* [AI 'Hallucinations' in Court Papers Spell Trouble For Lawyers](https://yro.slashdot.org/story/25/02/18/2147200/ai-hallucinations-in-court-papers-spell-trouble-for-lawyers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Legal professionals are warned about inaccuracies and risks posed by AI-generated court documents.

* [27% of Job Listings For CFOs Now Mention AI](https://slashdot.org/story/25/02/18/1718255/27-of-job-listings-for-cfos-now-mention-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A growing number of CFO job roles are emphasizing AI-related skills and knowledge.

## Computing and Technology Development

* [Chinese GPUs Surpass Nvidia Chips by Nearly Tenfold in Supercomputer Simulation](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss) - Chinese GPUs outperform Nvidia significantly in supercomputing benchmarks.

* [Nuclear fusion: WEST beats the world record for plasma duration](https://www.cea.fr/english/Pages/News/nuclear-fusion-west-beats-the-world-record-for-plasma-duration.aspx) - The WEST project achieves a milestone in sustained plasma duration, advancing fusion energy research.

* [Pi-hole v6](https://pi-hole.net/blog/2025/02/18/introducing-pi-hole-v6/) - The latest major update to Pi-hole introduces enhanced DNS and ad-blocking capabilities.

## Scientific Advances

* [Scientists Develop 'Injection' To Make Smartphone and EV Batteries Last Longer](https://science.slashdot.org/story/25/02/18/166204/scientists-develop-injection-to-make-smartphone-and-ev-batteries-last-longer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers propose a novel method to significantly extend battery life.

* [Unconventional' Nickel Superconductor Excites Physicists](https://science.slashdot.org/story/25/02/18/1535250/unconventional-nickel-superconductor-excites-physicists?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discovery of a unique superconductor with nickel ignites interest in the physics community.

## Open Source and Development

* [Valve releases Team Fortress 2 game code](https://github.com/ValveSoftware/source-sdk-2013/commit/0759e2e8e179d5352d81d0d4aaded72c1704b7a9) - Valve makes the source code for Team Fortress 2 publicly available for developers.

* [Build Rails Apps with Components](https://terminalwire.com/articles/superview) - A new methodology for using components in Rails promises more modular and maintainable development.

* [Reviewing the Cryptography Used by Signal](https://soatok.blog/2025/02/18/reviewing-the-cryptography-used-by-signal/) - A deep dive into the cryptographic methods employed by the Signal messaging app.

## Energy and Sustainability

* [Sandisk Puts Petabyte SSDs On the Roadmap](https://hardware.slashdot.org/story/25/02/18/047217/sandisk-puts-petabyte-ssds-on-the-roadmap?utm_source=rss1.0mainlinkanon&utm_medium=feed) - SanDisk announces ambitious plans to introduce petabyte-scale SSDs.

* [Lloyds Is Auditing Thousands of IT Staffers' Technical Skills](https://it.slashdot.org/story/25/02/18/1722255/lloyds-is-auditing-thousands-of-it-staffers-technical-skills?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Lloyds Bank undertakes a large-scale audit to evaluate and enhance tech workforce skills.

## Space and Exploration

* [Nokia is Putting the First Cellular Network On the Moon](https://science.slashdot.org/story/25/02/18/1616239/nokia-is-putting-the-first-cellular-network-on-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Nokia unveils plans to establish the first-ever lunar cellular network.

* [Targeting Amino Acids to Search for Life on Mars](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss) - Amino acids are being targeted in the quest to detect signs of extraterrestrial life on Mars.

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

* [2025-02-18, 21:46:00](https://yro.slashdot.org/story/25/02/18/2147200/ai-hallucinations-in-court-papers-spell-trouble-for-lawyers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI 'Hallucinations' in Court Papers Spell Trouble For Lawyers](https://yro.slashdot.org/story/25/02/18/2147200/ai-hallucinations-in-court-papers-spell-trouble-for-lawyers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss) - [Chinese GPUs Surpass Nvidia Chips by Nearly Tenfold in Supercomputer Simulation](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss)
* [2025-02-18, 21:39:01](https://lobste.rs/s/8yz0ap/general_wine_proton_developer_open) - [General Wine/Proton Developer (Open-Source Programmer)](https://www.codeweavers.com/about/jobs#job-dev)
* [2025-02-18, 21:18:51](https://lobste.rs/s/mja9nc/user_research_is_storytelling) - [User Research is Storytelling](https://alistapart.com/article/user-research-is-storytelling/)
* [2025-02-18, 21:00:58](https://news.ycombinator.com/item?id=43095067) - [Converge (YC S23) is hiring engineer #2 in NYC](https://jobs.gem.com/converge/am9icG9zdDreA6I3WJ4ZJ1Yx_WHS5zKP)
* [2025-02-18, 20:46:38](https://lobste.rs/s/7clfly/bellroy_technology_team_2024_review) - [Bellroy Technology Team: 2024 in Review](https://exploring-better-ways.bellroy.com/bellroy-technology-team-2024-in-review.html)
* [2025-02-18, 20:29:16](https://news.ycombinator.com/item?id=43094651) - [DeepSeek 'shared user data' with TikTok owner ByteDance](https://www.bbc.com/news/articles/c4gex0x87g4o)
* [2025-02-18, 20:15:24](https://news.ycombinator.com/item?id=43094467) - [AWS paywalling select knowledge base articles, requiring Premium Support plan](https://repost.aws/knowledge-center/eks-api-server-unauthorized-error)
* [2025-02-18, 20:05:00](https://news.slashdot.org/story/25/02/18/205226/groups-ask-us-court-to-reconsider-ruling-blocking-net-neutrality-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Groups Ask US Court To Reconsider Ruling Blocking Net Neutrality Rules](https://news.slashdot.org/story/25/02/18/205226/groups-ask-us-court-to-reconsider-ruling-blocking-net-neutrality-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 19:57:17](https://news.ycombinator.com/item?id=43094260) - [Valve releases Team Fortress 2 game code](https://github.com/ValveSoftware/source-sdk-2013/commit/0759e2e8e179d5352d81d0d4aaded72c1704b7a9)
* [2025-02-18, 19:33:32](https://news.ycombinator.com/item?id=43094006) - [My LLM codegen workflow](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)
* [2025-02-18, 19:26:33](https://news.ycombinator.com/item?id=43093939) - [Nuclear fusion: WEST beats the world record for plasma duration](https://www.cea.fr/english/Pages/News/nuclear-fusion-west-beats-the-world-record-for-plasma-duration.aspx)
* [2025-02-18, 19:18:43](https://news.ycombinator.com/item?id=43093859) - [Moving on from 18F](https://ethanmarcotte.com/wrote/leaving-18f/)
* [2025-02-18, 19:03:55](https://lobste.rs/s/r0ybx2/representing_graphs_postgresql_with_sql) - [Representing graphs in Postgresql with SQL/PGQ](https://www.enterprisedb.com/blog/representing-graphs-postgresql-sqlpgq)
* [2025-02-18, 18:55:31](https://news.ycombinator.com/item?id=43093610) - [Tensor evolution: A framework for fast tensor computations using recurrences](https://arxiv.org/abs/2502.03402)
* [2025-02-18, 18:50:00](https://it.slashdot.org/story/25/02/18/1722255/lloyds-is-auditing-thousands-of-it-staffers-technical-skills?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Lloyds Is Auditing Thousands of IT Staffers' Technical Skills](https://it.slashdot.org/story/25/02/18/1722255/lloyds-is-auditing-thousands-of-it-staffers-technical-skills?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 18:31:36](https://news.ycombinator.com/item?id=43093328) - [Pi-hole v6](https://pi-hole.net/blog/2025/02/18/introducing-pi-hole-v6/)
* [2025-02-18, 18:16:22](https://news.ycombinator.com/item?id=43093155) - [Among top researchers 10% publish at unrealistic levels, analysis finds](https://www.chemistryworld.com/news/among-worlds-top-researchers-10-publish-at-unrealistic-levels-analysis-finds/4020962.article)
* [2025-02-18, 18:10:00](https://slashdot.org/story/25/02/18/1718255/27-of-job-listings-for-cfos-now-mention-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [27% of Job Listings For CFOs Now Mention AI](https://slashdot.org/story/25/02/18/1718255/27-of-job-listings-for-cfos-now-mention-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 17:33:52](https://news.ycombinator.com/item?id=43092579) - [Building an Open, Multi-Engine Data Lakehouse with S3 and Python](https://tower.dev/blog/building-an-open-multi-engine-data-lakehouse-with-s3-and-python)
* [2025-02-18, 17:30:39](https://news.ycombinator.com/item?id=43092522) - [Launch HN: Promptless (YC W25) – Automatic updates for customer-facing docs](https://news.ycombinator.com/item?id=43092522)
* [2025-02-18, 17:30:00](https://slashdot.org/story/25/02/18/1634218/deepseek-expands-business-scope-in-potential-shift-towards-monetization?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek Expands Business Scope in Potential Shift Towards Monetization](https://slashdot.org/story/25/02/18/1634218/deepseek-expands-business-scope-in-potential-shift-towards-monetization?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 17:21:31](https://news.ycombinator.com/item?id=43092386) - [Try thinking and learning without working memory (2008)](https://sharpbrains.com/blog/2008/05/25/try-thinking-and-learning-without-working-memory/)
* [2025-02-18, 17:08:22](https://lobste.rs/s/bfm4af/mitm_attack_against_openssh_s) - [MitM attack against OpenSSH's VerifyHostKeyDNS-enabled client](https://marc.info/?l=oss-security&m=173986993304277&w=2)
* [2025-02-18, 16:52:00](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss) - [New Book-Sorting Algorithm Almost Reaches Perfection](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss)
* [2025-02-18, 16:50:00](https://science.slashdot.org/story/25/02/18/1616239/nokia-is-putting-the-first-cellular-network-on-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nokia is Putting the First Cellular Network On the Moon](https://science.slashdot.org/story/25/02/18/1616239/nokia-is-putting-the-first-cellular-network-on-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 16:30:33](https://lobste.rs/s/fiagu7/build_rails_apps_with_components) - [Build Rails Apps with Components](https://terminalwire.com/articles/superview)
* [2025-02-18, 16:29:46](https://news.ycombinator.com/item?id=43091596) - [Svelte 5 is not JavaScript](https://hodlbod.npub.pro/post/1739830562159/)
* [2025-02-18, 16:13:43](https://lobste.rs/s/76ifpd/these_years_common_lisp_2023_2024_review) - [These years in Common Lisp: 2023-2024 in review](https://lisp-journey.gitlab.io/blog/these-years-in-common-lisp-2023-2024-in-review/)
* [2025-02-18, 16:10:00](https://science.slashdot.org/story/25/02/18/166204/scientists-develop-injection-to-make-smartphone-and-ev-batteries-last-longer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Scientists Develop 'Injection' To Make Smartphone and EV Batteries Last Longer](https://science.slashdot.org/story/25/02/18/166204/scientists-develop-injection-to-make-smartphone-and-ev-batteries-last-longer?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 16:08:20](https://news.ycombinator.com/item?id=43091159) - [Catalytic computing taps the full power of a full hard drive](https://www.quantamagazine.org/catalytic-computing-taps-the-full-power-of-a-full-hard-drive-20250218/)
* [2025-02-18, 15:58:28](https://lobste.rs/s/uaz4x1/exo_software_distributed_llm_solution) - [exo software - A distributed LLM solution running on a cluster of computers, smartphones, or SBCs](https://www.cnx-software.com/2025/02/18/exo-software-a-distributed-llm-solution-running-on-a-cluster-of-computers-smartphones-or-sbcs/)
* [2025-02-18, 15:35:00](https://science.slashdot.org/story/25/02/18/1535250/unconventional-nickel-superconductor-excites-physicists?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Unconventional' Nickel Superconductor Excites Physicists](https://science.slashdot.org/story/25/02/18/1535250/unconventional-nickel-superconductor-excites-physicists?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 15:02:12](https://lobste.rs/s/mswgiv/swe_lancer_can_frontier_llms_earn_1) - [SWE-Lancer: Can Frontier LLMs Earn $1 Million from Real-World Freelance Software Engineering?](https://arxiv.org/abs/2502.12115)
* [2025-02-18, 14:57:09](https://news.ycombinator.com/item?id=43090214) - [Show HN: Scripton – Python IDE with built-in realtime visualizations](https://scripton.dev)
* [2025-02-18, 14:50:00](https://hardware.slashdot.org/story/25/02/18/1451205/acer-to-raise-us-laptop-prices-10-after-tariffs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Acer To Raise US Laptop Prices 10% After Tariffs](https://hardware.slashdot.org/story/25/02/18/1451205/acer-to-raise-us-laptop-prices-10-after-tariffs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 14:01:00](https://slashdot.org/story/25/02/18/141245/former-staffers-say-indias-biggest-it-firm-was-gaming-the-us-visa-system?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Former Staffers Say India's Biggest IT Firm Was Gaming the US Visa System](https://slashdot.org/story/25/02/18/141245/former-staffers-say-indias-biggest-it-firm-was-gaming-the-us-visa-system?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 13:49:53](https://lobste.rs/s/nkhjec/japanese_engineers_talk_about) - [Japanese engineers talk about difficulties they faced with the Nintendo Switch](https://automaton-media.com/en/game-development/the-nintendo-switch-limited-cpu-and-ram-but-it-also-made-optimization-a-fun-puzzle-to-figure-out-japanese-engineers-talk-about-difficulties-they-faced/)
* [2025-02-18, 12:33:50](https://lobste.rs/s/aexhi5/reviewing_cryptography_used_by_signal) - [Reviewing the Cryptography Used by Signal](https://soatok.blog/2025/02/18/reviewing-the-cryptography-used-by-signal/)
* [2025-02-18, 12:30:00](https://linux.slashdot.org/story/25/02/18/0953205/free-software-foundation-speaks-up-against-red-hat-source-code-announcement?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Free Software Foundation Speaks Up Against Red Hat Source Code Announcement](https://linux.slashdot.org/story/25/02/18/0953205/free-software-foundation-speaks-up-against-red-hat-source-code-announcement?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 12:04:00](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss) - [EU Bans Bisphenol A From Contact With Food](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss)
* [2025-02-18, 10:02:30](https://news.ycombinator.com/item?id=43087944) - [XOR](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/xor/)
* [2025-02-18, 10:01:00](https://games.slashdot.org/story/25/02/18/0949207/playstation-veteran-blames-gaming-industry-slump-on-pandemic-overexpansion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [PlayStation Veteran Blames Gaming Industry Slump on Pandemic Overexpansion](https://games.slashdot.org/story/25/02/18/0949207/playstation-veteran-blames-gaming-industry-slump-on-pandemic-overexpansion?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 09:19:26](https://lobste.rs/s/9ectnm/go_attention_full_attention_mechanism) - [go-attention: A full attention mechanism and transformer in pure Go](https://github.com/takara-ai/go-attention)
* [2025-02-18, 08:48:16](https://news.ycombinator.com/item?id=43087482) - [Making my debug build run 100x faster so that it is finally usable](https://gaultier.github.io/blog/making_my_debug_build_run_100_times_faster.html)
* [2025-02-18, 08:39:50](https://lobste.rs/s/vpiex3/code_style_sheets_css_for_code) - [Code Style Sheets: CSS for Code](https://arxiv.org/pdf/2502.09386)
* [2025-02-18, 07:30:00](https://slashdot.org/story/25/02/18/0711226/xai-releases-its-latest-flagship-model-grok-3?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [xAI Releases Its Latest Flagship Model, Grok 3](https://slashdot.org/story/25/02/18/0711226/xai-releases-its-latest-flagship-model-grok-3?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 07:19:00](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss) - [Targeting Amino Acids to Search for Life on Mars](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss)
* [2025-02-18, 06:30:00](https://hardware.slashdot.org/story/25/02/18/047217/sandisk-puts-petabyte-ssds-on-the-roadmap?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sandisk Puts Petabyte SSDs On the Roadmap](https://hardware.slashdot.org/story/25/02/18/047217/sandisk-puts-petabyte-ssds-on-the-roadmap?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 06:02:13](https://lobste.rs/s/ds1odn/mtr_metrics) - [mtr metrics](http://mk16.de/blog/mtr-metrics/)
* [2025-02-18, 05:53:55](https://news.ycombinator.com/item?id=43086479) - [Show HN: Live-updating version of the 'What a week, huh?' meme](https://tintin.dlazaro.ca/)
* [2025-02-18, 05:03:34](https://lobste.rs/s/sg14pc/new_faux_bus_api_merged_for_linux_6_14) - [New \"faux bus\" API merged for Linux 6.14, including both Rust & C bindings](https://www.phoronix.com/news/Linux-6.14-Faux-Bus-Merged)
* [2025-02-18, 04:54:44](https://lobste.rs/s/7zwyoh/arcaos_5_1_1_released_modern_os_2) - [ArcaOS 5.1.1 released (modern OS/2)](https://www.arcanoae.com/wiki/arcaos/change-history-arcaos-5-1/)
* [2025-02-18, 04:04:54](https://news.ycombinator.com/item?id=43085957) - [Grok3 Launch [video]](https://x.com/xai/status/1891699715298730482)
* [2025-02-18, 04:02:00](https://hardware.slashdot.org/story/25/02/18/0348230/nand-flash-prices-plunge-amid-supply-glut-factory-output-cut?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NAND Flash Prices Plunge Amid Supply Glut, Factory Output Cut](https://hardware.slashdot.org/story/25/02/18/0348230/nand-flash-prices-plunge-amid-supply-glut-factory-output-cut?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 03:45:28](https://news.ycombinator.com/item?id=43085876) - [My washing machine refreshed my thinking on software estimation](https://www.cosive.com/blog/my-washing-machine-refreshed-my-thinking-on-software-effort-estimation)
* [2025-02-18, 03:03:09](https://lobste.rs/s/a83yzz/access_bus_forgotten_usb_competitor) - [ACCESS.bus: The Forgotten USB Competitor](https://tedium.co/2025/02/17/access-bus-i2c-usb-competitor-history/)
* [2025-02-18, 02:29:00](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss) - [DOGE as a National Cyberattack](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss)
* [2025-02-18, 00:33:04](https://news.ycombinator.com/item?id=43084682) - [Robocode](https://robocode.sourceforge.io/)
* [2025-02-17, 23:43:22](https://news.ycombinator.com/item?id=43084350) - [Programming with chronic pain](https://thomasvogelaar.me/posts/programming-with-chronic-pain/)
* [2025-02-17, 23:43:09](https://news.ycombinator.com/item?id=43084349) - [EEG Study of Buddhist Jhāna Meditation (2019)](https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2019.00178/full)
* [2025-02-17, 22:11:33](https://lobste.rs/s/ch64l3/new_junior_developers_can_t_actually_code) - [New Junior Developers Can’t Actually Code](https://nmn.gl/blog/ai-and-learning)
* [2025-02-17, 20:44:00](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss) - [Octet Of ESP32s Lets You See WiFi Like Never Before](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss)
* [2025-02-17, 20:43:08](https://lobste.rs/s/dfhwq1/nes86_x86_emulation_on_nes) - [nes86: x86 emulation on the NES](https://github.com/decrazyo/nes86)
* [2025-02-17, 20:30:26](https://news.ycombinator.com/item?id=43083017) - [Why I'm writing a Scheme implementation in 2025: Async Rust](https://maplant.com/2025-02-17-Why-I%27m-Writing-a-Scheme-Implementation-in-2025-(The-Answer-is-Async-Rust).html)
* [2025-02-17, 20:29:53](https://lobste.rs/s/zm1g8r/why_i_m_writing_scheme_implementation) - [Why I'm Writing a Scheme Implementation in 2025 (The Answer is Async Rust)](https://maplant.com/2025-02-17-Why-I'm-Writing-a-Scheme-Implementation-in-2025-(The-Answer-is-Async-Rust).html)
* [2025-02-17, 19:56:23](https://lobste.rs/s/ckjevs/choosing_browser) - [Choosing a browser](https://eligrey.com/blog/choosing-a-browser/)
* [2025-02-17, 17:49:24](https://lobste.rs/s/c6rk0l/14_years_systemd) - [14 years of systemd](https://lwn.net/SubscriberLink/1008721/7c31808d76480012/)
* [2025-02-17, 16:02:00](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss) - [Women Speak Some 3000ish Words More Per Day Than Men](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss)
* [2025-02-17, 15:29:48](https://news.ycombinator.com/item?id=43079952) - [(Ab)using general search algorithms on dynamic optimization problems (2023)](https://dubovik.eu/blog/search-algorithms)
* [2025-02-17, 15:29:07](https://lobste.rs/s/yipk5r/can_i_ethically_use_llms) - [Can I ethically use LLMs?](https://ntietz.com/blog/can-i-ethically-use-llms/)
* [2025-02-17, 12:42:07](https://lobste.rs/s/5hmdqi/searchcode_com_s_sqlite_database_is) - [searchcode.com’s SQLite database is probably 6 terabytes bigger than yours](https://boyter.org/posts/searchcode-bigger-sqlite-than-you/)
* [2025-02-17, 11:15:00](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss) - [Wiggling Ears May Have Once Helped Us Hear](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss)
* [2025-02-17, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss) - [AUKUS Blasts Holes In Lockbit's Bulletproof Hosting Provider](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss)
* [2025-02-17, 02:05:28](https://lobste.rs/s/sag0p3/making_web_more_readable_with_stylus) - [Making the Web More Readable With Stylus](https://www.wezm.net/v2/posts/2025/stylus/)
* [2025-02-17, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss) - [Ignorance Bliss When You’Re Drowning In Information](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss)
* [2025-02-17, 00:45:01](https://news.ycombinator.com/item?id=43073527) - [A GPU-Accelerated Binary Vector Index](https://rlafuente.com/post?post=2024-6-12-a-binary-vector-store)
* [2025-02-16, 20:54:00](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss) - [The Guy Who Accidentally Threw Away $700 Million in Bitcoin Wants to Buy the Landfill to Find It](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss)
* [2025-02-16, 16:12:00](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss) - [Waste Surveillance at Just 20 Airports Could Spot the Next Pandemic](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss)
* [2025-02-16, 11:27:00](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss) - [AI Reveals Hidden Interior Design Rules of the Cell](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss)
* [2025-02-16, 08:33:47](https://news.ycombinator.com/item?id=43066394) - [670nm red light exposure improved aged mitochondrial function, colour vision](https://www.nature.com/articles/s41598-021-02311-1)
* [2025-02-16, 06:42:00](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss) - [Key Takeaways From The Paris AI Summit](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss)
* [2025-02-16, 01:58:00](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss) - [If You Ever Stacked Cups In Gym Class, Blame My Dad](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss)
* [2025-02-15, 21:09:00](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss) - [Let’s Buy California from Trump – Denmark’s Next Big Adventure ](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss)
* [2025-02-15, 16:24:00](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss) - [Flies Play Too, Carousel Study Suggests](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss)
* [2025-02-15, 11:38:00](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss) - [Anyone Can Push Updates to the DOGE.gov Website](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss)
* [2025-02-15, 11:23:46](https://news.ycombinator.com/item?id=43057721) - [Kleene as a Container Management Platform for FreeBSD](https://gyptazy.com/howto-kleene-as-a-container-management-platform-for-freebsd/)
* [2025-02-15, 06:52:00](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss) - [RTX5090 Cable Overheats to 150 C Where Uneven Current Distribution Likely the Culprit](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss)
* [2025-02-15, 02:08:00](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss) - [EU Will Put Over $200 Billion Toward AI Development](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss)
* [2025-02-14, 21:53:40](https://news.ycombinator.com/item?id=43053499) - [Saying goodbye to FFmpegKit](https://tanersener.medium.com/saying-goodbye-to-ffmpegkit-33ae939767e1)
* [2025-02-14, 21:25:00](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss) - [8 Million Requests Later, We Made The SolarWinds Supply Chain Attack Look Amateur](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss)
* [2025-02-14, 16:17:00](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss) - [Judge Agrees Trump's Removal Of Health Websites Threatens The Public](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss)
* [2025-02-14, 11:34:00](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss) - [Earth's Inner Core is Less Solid Than Previously Thought: Study Reveals Structural Transformation](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss)
* [2025-02-14, 06:50:00](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss) - [Hackers Leak Cop Manuals for Departments Nationwide After Breaching Major Provider](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss)
* [2025-02-14, 02:04:00](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss) - [The Science of Why There's Less Passing in the Daytona 500](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss)
