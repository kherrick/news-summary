# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Developments and Innovations

* [Alibaba's ZeroSearch Teaches AI To Search Without Search Engines, Cuts Training Costs By 88%](https://slashdot.org/story/25/05/09/0113217/alibabas-zerosearch-teaches-ai-to-search-without-search-engines-cuts-training-costs-by-88?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [The Future of Data Storage Might Be Ceramic Glass That Can Last Thousands of Years](https://soylentnews.org/article.pl?sid=25/05/08/1156250&from=rss)

* [Scientists Have Explored Just 0.001% of Deep Ocean Floor, New Study Finds](https://news.slashdot.org/story/25/05/09/0833252/scientists-have-explored-just-0001-of-deep-ocean-floor-new-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [SpaceX Gets Approval To Sell Starlink In India](https://tech.slashdot.org/story/25/05/09/0130212/spacex-gets-approval-to-sell-starlink-in-india?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Artificial Intelligence and Data

* [Nvidia CEO: 'You Won’t Lose Your Job To AI, But To Someone Who Uses It'](https://slashdot.org/story/25/05/09/0815221/nvidia-ceo-you-wont-lose-your-job-to-ai-but-to-someone-who-uses-it?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Prompt Engineering is Quickly Going Extinct](https://developers.slashdot.org/story/25/05/09/0823210/prompt-engineering-is-quickly-going-extinct?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AI-Generated 'Slop' Threatens Internet Ecosystem, Researchers Warn](https://slashdot.org/story/25/05/09/088238/ai-generated-slop-threatens-internet-ecosystem-researchers-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Amazon's Vulcan Robots Now Stow Items Faster Than Humans](https://spectrum.ieee.org/amazon-stowing-robots)

## Science and Discovery

* [ALICE Detects the Conversion of Lead Into Gold at the LHC](https://www.home.cern/news/news/physics/alice-detects-conversion-lead-gold-lhc)

* [Mathematicians Just Solved a 125-Year-Old Problem, Uniting 3 Theories in Physics](https://soylentnews.org/article.pl?sid=25/05/06/0312252&from=rss)

* [Plastic-Eating Mealworms Native to Africa Discovered](https://soylentnews.org/article.pl?sid=25/05/03/1941255&from=rss)

## Corporate Decisions and Market Movements

* [37signals To Delete AWS Account, Cutting Cloud Costs By Millions](https://it.slashdot.org/story/25/05/09/1618248/37signals-to-delete-aws-account-cutting-cloud-costs-by-millions?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Panasonic To Cut 10,000 Jobs](https://slashdot.org/story/25/05/09/0911253/panasonic-to-cut-10000-jobs?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [CrowdStrike, Responsible For Global IT Outage, To Cut Jobs In AI Efficiency Push](https://it.slashdot.org/story/25/05/09/0920225/crowdstrike-responsible-for-global-it-outage-to-cut-jobs-in-ai-efficiency-push?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cybersecurity and Privacy

* [Education Giant Pearson Hit By Cyberattack Exposing Customer Data](https://it.slashdot.org/story/25/05/09/0146239/education-giant-pearson-hit-by-cyberattack-exposing-customer-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Federal Court Says Cell Tower Dumps Violate the Fourth Amendment](https://soylentnews.org/article.pl?sid=25/05/08/1151256&from=rss)

* [Hackers Abuse IPv6 Networking Feature to Hijack Windows Software Updates](https://soylentnews.org/article.pl?sid=25/05/06/0334233&from=rss)

* [CryptPad: An Alternative to the Google Suite](https://cryptpad.org/)

## Historical and Cultural Insights

* [In the Network of the Conclave: How We 'Guessed' the Pope Using Network Science](https://www.unibocconi.it/en/news/network-conclave)

* [Can It Run Doom? An Archive of All Known Ports](https://canitrundoom.org/)

* [The Anarchitecture Group](https://www.spatialagency.net/database/the.anarchitecture.group)

## Notable Deaths and Obituaries

* [Former Supreme Court Justice David Souter Has Died](https://www.npr.org/2025/05/09/g-s1-65326/justice-david-souter-dies)

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

* [2025-05-09, 18:40:00](https://it.slashdot.org/story/25/05/09/1618248/37signals-to-delete-aws-account-cutting-cloud-costs-by-millions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [37signals To Delete AWS Account, Cutting Cloud Costs By Millions](https://it.slashdot.org/story/25/05/09/1618248/37signals-to-delete-aws-account-cutting-cloud-costs-by-millions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 18:13:38](https://news.ycombinator.com/item?id=43939617) - [New Tool: lsds – List All Linux Block Devices and Settings in One Place](https://tanelpoder.com/posts/lsds-list-linux-block-devices-and-their-config/)
* [2025-05-09, 18:00:00](https://news.slashdot.org/story/25/05/09/0833252/scientists-have-explored-just-0001-of-deep-ocean-floor-new-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Have Explored Just 0.001% of Deep Ocean Floor, New Study Finds](https://news.slashdot.org/story/25/05/09/0833252/scientists-have-explored-just-0001-of-deep-ocean-floor-new-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 17:53:00](https://news.ycombinator.com/item?id=43939419) - [In the Network of the Conclav: How we \&quot;guessed\&quot; the Pope using network science](https://www.unibocconi.it/en/news/network-conclave)
* [2025-05-09, 17:20:00](https://it.slashdot.org/story/25/05/09/0920225/crowdstrike-responsible-for-global-it-outage-to-cut-jobs-in-ai-efficiency-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CrowdStrike, Responsible For Global IT Outage, To Cut Jobs In AI Efficiency Push](https://it.slashdot.org/story/25/05/09/0920225/crowdstrike-responsible-for-global-it-outage-to-cut-jobs-in-ai-efficiency-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 17:00:49](https://news.ycombinator.com/item?id=43938959) - [Rollstack (YC W23) Is Hiring TypeScript Engineers (Remote US/CA)](https://www.ycombinator.com/companies/rollstack-2/jobs/QPqpb1n-software-engineer-typescript-us-canada)
* [2025-05-09, 16:45:16](https://lobste.rs/s/sx3gdk/composition_feature_i_ve_wanted_flox) - [Composition: the feature I&apos;ve wanted in Flox since I joined the company](https://tinkering.xyz/flox-composition/)
* [2025-05-09, 16:40:00](https://slashdot.org/story/25/05/09/0911253/panasonic-to-cut-10000-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Panasonic To Cut 10,000 Jobs](https://slashdot.org/story/25/05/09/0911253/panasonic-to-cut-10000-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 16:33:00](https://soylentnews.org/article.pl?sid=25/05/08/1156250&amp;from=rss) - [The Future of Data Storage Might be Ceramic Glass That Can Last Thousands of Years](https://soylentnews.org/article.pl?sid=25/05/08/1156250&amp;from=rss)
* [2025-05-09, 16:29:02](https://news.ycombinator.com/item?id=43938611) - [The Anarchitecture Group](https://www.spatialagency.net/database/the.anarchitecture.group)
* [2025-05-09, 16:28:28](https://news.ycombinator.com/item?id=43938607) - [Launch HN: Nao Labs (YC X25) – Cursor for Data](https://news.ycombinator.com/item?id=43938607)
* [2025-05-09, 16:21:19](https://news.ycombinator.com/item?id=43938530) - [Show HN: Oliphaunt – A native Mastodon client for macOS](https://testflight.apple.com/join/Epq1P3Cw)
* [2025-05-09, 16:16:59](https://news.ycombinator.com/item?id=43938481) - [Show HN: BlenderQ – A TUI for managing multiple Blender renders](https://github.com/KyleTryon/BlenderQ)
* [2025-05-09, 16:09:45](https://news.ycombinator.com/item?id=43938400) - [Past, present, and future of Sorbet type syntax](https://blog.jez.io/history-of-sorbet-syntax/)
* [2025-05-09, 16:01:11](https://news.ycombinator.com/item?id=43938309) - [Show HN: A backend agnostic Ruby framework for building reactive desktop apps](https://codeberg.org/skinnyjames/hokusai)
* [2025-05-09, 16:01:00](https://news.slashdot.org/story/25/05/09/1557201/tech-industry-warns-us-investment-pledges-hinge-on-research-tax-break?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Industry Warns US Investment Pledges Hinge on Research Tax Break](https://news.slashdot.org/story/25/05/09/1557201/tech-industry-warns-us-investment-pledges-hinge-on-research-tax-break?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 15:28:40](https://lobste.rs/s/wsnwqz/can_it_run_doom_archive_all_known_ports) - [Can It Run Doom? An Archive of All Known Ports](https://canitrundoom.org/)
* [2025-05-09, 15:24:35](https://news.ycombinator.com/item?id=43937852) - [Show HN: Hydra (YC W22) – Serverless Analytics on Postgres](https://www.hydra.so/)
* [2025-05-09, 15:20:00](https://developers.slashdot.org/story/25/05/09/0823210/prompt-engineering-is-quickly-going-extinct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Prompt Engineering is Quickly Going Extinct](https://developers.slashdot.org/story/25/05/09/0823210/prompt-engineering-is-quickly-going-extinct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 15:17:11](https://news.ycombinator.com/item?id=43937750) - [Former Supreme Court justice David Souter has died](https://www.npr.org/2025/05/09/g-s1-65326/justice-david-souter-dies)
* [2025-05-09, 14:40:00](https://slashdot.org/story/25/05/09/0815221/nvidia-ceo-you-wont-lose-your-job-to-ai-but-to-someone-who-uses-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia CEO: &apos;You Won&apos;t Lose Your Job To AI, But To Someone Who Uses It&apos;](https://slashdot.org/story/25/05/09/0815221/nvidia-ceo-you-wont-lose-your-job-to-ai-but-to-someone-who-uses-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 14:31:20](https://news.ycombinator.com/item?id=43937214) - [ALICE detects the conversion of lead into gold at the LHC](https://www.home.cern/news/news/physics/alice-detects-conversion-lead-gold-lhc)
* [2025-05-09, 14:29:14](https://lobste.rs/s/zozo8v/write_most_clever_code_you_possibly_can) - [Write the most clever code you possibly can](https://buttondown.com/hillelwayne/archive/write-the-most-clever-code-you-possibly-can/)
* [2025-05-09, 14:02:02](https://news.ycombinator.com/item?id=43936884) - [Itter.sh – Micro-Blogging via Terminal](https://www.itter.sh/)
* [2025-05-09, 14:00:00](https://slashdot.org/story/25/05/09/088238/ai-generated-slop-threatens-internet-ecosystem-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI-Generated &apos;Slop&apos; Threatens Internet Ecosystem, Researchers Warn](https://slashdot.org/story/25/05/09/088238/ai-generated-slop-threatens-internet-ecosystem-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 13:38:06](https://news.ycombinator.com/item?id=43936592) - [21 GB/s CSV Parsing Using SIMD on AMD 9950X](https://nietras.com/2025/05/09/sep-0-10-0/)
* [2025-05-09, 13:25:17](https://news.ycombinator.com/item?id=43936468) - [Hollow Core Fiber (HCF)](https://www.holightoptic.com/what-is-hollow-core-fiber-hcf%ef%bc%9f/)
* [2025-05-09, 13:18:42](https://news.ycombinator.com/item?id=43936408) - [Sofie: open-source web based system for automating live TV news production](https://nrkno.github.io/sofie-core/)
* [2025-05-09, 13:02:45](https://lobste.rs/s/orlrul/microservices_are_tax_your_startup) - [Microservices Are a Tax Your Startup Probably Can’t Afford](https://nexo.sh/posts/microservices-for-startups/)
* [2025-05-09, 13:00:00](https://it.slashdot.org/story/25/05/09/0146239/education-giant-pearson-hit-by-cyberattack-exposing-customer-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Education Giant Pearson Hit By Cyberattack Exposing Customer Data](https://it.slashdot.org/story/25/05/09/0146239/education-giant-pearson-hit-by-cyberattack-exposing-customer-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 12:42:29](https://news.ycombinator.com/item?id=43936097) - [Show HN: Aberdeen – An elegant approach to reactive UIs](https://aberdeenjs.org/)
* [2025-05-09, 12:13:36](https://news.ycombinator.com/item?id=43935913) - [NSF faces shake-up as officials abolish its 37 divisions](https://www.science.org/content/article/exclusive-nsf-faces-radical-shake-officials-abolish-its-37-divisions)
* [2025-05-09, 12:07:23](https://lobste.rs/s/rmwfro/static_as_server) - [Static as a Server](https://overreacted.io/static-as-a-server/)
* [2025-05-09, 11:46:00](https://soylentnews.org/article.pl?sid=25/05/08/1151256&amp;from=rss) - [Federal Court Says Cell Tower Dumps Violate the Fourth Amendment](https://soylentnews.org/article.pl?sid=25/05/08/1151256&amp;from=rss)
* [2025-05-09, 11:37:40](https://news.ycombinator.com/item?id=43935707) - [CryptPad: An Alternative to the Google Suite](https://cryptpad.org/)
* [2025-05-09, 11:25:14](https://lobste.rs/s/t5fvm1/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/t5fvm1/what_are_you_doing_this_weekend)
* [2025-05-09, 11:23:36](https://news.ycombinator.com/item?id=43935625) - [Data manipulations alleged in study that paved way for Microsoft&apos;s quantum chip](https://www.science.org/content/article/data-manipulations-alleged-study-paved-way-microsoft-s-quantum-chip)
* [2025-05-09, 11:18:06](https://news.ycombinator.com/item?id=43935586) - [Amazon&apos;s Vulcan Robots Now Stow Items Faster Than Humans](https://spectrum.ieee.org/amazon-stowing-robots)
* [2025-05-09, 11:07:36](https://lobste.rs/s/4r3rcv/wasm_2_0_completed) - [Wasm 2.0 Completed](https://webassembly.org/news/2025-03-20-wasm-2.0/)
* [2025-05-09, 11:00:00](https://yro.slashdot.org/story/25/05/09/0138207/irs-hopes-to-replace-fired-enforcement-workers-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IRS Hopes To Replace Fired Enforcement Workers With AI](https://yro.slashdot.org/story/25/05/09/0138207/irs-hopes-to-replace-fired-enforcement-workers-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 10:52:15](https://news.ycombinator.com/item?id=43935434) - [Implementing a Struct of Arrays](https://brevzin.github.io/c++/2025/05/02/soa/)
* [2025-05-09, 10:45:40](https://news.ycombinator.com/item?id=43935394) - [Show HN: Hyvector – A fast and modern SVG editor](https://www.hyvector.com)
* [2025-05-09, 10:39:43](https://news.ycombinator.com/item?id=43935356) - [The Linux Kernel&apos;s PGP Web of Trust](https://blog.kleine-koenig.org/ukl/the-linux-kernels-pgp-web-of-trust.html)
* [2025-05-09, 09:30:00](https://slashdot.org/story/25/05/09/0133200/instagrams-ai-chatbots-lie-about-being-licensed-therapists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Instagram&apos;s AI Chatbots Lie About Being Licensed Therapists](https://slashdot.org/story/25/05/09/0133200/instagrams-ai-chatbots-lie-about-being-licensed-therapists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 07:48:25](https://lobste.rs/s/ysqymn/rusty_nu_posix) - [Rusty Nu POSIX](https://mort.io/blog/nu-posix/)
* [2025-05-09, 07:01:00](https://soylentnews.org/article.pl?sid=25/05/07/2330241&amp;from=rss) - [We Have Reached the “Severed Fingers and Abductions” Stage of the Crypto Revolution ](https://soylentnews.org/article.pl?sid=25/05/07/2330241&amp;from=rss)
* [2025-05-09, 07:00:00](https://tech.slashdot.org/story/25/05/09/0130212/spacex-gets-approval-to-sell-starlink-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Gets Approval To Sell Starlink In India](https://tech.slashdot.org/story/25/05/09/0130212/spacex-gets-approval-to-sell-starlink-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 06:22:47](https://lobste.rs/s/ihrrkt/ebpf_mystery_when_is_ipv4_not_ipv4_when_it_s) - [eBPF mystery: When is IPv4 not IPv4? When it&apos;s pretending to be IPv6](https://blog.gripdev.xyz/2025/05/06/ebpf-mystery-when-is-ipv4-not-ipv4-when-its-ipv6/)
* [2025-05-09, 05:30:00](https://yro.slashdot.org/story/25/05/09/0124204/celsius-ceo-mashinsky-sentenced-to-12-years-in-multi-billion-dollar-crypto-fraud-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Celsius CEO Mashinsky Sentenced To 12 Years in Multi-Billion-Dollar Crypto Fraud Case](https://yro.slashdot.org/story/25/05/09/0124204/celsius-ceo-mashinsky-sentenced-to-12-years-in-multi-billion-dollar-crypto-fraud-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 04:55:20](https://news.ycombinator.com/item?id=43933891) - [LegoGPT: Generating Physically Stable and Buildable Lego](https://avalovelace1.github.io/LegoGPT/)
* [2025-05-09, 03:30:00](https://yro.slashdot.org/story/25/05/08/203254/noaa-retires-extreme-weather-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NOAA Retires Extreme Weather Database](https://yro.slashdot.org/story/25/05/08/203254/noaa-retires-extreme-weather-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 02:14:00](https://soylentnews.org/article.pl?sid=25/05/07/1352238&amp;from=rss) - [OpenSUSE Joins the End of 10 Campaign](https://soylentnews.org/article.pl?sid=25/05/07/1352238&amp;from=rss)
* [2025-05-09, 02:03:14](https://lobste.rs/s/k8jdhj/new_edition_freepascal_from_square_one) - [New Edition of FreePascal From Square One](https://www.contrapositivediary.com/?p=5399)
* [2025-05-09, 02:00:00](https://slashdot.org/story/25/05/09/0113217/alibabas-zerosearch-teaches-ai-to-search-without-search-engines-cuts-training-costs-by-88?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Alibaba&apos;s ZeroSearch Teaches AI To Search Without Search Engines, Cuts Training Costs By 88%](https://slashdot.org/story/25/05/09/0113217/alibabas-zerosearch-teaches-ai-to-search-without-search-engines-cuts-training-costs-by-88?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-09, 01:54:11](https://lobste.rs/s/3jmcpq/building_your_own_atomic_bootc_desktop) - [Building your own Atomic (bootc) Desktop](https://fedoramagazine.org/building-your-own-atomic-bootc-desktop/)
* [2025-05-09, 00:54:34](https://lobste.rs/s/ciffhb/200_change) - [200 and change](https://pdubroy.github.io/200andchange/)
* [2025-05-09, 00:11:06](https://lobste.rs/s/up2tdk/easy_parsing_with_reasonable_error) - [Easy parsing with reasonable error messages in OCaml&apos;s Angstrom](https://dev.to/yawaramin/easy-parsing-with-reasonable-error-messages-in-ocamls-angstrom-g5f)
* [2025-05-08, 23:29:41](https://lobste.rs/s/gxmbzs/stability_by_design) - [Stability by Design](https://potetm.com/devtalk/stability-by-design.html)
* [2025-05-08, 23:19:46](https://lobste.rs/s/iwortf/so_we_finished_decompiling_lego_island) - [So we finished decompiling LEGO Island](https://youtube.com/watch?v=gthm-0Av93Q&amp;pp=ygUjd2UgZmluaXNoZWQgZGVjb21waWxpbmcgbGVnbyBpc2xhbmQ%3D)
* [2025-05-08, 22:06:07](https://lobste.rs/s/gy2cuz/beating_fastest_lexer_generator_rust) - [Beating the fastest lexer generator in Rust (2023)](https://alic.dev/blog/fast-lexing)
* [2025-05-08, 21:30:59](https://lobste.rs/s/djfvzs/wikipedia_legally_challenges_flawed) - [Wikipedia legally challenges &apos;flawed&apos; online safety rules](https://www.bbc.co.uk/news/articles/c62j2gr8866o)
* [2025-05-08, 21:29:00](https://soylentnews.org/article.pl?sid=25/05/07/1350218&amp;from=rss) - [Building Custom Atomic Distributions - a Step-by-Step Guide](https://soylentnews.org/article.pl?sid=25/05/07/1350218&amp;from=rss)
* [2025-05-08, 20:58:39](https://lobste.rs/s/ukvcyk/which_ai_arena_is_one_we_can_actually_trust) - [Which AI \&quot;arena\&quot; is the one we can actually trust?](https://lobste.rs/s/ukvcyk/which_ai_arena_is_one_we_can_actually_trust)
* [2025-05-08, 20:48:40](https://lobste.rs/s/exup3x/web_browser_telemetry) - [Web Browser telemetry](https://sizeof.cat/post/web-browser-telemetry-2025-edition/)
* [2025-05-08, 20:10:12](https://lobste.rs/s/r0axbc/reservoir_sampling) - [Reservoir Sampling](https://samwho.dev/reservoir-sampling/)
* [2025-05-08, 19:57:38](https://lobste.rs/s/j3nhhc/rust_dependencies_scare_me) - [Rust Dependencies scare Me](https://vincents.dev/blog/rust-dependencies-scare-me/?)
* [2025-05-08, 17:44:54](https://lobste.rs/s/0faoue/2_5d_rendering_on_playdate) - [2.5D rendering on PlayDate](https://www.ligeiagames.com/ligeia-blog/castle-kellmore-rendering)
* [2025-05-08, 16:44:00](https://soylentnews.org/article.pl?sid=25/05/06/235250&amp;from=rss) - [Nvidia Warns US AI Hardware Export Rules Could Backfire Empowering Huawei To Define Global Standards](https://soylentnews.org/article.pl?sid=25/05/06/235250&amp;from=rss)
* [2025-05-08, 15:25:12](https://lobste.rs/s/8zmkmw/build_your_own_responsewriter_safer_http) - [Build your own ResponseWriter: safer HTTP in Go](https://anto.pt/articles/go-http-responsewriter)
* [2025-05-08, 13:05:56](https://lobste.rs/s/oj0kxa/announcing_spritely_oaken) - [Announcing Spritely Oaken](https://spritely.institute/news/announcing-spritely-oaken.html)
* [2025-05-08, 12:00:00](https://soylentnews.org/article.pl?sid=25/05/06/2254241&amp;from=rss) - [Hacker Breaches Telemessage System Used By US Officials, Raising Security Concerns](https://soylentnews.org/article.pl?sid=25/05/06/2254241&amp;from=rss)
* [2025-05-08, 09:24:15](https://lobste.rs/s/xnyrve/memory_safety_features_zig) - [Memory Safety Features in Zig](https://gencmurat.com/en/posts/memory-safety-features-in-zig/)
* [2025-05-08, 07:22:00](https://soylentnews.org/article.pl?sid=25/05/06/1923215&amp;from=rss) - [People Trust Legal Advice Generated by ChatGPT More Than a Lawyer](https://soylentnews.org/article.pl?sid=25/05/06/1923215&amp;from=rss)
* [2025-05-08, 02:36:00](https://soylentnews.org/article.pl?sid=25/05/06/1537247&amp;from=rss) - [The First Driverless Semis Have Started Running Regular Longhaul Routes](https://soylentnews.org/article.pl?sid=25/05/06/1537247&amp;from=rss)
* [2025-05-07, 21:55:00](https://soylentnews.org/article.pl?sid=25/05/06/0348250&amp;from=rss) - [Scientists Build First-Ever &apos;Black Hole Bomb&apos; Analog](https://soylentnews.org/article.pl?sid=25/05/06/0348250&amp;from=rss)
* [2025-05-07, 17:07:00](https://soylentnews.org/article.pl?sid=25/05/06/0338215&amp;from=rss) - [UK Could Require Solar Panels on Most New Homes by 2027](https://soylentnews.org/article.pl?sid=25/05/06/0338215&amp;from=rss)
* [2025-05-07, 12:22:00](https://soylentnews.org/article.pl?sid=25/05/06/0334233&amp;from=rss) - [Hackers Abuse IPv6 Networking Feature to Hijack Windows Software Updates](https://soylentnews.org/article.pl?sid=25/05/06/0334233&amp;from=rss)
* [2025-05-07, 07:37:00](https://soylentnews.org/article.pl?sid=25/05/06/0312252&amp;from=rss) - [Mathematicians Just Solved a 125-Year-Old Problem, Uniting 3 Theories in Physics](https://soylentnews.org/article.pl?sid=25/05/06/0312252&amp;from=rss)
* [2025-05-07, 02:51:00](https://soylentnews.org/article.pl?sid=25/05/06/032221&amp;from=rss) - [PA’s Largest Coal Plant to Become 4.5GW Gas-Fired AI Hub](https://soylentnews.org/article.pl?sid=25/05/06/032221&amp;from=rss)
* [2025-05-07, 01:42:37](https://news.ycombinator.com/item?id=43911440) - [Show HN: Agents.erl (AI Agents in Erlang)](https://github.com/arthurcolle/agents.erl)
* [2025-05-06, 22:03:00](https://soylentnews.org/meta/article.pl?sid=25/05/06/0251212&amp;from=rss) - [Who&apos;s in?](https://soylentnews.org/meta/article.pl?sid=25/05/06/0251212&amp;from=rss)
* [2025-05-06, 20:40:28](https://news.ycombinator.com/item?id=43909418) - [The CL1: the first code deployable biological computer](https://corticallabs.com/cl1.html)
* [2025-05-06, 20:30:17](https://news.ycombinator.com/item?id=43909328) - [Cell Mates: Extracting Useful Information from Tables for LLMs](https://www.gojiberries.io/cell-mates-extracting-useful-information-from-tables-for-llms/)
* [2025-05-06, 18:34:57](https://news.ycombinator.com/item?id=43908220) - [A Taxonomy for Rendering Engines](https://c0de517e.com/021_taxonomy.htm)
* [2025-05-06, 17:16:00](https://soylentnews.org/article.pl?sid=25/05/05/2311202&amp;from=rss) - [Adventure – March 1980](https://soylentnews.org/article.pl?sid=25/05/05/2311202&amp;from=rss)
* [2025-05-06, 12:37:00](https://soylentnews.org/article.pl?sid=25/05/05/0249236&amp;from=rss) - [Soviet-Era Spacecraft Expected to Plunge Uncontrolled to Earth Next Week](https://soylentnews.org/article.pl?sid=25/05/05/0249236&amp;from=rss)
* [2025-05-06, 07:50:00](https://soylentnews.org/article.pl?sid=25/05/04/1840238&amp;from=rss) - [Backstage Access: Spotify’s Dev Tools Side-Hustle is Growing Legs](https://soylentnews.org/article.pl?sid=25/05/04/1840238&amp;from=rss)
* [2025-05-06, 03:05:00](https://soylentnews.org/article.pl?sid=25/05/03/1953213&amp;from=rss) - [Microsoft Finally Launches its Controversial Recall Feature](https://soylentnews.org/article.pl?sid=25/05/03/1953213&amp;from=rss)
* [2025-05-05, 22:18:00](https://soylentnews.org/article.pl?sid=25/05/03/1949215&amp;from=rss) - [Software Dev Fortifies His Blog With &apos;Zip Bombs&apos; - Attacking Bots Meet Their End With Software](https://soylentnews.org/article.pl?sid=25/05/03/1949215&amp;from=rss)
* [2025-05-05, 17:36:00](https://soylentnews.org/article.pl?sid=25/05/03/1941255&amp;from=rss) - [Plastic-Eating Mealworms Native to Africa Discovered](https://soylentnews.org/article.pl?sid=25/05/03/1941255&amp;from=rss)
* [2025-05-05, 16:30:22](https://news.ycombinator.com/item?id=43896835) - [The birth of AI poker? Letters from the 1984 WSOP](https://www.poker.org/latest-news/the-birth-of-ai-poker-letters-from-the-1984-wsop-a4v2W4N4X3EP/)
* [2025-05-05, 12:43:00](https://soylentnews.org/article.pl?sid=25/05/03/1427232&amp;from=rss) - [You Have Two Months Left to Update Your Old LG Phone](https://soylentnews.org/article.pl?sid=25/05/03/1427232&amp;from=rss)
* [2025-05-05, 08:04:00](https://soylentnews.org/article.pl?sid=25/05/03/1421205&amp;from=rss) - [China Successfully Reloads a Running Thorium Reactor](https://soylentnews.org/article.pl?sid=25/05/03/1421205&amp;from=rss)
* [2025-05-05, 03:16:00](https://soylentnews.org/article.pl?sid=25/05/03/147205&amp;from=rss) - [The Absurdly Complicated Circuitry for the 386 Processor&apos;s Registers](https://soylentnews.org/article.pl?sid=25/05/03/147205&amp;from=rss)
