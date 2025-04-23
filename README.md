# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Milestones and Innovations

* [On YouTube's 20th Anniversary, the Platform Says Over 20 Trillion Videos Have Been Uploaded](https://news.slashdot.org/story/25/04/23/1457232/on-youtubes-20th-anniversary-the-platform-says-over-20-trillion-videos-have-been-uploaded?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/04/23/1457232/on-youtubes-20th-anniversary-the-platform-says-over-20-trillion-videos-have-been-uploaded?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [CheerpJ 4.0: WebAssembly JVM for the browser, now with Java 11 and JNI support](https://labs.leaningtech.com/blog/cheerpj-4.0) ([comments](https://lobste.rs/s/bhlpgi/cheerpj_4_0_webassembly_jvm_for_browser))

* [Native visionOS platform support](https://github.com/godotengine/godot/pull/105628) ([comments](https://news.ycombinator.com/item?id=43768421))

* [Shopify Must Face Data Privacy Lawsuit In US](https://yro.slashdot.org/story/25/04/22/2215255/shopify-must-face-data-privacy-lawsuit-in-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/04/22/2215255/shopify-must-face-data-privacy-lawsuit-in-us?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Exploration and Research in Computing

* [What is cosh(List(Bool))? Or beyond algebra: analysis of data types](https://nikitadanilov.github.io/aodt.html) ([comments](https://lobste.rs/s/ycnsi3/what_is_cosh_list_bool_beyond_algebra))

* [GPU Compilation with MLIR](https://vectorfold.studio/blog/gpu-compilation) ([comments](https://lobste.rs/s/xq5jrs/gpu_compilation_with_mlir))

* [14 Advanced Python Features](https://blog.edward-li.com/tech/advanced-python-features/) ([comments](https://lobste.rs/s/jvvlpb/14_advanced_python_features))

* [Commodore 64 Assembly, part 4: how does the machine execute machine code?](https://michal.sapka.pl/2025/commodore-64-assembly-part-4-how-does-the-machine-execute-machine-code/) ([comments](https://lobste.rs/s/jqkwak/commodore_64_assembly_part_4_how_does))

## Cybersecurity and System Vulnerabilities

* [How a 20 year old bug in GTA San Andreas surfaced in Windows 11 24H2](https://cookieplmonster.github.io/2025/04/23/gta-san-andreas-win11-24h2-bug/) ([comments](https://lobste.rs/s/vsjb87/how_20_year_old_bug_gta_san_andreas))

* [Exploiting Undefined Behavior in C/C++ Programs for Optimization: A Study on the Performance Impact](https://web.ist.utl.pt/nuno.lopes/pubs/ub-pldi25.pdf) ([comments](https://lobste.rs/s/fywpfw/exploiting_undefined_behavior_c_c))

* [Does using Rust really make your software safer?](https://tweedegolf.nl/en/blog/152/does-using-rust-really-make-your-software-safer) ([comments](https://lobste.rs/s/zjnc6g/does_using_rust_really_make_your_software))

## Cultural and Miscellaneous News

* [The Ghosts of Gaelic](https://www.historytoday.com/archive/behind-times/ghosts-gaelic) ([comments](https://news.ycombinator.com/item?id=43769201))

* [Sixty Years On, We Still Dream of the Arrow](https://watershedmagazine.com/features/sixty-years-on-we-still-dream-of-the-arrow/) ([comments](https://news.ycombinator.com/item?id=43770228))

* [Beer on Board in the Age of Sail (2017)](https://blog.library.si.edu/blog/2017/08/02/beer-board-age-sail/) ([comments](https://news.ycombinator.com/item?id=43769289))

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

* [2025-04-23, 15:52:45](https://news.ycombinator.com/item?id=43773537) - [The Danglepoise](https://www.sallery.co.uk/danglepoise)
* [2025-04-23, 15:20:00](https://news.slashdot.org/story/25/04/23/1457232/on-youtubes-20th-anniversary-the-platform-says-over-20-trillion-videos-have-been-uploaded?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [On YouTube&apos;s 20th Anniversary, the Platform Says Over 20 Trillion Videos Have Been Uploaded](https://news.slashdot.org/story/25/04/23/1457232/on-youtubes-20th-anniversary-the-platform-says-over-20-trillion-videos-have-been-uploaded?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-23, 15:13:13](https://lobste.rs/s/ycnsi3/what_is_cosh_list_bool_beyond_algebra) - [What is cosh(List(Bool))? Or beyond algebra: analysis of data types](https://nikitadanilov.github.io/aodt.html)
* [2025-04-23, 15:02:31](https://lobste.rs/s/bhlpgi/cheerpj_4_0_webassembly_jvm_for_browser) - [CheerpJ 4.0: WebAssembly JVM for the browser, now with Java 11 and JNI support](https://labs.leaningtech.com/blog/cheerpj-4.0)
* [2025-04-23, 14:47:45](https://lobste.rs/s/vsjb87/how_20_year_old_bug_gta_san_andreas) - [How a 20 year old bug in GTA San Andreas surfaced in Windows 11 24H2](https://cookieplmonster.github.io/2025/04/23/gta-san-andreas-win11-24h2-bug/)
* [2025-04-23, 14:44:00](https://it.slashdot.org/story/25/04/23/1445200/ubs-and-gartner-trim-smartphone-pc-forecasts-amid-tariff-fears?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UBS and Gartner Trim Smartphone, PC Forecasts Amid Tariff Fears](https://it.slashdot.org/story/25/04/23/1445200/ubs-and-gartner-trim-smartphone-pc-forecasts-amid-tariff-fears?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-23, 14:14:30](https://news.ycombinator.com/item?id=43772503) - [Automated Antenna Design with Evolutionary Algorithms [pdf] (2006)](https://ntrs.nasa.gov/api/citations/20060024675/downloads/20060024675.pdf)
* [2025-04-23, 14:01:00](https://tech.slashdot.org/story/25/04/23/140227/deep-sea-fishers-fight-for-wi-fi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Deep-Sea Fishers Fight for Wi-Fi](https://tech.slashdot.org/story/25/04/23/140227/deep-sea-fishers-fight-for-wi-fi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-23, 14:00:11](https://news.ycombinator.com/item?id=43772311) - [How a 20 year old bug in GTA San Andreas surfaced in Windows 11 24H2](https://cookieplmonster.github.io/2025/04/23/gta-san-andreas-win11-24h2-bug/)
* [2025-04-23, 13:00:32](https://news.ycombinator.com/item?id=43771645) - [How I Blog with Obsidian, Hugo, GitHub, and Cloudflare – Zero Cost, Fully Owned](https://ingau.me/blog/how-i-write-my-blogs-in-obsidian-and-publish-instantly/)
* [2025-04-23, 13:00:00](https://yro.slashdot.org/story/25/04/22/2215255/shopify-must-face-data-privacy-lawsuit-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Shopify Must Face Data Privacy Lawsuit In US](https://yro.slashdot.org/story/25/04/22/2215255/shopify-must-face-data-privacy-lawsuit-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-23, 12:39:42](https://lobste.rs/s/1ypcby/kworkflow_tool_talk_from_fosdem_2025) - [kworkflow tool talk from FOSDEM 2025](https://melissawen.github.io/blog/2025/04/22/fosdem-2025-kernel-devroom-kworkflow-talk)
* [2025-04-23, 12:35:49](https://news.ycombinator.com/item?id=43771365) - [Show HN: Node.js video tutorials where you can edit and run the code](https://news.ycombinator.com/item?id=43771365)
* [2025-04-23, 12:26:18](https://lobste.rs/s/gamz2d/give_it_time) - [Give it time](https://ismaelcelis.com/posts/2025-04-give-it-time/)
* [2025-04-23, 12:16:04](https://lobste.rs/s/zjnc6g/does_using_rust_really_make_your_software) - [Does using Rust really make your software safer?](https://tweedegolf.nl/en/blog/152/does-using-rust-really-make-your-software-safer)
* [2025-04-23, 12:07:52](https://lobste.rs/s/xq5jrs/gpu_compilation_with_mlir) - [GPU Compilation with MLIR](https://vectorfold.studio/blog/gpu-compilation)
* [2025-04-23, 11:36:07](https://lobste.rs/s/jvvlpb/14_advanced_python_features) - [14 Advanced Python Features](https://blog.edward-li.com/tech/advanced-python-features/)
* [2025-04-23, 11:13:00](https://soylentnews.org/article.pl?sid=25/04/22/011227&amp;from=rss) - [ChatGPT is Now a Potent Tool for Finding the Locations of Photos, Raising Doxxing Concerns](https://soylentnews.org/article.pl?sid=25/04/22/011227&amp;from=rss)
* [2025-04-23, 10:52:08](https://news.ycombinator.com/item?id=43770615) - [Collatz&apos;s Ant](https://gbragafibra.github.io/2025/01/08/collatz_ant2.html)
* [2025-04-23, 10:21:58](https://news.ycombinator.com/item?id=43770446) - [Geocoding APIs compared: Pricing, free tiers and terms of use](https://www.bitoff.org/geocoding-apis-comparison/)
* [2025-04-23, 10:21:57](https://news.ycombinator.com/item?id=43770445) - [MinC Is Not Cygwin](https://minc.commandlinerevolution.nl/english/home.html)
* [2025-04-23, 10:01:04](https://news.ycombinator.com/item?id=43770337) - [Apple and Meta fined millions for breaching EU law](https://ca.finance.yahoo.com/news/apple-fined-570-million-meta-094701712.html)
* [2025-04-23, 09:40:11](https://news.ycombinator.com/item?id=43770228) - [Sixty Years On, We Still Dream of the Arrow](https://watershedmagazine.com/features/sixty-years-on-we-still-dream-of-the-arrow/)
* [2025-04-23, 09:05:20](https://lobste.rs/s/ygwmhh/reference_huffman_coding) - [Reference Huffman coding](https://www.nayuki.io/page/reference-huffman-coding)
* [2025-04-23, 08:50:09](https://lobste.rs/s/jqkwak/commodore_64_assembly_part_4_how_does) - [Commodore 64 Assembly, part 4: how does the machine execute machine code?](https://michal.sapka.pl/2025/commodore-64-assembly-part-4-how-does-the-machine-execute-machine-code/)
* [2025-04-23, 08:49:34](https://news.ycombinator.com/item?id=43769936) - [The Gruen Transfer is consuming the internet](https://sebs.website/blog/the%20gruen-transfer-is-consuming-the-internet)
* [2025-04-23, 08:25:59](https://lobste.rs/s/ffq9te/coding_as_craft_going_back_old_gym) - [Coding as Craft: Going Back to the Old Gym](https://cekrem.github.io/posts/coding-as-craft-going-back-to-the-old-gym/)
* [2025-04-23, 07:36:34](https://lobste.rs/s/qr4qdv/how_quickly_charge_your_smartphone_fast) - [How to quickly charge your smartphone: fast charging technologies in detail](https://eb43.github.io/articles/fast-charging-technologies-in-detail.html)
* [2025-04-23, 07:20:33](https://news.ycombinator.com/item?id=43769482) - [Open Source Projects Receive Funding to Reclaim the Public Internet](https://nlnet.nl/news/2025/20250422-announcement-grants-CommonsFund.html)
* [2025-04-23, 07:20:19](https://news.ycombinator.com/item?id=43769478) - [Pixel is a unit of length and area](https://www.nayuki.io/page/pixel-is-a-unit-of-length-and-area)
* [2025-04-23, 07:17:16](https://news.ycombinator.com/item?id=43769461) - [Why Does My eBPF Program Work on One Kernel but Fail on Another?](https://ebpfchirp.substack.com/p/why-does-my-ebpf-program-work-on)
* [2025-04-23, 07:00:00](https://tech.slashdot.org/story/25/04/22/226251/california-is-about-to-run-out-of-license-plate-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Is About To Run Out of License Plate Numbers](https://tech.slashdot.org/story/25/04/22/226251/california-is-about-to-run-out-of-license-plate-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-23, 06:50:23](https://lobste.rs/s/fdfhkp/hyperscaling_have_i_been_pwned_with) - [Hyperscaling Have I Been Pwned with Cloudflare Workers and Caching](https://www.troyhunt.com/closer-to-the-edge-hyperscaling-have-i-been-pwned-with-cloudflare-workers-and-caching/)
* [2025-04-23, 06:42:31](https://news.ycombinator.com/item?id=43769289) - [Beer on Board in the Age of Sail (2017)](https://blog.library.si.edu/blog/2017/08/02/beer-board-age-sail/)
* [2025-04-23, 06:27:00](https://soylentnews.org/article.pl?sid=25/04/22/0055253&amp;from=rss) - [Major Blow For Cheap Handhelds As Anbernic No Longer Ships To The US](https://soylentnews.org/article.pl?sid=25/04/22/0055253&amp;from=rss)
* [2025-04-23, 06:23:10](https://news.ycombinator.com/item?id=43769201) - [The Ghosts of Gaelic](https://www.historytoday.com/archive/behind-times/ghosts-gaelic)
* [2025-04-23, 03:37:05](https://news.ycombinator.com/item?id=43768421) - [Native visionOS platform support](https://github.com/godotengine/godot/pull/105628)
* [2025-04-23, 03:30:00](https://tech.slashdot.org/story/25/04/22/220256/yahoo-will-give-millions-to-a-settlement-fund-for-chinese-dissidents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Yahoo Will Give Millions To a Settlement Fund For Chinese Dissidents](https://tech.slashdot.org/story/25/04/22/220256/yahoo-will-give-millions-to-a-settlement-fund-for-chinese-dissidents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-23, 02:47:58](https://lobste.rs/s/fywpfw/exploiting_undefined_behavior_c_c) - [Exploiting Undefined Behavior in C/C++ Programs for Optimization: A Study on the Performance Impact](https://web.ist.utl.pt/nuno.lopes/pubs/ub-pldi25.pdf)
* [2025-04-23, 01:42:00](https://soylentnews.org/article.pl?sid=25/04/22/0052214&amp;from=rss) - [Cancer-Causing Arsenic is Building Up in the World&apos;s Rice](https://soylentnews.org/article.pl?sid=25/04/22/0052214&amp;from=rss)
* [2025-04-23, 01:41:00](https://slashdot.org/story/25/04/23/0141226/intel-to-slash-over-20-of-workforce-in-major-restructuring-move?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel To Slash Over 20% of Workforce in Major Restructuring Move](https://slashdot.org/story/25/04/23/0141226/intel-to-slash-over-20-of-workforce-in-major-restructuring-move?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-23, 00:45:00](https://yro.slashdot.org/story/25/04/22/191219/un-says-asian-scam-call-center-epidemic-expanding-globally-amid-political-heat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UN Says Asian Scam Call Center Epidemic Expanding Globally Amid Political Heat](https://yro.slashdot.org/story/25/04/22/191219/un-says-asian-scam-call-center-epidemic-expanding-globally-amid-political-heat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-23, 00:02:00](https://entertainment.slashdot.org/story/25/04/22/2125229/warner-bros-discovery-starts-max-password-sharing-crackdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warner Bros. Discovery Starts Max Password-Sharing Crackdown](https://entertainment.slashdot.org/story/25/04/22/2125229/warner-bros-discovery-starts-max-password-sharing-crackdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 23:20:00](https://slashdot.org/story/25/04/22/2118226/business-insider-founder-creates-ai-exec-for-his-new-newsroom-immediately-hits-on-her?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Business Insider Founder Creates AI Exec For His New Newsroom, Immediately Hits On Her](https://slashdot.org/story/25/04/22/2118226/business-insider-founder-creates-ai-exec-for-his-new-newsroom-immediately-hits-on-her?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 22:40:00](https://yro.slashdot.org/story/25/04/22/197258/vercel-slams-laliga-piracy-blocks-as-unaccountable-internet-censorship?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vercel Slams LaLiga Piracy Blocks As &apos;Unaccountable Internet Censorship&apos;](https://yro.slashdot.org/story/25/04/22/197258/vercel-slams-laliga-piracy-blocks-as-unaccountable-internet-censorship?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 22:00:00](https://yro.slashdot.org/story/25/04/22/2154251/openai-would-buy-googles-chrome-exec-testifies-at-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Would Buy Google&apos;s Chrome, Exec Testifies At Trial](https://yro.slashdot.org/story/25/04/22/2154251/openai-would-buy-googles-chrome-exec-testifies-at-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 21:58:50](https://news.ycombinator.com/item?id=43766715) - [CSS Hell](https://csshell.com/)
* [2025-04-22, 21:20:00](https://slashdot.org/story/25/04/22/1854208/anthropic-warns-fully-ai-employees-are-a-year-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Warns Fully AI Employees Are a Year Away](https://slashdot.org/story/25/04/22/1854208/anthropic-warns-fully-ai-employees-are-a-year-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 21:16:41](https://lobste.rs/s/aassef/clickhouse_gets_lazier_faster) - [ClickHouse gets lazier (and faster): Introducing lazy materialization](https://clickhouse.com/blog/clickhouse-gets-lazier-and-faster-introducing-lazy-materialization)
* [2025-04-22, 20:57:00](https://soylentnews.org/article.pl?sid=25/04/22/0038216&amp;from=rss) - [CA/Browser Forum Votes to Reduce the Maximum Validity Term of SSL/TLS Certs to 47 Days by 2029](https://soylentnews.org/article.pl?sid=25/04/22/0038216&amp;from=rss)
* [2025-04-22, 20:54:52](https://news.ycombinator.com/item?id=43766200) - [Atuin Desktop: Runbooks That Run](https://blog.atuin.sh/atuin-desktop-runbooks-that-run/)
* [2025-04-22, 20:48:51](https://lobste.rs/s/iqiglx/where_flakes_fall_off_eval_cache_tale) - [Where Flakes Fall Off: an Eval Cache Tale](https://santi.net.br/blog/where-flakes-fall-off-an-eval-cache-tale/)
* [2025-04-22, 20:47:37](https://lobste.rs/s/q5vfvv/nine_reasons_use_osh) - [Nine Reasons to Use OSH](https://oils.pub/osh.html)
* [2025-04-22, 20:40:00](https://entertainment.slashdot.org/story/25/04/22/1844233/man-buys-racetrack-ends-up-launching-the-netflix-of-grassroots-motorsports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Man Buys Racetrack, Ends Up Launching the Netflix of Grassroots Motorsports](https://entertainment.slashdot.org/story/25/04/22/1844233/man-buys-racetrack-ends-up-launching-the-netflix-of-grassroots-motorsports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 20:34:06](https://lobste.rs/s/id6bpe/no_really_you_can_t_branch_datomic_from) - [No, really, you can’t branch Datomic from the past](https://blog.danieljanus.pl/2025/04/22/datomic-forking-the-past/)
* [2025-04-22, 20:00:00](https://slashdot.org/story/25/04/22/1746233/walmart-is-ditching-zip-codes-in-favor-of-honeycomb-style-maps-as-it-looks-to-speed-up-deliveries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart is Ditching ZIP Codes in Favor of Honeycomb-Style Maps As It Looks To Speed Up Deliveries](https://slashdot.org/story/25/04/22/1746233/walmart-is-ditching-zip-codes-in-favor-of-honeycomb-style-maps-as-it-looks-to-speed-up-deliveries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 19:20:13](https://lobste.rs/s/p7rb36/a5_pentagonal_spatial_index) - [A5 - Pentagonal Spatial Index](https://a5geo.org/)
* [2025-04-22, 18:39:20](https://news.ycombinator.com/item?id=43765011) - [Sapphire: Rust based package manager for macOS](https://github.com/alexykn/sapphire)
* [2025-04-22, 16:33:21](https://news.ycombinator.com/item?id=43763967) - [Show HN: Rowboat – Open-source IDE for multi-agent systems](https://github.com/rowboatlabs/rowboat)
* [2025-04-22, 16:10:00](https://soylentnews.org/article.pl?sid=25/04/22/0023201&amp;from=rss) - [Tesla Accused of Speeding Up Odometers So Their Warranties Expire Faster](https://soylentnews.org/article.pl?sid=25/04/22/0023201&amp;from=rss)
* [2025-04-22, 16:03:32](https://news.ycombinator.com/item?id=43763688) - [ClickHouse gets lazier and faster: Introducing lazy materialization](https://clickhouse.com/blog/clickhouse-gets-lazier-and-faster-introducing-lazy-materialization)
* [2025-04-22, 15:55:12](https://news.ycombinator.com/item?id=43763614) - [Algebraic Semantics for Machine Knitting](https://uwplse.org/2025/03/31/Algebraic-Knitting.html)
* [2025-04-22, 15:11:15](https://lobste.rs/s/84ysx5/start_with_clean_slate_integration) - [Start with a clean slate: Integration testing with PostgreSQL](https://blog.dogac.dev/pg-test-table-track/)
* [2025-04-22, 11:27:00](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss) - [Oldest Serving US Astronaut Returns to Earth on 70th Birthday](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss)
* [2025-04-22, 10:00:45](https://lobste.rs/s/wnuoeu/evertop_e_ink_ibm_xt_clone_with_solar_power) - [Evertop: E-ink IBM XT clone with solar power, ultra low power consumption, and ultra long battery life](https://github.com/ericjenott/Evertop)
* [2025-04-22, 08:56:10](https://lobste.rs/s/tlbyzv/make_your_own_internet_presence_with) - [Make Your Own Internet Presence with NetBSD and a 1 euro VPS – Part 1: Your Blog](https://it-notes.dragas.net/2025/04/22/make-your-own-internet-presence-with-netbsd-and-a-1-euro-vps-part-1-your-blog/)
* [2025-04-22, 06:44:00](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss) - [Scientists Can Tell Healthy And Cancerous Cells Apart By How They Move](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss)
* [2025-04-22, 06:31:29](https://lobste.rs/s/ydxus1/pipelining_might_be_my_favorite) - [Pipelining might be my favorite programming language feature](https://herecomesthemoon.net/2025/04/pipelining/)
* [2025-04-22, 06:28:00](https://soylentnews.org/meta/article.pl?sid=25/04/22/0619254&amp;from=rss) - [ \&quot;Only 2 submissions in the queue.\&quot;](https://soylentnews.org/meta/article.pl?sid=25/04/22/0619254&amp;from=rss)
* [2025-04-22, 04:27:02](https://lobste.rs/s/18ycoz/attacking_my_landlord_s_boiler) - [Attacking My Landlord&apos;s Boiler](https://blog.videah.net/attacking-my-landlords-boiler/)
* [2025-04-22, 02:01:00](https://soylentnews.org/article.pl?sid=25/04/20/1820252&amp;from=rss) - [Jim Zemlin on Taking a &apos;Portfolio Approach&apos; to Linux Foundation Projects](https://soylentnews.org/article.pl?sid=25/04/20/1820252&amp;from=rss)
* [2025-04-21, 21:13:00](https://soylentnews.org/article.pl?sid=25/04/20/0513237&amp;from=rss) - [Deepseek Open Source model Promotes Fast Innovation and Extensive Application in China](https://soylentnews.org/article.pl?sid=25/04/20/0513237&amp;from=rss)
* [2025-04-21, 19:31:00](https://lobste.rs/s/eqqops/this_blog_is_hosted_on_nintendo_wii) - [This blog is hosted on a Nintendo Wii](https://blog.infected.systems/posts/2025-04-21-this-blog-is-hosted-on-a-nintendo-wii/)
* [2025-04-21, 16:28:00](https://soylentnews.org/article.pl?sid=25/04/20/059216&amp;from=rss) - [The Universe Isn&apos;t Just Expanding—It May be Spinning](https://soylentnews.org/article.pl?sid=25/04/20/059216&amp;from=rss)
* [2025-04-21, 11:41:00](https://soylentnews.org/article.pl?sid=25/04/20/051250&amp;from=rss) - [Google Introduces Firebase Studio, an End-to-End Platform That Builds Custom Apps in-Browser](https://soylentnews.org/article.pl?sid=25/04/20/051250&amp;from=rss)
* [2025-04-21, 09:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss) - [Pope Francis Has Died on Easter Monday Aged 88](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss)
* [2025-04-21, 06:53:00](https://soylentnews.org/article.pl?sid=25/04/20/0455204&amp;from=rss) - [Intel Agrees to Sell Controlling Stake in Altera Chip Business](https://soylentnews.org/article.pl?sid=25/04/20/0455204&amp;from=rss)
* [2025-04-21, 02:08:00](https://soylentnews.org/article.pl?sid=25/04/20/0452238&amp;from=rss) - [Google Has Illegal Advertising Monopoly, Judge Rules](https://soylentnews.org/article.pl?sid=25/04/20/0452238&amp;from=rss)
* [2025-04-20, 23:23:43](https://news.ycombinator.com/item?id=43747283) - [Restoring Old Software for Child Learning Safety](https://rietta.com/blog/child-learning-with-old-software/)
* [2025-04-20, 22:11:47](https://news.ycombinator.com/item?id=43746868) - [Physicists Designed a Quantum Rubik&apos;s Cube and Found the Best Way to Solve It](https://www.sciencealert.com/physicists-designed-a-quantum-rubiks-cube-and-found-the-best-way-to-solve-it)
* [2025-04-20, 21:22:00](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss) - [Astronomers Say They’ve Recorded the Strongest Sign Yet of Life Beyond Earth](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss)
* [2025-04-20, 21:07:03](https://news.ycombinator.com/item?id=43746532) - [Demystifying decorators: They don&apos;t need to be cryptic](https://www.thepythoncodingstack.com/p/demystifying-python-decorators)
* [2025-04-20, 16:39:00](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss) - [Some Tropical Trees Act as Lightning Rods to Fend Off Rivals](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss)
* [2025-04-20, 12:36:05](https://news.ycombinator.com/item?id=43743399) - [How MOS 6502 Illegal Opcodes Work – Michael Steil](https://www.pagetable.com/?p=39)
* [2025-04-20, 11:55:00](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss) - [Spyware Maker NSO Group is Paving a Path Back Into Trump’s America](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss)
* [2025-04-20, 07:13:00](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss) - [Here&apos;s How a Satellite Ended Up as a Ghostly Apparition on Google Earth](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss)
* [2025-04-20, 02:28:00](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss) - [Everyone in AI is Talking About Manus. We Put It to the Test.](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss)
* [2025-04-20, 01:13:41](https://news.ycombinator.com/item?id=43740803) - [Subnanosecond Flash Memory](https://www.nature.com/articles/s41586-025-08839-w)
* [2025-04-19, 21:47:00](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss) - [Medical Cannabis Shows Potential to Fight Cancer, Largest-Ever Study Finds](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss)
* [2025-04-19, 20:52:01](https://news.ycombinator.com/item?id=43739374) - [Understand Your Dependencies](https://deps.dev/)
* [2025-04-19, 17:02:00](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss) - [How a 1980s Toy Robot Arm Inspired Modern Robotics](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss)
* [2025-04-19, 12:19:00](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss) - [Inside arXiv—the Most Transformative Platform in All of Science](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss)
* [2025-04-19, 08:37:00](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss) - [Vibe Coding _ !@#$% Kids! ](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss)
* [2025-04-19, 07:50:38](https://news.ycombinator.com/item?id=43734911) - [Solidjs: Simple and performant reactivity for building user interfaces](https://www.solidjs.com/)
* [2025-04-19, 04:53:00](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss) - [UK Founders Grow Frustrated Over Dearth of Funding: &apos;the Problem is Getting Worse&apos;](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss)
* [2025-04-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss) - [Dirty Tricks 6502 Programmers Use](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss)
