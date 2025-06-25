# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Gaming Performance

* [Games Run Faster On SteamOS Than Windows 11, Ars Testing Finds](https://games.slashdot.org/story/25/06/25/2034243/games-run-faster-on-steamos-than-windows-11-ars-testing-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Ars Technica tests reveal better gaming performance on SteamOS compared to Windows 11.

* [Games run faster on SteamOS than Windows 11, Ars testing finds](https://arstechnica.com/gaming/2025/06/games-run-faster-on-steamos-than-windows-11-ars-testing-finds/) - A detailed discussion exploring gaming benchmarks for SteamOS and Windows 11.

## AI and Software Development

* [Mozilla Formally Discontinues Its DeepSpeech Project](https://tech.slashdot.org/story/25/06/25/1851201/mozilla-formally-discontinues-its-deepspeech-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Mozilla ends its open-source speech-to-text project citing resource challenges.

* [Coccinelle for Rust progress report](https://www.collabora.com/news-and-blog/blog/2025/06/25/coccinelle-for-rust-progress-report/) - Updates on the adoption of Coccinelle for facilitating advanced Rust code transformations.

* [Gemini CLI: your open-source AI agent](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/) - Google debuts Gemini CLI, an open-source tool simplifying AI integrations.

* [Negative Two-Thousand Lines of Code](https://www.folklore.org/StoryView.py?story=Negative_2000_Lines_Of_Code.txt) - Reflecting on past software optimizations and their surprising outcomes.

## Scientific Developments

* [Stem Cell Treatment May Cure Severe Type 1 Diabetes, Study Finds](https://science.slashdot.org/story/25/06/25/026238/stem-cell-treatment-may-cure-severe-type-1-diabetes-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A new therapeutic breakthrough in diabetes treatment is discussed.

* [Researchers Discover How Caffeine Could Slow Cellular Aging](https://science.slashdot.org/story/25/06/25/0112252/researchers-discover-how-caffeine-could-slow-cellular-aging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Researchers link caffeine to delayed cellular aging mechanisms.

* [Overfishing Has Caused Cod To Halve in Body Size Since 1990s, Study Finds](https://science.slashdot.org/story/25/06/25/1842223/overfishing-has-caused-cod-to-halve-in-body-size-since-1990s-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Overfishing impacts cod populations following decades of exploitation.

## Policy and Societal Changes

* [Lyon Abandons Microsoft Office To Strengthen 'Digital Sovereignty'](https://slashdot.org/story/25/06/25/1757229/lyon-abandons-microsoft-office-to-strengthen-digital-sovereignty?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The French city ditches proprietary software to enhance digital autonomy.

* [Bernie Sanders Says If AI Makes Us So Productive, We Should Get a 4-Day Work Week](https://slashdot.org/story/25/06/25/194207/bernie-sanders-says-if-ai-makes-us-so-productive-we-should-get-a-4-day-work-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Advocacy for reduced workweeks gains traction as AI adoption rises.

* [America’s incarceration rate is in decline](https://www.theatlantic.com/ideas/archive/2025/06/prisoner-populations-are-plummeting/683310/) - Analysis highlights positive shifts in incarceration trends across the U.S.

## Engineering and Innovations

* [A new pyramid-like shape always lands the same side up](https://www.quantamagazine.org/a-new-pyramid-like-shape-always-lands-the-same-side-up-20250625/) - Insights into a novel geometric discovery with fascinating physical properties.

* [Building a Monostable Tetrahedron](https://arxiv.org/abs/2506.19244) - Discovering structures that return to the same orientation upon landing.

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

* [2025-06-25, 21:30:00](https://games.slashdot.org/story/25/06/25/2034243/games-run-faster-on-steamos-than-windows-11-ars-testing-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Games Run Faster On SteamOS Than Windows 11, Ars Testing Finds](https://games.slashdot.org/story/25/06/25/2034243/games-run-faster-on-steamos-than-windows-11-ars-testing-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 21:17:21](https://lobste.rs/s/5ds35n/coding_material_world) - [Coding in a material world](https://deadsimpletech.com/blog/material_girl)
* [2025-06-25, 20:50:00](https://science.slashdot.org/story/25/06/25/1842223/overfishing-has-caused-cod-to-halve-in-body-size-since-1990s-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Overfishing Has Caused Cod To Halve in Body Size Since 1990s, Study Finds](https://science.slashdot.org/story/25/06/25/1842223/overfishing-has-caused-cod-to-halve-in-body-size-since-1990s-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 20:10:00](https://tech.slashdot.org/story/25/06/25/1851201/mozilla-formally-discontinues-its-deepspeech-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Formally Discontinues Its DeepSpeech Project](https://tech.slashdot.org/story/25/06/25/1851201/mozilla-formally-discontinues-its-deepspeech-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 20:08:26](https://news.ycombinator.com/item?id=44381358) - [Microsoft Dependency Has Risks](https://blog.miloslavhomer.cz/p/microsoft-dependency-has-risks)
* [2025-06-25, 20:01:07](https://news.ycombinator.com/item?id=44381297) - [A new pyramid-like shape always lands the same side up](https://www.quantamagazine.org/a-new-pyramid-like-shape-always-lands-the-same-side-up-20250625/)
* [2025-06-25, 20:00:38](https://news.ycombinator.com/item?id=44381292) - [Building a Monostable Tetrahedron](https://arxiv.org/abs/2506.19244)
* [2025-06-25, 19:53:13](https://news.ycombinator.com/item?id=44381252) - [Negative Two-Thousand Lines of Code](https://www.folklore.org/StoryView.py?story=Negative_2000_Lines_Of_Code.txt)
* [2025-06-25, 19:42:57](https://news.ycombinator.com/item?id=44381168) - [The Offline Club](https://www.theoffline-club.com)
* [2025-06-25, 19:40:10](https://news.ycombinator.com/item?id=44381144) - [Games run faster on SteamOS than Windows 11, Ars testing finds](https://arstechnica.com/gaming/2025/06/games-run-faster-on-steamos-than-windows-11-ars-testing-finds/)
* [2025-06-25, 19:36:55](https://news.ycombinator.com/item?id=44381093) - [Libxml2&apos;s \&quot;no security embargoes\&quot; policy](https://lwn.net/SubscriberLink/1025971/73f269ad3695186d/)
* [2025-06-25, 19:30:00](https://slashdot.org/story/25/06/25/194207/bernie-sanders-says-if-ai-makes-us-so-productive-we-should-get-a-4-day-work-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bernie Sanders Says If AI Makes Us So Productive, We Should Get a 4-Day Work Week](https://slashdot.org/story/25/06/25/194207/bernie-sanders-says-if-ai-makes-us-so-productive-we-should-get-a-4-day-work-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 19:29:43](https://lobste.rs/s/3jfcg7/postgresql_branching_xata_vs_neon_vs) - [PostgreSQL Branching: Xata vs. Neon vs. Supabase](https://xata.io/blog/neon-vs-supabase-vs-xata-postgres-branching-part-2)
* [2025-06-25, 19:20:23](https://news.ycombinator.com/item?id=44380955) - [Coccinelle for Rust progress report](https://www.collabora.com/news-and-blog/blog/2025/06/25/coccinelle-for-rust-progress-report/)
* [2025-06-25, 18:50:00](https://slashdot.org/story/25/06/25/1757229/lyon-abandons-microsoft-office-to-strengthen-digital-sovereignty?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lyon Abandons Microsoft Office To Strengthen &apos;Digital Sovereignty&apos;](https://slashdot.org/story/25/06/25/1757229/lyon-abandons-microsoft-office-to-strengthen-digital-sovereignty?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 18:11:00](https://news.slashdot.org/story/25/06/25/1648236/majority-of-us-k-12-teachers-now-using-ai-for-lesson-planning-grading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Majority of US K-12 Teachers Now Using AI for Lesson Planning, Grading](https://news.slashdot.org/story/25/06/25/1648236/majority-of-us-k-12-teachers-now-using-ai-for-lesson-planning-grading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 18:07:02](https://news.ycombinator.com/item?id=44380185) - [Better Auth, by a self-taught Ethiopian dev, raises $5M from Peak XV, YC](https://techcrunch.com/2025/06/25/this-self-taught-ethiopian-dev-built-an-authentication-tool-and-got-into-yc/)
* [2025-06-25, 18:03:25](https://lobste.rs/s/p1rxnb/scales_as_multipermutations_0_1_into) - [Scales as Multipermutations of 0 and 1 into Twelve Places](https://petecorey.com/blog/2025/06/25/scales-as-multipermutations-of-0-and-1-into-twelve-places/)
* [2025-06-25, 17:30:00](https://developers.slashdot.org/story/25/06/25/1730250/the-computer-science-bubble-is-bursting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The Computer-Science Bubble Is Bursting&apos;](https://developers.slashdot.org/story/25/06/25/1730250/the-computer-science-bubble-is-bursting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 17:30:00](https://soylentnews.org/article.pl?sid=25/06/24/1256227&amp;from=rss) - [New Research Provides First Evidence of the Use of Browser Fingerprints for Online Tracking](https://soylentnews.org/article.pl?sid=25/06/24/1256227&amp;from=rss)
* [2025-06-25, 17:27:35](https://news.ycombinator.com/item?id=44379792) - [LM Studio is now an MCP Host](https://lmstudio.ai/blog/lmstudio-v0.3.17)
* [2025-06-25, 17:15:45](https://news.ycombinator.com/item?id=44379688) - [DeepSpeech Is Discontinued (2020)](https://github.com/mozilla/DeepSpeech)
* [2025-06-25, 17:14:35](https://news.ycombinator.com/item?id=44379673) - [Build and Host AI-Powered Apps with Claude – No Deployment Needed](https://www.anthropic.com/news/claude-powered-artifacts)
* [2025-06-25, 17:14:29](https://news.ycombinator.com/item?id=44379670) - [America’s incarceration rate is in decline](https://www.theatlantic.com/ideas/archive/2025/06/prisoner-populations-are-plummeting/683310/)
* [2025-06-25, 17:08:44](https://news.ycombinator.com/item?id=44379606) - [What Problems to Solve (1966)](http://genius.cat-v.org/richard-feynman/writtings/letters/problems)
* [2025-06-25, 17:00:41](https://news.ycombinator.com/item?id=44379509) - [FurtherAI (YC W24) Is Hiring for Software and AI Roles](https://www.ycombinator.com/companies/furtherai/jobs)
* [2025-06-25, 16:40:00](https://yro.slashdot.org/story/25/06/25/1619215/how-foreign-scammers-use-us-banks-to-fleece-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Foreign Scammers Use U.S. Banks to Fleece Americans](https://yro.slashdot.org/story/25/06/25/1619215/how-foreign-scammers-use-us-banks-to-fleece-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 16:35:56](https://news.ycombinator.com/item?id=44379191) - [Interstellar Flight: Perspectives and Patience](https://www.centauri-dreams.org/2025/06/25/interstellar-flight-perspectives-and-patience/)
* [2025-06-25, 16:34:51](https://news.ycombinator.com/item?id=44379173) - [Iroh: A library to establish direct connection between peers](https://github.com/n0-computer/iroh)
* [2025-06-25, 16:21:45](https://news.ycombinator.com/item?id=44379034) - [Getting ready to issue IP address certificates](https://community.letsencrypt.org/t/getting-ready-to-issue-ip-address-certificates/238777)
* [2025-06-25, 16:19:46](https://lobste.rs/s/ljfoxr/getting_ready_issue_ip_address) - [Getting ready to issue IP address certificates](https://community.letsencrypt.org/t/getting-ready-to-issue-ip-address-certificates/238777)
* [2025-06-25, 16:00:00](https://it.slashdot.org/story/25/06/25/156239/hdmi-22-finalized-with-96-gbs-bandwidth-16k-resolution-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HDMI 2.2 Finalized with 96 GB/s Bandwidth, 16K Resolution Support](https://it.slashdot.org/story/25/06/25/156239/hdmi-22-finalized-with-96-gbs-bandwidth-16k-resolution-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 15:50:50](https://lobste.rs/s/whprju/coding_independent_code_points_cicp_png) - [Coding Independent Code Points (cICP) in PNG, explained](https://svgees.us/blog/cICP.html)
* [2025-06-25, 15:47:02](https://lobste.rs/s/utj83j/deep_down_rabbit_hole_bash_overlayfs_30) - [Deep down the rabbit hole: Bash, OverlayFS, and a 30-year-old surprise](https://sigma-star.at/blog/2025/06/deep-down-the-rabbit-hole-bash-overlayfs-and-a-30-year-old-surprise/)
* [2025-06-25, 15:33:20](https://news.ycombinator.com/item?id=44378486) - [Web Embeddable Common Lisp](https://turtleware.eu/static/paste/wecl-test-gl/main.html)
* [2025-06-25, 15:31:47](https://lobste.rs/s/gxly2u/web_embeddable_common_lisp) - [Web Embeddable Common Lisp](https://turtleware.eu/static/paste/wecl-test-gl/main.html)
* [2025-06-25, 15:20:00](https://science.slashdot.org/story/25/06/25/026238/stem-cell-treatment-may-cure-severe-type-1-diabetes-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stem Cell Treatment May Cure Severe Type 1 Diabetes, Study Finds](https://science.slashdot.org/story/25/06/25/026238/stem-cell-treatment-may-cure-severe-type-1-diabetes-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 15:05:17](https://lobste.rs/s/wycybo/openai_charges_by_minute_so_make_minutes) - [OpenAI Charges by the Minute, So Make the Minutes Shorter](https://george.mand.is/2025/06/openai-charges-by-the-minute-so-make-the-minutes-shorter/)
* [2025-06-25, 15:01:26](https://lobste.rs/s/dqz4ye/what_s_new_gleam_1_11) - [What&apos;s new in Gleam 1.11](https://www.youtube.com/watch?v=AKIZG0Dq3Bc)
* [2025-06-25, 15:00:00](https://news.ycombinator.com/item?id=44378127) - [Bot or human? Creating an invisible Turing test for the internet](https://research.roundtable.ai/proof-of-human/)
* [2025-06-25, 14:40:00](https://news.slashdot.org/story/25/06/25/0146212/australia-regulator-and-youtube-spar-over-under-16s-social-media-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia Regulator and YouTube Spar Over Under-16s Social Media Ban](https://news.slashdot.org/story/25/06/25/0146212/australia-regulator-and-youtube-spar-over-under-16s-social-media-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 14:22:46](https://lobste.rs/s/jbzmbp/how_keys_are_used_filevault_encryption) - [How keys are used in FileVault and encryption](https://eclecticlight.co/2025/06/25/how-keys-are-used-in-filevault-and-encryption/)
* [2025-06-25, 14:22:23](https://lobste.rs/s/ntl2iw/how_write_compelling_release) - [How to Write Compelling Release Announcements](https://refactoringenglish.com/chapters/release-announcements/)
* [2025-06-25, 14:05:13](https://news.ycombinator.com/item?id=44377495) - [Is Lovable getting monetization wrong?](https://getlago.substack.com/p/lovable-makes-60m-in-6-monthsbut)
* [2025-06-25, 14:00:00](https://tech.slashdot.org/story/25/06/25/0135219/intel-will-shut-down-its-automotive-business-lay-off-most-of-the-departments-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Will Shut Down Its Automotive Business, Lay Off Most of the Department&apos;s Employees](https://tech.slashdot.org/story/25/06/25/0135219/intel-will-shut-down-its-automotive-business-lay-off-most-of-the-departments-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 13:29:32](https://lobste.rs/s/3ste25/abusing_copyright_strings_trick) - [Abusing copyright strings to trick software into thinking it&apos;s running on your competitor&apos;s PC](https://devblogs.microsoft.com/oldnewthing/20250624-00/?p=111299)
* [2025-06-25, 13:28:10](https://lobste.rs/s/f9xdsg/gemini_cli_your_open_source_ai_agent) - [Gemini CLI: your open-source AI agent](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/)
* [2025-06-25, 13:17:25](https://news.ycombinator.com/item?id=44376989) - [OpenAI charges by the minute, so speed up your audio](https://george.mand.is/2025/06/openai-charges-by-the-minute-so-make-the-minutes-shorter/)
* [2025-06-25, 13:10:46](https://news.ycombinator.com/item?id=44376919) - [Gemini CLI](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/)
* [2025-06-25, 13:00:11](https://lobste.rs/s/t8yq3x/reading_nfc_passport_chips_linux) - [Reading NFC Passport Chips in Linux](https://shkspr.mobi/blog/2025/06/reading-nfc-passport-chips-in-linux/)
* [2025-06-25, 13:00:00](https://news.slashdot.org/story/25/06/25/0127214/google-rolls-out-street-view-time-travel-to-celebrate-20-years-of-google-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Rolls Out Street View Time Travel To Celebrate 20 Years of Google Earth](https://news.slashdot.org/story/25/06/25/0127214/google-rolls-out-street-view-time-travel-to-celebrate-20-years-of-google-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 12:45:00](https://soylentnews.org/article.pl?sid=25/06/24/0336243&amp;from=rss) - [Apple to Australians: You&apos;re Too Stupid to Choose Your Own Apps](https://soylentnews.org/article.pl?sid=25/06/24/0336243&amp;from=rss)
* [2025-06-25, 11:28:22](https://lobste.rs/s/shxzwu/interactive_handbook_on_data_structures) - [Interactive Handbook on Data Structures and Algorithms](https://cartesian.app/)
* [2025-06-25, 10:12:38](https://lobste.rs/s/miklrg/inspecting_service_traffic_with_mirrord) - [Inspecting Service Traffic with mirrord dump](https://metalbear.co/blog/mirrord-dump/)
* [2025-06-25, 10:02:54](https://lobste.rs/s/zetevz/printing_web_making_webpages_look_good_on) - [Printing the web: making webpages look good on paper](https://piccalil.li/blog/printing-the-web-making-webpages-look-good-on-paper/)
* [2025-06-25, 10:00:00](https://yro.slashdot.org/story/25/06/25/0121227/health-secretary-wants-every-american-to-be-sporting-a-wearable-within-four-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Health Secretary Wants Every American To Be Sporting a Wearable Within Four Years](https://yro.slashdot.org/story/25/06/25/0121227/health-secretary-wants-every-american-to-be-sporting-a-wearable-within-four-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 08:02:00](https://soylentnews.org/article.pl?sid=25/06/24/0044241&amp;from=rss) - [UK Retail&apos;s Estimated Cyberattack Costs Pegged at $500M](https://soylentnews.org/article.pl?sid=25/06/24/0044241&amp;from=rss)
* [2025-06-25, 07:33:59](https://news.ycombinator.com/item?id=44374574) - [Reading NFC Passport Chips in Linux](https://shkspr.mobi/blog/2025/06/reading-nfc-passport-chips-in-linux/)
* [2025-06-25, 07:00:00](https://science.slashdot.org/story/25/06/25/0112252/researchers-discover-how-caffeine-could-slow-cellular-aging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Discover How Caffeine Could Slow Cellular Aging](https://science.slashdot.org/story/25/06/25/0112252/researchers-discover-how-caffeine-could-slow-cellular-aging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 03:18:00](https://soylentnews.org/article.pl?sid=25/06/24/0039212&amp;from=rss) - [BEV Battery Swapping in Shanghai](https://soylentnews.org/article.pl?sid=25/06/24/0039212&amp;from=rss)
* [2025-06-25, 01:28:34](https://lobste.rs/s/ccit25/build_your_first_ios_app_on_linux_windows) - [Build your first iOS app on Linux / Windows](https://xtool.sh/tutorials/xtool/first-app)
* [2025-06-24, 22:36:00](https://soylentnews.org/article.pl?sid=25/06/24/0032246&amp;from=rss) - [Peru Gas Workers Find Thousand-Year-Old Mummy](https://soylentnews.org/article.pl?sid=25/06/24/0032246&amp;from=rss)
* [2025-06-24, 20:46:13](https://lobste.rs/s/nwtkom/fun_with_uv_pep_723) - [Fun with uv and PEP 723](https://www.cottongeeks.com/articles/2025-06-24-fun-with-uv-and-pep-723)
* [2025-06-24, 19:20:11](https://lobste.rs/s/chbuzy/lisp_adventure_on_calm_waters_dead_c) - [A Lisp adventure on the calm waters of the dead C](https://mihaiolteanu.me/language-abstractions)
* [2025-06-24, 18:56:51](https://lobste.rs/s/ceylzx/forbidden_secrets_ancient_x11_scaling) - [forbidden secrets of ancient X11 scaling technology revealed](https://flak.tedunangst.com/post/forbidden-secrets-of-ancient-X11-scaling-technology-revealed)
* [2025-06-24, 18:35:30](https://lobste.rs/s/vxkduy/nix_nixos_is_new_dotfiles_golf_s_awesome) - [Nix/NixOS is the new “dotfiles golf” - and that’s awesome](https://whynot.fail/nixos/the-new-dotfile-golf/)
* [2025-06-24, 17:51:00](https://soylentnews.org/article.pl?sid=25/06/24/0030208&amp;from=rss) - [Breathprints?](https://soylentnews.org/article.pl?sid=25/06/24/0030208&amp;from=rss)
* [2025-06-24, 15:28:13](https://lobste.rs/s/xzoth8/nix_development_setup_for_factor) - [Nix Development Setup for Factor](https://toast.al/posts/softwarecraft/2025-06-24_factor-nix-dev-environment/)
* [2025-06-24, 14:08:38](https://lobste.rs/s/onhha0/everyone_should_copy_thunderbird_s) - [Everyone should copy Thunderbird&apos;s donation model](https://blog.cyrneko.eu/everyone-should-copy-thunderbird)
* [2025-06-24, 13:09:00](https://soylentnews.org/article.pl?sid=25/06/24/0021200&amp;from=rss) - [Cloudflare CEO Warns AI Crawlers and Summaries Are Eroding the Internet&apos;s Business Model](https://soylentnews.org/article.pl?sid=25/06/24/0021200&amp;from=rss)
* [2025-06-24, 13:01:17](https://news.ycombinator.com/item?id=44365754) - [A new PNG spec](https://www.programmax.net/articles/png-is-back/)
* [2025-06-24, 09:45:37](https://lobste.rs/s/t3lq2k/bazel_s_original_sins) - [Bazel’s Original Sins](https://fzakaria.com/2025/06/22/bazel-s-original-sins)
* [2025-06-24, 08:23:00](https://soylentnews.org/article.pl?sid=25/06/23/194255&amp;from=rss) - [Massive DDoS Attack Delivered 37.4Tb In 45 Seconds, Equivalent To 10,000 Hd Movies, To One Victim IP](https://soylentnews.org/article.pl?sid=25/06/23/194255&amp;from=rss)
* [2025-06-24, 03:36:00](https://soylentnews.org/article.pl?sid=25/06/22/1718247&amp;from=rss) - [US Tech Czar: China Just Two Years Behind On Chip Design](https://soylentnews.org/article.pl?sid=25/06/22/1718247&amp;from=rss)
* [2025-06-23, 22:52:00](https://soylentnews.org/article.pl?sid=25/06/22/179210&amp;from=rss) - [A Cracked Piece of Metal Self-Healed in Experiment That Stunned Scientists](https://soylentnews.org/article.pl?sid=25/06/22/179210&amp;from=rss)
* [2025-06-23, 19:09:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/23/1910209&amp;from=rss) - [US and Allied Base  Al Udeid in Qatar Attacked](https://soylentnews.org/breakingnews/article.pl?sid=25/06/23/1910209&amp;from=rss)
* [2025-06-23, 18:08:00](https://soylentnews.org/article.pl?sid=25/06/22/173242&amp;from=rss) - [50 Years of JAWS](https://soylentnews.org/article.pl?sid=25/06/22/173242&amp;from=rss)
* [2025-06-23, 18:02:33](https://news.ycombinator.com/item?id=44358390) - [PicoGUS gets CD-ROM emulation](https://github.com/polpo/picogus/releases/tag/v3.0.0)
* [2025-06-23, 13:18:00](https://soylentnews.org/article.pl?sid=25/06/22/1649205&amp;from=rss) - [Open Internet Stack: The EU Commission’s Vague Plans for Open Source](https://soylentnews.org/article.pl?sid=25/06/22/1649205&amp;from=rss)
* [2025-06-23, 11:58:06](https://news.ycombinator.com/item?id=44354852) - [Primitive Kolmogorov complexity is computable](https://lewish.io/posts/primitive-kolmogorov-complexity-is-computable)
* [2025-06-23, 10:20:17](https://news.ycombinator.com/item?id=44354141) - [Yet another insignificant programming notes](https://chua.bitbucket.io)
* [2025-06-23, 08:34:00](https://soylentnews.org/article.pl?sid=25/06/22/0357239&amp;from=rss) - [Astronomers Locate Universe&apos;s &apos;Missing&apos; Matter in the Largest Cosmic Structures](https://soylentnews.org/article.pl?sid=25/06/22/0357239&amp;from=rss)
* [2025-06-23, 07:14:09](https://news.ycombinator.com/item?id=44353241) - [LLM Hallucinations in Practical Code Generation](https://dl.acm.org/doi/10.1145/3728894)
* [2025-06-23, 03:48:00](https://soylentnews.org/article.pl?sid=25/06/22/0341247&amp;from=rss) - [The GPU 16-Pin Melting Fiasco Is Getting Ridiculous](https://soylentnews.org/article.pl?sid=25/06/22/0341247&amp;from=rss)
* [2025-06-22, 23:20:00](https://soylentnews.org/article.pl?sid=25/06/22/0326239&amp;from=rss) - [Gartner: ‘AI is Not Doing its Job and Should Leave Us Alone’](https://soylentnews.org/article.pl?sid=25/06/22/0326239&amp;from=rss)
* [2025-06-22, 18:35:00](https://soylentnews.org/article.pl?sid=25/06/22/0319216&amp;from=rss) - [Book Documents the Rise and Fall of the Concept of the Private Life](https://soylentnews.org/article.pl?sid=25/06/22/0319216&amp;from=rss)
* [2025-06-22, 13:51:00](https://soylentnews.org/article.pl?sid=25/06/21/1934229&amp;from=rss) - [Dr. Demento Announces Retirement From Radio After 55 Years](https://soylentnews.org/article.pl?sid=25/06/21/1934229&amp;from=rss)
* [2025-06-22, 10:29:42](https://news.ycombinator.com/item?id=44345681) - [Writing a basic Linux device driver when you know nothing about Linux drivers](https://crescentro.se/posts/writing-drivers/)
* [2025-06-22, 09:04:00](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss) - [Dead NASA Satellite Unexpectedly Emits Powerful Radio Pulse](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss)
* [2025-06-22, 04:15:00](https://soylentnews.org/article.pl?sid=25/06/21/137201&amp;from=rss) - [Man’s Health Crashes After Getting Donated Kidney](https://soylentnews.org/article.pl?sid=25/06/21/137201&amp;from=rss)
* [2025-06-22, 03:00:00](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss) - [UPDATED: USA Bombs Iran&apos;s Nuclear Sites](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss)
* [2025-06-21, 23:32:00](https://soylentnews.org/article.pl?sid=25/06/21/1225217&amp;from=rss) - [Scientists Once Hoarded Pre-Nuclear Steel; Now We&apos;re Hoarding Pre-AI Content](https://soylentnews.org/article.pl?sid=25/06/21/1225217&amp;from=rss)
* [2025-06-21, 18:45:00](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss) - [The Russian FSB May Have Access to Telegram Messages](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss)
* [2025-06-21, 14:09:00](https://soylentnews.org/article.pl?sid=25/06/19/2351241&amp;from=rss) - [Penn State Research Team Builds 2D CMOS System](https://soylentnews.org/article.pl?sid=25/06/19/2351241&amp;from=rss)
* [2025-06-21, 09:23:00](https://soylentnews.org/article.pl?sid=25/06/19/2344222&amp;from=rss) - [This is Your Brain on ChatGPT](https://soylentnews.org/article.pl?sid=25/06/19/2344222&amp;from=rss)
* [2025-06-21, 04:36:00](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss) - [German Government Moves Closer to Ditching Microsoft: \&quot;We&apos;re Done With Teams!\&quot;](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss)
