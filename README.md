# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Technology Advances

* [China's Hygon Details C86-5G: A 128-Core X86 CPU with Advanced Features and Four-Way SMT](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss) - [Comments](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss)

* [Researchers Finally Link Long Covid 'Brain Fog' to Inflammation](https://science.slashdot.org/story/25/05/17/1657219/researchers-finally-link-long-covid-brain-fog-to-inflammation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://science.slashdot.org/story/25/05/17/1657219/researchers-finally-link-long-covid-brain-fog-to-inflammation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [NASA Resurrects Voyager 1 Interstellar Spacecraft's Thrusters After 20 Years](https://science.slashdot.org/story/25/05/17/0111201/nasa-resurrects-voyager-1-interstellar-spacecrafts-thrusters-after-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://science.slashdot.org/story/25/05/17/0111201/nasa-resurrects-voyager-1-interstellar-spacecrafts-thrusters-after-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cybersecurity Updates

* [Firefox Security Response to pwn2own 2025](https://blog.mozilla.org/security/2025/05/17/firefox-security-response-to-pwn2own-2025/) - [Comments](https://lobste.rs/s/evvi8x/firefox_security_response_pwn2own_2025)

* [Curl Warns GitHub About 'Malicious Unicode' Security Issue](https://developers.slashdot.org/story/25/05/17/0420236/curl-warns-github-about-malicious-unicode-security-issue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://developers.slashdot.org/story/25/05/17/0420236/curl-warns-github-about-malicious-unicode-security-issue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [O2 VoLTE: locating any customer with a phone call](https://mastdatabase.co.uk/blog/2025/05/o2-expose-customer-location-call-4g/) - [Comments 1](https://lobste.rs/s/xmhoq2/o2_volte_locating_any_customer_with_phone) [Comments 2](https://news.ycombinator.com/item?id=44013913)

## Programming and Software

* [Google Restores Nextcloud Users' File Access on Android](https://tech.slashdot.org/story/25/05/17/2312252/google-restores-nextcloud-users-file-access-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://tech.slashdot.org/story/25/05/17/2312252/google-restores-nextcloud-users-file-access-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [JavaScript's New Superpower: Explicit Resource Management](https://v8.dev/features/explicit-resource-management) - [Comments](https://lobste.rs/s/ezvcin/javascript_s_new_superpower_explicit)

* [Postman is logging all your secrets and environment variables](https://anonymousdata.medium.com/postman-is-logging-all-your-secrets-and-environment-variables-9c316e92d424) - [Comments](https://lobste.rs/s/tudmqv/postman_is_logging_all_your_secrets)

## AI and Machine Learning

* [AniSora: Open-source anime video generation model](https://komiko.app/video/AniSora) - [Comments](https://news.ycombinator.com/item?id=44017913)

* [Understanding Transformers via N-gram Statistics](https://arxiv.org/abs/2407.12034) - [Comments](https://news.ycombinator.com/item?id=44016564)

* [Stack Overflow Seeks Realignment 'To Support the Builders of the Future in an AI World'](https://developers.slashdot.org/story/25/05/16/2227231/stack-overflow-seeks-realignment-to-support-the-builders-of-the-future-in-an-ai-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://developers.slashdot.org/story/25/05/16/2227231/stack-overflow-seeks-realignment-to-support-the-builders-of-the-future-in-an-ai-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cultural and Historical Discoveries

* [The Lost Japanese ROM of the Macintosh Plus](https://www.journaldulapin.com/2025/05/17/the-lost-japanese-rom-of-the-macintosh-plus-which-isnt-lost-anymore/) - [Comments](https://news.ycombinator.com/item?id=44017692)

* [Paleontologists Identify Tiny Three-Eyed 'Sea Moth' Predator in Fossils](https://science.slashdot.org/story/25/05/17/0520213/paleontologists-identify-tiny-three-eyed-sea-moth-predator-in-fossils?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://science.slashdot.org/story/25/05/17/0520213/paleontologists-identify-tiny-three-eyed-sea-moth-predator-in-fossils?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The Viking Age is Undergoing a Revisionist Transformation](https://soylentnews.org/article.pl?sid=25/05/13/0234223&amp;from=rss) - [Comments](https://soylentnews.org/article.pl?sid=25/05/13/0234223&amp;from=rss)

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

* [2025-05-18, 06:23:59](https://news.ycombinator.com/item?id=44019386) - [Mexican Navy ship crashes into Brooklyn Bridge leaving two people dead](https://www.theguardian.com/us-news/2025/may/18/mexican-navy-ship-hits-brooklyn-bridge-during-promotional-tour)
* [2025-05-18, 05:32:50](https://lobste.rs/s/olwjn7/mystical) - [Mystical](https://suberic.net/~dmm/projects/mystical/README.html)
* [2025-05-18, 05:12:00](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss) - [China&apos;s Hygon Details C86-5G: A 128-Core X86 CPU with Advanced Features and Four-Way SMT](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss)
* [2025-05-18, 03:34:00](https://developers.slashdot.org/story/25/05/18/019247/ask-slashdot-would-you-consider-a-low-latency-javascript-runtime-for-your-workflow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot: Would You Consider a Low-Latency JavaScript Runtime For Your Workflow?](https://developers.slashdot.org/story/25/05/18/019247/ask-slashdot-would-you-consider-a-low-latency-javascript-runtime-for-your-workflow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 02:56:39](https://news.ycombinator.com/item?id=44018662) - [Climbing trees 1: what are decision trees?](https://mathpn.com/posts/climbing-trees-1/)
* [2025-05-18, 02:15:50](https://lobste.rs/s/6kovtw/every_programming_language_has_its) - [Every programming language has its &apos;killer&apos; domain](https://huijzer.xyz/posts/67)
* [2025-05-18, 01:57:39](https://news.ycombinator.com/item?id=44018386) - [Confessions about my smart home](https://frenck.dev/confessions-about-my-smart-home/)
* [2025-05-18, 01:34:00](https://tech.slashdot.org/story/25/05/17/2312252/google-restores-nextcloud-users-file-access-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Restores Nextcloud Users&apos; File Access on Android](https://tech.slashdot.org/story/25/05/17/2312252/google-restores-nextcloud-users-file-access-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 01:31:24](https://news.ycombinator.com/item?id=44018301) - [Experts have it easy (2024)](https://boydkane.com/essays/experts)
* [2025-05-18, 01:26:08](https://news.ycombinator.com/item?id=44018283) - [Memetics – A Growth Industry in US Military Operations (2006) [pdf]](https://apps.dtic.mil/sti/pdfs/ADA507172.pdf)
* [2025-05-18, 00:48:36](https://lobste.rs/s/ezvcin/javascript_s_new_superpower_explicit) - [JavaScript&apos;s New Superpower: Explicit Resource Management](https://v8.dev/features/explicit-resource-management)
* [2025-05-18, 00:45:44](https://lobste.rs/s/jbvlhu/quic_restarts_slow_problems_udpgrm) - [QUIC restarts, slow problems: udpgrm to the rescue](https://blog.cloudflare.com/quic-restarts-slow-problems-udpgrm-to-the-rescue/)
* [2025-05-18, 00:24:00](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss) - [Oniux by Tor: Isolating Linux Applications at the Kernel Level for Secure Connections](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss)
* [2025-05-18, 00:19:27](https://lobste.rs/s/gqmiln/javascript_library_for_building_parsers) - [A JavaScript library for building parsers, interpreters, compilers, and more](https://ohmjs.org/)
* [2025-05-17, 23:59:03](https://news.ycombinator.com/item?id=44017913) - [AniSora: Open-source anime video generation model](https://komiko.app/video/AniSora)
* [2025-05-17, 23:55:41](https://lobste.rs/s/rjmywz/passwords_are_okay_impulsive_internet) - [Passwords are okay, impulsive Internet isn&apos;t](https://www.dedoimedo.com/life/passwords-passkeys.html)
* [2025-05-17, 23:39:35](https://lobste.rs/s/8duxms/fortran_for_c_programmers) - [Fortran For C Programmers](https://flang.llvm.org/docs/FortranForCProgrammers.html)
* [2025-05-17, 23:12:15](https://news.ycombinator.com/item?id=44017692) - [The Lost Japanese ROM of the Macintosh Plus](https://www.journaldulapin.com/2025/05/17/the-lost-japanese-rom-of-the-macintosh-plus-which-isnt-lost-anymore/)
* [2025-05-17, 22:47:55](https://news.ycombinator.com/item?id=44017592) - [FreeBASIC is a free/open source BASIC compiler for Windows DOS and Linux](https://freebasic.net/)
* [2025-05-17, 22:36:32](https://lobste.rs/s/tudmqv/postman_is_logging_all_your_secrets) - [Postman is logging all your secrets and environment variables](https://anonymousdata.medium.com/postman-is-logging-all-your-secrets-and-environment-variables-9c316e92d424)
* [2025-05-17, 22:34:00](https://developers.slashdot.org/story/25/05/16/2227231/stack-overflow-seeks-realignment-to-support-the-builders-of-the-future-in-an-ai-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stack Overflow Seeks Realignment &apos;To Support the Builders of the Future in an AI World&apos;](https://developers.slashdot.org/story/25/05/16/2227231/stack-overflow-seeks-realignment-to-support-the-builders-of-the-future-in-an-ai-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 21:51:33](https://lobste.rs/s/evvi8x/firefox_security_response_pwn2own_2025) - [Firefox Security Response to pwn2own 2025](https://blog.mozilla.org/security/2025/05/17/firefox-security-response-to-pwn2own-2025/)
* [2025-05-17, 21:34:00](https://hardware.slashdot.org/story/25/05/17/2032204/intel-struggles-to-reverse-amds-share-gains-in-x86-cpu-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Struggles To Reverse AMD&apos;s Share Gains In x86 CPU Market](https://hardware.slashdot.org/story/25/05/17/2032204/intel-struggles-to-reverse-amds-share-gains-in-x86-cpu-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 20:34:00](https://slashdot.org/story/25/05/17/1925212/is-the-altruistic-openai-gone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the Altruistic OpenAI Gone?](https://slashdot.org/story/25/05/17/1925212/is-the-altruistic-openai-gone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 20:08:29](https://lobste.rs/s/goqzff/push_ifs_up_fors_down_2023) - [Push Ifs Up And Fors Down (2023)](https://matklad.github.io/2023/11/15/push-ifs-up-and-fors-down.html)
* [2025-05-17, 19:56:00](https://news.ycombinator.com/item?id=44016564) - [Understanding Transformers via N-gram Statistics](https://arxiv.org/abs/2407.12034)
* [2025-05-17, 19:39:00](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss) - [NCSC and Industry at Odds Over How to Tackle Shoddy Software](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss)
* [2025-05-17, 19:34:00](https://science.slashdot.org/story/25/05/17/1657219/researchers-finally-link-long-covid-brain-fog-to-inflammation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Finally Link Long Covid &apos;Brain Fog&apos; to Inflammation](https://science.slashdot.org/story/25/05/17/1657219/researchers-finally-link-long-covid-brain-fog-to-inflammation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 19:14:56](https://news.ycombinator.com/item?id=44016336) - [Directory of MCP Servers](https://github.com/chatmcp/mcpso)
* [2025-05-17, 18:34:00](https://news.slashdot.org/story/25/05/17/0645218/the-most-promising-ways-to-destroy-forever-chemicals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Most Promising Ways to Destroy &apos;Forever Chemicals&apos;](https://news.slashdot.org/story/25/05/17/0645218/the-most-promising-ways-to-destroy-forever-chemicals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 18:21:18](https://news.ycombinator.com/item?id=44016037) - [Mystical](https://suberic.net/~dmm/projects/mystical/README.html)
* [2025-05-17, 18:00:31](https://lobste.rs/s/oc6ktn/xata_postgres_with_data_branching_pii) - [Xata: Postgres with data branching and PII anonymization](https://xata.io/blog/xata-postgres-with-data-branching-and-pii-anonymization)
* [2025-05-17, 17:54:20](https://news.ycombinator.com/item?id=44015872) - [Dead Stars Don’t Radiate](https://johncarlosbaez.wordpress.com/2025/05/17/dead-stars-dont-radiate-and-shrink/)
* [2025-05-17, 17:34:00](https://developers.slashdot.org/story/25/05/17/0420236/curl-warns-github-about-malicious-unicode-security-issue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Curl Warns GitHub About &apos;Malicious Unicode&apos; Security Issue](https://developers.slashdot.org/story/25/05/17/0420236/curl-warns-github-about-malicious-unicode-security-issue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 17:27:29](https://lobste.rs/s/phkxqf/japan_s_ic_cards_are_weird_wonderful) - [Japan&apos;s IC cards are weird and wonderful](https://aruarian.dance/blog/japan-ic-cards/)
* [2025-05-17, 16:52:44](https://lobste.rs/s/7pvhav/remarks_on_ai_from_nz) - [Remarks on AI from NZ](https://nealstephenson.substack.com/p/remarks-on-ai-from-nz)
* [2025-05-17, 16:34:00](https://games.slashdot.org/story/25/05/17/0741237/despite-success-of-new-assassins-creed-game-ubisoft-stock-tumbles-18?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Despite Success of New &apos;Assassin&apos;s Creed&apos; Game, Ubisoft Stock Tumbles 18%](https://games.slashdot.org/story/25/05/17/0741237/despite-success-of-new-assassins-creed-game-ubisoft-stock-tumbles-18?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 16:31:32](https://lobste.rs/s/xmhoq2/o2_volte_locating_any_customer_with_phone) - [O2 VoLTE: locating any customer with a phone call](https://mastdatabase.co.uk/blog/2025/05/o2-expose-customer-location-call-4g/)
* [2025-05-17, 16:26:44](https://news.ycombinator.com/item?id=44015367) - [How to have the browser pick a contrasting color in CSS](https://webkit.org/blog/16929/contrast-color/)
* [2025-05-17, 15:51:05](https://news.ycombinator.com/item?id=44015144) - [If nothing is curated, how do we find things](https://tadaima.bearblog.dev/if-nothing-is-curated-how-do-we-find-things/)
* [2025-05-17, 15:34:00](https://science.slashdot.org/story/25/05/17/0520213/paleontologists-identify-tiny-three-eyed-sea-moth-predator-in-fossils?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Paleontologists Identify Tiny Three-Eyed &apos;Sea Moth&apos; Predator in Fossils](https://science.slashdot.org/story/25/05/17/0520213/paleontologists-identify-tiny-three-eyed-sea-moth-predator-in-fossils?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 15:13:45](https://lobste.rs/s/dlavki/easily_using_ssh_with_fido2_u2f_hardware) - [Easily Using SSH with FIDO2/U2F Hardware Security Keys](https://www.complete.org/easily-using-ssh-with-fido2-u2f-hardware-security-keys/)
* [2025-05-17, 14:59:10](https://news.ycombinator.com/item?id=44014808) - [Proton threatens to quit Switzerland over new surveillance law](https://www.techradar.com/vpn/vpn-privacy-security/we-would-be-less-confidential-than-google-proton-threatens-to-quit-switzerland-over-new-surveillance-law)
* [2025-05-17, 14:50:00](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss) - [EU Bug Database Fully Operational as US Slashes Infosec](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss)
* [2025-05-17, 14:34:00](https://developers.slashdot.org/story/25/05/16/2119222/rust-creator-graydon-hoare-thanks-its-many-stakeholders---and-mozilla---on-rusts-10th-anniversary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rust Creator Graydon Hoare Thanks Its Many Stakeholders - and Mozilla - on Rust&apos;s 10th Anniversary](https://developers.slashdot.org/story/25/05/16/2119222/rust-creator-graydon-hoare-thanks-its-many-stakeholders---and-mozilla---on-rusts-10th-anniversary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 14:28:59](https://news.ycombinator.com/item?id=44014587) - [Palette lighting tricks on the Nintendo 64](https://30fps.net/pages/palette-lighting-tricks-n64/)
* [2025-05-17, 13:08:29](https://news.ycombinator.com/item?id=44014046) - [O2 VoLTE: locating any customer with a phone call](https://mastdatabase.co.uk/blog/2025/05/o2-expose-customer-location-call-4g/)
* [2025-05-17, 13:02:12](https://lobste.rs/s/uwy1kb/cheriot_last_ten_years) - [CHERIoT: The last ten years](https://cheriot.org/cheri/history/2025/05/16/last-ten-years.html)
* [2025-05-17, 12:47:40](https://news.ycombinator.com/item?id=44013913) - [Pyrefly: A new type checker and IDE experience for Python](https://engineering.fb.com/2025/05/15/developer-tools/introducing-pyrefly-a-new-type-checker-and-ide-experience-for-python/)
* [2025-05-17, 11:54:47](https://lobste.rs/s/xv7mks/gnu_taler_v1_0_released) - [GNU Taler v1.0 released](https://www.taler.net/en/news/2025-01.html)
* [2025-05-17, 11:40:00](https://lobste.rs/s/8iz3sl/language_never_was) - [The Language That Never Was](https://blog.celes42.com/the_language_that_never_was.html)
* [2025-05-17, 11:39:35](https://lobste.rs/s/qzbwqv/implementing_risc_v_hypervisor) - [Implementing a RISC-V hypervisor](https://seiya.me/blog/riscv-hypervisor)
* [2025-05-17, 10:05:00](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss) - [A US Court Just Put Ownership of CRISPR Back in Play](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss)
* [2025-05-17, 10:00:00](https://science.slashdot.org/story/25/05/17/0114259/the-top-fell-off-australias-first-orbital-class-rocket-delaying-its-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Top Fell Off Australia&apos;s First Orbital-Class Rocket, Delaying Its Launch](https://science.slashdot.org/story/25/05/17/0114259/the-top-fell-off-australias-first-orbital-class-rocket-delaying-its-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 09:31:55](https://news.ycombinator.com/item?id=44013157) - [Push Ifs Up and Fors Down](https://matklad.github.io/2023/11/15/push-ifs-up-and-fors-down.html)
* [2025-05-17, 07:00:00](https://science.slashdot.org/story/25/05/17/0111201/nasa-resurrects-voyager-1-interstellar-spacecrafts-thrusters-after-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Resurrects Voyager 1 Interstellar Spacecraft&apos;s Thrusters After 20 Years](https://science.slashdot.org/story/25/05/17/0111201/nasa-resurrects-voyager-1-interstellar-spacecrafts-thrusters-after-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss) - [Bluetooth 6.1 Enhances Privacy With Randomized RPA Timing](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss)
* [2025-05-17, 03:30:00](https://science.slashdot.org/story/25/05/16/2143244/fda-clears-first-blood-test-to-help-diagnose-alzheimers-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FDA Clears First Blood Test To Help Diagnose Alzheimer&apos;s Disease](https://science.slashdot.org/story/25/05/16/2143244/fda-clears-first-blood-test-to-help-diagnose-alzheimers-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 02:39:12](https://lobste.rs/s/sw48u6/my_favourite_fonts_use_with_latex_2022) - [My favourite fonts to use with LaTeX (2022)](https://www.lfe.pt/latex/fonts/typography/2022/11/21/latex-fonts-part1.html)
* [2025-05-17, 02:37:06](https://lobste.rs/s/z8jvte/static_types_are_for_perfectionists) - [Static types are for perfectionists](https://mmapped.blog/posts/38-static-types-perfectionism)
* [2025-05-17, 02:16:53](https://lobste.rs/s/dyw9in/using_unwrap_rust_is_okay_2022) - [Using unwrap() in Rust is Okay (2022)](https://burntsushi.net/unwrap/)
* [2025-05-17, 01:35:00](https://it.slashdot.org/story/25/05/17/0135210/microsofts-command-palette-is-a-powerful-launcher-for-apps-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Command Palette is a Powerful Launcher For Apps, Search](https://it.slashdot.org/story/25/05/17/0135210/microsofts-command-palette-is-a-powerful-launcher-for-apps-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 00:31:00](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss) - [Nvidia Reportedly Raises GPU Prices by 10-15% as Tariffs and TSMC Price Hikes Filter Down](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss)
* [2025-05-16, 21:05:10](https://lobste.rs/s/glcdny/ledger_postgresql_is_fast) - [A Ledger In PostgreSQL Is Fast](https://www.pgrs.net/2025/05/16/pgledger-in-postgresql-is-fast/)
* [2025-05-16, 20:30:28](https://lobste.rs/s/qwmcoa/senior_devs_aren_t_just_faster_they_can) - [Senior devs aren&apos;t just faster, they can dodge problems juniors are forced to solve](https://boydkane.com/essays/experts)
* [2025-05-16, 19:45:00](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss) - [Scientists Find Lead Really Can Be Turned Into Gold (With Help From The LHC)](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss)
* [2025-05-16, 18:42:26](https://lobste.rs/s/wnrum7/new_life_hack_using_llms_generate) - [New Life Hack: Using LLMs to Generate Constraint Solver Programs for Personal Logistics Tasks](https://emschwartz.me/new-life-hack-using-llms-to-generate-constraint-solver-programs-for-personal-logistics-tasks/)
* [2025-05-16, 15:01:00](https://soylentnews.org/article.pl?sid=25/05/14/2259213&amp;from=rss) - [Why Bell Labs Worked](https://soylentnews.org/article.pl?sid=25/05/14/2259213&amp;from=rss)
* [2025-05-16, 10:20:00](https://soylentnews.org/article.pl?sid=25/05/15/0224241&amp;from=rss) - [A Chemical in Plastics is Tied to Heart Disease Deaths](https://soylentnews.org/article.pl?sid=25/05/15/0224241&amp;from=rss)
* [2025-05-16, 05:32:00](https://soylentnews.org/article.pl?sid=25/05/15/0157228&amp;from=rss) - [FTC Pushes The Enforcement Of Its &apos;Click-To-Cancel&apos; Rule Back To July](https://soylentnews.org/article.pl?sid=25/05/15/0157228&amp;from=rss)
* [2025-05-16, 00:45:00](https://soylentnews.org/article.pl?sid=25/05/15/0147219&amp;from=rss) - [When Your Favorite Song Plays, Your Brain ‘Physically Embodies’ Music](https://soylentnews.org/article.pl?sid=25/05/15/0147219&amp;from=rss)
* [2025-05-15, 20:00:00](https://soylentnews.org/article.pl?sid=25/05/14/0440229&amp;from=rss) - [\&quot;Prompt Engineering\&quot; Is No Longer A Job, But A Skill](https://soylentnews.org/article.pl?sid=25/05/14/0440229&amp;from=rss)
* [2025-05-15, 15:44:03](https://news.ycombinator.com/item?id=43996226) - [Weather Report from Saturn&apos;s Moon Titan](https://www.sci.news/astronomy/titan-weather-13907.html)
* [2025-05-15, 15:16:00](https://soylentnews.org/article.pl?sid=25/05/14/1148216&amp;from=rss) - [&apos;World&apos;s First&apos; AMD GPU Driven Via USB3 - Tiny Corp Tests EGPUs on Apple Silicon, Linux and Windows](https://soylentnews.org/article.pl?sid=25/05/14/1148216&amp;from=rss)
* [2025-05-15, 14:31:53](https://news.ycombinator.com/item?id=43995501) - [How I fixed the infamous Basilisk II Windows “Black Screen” bug in 2013](https://www.downtowndougbrown.com/2025/05/how-i-fixed-the-infamous-basilisk-ii-windows-black-screen-bug-in-2013/)
* [2025-05-15, 10:58:09](https://news.ycombinator.com/item?id=43993707) - [Project Verona: Fearless Concurrency for Python](https://microsoft.github.io/verona/pyrona.html)
* [2025-05-15, 10:30:00](https://soylentnews.org/article.pl?sid=25/05/14/1143244&amp;from=rss) - [A New Lazarus Arises – for the Fourth Time – for Pascal Fans](https://soylentnews.org/article.pl?sid=25/05/14/1143244&amp;from=rss)
* [2025-05-15, 05:47:00](https://soylentnews.org/politics/article.pl?sid=25/05/14/1136218&amp;from=rss) - [Copyright Office Thinks AI Companies Sometimes Stole Content](https://soylentnews.org/politics/article.pl?sid=25/05/14/1136218&amp;from=rss)
* [2025-05-15, 02:18:34](https://news.ycombinator.com/item?id=43991221) - [Lessons from Mixing Rust and Java: Fast, Safe, and Practical](https://medium.com/@greptime/how-to-supercharge-your-java-project-with-rust-a-practical-guide-to-jni-integration-with-a-86f60e9708b8)
* [2025-05-15, 01:01:00](https://soylentnews.org/article.pl?sid=25/05/14/0413235&amp;from=rss) - [New Way To Pull Uranium From Water Can Help China&apos;s Nuclear Power Push](https://soylentnews.org/article.pl?sid=25/05/14/0413235&amp;from=rss)
* [2025-05-14, 20:13:00](https://soylentnews.org/article.pl?sid=25/05/14/0020240&amp;from=rss) - [Ask Soylent: Insert Code Here](https://soylentnews.org/article.pl?sid=25/05/14/0020240&amp;from=rss)
* [2025-05-14, 17:52:10](https://news.ycombinator.com/item?id=43987367) - [Show HN: Turn any workflow diagram into compilable, running and stateful code](https://workflows.diagrid.io/)
* [2025-05-14, 17:04:00](https://news.ycombinator.com/item?id=43986821) - [Mice grow bigger brains when given this stretch of human DNA](https://www.nature.com/articles/d41586-025-01515-z)
* [2025-05-14, 15:30:00](https://soylentnews.org/article.pl?sid=25/05/13/1445228&amp;from=rss) - [Google Pays $1.375 Billion to Texas Over Unauthorized Tracking and Biometric Data Collection](https://soylentnews.org/article.pl?sid=25/05/13/1445228&amp;from=rss)
* [2025-05-14, 15:11:57](https://news.ycombinator.com/item?id=43985513) - [Coding without a laptop: Two weeks with AR glasses and Linux on Android](https://holdtherobot.com/blog/2025/05/11/linux-on-android-with-ar-glasses/)
* [2025-05-14, 14:11:46](https://news.ycombinator.com/item?id=43984770) - [Espanso – Cross-Platform Text Expander Written in Rust](https://github.com/espanso/espanso)
* [2025-05-14, 11:29:04](https://news.ycombinator.com/item?id=43983201) - [“Streaming vs. Batch” Is a Wrong Dichotomy, and I Think It&apos;s Confusing](https://www.morling.dev/blog/streaming-vs-batch-wrong-dichotomy/)
* [2025-05-14, 11:27:52](https://news.ycombinator.com/item?id=43983196) - [Bike-mounted sensor could boost the mapping of safe cycling routes](https://newatlas.com/bicycles/proxicycle-bicycle-sensor-safe-cycling-routes/)
* [2025-05-14, 10:37:00](https://soylentnews.org/article.pl?sid=25/05/13/0245205&amp;from=rss) - [You Think Ransomware is Bad Now? Wait Until It Infects CPUs](https://soylentnews.org/article.pl?sid=25/05/13/0245205&amp;from=rss)
* [2025-05-14, 09:11:47](https://news.ycombinator.com/item?id=43982495) - [ARMv9 Architecture Helps Lift Arm to New Financial Heights](https://www.nextplatform.com/2025/05/12/armv9-architecture-helps-lift-arm-to-new-financial-heights/)
* [2025-05-14, 05:51:00](https://soylentnews.org/article.pl?sid=25/05/13/0234223&amp;from=rss) - [The Viking Age is Undergoing a Revisionist Transformation](https://soylentnews.org/article.pl?sid=25/05/13/0234223&amp;from=rss)
* [2025-05-14, 01:04:00](https://soylentnews.org/article.pl?sid=25/05/13/020213&amp;from=rss) - [Nvidia NeMo Microservices to Embed AI Agents in Workflows](https://soylentnews.org/article.pl?sid=25/05/13/020213&amp;from=rss)
