# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Innovations

* [LibreOffice Lands Built-In Support For Bitcoin As Currency](https://linux.slashdot.org/story/25/07/15/1932202/libreoffice-lands-built-in-support-for-bitcoin-as-currency?utm_source=rss1.0mainlinkanon&utm_medium=feed) - LibreOffice integrates Bitcoin currency support to meet digital economy demands.

* [Blender 4.5 LTS Released](https://www.blender.org/download/releases/4-5/) - Blender's latest version improves long-term support and expands 3D graphics capabilities.

* [Compiler bootstrapping in Nixpkgs](https://blog.obsidian.systems/compiler-bootstrapping-in-nixpkgs/) - A technical dive into compiler bootstrapping processes in the Nixpkgs ecosystem.

* [Introducing go-cdc-chunkers: chunk and deduplicate everything](https://plakar.io/posts/2025-07-11/introducing-go-cdc-chunkers-chunk-and-deduplicate-everything/) - A new tool for efficient data chunking and deduplication.

* [Helix 25.07 Highlights](https://helix-editor.com/news/release-25-07-highlights/) - Updates on features and improvements in the Helix text editor.

* [Hazel: A live functional programming environment with typed holes](https://github.com/hazelgrove/hazel) - Explore Hazel, a functional programming platform with innovative typing capabilities.

## Data Privacy and Cybersecurity

* [Hackers Can Remotely Trigger the Brakes on American Trains and the Problem Has Been Ignored for Years](https://it.slashdot.org/story/25/07/15/1814234/hackers-can-remotely-trigger-the-brakes-on-american-trains-and-the-problem-has-been-ignored-for-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - This report highlights critical vulnerabilities in the American railway system.

* [Cloudflare Starts Blocking Pirate Sites For UK Users](https://yro.slashdot.org/story/25/07/15/194255/cloudflare-starts-blocking-pirate-sites-for-uk-users?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Cloudflare enforces new UK policies to curb content piracy.

* [Hugging Face Is Hosting 5,000 Nonconsensual AI Models of Real People](https://yro.slashdot.org/story/25/07/15/1457229/hugging-face-is-hosting-5000-nonconsensual-ai-models-of-real-people?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Allegations surface about misuse of AI technology hosted on Hugging Face.

* [Encrypting Files with Passkeys and Age](https://words.filippo.io/passkey-encryption/) - A comprehensive look at modern encryption methodologies focusing on passkeys and 'age'.

## Scientific and Technological Achievements

* [NIST Ion Clock Sets New Record for Most Accurate Clock in the World](https://science.slashdot.org/story/25/07/15/1735204/nist-ion-clock-sets-new-record-for-most-accurate-clock-in-the-world?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A groundbreaking advancement in precision timekeeping.

* [Japan Sets New Internet Speed Record, Surpassing Average US Broadband Speeds By 4 Million Times](https://tech.slashdot.org/story/25/07/14/2330258/japan-sets-new-internet-speed-record-surpassing-average-us-broadband-speeds-by-4-million-times?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A monumental leap in global internet connectivity speed.

* [LIGO Detects Most Massive Black Hole Merger to Date](https://science.slashdot.org/story/25/07/14/2319237/ligo-detects-most-massive-black-hole-merger-to-date?utm_source=rss1.0mainlinkanon&utm_medium=feed) - LIGO reveals details of its most significant black hole observation yet.

## Emerging Issues in the AI and Tech Landscape

* [US Government announces $200M Grok contract a week after 'MechaHitler'](https://www.theverge.com/news/706855/grok-mechahitler-xai-defense-department-contract) - Controversy surrounds a major US defense contract involving X.AI's Grok.

* [Perplexity CEO Says Tech Giants 'Copy Anything That's Good'](https://tech.slashdot.org/story/25/07/15/183201/perplexity-ceo-says-tech-giants-copy-anything-thats-good?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Tech leaders discuss the rapid mimicking of innovation by industry giants.

* [AI Therapy Bots Fuel Delusions and Give Dangerous Advice, Stanford Study Finds](https://soylentnews.org/article.pl?sid=25/07/14/1740236&from=rss) - Research reveals the potential harm of AI-powered mental health tools.

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

* [2025-07-15, 21:30:00](https://linux.slashdot.org/story/25/07/15/1932202/libreoffice-lands-built-in-support-for-bitcoin-as-currency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LibreOffice Lands Built-In Support For Bitcoin As Currency](https://linux.slashdot.org/story/25/07/15/1932202/libreoffice-lands-built-in-support-for-bitcoin-as-currency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 21:29:16](https://news.ycombinator.com/item?id=44575998) - [US Government announces $200M Grok contract a week after &apos;MechaHitler&apos;](https://www.theverge.com/news/706855/grok-mechahitler-xai-defense-department-contract)
* [2025-07-15, 21:03:50](https://news.ycombinator.com/item?id=44575794) - [Where&apos;s Firefox Going Next?](https://connect.mozilla.org/t5/discussions/where-s-firefox-going-next-you-tell-us/m-p/100698#M39094)
* [2025-07-15, 20:50:00](https://yro.slashdot.org/story/25/07/15/206217/us-prosecutors-close-probe-into-polymarket-betting-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Prosecutors Close Probe Into Polymarket Betting Website](https://yro.slashdot.org/story/25/07/15/206217/us-prosecutors-close-probe-into-polymarket-betting-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 20:31:01](https://lobste.rs/s/ppxfaq/helix_25_07_highlights) - [Helix 25.07 Highlights](https://helix-editor.com/news/release-25-07-highlights/)
* [2025-07-15, 20:10:00](https://tech.slashdot.org/story/25/07/15/1912208/blender-45-lts-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blender 4.5 LTS Released](https://tech.slashdot.org/story/25/07/15/1912208/blender-45-lts-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 20:05:35](https://lobste.rs/s/cfkz4y/compiler_bootstrapping_nixpkgs) - [Compiler bootstrapping in Nixpkgs](https://blog.obsidian.systems/compiler-bootstrapping-in-nixpkgs/)
* [2025-07-15, 19:39:47](https://lobste.rs/s/zschiu/introducing_go_cdc_chunkers_chunk) - [Introducing go-cdc-chunkers: chunk and deduplicate everything](https://plakar.io/posts/2025-07-11/introducing-go-cdc-chunkers-chunk-and-deduplicate-everything/)
* [2025-07-15, 19:35:15](https://news.ycombinator.com/item?id=44574990) - [Hierarchical Modeling (H-Nets)](https://cartesia.ai/blog/hierarchical-modeling)
* [2025-07-15, 19:30:00](https://yro.slashdot.org/story/25/07/15/194255/cloudflare-starts-blocking-pirate-sites-for-uk-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Starts Blocking Pirate Sites For UK Users](https://yro.slashdot.org/story/25/07/15/194255/cloudflare-starts-blocking-pirate-sites-for-uk-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 19:27:19](https://news.ycombinator.com/item?id=44574905) - [Human Stigmergy: The world is my task list](https://aethermug.com/posts/human-stigmergy)
* [2025-07-15, 19:23:56](https://lobste.rs/s/dpbwfi/hazel_live_functional_programming) - [Hazel: A live functional programming environment with typed holes](https://github.com/hazelgrove/hazel)
* [2025-07-15, 19:23:07](https://news.ycombinator.com/item?id=44574864) - [Hazel: A live functional programming environment with typed holes](https://github.com/hazelgrove/hazel)
* [2025-07-15, 19:16:59](https://news.ycombinator.com/item?id=44574815) - [Helix Editor 25.07](https://helix-editor.com/news/release-25-07-highlights/)
* [2025-07-15, 19:13:42](https://news.ycombinator.com/item?id=44574786) - [Underwriting Superintelligence](https://underwriting-superintelligence.com/)
* [2025-07-15, 18:50:00](https://it.slashdot.org/story/25/07/15/1814234/hackers-can-remotely-trigger-the-brakes-on-american-trains-and-the-problem-has-been-ignored-for-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Can Remotely Trigger the Brakes on American Trains and the Problem Has Been Ignored for Years](https://it.slashdot.org/story/25/07/15/1814234/hackers-can-remotely-trigger-the-brakes-on-american-trains-and-the-problem-has-been-ignored-for-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 18:24:51](https://news.ycombinator.com/item?id=44574318) - [Show HN: Beyond Z²+C, Plot Any Fractal](https://www.juliascope.com/)
* [2025-07-15, 18:14:51](https://news.ycombinator.com/item?id=44574204) - [Voxtral-Mini-3B-2507 – Open source speech understanding model](https://huggingface.co/mistralai/Voxtral-Mini-3B-2507)
* [2025-07-15, 18:10:00](https://tech.slashdot.org/story/25/07/15/183201/perplexity-ceo-says-tech-giants-copy-anything-thats-good?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Perplexity CEO Says Tech Giants &apos;Copy Anything That&apos;s Good&apos;](https://tech.slashdot.org/story/25/07/15/183201/perplexity-ceo-says-tech-giants-copy-anything-thats-good?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 18:05:21](https://news.ycombinator.com/item?id=44574095) - [Encrypting Files with Passkeys and Age](https://words.filippo.io/passkey-encryption/)
* [2025-07-15, 17:50:04](https://lobste.rs/s/deydno/encrypting_files_with_passkeys_age) - [Encrypting Files with Passkeys and age](https://words.filippo.io/passkey-encryption/)
* [2025-07-15, 17:48:35](https://news.ycombinator.com/item?id=44573887) - [Designing for the Eye: Optical Corrections in Architecture and Typography](https://www.nubero.ch/blog/015/)
* [2025-07-15, 17:35:42](https://news.ycombinator.com/item?id=44573752) - [KDE&apos;s official Roku/Android TV alternative is back from the dead](https://www.neowin.net/news/kdes-android-tv-alternative-plasma-bigscreen-rises-from-the-dead-with-a-better-ui/)
* [2025-07-15, 17:34:00](https://science.slashdot.org/story/25/07/15/1735204/nist-ion-clock-sets-new-record-for-most-accurate-clock-in-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NIST Ion Clock Sets New Record for Most Accurate Clock in the World](https://science.slashdot.org/story/25/07/15/1735204/nist-ion-clock-sets-new-record-for-most-accurate-clock-in-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 17:30:55](https://lobste.rs/s/wajnta/wikipedia_outage_report_for_may_s_pope) - [Wikipedia outage report for May&apos;s Pope traffic spike](https://wikitech.wikimedia.org/wiki/Incidents/2025-05-08_Papal_announcement_traffic_surge)
* [2025-07-15, 17:24:00](https://soylentnews.org/article.pl?sid=25/07/14/1758208&amp;from=rss) - [Princeton Study Maps 200,000 years of Human–Neanderthal Interbreeding](https://soylentnews.org/article.pl?sid=25/07/14/1758208&amp;from=rss)
* [2025-07-15, 17:05:39](https://news.ycombinator.com/item?id=44573409) - [To be a better programmer, write little proofs in your head](https://the-nerve-blog.ghost.io/to-be-a-better-programmer-write-little-proofs-in-your-head/)
* [2025-07-15, 17:00:04](https://news.ycombinator.com/item?id=44573320) - [CoinTracker (YC W18) is hiring to solve crypto taxes and accounting (remote)](https://news.ycombinator.com/item?id=44573320)
* [2025-07-15, 16:49:06](https://news.ycombinator.com/item?id=44573195) - [Reflections on OpenAI](https://calv.info/openai-reflections)
* [2025-07-15, 16:45:00](https://developers.slashdot.org/story/25/07/15/1641209/nearly-3-out-of-4-oracle-java-users-say-theyve-been-audited-in-the-past-3-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nearly 3 Out of 4 Oracle Java Users Say They&apos;ve Been Audited in the Past 3 Years](https://developers.slashdot.org/story/25/07/15/1641209/nearly-3-out-of-4-oracle-java-users-say-theyve-been-audited-in-the-past-3-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 16:12:00](https://slashdot.org/story/25/07/15/1612213/young-americans-face-job-market-disconnect-as-parents-offer-outdated-career-advice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Young Americans Face Job Market Disconnect as Parents Offer Outdated Career Advice](https://slashdot.org/story/25/07/15/1612213/young-americans-face-job-market-disconnect-as-parents-offer-outdated-career-advice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 15:59:04](https://news.ycombinator.com/item?id=44572527) - [What caused the &apos;baby boom&apos;? What would it take to have another?](https://www.derekthompson.org/p/what-caused-the-baby-boom-what-would)
* [2025-07-15, 15:56:47](https://news.ycombinator.com/item?id=44572499) - [NIST Ion Clock Sets New Record for Most Accurate Clock in the World](https://www.nist.gov/news-events/news/2025/07/nist-ion-clock-sets-new-record-most-accurate-clock-world)
* [2025-07-15, 15:46:41](https://news.ycombinator.com/item?id=44572377) - [Show HN: Shoggoth Mini – A soft tentacle robot powered by GPT-4o and RL](https://www.matthieulc.com/posts/shoggoth-mini)
* [2025-07-15, 15:37:35](https://lobste.rs/s/lkw9ys/adding_lookbehinds_rust_lang_regex) - [Adding lookbehinds to rust-lang/regex](https://systemf.epfl.ch/blog/rust-regex-lookbehinds/)
* [2025-07-15, 15:37:15](https://news.ycombinator.com/item?id=44572273) - [Adding lookbehinds to rust-lang/regex](https://systemf.epfl.ch/blog/rust-regex-lookbehinds/)
* [2025-07-15, 15:20:00](https://yro.slashdot.org/story/25/07/15/1457229/hugging-face-is-hosting-5000-nonconsensual-ai-models-of-real-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hugging Face Is Hosting 5,000 Nonconsensual AI Models of Real People](https://yro.slashdot.org/story/25/07/15/1457229/hugging-face-is-hosting-5000-nonconsensual-ai-models-of-real-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 15:06:44](https://news.ycombinator.com/item?id=44571917) - [Blender 4.5 LTS Released](https://www.blender.org/download/releases/4-5/)
* [2025-07-15, 15:05:55](https://lobste.rs/s/c4yg4y/distributed_systems_reliability) - [A distributed systems reliability glossary](https://antithesis.com/resources/reliability_glossary/)
* [2025-07-15, 15:05:26](https://lobste.rs/s/ouvq8x/poor_man_s_bitemporal_data_system_sqlite) - [Poor man&apos;s bitemporal data system in SQLite and Clojure](https://www.evalapply.org/posts/poor-mans-time-oriented-data-system/index.html)
* [2025-07-15, 14:53:54](https://lobste.rs/s/xl4arr/sound_inevitability) - [The sound of inevitability](https://tomrenner.com/posts/llm-inevitabilism/)
* [2025-07-15, 14:44:00](https://slashdot.org/story/25/07/15/1444226/candy-crush-maker-king-lays-off-200-staff-replacing-many-with-ai-tools-they-built?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Candy Crush-Maker King Lays Off 200 Staff, Replacing Many With AI Tools They Built](https://slashdot.org/story/25/07/15/1444226/candy-crush-maker-king-lays-off-200-staff-replacing-many-with-ai-tools-they-built?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 14:33:55](https://news.ycombinator.com/item?id=44571563) - [Cloudflare starts blocking pirate sites for UK users](https://torrentfreak.com/cloudflare-starts-blocking-pirate-sites-for-uk-users-thats-a-pretty-big-deal-250715/)
* [2025-07-15, 14:00:00](https://slashdot.org/story/25/07/15/1345208/microsoft-uses-chinese-engineers-to-maintain-defense-department-systems-under-minimal-us-oversight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Uses Chinese Engineers To Maintain Defense Department Systems Under Minimal US Oversight](https://slashdot.org/story/25/07/15/1345208/microsoft-uses-chinese-engineers-to-maintain-defense-department-systems-under-minimal-us-oversight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 13:42:42](https://lobste.rs/s/pvbjui/death_by_thousand_slops) - [Death by a thousand slops](https://daniel.haxx.se/blog/2025/07/14/death-by-a-thousand-slops/)
* [2025-07-15, 13:11:03](https://lobste.rs/s/8lqcxc/packages_proxies) - [Packages proxies](https://blog.garambrogne.net/packages-proxies-en.html)
* [2025-07-15, 13:06:39](https://lobste.rs/s/r5omhr/openzfs_bug_ported_zig) - [OpenZFS Bug Ported to Zig](https://andrewkelley.me/post/openzfs-bug-ported-zig.html)
* [2025-07-15, 13:00:00](https://hardware.slashdot.org/story/25/07/14/2337208/coreweave-data-center-to-double-citys-power-needs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CoreWeave Data Center To Double City&apos;s Power Needs](https://hardware.slashdot.org/story/25/07/14/2337208/coreweave-data-center-to-double-citys-power-needs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 12:45:00](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss) - [AI Therapy Bots Fuel Delusions and Give Dangerous Advice, Stanford Study Finds](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss)
* [2025-07-15, 11:35:03](https://lobste.rs/s/lnn00p/how_get_foreign_keys_horribly_wrong) - [How to Get Foreign Keys Horribly Wrong](https://hakibenita.com/django-foreign-keys)
* [2025-07-15, 11:29:02](https://news.ycombinator.com/item?id=44570048) - [Show HN: We made our own inference engine for Apple Silicon](https://github.com/trymirai/uzu)
* [2025-07-15, 10:00:00](https://tech.slashdot.org/story/25/07/14/2330258/japan-sets-new-internet-speed-record-surpassing-average-us-broadband-speeds-by-4-million-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Sets New Internet Speed Record, Surpassing Average US Broadband Speeds By 4 Million Times](https://tech.slashdot.org/story/25/07/14/2330258/japan-sets-new-internet-speed-record-surpassing-average-us-broadband-speeds-by-4-million-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 09:45:03](https://lobste.rs/s/f3vn7f/game_trees_hub) - [Game of Trees Hub](https://gothub.org/)
* [2025-07-15, 09:35:16](https://lobste.rs/s/kssozd/how_i_keep_up_with_ai_progress) - [How I keep up with AI progress](https://blog.nilenso.com/blog/2025/06/23/how-i-keep-up-with-ai-progress/)
* [2025-07-15, 08:13:21](https://lobste.rs/s/goyein/automerge_3_0) - [Automerge 3.0](https://automerge.github.io/blog/automerge-3/)
* [2025-07-15, 08:07:51](https://lobste.rs/s/87dpsv/trying_guix_nixer_s_impressions) - [Trying Guix: A Nixer&apos;s Impressions](https://tazj.in/blog/trying-guix)
* [2025-07-15, 08:02:00](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss) - [Core Ultra 5 245HX Blasts Past Desktop Counterpart in PassMark](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss)
* [2025-07-15, 07:00:00](https://science.slashdot.org/story/25/07/14/2319237/ligo-detects-most-massive-black-hole-merger-to-date?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LIGO Detects Most Massive Black Hole Merger to Date](https://science.slashdot.org/story/25/07/14/2319237/ligo-detects-most-massive-black-hole-merger-to-date?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-15, 06:41:46](https://lobste.rs/s/pohsem/initial_implementation_experimental_c) - [Initial implementation of the experimental C++ Lifetime Safety Analysis (-Wexperimental-lifetime-safety) has just landed in Clang](https://discourse.llvm.org/t/announcing-the-lifetime-safety-breakout-group/87333)
* [2025-07-15, 05:45:28](https://lobste.rs/s/d4egpg/bedrock_tiny_portable_8_bit_virtual) - [Bedrock: A tiny, portable 8-bit virtual computer (uxn fork)](https://benbridle.com/projects/bedrock.html)
* [2025-07-15, 04:35:35](https://news.ycombinator.com/item?id=44567857) - [LLM Inevitabilism](https://tomrenner.com/posts/llm-inevitabilism/)
* [2025-07-15, 03:52:38](https://news.ycombinator.com/item?id=44567683) - [Literalism plaguing today’s movies](https://www.newyorker.com/culture/critics-notebook/the-new-literalism-plaguing-todays-biggest-movies)
* [2025-07-15, 03:45:05](https://lobste.rs/s/jwmx9x/diving_into_plasma_bigscreen) - [Diving into Plasma Bigscreen](https://espi.dev/posts/2025/07/plasma-bigscreen/)
* [2025-07-15, 03:15:00](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss) - [Physicists Start To Pin Down How Stars Forge Heavy Atoms](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss)
* [2025-07-14, 23:30:00](https://soylentnews.org/article.pl?sid=25/07/13/232209&amp;from=rss) - [Supporting Mission-Driven Space Innovation, For Earth And Beyond](https://soylentnews.org/article.pl?sid=25/07/13/232209&amp;from=rss)
* [2025-07-14, 18:45:00](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss) - [China Claims Big Advances In Classical And Quantum Computers](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss)
* [2025-07-14, 18:42:16](https://lobste.rs/s/alrfrd/best_c_library) - [The Best C++ Library](https://mcyoung.xyz/2025/07/14/best/#fnref:terrible-people)
* [2025-07-14, 17:30:20](https://lobste.rs/s/1l3beg/panasonic_openbsd_3) - [Panasonic + OpenBSD = &lt;3](https://x61.sh/log/2025/07/03072025160538-panasonic_openbsd.html)
* [2025-07-14, 17:01:08](https://lobste.rs/s/qhgjks/using_elm_2025) - [Using Elm in 2025](https://engagesoftware.com/news/post/7033/using-elm-in-2025)
* [2025-07-14, 14:00:00](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss) - [AMD Discloses New CPU Flaws that can Enable Data Leaks via Timing Attacks](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss)
* [2025-07-14, 12:45:49](https://lobste.rs/s/9c5i3u/ten_years_running_every_day_visualized) - [Ten years of running every day, visualized](https://nodaysoff.run/)
* [2025-07-14, 09:15:00](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss) - [&apos;Positive Review Only&apos;: Researchers Hide AI Prompts in Papers](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss)
* [2025-07-14, 04:30:00](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss) - [The Foolproof Way to Win Any Lottery, According to Maths](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss)
* [2025-07-13, 23:45:00](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss) - [1960s Schools Experiment That Created a New Alphabet and Left Thousands of Children Unable to Spell](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss)
* [2025-07-13, 19:15:00](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss) - [Zombie Fabs Plague China&apos;s Chipmaking Ambitions, Failures Burning Tens of Billions of Dollars](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss)
* [2025-07-13, 18:38:06](https://news.ycombinator.com/item?id=44552455) - [o3 and Grok 4 accidentally vindicate neurosymbolic AI](https://garymarcus.substack.com/p/how-o3-and-grok-4-accidentally-vindicated)
* [2025-07-13, 14:28:00](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss) - [Man&apos;s Ghastly Festering Ulcer Stumps Doctors—Until They Cut Out a Wedge of Flesh](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss)
* [2025-07-13, 09:40:00](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss) - [This Glitchy, Error-Prone Tool Could Get You Deported](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss)
* [2025-07-13, 09:02:20](https://news.ycombinator.com/item?id=44548712) - [SCP-055 is an \&quot;antimeme\&quot; – it erases itself from memory when observed](https://scp-wiki.wikidot.com/scp-055)
* [2025-07-13, 08:39:47](https://news.ycombinator.com/item?id=44548620) - [Lorem Gibson](http://loremgibson.com/)
* [2025-07-13, 04:56:00](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss) - [Experts Say It is Unlikely You Will See a Moa Any Time Soon](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss)
* [2025-07-13, 00:14:00](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss) - [&apos;123456&apos; Password Exposed Chats for 64 Million McDonald&apos;s Job Applicants](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss)
* [2025-07-13, 00:06:20](https://news.ycombinator.com/item?id=44546321) - [Petabit-class transmission over &gt; 1000 km using standard 19-core optical fiber](https://www.nict.go.jp/en/press/2025/05/29-1.html)
* [2025-07-12, 20:50:56](https://news.ycombinator.com/item?id=44545050) - [Most (ly Dead) Influential Programming Languages (2020)](https://www.hillelwayne.com/post/influential-dead-languages/)
* [2025-07-12, 19:29:00](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss) - [Semiconductor Industry Could Short Out as Copper Runs Dry](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss)
* [2025-07-12, 14:45:00](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss) - [70,000 Years Ago Humans Underwent A Major Shift – That’s Why We Exist ](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss)
* [2025-07-12, 14:42:04](https://news.ycombinator.com/item?id=44542408) - [The Story of Mel, A Real Programmer, Annotated (1996)](https://users.cs.utah.edu/~elb/folklore/mel-annotated/mel-annotated.html)
* [2025-07-12, 10:00:00](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss) - [PerfektBlue Bluetooth Vulnerabilities Expose Millions of Vehicles to Remote Code Execution](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss)
* [2025-07-12, 05:15:00](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss) - [CEO Claims Intel No Longer In The \&quot;Top 10 Semiconductor Companies\&quot; ](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss)
* [2025-07-12, 00:31:00](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss) - [Derinkuyu: A Subterranean Marvel of Ancient Engineering with  Capacity for 20,000 Inhabitants](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss)
* [2025-07-11, 19:46:00](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss) - [New Android TapTrap Attack Fools Users With Invisible UI Trick](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss)
* [2025-07-11, 15:02:00](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss) - [What is AGI? Nobody Agrees, and It&apos;s Tearing Microsoft and OpenAI Apart.](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss)
* [2025-07-11, 08:15:00](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss) - [Nvidia Has Become the World’s First Company Worth $4 Trillion](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss)
* [2025-07-11, 03:30:00](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss) - [Apple Just Released an Interesting Coding Language Model](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss)
