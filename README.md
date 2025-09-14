# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Development

* [Refurb Weekend: Silicon Graphics Indigo² Impact 10000](https://oldvcr.blogspot.com/2025/09/refurb-weekend-silicon-graphics-indigo.html) - A deep dive into the restoration of a classic Silicon Graphics machine, perfect for vintage computing enthusiasts. ([Hacker News comments](https://news.ycombinator.com/item?id=45237717) and [Lobsters comments](https://lobste.rs/s/0nmyzm/refurb_weekend_silicon_graphics_indigo))

* [a few notes on ratelimiting](https://dotat.at/@/2025-09-14-ratelimit.html) - An overview of rate-limiting techniques, useful for managing system resources. ([Lobsters comments](https://lobste.rs/s/kkqhue/few_notes_on_ratelimiting))

* [bsd-user-4-linux project](https://www.freebsd.org/status/report-2024-10-2024-12/qemu_l4b/) - Updates on a project for running BSD programs on Linux via QEMU. ([Lobsters comments](https://lobste.rs/s/y8fio7/bsd_user_4_linux_project))

* [Redox Development Priorities for 2025/26](https://www.redox-os.org/news/development-priorities-2025-09/) - Insights into the ongoing development and goals of this Rust-based operating system. ([Lobsters comments](https://lobste.rs/s/xtb30i/redox_development_priorities_for_2025_26))

* [Pass: Unix Password Manager](https://www.passwordstore.org/) - A revisit to a Unix-based password management tool. ([Hacker News comments](https://news.ycombinator.com/item?id=45236079) and [Lobsters comments](https://lobste.rs/s/lmdyti/pass_unix_password_manager))

* [Diesel 2.3.0](https://diesel.rs/news/2_3_0_release.html) - A release update for the popular Rust-based ORM. ([Lobsters comments](https://lobste.rs/s/mn2jkz/diesel_2_3_0))

## Science and Space Exploration

* [Dragonfly Mission to Saturn's Moon Titan: Behind Schedule, Overbudget, Says NASA Inspector General](https://science.slashdot.org/story/25/09/14/0026256/dragonfly-mission-to-saturns-moon-titan-behind-schedule-overbudget-says-nasa-inspector-general?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The challenges and delays surrounding NASA's ambitious Titan mission.

* [Scientists Discover ‘Clearest Sign’ Yet of Life on Mars](https://soylentnews.org/article.pl?sid=25/09/10/2228216&from=rss) - Potential breakthrough evidence of life on the red planet.

* [Physicists Made a Time Crystal We Can Actually See](https://soylentnews.org/article.pl?sid=25/09/13/0018206&from=rss) - A remarkable experimental creation of a time crystal in the lab.

## Artificial Intelligence and Machine Learning

* [Why you’d issue a branded stablecoin](https://text-incubation.com/Why+you%27d+issue+a+branded+stablecoin+like+McDonaldsCoin) - Exploring the practical applications of branded stablecoins like McDonaldsCoin. ([Hacker News comments](https://news.ycombinator.com/item?id=45237035))

* [AI's Free Web Scraping Days May be Over, Thanks to This New Licensing Protocol](https://soylentnews.org/article.pl?sid=25/09/11/0338253&utm_source=rss1.0mainlinkanon&utm_medium=feed) - An exploration of new licensing schemes that may hinder unrestricted AI training.

## Social Insights and Modern Challenges

* [If my kids excel, will they move away?](https://jeffreybigham.com/blog/2025/where-will-my-kids-go.html) - A heartfelt reflection on parental aspirations and societal mobility. ([Hacker News comments](https://news.ycombinator.com/item?id=45236411))

* [The case against social media is stronger than you think](https://arachnemag.substack.com/p/the-case-against-social-media-is) - An analysis of the detrimental effects of social media. ([Hacker News comments](https://news.ycombinator.com/item?id=45234323))

* [Myanmar's 'Cyber-Slavery Compounds' May Hold 100,000 Trafficked People](https://yro.slashdot.org/story/25/09/13/195226/myanmars-cyber-slavery-compounds-may-hold-100000-trafficked-people?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Shocking revelations about human trafficking in Myanmar's shadow economy.

## Heritage and Culture

* [How the restoration of ancient Babylon is drawing tourists back to Iraq](https://www.theartnewspaper.com/2025/09/12/how-the-restoration-of-ancient-babylon-is-helping-to-draw-tourists-back-to-iraq) - Efforts to restore one of the world's most iconic historical sites are revitalizing tourism. ([Hacker News comments](https://news.ycombinator.com/item?id=45236473))

* [Four-year wedding crasher mystery solved](https://www.theguardian.com/uk-news/2025/sep/12/wedding-crasher-mystery-solved-four-years-bride-scotland) - The conclusion of a peculiar mystery involving wedding photos. ([Hacker News comments](https://news.ycombinator.com/item?id=45232562))

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

* [2025-09-14, 05:42:38](https://news.ycombinator.com/item?id=45237717) - [Refurb Weekend: Silicon Graphics Indigo² Impact 10000](http://oldvcr.blogspot.com/2025/09/refurb-weekend-silicon-graphics-indigo.html)
* [2025-09-14, 05:40:30](https://lobste.rs/s/0nmyzm/refurb_weekend_silicon_graphics_indigo) - [Refurb weekend: Silicon Graphics Indigo² IMPACT 10000](http://oldvcr.blogspot.com/2025/09/refurb-weekend-silicon-graphics-indigo.html)
* [2025-09-14, 05:14:00](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss) - [Fingerspitzengefühl](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss)
* [2025-09-14, 03:34:59](https://lobste.rs/s/kkqhue/few_notes_on_ratelimiting) - [a few notes on ratelimiting](https://dotat.at/@/2025-09-14-ratelimit.html)
* [2025-09-14, 03:34:00](https://developers.slashdot.org/story/25/09/14/0134239/is-perl-the-worlds-10th-most-popular-programming-language?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Perl the World&apos;s 10th Most Popular Programming Language?](https://developers.slashdot.org/story/25/09/14/0134239/is-perl-the-worlds-10th-most-popular-programming-language?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-14, 03:29:35](https://news.ycombinator.com/item?id=45237184) - [High Altitude Living – 8,000 ft and above (2021)](https://studioq.com/blog/2021/5/30/high-altitude-living-8000-ft-and-above-2450-meters)
* [2025-09-14, 02:57:00](https://news.ycombinator.com/item?id=45237035) - [Why you’d issue a branded stablecoin](https://text-incubation.com/Why+you%27d+issue+a+branded+stablecoin+like+McDonaldsCoin)
* [2025-09-14, 01:53:31](https://news.ycombinator.com/item?id=45236774) - [Visual programming is stuck on the form](https://interjectedfuture.com/visual-programming-is-stuck-on-the-form/)
* [2025-09-14, 01:34:00](https://science.slashdot.org/story/25/09/14/0026256/dragonfly-mission-to-saturns-moon-titan-behind-schedule-overbudget-says-nasa-inspector-general?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Dragonfly&apos; Mission to Saturn&apos;s Moon Titan: Behind Schedule, Overbudget, Says NASA Inspector General](https://science.slashdot.org/story/25/09/14/0026256/dragonfly-mission-to-saturns-moon-titan-behind-schedule-overbudget-says-nasa-inspector-general?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-14, 01:05:59](https://lobste.rs/s/y8fio7/bsd_user_4_linux_project) - [bsd-user-4-linux project](https://www.freebsd.org/status/report-2024-10-2024-12/qemu_l4b/)
* [2025-09-14, 01:01:03](https://lobste.rs/s/xtb30i/redox_development_priorities_for_2025_26) - [Redox Development Priorities for 2025/26](https://www.redox-os.org/news/development-priorities-2025-09/)
* [2025-09-14, 00:34:25](https://news.ycombinator.com/item?id=45236473) - [How the restoration of ancient Babylon is drawing tourists back to Iraq](https://www.theartnewspaper.com/2025/09/12/how-the-restoration-of-ancient-babylon-is-helping-to-draw-tourists-back-to-iraq)
* [2025-09-14, 00:29:29](https://lobste.rs/s/okz9ir/debian_12_installer_promotes_us_time) - [Debian 12 installer promotes US/* time zones](https://rachelbythebay.com/w/2025/09/12/tz/)
* [2025-09-14, 00:26:00](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss) - [Senator Blasts Microsoft for Making Default Windows Vulnerable to “Kerberoasting”](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss)
* [2025-09-14, 00:19:52](https://news.ycombinator.com/item?id=45236411) - [If my kids excel, will they move away?](https://jeffreybigham.com/blog/2025/where-will-my-kids-go.html)
* [2025-09-13, 23:50:25](https://news.ycombinator.com/item?id=45236263) - [Two Slice, a font that&apos;s only 2px tall](https://joefatula.com/twoslice.html)
* [2025-09-13, 23:18:00](https://it.slashdot.org/story/25/09/13/040256/more-return-to-office-crackdowns-with-617-of-employees-now-in-office-full-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Return-to-Office Crackdowns, with 61.7% of Employees Now in Office Full-Time](https://it.slashdot.org/story/25/09/13/040256/more-return-to-office-crackdowns-with-617-of-employees-now-in-office-full-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 23:16:40](https://news.ycombinator.com/item?id=45236079) - [Pass: Unix Password Manager](https://www.passwordstore.org/)
* [2025-09-13, 23:13:06](https://lobste.rs/s/lmdyti/pass_unix_password_manager) - [Pass: Unix Password Manager](https://www.passwordstore.org/)
* [2025-09-13, 22:18:00](https://games.slashdot.org/story/25/09/13/2212239/hollow-knight-sequel-silksong-crashed-game-stores-as-20-price-irks-competitors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hollow Knight Sequel &apos;Silksong&apos; Crashed Game Stores, as $20 Price Irks Competitors](https://games.slashdot.org/story/25/09/13/2212239/hollow-knight-sequel-silksong-crashed-game-stores-as-20-price-irks-competitors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 22:01:35](https://news.ycombinator.com/item?id=45235676) - [Will AI be the basis of many future industrial fortunes, or a net loser?](https://joincolossus.com/article/ai-will-not-make-you-rich/)
* [2025-09-13, 21:55:42](https://news.ycombinator.com/item?id=45235648) - [Myocardial infarction may be an infectious disease](https://www.tuni.fi/en/news/myocardial-infarction-may-be-infectious-disease)
* [2025-09-13, 21:38:39](https://lobste.rs/s/i07o8h/normal_order_syntax_rules_proving_fix) - [Normal-order syntax-rules and proving the fix-point of call/cc](https://okmij.org/ftp/Scheme/callcc-calc-page.html)
* [2025-09-13, 21:04:18](https://news.ycombinator.com/item?id=45235293) - [AMD’s RDNA4 GPU architecture](https://chipsandcheese.com/p/amds-rdna4-gpu-architecture-at-hot)
* [2025-09-13, 20:53:05](https://lobste.rs/s/5mwi0c/text_files_complex_tools_minimalist) - [Text Files &gt; Complex Tools: A Minimalist Snippet Manager](https://quarters.captaintouch.com/blog/posts/2025-09-13-text-files-%3E-complex-tools:-a-minimalist-snippet-manager.html)
* [2025-09-13, 20:34:00](https://science.slashdot.org/story/25/09/13/1457208/could-heart-attacks-be-triggered-by-infections?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could Heart Attacks Be Triggered By Infections?](https://science.slashdot.org/story/25/09/13/1457208/could-heart-attacks-be-triggered-by-infections?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 19:40:00](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss) - [Physicists Made a Time Crystal We Can Actually See](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss)
* [2025-09-13, 19:34:00](https://yro.slashdot.org/story/25/09/13/195226/myanmars-cyber-slavery-compounds-may-hold-100000-trafficked-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Myanmar&apos;s &apos;Cyber-Slavery Compounds&apos; May Hold 100,000 Trafficked People](https://yro.slashdot.org/story/25/09/13/195226/myanmars-cyber-slavery-compounds-may-hold-100000-trafficked-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 19:03:48](https://lobste.rs/s/vjgucr/rip_pthread_cancel) - [RIP pthread_cancel](https://eissing.org/icing/posts/rip_pthread_cancel/)
* [2025-09-13, 19:00:29](https://news.ycombinator.com/item?id=45234460) - [Safe C++ proposal is not being continued](https://sibellavia.lol/posts/2025/09/safe-c-proposal-is-not-being-continued/)
* [2025-09-13, 18:39:17](https://news.ycombinator.com/item?id=45234323) - [The case against social media is stronger than you think](https://arachnemag.substack.com/p/the-case-against-social-media-is)
* [2025-09-13, 18:34:00](https://slashdot.org/story/25/09/13/1734225/uae-lab-releases-open-source-model-to-rival-chinas-deepseek?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UAE Lab Releases Open-Source Model to Rival China&apos;s DeepSeek ](https://slashdot.org/story/25/09/13/1734225/uae-lab-releases-open-source-model-to-rival-chinas-deepseek?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 17:52:39](https://lobste.rs/s/gbigsc/learning_fuzz_with_libafl_by_solving) - [Learning to fuzz with LibAFL by solving puzzles](https://github.com/addisoncrump/parking-game-fuzzer)
* [2025-09-13, 17:48:27](https://lobste.rs/s/hgizrb/fast_php_toolchain_written_rust) - [A fast PHP toolchain written in Rust](https://github.com/carthage-software/mago)
* [2025-09-13, 17:34:00](https://science.slashdot.org/story/25/09/13/0251201/a-single-exercise-session-may-slow-cancer-cell-growth-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Single Exercise Session May Slow Cancer Cell Growth, Study Finds](https://science.slashdot.org/story/25/09/13/0251201/a-single-exercise-session-may-slow-cancer-cell-growth-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 17:20:21](https://news.ycombinator.com/item?id=45233713) - [RIP pthread_cancel](https://eissing.org/icing/posts/rip_pthread_cancel/)
* [2025-09-13, 16:46:35](https://lobste.rs/s/z4yell/internet_coup) - [The Internet Coup](https://interseclab.org/research/the-internet-coup/)
* [2025-09-13, 16:43:26](https://news.ycombinator.com/item?id=45233415) - [Geedge and MESA leak: Analyzing the great firewall’s largest document leak](https://gfw.report/blog/geedge_and_mesa_leak/en/)
* [2025-09-13, 16:34:00](https://developers.slashdot.org/story/25/09/13/054206/the-software-engineers-paid-to-fix-vibe-coded-messes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Software Engineers Paid To Fix Vibe Coded Messes](https://developers.slashdot.org/story/25/09/13/054206/the-software-engineers-paid-to-fix-vibe-coded-messes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 16:14:11](https://news.ycombinator.com/item?id=45233237) - [Recreating the US/* time zone situation](https://rachelbythebay.com/w/2025/09/12/tz/)
* [2025-09-13, 15:34:00](https://yro.slashdot.org/story/25/09/13/0155250/megaupload-founder-kim-dotcom-loses-latest-bid-to-avoid-us-extradition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Megaupload Founder Kim Dotcom Loses Latest Bid to Avoid US Extradition](https://yro.slashdot.org/story/25/09/13/0155250/megaupload-founder-kim-dotcom-loses-latest-bid-to-avoid-us-extradition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 15:08:28](https://lobste.rs/s/tranme/flow_control_programmer_s_text_editor) - [Flow Control: a programmer&apos;s text editor](https://github.com/neurocyte/flow)
* [2025-09-13, 14:52:45](https://news.ycombinator.com/item?id=45232565) - [486Tang – 486 on a credit-card-sized FPGA board](https://nand2mario.github.io/posts/2025/486tang_486_on_a_credit_card_size_fpga_board/)
* [2025-09-13, 14:52:33](https://news.ycombinator.com/item?id=45232562) - [Four-year wedding crasher mystery solved](https://www.theguardian.com/uk-news/2025/sep/12/wedding-crasher-mystery-solved-four-years-bride-scotland)
* [2025-09-13, 14:51:00](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss) - [$142 Upgrade Kit and Spare Modules Turn Nvidia RTX 4090 24GB to 48GB AI Card](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss)
* [2025-09-13, 14:44:24](https://lobste.rs/s/rfneiu/setsum_order_agnostic_additive) - [Setsum – order agnostic, additive, subtractive checksum](https://avi.im/blag/2025/setsum)
* [2025-09-13, 14:34:00](https://slashdot.org/story/25/09/13/014244/forever-chemicals-found-in-95-of-beers-tested-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Forever Chemicals&apos; Found In 95% of Beers Tested In the U.S.](https://slashdot.org/story/25/09/13/014244/forever-chemicals-found-in-95-of-beers-tested-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 14:22:59](https://news.ycombinator.com/item?id=45232299) - [Show HN: CLAVIER-36 – A programming environment for generative music](https://clavier36.com/p/LtZDdcRP3haTWHErgvdM)
* [2025-09-13, 14:22:32](https://lobste.rs/s/i4mslh/my_first_cve) - [My first CVE](https://natkr.com/2025-09-13-my-first-cve/)
* [2025-09-13, 13:15:26](https://news.ycombinator.com/item?id=45231852) - [My first impressions of Gleam](https://mtlynch.io/notes/gleam-first-impressions/)
* [2025-09-13, 13:00:00](https://news.slashdot.org/story/25/09/13/0012220/pilot-union-urges-faa-to-reject-rainmakers-drone-cloud-seeding-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pilot Union Urges FAA To Reject Rainmaker&apos;s Drone Cloud-Seeding Plan](https://news.slashdot.org/story/25/09/13/0012220/pilot-union-urges-faa-to-reject-rainmakers-drone-cloud-seeding-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 12:57:36](https://lobste.rs/s/xinll3/safe_c_proposal_is_not_being_continued) - [Safe C++ proposal is not being continued](https://sibellavia.lol/posts/2025/09/safe-c-proposal-is-not-being-continued/)
* [2025-09-13, 12:02:11](https://news.ycombinator.com/item?id=45231378) - [Show HN: A store that generates products from anything you type in search](https://anycrap.shop/)
* [2025-09-13, 11:36:37](https://lobste.rs/s/wbjiws/weird_cpu_architectures_mov_only_cpu) - [Weird CPU architectures: the MOV only CPU](https://justanotherelectronicsblog.com/?p=771)
* [2025-09-13, 10:50:29](https://lobste.rs/s/klmcs5/ai_coding) - [AI Coding](https://geohot.github.io//blog/jekyll/update/2025/09/12/ai-coding.html)
* [2025-09-13, 10:10:00](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss) - [AI&apos;s Free Web Scraping Days May be Over, Thanks to This New Licensing Protocol](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss)
* [2025-09-13, 10:00:00](https://science.slashdot.org/story/25/09/13/007205/e-bike-injuries-are-a-massive-burden-say-surgeons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [E-Bike Injuries Are a Massive Burden, Say Surgeons](https://science.slashdot.org/story/25/09/13/007205/e-bike-injuries-are-a-massive-burden-say-surgeons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 09:13:59](https://lobste.rs/s/mn2jkz/diesel_2_3_0) - [Diesel 2.3.0](https://diesel.rs/news/2_3_0_release.html)
* [2025-09-13, 07:15:09](https://lobste.rs/s/syhz40/splitting_long_string_lines_using_avx2) - [Splitting a long string in lines using AVX2](https://lemire.me/blog/2025/09/07/splitting-a-long-string-in-lines-efficiently/)
* [2025-09-13, 07:14:46](https://lobste.rs/s/hr1w7r/ducklake_for_busy_engineering_managers) - [DuckLake for busy engineering managers](https://blog.incrementalforgetting.tech/p/ducklake-for-busy-engineering-managers)
* [2025-09-13, 07:00:00](https://science.slashdot.org/story/25/09/12/2344232/synthetic-magnetic-fields-steer-light-on-a-chip-for-faster-communications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Synthetic Magnetic Fields Steer Light On a Chip For Faster Communications](https://science.slashdot.org/story/25/09/12/2344232/synthetic-magnetic-fields-steer-light-on-a-chip-for-faster-communications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 05:24:00](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss) - [Scientists Urge EU Governments to Reject Chat Control Rules](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss)
* [2025-09-13, 03:30:00](https://it.slashdot.org/story/25/09/12/230259/proton-mail-suspended-journalist-accounts-at-request-of-cybersecurity-agency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Proton Mail Suspended Journalist Accounts At Request of Cybersecurity Agency](https://it.slashdot.org/story/25/09/12/230259/proton-mail-suspended-journalist-accounts-at-request-of-cybersecurity-agency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 03:04:03](https://lobste.rs/s/hh07fn/basics_equality_saturation) - [Basics of Equality Saturation](https://egglog-python.readthedocs.io/latest/tutorials/tut_1_basics.html)
* [2025-09-13, 00:42:00](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss) - [ASML Invests €1.3bn in AI Company Mistral](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss)
* [2025-09-12, 22:33:38](https://lobste.rs/s/mlbsfi/utf_8_is_brilliant_design) - [UTF-8 is a Brilliant Design](https://iamvishnu.com/posts/utf8-is-brilliant-design)
* [2025-09-12, 19:58:00](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss) - [LIGO&apos;s Sharpest Detection Yet Confirms Famous Stephen Hawking Theory](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss)
* [2025-09-12, 17:55:54](https://lobste.rs/s/t3wns0/what_happens_after_i_m_gone_future_online) - [What Happens After I&apos;m Gone? The Future of the Online Me](https://btxx.org/posts/planning-ahead/)
* [2025-09-12, 15:14:05](https://lobste.rs/s/kltoas/lobsters_interview_with_susam) - [Lobsters Interview with Susam](https://lobste.rs/s/kltoas/lobsters_interview_with_susam)
* [2025-09-12, 15:13:00](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss) - [Dead Internet Theory Lives: One Out of Three of You is a Bot](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss)
* [2025-09-12, 10:33:00](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss) - [This is the First Time Scientists Have Seen Decision Making in a Brain](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss)
* [2025-09-12, 05:46:00](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss) - [Scientists Discover ‘Clearest Sign’ Yet of Life on Mars](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss)
* [2025-09-12, 01:01:00](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss) - [Unicode version 17.0.0 Released ](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss)
* [2025-09-11, 20:33:22](https://news.ycombinator.com/item?id=45215851) - [Ancient DNA solves Plague of Justinian mystery to rewrite pandemic history](https://phys.org/news/2025-08-ancient-dna-plague-justinian-mystery.html)
* [2025-09-11, 20:16:00](https://soylentnews.org/article.pl?sid=25/09/10/0627237&amp;from=rss) - [Scientists Create Solar Cells That Generate Energy From Indoor Light at Record Efficiency](https://soylentnews.org/article.pl?sid=25/09/10/0627237&amp;from=rss)
* [2025-09-11, 16:24:05](https://news.ycombinator.com/item?id=45213407) - [Orange rivers signal toxic shift in Arctic wilderness](https://news.ucr.edu/articles/2025/09/08/orange-rivers-signal-toxic-shift-arctic-wilderness)
* [2025-09-11, 15:34:00](https://soylentnews.org/article.pl?sid=25/09/10/0624239&amp;from=rss) - [Meta Reportedly Suppressed Research About How Dangerous its VR Headsets Are for Kids](https://soylentnews.org/article.pl?sid=25/09/10/0624239&amp;from=rss)
* [2025-09-11, 10:51:00](https://soylentnews.org/article.pl?sid=25/09/10/0619236&amp;from=rss) - [Cannabis Might be Messing With Female Fertility](https://soylentnews.org/article.pl?sid=25/09/10/0619236&amp;from=rss)
* [2025-09-11, 06:05:00](https://soylentnews.org/article.pl?sid=25/09/10/0436239&amp;from=rss) - [Tiny11 Builder Update Lets Users Strip Copilot and Other Bloat From Windows 11](https://soylentnews.org/article.pl?sid=25/09/10/0436239&amp;from=rss)
* [2025-09-11, 01:19:00](https://soylentnews.org/article.pl?sid=25/09/10/0431231&amp;from=rss) - [48 Years Ago, Voyager 1 Left Earth](https://soylentnews.org/article.pl?sid=25/09/10/0431231&amp;from=rss)
* [2025-09-10, 20:29:00](https://soylentnews.org/article.pl?sid=25/09/10/0113202&amp;from=rss) - [Scientists Turned Plastic Trash Into a Material That Eats Carbon](https://soylentnews.org/article.pl?sid=25/09/10/0113202&amp;from=rss)
* [2025-09-10, 19:14:14](https://news.ycombinator.com/item?id=45202315) - [Show HN: UltraPlot. A Succinct Wrapper for Matplotlib](https://github.com/Ultraplot/UltraPlot)
* [2025-09-10, 15:44:00](https://soylentnews.org/article.pl?sid=25/09/10/0055209&amp;from=rss) - [Ubuntu Software Repositories Unavailable or Slow for Multiple Days Due to Outage](https://soylentnews.org/article.pl?sid=25/09/10/0055209&amp;from=rss)
* [2025-09-10, 14:05:45](https://news.ycombinator.com/item?id=45197896) - [Lexy: A parser combinator library for C++17](https://github.com/foonathan/lexy)
* [2025-09-10, 14:03:11](https://news.ycombinator.com/item?id=45197862) - [The Socratic Journal Method: A Simple Journaling Method That Works](https://mindthenerd.com/the-socratic-journal-method-a-simple-journaling-method-that-actually-works/)
* [2025-09-10, 13:59:07](https://news.ycombinator.com/item?id=45197811) - [George Bernard Shaw by G. K. Chesterton (1909)](https://www.gutenberg.org/ebooks/19535)
* [2025-09-10, 10:57:00](https://soylentnews.org/article.pl?sid=25/09/10/0052200&amp;from=rss) - [Amazon&apos;s Project Kuiper Signs Up JetBlue as its First Airline Customer to Use its Satellite Internet](https://soylentnews.org/article.pl?sid=25/09/10/0052200&amp;from=rss)
* [2025-09-10, 06:13:00](https://soylentnews.org/article.pl?sid=25/09/09/1559244&amp;from=rss) - [Congress and Trump May Compromise on the SLS Rocket by Axing its Costly Upper Stage](https://soylentnews.org/article.pl?sid=25/09/09/1559244&amp;from=rss)
* [2025-09-10, 01:38:28](https://news.ycombinator.com/item?id=45192012) - [Open Source SDR Ham Transceiver Prototype](https://m17project.org/2025/08/18/first-linht-tests/)
* [2025-09-10, 01:28:00](https://soylentnews.org/article.pl?sid=25/09/09/1229205&amp;from=rss) - [Your Red is My Red, at Least to Our Brains](https://soylentnews.org/article.pl?sid=25/09/09/1229205&amp;from=rss)
