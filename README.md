# [News Summary](https://kherrick.github.io/news-summary/)

## Environment and Sustainability

* [World's Oceans Fail Key Health Check As Acidity Crosses Critical Threshold For Marine Life](https://news.slashdot.org/story/25/09/24/2156242/worlds-oceans-fail-key-health-check-as-acidity-crosses-critical-threshold-for-marine-life?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Growing concerns over ocean acidification and its dire implications for marine ecosystems.

* [Fossil Fuel Burning Poses Threat To Health of 1.6 Billion People, Data Shows](https://news.slashdot.org/story/25/09/24/1956244/fossil-fuel-burning-poses-threat-to-health-of-16-billion-people-data-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A deep dive into the global health risks caused by fossil fuel combustion.

## Technology Advancements

* [Qualcomm Announces Snapdragon X2 Elite and Extreme For Windows PCs](https://hardware.slashdot.org/story/25/09/24/2113246/qualcomm-announces-snapdragon-x2-elite-and-extreme-for-windows-pcs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Qualcomm's latest processors aim to enhance Windows PC performance.

* [Europe's Cookie Law Messed Up the Internet. Brussels Wants To Fix It.](https://tech.slashdot.org/story/25/09/24/2021235/europes-cookie-law-messed-up-the-internet-brussels-wants-to-fix-it?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Efforts underway to simplify Europe's internet cookie regulations.

* [Microsoft Offers No-Cost Windows 10 Lifeline](https://tech.slashdot.org/story/25/09/24/1943257/microsoft-offers-no-cost-windows-10-lifeline?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft provides extended support for Windows 10 users amidst rising upgrade costs.

## Software Development

* [A Developer's Guide to Negative Testing APIs](https://blog.dochia.dev/blog/negative-testing-guide/) - Explained strategies for testing APIs under unfavorable input scenarios.

* [Use the Force (Feedback) to Solder Small Things](https://www.bunniestudios.com/blog/2025/use-the-force-feedback-to-solder-small-things/) - Innovative tips for using haptic feedback in soldering.

* [Temporal_rs is here! The datetime library powering Temporal in Boa, Kiesel, and V8](https://boajs.dev/blog/2025/09/24/temporal-release) - Insights into a newly devised datetime library designed for Temporal systems.

## Cybersecurity

* [Cross-Agent Privilege Escalation: When Agents Free Each Other](https://embracethered.com/blog/posts/2025/cross-agent-privilege-escalation-agents-that-free-each-other/) - Analysis of recent cross-agent privilege escalation vulnerabilities.

* [Record-Breaking DDoS Attack Peaks At 22 Tbps and 10 Bpps](https://it.slashdot.org/story/25/09/24/2010227/record-breaking-ddos-attack-peaks-at-22-tbps-and-10-bpps?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Highlighting a record-breaking distributed denial-of-service attack.

## AI and Ethics

* [Neon Pays Users To Record Their Phone Calls, Sell Data To AI Firms](https://news.slashdot.org/story/25/09/24/2034203/neon-pays-users-to-record-their-phone-calls-sell-data-to-ai-firms?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A controversial program trading personal call data for payment.

* [CFO of $320 Billion Software Firm: AI Will Help Us 'Afford To Have Less People'](https://tech.slashdot.org/story/25/09/24/205220/cfo-of-320-billion-software-firm-ai-will-help-us-afford-to-have-less-people?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discussion on AI replacing human resources in the corporate sector.

## Innovative Ideas and Developments

* [How AWS S3 serves 1 petabyte per second on top of slow HDDs](https://bigdata.2minutestreaming.com/p/how-aws-s3-scales-with-tens-of-millions-of-hard-drives) - Behind-the-scenes engineering powering AWS's massive storage capabilities.

* [How fast is Go? simulating particles on a smart TV](https://dgerrells.com/blog/how-fast-is-go-simulating-millions-of-particles-on-a-smart-tv) - Performance testing Go language's speed by simulating particles.

* [Realtime Raytracing in Bevy 0.17 (Solari)](https://jms55.github.io/posts/2025-09-20-solari-bevy-0-17/) - Exploring innovations in game rendering with real-time ray tracing.

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

* [2025-09-25, 03:53:13](https://lobste.rs/s/gweovt/developer_s_guide_negative_testing_apis) - [A Developer&apos;s Guide to Negative Testing APIs](https://blog.dochia.dev/blog/negative-testing-guide/)
* [2025-09-25, 03:30:00](https://news.slashdot.org/story/25/09/24/2156242/worlds-oceans-fail-key-health-check-as-acidity-crosses-critical-threshold-for-marine-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s Oceans Fail Key Health Check As Acidity Crosses Critical Threshold For Marine Life](https://news.slashdot.org/story/25/09/24/2156242/worlds-oceans-fail-key-health-check-as-acidity-crosses-critical-threshold-for-marine-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 03:24:57](https://lobste.rs/s/xdghmi/use_force_feedback_solder_small_things) - [Use the Force (Feedback) to Solder Small Things](https://www.bunniestudios.com/blog/2025/use-the-force-feedback-to-solder-small-things/)
* [2025-09-25, 01:54:01](https://lobste.rs/s/7ohiib/naming_tack_symbols) - [The Naming of Tack Symbols](https://www.math.uwaterloo.ca/~ljdickey/apl-rep/tables/note1.html)
* [2025-09-25, 01:30:00](https://apple.slashdot.org/story/25/09/24/2141256/intel-approaches-apple-for-potential-investment-amid-struggles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Approaches Apple For Potential Investment Amid Struggles](https://apple.slashdot.org/story/25/09/24/2141256/intel-approaches-apple-for-potential-investment-amid-struggles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 01:24:33](https://news.ycombinator.com/item?id=45368210) - [Homeowner baffled after washing machine uses 3.6GB of internet data a day (2024)](https://www.newsweek.com/homeowner-baffled-washing-machine-uses-3-6gb-internet-1862675)
* [2025-09-25, 01:11:06](https://lobste.rs/s/3sg5sy/graal_truffle_tutorial_part_0_what_is) - [Graal Truffle tutorial part 0 – what is Truffle?](https://www.endoflineblog.com/graal-truffle-tutorial-part-0-what-is-truffle)
* [2025-09-25, 01:10:00](https://hardware.slashdot.org/story/25/09/24/2113246/qualcomm-announces-snapdragon-x2-elite-and-extreme-for-windows-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Qualcomm Announces Snapdragon X2 Elite and Extreme For Windows PCs](https://hardware.slashdot.org/story/25/09/24/2113246/qualcomm-announces-snapdragon-x2-elite-and-extreme-for-windows-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 00:50:00](https://news.slashdot.org/story/25/09/24/2034203/neon-pays-users-to-record-their-phone-calls-sell-data-to-ai-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Neon Pays Users To Record Their Phone Calls, Sell Data To AI Firms](https://news.slashdot.org/story/25/09/24/2034203/neon-pays-users-to-record-their-phone-calls-sell-data-to-ai-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 00:10:00](https://it.slashdot.org/story/25/09/24/2022232/broadcoms-prohibitive-vmware-prices-create-a-learning-barrier-it-pro-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Broadcom&apos;s Prohibitive VMware Prices Create a Learning &apos;Barrier,&apos; IT Pro Says](https://it.slashdot.org/story/25/09/24/2022232/broadcoms-prohibitive-vmware-prices-create-a-learning-barrier-it-pro-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 00:03:41](https://lobste.rs/s/2womxj/cross_agent_privilege_escalation_when) - [Cross-Agent Privilege Escalation: When Agents Free Each Other ·](https://embracethered.com/blog/posts/2025/cross-agent-privilege-escalation-agents-that-free-each-other/)
* [2025-09-24, 23:32:00](https://tech.slashdot.org/story/25/09/24/2021235/europes-cookie-law-messed-up-the-internet-brussels-wants-to-fix-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe&apos;s Cookie Law Messed Up the Internet. Brussels Wants To Fix It.](https://tech.slashdot.org/story/25/09/24/2021235/europes-cookie-law-messed-up-the-internet-brussels-wants-to-fix-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 23:15:38](https://news.ycombinator.com/item?id=45367086) - [How did sports betting become legal in the US?](https://shreyashariharan.substack.com/p/how-did-sports-betting-become-legal)
* [2025-09-24, 23:15:33](https://news.ycombinator.com/item?id=45367085) - [Docker Hub Is Down](https://www.dockerstatus.com/pages/incident/533c6539221ae15e3f000031/68d47a2f93c09e05486d93a9)
* [2025-09-24, 23:12:38](https://news.ycombinator.com/item?id=45367046) - [Do YC after you graduate: Early decision for students](https://www.ycombinator.com/early-decision)
* [2025-09-24, 22:51:16](https://news.ycombinator.com/item?id=45366867) - [Helium Browser](https://helium.computer/)
* [2025-09-24, 22:50:00](https://tech.slashdot.org/story/25/09/24/205220/cfo-of-320-billion-software-firm-ai-will-help-us-afford-to-have-less-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CFO of $320 Billion Software Firm: AI Will Help Us &apos;Afford To Have Less People&apos;](https://tech.slashdot.org/story/25/09/24/205220/cfo-of-320-billion-software-firm-ai-will-help-us-afford-to-have-less-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 22:50:00](https://it.slashdot.org/story/25/09/24/2010227/record-breaking-ddos-attack-peaks-at-22-tbps-and-10-bpps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Record-Breaking DDoS Attack Peaks At 22 Tbps and 10 Bpps](https://it.slashdot.org/story/25/09/24/2010227/record-breaking-ddos-attack-peaks-at-22-tbps-and-10-bpps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 22:11:48](https://news.ycombinator.com/item?id=45366566) - [Everything that&apos;s wrong with Google Search in one image](https://bitbytebit.substack.com/p/everything-thats-wrong-with-google)
* [2025-09-24, 22:11:00](https://news.slashdot.org/story/25/09/24/1956244/fossil-fuel-burning-poses-threat-to-health-of-16-billion-people-data-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fossil Fuel Burning Poses Threat To Health of 1.6 Billion People, Data Shows](https://news.slashdot.org/story/25/09/24/1956244/fossil-fuel-burning-poses-threat-to-health-of-16-billion-people-data-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 22:01:06](https://news.ycombinator.com/item?id=45366474) - [Snapdragon X2 Elite ARM Laptop CPU](https://www.qualcomm.com/products/mobile/snapdragon/laptops-and-tablets/snapdragon-x2-elite)
* [2025-09-24, 21:30:00](https://tech.slashdot.org/story/25/09/24/1953230/cloudflare-launches-content-signals-policy-to-fight-ai-crawlers-and-scrapers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Launches Content Signals Policy To Fight AI Crawlers and Scrapers](https://tech.slashdot.org/story/25/09/24/1953230/cloudflare-launches-content-signals-policy-to-fight-ai-crawlers-and-scrapers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 21:00:00](https://news.ycombinator.com/item?id=45365878) - [SonyShell – An effort to “SSH into my Sony DSLR”](https://github.com/goudvuur/sonyshell)
* [2025-09-24, 20:50:00](https://tech.slashdot.org/story/25/09/24/1948231/google-experiences-deja-vu-as-second-monopoly-trial-begins-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Experiences Deja Vu As Second Monopoly Trial Begins In US](https://tech.slashdot.org/story/25/09/24/1948231/google-experiences-deja-vu-as-second-monopoly-trial-begins-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 20:40:58](https://lobste.rs/s/o8ibca/crates_io_malicious_crates_faster_log) - [crates.io: Malicious crates faster_log and async_println](https://blog.rust-lang.org/2025/09/24/crates.io-malicious-crates-fasterlog-and-asyncprintln/)
* [2025-09-24, 20:10:00](https://tech.slashdot.org/story/25/09/24/1943257/microsoft-offers-no-cost-windows-10-lifeline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Offers No-Cost Windows 10 Lifeline](https://tech.slashdot.org/story/25/09/24/1943257/microsoft-offers-no-cost-windows-10-lifeline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 19:30:00](https://slashdot.org/story/25/09/24/1930219/pocket-casts-is-showing-ads-to-people-who-paid-for-an-ad-free-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pocket Casts is Showing Ads To People Who Paid For an Ad-free App](https://slashdot.org/story/25/09/24/1930219/pocket-casts-is-showing-ads-to-people-who-paid-for-an-ad-free-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 18:48:39](https://news.ycombinator.com/item?id=45364450) - [How fast is Go? simulating particles on a smart TV](https://dgerrells.com/blog/how-fast-is-go-simulating-millions-of-particles-on-a-smart-tv)
* [2025-09-24, 18:24:35](https://lobste.rs/s/catpmf/realtime_raytracing_bevy_0_17_solari) - [Realtime Raytracing in Bevy 0.17 (Solari)](https://jms55.github.io/posts/2025-09-20-solari-bevy-0-17/)
* [2025-09-24, 17:40:22](https://lobste.rs/s/8igt9j/jruby_jdk_25_startup_time_with_aotcache) - [JRuby and JDK 25: Startup Time with AOTCache](https://blog.headius.com/2025/09/jruby-jdk25-startup-time-with-aotcache.html)
* [2025-09-24, 17:25:00](https://slashdot.org/story/25/09/24/1718234/horror-films-wedding-scene-digitally-altered-for-chinese-audiences?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Horror Film&apos;s Wedding Scene Digitally Altered for Chinese Audiences](https://slashdot.org/story/25/09/24/1718234/horror-films-wedding-scene-digitally-altered-for-chinese-audiences?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 16:52:00](https://tech.slashdot.org/story/25/09/24/1652218/qualcomm-ceo-says-hes-seen-googles-android-chromeos-merger-calls-it-incredible?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Qualcomm CEO Says He&apos;s Seen Google&apos;s Android-ChromeOS Merger, Calls It &apos;Incredible&apos;](https://tech.slashdot.org/story/25/09/24/1652218/qualcomm-ceo-says-hes-seen-googles-android-chromeos-merger-calls-it-incredible?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 16:48:27](https://news.ycombinator.com/item?id=45362914) - [Launch HN: Flywheel (YC S25) – Waymo for Excavators](https://news.ycombinator.com/item?id=45362914)
* [2025-09-24, 16:32:24](https://news.ycombinator.com/item?id=45362697) - [Terence Tao: The role of small organizations in society has shrunk significantly](https://mathstodon.xyz/@tao/115259943398316677)
* [2025-09-24, 16:27:40](https://lobste.rs/s/8vj1t9/temporal_rs_is_here_datetime_library) - [Temporal_rs is here! The datetime library powering Temporal in Boa, Kiesel, and V8](https://boajs.dev/blog/2025/09/24/temporal-release)
* [2025-09-24, 16:23:31](https://lobste.rs/s/v7qdfg/php_fractal_bad_design_2012) - [PHP: a fractal of bad design (2012)](https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/)
* [2025-09-24, 16:17:34](https://news.ycombinator.com/item?id=45362486) - [Better Curl Saul: a lightweight API testing CLI focused on UX and simplicity](https://github.com/DeprecatedLuar/better-curl-saul)
* [2025-09-24, 16:03:42](https://news.ycombinator.com/item?id=45362254) - [New bacteria, and two potential antibiotics, discovered in soil](https://www.rockefeller.edu/news/38239-hundreds-of-new-bacteria-and-two-potential-antibiotics-found-in-soil/)
* [2025-09-24, 16:00:45](https://news.ycombinator.com/item?id=45362206) - [SedonaDB: A new geospatial DataFrame library written in Rust](https://sedona.apache.org/latest/blog/2025/09/24/introducing-sedonadb-a-single-node-analytical-database-engine-with-geospatial-as-a-first-class-citizen/)
* [2025-09-24, 15:55:10](https://lobste.rs/s/u1rffj/engineering_fixed_width_bit_packed) - [Engineering a fixed-width bit-packed Integer Vector in Rust](https://lukefleed.xyz/posts/compressed-fixedvec/)
* [2025-09-24, 15:49:29](https://lobste.rs/s/wsmnrg/tuning_aio_postgresql_18) - [Tuning AIO in PostgreSQL 18](https://vondra.me/posts/tuning-aio-in-postgresql-18/)
* [2025-09-24, 15:48:36](https://news.ycombinator.com/item?id=45362023) - [Python on the Edge: Fast, sandboxed, and powered by WebAssembly](https://wasmer.io/posts/python-on-the-edge-powered-by-webassembly)
* [2025-09-24, 15:17:08](https://news.ycombinator.com/item?id=45361578) - [Engineering a fixed-width bit-packed integer vector in Rust](https://lukefleed.xyz/posts/compressed-fixedvec/)
* [2025-09-24, 15:03:59](https://news.ycombinator.com/item?id=45361394) - [How to be a leader when the vibes are off](https://chaoticgood.management/how-to-be-a-leader-when-the-vibes-are-off/)
* [2025-09-24, 14:53:57](https://news.ycombinator.com/item?id=45361268) - [Show HN: Dayflow – A git log for your day](https://github.com/JerryZLiu/Dayflow)
* [2025-09-24, 14:20:33](https://news.ycombinator.com/item?id=45360824) - [Smartphone Cameras Go Hyperspectral](https://spectrum.ieee.org/hyperspectral-imaging)
* [2025-09-24, 13:56:37](https://news.ycombinator.com/item?id=45360475) - [Just let me select text](https://aartaka.me/select-text.html)
* [2025-09-24, 13:51:00](https://lobste.rs/s/f13wey/don_t_even_consider_starting_with) - [Don&apos;t even consider starting with Microsoft](https://lionelbarrow.substack.com/p/dont-even-consider-starting-with)
* [2025-09-24, 13:30:40](https://lobste.rs/s/aimofq/software_substrates_should_there_be_only) - [Software substrates: should there be only one?](https://www.humprog.org/~stephen/research/papers/kell25substratus.pdf)
* [2025-09-24, 12:52:52](https://news.ycombinator.com/item?id=45359604) - [How to Lead in a Room Full of Experts](https://idiallo.com/blog/how-to-lead-in-a-room-full-of-experts)
* [2025-09-24, 12:45:07](https://news.ycombinator.com/item?id=45359524) - [Learning Persian with Anki, ChatGPT and YouTube](https://cjauvin.github.io/posts/learning-persian/)
* [2025-09-24, 11:52:50](https://news.ycombinator.com/item?id=45359074) - [EU age verification app not planning desktop support](https://github.com/eu-digital-identity-wallet/av-doc-technical-specification/issues/22)
* [2025-09-24, 11:41:54](https://news.ycombinator.com/item?id=45358980) - [Yt-dlp: Upcoming new requirements for YouTube downloads](https://github.com/yt-dlp/yt-dlp/issues/14404)
* [2025-09-24, 11:37:30](https://news.ycombinator.com/item?id=45358940) - [Huntington&apos;s disease treated for first time](https://www.bbc.com/news/articles/cevz13xkxpro)
* [2025-09-24, 10:05:29](https://news.ycombinator.com/item?id=45358280) - [How AWS S3 serves 1 petabyte per second on top of slow HDDs](https://bigdata.2minutestreaming.com/p/how-aws-s3-scales-with-tens-of-millions-of-hard-drives)
* [2025-09-24, 10:03:24](https://lobste.rs/s/p1mdwu/how_s3_scales_petabytes_second_on_top_tens) - [How S3 scales to petabytes a second on top of tens of millions of slow HDDs](https://bigdatastream.substack.com/p/how-aws-s3-scales-with-tens-of-millions-of-hard-drives)
* [2025-09-24, 06:36:20](https://lobste.rs/s/capy02/moving_fast_hardware_how_ipod_shipped_6) - [Moving fast in hardware: how the iPod shipped in 6 months](https://www.hscott.net/moving-fast-in-hardware-how-the-ipod-shipped-in-6-months/)
* [2025-09-24, 05:07:10](https://lobste.rs/s/zfktn9/google_continues_invest_350k_rust) - [Google continues to invest 350k in the Rust ecosystem](https://www.linkedin.com/posts/lars-a-bergstrom_android-rust-security-activity-7376353918022270976-Y73P)
* [2025-09-24, 04:21:33](https://lobste.rs/s/y6e06t/ai_is_impressive_because_we_ve_failed_at) - [AI is impressive because we’ve failed at semantic web and personal computing](https://rakhim.exotext.com/ai-is-impressive-because-we-ve-failed-at-semantic-web-and-personal-computing)
* [2025-09-24, 03:41:06](https://lobste.rs/s/pn4hqe/should_neovim_support_transitive_plugin) - [Should Neovim support transitive plugin dependencies?](https://sink.io/jmk/neovim-plugin-deps/)
* [2025-09-24, 03:38:08](https://lobste.rs/s/gl18mt/zubanls_mypy_compatible_python_language) - [ZubanLS: A Mypy-compatible Python Language Server built in Rust](https://zubanls.com/)
* [2025-09-24, 01:09:55](https://lobste.rs/s/bfrugi/from_rust_reality_hidden_journey_fetch) - [From Rust to Reality: The Hidden Journey of fetch_max](https://questdb.com/blog/rust-fetch-max-compiler-journey/)
* [2025-09-23, 22:55:38](https://lobste.rs/s/shbssy/benjamin_button_reviews_macos) - [Benjamin Button Reviews macOS](https://rakhim.exotext.com/benjamin-button-reviews-macos)
* [2025-09-23, 20:35:51](https://lobste.rs/s/jxrtjp/rust_foundation_signs_joint_statement_on) - [Rust Foundation Signs Joint Statement on Open Source Infrastructure Stewardship](https://rustfoundation.org/media/rust-foundation-signs-joint-statement-on-open-source-infrastructure-stewardship/)
* [2025-09-23, 16:59:35](https://lobste.rs/s/ga0vwq/fifty_years_open_source_software_supply) - [Fifty Years of Open Source Software Supply-Chain Security](https://cacm.acm.org/practice/fifty-years-of-open-source-software-supply-chain-security/)
* [2025-09-23, 10:47:46](https://lobste.rs/s/6wzpji/crypto_miner_hotio_qbittorrent) - [Crypto Miner in hotio/qbittorrent](https://apogliaghi.com/2025/09/crypto-miner-in-hotio/qbittorrent/)
* [2025-09-22, 18:11:14](https://news.ycombinator.com/item?id=45337302) - [Low Earth Orbit Visualization](https://platform.leolabs.space/visualization)
* [2025-09-21, 11:35:21](https://news.ycombinator.com/item?id=45321849) - [Quicksort explained IKEA-style](https://idea-instructions.com/quick-sort/)
* [2025-09-21, 08:09:29](https://news.ycombinator.com/item?id=45320970) - [The (Business) Process Deadlock](https://www.ufried.com/blog/business_processes/)
* [2025-09-21, 04:03:35](https://news.ycombinator.com/item?id=45319966) - [Kirkwood Gap Facts for Kids](https://kids.kiddle.co/Kirkwood_gap)
