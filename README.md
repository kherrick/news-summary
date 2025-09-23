# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Innovations

* [Launch HN: Strata (YC X25) – One MCP server for AI to handle thousands of tools](https://news.ycombinator.com/item?id=45347914)

* [Open-source AI data generator (now hosted)](https://www.metabase.com/ai-data-generator)

* [An $800 Billion Revenue Shortfall Threatens AI Future, Bain Says](https://slashdot.org/story/25/09/23/0733235/an-800-billion-revenue-shortfall-threatens-ai-future-bain-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [OpenDataLoader-PDF: An open source tool for structured PDF parsing](https://github.com/opendataloader-project/opendataloader-pdf)

* [AI won&apos;t use as much electricity as we are told (2024)](https://johnquigginblog.substack.com/p/ai-wont-use-as-much-electricity-as)

* [MI6 Launches Dark Web Portal To Attract Spies In Russia](https://tech.slashdot.org/story/25/09/22/2317237/mi6-launches-dark-web-portal-to-attract-spies-in-russia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Software and Programming

* [Shopify, pulling strings at Ruby Central, forces Bundler and RubyGems takeover](https://joel.drapper.me/p/rubygems-takeover/)

* [From hand-tuned Go to self-optimizing code: Building BitsEvolve](https://www.datadoghq.com/blog/engineering/self-optimizing-system/)

* [Using DNS for responding to ACME challenges](https://hsm.tunnel53.net/article/dns-for-acme-challenges/)

* [Go has added Valgrind support](https://go-review.googlesource.com/c/go/+/674077)

* [Processors Faster Than Nvidia on H100 GPUs](https://ashvardanian.com/posts/stringwars-on-gpus/)

## Education and Rankings

* [U.S. News Rankings Are Out After a Tumultuous Year for Colleges](https://news.slashdot.org/story/25/09/23/166206/us-news-rankings-are-out-after-a-tumultuous-year-for-colleges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Health and Science Reporting

* [Deaths From Flesh-Eating Bacteria are on the Rise. Who is at Risk?](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss)

* [Tiny New Lenses, Smaller Than a Hair, Could Transform Phone and Drone Cameras](https://science.slashdot.org/story/25/09/23/0441203/tiny-new-lenses-smaller-than-a-hair-could-transform-phone-and-drone-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Something Extremely Strange is Happening at the Event Horizon of This Supermassive Blackhole](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss)

## Security and Cyber Risks

* [Crypto Miner in hotio/qbittorrent](https://apogliaghi.com/2025/09/crypto-miner-in-hotio/qbittorrent/)

* [US Secret Service 'Dismantles Telecommunications Threat'](https://news.slashdot.org/story/25/09/23/1441229/us-secret-service-dismantles-telecommunications-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cultural and Personal Stories

* ["If you are reading this obituary, it looks like I&apos;m dead. It happened"](https://framinghamsource.com/index.php/2025/09/22/linda-m-brossi-murphy/)

* [Nine Things I Learned in Ninety Years](http://edwardpackard.com/wp-content/uploads/2025/09/Nine-Things-I-Learned-in-Ninety-Years.pdf)

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

* [2025-09-23, 16:05:00](https://news.slashdot.org/story/25/09/23/166206/us-news-rankings-are-out-after-a-tumultuous-year-for-colleges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [U.S. News Rankings Are Out After a Tumultuous Year for Colleges](https://news.slashdot.org/story/25/09/23/166206/us-news-rankings-are-out-after-a-tumultuous-year-for-colleges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 15:47:35](https://news.ycombinator.com/item?id=45348700) - [\&quot;If you are reading this obituary, it looks like I&apos;m dead. It happened\&quot;](https://framinghamsource.com/index.php/2025/09/22/linda-m-brossi-murphy/)
* [2025-09-23, 15:25:29](https://news.ycombinator.com/item?id=45348390) - [Shopify, pulling strings at Ruby Central, forces Bundler and RubyGems takeover](https://joel.drapper.me/p/rubygems-takeover/)
* [2025-09-23, 15:22:17](https://lobste.rs/s/pbrput/from_hand_tuned_go_self_optimizing_code) - [From hand-tuned Go to self-optimizing code: Building BitsEvolve](https://www.datadoghq.com/blog/engineering/self-optimizing-system/)
* [2025-09-23, 15:20:00](https://news.slashdot.org/story/25/09/23/1441229/us-secret-service-dismantles-telecommunications-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Secret Service &apos;Dismantles Telecommunications Threat&apos;](https://news.slashdot.org/story/25/09/23/1441229/us-secret-service-dismantles-telecommunications-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 14:52:07](https://news.ycombinator.com/item?id=45347914) - [Launch HN: Strata (YC X25) – One MCP server for AI to handle thousands of tools](https://news.ycombinator.com/item?id=45347914)
* [2025-09-23, 14:50:06](https://news.ycombinator.com/item?id=45347880) - [Zip Code Map of the United States](https://engaging-data.com/us-zip-code-map/)
* [2025-09-23, 14:40:00](https://slashdot.org/story/25/09/23/092205/ai-generated-workslop-is-destroying-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI-Generated &apos;Workslop&apos; Is Destroying Productivity](https://slashdot.org/story/25/09/23/092205/ai-generated-workslop-is-destroying-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 14:39:59](https://news.ycombinator.com/item?id=45347714) - [Show HN: Kekkai – a simple, fast file integrity monitoring tool in Go](https://github.com/catatsuy/kekkai)
* [2025-09-23, 14:33:59](https://news.ycombinator.com/item?id=45347623) - [Show HN: Open-source AI data generator (now hosted)](https://www.metabase.com/ai-data-generator)
* [2025-09-23, 14:31:34](https://lobste.rs/s/lbfsed/finding_fuzzy_floats_2017) - [Finding fuzzy floats (2017)](https://nedbatchelder.com/blog/201707/finding_fuzzy_floats.html)
* [2025-09-23, 14:17:23](https://news.ycombinator.com/item?id=45347363) - [Agents turn simple keyword search into compelling search experiences](https://softwaredoug.com/blog/2025/09/22/reasoning-agents-need-bad-search)
* [2025-09-23, 14:14:46](https://news.ycombinator.com/item?id=45347335) - [x402 — An open protocol for internet-native payments](https://www.x402.org/)
* [2025-09-23, 14:10:16](https://lobste.rs/s/gloou0/symmetric_multiprocessing_hyper) - [Symmetric MultiProcessing, Hyper-Threading and scheduling on Maestro](https://blog.lenot.re/a/smp)
* [2025-09-23, 14:02:49](https://news.ycombinator.com/item?id=45347197) - [2025 DORA Report](https://blog.google/technology/developers/dora-report-2025/)
* [2025-09-23, 14:00:00](https://slashdot.org/story/25/09/23/0733235/an-800-billion-revenue-shortfall-threatens-ai-future-bain-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An $800 Billion Revenue Shortfall Threatens AI Future, Bain Says](https://slashdot.org/story/25/09/23/0733235/an-800-billion-revenue-shortfall-threatens-ai-future-bain-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 13:58:48](https://news.ycombinator.com/item?id=45347147) - [OpenDataLoader-PDF: An open source tool for structured PDF parsing](https://github.com/opendataloader-project/opendataloader-pdf)
* [2025-09-23, 13:54:51](https://news.ycombinator.com/item?id=45347089) - [OrangePi 5 Ultra Review: An ARM64 SBC Powerhouse](https://boilingsteam.com/orange-pi-5-ultra-review/)
* [2025-09-23, 13:51:56](https://news.ycombinator.com/item?id=45347043) - [The War on Roommates: Why Is Sharing a House Illegal?](https://marginalrevolution.com/marginalrevolution/2025/08/the-war-on-roommates-why-is-sharing-a-house-illegal.html)
* [2025-09-23, 13:45:44](https://news.ycombinator.com/item?id=45346968) - [Abundant Intelligence](https://blog.samaltman.com/abundant-intelligence)
* [2025-09-23, 13:41:23](https://lobste.rs/s/wb9ocu/using_dns_for_responding_acme_challenges) - [Using DNS for responding to ACME challenges](https://hsm.tunnel53.net/article/dns-for-acme-challenges/)
* [2025-09-23, 13:29:23](https://news.ycombinator.com/item?id=45346761) - [AI won&apos;t use as much electricity as we are told (2024)](https://johnquigginblog.substack.com/p/ai-wont-use-as-much-electricity-as)
* [2025-09-23, 13:24:00](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss) - [Deaths From Flesh-Eating Bacteria are on the Rise. Who is at Risk?](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss)
* [2025-09-23, 13:00:00](https://hardware.slashdot.org/story/25/09/23/0434209/mediatek-launches-improved-ai-processor-to-compete-with-qualcomm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MediaTek Launches Improved AI Processor To Compete With Qualcomm](https://hardware.slashdot.org/story/25/09/23/0434209/mediatek-launches-improved-ai-processor-to-compete-with-qualcomm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 12:56:00](https://news.ycombinator.com/item?id=45346387) - [Why Zig Feels More Practical Than Rust](https://dayvster.com/blog/why-zig-feels-more-practical-than-rust-for-real-world-cli-tools/)
* [2025-09-23, 12:41:36](https://news.ycombinator.com/item?id=45346219) - [Getting More Strategic](https://cate.blog/2025/09/23/getting-more-strategic/)
* [2025-09-23, 12:30:20](https://lobste.rs/s/x2jobn/go_has_added_valgrind_support) - [Go has added Valgrind support](https://go-review.googlesource.com/c/go/+/674077)
* [2025-09-23, 12:11:22](https://lobste.rs/s/bosvl3/lark_1_3_0_introduces_text_slices_earley) - [Lark 1.3.0 - Introduces text-slices, Earley fix, and various small improvements](https://github.com/lark-parser/lark/releases/tag/1.3.0)
* [2025-09-23, 12:00:00](https://news.ycombinator.com/item?id=45345742) - [Zinc (YC W14) Is Hiring a Senior Back End Engineer (NYC)](https://app.dover.com/apply/Zinc/4d32fdb9-c3e6-4f84-a4a2-12c80018fe8f/?rs=76643084)
* [2025-09-23, 10:47:46](https://lobste.rs/s/6wzpji/crypto_miner_hotio_qbittorrent) - [Crypto Miner in hotio/qbittorrent](https://apogliaghi.com/2025/09/crypto-miner-in-hotio/qbittorrent/)
* [2025-09-23, 10:40:41](https://news.ycombinator.com/item?id=45345207) - [Structured Outputs in LLMs](https://parthsareen.com/blog.html#sampling.md)
* [2025-09-23, 10:00:00](https://science.slashdot.org/story/25/09/23/0441203/tiny-new-lenses-smaller-than-a-hair-could-transform-phone-and-drone-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tiny New Lenses, Smaller Than a Hair, Could Transform Phone and Drone Cameras](https://science.slashdot.org/story/25/09/23/0441203/tiny-new-lenses-smaller-than-a-hair-could-transform-phone-and-drone-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 09:26:57](https://news.ycombinator.com/item?id=45344708) - [Go has added Valgrind support](https://go-review.googlesource.com/c/go/+/674077)
* [2025-09-23, 08:48:06](https://lobste.rs/s/yxzt5m/why_was_winhelp_called_online_help_system) - [Why was WinHelp called an online help system when it ran offline?](https://devblogs.microsoft.com/oldnewthing/20250922-00/?p=111619)
* [2025-09-23, 08:35:00](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss) - [We Risk a Deluge of AI-Written ‘Science’ Pushing Corporate Interests](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss)
* [2025-09-23, 07:00:00](https://science.slashdot.org/story/25/09/23/0428201/nasa-introduces-10-new-astronaut-candidates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Introduces 10 New Astronaut Candidates](https://science.slashdot.org/story/25/09/23/0428201/nasa-introduces-10-new-astronaut-candidates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 06:40:51](https://lobste.rs/s/f6yv3w/wild_linker_update_0_6_0) - [Wild Linker Update - 0.6.0](https://davidlattimore.github.io/posts/2025/09/23/wild-update-0.6.0.html)
* [2025-09-23, 06:24:50](https://news.ycombinator.com/item?id=45343449) - [Altoids by the Fistful](https://www.scottsmitelli.com/articles/altoids-by-the-fistful/)
* [2025-09-23, 04:48:28](https://news.ycombinator.com/item?id=45342943) - [Zoxide: A Better CD Command](https://github.com/ajeetdsouza/zoxide)
* [2025-09-23, 03:52:01](https://lobste.rs/s/uthgrs/altoids_by_fistful) - [Altoids by the Fistful](https://www.scottsmitelli.com/articles/altoids-by-the-fistful/)
* [2025-09-23, 03:52:00](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss) - [Something Extremely Strange is Happening at the Event Horizon of This Supermassive Blackhole](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss)
* [2025-09-23, 03:30:00](https://tech.slashdot.org/story/25/09/22/2317237/mi6-launches-dark-web-portal-to-attract-spies-in-russia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MI6 Launches Dark Web Portal To Attract Spies In Russia](https://tech.slashdot.org/story/25/09/22/2317237/mi6-launches-dark-web-portal-to-attract-spies-in-russia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 03:03:06](https://news.ycombinator.com/item?id=45342364) - [Nine Things I Learned in Ninety Years](http://edwardpackard.com/wp-content/uploads/2025/09/Nine-Things-I-Learned-in-Ninety-Years.pdf)
* [2025-09-23, 02:11:38](https://lobste.rs/s/yiq42c/ai_generated_workslop_is_destroying) - [AI-Generated “Workslop” Is Destroying Productivity](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity)
* [2025-09-23, 01:10:00](https://tech.slashdot.org/story/25/09/22/239219/china-launches-stealth-jet-from-electromagnetic-catapult-aircraft-carrier?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Launches Stealth Jet From Electromagnetic Catapult Aircraft Carrier](https://tech.slashdot.org/story/25/09/22/239219/china-launches-stealth-jet-from-electromagnetic-catapult-aircraft-carrier?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 00:30:00](https://yro.slashdot.org/story/25/09/22/233257/supreme-court-allows-trump-to-fire-remaining-democrat-on-ftc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court Allows Trump to Fire Remaining Democrat On FTC](https://yro.slashdot.org/story/25/09/22/233257/supreme-court-allows-trump-to-fire-remaining-democrat-on-ftc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 00:14:37](https://news.ycombinator.com/item?id=45341324) - [Fall Foliage Map 2025](https://www.explorefall.com/fall-foliage-map)
* [2025-09-22, 23:50:00](https://science.slashdot.org/story/25/09/22/2211252/the-moon-is-rusting---thanks-to-wind-blown-all-the-way-from-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Moon is Rusting - Thanks To &apos;Wind&apos; Blown All the Way From Earth](https://science.slashdot.org/story/25/09/22/2211252/the-moon-is-rusting---thanks-to-wind-blown-all-the-way-from-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 23:30:00](https://entertainment.slashdot.org/story/25/09/22/2257230/googles-gemini-ai-is-coming-to-your-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Gemini AI Is Coming To Your TV](https://entertainment.slashdot.org/story/25/09/22/2257230/googles-gemini-ai-is-coming-to-your-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 23:10:00](https://apple.slashdot.org/story/25/09/22/223236/ifixit-tears-down-the-iphone-air-finds-that-its-mostly-battery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iFixit Tears Down the iPhone Air, Finds That It&apos;s Mostly Battery](https://apple.slashdot.org/story/25/09/22/223236/ifixit-tears-down-the-iphone-air-finds-that-its-mostly-battery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 23:08:00](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss) - [OpenAI&apos;s Research on AI Models Deliberately Lying is Wild](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss)
* [2025-09-22, 22:47:42](https://lobste.rs/s/uirhie/libghostty_is_coming) - [Libghostty Is Coming](https://mitchellh.com/writing/libghostty-is-coming)
* [2025-09-22, 22:30:00](https://slashdot.org/story/25/09/22/2118247/top-economists-agree-that-gen-zs-hiring-nightmare-is-real?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Top Economists Agree That Gen Z&apos;s Hiring Nightmare Is Real](https://slashdot.org/story/25/09/22/2118247/top-economists-agree-that-gen-zs-hiring-nightmare-is-real?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 22:08:27](https://lobste.rs/s/a8bwsw/imagining_language_without_booleans) - [Imagining a Language without Booleans](https://justinpombrio.net/2025/09/22/imagining-a-language-without-booleans.html)
* [2025-09-22, 21:50:00](https://tech.slashdot.org/story/25/09/22/2118229/linkedin-set-to-start-to-train-its-ai-on-member-profiles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LinkedIn Set To Start To Train Its AI on Member Profiles](https://tech.slashdot.org/story/25/09/22/2118229/linkedin-set-to-start-to-train-its-ai-on-member-profiles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 20:30:18](https://lobste.rs/s/zuhb6p/some_observations_concerning_large) - [Some observations concerning large programming efforts (1964)](https://dl.acm.org/doi/10.1145/1464122.1464146)
* [2025-09-22, 18:23:00](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss) - [Online Book:  The Pattern Language of Software Architecture](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss)
* [2025-09-22, 17:03:06](https://lobste.rs/s/irlx1v/flp_theorem) - [The FLP theorem](https://shachaf.net/w/flp)
* [2025-09-22, 16:37:41](https://lobste.rs/s/lvnvnn/testing_is_better_than_data_structures) - [Testing is better than Data Structures and Algorithms](https://nedbatchelder.com/blog/202509/testing_is_better_than_dsa.html)
* [2025-09-22, 16:18:31](https://lobste.rs/s/vkhfps/steve_jobs_jef_raskin_first_great_war_for) - [Steve Jobs, Jef Raskin, and the first great war for your thumbs (2023)](https://aresluna.org/steve-jobs-jef-raskin-and-the-first-great-war-for-your-thumbs/)
* [2025-09-22, 16:17:54](https://lobste.rs/s/2yk3wp/memory_allocation_go) - [Memory Allocation in Go](https://nghiant3223.github.io/2025/06/03/memory_allocation_in_go.html)
* [2025-09-22, 14:51:33](https://lobste.rs/s/pfv1tv/long_look_at_netbsd_10_1) - [A long look at NetBSD 10.1](https://distrowatch.com/weekly-mobile.php?issue=20250922#netbsd)
* [2025-09-22, 14:33:31](https://lobste.rs/s/pbwybg/dear_github_no_yaml_anchors_please) - [Dear GitHub: no YAML anchors, please](https://blog.yossarian.net/2025/09/22/dear-github-no-yaml-anchors)
* [2025-09-22, 14:16:18](https://lobste.rs/s/oaxcep/cloudflare_is_sponsoring_ladybird) - [Cloudflare is sponsoring Ladybird and Omarchy](https://blog.cloudflare.com/supporting-the-future-of-the-open-web/)
* [2025-09-22, 13:40:00](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss) - [Electronic Locks Have Backdoors, Too](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss)
* [2025-09-22, 13:31:33](https://lobste.rs/s/y7cieb/cap_n_web_new_rpc_system_for_browsers_web) - [Cap&apos;n Web: a new RPC system for browsers and web servers](https://blog.cloudflare.com/capnweb-javascript-rpc-library/)
* [2025-09-22, 13:06:10](https://lobste.rs/s/xbmvou/why_i_m_spoiled_by_apple_silicon_still_love) - [Why I&apos;m Spoiled By Apple Silicon (But Still Love Framework)](https://simonhartcher.com/posts/2025-09-22-why-im-spoiled-by-apple-silicon-but-still-love-framework/)
* [2025-09-22, 08:53:00](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss) - [Rare Apple-1 With Storied Ownership Fetched Over $500,000 at Auction](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss)
* [2025-09-22, 07:52:53](https://lobste.rs/s/d82moa/kernel_introduce_multikernel) - [kernel: Introduce multikernel architecture support](https://lore.kernel.org/lkml/20250918222607.186488-1-xiyou.wangcong@gmail.com/)
* [2025-09-22, 07:32:06](https://lobste.rs/s/avhvwl/under_hood_vec_t) - [Under the hood: Vec&lt;T&gt;](https://marma.dev/articles/2025/under-the-hood-vec-t)
* [2025-09-22, 04:07:00](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss) - [AI Can Forecast Your Future Health – Just Like the Weather](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss)
* [2025-09-21, 23:23:00](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss) - [When Non-Avian Dinosaurs Went Extinct, the Earth Changed](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss)
* [2025-09-21, 18:44:00](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss) - [Half a Million Screens go Dark . . .](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss)
* [2025-09-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss) - [Netscape Navigator 2.0 Was Released 30 years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss)
* [2025-09-21, 09:08:00](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss) - [Brazil&apos;s Payment System Puts Credit Card Firms to the Test](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss)
* [2025-09-21, 04:22:00](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss) - [IG Nobel 2025 winners](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss)
* [2025-09-20, 23:38:00](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss) - [Education Report Calling for Ethical AI Use Contains Over 15 Fake Sources](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss)
* [2025-09-20, 18:51:00](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss) - [Scientists: It&apos;s Do or Die Time for America&apos;s Primacy Exploring the Solar System](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss)
* [2025-09-20, 18:41:22](https://news.ycombinator.com/item?id=45316063) - [Obscure feature + obscure feature + obscure feature = compiler bug](https://antithesis.com/blog/2025/compiler_bug/)
* [2025-09-20, 18:04:10](https://news.ycombinator.com/item?id=45315705) - [Row-level transformations in Postgres CDC using Lua](https://blog.peerdb.io/row-level-transformations-in-postgres-cdc-using-lua)
* [2025-09-20, 14:37:30](https://news.ycombinator.com/item?id=45313790) - [Compiling a Functional Language to LLVM (2023)](https://danieljharvey.github.io/posts/2023-02-08-llvm-compiler-part-1.html)
* [2025-09-20, 14:07:00](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss) - [Nobody Wanted This: Samsung Fridges are Getting Ads](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss)
* [2025-09-20, 09:21:00](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss) - [L.A. Man Sentenced to 14 Days in Prison for Accidentally Crashing Drone Into Firefighting Plane](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss)
* [2025-09-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss) - [Feds Launch Investigation Into Faulty Tesla Doors](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss)
* [2025-09-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss) - [Ban Social Media for Under 15s, Says French Report Warning of TikTok Dangers](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss)
* [2025-09-19, 19:42:53](https://news.ycombinator.com/item?id=45305642) - [Linux Compose Key Sequences (2007)](https://math.dartmouth.edu/~sarunas/Linux_Compose_Key_Sequences.html)
* [2025-09-19, 19:03:00](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss) - [Latest FSR 4 Source Code &apos;Leak&apos; Lets You Run AMD&apos;s AI Upscaling Tech on Nearly Any GPU](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss)
* [2025-09-19, 18:36:38](https://news.ycombinator.com/item?id=45304911) - [Show HN: Run Qwen3-Next-80B on 8GB GPU at 1tok/2s throughput](https://github.com/Mega4alik/ollm)
* [2025-09-19, 18:24:46](https://news.ycombinator.com/item?id=45304807) - [Processing Strings 109x Faster Than Nvidia on H100](https://ashvardanian.com/posts/stringwars-on-gpus/)
* [2025-09-19, 14:16:00](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss) - [Has the Apple iPhone Air Killed Off the Sim Card?](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss)
* [2025-09-19, 12:06:23](https://news.ycombinator.com/item?id=45300668) - [I built a dual RTX 3090 rig for local AI in 2025 (and lessons learned)](https://www.llamabuilds.ai/build/portable-25l-nvlinked-dual-3090-llm-rig)
* [2025-09-19, 09:29:00](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss) - [New Bill Aims to Block Both Online Adult Content and VPNs](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss)
* [2025-09-19, 04:41:00](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss) - [The Oldest Known Mummies Have Been Found](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss)
