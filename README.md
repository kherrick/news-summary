# [News Summary](https://kherrick.github.io/news-summary/)

## Space Exploration and Astronomy

* [Pluto Flyover from New Horizons](https://apod.nasa.gov/apod/ap250518.html) - View a stunning visual flyover of Pluto captured by NASA's New Horizons mission, offering a unique perspective into the dwarf planet's surface. [Comments](https://news.ycombinator.com/item?id=44022233)

* [NASA Keeps Ancient Voyager 1 Spacecraft Alive With Hail Mary Thruster Fix](https://soylentnews.org/article.pl?sid=25/05/16/1759244&from=rss) - NASA engineers employ a creative solution to extend the operational life of the Voyager 1 spacecraft beyond expectations. [Comments](https://soylentnews.org/article.pl?sid=25/05/16/1759244&from=rss)

## Sustainability and Technology Integration

* [Solar grants held hostage in Pennsylvania legislature – as demand soars](https://capitalandmain.com/solar-grants-held-hostage-in-pennsylvania-legislature-as-demand-soars) - PA legislature creates hurdles for granting solar energy subsidies despite growing community interest and renewable energy demand. [Comments](https://news.ycombinator.com/item?id=44022136)

* [OSU's Open Source Lab Eyes Infrastructure Upgrades and Sustainability After Recent Funding Success](https://news.slashdot.org/story/25/05/18/044230/osus-open-source-lab-eyes-infrastructure-upgrades-and-sustainability-after-recent-funding-success?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Oregon State University's Open Source Lab embarks on transformative upgrades following substantial funding achievements. [Comments](https://news.slashdot.org/story/25/05/18/044230/osus-open-source-lab-eyes-infrastructure-upgrades-and-sustainability-after-recent-funding-success?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Security and Privacy Challenges

* [Postman is logging all your secrets and environment variables](https://anonymousdata.medium.com/postman-is-logging-all-your-secrets-and-environment-variables-9c316e92d424) - Developers discuss potential risks of using Postman as it logs sensitive data and environment variables insecurely. [Comments](https://lobste.rs/s/tudmqv/postman_is_logging_all_your_secrets)

* [9 Months Later, Microsoft Finally Fixes Linux Dual-Booting Bug](https://linux.slashdot.org/story/25/05/18/0452232/9-months-later-microsoft-finally-fixes-linux-dual-booting-bug?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft resolves a long-standing issue affecting Linux dual-boot systems, a relief for multi-OS users. [Comments](https://linux.slashdot.org/story/25/05/18/0452232/9-months-later-microsoft-finally-fixes-linux-dual-booting-bug?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Innovative Computing and Software

* [macOS VMs in a Docker Container](https://github.com/trycua/cua/tree/main/libs/lumier) - Explore the capabilities of running macOS virtual machines inside a Docker container for testing and development purposes. [Comments](https://lobste.rs/s/aluo6d/macos_vms_docker_container)

* [Mystical](https://suberic.net/~dmm/projects/mystical/README.html) - A unique programming approach seeking innovation in system design and usability for software developers. [Comments](https://lobste.rs/s/olwjn7/mystical)

## Cutting-edge Hardware and Market Dynamics

* [China's Hygon Details C86-5G: A 128-Core X86 CPU with Advanced Features and Four-Way SMT](https://soylentnews.org/article.pl?sid=25/05/16/1710236&from=rss) - New advancements in CPU technology from China set to challenge industry standards. [Comments](https://soylentnews.org/article.pl?sid=25/05/16/1710236&from=rss)

* [Intel Struggles To Reverse AMD's Share Gains In x86 CPU Market](https://hardware.slashdot.org/story/25/05/17/2032204/intel-struggles-to-reverse-amds-share-gains-in-x86-cpu-market?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Learn how Intel addresses market challenges as AMD gains traction in the competitive CPU arena. [Comments](https://hardware.slashdot.org/story/25/05/17/2032204/intel-struggles-to-reverse-amds-share-gains-in-x86-cpu-market?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Personal Projects and Tools

* [Building my childhood dream PC](https://fabiensanglard.net/2168/index.html) - A nostalgic recount of constructing a PC echoing childhood aspirations. [Comments](https://lobste.rs/s/qjo0bn/building_my_childhood_dream_pc)

* [Show HN: Hardtime.nvim – break bad habits and master Vim motions](https://github.com/m4xshen/hardtime.nvim) - A Vim plugin aiming to improve code-editing efficiency through smarter motion mastering. [Comments](https://news.ycombinator.com/item?id=44020734)

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

* [2025-05-18, 16:01:41](https://lobste.rs/s/aluo6d/macos_vms_docker_container) - [macOS VMs in a Docker Container](https://github.com/trycua/cua/tree/main/libs/lumier)
* [2025-05-18, 15:50:35](https://news.ycombinator.com/item?id=44022233) - [Pluto Flyover from New Horizons](https://apod.nasa.gov/apod/ap250518.html)
* [2025-05-18, 15:36:31](https://news.ycombinator.com/item?id=44022136) - [Solar grants held hostage in Pennsylvania legislature – as demand soars](https://capitalandmain.com/solar-grants-held-hostage-in-pennsylvania-legislature-as-demand-soars)
* [2025-05-18, 15:34:00](https://tech.slashdot.org/story/25/05/18/0558219/firefox-announces-same-day-update-after-two-minor-pwn2own-exploits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Announces Same-Day Update After Two Minor Pwn2Own Exploits](https://tech.slashdot.org/story/25/05/18/0558219/firefox-announces-same-day-update-after-two-minor-pwn2own-exploits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 15:14:00](https://lobste.rs/s/wg4dbj/my_changes_saving_konsole_tab_layouts) - [My changes to saving Konsole tab layouts](https://akselmo.dev/posts/konsole-layout-changes/)
* [2025-05-18, 15:00:12](https://lobste.rs/s/iqdvbi/survey_database_tls_libraries_2022) - [A Survey of Database TLS Libraries (2022)](https://transactional.blog/blog/2022-database-tls-survey)
* [2025-05-18, 14:50:40](https://lobste.rs/s/qjo0bn/building_my_childhood_dream_pc) - [Building my childhood dream PC](https://fabiensanglard.net/2168/index.html)
* [2025-05-18, 14:47:46](https://news.ycombinator.com/item?id=44021792) - [Apple Card Disabled My iCloud, App Store, and Apple ID Accounts](https://dcurt.is/apple-card-can-disable-your-icloud-account)
* [2025-05-18, 14:38:00](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss) - [NASA Keeps Ancient Voyager 1 Spacecraft Alive With Hail Mary Thruster Fix](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss)
* [2025-05-18, 14:34:00](https://news.slashdot.org/story/25/05/18/044230/osus-open-source-lab-eyes-infrastructure-upgrades-and-sustainability-after-recent-funding-success?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OSU&apos;s Open Source Lab Eyes Infrastructure Upgrades and Sustainability After Recent Funding Success](https://news.slashdot.org/story/25/05/18/044230/osus-open-source-lab-eyes-infrastructure-upgrades-and-sustainability-after-recent-funding-success?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 14:22:00](https://lobste.rs/s/gkqbr1/fixing_infamous_basilisk_ii_windows) - [Fixing the infamous Basilisk II Windows “Black Screen” bug](https://www.downtowndougbrown.com/2025/05/how-i-fixed-the-infamous-basilisk-ii-windows-black-screen-bug-in-2013/)
* [2025-05-18, 13:03:34](https://lobste.rs/s/65b89t/safe_yaml_monster) - [\&quot;Safe\&quot; YAML monster](https://gist.github.com/taramtrampam/fca4e599992909b48a3ba1ce69e215a2)
* [2025-05-18, 12:43:01](https://news.ycombinator.com/item?id=44020975) - [How the Sun Enterprise 10000 was born (2007)](https://www.filibeto.org/aduritz/truetrue/e10000/how-e10k-wasborn.html)
* [2025-05-18, 12:34:38](https://lobste.rs/s/8nv2u3/freebsd_on_laptop_2018) - [FreeBSD on a Laptop (2018)](https://www.c0ffee.net/blog/freebsd-on-a-laptop/)
* [2025-05-18, 12:33:43](https://news.ycombinator.com/item?id=44020914) - [Working with Git Patches in Apple Mail (2023)](https://btxx.org/posts/mail/)
* [2025-05-18, 12:30:43](https://lobste.rs/s/x657ku/working_with_git_patches_apple_mail_2023) - [Working with git Patches in Apple Mail (2023)](https://btxx.org/posts/mail/)
* [2025-05-18, 12:30:26](https://lobste.rs/s/f5uxc4/x220_thinkpad_is_best_laptop_world_2023) - [The X220 ThinkPad is the Best Laptop in the World (2023)](https://btxx.org/posts/x220/)
* [2025-05-18, 12:08:52](https://news.ycombinator.com/item?id=44020734) - [Show HN: Hardtime.nvim – break bad habits and master Vim motions](https://github.com/m4xshen/hardtime.nvim)
* [2025-05-18, 12:08:43](https://lobste.rs/s/her8rf/adding_mastodon_comments_your_blog) - [Adding Mastodon Comments to your Blog](https://beej.us/blog/data/mastodon-comments/)
* [2025-05-18, 12:05:31](https://lobste.rs/s/wwac0i/rust_turns_10_baby_steps) - [Rust turns 10: baby steps](https://smallcultfollowing.com/babysteps/blog/2025/05/15/10-years-of-rust/)
* [2025-05-18, 12:04:27](https://lobste.rs/s/p9lo9w/beginner_s_guide_sourcehut) - [A Beginner&apos;s Guide to SourceHut](https://btxx.org/posts/beginners-guide-sourcehut/)
* [2025-05-18, 11:48:42](https://news.ycombinator.com/item?id=44020626) - [Show HN: A web browser agent in your Chrome side panel](https://github.com/parsaghaffari/browserbee)
* [2025-05-18, 11:42:19](https://news.ycombinator.com/item?id=44020591) - [Spaced repetition systems have gotten way better](https://domenic.me/fsrs/)
* [2025-05-18, 11:39:07](https://news.ycombinator.com/item?id=44020574) - [The Conquest of Hell Gate [pdf]](https://www.nan.usace.army.mil/portals/37/docs/history/hellgate.pdf)
* [2025-05-18, 11:34:00](https://news.slashdot.org/story/25/05/17/1954232/youtube-announces-gemini-ai-feature-to-target-ads-when-viewers-are-most-engaged?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Announces Gemini AI Feature to Target Ads When Viewers are Most Engaged](https://news.slashdot.org/story/25/05/17/1954232/youtube-announces-gemini-ai-feature-to-target-ads-when-viewers-are-most-engaged?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 11:12:16](https://news.ycombinator.com/item?id=44020469) - [State of the Art PFAS [pdf]](https://iplo.nl/publish/pages/235260/state-of-the-art-pfas.pdf)
* [2025-05-18, 10:25:54](https://news.ycombinator.com/item?id=44020315) - [Paper Mechanisms](https://cutfoldtemplates.com)
* [2025-05-18, 09:53:00](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss) - [White House Scraps Plan to Block Data Brokers From Selling Americans’ Sensitive Data](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss)
* [2025-05-18, 09:08:11](https://news.ycombinator.com/item?id=44020019) - [Craft Basic (Windows 95 and up)](https://www.lucidapogee.com/?page=craftbasic)
* [2025-05-18, 07:34:00](https://linux.slashdot.org/story/25/05/18/0452232/9-months-later-microsoft-finally-fixes-linux-dual-booting-bug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [9 Months Later, Microsoft Finally Fixes Linux Dual-Booting Bug](https://linux.slashdot.org/story/25/05/18/0452232/9-months-later-microsoft-finally-fixes-linux-dual-booting-bug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 05:32:50](https://lobste.rs/s/olwjn7/mystical) - [Mystical](https://suberic.net/~dmm/projects/mystical/README.html)
* [2025-05-18, 05:12:00](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss) - [China&apos;s Hygon Details C86-5G: A 128-Core X86 CPU with Advanced Features and Four-Way SMT](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss)
* [2025-05-18, 04:55:55](https://lobste.rs/s/mrqshv/ending_tls_client_authentication) - [Ending TLS Client Authentication Certificate Support in 2026](https://letsencrypt.org/2025/05/14/ending-tls-client-authentication/)
* [2025-05-18, 03:52:15](https://news.ycombinator.com/item?id=44018886) - [Show HN: Chat with 19 years of HN](https://app.camelai.com/log-in?next=/hn/)
* [2025-05-18, 03:34:00](https://developers.slashdot.org/story/25/05/18/019247/ask-slashdot-would-you-consider-a-low-latency-javascript-runtime-for-your-workflow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot: Would You Consider a Low-Latency JavaScript Runtime For Your Workflow?](https://developers.slashdot.org/story/25/05/18/019247/ask-slashdot-would-you-consider-a-low-latency-javascript-runtime-for-your-workflow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 01:34:00](https://tech.slashdot.org/story/25/05/17/2312252/google-restores-nextcloud-users-file-access-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Restores Nextcloud Users&apos; File Access on Android](https://tech.slashdot.org/story/25/05/17/2312252/google-restores-nextcloud-users-file-access-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 01:31:24](https://news.ycombinator.com/item?id=44018301) - [Experts have it easy (2024)](https://boydkane.com/essays/experts)
* [2025-05-18, 00:48:36](https://lobste.rs/s/ezvcin/javascript_s_new_superpower_explicit) - [JavaScript&apos;s New Superpower: Explicit Resource Management](https://v8.dev/features/explicit-resource-management)
* [2025-05-18, 00:24:00](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss) - [Oniux by Tor: Isolating Linux Applications at the Kernel Level for Secure Connections](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss)
* [2025-05-17, 23:59:03](https://news.ycombinator.com/item?id=44017913) - [AniSora: Open-source anime video generation model](https://komiko.app/video/AniSora)
* [2025-05-17, 22:36:32](https://lobste.rs/s/tudmqv/postman_is_logging_all_your_secrets) - [Postman is logging all your secrets and environment variables](https://anonymousdata.medium.com/postman-is-logging-all-your-secrets-and-environment-variables-9c316e92d424)
* [2025-05-17, 22:34:00](https://developers.slashdot.org/story/25/05/16/2227231/stack-overflow-seeks-realignment-to-support-the-builders-of-the-future-in-an-ai-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stack Overflow Seeks Realignment &apos;To Support the Builders of the Future in an AI World&apos;](https://developers.slashdot.org/story/25/05/16/2227231/stack-overflow-seeks-realignment-to-support-the-builders-of-the-future-in-an-ai-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 21:51:33](https://lobste.rs/s/evvi8x/firefox_security_response_pwn2own_2025) - [Firefox Security Response to pwn2own 2025](https://blog.mozilla.org/security/2025/05/17/firefox-security-response-to-pwn2own-2025/)
* [2025-05-17, 21:34:00](https://hardware.slashdot.org/story/25/05/17/2032204/intel-struggles-to-reverse-amds-share-gains-in-x86-cpu-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Struggles To Reverse AMD&apos;s Share Gains In x86 CPU Market](https://hardware.slashdot.org/story/25/05/17/2032204/intel-struggles-to-reverse-amds-share-gains-in-x86-cpu-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 20:34:00](https://slashdot.org/story/25/05/17/1925212/is-the-altruistic-openai-gone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the Altruistic OpenAI Gone?](https://slashdot.org/story/25/05/17/1925212/is-the-altruistic-openai-gone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 20:08:29](https://lobste.rs/s/goqzff/push_ifs_up_fors_down_2023) - [Push Ifs Up And Fors Down (2023)](https://matklad.github.io/2023/11/15/push-ifs-up-and-fors-down.html)
* [2025-05-17, 19:56:00](https://news.ycombinator.com/item?id=44016564) - [Understanding Transformers via N-gram Statistics](https://arxiv.org/abs/2407.12034)
* [2025-05-17, 19:39:00](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss) - [NCSC and Industry at Odds Over How to Tackle Shoddy Software](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss)
* [2025-05-17, 19:34:00](https://science.slashdot.org/story/25/05/17/1657219/researchers-finally-link-long-covid-brain-fog-to-inflammation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Finally Link Long Covid &apos;Brain Fog&apos; to Inflammation](https://science.slashdot.org/story/25/05/17/1657219/researchers-finally-link-long-covid-brain-fog-to-inflammation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 18:34:00](https://news.slashdot.org/story/25/05/17/0645218/the-most-promising-ways-to-destroy-forever-chemicals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Most Promising Ways to Destroy &apos;Forever Chemicals&apos;](https://news.slashdot.org/story/25/05/17/0645218/the-most-promising-ways-to-destroy-forever-chemicals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 18:21:18](https://news.ycombinator.com/item?id=44016037) - [Mystical](https://suberic.net/~dmm/projects/mystical/README.html)
* [2025-05-17, 17:54:20](https://news.ycombinator.com/item?id=44015872) - [Dead Stars Don’t Radiate](https://johncarlosbaez.wordpress.com/2025/05/17/dead-stars-dont-radiate-and-shrink/)
* [2025-05-17, 17:34:00](https://developers.slashdot.org/story/25/05/17/0420236/curl-warns-github-about-malicious-unicode-security-issue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Curl Warns GitHub About &apos;Malicious Unicode&apos; Security Issue](https://developers.slashdot.org/story/25/05/17/0420236/curl-warns-github-about-malicious-unicode-security-issue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 17:27:29](https://lobste.rs/s/phkxqf/japan_s_ic_cards_are_weird_wonderful) - [Japan&apos;s IC cards are weird and wonderful](https://aruarian.dance/blog/japan-ic-cards/)
* [2025-05-17, 16:34:00](https://games.slashdot.org/story/25/05/17/0741237/despite-success-of-new-assassins-creed-game-ubisoft-stock-tumbles-18?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Despite Success of New &apos;Assassin&apos;s Creed&apos; Game, Ubisoft Stock Tumbles 18%](https://games.slashdot.org/story/25/05/17/0741237/despite-success-of-new-assassins-creed-game-ubisoft-stock-tumbles-18?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 16:31:32](https://lobste.rs/s/xmhoq2/o2_volte_locating_any_customer_with_phone) - [O2 VoLTE: locating any customer with a phone call](https://mastdatabase.co.uk/blog/2025/05/o2-expose-customer-location-call-4g/)
* [2025-05-17, 16:26:44](https://news.ycombinator.com/item?id=44015367) - [How to have the browser pick a contrasting color in CSS](https://webkit.org/blog/16929/contrast-color/)
* [2025-05-17, 15:51:05](https://news.ycombinator.com/item?id=44015144) - [If nothing is curated, how do we find things](https://tadaima.bearblog.dev/if-nothing-is-curated-how-do-we-find-things/)
* [2025-05-17, 15:34:00](https://science.slashdot.org/story/25/05/17/0520213/paleontologists-identify-tiny-three-eyed-sea-moth-predator-in-fossils?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Paleontologists Identify Tiny Three-Eyed &apos;Sea Moth&apos; Predator in Fossils](https://science.slashdot.org/story/25/05/17/0520213/paleontologists-identify-tiny-three-eyed-sea-moth-predator-in-fossils?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 15:13:45](https://lobste.rs/s/dlavki/easily_using_ssh_with_fido2_u2f_hardware) - [Easily Using SSH with FIDO2/U2F Hardware Security Keys](https://www.complete.org/easily-using-ssh-with-fido2-u2f-hardware-security-keys/)
* [2025-05-17, 14:50:00](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss) - [EU Bug Database Fully Operational as US Slashes Infosec](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss)
* [2025-05-17, 14:34:00](https://developers.slashdot.org/story/25/05/16/2119222/rust-creator-graydon-hoare-thanks-its-many-stakeholders---and-mozilla---on-rusts-10th-anniversary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rust Creator Graydon Hoare Thanks Its Many Stakeholders - and Mozilla - on Rust&apos;s 10th Anniversary](https://developers.slashdot.org/story/25/05/16/2119222/rust-creator-graydon-hoare-thanks-its-many-stakeholders---and-mozilla---on-rusts-10th-anniversary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 14:28:59](https://news.ycombinator.com/item?id=44014587) - [Palette lighting tricks on the Nintendo 64](https://30fps.net/pages/palette-lighting-tricks-n64/)
* [2025-05-17, 13:02:12](https://lobste.rs/s/uwy1kb/cheriot_last_ten_years) - [CHERIoT: The last ten years](https://cheriot.org/cheri/history/2025/05/16/last-ten-years.html)
* [2025-05-17, 11:54:47](https://lobste.rs/s/xv7mks/gnu_taler_v1_0_released) - [GNU Taler v1.0 released](https://www.taler.net/en/news/2025-01.html)
* [2025-05-17, 11:40:00](https://lobste.rs/s/8iz3sl/language_never_was) - [The Language That Never Was](https://blog.celes42.com/the_language_that_never_was.html)
* [2025-05-17, 10:05:00](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss) - [A US Court Just Put Ownership of CRISPR Back in Play](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss)
* [2025-05-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss) - [Bluetooth 6.1 Enhances Privacy With Randomized RPA Timing](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss)
* [2025-05-17, 00:31:00](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss) - [Nvidia Reportedly Raises GPU Prices by 10-15% as Tariffs and TSMC Price Hikes Filter Down](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss)
* [2025-05-16, 20:30:28](https://lobste.rs/s/qwmcoa/senior_devs_aren_t_just_faster_they_can) - [Senior devs aren&apos;t just faster, they can dodge problems juniors are forced to solve](https://boydkane.com/essays/experts)
* [2025-05-16, 19:45:00](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss) - [Scientists Find Lead Really Can Be Turned Into Gold (With Help From The LHC)](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss)
* [2025-05-16, 15:01:00](https://soylentnews.org/article.pl?sid=25/05/14/2259213&amp;from=rss) - [Why Bell Labs Worked](https://soylentnews.org/article.pl?sid=25/05/14/2259213&amp;from=rss)
* [2025-05-16, 10:20:00](https://soylentnews.org/article.pl?sid=25/05/15/0224241&amp;from=rss) - [A Chemical in Plastics is Tied to Heart Disease Deaths](https://soylentnews.org/article.pl?sid=25/05/15/0224241&amp;from=rss)
* [2025-05-16, 05:32:00](https://soylentnews.org/article.pl?sid=25/05/15/0157228&amp;from=rss) - [FTC Pushes The Enforcement Of Its &apos;Click-To-Cancel&apos; Rule Back To July](https://soylentnews.org/article.pl?sid=25/05/15/0157228&amp;from=rss)
* [2025-05-16, 00:45:00](https://soylentnews.org/article.pl?sid=25/05/15/0147219&amp;from=rss) - [When Your Favorite Song Plays, Your Brain ‘Physically Embodies’ Music](https://soylentnews.org/article.pl?sid=25/05/15/0147219&amp;from=rss)
* [2025-05-15, 22:16:26](https://news.ycombinator.com/item?id=43999897) - [In Memoriam: John L. Young, Cryptome Co-Founder](https://www.eff.org/deeplinks/2025/05/memoriam-john-l-young-cryptome-co-founder)
* [2025-05-15, 20:00:00](https://soylentnews.org/article.pl?sid=25/05/14/0440229&amp;from=rss) - [\&quot;Prompt Engineering\&quot; Is No Longer A Job, But A Skill](https://soylentnews.org/article.pl?sid=25/05/14/0440229&amp;from=rss)
* [2025-05-15, 15:16:00](https://soylentnews.org/article.pl?sid=25/05/14/1148216&amp;from=rss) - [&apos;World&apos;s First&apos; AMD GPU Driven Via USB3 - Tiny Corp Tests EGPUs on Apple Silicon, Linux and Windows](https://soylentnews.org/article.pl?sid=25/05/14/1148216&amp;from=rss)
* [2025-05-15, 12:51:11](https://news.ycombinator.com/item?id=43994490) - [Measure EEG with Arduino](https://www.instructables.com/Measure-EEG-With-ARduino/)
* [2025-05-15, 12:10:30](https://news.ycombinator.com/item?id=43994190) - [What Every Programmer Should Know About Enumerative Combinatorics](https://leetarxiv.substack.com/p/counting-integer-compositions)
* [2025-05-15, 10:58:09](https://news.ycombinator.com/item?id=43993707) - [Project Verona: Fearless Concurrency for Python](https://microsoft.github.io/verona/pyrona.html)
* [2025-05-15, 10:30:00](https://soylentnews.org/article.pl?sid=25/05/14/1143244&amp;from=rss) - [A New Lazarus Arises – for the Fourth Time – for Pascal Fans](https://soylentnews.org/article.pl?sid=25/05/14/1143244&amp;from=rss)
* [2025-05-15, 05:47:00](https://soylentnews.org/politics/article.pl?sid=25/05/14/1136218&amp;from=rss) - [Copyright Office Thinks AI Companies Sometimes Stole Content](https://soylentnews.org/politics/article.pl?sid=25/05/14/1136218&amp;from=rss)
* [2025-05-15, 02:18:34](https://news.ycombinator.com/item?id=43991221) - [Lessons from Mixing Rust and Java: Fast, Safe, and Practical](https://medium.com/@greptime/how-to-supercharge-your-java-project-with-rust-a-practical-guide-to-jni-integration-with-a-86f60e9708b8)
* [2025-05-15, 02:09:24](https://news.ycombinator.com/item?id=43991185) - [Magic Leap One Bootloader Exploit](https://github.com/EliseZeroTwo/ml1hax)
* [2025-05-15, 01:01:00](https://soylentnews.org/article.pl?sid=25/05/14/0413235&amp;from=rss) - [New Way To Pull Uranium From Water Can Help China&apos;s Nuclear Power Push](https://soylentnews.org/article.pl?sid=25/05/14/0413235&amp;from=rss)
* [2025-05-14, 20:42:36](https://news.ycombinator.com/item?id=43988975) - [High Available Mosquitto MQTT on Kubernetes](https://raymii.org/s/tutorials/High_Available_Mosquitto_MQTT_Broker_on_Kubernetes.html)
* [2025-05-14, 20:13:00](https://soylentnews.org/article.pl?sid=25/05/14/0020240&amp;from=rss) - [Ask Soylent: Insert Code Here](https://soylentnews.org/article.pl?sid=25/05/14/0020240&amp;from=rss)
* [2025-05-14, 17:52:10](https://news.ycombinator.com/item?id=43987367) - [Show HN: Turn any workflow diagram into compilable, running and stateful code](https://workflows.diagrid.io/)
* [2025-05-14, 15:30:00](https://soylentnews.org/article.pl?sid=25/05/13/1445228&amp;from=rss) - [Google Pays $1.375 Billion to Texas Over Unauthorized Tracking and Biometric Data Collection](https://soylentnews.org/article.pl?sid=25/05/13/1445228&amp;from=rss)
* [2025-05-14, 15:11:57](https://news.ycombinator.com/item?id=43985513) - [Coding without a laptop: Two weeks with AR glasses and Linux on Android](https://holdtherobot.com/blog/2025/05/11/linux-on-android-with-ar-glasses/)
* [2025-05-14, 10:37:00](https://soylentnews.org/article.pl?sid=25/05/13/0245205&amp;from=rss) - [You Think Ransomware is Bad Now? Wait Until It Infects CPUs](https://soylentnews.org/article.pl?sid=25/05/13/0245205&amp;from=rss)
* [2025-05-14, 05:51:00](https://soylentnews.org/article.pl?sid=25/05/13/0234223&amp;from=rss) - [The Viking Age is Undergoing a Revisionist Transformation](https://soylentnews.org/article.pl?sid=25/05/13/0234223&amp;from=rss)
* [2025-05-14, 01:04:00](https://soylentnews.org/article.pl?sid=25/05/13/020213&amp;from=rss) - [Nvidia NeMo Microservices to Embed AI Agents in Workflows](https://soylentnews.org/article.pl?sid=25/05/13/020213&amp;from=rss)
