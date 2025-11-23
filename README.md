# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Updates

* [Microsoft and GitHub Preview New Tool That Identifies, Prioritizes, and Fixes Vulnerabilities With AI](https://developers.slashdot.org/story/25/11/23/0116256/microsoft-and-github-preview-new-tool-that-identifies-prioritizes-and-fixes-vulnerabilities-with-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Amazon's AI-Powered IDE Kiro Helps Vibe Coders with 'Spec Mode'](https://developers.slashdot.org/story/25/11/23/0450211/amazons-ai-powered-ide-kiro-helps-vibe-coders-with-spec-mode?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Analyzing 47,000 ChatGPT Conversations Shows Echo Chambers, Sensitive Data - and Unpredictable Medical Advice](https://slashdot.org/story/25/11/22/0632225/analyzing-47000-chatgpt-conversations-shows-echo-chambers-sensitive-data---and-unpredictable-medical-advice?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Meta Plans New AI-Powered 'Morning Brief' Drawn From Facebook and 'External Sources'](https://tech.slashdot.org/story/25/11/22/065202/meta-plans-new-ai-powered-morning-brief-drawn-from-facebook-and-external-sources?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Mozilla Unveils Plans for New 'AI Window' Browsing Mode in Firefox, Opens Signups](https://soylentnews.org/article.pl?sid=25/11/18/018202)

## Engineering and Environment

* [Engineers are Building the Hottest Geothermal Power Plant on Earth - Next to a US Volcano](https://hardware.slashdot.org/story/25/11/22/0547231/engineers-are-building-the-hottest-geothermal-power-plant-on-earth---next-to-a-us-volcano?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Analyzing Floating Solar Panels Shows Promise, but Environmental Impacts Vary by Location](https://soylentnews.org/article.pl?sid=25/11/18/1210237)

* [Britain Sets New Record, Generating Enough Wind Power for 22 Million Homes](https://news.slashdot.org/story/25/11/22/1057202/britain-sets-new-record-generating-enough-wind-power-for-22-million-homes?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Could High-Speed Trains Shorten US Travel Times While Reducing Emissions?](https://news.slashdot.org/story/25/11/22/201221/could-high-speed-trains-shorten-us-travel-times-while-reducing-emissions?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Historical Perspectives and Discoveries

* [U.S. Spy Agency Releases Amelia Earhart Records](https://soylentnews.org/article.pl?sid=25/11/23/0229254&from=rss)

* [Maybe That's Not Liquid Water on Mars After All](https://soylentnews.org/article.pl?sid=25/11/21/203250&from=rss)

* [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&from=rss)

* [First kiss dates back 21M years](https://www.bbc.com/news/articles/cr43gq61g2qo)

## Programming and Development Insights

* [We stopped roadmap work for a week and fixed 189 bugs](https://lalitm.com/fixits-are-good-for-the-soul/)

* [Experimenting with Robin Hood hashing](https://twdev.blog/2025/11/robin_hood/)

* [PHP 8.5 Brings Long-Awaited Pipe Operator, Adds New URI Tools](https://developers.slashdot.org/story/25/11/23/0021216/php-85-brings-long-awaited-pipe-operator-adds-new-uri-tools?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Racket v9.0](https://blog.racket-lang.org/2025/11/racket-v9-0.html)

* [Dingo: A meta-language for Go](https://github.com/MadAppGang/dingo)

## Novel and Unique Explorations

* [How Deep is Challenger Deep?](https://storymaps.arcgis.com/stories/0d389600f3464e3185a84c199f04e859)

* [Editing Code in Emacs](https://redpenguin101.github.io/html/posts/2025_11_23_emacs_for_code_editing.html)

* [A bug caused by a door in a game you may have heard of called "Half Life 2"](https://mastodon.gamedev.place/@TomF/115589875974658415)

* [After my dad died, we found the love letters](https://www.jenn.site/after-my-dad-died-we-found-the-love-letters/)

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

* [2025-11-23, 18:36:00](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss) - [U.S. Spy Agency Releases Amelia Earhart Records](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss)
* [2025-11-23, 17:55:11](https://news.ycombinator.com/item?id=46025721) - [Native Secure Enclave backed SSH keys on macOS](https://gist.github.com/arianvp/5f59f1783e3eaf1a2d4cd8e952bb4acf)
* [2025-11-23, 17:38:28](https://news.ycombinator.com/item?id=46025477) - [SVG.js v3.2](https://svgjs.dev/docs/3.2/)
* [2025-11-23, 17:34:00](https://news.slashdot.org/story/25/11/22/201221/could-high-speed-trains-shorten-us-travel-times-while-reducing-emissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could High-Speed Trains Shorten US Travel Times While Reducing Emissions?](https://news.slashdot.org/story/25/11/22/201221/could-high-speed-trains-shorten-us-travel-times-while-reducing-emissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 17:33:36](https://lobste.rs/s/gae4dh/we_stopped_roadmap_work_for_week_fixed_189) - [We stopped roadmap work for a week and fixed 189 bugs](https://lalitm.com/fixits-are-good-for-the-soul/)
* [2025-11-23, 17:14:41](https://news.ycombinator.com/item?id=46025196) - [Are consumers just tech debt to Microsoft?](https://birchtree.me/blog/are-consumers-just-tech-debt-to-microsoft/)
* [2025-11-23, 17:01:04](https://news.ycombinator.com/item?id=46025055) - [HumanLayer (YC F24) Is Hiring Founding Engineers](https://www.ycombinator.com/companies/humanlayer/jobs/oBCZzc7-founding-product-engineer)
* [2025-11-23, 16:34:00](https://developers.slashdot.org/story/25/11/23/0116256/microsoft-and-github-preview-new-tool-that-identifies-prioritizes-and-fixes-vulnerabilities-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft and GitHub Preview New Tool That Identifies, Prioritizes, and Fixes Vulnerabilities With AI](https://developers.slashdot.org/story/25/11/23/0116256/microsoft-and-github-preview-new-tool-that-identifies-prioritizes-and-fixes-vulnerabilities-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 16:31:50](https://news.ycombinator.com/item?id=46024773) - [Calculus for Mathematicians, Computer Scientists, and Physicists [pdf]](https://mathcs.holycross.edu/~ahwang/print/calc.pdf)
* [2025-11-23, 16:30:08](https://news.ycombinator.com/item?id=46024753) - [Ask HN: Good resources to learn financial systems engineering?](https://news.ycombinator.com/item?id=46024753)
* [2025-11-23, 16:12:06](https://news.ycombinator.com/item?id=46024584) - [Mount Proton Drive on Linux using rclone and systemd](https://github.com/dadtronics/protondrive-linux)
* [2025-11-23, 15:34:00](https://hardware.slashdot.org/story/25/11/22/0547231/engineers-are-building-the-hottest-geothermal-power-plant-on-earth---next-to-a-us-volcano?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Engineers are Building the Hottest Geothermal Power Plant on Earth - Next to a US Volcano](https://hardware.slashdot.org/story/25/11/22/0547231/engineers-are-building-the-hottest-geothermal-power-plant-on-earth---next-to-a-us-volcano?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 15:30:38](https://lobste.rs/s/uvlxdn/windows_vtl2_technical_exploration) - [Windows VTL2 Technical Exploration](https://howknows.github.io/roooot.github.io/VTL2/Windows_VTL2_Technical_Exploration.html)
* [2025-11-23, 15:18:00](https://news.ycombinator.com/item?id=46024184) - [Court filings allege Meta downplayed risks to children and misled the public](https://time.com/7336204/meta-lawsuit-files-child-safety/)
* [2025-11-23, 14:59:38](https://news.ycombinator.com/item?id=46024032) - [Editing Code in Emacs](https://redpenguin101.github.io/html/posts/2025_11_23_emacs_for_code_editing.html)
* [2025-11-23, 14:03:36](https://lobste.rs/s/scikpb/liballocs_meta_level_run_time_services) - [liballocs: Meta-level run-time services for Unix processes... a.k.a. dragging Unix into the 1980s](https://github.com/stephenrkell/liballocs)
* [2025-11-23, 13:52:00](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss) - [Maybe That&apos;s Not Liquid Water on Mars After All](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss)
* [2025-11-23, 13:43:24](https://news.ycombinator.com/item?id=46023531) - [Tosijs-schema is a super lightweight schema-first LLM-native JSON schema library](https://www.npmjs.com/package/tosijs-schema)
* [2025-11-23, 13:35:27](https://news.ycombinator.com/item?id=46023460) - [Racket v9.0](https://blog.racket-lang.org/2025/11/racket-v9-0.html)
* [2025-11-23, 13:32:45](https://lobste.rs/s/1nop48/google_revisits_jpeg_xl_chromium_after) - [Google Revisits JPEG XL in Chromium After Earlier Removal](https://windowsreport.com/google-revisits-jpeg-xl-in-chromium-after-earlier-removal/)
* [2025-11-23, 13:10:27](https://news.ycombinator.com/item?id=46023286) - [Gordon Bell finalist team pushes scale of rocket simulation on El Capitan](https://www.llnl.gov/article/53626/gordon-bell-finalist-team-pushes-scale-rocket-simulation-el-capitan)
* [2025-11-23, 12:34:00](https://it.slashdot.org/story/25/11/23/0812238/how-the-internet-rewired-work---and-what-that-tells-us-about-ais-likely-impact?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How the Internet Rewired Work - and What That Tells Us About AI&apos;s Likely Impact](https://it.slashdot.org/story/25/11/23/0812238/how-the-internet-rewired-work---and-what-that-tells-us-about-ais-likely-impact?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 12:26:30](https://news.ycombinator.com/item?id=46023013) - [Shaders: How to draw high fidelity graphics with just x and y coordinates](https://www.makingsoftware.com/chapters/shaders)
* [2025-11-23, 12:19:52](https://lobste.rs/s/mzuktr/what_does_agpl_require) - [What does the AGPL require?](https://runxiyu.org/blog/agpl/)
* [2025-11-23, 12:06:25](https://lobste.rs/s/lfujpz/how_deep_is_challenger_deep) - [How Deep is Challenger Deep?](https://storymaps.arcgis.com/stories/0d389600f3464e3185a84c199f04e859)
* [2025-11-23, 11:25:03](https://lobste.rs/s/wtxmgv/what_are_you_reading_plan_read_next) - [What are you reading and plan to read next?](https://lobste.rs/s/wtxmgv/what_are_you_reading_plan_read_next)
* [2025-11-23, 09:38:03](https://lobste.rs/s/drfh9p/parallel_threads_racket_v9_0) - [Parallel Threads in Racket v9.0](https://blog.racket-lang.org/2025/11/parallel-threads.html)
* [2025-11-23, 09:10:58](https://lobste.rs/s/mzpgdh/svalboard_datahand_forever) - [Svalboard - Datahand forever](https://svalboard.com/)
* [2025-11-23, 09:10:00](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss) - [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss)
* [2025-11-23, 08:40:41](https://news.ycombinator.com/item?id=46021825) - [After my dad died, we found the love letters](https://www.jenn.site/after-my-dad-died-we-found-the-love-letters/)
* [2025-11-23, 08:34:00](https://tech.slashdot.org/story/25/11/23/060221/microsoft-warns-its-windows-ai-feature-brings-data-theft-and-malware-risks-and-occasionally-may-hallucinate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Warns Its Windows AI Feature Brings Data Theft and Malware Risks, and &apos;Occasionally May Hallucinate&apos; ](https://tech.slashdot.org/story/25/11/23/060221/microsoft-warns-its-windows-ai-feature-brings-data-theft-and-malware-risks-and-occasionally-may-hallucinate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 08:23:56](https://lobste.rs/s/scusuj/qsp_simple_s_expression_parser_for_rust) - [qsp: A simple S-Expression parser for Rust TokenStreams](https://github.com/KnorrFG/qsp)
* [2025-11-23, 05:34:00](https://developers.slashdot.org/story/25/11/23/0450211/amazons-ai-powered-ide-kiro-helps-vibe-coders-with-spec-mode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s AI-Powered IDE Kiro Helps Vibe Coders with &apos;Spec Mode&apos;](https://developers.slashdot.org/story/25/11/23/0450211/amazons-ai-powered-ide-kiro-helps-vibe-coders-with-spec-mode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 05:28:58](https://lobste.rs/s/4lidxn/trifold_is_tool_quickly_cheaply_host) - [trifold is a tool to quickly &amp; cheaply host static websites using a CDN](https://jpt.sh/projects/trifold/)
* [2025-11-23, 04:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss) - [Mercury Pollution in Marine Mammals is Increasing, New Study Finds](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss)
* [2025-11-23, 03:33:42](https://news.ycombinator.com/item?id=46020543) - [Unusual circuits in the Intel 386&apos;s standard cell logic](https://www.righto.com/2025/11/unusual-386-standard-cell-circuits.html)
* [2025-11-23, 03:15:12](https://lobste.rs/s/risea0/satisfies_is_my_favorite_typescript) - [`satisfies` is my favorite TypeScript keyword](https://sjer.red/blog/2024-12-21/)
* [2025-11-23, 02:54:26](https://lobste.rs/s/pzcjsl/enough_with_all_raft) - [Enough With All The Raft](https://transactional.blog/talk/enough-with-all-the-raft)
* [2025-11-23, 02:49:17](https://lobste.rs/s/cpiydc/flux_keyboard) - [Flux Keyboard](https://fluxkeyboard.com/)
* [2025-11-23, 02:35:00](https://news.slashdot.org/story/25/11/23/0144214/did-bitcoin-play-a-role-in-thursdays-stock-sell-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Did Bitcoin Play a Role in Thursday&apos;s Stock Sell-Off?](https://news.slashdot.org/story/25/11/23/0144214/did-bitcoin-play-a-role-in-thursdays-stock-sell-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 02:18:03](https://news.ycombinator.com/item?id=46020151) - [GCC SC approves inclusion of Algol 68 Front End](https://gcc.gnu.org/pipermail/gcc/2025-November/247020.html)
* [2025-11-23, 01:35:00](https://developers.slashdot.org/story/25/11/23/0021216/php-85-brings-long-awaited-pipe-operator-adds-new-uri-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PHP 8.5 Brings Long-Awaited Pipe Operator, Adds New URI Tools](https://developers.slashdot.org/story/25/11/23/0021216/php-85-brings-long-awaited-pipe-operator-adds-new-uri-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 01:22:25](https://lobste.rs/s/s5kub7/dingo_meta_language_for_go) - [dingo: A meta-language for Go](https://github.com/MadAppGang/dingo)
* [2025-11-23, 01:19:49](https://lobste.rs/s/23os7e/experimenting_with_robin_hood_hashing) - [Experimenting with Robin Hood hashing](https://twdev.blog/2025/11/robin_hood/)
* [2025-11-23, 00:46:53](https://news.ycombinator.com/item?id=46019685) - [A monopoly ISP refuses to fix upstream infrastructure](https://sacbear.com/xfinity-wont-fix-internet/)
* [2025-11-23, 00:35:27](https://news.ycombinator.com/item?id=46019636) - [NTSB report: Decryption of images from the Titan submersible camera [pdf] (2024)](https://data.ntsb.gov/Docket/Document/docBLOB?ID=18741602&amp;FileExtension=pdf&amp;FileName=Underwater%20Camera%20-%20Specialist%27s%20Factual%20Report-Rel.pdf)
* [2025-11-22, 23:41:00](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss) - [Icelandic is in Danger of Dying Out Because of AI and English-Language Media, Says Former PM](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss)
* [2025-11-22, 23:35:00](https://news.slashdot.org/story/25/11/22/2227240/the-strange-and-totally-real-plan-to-blot-out-the-sun-and-reverse-global-warming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The Strange and Totally Real Plan to Blot Out the Sun and Reverse Global Warming&apos;](https://news.slashdot.org/story/25/11/22/2227240/the-strange-and-totally-real-plan-to-blot-out-the-sun-and-reverse-global-warming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-22, 22:34:00](https://tech.slashdot.org/story/25/11/22/065202/meta-plans-new-ai-powered-morning-brief-drawn-from-facebook-and-external-sources?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Plans New AI-Powered &apos;Morning Brief&apos; Drawn From Facebook and &apos;External Sources&apos;](https://tech.slashdot.org/story/25/11/22/065202/meta-plans-new-ai-powered-morning-brief-drawn-from-facebook-and-external-sources?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-22, 21:20:24](https://news.ycombinator.com/item?id=46018380) - [WorldGen – Text to Immersive 3D Worlds](https://www.meta.com/en-gb/blog/worldgen-3d-world-generation-reality-labs-generative-ai-research/)
* [2025-11-22, 21:16:25](https://lobste.rs/s/ao7d7v/reverse_engineer_s_anatomy_macos_boot) - [A Reverse Engineer’s Anatomy of the macOS Boot Chain &amp; Security Architecture](http://stack.int.mov/a-reverse-engineers-anatomy-of-the-macos-boot-chain-security-architecture/)
* [2025-11-22, 20:36:00](https://science.slashdot.org/story/25/11/22/2034253/are-astronomers-wrong-about-dark-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Astronomers Wrong About Dark Energy?](https://science.slashdot.org/story/25/11/22/2034253/are-astronomers-wrong-about-dark-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-22, 19:34:00](https://news.slashdot.org/story/25/11/22/1057202/britain-sets-new-record-generating-enough-wind-power-for-22-million-homes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Britain Sets New Record, Generating Enough Wind Power for 22 Million Homes](https://news.slashdot.org/story/25/11/22/1057202/britain-sets-new-record-generating-enough-wind-power-for-22-million-homes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-22, 19:20:53](https://lobste.rs/s/9cvqv4/introducing_f_10) - [Introducing F# 10](https://devblogs.microsoft.com/dotnet/introducing-fsharp-10/)
* [2025-11-22, 18:58:00](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss) - [First Large-Scale VR Use in the Classroom Extends the Boundaries of Education](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss)
* [2025-11-22, 18:47:08](https://news.ycombinator.com/item?id=46017175) - [Show HN: Forty.News – Daily news, but on a 40-year delay](https://forty.news)
* [2025-11-22, 18:42:53](https://lobste.rs/s/fid6eb/host_website_from_old_phone_using) - [Host a website from an old phone using postmarketOS](https://far.computer/how-to/)
* [2025-11-22, 18:34:00](https://slashdot.org/story/25/11/22/0632225/analyzing-47000-chatgpt-conversations-shows-echo-chambers-sensitive-data---and-unpredictable-medical-advice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Analyzing 47,000 ChatGPT Conversations Shows Echo Chambers, Sensitive Data - and Unpredictable Medical Advice](https://slashdot.org/story/25/11/22/0632225/analyzing-47000-chatgpt-conversations-shows-echo-chambers-sensitive-data---and-unpredictable-medical-advice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-22, 17:34:00](https://linux.slashdot.org/story/25/11/22/0746223/780000-windows-users-downloaded-linux-distro-zorin-os-in-the-last-5-weeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [780,000 Windows Users Downloaded Linux Distro Zorin OS in the Last 5 Weeks](https://linux.slashdot.org/story/25/11/22/0746223/780000-windows-users-downloaded-linux-distro-zorin-os-in-the-last-5-weeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-22, 17:08:36](https://news.ycombinator.com/item?id=46016249) - [The privacy nightmare of browser fingerprinting](https://kevinboone.me/fingerprinting.html)
* [2025-11-22, 16:53:12](https://lobste.rs/s/ddjhhu/worst_programming_language_all_time) - [The worst programming language of all time](https://www.youtube.com/watch?v=7fGB-hjc2Gc)
* [2025-11-22, 16:34:00](https://science.slashdot.org/story/25/11/22/077217/physicists-reveal-a-new-quantum-state-where-electrons-run-wild?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Physicists Reveal a New Quantum State Where Electrons Run Wild](https://science.slashdot.org/story/25/11/22/077217/physicists-reveal-a-new-quantum-state-where-electrons-run-wild?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-22, 15:27:29](https://lobste.rs/s/eqz3mh/llm_apis_are_synchronization_problem) - [LLM APIs are a Synchronization Problem](https://lucumr.pocoo.org/2025/11/22/llm-apis/)
* [2025-11-22, 14:09:00](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss) - [Microsoft Warns its New “AI” Agents in Windows Can Install Malware](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss)
* [2025-11-22, 11:41:31](https://lobste.rs/s/xdjqc5/move_expressions) - [Move Expressions](https://smallcultfollowing.com/babysteps/blog/2025/11/21/move-expressions/)
* [2025-11-22, 09:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss) - [\&quot;Walk My AI Walk\&quot;, a #1 AI Country Song](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss)
* [2025-11-22, 04:42:00](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss) - [Join the the Newest Social Network and Party Like its 1987](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss)
* [2025-11-22, 00:31:52](https://lobste.rs/s/tbqdgl/letter_from_codeberg_onwards_upwards) - [Letter from Codeberg: Onwards and upwards](https://blog.codeberg.org/letter-from-codeberg-onwards-and-upwards.html)
* [2025-11-22, 00:15:29](https://lobste.rs/s/xwkp41/bug_caused_by_door_game_you_may_have_heard) - [A bug caused by a door in a game you may have heard of called \&quot;Half Life 2\&quot;](https://mastodon.gamedev.place/@TomF/115589875974658415)
* [2025-11-21, 23:54:00](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss) - [Kaspersky Antivirus is Now Available for Linux. Will You Use It?](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss)
* [2025-11-21, 20:02:45](https://news.ycombinator.com/item?id=46008332) - [We Induced Smells With Ultrasound](https://writetobrain.com/olfactory)
* [2025-11-21, 19:10:00](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss) - [Google Chrome Bug Exploited as an 0-Day - Patch Now or Risk Full System Compromise](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss)
* [2025-11-21, 14:48:43](https://lobste.rs/s/rygog1/we_should_all_be_using_dependency) - [We should all be using dependency cooldowns](https://blog.yossarian.net/2025/11/21/We-should-all-be-using-dependency-cooldowns)
* [2025-11-21, 14:23:00](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss) - [China Cuts Open New Robot on Stage to Prove Authenticity](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss)
* [2025-11-21, 09:34:00](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss) - [Needy Software](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss)
* [2025-11-21, 04:45:00](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss) - [Software Developers Show Less Constructive Scepticism When Using AI Assistants](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss)
* [2025-11-21, 00:07:00](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss) - [Is Perplexity the First AI Unicorn to Fail?](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss)
* [2025-11-20, 19:15:00](https://soylentnews.org/article.pl?sid=25/11/18/1216240&amp;from=rss) - [Turris Releases Their New Omnia NG Router](https://soylentnews.org/article.pl?sid=25/11/18/1216240&amp;from=rss)
* [2025-11-20, 14:37:00](https://soylentnews.org/article.pl?sid=25/11/18/1212257&amp;from=rss) - [Many Hard Leetcode Problems Are Easy Constraint Problems](https://soylentnews.org/article.pl?sid=25/11/18/1212257&amp;from=rss)
* [2025-11-20, 12:47:41](https://news.ycombinator.com/item?id=45992035) - [Ubuntu LTS releases to 15 years with Legacy add-on](https://canonical.com/blog/canonical-expands-total-coverage-for-ubuntu-lts-releases-to-15-years-with-legacy-add-on)
* [2025-11-20, 09:52:00](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss) - [Floating Solar Panels Show Promise, but Environmental Impacts Vary by Location](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss)
* [2025-11-20, 05:04:00](https://soylentnews.org/article.pl?sid=25/11/18/125234&amp;from=rss) - [The Intel 4004 Was the First Microprocessor, Right? ](https://soylentnews.org/article.pl?sid=25/11/18/125234&amp;from=rss)
* [2025-11-20, 00:18:00](https://soylentnews.org/article.pl?sid=25/11/18/120241&amp;from=rss) - [Full Metal Modine](https://soylentnews.org/article.pl?sid=25/11/18/120241&amp;from=rss)
* [2025-11-19, 19:36:00](https://soylentnews.org/article.pl?sid=25/11/18/113239&amp;from=rss) - [Big Tech Wants Direct Access to Our Brains](https://soylentnews.org/article.pl?sid=25/11/18/113239&amp;from=rss)
* [2025-11-19, 14:49:00](https://soylentnews.org/article.pl?sid=25/11/18/0121255&amp;from=rss) - [FPGA Based IBM-PC-XT](https://soylentnews.org/article.pl?sid=25/11/18/0121255&amp;from=rss)
* [2025-11-19, 10:01:00](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss) - [Canonical Extends Ubuntu Support to 15 Years](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss)
* [2025-11-19, 05:16:00](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss) - [Mozilla Unveils Plans for New &apos;AI Window&apos; Browsing Mode in Firefox, Opens Signups](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss)
* [2025-11-19, 01:57:37](https://news.ycombinator.com/item?id=45974977) - [First kiss dates back 21M years](https://www.bbc.com/news/articles/cr43gq61g2qo)
* [2025-11-19, 00:31:00](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss) - [Raccoons Are Showing Early Signs of Domestication](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss)
