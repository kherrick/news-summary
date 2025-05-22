# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Machine Learning

* [Using Large Language Models for Commit Message Generation: A Preliminary Study](https://arxiv.org/abs/2401.05926) ([discussion](https://lobste.rs/s/y2kogj/using_large_language_models_for_commit)) provides insights into using AI for automating commit messages in software projects.

* [OpenAI Acquires Jony Ive's Startup in $6.5 Billion Deal To Create AI Devices](https://slashdot.org/story/25/05/21/1710237/openai-acquires-jony-ives-startup-in-65-billion-deal-to-create-ai-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([discussion](https://news.ycombinator.com/item?id=44053518)) explores OpenAI's bold move towards hardware integration with AI-driven solutions.

* [Most AI Chatbots Easily Tricked Into Giving Dangerous Responses, Study Finds](https://it.slashdot.org/story/25/05/21/2031216/most-ai-chatbots-easily-tricked-into-giving-dangerous-responses-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([discussion](https://news.ycombinator.com/item?id=44056280)) examines vulnerabilities in AI chatbots and safety concerns.

* [Underperforming AI: Meta Targets More 'Underperformers' in Mid-Year Reviews](https://tech.slashdot.org/story/25/05/21/1527224/meta-targets-more-underperformers-in-mid-year-reviews?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([discussion](https://news.ycombinator.com/item?id=44052984)) highlights challenges in scaling AI technologies and organizational impacts.

## Cybersecurity and Data Integrity

* [SEC Sues Crypto Startup Unicoin and Its Executives For Fraud](https://yro.slashdot.org/story/25/05/21/2055220/sec-sues-crypto-startup-unicoin-and-its-executives-for-fraud?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([discussion](https://news.ycombinator.com/item?id=44057467)) details legal actions against fraudulent activities in the blockchain space.

* [Nextcloud Cries Foul Over Google Play Store App Rejection](https://soylentnews.org/article.pl?sid=25/05/18/1411244&from=rss) ([discussion](https://news.ycombinator.com/item?id=44033711)) showcases regulatory challenges faced by open source projects.

* [Microsoft Says 394,000 Windows Computers Infected By Lumma Malware Globally](https://it.slashdot.org/story/25/05/21/1954240/microsoft-says-394000-windows-computers-infected-by-lumma-malware-globally?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([discussion](https://news.ycombinator.com/item?id=44053560)) highlights a widespread malware issue.

## Innovative Hardware and Software Developments

* [ITXPlus: A ITX Sized Macintosh Plus Logicboard Reproduction](https://68kmla.org/bb/index.php?threads/itxplus-a-itx-sized-macintosh-plus-logicboard-reproduction.49715/) ([discussion](https://news.ycombinator.com/item?id=44056659)) introduces a retro computing initiative to reproduce vintage hardware on a smaller scale.

* [Rocky Linux 10 Will Support RISC-V](https://rockylinux.org/news/rockylinux-support-for-riscv) ([discussion](https://news.ycombinator.com/item?id=44055895)) marks a step forward for open-source computing and future-compatible architecture.

* [Collaborative Text Editing Without CRDTs or OT](https://mattweidner.com/2025/05/21/text-without-crdts.html) ([discussion](https://news.ycombinator.com/item?id=44053560)) discusses innovative alternatives to standard collaborative editing methods.

## Science and Environment Discoveries

* [The US has a new most powerful laser hitting 2 petawatts](https://news.engin.umich.edu/2025/05/the-us-has-a-new-most-powerful-laser/) ([discussion](https://news.ycombinator.com/item?id=44052418)) demonstrates advancements in laser technology with significant power capabilities.

* [Astronomers Find Planet in Perpendicular Orbit Around Pair of Stars](https://soylentnews.org/article.pl?sid=25/05/21/1154206&from=rss) ([discussion](https://news.ycombinator.com/item?id=44055347)) sheds light on unusual celestial phenomena.

* [Turbocharged' Mitochondria Power Birds' Epic Migratory Journeys](https://www.quantamagazine.org/turbocharged-mitochondria-power-birds-epic-migratory-journeys-20250519/) ([discussion](https://news.ycombinator.com/item?id=44051652)) explores how biology enables extraordinary feats in the animal kingdom.

## Global Policies and Cultural Shifts

* [Quebec To Impose French-Language Quotas On Streaming Giants](https://yro.slashdot.org/story/25/05/21/2037230/quebec-to-impose-french-language-quotas-on-streaming-giants?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([discussion](https://news.ycombinator.com/item?id=44057219)) addresses cultural preservation through language laws.

* [White House Scraps Plan to Block Data Brokers From Selling Americans’ Sensitive Data](https://soylentnews.org/article.pl?sid=25/05/16/1754242&from=rss) ([discussion](https://news.ycombinator.com/item?id=44023400)) outlines shifting U.S. policies on data privacy.

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

* [2025-05-22, 01:47:50](https://lobste.rs/s/y2kogj/using_large_language_models_for_commit) - [Using Large Language Models for Commit Message Generation: A Preliminary Study](https://arxiv.org/abs/2401.05926)
* [2025-05-22, 00:44:38](https://lobste.rs/s/asm7t8/typeid_lua) - [TypeID in Lua](https://push.cx/typeid-in-lua)
* [2025-05-22, 00:31:01](https://news.ycombinator.com/item?id=44057612) - [Display any CSV file as a searchable, filterable, pretty HTML table](https://github.com/derekeder/csv-to-html-table)
* [2025-05-22, 00:02:00](https://yro.slashdot.org/story/25/05/21/2055220/sec-sues-crypto-startup-unicoin-and-its-executives-for-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SEC Sues Crypto Startup Unicoin and Its Executives For Fraud](https://yro.slashdot.org/story/25/05/21/2055220/sec-sues-crypto-startup-unicoin-and-its-executives-for-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 00:01:46](https://news.ycombinator.com/item?id=44057467) - [Tales from Mainframe Modernization](https://oppi.li/posts/tales_from_mainframe_modernization/)
* [2025-05-21, 23:58:50](https://lobste.rs/s/ih8sng/tales_from_mainframe_modernization) - [Tales From Mainframe Modernization](https://oppi.li/posts/tales_from_mainframe_modernization/)
* [2025-05-21, 23:36:07](https://lobste.rs/s/2amnod/gradients_are_new_intervals) - [Gradients are the new intervals](https://www.mattkeeter.com/blog/2025-05-14-gradients/)
* [2025-05-21, 23:20:00](https://yro.slashdot.org/story/25/05/21/2037230/quebec-to-impose-french-language-quotas-on-streaming-giants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Quebec To Impose French-Language Quotas On Streaming Giants](https://yro.slashdot.org/story/25/05/21/2037230/quebec-to-impose-french-language-quotas-on-streaming-giants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 23:17:29](https://news.ycombinator.com/item?id=44057219) - [Should I Block ICMP?](http://shouldiblockicmp.com/)
* [2025-05-21, 23:11:00](https://soylentnews.org/article.pl?sid=25/05/21/127244&amp;from=rss) - [Opinion: Unending Ransomware Attacks Are a Symptom, Not the Illness](https://soylentnews.org/article.pl?sid=25/05/21/127244&amp;from=rss)
* [2025-05-21, 22:50:10](https://news.ycombinator.com/item?id=44057044) - [I have tinnitus. I don&apos;t recommend it](https://blog.greg.technology/2025/05/20/tinnitus.html)
* [2025-05-21, 22:40:00](https://slashdot.org/story/25/05/21/2021255/the-information-microsoft-engineers-forced-to-dig-their-own-ai-graves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Information: Microsoft Engineers Forced To Dig Their Own AI Graves](https://slashdot.org/story/25/05/21/2021255/the-information-microsoft-engineers-forced-to-dig-their-own-ai-graves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 22:37:05](https://lobste.rs/s/dgxae8/chatgpt_heard_about_eagles_fans) - [ChatGPT Heard About Eagles Fans](https://www.dbreunig.com/2025/05/21/chatgpt-heard-about-eagles-fans.html)
* [2025-05-21, 22:35:56](https://lobste.rs/s/3u09yc/idiomatic_errors_clojure) - [Idiomatic errors in Clojure](https://www.daveliepmann.com/articles/idiomatic-clojure-errors.html)
* [2025-05-21, 22:00:00](https://it.slashdot.org/story/25/05/21/2031216/most-ai-chatbots-easily-tricked-into-giving-dangerous-responses-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Most AI Chatbots Easily Tricked Into Giving Dangerous Responses, Study Finds](https://it.slashdot.org/story/25/05/21/2031216/most-ai-chatbots-easily-tricked-into-giving-dangerous-responses-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 21:52:30](https://news.ycombinator.com/item?id=44056659) - [ITXPlus: A ITX Sized Macintosh Plus Logicboard Reproduction](https://68kmla.org/bb/index.php?threads/itxplus-a-itx-sized-macintosh-plus-logicboard-reproduction.49715/)
* [2025-05-21, 21:20:00](https://tech.slashdot.org/story/25/05/21/2010219/apollo-for-reddit-dev-christian-selig-to-join-digg-as-an-advisor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apollo For Reddit Dev Christian Selig To Join Digg As an Advisor](https://tech.slashdot.org/story/25/05/21/2010219/apollo-for-reddit-dev-christian-selig-to-join-digg-as-an-advisor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 21:18:07](https://news.ycombinator.com/item?id=44056407) - [The Machine Stops (1909)](https://standardebooks.org/ebooks/e-m-forster/short-fiction/text/the-machine-stops)
* [2025-05-21, 21:00:11](https://news.ycombinator.com/item?id=44056280) - [Sorcerer (YC S24) Is Hiring a Lead Hardware Design Engineer](https://jobs.ashbyhq.com/sorcerer/6beb70de-9956-49b7-8e28-f48ea39efac6)
* [2025-05-21, 20:40:58](https://news.ycombinator.com/item?id=44056104) - [Rocky Linux 10 Will Support RISC-V](https://rockylinux.org/news/rockylinux-support-for-riscv)
* [2025-05-21, 20:40:00](https://slashdot.org/story/25/05/21/202218/android-xr-glasses-get-io-2025-demo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android XR Glasses Get I/O 2025 Demo](https://slashdot.org/story/25/05/21/202218/android-xr-glasses-get-io-2025-demo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 20:21:06](https://news.ycombinator.com/item?id=44055895) - [Show HN: Confidential computing for high-assurance RISC-V embedded systems](https://github.com/IBM/ACE-RISCV)
* [2025-05-21, 20:00:00](https://it.slashdot.org/story/25/05/21/1954240/microsoft-says-394000-windows-computers-infected-by-lumma-malware-globally?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Says 394,000 Windows Computers Infected By Lumma Malware Globally](https://it.slashdot.org/story/25/05/21/1954240/microsoft-says-394000-windows-computers-infected-by-lumma-malware-globally?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 19:50:37](https://news.ycombinator.com/item?id=44055542) - [Show HN: I&apos;ve built online video editor](https://clipjs.vercel.app/)
* [2025-05-21, 19:48:26](https://news.ycombinator.com/item?id=44055520) - [µPC: Scaling Predictive Coding to 100 Layer Networks](https://arxiv.org/abs/2505.13124)
* [2025-05-21, 19:34:20](https://news.ycombinator.com/item?id=44055347) - [For algorithms, a little memory outweighs a lot of time](https://www.quantamagazine.org/for-algorithms-a-little-memory-outweighs-a-lot-of-time-20250521/)
* [2025-05-21, 18:45:18](https://news.ycombinator.com/item?id=44054775) - [The curious tale of Bhutan&apos;s playable record postage stamps (2015)](https://thevinylfactory.com/features/the-curious-tale-of-bhutans-playable-record-postage-stamps/)
* [2025-05-21, 18:45:00](https://hardware.slashdot.org/story/25/05/21/1844241/ai-set-to-consume-electricity-equivalent-to-22-of-us-homes-by-2028-new-analysis-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Set To Consume Electricity Equivalent To 22% of US Homes By 2028, New Analysis Says](https://hardware.slashdot.org/story/25/05/21/1844241/ai-set-to-consume-electricity-equivalent-to-22-of-us-homes-by-2028-new-analysis-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 18:29:00](https://soylentnews.org/article.pl?sid=25/05/21/1154206&amp;from=rss) - [\&quot;Big Surprise\&quot;: Astronomers Find Planet in Perpendicular Orbit Around Pair of Stars](https://soylentnews.org/article.pl?sid=25/05/21/1154206&amp;from=rss)
* [2025-05-21, 18:05:00](https://news.slashdot.org/story/25/05/21/184249/why-does-the-us-always-run-a-trade-deficit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Does the US Always Run a Trade Deficit?](https://news.slashdot.org/story/25/05/21/184249/why-does-the-us-always-run-a-trade-deficit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 17:53:40](https://news.ycombinator.com/item?id=44054185) - [An upgraded dev experience in Google AI Studio](https://developers.googleblog.com/en/google-ai-studio-native-code-generation-agentic-tools-upgrade/)
* [2025-05-21, 17:18:52](https://news.ycombinator.com/item?id=44053744) - [LLM function calls don&apos;t scale; code orchestration is simpler, more effective](https://jngiam.bearblog.dev/mcp-large-data/)
* [2025-05-21, 17:10:00](https://slashdot.org/story/25/05/21/1710237/openai-acquires-jony-ives-startup-in-65-billion-deal-to-create-ai-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Acquires Jony Ive&apos;s Startup in $6.5 Billion Deal To Create AI Devices](https://slashdot.org/story/25/05/21/1710237/openai-acquires-jony-ives-startup-in-65-billion-deal-to-create-ai-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 17:08:58](https://news.ycombinator.com/item?id=44053603) - [Storefront Web Components](https://shopify.dev/docs/api/storefront-web-components)
* [2025-05-21, 17:05:45](https://news.ycombinator.com/item?id=44053560) - [Collaborative Text Editing Without CRDTs or OT](https://mattweidner.com/2025/05/21/text-without-crdts.html)
* [2025-05-21, 17:01:35](https://news.ycombinator.com/item?id=44053518) - [OpenAI to buy AI startup from Jony Ive](https://www.bloomberg.com/news/articles/2025-05-21/openai-to-buy-apple-veteran-jony-ive-s-ai-device-startup-in-6-5-billion-deal)
* [2025-05-21, 16:59:08](https://lobste.rs/s/m3wugb/my_technological_regrets) - [My Technological Regrets](https://jezenthomas.com/2025/01/my-technological-regrets/)
* [2025-05-21, 16:46:53](https://news.ycombinator.com/item?id=44053364) - [By default, Signal doesn&apos;t recall](https://signal.org/blog/signal-doesnt-recall/)
* [2025-05-21, 16:44:00](https://tech.slashdot.org/story/25/05/21/1644208/windows-11-to-get-apple-style-app-continuity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 11 To Get Apple-Style App Continuity ](https://tech.slashdot.org/story/25/05/21/1644208/windows-11-to-get-apple-style-app-continuity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 16:18:30](https://lobste.rs/s/nxroup/introduction_bases_obsidian_help) - [Introduction to Bases - Obsidian Help](https://help.obsidian.md/bases)
* [2025-05-21, 16:10:06](https://news.ycombinator.com/item?id=44052984) - [Introducing the Llama Startup Program](https://ai.meta.com/blog/llama-startup-program/?_fb_noscript=1)
* [2025-05-21, 16:01:00](https://tech.slashdot.org/story/25/05/21/1527224/meta-targets-more-underperformers-in-mid-year-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Targets More &apos;Underperformers&apos; in Mid-Year Reviews](https://tech.slashdot.org/story/25/05/21/1527224/meta-targets-more-underperformers-in-mid-year-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 15:49:15](https://news.ycombinator.com/item?id=44052766) - [Launch HN: SIM Studio (YC X25) – Figma-Like Canvas for Agent Workflows](https://news.ycombinator.com/item?id=44052766)
* [2025-05-21, 15:33:09](https://lobste.rs/s/eyceuf/vim_vs_kakoune_puzzles) - [Vim vs. Kakoune puzzles](https://strongly-typed-thoughts.net/blog/vim-kakoune-puzzles-2025)
* [2025-05-21, 15:30:47](https://lobste.rs/s/sn6wch/introducing_converse_11_major_leap) - [Introducing Converse 11: A Major Leap Forward for XMPP Webchat](https://opkode.com/blog/2025-05-21-converse-11/)
* [2025-05-21, 15:22:00](https://tech.slashdot.org/story/25/05/21/152229/googles-brin-i-made-a-lot-of-mistakes-with-google-glass?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Brin: &apos;I Made a Lot of Mistakes With Google Glass&apos;](https://tech.slashdot.org/story/25/05/21/152229/googles-brin-i-made-a-lot-of-mistakes-with-google-glass?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 15:17:10](https://news.ycombinator.com/item?id=44052418) - [The US has a new most powerful laser hitting 2 petawatts](https://news.engin.umich.edu/2025/05/the-us-has-a-new-most-powerful-laser/)
* [2025-05-21, 15:00:27](https://lobste.rs/s/f01o2f/there_ain_t_no_such_thing_as_free_custom) - [There Ain’t No Such Thing as a Free Custom Memory Allocator](https://arxiv.org/pdf/2206.11728)
* [2025-05-21, 14:45:00](https://slashdot.org/story/25/05/21/1439218/amazon-gives-refunds-for-years-old-returns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Gives Refunds for Years-Old Returns](https://slashdot.org/story/25/05/21/1439218/amazon-gives-refunds-for-years-old-returns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 14:39:37](https://news.ycombinator.com/item?id=44051958) - [Animated Factorization (2012)](http://www.datapointed.net/visualizations/math/factorization/animated-diagrams/)
* [2025-05-21, 14:21:10](https://news.ycombinator.com/item?id=44051733) - [Devstral](https://mistral.ai/news/devstral)
* [2025-05-21, 14:11:33](https://news.ycombinator.com/item?id=44051652) - [&apos;Turbocharged&apos; Mitochondria Power Birds&apos; Epic Migratory Journeys](https://www.quantamagazine.org/turbocharged-mitochondria-power-birds-epic-migratory-journeys-20250519/)
* [2025-05-21, 14:10:03](https://lobste.rs/s/84kjsg/functional_hash_tables_explained) - [Functional hash tables explained](https://spritely.institute/news/functional-hash-tables-explained.html)
* [2025-05-21, 14:10:00](https://games.slashdot.org/story/25/05/21/1410249/microsoft-blames-apple-for-xbox-mobile-store-delay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Blames Apple for Xbox Mobile Store Delay](https://games.slashdot.org/story/25/05/21/1410249/microsoft-blames-apple-for-xbox-mobile-store-delay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 13:56:49](https://lobste.rs/s/grnyod/erlang_otp_28_highlights) - [Erlang/OTP 28 Highlights](https://www.erlang.org/blog/highlights-otp-28/)
* [2025-05-21, 13:42:00](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss) - [Annual Tech Waste Footprint Per Person is 11.2 Kg](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss)
* [2025-05-21, 13:26:12](https://lobste.rs/s/rff4fc/artiflakery_easy_way_distribute_static) - [Artiflakery, an easy way to distribute static Nix flake artifacts](https://luj.fr/blog/artiflakery-webserver-flake-artifacts.html)
* [2025-05-21, 11:50:03](https://lobste.rs/s/7u3hhv/introducing_roto_compiled_scripting) - [Introducing Roto: A Compiled Scripting Language for Rust](https://blog.nlnetlabs.nl/introducing-roto-a-compiled-scripting-language-for-rust/)
* [2025-05-21, 11:38:07](https://lobste.rs/s/2lbj9k/we_did_math_on_ai_s_energy_footprint_here_s) - [We did the math on AI’s energy footprint. Here’s the story you haven’t heard](https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/)
* [2025-05-21, 10:59:56](https://lobste.rs/s/c6scqf/erlang_otp_28_0_release) - [Erlang/OTP 28.0 Release](https://www.erlang.org/news/180)
* [2025-05-21, 10:14:45](https://lobste.rs/s/96ttp9/reading_code_is_still_most_effective) - [Reading code is still the most effective method to debug multi-thread bug](https://nanxiao.me/en/reading-code-is-still-the-most-effective-method-to-debug-multi-thread-bug/)
* [2025-05-21, 08:58:00](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss) - [Apple is Developing Tech So Users Can Control Devices With Only Their Thoughts](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss)
* [2025-05-21, 07:30:05](https://lobste.rs/s/dtvu8f/building_fast_website_with_mash_stack) - [Building a fast website with the MASH stack in Rust](https://emschwartz.me/building-a-fast-website-with-the-mash-stack-in-rust/)
* [2025-05-21, 04:14:00](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss) - [AWS Claims That Britain Needs More Nuclear Power for AI Datacenters](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss)
* [2025-05-21, 00:50:35](https://lobste.rs/s/dmx9e3/apply_coop_matching_people_with_jobs_fit) - [apply.coop - Matching people with jobs that fit their values &amp; passions](https://apply.coop)
* [2025-05-20, 23:27:00](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss) - [New Intel CPU Flaws Leak Sensitive Data From Privileged Memory](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss)
* [2025-05-20, 22:19:29](https://lobste.rs/s/srdmcg/litestream_revamped) - [Litestream: Revamped](https://fly.io/blog/litestream-revamped/)
* [2025-05-20, 21:43:07](https://lobste.rs/s/bl1b9q/krebsonsecurity_hit_with_near_record_6_3) - [KrebsOnSecurity Hit With Near-Record 6.3 Tbps DDoS](https://krebsonsecurity.com/2025/05/krebsonsecurity-hit-with-near-record-6-3-tbps-ddos/)
* [2025-05-20, 20:30:00](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss) - [UK-To-US English Converter Produced Amazing Mistakes](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss)
* [2025-05-20, 18:45:00](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss) - [Unlocking Voices: AR For Nonverbal Autism](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss)
* [2025-05-20, 15:33:42](https://lobste.rs/s/dtwy2u/open_file_format_for_storing_information) - [An Open File Format for storing the information from a forge such as issues, pull/merge requests, milestones](https://f3.forgefriends.org/)
* [2025-05-20, 14:00:00](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss) - [Regeneron to Buy 23andMe Out of Bankruptcy for $256 Million](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss)
* [2025-05-20, 13:55:19](https://lobste.rs/s/viwe6p/open_source_can_t_coordinate) - [Open Source Can&apos;t Coordinate](https://matklad.github.io/2025/05/20/open-source-cant-coordinate.html)
* [2025-05-20, 12:12:40](https://lobste.rs/s/glfslx/reports_deno_s_demise_have_been_greatly) - [Reports of Deno&apos;s Demise Have Been Greatly Exaggerated](https://deno.com/blog/greatly-exaggerated)
* [2025-05-20, 09:16:00](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss) - [Space Computing Satellite Constellation Launched into Orbit](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss)
* [2025-05-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss) - [Meta Is Making Users Who Opted Out of AI Training Opt Out Again](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss)
* [2025-05-19, 23:49:00](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss) - [Nextcloud Cries Foul Over Google Play Store App Rejection](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss)
* [2025-05-19, 19:18:24](https://news.ycombinator.com/item?id=44033711) - [CERN gears up to ship antimatter across Europe](https://arstechnica.com/science/2025/05/cern-gears-up-to-ship-antimatter-across-europe/)
* [2025-05-19, 19:06:00](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss) - [The End of the Universe is Nigh!](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss)
* [2025-05-19, 14:24:00](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss) - [UK Retail Sector Hit by Ransomware Spree](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss)
* [2025-05-19, 10:33:02](https://news.ycombinator.com/item?id=44028286) - [How we made iText&apos;s table rendering faster](https://kb.itextpdf.com/itext/how-i-made-pdf-table-rendering-faster)
* [2025-05-19, 09:39:00](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss) - [How a New Type of AI is Helping Police Skirt Facial Recognition Bans](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss)
* [2025-05-19, 04:54:00](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss) - [The Day Grok Lost its Mind](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss)
* [2025-05-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss) - [Mars May Have Vast Underground Oceans](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss)
* [2025-05-18, 20:59:18](https://news.ycombinator.com/item?id=44024278) - [London&apos;s Water Pumps: Where History Flows Freely](https://londonist.com/london/features/london-s-water-pump)
* [2025-05-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss) - [U.S. Inks Bill to Force Geo-Tracking Tech for High-End Gaming and AI GPUs](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss)
* [2025-05-18, 18:34:12](https://news.ycombinator.com/item?id=44023400) - [What Is the Difference Between a Block, a Proc, and a Lambda in Ruby? (2013)](https://blog.awaxman.com/what-is-the-difference-between-a-block-a-proc-and-a-lambda-in-ruby)
* [2025-05-18, 17:03:55](https://news.ycombinator.com/item?id=44022736) - [Understanding the Go Scheduler](https://nghiant3223.github.io/2025/04/15/go-scheduler.html)
* [2025-05-18, 14:38:00](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss) - [NASA Keeps Ancient Voyager 1 Spacecraft Alive With Hail Mary Thruster Fix](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss)
* [2025-05-18, 09:53:00](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss) - [White House Scraps Plan to Block Data Brokers From Selling Americans’ Sensitive Data](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss)
* [2025-05-18, 05:12:00](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss) - [China&apos;s Hygon Details C86-5G: A 128-Core X86 CPU with Advanced Features and Four-Way SMT](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss)
* [2025-05-18, 00:24:00](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss) - [Oniux by Tor: Isolating Linux Applications at the Kernel Level for Secure Connections](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss)
