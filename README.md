# [News Summary](https://kherrick.github.io/news-summary/)

## Innovative Technologies and Developments

* [Altermagnets: The first new type of magnet in nearly a century](https://www.newscientist.com/article/2487013-weve-discovered-a-new-kind-of-magnetism-what-can-we-do-with-it/) ([comments](https://news.ycombinator.com/item?id=44583171))

* [Seagate's 30TB HAMR Drives Hit Market for $600](https://hardware.slashdot.org/story/25/07/16/140233/seagates-30tb-hamr-drives-hit-market-for-600?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44582855))

* [Shipping WebGPU on Windows in Firefox 141](https://mozillagfx.wordpress.com/2025/07/15/shipping-webgpu-on-windows-in-firefox-141/) ([comments](https://news.ycombinator.com/item?id=44579317))

* [NIST ion clock sets new record for most accurate clock](https://www.nist.gov/news-events/news/2025/07/nist-ion-clock-sets-new-record-most-accurate-clock-world) ([comments](https://news.ycombinator.com/item?id=44572499))

## Cybersecurity and Hacks

* [GPUHammer: Rowhammer Attacks on GPU Memories are Practical](https://gpuhammer.com/) ([comments](https://lobste.rs/s/oukt2e/gpuhammer_rowhammer_attacks_on_gpu))

* [North Korean XORIndex malware hidden in 67 malicious npm packages](https://www.bleepingcomputer.com/news/security/north-korean-xorindex-malware-hidden-in-67-malicious-npm-packages/) ([comments](https://lobste.rs/s/y52on2/north_korean_xorindex_malware_hidden_67))

* [Ukrainian hackers destroyed the IT infrastructure of Russian drone manufacturer](https://prm.ua/en/ukrainian-hackers-destroyed-the-it-infrastructure-of-a-russian-drone-manufacturer-what-is-known/) ([comments](https://news.ycombinator.com/item?id=44579902))

* [Let Me Cook You a Vulnerability: Exploiting the Thermomix TM5](https://www.synacktiv.com/en/publications/let-me-cook-you-a-vulnerability-exploiting-the-thermomix-tm5) ([comments](https://lobste.rs/s/am00km/let_me_cook_you_vulnerability_exploiting))

## Artificial Intelligence

* [Chain of thought monitorability: A new and fragile opportunity for AI safety](https://arxiv.org/abs/2507.11473) ([comments](https://news.ycombinator.com/item?id=44582855))

* [Kiro and the future of AI spec-driven software development](https://kiro.dev/blog/kiro-and-the-future-of-software-development/) ([comments](https://lobste.rs/s/gcgqvb/kiro_future_ai_spec_driven_software))

* [AI Creeps Into the Risk Register For America's Biggest Firms](https://it.slashdot.org/story/25/07/16/0340239/ai-creeps-into-the-risk-register-for-americas-biggest-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44579317))

## Future of Housing and Society

* [The Italian towns selling houses for €1](https://www.theguardian.com/society/2025/jul/08/the-life-swap-dream-or-a-marketing-gimmick-the-italian-towns-selling-houses-for-1) ([comments](https://news.ycombinator.com/item?id=44583619))

* [Thousands of Afghans Secretly Moved To Britain After Data Leak](https://news.slashdot.org/story/25/07/16/0127216/thousands-of-afghans-secretly-moved-to-britain-after-data-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44578070))

## Space and Science Discoveries

* [Denver's Deepest Dinosaur](https://pubs.geoscienceworld.org/uwyo/rmg/article/60/1/1/657560/Denver-s-deepest-dinosaur) ([comments](https://news.ycombinator.com/item?id=44582349))

* [Physicists Start To Pin Down How Stars Forge Heavy Atoms](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss) ([comments](https://lobste.rs/s/zschiu/introduction))

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

* [2025-07-16, 15:50:06](https://news.ycombinator.com/item?id=44583619) - [The Italian towns selling houses for €1](https://www.theguardian.com/society/2025/jul/08/the-life-swap-dream-or-a-marketing-gimmick-the-italian-towns-selling-houses-for-1)
* [2025-07-16, 15:49:14](https://lobste.rs/s/ll46pe/what_people_said_about_openzfs_bug) - [What people said about an OpenZFS bug](https://despairlabs.com/blog/posts/2025-07-13-an-openzfs-bug-and-the-humans-that-made-it-comments/)
* [2025-07-16, 15:30:06](https://lobste.rs/s/tfauzy/underused_techniques_for_effective) - [Underused Techniques for Effective Emails](https://refactoringenglish.com/chapters/techniques-for-writing-emails/)
* [2025-07-16, 15:22:00](https://tech.slashdot.org/story/25/07/16/1428240/stock-tracking-tokens-debut-with-price-chaos-amazon-token-spikes-100x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stock-Tracking Tokens Debut With Price Chaos, Amazon Token Spikes 100x](https://tech.slashdot.org/story/25/07/16/1428240/stock-tracking-tokens-debut-with-price-chaos-amazon-token-spikes-100x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 15:11:54](https://news.ycombinator.com/item?id=44583171) - [Altermagnets: The first new type of magnet in nearly a century](https://www.newscientist.com/article/2487013-weve-discovered-a-new-kind-of-magnetism-what-can-we-do-with-it/)
* [2025-07-16, 14:55:31](https://news.ycombinator.com/item?id=44583014) - [Show HN: I gave Claude a sundial and it built a calendar](https://github.com/jlumbroso/passage-of-time-mcp)
* [2025-07-16, 14:40:00](https://hardware.slashdot.org/story/25/07/16/140233/seagates-30tb-hamr-drives-hit-market-for-600?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Seagate&apos;s 30TB HAMR Drives Hit Market for $600](https://hardware.slashdot.org/story/25/07/16/140233/seagates-30tb-hamr-drives-hit-market-for-600?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 14:39:55](https://news.ycombinator.com/item?id=44582855) - [Chain of thought monitorability: A new and fragile opportunity for AI safety](https://arxiv.org/abs/2507.11473)
* [2025-07-16, 14:17:54](https://news.ycombinator.com/item?id=44582662) - [Show HN: Improving RAG with chess Elo scores](https://www.zeroentropy.dev/blog/improving-rag-with-elo-scores)
* [2025-07-16, 14:14:01](https://lobste.rs/s/gcgqvb/kiro_future_ai_spec_driven_software) - [Kiro and the future of AI spec-driven software development](https://kiro.dev/blog/kiro-and-the-future-of-software-development/)
* [2025-07-16, 14:00:00](https://tech.slashdot.org/story/25/07/16/1348259/the-secret-to-better-airplane-navigation-could-be-inside-the-earths-crust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Secret To Better Airplane Navigation Could Be Inside the Earth&apos;s Crust](https://tech.slashdot.org/story/25/07/16/1348259/the-secret-to-better-airplane-navigation-could-be-inside-the-earths-crust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 13:46:28](https://news.ycombinator.com/item?id=44582349) - [Denver&apos;s Deepest Dinosaur](https://pubs.geoscienceworld.org/uwyo/rmg/article/60/1/1/657560/Denver-s-deepest-dinosaur)
* [2025-07-16, 13:23:24](https://lobste.rs/s/oukt2e/gpuhammer_rowhammer_attacks_on_gpu) - [GPUHammer: Rowhammer Attacks on GPU Memories are Practical](https://gpuhammer.com/)
* [2025-07-16, 13:00:00](https://hardware.slashdot.org/story/25/07/16/0624242/chinese-firms-rush-for-nvidia-chips-as-us-prepares-to-lift-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Firms Rush For Nvidia Chips As US Prepares To Lift Ban](https://hardware.slashdot.org/story/25/07/16/0624242/chinese-firms-rush-for-nvidia-chips-as-us-prepares-to-lift-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 12:49:47](https://lobste.rs/s/1juicg/geomys_blueprint_for_sustainable_open) - [Geomys, a blueprint for a sustainable open source maintenance firm (2024)](https://words.filippo.io/geomys/)
* [2025-07-16, 12:39:51](https://news.ycombinator.com/item?id=44581631) - [cppyy: Automatic Python-C++ Bindings](https://cppyy.readthedocs.io/en/latest/)
* [2025-07-16, 12:26:36](https://lobste.rs/s/zbknw2/expressive_test_assertions_without) - [Expressive test assertions without testify/assert](https://antonz.org/do-not-testify/)
* [2025-07-16, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/15/0229246&amp;from=rss) - [Secretive Chinese Satellite Emerges in Surprising Orbit After 6-Day Vanishing Act](https://soylentnews.org/article.pl?sid=25/07/15/0229246&amp;from=rss)
* [2025-07-16, 11:42:17](https://news.ycombinator.com/item?id=44581098) - [Show HN: DataRamen, a Fast SQL Explorer with Automatic Joins and Data Navigation](https://dataramen.xyz/)
* [2025-07-16, 11:40:41](https://lobste.rs/s/am00km/let_me_cook_you_vulnerability_exploiting) - [Let Me Cook You a Vulnerability: Exploiting the Thermomix TM5](https://www.synacktiv.com/en/publications/let-me-cook-you-a-vulnerability-exploiting-the-thermomix-tm5)
* [2025-07-16, 10:37:08](https://news.ycombinator.com/item?id=44580682) - [Linux Reaches 5% Desktop Market Share in USA](https://ostechnix.com/linux-reaches-5-desktop-market-share-in-usa/)
* [2025-07-16, 10:00:00](https://it.slashdot.org/story/25/07/16/0618255/curl-creator-mulls-nixing-bug-bounty-awards-to-stop-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Curl Creator Mulls Nixing Bug Bounty Awards To Stop AI Slop](https://it.slashdot.org/story/25/07/16/0618255/curl-creator-mulls-nixing-bug-bounty-awards-to-stop-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 09:18:50](https://lobste.rs/s/ioznqf/reviving_genius) - [Reviving Genius](https://andrewshaw.nl/blog/reviving-genius)
* [2025-07-16, 09:15:28](https://news.ycombinator.com/item?id=44580257) - [AWS open-sourced Postgres active-active replication extension](https://github.com/aws/pgactive)
* [2025-07-16, 08:18:34](https://news.ycombinator.com/item?id=44579902) - [Ukrainian hackers destroyed the IT infrastructure of Russian drone manufacturer](https://prm.ua/en/ukrainian-hackers-destroyed-the-it-infrastructure-of-a-russian-drone-manufacturer-what-is-known/)
* [2025-07-16, 07:44:32](https://news.ycombinator.com/item?id=44579717) - [I&apos;m Switching to Python and Actually Liking It](https://www.cesarsotovalero.net/blog/i-am-switching-to-python-and-actually-liking-it.html)
* [2025-07-16, 07:34:00](https://soylentnews.org/article.pl?sid=25/07/14/1828216&amp;from=rss) - [Stopping The Rot When Good Software Goes Bad Means New Rules](https://soylentnews.org/article.pl?sid=25/07/14/1828216&amp;from=rss)
* [2025-07-16, 07:33:46](https://lobste.rs/s/y52on2/north_korean_xorindex_malware_hidden_67) - [North Korean XORIndex malware hidden in 67 malicious npm packages](https://www.bleepingcomputer.com/news/security/north-korean-xorindex-malware-hidden-in-67-malicious-npm-packages/)
* [2025-07-16, 07:00:00](https://it.slashdot.org/story/25/07/16/0340239/ai-creeps-into-the-risk-register-for-americas-biggest-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Creeps Into the Risk Register For America&apos;s Biggest Firms](https://it.slashdot.org/story/25/07/16/0340239/ai-creeps-into-the-risk-register-for-americas-biggest-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 06:37:35](https://lobste.rs/s/r91kkb/janet_feature_demos) - [Janet Feature Demos](https://github.com/sogaiu/janet-features-demos)
* [2025-07-16, 06:32:47](https://news.ycombinator.com/item?id=44579317) - [Shipping WebGPU on Windows in Firefox 141](https://mozillagfx.wordpress.com/2025/07/15/shipping-webgpu-on-windows-in-firefox-141/)
* [2025-07-16, 03:50:00](https://news.ycombinator.com/item?id=44578510) - [Tilck: A Tiny Linux-Compatible Kernel](https://github.com/vvaltchev/tilck)
* [2025-07-16, 03:44:39](https://news.ycombinator.com/item?id=44578490) - [Cloudflare 1.1.1.1 Incident on July 14, 2025](https://blog.cloudflare.com/cloudflare-1-1-1-1-incident-on-july-14-2025/)
* [2025-07-16, 03:30:00](https://entertainment.slashdot.org/story/25/07/16/008254/music-insiders-call-for-warning-labels-after-ai-generated-band-gets-1-million-plays-on-spotify?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Music Insiders Call for Warning Labels After AI-Generated Band Gets 1 Million Plays On Spotify](https://entertainment.slashdot.org/story/25/07/16/008254/music-insiders-call-for-warning-labels-after-ai-generated-band-gets-1-million-plays-on-spotify?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 02:51:00](https://soylentnews.org/article.pl?sid=25/07/14/1819237&amp;from=rss) - [GPS On The Fritz? Britain And France Plot A Backup Plan](https://soylentnews.org/article.pl?sid=25/07/14/1819237&amp;from=rss)
* [2025-07-16, 02:37:37](https://news.ycombinator.com/item?id=44578143) - [Six Years of Gemini](https://geminiprotocol.net/news/2025_06_20.gmi)
* [2025-07-16, 02:22:02](https://news.ycombinator.com/item?id=44578070) - [LLM Daydreaming](https://gwern.net/ai-daydreaming)
* [2025-07-16, 01:36:37](https://lobste.rs/s/fr2d8a/fips_140_3_go_cryptographic_module) - [The FIPS 140-3 Go Cryptographic Module](https://go.dev/blog/fips140)
* [2025-07-16, 01:30:00](https://news.slashdot.org/story/25/07/16/0127216/thousands-of-afghans-secretly-moved-to-britain-after-data-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Thousands of Afghans Secretly Moved To Britain After Data Leak](https://news.slashdot.org/story/25/07/16/0127216/thousands-of-afghans-secretly-moved-to-britain-after-data-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 00:46:36](https://lobste.rs/s/apenjf/openzfs_bug_ported_c) - [OpenZFS Bug Ported to C](https://flak.tedunangst.com/post/OpenZFS-Bug-Ported-to-C)
* [2025-07-16, 00:05:45](https://news.ycombinator.com/item?id=44577268) - [GPUHammer: Rowhammer attacks on GPU memories are practical](https://gpuhammer.com/)
* [2025-07-15, 23:30:00](https://slashdot.org/story/25/07/15/2211203/anthropic-rolls-out-claude-ai-for-financial-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Rolls Out Claude AI For Financial Services](https://slashdot.org/story/25/07/15/2211203/anthropic-rolls-out-claude-ai-for-financial-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 23:02:48](https://lobste.rs/s/izk0ff/shipping_webgpu_on_windows_firefox_141) - [Shipping WebGPU on Windows in Firefox 141](https://mozillagfx.wordpress.com/2025/07/15/shipping-webgpu-on-windows-in-firefox-141/)
* [2025-07-15, 22:50:00](https://news.slashdot.org/story/25/07/15/1922235/reddit-starts-verifying-ages-of-users-in-the-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Starts Verifying Ages of Users In the UK](https://news.slashdot.org/story/25/07/15/1922235/reddit-starts-verifying-ages-of-users-in-the-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 22:13:00](https://soylentnews.org/article.pl?sid=25/07/14/188221&amp;from=rss) - [Snot-Filtering Tech Could Be The Answer To A Dust-Free PC](https://soylentnews.org/article.pl?sid=25/07/14/188221&amp;from=rss)
* [2025-07-15, 22:10:00](https://tech.slashdot.org/story/25/07/15/1956221/kdes-android-tv-alternative-plasma-bigscreen-rises-from-the-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE&apos;s Android TV Alternative, Plasma Bigscreen, Rises From the Dead](https://tech.slashdot.org/story/25/07/15/1956221/kdes-android-tv-alternative-plasma-bigscreen-rises-from-the-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 21:30:00](https://linux.slashdot.org/story/25/07/15/1932202/libreoffice-lands-built-in-support-for-bitcoin-as-currency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LibreOffice Lands Built-In Support For Bitcoin As Currency](https://linux.slashdot.org/story/25/07/15/1932202/libreoffice-lands-built-in-support-for-bitcoin-as-currency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 21:03:50](https://news.ycombinator.com/item?id=44575794) - [Where&apos;s Firefox going next?](https://connect.mozilla.org/t5/discussions/where-s-firefox-going-next-you-tell-us/m-p/100698#M39094)
* [2025-07-15, 20:50:00](https://yro.slashdot.org/story/25/07/15/206217/us-prosecutors-close-probe-into-polymarket-betting-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Prosecutors Close Probe Into Polymarket Betting Website](https://yro.slashdot.org/story/25/07/15/206217/us-prosecutors-close-probe-into-polymarket-betting-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 20:31:01](https://lobste.rs/s/ppxfaq/helix_25_07_highlights) - [Helix 25.07 Highlights](https://helix-editor.com/news/release-25-07-highlights/)
* [2025-07-15, 20:10:00](https://tech.slashdot.org/story/25/07/15/1912208/blender-45-lts-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blender 4.5 LTS Released](https://tech.slashdot.org/story/25/07/15/1912208/blender-45-lts-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 20:05:35](https://lobste.rs/s/cfkz4y/compiler_bootstrapping_nixpkgs) - [Compiler bootstrapping in Nixpkgs](https://blog.obsidian.systems/compiler-bootstrapping-in-nixpkgs/)
* [2025-07-15, 19:39:47](https://lobste.rs/s/zschiu/introducing_go_cdc_chunkers_chunk) - [Introducing go-cdc-chunkers: chunk and deduplicate everything](https://plakar.io/posts/2025-07-11/introducing-go-cdc-chunkers-chunk-and-deduplicate-everything/)
* [2025-07-15, 19:30:00](https://yro.slashdot.org/story/25/07/15/194255/cloudflare-starts-blocking-pirate-sites-for-uk-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Starts Blocking Pirate Sites For UK Users](https://yro.slashdot.org/story/25/07/15/194255/cloudflare-starts-blocking-pirate-sites-for-uk-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 19:23:56](https://lobste.rs/s/dpbwfi/hazel_live_functional_programming) - [Hazel: A live functional programming environment with typed holes](https://github.com/hazelgrove/hazel)
* [2025-07-15, 17:50:04](https://lobste.rs/s/deydno/encrypting_files_with_passkeys_age) - [Encrypting Files with Passkeys and age](https://words.filippo.io/passkey-encryption/)
* [2025-07-15, 17:30:55](https://lobste.rs/s/wajnta/wikipedia_outage_report_for_may_s_pope) - [Wikipedia outage report for May&apos;s Pope traffic spike](https://wikitech.wikimedia.org/wiki/Incidents/2025-05-08_Papal_announcement_traffic_surge)
* [2025-07-15, 17:24:00](https://soylentnews.org/article.pl?sid=25/07/14/1758208&amp;from=rss) - [Princeton Study Maps 200,000 years of Human–Neanderthal Interbreeding](https://soylentnews.org/article.pl?sid=25/07/14/1758208&amp;from=rss)
* [2025-07-15, 16:49:06](https://news.ycombinator.com/item?id=44573195) - [Reflections on OpenAI](https://calv.info/openai-reflections)
* [2025-07-15, 15:56:47](https://news.ycombinator.com/item?id=44572499) - [NIST ion clock sets new record for most accurate clock](https://www.nist.gov/news-events/news/2025/07/nist-ion-clock-sets-new-record-most-accurate-clock-world)
* [2025-07-15, 15:46:41](https://news.ycombinator.com/item?id=44572377) - [Show HN: Shoggoth Mini – A soft tentacle robot powered by GPT-4o and RL](https://www.matthieulc.com/posts/shoggoth-mini)
* [2025-07-15, 15:37:35](https://lobste.rs/s/lkw9ys/adding_lookbehinds_rust_lang_regex) - [Adding lookbehinds to rust-lang/regex](https://systemf.epfl.ch/blog/rust-regex-lookbehinds/)
* [2025-07-15, 14:53:54](https://lobste.rs/s/xl4arr/sound_inevitability) - [The sound of inevitability](https://tomrenner.com/posts/llm-inevitabilism/)
* [2025-07-15, 13:42:42](https://lobste.rs/s/pvbjui/death_by_thousand_slops) - [Death by a thousand slops](https://daniel.haxx.se/blog/2025/07/14/death-by-a-thousand-slops/)
* [2025-07-15, 13:06:39](https://lobste.rs/s/r5omhr/openzfs_bug_ported_zig) - [OpenZFS Bug Ported to Zig](https://andrewkelley.me/post/openzfs-bug-ported-zig.html)
* [2025-07-15, 12:45:00](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss) - [AI Therapy Bots Fuel Delusions and Give Dangerous Advice, Stanford Study Finds](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss)
* [2025-07-15, 09:35:16](https://lobste.rs/s/kssozd/how_i_keep_up_with_ai_progress) - [How I keep up with AI progress](https://blog.nilenso.com/blog/2025/06/23/how-i-keep-up-with-ai-progress/)
* [2025-07-15, 08:07:51](https://lobste.rs/s/87dpsv/trying_guix_nixer_s_impressions) - [Trying Guix: A Nixer&apos;s Impressions](https://tazj.in/blog/trying-guix)
* [2025-07-15, 08:02:00](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss) - [Core Ultra 5 245HX Blasts Past Desktop Counterpart in PassMark](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss)
* [2025-07-15, 03:15:00](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss) - [Physicists Start To Pin Down How Stars Forge Heavy Atoms](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss)
* [2025-07-14, 23:30:00](https://soylentnews.org/article.pl?sid=25/07/13/232209&amp;from=rss) - [Supporting Mission-Driven Space Innovation, For Earth And Beyond](https://soylentnews.org/article.pl?sid=25/07/13/232209&amp;from=rss)
* [2025-07-14, 22:00:08](https://news.ycombinator.com/item?id=44565806) - [Roman dodecahedron: 12-sided object has baffled archaeologists for centuries](https://www.livescience.com/archaeology/romans/roman-dodecahedron-a-mysterious-12-sided-object-that-has-baffled-archaeologists-for-centuries)
* [2025-07-14, 18:45:00](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss) - [China Claims Big Advances In Classical And Quantum Computers](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss)
* [2025-07-14, 14:00:00](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss) - [AMD Discloses New CPU Flaws that can Enable Data Leaks via Timing Attacks](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss)
* [2025-07-14, 09:15:00](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss) - [&apos;Positive Review Only&apos;: Researchers Hide AI Prompts in Papers](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss)
* [2025-07-14, 04:30:00](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss) - [The Foolproof Way to Win Any Lottery, According to Maths](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss)
* [2025-07-13, 23:45:00](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss) - [1960s Schools Experiment That Created a New Alphabet and Left Thousands of Children Unable to Spell](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss)
* [2025-07-13, 19:15:00](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss) - [Zombie Fabs Plague China&apos;s Chipmaking Ambitions, Failures Burning Tens of Billions of Dollars](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss)
* [2025-07-13, 16:02:19](https://news.ycombinator.com/item?id=44551359) - [Show HN: BloomSearch – Keyword search with hierarchical bloom filters](https://github.com/danthegoodman1/bloomsearch)
* [2025-07-13, 14:28:00](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss) - [Man&apos;s Ghastly Festering Ulcer Stumps Doctors—Until They Cut Out a Wedge of Flesh](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss)
* [2025-07-13, 11:07:53](https://news.ycombinator.com/item?id=44549413) - [Thunderbird: Fluent Windows 11 Design](https://github.com/Deathbyteacup/fluentbird)
* [2025-07-13, 10:16:48](https://news.ycombinator.com/item?id=44549089) - [What&apos;s Happening to Reading?](https://www.newyorker.com/culture/open-questions/whats-happening-to-reading)
* [2025-07-13, 09:40:00](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss) - [This Glitchy, Error-Prone Tool Could Get You Deported](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss)
* [2025-07-13, 08:05:37](https://news.ycombinator.com/item?id=44548449) - [Atopile – Design circuit boards with code](https://atopile.io/atopile/introduction)
* [2025-07-13, 04:56:00](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss) - [Experts Say It is Unlikely You Will See a Moa Any Time Soon](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss)
* [2025-07-13, 00:14:00](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss) - [&apos;123456&apos; Password Exposed Chats for 64 Million McDonald&apos;s Job Applicants](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss)
* [2025-07-12, 19:29:00](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss) - [Semiconductor Industry Could Short Out as Copper Runs Dry](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss)
* [2025-07-12, 17:41:06](https://news.ycombinator.com/item?id=44543630) - [Pascal&apos;s Scams (2012)](http://unenumerated.blogspot.com/2012/07/pascals-scams.html)
* [2025-07-12, 17:08:57](https://news.ycombinator.com/item?id=44543386) - [Documenting what you&apos;re willing to support (and not)](https://rachelbythebay.com/w/2025/07/07/support/)
* [2025-07-12, 14:45:00](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss) - [70,000 Years Ago Humans Underwent A Major Shift – That’s Why We Exist ](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss)
* [2025-07-12, 12:43:12](https://news.ycombinator.com/item?id=44541662) - [MARS.EXE → COM (2021)](https://chaos.if.uj.edu.pl/~wojtek/MARS.COM/)
* [2025-07-12, 10:00:00](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss) - [PerfektBlue Bluetooth Vulnerabilities Expose Millions of Vehicles to Remote Code Execution](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss)
* [2025-07-12, 05:15:00](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss) - [CEO Claims Intel No Longer In The \&quot;Top 10 Semiconductor Companies\&quot; ](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss)
* [2025-07-12, 00:31:00](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss) - [Derinkuyu: A Subterranean Marvel of Ancient Engineering with  Capacity for 20,000 Inhabitants](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss)
