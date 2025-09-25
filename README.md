# [News Summary](https://kherrick.github.io/news-summary/)

## Algebraic Data Types and Programming Languages

* [A Very Early History of Algebraic Data Types](https://www.hillelwayne.com/post/algdt-history/) - An exploration of the early evolution and significance of algebraic data types in programming.

* [What Does Actual Functional Programming Look Like?](https://jerf.org/iri/post/2025/fp_lessons_actual_fp/) - A detailed reflection on functional programming practices and patterns in real-world scenarios.

* [Knotty: A domain-specific language for knitting patterns](https://t0mpr1c3.github.io/knotty/index.html) - An intriguing attempt to apply domain-specific languages to non-traditional programming tasks like knitting.

* [Announcing "do" v2.0 - Dependency injection for Go](https://github.com/samber/do/releases/tag/v2.0.0) - The latest version of a powerful dependency injection framework for Go.

## Technology and AI Impact on Workforce

* [Accenture To 'Exit' Staff That Cannot Be Retrained For Age of AI](https://it.slashdot.org/story/25/09/25/1458207/accenture-to-exit-staff-that-cannot-be-retrained-for-age-of-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Accenture announces plans to replace employees unable to adapt to the AI era.

* [Neon Pays Users To Record Their Phone Calls, Sell Data To AI Firms](https://news.slashdot.org/story/25/09/24/2034203/neon-pays-users-to-record-their-phone-calls-sell-data-to-ai-firms?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An unconventional business model monetizing recorded phone calls for AI training.

* [CFO of $320 Billion Software Firm: AI Will Help Us 'Afford To Have Less People'](https://tech.slashdot.org/story/25/09/24/205220/cfo-of-320-billion-software-firm-ai-will-help-us-afford-to-have-less-people?utm_source=rss1.0mainlinkanon&utm_medium=feed) - How AI adoption lowers workforce costs for major firms.

## Privacy, Cybersecurity, and Surveillance

* [Microsoft blocks Israel's use of its tech. in mass surveillance of Palestinians](https://www.theguardian.com/world/2025/sep/25/microsoft-blocks-israels-use-of-its-technology-in-mass-surveillance-of-palestinians) - Microsoft ceases its technology support to Israel over controversial uses in surveillance.

* [As many as 2M Cisco devices affected by actively exploited 0-day](https://arstechnica.com/security/2025/09/as-many-as-2-million-cisco-devices-affected-by-actively-exploited-0-day/) - A security scare reveals vulnerabilities in millions of Cisco devices.

* [Electronic Locks Have Backdoors, Too](https://soylentnews.org/article.pl?sid=25/09/21/1430243&from=rss) - A cautionary tale on the hidden risks of digital locks.

## Environmental Concerns

* [The Ganges River is Drying at an Unprecedented Rate](https://soylentnews.org/article.pl?sid=25/09/25/0014257&from=rss) - A sobering report on the rapid depletion of one of the world's most vital water sources.

* [World's Oceans Fail Key Health Check As Acidity Crosses Critical Threshold For Marine Life](https://news.slashdot.org/story/25/09/24/2156242/worlds-oceans-fail-key-health-check-as-acidity-crosses-critical-threshold-for-marine-life?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Rising ocean acidity spells trouble for marine ecosystems.

* [Meta's Massive AI Data Center is Stressing Out a Louisiana Community](https://soylentnews.org/article.pl?sid=25/09/23/0557257&from=rss) - Localized impacts of big-tech's data infrastructure on environmental and social health.

## Innovations and Breakthroughs

* [Raspberry Pi 500+ launched](https://www.raspberrypi.com/news/the-ultimate-all-in-one-pc-raspberry-pi-500-plus-on-sale-now-at-200/) - The newest addition to the Raspberry Pi lineup offers an affordable, all-in-one PC solution.

* [Experimental Gene Therapy Found To Slow Huntington's Disease Progression](https://science.slashdot.org/story/25/09/24/2237215/experimental-gene-therapy-found-to-slow-huntingtons-disease-progression?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Exciting developments in slowing the progression of a debilitating disease.

* [Intel Approaches Apple For Potential Investment Amid Struggles](https://apple.slashdot.org/story/25/09/24/2141256/intel-approaches-apple-for-potential-investment-amid-struggles?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Intel seeks major investment as it grapples with headwinds in the semiconductor arena.

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

* [2025-09-25, 15:32:36](https://lobste.rs/s/ppm44i/very_early_history_algebraic_data_types) - [A Very Early History of Algebraic Data Types](https://www.hillelwayne.com/post/algdt-history/)
* [2025-09-25, 15:21:00](https://it.slashdot.org/story/25/09/25/1458207/accenture-to-exit-staff-that-cannot-be-retrained-for-age-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Accenture To &apos;Exit&apos; Staff That Cannot Be Retrained For Age of AI](https://it.slashdot.org/story/25/09/25/1458207/accenture-to-exit-staff-that-cannot-be-retrained-for-age-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 15:06:47](https://news.ycombinator.com/item?id=45373564) - [Microsoft blocks Israel&apos;s use of its tech. in mass surveillance of Palestinians](https://www.theguardian.com/world/2025/sep/25/microsoft-blocks-israels-use-of-its-technology-in-mass-surveillance-of-palestinians)
* [2025-09-25, 15:02:55](https://news.ycombinator.com/item?id=45373501) - [This month in Servo: variable fonts, network tools, SVG](https://servo.org/blog/2025/09/25/this-month-in-servo/)
* [2025-09-25, 14:41:17](https://news.ycombinator.com/item?id=45373179) - [Accenture to &apos;exit&apos; staff that cannot be retrained for age of AI](https://www.ft.com/content/a74f8564-ed5a-42e9-8fb3-d2bddb2b8675)
* [2025-09-25, 14:40:00](https://tech.slashdot.org/story/25/09/25/126212/x-ray-scans-reveal-the-hidden-risks-of-cheap-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [X-ray Scans Reveal the Hidden Risks of Cheap Batteries](https://tech.slashdot.org/story/25/09/25/126212/x-ray-scans-reveal-the-hidden-risks-of-cheap-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 14:33:50](https://news.ycombinator.com/item?id=45373081) - [Cloudflare Email Service: private beta](https://blog.cloudflare.com/email-service/)
* [2025-09-25, 14:28:24](https://news.ycombinator.com/item?id=45373008) - [Launch HN: Webhound (YC S23) – Research agent that builds datasets from the web](https://news.ycombinator.com/item?id=45373008)
* [2025-09-25, 14:20:59](https://news.ycombinator.com/item?id=45372935) - [Ubuntu: The Indigenous Ethos of Restorative Justice](https://www.traum-und-verantwortung.de/zitate/ubuntu/)
* [2025-09-25, 14:13:40](https://lobste.rs/s/hy2hxg/announcing_do_v2_0_dependency_injection) - [Announcing \&quot;do\&quot; v2.0 - Dependency injection for Go](https://github.com/samber/do/releases/tag/v2.0.0)
* [2025-09-25, 14:08:51](https://lobste.rs/s/smlfkc/this_month_servo_variable_fonts_network) - [This month in Servo: variable fonts, network tools, SVG](https://servo.org/blog/2025/09/25/this-month-in-servo/)
* [2025-09-25, 14:01:00](https://apple.slashdot.org/story/25/09/25/0410249/apple-asks-eu-to-scrap-landmark-digital-competition-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Asks EU To Scrap Landmark Digital Competition Law](https://apple.slashdot.org/story/25/09/25/0410249/apple-asks-eu-to-scrap-landmark-digital-competition-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 13:59:36](https://lobste.rs/s/et0bry/ceiling_division_mip_map_sizes) - [Ceiling division and mip map sizes](https://fgiesen.wordpress.com/2025/09/25/ceiling-division-and-mip-map-sizes/)
* [2025-09-25, 13:32:50](https://news.ycombinator.com/item?id=45372442) - [Death rates rose in hospital ERs after private equity firms took over](https://www.nbcnews.com/news/us-news/death-rates-rose-hospital-ers-private-equity-firms-took-study-finds-rcna233211)
* [2025-09-25, 13:27:21](https://lobste.rs/s/gi7ac7/what_are_popular_ai_coding_benchmarks) - [What are popular AI coding benchmarks actually measuring?](https://blog.nilenso.com/blog/2025/09/25/swe-benchmarks/)
* [2025-09-25, 13:22:16](https://news.ycombinator.com/item?id=45372361) - [As many as 2M Cisco devices affected by actively exploited 0-day](https://arstechnica.com/security/2025/09/as-many-as-2-million-cisco-devices-affected-by-actively-exploited-0-day/)
* [2025-09-25, 13:19:47](https://news.ycombinator.com/item?id=45372335) - [AI Isn&apos;t Replacing Radiologists](https://www.worksinprogress.news/p/why-ai-isnt-replacing-radiologists)
* [2025-09-25, 13:13:25](https://news.ycombinator.com/item?id=45372286) - [Data Viz Color Palette Generator (For Charts and Dashboards)](https://www.learnui.design/tools/data-color-picker.html)
* [2025-09-25, 13:00:00](https://tech.slashdot.org/story/25/09/24/2244215/facebook-data-reveal-the-devastating-real-world-harms-caused-by-the-spread-of-misinformation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Data Reveal the Devastating Real-World Harms Caused By the Spread of Misinformation](https://tech.slashdot.org/story/25/09/24/2244215/facebook-data-reveal-the-devastating-real-world-harms-caused-by-the-spread-of-misinformation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 12:50:24](https://lobste.rs/s/6b0ud8/introducing_emacs_agent_shell_powered_by) - [Introducing Emacs agent-shell (powered by ACP)](https://xenodium.com/introducing-agent-shell)
* [2025-09-25, 12:48:50](https://news.ycombinator.com/item?id=45372113) - [Resurrect the Old Web](https://stevedylandev.bearblog.dev/resurrect-the-old-web/)
* [2025-09-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss) - [The Ganges River is Drying at an Unprecedented Rate](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss)
* [2025-09-25, 10:49:20](https://lobste.rs/s/jqikf7/thoughts_on_cloudflare) - [Thoughts on Cloudflare](https://xn--gckvb8fzb.com/thoughts-on-cloudflare/)
* [2025-09-25, 10:39:17](https://news.ycombinator.com/item?id=45371309) - [The Wind, a Pole, and the Dragon](https://entropicthoughts.com/the-wind-a-pole-and-the-dragon)
* [2025-09-25, 10:35:19](https://news.ycombinator.com/item?id=45371283) - [The Theatre of Pull Requests and Code Review](https://meks.quest/blogs/the-theatre-of-pull-requests-and-code-review)
* [2025-09-25, 10:32:24](https://lobste.rs/s/4lva3o/theatre_pull_requests_code_review) - [The Theatre of Pull Requests and Code Review](https://meks.quest/blogs/the-theatre-of-pull-requests-and-code-review)
* [2025-09-25, 10:05:49](https://news.ycombinator.com/item?id=45371061) - [Bundler Belongs to the Ruby Community](https://andre.arko.net/2025/09/25/bundler-belongs-to-the-ruby-community/)
* [2025-09-25, 10:00:00](https://yro.slashdot.org/story/25/09/24/2249237/japanese-city-passes-two-hours-a-day-smartphone-usage-ordinance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japanese City Passes Two-Hours-a-Day Smartphone Usage Ordinance](https://yro.slashdot.org/story/25/09/24/2249237/japanese-city-passes-two-hours-a-day-smartphone-usage-ordinance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 09:57:18](https://lobste.rs/s/iw0yyl/wind_pole_dragon) - [The Wind, a Pole, and the Dragon](https://entropicthoughts.com/the-wind-a-pole-and-the-dragon)
* [2025-09-25, 09:36:40](https://news.ycombinator.com/item?id=45370882) - [Some interesting stuff I found on IX LANs](https://blog.benjojo.co.uk/post/ixp-bad-broadcast-packets-interesting)
* [2025-09-25, 09:34:10](https://lobste.rs/s/qt82iv/some_interesting_stuff_i_found_on_ix_lans) - [Some interesting stuff I found on IX LANs](https://blog.benjojo.co.uk/post/ixp-bad-broadcast-packets-interesting)
* [2025-09-25, 08:08:02](https://lobste.rs/s/ruifje/raspberry_pi_500_launched) - [Raspberry Pi 500+ launched](https://www.raspberrypi.com/news/the-ultimate-all-in-one-pc-raspberry-pi-500-plus-on-sale-now-at-200/)
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
* [2025-09-25, 01:30:00](https://apple.slashdot.org/story/25/09/24/2141256/intel-approaches-apple-for-potential-investment-amid-struggles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Approaches Apple For Potential Investment Amid Struggles](https://apple.slashdot.org/story/25/09/24/2141256/intel-approaches-apple-for-potential-investment-amid-struggles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 01:10:00](https://hardware.slashdot.org/story/25/09/24/2113246/qualcomm-announces-snapdragon-x2-elite-and-extreme-for-windows-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Qualcomm Announces Snapdragon X2 Elite and Extreme For Windows PCs](https://hardware.slashdot.org/story/25/09/24/2113246/qualcomm-announces-snapdragon-x2-elite-and-extreme-for-windows-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 00:50:00](https://news.slashdot.org/story/25/09/24/2034203/neon-pays-users-to-record-their-phone-calls-sell-data-to-ai-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Neon Pays Users To Record Their Phone Calls, Sell Data To AI Firms](https://news.slashdot.org/story/25/09/24/2034203/neon-pays-users-to-record-their-phone-calls-sell-data-to-ai-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 00:10:00](https://it.slashdot.org/story/25/09/24/2022232/broadcoms-prohibitive-vmware-prices-create-a-learning-barrier-it-pro-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Broadcom&apos;s Prohibitive VMware Prices Create a Learning &apos;Barrier,&apos; IT Pro Says](https://it.slashdot.org/story/25/09/24/2022232/broadcoms-prohibitive-vmware-prices-create-a-learning-barrier-it-pro-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 23:32:00](https://tech.slashdot.org/story/25/09/24/2021235/europes-cookie-law-messed-up-the-internet-brussels-wants-to-fix-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe&apos;s Cookie Law Messed Up the Internet. Brussels Wants To Fix It.](https://tech.slashdot.org/story/25/09/24/2021235/europes-cookie-law-messed-up-the-internet-brussels-wants-to-fix-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 23:12:38](https://news.ycombinator.com/item?id=45367046) - [Do YC after you graduate: Early decision for students](https://www.ycombinator.com/early-decision)
* [2025-09-24, 22:51:16](https://news.ycombinator.com/item?id=45366867) - [Helium Browser](https://helium.computer/)
* [2025-09-24, 22:50:00](https://tech.slashdot.org/story/25/09/24/205220/cfo-of-320-billion-software-firm-ai-will-help-us-afford-to-have-less-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CFO of $320 Billion Software Firm: AI Will Help Us &apos;Afford To Have Less People&apos;](https://tech.slashdot.org/story/25/09/24/205220/cfo-of-320-billion-software-firm-ai-will-help-us-afford-to-have-less-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 22:50:00](https://it.slashdot.org/story/25/09/24/2010227/record-breaking-ddos-attack-peaks-at-22-tbps-and-10-bpps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Record-Breaking DDoS Attack Peaks At 22 Tbps and 10 Bpps](https://it.slashdot.org/story/25/09/24/2010227/record-breaking-ddos-attack-peaks-at-22-tbps-and-10-bpps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 22:36:00](https://soylentnews.org/article.pl?sid=25/09/24/1148218&amp;from=rss) - [Cloudflare is Sponsoring Ladybird and Omarchy](https://soylentnews.org/article.pl?sid=25/09/24/1148218&amp;from=rss)
* [2025-09-24, 22:11:00](https://news.slashdot.org/story/25/09/24/1956244/fossil-fuel-burning-poses-threat-to-health-of-16-billion-people-data-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fossil Fuel Burning Poses Threat To Health of 1.6 Billion People, Data Shows](https://news.slashdot.org/story/25/09/24/1956244/fossil-fuel-burning-poses-threat-to-health-of-16-billion-people-data-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 22:01:06](https://news.ycombinator.com/item?id=45366474) - [Snapdragon X2 Elite ARM Laptop CPU](https://www.qualcomm.com/products/mobile/snapdragon/laptops-and-tablets/snapdragon-x2-elite)
* [2025-09-24, 20:40:58](https://lobste.rs/s/o8ibca/crates_io_malicious_crates_faster_log) - [crates.io: Malicious crates faster_log and async_println](https://blog.rust-lang.org/2025/09/24/crates.io-malicious-crates-fasterlog-and-asyncprintln/)
* [2025-09-24, 17:48:00](https://soylentnews.org/article.pl?sid=25/09/23/0616240&amp;from=rss) - [How Billions of Hacked Mosquitoes and a Vaccine Could Beat the Deadly Dengue Virus](https://soylentnews.org/article.pl?sid=25/09/23/0616240&amp;from=rss)
* [2025-09-24, 17:40:22](https://lobste.rs/s/8igt9j/jruby_jdk_25_startup_time_with_aotcache) - [JRuby and JDK 25: Startup Time with AOTCache](https://blog.headius.com/2025/09/jruby-jdk25-startup-time-with-aotcache.html)
* [2025-09-24, 16:27:40](https://lobste.rs/s/8vj1t9/temporal_rs_is_here_datetime_library) - [Temporal_rs is here! The datetime library powering Temporal in Boa, Kiesel, and V8](https://boajs.dev/blog/2025/09/24/temporal-release)
* [2025-09-24, 16:23:31](https://lobste.rs/s/v7qdfg/php_fractal_bad_design_2012) - [PHP: a fractal of bad design (2012)](https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/)
* [2025-09-24, 15:48:36](https://news.ycombinator.com/item?id=45362023) - [Python on the Edge: Fast, sandboxed, and powered by WebAssembly](https://wasmer.io/posts/python-on-the-edge-powered-by-webassembly)
* [2025-09-24, 14:53:57](https://news.ycombinator.com/item?id=45361268) - [Show HN: Dayflow – A git log for your day](https://github.com/JerryZLiu/Dayflow)
* [2025-09-24, 13:51:00](https://lobste.rs/s/f13wey/don_t_even_consider_starting_with) - [Don&apos;t even consider starting with Microsoft](https://lionelbarrow.substack.com/p/dont-even-consider-starting-with)
* [2025-09-24, 13:02:00](https://soylentnews.org/article.pl?sid=25/09/23/066237&amp;from=rss) - [Why do Some Gamers Invert Their Controls?](https://soylentnews.org/article.pl?sid=25/09/23/066237&amp;from=rss)
* [2025-09-24, 11:37:30](https://news.ycombinator.com/item?id=45358940) - [Huntington&apos;s disease treated for first time](https://www.bbc.com/news/articles/cevz13xkxpro)
* [2025-09-24, 10:03:24](https://lobste.rs/s/p1mdwu/how_s3_scales_petabytes_second_on_top_tens) - [How S3 scales to petabytes a second on top of tens of millions of slow HDDs](https://bigdatastream.substack.com/p/how-aws-s3-scales-with-tens-of-millions-of-hard-drives)
* [2025-09-24, 08:16:00](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss) - [&apos;a Black Hole of Energy Use&apos;: Meta&apos;s Massive AI Data Center is Stressing Out a Louisiana Community](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss)
* [2025-09-24, 03:41:06](https://lobste.rs/s/pn4hqe/should_neovim_support_transitive_plugin) - [Should Neovim support transitive plugin dependencies?](https://sink.io/jmk/neovim-plugin-deps/)
* [2025-09-24, 03:35:00](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss) - [When Cancer Targets the Young](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss)
* [2025-09-23, 22:48:00](https://soylentnews.org/article.pl?sid=25/09/22/2131204&amp;from=rss) - [Porsche EV Roll-Out Delay Deals $6 Billion Hit to Parent Volkswagen](https://soylentnews.org/article.pl?sid=25/09/22/2131204&amp;from=rss)
* [2025-09-23, 18:08:51](https://news.ycombinator.com/item?id=45350734) - [Random Mosaic – Detecting unauthorized physical access with colored rice (2021)](https://dys2p.com/en/2021-12-tamper-evident-protection.html)
* [2025-09-23, 18:06:00](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss) - [Scientists Found 7,000-Year-Old Mummies in the Desert That Don&apos;t Share DNA With Modern Humans](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss)
* [2025-09-23, 13:54:10](https://news.ycombinator.com/item?id=45347072) - [Brutalita Sans: An Experimental Font and Font Editor](https://brutalita.com/)
* [2025-09-23, 13:24:00](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss) - [Deaths From Flesh-Eating Bacteria are on the Rise. Who is at Risk?](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss)
* [2025-09-23, 08:35:00](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss) - [We Risk a Deluge of AI-Written ‘Science’ Pushing Corporate Interests](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss)
* [2025-09-23, 03:52:00](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss) - [Something Extremely Strange is Happening at the Event Horizon of This Supermassive Blackhole](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss)
* [2025-09-23, 02:21:18](https://news.ycombinator.com/item?id=45342121) - [800 Years of English Handwriting](https://artsandculture.google.com/story/800-years-of-english-handwriting/eAURodcOgMzFIw)
* [2025-09-22, 23:08:00](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss) - [OpenAI&apos;s Research on AI Models Deliberately Lying is Wild](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss)
* [2025-09-22, 18:23:00](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss) - [Online Book:  The Pattern Language of Software Architecture](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss)
* [2025-09-22, 18:11:14](https://news.ycombinator.com/item?id=45337302) - [Low Earth Orbit Visualization](https://platform.leolabs.space/visualization)
* [2025-09-22, 17:54:21](https://news.ycombinator.com/item?id=45337059) - [Effect Systems vs. Print Debugging: A Pragmatic Solution](https://blog.flix.dev/blog/effect-systems-vs-print-debugging/)
* [2025-09-22, 13:40:00](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss) - [Electronic Locks Have Backdoors, Too](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss)
* [2025-09-22, 08:53:00](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss) - [Rare Apple-1 With Storied Ownership Fetched Over $500,000 at Auction](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss)
* [2025-09-22, 05:16:32](https://news.ycombinator.com/item?id=45329310) - [Categorical Foundations for Cute Layouts](https://research.colfax-intl.com/categorical-foundations-for-cute-layouts/)
* [2025-09-22, 04:07:00](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss) - [AI Can Forecast Your Future Health – Just Like the Weather](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss)
* [2025-09-21, 23:23:00](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss) - [When Non-Avian Dinosaurs Went Extinct, the Earth Changed](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss)
* [2025-09-21, 18:58:51](https://news.ycombinator.com/item?id=45325610) - [Storing Unwise Amounts of Data in JavaScript Bigints](https://jonathan-frere.com/posts/bigints-are-cool/)
* [2025-09-21, 18:44:00](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss) - [Half a Million Screens go Dark . . .](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss)
* [2025-09-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss) - [Netscape Navigator 2.0 Was Released 30 years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss)
* [2025-09-21, 11:35:21](https://news.ycombinator.com/item?id=45321849) - [Quicksort explained IKEA-style](https://idea-instructions.com/quick-sort/)
* [2025-09-21, 09:08:00](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss) - [Brazil&apos;s Payment System Puts Credit Card Firms to the Test](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss)
* [2025-09-21, 04:22:00](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss) - [IG Nobel 2025 winners](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss)
