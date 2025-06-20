# [News Summary](https://kherrick.github.io/news-summary/)

## Climate and Environmental Science

* [Three Years Left To Limit Warming To 1.5C, Leading Scientists Warn](https://news.slashdot.org/story/25/06/19/2122207/three-years-left-to-limit-warming-to-15c-leading-scientists-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Axolotl Discovery Brings Us Closer Than Ever To Regrowing Human Limbs](https://science.slashdot.org/story/25/06/19/2130210/axolotl-discovery-brings-us-closer-than-ever-to-regrowing-human-limbs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [MIT Chemical Engineers Develop New Way To Separate Crude Oil](https://science.slashdot.org/story/25/06/19/2256256/mit-chemical-engineers-develop-new-way-to-separate-crude-oil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## AI and Technology Advancements

* [Social Media Ban Moves Closer in Australia After Tech Trial](https://tech.slashdot.org/story/25/06/20/0221229/social-media-ban-moves-closer-in-australia-after-tech-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Google is Using YouTube Videos To Train Its AI Video Generator](https://tech.slashdot.org/story/25/06/19/1613206/google-is-using-youtube-videos-to-train-its-ai-video-generator?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [AI Ethics Pioneer Calls Artificial General Intelligence 'Just Vibes and Snake Oil'](https://slashdot.org/story/25/06/19/0510206/ai-ethics-pioneer-calls-artificial-general-intelligence-just-vibes-and-snake-oil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cybersecurity and Data Privacy

* [The 16-Billion-Record Data Breach That No One's Ever Heard of](https://it.slashdot.org/story/25/06/19/2028246/the-16-billion-record-data-breach-that-no-ones-ever-heard-of?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [New Linux Flaws Enable Full Root Access via PAM and Udisks Across Major Distributions](https://thehackernews.com/2025/06/new-linux-flaws-enable-full-root-access.html)

* [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss)

## Innovations in Space and Astronomy

* [SpaceX Starship Explodes On Test Stand](https://science.slashdot.org/story/25/06/19/2034234/spacex-starship-explodes-on-test-stand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Giant, All-Seeing Telescope Is Set to Revolutionize Astronomy](https://www.science.org/content/article/giant-all-seeing-telescope-set-revolutionize-astronomy)

* [Behold the First Images of the Sun’s South Pole](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss)

## Programming and Software Development

* [Zig And Rust](https://matklad.github.io/2023/03/26/zig-and-rust.html)

* [Revisiting Knuth’s “Premature Optimization” Paper](https://probablydance.com/2025/06/19/revisiting-knuths-premature-optimization-paper/)

* [Metaobject Protocols: Why we want them and what else they can do (1993)](https://cseweb.ucsd.edu/%7Evahdat/papers/mop.pdf)

## Open Source and Hacker Tools

* [Show HN: ATAC, an event verification platform evidence based](https://atac.seraum.com)

* [Show HN: A DOS-like hobby OS written in Rust and x86 assembly](https://github.com/krustowski/rou2exOS)

* [The Zed Debugger is Here](https://zed.dev/blog/debugger)

## Cultural and Historical Insights

* [Chinese Studios Plan AI-Powered Remakes of Kung Fu Classics](https://entertainment.slashdot.org/story/25/06/19/2050243/chinese-studios-plan-ai-powered-remakes-of-kung-fu-classics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Visual History of the Latin Alphabet](https://uclab.fh-potsdam.de/arete/en)

* [Reddit User Surprised When 1960s Computer Panel Emerged From Collapsed Family Garage](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss)

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

* [2025-06-20, 03:30:00](https://news.slashdot.org/story/25/06/19/2122207/three-years-left-to-limit-warming-to-15c-leading-scientists-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Three Years Left To Limit Warming To 1.5C, Leading Scientists Warn](https://news.slashdot.org/story/25/06/19/2122207/three-years-left-to-limit-warming-to-15c-leading-scientists-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 02:58:39](https://lobste.rs/s/hnfoam/zig_rust) - [Zig And Rust](https://matklad.github.io/2023/03/26/zig-and-rust.html)
* [2025-06-20, 02:30:00](https://tech.slashdot.org/story/25/06/20/0221229/social-media-ban-moves-closer-in-australia-after-tech-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Social Media Ban Moves Closer in Australia After Tech Trial](https://tech.slashdot.org/story/25/06/20/0221229/social-media-ban-moves-closer-in-australia-after-tech-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 01:44:55](https://lobste.rs/s/ibipnj/feeling_blue_noroff_inside) - [Feeling Blue(Noroff): Inside a Sophisticated DPRK Web3 Intrusion](https://www.huntress.com/blog/inside-bluenoroff-web3-intrusion-analysis)
* [2025-06-20, 01:35:36](https://lobste.rs/s/bwbvcn/revisiting_knuth_s_premature) - [Revisiting Knuth’s “Premature Optimization” Paper](https://probablydance.com/2025/06/19/revisiting-knuths-premature-optimization-paper/)
* [2025-06-20, 01:27:16](https://news.ycombinator.com/item?id=44323982) - [Show HN: ATAC, an event verification platform evidence based](https://atac.seraum.com)
* [2025-06-20, 01:10:00](https://science.slashdot.org/story/25/06/19/2130210/axolotl-discovery-brings-us-closer-than-ever-to-regrowing-human-limbs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Axolotl Discovery Brings Us Closer Than Ever To Regrowing Human Limbs](https://science.slashdot.org/story/25/06/19/2130210/axolotl-discovery-brings-us-closer-than-ever-to-regrowing-human-limbs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 01:07:43](https://news.ycombinator.com/item?id=44323914) - [FedFlix — Public Domain Stock Footage Library](https://public.resource.org/ntis.gov/index.html)
* [2025-06-20, 01:06:12](https://news.ycombinator.com/item?id=44323904) - [Open source can&apos;t coordinate](https://matklad.github.io/2025/05/20/open-source-cant-coordinate.html)
* [2025-06-20, 00:30:00](https://science.slashdot.org/story/25/06/19/2256256/mit-chemical-engineers-develop-new-way-to-separate-crude-oil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MIT Chemical Engineers Develop New Way To Separate Crude Oil](https://science.slashdot.org/story/25/06/19/2256256/mit-chemical-engineers-develop-new-way-to-separate-crude-oil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 00:18:37](https://lobste.rs/s/4gcvo0/metaobject_protocols_why_we_want_them) - [Metaobject Protocols: Why we want them and what else they can do (1993)](https://cseweb.ucsd.edu/%7Evahdat/papers/mop.pdf)
* [2025-06-20, 00:16:57](https://news.ycombinator.com/item?id=44323719) - [Infinite Mac OS X](https://blog.persistent.info/2025/03/infinite-mac-os-x.html)
* [2025-06-20, 00:13:00](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss) - [Fermilab G-2 Collaboration Publishes Final Result](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss)
* [2025-06-19, 23:50:00](https://apple.slashdot.org/story/25/06/19/230226/macos-tahoe-beta-drops-firewire-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [macOS Tahoe Beta Drops FireWire Support](https://apple.slashdot.org/story/25/06/19/230226/macos-tahoe-beta-drops-firewire-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 23:21:40](https://news.ycombinator.com/item?id=44323411) - [Sunsonic 986-II – A Thai Famicom clone with keyboard and mini CRT built-in](https://mastodon.gamedev.place/@pikuma/114711138512697712)
* [2025-06-19, 23:17:39](https://news.ycombinator.com/item?id=44323389) - [Giant, All-Seeing Telescope Is Set to Revolutionize Astronomy](https://www.science.org/content/article/giant-all-seeing-telescope-set-revolutionize-astronomy)
* [2025-06-19, 23:10:00](https://slashdot.org/story/25/06/19/213255/publishers-facing-existential-threat-from-ai-cloudflare-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Publishers Facing Existential Threat From AI, Cloudflare CEO Says](https://slashdot.org/story/25/06/19/213255/publishers-facing-existential-threat-from-ai-cloudflare-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 22:49:49](https://news.ycombinator.com/item?id=44323253) - [Show HN: I wrote a new BitTorrent tracker in Elixir](https://github.com/Dahrkael/ExTracker)
* [2025-06-19, 22:30:00](https://entertainment.slashdot.org/story/25/06/19/2050243/chinese-studios-plan-ai-powered-remakes-of-kung-fu-classics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Studios Plan AI-Powered Remakes of Kung Fu Classics](https://entertainment.slashdot.org/story/25/06/19/2050243/chinese-studios-plan-ai-powered-remakes-of-kung-fu-classics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 22:18:45](https://news.ycombinator.com/item?id=44323045) - [Literate programming tool for any language](https://github.com/zyedidia/Literate)
* [2025-06-19, 21:50:00](https://it.slashdot.org/story/25/06/19/2046206/microsoft-365-brings-the-shutters-down-on-legacy-protocols?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft 365 Brings the Shutters Down On Legacy Protocols](https://it.slashdot.org/story/25/06/19/2046206/microsoft-365-brings-the-shutters-down-on-legacy-protocols?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 21:10:00](https://science.slashdot.org/story/25/06/19/2034234/spacex-starship-explodes-on-test-stand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Starship Explodes On Test Stand](https://science.slashdot.org/story/25/06/19/2034234/spacex-starship-explodes-on-test-stand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 20:30:00](https://it.slashdot.org/story/25/06/19/2028246/the-16-billion-record-data-breach-that-no-ones-ever-heard-of?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The 16-Billion-Record Data Breach That No One&apos;s Ever Heard of](https://it.slashdot.org/story/25/06/19/2028246/the-16-billion-record-data-breach-that-no-ones-ever-heard-of?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 19:56:36](https://lobste.rs/s/ofnqos/less_humble_programmer_2023) - [The Less Humble Programmer (2023)](https://digitalhumanities.org/dhq/vol/17/2/000698/000698.html)
* [2025-06-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss) - [Welcome to the ‘Infinite Workday’ of 8 P.M. Meetings and Constant Messages](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss)
* [2025-06-19, 19:20:54](https://news.ycombinator.com/item?id=44321672) - [Compiling LLMs into a MegaKernel: A path to low-latency inference](https://zhihaojia.medium.com/compiling-llms-into-a-megakernel-a-path-to-low-latency-inference-cf7840913c17)
* [2025-06-19, 18:40:00](https://it.slashdot.org/story/25/06/19/1619248/hackers-are-turning-tech-support-into-a-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Are Turning Tech Support Into a Threat](https://it.slashdot.org/story/25/06/19/1619248/hackers-are-turning-tech-support-into-a-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 18:39:01](https://lobste.rs/s/atxw9h/bibliography_scheme_related_research) - [Bibliography of Scheme-related Research (2012)](https://web.archive.org/web/20180625085633/http://library.readscheme.org/)
* [2025-06-19, 18:09:51](https://lobste.rs/s/76i5wh/i_want_love_linux_it_doesn_t_love_me_back) - [I Want to Love Linux. It Doesn’t Love Me Back: Post 4 – Wayland Is Growing Up. And Now We Don’t Have a Choice](https://fireborn.mataroa.blog/blog/i-want-to-love-linux-it-doesnt-love-me-back-post-4-wayland-is-growing-up-and-now-we-dont-have-a-choice/)
* [2025-06-19, 18:00:00](https://tech.slashdot.org/story/25/06/19/1613206/google-is-using-youtube-videos-to-train-its-ai-video-generator?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google is Using YouTube Videos To Train Its AI Video Generator](https://tech.slashdot.org/story/25/06/19/1613206/google-is-using-youtube-videos-to-train-its-ai-video-generator?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 17:32:21](https://news.ycombinator.com/item?id=44320772) - [Show HN: EnrichMCP – A Python ORM for Agents](https://github.com/featureform/enrichmcp)
* [2025-06-19, 17:29:35](https://news.ycombinator.com/item?id=44320747) - [Homegrown Closures for Uxn](https://krzysckh.org/b/Homegrown-closures-for-uxn.html)
* [2025-06-19, 17:26:54](https://lobste.rs/s/5dbwyr/homegrown_closures_for_uxn) - [Homegrown closures for Uxn](https://krzysckh.org/b/Homegrown-closures-for-uxn.html)
* [2025-06-19, 17:20:00](https://slashdot.org/story/25/06/19/165237/reasoning-llms-deliver-value-today-so-agi-hype-doesnt-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reasoning LLMs Deliver Value Today, So AGI Hype Doesn&apos;t Matter](https://slashdot.org/story/25/06/19/165237/reasoning-llms-deliver-value-today-so-agi-hype-doesnt-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 17:00:39](https://news.ycombinator.com/item?id=44320460) - [Flowspace (YC S17) Is Hiring Software Engineers](https://flowspace.applytojob.com/apply/6oDtY2q6E9/Software-Engineer-II)
* [2025-06-19, 16:41:29](https://lobste.rs/s/ac19tp/2048_with_only_64_bits_state) - [2048 with only 64 bits of state](https://github.com/izabera/bitwise-challenge-2048)
* [2025-06-19, 16:40:00](https://apple.slashdot.org/story/25/06/19/084215/apple-software-chief-rejects-macos-on-ipad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Software Chief Rejects macOS on iPad](https://apple.slashdot.org/story/25/06/19/084215/apple-software-chief-rejects-macos-on-ipad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 16:11:46](https://news.ycombinator.com/item?id=44320001) - [How OpenElections uses LLMs](https://thescoop.org/archives/2025/06/09/how-openelections-uses-llms/index.html)
* [2025-06-19, 16:01:00](https://slashdot.org/story/25/06/19/0510206/ai-ethics-pioneer-calls-artificial-general-intelligence-just-vibes-and-snake-oil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Ethics Pioneer Calls Artificial General Intelligence &apos;Just Vibes and Snake Oil&apos;](https://slashdot.org/story/25/06/19/0510206/ai-ethics-pioneer-calls-artificial-general-intelligence-just-vibes-and-snake-oil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 15:54:51](https://lobste.rs/s/6sbyyj/16_billion_record_data_breach_no_one_s_ever) - [The 16-billion-record data breach that no one’s ever heard of](https://cybernews.com/security/billions-credentials-exposed-infostealers-data-leak/)
* [2025-06-19, 15:17:33](https://lobste.rs/s/jtrrow/dynamic_graph_approach_immediate_cycle) - [A Dynamic Graph Approach to Immediate Cycle Collection](https://dl.acm.org/doi/10.1145/3735950.3735953)
* [2025-06-19, 14:39:00](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss) - [Marijuana to Treat Autism? Some Parents Say Yes](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss)
* [2025-06-19, 14:13:15](https://news.ycombinator.com/item?id=44318874) - [Curved-Crease Sculpture](https://erikdemaine.org/curved/)
* [2025-06-19, 13:38:57](https://news.ycombinator.com/item?id=44318588) - [Show HN: A DOS-like hobby OS written in Rust and x86 assembly](https://github.com/krustowski/rou2exOS)
* [2025-06-19, 12:00:54](https://news.ycombinator.com/item?id=44317825) - [What would a Kubernetes 2.0 look like](https://matduggan.com/what-would-a-kubernetes-2-0-look-like/)
* [2025-06-19, 12:00:14](https://lobste.rs/s/kmizrf/what_would_kubernetes_2_0_look_like) - [What Would a Kubernetes 2.0 Look Like](https://matduggan.com/what-would-a-kubernetes-2-0-look-like/)
* [2025-06-19, 10:27:52](https://lobste.rs/s/jnhsdh/2025_stack_overflow_developer_survey) - [2025 Stack Overflow Developer Survey](https://stackoverflow.az1.qualtrics.com/jfe/form/SV_1MNG2CYTY2AzkAm)
* [2025-06-19, 10:22:06](https://news.ycombinator.com/item?id=44317180) - [Guess I&apos;m a Rationalist Now](https://scottaaronson.blog/?p=8908)
* [2025-06-19, 10:10:27](https://lobste.rs/s/cjnt2y/rewriting_kafka_rust_async_insights) - [Rewriting Kafka in Rust Async: Insights and Lessons Learned in Rust](https://wangjunfei.com/2025/06/18/Rewriting-Kafka-in-Rust-Async-Insights-and-Lessons-Learned/)
* [2025-06-19, 09:54:00](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss) - [Reddit User Surprised When 1960s Computer Panel Emerged From Collapsed Family Garage](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss)
* [2025-06-19, 09:46:43](https://news.ycombinator.com/item?id=44317012) - [Show HN: Claude Code Usage Monitor – real-time tracker to dodge usage cut-offs](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor)
* [2025-06-19, 08:52:49](https://lobste.rs/s/qc3ywx/elliptic_curves_as_art) - [Elliptic curves as art](https://elliptic-curves.art/)
* [2025-06-19, 08:39:22](https://lobste.rs/s/sk0zq9/liberux_nexx_interview_with_liberux) - [Liberux Nexx: An interview with Liberux about their made-in-EU OSHW Linux Phone](https://linmob.net/liberux-nexx-an-interview-with-liberux/)
* [2025-06-19, 06:37:07](https://lobste.rs/s/blwshw/charmbracelet_fang_cli_starter_kit) - [charmbracelet/fang: The CLI starter kit](https://github.com/charmbracelet/fang)
* [2025-06-19, 06:28:32](https://lobste.rs/s/h0x2za/new_linux_flaws_enable_full_root_access) - [New Linux Flaws Enable Full Root Access via PAM and Udisks Across Major Distributions](https://thehackernews.com/2025/06/new-linux-flaws-enable-full-root-access.html)
* [2025-06-19, 05:08:00](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss) - [Zero-Click AI Vulnerability Exposes Microsoft 365 Copilot Data Without User Interaction](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss)
* [2025-06-19, 00:33:21](https://news.ycombinator.com/item?id=44314423) - [Andrej Karpathy: Software in the era of AI [video]](https://www.youtube.com/watch?v=LCEmiRjPEtQ)
* [2025-06-19, 00:22:00](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss) - [Honda Shows Low Speed, Narrow BEV for City Delivery](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss)
* [2025-06-18, 21:39:09](https://lobste.rs/s/1nyzfj/it_s_true_we_don_t_care_about_accessibility) - [It’s True, “We” Don’t Care About Accessibility on Linux](https://tesk.page/2025/06/18/its-true-we-dont-care-about-accessibility-on-linux/)
* [2025-06-18, 21:08:20](https://lobste.rs/s/5moehg/quick_notes_on_brief_agentic_coding) - [Quick notes on a brief agentic coding experience](https://olano.dev/blog/agentic-coding-experience/)
* [2025-06-18, 20:16:53](https://lobste.rs/s/ncg3v3/lisp_icing_cake) - [Lisp: Icing or Cake?](https://dthompson.us/posts/lisp-icing-or-cake.html)
* [2025-06-18, 19:38:00](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss) - [Trump&apos;s Cuts to NASA and the National Science Foundation Will Have Huge Consequences](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss)
* [2025-06-18, 17:57:44](https://news.ycombinator.com/item?id=44311968) - [RaptorCast: Designing a Messaging Layer](https://www.category.xyz/blogs/raptorcast-designing-a-messaging-layer)
* [2025-06-18, 17:57:32](https://lobste.rs/s/rwbtwd/zed_debugger_is_here) - [The Zed Debugger is Here](https://zed.dev/blog/debugger)
* [2025-06-18, 17:26:22](https://lobste.rs/s/mwdh7t/analysing_rust_crates_for_weekend) - [Analysing Rust crates for weekend (hobbyist) vs weekday (working-dev) downloads](https://boydkane.com/projects/crates-download-ratio)
* [2025-06-18, 15:06:53](https://lobste.rs/s/lalc7r/moving_on_from_nix) - [Moving on from Nix](https://carlosbecker.com/posts/bye-nix/)
* [2025-06-18, 14:50:00](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss) - [Google&apos;s Advanced Protection Arrives on Android: Should You Use It?](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss)
* [2025-06-18, 14:05:58](https://lobste.rs/s/8t6uxp/server_doesn_t_render_anything) - [The Server Doesn&apos;t Render Anything](https://unplannedobsolescence.com/blog/the-server-doesnt-render/)
* [2025-06-18, 10:04:00](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss) - [The Effect of Physical Fitness on Mortality is Overestimated](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss)
* [2025-06-18, 05:17:00](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss) - [SmartAttack Uses Smartwatches to Steal Data From Air-Gapped Systems](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss)
* [2025-06-18, 00:32:00](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss) - [Kali Linux 2025.2 released with 13 new tools, car hacking updates](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss)
* [2025-06-17, 19:45:00](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss) - [You Don&apos;t Have to Almost Die to be Happy at Work, but It Helps](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss)
* [2025-06-17, 17:56:04](https://news.ycombinator.com/item?id=44301875) - [Public/protected/private is an unnecessary feature](https://catern.com/private.html)
* [2025-06-17, 17:46:40](https://news.ycombinator.com/item?id=44301765) - [Star Quakes and Monster Shock Waves](https://www.caltech.edu/about/news/star-quakes-and-monster-shock-waves)
* [2025-06-17, 16:20:59](https://news.ycombinator.com/item?id=44300854) - [Show HN: RM2000 Tape Recorder, an audio sampler for macOS](https://rm2000.app)
* [2025-06-17, 15:05:00](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss) - [4Chan Under Investigation by Uk Ofcom Over Online Safety Concerns](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss)
* [2025-06-17, 14:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss) - [This Is Not A Drill](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss)
* [2025-06-17, 13:51:20](https://news.ycombinator.com/item?id=44299233) - [Visual History of the Latin Alphabet](https://uclab.fh-potsdam.de/arete/en)
* [2025-06-17, 11:15:25](https://news.ycombinator.com/item?id=44297761) - [We Can Just Measure Things](https://lucumr.pocoo.org/2025/6/17/measuring/)
* [2025-06-17, 10:18:00](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss) - [Behold the First Images of the Sun’s South Pole](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss)
* [2025-06-17, 05:30:00](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss) - [Can We Stop Big Tech From Controlling the Internet With AI Agents?](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss)
* [2025-06-17, 00:43:00](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss) - [TSMC Slows Down Global Plans Due to Soft Demand, but Accelerates Arizona Fab Plans by Six Months](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss)
* [2025-06-16, 19:56:00](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss) - [Washington Post in Talks With Substack About Using its Writers](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss)
* [2025-06-16, 19:05:14](https://news.ycombinator.com/item?id=44292460) - [String Interpolation in C++ Using Glaze Stencil/Mustache](https://stephenberry.github.io/glaze/stencil-mustache/)
* [2025-06-16, 17:41:27](https://news.ycombinator.com/item?id=44291642) - [Extracting memorized pieces of books from open-weight language models](https://arxiv.org/abs/2505.12546)
* [2025-06-16, 15:11:00](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss) - [Huawei CEO Says Washington Has Exaggerated its Achievements, Saying the Company Isn&apos;t That Powerful](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss)
* [2025-06-16, 11:33:45](https://news.ycombinator.com/item?id=44288595) - [Octobass](https://www.atlasobscura.com/places/octobass)
* [2025-06-16, 10:25:00](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss) - [Buried Under 2 Kilometers of Antarctic Ice, Scientists Find a 34-Million-Year-Old Lost World](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss)
* [2025-06-16, 09:38:00](https://news.ycombinator.com/item?id=44287926) - [DNA floating in the air tracks wildlife, viruses, even drugs](https://www.sciencedaily.com/releases/2025/06/250603114822.htm)
* [2025-06-16, 05:41:00](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss) - [Photonic Processor Could Streamline 6G Wireless Signal Processing](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss)
* [2025-06-16, 00:58:00](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss) - [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss)
