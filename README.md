# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Developments

* [Google's New AI Video Tool Floods Internet With Real-Looking Clips](https://tech.slashdot.org/story/25/05/23/2240214/googles-new-ai-video-tool-floods-internet-with-real-looking-clips?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google's advanced AI technology is generating hyper-realistic videos, creating new concerns over its potential misuse.

* [People Should Know About the 'Beliefs' LLMs Form About Them While Conversing](https://slashdot.org/story/25/05/24/1946203/people-should-know-about-the-beliefs-llms-form-about-them-while-conversing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discussion on transparency in AI systems and the 'beliefs' large language models develop during interactions.

* [Microsoft Says Its Aurora AI Can Accurately Predict Air Quality, Typhoons](https://news.slashdot.org/story/25/05/23/2023207/microsoft-says-its-aurora-ai-can-accurately-predict-air-quality-typhoons?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft's Aurora AI leads advancements in predictive environmental monitoring.

* [Red Hat Collaborates with SIFive on RISC-V Support, as RHEL 10 Brings AI Assistant and Post-Quantum Security](https://linux.slashdot.org/story/25/05/24/041237/red-hat-collaborates-with-sifive-on-risc-v-support-as-rhel-10-brings-ai-assistant-and-post-quantum-security?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Red Hat introduces new features in RHEL 10, including post-quantum security and AI integration.

* [Meta Is Making Users Who Opted Out of AI Training Opt Out Again](https://soylentnews.org/article.pl?sid=25/05/19/0231252&from=rss) - Meta's controversial policy requires users to renew opt-out preferences for AI data training.

* [Automating Your Job? The Future of AI and Exploit Development](https://www.youtube.com/watch?v=Y1naY3gupRw) - A look at how AI is reshaping workflows and the development of exploits.

## Cybersecurity and Cryptography

* [How Many Qubits Will It Take to Break Secure Public Key Cryptography Algorithms?](https://it.slashdot.org/story/25/05/24/0530234/how-many-qubits-will-it-take-to-break-secure-public-key-cryptography-algorithms?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers speculate on the quantum computing power required to compromise encryption protocols.

* [Tachy0n: The Last 0day Jailbreak](https://blog.siguza.net/tachy0n/) - Detailed analysis of a new zero-day exploit enabling jailbreak.

* [How I used o3 to find CVE-2025-37899, a remote zeroday vulnerability in the Linux kernel’s SMB implementation](https://sean.heelan.io/2025/05/22/how-i-used-o3-to-find-cve-2025-37899-a-remote-zeroday-vulnerability-in-the-linux-kernels-smb-implementation/) - A case study in identifying a critical vulnerability using o3.

* [Exposed Industrial Control Systems and Honeypots in the Wild [pdf]](https://gsmaragd.github.io/publications/EuroSP2025-ICS/EuroSP2025-ICS.pdf) - Report on industrial control system vulnerabilities and using honeypots for security.

* [There is no Diffie-Hellman but Elliptic Curve Diffie-Hellman](https://keymaterial.net/2025/05/23/there-is-no-diffie-hellman-but-elliptic-curve-diffie-hellman/) - Overview of Elliptic Curve Diffie-Hellman and its security implications.

## Entertainment and Lifestyle

* [Amazon Cancels the 'Wheel of Time' Prime Video Series After 3 Seasons](https://entertainment.slashdot.org/story/25/05/24/201246/amazon-cancels-the-wheel-of-time-prime-video-series-after-3-seasons?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Amazon discontinues its adaptation of 'Wheel of Time' after three seasons.

* [Show HN: 1min Workouts for People Who Sit All Day](https://shortreps.com) - A platform offering concise workout routines aimed at sedentary lifestyles.

* [All Living Things Emit Subtle Light Until They Die, Study Suggests](https://soylentnews.org/article.pl?sid=25/05/23/1218209&from=rss) - Fascinating research delves into the subtle light emissions living organisms produce.

* [AI, Heidegger, and Evangelion](https://fakepixels.substack.com/p/ai-heidegger-and-evangelion) - Exploring the philosophical overlaps between AI advancements and the anime series Evangelion.

## Science and Innovation

* [Researchers Build 'The World's Fastest Petahertz Quantum Transistor'. They Predict Lightwave Electronics](https://science.slashdot.org/story/25/05/24/0337249/researchers-build-the-worlds-fastest-petahertz-quantum-transistor-they-predict-lightwave-electronics?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Breakthrough in quantum transistor technology promises lightwave computing possibilities.

* [Bird Feeders Have Caused a Dramatic Evolution of California Hummingbirds](https://science.slashdot.org/story/25/05/24/0213237/bird-feeders-have-caused-a-dramatic-evolution-of-california-hummingbirds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Study highlights the significant role bird feeders play in the evolution of hummingbirds.

* [US Solar Keeps Surging, Generating More Power Than Hydro In 2025](https://hardware.slashdot.org/story/25/05/23/2156217/us-solar-keeps-surging-generating-more-power-than-hydro-in-2025?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Solar energy production outpaces hydroelectric power generation in the US.

* [Live facial recognition cameras may become 'commonplace' as police use soars](https://www.theguardian.com/technology/2025/may/24/police-live-facial-recognition-cameras-england-and-wales) - Expanding use of facial recognition technology by UK police raises privacy concerns.

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

* [2025-05-24, 21:34:00](https://entertainment.slashdot.org/story/25/05/24/201246/amazon-cancels-the-wheel-of-time-prime-video-series-after-3-seasons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Cancels the &apos;Wheel of Time&apos; Prime Video Series After 3 Seasons](https://entertainment.slashdot.org/story/25/05/24/201246/amazon-cancels-the-wheel-of-time-prime-video-series-after-3-seasons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 21:27:02](https://news.ycombinator.com/item?id=44083910) - [Using the Apple ][+ with the RetroTink-5X](https://nicole.express/2025/apple-ii-more-like-apple-5x.html)
* [2025-05-24, 20:52:09](https://lobste.rs/s/2adp0p/there_is_no_diffie_hellman_elliptic_curve) - [There is no Diffie-Hellman but Elliptic Curve Diffie-Hellman](https://keymaterial.net/2025/05/23/there-is-no-diffie-hellman-but-elliptic-curve-diffie-hellman/)
* [2025-05-24, 20:45:00](https://lobste.rs/s/qjol4n/captchas_don_t_work_any_more_for_ticket) - [CAPTCHAs don&apos;t work any more for ticket sellers](https://behind.pretix.eu/2025/05/23/captchas-are-over/)
* [2025-05-24, 20:41:41](https://news.ycombinator.com/item?id=44083687) - [Show HN: 1min Workouts for People Who Sit All Day](https://shortreps.com)
* [2025-05-24, 20:34:00](https://slashdot.org/story/25/05/24/1946203/people-should-know-about-the-beliefs-llms-form-about-them-while-conversing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [People Should Know About the &apos;Beliefs&apos; LLMs Form About Them While Conversing](https://slashdot.org/story/25/05/24/1946203/people-should-know-about-the-beliefs-llms-form-about-them-while-conversing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 20:22:59](https://news.ycombinator.com/item?id=44083580) - [The Logistics of Road War in the Wasteland](https://acoup.blog/2025/05/23/collections-the-logistics-of-road-war-in-the-wasteland/)
* [2025-05-24, 20:05:12](https://news.ycombinator.com/item?id=44083467) - [Reinvent the Wheel](https://endler.dev/2025/reinvent-the-wheel/)
* [2025-05-24, 19:50:41](https://news.ycombinator.com/item?id=44083388) - [Tachy0n: The Last 0day Jailbreak](https://blog.siguza.net/tachy0n/)
* [2025-05-24, 19:48:07](https://lobste.rs/s/wzishi/tachy0n_last_0day_jailbreak) - [tachy0n: The last 0day jailbreak](https://blog.siguza.net/tachy0n/)
* [2025-05-24, 19:34:00](https://it.slashdot.org/story/25/05/24/0530234/how-many-qubits-will-it-take-to-break-secure-public-key-cryptography-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Many Qubits Will It Take to Break Secure Public Key Cryptography Algorithms?](https://it.slashdot.org/story/25/05/24/0530234/how-many-qubits-will-it-take-to-break-secure-public-key-cryptography-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 19:28:42](https://lobste.rs/s/muqrhv/automating_your_job_future_ai_exploit) - [Automating Your Job? The Future of AI and Exploit Development](https://www.youtube.com/watch?v=Y1naY3gupRw)
* [2025-05-24, 19:16:27](https://lobste.rs/s/uvw5lp/how_i_used_o3_find_cve_2025_37899_remote) - [How I used o3 to find CVE-2025-37899, a remote zeroday vulnerability in the Linux kernel’s SMB implementation](https://sean.heelan.io/2025/05/22/how-i-used-o3-to-find-cve-2025-37899-a-remote-zeroday-vulnerability-in-the-linux-kernels-smb-implementation/)
* [2025-05-24, 19:04:42](https://lobste.rs/s/m26z0f/lamber_functional_scripting_language) - [lamber: functional scripting language compiling to Lambda Calculus](https://github.com/aartaka/lamber)
* [2025-05-24, 19:02:00](https://news.ycombinator.com/item?id=44083105) - [What I discovered when I asked Amazon to tell me everything Alexa had heard](https://www.theguardian.com/technology/2025/may/24/what-i-discovered-when-i-asked-amazon-to-tell-me-everything-alexa-had-heard)
* [2025-05-24, 18:52:16](https://lobste.rs/s/w1k7fr/having_your_compile_time_cake_eating_it) - [Having your compile-time cake and eating it too](https://0x44.xyz/blog/comptime-1)
* [2025-05-24, 18:36:48](https://news.ycombinator.com/item?id=44082968) - [Please Fund More Science (2020)](https://blog.samaltman.com/please-fund-more-science)
* [2025-05-24, 18:34:00](https://news.slashdot.org/story/25/05/24/0619227/firefox-creates-a-smarter-simpler-address-bar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Creates &apos;A Smarter, Simpler Address Bar&apos;](https://news.slashdot.org/story/25/05/24/0619227/firefox-creates-a-smarter-simpler-address-bar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 18:24:05](https://news.ycombinator.com/item?id=44082892) - [Lone coder cracks 50-year puzzle to find Boggle&apos;s top-scoring board](https://www.ft.com/content/0ab64ced-1ed1-466d-acd3-78510d10c3a1)
* [2025-05-24, 18:14:43](https://news.ycombinator.com/item?id=44082835) - [Exposed Industrial Control Systems and Honeypots in the Wild [pdf]](https://gsmaragd.github.io/publications/EuroSP2025-ICS/EuroSP2025-ICS.pdf)
* [2025-05-24, 17:54:06](https://lobste.rs/s/worahh/petnames_humane_approach_secure) - [Petnames: A humane approach to secure, decentralized naming](https://files.spritely.institute/papers/petnames.html)
* [2025-05-24, 17:51:49](https://lobste.rs/s/xk3zpc/building_interactive_web_pages_with) - [Building interactive web pages with Guile Hoot](https://spritely.institute/news/building-interactive-web-pages-with-guile-hoot.html)
* [2025-05-24, 17:44:00](https://soylentnews.org/article.pl?sid=25/05/23/1716207&amp;from=rss) - [EU-US Trade War Inevitable](https://soylentnews.org/article.pl?sid=25/05/23/1716207&amp;from=rss)
* [2025-05-24, 17:34:00](https://science.slashdot.org/story/25/05/24/0213237/bird-feeders-have-caused-a-dramatic-evolution-of-california-hummingbirds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bird Feeders Have Caused a Dramatic Evolution of California Hummingbirds](https://science.slashdot.org/story/25/05/24/0213237/bird-feeders-have-caused-a-dramatic-evolution-of-california-hummingbirds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 17:33:16](https://news.ycombinator.com/item?id=44082544) - [Use ramoops for logging under Linux (2021)](https://embear.ch/posts/using-ramoops/)
* [2025-05-24, 17:03:39](https://news.ycombinator.com/item?id=44082326) - [Live facial recognition cameras may become &apos;commonplace&apos; as police use soars](https://www.theguardian.com/technology/2025/may/24/police-live-facial-recognition-cameras-england-and-wales)
* [2025-05-24, 17:01:10](https://news.ycombinator.com/item?id=44082307) - [Trellis (YC W24) Is Hiring founding SDR to help automate healthcare paperwork](https://www.ycombinator.com/companies/trellis/jobs/7Ru1X1P-founding-sdr)
* [2025-05-24, 16:37:06](https://lobste.rs/s/nwqz0u/tale_testability_sending_non_send_types) - [A Tale of Testability and Sending Non-Send Types in Rust](https://geo-ant.github.io/blog/2025/rust-testability-and-non-send-types/)
* [2025-05-24, 16:34:00](https://science.slashdot.org/story/25/05/24/0337249/researchers-build-the-worlds-fastest-petahertz-quantum-transistor-they-predict-lightwave-electronics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Build &apos;The World&apos;s Fastest Petahertz Quantum Transistor&apos;. They Predict Lightwave Electronics](https://science.slashdot.org/story/25/05/24/0337249/researchers-build-the-worlds-fastest-petahertz-quantum-transistor-they-predict-lightwave-electronics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 15:49:12](https://news.ycombinator.com/item?id=44081850) - [Show HN: F2 – Cross-Platform CLI Batch Renaming Tool](https://github.com/ayoisaiah/f2)
* [2025-05-24, 15:34:00](https://ask.slashdot.org/story/25/05/24/0430214/ask-slashdot-do-we-need-opt-out-by-default-privacy-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot:  Do We Need Opt-Out-By-Default Privacy Laws?](https://ask.slashdot.org/story/25/05/24/0430214/ask-slashdot-do-we-need-opt-out-by-default-privacy-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 15:03:37](https://news.ycombinator.com/item?id=44081586) - [Good Writing](https://paulgraham.com/goodwriting.html)
* [2025-05-24, 14:49:14](https://lobste.rs/s/o8zujx/gail_ai_powered_github_issue_labeler) - [gail: An AI-powered GitHub Issue Labeler](https://github.com/atgreen/gail)
* [2025-05-24, 14:34:00](https://linux.slashdot.org/story/25/05/24/041237/red-hat-collaborates-with-sifive-on-risc-v-support-as-rhel-10-brings-ai-assistant-and-post-quantum-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Red Hat Collaborates with SIFive on RISC-V Support, as RHEL 10 Brings AI Assistant and Post-Quantum Security](https://linux.slashdot.org/story/25/05/24/041237/red-hat-collaborates-with-sifive-on-risc-v-support-as-rhel-10-brings-ai-assistant-and-post-quantum-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 14:26:48](https://news.ycombinator.com/item?id=44081346) - [AI, Heidegger, and Evangelion](https://fakepixels.substack.com/p/ai-heidegger-and-evangelion)
* [2025-05-24, 14:25:45](https://news.ycombinator.com/item?id=44081338) - [I used o3 to find a remote zeroday in the Linux SMB implementation](https://sean.heelan.io/2025/05/22/how-i-used-o3-to-find-cve-2025-37899-a-remote-zeroday-vulnerability-in-the-linux-kernels-smb-implementation/)
* [2025-05-24, 13:45:02](https://news.ycombinator.com/item?id=44081081) - [Peer Programming with LLMs, for Senior+ Engineers](https://pmbanugo.me/blog/peer-programming-with-llms)
* [2025-05-24, 13:05:56](https://news.ycombinator.com/item?id=44080820) - [The legacy of the iconic Nakagin capsule tower](https://www.designboom.com/architecture/moma-nakagin-capsule-tower-exhibition-many-lives-museum-modern-art-new-york-05-23-2025/)
* [2025-05-24, 13:03:36](https://news.ycombinator.com/item?id=44080808) - [Show HN: SuperUtilsPlus – A Modern Alternative to Lodash](https://github.com/dhaxor/super-utils-plus)
* [2025-05-24, 13:03:00](https://soylentnews.org/article.pl?sid=25/05/23/1218209&amp;from=rss) - [All Living Things Emit Subtle Light Until They Die, Study Suggests](https://soylentnews.org/article.pl?sid=25/05/23/1218209&amp;from=rss)
* [2025-05-24, 13:02:00](https://news.ycombinator.com/item?id=44080803) - [Show HN: Rotary Phone Dial Linux Kernel Driver](https://gitlab.com/sephalon/rotary_dial_kmod)
* [2025-05-24, 12:08:15](https://news.ycombinator.com/item?id=44080549) - [Hong Kong&apos;s Famous Bamboo Scaffolding Hangs on (For Now)](https://www.nytimes.com/2025/05/24/world/asia/hongkong-bamboo-scaffolding.html)
* [2025-05-24, 12:06:06](https://news.ycombinator.com/item?id=44080533) - [The Xenon Death Flash: How a Camera Nearly Killed the Raspberry Pi 2](https://magnus919.com/2025/05/the-xenon-death-flash-how-a-camera-nearly-killed-the-raspberry-pi-2/)
* [2025-05-24, 11:54:37](https://lobste.rs/s/xxvqs7/pain_dots) - [Pain in the dots](https://matthew-brett.github.io/pydagogue/pain_in_dots.html)
* [2025-05-24, 11:43:52](https://lobste.rs/s/ggrjtg/sandboxing_ai_tools_with_guix_containers) - [Sandboxing AI Tools with Guix Containers](https://200ok.ch/posts/2025-05-23_sandboxing_ai_tools:_how_guix_containers_keep_your_host_safe_while_empowering_llms.html)
* [2025-05-24, 10:00:00](https://games.slashdot.org/story/25/05/23/2248229/valve-adds-steamos-support-for-its-steam-deck-rivals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Adds SteamOS Support For Its Steam Deck Rivals](https://games.slashdot.org/story/25/05/23/2248229/valve-adds-steamos-support-for-its-steam-deck-rivals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 08:20:00](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss) - [In Lawsuit Over Teen&apos;s Death, Judge Rejects Arguments That AI Chatbots Have Free Speech Rights](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss)
* [2025-05-24, 07:52:45](https://lobste.rs/s/2v5n2d/kaleidoscopico) - [Kaleidoscopico](https://www.linusakesson.net/scene/kaleidoscopico/index.php)
* [2025-05-24, 07:04:22](https://lobste.rs/s/r1co0s/why_i_no_longer_have_old_school_cert_on_my) - [Why I no longer have an old-school cert on my https site](https://rachelbythebay.com/w/2025/05/22/ssl/)
* [2025-05-24, 07:00:00](https://tech.slashdot.org/story/25/05/23/2240214/googles-new-ai-video-tool-floods-internet-with-real-looking-clips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s New AI Video Tool Floods Internet With Real-Looking Clips](https://tech.slashdot.org/story/25/05/23/2240214/googles-new-ai-video-tool-floods-internet-with-real-looking-clips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 06:40:35](https://lobste.rs/s/tvi48r/rqlite_turns_10_observations_from_decade) - [rqlite turns 10: Observations from a decade building Distributed Systems](https://philipotoole.com/rqlite-turns-10-lessons-from-a-decade-of-building-distributed-systems/)
* [2025-05-24, 03:36:00](https://soylentnews.org/article.pl?sid=25/05/23/128247&amp;from=rss) - [TSMC&apos;s US Factory Shows the Limits of Reshoring and Tariffs](https://soylentnews.org/article.pl?sid=25/05/23/128247&amp;from=rss)
* [2025-05-24, 03:30:00](https://news.slashdot.org/story/25/05/23/2023207/microsoft-says-its-aurora-ai-can-accurately-predict-air-quality-typhoons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Says Its Aurora AI Can Accurately Predict Air Quality, Typhoons](https://news.slashdot.org/story/25/05/23/2023207/microsoft-says-its-aurora-ai-can-accurately-predict-air-quality-typhoons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 03:00:53](https://news.ycombinator.com/item?id=44078434) - [Why Algebraic Effects?](https://antelang.org/blog/why_effects/)
* [2025-05-24, 00:45:00](https://hardware.slashdot.org/story/25/05/23/2156217/us-solar-keeps-surging-generating-more-power-than-hydro-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Solar Keeps Surging, Generating More Power Than Hydro In 2025](https://hardware.slashdot.org/story/25/05/23/2156217/us-solar-keeps-surging-generating-more-power-than-hydro-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 00:02:00](https://news.slashdot.org/story/25/05/23/2135201/kraken-launches-digital-tokens-to-offer-247-trading-of-us-equities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kraken Launches Digital Tokens To Offer 24/7 Trading of US Equities](https://news.slashdot.org/story/25/05/23/2135201/kraken-launches-digital-tokens-to-offer-247-trading-of-us-equities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 23:28:11](https://news.ycombinator.com/item?id=44077533) - [Root for your friends](https://josephthacker.com/personal/2025/05/13/root-for-your-friends.html)
* [2025-05-23, 23:20:00](https://hardware.slashdot.org/story/25/05/23/2110200/trump-launches-reform-of-nuclear-industry-slashes-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Launches Reform of Nuclear Industry, Slashes Regulation](https://hardware.slashdot.org/story/25/05/23/2110200/trump-launches-reform-of-nuclear-industry-slashes-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 22:58:20](https://lobste.rs/s/4gksax/forgotten_apl_influences_2016) - [Forgotten APL Influences (2016)](https://pok.acm.org/meetings/foils/McGrew18paper.pdf)
* [2025-05-23, 22:49:00](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss) - [High Priority Exploits Fixed in Firefox and Chrome](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss)
* [2025-05-23, 22:40:00](https://mobile.slashdot.org/story/25/05/23/2028229/lidar-can-permanently-damage-your-phones-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lidar Can Permanently Damage Your Phone&apos;s Camera](https://mobile.slashdot.org/story/25/05/23/2028229/lidar-can-permanently-damage-your-phones-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 21:54:50](https://lobste.rs/s/eo8eww/gcc_compiler_backend_can_now_fully) - [The GCC compiler backend can now fully bootstrap the Rust compiler](https://old.reddit.com/r/rust/comments/1ktph3c/media_the_gcc_compiler_backend_can_now_fully)
* [2025-05-23, 19:47:49](https://lobste.rs/s/unlqyd/nixos_25_05_released) - [NixOS 25.05 released](https://nixos.org/blog/announcements/2025/nixos-2505/)
* [2025-05-23, 19:04:33](https://lobste.rs/s/fgvbsc/why_algebraic_effects) - [Why Algebraic Effects?](https://antelang.org/blog/why_effects/)
* [2025-05-23, 18:14:57](https://lobste.rs/s/b56ikw/configuring_jujutsu) - [Configuring Jujutsu](https://oppi.li/posts/configuring_jujutsu/)
* [2025-05-23, 18:00:00](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss) - [A Nasa Mars Rover Looked Up At A Moody Sky. What It Saw Wasn&apos;t A Star. ](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss)
* [2025-05-23, 16:02:02](https://news.ycombinator.com/item?id=44074017) - [Find Your People](https://foundersatwork.posthaven.com/find-your-people)
* [2025-05-23, 15:12:44](https://news.ycombinator.com/item?id=44073588) - [Postgres IDE in VS Code](https://techcommunity.microsoft.com/blog/adforpostgresql/announcing-a-new-ide-for-postgresql-in-vs-code-from-microsoft/4414648)
* [2025-05-23, 14:30:58](https://lobste.rs/s/y94ihs/making_postgres_distributed_with) - [Making Postgres distributed with FoundationDB](https://fabianlindfors.se/blog/making-postgres-distributed/)
* [2025-05-23, 14:30:21](https://lobste.rs/s/faowua/spaced_repetition_systems_have_gotten) - [Spaced Repetition Systems Have Gotten Way Better](https://domenic.me/fsrs/)
* [2025-05-23, 13:55:13](https://lobste.rs/s/njfzwx/future_flatpak) - [The future of Flatpak](https://lwn.net/Articles/1020571/)
* [2025-05-23, 13:17:00](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss) - [The US Has a New Most-Powerful Laser](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss)
* [2025-05-23, 11:31:18](https://lobste.rs/s/stplv5/announcing_typescript_native_previews) - [Announcing TypeScript Native Previews](https://devblogs.microsoft.com/typescript/announcing-typescript-native-previews/)
* [2025-05-23, 08:32:00](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss) - [Police Secretly Monitored New Orleans With Facial Recognition Cameras](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss)
* [2025-05-23, 03:45:00](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss) - [UK Farmers Pray For Rain Amid Driest Spring Since 1852](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss)
* [2025-05-22, 23:06:00](https://soylentnews.org/article.pl?sid=25/05/22/012214&amp;from=rss) - [A Look at OpenAI From 2019](https://soylentnews.org/article.pl?sid=25/05/22/012214&amp;from=rss)
* [2025-05-22, 18:20:00](https://soylentnews.org/article.pl?sid=25/05/22/0059205&amp;from=rss) - [Bill Tries to End Supersonic Speed Limits in the US Skies](https://soylentnews.org/article.pl?sid=25/05/22/0059205&amp;from=rss)
* [2025-05-22, 16:11:57](https://news.ycombinator.com/item?id=44063477) - [The Last Nomads](https://www.thedial.world/articles/news/issue-28/georgia-adjara-highlands-nomads)
* [2025-05-22, 13:35:00](https://soylentnews.org/article.pl?sid=25/05/21/1543207&amp;from=rss) - [Chicago Sun-Times Prints Summer Reading List Full of Fake Books](https://soylentnews.org/article.pl?sid=25/05/21/1543207&amp;from=rss)
* [2025-05-22, 08:42:00](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss) - [Italy Fines Thousands as Crackdown on Pirate IPTV Targets Viewers](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss)
* [2025-05-22, 06:19:52](https://news.ycombinator.com/item?id=44059270) - [voyage-3.5 and voyage-3.5-lite: improved quality for a new retrieval frontier](https://blog.voyageai.com/2025/05/20/voyage-3-5/)
* [2025-05-22, 03:59:00](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss) - [Laser-Powered Fusion Experiment More Than Doubles its Power Output](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss)
* [2025-05-21, 23:11:00](https://soylentnews.org/article.pl?sid=25/05/21/127244&amp;from=rss) - [Opinion: Unending Ransomware Attacks Are a Symptom, Not the Illness](https://soylentnews.org/article.pl?sid=25/05/21/127244&amp;from=rss)
* [2025-05-21, 18:29:00](https://soylentnews.org/article.pl?sid=25/05/21/1154206&amp;from=rss) - [\&quot;Big Surprise\&quot;: Astronomers Find Planet in Perpendicular Orbit Around Pair of Stars](https://soylentnews.org/article.pl?sid=25/05/21/1154206&amp;from=rss)
* [2025-05-21, 16:21:04](https://news.ycombinator.com/item?id=44053110) - [Solving the mystery of a dinosaur mass grave at the &apos;River of Death&apos;](https://www.bbc.com/news/articles/c0k3x8lmje1o)
* [2025-05-21, 13:42:00](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss) - [Annual Tech Waste Footprint Per Person is 11.2 Kg](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss)
* [2025-05-21, 10:22:08](https://news.ycombinator.com/item?id=44049965) - [Is Astrophotography Without Tracking Possible?](https://astroimagery.com/astrophotography/heres-how-to-do-astrophotography-without-tracking/)
* [2025-05-21, 08:58:00](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss) - [Apple is Developing Tech So Users Can Control Devices With Only Their Thoughts](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss)
* [2025-05-21, 04:14:00](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss) - [AWS Claims That Britain Needs More Nuclear Power for AI Datacenters](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss)
* [2025-05-20, 23:27:00](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss) - [New Intel CPU Flaws Leak Sensitive Data From Privileged Memory](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss)
* [2025-05-20, 20:30:00](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss) - [UK-To-US English Converter Produced Amazing Mistakes](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss)
* [2025-05-20, 18:45:00](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss) - [Unlocking Voices: AR For Nonverbal Autism](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss)
* [2025-05-20, 14:00:00](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss) - [Regeneron to Buy 23andMe Out of Bankruptcy for $256 Million](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss)
* [2025-05-20, 09:16:00](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss) - [Space Computing Satellite Constellation Launched into Orbit](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss)
* [2025-05-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss) - [Meta Is Making Users Who Opted Out of AI Training Opt Out Again](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss)
