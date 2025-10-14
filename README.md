# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Computing Developments

* [[2022] JSONSki: Streaming Processing of JSONPath Queries with Fast Forwarding](https://github.com/AutomataLab/JSONSki) ([comments](https://lobste.rs/s/9osykc/2022_jsonski_streaming_processing))

* [Strudel REPL – a music live coding environment living in the browser](https://strudel.cc) ([comments](https://news.ycombinator.com/item?id=45571822))

* [Critical GitHub Copilot Vulnerability Leaks Private Source Code](https://www.legitsecurity.com/blog/camoleak-critical-github-copilot-vulnerability-leaks-private-source-code) ([comments](https://lobste.rs/s/jr6zfo/critical_github_copilot_vulnerability))

* [NanoChat – The best ChatGPT that $100 can buy](https://github.com/karpathy/nanochat) ([comments](https://news.ycombinator.com/item?id=45569350))

* [LLMs are getting better at character-level text manipulation](https://blog.burkert.me/posts/llm_evolution_character_manipulation/) ([comments](https://news.ycombinator.com/item?id=45572478))

* [Google's Nano Banana AI-Image Editing Is Coming to Search, NotebookLM and Photos](https://tech.slashdot.org/story/25/10/13/2130203/googles-nano-banana-ai-image-editing-is-coming-to-search-notebooklm-and-photos?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://lobste.rs/s/hwwsxh/google_s_nano_banana_ai_image_editing_is))

## Space, Science, and Technology Advancements

* [NASA Unit JPL To Lay Off About 550 Workers, Citing Restructure](https://science.slashdot.org/story/25/10/14/0133211/nasa-unit-jpl-to-lay-off-about-550-workers-citing-restructure?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/10/14/0133211/nasa-unit-jpl-restructure-comments))

* [SpaceX Starship Hits Key Milestones Before Stunning Splashdown](https://science.slashdot.org/story/25/10/14/0123227/spacex-starship-hits-key-milestones-before-stunning-splashdown?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45575127))

* [TP-Link Makes History With First Successful Wi-Fi 8 Connection](https://mobile.slashdot.org/story/25/10/13/1813236/tp-link-makes-history-with-first-successful-wi-fi-8-connection?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/10/13/1434236))

* [Earth's Climate Has Passed Its First Irreversible Tipping Point and Entered a 'New Reality'](https://news.slashdot.org/story/25/10/13/1340224/earths-climate-has-passed-its-first-irreversible-tipping-point-and-entered-a-new-reality?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/10/13/1345034/earth-climate-reality-comments))

## Security and Cybersecurity

* [Salesforce Hacked With Threat to Release 1 Billion Customer Records](https://soylentnews.org/article.pl?sid=25/10/12/1454236&from=rss) ([comments](https://news.ycombinator.com/item?id=45575127))

* [Android 'Pixnapping' Attack Can Capture App Data Like 2FA Codes](https://yro.slashdot.org/story/25/10/14/019242/android-pixnapping-attack-can-capture-app-data-like-2fa-codes?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45575755))

* [Critical GitHub Copilot Vulnerability Leaks Private Source Code](https://www.legitsecurity.com/blog/camoleak-critical-github-copilot-vulnerability-leaks-private-source-code) ([comments](https://lobste.rs/s/jr6zfo/critical_github_copilot_vulnerability))

## Policy and Governance

* [New York Times, AP, Newsmax and others say they won't sign new Pentagon rules](https://apnews.com/article/pentagon-press-access-defense-department-rules-95878bce05096912887701eaa6d019c6) ([comments](https://news.ycombinator.com/item?id=45575755))

* [Dutch Government Takes Control of China-Owned Chipmaker Nexperia](https://yro.slashdot.org/story/25/10/13/2121258/dutch-government-takes-control-of-china-owned-chipmaker-nexperia?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/10/13/2130203))

* [Companies Are Making the Same Mistake With AI That Tesla Made With Robots](https://soylentnews.org/article.pl?sid=25/10/12/1411214&from=rss) ([comments](https://news.ycombinator.com/item?id=45576147))

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

* [2025-10-14, 09:10:53](https://lobste.rs/s/9osykc/2022_jsonski_streaming_processing) - [[2022] JSONSki: Streaming Processing of JSONPath Queries with Fast Forwarding](https://github.com/AutomataLab/JSONSki)
* [2025-10-14, 07:08:02](https://news.ycombinator.com/item?id=45577080) - [Why the push for Agentic when models can barely follow a simple instruction?](https://forum.cursor.com/t/why-the-push-for-agentic-when-models-can-barely-follow-a-single-simple-instruction/137154)
* [2025-10-14, 07:00:00](https://science.slashdot.org/story/25/10/14/0133211/nasa-unit-jpl-to-lay-off-about-550-workers-citing-restructure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Unit JPL To Lay Off About 550 Workers, Citing Restructure](https://science.slashdot.org/story/25/10/14/0133211/nasa-unit-jpl-to-lay-off-about-550-workers-citing-restructure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 06:49:49](https://lobste.rs/s/nxhkvy/demystifying_scala_3_types_by_bill) - [Demystifying Scala 3 Types By Bill Venners](https://watch.softinio.com/w/6Ubx9SPfjXDH2yBke158R4)
* [2025-10-14, 06:19:21](https://lobste.rs/s/zljqfm/literate_tracing) - [Literate Tracing](https://arxiv.org/pdf/2510.09073)
* [2025-10-14, 06:17:42](https://lobste.rs/s/fqmjsc/django_forever_applied_cartography) - [Django forever · Applied Cartography](https://jmduke.com/posts/post/django/)
* [2025-10-14, 06:11:00](https://soylentnews.org/article.pl?sid=25/10/12/1454236&amp;from=rss) - [Salesforce Hacked With Threat to Release 1 Billion Customer Records](https://soylentnews.org/article.pl?sid=25/10/12/1454236&amp;from=rss)
* [2025-10-14, 05:36:57](https://news.ycombinator.com/item?id=45576623) - [Why Study Programming Languages](https://people.csail.mit.edu/rachit/post/why-study-programming-languages/)
* [2025-10-14, 05:14:26](https://news.ycombinator.com/item?id=45576502) - [Copy-and-Patch: A Copy-and-Patch Tutorial](https://transactional.blog/copy-and-patch/tutorial)
* [2025-10-14, 05:13:12](https://lobste.rs/s/42tbpf/copy_patch_tutorial) - [A Copy-and-Patch Tutorial](https://transactional.blog/copy-and-patch/tutorial)
* [2025-10-14, 03:31:23](https://lobste.rs/s/yuhk4b/space_efficient_data_structures_for_top_k) - [Space-Efficient Data Structures for Top-k Completion (2013)](http://groups.di.unipi.it/~ottavian/files/topk_completion_www13.pdf)
* [2025-10-14, 03:30:00](https://yro.slashdot.org/story/25/10/14/019242/android-pixnapping-attack-can-capture-app-data-like-2fa-codes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android &apos;Pixnapping&apos; Attack Can Capture App Data Like 2FA Codes](https://yro.slashdot.org/story/25/10/14/019242/android-pixnapping-attack-can-capture-app-data-like-2fa-codes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 02:51:20](https://news.ycombinator.com/item?id=45575755) - [New York Times, AP, Newsmax and others say they won&apos;t sign new Pentagon rules](https://apnews.com/article/pentagon-press-access-defense-department-rules-95878bce05096912887701eaa6d019c6)
* [2025-10-14, 02:49:52](https://lobste.rs/s/gmggsr/mptcp_multipath_tcp_for_linux) - [MPTCP / Multipath TCP for Linux](https://www.mptcp.dev/)
* [2025-10-14, 01:48:56](https://news.ycombinator.com/item?id=45575391) - [Don’t Look Up: Sensitive internal links in the clear on GEO satellites [pdf]](https://satcom.sysnet.ucsd.edu/docs/dontlookup_ccs25_fullpaper.pdf)
* [2025-10-14, 01:25:00](https://science.slashdot.org/story/25/10/14/0123227/spacex-starship-hits-key-milestones-before-stunning-splashdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Starship Hits Key Milestones Before Stunning Splashdown](https://science.slashdot.org/story/25/10/14/0123227/spacex-starship-hits-key-milestones-before-stunning-splashdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 01:24:00](https://soylentnews.org/article.pl?sid=25/10/12/1446251&amp;from=rss) - [When the US Gov&apos;t Built High Quality Housing for Workers...](https://soylentnews.org/article.pl?sid=25/10/12/1446251&amp;from=rss)
* [2025-10-14, 01:07:45](https://news.ycombinator.com/item?id=45575127) - [NVIDIA DGX Spark In-Depth Review: A New Standard for Local AI Inference](https://lmsys.org/blog/2025-10-13-nvidia-dgx-spark/)
* [2025-10-14, 00:45:00](https://tech.slashdot.org/story/25/10/13/2236211/major-us-online-retailers-remove-listings-for-millions-of-prohibited-chinese-electronics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Major US Online Retailers Remove Listings For Millions of Prohibited Chinese Electronics](https://tech.slashdot.org/story/25/10/13/2236211/major-us-online-retailers-remove-listings-for-millions-of-prohibited-chinese-electronics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 00:02:00](https://tech.slashdot.org/story/25/10/13/2230223/palmer-luckeys-anduril-launches-eagleeye-military-helmet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Palmer Luckey&apos;s Anduril Launches EagleEye Military Helmet](https://tech.slashdot.org/story/25/10/13/2230223/palmer-luckeys-anduril-launches-eagleeye-military-helmet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 23:21:23](https://news.ycombinator.com/item?id=45574393) - [DDoS Botnet Aisuru Blankets US ISPs in Record DDoS](https://krebsonsecurity.com/2025/10/ddos-botnet-aisuru-blankets-us-isps-in-record-ddos/)
* [2025-10-13, 23:20:00](https://news.slashdot.org/story/25/10/13/2151251/britain-issues-first-online-safety-fine-to-us-website-4chan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Britain Issues First Online Safety Fine To US Website 4chan](https://news.slashdot.org/story/25/10/13/2151251/britain-issues-first-online-safety-fine-to-us-website-4chan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 23:02:06](https://news.ycombinator.com/item?id=45574247) - [Sony PlayStation 2 fixing frenzy](https://retrohax.net/sony-playstation-2-fixing-frenzy/)
* [2025-10-13, 22:40:00](https://tech.slashdot.org/story/25/10/13/2130203/googles-nano-banana-ai-image-editing-is-coming-to-search-notebooklm-and-photos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Nano Banana AI-Image Editing Is Coming to Search, NotebookLM and Photos](https://tech.slashdot.org/story/25/10/13/2130203/googles-nano-banana-ai-image-editing-is-coming-to-search-notebooklm-and-photos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 22:38:51](https://lobste.rs/s/wvpc6s/nitro_tiny_flexible_init_system_process) - [nitro: tiny but flexible init system and process supervisor](https://github.com/leahneukirchen/nitro)
* [2025-10-13, 22:00:00](https://yro.slashdot.org/story/25/10/13/2121258/dutch-government-takes-control-of-china-owned-chipmaker-nexperia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dutch Government Takes Control of China-Owned Chipmaker Nexperia](https://yro.slashdot.org/story/25/10/13/2121258/dutch-government-takes-control-of-china-owned-chipmaker-nexperia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 21:52:20](https://lobste.rs/s/evbrsw/avian_physics_0_4) - [Avian Physics 0.4](https://joonaa.dev/blog/09/avian-0-4)
* [2025-10-13, 21:20:00](https://tech.slashdot.org/story/25/10/13/2115229/software-update-bricks-some-jeep-4xe-hybrids-over-the-weekend?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Software Update Bricks Some Jeep 4xe Hybrids Over the Weekend](https://tech.slashdot.org/story/25/10/13/2115229/software-update-bricks-some-jeep-4xe-hybrids-over-the-weekend?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 20:41:00](https://soylentnews.org/article.pl?sid=25/10/12/1442253&amp;from=rss) - [What Past Education Tech Failures Can Teach Us About the Future of AI in Schools](https://soylentnews.org/article.pl?sid=25/10/12/1442253&amp;from=rss)
* [2025-10-13, 20:09:29](https://lobste.rs/s/hwwsxh/zoo_array_languages) - [zoo of array languages](https://ktye.github.io/)
* [2025-10-13, 19:39:14](https://news.ycombinator.com/item?id=45572478) - [LLMs are getting better at character-level text manipulation](https://blog.burkert.me/posts/llm_evolution_character_manipulation/)
* [2025-10-13, 19:33:00](https://tech.slashdot.org/story/25/10/13/1933213/carmakers-chose-to-cheat-to-sell-cars-rather-than-comply-with-emissions-law-dieselgate-trial-told?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Carmakers Chose To Cheat To Sell Cars Rather Than Comply With Emissions Law, &apos;Dieselgate&apos; Trial Told](https://tech.slashdot.org/story/25/10/13/1933213/carmakers-chose-to-cheat-to-sell-cars-rather-than-comply-with-emissions-law-dieselgate-trial-told?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 18:37:34](https://news.ycombinator.com/item?id=45571822) - [Strudel REPL – a music live coding environment living in the browser](https://strudel.cc)
* [2025-10-13, 18:23:15](https://news.ycombinator.com/item?id=45571688) - [Modern iOS Security Features – A Deep Dive into SPTM, TXM, and Exclaves](https://arxiv.org/abs/2510.09272)
* [2025-10-13, 18:13:00](https://mobile.slashdot.org/story/25/10/13/1813236/tp-link-makes-history-with-first-successful-wi-fi-8-connection?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TP-Link Makes History With First Successful Wi-Fi 8 Connection](https://mobile.slashdot.org/story/25/10/13/1813236/tp-link-makes-history-with-first-successful-wi-fi-8-connection?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 17:24:51](https://news.ycombinator.com/item?id=45570973) - [America&apos;s future could hinge on whether AI slightly disappoints](https://www.noahpinion.blog/p/americas-future-could-hinge-on-whether)
* [2025-10-13, 17:22:00](https://slashdot.org/story/25/10/13/1719227/china-is-shipping-more-open-ai-models-than-us-rivals-as-tech-competition-shifts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Is Shipping More Open AI Models Than US Rivals as Tech Competition Shifts](https://slashdot.org/story/25/10/13/1719227/china-is-shipping-more-open-ai-models-than-us-rivals-as-tech-competition-shifts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 16:40:00](https://news.slashdot.org/story/25/10/13/1617250/three-new-california-laws-target-tech-companies-interactions-with-children?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Three New California Laws Target Tech Companies&apos; Interactions with Children](https://news.slashdot.org/story/25/10/13/1617250/three-new-california-laws-target-tech-companies-interactions-with-children?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 16:01:00](https://tech.slashdot.org/story/25/10/13/1421258/does-the-internet-have-a-philly-accent-why-too-much-time-online-can-make-you-culturally-philadelphian?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Does the Internet Have a Philly Accent? Why Too Much Time Online Can Make You &apos;Culturally Philadelphian.&apos;](https://tech.slashdot.org/story/25/10/13/1421258/does-the-internet-have-a-philly-accent-why-too-much-time-online-can-make-you-culturally-philadelphian?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 15:58:00](https://soylentnews.org/article.pl?sid=25/10/12/1437218&amp;from=rss) - [Nuclear Bombs on Drones: The Next Arms Race That Has Experts &apos;Very Concerned&apos;](https://soylentnews.org/article.pl?sid=25/10/12/1437218&amp;from=rss)
* [2025-10-13, 15:22:47](https://news.ycombinator.com/item?id=45569350) - [NanoChat – The best ChatGPT that $100 can buy](https://github.com/karpathy/nanochat)
* [2025-10-13, 15:22:00](https://news.slashdot.org/story/25/10/13/1340224/earths-climate-has-passed-its-first-irreversible-tipping-point-and-entered-a-new-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Earth&apos;s Climate Has Passed Its First Irreversible Tipping Point and Entered a &apos;New Reality&apos;](https://news.slashdot.org/story/25/10/13/1340224/earths-climate-has-passed-its-first-irreversible-tipping-point-and-entered-a-new-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 15:07:52](https://lobste.rs/s/hfdtjm/what_dynamic_typing_is_for) - [What Dynamic Typing Is For](https://unplannedobsolescence.com/blog/what-dynamic-typing-is-for/)
* [2025-10-13, 14:48:47](https://news.ycombinator.com/item?id=45568915) - [America is getting an AI gold rush instead of a factory boom](https://www.washingtonpost.com/business/2025/10/13/manufacturing-artificial-intelligence/)
* [2025-10-13, 14:28:25](https://news.ycombinator.com/item?id=45568700) - [Software update bricks some Jeep 4xe hybrids over the weekend](https://arstechnica.com/cars/2025/10/software-update-bricks-some-jeep-4xe-hybrids-over-the-weekend/)
* [2025-10-13, 14:20:33](https://news.ycombinator.com/item?id=45568613) - [Smartphones and being present](https://herman.bearblog.dev/being-present/)
* [2025-10-13, 13:25:44](https://lobste.rs/s/1clwpi/peach_meme_on_crts_pixels_signal_quality) - [The Peach meme: On CRTs, pixels and signal quality (again)](https://www.datagubbe.se/crt2/)
* [2025-10-13, 13:02:20](https://news.ycombinator.com/item?id=45567877) - [No science, no startups: The innovation engine we&apos;re switching off](https://steveblank.com/2025/10/13/no-science-no-startups-the-unseen-engine-were-switching-off/)
* [2025-10-13, 12:47:01](https://lobste.rs/s/wqhj5b/octothorpes) - [Octothorpes](https://octothorp.es)
* [2025-10-13, 12:46:52](https://news.ycombinator.com/item?id=45567770) - [Show HN: SQLite Online – 11 years of solo development, 11K daily users](https://sqliteonline.com/)
* [2025-10-13, 12:09:59](https://lobste.rs/s/7fz2mo/we_need_at_least_ergonomic_explicit) - [We need (at least) ergonomic, explicit handles](https://smallcultfollowing.com/babysteps/blog/2025/10/13/ergonomic-explicit-handles/)
* [2025-10-13, 11:45:00](https://lobste.rs/s/bf7uhe/free_software_hasn_t_won) - [Free Software hasn&apos;t won](https://dorotac.eu/posts/fosswon/)
* [2025-10-13, 11:37:55](https://news.ycombinator.com/item?id=45567241) - [Why did containers happen?](https://buttondown.com/justincormack/archive/ignore-previous-directions-8-devopsdays/)
* [2025-10-13, 11:36:36](https://lobste.rs/s/4zj64w/why_did_containers_happen_view_from_ten) - [Why did containers happen? A view from ten years in the trenches by Docker&apos;s former CTO Justin Cormack](https://buttondown.com/justincormack/archive/ignore-previous-directions-8-devopsdays/)
* [2025-10-13, 11:12:00](https://soylentnews.org/article.pl?sid=25/10/12/1414249&amp;from=rss) - [Here&apos;s How to See Two Newly Discovered Comets This Month](https://soylentnews.org/article.pl?sid=25/10/12/1414249&amp;from=rss)
* [2025-10-13, 10:28:47](https://lobste.rs/s/tgfo9p/thoughts_on_remix_3) - [Thoughts on Remix 3](https://frantic.im/remix-3/)
* [2025-10-13, 10:20:43](https://lobste.rs/s/1lmxut/revisiting_sailfishos) - [Revisiting SailfishOS](https://geekyschmidt.com/post/sailfishos-sept25/)
* [2025-10-13, 10:03:11](https://news.ycombinator.com/item?id=45566644) - [Dutch government takes control of Chinese-owned chipmaker Nexperia](https://www.cnbc.com/2025/10/13/dutch-government-takes-control-of-chinese-owned-chipmaker-nexperia.html)
* [2025-10-13, 09:25:26](https://lobste.rs/s/do4tt3/smolbsd_build_your_own_minimal_bsd_system) - [smolBSD — build your own minimal BSD system](https://smolbsd.org)
* [2025-10-13, 08:45:49](https://news.ycombinator.com/item?id=45566198) - [Abstraction, not syntax](https://ruudvanasseldonk.com/2025/abstraction-not-syntax)
* [2025-10-13, 08:17:29](https://lobste.rs/s/4y8nzp/strudel_repl_music_live_coding) - [Strudel REPL - a music live coding environment living in the browser](https://strudel.cc)
* [2025-10-13, 06:32:41](https://lobste.rs/s/jr6zfo/critical_github_copilot_vulnerability) - [Critical GitHub Copilot Vulnerability Leaks Private Source Code](https://www.legitsecurity.com/blog/camoleak-critical-github-copilot-vulnerability-leaks-private-source-code)
* [2025-10-13, 06:24:00](https://soylentnews.org/article.pl?sid=25/10/12/1411214&amp;from=rss) - [Companies Are Making the Same Mistake With AI That Tesla Made With Robots](https://soylentnews.org/article.pl?sid=25/10/12/1411214&amp;from=rss)
* [2025-10-13, 05:51:08](https://lobste.rs/s/7q2c0r/jit_so_you_want_be_faster_than_interpreter) - [JIT: so you want to be faster than an interpreter on modern CPUs…](https://www.pinaraf.info/2025/10/jit-so-you-want-to-be-faster-than-an-interpreter-on-modern-cpus/)
* [2025-10-13, 04:06:29](https://lobste.rs/s/8dsiow/wireguard_fpga) - [Wireguard FPGA](https://github.com/chili-chips-ba/wireguard-fpga)
* [2025-10-13, 01:39:00](https://soylentnews.org/article.pl?sid=25/10/12/141230&amp;from=rss) - [Using a Litter Box to Determine a Cat&apos;s Health](https://soylentnews.org/article.pl?sid=25/10/12/141230&amp;from=rss)
* [2025-10-13, 00:07:56](https://lobste.rs/s/ngjqsm/nsa_ietf_can_attacker_simply_purchase) - [NSA and IETF: Can an attacker simply purchase standardization of weakened cryptography?](https://blog.cr.yp.to/20251004-weakened.html)
* [2025-10-12, 20:50:00](https://soylentnews.org/article.pl?sid=25/10/12/0052201&amp;from=rss) - [The FCC Will Allow ABC, CBS, FOX, &amp; NBC TV Stations Decide When Switch to ATSC 3.0](https://soylentnews.org/article.pl?sid=25/10/12/0052201&amp;from=rss)
* [2025-10-12, 19:08:41](https://news.ycombinator.com/item?id=45560863) - [JIT: So you want to be faster than an interpreter on modern CPUs](https://www.pinaraf.info/2025/10/jit-so-you-want-to-be-faster-than-an-interpreter-on-modern-cpus/)
* [2025-10-12, 16:59:46](https://lobste.rs/s/l6yqm8/country_broke_kotlin) - [The Country That Broke Kotlin](https://sam-cooper.medium.com/the-country-that-broke-kotlin-84bdd0afb237)
* [2025-10-12, 16:05:00](https://soylentnews.org/article.pl?sid=25/10/11/148201&amp;from=rss) - [“Like Putting on Glasses for the First Time”—How AI Improves Earthquake Detection](https://soylentnews.org/article.pl?sid=25/10/11/148201&amp;from=rss)
* [2025-10-12, 11:20:00](https://soylentnews.org/article.pl?sid=25/10/11/143225&amp;from=rss) - [Starlink Burns Up One to Two Satellites a Day](https://soylentnews.org/article.pl?sid=25/10/11/143225&amp;from=rss)
* [2025-10-12, 06:37:00](https://soylentnews.org/article.pl?sid=25/10/11/1348219&amp;from=rss) - [Discord Customer Service Data Breached; Government-ID Images, and User Details Stolen](https://soylentnews.org/article.pl?sid=25/10/11/1348219&amp;from=rss)
* [2025-10-12, 01:47:00](https://soylentnews.org/article.pl?sid=25/10/11/1340244&amp;from=rss) - [Covert Eavesdropping Through Computer Mice - the \&quot;Mic-E-Mouse\&quot;](https://soylentnews.org/article.pl?sid=25/10/11/1340244&amp;from=rss)
* [2025-10-11, 20:58:00](https://soylentnews.org/article.pl?sid=25/10/10/2354242&amp;from=rss) - [The Real (Economic) AI Apocalypse is Nigh](https://soylentnews.org/article.pl?sid=25/10/10/2354242&amp;from=rss)
* [2025-10-11, 16:13:00](https://soylentnews.org/article.pl?sid=25/10/10/2347235&amp;from=rss) - [MIT Rejects Trump&apos;s “Compact for Academic Excellence in Higher Education\&quot;](https://soylentnews.org/article.pl?sid=25/10/10/2347235&amp;from=rss)
* [2025-10-11, 11:28:00](https://soylentnews.org/article.pl?sid=25/10/10/1114256&amp;from=rss) - [Baseload Power is Functionally Extinct](https://soylentnews.org/article.pl?sid=25/10/10/1114256&amp;from=rss)
* [2025-10-11, 06:42:00](https://soylentnews.org/article.pl?sid=25/10/10/113245&amp;from=rss) - [2024 Computer History Museum Interview With Ken Thompson](https://soylentnews.org/article.pl?sid=25/10/10/113245&amp;from=rss)
* [2025-10-11, 02:01:00](https://soylentnews.org/article.pl?sid=25/10/10/110237&amp;from=rss) - [The Great Software Quality Collapse: How We Normalized Catastrophe](https://soylentnews.org/article.pl?sid=25/10/10/110237&amp;from=rss)
* [2025-10-10, 21:14:00](https://soylentnews.org/article.pl?sid=25/10/10/1055230&amp;from=rss) - [Qualcomm Buys Arduino](https://soylentnews.org/article.pl?sid=25/10/10/1055230&amp;from=rss)
* [2025-10-10, 16:31:00](https://soylentnews.org/article.pl?sid=25/10/10/003237&amp;from=rss) - [Ocean CO2 Becomes Sustainable Plastic, Thanks to Modified Microbes](https://soylentnews.org/article.pl?sid=25/10/10/003237&amp;from=rss)
* [2025-10-10, 13:13:58](https://news.ycombinator.com/item?id=45538628) - [vali, a C library for Varlink](https://emersion.fr/blog/2025/announcing-vali/)
* [2025-10-10, 11:47:00](https://soylentnews.org/article.pl?sid=25/10/10/000255&amp;from=rss) - [The Transistor Was Patented 75 Years Ago Today](https://soylentnews.org/article.pl?sid=25/10/10/000255&amp;from=rss)
* [2025-10-10, 11:11:00](https://soylentnews.org/breakingnews/article.pl?sid=25/10/10/1053212&amp;from=rss) - [Nobel Prizes 2025 - Venezuelan Opposition Leader María Corina Machado Awarded Peace Prize](https://soylentnews.org/breakingnews/article.pl?sid=25/10/10/1053212&amp;from=rss)
* [2025-10-10, 07:03:00](https://soylentnews.org/article.pl?sid=25/10/09/2356204&amp;from=rss) - [Windows 7 Usage Jumps as Users Refuse to Upgrade to Windows 11 in Wake of Windows 10 End of Support](https://soylentnews.org/article.pl?sid=25/10/09/2356204&amp;from=rss)
* [2025-10-10, 02:21:00](https://soylentnews.org/article.pl?sid=25/10/07/2334243&amp;from=rss) - [Are VPNs Under Attack? an Anti-Censorship Group Speaks Out](https://soylentnews.org/article.pl?sid=25/10/07/2334243&amp;from=rss)
