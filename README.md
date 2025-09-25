# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [Raspberry Pi 500+ launched](https://www.raspberrypi.com/news/the-ultimate-all-in-one-pc-raspberry-pi-500-plus-on-sale-now-at-200/) - An all-in-one PC priced at $200 designed for enthusiasts and educational usage. [Comments](https://lobste.rs/s/ruifje/raspberry_pi_500_launched)

* [Knotty: A domain-specific language for knitting patterns](https://t0mpr1c3.github.io/knotty/index.html) - A unique DSL designed to cater the needs of crafting intricate knitting patterns. [Comments](https://news.ycombinator.com/item?id=45369768)

* [Helium Browser](https://helium.computer) - A new futuristic approach to browser technology aiming to deliver a novel online experience. [Comments](https://lobste.rs/s/iztrs8/helium_browser)

* [Qualcomm Announces Snapdragon X2 Elite and Extreme For Windows PCs](https://hardware.slashdot.org/story/25/09/24/2113246/qualcomm-announces-snapdragon-x2-elite-and-extreme-for-windows-pcs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Introduction of Qualcomm's new processors aimed at enhancing Windows PC performance. [Comments](https://hardware.slashdot.org/story/25/09/24/2113246/qualcomm-announces-snapdragon-x2-elite-and-extreme-for-windows-pcs?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Realtime Raytracing in Bevy 0.17 (Solari)](https://jms55.github.io/posts/2025-09-20-solari-bevy-0-17/) - Exploration of advanced raytracing capabilities using the Bevy game engine. [Comments](https://lobste.rs/s/catpmf/realtime_raytracing_bevy_0_17_solari)

## Health and Environment

* [Experimental Gene Therapy Found To Slow Huntington's Disease Progression](https://science.slashdot.org/story/25/09/24/2237215/experimental-gene-therapy-found-to-slow-huntingtons-disease-progression?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Groundbreaking gene therapy reveals potential to combat Huntington's disease. [Comments](https://science.slashdot.org/story/25/09/24/2237215/experimental-gene-therapy-found-to-slow-huntingtons-disease-progression?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [World's Oceans Fail Key Health Check As Acidity Crosses Critical Threshold For Marine Life](https://news.slashdot.org/story/25/09/24/2156242/worlds-oceans-fail-key-health-check-as-acidity-crosses-critical-threshold-for-marine-life?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Alarm raised as oceanic conditions drastically impact marine ecosystems. [Comments](https://news.slashdot.org/story/25/09/24/2156242/worlds-oceans-fail-key-health-check-as-acidity-crosses-critical-threshold-for-marine-life?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [How Billions of Hacked Mosquitoes and a Vaccine Could Beat the Deadly Dengue Virus](https://soylentnews.org/article.pl?sid=25/09/23/0616240&from=rss) - Innovative vector control and vaccination strategies to counter dengue. [Comments](https://soylentnews.org/article.pl?sid=25/09/23/0616240&from=rss)

## Artificial Intelligence and Data

* [Neon Pays Users To Record Their Phone Calls, Sell Data To AI Firms](https://news.slashdot.org/story/25/09/24/2034203/neon-pays-users-to-record-their-phone-calls-sell-data-to-ai-firms?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Controversial platform incentivizes users to share personal data for AI training. [Comments](https://news.slashdot.org/story/25/09/24/2034203/neon-pays-users-to-record-their-phone-calls-sell-data-to-ai-firms?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Cloudflare Launches Content Signals Policy To Fight AI Crawlers and Scrapers](https://tech.slashdot.org/story/25/09/24/1953230/cloudflare-launches-content-signals-policy-to-fight-ai-crawlers-and-scrapers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A new initiative to deter unauthorized usage of web content for AI models. [Comments](https://tech.slashdot.org/story/25/09/24/1953230/cloudflare-launches-content-signals-policy-to-fight-ai-crawlers-and-scrapers?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cultural and Historical Perspectives

* [800 Years of English Handwriting](https://artsandculture.google.com/story/800-years-of-english-handwriting/eAURodcOgMzFIw) - A digital journey through centuries of English script evolution. [Comments](https://news.ycombinator.com/item?id=45342121)

* [Netscape Navigator 2.0 Was Released 30 years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&from=rss) - Reflecting on the pioneering web browser's three-decade impact. [Comments](https://soylentnews.org/article.pl?sid=25/09/20/0338224&from=rss)

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

* [2025-09-25, 10:00:00](https://yro.slashdot.org/story/25/09/24/2249237/japanese-city-passes-two-hours-a-day-smartphone-usage-ordinance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japanese City Passes Two-Hours-a-Day Smartphone Usage Ordinance](https://yro.slashdot.org/story/25/09/24/2249237/japanese-city-passes-two-hours-a-day-smartphone-usage-ordinance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 09:34:10](https://lobste.rs/s/qt82iv/some_interesting_stuff_i_found_on_ix_lans) - [Some interesting stuff I found on IX LANs](https://blog.benjojo.co.uk/post/ixp-bad-broadcast-packets-interesting)
* [2025-09-25, 08:56:52](https://news.ycombinator.com/item?id=45370678) - [RTO: WTAF](https://wordsrightman.beehiiv.com/p/rto-wtaf)
* [2025-09-25, 08:08:02](https://lobste.rs/s/ruifje/raspberry_pi_500_launched) - [Raspberry Pi 500+ launched](https://www.raspberrypi.com/news/the-ultimate-all-in-one-pc-raspberry-pi-500-plus-on-sale-now-at-200/)
* [2025-09-25, 07:52:55](https://news.ycombinator.com/item?id=45370306) - [Perhaps my last post – we&apos;ll see (2016)](http://itila.blogspot.com/2016/04/perhaps-my-last-post-well-see.html)
* [2025-09-25, 07:52:28](https://news.ycombinator.com/item?id=45370304) - [The all-in-one PC: Raspberry Pi 500 on sale now at $200](https://www.raspberrypi.com/news/the-ultimate-all-in-one-pc-raspberry-pi-500-plus-on-sale-now-at-200/)
* [2025-09-25, 07:44:55](https://news.ycombinator.com/item?id=45370256) - [Is This Bad? This Feels Bad. (Fortra GoAnywhere CVE-2025-10035)](https://labs.watchtowr.com/is-this-bad-this-feels-bad-goanywhere-cve-2025-10035/)
* [2025-09-25, 07:31:29](https://lobste.rs/s/iztrs8/helium_browser) - [Helium Browser](https://helium.computer)
* [2025-09-25, 07:01:00](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss) - [Nvidia&apos;s $100 Billion Investment in OpenAI Raises Big Antitrust Concerns](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss)
* [2025-09-25, 07:00:00](https://science.slashdot.org/story/25/09/24/2237215/experimental-gene-therapy-found-to-slow-huntingtons-disease-progression?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Experimental Gene Therapy Found To Slow Huntington&apos;s Disease Progression](https://science.slashdot.org/story/25/09/24/2237215/experimental-gene-therapy-found-to-slow-huntingtons-disease-progression?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 06:13:32](https://news.ycombinator.com/item?id=45369768) - [Knotty: A domain-specific language for knitting patterns](https://t0mpr1c3.github.io/knotty/index.html)
* [2025-09-25, 06:13:03](https://lobste.rs/s/5yxfew/cheri_efforts_get_linux_running_on_it) - [CHERI and the efforts to get Linux running on it](https://lwn.net/SubscriberLink/1037974/903c6f9a42f7782a/)
* [2025-09-25, 06:12:49](https://lobste.rs/s/zph6zo/knotty_domain_specific_language_for) - [Knotty: A domain-specific language for knitting patterns](https://t0mpr1c3.github.io/knotty/index.html)
* [2025-09-25, 05:13:43](https://lobste.rs/s/39ecmg/what_does_actual_functional_programming) - [What Does Actual Functional Programming Look Like?](https://jerf.org/iri/post/2025/fp_lessons_actual_fp/)
* [2025-09-25, 04:48:30](https://lobste.rs/s/p3wmty/step_right_up_lobsters_blog_carnival) - [¡Step right up to the Lobsters! Blog! Carnival](https://lobste.rs/s/p3wmty/step_right_up_lobsters_blog_carnival)
* [2025-09-25, 03:56:20](https://lobste.rs/s/5v3efy/how_many_valid_json_strings_are_there) - [How many valid JSON strings are there?](https://qntm.org/jsoncount)
* [2025-09-25, 03:30:00](https://news.slashdot.org/story/25/09/24/2156242/worlds-oceans-fail-key-health-check-as-acidity-crosses-critical-threshold-for-marine-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s Oceans Fail Key Health Check As Acidity Crosses Critical Threshold For Marine Life](https://news.slashdot.org/story/25/09/24/2156242/worlds-oceans-fail-key-health-check-as-acidity-crosses-critical-threshold-for-marine-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 03:24:57](https://lobste.rs/s/xdghmi/use_force_feedback_solder_small_things) - [Use the Force (Feedback) to Solder Small Things](https://www.bunniestudios.com/blog/2025/use-the-force-feedback-to-solder-small-things/)
* [2025-09-25, 03:16:00](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss) - [The End of EU-Imposed Cookie Consent Pop-Ups Could be Nigh](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss)
* [2025-09-25, 01:54:01](https://lobste.rs/s/7ohiib/naming_tack_symbols) - [The Naming of Tack Symbols](https://www.math.uwaterloo.ca/~ljdickey/apl-rep/tables/note1.html)
* [2025-09-25, 01:30:00](https://apple.slashdot.org/story/25/09/24/2141256/intel-approaches-apple-for-potential-investment-amid-struggles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Approaches Apple For Potential Investment Amid Struggles](https://apple.slashdot.org/story/25/09/24/2141256/intel-approaches-apple-for-potential-investment-amid-struggles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 01:11:06](https://lobste.rs/s/3sg5sy/graal_truffle_tutorial_part_0_what_is) - [Graal Truffle tutorial part 0 – what is Truffle?](https://www.endoflineblog.com/graal-truffle-tutorial-part-0-what-is-truffle)
* [2025-09-25, 01:10:00](https://hardware.slashdot.org/story/25/09/24/2113246/qualcomm-announces-snapdragon-x2-elite-and-extreme-for-windows-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Qualcomm Announces Snapdragon X2 Elite and Extreme For Windows PCs](https://hardware.slashdot.org/story/25/09/24/2113246/qualcomm-announces-snapdragon-x2-elite-and-extreme-for-windows-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 00:50:00](https://news.slashdot.org/story/25/09/24/2034203/neon-pays-users-to-record-their-phone-calls-sell-data-to-ai-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Neon Pays Users To Record Their Phone Calls, Sell Data To AI Firms](https://news.slashdot.org/story/25/09/24/2034203/neon-pays-users-to-record-their-phone-calls-sell-data-to-ai-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 00:10:00](https://it.slashdot.org/story/25/09/24/2022232/broadcoms-prohibitive-vmware-prices-create-a-learning-barrier-it-pro-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Broadcom&apos;s Prohibitive VMware Prices Create a Learning &apos;Barrier,&apos; IT Pro Says](https://it.slashdot.org/story/25/09/24/2022232/broadcoms-prohibitive-vmware-prices-create-a-learning-barrier-it-pro-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 23:32:00](https://tech.slashdot.org/story/25/09/24/2021235/europes-cookie-law-messed-up-the-internet-brussels-wants-to-fix-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe&apos;s Cookie Law Messed Up the Internet. Brussels Wants To Fix It.](https://tech.slashdot.org/story/25/09/24/2021235/europes-cookie-law-messed-up-the-internet-brussels-wants-to-fix-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 23:15:38](https://news.ycombinator.com/item?id=45367086) - [How did sports betting become legal in the US?](https://shreyashariharan.substack.com/p/how-did-sports-betting-become-legal)
* [2025-09-24, 23:12:38](https://news.ycombinator.com/item?id=45367046) - [Do YC after you graduate: Early decision for students](https://www.ycombinator.com/early-decision)
* [2025-09-24, 22:51:16](https://news.ycombinator.com/item?id=45366867) - [Helium Browser](https://helium.computer/)
* [2025-09-24, 22:50:00](https://tech.slashdot.org/story/25/09/24/205220/cfo-of-320-billion-software-firm-ai-will-help-us-afford-to-have-less-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CFO of $320 Billion Software Firm: AI Will Help Us &apos;Afford To Have Less People&apos;](https://tech.slashdot.org/story/25/09/24/205220/cfo-of-320-billion-software-firm-ai-will-help-us-afford-to-have-less-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 22:50:00](https://it.slashdot.org/story/25/09/24/2010227/record-breaking-ddos-attack-peaks-at-22-tbps-and-10-bpps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Record-Breaking DDoS Attack Peaks At 22 Tbps and 10 Bpps](https://it.slashdot.org/story/25/09/24/2010227/record-breaking-ddos-attack-peaks-at-22-tbps-and-10-bpps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 22:36:00](https://soylentnews.org/article.pl?sid=25/09/24/1148218&amp;from=rss) - [Cloudflare is Sponsoring Ladybird and Omarchy](https://soylentnews.org/article.pl?sid=25/09/24/1148218&amp;from=rss)
* [2025-09-24, 22:11:48](https://news.ycombinator.com/item?id=45366566) - [Everything that&apos;s wrong with Google Search in one image](https://bitbytebit.substack.com/p/everything-thats-wrong-with-google)
* [2025-09-24, 22:11:00](https://news.slashdot.org/story/25/09/24/1956244/fossil-fuel-burning-poses-threat-to-health-of-16-billion-people-data-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fossil Fuel Burning Poses Threat To Health of 1.6 Billion People, Data Shows](https://news.slashdot.org/story/25/09/24/1956244/fossil-fuel-burning-poses-threat-to-health-of-16-billion-people-data-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 22:08:05](https://lobste.rs/s/2h0qyr/drinking_with_datalog) - [Drinking with Datalog](https://ianthehenry.com/posts/drinking-with-datalog/)
* [2025-09-24, 21:30:00](https://tech.slashdot.org/story/25/09/24/1953230/cloudflare-launches-content-signals-policy-to-fight-ai-crawlers-and-scrapers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Launches Content Signals Policy To Fight AI Crawlers and Scrapers](https://tech.slashdot.org/story/25/09/24/1953230/cloudflare-launches-content-signals-policy-to-fight-ai-crawlers-and-scrapers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 21:00:00](https://news.ycombinator.com/item?id=45365878) - [SonyShell – An effort to “SSH into my Sony DSLR”](https://github.com/goudvuur/sonyshell)
* [2025-09-24, 20:50:00](https://tech.slashdot.org/story/25/09/24/1948231/google-experiences-deja-vu-as-second-monopoly-trial-begins-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Experiences Deja Vu As Second Monopoly Trial Begins In US](https://tech.slashdot.org/story/25/09/24/1948231/google-experiences-deja-vu-as-second-monopoly-trial-begins-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 20:40:58](https://lobste.rs/s/o8ibca/crates_io_malicious_crates_faster_log) - [crates.io: Malicious crates faster_log and async_println](https://blog.rust-lang.org/2025/09/24/crates.io-malicious-crates-fasterlog-and-asyncprintln/)
* [2025-09-24, 20:10:00](https://tech.slashdot.org/story/25/09/24/1943257/microsoft-offers-no-cost-windows-10-lifeline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Offers No-Cost Windows 10 Lifeline](https://tech.slashdot.org/story/25/09/24/1943257/microsoft-offers-no-cost-windows-10-lifeline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 19:30:00](https://slashdot.org/story/25/09/24/1930219/pocket-casts-is-showing-ads-to-people-who-paid-for-an-ad-free-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pocket Casts is Showing Ads To People Who Paid For an Ad-free App](https://slashdot.org/story/25/09/24/1930219/pocket-casts-is-showing-ads-to-people-who-paid-for-an-ad-free-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 18:24:35](https://lobste.rs/s/catpmf/realtime_raytracing_bevy_0_17_solari) - [Realtime Raytracing in Bevy 0.17 (Solari)](https://jms55.github.io/posts/2025-09-20-solari-bevy-0-17/)
* [2025-09-24, 17:48:00](https://soylentnews.org/article.pl?sid=25/09/23/0616240&amp;from=rss) - [How Billions of Hacked Mosquitoes and a Vaccine Could Beat the Deadly Dengue Virus](https://soylentnews.org/article.pl?sid=25/09/23/0616240&amp;from=rss)
* [2025-09-24, 17:40:22](https://lobste.rs/s/8igt9j/jruby_jdk_25_startup_time_with_aotcache) - [JRuby and JDK 25: Startup Time with AOTCache](https://blog.headius.com/2025/09/jruby-jdk25-startup-time-with-aotcache.html)
* [2025-09-24, 16:48:27](https://news.ycombinator.com/item?id=45362914) - [Launch HN: Flywheel (YC S25) – Waymo for Excavators](https://news.ycombinator.com/item?id=45362914)
* [2025-09-24, 16:32:24](https://news.ycombinator.com/item?id=45362697) - [Terence Tao: The role of small organizations in society has shrunk significantly](https://mathstodon.xyz/@tao/115259943398316677)
* [2025-09-24, 16:27:40](https://lobste.rs/s/8vj1t9/temporal_rs_is_here_datetime_library) - [Temporal_rs is here! The datetime library powering Temporal in Boa, Kiesel, and V8](https://boajs.dev/blog/2025/09/24/temporal-release)
* [2025-09-24, 16:23:31](https://lobste.rs/s/v7qdfg/php_fractal_bad_design_2012) - [PHP: a fractal of bad design (2012)](https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/)
* [2025-09-24, 16:03:42](https://news.ycombinator.com/item?id=45362254) - [New bacteria, and two potential antibiotics, discovered in soil](https://www.rockefeller.edu/news/38239-hundreds-of-new-bacteria-and-two-potential-antibiotics-found-in-soil/)
* [2025-09-24, 16:00:45](https://news.ycombinator.com/item?id=45362206) - [SedonaDB: A new geospatial DataFrame library written in Rust](https://sedona.apache.org/latest/blog/2025/09/24/introducing-sedonadb-a-single-node-analytical-database-engine-with-geospatial-as-a-first-class-citizen/)
* [2025-09-24, 15:55:10](https://lobste.rs/s/u1rffj/engineering_fixed_width_bit_packed) - [Engineering a fixed-width bit-packed Integer Vector in Rust](https://lukefleed.xyz/posts/compressed-fixedvec/)
* [2025-09-24, 15:49:29](https://lobste.rs/s/wsmnrg/tuning_aio_postgresql_18) - [Tuning AIO in PostgreSQL 18](https://vondra.me/posts/tuning-aio-in-postgresql-18/)
* [2025-09-24, 15:48:36](https://news.ycombinator.com/item?id=45362023) - [Python on the Edge: Fast, sandboxed, and powered by WebAssembly](https://wasmer.io/posts/python-on-the-edge-powered-by-webassembly)
* [2025-09-24, 15:03:59](https://news.ycombinator.com/item?id=45361394) - [How to be a leader when the vibes are off](https://chaoticgood.management/how-to-be-a-leader-when-the-vibes-are-off/)
* [2025-09-24, 14:53:57](https://news.ycombinator.com/item?id=45361268) - [Show HN: Dayflow – A git log for your day](https://github.com/JerryZLiu/Dayflow)
* [2025-09-24, 14:20:33](https://news.ycombinator.com/item?id=45360824) - [Smartphone Cameras Go Hyperspectral](https://spectrum.ieee.org/hyperspectral-imaging)
* [2025-09-24, 13:51:00](https://lobste.rs/s/f13wey/don_t_even_consider_starting_with) - [Don&apos;t even consider starting with Microsoft](https://lionelbarrow.substack.com/p/dont-even-consider-starting-with)
* [2025-09-24, 13:30:40](https://lobste.rs/s/aimofq/software_substrates_should_there_be_only) - [Software substrates: should there be only one?](https://www.humprog.org/~stephen/research/papers/kell25substratus.pdf)
* [2025-09-24, 13:02:00](https://soylentnews.org/article.pl?sid=25/09/23/066237&amp;from=rss) - [Why do Some Gamers Invert Their Controls?](https://soylentnews.org/article.pl?sid=25/09/23/066237&amp;from=rss)
* [2025-09-24, 12:52:52](https://news.ycombinator.com/item?id=45359604) - [How to Lead in a Room Full of Experts](https://idiallo.com/blog/how-to-lead-in-a-room-full-of-experts)
* [2025-09-24, 12:45:07](https://news.ycombinator.com/item?id=45359524) - [Learning Persian with Anki, ChatGPT and YouTube](https://cjauvin.github.io/posts/learning-persian/)
* [2025-09-24, 11:41:54](https://news.ycombinator.com/item?id=45358980) - [Yt-dlp: Upcoming new requirements for YouTube downloads](https://github.com/yt-dlp/yt-dlp/issues/14404)
* [2025-09-24, 11:37:30](https://news.ycombinator.com/item?id=45358940) - [Huntington&apos;s disease treated for first time](https://www.bbc.com/news/articles/cevz13xkxpro)
* [2025-09-24, 10:05:29](https://news.ycombinator.com/item?id=45358280) - [How AWS S3 serves 1 petabyte per second on top of slow HDDs](https://bigdata.2minutestreaming.com/p/how-aws-s3-scales-with-tens-of-millions-of-hard-drives)
* [2025-09-24, 10:03:24](https://lobste.rs/s/p1mdwu/how_s3_scales_petabytes_second_on_top_tens) - [How S3 scales to petabytes a second on top of tens of millions of slow HDDs](https://bigdatastream.substack.com/p/how-aws-s3-scales-with-tens-of-millions-of-hard-drives)
* [2025-09-24, 08:16:00](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss) - [&apos;a Black Hole of Energy Use&apos;: Meta&apos;s Massive AI Data Center is Stressing Out a Louisiana Community](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss)
* [2025-09-24, 05:07:10](https://lobste.rs/s/zfktn9/google_continues_invest_350k_rust) - [Google continues to invest 350k in the Rust ecosystem](https://www.linkedin.com/posts/lars-a-bergstrom_android-rust-security-activity-7376353918022270976-Y73P)
* [2025-09-24, 04:21:33](https://lobste.rs/s/y6e06t/ai_is_impressive_because_we_ve_failed_at) - [AI is impressive because we’ve failed at semantic web and personal computing](https://rakhim.exotext.com/ai-is-impressive-because-we-ve-failed-at-semantic-web-and-personal-computing)
* [2025-09-24, 03:41:06](https://lobste.rs/s/pn4hqe/should_neovim_support_transitive_plugin) - [Should Neovim support transitive plugin dependencies?](https://sink.io/jmk/neovim-plugin-deps/)
* [2025-09-24, 03:35:00](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss) - [When Cancer Targets the Young](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss)
* [2025-09-23, 22:48:00](https://soylentnews.org/article.pl?sid=25/09/22/2131204&amp;from=rss) - [Porsche EV Roll-Out Delay Deals $6 Billion Hit to Parent Volkswagen](https://soylentnews.org/article.pl?sid=25/09/22/2131204&amp;from=rss)
* [2025-09-23, 18:06:00](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss) - [Scientists Found 7,000-Year-Old Mummies in the Desert That Don&apos;t Share DNA With Modern Humans](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss)
* [2025-09-23, 13:24:00](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss) - [Deaths From Flesh-Eating Bacteria are on the Rise. Who is at Risk?](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss)
* [2025-09-23, 08:35:00](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss) - [We Risk a Deluge of AI-Written ‘Science’ Pushing Corporate Interests](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss)
* [2025-09-23, 06:02:43](https://news.ycombinator.com/item?id=45343282) - [PHP Almost Generics: Guided Journey Through the Official Compile-Time Proposal](https://doganoo.medium.com/generics-in-php-from-blog-series-to-book-d2d4130bdeff)
* [2025-09-23, 03:52:00](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss) - [Something Extremely Strange is Happening at the Event Horizon of This Supermassive Blackhole](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss)
* [2025-09-23, 02:21:18](https://news.ycombinator.com/item?id=45342121) - [800 Years of English Handwriting](https://artsandculture.google.com/story/800-years-of-english-handwriting/eAURodcOgMzFIw)
* [2025-09-22, 23:08:00](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss) - [OpenAI&apos;s Research on AI Models Deliberately Lying is Wild](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss)
* [2025-09-22, 21:24:00](https://news.ycombinator.com/item?id=45339631) - [Porting a library to a different language with a sentence](https://randomlabs.ai/blog/porting-a-library-with-slate)
* [2025-09-22, 18:23:00](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss) - [Online Book:  The Pattern Language of Software Architecture](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss)
* [2025-09-22, 18:11:14](https://news.ycombinator.com/item?id=45337302) - [Low Earth Orbit Visualization](https://platform.leolabs.space/visualization)
* [2025-09-22, 13:40:00](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss) - [Electronic Locks Have Backdoors, Too](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss)
* [2025-09-22, 08:53:00](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss) - [Rare Apple-1 With Storied Ownership Fetched Over $500,000 at Auction](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss)
* [2025-09-22, 04:07:00](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss) - [AI Can Forecast Your Future Health – Just Like the Weather](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss)
* [2025-09-21, 23:23:00](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss) - [When Non-Avian Dinosaurs Went Extinct, the Earth Changed](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss)
* [2025-09-21, 18:44:00](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss) - [Half a Million Screens go Dark . . .](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss)
* [2025-09-21, 15:00:59](https://news.ycombinator.com/item?id=45323351) - [Mollweide map projection and Newton&apos;s method](https://www.johndcook.com/blog/2025/09/21/mollweide-newton/)
* [2025-09-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss) - [Netscape Navigator 2.0 Was Released 30 years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss)
* [2025-09-21, 11:35:21](https://news.ycombinator.com/item?id=45321849) - [Quicksort explained IKEA-style](https://idea-instructions.com/quick-sort/)
* [2025-09-21, 09:08:00](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss) - [Brazil&apos;s Payment System Puts Credit Card Firms to the Test](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss)
* [2025-09-21, 07:30:36](https://news.ycombinator.com/item?id=45320801) - [History of Telecommunications T-Carrier](https://computer.rip/2025-09-20-T-carrier.html)
* [2025-09-21, 04:22:00](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss) - [IG Nobel 2025 winners](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss)
