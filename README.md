# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Innovations and Developments

* [Netflix's New Era of TV Games Starts Now](https://games.slashdot.org/story/25/11/13/2333224/netflixs-new-era-of-tv-games-starts-now?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [World's First Flying Car Factory Begins Production In China](https://tech.slashdot.org/story/25/11/13/2315231/worlds-first-flying-car-factory-begins-production-in-china?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Mozilla Launches AI Window for Firefox](https://tech.slashdot.org/story/25/11/13/186229/mozilla-launches-ai-window-for-firefox?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Jack Dorsey Funds diVine, a Vine Reboot That Includes Vine's Video Archive](https://tech.slashdot.org/story/25/11/13/2247206/jack-dorsey-funds-divine-a-vine-reboot-that-includes-vines-video-archive?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Space Exploration and Breakthroughs

* [Blue Origin Sticks First New Glenn Rocket Landing and Launches NASA Spacecraft](https://science.slashdot.org/story/25/11/13/2211216/blue-origin-sticks-first-new-glenn-rocket-landing-and-launches-nasa-spacecraft?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Blue Origin lands New Glenn rocket booster on second try](https://techcrunch.com/2025/11/13/blue-origin-lands-new-glenn-rocket-booster-on-second-try/)

* [NASA Confirms Voyager Spacecraft Has Encountered a 'Wall of Fire' at the Edge of the Solar System](https://soylentnews.org/article.pl?sid=25/11/10/1939208&from=rss)

## Artificial Intelligence and Cybersecurity

* [Chinese Hackers Used Anthropic's AI To Automate Cyberattacks](https://it.slashdot.org/story/25/11/13/1715248/chinese-hackers-used-anthropics-ai-to-automate-cyberattacks?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Google's Gemini Deep Research Can Now Read Your Gmail and Rummage Through Google Drive](https://soylentnews.org/article.pl?sid=25/11/12/1214254&from=rss)

* [OpenMANET Wi-Fi HaLow open-source project for Raspberry Pi–based MANET radios](https://openmanet.net/)

## Corporate and Consumer Trends

* [Apple Tries Selling $230 iPhone Pocket 'Sock'](https://entertainment.slashdot.org/story/25/11/13/2259255/apple-tries-selling-230-iphone-pocket-sock?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Proton Might Recycle Abandoned Email Addresses](https://yro.slashdot.org/story/25/11/13/172239/proton-might-recycle-abandoned-email-addresses?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Robinhood Offers To Bring Cash To Your Doorstep, for a Fee](https://news.slashdot.org/story/25/11/13/1712207/robinhood-offers-to-bring-cash-to-your-doorstep-for-a-fee?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Scientific Discoveries and Research

* [The emergence and diversification of dog morphology](https://www.science.org/doi/10.1126/science.adt0995)

* [Plumbing the Universe for Dark Matter](https://soylentnews.org/article.pl?sid=25/11/08/2122221&from=rss)

* [FBI Tries to Unmask Owner of Infamous Archive.is Site](https://soylentnews.org/article.pl?sid=25/11/10/1931219&from=rss)

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

* [2025-11-14, 01:30:00](https://games.slashdot.org/story/25/11/13/2333224/netflixs-new-era-of-tv-games-starts-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix&apos;s New Era of TV Games Starts Now](https://games.slashdot.org/story/25/11/13/2333224/netflixs-new-era-of-tv-games-starts-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 00:50:00](https://tech.slashdot.org/story/25/11/13/2315231/worlds-first-flying-car-factory-begins-production-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s First Flying Car Factory Begins Production In China](https://tech.slashdot.org/story/25/11/13/2315231/worlds-first-flying-car-factory-begins-production-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 00:41:08](https://news.ycombinator.com/item?id=45922550) - [Apple Mini Apps Partner Program](https://developer.apple.com/programs/mini-apps-partner/)
* [2025-11-14, 00:10:00](https://tech.slashdot.org/story/25/11/13/2247206/jack-dorsey-funds-divine-a-vine-reboot-that-includes-vines-video-archive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey Funds diVine, a Vine Reboot That Includes Vine&apos;s Video Archive](https://tech.slashdot.org/story/25/11/13/2247206/jack-dorsey-funds-divine-a-vine-reboot-that-includes-vines-video-archive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 00:02:19](https://lobste.rs/s/7cujvb/wrangling_kubernetes_contexts) - [Wrangling Kubernetes contexts](https://natkr.com/2025-11-14-kubernetes-contexts/)
* [2025-11-13, 23:50:00](https://entertainment.slashdot.org/story/25/11/13/2259255/apple-tries-selling-230-iphone-pocket-sock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Tries Selling $230 iPhone Pocket &apos;Sock&apos;](https://entertainment.slashdot.org/story/25/11/13/2259255/apple-tries-selling-230-iphone-pocket-sock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 23:30:00](https://news.slashdot.org/story/25/11/13/2231251/apple-cuts-app-store-fee-in-half-for-mini-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Cuts App Store Fee In Half For &apos;Mini Apps&apos;](https://news.slashdot.org/story/25/11/13/2231251/apple-cuts-app-store-fee-in-half-for-mini-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 23:01:21](https://news.ycombinator.com/item?id=45921861) - [The emergence and diversification of dog morphology](https://www.science.org/doi/10.1126/science.adt0995)
* [2025-11-13, 22:56:49](https://lobste.rs/s/absftt/spectral_rendering_part_2_real_time) - [Spectral rendering, part 2: Real-time rendering](https://momentsingraphics.de/SpectralRendering2Rendering.html)
* [2025-11-13, 22:50:00](https://search.slashdot.org/story/25/11/13/2218200/linkedin-is-making-it-easier-to-search-for-people-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LinkedIn Is Making It Easier To Search For People With AI](https://search.slashdot.org/story/25/11/13/2218200/linkedin-is-making-it-easier-to-search-for-people-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 22:13:00](https://science.slashdot.org/story/25/11/13/2211216/blue-origin-sticks-first-new-glenn-rocket-landing-and-launches-nasa-spacecraft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blue Origin Sticks First New Glenn Rocket Landing and Launches NASA Spacecraft](https://science.slashdot.org/story/25/11/13/2211216/blue-origin-sticks-first-new-glenn-rocket-landing-and-launches-nasa-spacecraft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 21:33:26](https://news.ycombinator.com/item?id=45920881) - [650GB of Data (Delta Lake on S3). Polars vs. DuckDB vs. Daft vs. Spark](https://dataengineeringcentral.substack.com/p/650gb-of-data-delta-lake-on-s3-polars)
* [2025-11-13, 21:26:00](https://tech.slashdot.org/story/25/11/13/1842225/germany-to-ban-huawei-from-future-6g-network-in-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Germany To Ban Huawei From Future 6G Network in Sovereignty Push](https://tech.slashdot.org/story/25/11/13/1842225/germany-to-ban-huawei-from-future-6g-network-in-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 21:24:25](https://news.ycombinator.com/item?id=45920748) - [Blue Origin lands New Glenn rocket booster on second try](https://techcrunch.com/2025/11/13/blue-origin-lands-new-glenn-rocket-booster-on-second-try/)
* [2025-11-13, 21:23:00](https://soylentnews.org/article.pl?sid=25/11/12/1214254&amp;from=rss) - [Google&apos;s Gemini Deep Research Can Now Read Your Gmail and Rummage Through Google Drive](https://soylentnews.org/article.pl?sid=25/11/12/1214254&amp;from=rss)
* [2025-11-13, 21:18:14](https://news.ycombinator.com/item?id=45920677) - [OpenMANET Wi-Fi HaLow open-source project for Raspberry Pi–based MANET radios](https://openmanet.net/)
* [2025-11-13, 21:00:27](https://news.ycombinator.com/item?id=45920468) - [Piramidal (YC W24) Hiring: Front End Engineer](https://www.ycombinator.com/companies/piramidal/jobs/i9yNX5s-front-end-engineer-user-interface)
* [2025-11-13, 20:50:00](https://tech.slashdot.org/story/25/11/13/175228/china-plans-to-limit-how-fast-your-car-accelerates-to-62-mph-at-startup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Plans To Limit How Fast Your Car Accelerates To 62 MPH At Startup](https://tech.slashdot.org/story/25/11/13/175228/china-plans-to-limit-how-fast-your-car-accelerates-to-62-mph-at-startup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 20:33:43](https://news.ycombinator.com/item?id=45920156) - [Show HN: DBOS Java – Postgres-Backed Durable Workflows](https://github.com/dbos-inc/dbos-transact-java)
* [2025-11-13, 20:10:00](https://slashdot.org/story/25/11/13/1744254/big-short-investor-michael-burry-to-close-hedge-fund-as-he-warns-on-valuations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Big Short&apos; Investor Michael Burry To Close Hedge Fund as He Warns on Valuations](https://slashdot.org/story/25/11/13/1744254/big-short-investor-michael-burry-to-close-hedge-fund-as-he-warns-on-valuations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 20:06:25](https://lobste.rs/s/nrrijz/rust_android_move_fast_fix_things) - [Rust in Android: move fast and fix things](https://security.googleblog.com/2025/11/rust-in-android-move-fast-fix-things.html)
* [2025-11-13, 19:31:00](https://it.slashdot.org/story/25/11/13/1715248/chinese-hackers-used-anthropics-ai-to-automate-cyberattacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Hackers Used Anthropic&apos;s AI To Automate Cyberattacks](https://it.slashdot.org/story/25/11/13/1715248/chinese-hackers-used-anthropics-ai-to-automate-cyberattacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 19:03:26](https://news.ycombinator.com/item?id=45919067) - [SlopStop: Community-driven AI slop detection in Kagi Search](https://blog.kagi.com/slopstop)
* [2025-11-13, 18:51:00](https://news.slashdot.org/story/25/11/13/1712207/robinhood-offers-to-bring-cash-to-your-doorstep-for-a-fee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robinhood Offers To Bring Cash To Your Doorstep, for a Fee](https://news.slashdot.org/story/25/11/13/1712207/robinhood-offers-to-bring-cash-to-your-doorstep-for-a-fee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 18:34:12](https://news.ycombinator.com/item?id=45918638) - [Disrupting the first reported AI-orchestrated cyber espionage campaign](https://www.anthropic.com/news/disrupting-AI-espionage)
* [2025-11-13, 18:32:36](https://news.ycombinator.com/item?id=45918616) - [Rust in Android: move fast and fix things](https://security.googleblog.com/2025/11/rust-in-android-move-fast-fix-things.html)
* [2025-11-13, 18:10:29](https://news.ycombinator.com/item?id=45918331) - [The Eggstraordinary Fortress](https://ahmed1011001.github.io/Notes/stories/eggstrodinary.html)
* [2025-11-13, 18:07:00](https://tech.slashdot.org/story/25/11/13/186229/mozilla-launches-ai-window-for-firefox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Launches AI Window for Firefox](https://tech.slashdot.org/story/25/11/13/186229/mozilla-launches-ai-window-for-firefox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 17:57:10](https://lobste.rs/s/ctgbk2/another_fedora_flatpak_discussion) - [Another Fedora Flatpak discussion](https://lwn.net/SubscriberLink/1045247/b10b84a92c27c08a/)
* [2025-11-13, 17:39:13](https://news.ycombinator.com/item?id=45917875) - [Nano Banana can be prompt engineered for nuanced AI image generation](https://minimaxir.com/2025/11/nano-banana-prompts/)
* [2025-11-13, 17:30:00](https://yro.slashdot.org/story/25/11/13/172239/proton-might-recycle-abandoned-email-addresses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Proton Might Recycle Abandoned Email Addresses](https://yro.slashdot.org/story/25/11/13/172239/proton-might-recycle-abandoned-email-addresses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 16:57:41](https://lobste.rs/s/ccy6ey/messing_with_bots) - [Messing with bots](https://herman.bearblog.dev/messing-with-bots/)
* [2025-11-13, 16:51:00](https://tech.slashdot.org/story/25/11/13/1651220/verizon-to-cut-about-15000-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon To Cut About 15,000 Jobs](https://tech.slashdot.org/story/25/11/13/1651220/verizon-to-cut-about-15000-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 16:41:00](https://soylentnews.org/article.pl?sid=25/11/12/124239&amp;from=rss) - [Microsoft Task Manager Bug Spawns New Processes](https://soylentnews.org/article.pl?sid=25/11/12/124239&amp;from=rss)
* [2025-11-13, 16:24:29](https://lobste.rs/s/bqhrhj/mechanical_translation_from_cobol) - [Mechanical translation from COBOL to Kotlin using formal methods](https://marcoeg.medium.com/from-cobol-to-kotlin-795920b1f371)
* [2025-11-13, 16:03:04](https://news.ycombinator.com/item?id=45916525) - [Launch HN: Tweeks (YC W25) – Browser extension to deshittify the web](https://www.tweeks.io/onboarding)
* [2025-11-13, 16:01:30](https://lobste.rs/s/z0sqo3/synit_reactivity_object_capabilities) - [Synit: Reactivity and object capabilities in the system layer of an OS](https://synit.org/)
* [2025-11-13, 15:51:03](https://lobste.rs/s/4inlhr/language_design_notes) - [Language Design Notes](https://cs.lmu.edu/~ray/notes/languagedesignnotes/)
* [2025-11-13, 15:41:56](https://lobste.rs/s/knelbm/there_is_no_such_thing_as_3_5_inch_floppy) - [There is no such thing as a 3.5 inch floppy disc](https://jdebp.uk/FGA/floppy-discs-are-90mm-not-3-and-a-half-inches.html)
* [2025-11-13, 15:41:26](https://news.ycombinator.com/item?id=45916196) - [Zed is our office](https://zed.dev/blog/zed-is-our-office)
* [2025-11-13, 15:29:38](https://news.ycombinator.com/item?id=45916037) - [SIMA 2: An agent that plays, reasons, and learns with you in virtual 3D worlds](https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/)
* [2025-11-13, 14:43:58](https://lobste.rs/s/6dfpil/parsing_integers_c) - [Parsing integers in C](https://daniel.haxx.se/blog/2025/11/13/parsing-integers-in-c/)
* [2025-11-13, 14:21:25](https://news.ycombinator.com/item?id=45915210) - [How To Build A Smartwatch: Software](https://ericmigi.com/blog/how-to-build-a-smartwatch-software-setting-expectations-and-roadmap/)
* [2025-11-13, 14:10:48](https://news.ycombinator.com/item?id=45915069) - [Denx (a.k.a. U-Boot) Retires](https://www.denx.de/)
* [2025-11-13, 13:43:50](https://news.ycombinator.com/item?id=45914815) - [Heartbeats in Distributed Systems](https://arpitbhayani.me/blogs/heartbeats-in-distributed-systems/)
* [2025-11-13, 13:41:54](https://lobste.rs/s/bz1mxo/ingress_nginx_retirement_what_you_need) - [Ingress NGINX Retirement: What You Need to Know](https://www.kubernetes.dev/blog/2025/11/12/ingress-nginx-retirement/)
* [2025-11-13, 13:38:47](https://news.ycombinator.com/item?id=45914761) - [Blender Lab](https://www.blender.org/news/introducing-blender-lab/)
* [2025-11-13, 13:33:13](https://lobste.rs/s/ouy4dq/patterns_for_defensive_programming_rust) - [Patterns for Defensive Programming in Rust](https://corrode.dev/blog/defensive-programming/)
* [2025-11-13, 12:12:27](https://lobste.rs/s/m1l3zz/go_proposal_context_aware_dialer_methods) - [Go proposal: Context-aware Dialer methods](https://antonz.org/accepted/net-dialer-context/)
* [2025-11-13, 11:57:00](https://soylentnews.org/article.pl?sid=25/11/11/0337247&amp;from=rss) - [Want to be More Persuasive? Talk With Your Hands, Study Finds](https://soylentnews.org/article.pl?sid=25/11/11/0337247&amp;from=rss)
* [2025-11-13, 11:16:26](https://lobste.rs/s/erdni0/mergiraf_syntax_aware_merging_for_git) - [Mergiraf: syntax-aware merging for Git](https://lwn.net/Articles/1042355/)
* [2025-11-13, 10:02:43](https://lobste.rs/s/i0z3ha/behind_scenes_on_how_windows_95) - [Behind the scenes on how Windows 95 application compatibility patched broken programs](https://devblogs.microsoft.com/oldnewthing/20251111-00/?p=111781)
* [2025-11-13, 09:34:47](https://lobste.rs/s/cj0wpq/truly_first_class_custom_smart_pointers) - [Truly first-class custom smart pointers](https://nadrieril.github.io/blog/2025/11/11/truly-first-class-custom-smart-pointers.html)
* [2025-11-13, 09:23:30](https://news.ycombinator.com/item?id=45912698) - [Checkout.com hacked, refuses ransom payment, donates to security labs](https://www.checkout.com/blog/protecting-our-merchants-standing-up-to-extortion)
* [2025-11-13, 07:42:29](https://lobste.rs/s/zqhl3v/android_developer_verification_allow) - [Android developer verification: allow experienced users to accept the risks of installing software that isn&apos;t verified](https://android-developers.googleblog.com/2025/11/android-developer-verification-early.html)
* [2025-11-13, 07:21:25](https://lobste.rs/s/adk54c/what_s_new_herb_v0_8) - [What&apos;s new in Herb v0.8](https://herb-tools.dev/blog/whats-new-in-herb-v0-8)
* [2025-11-13, 07:05:00](https://soylentnews.org/article.pl?sid=25/11/11/0336223&amp;from=rss) - [Hyundai&apos;s New EV Training Center Opens Amid Market Turmoil](https://soylentnews.org/article.pl?sid=25/11/11/0336223&amp;from=rss)
* [2025-11-13, 03:16:35](https://lobste.rs/s/ojixwz/pgfirstaid_postgresql_health_check) - [pgFirstAid-The PostgreSQL Health Check](https://github.com/randoneering/pgFirstAid)
* [2025-11-13, 02:33:00](https://soylentnews.org/article.pl?sid=25/11/11/0334251&amp;from=rss) - [Sun: First Glimpse of Polar Magnetic Field in Motion](https://soylentnews.org/article.pl?sid=25/11/11/0334251&amp;from=rss)
* [2025-11-13, 00:33:25](https://news.ycombinator.com/item?id=45908938) - [Android developer verification: Early access starts](https://android-developers.googleblog.com/2025/11/android-developer-verification-early.html)
* [2025-11-12, 21:49:00](https://soylentnews.org/article.pl?sid=25/11/10/1942230&amp;from=rss) - [Brewing Controversy: How Coffee Sparked Fierce Debate in the 16th-Century](https://soylentnews.org/article.pl?sid=25/11/10/1942230&amp;from=rss)
* [2025-11-12, 20:11:26](https://lobste.rs/s/a1tixp/valve_announces_new_steam_machine_steam) - [Valve Announces New Steam Machine, Steam Controller &amp; Steam Frame](https://www.phoronix.com/news/Steam-Machines-Frame-2026)
* [2025-11-12, 19:24:56](https://lobste.rs/s/94bkgh/visual_types) - [Visual Types](https://types.kitlangton.com/)
* [2025-11-12, 18:52:13](https://lobste.rs/s/x10xh7/homebrew_v5_0_0_missing_package_manager) - [Homebrew v5.0.0: The Missing Package Manager for macOS (or Linux)](https://brew.sh/2025/11/12/homebrew-5.0.0/)
* [2025-11-12, 18:17:35](https://lobste.rs/s/d6hdwo/one_weird_hashing_trick) - [One Weird Hashing Trick](https://notes.hella.cheap/one-weird-hashing-trick.html)
* [2025-11-12, 17:59:43](https://news.ycombinator.com/item?id=45903404) - [Steam Machine](https://store.steampowered.com/sale/steammachine)
* [2025-11-12, 17:05:00](https://soylentnews.org/article.pl?sid=25/11/10/1939208&amp;from=rss) - [NASA Confirms Voyager Spacecraft Has Encountered a “Wall of Fire” at the Edge of the Solar System](https://soylentnews.org/article.pl?sid=25/11/10/1939208&amp;from=rss)
* [2025-11-12, 12:24:00](https://soylentnews.org/article.pl?sid=25/11/10/1931219&amp;from=rss) - [FBI Tries to Unmask Owner of Infamous Archive.is Site](https://soylentnews.org/article.pl?sid=25/11/10/1931219&amp;from=rss)
* [2025-11-12, 12:08:51](https://lobste.rs/s/yru06a/brief_look_at_freebsd) - [A brief look at FreeBSD](https://yorickpeterse.com/articles/a-brief-look-at-freebsd/)
* [2025-11-12, 11:36:25](https://lobste.rs/s/mvct7p/async_finaliser_deadlocks) - [Async and Finaliser Deadlocks](https://tratt.net/laurie/blog/2025/async_and_finaliser_deadlocks.html)
* [2025-11-12, 07:34:00](https://soylentnews.org/article.pl?sid=25/11/10/1925212&amp;from=rss) - [Trinity Desktop Environment R14.1.5 Released with Support for Debian Trixie](https://soylentnews.org/article.pl?sid=25/11/10/1925212&amp;from=rss)
* [2025-11-12, 02:51:00](https://soylentnews.org/article.pl?sid=25/11/10/122217&amp;from=rss) - [The Art and Science of Negotiation](https://soylentnews.org/article.pl?sid=25/11/10/122217&amp;from=rss)
* [2025-11-11, 22:03:00](https://soylentnews.org/article.pl?sid=25/11/10/1159252&amp;from=rss) - [MX Linux 25 “Infinity” Is Now Available for Download, Based on Debian 13 “Trixie”](https://soylentnews.org/article.pl?sid=25/11/10/1159252&amp;from=rss)
* [2025-11-11, 17:18:00](https://soylentnews.org/article.pl?sid=25/11/10/1130222&amp;from=rss) - [New Physical Attacks Are Quickly Diluting Secure Enclave Defenses From Nvidia, AMD, and Intel](https://soylentnews.org/article.pl?sid=25/11/10/1130222&amp;from=rss)
* [2025-11-11, 12:37:00](https://soylentnews.org/article.pl?sid=25/11/09/141240&amp;from=rss) - [Watch Out for These Recent Windows and NPM Vulnerabilities](https://soylentnews.org/article.pl?sid=25/11/09/141240&amp;from=rss)
* [2025-11-11, 07:50:00](https://soylentnews.org/article.pl?sid=25/11/09/1352235&amp;from=rss) - [UK Carriers to Block Spoofed Phone Numbers in Fraud Crackdown](https://soylentnews.org/article.pl?sid=25/11/09/1352235&amp;from=rss)
* [2025-11-11, 03:04:00](https://soylentnews.org/article.pl?sid=25/11/09/1338227&amp;from=rss) - [AI Sets Up Kodak Moment for Global Consultants](https://soylentnews.org/article.pl?sid=25/11/09/1338227&amp;from=rss)
* [2025-11-10, 22:22:00](https://soylentnews.org/article.pl?sid=25/11/08/2137231&amp;from=rss) - [EBikes Banned from NSW Trains Due To Fire Hazard](https://soylentnews.org/article.pl?sid=25/11/08/2137231&amp;from=rss)
* [2025-11-10, 17:40:00](https://soylentnews.org/article.pl?sid=25/11/08/2128227&amp;from=rss) - [Australian Wine Industry Battles Fakes With Smart Bottle Caps](https://soylentnews.org/article.pl?sid=25/11/08/2128227&amp;from=rss)
* [2025-11-10, 13:00:00](https://soylentnews.org/article.pl?sid=25/11/08/2122221&amp;from=rss) - [Plumbing the Universe for Dark Matter](https://soylentnews.org/article.pl?sid=25/11/08/2122221&amp;from=rss)
* [2025-11-10, 08:21:00](https://soylentnews.org/article.pl?sid=25/11/08/214219&amp;from=rss) - [The Chemistry Behind That Pricey Cup of Civet Coffee](https://soylentnews.org/article.pl?sid=25/11/08/214219&amp;from=rss)
* [2025-11-10, 03:47:00](https://soylentnews.org/article.pl?sid=25/11/08/1723229&amp;from=rss) - [Blame game over Air India crash goes on](https://soylentnews.org/article.pl?sid=25/11/08/1723229&amp;from=rss)
