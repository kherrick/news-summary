# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Machine Learning

* [Researchers Used AI To Build Groundbreaking Nanomaterials Lighter And Stronger Than Titanium](https://soylentnews.org/article.pl?sid=25/02/09/1917214&from=rss) - A breakthrough in material science achieved through AI applications.

* [UK and US Refuse To Sign International AI Declaration](https://news.slashdot.org/story/25/02/11/1316202/uk-and-us-refuse-to-sign-international-ai-declaration?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Policy implications of the rejection of global AI governance frameworks.

* [AI Can Now Replicate Itself](https://slashdot.org/story/25/02/11/0137223/ai-can-now-replicate-itself?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Advancements reveal the self-replicating capabilities of artificial intelligence.

* [Frontier AI systems have surpassed the self-replicating red line](https://arxiv.org/abs/2412.12140) - Discussion of frontier AI systems surpassing critical self-replication thresholds.

## Technology and Innovation

* [We Replaced Our React Frontend with Go and WebAssembly](https://dagger.io/blog/replaced-react-with-go) - Analysis of a technology stack shift from React to Go and WebAssembly.

* [Microsoft releases DocumentDB (NoSQL atop Postgres) under MIT license](https://opensource.microsoft.com/blog/2025/01/23/documentdb-open-source-announcement/) - Open-sourcing innovative database solutions by Microsoft.

* [TSMC 2nm Process Disclosure – How Does It Measure Up?](https://semiwiki.com/semiconductor-services/techinsights/352972-iedm-2025-tsmc-2nm-process-disclosure-how-does-it-measure-up/) - Evaluation of TSMC's next-generation semiconductor process.

## Environment and Health

* [Microplastics Can Block Blood Vessels in Mice Brains, Researchers Find](https://science.slashdot.org/story/25/02/11/1323249/microplastics-can-block-blood-vessels-in-mice-brains-researchers-find?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Emerging evidence of microplastics' impact on mammalian health.

* [Earth's Inner Core May Have Changed Shape, Say Scientists](https://news.slashdot.org/story/25/02/11/0130213/earths-inner-core-may-have-changed-shape-say-scientists?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New study shows possible deformation in Earth's inner structure.

## Unusual and Novel Stories

* [I Tasted Honda's Spicy Rodent-Repelling Tape – And I will do it again](https://haterade.substack.com/p/i-tasted-hondas-spicy-rodent-repelling) - A curious firsthand account of tasting an automotive product.

* [A pair of scissors on formica table suddenly bursts into flames](https://old.reddit.com/r/chemistry/comments/1ilmshx/a_pair_of_scissors_sitting_on_my_table_formica/) - Mysterious and intriguing chemical occurrences in daily life.

## Historical and Cultural Insights

* [Introduction to Operating System Abstractions using Plan 9](https://archive.org/details/plan9designintro) - Dive into the design principles of Plan 9 operating system.

* [How Copyover MUD Servers Worked](http://jackkelly.name/blog/archives/2025/02/06/how_copyover_mud_servers_worked/) - An exploration of server management techniques for MUD games.

* [The Mythology of Work (2018)](https://crimethinc.com/2018/09/03/the-mythology-of-work-eight-myths-that-keep-your-eyes-on-the-clock-and-your-nose-to-the-grindstone) - Revisiting the myths surrounding labor and productivity.

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

* [2025-02-11, 15:46:09](https://lobste.rs/s/ojwhae/lzbench_compression_benchmark) - [lzbench Compression Benchmark](https://morotti.github.io/lzbench-web/)
* [2025-02-11, 15:41:00](https://news.slashdot.org/story/25/02/11/1541222/youtube-surprise-ceo-says-tv-overtakes-mobile-as-primary-device-for-viewing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [YouTube Surprise: CEO Says TV Overtakes Mobile as 'Primary Device' for Viewing](https://news.slashdot.org/story/25/02/11/1541222/youtube-surprise-ceo-says-tv-overtakes-mobile-as-primary-device-for-viewing?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 15:11:43](https://news.ycombinator.com/item?id=43013672) - [A pair of scissors on formica table suddenly bursts into flames](https://old.reddit.com/r/chemistry/comments/1ilmshx/a_pair_of_scissors_sitting_on_my_table_formica/)
* [2025-02-11, 15:08:08](https://news.ycombinator.com/item?id=43013615) - [I Tasted Honda's Spicy Rodent-Repelling Tape – And I will do it again](https://haterade.substack.com/p/i-tasted-hondas-spicy-rodent-repelling)
* [2025-02-11, 15:00:00](https://soylentnews.org/article.pl?sid=25/02/09/1917214&from=rss) - [Researchers Used AI To Build Groundbreaking Nanomaterials Lighter And Stronger Than Titanium](https://soylentnews.org/article.pl?sid=25/02/09/1917214&from=rss)
* [2025-02-11, 14:55:45](https://news.ycombinator.com/item?id=43013431) - [Backblaze Drive Stats for 2024](https://www.backblaze.com/blog/backblaze-drive-stats-for-2024/)
* [2025-02-11, 14:41:00](https://science.slashdot.org/story/25/02/11/1323249/microplastics-can-block-blood-vessels-in-mice-brains-researchers-find?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microplastics Can Block Blood Vessels in Mice Brains, Researchers Find](https://science.slashdot.org/story/25/02/11/1323249/microplastics-can-block-blood-vessels-in-mice-brains-researchers-find?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 14:33:36](https://lobste.rs/s/8fnyam/your_ai_can_t_see_gorillas) - [Your AI can’t see gorillas](https://chiraaggohel.com/posts/llms-eda/)
* [2025-02-11, 14:27:00](https://news.ycombinator.com/item?id=43013033) - [Canonical announces 12 year Kubernetes LTS](https://canonical.com/blog/12-year-lts-for-kubernetes)
* [2025-02-11, 14:26:42](https://lobste.rs/s/bjdtrs/microsoft_releases_documentdb_nosql) - [Microsoft releases DocumentDB (NoSQL atop Postgres) under MIT license](https://opensource.microsoft.com/blog/2025/01/23/documentdb-open-source-announcement/)
* [2025-02-11, 14:10:36](https://lobste.rs/s/ohcl00/catalog_ways_generate_ssa) - [A catalog of ways to generate SSA](https://bernsteinbear.com/blog/ssa/)
* [2025-02-11, 14:08:22](https://news.ycombinator.com/item?id=43012862) - [Boring tech is mature, not old](https://rubenerd.com/boring-tech-is-mature-not-old/)
* [2025-02-11, 14:00:00](https://news.slashdot.org/story/25/02/11/1316202/uk-and-us-refuse-to-sign-international-ai-declaration?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [UK and US Refuse To Sign International AI Declaration](https://news.slashdot.org/story/25/02/11/1316202/uk-and-us-refuse-to-sign-international-ai-declaration?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 13:58:01](https://news.ycombinator.com/item?id=43012751) - [FLAC 1.5 Delivers Multi-Threaded Encoding](https://www.phoronix.com/news/FLAC-1.5-Released)
* [2025-02-11, 13:54:01](https://news.ycombinator.com/item?id=43012714) - [Anchoreum: A game for learning CSS anchor positioning](https://anchoreum.com)
* [2025-02-11, 13:05:38](https://news.ycombinator.com/item?id=43012294) - [Microsoft open sources PostgreSQL extensions to muscle in on NoSQL](https://www.theregister.com/2025/02/11/microsoft_postgresql_extensions/)
* [2025-02-11, 13:00:00](https://slashdot.org/story/25/02/11/0137223/ai-can-now-replicate-itself?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Can Now Replicate Itself](https://slashdot.org/story/25/02/11/0137223/ai-can-now-replicate-itself?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 12:44:06](https://lobste.rs/s/lymowb/frontier_ai_systems_have_surpassed_self) - [Frontier AI systems have surpassed the self-replicating red line](https://arxiv.org/abs/2412.12140)
* [2025-02-11, 12:37:11](https://news.ycombinator.com/item?id=43012078) - [The Mythology of Work (2018)](https://crimethinc.com/2018/09/03/the-mythology-of-work-eight-myths-that-keep-your-eyes-on-the-clock-and-your-nose-to-the-grindstone)
* [2025-02-11, 12:28:49](https://lobste.rs/s/5feang/how_about_trailing_commas_sql) - [How about trailing commas in SQL?](https://peter.eisentraut.org/blog/2025/02/11/how-about-trailing-commas-in-sql)
* [2025-02-11, 10:23:00](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss) - [Private Spacecraft Gets Dramatic View Of Earth Eclipsing Moon](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss)
* [2025-02-11, 10:00:00](https://news.slashdot.org/story/25/02/11/0130213/earths-inner-core-may-have-changed-shape-say-scientists?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Earth's Inner Core May Have Changed Shape, Say Scientists](https://news.slashdot.org/story/25/02/11/0130213/earths-inner-core-may-have-changed-shape-say-scientists?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 09:42:42](https://news.ycombinator.com/item?id=43010814) - [Firing programmers for AI will destroy everything](https://defragzone.substack.com/p/techs-dumbest-mistake-why-firing)
* [2025-02-11, 09:03:47](https://lobste.rs/s/4a2qzs/writing_git_extensions_perl) - [Writing git extensions in Perl](https://dev.to/jj/writing-git-extensions-in-perl-3ken)
* [2025-02-11, 09:02:29](https://lobste.rs/s/lvjtgq/gamefontlibrary_video_game_fonts) - [GameFontLibrary | Video Game Fonts & Typography Database](https://www.gamefontlibrary.com)
* [2025-02-11, 08:26:16](https://news.ycombinator.com/item?id=43010365) - [How about trailing commas in SQL?](http://peter.eisentraut.org/blog/2025/02/11/how-about-trailing-commas-in-sql)
* [2025-02-11, 08:00:55](https://lobste.rs/s/vqprux/persistent_packages_on_steam_deck_using) - [Persistent packages on Steam Deck using Nix](https://chrastecky.dev/gaming/persistent-packages-on-steam-deck-using-nix)
* [2025-02-11, 07:21:21](https://news.ycombinator.com/item?id=43009952) - [A catalog of ways to generate SSA](https://bernsteinbear.com/blog/ssa/)
* [2025-02-11, 07:05:39](https://news.ycombinator.com/item?id=43009850) - [TSMC 2nm Process Disclosure – How Does It Measure Up?](https://semiwiki.com/semiconductor-services/techinsights/352972-iedm-2025-tsmc-2nm-process-disclosure-how-does-it-measure-up/)
* [2025-02-11, 07:00:00](https://tech.slashdot.org/story/25/02/11/0122253/us-funded-social-network-attacking-pesticide-critics-shuts-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US-Funded 'Social Network' Attacking Pesticide Critics Shuts Down](https://tech.slashdot.org/story/25/02/11/0122253/us-funded-social-network-attacking-pesticide-critics-shuts-down?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 06:13:41](https://lobste.rs/s/gr3ghv/we_replaced_our_react_frontend_with_go) - [We Replaced Our React Frontend with Go and WebAssembly](https://dagger.io/blog/replaced-react-with-go)
* [2025-02-11, 05:50:19](https://lobste.rs/s/oitgiq/nixos_actually_portable_executables) - [NixOS and Actually Portable Executables](http://jackkelly.name/blog/archives/2025/01/15/nixos_and_actually_portable_executables/index.html)
* [2025-02-11, 05:45:00](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss) - [Intel Has Already Received $2.2B in Federal Grants for Chip Production](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss)
* [2025-02-11, 04:53:05](https://lobste.rs/s/s4ew3u/introduction_operating_system) - [Introduction to Operating System Abstractions using Plan 9](https://archive.org/details/plan9designintro)
* [2025-02-11, 04:19:41](https://news.ycombinator.com/item?id=43008920) - [Meta’s Hyperscale Infrastructure: Overview and Insights](https://cacm.acm.org/research/metas-hyperscale-infrastructure-overview-and-insights/)
* [2025-02-11, 04:13:47](https://news.ycombinator.com/item?id=43008879) - [Nvidia's RTX 5090 power connectors are melting](https://www.theverge.com/news/609207/nvidia-rtx-5090-power-connector-melting-burning-issues)
* [2025-02-11, 03:30:00](https://tech.slashdot.org/story/25/02/11/018239/citing-ev-rollercoaster-in-us-bmw-invests-in-internal-combustion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Citing EV 'Rollercoaster' In US, BMW Invests In Internal Combustion](https://tech.slashdot.org/story/25/02/11/018239/citing-ev-rollercoaster-in-us-bmw-invests-in-internal-combustion?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 02:30:00](https://entertainment.slashdot.org/story/25/02/11/0218218/connecticut-bill-requires-movie-theaters-to-reveal-how-long-those-coming-soon-trailers-really-are?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Connecticut Bill Requires Movie Theaters To Reveal How Long Those 'Coming Soon' Trailers Really Are](https://entertainment.slashdot.org/story/25/02/11/0218218/connecticut-bill-requires-movie-theaters-to-reveal-how-long-those-coming-soon-trailers-really-are?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 01:50:00](https://tech.slashdot.org/story/25/02/11/010215/chinas-byd-adding-high-level-self-driving-to-its-budget-10k-ev?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [China's BYD Adding 'High-Level' Self-Driving To Its Budget $10K EV](https://tech.slashdot.org/story/25/02/11/010215/chinas-byd-adding-high-level-self-driving-to-its-budget-10k-ev?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 01:31:08](https://lobste.rs/s/icgiym/anansi_tags_now_nodejs) - [Anansi-tags (now in NodeJS!)](https://www.npmjs.com/package/anansi-tags)
* [2025-02-11, 01:20:21](https://lobste.rs/s/fwqjqm/how_copyover_mud_servers_worked) - [How Copyover MUD Servers Worked](http://jackkelly.name/blog/archives/2025/02/06/how_copyover_mud_servers_worked/)
* [2025-02-11, 01:10:00](https://tech.slashdot.org/story/25/02/11/0016258/jeep-introduces-pop-up-ads-that-appear-every-time-you-stop?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Jeep Introduces Pop-Up Ads That Appear Every Time You Stop](https://tech.slashdot.org/story/25/02/11/0016258/jeep-introduces-pop-up-ads-that-appear-every-time-you-stop?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 01:02:48](https://news.ycombinator.com/item?id=43007628) - [The Floppotron 3.0 (2022)](https://silent.org.pl/home/2022/06/13/the-floppotron-3-0/)
* [2025-02-11, 01:00:00](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss) - [Rare Otter 'Disappeared' In Kyrgyzstan, Experts Warn](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss)
* [2025-02-11, 00:30:00](https://tech.slashdot.org/story/25/02/11/007253/tiktok-wants-android-users-to-sideload-its-app?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [TikTok Wants Android Users To Sideload Its App](https://tech.slashdot.org/story/25/02/11/007253/tiktok-wants-android-users-to-sideload-its-app?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 23:50:00](https://tech.slashdot.org/story/25/02/10/2348258/brave-now-lets-you-inject-custom-javascript-to-tweak-websites?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Brave Now Lets You Inject Custom JavaScript To Tweak Websites](https://tech.slashdot.org/story/25/02/10/2348258/brave-now-lets-you-inject-custom-javascript-to-tweak-websites?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 23:16:33](https://news.ycombinator.com/item?id=43006536) - [Fun with C++26 reflection: Keyword Arguments](https://pydong.org/posts/KwArgs/)
* [2025-02-10, 23:14:02](https://lobste.rs/s/fkr3ha/some_terminal_frustrations) - [Some terminal frustrations](https://jvns.ca/blog/2025/02/05/some-terminal-frustrations/)
* [2025-02-10, 23:05:03](https://lobste.rs/s/uoiosa/undergraduate_invents_faster_hash_table) - [Undergraduate Invents Faster Hash Table](https://www.quantamagazine.org/undergraduate-upends-a-40-year-old-data-science-conjecture-20250210/)
* [2025-02-10, 23:00:00](https://hardware.slashdot.org/story/25/02/10/2125226/nvidias-rtx-5090-power-connectors-are-melting?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia's RTX 5090 Power Connectors Are Melting](https://hardware.slashdot.org/story/25/02/10/2125226/nvidias-rtx-5090-power-connectors-are-melting?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 22:20:00](https://it.slashdot.org/story/25/02/10/2118222/reclassification-is-making-us-tech-job-losses-look-worse-than-they-are?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Reclassification Is Making US Tech Job Losses Look Worse Than They Are](https://it.slashdot.org/story/25/02/10/2118222/reclassification-is-making-us-tech-job-losses-look-worse-than-they-are?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 21:40:00](https://apple.slashdot.org/story/25/02/10/217213/apple-fixes-zero-day-exploited-in-extremely-sophisticated-attacks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Fixes Zero-Day Exploited In 'Extremely Sophisticated' Attacks](https://apple.slashdot.org/story/25/02/10/217213/apple-fixes-zero-day-exploited-in-extremely-sophisticated-attacks?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 21:00:29](https://news.ycombinator.com/item?id=43005096) - [Fly.io (YC W20) Is Hiring a Customer Support Director](https://news.ycombinator.com/item?id=43005096)
* [2025-02-10, 20:57:55](https://lobste.rs/s/ktw3bz/you_should_use_tmp_more) - [You Should Use /tmp/ More](https://atthis.link/blog/2025/58671.html)
* [2025-02-10, 20:56:54](https://lobste.rs/s/kthinp/free_wiki_hosting_no_ads) - [Free Wiki Hosting, No Ads](https://miraheze.org)
* [2025-02-10, 20:19:00](https://soylentnews.org/article.pl?sid=25/02/09/1410202&from=rss) - [IBM Banks on Friendlier Us Regulatory Climate for Dealmaking](https://soylentnews.org/article.pl?sid=25/02/09/1410202&from=rss)
* [2025-02-10, 19:52:02](https://news.ycombinator.com/item?id=43004435) - [TinyX: Small Featured X Server](https://github.com/tinycorelinux/tinyx)
* [2025-02-10, 19:50:20](https://news.ycombinator.com/item?id=43004416) - [Scaling up test-time compute with latent reasoning: A recurrent depth approach](https://arxiv.org/abs/2502.05171)
* [2025-02-10, 17:39:28](https://news.ycombinator.com/item?id=43002906) - [Work at the Mill: The story of Digital Equipment Corporation](https://www.abortretry.fail/p/work-at-the-mill)
* [2025-02-10, 17:05:09](https://news.ycombinator.com/item?id=43002511) - [Undergraduate shows that searches within hash tables can be much faster](https://www.quantamagazine.org/undergraduate-upends-a-40-year-old-data-science-conjecture-20250210/)
* [2025-02-10, 16:26:49](https://lobste.rs/s/j5ggtw/pkarr_public_key_addressable_resource) - [pkarr: Public Key Addressable Resource Records (sovereign TLDs)](https://github.com/pubky/pkarr)
* [2025-02-10, 15:43:08](https://lobste.rs/s/jpa59v/sandboxing_perl_with_webassembly) - [Sandboxing Perl with WebAssembly](https://andrews.substack.com/p/zeroperl-sandboxed-perl-with-webassembly)
* [2025-02-10, 15:34:00](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss) - [Kaspersky Researchers Find Screenshot-Reading Malware on the App Store and Google Play](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss)
* [2025-02-10, 15:18:10](https://lobste.rs/s/dwlsla/concerns_with_proposed_addition_fibers_c) - [Concerns with the proposed addition of fibers to C++ 26](https://isocpp.org/files/papers/P3620R0.pdf)
* [2025-02-10, 14:07:16](https://lobste.rs/s/fsc1ej/what_about_k) - [What about k?](https://xpqz.github.io/kbook/Introduction.html)
* [2025-02-10, 13:54:38](https://news.ycombinator.com/item?id=43000316) - [Surnames from nicknames nobody has any more](https://blog.plover.com/lang/etym/nickname-names.html)
* [2025-02-10, 13:20:55](https://lobste.rs/s/ymszmx/i_blog_with_raw_txt) - [I blog with raw txt](https://misc.l3m.in/txt/raw_txt.txt)
* [2025-02-10, 11:59:41](https://news.ycombinator.com/item?id=42999297) - [Building a personal, private AI computer on a budget](https://ewintr.nl/posts/2025/building-a-personal-private-ai-computer-on-a-budget/)
* [2025-02-10, 10:52:38](https://lobste.rs/s/n8uork/naming_sum_types_is_often_hard) - [Naming sum types is often hard](https://chrisdone.com/posts/naming-is-hard/)
* [2025-02-10, 10:52:00](https://soylentnews.org/article.pl?sid=25/02/09/1336213&from=rss) - [Your AI Can't See Gorillas](https://soylentnews.org/article.pl?sid=25/02/09/1336213&from=rss)
* [2025-02-10, 06:10:00](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss) - [WhatsApp Says Journalists and Civil Society Members Were Targets of Israeli Spyware](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss)
* [2025-02-10, 05:58:36](https://lobste.rs/s/t8dfcw/how_does_ada_s_memory_safety_compare) - [How Does Ada's Memory Safety Compare Against Rust?](https://ajxs.me/blog/How_Does_Adas_Memory_Safety_Compare_Against_Rust.html)
* [2025-02-10, 05:57:53](https://news.ycombinator.com/item?id=42997344) - [The Pinball Philosophy (1975)](https://pinballnirvana.com/forums/threads/the-pinball-philosophy-john-mcphee-1975.22239/)
* [2025-02-10, 01:23:00](https://soylentnews.org/article.pl?sid=25/02/08/1514221&from=rss) - [Facebook Torrents 81TB of Data to Feed their Models](https://soylentnews.org/article.pl?sid=25/02/08/1514221&from=rss)
* [2025-02-09, 20:36:00](https://soylentnews.org/article.pl?sid=25/02/08/1511237&from=rss) - [NASA Scientists Want to Solve a Mystery: Why Did Life \"Turn Left?\"](https://soylentnews.org/article.pl?sid=25/02/08/1511237&from=rss)
* [2025-02-09, 15:52:00](https://soylentnews.org/article.pl?sid=25/02/08/155232&from=rss) - [U.K. Orders Apple to Let It Spy on Users’ Encrypted Accounts](https://soylentnews.org/article.pl?sid=25/02/08/155232&from=rss)
* [2025-02-09, 11:08:00](https://soylentnews.org/article.pl?sid=25/02/08/1249225&from=rss) - [Fixing E.T. the Extra-Terrestrial for the Atari 2600](https://soylentnews.org/article.pl?sid=25/02/08/1249225&from=rss)
* [2025-02-09, 09:18:41](https://news.ycombinator.com/item?id=42989508) - [Explaining Glasser's 'Quality World'](https://thebetterplan.org/2014/08/10/teaching-the-quality-world/)
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
* [2025-02-07, 16:14:00](https://soylentnews.org/article.pl?sid=25/02/06/1043254&from=rss) - [As Internet Enshittification Marches On, Here are Some of the Worst Offenders](https://soylentnews.org/article.pl?sid=25/02/06/1043254&from=rss)
* [2025-02-07, 11:28:00](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss) - [Russia VPN Crackdown Revelation - VPN Sites Hide Their IP Addresses ](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss)
* [2025-02-07, 06:43:00](https://soylentnews.org/article.pl?sid=25/02/06/0534246&from=rss) - [Educated but Easily Fooled? Who Falls for Misinformation and Why](https://soylentnews.org/article.pl?sid=25/02/06/0534246&from=rss)
* [2025-02-07, 06:23:36](https://news.ycombinator.com/item?id=42969993) - [Indigenous engineers are using AI to preserve their culture](https://www.nbcnews.com/tech/innovation/indigenous-engineers-are-using-ai-preserve-culture-rcna176012)
* [2025-02-07, 03:30:10](https://news.ycombinator.com/item?id=42969038) - [Ancient-DNA study identifies originators of Indo-European language family](https://hms.harvard.edu/news/ancient-dna-study-identifies-originators-indo-european-language-family)
* [2025-02-07, 01:55:00](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss) - [Google Removes Pledge to Not Use AI for Weapons From Website](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss)
