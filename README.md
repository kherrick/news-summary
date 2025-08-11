# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Innovations & Software

* [LLM Coding Assistant Census](https://aleyan.com/blog/2025-llm-assistant-census/) - A curated comparison of Large Language Model (LLM)-based coding assistants, analyzing features and performance. [Comments](https://lobste.rs/s/y6cpkw/llm_coding_assistant_census)

* [OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html) - OpenSSH introduces post-quantum cryptographic mechanisms as part of its latest enhancements against emerging threats. [Comments](https://lobste.rs/s/d1mjpf/openssh_post_quantum_cryptography)

* [GPT-OSS-120B runs on just 8GB VRAM & 64GB+ system RAM](https://old.reddit.com/r/LocalLLaMA/comments/1mke7ef/120b_runs_awesome_on_just_8gb_vram/) - Showcasing the efficiency of GPT-OSS-120B, a resource-light large language model. [Comments](https://news.ycombinator.com/item?id=44862542)

## Cryptocurrency and Security

* [$1M Stolen in 'Industrial-Scale Crypto Theft' Using AI-Generated Code](https://yro.slashdot.org/story/25/08/11/0037258/1m-stolen-in-industrial-scale-crypto-theft-using-ai-generated-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A concerning new trend in cryptocurrency thefts involving AI-generated exploits. [Comments](https://yro.slashdot.org/story/25/08/11/0037258/1m-stolen-in-industrial-scale-crypto-theft-using-ai-generated-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [WinRAR zero-day Exploited to Plant Malware on Archive Extraction](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss) - Explores a newly discovered vulnerability in the popular file compression software. [Comments](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss)

## Software Engineering & Development

* [Fornjot: early-stage b-rep CAD kernel, written in Rust](https://www.fornjot.app/) - A new Rust-based CAD kernel for early-stage modeling purposes. [Comments](https://lobste.rs/s/i84ous/fornjot_early_stage_b_rep_cad_kernel)

* [Faster substring search with SIMD in Zig](https://aarol.dev/posts/zig-simd-substr/) - Explains using SIMD instructions to optimize substring search operations. [Comments](https://lobste.rs/s/te7o9n/faster_substring_search_with_simd_zig)

* [Bypass PostgreSQL catalog overhead with direct partition hash calculations](https://www.shayon.dev/post/2025/221/bypass-postgresql-catalog-overhead-with-direct-partition-hash-calculations/) - Offering advanced database optimizations through hands-on techniques. [Comments](https://lobste.rs/s/qviemf/bypass_postgresql_catalog_overhead_with)

## AI and Machine Learning

* [Hand-picked selection of articles on AI fundamentals/concepts](https://aman.ai/primers/ai/) - A curated guide to build or broaden foundations in AI principles. [Comments](https://news.ycombinator.com/item?id=44862112)

* [WSJ Finds 'Dozens' of Delusional Claims from AI Chats as Companies Scramble for a Fix](https://slashdot.org/story/25/08/10/2023212/wsj-finds-dozens-of-delusional-claims-from-ai-chats-as-companies-scramble-for-a-fix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Issues with conversational AI and efforts for optimization amidst widespread deployment. [Comments](https://slashdot.org/story/25/08/10/2023212/wsj-finds-dozens-of-delusional-claims-from-ai-chats-as-companies-scramble-for-a-fix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Notable Events & Figures

* [It&apos;s Steve Wozniak&apos;s 75th Birthday.  Whatever Happened to His YouTube Lawsuit?](https://yro.slashdot.org/story/25/08/10/1938248/its-steve-wozniaks-75th-birthday-whatever-happened-to-his-youtube-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Celebrating Steve Wozniak’s milestone birthday and checking in on an ongoing legal dispute. [Comments](https://yro.slashdot.org/story/25/08/10/1938248/its-steve-wozniaks-75th-birthday-whatever-happened-to-his-youtube-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [RIP: James Lovell Dead at 97](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss) - Honoring the life and accomplishments of Apollo 13 captain, James Lovell. [Comments](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss)

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

* [2025-08-11, 13:12:41](https://lobste.rs/s/y6cpkw/llm_coding_assistant_census) - [LLM Coding Assistant Census](https://aleyan.com/blog/2025-llm-assistant-census/)
* [2025-08-11, 12:43:27](https://news.ycombinator.com/item?id=44863525) - [Amazon Drone Beehive Concept (2019)](https://etrr.springeropen.com/articles/10.1186/s12544-019-0368-2)
* [2025-08-11, 12:27:08](https://news.ycombinator.com/item?id=44863409) - [Pricing Pages – A Curated Gallery of Pricing Page Designs](https://pricingpages.design/)
* [2025-08-11, 12:14:59](https://lobste.rs/s/d1mjpf/openssh_post_quantum_cryptography) - [OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)
* [2025-08-11, 12:01:58](https://news.ycombinator.com/item?id=44863242) - [OpenSSH Post-Quantum Cryptography](https://www.openssh.com/pq.html)
* [2025-08-11, 11:34:00](https://yro.slashdot.org/story/25/08/10/1938248/its-steve-wozniaks-75th-birthday-whatever-happened-to-his-youtube-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [It&apos;s Steve Wozniak&apos;s 75th Birthday.  Whatever Happened to His YouTube Lawsuit?](https://yro.slashdot.org/story/25/08/10/1938248/its-steve-wozniaks-75th-birthday-whatever-happened-to-his-youtube-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 11:33:50](https://lobste.rs/s/pdrj5s/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/pdrj5s/what_are_you_doing_this_week)
* [2025-08-11, 11:09:44](https://lobste.rs/s/gezsia/bevy_s_fifth_birthday) - [Bevy&apos;s Fifth Birthday](https://bevy.org/news/bevys-fifth-birthday/)
* [2025-08-11, 10:31:21](https://lobste.rs/s/t2qits/gleam_s_interoperability_with_erlang) - [Gleam’s Interoperability with Erlang and Elixir](https://www.youtube.com/watch?v=63Z2oNW1Bf4)
* [2025-08-11, 10:02:08](https://news.ycombinator.com/item?id=44862542) - [GPT-OSS-120B runs on just 8GB VRAM &amp; 64GB+ system RAM](https://old.reddit.com/r/LocalLLaMA/comments/1mke7ef/120b_runs_awesome_on_just_8gb_vram/)
* [2025-08-11, 09:43:58](https://lobste.rs/s/i84ous/fornjot_early_stage_b_rep_cad_kernel) - [Fornjot: early-stage b-rep CAD kernel, written in Rust](https://www.fornjot.app/)
* [2025-08-11, 09:41:13](https://news.ycombinator.com/item?id=44862414) - [Faster substring search with SIMD in Zig](https://aarol.dev/posts/zig-simd-substr/)
* [2025-08-11, 09:38:47](https://lobste.rs/s/te7o9n/faster_substring_search_with_simd_zig) - [Faster substring search with SIMD in Zig](https://aarol.dev/posts/zig-simd-substr/)
* [2025-08-11, 09:28:00](https://lobste.rs/s/qviemf/bypass_postgresql_catalog_overhead_with) - [Bypass PostgreSQL catalog overhead with direct partition hash calculations](https://www.shayon.dev/post/2025/221/bypass-postgresql-catalog-overhead-with-direct-partition-hash-calculations/)
* [2025-08-11, 09:11:00](https://soylentnews.org/article.pl?sid=25/08/09/1827235&amp;from=rss) - [Americans, Be Warned: Lessons From Reddit’s Chaotic UK Age Verification Rollout](https://soylentnews.org/article.pl?sid=25/08/09/1827235&amp;from=rss)
* [2025-08-11, 08:59:46](https://news.ycombinator.com/item?id=44862112) - [Hand-picked selection of articles on AI fundamentals/concepts](https://aman.ai/primers/ai/)
* [2025-08-11, 08:27:22](https://lobste.rs/s/ea9juv/how_not_build_torment_nexus) - [How to not build the Torment Nexus](https://buttondown.com/monteiro/archive/how-to-not-build-the-torment-nexus/)
* [2025-08-11, 08:21:00](https://science.slashdot.org/story/25/08/11/068247/as-demand-for-plant-based-meat-weakens-in-the-us-beyond-disappoints-wall-street?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As Demand for Plant-Based Meat Weakens in the US, Beyond Disappoints Wall Street](https://science.slashdot.org/story/25/08/11/068247/as-demand-for-plant-based-meat-weakens-in-the-us-beyond-disappoints-wall-street?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 08:03:06](https://news.ycombinator.com/item?id=44861780) - [Self-Guaranteeing Promises](https://stephango.com/self-guarantee)
* [2025-08-11, 07:59:18](https://lobste.rs/s/jhbii4/fundamental_guide_understanding_dram) - [Fundamental guide to understanding DRAM Memory](https://www.chiplog.io/p/fundamental-guide-to-understanding)
* [2025-08-11, 06:38:28](https://lobste.rs/s/lvescn/unducking_typescript_primitive_aliases) - [Unducking Typescript primitive aliases](https://zerotrickpony.com/unducking/)
* [2025-08-11, 05:56:33](https://news.ycombinator.com/item?id=44861106) - [The Chrome VRP Panel has decided to award $250k for this report](https://issues.chromium.org/issues/412578726)
* [2025-08-11, 05:21:00](https://tech.slashdot.org/story/25/08/11/0518238/how-12-enola-gay-crew-members-remember-dropping-the-atomic-bomb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How 12 &apos;Enola Gay&apos; Crew Members Remember Dropping the Atomic Bomb](https://tech.slashdot.org/story/25/08/11/0518238/how-12-enola-gay-crew-members-remember-dropping-the-atomic-bomb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 05:14:06](https://news.ycombinator.com/item?id=44860908) - [Generic Containers in C: Safe Division Using Maybe](https://uecker.codeberg.page/2025-08-10.html)
* [2025-08-11, 05:14:00](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss) - [RIP: James Lovell Dead at 97](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss)
* [2025-08-11, 04:59:03](https://news.ycombinator.com/item?id=44860847) - [Going faster than memcpy](https://squadrick.dev/journal/going-faster-than-memcpy)
* [2025-08-11, 04:54:20](https://news.ycombinator.com/item?id=44860832) - [Graham: Synchronizing Clocks by Leveraging Local Clock Properties (2022) [pdf]](https://www.usenix.org/system/files/nsdi22-paper-najafi_1.pdf)
* [2025-08-11, 04:34:00](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss) - [WinRAR zero-day Exploited to Plant Malware on Archive Extraction](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss)
* [2025-08-11, 02:07:00](https://developers.slashdot.org/story/25/08/11/025214/how-python-is-fighting-open-sources-phantom-dependencies-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Python is Fighting Open Source&apos;s &apos;Phantom&apos; Dependencies Problem](https://developers.slashdot.org/story/25/08/11/025214/how-python-is-fighting-open-sources-phantom-dependencies-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 01:55:26](https://news.ycombinator.com/item?id=44860139) - [Vanishing from Hyundai’s data network](http://techno-fandom.org/~hobbit/cars/ev/offnet.html)
* [2025-08-11, 01:39:51](https://lobste.rs/s/zzu7bs/setting_up_ci_server_for_forgejo) - [Setting up a CI server for Forgejo](https://robey.lag.net/2025/08/10/forgejo-ci.html)
* [2025-08-11, 01:37:33](https://lobste.rs/s/picrzd/chacha12_blake3_secure_simple_fast) - [ChaCha12-BLAKE3: Secure, Simple and Fast authenticated and committing encryption](https://kerkour.com/chacha12-blake3)
* [2025-08-11, 01:16:33](https://lobste.rs/s/7s5obz/creating_longest_possible_ski_jump_games) - [Creating the longest possible Ski Jump in The Games: Winter Challenge](https://mrwint.github.io/winter/writeup/writeup2.html)
* [2025-08-11, 00:44:20](https://news.ycombinator.com/item?id=44859761) - [Show HN: A Sinclair ZX81 retro web assembler+simulator](https://news.ycombinator.com/item?id=44859761)
* [2025-08-11, 00:40:00](https://yro.slashdot.org/story/25/08/11/0037258/1m-stolen-in-industrial-scale-crypto-theft-using-ai-generated-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [$1M Stolen in &apos;Industrial-Scale Crypto Theft&apos; Using AI-Generated Code](https://yro.slashdot.org/story/25/08/11/0037258/1m-stolen-in-industrial-scale-crypto-theft-using-ai-generated-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 00:31:03](https://lobste.rs/s/xvahem/tcp_client_self_connect_2013) - [TCP Client Self-Connect (2013)](https://sgros.blogspot.com/2013/08/tcp-client-self-connect.html)
* [2025-08-10, 23:45:00](https://soylentnews.org/article.pl?sid=25/08/09/188231&amp;from=rss) - [Is Perrier as Pure as it Claims? The Bottled Water Scandal Gripping France](https://soylentnews.org/article.pl?sid=25/08/09/188231&amp;from=rss)
* [2025-08-10, 23:09:00](https://science.slashdot.org/story/25/08/10/237219/autonomous-ai-guided-black-hawk-helicopter-tested-to-fight-wildfires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Autonomous AI-Guided Black Hawk Helicopter Tested to Fight Wildfires](https://science.slashdot.org/story/25/08/10/237219/autonomous-ai-guided-black-hawk-helicopter-tested-to-fight-wildfires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 22:35:44](https://lobste.rs/s/q1hq70/compiling_lisp_closure_conversion) - [Compiling a Lisp: Closure conversion](https://bernsteinbear.com/blog/compiling-a-lisp-12/)
* [2025-08-10, 22:35:03](https://news.ycombinator.com/item?id=44858892) - [Compiling a Lisp: Lambda lifting](https://bernsteinbear.com/blog/compiling-a-lisp-12/)
* [2025-08-10, 21:25:00](https://science.slashdot.org/story/25/08/10/2124249/astrophysicist-proposes-paperclip-sized-spacecraft-could-travel-at-lightspeed-to-a-black-hole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astrophysicist Proposes Paperclip-Sized Spacecraft Could Travel at Lightspeed to a Black Hole](https://science.slashdot.org/story/25/08/10/2124249/astrophysicist-proposes-paperclip-sized-spacecraft-could-travel-at-lightspeed-to-a-black-hole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 20:48:46](https://news.ycombinator.com/item?id=44858154) - [1910: The year the modern world lost its mind](https://www.derekthompson.org/p/1910-the-year-the-modern-world-lost)
* [2025-08-10, 20:30:34](https://news.ycombinator.com/item?id=44858067) - [One Million Screenshots](https://onemillionscreenshots.com/?q=random)
* [2025-08-10, 20:25:00](https://slashdot.org/story/25/08/10/2023212/wsj-finds-dozens-of-delusional-claims-from-ai-chats-as-companies-scramble-for-a-fix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WSJ Finds &apos;Dozens&apos; of Delusional Claims from AI Chats as Companies Scramble for a Fix](https://slashdot.org/story/25/08/10/2023212/wsj-finds-dozens-of-delusional-claims-from-ai-chats-as-companies-scramble-for-a-fix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 18:57:00](https://soylentnews.org/article.pl?sid=25/08/09/091234&amp;from=rss) - [Man Swaps His Salt for Sodium Bromide—and Suffers Psychosis](https://soylentnews.org/article.pl?sid=25/08/09/091234&amp;from=rss)
* [2025-08-10, 18:48:00](https://hardware.slashdot.org/story/25/08/10/1845255/as-electric-bills-rise-evidence-mounts-that-us-data-centers-share-blame?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As Electric Bills Rise, Evidence Mounts That U.S. Data Centers Share Blame](https://hardware.slashdot.org/story/25/08/10/1845255/as-electric-bills-rise-evidence-mounts-that-us-data-centers-share-blame?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 17:53:09](https://news.ycombinator.com/item?id=44856935) - [Show HN: Bolt – A super-fast, statically-typed scripting language written in C](https://github.com/Beariish/bolt)
* [2025-08-10, 17:34:00](https://science.slashdot.org/story/25/08/10/1647247/meteorite-that-hit-home-is-older-than-earth-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meteorite That Hit Home Is Older Than Earth, Scientists Say](https://science.slashdot.org/story/25/08/10/1647247/meteorite-that-hit-home-is-older-than-earth-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 16:50:34](https://news.ycombinator.com/item?id=44856426) - [Fight Chat Control](https://fightchatcontrol.eu/)
* [2025-08-10, 16:34:00](https://tech.slashdot.org/story/25/08/10/0314235/kde-calls-microsofts-copilot-key-dumb-will-let-you-remap-it-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE Calls Microsoft&apos;s Copilot Key &apos;Dumb&apos;, Will Let You Remap It Soon](https://tech.slashdot.org/story/25/08/10/0314235/kde-calls-microsofts-copilot-key-dumb-will-let-you-remap-it-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 16:04:05](https://news.ycombinator.com/item?id=44856101) - [Diffusion language models are super data learners](https://jinjieni.notion.site/Diffusion-Language-Models-are-Super-Data-Learners-239d8f03a866800ab196e49928c019ac)
* [2025-08-10, 15:34:00](https://hardware.slashdot.org/story/25/08/09/040219/a-huge-2-billion-solar--storage-project-in-california-powers-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Huge $2 Billion &apos;Solar + Storage&apos; Project in California Powers Up](https://hardware.slashdot.org/story/25/08/09/040219/a-huge-2-billion-solar--storage-project-in-california-powers-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 15:31:20](https://lobste.rs/s/nxeqtq/zig_s_lovely_syntax) - [Zig&apos;s Lovely Syntax](https://matklad.github.io/2025/08/09/zigs-lovely-syntax.html)
* [2025-08-10, 15:06:07](https://news.ycombinator.com/item?id=44855690) - [GPT-OSS vs. Qwen3 and a detailed look how things evolved since GPT-2](https://magazine.sebastianraschka.com/p/from-gpt-2-to-gpt-oss-analyzing-the)
* [2025-08-10, 14:56:53](https://lobste.rs/s/ensoxg/resurrecting_google_s_search_appliance) - [Resurrecting Google&apos;s Search Appliance](https://www.youtube.com/watch?v=bjrmH7hVBOo)
* [2025-08-10, 14:34:00](https://developers.slashdot.org/story/25/08/10/0449256/rusts-annual-tech-report-trusted-publishing-for-packages-and-a-crust-interop-strategy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rust&apos;s Annual Tech Report: Trusted Publishing for Packages and a C++/Rust Interop Strategy](https://developers.slashdot.org/story/25/08/10/0449256/rusts-annual-tech-report-trusted-publishing-for-packages-and-a-crust-interop-strategy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 14:23:17](https://lobste.rs/s/8mdoo2/ohyaml_wtf_yaml_quiz) - [ohyaml.wtf | YAML Quiz](https://www.ohyaml.wtf/)
* [2025-08-10, 13:44:05](https://news.ycombinator.com/item?id=44855157) - [Show HN: Engineering.fyi – Search across tech engineering blogs in one place](https://engineering.fyi/)
* [2025-08-10, 13:32:13](https://news.ycombinator.com/item?id=44855079) - [Try and](https://ygdp.yale.edu/phenomena/try-and)
* [2025-08-10, 13:12:00](https://soylentnews.org/article.pl?sid=25/08/09/0853200&amp;from=rss) - [Oh No, Wavy Dave! Robot Crustacean Waves at Fiddler Crabs for Science, Has a Bad Time](https://soylentnews.org/article.pl?sid=25/08/09/0853200&amp;from=rss)
* [2025-08-10, 12:25:20](https://lobste.rs/s/ygqryc/why_do_we_even_need_simd_instructions) - [Why do we even need SIMD instructions ?](https://lemire.me/blog/2025/08/09/why-do-we-even-need-simd-instructions/)
* [2025-08-10, 11:41:34](https://news.ycombinator.com/item?id=44854525) - [Booting 5000 Erlangs on Ampere One 192-core](https://underjord.io/booting-5000-erlangs-on-ampere-one.html)
* [2025-08-10, 11:34:00](https://yro.slashdot.org/story/25/08/10/0227259/microsoft-sued-over-plans-to-discontinue-windows-10-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Sued Over Plans to Discontinue Windows 10 Support](https://yro.slashdot.org/story/25/08/10/0227259/microsoft-sued-over-plans-to-discontinue-windows-10-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 11:29:32](https://lobste.rs/s/424inu/creating_high_quality_electronics) - [Creating high quality electronics schematics](https://blog.poly.nomial.co.uk/2025-08-10-creating-high-quality-electronics-schematics.html)
* [2025-08-10, 08:43:48](https://lobste.rs/s/ray4zn/lobsters_client_for_emacs) - [Lobsters client for Emacs](https://github.com/tanrax/lobsters.el)
* [2025-08-10, 08:28:00](https://soylentnews.org/article.pl?sid=25/08/09/0850232&amp;from=rss) - [Japanese Scientists Develop Artificial Blood](https://soylentnews.org/article.pl?sid=25/08/09/0850232&amp;from=rss)
* [2025-08-10, 07:34:00](https://tech.slashdot.org/story/25/08/10/0626249/aol-finally-discontinues-its-dial-up-internet-access---after-34-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AOL Finally Discontinues Its Dial-Up Internet Access - After 34 Years](https://tech.slashdot.org/story/25/08/10/0626249/aol-finally-discontinues-its-dial-up-internet-access---after-34-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 06:49:49](https://lobste.rs/s/okvhei/janetdocs) - [JanetDocs](https://janetdocs.org/)
* [2025-08-10, 03:45:00](https://soylentnews.org/article.pl?sid=25/08/09/0847239&amp;from=rss) - [Denmark Zoo: Donate Unwanted Pets to Feed Predators and Imitate ‘Natural Food Chain’](https://soylentnews.org/article.pl?sid=25/08/09/0847239&amp;from=rss)
* [2025-08-10, 00:39:33](https://lobste.rs/s/kqv0a7/first_time_i_was_almost_fired_from_apple) - [The First Time I Was Almost Fired From Apple](https://www.engineersneedart.com/blog/almostfired/almostfired.html)
* [2025-08-09, 23:01:00](https://soylentnews.org/article.pl?sid=25/08/09/0123224&amp;from=rss) - [Personalized Pricing Has Spread Across Many Industries. Here&apos;s How Consumers Can Avoid It](https://soylentnews.org/article.pl?sid=25/08/09/0123224&amp;from=rss)
* [2025-08-09, 22:27:37](https://news.ycombinator.com/item?id=44850913) - [How I code with AI on a budget/free](https://wuu73.org/blog/aiguide1.html)
* [2025-08-09, 19:27:19](https://lobste.rs/s/a7ckk1/debian_13_trixie_released) - [Debian 13 \&quot;trixie\&quot; released](https://debian.org/News/2025/20250809)
* [2025-08-09, 18:15:00](https://soylentnews.org/article.pl?sid=25/08/09/0113237&amp;from=rss) - [YouTube to Gauge US Users’ Ages With AI After UK and Australia Add Age Checks](https://soylentnews.org/article.pl?sid=25/08/09/0113237&amp;from=rss)
* [2025-08-09, 13:48:00](https://soylentnews.org/article.pl?sid=25/08/08/047222&amp;from=rss) - [Hacker Summer Camp: What to Expect From BSides, Black Hat, and DEF CON](https://soylentnews.org/article.pl?sid=25/08/08/047222&amp;from=rss)
* [2025-08-09, 09:02:00](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss) - [An Ohio Couple Welcomes a Baby Boy From a Nearly 31-Year-Old Frozen Embryo](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss)
* [2025-08-09, 04:16:00](https://soylentnews.org/article.pl?sid=25/08/08/0113247&amp;from=rss) - [KubeSphere Kills Open Source Edition](https://soylentnews.org/article.pl?sid=25/08/08/0113247&amp;from=rss)
* [2025-08-08, 23:35:00](https://soylentnews.org/article.pl?sid=25/08/08/0056210&amp;from=rss) - [RFK Jr Cancels $500m in mRNA Vaccine Development in the US](https://soylentnews.org/article.pl?sid=25/08/08/0056210&amp;from=rss)
* [2025-08-08, 18:50:00](https://soylentnews.org/article.pl?sid=25/08/07/1131203&amp;from=rss) - [More Malware Uploaded to Arch Linux AUR](https://soylentnews.org/article.pl?sid=25/08/07/1131203&amp;from=rss)
* [2025-08-08, 14:05:00](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss) - [Ubuntu Replacing wget With wcurl](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss)
* [2025-08-08, 09:22:00](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss) - [Hiding Secret Codes in Light Can Protect Against Fake Videos](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss)
* [2025-08-08, 05:55:50](https://news.ycombinator.com/item?id=44833899) - [Fitzgerald&apos;s Follies](https://libertiesjournal.com/articles/fitzgeralds-follies/)
* [2025-08-08, 05:02:23](https://news.ycombinator.com/item?id=44833607) - [The enduring puzzle of static electricity](https://pubs.aip.org/physicstoday/article/78/8/54/3355922/The-enduring-puzzle-of-static-electricityEven)
* [2025-08-08, 04:35:00](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss) - [China&apos;s Solar Giants Quietly Shed a Third of Their Workforces Last Year](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss)
* [2025-08-07, 23:52:00](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss) - [OpenAI Announces Two “gpt-oss” Open AI Models, and You Can Download Them Today](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss)
* [2025-08-07, 19:07:00](https://soylentnews.org/article.pl?sid=25/08/06/1129217&amp;from=rss) - [U.S. Semiconductor Design Company Fined $140 Million Over China Dealings](https://soylentnews.org/article.pl?sid=25/08/06/1129217&amp;from=rss)
* [2025-08-07, 15:44:32](https://news.ycombinator.com/item?id=44826001) - [Dear String-to-Integer Parsers](https://owl.billpg.com/dear-string-to-integer-parsers/)
* [2025-08-07, 14:57:34](https://news.ycombinator.com/item?id=44825347) - [Creating the Longest Possible Ski Jump in “The Games: Winter Challenge”](https://mrwint.github.io/winter/writeup/writeup2.html)
* [2025-08-07, 14:22:00](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss) - [AWS Deleted a 10-Year Account and All Data Without Warning](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss)
* [2025-08-07, 10:23:12](https://news.ycombinator.com/item?id=44822730) - [Millau Viaduct](https://www.fosterandpartners.com/projects/millau-viaduct)
* [2025-08-07, 09:33:00](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss) - [Underwater Robot Draws in Millions of Viewers](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss)
* [2025-08-07, 08:04:04](https://news.ycombinator.com/item?id=44821848) - [Lists and Lists: Basics of Lisp through interactive fiction (1996)](https://eblong.com/zarf/zweb/lists/)
* [2025-08-07, 04:51:00](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss) - [Infrared Contact Lens Helps People See in the Dark, Even With Their Eyes Closed](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss)
* [2025-08-07, 00:07:00](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss) - [Plague: A Newly Discovered PAM-Based Backdoor for Linux](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss)
