# [News Summary](https://kherrick.github.io/news-summary/)

## Scientific Discoveries and Space Exploration

* [Scientists Watch Supernova Shockwave Shoot Through a Dying Star For First Time](https://science.slashdot.org/story/25/11/12/2346249/scientists-watch-supernova-shockwave-shoot-through-a-dying-star-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Scientists observe groundbreaking phenomenon of a supernova shockwave traveling through a dying star.

* [Sun: First Glimpse of Polar Magnetic Field in Motion](https://soylentnews.org/article.pl?sid=25/11/11/0334251&amp;from=rss) - Researchers capture unprecedented motion of the Sun's polar magnetic fields.

* [NASA Confirms Voyager Spacecraft Has Encountered a “Wall of Fire” at the Edge of the Solar System](https://soylentnews.org/article.pl?sid=25/11/10/1939208&amp;from=rss) - NASA announces Voyager's encounter with unique phenomenon marking the edge of the solar system.

* [Voyager 1 is a light-day away by November 2026](https://www.iflscience.com/on-november-13-2026-voyager-will-reach-one-full-light-day-away-from-earth-81432) - Predicting Voyager 1's milestone distance achievement in 2026.

## Artificial Intelligence Developments

* [Anthropic To Spend $50 Billion On US AI Infrastructure](https://news.slashdot.org/story/25/11/12/2217257/anthropic-to-spend-50-billion-on-us-ai-infrastructure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Major investment by Anthropic in US AI technologies and infrastructure.

* [OpenAI Fights Order To Turn Over Millions of ChatGPT Conversations](https://yro.slashdot.org/story/25/11/12/2158208/openai-fights-order-to-turn-over-millions-of-chatgpt-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - OpenAI resists legal demand to disclose extensive ChatGPT user dialogue.

* [AI-Generated Song Tops Country Music Chart](https://entertainment.slashdot.org/story/25/11/12/2320241/ai-generated-song-tops-country-music-chart?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - AI revolutionizes music industry with a chart-topping country melody.

* [GPT-5.1: A smarter, more conversational ChatGPT](https://openai.com/index/gpt-5-1/) - OpenAI launches GPT-5.1, enhancing reasoning and conversational features.

## Innovations in Technology and Industry

* [Toyota Opens the Doors To Its First EV Battery Plant In the US](https://tech.slashdot.org/story/25/11/12/2332244/toyota-opens-the-doors-to-its-first-ev-battery-plant-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Toyota's milestone achievement in electric vehicle battery production.

* [Waymo Robotaxis Are Now Giving Rides On Freeways](https://tech.slashdot.org/story/25/11/12/238227/waymo-robotaxis-are-now-giving-rides-on-freeways?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Waymo expands autonomous ride services to freeway transportation.

* [Valve Rejoins the VR Hardware Wars With Standalone Steam Frame](https://hardware.slashdot.org/story/25/11/12/224252/valve-rejoins-the-vr-hardware-wars-with-standalone-steam-frame?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Valve re-enters VR competition with advanced Steam Frame technology.

* [Microsoft Is Offering Rewards Points for Using Edge Instead of Google Chrome](https://it.slashdot.org/story/25/11/12/200220/microsoft-is-offering-rewards-points-for-using-edge-instead-of-google-chrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft incentivizes users to adopt Edge browser over competitors.

## Cultural and Historical Perspectives

* [Brewing Controversy: How Coffee Sparked Fierce Debate in the 16th-Century](https://soylentnews.org/article.pl?sid=25/11/10/1942230&amp;from=rss) - Exploring the historical misunderstandings surrounding coffee's introduction in society.

* [The Art and Science of Negotiation](https://soylentnews.org/article.pl?sid=25/11/10/122217&amp;from=rss) - Strategies blending art and science for effective negotiation techniques.

* [Comparing the Latitude of Europe and America](https://vividmaps.com/comparing-latitude-of-europe-and-america/) - Mapping insights reveal geographic comparisons between continents.

* [The Chemistry Behind That Pricey Cup of Civet Coffee](https://soylentnews.org/article.pl?sid=25/11/08/214219&amp;from=rss) - Scientific exploration into the expensive production of civet coffee.

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

* [2025-11-13, 07:00:00](https://science.slashdot.org/story/25/11/12/2346249/scientists-watch-supernova-shockwave-shoot-through-a-dying-star-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Watch Supernova Shockwave Shoot Through a Dying Star For First Time](https://science.slashdot.org/story/25/11/12/2346249/scientists-watch-supernova-shockwave-shoot-through-a-dying-star-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 04:26:56](https://news.ycombinator.com/item?id=45910625) - [CollectWise (YC F24) Is Hiring](https://www.ycombinator.com/companies/collectwise/jobs/tv3ufcc-forward-deployed-engineer)
* [2025-11-13, 04:26:23](https://news.ycombinator.com/item?id=45910622) - [Robert Moses&apos;s unfinished business should be Mamdani&apos;s priority](https://www.eatingpolicy.com/p/robert-mosess-unfinished-business)
* [2025-11-13, 04:13:04](https://lobste.rs/s/yuwqaq/practical_security_production) - [Practical Security in Production Hardening the C++ Standard Library at massive scale](https://queue.acm.org/detail.cfm?id=3773097)
* [2025-11-13, 03:49:23](https://news.ycombinator.com/item?id=45910381) - [Android 16 QPR1 is being pushed to the Android Open Source Project](https://grapheneos.social/@GrapheneOS/115533432439509433)
* [2025-11-13, 03:44:37](https://news.ycombinator.com/item?id=45910347) - [Meta replaces WhatsApp for Windows with web wrapper that uses 1 GB RAM when idle](https://www.windowslatest.com/2025/11/12/meta-just-killed-native-whatsapp-on-windows-11-now-it-opens-webview-uses-1gb-ram-all-the-time/)
* [2025-11-13, 03:39:56](https://news.ycombinator.com/item?id=45910305) - [Bitcoin&apos;s big secret: How cryptocurrency became law enforcement&apos;s secret weapon](https://bitwarden.com/blog/how-cryptocurrency-became-law-enforcements-secret-weapon/)
* [2025-11-13, 03:34:02](https://news.ycombinator.com/item?id=45910257) - [Large integer precision error in Bash command output rendering](https://github.com/anthropics/claude-code/issues/11506)
* [2025-11-13, 03:32:24](https://news.ycombinator.com/item?id=45910244) - [On USB HID, Keyboard LEDs, and device emulation (2024)](https://epsilon537.github.io/boxlambda/usb-hid/)
* [2025-11-13, 03:30:00](https://tech.slashdot.org/story/25/11/12/2332244/toyota-opens-the-doors-to-its-first-ev-battery-plant-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Toyota Opens the Doors To Its First EV Battery Plant In the US](https://tech.slashdot.org/story/25/11/12/2332244/toyota-opens-the-doors-to-its-first-ev-battery-plant-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 03:16:35](https://lobste.rs/s/ojixwz/pgfirstaid_postgresql_health_check) - [pgFirstAid-The PostgreSQL Health Check](https://github.com/randoneering/pgFirstAid)
* [2025-11-13, 03:01:47](https://news.ycombinator.com/item?id=45910009) - [A Commentary on the Sixth Edition Unix Operating System](https://warsus.github.io/lions-/)
* [2025-11-13, 02:48:00](https://lobste.rs/s/qb9dr0/art_vm_firmware_logging) - [the art of (VM) firmware logging](https://www.kraxel.org/blog/2025/10/firmware-logging/)
* [2025-11-13, 02:33:00](https://soylentnews.org/article.pl?sid=25/11/11/0334251&amp;from=rss) - [Sun: First Glimpse of Polar Magnetic Field in Motion](https://soylentnews.org/article.pl?sid=25/11/11/0334251&amp;from=rss)
* [2025-11-13, 02:02:00](https://hardware.slashdot.org/story/25/11/12/2327202/russias-ai-robot-falls-seconds-after-being-unveiled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia&apos;s AI Robot Falls Seconds After Being Unveiled](https://hardware.slashdot.org/story/25/11/12/2327202/russias-ai-robot-falls-seconds-after-being-unveiled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 01:25:00](https://entertainment.slashdot.org/story/25/11/12/2320241/ai-generated-song-tops-country-music-chart?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI-Generated Song Tops Country Music Chart](https://entertainment.slashdot.org/story/25/11/12/2320241/ai-generated-song-tops-country-music-chart?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 00:48:45](https://news.ycombinator.com/item?id=45909059) - [Human Fovea Detector](https://www.shadertoy.com/view/4dsXzM)
* [2025-11-13, 00:45:00](https://tech.slashdot.org/story/25/11/12/238227/waymo-robotaxis-are-now-giving-rides-on-freeways?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Robotaxis Are Now Giving Rides On Freeways](https://tech.slashdot.org/story/25/11/12/238227/waymo-robotaxis-are-now-giving-rides-on-freeways?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-13, 00:33:25](https://news.ycombinator.com/item?id=45908938) - [Google will allow users to sideload Android apps without verification](https://android-developers.googleblog.com/2025/11/android-developer-verification-early.html)
* [2025-11-13, 00:02:00](https://news.slashdot.org/story/25/11/12/2217257/anthropic-to-spend-50-billion-on-us-ai-infrastructure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic To Spend $50 Billion On US AI Infrastructure](https://news.slashdot.org/story/25/11/12/2217257/anthropic-to-spend-50-billion-on-us-ai-infrastructure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-12, 23:38:56](https://news.ycombinator.com/item?id=45908483) - [Voyager 1 is a light-day away by November 2026](https://www.iflscience.com/on-november-13-2026-voyager-will-reach-one-full-light-day-away-from-earth-81432)
* [2025-11-12, 23:35:41](https://news.ycombinator.com/item?id=45908464) - [Valve is about to win the console generation](https://xeiaso.net/blog/2025/valve-is-about-to-win-the-console-generation/)
* [2025-11-12, 23:20:00](https://ask.slashdot.org/story/25/11/12/2213205/ask-slashdot-are-there-any-good-android-tablets-out-there?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot: Are There Any Good Android Tablets Out There?](https://ask.slashdot.org/story/25/11/12/2213205/ask-slashdot-are-there-any-good-android-tablets-out-there?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-12, 22:40:00](https://hardware.slashdot.org/story/25/11/12/224252/valve-rejoins-the-vr-hardware-wars-with-standalone-steam-frame?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Rejoins the VR Hardware Wars With Standalone Steam Frame](https://hardware.slashdot.org/story/25/11/12/224252/valve-rejoins-the-vr-hardware-wars-with-standalone-steam-frame?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-12, 22:11:14](https://news.ycombinator.com/item?id=45907541) - [Marble: A Multimodal World Model](https://www.worldlabs.ai/blog/marble-world-model)
* [2025-11-12, 22:02:00](https://yro.slashdot.org/story/25/11/12/2158208/openai-fights-order-to-turn-over-millions-of-chatgpt-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Fights Order To Turn Over Millions of ChatGPT Conversations](https://yro.slashdot.org/story/25/11/12/2158208/openai-fights-order-to-turn-over-millions-of-chatgpt-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-12, 21:50:14](https://news.ycombinator.com/item?id=45907259) - [Homebrew no longer allows bypassing Gatekeeper for unsigned/unnotarized software](https://github.com/Homebrew/brew/issues/20755)
* [2025-11-12, 21:49:00](https://soylentnews.org/article.pl?sid=25/11/10/1942230&amp;from=rss) - [Brewing Controversy: How Coffee Sparked Fierce Debate in the 16th-Century](https://soylentnews.org/article.pl?sid=25/11/10/1942230&amp;from=rss)
* [2025-11-12, 21:35:38](https://lobste.rs/s/v8bgze/linux_process_priorities_demystified) - [Linux process priorities demystified](https://www.sigma-star.at/blog/2022/02/linux-proc-prios/)
* [2025-11-12, 21:25:00](https://slashdot.org/story/25/11/12/2033254/openais-gpt-51-brings-smarter-reasoning-and-more-personality-presets-to-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s GPT-5.1 Brings Smarter Reasoning and More Personality Presets To ChatGPT](https://slashdot.org/story/25/11/12/2033254/openais-gpt-51-brings-smarter-reasoning-and-more-personality-presets-to-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-12, 20:45:00](https://games.slashdot.org/story/25/11/12/2019204/valve-enters-the-console-wars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Enters the Console Wars](https://games.slashdot.org/story/25/11/12/2019204/valve-enters-the-console-wars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-12, 20:11:26](https://lobste.rs/s/a1tixp/valve_announces_new_steam_machine_steam) - [Valve Announces New Steam Machine, Steam Controller &amp; Steam Frame](https://www.phoronix.com/news/Steam-Machines-Frame-2026)
* [2025-11-12, 20:05:00](https://it.slashdot.org/story/25/11/12/200220/microsoft-is-offering-rewards-points-for-using-edge-instead-of-google-chrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Is Offering Rewards Points for Using Edge Instead of Google Chrome](https://it.slashdot.org/story/25/11/12/200220/microsoft-is-offering-rewards-points-for-using-edge-instead-of-google-chrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-12, 19:50:32](https://news.ycombinator.com/item?id=45905408) - [GLP-1 drugs linked to lower death rates in colon cancer patients](https://today.ucsd.edu/story/glp-1-drugs-linked-to-dramatically-lower-death-rates-in-colon-cancer-patients)
* [2025-11-12, 19:25:00](https://news.slashdot.org/story/25/11/12/1849239/us-ends-penny-making-run-after-more-than-230-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Ends Penny-Making Run After More Than 230 Years](https://news.slashdot.org/story/25/11/12/1849239/us-ends-penny-making-run-after-more-than-230-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-12, 19:24:56](https://lobste.rs/s/94bkgh/visual_types) - [Visual Types](https://types.kitlangton.com/)
* [2025-11-12, 19:05:41](https://news.ycombinator.com/item?id=45904551) - [GPT-5.1: A smarter, more conversational ChatGPT](https://openai.com/index/gpt-5-1/)
* [2025-11-12, 18:52:13](https://lobste.rs/s/x10xh7/homebrew_v5_0_0_missing_package_manager) - [Homebrew v5.0.0: The Missing Package Manager for macOS (or Linux)](https://brew.sh/2025/11/12/homebrew-5.0.0/)
* [2025-11-12, 18:45:00](https://news.slashdot.org/story/25/11/12/1834253/uc-san-diego-reports-steep-decline-in-student-academic-preparation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UC San Diego Reports &apos;Steep Decline&apos; in Student Academic Preparation](https://news.slashdot.org/story/25/11/12/1834253/uc-san-diego-reports-steep-decline-in-student-academic-preparation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-12, 18:35:59](https://news.ycombinator.com/item?id=45903995) - [How Tube Amplifiers Work](https://robrobinette.com/How_Amps_Work.htm)
* [2025-11-12, 18:17:35](https://lobste.rs/s/d6hdwo/one_weird_hashing_trick) - [One Weird Hashing Trick](https://notes.hella.cheap/one-weird-hashing-trick.html)
* [2025-11-12, 18:06:00](https://apple.slashdot.org/story/25/11/12/186201/apple-study-finds-mandated-fee-reductions-never-reached-european-consumers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Study Finds Mandated Fee Reductions Never Reached European Consumers](https://apple.slashdot.org/story/25/11/12/186201/apple-study-finds-mandated-fee-reductions-never-reached-european-consumers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-12, 17:59:43](https://news.ycombinator.com/item?id=45903404) - [Steam Machine](https://store.steampowered.com/sale/steammachine)
* [2025-11-12, 17:54:58](https://news.ycombinator.com/item?id=45903325) - [Steam Frame](https://store.steampowered.com/sale/steamframe)
* [2025-11-12, 17:43:42](https://news.ycombinator.com/item?id=45903161) - [Launch HN: JSX Tool (YC F25) – A Browser Dev-Panel IDE for React](https://news.ycombinator.com/item?id=45903161)
* [2025-11-12, 17:24:54](https://news.ycombinator.com/item?id=45902898) - [Project Euler](https://projecteuler.net)
* [2025-11-12, 17:05:00](https://soylentnews.org/article.pl?sid=25/11/10/1939208&amp;from=rss) - [NASA Confirms Voyager Spacecraft Has Encountered a “Wall of Fire” at the Edge of the Solar System](https://soylentnews.org/article.pl?sid=25/11/10/1939208&amp;from=rss)
* [2025-11-12, 17:02:38](https://news.ycombinator.com/item?id=45902604) - [Helm 4.0](https://github.com/helm/helm/releases/tag/v4.0.0)
* [2025-11-12, 16:40:17](https://news.ycombinator.com/item?id=45902273) - [Digital ID, a new way to create and present an ID in Apple Wallet](https://www.apple.com/newsroom/2025/11/apple-introduces-digital-id-a-new-way-to-create-and-present-an-id-in-apple-wallet/)
* [2025-11-12, 16:10:13](https://news.ycombinator.com/item?id=45901904) - [The last-ever penny will be minted today in Philadelphia](https://www.cnn.com/2025/11/12/business/last-penny-minted)
* [2025-11-12, 15:46:00](https://lobste.rs/s/nilgjh/haiku_activity_contract_report_october) - [Haiku Activity &amp; Contract Report, October 2025](https://www.haiku-os.org/blog/waddlesplash/2025-11-11-haiku_activity_contract_report_october_2025/)
* [2025-11-12, 14:54:27](https://news.ycombinator.com/item?id=45900978) - [Learn Prolog Now](https://lpn.swi-prolog.org/lpnpage.php?pageid=top)
* [2025-11-12, 14:08:28](https://news.ycombinator.com/item?id=45900370) - [Fighting the New York Times&apos; invasion of user privacy](https://openai.com/index/fighting-nyt-user-privacy-invasion)
* [2025-11-12, 13:53:17](https://lobste.rs/s/3z4pro/fun_reliable_side_channels_for_cross) - [Fun-reliable side-channels for cross-container communication](https://h4x0r.org/funreliable/)
* [2025-11-12, 12:24:00](https://soylentnews.org/article.pl?sid=25/11/10/1931219&amp;from=rss) - [FBI Tries to Unmask Owner of Infamous Archive.is Site](https://soylentnews.org/article.pl?sid=25/11/10/1931219&amp;from=rss)
* [2025-11-12, 12:08:51](https://lobste.rs/s/yru06a/brief_look_at_freebsd) - [A brief look at FreeBSD](https://yorickpeterse.com/articles/a-brief-look-at-freebsd/)
* [2025-11-12, 11:36:25](https://lobste.rs/s/mvct7p/async_finaliser_deadlocks) - [Async and Finaliser Deadlocks](https://tratt.net/laurie/blog/2025/async_and_finaliser_deadlocks.html)
* [2025-11-12, 10:12:53](https://news.ycombinator.com/item?id=45898407) - [Yt-dlp: External JavaScript runtime now required for full YouTube support](https://github.com/yt-dlp/yt-dlp/issues/15012)
* [2025-11-12, 10:03:01](https://lobste.rs/s/gujl0w/template_interpreters) - [Template Interpreters](https://zackoverflow.dev/writing/template-interpreters/)
* [2025-11-12, 09:34:31](https://lobste.rs/s/p8skua/i_converted_rotary_phone_into_meeting) - [I converted a rotary phone into a meeting handset](https://www.stavros.io/posts/i-converted-a-rotary-phone-into-a-meeting-handset/)
* [2025-11-12, 08:52:46](https://lobste.rs/s/fah67j/i_didn_t_reverse_engineer_protocol_for_my) - [I didn&apos;t reverse-engineer the protocol for my blood pressure monitor in 24 hours](https://james.belchamber.com/articles/blood-pressure-monitor-reverse-engineering/)
* [2025-11-12, 07:34:00](https://soylentnews.org/article.pl?sid=25/11/10/1925212&amp;from=rss) - [Trinity Desktop Environment R14.1.5 Released with Support for Debian Trixie](https://soylentnews.org/article.pl?sid=25/11/10/1925212&amp;from=rss)
* [2025-11-12, 07:25:03](https://lobste.rs/s/pqoimv/google_posts_device_trees_for_booting) - [Google Posts Device Trees For Booting Pixel 10 Hardware With The Mainline Linux Kernel](https://www.phoronix.com/news/Google-Pixel-10-Google-DTs)
* [2025-11-12, 05:37:26](https://lobste.rs/s/6k8npc/subscripts_sizes_should_be_signed_2018) - [Subscripts and sizes should be signed (2018)](https://open-std.org/jtc1/sc22/wg21/docs/papers/2019/p1428r0.pdf)
* [2025-11-12, 02:58:29](https://lobste.rs/s/jghwoj/perkeep_v0_12_released) - [Perkeep v0.12 released](https://github.com/perkeep/perkeep/releases/tag/v0.12)
* [2025-11-12, 02:51:00](https://soylentnews.org/article.pl?sid=25/11/10/122217&amp;from=rss) - [The Art and Science of Negotiation](https://soylentnews.org/article.pl?sid=25/11/10/122217&amp;from=rss)
* [2025-11-11, 23:40:54](https://lobste.rs/s/bjbyt9/servo_new_web_engine_written_rust) - [Servo: A new web engine written in Rust](https://blogs.igalia.com/mrego/servo-a-new-web-engine-written-in-rust/)
* [2025-11-11, 22:51:12](https://lobste.rs/s/egoqqc/ffmpeg_google_fund_us_stop_sending_bugs) - [FFmpeg to Google: Fund Us or Stop Sending Bugs](https://thenewstack.io/ffmpeg-to-google-fund-us-or-stop-sending-bugs/)
* [2025-11-11, 22:03:00](https://soylentnews.org/article.pl?sid=25/11/10/1159252&amp;from=rss) - [MX Linux 25 “Infinity” Is Now Available for Download, Based on Debian 13 “Trixie”](https://soylentnews.org/article.pl?sid=25/11/10/1159252&amp;from=rss)
* [2025-11-11, 20:11:04](https://lobste.rs/s/ic1xkj/terminal_future) - [the terminal of the future](https://jyn.dev/the-terminal-of-the-future)
* [2025-11-11, 18:24:40](https://lobste.rs/s/nyd4p0/rtc_rk808_compensate_for_rockchip) - [rtc: rk808: Compensate for Rockchip calendar deviation on November 31st (2015)](https://github.com/torvalds/linux/commit/f076ef44a44d02ed91543f820c14c2c7dff53716)
* [2025-11-11, 18:24:09](https://lobste.rs/s/hw54as/domain_for_queer_community_by_queer) - [A domain for the Queer Community, by the Queer Community](https://www.dotmeow.org/en/what)
* [2025-11-11, 17:18:00](https://soylentnews.org/article.pl?sid=25/11/10/1130222&amp;from=rss) - [New Physical Attacks Are Quickly Diluting Secure Enclave Defenses From Nvidia, AMD, and Intel](https://soylentnews.org/article.pl?sid=25/11/10/1130222&amp;from=rss)
* [2025-11-11, 15:09:36](https://lobste.rs/s/btdj9j/grebedoc_static_site_hosting_for_git) - [Grebedoc — static site hosting for git forges](https://grebedoc.dev)
* [2025-11-11, 14:59:05](https://lobste.rs/s/socihf/firefox_expands_fingerprint) - [Firefox expands fingerprint protections: advancing towards a more private web](https://blog.mozilla.org/en/firefox/fingerprinting-protections/)
* [2025-11-11, 12:37:00](https://soylentnews.org/article.pl?sid=25/11/09/141240&amp;from=rss) - [Watch Out for These Recent Windows and NPM Vulnerabilities](https://soylentnews.org/article.pl?sid=25/11/09/141240&amp;from=rss)
* [2025-11-11, 07:50:00](https://soylentnews.org/article.pl?sid=25/11/09/1352235&amp;from=rss) - [UK Carriers to Block Spoofed Phone Numbers in Fraud Crackdown](https://soylentnews.org/article.pl?sid=25/11/09/1352235&amp;from=rss)
* [2025-11-11, 03:04:00](https://soylentnews.org/article.pl?sid=25/11/09/1338227&amp;from=rss) - [AI Sets Up Kodak Moment for Global Consultants](https://soylentnews.org/article.pl?sid=25/11/09/1338227&amp;from=rss)
* [2025-11-10, 22:22:00](https://soylentnews.org/article.pl?sid=25/11/08/2137231&amp;from=rss) - [EBikes Banned from NSW Trains Due To Fire Hazard](https://soylentnews.org/article.pl?sid=25/11/08/2137231&amp;from=rss)
* [2025-11-10, 17:40:00](https://soylentnews.org/article.pl?sid=25/11/08/2128227&amp;from=rss) - [Australian Wine Industry Battles Fakes With Smart Bottle Caps](https://soylentnews.org/article.pl?sid=25/11/08/2128227&amp;from=rss)
* [2025-11-10, 13:00:00](https://soylentnews.org/article.pl?sid=25/11/08/2122221&amp;from=rss) - [Plumbing the Universe for Dark Matter](https://soylentnews.org/article.pl?sid=25/11/08/2122221&amp;from=rss)
* [2025-11-10, 08:21:00](https://soylentnews.org/article.pl?sid=25/11/08/214219&amp;from=rss) - [The Chemistry Behind That Pricey Cup of Civet Coffee](https://soylentnews.org/article.pl?sid=25/11/08/214219&amp;from=rss)
* [2025-11-10, 03:47:00](https://soylentnews.org/article.pl?sid=25/11/08/1723229&amp;from=rss) - [Blame game over Air India crash goes on](https://soylentnews.org/article.pl?sid=25/11/08/1723229&amp;from=rss)
* [2025-11-09, 23:06:00](https://soylentnews.org/article.pl?sid=25/11/08/1721215&amp;from=rss) - [The 2026 Farmers’ Almanac Will Be Its Last Edition](https://soylentnews.org/article.pl?sid=25/11/08/1721215&amp;from=rss)
* [2025-11-09, 18:17:00](https://soylentnews.org/article.pl?sid=25/11/07/0311239&amp;from=rss) - [Microsoft AI Chief Warns Pursuing Machine Consciousness is a Gigantic Waste of Time](https://soylentnews.org/article.pl?sid=25/11/07/0311239&amp;from=rss)
* [2025-11-09, 13:35:00](https://soylentnews.org/article.pl?sid=25/11/07/036254&amp;from=rss) - [Ford CEO Jim Farley strikes a Cautious Tone on Apple’s New CarPlay Ultra](https://soylentnews.org/article.pl?sid=25/11/07/036254&amp;from=rss)
* [2025-11-09, 08:46:00](https://soylentnews.org/article.pl?sid=25/11/07/032255&amp;from=rss) - [Nvidia Will Help Build 7 AI Supercomputers for DoE](https://soylentnews.org/article.pl?sid=25/11/07/032255&amp;from=rss)
* [2025-11-09, 04:10:00](https://soylentnews.org/article.pl?sid=25/11/07/0255249&amp;from=rss) - [Gen Z is Ditching the Tie for a Toolbelt, and it’s the Smartest Rebellion Yet](https://soylentnews.org/article.pl?sid=25/11/07/0255249&amp;from=rss)
* [2025-11-09, 01:44:26](https://news.ycombinator.com/item?id=45862128) - [Comparing the Latitude of Europe and America](https://vividmaps.com/comparing-latitude-of-europe-and-america/)
