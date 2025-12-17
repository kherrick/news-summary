# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Artificial Intelligence

* [How Twitter is (probably) crawling the Internet for AI](https://kitsunemimi.pw/notes/posts/how-twitter-is-probably-crawling-the-internet-for-ai.html) - Exploring Twitter's potential methods of internet data collection for AI.

* [AI's real superpower: consuming, not creating](https://msanroman.io/blog/ai-consumption-paradigm) - A perspective on how AI thrives on consumption rather than originality.

* [Senators Count the Shady Ways Data Centers Pass Energy Costs On To Americans](https://hardware.slashdot.org/story/25/12/17/036250/senators-count-the-shady-ways-data-centers-pass-energy-costs-on-to-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Investigation into energy practices of data centers impacting U.S. consumers.

* [MI6 Chief: We'll Be as Fluent in Python As We Are in Russian](https://developers.slashdot.org/story/25/12/16/1949244/mi6-chief-well-be-as-fluent-in-python-as-we-are-in-russian?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A shift in MI6's strategic focus to include Python programming.

## Nature and Environment

* [The Arctic Is in Dire Straits, 20 Years of Reporting Show](https://news.slashdot.org/story/25/12/17/0259210/the-arctic-is-in-dire-straits-20-years-of-reporting-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Critical analysis on the Arctic’s deteriorating environment.

* [Utah Leaders Hinder Efforts To Develop Solar Energy Supply](https://hardware.slashdot.org/story/25/12/16/1959202/utah-leaders-hinder-efforts-to-develop-solar-energy-supply?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An account of obstacles facing solar energy developments in Utah.

## Programming and Software Development

* [Short-Circuiting Correlated Subqueries in SQLite](https://emschwartz.me/short-circuiting-correlated-subqueries-in-sqlite/) - Optimization techniques for SQLite queries discussed in detail.

* [kris: Cross-compile Janet projects with Zig](https://github.com/pyrmont/kris) - Introducing Kris, a tool for streamlined cross-compilation.

* [ty: An extremely fast Python type checker and language server](https://astral.sh/blog/ty) - A newly launched tool for Python developers to check types efficiently.

## Healthcare and Medicine

* [A Simple Pill Could Replace Injections for Treating Gonorrhea](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss) - Innovations in treatment for gonorrhea through oral medication.

* [Scientists Discover Early Alzheimer's Warning Sign Hiding in Routine Brain Scans](https://soylentnews.org/article.pl?sid=25/12/15/014215&amp;from=rss) - Discovery of early indicators for Alzheimer's disease in brain scans.

## Security and Data Breaches

* [Breach At South Korea's Equivalent of Amazon Exposed Data of Almost Every Adult](https://yro.slashdot.org/story/25/12/17/009254/breach-at-south-koreas-equivalent-of-amazon-exposed-data-of-almost-every-adult?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A data breach compromising most adult citizens' information.

* [Meta Tolerates Rampant Ad Fraud From China To Safeguard Billions In Revenue](https://meta.slashdot.org/story/25/12/16/2226215/meta-tolerates-rampant-ad-fraud-from-china-to-safeguard-billions-in-revenue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An exposé on Meta’s tolerance of ad fraud.

## Scientific Discoveries

* [Breaking a 50-Year Law: New Evidence Challenges Fundamental Black Hole Physics](https://soylentnews.org/article.pl?sid=25/12/15/0110223&amp;from=rss) - Research questioning long-established black hole theories.

* [Scientists Thought Parkinson’s Was in Our Genes. It Might Be in the Water](https://soylentnews.org/article.pl?sid=25/12/13/1625224&amp;from=rss) - New findings on environmental links to Parkinson's disease.

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

* [2025-12-17, 13:00:00](https://news.slashdot.org/story/25/12/17/0313251/uber-and-doordash-try-to-halt-nyc-law-that-encourages-tipping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber and DoorDash Try To Halt NYC Law That Encourages Tipping](https://news.slashdot.org/story/25/12/17/0313251/uber-and-doordash-try-to-halt-nyc-law-that-encourages-tipping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 12:15:24](https://lobste.rs/s/baxkxn/how_twitter_is_probably_crawling) - [How Twitter is (probably) crawling the Internet for AI](https://kitsunemimi.pw/notes/posts/how-twitter-is-probably-crawling-the-internet-for-ai.html)
* [2025-12-17, 12:06:54](https://lobste.rs/s/2lnu5u/log_level_error_should_mean_something) - [Log level &apos;error&apos; should mean that something needs to be fixed](https://utcc.utoronto.ca/~cks/space/blog/programming/ErrorsShouldRequireFixing)
* [2025-12-17, 11:27:30](https://lobste.rs/s/lfd78r/short_circuiting_correlated_subqueries) - [Short-Circuiting Correlated Subqueries in SQLite](https://emschwartz.me/short-circuiting-correlated-subqueries-in-sqlite/)
* [2025-12-17, 10:00:00](https://hardware.slashdot.org/story/25/12/17/036250/senators-count-the-shady-ways-data-centers-pass-energy-costs-on-to-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Senators Count the Shady Ways Data Centers Pass Energy Costs On To Americans](https://hardware.slashdot.org/story/25/12/17/036250/senators-count-the-shady-ways-data-centers-pass-energy-costs-on-to-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 09:54:48](https://news.ycombinator.com/item?id=46300047) - [Show HN: Mephisto – A RAM-only, ad-free disposable email PWA built with React](https://mephistomail.site)
* [2025-12-17, 09:37:24](https://news.ycombinator.com/item?id=46299934) - [Is Mozilla trying hard to kill itself?](https://infosec.press/brunomiguel/is-mozilla-trying-hard-to-kill-itself)
* [2025-12-17, 09:29:30](https://lobste.rs/s/glwlvx/survey_dynamic_array_structures) - [A Survey of Dynamic Array Structures](https://azmr.uk/dyn/)
* [2025-12-17, 08:49:35](https://lobste.rs/s/igmbgy/keeping_secrets_less_than_two_weeks_ago) - [Keeping secrets, or (less than two weeks ago)](https://kellett.im/a/keeping-secrets)
* [2025-12-17, 08:48:00](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss) - [A Simple Pill Could Replace Injections for Treating Gonorrhea](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss)
* [2025-12-17, 08:45:33](https://lobste.rs/s/x1mn6i/kris_cross_compile_janet_projects_with) - [kris: Cross-compile Janet projects with Zig](https://github.com/pyrmont/kris)
* [2025-12-17, 08:34:00](https://news.ycombinator.com/item?id=46299552) - [AI&apos;s real superpower: consuming, not creating](https://msanroman.io/blog/ai-consumption-paradigm)
* [2025-12-17, 08:05:30](https://news.ycombinator.com/item?id=46299389) - [TLA+ Modeling Tips](http://muratbuffalo.blogspot.com/2025/12/tla-modeling-tips.html)
* [2025-12-17, 08:04:02](https://news.ycombinator.com/item?id=46299377) - [US threatens EU digital services market access](https://twitter.com/ustraderep/status/2000990028835508258)
* [2025-12-17, 07:42:09](https://news.ycombinator.com/item?id=46299257) - [P: Formal Modeling and Analysis of Distributed (Event-Driven) Systems](https://github.com/p-org/P)
* [2025-12-17, 07:28:16](https://lobste.rs/s/7jdpgz/qjp_turn_any_json_file_into_quick_tui_menu) - [qjp - turn any json file into a quick TUI menu](https://github.com/plainas/qjp)
* [2025-12-17, 07:00:16](https://news.ycombinator.com/item?id=46299022) - [Subsets (YC S23) is hiring engineers in Copenhagen, Denmark](https://www.workatastartup.com/companies/subsets)
* [2025-12-17, 07:00:00](https://news.slashdot.org/story/25/12/17/0259210/the-arctic-is-in-dire-straits-20-years-of-reporting-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Arctic Is in Dire Straits, 20 Years of Reporting Show](https://news.slashdot.org/story/25/12/17/0259210/the-arctic-is-in-dire-straits-20-years-of-reporting-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 06:43:21](https://lobste.rs/s/l5nep0/opus_1_6_released) - [Opus 1.6 Released](https://opus-codec.org/demo/opus-1.6/)
* [2025-12-17, 04:03:00](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss) - [Australians Install 100,000 Home Battery Systems in 17 Weeks, and They Are Getting Bigger](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss)
* [2025-12-17, 03:35:27](https://lobste.rs/s/q8w2tf/adventures_land_language_servers) - [Adventures in the land of Language Servers](https://speakerdeck.com/kubukoz/adventures-in-the-land-of-language-servers)
* [2025-12-17, 03:30:00](https://yro.slashdot.org/story/25/12/17/009254/breach-at-south-koreas-equivalent-of-amazon-exposed-data-of-almost-every-adult?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Breach At South Korea&apos;s Equivalent of Amazon Exposed Data of Almost Every Adult](https://yro.slashdot.org/story/25/12/17/009254/breach-at-south-koreas-equivalent-of-amazon-exposed-data-of-almost-every-adult?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 01:34:04](https://lobste.rs/s/xckds9/how_i_became_spam_vector) - [How I Became a Spam Vector](https://idiallo.com/blog/how-i-became-a-spammer)
* [2025-12-17, 01:30:00](https://tech.slashdot.org/story/25/12/17/003222/eu-moves-to-ease-2035-ban-on-internal-combustion-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Moves To Ease 2035 Ban On Internal Combustion Cars](https://tech.slashdot.org/story/25/12/17/003222/eu-moves-to-ease-2035-ban-on-internal-combustion-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 01:26:14](https://news.ycombinator.com/item?id=46297127) - [Introduction to Software Development Tooling (2024)](https://bernsteinbear.com/isdt/)
* [2025-12-17, 00:50:00](https://meta.slashdot.org/story/25/12/16/2226215/meta-tolerates-rampant-ad-fraud-from-china-to-safeguard-billions-in-revenue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Tolerates Rampant Ad Fraud From China To Safeguard Billions In Revenue](https://meta.slashdot.org/story/25/12/16/2226215/meta-tolerates-rampant-ad-fraud-from-china-to-safeguard-billions-in-revenue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 00:26:20](https://lobste.rs/s/lgputz/vm_overcommit_memory_2_is_always_right) - [vm.overcommit_memory=2 is always the right setting](https://ariadne.space/2025/12/16/vmovercommitmemory-is-always-the-right.html)
* [2025-12-17, 00:10:00](https://hardware.slashdot.org/story/25/12/16/229209/dual-pcb-linux-computer-with-843-components-designed-by-ai-boots-on-first-attempt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dual-PCB Linux Computer With 843 Components Designed By AI Boots On First Attempt](https://hardware.slashdot.org/story/25/12/16/229209/dual-pcb-linux-computer-with-843-components-designed-by-ai-boots-on-first-attempt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-16, 23:30:00](https://news.slashdot.org/story/25/12/16/2159219/mark-carney-criticised-for-using-british-spellings-in-canadian-documents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Carney Criticised For Using British Spellings In Canadian Documents](https://news.slashdot.org/story/25/12/16/2159219/mark-carney-criticised-for-using-british-spellings-in-canadian-documents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-16, 23:18:00](https://soylentnews.org/article.pl?sid=25/12/15/0110223&amp;from=rss) - [Breaking a 50-Year Law: New Evidence Challenges Fundamental Black Hole Physics](https://soylentnews.org/article.pl?sid=25/12/15/0110223&amp;from=rss)
* [2025-12-16, 22:50:00](https://news.slashdot.org/story/25/12/16/2153226/intel-quietly-discontinues-its-open-source-user-space-gaudi-driver-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Quietly Discontinues Its Open-Source User-Space Gaudi Driver Code](https://news.slashdot.org/story/25/12/16/2153226/intel-quietly-discontinues-its-open-source-user-space-gaudi-driver-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-16, 22:48:56](https://news.ycombinator.com/item?id=46295771) - [I ported JustHTML from Python to JavaScript with Codex CLI and GPT-5.2 in hours](https://simonwillison.net/2025/Dec/15/porting-justhtml/)
* [2025-12-16, 22:10:00](https://games.slashdot.org/story/25/12/16/2143202/reporter-suggests-half-life-3-will-be-a-steam-machine-launch-title?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reporter Suggests Half-Life 3 Will Be a Steam Machine Launch Title](https://games.slashdot.org/story/25/12/16/2143202/reporter-suggests-half-life-3-will-be-a-steam-machine-launch-title?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-16, 22:07:49](https://news.ycombinator.com/item?id=46295268) - [No AI* Here – A Response to Mozilla&apos;s Next Chapter](https://www.waterfox.com/blog/no-ai-here-response-to-mozilla/)
* [2025-12-16, 21:30:00](https://tech.slashdot.org/story/25/12/16/2135226/volkswagen-to-end-production-at-german-plant-a-first-in-company-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Volkswagen To End Production At German Plant, a First In Company History](https://tech.slashdot.org/story/25/12/16/2135226/volkswagen-to-end-production-at-german-plant-a-first-in-company-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-16, 21:14:49](https://news.ycombinator.com/item?id=46294574) - [AI will make formal verification go mainstream](https://martin.kleppmann.com/2025/12/08/ai-formal-verification.html)
* [2025-12-16, 21:11:40](https://lobste.rs/s/zjq0nl/ty_extremely_fast_python_type_checker) - [ty: An extremely fast Python type checker and language server](https://astral.sh/blog/ty)
* [2025-12-16, 20:52:45](https://news.ycombinator.com/item?id=46294289) - [Announcing the Beta release of ty](https://astral.sh/blog/ty)
* [2025-12-16, 20:50:00](https://hardware.slashdot.org/story/25/12/16/1959202/utah-leaders-hinder-efforts-to-develop-solar-energy-supply?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Utah Leaders Hinder Efforts To Develop Solar Energy Supply](https://hardware.slashdot.org/story/25/12/16/1959202/utah-leaders-hinder-efforts-to-develop-solar-energy-supply?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-16, 20:10:00](https://developers.slashdot.org/story/25/12/16/1949244/mi6-chief-well-be-as-fluent-in-python-as-we-are-in-russian?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MI6 Chief: We&apos;ll Be as Fluent in Python As We Are in Russian](https://developers.slashdot.org/story/25/12/16/1949244/mi6-chief-well-be-as-fluent-in-python-as-we-are-in-russian?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-16, 20:05:21](https://lobste.rs/s/wopu8o/no_graphics_api) - [No Graphics API](https://www.sebastianaaltonen.com/blog/no-graphics-api)
* [2025-12-16, 19:30:00](https://tech.slashdot.org/story/25/12/16/198220/racks-of-ai-chips-are-too-damn-heavy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Racks of AI Chips Are Too Damn Heavy](https://tech.slashdot.org/story/25/12/16/198220/racks-of-ai-chips-are-too-damn-heavy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-16, 19:20:17](https://news.ycombinator.com/item?id=46293062) - [No Graphics API](https://www.sebastianaaltonen.com/blog/no-graphics-api)
* [2025-12-16, 18:50:00](https://news.slashdot.org/story/25/12/16/1850216/us-threatens-penalties-against-european-tech-firms-amid-regulatory-fight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Threatens Penalties Against European Tech Firms Amid Regulatory Fight](https://news.slashdot.org/story/25/12/16/1850216/us-threatens-penalties-against-european-tech-firms-amid-regulatory-fight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-16, 18:27:00](https://soylentnews.org/article.pl?sid=25/12/15/018209&amp;from=rss) - [New Review Highlights Urgent Need for Worldwide Smell Screening](https://soylentnews.org/article.pl?sid=25/12/15/018209&amp;from=rss)
* [2025-12-16, 18:07:07](https://news.ycombinator.com/item?id=46291941) - [GPT Image 1.5](https://openai.com/index/new-chatgpt-images-is-here/)
* [2025-12-16, 17:12:02](https://news.ycombinator.com/item?id=46291156) - [Pricing Changes for GitHub Actions](https://resources.github.com/actions/2026-pricing-changes-for-github-actions/)
* [2025-12-16, 16:54:19](https://news.ycombinator.com/item?id=46290916) - [alpr.watch](https://alpr.watch/)
* [2025-12-16, 16:36:13](https://lobste.rs/s/1dffuf/file_d_attente_file_based_job_queue_tool) - [File d&apos;attente - file-based job queue tool](https://git.sr.ht/~marcc/filed)
* [2025-12-16, 16:31:01](https://lobste.rs/s/csqubi/gh_actions_lockfile_generate_verify) - [gh-actions-lockfile: generate and verify lockfiles for GitHub Actions](https://gh-actions-lockfile.net)
* [2025-12-16, 16:26:17](https://lobste.rs/s/bgibyk/future_jetbrains_fleet) - [The Future of [JetBrains] Fleet](https://blog.jetbrains.com/fleet/2025/12/the-future-of-fleet/)
* [2025-12-16, 16:14:06](https://lobste.rs/s/hfnbtt/odin_s_most_misunderstood_feature) - [Odin&apos;s Most Misunderstood Feature: `context`](https://www.gingerbill.org/article/2025/12/15/odins-most-misunderstood-feature-context/)
* [2025-12-16, 16:02:29](https://lobste.rs/s/tdux88/maybe_consider_putting_cutlass_your_cuda) - [Maybe consider putting cutlass in your CUDA/Triton kernels](https://maknee.github.io/blog/2025/Maybe-Consider-Putting-Cutlass-In-Your-CUDA-Kernels/)
* [2025-12-16, 14:30:47](https://lobste.rs/s/lvp0jr/rust_gcc_backend_why_how) - [Rust GCC backend: Why and how](https://blog.guillaume-gomez.fr/articles/2025-12-15+Rust+GCC+backend%3A+Why+and+how)
* [2025-12-16, 13:53:14](https://news.ycombinator.com/item?id=46288491) - [Mozilla appoints new CEO Anthony Enzor-Demeo](https://blog.mozilla.org/en/mozilla/leadership/mozillas-next-chapter-anthony-enzor-demeo-new-ceo/)
* [2025-12-16, 13:46:57](https://news.ycombinator.com/item?id=46288415) - [40 percent of fMRI signals do not correspond to actual brain activity](https://www.tum.de/en/news-and-events/all-news/press-releases/details/40-percent-of-mri-signals-do-not-correspond-to-actual-brain-activity)
* [2025-12-16, 13:45:00](https://soylentnews.org/article.pl?sid=25/12/15/016245&amp;from=rss) - [Kali Linux 2025.4 Ethical Hacking Distro Released With KDE Plasma 6.5, GNOME 49](https://soylentnews.org/article.pl?sid=25/12/15/016245&amp;from=rss)
* [2025-12-16, 13:39:30](https://lobste.rs/s/w5j6io/announcing_vojtux_accessible_linux) - [Announcing Vojtux - Accessible Linux distro which is almost pure Fedora](https://www.freelists.org/post/orca/Announcing-Vojtux-Accessible-Linux-distro-which-is-almost-pure-Fedora)
* [2025-12-16, 13:07:14](https://news.ycombinator.com/item?id=46288024) - [Sega Channel: VGHF Recovers over 100 Sega Channel ROMs (and More)](https://gamehistory.org/segachannel/)
* [2025-12-16, 09:02:00](https://soylentnews.org/article.pl?sid=25/12/15/014215&amp;from=rss) - [Scientists Discover Early Alzheimer&apos;s Warning Sign Hiding in Routine Brain Scans](https://soylentnews.org/article.pl?sid=25/12/15/014215&amp;from=rss)
* [2025-12-16, 09:00:05](https://lobste.rs/s/jxawjl/november_servo_monthly_releases_context) - [November in Servo: monthly releases, context menus, parallel CSS parsing, and more](https://servo.org/blog/2025/12/15/november-in-servo/)
* [2025-12-16, 08:54:58](https://news.ycombinator.com/item?id=46286292) - [Japan to revise romanization rules for first time in 70 years](https://www.japantimes.co.jp/news/2025/08/21/japan/panel-hepburn-style-romanization/)
* [2025-12-16, 08:36:11](https://lobste.rs/s/hkkb61/global_known_hosts_for_ssh_services) - [global known_hosts for ssh services](https://knownhosts.net/)
* [2025-12-16, 05:11:33](https://lobste.rs/s/q3j88a/writing_blatant_telegram_clone_using_qt) - [Writing a blatant Telegram clone using Qt, QML and Rust. And C++](https://kemble.net/blog/provoke/)
* [2025-12-16, 04:15:00](https://soylentnews.org/article.pl?sid=25/12/13/1648208&amp;from=rss) - [U.S. Approves First Device to Treat Depression With Brain Stimulation at Home](https://soylentnews.org/article.pl?sid=25/12/13/1648208&amp;from=rss)
* [2025-12-16, 01:16:12](https://lobste.rs/s/wilmno/i_m_just_having_fun) - [i&apos;m just having fun](https://jyn.dev/i-m-just-having-fun/)
* [2025-12-16, 00:50:41](https://news.ycombinator.com/item?id=46283276) - [Thin desires are eating life](https://www.joanwestenberg.com/thin-desires-are-eating-your-life/)
* [2025-12-16, 00:06:49](https://news.ycombinator.com/item?id=46282874) - [The World Happiness Report is beset with methodological problems](https://yaschamounk.substack.com/p/the-world-happiness-report-is-a-sham)
* [2025-12-15, 23:39:00](https://soylentnews.org/article.pl?sid=25/12/13/1642242&amp;from=rss) - [To Bop or to Sway? the Music Will Tell You](https://soylentnews.org/article.pl?sid=25/12/13/1642242&amp;from=rss)
* [2025-12-15, 20:17:50](https://lobste.rs/s/gtpvpi/super_secure_maga_themed_messaging_app) - [\&quot;Super secure\&quot; MAGA-themed messaging app leaks everyone&apos;s phone number](https://ericdaigle.ca/posts/super-secure-maga-messaging-app-leaks-everyones-phone-number/)
* [2025-12-15, 19:01:00](https://soylentnews.org/article.pl?sid=25/12/13/1627258&amp;from=rss) - [A Speed Camera for the Universe](https://soylentnews.org/article.pl?sid=25/12/13/1627258&amp;from=rss)
* [2025-12-15, 14:39:49](https://news.ycombinator.com/item?id=46275111) - [Nvidia Nemotron 3 Family of Models](https://research.nvidia.com/labs/nemotron/Nemotron-3/)
* [2025-12-15, 14:11:00](https://soylentnews.org/article.pl?sid=25/12/13/1625224&amp;from=rss) - [Scientists Thought Parkinson’s Was in Our Genes. It Might Be in the Water](https://soylentnews.org/article.pl?sid=25/12/13/1625224&amp;from=rss)
* [2025-12-15, 09:22:00](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss) - [The State of Open Source Software in 2025](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss)
* [2025-12-15, 04:45:00](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss) - [What Time is It on Mars? NIST Physicists Have the Answer](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss)
* [2025-12-14, 23:59:00](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss) - [System76 Launches First Stable Release of Rust-Based COSMIC Desktop and Pop!_OS 24.04 LTS](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss)
* [2025-12-14, 19:11:00](https://soylentnews.org/article.pl?sid=25/12/13/0439237&amp;from=rss) - [Big Tech Joins Forces With Linux Foundation to Standardize AI Agents](https://soylentnews.org/article.pl?sid=25/12/13/0439237&amp;from=rss)
* [2025-12-14, 14:26:00](https://soylentnews.org/article.pl?sid=25/12/13/0429235&amp;from=rss) - [Calibre Now Integrated With AI](https://soylentnews.org/article.pl?sid=25/12/13/0429235&amp;from=rss)
* [2025-12-14, 09:36:00](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss) - [Ultra-Thin Nanomembrane Device Forms Soft, Seamless Interface With Living Tissue](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss)
* [2025-12-14, 04:46:00](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss) - [When It All Comes Crashing Down: The Aftermath of the AI Boom](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss)
* [2025-12-14, 03:17:11](https://news.ycombinator.com/item?id=46260485) - [Modern SID chip substitutes [video]](https://www.youtube.com/watch?v=nooPmXxO6K0)
* [2025-12-14, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss) - [A New Anonymous Phone Carrier Lets You Sign Up With Nothing but a Zip Code](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss)
* [2025-12-13, 19:23:00](https://soylentnews.org/article.pl?sid=25/12/11/0919226&amp;from=rss) - [Scientists Finally Uncover Why the World’s Most Common Heart Drug Causes Muscle Pain](https://soylentnews.org/article.pl?sid=25/12/11/0919226&amp;from=rss)
* [2025-12-13, 16:30:01](https://news.ycombinator.com/item?id=46255746) - [Playing Santa changed Bob Rutan profoundly](https://www.esquire.com/lifestyle/a69597294/santaland-bob-rutan/)
* [2025-12-13, 14:51:43](https://news.ycombinator.com/item?id=46254909) - [Annual Production of 1/72 (22mm) scale plastic soldiers, 1958-2025](https://plasticsoldierreview.com/ShowFeature.aspx?id=27)
* [2025-12-13, 14:37:00](https://soylentnews.org/article.pl?sid=25/12/11/0916209&amp;from=rss) - [Germany Might Have Just Saved Gas Engines From a European Ban](https://soylentnews.org/article.pl?sid=25/12/11/0916209&amp;from=rss)
* [2025-12-13, 09:52:00](https://soylentnews.org/article.pl?sid=25/12/11/0910257&amp;from=rss) - [Space Shuttle Lessons: Backtracks Can Create Breakthroughs](https://soylentnews.org/article.pl?sid=25/12/11/0910257&amp;from=rss)
* [2025-12-13, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss) - [USA Wants Your Social Media History If You Visit](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss)
* [2025-12-13, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss) - [Man Dies of Rabies After Kidney Transplant From Donor Who Saved Kitten From Skunk](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss)
