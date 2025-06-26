# [News Summary](https://kherrick.github.io/news-summary/)

## Revolutionary Technology Developments

* [Swarms of Tiny Nose Robots Could Clear Infected Sinuses, Researchers Say](https://hardware.slashdot.org/story/25/06/25/218250/swarms-of-tiny-nose-robots-could-clear-infected-sinuses-researchers-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examines how nanotechnology is being developed for precise medical interventions.

* [Games Run Faster On SteamOS Than Windows 11, Ars Testing Finds](https://games.slashdot.org/story/25/06/25/2034243/games-run-faster-on-steamos-than-windows-11-ars-testing-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Ars Technica explores gaming performance improvements on SteamOS compared to Windows.

* [A new pyramid-like shape always lands the same side up](https://www.quantamagazine.org/a-new-pyramid-like-shape-always-lands-the-same-side-up-20250625/) - Discover a groundbreaking geometric shape with unique physical properties.

## Artificial Intelligence in Society

* [Meta Beats Copyright Suit From Authors Over AI Training on Books](https://tech.slashdot.org/story/25/06/25/2127222/meta-beats-copyright-suit-from-authors-over-ai-training-on-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta successfully defends against allegations of improper AI training using copyrighted books.

* [Judge Denies Creating 'Mass Surveillance Program' Harming All ChatGPT Users](https://soylentnews.org/article.pl?sid=25/06/24/2342222&amp;from=rss) - Court ruling impacts privacy concerns with AI-based platforms.

* [Creating AI Based Entirely on Ethically-Sourced Data](https://soylentnews.org/article.pl?sid=25/06/24/1258205&amp;from=rss) - Advances efforts to ensure ethical data sourcing in AI development.

## Software and Engineering Insights

* [Deep down the rabbit hole: Bash, OverlayFS, and a 30-year-old surprise](https://sigma-star.at/blog/2025/06/deep-down-the-rabbit-hole-bash-overlayfs-and-a-30-year-old-surprise/) - Investigates a mysterious behavior in long-standing Linux systems.

* [Reverse Engineering the Microchip CLB Part 1: Background and Reverse Engineering the BLEs](http://mcp-clb.markomo.me/P1-Background-and-RE/) - A detailed dive into uncovering the inner workings of the Microchip CLB.

* [The best interfaces we never built](https://www.chrbutler.com/the-best-interfaces-we-never-built) - A thought-provoking reflection on user interface design possibilities.

## Environmental and Social Impacts

* [Overfishing Has Caused Cod To Halve in Body Size Since 1990s, Study Finds](https://science.slashdot.org/story/25/06/25/1842223/overfishing-has-caused-cod-to-halve-in-body-size-since-1990s-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A stark look at how human activity impacts marine ecosystems.

* [Puerto Rico's Solar Microgrids Beat Blackout](https://spectrum.ieee.org/puerto-rico-solar-microgrids) - Highlights achievements in renewable energy infrastructure and resilience.

* [America’s incarceration rate is in decline](https://www.theatlantic.com/ideas/archive/2025/06/prisoner-populations-are-plummeting/683310/) - The Atlantic explores a significant shift in criminal justice trends.

## Cultural and Historical Discoveries

* [Games That Weren't: Preserving Cancelled and Unreleased Video Game History](https://www.gamesthatwerent.com/) - Efforts to document and preserve lost chapters in gaming history.

* [Aaron Sorkin's The Social Network Sequel Officially in Development](https://entertainment.slashdot.org/story/25/06/25/2144252/aaron-sorkins-the-social-network-sequel-officially-in-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Highlights a significant movie sequel focusing on modern social media dynamics.

* [Peru Gas Workers Find Thousand-Year-Old Mummy](https://soylentnews.org/article.pl?sid=25/06/24/0032246&amp;from=rss) - An accidental but stunning archaeological discovery in South America.

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

* [2025-06-26, 06:38:17](https://lobste.rs/s/qaukc0/png_is_back) - [PNG is back](https://www.programmax.net/articles/png-is-back/)
* [2025-06-26, 06:07:47](https://lobste.rs/s/xvzlix/reverse_engineering_microchip_clb_part_1) - [Reverse Engineering the Microchip CLB Part 1: Background and Reverse Engineering the BLEs](http://mcp-clb.markomo.me/P1-Background-and-RE/)
* [2025-06-26, 05:26:42](https://lobste.rs/s/lot0ao/why_go_rocks_for_building_lua_interpreter) - [Why Go Rocks for Building a Lua Interpreter](https://www.zombiezen.com/blog/2025/06/why-go-rocks-for-building-lua-interpreter/)
* [2025-06-26, 03:45:22](https://lobste.rs/s/f6kee2/swift_android_workgroup) - [Swift Android Workgroup](https://www.swift.org/android-workgroup/)
* [2025-06-26, 03:30:00](https://hardware.slashdot.org/story/25/06/25/218250/swarms-of-tiny-nose-robots-could-clear-infected-sinuses-researchers-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Swarms of Tiny Nose Robots Could Clear Infected Sinuses, Researchers Say](https://hardware.slashdot.org/story/25/06/25/218250/swarms-of-tiny-nose-robots-could-clear-infected-sinuses-researchers-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-26, 03:17:53](https://lobste.rs/s/0c77sf/paragraph_flowing_as_fold) - [Paragraph flowing as a fold](https://www.sigwinch.xyz/cs/2024/flow-fold.html)
* [2025-06-26, 03:13:22](https://lobste.rs/s/gg6dpw/jan_nano_128k_4b_model_with_super_long) - [Jan-nano-128k: A 4B Model with a Super-Long Context Window (Still Outperforms 671B [in MCP])](https://huggingface.co/Menlo/Jan-nano-128k)
* [2025-06-26, 02:41:34](https://news.ycombinator.com/item?id=44383779) - [Games That Weren&apos;t: Preserving Cancelled and Unreleased Video Game History](https://www.gamesthatwerent.com/)
* [2025-06-26, 02:38:00](https://soylentnews.org/article.pl?sid=25/06/24/2342222&amp;from=rss) - [Judge Denies Creating “Mass Surveillance Program” Harming All ChatGPT Users](https://soylentnews.org/article.pl?sid=25/06/24/2342222&amp;from=rss)
* [2025-06-26, 01:30:00](https://tech.slashdot.org/story/25/06/25/2127222/meta-beats-copyright-suit-from-authors-over-ai-training-on-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Beats Copyright Suit From Authors Over AI Training on Books](https://tech.slashdot.org/story/25/06/25/2127222/meta-beats-copyright-suit-from-authors-over-ai-training-on-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-26, 00:58:44](https://lobste.rs/s/mjgw4h/speculative_optimizations_for) - [Speculative Optimizations for WebAssembly using Deopts and Inlining](https://v8.dev/blog/wasm-speculative-optimizations)
* [2025-06-26, 00:50:00](https://news.slashdot.org/story/25/06/25/2137220/microsoft-sued-by-authors-over-use-of-books-in-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Sued By Authors Over Use of Books in AI Training](https://news.slashdot.org/story/25/06/25/2137220/microsoft-sued-by-authors-over-use-of-books-in-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-26, 00:39:33](https://lobste.rs/s/apcp5c/best_interfaces_we_never_built) - [The best interfaces we never built](https://www.chrbutler.com/the-best-interfaces-we-never-built)
* [2025-06-26, 00:10:00](https://entertainment.slashdot.org/story/25/06/25/2144252/aaron-sorkins-the-social-network-sequel-officially-in-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Aaron Sorkin&apos;s The Social Network Sequel Officially in Development](https://entertainment.slashdot.org/story/25/06/25/2144252/aaron-sorkins-the-social-network-sequel-officially-in-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 23:41:16](https://news.ycombinator.com/item?id=44382834) - [Puerto Rico&apos;s Solar Microgrids Beat Blackout](https://spectrum.ieee.org/puerto-rico-solar-microgrids)
* [2025-06-25, 23:31:41](https://lobste.rs/s/ng5imb/docs_for_ai_agents) - [Docs for AI agents](https://technicalwriting.dev/ai/agents/)
* [2025-06-25, 23:30:00](https://news.slashdot.org/story/25/06/25/214209/us-senators-push-for-american-version-of-eus-digital-markets-act?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Senators Push For American Version of EU&apos;s Digital Markets Act](https://news.slashdot.org/story/25/06/25/214209/us-senators-push-for-american-version-of-eus-digital-markets-act?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 23:26:55](https://news.ycombinator.com/item?id=44382752) - [Define policy forbidding use of AI code generators](https://github.com/qemu/qemu/commit/3d40db0efc22520fa6c399cf73960dced423b048)
* [2025-06-25, 23:25:28](https://lobste.rs/s/aqxant/qemu_define_policy_forbidding_use_ai_code) - [QEMU: define policy forbidding use of AI code generators](https://github.com/qemu/qemu/commit/3d40db0efc22520fa6c399cf73960dced423b048)
* [2025-06-25, 22:59:23](https://news.ycombinator.com/item?id=44382582) - [The Hollow Men of Hims](https://www.alexkesin.com/p/the-hollow-men-of-hims)
* [2025-06-25, 22:50:00](https://tech.slashdot.org/story/25/06/25/2050258/psylo-browser-obscures-digital-fingerprints-by-giving-every-tab-its-own-ip-address?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Psylo Browser Obscures Digital Fingerprints By Giving Every Tab Its Own IP Address](https://tech.slashdot.org/story/25/06/25/2050258/psylo-browser-obscures-digital-fingerprints-by-giving-every-tab-its-own-ip-address?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 22:17:00](https://soylentnews.org/article.pl?sid=25/06/24/1258205&amp;from=rss) - [Creating AI Based Entirely on Ethically-Sourced Data](https://soylentnews.org/article.pl?sid=25/06/24/1258205&amp;from=rss)
* [2025-06-25, 22:10:00](https://linux.slashdot.org/story/25/06/25/2042242/bazzite-would-shut-down-if-fedora-goes-ahead-with-removing-32-bit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bazzite Would Shut Down If Fedora Goes Ahead With Removing 32-Bit](https://linux.slashdot.org/story/25/06/25/2042242/bazzite-would-shut-down-if-fedora-goes-ahead-with-removing-32-bit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 21:42:38](https://news.ycombinator.com/item?id=44382073) - [CUDA Ray Tracing 2x Faster Than RTX: My CUDA Ray Tracing Journey](https://karimsayedre.github.io/RTIOW.html)
* [2025-06-25, 21:30:00](https://games.slashdot.org/story/25/06/25/2034243/games-run-faster-on-steamos-than-windows-11-ars-testing-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Games Run Faster On SteamOS Than Windows 11, Ars Testing Finds](https://games.slashdot.org/story/25/06/25/2034243/games-run-faster-on-steamos-than-windows-11-ars-testing-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 21:17:21](https://lobste.rs/s/5ds35n/coding_material_world) - [Coding in a material world](https://deadsimpletech.com/blog/material_girl)
* [2025-06-25, 20:50:00](https://science.slashdot.org/story/25/06/25/1842223/overfishing-has-caused-cod-to-halve-in-body-size-since-1990s-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Overfishing Has Caused Cod To Halve in Body Size Since 1990s, Study Finds](https://science.slashdot.org/story/25/06/25/1842223/overfishing-has-caused-cod-to-halve-in-body-size-since-1990s-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 20:10:00](https://tech.slashdot.org/story/25/06/25/1851201/mozilla-formally-discontinues-its-deepspeech-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Formally Discontinues Its DeepSpeech Project](https://tech.slashdot.org/story/25/06/25/1851201/mozilla-formally-discontinues-its-deepspeech-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 20:08:26](https://news.ycombinator.com/item?id=44381358) - [Microsoft Dependency Has Risks](https://blog.miloslavhomer.cz/p/microsoft-dependency-has-risks)
* [2025-06-25, 20:01:07](https://news.ycombinator.com/item?id=44381297) - [A new pyramid-like shape always lands the same side up](https://www.quantamagazine.org/a-new-pyramid-like-shape-always-lands-the-same-side-up-20250625/)
* [2025-06-25, 19:53:13](https://news.ycombinator.com/item?id=44381252) - [-2000 Lines of code](https://www.folklore.org/Negative_2000_Lines_Of_Code.html)
* [2025-06-25, 19:42:57](https://news.ycombinator.com/item?id=44381168) - [The Offline Club](https://www.theoffline-club.com)
* [2025-06-25, 19:36:55](https://news.ycombinator.com/item?id=44381093) - [Libxml2&apos;s \&quot;no security embargoes\&quot; policy](https://lwn.net/SubscriberLink/1025971/73f269ad3695186d/)
* [2025-06-25, 19:30:00](https://slashdot.org/story/25/06/25/194207/bernie-sanders-says-if-ai-makes-us-so-productive-we-should-get-a-4-day-work-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bernie Sanders Says If AI Makes Us So Productive, We Should Get a 4-Day Work Week](https://slashdot.org/story/25/06/25/194207/bernie-sanders-says-if-ai-makes-us-so-productive-we-should-get-a-4-day-work-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 18:50:00](https://slashdot.org/story/25/06/25/1757229/lyon-abandons-microsoft-office-to-strengthen-digital-sovereignty?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lyon Abandons Microsoft Office To Strengthen &apos;Digital Sovereignty&apos;](https://slashdot.org/story/25/06/25/1757229/lyon-abandons-microsoft-office-to-strengthen-digital-sovereignty?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 18:11:00](https://news.slashdot.org/story/25/06/25/1648236/majority-of-us-k-12-teachers-now-using-ai-for-lesson-planning-grading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Majority of US K-12 Teachers Now Using AI for Lesson Planning, Grading](https://news.slashdot.org/story/25/06/25/1648236/majority-of-us-k-12-teachers-now-using-ai-for-lesson-planning-grading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 18:07:02](https://news.ycombinator.com/item?id=44380185) - [Better Auth, by a self-taught Ethiopian dev, raises $5M from Peak XV, YC](https://techcrunch.com/2025/06/25/this-self-taught-ethiopian-dev-built-an-authentication-tool-and-got-into-yc/)
* [2025-06-25, 18:03:25](https://lobste.rs/s/p1rxnb/scales_as_multipermutations_0_1_into) - [Scales as Multipermutations of 0 and 1 into Twelve Places](https://petecorey.com/blog/2025/06/25/scales-as-multipermutations-of-0-and-1-into-twelve-places/)
* [2025-06-25, 17:30:00](https://developers.slashdot.org/story/25/06/25/1730250/the-computer-science-bubble-is-bursting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The Computer-Science Bubble Is Bursting&apos;](https://developers.slashdot.org/story/25/06/25/1730250/the-computer-science-bubble-is-bursting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 17:30:00](https://soylentnews.org/article.pl?sid=25/06/24/1256227&amp;from=rss) - [New Research Provides First Evidence of the Use of Browser Fingerprints for Online Tracking](https://soylentnews.org/article.pl?sid=25/06/24/1256227&amp;from=rss)
* [2025-06-25, 17:27:35](https://news.ycombinator.com/item?id=44379792) - [LM Studio is now an MCP Host](https://lmstudio.ai/blog/lmstudio-v0.3.17)
* [2025-06-25, 17:14:35](https://news.ycombinator.com/item?id=44379673) - [Build and Host AI-Powered Apps with Claude – No Deployment Needed](https://www.anthropic.com/news/claude-powered-artifacts)
* [2025-06-25, 17:14:29](https://news.ycombinator.com/item?id=44379670) - [America’s incarceration rate is in decline](https://www.theatlantic.com/ideas/archive/2025/06/prisoner-populations-are-plummeting/683310/)
* [2025-06-25, 17:08:44](https://news.ycombinator.com/item?id=44379606) - [What Problems to Solve (1966)](http://genius.cat-v.org/richard-feynman/writtings/letters/problems)
* [2025-06-25, 17:00:41](https://news.ycombinator.com/item?id=44379509) - [FurtherAI (YC W24) Is Hiring for Software and AI Roles](https://www.ycombinator.com/companies/furtherai/jobs)
* [2025-06-25, 16:40:00](https://yro.slashdot.org/story/25/06/25/1619215/how-foreign-scammers-use-us-banks-to-fleece-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Foreign Scammers Use U.S. Banks to Fleece Americans](https://yro.slashdot.org/story/25/06/25/1619215/how-foreign-scammers-use-us-banks-to-fleece-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-25, 16:35:56](https://news.ycombinator.com/item?id=44379191) - [Interstellar Flight: Perspectives and Patience](https://www.centauri-dreams.org/2025/06/25/interstellar-flight-perspectives-and-patience/)
* [2025-06-25, 16:34:51](https://news.ycombinator.com/item?id=44379173) - [Iroh: A library to establish direct connection between peers](https://github.com/n0-computer/iroh)
* [2025-06-25, 16:21:45](https://news.ycombinator.com/item?id=44379034) - [Getting ready to issue IP address certificates](https://community.letsencrypt.org/t/getting-ready-to-issue-ip-address-certificates/238777)
* [2025-06-25, 16:19:46](https://lobste.rs/s/ljfoxr/getting_ready_issue_ip_address) - [Getting ready to issue IP address certificates](https://community.letsencrypt.org/t/getting-ready-to-issue-ip-address-certificates/238777)
* [2025-06-25, 15:50:50](https://lobste.rs/s/whprju/coding_independent_code_points_cicp_png) - [Coding Independent Code Points (cICP) in PNG, explained](https://svgees.us/blog/cICP.html)
* [2025-06-25, 15:47:02](https://lobste.rs/s/utj83j/deep_down_rabbit_hole_bash_overlayfs_30) - [Deep down the rabbit hole: Bash, OverlayFS, and a 30-year-old surprise](https://sigma-star.at/blog/2025/06/deep-down-the-rabbit-hole-bash-overlayfs-and-a-30-year-old-surprise/)
* [2025-06-25, 15:33:20](https://news.ycombinator.com/item?id=44378486) - [Web Embeddable Common Lisp](https://turtleware.eu/static/paste/wecl-test-gl/main.html)
* [2025-06-25, 15:31:47](https://lobste.rs/s/gxly2u/web_embeddable_common_lisp) - [Web Embeddable Common Lisp](https://turtleware.eu/static/paste/wecl-test-gl/main.html)
* [2025-06-25, 15:05:17](https://lobste.rs/s/wycybo/openai_charges_by_minute_so_make_minutes) - [OpenAI Charges by the Minute, So Make the Minutes Shorter](https://george.mand.is/2025/06/openai-charges-by-the-minute-so-make-the-minutes-shorter/)
* [2025-06-25, 15:01:26](https://lobste.rs/s/dqz4ye/what_s_new_gleam_1_11) - [What&apos;s new in Gleam 1.11](https://www.youtube.com/watch?v=AKIZG0Dq3Bc)
* [2025-06-25, 14:22:23](https://lobste.rs/s/ntl2iw/how_write_compelling_release) - [How to Write Compelling Release Announcements](https://refactoringenglish.com/chapters/release-announcements/)
* [2025-06-25, 13:29:32](https://lobste.rs/s/3ste25/abusing_copyright_strings_trick) - [Abusing copyright strings to trick software into thinking it&apos;s running on your competitor&apos;s PC](https://devblogs.microsoft.com/oldnewthing/20250624-00/?p=111299)
* [2025-06-25, 13:28:10](https://lobste.rs/s/f9xdsg/gemini_cli_your_open_source_ai_agent) - [Gemini CLI: your open-source AI agent](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/)
* [2025-06-25, 13:17:25](https://news.ycombinator.com/item?id=44376989) - [OpenAI charges by the minute, so speed up your audio](https://george.mand.is/2025/06/openai-charges-by-the-minute-so-make-the-minutes-shorter/)
* [2025-06-25, 13:10:46](https://news.ycombinator.com/item?id=44376919) - [Gemini CLI](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/)
* [2025-06-25, 13:00:11](https://lobste.rs/s/t8yq3x/reading_nfc_passport_chips_linux) - [Reading NFC Passport Chips in Linux](https://shkspr.mobi/blog/2025/06/reading-nfc-passport-chips-in-linux/)
* [2025-06-25, 12:45:00](https://soylentnews.org/article.pl?sid=25/06/24/0336243&amp;from=rss) - [Apple to Australians: You&apos;re Too Stupid to Choose Your Own Apps](https://soylentnews.org/article.pl?sid=25/06/24/0336243&amp;from=rss)
* [2025-06-25, 10:02:54](https://lobste.rs/s/zetevz/printing_web_making_webpages_look_good_on) - [Printing the web: making webpages look good on paper](https://piccalil.li/blog/printing-the-web-making-webpages-look-good-on-paper/)
* [2025-06-25, 08:02:00](https://soylentnews.org/article.pl?sid=25/06/24/0044241&amp;from=rss) - [UK Retail&apos;s Estimated Cyberattack Costs Pegged at $500M](https://soylentnews.org/article.pl?sid=25/06/24/0044241&amp;from=rss)
* [2025-06-25, 03:18:00](https://soylentnews.org/article.pl?sid=25/06/24/0039212&amp;from=rss) - [BEV Battery Swapping in Shanghai](https://soylentnews.org/article.pl?sid=25/06/24/0039212&amp;from=rss)
* [2025-06-24, 22:36:00](https://soylentnews.org/article.pl?sid=25/06/24/0032246&amp;from=rss) - [Peru Gas Workers Find Thousand-Year-Old Mummy](https://soylentnews.org/article.pl?sid=25/06/24/0032246&amp;from=rss)
* [2025-06-24, 20:46:13](https://lobste.rs/s/nwtkom/fun_with_uv_pep_723) - [Fun with uv and PEP 723](https://www.cottongeeks.com/articles/2025-06-24-fun-with-uv-and-pep-723)
* [2025-06-24, 18:56:51](https://lobste.rs/s/ceylzx/forbidden_secrets_ancient_x11_scaling) - [forbidden secrets of ancient X11 scaling technology revealed](https://flak.tedunangst.com/post/forbidden-secrets-of-ancient-X11-scaling-technology-revealed)
* [2025-06-24, 17:51:00](https://soylentnews.org/article.pl?sid=25/06/24/0030208&amp;from=rss) - [Breathprints?](https://soylentnews.org/article.pl?sid=25/06/24/0030208&amp;from=rss)
* [2025-06-24, 13:09:00](https://soylentnews.org/article.pl?sid=25/06/24/0021200&amp;from=rss) - [Cloudflare CEO Warns AI Crawlers and Summaries Are Eroding the Internet&apos;s Business Model](https://soylentnews.org/article.pl?sid=25/06/24/0021200&amp;from=rss)
* [2025-06-24, 13:01:17](https://news.ycombinator.com/item?id=44365754) - [A new PNG spec](https://www.programmax.net/articles/png-is-back/)
* [2025-06-24, 08:23:00](https://soylentnews.org/article.pl?sid=25/06/23/194255&amp;from=rss) - [Massive DDoS Attack Delivered 37.4Tb In 45 Seconds, Equivalent To 10,000 Hd Movies, To One Victim IP](https://soylentnews.org/article.pl?sid=25/06/23/194255&amp;from=rss)
* [2025-06-24, 03:36:00](https://soylentnews.org/article.pl?sid=25/06/22/1718247&amp;from=rss) - [US Tech Czar: China Just Two Years Behind On Chip Design](https://soylentnews.org/article.pl?sid=25/06/22/1718247&amp;from=rss)
* [2025-06-23, 22:52:00](https://soylentnews.org/article.pl?sid=25/06/22/179210&amp;from=rss) - [A Cracked Piece of Metal Self-Healed in Experiment That Stunned Scientists](https://soylentnews.org/article.pl?sid=25/06/22/179210&amp;from=rss)
* [2025-06-23, 22:03:29](https://news.ycombinator.com/item?id=44360651) - [Getting by on the Generosity of Strangers in Japan](https://theworld.org/stories/2025/06/20/out-of-eden-walk-getting-by-on-the-generosity-of-strangers)
* [2025-06-23, 19:09:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/23/1910209&amp;from=rss) - [US and Allied Base  Al Udeid in Qatar Attacked](https://soylentnews.org/breakingnews/article.pl?sid=25/06/23/1910209&amp;from=rss)
* [2025-06-23, 18:34:36](https://news.ycombinator.com/item?id=44358667) - [Howdy – Windows Hello style facial authentication for Linux](https://github.com/boltgolt/howdy)
* [2025-06-23, 18:08:00](https://soylentnews.org/article.pl?sid=25/06/22/173242&amp;from=rss) - [50 Years of JAWS](https://soylentnews.org/article.pl?sid=25/06/22/173242&amp;from=rss)
* [2025-06-23, 17:38:08](https://news.ycombinator.com/item?id=44358148) - [Ambient Garden](https://ambient.garden)
* [2025-06-23, 13:18:00](https://soylentnews.org/article.pl?sid=25/06/22/1649205&amp;from=rss) - [Open Internet Stack: The EU Commission’s Vague Plans for Open Source](https://soylentnews.org/article.pl?sid=25/06/22/1649205&amp;from=rss)
* [2025-06-23, 11:34:26](https://news.ycombinator.com/item?id=44354643) - [Build a Sentence-Level Text-to-Speech Reader in JavaScript](https://jsdev.space/tts-sentence-reader/)
* [2025-06-23, 08:34:00](https://soylentnews.org/article.pl?sid=25/06/22/0357239&amp;from=rss) - [Astronomers Locate Universe&apos;s &apos;Missing&apos; Matter in the Largest Cosmic Structures](https://soylentnews.org/article.pl?sid=25/06/22/0357239&amp;from=rss)
* [2025-06-23, 03:48:00](https://soylentnews.org/article.pl?sid=25/06/22/0341247&amp;from=rss) - [The GPU 16-Pin Melting Fiasco Is Getting Ridiculous](https://soylentnews.org/article.pl?sid=25/06/22/0341247&amp;from=rss)
* [2025-06-22, 23:20:00](https://soylentnews.org/article.pl?sid=25/06/22/0326239&amp;from=rss) - [Gartner: ‘AI is Not Doing its Job and Should Leave Us Alone’](https://soylentnews.org/article.pl?sid=25/06/22/0326239&amp;from=rss)
* [2025-06-22, 22:00:00](https://news.ycombinator.com/item?id=44350655) - [The Art of Hanakami, or Flower-Petal Folding](https://origamiusa.org/thefold/article/art-hanakami-or-flower-petal-folding)
* [2025-06-22, 18:35:00](https://soylentnews.org/article.pl?sid=25/06/22/0319216&amp;from=rss) - [Book Documents the Rise and Fall of the Concept of the Private Life](https://soylentnews.org/article.pl?sid=25/06/22/0319216&amp;from=rss)
* [2025-06-22, 14:53:59](https://news.ycombinator.com/item?id=44347399) - [Earths largest camera:3B pixel images](https://www.nytimes.com/interactive/2025/06/19/science/rubin-observatory-camera.html)
* [2025-06-22, 13:51:00](https://soylentnews.org/article.pl?sid=25/06/21/1934229&amp;from=rss) - [Dr. Demento Announces Retirement From Radio After 55 Years](https://soylentnews.org/article.pl?sid=25/06/21/1934229&amp;from=rss)
* [2025-06-22, 10:29:42](https://news.ycombinator.com/item?id=44345681) - [Writing a basic Linux device driver when you know nothing about Linux drivers](https://crescentro.se/posts/writing-drivers/)
* [2025-06-22, 09:04:00](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss) - [Dead NASA Satellite Unexpectedly Emits Powerful Radio Pulse](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss)
* [2025-06-22, 04:15:00](https://soylentnews.org/article.pl?sid=25/06/21/137201&amp;from=rss) - [Man’s Health Crashes After Getting Donated Kidney](https://soylentnews.org/article.pl?sid=25/06/21/137201&amp;from=rss)
* [2025-06-22, 03:00:00](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss) - [UPDATED: USA Bombs Iran&apos;s Nuclear Sites](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss)
