# [News Summary](https://kherrick.github.io/news-summary/)

## Electric Vehicles and Automotive Innovation

* [Rivian and Lucid Win Right to Sell Their EVs Directly to Buyers in Washington State](https://tech.slashdot.org/story/26/03/30/0219229/rivian-and-lucid-win-right-to-sell-their-evs-directly-to-buyers-in-washington-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Artificial Intelligence and Machine Learning

* [The Sudden Fall of OpenAI's Most Hyped Product Since ChatGPT](https://www.wsj.com/tech/ai/the-sudden-fall-of-openais-most-hyped-product-since-chatgpt-64c730c9)

* [Google Unveils TurboQuant, a New AI Memory Compression Algorithm](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss)

* [AI Agents Could Make Free Software Matter Again](https://www.gjlondon.com/blog/ai-agents-could-make-free-software-matter-again/)

## Technology and Hardware Development

* [Free, native RISC-V (RV64GC) CI on GitHub](https://riseproject.dev/2026/03/24/announcing-the-rise-risc-v-runners-free-native-risc-v-ci-on-github/)

* [World's Smallest QR Code - Smaller Than Bacteria - Could Store Data for Centuries](https://hardware.slashdot.org/story/26/03/29/2112231/worlds-smallest-qr-code---smaller-than-bacteria---could-store-data-for-centuries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Open Source Initiatives

* [Is It Time For Open Source to Start Charging For Access?](https://developers.slashdot.org/story/26/03/29/2343236/is-it-time-for-open-source-to-start-charging-for-access?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Neovim 0.12.0](https://github.com/neovim/neovim/releases/tag/v0.12.0)

## Apple Developments

* [New Apple Silicon M4 and M5 HiDPI Limitation on 4K External Displays](https://smcleod.net/2026/03/new-apple-silicon-m4-m5-hidpi-limitation-on-4k-external-displays/)

* [MacOS 26.4 Adds Warnings For ClickFix Attacks to Its Terminal App](https://apple.slashdot.org/story/26/03/28/2055255/macos-264-adds-warnings-for-clickfix-attacks-to-its-terminal-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Unique Developments in Science

* [Jupiter's Lightning May Have the Force of Nuclear Weapons](https://science.slashdot.org/story/26/03/28/187258/jupiters-lightning-may-have-the-force-of-nuclear-weapons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The Mystery of How Volcanic Lightning Happens Has Been Solved](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss)

## Historical Retrospectives

* [The rise and fall of IBM's 4 Pi aerospace computers: an illustrated history](http://www.righto.com/2026/03/ibm-4-pi-computer-history.html)

* [What Made Bell Labs So Successful?](https://tech.slashdot.org/story/26/03/29/0249241/what-made-bell-labs-so-successful?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Quirky Technology Stories

* [This gorgeous DIY camera looks straight out of Severance](https://www.dpreview.com/articles/9055612016/saturnix-diy-camera-alien-sci-fi-raspberry-pi)

* [I Decompiled the White House's New App](https://blog.thereallo.dev/blog/decompiling-the-white-house-app)

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

* [2026-03-30, 03:34:00](https://tech.slashdot.org/story/26/03/30/0219229/rivian-and-lucid-win-right-to-sell-their-evs-directly-to-buyers-in-washington-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rivian and Lucid Win Right to Sell Their EVs Directly to Buyers in Washington State](https://tech.slashdot.org/story/26/03/30/0219229/rivian-and-lucid-win-right-to-sell-their-evs-directly-to-buyers-in-washington-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 02:43:17](https://news.ycombinator.com/item?id=47569837) - [The Sudden Fall of OpenAI&apos;s Most Hyped Product Since ChatGPT](https://www.wsj.com/tech/ai/the-sudden-fall-of-openais-most-hyped-product-since-chatgpt-64c730c9)
* [2026-03-30, 02:07:00](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss) - [Google Unveils TurboQuant, a New AI Memory Compression Algorithm](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss)
* [2026-03-30, 01:43:20](https://news.ycombinator.com/item?id=47569502) - [New Apple Silicon M4 and M5 HiDPI Limitation on 4K External Displays](https://smcleod.net/2026/03/new-apple-silicon-m4-m5-hidpi-limitation-on-4k-external-displays/)
* [2026-03-30, 01:38:17](https://news.ycombinator.com/item?id=47569471) - [Philly courts will ban all smart eyeglasses starting next week](https://www.inquirer.com/news/philadelphia/smart-glasses-ai-meta-courts-20260326.html)
* [2026-03-30, 01:37:00](https://tech.slashdot.org/story/26/03/30/0135235/will-social-media-change-after-youtube-and-metas-court-defeat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Social Media Change After YouTube and Meta&apos;s Court Defeat?](https://tech.slashdot.org/story/26/03/30/0135235/will-social-media-change-after-youtube-and-metas-court-defeat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 01:15:11](https://lobste.rs/s/zgkb0z/this_gorgeous_diy_camera_looks_straight) - [This gorgeous DIY camera looks straight out of Severance](https://www.dpreview.com/articles/9055612016/saturnix-diy-camera-alien-sci-fi-raspberry-pi)
* [2026-03-30, 00:57:59](https://lobste.rs/s/ttyfeb/ai_agents_could_make_free_software_matter) - [AI Agents Could Make Free Software Matter Again](https://www.gjlondon.com/blog/ai-agents-could-make-free-software-matter-again/)
* [2026-03-30, 00:19:51](https://lobste.rs/s/eelhis/free_native_risc_v_rv64gc_ci_on_github) - [Free, native RISC-V (RV64GC) CI on GitHub](https://riseproject.dev/2026/03/24/announcing-the-rise-risc-v-runners-free-native-risc-v-ci-on-github/)
* [2026-03-29, 23:52:53](https://lobste.rs/s/uh3cha/telecheck_tyms_past) - [telecheck and tyms past](https://computer.rip/2026-03-29-telecheck-and-tyms-past.html)
* [2026-03-29, 23:46:00](https://developers.slashdot.org/story/26/03/29/2343236/is-it-time-for-open-source-to-start-charging-for-access?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is It Time For Open Source to Start Charging For Access?](https://developers.slashdot.org/story/26/03/29/2343236/is-it-time-for-open-source-to-start-charging-for-access?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 22:59:34](https://lobste.rs/s/zxtsba/making_hnsw_actually_work_with_where) - [Making HNSW actually work with WHERE clauses](https://cigrainger.com/blog/duckdb-hnsw-acorn/)
* [2026-03-29, 22:57:08](https://lobste.rs/s/350aqk/c_26_is_done_trip_report_march_2026_iso_c) - [C++26 is done! — Trip report: March 2026 ISO C++ standards meeting (London Croydon, UK)](https://herbsutter.com/2026/03/29/c26-is-done-trip-report-march-2026-iso-c-standards-meeting-london-croydon-uk/)
* [2026-03-29, 22:36:35](https://lobste.rs/s/wnuuoj/oxcaml_labs) - [OxCaml Labs](https://anil.recoil.org/projects/oxcaml)
* [2026-03-29, 22:28:11](https://news.ycombinator.com/item?id=47568080) - [There is No Spoon. A software engineers primer for demystified ML](https://github.com/dreddnafious/thereisnospoon)
* [2026-03-29, 22:21:34](https://news.ycombinator.com/item?id=47568028) - [Coding Agents Could Make Free Software Matter Again](https://www.gjlondon.com/blog/ai-agents-could-make-free-software-matter-again/)
* [2026-03-29, 22:19:00](https://entertainment.slashdot.org/story/26/03/29/2216247/project-hail-mary-real-space-science-real-astrophotography?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Project Hail Mary&apos;:  Real Space Science, Real Astrophotography](https://entertainment.slashdot.org/story/26/03/29/2216247/project-hail-mary-real-space-science-real-astrophotography?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 22:15:06](https://news.ycombinator.com/item?id=47567969) - [Claude Code runs Git reset –hard origin/main against project repo every 10 mins](https://github.com/anthropics/claude-code/issues/40710)
* [2026-03-29, 21:26:00](https://soylentnews.org/article.pl?sid=26/03/28/0347204&amp;from=rss) - [A 32-Year-Old Bug Walks Into a Telnet Server](https://soylentnews.org/article.pl?sid=26/03/28/0347204&amp;from=rss)
* [2026-03-29, 21:15:00](https://hardware.slashdot.org/story/26/03/29/2112231/worlds-smallest-qr-code---smaller-than-bacteria---could-store-data-for-centuries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s Smallest QR Code - Smaller Than Bacteria - Could Store Data for Centuries](https://hardware.slashdot.org/story/26/03/29/2112231/worlds-smallest-qr-code---smaller-than-bacteria---could-store-data-for-centuries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 20:38:26](https://news.ycombinator.com/item?id=47567049) - [Show HN: Crazierl – An Erlang Operating System](https://crazierl.org/demo/)
* [2026-03-29, 20:30:02](https://news.ycombinator.com/item?id=47566960) - [The road signs that teach travellers about France](https://www.bbc.com/travel/article/20260327-the-road-signs-that-teach-travellers-about-france)
* [2026-03-29, 20:21:05](https://news.ycombinator.com/item?id=47566865) - [ChatGPT won&apos;t let you type until Cloudflare reads your React state](https://www.buchodi.com/chatgpt-wont-let-you-type-until-cloudflare-reads-your-react-state-i-decrypted-the-program-that-does-it/)
* [2026-03-29, 20:04:51](https://lobste.rs/s/gjahwq/repair_2_agilent_54831_oscilloscopes) - [Repair of 2 Agilent 54831 Oscilloscopes](https://tomverbeure.github.io/2026/03/28/Repair-of-Two-Agilent-54831-Oscilloscopes.html)
* [2026-03-29, 19:48:00](https://hardware.slashdot.org/story/26/03/29/1947202/this-friendly-robot-just-installed-100-mw-of-solar-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [This Friendly Robot Just Installed 100 MW of Solar Power](https://hardware.slashdot.org/story/26/03/29/1947202/this-friendly-robot-just-installed-100-mw-of-solar-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 19:36:21](https://news.ycombinator.com/item?id=47566442) - [The Cognitive Dark Forest](https://ryelang.org/blog/posts/cognitive-dark-forest/)
* [2026-03-29, 19:26:14](https://news.ycombinator.com/item?id=47566332) - [More on Version Control](https://bramcohen.com/p/more-on-version-control)
* [2026-03-29, 19:08:07](https://news.ycombinator.com/item?id=47566140) - [Kyushu Railway Company Train Varieties](https://www.jrkyushu.co.jp/english/train/index.html)
* [2026-03-29, 19:06:19](https://lobste.rs/s/xv3s8d/rise_fall_ibm_s_4_pi_aerospace_computers) - [The rise and fall of IBM&apos;s 4 Pi aerospace computers: an illustrated history](http://www.righto.com/2026/03/ibm-4-pi-computer-history.html)
* [2026-03-29, 18:34:00](https://tech.slashdot.org/story/26/03/29/1832200/blueskys-newest-product-an-ai-tool-that-gives-you-custom-feeds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bluesky&apos;s Newest Product: an AI Tool That Gives You Custom Feeds](https://tech.slashdot.org/story/26/03/29/1832200/blueskys-newest-product-an-ai-tool-that-gives-you-custom-feeds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 18:19:58](https://lobste.rs/s/gx94qn/pretext_pure_javascript_typescript) - [pretext: Pure JavaScript/TypeScript library for multiline text measurement &amp; layout](https://github.com/chenglou/pretext)
* [2026-03-29, 18:01:55](https://lobste.rs/s/vixzkq/who_s_hiring_q2_2026) - [Who&apos;s hiring? Q2 2026](https://lobste.rs/s/vixzkq/who_s_hiring_q2_2026)
* [2026-03-29, 18:01:25](https://lobste.rs/s/jok8al/r_language_for_data_analysis_graphics) - [R: A Language for Data Analysis and Graphics (1996)](https://www.stat.auckland.ac.nz/%7Eihaka/downloads/R-paper.pdf)
* [2026-03-29, 17:46:12](https://news.ycombinator.com/item?id=47565365) - [C++26 is done ISO C++ standards meeting, Trip Report](https://herbsutter.com/2026/03/29/c26-is-done-trip-report-march-2026-iso-c-standards-meeting-london-croydon-uk/)
* [2026-03-29, 17:44:38](https://lobste.rs/s/64hfnw/neovim_0_12_0) - [Neovim 0.12.0](https://github.com/neovim/neovim/releases/tag/v0.12.0)
* [2026-03-29, 17:39:55](https://news.ycombinator.com/item?id=47565316) - [Neovim 0.12.0](https://github.com/neovim/neovim/releases/tag/v0.12.0)
* [2026-03-29, 16:34:00](https://news.slashdot.org/story/26/03/29/066219/amazon-gambles-on-4b-push-into-americas-rural-areas-may-soon-carry-more-parcels-than-usps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Gambles on $4B Push Into America&apos;s Rural Areas, May Soon Carry More Parcels Than USPS](https://news.slashdot.org/story/26/03/29/066219/amazon-gambles-on-4b-push-into-americas-rural-areas-may-soon-carry-more-parcels-than-usps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 16:32:00](https://soylentnews.org/article.pl?sid=26/03/28/0345249&amp;from=rss) - [Google is Now Changing News Headlines – Without Permission](https://soylentnews.org/article.pl?sid=26/03/28/0345249&amp;from=rss)
* [2026-03-29, 16:26:55](https://news.ycombinator.com/item?id=47564579) - [The rise and fall of IBM&apos;s 4 Pi aerospace computers: an illustrated history](https://www.righto.com/2026/03/ibm-4-pi-computer-history.html)
* [2026-03-29, 16:12:22](https://news.ycombinator.com/item?id=47564421) - [Voyager 1 runs on 69 KB of memory and an 8-track tape recorder](https://techfixated.com/a-1977-time-capsule-voyager-1-runs-on-69-kb-of-memory-and-an-8-track-tape-recorder-4/)
* [2026-03-29, 15:46:50](https://lobste.rs/s/bpotqb/cognitive_dark_forest) - [The Cognitive Dark Forest](https://ryelang.org/blog/posts/cognitive-dark-forest/)
* [2026-03-29, 15:34:00](https://news.slashdot.org/story/26/03/28/2254256/apple-now-requires-device-level-age-verification-in-the-uk-could-the-us-be-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Now Requires Device-Level Age Verification in the UK. Could the US Be Next?](https://news.slashdot.org/story/26/03/28/2254256/apple-now-requires-device-level-age-verification-in-the-uk-could-the-us-be-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 15:08:49](https://lobste.rs/s/wpjsws/oneluapro_v5_5_0_1_released) - [OneLuaPro v5.5.0.1 released](https://github.com/OneLuaPro/OneLuaPro/releases/tag/v5.5.0.1)
* [2026-03-29, 14:34:00](https://science.slashdot.org/story/26/03/28/187258/jupiters-lightning-may-have-the-force-of-nuclear-weapons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jupiter&apos;s Lightning May Have the Force of Nuclear Weapons](https://science.slashdot.org/story/26/03/28/187258/jupiters-lightning-may-have-the-force-of-nuclear-weapons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 14:20:23](https://news.ycombinator.com/item?id=47563384) - [Police used AI facial recognition to wrongly arrest TN woman for crimes in ND](https://www.cnn.com/2026/03/29/us/angela-lipps-ai-facial-recognition)
* [2026-03-29, 13:21:28](https://lobste.rs/s/isaccy/introduction_pinetime_pro) - [Introduction to the PineTime Pro](https://pine64.org/2026/03/28/pinetime_march_2026/)
* [2026-03-29, 11:52:00](https://soylentnews.org/article.pl?sid=26/03/27/0334236&amp;from=rss) - [Pilot Didn&apos;t Mind NASA&apos;s Experimental Plane Doesnt Have a Front Window](https://soylentnews.org/article.pl?sid=26/03/27/0334236&amp;from=rss)
* [2026-03-29, 11:04:00](https://tech.slashdot.org/story/26/03/29/0249241/what-made-bell-labs-so-successful?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Made Bell Labs So Successful?](https://tech.slashdot.org/story/26/03/29/0249241/what-made-bell-labs-so-successful?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 10:29:00](https://lobste.rs/s/ntmv9j/what_category_theory_teaches_us_about) - [What Category Theory Teaches Us About DataFrames](https://mchav.github.io/what-category-theory-teaches-us-about-dataframes/)
* [2026-03-29, 10:10:12](https://news.ycombinator.com/item?id=47561819) - [Miasma: A tool to trap AI web scrapers in an endless poison pit](https://github.com/austin-weeks/miasma)
* [2026-03-29, 09:46:58](https://news.ycombinator.com/item?id=47561711) - [Nitrile and latex gloves may cause overestimation of microplastics](https://news.umich.edu/nitrile-and-latex-gloves-may-cause-overestimation-of-microplastics-u-m-study-reveals/)
* [2026-03-29, 08:58:24](https://news.ycombinator.com/item?id=47561489) - [LinkedIn uses 2.4 GB RAM across two tabs](https://news.ycombinator.com/item?id=47561489)
* [2026-03-29, 07:34:00](https://entertainment.slashdot.org/story/26/03/29/0722208/disney-ends-1b-openai-investment-after-soras-surprise-closure-whats-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney Ends $1B OpenAI Investment After Sora&apos;s Surprise Closure. What&apos;s Next?](https://entertainment.slashdot.org/story/26/03/29/0722208/disney-ends-1b-openai-investment-after-soras-surprise-closure-whats-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 07:03:00](https://soylentnews.org/article.pl?sid=26/03/27/0325254&amp;from=rss) - [Someone Forked systemd to Strip Out Its Age Verification Support](https://soylentnews.org/article.pl?sid=26/03/27/0325254&amp;from=rss)
* [2026-03-29, 06:01:31](https://lobste.rs/s/qqpc7k/heerich_js_tiny_engine_for_3d_voxel_scenes) - [heerich.js - A tiny engine for 3D voxel scenes rendered to SVG](https://meodai.github.io/heerich)
* [2026-03-29, 04:49:25](https://lobste.rs/s/dblov3/libeatmydata_disable_fsync_save) - [libeatmydata - disable fsync and SAVE](https://www.flamingspork.com/projects/libeatmydata/)
* [2026-03-29, 04:47:03](https://lobste.rs/s/vodhvg/ai_hot_takes_from_platform_engineer_sre) - [AI Hot Takes From A Platform Engineer / SRE](https://alienchow.dev/post/ai_takeaways_mar_2026/)
* [2026-03-29, 03:34:00](https://it.slashdot.org/story/26/03/28/2013229/do-emergency-microsoft-oracle-patches-point-to-wider-issues?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do Emergency Microsoft, Oracle Patches Point to Wider Issues?](https://it.slashdot.org/story/26/03/28/2013229/do-emergency-microsoft-oracle-patches-point-to-wider-issues?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-29, 02:32:10](https://lobste.rs/s/sy7ctg/6o6_v1_1_faster_6502_on_6502) - [6o6 v1.1: Faster 6502-on-6502 virtualization for a C64/Apple II Apple-1 emulator](http://oldvcr.blogspot.com/2026/03/6o6-v11-faster-6502-on-6502.html)
* [2026-03-29, 02:18:00](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss) - [Nvidia CEO Jensen Huang Says ‘I Think We&apos;ve Achieved AGI’](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss)
* [2026-03-29, 01:39:06](https://lobste.rs/s/bywfs1/legacy_pc_design_misery_2009) - [Legacy PC design misery (2009)](https://mjg59.livejournal.com/118098.html)
* [2026-03-29, 01:34:00](https://apple.slashdot.org/story/26/03/28/2055255/macos-264-adds-warnings-for-clickfix-attacks-to-its-terminal-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MacOS 26.4 Adds Warnings For ClickFix Attacks to Its Terminal App](https://apple.slashdot.org/story/26/03/28/2055255/macos-264-adds-warnings-for-clickfix-attacks-to-its-terminal-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-28, 22:34:00](https://news.slashdot.org/story/26/03/28/2215230/systemd-contributor-harassed-over-optional-age-verification-field-suggests-installer-level-disabling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SystemD Contributor Harassed Over Optional Age Verification Field, Suggests Installer-Level Disabling](https://news.slashdot.org/story/26/03/28/2215230/systemd-contributor-harassed-over-optional-age-verification-field-suggests-installer-level-disabling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-28, 21:34:00](https://soylentnews.org/article.pl?sid=26/03/27/0310204&amp;from=rss) - [Age Checks Creep Into Linux, systemd Locks It in, Developer Defends Himself](https://soylentnews.org/article.pl?sid=26/03/27/0310204&amp;from=rss)
* [2026-03-28, 21:03:23](https://news.ycombinator.com/item?id=47558094) - [Show HN: QuickBEAM – run JavaScript as supervised Erlang/OTP processes](https://github.com/elixir-volt/quickbeam)
* [2026-03-28, 20:25:19](https://lobste.rs/s/2zvgxm/i_decompiled_white_house_s_new_app) - [I Decompiled the White House&apos;s New App](https://blog.thereallo.dev/blog/decompiling-the-white-house-app)
* [2026-03-28, 19:13:02](https://lobste.rs/s/u4bws9/bubblewrap_your_dev_env_agents) - [BubbleWrap your dev env and agents](https://dpc.pw/posts/bubblewrap-your-dev-env-and-agents/)
* [2026-03-28, 16:52:45](https://news.ycombinator.com/item?id=47556290) - [Pretext: TypeScript library for multiline text measurement and layout](https://github.com/chenglou/pretext)
* [2026-03-28, 16:51:00](https://soylentnews.org/article.pl?sid=26/03/26/0657232&amp;from=rss) - [CERN Scientists Burn AI Into Silicon to Stem Data Deluge](https://soylentnews.org/article.pl?sid=26/03/26/0657232&amp;from=rss)
* [2026-03-28, 13:02:13](https://lobste.rs/s/bwyqi9/linux_finally_for_everyone) - [Linux, finally for everyone](https://yololinux.com)
* [2026-03-28, 12:09:00](https://soylentnews.org/article.pl?sid=26/03/26/0650221&amp;from=rss) - [Elon Musk Wants to Build 50 Times More Chips Than the World Currently Produces, Using &apos;New Physics&apos;](https://soylentnews.org/article.pl?sid=26/03/26/0650221&amp;from=rss)
* [2026-03-28, 11:56:27](https://news.ycombinator.com/item?id=47553766) - [Quantum Control Plane](https://github.com/mareksuchodolski12-hash/kwantowy)
* [2026-03-28, 07:24:00](https://soylentnews.org/article.pl?sid=26/03/26/0645257&amp;from=rss) - [Australia to Datacenter Operators: BYO Energy, Pay Your Way, Build Green, or Stay Home](https://soylentnews.org/article.pl?sid=26/03/26/0645257&amp;from=rss)
* [2026-03-28, 02:36:00](https://soylentnews.org/article.pl?sid=26/03/26/0644236&amp;from=rss) - [An Uncontrolled Experiment in Atmospheric Chemistry](https://soylentnews.org/article.pl?sid=26/03/26/0644236&amp;from=rss)
* [2026-03-27, 23:10:36](https://news.ycombinator.com/item?id=47549586) - [About the Atmosphere](https://toni.org/2026/03/27/about-the-atmosphere/)
* [2026-03-27, 21:50:00](https://soylentnews.org/article.pl?sid=26/03/26/0634229&amp;from=rss) - [Concerns Raised Over Shahed Kamikaze Drone Listings on Alibaba](https://soylentnews.org/article.pl?sid=26/03/26/0634229&amp;from=rss)
* [2026-03-27, 17:22:11](https://news.ycombinator.com/item?id=47545607) - [15 Years of Forking](https://www.waterfox.com/blog/15-years-of-forking/)
* [2026-03-27, 16:03:00](https://soylentnews.org/article.pl?sid=26/03/26/0225217&amp;from=rss) - [Palantir Trial Plugs Into UK Financial Watchdog&apos;s Data Trove](https://soylentnews.org/article.pl?sid=26/03/26/0225217&amp;from=rss)
* [2026-03-27, 14:40:47](https://news.ycombinator.com/item?id=47543198) - [Interview: Nobonoko, Master of the Minimal Sequencer](https://fi-le.net/nobo/)
* [2026-03-27, 11:20:00](https://soylentnews.org/article.pl?sid=26/03/26/0220234&amp;from=rss) - [Amid Fuel Crunch, Cuban Mechanic Converts Car to Run on Charcoal](https://soylentnews.org/article.pl?sid=26/03/26/0220234&amp;from=rss)
* [2026-03-27, 06:38:00](https://soylentnews.org/article.pl?sid=26/03/26/0219214&amp;from=rss) - [The US Bans All New Foreign-Made Network Routers](https://soylentnews.org/article.pl?sid=26/03/26/0219214&amp;from=rss)
* [2026-03-27, 04:41:07](https://news.ycombinator.com/item?id=47539165) - [Ohm&apos;s Peg-to-WASM Compiler](https://ohmjs.org/blog/2026/03/12/peg-to-wasm)
* [2026-03-27, 01:55:00](https://soylentnews.org/article.pl?sid=26/03/26/0217248&amp;from=rss) - [TCL&apos;s German QLED Ban Puts Pressure on TV Brands to be More Honest About QDs](https://soylentnews.org/article.pl?sid=26/03/26/0217248&amp;from=rss)
* [2026-03-26, 21:05:00](https://soylentnews.org/article.pl?sid=26/03/25/2355253&amp;from=rss) - [Supreme Court Says Internet Service Provider Isn&apos;t Liable for Bootlegged Music Downloads](https://soylentnews.org/article.pl?sid=26/03/25/2355253&amp;from=rss)
* [2026-03-26, 19:45:29](https://news.ycombinator.com/item?id=47534812) - [I&apos;ll buy your electronics to feed our robot](https://www.dayworkx.com/)
* [2026-03-26, 16:23:00](https://soylentnews.org/article.pl?sid=26/03/25/2344247&amp;from=rss) - [Tech Employees Are Reportedly Being Evaluated by How Fast They Burn Through LLM Tokens](https://soylentnews.org/article.pl?sid=26/03/25/2344247&amp;from=rss)
* [2026-03-26, 16:14:48](https://news.ycombinator.com/item?id=47532338) - [Gonon: Building a Clock with No Numerals](https://tonygaeta.com/perceptor/code/gonon)
* [2026-03-26, 15:17:17](https://news.ycombinator.com/item?id=47531576) - [The RISE RISC-V Runners: free, native RISC-V CI on GitHub](https://riseproject.dev/2026/03/24/announcing-the-rise-risc-v-runners-free-native-risc-v-ci-on-github/)
* [2026-03-26, 11:40:00](https://soylentnews.org/article.pl?sid=26/03/25/2341257&amp;from=rss) - [Micron Predicts That Cars Will Need 300GB of RAM](https://soylentnews.org/article.pl?sid=26/03/25/2341257&amp;from=rss)
* [2026-03-26, 06:59:00](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss) - [The Mystery of How Volcanic Lightning Happens Has Been Solved](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss)
* [2026-03-26, 02:12:00](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss) - [NASA Sets &apos;Impossible&apos; Ground Rules for Relocation of &apos;Flown Space Vehicle&apos;](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss)
