# [News Summary](https://kherrick.github.io/news-summary/)

## Sustainability and Renewable Energy

* [Solar Energy Was America's Largest Source of New Energy for 21 Straight Months](https://news.slashdot.org/story/25/08/24/0022205/solar-energy-was-americas-largest-source-of-new-energy-for-21-straight-months?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/08/24/0022205/solar-energy-was-americas-largest-source-of-new-energy-for-21-straight-months?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Technology and Engineering

* [Reverse-engineering Roadsearch Plus, or, roadgeeking with an 8-bit CPU](http://oldvcr.blogspot.com/2025/08/make-your-apple-ii-or-commodore-64.html) ([comments](https://lobste.rs/s/b5w9va/reverse_engineering_roadsearch_plus))

* [Optimizing FizzBuzz in Rust](https://github.com/nrposner/fizzcrate) ([comments](https://news.ycombinator.com/item?id=44998316))

## Artificial Intelligence

* [AGI Is an Engineering Problem](https://www.vincirufus.com/posts/agi-is-engineering-problem/) ([comments](https://news.ycombinator.com/item?id=45000176))

* [Nvidia Release Massive AI-Ready Open European Language Dataset and Tools](https://hardware.slashdot.org/story/25/08/23/1731237/nvidia-release-massive-ai-ready-open-european-language-dataset-and-tools?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/25/08/23/1731237/nvidia-release-massive-ai-ready-open-european-language-dataset-and-tools?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Historical and Cultural Insights

* [A 2k-year-old sun hat worn by a Roman soldier in Egypt](https://www.smithsonianmag.com/smart-news/a-2000-year-old-sun-hat-worn-by-a-roman-soldier-in-egypt-goes-on-view-after-a-century-in-storage-180987192/) ([comments](https://news.ycombinator.com/item?id=44998514))

## Space Exploration

* [Webb Discovers a New Moon Orbiting Uranus](https://soylentnews.org/article.pl?sid=25/08/22/0551243&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/08/22/0551243&from=rss))

## Science and Society

* [Heat-Styling Hair Care Products Release Billions of Nanoparticles That Can Accumulate in Lungs](https://soylentnews.org/article.pl?sid=25/08/22/0544206&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/08/22/0544206&from=rss))

## Pop Culture

* [James Cameron Struggles With Real-World Horrors for 'Terminator 7' and New Hiroshima Movie](https://entertainment.slashdot.org/story/25/08/23/0318236/james-cameron-struggles-with-real-world-horrors-for-terminator-7-and-new-hiroshima-movie?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/25/08/23/0318236/james-cameron-struggles-with-real-world-horrors-for-terminator-7-and-new-hiroshima-movie?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Privacy and Security

* [T-Mobile Claimed Selling Location Data Without Consent is Legal—Judges Disagree](https://soylentnews.org/article.pl?sid=25/08/22/010203&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/08/22/010203&from=rss))

## Ethics in AI

* [AI Chatbots Undermining the Enlightenment](https://maggieappleton.com/ai-enlightenment) ([comments](https://lobste.rs/s/57w3yx/ai_chatbots_undermining_enlightenment))

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

* [2025-08-24, 01:34:00](https://news.slashdot.org/story/25/08/24/0022205/solar-energy-was-americas-largest-source-of-new-energy-for-21-straight-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Solar Energy Was America&apos;s Largest Source of New Energy for 21 Straight Months](https://news.slashdot.org/story/25/08/24/0022205/solar-energy-was-americas-largest-source-of-new-energy-for-21-straight-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-24, 00:36:38](https://news.ycombinator.com/item?id=45000248) - [Tesla insiders have sold more than 50% of their shares in the last year](https://electrek.co/2025/08/18/tesla-tsla-insiders-have-sold-more-than-50-of-their-shares-in-the-last-year/)
* [2025-08-24, 00:18:52](https://news.ycombinator.com/item?id=45000176) - [AGI Is an Engineering Problem](https://www.vincirufus.com/posts/agi-is-engineering-problem/)
* [2025-08-24, 00:17:48](https://lobste.rs/s/b5w9va/reverse_engineering_roadsearch_plus) - [Reverse-engineering Roadsearch Plus, or, roadgeeking with an 8-bit CPU](http://oldvcr.blogspot.com/2025/08/make-your-apple-ii-or-commodore-64.html)
* [2025-08-23, 23:01:26](https://lobste.rs/s/hwlosr/debdelta) - [debdelta](https://debdelta.debian.net/)
* [2025-08-23, 22:34:00](https://hardware.slashdot.org/story/25/08/23/1851227/intels-new-funding-came-from-already-awarded-grants-so-what-happens-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel&apos;s New Funding Came From Already-Awarded Grants. So What Happens Next?](https://hardware.slashdot.org/story/25/08/23/1851227/intels-new-funding-came-from-already-awarded-grants-so-what-happens-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 21:51:00](https://news.ycombinator.com/item?id=44999419) - [Actually Good Regulations](https://www.actuallygoodregulations.eu/)
* [2025-08-23, 21:45:06](https://news.ycombinator.com/item?id=44999373) - [Interruptions cost 23 minutes 15 seconds, right?](https://blog.oberien.de/2023/11/05/23-minutes-15-seconds.html)
* [2025-08-23, 21:40:09](https://news.ycombinator.com/item?id=44999350) - [Gutenprint Discontinues macOS Support](https://gimp-print.sourceforge.io/p_FAQ_OS_X.php)
* [2025-08-23, 21:34:00](https://tech.slashdot.org/story/25/08/23/046230/new-zealand-air-traffic-control-failure-likely-caused-by-data-transfer-issue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Zealand Air Traffic Control Failure Likely Caused By Data Transfer Issue](https://tech.slashdot.org/story/25/08/23/046230/new-zealand-air-traffic-control-failure-likely-caused-by-data-transfer-issue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 21:12:32](https://lobste.rs/s/gndd4i/tamara_towards_triple_modular) - [TaMaRa: Towards a Triple Modular Redundancy Pass for Yosys](https://blog.yosyshq.com/p/tamara-towards-a-triple-modular-redundancy-pass-for-yosys/)
* [2025-08-23, 21:04:51](https://lobste.rs/s/tht2qd/webr_r_browser) - [WebR - R in the Browser](https://docs.r-wasm.org/webr/latest/)
* [2025-08-23, 21:00:33](https://news.ycombinator.com/item?id=44999094) - [Motion (YC W20) Is Hiring Senior Software Engineers](https://jobs.ashbyhq.com/motion/7355e80d-dab2-4ba1-89cc-a0197e08a83c?utm_source=hn)
* [2025-08-23, 20:49:06](https://news.ycombinator.com/item?id=44999018) - [The Amiga games and demo scene collection](https://amiga.vision/)
* [2025-08-23, 20:43:01](https://news.ycombinator.com/item?id=44998982) - [Romhack.ing&apos;s Internet Archive Mirror No Longer Available](https://romhack.ing/database/news/entry/DW8BKnRHSEqaGDwXTiKjMw)
* [2025-08-23, 20:34:00](https://hardware.slashdot.org/story/25/08/23/1731237/nvidia-release-massive-ai-ready-open-european-language-dataset-and-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Release Massive AI-Ready Open European Language Dataset and Tools](https://hardware.slashdot.org/story/25/08/23/1731237/nvidia-release-massive-ai-ready-open-european-language-dataset-and-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 20:25:00](https://soylentnews.org/article.pl?sid=25/08/22/0551243&amp;from=rss) - [Webb Discovers a New Moon Orbiting Uranus](https://soylentnews.org/article.pl?sid=25/08/22/0551243&amp;from=rss)
* [2025-08-23, 19:35:31](https://news.ycombinator.com/item?id=44998514) - [A 2k-year-old sun hat worn by a Roman soldier in Egypt](https://www.smithsonianmag.com/smart-news/a-2000-year-old-sun-hat-worn-by-a-roman-soldier-in-egypt-goes-on-view-after-a-century-in-storage-180987192/)
* [2025-08-23, 19:34:00](https://entertainment.slashdot.org/story/25/08/23/0318236/james-cameron-struggles-with-real-world-horrors-for-terminator-7-and-new-hiroshima-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [James Cameron Struggles With Real-World Horrors for &apos;Terminator 7&apos; and New Hiroshima Movie](https://entertainment.slashdot.org/story/25/08/23/0318236/james-cameron-struggles-with-real-world-horrors-for-terminator-7-and-new-hiroshima-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 19:10:32](https://news.ycombinator.com/item?id=44998316) - [Optimizing FizzBuzz in Rust](https://github.com/nrposner/fizzcrate)
* [2025-08-23, 19:08:57](https://lobste.rs/s/rkedkd/optimizing_fizzbuzz_rust) - [Optimizing FizzBuzz in Rust](https://github.com/nrposner/fizzcrate)
* [2025-08-23, 18:34:00](https://tech.slashdot.org/story/25/08/23/0554228/threads-has-400-million-monthly-users-but-who-are-they?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Threads Has 400 Million Monthly Users.  But Who Are They?](https://tech.slashdot.org/story/25/08/23/0554228/threads-has-400-million-monthly-users-but-who-are-they?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 18:32:46](https://lobste.rs/s/cts0cb/microdot_impossibly_small_web_framework) - [microdot: The impossibly small web framework for Python and MicroPython](https://github.com/miguelgrinberg/microdot)
* [2025-08-23, 17:34:00](https://news.slashdot.org/story/25/08/23/0436210/fsf-announces-photo-contest-honoring-40-years-of-free-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF Announces Photo Contest Honoring 40 Years of Free Software](https://news.slashdot.org/story/25/08/23/0436210/fsf-announces-photo-contest-honoring-40-years-of-free-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 16:34:00](https://linux.slashdot.org/story/25/08/23/0513229/arch-linux-faces-ongoing-ddos-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arch Linux Faces &apos;Ongoing&apos; DDoS Attack](https://linux.slashdot.org/story/25/08/23/0513229/arch-linux-faces-ongoing-ddos-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 16:09:21](https://news.ycombinator.com/item?id=44996938) - [Line scan camera image processing for train photography](https://daniel.lawrence.lu/blog/y2025m09d21/)
* [2025-08-23, 15:35:00](https://soylentnews.org/article.pl?sid=25/08/22/0547201&amp;from=rss) - [Congressman Proposes Bringing Back Letters of Marque for Cyber Privateers](https://soylentnews.org/article.pl?sid=25/08/22/0547201&amp;from=rss)
* [2025-08-23, 15:34:00](https://tech.slashdot.org/story/25/08/23/022223/making-cash-off-ai-slop-the-surreal-video-business-taking-over-the-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Making Cash Off &apos;AI Slop&apos;: the Surreal Video Business Taking Over the Web](https://tech.slashdot.org/story/25/08/23/022223/making-cash-off-ai-slop-the-surreal-video-business-taking-over-the-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 14:34:00](https://it.slashdot.org/story/25/08/23/0910226/amid-service-disruption-colt-confirms-criminal-group-accessed-their-data-as-ransomware-gang-threatens-to-sell-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amid Service Disruption, Colt Confirms &apos;Criminal Group&apos; Accessed Their Data, As Ransomware Gang Threatens to Sell It](https://it.slashdot.org/story/25/08/23/0910226/amid-service-disruption-colt-confirms-criminal-group-accessed-their-data-as-ransomware-gang-threatens-to-sell-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 14:23:14](https://lobste.rs/s/krs8sm/sxo_optimized_server_side_jsx_build) - [SXO :: Optimized Server-Side JSX. Build Simple. Build Fast](https://github.com/gc-victor/sxo)
* [2025-08-23, 14:22:12](https://lobste.rs/s/7yj16h/big_o) - [Big O](https://samwho.dev/big-o/)
* [2025-08-23, 13:59:40](https://lobste.rs/s/gtooez/retry_loop_retry) - [Retry Loop Retry](https://matklad.github.io/2025/08/23/retry-loop-retry.html)
* [2025-08-23, 13:37:04](https://lobste.rs/s/j0uqee/io_uring_ktls_rust_for_zero_syscall_https) - [io_uring, kTLS and Rust for zero syscall HTTPS server](https://blog.habets.se/2025/04/io-uring-ktls-and-rust-for-zero-syscall-https-server.html)
* [2025-08-23, 13:08:38](https://lobste.rs/s/57w3yx/ai_chatbots_undermining_enlightenment) - [AI Chatbots Undermining the Enlightenment](https://maggieappleton.com/ai-enlightenment)
* [2025-08-23, 13:07:33](https://lobste.rs/s/grwfgz/rue_programming_language_is_minimal) - [rue: A programming language that is a minimal subset of Rust](https://github.com/steveklabnik/rue)
* [2025-08-23, 13:00:00](https://entertainment.slashdot.org/story/25/08/23/0134245/hollywoods-newest-formula-for-success-rereleasing-old-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hollywood&apos;s Newest Formula For Success: Rereleasing Old Movies](https://entertainment.slashdot.org/story/25/08/23/0134245/hollywoods-newest-formula-for-success-rereleasing-old-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 12:54:01](https://news.ycombinator.com/item?id=44995640) - [RFC 9839 and Bad Unicode](https://www.tbray.org/ongoing/When/202x/2025/08/14/RFC9839)
* [2025-08-23, 12:53:15](https://lobste.rs/s/qrs9w8/rfc_9839_bad_unicode) - [RFC 9839 and Bad Unicode](https://www.tbray.org/ongoing/When/202x/2025/08/14/RFC9839)
* [2025-08-23, 12:29:02](https://news.ycombinator.com/item?id=44995508) - [Writing Speed-of-Light Flash Attention for 5090 in CUDA C++](https://gau-nernst.github.io/fa-5090/)
* [2025-08-23, 11:39:15](https://news.ycombinator.com/item?id=44995234) - [Rethinking the Linux cloud stack for confidential VMs](https://lwn.net/Articles/1030818/)
* [2025-08-23, 11:22:15](https://news.ycombinator.com/item?id=44995147) - [Librebox: An open source, Roblox-compatible game engine](https://github.com/librebox-devs/librebox-demo)
* [2025-08-23, 11:00:00](https://soylentnews.org/article.pl?sid=25/08/22/0544206&amp;from=rss) - [Heat-Styling Hair Care Products Release Billions of Nanoparticles That Can Accumulate in Lungs](https://soylentnews.org/article.pl?sid=25/08/22/0544206&amp;from=rss)
* [2025-08-23, 10:32:43](https://news.ycombinator.com/item?id=44994918) - [I made a floppy disk from scratch](https://kottke.org/25/08/i-made-a-floppy-disk-from-scratch)
* [2025-08-23, 10:00:00](https://tech.slashdot.org/story/25/08/23/0124202/libreoffice-258-slams-the-door-on-windows-7-and-8x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LibreOffice 25.8 Slams the Door On Windows 7 and 8.x](https://tech.slashdot.org/story/25/08/23/0124202/libreoffice-258-slams-the-door-on-windows-7-and-8x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 09:17:30](https://lobste.rs/s/fqw11d/developer_s_block) - [Developer&apos;s block](https://underlap.org/developers-block/)
* [2025-08-23, 07:26:40](https://lobste.rs/s/aqw2si/understanding_jujutsu_bookmarks) - [Understanding Jujutsu bookmarks](https://neugierig.org/software/blog/2025/08/jj-bookmarks.html)
* [2025-08-23, 07:00:00](https://news.slashdot.org/story/25/08/23/0120237/us-is-throwing-away-the-critical-minerals-it-needs-analysis-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Is Throwing Away the Critical Minerals It Needs, Analysis Shows](https://news.slashdot.org/story/25/08/23/0120237/us-is-throwing-away-the-critical-minerals-it-needs-analysis-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 06:10:00](https://soylentnews.org/article.pl?sid=25/08/22/019206&amp;from=rss) - [New Research Ferments the Perfect Recipe for Fine Chocolate Flavour](https://soylentnews.org/article.pl?sid=25/08/22/019206&amp;from=rss)
* [2025-08-23, 03:30:00](https://tech.slashdot.org/story/25/08/22/2118234/google-says-it-dropped-the-energy-cost-of-ai-queries-by-33x-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says It Dropped the Energy Cost of AI Queries By 33x In One Year](https://tech.slashdot.org/story/25/08/22/2118234/google-says-it-dropped-the-energy-cost-of-ai-queries-by-33x-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 03:08:06](https://lobste.rs/s/tbo1nr/materialized_views_are_obviously_useful) - [Materialized views are obviously useful](https://sophiebits.com/2025/08/22/materialized-views-are-obviously-useful)
* [2025-08-23, 01:25:00](https://soylentnews.org/article.pl?sid=25/08/22/010203&amp;from=rss) - [T-Mobile Claimed Selling Location Data Without Consent is Legal—Judges Disagree](https://soylentnews.org/article.pl?sid=25/08/22/010203&amp;from=rss)
* [2025-08-23, 01:14:05](https://lobste.rs/s/sxk1le/9_go_test_assertions_i_use_why) - [The 9 Go test assertions I use (and why)](https://www.alexedwards.net/blog/the-9-go-test-assertions-i-use)
* [2025-08-23, 00:20:00](https://tech.slashdot.org/story/25/08/22/2327213/bluesky-blocks-service-in-mississippi-over-age-assurance-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bluesky Blocks Service In Mississippi Over Age Assurance Law](https://tech.slashdot.org/story/25/08/22/2327213/bluesky-blocks-service-in-mississippi-over-age-assurance-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 20:39:00](https://soylentnews.org/article.pl?sid=25/08/21/1213229&amp;from=rss) - [Tree Species Face Unprecedented Climate Shifts Across Their Ranges](https://soylentnews.org/article.pl?sid=25/08/21/1213229&amp;from=rss)
* [2025-08-22, 20:03:05](https://lobste.rs/s/ysmsfu/no_google_did_not_unilaterally_decide) - [No, Google Did Not Unilaterally Decide to Kill XSLT](https://meyerweb.com/eric/thoughts/2025/08/22/no-google-did-not-unilaterally-decide-to-kill-xslt/)
* [2025-08-22, 19:52:41](https://lobste.rs/s/0ktx6s/string_formatting_library_65_lines_c) - [A string formatting library in 65 lines of C++](https://riki.house/fmt)
* [2025-08-22, 19:30:58](https://lobste.rs/s/pc87c0/why_was_apache_kafka_created) - [Why Was Apache Kafka Created?](https://bigdatastream.substack.com/p/why-was-apache-kafka-created)
* [2025-08-22, 19:04:51](https://lobste.rs/s/xltjpn/nitro_tiny_flexible_init_system_process) - [nitro: a tiny but flexible init system and process supervisor](https://git.vuxu.org/nitro/about/)
* [2025-08-22, 18:51:57](https://lobste.rs/s/kl2nwa/first_moq_cdn_cloudflare) - [The First MoQ CDN: Cloudflare](https://moq.dev/blog/first-cdn/)
* [2025-08-22, 17:02:20](https://lobste.rs/s/rmga0q/bubbletea_rs_rust_implementation) - [bubbletea-rs: A rust implementation of Bubbletea](https://github.com/whit3rabbit/bubbletea-rs)
* [2025-08-22, 16:57:49](https://news.ycombinator.com/item?id=44986875) - [Ergonomic errors in Rust: write fast, debug with ease, handle precisely](https://gmcgoldr.github.io/2025/08/21/stackerror.html)
* [2025-08-22, 15:56:00](https://soylentnews.org/article.pl?sid=25/08/21/123255&amp;from=rss) - [Adult Sites Are Stashing Exploit Code Inside Racy .svg Files](https://soylentnews.org/article.pl?sid=25/08/21/123255&amp;from=rss)
* [2025-08-22, 15:54:44](https://news.ycombinator.com/item?id=44986098) - [Hacker and physicist – a tale of \&quot;common sense\&quot;](https://www.supasaf.com/blog/general/hacker_physicist)
* [2025-08-22, 15:15:57](https://news.ycombinator.com/item?id=44985653) - [Static sites with Python, uv, Caddy, and Docker](https://nkantar.com/blog/2025/08/static-python-uv-caddy-docker/)
* [2025-08-22, 13:55:12](https://lobste.rs/s/ntruuu/lobsters_interview_with_matklad) - [Lobsters Interview with Matklad](https://lobste.rs/s/ntruuu/lobsters_interview_with_matklad)
* [2025-08-22, 13:42:01](https://news.ycombinator.com/item?id=44984599) - [Optimizing our way through Metroid](https://antithesis.com/blog/2025/metroid/)
* [2025-08-22, 12:24:03](https://lobste.rs/s/62si4z/i_m_too_dumb_for_zig_s_new_io_interface) - [I&apos;m too dumb for Zig&apos;s new IO interface](https://www.openmymind.net/Im-Too-Dumb-For-Zigs-New-IO-Interface/)
* [2025-08-22, 11:11:00](https://soylentnews.org/article.pl?sid=25/08/21/1154233&amp;from=rss) - [Teenagers Are Choosing to Study STEM Subjects. It&apos;s a Sign of the Times](https://soylentnews.org/article.pl?sid=25/08/21/1154233&amp;from=rss)
* [2025-08-22, 06:22:00](https://soylentnews.org/article.pl?sid=25/08/20/2255245&amp;from=rss) - [VW Introduces Monthly Subscription to Increase Car Power](https://soylentnews.org/article.pl?sid=25/08/20/2255245&amp;from=rss)
* [2025-08-22, 01:35:00](https://soylentnews.org/article.pl?sid=25/08/20/2242220&amp;from=rss) - [We Need to Become Unoptomizable](https://soylentnews.org/article.pl?sid=25/08/20/2242220&amp;from=rss)
* [2025-08-21, 20:49:00](https://soylentnews.org/article.pl?sid=25/08/20/1759228&amp;from=rss) - [Uncovering the Fraudsters and Their Schemes Responsible for Polluting the Scientific Literature](https://soylentnews.org/article.pl?sid=25/08/20/1759228&amp;from=rss)
* [2025-08-21, 20:37:13](https://news.ycombinator.com/item?id=44977758) - [Reproducing prospect theory with &apos;differentiable decision theories&apos;](https://www.science.org/doi/full/10.1126/science.abe2629)
* [2025-08-21, 19:25:58](https://news.ycombinator.com/item?id=44976957) - [Exploring EXIF (2023)](https://hturan.com/writing/exploring-exif)
* [2025-08-21, 16:09:00](https://soylentnews.org/article.pl?sid=25/08/20/1743213&amp;from=rss) - [Physics of Badminton’s New Killer Spin Serve](https://soylentnews.org/article.pl?sid=25/08/20/1743213&amp;from=rss)
* [2025-08-21, 12:56:47](https://news.ycombinator.com/item?id=44972192) - [The Cornervery: A 90-Degree Stapler](https://www.core77.com/posts/138232/The-Cornervery-A-90-Degree-Stapler)
* [2025-08-21, 11:30:59](https://news.ycombinator.com/item?id=44971451) - [Stepanov&apos;s biggest blunder? The curious case of adjacent difference](https://mmapped.blog/posts/43-stepanovs-biggest-blunder)
* [2025-08-21, 11:24:00](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss) - [Mozilla Warns Germany Could Declare Ad Blockers Illegal](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss)
* [2025-08-21, 06:38:00](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss) - [If AI Takes Most of Our Jobs, Money as We Know It Will be Over. What Then?](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss)
* [2025-08-21, 01:52:00](https://soylentnews.org/article.pl?sid=25/08/20/0153218&amp;from=rss) - [A Treatise on AI Chatbots Undermining the Enlightenment](https://soylentnews.org/article.pl?sid=25/08/20/0153218&amp;from=rss)
* [2025-08-20, 21:14:12](https://news.ycombinator.com/item?id=44966543) - [Recreationally overengineering my location history](https://overengineer.dev/blog/2025/08/19/overengineering-location-history/)
* [2025-08-20, 21:08:00](https://soylentnews.org/article.pl?sid=25/08/20/0149227&amp;from=rss) - [Whoops, They Did It Again](https://soylentnews.org/article.pl?sid=25/08/20/0149227&amp;from=rss)
* [2025-08-20, 18:36:28](https://news.ycombinator.com/item?id=44964800) - [How can AI ID a cat?](https://www.quantamagazine.org/how-can-ai-id-a-cat-an-illustrated-guide-20250430/)
* [2025-08-20, 16:22:00](https://soylentnews.org/article.pl?sid=25/08/20/0132257&amp;from=rss) - [The Big Slow Church Move](https://soylentnews.org/article.pl?sid=25/08/20/0132257&amp;from=rss)
* [2025-08-20, 14:03:51](https://news.ycombinator.com/item?id=44962077) - [Children of the Geissler Tube](https://www.hopefulmons.com/p/children-of-the-geissler-tube)
* [2025-08-20, 12:11:00](https://news.ycombinator.com/item?id=44961155) - [Physics of badminton&apos;s new killer spin serve](https://arstechnica.com/science/2025/08/physics-of-badmintons-new-killer-spin-serve/)
* [2025-08-20, 11:35:00](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss) - [How Chefs and Scientists Are Using Kombucha and Kimchi to Study Microbiology](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss)
* [2025-08-20, 11:00:14](https://news.ycombinator.com/item?id=44960718) - [Acronis True Image costs performance when not used](https://randomascii.wordpress.com/2025/05/26/acronis-true-image-costs-performance-when-not-used/)
* [2025-08-20, 06:48:00](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss) - [Scientists Say Tool Can Sniff 5G Traffic, Launch &apos;Attacks&apos; Without Using Rogue Base Stations](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss)
* [2025-08-20, 02:06:00](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss) - [Can’t Pay, Won’t Pay: Impoverished Streaming Services are Driving Viewers Back to Piracy](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss)
