# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Highlights

* [Microsoft's 6502 BASIC Is Now Open Source](https://news.slashdot.org/story/25/09/04/1649210/microsofts-6502-basic-is-now-open-source?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A pivotal move as Microsoft makes its historical 6502 BASIC code open source, providing insight into early computing.

* [Stripe Launches L1 Blockchain: Tempo](https://tempo.xyz) - Stripe dives into blockchain technology with the launch of Tempo, its new Layer 1 blockchain.

* [We built an interpreter for Swift (a compiled language)](https://www.bitrig.app/blog/swift-interpreter) - Developers showcase their feat of creating an interpreter for Swift, sparking discussions on how compiled languages can embrace more flexible execution models.

## Healthcare and Science

* [WiFi signals can measure heart rate–no wearables needed](https://news.ucsc.edu/2025/09/pulse-fi-wifi-heart-rate/) - A breakthrough in healthcare technology as researchers demonstrate how WiFi signals can monitor heart rate without needing wearable devices.

* [Sweeteners Can Harm Cognitive Health Equivalent To 1.6 Years of Aging, Study Finds](https://science.slashdot.org/story/25/09/03/230240/sweeteners-can-harm-cognitive-health-equivalent-to-16-years-of-aging-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A study provides troubling insights into the nefarious health impacts of artificial sweeteners on cognitive function.

## Gaming and Acquisitions

* [Hollow Knight: Silksong causes server chaos on Xbox, Steam, and Nintendo](https://www.eurogamer.net/silksong-causes-server-chaos-on-xbox-steam-and-nintendo-as-platforms-grind-to-a-halt) - Massive demand for Hollow Knight: Silksong crashes gaming platforms, highlighting its immense popularity.

* [Atlassian Agrees To Acquire The Browser Co. For $610 Million](https://it.slashdot.org/story/25/09/04/1442241/atlassian-agrees-to-acquire-the-browser-co-for-610-million?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Atlassian makes a significant acquisition with the purchase of The Browser Co. for $610 million.

## Artificial Intelligence and Job Markets

* [AI Not Affecting Job Market Much So Far, New York Fed Says](https://news.slashdot.org/story/25/09/04/168211/ai-not-affecting-job-market-much-so-far-new-york-fed-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers find that artificial intelligence has had limited impact on employment metrics so far.

* [New AI Model Turns Photos Into Explorable 3D Worlds, With Caveats](https://news.slashdot.org/story/25/09/03/2312210/new-ai-model-turns-photos-into-explorable-3d-worlds-with-caveats?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An innovative AI model creates interactive 3D spaces from photos, offering a glimpse into the future of visuals but with technological limitations.

## Retro Computing

* [BASIC-M6502: Microsoft BASIC for 6502 Microprocessor - Version 1.1](https://github.com/microsoft/BASIC-M6502) - A historical throwback as the early BASIC language implementation for 6502 becomes available for enthusiasts and researchers alike.

* [Airbus B612 cockpit font](https://github.com/polarsys/b612) - An aviation-centric font made publicly available, showcasing UX focus in cockpit design.

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

* [2025-09-04, 18:45:00](https://it.slashdot.org/story/25/09/04/1823204/solar-powered-logitech-keyboard-appears-on-amazon-mexico?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Solar-Powered Logitech Keyboard Appears on Amazon Mexico](https://it.slashdot.org/story/25/09/04/1823204/solar-powered-logitech-keyboard-appears-on-amazon-mexico?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 18:29:48](https://lobste.rs/s/b6ipnz/you_don_t_need_animations) - [You Don&apos;t Need Animations](https://emilkowal.ski/ui/you-dont-need-animations)
* [2025-09-04, 18:05:00](https://science.slashdot.org/story/25/09/04/1742218/ultra-processed-foods---its-time-for-an-improved-definition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ultra-Processed Foods - It&apos;s Time For an Improved Definition](https://science.slashdot.org/story/25/09/04/1742218/ultra-processed-foods---its-time-for-an-improved-definition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 17:44:49](https://news.ycombinator.com/item?id=45130018) - [The Atomic Bombs Exploded on Earth](https://kottke.org/25/09/the-thousands-of-atomic-bombs-exploded-on-earth)
* [2025-09-04, 17:29:00](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss) - [Passkeys Are Incompatible With Open-Source Software](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss)
* [2025-09-04, 17:27:00](https://it.slashdot.org/story/25/09/04/1710210/nvidia-dominates-gpu-shipments-with-94-share?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Dominates GPU Shipments With 94% Share](https://it.slashdot.org/story/25/09/04/1710210/nvidia-dominates-gpu-shipments-with-94-share?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 17:07:08](https://news.ycombinator.com/item?id=45129523) - [Saquon Is Playing for Equity](https://www.readtheprofile.com/p/saquon-barkley-investment-portfolio)
* [2025-09-04, 17:01:21](https://news.ycombinator.com/item?id=45129442) - [Artie (YC S23) Is Hiring Engineers, AES, and Senior PMM](https://www.ycombinator.com/companies/artie/jobs)
* [2025-09-04, 16:49:00](https://news.slashdot.org/story/25/09/04/1649210/microsofts-6502-basic-is-now-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s 6502 BASIC Is Now Open Source](https://news.slashdot.org/story/25/09/04/1649210/microsofts-6502-basic-is-now-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 16:47:45](https://news.ycombinator.com/item?id=45129267) - [AI Not Affecting Job Market Much So Far, New York Fed Says](https://money.usnews.com/investing/news/articles/2025-09-04/ai-not-affecting-job-market-much-so-far-new-york-fed-says)
* [2025-09-04, 16:41:24](https://news.ycombinator.com/item?id=45129190) - [Age Simulation Suit](https://www.age-simulation-suit.com/)
* [2025-09-04, 16:39:03](https://news.ycombinator.com/item?id=45129160) - [We built an interpreter for Swift (a compiled language)](https://www.bitrig.app/blog/swift-interpreter)
* [2025-09-04, 16:32:24](https://news.ycombinator.com/item?id=45129085) - [Stripe Launches L1 Blockchain: Tempo](https://tempo.xyz)
* [2025-09-04, 16:27:41](https://news.ycombinator.com/item?id=45129031) - [Launch HN: Slashy (YC S25) – AI that connects to apps and does tasks](https://news.ycombinator.com/item?id=45129031)
* [2025-09-04, 16:08:00](https://news.slashdot.org/story/25/09/04/168211/ai-not-affecting-job-market-much-so-far-new-york-fed-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Not Affecting Job Market Much So Far, New York Fed Says](https://news.slashdot.org/story/25/09/04/168211/ai-not-affecting-job-market-much-so-far-new-york-fed-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 15:52:43](https://news.ycombinator.com/item?id=45128652) - [Show HN: A Map of All YC Companies (5,300 Startups by Batch and Location)](https://yc.foundersaround.com/)
* [2025-09-04, 15:51:26](https://news.ycombinator.com/item?id=45128640) - [Google deletes net-zero pledge from sustainability website](https://www.nationalobserver.com/2025/09/04/investigations/google-net-zero-sustainability)
* [2025-09-04, 15:49:52](https://news.ycombinator.com/item?id=45128621) - [Show HN: I built FlipCards – a flashcard app with variations to improve learning](https://flipcardsapp.vercel.app/)
* [2025-09-04, 15:46:23](https://news.ycombinator.com/item?id=45128578) - [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache)
* [2025-09-04, 15:30:20](https://news.ycombinator.com/item?id=45128391) - [Wikipedia survives while the rest of the internet breaks](https://www.theverge.com/cs/features/717322/wikipedia-attacks-neutrality-history-jimmy-wales)
* [2025-09-04, 15:28:11](https://lobste.rs/s/ubyo2n/embedded_dev_kit_for_endbasic_with_netbsd) - [An embedded dev kit for EndBASIC with NetBSD](https://youtu.be/WZFYTInWAqc)
* [2025-09-04, 15:22:03](https://news.ycombinator.com/item?id=45128299) - [Farewell to Meshnet](https://nordvpn.com/blog/meshnet-shutdown/)
* [2025-09-04, 15:20:00](https://news.slashdot.org/story/25/09/04/1518217/robinhood-ceo-vlad-tenev-says-investing-for-a-living-could-replace-labor-in-a-post-ai-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robinhood CEO Vlad Tenev Says Investing For a Living Could Replace Labor in a Post-AI World](https://news.slashdot.org/story/25/09/04/1518217/robinhood-ceo-vlad-tenev-says-investing-for-a-living-could-replace-labor-in-a-post-ai-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 14:58:58](https://lobste.rs/s/vdankx/look_out_for_bugs) - [Look Out For Bugs](https://matklad.github.io/2025/09/04/look-for-bugs.html)
* [2025-09-04, 14:53:50](https://news.ycombinator.com/item?id=45127983) - [WiFi signals can measure heart rate–no wearables needed](https://news.ucsc.edu/2025/09/pulse-fi-wifi-heart-rate/)
* [2025-09-04, 14:42:00](https://it.slashdot.org/story/25/09/04/1442241/atlassian-agrees-to-acquire-the-browser-co-for-610-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Atlassian Agrees To Acquire The Browser Co. For $610 Million](https://it.slashdot.org/story/25/09/04/1442241/atlassian-agrees-to-acquire-the-browser-co-for-610-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 14:39:38](https://news.ycombinator.com/item?id=45127816) - [Hollow Knight: Silksong causes server chaos on Xbox, Steam, and Nintendo](https://www.eurogamer.net/silksong-causes-server-chaos-on-xbox-steam-and-nintendo-as-platforms-grind-to-a-halt)
* [2025-09-04, 14:00:00](https://slashdot.org/story/25/09/04/1231230/indias-ai-story-is-all-talk-little-substance-says-bernstein?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India&apos;s AI Story Is &apos;All Talk, Little Substance,&apos; Says Bernstein](https://slashdot.org/story/25/09/04/1231230/indias-ai-story-is-all-talk-little-substance-says-bernstein?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 13:00:00](https://news.slashdot.org/story/25/09/03/2312210/new-ai-model-turns-photos-into-explorable-3d-worlds-with-caveats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New AI Model Turns Photos Into Explorable 3D Worlds, With Caveats](https://news.slashdot.org/story/25/09/03/2312210/new-ai-model-turns-photos-into-explorable-3d-worlds-with-caveats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 12:44:00](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss) - [Get Ready for Plastic Blood](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss)
* [2025-09-04, 12:40:47](https://news.ycombinator.com/item?id=45126586) - [How to build vector tiles from scratch](https://www.debuisne.com/writing/geo-tiles/)
* [2025-09-04, 12:38:10](https://lobste.rs/s/8tfol4/formally_verifying_fp_division_with) - [Formally verifying FP division with Gappa](https://community.arm.com/arm-community-blogs/b/embedded-and-microcontrollers-blog/posts/formally-verifying-a-floating-point-division-routine-with-gappa-p1)
* [2025-09-04, 12:29:49](https://news.ycombinator.com/item?id=45126503) - [Almost anything you give sustained attention to will begin to loop on itself](https://www.henrikkarlsson.xyz/p/attention)
* [2025-09-04, 12:18:27](https://lobste.rs/s/z4cszc/programming_lang_future) - [The Programming-Lang of the Future](https://vimeo.com/1115794889)
* [2025-09-04, 12:12:31](https://news.ycombinator.com/item?id=45126358) - [Atlassian is acquiring The Browser Company](https://www.cnbc.com/2025/09/04/atlassian-the-browser-company-deal.html)
* [2025-09-04, 11:27:26](https://lobste.rs/s/6tfwtv/why_ml_needs_new_programming_language) - [Why ML Needs a New Programming Language](https://signalsandthreads.com/why-ml-needs-a-new-programming-language/)
* [2025-09-04, 11:04:36](https://news.ycombinator.com/item?id=45125859) - [Le Chat: Custom MCP Connectors, Memories](https://mistral.ai/news/le-chat-mcp-connectors-memories)
* [2025-09-04, 11:01:50](https://lobste.rs/s/pvwg6m/ca_trusted_by_microsoft_mis_issued) - [A CA Trusted by Microsoft Mis-issued Certificates for 1.1.1.1 in May 2025, According to Logs](https://arstechnica.com/security/2025/09/mis-issued-certificates-for-1-1-1-1-dns-service-pose-a-threat-to-the-internet/)
* [2025-09-04, 10:56:46](https://lobste.rs/s/za9lgt/practical_introduction_parsing_rust) - [A practical introduction to parsing in Rust](https://jhwlr.io/intro-to-parsing/)
* [2025-09-04, 10:56:37](https://news.ycombinator.com/item?id=45125816) - [Electromechanical reshaping offers safer eye surgery](https://spectrum.ieee.org/electrochemistry-for-eye-surgeries)
* [2025-09-04, 10:00:00](https://science.slashdot.org/story/25/09/03/230240/sweeteners-can-harm-cognitive-health-equivalent-to-16-years-of-aging-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sweeteners Can Harm Cognitive Health Equivalent To 1.6 Years of Aging, Study Finds](https://science.slashdot.org/story/25/09/03/230240/sweeteners-can-harm-cognitive-health-equivalent-to-16-years-of-aging-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 09:21:38](https://lobste.rs/s/ksxhza/jujutsu_v0_33_0_released) - [jujutsu v0.33.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.33.0)
* [2025-09-04, 08:08:24](https://lobste.rs/s/bisfwa/route_layer_process_kafka_messages_with) - [Route, Layer and Process Kafka Messages with Tansu Services](https://blog.tansu.io/articles/route-layer-service)
* [2025-09-04, 07:57:00](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss) - [Nearly 40% of Nvidia&apos;s Revenue Tied to Two Mystery Customers, Filing Shows](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss)
* [2025-09-04, 07:01:39](https://lobste.rs/s/athmwa/setting_up_cgit_with_caddy_v2_2022) - [Setting up cgit with Caddy v2 (2022)](https://www.sixfoisneuf.fr/posts/setting-up-cgit-with-caddy2/)
* [2025-09-04, 07:00:00](https://tech.slashdot.org/story/25/09/03/2253256/melvyn-bragg-steps-down-from-bbc-radio-4s-in-our-time-after-26-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Melvyn Bragg Steps Down From BBC Radio 4&apos;s In Our Time After 26 Years](https://tech.slashdot.org/story/25/09/03/2253256/melvyn-bragg-steps-down-from-bbc-radio-4s-in-our-time-after-26-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 06:22:20](https://news.ycombinator.com/item?id=45124165) - [Kruci: Post-Mortem of a UI Library](https://pwy.io/posts/kruci-post-mortem/)
* [2025-09-04, 06:18:13](https://news.ycombinator.com/item?id=45124143) - [Melvyn Bragg steps down from presenting In Our Time](https://www.bbc.co.uk/mediacentre/2025/melvyn-bragg-decides-to-step-down-from-presenting-in-our-time/)
* [2025-09-04, 05:58:25](https://lobste.rs/s/mjajol/faster_rust_builds_on_mac) - [Faster Rust builds on Mac](https://nnethercote.github.io/2025/09/04/faster-rust-builds-on-mac.html)
* [2025-09-04, 05:56:29](https://news.ycombinator.com/item?id=45124003) - [30 minutes with a stranger](https://pudding.cool/2025/06/hello-stranger/)
* [2025-09-04, 03:30:00](https://science.slashdot.org/story/25/09/03/2131226/putin-and-xi-caught-discussing-organ-transplants-and-immortality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Putin and Xi Caught Discussing Organ Transplants and Immortality](https://science.slashdot.org/story/25/09/03/2131226/putin-and-xi-caught-discussing-organ-transplants-and-immortality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 03:14:00](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss) - [People Who Believe in Conspiracy Theories Process Information Differently at the Neural Level](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss)
* [2025-09-04, 03:01:49](https://news.ycombinator.com/item?id=45123034) - [Polars Cloud and Distributed Polars now available](https://pola.rs/posts/polars-cloud-launch/)
* [2025-09-04, 02:37:42](https://news.ycombinator.com/item?id=45122885) - [A high schooler writes about AI tools in the classroom](https://www.theatlantic.com/technology/archive/2025/09/high-school-student-ai-education/684088/)
* [2025-09-04, 01:00:50](https://lobste.rs/s/veies2/welcoming_rust_innovation_lab) - [Welcoming the Rust Innovation Lab](https://blog.rust-lang.org/2025/09/03/welcoming-the-rust-innovation-lab/)
* [2025-09-04, 00:02:00](https://news.slashdot.org/story/25/09/03/2125252/switzerland-releases-open-source-ai-model-built-for-privacy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Switzerland Releases Open-Source AI Model Built For Privacy](https://news.slashdot.org/story/25/09/03/2125252/switzerland-releases-open-source-ai-model-built-for-privacy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 23:20:00](https://hardware.slashdot.org/story/25/09/03/2118243/googles-latest-pixel-drop-brings-the-material-3-expressive-ui-to-older-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Latest Pixel Drop Brings the Material 3 Expressive UI To Older Devices](https://hardware.slashdot.org/story/25/09/03/2118243/googles-latest-pixel-drop-brings-the-material-3-expressive-ui-to-older-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 23:01:41](https://lobste.rs/s/tgqg9o/serious_shanns_comic_sans_for_hackers) - [Serious Shanns: Comic Sans for hackers](https://github.com/kaBeech/serious-shanns)
* [2025-09-03, 22:47:22](https://lobste.rs/s/pqy0pp/where_s_shovelware_why_ai_coding_claims) - [Where&apos;s the Shovelware? Why AI Coding Claims Don&apos;t Add Up](https://substack.com/inbox/post/172538377)
* [2025-09-03, 22:40:00](https://tech.slashdot.org/story/25/09/03/2038216/garmin-beats-apple-to-market-with-satellite-connected-smartwatch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Garmin Beats Apple to Market with Satellite-Connected Smartwatch](https://tech.slashdot.org/story/25/09/03/2038216/garmin-beats-apple-to-market-with-satellite-connected-smartwatch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 22:27:00](https://soylentnews.org/article.pl?sid=25/09/02/192213&amp;from=rss) - [CRLite: Fast, Private, and Comprehensive Certificate Revocation Checking in Firefox](https://soylentnews.org/article.pl?sid=25/09/02/192213&amp;from=rss)
* [2025-09-03, 21:07:28](https://lobste.rs/s/pnu6ax/git_exclude_handy_feature_you_might_not) - [Git exclude, a handy feature you might not know about](https://marijkeluttekes.dev/blog/articles/2025/09/03/git-exclude-a-handy-feature-you-might-not-know-about/)
* [2025-09-03, 19:39:31](https://lobste.rs/s/tu3njx/making_small_clippy_lint) - [Making a small Clippy lint](https://erk.dev/2025/08/21/clippy-lint)
* [2025-09-03, 19:38:37](https://lobste.rs/s/yvqhaq/slint_1_13_released_with_live_preview_for) - [Slint 1.13 Released with Live-Preview for Rust and C++](https://slint.dev/blog/slint-1.13-released)
* [2025-09-03, 19:26:07](https://lobste.rs/s/cpzttx/first_gleam_conference_gathering_2026) - [The first Gleam Conference - Gathering 2026](https://gleamgathering.com/)
* [2025-09-03, 17:51:25](https://lobste.rs/s/rshhsu/basic_m6502_microsoft_basic_for_6502) - [BASIC-M6502: Microsoft BASIC for 6502 Microprocessor - Version 1.1](https://github.com/microsoft/BASIC-M6502)
* [2025-09-03, 17:44:00](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss) - [Microsoft Can&apos;t Guarantee Data Sovereignty – OVHcloud Says &apos;We Told You So&apos;](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss)
* [2025-09-03, 15:58:10](https://lobste.rs/s/jk6omn/how_we_made_kagi_assistant_load_twice_as) - [How we made Kagi Assistant load twice as fast](https://jacobwinters.com/kagi-assistant-optimization/)
* [2025-09-03, 14:59:02](https://lobste.rs/s/jeg5l9/why_rewriting_emacs_is_hard) - [Why Rewriting Emacs Is Hard](https://kyo.iroiro.party/en/posts/why-rewriting-emacs-is-hard/)
* [2025-09-03, 14:01:25](https://lobste.rs/s/jlkxjt/airbus_b612_cockpit_font) - [Airbus B612 cockpit font](https://github.com/polarsys/b612)
* [2025-09-03, 13:01:00](https://soylentnews.org/article.pl?sid=25/09/02/1851257&amp;from=rss) - [Fascinating New Psychology Research Shows How Music Shapes Imagination](https://soylentnews.org/article.pl?sid=25/09/02/1851257&amp;from=rss)
* [2025-09-03, 11:48:51](https://lobste.rs/s/hzky9k/wild_performance_tricks) - [Wild Performance Tricks](https://davidlattimore.github.io/posts/2025/09/02/rustforge-wild-performance-tricks.html)
* [2025-09-03, 11:25:42](https://lobste.rs/s/qb0qre/video_game_blurs_how_best_one_works) - [Video Game Blurs (and how the best one works)](https://blog.frost.kiwi/dual-kawase/)
* [2025-09-03, 10:26:00](https://soylentnews.org/article.pl?sid=25/09/03/0230242&amp;from=rss) - [We Fed People a Milkshake With 130g of Fat to See What It Did to Their Brains](https://soylentnews.org/article.pl?sid=25/09/03/0230242&amp;from=rss)
* [2025-09-03, 08:17:00](https://soylentnews.org/article.pl?sid=25/09/02/1848251&amp;from=rss) - [DUPE - China Turns on Giant Neutrino Detector](https://soylentnews.org/article.pl?sid=25/09/02/1848251&amp;from=rss)
* [2025-09-03, 03:31:00](https://soylentnews.org/article.pl?sid=25/09/02/0359228&amp;from=rss) - [Artificial Toy Story: Do AI-Powered Toys Take the Life Out of Playtime?](https://soylentnews.org/article.pl?sid=25/09/02/0359228&amp;from=rss)
* [2025-09-02, 22:46:00](https://soylentnews.org/article.pl?sid=25/09/02/0144236&amp;from=rss) - [World’s Largest Neutrino Detector Switches On](https://soylentnews.org/article.pl?sid=25/09/02/0144236&amp;from=rss)
* [2025-09-02, 17:59:00](https://soylentnews.org/article.pl?sid=25/09/01/0031222&amp;from=rss) - [New Paper Finds Cases of \&quot;AI Psychosis\&quot; Manifesting Differently From Schizophrenia](https://soylentnews.org/article.pl?sid=25/09/01/0031222&amp;from=rss)
* [2025-09-02, 13:14:00](https://soylentnews.org/article.pl?sid=25/09/01/0021218&amp;from=rss) - [The Unix Epochalypse Might be Sooner Than You Think](https://soylentnews.org/article.pl?sid=25/09/01/0021218&amp;from=rss)
* [2025-09-02, 08:26:00](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss) - [AI in Schools Isn’t Progress — It’s a Sign of How Far We’ve Strayed from the Purpose of Education.](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss)
* [2025-09-02, 03:44:00](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss) - [AMD Roadmap Leak Points to Zen 6 Mobile CPUs in 2027](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss)
* [2025-09-01, 23:04:00](https://soylentnews.org/article.pl?sid=25/08/31/146226&amp;from=rss) - [AI Crawlers Destroying Websites in Hunger for Content](https://soylentnews.org/article.pl?sid=25/08/31/146226&amp;from=rss)
* [2025-09-01, 18:14:00](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss) - [Tesla Denied Having Fatal Crash Data Until a Hacker Found It](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss)
* [2025-09-01, 14:28:28](https://news.ycombinator.com/item?id=45092930) - [16-Inch Softball](https://en.wikipedia.org/wiki/16-inch_softball)
* [2025-09-01, 13:32:00](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss) - [Massive Data Breach: Google Warns 2.5 Billion Gmail Users](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss)
* [2025-09-01, 09:12:13](https://news.ycombinator.com/item?id=45090963) - [I should have loved electrical engineering](https://blog.tdhttt.com/post/love-ee/)
* [2025-09-01, 08:44:00](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss) - [Medical Cannabis Fails the Long-Term Test: 58% of Patients Quit Within a Year](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss)
* [2025-09-01, 04:01:00](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss) - [The Mysterious Shortwave Radio Station Stoking US-Russia Nuclear Fears](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss)
* [2025-09-01, 03:31:36](https://news.ycombinator.com/item?id=45089201) - [A programmable display using microfluidics](https://www.youtube.com/watch?v=rf-efIZI_Dg)
* [2025-08-31, 23:13:00](https://soylentnews.org/article.pl?sid=25/08/30/1445255&amp;from=rss) - [Elon Musk Says xAI Has Open Sourced Grok 2.5](https://soylentnews.org/article.pl?sid=25/08/30/1445255&amp;from=rss)
* [2025-08-31, 18:49:38](https://news.ycombinator.com/item?id=45085867) - [Inverting the Xorshift128 random number generator](https://littlemaninmyhead.wordpress.com/2025/08/31/inverting-the-xorshift128-random-number-generator/)
* [2025-08-31, 18:25:00](https://soylentnews.org/article.pl?sid=25/08/30/1427217&amp;from=rss) - [US Military&apos;s X-37B Spaceplane Stays Relevant With Launch of Another Mission](https://soylentnews.org/article.pl?sid=25/08/30/1427217&amp;from=rss)
* [2025-08-31, 13:38:00](https://soylentnews.org/article.pl?sid=25/08/30/1419247&amp;from=rss) - [A New Security Flaw in TheTruthSpy Phone Spyware is Putting Victims at Risk](https://soylentnews.org/article.pl?sid=25/08/30/1419247&amp;from=rss)
* [2025-08-31, 08:47:00](https://soylentnews.org/article.pl?sid=25/08/29/2355251&amp;from=rss) - [Transport for London (TfL) Asks Mobile Users to Wear Headphones](https://soylentnews.org/article.pl?sid=25/08/29/2355251&amp;from=rss)
* [2025-08-31, 03:59:00](https://soylentnews.org/article.pl?sid=25/08/29/2346225&amp;from=rss) - [Scientists Produce Quantum Entanglement-like Results Without Entangled Particles](https://soylentnews.org/article.pl?sid=25/08/29/2346225&amp;from=rss)
