# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Challenges

* [OpenAI Investigating Claim of 20 Million Stolen User Credentials](https://yro.slashdot.org/story/25/02/07/2236218/openai-investigating-claim-of-20-million-stolen-user-credentials?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An alarming claim suggests a major data breach involving OpenAI user credentials.

* [Creators Demand Tech Giants Fess Up, Pay For All That AI Training Data](https://slashdot.org/story/25/02/07/2114226/creators-demand-tech-giants-fess-up-pay-for-all-that-ai-training-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Artists and creators are calling for fair compensation for their work used to train AI models.

* [Meta torrented & seeded 81.7 TB dataset containing copyrighted data](https://arstechnica.com/tech-policy/2025/02/meta-torrented-over-81-7tb-of-pirated-books-to-train-ai-authors-say/) - Meta faces accusations of using copyrighted material for training AI, raising ethical concerns.

* [Most Britons Back Ban on 'Smarter-than-Human' AI Models, Poll Shows](https://news.slashdot.org/story/25/02/07/1347229/most-britons-back-ban-on-smarter-than-human-ai-models-poll-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A poll reveals a majority of Britons support restrictions on advanced AI development.

## Tech Innovations and Experiments

* [Show HN: ExpenseOwl – Simple, self-hosted expense tracker](https://github.com/Tanq16/ExpenseOwl) - A new lightweight tool for personal financial tracking emerges with open-source details.

* [Three-nanite: Unreal Nanite in Three.js](https://github.com/AIFanatic/three-nanite) - A JavaScript library enabling high-efficiency 3D rendering makes a debut.

* [Football Manager 25 Canceled In a Refreshing Show of Concern For Quality](https://games.slashdot.org/story/25/02/07/2053255/football-manager-25-canceled-in-a-refreshing-show-of-concern-for-quality?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Developers cite quality standards in a rare industry move to cancel a beloved game release.

## Cybersecurity and Online Safety

* [US Health System Notifies 882,000 Patients of August 2023 Breach](https://science.slashdot.org/story/25/02/07/2124217/us-health-system-notifies-882000-patients-of-august-2023-breach?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A massive cybersecurity breach impacts nearly a million patients, exacerbating concerns over healthcare data safety.

* ['Zombie Devices' Raise Cybersecurity Alarm as Consumers Ignore Smart Tech Expiry Dates](https://it.slashdot.org/story/25/02/07/1314200/zombie-devices-raise-cybersecurity-alarm-as-consumers-ignore-smart-tech-expiry-dates?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Obsolete devices cause alarm in the cybersecurity world as they remain vulnerable to attacks.

* [Phishing Tests, the Bane of Work Life, Are Getting Meaner](https://it.slashdot.org/story/25/02/07/127221/phishing-tests-the-bane-of-work-life-are-getting-meaner?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Controversy grows over increasingly harsh corporate phishing simulations for employees.

## Science and Environment

* [Radiation belts detected around Earth after solar storm](https://www.sciencealert.com/mysterious-radiation-belts-detected-around-earth-after-epic-solar-storm) - A remarkable discovery of radiation belts challenges scientists’ understanding of solar impacts on Earth.

* [US to Deploy Molten Salt Reactors to Turn Wastewater Into Freshwater](https://soylentnews.org/article.pl?sid=25/02/02/1338233&from=rss) - Advanced nuclear technology may solve water scarcity by converting wastewater to fresh water.

* [NASA's Returned Asteroid Samples Hold the Ingredients of Life From a Watery World](https://soylentnews.org/article.pl?sid=25/02/03/1327213&from=rss) - Analysis of asteroid samples hints at life-building ingredients originating from ancient watery environments.

## Digital Culture and Trends

* [Portland's Exploding Liberty Bell](https://tomlovesthelibertybell.com/portlands-exploding-liberty-bell/) - A curious event surrounding Portland's recreated Liberty Bell sparks intrigue.

* [Google Removes Pledge to Not Use AI for Weapons From Website](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss) - Controversy grows as Google modifies its ethical guidelines related to AI weaponization.

* [As Internet Enshittification Marches On, Here are Some of the Worst Offenders](https://soylentnews.org/article.pl?sid=25/02/06/1043254&from=rss) - A critique on worsening online practices points fingers at major tech entities.

## Open Source and Development

* [A brief history of code signing at Mozilla](https://hearsum.ca/posts/history-of-code-signing-at-mozilla/) - A detailed retrospective on how Mozilla approached code signing over its history.

* [Refined: simple refinement types for Rust](https://jordankaye.dev/posts/refined/) - Rust developers welcome a concise approach to integrating refinement types into their workflows.

* [OpenWrt 24.10.0 - First Stable Release](https://openwrt.org/releases/24.10/notes-24.10.0) - The OpenWrt community celebrates the launch of a significant stable version upgrade.

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

* [2025-02-08, 01:25:00](https://developers.slashdot.org/story/25/02/07/2246202/googles-7-year-slog-to-improve-chrome-extensions-still-hasnt-satisfied-developers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google's 7-Year Slog To Improve Chrome Extensions Still Hasn't Satisfied Developers](https://developers.slashdot.org/story/25/02/07/2246202/googles-7-year-slog-to-improve-chrome-extensions-still-hasnt-satisfied-developers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 00:45:00](https://yro.slashdot.org/story/25/02/07/2236218/openai-investigating-claim-of-20-million-stolen-user-credentials?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Investigating Claim of 20 Million Stolen User Credentials](https://yro.slashdot.org/story/25/02/07/2236218/openai-investigating-claim-of-20-million-stolen-user-credentials?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 00:02:00](https://science.slashdot.org/story/25/02/07/2124217/us-health-system-notifies-882000-patients-of-august-2023-breach?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Health System Notifies 882,000 Patients of August 2023 Breach](https://science.slashdot.org/story/25/02/07/2124217/us-health-system-notifies-882000-patients-of-august-2023-breach?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 23:20:00](https://slashdot.org/story/25/02/07/2114226/creators-demand-tech-giants-fess-up-pay-for-all-that-ai-training-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Creators Demand Tech Giants Fess Up, Pay For All That AI Training Data](https://slashdot.org/story/25/02/07/2114226/creators-demand-tech-giants-fess-up-pay-for-all-that-ai-training-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 22:40:00](https://yro.slashdot.org/story/25/02/07/213240/amazon-says-germany-customers-wont-lose-amazon-prime-as-a-result-of-nokia-patent-win?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Says Germany Customers Won't Lose Amazon Prime As a Result of Nokia Patent Win](https://yro.slashdot.org/story/25/02/07/213240/amazon-says-germany-customers-wont-lose-amazon-prime-as-a-result-of-nokia-patent-win?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 22:38:11](https://news.ycombinator.com/item?id=42978313) - [Autonomous AI Agents Should Not Be Developed](https://huggingface.co/papers/2502.02649)
* [2025-02-07, 22:18:48](https://lobste.rs/s/etdzwd/ai_haters_build_tarpits_trap_trick_ai) - [AI haters build tarpits to trap and trick AI scrapers that ignore robots.txt](https://arstechnica.com/tech-policy/2025/01/ai-haters-build-tarpits-to-trap-and-trick-ai-scrapers-that-ignore-robots-txt/)
* [2025-02-07, 22:02:00](https://games.slashdot.org/story/25/02/07/2053255/football-manager-25-canceled-in-a-refreshing-show-of-concern-for-quality?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Football Manager 25 Canceled In a Refreshing Show of Concern For Quality](https://games.slashdot.org/story/25/02/07/2053255/football-manager-25-canceled-in-a-refreshing-show-of-concern-for-quality?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 21:21:00](https://slashdot.org/story/25/02/07/1423237/salesforce-workday-are-hiring-more-overseas-to-save-cash?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Salesforce, Workday Are Hiring More Overseas To Save Cash](https://slashdot.org/story/25/02/07/1423237/salesforce-workday-are-hiring-more-overseas-to-save-cash?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 21:06:40](https://news.ycombinator.com/item?id=42977483) - [Portland's Exploding Liberty Bell](https://tomlovesthelibertybell.com/portlands-exploding-liberty-bell/)
* [2025-02-07, 21:02:00](https://soylentnews.org/article.pl?sid=25/02/06/1054246&from=rss) - [Deepfake Videos are Getting Shockingly Good](https://soylentnews.org/article.pl?sid=25/02/06/1054246&from=rss)
* [2025-02-07, 21:00:03](https://news.ycombinator.com/item?id=42977416) - [Zep AI (YC W24) Is Hiring Engineers to Build SOTA Agent Memory](https://www.ycombinator.com/companies/zep-ai/jobs/e2QxKYu-staff-engineer)
* [2025-02-07, 20:56:58](https://news.ycombinator.com/item?id=42977388) - [Show HN: ExpenseOwl – Simple, self-hosted expense tracker](https://github.com/Tanq16/ExpenseOwl)
* [2025-02-07, 20:41:00](https://it.slashdot.org/story/25/02/07/140254/microsoft-365-price-rises-are-coming---pay-up-or-opt-out?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft 365 Price Rises Are Coming - Pay Up or Opt Out](https://it.slashdot.org/story/25/02/07/140254/microsoft-365-price-rises-are-coming---pay-up-or-opt-out?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 20:00:00](https://news.slashdot.org/story/25/02/07/1347229/most-britons-back-ban-on-smarter-than-human-ai-models-poll-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Most Britons Back Ban on 'Smarter-than-Human' AI Models, Poll Shows](https://news.slashdot.org/story/25/02/07/1347229/most-britons-back-ban-on-smarter-than-human-ai-models-poll-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 19:42:30](https://lobste.rs/s/gz2fgw/getaddrinfo_sucks_everything_else_is) - [getaddrinfo sucks. everything else is much worse](https://valentin.gosu.se/blog/2025/02/getaddrinfo-sucks-everything-else-is-much-worse)
* [2025-02-07, 19:21:00](https://tech.slashdot.org/story/25/02/07/1335247/india-to-launch-new-domain-name-for-banks-to-fight-digital-fraud?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [India To Launch New Domain Name For Banks To Fight Digital Fraud](https://tech.slashdot.org/story/25/02/07/1335247/india-to-launch-new-domain-name-for-banks-to-fight-digital-fraud?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 18:40:00](https://it.slashdot.org/story/25/02/07/127221/phishing-tests-the-bane-of-work-life-are-getting-meaner?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Phishing Tests, the Bane of Work Life, Are Getting Meaner](https://it.slashdot.org/story/25/02/07/127221/phishing-tests-the-bane-of-work-life-are-getting-meaner?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 18:30:00](https://lobste.rs/s/5m5rb6/cloudflare_incident_on_february_6_2025) - [Cloudflare incident on February 6, 2025](https://blog.cloudflare.com/cloudflare-incident-on-february-6-2025/)
* [2025-02-07, 18:23:40](https://news.ycombinator.com/item?id=42975803) - [Show HN: A website that heatmaps your city based on your housing preferences](https://theretowhere.com/)
* [2025-02-07, 18:00:00](https://tech.slashdot.org/story/25/02/07/1322252/google-pulls-incorrect-gouda-stat-from-its-ai-super-bowl-ad?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Pulls Incorrect Gouda Stat From Its AI Super Bowl Ad](https://tech.slashdot.org/story/25/02/07/1322252/google-pulls-incorrect-gouda-stat-from-its-ai-super-bowl-ad?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 17:51:49](https://news.ycombinator.com/item?id=42975436) - [A brief history of code signing at Mozilla](https://hearsum.ca/posts/history-of-code-signing-at-mozilla/)
* [2025-02-07, 17:49:36](https://lobste.rs/s/wflsxa/brief_history_code_signing_at_mozilla) - [A Brief History of Code Signing at Mozilla](https://hearsum.ca/posts/history-of-code-signing-at-mozilla/)
* [2025-02-07, 17:32:13](https://lobste.rs/s/np9f8i/fun_friday_what_s_weirdest_automation_you) - [Fun Friday: what's the weirdest automation you've ever made?](https://lobste.rs/s/np9f8i/fun_friday_what_s_weirdest_automation_you)
* [2025-02-07, 17:27:57](https://news.ycombinator.com/item?id=42975171) - [Pantograph: A Fluid and Typed Structure Editor](https://github.com/jeprinz/pantograph/blob/main/README.md)
* [2025-02-07, 17:20:11](https://lobste.rs/s/pdcipx/polysubml_demo_simple_ml_like_language) - [polysubml-demo: A simple ML-like language with subtyping, polymorphism, higher rank types, and global type inference](https://github.com/Storyyeller/polysubml-demo)
* [2025-02-07, 17:20:00](https://it.slashdot.org/story/25/02/07/1314200/zombie-devices-raise-cybersecurity-alarm-as-consumers-ignore-smart-tech-expiry-dates?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Zombie Devices' Raise Cybersecurity Alarm as Consumers Ignore Smart Tech Expiry Dates](https://it.slashdot.org/story/25/02/07/1314200/zombie-devices-raise-cybersecurity-alarm-as-consumers-ignore-smart-tech-expiry-dates?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 16:59:18](https://news.ycombinator.com/item?id=42974882) - [Ketamine for Depression: How It Works (2024) [video]](https://www.yalemedicine.org/news/ketamine-for-depression)
* [2025-02-07, 16:53:20](https://news.ycombinator.com/item?id=42974809) - [The origins of 60-Hz as a power frequency](https://ieeexplore.ieee.org/document/628099)
* [2025-02-07, 16:46:47](https://news.ycombinator.com/item?id=42974728) - [Stop using zip codes for geospatial analysis (2019)](https://carto.com/blog/zip-codes-spatial-analysis)
* [2025-02-07, 16:46:45](https://news.ycombinator.com/item?id=42974727) - [Radiation belts detected around Earth after solar storm](https://www.sciencealert.com/mysterious-radiation-belts-detected-around-earth-after-epic-solar-storm)
* [2025-02-07, 16:40:00](https://entertainment.slashdot.org/story/25/02/07/1257245/french-train-passenger-fined-155-for-using-phone-on-speaker?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [French Train Passenger Fined $155 For Using Phone on Speaker](https://entertainment.slashdot.org/story/25/02/07/1257245/french-train-passenger-fined-155-for-using-phone-on-speaker?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 16:23:50](https://news.ycombinator.com/item?id=42974461) - [Three-nanite: Unreal Nanite in Three.js](https://github.com/AIFanatic/three-nanite)
* [2025-02-07, 16:21:46](https://news.ycombinator.com/item?id=42974429) - [The Age of Agent Experience](https://stytch.com/blog/the-age-of-agent-experience/)
* [2025-02-07, 16:18:14](https://news.ycombinator.com/item?id=42974378) - [Show HN: Transductive regular expressions for text editing](https://github.com/c0stya/trre)
* [2025-02-07, 16:14:00](https://soylentnews.org/article.pl?sid=25/02/06/1043254&from=rss) - [As Internet Enshittification Marches On, Here are Some of the Worst Offenders](https://soylentnews.org/article.pl?sid=25/02/06/1043254&from=rss)
* [2025-02-07, 16:04:23](https://lobste.rs/s/josk1v/code_beyond_fair) - [CODE beyond FAIR](https://inria.hal.science/hal-04930405v1/document#page=2)
* [2025-02-07, 16:00:00](https://news.slashdot.org/story/25/02/07/1250220/british-hydrogen-bus-supplier-aeristech-collapses?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [British Hydrogen Bus Supplier Aeristech Collapses](https://news.slashdot.org/story/25/02/07/1250220/british-hydrogen-bus-supplier-aeristech-collapses?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 15:40:38](https://news.ycombinator.com/item?id=42973897) - [When Louis Armstrong Conquered Chicago](https://www.honest-broker.com/p/when-louis-armstrong-conquered-chicago)
* [2025-02-07, 14:25:28](https://lobste.rs/s/srf2u2/gleam_v1_8_0_released) - [Gleam v1.8.0 released](https://gleam.run/news/gleam-gets-rename-variable/)
* [2025-02-07, 14:18:19](https://news.ycombinator.com/item?id=42972781) - [Children's arithmetic skills do not transfer between applied and academic math](https://www.nature.com/articles/s41586-024-08502-w)
* [2025-02-07, 14:10:49](https://lobste.rs/s/ui5fzs/cpython_tail_call_interpreter_merged_for) - [CPython tail-call interpreter merged for Python 3.14, a 10% speedup in benchmarks](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-tail-call)
* [2025-02-07, 13:43:28](https://lobste.rs/s/y0bakb/refined_simple_refinement_types_for_rust) - [Refined: simple refinement types for Rust](https://jordankaye.dev/posts/refined/)
* [2025-02-07, 13:02:03](https://news.ycombinator.com/item?id=42972062) - [Asahi Linux lead developer Hector Martin resigns from Linux kernel](https://lkml.org/lkml/2025/2/7/9)
* [2025-02-07, 12:18:46](https://news.ycombinator.com/item?id=42971761) - [Apple Ordered by UK to Create Global iCloud Encryption Backdoor](https://www.macrumors.com/2025/02/07/uk-government-orders-access-icloud/)
* [2025-02-07, 11:28:00](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss) - [Russia VPN Crackdown Revelation - VPN Sites Hide Their IP Addresses ](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss)
* [2025-02-07, 11:26:02](https://news.ycombinator.com/item?id=42971446) - [Meta torrented & seeded 81.7 TB dataset containing copyrighted data](https://arstechnica.com/tech-policy/2025/02/meta-torrented-over-81-7tb-of-pirated-books-to-train-ai-authors-say/)
* [2025-02-07, 11:11:40](https://lobste.rs/s/ro1i8v/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/ro1i8v/what_are_you_doing_this_weekend)
* [2025-02-07, 08:00:33](https://lobste.rs/s/l4olys/numbat_statically_typed_programming) - [numbat: A statically typed programming language for scientific computations with first class support for physical dimensions and units](https://github.com/sharkdp/numbat)
* [2025-02-07, 07:46:07](https://lobste.rs/s/vlzdgt/fosdem_2025_14_years_systemd) - [FOSDEM 2025 - 14 Years of systemd](https://fosdem.org/2025/schedule/event/fosdem-2025-6648-14-years-of-systemd/)
* [2025-02-07, 07:11:36](https://news.ycombinator.com/item?id=42970240) - [Donald Knuth's 2024 Christmas Lecture: Strong and Weak Components [video]](https://www.youtube.com/watch?v=Hi8r_63LGyg)
* [2025-02-07, 06:43:00](https://soylentnews.org/article.pl?sid=25/02/06/0534246&from=rss) - [Educated but Easily Fooled? Who Falls for Misinformation and Why](https://soylentnews.org/article.pl?sid=25/02/06/0534246&from=rss)
* [2025-02-07, 04:52:11](https://lobste.rs/s/zzbfob/you_didn_t_notice_mp3_is_now_free) - [You Didn't Notice MP3 Is Now Free](https://idiallo.com/blog/listen-mp3-is-free)
* [2025-02-07, 04:11:59](https://lobste.rs/s/b9ezyc/three_projections_doctor_futamura) - [The Three Projections of Doctor Futamura](http://blog.sigfpe.com/2009/05/three-projections-of-doctor-futamura.html)
* [2025-02-07, 03:52:24](https://lobste.rs/s/f5ziu7/comments_on_shared_unix_hosting_vs_cloud) - [Comments on Shared Unix Hosting vs. the Cloud](https://oils.pub/blog/2025/02/shared-hosting.html)
* [2025-02-07, 03:38:31](https://lobste.rs/s/9zznlg/llm_curve_impact_on_software_engineers) - [The LLM Curve of Impact on Software Engineers](https://serce.me/posts/2025-02-07-the-llm-curve-of-impact-on-software-engineers)
* [2025-02-07, 01:55:00](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss) - [Google Removes Pledge to Not Use AI for Weapons From Website](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss)
* [2025-02-06, 23:09:39](https://lobste.rs/s/f61avh/openwrt_24_10_0_first_stable_release) - [OpenWrt 24.10.0 - First Stable Release](https://openwrt.org/releases/24.10/notes-24.10.0)
* [2025-02-06, 22:00:01](https://lobste.rs/s/i5phus/decade_tils) - [A Decade of TILs](https://www.visualmode.dev/a-decade-of-tils)
* [2025-02-06, 21:34:12](https://news.ycombinator.com/item?id=42966720) - [Understanding Reasoning LLMs](https://magazine.sebastianraschka.com/p/understanding-reasoning-llms)
* [2025-02-06, 21:12:00](https://soylentnews.org/article.pl?sid=25/02/04/1537254&from=rss) - [Warmer, More Crowded Cities Bring Out the Rats](https://soylentnews.org/article.pl?sid=25/02/04/1537254&from=rss)
* [2025-02-06, 20:54:10](https://news.ycombinator.com/item?id=42966402) - [The Inevitability of the Borrow Checker](https://yorickpeterse.com/articles/the-inevitability-of-the-borrow-checker/)
* [2025-02-06, 20:35:44](https://lobste.rs/s/cxpkpn/doom_running_on_apple_lightning_hdmi) - [DOOM running on Apple Lightning to HDMI dongle](https://youtu.be/4XCkeN0XuqA)
* [2025-02-06, 17:50:10](https://lobste.rs/s/ficdn9/updating_large_codebase_rust_2024) - [Updating a large codebase to Rust 2024](https://codeandbitters.com/rust-2024-upgrade/)
* [2025-02-06, 16:44:21](https://news.ycombinator.com/item?id=42964124) - [The superconductivity of layered graphene is surprisingly strange](https://www.newscientist.com/article/2466930-the-superconductivity-of-layered-graphene-is-surprisingly-strange/)
* [2025-02-06, 16:24:00](https://soylentnews.org/article.pl?sid=25/02/04/1528253&from=rss) - [Who's Your Pick?  Eagles or Chiefs? Or Statistics?](https://soylentnews.org/article.pl?sid=25/02/04/1528253&from=rss)
* [2025-02-06, 14:50:28](https://lobste.rs/s/89h9eb/html_whitespace_is_broken) - [HTML Whitespace is Broken](https://blog.dwac.dev/posts/html-whitespace/)
* [2025-02-06, 12:58:27](https://lobste.rs/s/e8tdsr/asdf_version_manager_has_been_re_written) - [Asdf Version Manager Has Been Re-Written in Golang](https://stratus3d.com/blog/2025/02/03/asdf-has-been-rewritten-in-go)
* [2025-02-06, 11:40:00](https://soylentnews.org/article.pl?sid=25/02/04/1521226&from=rss) - [Google Offering ‘Voluntary Exit’ for Employees Working on Pixel, Android](https://soylentnews.org/article.pl?sid=25/02/04/1521226&from=rss)
* [2025-02-06, 09:36:36](https://lobste.rs/s/cbvnzl/string_vs_str) - [String vs &str](https://blog.sulami.xyz/posts/string-vs-str/)
* [2025-02-06, 08:53:46](https://lobste.rs/s/dp5e4g/it_is_time_standardize_principles) - [It Is Time to Standardize Principles and Practices for Software Memory Safety](https://cacm.acm.org/opinion/it-is-time-to-standardize-principles-and-practices-for-software-memory-safety/)
* [2025-02-06, 06:55:00](https://soylentnews.org/article.pl?sid=25/02/04/1518208&from=rss) - [Cooking Flawless Pasta - it's Science!](https://soylentnews.org/article.pl?sid=25/02/04/1518208&from=rss)
* [2025-02-06, 02:13:00](https://soylentnews.org/article.pl?sid=25/02/04/1511202&from=rss) - [These Smart Glasses Help People With Macular Degeneration By Eliminating Blind Spots](https://soylentnews.org/article.pl?sid=25/02/04/1511202&from=rss)
* [2025-02-05, 21:24:00](https://soylentnews.org/article.pl?sid=25/02/04/157244&from=rss) - [Giant Study Questions Link Between Autism and Maternal Health](https://soylentnews.org/article.pl?sid=25/02/04/157244&from=rss)
* [2025-02-05, 16:43:00](https://soylentnews.org/article.pl?sid=25/02/04/1455221&from=rss) - [Everyone Knows Your Location: Tracking Myself Down Through in-App Ads](https://soylentnews.org/article.pl?sid=25/02/04/1455221&from=rss)
* [2025-02-05, 13:15:00](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss) - [Soylent Update - February 2025](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss)
* [2025-02-05, 12:00:00](https://soylentnews.org/article.pl?sid=25/02/04/042215&from=rss) - [Microsoft Defender's VPN Feature Will be Killed Off at the End of February](https://soylentnews.org/article.pl?sid=25/02/04/042215&from=rss)
* [2025-02-05, 11:15:01](https://news.ycombinator.com/item?id=42946918) - [Show HN: HN as TikTok, welcome to HN hell](https://hnhell.com)
* [2025-02-05, 09:12:41](https://news.ycombinator.com/item?id=42945980) - [Station of despair: What to do if you get stuck at end of Tokyo Chuo Rapid Line](https://soranews24.com/2024/12/21/station-of-despair-what-to-do-if-you-get-stuck-at-the-end-of-tokyos-chuo-rapid-line/)
* [2025-02-05, 08:51:15](https://news.ycombinator.com/item?id=42945812) - [Franz Kafka – the workers' friend (2018)](https://marywcraig.com/2018/01/14/franz-kafka-the-workers-friend/)
* [2025-02-05, 08:00:47](https://news.ycombinator.com/item?id=42945426) - [The WW2 experiment to make pigeon-guided missiles [video]](https://www.bbc.com/reel/video/p0kl5kcz/the-ww2-experiment-to-make-pigeon-guided-missiles)
* [2025-02-05, 07:17:00](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss) - [Tesla and BMW Sue European Commission Over Chinese EV Tariffs](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss)
* [2025-02-05, 02:35:00](https://soylentnews.org/article.pl?sid=25/02/04/0355255&from=rss) - [Medical Monitoring Machines Spotted Stealing Patient Data](https://soylentnews.org/article.pl?sid=25/02/04/0355255&from=rss)
* [2025-02-05, 01:25:05](https://news.ycombinator.com/item?id=42942204) - [Visual Explanations of Mathematics (2020)](https://agilescientific.com/blog/2020/2/25/visual-explanations-of-mathematics)
* [2025-02-04, 23:25:49](https://news.ycombinator.com/item?id=42940748) - [Effects of cold-water immersion on health and wellbeing: A systematic review](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0317615)
* [2025-02-04, 21:50:00](https://soylentnews.org/article.pl?sid=25/02/04/0352219&from=rss) - [Artificial Gills Unlock Long-Range Underwater Robots](https://soylentnews.org/article.pl?sid=25/02/04/0352219&from=rss)
* [2025-02-04, 18:24:31](https://news.ycombinator.com/item?id=42936506) - [Show HN: Play with real quantum physics in your browser](https://quantum.orgsoft.org)
* [2025-02-04, 17:08:00](https://soylentnews.org/article.pl?sid=25/02/03/1327213&from=rss) - [NASA's Returned Asteroid Samples Hold the Ingredients of Life From a Watery World](https://soylentnews.org/article.pl?sid=25/02/03/1327213&from=rss)
* [2025-02-04, 12:23:00](https://soylentnews.org/article.pl?sid=25/02/02/1444250&from=rss) - [Fediverse Explosive Growth - 100m Posts in January](https://soylentnews.org/article.pl?sid=25/02/02/1444250&from=rss)
* [2025-02-04, 07:41:00](https://soylentnews.org/article.pl?sid=25/02/02/1338233&from=rss) - [US to Deploy Molten Salt Reactors to Turn Wastewater Into Freshwater](https://soylentnews.org/article.pl?sid=25/02/02/1338233&from=rss)
* [2025-02-04, 02:56:00](https://soylentnews.org/article.pl?sid=25/02/02/141218&from=rss) - [How Does DeepSeek R1 Really Fare Against OpenAI's Best Reasoning Models?](https://soylentnews.org/article.pl?sid=25/02/02/141218&from=rss)
