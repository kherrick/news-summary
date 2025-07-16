# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [Tilck: A Tiny Linux-Compatible Kernel](https://github.com/vvaltchev/tilck) - A lightweight and Linux-compatible kernel designed for learning and development of operating systems.

* [Cppyy: Automatic Python-C++ Bindings](https://cppyy.readthedocs.io/en/latest/) - A seamless solution connecting Python and C++ through low-overhead bindings.

* [Nextflow: System for creating scalable, portable, reproducible workflows](https://github.com/nextflow-io/nextflow) - A powerful platform facilitating bioinformatics workflow reproducibility and scalability.

* [Geomys, a blueprint for a sustainable open source maintenance firm](https://words.filippo.io/geomys/) - An exploration of a potential model for maintaining sustainable open-source operations.

## Cybersecurity and Exploits

* [Let Me Cook You a Vulnerability: Exploiting the Thermomix TM5](https://www.synacktiv.com/en/publications/let-me-cook-you-a-vulnerability-exploiting-the-thermomix-tm5) - Researchers delve into vulnerabilities found in kitchen appliances.

* [GPUHammer: Rowhammer attacks on GPU memories are practical](https://gpuhammer.com/) - A study on the rising threat of Rowhammer attacks against GPU memory systems.

* [North Korean XORIndex malware hidden in 67 malicious npm packages](https://www.bleepingcomputer.com/news/security/north-korean-xorindex-malware-hidden-in-67-malicious-npm-packages/) - Details on malicious npm packages spreading North Korean malware.

## AI Developments

* [Music Insiders Call for Warning Labels After AI-Generated Band Gets 1 Million Plays On Spotify](https://entertainment.slashdot.org/story/25/07/16/008254/music-insiders-call-for-warning-labels-after-ai-generated-band-gets-1-million-plays-on-spotify?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A debate on transparency in AI-generated music after a notable milestone.

* [Gauntlet AI (YC S17): All expenses paid training in AI and $200k+job](https://www.crossover.com/jobs/5597/gauntlet-ai/ai-challenger/apply) - Introducing a promising AI training initiative with a lucrative outcome.

* [Anthropic Rolls Out Claude AI For Financial Services](https://slashdot.org/story/25/07/15/2211203/anthropic-rolls-out-claude-ai-for-financial-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A new AI designed to cater specifically to financial services.

## Space and Science

* [Congress moves to reject bulk of White House's proposed NASA cuts](https://arstechnica.com/space/2025/07/congress-moves-to-reject-bulk-of-white-houses-proposed-nasa-cuts/) - Updates on funding deliberations for NASA's cutting-edge projects.

* [NIST Ion Clock Sets New Record for Most Accurate Clock in the World](https://science.slashdot.org/story/25/07/15/1735204/nist-ion-clock-sets-new-record-for-most-accurate-clock-in-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Breaking records for precision with NIST's latest developments.

## Open Source and Software

* [Janet Feature Demos](https://github.com/sogaiu/janet-features-demos) - A demonstration of the advanced capabilities within the Janet language.

* [OpenZFS Bug Ported to Zig](https://andrewkelley.me/post/openzfs-bug-ported-zig.html) - Insights on debugging and transitioning vulnerabilities across programming languages.

* [Helix 25.07 Highlights](https://helix-editor.com/news/release-25-07-highlights/) - New features and updates in the popular text editor Helix.

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

* [2025-07-16, 13:00:00](https://hardware.slashdot.org/story/25/07/16/0624242/chinese-firms-rush-for-nvidia-chips-as-us-prepares-to-lift-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Firms Rush For Nvidia Chips As US Prepares To Lift Ban](https://hardware.slashdot.org/story/25/07/16/0624242/chinese-firms-rush-for-nvidia-chips-as-us-prepares-to-lift-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 12:49:47](https://lobste.rs/s/1juicg/geomys_blueprint_for_sustainable_open) - [Geomys, a blueprint for a sustainable open source maintenance firm](https://words.filippo.io/geomys/)
* [2025-07-16, 12:39:51](https://news.ycombinator.com/item?id=44581631) - [Cppyy: Automatic Python-C++ Bindings](https://cppyy.readthedocs.io/en/latest/)
* [2025-07-16, 12:26:36](https://lobste.rs/s/zbknw2/expressive_test_assertions_without) - [Expressive test assertions without testify/assert](https://antonz.org/do-not-testify/)
* [2025-07-16, 12:02:21](https://news.ycombinator.com/item?id=44581257) - [Gauntlet AI (YC S17): All expenses paid training in AI and $200k+job](https://www.crossover.com/jobs/5597/gauntlet-ai/ai-challenger/apply)
* [2025-07-16, 11:42:17](https://news.ycombinator.com/item?id=44581098) - [Show HN: DataRamen, a Fast SQL Explorer with Automatic Joins and Data Navigation](https://dataramen.xyz/)
* [2025-07-16, 11:40:41](https://lobste.rs/s/am00km/let_me_cook_you_vulnerability_exploiting) - [Let Me Cook You a Vulnerability: Exploiting the Thermomix TM5](https://www.synacktiv.com/en/publications/let-me-cook-you-a-vulnerability-exploiting-the-thermomix-tm5)
* [2025-07-16, 10:37:08](https://news.ycombinator.com/item?id=44580682) - [Linux Reaches 5% Desktop Market Share in USA](https://ostechnix.com/linux-reaches-5-desktop-market-share-in-usa/)
* [2025-07-16, 10:00:00](https://it.slashdot.org/story/25/07/16/0618255/curl-creator-mulls-nixing-bug-bounty-awards-to-stop-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Curl Creator Mulls Nixing Bug Bounty Awards To Stop AI Slop](https://it.slashdot.org/story/25/07/16/0618255/curl-creator-mulls-nixing-bug-bounty-awards-to-stop-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 09:18:50](https://lobste.rs/s/ioznqf/reviving_genius) - [Reviving Genius](https://andrewshaw.nl/blog/reviving-genius)
* [2025-07-16, 08:18:34](https://news.ycombinator.com/item?id=44579902) - [Ukrainian hackers destroyed the IT infrastructure of Russian drone manufacturer](https://prm.ua/en/ukrainian-hackers-destroyed-the-it-infrastructure-of-a-russian-drone-manufacturer-what-is-known/)
* [2025-07-16, 07:33:46](https://lobste.rs/s/y52on2/north_korean_xorindex_malware_hidden_67) - [North Korean XORIndex malware hidden in 67 malicious npm packages](https://www.bleepingcomputer.com/news/security/north-korean-xorindex-malware-hidden-in-67-malicious-npm-packages/)
* [2025-07-16, 07:00:00](https://it.slashdot.org/story/25/07/16/0340239/ai-creeps-into-the-risk-register-for-americas-biggest-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Creeps Into the Risk Register For America&apos;s Biggest Firms](https://it.slashdot.org/story/25/07/16/0340239/ai-creeps-into-the-risk-register-for-americas-biggest-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 06:37:35](https://lobste.rs/s/r91kkb/janet_feature_demos) - [Janet Feature Demos](https://github.com/sogaiu/janet-features-demos)
* [2025-07-16, 06:32:47](https://news.ycombinator.com/item?id=44579317) - [Shipping WebGPU on Windows in Firefox 141](https://mozillagfx.wordpress.com/2025/07/15/shipping-webgpu-on-windows-in-firefox-141/)
* [2025-07-16, 05:30:52](https://news.ycombinator.com/item?id=44578997) - [Nextflow: System for creating scalable, portable, reproducible workflows](https://github.com/nextflow-io/nextflow)
* [2025-07-16, 03:50:00](https://news.ycombinator.com/item?id=44578510) - [Tilck: A Tiny Linux-Compatible Kernel](https://github.com/vvaltchev/tilck)
* [2025-07-16, 03:44:39](https://news.ycombinator.com/item?id=44578490) - [Cloudflare 1.1.1.1 Incident on July 14, 2025](https://blog.cloudflare.com/cloudflare-1-1-1-1-incident-on-july-14-2025/)
* [2025-07-16, 03:30:00](https://entertainment.slashdot.org/story/25/07/16/008254/music-insiders-call-for-warning-labels-after-ai-generated-band-gets-1-million-plays-on-spotify?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Music Insiders Call for Warning Labels After AI-Generated Band Gets 1 Million Plays On Spotify](https://entertainment.slashdot.org/story/25/07/16/008254/music-insiders-call-for-warning-labels-after-ai-generated-band-gets-1-million-plays-on-spotify?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 02:56:53](https://news.ycombinator.com/item?id=44578255) - [Congress moves to reject bulk of White House&apos;s proposed NASA cuts](https://arstechnica.com/space/2025/07/congress-moves-to-reject-bulk-of-white-houses-proposed-nasa-cuts/)
* [2025-07-16, 02:37:37](https://news.ycombinator.com/item?id=44578143) - [Six Years of Gemini](https://geminiprotocol.net/news/2025_06_20.gmi)
* [2025-07-16, 02:22:02](https://news.ycombinator.com/item?id=44578070) - [LLM Daydreaming](https://gwern.net/ai-daydreaming)
* [2025-07-16, 01:36:37](https://lobste.rs/s/fr2d8a/fips_140_3_go_cryptographic_module) - [The FIPS 140-3 Go Cryptographic Module](https://go.dev/blog/fips140)
* [2025-07-16, 01:30:00](https://news.slashdot.org/story/25/07/16/0127216/thousands-of-afghans-secretly-moved-to-britain-after-data-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Thousands of Afghans Secretly Moved To Britain After Data Leak](https://news.slashdot.org/story/25/07/16/0127216/thousands-of-afghans-secretly-moved-to-britain-after-data-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 00:46:36](https://lobste.rs/s/apenjf/openzfs_bug_ported_c) - [OpenZFS Bug Ported to C](https://flak.tedunangst.com/post/OpenZFS-Bug-Ported-to-C)
* [2025-07-16, 00:05:45](https://news.ycombinator.com/item?id=44577268) - [GPUHammer: Rowhammer attacks on GPU memories are practical](https://gpuhammer.com/)
* [2025-07-15, 23:30:00](https://slashdot.org/story/25/07/15/2211203/anthropic-rolls-out-claude-ai-for-financial-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Rolls Out Claude AI For Financial Services](https://slashdot.org/story/25/07/15/2211203/anthropic-rolls-out-claude-ai-for-financial-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 23:02:48](https://lobste.rs/s/izk0ff/shipping_webgpu_on_windows_firefox_141) - [Shipping WebGPU on Windows in Firefox 141](https://mozillagfx.wordpress.com/2025/07/15/shipping-webgpu-on-windows-in-firefox-141/)
* [2025-07-15, 22:50:00](https://news.slashdot.org/story/25/07/15/1922235/reddit-starts-verifying-ages-of-users-in-the-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Starts Verifying Ages of Users In the UK](https://news.slashdot.org/story/25/07/15/1922235/reddit-starts-verifying-ages-of-users-in-the-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 22:10:00](https://tech.slashdot.org/story/25/07/15/1956221/kdes-android-tv-alternative-plasma-bigscreen-rises-from-the-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE&apos;s Android TV Alternative, Plasma Bigscreen, Rises From the Dead](https://tech.slashdot.org/story/25/07/15/1956221/kdes-android-tv-alternative-plasma-bigscreen-rises-from-the-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 22:07:47](https://news.ycombinator.com/item?id=44576352) - [My Family and the Flood](https://www.texasmonthly.com/news-politics/texas-flood-firsthand-account/)
* [2025-07-15, 21:30:00](https://linux.slashdot.org/story/25/07/15/1932202/libreoffice-lands-built-in-support-for-bitcoin-as-currency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LibreOffice Lands Built-In Support For Bitcoin As Currency](https://linux.slashdot.org/story/25/07/15/1932202/libreoffice-lands-built-in-support-for-bitcoin-as-currency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 21:03:50](https://news.ycombinator.com/item?id=44575794) - [Where&apos;s Firefox going next?](https://connect.mozilla.org/t5/discussions/where-s-firefox-going-next-you-tell-us/m-p/100698#M39094)
* [2025-07-15, 20:50:00](https://yro.slashdot.org/story/25/07/15/206217/us-prosecutors-close-probe-into-polymarket-betting-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Prosecutors Close Probe Into Polymarket Betting Website](https://yro.slashdot.org/story/25/07/15/206217/us-prosecutors-close-probe-into-polymarket-betting-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 20:42:49](https://news.ycombinator.com/item?id=44575607) - [The FIPS 140-3 Go Cryptographic Module](https://go.dev/blog/fips140)
* [2025-07-15, 20:31:01](https://lobste.rs/s/ppxfaq/helix_25_07_highlights) - [Helix 25.07 Highlights](https://helix-editor.com/news/release-25-07-highlights/)
* [2025-07-15, 20:10:00](https://tech.slashdot.org/story/25/07/15/1912208/blender-45-lts-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blender 4.5 LTS Released](https://tech.slashdot.org/story/25/07/15/1912208/blender-45-lts-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 20:05:35](https://lobste.rs/s/cfkz4y/compiler_bootstrapping_nixpkgs) - [Compiler bootstrapping in Nixpkgs](https://blog.obsidian.systems/compiler-bootstrapping-in-nixpkgs/)
* [2025-07-15, 19:39:47](https://lobste.rs/s/zschiu/introducing_go_cdc_chunkers_chunk) - [Introducing go-cdc-chunkers: chunk and deduplicate everything](https://plakar.io/posts/2025-07-11/introducing-go-cdc-chunkers-chunk-and-deduplicate-everything/)
* [2025-07-15, 19:30:00](https://yro.slashdot.org/story/25/07/15/194255/cloudflare-starts-blocking-pirate-sites-for-uk-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Starts Blocking Pirate Sites For UK Users](https://yro.slashdot.org/story/25/07/15/194255/cloudflare-starts-blocking-pirate-sites-for-uk-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 19:23:56](https://lobste.rs/s/dpbwfi/hazel_live_functional_programming) - [Hazel: A live functional programming environment with typed holes](https://github.com/hazelgrove/hazel)
* [2025-07-15, 18:50:00](https://it.slashdot.org/story/25/07/15/1814234/hackers-can-remotely-trigger-the-brakes-on-american-trains-and-the-problem-has-been-ignored-for-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Can Remotely Trigger the Brakes on American Trains and the Problem Has Been Ignored for Years](https://it.slashdot.org/story/25/07/15/1814234/hackers-can-remotely-trigger-the-brakes-on-american-trains-and-the-problem-has-been-ignored-for-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 18:10:00](https://tech.slashdot.org/story/25/07/15/183201/perplexity-ceo-says-tech-giants-copy-anything-thats-good?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Perplexity CEO Says Tech Giants &apos;Copy Anything That&apos;s Good&apos;](https://tech.slashdot.org/story/25/07/15/183201/perplexity-ceo-says-tech-giants-copy-anything-thats-good?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 17:50:04](https://lobste.rs/s/deydno/encrypting_files_with_passkeys_age) - [Encrypting Files with Passkeys and age](https://words.filippo.io/passkey-encryption/)
* [2025-07-15, 17:34:00](https://science.slashdot.org/story/25/07/15/1735204/nist-ion-clock-sets-new-record-for-most-accurate-clock-in-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NIST Ion Clock Sets New Record for Most Accurate Clock in the World](https://science.slashdot.org/story/25/07/15/1735204/nist-ion-clock-sets-new-record-for-most-accurate-clock-in-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 17:30:55](https://lobste.rs/s/wajnta/wikipedia_outage_report_for_may_s_pope) - [Wikipedia outage report for May&apos;s Pope traffic spike](https://wikitech.wikimedia.org/wiki/Incidents/2025-05-08_Papal_announcement_traffic_surge)
* [2025-07-15, 17:05:39](https://news.ycombinator.com/item?id=44573409) - [To be a better programmer, write little proofs in your head](https://the-nerve-blog.ghost.io/to-be-a-better-programmer-write-little-proofs-in-your-head/)
* [2025-07-15, 16:49:06](https://news.ycombinator.com/item?id=44573195) - [Reflections on OpenAI](https://calv.info/openai-reflections)
* [2025-07-15, 15:56:47](https://news.ycombinator.com/item?id=44572499) - [NIST ion clock sets new record for most accurate clock](https://www.nist.gov/news-events/news/2025/07/nist-ion-clock-sets-new-record-most-accurate-clock-world)
* [2025-07-15, 15:46:41](https://news.ycombinator.com/item?id=44572377) - [Show HN: Shoggoth Mini – A soft tentacle robot powered by GPT-4o and RL](https://www.matthieulc.com/posts/shoggoth-mini)
* [2025-07-15, 15:37:35](https://lobste.rs/s/lkw9ys/adding_lookbehinds_rust_lang_regex) - [Adding lookbehinds to rust-lang/regex](https://systemf.epfl.ch/blog/rust-regex-lookbehinds/)
* [2025-07-15, 15:05:55](https://lobste.rs/s/c4yg4y/distributed_systems_reliability) - [A distributed systems reliability glossary](https://antithesis.com/resources/reliability_glossary/)
* [2025-07-15, 15:05:26](https://lobste.rs/s/ouvq8x/poor_man_s_bitemporal_data_system_sqlite) - [Poor man&apos;s bitemporal data system in SQLite and Clojure](https://www.evalapply.org/posts/poor-mans-time-oriented-data-system/index.html)
* [2025-07-15, 14:53:54](https://lobste.rs/s/xl4arr/sound_inevitability) - [The sound of inevitability](https://tomrenner.com/posts/llm-inevitabilism/)
* [2025-07-15, 13:42:42](https://lobste.rs/s/pvbjui/death_by_thousand_slops) - [Death by a thousand slops](https://daniel.haxx.se/blog/2025/07/14/death-by-a-thousand-slops/)
* [2025-07-15, 13:06:39](https://lobste.rs/s/r5omhr/openzfs_bug_ported_zig) - [OpenZFS Bug Ported to Zig](https://andrewkelley.me/post/openzfs-bug-ported-zig.html)
* [2025-07-15, 09:35:16](https://lobste.rs/s/kssozd/how_i_keep_up_with_ai_progress) - [How I keep up with AI progress](https://blog.nilenso.com/blog/2025/06/23/how-i-keep-up-with-ai-progress/)
* [2025-07-15, 08:13:21](https://lobste.rs/s/goyein/automerge_3_0) - [Automerge 3.0](https://automerge.github.io/blog/automerge-3/)
* [2025-07-15, 08:07:51](https://lobste.rs/s/87dpsv/trying_guix_nixer_s_impressions) - [Trying Guix: A Nixer&apos;s Impressions](https://tazj.in/blog/trying-guix)
* [2025-07-15, 05:45:28](https://lobste.rs/s/d4egpg/bedrock_tiny_portable_8_bit_virtual) - [Bedrock: A tiny, portable 8-bit virtual computer (uxn fork)](https://benbridle.com/projects/bedrock.html)
* [2025-07-13, 16:59:59](https://news.ycombinator.com/item?id=44551777) - [Algorithms for making interesting organic simulations](https://bleuje.com/physarum-explanation/)
* [2025-07-13, 15:35:49](https://news.ycombinator.com/item?id=44551157) - [The beauty entrepreneur who made the Jheri curl a sensation](https://thehustle.co/originals/the-beauty-entrepreneur-who-made-the-jheri-curl-a-sensation)
* [2025-07-13, 15:08:23](https://news.ycombinator.com/item?id=44550967) - [Pixel Piranhas](https://rybakov.com/blog/pixel_piranhas/)
* [2025-07-13, 11:07:53](https://news.ycombinator.com/item?id=44549413) - [Thunderbird: Fluent Windows 11 Design](https://github.com/Deathbyteacup/fluentbird)
* [2025-07-12, 20:50:56](https://news.ycombinator.com/item?id=44545050) - [Mostly dead influential programming languages (2020)](https://www.hillelwayne.com/post/influential-dead-languages/)
* [2025-07-12, 17:41:06](https://news.ycombinator.com/item?id=44543630) - [Pascal&apos;s Scams (2012)](http://unenumerated.blogspot.com/2012/07/pascals-scams.html)
* [2025-07-12, 17:08:57](https://news.ycombinator.com/item?id=44543386) - [Documenting what you&apos;re willing to support (and not)](https://rachelbythebay.com/w/2025/07/07/support/)
* [2025-07-12, 14:42:04](https://news.ycombinator.com/item?id=44542408) - [The Story of Mel, A Real Programmer, Annotated (1996)](https://users.cs.utah.edu/~elb/folklore/mel-annotated/node1.html#SECTION00010000000000000000)
* [2025-07-12, 12:43:12](https://news.ycombinator.com/item?id=44541662) - [MARS.EXE → COM (2021)](https://chaos.if.uj.edu.pl/~wojtek/MARS.COM/)
* [2025-07-12, 10:56:24](https://news.ycombinator.com/item?id=44541088) - [Running a million-board chess MMO in a single process](https://eieio.games/blog/a-million-realtime-chess-boards-in-a-single-process/)
