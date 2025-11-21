# [News Summary](https://kherrick.github.io/news-summary/)

## Software and Technology Innovations

* [Thunderbird Pro Enters Production Testing Ahead of $9/Month Launch](https://it.slashdot.org/story/25/11/21/1849253/thunderbird-pro-enters-production-testing-ahead-of-9month-launch?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Thunderbird Pro gears up for a subscription-based offering by entering production testing.

* [Building a Minimal Viable Armv7 Emulator from Scratch](https://xnacly.me/posts/2025/building-a-minimal-viable-armv7-emulator/) - A fascinating dive into developing a functional Armv7 emulator using minimal components.

* [You can make PS2 games in JavaScript](https://jslegenddev.substack.com/p/you-can-now-make-ps2-games-in-javascript) - New capabilities allow developers to create PlayStation 2 games using JavaScript.

* [Pivot Robotics (YC W24) Is Hiring for an Industrial Automation Hardware Engineer](https://www.ycombinator.com/companies/pivot-robotics/jobs/7xG9Dc6-mechanical-engineer-controls) - A YCombinator-backed startup is hiring for innovative industrial automation roles.

* [Show HN: Wealthfolio 2.0- Open source investment tracker. Now Mobile and Docker](https://wealthfolio.app/?v=2.0) - An open-source platform for investment tracking gets mobile and Docker support.

* [Olmo 3: Charting a path through the model flow to lead open-source AI](https://allenai.org/blog/olmo3) - Olmo 3 aims to shape open-source AI advancements by redefining the model flow path.

## Gaming and Development

* [How Two Janitors Made One of the Year's Most Charming RPGs](https://games.slashdot.org/story/25/11/21/188225/how-two-janitors-made-one-of-the-years-most-charming-rpgs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The inspiring development journey of two unlikely game developers.

* [Source code for a 1977 version of Zork](https://github.com/MITDDC/zork) - A classic gaming relic, the 1977 iteration of Zork, has its source code revealed.

## AI and Machine Learning

* [AI Nutrition Tracking Stinks](https://slashdot.org/story/25/11/21/1724242/ai-nutrition-tracking-stinks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An exploration of the challenges in AI-driven nutrition tracking.

* [FAWK: LLMs can write a language interpreter](https://martin.janiczek.cz/2025/11/21/fawk-llms-can-write-a-language-interpreter.html) - Insights into the potential for large language models to create interpreters.

* [The New AI Consciousness Paper](https://www.astralcodexten.com/p/the-new-ai-consciousness-paper) - Intriguing findings on AI consciousness from recent research.

## Privacy and Surveillance

* [How Cops Are Using Flock's ALPR Network to Surveil Protesters and Activists](https://www.eff.org/deeplinks/2025/11/how-cops-are-using-flock-safetys-alpr-network-surveil-protesters-and-activists) - Concerns arise over surveillance use of Flock's ALPR network.

* [Advocacy Groups Urge Parents To Avoid AI Toys This Holiday Season](https://slashdot.org/story/25/11/20/2311203/advocacy-groups-urge-parents-to-avoid-ai-toys-this-holiday-season?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Experts highlight the risks of AI toys and encourage cautiousness during the holidays.

## Cultural and Global Perspectives

* [Homeschooling Hits Record Numbers](https://news.slashdot.org/story/25/11/21/1254229/homeschooling-hits-record-numbers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Modern trends show homeschooling reaching unprecedented levels.

* [China Cuts Open New Robot on Stage to Prove Authenticity](https://soylentnews.org/article.pl?sid=25/11/20/1344214&from=rss) - A dramatic demonstration as China unveils a robot to verify its authenticity.

* [Cross-Platform P2P Wi-Fi: How the EU Killed AWDL](https://www.ditto.com/blog/cross-platform-p2p-wi-fi-how-the-eu-killed-awdl) - Analysis of the EU's impact on AWDL in cross-platform peer-to-peer Wi-Fi connections.

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

* [2025-11-21, 18:49:00](https://it.slashdot.org/story/25/11/21/1849253/thunderbird-pro-enters-production-testing-ahead-of-9month-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Thunderbird Pro Enters Production Testing Ahead of $9/Month Launch](https://it.slashdot.org/story/25/11/21/1849253/thunderbird-pro-enters-production-testing-ahead-of-9month-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 18:36:46](https://lobste.rs/s/bv3570/building_minimal_viable_armv7_emulator) - [Building a Minimal Viable Armv7 Emulator from Scratch](https://xnacly.me/posts/2025/building-a-minimal-viable-armv7-emulator/)
* [2025-11-21, 18:08:00](https://games.slashdot.org/story/25/11/21/188225/how-two-janitors-made-one-of-the-years-most-charming-rpgs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Two Janitors Made One of the Year&apos;s Most Charming RPGs](https://games.slashdot.org/story/25/11/21/188225/how-two-janitors-made-one-of-the-years-most-charming-rpgs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 17:28:25](https://news.ycombinator.com/item?id=46006598) - [FizzBuzz with Cosines](https://susam.net/fizz-buzz-with-cosines.html)
* [2025-11-21, 17:24:00](https://slashdot.org/story/25/11/21/1724242/ai-nutrition-tracking-stinks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Nutrition Tracking Stinks](https://slashdot.org/story/25/11/21/1724242/ai-nutrition-tracking-stinks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 17:20:51](https://news.ycombinator.com/item?id=46006521) - [How Cops Are Using Flock&apos;s ALPR Network to Surveil Protesters and Activists](https://www.eff.org/deeplinks/2025/11/how-cops-are-using-flock-safetys-alpr-network-surveil-protesters-and-activists)
* [2025-11-21, 17:00:00](https://news.ycombinator.com/item?id=46006250) - [Pivot Robotics (YC W24) Is Hiring for an Industrial Automation Hardware Engineer](https://www.ycombinator.com/companies/pivot-robotics/jobs/7xG9Dc6-mechanical-engineer-controls)
* [2025-11-21, 16:42:19](https://news.ycombinator.com/item?id=46006082) - [You can make PS2 games in JavaScript](https://jslegenddev.substack.com/p/you-can-now-make-ps2-games-in-javascript)
* [2025-11-21, 16:41:00](https://slashdot.org/story/25/11/21/1626239/amazon-cut-thousands-of-engineers-in-its-record-layoffs-despite-saying-it-needs-to-innovate-faster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Cut Thousands of Engineers in Its Record Layoffs, Despite Saying It Needs To Innovate Faster](https://slashdot.org/story/25/11/21/1626239/amazon-cut-thousands-of-engineers-in-its-record-layoffs-despite-saying-it-needs-to-innovate-faster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 16:34:52](https://news.ycombinator.com/item?id=46006016) - [Show HN: Wealthfolio 2.0- Open source investment tracker. Now Mobile and Docker](https://wealthfolio.app/?v=2.0)
* [2025-11-21, 16:33:28](https://news.ycombinator.com/item?id=46006004) - [Command Lines](https://www.wreflection.com/p/command-lines-ai-coding)
* [2025-11-21, 16:25:48](https://news.ycombinator.com/item?id=46005928) - [The New AI Consciousness Paper](https://www.astralcodexten.com/p/the-new-ai-consciousness-paper)
* [2025-11-21, 16:10:57](https://lobste.rs/s/klv6mo/source_code_for_1977_version_zork) - [Source code for a 1977 version of Zork](https://github.com/MITDDC/zork)
* [2025-11-21, 16:01:00](https://hardware.slashdot.org/story/25/11/21/1534212/meta-enters-power-trading-to-support-its-ai-energy-needs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Enters Power Trading To Support Its AI Energy Needs](https://hardware.slashdot.org/story/25/11/21/1534212/meta-enters-power-trading-to-support-its-ai-energy-needs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 15:44:16](https://news.ycombinator.com/item?id=46005553) - [Arduino published updated terms and conditions: no longer an open commons](https://www.molecularist.com/2025/11/did-qualcomm-kill-arduino-for-good.html)
* [2025-11-21, 15:23:20](https://news.ycombinator.com/item?id=46005388) - [Make product worse, get money](https://dynomight.net/worse/)
* [2025-11-21, 15:20:00](https://it.slashdot.org/story/25/11/21/1516219/microsofts-ai-powered-copy-and-paste-can-now-use-on-device-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s AI-Powered Copy and Paste Can Now Use On-Device AI](https://it.slashdot.org/story/25/11/21/1516219/microsofts-ai-powered-copy-and-paste-can-now-use-on-device-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 15:18:05](https://news.ycombinator.com/item?id=46005349) - [XBMC 4.0 for the Original Xbox](https://www.xbox-scene.info/articles/announcing-xbmc-40-for-the-original-xbox-r64/)
* [2025-11-21, 14:50:36](https://news.ycombinator.com/item?id=46005111) - [We should all be using dependency cooldowns](https://blog.yossarian.net/2025/11/21/We-should-all-be-using-dependency-cooldowns)
* [2025-11-21, 14:48:43](https://lobste.rs/s/rygog1/we_should_all_be_using_dependency) - [We should all be using dependency cooldowns](https://blog.yossarian.net/2025/11/21/We-should-all-be-using-dependency-cooldowns)
* [2025-11-21, 14:40:00](https://tech.slashdot.org/story/25/11/21/1436243/googles-recent-progress-in-ai-could-create-some-temporary-economic-headwinds-for-openai-altman-warns-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Recent Progress in AI Could &apos;Create Some Temporary Economic Headwinds&apos; For OpenAI, Altman Warns Employees](https://tech.slashdot.org/story/25/11/21/1436243/googles-recent-progress-in-ai-could-create-some-temporary-economic-headwinds-for-openai-altman-warns-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 14:28:51](https://lobste.rs/s/ufvdmn/there_s_always_going_be_way_not_code_error) - [There&apos;s always going to be a way to not code error handling](https://utcc.utoronto.ca/~cks/space/blog/programming/AlwaysUncodedErrorHandling)
* [2025-11-21, 14:23:00](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss) - [China Cuts Open New Robot on Stage to Prove Authenticity](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss)
* [2025-11-21, 14:18:41](https://lobste.rs/s/f2omyv/go_s_runtime_may_someday_start_explicitly) - [Go&apos;s runtime may someday start explicitly freeing some internal memory](https://utcc.utoronto.ca/~cks/space/blog/programming/GoExplicitMemoryFreeing)
* [2025-11-21, 14:00:00](https://news.slashdot.org/story/25/11/21/1254229/homeschooling-hits-record-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Homeschooling Hits Record Numbers](https://news.slashdot.org/story/25/11/21/1254229/homeschooling-hits-record-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 13:44:12](https://news.ycombinator.com/item?id=46004541) - [More tales about outages and numeric limits](https://rachelbythebay.com/w/2025/11/18/down/)
* [2025-11-21, 13:42:08](https://lobste.rs/s/0squ96/more_tales_about_outages_numeric_limits) - [More tales about outages and numeric limits](https://rachelbythebay.com/w/2025/11/18/down/)
* [2025-11-21, 13:30:36](https://news.ycombinator.com/item?id=46004386) - [Building a Minimal Viable Armv7 Emulator from Scratch](https://xnacly.me/posts/2025/building-a-minimal-viable-armv7-emulator/)
* [2025-11-21, 13:23:16](https://news.ycombinator.com/item?id=46004293) - [Making a Small RPG](https://jslegenddev.substack.com/p/making-a-small-rpg)
* [2025-11-21, 13:03:57](https://lobste.rs/s/lwepwh/undo_redo_command_pattern) - [Undo, Redo, and the Command Pattern](https://www.esveo.com/en/blog/undo-redo-and-the-command-pattern/)
* [2025-11-21, 13:00:00](https://hardware.slashdot.org/story/25/11/21/0616243/hp-and-dell-disable-hevc-support-built-into-their-laptops-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HP and Dell Disable HEVC Support Built Into Their Laptops&apos; CPUs](https://hardware.slashdot.org/story/25/11/21/0616243/hp-and-dell-disable-hevc-support-built-into-their-laptops-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 12:12:41](https://news.ycombinator.com/item?id=46003778) - [How a French judge was digitally cut off by the USA](https://www.heise.de/en/news/How-a-French-judge-was-digitally-cut-off-by-the-USA-11087561.html)
* [2025-11-21, 10:31:44](https://lobste.rs/s/829yl5/how_why_sweep_async_tasks_under_postgres) - [How/Why to Sweep Async Tasks Under a Postgres Table](https://taylor.town/pg-task)
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
* [2025-11-21, 03:30:00](https://slashdot.org/story/25/11/20/2311203/advocacy-groups-urge-parents-to-avoid-ai-toys-this-holiday-season?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Advocacy Groups Urge Parents To Avoid AI Toys This Holiday Season](https://slashdot.org/story/25/11/20/2311203/advocacy-groups-urge-parents-to-avoid-ai-toys-this-holiday-season?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 02:20:00](https://yro.slashdot.org/story/25/11/20/231239/fired-techie-admits-sabotaging-ex-employer-causing-862k-in-damage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fired Techie Admits Sabotaging Ex-Employer, Causing $862K In Damage ](https://yro.slashdot.org/story/25/11/20/231239/fired-techie-admits-sabotaging-ex-employer-causing-862k-in-damage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 01:40:00](https://tech.slashdot.org/story/25/11/20/2251228/ibm-cisco-outline-plans-for-networks-of-quantum-computers-by-early-2030s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM, Cisco Outline Plans For Networks of Quantum Computers By Early 2030s](https://tech.slashdot.org/story/25/11/20/2251228/ibm-cisco-outline-plans-for-networks-of-quantum-computers-by-early-2030s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 01:00:00](https://tech.slashdot.org/story/25/11/20/2243257/mozilla-says-its-finally-done-with-two-faced-onerep?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Says It&apos;s Finally Done With Two-Faced Onerep](https://tech.slashdot.org/story/25/11/20/2243257/mozilla-says-its-finally-done-with-two-faced-onerep?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 00:31:47](https://news.ycombinator.com/item?id=45999842) - [Homeschooling hits record numbers](https://reason.com/2025/11/19/homeschooling-hits-record-numbers/)
* [2025-11-21, 00:07:00](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss) - [Is Perplexity the First AI Unicorn to Fail?](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss)
* [2025-11-20, 23:17:04](https://lobste.rs/s/8dcpvs/is_c_26_getting_destructive_move) - [Is C++26 getting destructive move semantics?](https://stackoverflow.com/questions/79817124/is-c26-getting-destructive-move-semantics)
* [2025-11-20, 22:01:00](https://lobste.rs/s/smkwo1/how_slide_rules_work) - [How Slide Rules Work](https://amenzwa.github.io/stem/ComputingHistory/HowSlideRulesWork/)
* [2025-11-20, 21:20:34](https://lobste.rs/s/8bojbq/2025_go_cryptography_state_union) - [2025 Go Cryptography State of the Union](https://words.filippo.io/2025-state/)
* [2025-11-20, 21:05:00](https://lobste.rs/s/2opemx/finally_run_docker_containers_natively) - [Finally, run Docker containers natively in Proxmox 9.1 (OCI images)](https://raymii.org/s/tutorials/Finally_run_Docker_containers_natively_in_Proxmox_9.1.html)
* [2025-11-20, 20:00:48](https://lobste.rs/s/omsu9k/we_found_cryptography_bugs_elliptic) - [We found cryptography bugs in the elliptic library using Wycheproof](https://blog.trailofbits.com/2025/11/18/we-found-cryptography-bugs-in-the-elliptic-library-using-wycheproof/)
* [2025-11-20, 19:29:58](https://lobste.rs/s/wtzy7u/zork_i_ii_iii_go_open_source) - [Zork I, II, and III go Open Source](https://opensource.microsoft.com/blog/2025/11/20/preserving-code-that-shaped-generations-zork-i-ii-and-iii-go-open-source)
* [2025-11-20, 19:15:00](https://soylentnews.org/article.pl?sid=25/11/18/1216240&amp;from=rss) - [Turris Releases Their New Omnia NG Router](https://soylentnews.org/article.pl?sid=25/11/18/1216240&amp;from=rss)
* [2025-11-20, 18:27:51](https://news.ycombinator.com/item?id=45995913) - [Show HN: Search London StreetView panoramas by text](https://london.publicinsights.uk)
* [2025-11-20, 18:05:54](https://lobste.rs/s/cphkc3/firefox_147_will_support_xdg_base) - [Firefox 147 Will Support The XDG Base Directory Specification](https://www.phoronix.com/news/Firefox-147-XDG-Base-Directory)
* [2025-11-20, 17:04:34](https://news.ycombinator.com/item?id=45994854) - [Android and iPhone users can now share files, starting with the Pixel 10](https://blog.google/products/android/quick-share-airdrop/)
* [2025-11-20, 15:53:30](https://lobste.rs/s/p9i6g3/open_source_developers_are_exhausted) - [Open Source Developers Are Exhausted, Unpaid, and Ready to Walk Away](https://itsfoss.com/news/open-source-developers-are-exhausted/)
* [2025-11-20, 15:06:03](https://lobste.rs/s/empan7/signal_polls_yes_no_maybe_yes) - [Signal Polls: Yes, no, maybe (yes!)](https://signal.org/blog/polls/)
* [2025-11-20, 15:05:53](https://lobste.rs/s/cr4ihl/what_s_cooking_on_sourcehut_q4_2025) - [What&apos;s cooking on SourceHut? Q4 2025](https://sourcehut.org/blog/2025-11-20-whats-cooking-q4-2025/)
* [2025-11-20, 14:37:00](https://soylentnews.org/article.pl?sid=25/11/18/1212257&amp;from=rss) - [Many Hard Leetcode Problems Are Easy Constraint Problems](https://soylentnews.org/article.pl?sid=25/11/18/1212257&amp;from=rss)
* [2025-11-20, 13:26:08](https://news.ycombinator.com/item?id=45992316) - [Building a Durable Execution Engine with SQLite](https://www.morling.dev/blog/building-durable-execution-engine-with-sqlite/)
* [2025-11-20, 09:52:00](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss) - [Floating Solar Panels Show Promise, but Environmental Impacts Vary by Location](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss)
* [2025-11-20, 06:37:50](https://lobste.rs/s/esyfcl/battery_included_hacker_s_file_manager) - [A battery included hacker&apos;s file manager with VIM inspired keybind in a single binary](https://github.com/houqp/kiorg)
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
* [2025-11-17, 11:22:54](https://news.ycombinator.com/item?id=45952654) - [My Favorite Math Problem](https://bytesauna.com/post/my-favorite-math-problem)
* [2025-11-17, 10:44:00](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss) - [NVIDIA 580.105.08 Linux Graphics Driver Released With a New Environment Variable](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss)
* [2025-11-17, 06:01:00](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss) - [A Spine-Tingling Discovery: This Dinosaur Had Spiked Body Armor](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss)
* [2025-11-17, 01:14:00](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss) - [Devuan Version 6.0 \&quot;Excalibur\&quot; is Available Now](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss)
