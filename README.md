# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence Developments

* [OpenAI Plans Jobs Platform, Certification Program for AI Roles](https://slashdot.org/story/25/09/04/1854249/openai-plans-jobs-platform-certification-program-for-ai-roles?utm_source=rss1.0mainlinkanon&utm_medium=feed) - OpenAI is introducing job-focused platforms and certification programs to support professionals in AI-related fields. [Comments](https://news.ycombinator.com/item?id=45132183)

* [Robinhood CEO Vlad Tenev Says Investing For a Living Could Replace Labor in a Post-AI World](https://news.slashdot.org/story/25/09/04/1518217/robinhood-ceo-vlad-tenev-says-investing-for-a-living-could-replace-labor-in-a-post-ai-world?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Vlad Tenev discusses how advancements in AI might reimagine the workforce by promoting investment as a livelihood. [Comments](https://news.ycombinator.com/item?id=45127983)

* [India's AI Story Is 'All Talk, Little Substance,' Says Bernstein](https://slashdot.org/story/25/09/04/1231230/indias-ai-story-is-all-talk-little-substance-says-bernstein?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Bernstein critiques India's AI efforts, calling them more aspirational than practical. [Comments](https://news.ycombinator.com/item?id=45123034)

## Sustainability and Energy

* [Germany Already Met Its 2028 Goal for Reducing Coal-Fired Power](https://news.slashdot.org/story/25/09/04/1924220/germany-already-met-its-2028-goal-for-reducing-coal-fired-power?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Germany advances its targets by reducing coal-fired energy supply years ahead of schedule. [Comments](https://news.ycombinator.com/item?id=45131921)

* [Solar-Powered Logitech Keyboard Appears on Amazon Mexico](https://it.slashdot.org/story/25/09/04/1823204/solar-powered-logitech-keyboard-appears-on-amazon-mexico?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Logitech unveils an innovative solar-powered keyboard targeting energy-conscious consumers. [Comments](https://news.ycombinator.com/item?id=45129237)

## Tech Innovations and Releases

* [Stripe Launches L1 Blockchain: Tempo](https://tempo.xyz) - Stripe introduces a blockchain platform called Tempo designed to enhance payment and transactions infrastructure. [Comments](https://news.ycombinator.com/item?id=45129085)

* [Adobe's Premiere Video Editor is Coming To iPhone For Free](https://news.slashdot.org/story/25/09/04/1832219/adobes-premiere-video-editor-is-coming-to-iphone-for-free?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Adobe's aim to make video editing more accessible with free iPhone app releases. [Comments](https://news.ycombinator.com/item?id=45124243)

## Programming and Open Source

* [Microsoft's 6502 BASIC Is Now Open Source](https://news.slashdot.org/story/25/09/04/1649210/microsofts-6502-basic-is-now-open-source?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A significant move by Microsoft to open-source the iconic 6502 BASIC code. [Comments](https://news.ycombinator.com/item?id=45131538)

* [Formally verifying FP division with Gappa](https://community.arm.com/arm-community-blogs/b/embedded-and-microcontrollers-blog/posts/formally-verifying-a-floating-point-division-routine-with-gappa-p1) - A detailed exploration of ensuring precision in floating-point division algorithms. [Comments](https://news.ycombinator.com/item?id=45126003)

## Policy and Social Media

* [Nepal Blocks Most Social Media Platforms](https://tech.slashdot.org/story/25/09/04/207250/nepal-blocks-most-social-media-platforms?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Nepal enforces a broad blackout on social platforms citing regulatory concerns. [Comments](https://news.ycombinator.com/item?id=45125018)

## Human Interest and Research

* [WiFi signals can measure heart rate](https://news.ucsc.edu/2025/09/pulse-fi-wifi-heart-rate/) - Researchers showcase how WiFi signals can double as vital health trackers. [Comments](https://news.ycombinator.com/item?id=45125859)

* [Almost anything you give sustained attention to will begin to loop on itself](https://www.henrikkarlsson.xyz/p/attention) - A philosophical dive into the psychology of focus and repetitive loops. [Comments](https://news.ycombinator.com/item?id=45129442)

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

* [2025-09-04, 22:01:44](https://lobste.rs/s/kzxxky/maak_infinitely_extensible_command) - [maak: The infinitely extensible command runner and automation project build system à la Make](https://codeberg.org/jjba23/maak)
* [2025-09-04, 21:22:00](https://tech.slashdot.org/story/25/09/04/207250/nepal-blocks-most-social-media-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nepal Blocks Most Social Media Platforms](https://tech.slashdot.org/story/25/09/04/207250/nepal-blocks-most-social-media-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 21:06:10](https://news.ycombinator.com/item?id=45132183) - [Non-Obviously Great Startups](https://postround.substack.com/p/rocketships-and-slingshots)
* [2025-09-04, 20:42:00](https://news.slashdot.org/story/25/09/04/1924220/germany-already-met-its-2028-goal-for-reducing-coal-fired-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Germany Already Met Its 2028 Goal for Reducing Coal-Fired Power](https://news.slashdot.org/story/25/09/04/1924220/germany-already-met-its-2028-goal-for-reducing-coal-fired-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 20:33:53](https://news.ycombinator.com/item?id=45131921) - [ICPC 2025 World Finals Results](https://worldfinals.icpc.global/scoreboard/2025/index.html)
* [2025-09-04, 20:01:00](https://slashdot.org/story/25/09/04/1854249/openai-plans-jobs-platform-certification-program-for-ai-roles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Plans Jobs Platform, Certification Program for AI Roles](https://slashdot.org/story/25/09/04/1854249/openai-plans-jobs-platform-certification-program-for-ai-roles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 19:53:42](https://news.ycombinator.com/item?id=45131538) - [Classic 8×8-pixel B&amp;W Mac patterns](https://www.pauladamsmith.com/blog/2025/09/classic-mac-patterns.html)
* [2025-09-04, 19:50:45](https://lobste.rs/s/cruxfx/classic_8x8_pixel_b_w_mac_patterns) - [Classic 8×8-pixel B&amp;W Mac patterns](https://www.pauladamsmith.com/blog/2025/09/classic-mac-patterns.html)
* [2025-09-04, 19:25:54](https://news.ycombinator.com/item?id=45131243) - [Action was the best 8-bit programming language](https://www.goto10retro.com/p/action-was-the-best-8-bit-programming)
* [2025-09-04, 19:24:00](https://news.slashdot.org/story/25/09/04/1832219/adobes-premiere-video-editor-is-coming-to-iphone-for-free?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adobe&apos;s Premiere Video Editor is Coming To iPhone For Free](https://news.slashdot.org/story/25/09/04/1832219/adobes-premiere-video-editor-is-coming-to-iphone-for-free?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 19:21:25](https://lobste.rs/s/lzr0ug/wal3_write_ahead_log_for_chroma_build_on) - [wal3: A Write-Ahead Log for Chroma, Build on Object Storage](https://trychroma.com/engineering/wal3)
* [2025-09-04, 18:46:12](https://lobste.rs/s/e3cyxq/integer_programming_1977) - [Integer Programming (1977)](https://web.mit.edu/15.053/www/AMP-Chapter-09.pdf)
* [2025-09-04, 18:45:00](https://it.slashdot.org/story/25/09/04/1823204/solar-powered-logitech-keyboard-appears-on-amazon-mexico?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Solar-Powered Logitech Keyboard Appears on Amazon Mexico](https://it.slashdot.org/story/25/09/04/1823204/solar-powered-logitech-keyboard-appears-on-amazon-mexico?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 18:29:48](https://lobste.rs/s/b6ipnz/you_don_t_need_animations) - [You Don&apos;t Need Animations](https://emilkowal.ski/ui/you-dont-need-animations)
* [2025-09-04, 18:10:44](https://lobste.rs/s/i79gqs/augment_complement_empower_yourself) - [Augment, Complement and Empower Yourself](https://arttuv.com/writings/augment-complement-empower-yourself/)
* [2025-09-04, 18:06:05](https://news.ycombinator.com/item?id=45130260) - [LLM Visualization](https://bbycroft.net/llm)
* [2025-09-04, 18:05:00](https://science.slashdot.org/story/25/09/04/1742218/ultra-processed-foods---its-time-for-an-improved-definition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ultra-Processed Foods - It&apos;s Time For an Improved Definition](https://science.slashdot.org/story/25/09/04/1742218/ultra-processed-foods---its-time-for-an-improved-definition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 17:44:49](https://news.ycombinator.com/item?id=45130018) - [The thousands of atomic bombs exploded on Earth (2015)](https://kottke.org/25/09/the-thousands-of-atomic-bombs-exploded-on-earth)
* [2025-09-04, 17:29:00](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss) - [Passkeys Are Incompatible With Open-Source Software](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss)
* [2025-09-04, 17:27:00](https://it.slashdot.org/story/25/09/04/1710210/nvidia-dominates-gpu-shipments-with-94-share?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Dominates GPU Shipments With 94% Share](https://it.slashdot.org/story/25/09/04/1710210/nvidia-dominates-gpu-shipments-with-94-share?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 17:07:08](https://news.ycombinator.com/item?id=45129523) - [Saquon Barkley is playing for equity](https://www.readtheprofile.com/p/saquon-barkley-investment-portfolio)
* [2025-09-04, 17:01:21](https://news.ycombinator.com/item?id=45129442) - [Artie (YC S23) Is Hiring Engineers, AES, and Senior PMM](https://www.ycombinator.com/companies/artie/jobs)
* [2025-09-04, 16:55:06](https://news.ycombinator.com/item?id=45129369) - [Wal3: A Write-Ahead Log for Chroma, Built on Object Storage](https://trychroma.com/engineering/wal3)
* [2025-09-04, 16:49:00](https://news.slashdot.org/story/25/09/04/1649210/microsofts-6502-basic-is-now-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s 6502 BASIC Is Now Open Source](https://news.slashdot.org/story/25/09/04/1649210/microsofts-6502-basic-is-now-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 16:45:39](https://news.ycombinator.com/item?id=45129237) - [A PM&apos;s Guide to AI Agent Architecture](https://www.productcurious.com/p/a-pms-guide-to-ai-agent-architecture)
* [2025-09-04, 16:41:24](https://news.ycombinator.com/item?id=45129190) - [Age Simulation Suit](https://www.age-simulation-suit.com/)
* [2025-09-04, 16:39:03](https://news.ycombinator.com/item?id=45129160) - [How we built an interpreter for Swift](https://www.bitrig.app/blog/swift-interpreter)
* [2025-09-04, 16:32:24](https://news.ycombinator.com/item?id=45129085) - [Stripe Launches L1 Blockchain: Tempo](https://tempo.xyz)
* [2025-09-04, 16:27:41](https://news.ycombinator.com/item?id=45129031) - [Launch HN: Slashy (YC S25) – AI that connects to apps and does tasks](https://news.ycombinator.com/item?id=45129031)
* [2025-09-04, 16:08:00](https://news.slashdot.org/story/25/09/04/168211/ai-not-affecting-job-market-much-so-far-new-york-fed-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Not Affecting Job Market Much So Far, New York Fed Says](https://news.slashdot.org/story/25/09/04/168211/ai-not-affecting-job-market-much-so-far-new-york-fed-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 15:28:11](https://lobste.rs/s/ubyo2n/embedded_dev_kit_for_endbasic_with_netbsd) - [An embedded dev kit for EndBASIC with NetBSD](https://youtu.be/WZFYTInWAqc)
* [2025-09-04, 15:22:03](https://news.ycombinator.com/item?id=45128299) - [Farewell to Meshnet](https://nordvpn.com/blog/meshnet-shutdown/)
* [2025-09-04, 15:20:00](https://news.slashdot.org/story/25/09/04/1518217/robinhood-ceo-vlad-tenev-says-investing-for-a-living-could-replace-labor-in-a-post-ai-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robinhood CEO Vlad Tenev Says Investing For a Living Could Replace Labor in a Post-AI World](https://news.slashdot.org/story/25/09/04/1518217/robinhood-ceo-vlad-tenev-says-investing-for-a-living-could-replace-labor-in-a-post-ai-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 14:58:58](https://lobste.rs/s/vdankx/look_out_for_bugs) - [Look Out For Bugs](https://matklad.github.io/2025/09/04/look-for-bugs.html)
* [2025-09-04, 14:53:50](https://news.ycombinator.com/item?id=45127983) - [WiFi signals can measure heart rate](https://news.ucsc.edu/2025/09/pulse-fi-wifi-heart-rate/)
* [2025-09-04, 14:42:00](https://it.slashdot.org/story/25/09/04/1442241/atlassian-agrees-to-acquire-the-browser-co-for-610-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Atlassian Agrees To Acquire The Browser Co. For $610 Million](https://it.slashdot.org/story/25/09/04/1442241/atlassian-agrees-to-acquire-the-browser-co-for-610-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 14:00:00](https://slashdot.org/story/25/09/04/1231230/indias-ai-story-is-all-talk-little-substance-says-bernstein?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India&apos;s AI Story Is &apos;All Talk, Little Substance,&apos; Says Bernstein](https://slashdot.org/story/25/09/04/1231230/indias-ai-story-is-all-talk-little-substance-says-bernstein?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 13:00:00](https://news.slashdot.org/story/25/09/03/2312210/new-ai-model-turns-photos-into-explorable-3d-worlds-with-caveats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New AI Model Turns Photos Into Explorable 3D Worlds, With Caveats](https://news.slashdot.org/story/25/09/03/2312210/new-ai-model-turns-photos-into-explorable-3d-worlds-with-caveats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 12:44:00](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss) - [Get Ready for Plastic Blood](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss)
* [2025-09-04, 12:38:10](https://lobste.rs/s/8tfol4/formally_verifying_fp_division_with) - [Formally verifying FP division with Gappa](https://community.arm.com/arm-community-blogs/b/embedded-and-microcontrollers-blog/posts/formally-verifying-a-floating-point-division-routine-with-gappa-p1)
* [2025-09-04, 12:29:49](https://news.ycombinator.com/item?id=45126503) - [Almost anything you give sustained attention to will begin to loop on itself](https://www.henrikkarlsson.xyz/p/attention)
* [2025-09-04, 12:18:27](https://lobste.rs/s/z4cszc/programming_lang_future) - [The Programming-Lang of the Future](https://vimeo.com/1115794889)
* [2025-09-04, 12:12:31](https://news.ycombinator.com/item?id=45126358) - [Atlassian is acquiring The Browser Company](https://www.cnbc.com/2025/09/04/atlassian-the-browser-company-deal.html)
* [2025-09-04, 11:27:26](https://lobste.rs/s/6tfwtv/why_ml_needs_new_programming_language) - [Why ML Needs a New Programming Language](https://signalsandthreads.com/why-ml-needs-a-new-programming-language/)
* [2025-09-04, 11:04:36](https://news.ycombinator.com/item?id=45125859) - [Le Chat: Custom MCP Connectors, Memories](https://mistral.ai/news/le-chat-mcp-connectors-memories)
* [2025-09-04, 11:01:50](https://lobste.rs/s/pvwg6m/ca_trusted_by_microsoft_mis_issued) - [A CA Trusted by Microsoft Mis-issued Certificates for 1.1.1.1 in May 2025, According to Logs](https://arstechnica.com/security/2025/09/mis-issued-certificates-for-1-1-1-1-dns-service-pose-a-threat-to-the-internet/)
* [2025-09-04, 10:56:46](https://lobste.rs/s/za9lgt/practical_introduction_parsing_rust) - [A practical introduction to parsing in Rust](https://jhwlr.io/intro-to-parsing/)
* [2025-09-04, 10:00:00](https://science.slashdot.org/story/25/09/03/230240/sweeteners-can-harm-cognitive-health-equivalent-to-16-years-of-aging-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sweeteners Can Harm Cognitive Health Equivalent To 1.6 Years of Aging, Study Finds](https://science.slashdot.org/story/25/09/03/230240/sweeteners-can-harm-cognitive-health-equivalent-to-16-years-of-aging-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 09:21:38](https://lobste.rs/s/ksxhza/jujutsu_v0_33_0_released) - [jujutsu v0.33.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.33.0)
* [2025-09-04, 07:57:00](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss) - [Nearly 40% of Nvidia&apos;s Revenue Tied to Two Mystery Customers, Filing Shows](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss)
* [2025-09-04, 07:01:39](https://lobste.rs/s/athmwa/setting_up_cgit_with_caddy_v2_2022) - [Setting up cgit with Caddy v2 (2022)](https://www.sixfoisneuf.fr/posts/setting-up-cgit-with-caddy2/)
* [2025-09-04, 07:00:00](https://tech.slashdot.org/story/25/09/03/2253256/melvyn-bragg-steps-down-from-bbc-radio-4s-in-our-time-after-26-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Melvyn Bragg Steps Down From BBC Radio 4&apos;s In Our Time After 26 Years](https://tech.slashdot.org/story/25/09/03/2253256/melvyn-bragg-steps-down-from-bbc-radio-4s-in-our-time-after-26-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-04, 06:18:13](https://news.ycombinator.com/item?id=45124143) - [Melvyn Bragg steps down from presenting In Our Time](https://www.bbc.co.uk/mediacentre/2025/melvyn-bragg-decides-to-step-down-from-presenting-in-our-time/)
* [2025-09-04, 05:58:25](https://lobste.rs/s/mjajol/faster_rust_builds_on_mac) - [Faster Rust builds on Mac](https://nnethercote.github.io/2025/09/04/faster-rust-builds-on-mac.html)
* [2025-09-04, 05:56:29](https://news.ycombinator.com/item?id=45124003) - [30 minutes with a stranger](https://pudding.cool/2025/06/hello-stranger/)
* [2025-09-04, 03:14:00](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss) - [People Who Believe in Conspiracy Theories Process Information Differently at the Neural Level](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss)
* [2025-09-04, 03:01:49](https://news.ycombinator.com/item?id=45123034) - [Polars Cloud and Distributed Polars now available](https://pola.rs/posts/polars-cloud-launch/)
* [2025-09-04, 02:37:42](https://news.ycombinator.com/item?id=45122885) - [A high schooler writes about AI tools in the classroom](https://www.theatlantic.com/technology/archive/2025/09/high-school-student-ai-education/684088/)
* [2025-09-03, 23:01:41](https://lobste.rs/s/tgqg9o/serious_shanns_comic_sans_for_hackers) - [Serious Shanns: Comic Sans for hackers](https://github.com/kaBeech/serious-shanns)
* [2025-09-03, 22:47:22](https://lobste.rs/s/pqy0pp/where_s_shovelware_why_ai_coding_claims) - [Where&apos;s the Shovelware? Why AI Coding Claims Don&apos;t Add Up](https://substack.com/inbox/post/172538377)
* [2025-09-03, 22:27:00](https://soylentnews.org/article.pl?sid=25/09/02/192213&amp;from=rss) - [CRLite: Fast, Private, and Comprehensive Certificate Revocation Checking in Firefox](https://soylentnews.org/article.pl?sid=25/09/02/192213&amp;from=rss)
* [2025-09-03, 21:07:28](https://lobste.rs/s/pnu6ax/git_exclude_handy_feature_you_might_not) - [Git exclude, a handy feature you might not know about](https://marijkeluttekes.dev/blog/articles/2025/09/03/git-exclude-a-handy-feature-you-might-not-know-about/)
* [2025-09-03, 19:26:07](https://lobste.rs/s/cpzttx/first_gleam_conference_gathering_2026) - [The first Gleam Conference - Gathering 2026](https://gleamgathering.com/)
* [2025-09-03, 17:51:25](https://lobste.rs/s/rshhsu/basic_m6502_microsoft_basic_for_6502) - [BASIC-M6502: Microsoft BASIC for 6502 Microprocessor - Version 1.1](https://github.com/microsoft/BASIC-M6502)
* [2025-09-03, 17:44:00](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss) - [Microsoft Can&apos;t Guarantee Data Sovereignty – OVHcloud Says &apos;We Told You So&apos;](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss)
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
* [2025-09-01, 20:30:19](https://news.ycombinator.com/item?id=45096358) - [The Paradigm](https://nonint.com/2025/03/16/the-paradigm/)
* [2025-09-01, 18:14:00](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss) - [Tesla Denied Having Fatal Crash Data Until a Hacker Found It](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss)
* [2025-09-01, 14:28:28](https://news.ycombinator.com/item?id=45092930) - [16-inch softball](https://en.wikipedia.org/wiki/16-inch_softball)
* [2025-09-01, 13:32:00](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss) - [Massive Data Breach: Google Warns 2.5 Billion Gmail Users](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss)
* [2025-09-01, 09:12:13](https://news.ycombinator.com/item?id=45090963) - [I should have loved electrical engineering](https://blog.tdhttt.com/post/love-ee/)
* [2025-09-01, 08:44:00](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss) - [Medical Cannabis Fails the Long-Term Test: 58% of Patients Quit Within a Year](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss)
* [2025-09-01, 04:01:00](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss) - [The Mysterious Shortwave Radio Station Stoking US-Russia Nuclear Fears](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss)
* [2025-09-01, 03:31:36](https://news.ycombinator.com/item?id=45089201) - [A programmable display using microfluidics [video]](https://www.youtube.com/watch?v=rf-efIZI_Dg)
* [2025-09-01, 03:13:14](https://news.ycombinator.com/item?id=45089106) - [Mangrove Restoration Frustration (2021)](https://knowablemagazine.org/content/article/food-environment/2021/many-mangrove-restorations-fail)
* [2025-09-01, 02:26:22](https://news.ycombinator.com/item?id=45088880) - [Berg&apos;s Card Sorting Task](https://www.neurobs.com/manager/content/docs/psychlab101_experiments/Berg%27s%20Card%20Sorting%20Task/description.html)
* [2025-08-31, 23:13:00](https://soylentnews.org/article.pl?sid=25/08/30/1445255&amp;from=rss) - [Elon Musk Says xAI Has Open Sourced Grok 2.5](https://soylentnews.org/article.pl?sid=25/08/30/1445255&amp;from=rss)
* [2025-08-31, 18:49:38](https://news.ycombinator.com/item?id=45085867) - [Inverting the Xorshift128 random number generator](https://littlemaninmyhead.wordpress.com/2025/08/31/inverting-the-xorshift128-random-number-generator/)
* [2025-08-31, 18:25:00](https://soylentnews.org/article.pl?sid=25/08/30/1427217&amp;from=rss) - [US Military&apos;s X-37B Spaceplane Stays Relevant With Launch of Another Mission](https://soylentnews.org/article.pl?sid=25/08/30/1427217&amp;from=rss)
* [2025-08-31, 13:38:00](https://soylentnews.org/article.pl?sid=25/08/30/1419247&amp;from=rss) - [A New Security Flaw in TheTruthSpy Phone Spyware is Putting Victims at Risk](https://soylentnews.org/article.pl?sid=25/08/30/1419247&amp;from=rss)
* [2025-08-31, 08:47:00](https://soylentnews.org/article.pl?sid=25/08/29/2355251&amp;from=rss) - [Transport for London (TfL) Asks Mobile Users to Wear Headphones](https://soylentnews.org/article.pl?sid=25/08/29/2355251&amp;from=rss)
* [2025-08-31, 03:59:00](https://soylentnews.org/article.pl?sid=25/08/29/2346225&amp;from=rss) - [Scientists Produce Quantum Entanglement-like Results Without Entangled Particles](https://soylentnews.org/article.pl?sid=25/08/29/2346225&amp;from=rss)
