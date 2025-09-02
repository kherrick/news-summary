# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Wikidata and Mundaneum - The Triumph of the Commons](https://schmud.de/programs/2025-09-02-wikidata-mundaneum.html) - Exploration of how Wikidata builds on the legacy of Mundaneum's goals and strengthens the commons movement. [Comments](https://lobste.rs/s/mt8qo5/wikidata_mundaneum_triumph_commons)

* [Show HN: Moribito – A TUI for LDAP Viewing/Queries](https://github.com/ericschmar/moribito) - A terminal user interface designed for seamless LDAP querying and data visualization. [Comments](https://news.ycombinator.com/item?id=45102664)

* [Compile Svelte 5 in your head](https://lihautan.com/compile-svelte-5-in-your-head) - A deep dive into Svelte 5's architecture, showcasing analytical approaches to understanding its compilation process. [Comments](https://lobste.rs/s/aypgqu/compile_svelte_5_your_head)

* [Next.js is infuriating](https://blog.meca.sh/3lxoty3shjc2z) - Criticism and challenges experienced when using Next.js for web development projects. [Comments](https://lobste.rs/s/qk5qw7/next_js_is_infuriating)

## Socioeconomic Trends

* [Americans Lose Faith That Hard Work Leads to Economic Gains, WSJ-NORC Poll Finds](https://www.wsj.com/economy/wsj-norc-economic-poll-73bce003) - New poll highlights growing economic frustration and perceptions of inequity. [Comments](https://news.ycombinator.com/item?id=45104082)

* [The US Population Could Shrink in 2025, For the First Time Ever](https://news.slashdot.org/story/25/09/02/1242252/the-us-population-could-shrink-in-2025-for-the-first-time-ever?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Analysis of factors potentially causing the US's first population decline. [Comments](https://news.slashdot.org/story/25/09/02/1242252/the-us-population-could-shrink-in-2025-for-the-first-time-ever?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Water Menus Gain Traction as Restaurants Seek Non-Alcoholic Revenue Streams](https://slashdot.org/story/25/09/02/0623209/water-menus-gain-traction-as-restaurants-seek-non-alcoholic-revenue-streams?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Trend of curated water menus emerging to diversify dining experiences. [Comments](https://slashdot.org/story/25/09/02/0623209/water-menus-gain-traction-as-restaurants-seek-non-alcoholic-revenue-streams?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Education and Knowledge

* [The Little Book of Linear Algebra](https://github.com/the-litte-book-of/linear-algebra) - A minimalist approach to teaching the essentials of linear algebra. [Comments](https://news.ycombinator.com/item?id=45103436)

* [AI in Schools Isn’t Progress — It’s a Sign of How Far We’ve Strayed from the Purpose of Education.](https://soylentnews.org/article.pl?sid=25/09/01/0018253&from=rss) - Discussion on the potential downsides of integrating AI deeper into education systems. [Comments](https://soylentnews.org/article.pl?sid=25/09/01/0018253&from=rss)

## Open Source and Software

* [Bear is now source-available](https://herman.bearblog.dev/license/) - A once-closed software project opens up its licensing model to the public. [Comments](https://news.ycombinator.com/item?id=45092490)

* [RubyMine is now free for non-commercial use](https://blog.jetbrains.com/ruby/2025/09/rubymine-is-now-free-for-non-commercial-use/) - JetBrains makes its Ruby IDE, RubyMine, accessible for non-commercial purposes. [Comments](https://news.ycombinator.com/item?id=45102186)

## Scientific Discoveries and Reflections

* [The Sudden Surges That Forge Evolutionary Trees](https://www.quantamagazine.org/the-sudden-surges-that-forge-evolutionary-trees-20250828/) - Research on major evolutionary milestones and the randomness behind them. [Comments](https://news.ycombinator.com/item?id=45101794)

* [Keyboards from my collection (2023)](https://aresluna.org/50-keyboards-from-my-collection/) - A nostalgic exploration of 50 unique keyboard designs. [Comments](https://news.ycombinator.com/item?id=45099192)

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

* [2025-09-02, 15:27:22](https://news.ycombinator.com/item?id=45104330) - [US stocks fall as bond sell-off spills into equities](https://subs.ft.com/products)
* [2025-09-02, 15:22:00](https://slashdot.org/story/25/09/02/1459213/amazon-ends-shared-prime-free-shipping-outside-your-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Ends Shared Prime Free Shipping Outside Your Home](https://slashdot.org/story/25/09/02/1459213/amazon-ends-shared-prime-free-shipping-outside-your-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 15:21:35](https://lobste.rs/s/kahscv/beware_sorting_locales) - [Beware of Sorting Locales](https://www.adrianstoll.com/post/beware-of-sorting-locales/)
* [2025-09-02, 15:07:47](https://news.ycombinator.com/item?id=45104082) - [Americans Lose Faith That Hard Work Leads to Economic Gains, WSJ-NORC Poll Finds](https://www.wsj.com/economy/wsj-norc-economic-poll-73bce003)
* [2025-09-02, 14:45:13](https://lobste.rs/s/mt8qo5/wikidata_mundaneum_triumph_commons) - [Wikidata and Mundaneum - The Triumph of the Commons](https://schmud.de/programs/2025-09-02-wikidata-mundaneum.html)
* [2025-09-02, 14:40:00](https://it.slashdot.org/story/25/09/02/1434208/what-every-argument-about-sideloading-gets-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Every Argument About Sideloading Gets Wrong](https://it.slashdot.org/story/25/09/02/1434208/what-every-argument-about-sideloading-gets-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 14:32:47](https://news.ycombinator.com/item?id=45103646) - [You don&apos;t want to hire \&quot;the best engineers\&quot;](https://www.otherbranch.com/shared/blog/no-you-dont-want-to-hire-the-best-engineers)
* [2025-09-02, 14:17:07](https://news.ycombinator.com/item?id=45103436) - [The Little Book of Linear Algebra](https://github.com/the-litte-book-of/linear-algebra)
* [2025-09-02, 14:00:00](https://news.slashdot.org/story/25/09/02/1242252/the-us-population-could-shrink-in-2025-for-the-first-time-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Population Could Shrink in 2025, For the First Time Ever](https://news.slashdot.org/story/25/09/02/1242252/the-us-population-could-shrink-in-2025-for-the-first-time-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 13:14:00](https://soylentnews.org/article.pl?sid=25/09/01/0021218&amp;from=rss) - [The Unix Epochalypse Might be Sooner Than You Think](https://soylentnews.org/article.pl?sid=25/09/01/0021218&amp;from=rss)
* [2025-09-02, 13:10:51](https://news.ycombinator.com/item?id=45102664) - [Show HN: Moribito – A TUI for LDAP Viewing/Queries](https://github.com/ericschmar/moribito)
* [2025-09-02, 12:59:03](https://lobste.rs/s/lx7ed3/understanding_apache_fluss) - [Understanding Apache Fluss](https://jack-vanlightly.com/blog/2025/9/2/understanding-apache-fluss)
* [2025-09-02, 12:58:47](https://lobste.rs/s/rmmccx/aperiodic_tilings_v_refinable_frontier) - [Aperiodic Tilings V: the Refinable Frontier](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/aperiodic-refine/)
* [2025-09-02, 12:30:00](https://slashdot.org/story/25/09/02/1230217/amazon-us-prime-sign-ups-slow-despite-expanded-promotion-data-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon US Prime Sign-Ups Slow Despite Expanded Promotion, Data Shows](https://slashdot.org/story/25/09/02/1230217/amazon-us-prime-sign-ups-slow-despite-expanded-promotion-data-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 12:25:08](https://news.ycombinator.com/item?id=45102186) - [RubyMine is now free for non-commercial use](https://blog.jetbrains.com/ruby/2025/09/rubymine-is-now-free-for-non-commercial-use/)
* [2025-09-02, 11:45:37](https://news.ycombinator.com/item?id=45101794) - [The Sudden Surges That Forge Evolutionary Trees](https://www.quantamagazine.org/the-sudden-surges-that-forge-evolutionary-trees-20250828/)
* [2025-09-02, 11:44:14](https://news.ycombinator.com/item?id=45101779) - [Toronto’s underground labyrinth](https://www.worksinprogress.news/p/torontos-underground-labyrinth)
* [2025-09-02, 10:50:55](https://news.ycombinator.com/item?id=45101300) - [What&apos;s New with Firefox 142](https://www.mozilla.org/en-US/firefox/142.0.1/whatsnew/?oldversion=139.0.4&amp;utm_medium=firefox-desktop&amp;utm_source=update&amp;utm_campaign=142)
* [2025-09-02, 10:17:15](https://lobste.rs/s/umaxfz/rats_ratchets_2024) - [Of Rats and Ratchets (2024)](https://matklad.github.io/2024/01/03/of-rats-and-ratchets.html)
* [2025-09-02, 09:30:00](https://slashdot.org/story/25/09/02/0837225/chinese-cluster-now-worlds-top-innovation-hotspot-un-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Cluster Now World&apos;s Top Innovation Hotspot, UN Says](https://slashdot.org/story/25/09/02/0837225/chinese-cluster-now-worlds-top-innovation-hotspot-un-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 08:40:25](https://lobste.rs/s/nr8kkd/debugging_rustler_on_illumos) - [Debugging Rustler on illumos](https://system-illumination.org/01-rustler.html)
* [2025-09-02, 08:40:20](https://news.ycombinator.com/item?id=45100499) - [Run Erlang/Elixir on Microcontrollers and Embedded Linux](https://www.grisp.org/software)
* [2025-09-02, 08:26:00](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss) - [AI in Schools Isn’t Progress — It’s a Sign of How Far We’ve Strayed from the Purpose of Education.](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss)
* [2025-09-02, 07:40:59](https://lobste.rs/s/57djg3/irc_serial_port_s_love_letter_internet) - [IRC - The Serial Port&apos;s love letter to Internet Relay Chat](https://www.youtube.com/watch?v=6UbKenFipjo)
* [2025-09-02, 07:01:01](https://news.ycombinator.com/item?id=45099939) - [Kapa.ai (YC S23) is hiring research and software engineers](https://www.ycombinator.com/companies/kapa-ai/jobs)
* [2025-09-02, 06:57:41](https://news.ycombinator.com/item?id=45099922) - [Next.js is infuriating](https://blog.meca.sh/3lxoty3shjc2z)
* [2025-09-02, 06:25:00](https://slashdot.org/story/25/09/02/0623209/water-menus-gain-traction-as-restaurants-seek-non-alcoholic-revenue-streams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Water Menus Gain Traction as Restaurants Seek Non-Alcoholic Revenue Streams](https://slashdot.org/story/25/09/02/0623209/water-menus-gain-traction-as-restaurants-seek-non-alcoholic-revenue-streams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 05:26:04](https://news.ycombinator.com/item?id=45099418) - [Collecting All Causal Knowledge](https://causenet.org/)
* [2025-09-02, 05:02:07](https://lobste.rs/s/aypgqu/compile_svelte_5_your_head) - [Compile Svelte 5 in your head](https://lihautan.com/compile-svelte-5-in-your-head)
* [2025-09-02, 04:38:30](https://news.ycombinator.com/item?id=45099192) - [Keyboards from my collection (2023)](https://aresluna.org/50-keyboards-from-my-collection/)
* [2025-09-02, 04:24:07](https://news.ycombinator.com/item?id=45099124) - [WinBoat: Run Windows apps on Linux with seamless integration](https://github.com/TibixDev/winboat)
* [2025-09-02, 04:20:00](https://tech.slashdot.org/story/25/09/02/0419231/google-says-gmail-security-alert-claims-are-false?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says Gmail Security Alert Claims Are False](https://tech.slashdot.org/story/25/09/02/0419231/google-says-gmail-security-alert-claims-are-false?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 03:44:00](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss) - [AMD Roadmap Leak Points to Zen 6 Mobile CPUs in 2027](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss)
* [2025-09-02, 03:01:02](https://news.ycombinator.com/item?id=45098722) - [FreeDroidWarn](https://github.com/woheller69/FreeDroidWarn)
* [2025-09-02, 02:00:00](https://news.slashdot.org/story/25/09/01/2328220/85-of-college-students-report-ai-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [85% of College Students Report AI Use](https://news.slashdot.org/story/25/09/01/2328220/85-of-college-students-report-ai-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 01:50:23](https://lobste.rs/s/qk5qw7/next_js_is_infuriating) - [Next.js Is Infuriating](https://blog.meca.sh/3lxoty3shjc2z)
* [2025-09-02, 01:44:22](https://news.ycombinator.com/item?id=45098269) - [Kazeta: An operating system that brings the console gaming experience of 90s](https://kazeta.org/)
* [2025-09-02, 01:33:38](https://lobste.rs/s/ig1k0s/saturation_triumph_history_how_most) - [Saturation and the Triumph of History: How most of the behavior of Tech Leaders since 2016 can be explained by smartphone market saturation](https://notes.hella.cheap/saturation-and-the-triumph-of-history.html)
* [2025-09-02, 00:15:00](https://news.slashdot.org/story/25/09/01/2339241/us-tourism-suffers-82-decline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Tourism Suffers 8.2% Decline](https://news.slashdot.org/story/25/09/01/2339241/us-tourism-suffers-82-decline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-01, 23:13:00](https://slashdot.org/story/25/09/01/2314206/salesforce-ceo-says-ai-enabled-him-to-cut-4000-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Salesforce CEO Says AI Enabled Him To Cut 4,000 Jobs](https://slashdot.org/story/25/09/01/2314206/salesforce-ceo-says-ai-enabled-him-to-cut-4000-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-01, 23:04:00](https://soylentnews.org/article.pl?sid=25/08/31/146226&amp;from=rss) - [AI Crawlers Destroying Websites in Hunger for Content](https://soylentnews.org/article.pl?sid=25/08/31/146226&amp;from=rss)
* [2025-09-01, 22:36:42](https://lobste.rs/s/ukn1u3/faster_linking_times_with_1_90_0_stable_on) - [Faster linking times with 1.90.0 stable on Linux using the LLD linker](https://blog.rust-lang.org/2025/09/01/rust-lld-on-1.90.0-stable/)
* [2025-09-01, 22:24:51](https://lobste.rs/s/p8fj5d/future_32_bit_support_kernel) - [The future of 32-bit support in the kernel](https://lwn.net/SubscriberLink/1035727/4837b0d3dccf1cbb/)
* [2025-09-01, 21:44:59](https://lobste.rs/s/7ijcrm/optimising_spatial_joins_duckdb) - [[Optimising] Spatial Joins in DuckDB](https://duckdb.org/2025/08/08/spatial-joins.html)
* [2025-09-01, 21:36:03](https://lobste.rs/s/d7s2xu/processors_are_getting_wider) - [Processors are getting wider](https://lemire.me/blog/2025/09/01/processors-are-getting-wider/)
* [2025-09-01, 21:31:26](https://lobste.rs/s/aqp3jc/building_wasm_compiler_roc_series) - [Building a WASM compiler in Roc (series)](https://dusty.phillips.codes/roc/)
* [2025-09-01, 21:08:31](https://lobste.rs/s/hbtz2s/nimony_design_principles) - [Nimony: Design principles](https://nim-lang.org/araq/nimony.html)
* [2025-09-01, 21:05:23](https://lobste.rs/s/x5xf4g/bear_is_now_source_available) - [Bear is now source-available](https://herman.bearblog.dev/license/)
* [2025-09-01, 21:03:51](https://news.ycombinator.com/item?id=45096585) - [Raspberry Pi 5 support (OpenBSD)](https://marc.info/?l=openbsd-cvs&amp;m=175675287220070&amp;w=2)
* [2025-09-01, 20:11:19](https://lobste.rs/s/mntyuw/automatic_updating_spotify_status) - [Automatic updating Spotify status... without JavaScript](https://lina.sh/blog/spotify-status-without-js)
* [2025-09-01, 19:32:17](https://news.ycombinator.com/item?id=45095849) - [Patrick Winston: How to Speak (2018) [video]](https://www.youtube.com/watch?v=Unzc731iCUY)
* [2025-09-01, 19:15:00](https://slashdot.org/story/25/09/01/1847244/eu-to-boost-satellite-defences-against-gps-jamming-defence-commissioner-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU To Boost Satellite Defences Against GPS Jamming, Defence Commissioner Says](https://slashdot.org/story/25/09/01/1847244/eu-to-boost-satellite-defences-against-gps-jamming-defence-commissioner-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-01, 19:04:31](https://news.ycombinator.com/item?id=45095603) - [Amazon has mostly sat out the AI talent war](https://www.businessinsider.com/amazon-ai-talent-wars-internal-document-2025-8)
* [2025-09-01, 18:48:22](https://news.ycombinator.com/item?id=45095475) - [The future of 32-bit support in the kernel](https://lwn.net/SubscriberLink/1035727/4837b0d3dccf1cbb/)
* [2025-09-01, 18:47:21](https://news.ycombinator.com/item?id=45095460) - [Implementing a Foil Sticker Effect](https://www.4rknova.com/blog/2025/08/30/foil-sticker)
* [2025-09-01, 18:18:00](https://slashdot.org/story/25/09/01/1818247/the-age-of-cheap-online-shopping-is-ending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Age of Cheap Online Shopping is Ending](https://slashdot.org/story/25/09/01/1818247/the-age-of-cheap-online-shopping-is-ending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-01, 18:14:00](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss) - [Tesla Denied Having Fatal Crash Data Until a Hacker Found It](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss)
* [2025-09-01, 17:15:00](https://it.slashdot.org/story/25/09/01/1621214/azure-budget-alerts-go-berserk-after-microsoft-account-migration-misfire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Azure Budget Alerts Go Berserk After Microsoft Account Migration Misfire](https://it.slashdot.org/story/25/09/01/1621214/azure-budget-alerts-go-berserk-after-microsoft-account-migration-misfire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-01, 16:35:32](https://lobste.rs/s/gukaij/baba_yaga_license) - [Baba Yaga License](https://smallandnearlysilent.com/baba-yaga/LICENSE.txt)
* [2025-09-01, 16:15:00](https://news.slashdot.org/story/25/09/01/1614253/americans-are-having-less-sex-than-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Americans Are Having Less Sex Than Ever](https://news.slashdot.org/story/25/09/01/1614253/americans-are-having-less-sex-than-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-01, 16:02:58](https://lobste.rs/s/fdyjno/what_s_cooking_on_sourcehut_q3_2025) - [What&apos;s cooking on SourceHut? Q3 2025](https://sourcehut.org/blog/2025-09-01-whats-cooking-q3-2025/)
* [2025-09-01, 15:12:00](https://tech.slashdot.org/story/25/09/01/1512223/why-do-waymos-keep-loitering-in-front-of-my-house?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Why Do Waymos Keep Loitering in Front of My House?&apos;](https://tech.slashdot.org/story/25/09/01/1512223/why-do-waymos-keep-loitering-in-front-of-my-house?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-01, 13:32:00](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss) - [Massive Data Breach: Google Warns 2.5 Billion Gmail Users](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss)
* [2025-09-01, 13:17:56](https://news.ycombinator.com/item?id=45092490) - [Bear is now source-available](https://herman.bearblog.dev/license/)
* [2025-09-01, 13:14:28](https://lobste.rs/s/r9td7g/ascii_side_moon) - [The ASCII Side of the Moon](https://aleyan.com/projects/ascii-side-of-the-moon/)
* [2025-09-01, 08:44:00](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss) - [Medical Cannabis Fails the Long-Term Test: 58% of Patients Quit Within a Year](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss)
* [2025-09-01, 08:04:50](https://lobste.rs/s/qejtqj/passkeys_are_incompatible_with_open) - [Passkeys are incompatible with open-source software](https://www.smokingonabike.com/2025/01/04/passkey-marketing-is-lying-to-you/)
* [2025-09-01, 06:27:18](https://lobste.rs/s/6d8btd/end_windows_10) - [End of (Windows) 10](https://endof10.org/)
* [2025-09-01, 04:01:00](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss) - [The Mysterious Shortwave Radio Station Stoking US-Russia Nuclear Fears](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss)
* [2025-09-01, 01:17:24](https://lobste.rs/s/ravmmh/things_rust_shipped_without_2015) - [things rust shipped without (2015)](https://graydon2.dreamwidth.org/218040.html)
* [2025-08-31, 23:13:00](https://soylentnews.org/article.pl?sid=25/08/30/1445255&amp;from=rss) - [Elon Musk Says xAI Has Open Sourced Grok 2.5](https://soylentnews.org/article.pl?sid=25/08/30/1445255&amp;from=rss)
* [2025-08-31, 18:25:00](https://soylentnews.org/article.pl?sid=25/08/30/1427217&amp;from=rss) - [US Military&apos;s X-37B Spaceplane Stays Relevant With Launch of Another Mission](https://soylentnews.org/article.pl?sid=25/08/30/1427217&amp;from=rss)
* [2025-08-31, 15:29:08](https://lobste.rs/s/s4fffm/jujutsu_for_everyone) - [Jujutsu for everyone](https://jj-for-everyone.github.io/)
* [2025-08-31, 13:38:00](https://soylentnews.org/article.pl?sid=25/08/30/1419247&amp;from=rss) - [A New Security Flaw in TheTruthSpy Phone Spyware is Putting Victims at Risk](https://soylentnews.org/article.pl?sid=25/08/30/1419247&amp;from=rss)
* [2025-08-31, 08:47:00](https://soylentnews.org/article.pl?sid=25/08/29/2355251&amp;from=rss) - [Transport for London (TfL) Asks Mobile Users to Wear Headphones](https://soylentnews.org/article.pl?sid=25/08/29/2355251&amp;from=rss)
* [2025-08-31, 03:59:00](https://soylentnews.org/article.pl?sid=25/08/29/2346225&amp;from=rss) - [Scientists Produce Quantum Entanglement-like Results Without Entangled Particles](https://soylentnews.org/article.pl?sid=25/08/29/2346225&amp;from=rss)
* [2025-08-31, 00:06:42](https://news.ycombinator.com/item?id=45079131) - [Quirks of Common Lisp Types](https://www.fosskers.ca/en/blog/cl-type-quirks)
* [2025-08-30, 23:14:00](https://soylentnews.org/article.pl?sid=25/08/29/2330255&amp;from=rss) - [Rare Quadruple Star System May Solve the Mystery of Brown Dwarfs](https://soylentnews.org/article.pl?sid=25/08/29/2330255&amp;from=rss)
* [2025-08-30, 18:34:00](https://soylentnews.org/article.pl?sid=25/08/29/1422213&amp;from=rss) - [4chan and Kiwi Farms Sue UK Regulator Ofcom Over Online Censorship Law](https://soylentnews.org/article.pl?sid=25/08/29/1422213&amp;from=rss)
* [2025-08-30, 13:51:00](https://soylentnews.org/article.pl?sid=25/08/29/0536231&amp;from=rss) - [US Attorneys General Tell AI Companies They &apos;Will be Held Accountable&apos; for Child Safety Failures](https://soylentnews.org/article.pl?sid=25/08/29/0536231&amp;from=rss)
* [2025-08-30, 09:04:00](https://soylentnews.org/article.pl?sid=25/08/29/0527204&amp;from=rss) - [ADAS (Driver Assist) Gen 2 From BMW](https://soylentnews.org/article.pl?sid=25/08/29/0527204&amp;from=rss)
* [2025-08-30, 04:21:00](https://soylentnews.org/article.pl?sid=25/08/29/0523215&amp;from=rss) - [A Gentle Introduction to CP/M](https://soylentnews.org/article.pl?sid=25/08/29/0523215&amp;from=rss)
* [2025-08-29, 23:35:00](https://soylentnews.org/article.pl?sid=25/08/27/1236219&amp;from=rss) - [Punycode - an Overview by a Soylentil](https://soylentnews.org/article.pl?sid=25/08/27/1236219&amp;from=rss)
* [2025-08-29, 21:01:53](https://news.ycombinator.com/item?id=45069341) - [Reusing Computation in Text-to-Image Diffusion for Efficient Image Generation](https://arxiv.org/abs/2508.21032)
* [2025-08-29, 18:51:00](https://soylentnews.org/article.pl?sid=25/08/28/1853258&amp;from=rss) - [Linux Foundation Says Yes to NoSQL Via DocumentDB](https://soylentnews.org/article.pl?sid=25/08/28/1853258&amp;from=rss)
* [2025-08-29, 17:50:01](https://news.ycombinator.com/item?id=45067251) - [Memory is slow, Disk is fast – Part 1](https://www.bitflux.ai/blog/memory-is-slow-part1/)
* [2025-08-29, 14:07:00](https://soylentnews.org/article.pl?sid=25/08/28/1849238&amp;from=rss) - [Large Reasoning Models Hitting Limits, Say Apple Researchers](https://soylentnews.org/article.pl?sid=25/08/28/1849238&amp;from=rss)
* [2025-08-29, 12:12:57](https://news.ycombinator.com/item?id=45063037) - [The day Return became Enter (2023)](https://aresluna.org/the-day-return-became-enter/)
* [2025-08-29, 09:40:19](https://news.ycombinator.com/item?id=45062046) - [An LLM is a lossy encyclopedia](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/)
* [2025-08-29, 09:22:00](https://soylentnews.org/article.pl?sid=25/08/28/1843236&amp;from=rss) - [Breathwork Can Induce Altered States of Consciousness](https://soylentnews.org/article.pl?sid=25/08/28/1843236&amp;from=rss)
* [2025-08-29, 07:39:52](https://news.ycombinator.com/item?id=45061290) - [Stone Age settlement found under the sea in Denmark](https://apnews.com/article/denmark-stone-age-settlements-underwater-research-d0a77a07cdad2c23bd61c3f4bb015d7d)
* [2025-08-29, 04:43:00](https://soylentnews.org/article.pl?sid=25/08/28/1214205&amp;from=rss) - [Mercedes Demonstrates Five Minute BEV Charging While Setting Speed Records](https://soylentnews.org/article.pl?sid=25/08/28/1214205&amp;from=rss)
