# [News Summary](https://kherrick.github.io/news-summary/)

## AI, Machine Learning, and Cryptographic Advances

* [Unlike ChatGPT, Anthropic has doubled down on Artifacts](https://ben-mini.com/2025/claude-is-kicking-chatgpts-butt) - Anthropic's approach with Claude AI is challenging OpenAI's dominance by focusing on 'Artifacts,' resulting in innovative applications.

* [Mira Murati’s AI startup Thinking Machines valued at $12B in early-stage funding](https://www.reuters.com/technology/mira-muratis-ai-startup-thinking-machines-raises-2-billion-a16z-led-round-2025-07-15/) - AI luminary Mira Murati secures major funding for her startup, emphasizing cutting-edge developments.

* [The FIPS 140-3 Go Cryptographic Module](https://go.dev/blog/fips140) - Go introduces a cryptographic module compliant with FIPS 140-3, enhancing security for developers.

* [Voxtral – Frontier open source speech understanding models](https://mistral.ai/news/voxtral) - An exciting new release in open-source models focuses on speech understanding, pushing the boundaries in audio ML.

## Cybersecurity and Vulnerability Insights

* [Hackers Can Remotely Trigger the Brakes on American Trains and the Problem Has Been Ignored for Years](https://it.slashdot.org/story/25/07/15/1814234/hackers-can-remotely-trigger-the-brakes-on-american-trains-and-the-problem-has-been-ignored-for-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A startling vulnerability in American train systems poses critical safety challenges.

* [OpenAI – vulnerability responsible disclosure](https://requilence.any.org/open-ai-vulnerability-responsible-disclosure) - A report detailing OpenAI's approach to responsibly tackling disclosed vulnerabilities.

* [GPUHammer: Rowhammer attacks on GPU memories are practical](https://gpuhammer.com/) - Research unveils realistic attack vectors on GPU memory exploiting Rowhammer.

* [Hugging Face Is Hosting 5,000 Nonconsensual AI Models of Real People](https://yro.slashdot.org/story/25/07/15/1457229/hugging-face-is-hosting-5000-nonconsensual-ai-models-of-real-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Concerns rise over ethical AI practices as unauthorized models based on real people's data are hosted.

## Technology Developments and Releases

* [KDE's Android TV Alternative, Plasma Bigscreen, Rises From the Dead](https://tech.slashdot.org/story/25/07/15/1956221/kdes-android-tv-alternative-plasma-bigscreen-rises-from-the-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Plasma Bigscreen gets a reboot, offering an alternative to Android TV.

* [LibreOffice Lands Built-In Support For Bitcoin As Currency](https://linux.slashdot.org/story/25/07/15/1932202/libreoffice-lands-built-in-support-for-bitcoin-as-currency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - LibreOffice integrates Bitcoin support, marking an interesting shift toward cryptocurrency adoption.

* [Blender 4.5 LTS Released](https://tech.slashdot.org/story/25/07/15/1912208/blender-45-lts-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The latest Blender release improves LTS support and adds significant upgrades for 3D animators.

* [Compiler bootstrapping in Nixpkgs](https://blog.obsidian.systems/compiler-bootstrapping-in-nixpkgs/) - Dive into Nixpkgs advancements in reliable and repeatable compiler building as part of Nix's ecosystem.

## Science and Space

* [NIST Ion Clock Sets New Record for Most Accurate Clock in the World](https://science.slashdot.org/story/25/07/15/1735204/nist-ion-clock-sets-new-record-for-most-accurate-clock-in-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Researchers achieve unprecedented timekeeping precision with advancements in ion clock technology.

* [Princeton Study Maps 200,000 years of Human–Neanderthal Interbreeding](https://soylentnews.org/article.pl?sid=25/07/14/1758208&amp;from=rss) - New data sheds light on the genetic legacy of human and Neanderthal interactions.

* [Physicists Start To Pin Down How Stars Forge Heavy Atoms](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss) - Astrophysics research uncovers insights into nucleosynthesis processes in stars.

## Unique and Quirky Innovations

* [Snot-Filtering Tech Could Be The Answer To A Dust-Free PC](https://soylentnews.org/article.pl?sid=25/07/14/188221&amp;from=rss) - A creative approach to PC cooling borrows elements from biological systems.

* [Show HN: Shoggoth Mini – A soft tentacle robot powered by GPT-4o and RL](https://www.matthieulc.com/posts/shoggoth-mini) - Introducing GPT-powered robotics with a soft robotic tentacle design.

* [Show HN: Beyond Z²+C, Plot Any Fractal](https://www.juliascope.com/) - A groundbreaking tool enabling exploration of fractals beyond traditional limits.

## Historical and Cultural Explorations

* [Derinkuyu: A Subterranean Marvel of Ancient Engineering with Capacity for 20,000 Inhabitants](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss) - Discover the wonders of ancient engineering with the underground city of Derinkuyu.

* [1960s Schools Experiment That Created a New Alphabet and Left Thousands of Children Unable to Spell](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss) - Revisiting a radical educational experiment and its consequences.

* [The Story of Mel, A Real Programmer, Annotated (1996)](https://users.cs.utah.edu/~elb/folklore/mel-annotated/node1.html#SECTION00010000000000000000) - Annotations on one of the most iconic tales of old-school programming.

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

* [2025-07-16, 01:30:00](https://news.slashdot.org/story/25/07/16/0127216/thousands-of-afghans-secretly-moved-to-britain-after-data-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Thousands of Afghans Secretly Moved To Britain After Data Leak](https://news.slashdot.org/story/25/07/16/0127216/thousands-of-afghans-secretly-moved-to-britain-after-data-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-16, 00:46:36](https://lobste.rs/s/apenjf/openzfs_bug_ported_c) - [OpenZFS Bug Ported to C](https://flak.tedunangst.com/post/OpenZFS-Bug-Ported-to-C)
* [2025-07-16, 00:05:45](https://news.ycombinator.com/item?id=44577268) - [GPUHammer: Rowhammer attacks on GPU memories are practical](https://gpuhammer.com/)
* [2025-07-15, 23:52:16](https://lobste.rs/s/vvslmj/google_wifi_pro_glitching_from_root_el3) - [Google Wifi Pro: Glitching from Root to EL3: Part 1 - Characterization](https://raelize.com/blog/google-wifi-pro-glitching-from-root-to-el3-part-1-characterization/)
* [2025-07-15, 23:50:02](https://news.ycombinator.com/item?id=44577171) - [Unlike ChatGPT, Anthropic has doubled down on Artifacts](https://ben-mini.com/2025/claude-is-kicking-chatgpts-butt)
* [2025-07-15, 23:30:00](https://slashdot.org/story/25/07/15/2211203/anthropic-rolls-out-claude-ai-for-financial-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Rolls Out Claude AI For Financial Services](https://slashdot.org/story/25/07/15/2211203/anthropic-rolls-out-claude-ai-for-financial-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 23:29:54](https://news.ycombinator.com/item?id=44577018) - [OpenAI – vulnerability responsible disclosure](https://requilence.any.org/open-ai-vulnerability-responsible-disclosure)
* [2025-07-15, 22:50:00](https://news.slashdot.org/story/25/07/15/1922235/reddit-starts-verifying-ages-of-users-in-the-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Starts Verifying Ages of Users In the UK](https://news.slashdot.org/story/25/07/15/1922235/reddit-starts-verifying-ages-of-users-in-the-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 22:13:00](https://soylentnews.org/article.pl?sid=25/07/14/188221&amp;from=rss) - [Snot-Filtering Tech Could Be The Answer To A Dust-Free PC](https://soylentnews.org/article.pl?sid=25/07/14/188221&amp;from=rss)
* [2025-07-15, 22:10:00](https://tech.slashdot.org/story/25/07/15/1956221/kdes-android-tv-alternative-plasma-bigscreen-rises-from-the-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE&apos;s Android TV Alternative, Plasma Bigscreen, Rises From the Dead](https://tech.slashdot.org/story/25/07/15/1956221/kdes-android-tv-alternative-plasma-bigscreen-rises-from-the-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 22:07:47](https://news.ycombinator.com/item?id=44576352) - [My Family and the Flood](https://www.texasmonthly.com/news-politics/texas-flood-firsthand-account/)
* [2025-07-15, 22:03:50](https://news.ycombinator.com/item?id=44576312) - [Claude for Financial Services](https://www.anthropic.com/news/claude-for-financial-services)
* [2025-07-15, 21:30:00](https://linux.slashdot.org/story/25/07/15/1932202/libreoffice-lands-built-in-support-for-bitcoin-as-currency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LibreOffice Lands Built-In Support For Bitcoin As Currency](https://linux.slashdot.org/story/25/07/15/1932202/libreoffice-lands-built-in-support-for-bitcoin-as-currency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 21:03:50](https://news.ycombinator.com/item?id=44575794) - [Where&apos;s Firefox going next?](https://connect.mozilla.org/t5/discussions/where-s-firefox-going-next-you-tell-us/m-p/100698#M39094)
* [2025-07-15, 20:50:00](https://yro.slashdot.org/story/25/07/15/206217/us-prosecutors-close-probe-into-polymarket-betting-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Prosecutors Close Probe Into Polymarket Betting Website](https://yro.slashdot.org/story/25/07/15/206217/us-prosecutors-close-probe-into-polymarket-betting-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 20:42:49](https://news.ycombinator.com/item?id=44575607) - [The FIPS 140-3 Go Cryptographic Module](https://go.dev/blog/fips140)
* [2025-07-15, 20:31:01](https://lobste.rs/s/ppxfaq/helix_25_07_highlights) - [Helix 25.07 Highlights](https://helix-editor.com/news/release-25-07-highlights/)
* [2025-07-15, 20:10:00](https://tech.slashdot.org/story/25/07/15/1912208/blender-45-lts-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blender 4.5 LTS Released](https://tech.slashdot.org/story/25/07/15/1912208/blender-45-lts-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 20:05:35](https://lobste.rs/s/cfkz4y/compiler_bootstrapping_nixpkgs) - [Compiler bootstrapping in Nixpkgs](https://blog.obsidian.systems/compiler-bootstrapping-in-nixpkgs/)
* [2025-07-15, 19:39:47](https://lobste.rs/s/zschiu/introducing_go_cdc_chunkers_chunk) - [Introducing go-cdc-chunkers: chunk and deduplicate everything](https://plakar.io/posts/2025-07-11/introducing-go-cdc-chunkers-chunk-and-deduplicate-everything/)
* [2025-07-15, 19:35:15](https://news.ycombinator.com/item?id=44574990) - [Hierarchical Modeling (H-Nets)](https://cartesia.ai/blog/hierarchical-modeling)
* [2025-07-15, 19:30:00](https://yro.slashdot.org/story/25/07/15/194255/cloudflare-starts-blocking-pirate-sites-for-uk-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Starts Blocking Pirate Sites For UK Users](https://yro.slashdot.org/story/25/07/15/194255/cloudflare-starts-blocking-pirate-sites-for-uk-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 19:23:56](https://lobste.rs/s/dpbwfi/hazel_live_functional_programming) - [Hazel: A live functional programming environment with typed holes](https://github.com/hazelgrove/hazel)
* [2025-07-15, 19:23:07](https://news.ycombinator.com/item?id=44574864) - [Hazel: A live functional programming environment with typed holes](https://github.com/hazelgrove/hazel)
* [2025-07-15, 19:16:59](https://news.ycombinator.com/item?id=44574815) - [Helix Editor 25.07](https://helix-editor.com/news/release-25-07-highlights/)
* [2025-07-15, 18:50:00](https://it.slashdot.org/story/25/07/15/1814234/hackers-can-remotely-trigger-the-brakes-on-american-trains-and-the-problem-has-been-ignored-for-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Can Remotely Trigger the Brakes on American Trains and the Problem Has Been Ignored for Years](https://it.slashdot.org/story/25/07/15/1814234/hackers-can-remotely-trigger-the-brakes-on-american-trains-and-the-problem-has-been-ignored-for-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 18:24:51](https://news.ycombinator.com/item?id=44574318) - [Show HN: Beyond Z²+C, Plot Any Fractal](https://www.juliascope.com/)
* [2025-07-15, 18:10:00](https://tech.slashdot.org/story/25/07/15/183201/perplexity-ceo-says-tech-giants-copy-anything-thats-good?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Perplexity CEO Says Tech Giants &apos;Copy Anything That&apos;s Good&apos;](https://tech.slashdot.org/story/25/07/15/183201/perplexity-ceo-says-tech-giants-copy-anything-thats-good?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 17:50:04](https://lobste.rs/s/deydno/encrypting_files_with_passkeys_age) - [Encrypting Files with Passkeys and age](https://words.filippo.io/passkey-encryption/)
* [2025-07-15, 17:48:35](https://news.ycombinator.com/item?id=44573887) - [Designing for the Eye: Optical corrections in architecture and typography](https://www.nubero.ch/blog/015/)
* [2025-07-15, 17:34:00](https://science.slashdot.org/story/25/07/15/1735204/nist-ion-clock-sets-new-record-for-most-accurate-clock-in-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NIST Ion Clock Sets New Record for Most Accurate Clock in the World](https://science.slashdot.org/story/25/07/15/1735204/nist-ion-clock-sets-new-record-for-most-accurate-clock-in-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 17:30:55](https://lobste.rs/s/wajnta/wikipedia_outage_report_for_may_s_pope) - [Wikipedia outage report for May&apos;s Pope traffic spike](https://wikitech.wikimedia.org/wiki/Incidents/2025-05-08_Papal_announcement_traffic_surge)
* [2025-07-15, 17:24:00](https://soylentnews.org/article.pl?sid=25/07/14/1758208&amp;from=rss) - [Princeton Study Maps 200,000 years of Human–Neanderthal Interbreeding](https://soylentnews.org/article.pl?sid=25/07/14/1758208&amp;from=rss)
* [2025-07-15, 17:19:57](https://news.ycombinator.com/item?id=44573574) - [Mira Murati’s AI startup Thinking Machines valued at $12B in early-stage funding](https://www.reuters.com/technology/mira-muratis-ai-startup-thinking-machines-raises-2-billion-a16z-led-round-2025-07-15/)
* [2025-07-15, 17:05:39](https://news.ycombinator.com/item?id=44573409) - [To be a better programmer, write little proofs in your head](https://the-nerve-blog.ghost.io/to-be-a-better-programmer-write-little-proofs-in-your-head/)
* [2025-07-15, 17:00:04](https://news.ycombinator.com/item?id=44573320) - [CoinTracker (YC W18) is hiring to solve crypto taxes and accounting (remote)](https://news.ycombinator.com/item?id=44573320)
* [2025-07-15, 16:49:06](https://news.ycombinator.com/item?id=44573195) - [Reflections on OpenAI](https://calv.info/openai-reflections)
* [2025-07-15, 16:45:00](https://developers.slashdot.org/story/25/07/15/1641209/nearly-3-out-of-4-oracle-java-users-say-theyve-been-audited-in-the-past-3-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nearly 3 Out of 4 Oracle Java Users Say They&apos;ve Been Audited in the Past 3 Years](https://developers.slashdot.org/story/25/07/15/1641209/nearly-3-out-of-4-oracle-java-users-say-theyve-been-audited-in-the-past-3-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 16:12:00](https://slashdot.org/story/25/07/15/1612213/young-americans-face-job-market-disconnect-as-parents-offer-outdated-career-advice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Young Americans Face Job Market Disconnect as Parents Offer Outdated Career Advice](https://slashdot.org/story/25/07/15/1612213/young-americans-face-job-market-disconnect-as-parents-offer-outdated-career-advice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 15:56:47](https://news.ycombinator.com/item?id=44572499) - [NIST ion clock sets new record for most accurate clock](https://www.nist.gov/news-events/news/2025/07/nist-ion-clock-sets-new-record-most-accurate-clock-world)
* [2025-07-15, 15:46:41](https://news.ycombinator.com/item?id=44572377) - [Show HN: Shoggoth Mini – A soft tentacle robot powered by GPT-4o and RL](https://www.matthieulc.com/posts/shoggoth-mini)
* [2025-07-15, 15:37:35](https://lobste.rs/s/lkw9ys/adding_lookbehinds_rust_lang_regex) - [Adding lookbehinds to rust-lang/regex](https://systemf.epfl.ch/blog/rust-regex-lookbehinds/)
* [2025-07-15, 15:20:00](https://yro.slashdot.org/story/25/07/15/1457229/hugging-face-is-hosting-5000-nonconsensual-ai-models-of-real-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hugging Face Is Hosting 5,000 Nonconsensual AI Models of Real People](https://yro.slashdot.org/story/25/07/15/1457229/hugging-face-is-hosting-5000-nonconsensual-ai-models-of-real-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 15:05:55](https://lobste.rs/s/c4yg4y/distributed_systems_reliability) - [A distributed systems reliability glossary](https://antithesis.com/resources/reliability_glossary/)
* [2025-07-15, 15:05:26](https://lobste.rs/s/ouvq8x/poor_man_s_bitemporal_data_system_sqlite) - [Poor man&apos;s bitemporal data system in SQLite and Clojure](https://www.evalapply.org/posts/poor-mans-time-oriented-data-system/index.html)
* [2025-07-15, 14:53:54](https://lobste.rs/s/xl4arr/sound_inevitability) - [The sound of inevitability](https://tomrenner.com/posts/llm-inevitabilism/)
* [2025-07-15, 14:47:02](https://news.ycombinator.com/item?id=44571692) - [Voxtral – Frontier open source speech understanding models](https://mistral.ai/news/voxtral)
* [2025-07-15, 14:44:00](https://slashdot.org/story/25/07/15/1444226/candy-crush-maker-king-lays-off-200-staff-replacing-many-with-ai-tools-they-built?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Candy Crush-Maker King Lays Off 200 Staff, Replacing Many With AI Tools They Built](https://slashdot.org/story/25/07/15/1444226/candy-crush-maker-king-lays-off-200-staff-replacing-many-with-ai-tools-they-built?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 13:42:42](https://lobste.rs/s/pvbjui/death_by_thousand_slops) - [Death by a thousand slops](https://daniel.haxx.se/blog/2025/07/14/death-by-a-thousand-slops/)
* [2025-07-15, 13:06:39](https://lobste.rs/s/r5omhr/openzfs_bug_ported_zig) - [OpenZFS Bug Ported to Zig](https://andrewkelley.me/post/openzfs-bug-ported-zig.html)
* [2025-07-15, 12:45:00](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss) - [AI Therapy Bots Fuel Delusions and Give Dangerous Advice, Stanford Study Finds](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss)
* [2025-07-15, 11:35:03](https://lobste.rs/s/lnn00p/how_get_foreign_keys_horribly_wrong) - [How to Get Foreign Keys Horribly Wrong](https://hakibenita.com/django-foreign-keys)
* [2025-07-15, 09:45:03](https://lobste.rs/s/f3vn7f/game_trees_hub) - [Game of Trees Hub](https://gothub.org/)
* [2025-07-15, 09:35:16](https://lobste.rs/s/kssozd/how_i_keep_up_with_ai_progress) - [How I keep up with AI progress](https://blog.nilenso.com/blog/2025/06/23/how-i-keep-up-with-ai-progress/)
* [2025-07-15, 08:13:21](https://lobste.rs/s/goyein/automerge_3_0) - [Automerge 3.0](https://automerge.github.io/blog/automerge-3/)
* [2025-07-15, 08:07:51](https://lobste.rs/s/87dpsv/trying_guix_nixer_s_impressions) - [Trying Guix: A Nixer&apos;s Impressions](https://tazj.in/blog/trying-guix)
* [2025-07-15, 08:02:00](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss) - [Core Ultra 5 245HX Blasts Past Desktop Counterpart in PassMark](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss)
* [2025-07-15, 06:41:46](https://lobste.rs/s/pohsem/initial_implementation_experimental_c) - [Initial implementation of the experimental C++ Lifetime Safety Analysis (-Wexperimental-lifetime-safety) has just landed in Clang](https://discourse.llvm.org/t/announcing-the-lifetime-safety-breakout-group/87333)
* [2025-07-15, 05:45:28](https://lobste.rs/s/d4egpg/bedrock_tiny_portable_8_bit_virtual) - [Bedrock: A tiny, portable 8-bit virtual computer (uxn fork)](https://benbridle.com/projects/bedrock.html)
* [2025-07-15, 04:35:35](https://news.ycombinator.com/item?id=44567857) - [LLM Inevitabilism](https://tomrenner.com/posts/llm-inevitabilism/)
* [2025-07-15, 03:45:05](https://lobste.rs/s/jwmx9x/diving_into_plasma_bigscreen) - [Diving into Plasma Bigscreen](https://espi.dev/posts/2025/07/plasma-bigscreen/)
* [2025-07-15, 03:15:00](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss) - [Physicists Start To Pin Down How Stars Forge Heavy Atoms](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss)
* [2025-07-14, 23:30:00](https://soylentnews.org/article.pl?sid=25/07/13/232209&amp;from=rss) - [Supporting Mission-Driven Space Innovation, For Earth And Beyond](https://soylentnews.org/article.pl?sid=25/07/13/232209&amp;from=rss)
* [2025-07-14, 18:45:00](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss) - [China Claims Big Advances In Classical And Quantum Computers](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss)
* [2025-07-14, 18:42:16](https://lobste.rs/s/alrfrd/best_c_library) - [The Best C++ Library](https://mcyoung.xyz/2025/07/14/best/#fnref:terrible-people)
* [2025-07-14, 17:30:20](https://lobste.rs/s/1l3beg/panasonic_openbsd_3) - [Panasonic + OpenBSD = &lt;3](https://x61.sh/log/2025/07/03072025160538-panasonic_openbsd.html)
* [2025-07-14, 17:01:08](https://lobste.rs/s/qhgjks/using_elm_2025) - [Using Elm in 2025](https://engagesoftware.com/news/post/7033/using-elm-in-2025)
* [2025-07-14, 16:31:37](https://news.ycombinator.com/item?id=44562084) - [Encrypting files with passkeys and age](https://words.filippo.io/passkey-encryption/)
* [2025-07-14, 14:00:00](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss) - [AMD Discloses New CPU Flaws that can Enable Data Leaks via Timing Attacks](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss)
* [2025-07-14, 09:15:00](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss) - [&apos;Positive Review Only&apos;: Researchers Hide AI Prompts in Papers](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss)
* [2025-07-14, 04:30:00](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss) - [The Foolproof Way to Win Any Lottery, According to Maths](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss)
* [2025-07-13, 23:45:00](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss) - [1960s Schools Experiment That Created a New Alphabet and Left Thousands of Children Unable to Spell](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss)
* [2025-07-13, 19:15:00](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss) - [Zombie Fabs Plague China&apos;s Chipmaking Ambitions, Failures Burning Tens of Billions of Dollars](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss)
* [2025-07-13, 14:28:00](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss) - [Man&apos;s Ghastly Festering Ulcer Stumps Doctors—Until They Cut Out a Wedge of Flesh](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss)
* [2025-07-13, 09:40:00](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss) - [This Glitchy, Error-Prone Tool Could Get You Deported](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss)
* [2025-07-13, 08:59:42](https://news.ycombinator.com/item?id=44548701) - [What Was Cyberpunk? In Memoriam: 1980-2020 (2020)](https://forums.insertcredit.com/t/what-was-cyberpunk-in-memoriam-1980-2020/1721)
* [2025-07-13, 08:39:47](https://news.ycombinator.com/item?id=44548620) - [Lorem Gibson](http://loremgibson.com/)
* [2025-07-13, 04:56:00](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss) - [Experts Say It is Unlikely You Will See a Moa Any Time Soon](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss)
* [2025-07-13, 00:14:00](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss) - [&apos;123456&apos; Password Exposed Chats for 64 Million McDonald&apos;s Job Applicants](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss)
* [2025-07-13, 00:06:20](https://news.ycombinator.com/item?id=44546321) - [Petabit-class transmission over &gt; 1000 km using standard 19-core optical fiber](https://www.nict.go.jp/en/press/2025/05/29-1.html)
* [2025-07-12, 21:45:20](https://news.ycombinator.com/item?id=44545463) - [Easy dynamic dispatch using GLIBC Hardware Capabilities](https://www.kvr.at/posts/easy-dynamic-dispatch-using-GLIBC-hardware-capabilities/)
* [2025-07-12, 20:50:56](https://news.ycombinator.com/item?id=44545050) - [Mostly dead influential programming languages (2020)](https://www.hillelwayne.com/post/influential-dead-languages/)
* [2025-07-12, 19:29:00](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss) - [Semiconductor Industry Could Short Out as Copper Runs Dry](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss)
* [2025-07-12, 14:45:00](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss) - [70,000 Years Ago Humans Underwent A Major Shift – That’s Why We Exist ](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss)
* [2025-07-12, 14:42:04](https://news.ycombinator.com/item?id=44542408) - [The Story of Mel, A Real Programmer, Annotated (1996)](https://users.cs.utah.edu/~elb/folklore/mel-annotated/node1.html#SECTION00010000000000000000)
* [2025-07-12, 14:06:30](https://news.ycombinator.com/item?id=44542164) - [How Culture Is Made](https://www.metalabel.com/studio/release-strategies/how-culture-is-made)
* [2025-07-12, 12:09:40](https://news.ycombinator.com/item?id=44541509) - [Is there a literacy crisis?](https://www.vox.com/culture/419070/childhood-literacy-college-students-reading-crisis-ai)
* [2025-07-12, 10:56:24](https://news.ycombinator.com/item?id=44541088) - [Running a million-board chess MMO in a single process](https://eieio.games/blog/a-million-realtime-chess-boards-in-a-single-process/)
* [2025-07-12, 10:00:00](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss) - [PerfektBlue Bluetooth Vulnerabilities Expose Millions of Vehicles to Remote Code Execution](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss)
* [2025-07-12, 05:15:00](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss) - [CEO Claims Intel No Longer In The \&quot;Top 10 Semiconductor Companies\&quot; ](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss)
* [2025-07-12, 00:31:00](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss) - [Derinkuyu: A Subterranean Marvel of Ancient Engineering with  Capacity for 20,000 Inhabitants](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss)
