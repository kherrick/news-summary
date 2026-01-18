# [News Summary](https://kherrick.github.io/news-summary/)

## Crypto and Financial Trends

* [53% of Crypto Tokens Launched Since 2021 Have Failed, Most in 2025](https://news.slashdot.org/story/26/01/18/0556221/53-of-crypto-tokens-launched-since-2021-have-failed-most-in-2025?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Technology and Innovation

* [jQuery 4.0.0 Released](https://blog.jquery.com/2026/01/17/jquery-4-0-0/)

* [Erdos 281 solved with ChatGPT 5.2 Pro](https://twitter.com/neelsomani/status/2012695714187325745)

* [How scientists are using Claude to accelerate research and discovery](https://www.anthropic.com/news/accelerating-scientific-research)

* [How Much Do AI Models Resemble a Brain?](https://slashdot.org/story/26/01/17/2350259/how-much-do-ai-models-resemble-a-brain?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [VaultGemma: A differentially private LLM](https://arxiv.org/pdf/2510.15001)

## Privacy and Security

* [Linux Kernel Bugs Hide for 2+ Years on Average](https://soylentnews.org/article.pl?sid=26/01/17/0446252&from=rss)

* [U.S. Court Order Against Anna's Archive Spells More Trouble for the Site](https://torrentfreak.com/u-s-court-order-against-annas-archive-spells-more-trouble-for-the-site/)

* [Predator Spyware Turns Failed Attacks Into Intelligence For Future Exploits](https://it.slashdot.org/story/26/01/17/2150219/predator-spyware-turns-failed-attacks-into-intelligence-for-future-exploits?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Mandiant Releases Database That Cracks Weak NTLM Passwords in 12 Hours](https://it.slashdot.org/story/26/01/17/194230/to-pressure-security-professionals-mandiant-releases-database-that-cracks-weak-ntlm-passwords-in-12-hours?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Researchers Expose WHILL Wheelchair Safety Risks Via Remote Hacking](https://soylentnews.org/article.pl?sid=26/01/17/0220205&from=rss)

## Scientific Advancements

* [2026's Breakthrough Technologies? MIT Technology Review Chooses Sodium-ion Batteries,  Commercial Space Stations](https://science.slashdot.org/story/26/01/17/2317222/2026s-breakthrough-technologies-mit-technology-review-chooses-sodium-ion-batteries-commercial-space-stations?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [NASA Livestreams the Rocket That Will Carry Four Astronauts Around the Moon](https://science.slashdot.org/story/26/01/17/1828213/nasa-livestreams-the-rocket-that-will-carry-four-astronauts-around-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## AI and Machine Learning

* [‘Society Cannot Function If No One is Accountable for AI’ — Jaron Lanier](https://soylentnews.org/article.pl?sid=26/01/17/0229252&from=rss)

* [AI Plays Rollercoaster Tycoon](https://labs.ramp.com/rct)

## Programming and Open-Source

* [How ClickHouse handles strings](https://rushter.com/blog/clickhouse-strings/)

* [I hotreload Rust and so can you](https://kampffrosch94.github.io/posts/hotreloading_rust/)

* [Rust's Culture of Semantic Precision](https://www.alilleybrinker.com/mini/rusts-culture-of-semantic-precision/)

## Miscellaneous

* [The relentless rule of my fitness tracker](https://timharford.com/2025/10/the-relentless-rule-of-my-fitness-tracker/)

* [Dark Mode vs. Light Mode: Which Is Better?](https://www.nngroup.com/articles/dark-mode/)

* [An Elizabethan mansion's secrets for staying warm](https://www.bbc.com/future/article/20260116-an-elizabethan-mansions-secrets-for-staying-warm)

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

* [2026-01-18, 05:59:00](https://news.slashdot.org/story/26/01/18/0556221/53-of-crypto-tokens-launched-since-2021-have-failed-most-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [53% of Crypto Tokens Launched Since 2021 Have Failed, Most in 2025](https://news.slashdot.org/story/26/01/18/0556221/53-of-crypto-tokens-launched-since-2021-have-failed-most-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 05:13:00](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss) - [Linux Kernel Bugs Hide for 2+ Years on Average](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss)
* [2026-01-18, 04:26:29](https://news.ycombinator.com/item?id=46664771) - [The relentless rule of my fitness tracker](https://timharford.com/2025/10/the-relentless-rule-of-my-fitness-tracker/)
* [2026-01-18, 04:24:48](https://lobste.rs/s/vokwbo/jquery_4_0_0_released) - [jQuery 4.0.0 Released](https://blog.jquery.com/2026/01/17/jquery-4-0-0/)
* [2026-01-18, 04:23:28](https://news.ycombinator.com/item?id=46664755) - [jQuery 4.0.0 Released](https://blog.jquery.com/2026/01/17/jquery-4-0-0/)
* [2026-01-18, 03:52:10](https://news.ycombinator.com/item?id=46664646) - [U.S. Court Order Against Anna&apos;s Archive Spells More Trouble for the Site](https://torrentfreak.com/u-s-court-order-against-annas-archive-spells-more-trouble-for-the-site/)
* [2026-01-18, 03:49:29](https://news.ycombinator.com/item?id=46664638) - [Lopado­temacho­selacho­galeo­kranio­leipsano­drim­hypo­trimmato­silphio­karab](https://en.wikipedia.org/wiki/Lopado%C2%ADtemacho%C2%ADselacho%C2%ADgaleo%C2%ADkranio%C2%ADleipsano%C2%ADdrim%C2%ADhypo%C2%ADtrimmato%C2%ADsilphio%C2%ADkarabo%C2%ADmelito%C2%ADkatakechy%C2%ADmeno%C2%ADkichl%C2%ADepi%C2%ADkossypho%C2%ADphatto%C2%ADperister%C2%ADalektryon%C2%ADopte%C2%ADkephallio%C2%ADkigklo%C2%ADpeleio%C2%ADlagoio%C2%ADsiraio%C2%ADbaphe%C2%ADtragano%C2%ADpterygon)
* [2026-01-18, 03:48:03](https://news.ycombinator.com/item?id=46664631) - [Erdos 281 solved with ChatGPT 5.2 Pro](https://twitter.com/neelsomani/status/2012695714187325745)
* [2026-01-18, 03:22:52](https://news.ycombinator.com/item?id=46664540) - [How scientists are using Claude to accelerate research and discovery](https://www.anthropic.com/news/accelerating-scientific-research)
* [2026-01-18, 02:34:00](https://slashdot.org/story/26/01/17/2350259/how-much-do-ai-models-resemble-a-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Much Do AI Models Resemble a Brain?](https://slashdot.org/story/26/01/17/2350259/how-much-do-ai-models-resemble-a-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 02:31:24](https://lobste.rs/s/mihtmk/vaultgemma_differentially_private_llm) - [VaultGemma: A differentially private LLM](https://arxiv.org/pdf/2510.15001)
* [2026-01-18, 02:17:25](https://news.ycombinator.com/item?id=46664195) - [Profession by Isaac Asimov](https://www.abelard.org/asimov.php)
* [2026-01-18, 01:55:34](https://news.ycombinator.com/item?id=46664079) - [Dark Mode vs. Light Mode: Which Is Better?](https://www.nngroup.com/articles/dark-mode/)
* [2026-01-18, 00:41:51](https://news.ycombinator.com/item?id=46663686) - [The life of a playboy publisher who shaped 20th-century literature](https://www.washingtonpost.com/books/2026/01/09/bennett-cerf-biography-nothing-random-feldman-book-review/)
* [2026-01-18, 00:29:00](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss) - [Wormholes May Not Exist—We&apos;ve Found They Reveal Something Deeper About Time and the Universe](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss)
* [2026-01-18, 00:09:43](https://news.ycombinator.com/item?id=46663507) - [Computer Systems Security 6.566 / Spring 2024](https://css.csail.mit.edu/6.858/2024/)
* [2026-01-18, 00:07:19](https://lobste.rs/s/evuzid/more_http_3_focus_one_backend_less) - [More HTTP/3 focus, one backend less](https://daniel.haxx.se/blog/2026/01/17/more-http-3-focus-one-backend-less/)
* [2026-01-18, 00:05:02](https://news.ycombinator.com/item?id=46663467) - [IRISC: An ARMv7 assembly interpreter and computer architecture simulator](https://polysoftit.co.uk/irisc-web/)
* [2026-01-17, 23:47:16](https://news.ycombinator.com/item?id=46663338) - [If you put Apple icons in reverse it looks like someone getting good at design](https://mastodon.social/@heliographe_studio/115890819509545391)
* [2026-01-17, 23:41:00](https://science.slashdot.org/story/26/01/17/2317222/2026s-breakthrough-technologies-mit-technology-review-chooses-sodium-ion-batteries-commercial-space-stations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2026&apos;s Breakthrough Technologies? MIT Technology Review Chooses Sodium-ion Batteries,  Commercial Space Stations](https://science.slashdot.org/story/26/01/17/2317222/2026s-breakthrough-technologies-mit-technology-review-chooses-sodium-ion-batteries-commercial-space-stations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 23:38:21](https://news.ycombinator.com/item?id=46663268) - [No knives, only cook knives](https://kellykozakandjoshdonald.substack.com/p/no-knives-only-cook-knives)
* [2026-01-17, 22:41:00](https://it.slashdot.org/story/26/01/17/2150219/predator-spyware-turns-failed-attacks-into-intelligence-for-future-exploits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Predator Spyware Turns Failed Attacks Into Intelligence For Future Exploits](https://it.slashdot.org/story/26/01/17/2150219/predator-spyware-turns-failed-attacks-into-intelligence-for-future-exploits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 22:39:28](https://lobste.rs/s/dtir1a/why_we_ve_tried_replace_developers_every) - [Why We&apos;ve Tried to Replace Developers Every Decade Since 1969](https://www.caimito.net/en/blog/2025/12/07/the-recurring-dream-of-replacing-developers.html)
* [2026-01-17, 22:19:25](https://news.ycombinator.com/item?id=46662662) - [Light Mode InFFFFFFlation](https://willhbr.net/2025/10/20/light-mode-infffffflation/)
* [2026-01-17, 22:08:57](https://lobste.rs/s/0lh5rd/you_had_one_job_why_twenty_years_devops_has) - [“You Had One Job”: Why Twenty Years of DevOps Has Failed to Do it](https://www.honeycomb.io/blog/you-had-one-job-why-twenty-years-of-devops-has-failed-to-do-it)
* [2026-01-17, 21:41:00](https://it.slashdot.org/story/26/01/17/194230/to-pressure-security-professionals-mandiant-releases-database-that-cracks-weak-ntlm-passwords-in-12-hours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [To Pressure Security Professionals, Mandiant Releases Database That Cracks Weak NTLM Passwords in 12 Hours](https://it.slashdot.org/story/26/01/17/194230/to-pressure-security-professionals-mandiant-releases-database-that-cracks-weak-ntlm-passwords-in-12-hours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 21:40:53](https://news.ycombinator.com/item?id=46662399) - [Show HN: Speed Miners – A tiny RTS resource mini-game](https://speedminers.fun/)
* [2026-01-17, 21:35:44](https://lobste.rs/s/hntdgv/if_writing_code_is_easy_part_why_would_i) - [If writing the code is the easy part, why would I want someone else to write it?](https://tldraw.dev/blog/stay-away-from-my-trash)
* [2026-01-17, 21:07:03](https://lobste.rs/s/31iwyd/malware_peddlers_are_now_hijacking_snap) - [Malware Peddlers Are Now Hijacking Snap Publisher Domains](https://blog.popey.com/2026/01/malware-purveyors-taking-over-published-snap-email-domains/)
* [2026-01-17, 21:03:52](https://news.ycombinator.com/item?id=46662078) - [Show HN: ChunkHound, a local-first tool for understanding large codebases](https://github.com/chunkhound/chunkhound)
* [2026-01-17, 20:44:52](https://news.ycombinator.com/item?id=46661897) - [Kip: A programming language based on grammatical cases of Turkish](https://github.com/kip-dili/kip)
* [2026-01-17, 20:41:00](https://news.slashdot.org/story/26/01/17/0444252/two-more-offshore-wind-projects-in-the-us-allowed-to-continue-construction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Two More Offshore Wind Projects in the US Allowed to Continue Construction](https://news.slashdot.org/story/26/01/17/0444252/two-more-offshore-wind-projects-in-the-us-allowed-to-continue-construction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 20:26:23](https://lobste.rs/s/xkgzk4/how_many_pixels_do_you_really_need) - [How Many Pixels Do You Really Need?](https://rldane.space/how-many-pixels-do-you-really-need.html)
* [2026-01-17, 19:43:00](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss) - [&apos;Society Cannot Function If No One is Accountable for AI&apos; — Jaron Lanier](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss)
* [2026-01-17, 19:34:00](https://news.slashdot.org/story/26/01/17/089219/dozens-of-us-colleges-close-as-falling-birth-rate-pushes-them-off-enrollment-cliff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dozens of US Colleges Close as Falling Birth Rate Pushes Them Off Enrollment Cliff](https://news.slashdot.org/story/26/01/17/089219/dozens-of-us-colleges-close-as-falling-birth-rate-pushes-them-off-enrollment-cliff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 19:03:58](https://lobste.rs/s/wjbvwq/ai_plays_rollercoaster_tycoon) - [AI Plays Rollercoaster Tycoon](https://labs.ramp.com/rct)
* [2026-01-17, 18:54:14](https://lobste.rs/s/60yo7s/rust_s_culture_semantic_precision) - [Rust&apos;s Culture of Semantic Precision](https://www.alilleybrinker.com/mini/rusts-culture-of-semantic-precision/)
* [2026-01-17, 18:34:00](https://science.slashdot.org/story/26/01/17/1828213/nasa-livestreams-the-rocket-that-will-carry-four-astronauts-around-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Livestreams the Rocket That Will Carry Four Astronauts Around the Moon](https://science.slashdot.org/story/26/01/17/1828213/nasa-livestreams-the-rocket-that-will-carry-four-astronauts-around-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 18:29:00](https://news.ycombinator.com/item?id=46660543) - [Raising money fucked me up](https://blog.yakkomajuri.com/blog/raising-money-fucked-me-up)
* [2026-01-17, 17:34:00](https://yro.slashdot.org/story/26/01/17/0718211/what-happened-after-security-researchers-found-60-flock-cameras-livestreaming-to-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happened After Security Researchers Found 60 Flock Cameras Livestreaming to the Internet](https://yro.slashdot.org/story/26/01/17/0718211/what-happened-after-security-researchers-found-60-flock-cameras-livestreaming-to-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 16:53:24](https://news.ycombinator.com/item?id=46659550) - [An Elizabethan mansion&apos;s secrets for staying warm](https://www.bbc.com/future/article/20260116-an-elizabethan-mansions-secrets-for-staying-warm)
* [2026-01-17, 16:39:53](https://lobste.rs/s/0mvdau/my_new_minimal_static_site_generator) - [My new minimal static site generator](https://maurycyz.com/misc/new_ssg/)
* [2026-01-17, 16:34:00](https://linux.slashdot.org/story/26/01/17/0610216/t2linux-brings-a-flagship-kde-plasma-linux-desktop-to-risc-v-and-arm64?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [T2/Linux Brings a Flagship KDE Plasma Linux Desktop to RISC-V and ARM64](https://linux.slashdot.org/story/26/01/17/0610216/t2linux-brings-a-flagship-kde-plasma-linux-desktop-to-risc-v-and-arm64?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 15:34:00](https://tech.slashdot.org/story/26/01/17/0228239/as-us-officials-showed-off-a-self-driving-robo-bus---it-got-hit-by-a-tesla-driver?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As US Officials Showed Off a Self-Driving Robo-Bus - It Got Hit By a Tesla Driver](https://tech.slashdot.org/story/26/01/17/0228239/as-us-officials-showed-off-a-self-driving-robo-bus---it-got-hit-by-a-tesla-driver?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 15:32:12](https://lobste.rs/s/87hezy/i_hotreload_rust_so_can_you) - [I hotreload Rust and so can you](https://kampffrosch94.github.io/posts/hotreloading_rust/)
* [2026-01-17, 15:00:00](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss) - [Why Flies Matter, Their Vital Role in Ecosystems, and Surprising Diversity](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss)
* [2026-01-17, 14:34:17](https://lobste.rs/s/vp39cr/ascii_characters_are_not_pixels_deep_dive) - [ASCII characters are not pixels: a deep dive into ASCII rendering](https://alexharri.com/blog/ascii-rendering)
* [2026-01-17, 14:31:33](https://news.ycombinator.com/item?id=46658345) - [The recurring dream of replacing developers](https://www.caimito.net/en/blog/2025/12/07/the-recurring-dream-of-replacing-developers.html)
* [2026-01-17, 13:32:55](https://lobste.rs/s/c4q8d8/fun_things_do_with_your_vm_370_machine) - [Fun things to do with your VM/370 machine](https://rbanffy.github.io/fun-with-old-mainframes.github.io/fun-with-vm370.html)
* [2026-01-17, 13:00:00](https://tech.slashdot.org/story/26/01/17/0440228/nearly-5-million-accounts-removed-under-australias-new-social-media-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nearly 5 Million Accounts Removed Under Australia&apos;s New Social Media Ban](https://tech.slashdot.org/story/26/01/17/0440228/nearly-5-million-accounts-removed-under-australias-new-social-media-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 12:48:13](https://lobste.rs/s/kbkcbe/website_end_all_websites) - [A Website To End All Websites](https://henry.codes/writing/a-website-to-destroy-all-websites/)
* [2026-01-17, 12:01:29](https://lobste.rs/s/vkau8y/pushing_smallest_possible_change) - [Pushing the smallest possible change to production](https://ankursethi.com/blog/smallest-possible-change/)
* [2026-01-17, 11:15:26](https://news.ycombinator.com/item?id=46657122) - [ASCII characters are not pixels: a deep dive into ASCII rendering](https://alexharri.com/blog/ascii-rendering)
* [2026-01-17, 10:18:00](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss) - [Researchers Expose WHILL Wheelchair Safety Risks Via Remote Hacking](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss)
* [2026-01-17, 10:00:00](https://yro.slashdot.org/story/26/01/17/0428238/supreme-court-may-block-thousands-of-lawsuits-over-monsantos-weed-killer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court May Block Thousands of Lawsuits Over Monsanto&apos;s Weed Killer](https://yro.slashdot.org/story/26/01/17/0428238/supreme-court-may-block-thousands-of-lawsuits-over-monsantos-weed-killer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 07:23:41](https://lobste.rs/s/s55ewk/kip_programming_language_based_on) - [kip: A programming language based on grammatical cases of Turkish](https://github.com/joom/kip)
* [2026-01-17, 07:00:00](https://hardware.slashdot.org/story/26/01/17/0417254/biggest-offshore-wind-project-in-us-to-resume-construction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Biggest Offshore Wind Project In US To Resume Construction](https://hardware.slashdot.org/story/26/01/17/0417254/biggest-offshore-wind-project-in-us-to-resume-construction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 06:15:02](https://lobste.rs/s/n8qgs8/emoji_design_convergence_review_2018) - [Emoji Design Convergence Review: 2018 - 2026](https://blog.emojipedia.org/emoji-design-convergence-review-2018-2026/)
* [2026-01-17, 05:33:17](https://lobste.rs/s/fgdiw1/how_clickhouse_handles_strings) - [How ClickHouse handles strings](https://rushter.com/blog/clickhouse-strings/)
* [2026-01-17, 05:30:00](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss) - [Signal Creator Moxie Marlinspike Wants to Do for AI What He Did for Messaging](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss)
* [2026-01-17, 03:30:00](https://science.slashdot.org/story/26/01/16/224252/pesticides-may-drastically-shorten-fish-lifespans-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pesticides May Drastically Shorten Fish Lifespans, Study Finds](https://science.slashdot.org/story/26/01/16/224252/pesticides-may-drastically-shorten-fish-lifespans-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 00:42:00](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss) - [X Didn&apos;t Fix Grok&apos;s ‘Undressing’ Problem. It Just Makes People Pay for It](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss)
* [2026-01-16, 21:47:22](https://lobste.rs/s/0ashr1/i_set_all_376_vim_options_i_m_still_fool) - [I set all 376 Vim options and I&apos;m still a fool](https://evanhahn.com/i-set-all-376-vim-options-and-im-still-a-fool/)
* [2026-01-16, 20:01:27](https://lobste.rs/s/xankns/cutting_llm_token_usage_by_80_using_repl) - [Cutting LLM token Usage by ~80% using REPL driven document analysis](https://yogthos.net/posts/2026-01-16-lattice-mcp.html)
* [2026-01-16, 20:00:00](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss) - [Meta to Cut More than 1,000 Jobs as its Shifts Focus to AI Wearables](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss)
* [2026-01-16, 19:20:58](https://lobste.rs/s/ubcsl9/smalloc_simple_memory_allocator) - [smalloc: a simple memory allocator](https://github.com/zooko/smalloc)
* [2026-01-16, 19:00:55](https://lobste.rs/s/dtnmwy/what_are_your_favorite_drawing_libraries) - [What are your favorite drawing libraries?](https://lobste.rs/s/dtnmwy/what_are_your_favorite_drawing_libraries)
* [2026-01-16, 16:22:31](https://lobste.rs/s/d1m8cw/openbsd_current_now_runs_as_guest_under) - [OpenBSD-current now runs as guest under Apple Hypervisor](https://www.undeadly.org/cgi?action=article;sid=20260115203619)
* [2026-01-16, 16:03:37](https://lobste.rs/s/boyarm/6_day_ip_address_certificates_are) - [6-day and IP Address Certificates are Generally Available](https://letsencrypt.org/2026/01/15/6day-and-ip-general-availability.html)
* [2026-01-16, 15:23:00](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss) - [You Need A Kitchen Slide Rule](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss)
* [2026-01-16, 10:30:00](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss) - [Over Half a Million Windows Users are Switching to Linux](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss)
* [2026-01-16, 05:47:00](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss) - [BreachForum Breach](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss)
* [2026-01-16, 04:50:11](https://news.ycombinator.com/item?id=46643092) - [Podcasting Could Use a Good Asteroid](https://www.joanwestenberg.com/podcasting-could-use-a-good-asteroid/)
* [2026-01-16, 01:06:00](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss) - [Survey: Even Meta And Microsoft Engineers Ditch Company AI For Claude](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss)
* [2026-01-15, 20:17:00](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss) - [GNOME Dev Gives Fans of Linux&apos;s Middle-Click Paste the Middle Finger](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss)
* [2026-01-15, 15:31:00](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss) - [Cray Customer Service – Memories (1979 to 2014) by Charles Clark](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss)
* [2026-01-15, 10:50:00](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss) - [A Fix for Frost: Engineers Use Electricity to Zap Ice Without Heat or Chemicals](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss)
* [2026-01-15, 06:12:00](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss) - [Resuscitating a 1934 Briggs &amp; Stratton Washing Machine Engine](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss)
* [2026-01-15, 02:48:00](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss) - [RIP - &apos;Dilbert&apos; Creator Scott Adams Dies at 68 After Prostate Cancer Battle](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss)
* [2026-01-15, 01:25:00](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss) - [The AIdigest.org&apos;s AI Village](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss)
* [2026-01-14, 20:33:00](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss) - [Tech Bloggers Switching From Windows to Linux](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss)
* [2026-01-14, 17:29:09](https://news.ycombinator.com/item?id=46619059) - [Xous Operating System](https://xous.dev/)
* [2026-01-14, 15:49:00](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss) - [China Expected to Approve H200 Imports in Early 2026, Report Claims](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss)
* [2026-01-14, 11:06:00](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss) - [Some Dogs Eavesdrop on Their Owners to Learn New Words](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss)
* [2026-01-14, 06:24:00](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss) - [An Ultra-Fast Quantum Tunneling Device for the 6G Terahertz Era](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss)
* [2026-01-14, 01:41:00](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss) - [Volkswagen is Bringing Physical Buttons Back to the Dashboard With the Polo EV](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss)
