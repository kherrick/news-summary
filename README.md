# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Innovations

* [Chinese Fab SMIC's 7nm Metal Pitch Beats Intel 18A but Lags 38% on Density, Teardown Finds](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss)

* [Is Tesla Planning To Sell Modular AI Data Center Hardware?](https://hardware.slashdot.org/story/26/06/21/2145245/is-tesla-planning-to-sell-modular-ai-data-center-hardware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The Anatomy of an AI-Native Org](https://ajeygore.in/content/the-anatomy-of-an-ai-native-org)

* [Apertus – Open Foundation Model for Sovereign AI](https://apertvs.ai/)

* [Canonical's Upcoming AI Tool: Talk to Ubuntu Instead of Typing](https://news.slashdot.org/story/26/06/21/0234252/canonicals-upcoming-ai-tool-talk-to-ubuntu-instead-of-typing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The Rust Ecosystem Gets an AI Security Engineer in Residence](https://developers.slashdot.org/story/26/06/21/0149231/the-rust-ecosystem-gets-an-ai-security-engineer-in-residence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Effective use-cases for LLMs](https://aggressivelyparaphrasing.me/2026/06/21/effective-use-cases-for-llms/)

## Privacy and Cybersecurity

* [UK Official Promises Statements 'Around VPNs' and Further Teen Restrictions on Chatbots and Social Media](https://news.slashdot.org/story/26/06/21/2052213/uk-official-promises-statements-around-vpns-and-further-teen-restrictions-on-chatbots-and-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Cops Keep Getting Arrested for Using Flock's Cameras to Stalk People](https://yro.slashdot.org/story/26/06/21/1939214/cops-keep-getting-arrested-for-using-flocks-cameras-to-stalk-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [loupe: A privacy-focused iOS app that raises awareness about what native apps can see](https://github.com/mysk-research/loupe)

* [Critical Copilot Vulnerability Allowed Hackers to Steal 2FA Code From Users](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss)

* [How Millions of Digital Home Devices Are Secretly Powering Cyberattacks](https://it.slashdot.org/story/26/06/20/2321236/how-millions-of-digital-home-devices-are-secretly-powering-cyberattacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Government and Policies

* [US Bill Would Mandate AI Chip Location Tracking to Thwart China and Other Adversaries](https://yro.slashdot.org/story/26/06/21/065246/us-bill-would-mandate-ai-chip-location-tracking-to-thwart-china-and-other-adversaries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [NHS Palantir Claims Face Scrutiny After Data Suggests Uneven Results](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss)

* [Kansas City Says Yes to Facial Recognition on Public Buses](https://yro.slashdot.org/story/26/06/21/0457230/facial-recognition-on-public-buses-kansas-city-says-yes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [New Super PAC Aims to Rally Tech Workers to Help Limit AI: 'the Guardrails Alliance'](https://politics.slashdot.org/story/26/06/21/0536219/new-super-pac-aims-to-rally-tech-workers-to-help-limit-ai-the-guardrails-alliance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Development and Open Source Tools

* [Optimizing #[sqlx::test] rebuild time](https://kobzol.github.io/rust/2026/06/21/optimizing-sqlx-test-rebuild-time.html)

* [JSON-LD Explained for Personal Websites](https://hawksley.dev/blog/json-ld-explained-for-personal-websites/)

* [Djevops: Self-Host Django Easily](https://github.com/mherrmann/djevops)

* [Why Not yServer? It’s Xserver, But Rust-y.](https://soylentnews.org/article.pl?sid=26/06/17/0045227&amp;from=rss)

## Science and Exploration

* [Slow breathing modulates brain function and risk behavior](https://www.cell.com/neuron/fulltext/S0896-6273(26)00339-9)

* [NASA Said Nyet to Roscosmos Plan to Cut Into Leaky ISS Segment](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss)

* [Threads of Underground Fungal Networks Are Long Enough to Reach Beyond the Solar System](https://soylentnews.org/article.pl?sid=26/06/16/122242&amp;from=rss)

## Tech Products and Releases

* [Remembering When Alan Turing Developed a Portable Voice Encryption Device](https://it.slashdot.org/story/26/06/20/059229/remembering-when-alan-turing-developed-a-portable-voice-encryption-device?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Apple Internals: Swift in the Kernel](https://blog.calif.io/p/apple-internals-swift-in-the-kernel)

* [AmigaOS 2: the greatest upgrade](https://www.datagubbe.se/os20up/)

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

* [2026-06-21, 22:02:00](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss) - [Chinese Fab SMIC&apos;s 7nm Metal Pitch Beats Intel 18A but Lags 38% on Density, Teardown Finds](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss)
* [2026-06-21, 21:55:00](https://hardware.slashdot.org/story/26/06/21/2145245/is-tesla-planning-to-sell-modular-ai-data-center-hardware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Tesla Planning To Sell Modular AI Data Center Hardware?](https://hardware.slashdot.org/story/26/06/21/2145245/is-tesla-planning-to-sell-modular-ai-data-center-hardware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 21:34:19](https://news.ycombinator.com/item?id=48622815) - [The Anatomy of an AI-Native Org](https://ajeygore.in/content/the-anatomy-of-an-ai-native-org)
* [2026-06-21, 21:30:25](https://news.ycombinator.com/item?id=48622788) - [FDA advisors unanimously vote to approve Moderna&apos;s mRNA after agency drama](https://arstechnica.com/health/2026/06/fda-advisors-unanimously-vote-to-approve-modernas-mrna-after-agency-drama/)
* [2026-06-21, 21:29:43](https://news.ycombinator.com/item?id=48622778) - [Apertus – Open Foundation Model for Sovereign AI](https://apertvs.ai/)
* [2026-06-21, 21:23:13](https://news.ycombinator.com/item?id=48622731) - [PowerFox Browser](https://powerfox.jazzzny.me/)
* [2026-06-21, 21:10:32](https://news.ycombinator.com/item?id=48622626) - [Everything Is Logarithms](https://alexkritchevsky.com/2026/05/25/everything-is-logarithms.html)
* [2026-06-21, 21:05:37](https://news.ycombinator.com/item?id=48622590) - [Stop wasting tokens and re explaining your project between sessions](https://github.com/raiyanyahya/recall)
* [2026-06-21, 21:01:35](https://lobste.rs/s/hitg0z/loupe_privacy_focused_ios_app_raises) - [loupe: A privacy-focused iOS app that raises awareness about what native apps can see](https://github.com/mysk-research/loupe)
* [2026-06-21, 20:54:00](https://news.slashdot.org/story/26/06/21/2052213/uk-official-promises-statements-around-vpns-and-further-teen-restrictions-on-chatbots-and-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Official Promises Statements &apos;Around VPNs&apos; and Further Teen Restrictions on Chatbots and Social Media](https://news.slashdot.org/story/26/06/21/2052213/uk-official-promises-statements-around-vpns-and-further-teen-restrictions-on-chatbots-and-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 20:17:48](https://news.ycombinator.com/item?id=48622234) - [Ask for no, don&apos;t ask for yes (2022)](https://www.mooreds.com/wordpress/archives/3518)
* [2026-06-21, 19:57:17](https://lobste.rs/s/lbjdlo/what_s_advice_for_llm_poisoning_artwork) - [What&apos;s the advice for LLM poisoning of artwork these days?](https://lobste.rs/s/lbjdlo/what_s_advice_for_llm_poisoning_artwork)
* [2026-06-21, 19:40:00](https://yro.slashdot.org/story/26/06/21/1939214/cops-keep-getting-arrested-for-using-flocks-cameras-to-stalk-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cops Keep Getting Arrested for Using Flock&apos;s Cameras to Stalk People](https://yro.slashdot.org/story/26/06/21/1939214/cops-keep-getting-arrested-for-using-flocks-cameras-to-stalk-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 19:06:07](https://news.ycombinator.com/item?id=48621645) - [Show HN: CleverCrow: give tokens to your favorite projects](https://clevercrow.io)
* [2026-06-21, 18:53:58](https://lobste.rs/s/xhplww/optimizing_sqlx_test_rebuild_time) - [Optimizing #[sqlx::test] rebuild time](https://kobzol.github.io/rust/2026/06/21/optimizing-sqlx-test-rebuild-time.html)
* [2026-06-21, 18:51:47](https://news.ycombinator.com/item?id=48621517) - [JSON-LD Explained for Personal Websites](https://hawksley.dev/blog/json-ld-explained-for-personal-websites/)
* [2026-06-21, 18:35:18](https://lobste.rs/s/ontg5a/amigaos_2_greatest_upgrade) - [AmigaOS 2: the greatest upgrade](https://www.datagubbe.se/os20up/)
* [2026-06-21, 18:12:00](https://linux.slashdot.org/story/26/06/21/1810200/after-six-years-of-work-and-over-360-patches-linux-72-finally-removes-bug-prone-strncpy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Six Years Of Work and Over 360 Patches, Linux 7.2 Finally Removes Bug-Prone strncpy](https://linux.slashdot.org/story/26/06/21/1810200/after-six-years-of-work-and-over-360-patches-linux-72-finally-removes-bug-prone-strncpy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 17:17:00](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss) - [Bruce Scheier&apos;s Thoughts on Banning AI Models](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss)
* [2026-06-21, 17:01:59](https://lobste.rs/s/dus74u/remote_work_increases_social_isolation) - [Remote work increases social isolation](https://www.science.org/doi/10.1126/science.aec7671)
* [2026-06-21, 17:00:28](https://news.ycombinator.com/item?id=48620504) - [Wildcard (YC W25) is hiring an applied ML engineer](https://www.ycombinator.com/companies/wildcard/jobs/SEmo4di-founding-applied-ml-engineer)
* [2026-06-21, 17:00:26](https://news.ycombinator.com/item?id=48620502) - [Tell HN: Happy Fathers Day](https://news.ycombinator.com/item?id=48620502)
* [2026-06-21, 16:41:21](https://news.ycombinator.com/item?id=48620342) - [The minimum viable unit of saleable software](https://brandur.org/minimum-viable-unit)
* [2026-06-21, 16:34:00](https://yro.slashdot.org/story/26/06/21/065246/us-bill-would-mandate-ai-chip-location-tracking-to-thwart-china-and-other-adversaries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Bill Would Mandate AI Chip Location Tracking to Thwart China and Other Adversaries](https://yro.slashdot.org/story/26/06/21/065246/us-bill-would-mandate-ai-chip-location-tracking-to-thwart-china-and-other-adversaries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 16:08:23](https://news.ycombinator.com/item?id=48620090) - [Prefer duplication over the wrong abstraction (2016)](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction)
* [2026-06-21, 15:36:33](https://news.ycombinator.com/item?id=48619831) - [(How to Write a (Lisp) Interpreter (In Python)) (2010)](https://norvig.com/lispy.html)
* [2026-06-21, 15:34:00](https://developers.slashdot.org/story/26/06/21/0149231/the-rust-ecosystem-gets-an-ai-security-engineer-in-residence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Rust Ecosystem Gets an AI Security Engineer in Residence](https://developers.slashdot.org/story/26/06/21/0149231/the-rust-ecosystem-gets-an-ai-security-engineer-in-residence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 15:08:44](https://lobste.rs/s/kn7fi8/postmarketos_v26_06_alpen_avocado) - [postmarketOS v26.06 (Alpen Avocado) released](https://postmarketos.org/blog/2026/06/21/v26.06-release/)
* [2026-06-21, 14:34:00](https://news.slashdot.org/story/26/06/21/0234252/canonicals-upcoming-ai-tool-talk-to-ubuntu-instead-of-typing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canonical&apos;s Upcoming AI Tool: Talk to Ubuntu Instead of Typing](https://news.slashdot.org/story/26/06/21/0234252/canonicals-upcoming-ai-tool-talk-to-ubuntu-instead-of-typing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 14:29:48](https://lobste.rs/s/1jcvyh/robust_jobserver) - [Robust Jobserver](https://codeberg.org/mlugg/robust-jobserver/src/branch/main/spec.md)
* [2026-06-21, 14:16:43](https://lobste.rs/s/agw0rr/performance_improvements_libffi) - [Performance improvements in libffi](https://atgreen.github.io/repl-yell/posts/libffi-plan-cache/)
* [2026-06-21, 12:49:48](https://news.ycombinator.com/item?id=48618488) - [Show HN: Teach your kids perfect pitch](https://github.com/paytonjjones/bsharp)
* [2026-06-21, 12:44:13](https://news.ycombinator.com/item?id=48618455) - [Identity verification on Claude](https://support.claude.com/en/articles/14328960-identity-verification-on-claude)
* [2026-06-21, 12:29:00](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss) - [NHS Palantir Claims Face Scrutiny After Data Suggests Uneven Results](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss)
* [2026-06-21, 11:38:01](https://news.ycombinator.com/item?id=48617990) - [Beyond All Reason (Free Total Annihilation Inspired RTS)](https://www.beyondallreason.info)
* [2026-06-21, 11:34:00](https://politics.slashdot.org/story/26/06/21/0536219/new-super-pac-aims-to-rally-tech-workers-to-help-limit-ai-the-guardrails-alliance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Super PAC Aims to Rally Tech Workers to Help Limit AI:  &apos;the Guardrails Alliance&apos;](https://politics.slashdot.org/story/26/06/21/0536219/new-super-pac-aims-to-rally-tech-workers-to-help-limit-ai-the-guardrails-alliance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 10:41:47](https://lobste.rs/s/d0vsgl/is_ai_ruining_our_skills_early_results_are) - [Is AI ruining our skills? Early results are in and they’re not good](https://www.nature.com/articles/d41586-026-01947-1)
* [2026-06-21, 08:41:24](https://lobste.rs/s/5j33bp/apple_internals_swift_kernel) - [Apple Internals: Swift in the Kernel](https://blog.calif.io/p/apple-internals-swift-in-the-kernel)
* [2026-06-21, 08:04:54](https://news.ycombinator.com/item?id=48616713) - [A 3D voxel game engine written in APL](https://github.com/namgyaaal/avoxelgame)
* [2026-06-21, 07:42:00](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss) - [Cyberattack Sees Crops Kept In The Ground](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss)
* [2026-06-21, 07:34:00](https://yro.slashdot.org/story/26/06/21/0457230/facial-recognition-on-public-buses-kansas-city-says-yes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facial Recognition on Public Buses?  Kansas City Says Yes](https://yro.slashdot.org/story/26/06/21/0457230/facial-recognition-on-public-buses-kansas-city-says-yes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 07:19:03](https://lobste.rs/s/wgpa6x/cl_bbs_schemebbs_like_textboard) - [cl-bbs: the schemeBBS-like textboard rewritten in Common Lisp](https://github.com/ryukinix/cl-bbs)
* [2026-06-21, 06:26:30](https://lobste.rs/s/xtuz4x/improvements_std_format_c_26) - [Improvements to std::format in C++26](https://mariusbancila.ro/blog/2026/06/19/improvements-to-stdformat-in-c26/)
* [2026-06-21, 06:24:43](https://lobste.rs/s/vutq1m/windows_ui_evolution_clicking) - [Windows UI evolution: Clicking an unassociated file](https://movq.de/blog/postings/2026-06-20/0/POSTING-en.html)
* [2026-06-21, 05:35:25](https://lobste.rs/s/z4vrld/mark_web_pinning_installers_sites) - [Mark-of-the-web and pinning installers to sites](https://blog.randomoracle.io/2026/06/20/mark-of-the-web-and-pinning-installers-to-sites/)
* [2026-06-21, 04:37:33](https://lobste.rs/s/77kygu/effective_use_cases_for_llms) - [Effective use-cases for LLMs](https://aggressivelyparaphrasing.me/2026/06/21/effective-use-cases-for-llms/)
* [2026-06-21, 04:34:00](https://tech.slashdot.org/story/26/06/21/0429257/polymarket-paid-dozens-to-post-videos-of-themselves-winning-with-fake-bets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Polymarket Paid Dozens to Post Videos of Themselves &apos;Winning&apos; With Fake Bets](https://tech.slashdot.org/story/26/06/21/0429257/polymarket-paid-dozens-to-post-videos-of-themselves-winning-with-fake-bets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 02:56:00](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss) - [Red Hat Gives Ubuntu A Bootc Up The Backside At Canonical Shindig](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss)
* [2026-06-21, 01:42:03](https://lobste.rs/s/zng304/sockmap_tcp_splicing_future_2019) - [SOCKMAP - TCP splicing of the future (2019)](https://blog.cloudflare.com/sockmap-tcp-splicing-of-the-future/)
* [2026-06-21, 01:35:40](https://news.ycombinator.com/item?id=48614844) - [Developers don&apos;t understand CORS (2019)](https://fosterelli.co/developers-dont-understand-cors)
* [2026-06-21, 01:34:00](https://games.slashdot.org/story/26/06/21/0027229/gamers-sue-playstation-its-not-clear-theyre-selling-licenses-rather-than-ownership-of-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gamers Sue PlayStation:  It&apos;s Not Clear They&apos;re Selling Licenses Rather Than Ownership of Games](https://games.slashdot.org/story/26/06/21/0027229/gamers-sue-playstation-its-not-clear-theyre-selling-licenses-rather-than-ownership-of-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 23:23:00](https://it.slashdot.org/story/26/06/20/2321236/how-millions-of-digital-home-devices-are-secretly-powering-cyberattacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Millions of Digital Home Devices Are Secretly Powering Cyberattacks](https://it.slashdot.org/story/26/06/20/2321236/how-millions-of-digital-home-devices-are-secretly-powering-cyberattacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 23:06:02](https://lobste.rs/s/iscvsu/ansel_better_future_for_darktable) - [Ansel: The Better Future for Darktable](https://www.youtube.com/watch?v=1R7gdfJVH9Q)
* [2026-06-20, 22:58:59](https://lobste.rs/s/m36bsm/wholesale_plagiarism_obscure_sorrows) - [The Wholesale Plagiarism of Obscure Sorrows](https://waxy.org/2026/06/the-wholesale-plagiarism-of-obscure-sorrows/)
* [2026-06-20, 22:22:52](https://news.ycombinator.com/item?id=48613555) - [Slow breathing modulates brain function and risk behavior](https://www.cell.com/neuron/fulltext/S0896-6273(26)00339-9)
* [2026-06-20, 22:14:00](https://soylentnews.org/article.pl?sid=26/06/20/0135207&amp;from=rss) - [Where to Find the Colors Your Screen Can’t Show You](https://soylentnews.org/article.pl?sid=26/06/20/0135207&amp;from=rss)
* [2026-06-20, 21:34:00](https://science.slashdot.org/story/26/06/20/202204/openai-announces-benchmarks-for-ai-life-sciences-research-its-best-model-failed-639-of-the-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Announces Benchmarks for AI Life Sciences Research. Its Best Model Failed 63.9% of the Test](https://science.slashdot.org/story/26/06/20/202204/openai-announces-benchmarks-for-ai-life-sciences-research-its-best-model-failed-639-of-the-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 20:34:00](https://it.slashdot.org/story/26/06/20/059229/remembering-when-alan-turing-developed-a-portable-voice-encryption-device?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Remembering When Alan Turing Developed a Portable Voice Encryption Device](https://it.slashdot.org/story/26/06/20/059229/remembering-when-alan-turing-developed-a-portable-voice-encryption-device?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 19:34:00](https://slashdot.org/story/26/06/20/0556251/tech-pundit-cringely-co-founds-startup-2brains-inc-to-solve-llm-hallucinations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Pundit Cringely Co-Founds Startup &apos;2Brains Inc&apos; to Solve LLM Hallucinations](https://slashdot.org/story/26/06/20/0556251/tech-pundit-cringely-co-founds-startup-2brains-inc-to-solve-llm-hallucinations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 18:47:52](https://lobste.rs/s/s1ep1w/is_anyone_still_using_emacs) - [Is anyone still using Emacs?](https://jmmv.dev/2026/06/is-anyone-still-using-emacs.html)
* [2026-06-20, 17:30:00](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss) - [NASA Said Nyet to Roscosmos Plan to Cut Into Leaky ISS Segment](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss)
* [2026-06-20, 17:11:59](https://lobste.rs/s/watrw9/ocaml_5_5_0_released) - [OCaml 5.5.0 released](https://discuss.ocaml.org/t/ocaml-5-5-0-released/18265)
* [2026-06-20, 16:02:54](https://lobste.rs/s/xb4qgt/announcing_next_generation_distrobox) - [Announcing the next generation of Distrobox](https://distrobox.it/posts/announcing_distrobox_next/)
* [2026-06-20, 14:16:10](https://lobste.rs/s/pida8e/i_stored_website_favicon) - [I Stored a Website in a Favicon](https://www.timwehrle.de/blog/i-stored-a-website-in-a-favicon/)
* [2026-06-20, 12:45:00](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss) - [Critical Copilot Vulnerability Allowed Hackers to Steal 2FA Code From Users](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss)
* [2026-06-20, 12:08:23](https://news.ycombinator.com/item?id=48608645) - [Loupe – A iOS app that raises awareness about what native apps can see](https://github.com/mysk-research/loupe)
* [2026-06-20, 11:55:03](https://news.ycombinator.com/item?id=48608570) - [Show HN: TownSquare, a tiny presence layer for websites](https://townsquare.cauenapier.com/)
* [2026-06-20, 10:02:17](https://lobste.rs/s/gdwaqt/town_square_community_deserves) - [Town Square, the community deserves connection](https://cauenapier.com/blog/town-square-the-community-deserves-connection/)
* [2026-06-20, 08:36:23](https://lobste.rs/s/dswkwr/meet_alice_alice_is_impatient) - [Meet Alice. Alice is impatient](https://brooker.co.za/blog/2026/06/19/waiting.html)
* [2026-06-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss) - [The Challenges of Typesetting Arabic Script](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss)
* [2026-06-20, 07:42:32](https://lobste.rs/s/ew22ks/there_are_no_instances_atproto) - [There Are No Instances in atproto](https://overreacted.io/there-are-no-instances-in-atproto/)
* [2026-06-20, 02:14:00](https://soylentnews.org/article.pl?sid=26/06/19/1216220&amp;from=rss) - [NASA Management Wants a Word and Won&apos;t Say Why](https://soylentnews.org/article.pl?sid=26/06/19/1216220&amp;from=rss)
* [2026-06-19, 21:31:00](https://soylentnews.org/article.pl?sid=26/06/19/1212211&amp;from=rss) - [The FBI Built its Own Replica Small Town to Simulate Real-World Cyberattacks](https://soylentnews.org/article.pl?sid=26/06/19/1212211&amp;from=rss)
* [2026-06-19, 16:46:00](https://soylentnews.org/article.pl?sid=26/06/19/1210211&amp;from=rss) - [Cockroaches Scurry Around With Thousands of Pieces of Bacterial Genomes](https://soylentnews.org/article.pl?sid=26/06/19/1210211&amp;from=rss)
* [2026-06-19, 16:28:19](https://news.ycombinator.com/item?id=48600311) - [Proportional-Integral-Derivative (PID) controllers](https://en.wikipedia.org/wiki/PID_controller)
* [2026-06-19, 15:13:11](https://news.ycombinator.com/item?id=48599555) - [Running MicroVMs in Proxmox VE, the Easy Way](https://taoofmac.com/space/blog/2026/06/18/1845)
* [2026-06-19, 12:00:00](https://soylentnews.org/article.pl?sid=26/06/19/120238&amp;from=rss) - [A Chinese Rocket Breaks Apart Dangerously Close to the Starlink Constellation](https://soylentnews.org/article.pl?sid=26/06/19/120238&amp;from=rss)
* [2026-06-19, 11:59:56](https://news.ycombinator.com/item?id=48597592) - [Cocktail Optimization, an Integer Programming Problem](https://bunkum.us/2026/06/18/cocktail-ingredients-milp)
* [2026-06-19, 02:10:16](https://news.ycombinator.com/item?id=48594090) - [An Embedded Linux on a Single Floppy](https://github.com/w84death/floppinux)
* [2026-06-18, 23:24:00](https://soylentnews.org/article.pl?sid=26/06/17/1523237&amp;from=rss) - [Linux Kernel 7.1 Sends Intel 486 Support To Silicon Heaven](https://soylentnews.org/article.pl?sid=26/06/17/1523237&amp;from=rss)
* [2026-06-18, 18:43:00](https://soylentnews.org/article.pl?sid=26/06/17/1519239&amp;from=rss) - [Finland Charges Russian Captain And Crew Member Of Ship Suspected Of Damaging Undersea Cables](https://soylentnews.org/article.pl?sid=26/06/17/1519239&amp;from=rss)
* [2026-06-18, 13:53:00](https://soylentnews.org/article.pl?sid=26/06/17/1517231&amp;from=rss) - [Heart Protection From COVID Shots Remains Amid Updates, Study Finds](https://soylentnews.org/article.pl?sid=26/06/17/1517231&amp;from=rss)
* [2026-06-18, 12:22:36](https://news.ycombinator.com/item?id=48584261) - [15-minute at-home Lyme disease tick test](https://www.bostonglobe.com/2026/06/17/business/lyme-disease-tick-test/)
* [2026-06-18, 09:08:00](https://soylentnews.org/article.pl?sid=26/06/17/1140258&amp;from=rss) - [France&apos;s Digital Sovereignty Push is Struggling to Escape the Microsoft Gravity Well](https://soylentnews.org/article.pl?sid=26/06/17/1140258&amp;from=rss)
* [2026-06-18, 08:47:48](https://news.ycombinator.com/item?id=48582629) - [Djevops: Self-Host Django Easily](https://github.com/mherrmann/djevops)
* [2026-06-18, 04:24:00](https://soylentnews.org/article.pl?sid=26/06/17/0045227&amp;from=rss) - [Why Not yserver? It’s Xserver, But Rust-y.](https://soylentnews.org/article.pl?sid=26/06/17/0045227&amp;from=rss)
* [2026-06-17, 23:35:00](https://soylentnews.org/article.pl?sid=26/06/16/122242&amp;from=rss) - [Threads of Underground Fungal Networks Are Long Enough to Reach Beyond the Solar System](https://soylentnews.org/article.pl?sid=26/06/16/122242&amp;from=rss)
* [2026-06-17, 18:52:00](https://soylentnews.org/article.pl?sid=26/06/16/1144213&amp;from=rss) - [U.S. Gov&apos;t Orders Anthropic to Disable its Newest AI Models and Restrict Foreigner Use](https://soylentnews.org/article.pl?sid=26/06/16/1144213&amp;from=rss)
* [2026-06-17, 14:35:23](https://news.ycombinator.com/item?id=48571136) - [Occupancy Math on the AMD MI355X: A From-First-Principles Guide](https://indianspeedster.github.io/blog/occupancy-math-mi355x/)
* [2026-06-17, 14:08:00](https://soylentnews.org/article.pl?sid=26/06/16/1139240&amp;from=rss) - [Brick Your Phone Temporarily to Aid Fiction-Maxxing](https://soylentnews.org/article.pl?sid=26/06/16/1139240&amp;from=rss)
* [2026-06-17, 09:25:00](https://soylentnews.org/article.pl?sid=26/06/16/0055252&amp;from=rss) - [EU Auto Giants Call For &apos;Made In Europe&apos; Incentives Amid Rising Chinese Competition](https://soylentnews.org/article.pl?sid=26/06/16/0055252&amp;from=rss)
* [2026-06-17, 07:03:59](https://news.ycombinator.com/item?id=48566824) - [System call instrumentation on Linux/x86‑64 using memory‑indirect calls, part I](https://www.humprog.org/~stephen/blog/2026/06/15/#system-call-instrumentation-on-intel-negative-result)
* [2026-06-17, 04:33:00](https://soylentnews.org/article.pl?sid=26/06/16/0054257&amp;from=rss) - [Man Jailed for a Month Despite Flock Showing He Was 5 Miles From Crime Scene](https://soylentnews.org/article.pl?sid=26/06/16/0054257&amp;from=rss)
