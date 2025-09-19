# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technologies and Innovations

* [Color-Changing Organogel Stretches 46 Times Its Size and Self-Heals](https://science.slashdot.org/story/25/09/17/2129246/color-changing-organogel-stretches-46-times-its-size-and-self-heals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A fascinating breakthrough in materials science showcases an organogel capable of stretching up to 46 times its original size while self-healing.

* [China's DeepSeek Says Its Hit AI Model Cost Just $294,000 To Train](https://slashdot.org/story/25/09/18/1315238/chinas-deepseek-says-its-hit-ai-model-cost-just-294000-to-train?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Highlighting advancements in cost-efficient AI development, China’s DeepSeek presents its AI model trained at remarkably low costs.

* [Llama-Factory: Unified, Efficient Fine-Tuning for 100 Open LLMs](https://github.com/hiyouga/LLaMA-Factory) - Introducing a powerful tool for fine-tuning open large language models with improved efficiency.

* [Show HN: Nallely – A Python signals/MIDI processing system inspired by Smalltalk](https://dr-schlange.github.io/nallely-midi/) - A novel Python-based system for processing MIDI signals with strong Smalltalk-inspired design principles.

* [Making Printed Circuit Boards with Wild Clay](https://feministhackerspaces.cargo.site/Clay-PCB-Tutorial) - An unconventional tutorial on crafting printed circuit boards using clay from natural, wild sources.

## Artificial Intelligence and Software

* [How Americans View AI and Its Impact on People and Society](https://news.slashdot.org/story/25/09/18/0452250/how-americans-view-ai-and-its-impact-on-people-and-society?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A comprehensive exploration of public sentiment regarding artificial intelligence and its societal consequences.

* [Meta’s live demo fails; “AI” recording plays before the actor takes the steps](https://www.reddit.com/r/LivestreamFail/comments/1nkbig7/metas_live_staged-demo_fails_the_ai_recording/) - An embarrassing moment for Meta as an AI demo glitch reveals underlying system flaws.

* [Configuration files are user interfaces](https://ochagavia.nl/blog/configuration-files-are-user-interfaces/) - Insights into considering configuration files as vital user interfaces in software design.

## Corporate and Market Highlights

* [Intel Says Blockbuster Nvidia Deal Doesn't Change Its Own Roadmap](https://slashdot.org/story/25/09/19/019243/intel-says-blockbuster-nvidia-deal-doesnt-change-its-own-roadmap?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Intel maintains its trajectory despite major collaboration announcements from Nvidia.

* [Amazon Violated Online Shopper Protection Law, Judge Rules Ahead of Prime Signup Trial](https://yro.slashdot.org/story/25/09/18/0449219/amazon-violated-online-shopper-protection-law-judge-rules-ahead-of-prime-signup-trial?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Amazon faces legal challenges related to its treatment of online shoppers and subscription mechanisms.

* [Slack has raised our charges by $195k per year](https://skyfall.dev/posts/slack) - A critique of Slack's recent price hike, impacting organizational budgets substantially.

## Historical and Cultural Insights

* [Netscape Navigator 2.0 was released 30 years ago today](https://www.jwz.org/blog/2025/09/netscape-navigator-2-0-was-released-30-years-ago-today/) - Celebrating three decades since the release of a pivotal web browser that shaped the internet era.

* [The Sagrada Família Takes Its Final Shape](https://www.newyorker.com/magazine/2025/09/22/is-the-sagrada-familia-a-masterpiece-or-kitsch) - A detailed analysis of the complex architectural legacy of Barcelona’s iconic structure.

## Significant Developments in Science and Environment

* [Real-Time Observation of Magnet Switching in a Single Atom](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss) - One atom’s magnetic properties are observed in real time, paving the way for advances in quantum computing.

* [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss) - Research highlights how planetary alignments could mitigate extreme solar events.

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

* [2025-09-19, 02:00:00](https://slashdot.org/story/25/09/19/0150205/chinas-future-rests-on-200-million-precarious-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Future Rests on 200 Million Precarious Workers](https://slashdot.org/story/25/09/19/0150205/chinas-future-rests-on-200-million-precarious-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 01:09:00](https://slashdot.org/story/25/09/19/019243/intel-says-blockbuster-nvidia-deal-doesnt-change-its-own-roadmap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Says Blockbuster Nvidia Deal Doesn&apos;t Change Its Own Roadmap](https://slashdot.org/story/25/09/19/019243/intel-says-blockbuster-nvidia-deal-doesnt-change-its-own-roadmap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 00:40:04](https://news.ycombinator.com/item?id=45296701) - [Inside Palantir: Profits, Power and the Kill Machine](https://citizensreunited.substack.com/p/inside-palantir-profits-power-and)
* [2025-09-19, 00:30:14](https://news.ycombinator.com/item?id=45296638) - [David Lynch LA House](https://www.wallpaper.com/design-interiors/david-lynch-house-los-angeles-for-sale)
* [2025-09-19, 00:09:27](https://news.ycombinator.com/item?id=45296521) - [Show HN: Nallely – A Python signals/MIDI processing system inspired by Smalltalk](https://dr-schlange.github.io/nallely-midi/)
* [2025-09-18, 23:56:00](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss) - [GNOME 49 Arrives This Week](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss)
* [2025-09-18, 23:48:48](https://news.ycombinator.com/item?id=45296403) - [Llama-Factory: Unified, Efficient Fine-Tuning for 100 Open LLMs](https://github.com/hiyouga/LLaMA-Factory)
* [2025-09-18, 23:13:34](https://lobste.rs/s/8hu6t2/hypervisor_1_000_lines) - [Hypervisor in 1,000 Lines](https://1000hv.seiya.me/en/)
* [2025-09-18, 22:52:21](https://news.ycombinator.com/item?id=45295995) - [Classic recessive-or-dominant gene dynamics may not be so simple](https://news.stanford.edu/stories/2025/09/classic-recessive-dominant-gene-dynamics-pesticide-resistance-research)
* [2025-09-18, 22:41:02](https://lobste.rs/s/zletng/want_piss_off_your_it_department_are_your) - [Want to piss off your IT department? Are your links not malicious looking enough?](https://phishyurl.com)
* [2025-09-18, 22:40:06](https://news.ycombinator.com/item?id=45295898) - [Want to piss off your IT department? Are the links not malicious looking enough?](https://phishyurl.com/)
* [2025-09-18, 22:37:44](https://news.ycombinator.com/item?id=45295878) - [Nvmath-Python: Nvidia Math Libraries for the Python Ecosystem](https://github.com/NVIDIA/nvmath-python)
* [2025-09-18, 22:27:17](https://news.ycombinator.com/item?id=45295794) - [AI tools are making the world look weird](https://strat7.com/blogs/weird-in-weird-out/)
* [2025-09-18, 21:54:06](https://news.ycombinator.com/item?id=45295482) - [Show HN: I created a small 2D game about an ant](https://aanthonymax.github.io/ant-and-apples/)
* [2025-09-18, 21:23:29](https://lobste.rs/s/t9ipim/cache_crash) - [The Cache Crash](https://www.fastmail.com/blog/the-cache-crash/)
* [2025-09-18, 21:01:00](https://tech.slashdot.org/story/25/09/18/1934251/google-adds-gemini-to-chrome-desktop-browser-for-us-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Adds Gemini To Chrome Desktop Browser for US Users](https://tech.slashdot.org/story/25/09/18/1934251/google-adds-gemini-to-chrome-desktop-browser-for-us-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 20:50:33](https://news.ycombinator.com/item?id=45294859) - [Meta’s live demo fails; “AI” recording plays before the actor takes the steps](https://www.reddit.com/r/LivestreamFail/comments/1nkbig7/metas_live_staged_demo_fails_the_ai_recording/)
* [2025-09-18, 20:37:28](https://lobste.rs/s/axzxca/netscape_navigator_2_0_was_released_30) - [Netscape Navigator 2.0 was released 30 years ago today](https://www.jwz.org/blog/2025/09/netscape-navigator-2-0-was-released-30-years-ago-today/)
* [2025-09-18, 20:15:45](https://news.ycombinator.com/item?id=45294440) - [Apple: SSH and FileVault](https://keith.github.io/xcode-man-pages/apple_ssh_and_filevault.7.html)
* [2025-09-18, 20:01:00](https://yro.slashdot.org/story/25/09/18/181207/ftc-and-seven-states-sue-ticketmaster-over-alleged-coordination-with-scalpers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC and Seven States Sue Ticketmaster Over Alleged Coordination With Scalpers](https://yro.slashdot.org/story/25/09/18/181207/ftc-and-seven-states-sue-ticketmaster-over-alleged-coordination-with-scalpers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 19:21:33](https://news.ycombinator.com/item?id=45293839) - [Tldraw SDK 4.0](https://tldraw.dev/blog/tldraw-sdk-4-0)
* [2025-09-18, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss) - [China Bans Nvidia&apos;s AI Chips](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss)
* [2025-09-18, 19:01:00](https://slashdot.org/story/25/09/18/1335216/samsung-brings-ads-to-us-fridges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Brings Ads To US Fridges](https://slashdot.org/story/25/09/18/1335216/samsung-brings-ads-to-us-fridges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 18:53:37](https://lobste.rs/s/ttj58a/reflection_c_s_decade_defining_rocket) - [Reflection — C++’s decade-defining rocket engine](https://herbsutter.com/2025/09/18/yesterdays-talk-video-posted-reflection-cs-decade-defining-rocket-engine/)
* [2025-09-18, 18:30:37](https://news.ycombinator.com/item?id=45293273) - [When Knowing Someone at Meta Is the Only Way to Break Out of \&quot;Content Jail\&quot;](https://www.eff.org/pages/when-knowing-someone-meta-only-way-break-out-content-jail)
* [2025-09-18, 18:02:00](https://slashdot.org/story/25/09/18/1315238/chinas-deepseek-says-its-hit-ai-model-cost-just-294000-to-train?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s DeepSeek Says Its Hit AI Model Cost Just $294,000 To Train](https://slashdot.org/story/25/09/18/1315238/chinas-deepseek-says-its-hit-ai-model-cost-just-294000-to-train?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 17:58:23](https://lobste.rs/s/ihj3xo/history_gem_desktop_environment) - [History of the GEM Desktop Environment](https://nemanjatrifunovic.substack.com/p/history-of-the-gem-desktop-environment)
* [2025-09-18, 17:47:19](https://news.ycombinator.com/item?id=45292694) - [This map is not upside down](https://www.maps.com/this-map-is-not-upside-down/)
* [2025-09-18, 17:42:56](https://news.ycombinator.com/item?id=45292648) - [Learn Your Way: Reimagining Textbooks with Generative AI](https://research.google/blog/learn-your-way-reimagining-textbooks-with-generative-ai/)
* [2025-09-18, 17:40:13](https://lobste.rs/s/xywqtx/pocket_casts_you_altered_deal_so_i_will) - [Pocket Casts, You Altered The Deal, So I Will Alter Your App](https://blog.matthewbrunelle.com/podcasts-you-altered-the-deal-so-i-will-alter-your-app/)
* [2025-09-18, 17:29:17](https://news.ycombinator.com/item?id=45292475) - [OpenTelemetry Collector: What It Is, When You Need It, and When You Don&apos;t](https://oneuptime.com/blog/post/2025-09-18-what-is-opentelemetry-collector-and-why-use-one/view)
* [2025-09-18, 17:01:00](https://yro.slashdot.org/story/25/09/18/0449219/amazon-violated-online-shopper-protection-law-judge-rules-ahead-of-prime-signup-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Violated Online Shopper Protection Law, Judge Rules Ahead of Prime Signup Trial](https://yro.slashdot.org/story/25/09/18/0449219/amazon-violated-online-shopper-protection-law-judge-rules-ahead-of-prime-signup-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 16:44:27](https://lobste.rs/s/y6ptel/from_suspicion_published_curl_cve) - [From suspicion to published curl CVE](https://daniel.haxx.se/blog/2025/09/18/from-suspicion-to-published-curl-cve/)
* [2025-09-18, 16:43:43](https://news.ycombinator.com/item?id=45291858) - [Configuration files are user interfaces](https://ochagavia.nl/blog/configuration-files-are-user-interfaces/)
* [2025-09-18, 16:41:52](https://lobste.rs/s/vrsdxo/configuration_files_are_user_interfaces) - [Configuration files are user interfaces](https://ochagavia.nl/blog/configuration-files-are-user-interfaces/)
* [2025-09-18, 16:01:00](https://apple.slashdot.org/story/25/09/18/1210236/599-macbook-with-iphone-chip-expected-to-enter-production-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [$599 MacBook With iPhone Chip Expected To Enter Production This Year](https://apple.slashdot.org/story/25/09/18/1210236/599-macbook-with-iphone-chip-expected-to-enter-production-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 15:40:29](https://news.ycombinator.com/item?id=45291024) - [Launch HN: Cactus (YC S25) – AI inference on smartphones](https://github.com/cactus-compute/cactus)
* [2025-09-18, 15:01:00](https://news.slashdot.org/story/25/09/18/0452250/how-americans-view-ai-and-its-impact-on-people-and-society?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Americans View AI and Its Impact on People and Society](https://news.slashdot.org/story/25/09/18/0452250/how-americans-view-ai-and-its-impact-on-people-and-society?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 14:59:24](https://lobste.rs/s/5bkb3b/elasticsearch_search_index_not_system) - [Elasticsearch: Search Index, Not System of Record](https://www.paradedb.com/blog/elasticsearch-was-never-a-database)
* [2025-09-18, 14:46:02](https://lobste.rs/s/yn7jdd/ternfs_exabyte_scale_multi_region) - [TernFS: an exabyte scale, multi-region distributed filesystem](https://www.xtxmarkets.com/tech/2025-ternfs/)
* [2025-09-18, 14:36:44](https://news.ycombinator.com/item?id=45290245) - [TernFS – An exabyte scale, multi-region distributed filesystem](https://www.xtxmarkets.com/tech/2025-ternfs/)
* [2025-09-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss) - [Modular Nuclear Reactors Sound Great, but Won&apos;t be Ready Any Time Soon](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss)
* [2025-09-18, 14:24:51](https://lobste.rs/s/umwu0s/flipper_zero_geiger_counter_module) - [Flipper Zero Geiger Counter Module](https://kasiin.top/blog/2025-08-04-flipper_zero_geiger_counter_module/)
* [2025-09-18, 14:01:00](https://slashdot.org/story/25/09/18/1226210/nvidia-to-invest-5-billion-in-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia To Invest $5 Billion in Intel](https://slashdot.org/story/25/09/18/1226210/nvidia-to-invest-5-billion-in-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 13:54:46](https://lobste.rs/s/cobbr5/announcing_rust_1_90_0) - [Announcing Rust 1.90.0](https://blog.rust-lang.org/2025/09/18/Rust-1.90.0/)
* [2025-09-18, 13:52:50](https://lobste.rs/s/rwgado/how_can_we_sandbox_our_development) - [How can we sandbox our development machines?](https://lobste.rs/s/rwgado/how_can_we_sandbox_our_development)
* [2025-09-18, 13:38:49](https://news.ycombinator.com/item?id=45289558) - [Luau – Fast, small, safe, gradually typed scripting language derived from Lua](https://luau.org/)
* [2025-09-18, 13:28:59](https://news.ycombinator.com/item?id=45289453) - [Flipper Zero Geiger Counter](https://kasiin.top/blog/2025-08-04-flipper_zero_geiger_counter_module/)
* [2025-09-18, 13:00:00](https://news.slashdot.org/story/25/09/17/2142221/gen-z-leads-biggest-drop-in-fico-scores-since-financial-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gen Z Leads Biggest Drop In FICO Scores Since Financial Crisis](https://news.slashdot.org/story/25/09/17/2142221/gen-z-leads-biggest-drop-in-fico-scores-since-financial-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 12:17:51](https://news.ycombinator.com/item?id=45288690) - [KDE is now my favorite desktop](https://kokada.dev/blog/kde-is-now-my-favorite-desktop/)
* [2025-09-18, 12:16:35](https://lobste.rs/s/gpxh3k/kde_is_now_my_favorite_desktop) - [KDE is now my favorite desktop](https://kokada.dev/blog/kde-is-now-my-favorite-desktop/)
* [2025-09-18, 12:02:45](https://lobste.rs/s/twm4fg/making_printed_circuit_boards_with_wild) - [Making Printed Circuit Boards with Wild Clay](https://feministhackerspaces.cargo.site/Clay-PCB-Tutorial)
* [2025-09-18, 11:04:48](https://news.ycombinator.com/item?id=45288161) - [Nvidia buys $5B in Intel](https://www.tomshardware.com/pc-components/cpus/nvidia-and-intel-announce-jointly-developed-intel-x86-rtx-socs-for-pcs-with-nvidia-graphics-also-custom-nvidia-data-center-x86-processors-nvidia-buys-usd5-billion-in-intel-stock-in-seismic-deal)
* [2025-09-18, 10:00:00](https://slashdot.org/story/25/09/17/2151212/limewire-acquires-fyre-festival-brand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LimeWire Acquires Fyre Festival Brand](https://slashdot.org/story/25/09/17/2151212/limewire-acquires-fyre-festival-brand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss) - [&apos;Beyond EUV&apos; Chipmaking Tech Pushes Soft X-Ray Lithography Closer to Challenging Hyper-NA EUV](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss)
* [2025-09-18, 09:26:20](https://lobste.rs/s/bpk3l6/ton_roosendaal_step_down_as_blender) - [Ton Roosendaal to step down as Blender chairman and CEO](https://www.cgchannel.com/2025/09/ton-roosendaal-to-step-down-as-blender-chairman-and-ceo/)
* [2025-09-18, 08:56:37](https://lobste.rs/s/oo15ry/access_logging_2025) - [Access logging in 2025](https://neugierig.org/software/blog/2025/09/access-log.html)
* [2025-09-18, 07:00:00](https://science.slashdot.org/story/25/09/17/2129246/color-changing-organogel-stretches-46-times-its-size-and-self-heals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Color-Changing Organogel Stretches 46 Times Its Size and Self-Heals](https://science.slashdot.org/story/25/09/17/2129246/color-changing-organogel-stretches-46-times-its-size-and-self-heals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 04:59:00](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss) - [Northrop Grumman&apos;s New Spacecraft is a Real Chonker](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss)
* [2025-09-18, 04:55:55](https://lobste.rs/s/whxl2y/nick_wellnhofer_steps_down_as_libxml2) - [Nick Wellnhofer steps down as libxml2 maintainer](https://discourse.gnome.org/t/stepping-down-as-libxml2-maintainer/31398)
* [2025-09-18, 04:41:17](https://lobste.rs/s/hydvux/we_have_outgrown_process_model) - [We have outgrown the Process model](https://sidhion.com/blog/process_model_outgrown/)
* [2025-09-18, 03:30:00](https://tech.slashdot.org/story/25/09/17/2112233/china-is-sending-its-world-beating-auto-industry-into-a-tailspin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Is Sending Its World-Beating Auto Industry Into a Tailspin](https://tech.slashdot.org/story/25/09/17/2112233/china-is-sending-its-world-beating-auto-industry-into-a-tailspin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 01:37:11](https://news.ycombinator.com/item?id=45283887) - [Slack has raised our charges by $195k per year](https://skyfall.dev/posts/slack)
* [2025-09-18, 01:25:00](https://slashdot.org/story/25/09/17/2123211/deepseek-writes-less-secure-code-for-groups-china-disfavors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DeepSeek Writes Less-Secure Code For Groups China Disfavors](https://slashdot.org/story/25/09/17/2123211/deepseek-writes-less-secure-code-for-groups-china-disfavors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 01:16:02](https://lobste.rs/s/xm1lqy/introducing_gnome_49_brescia) - [Introducing GNOME 49, “Brescia”](https://release.gnome.org/49/)
* [2025-09-18, 00:11:00](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss) - [Chinese AI Chip Market: Nvidia Violates Antitrust and Tencent Produces Locally](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss)
* [2025-09-17, 22:33:26](https://lobste.rs/s/ozicir/shai_hulud_novel_self_replicating_worm) - [Shai-Hulud: The novel self-replicating worm infecting hundreds of NPM packages](https://www.sysdig.com/blog/shai-hulud-the-novel-self-replicating-worm-infecting-hundreds-of-npm-packages)
* [2025-09-17, 20:16:15](https://lobste.rs/s/pqt0mb/steering_committee_retrospective) - [Steering Committee Retrospective](https://www.haskellforall.com/2025/09/steering-committee-retrospective.html)
* [2025-09-17, 19:28:00](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss) - [Hacker Breaks Into on-Campus Smart Washing Machines](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss)
* [2025-09-17, 17:56:57](https://lobste.rs/s/bqiqjm/wasm_3_0_completed) - [Wasm 3.0 Completed](https://webassembly.org/news/2025-09-17-wasm-3.0/)
* [2025-09-17, 14:40:00](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss) - [Stealth Radio Hides Signal in Background Noise to Protect Drone Pilots](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss)
* [2025-09-17, 14:29:15](https://lobste.rs/s/w6hc8m/arrival_radar_air_traffic_control_game) - [Arrival Radar Air Traffic Control Game](https://xkqr.org/arrival-radar/)
* [2025-09-17, 09:59:00](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss) - [The Varnish Cache Project Will Soon be Called the Vinyl Cache Project](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss)
* [2025-09-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss) - [Boeing Faces $3.1M Fine for Door Plug Blowout, Hundreds of Safety Violations](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss)
* [2025-09-16, 23:36:00](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss) - [When It Comes to US AI Rules, There&apos;s Too Many Cooks](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss)
* [2025-09-16, 18:52:00](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss) - [Google Cut Managers by 35%: Inside Pichai’s Layoffs Overhaul](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss)
* [2025-09-16, 15:20:00](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss) - [RIP Robert Redford (89)](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss)
* [2025-09-16, 14:10:00](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss) - [Real-Time Observation of Magnet Switching in a Single Atom](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss)
* [2025-09-16, 12:53:51](https://news.ycombinator.com/item?id=45261566) - [Rupert&apos;s snub cube and other Math Holes](http://tom7.org/ruperts/)
* [2025-09-16, 09:24:00](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss) - [Pentagon Begins Deploying New Satellite Network to Link Sensors With Shooters](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss)
* [2025-09-16, 04:38:00](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss) - [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss)
* [2025-09-16, 00:20:38](https://news.ycombinator.com/item?id=45256575) - [The Sagrada Família Takes Its Final Shape](https://www.newyorker.com/magazine/2025/09/22/is-the-sagrada-familia-a-masterpiece-or-kitsch)
* [2025-09-15, 23:54:00](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss) - [New Apple-Funded Program Teaches Manufacturing to US Firms](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss)
* [2025-09-15, 19:15:53](https://news.ycombinator.com/item?id=45253795) - [Visual lexicon of consumer aesthetics from the 1970s until now](https://cari.institute/)
* [2025-09-15, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss) - [New Nuclear Rocket Concept Could Slash Mars Travel Time in Half](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss)
* [2025-09-15, 14:29:00](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss) - [Nano11 Compresses Windows 11 Install Footprint to as Little as 2.8GB](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss)
* [2025-09-15, 09:46:00](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss) - [Google is Telling People DOGE Never Existed](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss)
* [2025-09-15, 06:18:55](https://news.ycombinator.com/item?id=45246658) - [They Know More Than I Do](https://www.cybadger.com/they-know-more-than-i-do-managing-an-expert-team-when-you-cant-do-their-jobs/)
* [2025-09-15, 05:05:00](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss) - [Renewable Energy has a Cybersecurity Problem](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss)
* [2025-09-15, 01:37:41](https://news.ycombinator.com/item?id=45245181) - [TIC-80 – Tiny Computer](https://tic80.com/)
* [2025-09-15, 00:19:00](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss) - [Newly Released Video at House UFO Hearing Appears to Show U.S. Missile Striking and Bouncing Off Orb](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss)
