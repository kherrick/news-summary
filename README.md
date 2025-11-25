# [News Summary](https://kherrick.github.io/news-summary/)

## AI Innovations and Controversies

* [Trump Launches Genesis Mission, a Manhattan Project-Level AI Push](https://yro.slashdot.org/story/25/11/25/009227/trump-launches-genesis-mission-a-manhattan-project-level-ai-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed): An ambitious government initiative likened to the Manhattan Project aims to accelerate AI development in the US.

* [Jony Ive and Sam Altman Say They Finally Have an AI Hardware Prototype](https://hardware.slashdot.org/story/25/11/25/006212/jony-ive-and-sam-altman-say-they-finally-have-an-ai-hardware-prototype?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed): Tech visionaries reveal a pioneering AI hardware prototype, potentially signaling a new wave in computing.

* [Mind-reading devices can now predict preconscious thoughts](https://www.nature.com/articles/d41586-025-03714-0): Scientists create groundbreaking devices capable of decoding thoughts before they reach consciousness.

* [Science-Centric Streaming Service Curiosity Stream is an AI-licensing Firm Now](https://tech.slashdot.org/story/25/11/24/1643247/science-centric-streaming-service-curiosity-stream-is-an-ai-licensing-firm-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed): A surprising pivot from education to AI licensing for Curiosity Stream.

## Hardware and Software Developments

* [Pebble Goes Fully Open Source](https://news.slashdot.org/story/25/11/24/2152211/pebble-goes-fully-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed): The iconic smartwatch embraces open-source software, empowering users and developers alike.

* [TSMC Arizona outage saw fab halt, Apple wafers scrapped](https://www.culpium.com/p/tsmc-arizona-outage-saw-fab-halt): A facility malfunction results in production loss, shedding light on vulnerabilities in supply chains.

* [Shai-Hulud Returns: Over 300 NPM Packages infected via Fake Bun Runtime Within Hours](https://helixguard.ai/blog/malicious-sha1hulud-2025-11-24): A rapid attack compromises numerous open-source packages, highlighting security gaps in software supply chains.

* [Cool-retro-term: terminal emulator which mimics look and feel of the old CRTs](https://github.com/Swordfish90/cool-retro-term): Retro computing fans can relive the CRT experience with a terminal emulator.

## Environmental and Societal Issues

* [Magician Forgets Password to His Own Hand After RFID Chip Implant](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss): A magician's experiment with RFID chips highlights risks in wearable tech.

* [Debian Libre Live Images Released for Software Freedom Lovers](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss): Debian unveils new software to enhance digital freedom for users.

* [U.S. Spy Agency Releases Amelia Earhart Records](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss): Declassified documents provide new insight into the iconic aviator's mysterious disappearance.

## Technology Shaping the Future

* [First Large-Scale VR Use in the Classroom Extends the Boundaries of Education](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss): Virtual reality transforms teaching, enhancing engagement and learning outcomes.

* [Amazon Pledges Up To $50 Billion To Expand AI, Supercomputing For US Government](https://yro.slashdot.org/story/25/11/24/2233254/amazon-pledges-up-to-50-billion-to-expand-ai-supercomputing-for-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed): Amazon's significant investment in AI epitomizes the tech race to dominate advanced computing.

* [Google Chrome Bug Exploited as an 0-Day - Patch Now or Risk Full System Compromise](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss): A critical vulnerability demands swift action from users to prevent system breaches.

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

* [2025-11-25, 02:08:11](https://lobste.rs/s/jrccc5/hyperoptic_ipv6_out_order_packets) - [Hyperoptic: IPv6 and Out-of-Order Packets](https://blog.zakkemble.net/hyperoptic-ipv6-and-out-of-order-packets/)
* [2025-11-25, 01:25:00](https://yro.slashdot.org/story/25/11/25/009227/trump-launches-genesis-mission-a-manhattan-project-level-ai-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Launches Genesis Mission, a Manhattan Project-Level AI Push](https://yro.slashdot.org/story/25/11/25/009227/trump-launches-genesis-mission-a-manhattan-project-level-ai-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 00:45:00](https://hardware.slashdot.org/story/25/11/25/006212/jony-ive-and-sam-altman-say-they-finally-have-an-ai-hardware-prototype?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jony Ive and Sam Altman Say They Finally Have an AI Hardware Prototype](https://hardware.slashdot.org/story/25/11/25/006212/jony-ive-and-sam-altman-say-they-finally-have-an-ai-hardware-prototype?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 00:02:00](https://slashdot.org/story/25/11/24/2248212/japans-high-stakes-gamble-to-turn-island-of-flowers-into-global-chip-hub?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan&apos;s High-Stakes Gamble To Turn Island of Flowers Into Global Chip Hub](https://slashdot.org/story/25/11/24/2248212/japans-high-stakes-gamble-to-turn-island-of-flowers-into-global-chip-hub?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 23:20:00](https://yro.slashdot.org/story/25/11/24/2233254/amazon-pledges-up-to-50-billion-to-expand-ai-supercomputing-for-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Pledges Up To $50 Billion To Expand AI, Supercomputing For US Government](https://yro.slashdot.org/story/25/11/24/2233254/amazon-pledges-up-to-50-billion-to-expand-ai-supercomputing-for-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 23:19:06](https://lobste.rs/s/rl1r8m/rubee) - [RuBee](https://computer.rip/2025-11-22-RuBee.html)
* [2025-11-24, 23:16:00](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss) - [Ring&apos;s New Feature Turns Your Doorbell Into a Biometric Spy](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss)
* [2025-11-24, 22:40:00](https://news.slashdot.org/story/25/11/24/2152211/pebble-goes-fully-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pebble Goes Fully Open Source](https://news.slashdot.org/story/25/11/24/2152211/pebble-goes-fully-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 22:38:08](https://lobste.rs/s/0frbqq/this_development_cycle_cargo_1_92) - [This Development-cycle in Cargo: 1.92](https://blog.rust-lang.org/inside-rust/2025/11/24/this-development-cycle-in-cargo-1.92/)
* [2025-11-24, 22:00:00](https://hardware.slashdot.org/story/25/11/24/2144256/arduinos-new-terms-of-service-worries-hobbyists-ahead-of-qualcomm-acquisition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arduino&apos;s New Terms of Service Worries Hobbyists Ahead of Qualcomm Acquisition](https://hardware.slashdot.org/story/25/11/24/2144256/arduinos-new-terms-of-service-worries-hobbyists-ahead-of-qualcomm-acquisition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 21:21:00](https://slashdot.org/story/25/11/24/1754230/americans-are-holding-onto-devices-longer-than-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Americans Are Holding Onto Devices Longer Than Ever](https://slashdot.org/story/25/11/24/1754230/americans-are-holding-onto-devices-longer-than-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 20:43:00](https://entertainment.slashdot.org/story/25/11/24/1845207/udio-users-cant-download-their-ai-music-creations-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Udio Users Can&apos;t Download Their AI Music Creations Anymore](https://entertainment.slashdot.org/story/25/11/24/1845207/udio-users-cant-download-their-ai-music-creations-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 20:07:34](https://lobste.rs/s/jgczrj/counter_galois_onion_improved) - [Counter Galois Onion: Improved encryption for Tor circuit traffic](https://blog.torproject.org/introducing-cgo/)
* [2025-11-24, 20:01:20](https://lobste.rs/s/alor5k/is_latex_worth_it_2023) - [Is LaTeX worth it? (2023)](https://philipphagenlocher.de/post/is-latex-worth-it/)
* [2025-11-24, 20:01:00](https://science.slashdot.org/story/25/11/24/1834244/obesity-jab-drug-fails-to-slow-alzheimers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Obesity Jab Drug Fails To Slow Alzheimer&apos;s](https://science.slashdot.org/story/25/11/24/1834244/obesity-jab-drug-fails-to-slow-alzheimers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 19:29:12](https://news.ycombinator.com/item?id=46038143) - [PS5 now costs less than 64GB of DDR5 memory. RAM jumps to $600 due to shortage](https://www.tomshardware.com/pc-components/ddr5/64gb-of-ddr5-memory-now-costs-more-than-an-entire-ps5-even-after-a-discount-trident-z5-neo-kit-jumps-to-usd600-due-to-dram-shortage-and-its-expected-to-get-worse-into-2026)
* [2025-11-24, 19:25:25](https://news.ycombinator.com/item?id=46038099) - [Unpowered SSDs slowly lose data](https://www.xda-developers.com/your-unpowered-ssd-is-slowly-losing-your-data/)
* [2025-11-24, 19:21:35](https://news.ycombinator.com/item?id=46038047) - [Claude Advanced Tool Use](https://www.anthropic.com/engineering/advanced-tool-use)
* [2025-11-24, 19:20:00](https://tech.slashdot.org/story/25/11/24/1855243/googles-aluminium-os-will-eventually-replace-chromeos-with-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s &apos;Aluminium OS&apos; Will Eventually Replace ChromeOS With Android](https://tech.slashdot.org/story/25/11/24/1855243/googles-aluminium-os-will-eventually-replace-chromeos-with-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 18:53:05](https://news.ycombinator.com/item?id=46037637) - [Claude Opus 4.5](https://www.anthropic.com/news/claude-opus-4-5)
* [2025-11-24, 18:52:12](https://news.ycombinator.com/item?id=46037626) - [Pebble Watch software is now 100% open source](https://ericmigi.com/blog/pebble-watch-software-is-now-100percent-open-source)
* [2025-11-24, 18:49:47](https://news.ycombinator.com/item?id=46037591) - [Google&apos;s new &apos;Aluminium OS&apos; project brings Android to PC](https://www.androidauthority.com/aluminium-os-android-for-pcs-3619092/)
* [2025-11-24, 18:48:04](https://news.ycombinator.com/item?id=46037573) - [GrapheneOS migrates server infrastructure from France](https://www.privacyguides.org/news/2025/11/22/grapheneos-migrates-server-infrastructure-from-france-amid-police-intimidation-claims/)
* [2025-11-24, 18:41:00](https://tech.slashdot.org/story/25/11/24/1643247/science-centric-streaming-service-curiosity-stream-is-an-ai-licensing-firm-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Science-Centric Streaming Service Curiosity Stream is an AI-licensing Firm Now](https://tech.slashdot.org/story/25/11/24/1643247/science-centric-streaming-service-curiosity-stream-is-an-ai-licensing-firm-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 18:37:27](https://news.ycombinator.com/item?id=46037416) - [Launch HN: Karumi (YC F25) – Personalized, agentic product demos](http://karumi.ai/)
* [2025-11-24, 18:32:27](https://news.ycombinator.com/item?id=46037343) - [The Bitter Lesson of LLM Extensions](https://www.sawyerhood.com/blog/llm-extension)
* [2025-11-24, 18:30:48](https://news.ycombinator.com/item?id=46037324) - [TSMC Arizona outage saw fab halt, Apple wafers scrapped](https://www.culpium.com/p/tsmc-arizona-outage-saw-fab-halt)
* [2025-11-24, 18:27:00](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss) - [Thieves Want Your iPhone, Not Your Android](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss)
* [2025-11-24, 18:26:09](https://news.ycombinator.com/item?id=46037267) - [Mind-reading devices can now predict preconscious thoughts](https://www.nature.com/articles/d41586-025-03714-0)
* [2025-11-24, 18:01:00](https://tech.slashdot.org/story/25/11/24/1625249/google-denies-misleading-reports-of-gmail-using-your-emails-to-train-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Denies &apos;Misleading&apos; Reports of Gmail Using Your Emails To Train AI](https://tech.slashdot.org/story/25/11/24/1625249/google-denies-misleading-reports-of-gmail-using-your-emails-to-train-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 17:52:43](https://news.ycombinator.com/item?id=46036908) - [Show HN: I built an interactive HN Simulator](https://news.ysimulator.run/news)
* [2025-11-24, 17:52:01](https://news.ycombinator.com/item?id=46036895) - [Cool-retro-term: terminal emulator which mimics look and feel of the old CRTs](https://github.com/Swordfish90/cool-retro-term)
* [2025-11-24, 17:21:00](https://tech.slashdot.org/story/25/11/24/1531202/nato-taps-google-for-air-gapped-sovereign-cloud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NATO Taps Google For Air-Gapped Sovereign Cloud](https://tech.slashdot.org/story/25/11/24/1531202/nato-taps-google-for-air-gapped-sovereign-cloud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 17:00:33](https://news.ycombinator.com/item?id=46036222) - [Corvus Robotics (YC S18): Hiring Head of Mfg/Ops, Next Door to YC Mountain View](https://news.ycombinator.com/item?id=46036222)
* [2025-11-24, 16:41:00](https://it.slashdot.org/story/25/11/24/1512259/the-slow-transformation-of-notepad-into-something-else-entirely-continues?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Slow Transformation of Notepad Into Something Else Entirely Continues](https://it.slashdot.org/story/25/11/24/1512259/the-slow-transformation-of-notepad-into-something-else-entirely-continues?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 16:17:35](https://lobste.rs/s/lpvmll/misunderstanding_dependency_comic) - [Misunderstanding that “Dependency” comic](https://bertptrs.nl/2025/11/24/misunderstanding-that-dependency-comic.html)
* [2025-11-24, 16:01:00](https://it.slashdot.org/story/25/11/24/154202/lenovo-stockpiling-pc-memory-due-to-unprecedented-ai-squeeze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lenovo Stockpiling PC Memory Due To &apos;Unprecedented&apos; AI Squeeze](https://it.slashdot.org/story/25/11/24/154202/lenovo-stockpiling-pc-memory-due-to-unprecedented-ai-squeeze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 15:38:04](https://lobste.rs/s/w2xqrd/demystifying_determinism_durable) - [Demystifying Determinism in Durable Execution](https://jack-vanlightly.com/blog/2025/11/24/demystifying-determinism-in-durable-execution)
* [2025-11-24, 15:16:26](https://lobste.rs/s/ta9886/open_source_has_too_many_parasocial) - [Open Source Has Too Many Parasocial Relationships](https://pivotnine.com/blog/open-source-has-too-many-parasocial-relationships/)
* [2025-11-24, 13:42:00](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss) - [Magician Forgets Password to His Own Hand After RFID Chip Implant](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss)
* [2025-11-24, 13:20:39](https://lobste.rs/s/zjxjhc/automating_updates_digital_vigil) - [Automating updates to a digital vigil](https://ntietz.com/blog/automating-updates-to-a-digital-vigil/)
* [2025-11-24, 12:23:02](https://news.ycombinator.com/item?id=46033330) - [Chrome Jpegxl Issue Reopened](https://issues.chromium.org/issues/40168998)
* [2025-11-24, 11:44:46](https://lobste.rs/s/vpybud/i_put_search_engine_into_lambda_so_you_only) - [I put a search engine into a Lambda, so you only pay when you search](https://nixiesearch.substack.com/p/i-put-a-real-search-engine-into-a)
* [2025-11-24, 11:04:26](https://lobste.rs/s/od61og/shai_hulud_returns_over_300_npm_packages) - [Shai-Hulud Returns: Over 300 NPM Packages infected via Fake Bun Runtime Within Hours](https://helixguard.ai/blog/malicious-sha1hulud-2025-11-24)
* [2025-11-24, 10:40:22](https://news.ycombinator.com/item?id=46032539) - [Shai-Hulud Returns: Over 300 NPM Packages Infected](https://helixguard.ai/blog/malicious-sha1hulud-2025-11-24)
* [2025-11-24, 10:10:21](https://lobste.rs/s/x5f9en/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/x5f9en/what_are_you_doing_this_week)
* [2025-11-24, 10:04:16](https://lobste.rs/s/ttsydj/alice_new_build_system_for_ocaml) - [Alice - new build system for Ocaml](https://www.alicecaml.org/)
* [2025-11-24, 09:50:20](https://lobste.rs/s/jn95w0/edn_c_fast_zero_copy_edn_extensible_data) - [edn.c: A fast, zero-copy EDN (Extensible Data Notation) reader written in C11 with SIMD acceleration](https://github.com/DotFox/edn.c)
* [2025-11-24, 09:40:32](https://news.ycombinator.com/item?id=46032148) - [Fifty Shades of OOP](https://lesleylai.info/en/fifty_shades_of_oop/)
* [2025-11-24, 09:38:48](https://lobste.rs/s/fjf1eh/fifty_shades_oop) - [Fifty Shades of OOP](https://lesleylai.info/en/fifty_shades_of_oop/)
* [2025-11-24, 09:27:56](https://lobste.rs/s/hcjaj0/why_i_still_love_linux) - [Why I (still) love Linux](https://it-notes.dragas.net/2025/11/24/why-i-still-love-linux/)
* [2025-11-24, 09:24:08](https://lobste.rs/s/rdezfn/does_dioxus_spark_joy) - [Does Dioxus spark joy?](https://fasterthanli.me/articles/does-dioxus-spark-joy)
* [2025-11-24, 08:53:00](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss) - [First-Ever Full Earth System Simulation Provides New Tool to Understand Climate Change](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss)
* [2025-11-24, 07:15:56](https://lobste.rs/s/9gx2ig/build_compiler_five_projects) - [Build a Compiler in Five Projects](https://kmicinski.com/functional-programming/2025/11/23/build-a-language/)
* [2025-11-24, 05:58:08](https://news.ycombinator.com/item?id=46030799) - [What OpenAI did when ChatGPT users lost touch with reality](https://www.nytimes.com/2025/11/23/technology/openai-chatgpt-users-risks.html)
* [2025-11-24, 04:10:33](https://lobste.rs/s/htdedi/with_love_kde_take_moment) - [With Love to KDE: Take a Moment](https://korcenji.neocities.org/Writings/KDE-Take-A-Moment)
* [2025-11-24, 04:09:00](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss) - [Debian Libre Live Images Released for Software Freedom Lovers](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss)
* [2025-11-23, 23:26:00](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss) - [US Gives Local Police a Face-Scanning App Similar to One Used by ICE Agents](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss)
* [2025-11-23, 20:49:16](https://lobste.rs/s/aqefyy/cad_new_open_source_programming_language) - [µcad: New open source programming language that can generate 2D sketches and 3D objects](https://microcad.xyz)
* [2025-11-23, 20:46:07](https://lobste.rs/s/xxq1kw/ntoh_hton_is_bad_api) - [ntoh*/hton* is a bad API](https://purplesyringa.moe/blog/ntoh-hton-is-a-bad-api/)
* [2025-11-23, 20:26:22](https://lobste.rs/s/a8fm0p/why_zig_qt_feels_like_doing_impossible) - [Why Zig + Qt Feels Like Doing the Impossible Right](https://dayvster.com/blog/why-zig-+-qt-feels-like-doing-the-impossible-right/)
* [2025-11-23, 18:36:00](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss) - [U.S. Spy Agency Releases Amelia Earhart Records](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss)
* [2025-11-23, 17:33:36](https://lobste.rs/s/gae4dh/we_stopped_roadmap_work_for_week_fixed_189) - [We stopped roadmap work for a week and fixed 189 bugs](https://lalitm.com/fixits-are-good-for-the-soul/)
* [2025-11-23, 15:47:50](https://news.ycombinator.com/item?id=46024402) - [Bytes before FLOPS: your algorithm is (mostly) fine, your data isn&apos;t](https://www.bitsdraumar.is/bytes-before-flops/)
* [2025-11-23, 13:52:00](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss) - [Maybe That&apos;s Not Liquid Water on Mars After All](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss)
* [2025-11-23, 13:32:45](https://lobste.rs/s/1nop48/google_revisits_jpeg_xl_chromium_after) - [Google Revisits JPEG XL in Chromium After Earlier Removal](https://windowsreport.com/google-revisits-jpeg-xl-in-chromium-after-earlier-removal/)
* [2025-11-23, 12:19:52](https://lobste.rs/s/mzuktr/what_does_agpl_require) - [What does the AGPL require?](https://runxiyu.org/blog/agpl/)
* [2025-11-23, 09:10:00](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss) - [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss)
* [2025-11-23, 04:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss) - [Mercury Pollution in Marine Mammals is Increasing, New Study Finds](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss)
* [2025-11-23, 01:25:17](https://news.ycombinator.com/item?id=46019898) - [Three Years from GPT-3 to Gemini 3](https://www.oneusefulthing.org/p/three-years-from-gpt-3-to-gemini)
* [2025-11-22, 23:41:00](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss) - [Icelandic is in Danger of Dying Out Because of AI and English-Language Media, Says Former PM](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss)
* [2025-11-22, 18:58:00](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss) - [First Large-Scale VR Use in the Classroom Extends the Boundaries of Education](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss)
* [2025-11-22, 14:09:00](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss) - [Microsoft Warns its New “AI” Agents in Windows Can Install Malware](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss)
* [2025-11-22, 13:36:02](https://news.ycombinator.com/item?id=46014685) - [You can see a working Quantum Computer in IBM&apos;s London office](https://www.ianvisits.co.uk/articles/you-can-see-a-working-quantum-computer-in-ibms-london-office-85464/)
* [2025-11-22, 09:41:46](https://news.ycombinator.com/item?id=46013478) - [The history of Indian science fiction](https://altermag.com/articles/the-secret-history-of-indian-science-fiction)
* [2025-11-22, 09:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss) - [\&quot;Walk My AI Walk\&quot;, a #1 AI Country Song](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss)
* [2025-11-22, 04:42:00](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss) - [Join the the Newest Social Network and Party Like its 1987](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss)
* [2025-11-21, 23:54:00](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss) - [Kaspersky Antivirus is Now Available for Linux. Will You Use It?](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss)
* [2025-11-21, 19:10:00](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss) - [Google Chrome Bug Exploited as an 0-Day - Patch Now or Risk Full System Compromise](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss)
* [2025-11-21, 17:56:50](https://news.ycombinator.com/item?id=46006891) - [Building the largest known Kubernetes cluster](https://cloud.google.com/blog/products/containers-kubernetes/how-we-built-a-130000-node-gke-cluster/)
* [2025-11-21, 16:44:45](https://news.ycombinator.com/item?id=46006104) - [Show HN: OCR Arena – A playground for OCR models](https://www.ocrarena.ai/battle)
* [2025-11-21, 14:23:00](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss) - [China Cuts Open New Robot on Stage to Prove Authenticity](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss)
* [2025-11-21, 09:34:00](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss) - [Needy Software](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss)
* [2025-11-21, 04:45:00](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss) - [Software Developers Show Less Constructive Scepticism When Using AI Assistants](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss)
* [2025-11-21, 00:07:00](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss) - [Is Perplexity the First AI Unicorn to Fail?](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss)
