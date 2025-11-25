# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI Developments

* [AI Could Replace 3 Million Low-Skilled Jobs in the UK By 2035, Research Warns](https://news.slashdot.org/story/25/11/25/193251/ai-could-replace-3-million-low-skilled-jobs-in-the-uk-by-2035-research-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Ilya Sutskever: We're Moving from the Age of Scaling to the Age of Research](https://www.dwarkesh.com/p/ilya-sutskever-2)

* [Auditing JDBC Drivers at Scale with AI Led to $85000 Bounty](https://www.hacktron.ai/blog/jdbc-audit-at-scale)

* [PRC Elites Voice AI-Skepticism](https://jamestown.org/prc-elites-voice-ai-skepticism/)

## Cybersecurity Concerns

* [US Banks Scramble to Assess Data Theft After Hackers Breach Financial Tech Firm](https://news.slashdot.org/story/25/11/25/2138249/us-banks-scramble-to-assess-data-theft-after-hackers-breach-financial-tech-firm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [CISA Warns Spyware Crews Are Breaking Into Signal and WhatsApp Accounts](https://yro.slashdot.org/story/25/11/25/1816245/cisa-warns-spyware-crews-are-breaking-into-signal-and-whatsapp-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Google Chrome Bug Exploited as an 0-Day - Patch Now or Risk Full System Compromise](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss)

## Scientific and Environmental Insights

* [Evidence from the One Laptop Per Child Program in Rural Peru](https://tech.slashdot.org/story/25/11/25/1642202/evidence-from-the-one-laptop-per-child-program-in-rural-peru?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss)

* [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss)

## Innovative Projects and Tools

* [Unison 1.0](https://www.unison-lang.org/unison-1-0/)

* [Show HN: We Built an Open Source, Zero Webhooks Payment Processor](https://github.com/flowglad/flowglad)

* [How to Repurpose Your Old Phone’s GPS Modem Into a Web Server](https://blog.nns.ee/2021/04/01/modem-blog)

* [Constant-Time Support Lands in LLVM: Protecting Cryptographic Code at the Compiler Level](https://blog.trailofbits.com/2025/11/25/constant-time-support-lands-in-llvm-protecting-cryptographic-code-at-the-compiler-level/)

* [World's Most Stable Raspberry Pi? 81% Better NTP With Thermal Management](https://austinsnerdythings.com/2025/11/24/worlds-most-stable-raspberry-pi-81-better-ntp-with-thermal-management/)

## Cultural and Historical Highlights

* [Jakarta Moves Ahead of Tokyo As World's Most Populated City](https://news.slashdot.org/story/25/11/25/1820249/jakarta-moves-ahead-of-tokyo-as-worlds-most-populated-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Ring’s New Feature Turns Your Doorbell Into a Biometric Spy](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss)

* [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss)

* [Magician Forgets Password to His Own Hand After RFID Chip Implant](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss)

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

* [2025-11-25, 22:00:00](https://news.slashdot.org/story/25/11/25/2138249/us-banks-scramble-to-assess-data-theft-after-hackers-breach-financial-tech-firm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Banks Scramble To Assess Data Theft After Hackers Breach Financial Tech Firm](https://news.slashdot.org/story/25/11/25/2138249/us-banks-scramble-to-assess-data-theft-after-hackers-breach-financial-tech-firm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 21:22:00](https://news.slashdot.org/story/25/11/25/193251/ai-could-replace-3-million-low-skilled-jobs-in-the-uk-by-2035-research-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Could Replace 3 Million Low-Skilled Jobs in the UK By 2035, Research Warns](https://news.slashdot.org/story/25/11/25/193251/ai-could-replace-3-million-low-skilled-jobs-in-the-uk-by-2035-research-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 20:41:00](https://news.slashdot.org/story/25/11/25/1842246/american-influencers-cant-stop-praising-chinese-evs-they-cant-buy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [American Influencers Can&apos;t Stop Praising Chinese EVs They Can&apos;t Buy](https://news.slashdot.org/story/25/11/25/1842246/american-influencers-cant-stop-praising-chinese-evs-they-cant-buy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 20:01:00](https://news.slashdot.org/story/25/11/25/1827251/realpage-agrees-to-settle-federal-rent-collusion-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [RealPage Agrees To Settle Federal Rent-Collusion Case](https://news.slashdot.org/story/25/11/25/1827251/realpage-agrees-to-settle-federal-rent-collusion-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 19:58:10](https://news.ycombinator.com/item?id=46049981) - [How to repurpose your old phone&apos;s GPS modem into a web server](https://blog.nns.ee/2021/04/01/modem-blog)
* [2025-11-25, 19:53:20](https://news.ycombinator.com/item?id=46049932) - [A new bridge links the math of infinity to computer science](https://www.quantamagazine.org/a-new-bridge-links-the-strange-math-of-infinity-to-computer-science-20251121/)
* [2025-11-25, 19:40:40](https://lobste.rs/s/0rvqxt/look_at_rust_from_2012) - [A look at Rust from 2012](https://purplesyringa.moe/blog/a-look-at-rust-from-2012/)
* [2025-11-25, 19:33:00](https://news.ycombinator.com/item?id=46049722) - [Unison 1.0](https://www.unison-lang.org/unison-1-0/)
* [2025-11-25, 19:26:40](https://lobste.rs/s/ykoj5k/announcing_unison_1_0) - [Announcing Unison 1.0](https://www.unison-lang.org/unison-1-0/)
* [2025-11-25, 19:23:04](https://news.ycombinator.com/item?id=46049624) - [IQ differences of identical twins reared apart are influenced by education](https://www.sciencedirect.com/science/article/pii/S0001691825003853)
* [2025-11-25, 19:21:00](https://news.slashdot.org/story/25/11/25/1820249/jakarta-moves-ahead-of-tokyo-as-worlds-most-populated-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jakarta Moves Ahead of Tokyo As World&apos;s Most Populated City](https://news.slashdot.org/story/25/11/25/1820249/jakarta-moves-ahead-of-tokyo-as-worlds-most-populated-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 18:41:00](https://yro.slashdot.org/story/25/11/25/1816245/cisa-warns-spyware-crews-are-breaking-into-signal-and-whatsapp-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CISA Warns Spyware Crews Are Breaking Into Signal and WhatsApp Accounts](https://yro.slashdot.org/story/25/11/25/1816245/cisa-warns-spyware-crews-are-breaking-into-signal-and-whatsapp-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 18:36:10](https://news.ycombinator.com/item?id=46049066) - [Bad UX World Cup 2025](https://badux.lol/)
* [2025-11-25, 18:31:16](https://news.ycombinator.com/item?id=46048996) - [Google Antigravity exfiltrates data via indirect prompt injection attack](https://www.promptarmor.com/resources/google-antigravity-exfiltrates-data)
* [2025-11-25, 18:12:00](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss) - [In 1982, a Physics Joke Gone Wrong Sparked the Invention of the Emoticon](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss)
* [2025-11-25, 18:01:00](https://hardware.slashdot.org/story/25/11/25/175213/mumbai-families-suffer-as-data-centers-keep-the-city-hooked-on-coal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mumbai Families Suffer As Data Centers Keep the City Hooked on Coal](https://hardware.slashdot.org/story/25/11/25/175213/mumbai-families-suffer-as-data-centers-keep-the-city-hooked-on-coal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 17:57:20](https://lobste.rs/s/ll7jys/whatsapp_from_you_know_where) - [WhatsApp from you know where](https://xenodium.com/whatsapp-from-you-know-where)
* [2025-11-25, 17:47:05](https://lobste.rs/s/8inolx/we_rewrote_our_startup_from_php_gleam_3) - [We Rewrote Our Startup from PHP to Gleam in 3 Weeks](https://www.radical-elements.com/minor-epiphanies/we-rewrote-our-startup-from-php-to-gleam-in-3-weeks)
* [2025-11-25, 17:33:50](https://news.ycombinator.com/item?id=46048252) - [Show HN: We built an open source, zero webhooks payment processor](https://github.com/flowglad/flowglad)
* [2025-11-25, 17:28:00](https://slashdot.org/story/25/11/25/1728213/nvidia-claims-generation-ahead-advantage-after-200-billion-sell-off-on-google-fears?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Claims &apos;Generation Ahead&apos; Advantage After $200 Billion Sell-off on Google Fears](https://slashdot.org/story/25/11/25/1728213/nvidia-claims-generation-ahead-advantage-after-200-billion-sell-off-on-google-fears?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 17:21:52](https://news.ycombinator.com/item?id=46048125) - [Ilya Sutskever: We&apos;re moving from the age of scaling to the age of research](https://www.dwarkesh.com/p/ilya-sutskever-2)
* [2025-11-25, 17:16:15](https://lobste.rs/s/gbjsmn/how_draw_high_fidelity_graphics_when_all) - [How to draw high fidelity graphics when all you have is an x and y coordinate](https://www.makingsoftware.com/chapters/shaders)
* [2025-11-25, 17:08:49](https://news.ycombinator.com/item?id=46047980) - [US banks scramble to assess data theft after hackers breach financial tech firm](https://techcrunch.com/2025/11/24/us-banks-scramble-to-assess-data-theft-after-hackers-breach-financial-tech-firm/)
* [2025-11-25, 17:07:06](https://news.ycombinator.com/item?id=46047958) - [Unifying our mobile and desktop domains](https://techblog.wikimedia.org/2025/11/21/unifying-mobile-and-desktop-domains/)
* [2025-11-25, 17:05:43](https://lobste.rs/s/iq1zrm/unifying_wikipedia_mobile_desktop) - [Unifying Wikipedia mobile and desktop domains](https://techblog.wikimedia.org/2025/11/21/unifying-mobile-and-desktop-domains/)
* [2025-11-25, 16:42:00](https://tech.slashdot.org/story/25/11/25/1642202/evidence-from-the-one-laptop-per-child-program-in-rural-peru?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Evidence from the One Laptop per Child Program in Rural Peru](https://tech.slashdot.org/story/25/11/25/1642202/evidence-from-the-one-laptop-per-child-program-in-rural-peru?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 16:39:23](https://lobste.rs/s/igvnnq/stop_telling_us_xmpp_should_use_json) - [Stop Telling Us XMPP Should Use JSON](https://www.process-one.net/blog/stop-telling-us-xmpp-should-use-json/)
* [2025-11-25, 16:38:57](https://news.ycombinator.com/item?id=46047580) - [Python is not a great language for data science](https://blog.genesmindsmachines.com/p/python-is-not-a-great-language-for)
* [2025-11-25, 16:34:08](https://news.ycombinator.com/item?id=46047513) - [Ozempic does not slow Alzheimer&apos;s, study finds](https://www.semafor.com/article/11/25/2025/ozempic-does-not-slow-alzheimers-study-finds)
* [2025-11-25, 16:21:24](https://news.ycombinator.com/item?id=46047350) - [Orion 1.0](https://blog.kagi.com/orion)
* [2025-11-25, 16:17:55](https://lobste.rs/s/qfsjp9/mobile_browsers_see_telephone_numbers) - [Mobile browsers see telephone numbers everywhere](https://sethmlarson.dev/mobile-browsers-and-telephone-numbers)
* [2025-11-25, 16:13:54](https://lobste.rs/s/90inaz/orion_1_0) - [Orion 1.0](https://blog.kagi.com/orion)
* [2025-11-25, 16:12:22](https://news.ycombinator.com/item?id=46047229) - [Roblox is a problem but it&apos;s a symptom of something worse](https://www.platformer.news/roblox-ceo-interview-backlash-analysis/)
* [2025-11-25, 16:08:00](https://science.slashdot.org/story/25/11/25/168211/adolescence-lasts-into-30s---new-study-shows-four-pivotal-ages-for-your-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adolescence Lasts Into 30s - New Study Shows Four Pivotal Ages For Your Brain](https://science.slashdot.org/story/25/11/25/168211/adolescence-lasts-into-30s---new-study-shows-four-pivotal-ages-for-your-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 15:47:14](https://news.ycombinator.com/item?id=46046916) - [FLUX.2: Frontier Visual Intelligence](https://bfl.ai/blog/flux-2)
* [2025-11-25, 15:21:00](https://hardware.slashdot.org/story/25/11/25/1511242/unpowered-ssds-in-your-drawer-are-slowly-losing-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Unpowered SSDs in Your Drawer Are Slowly Losing Data](https://hardware.slashdot.org/story/25/11/25/1511242/unpowered-ssds-in-your-drawer-are-slowly-losing-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 14:57:45](https://lobste.rs/s/2zlrjv/ai_smells_on_medium) - [AI Smells on Medium](https://rmoff.net/2025/11/25/ai-smells-on-medium/)
* [2025-11-25, 14:46:00](https://apple.slashdot.org/story/25/11/25/1446250/singapore-orders-apple-google-to-prevent-government-spoofing-on-messaging-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Singapore Orders Apple, Google To Prevent Government Spoofing on Messaging Platforms](https://apple.slashdot.org/story/25/11/25/1446250/singapore-orders-apple-google-to-prevent-government-spoofing-on-messaging-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 14:42:27](https://lobste.rs/s/qzrous/promise_p_graphs) - [The Promise of P-Graphs](https://pavpanchekha.com/blog/p-graphs.html)
* [2025-11-25, 14:39:51](https://lobste.rs/s/jgzpxs/towards_pen_paper_style_equational) - [Towards Pen-and-Paper-Style Equational Reasoning in Interactive Theorem Provers by Equality Saturation](https://steuwer.info/files/publications/2026/POPL-Lean-Egg.pdf)
* [2025-11-25, 14:26:14](https://lobste.rs/s/pcv94o/what_does_it_mean_be_massively_against_ai) - [What does it mean to be massively against AI?](https://pythonbynight.com/blog/massively-against-ai)
* [2025-11-25, 14:20:30](https://news.ycombinator.com/item?id=46045987) - [Launch HN: Onyx (YC W24) – Open-source chat UI](https://news.ycombinator.com/item?id=46045987)
* [2025-11-25, 14:16:22](https://lobste.rs/s/jcjp34/apt_rust_requirement_raises_questions) - [APT Rust requirement raises questions](https://lwn.net/SubscriberLink/1046841/5bbf1fc049a18947/)
* [2025-11-25, 14:03:08](https://lobste.rs/s/occlzx/constant_time_support_lands_llvm) - [Constant-time support lands in LLVM: Protecting cryptographic code at the compiler level](https://blog.trailofbits.com/2025/11/25/constant-time-support-lands-in-llvm-protecting-cryptographic-code-at-the-compiler-level/)
* [2025-11-25, 14:00:00](https://tech.slashdot.org/story/25/11/25/140253/microsoft-to-preload-file-explorer-in-background-for-faster-launch-in-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft To Preload File Explorer in Background For Faster Launch in Windows 11](https://tech.slashdot.org/story/25/11/25/140253/microsoft-to-preload-file-explorer-in-background-for-faster-launch-in-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 13:28:00](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss) - [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss)
* [2025-11-25, 13:02:06](https://news.ycombinator.com/item?id=46045385) - [Constant-time support coming to LLVM: Protecting cryptographic code](https://blog.trailofbits.com/2025/11/25/constant-time-support-coming-to-llvm-protecting-cryptographic-code-at-the-compiler-level/)
* [2025-11-25, 13:00:00](https://hardware.slashdot.org/story/25/11/25/0257209/lenovo-stockpiling-pc-memory-due-to-unprecedented-ai-squeeze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lenovo Stockpiling PC Memory Due To &apos;Unprecedented&apos; AI Squeeze](https://hardware.slashdot.org/story/25/11/25/0257209/lenovo-stockpiling-pc-memory-due-to-unprecedented-ai-squeeze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 12:18:19](https://lobste.rs/s/6zjgo7/hp_dell_disable_hevc_support_built_into) - [HP and Dell disable HEVC support built into their laptops’ CPUs](https://arstechnica.com/gadgets/2025/11/hp-and-dell-disable-hevc-support-built-into-their-laptops-cpus/)
* [2025-11-25, 12:14:11](https://news.ycombinator.com/item?id=46045085) - [Trillions spent and big software projects are still failing](https://spectrum.ieee.org/it-management-software-failures)
* [2025-11-25, 12:05:39](https://news.ycombinator.com/item?id=46045039) - [Making Crash Bandicoot (2011)](https://all-things-andy-gavin.com/video-games/making-crash/)
* [2025-11-25, 11:36:07](https://lobste.rs/s/solqpi/how_good_are_chinese_cpus_benchmarking) - [How good are Chinese CPUs? Benchmarking the Loongson 3A6000](https://lemire.me/blog/2025/11/23/how-good-are-chinese-cpus-benchmarking-the-loongson-3a6000/)
* [2025-11-25, 10:00:00](https://news.slashdot.org/story/25/11/25/0252230/epa-approves-new-forever-chemical-pesticides-for-use-on-food?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EPA Approves New &apos;Forever Chemical&apos; Pesticides For Use On Food](https://news.slashdot.org/story/25/11/25/0252230/epa-approves-new-forever-chemical-pesticides-for-use-on-food?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 09:31:45](https://lobste.rs/s/hzvyyv/lambda_papers_transcribed) - [The Lambda Papers (transcribed)](https://research.scheme.org/)
* [2025-11-25, 08:41:00](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss) - [I Set a Trap to Catch My Students Cheating With AI and the Results Were Shocking](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss)
* [2025-11-25, 07:58:27](https://lobste.rs/s/d4dvnk/emacs_for_code_editing) - [emacs for code editing](https://redpenguin101.github.io/html/posts/2025_11_23_emacs_for_code_editing.html)
* [2025-11-25, 06:35:59](https://news.ycombinator.com/item?id=46042946) - [Most Stable Raspberry Pi? Better NTP with Thermal Management](https://austinsnerdythings.com/2025/11/24/worlds-most-stable-raspberry-pi-81-better-ntp-with-thermal-management/)
* [2025-11-25, 06:32:57](https://lobste.rs/s/w05xid/world_s_most_stable_raspberry_pi_81_better) - [World&apos;s Most Stable Raspberry Pi? 81% Better NTP with Thermal Management](https://austinsnerdythings.com/2025/11/24/worlds-most-stable-raspberry-pi-81-better-ntp-with-thermal-management/)
* [2025-11-25, 06:31:31](https://news.ycombinator.com/item?id=46042928) - [Human brains are preconfigured with instructions for understanding the world](https://news.ucsc.edu/2025/11/sharf-preconfigured-brain/)
* [2025-11-25, 06:09:05](https://news.ycombinator.com/item?id=46042810) - [Jakarta is now the biggest city in the world](https://www.axios.com/2025/11/24/jakarta-tokyo-worlds-biggest-city-population)
* [2025-11-25, 05:17:10](https://lobste.rs/s/p9umds/memories_us) - [memories of .us](https://computer.rip/2025-11-11-dot-us.html)
* [2025-11-25, 04:00:00](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss) - [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss)
* [2025-11-24, 23:19:06](https://lobste.rs/s/rl1r8m/rubee) - [RuBee](https://computer.rip/2025-11-22-RuBee.html)
* [2025-11-24, 23:16:00](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss) - [Ring&apos;s New Feature Turns Your Doorbell Into a Biometric Spy](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss)
* [2025-11-24, 19:50:47](https://news.ycombinator.com/item?id=46038417) - [PRC elites voice AI-skepticism](https://jamestown.org/prc-elites-voice-ai-skepticism/)
* [2025-11-24, 19:25:25](https://news.ycombinator.com/item?id=46038099) - [Unpowered SSDs slowly lose data](https://www.xda-developers.com/your-unpowered-ssd-is-slowly-losing-your-data/)
* [2025-11-24, 19:21:35](https://news.ycombinator.com/item?id=46038047) - [Claude Advanced Tool Use](https://www.anthropic.com/engineering/advanced-tool-use)
* [2025-11-24, 18:27:00](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss) - [Thieves Want Your iPhone, Not Your Android](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss)
* [2025-11-24, 13:42:00](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss) - [Magician Forgets Password to His Own Hand After RFID Chip Implant](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss)
* [2025-11-24, 09:50:20](https://lobste.rs/s/jn95w0/edn_c_fast_zero_copy_edn_extensible_data) - [edn.c: A fast, zero-copy EDN (Extensible Data Notation) reader written in C11 with SIMD acceleration](https://github.com/DotFox/edn.c)
* [2025-11-24, 09:38:48](https://lobste.rs/s/fjf1eh/fifty_shades_oop) - [Fifty Shades of OOP](https://lesleylai.info/en/fifty_shades_of_oop/)
* [2025-11-24, 09:27:56](https://lobste.rs/s/hcjaj0/why_i_still_love_linux) - [Why I (still) love Linux](https://it-notes.dragas.net/2025/11/24/why-i-still-love-linux/)
* [2025-11-24, 08:53:00](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss) - [First-Ever Full Earth System Simulation Provides New Tool to Understand Climate Change](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss)
* [2025-11-24, 04:09:00](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss) - [Debian Libre Live Images Released for Software Freedom Lovers](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss)
* [2025-11-23, 23:26:00](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss) - [US Gives Local Police a Face-Scanning App Similar to One Used by ICE Agents](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss)
* [2025-11-23, 18:36:00](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss) - [U.S. Spy Agency Releases Amelia Earhart Records](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss)
* [2025-11-23, 13:52:00](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss) - [Maybe That&apos;s Not Liquid Water on Mars After All](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss)
* [2025-11-23, 09:10:00](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss) - [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss)
* [2025-11-23, 04:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss) - [Mercury Pollution in Marine Mammals is Increasing, New Study Finds](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss)
* [2025-11-22, 23:41:00](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss) - [Icelandic is in Danger of Dying Out Because of AI and English-Language Media, Says Former PM](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss)
* [2025-11-22, 18:58:00](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss) - [First Large-Scale VR Use in the Classroom Extends the Boundaries of Education](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss)
* [2025-11-22, 18:16:59](https://news.ycombinator.com/item?id=46016902) - [how to repurpose your old phone into a web server](https://far.computer/how-to/)
* [2025-11-22, 14:09:00](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss) - [Microsoft Warns its New “AI” Agents in Windows Can Install Malware](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss)
* [2025-11-22, 09:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss) - [\&quot;Walk My AI Walk\&quot;, a #1 AI Country Song](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss)
* [2025-11-22, 04:42:00](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss) - [Join the the Newest Social Network and Party Like its 1987](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss)
* [2025-11-22, 03:08:28](https://news.ycombinator.com/item?id=46011712) - [Auditing JDBC Drivers at Scale with AI led to 85000 bounty](https://www.hacktron.ai/blog/jdbc-audit-at-scale)
* [2025-11-21, 23:54:00](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss) - [Kaspersky Antivirus is Now Available for Linux. Will You Use It?](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss)
* [2025-11-21, 19:10:00](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss) - [Google Chrome Bug Exploited as an 0-Day - Patch Now or Risk Full System Compromise](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss)
* [2025-11-21, 14:23:00](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss) - [China Cuts Open New Robot on Stage to Prove Authenticity](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss)
* [2025-11-21, 13:42:33](https://news.ycombinator.com/item?id=46004519) - [Inflatable Space Stations](https://worksinprogress.co/issue/inflatable-space-stations/)
* [2025-11-21, 10:54:15](https://news.ycombinator.com/item?id=46003271) - [The 101 of analog signal filtering (2024)](https://lcamtuf.substack.com/p/the-101-of-analog-signal-filtering)
* [2025-11-21, 09:34:00](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss) - [Needy Software](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss)
* [2025-11-21, 04:45:00](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss) - [Software Developers Show Less Constructive Scepticism When Using AI Assistants](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss)
* [2025-11-21, 00:07:00](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss) - [Is Perplexity the First AI Unicorn to Fail?](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss)
