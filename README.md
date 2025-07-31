# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Developments

* [Meta Pirated and Seeded Porn for Years to Train AI, Lawsuit Says](https://soylentnews.org/article.pl?sid=25/07/30/0143216&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/07/30/0143216&from=rss))

* [A Hitchhiker's Guide to the AI Bubble](https://fluxus.io/article/a-hitchhikers-guide-to-the-ai-bubble) ([comments](https://news.ycombinator.com/item?id=44750121))

* [Launch HN: Gecko Security (YC F24) – AI That Finds Vulnerabilities in Code](https://news.ycombinator.com/item?id=44747204) ([comments](https://news.ycombinator.com/item?id=44747204))

* [Releasing open weights for FLUX.1 Krea](https://www.krea.ai/blog/flux-krea-open-source-release) ([comments](https://news.ycombinator.com/item?id=44745555))

* [Gemini Embedding: Powering RAG and context engineering](https://developers.googleblog.com/en/gemini-embedding-powering-rag-context-engineering/) ([comments](https://news.ycombinator.com/item?id=44747457))

## Economic and Regulatory Shifts

* [Trump Suspends Trade Loophole For Cheap Online Retailers Globally](https://news.slashdot.org/story/25/07/31/2028246/trump-suspends-trade-loophole-for-cheap-online-retailers-globally?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/07/31/2028246/trump-suspends-trade-loophole-for-cheap-online-retailers-globally?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Australia Widens Teen Social Media Ban To YouTube, Scraps Exemption](https://yro.slashdot.org/story/25/07/31/0037258/australia-widens-teen-social-media-ban-to-youtube-scraps-exemption?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/07/31/0037258/australia-widens-teen-social-media-ban-to-youtube-scraps-exemption?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Google Loses Epic Games Appeal, Must Open App Store To Rivals](https://tech.slashdot.org/story/25/07/31/1846249/google-loses-epic-games-appeal-must-open-app-store-to-rivals?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/07/31/1846249/google-loses-epic-games-appeal-must-open-app-store-to-rivals?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Notable Scientific and Engineering Advances

* [Kaleidos – A portable nuclear microreactor that replaces diesel generators](https://radiantnuclear.com/) ([comments](https://news.ycombinator.com/item?id=44749438))

* [World's 'Oldest Baby' Born From Embryo Frozen in 1994](https://science.slashdot.org/story/25/07/31/1812236/worlds-oldest-baby-born-from-embryo-frozen-in-1994?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/07/31/1812236/worlds-oldest-baby-born-from-embryo-frozen-in-1994?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Astronomical Telescope “Hadley” – an easy assembly, high performance Newtonian](https://www.printables.com/model/224383-astronomical-telescope-hadley-an-easy-assembly-hig) ([comments](https://news.ycombinator.com/item?id=44748634))

* [Physicists Disagree Wildly on What Quantum Mechanics Says About Reality](https://science.slashdot.org/story/25/07/31/146255/physicists-disagree-wildly-on-what-quantum-mechanics-says-about-reality?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/07/31/146255/physicists-disagree-wildly-on-what-quantum-mechanics-says-about-reality?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Cybersecurity and Software Innovations

* [CISA Open-Sources Thorium Platform For Malware, Forensic Analysis](https://it.slashdot.org/story/25/07/31/2033245/cisa-open-sources-thorium-platform-for-malware-forensic-analysis?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://it.slashdot.org/story/25/07/31/2033245/cisa-open-sources-thorium-platform-for-malware-forensic-analysis?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [PyPI Phishing Attack: Incident Report](https://blog.pypi.org/posts/2025-07-31-incident-report-phishing-attack/) ([comments](https://lobste.rs/s/swmezp/pypi_phishing_attack_incident_report))

* [Chrome Speculation Rules API allows the browser to preload and prerender](https://www.docuseal.com/blog/make-any-website-load-faster-with-6-lines-html) ([comments](https://news.ycombinator.com/item?id=44747241))

* [Secure boot certificate rollover is real but probably won't hurt you](https://mjg59.dreamwidth.org/72892.html) ([comments](https://news.ycombinator.com/item?id=44747843))

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

* [2025-07-31, 21:28:07](https://news.ycombinator.com/item?id=44750416) - [The Anti-Abundance Critique on Housing Is Dead Wrong](https://www.derekthompson.org/p/the-anti-abundance-critique-on-housing)
* [2025-07-31, 21:20:00](https://it.slashdot.org/story/25/07/31/2033245/cisa-open-sources-thorium-platform-for-malware-forensic-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CISA Open-Sources Thorium Platform For Malware, Forensic Analysis](https://it.slashdot.org/story/25/07/31/2033245/cisa-open-sources-thorium-platform-for-malware-forensic-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 21:10:00](https://soylentnews.org/article.pl?sid=25/07/30/0143216&amp;from=rss) - [Meta Pirated and Seeded Porn for Years to Train AI, Lawsuit Says](https://soylentnews.org/article.pl?sid=25/07/30/0143216&amp;from=rss)
* [2025-07-31, 21:04:23](https://news.ycombinator.com/item?id=44750121) - [A Hitchhiker&apos;s Guide to the AI Bubble](https://fluxus.io/article/a-hitchhikers-guide-to-the-ai-bubble)
* [2025-07-31, 21:00:00](https://apple.slashdot.org/story/25/07/31/2045234/apple-reports-biggest-revenue-growth-since-december-2021?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Reports Biggest Revenue Growth Since December 2021](https://apple.slashdot.org/story/25/07/31/2045234/apple-reports-biggest-revenue-growth-since-december-2021?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 20:40:00](https://news.slashdot.org/story/25/07/31/2028246/trump-suspends-trade-loophole-for-cheap-online-retailers-globally?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Suspends Trade Loophole For Cheap Online Retailers Globally](https://news.slashdot.org/story/25/07/31/2028246/trump-suspends-trade-loophole-for-cheap-online-retailers-globally?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 20:29:55](https://news.ycombinator.com/item?id=44749772) - [Denver rent is back to 2022 prices after 20k new units hit the market](https://denverite.com/2025/07/25/denver-rent-prices-drop-q2/)
* [2025-07-31, 20:00:00](https://apple.slashdot.org/story/25/07/31/193224/apple-is-selling-ipad-repair-parts-for-astronomical-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Is Selling iPad Repair Parts for Astronomical Prices](https://apple.slashdot.org/story/25/07/31/193224/apple-is-selling-ipad-repair-parts-for-astronomical-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 19:54:42](https://news.ycombinator.com/item?id=44749438) - [Kaleidos – A portable nuclear microreactor that replaces diesel generators](https://radiantnuclear.com/)
* [2025-07-31, 19:38:53](https://lobste.rs/s/t74b6g/community_contributions) - [Community Contributions](https://philippemnoel.posthaven.com/community-contributions)
* [2025-07-31, 19:26:42](https://lobste.rs/s/yuxxlr/go_assembly_mutation_testing) - [Go Assembly Mutation Testing](https://words.filippo.io/assembly-mutation/)
* [2025-07-31, 19:22:00](https://tech.slashdot.org/story/25/07/31/1846249/google-loses-epic-games-appeal-must-open-app-store-to-rivals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Loses Epic Games Appeal, Must Open App Store To Rivals](https://tech.slashdot.org/story/25/07/31/1846249/google-loses-epic-games-appeal-must-open-app-store-to-rivals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 19:00:58](https://news.ycombinator.com/item?id=44748934) - [Slow](https://michaelnotebook.com/slow/index.html)
* [2025-07-31, 18:41:14](https://lobste.rs/s/swmezp/pypi_phishing_attack_incident_report) - [PyPI Phishing Attack: Incident Report](https://blog.pypi.org/posts/2025-07-31-incident-report-phishing-attack/)
* [2025-07-31, 18:40:00](https://science.slashdot.org/story/25/07/31/1812236/worlds-oldest-baby-born-from-embryo-frozen-in-1994?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s &apos;Oldest Baby&apos; Born From Embryo Frozen in 1994](https://science.slashdot.org/story/25/07/31/1812236/worlds-oldest-baby-born-from-embryo-frozen-in-1994?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 18:31:10](https://news.ycombinator.com/item?id=44748634) - [Astronomical Telescope “Hadley” – an easy assembly, high performance Newtonian](https://www.printables.com/model/224383-astronomical-telescope-hadley-an-easy-assembly-hig)
* [2025-07-31, 18:24:13](https://lobste.rs/s/l82tbf/network_leaderless_replication_for) - [In-Network Leaderless Replication for Distributed Data Stores](https://www.vldb.org/pvldb/vol15/p1337-lee.pdf)
* [2025-07-31, 18:10:02](https://lobste.rs/s/sqthxf/secure_boot_certificate_rollover_is_real) - [Secure boot certificate rollover is real but probably won&apos;t hurt you](https://mjg59.dreamwidth.org/72892.html)
* [2025-07-31, 18:00:00](https://it.slashdot.org/story/25/07/31/1641202/microsoft-ends-tradition-of-naming-competitors-in-regulatory-filings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Ends Tradition of Naming Competitors in Regulatory Filings](https://it.slashdot.org/story/25/07/31/1641202/microsoft-ends-tradition-of-naming-competitors-in-regulatory-filings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 17:39:38](https://lobste.rs/s/tuwdze/schematra_sinatra_inspired_chicken_web) - [Schematra: Sinatra inspired Chicken web framework](https://github.com/rolandoam/schematra)
* [2025-07-31, 17:21:07](https://news.ycombinator.com/item?id=44747843) - [Secure boot certificate rollover is real but probably won&apos;t hurt you](https://mjg59.dreamwidth.org/72892.html)
* [2025-07-31, 17:20:00](https://news.slashdot.org/story/25/07/31/1652242/internal-microsoft-documents-detail-pay-scales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internal Microsoft Documents Detail Pay Scales](https://news.slashdot.org/story/25/07/31/1652242/internal-microsoft-documents-detail-pay-scales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 17:01:37](https://news.ycombinator.com/item?id=44747634) - [AI is a floor raiser, not a ceiling raiser](https://elroy.bot/blog/2025/07/29/ai-is-a-floor-raiser-not-a-ceiling-raiser.html)
* [2025-07-31, 17:00:56](https://news.ycombinator.com/item?id=44747625) - [Kaizen (YC X25) is hiring engineers to build browser agents that work](https://www.kaizenautomation.com/jobs)
* [2025-07-31, 16:47:54](https://news.ycombinator.com/item?id=44747457) - [Gemini Embedding: Powering RAG and context engineering](https://developers.googleblog.com/en/gemini-embedding-powering-rag-context-engineering/)
* [2025-07-31, 16:40:00](https://yro.slashdot.org/story/25/07/31/1638229/sony-is-suing-tencent-over-shameless-horizon-knock-off-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Is Suing Tencent Over Shameless Horizon Knock-off Game](https://yro.slashdot.org/story/25/07/31/1638229/sony-is-suing-tencent-over-shameless-horizon-knock-off-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 16:29:00](https://soylentnews.org/article.pl?sid=25/07/30/0133228&amp;from=rss) - [Why We Need a Right Not to be Manipulated](https://soylentnews.org/article.pl?sid=25/07/30/0133228&amp;from=rss)
* [2025-07-31, 16:27:10](https://news.ycombinator.com/item?id=44747241) - [The Chrome Speculation Rules API allows the browser to preload and prerender](https://www.docuseal.com/blog/make-any-website-load-faster-with-6-lines-html)
* [2025-07-31, 16:25:51](https://news.ycombinator.com/item?id=44747229) - [Show HN: Mcp-use – Connect any LLM to any MCP](https://github.com/mcp-use/mcp-use)
* [2025-07-31, 16:23:09](https://news.ycombinator.com/item?id=44747204) - [Launch HN: Gecko Security (YC F24) – AI That Finds Vulnerabilities in Code](https://news.ycombinator.com/item?id=44747204)
* [2025-07-31, 16:17:25](https://lobste.rs/s/hzr1ke/smallest_embeddable_scripting_language) - [The smallest embeddable scripting language, part 1](https://log.schemescape.com/posts/static-site-generators/smallest-scripting-language.html)
* [2025-07-31, 16:00:00](https://news.slashdot.org/story/25/07/31/1553241/uk-competition-authority-rains-on-microsoft-and-amazon-cloud-parade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Competition Authority Rains on Microsoft and Amazon Cloud Parade](https://news.slashdot.org/story/25/07/31/1553241/uk-competition-authority-rains-on-microsoft-and-amazon-cloud-parade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 15:57:32](https://news.ycombinator.com/item?id=44746948) - [QUIC for the kernel](https://lwn.net/Articles/1029851/)
* [2025-07-31, 15:28:54](https://lobste.rs/s/ogv8ay/quic_for_kernel) - [QUIC for the kernel](https://lwn.net/Articles/1029851/)
* [2025-07-31, 15:24:05](https://news.ycombinator.com/item?id=44746603) - [Ubiquiti launches UniFi OS Server for self-hosting](https://lazyadmin.nl/home-network/unifi-os-server/)
* [2025-07-31, 15:22:00](https://slashdot.org/story/25/07/31/157224/china-claims-nvidia-built-backdoor-into-h20-chip-designed-for-chinese-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Claims Nvidia Built Backdoor Into H20 Chip Designed For Chinese Market](https://slashdot.org/story/25/07/31/157224/china-claims-nvidia-built-backdoor-into-h20-chip-designed-for-chinese-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 14:47:25](https://lobste.rs/s/43hw9a/math_is_haunted) - [The Math Is Haunted](https://overreacted.io/the-math-is-haunted/)
* [2025-07-31, 14:40:00](https://slashdot.org/story/25/07/31/1439206/microsoft-joins-4-trillion-club?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Joins $4 Trillion Club](https://slashdot.org/story/25/07/31/1439206/microsoft-joins-4-trillion-club?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 14:37:10](https://lobste.rs/s/e03oa9/what_is_gvisor) - [What is gVisor?](https://blog.yelinaung.com/posts/gvisor/)
* [2025-07-31, 14:23:40](https://news.ycombinator.com/item?id=44745984) - [Carbon Language: An experimental successor to C++](https://docs.carbon-lang.dev/)
* [2025-07-31, 14:16:07](https://news.ycombinator.com/item?id=44745897) - [MacBook Pro Insomnia](https://manuel.bernhardt.io/posts/2025-07-24-macbook-pro-insomnia)
* [2025-07-31, 14:08:33](https://news.ycombinator.com/item?id=44745820) - [Show HN: AgentMail – Email infra for AI agents](https://chat.agentmail.to/)
* [2025-07-31, 14:06:31](https://lobste.rs/s/gl3oty/local_first_search_tale_frustrated) - [Local-first search. A tale of frustrated dreams, utopian user experiences and calculated tradeoffs](https://fika.bar/paoramen/local-first-search-01K1B0WM1X4P5SV5QAES0Z5N75)
* [2025-07-31, 14:06:00](https://science.slashdot.org/story/25/07/31/146255/physicists-disagree-wildly-on-what-quantum-mechanics-says-about-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Physicists Disagree Wildly on What Quantum Mechanics Says About Reality](https://science.slashdot.org/story/25/07/31/146255/physicists-disagree-wildly-on-what-quantum-mechanics-says-about-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 13:41:45](https://news.ycombinator.com/item?id=44745555) - [Releasing open weights for FLUX.1 Krea](https://www.krea.ai/blog/flux-krea-open-source-release)
* [2025-07-31, 13:15:00](https://developers.slashdot.org/story/25/07/31/1314207/stack-overflow-data-reveals-the-hidden-productivity-tax-of-almost-right-ai-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stack Overflow Data Reveals the Hidden Productivity Tax of &apos;Almost Right&apos; AI Code](https://developers.slashdot.org/story/25/07/31/1314207/stack-overflow-data-reveals-the-hidden-productivity-tax-of-almost-right-ai-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 12:32:42](https://lobste.rs/s/qwaniu/vanity_import_paths_go_2019) - [Vanity import paths in Go (2019)](https://sagikazarmark.hu/blog/vanity-import-paths-in-go/)
* [2025-07-31, 12:06:32](https://lobste.rs/s/r3k5nr/search_riches_hackers_plant_4g_enabled) - [In search of riches, hackers plant 4G-enabled Raspberry Pi in bank network](https://arstechnica.com/security/2025/07/in-search-of-riches-hackers-plant-4g-enabled-raspberry-pi-in-bank-network/)
* [2025-07-31, 11:54:22](https://news.ycombinator.com/item?id=44744715) - [Many countries that said no to ChatControl in 2024 are now undecided](https://digitalcourage.social/@echo_pbreyer/114946559233051667)
* [2025-07-31, 11:45:00](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss) - [We Are Undergoing Unprecedented Loss of Freshwater Across the Planet](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss)
* [2025-07-31, 11:37:22](https://news.ycombinator.com/item?id=44744578) - [Introduction to Computer Music](https://cmtext.com/)
* [2025-07-31, 11:19:54](https://news.ycombinator.com/item?id=44744454) - [How was the Universal Pictures 1936 opening logo created?](https://movies.stackexchange.com/questions/128020/how-was-the-universal-pictures-1936-opening-logo-created)
* [2025-07-31, 10:56:21](https://news.ycombinator.com/item?id=44744324) - [I tried Servo](https://www.spacebar.news/servo-undercover-web-browser-engine/)
* [2025-07-31, 10:51:26](https://lobste.rs/s/yg4vde/sync_primitives_are_functionally) - [Sync primitives are Functionally Complete](http://kprotty.me/2025/07/31/sync-primitives-are-functionally-complete.html)
* [2025-07-31, 10:00:00](https://yro.slashdot.org/story/25/07/31/0037258/australia-widens-teen-social-media-ban-to-youtube-scraps-exemption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia Widens Teen Social Media Ban To YouTube, Scraps Exemption](https://yro.slashdot.org/story/25/07/31/0037258/australia-widens-teen-social-media-ban-to-youtube-scraps-exemption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 08:02:05](https://lobste.rs/s/olb8w6/mounting_atmosphere) - [Mounting The Atmosphere](https://oppi.li/posts/mounting_the_atmosphere/)
* [2025-07-31, 07:01:00](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss) - [Manuel Moreale on Why Blogs Matter](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss)
* [2025-07-31, 02:17:00](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss) - [FreeBSD 15.0’S Installer to Gain Option to Install a Full KDE Plasma Desktop Environment](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss)
* [2025-07-31, 01:36:12](https://lobste.rs/s/hpmmo4/build_your_own_minisforum_n5_inspired) - [Build Your Own Minisforum N5 Inspired Mini NAS: A Comprehensive Guide](https://jackharvest.com/index.php/2025/07/27/build-your-own-minisforum-n5-inspired-mini-nas-a-comprehensive-guide/)
* [2025-07-30, 23:50:20](https://lobste.rs/s/gmsuvq/go_s_race_detector_has_mutex_blind_spot) - [Go&apos;s race detector has a mutex blind spot](https://doublefree.dev/go-race-mutex-blindspot/)
* [2025-07-30, 22:51:20](https://lobste.rs/s/jkbsfi/i_built_my_blog_with_c_preprocessor_macros) - [I built my blog with C preprocessor macros](https://wheybags.com/blog/macroblog.html)
* [2025-07-30, 21:53:38](https://lobste.rs/s/4hwugo/books_about_lisp_s_beauty) - [Books about Lisp&apos;s \&quot;beauty\&quot;?](https://lobste.rs/s/4hwugo/books_about_lisp_s_beauty)
* [2025-07-30, 21:32:00](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss) - [OpenAI’s ChatGPT Agent Casually Clicks Through “I am not a robot” Verification Test](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss)
* [2025-07-30, 20:20:08](https://lobste.rs/s/ykjkon/hype_is_product) - [The Hype is the Product](https://rys.io/en/180.html)
* [2025-07-30, 18:58:16](https://lobste.rs/s/7nho3g/dive_into_open_chat_protocols) - [A Dive Into Open Chat Protocols](https://wiki.alopex.li/ADiveIntoOpenChat)
* [2025-07-30, 17:53:25](https://lobste.rs/s/gyzvmq/always_bet_on_text_2014) - [always bet on text (2014)](https://graydon2.dreamwidth.org/193447.html)
* [2025-07-30, 16:48:00](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss) - [NASA’s Webb Finds Possible &apos;Direct Collapse&apos; Black Hole](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss)
* [2025-07-30, 15:33:35](https://lobste.rs/s/oh2hzs/rfc_upstream_target_support_for_cheri) - [[RFC] Upstream target support for CHERI-enabled architectures](https://discourse.llvm.org/t/rfc-upstream-target-support-for-cheri-enabled-architectures/87623)
* [2025-07-30, 14:44:13](https://news.ycombinator.com/item?id=44734891) - [Show HN: Sourcebot – Self-hosted Perplexity for your codebase](https://github.com/sourcebot-dev/sourcebot/releases/tag/v4.6.0)
* [2025-07-30, 14:44:08](https://lobste.rs/s/mrzwqr/writing_memory_efficient_c_structs) - [Writing memory efficient C structs](https://tomscheers.github.io/2025/07/29/writing-memory-efficient-structs-post.html)
* [2025-07-30, 14:02:15](https://lobste.rs/s/zwbafr/you_are_bios_now_building_hypervisor_rust) - [You Are The BIOS Now: Building A Hypervisor In Rust With KVM](https://yeet.cx/blog/you-are-the-bios-now)
* [2025-07-30, 11:57:00](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss) - [EU-US Draft 15Pc Tariff Agreement Appears To Include Pharma, Chips](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss)
* [2025-07-30, 07:13:00](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss) - [China Advances Toward Tech Independence With New Homegrown 6nm Gaming And AI GPUs](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss)
* [2025-07-30, 02:32:00](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss) - [Nasa May Lose Close To 4,000 Employees After Latest Deferred Resignation Round](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss)
* [2025-07-29, 21:44:00](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss) - [Senator Demands Mandiant Hand Over Telco Salt Typhoon Probes](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss)
* [2025-07-29, 17:51:22](https://news.ycombinator.com/item?id=44726347) - [Programmers aren’t so humble anymore, maybe because nobody codes in Perl](https://www.wired.com/story/programmers-arent-humble-anymore-nobody-codes-in-perl/)
* [2025-07-29, 17:02:00](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss) - [Hacker Injects Malicious, Potentially Disk-Wiping Prompt Into Amazon&apos;s Ai Coding Assistant](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss)
* [2025-07-29, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss) - [Gold Can be Heated to 14 Times its Melting Point Without Melting](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss)
* [2025-07-29, 07:27:00](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss) - [Discovery Alert: Flaring Star, Toasted Planet](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss)
* [2025-07-29, 02:40:00](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss) - [Chinese Hackers Breached U.S. Army National Guard to Steal Network Configurations](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss)
* [2025-07-29, 02:15:36](https://news.ycombinator.com/item?id=44718211) - [Zig Profiling on Apple Silicon](https://blog.bugsiki.dev/posts/zig-profilers/)
* [2025-07-28, 22:00:00](https://soylentnews.org/article.pl?sid=25/07/26/1935251&amp;from=rss) - [As Site Blocking Is Increasing, European Commission Subtly Slaps Down Italy’s Piracy Shield](https://soylentnews.org/article.pl?sid=25/07/26/1935251&amp;from=rss)
* [2025-07-28, 17:11:00](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss) - [AMD CEO Says U.S.-Made TSMC Chips Are More Expensive, But Worth It](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss)
* [2025-07-28, 13:23:35](https://news.ycombinator.com/item?id=44710651) - [Face it: you&apos;re a crazy person](https://www.experimental-history.com/p/face-it-youre-a-crazy-person)
* [2025-07-28, 13:23:14](https://news.ycombinator.com/item?id=44710647) - [Ferrari Status](https://collabfund.com/blog/ferrari-status/)
* [2025-07-28, 12:30:00](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss) - [Inventor Claims Bleach Injections will Destroy Cancer Tumors](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss)
* [2025-07-28, 07:45:00](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss) - [Coding, Remote Work and Rehabilitation](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss)
* [2025-07-28, 02:58:00](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss) - [Google Sues Operators of 10-Million-Device Badbox 2.0 Botnet](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss)
* [2025-07-28, 00:19:37](https://news.ycombinator.com/item?id=44705960) - [I made a website that makes you cry](https://www.cryonceaweek.com)
* [2025-07-27, 22:15:00](https://soylentnews.org/article.pl?sid=25/07/26/1830254&amp;from=rss) - [The Cells That Breathe Two Ways](https://soylentnews.org/article.pl?sid=25/07/26/1830254&amp;from=rss)
* [2025-07-27, 17:37:00](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss) - [UK To Ban Making Ransomware Payments For Some Organizations](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss)
* [2025-07-27, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss) - [Japan Bets Big on Ultrathin, Ultralight Solar Panels](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss)
* [2025-07-27, 06:50:00](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss) - [WD Makes Click Of Death A Feature](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss)
* [2025-07-27, 02:06:00](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss) - [Social Media Is Dead – Here’s What Comes Next](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss)
