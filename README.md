# [News Summary](https://kherrick.github.io/news-summary/)

## Innovation and Technology

* [Texas brothers buy abandoned Boeing 727 for $10k](https://www.popsci.com/diy/texas-brothers-buy-abandoned-boeing-727/) ([comments](https://news.ycombinator.com/item?id=44404231))

* [Finding Peter Putnam: The forgotten janitor who discovered the logic of the mind](https://nautil.us/finding-peter-putnam-1218035/) ([comments](https://news.ycombinator.com/item?id=44403639))

* [Graphics Artists In China Push Back On AI and Its Averaging Effect](https://tech.slashdot.org/story/25/06/27/2343245/graphics-artists-in-china-push-back-on-ai-and-its-averaging-effect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/06/27/2343245/graphics-artists-in-china-push-back-on-ai-and-its-averaging-effect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Bcachefs may be headed out of the kernel](https://lwn.net/Articles/1027289/) ([comments](https://lobste.rs/s/39mnhf/bcachefs_may_be_headed_out_kernel))

* [Denmark To Tackle Deepfakes By Giving People Copyright To Their Own Features](https://tech.slashdot.org/story/25/06/27/2050240/denmark-to-tackle-deepfakes-by-giving-people-copyright-to-their-own-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/06/27/2050240/denmark-to-tackle-deepfakes-by-giving-people-copyright-to-their-own-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Cultural and Historical Insights

* [Unheard works by Erik Satie to premiere 100 years after his death](https://www.theguardian.com/music/2025/jun/26/unheard-works-by-erik-satie-to-premiere-100-years-after-his-death) ([comments](https://news.ycombinator.com/item?id=44403594))

* [History of Cycling Maps](https://cyclemaps.blogspot.com/) ([comments](https://news.ycombinator.com/item?id=44403383))

* [A brief history of children sent through the mail (2016)](https://www.smithsonianmag.com/smart-news/brief-history-children-sent-through-mail-180959372/) ([comments](https://news.ycombinator.com/item?id=44399854))

## Privacy and Security

* [Canada Orders Chinese Firm Hikvision To Cease Canadian Operations Over National Security Concerns](https://news.slashdot.org/story/25/06/28/0439206/canada-orders-chinese-firm-hikvision-to-cease-canadian-operations-over-national-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/06/28/0439206/canada-orders-chinese-firm-hikvision-to-cease-canadian-operations-over-national-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Facebook is starting to feed its AI with private, unpublished photos](https://www.theverge.com/meta/694685/meta-ai-camera-roll) ([comments](https://news.ycombinator.com/item?id=44401406))

* [IDF officers ordered to fire at unarmed crowds near Gaza food distribution sites](https://www.haaretz.com/israel-news/2025-06-27/ty-article-magazine/.premium/idf-soldiers-ordered-to-shoot-deliberately-at-unarmed-gazans-waiting-for-humanitarian-aid/00000197-ad8e-de01-a39f-ffbe33780000) ([comments](https://news.ycombinator.com/item?id=44402896))

## Environment and Sustainability

* [Renewables Soar, But Fossil Fuels Continue To Rise as Global Electricity Demand Hits Record Levels](https://news.slashdot.org/story/25/06/27/1956207/renewables-soar-but-fossil-fuels-continue-to-rise-as-global-electricity-demand-hits-record-levels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/06/27/1956207/renewables-soar-but-fossil-fuels-continue-to-rise-as-global-electricity-demand-hits-record-levels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Modified Bacteria Convert Plastic Waste Into Pain Reliever](https://soylentnews.org/article.pl?sid=25/06/26/0223205&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/06/26/0223205&amp;from=rss))

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

* [2025-06-28, 12:32:37](https://news.ycombinator.com/item?id=44404231) - [Texas brothers buy abandoned Boeing 727 for $10k](https://www.popsci.com/diy/texas-brothers-buy-abandoned-boeing-727/)
* [2025-06-28, 12:00:47](https://news.ycombinator.com/item?id=44404045) - [Lago (Open-Source Usage Based Billing) is hiring for 10 roles](https://www.ycombinator.com/companies/lago/jobs)
* [2025-06-28, 12:00:00](https://news.slashdot.org/story/25/06/28/0439206/canada-orders-chinese-firm-hikvision-to-cease-canadian-operations-over-national-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada Orders Chinese Firm Hikvision To Cease Canadian Operations Over National Security Concerns](https://news.slashdot.org/story/25/06/28/0439206/canada-orders-chinese-firm-hikvision-to-cease-canadian-operations-over-national-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 11:52:40](https://lobste.rs/s/xontfe/medley_interlisp_project_reviving) - [The Medley Interlisp Project: Reviving a Historical Software System](https://interlisp.org/documentation/young-ccece2025.pdf)
* [2025-06-28, 11:45:00](https://soylentnews.org/article.pl?sid=25/06/26/1527200&amp;from=rss) - [Canonical to Remove GPU Exploit Mitigation to Gain 20% Performance Boost](https://soylentnews.org/article.pl?sid=25/06/26/1527200&amp;from=rss)
* [2025-06-28, 10:27:24](https://news.ycombinator.com/item?id=44403639) - [Finding Peter Putnam: The forgotten janitor who discovered the logic of the mind](https://nautil.us/finding-peter-putnam-1218035/)
* [2025-06-28, 10:19:44](https://news.ycombinator.com/item?id=44403594) - [Unheard works by Erik Satie to premiere 100 years after his death](https://www.theguardian.com/music/2025/jun/26/unheard-works-by-erik-satie-to-premiere-100-years-after-his-death)
* [2025-06-28, 10:00:00](https://tech.slashdot.org/story/25/06/27/2343245/graphics-artists-in-china-push-back-on-ai-and-its-averaging-effect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Graphics Artists In China Push Back On AI and Its Averaging Effect](https://tech.slashdot.org/story/25/06/27/2343245/graphics-artists-in-china-push-back-on-ai-and-its-averaging-effect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 09:32:43](https://news.ycombinator.com/item?id=44403383) - [History of Cycling Maps](https://cyclemaps.blogspot.com/)
* [2025-06-28, 08:45:05](https://news.ycombinator.com/item?id=44403195) - [Untangling Lifetimes: The Arena Allocator](https://www.rfleury.com/p/untangling-lifetimes-the-arena-allocator)
* [2025-06-28, 08:26:27](https://lobste.rs/s/d6hcll/wait_who_s_new_ceo_commodore_let_s_buy) - [Wait… Who’s the New CEO of Commodore?! • Let&apos;s Buy Commodore Part 2](https://www.youtube.com/watch?v=ke-Ao-CpI7E)
* [2025-06-28, 08:01:00](https://slashdot.org/story/25/06/27/2354246/japans-civil-war-over-surnames?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan&apos;s Civil War Over Surnames](https://slashdot.org/story/25/06/27/2354246/japans-civil-war-over-surnames?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 07:58:01](https://lobste.rs/s/7d4on3/newbie_s_first_contribution_rust_for) - [A Newbie&apos;s First Contribution to (Rust for) Linux](https://blog.buenzli.dev/rust-for-linux-first-contrib/)
* [2025-06-28, 07:36:20](https://news.ycombinator.com/item?id=44402896) - [IDF officers ordered to fire at unarmed crowds near Gaza food distribution sites](https://www.haaretz.com/israel-news/2025-06-27/ty-article-magazine/.premium/idf-soldiers-ordered-to-shoot-deliberately-at-unarmed-gazans-waiting-for-humanitarian-aid/00000197-ad8e-de01-a39f-ffbe33780000)
* [2025-06-28, 07:03:00](https://soylentnews.org/article.pl?sid=25/06/26/158255&amp;from=rss) - [Edit is Back](https://soylentnews.org/article.pl?sid=25/06/26/158255&amp;from=rss)
* [2025-06-28, 07:00:00](https://science.slashdot.org/story/25/06/27/2353222/7-people-now-have-neuralink-brain-implant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [7 People Now Have Neuralink Brain Implant](https://science.slashdot.org/story/25/06/27/2353222/7-people-now-have-neuralink-brain-implant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 06:38:39](https://lobste.rs/s/39mnhf/bcachefs_may_be_headed_out_kernel) - [Bcachefs may be headed out of the kernel](https://lwn.net/Articles/1027289/)
* [2025-06-28, 05:27:29](https://news.ycombinator.com/item?id=44402470) - [I deleted my second brain](https://www.joanwestenberg.com/p/i-deleted-my-second-brain)
* [2025-06-28, 05:09:28](https://news.ycombinator.com/item?id=44402421) - [An Introduction to Tribalism for the Modern World That Has Forgotten It](https://sustainableviews.substack.com/p/an-introduction-to-tribalism-for)
* [2025-06-28, 03:30:00](https://tech.slashdot.org/story/25/06/27/2050240/denmark-to-tackle-deepfakes-by-giving-people-copyright-to-their-own-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Denmark To Tackle Deepfakes By Giving People Copyright To Their Own Features](https://tech.slashdot.org/story/25/06/27/2050240/denmark-to-tackle-deepfakes-by-giving-people-copyright-to-their-own-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 02:17:00](https://soylentnews.org/article.pl?sid=25/06/26/153208&amp;from=rss) - [Trump Administration Moves to Count Crypto as a Federal Mortgage Asset](https://soylentnews.org/article.pl?sid=25/06/26/153208&amp;from=rss)
* [2025-06-28, 01:40:05](https://lobste.rs/s/ts1uyb/omarchy_opinionated_arch_hyprland_setup) - [omarchy: Opinionated Arch/Hyprland Setup](https://github.com/basecamp/omarchy)
* [2025-06-28, 01:40:00](https://it.slashdot.org/story/25/06/27/2347206/tech-firms-warn-scattered-spider-hacks-are-targeting-aviation-sector?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Firms Warn &apos;Scattered Spider&apos; Hacks Are Targeting Aviation Sector](https://it.slashdot.org/story/25/06/27/2347206/tech-firms-warn-scattered-spider-hacks-are-targeting-aviation-sector?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 01:00:00](https://linux.slashdot.org/story/25/06/27/2326226/the-year-of-the-eu-linux-desktop-may-finally-arrive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The Year of the EU Linux Desktop May Finally Arrive&apos;](https://linux.slashdot.org/story/25/06/27/2326226/the-year-of-the-eu-linux-desktop-may-finally-arrive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 00:08:28](https://news.ycombinator.com/item?id=44401406) - [Facebook is starting to feed its AI with private, unpublished photos](https://www.theverge.com/meta/694685/meta-ai-camera-roll)
* [2025-06-27, 23:53:35](https://lobste.rs/s/zyhphz/cross_compiling_common_lisp_for_windows) - [Cross-compiling Common Lisp for Windows](https://www.fosskers.ca/en/blog/cl-windows)
* [2025-06-27, 23:53:09](https://lobste.rs/s/fcsxar/guidelines_for_buildable_testable_code) - [Guidelines for buildable and testable code examples](https://pigweed.dev/docs/contributing/docs/examples.html)
* [2025-06-27, 23:50:01](https://lobste.rs/s/14xytr/go_is_80_20_language) - [Go is an 80/20 language](https://blog.kowalczyk.info/article/d-2025-06-26/go-is-8020-language.html)
* [2025-06-27, 23:45:03](https://news.ycombinator.com/item?id=44401303) - [Multi-Stage Programming with Splice Variables](https://tsung-ju.org/icfp25/)
* [2025-06-27, 23:40:00](https://tech.slashdot.org/story/25/06/27/233212/cars-forward-blind-zones-are-worse-now-than-25-years-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cars&apos; Forward Blind Zones Are Worse Now Than 25 Years Ago](https://tech.slashdot.org/story/25/06/27/233212/cars-forward-blind-zones-are-worse-now-than-25-years-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 23:00:00](https://news.slashdot.org/story/25/06/27/2044239/fed-chair-powell-says-ai-is-coming-for-your-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fed Chair Powell Says AI Is Coming For Your Job](https://news.slashdot.org/story/25/06/27/2044239/fed-chair-powell-says-ai-is-coming-for-your-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 22:20:00](https://slashdot.org/story/25/06/27/2038221/a-developer-built-a-real-world-ad-blocker-for-snap-spectacles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Developer Built a Real-World Ad Blocker For Snap Spectacles](https://slashdot.org/story/25/06/27/2038221/a-developer-built-a-real-world-ad-blocker-for-snap-spectacles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 21:54:36](https://lobste.rs/s/kwrdic/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/kwrdic/what_are_you_doing_this_weekend)
* [2025-06-27, 21:40:00](https://yro.slashdot.org/story/25/06/27/1954211/facebook-is-asking-to-use-meta-ai-on-photos-in-your-camera-roll-you-havent-yet-shared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Is Asking To Use Meta AI On Photos In Your Camera Roll You Haven&apos;t Yet Shared](https://yro.slashdot.org/story/25/06/27/1954211/facebook-is-asking-to-use-meta-ai-on-photos-in-your-camera-roll-you-havent-yet-shared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 21:33:00](https://soylentnews.org/article.pl?sid=25/06/26/0234223&amp;from=rss) - [A Solid-State Battery Breakthrough May be Taking Shape in Maryland](https://soylentnews.org/article.pl?sid=25/06/26/0234223&amp;from=rss)
* [2025-06-27, 21:00:00](https://news.slashdot.org/story/25/06/27/1956207/renewables-soar-but-fossil-fuels-continue-to-rise-as-global-electricity-demand-hits-record-levels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Renewables Soar, But Fossil Fuels Continue To Rise as Global Electricity Demand Hits Record Levels](https://news.slashdot.org/story/25/06/27/1956207/renewables-soar-but-fossil-fuels-continue-to-rise-as-global-electricity-demand-hits-record-levels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 20:50:10](https://news.ycombinator.com/item?id=44400105) - [Normalizing Flows Are Capable Generative Models](https://machinelearning.apple.com/research/normalizing-flows)
* [2025-06-27, 20:48:18](https://lobste.rs/s/pnfosx/shell_startup_scripts_2020) - [Shell startup scripts (2020)](https://blog.flowblok.id.au/2013-02/shell-startup-scripts.html)
* [2025-06-27, 20:38:11](https://lobste.rs/s/oztn3e/android_phones_could_soon_warn_you) - [Android phones could soon warn you of “Stingrays” snooping on your communications](https://arstechnica.com/gadgets/2025/06/future-android-phones-could-warn-you-about-data-stealing-fake-cell-towers/)
* [2025-06-27, 20:36:51](https://news.ycombinator.com/item?id=44400025) - [Learn OCaml](https://ocaml-sf.org/learn-ocaml-public/#activity=exercises)
* [2025-06-27, 20:20:00](https://apple.slashdot.org/story/25/06/27/1949207/deepseek-faces-ban-from-apple-google-app-stores-in-germany?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DeepSeek Faces Ban From Apple, Google App Stores In Germany](https://apple.slashdot.org/story/25/06/27/1949207/deepseek-faces-ban-from-apple-google-app-stores-in-germany?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 20:12:00](https://news.ycombinator.com/item?id=44399854) - [A brief history of children sent through the mail (2016)](https://www.smithsonianmag.com/smart-news/brief-history-children-sent-through-mail-180959372/)
* [2025-06-27, 20:01:41](https://lobste.rs/s/6oqgv7/python_can_run_mojo_now) - [Python can run Mojo now](https://koaning.io/posts/giving-mojo-a-spin/)
* [2025-06-27, 19:59:29](https://lobste.rs/s/wcxasn/avoiding_postgresql_pitfalls_hidden) - [Avoiding PostgreSQL Pitfalls: The Hidden Cost of Failing Inserts](https://johnnymetz.com/posts/postgresql-failing-insert/)
* [2025-06-27, 19:53:33](https://lobste.rs/s/iwoipn/structuring_arrays_with_algebraic) - [Structuring Arrays with Algebraic Shapes](https://dl.acm.org/doi/abs/10.1145/3736112.3736141)
* [2025-06-27, 19:40:00](https://news.slashdot.org/story/25/06/27/1935258/canadas-digital-services-tax-to-stay-in-place-despite-g7-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada&apos;s Digital Services Tax To Stay In Place Despite G7 Deal](https://news.slashdot.org/story/25/06/27/1935258/canadas-digital-services-tax-to-stay-in-place-despite-g7-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 19:08:48](https://lobste.rs/s/ggzbe1/run_coverage_on_tests) - [Run coverage on tests](https://hugovk.dev/blog/2025/run-coverage-on-tests/)
* [2025-06-27, 18:49:57](https://news.ycombinator.com/item?id=44399234) - [SymbolicAI: A neuro-symbolic perspective on LLMs](https://github.com/ExtensityAI/symbolicai)
* [2025-06-27, 18:01:00](https://tech.slashdot.org/story/25/06/27/1737221/android-16-will-tell-you-when-fake-cell-towers-try-to-track-your-phone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android 16 Will Tell You When Fake Cell Towers Try To Track Your Phone](https://tech.slashdot.org/story/25/06/27/1737221/android-16-will-tell-you-when-fake-cell-towers-try-to-track-your-phone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 17:44:32](https://news.ycombinator.com/item?id=44398756) - [JWST reveals its first direct image discovery of an exoplanet](https://www.smithsonianmag.com/smart-news/james-webb-space-telescope-reveals-its-first-direct-image-discovery-of-an-exoplanet-180986886/)
* [2025-06-27, 17:35:59](https://lobste.rs/s/orj2th/parameterized_types_c_using_new_tag) - [Parameterized types in C using the new tag compatibility rule](https://nullprogram.com/blog/2025/06/26/)
* [2025-06-27, 17:02:17](https://news.ycombinator.com/item?id=44398390) - [Transmitting data via ultrasound without any special equipment](https://halcy.de/blog/2025/06/27/transmitting-data-via-ultrasound-without-any-special-equipment/)
* [2025-06-27, 17:00:56](https://lobste.rs/s/96xzbg/transmitting_data_via_ultrasound) - [Transmitting data via ultrasound without any special equipment](https://halcy.de/blog/2025/06/27/transmitting-data-via-ultrasound-without-any-special-equipment/)
* [2025-06-27, 16:47:00](https://soylentnews.org/article.pl?sid=25/06/26/0227253&amp;from=rss) - [Greek Man Sentenced to Prison for Running a Private Torrent Site 10 Years Ago](https://soylentnews.org/article.pl?sid=25/06/26/0227253&amp;from=rss)
* [2025-06-27, 15:08:26](https://news.ycombinator.com/item?id=44397367) - [Weird Expressions in Rust](https://www.wakunguma.com/blog/rust-weird-expr)
* [2025-06-27, 14:42:04](https://news.ycombinator.com/item?id=44397168) - [10 Years of Pomological Watercolors](https://parkerhiggins.net/2025/04/10-years-of-pomological-watercolors/)
* [2025-06-27, 14:35:04](https://news.ycombinator.com/item?id=44397124) - [Qwen VLo: From “Understanding” the World to “Depicting” It](https://qwenlm.github.io/blog/qwen-vlo/)
* [2025-06-27, 13:34:46](https://lobste.rs/s/2le5gj/richard_feldman_on_new_language_adoption) - [Richard Feldman on new language adoption in the LLM age](https://youtu.be/ZsBHc-J9f8o)
* [2025-06-27, 13:06:54](https://news.ycombinator.com/item?id=44396518) - [Show HN: I&apos;m an airline pilot – I built interactive graphs/globes of my flights](https://jameshard.ing/pilot)
* [2025-06-27, 12:04:00](https://soylentnews.org/article.pl?sid=25/06/26/0225203&amp;from=rss) - [An Updated PNG Spec](https://soylentnews.org/article.pl?sid=25/06/26/0225203&amp;from=rss)
* [2025-06-27, 11:55:25](https://lobste.rs/s/7x7pey/memory_safety_is_merely_table_stakes_safe) - [Memory Safety is Merely Table Stakes: Safe Interactions with Foreign Languages through Omniglot](https://www.usenix.org/publications/loginonline/memory-safety-merely-table-stakes)
* [2025-06-27, 11:14:54](https://lobste.rs/s/nkizry/conferences_clarity_smokescreens) - [Conferences, Clarity, and Smokescreens](https://infrequently.org/2025/06/conferences-clarity-and-smokescreens/)
* [2025-06-27, 11:07:53](https://lobste.rs/s/pibyff/my_lights_run_on_bash) - [My Lights Run on Bash](https://kramkow.ski/article/2025/06/27/my_lights_run_on_bash.html)
* [2025-06-27, 10:48:35](https://lobste.rs/s/33tzjt/lispmfpga_goal_this_project_is_create) - [LispmFPGA: the goal of this project is to create a small Lisp-Machine in an FPGA](http://www.aviduratas.de/lisp/lispmfpga/index.html)
* [2025-06-27, 07:50:31](https://lobste.rs/s/y41wti/simplifying_vulkan_synchronization) - [Simplifying Vulkan Synchronization](https://www.khronos.org/blog/so-long-image-layouts-simplifying-vulkan-synchronisation)
* [2025-06-27, 07:14:00](https://soylentnews.org/article.pl?sid=25/06/26/0223205&amp;from=rss) - [Modified Bacteria Convert Plastic Waste Into Pain Reliever](https://soylentnews.org/article.pl?sid=25/06/26/0223205&amp;from=rss)
* [2025-06-27, 02:29:00](https://soylentnews.org/article.pl?sid=25/06/26/0210246&amp;from=rss) - [Why Geoengineering is No Longer a Complete Taboo for Scientists](https://soylentnews.org/article.pl?sid=25/06/26/0210246&amp;from=rss)
* [2025-06-26, 21:43:00](https://soylentnews.org/article.pl?sid=25/06/25/1717228&amp;from=rss) - [Apple&apos;s A19 May Be Powerful, But Leans Towards Saving Power](https://soylentnews.org/article.pl?sid=25/06/25/1717228&amp;from=rss)
* [2025-06-26, 19:14:05](https://lobste.rs/s/2uixrw/new_zine_secret_rules_terminal) - [New zine: The Secret Rules of the Terminal](https://jvns.ca/blog/2025/06/24/new-zine--the-secret-rules-of-the-terminal/)
* [2025-06-26, 18:58:39](https://lobste.rs/s/llgmmr/announcing_rust_1_88_0) - [Announcing Rust 1.88.0](https://blog.rust-lang.org/2025/06/26/Rust-1.88.0/)
* [2025-06-26, 16:53:00](https://soylentnews.org/article.pl?sid=25/06/25/1715224&amp;from=rss) - [Rubin Telescope To Collect Up To 500,000 Tb Of Data From 3,200-Megapixel Camera Over Ten Years](https://soylentnews.org/article.pl?sid=25/06/25/1715224&amp;from=rss)
* [2025-06-26, 12:11:00](https://soylentnews.org/article.pl?sid=25/06/25/1712202&amp;from=rss) - [Key Fair Use Ruling Clarifies When Books Can be Used for AI Training](https://soylentnews.org/article.pl?sid=25/06/25/1712202&amp;from=rss)
* [2025-06-26, 07:23:00](https://soylentnews.org/article.pl?sid=25/06/25/0358212&amp;from=rss) - [Blaze Sends Ship Carrying Hundreds Of Chinese EVs To Bottom Of Pacific](https://soylentnews.org/article.pl?sid=25/06/25/0358212&amp;from=rss)
* [2025-06-26, 02:38:00](https://soylentnews.org/article.pl?sid=25/06/24/2342222&amp;from=rss) - [Judge Denies Creating “Mass Surveillance Program” Harming All ChatGPT Users](https://soylentnews.org/article.pl?sid=25/06/24/2342222&amp;from=rss)
* [2025-06-25, 22:17:00](https://soylentnews.org/article.pl?sid=25/06/24/1258205&amp;from=rss) - [Creating AI Based Entirely on Ethically-Sourced Data](https://soylentnews.org/article.pl?sid=25/06/24/1258205&amp;from=rss)
* [2025-06-25, 19:21:38](https://news.ycombinator.com/item?id=44380964) - [The Original Macintosh: Calculator Construction Set](https://www.folklore.org/Calculator_Construction_Set.html)
* [2025-06-25, 17:30:00](https://soylentnews.org/article.pl?sid=25/06/24/1256227&amp;from=rss) - [New Research Provides First Evidence of the Use of Browser Fingerprints for Online Tracking](https://soylentnews.org/article.pl?sid=25/06/24/1256227&amp;from=rss)
* [2025-06-25, 14:14:49](https://news.ycombinator.com/item?id=44377589) - [AlphaGenome: AI for Better Understanding the Genome](https://deepmind.google/discover/blog/alphagenome-ai-for-better-understanding-the-genome/)
* [2025-06-25, 12:45:00](https://soylentnews.org/article.pl?sid=25/06/24/0336243&amp;from=rss) - [Apple to Australians: You&apos;re Too Stupid to Choose Your Own Apps](https://soylentnews.org/article.pl?sid=25/06/24/0336243&amp;from=rss)
* [2025-06-25, 08:02:00](https://soylentnews.org/article.pl?sid=25/06/24/0044241&amp;from=rss) - [UK Retail&apos;s Estimated Cyberattack Costs Pegged at $500M](https://soylentnews.org/article.pl?sid=25/06/24/0044241&amp;from=rss)
* [2025-06-25, 03:18:00](https://soylentnews.org/article.pl?sid=25/06/24/0039212&amp;from=rss) - [BEV Battery Swapping in Shanghai](https://soylentnews.org/article.pl?sid=25/06/24/0039212&amp;from=rss)
* [2025-06-24, 22:36:00](https://soylentnews.org/article.pl?sid=25/06/24/0032246&amp;from=rss) - [Peru Gas Workers Find Thousand-Year-Old Mummy](https://soylentnews.org/article.pl?sid=25/06/24/0032246&amp;from=rss)
* [2025-06-24, 17:51:00](https://soylentnews.org/article.pl?sid=25/06/24/0030208&amp;from=rss) - [Breathprints?](https://soylentnews.org/article.pl?sid=25/06/24/0030208&amp;from=rss)
* [2025-06-24, 16:18:07](https://news.ycombinator.com/item?id=44367811) - [Lossless LLM 3x Throughput Increase by LMCache](https://github.com/LMCache/LMCache)
* [2025-06-24, 15:52:47](https://news.ycombinator.com/item?id=44367539) - [c4wa – C compiler for Web Assembly](https://github.com/kign/c4wa)
* [2025-06-24, 14:52:05](https://news.ycombinator.com/item?id=44366904) - [LLMs bring new nature of abstraction – up and sideways](https://martinfowler.com/articles/2025-nature-abstraction.html)
* [2025-06-24, 14:29:59](https://news.ycombinator.com/item?id=44366670) - [Reinforcement learning, explained with a minimum of math and jargon](https://www.understandingai.org/p/reinforcement-learning-explained)
* [2025-06-24, 13:49:35](https://news.ycombinator.com/item?id=44366246) - [London&apos;s Largest Ancient Roman Fresco Is “Most Difficult Jigsaw Puzzle”](https://www.thisiscolossal.com/2025/06/mola-liberty-roman-fresco/)
* [2025-06-24, 13:29:35](https://news.ycombinator.com/item?id=44366057) - [A short history of web bots and bot detection techniques](https://sinja.io/blog/bot-or-not)
* [2025-06-24, 13:09:00](https://soylentnews.org/article.pl?sid=25/06/24/0021200&amp;from=rss) - [Cloudflare CEO Warns AI Crawlers and Summaries Are Eroding the Internet&apos;s Business Model](https://soylentnews.org/article.pl?sid=25/06/24/0021200&amp;from=rss)
* [2025-06-24, 08:23:00](https://soylentnews.org/article.pl?sid=25/06/23/194255&amp;from=rss) - [Massive DDoS Attack Delivered 37.4Tb In 45 Seconds, Equivalent To 10,000 Hd Movies, To One Victim IP](https://soylentnews.org/article.pl?sid=25/06/23/194255&amp;from=rss)
* [2025-06-24, 03:36:00](https://soylentnews.org/article.pl?sid=25/06/22/1718247&amp;from=rss) - [US Tech Czar: China Just Two Years Behind On Chip Design](https://soylentnews.org/article.pl?sid=25/06/22/1718247&amp;from=rss)
