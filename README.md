# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements and Innovations

* [An Asia Internet History: First Decade (1980-1990)](https://sites.google.com/site/internethistoryasia/book1) - A book detailing the formative years of internet development in Asia.

* [OSU's Open Source Lab Eyes Infrastructure Upgrades and Sustainability After Recent Funding Success](https://news.slashdot.org/story/25/05/18/044230/osus-open-source-lab-eyes-infrastructure-upgrades-and-sustainability-after-recent-funding-success) - Oregon State University's Open Source Lab plans infrastructure improvements.

* [K-Scale Labs: Open-source humanoid robots, built for developers](https://www.kscale.dev/) - Open-source initiative for humanoid robotics aimed at developers.

* [Show HN: Vaev – A browser engine built from scratch (It renders google.com)](https://github.com/skift-org/vaev) - A new browser engine developed from scratch.

* [NASA Keeps Ancient Voyager 1 Spacecraft Alive With Hail Mary Thruster Fix](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss) - NASA employs a creative fix to sustain the Voyager 1 mission.

* [Rust is So Good You Can Get Paid $20K to Make It as Fast as C](https://developers.slashdot.org/story/25/05/18/0257255/rust-is-so-good-you-can-get-paid-20k-to-make-it-as-fast-as-c?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Developers are incentivized to optimize Rust's performance.

* [Taiwan Shuts Down Its Last Nuclear Reactor](https://hardware.slashdot.org/story/25/05/18/1549202/taiwan-shuts-down-its-last-nuclear-reactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Taiwan formally ends its reliance on nuclear energy.

## Artificial Intelligence and Machine Learning

* [Why We're Unlikely to Get Artificial General Intelligence Any Time Soon](https://slashdot.org/story/25/05/19/003225/why-were-unlikely-to-get-artificial-general-intelligence-any-time-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Challenges and roadblocks for achieving AGI.

* [Emergent social conventions and collective bias in LLM populations](https://www.science.org/doi/10.1126/sciadv.adu9368) - A study exploring behavioral phenomena in large language models.

* [Show HN: Python Simulator of David Deutsch’s "Constructor Theory of Time"](https://github.com/gvelesandro/constructor-theory-simulator) - A Python-based exploration of theoretical physics concepts.

* [When a Company Does Job Interviews with a Malfunctioning AI - and Then Rejects You](https://it.slashdot.org/story/25/05/18/1842225/when-a-company-does-job-interviews-with-a-malfunctioning-ai---and-then-rejects-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Concerns over error-prone AI-driven hiring processes.

* [Postman is logging all your secrets and environment variables](https://anonymousdata.medium.com/postman-is-logging-all-your-secrets-and-environment-variables-9c316e92d424) - Privacy issues with Postman’s data storage practices.

* [AniSora: Open-source anime video generation model](https://komiko.app/video/AniSora) - A model leveraging AI for generating anime videos.

## Security and Privacy

* [O2 VoLTE: locating any customer with a phone call](https://mastdatabase.co.uk/blog/2025/05/o2-expose-customer-location-call-4g/) - Vulnerabilities in phone call VoLTE systems.

* [Severed Fingers and 'Wrench Attacks' Rattle the Crypto Elite](https://www.wsj.com/finance/currencies/crypto-industry-robberies-attacks-32c2867a) - Reports on physical attacks targeting cryptocurrency holders.

* [Firefox Announces Same-Day Update After Two Minor Pwn2Own Exploits](https://tech.slashdot.org/story/25/05/18/0558219/firefox-announces-same-day-update-after-two-minor-pwn2own-exploits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Mozilla's prompt security actions in response to exploits.

* [Ending TLS Client Authentication Certificate Support in 2026](https://letsencrypt.org/2025/05/14/ending-tls-client-authentication/) - Changes to TLS certificate practices announced.

## Cultural and Ethical Topics

* [A New Headache for Honest Students: Proving They Didn't Use A.I](https://www.nytimes.com/2025/05/17/style/ai-chatgpt-turnitin-students-cheating.html) - Issues of AI misuse in academia surface again.

* [Adding Mastodon Comments to your Blog](https://beej.us/blog/data/mastodon-comments/) - Integrating federated social media commentary with blogging platforms.

* [The Fall of Roam](https://every.to/superorganizers/the-fall-of-roam) - Analysis of the decline of Roam as an organizational platform.

* [White House Scraps Plan to Block Data Brokers From Selling Americans’ Sensitive Data](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss) - Government indecision on data privacy protections.

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

* [2025-05-19, 01:40:39](https://lobste.rs/s/gdyjew/asia_internet_history_first_decade_1980) - [An Asia Internet History: First Decade (1980-1990)](https://sites.google.com/site/internethistoryasia/book1)
* [2025-05-19, 01:39:38](https://lobste.rs/s/lnr9im/mapgen4_trade_routes) - [Mapgen4 trade routes](https://www.redblobgames.com/blog/2025-05-08-mapgen4-trade-routes/)
* [2025-05-19, 00:33:27](https://lobste.rs/s/xtkhq8/testdesiderata) - [TestDesiderata](https://testdesiderata.com/)
* [2025-05-19, 00:06:00](https://slashdot.org/story/25/05/19/003225/why-were-unlikely-to-get-artificial-general-intelligence-any-time-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why We&apos;re Unlikely to Get Artificial General Intelligence Any Time Soon](https://slashdot.org/story/25/05/19/003225/why-were-unlikely-to-get-artificial-general-intelligence-any-time-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss) - [Mars May Have Vast Underground Oceans](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss)
* [2025-05-18, 23:37:54](https://news.ycombinator.com/item?id=44025127) - [A New Headache for Honest Students: Proving They Didn&apos;t Use A.I](https://www.nytimes.com/2025/05/17/style/ai-chatgpt-turnitin-students-cheating.html)
* [2025-05-18, 23:15:57](https://news.ycombinator.com/item?id=44025022) - [California vanity license plate applications with reasons for rejection](https://github.com/veltman/ca-license-plates)
* [2025-05-18, 22:55:26](https://news.ycombinator.com/item?id=44024919) - [Severed Fingers and &apos;Wrench Attacks&apos; Rattle the Crypto Elite](https://www.wsj.com/finance/currencies/crypto-industry-robberies-attacks-32c2867a)
* [2025-05-18, 22:33:16](https://news.ycombinator.com/item?id=44024784) - [KDE is finally getting a native virtual machine manager called \&quot;Karton\&quot;](https://www.neowin.net/news/kde-is-finally-getting-a-native-virtual-machine-manager-called-karton/)
* [2025-05-18, 22:27:07](https://news.ycombinator.com/item?id=44024759) - [France Becomes First Government to Endorse UN Open Source Principles](https://social.numerique.gouv.fr/@codegouvfr/114529954373492878)
* [2025-05-18, 22:19:00](https://games.slashdot.org/story/25/05/18/2216254/bungie-blames-stolen-marathon-art-on-former-developer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bungie Blames Stolen &apos;Marathon&apos; Art On Former Developer](https://games.slashdot.org/story/25/05/18/2216254/bungie-blames-stolen-marathon-art-on-former-developer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 21:34:58](https://lobste.rs/s/mwvvha/mimalloc_cigarette_losing_one_week_my) - [Mimalloc Cigarette: Losing one week of my life catching a memory leak](https://pwy.io/posts/mimalloc-cigarette/)
* [2025-05-18, 21:06:25](https://lobste.rs/s/ytoqjg/agent_recursion) - [Agent Recursion](https://choly.ca/post/agent-recursion/)
* [2025-05-18, 21:02:00](https://tech.slashdot.org/story/25/05/18/2059226/the-people-stuck-using-ancient-windows-computers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The People Stuck Using Ancient Windows Computers&apos;](https://tech.slashdot.org/story/25/05/18/2059226/the-people-stuck-using-ancient-windows-computers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 20:37:38](https://lobste.rs/s/loggq6/ditching_obsidian_building_my_own) - [Ditching Obsidian and building my own](https://amberwilliams.io/blogs/building-my-own-pkms)
* [2025-05-18, 20:36:51](https://lobste.rs/s/zr2vsn/ios_deep_linking_with_bevy_rust) - [iOS Deep-Linking with Bevy in Rust](https://rustunit.com/blog/2025/05-18-bevy-ios-deep-linking/)
* [2025-05-18, 20:22:33](https://news.ycombinator.com/item?id=44024055) - [Show HN: Python Simulator of David Deutsch’s \&quot;Constructor Theory of Time\&quot;](https://github.com/gvelesandro/constructor-theory-simulator)
* [2025-05-18, 20:11:09](https://lobste.rs/s/yeq24m/llm_text_chat_is_everywhere_who_s) - [LLM text chat is everywhere. Who’s optimizing its UX?](https://xenodium.com/llm-text-chat-is-everywhere-whos-optimizing-ux)
* [2025-05-18, 19:59:00](https://tech.slashdot.org/story/25/05/18/1957205/why-two-amazon-drones-crashed-at-a-test-facility-in-a-december?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Two Amazon Drones Crashed at a Test Facility in a December](https://tech.slashdot.org/story/25/05/18/1957205/why-two-amazon-drones-crashed-at-a-test-facility-in-a-december?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss) - [U.S. Inks Bill to Force Geo-Tracking Tech for High-End Gaming and AI GPUs](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss)
* [2025-05-18, 19:16:41](https://news.ycombinator.com/item?id=44023680) - [K-Scale Labs: Open-source humanoid robots, built for developers](https://www.kscale.dev/)
* [2025-05-18, 18:45:00](https://it.slashdot.org/story/25/05/18/1842225/when-a-company-does-job-interviews-with-a-malfunctioning-ai---and-then-rejects-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [When a Company Does Job Interviews with a Malfunctioning AI - and Then  Rejects You](https://it.slashdot.org/story/25/05/18/1842225/when-a-company-does-job-interviews-with-a-malfunctioning-ai---and-then-rejects-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 18:36:54](https://news.ycombinator.com/item?id=44023423) - [The Fall of Roam](https://every.to/superorganizers/the-fall-of-roam)
* [2025-05-18, 17:54:12](https://news.ycombinator.com/item?id=44023144) - [Show HN: Vaev – A browser engine built from scratch (It renders google.com)](https://github.com/skift-org/vaev)
* [2025-05-18, 17:34:00](https://developers.slashdot.org/story/25/05/18/0257255/rust-is-so-good-you-can-get-paid-20k-to-make-it-as-fast-as-c?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Rust is So Good You Can Get Paid $20K to Make It as Fast as C&apos;](https://developers.slashdot.org/story/25/05/18/0257255/rust-is-so-good-you-can-get-paid-20k-to-make-it-as-fast-as-c?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 17:05:56](https://news.ycombinator.com/item?id=44022758) - [$30 Homebrew Automated Blinds Opener](https://sifter.org/~simon/journal/20240718.html)
* [2025-05-18, 16:34:00](https://hardware.slashdot.org/story/25/05/18/1549202/taiwan-shuts-down-its-last-nuclear-reactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Taiwan Shuts Down Its Last Nuclear Reactor](https://hardware.slashdot.org/story/25/05/18/1549202/taiwan-shuts-down-its-last-nuclear-reactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 16:26:58](https://news.ycombinator.com/item?id=44022484) - [Emergent social conventions and collective bias in LLM populations](https://www.science.org/doi/10.1126/sciadv.adu9368)
* [2025-05-18, 16:21:50](https://news.ycombinator.com/item?id=44022448) - [Ditching Obsidian and building my own](https://amberwilliams.io/blogs/building-my-own-pkms)
* [2025-05-18, 16:09:01](https://news.ycombinator.com/item?id=44022353) - [Show HN: I modeled the Voynich Manuscript with SBERT to test for structure](https://github.com/brianmg/voynich-nlp-analysis)
* [2025-05-18, 16:01:41](https://lobste.rs/s/aluo6d/macos_vms_docker_container) - [macOS VMs in a Docker Container](https://github.com/trycua/cua/tree/main/libs/lumier)
* [2025-05-18, 15:56:18](https://news.ycombinator.com/item?id=44022265) - [Show HN: Buckaroo – Data table UI for Notebooks](https://github.com/paddymul/buckaroo)
* [2025-05-18, 15:48:57](https://news.ycombinator.com/item?id=44022225) - [Spaced Repetition Memory System](https://notes.andymatuschak.org/Spaced_repetition_memory_system)
* [2025-05-18, 15:34:00](https://tech.slashdot.org/story/25/05/18/0558219/firefox-announces-same-day-update-after-two-minor-pwn2own-exploits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Announces Same-Day Update After Two Minor Pwn2Own Exploits](https://tech.slashdot.org/story/25/05/18/0558219/firefox-announces-same-day-update-after-two-minor-pwn2own-exploits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 15:01:35](https://news.ycombinator.com/item?id=44021883) - [Show HN: Model2vec-Rs – Fast Static Text Embeddings in Rust](https://github.com/MinishLab/model2vec-rs)
* [2025-05-18, 14:52:11](https://news.ycombinator.com/item?id=44021824) - [Building my childhood dream PC](https://fabiensanglard.net/2168/index.html)
* [2025-05-18, 14:50:40](https://lobste.rs/s/qjo0bn/building_my_childhood_dream_pc) - [Building my childhood dream PC](https://fabiensanglard.net/2168/index.html)
* [2025-05-18, 14:38:00](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss) - [NASA Keeps Ancient Voyager 1 Spacecraft Alive With Hail Mary Thruster Fix](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss)
* [2025-05-18, 14:34:00](https://news.slashdot.org/story/25/05/18/044230/osus-open-source-lab-eyes-infrastructure-upgrades-and-sustainability-after-recent-funding-success?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OSU&apos;s Open Source Lab Eyes Infrastructure Upgrades and Sustainability After Recent Funding Success](https://news.slashdot.org/story/25/05/18/044230/osus-open-source-lab-eyes-infrastructure-upgrades-and-sustainability-after-recent-funding-success?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 13:03:34](https://lobste.rs/s/65b89t/safe_yaml_monster) - [\&quot;Safe\&quot; YAML monster](https://gist.github.com/taramtrampam/fca4e599992909b48a3ba1ce69e215a2)
* [2025-05-18, 12:43:01](https://news.ycombinator.com/item?id=44020975) - [How the Sun Enterprise 10000 was born (2007)](https://www.filibeto.org/aduritz/truetrue/e10000/how-e10k-wasborn.html)
* [2025-05-18, 12:34:38](https://lobste.rs/s/8nv2u3/freebsd_on_laptop_2018) - [FreeBSD on a Laptop (2018)](https://www.c0ffee.net/blog/freebsd-on-a-laptop/)
* [2025-05-18, 12:30:26](https://lobste.rs/s/f5uxc4/x220_thinkpad_is_best_laptop_world_2023) - [The X220 ThinkPad is the Best Laptop in the World (2023)](https://btxx.org/posts/x220/)
* [2025-05-18, 12:08:52](https://news.ycombinator.com/item?id=44020734) - [Show HN: Hardtime.nvim – break bad habits and master Vim motions](https://github.com/m4xshen/hardtime.nvim)
* [2025-05-18, 12:08:43](https://lobste.rs/s/her8rf/adding_mastodon_comments_your_blog) - [Adding Mastodon Comments to your Blog](https://beej.us/blog/data/mastodon-comments/)
* [2025-05-18, 12:05:31](https://lobste.rs/s/wwac0i/rust_turns_10) - [Rust turns 10](https://smallcultfollowing.com/babysteps/blog/2025/05/15/10-years-of-rust/)
* [2025-05-18, 12:04:27](https://lobste.rs/s/p9lo9w/beginner_s_guide_sourcehut) - [A Beginner&apos;s Guide to SourceHut](https://btxx.org/posts/beginners-guide-sourcehut/)
* [2025-05-18, 11:42:19](https://news.ycombinator.com/item?id=44020591) - [Spaced repetition systems have gotten better](https://domenic.me/fsrs/)
* [2025-05-18, 11:34:00](https://news.slashdot.org/story/25/05/17/1954232/youtube-announces-gemini-ai-feature-to-target-ads-when-viewers-are-most-engaged?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Announces Gemini AI Feature to Target Ads When Viewers are Most Engaged](https://news.slashdot.org/story/25/05/17/1954232/youtube-announces-gemini-ai-feature-to-target-ads-when-viewers-are-most-engaged?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 09:53:00](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss) - [White House Scraps Plan to Block Data Brokers From Selling Americans’ Sensitive Data](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss)
* [2025-05-18, 07:34:00](https://linux.slashdot.org/story/25/05/18/0452232/9-months-later-microsoft-finally-fixes-linux-dual-booting-bug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [9 Months Later, Microsoft Finally Fixes Linux Dual-Booting Bug](https://linux.slashdot.org/story/25/05/18/0452232/9-months-later-microsoft-finally-fixes-linux-dual-booting-bug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 05:32:50](https://lobste.rs/s/olwjn7/mystical) - [Mystical](https://suberic.net/~dmm/projects/mystical/README.html)
* [2025-05-18, 05:12:00](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss) - [China&apos;s Hygon Details C86-5G: A 128-Core X86 CPU with Advanced Features and Four-Way SMT](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss)
* [2025-05-18, 04:55:55](https://lobste.rs/s/mrqshv/ending_tls_client_authentication) - [Ending TLS Client Authentication Certificate Support in 2026](https://letsencrypt.org/2025/05/14/ending-tls-client-authentication/)
* [2025-05-18, 03:34:00](https://developers.slashdot.org/story/25/05/18/019247/ask-slashdot-would-you-consider-a-low-latency-javascript-runtime-for-your-workflow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot: Would You Consider a Low-Latency JavaScript Runtime For Your Workflow?](https://developers.slashdot.org/story/25/05/18/019247/ask-slashdot-would-you-consider-a-low-latency-javascript-runtime-for-your-workflow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 01:34:00](https://tech.slashdot.org/story/25/05/17/2312252/google-restores-nextcloud-users-file-access-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Restores Nextcloud Users&apos; File Access on Android](https://tech.slashdot.org/story/25/05/17/2312252/google-restores-nextcloud-users-file-access-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-18, 00:24:00](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss) - [Oniux by Tor: Isolating Linux Applications at the Kernel Level for Secure Connections](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss)
* [2025-05-17, 23:59:03](https://news.ycombinator.com/item?id=44017913) - [AniSora: Open-source anime video generation model](https://komiko.app/video/AniSora)
* [2025-05-17, 22:36:32](https://lobste.rs/s/tudmqv/postman_is_logging_all_your_secrets) - [Postman is logging all your secrets and environment variables](https://anonymousdata.medium.com/postman-is-logging-all-your-secrets-and-environment-variables-9c316e92d424)
* [2025-05-17, 22:34:00](https://developers.slashdot.org/story/25/05/16/2227231/stack-overflow-seeks-realignment-to-support-the-builders-of-the-future-in-an-ai-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stack Overflow Seeks Realignment &apos;To Support the Builders of the Future in an AI World&apos;](https://developers.slashdot.org/story/25/05/16/2227231/stack-overflow-seeks-realignment-to-support-the-builders-of-the-future-in-an-ai-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 21:51:33](https://lobste.rs/s/evvi8x/firefox_security_response_pwn2own_2025) - [Firefox Security Response to pwn2own 2025](https://blog.mozilla.org/security/2025/05/17/firefox-security-response-to-pwn2own-2025/)
* [2025-05-17, 21:34:00](https://hardware.slashdot.org/story/25/05/17/2032204/intel-struggles-to-reverse-amds-share-gains-in-x86-cpu-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Struggles To Reverse AMD&apos;s Share Gains In x86 CPU Market](https://hardware.slashdot.org/story/25/05/17/2032204/intel-struggles-to-reverse-amds-share-gains-in-x86-cpu-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-17, 20:08:29](https://lobste.rs/s/goqzff/push_ifs_up_fors_down_2023) - [Push Ifs Up And Fors Down (2023)](https://matklad.github.io/2023/11/15/push-ifs-up-and-fors-down.html)
* [2025-05-17, 19:39:00](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss) - [NCSC and Industry at Odds Over How to Tackle Shoddy Software](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss)
* [2025-05-17, 18:21:18](https://news.ycombinator.com/item?id=44016037) - [Mystical](https://suberic.net/~dmm/projects/mystical/README.html)
* [2025-05-17, 17:27:29](https://lobste.rs/s/phkxqf/japan_s_ic_cards_are_weird_wonderful) - [Japan&apos;s IC cards are weird and wonderful](https://aruarian.dance/blog/japan-ic-cards/)
* [2025-05-17, 16:31:32](https://lobste.rs/s/xmhoq2/o2_volte_locating_any_customer_with_phone) - [O2 VoLTE: locating any customer with a phone call](https://mastdatabase.co.uk/blog/2025/05/o2-expose-customer-location-call-4g/)
* [2025-05-17, 14:50:00](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss) - [EU Bug Database Fully Operational as US Slashes Infosec](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss)
* [2025-05-17, 13:02:12](https://lobste.rs/s/uwy1kb/cheriot_last_ten_years) - [CHERIoT: The last ten years](https://cheriot.org/cheri/history/2025/05/16/last-ten-years.html)
* [2025-05-17, 11:54:47](https://lobste.rs/s/xv7mks/gnu_taler_v1_0_released) - [GNU Taler v1.0 released](https://www.taler.net/en/news/2025-01.html)
* [2025-05-17, 10:05:00](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss) - [A US Court Just Put Ownership of CRISPR Back in Play](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss)
* [2025-05-17, 09:44:19](https://news.ycombinator.com/item?id=44013201) - [Dezyne Programming Language](https://dezyne.org/dezyne/manual/dezyne/dezyne.html)
* [2025-05-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss) - [Bluetooth 6.1 Enhances Privacy With Randomized RPA Timing](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss)
* [2025-05-17, 00:31:00](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss) - [Nvidia Reportedly Raises GPU Prices by 10-15% as Tariffs and TSMC Price Hikes Filter Down](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss)
* [2025-05-16, 19:50:45](https://news.ycombinator.com/item?id=44009185) - [Comparing Parallel Functional Array Languages: Programming and Performance](https://arxiv.org/abs/2505.08906)
* [2025-05-16, 19:45:00](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss) - [Scientists Find Lead Really Can Be Turned Into Gold (With Help From The LHC)](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss)
* [2025-05-16, 15:01:00](https://soylentnews.org/article.pl?sid=25/05/14/2259213&amp;from=rss) - [Why Bell Labs Worked](https://soylentnews.org/article.pl?sid=25/05/14/2259213&amp;from=rss)
* [2025-05-16, 14:05:52](https://news.ycombinator.com/item?id=44005692) - [Show HN: A platform to find tech conferences, discounts, and ticket giveaways](https://www.tech.tickets/)
* [2025-05-16, 11:10:31](https://news.ycombinator.com/item?id=44003928) - [The Journal of Imaginary Research](https://journalofimaginaryresearch.home.blog/)
* [2025-05-16, 10:20:00](https://soylentnews.org/article.pl?sid=25/05/15/0224241&amp;from=rss) - [A Chemical in Plastics is Tied to Heart Disease Deaths](https://soylentnews.org/article.pl?sid=25/05/15/0224241&amp;from=rss)
* [2025-05-16, 05:32:00](https://soylentnews.org/article.pl?sid=25/05/15/0157228&amp;from=rss) - [FTC Pushes The Enforcement Of Its &apos;Click-To-Cancel&apos; Rule Back To July](https://soylentnews.org/article.pl?sid=25/05/15/0157228&amp;from=rss)
* [2025-05-16, 01:47:02](https://news.ycombinator.com/item?id=44001105) - [Green Fabrication of Sulfonium-Containing Bismuth Materials for X-Ray Detection](https://advanced.onlinelibrary.wiley.com/doi/10.1002/adma.202418626)
* [2025-05-16, 00:45:00](https://soylentnews.org/article.pl?sid=25/05/15/0147219&amp;from=rss) - [When Your Favorite Song Plays, Your Brain ‘Physically Embodies’ Music](https://soylentnews.org/article.pl?sid=25/05/15/0147219&amp;from=rss)
* [2025-05-15, 22:16:26](https://news.ycombinator.com/item?id=43999897) - [In Memoriam: John L. Young, Cryptome Co-Founder](https://www.eff.org/deeplinks/2025/05/memoriam-john-l-young-cryptome-co-founder)
* [2025-05-15, 20:00:00](https://soylentnews.org/article.pl?sid=25/05/14/0440229&amp;from=rss) - [\&quot;Prompt Engineering\&quot; Is No Longer A Job, But A Skill](https://soylentnews.org/article.pl?sid=25/05/14/0440229&amp;from=rss)
* [2025-05-15, 15:16:00](https://soylentnews.org/article.pl?sid=25/05/14/1148216&amp;from=rss) - [&apos;World&apos;s First&apos; AMD GPU Driven Via USB3 - Tiny Corp Tests EGPUs on Apple Silicon, Linux and Windows](https://soylentnews.org/article.pl?sid=25/05/14/1148216&amp;from=rss)
* [2025-05-15, 13:51:26](https://news.ycombinator.com/item?id=43995094) - [Yahtzeeql – Yahtzee solver that&apos;s mostly SQL](https://github.com/charliemeyer/yahtzeeql)
* [2025-05-15, 10:30:00](https://soylentnews.org/article.pl?sid=25/05/14/1143244&amp;from=rss) - [A New Lazarus Arises – for the Fourth Time – for Pascal Fans](https://soylentnews.org/article.pl?sid=25/05/14/1143244&amp;from=rss)
* [2025-05-15, 05:47:00](https://soylentnews.org/politics/article.pl?sid=25/05/14/1136218&amp;from=rss) - [Copyright Office Thinks AI Companies Sometimes Stole Content](https://soylentnews.org/politics/article.pl?sid=25/05/14/1136218&amp;from=rss)
* [2025-05-15, 01:01:00](https://soylentnews.org/article.pl?sid=25/05/14/0413235&amp;from=rss) - [New Way To Pull Uranium From Water Can Help China&apos;s Nuclear Power Push](https://soylentnews.org/article.pl?sid=25/05/14/0413235&amp;from=rss)
