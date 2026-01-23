# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Advancements and Innovations

* [South Korea Launches Landmark Laws To Regulate AI](https://yro.slashdot.org/story/26/01/22/2339207/south-korea-launches-landmark-laws-to-regulate-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - South Korea has introduced pivotal AI regulations, setting a precedent for AI governance and international policy.

* [Selectively Disabling HTTP/1.0 and HTTP/1.1](https://markmcb.com/web/selectively_disabling_http_1/) - A technical exploration of selectively deactivating outdated HTTP protocols to improve internet efficiency and security.

* [I built a light that reacts to radio waves [video]](https://www.youtube.com/watch?v=moBCOEiqiPs) - A creative experimental project showcasing a light system powered by radio wave reactions.

## Artificial Intelligence and Cognitive Research

* [Talking to LLMs has improved my thinking](https://philipotoole.com/why-talking-to-llms-has-improved-my-thinking/) - Thoughts on how interacting with large language models can enhance human problem-solving capabilities.

* [Intel Struggles To Meet AI Data Center Demand](https://slashdot.org/story/26/01/22/2317238/intel-struggles-to-meet-ai-data-center-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Intel grapples with unprecedented demand for AI-centric infrastructure development.

## Software Evolution and Open Source

* [Compiling Scheme to WebAssembly](https://eli.thegreenplace.net/2026/compiling-scheme-to-webassembly/) - Delve into compiling Scheme programs into WebAssembly for high-performance browser applications.

* [Announcing Rust 1.93.0](https://blog.rust-lang.org/2026/01/22/Rust-1.93.0/) - Insights into the latest improvements in the Rust programming language and its evolving ecosystem.

* [Improving the usability of C libraries in Swift](https://www.swift.org/blog/improving-usability-of-c-libraries-in-swift/) - Innovations enhancing the integration of C libraries with Swift, a boon for cross-language developers.

## Cultural, Environmental, and Historical Insights

* [Why medieval city-builder video games are historically inaccurate (2020)](https://www.leidenmedievalistsblog.nl/articles/why-medieval-city-builder-video-games-are-historically-inaccurate) - A critique uncovering historical inaccuracies in popular medieval simulation games.

* [Half the World&apos;s 100 Largest Cities Are in High Water Stress Areas, Analysis Finds](https://news.slashdot.org/story/26/01/22/1749201/half-the-worlds-100-largest-cities-are-in-high-water-stress-areas-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Research highlighting severe water stress impacting urban populations globally.

## Unique Research and Discoveries

* [We built a museum exhibit about a 1990s game hint line, with a physical binder](https://yarnspinner.dev/blog/hint-line-93/) - How a retro game hint line has been transformed into an interactive museum exhibit.

* [Textbooks Were Wrong: Human Hair Doesn&apos;t Grow the Way Scientists Thought](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss) - New revelations challenging long-held scientific beliefs about human hair growth.

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

* [2026-01-23, 06:34:12](https://lobste.rs/s/iyowrd/selectively_disabling_http_1_0_http_1_1) - [Selectively Disabling HTTP/1.0 and HTTP/1.1](https://markmcb.com/web/selectively_disabling_http_1/)
* [2026-01-23, 05:34:35](https://news.ycombinator.com/item?id=46728808) - [I built a light that reacts to radio waves [video]](https://www.youtube.com/watch?v=moBCOEiqiPs)
* [2026-01-23, 04:12:00](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss) - [Nvidia Wanted Pirated Book Stash Access](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss)
* [2026-01-23, 03:52:06](https://news.ycombinator.com/item?id=46728197) - [Talking to LLMs has improved my thinking](https://philipotoole.com/why-talking-to-llms-has-improved-my-thinking/)
* [2026-01-23, 03:30:00](https://yro.slashdot.org/story/26/01/22/2339207/south-korea-launches-landmark-laws-to-regulate-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Korea Launches Landmark Laws To Regulate AI](https://yro.slashdot.org/story/26/01/22/2339207/south-korea-launches-landmark-laws-to-regulate-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 02:39:31](https://lobste.rs/s/go7npe/why_does_ssh_send_100_packets_per) - [Why does SSH send 100 packets per keystroke?](https://eieio.games/blog/ssh-sends-100-packets-per-keystroke/)
* [2026-01-23, 02:24:12](https://news.ycombinator.com/item?id=46727587) - [Bugs Apple Loves](https://www.bugsappleloves.com)
* [2026-01-23, 02:02:00](https://slashdot.org/story/26/01/22/2317238/intel-struggles-to-meet-ai-data-center-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Struggles To Meet AI Data Center Demand](https://slashdot.org/story/26/01/22/2317238/intel-struggles-to-meet-ai-data-center-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 01:34:45](https://lobste.rs/s/seutjn/compiling_scheme_webassembly) - [Compiling Scheme to WebAssembly](https://eli.thegreenplace.net/2026/compiling-scheme-to-webassembly/)
* [2026-01-23, 01:25:00](https://yro.slashdot.org/story/26/01/22/235220/epic-and-google-have-a-secret-800-million-unreal-engine-and-services-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Epic and Google Have a Secret $800 Million Unreal Engine and Services Deal](https://yro.slashdot.org/story/26/01/22/235220/epic-and-google-have-a-secret-800-million-unreal-engine-and-services-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 00:45:00](https://slashdot.org/story/26/01/22/2253207/eu-parliament-calls-for-detachment-from-us-tech-giants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Parliament Calls For Detachment From US Tech Giants](https://slashdot.org/story/26/01/22/2253207/eu-parliament-calls-for-detachment-from-us-tech-giants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 00:39:28](https://lobste.rs/s/zgrqdi/exploit_cursor_agents_create_persistent) - [Exploit Cursor Agents to create persistent, distributed threats](https://ike.io/open-a-folder-all-your-agents-are-mine/)
* [2026-01-23, 00:30:20](https://news.ycombinator.com/item?id=46726916) - [Stunnel](https://www.stunnel.org/)
* [2026-01-23, 00:22:58](https://news.ycombinator.com/item?id=46726857) - [Why medieval city-builder video games are historically inaccurate (2020)](https://www.leidenmedievalistsblog.nl/articles/why-medieval-city-builder-video-games-are-historically-inaccurate)
* [2026-01-23, 00:12:09](https://lobste.rs/s/ijyacx/overrun_with_ai_slop_curl_scraps_bug) - [Overrun with AI slop, cURL scraps bug bounties to ensure \&quot;intact mental health\&quot;](https://arstechnica.com/security/2026/01/overrun-with-ai-slop-curl-scraps-bug-bounties-to-ensure-intact-mental-health/)
* [2026-01-23, 00:02:00](https://tech.slashdot.org/story/26/01/22/221222/new-jersey-law-requires-e-bike-drivers-to-have-license-insurance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Jersey Law Requires E-Bike Drivers To Have License, Insurance](https://tech.slashdot.org/story/26/01/22/221222/new-jersey-law-requires-e-bike-drivers-to-have-license-insurance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 23:34:44](https://news.ycombinator.com/item?id=46726526) - [Improving the usability of C libraries in Swift](https://www.swift.org/blog/improving-usability-of-c-libraries-in-swift/)
* [2026-01-22, 23:28:00](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss) - [Textbooks Were Wrong: Human Hair Doesn&apos;t Grow the Way Scientists Thought](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss)
* [2026-01-22, 23:23:54](https://lobste.rs/s/jumnjp/we_built_museum_exhibit_about_1990s_game) - [We built a museum exhibit about a 1990s game hint line, with a physical binder](https://yarnspinner.dev/blog/hint-line-93/)
* [2026-01-22, 23:20:00](https://slashdot.org/story/26/01/22/2152231/the-microsoft-openai-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Microsoft-OpenAI Files](https://slashdot.org/story/26/01/22/2152231/the-microsoft-openai-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 22:40:00](https://tech.slashdot.org/story/26/01/22/2141245/waymo-launches-robotaxi-service-in-miami-extending-us-lead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Launches Robotaxi Service In Miami, Extending US Lead](https://tech.slashdot.org/story/26/01/22/2141245/waymo-launches-robotaxi-service-in-miami-extending-us-lead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 22:02:00](https://news.slashdot.org/story/26/01/22/2131206/google-begins-offering-free-sat-practice-tests-powered-by-gemini?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Begins Offering Free SAT Practice Tests Powered By Gemini](https://news.slashdot.org/story/26/01/22/2131206/google-begins-offering-free-sat-practice-tests-powered-by-gemini?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 21:24:23](https://news.ycombinator.com/item?id=46725300) - [Scaling PostgreSQL to power 800M ChatGPT users](https://openai.com/index/scaling-postgresql/)
* [2026-01-22, 21:23:12](https://news.ycombinator.com/item?id=46725288) - [Capital One to acquire Brex for $5.15B](https://www.reuters.com/legal/transactional/capital-one-buy-fintech-firm-brex-515-billion-deal-2026-01-22/)
* [2026-01-22, 21:22:00](https://science.slashdot.org/story/26/01/22/185234/nasa-eyes-popular-pc-hardware-performance-tool-for-its-flight-simulators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Eyes Popular PC Hardware Performance Tool for Its Flight Simulators](https://science.slashdot.org/story/26/01/22/185234/nasa-eyes-popular-pc-hardware-performance-tool-for-its-flight-simulators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 21:18:12](https://lobste.rs/s/spemfa/remotely_unlocking_encrypted_hard_disk) - [remotely unlocking an encrypted hard disk with systemd initrd on Arch](https://jyn.dev/remotely-unlocking-an-encrypted-hard-disk/)
* [2026-01-22, 20:44:00](https://news.slashdot.org/story/26/01/22/1749201/half-the-worlds-100-largest-cities-are-in-high-water-stress-areas-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Half the World&apos;s 100 Largest Cities Are in High Water Stress Areas, Analysis Finds](https://news.slashdot.org/story/26/01/22/1749201/half-the-worlds-100-largest-cities-are-in-high-water-stress-areas-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 20:05:45](https://lobste.rs/s/7oqiqi/ssh_has_no_host_header) - [SSH has no Host header](https://blog.exe.dev/ssh-host-header)
* [2026-01-22, 20:01:00](https://science.slashdot.org/story/26/01/22/1743240/moderna-curbing-investments-in-vaccine-trials-due-to-us-backlash-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Moderna Curbing Investments in Vaccine Trials Due To US Backlash, CEO Says](https://science.slashdot.org/story/26/01/22/1743240/moderna-curbing-investments-in-vaccine-trials-due-to-us-backlash-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 19:27:32](https://news.ycombinator.com/item?id=46723990) - [Why does SSH send 100 packets per keystroke?](https://eieio.games/blog/ssh-sends-100-packets-per-keystroke/)
* [2026-01-22, 19:22:00](https://slashdot.org/story/26/01/22/1738221/ebay-bans-illicit-automated-shopping-amid-rapid-rise-of-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [eBay Bans Illicit Automated Shopping Amid Rapid Rise of AI Agents](https://slashdot.org/story/26/01/22/1738221/ebay-bans-illicit-automated-shopping-amid-rapid-rise-of-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 19:03:56](https://news.ycombinator.com/item?id=46723694) - [&apos;Active&apos; sitting is better for brain health: review of studies](https://www.sciencealert.com/not-all-sitting-is-equal-one-type-was-just-linked-to-better-brain-health)
* [2026-01-22, 19:00:37](https://lobste.rs/s/t9kzm7/cta_hierarchy_wild) - [CTA Hierarchy in the Wild](https://blog.jim-nielsen.com/2026/cta-hierarchy/)
* [2026-01-22, 18:45:00](https://tech.slashdot.org/story/26/01/22/1734213/workday-ceo-calls-narrative-that-ai-is-killing-software-overblown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Workday CEO Calls Narrative That AI is Killing Software &apos;Overblown&apos;](https://tech.slashdot.org/story/26/01/22/1734213/workday-ceo-calls-narrative-that-ai-is-killing-software-overblown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 18:40:00](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss) - [Cows Use Tools](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss)
* [2026-01-22, 18:38:27](https://news.ycombinator.com/item?id=46723384) - [I was banned from Claude for scaffolding a Claude.md file?](https://hugodaniel.com/posts/claude-code-banned-me/)
* [2026-01-22, 18:33:12](https://lobste.rs/s/141j2p/code_only_agent) - [The Code-Only Agent](https://rijnard.com/blog/the-code-only-agent)
* [2026-01-22, 18:31:23](https://lobste.rs/s/sbakto/protocol_for_package_management) - [A Protocol for Package Management](https://nesbitt.io/2026/01/22/a-protocol-for-package-management.html)
* [2026-01-22, 18:05:00](https://news.slashdot.org/story/26/01/22/1730215/schools-airports-high-rise-towers-architects-urged-to-get-bamboo-ready?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Schools, Airports, High-Rise Towers: Architects Urged To Get &apos;Bamboo-Ready&apos;](https://news.slashdot.org/story/26/01/22/1730215/schools-airports-high-rise-towers-architects-urged-to-get-bamboo-ready?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 18:01:02](https://news.ycombinator.com/item?id=46722853) - [Recent discoveries on the acquisition of the highest levels of human performance](https://www.science.org/doi/abs/10.1126/science.adt7790)
* [2026-01-22, 17:41:22](https://news.ycombinator.com/item?id=46722570) - [CSS Optical Illusions](https://alvaromontoro.com/blog/68091/css-optical-illusions)
* [2026-01-22, 17:20:00](https://news.slashdot.org/story/26/01/22/172240/china-lagging-in-ai-is-a-fairy-tale-mistral-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Lagging in AI Is a &apos;Fairy Tale,&apos; Mistral CEO Says](https://news.slashdot.org/story/26/01/22/172240/china-lagging-in-ai-is-a-fairy-tale-mistral-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 17:14:04](https://news.ycombinator.com/item?id=46722074) - [Composing APIs and CLIs in the LLM era](https://walters.app/blog/composing-apis-clis)
* [2026-01-22, 17:03:21](https://news.ycombinator.com/item?id=46721933) - [Launch HN: Constellation Space (YC W26) – AI for satellite mission assurance](https://news.ycombinator.com/item?id=46721933)
* [2026-01-22, 16:52:35](https://news.ycombinator.com/item?id=46721802) - [Show HN: isometric.nyc – giant isometric pixel art map of NYC](https://cannoneyed.com/isometric-nyc/)
* [2026-01-22, 16:31:47](https://news.ycombinator.com/item?id=46721488) - [Show HN: Text-to-video model from scratch (2 brothers, 2 years, 2B params)](https://huggingface.co/collections/Linum-AI/linum-v2-2b-text-to-video)
* [2026-01-22, 16:30:58](https://news.ycombinator.com/item?id=46721474) - [Show HN: BrowserOS – \&quot;Claude Cowork\&quot; in the browser](https://github.com/browseros-ai/BrowserOS)
* [2026-01-22, 15:20:48](https://news.ycombinator.com/item?id=46720395) - [GPTZero finds 100 new hallucinations in NeurIPS 2025 accepted papers](https://gptzero.me/news/neurips/)
* [2026-01-22, 15:12:14](https://lobste.rs/s/skjato/ghost_wi_fi) - [Ghost in the Wi-Fi](https://josephmate.github.io/2026-01-20-ghost-in-the-wifi/)
* [2026-01-22, 14:14:15](https://news.ycombinator.com/item?id=46719491) - [In Europe, wind and solar overtake fossil fuels](https://e360.yale.edu/digest/europe-wind-solar-fossil-fuels)
* [2026-01-22, 14:11:32](https://lobste.rs/s/l61c2k/announcing_rust_1_93_0) - [Announcing Rust 1.93.0](https://blog.rust-lang.org/2026/01/22/Rust-1.93.0/)
* [2026-01-22, 13:51:25](https://news.ycombinator.com/item?id=46719229) - [Qwen3-TTS family is now open sourced: Voice design, clone, and generation](https://qwen.ai/blog?id=qwen3tts-0115)
* [2026-01-22, 13:50:48](https://news.ycombinator.com/item?id=46719222) - [Douglas Adams on the English–American cultural divide over \&quot;heroes\&quot;](https://shreevatsa.net/post/douglas-adams-cultural-divide/)
* [2026-01-22, 13:46:00](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss) - [AI Bathroom Monitors? Welcome To America’s New Surveillance High Schools](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss)
* [2026-01-22, 12:07:49](https://lobste.rs/s/pylhoc/rpi3_running_freebsd_12_clocks_390_days) - [RPi3 running FreeBSD 12 clocks 390 days uptime as a Radius server](https://bsky.app/profile/atmosx.bsky.social/post/3mcz5g6vpmc2l)
* [2026-01-22, 11:51:10](https://news.ycombinator.com/item?id=46718061) - [Design Thinking Books (2024)](https://www.designorate.com/design-thinking-books/)
* [2026-01-22, 11:40:01](https://news.ycombinator.com/item?id=46717960) - [&apos;Askers&apos; vs. &apos;Guessers&apos; (2010)](https://www.theatlantic.com/national/2010/05/askers-vs-guessers/340891/)
* [2026-01-22, 11:34:13](https://lobste.rs/s/8vtlcw/goodjob_solid_queue_sidekiq_active_job) - [GoodJob, Solid Queue, Sidekiq, Active Job, in 2026](https://island94.org/2026/01/goodjob-solid-queue-sidekiq-active-job-in-2026)
* [2026-01-22, 10:32:08](https://lobste.rs/s/bndnsg/adversarial_coding_test) - [An adversarial coding test](https://runjak.codes/posts/2026-01-21-adversarial-coding-test/)
* [2026-01-22, 10:29:10](https://lobste.rs/s/m0twb1/your_app_subscription_is_now_my_weekend) - [Your App Subscription Is Now My Weekend Project](https://rselbach.com/your-sub-is-now-my-weekend-project/)
* [2026-01-22, 09:07:00](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss) - [France Records More Deaths Than Births for First Time Since End of Second World War](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss)
* [2026-01-22, 07:58:50](https://lobste.rs/s/yegxsx/waiting_for_dawn_search_search_index) - [Waiting for dawn in search: Search index, Google rulings and impact on Kagi](https://blog.kagi.com/waiting-dawn-search)
* [2026-01-22, 06:36:32](https://lobste.rs/s/0lm8so/secure_boot_tpm_anti_cheat_engines) - [Secure Boot, TPM and Anti-Cheat Engines](https://andrewmoore.ca/blog/post/anticheat-secure-boot-tpm/)
* [2026-01-22, 04:16:00](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss) - [Professors Issue Warning Over Surge in College Students Unable to Read](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss)
* [2026-01-22, 02:13:53](https://lobste.rs/s/pb4kco/don_t_trip_wire_yourself_testing_error) - [Don&apos;t Trip[wire] Yourself: Testing Error Recovery in Zig](https://mitchellh.com/writing/tripwire)
* [2026-01-21, 23:46:24](https://lobste.rs/s/oq8n8r/results_from_2025_go_developer_survey) - [Results from the 2025 Go Developer Survey](https://go.dev/blog/survey2025)
* [2026-01-21, 23:34:00](https://soylentnews.org/article.pl?sid=26/01/19/1628204&amp;from=rss) - [The Science That Casts Doubt on Claims About Microplastics](https://soylentnews.org/article.pl?sid=26/01/19/1628204&amp;from=rss)
* [2026-01-21, 22:41:45](https://news.ycombinator.com/item?id=46712678) - [Your brain on ChatGPT: Accumulation of cognitive debt when using an AI assistant](https://www.media.mit.edu/publications/your-brain-on-chatgpt/)
* [2026-01-21, 21:28:48](https://lobste.rs/s/koy1fz/fsnotes_7_remarkable_fast_plain_text) - [FSNotes 7 - Remarkable fast plain text notes](https://fsnot.es/v7/)
* [2026-01-21, 18:49:00](https://soylentnews.org/article.pl?sid=26/01/19/1619249&amp;from=rss) - [Hobbies Don&apos;t Just Improve Personal Lives, They Can Boost Workplace Creativity Too](https://soylentnews.org/article.pl?sid=26/01/19/1619249&amp;from=rss)
* [2026-01-21, 18:03:04](https://lobste.rs/s/t5pb5f/hate_is_strong_word_i_really_really_really) - [Hate is a strong word, but I really really really don’t like Windows 11](https://blog.urara.pl/hate-is-a-strong-word-but-i-really-really-really-don&apos;t-like-windows-11)
* [2026-01-21, 14:58:45](https://lobste.rs/s/zjje5x/so_why_should_gnome_support_server_side) - [So, why *should* GNOME support server side decorations?](https://blister.zip/posts/gnome-ssd/)
* [2026-01-21, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss) - [IT Spending Set to Hit $1.4 Trillion in 2026 - but What Exactly Are We Spending It On?](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss)
* [2026-01-21, 13:11:23](https://lobste.rs/s/oxjhnd/foss_for_digital_sovereignty_eu) - [FOSS for digital sovereignty in the EU](https://www.more-magic.net/posts/open-source-in-the-eu.html)
* [2026-01-21, 09:20:00](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss) - [The Places We Make Memories Help Us Inscribe Them](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss)
* [2026-01-21, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss) - [Proton VPN Kills Off Legacy OpenVPN Configs in Push for Better Security](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss)
* [2026-01-20, 23:51:00](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss) - [Building the World&apos;s First Graviton Detector](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss)
* [2026-01-20, 19:06:00](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss) - [China&apos;s Wind Farms Are Doing a Lot More Than Generating Electricity](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss)
* [2026-01-20, 14:22:00](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss) - [Mosquitoes&apos; Thirst for Human Blood Has Increased as Biodiversity Loss Worsens](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss)
* [2026-01-20, 09:34:00](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss) - [New Studies Can Explain Why Comet 3I/Atlas Isn&apos;t an Alien (Probably)](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss)
* [2026-01-20, 04:44:00](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss) - [Stellantis Drops Jeep, Chrysler Plug-in Hybrids Amid EV Sales Slowdown](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss)
* [2026-01-20, 00:02:00](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss) - [Anthropologists Offer New Evidence of Bipedalism in Long-Debated Fossil Discovery](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss)
* [2026-01-19, 19:11:00](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss) - [Linux Mint 22.3 “Zena” is Now Available for Download, Here&apos;s What&apos;s New](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss)
* [2026-01-19, 14:38:00](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss) - [Anything-Goes “Anyons” May be at the Root of Surprising Quantum Experiments](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss)
* [2026-01-19, 11:04:47](https://news.ycombinator.com/item?id=46677583) - [Turso is an in-process SQL database, compatible with SQLite](https://github.com/tursodatabase/turso)
* [2026-01-19, 09:45:00](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss) - [AI and the Corporate Capture of Knowledge](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss)
* [2026-01-19, 06:51:58](https://news.ycombinator.com/item?id=46675745) - [Writing First, Tooling Second](https://susam.net/writing-first-tooling-second.html)
* [2026-01-19, 05:03:00](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss) - [AWS Flips Switch on Euro Cloud as Customers Fret About Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss)
* [2026-01-19, 00:22:00](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss) - [Are You Dead?](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss)
