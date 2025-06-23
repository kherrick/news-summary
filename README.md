# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Advancements and Discoveries

* [Tiny Orange Beads Found By Apollo Astronauts Reveal Moon's Volcanic Past](https://science.slashdot.org/story/25/06/22/0358233/tiny-orange-beads-found-by-apollo-astronauts-reveal-moons-volcanic-past?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Dead NASA Satellite Unexpectedly Emits Powerful Radio Pulse](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss)

* [Generating Musical Scales](https://petecorey.com/blog/2025/06/22/generating-musical-scales/)

* [GEM: GPU-Accelerated Emulator-Inspired RTL Simulation | Research](https://research.nvidia.com/publication/2025-06_gem-gpu-accelerated-emulator-inspired-rtl-simulation)

## Type 1 Diabetes Breakthrough

* [10 out of 12 people cured in Type 1 Diabetes Study](https://www.nejm.org/doi/full/10.1056/NEJMoa2506549)

* [People with Severe Type 1 Diabetes are Cured in Small Trial of New Drug](https://science.slashdot.org/story/25/06/22/0317248/people-with-severe-type-1-diabetes-are-cured-in-small-trial-of-new-drug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## AI and Industry Impact

* [How the Music Industry is Building the Tech to Hunt Down AI-Generated Songs](https://entertainment.slashdot.org/story/25/06/22/1747250/how-the-music-industry-is-building-the-tech-to-hunt-down-ai-generated-songs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [How Will AI Impact Call Center Jobs in India?](https://it.slashdot.org/story/25/06/22/197235/how-will-ai-impact-call-center-jobs-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Innovative Projects

* [Finding a billion factorials in 60 ms with SIMD](https://codeforces.com/blog/entry/143279)

* [Building my own paper tape punch](https://unimplementedtrap.com/paper-tape-punch)

* [RedMonk Ranks Top Programming Languages Over Time - and Considers Ditching Its 'Stack Overflow' Metric](https://developers.slashdot.org/story/25/06/23/009244/redmonk-ranks-top-programming-languages-over-time---and-considers-ditching-its-stack-overflow-metric?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cultural and Historical Insights

* [Dr. Demento Announces Retirement From Radio After 55 Years](https://soylentnews.org/article.pl?sid=25/06/21/1934229&amp;from=rss)

* [Interview with Francine Prose on early-1970s San Francisco [audio]](https://www.laphamsquarterly.org/content/episode-3-francine-prose)

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

* [2025-06-23, 02:12:00](https://news.slashdot.org/story/25/06/23/0149223/is-america-finally-improving-its-electric-car-chargers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is America Finally Improving Its Electric Car Chargers?](https://news.slashdot.org/story/25/06/23/0149223/is-america-finally-improving-its-electric-car-chargers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 01:00:00](https://news.ycombinator.com/item?id=44351580) - [Optifye.ai (YC W25) – Founding Back End Engineer](https://news.ycombinator.com/item?id=44351580)
* [2025-06-23, 00:17:24](https://news.ycombinator.com/item?id=44351341) - [10 out of 12 people cured in Type 1 Diabetes Study](https://www.nejm.org/doi/full/10.1056/NEJMoa2506549)
* [2025-06-23, 00:12:00](https://developers.slashdot.org/story/25/06/23/009244/redmonk-ranks-top-programming-languages-over-time---and-considers-ditching-its-stack-overflow-metric?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [RedMonk Ranks Top Programming Languages Over Time - and Considers Ditching Its &apos;Stack Overflow&apos; Metric](https://developers.slashdot.org/story/25/06/23/009244/redmonk-ranks-top-programming-languages-over-time---and-considers-ditching-its-stack-overflow-metric?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 23:20:00](https://soylentnews.org/article.pl?sid=25/06/22/0326239&amp;from=rss) - [Gartner: ‘AI is Not Doing its Job and Should Leave Us Alone’](https://soylentnews.org/article.pl?sid=25/06/22/0326239&amp;from=rss)
* [2025-06-22, 23:12:50](https://news.ycombinator.com/item?id=44351068) - [Finding a billion factorials in 60 ms with SIMD](https://codeforces.com/blog/entry/143279)
* [2025-06-22, 23:11:05](https://lobste.rs/s/vaxtvz/finding_billion_factorials_60_ms_with) - [Finding a billion factorials in 60 ms with SIMD](https://codeforces.com/blog/entry/143279)
* [2025-06-22, 22:55:58](https://news.ycombinator.com/item?id=44350978) - [Hawaii Highways](http://www.hawaiihighways.com/)
* [2025-06-22, 22:34:00](https://yro.slashdot.org/story/25/06/22/222250/openai-pulls-promotional-materials-about-jony-ive-deal-after-trademark-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Pulls Promotional Materials About Jony Ive Deal (After Trademark Lawsuit)](https://yro.slashdot.org/story/25/06/22/222250/openai-pulls-promotional-materials-about-jony-ive-deal-after-trademark-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 21:34:00](https://linux.slashdot.org/story/25/06/22/2131259/linus-torvalds-photographed-with-bill-gates---for-the-first-time-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds Photographed with Bill Gates - for the First Time Ever](https://linux.slashdot.org/story/25/06/22/2131259/linus-torvalds-photographed-with-bill-gates---for-the-first-time-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 21:28:54](https://news.ycombinator.com/item?id=44350450) - [Radio Garden](https://radio.garden/?2025)
* [2025-06-22, 21:12:01](https://news.ycombinator.com/item?id=44350322) - [I wrote my PhD Thesis in Typst](https://fransskarman.com/phd_thesis_in_typst.html)
* [2025-06-22, 21:10:35](https://lobste.rs/s/pdrso1/i_wrote_my_phd_thesis_typst) - [I wrote my PhD Thesis in Typst](https://fransskarman.com/phd_thesis_in_typst.html)
* [2025-06-22, 21:07:47](https://news.ycombinator.com/item?id=44350294) - [Otus Lisp](https://yuriy-chumak.github.io/ol/)
* [2025-06-22, 21:06:19](https://lobste.rs/s/x9s2is/building_my_own_paper_tape_punch) - [Building my own paper tape punch](https://unimplementedtrap.com/paper-tape-punch)
* [2025-06-22, 20:45:37](https://lobste.rs/s/beakce/how_fast_are_linux_pipes_anyway_2022) - [How fast are Linux pipes anyway? (2022)](https://mazzo.li/posts/fast-pipes.html)
* [2025-06-22, 20:26:08](https://news.ycombinator.com/item?id=44350002) - [Using Home Assistant, adguard home and an $8 smart outlet to avoid brain rot](https://www.romanklasen.com/blog/beating-brainrot-by-button/)
* [2025-06-22, 20:23:00](https://news.slashdot.org/story/25/06/22/2021234/tesla-begins-driverless-robotaxi-service-in-austin-texas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tesla Begins Driverless Robotaxi Service in Austin, Texas](https://news.slashdot.org/story/25/06/22/2021234/tesla-begins-driverless-robotaxi-service-in-austin-texas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 20:19:39](https://news.ycombinator.com/item?id=44349949) - [FreeBSD Kernel Modules Pkg(8) Repositories](https://vermaden.wordpress.com/2025/06/22/freebsd-kernel-modules-pkg8-repositories/)
* [2025-06-22, 20:18:53](https://lobste.rs/s/khl7q4/freebsd_kernel_modules_pkg_8) - [FreeBSD Kernel Modules pkg(8) Repositories](https://vermaden.wordpress.com/2025/06/22/freebsd-kernel-modules-pkg8-repositories/)
* [2025-06-22, 20:04:33](https://news.ycombinator.com/item?id=44349845) - [Why do all browsers&apos; user agents start with \&quot;Mozilla/\&quot;? (2008)](https://stackoverflow.com/questions/1114254/why-do-all-browsers-user-agents-start-with-mozilla)
* [2025-06-22, 19:51:44](https://news.ycombinator.com/item?id=44349761) - [Interview with Francine Prose on early-1970s San Francisco [audio]](https://www.laphamsquarterly.org/content/episode-3-francine-prose)
* [2025-06-22, 19:33:59](https://lobste.rs/s/wtr13p/macro_story) - [A Macro Story](https://courses.cs.northwestern.edu/325/readings/macro-lesson.html)
* [2025-06-22, 19:18:41](https://news.ycombinator.com/item?id=44349525) - [Klein Bottle Amazon Brand Hijacking (2021)](https://www.kleinbottle.com/Amazon_Brand_Hijacking.html)
* [2025-06-22, 19:10:06](https://lobste.rs/s/pmiazy/postmarketos_v25_06_one_with_systemd) - [postmarketOS v25.06: the one with systemd](https://postmarketos.org/blog/2025/06/22/v25.06-release/)
* [2025-06-22, 19:10:00](https://it.slashdot.org/story/25/06/22/197235/how-will-ai-impact-call-center-jobs-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Will AI Impact Call Center Jobs in India?](https://it.slashdot.org/story/25/06/22/197235/how-will-ai-impact-call-center-jobs-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 18:36:10](https://lobste.rs/s/k3hxc1/cdp_retirement_firefox) - [CDP Retirement in Firefox](https://fxdx.dev/cdp-retirement-in-firefox/)
* [2025-06-22, 18:35:00](https://soylentnews.org/article.pl?sid=25/06/22/0319216&amp;from=rss) - [Book Documents the Rise and Fall of the Concept of the Private Life](https://soylentnews.org/article.pl?sid=25/06/22/0319216&amp;from=rss)
* [2025-06-22, 18:25:13](https://news.ycombinator.com/item?id=44349117) - [Show HN: Turn a paper&apos;s DOI into its full reference list (BibTeX/RIS, etc.)](https://references.mireklzicar.com)
* [2025-06-22, 18:19:58](https://lobste.rs/s/nwy2ja/tayga_simple_no_fuss_nat64_for_linux) - [tayga: Simple, no-fuss NAT64 for Linux](https://github.com/apalrd/tayga)
* [2025-06-22, 17:57:06](https://lobste.rs/s/qapmax/generating_musical_scales) - [Generating Musical Scales](https://petecorey.com/blog/2025/06/22/generating-musical-scales/)
* [2025-06-22, 17:50:00](https://entertainment.slashdot.org/story/25/06/22/1747250/how-the-music-industry-is-building-the-tech-to-hunt-down-ai-generated-songs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How the Music Industry is Building the Tech to Hunt Down AI-Generated Songs](https://entertainment.slashdot.org/story/25/06/22/1747250/how-the-music-industry-is-building-the-tech-to-hunt-down-ai-generated-songs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 17:21:42](https://lobste.rs/s/thwfed/discover_c_26_s_compile_time_reflection) - [Discover C++26’s compile-time reflection](https://lemire.me/blog/2025/06/22/c26-will-include-compile-time-reflection-why-should-you-care/)
* [2025-06-22, 17:13:13](https://lobste.rs/s/olfqe5/pallene_language) - [Pallene Language](https://github.com/pallene-lang/pallene)
* [2025-06-22, 17:06:42](https://lobste.rs/s/a9ve6f/my_first_impressions_gleam) - [My First Impressions of Gleam](https://mtlynch.io/notes/gleam-first-impressions/)
* [2025-06-22, 16:34:00](https://science.slashdot.org/story/25/06/22/0358233/tiny-orange-beads-found-by-apollo-astronauts-reveal-moons-volcanic-past?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tiny Orange Beads Found By Apollo Astronauts Reveal Moon&apos;s Volcanic Past](https://science.slashdot.org/story/25/06/22/0358233/tiny-orange-beads-found-by-apollo-astronauts-reveal-moons-volcanic-past?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 16:00:09](https://news.ycombinator.com/item?id=44347973) - [The cultural decline of literary fiction](https://oyyy.substack.com/p/the-cultural-decline-of-literary)
* [2025-06-22, 15:34:00](https://tech.slashdot.org/story/25/06/22/0616202/americans-are-buying-twice-as-many-hybrids-as-fully-electric-vehicles-is-the-next-step-synthetic-fuels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Americans are Buying Twice as Many Hybrids as Fully Electric Vehicles. Is The Next Step Synthetic Fuels?](https://tech.slashdot.org/story/25/06/22/0616202/americans-are-buying-twice-as-many-hybrids-as-fully-electric-vehicles-is-the-next-step-synthetic-fuels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 14:56:44](https://news.ycombinator.com/item?id=44347425) - [Mechanical Watch: Exploded View](https://fellerts.no/projects/epoch.html)
* [2025-06-22, 14:34:00](https://science.slashdot.org/story/25/06/21/054219/a-cracked-piece-of-metal-self-healed-in-experiment-that-stunned-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Cracked Piece of Metal Self-Healed In Experiment That Stunned Scientists](https://science.slashdot.org/story/25/06/21/054219/a-cracked-piece-of-metal-self-healed-in-experiment-that-stunned-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 14:23:52](https://lobste.rs/s/rx7uy1/you_are_what_you_launch_how_software) - [you are what you launch: how software became a lifestyle brand](https://omeru.bearblog.dev/lifestyle/)
* [2025-06-22, 13:51:00](https://soylentnews.org/article.pl?sid=25/06/21/1934229&amp;from=rss) - [Dr. Demento Announces Retirement From Radio After 55 Years](https://soylentnews.org/article.pl?sid=25/06/21/1934229&amp;from=rss)
* [2025-06-22, 12:43:42](https://news.ycombinator.com/item?id=44346450) - [Using an $8 smart outlet to avoid brainrot](https://www.neilchen.co/blog/kasa)
* [2025-06-22, 11:34:00](https://slashdot.org/story/25/06/21/1755225/what-if-customers-started-saying-no-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What if Customers Started Saying No to AI?](https://slashdot.org/story/25/06/21/1755225/what-if-customers-started-saying-no-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 09:16:27](https://lobste.rs/s/46wjpu/gem_gpu_accelerated_emulator_inspired) - [GEM: GPU-Accelerated Emulator-Inspired RTL Simulation | Research](https://research.nvidia.com/publication/2025-06_gem-gpu-accelerated-emulator-inspired-rtl-simulation)
* [2025-06-22, 09:14:35](https://news.ycombinator.com/item?id=44345334) - [Git Notes: Git&apos;s coolest, most unloved­ feature (2022)](https://tylercipriani.com/blog/2022/11/19/git-notes-gits-coolest-most-unloved-feature/)
* [2025-06-22, 09:07:18](https://lobste.rs/s/jazbbc/mental_model_server_components) - [The Mental Model of Server Components](https://saewitz.com/the-mental-model-of-server-components)
* [2025-06-22, 09:04:00](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss) - [Dead NASA Satellite Unexpectedly Emits Powerful Radio Pulse](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss)
* [2025-06-22, 07:34:00](https://developers.slashdot.org/story/25/06/22/0535221/is-minecraft-a-better-way-to-teach-programming-in-the-age-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is &apos;Minecraft&apos; a Better Way to Teach Programming in the Age of AI?](https://developers.slashdot.org/story/25/06/22/0535221/is-minecraft-a-better-way-to-teach-programming-in-the-age-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 07:27:27](https://news.ycombinator.com/item?id=44344708) - [How fast are Linux pipes anyway?](https://mazzo.li/posts/fast-pipes.html)
* [2025-06-22, 07:06:42](https://lobste.rs/s/mvoez2/announcing_clippy_feature_freeze) - [Announcing the Clippy feature freeze](https://blog.rust-lang.org/inside-rust/2025/06/21/announcing-the-clippy-feature-freeze/)
* [2025-06-22, 06:07:48](https://news.ycombinator.com/item?id=44344246) - [LibRedirect – Redirects popular sites to alternative privacy-friendly frontends](https://libredirect.github.io)
* [2025-06-22, 06:00:20](https://lobste.rs/s/flzrp1/basic_facts_about_gpus) - [Basic facts about GPUs](https://damek.github.io/random/basic-facts-about-gpus/)
* [2025-06-22, 04:34:00](https://science.slashdot.org/story/25/06/22/0317248/people-with-severe-type-1-diabetes-are-cured-in-small-trial-of-new-drug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [People with Severe Type 1 Diabetes are Cured in Small Trial of New Drug](https://science.slashdot.org/story/25/06/22/0317248/people-with-severe-type-1-diabetes-are-cured-in-small-trial-of-new-drug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 04:28:22](https://lobste.rs/s/obalic/announcing_logtape_1_0_0) - [Announcing LogTape 1.0.0](https://hackers.pub/@hongminhee/2025/announcing-logtape-1-0)
* [2025-06-22, 04:15:00](https://soylentnews.org/article.pl?sid=25/06/21/137201&amp;from=rss) - [Man’s Health Crashes After Getting Donated Kidney](https://soylentnews.org/article.pl?sid=25/06/21/137201&amp;from=rss)
* [2025-06-22, 03:00:00](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss) - [UPDATED: USA Bombs Iran&apos;s Nuclear Sites](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss)
* [2025-06-22, 02:51:03](https://news.ycombinator.com/item?id=44342977) - [TPU Deep Dive](https://henryhmko.github.io/posts/tpu/tpu.html)
* [2025-06-22, 02:46:23](https://lobste.rs/s/lgum1v/b_compiler_written_crust) - [B compiler written in Crust](https://github.com/tsoding/b)
* [2025-06-22, 01:34:00](https://tech.slashdot.org/story/25/06/22/0044222/why-your-cars-touchscreen-is-more-dangerous-than-your-phone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Your Car&apos;s Touchscreen Is More Dangerous Than Your Phone](https://tech.slashdot.org/story/25/06/22/0044222/why-your-cars-touchscreen-is-more-dangerous-than-your-phone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 23:32:00](https://soylentnews.org/article.pl?sid=25/06/21/1225217&amp;from=rss) - [Scientists Once Hoarded Pre-Nuclear Steel; Now We&apos;re Hoarding Pre-AI Content](https://soylentnews.org/article.pl?sid=25/06/21/1225217&amp;from=rss)
* [2025-06-21, 23:26:00](https://it.slashdot.org/story/25/06/21/2324244/ceos-have-started-warning-ai-is-coming-for-your-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CEOs Have Started Warning: AI is Coming For Your Job](https://it.slashdot.org/story/25/06/21/2324244/ceos-have-started-warning-ai-is-coming-for-your-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 22:30:23](https://lobste.rs/s/toboca/adding_linear_time_lookbehinds_re2) - [Adding linear-time lookbehinds to RE2](https://systemf.epfl.ch/blog/re2-lookbehinds/)
* [2025-06-21, 18:57:34](https://lobste.rs/s/nlivz4/balatro_for_nintendo_e_reader) - [Balatro for the Nintendo E-Reader](https://mattgreer.dev/blog/balatro-for-the-nintendo-ereader/)
* [2025-06-21, 18:45:00](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss) - [The Russian FSB May Have Access to Telegram Messages](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss)
* [2025-06-21, 15:10:52](https://lobste.rs/s/cwxos5/remaking_celeste_s_lighting_2017) - [Remaking Celeste&apos;s Lighting (2017)](https://noelberry.ca/posts/celeste_lighting/)
* [2025-06-21, 14:09:00](https://soylentnews.org/article.pl?sid=25/06/19/2351241&amp;from=rss) - [Penn State Research Team Builds 2D CMOS System](https://soylentnews.org/article.pl?sid=25/06/19/2351241&amp;from=rss)
* [2025-06-21, 14:04:20](https://lobste.rs/s/ladobm/my_website_is_one_binary) - [my website is one binary](https://j3s.sh/thought/my-website-is-one-binary.html)
* [2025-06-21, 10:01:57](https://lobste.rs/s/8ahj8b/unexpected_security_footguns_go_s) - [Unexpected security footguns in Go&apos;s parsers](https://blog.trailofbits.com/2025/06/17/unexpected-security-footguns-in-gos-parsers/)
* [2025-06-21, 09:23:00](https://soylentnews.org/article.pl?sid=25/06/19/2344222&amp;from=rss) - [This is Your Brain on ChatGPT](https://soylentnews.org/article.pl?sid=25/06/19/2344222&amp;from=rss)
* [2025-06-21, 04:36:00](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss) - [German Government Moves Closer to Ditching Microsoft: \&quot;We&apos;re Done With Teams!\&quot;](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss)
* [2025-06-20, 23:54:00](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss) - [Women in Semiconductors: A Critical Workforce Need](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss)
* [2025-06-20, 23:40:14](https://news.ycombinator.com/item?id=44333155) - [Cross-Account and Cross-Region Backups with AWS Backup (and Friends)](https://tylerrussell.dev/2025/06/20/cross-account-and-region-backups-with-aws-backup-and-friends/)
* [2025-06-20, 19:36:18](https://news.ycombinator.com/item?id=44331201) - [Kilauea volcano errupts, lava more than 1k feet high [video]](https://www.youtube.com/watch?v=oG5zz9Sjw3E)
* [2025-06-20, 19:06:00](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss) - [SpaceX Rocket Explodes in New Setback to Elon Musk’s Mars Project](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss)
* [2025-06-20, 15:36:25](https://news.ycombinator.com/item?id=44328732) - [Dynamic YAML with Python computed properties for fusing API workflows and SQL](https://sequor.dev/)
* [2025-06-20, 14:21:00](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss) - [LibreOffice Adds Voice To &apos;Ditch Windows For Linux&apos; Campaign](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss)
* [2025-06-20, 13:27:21](https://news.ycombinator.com/item?id=44327554) - [Adobe Project Indigo is a new photo app from former Pixel camera engineers](https://www.engadget.com/apps/adobe-project-indigo-is-a-new-photo-app-from-former-pixel-camera-engineers-213453207.html)
* [2025-06-20, 09:36:00](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss) - [Breakthrough Alzheimer&apos;s Drugs Too Pricey for UK&apos;s National Health Service](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss)
* [2025-06-20, 04:55:00](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss) - [‘Net Zero’ Is Collapsing in U.S. States](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss)
* [2025-06-20, 01:06:13](https://news.ycombinator.com/item?id=44323905) - [Mbake – A Makefile formatter and linter, that only took 50 years](https://github.com/EbodShojaei/bake)
* [2025-06-20, 00:13:00](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss) - [Fermilab G-2 Collaboration Publishes Final Result](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss)
* [2025-06-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss) - [Welcome to the ‘Infinite Workday’ of 8 P.M. Meetings and Constant Messages](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss)
* [2025-06-19, 16:43:17](https://news.ycombinator.com/item?id=44320285) - [2048 with only 64 bits of state](https://github.com/izabera/bitwise-challenge-2048)
* [2025-06-19, 14:39:00](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss) - [Marijuana to Treat Autism? Some Parents Say Yes](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss)
* [2025-06-19, 09:54:00](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss) - [Reddit User Surprised When 1960s Computer Panel Emerged From Collapsed Family Garage](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss)
* [2025-06-19, 06:42:58](https://news.ycombinator.com/item?id=44316093) - [We’ve had a Denisovan skull since the 1930s—only nobody knew](https://arstechnica.com/science/2025/06/the-controversial-dragon-man-skull-was-a-denisovan/)
* [2025-06-19, 06:20:41](https://news.ycombinator.com/item?id=44315968) - [I was surprised by how simple an allocator is](https://tgmatos.github.io/allocators-are-for-monkeys-with-typewriters/)
* [2025-06-19, 05:08:00](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss) - [Zero-Click AI Vulnerability Exposes Microsoft 365 Copilot Data Without User Interaction](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss)
* [2025-06-19, 00:22:00](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss) - [Honda Shows Low Speed, Narrow BEV for City Delivery](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss)
