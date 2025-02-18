# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Developments

* [Lloyds Is Auditing Thousands of IT Staffers' Technical Skills](https://it.slashdot.org/story/25/02/18/1722255/lloyds-is-auditing-thousands-of-it-staffers-technical-skills?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major financial institution evaluates IT staff capabilities through a comprehensive audit.

* [Pi-Hole v6](https://pi-hole.net/blog/2025/02/18/introducing-pi-hole-v6/) - The latest version of Pi-Hole introduces significant enhancements for tracking prevention.

* [AMD's game-changing Strix Halo, formerly Ryzen AI Max, poses for new die shots](https://www.tomshardware.com/pc-components/gpus/amds-game-changing-strix-halo-apu-formerly-ryzen-ai-max-poses-for-new-die-shots) - AMD reveals its cutting-edge Strix Halo processor, emphasizing AI.

* [Scientists Develop 'Injection' To Make Smartphone and EV Batteries Last Longer](https://science.slashdot.org/story/25/02/18/166204/scientists-develop-injection-to-make-smartphone-and-ev-batteries-last-longer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers create a breakthrough technology to extend battery life.

* [Nokia is Putting the First Cellular Network On the Moon](https://science.slashdot.org/story/25/02/18/1616239/nokia-is-putting-the-first-cellular-network-on-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Groundbreaking plans to establish extraterrestrial communication systems.

## Artificial Intelligence and Software Solutions

* [27% of Job Listings For CFOs Now Mention AI](https://slashdot.org/story/25/02/18/1718255/27-of-job-listings-for-cfos-now-mention-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The growing prominence of AI in corporate leadership roles.

* [Launch HN: Promptless (YC W25) – Automatic updates for customer-facing docs](https://news.ycombinator.com/item?id=43092522) - A new tool automates documentation updates using AI advancements.

* [exo software - A distributed LLM solution running on a cluster of computers, smartphones, or SBCs](https://www.cnx-software.com/2025/02/18/exo-software-a-distributed-llm-solution-running-on-a-cluster-of-computers-smartphones-or-sbcs/) - Innovative solution for distributed large language models (LLMs).

* [xAI Releases Its Latest Flagship Model, Grok 3](https://slashdot.org/story/25/02/18/0711226/xai-releases-its-latest-flagship-model-grok-3?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major AI model launch highlights advanced machine learning capabilities.

## Science and Environmental Advances

* [New Book-Sorting Algorithm Almost Reaches Perfection](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss) - A mathematical breakthrough brings precision to library management.

* [Targeting Amino Acids to Search for Life on Mars](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss) - Scientists propose targeting amino acids as a strategy for astrobiological exploration.

* ['Unconventional' Nickel Superconductor Excites Physicists](https://science.slashdot.org/story/25/02/18/1535250/unconventional-nickel-superconductor-excites-physicists?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A mystery-shrouded material captivates the physics community.

* [EU Bans Bisphenol A From Contact With Food](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss) - Europe introduces stricter controls for food safety.

## Cybersecurity and Digital Ethics

* [MitM attack against OpenSSH's VerifyHostKeyDNS-enabled client](https://marc.info/?l=oss-security&m=173986993304277&w=2) - Researchers uncover vulnerabilities in OpenSSH's DNS verification.

* [Reviewing the Cryptography Used by Signal](https://soatok.blog/2025/02/18/reviewing-the-cryptography-used-by-signal/) - Signal's cryptographic implementations come under technical scrutiny.

* [Free Software Foundation Speaks Up Against Red Hat Source Code Announcement](https://linux.slashdot.org/story/25/02/18/0953205/free-software-foundation-speaks-up-against-red-hat-source-code-announcement?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Red Hat faces backlash over changes in its open-source policies.

## Gaming and Entertainment Insights

* [Japanese engineers talk about difficulties they faced with the Nintendo Switch](https://automaton-media.com/en/game-development/the-nintendo-switch-limited-cpu-and-ram-but-it-also-made-optimization-a-fun-puzzle-to-figure-out-japanese-engineers-talk-about-difficulties-they-faced/) - Developers share the challenges and engaging puzzles of optimizing for the Nintendo Switch.

* [PlayStation Veteran Blames Gaming Industry Slump on Pandemic Overexpansion](https://games.slashdot.org/story/25/02/18/0949207/playstation-veteran-blames-gaming-industry-slump-on-pandemic-overexpansion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Industry leader reflects on market shifts due to overexpansion during the pandemic.

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

* [2025-02-18, 18:50:00](https://it.slashdot.org/story/25/02/18/1722255/lloyds-is-auditing-thousands-of-it-staffers-technical-skills?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Lloyds Is Auditing Thousands of IT Staffers' Technical Skills](https://it.slashdot.org/story/25/02/18/1722255/lloyds-is-auditing-thousands-of-it-staffers-technical-skills?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 18:31:36](https://news.ycombinator.com/item?id=43093328) - [Pi-Hole v6](https://pi-hole.net/blog/2025/02/18/introducing-pi-hole-v6/)
* [2025-02-18, 18:20:10](https://news.ycombinator.com/item?id=43093197) - [AMD's game-changing Strix Halo, formerly Ryzen AI Max, poses for new die shots](https://www.tomshardware.com/pc-components/gpus/amds-game-changing-strix-halo-apu-formerly-ryzen-ai-max-poses-for-new-die-shots)
* [2025-02-18, 18:16:22](https://news.ycombinator.com/item?id=43093155) - [Among top researchers 10% publish at unrealistic levels, analysis finds](https://www.chemistryworld.com/news/among-worlds-top-researchers-10-publish-at-unrealistic-levels-analysis-finds/4020962.article)
* [2025-02-18, 18:10:00](https://slashdot.org/story/25/02/18/1718255/27-of-job-listings-for-cfos-now-mention-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [27% of Job Listings For CFOs Now Mention AI](https://slashdot.org/story/25/02/18/1718255/27-of-job-listings-for-cfos-now-mention-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 17:30:39](https://news.ycombinator.com/item?id=43092522) - [Launch HN: Promptless (YC W25) – Automatic updates for customer-facing docs](https://news.ycombinator.com/item?id=43092522)
* [2025-02-18, 17:30:00](https://slashdot.org/story/25/02/18/1634218/deepseek-expands-business-scope-in-potential-shift-towards-monetization?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek Expands Business Scope in Potential Shift Towards Monetization](https://slashdot.org/story/25/02/18/1634218/deepseek-expands-business-scope-in-potential-shift-towards-monetization?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 17:25:10](https://lobste.rs/s/3nnlv2/chris_biscardi_growing_little) - [Chris Biscardi: Growing little experiments (with Rust & Bevy)](https://www.youtube.com/watch?v=amugqciMkT4)
* [2025-02-18, 17:23:42](https://news.ycombinator.com/item?id=43092421) - [A simple geometry question that fools almost everyone](https://www.theguardian.com/science/2025/feb/17/can-you-solve-it-the-simple-geometry-question-that-fools-almost-everyone)
* [2025-02-18, 17:21:42](https://news.ycombinator.com/item?id=43092389) - [Web awesome: \"Shoelace 3.0\" open source web components](https://backers.webawesome.com)
* [2025-02-18, 17:21:31](https://news.ycombinator.com/item?id=43092386) - [Try thinking and learning without working memory (2008)](https://sharpbrains.com/blog/2008/05/25/try-thinking-and-learning-without-working-memory/)
* [2025-02-18, 17:08:22](https://lobste.rs/s/bfm4af/mitm_attack_against_openssh_s) - [MitM attack against OpenSSH's VerifyHostKeyDNS-enabled client](https://marc.info/?l=oss-security&m=173986993304277&w=2)
* [2025-02-18, 16:52:00](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss) - [New Book-Sorting Algorithm Almost Reaches Perfection](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss)
* [2025-02-18, 16:50:00](https://science.slashdot.org/story/25/02/18/1616239/nokia-is-putting-the-first-cellular-network-on-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nokia is Putting the First Cellular Network On the Moon](https://science.slashdot.org/story/25/02/18/1616239/nokia-is-putting-the-first-cellular-network-on-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 16:30:33](https://lobste.rs/s/fiagu7/build_rails_apps_with_components) - [Build Rails Apps with Components](https://terminalwire.com/articles/superview)
* [2025-02-18, 16:29:46](https://news.ycombinator.com/item?id=43091596) - [Svelte 5 is not JavaScript](https://hodlbod.npub.pro/post/1739830562159/)
* [2025-02-18, 16:13:43](https://lobste.rs/s/76ifpd/these_years_common_lisp_2023_2024_review) - [These years in Common Lisp: 2023-2024 in review](https://lisp-journey.gitlab.io/blog/these-years-in-common-lisp-2023-2024-in-review/)
* [2025-02-18, 16:11:38](https://news.ycombinator.com/item?id=43091217) - [Are electric cars that much cheaper to operate?](https://www.pavlinbg.com/posts/are-electric-cars-really-that-much-cheaper-to-operate-than-ice)
* [2025-02-18, 16:10:00](https://science.slashdot.org/story/25/02/18/166204/scientists-develop-injection-to-make-smartphone-and-ev-batteries-last-longer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Scientists Develop 'Injection' To Make Smartphone and EV Batteries Last Longer](https://science.slashdot.org/story/25/02/18/166204/scientists-develop-injection-to-make-smartphone-and-ev-batteries-last-longer?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 16:08:20](https://news.ycombinator.com/item?id=43091159) - [Catalytic computing taps the full power of a full hard drive](https://www.quantamagazine.org/catalytic-computing-taps-the-full-power-of-a-full-hard-drive-20250218/)
* [2025-02-18, 16:06:36](https://news.ycombinator.com/item?id=43091128) - [Broadcom, TSMC eye possible Intel deals to split storied chipmaker](https://www.reuters.com/markets/deals/broadcom-tsmc-eye-possible-intel-deals-that-would-split-storied-chipmaker-wsj-2025-02-16/)
* [2025-02-18, 15:58:28](https://lobste.rs/s/uaz4x1/exo_software_distributed_llm_solution) - [exo software - A distributed LLM solution running on a cluster of computers, smartphones, or SBCs](https://www.cnx-software.com/2025/02/18/exo-software-a-distributed-llm-solution-running-on-a-cluster-of-computers-smartphones-or-sbcs/)
* [2025-02-18, 15:35:00](https://science.slashdot.org/story/25/02/18/1535250/unconventional-nickel-superconductor-excites-physicists?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Unconventional' Nickel Superconductor Excites Physicists](https://science.slashdot.org/story/25/02/18/1535250/unconventional-nickel-superconductor-excites-physicists?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 15:02:12](https://lobste.rs/s/mswgiv/swe_lancer_can_frontier_llms_earn_1) - [SWE-Lancer: Can Frontier LLMs Earn $1 Million from Real-World Freelance Software Engineering?](https://arxiv.org/abs/2502.12115)
* [2025-02-18, 14:57:09](https://news.ycombinator.com/item?id=43090214) - [Show HN: Scripton – Python IDE with built-in realtime visualizations](https://scripton.dev)
* [2025-02-18, 14:50:00](https://hardware.slashdot.org/story/25/02/18/1451205/acer-to-raise-us-laptop-prices-10-after-tariffs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Acer To Raise US Laptop Prices 10% After Tariffs](https://hardware.slashdot.org/story/25/02/18/1451205/acer-to-raise-us-laptop-prices-10-after-tariffs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 14:01:00](https://slashdot.org/story/25/02/18/141245/former-staffers-say-indias-biggest-it-firm-was-gaming-the-us-visa-system?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Former Staffers Say India's Biggest IT Firm Was Gaming the US Visa System](https://slashdot.org/story/25/02/18/141245/former-staffers-say-indias-biggest-it-firm-was-gaming-the-us-visa-system?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 13:53:47](https://news.ycombinator.com/item?id=43089468) - [Show HN: Cot: a Rust web framework for lazy developers](https://mackow.ski/blog/cot-the-rust-web-framework-for-lazy-developers/)
* [2025-02-18, 13:49:53](https://lobste.rs/s/nkhjec/japanese_engineers_talk_about) - [Japanese engineers talk about difficulties they faced with the Nintendo Switch](https://automaton-media.com/en/game-development/the-nintendo-switch-limited-cpu-and-ram-but-it-also-made-optimization-a-fun-puzzle-to-figure-out-japanese-engineers-talk-about-difficulties-they-faced/)
* [2025-02-18, 13:22:02](https://news.ycombinator.com/item?id=43089150) - [The ideal candidate will be punched in the stomach](https://www.scottsmitelli.com/articles/ideal-candidate/)
* [2025-02-18, 12:33:50](https://lobste.rs/s/aexhi5/reviewing_cryptography_used_by_signal) - [Reviewing the Cryptography Used by Signal](https://soatok.blog/2025/02/18/reviewing-the-cryptography-used-by-signal/)
* [2025-02-18, 12:30:00](https://linux.slashdot.org/story/25/02/18/0953205/free-software-foundation-speaks-up-against-red-hat-source-code-announcement?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Free Software Foundation Speaks Up Against Red Hat Source Code Announcement](https://linux.slashdot.org/story/25/02/18/0953205/free-software-foundation-speaks-up-against-red-hat-source-code-announcement?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 12:04:00](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss) - [EU Bans Bisphenol A From Contact With Food](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss)
* [2025-02-18, 12:00:43](https://news.ycombinator.com/item?id=43088567) - [Jiga (YC W21) Is Hiring Mongo/React/Node Engineers](https://www.ycombinator.com/companies/jiga/jobs/KMtdgpo-full-stack-engineer)
* [2025-02-18, 11:31:25](https://lobste.rs/s/hmf0ht/self_designing_software) - [Self-Designing Software](https://cacm.acm.org/research/self-designing-software/)
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
* [2025-02-18, 03:07:45](https://news.ycombinator.com/item?id=43085687) - [Sony FX-300 Jackal: A technological marvel of the late 70s (2021)](https://swling.com/blog/2021/03/the-sony-fx-300-jackal-a-holy-grail-technological-marvel-of-the-late-70s/)
* [2025-02-18, 03:03:09](https://lobste.rs/s/a83yzz/access_bus_forgotten_usb_competitor) - [ACCESS.bus: The Forgotten USB Competitor](https://tedium.co/2025/02/17/access-bus-i2c-usb-competitor-history/)
* [2025-02-18, 03:00:00](https://tech.slashdot.org/story/25/02/18/0252258/mexico-threatens-to-sue-google-over-gulf-renaming?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mexico Threatens To Sue Google Over Gulf Renaming](https://tech.slashdot.org/story/25/02/18/0252258/mexico-threatens-to-sue-google-over-gulf-renaming?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 02:29:00](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss) - [DOGE as a National Cyberattack](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss)
* [2025-02-18, 01:57:00](https://news.slashdot.org/story/25/02/18/0156241/when-a-lifetime-subscription-can-save-you-money---and-when-its-risky?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [When a Lifetime Subscription Can Save You Money - and When It's Risky](https://news.slashdot.org/story/25/02/18/0156241/when-a-lifetime-subscription-can-save-you-money---and-when-its-risky?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 23:44:28](https://news.ycombinator.com/item?id=43084355) - [Why can't we remember our lives as babies or toddlers?](https://www.theguardian.com/science/2025/feb/16/why-cant-we-remember-our-lives-as-babies-or-toddlers)
* [2025-02-17, 23:11:33](https://news.ycombinator.com/item?id=43084145) - [On David Lynch's Revenge of the Jedi (2018)](https://www.benningtonreview.org/adam-golaski)
* [2025-02-17, 22:11:33](https://lobste.rs/s/ch64l3/new_junior_developers_can_t_actually_code) - [New Junior Developers Can’t Actually Code](https://nmn.gl/blog/ai-and-learning)
* [2025-02-17, 20:44:00](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss) - [Octet Of ESP32s Lets You See WiFi Like Never Before](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss)
* [2025-02-17, 20:43:08](https://lobste.rs/s/dfhwq1/nes86_x86_emulation_on_nes) - [nes86: x86 emulation on the NES](https://github.com/decrazyo/nes86)
* [2025-02-17, 20:30:26](https://news.ycombinator.com/item?id=43083017) - [Why I'm writing a Scheme implementation in 2025: Async Rust](https://maplant.com/2025-02-17-Why-I%27m-Writing-a-Scheme-Implementation-in-2025-(The-Answer-is-Async-Rust).html)
* [2025-02-17, 20:30:04](https://news.ycombinator.com/item?id=43083012) - [Plane crashes, overturns during landing at Toronto airport](https://www.cbc.ca/news/canada/toronto/toronto-pearson-overturned-airplane-1.7461227)
* [2025-02-17, 20:29:53](https://lobste.rs/s/zm1g8r/why_i_m_writing_scheme_implementation) - [Why I'm Writing a Scheme Implementation in 2025 (The Answer is Async Rust)](https://maplant.com/2025-02-17-Why-I'm-Writing-a-Scheme-Implementation-in-2025-(The-Answer-is-Async-Rust).html)
* [2025-02-17, 19:56:23](https://lobste.rs/s/ckjevs/choosing_browser) - [Choosing a browser](https://eligrey.com/blog/choosing-a-browser/)
* [2025-02-17, 17:49:24](https://lobste.rs/s/c6rk0l/14_years_systemd) - [14 years of systemd](https://lwn.net/SubscriberLink/1008721/7c31808d76480012/)
* [2025-02-17, 16:02:00](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss) - [Women Speak Some 3000ish Words More Per Day Than Men](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss)
* [2025-02-17, 15:29:48](https://news.ycombinator.com/item?id=43079952) - [(Ab)using general search algorithms on dynamic optimization problems (2023)](https://dubovik.eu/blog/search-algorithms)
* [2025-02-17, 15:29:07](https://lobste.rs/s/yipk5r/can_i_ethically_use_llms) - [Can I ethically use LLMs?](https://ntietz.com/blog/can-i-ethically-use-llms/)
* [2025-02-17, 13:27:34](https://lobste.rs/s/evay67/design_build_some_elegant_fully) - [Design/build of some elegant, fully parametric speaker cabinets](https://calbryant.uk/blog/speakers/)
* [2025-02-17, 13:11:35](https://lobste.rs/s/b5dnjh/0_0_0_c_thread_local_storage_performance) - [0+0 > 0: C++ thread-local storage performance](https://yosefk.com/blog/cxx-thread-local-storage-performance.html)
* [2025-02-17, 12:42:07](https://lobste.rs/s/5hmdqi/searchcode_com_s_sqlite_database_is) - [searchcode.com’s SQLite database is probably 6 terabytes bigger than yours](https://boyter.org/posts/searchcode-bigger-sqlite-than-you/)
* [2025-02-17, 11:15:00](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss) - [Wiggling Ears May Have Once Helped Us Hear](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss)
* [2025-02-17, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss) - [AUKUS Blasts Holes In Lockbit's Bulletproof Hosting Provider](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss)
* [2025-02-17, 02:05:28](https://lobste.rs/s/sag0p3/making_web_more_readable_with_stylus) - [Making the Web More Readable With Stylus](https://www.wezm.net/v2/posts/2025/stylus/)
* [2025-02-17, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss) - [Ignorance Bliss When You’Re Drowning In Information](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss)
* [2025-02-16, 21:42:03](https://news.ycombinator.com/item?id=43071983) - [I helped fix sleep-wake hangs on Linux with AMD GPUs](https://nyanpasu64.gitlab.io/blog/amdgpu-sleep-wake-hang/)
* [2025-02-16, 20:54:00](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss) - [The Guy Who Accidentally Threw Away $700 Million in Bitcoin Wants to Buy the Landfill to Find It](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss)
* [2025-02-16, 16:12:00](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss) - [Waste Surveillance at Just 20 Airports Could Spot the Next Pandemic](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss)
* [2025-02-16, 11:27:00](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss) - [AI Reveals Hidden Interior Design Rules of the Cell](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss)
* [2025-02-16, 08:33:47](https://news.ycombinator.com/item?id=43066394) - [670nm red light exposure improved aged mitochondrial function, colour vision](https://www.nature.com/articles/s41598-021-02311-1)
* [2025-02-16, 08:28:07](https://news.ycombinator.com/item?id=43066367) - [Nostalgia for Physical Media](https://www.sicpers.info/2025/02/on-nostalgia-for-physical-media/)
* [2025-02-16, 06:42:00](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss) - [Key Takeaways From The Paris AI Summit](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss)
* [2025-02-16, 01:58:00](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss) - [If You Ever Stacked Cups In Gym Class, Blame My Dad](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss)
* [2025-02-15, 21:09:00](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss) - [Let’s Buy California from Trump – Denmark’s Next Big Adventure ](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss)
* [2025-02-15, 16:32:17](https://news.ycombinator.com/item?id=43059779) - [Lake-harvested cocktail ice is an old business making a comeback in Norway](https://vinepair.com/articles/lake-harvested-cocktail-ice-returns/)
* [2025-02-15, 16:24:00](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss) - [Flies Play Too, Carousel Study Suggests](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss)
* [2025-02-15, 11:38:00](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss) - [Anyone Can Push Updates to the DOGE.gov Website](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss)
* [2025-02-15, 06:52:00](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss) - [RTX5090 Cable Overheats to 150 C Where Uneven Current Distribution Likely the Culprit](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss)
* [2025-02-15, 02:08:00](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss) - [EU Will Put Over $200 Billion Toward AI Development](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss)
* [2025-02-14, 21:53:40](https://news.ycombinator.com/item?id=43053499) - [Saying goodbye to FFmpegKit](https://tanersener.medium.com/saying-goodbye-to-ffmpegkit-33ae939767e1)
* [2025-02-14, 21:25:00](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss) - [8 Million Requests Later, We Made The SolarWinds Supply Chain Attack Look Amateur](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss)
* [2025-02-14, 16:17:00](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss) - [Judge Agrees Trump's Removal Of Health Websites Threatens The Public](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss)
* [2025-02-14, 11:34:00](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss) - [Earth's Inner Core is Less Solid Than Previously Thought: Study Reveals Structural Transformation](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss)
* [2025-02-14, 06:50:00](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss) - [Hackers Leak Cop Manuals for Departments Nationwide After Breaching Major Provider](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss)
* [2025-02-14, 02:04:00](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss) - [The Science of Why There's Less Passing in the Daytona 500](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss)
