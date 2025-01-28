# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [New speculative attacks on Apple CPUs](https://predictors.fail/) - Researchers unveil speculative execution vulnerabilities in Apple CPUs, potentially exposing user data. [Comments](https://news.ycombinator.com/item?id=42856023)

* [Marginalia - A search engine prioritizing non-commercial content](https://marginalia-search.com/) - An alternative search engine designed to prioritize non-commercial and unique content. [Comments](https://lobste.rs/s/bkpqln/marginalia_search_engine_prioritizing)

* [Boom's XB-1 becomes first civil aircraft to go supersonic](https://techcrunch.com/2025/01/28/booms-xb-1-becomes-first-civil-aircraft-to-go-supersonic/) - The XB-1 prototype marks a historic milestone in aviation as the first supersonic civil aircraft. [Comments](https://news.ycombinator.com/item?id=42855734)

* [Janus Pro 1B running 100% locally in-browser on WebGPU](https://old.reddit.com/r/LocalLLaMA/comments/1ibnso0/janus_pro_1b_running_100_locally_inbrowser_on/) - A demonstration of a large language model running entirely in-browser using WebGPU technology. [Comments](https://news.ycombinator.com/item?id=42852400)

## Cybersecurity

* [New Apple CPU side-channel attacks steals data from browsers](https://www.bleepingcomputer.com/news/security/new-apple-cpu-side-channel-attack-steals-data-from-browsers/) - Details emerge on new side-channel vulnerabilities targeting Apple CPUs, impacting browser data security. [Comments](https://news.ycombinator.com/item?id=42855888)

* [Hackers Crack Subaru's Connected Services to Access Data, Door Locks and More](https://jalopnik.com/hackers-crack-subarus-connected-services-to-access-loca-1851746393) - Hackers gain control over Subaru's connected services, compromising vehicle security and user data. [Comments](https://news.ycombinator.com/item?id=42853405)

* [Clone2Leak: Your Git Credentials Belong To Us](https://flatt.tech/research/posts/clone2leak-your-git-credentials-belong-to-us/) - A report on a vulnerability allowing attackers to steal Git credentials during repository cloning. [Comments](https://lobste.rs/s/y1eqnf/clone2leak_your_git_credentials_belong)

## Artificial Intelligence

* [Stable Flow: Vital Layers for Training-Free Image Editing](https://omriavrahami.com/stable-flow/) - A breakthrough in training-free image editing techniques, focusing on feature-rich layers. [Comments](https://news.ycombinator.com/item?id=42853023)

* [Run DeepSeek R1 Dynamic 1.58-bit](https://unsloth.ai/blog/deepseekr1-dynamic) - DeepSeek's latest dynamic model demonstrates advancements in AI capabilities. [Comments](https://news.ycombinator.com/item?id=42850222)

* [Anthropic Builds RAG Directly Into Claude Models With New Citations API](https://slashdot.org/story/25/01/27/2129250/anthropic-builds-rag-directly-into-claude-models-with-new-citations-api?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Anthropic integrates retrieval-augmented generation (RAG) into Claude models for enhanced AI responses.

## Science and Space

* [IAC confirms existence of a Super-earth in the habitable zone of a Sun-like Star](https://www.iac.es/en/outreach/news/iac-confirms-existence-super-earth-habitable-zone-sun-star) - Astronomers confirm the discovery of a Super-Earth orbiting a Sun-like star within a habitable zone. [Comments](https://news.ycombinator.com/item?id=42853174)

* [First-Ever Data Center On The Moon Set To Launch Next Month](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss) - An ambitious lunar data center project is set to launch, advancing space infrastructure. [Comments](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss)

## Digital and Media Policies

* [ UK Considers Making Netflix Users Pay License Fee to Fund BBC](https://news.slashdot.org/story/25/01/28/1730238/uk-considers-making-netflix-users-pay-license-fee-to-fund-bbc?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The UK government weighs a policy to extend TV licensing fees to Netflix users. [Comments](https://news.ycombinator.com/item?id=42855170)

* [Bookshop Takes On Amazon With E-book Platform For Independent Stores](https://news.slashdot.org/story/25/01/28/1345201/bookshop-takes-on-amazon-with-e-book-platform-for-independent-stores?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A new platform aims to support independent bookstores in the e-book market.

## Insights and Tutorials

* [Seven things I know after 25 years of development](https://zverok.space/blog/2025-01-27-7things-euruko.html) - A developer reflects on 25 years of programming experience, sharing key lessons. [Comments](https://lobste.rs/s/noffmp/seven_things_i_know_after_25_years)

* [Testable Examples in Go](https://go.dev/blog/examples) - A guide on implementing testable examples in the Go programming language. [Comments](https://lobste.rs/s/6fbecb/testable_examples_go)

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

* [2025-01-28, 18:31:34](https://news.ycombinator.com/item?id=42856023) - [New speculative attacks on Apple CPUs](https://predictors.fail/)
* [2025-01-28, 18:31:00](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss) - [The Invalid 68030 Instruction That Accidentally Allowed the Mac Classic II to Successfully Boot Up](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss)
* [2025-01-28, 18:21:44](https://news.ycombinator.com/item?id=42855888) - [New Apple CPU side-channel attacks steals data from browsers](https://www.bleepingcomputer.com/news/security/new-apple-cpu-side-channel-attack-steals-data-from-browsers/)
* [2025-01-28, 18:19:04](https://lobste.rs/s/bkpqln/marginalia_search_engine_prioritizing) - [Marginalia - A search engine prioritizing non-commercial content](https://marginalia-search.com/)
* [2025-01-28, 18:16:37](https://lobste.rs/s/uw3ztu/why_social_media_has_captured_our) - [Why Social Media has Captured Our Attention](https://www.makeartwithpython.com/blog/social-media-is-the-final-film/)
* [2025-01-28, 18:10:00](https://science.slashdot.org/story/25/01/28/1738223/atomic-scientists-adjust-doomsday-clock-closer-than-ever-to-midnight?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Atomic Scientists Adjust 'Doomsday Clock' Closer Than Ever To Midnight](https://science.slashdot.org/story/25/01/28/1738223/atomic-scientists-adjust-doomsday-clock-closer-than-ever-to-midnight?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 18:09:11](https://news.ycombinator.com/item?id=42855734) - [Boom's XB-1 becomes first civil aircraft to go supersonic](https://techcrunch.com/2025/01/28/booms-xb-1-becomes-first-civil-aircraft-to-go-supersonic/)
* [2025-01-28, 17:55:42](https://lobste.rs/s/al0dd9/best_practices_for_key_derivation) - [Best practices for key derivation](https://blog.trailofbits.com/2025/01/28/best-practices-for-key-derivation/)
* [2025-01-28, 17:35:05](https://news.ycombinator.com/item?id=42855258) - [Using uv as your shebang line](https://akrabat.com/using-uv-as-your-shebang-line/)
* [2025-01-28, 17:30:00](https://news.slashdot.org/story/25/01/28/1730238/uk-considers-making-netflix-users-pay-license-fee-to-fund-bbc?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [ UK Considers Making Netflix Users Pay License Fee to Fund BBC](https://news.slashdot.org/story/25/01/28/1730238/uk-considers-making-netflix-users-pay-license-fee-to-fund-bbc?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 17:29:07](https://news.ycombinator.com/item?id=42855170) - [How has DeepSeek improved the Transformer architecture?](https://epoch.ai/gradient-updates/how-has-deepseek-improved-the-transformer-architecture)
* [2025-01-28, 17:00:58](https://news.ycombinator.com/item?id=42854706) - [Curo (YC F24) Is Hiring](https://www.ycombinator.com/companies/curo/jobs/s7a36qb-associate-marketplace-supply)
* [2025-01-28, 16:41:00](https://it.slashdot.org/story/25/01/28/1636224/garmin-users-say-their-watches-are-bricked-with-a-blue-triangle-of-death?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Garmin Users Say Their Watches Are Bricked With a 'Blue Triangle of Death'](https://it.slashdot.org/story/25/01/28/1636224/garmin-users-say-their-watches-are-bricked-with-a-blue-triangle-of-death?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 16:02:00](https://tech.slashdot.org/story/25/01/28/1514236/google-to-cut-off-chrome-sync-for-older-browser-versions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google To Cut Off Chrome Sync for Older Browser Versions](https://tech.slashdot.org/story/25/01/28/1514236/google-to-cut-off-chrome-sync-for-older-browser-versions?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 15:55:22](https://news.ycombinator.com/item?id=42853741) - [Qwen2.5-Max: Exploring the intelligence of large-scale MoE model](https://qwenlm.github.io/blog/qwen2.5-max/)
* [2025-01-28, 15:51:26](https://news.ycombinator.com/item?id=42853696) - [Bitwarden introduces mandatory 2FA for new devices](https://bitwarden.com/help/new-device-verification/)
* [2025-01-28, 15:37:32](https://news.ycombinator.com/item?id=42853528) - [Maxima in the browser using Embedded Common Lisp on WASM](https://maxima-on-wasm.pages.dev/)
* [2025-01-28, 15:26:52](https://news.ycombinator.com/item?id=42853405) - [Hackers Crack Subaru's Connected Services to Access Data, Door Locks and More](https://jalopnik.com/hackers-crack-subarus-connected-services-to-access-loca-1851746393)
* [2025-01-28, 15:20:00](https://news.slashdot.org/story/25/01/28/1411257/cloud-services-market-is-not-working-says-uk-regulator?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cloud Services Market Is 'Not Working,' Says UK Regulator](https://news.slashdot.org/story/25/01/28/1411257/cloud-services-market-is-not-working-says-uk-regulator?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 15:09:52](https://news.ycombinator.com/item?id=42853174) - [IAC confirms existence of a Super-earth in the habitable zone of a Sun-like Star](https://www.iac.es/en/outreach/news/iac-confirms-existence-super-earth-habitable-zone-sun-star)
* [2025-01-28, 14:56:28](https://news.ycombinator.com/item?id=42853023) - [Stable Flow: Vital Layers for Training-Free Image Editing](https://omriavrahami.com/stable-flow/)
* [2025-01-28, 14:49:26](https://lobste.rs/s/djvgmv/what_is_lifetime_thinking_lifetimes_as) - [But what is 'a lifetime - thinking of lifetimes as regions of memory](https://youtu.be/gRAVZv7V91Q)
* [2025-01-28, 14:44:06](https://news.ycombinator.com/item?id=42852866) - [Promising results from DeepSeek R1 for code](https://simonwillison.net/2025/Jan/27/llamacpp-pr/)
* [2025-01-28, 14:40:00](https://news.slashdot.org/story/25/01/28/1345201/bookshop-takes-on-amazon-with-e-book-platform-for-independent-stores?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bookshop Takes On Amazon With E-book Platform For Independent Stores](https://news.slashdot.org/story/25/01/28/1345201/bookshop-takes-on-amazon-with-e-book-platform-for-independent-stores?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 14:04:21](https://news.ycombinator.com/item?id=42852400) - [Janus Pro 1B running 100% locally in-browser on WebGPU](https://old.reddit.com/r/LocalLLaMA/comments/1ibnso0/janus_pro_1b_running_100_locally_inbrowser_on/)
* [2025-01-28, 14:00:00](https://tech.slashdot.org/story/25/01/28/1315215/deepseek-has-spent-over-500-million-on-nvidia-chips-despite-low-cost-ai-claims-semianalysis-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek Has Spent Over $500 Million on Nvidia Chips Despite Low-Cost AI Claims, SemiAnalysis Says](https://tech.slashdot.org/story/25/01/28/1315215/deepseek-has-spent-over-500-million-on-nvidia-chips-despite-low-cost-ai-claims-semianalysis-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 13:45:00](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss) - [China's Second-Largest Foundry Hires Former Intel Executive to Lead Advanced Node Development](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss)
* [2025-01-28, 13:28:40](https://news.ycombinator.com/item?id=42852048) - [Show HN: Design/build of some elegant parametric speaker cabinets with OpenSCAD](https://calbryant.uk/blog/speakers/)
* [2025-01-28, 13:04:05](https://news.ycombinator.com/item?id=42851839) - [HawkEye: A Simple license header checker and formatter in Rust](https://github.com/korandoru/hawkeye)
* [2025-01-28, 13:00:00](https://games.slashdot.org/story/25/01/28/047253/new-fpga-powered-retro-console-re-creates-the-playstation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New FPGA-Powered Retro Console Re-Creates the PlayStation](https://games.slashdot.org/story/25/01/28/047253/new-fpga-powered-retro-console-re-creates-the-playstation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 12:43:43](https://lobste.rs/s/saxziq/pattern_for_obtaining_single_value_while) - [A pattern for obtaining a single value while holding a lock](https://devblogs.microsoft.com/oldnewthing/20250127-00/?p=110809)
* [2025-01-28, 12:42:33](https://lobste.rs/s/qkov2d/daily_command_line_ablutions) - [Daily command-line ablutions](https://lobste.rs/s/qkov2d/daily_command_line_ablutions)
* [2025-01-28, 12:20:44](https://news.ycombinator.com/item?id=42851519) - [Public Access OpenVMS System](https://decuserve.org/)
* [2025-01-28, 12:13:43](https://lobste.rs/s/noffmp/seven_things_i_know_after_25_years) - [Seven things I know after 25 years of development](https://zverok.space/blog/2025-01-27-7things-euruko.html)
* [2025-01-28, 12:04:03](https://lobste.rs/s/6fbecb/testable_examples_go) - [Testable Examples in Go](https://go.dev/blog/examples)
* [2025-01-28, 11:37:41](https://lobste.rs/s/utwbwv/can_we_retain_benefits_transitive) - [Can We Retain the Benefits of Transitive Dependencies Without Undermining Security?](https://tratt.net/laurie/blog/2024/can_we_retain_the_benefits_of_transitive_dependencies_without_undermining_security.html)
* [2025-01-28, 11:29:24](https://lobste.rs/s/oeabdn/data_protection_day_only_1_3_cases_before) - [Data Protection Day: Only 1.3% of cases before EU DPAs result in a fine](https://noyb.eu/en/data-protection-day-only-13-cases-eu-dpas-result-fine)
* [2025-01-28, 11:23:52](https://lobste.rs/s/wxc4jq/prototyping_power) - [Prototyping and Power](https://planb.nicecupoftea.org/2025/01/25/prototyping-and-power/)
* [2025-01-28, 10:00:00](https://apple.slashdot.org/story/25/01/28/0354243/homepod-with-screen-most-significant-new-apple-product-of-2025-says-gurman?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [HomePod With Screen 'Most Significant New Apple Product' of 2025, Says Gurman](https://apple.slashdot.org/story/25/01/28/0354243/homepod-with-screen-most-significant-new-apple-product-of-2025-says-gurman?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 09:01:00](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss) - [First-Ever Data Center On The Moon Set To Launch Next Month](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss)
* [2025-01-28, 08:52:47](https://news.ycombinator.com/item?id=42850222) - [Run DeepSeek R1 Dynamic 1.58-bit](https://unsloth.ai/blog/deepseekr1-dynamic)
* [2025-01-28, 07:35:08](https://lobste.rs/s/wb8pzw/deepseek_faq) - [DeepSeek FAQ](https://stratechery.com/2025/deepseek-faq/)
* [2025-01-28, 07:23:25](https://lobste.rs/s/zwhml6/zig_what_s_writer) - [In Zig, What's a Writer?](https://www.openmymind.net/In-Zig-Whats-a-Writer/)
* [2025-01-28, 07:02:57](https://news.ycombinator.com/item?id=42849632) - [FTC Takes Action Against GoDaddy for Alleged Lax Data Security](https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-takes-action-against-godaddy-alleged-lax-data-security-its-website-hosting-services)
* [2025-01-28, 07:00:00](https://science.slashdot.org/story/25/01/28/0346254/peeing-is-socially-contagious-in-chimps?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Peeing Is Socially Contagious In Chimps](https://science.slashdot.org/story/25/01/28/0346254/peeing-is-socially-contagious-in-chimps?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 06:46:45](https://lobste.rs/s/mvcalo/public_inbox_archives_first_approach) - [public-inbox - an \"archives first\" approach to mailing lists](https://public-inbox.org/README.html)
* [2025-01-28, 06:34:56](https://lobste.rs/s/y1eqnf/clone2leak_your_git_credentials_belong) - [Clone2Leak: Your Git Credentials Belong To Us](https://flatt.tech/research/posts/clone2leak-your-git-credentials-belong-to-us/)
* [2025-01-28, 04:14:00](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss) - [The Drunken Plagiarists: Working with Co-pilots](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss)
* [2025-01-28, 03:30:00](https://slashdot.org/story/25/01/28/0039232/ai-is-too-unpredictable-to-behave-according-to-human-goals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['AI Is Too Unpredictable To Behave According To Human Goals'](https://slashdot.org/story/25/01/28/0039232/ai-is-too-unpredictable-to-behave-according-to-human-goals?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 02:58:43](https://lobste.rs/s/vhv91q/poisoning_ai_with_ss_subtitles) - [Poisoning AI with \".аss\" subtitles](https://www.youtube.com/watch?v=NEDFUjqA1s8)
* [2025-01-28, 01:40:00](https://hardware.slashdot.org/story/25/01/28/0026231/us-solar-boom-continues-but-its-offset-by-rising-power-use?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Solar Boom Continues, But It's Offset By Rising Power Use](https://hardware.slashdot.org/story/25/01/28/0026231/us-solar-boom-continues-but-its-offset-by-rising-power-use?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 01:18:55](https://news.ycombinator.com/item?id=42847834) - [Machine Learning in Production (CMU Course)](https://mlip-cmu.github.io/s2025/)
* [2025-01-28, 01:00:00](https://yro.slashdot.org/story/25/01/28/0013226/software-flaw-exposes-millions-of-subarus-rivers-of-driver-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Software Flaw Exposes Millions of Subarus, Rivers of Driver Data](https://yro.slashdot.org/story/25/01/28/0013226/software-flaw-exposes-millions-of-subarus-rivers-of-driver-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 00:20:00](https://news.slashdot.org/story/25/01/28/004213/uk-council-sells-assets-to-fund-ballooning-50-million-oracle-project?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [UK Council Sells Assets To Fund Ballooning $50 Million Oracle Project](https://news.slashdot.org/story/25/01/28/004213/uk-council-sells-assets-to-fund-ballooning-50-million-oracle-project?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 23:40:00](https://slashdot.org/story/25/01/27/2129250/anthropic-builds-rag-directly-into-claude-models-with-new-citations-api?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anthropic Builds RAG Directly Into Claude Models With New Citations API](https://slashdot.org/story/25/01/27/2129250/anthropic-builds-rag-directly-into-claude-models-with-new-citations-api?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 23:30:00](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss) - [Data Breach Hitting PowerSchool Looks Very, Very Bad](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss)
* [2025-01-27, 21:42:11](https://lobste.rs/s/qczsgz/building_personal_software_with_claude) - [Building personal software with Claude](https://blog.nelhage.com/post/personal-software-with-claude/)
* [2025-01-27, 20:33:43](https://news.ycombinator.com/item?id=42845323) - [Go 1.24's go tool is one of the best additions to the ecosystem in years](https://www.jvt.me/posts/2025/01/27/go-tools-124/)
* [2025-01-27, 20:28:36](https://lobste.rs/s/yqx2sx/pebble_smartwatches_open_sourced) - [Pebble smartwatches open-sourced](https://opensource.googleblog.com/2025/01/see-code-that-powered-pebble-smartwatches.html)
* [2025-01-27, 20:11:19](https://news.ycombinator.com/item?id=42845091) - [We're bringing Pebble back](https://repebble.com/)
* [2025-01-27, 19:21:55](https://news.ycombinator.com/item?id=42844619) - [The Alpha Myth: How captive wolves led us astray](https://anthonydavidadams.substack.com/p/the-alpha-myth-how-captive-wolves)
* [2025-01-27, 19:02:11](https://lobste.rs/s/quamiu/first_perfect_computer) - [The First Perfect Computer](https://celso.io/posts/2025/01/26/the-first-perfect-computer/)
* [2025-01-27, 19:01:09](https://lobste.rs/s/djejmh/really_really_good_random_number) - [really really good random number generator (rrgrng)](https://swlody.dev/Posts/really-really-good-random-number-generator-(rrgrng))
* [2025-01-27, 18:44:00](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss) - [Sleeping Pills Stop the Brain’s System for Cleaning Out Waste](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss)
* [2025-01-27, 18:24:53](https://lobste.rs/s/cwkyc9/spritely_goblins_v0_15_0_goblins_browser) - [Spritely Goblins v0.15.0: Goblins in the browser](https://www.spritely.institute/news/spritely-goblins-v0-15-0-goblins-in-the-browser.html)
* [2025-01-27, 17:42:36](https://news.ycombinator.com/item?id=42843623) - [The Taylorator – All Your Frequencies Are Belong to Us](https://www.scd31.com/posts/taylorator)
* [2025-01-27, 17:41:10](https://lobste.rs/s/sv3vhi/taylorator_all_your_frequencies_are) - [The Taylorator - All Your Frequencies Are Belong to Us](https://www.scd31.com/posts/taylorator)
* [2025-01-27, 16:25:00](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss) - [Linux Kernel 6.13 Announced](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss)
* [2025-01-27, 14:26:04](https://lobste.rs/s/vy25lh/steam_brick_no_screen_no_controller) - [Steam Brick: No screen, no controller, and absolutely no sense, just a power button and a USB port](https://crastinator-pro.github.io/steam-brick/)
* [2025-01-27, 14:22:06](https://lobste.rs/s/j9iugq/is_nixos_truly_reproducible) - [Is NixOS truly reproducible?](https://luj.fr/blog/is-nixos-truly-reproducible.html)
* [2025-01-27, 13:55:00](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss) - [Think It Takes 21 Days to Form a Habit? Science Says Think Again](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss)
* [2025-01-27, 12:42:10](https://lobste.rs/s/ldaaql/my_failed_attempt_shrink_all_npm_packages) - [My failed attempt to shrink all npm packages by 5%](https://evanhahn.com/my-failed-attempt-to-shrink-all-npm-packages-by-5-percent/)
* [2025-01-27, 09:10:00](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss) - [Medical Device Company Suddenly Stops Hospitals From Fixing Machines Themselves](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss)
* [2025-01-27, 04:22:00](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss) - [Mysterious Blobs Found Inside Cells Are Rewriting the Story of How Life Works](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss)
* [2025-01-26, 23:34:00](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss) - [Florida Man Eats Diet of Butter, Cheese, Beef; Cholesterol Oozes From His Body](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss)
* [2025-01-26, 18:51:00](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss) - [Real Datacenter Emissions Are A Dirty Secret](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss)
* [2025-01-26, 14:10:00](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss) - [Touchscreen Dashboards Have Finally Taken Over and Ruined Driving](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss)
* [2025-01-26, 11:09:17](https://news.ycombinator.com/item?id=42829346) - [Watch the path of a raindrop from anywhere in the world](https://river-runner-global.samlearner.com/)
* [2025-01-26, 11:03:50](https://news.ycombinator.com/item?id=42829315) - [Keycloak, Angular, and the BFF Pattern](https://blog.brakmic.com/keycloak-angular-and-the-bff-pattern/)
* [2025-01-26, 09:25:00](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss) - [“Project Mini Rack” Wants Make Your Mini-Homelab a Reality](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss)
* [2025-01-26, 09:01:16](https://news.ycombinator.com/item?id=42828848) - [Fixing my monitor's power button](https://www.lkhrs.com/blog/2025/monitor-repair/)
* [2025-01-26, 08:32:08](https://news.ycombinator.com/item?id=42828720) - [Turning the database inside-out (2015)](https://martin.kleppmann.com/2015/11/05/database-inside-out-at-oredev.html)
* [2025-01-26, 08:05:24](https://news.ycombinator.com/item?id=42828581) - [BrainFlood: Runtime code generation via reflection in .NET](https://sbox.game/churchofmiku/brainflood/news/brainflood-compiling-via-reflection-8089c180)
* [2025-01-26, 04:38:00](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss) - [Anthropic Chief Says AI Could Surpass “Almost All Humans at Almost Everything” Shortly After 2027](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss)
* [2025-01-25, 23:53:00](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss) - [Not an Asteroid, Just Elon's Car](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss)
* [2025-01-25, 19:08:00](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss) - [How Many Sexes Are There?](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss)
* [2025-01-25, 14:23:00](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss) - [Wine 10.0 Brings Arm Windows Apps to Linux, Still Isn't an Emulator](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss)
* [2025-01-25, 09:40:00](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss) - [Trump Pardons Dark Web Silk Road Marketplace Founder Ross Ulbricht](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss)
* [2025-01-25, 04:54:00](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss) - [Opinion: We Need to Protect the Protocol That Runs Bluesky](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss)
* [2025-01-25, 00:09:00](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss) - [AI Workloads Spur Bigger Memory Drives](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss)
* [2025-01-24, 19:24:00](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss) - [Oyster Blood: A New Frontier in Fighting Infection](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss)
* [2025-01-24, 19:14:41](https://news.ycombinator.com/item?id=42816133) - [Beautiful Free Math – Desmos Animated Graphing Calculator](https://www.desmos.com/)
* [2025-01-24, 14:38:00](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss) - [Chinese Salt Typhoon Hackers 1st Spotted on Federal Networks Under Another Name](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss)
* [2025-01-24, 09:53:00](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss) - [New California Law Criminalizing AI Generated Child Porn Claims First Arrest](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss)
* [2025-01-24, 05:07:00](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss) - [Time to Check My Tire Pressures...Hand Me That Hammer](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss)
* [2025-01-24, 00:22:00](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss) - [Google Is Now the East India Company of the Internet](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss)
