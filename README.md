# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation Highlights

* [Global Sales of Combustion Engine Cars Have Peaked](https://tech.slashdot.org/story/25/02/25/1843248/global-sales-of-combustion-engine-cars-have-peaked?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major milestone in the automotive industry marks the decline in combustion engine adoption.

* [New Maps of the Chaotic Space-Time Inside Black Holes](https://www.quantamagazine.org/new-maps-of-the-bizarre-chaotic-space-time-inside-black-holes-20250224/) - Innovative research on black holes reshapes our understanding of space-time.

* [DeepSeek Accelerates AI Model Timeline as Market Reacts to Low-Cost Breakthrough](https://slashdot.org/story/25/02/25/1533243/deepseek-accelerates-ai-model-timeline-as-market-reacts-to-low-cost-breakthrough?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A breakthrough making AI models more accessible may disrupt the market.

* [Gleam, coming from Erlang](https://olano.dev/blog/gleam-coming-from-erlang) - An exploration of Gleam's potential as an emerging functional programming language with roots in Erlang.

* [Embedding Python in Elixir, it's Fine](https://dashbit.co/blog/running-python-in-elixir-its-fine) - Insights into integrating Python into the Elixir ecosystem effectively.

* [Turbocharging V8 with mutable heap numbers](https://v8.dev/blog/mutable-heap-number) - Advancements in optimizing JavaScript engines for higher performance.

* [Show HN: Txtl – Fast static website of text utilities](https://viveksjain.github.io/txtl/) - A minimalist and fast platform for text-based web utilities.

* [Call of Duty Maker Activision Admits To Using AI](https://slashdot.org/story/25/02/25/1614220/call-of-duty-maker-activision-admits-to-using-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Insights on AI's role in game development from a major industry player.

## Policy and Legal Developments

* [All 50 States Have Now Introduced Right to Repair Legislation](https://news.slashdot.org/story/25/02/25/036255/all-50-states-have-now-introduced-right-to-repair-legislation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major step forward in consumer rights as states aim to empower individuals to repair their devices.

* [Wyden Asks For Rules About Whether You Own Your Digital Purchases](https://games.slashdot.org/story/25/02/25/1728223/wyden-asks-for-rules-about-whether-you-own-your-digital-purchases?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Questions arise regarding ownership rights in the burgeoning digital content economy.

* [ISPs Brace For State-Level Price Regulation as New York's $15 Broadband Law Sets Precedent](https://tech.slashdot.org/story/25/02/25/188257/isps-brace-for-state-level-price-regulation-as-new-yorks-15-broadband-law-sets-precedent?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New York's bold move to regulate broadband prices sets an example for other regions.

## Software and Open Source

* [Show HN: GoatDB – A Lightweight, Offline-First, Realtime NoDB for Deno and React](https://github.com/goatplatform/goatdb) - A modern tool enabling developers to build offline-first database applications.

* [21st Century C++](https://soylentnews.org/article.pl?sid=25/02/24/1617229&from=rss) - A comprehensive look at recent evolution in C++ programming.

* [Rust edition 2024 annotated](https://bertptrs.nl/2025/02/23/rust-edition-2024-annotated.html) - Delving into the newest edition of the Rust programming language.

* [DeepSearcher: A Local open-source Deep Research](https://milvus.io/blog/introduce-deepsearcher-a-local-open-source-deep-research.md) - Empowering local research capabilities through open-source tools.

* [Why Common Lisp](https://kingcons.io/notes/common-lisp.html) - An insightful argument advocating for continued use of Common Lisp in modern programming environments.

## AI and Data Science

* [How to Backdoor Large Language Models](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss) - A deep dive into potential risks in training machine-learning systems.

* [1,000 Artists Release 'Silent' Album To Protest UK Copyright Sell-Out To AI](https://news.slashdot.org/story/25/02/25/0314226/1000-artists-release-silent-album-to-protest-uk-copyright-sell-out-to-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Artists creatively challenge AI's role in cultural innovation.

## Science and Space Exploration

* [Astronomers Uncover The Topsy-Turvy Atmosphere Of A Distant Planet](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss) - A groundbreaking study of exoplanet atmospheres and their unique characteristics.

* [The Odds of a City-Killer Asteroid Impact in 2032 Keep Rising](https://soylentnews.org/article.pl?sid=25/02/22/1627256&from=rss) - Updated estimates renew focus on planetary defense strategies.

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

* [2025-02-25, 18:44:00](https://tech.slashdot.org/story/25/02/25/1843248/global-sales-of-combustion-engine-cars-have-peaked?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Global Sales of Combustion Engine Cars Have Peaked](https://tech.slashdot.org/story/25/02/25/1843248/global-sales-of-combustion-engine-cars-have-peaked?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 18:39:10](https://news.ycombinator.com/item?id=43175628) - [I Went to SQL Injection Court](https://sockpuppet.org/blog/2025/02/09/fixing-illinois-foia/)
* [2025-02-25, 18:38:29](https://lobste.rs/s/iwlozm/bug_led_simkube_2_0) - [The bug that led to SimKube 2.0](https://blog.appliedcomputing.io/p/the-bug-that-led-to-simkube-20)
* [2025-02-25, 18:20:18](https://news.ycombinator.com/item?id=43175408) - [Low Overhead Allocation Sampling with VMProf in PyPy's GC](https://pypy.org/posts/2025/02/pypy-gc-sampling.html)
* [2025-02-25, 18:12:31](https://news.ycombinator.com/item?id=43175315) - [The XB-70 (2019)](http://codex99.com/photography/the-xb70.html)
* [2025-02-25, 18:08:00](https://tech.slashdot.org/story/25/02/25/188257/isps-brace-for-state-level-price-regulation-as-new-yorks-15-broadband-law-sets-precedent?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [ISPs Brace For State-Level Price Regulation as New York's $15 Broadband Law Sets Precedent](https://tech.slashdot.org/story/25/02/25/188257/isps-brace-for-state-level-price-regulation-as-new-yorks-15-broadband-law-sets-precedent?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 18:00:47](https://news.ycombinator.com/item?id=43175182) - [Show HN: Txtl – Fast static website of text utilities](https://viveksjain.github.io/txtl/)
* [2025-02-25, 17:48:02](https://news.ycombinator.com/item?id=43175023) - ['Hey Number 17 '](https://www.404media.co/email/b7eb2339-2ea1-4a37-96cc-a360494c214c/)
* [2025-02-25, 17:37:07](https://news.ycombinator.com/item?id=43174910) - [Hard problems that reduce to document ranking](https://noperator.dev/posts/document-ranking-for-complex-problems/)
* [2025-02-25, 17:28:00](https://games.slashdot.org/story/25/02/25/1728223/wyden-asks-for-rules-about-whether-you-own-your-digital-purchases?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Wyden Asks For Rules About Whether You Own Your Digital Purchases](https://games.slashdot.org/story/25/02/25/1728223/wyden-asks-for-rules-about-whether-you-own-your-digital-purchases?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 17:06:00](https://soylentnews.org/article.pl?sid=25/02/24/1617229&from=rss) - [21st Century C++](https://soylentnews.org/article.pl?sid=25/02/24/1617229&from=rss)
* [2025-02-25, 17:05:15](https://news.ycombinator.com/item?id=43174506) - [Building and operating a pretty big storage system called S3 (2023)](https://www.allthingsdistributed.com/2023/07/building-and-operating-a-pretty-big-storage-system.html)
* [2025-02-25, 16:56:25](https://news.ycombinator.com/item?id=43174377) - [Show HN: GoatDB – A Lightweight, Offline-First, Realtime NoDB for Deno and React](https://github.com/goatplatform/goatdb)
* [2025-02-25, 16:46:07](https://news.ycombinator.com/item?id=43174221) - [Show HN: My new wiki for Silicon Graphics stuff](https://www.tech-pubs.net/wiki/Main_Page)
* [2025-02-25, 16:45:00](https://tech.slashdot.org/story/25/02/25/1640216/google-makes-gemini-code-assist-free?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Makes Gemini Code Assist Free](https://tech.slashdot.org/story/25/02/25/1640216/google-makes-gemini-code-assist-free?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 16:15:39](https://news.ycombinator.com/item?id=43173773) - [New Maps of the Chaotic Space-Time Inside Black Holes](https://www.quantamagazine.org/new-maps-of-the-bizarre-chaotic-space-time-inside-black-holes-20250224/)
* [2025-02-25, 16:14:00](https://slashdot.org/story/25/02/25/1614220/call-of-duty-maker-activision-admits-to-using-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Call of Duty Maker Activision Admits To Using AI](https://slashdot.org/story/25/02/25/1614220/call-of-duty-maker-activision-admits-to-using-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 15:51:54](https://news.ycombinator.com/item?id=43173462) - [Hyperspace](https://hypercritical.co/2025/02/25/hyperspace)
* [2025-02-25, 15:45:17](https://news.ycombinator.com/item?id=43173378) - [Launch HN: Browser Use (YC W25) – open-source web agents](https://github.com/browser-use/browser-use)
* [2025-02-25, 15:33:00](https://slashdot.org/story/25/02/25/1533243/deepseek-accelerates-ai-model-timeline-as-market-reacts-to-low-cost-breakthrough?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek Accelerates AI Model Timeline as Market Reacts To Low-Cost Breakthrough](https://slashdot.org/story/25/02/25/1533243/deepseek-accelerates-ai-model-timeline-as-market-reacts-to-low-cost-breakthrough?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 15:17:29](https://lobste.rs/s/o1golw/turbocharging_v8_with_mutable_heap) - [Turbocharging V8 with mutable heap numbers](https://v8.dev/blog/mutable-heap-number)
* [2025-02-25, 15:15:18](https://lobste.rs/s/swtkwg/why_how_i_version_my_blog) - [Why and How I Version My Blog](https://rishikeshs.com/blog-version/)
* [2025-02-25, 14:45:00](https://apple.slashdot.org/story/25/02/25/1445257/apple-executive-voiced-concerns-over-app-store-external-payment-fees?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Executive Voiced Concerns Over App Store External Payment Fees](https://apple.slashdot.org/story/25/02/25/1445257/apple-executive-voiced-concerns-over-app-store-external-payment-fees?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 14:33:42](https://news.ycombinator.com/item?id=43172338) - [DeepSearcher: A Local open-source Deep Research](https://milvus.io/blog/introduce-deepsearcher-a-local-open-source-deep-research.md)
* [2025-02-25, 14:29:58](https://lobste.rs/s/vpfqm2/gleam_coming_from_erlang) - [Gleam, coming from Erlang](https://olano.dev/blog/gleam-coming-from-erlang)
* [2025-02-25, 14:00:00](https://yro.slashdot.org/story/25/02/25/1351212/chegg-to-initiate-business-review-amid-ai-shift-in-education-tech?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Chegg To Initiate Business Review Amid AI-Shift in Education Tech](https://yro.slashdot.org/story/25/02/25/1351212/chegg-to-initiate-business-review-amid-ai-shift-in-education-tech?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 13:56:49](https://lobste.rs/s/8nx9v3/embedding_python_elixir_it_s_fine) - [Embedding Python in Elixir, it's Fine](https://dashbit.co/blog/running-python-in-elixir-its-fine)
* [2025-02-25, 13:55:35](https://lobste.rs/s/q2kme9/zone_maps_queries_go_brrr) - [Zone maps, or “queries go brrr”](https://blog.spiraldb.com/zone-maps-or-queries-go-brrr/)
* [2025-02-25, 13:32:26](https://lobste.rs/s/7u7hxw/rust_edition_2024_annotated) - [Rust edition 2024 annotated](https://bertptrs.nl/2025/02/23/rust-edition-2024-annotated.html)
* [2025-02-25, 13:19:12](https://lobste.rs/s/f4oemt/reviving_old_kindle_paperwhite_7th_gen) - [Reviving an Old Kindle Paperwhite 7th Gen](https://terminalbytes.com/reviving-kindle-paperwhite-7th-gen/)
* [2025-02-25, 13:06:22](https://news.ycombinator.com/item?id=43171334) - [Show HN: Prioritize Anything with Stacks](https://stack-ranker.com)
* [2025-02-25, 12:53:15](https://news.ycombinator.com/item?id=43171239) - [Embedding Python in Elixir, It's Fine](https://dashbit.co/blog/running-python-in-elixir-its-fine)
* [2025-02-25, 12:27:11](https://news.ycombinator.com/item?id=43171002) - [A Defense of Weird Research](https://asteriskmag.com/issues/09/a-defense-of-weird-research)
* [2025-02-25, 12:23:00](https://soylentnews.org/politics/article.pl?sid=25/02/24/1615209&from=rss) - [Trump Threatens Tariffs On Any Nation That Taxes Big Tech](https://soylentnews.org/politics/article.pl?sid=25/02/24/1615209&from=rss)
* [2025-02-25, 12:04:12](https://lobste.rs/s/2ekqcs/why_common_lisp) - [Why Common Lisp](https://kingcons.io/notes/common-lisp.html)
* [2025-02-25, 11:23:16](https://lobste.rs/s/xslm1t/zlib_rs_is_faster_than_c) - [zlib-rs is faster than C](https://trifectatech.org/blog/zlib-rs-is-faster-than-c/)
* [2025-02-25, 11:22:06](https://news.ycombinator.com/item?id=43170545) - [Chicory: A JVM native WebAssembly runtime](https://chicory.dev/)
* [2025-02-25, 11:15:49](https://lobste.rs/s/hyhkxi/mixing_up_public_private_keys_openid) - [Mixing up Public and Private Keys in OpenID Connect deployments](https://blog.hboeck.de/archives/909-Mixing-up-Public-and-Private-Keys-in-OpenID-Connect-deployments.html)
* [2025-02-25, 10:34:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss) - [Adoption of Site Documentation - THIS IS THE VOTE - RESTORED](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss)
* [2025-02-25, 10:04:29](https://lobste.rs/s/noeevm/closer_train_station_worse_kebab) - [\"The closer to the train station, the worse the kebab\"](https://www.jmspae.se/write-ups/kebabs-train-stations/)
* [2025-02-25, 10:00:00](https://news.slashdot.org/story/25/02/25/0314226/1000-artists-release-silent-album-to-protest-uk-copyright-sell-out-to-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [1,000 Artists Release 'Silent' Album To Protest UK Copyright Sell-Out To AI](https://news.slashdot.org/story/25/02/25/0314226/1000-artists-release-silent-album-to-protest-uk-copyright-sell-out-to-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 09:57:02](https://lobste.rs/s/wrpt6v/what_would_happen_if_we_didn_t_use_tcp_udp) - [What would happen if we didn't use TCP or UDP?](https://github.com/Hawzen/hdp)
* [2025-02-25, 09:15:14](https://news.ycombinator.com/item?id=43169773) - [A peek into a possible future of Python in the browser](https://lukasz.langa.pl/f37aa97a-9ea3-4aeb-b6a0-9daeea5a7505/)
* [2025-02-25, 09:10:11](https://lobste.rs/s/ige5d6/tcl_tk_application_binaries_through_go) - [Tcl/Tk application binaries through Go](https://wiki.tcl-lang.org/page/Tcl%2FTk+application+binaries+through+Go)
* [2025-02-25, 07:37:00](https://soylentnews.org/article.pl?sid=25/02/24/0728229&from=rss) - [Building a Chipmaking Fab in the US Costs Twice as Much, Takes Twice as Long as in Taiwan](https://soylentnews.org/article.pl?sid=25/02/24/0728229&from=rss)
* [2025-02-25, 07:00:00](https://news.slashdot.org/story/25/02/25/036255/all-50-states-have-now-introduced-right-to-repair-legislation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [All 50 States Have Now Introduced Right to Repair Legislation](https://news.slashdot.org/story/25/02/25/036255/all-50-states-have-now-introduced-right-to-repair-legislation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 05:33:27](https://news.ycombinator.com/item?id=43168534) - [Dogs may have domesticated themselves because they liked snacks, model suggests](https://www.livescience.com/animals/dogs/dogs-may-have-domesticated-themselves-because-they-really-liked-snacks-model-suggests)
* [2025-02-25, 05:09:40](https://lobste.rs/s/r8lrfk/other_kinds_talks) - [Other kinds of talks](https://www.scattered-thoughts.net/writing/other-kinds-of-talks/)
* [2025-02-25, 04:47:19](https://lobste.rs/s/e8cnqe/smart_pointers_can_t_solve_use_after_free) - [Smart Pointers Can't Solve Use-After-Free](http://jacko.io/smart_pointers.html)
* [2025-02-25, 03:36:41](https://news.ycombinator.com/item?id=43167865) - [History of CAD](https://www.shapr3d.com/blog/history-of-cad)
* [2025-02-25, 03:30:00](https://it.slashdot.org/story/25/02/24/2350211/vpn-providers-consider-exiting-france-over-dangerous-blocking-demands?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [VPN Providers Consider Exiting France Over 'Dangerous' Blocking Demands](https://it.slashdot.org/story/25/02/24/2350211/vpn-providers-consider-exiting-france-over-dangerous-blocking-demands?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 02:51:00](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss) - [Astronomers Uncover The Topsy-Turvy Atmosphere Of A Distant Planet](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss)
* [2025-02-25, 02:27:29](https://news.ycombinator.com/item?id=43167373) - [DeepSeek open source DeepEP – library for MoE training and Inference](https://github.com/deepseek-ai/DeepEP)
* [2025-02-25, 01:40:14](https://news.ycombinator.com/item?id=43167087) - [DigiCert: Threat of legal action to stifle Bugzilla discourse](https://bugzilla.mozilla.org/show_bug.cgi?id=1950144)
* [2025-02-25, 01:40:00](https://hardware.slashdot.org/story/25/02/24/2342219/microsoft-trims-more-cpus-from-windows-11-compatibility-list?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Trims More CPUs From Windows 11 Compatibility List](https://hardware.slashdot.org/story/25/02/24/2342219/microsoft-trims-more-cpus-from-windows-11-compatibility-list?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 01:21:49](https://lobste.rs/s/mmn0eh/canadian_vps_review) - [Canadian VPS Review](https://lukecyca.com/2025/canadian-vps-review.html)
* [2025-02-25, 01:09:43](https://lobste.rs/s/hfrpwt/new_zealand_company_s_impossible_hack) - [New Zealand Company’s ‘Impossible-to-Hack’ Security Turns Out to Be No Security at All](https://jltee.substack.com/p/new-zealand-companys-impossible-to-hack-security)
* [2025-02-25, 01:00:00](https://yro.slashdot.org/story/25/02/24/2327231/googles-ai-previews-erode-the-internet-edtech-company-says-in-lawsuit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google's AI Previews Erode the Internet, Edtech Company Says In Lawsuit](https://yro.slashdot.org/story/25/02/24/2327231/googles-ai-previews-erode-the-internet-edtech-company-says-in-lawsuit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-25, 00:20:00](https://science.slashdot.org/story/25/02/24/2319218/theranos-founder-elizabeth-holmes-fraud-convictions-upheld?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Theranos Founder Elizabeth Holmes' Fraud Convictions Upheld](https://science.slashdot.org/story/25/02/24/2319218/theranos-founder-elizabeth-holmes-fraud-convictions-upheld?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 23:52:33](https://news.ycombinator.com/item?id=43166362) - [Clean Code vs. A Philosophy Of Software Design](https://github.com/johnousterhout/aposd-vs-clean-code/blob/main/README.md)
* [2025-02-24, 23:40:00](https://tech.slashdot.org/story/25/02/24/2149206/dutch-software-firm-bird-to-leave-europe-due-to-onerous-regulations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Dutch Software Firm Bird To Leave Europe Due To Onerous Regulations](https://tech.slashdot.org/story/25/02/24/2149206/dutch-software-firm-bird-to-leave-europe-due-to-onerous-regulations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 22:04:00](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss) - [How to Backdoor Large Language Models](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss)
* [2025-02-24, 21:25:15](https://news.ycombinator.com/item?id=43165112) - [“The closer to the train station, the worse the kebab” – a “study”](https://www.jmspae.se/write-ups/kebabs-train-stations/)
* [2025-02-24, 20:24:31](https://lobste.rs/s/kgzd0w/xcode_constantly_phones_home) - [Xcode constantly phones home](https://lapcatsoftware.com/articles/2025/2/5.html)
* [2025-02-24, 20:21:56](https://lobste.rs/s/elf44b/breaking_into_dozens_apartment) - [Breaking into dozens of apartment buildings in five minutes on my phone](https://www.ericdaigle.ca/posts/breaking-into-dozens-of-apartments-in-five-minutes/)
* [2025-02-24, 19:53:11](https://lobste.rs/s/gbx4tl/how_core_git_developers_configure_git) - [How Core Git Developers Configure Git](https://blog.gitbutler.com/how-git-core-devs-configure-git/)
* [2025-02-24, 18:57:26](https://lobste.rs/s/ohdqzz/least_secure_totp_code_possible) - [The least secure TOTP code possible](https://shkspr.mobi/blog/2025/02/the-least-secure-totp-code-possible/)
* [2025-02-24, 18:28:59](https://news.ycombinator.com/item?id=43163011) - [Claude 3.7 Sonnet and Claude Code](https://www.anthropic.com/news/claude-3-7-sonnet)
* [2025-02-24, 17:20:00](https://soylentnews.org/article.pl?sid=25/02/24/0713223&from=rss) - [Bird Flu Endemic in America Cows. Found in Rats](https://soylentnews.org/article.pl?sid=25/02/24/0713223&from=rss)
* [2025-02-24, 17:15:25](https://lobste.rs/s/jzf4w9/transparency_hardware_software) - [Transparency in Hardware/Software Interfaces](https://rfd.shared.oxide.computer/rfd/0552)
* [2025-02-24, 16:42:31](https://lobste.rs/s/xcqfp7/philosophy_software_design_vs_clean_code) - [\"A Philosophy of Software Design\" vs \"Clean Code\"](https://github.com/johnousterhout/aposd-vs-clean-code/blob/main/README.md)
* [2025-02-24, 14:04:58](https://lobste.rs/s/pjtizh/dropshot_expose_rest_apis_from_rust) - [dropshot: expose REST APIs from a Rust program](https://github.com/oxidecomputer/dropshot)
* [2025-02-24, 12:32:00](https://soylentnews.org/article.pl?sid=25/02/24/078229&from=rss) - [AMD Could Block the Sale of Intel Due to a Cross-Licensing Agreement](https://soylentnews.org/article.pl?sid=25/02/24/078229&from=rss)
* [2025-02-24, 11:21:22](https://news.ycombinator.com/item?id=43158262) - [Freelancing: How I found clients, part 1](https://crocspace.substack.com/p/freelancing-how-i-got-clients-part)
* [2025-02-24, 07:47:00](https://soylentnews.org/article.pl?sid=25/02/24/074241&from=rss) - [Apple Pulls End-to-End Encryption From UK Rather Than Provide Government a Backdoor](https://soylentnews.org/article.pl?sid=25/02/24/074241&from=rss)
* [2025-02-24, 03:03:00](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss) - [After 20 Years, Math Couple Solves Major Group Theory Problem](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss)
* [2025-02-23, 22:14:00](https://soylentnews.org/article.pl?sid=25/02/22/1716217&from=rss) - [NVidia to Consume 77% of Wafers Used for AI Processors in 2025](https://soylentnews.org/article.pl?sid=25/02/22/1716217&from=rss)
* [2025-02-23, 17:37:00](https://soylentnews.org/politics/article.pl?sid=25/02/22/1638251&from=rss) - [Trump to Introduce 25% and 'Higher' Tariff on Imported Semiconductors but the Timing is Unclear](https://soylentnews.org/politics/article.pl?sid=25/02/22/1638251&from=rss)
* [2025-02-23, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/22/1636233&from=rss) - [Electric Truck-Maker Nikola Falls Into Bankruptcy Joining a Procession of Failed EV Startups](https://soylentnews.org/article.pl?sid=25/02/22/1636233&from=rss)
* [2025-02-23, 08:05:00](https://soylentnews.org/article.pl?sid=25/02/22/1634220&from=rss) - [Humane's AI Pin is No More and Owners are Left With Nothing](https://soylentnews.org/article.pl?sid=25/02/22/1634220&from=rss)
* [2025-02-23, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/22/1627256&from=rss) - [The Odds of a City-Killer Asteroid Impact in 2032 Keep Rising](https://soylentnews.org/article.pl?sid=25/02/22/1627256&from=rss)
* [2025-02-22, 22:40:00](https://soylentnews.org/article.pl?sid=25/02/22/1622206&from=rss) - [HP  Deliberately Adds 15 Minutes Wait Time for Support Calls](https://soylentnews.org/article.pl?sid=25/02/22/1622206&from=rss)
* [2025-02-22, 17:55:00](https://soylentnews.org/article.pl?sid=25/02/21/056231&from=rss) - [Webcomic Author AndyOh of TMI-Comic Has Died](https://soylentnews.org/article.pl?sid=25/02/21/056231&from=rss)
* [2025-02-22, 17:39:03](https://news.ycombinator.com/item?id=43141139) - [Blunder Free Chess – visualize which squares are attacked](https://taonexus.com/blunderfreechess.html)
* [2025-02-22, 13:14:00](https://soylentnews.org/article.pl?sid=25/02/21/055211&from=rss) - [Google's New AI Generates Hypotheses for Researchers](https://soylentnews.org/article.pl?sid=25/02/21/055211&from=rss)
* [2025-02-22, 08:31:00](https://soylentnews.org/article.pl?sid=25/02/21/0455231&from=rss) - [Gnome 48 Goes Into Beta, Should Launch in a Month](https://soylentnews.org/article.pl?sid=25/02/21/0455231&from=rss)
* [2025-02-22, 08:27:56](https://news.ycombinator.com/item?id=43137248) - [Show HN: While the world builds AI Agents, I'm just building calculators](https://www.calcverse.live)
* [2025-02-22, 08:11:45](https://news.ycombinator.com/item?id=43137171) - [Ask HN: A retrofitted C dialect?](https://news.ycombinator.com/item?id=43137171)
* [2025-02-22, 07:33:48](https://news.ycombinator.com/item?id=43136951) - [SETI's Hard Steps (and How to Resolve Them)](https://www.centauri-dreams.org/2025/02/21/setis-hard-steps-and-how-to-resolve-them/)
* [2025-02-22, 03:48:00](https://soylentnews.org/article.pl?sid=25/02/21/0429228&from=rss) - [DRAM and NAND Prices Are Expected to Rise in the Second Half of 2025](https://soylentnews.org/article.pl?sid=25/02/21/0429228&from=rss)
* [2025-02-21, 23:01:00](https://soylentnews.org/article.pl?sid=25/02/20/181218&from=rss) - [12VHPWR Adapters Sporting Heatsinks and Thermal Pads Show How Problematic the Connector Is](https://soylentnews.org/article.pl?sid=25/02/20/181218&from=rss)
* [2025-02-21, 18:17:00](https://soylentnews.org/article.pl?sid=25/02/20/169239&from=rss) - [Intel's Head of Datacenter and AI Unit Leaves to Lead Nokia](https://soylentnews.org/article.pl?sid=25/02/20/169239&from=rss)
* [2025-02-21, 14:20:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1414222&from=rss) - [Soylent Update - Adoption of Proposed Documents - How the Vote Will be Managed](https://soylentnews.org/meta/article.pl?sid=25/02/21/1414222&from=rss)
* [2025-02-21, 13:32:00](https://soylentnews.org/article.pl?sid=25/02/20/165216&from=rss) - [What Would Happen If a (Small) Black Hole Passed Through Your Body ?](https://soylentnews.org/article.pl?sid=25/02/20/165216&from=rss)
* [2025-02-21, 07:44:00](https://soylentnews.org/article.pl?sid=25/02/20/137208&from=rss) - [A Single Protein May Have Helped Shape the Emergence of Spoken Language](https://soylentnews.org/article.pl?sid=25/02/20/137208&from=rss)
* [2025-02-21, 02:59:00](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss) - [Burning in Woman's Legs Turned Out to be Slug Parasites Migrating to Her Brain](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss)
