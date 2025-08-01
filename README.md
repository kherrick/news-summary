# [News Summary](https://kherrick.github.io/news-summary/)

## Space and Quantum Advancements

* [X37B is Set to Launch and Test Quantum Navigation Technology](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss) - The X37B spaceplane is preparing for launch with a focus on advancing quantum navigation systems, a technology that could revolutionize space travel.

* [NASA’s Webb Finds Possible 'Direct Collapse' Black Hole](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss) - NASA’s James Webb Space Telescope uncovers what could be a direct-collapse black hole, significantly contributing to our understanding of the universe's formative processes.

## Artificial Intelligence and Machine Learning

* [LLM leaderboard – Comparing models from OpenAI, Google, DeepSeek and others](https://artificialanalysis.ai/leaderboards/models) - A comparison leaderboard examines language learning models (LLMs) from major tech players, analyzing their strengths and weaknesses.

* [We Asked 100+ AI Models to Write Code. Here’s How Many Failed Security Tests](https://www.veracode.com/blog/genai-code-security-report/) - A report evaluating AI-generated code highlights security vulnerabilities, underscoring AI's limitations in trustworthy software development.

* [6 Weeks of Claude Code](https://blog.puzzmo.com/posts/2025/07/30/six-weeks-of-claude-code/) - Insights from six weeks of working with Claude, an AI code generation tool, exploring its effectiveness and nuances.

* [Anthropic Unveils New Rate Limits to Curb Claude Code Power Users](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss) - To manage high demand, Anthropic announces rate limits for its AI tool Claude Code.

* [AI is a floor raiser, not a ceiling raiser](https://elroy.bot/blog/2025/07/29/ai-is-a-floor-raiser-not-a-ceiling-raiser.html) - An essay discussing how AI tools lower barriers to entry and democratize expertise rather than pushing boundaries at the highest levels.

## Cybersecurity and Ethical Hacking

* [In Search of Riches, Hackers Plant 4G-Enabled Raspberry Pi In Bank Network](https://it.slashdot.org/story/25/07/31/2241259/in-search-of-riches-hackers-plant-4g-enabled-raspberry-pi-in-bank-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Hackers deploy a 4G-enabled Raspberry Pi in a bank's network in a sophisticated effort to exfiltrate sensitive data.

* [CISA Open-Sources Thorium Platform For Malware, Forensic Analysis](https://it.slashdot.org/story/25/07/31/2033245/cisa-open-sources-thorium-platform-for-malware-forensic-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The Cybersecurity and Infrastructure Security Agency (CISA) releases an open-source malware and forensic analysis platform to bolster defenses.

## Technology and Innovation

* [Every satellite orbiting earth and who owns them (2023)](https://dewesoft.com/blog/every-satellite-orbiting-earth-and-who-owns-them) - A detailed overview of Earth's orbiting satellites and their ownership highlights space's growing commercialization.

* [Schematra: Sinatra inspired Chicken web framework](https://github.com/rolandoam/schematra) - A new web framework draws inspiration from Sinatra, offering lightweight web development capabilities.

## Global Policy and Economics

* [SEC Debuts 'Project Crypto' To Bring US Financial Markets 'On Chain'](https://slashdot.org/story/25/07/31/2220225/sec-debuts-project-crypto-to-bring-us-financial-markets-on-chain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The SEC's 'Project Crypto' aims to modernize U.S. financial markets through blockchain-driven solutions.

* [Trump Suspends Trade Loophole For Cheap Online Retailers Globally](https://news.slashdot.org/story/25/07/31/2028246/trump-suspends-trade-loophole-for-cheap-online-retailers-globally?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Trade regulations are tightened as loopholes allowing tax-free imports for cheap goods are halted.

## Miscellaneous Highlights

* [US Lightning Flash Was Longest On Record At 515 Miles](https://news.slashdot.org/story/25/07/31/2247247/us-lightning-flash-was-longest-on-record-at-515-miles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A lightning flash extending 515 miles sets a record, showcasing the potential intensity of atmospheric phenomena.

* [The Math Is Haunted](https://overreacted.io/the-math-is-haunted/) - A thought-provoking philosophical take on mathematics challenges and how humans conceptualize the discipline.

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

* [2025-08-01, 06:41:00](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss) - [X37B is Set to Launch and Test Quantum Navigation Technology](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss)
* [2025-08-01, 06:37:09](https://lobste.rs/s/axr1la/age_verification_doesn_t_need_be_privacy) - [Age Verification Doesn’t Need to Be a Privacy Footgun](https://soatok.blog/2025/07/31/age-verification-doesnt-need-to-be-a-privacy-footgun/)
* [2025-08-01, 05:54:08](https://lobste.rs/s/ch205g/my_favourite_german_word) - [My favourite German word](https://vurt.org/articles/my-favourite-german-word/)
* [2025-08-01, 05:31:20](https://news.ycombinator.com/item?id=44753298) - [Every satellite orbiting earth and who owns them (2023)](https://dewesoft.com/blog/every-satellite-orbiting-earth-and-who-owns-them)
* [2025-08-01, 05:30:55](https://lobste.rs/s/iqyqm3/6_weeks_claude_code) - [6 Weeks of Claude Code](https://blog.puzzmo.com/posts/2025/07/30/six-weeks-of-claude-code/)
* [2025-08-01, 04:47:12](https://lobste.rs/s/t0inyr/c_26_reflections_adventures_compile_time) - [C++26 Reflections adventures &amp; compile time UML](https://www.reachablecode.com/2025/07/31/c26-reflections-adventures-compile-time-uml/)
* [2025-08-01, 03:30:00](https://news.slashdot.org/story/25/07/31/2247247/us-lightning-flash-was-longest-on-record-at-515-miles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Lightning Flash Was Longest On Record At 515 Miles](https://news.slashdot.org/story/25/07/31/2247247/us-lightning-flash-was-longest-on-record-at-515-miles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 02:45:52](https://news.ycombinator.com/item?id=44752546) - [LLM leaderboard – Comparing models from OpenAI, Google, DeepSeek and others](https://artificialanalysis.ai/leaderboards/models)
* [2025-08-01, 02:30:59](https://news.ycombinator.com/item?id=44752469) - [Show HN: KubeForge – A GUI for Kubernetes YAMLs](https://github.com/kubenote/KubeForge)
* [2025-08-01, 01:55:00](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss) - [Anthropic Unveils New Rate Limits to Curb Claude Code Power Users](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss)
* [2025-08-01, 01:14:44](https://lobste.rs/s/bs7kvw/we_asked_100_ai_models_write_code_here_s_how) - [We Asked 100+ AI Models to Write Code. Here’s How Many Failed Security Tests](https://www.veracode.com/blog/genai-code-security-report/)
* [2025-08-01, 00:50:57](https://lobste.rs/s/wzdyfb/our_first_outage_from_llm_written_code) - [Our first outage from LLM-written code](https://sketch.dev/blog/our-first-outage-from-llm-written-code)
* [2025-08-01, 00:45:00](https://it.slashdot.org/story/25/07/31/2241259/in-search-of-riches-hackers-plant-4g-enabled-raspberry-pi-in-bank-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In Search of Riches, Hackers Plant 4G-Enabled Raspberry Pi In Bank Network](https://it.slashdot.org/story/25/07/31/2241259/in-search-of-riches-hackers-plant-4g-enabled-raspberry-pi-in-bank-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 00:03:44](https://lobste.rs/s/uhrucy/ramblings) - [Ramblings](https://stephango.com/ramblings)
* [2025-08-01, 00:02:00](https://science.slashdot.org/story/25/07/31/2232230/trump-launching-a-new-private-health-tracking-system-with-big-techs-help?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Launching a New Private Health Tracking System With Big Tech&apos;s Help](https://science.slashdot.org/story/25/07/31/2232230/trump-launching-a-new-private-health-tracking-system-with-big-techs-help?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 23:20:00](https://slashdot.org/story/25/07/31/2220225/sec-debuts-project-crypto-to-bring-us-financial-markets-on-chain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SEC Debuts &apos;Project Crypto&apos; To Bring US Financial Markets &apos;On Chain&apos;](https://slashdot.org/story/25/07/31/2220225/sec-debuts-project-crypto-to-bring-us-financial-markets-on-chain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 22:40:00](https://yro.slashdot.org/story/25/07/31/2059247/us-senators-introduce-new-pirate-site-blocking-bill-block-beard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Senators Introduce New Pirate Site Blocking Bill: Block BEARD](https://yro.slashdot.org/story/25/07/31/2059247/us-senators-introduce-new-pirate-site-blocking-bill-block-beard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 22:16:45](https://lobste.rs/s/9ha6ab/you_might_not_need_tmux) - [You might not need tmux](https://bower.sh/you-might-not-need-tmux)
* [2025-07-31, 22:00:00](https://science.slashdot.org/story/25/07/31/2040215/brazil-deploys-millions-of-lab-bred-mosquitoes-to-combat-dengue-epidemic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brazil Deploys Millions of Lab-bred Mosquitoes To Combat Dengue Epidemic](https://science.slashdot.org/story/25/07/31/2040215/brazil-deploys-millions-of-lab-bred-mosquitoes-to-combat-dengue-epidemic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 21:47:27](https://news.ycombinator.com/item?id=44750563) - [“No tax on tips” is an industry plant](https://www.newyorker.com/magazine/2025/08/04/no-tax-on-tips-is-an-industry-plant)
* [2025-07-31, 21:28:07](https://news.ycombinator.com/item?id=44750416) - [The anti-abundance critique on housing is wrong](https://www.derekthompson.org/p/the-anti-abundance-critique-on-housing)
* [2025-07-31, 21:20:00](https://it.slashdot.org/story/25/07/31/2033245/cisa-open-sources-thorium-platform-for-malware-forensic-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CISA Open-Sources Thorium Platform For Malware, Forensic Analysis](https://it.slashdot.org/story/25/07/31/2033245/cisa-open-sources-thorium-platform-for-malware-forensic-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 21:10:00](https://soylentnews.org/article.pl?sid=25/07/30/0143216&amp;from=rss) - [Meta Pirated and Seeded Porn for Years to Train AI, Lawsuit Says](https://soylentnews.org/article.pl?sid=25/07/30/0143216&amp;from=rss)
* [2025-07-31, 21:00:00](https://apple.slashdot.org/story/25/07/31/2045234/apple-reports-biggest-revenue-growth-since-december-2021?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Reports Biggest Revenue Growth Since December 2021](https://apple.slashdot.org/story/25/07/31/2045234/apple-reports-biggest-revenue-growth-since-december-2021?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 20:40:00](https://news.slashdot.org/story/25/07/31/2028246/trump-suspends-trade-loophole-for-cheap-online-retailers-globally?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Suspends Trade Loophole For Cheap Online Retailers Globally](https://news.slashdot.org/story/25/07/31/2028246/trump-suspends-trade-loophole-for-cheap-online-retailers-globally?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 20:29:55](https://news.ycombinator.com/item?id=44749772) - [Denver rent is back to 2022 prices after 20k new units hit the market](https://denverite.com/2025/07/25/denver-rent-prices-drop-q2/)
* [2025-07-31, 20:00:00](https://apple.slashdot.org/story/25/07/31/193224/apple-is-selling-ipad-repair-parts-for-astronomical-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Is Selling iPad Repair Parts for Astronomical Prices](https://apple.slashdot.org/story/25/07/31/193224/apple-is-selling-ipad-repair-parts-for-astronomical-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 19:26:42](https://lobste.rs/s/yuxxlr/go_assembly_mutation_testing) - [Go Assembly Mutation Testing](https://words.filippo.io/assembly-mutation/)
* [2025-07-31, 19:22:00](https://tech.slashdot.org/story/25/07/31/1846249/google-loses-epic-games-appeal-must-open-app-store-to-rivals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Loses Epic Games Appeal, Must Open App Store To Rivals](https://tech.slashdot.org/story/25/07/31/1846249/google-loses-epic-games-appeal-must-open-app-store-to-rivals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 19:00:58](https://news.ycombinator.com/item?id=44748934) - [Slow](https://michaelnotebook.com/slow/index.html)
* [2025-07-31, 18:41:14](https://lobste.rs/s/swmezp/pypi_phishing_attack_incident_report) - [PyPI Phishing Attack: Incident Report](https://blog.pypi.org/posts/2025-07-31-incident-report-phishing-attack/)
* [2025-07-31, 18:40:00](https://science.slashdot.org/story/25/07/31/1812236/worlds-oldest-baby-born-from-embryo-frozen-in-1994?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s &apos;Oldest Baby&apos; Born From Embryo Frozen in 1994](https://science.slashdot.org/story/25/07/31/1812236/worlds-oldest-baby-born-from-embryo-frozen-in-1994?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 18:10:02](https://lobste.rs/s/sqthxf/secure_boot_certificate_rollover_is_real) - [Secure boot certificate rollover is real but probably won&apos;t hurt you](https://mjg59.dreamwidth.org/72892.html)
* [2025-07-31, 18:00:00](https://it.slashdot.org/story/25/07/31/1641202/microsoft-ends-tradition-of-naming-competitors-in-regulatory-filings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Ends Tradition of Naming Competitors in Regulatory Filings](https://it.slashdot.org/story/25/07/31/1641202/microsoft-ends-tradition-of-naming-competitors-in-regulatory-filings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 17:39:38](https://lobste.rs/s/tuwdze/schematra_sinatra_inspired_chicken_web) - [Schematra: Sinatra inspired Chicken web framework](https://github.com/rolandoam/schematra)
* [2025-07-31, 17:21:07](https://news.ycombinator.com/item?id=44747843) - [Secure boot certificate rollover is real but probably won&apos;t hurt you](https://mjg59.dreamwidth.org/72892.html)
* [2025-07-31, 17:20:00](https://news.slashdot.org/story/25/07/31/1652242/internal-microsoft-documents-detail-pay-scales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internal Microsoft Documents Detail Pay Scales](https://news.slashdot.org/story/25/07/31/1652242/internal-microsoft-documents-detail-pay-scales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 17:01:37](https://news.ycombinator.com/item?id=44747634) - [AI is a floor raiser, not a ceiling raiser](https://elroy.bot/blog/2025/07/29/ai-is-a-floor-raiser-not-a-ceiling-raiser.html)
* [2025-07-31, 16:47:54](https://news.ycombinator.com/item?id=44747457) - [Gemini Embedding: Powering RAG and context engineering](https://developers.googleblog.com/en/gemini-embedding-powering-rag-context-engineering/)
* [2025-07-31, 16:40:00](https://yro.slashdot.org/story/25/07/31/1638229/sony-is-suing-tencent-over-shameless-horizon-knock-off-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Is Suing Tencent Over Shameless Horizon Knock-off Game](https://yro.slashdot.org/story/25/07/31/1638229/sony-is-suing-tencent-over-shameless-horizon-knock-off-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 16:29:00](https://soylentnews.org/article.pl?sid=25/07/30/0133228&amp;from=rss) - [Why We Need a Right Not to be Manipulated](https://soylentnews.org/article.pl?sid=25/07/30/0133228&amp;from=rss)
* [2025-07-31, 16:25:51](https://news.ycombinator.com/item?id=44747229) - [Show HN: Mcp-use – Connect any LLM to any MCP](https://github.com/mcp-use/mcp-use)
* [2025-07-31, 16:23:09](https://news.ycombinator.com/item?id=44747204) - [Launch HN: Gecko Security (YC F24) – AI That Finds Vulnerabilities in Code](https://news.ycombinator.com/item?id=44747204)
* [2025-07-31, 16:17:25](https://lobste.rs/s/hzr1ke/smallest_embeddable_scripting_language) - [The smallest embeddable scripting language, part 1](https://log.schemescape.com/posts/static-site-generators/smallest-scripting-language.html)
* [2025-07-31, 15:57:32](https://news.ycombinator.com/item?id=44746948) - [QUIC for the kernel](https://lwn.net/Articles/1029851/)
* [2025-07-31, 15:28:54](https://lobste.rs/s/ogv8ay/quic_for_kernel) - [QUIC for the kernel](https://lwn.net/Articles/1029851/)
* [2025-07-31, 15:24:05](https://news.ycombinator.com/item?id=44746603) - [Ubiquiti launches UniFi OS Server for self-hosting](https://lazyadmin.nl/home-network/unifi-os-server/)
* [2025-07-31, 14:47:25](https://lobste.rs/s/43hw9a/math_is_haunted) - [The Math Is Haunted](https://overreacted.io/the-math-is-haunted/)
* [2025-07-31, 14:37:10](https://lobste.rs/s/e03oa9/what_is_gvisor) - [What is gVisor?](https://blog.yelinaung.com/posts/gvisor/)
* [2025-07-31, 14:23:40](https://news.ycombinator.com/item?id=44745984) - [Carbon Language: An experimental successor to C++](https://docs.carbon-lang.dev/)
* [2025-07-31, 14:16:07](https://news.ycombinator.com/item?id=44745897) - [MacBook Pro Insomnia](https://manuel.bernhardt.io/posts/2025-07-24-macbook-pro-insomnia)
* [2025-07-31, 14:08:33](https://news.ycombinator.com/item?id=44745820) - [Show HN: AgentMail – Email infra for AI agents](https://chat.agentmail.to/)
* [2025-07-31, 14:06:31](https://lobste.rs/s/gl3oty/local_first_search_tale_frustrated) - [Local-first search. A tale of frustrated dreams, utopian user experiences and calculated tradeoffs](https://fika.bar/paoramen/local-first-search-01K1B0WM1X4P5SV5QAES0Z5N75)
* [2025-07-31, 13:41:45](https://news.ycombinator.com/item?id=44745555) - [Releasing weights for FLUX.1 Krea](https://www.krea.ai/blog/flux-krea-open-source-release)
* [2025-07-31, 12:32:42](https://lobste.rs/s/qwaniu/vanity_import_paths_go_2019) - [Vanity import paths in Go (2019)](https://sagikazarmark.hu/blog/vanity-import-paths-in-go/)
* [2025-07-31, 12:06:32](https://lobste.rs/s/r3k5nr/search_riches_hackers_plant_4g_enabled) - [In search of riches, hackers plant 4G-enabled Raspberry Pi in bank network](https://arstechnica.com/security/2025/07/in-search-of-riches-hackers-plant-4g-enabled-raspberry-pi-in-bank-network/)
* [2025-07-31, 11:54:22](https://news.ycombinator.com/item?id=44744715) - [Many countries that said no to ChatControl in 2024 are now undecided](https://digitalcourage.social/@echo_pbreyer/114946559233051667)
* [2025-07-31, 11:45:00](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss) - [We Are Undergoing Unprecedented Loss of Freshwater Across the Planet](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss)
* [2025-07-31, 11:19:54](https://news.ycombinator.com/item?id=44744454) - [How was the Universal Pictures 1936 opening logo created?](https://movies.stackexchange.com/questions/128020/how-was-the-universal-pictures-1936-opening-logo-created)
* [2025-07-31, 10:51:26](https://lobste.rs/s/yg4vde/sync_primitives_are_functionally) - [Sync primitives are Functionally Complete](http://kprotty.me/2025/07/31/sync-primitives-are-functionally-complete.html)
* [2025-07-31, 08:02:05](https://lobste.rs/s/olb8w6/mounting_atmosphere) - [Mounting The Atmosphere](https://oppi.li/posts/mounting_the_atmosphere/)
* [2025-07-31, 07:01:00](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss) - [Manuel Moreale on Why Blogs Matter](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss)
* [2025-07-31, 02:17:00](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss) - [FreeBSD 15.0’S Installer to Gain Option to Install a Full KDE Plasma Desktop Environment](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss)
* [2025-07-30, 22:51:20](https://lobste.rs/s/jkbsfi/i_built_my_blog_with_c_preprocessor_macros) - [I built my blog with C preprocessor macros](https://wheybags.com/blog/macroblog.html)
* [2025-07-30, 21:32:00](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss) - [OpenAI’s ChatGPT Agent Casually Clicks Through “I am not a robot” Verification Test](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss)
* [2025-07-30, 21:07:13](https://news.ycombinator.com/item?id=44739494) - [150 years of Hans Christian Andersen](https://www.newstatesman.com/culture/books/book-of-the-day/2025/07/150-years-of-the-bizarre-hans-christian-andersen)
* [2025-07-30, 20:20:08](https://lobste.rs/s/ykjkon/hype_is_product) - [The Hype is the Product](https://rys.io/en/180.html)
* [2025-07-30, 18:58:16](https://lobste.rs/s/7nho3g/dive_into_open_chat_protocols) - [A Dive Into Open Chat Protocols](https://wiki.alopex.li/ADiveIntoOpenChat)
* [2025-07-30, 17:53:25](https://lobste.rs/s/gyzvmq/always_bet_on_text_2014) - [always bet on text (2014)](https://graydon2.dreamwidth.org/193447.html)
* [2025-07-30, 16:48:00](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss) - [NASA’s Webb Finds Possible &apos;Direct Collapse&apos; Black Hole](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss)
* [2025-07-30, 11:57:00](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss) - [EU-US Draft 15Pc Tariff Agreement Appears To Include Pharma, Chips](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss)
* [2025-07-30, 07:13:00](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss) - [China Advances Toward Tech Independence With New Homegrown 6nm Gaming And AI GPUs](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss)
* [2025-07-30, 02:32:00](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss) - [Nasa May Lose Close To 4,000 Employees After Latest Deferred Resignation Round](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss)
* [2025-07-29, 23:32:10](https://news.ycombinator.com/item?id=44729452) - [PHP-ORT: Machine Learning Inference for the Web](https://krakjoe.github.io/ort/)
* [2025-07-29, 21:44:00](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss) - [Senator Demands Mandiant Hand Over Telco Salt Typhoon Probes](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss)
* [2025-07-29, 17:51:22](https://news.ycombinator.com/item?id=44726347) - [Programmers aren’t so humble anymore, maybe because nobody codes in Perl](https://www.wired.com/story/programmers-arent-humble-anymore-nobody-codes-in-perl/)
* [2025-07-29, 17:02:00](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss) - [Hacker Injects Malicious, Potentially Disk-Wiping Prompt Into Amazon&apos;s Ai Coding Assistant](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss)
* [2025-07-29, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss) - [Gold Can be Heated to 14 Times its Melting Point Without Melting](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss)
* [2025-07-29, 07:27:00](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss) - [Discovery Alert: Flaring Star, Toasted Planet](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss)
* [2025-07-29, 07:10:59](https://news.ycombinator.com/item?id=44720077) - [Mountain of Ink](https://mountainofink.com)
* [2025-07-29, 06:41:56](https://news.ycombinator.com/item?id=44719860) - [Telephone colophon: Or, how I overengineered my call audio (2020)](https://noahliebman.net/2020/12/telephone-colophon-or-how-i-overengineered-my-call-audio/)
* [2025-07-29, 02:40:00](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss) - [Chinese Hackers Breached U.S. Army National Guard to Steal Network Configurations](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss)
* [2025-07-28, 22:00:00](https://soylentnews.org/article.pl?sid=25/07/26/1935251&amp;from=rss) - [As Site Blocking Is Increasing, European Commission Subtly Slaps Down Italy’s Piracy Shield](https://soylentnews.org/article.pl?sid=25/07/26/1935251&amp;from=rss)
* [2025-07-28, 19:51:11](https://news.ycombinator.com/item?id=44714796) - [Scientists and engineers craft radio telescope bound for the moon](https://www.bnl.gov/newsroom/news.php?a=122408)
* [2025-07-28, 18:23:51](https://news.ycombinator.com/item?id=44713716) - [Replacing cron jobs with a centralized task scheduler](https://mayhul.com/posts/scheduled-tasks/)
* [2025-07-28, 17:11:00](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss) - [AMD CEO Says U.S.-Made TSMC Chips Are More Expensive, But Worth It](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss)
* [2025-07-28, 13:23:35](https://news.ycombinator.com/item?id=44710651) - [Face it: you&apos;re a crazy person](https://www.experimental-history.com/p/face-it-youre-a-crazy-person)
* [2025-07-28, 12:30:00](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss) - [Inventor Claims Bleach Injections will Destroy Cancer Tumors](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss)
* [2025-07-28, 07:45:00](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss) - [Coding, Remote Work and Rehabilitation](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss)
* [2025-07-28, 03:49:47](https://news.ycombinator.com/item?id=44707062) - [Raspberry Pi 5 Gets a MicroSD Express Hat](https://www.cnx-software.com/2025/07/28/raspberry-pi-5-gets-a-microsd-express-hat/)
* [2025-07-28, 02:58:00](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss) - [Google Sues Operators of 10-Million-Device Badbox 2.0 Botnet](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss)
* [2025-07-28, 00:19:37](https://news.ycombinator.com/item?id=44705960) - [Show HN: I made a website that makes you cry](https://www.cryonceaweek.com)
