# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Advanced Computing

* [Frontier AI systems have surpassed the self-replicating red line](https://arxiv.org/abs/2412.12140) - A groundbreaking paper discussing the potential implications of AI systems surpassing self-replication thresholds. [Comments](https://lobste.rs/s/lymowb/frontier_ai_systems_have_surpassed_self)

* [Solving the ABA Problem in Rust with Tagged Pointers](https://minikin.me/blog/solving-the-aba-problem-in-rust-tagged-pointers/) - An informative post addressing Rust's solution to the ABA problem using tagged pointers. [Comments](https://lobste.rs/s/bywedu/solving_aba_problem_rust_with_tagged)

## Science and Space

* [Private Spacecraft Gets Dramatic View Of Earth Eclipsing Moon](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss) - An awe-inspiring capture of Earth eclipsing the Moon from a private spacecraft. [Comments](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss)

* [Earth's Inner Core May Have Changed Shape, Say Scientists](https://news.slashdot.org/story/25/02/11/0130213/earths-inner-core-may-have-changed-shape-say-scientists?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New research highlights possible changes in Earth's inner core's shape. [Comments](https://news.slashdot.org/story/25/02/11/0130213/earths-inner-core-may-have-changed-shape-say-scientists?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Software and Development

* [We Replaced Our React Frontend with Go and WebAssembly - Dagger](https://dagger.io/blog/replaced-react-with-go) - A detailed exploration of using Go and WebAssembly to overhaul a React frontend. [Comments](https://lobste.rs/s/gr3ghv/we_replaced_our_react_frontend_with_go)

* [GameFontLibrary | Video Game Fonts & Typography Database](https://www.gamefontlibrary.com) - Discover a curated database of video game fonts and typography resources. [Comments](https://lobste.rs/s/lvjtgq/gamefontlibrary_video_game_fonts)

## Technology Industry and Trends

* [TSMC 2nm Process Disclosure – How Does It Measure Up?](https://semiwiki.com/semiconductor-services/techinsights/352972-iedm-2025-tsmc-2nm-process-disclosure-how-does-it-measure-up/) - A detailed report on TSMC's advancements in 2nm chip manufacturing. [Comments](https://news.ycombinator.com/item?id=43009850)

* [Intel Has Already Received $2.2B in Federal Grants for Chip Production](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss) - Insight into federal support for Intel's U.S. chip manufacturing. [Comments](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss)

## Sustainability and Transportation

* [Citing EV 'Rollercoaster' In US, BMW Invests In Internal Combustion](https://tech.slashdot.org/story/25/02/11/018239/citing-ev-rollercoaster-in-us-bmw-invests-in-internal-combustion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - BMW doubles down on internal combustion as EV adoption sees uncertainty. [Comments](https://tech.slashdot.org/story/25/02/11/018239/citing-ev-rollercoaster-in-us-bmw-invests-in-internal-combustion?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [China's BYD Adding 'High-Level' Self-Driving To Its Budget $10K EV](https://tech.slashdot.org/story/25/02/11/010215/chinas-byd-adding-high-level-self-driving-to-its-budget-10k-ev?utm_source=rss1.0mainlinkanon&utm_medium=feed) - BYD's innovative self-driving tech in affordable EVs. [Comments](https://tech.slashdot.org/story/25/02/11/010215/chinas-byd-adding-high-level-self-driving-to-its-budget-10k-ev?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-02-11, 12:44:06](https://lobste.rs/s/lymowb/frontier_ai_systems_have_surpassed_self) - [Frontier AI systems have surpassed the self-replicating red line](https://arxiv.org/abs/2412.12140)
* [2025-02-11, 12:28:49](https://lobste.rs/s/5feang/how_about_trailing_commas_sql) - [How about trailing commas in SQL?](https://peter.eisentraut.org/blog/2025/02/11/how-about-trailing-commas-in-sql)
* [2025-02-11, 12:24:38](https://lobste.rs/s/bywedu/solving_aba_problem_rust_with_tagged) - [Solving the ABA Problem in Rust with Tagged Pointers](https://minikin.me/blog/solving-the-aba-problem-in-rust-tagged-pointers/)
* [2025-02-11, 10:23:00](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss) - [Private Spacecraft Gets Dramatic View Of Earth Eclipsing Moon](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss)
* [2025-02-11, 10:00:00](https://news.slashdot.org/story/25/02/11/0130213/earths-inner-core-may-have-changed-shape-say-scientists?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Earth's Inner Core May Have Changed Shape, Say Scientists](https://news.slashdot.org/story/25/02/11/0130213/earths-inner-core-may-have-changed-shape-say-scientists?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 09:25:29](https://lobste.rs/s/5b4apf/feature_flags_vs_configuration_options) - [Feature Flags vs Configuration Options (2020)](https://www.cs.cmu.edu/~ckaestne/pdf/icseseip20.pdf)
* [2025-02-11, 09:02:29](https://lobste.rs/s/lvjtgq/gamefontlibrary_video_game_fonts) - [GameFontLibrary | Video Game Fonts & Typography Database](https://www.gamefontlibrary.com)
* [2025-02-11, 08:00:55](https://lobste.rs/s/vqprux/persistent_packages_on_steam_deck_using) - [Persistent packages on Steam Deck using Nix](https://chrastecky.dev/gaming/persistent-packages-on-steam-deck-using-nix)
* [2025-02-11, 07:21:21](https://news.ycombinator.com/item?id=43009952) - [A catalog of ways to generate SSA](https://bernsteinbear.com/blog/ssa/)
* [2025-02-11, 07:05:39](https://news.ycombinator.com/item?id=43009850) - [TSMC 2nm Process Disclosure – How Does It Measure Up?](https://semiwiki.com/semiconductor-services/techinsights/352972-iedm-2025-tsmc-2nm-process-disclosure-how-does-it-measure-up/)
* [2025-02-11, 07:00:00](https://tech.slashdot.org/story/25/02/11/0122253/us-funded-social-network-attacking-pesticide-critics-shuts-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US-Funded 'Social Network' Attacking Pesticide Critics Shuts Down](https://tech.slashdot.org/story/25/02/11/0122253/us-funded-social-network-attacking-pesticide-critics-shuts-down?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 06:13:41](https://lobste.rs/s/gr3ghv/we_replaced_our_react_frontend_with_go) - [We Replaced Our React Frontend with Go and WebAssembly - Dagger](https://dagger.io/blog/replaced-react-with-go)
* [2025-02-11, 05:50:19](https://lobste.rs/s/oitgiq/nixos_actually_portable_executables) - [NixOS and Actually Portable Executables](http://jackkelly.name/blog/archives/2025/01/15/nixos_and_actually_portable_executables/index.html)
* [2025-02-11, 05:45:00](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss) - [Intel Has Already Received $2.2B in Federal Grants for Chip Production](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss)
* [2025-02-11, 04:53:05](https://lobste.rs/s/s4ew3u/introduction_operating_system) - [Introduction to Operating System Abstractions using Plan 9](https://archive.org/details/plan9designintro)
* [2025-02-11, 04:19:41](https://news.ycombinator.com/item?id=43008920) - [Meta's Hyperscale Infrastructure: Overview and Insights](https://cacm.acm.org/research/metas-hyperscale-infrastructure-overview-and-insights/)
* [2025-02-11, 03:30:00](https://tech.slashdot.org/story/25/02/11/018239/citing-ev-rollercoaster-in-us-bmw-invests-in-internal-combustion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Citing EV 'Rollercoaster' In US, BMW Invests In Internal Combustion](https://tech.slashdot.org/story/25/02/11/018239/citing-ev-rollercoaster-in-us-bmw-invests-in-internal-combustion?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 02:30:00](https://entertainment.slashdot.org/story/25/02/11/0218218/connecticut-bill-requires-movie-theaters-to-reveal-how-long-those-coming-soon-trailers-really-are?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Connecticut Bill Requires Movie Theaters To Reveal How Long Those 'Coming Soon' Trailers Really Are](https://entertainment.slashdot.org/story/25/02/11/0218218/connecticut-bill-requires-movie-theaters-to-reveal-how-long-those-coming-soon-trailers-really-are?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 01:50:21](https://news.ycombinator.com/item?id=43008048) - [Elementary Functions and Not Following the IEEE754 Floating-Point Standard(2020)](http://www.hlsl.co.uk/blog/2020/1/29/ieee754-is-not-followed)
* [2025-02-11, 01:50:00](https://tech.slashdot.org/story/25/02/11/010215/chinas-byd-adding-high-level-self-driving-to-its-budget-10k-ev?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [China's BYD Adding 'High-Level' Self-Driving To Its Budget $10K EV](https://tech.slashdot.org/story/25/02/11/010215/chinas-byd-adding-high-level-self-driving-to-its-budget-10k-ev?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 01:31:08](https://lobste.rs/s/icgiym/anansi_tags_now_nodejs) - [Anansi-tags (now in NodeJS!)](https://www.npmjs.com/package/anansi-tags)
* [2025-02-11, 01:20:21](https://lobste.rs/s/fwqjqm/how_copyover_mud_servers_worked) - [How Copyover MUD Servers Worked](http://jackkelly.name/blog/archives/2025/02/06/how_copyover_mud_servers_worked/)
* [2025-02-11, 01:19:14](https://news.ycombinator.com/item?id=43007769) - [How Copyover MUD Servers Worked](http://jackkelly.name/blog/archives/2025/02/06/how_copyover_mud_servers_worked/)
* [2025-02-11, 01:10:00](https://tech.slashdot.org/story/25/02/11/0016258/jeep-introduces-pop-up-ads-that-appear-every-time-you-stop?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Jeep Introduces Pop-Up Ads That Appear Every Time You Stop](https://tech.slashdot.org/story/25/02/11/0016258/jeep-introduces-pop-up-ads-that-appear-every-time-you-stop?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 01:02:48](https://news.ycombinator.com/item?id=43007628) - [The Floppotron 3.0 (2022)](https://silent.org.pl/home/2022/06/13/the-floppotron-3-0/)
* [2025-02-11, 01:00:00](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss) - [Rare Otter 'Disappeared' In Kyrgyzstan, Experts Warn](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss)
* [2025-02-11, 00:35:34](https://news.ycombinator.com/item?id=43007336) - [Nocc – A Distributed C++ Compiler](https://github.com/VKCOM/nocc)
* [2025-02-11, 00:30:00](https://tech.slashdot.org/story/25/02/11/007253/tiktok-wants-android-users-to-sideload-its-app?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [TikTok Wants Android Users To Sideload Its App](https://tech.slashdot.org/story/25/02/11/007253/tiktok-wants-android-users-to-sideload-its-app?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 23:50:00](https://tech.slashdot.org/story/25/02/10/2348258/brave-now-lets-you-inject-custom-javascript-to-tweak-websites?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Brave Now Lets You Inject Custom JavaScript To Tweak Websites](https://tech.slashdot.org/story/25/02/10/2348258/brave-now-lets-you-inject-custom-javascript-to-tweak-websites?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 23:16:33](https://news.ycombinator.com/item?id=43006536) - [Fun with C++26 reflection: Keyword Arguments](https://pydong.org/posts/KwArgs/)
* [2025-02-10, 23:14:02](https://lobste.rs/s/fkr3ha/some_terminal_frustrations) - [Some terminal frustrations](https://jvns.ca/blog/2025/02/05/some-terminal-frustrations/)
* [2025-02-10, 23:05:03](https://lobste.rs/s/uoiosa/undergraduate_invents_faster_hash_table) - [Undergraduate Invents Faster Hash Table](https://www.quantamagazine.org/undergraduate-upends-a-40-year-old-data-science-conjecture-20250210/)
* [2025-02-10, 23:00:00](https://hardware.slashdot.org/story/25/02/10/2125226/nvidias-rtx-5090-power-connectors-are-melting?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia's RTX 5090 Power Connectors Are Melting](https://hardware.slashdot.org/story/25/02/10/2125226/nvidias-rtx-5090-power-connectors-are-melting?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 22:53:40](https://news.ycombinator.com/item?id=43006350) - [Relational Quantum Mechanics](https://plato.stanford.edu/entries/qm-relational/)
* [2025-02-10, 22:20:39](https://lobste.rs/s/ohi8z7/elementary_functions_not_following_ieee) - [Elementary Functions and NOT Following the IEEE 754 Floating-Point Standard (2020)](https://www.hlsl.co.uk/blog/2020/1/29/ieee754-is-not-followed)
* [2025-02-10, 22:20:00](https://it.slashdot.org/story/25/02/10/2118222/reclassification-is-making-us-tech-job-losses-look-worse-than-they-are?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Reclassification Is Making US Tech Job Losses Look Worse Than They Are](https://it.slashdot.org/story/25/02/10/2118222/reclassification-is-making-us-tech-job-losses-look-worse-than-they-are?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 21:40:00](https://apple.slashdot.org/story/25/02/10/217213/apple-fixes-zero-day-exploited-in-extremely-sophisticated-attacks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Fixes Zero-Day Exploited In 'Extremely Sophisticated' Attacks](https://apple.slashdot.org/story/25/02/10/217213/apple-fixes-zero-day-exploited-in-extremely-sophisticated-attacks?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 21:03:00](https://tech.slashdot.org/story/25/02/10/212213/microchip-company-ceases-operations-pet-owners-urged-to-re-register?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microchip Company Ceases Operations, Pet Owners Urged To Re-Register](https://tech.slashdot.org/story/25/02/10/212213/microchip-company-ceases-operations-pet-owners-urged-to-re-register?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 20:57:55](https://lobste.rs/s/ktw3bz/you_should_use_tmp_more) - [You Should Use /tmp/ More](https://atthis.link/blog/2025/58671.html)
* [2025-02-10, 20:56:54](https://lobste.rs/s/kthinp/free_wiki_hosting_no_ads) - [Free Wiki Hosting, No Ads](https://miraheze.org)
* [2025-02-10, 20:19:00](https://soylentnews.org/article.pl?sid=25/02/09/1410202&from=rss) - [IBM Banks on Friendlier Us Regulatory Climate for Dealmaking](https://soylentnews.org/article.pl?sid=25/02/09/1410202&from=rss)
* [2025-02-10, 19:52:02](https://news.ycombinator.com/item?id=43004435) - [TinyX: Small Featured X Server](https://github.com/tinycorelinux/tinyx)
* [2025-02-10, 19:50:20](https://news.ycombinator.com/item?id=43004416) - [Scaling up test-time compute with latent reasoning: A recurrent depth approach](https://arxiv.org/abs/2502.05171)
* [2025-02-10, 19:42:02](https://news.ycombinator.com/item?id=43004334) - [Patterns for Building Realtime Features](https://zknill.io/posts/patterns-for-building-realtime/)
* [2025-02-10, 19:30:00](https://slashdot.org/story/25/02/10/1926209/microsoft-to-adjust-office-teams-pricing-in-bid-to-avoid-eu-antitrust-fine?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft To Adjust Office-Teams Pricing in Bid To Avoid EU Antitrust Fine](https://slashdot.org/story/25/02/10/1926209/microsoft-to-adjust-office-teams-pricing-in-bid-to-avoid-eu-antitrust-fine?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 18:59:00](https://slashdot.org/story/25/02/10/1859242/europe-not-in-the-ai-race-today-french-president-macron-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Europe 'Not in the AI Race Today,' French President Macron Says](https://slashdot.org/story/25/02/10/1859242/europe-not-in-the-ai-race-today-french-president-macron-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 18:01:00](https://slashdot.org/story/25/02/10/1752233/microsoft-study-finds-ai-makes-human-cognition-atrophied-and-unprepared?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Study Finds AI Makes Human Cognition 'Atrophied and Unprepared'](https://slashdot.org/story/25/02/10/1752233/microsoft-study-finds-ai-makes-human-cognition-atrophied-and-unprepared?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 17:39:28](https://news.ycombinator.com/item?id=43002906) - [Work at the Mill: The story of Digital Equipment Corporation](https://www.abortretry.fail/p/work-at-the-mill)
* [2025-02-10, 17:05:09](https://news.ycombinator.com/item?id=43002511) - [Undergraduate shows that searches within hash tables can be much faster](https://www.quantamagazine.org/undergraduate-upends-a-40-year-old-data-science-conjecture-20250210/)
* [2025-02-10, 16:26:49](https://lobste.rs/s/j5ggtw/pkarr_public_key_addressable_resource) - [pkarr: Public Key Addressable Resource Records (sovereign TLDs)](https://github.com/pubky/pkarr)
* [2025-02-10, 15:43:08](https://lobste.rs/s/jpa59v/sandboxing_perl_with_webassembly) - [Sandboxing Perl with WebAssembly](https://andrews.substack.com/p/zeroperl-sandboxed-perl-with-webassembly)
* [2025-02-10, 15:34:00](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss) - [Kaspersky Researchers Find Screenshot-Reading Malware on the App Store and Google Play](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss)
* [2025-02-10, 15:18:10](https://lobste.rs/s/dwlsla/concerns_with_proposed_addition_fibers_c) - [Concerns with the proposed addition of fibers to C++ 26](https://isocpp.org/files/papers/P3620R0.pdf)
* [2025-02-10, 14:14:22](https://news.ycombinator.com/item?id=43000529) - [The Anthropic Economic Index](https://www.anthropic.com/news/the-anthropic-economic-index)
* [2025-02-10, 14:07:16](https://lobste.rs/s/fsc1ej/what_about_k) - [What about k?](https://xpqz.github.io/kbook/Introduction.html)
* [2025-02-10, 13:54:38](https://news.ycombinator.com/item?id=43000316) - [Surnames from nicknames nobody has any more](https://blog.plover.com/lang/etym/nickname-names.html)
* [2025-02-10, 13:52:53](https://news.ycombinator.com/item?id=43000303) - [Show HN: HTML visualization of a PDF file's internal structure](https://github.com/desgeeko/pdfsyntax/blob/main/docs/browse.md)
* [2025-02-10, 13:50:40](https://news.ycombinator.com/item?id=43000275) - [Why hasn't commercial air travel gotten any faster since the 1960s? (2009)](https://engineering.mit.edu/engage/ask-an-engineer/why-hasnt-commercial-air-travel-gotten-any-faster-since-the-1960s/)
* [2025-02-10, 13:22:39](https://lobste.rs/s/g1icvq/feature_demo_surface_stable_fractal) - [Feature Demo of Surface-Stable Fractal Dithering](https://www.youtube.com/watch?v=EzjWBmhO_1E)
* [2025-02-10, 13:20:55](https://lobste.rs/s/ymszmx/i_blog_with_raw_txt) - [I blog with raw txt](https://misc.l3m.in/txt/raw_txt.txt)
* [2025-02-10, 13:01:18](https://lobste.rs/s/lupmsm/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/lupmsm/what_are_you_doing_this_week)
* [2025-02-10, 11:59:41](https://news.ycombinator.com/item?id=42999297) - [Building a personal, private AI computer on a budget](https://ewintr.nl/posts/2025/building-a-personal-private-ai-computer-on-a-budget/)
* [2025-02-10, 10:52:38](https://lobste.rs/s/n8uork/naming_sum_types_is_often_hard) - [Naming sum types is often hard](https://chrisdone.com/posts/naming-is-hard/)
* [2025-02-10, 10:52:00](https://soylentnews.org/article.pl?sid=25/02/09/1336213&from=rss) - [Your AI Can't See Gorillas](https://soylentnews.org/article.pl?sid=25/02/09/1336213&from=rss)
* [2025-02-10, 06:10:00](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss) - [WhatsApp Says Journalists and Civil Society Members Were Targets of Israeli Spyware](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss)
* [2025-02-10, 05:58:36](https://lobste.rs/s/t8dfcw/how_does_ada_s_memory_safety_compare) - [How Does Ada's Memory Safety Compare Against Rust?](https://ajxs.me/blog/How_Does_Adas_Memory_Safety_Compare_Against_Rust.html)
* [2025-02-10, 01:23:00](https://soylentnews.org/article.pl?sid=25/02/08/1514221&from=rss) - [Facebook Torrents 81TB of Data to Feed their Models](https://soylentnews.org/article.pl?sid=25/02/08/1514221&from=rss)
* [2025-02-09, 20:36:00](https://soylentnews.org/article.pl?sid=25/02/08/1511237&from=rss) - [NASA Scientists Want to Solve a Mystery: Why Did Life \"Turn Left?\"](https://soylentnews.org/article.pl?sid=25/02/08/1511237&from=rss)
* [2025-02-09, 15:52:00](https://soylentnews.org/article.pl?sid=25/02/08/155232&from=rss) - [U.K. Orders Apple to Let It Spy on Users’ Encrypted Accounts](https://soylentnews.org/article.pl?sid=25/02/08/155232&from=rss)
* [2025-02-09, 14:01:08](https://news.ycombinator.com/item?id=42990739) - [Extend Extra Extreme: keyboard extend layer mappings](https://dreymar.colemak.org/layers-extend.html)
* [2025-02-09, 11:08:00](https://soylentnews.org/article.pl?sid=25/02/08/1249225&from=rss) - [Fixing E.T. the Extra-Terrestrial for the Atari 2600](https://soylentnews.org/article.pl?sid=25/02/08/1249225&from=rss)
* [2025-02-09, 10:55:30](https://news.ycombinator.com/item?id=42989886) - [February 22, 1985 Operation Beluga](https://todayinhistory.blog/2024/02/22/february-22-1985-operation-beluga/)
* [2025-02-09, 09:53:55](https://news.ycombinator.com/item?id=42989654) - [Literate Programming in Quarto](https://ivelasq.quarto.pub/building-a-blog-with-quarto/workflow/write-docs/)
* [2025-02-09, 06:31:10](https://news.ycombinator.com/item?id=42988913) - [OpenDAW – a new holistic exploration of music creation inside the browser](https://opendaw.studio/)
* [2025-02-09, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/08/1244232&from=rss) - [ 'Cracked' and 'Nulled' Crime Forums,Closed Down In European Cyber Bust](https://soylentnews.org/article.pl?sid=25/02/08/1244232&from=rss)
* [2025-02-09, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss) - [Mysterious Radiation Belts Detected Around Earth After Epic Solar Storm](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss)
* [2025-02-08, 20:49:00](https://soylentnews.org/article.pl?sid=25/02/07/1312257&from=rss) - [Meta Says This is the Make or Break Year for the Metaverse](https://soylentnews.org/article.pl?sid=25/02/07/1312257&from=rss)
* [2025-02-08, 16:07:00](https://soylentnews.org/article.pl?sid=25/02/07/048232&from=rss) - [Catalytic Converters: How Much Platinum Do They Contain?](https://soylentnews.org/article.pl?sid=25/02/07/048232&from=rss)
* [2025-02-08, 11:20:00](https://soylentnews.org/article.pl?sid=25/02/07/044225&from=rss) - [Cloudflare Browser Integrity Check Blocking Many Non-Mainstream Browsers Again](https://soylentnews.org/article.pl?sid=25/02/07/044225&from=rss)
* [2025-02-08, 08:45:00](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss) - [Soylent Update - February 2025](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss)
* [2025-02-08, 06:32:00](https://soylentnews.org/politics/article.pl?sid=25/02/07/0354212&from=rss) - [US ICE Updates Immigration Raid Timestamps to Game Goggle Search Results](https://soylentnews.org/politics/article.pl?sid=25/02/07/0354212&from=rss)
* [2025-02-08, 01:49:00](https://soylentnews.org/article.pl?sid=25/02/07/0350219&from=rss) - [Piecing Together the Puzzle of the World's Earliest Datable Rune Stone](https://soylentnews.org/article.pl?sid=25/02/07/0350219&from=rss)
* [2025-02-07, 23:45:52](https://news.ycombinator.com/item?id=42978825) - [Making Software Fun](https://furbo.org/2025/02/07/making-software-fun/)
* [2025-02-07, 21:02:00](https://soylentnews.org/article.pl?sid=25/02/06/1054246&from=rss) - [Deepfake Videos are Getting Shockingly Good](https://soylentnews.org/article.pl?sid=25/02/06/1054246&from=rss)
* [2025-02-07, 16:59:59](https://news.ycombinator.com/item?id=42974896) - [Fossils Preserve Both Skin and Scales from an Ancient Sea Monster](https://www.nytimes.com/2025/02/06/science/plesiosaur-fossils-skin-scales.html)
* [2025-02-07, 16:14:00](https://soylentnews.org/article.pl?sid=25/02/06/1043254&from=rss) - [As Internet Enshittification Marches On, Here are Some of the Worst Offenders](https://soylentnews.org/article.pl?sid=25/02/06/1043254&from=rss)
* [2025-02-07, 15:20:35](https://news.ycombinator.com/item?id=42973652) - [Solving Sudoku with Tmux](https://willhbr.net/2024/12/27/solving-sudoku-with-tmux/)
* [2025-02-07, 12:46:33](https://news.ycombinator.com/item?id=42971967) - [Fruit of the Poisonous Llama?](https://shkspr.mobi/blog/2023/07/fruit-of-the-poisonous-llama/)
* [2025-02-07, 11:28:00](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss) - [Russia VPN Crackdown Revelation - VPN Sites Hide Their IP Addresses ](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss)
* [2025-02-07, 10:46:15](https://news.ycombinator.com/item?id=42971258) - [Allocator Hints for Btrfs](https://wiki.tnonline.net/w/Btrfs/Allocator_Hints)
* [2025-02-07, 06:43:00](https://soylentnews.org/article.pl?sid=25/02/06/0534246&from=rss) - [Educated but Easily Fooled? Who Falls for Misinformation and Why](https://soylentnews.org/article.pl?sid=25/02/06/0534246&from=rss)
* [2025-02-07, 06:23:36](https://news.ycombinator.com/item?id=42969993) - [Indigenous engineers are using AI to preserve their culture](https://www.nbcnews.com/tech/innovation/indigenous-engineers-are-using-ai-preserve-culture-rcna176012)
* [2025-02-07, 03:30:10](https://news.ycombinator.com/item?id=42969038) - [Ancient-DNA study identifies originators of Indo-European language family](https://hms.harvard.edu/news/ancient-dna-study-identifies-originators-indo-european-language-family)
* [2025-02-07, 01:55:00](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss) - [Google Removes Pledge to Not Use AI for Weapons From Website](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss)
