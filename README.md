# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI Innovations

* [Functional hash tables explained](https://spritely.institute/news/functional-hash-tables-explained.html) highlights the design of functional data structures in hash tables, focusing on their immutability and efficient performance.

* [Building a fast website with the MASH stack in Rust](https://emschwartz.me/building-a-fast-website-with-the-mash-stack-in-rust/) introduces the MASH stack to improve speed and development practices in Rust-based web applications.

* [Introducing Roto: A Compiled Scripting Language for Rust](https://blog.nlnetlabs.nl/introducing-roto-a-compiled-scripting-language-for-rust/) outlines the features of Roto, aiming to enhance Rust programming with a lightweight scripting language.

* [Google Is Baking Gemini AI Into Chrome](https://tech.slashdot.org/story/25/05/20/2253221/google-is-baking-gemini-ai-into-chrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) explores Google’s move to integrate its Gemini AI system into its popular browser, potentially reshaping user experience.

## Data Privacy and Security

* [19-Year-Old Accused of Largest Child Data Breach in US Agrees To Plead Guilty To Federal Charges](https://yro.slashdot.org/story/25/05/21/026213/19-year-old-accused-of-largest-child-data-breach-in-us-agrees-to-plead-guilty-to-federal-charges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) covers a significant data breach involving sensitive child data and the legal repercussions.

* [AWS Claims That Britain Needs More Nuclear Power for AI Datacenters](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss) investigates AWS's stance on energy demands driven by AI datacenters.

* [KrebsOnSecurity Hit With Near-Record 6.3 Tbps DDoS](https://tech.slashdot.org/story/25/05/20/2215258/krebsonsecurity-hit-with-near-record-63-tbps-ddos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) showcases one of the most severe DDoS attacks ever recorded.

## Innovations in Space and Science

* [Starfish Space Announces Plans For First Commercial Satellite Docking](https://science.slashdot.org/story/25/05/20/2246239/starfish-space-announces-plans-for-first-commercial-satellite-docking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) unveils a start-up’s upcoming milestone aimed at advancing commercial satellite servicing capabilities.

* [Turbocharged Mitochondria Power Birds&apos; Epic Migratory Journeys](https://www.quantamagazine.org/turbocharged-mitochondria-power-birds-epic-migratory-journeys-20250519/) explains the energy mechanisms enabling birds' long-distance migrations.

* [Jupiter Was Formerly Twice Its Current Size and Had a Much Stronger Magnetic Field](https://science.slashdot.org/story/25/05/20/2241246/jupiter-was-formerly-twice-its-current-size-and-had-a-much-stronger-magnetic-field?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) shares new astronomical findings about Jupiter's evolution and past characteristics.

## Programming and Open Source

* [Vim vs. Kakoune puzzles](https://strongly-typed-thoughts.net/blog/vim-kakoune-puzzles-2025) compares the programming concepts and efficiency trade-offs between Vim and Kakoune.

* [Artiflakery, an easy way to distribute static Nix flake artifacts](https://luj.fr/blog/artiflakery-webserver-flake-artifacts.html) introduces a tool for simplified distribution of Nix flake-based builds.

* [We did the math on AI’s energy footprint. Here’s the story you haven’t heard](https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/) investigates the frequently overlooked environmental costs tied to AI operations.

## Miscellaneous

* [A Secret Trove of Rare Guitars Heads to the Met](https://www.newyorker.com/magazine/2025/05/26/a-secret-trove-of-rare-guitars-heads-to-the-met) reports on a guitar collection being displayed at the Metropolitan Museum of Art.

* [Annual Tech Waste Footprint Per Person is 11.2 Kg](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss) highlights the rising concerns over technology-related e-waste.

* [Goethe&apos;s Faustian Life](https://www.commonwealmagazine.org/goethe-mitchell-wilson-faust-johann-biography) offers an in-depth biography of Johann Wolfgang von Goethe, centering on his renowned work, Faust.

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

* [2025-05-21, 15:33:09](https://lobste.rs/s/eyceuf/vim_vs_kakoune_puzzles) - [Vim vs. Kakoune puzzles](https://strongly-typed-thoughts.net/blog/vim-kakoune-puzzles-2025)
* [2025-05-21, 15:22:00](https://tech.slashdot.org/story/25/05/21/152229/googles-brin-i-made-a-lot-of-mistakes-with-google-glass?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Brin: &apos;I Made a Lot of Mistakes With Google Glass&apos;](https://tech.slashdot.org/story/25/05/21/152229/googles-brin-i-made-a-lot-of-mistakes-with-google-glass?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 15:17:38](https://news.ycombinator.com/item?id=44052424) - [New tools and features in the Responses API](https://openai.com/index/new-tools-and-features-in-the-responses-api)
* [2025-05-21, 14:51:38](https://news.ycombinator.com/item?id=44052106) - [Lune: Standalone Luau Runtime](https://github.com/lune-org/lune)
* [2025-05-21, 14:45:38](https://news.ycombinator.com/item?id=44052041) - [Discord Unveiled: A Comprehensive Dataset of Public Communication (2015-2024)](https://arxiv.org/abs/2502.00627)
* [2025-05-21, 14:45:00](https://slashdot.org/story/25/05/21/1439218/amazon-gives-refunds-for-years-old-returns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Gives Refunds for Years-Old Returns](https://slashdot.org/story/25/05/21/1439218/amazon-gives-refunds-for-years-old-returns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 14:39:37](https://news.ycombinator.com/item?id=44051958) - [Animated Factorization](http://www.datapointed.net/visualizations/math/factorization/animated-diagrams/)
* [2025-05-21, 14:23:05](https://news.ycombinator.com/item?id=44051755) - [Ask HN: How do you promote your personal project in limited bugget?](https://news.ycombinator.com/item?id=44051755)
* [2025-05-21, 14:11:33](https://news.ycombinator.com/item?id=44051652) - [&apos;Turbocharged&apos; Mitochondria Power Birds&apos; Epic Migratory Journeys](https://www.quantamagazine.org/turbocharged-mitochondria-power-birds-epic-migratory-journeys-20250519/)
* [2025-05-21, 14:10:03](https://lobste.rs/s/84kjsg/functional_hash_tables_explained) - [Functional hash tables explained](https://spritely.institute/news/functional-hash-tables-explained.html)
* [2025-05-21, 14:10:00](https://games.slashdot.org/story/25/05/21/1410249/microsoft-blames-apple-for-xbox-mobile-store-delay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Blames Apple for Xbox Mobile Store Delay](https://games.slashdot.org/story/25/05/21/1410249/microsoft-blames-apple-for-xbox-mobile-store-delay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 13:56:49](https://lobste.rs/s/grnyod/erlang_otp_28_highlights) - [Erlang/OTP 28 Highlights](https://www.erlang.org/blog/highlights-otp-28/)
* [2025-05-21, 13:42:00](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss) - [Annual Tech Waste Footprint Per Person is 11.2 Kg](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss)
* [2025-05-21, 13:26:12](https://lobste.rs/s/rff4fc/artiflakery_easy_way_distribute_static) - [Artiflakery, an easy way to distribute static Nix flake artifacts](https://luj.fr/blog/artiflakery-webserver-flake-artifacts.html)
* [2025-05-21, 13:12:30](https://news.ycombinator.com/item?id=44051090) - [Building an agentic image generator that improves itself](https://simulate.trybezel.com/research/image_agent)
* [2025-05-21, 13:00:00](https://tech.slashdot.org/story/25/05/20/2253221/google-is-baking-gemini-ai-into-chrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Is Baking Gemini AI Into Chrome](https://tech.slashdot.org/story/25/05/20/2253221/google-is-baking-gemini-ai-into-chrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 12:01:11](https://news.ycombinator.com/item?id=44050521) - [Overlap (YC S24) Is Hiring](https://www.ycombinator.com/companies/overlap/jobs/Z8IbFjD-product-engineer)
* [2025-05-21, 11:54:07](https://lobste.rs/s/jmg6f5/my_new_hobby_watching_ai_slowly_drive) - [My new hobby: watching AI slowly drive Microsoft employees insane](https://old.reddit.com/r/ExperiencedDevs/comments/1krttqo/my_new_hobby_watching_ai_slowly_drive_microsoft/)
* [2025-05-21, 11:50:03](https://lobste.rs/s/7u3hhv/introducing_roto_compiled_scripting) - [Introducing Roto: A Compiled Scripting Language for Rust](https://blog.nlnetlabs.nl/introducing-roto-a-compiled-scripting-language-for-rust/)
* [2025-05-21, 11:38:07](https://lobste.rs/s/2lbj9k/we_did_math_on_ai_s_energy_footprint_here_s) - [We did the math on AI’s energy footprint. Here’s the story you haven’t heard](https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/)
* [2025-05-21, 11:10:29](https://news.ycombinator.com/item?id=44050222) - [Roto: A Compiled Scripting Language for Rust](https://blog.nlnetlabs.nl/introducing-roto-a-compiled-scripting-language-for-rust/)
* [2025-05-21, 10:59:56](https://lobste.rs/s/c6scqf/erlang_otp_28_0_release) - [Erlang/OTP 28.0 Release](https://www.erlang.org/news/180)
* [2025-05-21, 10:14:45](https://lobste.rs/s/96ttp9/reading_code_is_still_most_effective) - [Reading code is still the most effective method to debug multi-thread bug](https://nanxiao.me/en/reading-code-is-still-the-most-effective-method-to-debug-multi-thread-bug/)
* [2025-05-21, 10:00:00](https://science.slashdot.org/story/25/05/20/2246239/starfish-space-announces-plans-for-first-commercial-satellite-docking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Starfish Space Announces Plans For First Commercial Satellite Docking](https://science.slashdot.org/story/25/05/20/2246239/starfish-space-announces-plans-for-first-commercial-satellite-docking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 08:58:00](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss) - [Apple is Developing Tech So Users Can Control Devices With Only Their Thoughts](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss)
* [2025-05-21, 07:30:05](https://lobste.rs/s/dtvu8f/building_fast_website_with_mash_stack) - [Building a fast website with the MASH stack in Rust](https://emschwartz.me/building-a-fast-website-with-the-mash-stack-in-rust/)
* [2025-05-21, 07:00:00](https://science.slashdot.org/story/25/05/20/2241246/jupiter-was-formerly-twice-its-current-size-and-had-a-much-stronger-magnetic-field?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jupiter Was Formerly Twice Its Current Size and Had a Much Stronger Magnetic Field](https://science.slashdot.org/story/25/05/20/2241246/jupiter-was-formerly-twice-its-current-size-and-had-a-much-stronger-magnetic-field?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 06:31:53](https://lobste.rs/s/hcrgp9/writing_into_uninitialized_buffers_rust) - [Writing into uninitialized buffers in Rust](https://blog.sunfishcode.online/writingintouninitializedbuffersinrust/)
* [2025-05-21, 06:18:55](https://news.ycombinator.com/item?id=44048775) - [Overview of the Ada Computer Language Competition (1979)](https://iment.com/maida/computer/redref/)
* [2025-05-21, 04:56:44](https://news.ycombinator.com/item?id=44048420) - [Goethe&apos;s Faustian Life](https://www.commonwealmagazine.org/goethe-mitchell-wilson-faust-johann-biography)
* [2025-05-21, 04:35:21](https://news.ycombinator.com/item?id=44048306) - [Convolutions, Polynomials and Flipped Kernels](https://eli.thegreenplace.net/2025/convolutions-polynomials-and-flipped-kernels/)
* [2025-05-21, 04:35:00](https://apple.slashdot.org/story/25/05/21/0435258/fortnite-returns-to-apple-us-app-store-after-5-year-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fortnite Returns To Apple US App Store After 5-Year Ban](https://apple.slashdot.org/story/25/05/21/0435258/fortnite-returns-to-apple-us-app-store-after-5-year-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 04:14:00](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss) - [AWS Claims That Britain Needs More Nuclear Power for AI Datacenters](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss)
* [2025-05-21, 03:30:00](https://tech.slashdot.org/story/25/05/20/2237202/japans-honda-to-scale-back-on-evs-focus-on-hybrids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan&apos;s Honda To Scale Back On EVs, Focus On Hybrids](https://tech.slashdot.org/story/25/05/20/2237202/japans-honda-to-scale-back-on-evs-focus-on-hybrids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 02:13:50](https://news.ycombinator.com/item?id=44047693) - [A Secret Trove of Rare Guitars Heads to the Met](https://www.newyorker.com/magazine/2025/05/26/a-secret-trove-of-rare-guitars-heads-to-the-met)
* [2025-05-21, 02:06:00](https://yro.slashdot.org/story/25/05/21/026213/19-year-old-accused-of-largest-child-data-breach-in-us-agrees-to-plead-guilty-to-federal-charges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [19-Year-Old Accused of Largest Child Data Breach in US Agrees To Plead Guilty To Federal Charges](https://yro.slashdot.org/story/25/05/21/026213/19-year-old-accused-of-largest-child-data-breach-in-us-agrees-to-plead-guilty-to-federal-charges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 00:50:35](https://lobste.rs/s/dmx9e3/apply_coop_matching_people_with_jobs_fit) - [apply.coop - Matching people with jobs that fit their values &amp; passions](https://apply.coop)
* [2025-05-21, 00:45:00](https://tech.slashdot.org/story/25/05/20/2223215/kde-is-getting-a-native-virtual-machine-manager-called-karton?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE Is Getting a Native Virtual Machine Manager Called &apos;Karton&apos;](https://tech.slashdot.org/story/25/05/20/2223215/kde-is-getting-a-native-virtual-machine-manager-called-karton?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 00:02:00](https://tech.slashdot.org/story/25/05/20/2215258/krebsonsecurity-hit-with-near-record-63-tbps-ddos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KrebsOnSecurity Hit With Near-Record 6.3 Tbps DDoS](https://tech.slashdot.org/story/25/05/20/2215258/krebsonsecurity-hit-with-near-record-63-tbps-ddos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 23:27:00](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss) - [New Intel CPU Flaws Leak Sensitive Data From Privileged Memory](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss)
* [2025-05-20, 23:20:00](https://slashdot.org/story/25/05/20/226218/spain-blocks-more-than-65000-airbnb-holiday-rental-listings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spain Blocks More Than 65,000 Airbnb Holiday Rental Listings](https://slashdot.org/story/25/05/20/226218/spain-blocks-more-than-65000-airbnb-holiday-rental-listings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 22:40:00](https://yro.slashdot.org/story/25/05/20/2052220/coinbase-data-breach-will-lead-to-people-dying-techcrunch-founder-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Coinbase Data Breach Will &apos;Lead To People Dying,&apos; TechCrunch Founder Says](https://yro.slashdot.org/story/25/05/20/2052220/coinbase-data-breach-will-lead-to-people-dying-techcrunch-founder-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 22:29:12](https://news.ycombinator.com/item?id=44046578) - [“ZLinq”, a Zero-Allocation LINQ Library for .NET](https://neuecc.medium.com/zlinq-a-zero-allocation-linq-library-for-net-1bb0a3e5c749)
* [2025-05-20, 22:19:29](https://lobste.rs/s/srdmcg/litestream_revamped) - [Litestream: Revamped](https://fly.io/blog/litestream-revamped/)
* [2025-05-20, 22:00:23](https://lobste.rs/s/glf6w3/freebsd_netbsd_zig_cross_compilation) - [FreeBSD and NetBSD Zig Cross-Compilation Support](https://ziglang.org/devlog/2025/#2025-05-20)
* [2025-05-20, 22:00:00](https://tech.slashdot.org/story/25/05/20/2042219/google-launches-veo-3-an-ai-video-generator-that-incorporates-audio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches Veo 3, an AI Video Generator That Incorporates Audio](https://tech.slashdot.org/story/25/05/20/2042219/google-launches-veo-3-an-ai-video-generator-that-incorporates-audio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 21:43:07](https://lobste.rs/s/bl1b9q/krebsonsecurity_hit_with_near_record_6_3) - [KrebsOnSecurity Hit With Near-Record 6.3 Tbps DDoS](https://krebsonsecurity.com/2025/05/krebsonsecurity-hit-with-near-record-6-3-tbps-ddos/)
* [2025-05-20, 21:20:00](https://tech.slashdot.org/story/25/05/20/2035200/google-is-rolling-out-ai-mode-to-everyone-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Is Rolling Out AI Mode To Everyone In the US](https://tech.slashdot.org/story/25/05/20/2035200/google-is-rolling-out-ai-mode-to-everyone-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 20:30:00](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss) - [UK-To-US English Converter Produced Amazing Mistakes](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss)
* [2025-05-20, 19:58:27](https://news.ycombinator.com/item?id=44045292) - [Litestream: Revamped](https://fly.io/blog/litestream-revamped/)
* [2025-05-20, 19:36:41](https://lobste.rs/s/z5cyl1/ingredients_productive_monorepo) - [The Ingredients of a Productive Monorepo](https://blog.swgillespie.me/posts/monorepo-ingredients/)
* [2025-05-20, 19:02:33](https://lobste.rs/s/juveen/optional_rust_freebsd_support_may_2025) - [Optional Rust-In-FreeBSD Support May 2025 Status Report](https://hardenedbsd.org/article/shawn-webb/2025-05-20/optional-rust-freebsd-support-may-2025-status-report)
* [2025-05-20, 18:55:53](https://lobste.rs/s/7q3ntz/tag_proposal_concatenative) - [Tag Proposal: concatenative](https://lobste.rs/s/7q3ntz/tag_proposal_concatenative)
* [2025-05-20, 18:45:00](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss) - [Unlocking Voices: AR For Nonverbal Autism](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss)
* [2025-05-20, 18:30:18](https://news.ycombinator.com/item?id=44044459) - [The NSA Selector](https://github.com/wenzellabs/the_NSA_selector)
* [2025-05-20, 18:14:02](https://news.ycombinator.com/item?id=44044306) - [Red Programming Language](https://www.red-lang.org/p/about.html)
* [2025-05-20, 18:03:32](https://news.ycombinator.com/item?id=44044199) - [Gemma 3n preview: Mobile-first AI](https://developers.googleblog.com/en/introducing-gemma-3n/)
* [2025-05-20, 17:46:36](https://news.ycombinator.com/item?id=44044043) - [Veo 3 and Imagen 4, and a new tool for filmmaking called Flow](https://blog.google/technology/ai/generative-media-models-io-2025/)
* [2025-05-20, 15:50:09](https://lobste.rs/s/hnqnpj/jwno_tiling_wm_for_windows_written_janet) - [Jwno: a tiling WM for Windows, written in Janet](https://agent-kilo.github.io/jwno/)
* [2025-05-20, 15:43:26](https://lobste.rs/s/79hng1/interview_chief_maintainer_qt_project_on) - [Interview: Chief maintainer of Qt project on language independence, KDE, and the pain of Qt 5 to Qt 6](https://devclass.com/2025/05/16/interview-chief-maintainer-of-qt-project-on-language-independence-kde-and-the-pain-of-qt-5-to-qt-6/)
* [2025-05-20, 15:33:42](https://lobste.rs/s/dtwy2u/open_file_format_for_storing_information) - [An Open File Format for storing the information from a forge such as issues, pull/merge requests, milestones](https://f3.forgefriends.org/)
* [2025-05-20, 15:17:44](https://lobste.rs/s/6psu9y/hypervisor_as_library) - [Hypervisor as a Library](https://seiya.me/blog/hypervisor-as-a-library)
* [2025-05-20, 14:58:03](https://news.ycombinator.com/item?id=44042371) - [Show HN: 90s.dev – Game maker that runs on the web](https://90s.dev/blog/finally-releasing-90s-dev.html)
* [2025-05-20, 14:00:00](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss) - [Regeneron to Buy 23andMe Out of Bankruptcy for $256 Million](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss)
* [2025-05-20, 13:55:19](https://lobste.rs/s/viwe6p/open_source_can_t_coordinate) - [Open Source Can&apos;t Coordinate](https://matklad.github.io/2025/05/20/open-source-cant-coordinate.html)
* [2025-05-20, 13:54:54](https://news.ycombinator.com/item?id=44041738) - [Deep Learning Is Applied Topology](https://theahura.substack.com/p/deep-learning-is-applied-topology)
* [2025-05-20, 13:15:52](https://news.ycombinator.com/item?id=44041255) - [Clojuring the web application stack: Meditation One](https://www.evalapply.org/posts/clojure-web-app-from-scratch/index.html)
* [2025-05-20, 12:12:40](https://lobste.rs/s/glfslx/reports_deno_s_demise_have_been_greatly) - [Reports of Deno&apos;s Demise Have Been Greatly Exaggerated](https://deno.com/blog/greatly-exaggerated)
* [2025-05-20, 11:42:24](https://news.ycombinator.com/item?id=44040407) - [Why does the U.S. always run a trade deficit?](https://libertystreeteconomics.newyorkfed.org/2025/05/why-does-the-u-s-always-run-a-trade-deficit/)
* [2025-05-20, 11:34:34](https://lobste.rs/s/qrrc6x/enlightenmentware) - [Enlightenmentware](https://mmapped.blog/posts/28-enlightenmentware)
* [2025-05-20, 10:07:55](https://news.ycombinator.com/item?id=44039808) - [AI&apos;s energy footprint](https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/)
* [2025-05-20, 09:16:00](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss) - [Space Computing Satellite Constellation Launched into Orbit](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss)
* [2025-05-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss) - [Meta Is Making Users Who Opted Out of AI Training Opt Out Again](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss)
* [2025-05-19, 23:49:00](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss) - [Nextcloud Cries Foul Over Google Play Store App Rejection](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss)
* [2025-05-19, 19:06:00](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss) - [The End of the Universe is Nigh!](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss)
* [2025-05-19, 17:56:10](https://news.ycombinator.com/item?id=44032680) - [Writing into Uninitialized Buffers in Rust](https://blog.sunfishcode.online/writingintouninitializedbuffersinrust/)
* [2025-05-19, 14:24:00](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss) - [UK Retail Sector Hit by Ransomware Spree](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss)
* [2025-05-19, 09:39:00](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss) - [How a New Type of AI is Helping Police Skirt Facial Recognition Bans](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss)
* [2025-05-19, 05:26:32](https://news.ycombinator.com/item?id=44026703) - [What makes a good engineer also makes a good engineering organization (2024)](https://moxie.org/2024/09/23/a-good-engineer.html)
* [2025-05-19, 04:54:00](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss) - [The Day Grok Lost its Mind](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss)
* [2025-05-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss) - [Mars May Have Vast Underground Oceans](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss)
* [2025-05-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss) - [U.S. Inks Bill to Force Geo-Tracking Tech for High-End Gaming and AI GPUs](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss)
* [2025-05-18, 18:07:03](https://news.ycombinator.com/item?id=44023226) - [Building my own solar power system](https://medium.com/@joe_5312/pg-e-sucks-or-how-i-learned-to-stop-worrying-and-love-building-my-own-solar-system-acf0c9f03f3b)
* [2025-05-18, 14:38:00](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss) - [NASA Keeps Ancient Voyager 1 Spacecraft Alive With Hail Mary Thruster Fix](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss)
* [2025-05-18, 11:28:45](https://news.ycombinator.com/item?id=44020526) - [GPS Needs to Toughen Up, or Get Trampled Down](https://aviationweek.com/business-aviation/safety-ops-regulation/gps-needs-toughen-or-get-trampled-down)
* [2025-05-18, 09:53:00](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss) - [White House Scraps Plan to Block Data Brokers From Selling Americans’ Sensitive Data](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss)
* [2025-05-18, 05:12:00](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss) - [China&apos;s Hygon Details C86-5G: A 128-Core X86 CPU with Advanced Features and Four-Way SMT](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss)
* [2025-05-18, 00:24:00](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss) - [Oniux by Tor: Isolating Linux Applications at the Kernel Level for Secure Connections](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss)
* [2025-05-17, 19:39:00](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss) - [NCSC and Industry at Odds Over How to Tackle Shoddy Software](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss)
* [2025-05-17, 16:59:48](https://news.ycombinator.com/item?id=44015564) - [Withnail and I (2001)](https://www.criterion.com/current/posts/122-withnail-and-i)
* [2025-05-17, 14:50:00](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss) - [EU Bug Database Fully Operational as US Slashes Infosec](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss)
* [2025-05-17, 10:05:00](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss) - [A US Court Just Put Ownership of CRISPR Back in Play](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss)
* [2025-05-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss) - [Bluetooth 6.1 Enhances Privacy With Randomized RPA Timing](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss)
* [2025-05-17, 02:53:34](https://news.ycombinator.com/item?id=44011686) - [My favourite fonts to use with LaTeX (2022)](https://www.lfe.pt/latex/fonts/typography/2022/11/21/latex-fonts-part1.html)
* [2025-05-17, 00:31:00](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss) - [Nvidia Reportedly Raises GPU Prices by 10-15% as Tariffs and TSMC Price Hikes Filter Down](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss)
