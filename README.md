# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and its Societal Impacts

* [Pope Leo XIV Rejects AI Avatar for Virtual Papal Audiences](https://tech.slashdot.org/story/25/09/23/1748209/pope-leo-xiv-rejects-ai-avatar-for-virtual-papal-audiences?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Pope Leo XIV has decided against using AI avatars for virtual papal interactions, citing a deeper human connection.

* [Quarter of Workers Under 35 Expect AI To Take Their Jobs Within Two Years, Deutsche Bank Survey Finds](https://slashdot.org/story/25/09/23/1729234/quarter-of-workers-under-35-expect-ai-to-take-their-jobs-within-two-years-deutsche-bank-survey-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A survey highlights fears among young workers about AI's encroachment on employment opportunities.

* [AI-Generated 'Workslop' Is Destroying Productivity](https://slashdot.org/story/25/09/23/092205/ai-generated-workslop-is-destroying-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Discussions around the detrimental impacts of overly AI-automated workflows on productivity.

* [An $800 Billion Revenue Shortfall Threatens AI Future, Bain Says](https://slashdot.org/story/25/09/23/0733235/an-800-billion-revenue-shortfall-threatens-ai-future-bain-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analysis of financial challenges that could impede AI advancements.

* [Getting AI to work in complex codebases](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/ace-fca.md) - Innovative methods to integrate AI into sophisticated and intricate programming environments.

## Cybersecurity and Privacy

* [Phishing attacks with new domains likely to continue](https://blog.pypi.org/posts/2025-09-23-plenty-of-phish-in-the-sea/) - Insights into the persistence of phishing campaigns using new domains.

* [DHS Has Been Collecting US Citizens' DNA for Years](https://yro.slashdot.org/story/25/09/23/1648213/dhs-has-been-collecting-us-citizens-dna-for-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Alarming revelations about long-term DNA data collection by the DHS.

* [From MCP to shell: MCP auth flaws enable RCE in Claude Code, Gemini CLI and more](https://verialabs.com/blog/from-mcp-to-shell/) - Exploration of glaring authorization flaws that leave room for remote code execution in widely-used systems.

## Historical and Scientific Discoveries

* [Scientists Found 7,000-Year-Old Mummies in the Desert That Don't Share DNA With Modern Humans](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss) - Archeologists uncover ancient mummies showcasing unique genetic data unrelated to modern humans.

* [Something Extremely Strange is Happening at the Event Horizon of This Supermassive Blackhole](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss) - New discoveries blur our understanding of black holes and gravitational boundaries.

* [The Moon is Rusting - Thanks To 'Wind' Blown All the Way From Earth](https://science.slashdot.org/story/25/09/22/2211252/the-moon-is-rusting---thanks-to-wind-blown-all-the-way-from-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Earth's atmospheric particles causing rusting phenomena on the Moon.

## Innovations and Technology Updates

* [Tiny New Lenses, Smaller Than a Hair, Could Transform Phone and Drone Cameras](https://science.slashdot.org/story/25/09/23/0441203/tiny-new-lenses-smaller-than-a-hair-could-transform-phone-and-drone-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Revolutionary lens technology promises major advancements in imaging for smartphones and drones.

* [MediaTek Launches Improved AI Processor To Compete With Qualcomm](https://hardware.slashdot.org/story/25/09/23/0434209/mediatek-launches-improved-ai-processor-to-compete-with-qualcomm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Competitive AI chip technologies introduced by MediaTek to rival industry leaders.

## Civic and Environmental Issues

* [Restrictions on house sharing by unrelated roommates](https://marginalrevolution.com/marginalrevolution/2025/08/the-war-on-roommates-why-is-sharing-a-house-illegal.html) - Exploration of restrictive housing policies targeting unrelated individuals cohabiting.

* [Permeable materials in homes act as sponges for harmful chemicals: study](https://news.uci.edu/2025/09/22/indoor-surfaces-act-as-massive-sponges-for-harmful-chemicals-uc-irvine-led-study-shows/) - Study reveals that indoor materials heavily absorb and retain harmful pollutants.

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

* [2025-09-23, 18:41:00](https://tech.slashdot.org/story/25/09/23/1748209/pope-leo-xiv-rejects-ai-avatar-for-virtual-papal-audiences?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pope Leo XIV Rejects AI Avatar for Virtual Papal Audiences](https://tech.slashdot.org/story/25/09/23/1748209/pope-leo-xiv-rejects-ai-avatar-for-virtual-papal-audiences?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 18:06:07](https://news.ycombinator.com/item?id=45350690) - [Find SF parking cops](https://walzr.com/sf-parking/)
* [2025-09-23, 18:06:00](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss) - [Scientists Found 7,000-Year-Old Mummies in the Desert That Don&apos;t Share DNA With Modern Humans](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss)
* [2025-09-23, 18:02:00](https://slashdot.org/story/25/09/23/1729234/quarter-of-workers-under-35-expect-ai-to-take-their-jobs-within-two-years-deutsche-bank-survey-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Quarter of Workers Under 35 Expect AI To Take Their Jobs Within Two Years, Deutsche Bank Survey Finds](https://slashdot.org/story/25/09/23/1729234/quarter-of-workers-under-35-expect-ai-to-take-their-jobs-within-two-years-deutsche-bank-survey-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 17:27:24](https://lobste.rs/s/hbreew/targetting_specific_characters_with_css) - [Targetting specific characters with CSS rules](https://shkspr.mobi/blog/2025/09/targetting-specific-characters-with-css-rules/)
* [2025-09-23, 17:22:00](https://news.slashdot.org/story/25/09/23/1719228/are-elites-meritocratic-and-efficiency-seeking-evidence-from-mba-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Elites Meritocratic and Efficiency-Seeking? Evidence from MBA Students](https://news.slashdot.org/story/25/09/23/1719228/are-elites-meritocratic-and-efficiency-seeking-evidence-from-mba-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 17:04:56](https://news.ycombinator.com/item?id=45349848) - [Android users can now use conversational editing in Google Photos](https://blog.google/products/photos/android-conversational-editing-google-photos/)
* [2025-09-23, 16:59:35](https://lobste.rs/s/ga0vwq/fifty_years_open_source_software_supply) - [Fifty Years of Open Source Software Supply-Chain Security](https://cacm.acm.org/practice/fifty-years-of-open-source-software-supply-chain-security/)
* [2025-09-23, 16:55:45](https://lobste.rs/s/slysq6/our_plan_for_more_secure_npm_supply_chain) - [Our plan for a more secure npm supply chain](https://github.blog/security/supply-chain-security/our-plan-for-a-more-secure-npm-supply-chain/)
* [2025-09-23, 16:48:00](https://yro.slashdot.org/story/25/09/23/1648213/dhs-has-been-collecting-us-citizens-dna-for-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DHS Has Been Collecting US Citizens&apos; DNA for Years](https://yro.slashdot.org/story/25/09/23/1648213/dhs-has-been-collecting-us-citizens-dna-for-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 16:41:55](https://lobste.rs/s/b8sz0h/phishing_attacks_with_new_domains_likely) - [Phishing attacks with new domains likely to continue](https://blog.pypi.org/posts/2025-09-23-plenty-of-phish-in-the-sea/)
* [2025-09-23, 16:20:57](https://lobste.rs/s/slrphg/preemption_go_2021) - [Preemption in Go (2021)](https://hidetatz.github.io/goroutine_preemption/)
* [2025-09-23, 16:05:00](https://news.slashdot.org/story/25/09/23/166206/us-news-rankings-are-out-after-a-tumultuous-year-for-colleges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [U.S. News Rankings Are Out After a Tumultuous Year for Colleges](https://news.slashdot.org/story/25/09/23/166206/us-news-rankings-are-out-after-a-tumultuous-year-for-colleges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 15:33:23](https://news.ycombinator.com/item?id=45348495) - [Always Invite Anna](https://sharif.io/anna-alexei)
* [2025-09-23, 15:25:29](https://news.ycombinator.com/item?id=45348390) - [Shopify, pulling strings at Ruby Central, forces Bundler and RubyGems takeover](https://joel.drapper.me/p/rubygems-takeover/)
* [2025-09-23, 15:22:17](https://lobste.rs/s/pbrput/from_hand_tuned_go_self_optimizing_code) - [From hand-tuned Go to self-optimizing code: Building BitsEvolve](https://www.datadoghq.com/blog/engineering/self-optimizing-system/)
* [2025-09-23, 15:20:00](https://news.slashdot.org/story/25/09/23/1441229/us-secret-service-dismantles-telecommunications-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Secret Service &apos;Dismantles Telecommunications Threat&apos;](https://news.slashdot.org/story/25/09/23/1441229/us-secret-service-dismantles-telecommunications-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 15:09:50](https://news.ycombinator.com/item?id=45348183) - [From MCP to shell: MCP auth flaws enable RCE in Claude Code, Gemini CLI and more](https://verialabs.com/blog/from-mcp-to-shell/)
* [2025-09-23, 14:52:07](https://news.ycombinator.com/item?id=45347914) - [Launch HN: Strata (YC X25) – One MCP server for AI to handle thousands of tools](https://news.ycombinator.com/item?id=45347914)
* [2025-09-23, 14:40:00](https://slashdot.org/story/25/09/23/092205/ai-generated-workslop-is-destroying-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI-Generated &apos;Workslop&apos; Is Destroying Productivity](https://slashdot.org/story/25/09/23/092205/ai-generated-workslop-is-destroying-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 14:39:59](https://news.ycombinator.com/item?id=45347714) - [Show HN: Kekkai – a simple, fast file integrity monitoring tool in Go](https://github.com/catatsuy/kekkai)
* [2025-09-23, 14:27:36](https://news.ycombinator.com/item?id=45347532) - [Getting AI to work in complex codebases](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/ace-fca.md)
* [2025-09-23, 14:17:23](https://news.ycombinator.com/item?id=45347363) - [Agents turn simple keyword search into compelling search experiences](https://softwaredoug.com/blog/2025/09/22/reasoning-agents-need-bad-search)
* [2025-09-23, 14:14:46](https://news.ycombinator.com/item?id=45347335) - [x402 — An open protocol for internet-native payments](https://www.x402.org/)
* [2025-09-23, 14:10:16](https://lobste.rs/s/gloou0/symmetric_multiprocessing_hyper) - [Symmetric MultiProcessing, Hyper-Threading and scheduling on Maestro](https://blog.lenot.re/a/smp)
* [2025-09-23, 14:00:00](https://slashdot.org/story/25/09/23/0733235/an-800-billion-revenue-shortfall-threatens-ai-future-bain-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An $800 Billion Revenue Shortfall Threatens AI Future, Bain Says](https://slashdot.org/story/25/09/23/0733235/an-800-billion-revenue-shortfall-threatens-ai-future-bain-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 13:58:48](https://news.ycombinator.com/item?id=45347147) - [OpenDataLoader-PDF: An open source tool for structured PDF parsing](https://github.com/opendataloader-project/opendataloader-pdf)
* [2025-09-23, 13:56:28](https://news.ycombinator.com/item?id=45347117) - [Libghostty is coming](https://mitchellh.com/writing/libghostty-is-coming)
* [2025-09-23, 13:51:56](https://news.ycombinator.com/item?id=45347043) - [Restrictions on house sharing by unrelated roommates](https://marginalrevolution.com/marginalrevolution/2025/08/the-war-on-roommates-why-is-sharing-a-house-illegal.html)
* [2025-09-23, 13:41:23](https://lobste.rs/s/wb9ocu/using_dns_for_responding_acme_challenges) - [Using DNS for responding to ACME challenges](https://hsm.tunnel53.net/article/dns-for-acme-challenges/)
* [2025-09-23, 13:24:00](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss) - [Deaths From Flesh-Eating Bacteria are on the Rise. Who is at Risk?](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss)
* [2025-09-23, 13:00:00](https://hardware.slashdot.org/story/25/09/23/0434209/mediatek-launches-improved-ai-processor-to-compete-with-qualcomm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MediaTek Launches Improved AI Processor To Compete With Qualcomm](https://hardware.slashdot.org/story/25/09/23/0434209/mediatek-launches-improved-ai-processor-to-compete-with-qualcomm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 12:41:36](https://news.ycombinator.com/item?id=45346219) - [Getting More Strategic](https://cate.blog/2025/09/23/getting-more-strategic/)
* [2025-09-23, 12:30:20](https://lobste.rs/s/x2jobn/go_has_added_valgrind_support) - [Go has added Valgrind support](https://go-review.googlesource.com/c/go/+/674077)
* [2025-09-23, 12:18:01](https://news.ycombinator.com/item?id=45345950) - [Mesh: I tried Htmx, then ditched it](https://ajmoon.com/posts/mesh-i-tried-htmx-then-ditched-it)
* [2025-09-23, 12:11:22](https://lobste.rs/s/bosvl3/lark_1_3_0_introduces_text_slices_earley) - [Lark 1.3.0 - Introduces text-slices, Earley fix, and various small improvements](https://github.com/lark-parser/lark/releases/tag/1.3.0)
* [2025-09-23, 12:00:00](https://news.ycombinator.com/item?id=45345742) - [Zinc (YC W14) Is Hiring a Senior Back End Engineer (NYC)](https://app.dover.com/apply/Zinc/4d32fdb9-c3e6-4f84-a4a2-12c80018fe8f/?rs=76643084)
* [2025-09-23, 11:29:13](https://news.ycombinator.com/item?id=45345514) - [Cache of devices capable of crashing cell network is found in NYC](https://www.nytimes.com/2025/09/23/us/politics/secret-service-sim-cards-servers-un.html)
* [2025-09-23, 10:47:46](https://lobste.rs/s/6wzpji/crypto_miner_hotio_qbittorrent) - [Crypto Miner in hotio/qbittorrent](https://apogliaghi.com/2025/09/crypto-miner-in-hotio/qbittorrent/)
* [2025-09-23, 10:40:41](https://news.ycombinator.com/item?id=45345207) - [Structured Outputs in LLMs](https://parthsareen.com/blog.html#sampling.md)
* [2025-09-23, 10:00:00](https://science.slashdot.org/story/25/09/23/0441203/tiny-new-lenses-smaller-than-a-hair-could-transform-phone-and-drone-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tiny New Lenses, Smaller Than a Hair, Could Transform Phone and Drone Cameras](https://science.slashdot.org/story/25/09/23/0441203/tiny-new-lenses-smaller-than-a-hair-could-transform-phone-and-drone-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 09:33:34](https://news.ycombinator.com/item?id=45344756) - [Permeable materials in homes act as sponges for harmful chemicals: study](https://news.uci.edu/2025/09/22/indoor-surfaces-act-as-massive-sponges-for-harmful-chemicals-uc-irvine-led-study-shows/)
* [2025-09-23, 09:26:57](https://news.ycombinator.com/item?id=45344708) - [Go has added Valgrind support](https://go-review.googlesource.com/c/go/+/674077)
* [2025-09-23, 09:04:43](https://news.ycombinator.com/item?id=45344554) - [YAML document from hell (2023)](https://ruudvanasseldonk.com/2023/01/11/the-yaml-document-from-hell)
* [2025-09-23, 08:48:06](https://lobste.rs/s/yxzt5m/why_was_winhelp_called_online_help_system) - [Why was WinHelp called an online help system when it ran offline?](https://devblogs.microsoft.com/oldnewthing/20250922-00/?p=111619)
* [2025-09-23, 08:35:00](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss) - [We Risk a Deluge of AI-Written ‘Science’ Pushing Corporate Interests](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss)
* [2025-09-23, 07:00:00](https://science.slashdot.org/story/25/09/23/0428201/nasa-introduces-10-new-astronaut-candidates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Introduces 10 New Astronaut Candidates](https://science.slashdot.org/story/25/09/23/0428201/nasa-introduces-10-new-astronaut-candidates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 06:40:51](https://lobste.rs/s/f6yv3w/wild_linker_update_0_6_0) - [Wild Linker Update - 0.6.0](https://davidlattimore.github.io/posts/2025/09/23/wild-update-0.6.0.html)
* [2025-09-23, 06:24:50](https://news.ycombinator.com/item?id=45343449) - [Altoids by the Fistful](https://www.scottsmitelli.com/articles/altoids-by-the-fistful/)
* [2025-09-23, 04:48:28](https://news.ycombinator.com/item?id=45342943) - [Zoxide: A Better CD Command](https://github.com/ajeetdsouza/zoxide)
* [2025-09-23, 03:52:01](https://lobste.rs/s/uthgrs/altoids_by_fistful) - [Altoids by the Fistful](https://www.scottsmitelli.com/articles/altoids-by-the-fistful/)
* [2025-09-23, 03:52:00](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss) - [Something Extremely Strange is Happening at the Event Horizon of This Supermassive Blackhole](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss)
* [2025-09-23, 03:30:00](https://tech.slashdot.org/story/25/09/22/2317237/mi6-launches-dark-web-portal-to-attract-spies-in-russia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MI6 Launches Dark Web Portal To Attract Spies In Russia](https://tech.slashdot.org/story/25/09/22/2317237/mi6-launches-dark-web-portal-to-attract-spies-in-russia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 03:03:06](https://news.ycombinator.com/item?id=45342364) - [Nine things I learned in ninety years](http://edwardpackard.com/wp-content/uploads/2025/09/Nine-Things-I-Learned-in-Ninety-Years.pdf)
* [2025-09-23, 02:11:38](https://lobste.rs/s/yiq42c/ai_generated_workslop_is_destroying) - [AI-Generated “Workslop” Is Destroying Productivity](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity)
* [2025-09-23, 01:10:00](https://tech.slashdot.org/story/25/09/22/239219/china-launches-stealth-jet-from-electromagnetic-catapult-aircraft-carrier?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Launches Stealth Jet From Electromagnetic Catapult Aircraft Carrier](https://tech.slashdot.org/story/25/09/22/239219/china-launches-stealth-jet-from-electromagnetic-catapult-aircraft-carrier?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 00:30:00](https://yro.slashdot.org/story/25/09/22/233257/supreme-court-allows-trump-to-fire-remaining-democrat-on-ftc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court Allows Trump to Fire Remaining Democrat On FTC](https://yro.slashdot.org/story/25/09/22/233257/supreme-court-allows-trump-to-fire-remaining-democrat-on-ftc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 23:50:00](https://science.slashdot.org/story/25/09/22/2211252/the-moon-is-rusting---thanks-to-wind-blown-all-the-way-from-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Moon is Rusting - Thanks To &apos;Wind&apos; Blown All the Way From Earth](https://science.slashdot.org/story/25/09/22/2211252/the-moon-is-rusting---thanks-to-wind-blown-all-the-way-from-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 23:43:55](https://news.ycombinator.com/item?id=45341038) - [Thundering herd problem: Preventing the stampede](https://distributed-computing-musings.com/2025/08/thundering-herd-problem-preventing-the-stampede/)
* [2025-09-22, 23:08:00](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss) - [OpenAI&apos;s Research on AI Models Deliberately Lying is Wild](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss)
* [2025-09-22, 22:47:42](https://lobste.rs/s/uirhie/libghostty_is_coming) - [Libghostty Is Coming](https://mitchellh.com/writing/libghostty-is-coming)
* [2025-09-22, 22:09:58](https://news.ycombinator.com/item?id=45340215) - [Imagining a language without booleans](https://justinpombrio.net/2025/09/22/imagining-a-language-without-booleans.html)
* [2025-09-22, 22:08:27](https://lobste.rs/s/a8bwsw/imagining_language_without_booleans) - [Imagining a Language without Booleans](https://justinpombrio.net/2025/09/22/imagining-a-language-without-booleans.html)
* [2025-09-22, 20:30:18](https://lobste.rs/s/zuhb6p/some_observations_concerning_large) - [Some observations concerning large programming efforts (1964)](https://dl.acm.org/doi/10.1145/1464122.1464146)
* [2025-09-22, 18:23:00](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss) - [Online Book:  The Pattern Language of Software Architecture](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss)
* [2025-09-22, 16:37:41](https://lobste.rs/s/lvnvnn/testing_is_better_than_data_structures) - [Testing is better than Data Structures and Algorithms](https://nedbatchelder.com/blog/202509/testing_is_better_than_dsa.html)
* [2025-09-22, 16:17:54](https://lobste.rs/s/2yk3wp/memory_allocation_go) - [Memory Allocation in Go](https://nghiant3223.github.io/2025/06/03/memory_allocation_in_go.html)
* [2025-09-22, 14:33:31](https://lobste.rs/s/pbwybg/dear_github_no_yaml_anchors_please) - [Dear GitHub: no YAML anchors, please](https://blog.yossarian.net/2025/09/22/dear-github-no-yaml-anchors)
* [2025-09-22, 14:16:18](https://lobste.rs/s/oaxcep/cloudflare_is_sponsoring_ladybird) - [Cloudflare is sponsoring Ladybird and Omarchy](https://blog.cloudflare.com/supporting-the-future-of-the-open-web/)
* [2025-09-22, 13:40:00](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss) - [Electronic Locks Have Backdoors, Too](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss)
* [2025-09-22, 13:31:33](https://lobste.rs/s/y7cieb/cap_n_web_new_rpc_system_for_browsers_web) - [Cap&apos;n Web: a new RPC system for browsers and web servers](https://blog.cloudflare.com/capnweb-javascript-rpc-library/)
* [2025-09-22, 13:06:10](https://lobste.rs/s/xbmvou/why_i_m_spoiled_by_apple_silicon_still_love) - [Why I&apos;m Spoiled By Apple Silicon (But Still Love Framework)](https://simonhartcher.com/posts/2025-09-22-why-im-spoiled-by-apple-silicon-but-still-love-framework/)
* [2025-09-22, 08:53:00](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss) - [Rare Apple-1 With Storied Ownership Fetched Over $500,000 at Auction](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss)
* [2025-09-22, 07:32:06](https://lobste.rs/s/avhvwl/under_hood_vec_t) - [Under the hood: Vec&lt;T&gt;](https://marma.dev/articles/2025/under-the-hood-vec-t)
* [2025-09-22, 04:07:00](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss) - [AI Can Forecast Your Future Health – Just Like the Weather](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss)
* [2025-09-21, 23:23:00](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss) - [When Non-Avian Dinosaurs Went Extinct, the Earth Changed](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss)
* [2025-09-21, 18:44:00](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss) - [Half a Million Screens go Dark . . .](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss)
* [2025-09-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss) - [Netscape Navigator 2.0 Was Released 30 years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss)
* [2025-09-21, 09:08:00](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss) - [Brazil&apos;s Payment System Puts Credit Card Firms to the Test](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss)
* [2025-09-21, 04:22:00](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss) - [IG Nobel 2025 winners](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss)
* [2025-09-20, 23:38:00](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss) - [Education Report Calling for Ethical AI Use Contains Over 15 Fake Sources](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss)
* [2025-09-20, 18:51:00](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss) - [Scientists: It&apos;s Do or Die Time for America&apos;s Primacy Exploring the Solar System](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss)
* [2025-09-20, 14:07:00](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss) - [Nobody Wanted This: Samsung Fridges are Getting Ads](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss)
* [2025-09-20, 09:21:00](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss) - [L.A. Man Sentenced to 14 Days in Prison for Accidentally Crashing Drone Into Firefighting Plane](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss)
* [2025-09-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss) - [Feds Launch Investigation Into Faulty Tesla Doors](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss)
* [2025-09-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss) - [Ban Social Media for Under 15s, Says French Report Warning of TikTok Dangers](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss)
* [2025-09-19, 19:03:00](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss) - [Latest FSR 4 Source Code &apos;Leak&apos; Lets You Run AMD&apos;s AI Upscaling Tech on Nearly Any GPU](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss)
* [2025-09-19, 18:42:21](https://news.ycombinator.com/item?id=45304980) - [Markov chains are the original language models](https://elijahpotter.dev/articles/markov_chains_are_the_original_language_models)
* [2025-09-19, 18:36:38](https://news.ycombinator.com/item?id=45304911) - [Show HN: Run Qwen3-Next-80B on 8GB GPU at 1tok/2s throughput](https://github.com/Mega4alik/ollm)
* [2025-09-19, 18:24:46](https://news.ycombinator.com/item?id=45304807) - [Processing Strings 109x Faster Than Nvidia on H100](https://ashvardanian.com/posts/stringwars-on-gpus/)
* [2025-09-19, 17:34:48](https://news.ycombinator.com/item?id=45304304) - [Smooth weighted round-robin balancing](https://github.com/nginx/nginx/commit/52327e0627f49dbda1e8db695e63a4b0af4448b1)
* [2025-09-19, 14:16:00](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss) - [Has the Apple iPhone Air Killed Off the Sim Card?](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss)
* [2025-09-19, 09:29:00](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss) - [New Bill Aims to Block Both Online Adult Content and VPNs](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss)
* [2025-09-19, 04:41:00](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss) - [The Oldest Known Mummies Have Been Found](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss)
