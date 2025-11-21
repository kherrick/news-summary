# [News Summary](https://kherrick.github.io/news-summary/)

## Open Source and Software Developments

* [Helping Valve to Power Up Steam Devices](https://www.igalia.com/2025/11/helpingvalve.html) discusses efforts to enhance gaming hardware in collaboration with Valve.

* [Zork I, II, and III go Open Source](https://opensource.microsoft.com/blog/2025/11/20/preserving-code-that-shaped-generations-zork-i-ii-and-iii-go-open-source) reveals the iconic games as open-source projects.

* [Source code for a 1977 version of Zork](https://github.com/MITDDC/zork) shares the original Zork video game source code for preservation.

* [Building a Minimal Viable Armv7 Emulator from Scratch](https://xnacly.me/posts/2025/building-a-minimal-viable-armv7-emulator/) explores the development of a basic emulator for learning purposes.

## AI and Technological Innovations

* [The New AI Consciousness Paper](https://www.astralcodexten.com/p/the-new-ai-consciousness-paper) delves into the advancements and implications of AI consciousness.

* [Meta Enters Power Trading To Support Its AI Energy Needs](https://hardware.slashdot.org/story/25/11/21/1534212/meta-enters-power-trading-to-support-its-ai-energy-needs?utm_source=rss1.0mainlinkanon&utm_medium=feed) highlights Meta's strategy in power trading to fuel its AI operations.

* [FAWK: LLMs can write a language interpreter](https://martin.janiczek.cz/2025/11/21/fawk-llms-can-write-a-language-interpreter.html) examines the abilities of large language models in software development.

* [Command Lines](https://www.wreflection.com/p/command-lines-ai-coding) explores the intersection of AI and coding practices.

## Cybersecurity and Risks

* [Google Chrome Bug Exploited as an 0-Day - Patch Now or Risk Full System Compromise](https://soylentnews.org/article.pl?sid=25/11/21/1348200&from=rss) warns users about a critical security vulnerability.

* [Google Says Hackers Stole Data From Over 200 Companies Following Gainsight Breach](https://tech.slashdot.org/story/25/11/21/1858250/google-says-hackers-stole-data-from-over-200-companies-following-gainsight-breach?utm_source=rss1.0mainlinkanon&utm_medium=feed) investigates a major data breach affecting numerous companies.

## Environmental and Scientific Insights

* [Floating Solar Panels Show Promise, but Environmental Impacts Vary by Location](https://soylentnews.org/article.pl?sid=25/11/18/1210237&from=rss) explores the ecological effects of solar technology implemented on water surfaces.

* [Moss Spores Survive 9 Months Outside ISS](https://science.slashdot.org/story/25/11/20/2316230/moss-spores-survive-9-months-outside-iss?utm_source=rss1.0mainlinkanon&utm_medium=feed) details how moss spores adapted to space conditions.

* [CERN Can Now Produce Antihydrogen Atoms Eight Times Faster Than Before](https://science.slashdot.org/story/25/11/21/066251/cern-can-now-produce-antihydrogen-atoms-eight-times-faster-than-before?utm_source=rss1.0mainlinkanon&utm_medium=feed) highlights advancements in particle physics.

* [A Spine-Tingling Discovery: This Dinosaur Had Spiked Body Armor](https://soylentnews.org/article.pl?sid=25/11/16/1311207&from=rss) reveals exciting paleontological findings.

## Cultural and Gaming Highlights

* [Pixar: The Early Days A never-before-seen 1996 interview](https://stevejobsarchive.com/stories/pixar-early-days) offers a glimpse into Pixar's foundational moments.

* [How Two Janitors Made One of the Year's Most Charming RPGs](https://games.slashdot.org/story/25/11/21/188225/how-two-janitors-made-one-of-the-years-most-charming-rpgs?utm_source=rss1.0mainlinkanon&utm_medium=feed) shares a heartwarming story of indie game development.

* [XBMC 4.0 for the Original Xbox](https://www.xbox-scene.info/articles/announcing-xbmc-40-for-the-original-xbox-r64/) announces updates for the beloved media player on Xbox hardware.

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

* [2025-11-21, 21:46:32](https://lobste.rs/s/dw3oup/oss_friday_update) - [OSS Friday Update](https://noteflakes.com/articles/2025-11-21-friday-update)
* [2025-11-21, 21:25:00](https://news.slashdot.org/story/25/11/21/207242/british-army-will-use-call-of-duty-to-train-soldiers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [British Army Will Use Call of Duty To Train Soldiers](https://news.slashdot.org/story/25/11/21/207242/british-army-will-use-call-of-duty-to-train-soldiers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 21:05:09](https://news.ycombinator.com/item?id=46008983) - [The senior population is booming. Caregiving is struggling to keep up](https://www.cnbc.com/2025/11/21/senior-caregiving-labor.html)
* [2025-11-21, 20:57:47](https://lobste.rs/s/fwsgcq/impala_tui_for_managing_wifi_on_linux) - [impala - A TUI for managing wifi on Linux](https://github.com/pythops/impala)
* [2025-11-21, 20:49:50](https://lobste.rs/s/zypzg0/helping_valve_power_up_steam_devices) - [Helping Valve to Power Up Steam Devices](https://www.igalia.com/2025/11/helpingvalve.html)
* [2025-11-21, 20:46:36](https://news.ycombinator.com/item?id=46008788) - [We Remain Alive Also in a Dead Internet](https://slavoj.substack.com/p/why-we-remain-alive-also-in-a-dead-954)
* [2025-11-21, 20:45:06](https://news.ycombinator.com/item?id=46008769) - [Pixar: The Early Days A never-before-seen 1996 interview](https://stevejobsarchive.com/stories/pixar-early-days)
* [2025-11-21, 20:45:00](https://slashdot.org/story/25/11/21/1827242/japan-says-worlds-largest-nuclear-plant-to-restart?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Says World&apos;s Largest Nuclear Plant To Restart](https://slashdot.org/story/25/11/21/1827242/japan-says-worlds-largest-nuclear-plant-to-restart?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 20:36:58](https://lobste.rs/s/wujuzj/think_you_can_t_interpose_static_binaries) - [Think you can’t interpose static binaries with LD_PRELOAD? Think again](https://balintreczey.hu/blog/think-you-cant-interpose-static-binaries-with-ld_preload-think-again/)
* [2025-11-21, 20:30:51](https://news.ycombinator.com/item?id=46008628) - [We remember the internet bubble. This mania looks and feels the same](https://crazystupidtech.com/2025/11/21/boom-bubble-bust-boom-why-should-ai-be-different/)
* [2025-11-21, 20:20:48](https://lobste.rs/s/ltjwow/understanding_qcow2_risks_with_qemu) - [Understanding QCOW2 Risks with QEMU cache=none in Proxmox](https://kb.blockbridge.com/technote/proxmox-qemu-cache-none-qcow2/)
* [2025-11-21, 20:04:00](https://tech.slashdot.org/story/25/11/21/1858250/google-says-hackers-stole-data-from-over-200-companies-following-gainsight-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says Hackers Stole Data From Over 200 Companies Following Gainsight Breach](https://tech.slashdot.org/story/25/11/21/1858250/google-says-hackers-stole-data-from-over-200-companies-following-gainsight-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 19:20:00](https://tech.slashdot.org/story/25/11/21/1912228/microsoft-finally-admits-almost-all-major-windows-11-core-features-are-broken?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Finally Admits Almost All Major Windows 11 Core Features Are Broken](https://tech.slashdot.org/story/25/11/21/1912228/microsoft-finally-admits-almost-all-major-windows-11-core-features-are-broken?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 19:10:00](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss) - [Google Chrome Bug Exploited as an 0-Day - Patch Now or Risk Full System Compromise](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss)
* [2025-11-21, 18:49:00](https://it.slashdot.org/story/25/11/21/1849253/thunderbird-pro-enters-production-testing-ahead-of-9month-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Thunderbird Pro Enters Production Testing Ahead of $9/Month Launch](https://it.slashdot.org/story/25/11/21/1849253/thunderbird-pro-enters-production-testing-ahead-of-9month-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 18:36:46](https://lobste.rs/s/bv3570/building_minimal_viable_armv7_emulator) - [Building a Minimal Viable Armv7 Emulator from Scratch](https://xnacly.me/posts/2025/building-a-minimal-viable-armv7-emulator/)
* [2025-11-21, 18:30:52](https://news.ycombinator.com/item?id=46007294) - [Brazil charges 31 people in major carbon credit fraud investigation](https://news.mongabay.com/short-article/2025/11/brazil-charges-31-people-in-major-carbon-credit-fraud-investigation/)
* [2025-11-21, 18:28:31](https://news.ycombinator.com/item?id=46007267) - [How/why to sweep async tasks under a Postgres table](https://taylor.town/pg-task)
* [2025-11-21, 18:08:00](https://games.slashdot.org/story/25/11/21/188225/how-two-janitors-made-one-of-the-years-most-charming-rpgs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Two Janitors Made One of the Year&apos;s Most Charming RPGs](https://games.slashdot.org/story/25/11/21/188225/how-two-janitors-made-one-of-the-years-most-charming-rpgs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 17:58:31](https://lobste.rs/s/8x1hpo/web_pentaculum_satanic_webring_hosted_on) - [web pentaculum - a satanic webring hosted on OpenBSD.amsterdam](https://netr.ing/)
* [2025-11-21, 17:29:59](https://news.ycombinator.com/item?id=46006616) - [Helping Valve to power up Steam devices](https://www.igalia.com/2025/11/helpingvalve.html)
* [2025-11-21, 17:28:25](https://news.ycombinator.com/item?id=46006598) - [Solving Fizz Buzz with Cosines](https://susam.net/fizz-buzz-with-cosines.html)
* [2025-11-21, 17:24:00](https://slashdot.org/story/25/11/21/1724242/ai-nutrition-tracking-stinks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Nutrition Tracking Stinks](https://slashdot.org/story/25/11/21/1724242/ai-nutrition-tracking-stinks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 17:00:00](https://news.ycombinator.com/item?id=46006250) - [Pivot Robotics (YC W24) Is Hiring for an Industrial Automation Hardware Engineer](https://www.ycombinator.com/companies/pivot-robotics/jobs/7xG9Dc6-mechanical-engineer-controls)
* [2025-11-21, 16:42:19](https://news.ycombinator.com/item?id=46006082) - [You can make PS2 games in JavaScript](https://jslegenddev.substack.com/p/you-can-now-make-ps2-games-in-javascript)
* [2025-11-21, 16:41:00](https://slashdot.org/story/25/11/21/1626239/amazon-cut-thousands-of-engineers-in-its-record-layoffs-despite-saying-it-needs-to-innovate-faster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Cut Thousands of Engineers in Its Record Layoffs, Despite Saying It Needs To Innovate Faster](https://slashdot.org/story/25/11/21/1626239/amazon-cut-thousands-of-engineers-in-its-record-layoffs-despite-saying-it-needs-to-innovate-faster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 16:34:52](https://news.ycombinator.com/item?id=46006016) - [Show HN: Wealthfolio 2.0- Open source investment tracker. Now Mobile and Docker](https://wealthfolio.app/?v=2.0)
* [2025-11-21, 16:33:28](https://news.ycombinator.com/item?id=46006004) - [Command Lines](https://www.wreflection.com/p/command-lines-ai-coding)
* [2025-11-21, 16:25:48](https://news.ycombinator.com/item?id=46005928) - [The New AI Consciousness Paper](https://www.astralcodexten.com/p/the-new-ai-consciousness-paper)
* [2025-11-21, 16:10:57](https://lobste.rs/s/klv6mo/source_code_for_1977_version_zork) - [Source code for a 1977 version of Zork](https://github.com/MITDDC/zork)
* [2025-11-21, 16:01:00](https://hardware.slashdot.org/story/25/11/21/1534212/meta-enters-power-trading-to-support-its-ai-energy-needs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Enters Power Trading To Support Its AI Energy Needs](https://hardware.slashdot.org/story/25/11/21/1534212/meta-enters-power-trading-to-support-its-ai-energy-needs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 15:44:16](https://news.ycombinator.com/item?id=46005553) - [Arduino published updated terms and conditions: no longer an open commons](https://www.molecularist.com/2025/11/did-qualcomm-kill-arduino-for-good.html)
* [2025-11-21, 15:20:00](https://it.slashdot.org/story/25/11/21/1516219/microsofts-ai-powered-copy-and-paste-can-now-use-on-device-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s AI-Powered Copy and Paste Can Now Use On-Device AI](https://it.slashdot.org/story/25/11/21/1516219/microsofts-ai-powered-copy-and-paste-can-now-use-on-device-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 15:18:05](https://news.ycombinator.com/item?id=46005349) - [XBMC 4.0 for the Original Xbox](https://www.xbox-scene.info/articles/announcing-xbmc-40-for-the-original-xbox-r64/)
* [2025-11-21, 14:50:36](https://news.ycombinator.com/item?id=46005111) - [We should all be using dependency cooldowns](https://blog.yossarian.net/2025/11/21/We-should-all-be-using-dependency-cooldowns)
* [2025-11-21, 14:48:43](https://lobste.rs/s/rygog1/we_should_all_be_using_dependency) - [We should all be using dependency cooldowns](https://blog.yossarian.net/2025/11/21/We-should-all-be-using-dependency-cooldowns)
* [2025-11-21, 14:40:00](https://tech.slashdot.org/story/25/11/21/1436243/googles-recent-progress-in-ai-could-create-some-temporary-economic-headwinds-for-openai-altman-warns-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Recent Progress in AI Could &apos;Create Some Temporary Economic Headwinds&apos; For OpenAI, Altman Warns Employees](https://tech.slashdot.org/story/25/11/21/1436243/googles-recent-progress-in-ai-could-create-some-temporary-economic-headwinds-for-openai-altman-warns-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 14:28:51](https://lobste.rs/s/ufvdmn/there_s_always_going_be_way_not_code_error) - [There&apos;s always going to be a way to not code error handling](https://utcc.utoronto.ca/~cks/space/blog/programming/AlwaysUncodedErrorHandling)
* [2025-11-21, 14:23:00](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss) - [China Cuts Open New Robot on Stage to Prove Authenticity](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss)
* [2025-11-21, 14:18:41](https://lobste.rs/s/f2omyv/go_s_runtime_may_someday_start_explicitly) - [Go&apos;s runtime may someday start explicitly freeing some internal memory](https://utcc.utoronto.ca/~cks/space/blog/programming/GoExplicitMemoryFreeing)
* [2025-11-21, 14:00:00](https://news.slashdot.org/story/25/11/21/1254229/homeschooling-hits-record-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Homeschooling Hits Record Numbers](https://news.slashdot.org/story/25/11/21/1254229/homeschooling-hits-record-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 13:42:08](https://lobste.rs/s/0squ96/more_tales_about_outages_numeric_limits) - [More tales about outages and numeric limits](https://rachelbythebay.com/w/2025/11/18/down/)
* [2025-11-21, 13:29:14](https://news.ycombinator.com/item?id=46004364) - [EXIF orientation info in PNGs isn&apos;t used for image-orientation: from-image](https://bugzilla.mozilla.org/show_bug.cgi?id=1627423)
* [2025-11-21, 13:23:16](https://news.ycombinator.com/item?id=46004293) - [Making a Small RPG](https://jslegenddev.substack.com/p/making-a-small-rpg)
* [2025-11-21, 13:03:57](https://lobste.rs/s/lwepwh/undo_redo_command_pattern) - [Undo, Redo, and the Command Pattern](https://www.esveo.com/en/blog/undo-redo-and-the-command-pattern/)
* [2025-11-21, 13:00:00](https://hardware.slashdot.org/story/25/11/21/0616243/hp-and-dell-disable-hevc-support-built-into-their-laptops-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HP and Dell Disable HEVC Support Built Into Their Laptops&apos; CPUs](https://hardware.slashdot.org/story/25/11/21/0616243/hp-and-dell-disable-hevc-support-built-into-their-laptops-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 10:28:49](https://news.ycombinator.com/item?id=46003144) - [FAWK: LLMs can write a language interpreter](https://martin.janiczek.cz/2025/11/21/fawk-llms-can-write-a-language-interpreter.html)
* [2025-11-21, 10:27:47](https://lobste.rs/s/pucsfk/fawk_llms_can_write_language_interpreter) - [FAWK: LLMs can write a language interpreter](https://martin.janiczek.cz/2025/11/21/fawk-llms-can-write-a-language-interpreter.html)
* [2025-11-21, 10:05:43](https://lobste.rs/s/n2ciff/why_pure_functional_programming_matters) - [Why (pure) functional programming matters](https://www.youtube.com/watch?v=8p5acyD8lGs)
* [2025-11-21, 10:00:00](https://science.slashdot.org/story/25/11/21/066251/cern-can-now-produce-antihydrogen-atoms-eight-times-faster-than-before?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CERN Can Now Produce Antihydrogen Atoms Eight Times Faster Than Before](https://science.slashdot.org/story/25/11/21/066251/cern-can-now-produce-antihydrogen-atoms-eight-times-faster-than-before?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 09:39:52](https://lobste.rs/s/jswvlx/building_durable_execution_engine_with) - [Building a Durable Execution Engine With SQLite](https://www.morling.dev/blog/building-durable-execution-engine-with-sqlite/)
* [2025-11-21, 09:34:00](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss) - [Needy Software](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss)
* [2025-11-21, 08:52:47](https://lobste.rs/s/ttfo7o/cross_platform_p2p_wi_fi_how_eu_killed_awdl) - [Cross-Platform P2P Wi-Fi: How the EU Killed AWDL](https://www.ditto.com/blog/cross-platform-p2p-wi-fi-how-the-eu-killed-awdl)
* [2025-11-21, 07:45:53](https://news.ycombinator.com/item?id=46002161) - [It&apos;s hard to build an oscillator](https://lcamtuf.substack.com/p/its-hard-to-build-an-oscillator)
* [2025-11-21, 07:45:31](https://lobste.rs/s/owwjs0/solving_fizz_buzz_with_cosines) - [Solving Fizz Buzz with Cosines](https://susam.net/fizz-buzz-with-cosines.html)
* [2025-11-21, 07:00:00](https://science.slashdot.org/story/25/11/20/2316230/moss-spores-survive-9-months-outside-iss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Moss Spores Survive 9 Months Outside ISS](https://science.slashdot.org/story/25/11/20/2316230/moss-spores-survive-9-months-outside-iss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 06:50:14](https://news.ycombinator.com/item?id=46001889) - [Olmo 3: Charting a path through the model flow to lead open-source AI](https://allenai.org/blog/olmo3)
* [2025-11-21, 04:45:00](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss) - [Software Developers Show Less Constructive Scepticism When Using AI Assistants](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss)
* [2025-11-21, 04:29:04](https://lobste.rs/s/gtbhhc/exploring_fragmentation_wayland) - [Exploring the Fragmentation of Wayland, an xdotool adventure](https://www.semicomplete.com/blog/xdotool-and-exploring-wayland-fragmentation/)
* [2025-11-21, 00:31:47](https://news.ycombinator.com/item?id=45999842) - [Homeschooling hits record numbers](https://reason.com/2025/11/19/homeschooling-hits-record-numbers/)
* [2025-11-21, 00:07:00](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss) - [Is Perplexity the First AI Unicorn to Fail?](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss)
* [2025-11-21, 00:02:18](https://news.ycombinator.com/item?id=45999622) - [Prozac &apos;no better than placebo&apos; for treating children with depression, experts](https://www.theguardian.com/society/2025/nov/20/prozac-no-better-than-placebo-for-treating-children-with-depression-experts-say)
* [2025-11-20, 22:01:00](https://lobste.rs/s/smkwo1/how_slide_rules_work) - [How Slide Rules Work](https://amenzwa.github.io/stem/ComputingHistory/HowSlideRulesWork/)
* [2025-11-20, 21:05:00](https://lobste.rs/s/2opemx/finally_run_docker_containers_natively) - [Finally, run Docker containers natively in Proxmox 9.1 (OCI images)](https://raymii.org/s/tutorials/Finally_run_Docker_containers_natively_in_Proxmox_9.1.html)
* [2025-11-20, 19:29:58](https://lobste.rs/s/wtzy7u/zork_i_ii_iii_go_open_source) - [Zork I, II, and III go Open Source](https://opensource.microsoft.com/blog/2025/11/20/preserving-code-that-shaped-generations-zork-i-ii-and-iii-go-open-source)
* [2025-11-20, 19:15:00](https://soylentnews.org/article.pl?sid=25/11/18/1216240&amp;from=rss) - [Turris Releases Their New Omnia NG Router](https://soylentnews.org/article.pl?sid=25/11/18/1216240&amp;from=rss)
* [2025-11-20, 18:05:54](https://lobste.rs/s/cphkc3/firefox_147_will_support_xdg_base) - [Firefox 147 Will Support The XDG Base Directory Specification](https://www.phoronix.com/news/Firefox-147-XDG-Base-Directory)
* [2025-11-20, 15:53:30](https://lobste.rs/s/p9i6g3/open_source_developers_are_exhausted) - [Open Source Developers Are Exhausted, Unpaid, and Ready to Walk Away](https://itsfoss.com/news/open-source-developers-are-exhausted/)
* [2025-11-20, 15:06:03](https://lobste.rs/s/empan7/signal_polls_yes_no_maybe_yes) - [Signal Polls: Yes, no, maybe (yes!)](https://signal.org/blog/polls/)
* [2025-11-20, 14:37:00](https://soylentnews.org/article.pl?sid=25/11/18/1212257&amp;from=rss) - [Many Hard Leetcode Problems Are Easy Constraint Problems](https://soylentnews.org/article.pl?sid=25/11/18/1212257&amp;from=rss)
* [2025-11-20, 13:26:08](https://news.ycombinator.com/item?id=45992316) - [Building a Durable Execution Engine with SQLite](https://www.morling.dev/blog/building-durable-execution-engine-with-sqlite/)
* [2025-11-20, 09:52:00](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss) - [Floating Solar Panels Show Promise, but Environmental Impacts Vary by Location](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss)
* [2025-11-20, 05:04:00](https://soylentnews.org/article.pl?sid=25/11/18/125234&amp;from=rss) - [The Intel 4004 Was the First Microprocessor, Right? ](https://soylentnews.org/article.pl?sid=25/11/18/125234&amp;from=rss)
* [2025-11-20, 00:18:00](https://soylentnews.org/article.pl?sid=25/11/18/120241&amp;from=rss) - [Full Metal Modine](https://soylentnews.org/article.pl?sid=25/11/18/120241&amp;from=rss)
* [2025-11-19, 19:36:00](https://soylentnews.org/article.pl?sid=25/11/18/113239&amp;from=rss) - [Big Tech Wants Direct Access to Our Brains](https://soylentnews.org/article.pl?sid=25/11/18/113239&amp;from=rss)
* [2025-11-19, 14:49:00](https://soylentnews.org/article.pl?sid=25/11/18/0121255&amp;from=rss) - [FPGA Based IBM-PC-XT](https://soylentnews.org/article.pl?sid=25/11/18/0121255&amp;from=rss)
* [2025-11-19, 10:01:00](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss) - [Canonical Extends Ubuntu Support to 15 Years](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss)
* [2025-11-19, 05:16:00](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss) - [Mozilla Unveils Plans for New &apos;AI Window&apos; Browsing Mode in Firefox, Opens Signups](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss)
* [2025-11-19, 00:31:00](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss) - [Raccoons Are Showing Early Signs of Domestication](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss)
* [2025-11-18, 19:47:00](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss) - [DHS Offers “Disturbing New Excuses” to Seize Kids’ Biometric Data, Expert Says](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss)
* [2025-11-18, 15:04:00](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss) - [The Data Center Resistance Has Arrived](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss)
* [2025-11-18, 10:23:00](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss) - [Google Settlement With Epic Caps Play Store Fees, Boosts Other Android App Stores](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss)
* [2025-11-18, 05:37:00](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss) - [Nvidia’s Jensen Huang: China will Surpass U.S. in AI Race Through ENERGY](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss)
* [2025-11-18, 00:53:00](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss) - [Starshield Satellite Constellation Emitting Unusual Radio Signals](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss)
* [2025-11-17, 20:14:00](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss) - [Microsoft: the Company Doesn&apos;t Have Enough Electricity to Install All the AI GPUs in its Inventory](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss)
* [2025-11-17, 15:33:00](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss) - [Lawmakers Want to Ban VPNs—And They Have No Idea What They&apos;re Doing](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss)
* [2025-11-17, 10:44:00](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss) - [NVIDIA 580.105.08 Linux Graphics Driver Released With a New Environment Variable](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss)
* [2025-11-17, 06:01:00](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss) - [A Spine-Tingling Discovery: This Dinosaur Had Spiked Body Armor](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss)
* [2025-11-17, 01:42:20](https://news.ycombinator.com/item?id=45950148) - [Solving the Whole Year Puzzle with Z3](https://jcrowell.net/posts/whole-year-sat)
* [2025-11-17, 01:14:00](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss) - [Devuan Version 6.0 \&quot;Excalibur\&quot; is Available Now](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss)
