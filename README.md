# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Its Impact

* [Several US States Bet That AI Can Solve Their Prison Recidivism Crisis](https://news.slashdot.org/story/26/06/21/2340231/several-us-states-bet-that-ai-can-solve-their-prison-recidivism-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=48628328))

* [Canonical's Upcoming AI Tool: Talk to Ubuntu Instead of Typing](https://news.slashdot.org/story/26/06/21/0234252/canonicals-upcoming-ai-tool-talk-to-ubuntu-instead-of-typing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=48618488))

* [Munich 1991: The Roots of the Current AI Boom](https://people.idsia.ch/~juergen/ai-boom-roots-munich-1991.html) ([Comments](https://lobste.rs/s/n1xvd7/munich_1991_roots_current_ai_boom))

* [Chinese Fab SMIC's 7nm Metal Pitch Beats Intel 18A but Lags 38% on Density, Teardown Finds](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss) ([Comments](https://news.ycombinator.com/item?id=48623434))

## Technology and Software Innovations

* [The Secret Revolution in Battery Technology: 3-D Printing](https://hardware.slashdot.org/story/26/06/21/2324220/the-secret-revolution-in-battery-technology-3-d-printing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=48628328))

* [window.showDirectoryPicker opens up a whole new world](https://steveharrison.dev/showdirectorypicker-opens-up-a-whole-new-world/) ([Comments](https://news.ycombinator.com/item?id=48629387))

* [Performance improvements in libffi](https://atgreen.github.io/repl-yell/posts/libffi-plan-cache/) ([Comments](https://lobste.rs/s/agw0rr/performance_improvements_libffi))

* [postmarketOS v26.06 (Alpen Avocado) released](https://postmarketos.org/blog/2026/06/21/v26.06-release/) ([Comments](https://lobste.rs/s/lbjdlo/what_s_advice_for_llm_poisoning_artwork))

* [Die analysis of the 8087 math coprocessor's fast bit shifter](https://www.righto.com/2020/05/die-analysis-of-8087-math-coprocessors.html) ([Comments](https://news.ycombinator.com/item?id=48629982))

## Scientific & Health Insights

* [Becoming a dad changes men's brains](https://www.scientificamerican.com/article/how-becoming-a-dad-changes-mens-brains/) ([Comments](https://news.ycombinator.com/item?id=48629356))

* [Heart Protection From COVID Shots Remains Amid Updates, Study Finds](https://soylentnews.org/article.pl?sid=26/06/17/1517231&amp;from=rss) ([Comments](https://lobste.rs/s/d0vsgl/is_ai_ruining_our_skills_early_results_are))

* [Is AI ruining our skills? Early results are in and they’re not good](https://www.nature.com/articles/d41586-026-01947-1) ([Comments](https://lobste.rs/s/d0vsgl/is_ai_ruining_our_skills_early_results_are))

## Ethics and Privacy

* [Never Give Them Your Face](https://nevergivethemyourface.com/) ([Comments](https://news.ycombinator.com/item?id=48630066))

* [Cops Keep Getting Arrested for Using Flock's Cameras to Stalk People](https://yro.slashdot.org/story/26/06/21/1939214/cops-keep-getting-arrested-for-using-flocks-cameras-to-stalk-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=48622867))

* [Danish privacy activist Lars Andersen raided by police](https://twitter.com/LarsAnders1620/status/2068208864747540516#m) ([Comments](https://news.ycombinator.com/item?id=48625823))

* [System call instrumentation on Linux/x86-64 using memory-indirect calls (in vain?), part one](https://www.humprog.org/~stephen/blog/2026/06/15/#system-call-instrumentation-on-intel-negative-result) ([Comments](https://lobste.rs/s/mi6osr/system_call_instrumentation_on_linux_x86))

## Tech and Social Impact

* [Tutor Who Took Online Tests for 124 Students Jailed for Three Years](https://news.slashdot.org/story/26/06/22/0255256/tutor-who-took-online-tests-for-124-students-jailed-for-three-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=48626930))

* [UK Official Promises Statements 'Around VPNs' and Further Teen Restrictions on Chatbots and Social Media](https://news.slashdot.org/story/26/06/21/2052213/uk-official-promises-statements-around-vpns-and-further-teen-restrictions-on-chatbots-and-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=48622626))

* [Cops Keep Getting Arrested for Using Flock's Cameras to Stalk People](https://yro.slashdot.org/story/26/06/21/1939214/cops-keep-getting-arrested-for-using-flocks-cameras-to-stalk-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2026-06-22, 13:57:49](https://news.ycombinator.com/item?id=48630220) - [Nvidia Halos](https://www.nvidia.com/en-us/ai-trust-center/halos/autonomous-vehicles/)
* [2026-06-22, 13:45:48](https://news.ycombinator.com/item?id=48630066) - [Never Give Them Your Face](https://nevergivethemyourface.com/)
* [2026-06-22, 13:43:01](https://news.ycombinator.com/item?id=48630020) - [Pledging Another $400k to the Zig Software Foundation](https://mitchellh.com/writing/zig-donation-2026)
* [2026-06-22, 13:40:16](https://news.ycombinator.com/item?id=48629982) - [Die analysis of the 8087 math coprocessor&apos;s fast bit shifter](https://www.righto.com/2020/05/die-analysis-of-8087-math-coprocessors.html)
* [2026-06-22, 13:11:56](https://lobste.rs/s/12jy9c/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/12jy9c/what_are_you_doing_this_week)
* [2026-06-22, 12:42:22](https://news.ycombinator.com/item?id=48629387) - [window.showDirectoryPicker opens up a whole new world](https://steveharrison.dev/showdirectorypicker-opens-up-a-whole-new-world/)
* [2026-06-22, 12:39:43](https://news.ycombinator.com/item?id=48629356) - [Becoming a dad changes men&apos;s brains](https://www.scientificamerican.com/article/how-becoming-a-dad-changes-mens-brains/)
* [2026-06-22, 12:37:47](https://lobste.rs/s/hpx7an/linux_secure_boot_certificate) - [Linux and Secure Boot certificate expiration](https://lwn.net/Articles/1029767/)
* [2026-06-22, 12:23:46](https://news.ycombinator.com/item?id=48629213) - [Show HN: Got sick of ads, so I made my own logic puzzle site](https://puzzlelair.com/)
* [2026-06-22, 12:13:00](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss) - [16-Year-Old SATA II SSD Survives 1 Petabyte of Writes](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss)
* [2026-06-22, 12:09:39](https://lobste.rs/s/n1xvd7/munich_1991_roots_current_ai_boom) - [Munich 1991: the Roots of the Current AI Boom](https://people.idsia.ch/~juergen/ai-boom-roots-munich-1991.html)
* [2026-06-22, 12:09:34](https://news.ycombinator.com/item?id=48629064) - [Why Drawing Tablet Brands Won&apos;t Collaborate on Linux Floss Drivers](https://www.davidrevoy.com/article1154/why-drawing-tablet-brands-wont-collaborate-on-linux-floss-drivers)
* [2026-06-22, 11:54:07](https://lobste.rs/s/pa1atu/nix_needs_relocatable_binaries) - [Nix needs relocatable binaries](https://fzakaria.com/2026/06/21/nix-needs-relocatable-binaries)
* [2026-06-22, 11:34:00](https://news.slashdot.org/story/26/06/21/2340231/several-us-states-bet-that-ai-can-solve-their-prison-recidivism-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Several US States Bet That AI Can Solve Their Prison Recidivism Crisis](https://news.slashdot.org/story/26/06/21/2340231/several-us-states-bet-that-ai-can-solve-their-prison-recidivism-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 11:31:29](https://lobste.rs/s/xhpauz/p99_0ms_autocomplete_for_240_million) - [p99 0ms* autocomplete for 240 million domain names](https://ruurtjan.com/articles/p99-0ms-autocomplete-for-240-million-domain-names)
* [2026-06-22, 11:27:40](https://news.ycombinator.com/item?id=48628731) - [Alan Greenspan Dies at 100; Led Fed During Boom Before 2008 Bust](https://www.bloomberg.com/news/articles/2026-06-22/alan-greenspan-dies-at-100-led-fed-during-boom-before-2008-bust)
* [2026-06-22, 11:18:16](https://lobste.rs/s/r1l3en/british_columbia_time_zones_postgres) - [British Columbia, Time Zones, and Postgres](https://www.crunchydata.com/blog/british-columbia-and-time-zone-changes)
* [2026-06-22, 10:35:21](https://news.ycombinator.com/item?id=48628328) - [Manticore Search 27.1.5: Auth, sharding, conversational and faster vector search](https://manticoresearch.com/blog/manticore-search-27-1-5/)
* [2026-06-22, 09:51:10](https://lobste.rs/s/2nljgf/how_computer_should_work) - [How a Computer Should Work](https://pkgdemon.github.io/how-a-computer-should-work.html)
* [2026-06-22, 09:39:52](https://lobste.rs/s/k057yw/computing_camera_rays) - [Computing Camera Rays](https://momentsingraphics.de/CameraRays.html)
* [2026-06-22, 09:27:54](https://lobste.rs/s/uz2qia/openmw_0_51_0_released) - [OpenMW 0.51.0 Released](https://openmw.org/2026/openmw-0-51-0-released/)
* [2026-06-22, 09:02:51](https://lobste.rs/s/dh6o8k/chesterton_s_middle_finger) - [Chesterton&apos;s middle finger](https://www.arp242.net/chestersons-finger.html)
* [2026-06-22, 08:19:26](https://lobste.rs/s/0noyze/deno_desktop_apps) - [Deno Desktop apps](https://docs.deno.com/runtime/desktop/)
* [2026-06-22, 07:34:00](https://news.slashdot.org/story/26/06/22/0255256/tutor-who-took-online-tests-for-124-students-jailed-for-three-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Tutor&apos; Who Took Online Tests for 124 Students Jailed for Three Years](https://news.slashdot.org/story/26/06/22/0255256/tutor-who-took-online-tests-for-124-students-jailed-for-three-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 07:30:17](https://news.ycombinator.com/item?id=48626930) - [Codex logging bug may write TBs to local SSDs](https://github.com/openai/codex/issues/28224)
* [2026-06-22, 07:30:00](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss) - [Python Dev Saved From Disaster by Intuition...and AI](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss)
* [2026-06-22, 07:29:17](https://news.ycombinator.com/item?id=48626918) - [Investors get real-time view of UK bond market activity for the first time](https://www.fca.org.uk/news/press-releases/investors-get-real-time-view-uk-bond-market-activity-first-time)
* [2026-06-22, 07:22:03](https://news.ycombinator.com/item?id=48626866) - [GLM 5.2 vs. Opus](https://techstackups.com/comparisons/glm-5.2-vs-opus/)
* [2026-06-22, 06:07:05](https://lobste.rs/s/uuyjxb/help_i_accidentally_wigglegram) - [help i accidentally a wigglegram](https://lmao.center/blog/wiggle-accidents/)
* [2026-06-22, 05:38:40](https://news.ycombinator.com/item?id=48626137) - [Deno Desktop](https://docs.deno.com/runtime/desktop/)
* [2026-06-22, 04:50:26](https://news.ycombinator.com/item?id=48625823) - [Danish privacy activist Lars Andersen raided by police](https://twitter.com/LarsAnders1620/status/2068208864747540516#m)
* [2026-06-22, 03:49:35](https://lobste.rs/s/hhk5e0/memory_safe_inline_assembly) - [Memory Safe Inline Assembly](https://fil-c.org/inlineasm)
* [2026-06-22, 03:48:00](https://tech.slashdot.org/story/26/06/22/028235/tiktok-shows-3x-more-ai-slop-than-youtube-report-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TikTok Shows 3x More AI Slop Than YouTube, Report Finds](https://tech.slashdot.org/story/26/06/22/028235/tiktok-shows-3x-more-ai-slop-than-youtube-report-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 03:19:48](https://lobste.rs/s/mi6osr/system_call_instrumentation_on_linux_x86) - [System call instrumentation on Linux/x86-64 using memory-indirect calls (in vain?), part one](https://www.humprog.org/~stephen/blog/2026/06/15/#system-call-instrumentation-on-intel-negative-result)
* [2026-06-22, 02:47:00](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss) - [‘Popa’ Botnet Linked to Publicly-Traded Israeli Firm](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss)
* [2026-06-22, 02:08:18](https://news.ycombinator.com/item?id=48624782) - [Sakana Fugu](https://sakana.ai/fugu/)
* [2026-06-22, 01:48:00](https://linux.slashdot.org/story/26/06/22/0144240/someone-forked-systemd-over-its-new-birth-date-field?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Someone Forked systemd Over Its New Birth Date Field](https://linux.slashdot.org/story/26/06/22/0144240/someone-forked-systemd-over-its-new-birth-date-field?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 01:27:10](https://lobste.rs/s/zdundv/pivco_huffman_merge_operations) - [PivCo-Huffman “merge” operations](https://fgiesen.wordpress.com/2026/06/21/pivco-huffman-merge-operations/)
* [2026-06-22, 00:21:05](https://lobste.rs/s/gig3cr/nix_build_under_100_lines) - [nix-build in under 100 lines](https://fzakaria.com/2026/06/21/nix-build-in-under-100-lines)
* [2026-06-21, 23:27:00](https://hardware.slashdot.org/story/26/06/21/2324220/the-secret-revolution-in-battery-technology-3-d-printing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Secret Revolution in Battery Technology: 3-D Printing](https://hardware.slashdot.org/story/26/06/21/2324220/the-secret-revolution-in-battery-technology-3-d-printing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 22:55:23](https://news.ycombinator.com/item?id=48623434) - [Good results fine tuning a local LLM like Qwen 3:0.6B to categorize questions](https://www.teachmecoolstuff.com/viewarticle/fine-tuning-a-local-llm-to-categorize-questions)
* [2026-06-21, 22:52:55](https://lobste.rs/s/fb5nuv/what_can_wonky_apis_tell_us_about_web) - [What can wonky APIs tell us about the web?](https://alexwlchan.net/2026/wonky-web-apis/)
* [2026-06-21, 22:02:00](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss) - [Chinese Fab SMIC&apos;s 7nm Metal Pitch Beats Intel 18A but Lags 38% on Density, Teardown Finds](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss)
* [2026-06-21, 21:55:00](https://hardware.slashdot.org/story/26/06/21/2145245/is-tesla-planning-to-sell-modular-ai-data-center-hardware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Tesla Planning To Sell Modular AI Data Center Hardware?](https://hardware.slashdot.org/story/26/06/21/2145245/is-tesla-planning-to-sell-modular-ai-data-center-hardware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 21:40:53](https://news.ycombinator.com/item?id=48622867) - [Did my old job only exist because of fraud?](https://david.newgas.net/did-my-old-job-only-exist-because-of-fraud/)
* [2026-06-21, 21:29:43](https://news.ycombinator.com/item?id=48622778) - [Apertus – Open Foundation Model for Sovereign AI](https://apertvs.ai/)
* [2026-06-21, 21:10:32](https://news.ycombinator.com/item?id=48622626) - [Everything is logarithms](https://alexkritchevsky.com/2026/05/25/everything-is-logarithms.html)
* [2026-06-21, 21:01:35](https://lobste.rs/s/hitg0z/loupe_privacy_focused_ios_app_raises) - [loupe: A privacy-focused iOS app that raises awareness about what native apps can see](https://github.com/mysk-research/loupe)
* [2026-06-21, 20:56:01](https://news.ycombinator.com/item?id=48622518) - [There is minimal downside to switching to open models](https://www.marble.onl/posts/cancel_claude.html)
* [2026-06-21, 20:54:00](https://news.slashdot.org/story/26/06/21/2052213/uk-official-promises-statements-around-vpns-and-further-teen-restrictions-on-chatbots-and-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Official Promises Statements &apos;Around VPNs&apos; and Further Teen Restrictions on Chatbots and Social Media](https://news.slashdot.org/story/26/06/21/2052213/uk-official-promises-statements-around-vpns-and-further-teen-restrictions-on-chatbots-and-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 19:57:17](https://lobste.rs/s/lbjdlo/what_s_advice_for_llm_poisoning_artwork) - [What&apos;s the advice for LLM poisoning of artwork these days?](https://lobste.rs/s/lbjdlo/what_s_advice_for_llm_poisoning_artwork)
* [2026-06-21, 19:40:00](https://yro.slashdot.org/story/26/06/21/1939214/cops-keep-getting-arrested-for-using-flocks-cameras-to-stalk-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cops Keep Getting Arrested for Using Flock&apos;s Cameras to Stalk People](https://yro.slashdot.org/story/26/06/21/1939214/cops-keep-getting-arrested-for-using-flocks-cameras-to-stalk-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 18:51:47](https://news.ycombinator.com/item?id=48621517) - [JSON-LD explained for personal websites](https://hawksley.dev/blog/json-ld-explained-for-personal-websites/)
* [2026-06-21, 18:35:18](https://lobste.rs/s/ontg5a/amigaos_2_greatest_upgrade) - [AmigaOS 2: the greatest upgrade](https://www.datagubbe.se/os20up/)
* [2026-06-21, 18:12:00](https://linux.slashdot.org/story/26/06/21/1810200/after-six-years-of-work-and-over-360-patches-linux-72-finally-removes-bug-prone-strncpy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Six Years Of Work and Over 360 Patches, Linux 7.2 Finally Removes Bug-Prone strncpy](https://linux.slashdot.org/story/26/06/21/1810200/after-six-years-of-work-and-over-360-patches-linux-72-finally-removes-bug-prone-strncpy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 17:17:00](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss) - [Bruce Scheier&apos;s Thoughts on Banning AI Models](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss)
* [2026-06-21, 16:34:00](https://yro.slashdot.org/story/26/06/21/065246/us-bill-would-mandate-ai-chip-location-tracking-to-thwart-china-and-other-adversaries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Bill Would Mandate AI Chip Location Tracking to Thwart China and Other Adversaries](https://yro.slashdot.org/story/26/06/21/065246/us-bill-would-mandate-ai-chip-location-tracking-to-thwart-china-and-other-adversaries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 15:34:00](https://developers.slashdot.org/story/26/06/21/0149231/the-rust-ecosystem-gets-an-ai-security-engineer-in-residence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Rust Ecosystem Gets an AI Security Engineer in Residence](https://developers.slashdot.org/story/26/06/21/0149231/the-rust-ecosystem-gets-an-ai-security-engineer-in-residence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 15:08:44](https://lobste.rs/s/kn7fi8/postmarketos_v26_06_alpen_avocado) - [postmarketOS v26.06 (Alpen Avocado) released](https://postmarketos.org/blog/2026/06/21/v26.06-release/)
* [2026-06-21, 14:34:00](https://news.slashdot.org/story/26/06/21/0234252/canonicals-upcoming-ai-tool-talk-to-ubuntu-instead-of-typing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canonical&apos;s Upcoming AI Tool: Talk to Ubuntu Instead of Typing](https://news.slashdot.org/story/26/06/21/0234252/canonicals-upcoming-ai-tool-talk-to-ubuntu-instead-of-typing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 14:16:43](https://lobste.rs/s/agw0rr/performance_improvements_libffi) - [Performance improvements in libffi](https://atgreen.github.io/repl-yell/posts/libffi-plan-cache/)
* [2026-06-21, 12:49:48](https://news.ycombinator.com/item?id=48618488) - [Show HN: Teach your kids perfect pitch](https://github.com/paytonjjones/bsharp)
* [2026-06-21, 12:29:00](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss) - [NHS Palantir Claims Face Scrutiny After Data Suggests Uneven Results](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss)
* [2026-06-21, 11:34:00](https://politics.slashdot.org/story/26/06/21/0536219/new-super-pac-aims-to-rally-tech-workers-to-help-limit-ai-the-guardrails-alliance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Super PAC Aims to Rally Tech Workers to Help Limit AI:  &apos;the Guardrails Alliance&apos;](https://politics.slashdot.org/story/26/06/21/0536219/new-super-pac-aims-to-rally-tech-workers-to-help-limit-ai-the-guardrails-alliance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 10:41:47](https://lobste.rs/s/d0vsgl/is_ai_ruining_our_skills_early_results_are) - [Is AI ruining our skills? Early results are in and they’re not good](https://www.nature.com/articles/d41586-026-01947-1)
* [2026-06-21, 08:41:24](https://lobste.rs/s/5j33bp/apple_internals_swift_kernel) - [Apple Internals: Swift in the Kernel](https://blog.calif.io/p/apple-internals-swift-in-the-kernel)
* [2026-06-21, 07:42:00](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss) - [Cyberattack Sees Crops Kept In The Ground](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss)
* [2026-06-21, 07:34:00](https://yro.slashdot.org/story/26/06/21/0457230/facial-recognition-on-public-buses-kansas-city-says-yes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facial Recognition on Public Buses?  Kansas City Says Yes](https://yro.slashdot.org/story/26/06/21/0457230/facial-recognition-on-public-buses-kansas-city-says-yes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 04:34:00](https://tech.slashdot.org/story/26/06/21/0429257/polymarket-paid-dozens-to-post-videos-of-themselves-winning-with-fake-bets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Polymarket Paid Dozens to Post Videos of Themselves &apos;Winning&apos; With Fake Bets](https://tech.slashdot.org/story/26/06/21/0429257/polymarket-paid-dozens-to-post-videos-of-themselves-winning-with-fake-bets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 02:56:00](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss) - [Red Hat Gives Ubuntu A Bootc Up The Backside At Canonical Shindig](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss)
* [2026-06-20, 22:14:00](https://soylentnews.org/article.pl?sid=26/06/20/0135207&amp;from=rss) - [Where to Find the Colors Your Screen Can’t Show You](https://soylentnews.org/article.pl?sid=26/06/20/0135207&amp;from=rss)
* [2026-06-20, 18:47:52](https://lobste.rs/s/s1ep1w/is_anyone_still_using_emacs) - [Is anyone still using Emacs?](https://jmmv.dev/2026/06/is-anyone-still-using-emacs.html)
* [2026-06-20, 17:30:00](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss) - [NASA Said Nyet to Roscosmos Plan to Cut Into Leaky ISS Segment](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss)
* [2026-06-20, 12:45:00](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss) - [Critical Copilot Vulnerability Allowed Hackers to Steal 2FA Code From Users](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss)
* [2026-06-20, 09:13:55](https://news.ycombinator.com/item?id=48607671) - [Maria Isabel Sánchez Vegara on Her 100th \&quot;Little People, Big Dreams\&quot; Book](https://www.amightygirl.com/blog?p=36753)
* [2026-06-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss) - [The Challenges of Typesetting Arabic Script](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss)
* [2026-06-20, 05:43:54](https://news.ycombinator.com/item?id=48606654) - [Lisp in the Rust Type System](https://github.com/playX18/lisp-in-types/)
* [2026-06-20, 03:29:19](https://news.ycombinator.com/item?id=48606096) - [Memory Safe Inline Assembly](https://fil-c.org/inlineasm)
* [2026-06-20, 02:14:00](https://soylentnews.org/article.pl?sid=26/06/19/1216220&amp;from=rss) - [NASA Management Wants a Word and Won&apos;t Say Why](https://soylentnews.org/article.pl?sid=26/06/19/1216220&amp;from=rss)
* [2026-06-20, 01:55:16](https://news.ycombinator.com/item?id=48605561) - [Help I accidentally a wigglegram](https://lmao.center/blog/wiggle-accidents/)
* [2026-06-20, 00:42:50](https://news.ycombinator.com/item?id=48605085) - [Efficient C++ Programming for Modern 64-bit CPUs: Chapter 4/part 2](https://6it.dev/blog/infographics-operation-costs-in-cpu-clock-cycles-take-2-80736)
* [2026-06-19, 21:31:00](https://soylentnews.org/article.pl?sid=26/06/19/1212211&amp;from=rss) - [The FBI Built its Own Replica Small Town to Simulate Real-World Cyberattacks](https://soylentnews.org/article.pl?sid=26/06/19/1212211&amp;from=rss)
* [2026-06-19, 16:46:00](https://soylentnews.org/article.pl?sid=26/06/19/1210211&amp;from=rss) - [Cockroaches Scurry Around With Thousands of Pieces of Bacterial Genomes](https://soylentnews.org/article.pl?sid=26/06/19/1210211&amp;from=rss)
* [2026-06-19, 15:54:23](https://news.ycombinator.com/item?id=48599998) - [Munich 1991: The Roots of the Current AI Boom](https://people.idsia.ch/~juergen/ai-boom-roots-munich-1991.html)
* [2026-06-19, 14:30:46](https://news.ycombinator.com/item?id=48599057) - [My 1992 view of the problems of computer programming in 1992](https://blog.plover.com/prog/fortran-i.html)
* [2026-06-19, 12:00:00](https://soylentnews.org/article.pl?sid=26/06/19/120238&amp;from=rss) - [A Chinese Rocket Breaks Apart Dangerously Close to the Starlink Constellation](https://soylentnews.org/article.pl?sid=26/06/19/120238&amp;from=rss)
* [2026-06-18, 23:24:00](https://soylentnews.org/article.pl?sid=26/06/17/1523237&amp;from=rss) - [Linux Kernel 7.1 Sends Intel 486 Support To Silicon Heaven](https://soylentnews.org/article.pl?sid=26/06/17/1523237&amp;from=rss)
* [2026-06-18, 18:43:00](https://soylentnews.org/article.pl?sid=26/06/17/1519239&amp;from=rss) - [Finland Charges Russian Captain And Crew Member Of Ship Suspected Of Damaging Undersea Cables](https://soylentnews.org/article.pl?sid=26/06/17/1519239&amp;from=rss)
* [2026-06-18, 13:53:00](https://soylentnews.org/article.pl?sid=26/06/17/1517231&amp;from=rss) - [Heart Protection From COVID Shots Remains Amid Updates, Study Finds](https://soylentnews.org/article.pl?sid=26/06/17/1517231&amp;from=rss)
* [2026-06-18, 09:08:00](https://soylentnews.org/article.pl?sid=26/06/17/1140258&amp;from=rss) - [France&apos;s Digital Sovereignty Push is Struggling to Escape the Microsoft Gravity Well](https://soylentnews.org/article.pl?sid=26/06/17/1140258&amp;from=rss)
* [2026-06-18, 04:24:00](https://soylentnews.org/article.pl?sid=26/06/17/0045227&amp;from=rss) - [Why Not yserver? It’s Xserver, But Rust-y.](https://soylentnews.org/article.pl?sid=26/06/17/0045227&amp;from=rss)
