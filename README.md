# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Developments and Updates

* [Go has added Valgrind support](https://lobste.rs/s/x2jobn/go_has_added_valgrind_support) - [Article](https://go-review.googlesource.com/c/go/+/674077)

* [Lark 1.3.0 - Introduces text-slices, Earley fix, and various small improvements](https://lobste.rs/s/bosvl3/lark_1_3_0_introduces_text_slices_earley) - [Article](https://github.com/lark-parser/lark/releases/tag/1.3.0)

* [Wild Linker Update - 0.6.0](https://lobste.rs/s/f6yv3w/wild_linker_update_0_6_0) - [Article](https://davidlattimore.github.io/posts/2025/09/23/wild-update-0.6.0.html)

* [Zoxide: A Better CD Command](https://news.ycombinator.com/item?id=45342943) - [Article](https://github.com/ajeetdsouza/zoxide)

## AI Developments

* [We Risk a Deluge of AI-Written ‘Science’ Pushing Corporate Interests](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss) - [Article](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss)

* [AI-Generated “Workslop” Is Destroying Productivity](https://lobste.rs/s/yiq42c/ai_generated_workslop_is_destroying) - [Article](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity)

* [Paper2Agent: Stanford Reimagining Research Papers as Interactive AI Agents](https://news.ycombinator.com/item?id=45340133) - [Article](https://arxiv.org/abs/2509.06917)

* [Meta's AI System Llama Approved for Use by US Government Agencies](https://yro.slashdot.org/story/25/09/22/1955220/metas-ai-system-llama-approved-for-use-by-us-government-agencies) - [Article](https://yro.slashdot.org/story/25/09/22/1955220/metas-ai-system-llama-approved-for-use-by-us-government-agencies)

## Cybersecurity and Technology Incidents

* [Crypto Miner in hotio/qbittorrent](https://lobste.rs/s/6wzpji/crypto_miner_hotio_qbittorrent) - [Article](https://apogliaghi.com/2025/09/crypto-miner-in-hotio/qbittorrent/)

* [Cache of Devices Capable of Crashing Cell Network Is Found Near U.N](https://news.ycombinator.com/item?id=45345514) - [Article](https://www.nytimes.com/2025/09/23/us/politics/secret-service-sim-cards-servers-un.html)

## Scientific Discoveries and Studies

* [Indoor surfaces act as sponges for harmful chemicals](https://news.ycombinator.com/item?id=45344756) - [Article](https://news.uci.edu/2025/09/22/indoor-surfaces-act-as-massive-sponges-for-harmful-chemicals-uc-irvine-led-study-shows/)

* [Something Extremely Strange is Happening at the Event Horizon of This Supermassive Blackhole](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss) - [Article](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss)

## History and Culture

* [Nine Things I Learned in Ninety Years](https://news.ycombinator.com/item?id=45342364) - [Article](http://edwardpackard.com/wp-content/uploads/2025/09/Nine-Things-I-Learned-in-Ninety-Years.pdf)

* [Netscape Navigator 2.0 Was Released 30 years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss) - [Article](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss)

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

* [2025-09-23, 12:30:20](https://lobste.rs/s/x2jobn/go_has_added_valgrind_support) - [Go has added Valgrind support](https://go-review.googlesource.com/c/go/+/674077)
* [2025-09-23, 12:18:01](https://news.ycombinator.com/item?id=45345950) - [Mesh: I tried Htmx, then ditched it](https://ajmoon.com/posts/mesh-i-tried-htmx-then-ditched-it)
* [2025-09-23, 12:11:22](https://lobste.rs/s/bosvl3/lark_1_3_0_introduces_text_slices_earley) - [Lark 1.3.0 - Introduces text-slices, Earley fix, and various small improvements](https://github.com/lark-parser/lark/releases/tag/1.3.0)
* [2025-09-23, 12:00:00](https://news.ycombinator.com/item?id=45345742) - [Zinc (YC W14) Is Hiring a Senior Back End Engineer (NYC)](https://app.dover.com/apply/Zinc/4d32fdb9-c3e6-4f84-a4a2-12c80018fe8f/?rs=76643084)
* [2025-09-23, 11:29:13](https://news.ycombinator.com/item?id=45345514) - [Cache of Devices Capable of Crashing Cell Network Is Found Near U.N](https://www.nytimes.com/2025/09/23/us/politics/secret-service-sim-cards-servers-un.html)
* [2025-09-23, 10:47:46](https://lobste.rs/s/6wzpji/crypto_miner_hotio_qbittorrent) - [Crypto Miner in hotio/qbittorrent](https://apogliaghi.com/2025/09/crypto-miner-in-hotio/qbittorrent/)
* [2025-09-23, 10:44:57](https://news.ycombinator.com/item?id=45345237) - [Walking Michigan City (Indiana)](https://walkingtheworld.substack.com/p/walking-michigan-city-indiana)
* [2025-09-23, 10:40:41](https://news.ycombinator.com/item?id=45345207) - [Structured Outputs in LLMs](https://parthsareen.com/blog.html#sampling.md)
* [2025-09-23, 10:30:42](https://news.ycombinator.com/item?id=45345148) - [Hyb Error: A Hybrid Metric Combining Absolute and Relative Errors](https://arxiv.org/abs/2403.07492)
* [2025-09-23, 09:33:34](https://news.ycombinator.com/item?id=45344756) - [Indoor surfaces act as sponges for harmful chemicals](https://news.uci.edu/2025/09/22/indoor-surfaces-act-as-massive-sponges-for-harmful-chemicals-uc-irvine-led-study-shows/)
* [2025-09-23, 09:26:57](https://news.ycombinator.com/item?id=45344708) - [Go has added Valgrind support](https://go-review.googlesource.com/c/go/+/674077)
* [2025-09-23, 09:04:43](https://news.ycombinator.com/item?id=45344554) - [The YAML Document from Hell](https://ruudvanasseldonk.com/2023/01/11/the-yaml-document-from-hell)
* [2025-09-23, 08:48:06](https://lobste.rs/s/yxzt5m/why_was_winhelp_called_online_help_system) - [Why was WinHelp called an online help system when it ran offline?](https://devblogs.microsoft.com/oldnewthing/20250922-00/?p=111619)
* [2025-09-23, 08:35:00](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss) - [We Risk a Deluge of AI-Written ‘Science’ Pushing Corporate Interests](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss)
* [2025-09-23, 08:10:06](https://news.ycombinator.com/item?id=45344186) - [Awash in revisionist histories about Apple&apos;s web efforts, a look at the evidence](https://infrequently.org/2025/09/cupertinos-comforting-myths/)
* [2025-09-23, 06:40:51](https://lobste.rs/s/f6yv3w/wild_linker_update_0_6_0) - [Wild Linker Update - 0.6.0](https://davidlattimore.github.io/posts/2025/09/23/wild-update-0.6.0.html)
* [2025-09-23, 06:24:50](https://news.ycombinator.com/item?id=45343449) - [Altoids by the Fistful](https://www.scottsmitelli.com/articles/altoids-by-the-fistful/)
* [2025-09-23, 05:30:28](https://news.ycombinator.com/item?id=45343108) - [Delete FROM users WHERE location = &apos;Iran&apos;;](https://gist.github.com/avestura/ce2aa6e55dad783b1aba946161d5fef4)
* [2025-09-23, 04:48:28](https://news.ycombinator.com/item?id=45342943) - [Zoxide: A Better CD Command](https://github.com/ajeetdsouza/zoxide)
* [2025-09-23, 04:10:15](https://news.ycombinator.com/item?id=45342759) - [Gamebooks and graph theory (2019)](https://notes.atomutek.org/gamebooks-and-graph-theory.html)
* [2025-09-23, 03:52:01](https://lobste.rs/s/uthgrs/altoids_by_fistful) - [Altoids by the Fistful](https://www.scottsmitelli.com/articles/altoids-by-the-fistful/)
* [2025-09-23, 03:52:00](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss) - [Something Extremely Strange is Happening at the Event Horizon of This Supermassive Blackhole](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss)
* [2025-09-23, 03:03:06](https://news.ycombinator.com/item?id=45342364) - [Nine Things I Learned in Ninety Years](http://edwardpackard.com/wp-content/uploads/2025/09/Nine-Things-I-Learned-in-Ninety-Years.pdf)
* [2025-09-23, 02:11:38](https://lobste.rs/s/yiq42c/ai_generated_workslop_is_destroying) - [AI-Generated “Workslop” Is Destroying Productivity](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity)
* [2025-09-23, 01:48:07](https://lobste.rs/s/popcyd/exploring_grapheneos_secure_allocator) - [Exploring GrapheneOS secure allocator: Hardened Malloc](https://www.synacktiv.com/en/publications/exploring-grapheneos-secure-allocator-hardened-malloc)
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
* [2025-09-22, 22:07:07](https://news.ycombinator.com/item?id=45340192) - [Kevo app shutdown](https://www.kwikset.com/support/answers/what-does-the-kevo-app-shutdown-mean-to-my-kevo-door-lock)
* [2025-09-22, 22:02:01](https://news.ycombinator.com/item?id=45340133) - [Paper2Agent: Stanford Reimagining Research Papers as Interactive AI Agents](https://arxiv.org/abs/2509.06917)
* [2025-09-22, 21:50:00](https://tech.slashdot.org/story/25/09/22/2118229/linkedin-set-to-start-to-train-its-ai-on-member-profiles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LinkedIn Set To Start To Train Its AI on Member Profiles](https://tech.slashdot.org/story/25/09/22/2118229/linkedin-set-to-start-to-train-its-ai-on-member-profiles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 21:10:00](https://yro.slashdot.org/story/25/09/22/1955220/metas-ai-system-llama-approved-for-use-by-us-government-agencies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s AI System Llama Approved For Use By US Government Agencies](https://yro.slashdot.org/story/25/09/22/1955220/metas-ai-system-llama-approved-for-use-by-us-government-agencies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 20:30:18](https://lobste.rs/s/zuhb6p/some_observations_concerning_large) - [Some observations concerning large programming efforts (1964)](https://dl.acm.org/doi/10.1145/1464122.1464146)
* [2025-09-22, 20:30:00](https://news.slashdot.org/story/25/09/22/1924228/tiktok-algorithm-to-be-retrained-on-us-user-data-under-trump-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TikTok Algorithm To Be Retrained On US User Data Under Trump Deal](https://news.slashdot.org/story/25/09/22/1924228/tiktok-algorithm-to-be-retrained-on-us-user-data-under-trump-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 19:50:00](https://yro.slashdot.org/story/25/09/22/1919236/california-issues-historic-fine-over-lawyers-chatgpt-fabrications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Issues Historic Fine Over Lawyer&apos;s ChatGPT Fabrications](https://yro.slashdot.org/story/25/09/22/1919236/california-issues-historic-fine-over-lawyers-chatgpt-fabrications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 19:16:27](https://lobste.rs/s/xgj8jc/aposd_vs_clean_code_discussion_between) - [aposd-vs-clean-code: A discussion between John Ousterhout and Robert Martin](https://github.com/johnousterhout/aposd-vs-clean-code)
* [2025-09-22, 19:13:00](https://mobile.slashdot.org/story/25/09/22/1913255/apples-iphone-17-pro-can-be-easily-scratched?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s iPhone 17 Pro Can Be Easily Scratched](https://mobile.slashdot.org/story/25/09/22/1913255/apples-iphone-17-pro-can-be-easily-scratched?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 18:23:00](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss) - [Online Book:  The Pattern Language of Software Architecture](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss)
* [2025-09-22, 18:05:00](https://tech.slashdot.org/story/25/09/22/185208/uber-ceo-says-robotaxis-could-displace-drivers-in-10-to-15-years-and-create-a-big-big-societal-question?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber CEO Says Robotaxis Could Displace Drivers in 10 To 15 Years and Create &apos;a Big, Big Societal Question&apos;](https://tech.slashdot.org/story/25/09/22/185208/uber-ceo-says-robotaxis-could-displace-drivers-in-10-to-15-years-and-create-a-big-big-societal-question?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 17:50:21](https://news.ycombinator.com/item?id=45336989) - [Qwen3-Omni: Native Omni AI model for text, image and video](https://github.com/QwenLM/Qwen3-Omni)
* [2025-09-22, 17:26:00](https://tech.slashdot.org/story/25/09/22/1726236/microsoft-is-bringing-video-wallpapers-to-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is Bringing Video Wallpapers To Windows 11](https://tech.slashdot.org/story/25/09/22/1726236/microsoft-is-bringing-video-wallpapers-to-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 17:03:06](https://lobste.rs/s/irlx1v/flp_theorem) - [The FLP theorem](https://shachaf.net/w/flp)
* [2025-09-22, 16:37:41](https://lobste.rs/s/lvnvnn/testing_is_better_than_data_structures) - [Testing is better than Data Structures and Algorithms](https://nedbatchelder.com/blog/202509/testing_is_better_than_dsa.html)
* [2025-09-22, 16:37:00](https://slashdot.org/story/25/09/22/1637225/nvidia-to-invest-100-billion-in-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia To Invest $100 Billion in OpenAI](https://slashdot.org/story/25/09/22/1637225/nvidia-to-invest-100-billion-in-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 16:18:31](https://lobste.rs/s/vkhfps/steve_jobs_jef_raskin_first_great_war_for) - [Steve Jobs, Jef Raskin, and the first great war for your thumbs (2023)](https://aresluna.org/steve-jobs-jef-raskin-and-the-first-great-war-for-your-thumbs/)
* [2025-09-22, 16:17:54](https://lobste.rs/s/2yk3wp/memory_allocation_go) - [Memory Allocation in Go](https://nghiant3223.github.io/2025/06/03/memory_allocation_in_go.html)
* [2025-09-22, 16:02:00](https://slashdot.org/story/25/09/22/1558259/china-road-trip-exposes-list-of-uninvestable-assets-in-the-west?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Road Trip Exposes List of Uninvestable Assets in the West](https://slashdot.org/story/25/09/22/1558259/china-road-trip-exposes-list-of-uninvestable-assets-in-the-west?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 14:51:33](https://lobste.rs/s/pfv1tv/long_look_at_netbsd_10_1) - [A long look at NetBSD 10.1](https://distrowatch.com/weekly-mobile.php?issue=20250922#netbsd)
* [2025-09-22, 14:33:31](https://lobste.rs/s/pbwybg/dear_github_no_yaml_anchors_please) - [Dear GitHub: no YAML anchors, please](https://blog.yossarian.net/2025/09/22/dear-github-no-yaml-anchors)
* [2025-09-22, 14:16:18](https://lobste.rs/s/oaxcep/cloudflare_is_sponsoring_ladybird) - [Cloudflare is sponsoring Ladybird and Omarchy](https://blog.cloudflare.com/supporting-the-future-of-the-open-web/)
* [2025-09-22, 13:40:00](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss) - [Electronic Locks Have Backdoors, Too](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss)
* [2025-09-22, 13:31:33](https://lobste.rs/s/y7cieb/cap_n_web_new_rpc_system_for_browsers_web) - [Cap&apos;n Web: a new RPC system for browsers and web servers](https://blog.cloudflare.com/capnweb-javascript-rpc-library/)
* [2025-09-22, 13:17:59](https://news.ycombinator.com/item?id=45333021) - [Why haven&apos;t local-first apps become popular?](https://marcobambini.substack.com/p/why-local-first-apps-havent-become)
* [2025-09-22, 13:06:10](https://lobste.rs/s/xbmvou/why_i_m_spoiled_by_apple_silicon_still_love) - [Why I&apos;m Spoiled By Apple Silicon (But Still Love Framework)](https://simonhartcher.com/posts/2025-09-22-why-im-spoiled-by-apple-silicon-but-still-love-framework/)
* [2025-09-22, 13:05:32](https://news.ycombinator.com/item?id=45332883) - [Cap&apos;n Web: a new RPC system for browsers and web servers](https://blog.cloudflare.com/capnweb-javascript-rpc-library/)
* [2025-09-22, 13:03:10](https://news.ycombinator.com/item?id=45332859) - [I&apos;m spoiled by Apple Silicon but still love Framework](https://simonhartcher.com/posts/2025-09-22-why-im-spoiled-by-apple-silicon-but-still-love-framework/)
* [2025-09-22, 11:59:01](https://news.ycombinator.com/item?id=45332196) - [Is a movie prop the ultimate laptop bag?](https://blog.jgc.org/2025/09/is-movie-prop-ultimate-laptop-bag.html)
* [2025-09-22, 09:59:48](https://lobste.rs/s/zxxdp0/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/zxxdp0/what_are_you_doing_this_week)
* [2025-09-22, 08:53:00](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss) - [Rare Apple-1 With Storied Ownership Fetched Over $500,000 at Auction](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss)
* [2025-09-22, 07:52:53](https://lobste.rs/s/d82moa/kernel_introduce_multikernel) - [kernel: Introduce multikernel architecture support](https://lore.kernel.org/lkml/20250918222607.186488-1-xiyou.wangcong@gmail.com/)
* [2025-09-22, 07:32:06](https://lobste.rs/s/avhvwl/under_hood_vec_t) - [Under the hood: Vec&lt;T&gt;](https://marma.dev/articles/2025/under-the-hood-vec-t)
* [2025-09-22, 04:07:00](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss) - [AI Can Forecast Your Future Health – Just Like the Weather](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss)
* [2025-09-22, 02:04:44](https://lobste.rs/s/jjqdal/multikernel_architecture_proposed_for) - [Multikernel architecture proposed for Linux](https://www.osnews.com/story/143398/multikernel-architecture-proposed-for-linux/)
* [2025-09-21, 23:23:00](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss) - [When Non-Avian Dinosaurs Went Extinct, the Earth Changed](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss)
* [2025-09-21, 18:44:00](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss) - [Half a Million Screens go Dark . . .](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss)
* [2025-09-21, 14:26:10](https://news.ycombinator.com/item?id=45323027) - [The Beginner&apos;s Textbook for Fully Homomorphic Encryption](https://arxiv.org/abs/2503.05136)
* [2025-09-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss) - [Netscape Navigator 2.0 Was Released 30 years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss)
* [2025-09-21, 09:08:00](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss) - [Brazil&apos;s Payment System Puts Credit Card Firms to the Test](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss)
* [2025-09-21, 04:22:00](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss) - [IG Nobel 2025 winners](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss)
* [2025-09-20, 23:38:00](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss) - [Education Report Calling for Ethical AI Use Contains Over 15 Fake Sources](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss)
* [2025-09-20, 18:51:00](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss) - [Scientists: It&apos;s Do or Die Time for America&apos;s Primacy Exploring the Solar System](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss)
* [2025-09-20, 14:37:30](https://news.ycombinator.com/item?id=45313790) - [Compiling a Functional Language to LLVM (2023)](https://danieljharvey.github.io/posts/2023-02-08-llvm-compiler-part-1.html)
* [2025-09-20, 14:07:00](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss) - [Nobody Wanted This: Samsung Fridges are Getting Ads](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss)
* [2025-09-20, 09:21:00](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss) - [L.A. Man Sentenced to 14 Days in Prison for Accidentally Crashing Drone Into Firefighting Plane](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss)
* [2025-09-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss) - [Feds Launch Investigation Into Faulty Tesla Doors](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss)
* [2025-09-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss) - [Ban Social Media for Under 15s, Says French Report Warning of TikTok Dangers](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss)
* [2025-09-19, 22:36:05](https://news.ycombinator.com/item?id=45307570) - [Based C++](https://github.com/SheafificationOfG/based-cpp)
* [2025-09-19, 20:44:02](https://news.ycombinator.com/item?id=45306323) - [Themis (European Reusable Rocket) is assembled on launch pad](https://phys.org/news/2025-09-themis-pad-fully.html)
* [2025-09-19, 19:03:00](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss) - [Latest FSR 4 Source Code &apos;Leak&apos; Lets You Run AMD&apos;s AI Upscaling Tech on Nearly Any GPU](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss)
* [2025-09-19, 18:36:38](https://news.ycombinator.com/item?id=45304911) - [Show HN: Run Qwen3-Next-80B on 8GB GPU at 1tok/2s throughput](https://github.com/Mega4alik/ollm)
* [2025-09-19, 18:24:46](https://news.ycombinator.com/item?id=45304807) - [Processing Strings 109x Faster Than Nvidia on H100](https://ashvardanian.com/posts/stringwars-on-gpus/)
* [2025-09-19, 14:16:00](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss) - [Has the Apple iPhone Air Killed Off the Sim Card?](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss)
* [2025-09-19, 12:06:23](https://news.ycombinator.com/item?id=45300668) - [I built a dual RTX 3090 rig for local AI in 2025 (and lessons learned)](https://www.llamabuilds.ai/build/portable-25l-nvlinked-dual-3090-llm-rig)
* [2025-09-19, 09:29:00](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss) - [New Bill Aims to Block Both Online Adult Content and VPNs](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss)
* [2025-09-19, 04:41:00](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss) - [The Oldest Known Mummies Have Been Found](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss)
