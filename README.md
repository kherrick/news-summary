# [News Summary](https://kherrick.github.io/news-summary/)

## Technology & Cybersecurity

* [PyPI Phishing Attack: Incident Report](https://blog.pypi.org/posts/2025-07-31-incident-report-phishing-attack/) - An investigation into a phishing attack against PyPI, exposing the nuances of cybersecurity threats and their implications. [Comments](https://lobste.rs/s/swmezp/pypi_phishing_attack_incident_report)

* [In-Network Leaderless Replication for Distributed Data Stores](https://www.vldb.org/pvldb/vol15/p1337-lee.pdf) - Research paper outlining a leaderless approach to distributed data store replication that could enhance efficiency. [Comments](https://lobste.rs/s/l82tbf/network_leaderless_replication_for)

* [Secure boot certificate rollover is real but probably won&apos;t hurt you](https://mjg59.dreamwidth.org/72892.html) - Analysis of secure boot certificate rollover and its impact on system integrity. [Comments](https://lobste.rs/s/sqthxf/secure_boot_certificate_rollover_is_real)

* [How to Scan Force Pushed Commits for Secrets](https://trufflesecurity.com/blog/how-to-scan-force-pushed-commits-for-secrets) - A guide on securing software by detecting secrets in forced-pushed commits. [Comments](https://news.ycombinator.com/item?id=44747728)

* [Hacker Injects Malicious, Potentially Disk-Wiping Prompt Into Amazon&apos;s AI Coding Assistant](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss) - Explores a cybersecurity incident targeting Amazon’s AI advancements.

## AI, Ethics, and Emerging Tools

* [AI Is a Floor Raiser, Not a Ceiling Raiser](https://elroy.bot/blog/2025/07/29/ai-is-a-floor-raiser-not-a-ceiling-raiser.html) - A look into how AI impacts baseline productivity rather than exceptional creativity. [Comments](https://news.ycombinator.com/item?id=44747634)

* [AgentMail – Email infra for AI agents](https://chat.agentmail.to/) - Introducing infrastructure enabling AI agents to operate via email. [Comments](https://news.ycombinator.com/item?id=44745820)

* [Google&apos;s AlphaEarth AI Maps Any 10-Meter Area on Earth Using Satellite Data](https://news.slashdot.org/story/25/07/30/2032255/googles-alphaearth-ai-maps-any-10-meter-area-on-earth-using-satellite-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Exploration of Google’s AI-powered global geographic imaging.

## Scientific Discoveries and Innovation

* [World&apos;s &apos;Oldest Baby&apos; Born From Embryo Frozen in 1994](https://science.slashdot.org/story/25/07/31/1812236/worlds-oldest-baby-born-from-embryo-frozen-in-1994?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A landmark in reproductive science with potential societal implications. [Comments](https://science.slashdot.org/story/25/07/31/1812236/worlds-oldest-baby-born-from-embryo-frozen-in-1994?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Peacock Feathers Can Be Lasers](https://science.slashdot.org/story/25/07/31/0025256/peacock-feathers-can-be-lasers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Findings on how peacock feathers could function like lasers. [Comments](https://science.slashdot.org/story/25/07/31/0025256/peacock-feathers-can-be-lasers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [NASA’s Webb Finds Possible &apos;Direct Collapse&apos; Black Hole](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss) - Significant astronomical discovery opening new avenues in space research.

## Software and Engineering Highlights

* [Schematra: Sinatra inspired Chicken web framework](https://github.com/rolandoam/schematra) - A creative approach to web framework development inspired by Sinatra. [Comments](https://lobste.rs/s/tuwdze/schematra_sinatra_inspired_chicken_web)

* [The smallest embeddable scripting language, part 1](https://log.schemescape.com/posts/static-site-generators/smallest-scripting-language.html) - Introducing a minimalistic approach to embeddable scripting. [Comments](https://lobste.rs/s/hzr1ke/smallest_embeddable_scripting_language)

* [You Are The BIOS Now: Building A Hypervisor In Rust With KVM](https://yeet.cx/blog/you-are-the-bios-now) - Exploring the complexities of hypervisor development using Rust. [Comments](https://lobste.rs/s/zwbafr/you_are_bios_now_building_hypervisor_rust)

## Cultural & Ethical Implications

* [Why We Need a Right Not to be Manipulated](https://soylentnews.org/article.pl?sid=25/07/30/0133228&amp;from=rss) - Advocacy for personal autonomy in the digital age through new rights. [Comments](https://soylentnews.org/article.pl?sid=25/07/30/0133228&amp;from=rss)

* [Social Media Is Dead – Here’s What Comes Next](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss) - Reflections on the decline of social media and potential future paradigms.

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

* [2025-07-31, 18:41:14](https://lobste.rs/s/swmezp/pypi_phishing_attack_incident_report) - [PyPI Phishing Attack: Incident Report](https://blog.pypi.org/posts/2025-07-31-incident-report-phishing-attack/)
* [2025-07-31, 18:40:00](https://science.slashdot.org/story/25/07/31/1812236/worlds-oldest-baby-born-from-embryo-frozen-in-1994?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s &apos;Oldest Baby&apos; Born From Embryo Frozen in 1994](https://science.slashdot.org/story/25/07/31/1812236/worlds-oldest-baby-born-from-embryo-frozen-in-1994?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 18:24:13](https://lobste.rs/s/l82tbf/network_leaderless_replication_for) - [In-Network Leaderless Replication for Distributed Data Stores](https://www.vldb.org/pvldb/vol15/p1337-lee.pdf)
* [2025-07-31, 18:10:02](https://lobste.rs/s/sqthxf/secure_boot_certificate_rollover_is_real) - [Secure boot certificate rollover is real but probably won&apos;t hurt you](https://mjg59.dreamwidth.org/72892.html)
* [2025-07-31, 18:00:00](https://it.slashdot.org/story/25/07/31/1641202/microsoft-ends-tradition-of-naming-competitors-in-regulatory-filings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Ends Tradition of Naming Competitors in Regulatory Filings](https://it.slashdot.org/story/25/07/31/1641202/microsoft-ends-tradition-of-naming-competitors-in-regulatory-filings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 17:39:38](https://lobste.rs/s/tuwdze/schematra_sinatra_inspired_chicken_web) - [Schematra: Sinatra inspired Chicken web framework](https://github.com/rolandoam/schematra)
* [2025-07-31, 17:23:17](https://news.ycombinator.com/item?id=44747870) - [Go Assembly Mutation Testing](https://words.filippo.io/assembly-mutation/)
* [2025-07-31, 17:21:07](https://news.ycombinator.com/item?id=44747843) - [Secure boot certificate rollover is real but probably won&apos;t hurt you](https://mjg59.dreamwidth.org/72892.html)
* [2025-07-31, 17:20:00](https://news.slashdot.org/story/25/07/31/1652242/internal-microsoft-documents-detail-pay-scales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internal Microsoft Documents Detail Pay Scales](https://news.slashdot.org/story/25/07/31/1652242/internal-microsoft-documents-detail-pay-scales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 17:10:21](https://news.ycombinator.com/item?id=44747728) - [How to Scan Force Pushed Commits for Secrets](https://trufflesecurity.com/blog/how-to-scan-force-pushed-commits-for-secrets)
* [2025-07-31, 17:08:10](https://news.ycombinator.com/item?id=44747699) - [Show HN: Astro dev blog template with 60 interactive colorschemes](https://multiterm.stelclementine.com)
* [2025-07-31, 17:01:37](https://news.ycombinator.com/item?id=44747634) - [AI Is a Floor Raiser, Not a Ceiling Raiser](https://elroy.bot/blog/2025/07/29/ai-is-a-floor-raiser-not-a-ceiling-raiser.html)
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
* [2025-07-31, 15:01:08](https://news.ycombinator.com/item?id=44746415) - [Ursa: A leaderless, object storage–based alternative to Kafka](https://streamnative.io/products/ursa)
* [2025-07-31, 14:55:16](https://news.ycombinator.com/item?id=44746334) - [U.S. senators introduce new pirate site blocking bill, \&quot;Block BEARD\&quot;](https://torrentfreak.com/u-s-senators-introduce-new-pirate-site-blocking-bill-block-beard/)
* [2025-07-31, 14:47:25](https://lobste.rs/s/43hw9a/math_is_haunted) - [The Math Is Haunted](https://overreacted.io/the-math-is-haunted/)
* [2025-07-31, 14:40:00](https://slashdot.org/story/25/07/31/1439206/microsoft-joins-4-trillion-club?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Joins $4 Trillion Club](https://slashdot.org/story/25/07/31/1439206/microsoft-joins-4-trillion-club?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 14:37:10](https://lobste.rs/s/e03oa9/what_is_gvisor) - [What is gVisor?](https://blog.yelinaung.com/posts/gvisor/)
* [2025-07-31, 14:23:40](https://news.ycombinator.com/item?id=44745984) - [Carbon Language: An experimental successor to C++](https://docs.carbon-lang.dev/)
* [2025-07-31, 14:16:07](https://news.ycombinator.com/item?id=44745897) - [MacBook Pro Insomnia](https://manuel.bernhardt.io/posts/2025-07-24-macbook-pro-insomnia)
* [2025-07-31, 14:11:29](https://news.ycombinator.com/item?id=44745843) - [Orion Browser](https://kagi.com/orion/)
* [2025-07-31, 14:08:33](https://news.ycombinator.com/item?id=44745820) - [Show HN: AgentMail – Email infra for AI agents](https://chat.agentmail.to/)
* [2025-07-31, 14:06:31](https://lobste.rs/s/gl3oty/local_first_search_tale_frustrated) - [Local-first search. A tale of frustrated dreams, utopian user experiences and calculated tradeoffs](https://fika.bar/paoramen/local-first-search-01K1B0WM1X4P5SV5QAES0Z5N75)
* [2025-07-31, 14:06:00](https://science.slashdot.org/story/25/07/31/146255/physicists-disagree-wildly-on-what-quantum-mechanics-says-about-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Physicists Disagree Wildly on What Quantum Mechanics Says About Reality](https://science.slashdot.org/story/25/07/31/146255/physicists-disagree-wildly-on-what-quantum-mechanics-says-about-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 13:40:22](https://news.ycombinator.com/item?id=44745539) - [What is gVisor?](https://blog.yelinaung.com/posts/gvisor/)
* [2025-07-31, 13:17:35](https://news.ycombinator.com/item?id=44745347) - [NSW Fair Trading – Dark Patterns](https://www.nsw.gov.au/departments-and-agencies/fair-trading/dark-patterns)
* [2025-07-31, 13:15:00](https://developers.slashdot.org/story/25/07/31/1314207/stack-overflow-data-reveals-the-hidden-productivity-tax-of-almost-right-ai-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stack Overflow Data Reveals the Hidden Productivity Tax of &apos;Almost Right&apos; AI Code](https://developers.slashdot.org/story/25/07/31/1314207/stack-overflow-data-reveals-the-hidden-productivity-tax-of-almost-right-ai-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 12:48:48](https://news.ycombinator.com/item?id=44745123) - [So you&apos;re a manager now](https://scottkosman.com/post/blog/so-youre-a-manager-now/)
* [2025-07-31, 12:32:42](https://lobste.rs/s/qwaniu/vanity_import_paths_go_2019) - [Vanity import paths in Go (2019)](https://sagikazarmark.hu/blog/vanity-import-paths-in-go/)
* [2025-07-31, 12:06:32](https://lobste.rs/s/r3k5nr/search_riches_hackers_plant_4g_enabled) - [In search of riches, hackers plant 4G-enabled Raspberry Pi in bank network](https://arstechnica.com/security/2025/07/in-search-of-riches-hackers-plant-4g-enabled-raspberry-pi-in-bank-network/)
* [2025-07-31, 11:45:00](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss) - [We Are Undergoing Unprecedented Loss of Freshwater Across the Planet](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss)
* [2025-07-31, 11:37:22](https://news.ycombinator.com/item?id=44744578) - [Introduction to Computer Music](https://cmtext.com/)
* [2025-07-31, 11:19:54](https://news.ycombinator.com/item?id=44744454) - [How was the Universal Pictures 1936 opening logo created?](https://movies.stackexchange.com/questions/128020/how-was-the-universal-pictures-1936-opening-logo-created)
* [2025-07-31, 10:56:21](https://news.ycombinator.com/item?id=44744324) - [I tried Servo](https://www.spacebar.news/servo-undercover-web-browser-engine/)
* [2025-07-31, 10:51:26](https://lobste.rs/s/yg4vde/sync_primitives_are_functionally) - [Sync primitives are Functionally Complete](http://kprotty.me/2025/07/31/sync-primitives-are-functionally-complete.html)
* [2025-07-31, 10:00:00](https://yro.slashdot.org/story/25/07/31/0037258/australia-widens-teen-social-media-ban-to-youtube-scraps-exemption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia Widens Teen Social Media Ban To YouTube, Scraps Exemption](https://yro.slashdot.org/story/25/07/31/0037258/australia-widens-teen-social-media-ban-to-youtube-scraps-exemption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 08:02:05](https://lobste.rs/s/olb8w6/mounting_atmosphere) - [Mounting The Atmosphere](https://oppi.li/posts/mounting_the_atmosphere/)
* [2025-07-31, 07:01:00](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss) - [Manuel Moreale on Why Blogs Matter](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss)
* [2025-07-31, 07:00:00](https://science.slashdot.org/story/25/07/31/0025256/peacock-feathers-can-be-lasers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Peacock Feathers Can Be Lasers](https://science.slashdot.org/story/25/07/31/0025256/peacock-feathers-can-be-lasers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 04:38:54](https://lobste.rs/s/rltgp7/tracking_source_locations_futhark) - [Tracking source locations in the Futhark compiler](https://futhark-lang.org/blog/2025-07-29-tracking-source-locations.html)
* [2025-07-31, 03:30:00](https://tech.slashdot.org/story/25/07/30/2216225/google-tool-misused-to-scrub-tech-ceos-shady-past-from-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Tool Misused To Scrub Tech CEO&apos;s Shady Past From Search](https://tech.slashdot.org/story/25/07/30/2216225/google-tool-misused-to-scrub-tech-ceos-shady-past-from-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 02:17:00](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss) - [FreeBSD 15.0’S Installer to Gain Option to Install a Full KDE Plasma Desktop Environment](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss)
* [2025-07-31, 01:36:12](https://lobste.rs/s/hpmmo4/build_your_own_minisforum_n5_inspired) - [Build Your Own Minisforum N5 Inspired Mini NAS: A Comprehensive Guide](https://jackharvest.com/index.php/2025/07/27/build-your-own-minisforum-n5-inspired-mini-nas-a-comprehensive-guide/)
* [2025-07-31, 01:30:00](https://slashdot.org/story/25/07/30/227205/voice-actors-push-back-as-ai-threatens-dubbing-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Voice Actors Push Back As AI Threatens Dubbing Industry](https://slashdot.org/story/25/07/30/227205/voice-actors-push-back-as-ai-threatens-dubbing-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 00:52:00](https://news.slashdot.org/story/25/07/30/2032255/googles-alphaearth-ai-maps-any-10-meter-area-on-earth-using-satellite-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s AlphaEarth AI Maps Any 10-Meter Area on Earth Using Satellite Data](https://news.slashdot.org/story/25/07/30/2032255/googles-alphaearth-ai-maps-any-10-meter-area-on-earth-using-satellite-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 00:10:00](https://tech.slashdot.org/story/25/07/30/2015220/boring-company-to-build-tesla-tunnels-under-nashville?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boring Company To Build Tesla Tunnels Under Nashville](https://tech.slashdot.org/story/25/07/30/2015220/boring-company-to-build-tesla-tunnels-under-nashville?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 23:50:20](https://lobste.rs/s/gmsuvq/go_s_race_detector_has_mutex_blind_spot) - [Go&apos;s race detector has a mutex blind spot](https://doublefree.dev/go-race-mutex-blindspot/)
* [2025-07-30, 22:51:20](https://lobste.rs/s/jkbsfi/i_built_my_blog_with_c_preprocessor_macros) - [I built my blog with C preprocessor macros](https://wheybags.com/blog/macroblog.html)
* [2025-07-30, 21:53:38](https://lobste.rs/s/4hwugo/books_about_lisp_s_beauty) - [Books about Lisp&apos;s \&quot;beauty\&quot;?](https://lobste.rs/s/4hwugo/books_about_lisp_s_beauty)
* [2025-07-30, 21:32:00](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss) - [OpenAI’s ChatGPT Agent Casually Clicks Through “I am not a robot” Verification Test](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss)
* [2025-07-30, 21:07:13](https://news.ycombinator.com/item?id=44739494) - [150 years of Hans Christian Andersen](https://www.newstatesman.com/culture/books/book-of-the-day/2025/07/150-years-of-the-bizarre-hans-christian-andersen)
* [2025-07-30, 20:20:08](https://lobste.rs/s/ykjkon/hype_is_product) - [The Hype is the Product](https://rys.io/en/180.html)
* [2025-07-30, 19:39:18](https://lobste.rs/s/aqiske/emacs_macos_bug) - [Emacs: The MacOS Bug](https://xlii.space/eng/emacs-the-macos-bug/)
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
* [2025-07-29, 17:02:00](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss) - [Hacker Injects Malicious, Potentially Disk-Wiping Prompt Into Amazon&apos;s Ai Coding Assistant](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss)
* [2025-07-29, 15:21:34](https://news.ycombinator.com/item?id=44724507) - [Advanced Rust macros with derive-deftly](https://diziet.pages.torproject.net/rust-derive-deftly/latest/guide/)
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
* [2025-07-27, 22:15:00](https://soylentnews.org/article.pl?sid=25/07/26/1830254&amp;from=rss) - [The Cells That Breathe Two Ways](https://soylentnews.org/article.pl?sid=25/07/26/1830254&amp;from=rss)
* [2025-07-27, 17:37:00](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss) - [UK To Ban Making Ransomware Payments For Some Organizations](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss)
* [2025-07-27, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss) - [Japan Bets Big on Ultrathin, Ultralight Solar Panels](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss)
* [2025-07-27, 06:50:00](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss) - [WD Makes Click Of Death A Feature](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss)
* [2025-07-27, 02:06:00](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss) - [Social Media Is Dead – Here’s What Comes Next](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss)
