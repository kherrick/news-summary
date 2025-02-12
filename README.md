# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software

* [Are efficiency and horizontal scalability at odds?](https://buttondown.com/hillelwayne/archive/are-efficiency-and-horizontal-scalability-at-odds/) ([Comments](https://news.ycombinator.com/item?id=43028200))

* [Do you use a debugger?](https://www.sandordargo.com/blog/2025/02/12/do-you-use-a-debugger) ([Comments](https://lobste.rs/s/quhtak/do_you_use_debugger))

* [Rust for Linux](https://fosdem.org/2025/schedule/event/fosdem-2025-6507-rust-for-linux/) ([Comments](https://lobste.rs/s/coao0j/rust_for_linux))

* [PgAssistant: OSS tool to help devs understand and optimize PG performance](https://github.com/nexsol-technologies/pgassistant) ([Comments](https://news.ycombinator.com/item?id=43026036))

* [ouch: Painless compression and decompression in the terminal](https://github.com/ouch-org/ouch) ([Comments](https://lobste.rs/s/qtudg1/ouch_painless_compression))

## Artificial Intelligence and Machine Learning

* [Google Will Use Machine Learning To Estimate a User's Age](https://tech.slashdot.org/story/25/02/12/1734206/google-will-use-machine-learning-to-estimate-a-users-age?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43027335))

* [US and UK refuse to sign AI safety declaration at summit](https://arstechnica.com/ai/2025/02/us-and-uk-refuse-to-sign-ai-safety-declaration-at-summit/) ([Comments](https://news.ycombinator.com/item?id=43023554))

* [New Hack Uses Prompt Injection To Corrupt Gemini's Long-Term Memory](https://it.slashdot.org/story/25/02/12/0011205/new-hack-uses-prompt-injection-to-corrupt-geminis-long-term-memory?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://lobste.rs/s/yxlisx/llm_sort_sort_input_lines_semantically))

* [Ex-Google Chief Warns West To Focus On Open-Source AI in Competition With China](https://tech.slashdot.org/story/25/02/12/1345256/ex-google-chief-warns-west-to-focus-on-open-source-ai-in-competition-with-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://lobste.rs/s/vagos/llm_sort_sort_input_lines_semantically))

## Data Science and Visualization

* [Smuggling arbitrary data through an emoji](https://paulbutler.org/2025/smuggling-arbitrary-data-through-an-emoji/) ([Comments](https://news.ycombinator.com/item?id=43023508))

* [Visualizing Data Is an Art – We Should Treat It Like One](https://perthirtysix.com/visualizing-data-is-an-art) ([Comments](https://news.ycombinator.com/item?id=43025645))

* [Undergraduate Upends a 40-Year-Old Data Science Conjecture](https://soylentnews.org/article.pl?sid=25/02/11/1210226&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/02/11/1210226&from=rss))

## Science and Exploration

* [Record-breaking neutrino is most energetic ever detected](https://www.nature.com/articles/d41586-025-00444-1) ([Comments](https://news.ycombinator.com/item?id=43027150))

* [Mysterious Radiation Belts Detected Around Earth After Epic Solar Storm](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss))

* [NASA Scientists Want to Solve a Mystery: Why Did Life "Turn Left?"](https://soylentnews.org/article.pl?sid=25/02/08/1511237&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/02/08/1511237&from=rss))

## Cybersecurity and Online Risks

* [Delivering Malware Through Abandoned Amazon S3 Buckets](https://www.schneier.com/blog/archives/2025/02/delivering-malware-through-abandoned-amazon-s3-buckets.html) ([Comments](https://lobste.rs/s/9ubmfl/delivering_malware_through_abandoned))

* [Leaking the email of any YouTube user for $10,000](https://brutecat.com/articles/leaking-youtube-emails) ([Comments](https://news.ycombinator.com/item?id=43024221))

* [Google Fixes Flaw That Could Unmask YouTube Users' Email Addresses](https://tech.slashdot.org/story/25/02/12/1443251/google-fixes-flaw-that-could-unmask-youtube-users-email-addresses?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://tech.slashdot.org/story/25/02/12/1443251/google-fixes-flaw-that-could-unmask-youtube-users-email-addresses))

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

* [2025-02-12, 18:27:41](https://news.ycombinator.com/item?id=43028200) - [Are efficiency and horizontal scalability at odds?](https://buttondown.com/hillelwayne/archive/are-efficiency-and-horizontal-scalability-at-odds/)
* [2025-02-12, 18:27:19](https://lobste.rs/s/nz0imd/iteration_one_language_then_all_others) - [Iteration in one language, then all the others (2016)](https://eev.ee/blog/2016/11/18/iteration-in-one-language-then-all-the-others/)
* [2025-02-12, 18:25:55](https://lobste.rs/s/5akiq3/are_efficiency_horizontal_scalability) - [Are Efficiency and Horizontal Scalability at odds?](https://buttondown.com/hillelwayne/archive/are-efficiency-and-horizontal-scalability-at-odds/)
* [2025-02-12, 18:10:00](https://slashdot.org/story/25/02/12/1742246/opendoor-cuts-jobs-in-india-shifts-technical-hiring-to-bay-area-and-krakow?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Opendoor Cuts Jobs in India, Shifts Technical Hiring To Bay Area and Krakow](https://slashdot.org/story/25/02/12/1742246/opendoor-cuts-jobs-in-india-shifts-technical-hiring-to-bay-area-and-krakow?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-12, 18:04:05](https://lobste.rs/s/actm9b/your_network_your_rules_take_charge_with) - [Your Network, Your Rules: Take Charge With Own DNS](https://dzone.com/articles/private-dns-nameserver)
* [2025-02-12, 18:01:50](https://lobste.rs/s/quhtak/do_you_use_debugger) - [Do you use a debugger?](https://www.sandordargo.com/blog/2025/02/12/do-you-use-a-debugger)
* [2025-02-12, 17:33:00](https://tech.slashdot.org/story/25/02/12/1734206/google-will-use-machine-learning-to-estimate-a-users-age?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Will Use Machine Learning To Estimate a User's Age](https://tech.slashdot.org/story/25/02/12/1734206/google-will-use-machine-learning-to-estimate-a-users-age?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-12, 17:15:03](https://lobste.rs/s/rqptfo/skip_reactive_framework_code) - [Skip: A reactive framework to code declaratively and compute continuously](https://skiplabs.io/)
* [2025-02-12, 17:11:25](https://news.ycombinator.com/item?id=43027335) - [Show HN: Game Bub – open-source FPGA retro emulation handheld](https://eli.lipsitz.net/posts/introducing-gamebub/)
* [2025-02-12, 17:04:22](https://news.ycombinator.com/item?id=43027266) - [It's Time to Rethink 6G](https://spectrum.ieee.org/5g-bandwidth)
* [2025-02-12, 17:00:48](https://news.ycombinator.com/item?id=43027230) - [Artie (YC S23) Is Hiring Business Operations](https://www.ycombinator.com/companies/artie/jobs/CM1sVks-business-operations)
* [2025-02-12, 16:52:57](https://news.ycombinator.com/item?id=43027150) - [Record-breaking neutrino is most energetic ever detected](https://www.nature.com/articles/d41586-025-00444-1)
* [2025-02-12, 16:50:00](https://slashdot.org/story/25/02/12/1626227/tech-leaders-hold-back-on-ai-agents-despite-vendor-push-survey-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Tech Leaders Hold Back on AI Agents Despite Vendor Push, Survey Shows](https://slashdot.org/story/25/02/12/1626227/tech-leaders-hold-back-on-ai-agents-despite-vendor-push-survey-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-12, 16:43:00](https://soylentnews.org/article.pl?sid=25/02/11/1216252&from=rss) - [MP Materials Starts Producing Neodymium Magnets in the US](https://soylentnews.org/article.pl?sid=25/02/11/1216252&from=rss)
* [2025-02-12, 16:32:37](https://news.ycombinator.com/item?id=43026934) - [How Nissan and Honda's $60B merger talks collapsed](https://www.reuters.com/markets/deals/inside-collapse-nissan-hondas-60-billion-mega-deal-2025-02-12/)
* [2025-02-12, 16:31:04](https://news.ycombinator.com/item?id=43026920) - [The Prophet of Parking: A eulogy for the great Donald Shoup](https://www.worksinprogress.news/p/the-prophet-of-parking)
* [2025-02-12, 16:05:00](https://science.slashdot.org/story/25/02/12/162259/childrens-arithmetic-skills-do-not-transfer-between-applied-and-academic-mathematics?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Children's Arithmetic Skills Do Not Transfer Between Applied and Academic Mathematics](https://science.slashdot.org/story/25/02/12/162259/childrens-arithmetic-skills-do-not-transfer-between-applied-and-academic-mathematics?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-12, 15:55:20](https://news.ycombinator.com/item?id=43026590) - [Most-Watched Software Engineering Talks of 2024](https://www.techtalksweekly.io/p/100-most-watched-software-engineering)
* [2025-02-12, 15:22:00](https://apple.slashdot.org/story/25/02/12/1522245/apple-explores-robotics-push-for-smart-home-market-analyst-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Explores Robotics Push For Smart Home Market, Analyst Says](https://apple.slashdot.org/story/25/02/12/1522245/apple-explores-robotics-push-for-smart-home-market-analyst-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-12, 15:01:40](https://news.ycombinator.com/item?id=43026036) - [PgAssistant: OSS tool to help devs understand and optimize PG performance](https://github.com/nexsol-technologies/pgassistant)
* [2025-02-12, 14:58:34](https://lobste.rs/s/cuakjw/survey_every_iterator_variant) - [A survey of every iterator variant](https://blog.yoshuawuyts.com/a-survey-of-every-iterator-variant)
* [2025-02-12, 14:43:00](https://tech.slashdot.org/story/25/02/12/1443251/google-fixes-flaw-that-could-unmask-youtube-users-email-addresses?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Fixes Flaw That Could Unmask YouTube Users' Email Addresses](https://tech.slashdot.org/story/25/02/12/1443251/google-fixes-flaw-that-could-unmask-youtube-users-email-addresses?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-12, 14:38:16](https://lobste.rs/s/9ubmfl/delivering_malware_through_abandoned) - [Delivering Malware Through Abandoned Amazon S3 Buckets](https://www.schneier.com/blog/archives/2025/02/delivering-malware-through-abandoned-amazon-s3-buckets.html)
* [2025-02-12, 14:17:48](https://news.ycombinator.com/item?id=43025645) - [Visualizing Data Is an Art – We Should Treat It Like One](https://perthirtysix.com/visualizing-data-is-an-art)
* [2025-02-12, 14:04:38](https://lobste.rs/s/qtudg1/ouch_painless_compression) - [ouch: Painless compression and decompression in the terminal](https://github.com/ouch-org/ouch)
* [2025-02-12, 14:00:00](https://tech.slashdot.org/story/25/02/12/1345256/ex-google-chief-warns-west-to-focus-on-open-source-ai-in-competition-with-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ex-Google Chief Warns West To Focus On Open-Source AI in Competition With China](https://tech.slashdot.org/story/25/02/12/1345256/ex-google-chief-warns-west-to-focus-on-open-source-ai-in-competition-with-china?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-12, 13:00:00](https://hardware.slashdot.org/story/25/02/12/0052219/how-3d-printed-parts-changed-the-nascar-cup-series?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [How 3D-Printed Parts Changed the NASCAR Cup Series](https://hardware.slashdot.org/story/25/02/12/0052219/how-3d-printed-parts-changed-the-nascar-cup-series?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-12, 12:58:13](https://news.ycombinator.com/item?id=43024961) - [DeaDBeeF: The Ultimate Music Player](https://deadbeef.sourceforge.io/)
* [2025-02-12, 12:11:33](https://news.ycombinator.com/item?id=43024540) - [Vanishing Culture: Punch Card Knitting](https://blog.archive.org/2025/02/12/vanishing-culture-punch-card-knitting/)
* [2025-02-12, 11:59:00](https://soylentnews.org/article.pl?sid=25/02/11/1210226&from=rss) - [Undergraduate Upends a 40-Year-Old Data Science Conjecture](https://soylentnews.org/article.pl?sid=25/02/11/1210226&from=rss)
* [2025-02-12, 11:19:42](https://news.ycombinator.com/item?id=43024221) - [Leaking the email of any YouTube user for $10,000](https://brutecat.com/articles/leaking-youtube-emails)
* [2025-02-12, 11:11:38](https://news.ycombinator.com/item?id=43024173) - [League of Legends data scraping the hard and tedious way for fun](https://maknee.github.io/blog/2025/League-Data-Scraping/)
* [2025-02-12, 11:11:22](https://lobste.rs/s/umevag/data_scraping_reverse_engineering) - [Data scraping and reverse engineering League of Legends replays](https://maknee.github.io/blog/2025/League-Data-Scraping/)
* [2025-02-12, 10:33:54](https://lobste.rs/s/563zjp/how_does_linux_machine_connect_internet) - [How does a Linux machine connect to the internet, really?](https://pjg1.site/linux-internet-from-scratch)
* [2025-02-12, 10:00:00](https://yro.slashdot.org/story/25/02/12/0020213/man-who-hijacked-secs-x-account-to-pump-bitcoin-faces-up-to-5-years-in-prison?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Man Who Hijacked SEC's X Account To Pump Bitcoin Faces Up To 5 Years In Prison](https://yro.slashdot.org/story/25/02/12/0020213/man-who-hijacked-secs-x-account-to-pump-bitcoin-faces-up-to-5-years-in-prison?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-12, 09:45:28](https://lobste.rs/s/mkquvs/text_crdts_from_scratch_code) - [Text CRDTs from scratch, in code](https://www.youtube.com/watch?v=_lQ2Q4Kzi1I)
* [2025-02-12, 09:43:48](https://news.ycombinator.com/item?id=43023634) - [Tiny Pointers](https://arxiv.org/abs/2111.12800)
* [2025-02-12, 09:33:29](https://news.ycombinator.com/item?id=43023554) - [US and UK refuse to sign AI safety declaration at summit](https://arstechnica.com/ai/2025/02/us-and-uk-refuse-to-sign-ai-safety-declaration-at-summit/)
* [2025-02-12, 09:24:08](https://news.ycombinator.com/item?id=43023508) - [Smuggling arbitrary data through an emoji](https://paulbutler.org/2025/smuggling-arbitrary-data-through-an-emoji/)
* [2025-02-12, 09:17:02](https://news.ycombinator.com/item?id=43023464) - [Show HN: Mikey – No bot meeting notetaker for Windows](https://github.com/hotrod462/Mikey)
* [2025-02-12, 08:39:16](https://lobste.rs/s/coao0j/rust_for_linux) - [Rust for Linux](https://fosdem.org/2025/schedule/event/fosdem-2025-6507-rust-for-linux/)
* [2025-02-12, 08:22:27](https://news.ycombinator.com/item?id=43023101) - [Intensional Joy (a concatenative account of internal structure)](https://pithlessly.github.io/intensionaljoy.html)
* [2025-02-12, 08:11:51](https://lobste.rs/s/qrd1bp/thomson_reuters_wins_early_court_battle) - [Thomson Reuters wins an early court battle over AI, copyright, and fair use](https://www.theverge.com/news/610721/thomson-reuters-ross-intelligence-ai-copyright-infringement)
* [2025-02-12, 07:12:00](https://soylentnews.org/article.pl?sid=25/02/11/127212&from=rss) - [Handful of Users Claim New Nvidia GPUs Are Melting Power Cables Again](https://soylentnews.org/article.pl?sid=25/02/11/127212&from=rss)
* [2025-02-12, 07:00:00](https://entertainment.slashdot.org/story/25/02/12/0040242/the-mystery-behind-the-best-ufo-picture-ever-seen?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Mystery Behind the Best UFO Picture Ever Seen](https://entertainment.slashdot.org/story/25/02/12/0040242/the-mystery-behind-the-best-ufo-picture-ever-seen?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-12, 06:17:06](https://lobste.rs/s/2rkupg/intensional_joy_concatenative_account) - [Intensional Joy (a concatenative account of internal structure)](https://pithlessly.github.io/intensionaljoy.html)
* [2025-02-12, 04:27:47](https://lobste.rs/s/pk8rmi/hotdog_x11_window_manager_with_windows_3_1) - [HOTDOG: X11 Window Manager with Windows 3.1 Hot Dog Stand, Mac Classic and Aqua UI](https://github.com/arthurchoung/HOTDOG)
* [2025-02-12, 03:51:37](https://news.ycombinator.com/item?id=43021677) - [I wrote a static web page and accidentally started a community (2023)](https://localfirstweb.dev/blog/2023-05-29-i-wrote-a-static-web-page)
* [2025-02-12, 03:34:19](https://lobste.rs/s/g95qvp/jj_cheat_sheet) - [JJ cheat sheet](https://justinpombrio.net/2025/02/11/jj-cheat-sheet.html)
* [2025-02-12, 03:30:00](https://it.slashdot.org/story/25/02/12/0011205/new-hack-uses-prompt-injection-to-corrupt-geminis-long-term-memory?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Hack Uses Prompt Injection To Corrupt Gemini's Long-Term Memory](https://it.slashdot.org/story/25/02/12/0011205/new-hack-uses-prompt-injection-to-corrupt-geminis-long-term-memory?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-12, 02:07:52](https://news.ycombinator.com/item?id=43020983) - [The year I didn't survive](https://bessstillman.substack.com/p/the-year-i-didnt-survive)
* [2025-02-12, 01:40:00](https://entertainment.slashdot.org/story/25/02/11/2352240/ne-zha-2-becomes-first-non-hollywood-film-to-hit-1-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Ne Zha 2' Becomes First Non-Hollywood Film To Hit $1 Billion](https://entertainment.slashdot.org/story/25/02/11/2352240/ne-zha-2-becomes-first-non-hollywood-film-to-hit-1-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-12, 01:29:00](https://soylentnews.org/article.pl?sid=25/02/11/122248&from=rss) - [Boeing Has Informed its Employees of Uncertainty in Future SLS Contracts](https://soylentnews.org/article.pl?sid=25/02/11/122248&from=rss)
* [2025-02-12, 01:00:00](https://yro.slashdot.org/story/25/02/11/2243253/serial-swatter-who-made-nearly-400-threatening-calls-gets-4-years-in-prison?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Serial Swatter' Who Made Nearly 400 Threatening Calls Gets 4 Years In Prison](https://yro.slashdot.org/story/25/02/11/2243253/serial-swatter-who-made-nearly-400-threatening-calls-gets-4-years-in-prison?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-12, 00:20:00](https://tech.slashdot.org/story/25/02/11/2229240/kde-plasma-63-released?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [KDE Plasma 6.3 Released](https://tech.slashdot.org/story/25/02/11/2229240/kde-plasma-63-released?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 23:40:00](https://tech.slashdot.org/story/25/02/11/2217231/tumblr-to-join-the-fediverse-after-wordpress-migration-completes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Tumblr To Join the Fediverse After WordPress Migration Completes](https://tech.slashdot.org/story/25/02/11/2217231/tumblr-to-join-the-fediverse-after-wordpress-migration-completes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 22:48:53](https://lobste.rs/s/ttfywn/42links_bookmarking_server_written_lisp) - [42links: A bookmarking server, written in Lisp](https://code.rosaelefanten.org/42links)
* [2025-02-11, 22:22:37](https://news.ycombinator.com/item?id=43019136) - [Show HN: Mapping the Unix Magic Poster – An Interactive Annotation Project](https://drio.github.io/unixmagic/)
* [2025-02-11, 21:44:50](https://lobste.rs/s/aumdwz/turning_down_upspin_infrastructure) - [Turning down Upspin infrastructure](https://groups.google.com/g/upspin/c/Whma_O-iexM/m/lSConHZ5DwAJ)
* [2025-02-11, 20:42:46](https://lobste.rs/s/g8qbl7/writing_my_own_dithering_algorithm) - [Writing my own dithering algorithm in Racket](https://amanvir.com/blog/writing-my-own-dithering-algorithm-in-racket)
* [2025-02-11, 20:17:24](https://lobste.rs/s/owydl7/open_source_software_corporate) - [Open Source Software and Corporate Influence](https://www.alilleybrinker.com/blog/open-source-software-and-corporate-influence/)
* [2025-02-11, 19:45:00](https://soylentnews.org/article.pl?sid=25/02/10/133233&from=rss) - [Asteroid's Odds of Hitting Earth Went Up. But Not Why You Think](https://soylentnews.org/article.pl?sid=25/02/10/133233&from=rss)
* [2025-02-11, 19:39:21](https://lobste.rs/s/bleaa6/windows_7_2025_perspective_rose_tinted) - [Windows 7: A 2025 perspective (rose-tinted or not)](https://www.dedoimedo.com/computers/windows-7-review-2025-perspective.html)
* [2025-02-11, 18:43:19](https://lobste.rs/s/6rzmjy/stages_denial) - [Stages of Denial](http://nsl.com/papers/denial.html)
* [2025-02-11, 18:07:56](https://lobste.rs/s/yxlisx/llm_sort_sort_input_lines_semantically) - [llm-sort: Sort input lines semantically with LLMs](https://github.com/vagos/llm-sort)
* [2025-02-11, 17:08:35](https://news.ycombinator.com/item?id=43015267) - [Launch HN: A0.dev (YC W25) – React Native App Generator](https://news.ycombinator.com/item?id=43015267)
* [2025-02-11, 15:45:00](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss) - [Soylent Update - February 2025](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss)
* [2025-02-11, 15:08:08](https://news.ycombinator.com/item?id=43013615) - [I tasted Honda’s spicy rodent-repelling tape and I will do it again (2021)](https://haterade.substack.com/p/i-tasted-hondas-spicy-rodent-repelling)
* [2025-02-11, 15:00:00](https://soylentnews.org/article.pl?sid=25/02/09/1917214&from=rss) - [Researchers Used AI To Build Groundbreaking Nanomaterials Lighter And Stronger Than Titanium](https://soylentnews.org/article.pl?sid=25/02/09/1917214&from=rss)
* [2025-02-11, 14:55:45](https://news.ycombinator.com/item?id=43013431) - [Backblaze Drive Stats for 2024](https://www.backblaze.com/blog/backblaze-drive-stats-for-2024/)
* [2025-02-11, 14:33:36](https://lobste.rs/s/8fnyam/your_ai_can_t_see_gorillas) - [Your AI can’t see gorillas](https://chiraaggohel.com/posts/llms-eda/)
* [2025-02-11, 14:10:36](https://lobste.rs/s/ohcl00/catalog_ways_generate_ssa) - [A catalog of ways to generate SSA](https://bernsteinbear.com/blog/ssa/)
* [2025-02-11, 10:23:00](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss) - [Private Spacecraft Gets Dramatic View Of Earth Eclipsing Moon](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss)
* [2025-02-11, 05:45:00](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss) - [Intel Has Already Received $2.2B in Federal Grants for Chip Production](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss)
* [2025-02-11, 03:25:25](https://news.ycombinator.com/item?id=43008587) - [Show HN: Sort lines semantically using llm-sort](https://github.com/vagos/llm-sort)
* [2025-02-11, 01:00:00](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss) - [Rare Otter 'Disappeared' In Kyrgyzstan, Experts Warn](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss)
* [2025-02-10, 20:19:00](https://soylentnews.org/article.pl?sid=25/02/09/1410202&from=rss) - [IBM Banks on Friendlier Us Regulatory Climate for Dealmaking](https://soylentnews.org/article.pl?sid=25/02/09/1410202&from=rss)
* [2025-02-10, 15:34:00](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss) - [Kaspersky Researchers Find Screenshot-Reading Malware on the App Store and Google Play](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss)
* [2025-02-10, 12:44:27](https://news.ycombinator.com/item?id=42999598) - [Durable plastic gets a sustainability makeover in novel polymerization process](https://phys.org/news/2025-01-durable-plastic-sustainability-makeover-polymerization.html)
* [2025-02-10, 10:52:00](https://soylentnews.org/article.pl?sid=25/02/09/1336213&from=rss) - [Your AI Can't See Gorillas](https://soylentnews.org/article.pl?sid=25/02/09/1336213&from=rss)
* [2025-02-10, 06:10:00](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss) - [WhatsApp Says Journalists and Civil Society Members Were Targets of Israeli Spyware](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss)
* [2025-02-10, 03:36:05](https://news.ycombinator.com/item?id=42996656) - [The missing tier for query compilers](https://www.scattered-thoughts.net/writing/the-missing-tier-for-query-compilers/)
* [2025-02-10, 01:23:00](https://soylentnews.org/article.pl?sid=25/02/08/1514221&from=rss) - [Facebook Torrents 81TB of Data to Feed their Models](https://soylentnews.org/article.pl?sid=25/02/08/1514221&from=rss)
* [2025-02-09, 20:36:00](https://soylentnews.org/article.pl?sid=25/02/08/1511237&from=rss) - [NASA Scientists Want to Solve a Mystery: Why Did Life \"Turn Left?\"](https://soylentnews.org/article.pl?sid=25/02/08/1511237&from=rss)
* [2025-02-09, 18:18:47](https://news.ycombinator.com/item?id=42992368) - [Bad Smart Watch Authentication](https://sprocketfox.io/xssfox/2025/02/09/ido/)
* [2025-02-09, 15:52:00](https://soylentnews.org/article.pl?sid=25/02/08/155232&from=rss) - [U.K. Orders Apple to Let It Spy on Users’ Encrypted Accounts](https://soylentnews.org/article.pl?sid=25/02/08/155232&from=rss)
* [2025-02-09, 11:53:31](https://news.ycombinator.com/item?id=42990103) - [Storytelling lessons I learned from Steve Jobs (2022)](https://www.fastcompany.com/90747313/steve-jobs-lessons-tony-fadell-build-book-excerpt)
* [2025-02-09, 11:08:00](https://soylentnews.org/article.pl?sid=25/02/08/1249225&from=rss) - [Fixing E.T. the Extra-Terrestrial for the Atari 2600](https://soylentnews.org/article.pl?sid=25/02/08/1249225&from=rss)
* [2025-02-09, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/08/1244232&from=rss) - [ 'Cracked' and 'Nulled' Crime Forums,Closed Down In European Cyber Bust](https://soylentnews.org/article.pl?sid=25/02/08/1244232&from=rss)
* [2025-02-09, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss) - [Mysterious Radiation Belts Detected Around Earth After Epic Solar Storm](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss)
* [2025-02-08, 20:49:00](https://soylentnews.org/article.pl?sid=25/02/07/1312257&from=rss) - [Meta Says This is the Make or Break Year for the Metaverse](https://soylentnews.org/article.pl?sid=25/02/07/1312257&from=rss)
* [2025-02-08, 16:07:00](https://soylentnews.org/article.pl?sid=25/02/07/048232&from=rss) - [Catalytic Converters: How Much Platinum Do They Contain?](https://soylentnews.org/article.pl?sid=25/02/07/048232&from=rss)
* [2025-02-08, 11:20:00](https://soylentnews.org/article.pl?sid=25/02/07/044225&from=rss) - [Cloudflare Browser Integrity Check Blocking Many Non-Mainstream Browsers Again](https://soylentnews.org/article.pl?sid=25/02/07/044225&from=rss)
* [2025-02-08, 06:32:00](https://soylentnews.org/politics/article.pl?sid=25/02/07/0354212&from=rss) - [US ICE Updates Immigration Raid Timestamps to Game Goggle Search Results](https://soylentnews.org/politics/article.pl?sid=25/02/07/0354212&from=rss)
* [2025-02-08, 01:49:00](https://soylentnews.org/article.pl?sid=25/02/07/0350219&from=rss) - [Piecing Together the Puzzle of the World's Earliest Datable Rune Stone](https://soylentnews.org/article.pl?sid=25/02/07/0350219&from=rss)
