# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Espionage

* [FedEx Data Scraping and Telecom Insider Bribes Powered Nationwide iPhone Theft Operation](https://yro.slashdot.org/story/25/03/19/0927253/fedex-data-scraping-and-telecom-insider-bribes-powered-nationwide-iphone-theft-operation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Explores a sophisticated iPhone theft operation involving data scraping and insider telecom bribes.

* [Microsoft Isn't Fixing 8-Year-Old Shortcut Exploit Abused For Spying](https://it.slashdot.org/story/25/03/18/2226205/microsoft-isnt-fixing-8-year-old-shortcut-exploit-abused-for-spying?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discusses Microsoft's hesitance to address a long-standing exploit that's been reportedly used for espionage.

* [CVE-2024-9956 – PassKey Account Takeover in All Mobile Browsers](https://mastersplinter.work/research/passkey/) - Details a critical vulnerability in PassKey functionality across mobile browsers.

* [Five Charged In European Parliament Huawei Bribery Probe](https://slashdot.org/story/25/03/18/2321249/five-charged-in-european-parliament-huawei-bribery-probe?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Investigates allegations of bribery involving Huawei within the European Parliament.

## Technological Advances and Releases

* [Sony Unveils RGB LED Backlight Tech That Outperforms Traditional Mini LED](https://entertainment.slashdot.org/story/25/03/19/0743248/sony-unveils-rgb-led-backlight-tech-that-outperforms-traditional-mini-led?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Introduces groundbreaking RGB LED technology with superior performance.

* [Nvidia Says 'the Age of Generalist Robotics Is Here'](https://hardware.slashdot.org/story/25/03/18/2312229/nvidia-says-the-age-of-generalist-robotics-is-here?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Highlights Nvidia's declaration of a new benchmark in robotics development.

* [Apache Kafka 4.0.0 Release Announcement](https://kafka.apache.org/blog#apache_kafka_400_release_announcement) - Announces the latest major release of Apache Kafka with notable new features.

* [GIMP 3.0 Released](https://www.gimp.org/news/2025/03/16/gimp-3-0-released/) - Covers the release of the highly anticipated GIMP 3.0, packed with enhancements.

## Gaming and Development

* [Video game workers in North America now have an industry-wide union](https://www.engadget.com/big-tech/video-game-workers-in-north-america-now-have-an-industry-wide-union-130024730.html) - A pivotal moment for labor rights in gaming as developers unite.

* [Show HN: AGX – Open-Source Data Exploration for ClickHouse (The New Standard?)](https://github.com/agnosticeng/agx) - Features a new open-source tool for data exploration using ClickHouse.

* [Ikemen-GO: open-source reimplementation of MUGEN](https://github.com/ikemen-engine/Ikemen-GO) - Spotlights an open-source project reimagining the classic MUGEN fighting game engine.

* [Discord Launches SDK to Help Developers Enhance Social Experiences in Their Games](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss) - Aims to revolutionize in-game social interactions through Discord integrations.

## Science and Environment

* [Iguanas Floated One-Fifth of the Way Around the World to Colonize Fiji, Genetic Analysis Indicates](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss) - New genetic research reveals extraordinary evolutionary journeys by iguanas.

* [Research Engineers Bacteria To Produce Plastics](https://science.slashdot.org/story/25/03/18/2243230/researchers-engineer-bacteria-to-produce-plastics?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Details innovative approaches to sustainable plastic production.

* [How a Rapidly Growing Population of Crocs Has Been Impacting Northern Territories Ecosystem](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss) - Analyzes ecological changes linked to an increase in crocodile populations.

* [Bad News for Low Orbit Satellites: Earth's Thermosphere is Shrinking](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss) - Examines scientific findings on the implications of the Earth's shrinking thermosphere.

## Cultural and Historical Insights

* [The Origin of the Pork Taboo](https://archaeology.org/issues/march-april-2025/letters-from/on-the-origin-of-the-pork-taboo/) - Investigates the historical and cultural roots of the pork taboo.

* [Wolfram: Learning about Innovation from Half a Century of Conway's Game of Life](https://writings.stephenwolfram.com/2025/03/what-can-we-learn-about-engineering-and-innovation-from-half-a-century-of-the-game-of-life-cellular-automaton/) - Reflects on innovation inspired by 50 years of Conway's Game of Life.

* [Bell Labs' Unsung Heros in the History of Computing (2012)](https://dobbse.net/thinair/2012/04/unsung-heros-sigsaly.html) - Revisits the pivotal yet underappreciated contributions of Bell Labs to computing history.

* [Italian Newspaper Says It Has Published World's First AI-Generated Edition](https://news.slashdot.org/story/25/03/18/2231255/italian-newspaper-says-it-has-published-worlds-first-ai-generated-edition?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Marks a significant step in media evolution with AI-driven journalism.

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

* [2025-03-19, 16:00:00](https://yro.slashdot.org/story/25/03/19/0927253/fedex-data-scraping-and-telecom-insider-bribes-powered-nationwide-iphone-theft-operation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FedEx Data Scraping and Telecom Insider Bribes Powered Nationwide iPhone Theft Operation](https://yro.slashdot.org/story/25/03/19/0927253/fedex-data-scraping-and-telecom-insider-bribes-powered-nationwide-iphone-theft-operation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 15:40:35](https://news.ycombinator.com/item?id=43413478) - [The Business of Phish (2013)](https://priceonomics.com/business-of-phish/)
* [2025-03-19, 15:16:48](https://news.ycombinator.com/item?id=43413125) - [Memory Safety for Web Fonts](https://developer.chrome.com/blog/memory-safety-fonts)
* [2025-03-19, 15:02:36](https://lobste.rs/s/fcepiv/macos_blog_post_ft_hackintosh) - [The macOS Blog Post (ft. Hackintosh)](https://lilysthings.org/blog/the-macos-blog-post/)
* [2025-03-19, 15:00:00](https://slashdot.org/story/25/03/19/088253/microsoft-quantum-computing-claim-still-lacks-evidence?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Quantum Computing Claim Still Lacks Evidence](https://slashdot.org/story/25/03/19/088253/microsoft-quantum-computing-claim-still-lacks-evidence?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 14:51:14](https://news.ycombinator.com/item?id=43412768) - [Show HN: AGX – Open-Source Data Exploration for ClickHouse (The New Standard?)](https://github.com/agnosticeng/agx)
* [2025-03-19, 14:10:40](https://lobste.rs/s/1hexlm/no_longer_my_favorite_git_commit) - [No Longer My Favorite Git Commit](https://mtlynch.io/no-longer-my-favorite-git-commit/)
* [2025-03-19, 14:10:33](https://lobste.rs/s/ql2ohv/weird_sometimes_useful_charts) - [Weird but (sometimes) useful charts](https://xeno.graphics/)
* [2025-03-19, 14:05:45](https://news.ycombinator.com/item?id=43412179) - [An early look at cryptographic watermarks for AI-generated content](https://blog.cloudflare.com/an-early-look-at-cryptographic-watermarks-for-ai-generated-content/)
* [2025-03-19, 14:00:00](https://entertainment.slashdot.org/story/25/03/19/0743248/sony-unveils-rgb-led-backlight-tech-that-outperforms-traditional-mini-led?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sony Unveils RGB LED Backlight Tech That Outperforms Traditional Mini LED](https://entertainment.slashdot.org/story/25/03/19/0743248/sony-unveils-rgb-led-backlight-tech-that-outperforms-traditional-mini-led?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 13:47:02](https://news.ycombinator.com/item?id=43411934) - [Video game workers in North America now have an industry-wide union](https://www.engadget.com/big-tech/video-game-workers-in-north-america-now-have-an-industry-wide-union-130024730.html)
* [2025-03-19, 13:44:25](https://news.ycombinator.com/item?id=43411898) - [The clustering behavior of sliding windows](https://arxiv.org/abs/2503.14393)
* [2025-03-19, 13:33:49](https://news.ycombinator.com/item?id=43411755) - [Ikemen-GO: open-source reimplementation of MUGEN](https://github.com/ikemen-engine/Ikemen-GO)
* [2025-03-19, 13:05:30](https://lobste.rs/s/ghkg71/quickbench_zero_dependency_linux) - [QuickBench: A Zero-Dependency Linux Benchmark for CPU, Memory, and Storage](https://github.com/bearstech/quickbench)
* [2025-03-19, 13:00:00](https://slashdot.org/story/25/03/18/2321249/five-charged-in-european-parliament-huawei-bribery-probe?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Five Charged In European Parliament Huawei Bribery Probe](https://slashdot.org/story/25/03/18/2321249/five-charged-in-european-parliament-huawei-bribery-probe?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 12:56:46](https://lobste.rs/s/ptsvae/how_speed_up_rust_compiler_march_2025) - [How to speed up the Rust compiler in March 2025](https://nnethercote.github.io/2025/03/19/how-to-speed-up-the-rust-compiler-in-march-2025.html)
* [2025-03-19, 12:46:00](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss) - [Discord Launches SDK to Help Developers Enhance Social Experiences in Their Games](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss)
* [2025-03-19, 12:30:48](https://news.ycombinator.com/item?id=43410988) - [Konva.js - Declarative 2D Canvas for React, Vue, and Svelte](https://konvajs.org/)
* [2025-03-19, 12:24:55](https://lobste.rs/s/j61hod/search_next_great_programming_language) - [In Search of the Next Great Programming Language](https://git.sr.ht/~robheghan/glogg/tree/main/item/docs/motivation.md)
* [2025-03-19, 12:16:06](https://news.ycombinator.com/item?id=43410885) - [The Origin of the Pork Taboo](https://archaeology.org/issues/march-april-2025/letters-from/on-the-origin-of-the-pork-taboo/)
* [2025-03-19, 11:44:17](https://news.ycombinator.com/item?id=43410692) - [fd: A simple, fast and user-friendly alternative to 'find'](https://github.com/sharkdp/fd)
* [2025-03-19, 11:21:12](https://news.ycombinator.com/item?id=43410548) - [I'm the Canadian who was detained by ICE for two weeks](https://www.theguardian.com/us-news/2025/mar/19/canadian-detained-us-immigration-jasmine-mooney)
* [2025-03-19, 10:52:23](https://news.ycombinator.com/item?id=43410349) - [Wolfram: Learning about Innovation from Half a Century of Conway's Game of Life](https://writings.stephenwolfram.com/2025/03/what-can-we-learn-about-engineering-and-innovation-from-half-a-century-of-the-game-of-life-cellular-automaton/)
* [2025-03-19, 10:36:52](https://news.ycombinator.com/item?id=43410247) - [Apple Loses Top Court Fight Over German Antitrust Crackdown](https://www.bloomberg.com/news/articles/2025-03-18/apple-loses-top-court-fight-against-german-antitrust-crackdown)
* [2025-03-19, 10:09:15](https://news.ycombinator.com/item?id=43410061) - [The Lost Art of Research as Leisure](https://kasurian.com/p/research-as-leisure)
* [2025-03-19, 10:02:57](https://lobste.rs/s/5scnsn/bell_labs_unsung_heros_history_computing) - [Bell Labs' Unsung Heros in the History of Computing (2012)](https://dobbse.net/thinair/2012/04/unsung-heros-sigsaly.html)
* [2025-03-19, 10:00:00](https://yro.slashdot.org/story/25/03/18/2047251/the-effect-of-application-fees-on-entry-into-patenting?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Effect of Application Fees on Entry into Patenting](https://yro.slashdot.org/story/25/03/18/2047251/the-effect-of-application-fees-on-entry-into-patenting?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 09:35:03](https://lobste.rs/s/xttfur/language_interop_extensible_compiler) - [Language interop and the extensible compiler](https://smallcultfollowing.com/babysteps/blog/2025/03/18/lang-interop-extensibility/)
* [2025-03-19, 08:17:57](https://lobste.rs/s/ziolhm/brief_incomplete_mostly_wrong_history) - [A Brief, Incomplete, and Mostly Wrong History of Programming Languages (2009)](http://james-iry.blogspot.com/2009/05/brief-incomplete-and-mostly-wrong.html)
* [2025-03-19, 08:11:58](https://lobste.rs/s/g98pec/apache_kafka_4_0_0_release_announcement) - [Apache Kafka 4.0.0 Release Announcement](https://kafka.apache.org/blog#apache_kafka_400_release_announcement)
* [2025-03-19, 08:02:00](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss) - [Iguanas Floated One-Fifth of the Way Around the World to Colonize Fiji, Genetic Analysis Indicates](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss)
* [2025-03-19, 07:20:06](https://lobste.rs/s/dnsezi/asahi_lina_pausing_work_on_apple_gpu_linux) - [Asahi Lina Pausing Work On Apple GPU Linux Driver Development](https://www.phoronix.com/news/Asahi-Lina-Steps-Down-Linux-GPU)
* [2025-03-19, 07:14:12](https://lobste.rs/s/ugwn0j/failing_upwards_twitter_encrypted_dm) - [Failing upwards: the Twitter encrypted DM failure](https://mjg59.dreamwidth.org/71188.html)
* [2025-03-19, 07:13:23](https://news.ycombinator.com/item?id=43409028) - [The Intenet Slum: is abandoning the Internet the next big thing? (2004)](https://www.fourmilab.ch/documents/netslum/)
* [2025-03-19, 07:00:00](https://hardware.slashdot.org/story/25/03/18/2312229/nvidia-says-the-age-of-generalist-robotics-is-here?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia Says 'the Age of Generalist Robotics Is Here'](https://hardware.slashdot.org/story/25/03/18/2312229/nvidia-says-the-age-of-generalist-robotics-is-here?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 06:07:01](https://news.ycombinator.com/item?id=43408674) - [CVE-2024-9956 – PassKey Account Takeover in All Mobile Browsers](https://mastersplinter.work/research/passkey/)
* [2025-03-19, 05:32:52](https://news.ycombinator.com/item?id=43408540) - [Crew-9 Returns to Earth](https://www.spacex.com/launches/mission/?missionId=crew-9-return)
* [2025-03-19, 05:01:36](https://lobste.rs/s/ki7hmf/comptime_zig_orm) - [Comptime Zig ORM](https://matklad.github.io/2025/03/19/comptime-zig-orm.html)
* [2025-03-19, 03:30:00](https://science.slashdot.org/story/25/03/18/2243230/researchers-engineer-bacteria-to-produce-plastics?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Researchers Engineer Bacteria To Produce Plastics](https://science.slashdot.org/story/25/03/18/2243230/researchers-engineer-bacteria-to-produce-plastics?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 03:18:00](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss) - [Everything You Say to Your Echo Will be Sent to Amazon Starting on March 28](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss)
* [2025-03-19, 02:22:05](https://lobste.rs/s/jlm5ug/copyright_demoscene) - [Copyright and the demoscene](https://www.datagubbe.se/scenecop/)
* [2025-03-19, 02:02:00](https://news.slashdot.org/story/25/03/18/2231255/italian-newspaper-says-it-has-published-worlds-first-ai-generated-edition?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Italian Newspaper Says It Has Published World's First AI-Generated Edition](https://news.slashdot.org/story/25/03/18/2231255/italian-newspaper-says-it-has-published-worlds-first-ai-generated-edition?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 01:25:00](https://it.slashdot.org/story/25/03/18/2226205/microsoft-isnt-fixing-8-year-old-shortcut-exploit-abused-for-spying?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Isn't Fixing 8-Year-Old Shortcut Exploit Abused For Spying](https://it.slashdot.org/story/25/03/18/2226205/microsoft-isnt-fixing-8-year-old-shortcut-exploit-abused-for-spying?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 00:45:00](https://mobile.slashdot.org/story/25/03/18/2220249/gavin-newsom-is-reportedly-sending-burner-phones-to-tech-ceos?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Gavin Newsom Is Reportedly Sending Burner Phones To Tech CEOs](https://mobile.slashdot.org/story/25/03/18/2220249/gavin-newsom-is-reportedly-sending-burner-phones-to-tech-ceos?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 00:21:42](https://lobste.rs/s/xgdq8e/why_i_love_set) - [Why I Love SET](https://franklantz.substack.com/p/why-i-love-set)
* [2025-03-19, 00:01:00](https://entertainment.slashdot.org/story/25/03/18/2052244/us-music-streaming-tops-100-million-subscribers-vinyl-outsells-cds-for-third-year?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Music Streaming Tops 100 Million Subscribers; Vinyl Outsells CDs For Third Year](https://entertainment.slashdot.org/story/25/03/18/2052244/us-music-streaming-tops-100-million-subscribers-vinyl-outsells-cds-for-third-year?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 23:55:17](https://news.ycombinator.com/item?id=43406710) - [Make Ubuntu packages 90% faster by rebuilding them](https://gist.github.com/jwbee/7e8b27e298de8bbbf8abfa4c232db097)
* [2025-03-18, 23:20:00](https://science.slashdot.org/story/25/03/18/2258246/starliner-astronauts-return-to-earth-after-more-than-9-months-in-space?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Starliner Astronauts Return To Earth After More Than 9 Months In Space](https://science.slashdot.org/story/25/03/18/2258246/starliner-astronauts-return-to-earth-after-more-than-9-months-in-space?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 22:40:00](https://news.slashdot.org/story/25/03/18/2040214/ftc-removes-posts-critical-of-amazon-microsoft-and-ai-companies?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FTC Removes Posts Critical of Amazon, Microsoft, and AI Companies](https://news.slashdot.org/story/25/03/18/2040214/ftc-removes-posts-critical-of-amazon-microsoft-and-ai-companies?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 22:33:00](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss) - [People are Using Google's New AI Model to Remove Watermarks From Images](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss)
* [2025-03-18, 22:05:26](https://lobste.rs/s/vuvvku/announcing_fedora_linux_42_beta) - [Announcing Fedora Linux 42 Beta](https://fedoramagazine.org/announcing-fedora-linux-42-beta/)
* [2025-03-18, 22:00:00](https://tech.slashdot.org/story/25/03/18/2015234/vws-cheapest-ev-is-first-to-use-rivian-software?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [VW's Cheapest EV Is First To Use Rivian Software](https://tech.slashdot.org/story/25/03/18/2015234/vws-cheapest-ev-is-first-to-use-rivian-software?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 21:31:09](https://lobste.rs/s/h22rcm/why_snes_hardware_is_running_faster_than) - [Why SNES hardware is running faster than expected—and why it’s a problem](https://arstechnica.com/gaming/2025/03/this-small-snes-timing-issue-is-causing-big-speedrun-problems/)
* [2025-03-18, 21:20:00](https://yro.slashdot.org/story/25/03/18/209246/dutch-parliament-calls-for-end-to-dependence-on-us-software-companies?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Dutch Parliament Calls For End To Dependence On US Software Companies](https://yro.slashdot.org/story/25/03/18/209246/dutch-parliament-calls-for-end-to-dependence-on-us-software-companies?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 20:08:05](https://lobste.rs/s/dhfjyu/introducing_two_new_pebbleos_watches) - [Introducing two new PebbleOS watches](https://ericmigi.com/blog/introducing-two-new-pebbleos-watches)
* [2025-03-18, 19:03:22](https://lobste.rs/s/ueg9lr/patterns_for_modeling_data_with) - [Patterns for modeling data with absolutely no NULLs?](https://lobste.rs/s/ueg9lr/patterns_for_modeling_data_with)
* [2025-03-18, 17:49:00](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss) - [Unearthed Notebooks Shed Light on Victorian Genius Who Inspired Einstein](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss)
* [2025-03-18, 17:30:13](https://news.ycombinator.com/item?id=43402149) - [HTTrack Website Copier](https://www.httrack.com/)
* [2025-03-18, 17:07:39](https://news.ycombinator.com/item?id=43401855) - [Show HN: I made a tool to port tweets to Bluesky mantaining their original date](https://bluemigrate.com)
* [2025-03-18, 16:18:08](https://news.ycombinator.com/item?id=43401179) - [Designing Electronics That Work](https://www.hscott.net/designing-electronics-that-work/)
* [2025-03-18, 15:59:27](https://news.ycombinator.com/item?id=43400989) - [Two new PebbleOS watches](https://ericmigi.com/blog/introducing-two-new-pebbleos-watches/)
* [2025-03-18, 13:07:00](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss) - [On the Road to Idiocracy](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss)
* [2025-03-18, 12:18:29](https://news.ycombinator.com/item?id=43398518) - [Google to buy Wiz for $32B](https://www.reuters.com/technology/cybersecurity/google-agrees-buy-cybersecurity-startup-wiz-32-bln-ft-reports-2025-03-18/)
* [2025-03-18, 11:18:33](https://lobste.rs/s/ogaalf/i_don_t_think_error_handling_is_solved) - [I don't think error handling is a solved problem in language design](https://utcc.utoronto.ca/~cks/space/blog/programming/ErrorHandlingNotSolvedProblem)
* [2025-03-18, 10:26:48](https://lobste.rs/s/otthd0/society_lost_focus) - [A Society That Lost Focus](https://ploum.net/2024-03-18-lost-focus.html)
* [2025-03-18, 10:07:21](https://lobste.rs/s/0sf074/why_i_m_no_longer_talking_architects_about) - [Why I'm No Longer Talking to Architects About Microservices](https://blog.container-solutions.com/why-im-no-longer-talking-to-architects-about-microservices)
* [2025-03-18, 08:24:00](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss) - [Forget Windows 11, SteamOS for Desktops May be Released Soon](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss)
* [2025-03-18, 07:55:58](https://lobste.rs/s/1o6zda/slack_art_being_busy_without_getting) - [Slack: The Art of Being Busy Without Getting Anything Done](https://matduggan.com/slack-the-art-of-being-busy-without-getting-anything-done/)
* [2025-03-18, 07:13:34](https://lobste.rs/s/sgyyww/stop_using_recommending_react) - [Stop Using and Recommending React](https://blog.lusito.info/stop-using-and-recommending-react.html)
* [2025-03-18, 03:38:00](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss) - [Chaos in Gravity - the Quantum Based Magnetic Monopole of Mass?](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss)
* [2025-03-17, 23:35:11](https://lobste.rs/s/jtk4tx/gimp_3_0_released) - [GIMP 3.0 Released](https://www.gimp.org/news/2025/03/16/gimp-3-0-released/)
* [2025-03-17, 22:53:00](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss) - [OpenAI Wants All The Data And For US Law To Apply Everywhere](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss)
* [2025-03-17, 18:11:00](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss) - [Six Weeks of CloudFlare Stalling; Still Blocking Niche Browsers](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss)
* [2025-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss) - [NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss)
* [2025-03-17, 08:36:00](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss) - [World's Smallest Microcontroller](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss)
* [2025-03-17, 03:50:00](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss) - [ESA Cuts the Ribbon at 34,000-Core HPC Center](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss)
* [2025-03-16, 23:07:00](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss) - [A New Age for Geothermal](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss)
* [2025-03-16, 18:20:00](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss) - [Apple Encrypted Data Row Case Begins in Secret](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss)
* [2025-03-16, 17:24:02](https://news.ycombinator.com/item?id=43380622) - [Selective async commits in PostgreSQL – balancing durability and performance](https://www.shayon.dev/post/2025/75/selective-asynchronous-commits-in-postgresql-balancing-durability-and-performance/)
* [2025-03-16, 14:15:30](https://news.ycombinator.com/item?id=43379235) - [For Delivery Workers in Latin America, Affordable E-Bikes Are a Superpower](https://reasonstobecheerful.world/e-bike-boom-delivery-workers/)
* [2025-03-16, 13:50:24](https://news.ycombinator.com/item?id=43379082) - [Zest: a programming language for malleable and legible systems](https://github.com/jamii/zest)
* [2025-03-16, 13:34:00](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss) - [5 Years After Covid-19 Became a Pandemic, Are We Ready for What's Next?](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss)
* [2025-03-16, 12:19:29](https://news.ycombinator.com/item?id=43378436) - [Visualising data structures and algorithms through animation](https://visualgo.net/en)
* [2025-03-16, 10:38:57](https://news.ycombinator.com/item?id=43378019) - [Some notes on Grafana Loki's new \"structured metadata\"](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/GrafanaLokiStructuredMetadata)
* [2025-03-16, 10:32:02](https://news.ycombinator.com/item?id=43377998) - [SheepShaver is an open source PowerPC Apple Macintosh emulator](https://www.emaculation.com/doku.php/sheepshaver)
* [2025-03-16, 08:46:00](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss) - [Sidewinder Advanced Persistent Threat (APT) Shifts to Targeting of Nuclear, Maritime Orgs](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss)
* [2025-03-16, 04:01:00](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss) - [SpaceX Launches Astronauts for Long-Awaited International Space Station Crew Swap](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss)
* [2025-03-15, 23:17:00](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss) - [No Project is an Island: Why You Need SBOMs and Dependency Management](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss)
* [2025-03-15, 18:33:00](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss) - [How a Rapidly Growing Population of Crocs Has Been Impacting Northern Territories Ecosystem](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss)
* [2025-03-15, 13:48:00](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss) - [Judge Calls Doge Firings A \"Sham\", Orders Thousands Of Workers To Be Reinstated Immediately](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss)
* [2025-03-15, 12:55:10](https://news.ycombinator.com/item?id=43372227) - [Karatsuba Matrix Multiplication and Its Efficient Hardware Implementations](https://arxiv.org/abs/2501.08889)
* [2025-03-15, 09:07:00](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss) - [Bad News for Low Orbit Satellites: Earth's Thermosphere is Shrinking](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss)
* [2025-03-15, 04:22:00](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss) - [AMD's Zen 6-Based Desktop Processors May Feature Up to 24 Cores](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss)
