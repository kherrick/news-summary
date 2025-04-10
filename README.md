# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Technology Developments

* [NIH freezes all research grants to Columbia University](https://www.science.org/content/article/nih-freezes-all-research-grants-columbia-university) ([comments](https://news.ycombinator.com/item?id=43640267))

* [Scientists Bring Dire Wolf Back From Extinction... Almost](https://soylentnews.org/article.pl?sid=25/04/09/0034238&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/04/09/0034238&amp;from=rss))

* [Anthropic Launches Its Own $200 Monthly Plan](https://slashdot.org/story/25/04/09/203231/anthropic-launches-its-own-200-monthly-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/25/04/09/203231/anthropic-launches-its-own-200-monthly-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Scientists Recreate Brain Circuit in Lab For First Time](https://science.slashdot.org/story/25/04/09/1521244/scientists-recreate-brain-circuit-in-lab-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/04/09/1521244/scientists-recreate-brain-circuit-in-lab-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Facial Recognition Tech, Developed With a Clear Purpose in Mind](https://soylentnews.org/article.pl?sid=25/04/08/1159249&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/04/08/1159249&amp;from=rss))

* [OpenSSH 10.0 released](https://www.openwall.com/lists/oss-security/2025/04/09/1) ([comments](https://lobste.rs/s/tppp5b/openssh_10_0_released))

* [CISPE Pumps €1 Million Of Microsoft&apos;s Money Into Fulcrum](https://soylentnews.org/article.pl?sid=25/04/05/1319211&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/04/05/1319211&amp;from=rss))

## AI and Software Innovations

* [RFC 3446 - Introduce the Store API for great good](https://github.com/matthieu-m/rfcs/blob/store/text/3446-store.md) ([comments](https://lobste.rs/s/xkhyef/rfc_3446_introduce_store_api_for_great))

* [Evidence suggesting Quasar Alpha is OpenAI&apos;s new model](https://blog.kilocode.ai/p/quasar-alpha-what-we-know-thus-far) ([comments](https://news.ycombinator.com/item?id=43640166))

* [git-withme - Peer-to-peer, encrypted, ephemeral Git collaboration (git daemon with encryption)](https://git.sr.ht/~meejah/git-withme) ([comments](https://lobste.rs/s/0trtbx/git_withme_peer_peer_encrypted_ephemeral))

* [How University Students Use Claude](https://www.anthropic.com/news/anthropic-education-report-how-university-students-use-claude) ([comments](https://news.ycombinator.com/item?id=43633383))

* [The AI Therapist Can See You Now](https://science.slashdot.org/story/25/04/09/155247/the-ai-therapist-can-see-you-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/04/09/155247/the-ai-therapist-can-see-you-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Cultural and Sociopolitical Insights

* [Microsoft Windows 95 Reboot Chime and Minecraft Soundtrack Inducted Into National Recording Registry](https://entertainment.slashdot.org/story/25/04/10/0011250/microsoft-windows-95-reboot-chime-and-minecraft-soundtrack-inducted-into-national-recording-registry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/25/04/10/0011250/microsoft-windows-95-reboot-chime-and-minecraft-soundtrack-inducted-into-national-recording-registry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Astrophotographers Help Scientists Solve Mystery of &apos;Sprite Fireworks&apos;](https://petapixel.com/2025/04/01/astrophotographers-help-scientists-solve-mystery-of-sprite-fireworks/) ([comments](https://news.ycombinator.com/item?id=43606126))

* [Blade Runners of LinkedIn Are Hunting for Replicants – One Em Dash at a Time](https://soylentnews.org/article.pl?sid=25/04/09/0030205&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/04/09/0030205&amp;from=rss))

* [Men&apos;s Weird Collections Inspired the Modern Museum: Cabinets of Curiosities](https://worldhistory.substack.com/p/how-strange-mens-weird-collections) ([comments](https://news.ycombinator.com/item?id=43601282))

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

* [2025-04-10, 03:14:19](https://news.ycombinator.com/item?id=43640267) - [NIH freezes all research grants to Columbia University](https://www.science.org/content/article/nih-freezes-all-research-grants-columbia-university)
* [2025-04-10, 03:00:00](https://tech.slashdot.org/story/25/04/10/0256257/lawmakers-are-skeptical-of-zuckerbergs-commitment-to-free-speech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lawmakers Are Skeptical of Zuckerberg&apos;s Commitment To Free Speech](https://tech.slashdot.org/story/25/04/10/0256257/lawmakers-are-skeptical-of-zuckerbergs-commitment-to-free-speech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-10, 02:50:46](https://lobste.rs/s/xkhyef/rfc_3446_introduce_store_api_for_great) - [RFC 3446 - Introduce the Store API for great good](https://github.com/matthieu-m/rfcs/blob/store/text/3446-store.md)
* [2025-04-10, 02:50:40](https://lobste.rs/s/8ckxrj/elliptical_python_programming) - [Elliptical Python Programming](https://susam.net/elliptical-python-programming.html)
* [2025-04-10, 02:48:08](https://news.ycombinator.com/item?id=43640166) - [Evidence suggesting Quasar Alpha is OpenAI&apos;s new model](https://blog.kilocode.ai/p/quasar-alpha-what-we-know-thus-far)
* [2025-04-10, 02:38:42](https://news.ycombinator.com/item?id=43640115) - [Dice and Queues](https://justincartwright.com/2025/02/25/dice-and-queues.html)
* [2025-04-10, 02:18:00](https://soylentnews.org/article.pl?sid=25/04/09/0034238&amp;from=rss) - [Scientists Bring Dire Wolf Back From Extinction... Almost](https://soylentnews.org/article.pl?sid=25/04/09/0034238&amp;from=rss)
* [2025-04-10, 01:51:24](https://news.ycombinator.com/item?id=43639871) - [No Pay, No Work; Early Career Lessons](https://danielsada.tech/blog/carreer-part-3-no-pay-no-work/)
* [2025-04-10, 01:21:49](https://news.ycombinator.com/item?id=43639734) - [Rusty Cascading Style Sheets – Another CSS Preprocessor](https://github.com/ved-patel226/RCSS)
* [2025-04-10, 01:05:30](https://news.ycombinator.com/item?id=43639642) - [Google Cloud Rapid Storage](https://cloud.google.com/blog/products/compute/whats-new-with-ai-hypercomputer)
* [2025-04-10, 00:26:31](https://news.ycombinator.com/item?id=43639421) - [BS 1363 British Plugs and Sockets](https://www.plugsocketmuseum.nl/British1.html)
* [2025-04-10, 00:11:00](https://entertainment.slashdot.org/story/25/04/10/0011250/microsoft-windows-95-reboot-chime-and-minecraft-soundtrack-inducted-into-national-recording-registry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Windows 95 Reboot Chime and Minecraft Soundtrack Inducted Into National Recording Registry](https://entertainment.slashdot.org/story/25/04/10/0011250/microsoft-windows-95-reboot-chime-and-minecraft-soundtrack-inducted-into-national-recording-registry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-10, 00:00:34](https://news.ycombinator.com/item?id=43639280) - [The Columbian Orator taught nineteenth-century Americans how to speak](https://www.neh.gov/article/columbian-orator-taught-nineteenth-century-americans-how-speak)
* [2025-04-09, 23:47:45](https://news.ycombinator.com/item?id=43639202) - [The Consequences of Limiting the Tax Deductibility of R&amp;D](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4998845)
* [2025-04-09, 23:25:30](https://lobste.rs/s/zqqvms/async_from_scratch_1_what_s_future_anyway) - [Async from scratch 1: What&apos;s in a Future, anyway?](https://natkr.com/2025-04-10-async-from-scratch-1/)
* [2025-04-09, 22:21:06](https://lobste.rs/s/0trtbx/git_withme_peer_peer_encrypted_ephemeral) - [git-withme - Peer-to-peer, encrypted, ephemeral Git collaboration (git daemon with encryption)](https://git.sr.ht/~meejah/git-withme)
* [2025-04-09, 21:53:05](https://news.ycombinator.com/item?id=43638422) - [Parser Combinators Beat Regexes](https://entropicthoughts.com/parser-combinators-beat-regexes)
* [2025-04-09, 21:37:32](https://lobste.rs/s/aoy99y/it_s_not_bad_they_told_me_coreboot) - [“It’s not that bad” they told me - Coreboot](https://lilysthings.org/blog/coreboot/)
* [2025-04-09, 21:36:46](https://lobste.rs/s/2ar8hu/visualizing_million_time_series_with) - [Visualizing a Million Time Series with the Density Line Chart](https://arxiv.org/pdf/1808.06019)
* [2025-04-09, 21:33:00](https://soylentnews.org/article.pl?sid=25/04/09/0031249&amp;from=rss) - [FreeDOS 1.4 Brings New Fixes and Features to Modern and Vintage DOS-Based PCs](https://soylentnews.org/article.pl?sid=25/04/09/0031249&amp;from=rss)
* [2025-04-09, 21:07:05](https://lobste.rs/s/2ixxem/react_for_two_computers) - [React for Two Computers](https://overreacted.io/react-for-two-computers/)
* [2025-04-09, 21:00:00](https://tech.slashdot.org/story/25/04/09/2034234/us-army-says-it-could-acquire-targets-faster-with-advanced-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Army Says It Could Acquire Targets Faster With &apos;Advanced AI&apos;](https://tech.slashdot.org/story/25/04/09/2034234/us-army-says-it-could-acquire-targets-faster-with-advanced-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 20:51:35](https://news.ycombinator.com/item?id=43637819) - [Do charity bookshops drive out other second-hand bookshops?](http://wormwoodiana.blogspot.com/2025/04/do-charity-bookshops-drive-out-other.html)
* [2025-04-09, 20:46:24](https://lobste.rs/s/0zrxau/how_prime_video_cut_ui_latency_7_6x_by) - [How Prime Video Cut UI Latency 7.6x by Switching to Rust](https://analyticsindiamag.com/global-tech/how-prime-video-cut-ui-latency-7-6x-by-switching-to-rust/)
* [2025-04-09, 20:04:00](https://slashdot.org/story/25/04/09/203231/anthropic-launches-its-own-200-monthly-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Launches Its Own $200 Monthly Plan](https://slashdot.org/story/25/04/09/203231/anthropic-launches-its-own-200-monthly-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 19:24:40](https://news.ycombinator.com/item?id=43636568) - [Show HN: Obelisk – a WASM-based deterministic workflow engine](https://obeli.sk/)
* [2025-04-09, 19:09:27](https://news.ycombinator.com/item?id=43636302) - [Antiviral chewing gum to reduce influenza and herpes simplex virus transmission](https://penntoday.upenn.edu/news/penn-dental-antiviral-chewing-gum-reduce-influenza-and-herpes-simplex-virus-transmission)
* [2025-04-09, 19:04:12](https://news.ycombinator.com/item?id=43636230) - [Baking the Y Combinator from Scratch](https://the-nerve-blog.ghost.io/baking-the-y-combinator-from-scratch-part-1/)
* [2025-04-09, 19:00:00](https://it.slashdot.org/story/25/04/09/1834225/wordpress-launches-ai-site-builder-amid-company-restructuring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WordPress Launches AI Site Builder Amid Company Restructuring](https://it.slashdot.org/story/25/04/09/1834225/wordpress-launches-ai-site-builder-amid-company-restructuring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 18:39:03](https://news.ycombinator.com/item?id=43635783) - [Firebase Studio](https://firebase.studio)
* [2025-04-09, 18:07:14](https://news.ycombinator.com/item?id=43635295) - [GPD Pocket 4 Speaker DSP: Configuring PipeWire so laptop speakers sound better](https://kittenlabs.de/blog/2025/04/06/gpd-pocket-4-speaker-dsp/)
* [2025-04-09, 18:00:00](https://tech.slashdot.org/story/25/04/09/1717210/google-deepmind-has-a-weapon-in-the-ai-talent-wars-aggressive-noncompete-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google DeepMind Has a Weapon in the AI Talent Wars: Aggressive Noncompete Rules](https://tech.slashdot.org/story/25/04/09/1717210/google-deepmind-has-a-weapon-in-the-ai-talent-wars-aggressive-noncompete-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 17:59:10](https://lobste.rs/s/nbcmxy/what_if_poison_were_rust) - [what if the poison were rust?](https://flak.tedunangst.com/post/what-if-the-poison-were-rust)
* [2025-04-09, 17:00:00](https://tech.slashdot.org/story/25/04/09/1512236/google-maps-is-launching-tools-to-help-cities-analyze-infrastructure-and-traffic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Maps is Launching Tools To Help Cities Analyze Infrastructure and Traffic](https://tech.slashdot.org/story/25/04/09/1512236/google-maps-is-launching-tools-to-help-cities-analyze-infrastructure-and-traffic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 16:48:00](https://soylentnews.org/article.pl?sid=25/04/09/0030205&amp;from=rss) - [Blade Runners of LinkedIn Are Hunting for Replicants – One Em Dash at a Time](https://soylentnews.org/article.pl?sid=25/04/09/0030205&amp;from=rss)
* [2025-04-09, 16:31:06](https://news.ycombinator.com/item?id=43634005) - [Show HN: Aqua Voice 2 – Fast Voice Input for Mac and Windows](https://withaqua.com)
* [2025-04-09, 15:41:38](https://news.ycombinator.com/item?id=43633383) - [How University Students Use Claude](https://www.anthropic.com/news/anthropic-education-report-how-university-students-use-claude)
* [2025-04-09, 15:34:27](https://news.ycombinator.com/item?id=43633298) - [Show HN: I built an app to generate story relationships using Mermaidjs](https://github.com/herol3oy/austen)
* [2025-04-09, 15:30:00](https://science.slashdot.org/story/25/04/09/1521244/scientists-recreate-brain-circuit-in-lab-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Recreate Brain Circuit in Lab For First Time](https://science.slashdot.org/story/25/04/09/1521244/scientists-recreate-brain-circuit-in-lab-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 15:20:17](https://lobste.rs/s/rsea1s/koreo_platform_engineering_toolkit_for) - [Koreo: The platform engineering toolkit for Kubernetes](https://koreo.dev)
* [2025-04-09, 15:05:00](https://science.slashdot.org/story/25/04/09/155247/the-ai-therapist-can-see-you-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The AI Therapist Can See You Now](https://science.slashdot.org/story/25/04/09/155247/the-ai-therapist-can-see-you-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 14:53:01](https://news.ycombinator.com/item?id=43632831) - [Show HN: Comparing product rankings by OpenAI, Anthropic, and Perplexity](https://productrank.ai/)
* [2025-04-09, 14:35:13](https://lobste.rs/s/6qzxzg/compiler_for_micron_programming) - [A compiler for the Micron programming language - the Oberon with the power of C](https://github.com/rochus-keller/micron/)
* [2025-04-09, 14:34:46](https://lobste.rs/s/qpdvuh/barrelfish) - [barrelfish](https://github.com/BarrelfishOS/barrelfish)
* [2025-04-09, 14:12:47](https://news.ycombinator.com/item?id=43632379) - [The chroot Technique – a Swiss army multitool for Linux systems](https://livesys.se/posts/the-chroot-technique/)
* [2025-04-09, 14:06:00](https://hardware.slashdot.org/story/25/04/09/146254/samsung-and-google-partner-to-launch-ballie-home-robot-with-built-in-projector?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung and Google Partner To Launch Ballie Home Robot with Built-in Projector](https://hardware.slashdot.org/story/25/04/09/146254/samsung-and-google-partner-to-launch-ballie-home-robot-with-built-in-projector?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 14:02:05](https://lobste.rs/s/oa5hbz/llm_query_understanding_service) - [An LLM Query Understanding Service](https://softwaredoug.com/blog/2025/04/08/llm-query-understand)
* [2025-04-09, 13:47:22](https://lobste.rs/s/fwohal/man_pages_are_great_man_readers_are) - [Man pages are great, man readers are the problem](https://whynothugo.nl/journal/2025/04/09/man-pages-are-great-man-readers-are-the-problem/)
* [2025-04-09, 13:10:44](https://news.ycombinator.com/item?id=43631656) - [Quality-of-Life in Tetris Games](https://jcarlosroldan.com/post/355)
* [2025-04-09, 12:58:39](https://news.ycombinator.com/item?id=43631543) - [How much do you think it costs to make a pair of Nike shoes in Asia?](https://twitter.com/dieworkwear/status/1909741170953273353)
* [2025-04-09, 12:52:19](https://lobste.rs/s/jho3qh/maintenance_notice_whisky) - [Maintenance Notice - Whisky Documentation](https://docs.getwhisky.app/maintenance-notice)
* [2025-04-09, 12:38:20](https://news.ycombinator.com/item?id=43631381) - [The Agent2Agent Protocol (A2A)](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)
* [2025-04-09, 12:24:19](https://news.ycombinator.com/item?id=43631274) - [Ironwood: The first Google TPU for the age of inference](https://blog.google/products/google-cloud/ironwood-tpu-age-of-inference/)
* [2025-04-09, 12:20:06](https://news.ycombinator.com/item?id=43631251) - [Photographs of 19th Century Japan](https://cosmographia.substack.com/p/photographs-of-old-japan)
* [2025-04-09, 12:11:00](https://soylentnews.org/article.pl?sid=25/04/08/121246&amp;from=rss) - [April 7 — Reflections on Twenty Years of Git](https://soylentnews.org/article.pl?sid=25/04/08/121246&amp;from=rss)
* [2025-04-09, 12:06:41](https://lobste.rs/s/bcdwwa/how_sync_anything) - [How to Sync Anything](https://neighbourhood.ie/blog/2025/04/06/how-to-sync-anything)
* [2025-04-09, 11:53:55](https://lobste.rs/s/hnnrdn/facet_rust_reflection_serialization) - [facet: Rust reflection, serialization, deserialization — know the shape of your types](https://github.com/facet-rs/facet)
* [2025-04-09, 11:31:00](https://slashdot.org/story/25/04/09/1131225/china-raises-tariffs-on-us-goods-to-84-as-rift-escalates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Raises Tariffs on US Goods To 84% as Rift Escalates](https://slashdot.org/story/25/04/09/1131225/china-raises-tariffs-on-us-goods-to-84-as-rift-escalates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 09:32:58](https://lobste.rs/s/hw8zvr/hardening_firefox_frontend_with_content) - [Hardening the Firefox Frontend with Content Security Policies](https://attackanddefense.dev/2025/04/09/hardening-the-firefox-frontend-with-content-security-policies.html)
* [2025-04-09, 09:26:47](https://lobste.rs/s/p7xsfx/is_not_writing_tests_unprofessional_2019) - [Is not writing tests unprofessional? (2019)](https://matthiasnoback.nl/2019/09/is-not-writing-tests-unprofessional/)
* [2025-04-09, 09:16:48](https://lobste.rs/s/tppp5b/openssh_10_0_released) - [OpenSSH 10.0 released](https://www.openwall.com/lists/oss-security/2025/04/09/1)
* [2025-04-09, 09:15:00](https://slashdot.org/story/25/04/09/0912235/enterprises-are-shunning-vendors-in-favor-of-diy-approach-to-ai-ubs-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Enterprises Are Shunning Vendors in Favor of DIY Approach To AI, UBS Says](https://slashdot.org/story/25/04/09/0912235/enterprises-are-shunning-vendors-in-favor-of-diy-approach-to-ai-ubs-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 07:28:00](https://soylentnews.org/article.pl?sid=25/04/08/1159249&amp;from=rss) - [Facial Recognition Tech, Developed With a Clear Purpose in Mind](https://soylentnews.org/article.pl?sid=25/04/08/1159249&amp;from=rss)
* [2025-04-09, 07:23:04](https://lobste.rs/s/w3jjb2/surprising_enum_size_optimization_rust) - [A surprising enum size optimization in the Rust compiler](https://jpfennell.com/posts/enum-type-size/)
* [2025-04-09, 06:30:00](https://news.slashdot.org/story/25/04/09/0451237/clean-energy-powered-40-of-global-electricity-in-2024-report-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Clean Energy Powered 40% of Global Electricity in 2024, Report Finds](https://news.slashdot.org/story/25/04/09/0451237/clean-energy-powered-40-of-global-electricity-in-2024-report-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 04:00:00](https://slashdot.org/story/25/04/09/0134223/fake-job-seekers-are-flooding-us-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fake Job Seekers Are Flooding US Companies ](https://slashdot.org/story/25/04/09/0134223/fake-job-seekers-are-flooding-us-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 02:42:00](https://soylentnews.org/article.pl?sid=25/04/07/1513227&amp;from=rss) - [Scientists Use Sound to Generate and Shape Water Waves](https://soylentnews.org/article.pl?sid=25/04/07/1513227&amp;from=rss)
* [2025-04-09, 02:31:00](https://news.slashdot.org/story/25/04/09/0034251/hackers-spied-on-100-us-bank-regulators-emails-for-over-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Spied on 100 US Bank Regulators&apos; Emails for Over a Year](https://news.slashdot.org/story/25/04/09/0034251/hackers-spied-on-100-us-bank-regulators-emails-for-over-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-08, 21:55:00](https://soylentnews.org/article.pl?sid=25/04/07/1511216&amp;from=rss) - [No One Knows What the Hell an AI Agent is](https://soylentnews.org/article.pl?sid=25/04/07/1511216&amp;from=rss)
* [2025-04-08, 19:22:33](https://lobste.rs/s/tfeskt/netbird_connect_your_devices_into) - [Netbird: connect your devices into a WireGuard overlay network with SSO, MFA and granular access controls](https://github.com/netbirdio/netbird)
* [2025-04-08, 19:13:03](https://lobste.rs/s/ab6qap/obituary_for_cyc) - [Obituary for Cyc](https://yuxi-liu-wired.github.io/essays/posts/cyc/)
* [2025-04-08, 17:12:00](https://soylentnews.org/article.pl?sid=25/04/07/157225&amp;from=rss) - [Is Homo Sapiens an Invasive Species?](https://soylentnews.org/article.pl?sid=25/04/07/157225&amp;from=rss)
* [2025-04-08, 15:08:28](https://lobste.rs/s/xap6ps/better_typography_with_text_wrap_pretty) - [Better typography with text-wrap pretty](https://webkit.org/blog/16547/better-typography-with-text-wrap-pretty/)
* [2025-04-08, 12:23:00](https://soylentnews.org/article.pl?sid=25/04/07/154254&amp;from=rss) - [NASA&apos;s Webb Exposes Complex Atmosphere of Starless Super-Jupiter](https://soylentnews.org/article.pl?sid=25/04/07/154254&amp;from=rss)
* [2025-04-08, 10:39:46](https://lobste.rs/s/8rb7wk/parser_combinators_beat_regexes) - [Parser Combinators Beat Regexes](https://entropicthoughts.com/parser-combinators-beat-regexes)
* [2025-04-08, 07:42:00](https://soylentnews.org/article.pl?sid=25/04/07/151226&amp;from=rss) - [AMD Sets New Supercomputer Record, Runs CFD Simulation Over 25x Faster On Instinct Mi250X GPUs ](https://soylentnews.org/article.pl?sid=25/04/07/151226&amp;from=rss)
* [2025-04-08, 02:56:00](https://soylentnews.org/article.pl?sid=25/04/07/0055209&amp;from=rss) - [Earth May Have Had a Ring System 466 Million Years Ago](https://soylentnews.org/article.pl?sid=25/04/07/0055209&amp;from=rss)
* [2025-04-07, 22:11:00](https://soylentnews.org/article.pl?sid=25/04/06/198244&amp;from=rss) - [Operating System for Quantum Networks is a First](https://soylentnews.org/article.pl?sid=25/04/06/198244&amp;from=rss)
* [2025-04-07, 20:51:02](https://news.ycombinator.com/item?id=43615805) - [Uncovering a 0-Click RCE in the SuperNote Nomad E-Ink Tablet](https://www.prizmlabs.io/post/remote-rootkits-uncovering-a-0-click-rce-in-the-supernote-nomad-e-ink-tablet)
* [2025-04-07, 17:26:00](https://soylentnews.org/article.pl?sid=25/04/06/193210&amp;from=rss) - [Microsoft Analyzing Open-Source Bootloaders: Finding Vulnerabilities Faster With AI??](https://soylentnews.org/article.pl?sid=25/04/06/193210&amp;from=rss)
* [2025-04-07, 12:41:00](https://soylentnews.org/article.pl?sid=25/04/06/136221&amp;from=rss) - [UK Threatens £100K-A-Day Fines Under New Cyber Bill](https://soylentnews.org/article.pl?sid=25/04/06/136221&amp;from=rss)
* [2025-04-07, 07:56:00](https://soylentnews.org/article.pl?sid=25/04/06/130257&amp;from=rss) - [Cell Phone OPSEC for Border Crossings](https://soylentnews.org/article.pl?sid=25/04/06/130257&amp;from=rss)
* [2025-04-07, 03:25:13](https://news.ycombinator.com/item?id=43607325) - [Nix Derivations, Without Guessing](https://bernsteinbear.com/blog/nix-by-hand/)
* [2025-04-07, 03:10:00](https://soylentnews.org/article.pl?sid=25/04/06/1238211&amp;from=rss) - [New Zealand Start-Up Aims to Take Space Transport to New Heights](https://soylentnews.org/article.pl?sid=25/04/06/1238211&amp;from=rss)
* [2025-04-07, 00:02:54](https://news.ycombinator.com/item?id=43606126) - [Astrophotographers Help Scientists Solve Mystery of &apos;Sprite Fireworks&apos;](https://petapixel.com/2025/04/01/astrophotographers-help-scientists-solve-mystery-of-sprite-fireworks/)
* [2025-04-06, 22:22:00](https://soylentnews.org/article.pl?sid=25/04/05/1917232&amp;from=rss) - [Brain-Computer Interfaces Face a Critical Test](https://soylentnews.org/article.pl?sid=25/04/05/1917232&amp;from=rss)
* [2025-04-06, 17:34:00](https://soylentnews.org/article.pl?sid=25/04/05/1857225&amp;from=rss) - [Rapidus to Begin Trial Production of its 2nm Process This Month](https://soylentnews.org/article.pl?sid=25/04/05/1857225&amp;from=rss)
* [2025-04-06, 13:25:14](https://news.ycombinator.com/item?id=43601282) - [Men&apos;s Weird Collections Inspired the Modern Museum: Cabinets of Curiosities](https://worldhistory.substack.com/p/how-strange-mens-weird-collections)
* [2025-04-06, 12:47:00](https://soylentnews.org/article.pl?sid=25/04/05/1319211&amp;from=rss) - [CISPE Pumps €1 Million Of Microsoft&apos;s Money Into Fulcrum](https://soylentnews.org/article.pl?sid=25/04/05/1319211&amp;from=rss)
* [2025-04-06, 08:02:00](https://soylentnews.org/article.pl?sid=25/04/05/1234244&amp;from=rss) - [Open-Source Tool Designed To Throttle PC And Server Performance Based On Electricity Pricing](https://soylentnews.org/article.pl?sid=25/04/05/1234244&amp;from=rss)
* [2025-04-06, 03:16:00](https://soylentnews.org/article.pl?sid=25/04/05/123257&amp;from=rss) - [A New Antifungal Drug Works in a Surprising Way](https://soylentnews.org/article.pl?sid=25/04/05/123257&amp;from=rss)
