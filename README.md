# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Technology Advances

* [New Mars Orbiter Maneuver Challenges Theory: That May Not Be an Underground Lake on Mars](https://science.slashdot.org/story/25/11/24/0623250/new-mars-orbiter-manuever-challenges-theory-that-may-not-be-an-underground-lake-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - This discovery raises questions about the existence of underground lakes on Mars.

* [First-Ever Full Earth System Simulation Provides New Tool to Understand Climate Change](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss) - A revolutionary simulation tool for climate change research has been introduced.

* [Was the Moon-Forming Protoplanet 'Theia' a Neighbor of Earth?](https://science.slashdot.org/story/25/11/23/2327252/was-the-moon-forming-protoplanet-theia-a-neighbor-of-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Exploring the theory of Earth's early cosmic neighbor.

* [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss) - Findings suggest widespread opiate usage in ancient Egypt.

* [Moss Survived Outside of the International Space Station for 9 Months](https://www.livescience.com/space/scientists-put-moss-on-the-outside-of-the-international-space-station-for-9-months-then-kept-it-growing-back-on-earth) - A study on the resilience of life in space.

## Cybersecurity and AI Developments

* [Shai-Hulud Returns: Over 300 NPM Packages Infected](https://helixguard.ai/blog/malicious-sha1hulud-2025-11-24) - A fake runtime infects hundreds of NPM packages within hours.

* [NSA and IETF, part 3: Dodging the issues at hand](https://blog.cr.yp.to/20251123-dodging.html) - Analysis of cryptographic standards and their challenges.

* ['We Could've Asked ChatGPT': UK Students Fight Back Over Course Taught By AI](https://news.slashdot.org/story/25/11/24/0523258/we-couldve-asked-chatgpt-uk-students-fight-back-over-course-taught-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Students react to an AI-taught course.

* [Microsoft and GitHub Preview New Tool That Identifies, Prioritizes, and Fixes Vulnerabilities With AI](https://developers.slashdot.org/story/25/11/23/0116256/microsoft-and-github-preview-new-tool-that-identifies-prioritizes-and-fixes-vulnerabilities-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An AI tool aims to simplify and enhance software security.

## Open Source and Programming Innovations

* [Alice - new build system for Ocaml](https://www.alicecaml.org/) - A novel build system advancing the Ocaml ecosystem.

* [edn.c: A fast, zero-copy EDN (Extensible Data Notation) reader written in C11 with SIMD acceleration](https://github.com/DotFox/edn.c) - A powerful tool for handling EDN with better performance.

* [Build a Compiler in Five Projects](https://kmicinski.com/functional-programming/2025/11/23/build-a-language/) - A step-by-step guide for building a programming language.

* [MUcad: New open source programming language that can generate 2D sketches and 3D](https://microcad.xyz/) - A language designed for rapid design prototyping.

* [liballocs: Meta-level run-time services for Unix processes... a.k.a. dragging Unix into the 1980s](https://github.com/stephenrkell/liballocs) - Providing advanced runtime services for Unix.

## Business and Industry News

* [Trade Chaos Causes Businesses to Rethink Their Relationship With the U.S.](https://www.nytimes.com/2025/11/24/business/tariffs-trade-small-business.html) - International trade conflicts push businesses to evaluate partnerships.

* [Japan's Gamble to Turn Island of Hokkaido Into Global Chip Hub](https://www.bbc.com/news/articles/c8676qpxgnqo) - Japan's ambition to become a semiconductor leader.

* [Napster Said It Raised $3 Billion From a Mystery Investor. But Now the 'Investor' and 'Money' Are Gone](https://entertainment.slashdot.org/story/25/11/24/022212/napster-said-it-raised-3-billion-from-a-mystery-investor-but-now-the-investor-and-money-are-gone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A cloud of uncertainty surrounds Napster's bold financial claim.

## Unique Perspectives and Cultural Insights

* [How an MIT Student Awed Top Economists With His AI Study - Until It All Fell Apart](https://news.slashdot.org/story/25/11/24/0429245/how-an-mit-student-awed-top-economists-with-his-ai-study---until-it-all-fell-apart?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An intriguing rise-and-fall story in the AI research world.

* [Why I (still) love Linux](https://it-notes.dragas.net/2025/11/24/why-i-still-love-linux/) - A personal reflection on the enduring appeal of Linux.

* [With Love to KDE: Take a Moment](https://korcenji.neocities.org/Writings/KDE-Take-A-Moment) - A heartfelt tribute to the KDE community.

* ['Walk My AI Walk', a #1 AI Country Song](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss) - AI ventures into the world of country music.

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

* [2025-11-24, 12:47:38](https://news.ycombinator.com/item?id=46033536) - [Trade Chaos Causes Businesses to Rethink Their Relationship with the U.S.](https://www.nytimes.com/2025/11/24/business/tariffs-trade-small-business.html)
* [2025-11-24, 12:35:15](https://news.ycombinator.com/item?id=46033435) - [Bureau of Meteorology asked to examine $96.5M bill for website redesign](https://www.abc.net.au/news/2025-11-23/bureau-of-meteorology-new-website-cost-blowout-to-96-million/106042202)
* [2025-11-24, 12:34:00](https://science.slashdot.org/story/25/11/24/0623250/new-mars-orbiter-manuever-challenges-theory-that-may-not-be-an-underground-lake-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Mars Orbiter Manuever Challenges Theory: That May Not Be an Underground Lake on Mars](https://science.slashdot.org/story/25/11/24/0623250/new-mars-orbiter-manuever-challenges-theory-that-may-not-be-an-underground-lake-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 12:00:55](https://news.ycombinator.com/item?id=46033151) - [NSA and IETF, part 3: Dodging the issues at hand](https://blog.cr.yp.to/20251123-dodging.html)
* [2025-11-24, 11:44:46](https://lobste.rs/s/vpybud/i_put_search_engine_into_lambda_so_you_only) - [I put a search engine into a Lambda, so you only pay when you search](https://nixiesearch.substack.com/p/i-put-a-real-search-engine-into-a)
* [2025-11-24, 11:04:26](https://lobste.rs/s/od61og/shai_hulud_returns_over_300_npm_packages) - [Shai-Hulud Returns: Over 300 NPM Packages infected via Fake Bun Runtime Within Hours](https://helixguard.ai/blog/malicious-sha1hulud-2025-11-24)
* [2025-11-24, 10:40:22](https://news.ycombinator.com/item?id=46032539) - [Shai-Hulud Returns: Over 300 NPM Packages Infected](https://helixguard.ai/blog/malicious-sha1hulud-2025-11-24)
* [2025-11-24, 10:37:05](https://news.ycombinator.com/item?id=46032513) - [General principles for the use of AI at CERN](https://home.web.cern.ch/news/official-news/knowledge-sharing/general-principles-use-ai-cern)
* [2025-11-24, 10:10:21](https://lobste.rs/s/x5f9en/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/x5f9en/what_are_you_doing_this_week)
* [2025-11-24, 10:04:16](https://lobste.rs/s/ttsydj/alice_new_build_system_for_ocaml) - [Alice - new build system for Ocaml](https://www.alicecaml.org/)
* [2025-11-24, 09:50:20](https://lobste.rs/s/jn95w0/edn_c_fast_zero_copy_edn_extensible_data) - [edn.c: A fast, zero-copy EDN (Extensible Data Notation) reader written in C11 with SIMD acceleration](https://github.com/DotFox/edn.c)
* [2025-11-24, 09:38:48](https://lobste.rs/s/fjf1eh/fifty_shades_oop) - [Fifty Shades of OOP](https://lesleylai.info/en/fifty_shades_of_oop/)
* [2025-11-24, 09:34:00](https://news.slashdot.org/story/25/11/24/0429245/how-an-mit-student-awed-top-economists-with-his-ai-study---until-it-all-fell-apart?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How An MIT Student Awed Top Economists With His AI Study - Until It All Fell Apart](https://news.slashdot.org/story/25/11/24/0429245/how-an-mit-student-awed-top-economists-with-his-ai-study---until-it-all-fell-apart?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 09:27:56](https://lobste.rs/s/hcjaj0/why_i_still_love_linux) - [Why I (still) love Linux](https://it-notes.dragas.net/2025/11/24/why-i-still-love-linux/)
* [2025-11-24, 09:24:08](https://lobste.rs/s/rdezfn/does_dioxus_spark_joy) - [Does Dioxus spark joy?](https://fasterthanli.me/articles/does-dioxus-spark-joy)
* [2025-11-24, 08:53:00](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss) - [First-Ever Full Earth System Simulation Provides New Tool to Understand Climate Change](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss)
* [2025-11-24, 07:15:56](https://lobste.rs/s/9gx2ig/build_compiler_five_projects) - [Build a Compiler in Five Projects](https://kmicinski.com/functional-programming/2025/11/23/build-a-language/)
* [2025-11-24, 05:35:00](https://news.slashdot.org/story/25/11/24/0523258/we-couldve-asked-chatgpt-uk-students-fight-back-over-course-taught-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;We Could&apos;ve Asked ChatGPT&apos;: UK Students Fight Back Over Course Taught By AI](https://news.slashdot.org/story/25/11/24/0523258/we-couldve-asked-chatgpt-uk-students-fight-back-over-course-taught-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 05:17:15](https://news.ycombinator.com/item?id=46030613) - [Lambda Calculus – Animated Beta Reduction of Lambda Diagrams](https://cruzgodar.com/applets/lambda-calculus)
* [2025-11-24, 04:10:33](https://lobste.rs/s/htdedi/with_love_kde_take_moment) - [With Love to KDE: Take a Moment](https://korcenji.neocities.org/Writings/KDE-Take-A-Moment)
* [2025-11-24, 04:09:00](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss) - [Debian Libre Live Images Released for Software Freedom Lovers](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss)
* [2025-11-24, 03:08:10](https://news.ycombinator.com/item?id=46029932) - [RuBee](https://computer.rip/2025-11-22-RuBee.html)
* [2025-11-24, 03:07:07](https://news.ycombinator.com/item?id=46029929) - [Japan&apos;s gamble to turn island of Hokkaido into global chip hub](https://www.bbc.com/news/articles/c8676qpxgnqo)
* [2025-11-24, 03:04:10](https://news.ycombinator.com/item?id=46029908) - [The Cloudflare outage might be a good thing](https://gist.github.com/jbreckmckye/32587f2907e473dd06d68b0362fb0048)
* [2025-11-24, 03:00:31](https://news.ycombinator.com/item?id=46029889) - [Show HN: Stun LLMs with thousands of invisible Unicode characters](https://gibberifier.com)
* [2025-11-24, 02:35:00](https://entertainment.slashdot.org/story/25/11/24/022212/napster-said-it-raised-3-billion-from-a-mystery-investor-but-now-the-investor-and-money-are-gone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Napster Said It Raised $3 Billion From a Mystery Investor.  But Now the &apos;Investor&apos; and &apos;Money&apos; Are Gone](https://entertainment.slashdot.org/story/25/11/24/022212/napster-said-it-raised-3-billion-from-a-mystery-investor-but-now-the-investor-and-money-are-gone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 02:25:39](https://news.ycombinator.com/item?id=46029699) - [Ask HN: Hearing aid wearers, what&apos;s hot?](https://news.ycombinator.com/item?id=46029699)
* [2025-11-24, 02:16:42](https://news.ycombinator.com/item?id=46029649) - [Passing the Torch – My Last Root DNSSEC KSK Ceremony as Crypto Officer 4](https://technotes.seastrom.com/2025/11/23/passing-the-torch.html)
* [2025-11-24, 02:01:02](https://news.ycombinator.com/item?id=46029534) - [Ego, empathy, and humility at work](https://matthogg.fyi/a-unified-theory-of-ego-empathy-and-humility-at-work/)
* [2025-11-24, 01:57:44](https://lobste.rs/s/gw5yp3/open_source_photo_editor_digital) - [An open-source photo editor &amp; digital compositor for the web](https://mint.photo/)
* [2025-11-24, 00:30:00](https://tech.slashdot.org/story/25/11/24/0016243/new-research-finds-americas-top-social-media-sites-youtube-84-facebook-71-instagram-50?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Research Finds America&apos;s Top Social Media Sites: YouTube (84%) Facebook (71%), Instagram (50%)](https://tech.slashdot.org/story/25/11/24/0016243/new-research-finds-americas-top-social-media-sites-youtube-84-facebook-71-instagram-50?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 23:30:00](https://science.slashdot.org/story/25/11/23/2327252/was-the-moon-forming-protoplanet-theia-a-neighbor-of-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Was the Moon-Forming Protoplanet &apos;Theia&apos; a Neighbor of Earth?](https://science.slashdot.org/story/25/11/23/2327252/was-the-moon-forming-protoplanet-theia-a-neighbor-of-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 23:26:00](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss) - [US Gives Local Police a Face-Scanning App Similar to One Used by ICE Agents](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss)
* [2025-11-23, 22:36:07](https://news.ycombinator.com/item?id=46028046) - [Liva AI (YC S25) Is Hiring](https://www.ycombinator.com/companies/liva-ai/jobs/fYP8QP8-growth-intern)
* [2025-11-23, 22:25:36](https://news.ycombinator.com/item?id=46027962) - [Show HN: I wrote a minimal memory allocator in C](https://github.com/t9nzin/memory)
* [2025-11-23, 22:09:00](https://it.slashdot.org/story/25/11/23/226258/cryptologist-djb-criticizes-push-to-finalize-non-hybrid-security-for-post-quantum-cryptography?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cryptologist DJB Criticizes Push to Finalize Non-Hybrid Security for Post-Quantum Cryptography](https://it.slashdot.org/story/25/11/23/226258/cryptologist-djb-criticizes-push-to-finalize-non-hybrid-security-for-post-quantum-cryptography?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 21:35:23](https://lobste.rs/s/ymlwox/caching_is_better_than_mocking) - [Caching is better than mocking](https://federicopereiro.com/caching-ftw/)
* [2025-11-23, 21:09:00](https://tech.slashdot.org/story/25/11/23/2026246/google-revisits-jpeg-xl-in-chromium-after-earlier-removal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Revisits JPEG XL in Chromium After Earlier Removal](https://tech.slashdot.org/story/25/11/23/2026246/google-revisits-jpeg-xl-in-chromium-after-earlier-removal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 20:51:22](https://news.ycombinator.com/item?id=46027216) - [µcad: New open source programming language that can generate 2D sketches and 3D](https://microcad.xyz/)
* [2025-11-23, 20:49:16](https://lobste.rs/s/aqefyy/cad_new_open_source_programming_language) - [µcad: New open source programming language that can generate 2D sketches and 3D objects](https://microcad.xyz)
* [2025-11-23, 20:46:07](https://lobste.rs/s/xxq1kw/ntoh_hton_is_bad_api) - [ntoh*/hton* is a bad API](https://purplesyringa.moe/blog/ntoh-hton-is-a-bad-api/)
* [2025-11-23, 20:26:22](https://lobste.rs/s/a8fm0p/why_zig_qt_feels_like_doing_impossible) - [Why Zig + Qt Feels Like Doing the Impossible Right](https://dayvster.com/blog/why-zig-+-qt-feels-like-doing-the-impossible-right/)
* [2025-11-23, 20:13:13](https://lobste.rs/s/jbwovn/nonpareil_high_fidelity_hp_calculator) - [Nonpareil:  High-Fidelity HP Calculator Simulator](https://nonpareil.brouhaha.com/)
* [2025-11-23, 20:09:00](https://tech.slashdot.org/story/25/11/23/206245/mozilla-announces-tabs-api-for-developers-building-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Announces &apos;TABS API&apos; For Developers Building AI Agents](https://tech.slashdot.org/story/25/11/23/206245/mozilla-announces-tabs-api-for-developers-building-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 18:52:00](https://hardware.slashdot.org/story/25/11/23/1850236/one-companys-plan-to-sink-nuclear-reactors-deep-underground?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [One Company&apos;s Plan to Sink Nuclear Reactors Deep Underground](https://hardware.slashdot.org/story/25/11/23/1850236/one-companys-plan-to-sink-nuclear-reactors-deep-underground?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 18:36:00](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss) - [U.S. Spy Agency Releases Amelia Earhart Records](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss)
* [2025-11-23, 18:20:27](https://news.ycombinator.com/item?id=46025942) - [Fran Sans – font inspired by San Francisco light rail displays](https://emilysneddon.com/fran-sans-essay)
* [2025-11-23, 17:55:11](https://news.ycombinator.com/item?id=46025721) - [Native Secure Enclave backed SSH keys on macOS](https://gist.github.com/arianvp/5f59f1783e3eaf1a2d4cd8e952bb4acf)
* [2025-11-23, 17:34:00](https://news.slashdot.org/story/25/11/22/201221/could-high-speed-trains-shorten-us-travel-times-while-reducing-emissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could High-Speed Trains Shorten US Travel Times While Reducing Emissions?](https://news.slashdot.org/story/25/11/22/201221/could-high-speed-trains-shorten-us-travel-times-while-reducing-emissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 17:33:36](https://lobste.rs/s/gae4dh/we_stopped_roadmap_work_for_week_fixed_189) - [We stopped roadmap work for a week and fixed 189 bugs](https://lalitm.com/fixits-are-good-for-the-soul/)
* [2025-11-23, 16:34:00](https://developers.slashdot.org/story/25/11/23/0116256/microsoft-and-github-preview-new-tool-that-identifies-prioritizes-and-fixes-vulnerabilities-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft and GitHub Preview New Tool That Identifies, Prioritizes, and Fixes Vulnerabilities With AI](https://developers.slashdot.org/story/25/11/23/0116256/microsoft-and-github-preview-new-tool-that-identifies-prioritizes-and-fixes-vulnerabilities-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 16:31:50](https://news.ycombinator.com/item?id=46024773) - [Calculus for Mathematicians, Computer Scientists, and Physicists [pdf]](https://mathcs.holycross.edu/~ahwang/print/calc.pdf)
* [2025-11-23, 16:06:46](https://news.ycombinator.com/item?id=46024541) - [We stopped roadmap work for a week and fixed bugs](https://lalitm.com/fixits-are-good-for-the-soul/)
* [2025-11-23, 15:34:00](https://hardware.slashdot.org/story/25/11/22/0547231/engineers-are-building-the-hottest-geothermal-power-plant-on-earth---next-to-a-us-volcano?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Engineers are Building the Hottest Geothermal Power Plant on Earth - Next to a US Volcano](https://hardware.slashdot.org/story/25/11/22/0547231/engineers-are-building-the-hottest-geothermal-power-plant-on-earth---next-to-a-us-volcano?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 14:03:36](https://lobste.rs/s/scikpb/liballocs_meta_level_run_time_services) - [liballocs: Meta-level run-time services for Unix processes... a.k.a. dragging Unix into the 1980s](https://github.com/stephenrkell/liballocs)
* [2025-11-23, 13:52:00](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss) - [Maybe That&apos;s Not Liquid Water on Mars After All](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss)
* [2025-11-23, 13:32:45](https://lobste.rs/s/1nop48/google_revisits_jpeg_xl_chromium_after) - [Google Revisits JPEG XL in Chromium After Earlier Removal](https://windowsreport.com/google-revisits-jpeg-xl-in-chromium-after-earlier-removal/)
* [2025-11-23, 12:34:00](https://it.slashdot.org/story/25/11/23/0812238/how-the-internet-rewired-work---and-what-that-tells-us-about-ais-likely-impact?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How the Internet Rewired Work - and What That Tells Us About AI&apos;s Likely Impact](https://it.slashdot.org/story/25/11/23/0812238/how-the-internet-rewired-work---and-what-that-tells-us-about-ais-likely-impact?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 12:19:52](https://lobste.rs/s/mzuktr/what_does_agpl_require) - [What does the AGPL require?](https://runxiyu.org/blog/agpl/)
* [2025-11-23, 12:06:25](https://lobste.rs/s/lfujpz/how_deep_is_challenger_deep) - [How Deep is Challenger Deep?](https://storymaps.arcgis.com/stories/0d389600f3464e3185a84c199f04e859)
* [2025-11-23, 09:10:58](https://lobste.rs/s/mzpgdh/svalboard_datahand_forever) - [Svalboard - Datahand forever](https://svalboard.com/)
* [2025-11-23, 09:10:00](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss) - [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss)
* [2025-11-23, 08:34:00](https://tech.slashdot.org/story/25/11/23/060221/microsoft-warns-its-windows-ai-feature-brings-data-theft-and-malware-risks-and-occasionally-may-hallucinate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Warns Its Windows AI Feature Brings Data Theft and Malware Risks, and &apos;Occasionally May Hallucinate&apos; ](https://tech.slashdot.org/story/25/11/23/060221/microsoft-warns-its-windows-ai-feature-brings-data-theft-and-malware-risks-and-occasionally-may-hallucinate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 05:28:58](https://lobste.rs/s/4lidxn/trifold_is_tool_quickly_cheaply_host) - [trifold is a tool to quickly &amp; cheaply host static websites using a CDN](https://jpt.sh/projects/trifold/)
* [2025-11-23, 04:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss) - [Mercury Pollution in Marine Mammals is Increasing, New Study Finds](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss)
* [2025-11-23, 02:54:26](https://lobste.rs/s/pzcjsl/enough_with_all_raft) - [Enough With All The Raft](https://transactional.blog/talk/enough-with-all-the-raft)
* [2025-11-23, 01:22:25](https://lobste.rs/s/s5kub7/dingo_meta_language_for_go) - [dingo: A meta-language for Go](https://github.com/MadAppGang/dingo)
* [2025-11-22, 23:41:00](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss) - [Icelandic is in Danger of Dying Out Because of AI and English-Language Media, Says Former PM](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss)
* [2025-11-22, 18:58:00](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss) - [First Large-Scale VR Use in the Classroom Extends the Boundaries of Education](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss)
* [2025-11-22, 14:09:00](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss) - [Microsoft Warns its New “AI” Agents in Windows Can Install Malware](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss)
* [2025-11-22, 09:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss) - [\&quot;Walk My AI Walk\&quot;, a #1 AI Country Song](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss)
* [2025-11-22, 07:22:55](https://news.ycombinator.com/item?id=46012846) - [Set theory with types](https://lawrencecpaulson.github.io//2025/11/21/Typed_Set_Theory.html)
* [2025-11-22, 04:42:00](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss) - [Join the the Newest Social Network and Party Like its 1987](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss)
* [2025-11-21, 23:54:00](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss) - [Kaspersky Antivirus is Now Available for Linux. Will You Use It?](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss)
* [2025-11-21, 19:10:00](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss) - [Google Chrome Bug Exploited as an 0-Day - Patch Now or Risk Full System Compromise](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss)
* [2025-11-21, 17:56:50](https://news.ycombinator.com/item?id=46006891) - [Building the largest known Kubernetes cluster, with 130k nodes](https://cloud.google.com/blog/products/containers-kubernetes/how-we-built-a-130000-node-gke-cluster/)
* [2025-11-21, 14:23:00](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss) - [China Cuts Open New Robot on Stage to Prove Authenticity](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss)
* [2025-11-21, 09:34:00](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss) - [Needy Software](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss)
* [2025-11-21, 04:45:00](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss) - [Software Developers Show Less Constructive Scepticism When Using AI Assistants](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss)
* [2025-11-21, 00:07:00](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss) - [Is Perplexity the First AI Unicorn to Fail?](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss)
* [2025-11-21, 00:03:14](https://news.ycombinator.com/item?id=45999631) - [Moss survived outside of the International Space Station for 9 months](https://www.livescience.com/space/scientists-put-moss-on-the-outside-of-the-international-space-station-for-9-months-then-kept-it-growing-back-on-earth)
* [2025-11-20, 19:15:00](https://soylentnews.org/article.pl?sid=25/11/18/1216240&amp;from=rss) - [Turris Releases Their New Omnia NG Router](https://soylentnews.org/article.pl?sid=25/11/18/1216240&amp;from=rss)
* [2025-11-20, 14:37:00](https://soylentnews.org/article.pl?sid=25/11/18/1212257&amp;from=rss) - [Many Hard Leetcode Problems Are Easy Constraint Problems](https://soylentnews.org/article.pl?sid=25/11/18/1212257&amp;from=rss)
* [2025-11-20, 09:52:00](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss) - [Floating Solar Panels Show Promise, but Environmental Impacts Vary by Location](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss)
* [2025-11-20, 05:04:00](https://soylentnews.org/article.pl?sid=25/11/18/125234&amp;from=rss) - [The Intel 4004 Was the First Microprocessor, Right? ](https://soylentnews.org/article.pl?sid=25/11/18/125234&amp;from=rss)
* [2025-11-20, 00:18:00](https://soylentnews.org/article.pl?sid=25/11/18/120241&amp;from=rss) - [Full Metal Modine](https://soylentnews.org/article.pl?sid=25/11/18/120241&amp;from=rss)
