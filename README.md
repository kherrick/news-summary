# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Technology Breakthroughs

* [Dual-PCB Linux Computer With 843 Components Designed By AI Boots On First Attempt](https://hardware.slashdot.org/story/25/12/16/229209/dual-pcb-linux-computer-with-843-components-designed-by-ai-boots-on-first-attempt?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [A Simple Pill Could Replace Injections for Treating Gonorrhea](https://soylentnews.org/article.pl?sid=25/12/16/0725206&from=rss)

* [Scientists Discover Early Alzheimer’s Warning Sign Hiding in Routine Brain Scans](https://soylentnews.org/article.pl?sid=25/12/15/014215&from=rss)

## Cybersecurity and Privacy Concerns

* [Google Sues Alleged Chinese Scam Group Behind Massive US Text Message Phishing Ring](https://tech.slashdot.org/story/25/12/17/1613200/google-sues-alleged-chinese-scam-group-behind-massive-us-text-message-phishing-ring?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Meta Tolerates Rampant Ad Fraud From China To Safeguard Billions In Revenue](https://meta.slashdot.org/story/25/12/16/2226215/meta-tolerates-rampant-ad-fraud-from-china-to-safeguard-billions-in-revenue?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Breach At South Korea's Equivalent of Amazon Exposed Data of Almost Every Adult](https://yro.slashdot.org/story/25/12/17/009254/breach-at-south-koreas-equivalent-of-amazon-exposed-data-of-almost-every-adult?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Software and Open Source Innovations

* [Linux Kernel Rust Code Sees Its First CVE Vulnerability](https://www.phoronix.com/news/First-Linux-Rust-CVE)

* [Maintaining an open source software during Hacktoberfest](https://crocidb.com/post/maintaining-an-oss-during-hacktoberfest/)

* [System76 Launches First Stable Release of Rust-Based COSMIC Desktop and Pop!_OS 24.04 LTS](https://soylentnews.org/article.pl?sid=25/12/13/144230&from=rss)

## Corporate Developments and Policies

* [Coursera Acquires Udemy For $930 Million](https://news.slashdot.org/story/25/12/17/1650219/coursera-acquires-udemy-for-930-million?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Meta Is Considering Charging Business Pages To Post Links](https://tech.slashdot.org/story/25/12/17/1457249/meta-is-considering-charging-business-pages-to-post-links?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [EU Moves To Ease 2035 Ban On Internal Combustion Cars](https://tech.slashdot.org/story/25/12/17/003222/eu-moves-to-ease-2035-ban-on-internal-combustion-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Environmental Issues

* [The Arctic Is in Dire Straits, 20 Years of Reporting Show](https://news.slashdot.org/story/25/12/17/0259210/the-arctic-is-in-dire-straits-20-years-of-reporting-show?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Australians Install 100,000 Home Battery Systems in 17 Weeks, and They Are Getting Bigger](https://soylentnews.org/article.pl?sid=25/12/16/0718227&from=rss)

* [Scientists Thought Parkinson’s Was in Our Genes. It Might Be in the Water](https://soylentnews.org/article.pl?sid=25/12/13/1625224&from=rss)

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

* [2025-12-17, 18:18:00](https://soylentnews.org/article.pl?sid=25/12/16/0740251&amp;from=rss) - [Norovirus Cases Surging in U.S.](https://soylentnews.org/article.pl?sid=25/12/16/0740251&amp;from=rss)
* [2025-12-17, 18:17:00](https://yro.slashdot.org/story/25/12/17/1817255/fcc-chair-suggests-agency-isnt-independent-word-cut-from-mission-statement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Chair Suggests Agency Isn&apos;t Independent, Word Cut From Mission Statement](https://yro.slashdot.org/story/25/12/17/1817255/fcc-chair-suggests-agency-isnt-independent-word-cut-from-mission-statement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 18:15:38](https://news.ycombinator.com/item?id=46303277) - [How SQLite Is Tested](https://sqlite.org/testing.html)
* [2025-12-17, 18:14:33](https://news.ycombinator.com/item?id=46303260) - [FCC chair suggests agency isn&apos;t independent, word cut from mission statement](https://www.axios.com/2025/12/17/brendan-carr-fcc-independent-senate-testimony-website)
* [2025-12-17, 18:02:12](https://news.ycombinator.com/item?id=46303090) - [Why outcome-billing makes sense for AI Agents](https://www.valmi.io/blog/an-imperative-for-ai-agents-outcome-billing-with-valmi/)
* [2025-12-17, 17:38:12](https://lobste.rs/s/hhoql4/how_do_graphics_drivers_work) - [How do graphics drivers work?](https://timur.hu/blog/2025/how-do-graphics-drivers-work)
* [2025-12-17, 17:38:00](https://science.slashdot.org/story/25/12/17/1738215/how-we-ingest-plastic-chemicals-while-consuming-food?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How We Ingest Plastic Chemicals While Consuming Food](https://science.slashdot.org/story/25/12/17/1738215/how-we-ingest-plastic-chemicals-while-consuming-food?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 17:31:14](https://lobste.rs/s/nesn9g/linux_kernel_rust_code_sees_its_first_cve) - [Linux Kernel Rust Code Sees Its First CVE Vulnerability](https://www.phoronix.com/news/First-Linux-Rust-CVE)
* [2025-12-17, 17:30:02](https://news.ycombinator.com/item?id=46302621) - [Linux Kernel Rust Code Sees Its First CVE Vulnerability](https://www.phoronix.com/news/First-Linux-Rust-CVE)
* [2025-12-17, 17:13:03](https://news.ycombinator.com/item?id=46302337) - [A Safer Container Ecosystem with Docker: Free Docker Hardened Images](https://www.docker.com/blog/docker-hardened-images-for-every-developer/)
* [2025-12-17, 17:08:35](https://news.ycombinator.com/item?id=46302267) - [AWS CEO says replacing junior devs with AI is &apos;one of the dumbest ideas&apos;](https://www.finalroundai.com/blog/aws-ceo-ai-cannot-replace-junior-developers)
* [2025-12-17, 17:00:39](https://news.ycombinator.com/item?id=46302122) - [Flick (YC F25) Is Hiring Founding Engineer to Build Figma for AI Filmmaking](https://www.ycombinator.com/companies/flick/jobs/Tdu6FH6-founding-frontend-engineer)
* [2025-12-17, 16:54:32](https://news.ycombinator.com/item?id=46302010) - [Ford Has Steered Its Former EV Truck and Plant Plans in to a Ditch](https://512pixels.net/2025/12/ford-ev-changes/)
* [2025-12-17, 16:49:00](https://news.slashdot.org/story/25/12/17/1650219/coursera-acquires-udemy-for-930-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Coursera Acquires Udemy For $930 Million](https://news.slashdot.org/story/25/12/17/1650219/coursera-acquires-udemy-for-930-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 16:48:18](https://news.ycombinator.com/item?id=46301921) - [Tell HN: HN was down](https://news.ycombinator.com/item?id=46301921)
* [2025-12-17, 16:44:13](https://news.ycombinator.com/item?id=46301865) - [Launch HN: Kenobi (YC W22) – Personalize your website for every visitor](https://news.ycombinator.com/item?id=46301865)
* [2025-12-17, 16:42:13](https://news.ycombinator.com/item?id=46301851) - [Gemini 3 Flash: frontier intelligence built for speed](https://blog.google/products/gemini/gemini-3-flash/)
* [2025-12-17, 16:12:00](https://tech.slashdot.org/story/25/12/17/1613200/google-sues-alleged-chinese-scam-group-behind-massive-us-text-message-phishing-ring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Sues Alleged Chinese Scam Group Behind Massive US Text Message Phishing Ring](https://tech.slashdot.org/story/25/12/17/1613200/google-sues-alleged-chinese-scam-group-behind-massive-us-text-message-phishing-ring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 16:09:19](https://lobste.rs/s/wgnk1u/what_does_database_for_ssds_look_like) - [What Does a Database for SSDs Look Like?](https://brooker.co.za/blog/2025/12/15/database-for-ssd.html)
* [2025-12-17, 15:45:21](https://lobste.rs/s/b7sjoi/loro_extended_toolkit_for_building_local) - [loro-extended: A toolkit for building local-first applications and multi-agent systems with Loro](https://github.com/schoolAI/loro-extended)
* [2025-12-17, 15:33:24](https://lobste.rs/s/8gnr4x/maintaining_open_source_software_during) - [Maintaining an open source software during Hacktoberfest](https://crocidb.com/post/maintaining-an-oss-during-hacktoberfest/)
* [2025-12-17, 15:21:00](https://tech.slashdot.org/story/25/12/17/1457249/meta-is-considering-charging-business-pages-to-post-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Considering Charging Business Pages To Post Links](https://tech.slashdot.org/story/25/12/17/1457249/meta-is-considering-charging-business-pages-to-post-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 14:53:27](https://lobste.rs/s/lzfzzi/asahi_linux_progress_report_linux_6_18) - [Asahi Linux Progress Report: Linux 6.18](https://asahilinux.org/2025/12/progress-report-6-18/)
* [2025-12-17, 14:45:00](https://entertainment.slashdot.org/story/25/12/17/1445248/warner-bros-discovery-board-rejects-rival-bid-from-paramount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warner Bros Discovery Board Rejects Rival Bid From Paramount](https://entertainment.slashdot.org/story/25/12/17/1445248/warner-bros-discovery-board-rejects-rival-bid-from-paramount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 14:42:31](https://lobste.rs/s/knox4u/how_did_irc_ping_timeouts_end_up_lawsuit) - [How did IRC ping timeouts end up in a lawsuit?](https://mjg59.dreamwidth.org/73777.html)
* [2025-12-17, 14:09:00](https://slashdot.org/story/25/12/17/149226/openai-in-talks-with-amazon-about-investment-that-could-exceed-10-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI in Talks With Amazon About Investment That Could Exceed $10 Billion](https://slashdot.org/story/25/12/17/149226/openai-in-talks-with-amazon-about-investment-that-could-exceed-10-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 13:38:51](https://lobste.rs/s/csp9j1/original_mozilla_dinosaur_logo_artwork) - [The original Mozilla \&quot;Dinosaur\&quot; logo artwork](https://www.jwz.org/blog/2025/12/the-original-mozilla-dinosaur-logo-artwork/)
* [2025-12-17, 13:34:00](https://soylentnews.org/article.pl?sid=25/12/16/0735240&amp;from=rss) - [Verizon Refused to Unlock Man&apos;s iPhone, So He Sued the Carrier and Won](https://soylentnews.org/article.pl?sid=25/12/16/0735240&amp;from=rss)
* [2025-12-17, 13:25:06](https://news.ycombinator.com/item?id=46301696) - [Learning the oldest programming language (2024)](https://uncenter.dev/posts/learning-fortran/)
* [2025-12-17, 13:12:49](https://news.ycombinator.com/item?id=46301585) - [Yep, Passkeys Still Have Problems](https://fy.blackhats.net.au/blog/2025-12-17-yep-passkeys-still-have-problems/)
* [2025-12-17, 13:10:05](https://lobste.rs/s/ammoxm/yep_passkeys_still_have_problems) - [Yep, Passkeys Still Have Problems](https://fy.blackhats.net.au/blog/2025-12-17-yep-passkeys-still-have-problems/)
* [2025-12-17, 13:00:00](https://news.slashdot.org/story/25/12/17/0313251/uber-and-doordash-try-to-halt-nyc-law-that-encourages-tipping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber and DoorDash Try To Halt NYC Law That Encourages Tipping](https://news.slashdot.org/story/25/12/17/0313251/uber-and-doordash-try-to-halt-nyc-law-that-encourages-tipping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 12:45:40](https://news.ycombinator.com/item?id=46301346) - [Coursera to combine with Udemy](https://investor.coursera.com/news/news-details/2025/Coursera-to-Combine-with-Udemy-to-Empower-the-Global-Workforce-with-Skills-for-the-AI-Era/default.aspx)
* [2025-12-17, 12:15:24](https://lobste.rs/s/baxkxn/how_twitter_is_probably_crawling) - [How Twitter is (probably) crawling the Internet for AI](https://kitsunemimi.pw/notes/posts/how-twitter-is-probably-crawling-the-internet-for-ai.html)
* [2025-12-17, 12:06:54](https://lobste.rs/s/2lnu5u/log_level_error_should_mean_something) - [Log level &apos;error&apos; should mean that something needs to be fixed](https://utcc.utoronto.ca/~cks/space/blog/programming/ErrorsShouldRequireFixing)
* [2025-12-17, 12:01:44](https://lobste.rs/s/sfjtvo/wrong_question_about_type_systems) - [The Wrong Question About Type Systems](https://furkan3ayraktar.github.io/blog/the-wrong-question-about-type-systems.html)
* [2025-12-17, 11:27:30](https://lobste.rs/s/lfd78r/short_circuiting_correlated_subqueries) - [Short-Circuiting Correlated Subqueries in SQLite](https://emschwartz.me/short-circuiting-correlated-subqueries-in-sqlite/)
* [2025-12-17, 10:00:00](https://hardware.slashdot.org/story/25/12/17/036250/senators-count-the-shady-ways-data-centers-pass-energy-costs-on-to-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Senators Count the Shady Ways Data Centers Pass Energy Costs On To Americans](https://hardware.slashdot.org/story/25/12/17/036250/senators-count-the-shady-ways-data-centers-pass-energy-costs-on-to-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 09:37:24](https://news.ycombinator.com/item?id=46299934) - [Is Mozilla trying hard to kill itself?](https://infosec.press/brunomiguel/is-mozilla-trying-hard-to-kill-itself)
* [2025-12-17, 09:29:30](https://lobste.rs/s/glwlvx/survey_dynamic_array_structures) - [A Survey of Dynamic Array Structures](https://azmr.uk/dyn/)
* [2025-12-17, 08:49:35](https://lobste.rs/s/igmbgy/keeping_secrets_less_than_two_weeks_ago) - [Keeping secrets, or (less than two weeks ago)](https://kellett.im/a/keeping-secrets)
* [2025-12-17, 08:48:00](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss) - [A Simple Pill Could Replace Injections for Treating Gonorrhea](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss)
* [2025-12-17, 08:45:33](https://lobste.rs/s/x1mn6i/kris_cross_compile_janet_projects_with) - [kris: Cross-compile Janet projects with Zig](https://github.com/pyrmont/kris)
* [2025-12-17, 08:34:00](https://news.ycombinator.com/item?id=46299552) - [AI&apos;s real superpower: consuming, not creating](https://msanroman.io/blog/ai-consumption-paradigm)
* [2025-12-17, 08:05:30](https://news.ycombinator.com/item?id=46299389) - [TLA+ Modeling Tips](http://muratbuffalo.blogspot.com/2025/12/tla-modeling-tips.html)
* [2025-12-17, 07:28:16](https://lobste.rs/s/7jdpgz/qjp_turn_any_json_file_into_quick_tui_menu) - [qjp - turn any json file into a quick TUI menu](https://github.com/plainas/qjp)
* [2025-12-17, 07:00:00](https://news.slashdot.org/story/25/12/17/0259210/the-arctic-is-in-dire-straits-20-years-of-reporting-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Arctic Is in Dire Straits, 20 Years of Reporting Show](https://news.slashdot.org/story/25/12/17/0259210/the-arctic-is-in-dire-straits-20-years-of-reporting-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 06:43:21](https://lobste.rs/s/l5nep0/opus_1_6_released) - [Opus 1.6 Released](https://opus-codec.org/demo/opus-1.6/)
* [2025-12-17, 04:03:00](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss) - [Australians Install 100,000 Home Battery Systems in 17 Weeks, and They Are Getting Bigger](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss)
* [2025-12-17, 03:30:00](https://yro.slashdot.org/story/25/12/17/009254/breach-at-south-koreas-equivalent-of-amazon-exposed-data-of-almost-every-adult?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Breach At South Korea&apos;s Equivalent of Amazon Exposed Data of Almost Every Adult](https://yro.slashdot.org/story/25/12/17/009254/breach-at-south-koreas-equivalent-of-amazon-exposed-data-of-almost-every-adult?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 01:34:04](https://lobste.rs/s/xckds9/how_i_became_spam_vector) - [How I Became a Spam Vector](https://idiallo.com/blog/how-i-became-a-spammer)
* [2025-12-17, 01:30:00](https://tech.slashdot.org/story/25/12/17/003222/eu-moves-to-ease-2035-ban-on-internal-combustion-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Moves To Ease 2035 Ban On Internal Combustion Cars](https://tech.slashdot.org/story/25/12/17/003222/eu-moves-to-ease-2035-ban-on-internal-combustion-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 00:50:00](https://meta.slashdot.org/story/25/12/16/2226215/meta-tolerates-rampant-ad-fraud-from-china-to-safeguard-billions-in-revenue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Tolerates Rampant Ad Fraud From China To Safeguard Billions In Revenue](https://meta.slashdot.org/story/25/12/16/2226215/meta-tolerates-rampant-ad-fraud-from-china-to-safeguard-billions-in-revenue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 00:26:20](https://lobste.rs/s/lgputz/vm_overcommit_memory_2_is_always_right) - [vm.overcommit_memory=2 is always the right setting](https://ariadne.space/2025/12/16/vmovercommitmemory-is-always-the-right.html)
* [2025-12-17, 00:10:00](https://hardware.slashdot.org/story/25/12/16/229209/dual-pcb-linux-computer-with-843-components-designed-by-ai-boots-on-first-attempt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dual-PCB Linux Computer With 843 Components Designed By AI Boots On First Attempt](https://hardware.slashdot.org/story/25/12/16/229209/dual-pcb-linux-computer-with-843-components-designed-by-ai-boots-on-first-attempt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-16, 23:30:00](https://news.slashdot.org/story/25/12/16/2159219/mark-carney-criticised-for-using-british-spellings-in-canadian-documents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Carney Criticised For Using British Spellings In Canadian Documents](https://news.slashdot.org/story/25/12/16/2159219/mark-carney-criticised-for-using-british-spellings-in-canadian-documents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-16, 23:18:00](https://soylentnews.org/article.pl?sid=25/12/15/0110223&amp;from=rss) - [Breaking a 50-Year Law: New Evidence Challenges Fundamental Black Hole Physics](https://soylentnews.org/article.pl?sid=25/12/15/0110223&amp;from=rss)
* [2025-12-16, 22:07:49](https://news.ycombinator.com/item?id=46295268) - [No AI* Here – A Response to Mozilla&apos;s Next Chapter](https://www.waterfox.com/blog/no-ai-here-response-to-mozilla/)
* [2025-12-16, 21:14:49](https://news.ycombinator.com/item?id=46294574) - [AI will make formal verification go mainstream](https://martin.kleppmann.com/2025/12/08/ai-formal-verification.html)
* [2025-12-16, 21:11:40](https://lobste.rs/s/zjq0nl/ty_extremely_fast_python_type_checker) - [ty: An extremely fast Python type checker and language server](https://astral.sh/blog/ty)
* [2025-12-16, 20:52:45](https://news.ycombinator.com/item?id=46294289) - [Announcing the Beta release of ty](https://astral.sh/blog/ty)
* [2025-12-16, 20:05:21](https://lobste.rs/s/wopu8o/no_graphics_api) - [No Graphics API](https://www.sebastianaaltonen.com/blog/no-graphics-api)
* [2025-12-16, 19:20:17](https://news.ycombinator.com/item?id=46293062) - [No Graphics API](https://www.sebastianaaltonen.com/blog/no-graphics-api)
* [2025-12-16, 18:27:00](https://soylentnews.org/article.pl?sid=25/12/15/018209&amp;from=rss) - [New Review Highlights Urgent Need for Worldwide Smell Screening](https://soylentnews.org/article.pl?sid=25/12/15/018209&amp;from=rss)
* [2025-12-16, 18:07:07](https://news.ycombinator.com/item?id=46291941) - [GPT Image 1.5](https://openai.com/index/new-chatgpt-images-is-here/)
* [2025-12-16, 17:12:02](https://news.ycombinator.com/item?id=46291156) - [Pricing Changes for GitHub Actions](https://resources.github.com/actions/2026-pricing-changes-for-github-actions/)
* [2025-12-16, 16:54:19](https://news.ycombinator.com/item?id=46290916) - [alpr.watch](https://alpr.watch/)
* [2025-12-16, 16:36:13](https://lobste.rs/s/1dffuf/file_d_attente_file_based_job_queue_tool) - [File d&apos;attente - file-based job queue tool](https://git.sr.ht/~marcc/filed)
* [2025-12-16, 16:14:06](https://lobste.rs/s/hfnbtt/odin_s_most_misunderstood_feature) - [Odin&apos;s Most Misunderstood Feature: `context`](https://www.gingerbill.org/article/2025/12/15/odins-most-misunderstood-feature-context/)
* [2025-12-16, 13:53:14](https://news.ycombinator.com/item?id=46288491) - [Mozilla appoints new CEO Anthony Enzor-Demeo](https://blog.mozilla.org/en/mozilla/leadership/mozillas-next-chapter-anthony-enzor-demeo-new-ceo/)
* [2025-12-16, 13:45:00](https://soylentnews.org/article.pl?sid=25/12/15/016245&amp;from=rss) - [Kali Linux 2025.4 Ethical Hacking Distro Released With KDE Plasma 6.5, GNOME 49](https://soylentnews.org/article.pl?sid=25/12/15/016245&amp;from=rss)
* [2025-12-16, 09:02:00](https://soylentnews.org/article.pl?sid=25/12/15/014215&amp;from=rss) - [Scientists Discover Early Alzheimer&apos;s Warning Sign Hiding in Routine Brain Scans](https://soylentnews.org/article.pl?sid=25/12/15/014215&amp;from=rss)
* [2025-12-16, 04:15:00](https://soylentnews.org/article.pl?sid=25/12/13/1648208&amp;from=rss) - [U.S. Approves First Device to Treat Depression With Brain Stimulation at Home](https://soylentnews.org/article.pl?sid=25/12/13/1648208&amp;from=rss)
* [2025-12-16, 01:16:12](https://lobste.rs/s/wilmno/i_m_just_having_fun) - [i&apos;m just having fun](https://jyn.dev/i-m-just-having-fun/)
* [2025-12-16, 00:50:41](https://news.ycombinator.com/item?id=46283276) - [Thin desires are eating life](https://www.joanwestenberg.com/thin-desires-are-eating-your-life/)
* [2025-12-15, 23:39:00](https://soylentnews.org/article.pl?sid=25/12/13/1642242&amp;from=rss) - [To Bop or to Sway? the Music Will Tell You](https://soylentnews.org/article.pl?sid=25/12/13/1642242&amp;from=rss)
* [2025-12-15, 19:01:00](https://soylentnews.org/article.pl?sid=25/12/13/1627258&amp;from=rss) - [A Speed Camera for the Universe](https://soylentnews.org/article.pl?sid=25/12/13/1627258&amp;from=rss)
* [2025-12-15, 14:11:00](https://soylentnews.org/article.pl?sid=25/12/13/1625224&amp;from=rss) - [Scientists Thought Parkinson’s Was in Our Genes. It Might Be in the Water](https://soylentnews.org/article.pl?sid=25/12/13/1625224&amp;from=rss)
* [2025-12-15, 09:22:00](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss) - [The State of Open Source Software in 2025](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss)
* [2025-12-15, 04:45:00](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss) - [What Time is It on Mars? NIST Physicists Have the Answer](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss)
* [2025-12-14, 23:59:00](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss) - [System76 Launches First Stable Release of Rust-Based COSMIC Desktop and Pop!_OS 24.04 LTS](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss)
* [2025-12-14, 19:11:00](https://soylentnews.org/article.pl?sid=25/12/13/0439237&amp;from=rss) - [Big Tech Joins Forces With Linux Foundation to Standardize AI Agents](https://soylentnews.org/article.pl?sid=25/12/13/0439237&amp;from=rss)
* [2025-12-14, 15:42:03](https://news.ycombinator.com/item?id=46263821) - [Zmij: Faster floating point double-to-string conversion](https://vitaut.net/posts/2025/faster-dtoa/)
* [2025-12-14, 14:26:00](https://soylentnews.org/article.pl?sid=25/12/13/0429235&amp;from=rss) - [Calibre Now Integrated With AI](https://soylentnews.org/article.pl?sid=25/12/13/0429235&amp;from=rss)
* [2025-12-14, 09:36:00](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss) - [Ultra-Thin Nanomembrane Device Forms Soft, Seamless Interface With Living Tissue](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss)
* [2025-12-14, 04:46:00](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss) - [When It All Comes Crashing Down: The Aftermath of the AI Boom](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss)
* [2025-12-14, 03:17:11](https://news.ycombinator.com/item?id=46260485) - [Modern SID chip substitutes [video]](https://www.youtube.com/watch?v=nooPmXxO6K0)
* [2025-12-14, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss) - [A New Anonymous Phone Carrier Lets You Sign Up With Nothing but a Zip Code](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss)
* [2025-12-13, 19:25:03](https://news.ycombinator.com/item?id=46257147) - [I created a publishing system for step-by-step coding guides in Typst](https://press.knowledge.dev/p/new-150-pages-rust-guide-create-a)
* [2025-12-13, 19:23:00](https://soylentnews.org/article.pl?sid=25/12/11/0919226&amp;from=rss) - [Scientists Finally Uncover Why the World’s Most Common Heart Drug Causes Muscle Pain](https://soylentnews.org/article.pl?sid=25/12/11/0919226&amp;from=rss)
* [2025-12-13, 14:37:00](https://soylentnews.org/article.pl?sid=25/12/11/0916209&amp;from=rss) - [Germany Might Have Just Saved Gas Engines From a European Ban](https://soylentnews.org/article.pl?sid=25/12/11/0916209&amp;from=rss)
* [2025-12-13, 09:52:00](https://soylentnews.org/article.pl?sid=25/12/11/0910257&amp;from=rss) - [Space Shuttle Lessons: Backtracks Can Create Breakthroughs](https://soylentnews.org/article.pl?sid=25/12/11/0910257&amp;from=rss)
* [2025-12-13, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss) - [USA Wants Your Social Media History If You Visit](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss)
* [2025-12-13, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss) - [Man Dies of Rabies After Kidney Transplant From Donor Who Saved Kitten From Skunk](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss)
