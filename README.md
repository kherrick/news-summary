# [News Summary](https://kherrick.github.io/news-summary/)

## Global Technology and Societal Developments

* [Canada’s Bill C-22 and the security cost of collecting more data](https://tailscale.com/blog/bill-c22-canada) - Examines the implications of Canada's proposed Bill C-22, emphasizing the potential risks and security costs associated with broader data collection policies. [Comments](https://lobste.rs/s/7mmfnb/canada_s_bill_c_22_security_cost)

* [Internet Starts Coming Back In Iran After Months-Long Blackout](https://tech.slashdot.org/story/26/05/26/2041247/internet-starts-coming-back-in-iran-after-months-long-blackout?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Reports the end of a lengthy internet blackout in Iran, offering insights on the country's connectivity challenges. [Comments](https://tech.slashdot.org/story/26/05/26/2041247/internet-starts-coming-back-in-iran-after-months-long-blackout?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Netherlands Blocks US Takeover of Vital Digital Supplier](https://yro.slashdot.org/story/26/05/26/1739255/netherlands-blocks-us-takeover-of-vital-digital-supplier?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Highlights the decision by the Netherlands to halt a U.S. company's acquisition of a key digital supplier due to national security concerns. [Comments](https://news.ycombinator.com/item?id=48284712)

## Technology Innovations and Challenges

* [Introducing DoomBench - Can Your Data Stack Run DOOM?](https://cedardb.com/blog/doombench/) - Introduces DoomBench, a new benchmark to test the performance of data stacks by simulating a classic game engine. [Comments](https://lobste.rs/s/nkafrw/introducing_doombench_can_your_data)

* [Modern Blu-ray drives can now rip GameCube, Wii, and Xbox 360 games to PC](https://www.tomshardware.com/video-games/console-gaming/modern-blu-ray-drives-can-now-rip-gamecube-wii-and-xbox-360-games-to-pc-third-party-firmware-unlocks-game-rips-from-physical-media-on-select-players) - Explains how third-party firmware enables game rips from physical media using modern Blu-ray drives. [Comments](https://news.ycombinator.com/item?id=48284032)

* [Stack Overflow’s forum is dead but the company’s still kicking](https://sherwood.news/tech/stack-overflow-forum-dead-thanks-ai-but-companys-still-kicking-ai/) - Discusses the shifting role of Stack Overflow amidst advancements in AI technologies. [Comments](https://news.ycombinator.com/item?id=48282709)

* [Intent to Prototype: Embedding API](https://groups.google.com/a/chromium.org/g/blink-dev/c/EjL1gAy3k3Q/m/31Cnh22MBgAJ) - Details on Google's new Embedding API and its intended use case integrations. [Comments](https://lobste.rs/s/czctjh/intent_prototype_embedding_api)

## Open Source and Development

* [Mythos Detected 23,000 Vulnerabilities Across 1,000 OSS Projects](https://news.slashdot.org/story/26/05/26/2026259/mythos-detected-23000-vulnerabilities-across-1000-oss-projects?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Investigates the issue of vulnerabilities in open-source software projects discovered using the Mythos tool. [Comments](https://news.slashdot.org/story/26/05/26/2026259/mythos-detected-23000-vulnerabilities-across-1000-oss-projects?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Stop advertising in your commits](https://akselmo.dev/posts/stop-advertising-in-your-commits/) - A critique of the practice of including promotional language in Git commit messages. [Comments](https://lobste.rs/s/w1gpe7/stop_advertising_your_commits)

* [How Virtual Tables Work in the Itanium C++ ABI](https://peter0x44.github.io/posts/vtables-itanium-abi/) - Explains the intricate workings of virtual tables (vtables) in the context of the Itanium C++ ABI. [Comments](https://lobste.rs/s/kzslib/how_virtual_tables_work_itanium_c_abi)

## Labor and Industry Shifts

* [Uber, Lyft Drivers In Massachusetts Form First US Ride-Share Union](https://tech.slashdot.org/story/26/05/26/1825246/uber-lyft-drivers-in-massachusetts-form-first-us-ride-share-union?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Chronicles the formation of the first U.S. ride-share driver union in Massachusetts. [Comments](https://tech.slashdot.org/story/26/05/26/1825246/uber-lyft-drivers-in-massachusetts-form-first-us-ride-share-union?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Big tech's anti-labor playbook has come for Wikipedia](https://medium.com/@jakeorlowitz/wikipedia-is-doing-the-capitalist-thing-56a393232943) - Explores the implications of big tech's influence over non-traditional labor structures, including Wikipedia. [Comments](https://news.ycombinator.com/item?id=48285592)

## Social and Economic Concerns

* [The real cost of owning a home](https://ericturner.dev/posts/cost-of-home-ownership/) - A deep dive into the financial realities and hidden costs of homeownership. [Comments](https://news.ycombinator.com/item?id=48281611)

* [Is "colorectal cancer" rising in "young people"?](https://dynomight.net/crc-rates/) - An analysis of statistical data to discern patterns about colorectal cancer trends in younger demographics. [Comments](https://news.ycombinator.com/item?id=48281539)

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

* [2026-05-26, 22:19:00](https://lobste.rs/s/7mmfnb/canada_s_bill_c_22_security_cost) - [Canada’s Bill C-22 and the security cost of collecting more data](https://tailscale.com/blog/bill-c22-canada)
* [2026-05-26, 22:00:00](https://tech.slashdot.org/story/26/05/26/2041247/internet-starts-coming-back-in-iran-after-months-long-blackout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internet Starts Coming Back In Iran After Months-Long Blackout](https://tech.slashdot.org/story/26/05/26/2041247/internet-starts-coming-back-in-iran-after-months-long-blackout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-26, 21:41:58](https://lobste.rs/s/czctjh/intent_prototype_embedding_api) - [Intent to Prototype: Embedding API](https://groups.google.com/a/chromium.org/g/blink-dev/c/EjL1gAy3k3Q/m/31Cnh22MBgAJ)
* [2026-05-26, 21:38:00](https://soylentnews.org/article.pl?sid=26/05/25/1522231&amp;from=rss) - [After Decades on Linux, FreeBSD Finally Gave Me a Reason to Switch Operating Systems](https://soylentnews.org/article.pl?sid=26/05/25/1522231&amp;from=rss)
* [2026-05-26, 21:00:00](https://news.slashdot.org/story/26/05/26/2026259/mythos-detected-23000-vulnerabilities-across-1000-oss-projects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mythos Detected 23,000 Vulnerabilities Across 1,000 OSS Projects](https://news.slashdot.org/story/26/05/26/2026259/mythos-detected-23000-vulnerabilities-across-1000-oss-projects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-26, 20:33:24](https://news.ycombinator.com/item?id=48285592) - [Big tech&apos;s anti-labor playbook has come for Wikipedia](https://medium.com/@jakeorlowitz/wikipedia-is-doing-the-capitalist-thing-56a393232943)
* [2026-05-26, 20:00:00](https://news.slashdot.org/story/26/05/26/1828238/spain-blocks-polymarket-and-kalshi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spain Blocks Polymarket and Kalshi](https://news.slashdot.org/story/26/05/26/1828238/spain-blocks-polymarket-and-kalshi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-26, 19:25:16](https://news.ycombinator.com/item?id=48284712) - [Chemistry behind the Garden Grove chemical tank](https://www.science.org/content/blog-post/methyl-methacrylate-tank)
* [2026-05-26, 19:00:00](https://tech.slashdot.org/story/26/05/26/1825246/uber-lyft-drivers-in-massachusetts-form-first-us-ride-share-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber, Lyft Drivers In Massachusetts Form First US Ride-Share Union](https://tech.slashdot.org/story/26/05/26/1825246/uber-lyft-drivers-in-massachusetts-form-first-us-ride-share-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-26, 18:44:34](https://news.ycombinator.com/item?id=48284032) - [Modern Blu-ray drives can now rip GameCube, Wii, and Xbox 360 games to PC](https://www.tomshardware.com/video-games/console-gaming/modern-blu-ray-drives-can-now-rip-gamecube-wii-and-xbox-360-games-to-pc-third-party-firmware-unlocks-game-rips-from-physical-media-on-select-players)
* [2026-05-26, 18:00:00](https://yro.slashdot.org/story/26/05/26/1739255/netherlands-blocks-us-takeover-of-vital-digital-supplier?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netherlands Blocks US Takeover of Vital Digital Supplier](https://yro.slashdot.org/story/26/05/26/1739255/netherlands-blocks-us-takeover-of-vital-digital-supplier?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-26, 17:56:24](https://lobste.rs/s/w1gpe7/stop_advertising_your_commits) - [Stop advertising in your commits](https://akselmo.dev/posts/stop-advertising-in-your-commits/)
* [2026-05-26, 17:20:51](https://lobste.rs/s/nkafrw/introducing_doombench_can_your_data) - [Introducing DoomBench - Can Your Data Stack Run DOOM?](https://cedardb.com/blog/doombench/)
* [2026-05-26, 17:17:12](https://news.ycombinator.com/item?id=48282709) - [Stack Overflow’s forum is dead but the company’s still kicking](https://sherwood.news/tech/stack-overflow-forum-dead-thanks-ai-but-companys-still-kicking-ai/)
* [2026-05-26, 17:00:40](https://news.ycombinator.com/item?id=48282478) - [Sage Care (YC S24) Is Hiring Software Engineers](https://www.ycombinator.com/companies/sagecare/jobs/xtloH8r-senior-software-engineer)
* [2026-05-26, 17:00:00](https://tech.slashdot.org/story/26/05/26/1635257/nvidia-retires-its-geforce-control-panel-app-after-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Retires Its GeForce Control Panel App After 20 Years](https://tech.slashdot.org/story/26/05/26/1635257/nvidia-retires-its-geforce-control-panel-app-after-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-26, 16:54:00](https://soylentnews.org/article.pl?sid=26/05/25/157204&amp;from=rss) - [FBI Seeks US-Wide Access to License Plate Cameras, Wants \&quot;Data in Near Real Time\&quot;](https://soylentnews.org/article.pl?sid=26/05/25/157204&amp;from=rss)
* [2026-05-26, 16:35:09](https://lobste.rs/s/nkh1nz/software_for_my_new_home_server) - [Software For My New Home Server](https://nathangrigg.com/2026/05/home-server-software/)
* [2026-05-26, 16:23:51](https://lobste.rs/s/gbxsuf/building_scalable_ingestion_pipeline) - [Building a Scalable Ingestion Pipeline with Temporal (Part 1)](https://blog.rapidflare.ai/blog/temporal-ingestion-pipeline-part1/)
* [2026-05-26, 16:04:39](https://news.ycombinator.com/item?id=48281611) - [The real cost of owning a home](https://ericturner.dev/posts/cost-of-home-ownership/)
* [2026-05-26, 16:00:21](https://news.ycombinator.com/item?id=48281539) - [Is \&quot;colorectal cancer\&quot; rising in \&quot;young people\&quot;?](https://dynomight.net/crc-rates/)
* [2026-05-26, 16:00:00](https://linux.slashdot.org/story/26/05/26/0450245/california-moves-to-exempt-linux-from-upcoming-age-verification-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Moves To Exempt Linux From Upcoming Age-Verification Law](https://linux.slashdot.org/story/26/05/26/0450245/california-moves-to-exempt-linux-from-upcoming-age-verification-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-26, 15:58:32](https://news.ycombinator.com/item?id=48281515) - [What color is your function? (2015)](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/)
* [2026-05-26, 15:47:32](https://news.ycombinator.com/item?id=48281367) - [The Ballad of TIGIT](https://www.owlposting.com/p/the-ballad-of-tigit)
* [2026-05-26, 15:36:24](https://news.ycombinator.com/item?id=48281226) - [A sleep-like consolidation mechanism for LLMs](https://arxiv.org/abs/2605.26099)
* [2026-05-26, 15:05:24](https://lobste.rs/s/dm1j7b/are_you_member_any_professional) - [Are you a member of any professional associations?](https://lobste.rs/s/dm1j7b/are_you_member_any_professional)
* [2026-05-26, 15:01:02](https://lobste.rs/s/tqxsky/building_asyncio_executor_for_3ds) - [Building an AsyncIO executor for the 3DS](https://blog.cat-girl.gay/3ds-async-part-one/)
* [2026-05-26, 15:00:00](https://slashdot.org/story/26/05/26/0441241/pope-leo-warns-of-risks-from-ai-in-42300-word-encyclical?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pope Leo Warns of Risks From AI In 42,300-Word Encyclical](https://slashdot.org/story/26/05/26/0441241/pope-leo-warns-of-risks-from-ai-in-42300-word-encyclical?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-26, 14:57:27](https://news.ycombinator.com/item?id=48280729) - [Launch HN: Minicor (YC P26) – Windows desktop automations at scale](https://www.minicor.com/)
* [2026-05-26, 14:50:25](https://news.ycombinator.com/item?id=48280636) - [Don&apos;t Subscribe So Casually](https://thebestworstcase.substack.com/p/dont-subscribe-so-casually)
* [2026-05-26, 14:04:27](https://lobste.rs/s/noahb3/readable_css) - [readable.css](https://readable-css.freedomtowrite.org/)
* [2026-05-26, 13:47:39](https://news.ycombinator.com/item?id=48279842) - [C64 Basic: Game Map Overhead “Camera View”](https://retrogamecoders.com/overhead-camera-view/)
* [2026-05-26, 13:18:33](https://news.ycombinator.com/item?id=48279453) - [Dropbox CEO Drew Houston to step down](https://www.cnbc.com/2026/05/26/dropbox-ceo-drew-houston-ashraf-alkarmi.html)
* [2026-05-26, 13:08:13](https://news.ycombinator.com/item?id=48279316) - [Spain blocks prediction markets Polymarket, Kalshi over lack of gambling licence](https://www.reuters.com/business/spain-blocks-prediction-markets-polymarket-kalshi-over-lack-gambling-licences-2026-05-26/)
* [2026-05-26, 12:33:39](https://lobste.rs/s/goq5ha/what_is_harmonic_interactive_comic_about) - [What is a harmonic? An interactive comic about additive synthesis](https://melatonin.dev/additive-synth-comic/what-is-a-harmonic/)
* [2026-05-26, 12:32:44](https://lobste.rs/s/kzslib/how_virtual_tables_work_itanium_c_abi) - [How Virtual Tables Work in the Itanium C++ ABI](https://peter0x44.github.io/posts/vtables-itanium-abi/)
* [2026-05-26, 12:08:33](https://news.ycombinator.com/item?id=48278610) - [Outsourcing plus local AI will soon become more economical vs. frontier labs](https://www.signalbloom.ai/posts/outsourcing-plus-localai-will-soon-become-more-economical-vs-frontier-labs/)
* [2026-05-26, 12:07:00](https://soylentnews.org/article.pl?sid=26/05/25/150246&amp;from=rss) - [Europe Tests Laser Links As Satellite Comms Outgrow Radio](https://soylentnews.org/article.pl?sid=26/05/25/150246&amp;from=rss)
* [2026-05-26, 11:46:08](https://news.ycombinator.com/item?id=48278406) - [Netherlands blocks US takeover of vital digital supplier](https://www.politico.eu/article/netherlands-blocks-us-takeover-vital-digital-supplier/)
* [2026-05-26, 10:40:40](https://lobste.rs/s/kbaepn/using_swiftui_build_mac_assed_app_2026) - [Using SwiftUI to Build a Mac-assed App in 2026](https://pfandrade.me/blog/mac-assed-swiftui-app/)
* [2026-05-26, 09:13:18](https://lobste.rs/s/urkvou/portentous_reunion) - [A portentous reunion](https://bcantrill.dtrace.org/2026/05/25/a-portentous-reunion/)
* [2026-05-26, 07:35:20](https://news.ycombinator.com/item?id=48276363) - [DynIP – Dynamic DNS with RFC 2136, IPv6, DNSSEC, and BYOD](https://dynip.dev/)
* [2026-05-26, 07:23:00](https://soylentnews.org/article.pl?sid=26/05/25/1437228&amp;from=rss) - [EU Taps Sweden&apos;s EQT to Manage Major €5Bn Scale-Up Europe Fund](https://soylentnews.org/article.pl?sid=26/05/25/1437228&amp;from=rss)
* [2026-05-26, 06:47:38](https://lobste.rs/s/dw02ye/pressure) - [The pressure](https://daniel.haxx.se/blog/2026/05/26/the-pressure/)
* [2026-05-26, 04:39:03](https://news.ycombinator.com/item?id=48275059) - [The user is visibly frustrated](https://pscanf.com/s/354/)
* [2026-05-26, 03:42:23](https://news.ycombinator.com/item?id=48274711) - [Earthion: A New Mega Drive-Style Shoot-Em-Up](https://earthiongame.com/)
* [2026-05-26, 03:17:54](https://lobste.rs/s/igsekj/just_how_bad_was_intel_iapx432) - [Just How Bad Was The Intel IAPX432?](https://hackaday.com/2026/05/25/just-how-bad-was-the-intel-iapx432/)
* [2026-05-26, 02:39:00](https://soylentnews.org/article.pl?sid=26/05/25/1430256&amp;from=rss) - [The Coolest Record Player Ever Made](https://soylentnews.org/article.pl?sid=26/05/25/1430256&amp;from=rss)
* [2026-05-25, 23:37:31](https://news.ycombinator.com/item?id=48273147) - [Performance of Rust Language [pdf]](https://github.com/yugr/rust-slides/)
* [2026-05-25, 22:44:37](https://lobste.rs/s/emyyfu/human_proof_for_foss_contributions) - [Human proof for FOSS contributions](https://dillo-browser.org/lab/human-proof/)
* [2026-05-25, 22:12:51](https://lobste.rs/s/bt76vp/extremely_simple_internet_radio) - [Extremely simple internet radio controlled via IRC](https://codeberg.org/lindenii/tunecat/)
* [2026-05-25, 21:57:00](https://soylentnews.org/article.pl?sid=26/05/24/1319237&amp;from=rss) - [Torvalds Says AI Bug Hunters Have Made Linux Security Mailing List ‘Almost Entirely Unmanageable&apos;](https://soylentnews.org/article.pl?sid=26/05/24/1319237&amp;from=rss)
* [2026-05-25, 20:41:49](https://news.ycombinator.com/item?id=48271448) - [A few interesting modern pixel fonts](https://unsung.aresluna.org/a-few-interesting-modern-pixel-fonts/)
* [2026-05-25, 20:11:24](https://lobste.rs/s/k7vttz/splitting_konsole_views_from_helix_run) - [Splitting Konsole views from Helix to run tools](https://akselmo.dev/posts/splitting-konsole-views-from-helix-to-run-tools/)
* [2026-05-25, 17:29:47](https://lobste.rs/s/1a09ad/user_is_visibly_frustrated) - [The User Is Visibly Frustrated](https://pscanf.com/s/354/)
* [2026-05-25, 17:10:00](https://science.slashdot.org/story/26/05/25/177229/spacex-launches-29-starlink-satellites-on-memorial-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Launches 29 Starlink Satellites on Memorial Day](https://science.slashdot.org/story/26/05/25/177229/spacex-launches-29-starlink-satellites-on-memorial-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-25, 17:08:00](https://soylentnews.org/article.pl?sid=26/05/24/1316229&amp;from=rss) - [The Big AI Companies Are Going to See Their Margins Disappear](https://soylentnews.org/article.pl?sid=26/05/24/1316229&amp;from=rss)
* [2026-05-25, 17:07:48](https://lobste.rs/s/eedsds/encyclical_letter_his_holiness_leo_xiv) - [Encyclical Letter of His Holiness Leo XIV Magnifica Humanitas](http://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html)
* [2026-05-25, 16:19:14](https://lobste.rs/s/lkv0sh/using_ai_write_better_code_more_slowly) - [Using AI to write better code more slowly](https://nolanlawson.com/2026/05/25/using-ai-to-write-better-code-more-slowly/)
* [2026-05-25, 16:17:21](https://lobste.rs/s/qfzcpl/open_closed_problem_ai) - [The Open/Closed Problem in AI](https://blog.mempko.com/the-open-closed-problem-in-ai/)
* [2026-05-25, 14:01:30](https://lobste.rs/s/mcgtsh/on_c_extensions_portability_alternative) - [On C extensions, portability, and alternative compilers](https://lemon.rip/w/6-c-extensions-compilers/)
* [2026-05-25, 12:18:00](https://soylentnews.org/article.pl?sid=26/05/24/136257&amp;from=rss) - [Uncle Sam&apos;s Next Big Supercomputer Might Use Something More Exotic Than GPUs](https://soylentnews.org/article.pl?sid=26/05/24/136257&amp;from=rss)
* [2026-05-25, 12:09:24](https://lobste.rs/s/kgem4b/social_contract_writing) - [The social contract of writing](https://jola.dev/posts/the-social-contract-of-writing)
* [2026-05-25, 11:34:00](https://it.slashdot.org/story/26/05/25/0042201/will-big-tech-layoffs-bring-a-culture-shift-to-anxiety-and-job-insecurity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Big Tech Layoffs Bring a Culture Shift to Anxiety and Job Insecurity?](https://it.slashdot.org/story/26/05/25/0042201/will-big-tech-layoffs-bring-a-culture-shift-to-anxiety-and-job-insecurity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-25, 11:23:24](https://lobste.rs/s/3izfup/switching_colemak) - [Switching to Colemak](https://pta2002.com/blog/colemak/)
* [2026-05-25, 07:34:00](https://science.slashdot.org/story/26/05/25/023251/its-like-the-olympics---but-steroids-are-allowed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [It&apos;s Like the Olympics - But Steroids Are Allowed](https://science.slashdot.org/story/26/05/25/023251/its-like-the-olympics---but-steroids-are-allowed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-25, 07:28:00](https://soylentnews.org/politics/article.pl?sid=26/05/24/1253249&amp;from=rss) - [China Says &apos;World&apos;s First&apos; Offshore Wind-Powered Underwater Data Center Has Entered Full Operation](https://soylentnews.org/politics/article.pl?sid=26/05/24/1253249&amp;from=rss)
* [2026-05-25, 05:05:11](https://news.ycombinator.com/item?id=48263560) - [C array types are weird](https://anselmschueler.com/blogposts/2025-c-pointers/)
* [2026-05-25, 04:34:00](https://yro.slashdot.org/story/26/05/25/0128243/california-executive-order-directs-businesses-and-state-agencies-to-prepare-for-ai-driven-workforce-disruption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Executive Order Directs Businesses and State Agencies to Prepare for AI-Driven Workforce Disruption](https://yro.slashdot.org/story/26/05/25/0128243/california-executive-order-directs-businesses-and-state-agencies-to-prepare-for-ai-driven-workforce-disruption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-25, 02:46:00](https://soylentnews.org/article.pl?sid=26/05/24/1247208&amp;from=rss) - [Bots be Sorting](https://soylentnews.org/article.pl?sid=26/05/24/1247208&amp;from=rss)
* [2026-05-25, 01:34:00](https://entertainment.slashdot.org/story/26/05/24/173224/ai-crashes-the-party-at-this-years-cannes-film-festival---including-multi-year-meta-partnership?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI &apos;Crashes the Party&apos; at This Year&apos;s Cannes Film Festival - Including Multi-Year Meta Partnership](https://entertainment.slashdot.org/story/26/05/24/173224/ai-crashes-the-party-at-this-years-cannes-film-festival---including-multi-year-meta-partnership?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-24, 22:11:00](https://tech.slashdot.org/story/26/05/24/213229/freebsd-foundation-executive-director-tries-daily-driving-freebsd-on-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FreeBSD Foundation Executive Director Tries Daily Driving FreeBSD On Laptop](https://tech.slashdot.org/story/26/05/24/213229/freebsd-foundation-executive-director-tries-daily-driving-freebsd-on-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-24, 22:00:00](https://soylentnews.org/article.pl?sid=26/05/23/2053216&amp;from=rss) - [Prankster Posts Real Monet Painting, Tells People It&apos;s AI](https://soylentnews.org/article.pl?sid=26/05/23/2053216&amp;from=rss)
* [2026-05-24, 21:11:00](https://news.slashdot.org/story/26/05/24/2042245/canonical-is-shutting-down-ubuntu-pastebin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canonical Is Shutting Down Ubuntu Pastebin](https://news.slashdot.org/story/26/05/24/2042245/canonical-is-shutting-down-ubuntu-pastebin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-24, 17:12:00](https://soylentnews.org/article.pl?sid=26/05/23/1259209&amp;from=rss) - [1 in 5 Brits Think AI Layoffs Could Trigger Civil Unrest](https://soylentnews.org/article.pl?sid=26/05/23/1259209&amp;from=rss)
* [2026-05-24, 12:24:00](https://soylentnews.org/article.pl?sid=26/05/23/1239233&amp;from=rss) - [The US Space Enterprise is Desperately Waiting for Starship—Will It Finally Deliver?](https://soylentnews.org/article.pl?sid=26/05/23/1239233&amp;from=rss)
* [2026-05-24, 07:42:00](https://soylentnews.org/article.pl?sid=26/05/23/1223236&amp;from=rss) - [Baidu Says the Quiet Part Out Loud – You Can&apos;t Build AI Infrastructure, So Clouds Can Cash in](https://soylentnews.org/article.pl?sid=26/05/23/1223236&amp;from=rss)
* [2026-05-24, 02:53:00](https://soylentnews.org/article.pl?sid=26/05/23/1216212&amp;from=rss) - [Silicon Valley Wants to Put a Chip in Your Brain](https://soylentnews.org/article.pl?sid=26/05/23/1216212&amp;from=rss)
* [2026-05-23, 22:08:00](https://soylentnews.org/article.pl?sid=26/05/22/0553256&amp;from=rss) - [Coding After AI - Are Humans Still Good Enough for Software Development?](https://soylentnews.org/article.pl?sid=26/05/22/0553256&amp;from=rss)
* [2026-05-23, 21:28:09](https://news.ycombinator.com/item?id=48251709) - [The Steinwinter Supercargo](https://www.thedrive.com/article/12603/the-forgotten-steinwinter-supercargo-is-unlike-anything-on-the-road-today)
* [2026-05-23, 17:20:00](https://soylentnews.org/article.pl?sid=26/05/22/0545221&amp;from=rss) - [In Stunning Display Of Stupid, Secret CISA Credentials Found In Public GitHub Repo](https://soylentnews.org/article.pl?sid=26/05/22/0545221&amp;from=rss)
* [2026-05-23, 13:17:39](https://news.ycombinator.com/item?id=48247416) - [Opaque Types in Python](https://blog.glyph.im/2026/05/opaque-types-in-python.html)
* [2026-05-23, 12:35:00](https://soylentnews.org/article.pl?sid=26/05/22/0314250&amp;from=rss) - [What Do Gödel&apos;s Incompleteness Theorems Truly Mean?](https://soylentnews.org/article.pl?sid=26/05/22/0314250&amp;from=rss)
* [2026-05-23, 07:46:00](https://soylentnews.org/article.pl?sid=26/05/22/032239&amp;from=rss) - [Amazon is Shutting Down Support for Older Kindles Soon. Here&apos;s How You Can Save Yours](https://soylentnews.org/article.pl?sid=26/05/22/032239&amp;from=rss)
* [2026-05-23, 03:04:00](https://soylentnews.org/article.pl?sid=26/05/22/0247218&amp;from=rss) - [AI Data Centers Trigger Massive &apos;Irreversible&apos; 76% Electricity Price Spike in Largest US Region](https://soylentnews.org/article.pl?sid=26/05/22/0247218&amp;from=rss)
* [2026-05-22, 22:15:00](https://soylentnews.org/article.pl?sid=26/05/22/0239256&amp;from=rss) - [Pompeii Victim ID&apos;d as a Likely Doctor](https://soylentnews.org/article.pl?sid=26/05/22/0239256&amp;from=rss)
* [2026-05-22, 17:27:00](https://soylentnews.org/article.pl?sid=26/05/22/0231209&amp;from=rss) - [Space Factories Edge Closer After Experimental Capsule Survives Hypersonic Landing](https://soylentnews.org/article.pl?sid=26/05/22/0231209&amp;from=rss)
* [2026-05-22, 17:17:43](https://news.ycombinator.com/item?id=48238703) - [I Bypassed Adobe and Microsoft to Build a Git-Tracked Book Production Pipeline](https://www.djspeckhals.com/posts/2026-05-22-how-i-bypassed-adobe-and-microsoft-to-build-a-git-tracked-book-production-pipeline/)
* [2026-05-22, 15:10:22](https://news.ycombinator.com/item?id=48237012) - [Use boring languages with LLMs](https://jry.io/writing/use-boring-languages-with-llms/)
* [2026-05-22, 13:46:56](https://news.ycombinator.com/item?id=48235812) - [Phantasy Star IV – 1993 Developer Interviews](https://shmuplations.com/phantasystariv/)
* [2026-05-22, 12:43:00](https://soylentnews.org/article.pl?sid=26/05/22/0225208&amp;from=rss) - [Intel Tells PC Makers to Adopt 18A CPUs or Lose Their Supply](https://soylentnews.org/article.pl?sid=26/05/22/0225208&amp;from=rss)
* [2026-05-22, 08:01:00](https://soylentnews.org/article.pl?sid=26/05/21/042230&amp;from=rss) - [Jury Dismisses All Claims in Elon Musk&apos;s Lawsuit Against OpenAI CEO Sam Altman](https://soylentnews.org/article.pl?sid=26/05/21/042230&amp;from=rss)
* [2026-05-22, 03:19:00](https://soylentnews.org/article.pl?sid=26/05/19/1855242&amp;from=rss) - [Microsoft Surprises With its First Server Linux Distribution: Azure Linux 4.0](https://soylentnews.org/article.pl?sid=26/05/19/1855242&amp;from=rss)
