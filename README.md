# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence Developments and Critiques

* [Building a Personal AI Factory](https://www.john-rush.com/posts/ai-20250701.html) - A blog detailing how to create a personal AI system leveraging modern tools and methodologies to enhance individual productivity. [Comments](https://news.ycombinator.com/item?id=44438065)

* [AI is Now Screening Job Candidates Before Humans Ever See Them](https://slashdot.org/story/25/07/01/186240/ai-is-now-screening-job-candidates-before-humans-ever-see-them?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An exploration of AI's growing influence in job recruitment and its implications on the hiring process. [Comments](https://news.ycombinator.com/item?id=44436838)

* [Sam Altman Slams Meta's AI Talent Poaching: 'Missionaries Will Beat Mercenaries'](https://www.wired.com/story/sam-altman-meta-ai-talent-poaching-spree-leaked-messages/) - Insights into the competitive AI talent landscape and criticisms from Sam Altman about Meta's hiring practices. [Comments](https://news.ycombinator.com/item?id=44436579)

* [Cloudflare Flips AI Scraping Model With Pay-Per-Crawl System For Publishers](https://tech.slashdot.org/story/25/07/01/1745245/cloudflare-flips-ai-scraping-model-with-pay-per-crawl-system-for-publishers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A novel system allowing publishers to charge AI crawlers for data access, potentially reshaping AI data usage economics. [Comments](https://lobste.rs/s/2yvzv1/introducing_pay_per_crawl_enabling)

## Engineering and Infrastructure Innovations

* [The Hidden Engineering of Liquid Dampers in Skyscrapers](https://practical.engineering/blog/2025/7/1/the-hidden-engineering-of-liquid-dampers-in-skyscrapers) - An in-depth look into the technology behind liquid dampers used in skyscrapers to stabilize structures during environmental stresses. [Comments](https://news.ycombinator.com/item?id=44437539)

* [Tech Hobbyist Destroys 51 MicroSD Cards To Build Ultimate Performance Database](https://it.slashdot.org/story/25/07/01/155208/tech-hobbyist-destroys-51-microsd-cards-to-build-ultimate-performance-database?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A fascinating tale of creating a high-performance database involving MicroSD card experiments. [Comments](https://news.ycombinator.com/item?id=44436838)

## History and Cultural Insights

* [The Roman Roads Research Association](https://www.romanroads.org/) - An informative resource for understanding ancient Roman infrastructure and its historical significance. [Comments](https://news.ycombinator.com/item?id=44437758)

* [Swearing as a Response to Pain: Assessing Effects of Novel Swear Words](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2020.00723/full) - A unique psychological study exploring how swearing might alleviate pain. [Comments](https://news.ycombinator.com/item?id=44412480)

## Critical Perspectives on Technology

* [The wanton destruction of a creative-tech era](https://blog.greg.technology/2025/06/30/fastly.html) - A reflective piece on the decline and challenges of maintaining a creative-technical culture. [Comments](https://news.ycombinator.com/item?id=44437015)

* [The Fed says this is a cube of $1M. They're off by half a million](https://calvin.sh/blog/fed-lie/) - Investigating a misrepresentation by a major financial institution and its implications. [Comments](https://news.ycombinator.com/item?id=44435484)

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

* [2025-07-01, 21:29:47](https://lobste.rs/s/rfllxj/stream_per_agent_session) - [Stream per agent session](https://s2.dev/blog/agent-sessions)
* [2025-07-01, 21:20:00](https://tech.slashdot.org/story/25/07/01/1811254/landmark-eu-tech-rules-holding-back-innovation-google-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Landmark EU Tech Rules Holding Back Innovation, Google Says](https://tech.slashdot.org/story/25/07/01/1811254/landmark-eu-tech-rules-holding-back-innovation-google-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 21:14:29](https://news.ycombinator.com/item?id=44438065) - [Building a Personal AI Factory](https://www.john-rush.com/posts/ai-20250701.html)
* [2025-07-01, 20:40:00](https://it.slashdot.org/story/25/07/01/155208/tech-hobbyist-destroys-51-microsd-cards-to-build-ultimate-performance-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Hobbyist Destroys 51 MicroSD Cards To Build Ultimate Performance Database](https://it.slashdot.org/story/25/07/01/155208/tech-hobbyist-destroys-51-microsd-cards-to-build-ultimate-performance-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 20:32:52](https://news.ycombinator.com/item?id=44437758) - [The Roman Roads Research Association](https://www.romanroads.org/)
* [2025-07-01, 20:03:58](https://news.ycombinator.com/item?id=44437539) - [The Hidden Engineering of Liquid Dampers in Skyscrapers](https://practical.engineering/blog/2025/7/1/the-hidden-engineering-of-liquid-dampers-in-skyscrapers)
* [2025-07-01, 20:00:00](https://tech.slashdot.org/story/25/07/01/181213/att-now-lets-customers-lock-down-account-to-prevent-sim-swapping-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AT&amp;amp;T Now Lets Customers Lock Down Account To Prevent SIM Swapping Attacks](https://tech.slashdot.org/story/25/07/01/181213/att-now-lets-customers-lock-down-account-to-prevent-sim-swapping-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 19:39:14](https://news.ycombinator.com/item?id=44437316) - [Figma Files Registration Statement for Proposed Initial Public Offering](https://www.figma.com/blog/s1-public/)
* [2025-07-01, 19:20:00](https://it.slashdot.org/story/25/07/01/1552216/it-worker-sentenced-to-seven-months-after-trashing-company-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IT Worker Sentenced To Seven Months After Trashing Company Network](https://it.slashdot.org/story/25/07/01/1552216/it-worker-sentenced-to-seven-months-after-trashing-company-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 19:00:24](https://news.ycombinator.com/item?id=44437015) - [The wanton destruction of a creative-tech era](https://blog.greg.technology/2025/06/30/fastly.html)
* [2025-07-01, 18:40:00](https://slashdot.org/story/25/07/01/186240/ai-is-now-screening-job-candidates-before-humans-ever-see-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI is Now Screening Job Candidates Before Humans Ever See Them](https://slashdot.org/story/25/07/01/186240/ai-is-now-screening-job-candidates-before-humans-ever-see-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 18:36:40](https://news.ycombinator.com/item?id=44436838) - [1KB JavaScript Demoscene Challenge Just Launched](https://news.ycombinator.com/item?id=44436838)
* [2025-07-01, 18:08:38](https://news.ycombinator.com/item?id=44436579) - [Sam Altman Slams Meta&apos;s AI Talent Poaching: &apos;Missionaries Will Beat Mercenaries&apos;](https://www.wired.com/story/sam-altman-meta-ai-talent-poaching-spree-leaked-messages/)
* [2025-07-01, 18:07:09](https://news.ycombinator.com/item?id=44436555) - [The Hoyle State (2021)](https://johncarlosbaez.wordpress.com/2021/02/04/the-hoyle-state/)
* [2025-07-01, 18:00:00](https://tech.slashdot.org/story/25/07/01/1745245/cloudflare-flips-ai-scraping-model-with-pay-per-crawl-system-for-publishers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Flips AI Scraping Model With Pay-Per-Crawl System For Publishers](https://tech.slashdot.org/story/25/07/01/1745245/cloudflare-flips-ai-scraping-model-with-pay-per-crawl-system-for-publishers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 17:56:59](https://lobste.rs/s/lkxakl/what_should_native_dom_templating_api) - [What should a native DOM templating API look like?](https://justinfagnani.com/2025/06/30/what-should-a-dom-templating-api-look-like)
* [2025-07-01, 17:20:00](https://tech.slashdot.org/story/25/07/01/1536223/ai-arms-race-drives-engineer-pay-to-more-than-10-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Arms Race Drives Engineer Pay To More Than $10 Million](https://tech.slashdot.org/story/25/07/01/1536223/ai-arms-race-drives-engineer-pay-to-more-than-10-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 17:13:11](https://news.ycombinator.com/item?id=44436031) - [Show HN: Arch-Router – 1.5B model for LLM routing by preferences, not benchmarks](https://news.ycombinator.com/item?id=44436031)
* [2025-07-01, 17:00:30](https://news.ycombinator.com/item?id=44435910) - [Cua (YC X25) is hiring an engineer](https://www.ycombinator.com/companies/cua/jobs/dIskIB1-founding-engineer-cua-yc-x25)
* [2025-07-01, 16:52:27](https://lobste.rs/s/zssy2h/software_engineering_with_llms_2025) - [Software engineering with LLMs in 2025: reality check](https://www.youtube.com/watch?v=EO3_qN_Ynsk)
* [2025-07-01, 16:52:09](https://lobste.rs/s/uu3keo/parsing_layout_haskell_s_syntax_is_mess) - [Parsing Layout, or: Haskell&apos;s Syntax is a Mess](https://amelia.how/posts/parsing-layout.html)
* [2025-07-01, 16:51:12](https://lobste.rs/s/t9ig3o/types_types_common_exotic) - [Types of Types: Common to Exotic](https://www.stephendiehl.com/posts/types_of_types/)
* [2025-07-01, 16:43:19](https://news.ycombinator.com/item?id=44435716) - [Code⇄GUI bidirectional editing via LSP](https://jamesbvaughan.com/bidirectional-editing/)
* [2025-07-01, 16:40:00](https://news.slashdot.org/story/25/07/01/164239/global-warming-is-speeding-up-and-the-world-is-feeling-the-effects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Global Warming Is Speeding Up and the World Is Feeling the Effects](https://news.slashdot.org/story/25/07/01/164239/global-warming-is-speeding-up-and-the-world-is-feeling-the-effects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 16:24:24](https://news.ycombinator.com/item?id=44435500) - [Show HN: Core – open source memory graph for LLMs – shareable, user owned](https://github.com/RedPlanetHQ/core)
* [2025-07-01, 16:22:55](https://news.ycombinator.com/item?id=44435484) - [The Fed says this is a cube of $1M. They&apos;re off by half a million](https://calvin.sh/blog/fed-lie/)
* [2025-07-01, 16:01:00](https://news.slashdot.org/story/25/07/01/1448220/fcc-delays-enforcement-of-prison-call-pricing-limits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Delays Enforcement of Prison Call Pricing Limits](https://news.slashdot.org/story/25/07/01/1448220/fcc-delays-enforcement-of-prison-call-pricing-limits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 15:57:23](https://news.ycombinator.com/item?id=44435211) - [Show HN: HackerNewt - Breadth-first exploring HN client for iOS](https://apps.apple.com/us/app/hackernewt-for-hacker-news/id6448201970)
* [2025-07-01, 15:47:21](https://lobste.rs/s/zmgjwq/emoji_kitchen_browse_google_s_unique) - [Emoji Kitchen - Browse Google&apos;s unique emoji combinations](https://emojikitchen.dev/)
* [2025-07-01, 15:31:45](https://news.ycombinator.com/item?id=44434938) - [HN Slop: AI startup ideas generated from Hacker News](https://www.josh.ing/hn-slop)
* [2025-07-01, 15:20:00](https://apple.slashdot.org/story/25/07/01/0917211/proton-joins-antitrust-lawsuit-against-apples-app-store-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Proton Joins Antitrust Lawsuit Against Apple&apos;s App Store Practices](https://apple.slashdot.org/story/25/07/01/0917211/proton-joins-antitrust-lawsuit-against-apples-app-store-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 15:01:36](https://news.ycombinator.com/item?id=44434576) - [Ask HN: Who is hiring? (July 2025)](https://news.ycombinator.com/item?id=44434576)
* [2025-07-01, 15:01:36](https://news.ycombinator.com/item?id=44434574) - [Ask HN: Who wants to be hired? (July 2025)](https://news.ycombinator.com/item?id=44434574)
* [2025-07-01, 14:40:00](https://science.slashdot.org/story/25/07/01/0827211/nih-funded-science-must-now-be-free-to-read-instantly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NIH-Funded Science Must Now Be Free To Read Instantly](https://science.slashdot.org/story/25/07/01/0827211/nih-funded-science-must-now-be-free-to-read-instantly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 14:26:36](https://lobste.rs/s/z9uq7z/fuzzing_25_keynote_are_you_sure_you_belong) - [FUZZING&apos;25 Keynote: \&quot;Are you sure you belong in academia?\&quot;](https://www.youtube.com/watch?v=qQGuQ_4V6WI)
* [2025-07-01, 14:25:48](https://lobste.rs/s/usceqk/helix_language) - [Helix language](https://github.com/helixlang/helix-lang)
* [2025-07-01, 14:22:05](https://lobste.rs/s/yf6az7/cloud_native_lsm_key_value_store_with) - [Cloud native LSM Key-Value Store with searchable compression algo and distributed compaction](https://github.com/topling/toplingdb)
* [2025-07-01, 14:08:11](https://news.ycombinator.com/item?id=44434062) - [Feasibility study of a mission to Sedna - Nuclear propulsion and solar sailing](https://arxiv.org/abs/2506.17732)
* [2025-07-01, 14:00:00](https://hardware.slashdot.org/story/25/07/01/081225/automakers-clash-with-india-over-aggressive-emission-limits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Automakers Clash With India Over &apos;Aggressive&apos; Emission Limits](https://hardware.slashdot.org/story/25/07/01/081225/automakers-clash-with-india-over-aggressive-emission-limits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 13:58:29](https://lobste.rs/s/2yvzv1/introducing_pay_per_crawl_enabling) - [Introducing pay per crawl: enabling content owners to charge AI crawlers for access](https://blog.cloudflare.com/introducing-pay-per-crawl/)
* [2025-07-01, 13:46:56](https://news.ycombinator.com/item?id=44433899) - [Experience converting a mathematical software package to C++20 modules [PDF]](https://arxiv.org/abs/2506.21654)
* [2025-07-01, 13:00:00](https://yro.slashdot.org/story/25/06/30/2236218/us-government-takes-down-major-north-korean-remote-it-workers-operation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Government Takes Down Major North Korean &apos;Remote IT Workers&apos; Operation](https://yro.slashdot.org/story/25/06/30/2236218/us-government-takes-down-major-north-korean-remote-it-workers-operation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 12:52:50](https://news.ycombinator.com/item?id=44433429) - [Show HN: I built the tool I wished existed for moving Stripe between countries](https://www.stripemove.com/)
* [2025-07-01, 12:49:42](https://news.ycombinator.com/item?id=44433409) - [Show HN: Spegel, a Terminal Browser That Uses LLMs to Rewrite Webpages](https://simedw.com/2025/06/23/introducing-spegel/)
* [2025-07-01, 12:48:06](https://lobste.rs/s/yyqk01/from_python_programmer_distributed) - [From Python Programmer to Distributed Systems Researcher in 10 Years Without a PhD](https://emptysqua.re/blog/from-python-programmer-to-distributed-systems-researcher-in-10-years/)
* [2025-07-01, 12:47:06](https://news.ycombinator.com/item?id=44433386) - [Show HN: Jobs by Referral: Find jobs in your LinkedIn network](https://jobsbyreferral.com/)
* [2025-07-01, 11:04:42](https://lobste.rs/s/s4b9ws/finding_understanding_bugs_c_compilers) - [Finding and understanding bugs in C compilers (2011)](https://www.cse.unr.edu/~fredh/class/460/S2013/class/Papers/tanna.pdf)
* [2025-07-01, 10:53:11](https://lobste.rs/s/ez7akc/alternative_blanket_implementations) - [Alternative Blanket Implementations for a Single Rust Trait](https://www.greyblake.com/blog/alternative-blanket-implementations-for-single-rust-trait/)
* [2025-07-01, 10:00:00](https://hardware.slashdot.org/story/25/06/30/230235/how-robotic-hives-and-ai-are-lowering-the-risk-of-bee-colony-collapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Robotic Hives and AI Are Lowering the Risk of Bee Colony Collapse](https://hardware.slashdot.org/story/25/06/30/230235/how-robotic-hives-and-ai-are-lowering-the-risk-of-bee-colony-collapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 07:55:54](https://lobste.rs/s/obxxdr/reflections_on_haskell_rust) - [Reflections on Haskell and Rust](https://academy.fpblock.com/blog/rust-haskell-reflections/)
* [2025-07-01, 07:00:00](https://science.slashdot.org/story/25/06/30/2249225/space-is-hard-there-is-no-excuse-for-pretending-its-easy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Space Is Hard. There Is No Excuse For Pretending It&apos;s Easy&apos;](https://science.slashdot.org/story/25/06/30/2249225/space-is-hard-there-is-no-excuse-for-pretending-its-easy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-01, 06:29:57](https://news.ycombinator.com/item?id=44431178) - [OpenFLOW – Quickly make beautiful infrastructure diagrams local to your machine](https://github.com/stan-smith/OpenFLOW)
* [2025-07-01, 06:11:46](https://lobste.rs/s/ha3xyn/git_stage_over_git_add) - [`git stage` over `git add`](https://bhoot.dev/2025/git-stage-over-git-add/)
* [2025-07-01, 05:59:13](https://lobste.rs/s/re0ogb/people_keep_inventing_prolly_trees) - [People Keep Inventing Prolly Trees](https://www.dolthub.com/blog/2025-06-03-people-keep-inventing-prolly-trees/)
* [2025-07-01, 04:59:48](https://lobste.rs/s/4vpj8q/orchestrating_edge_ai_workloads_on) - [Orchestrating Edge AI workloads on a Jetson Orin Nano with Nomad](https://atodorov.me/2025/06/27/orchestrating-edge-ai-workloads-on-a-jetson-orin-nano-with-nomad/)
* [2025-06-30, 23:56:08](https://lobste.rs/s/nid79d/google_developer_search_appliance) - [Google Developer Search Appliance – Proxmox Port](https://archive.org/details/google-search-appliance-proxmox-40G-image-inside.tar)
* [2025-06-30, 23:41:15](https://lobste.rs/s/qcjdam/doing_my_day_job_on_chimera_linux) - [Doing My Day Job on Chimera Linux](https://www.wezm.net/v2/posts/2025/daily-driving-chimera-for-work/)
* [2025-06-30, 19:58:24](https://lobste.rs/s/srcfxn/cve_2025_32463_vulnerability_advisory) - [CVE-2025-32463 Vulnerability Advisory: Sudo chroot Elevation of Privilege](https://www.stratascale.com/vulnerability-alert-CVE-2025-32463-sudo-chroot)
* [2025-06-30, 16:48:47](https://lobste.rs/s/s4po4y/how_i_write_type_safe_generic_data) - [How I Write Type Safe Generic Data Structures in C](https://danielchasehooper.com/posts/typechecked-generic-c-data-structures/)
* [2025-06-30, 16:27:53](https://lobste.rs/s/a9pkib/role_university_is_resist_ai) - [The role of the University is to resist AI](https://www.danmcquillan.org/cpct_seminar.html)
* [2025-06-30, 16:03:38](https://lobste.rs/s/t0ktay/update_on_improving_passkey_support) - [An update on improving passkey support in Linux](https://www.iinuwa.xyz/blog/linux-passkeys-update/)
* [2025-06-30, 14:42:27](https://lobste.rs/s/n15x7u/boolean_should_probably_be_something) - [That boolean should probably be something else](https://ntietz.com/blog/that-boolean-should-probably-be-something-else/)
* [2025-06-30, 13:19:05](https://lobste.rs/s/vb1owz/reverse_engineering_vercel_s_botid) - [Reverse Engineering Vercel&apos;s BotID](https://www.nullpt.rs/reversing-botid)
* [2025-06-29, 15:39:16](https://news.ycombinator.com/item?id=44413957) - [All Good Editors Are Pirates: In Memory of Lewis H. Lapham](https://www.laphamsquarterly.org/roundtable/all-good-editors-are-pirates)
* [2025-06-29, 12:14:57](https://news.ycombinator.com/item?id=44412480) - [Swearing as a Response to Pain: Assessing Effects of Novel Swear Words](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2020.00723/full)
* [2025-06-29, 05:17:43](https://news.ycombinator.com/item?id=44410538) - [Slouching Towards Sensemaking](https://karanchawla.io/2025/06/29/sensemaking)
* [2025-06-29, 00:19:13](https://news.ycombinator.com/item?id=44409276) - [Muxio: Rust layered stream and RPC toolkit](https://crates.io/crates/muxio)
* [2025-06-28, 11:49:35](https://news.ycombinator.com/item?id=44403988) - [I built something that changed my friend group&apos;s social fabric](https://blog.danpetrolito.xyz/i-built-something-that-changed-my-friend-gro-social-fabric/)
* [2025-06-28, 10:07:38](https://news.ycombinator.com/item?id=44403547) - [Graph Theory Applications in Video Games](https://utk.claranguyen.me/talks.php?id=videogames)
* [2025-06-27, 16:09:09](https://news.ycombinator.com/item?id=44397921) - [When Did Nature Burst into Vivid Color?](https://www.quantamagazine.org/when-did-nature-burst-into-vivid-color-20250627/)
