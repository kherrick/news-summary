# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Innovations

* [Telescopes Are Tries: A Dependent Type Shellac on SQLite](https://www.philipzucker.com/telescope_tries/) - An exploration into the concept of dependent types in computing, applied uniquely to SQLite. [Comments](https://lobste.rs/s/u6xhiw/telescopes_are_tries_dependent_type)

* [tabiew: A TUI for viewing & querying CSV, TSV, JSON, SQLITE, and more](https://github.com/shshemi/tabiew) - A versatile text-based interface for data manipulation across multiple formats. [Comments](https://lobste.rs/s/eowepp/tabiew_tui_for_viewing_querying_csv_tsv)

* [Makefile formatter and linter](https://github.com/EbodShojaei/bake) - A tool designed to enhance the readability and usability of Makefiles. [Comments](https://lobste.rs/s/kk3zx3/makefile_formatter_linter)

* [Polystate: Composable Finite State Machines](https://github.com/sdzx-1/polystate) - Introduction of a project focusing on innovative state machine architecture. [Comments](https://news.ycombinator.com/item?id=44351817)

## Artificial Intelligence and Machine Learning

* [Is America Finally Improving Its Electric Car Chargers?](https://news.slashdot.org/story/25/06/23/0149223/is-america-finally-improving-its-electric-car-chargers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Questions arise around advancements in EV infrastructure. [Comments](https://news.slashdot.org/story/25/06/23/0149223/is-america-finally-improving-its-electric-car-chargers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Tensor Manipulation Unit (TMU): Reconfigurable, Near-Memory, High-Throughput AI](https://arxiv.org/abs/2506.14364) - A research paper introducing TMU for enhanced AI computations. [Comments](https://news.ycombinator.com/item?id=44351798)

* [OpenAI Pulls Promotional Materials About Jony Ive Deal (After Trademark Lawsuit)](https://yro.slashdot.org/story/25/06/22/222250/openai-pulls-promotional-materials-about-jony-ive-deal-after-trademark-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Legal challenges bring scrutiny to OpenAI's branding tactics. [Comments](https://yro.slashdot.org/story/25/06/22/222250/openai-pulls-promotional-materials-about-jony-ive-deal-after-trademark-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Gaming and Interactive Media

* [Using Wave Function Collapse to solve puzzle map generation at scale](https://sublevelgames.github.io/blogs/2025-06-22-nurikabe-map-gen-with-wfc/) - Insights into leveraging computational algorithms for gaming applications. [Comments](https://news.ycombinator.com/item?id=44351487)

* [Lego Island Playable in the Browser](https://isle.pizza) - A recreation of the classic game, now accessible in web browsers. [Comments](https://news.ycombinator.com/item?id=44351028)

## Science and Space Exploration

* [Tiny Orange Beads Found By Apollo Astronauts Reveal Moon's Volcanic Past](https://science.slashdot.org/story/25/06/22/0358233/tiny-orange-beads-found-by-apollo-astronauts-reveal-moons-volcanic-past?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apollo missions unearth evidence of intense volcanic activity on the Moon. [Comments](https://science.slashdot.org/story/25/06/22/0358233/tiny-orange-beads-found-by-apollo-astronauts-reveal-moons-volcanic-past?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Dead NASA Satellite Unexpectedly Emits Powerful Radio Pulse](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss) - Unexpected activity from a defunct satellite puzzles researchers. [Comments](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss)

## Cultural and Historical Perspectives

* [I wrote my PhD Thesis in Typst](https://fransskarman.com/phd_thesis_in_typst.html) - Reflections on using the new Typst markup language for academic writing. [Comments](https://news.ycombinator.com/item?id=44350322)

* [The cultural decline of literary fiction](https://oyyy.substack.com/p/the-cultural-decline-of-literary) - Analysis of the shifting cultural value assigned to literary fiction. [Comments](https://news.ycombinator.com/item?id=44347973)

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

* [2025-06-23, 06:26:42](https://lobste.rs/s/u6xhiw/telescopes_are_tries_dependent_type) - [Telescopes Are Tries: A Dependent Type Shellac on SQLite](https://www.philipzucker.com/telescope_tries/)
* [2025-06-23, 05:48:00](https://developers.slashdot.org/story/25/06/23/0542243/behind-the-scenes-at-the-python-software-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Behind the Scenes at the Python Software Foundation](https://developers.slashdot.org/story/25/06/23/0542243/behind-the-scenes-at-the-python-software-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 04:41:53](https://lobste.rs/s/tbr1um/implicit_is_better_than_explicit) - [Implicit is better than explicit](https://sophiabits.com/blog/implicit-is-better-than-explicit)
* [2025-06-23, 04:35:47](https://lobste.rs/s/ez1fqj/compressing_for_browser_go) - [Compressing for the browser in Go](https://blog.kowalczyk.info/a-5hum/compressing-for-the-browser-in-go.html)
* [2025-06-23, 04:23:06](https://news.ycombinator.com/item?id=44352430) - [LeetCode for System Design](https://leetsys.dev)
* [2025-06-23, 03:54:06](https://news.ycombinator.com/item?id=44352329) - [Show HN: Ariadne – A Rust implementation of aperiodic cryptography](https://codeberg.org/CipherNomad/Ariadne)
* [2025-06-23, 03:50:24](https://news.ycombinator.com/item?id=44352311) - [The X Window System didn&apos;t immediately have X terminals](https://utcc.utoronto.ca/~cks/space/blog/unix/XTerminalsNotImmediate)
* [2025-06-23, 03:48:00](https://soylentnews.org/article.pl?sid=25/06/22/0341247&amp;from=rss) - [The GPU 16-Pin Melting Fiasco Is Getting Ridiculous](https://soylentnews.org/article.pl?sid=25/06/22/0341247&amp;from=rss)
* [2025-06-23, 03:25:01](https://lobste.rs/s/eowepp/tabiew_tui_for_viewing_querying_csv_tsv) - [tabiew: A TUI for viewing &amp; querying CSV, TSV, JSON, SQLITE, and more](https://github.com/shshemi/tabiew)
* [2025-06-23, 02:34:16](https://lobste.rs/s/5wc5cm/asterinas_new_linux_compatible_kernel) - [Asterinas: a new Linux-compatible kernel project](https://lwn.net/SubscriberLink/1022920/ad60263cd13c8a13/)
* [2025-06-23, 02:29:20](https://lobste.rs/s/kk3zx3/makefile_formatter_linter) - [Makefile formatter and linter](https://github.com/EbodShojaei/bake)
* [2025-06-23, 02:28:30](https://lobste.rs/s/yvwdco/allocators_are_monkeys_with_typewriters) - [Allocators are Monkeys With Typewriters](https://tgmatos.github.io/allocators-are-for-monkeys-with-typewriters/)
* [2025-06-23, 02:12:25](https://lobste.rs/s/rc9ydi/fixing_letrec_reloaded) - [Fixing Letrec (Reloaded)](https://legacy.cs.indiana.edu/~dyb/pubs/letrec-reloaded.pdf)
* [2025-06-23, 02:12:00](https://news.slashdot.org/story/25/06/23/0149223/is-america-finally-improving-its-electric-car-chargers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is America Finally Improving Its Electric Car Chargers?](https://news.slashdot.org/story/25/06/23/0149223/is-america-finally-improving-its-electric-car-chargers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 01:47:00](https://news.ycombinator.com/item?id=44351817) - [Polystate: Composable Finite State Machines](https://github.com/sdzx-1/polystate)
* [2025-06-23, 01:43:11](https://news.ycombinator.com/item?id=44351798) - [Tensor Manipulation Unit (TMU): Reconfigurable, Near-Memory, High-Throughput AI](https://arxiv.org/abs/2506.14364)
* [2025-06-23, 01:00:00](https://news.ycombinator.com/item?id=44351580) - [Optifye.ai (YC W25) – Founding Back End Engineer](https://news.ycombinator.com/item?id=44351580)
* [2025-06-23, 00:42:34](https://news.ycombinator.com/item?id=44351487) - [Using Wave Function Collapse to solve puzzle map generation at scale](https://sublevelgames.github.io/blogs/2025-06-22-nurikabe-map-gen-with-wfc/)
* [2025-06-23, 00:12:00](https://developers.slashdot.org/story/25/06/23/009244/redmonk-ranks-top-programming-languages-over-time---and-considers-ditching-its-stack-overflow-metric?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [RedMonk Ranks Top Programming Languages Over Time - and Considers Ditching Its &apos;Stack Overflow&apos; Metric](https://developers.slashdot.org/story/25/06/23/009244/redmonk-ranks-top-programming-languages-over-time---and-considers-ditching-its-stack-overflow-metric?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 23:20:00](https://soylentnews.org/article.pl?sid=25/06/22/0326239&amp;from=rss) - [Gartner: ‘AI is Not Doing its Job and Should Leave Us Alone’](https://soylentnews.org/article.pl?sid=25/06/22/0326239&amp;from=rss)
* [2025-06-22, 23:12:50](https://news.ycombinator.com/item?id=44351068) - [Finding a billion factorials in 60 ms with SIMD](https://codeforces.com/blog/entry/143279)
* [2025-06-22, 23:11:05](https://lobste.rs/s/vaxtvz/finding_billion_factorials_60_ms_with) - [Finding a billion factorials in 60 ms with SIMD](https://codeforces.com/blog/entry/143279)
* [2025-06-22, 23:03:00](https://news.ycombinator.com/item?id=44351028) - [Show HN: Lego Island Playable in the Browser](https://isle.pizza)
* [2025-06-22, 22:55:58](https://news.ycombinator.com/item?id=44350978) - [Hawaii Highways](http://www.hawaiihighways.com/)
* [2025-06-22, 22:34:00](https://yro.slashdot.org/story/25/06/22/222250/openai-pulls-promotional-materials-about-jony-ive-deal-after-trademark-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Pulls Promotional Materials About Jony Ive Deal (After Trademark Lawsuit)](https://yro.slashdot.org/story/25/06/22/222250/openai-pulls-promotional-materials-about-jony-ive-deal-after-trademark-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 21:34:00](https://linux.slashdot.org/story/25/06/22/2131259/linus-torvalds-photographed-with-bill-gates---for-the-first-time-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds Photographed with Bill Gates - for the First Time Ever](https://linux.slashdot.org/story/25/06/22/2131259/linus-torvalds-photographed-with-bill-gates---for-the-first-time-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 21:28:54](https://news.ycombinator.com/item?id=44350450) - [Radio Garden](https://radio.garden/?2025)
* [2025-06-22, 21:12:01](https://news.ycombinator.com/item?id=44350322) - [I wrote my PhD Thesis in Typst](https://fransskarman.com/phd_thesis_in_typst.html)
* [2025-06-22, 21:10:35](https://lobste.rs/s/pdrso1/i_wrote_my_phd_thesis_typst) - [I wrote my PhD Thesis in Typst](https://fransskarman.com/phd_thesis_in_typst.html)
* [2025-06-22, 21:06:19](https://lobste.rs/s/x9s2is/building_my_own_paper_tape_punch) - [Building my own paper tape punch](https://unimplementedtrap.com/paper-tape-punch)
* [2025-06-22, 20:45:37](https://lobste.rs/s/beakce/how_fast_are_linux_pipes_anyway_2022) - [How fast are Linux pipes anyway? (2022)](https://mazzo.li/posts/fast-pipes.html)
* [2025-06-22, 20:26:08](https://news.ycombinator.com/item?id=44350002) - [Using Home Assistant, adguard home and an $8 smart outlet to avoid brain rot](https://www.romanklasen.com/blog/beating-brainrot-by-button/)
* [2025-06-22, 20:23:00](https://news.slashdot.org/story/25/06/22/2021234/tesla-begins-driverless-robotaxi-service-in-austin-texas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tesla Begins Driverless Robotaxi Service in Austin, Texas](https://news.slashdot.org/story/25/06/22/2021234/tesla-begins-driverless-robotaxi-service-in-austin-texas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 20:18:53](https://lobste.rs/s/khl7q4/freebsd_kernel_modules_pkg_8) - [FreeBSD Kernel Modules pkg(8) Repositories](https://vermaden.wordpress.com/2025/06/22/freebsd-kernel-modules-pkg8-repositories/)
* [2025-06-22, 19:51:44](https://news.ycombinator.com/item?id=44349761) - [Interview with Francine Prose on early-1970s San Francisco [audio]](https://www.laphamsquarterly.org/content/episode-3-francine-prose)
* [2025-06-22, 19:33:59](https://lobste.rs/s/wtr13p/macro_story) - [A Macro Story](https://courses.cs.northwestern.edu/325/readings/macro-lesson.html)
* [2025-06-22, 19:18:41](https://news.ycombinator.com/item?id=44349525) - [Klein Bottle Amazon Brand Hijacking (2021)](https://www.kleinbottle.com/Amazon_Brand_Hijacking.html)
* [2025-06-22, 19:10:06](https://lobste.rs/s/pmiazy/postmarketos_v25_06_one_with_systemd) - [postmarketOS v25.06: the one with systemd](https://postmarketos.org/blog/2025/06/22/v25.06-release/)
* [2025-06-22, 19:10:00](https://it.slashdot.org/story/25/06/22/197235/how-will-ai-impact-call-center-jobs-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Will AI Impact Call Center Jobs in India?](https://it.slashdot.org/story/25/06/22/197235/how-will-ai-impact-call-center-jobs-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 18:36:10](https://lobste.rs/s/k3hxc1/cdp_retirement_firefox) - [CDP Retirement in Firefox](https://fxdx.dev/cdp-retirement-in-firefox/)
* [2025-06-22, 18:35:00](https://soylentnews.org/article.pl?sid=25/06/22/0319216&amp;from=rss) - [Book Documents the Rise and Fall of the Concept of the Private Life](https://soylentnews.org/article.pl?sid=25/06/22/0319216&amp;from=rss)
* [2025-06-22, 18:19:58](https://lobste.rs/s/nwy2ja/tayga_simple_no_fuss_nat64_for_linux) - [tayga: Simple, no-fuss NAT64 for Linux](https://github.com/apalrd/tayga)
* [2025-06-22, 17:57:06](https://lobste.rs/s/qapmax/generating_musical_scales) - [Generating Musical Scales](https://petecorey.com/blog/2025/06/22/generating-musical-scales/)
* [2025-06-22, 17:51:55](https://news.ycombinator.com/item?id=44348813) - [AGI is Mathematically Impossible 2: When Entropy Returns](https://philarchive.org/archive/SCHAIM-14)
* [2025-06-22, 17:50:00](https://entertainment.slashdot.org/story/25/06/22/1747250/how-the-music-industry-is-building-the-tech-to-hunt-down-ai-generated-songs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How the Music Industry is Building the Tech to Hunt Down AI-Generated Songs](https://entertainment.slashdot.org/story/25/06/22/1747250/how-the-music-industry-is-building-the-tech-to-hunt-down-ai-generated-songs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 17:21:42](https://lobste.rs/s/thwfed/discover_c_26_s_compile_time_reflection) - [Discover C++26’s compile-time reflection](https://lemire.me/blog/2025/06/22/c26-will-include-compile-time-reflection-why-should-you-care/)
* [2025-06-22, 17:13:13](https://lobste.rs/s/olfqe5/pallene_language) - [Pallene Language](https://github.com/pallene-lang/pallene)
* [2025-06-22, 17:06:51](https://news.ycombinator.com/item?id=44348448) - [Show HN: Report idling vehicles in NYC (and get a cut of the fines) with AI](https://apps.apple.com/us/app/idle-reporter-for-nyc-dep/id6747315971)
* [2025-06-22, 17:06:42](https://lobste.rs/s/a9ve6f/my_first_impressions_gleam) - [My First Impressions of Gleam](https://mtlynch.io/notes/gleam-first-impressions/)
* [2025-06-22, 16:34:00](https://science.slashdot.org/story/25/06/22/0358233/tiny-orange-beads-found-by-apollo-astronauts-reveal-moons-volcanic-past?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tiny Orange Beads Found By Apollo Astronauts Reveal Moon&apos;s Volcanic Past](https://science.slashdot.org/story/25/06/22/0358233/tiny-orange-beads-found-by-apollo-astronauts-reveal-moons-volcanic-past?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 16:00:09](https://news.ycombinator.com/item?id=44347973) - [The cultural decline of literary fiction](https://oyyy.substack.com/p/the-cultural-decline-of-literary)
* [2025-06-22, 15:34:00](https://tech.slashdot.org/story/25/06/22/0616202/americans-are-buying-twice-as-many-hybrids-as-fully-electric-vehicles-is-the-next-step-synthetic-fuels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Americans are Buying Twice as Many Hybrids as Fully Electric Vehicles. Is The Next Step Synthetic Fuels?](https://tech.slashdot.org/story/25/06/22/0616202/americans-are-buying-twice-as-many-hybrids-as-fully-electric-vehicles-is-the-next-step-synthetic-fuels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 14:56:44](https://news.ycombinator.com/item?id=44347425) - [Mechanical Watch: Exploded View](https://fellerts.no/projects/epoch.html)
* [2025-06-22, 14:34:00](https://science.slashdot.org/story/25/06/21/054219/a-cracked-piece-of-metal-self-healed-in-experiment-that-stunned-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Cracked Piece of Metal Self-Healed In Experiment That Stunned Scientists](https://science.slashdot.org/story/25/06/21/054219/a-cracked-piece-of-metal-self-healed-in-experiment-that-stunned-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 14:23:52](https://lobste.rs/s/rx7uy1/you_are_what_you_launch_how_software) - [you are what you launch: how software became a lifestyle brand](https://omeru.bearblog.dev/lifestyle/)
* [2025-06-22, 13:51:00](https://soylentnews.org/article.pl?sid=25/06/21/1934229&amp;from=rss) - [Dr. Demento Announces Retirement From Radio After 55 Years](https://soylentnews.org/article.pl?sid=25/06/21/1934229&amp;from=rss)
* [2025-06-22, 11:34:00](https://slashdot.org/story/25/06/21/1755225/what-if-customers-started-saying-no-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What if Customers Started Saying No to AI?](https://slashdot.org/story/25/06/21/1755225/what-if-customers-started-saying-no-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 09:04:00](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss) - [Dead NASA Satellite Unexpectedly Emits Powerful Radio Pulse](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss)
* [2025-06-22, 07:34:00](https://developers.slashdot.org/story/25/06/22/0535221/is-minecraft-a-better-way-to-teach-programming-in-the-age-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is &apos;Minecraft&apos; a Better Way to Teach Programming in the Age of AI?](https://developers.slashdot.org/story/25/06/22/0535221/is-minecraft-a-better-way-to-teach-programming-in-the-age-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 07:27:27](https://news.ycombinator.com/item?id=44344708) - [How fast are Linux pipes anyway?](https://mazzo.li/posts/fast-pipes.html)
* [2025-06-22, 07:06:42](https://lobste.rs/s/mvoez2/announcing_clippy_feature_freeze) - [Announcing the Clippy feature freeze](https://blog.rust-lang.org/inside-rust/2025/06/21/announcing-the-clippy-feature-freeze/)
* [2025-06-22, 06:00:20](https://lobste.rs/s/flzrp1/basic_facts_about_gpus) - [Basic facts about GPUs](https://damek.github.io/random/basic-facts-about-gpus/)
* [2025-06-22, 04:34:00](https://science.slashdot.org/story/25/06/22/0317248/people-with-severe-type-1-diabetes-are-cured-in-small-trial-of-new-drug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [People with Severe Type 1 Diabetes are Cured in Small Trial of New Drug](https://science.slashdot.org/story/25/06/22/0317248/people-with-severe-type-1-diabetes-are-cured-in-small-trial-of-new-drug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 04:28:22](https://lobste.rs/s/obalic/announcing_logtape_1_0_0) - [Announcing LogTape 1.0.0](https://hackers.pub/@hongminhee/2025/announcing-logtape-1-0)
* [2025-06-22, 04:15:00](https://soylentnews.org/article.pl?sid=25/06/21/137201&amp;from=rss) - [Man’s Health Crashes After Getting Donated Kidney](https://soylentnews.org/article.pl?sid=25/06/21/137201&amp;from=rss)
* [2025-06-22, 03:00:00](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss) - [UPDATED: USA Bombs Iran&apos;s Nuclear Sites](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss)
* [2025-06-22, 01:34:00](https://tech.slashdot.org/story/25/06/22/0044222/why-your-cars-touchscreen-is-more-dangerous-than-your-phone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Your Car&apos;s Touchscreen Is More Dangerous Than Your Phone](https://tech.slashdot.org/story/25/06/22/0044222/why-your-cars-touchscreen-is-more-dangerous-than-your-phone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 23:32:00](https://soylentnews.org/article.pl?sid=25/06/21/1225217&amp;from=rss) - [Scientists Once Hoarded Pre-Nuclear Steel; Now We&apos;re Hoarding Pre-AI Content](https://soylentnews.org/article.pl?sid=25/06/21/1225217&amp;from=rss)
* [2025-06-21, 18:45:00](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss) - [The Russian FSB May Have Access to Telegram Messages](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss)
* [2025-06-21, 14:09:00](https://soylentnews.org/article.pl?sid=25/06/19/2351241&amp;from=rss) - [Penn State Research Team Builds 2D CMOS System](https://soylentnews.org/article.pl?sid=25/06/19/2351241&amp;from=rss)
* [2025-06-21, 09:23:00](https://soylentnews.org/article.pl?sid=25/06/19/2344222&amp;from=rss) - [This is Your Brain on ChatGPT](https://soylentnews.org/article.pl?sid=25/06/19/2344222&amp;from=rss)
* [2025-06-21, 07:51:19](https://news.ycombinator.com/item?id=44335583) - [2025 Alonzo Church Award: Paul Blain Levy for Call-by-Push-Value (CBPV)](https://siglog.org/winner-of-the-2025-alonzo-church-award/)
* [2025-06-21, 04:36:00](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss) - [German Government Moves Closer to Ditching Microsoft: \&quot;We&apos;re Done With Teams!\&quot;](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss)
* [2025-06-20, 23:54:00](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss) - [Women in Semiconductors: A Critical Workforce Need](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss)
* [2025-06-20, 23:40:14](https://news.ycombinator.com/item?id=44333155) - [Cross-Account and Cross-Region Backups with AWS Backup (and Friends)](https://tylerrussell.dev/2025/06/20/cross-account-and-region-backups-with-aws-backup-and-friends/)
* [2025-06-20, 19:46:33](https://news.ycombinator.com/item?id=44331316) - [Python can run Mojo now](https://koaning.io/posts/giving-mojo-a-spin/)
* [2025-06-20, 19:36:18](https://news.ycombinator.com/item?id=44331201) - [Kilauea volcano errupts, lava more than 1k feet high [video]](https://www.youtube.com/watch?v=oG5zz9Sjw3E)
* [2025-06-20, 19:06:00](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss) - [SpaceX Rocket Explodes in New Setback to Elon Musk’s Mars Project](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss)
* [2025-06-20, 14:52:23](https://news.ycombinator.com/item?id=44328275) - [The Tandy Corporation](https://www.abortretry.fail/p/the-tandy-corporation-part-1)
* [2025-06-20, 14:21:00](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss) - [LibreOffice Adds Voice To &apos;Ditch Windows For Linux&apos; Campaign](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss)
* [2025-06-20, 13:27:21](https://news.ycombinator.com/item?id=44327554) - [Adobe Project Indigo is a new photo app from former Pixel camera engineers](https://www.engadget.com/apps/adobe-project-indigo-is-a-new-photo-app-from-former-pixel-camera-engineers-213453207.html)
* [2025-06-20, 09:36:00](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss) - [Breakthrough Alzheimer&apos;s Drugs Too Pricey for UK&apos;s National Health Service](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss)
* [2025-06-20, 04:55:00](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss) - [‘Net Zero’ Is Collapsing in U.S. States](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss)
* [2025-06-20, 02:52:38](https://news.ycombinator.com/item?id=44324319) - [Encounters with Reality on Christine Rosen&apos;s the Extinction of Experience](https://thepointmag.com/criticism/encounters-with-reality/)
* [2025-06-20, 00:13:00](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss) - [Fermilab G-2 Collaboration Publishes Final Result](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss)
* [2025-06-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss) - [Welcome to the ‘Infinite Workday’ of 8 P.M. Meetings and Constant Messages](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss)
* [2025-06-19, 16:43:17](https://news.ycombinator.com/item?id=44320285) - [2048 with only 64 bits of state](https://github.com/izabera/bitwise-challenge-2048)
* [2025-06-19, 14:39:00](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss) - [Marijuana to Treat Autism? Some Parents Say Yes](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss)
* [2025-06-19, 09:54:00](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss) - [Reddit User Surprised When 1960s Computer Panel Emerged From Collapsed Family Garage](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss)
* [2025-06-19, 06:42:58](https://news.ycombinator.com/item?id=44316093) - [We’ve had a Denisovan skull since the 1930s—only nobody knew](https://arstechnica.com/science/2025/06/the-controversial-dragon-man-skull-was-a-denisovan/)
* [2025-06-19, 05:08:00](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss) - [Zero-Click AI Vulnerability Exposes Microsoft 365 Copilot Data Without User Interaction](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss)
* [2025-06-19, 00:22:00](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss) - [Honda Shows Low Speed, Narrow BEV for City Delivery](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss)
