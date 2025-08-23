# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Its Environmental & Social Impacts

* [Google Says It Dropped the Energy Cost of AI Queries By 33x In One Year](https://tech.slashdot.org/story/25/08/22/2118234/google-says-it-dropped-the-energy-cost-of-ai-queries-by-33x-in-one-year?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google details a significant reduction in the energy efficiency of AI services, with implications for sustainability.

* [Measuring the environmental impact of AI inference](https://arstechnica.com/ai/2025/08/google-says-it-dropped-the-energy-cost-of-ai-queries-by-33x-in-one-year/) - Explores the broader consequences and ways to measure the energy consumption of AI operations.

* [The use of LLM assistants for kernel development](https://lwn.net/Articles/1032612/) - Discusses the application of large language models in system programming, including challenges and benefits.

* [My tips for using LLM agents to create software](https://efitz-thoughts.blogspot.com/2025/08/my-experience-creating-software-with_22.html) - A guide for effectively leveraging language models in practical software creation.

## Technology and Innovation

* [Meta Set To Unveil First Consumer-Ready Smart Glasses With a Display, Wristband](https://hardware.slashdot.org/story/25/08/22/217232/meta-set-to-unveil-first-consumer-ready-smart-glasses-with-a-display-wristband?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Meta's new wearable tech may redefine personal computing.

* [Waymo Granted First Permit To Being Testing Autonomous Vehicles In NYC](https://tech.slashdot.org/story/25/08/22/2036239/waymo-granted-first-permit-to-being-testing-autonomous-vehicles-in-nyc?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Marks a regulatory milestone in autonomous vehicle deployment.

* [Google TV and Android TV Apps Must Support 64-bit Starting August 2026](https://tech.slashdot.org/story/25/08/22/1624208/google-tv-and-android-tv-apps-must-support-64-bit-starting-august-2026?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Signals a shift in future app development standards for streaming devices.

* [Bluesky Blocks Service In Mississippi Over Age Assurance Law](https://tech.slashdot.org/story/25/08/22/2327213/bluesky-blocks-service-in-mississippi-over-age-assurance-law?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A tech platform faces challenges brought by legal constraints on age verification.

## Controversial Policies and Legal Debates

* [Japan city drafts ordinance to cap smartphone use at 2 hours per day](https://english.kyodonews.net/articles/-/59582) - A proposed smartphone use limit raises concerns about its impact on daily life and personal freedoms.

* [T-Mobile Claimed Selling Location Data Without Consent is Legal—Judges Disagree](https://soylentnews.org/article.pl?sid=25/08/22/010203&from=rss) - The legal battle over data privacy highlights shifting judicial attitudes.

* [Computer fraud laws used to prosecute leaking air crash footage to CNN](https://www.techdirt.com/2025/08/22/investigators-used-terrible-computer-fraud-laws-to-ensure-people-were-punished-for-leaking-air-crash-footage-to-cnn/) - Raises questions about misuse of computer fraud statutes in whistleblowing cases.

* [4chan Refuses To Pay UK Online Safety Act Fines](https://news.slashdot.org/story/25/08/22/2029253/4chan-refuses-to-pay-uk-online-safety-act-fines?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A free-speech platform confronts government regulations on safety compliance.

## Scientific Advancements

* [Scientists 3D Print Inside a Living Cell](https://soylentnews.org/article.pl?sid=25/08/18/126258&from=rss) - Stunning progress in cellular biology paves the way for groundbreaking medical interventions.

* [New Research Ferments the Perfect Recipe for Fine Chocolate Flavour](https://soylentnews.org/article.pl?sid=25/08/22/019206&from=rss) - Reveals the intersection of microbiology and culinary enhancements.

* [Physics of Badminton’s New Killer Spin Serve](https://soylentnews.org/article.pl?sid=25/08/20/1743213&from=rss) - Highlights the scientific underpinnings of evolving sports techniques.

* [Tree Species Face Unprecedented Climate Shifts Across Their Ranges](https://soylentnews.org/article.pl?sid=25/08/21/1213229&from=rss) - Examines the environmental challenges for global biodiversity.

## Programming and Systems

* [The 9 Go test assertions I use (and why)](https://www.alexedwards.net/blog/the-9-go-test-assertions-i-use) - Insightful practices to streamline writing testable Go code.

* [Materialized views are obviously useful](https://sophiebits.com/2025/08/22/materialized-views-are-obviously-useful) - Advocates for improving relational database performance using materialized views.

* [Nitro: A tiny but flexible init system and process supervisor](https://git.vuxu.org/nitro/about/) - A lightweight solution for managing system processes effectively.

* [Closing the Nix gap: From environments to packaged applications for rust](https://devenv.sh/blog/2025/08/22/closing-the-nix-gap-from-environments-to-packaged-applications-for-rust/) - Practical insights into building seamless Rust applications using Nix.

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

* [2025-08-23, 06:10:00](https://soylentnews.org/article.pl?sid=25/08/22/019206&amp;from=rss) - [New Research Ferments the Perfect Recipe for Fine Chocolate Flavour](https://soylentnews.org/article.pl?sid=25/08/22/019206&amp;from=rss)
* [2025-08-23, 03:39:37](https://news.ycombinator.com/item?id=44992930) - [A visual history of Visual C++ (2017)](http://www.malsmith.net/blog/visual-c-visual-history/)
* [2025-08-23, 03:30:00](https://tech.slashdot.org/story/25/08/22/2118234/google-says-it-dropped-the-energy-cost-of-ai-queries-by-33x-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says It Dropped the Energy Cost of AI Queries By 33x In One Year](https://tech.slashdot.org/story/25/08/22/2118234/google-says-it-dropped-the-energy-cost-of-ai-queries-by-33x-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 03:22:33](https://news.ycombinator.com/item?id=44992832) - [Measuring the environmental impact of AI inference](https://arstechnica.com/ai/2025/08/google-says-it-dropped-the-energy-cost-of-ai-queries-by-33x-in-one-year/)
* [2025-08-23, 03:08:06](https://lobste.rs/s/tbo1nr/materialized_views_are_obviously_useful) - [Materialized views are obviously useful](https://sophiebits.com/2025/08/22/materialized-views-are-obviously-useful)
* [2025-08-23, 02:49:52](https://lobste.rs/s/nun8rm/introduction_trellis_owl_1986) - [An Introduction to Trellis-Owl (1986)](https://dl.acm.org/doi/pdf/10.1145/960112.28699)
* [2025-08-23, 02:20:09](https://news.ycombinator.com/item?id=44992446) - [Japan city drafts ordinance to cap smartphone use at 2 hours per day](https://english.kyodonews.net/articles/-/59582)
* [2025-08-23, 01:25:00](https://soylentnews.org/article.pl?sid=25/08/22/010203&amp;from=rss) - [T-Mobile Claimed Selling Location Data Without Consent is Legal—Judges Disagree](https://soylentnews.org/article.pl?sid=25/08/22/010203&amp;from=rss)
* [2025-08-23, 01:14:05](https://lobste.rs/s/sxk1le/9_go_test_assertions_i_use_why) - [The 9 Go test assertions I use (and why)](https://www.alexedwards.net/blog/the-9-go-test-assertions-i-use)
* [2025-08-23, 00:59:02](https://news.ycombinator.com/item?id=44991884) - [My tips for using LLM agents to create software](https://efitz-thoughts.blogspot.com/2025/08/my-experience-creating-software-with_22.html)
* [2025-08-23, 00:20:00](https://tech.slashdot.org/story/25/08/22/2327213/bluesky-blocks-service-in-mississippi-over-age-assurance-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bluesky Blocks Service In Mississippi Over Age Assurance Law](https://tech.slashdot.org/story/25/08/22/2327213/bluesky-blocks-service-in-mississippi-over-age-assurance-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 00:04:56](https://news.ycombinator.com/item?id=44991542) - [Computer fraud laws used to prosecute leaking air crash footage to CNN](https://www.techdirt.com/2025/08/22/investigators-used-terrible-computer-fraud-laws-to-ensure-people-were-punished-for-leaking-air-crash-footage-to-cnn/)
* [2025-08-22, 23:50:13](https://news.ycombinator.com/item?id=44991384) - [Popular Japanese smartphone games have introduced external payment systems](https://english.kyodonews.net/articles/-/59689)
* [2025-08-22, 23:40:00](https://hardware.slashdot.org/story/25/08/22/217232/meta-set-to-unveil-first-consumer-ready-smart-glasses-with-a-display-wristband?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Set To Unveil First Consumer-Ready Smart Glasses With a Display, Wristband](https://hardware.slashdot.org/story/25/08/22/217232/meta-set-to-unveil-first-consumer-ready-smart-glasses-with-a-display-wristband?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 23:09:04](https://news.ycombinator.com/item?id=44991039) - [Mail Carriers Pause US Deliveries as Tariff Shift Sows Confusion](https://www.bloomberg.com/news/articles/2025-08-21/global-mail-services-halt-us-deliveries-ahead-of-de-minimis-end)
* [2025-08-22, 23:02:05](https://news.ycombinator.com/item?id=44990981) - [The use of LLM assistants for kernel development](https://lwn.net/Articles/1032612/)
* [2025-08-22, 23:00:00](https://it.slashdot.org/story/25/08/22/2059255/microsoft-reportedly-cuts-chinas-early-access-to-bug-disclosures-poc-exploit-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Reportedly Cuts China&apos;s Early Access to Bug Disclosures, PoC Exploit Code](https://it.slashdot.org/story/25/08/22/2059255/microsoft-reportedly-cuts-chinas-early-access-to-bug-disclosures-poc-exploit-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 22:59:56](https://lobste.rs/s/8bnfjy/on_use_llm_assistants_for_kernel) - [On the use of LLM assistants for kernel development](https://lwn.net/Articles/1032612/)
* [2025-08-22, 22:51:27](https://news.ycombinator.com/item?id=44990886) - [Bluesky Goes Dark in Mississippi over Age Verification Law](https://www.wired.com/story/bluesky-goes-dark-in-mississippi-age-verification/)
* [2025-08-22, 22:41:20](https://news.ycombinator.com/item?id=44990798) - [Transcribe music in abc with syntax highlighting](https://fugue-state.io/app?project=24024aab-22f1-43cc-abef-c1647cc59597)
* [2025-08-22, 22:29:28](https://news.ycombinator.com/item?id=44990680) - [Glyn: Type-safe PubSub and Registry for Gleam actors with distributed clustering](https://github.com/mbuhot/glyn)
* [2025-08-22, 22:20:00](https://tech.slashdot.org/story/25/08/22/2036239/waymo-granted-first-permit-to-being-testing-autonomous-vehicles-in-nyc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Granted First Permit To Being Testing Autonomous Vehicles In NYC](https://tech.slashdot.org/story/25/08/22/2036239/waymo-granted-first-permit-to-being-testing-autonomous-vehicles-in-nyc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 22:00:00](https://meta.slashdot.org/story/25/08/22/2043255/meta-signs-10-billion-cloud-deal-with-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Signs $10 Billion Cloud Deal With Google](https://meta.slashdot.org/story/25/08/22/2043255/meta-signs-10-billion-cloud-deal-with-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 21:40:00](https://news.slashdot.org/story/25/08/22/2036256/record-solar-growth-keeps-chinas-co2-falling-in-first-half-of-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Record Solar Growth Keeps China&apos;s CO2 Falling in First Half of 2025](https://news.slashdot.org/story/25/08/22/2036256/record-solar-growth-keeps-chinas-co2-falling-in-first-half-of-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 21:01:52](https://news.ycombinator.com/item?id=44989773) - [U.S. government takes 10% stake in Intel](https://www.cnbc.com/2025/08/22/intel-goverment-equity-stake.html)
* [2025-08-22, 21:00:00](https://news.slashdot.org/story/25/08/22/2029253/4chan-refuses-to-pay-uk-online-safety-act-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [4chan Refuses To Pay UK Online Safety Act Fines](https://news.slashdot.org/story/25/08/22/2029253/4chan-refuses-to-pay-uk-online-safety-act-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 20:39:00](https://soylentnews.org/article.pl?sid=25/08/21/1213229&amp;from=rss) - [Tree Species Face Unprecedented Climate Shifts Across Their Ranges](https://soylentnews.org/article.pl?sid=25/08/21/1213229&amp;from=rss)
* [2025-08-22, 20:20:00](https://news.slashdot.org/story/25/08/22/2020223/workers-need-better-protections-from-the-heat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Workers Need Better Protections From the Heat](https://news.slashdot.org/story/25/08/22/2020223/workers-need-better-protections-from-the-heat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 20:03:05](https://lobste.rs/s/ysmsfu/no_google_did_not_unilaterally_decide) - [No, Google Did Not Unilaterally Decide to Kill XSLT](https://meyerweb.com/eric/thoughts/2025/08/22/no-google-did-not-unilaterally-decide-to-kill-xslt/)
* [2025-08-22, 19:52:41](https://lobste.rs/s/0ktx6s/string_formatting_library_65_lines_c) - [A string formatting library in 65 lines of C++](https://riki.house/fmt)
* [2025-08-22, 19:30:58](https://lobste.rs/s/pc87c0/why_was_apache_kafka_created) - [Why Was Apache Kafka Created?](https://bigdatastream.substack.com/p/why-was-apache-kafka-created)
* [2025-08-22, 19:30:00](https://slashdot.org/story/25/08/22/1925255/europe-is-losing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe Is Losing](https://slashdot.org/story/25/08/22/1925255/europe-is-losing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 19:06:29](https://news.ycombinator.com/item?id=44988530) - [Nitro: A tiny but flexible init system and process supervisor](https://git.vuxu.org/nitro/about/)
* [2025-08-22, 19:04:51](https://lobste.rs/s/xltjpn/nitro_tiny_flexible_init_system_process) - [nitro: a tiny but flexible init system and process supervisor](https://git.vuxu.org/nitro/about/)
* [2025-08-22, 18:51:57](https://lobste.rs/s/kl2nwa/first_moq_cdn_cloudflare) - [The First MoQ CDN: Cloudflare](https://moq.dev/blog/first-cdn/)
* [2025-08-22, 18:50:00](https://news.slashdot.org/story/25/08/22/1849210/intel-has-agreed-to-a-deal-for-us-to-take-10-equity-stake-trump-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Has Agreed To a Deal For US To Take 10% Equity Stake, Trump Says](https://news.slashdot.org/story/25/08/22/1849210/intel-has-agreed-to-a-deal-for-us-to-take-10-equity-stake-trump-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 18:47:30](https://news.ycombinator.com/item?id=44988271) - [Show HN: JavaScript-free (X)HTML Includes](https://github.com/Evidlo/xsl-website)
* [2025-08-22, 18:24:16](https://news.ycombinator.com/item?id=44987924) - [The first Media over QUIC CDN: Cloudflare](https://moq.dev/blog/first-cdn/)
* [2025-08-22, 18:14:00](https://it.slashdot.org/story/25/08/22/1814219/default-microsoft-365-domains-face-100-email-daily-limit-starting-october?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Default Microsoft 365 Domains Face 100-Email Daily Limit Starting October](https://it.slashdot.org/story/25/08/22/1814219/default-microsoft-365-domains-face-100-email-daily-limit-starting-october?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 17:41:48](https://news.ycombinator.com/item?id=44987380) - [Leaving Gmail for Mailbox.org](https://giuliomagnifico.blog/post/2025-08-18-leaving-gmail/)
* [2025-08-22, 17:33:00](https://apple.slashdot.org/story/25/08/22/1733230/apple-explores-using-google-gemini-ai-to-power-revamped-siri?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Explores Using Google Gemini AI To Power Revamped Siri](https://apple.slashdot.org/story/25/08/22/1733230/apple-explores-using-google-gemini-ai-to-power-revamped-siri?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 17:26:27](https://lobste.rs/s/lsxzfy/optimizing_our_way_through_metroid) - [Optimizing our way through Metroid](https://antithesis.com/blog/2025/metroid/)
* [2025-08-22, 17:16:03](https://lobste.rs/s/snhdea/w65c832_w65c832_32_bit_6502_fpga) - [w65c832: W65C832 (32 bit 6502) in an FPGA](https://github.com/mikeakohn/w65c832)
* [2025-08-22, 17:02:20](https://lobste.rs/s/rmga0q/bubbletea_rs_rust_implementation) - [bubbletea-rs: A rust implementation of Bubbletea](https://github.com/whit3rabbit/bubbletea-rs)
* [2025-08-22, 16:53:30](https://news.ycombinator.com/item?id=44986809) - [Launch HN: BlankBio (YC S25) – Making RNA Programmable](https://news.ycombinator.com/item?id=44986809)
* [2025-08-22, 16:50:00](https://tech.slashdot.org/story/25/08/22/1624208/google-tv-and-android-tv-apps-must-support-64-bit-starting-august-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google TV and Android TV Apps Must Support 64-bit Starting August 2026](https://tech.slashdot.org/story/25/08/22/1624208/google-tv-and-android-tv-apps-must-support-64-bit-starting-august-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 16:12:00](https://news.slashdot.org/story/25/08/22/1612250/us-strips-ocean-and-air-pollution-monitoring-from-next-gen-weather-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Strips Ocean and Air Pollution Monitoring From Next-Gen Weather Satellites](https://news.slashdot.org/story/25/08/22/1612250/us-strips-ocean-and-air-pollution-monitoring-from-next-gen-weather-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 16:07:24](https://lobste.rs/s/u9v6jj/closing_nix_gap_from_environments) - [Closing the Nix Gap: From Environments to Packaged Applications for Rust](https://devenv.sh/blog/2025/08/22/closing-the-nix-gap-from-environments-to-packaged-applications-for-rust/)
* [2025-08-22, 16:06:15](https://news.ycombinator.com/item?id=44986251) - [Closing the Nix gap: From environments to packaged applications for rust](https://devenv.sh/blog/2025/08/22/closing-the-nix-gap-from-environments-to-packaged-applications-for-rust/)
* [2025-08-22, 15:56:00](https://soylentnews.org/article.pl?sid=25/08/21/123255&amp;from=rss) - [Adult Sites Are Stashing Exploit Code Inside Racy .svg Files](https://soylentnews.org/article.pl?sid=25/08/21/123255&amp;from=rss)
* [2025-08-22, 15:22:42](https://news.ycombinator.com/item?id=44985730) - [FFmpeg 8.0](https://ffmpeg.org/index.html#pr8.0)
* [2025-08-22, 14:48:27](https://lobste.rs/s/othw2q/go_is_still_not_good) - [Go is still not good](https://blog.habets.se/2025/07/Go-is-still-not-good.html)
* [2025-08-22, 14:38:21](https://lobste.rs/s/cw265v/have_smart_glasses_finally_hit) - [Have smart glasses finally hit an inflection point?](https://torment-nexus.mathewingram.com/have-smart-glasses-finally-hit-an-inflection-point/)
* [2025-08-22, 14:08:37](https://lobste.rs/s/nhrlya/be_better_programmer_write_little_proofs) - [To be a better programmer, write little proofs in your head](https://the-nerve-blog.ghost.io/to-be-a-better-programmer-write-little-proofs-in-your-head/)
* [2025-08-22, 13:55:12](https://lobste.rs/s/ntruuu/lobsters_interview_with_matklad) - [Lobsters Interview with Matklad](https://lobste.rs/s/ntruuu/lobsters_interview_with_matklad)
* [2025-08-22, 12:24:03](https://lobste.rs/s/62si4z/i_m_too_dumb_for_zig_s_new_io_interface) - [I&apos;m too dumb for Zig&apos;s new IO interface](https://www.openmymind.net/Im-Too-Dumb-For-Zigs-New-IO-Interface/)
* [2025-08-22, 11:11:00](https://soylentnews.org/article.pl?sid=25/08/21/1154233&amp;from=rss) - [Teenagers Are Choosing to Study STEM Subjects. It&apos;s a Sign of the Times](https://soylentnews.org/article.pl?sid=25/08/21/1154233&amp;from=rss)
* [2025-08-22, 09:11:26](https://news.ycombinator.com/item?id=44982409) - [LabPlot: Free, open source and cross-platform Data Visualization and Analysis](https://labplot.org/)
* [2025-08-22, 08:23:26](https://lobste.rs/s/ug4ch4/arch_linux_news_recent_service_outages) - [Arch Linux - News: Recent service outages](https://archlinux.org/news/recent-services-outages/)
* [2025-08-22, 06:22:44](https://lobste.rs/s/tkydi6/baby_paradox_haskell) - [The Baby Paradox in Haskell](https://blog.jle.im/entry/the-baby-paradox-in-haskell.html)
* [2025-08-22, 06:22:00](https://soylentnews.org/article.pl?sid=25/08/20/2255245&amp;from=rss) - [VW Introduces Monthly Subscription to Increase Car Power](https://soylentnews.org/article.pl?sid=25/08/20/2255245&amp;from=rss)
* [2025-08-22, 06:18:56](https://news.ycombinator.com/item?id=44981525) - [It’s not wrong that \&quot;\\u{1F926}\\u{1F3FC}\\u200D\\u2642\\uFE0F\&quot;.length == 7 (2019)](https://hsivonen.fi/string-length/)
* [2025-08-22, 05:20:26](https://lobste.rs/s/hnwcq6/what_hell_is_going_on_right_now) - [What the hell is going on right now?](https://catskull.net/what-the-hell-is-going-on-right-now.html)
* [2025-08-22, 04:48:29](https://news.ycombinator.com/item?id=44981088) - [Top Secret: Automatically filter sensitive information](https://thoughtbot.com/blog/top-secret)
* [2025-08-22, 01:35:00](https://soylentnews.org/article.pl?sid=25/08/20/2242220&amp;from=rss) - [We Need to Become Unoptomizable](https://soylentnews.org/article.pl?sid=25/08/20/2242220&amp;from=rss)
* [2025-08-22, 01:09:33](https://news.ycombinator.com/item?id=44980064) - [The issue of anti-cheat on Linux (2024)](https://tulach.cc/the-issue-of-anti-cheat-on-linux/)
* [2025-08-22, 00:39:07](https://lobste.rs/s/goaf6y/issue_anti_cheat_on_linux) - [The issue of anti-cheat on Linux](https://tulach.cc/the-issue-of-anti-cheat-on-linux/)
* [2025-08-21, 20:49:00](https://soylentnews.org/article.pl?sid=25/08/20/1759228&amp;from=rss) - [Uncovering the Fraudsters and Their Schemes Responsible for Polluting the Scientific Literature](https://soylentnews.org/article.pl?sid=25/08/20/1759228&amp;from=rss)
* [2025-08-21, 20:03:14](https://lobste.rs/s/ej6pen/grug_design) - [grug.design](https://www.grug.design/know)
* [2025-08-21, 17:15:13](https://lobste.rs/s/xoa1sx/core_rust) - [the core of rust](https://jyn.dev/the-core-of-rust/)
* [2025-08-21, 16:09:00](https://soylentnews.org/article.pl?sid=25/08/20/1743213&amp;from=rss) - [Physics of Badminton’s New Killer Spin Serve](https://soylentnews.org/article.pl?sid=25/08/20/1743213&amp;from=rss)
* [2025-08-21, 14:47:43](https://lobste.rs/s/s4jdny/my_other_email_client_is_daemon) - [My other email client is a daemon](https://feyor.sh/blog/my-other-email-client-is-a-mail-daemon/)
* [2025-08-21, 11:24:00](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss) - [Mozilla Warns Germany Could Declare Ad Blockers Illegal](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss)
* [2025-08-21, 06:38:00](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss) - [If AI Takes Most of Our Jobs, Money as We Know It Will be Over. What Then?](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss)
* [2025-08-21, 01:52:00](https://soylentnews.org/article.pl?sid=25/08/20/0153218&amp;from=rss) - [A Treatise on AI Chatbots Undermining the Enlightenment](https://soylentnews.org/article.pl?sid=25/08/20/0153218&amp;from=rss)
* [2025-08-20, 21:08:00](https://soylentnews.org/article.pl?sid=25/08/20/0149227&amp;from=rss) - [Whoops, They Did It Again](https://soylentnews.org/article.pl?sid=25/08/20/0149227&amp;from=rss)
* [2025-08-20, 17:52:00](https://news.ycombinator.com/item?id=44964294) - [The theory and practice of selling the Aga cooker (1935) [pdf]](https://comeadwithus.wordpress.com/wp-content/uploads/2012/08/the-theory-and-practice-of-selling-the-aga-cooker.pdf)
* [2025-08-20, 16:22:00](https://soylentnews.org/article.pl?sid=25/08/20/0132257&amp;from=rss) - [The Big Slow Church Move](https://soylentnews.org/article.pl?sid=25/08/20/0132257&amp;from=rss)
* [2025-08-20, 14:36:52](https://news.ycombinator.com/item?id=44962373) - [Now, Together](https://natashajaffe.substack.com/p/now-together)
* [2025-08-20, 12:47:06](https://news.ycombinator.com/item?id=44961443) - [Why is this hard?](https://programmersstone.blog/posts/why-is-this-hard/)
* [2025-08-20, 11:35:00](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss) - [How Chefs and Scientists Are Using Kombucha and Kimchi to Study Microbiology](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss)
* [2025-08-20, 11:08:15](https://news.ycombinator.com/item?id=44960750) - [Shader Academy: Learn computer graphics by solving challenges](https://shaderacademy.com/)
* [2025-08-20, 06:48:00](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss) - [Scientists Say Tool Can Sniff 5G Traffic, Launch &apos;Attacks&apos; Without Using Rogue Base Stations](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss)
* [2025-08-20, 02:06:00](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss) - [Can’t Pay, Won’t Pay: Impoverished Streaming Services are Driving Viewers Back to Piracy](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss)
* [2025-08-19, 21:21:00](https://soylentnews.org/article.pl?sid=25/08/19/0050215&amp;from=rss) - [Attorneys General, HCA Settle Over Nurse Training Repayment Provisions](https://soylentnews.org/article.pl?sid=25/08/19/0050215&amp;from=rss)
* [2025-08-19, 20:25:06](https://news.ycombinator.com/item?id=44955923) - [From M1 MacBook to Arch Linux: A month-long experiment that became permanenent](https://www.ssp.sh/blog/macbook-to-arch-linux-omarchy/)
* [2025-08-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/08/19/195256&amp;from=rss) - [Only 3 Stories in the Submissions Queue](https://soylentnews.org/article.pl?sid=25/08/19/195256&amp;from=rss)
* [2025-08-19, 16:35:00](https://soylentnews.org/article.pl?sid=25/08/19/0044229&amp;from=rss) - [Federal Court Filing System Hit in Sweeping Hack](https://soylentnews.org/article.pl?sid=25/08/19/0044229&amp;from=rss)
* [2025-08-19, 11:53:00](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss) - [Charged Drops Don&apos;t Splash](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss)
* [2025-08-19, 11:39:47](https://news.ycombinator.com/item?id=44950482) - [I run a full Linux desktop in Docker just because I can](https://www.howtogeek.com/i-run-a-full-linux-desktop-in-docker-just-because-i-can/)
* [2025-08-19, 07:41:49](https://news.ycombinator.com/item?id=44949203) - [Embedding Text Documents with Qwen3](https://www.daft.ai/blog/embedding-millions-of-text-documents-with-qwen3)
* [2025-08-19, 07:05:00](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss) - [Scientists 3D Print Inside a Living Cell](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss)
* [2025-08-19, 02:20:00](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss) - [Wikipedia Loses Challenge Against Online Safety Act, but the Door is Open for a Challenge](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss)
