# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Innovations

* [Flow Control: a programmer's text editor](https://github.com/neurocyte/flow) - This new text editor aims to optimize flow and productivity for programmers, showcasing features unique in the text editing domain. [Comments](https://lobste.rs/s/tranme/flow_control_programmer_s_text_editor)

* [486Tang – 486 on a credit-card-sized FPGA board](https://nand2mario.github.io/posts/2025/486tang_486_on_a_credit_card_size_fpga_board/) - A groundbreaking FPGA board that replicates the power of the 486 processor, enabling advanced embedded computing possibilities. [Comments](https://news.ycombinator.com/item?id=45232565)

* [Mago: A fast PHP toolchain written in Rust](https://github.com/carthage-software/mago) - A Rust-based PHP toolchain, promising significant speed improvements and efficient workflows for developers. [Comments](https://news.ycombinator.com/item?id=45232275)

* [AI Coding](https://geohot.github.io//blog/jekyll/update/2025/09/12/ai-coding.html) - Reflecting on the rise of AI tools assisting in coding and their potential transformative effects on development practices. [Comments](https://lobste.rs/s/klmcs5/ai_coding)

* [Diesel 2.3.0](https://diesel.rs/news/2_3_0_release.html) - The latest update to this popular database library for Rust includes new features and optimizations for developers. [Comments](https://lobste.rs/s/mn2jkz/diesel_2_3_0)

* [Java 25's new CPU-Time Profiler (1)](https://mostlynerdless.de/blog/2025/06/11/java-25s-new-cpu-time-profiler-1/) - An exploration of a new feature in Java designed for detailed CPU profiling, catering to performance-oriented developers. [Comments](https://news.ycombinator.com/item?id=45230265)

## Science and Environment

* [Forever Chemicals Found In 95% of Beers Tested In the U.S.](https://slashdot.org/story/25/09/13/014244/forever-chemicals-found-in-95-of-beers-tested-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Researchers uncover the alarming prevalence of 'forever chemicals' in beer, raising public health concerns. [Comments](https://slashdot.org/story/25/09/13/014244/forever-chemicals-found-in-95-of-beers-tested-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [An Annual Blast of Pacific Cold Water Did Not Occur, Alarming Scientists](https://www.nytimes.com/2025/09/12/climate/pacific-cold-water-upwelling.html) - A critical natural event missing this year leaves scientists worried about its implications for ecosystems and global climate. [Comments](https://news.ycombinator.com/item?id=45232100)

## Cultural and Societal Insights

* [Social media promised connection, but it has delivered exhaustion](https://www.noemamag.com/the-last-days-of-social-media/) - A deep dive into how social media, initially a tool for connection, has left users fatigued and overwhelmed. [Comments](https://news.ycombinator.com/item?id=45229799)

* [Japan sets record of nearly 100k people aged over 100](https://www.bbc.com/news/articles/cd07nljlyv0o) - A demographic milestone highlighting longevity trends in Japan. [Comments](https://news.ycombinator.com/item?id=45232052)

## Artificial Intelligence Advancements

* [AI's Free Web Scraping Days May be Over, Thanks to This New Licensing Protocol](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss) - A licensing protocol is set to challenge AI's reliance on scraping public web data, hinting at significant operational changes. [Comments](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss)

* [Synthetic Magnetic Fields Steer Light On a Chip For Faster Communications](https://science.slashdot.org/story/25/09/12/2344232/synthetic-magnetic-fields-steer-light-on-a-chip-for-faster-communications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Groundbreaking study shows how synthetic magnetic fields can revolutionize on-chip optical communication technology. [Comments](https://science.slashdot.org/story/25/09/12/2344232/synthetic-magnetic-fields-steer-light-on-a-chip-for-faster-communications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Legal and Societal Developments

* [Megaupload Founder Kim Dotcom Loses Latest Bid to Avoid US Extradition](https://yro.slashdot.org/story/25/09/13/0155250/megaupload-founder-kim-dotcom-loses-latest-bid-to-avoid-us-extradition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The legal saga of Kim Dotcom continues as a court denies his extradition appeal, marking a new chapter in the case. [Comments](https://yro.slashdot.org/story/25/09/13/0155250/megaupload-founder-kim-dotcom-loses-latest-bid-to-avoid-us-extradition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-09-13, 15:34:00](https://yro.slashdot.org/story/25/09/13/0155250/megaupload-founder-kim-dotcom-loses-latest-bid-to-avoid-us-extradition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Megaupload Founder Kim Dotcom Loses Latest Bid to Avoid US Extradition](https://yro.slashdot.org/story/25/09/13/0155250/megaupload-founder-kim-dotcom-loses-latest-bid-to-avoid-us-extradition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 15:10:55](https://news.ycombinator.com/item?id=45232720) - [\&quot;Learning how to Learn\&quot; will be next generation&apos;s most needed skill](https://techxplore.com/news/2025-09-google-ai-scientist-generation-skill.html)
* [2025-09-13, 15:08:28](https://lobste.rs/s/tranme/flow_control_programmer_s_text_editor) - [Flow Control: a programmer&apos;s text editor](https://github.com/neurocyte/flow)
* [2025-09-13, 14:59:33](https://lobste.rs/s/aiataw/link_graveyard_snapshot_my_abandoned) - [Link Graveyard: A snapshot of my abandoned browser tabs](https://timkellogg.me/blog/2025/09/13/link-graveyard)
* [2025-09-13, 14:52:45](https://news.ycombinator.com/item?id=45232565) - [486Tang – 486 on a credit-card-sized FPGA board](https://nand2mario.github.io/posts/2025/486tang_486_on_a_credit_card_size_fpga_board/)
* [2025-09-13, 14:51:00](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss) - [$142 Upgrade Kit and Spare Modules Turn Nvidia RTX 4090 24GB to 48GB AI Card](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss)
* [2025-09-13, 14:44:24](https://lobste.rs/s/rfneiu/setsum_order_agnostic_additive) - [Setsum – order agnostic, additive, subtractive checksum](https://avi.im/blag/2025/setsum)
* [2025-09-13, 14:34:00](https://slashdot.org/story/25/09/13/014244/forever-chemicals-found-in-95-of-beers-tested-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Forever Chemicals&apos; Found In 95% of Beers Tested In the U.S.](https://slashdot.org/story/25/09/13/014244/forever-chemicals-found-in-95-of-beers-tested-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 14:22:59](https://news.ycombinator.com/item?id=45232299) - [Show HN: CLAVIER-36 (programming environment for generative music)](https://clavier36.com/p/LtZDdcRP3haTWHErgvdM)
* [2025-09-13, 14:22:32](https://lobste.rs/s/i4mslh/my_first_cve) - [My first CVE](https://natkr.com/2025-09-13-my-first-cve/)
* [2025-09-13, 14:20:01](https://news.ycombinator.com/item?id=45232275) - [Mago: A fast PHP toolchain written in Rust](https://github.com/carthage-software/mago)
* [2025-09-13, 13:54:31](https://news.ycombinator.com/item?id=45232100) - [An Annual Blast of Pacific Cold Water Did Not Occur, Alarming Scientists](https://www.nytimes.com/2025/09/12/climate/pacific-cold-water-upwelling.html)
* [2025-09-13, 13:47:38](https://news.ycombinator.com/item?id=45232052) - [Japan sets record of nearly 100k people aged over 100](https://www.bbc.com/news/articles/cd07nljlyv0o)
* [2025-09-13, 13:15:26](https://news.ycombinator.com/item?id=45231852) - [My First Impressions of Gleam](https://mtlynch.io/notes/gleam-first-impressions/)
* [2025-09-13, 13:00:00](https://news.slashdot.org/story/25/09/13/0012220/pilot-union-urges-faa-to-reject-rainmakers-drone-cloud-seeding-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pilot Union Urges FAA To Reject Rainmaker&apos;s Drone Cloud-Seeding Plan](https://news.slashdot.org/story/25/09/13/0012220/pilot-union-urges-faa-to-reject-rainmakers-drone-cloud-seeding-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 12:57:36](https://lobste.rs/s/xinll3/safe_c_proposal_is_not_being_continued) - [Safe C++ proposal is not being continued](https://sibellavia.lol/posts/2025/09/safe-c-proposal-is-not-being-continued/)
* [2025-09-13, 12:02:11](https://news.ycombinator.com/item?id=45231378) - [A store that generates products from anything you type in search](https://anycrap.shop/)
* [2025-09-13, 11:36:37](https://lobste.rs/s/wbjiws/weird_cpu_architectures_mov_only_cpu) - [Weird CPU architectures: the MOV only CPU](https://justanotherelectronicsblog.com/?p=771)
* [2025-09-13, 11:30:50](https://news.ycombinator.com/item?id=45231239) - [How &apos;overworked, underpaid&apos; humans train Google&apos;s AI to seem smart](https://www.theguardian.com/technology/2025/sep/11/google-gemini-ai-training-humans)
* [2025-09-13, 10:50:29](https://lobste.rs/s/klmcs5/ai_coding) - [AI Coding](https://geohot.github.io//blog/jekyll/update/2025/09/12/ai-coding.html)
* [2025-09-13, 10:10:00](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss) - [AI&apos;s Free Web Scraping Days May be Over, Thanks to This New Licensing Protocol](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss)
* [2025-09-13, 10:00:00](https://science.slashdot.org/story/25/09/13/007205/e-bike-injuries-are-a-massive-burden-say-surgeons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [E-Bike Injuries Are a Massive Burden, Say Surgeons](https://science.slashdot.org/story/25/09/13/007205/e-bike-injuries-are-a-massive-burden-say-surgeons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 09:13:59](https://lobste.rs/s/mn2jkz/diesel_2_3_0) - [Diesel 2.3.0](https://diesel.rs/news/2_3_0_release.html)
* [2025-09-13, 08:11:27](https://news.ycombinator.com/item?id=45230265) - [Java 25&apos;s new CPU-Time Profiler (1)](https://mostlynerdless.de/blog/2025/06/11/java-25s-new-cpu-time-profiler-1/)
* [2025-09-13, 07:16:32](https://lobste.rs/s/e1vvkf/linux_6_17_fix_lands_address_regression) - [Linux 6.17 Fix Lands To Address Regression With \&quot;Serious Breakage\&quot; In Hibernation](https://www.phoronix.com/news/Linux-6.17-PM-Hibernation-FIxes)
* [2025-09-13, 07:15:09](https://lobste.rs/s/syhz40/splitting_long_string_lines_using_avx2) - [Splitting a long string in lines using AVX2](https://lemire.me/blog/2025/09/07/splitting-a-long-string-in-lines-efficiently/)
* [2025-09-13, 07:14:46](https://lobste.rs/s/hr1w7r/ducklake_for_busy_engineering_managers) - [DuckLake for busy engineering managers](https://blog.incrementalforgetting.tech/p/ducklake-for-busy-engineering-managers)
* [2025-09-13, 07:02:27](https://news.ycombinator.com/item?id=45229960) - [I unified convolution and attention into a single framework](https://zenodo.org/records/17103133)
* [2025-09-13, 07:00:00](https://science.slashdot.org/story/25/09/12/2344232/synthetic-magnetic-fields-steer-light-on-a-chip-for-faster-communications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Synthetic Magnetic Fields Steer Light On a Chip For Faster Communications](https://science.slashdot.org/story/25/09/12/2344232/synthetic-magnetic-fields-steer-light-on-a-chip-for-faster-communications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 06:27:19](https://news.ycombinator.com/item?id=45229799) - [Social media promised connection, but it has delivered exhaustion](https://www.noemamag.com/the-last-days-of-social-media/)
* [2025-09-13, 05:24:00](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss) - [Scientists Urge EU Governments to Reject Chat Control Rules](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss)
* [2025-09-13, 04:55:14](https://news.ycombinator.com/item?id=45229414) - [SkiftOS: A hobby OS built from scratch using C/C++ for ARM, x86, and RISC-V](https://skiftos.org)
* [2025-09-13, 04:08:57](https://news.ycombinator.com/item?id=45229227) - [Raspberry Pi Synthesizers – How the Pi is transforming synths](https://www.gearnews.com/raspberry-pi-synthesizers-how-the-pi-is-transforming-synths/)
* [2025-09-13, 03:30:00](https://it.slashdot.org/story/25/09/12/230259/proton-mail-suspended-journalist-accounts-at-request-of-cybersecurity-agency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Proton Mail Suspended Journalist Accounts At Request of Cybersecurity Agency](https://it.slashdot.org/story/25/09/12/230259/proton-mail-suspended-journalist-accounts-at-request-of-cybersecurity-agency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 03:04:03](https://lobste.rs/s/hh07fn/basics_equality_saturation) - [Basics of Equality Saturation](https://egglog-python.readthedocs.io/latest/tutorials/tut_1_basics.html)
* [2025-09-13, 02:06:11](https://lobste.rs/s/4xb9m9/i_vibe_coded_r_package_it_actually_works) - [I Vibe Coded an R Package and it ... actually works?!?](https://jcarroll.com.au/2025/09/13/i-vibe-coded-an-r-package/)
* [2025-09-13, 01:50:00](https://tech.slashdot.org/story/25/09/12/2318235/us-ev-sales-smash-records-in-august?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US EV Sales Smash Records In August](https://tech.slashdot.org/story/25/09/12/2318235/us-ev-sales-smash-records-in-august?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 01:15:37](https://news.ycombinator.com/item?id=45228472) - [Life, work, death and the peasant: Rent and extraction](https://acoup.blog/2025/09/12/collections-life-work-death-and-the-peasant-part-ivc-rent-and-extraction/)
* [2025-09-13, 01:10:00](https://news.slashdot.org/story/25/09/12/239214/newfoundlands-10-year-education-report-calling-for-ethical-ai-use-contains-over-15-fake-sources?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Newfoundland&apos;s 10-Year Education Report Calling For Ethical AI Use Contains Over 15 Fake Sources](https://news.slashdot.org/story/25/09/12/239214/newfoundlands-10-year-education-report-calling-for-ethical-ai-use-contains-over-15-fake-sources?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-13, 00:42:00](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss) - [ASML Invests €1.3bn in AI Company Mistral](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss)
* [2025-09-13, 00:30:00](https://entertainment.slashdot.org/story/25/09/12/2251230/employee-who-leaked-spider-man-blu-ray-sentenced-to-nearly-5-years-prison?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Employee Who Leaked &apos;Spider-Man&apos; Blu-ray Sentenced to Nearly 5 Years Prison](https://entertainment.slashdot.org/story/25/09/12/2251230/employee-who-leaked-spider-man-blu-ray-sentenced-to-nearly-5-years-prison?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 23:50:00](https://tech.slashdot.org/story/25/09/12/2147218/from-discord-to-bitchat-tech-at-the-heart-of-nepal-protests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [From Discord To Bitchat, Tech At the Heart of Nepal Protests](https://tech.slashdot.org/story/25/09/12/2147218/from-discord-to-bitchat-tech-at-the-heart-of-nepal-protests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 23:10:00](https://slashdot.org/story/25/09/12/2136201/intel-talent-bleed-continues?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Talent Bleed Continues](https://slashdot.org/story/25/09/12/2136201/intel-talent-bleed-continues?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 23:04:08](https://news.ycombinator.com/item?id=45227749) - [Tips for installing Windows 98 in QEMU/UTM](https://sporks.space/2025/08/28/tips-for-installing-windows-98-in-qemu-utm/)
* [2025-09-12, 23:01:42](https://lobste.rs/s/ifdi6q/tips_for_installing_windows_98_qemu_utm) - [Tips for installing Windows 98 in QEMU/UTM](https://sporks.space/2025/08/28/tips-for-installing-windows-98-in-qemu-utm/)
* [2025-09-12, 22:33:38](https://lobste.rs/s/mlbsfi/utf_8_is_brilliant_design) - [UTF-8 is a Brilliant Design](https://iamvishnu.com/posts/utf8-is-brilliant-design)
* [2025-09-12, 22:30:00](https://slashdot.org/story/25/09/12/2119247/microsoft-openai-reach-non-binding-deal-to-allow-openai-to-restructure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft, OpenAI Reach Non-Binding Deal To Allow OpenAI To Restructure](https://slashdot.org/story/25/09/12/2119247/microsoft-openai-reach-non-binding-deal-to-allow-openai-to-restructure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 21:54:34](https://news.ycombinator.com/item?id=45227212) - [FFglitch, FFmpeg fork for glitch art](https://ffglitch.org/gallery/)
* [2025-09-12, 21:50:00](https://entertainment.slashdot.org/story/25/09/12/2112234/spotify-peeved-after-10000-users-sold-data-to-build-ai-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Peeved After 10,000 Users Sold Data To Build AI Tools](https://entertainment.slashdot.org/story/25/09/12/2112234/spotify-peeved-after-10000-users-sold-data-to-build-ai-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 21:10:00](https://news.slashdot.org/story/25/09/12/2030208/california-bill-lets-renters-escape-exclusive-deals-between-isps-and-landlords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Bill Lets Renters Escape Exclusive Deals Between ISPs and Landlords](https://news.slashdot.org/story/25/09/12/2030208/california-bill-lets-renters-escape-exclusive-deals-between-isps-and-landlords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 20:59:25](https://lobste.rs/s/pwkci6/meow_yet_another_modal_editing_on_emacs) - [meow: Yet another modal editing on Emacs](https://github.com/meow-edit/meow)
* [2025-09-12, 20:53:33](https://news.ycombinator.com/item?id=45226639) - [I used standard Emacs extension-points to extend org-mode](https://edoput.it/2025/04/16/emacs-paradigm-shift.html)
* [2025-09-12, 20:30:00](https://news.slashdot.org/story/25/09/12/2025228/eu-countries-delay-deal-on-new-climate-goal-diplomats-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Countries Delay Deal on New Climate Goal, Diplomats Say](https://news.slashdot.org/story/25/09/12/2025228/eu-countries-delay-deal-on-new-climate-goal-diplomats-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-12, 19:58:00](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss) - [LIGO&apos;s Sharpest Detection Yet Confirms Famous Stephen Hawking Theory](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss)
* [2025-09-12, 19:10:28](https://lobste.rs/s/j4zqc7/grimoire_css_flexible_utility_class_tool) - [Grimoire CSS - flexible utility class tool](https://grimoirecss.com/)
* [2025-09-12, 18:30:15](https://news.ycombinator.com/item?id=45225098) - [UTF-8 is a brilliant design](https://iamvishnu.com/posts/utf8-is-brilliant-design)
* [2025-09-12, 18:18:00](https://news.ycombinator.com/item?id=45224967) - [EU court rules nuclear energy is clean energy](https://www.weplanet.org/post/eu-court-rules-nuclear-energy-is-clean-energy)
* [2025-09-12, 17:55:54](https://lobste.rs/s/t3wns0/what_happens_after_i_m_gone_future_online) - [What Happens After I&apos;m Gone? The Future of the Online Me](https://btxx.org/posts/planning-ahead/)
* [2025-09-12, 16:57:17](https://news.ycombinator.com/item?id=45224156) - [QGIS is a free, open-source, cross platform geographical information system](https://github.com/qgis/QGIS)
* [2025-09-12, 16:37:00](https://lobste.rs/s/5p6h8u/from_19k_4_2m_events_sec_story_sqlite_query) - [From 19k to 4.2M events/sec: story of a SQLite query optimisation](https://mnt.io/articles/from-19k-to-4-2m-events-per-sec-story-of-a-sqlite-query-optimisation/)
* [2025-09-12, 15:35:19](https://lobste.rs/s/bzzwb7/phishing_campaign_targeting_crates_io) - [Phishing campaign targeting crates.io users](https://blog.rust-lang.org/2025/09/12/crates-io-phishing-campaign/)
* [2025-09-12, 15:14:05](https://lobste.rs/s/kltoas/lobsters_interview_with_susam) - [Lobsters Interview with Susam](https://lobste.rs/s/kltoas/lobsters_interview_with_susam)
* [2025-09-12, 15:13:00](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss) - [Dead Internet Theory Lives: One Out of Three of You is a Bot](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss)
* [2025-09-12, 14:54:24](https://lobste.rs/s/exbkdt/oq_terminal_openapi_spec_viewer) - [oq: Terminal OpenAPI Spec viewer](https://github.com/plutov/oq)
* [2025-09-12, 14:44:05](https://news.ycombinator.com/item?id=45222695) - [Many hard LeetCode problems are easy constraint problems](https://buttondown.com/hillelwayne/archive/many-hard-leetcode-problems-are-easy-constraint/)
* [2025-09-12, 14:12:23](https://news.ycombinator.com/item?id=45222369) - [3D modeling with paper](https://www.arvinpoddar.com/blog/3d-modeling-with-paper)
* [2025-09-12, 13:39:15](https://lobste.rs/s/eyjir3/fun_friday_question_what_easter_eggs_have) - [Fun Friday Question: What Easter Eggs have you Found or Made?](https://lobste.rs/s/eyjir3/fun_friday_question_what_easter_eggs_have)
* [2025-09-12, 13:19:19](https://lobste.rs/s/p9abfj/debian_13_postgres_us_time_zones) - [Debian 13, Postgres, and the US/* time zones](https://rachelbythebay.com/w/2025/09/11/debtz/)
* [2025-09-12, 12:38:29](https://lobste.rs/s/2remdu/classic_gtk1_gui_library_for_windows) - [Classic GTK1 GUI Library for Windows, Linux and MacOS](https://gitlab.com/robinrowe/gtk1)
* [2025-09-12, 12:10:29](https://news.ycombinator.com/item?id=45221274) - [The treasury is expanding the Patriot Act to attack Bitcoin self custody](https://www.tftc.io/treasury-iexpanding-patriot-act/)
* [2025-09-12, 10:33:00](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss) - [This is the First Time Scientists Have Seen Decision Making in a Brain](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss)
* [2025-09-12, 05:46:00](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss) - [Scientists Discover ‘Clearest Sign’ Yet of Life on Mars](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss)
* [2025-09-12, 01:01:00](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss) - [Unicode version 17.0.0 Released ](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss)
* [2025-09-11, 20:16:00](https://soylentnews.org/article.pl?sid=25/09/10/0627237&amp;from=rss) - [Scientists Create Solar Cells That Generate Energy From Indoor Light at Record Efficiency](https://soylentnews.org/article.pl?sid=25/09/10/0627237&amp;from=rss)
* [2025-09-11, 15:34:00](https://soylentnews.org/article.pl?sid=25/09/10/0624239&amp;from=rss) - [Meta Reportedly Suppressed Research About How Dangerous its VR Headsets Are for Kids](https://soylentnews.org/article.pl?sid=25/09/10/0624239&amp;from=rss)
* [2025-09-11, 10:51:00](https://soylentnews.org/article.pl?sid=25/09/10/0619236&amp;from=rss) - [Cannabis Might be Messing With Female Fertility](https://soylentnews.org/article.pl?sid=25/09/10/0619236&amp;from=rss)
* [2025-09-11, 06:05:00](https://soylentnews.org/article.pl?sid=25/09/10/0436239&amp;from=rss) - [Tiny11 Builder Update Lets Users Strip Copilot and Other Bloat From Windows 11](https://soylentnews.org/article.pl?sid=25/09/10/0436239&amp;from=rss)
* [2025-09-11, 01:19:00](https://soylentnews.org/article.pl?sid=25/09/10/0431231&amp;from=rss) - [48 Years Ago, Voyager 1 Left Earth](https://soylentnews.org/article.pl?sid=25/09/10/0431231&amp;from=rss)
* [2025-09-10, 20:29:00](https://soylentnews.org/article.pl?sid=25/09/10/0113202&amp;from=rss) - [Scientists Turned Plastic Trash Into a Material That Eats Carbon](https://soylentnews.org/article.pl?sid=25/09/10/0113202&amp;from=rss)
* [2025-09-10, 15:44:00](https://soylentnews.org/article.pl?sid=25/09/10/0055209&amp;from=rss) - [Ubuntu Software Repositories Unavailable or Slow for Multiple Days Due to Outage](https://soylentnews.org/article.pl?sid=25/09/10/0055209&amp;from=rss)
* [2025-09-10, 10:57:00](https://soylentnews.org/article.pl?sid=25/09/10/0052200&amp;from=rss) - [Amazon&apos;s Project Kuiper Signs Up JetBlue as its First Airline Customer to Use its Satellite Internet](https://soylentnews.org/article.pl?sid=25/09/10/0052200&amp;from=rss)
* [2025-09-10, 06:13:00](https://soylentnews.org/article.pl?sid=25/09/09/1559244&amp;from=rss) - [Congress and Trump May Compromise on the SLS Rocket by Axing its Costly Upper Stage](https://soylentnews.org/article.pl?sid=25/09/09/1559244&amp;from=rss)
* [2025-09-10, 01:28:00](https://soylentnews.org/article.pl?sid=25/09/09/1229205&amp;from=rss) - [Your Red is My Red, at Least to Our Brains](https://soylentnews.org/article.pl?sid=25/09/09/1229205&amp;from=rss)
* [2025-09-09, 20:43:00](https://soylentnews.org/article.pl?sid=25/09/08/1814241&amp;from=rss) - [Microsoft Software Reselling Dispute Heads Back to UK Court](https://soylentnews.org/article.pl?sid=25/09/08/1814241&amp;from=rss)
* [2025-09-09, 20:10:00](https://news.ycombinator.com/item?id=45188116) - [Show HN: Vicinae – a native, Raycast-compatible launcher for Linux](https://github.com/vicinaehq/vicinae)
* [2025-09-09, 16:08:33](https://news.ycombinator.com/item?id=45184052) - [The Value of Bringing a Telephoto Lens](https://avidandrew.com/telephoto.html)
* [2025-09-09, 15:59:00](https://soylentnews.org/article.pl?sid=25/09/08/1810222&amp;from=rss) - [Multiple Undersea Cable Cuts in the Red Sea, Hampering Internet Performance](https://soylentnews.org/article.pl?sid=25/09/08/1810222&amp;from=rss)
* [2025-09-09, 15:12:46](https://news.ycombinator.com/item?id=45183057) - [Does All Semiconductor Manufacturing Depend on Spruce Pine Quartz? (2024)](https://www.construction-physics.com/p/does-all-semiconductor-manufacturing)
* [2025-09-09, 13:21:18](https://news.ycombinator.com/item?id=45181577) - [How to Use Claude Code Subagents to Parallelize Development](https://zachwills.net/how-to-use-claude-code-subagents-to-parallelize-development/)
* [2025-09-09, 11:14:00](https://soylentnews.org/article.pl?sid=25/09/08/1210241&amp;from=rss) - [Recreating &apos;The Magnificient Ambersons&apos; With AI](https://soylentnews.org/article.pl?sid=25/09/08/1210241&amp;from=rss)
* [2025-09-09, 10:46:46](https://news.ycombinator.com/item?id=45180213) - [Weird CPU architectures, the MOV only CPU (2020)](https://justanotherelectronicsblog.com/?p=771)
* [2025-09-09, 10:31:22](https://news.ycombinator.com/item?id=45180094) - [Resizing images in Rust, now with EXIF orientation support](https://alexwlchan.net/2025/create-thumbnail-is-exif-aware/)
* [2025-09-09, 06:27:00](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss) - [The World&apos;s Largest Iceberg is Rapidly Breaking Apart and Melting Away](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss)
* [2025-09-09, 01:39:00](https://soylentnews.org/article.pl?sid=25/09/08/0254218&amp;from=rss) - [Mazda Patents Six-Stroke Gas Engine](https://soylentnews.org/article.pl?sid=25/09/08/0254218&amp;from=rss)
