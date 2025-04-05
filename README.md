# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [Protoplanetary Disks Are Smaller Than Expected](https://www.centauri-dreams.org/2025/04/04/protoplanetary-disks-are-smaller-than-expected/) - Highlights discoveries about the size of protoplanetary disks, offering astronomers new insights into planetary formation. [Comments](https://news.ycombinator.com/item?id=43591866).

* [BPF From Scratch In Rust](https://yeet.cx/blog/bpf-from-scratch-in-rust/) - A beginner-friendly exploration on building BPF (Berkeley Packet Filter) in Rust, showcasing its power and utility. [Comments](https://lobste.rs/s/9m8ala/bpf_from_scratch_rust).

* [OpenVertebrate Presents a Database of 13,000 3D Scans of Specimens](https://www.openculture.com/2024/03/openvertebrate-presents-a-massive-database-of-13000-3d-scans-of-vertebrate-specimens.html) - OpenVertebrate rolls out a treasure trove of vertebrate specimen 3D scans for researchers and educators. [Comments](https://news.ycombinator.com/item?id=43589989).

* [Nebula Sans](https://nebulasans.com/) - Introducing a new sans-serif typeface, offering elegance in digital and print typography. [Comments](https://news.ycombinator.com/item?id=43591225).

* [Fram2 Crew Returns To Earth After Polar Orbit Mission](https://science.slashdot.org/story/25/04/04/2344217/fram2-crew-returns-to-earth-after-polar-orbit-mission?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Astronaut team successfully concludes a pioneering polar orbit expedition, hinting at greater ambitions beyond Earth. [Comments](https://science.slashdot.org/story/25/04/04/2344217/fram2-crew-returns-to-earth-after-polar-orbit-mission?utm_source=rss1.0mainlinkanon&utm_medium=feed).

## Artificial Intelligence and Data

* [Wikimedia Drowning in AI Bot Traffic as Crawlers Consume 65% of Resources](https://news.slashdot.org/story/25/04/04/2357233/wikimedia-drowning-in-ai-bot-traffic-as-crawlers-consume-65-of-resources?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Wikimedia faces severe infrastructure strain as bot-driven crawlers dominate server utilization. [Comments](https://news.slashdot.org/story/25/04/04/2357233/wikimedia-drowning-in-ai-bot-traffic-as-crawlers-consume-65-of-resources?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [Scientists Warn Indonesia's Rice Megaproject Faces Failure](https://science.slashdot.org/story/25/04/05/0034246/scientists-warn-indonesias-rice-megaproject-faces-failure?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Experts predict structural inefficiencies in Indonesia's ambitious farming initiative could trigger its collapse. [Comments](https://science.slashdot.org/story/25/04/05/0034246/scientists-warn-indonesias-rice-megaproject-faces-failure?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [How We Hacked a Software Supply Chain for $50K](https://www.landh.tech/blog/20250211-hack-supply-chain-for-50k/) - An enthralling exposé on how a $50k investment infiltrated and compromised major software workflows. [Comments](https://lobste.rs/s/unnozu/how_we_hacked_software_supply_chain_for).

## Entertainment and Creativity

* [Recreating Daft Punk's Something About Us](https://thoughts-and-things.ghost.io/recreating-daft-punks-something-about-us/) - A producer unveils the tools, secrets, and passion behind recreating Daft Punk's iconic track. [Comments](https://news.ycombinator.com/item?id=43591050).

* [Annotated Unix Magic Poster](https://unixmagic.net/) - Dive into Unix history and quirks through an annotated poster designed for enthusiasts and historians. [Comments](https://news.ycombinator.com/item?id=43589042).

* [Show HN: Corral – A Visual Logic Puzzle About Enclosing Numbers](https://mohammed321.github.io/projects/corral_web/index.html) - Enjoy an innovative twist on numerical logic puzzles with an engaging and visually appealing game. [Comments](https://news.ycombinator.com/item?id=43591060).

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

* [2025-04-05, 09:27:00](https://soylentnews.org/meta/article.pl?sid=25/04/05/0926221&amp;from=rss) - [Problem with the Poll](https://soylentnews.org/meta/article.pl?sid=25/04/05/0926221&amp;from=rss)
* [2025-04-05, 08:56:33](https://news.ycombinator.com/item?id=43592003) - [Public domain technical books published before 1964](http://www.tubebooks.org/technical_books_online.htm)
* [2025-04-05, 08:22:46](https://news.ycombinator.com/item?id=43591866) - [Protoplanetary Disks Are Smaller Than Expected](https://www.centauri-dreams.org/2025/04/04/protoplanetary-disks-are-smaller-than-expected/)
* [2025-04-05, 08:15:20](https://lobste.rs/s/9m8ala/bpf_from_scratch_rust) - [BPF From Scratch In Rust](https://yeet.cx/blog/bpf-from-scratch-in-rust/)
* [2025-04-05, 08:12:00](https://soylentnews.org/article.pl?sid=25/04/04/0748212&amp;from=rss) - [Intel and TSMC Join Forces for Groundbreaking Chipmaking Venture](https://soylentnews.org/article.pl?sid=25/04/04/0748212&amp;from=rss)
* [2025-04-05, 07:00:00](https://science.slashdot.org/story/25/04/04/2344217/fram2-crew-returns-to-earth-after-polar-orbit-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fram2 Crew Returns To Earth After Polar Orbit Mission](https://science.slashdot.org/story/25/04/04/2344217/fram2-crew-returns-to-earth-after-polar-orbit-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 06:26:36](https://lobste.rs/s/420rtz/fat12_file_truncation_bug) - [The FAT12 File Truncation Bug](https://www.brutman.com/Adventures_In_Code/FAT12_File_Truncation_Bug/FAT12_File_Truncation_Bug.html)
* [2025-04-05, 06:08:59](https://news.ycombinator.com/item?id=43591246) - [Pytest for Neovim](https://github.com/richardhapb/pytest.nvim)
* [2025-04-05, 06:03:40](https://news.ycombinator.com/item?id=43591225) - [Nebula Sans](https://nebulasans.com/)
* [2025-04-05, 05:33:10](https://news.ycombinator.com/item?id=43591060) - [Show HN: Corral – A Visual Logic Puzzle About Enclosing Numbers](https://mohammed321.github.io/projects/corral_web/index.html)
* [2025-04-05, 05:31:45](https://news.ycombinator.com/item?id=43591050) - [Recreating Daft Punk&apos;s Something About Us](https://thoughts-and-things.ghost.io/recreating-daft-punks-something-about-us/)
* [2025-04-05, 05:22:33](https://news.ycombinator.com/item?id=43590998) - [Show HN: OCR pipeline for ML training (tables, diagrams, math, multilingual)](https://github.com/ses4255/Versatile-OCR-Program)
* [2025-04-05, 05:04:30](https://lobste.rs/s/ofklws/simple_reply) - [A Simple Reply](https://github.com/SeaOfNodes/Simple/blob/main/ASimpleReply.md)
* [2025-04-05, 05:00:00](https://science.slashdot.org/story/25/04/05/0034246/scientists-warn-indonesias-rice-megaproject-faces-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Warn Indonesia&apos;s Rice Megaproject Faces Failure](https://science.slashdot.org/story/25/04/05/0034246/scientists-warn-indonesias-rice-megaproject-faces-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 04:08:02](https://lobste.rs/s/qq7fci/defense_ruthless_managers) - [In defense of ruthless managers](https://www.seangoedecke.com/ruthless-managers/)
* [2025-04-05, 03:30:00](https://slashdot.org/story/25/04/04/2338220/two-teenagers-built-cal-ai-a-photo-calorie-app-with-over-a-million-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Two Teenagers Built &apos;Cal AI&apos;, a Photo Calorie App With Over a Million Users](https://slashdot.org/story/25/04/04/2338220/two-teenagers-built-cal-ai-a-photo-calorie-app-with-over-a-million-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 03:27:00](https://soylentnews.org/article.pl?sid=25/04/04/0739222&amp;from=rss) - [Waste Fires Are on the Rise Largely Thanks to the Lithium-Ion Batteries in Vape Pens](https://soylentnews.org/article.pl?sid=25/04/04/0739222&amp;from=rss)
* [2025-04-05, 03:00:10](https://lobste.rs/s/tjyf9r/first_look_at_modern_attr_css) - [First Look at The Modern attr() in CSS](https://ishadeed.com/article/modern-attr/)
* [2025-04-05, 02:29:58](https://lobste.rs/s/t24ppw/html_nix_2021) - [html.nix (2021)](https://code.tvl.fyi/tree/users/sterni/nix/html/README.md)
* [2025-04-05, 02:15:35](https://news.ycombinator.com/item?id=43589989) - [OpenVertebrate Presents a Database of 13,000 3D Scans of Specimens](https://www.openculture.com/2024/03/openvertebrate-presents-a-massive-database-of-13000-3d-scans-of-vertebrate-specimens.html)
* [2025-04-05, 02:10:27](https://lobste.rs/s/e4q0ub/minecraft_server_freebsd_jails) - [Minecraft Server in FreeBSD Jails Container](https://vermaden.wordpress.com/2025/04/05/minecraft-server-freebsd-jails-container/)
* [2025-04-05, 01:50:09](https://news.ycombinator.com/item?id=43589776) - [Learn electricity and electronics fundamentals without taking a formal course](https://simonmonk.org/tyee7)
* [2025-04-05, 01:00:00](https://news.slashdot.org/story/25/04/04/2357233/wikimedia-drowning-in-ai-bot-traffic-as-crawlers-consume-65-of-resources?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wikimedia Drowning in AI Bot Traffic as Crawlers Consume 65% of Resources](https://news.slashdot.org/story/25/04/04/2357233/wikimedia-drowning-in-ai-bot-traffic-as-crawlers-consume-65-of-resources?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 00:41:10](https://lobste.rs/s/unnozu/how_we_hacked_software_supply_chain_for) - [How We Hacked a Software Supply Chain for $50K](https://www.landh.tech/blog/20250211-hack-supply-chain-for-50k/)
* [2025-04-05, 00:25:12](https://news.ycombinator.com/item?id=43589156) - [Investigating MacPaint&apos;s Source Code](https://ztoz.blog/posts/macpaint-source-code/)
* [2025-04-05, 00:20:00](https://linux.slashdot.org/story/25/04/04/2320234/an-interactive-speed-linux-computer-made-of-only-3-8-pin-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An Interactive-Speed Linux Computer Made of Only 3 8-Pin Chips](https://linux.slashdot.org/story/25/04/04/2320234/an-interactive-speed-linux-computer-made-of-only-3-8-pin-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 00:18:30](https://news.ycombinator.com/item?id=43589119) - [404s – gallery of error 404 page designs](https://www.404s.design/)
* [2025-04-05, 00:10:26](https://lobste.rs/s/m2fjzg/annotated_unix_magic_poster) - [Annotated Unix Magic Poster](https://unixmagic.net)
* [2025-04-05, 00:04:28](https://news.ycombinator.com/item?id=43589042) - [Annotated Unix Magic Poster](https://unixmagic.net/)
* [2025-04-04, 23:40:00](https://mobile.slashdot.org/story/25/04/04/2312231/att-email-to-text-gateway-service-ending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AT&amp;amp;T Email-To-Text Gateway Service Ending](https://mobile.slashdot.org/story/25/04/04/2312231/att-email-to-text-gateway-service-ending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 23:00:00](https://slashdot.org/story/25/04/04/2258217/midjourney-releases-v7-its-first-new-ai-image-model-in-nearly-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Midjourney Releases V7, Its First New AI Image Model In Nearly a Year](https://slashdot.org/story/25/04/04/2258217/midjourney-releases-v7-its-first-new-ai-image-model-in-nearly-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 22:41:00](https://soylentnews.org/article.pl?sid=25/04/03/1326237&amp;from=rss) - [How Perceptions Are Influenced by Expectations: Songbird Study Draws Parallels With Human Speech](https://soylentnews.org/article.pl?sid=25/04/03/1326237&amp;from=rss)
* [2025-04-04, 22:32:13](https://news.ycombinator.com/item?id=43588420) - [Show HN: Clawtype v2.1 – a one-hand chorded USB keyboard and mouse [video]](https://www.youtube.com/watch?v=N2PSiOl-auM)
* [2025-04-04, 22:20:00](https://it.slashdot.org/story/25/04/04/2059211/nsa-warns-fast-flux-threatens-national-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NSA Warns &apos;Fast Flux&apos; Threatens National Security](https://it.slashdot.org/story/25/04/04/2059211/nsa-warns-fast-flux-threatens-national-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 22:07:45](https://lobste.rs/s/1njeoa/structure_interpretation_computer) - [Structure and Interpretation of Computer Programs](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/full-text/book/book.html)
* [2025-04-04, 22:05:25](https://lobste.rs/s/wn2ley/rough_survey_compilation_recompilation) - [A rough survey of compilation, recompilation, and compile-time evaluation](https://www.scattered-thoughts.net/writing/a-rough-survey-of-compilation-recompilation-and-compile-time-evaluation/)
* [2025-04-04, 21:40:00](https://it.slashdot.org/story/25/04/04/2035236/google-launches-sec-gemini-v1-ai-model-to-improve-cybersecurity-defense?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches Sec-Gemini v1 AI Model To Improve Cybersecurity Defense](https://it.slashdot.org/story/25/04/04/2035236/google-launches-sec-gemini-v1-ai-model-to-improve-cybersecurity-defense?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 21:00:00](https://yro.slashdot.org/story/25/04/04/2046255/trump-extends-tiktok-deadline-for-the-second-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Extends TikTok Deadline For the Second Time](https://yro.slashdot.org/story/25/04/04/2046255/trump-extends-tiktok-deadline-for-the-second-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 20:37:35](https://news.ycombinator.com/item?id=43587380) - [The blissful Zen of a good side project](https://joshcollinsworth.com/blog/the-blissful-zen-of-a-good-side-project)
* [2025-04-04, 20:36:21](https://lobste.rs/s/yrj8ch/fundamentals_tensors_vs_tables) - [Fundamentals: Tensors vs. Tables](https://earthmover.io/blog/tensors-vs-tables/)
* [2025-04-04, 20:25:00](https://yro.slashdot.org/story/25/04/04/2023226/ai-avatar-tries-to-argue-case-before-a-new-york-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Avatar Tries To Argue Case Before a New York Court](https://yro.slashdot.org/story/25/04/04/2023226/ai-avatar-tries-to-argue-case-before-a-new-york-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 20:14:25](https://lobste.rs/s/hrrymr/atproto_ethos) - [Atproto Ethos](https://atproto.com/articles/atproto-ethos)
* [2025-04-04, 19:22:37](https://news.ycombinator.com/item?id=43586654) - [An interactive-speed Linux computer made of only 3 8-pin chips](https://dmitry.gr/?r=05.Projects&amp;proj=36.%208pinLinux)
* [2025-04-04, 19:10:19](https://lobste.rs/s/wc2xfl/investigating_macpaint_s_source_code) - [Investigating MacPaint&apos;s Source Code](https://ztoz.blog/posts/macpaint-source-code/)
* [2025-04-04, 18:41:00](https://it.slashdot.org/story/25/04/04/1841244/microsoft-employee-disrupts-50th-anniversary-and-calls-ai-boss-war-profiteer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Employee Disrupts 50th Anniversary and Calls AI Boss &apos;War Profiteer&apos;](https://it.slashdot.org/story/25/04/04/1841244/microsoft-employee-disrupts-50th-anniversary-and-calls-ai-boss-war-profiteer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 18:34:07](https://news.ycombinator.com/item?id=43586157) - [The End of Sierra as We Knew It, Part 1: The Acquisition](https://www.filfre.net/2025/04/the-end-of-sierra-as-we-knew-it-part-1-the-acquisition/)
* [2025-04-04, 18:25:23](https://news.ycombinator.com/item?id=43586073) - [Understanding Machine Learning: From Theory to Algorithms](https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/copy.html)
* [2025-04-04, 17:59:04](https://lobste.rs/s/1yucfb/opinionated_html_serializer_for_php_8_4) - [An opinionated HTML Serializer for PHP 8.4](https://shkspr.mobi/blog/2025/04/an-opinionated-html-serializer-for-php-8-4/)
* [2025-04-04, 17:53:00](https://soylentnews.org/article.pl?sid=25/04/03/1319224&amp;from=rss) - [Executive Order Aims to Make Mining the Primary Use of Public Lands at ‘As Many Sites As Possible’](https://soylentnews.org/article.pl?sid=25/04/03/1319224&amp;from=rss)
* [2025-04-04, 17:24:34](https://lobste.rs/s/6rnhbq/syntactic_musings_on_view_types) - [Syntactic Musings on View Types](https://blog.yoshuawuyts.com/syntactic-musings-on-view-types)
* [2025-04-04, 17:03:00](https://it.slashdot.org/story/25/04/04/174220/hackers-strike-australias-largest-pension-funds-in-coordinated-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Strike Australia&apos;s Largest Pension Funds in Coordinated Attacks](https://it.slashdot.org/story/25/04/04/174220/hackers-strike-australias-largest-pension-funds-in-coordinated-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 16:13:42](https://lobste.rs/s/o0xmgd/clawtype_custom_wearable_chorded) - [Clawtype - a custom wearable chorded keyboard &amp; mouse](https://github.com/akavel/clawtype)
* [2025-04-04, 16:06:00](https://it.slashdot.org/story/25/04/04/166231/windows-11-poised-to-beat-10-mostly-because-it-has-to?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 11 Poised To Beat 10, Mostly Because It Has To](https://it.slashdot.org/story/25/04/04/166231/windows-11-poised-to-beat-10-mostly-because-it-has-to?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 15:59:47](https://lobste.rs/s/w9l7q5/best_refactoring_you_ve_never_heard) - [The Best Refactoring You&apos;ve Never Heard Of](https://www.pathsensitive.com/2019/07/the-best-refactoring-youve-never-heard.html)
* [2025-04-04, 15:59:28](https://news.ycombinator.com/item?id=43584303) - [Kerosene did not save the sperm whale (2024)](https://edconway.substack.com/p/no-kerosene-did-not-save-the-sperm)
* [2025-04-04, 15:55:37](https://lobste.rs/s/dlrmfi/on_javascript_s_weirdness) - [On JavaScript&apos;s Weirdness](https://stack-auth.com/blog/on-javascripts-weirdness)
* [2025-04-04, 15:31:55](https://lobste.rs/s/ndlwoh/wizard_his_shell) - [The Wizard and His Shell](https://terminal.click/posts/2025/04/the-wizard-and-his-shell/)
* [2025-04-04, 15:20:00](https://slashdot.org/story/25/04/04/1512247/ai-could-affect-40-of-jobs-and-widen-inequality-between-nations-un-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Could Affect 40% of Jobs and Widen Inequality Between Nations, UN Warns](https://slashdot.org/story/25/04/04/1512247/ai-could-affect-40-of-jobs-and-widen-inequality-between-nations-un-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 15:03:04](https://news.ycombinator.com/item?id=43583478) - [Show HN: uWrap.js – A faster and more accurate text wrapping util in &lt; 2KB](https://github.com/leeoniya/uWrap)
* [2025-04-04, 13:10:00](https://soylentnews.org/article.pl?sid=25/04/03/0151238&amp;from=rss) - [Notes on the Pentium&apos;s Microcode Circuitry](https://soylentnews.org/article.pl?sid=25/04/03/0151238&amp;from=rss)
* [2025-04-04, 09:13:38](https://lobste.rs/s/reznwf/pitfalls_safe_rust) - [Pitfalls of Safe Rust](https://corrode.dev/blog/pitfalls-of-safe-rust/)
* [2025-04-04, 08:28:00](https://soylentnews.org/article.pl?sid=25/04/03/0149258&amp;from=rss) - [What Drives Our Cravings for Food and Drink? Neurons in the Amygdala May Play a Key Role](https://soylentnews.org/article.pl?sid=25/04/03/0149258&amp;from=rss)
* [2025-04-04, 08:10:15](https://lobste.rs/s/nq7bzj/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/nq7bzj/what_are_you_doing_this_weekend)
* [2025-04-04, 05:37:49](https://lobste.rs/s/afmbja/security_dsa_5892_1_atop_security_update) - [[SECURITY] [DSA 5892-1] atop security update](https://lists.debian.org/debian-security-announce/2025/msg00054.html)
* [2025-04-04, 03:43:00](https://soylentnews.org/article.pl?sid=25/04/03/0144235&amp;from=rss) - [AI Bots Strain Wikimedia as Bandwidth Surges 50%](https://soylentnews.org/article.pl?sid=25/04/03/0144235&amp;from=rss)
* [2025-04-03, 23:04:00](https://soylentnews.org/article.pl?sid=25/04/03/0137241&amp;from=rss) - [Does Listening Really Change Minds? New Study Challenges Common Assumptions](https://soylentnews.org/article.pl?sid=25/04/03/0137241&amp;from=rss)
* [2025-04-03, 22:46:18](https://lobste.rs/s/lak6et/why_i_stopped_using_ai_code_editors) - [Why I stopped using AI code editors](https://lucianonooijen.com/blog/why-i-stopped-using-ai-code-editors/)
* [2025-04-03, 18:17:00](https://soylentnews.org/article.pl?sid=25/04/02/038211&amp;from=rss) - [The April Fools Joke That Might Have Got Me Fired](https://soylentnews.org/article.pl?sid=25/04/02/038211&amp;from=rss)
* [2025-04-03, 13:35:00](https://soylentnews.org/article.pl?sid=25/04/02/036222&amp;from=rss) - [News Outlets Fighting Back Against Distrust With \&quot;Ethics Boxes\&quot;??](https://soylentnews.org/article.pl?sid=25/04/02/036222&amp;from=rss)
* [2025-04-03, 11:11:40](https://lobste.rs/s/trlke6/steam_deck_is_software_freedom_friendly) - [The Steam Deck is Software-Freedom friendly](https://agnishom.github.io/blog/2024/steam-deck/)
* [2025-04-03, 08:52:00](https://soylentnews.org/article.pl?sid=25/04/02/034207&amp;from=rss) - [First Orbital Rocket Launched From Mainland Europe Crashes After Takeoff](https://soylentnews.org/article.pl?sid=25/04/02/034207&amp;from=rss)
* [2025-04-03, 04:06:00](https://soylentnews.org/article.pl?sid=25/04/01/1135252&amp;from=rss) - [Honeybee Deaths Surge in U.S.: &apos;Something Real Bad is Going on&apos;](https://soylentnews.org/article.pl?sid=25/04/01/1135252&amp;from=rss)
* [2025-04-02, 23:22:00](https://soylentnews.org/article.pl?sid=25/03/31/0416212&amp;from=rss) - [FuguIta: OpenBSD Live CD - Celebrates Their 20th Anniversary!](https://soylentnews.org/article.pl?sid=25/03/31/0416212&amp;from=rss)
* [2025-04-02, 16:24:00](https://soylentnews.org/article.pl?sid=25/03/31/1729253&amp;from=rss) - [AI Search Engines Cite Incorrect News Sources at an Alarming 60% Rate, Study Says](https://soylentnews.org/article.pl?sid=25/03/31/1729253&amp;from=rss)
* [2025-04-02, 12:41:59](https://news.ycombinator.com/item?id=43555996) - [Coolify: Open-source and self-hostable Heroku / Netlify / Vercel alternative](https://coolify.io/)
* [2025-04-02, 12:41:43](https://news.ycombinator.com/item?id=43555994) - [Scaling Up Reinforcement Learning for Traffic Smoothing](https://bair.berkeley.edu/blog/2025/03/25/rl-av-smoothing/)
* [2025-04-02, 12:11:47](https://news.ycombinator.com/item?id=43555820) - [Show HN: Pets for Cursor](https://news.ycombinator.com/item?id=43555820)
* [2025-04-02, 12:00:39](https://news.ycombinator.com/item?id=43555760) - [Configuration Complexity Clock (2012)](http://mikehadlow.blogspot.com/2012/05/configuration-complexity-clock.html)
* [2025-04-02, 11:38:00](https://soylentnews.org/article.pl?sid=25/03/31/1720218&amp;from=rss) - [Study Reveals Tool Use in Tropical Fish Species](https://soylentnews.org/article.pl?sid=25/03/31/1720218&amp;from=rss)
* [2025-04-02, 11:29:59](https://news.ycombinator.com/item?id=43555597) - [Cell Phone OPSEC for Border Crossings](https://www.schneier.com/blog/archives/2025/04/cell-phone-opsec-for-border-crossings.html)
* [2025-04-02, 11:23:42](https://news.ycombinator.com/item?id=43555552) - [Scientists witness living plant cells generate cellulose and form cell walls](https://phys.org/news/2025-03-scientists-witness-cells-generate-cellulose.html)
* [2025-04-02, 11:04:55](https://news.ycombinator.com/item?id=43555474) - [The Soul of an Old Machine](https://thechipletter.substack.com/p/the-soul-of-an-old-machine)
* [2025-04-02, 10:18:42](https://news.ycombinator.com/item?id=43555249) - [Ferron – A fast, memory-safe web server written in Rust](https://github.com/ferronweb/ferron)
* [2025-04-02, 06:53:00](https://soylentnews.org/article.pl?sid=25/03/31/1714219&amp;from=rss) - [75% of US Scientists Who Answered Nature Poll Consider Leaving](https://soylentnews.org/article.pl?sid=25/03/31/1714219&amp;from=rss)
* [2025-04-02, 06:44:17](https://news.ycombinator.com/item?id=43554214) - [Sparks – A typeface for creating sparklines in text without code](https://github.com/aftertheflood/sparks)
* [2025-04-02, 02:07:00](https://soylentnews.org/article.pl?sid=25/03/31/1248211&amp;from=rss) - [Microsoft&apos;s Killing Script Used to Avoid Microsoft Account in Windows 11](https://soylentnews.org/article.pl?sid=25/03/31/1248211&amp;from=rss)
* [2025-04-01, 21:24:00](https://soylentnews.org/article.pl?sid=25/03/31/1243220&amp;from=rss) - [The Internet Oracle Has Pondered Your Question Deeply - Revisiting an Old Friend](https://soylentnews.org/article.pl?sid=25/03/31/1243220&amp;from=rss)
* [2025-04-01, 16:38:00](https://soylentnews.org/article.pl?sid=25/03/31/1218257&amp;from=rss) - [Back to Cash: Life Without Money in Your Pocket is Not the Utopia Sweden Hoped](https://soylentnews.org/article.pl?sid=25/03/31/1218257&amp;from=rss)
* [2025-04-01, 12:06:56](https://news.ycombinator.com/item?id=43545757) - [Why Does Claude Speak Byzantine Music Notation?](https://fi-le.net/byzantine/)
* [2025-04-01, 11:55:00](https://soylentnews.org/article.pl?sid=25/04/01/0749220&amp;from=rss) - [After Trump&apos;s Decree: Fight for US Funding for Tor, F-Droid and Let&apos;s Encrypt](https://soylentnews.org/article.pl?sid=25/04/01/0749220&amp;from=rss)
* [2025-04-01, 07:09:00](https://soylentnews.org/article.pl?sid=25/03/31/0411203&amp;from=rss) - [Ending Remote Work Has Major Consequences for Women](https://soylentnews.org/article.pl?sid=25/03/31/0411203&amp;from=rss)
* [2025-04-01, 04:59:46](https://news.ycombinator.com/item?id=43543007) - [The DDA Algorithm, explained interactively](https://aaaa.sh/creatures/dda-algorithm-interactive)
* [2025-04-01, 02:23:00](https://soylentnews.org/article.pl?sid=25/03/31/045231&amp;from=rss) - [Word of the Day: Zwitterionic](https://soylentnews.org/article.pl?sid=25/03/31/045231&amp;from=rss)
