# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements and Challenges in Artificial Intelligence

* [AI Could Replace 3 Million Low-Skilled Jobs in the UK By 2035, Research Warns](https://news.slashdot.org/story/25/11/25/193251/ai-could-replace-3-million-low-skilled-jobs-in-the-uk-by-2035-research-warns?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Microsoft Warns its New “AI” Agents in Windows Can Install Malware](https://soylentnews.org/article.pl?sid=25/11/21/1211233&from=rss)

* [“Walk My AI Walk”, a #1 AI Country Song](https://soylentnews.org/article.pl?sid=25/11/21/1346236&from=rss)

* [Warner Music Group Partners With Suno To Offer AI Likenesses of Its Artists](https://yro.slashdot.org/story/25/11/25/2240236/warner-music-group-partners-with-suno-to-offer-ai-likenesses-of-its-artists?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Breakthroughs in Science and Technology

* [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&from=rss)

* [Constant-time support lands in LLVM: Protecting cryptographic code at the compiler level](https://blog.trailofbits.com/2025/11/25/constant-time-support-lands-in-llvm-protecting-cryptographic-code-at-the-compiler-level/)

* [HP and Dell disable HEVC support built into their laptops’ CPUs](https://arstechnica.com/gadgets/2025/11/hp-and-dell-disable-hevc-support-built-into-their-laptops-cpus/)

* [The Lambda Papers (transcribed)](https://research.scheme.org/)

## Cybersecurity Alerts and Privacy Concerns

* [CISA Warns Spyware Crews Are Breaking Into Signal and WhatsApp Accounts](https://yro.slashdot.org/story/25/11/25/1816245/cisa-warns-spyware-crews-are-breaking-into-signal-and-whatsapp-accounts?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Poland Probes Apple Again Over App Tracking Transparency Rules](https://apple.slashdot.org/story/25/11/25/227255/poland-probes-apple-again-over-app-tracking-transparency-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [US Banks Scramble To Assess Data Theft After Hackers Breach Financial Tech Firm](https://news.slashdot.org/story/25/11/25/2138249/us-banks-scramble-to-assess-data-theft-after-hackers-breach-financial-tech-firm?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Environmental Impacts and Energy Innovations

* [Britain Plots Atomic Reboot As Datacenter Demand Surges](https://news.slashdot.org/story/25/11/25/231251/britain-plots-atomic-reboot-as-datacenter-demand-surges?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Mumbai Families Suffer As Data Centers Keep the City Hooked on Coal](https://hardware.slashdot.org/story/25/11/25/175213/mumbai-families-suffer-as-data-centers-keep-the-city-hooked-on-coal?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Jakarta Moves Ahead of Tokyo As World’s Most Populated City](https://news.slashdot.org/story/25/11/25/1820249/jakarta-moves-ahead-of-tokyo-as-worlds-most-populated-city?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Unique Historical and Cultural Revelations

* [1,700-year-old Roman sarcophagus is unearthed in Budapest](https://apnews.com/article/hungary-roman-sarcophagus-discovery-budapest-77a41fe190bbcc167b43d05141536f54)

* [Mercury Pollution in Marine Mammals is Increasing, New Study Finds](https://soylentnews.org/article.pl?sid=25/11/21/1957207&from=rss)

* [Magician Forgets Password to His Own Hand After RFID Chip Implant](https://soylentnews.org/article.pl?sid=25/11/23/0254204&from=rss)

## Open Source and Developer Tools

* [Show HN: We built an open source, zero webhooks payment processor](https://github.com/flowglad/flowglad)

* [What They Don’t Tell You About Maintaining an Open Source Project](https://andrej.sh/blog/maintaining-open-source-project/)

* [Reinventing how .NET builds and ships (again)](https://devblogs.microsoft.com/dotnet/reinventing-how-dotnet-builds-and-ships-again/)

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

* [2025-11-26, 03:30:00](https://news.slashdot.org/story/25/11/25/231251/britain-plots-atomic-reboot-as-datacenter-demand-surges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Britain Plots Atomic Reboot As Datacenter Demand Surges](https://news.slashdot.org/story/25/11/25/231251/britain-plots-atomic-reboot-as-datacenter-demand-surges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 03:05:29](https://news.ycombinator.com/item?id=46053787) - [The myth of reflected power (2017)](https://www.iz2uuf.net/wp/index.php/2017/07/29/the-myth-of-reflected-power/)
* [2025-11-26, 02:31:41](https://news.ycombinator.com/item?id=46053566) - [Space Truckin&apos; – The Nostromo (2012)](https://alienseries.wordpress.com/2012/10/23/space-truckin-the-nostromo/)
* [2025-11-26, 02:09:34](https://lobste.rs/s/q5vjlh/is_this_coregraphics_framework_bug_macos) - [Is this a CoreGraphics Framework Bug in macOS Tahoe?](https://lgug2z.com/articles/is-this-a-coregraphics-framework-bug-in-macos-tahoe/)
* [2025-11-26, 02:05:36](https://news.ycombinator.com/item?id=46053385) - [Show HN: A WordPress plugin that rewrites image URLs for near-zero-cost delivery](https://wordpress.org/plugins/bandwidth-saver/)
* [2025-11-26, 02:02:00](https://entertainment.slashdot.org/story/25/11/25/239252/plex-is-now-enforcing-remote-play-restrictions-on-tvs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Plex Is Now Enforcing Remote Play Restrictions On TVs](https://entertainment.slashdot.org/story/25/11/25/239252/plex-is-now-enforcing-remote-play-restrictions-on-tvs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 01:51:26](https://news.ycombinator.com/item?id=46053262) - [BebboSSH: SSH2 implementation for Amiga systems (68000, GPLv3)](https://franke.ms/git/bebbo/bebbossh)
* [2025-11-26, 01:25:00](https://slashdot.org/story/25/11/25/2319238/hp-to-cut-about-6000-jobs-by-2028-ramps-up-ai-efforts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HP To Cut About 6,000 Jobs By 2028, Ramps Up AI Efforts](https://slashdot.org/story/25/11/25/2319238/hp-to-cut-about-6000-jobs-by-2028-ramps-up-ai-efforts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 01:19:17](https://news.ycombinator.com/item?id=46053017) - [Space: 1999 – Special Effects Techniques](https://catacombs.space1999.net/main/pguide/upsfx.html)
* [2025-11-26, 00:45:00](https://yro.slashdot.org/story/25/11/25/2240236/warner-music-group-partners-with-suno-to-offer-ai-likenesses-of-its-artists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warner Music Group Partners With Suno To Offer AI Likenesses of Its Artists](https://yro.slashdot.org/story/25/11/25/2240236/warner-music-group-partners-with-suno-to-offer-ai-likenesses-of-its-artists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 00:33:29](https://news.ycombinator.com/item?id=46052685) - [CS234: Reinforcement Learning Winter 2025](https://web.stanford.edu/class/cs234/)
* [2025-11-26, 00:27:49](https://lobste.rs/s/vvy1o7/what_they_don_t_tell_you_about_maintaining) - [What They Don&apos;t Tell You About Maintaining an Open Source Project](https://andrej.sh/blog/maintaining-open-source-project/)
* [2025-11-26, 00:02:00](https://yro.slashdot.org/story/25/11/25/2221221/google-maps-will-let-you-hide-your-identity-when-writing-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Maps Will Let You Hide Your Identity When Writing Reviews](https://yro.slashdot.org/story/25/11/25/2221221/google-maps-will-let-you-hide-your-identity-when-writing-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 23:20:00](https://apple.slashdot.org/story/25/11/25/227255/poland-probes-apple-again-over-app-tracking-transparency-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Poland Probes Apple Again Over App Tracking Transparency Rules](https://apple.slashdot.org/story/25/11/25/227255/poland-probes-apple-again-over-app-tracking-transparency-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 22:57:00](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss) - [Is Matrix Multiplication Ugly?](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss)
* [2025-11-25, 22:40:52](https://news.ycombinator.com/item?id=46051724) - [Notes on the Troubleshooting and Repair of Computer and Video Monitors](https://www.repairfaq.org/sam/monfaq.htm)
* [2025-11-25, 22:40:00](https://slashdot.org/story/25/11/25/2146258/ai-cant-think?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;AI Can&apos;t Think&apos;](https://slashdot.org/story/25/11/25/2146258/ai-cant-think?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 22:37:48](https://news.ycombinator.com/item?id=46051691) - [Reinventing how .NET builds and ships (again)](https://devblogs.microsoft.com/dotnet/reinventing-how-dotnet-builds-and-ships-again/)
* [2025-11-25, 22:30:24](https://lobste.rs/s/tt7izg/stop_hacklore_open_letter) - [Stop Hacklore - An Open Letter](https://www.hacklore.org/letter)
* [2025-11-25, 22:13:35](https://news.ycombinator.com/item?id=46051449) - [Show HN: KiDoom – Running DOOM on PCB Traces](https://www.mikeayles.com/#kidoom)
* [2025-11-25, 22:08:25](https://news.ycombinator.com/item?id=46051393) - [What they don&apos;t tell you about maintaining an open source project](https://andrej.sh/blog/maintaining-open-source-project/)
* [2025-11-25, 22:04:31](https://news.ycombinator.com/item?id=46051340) - [Someone at YouTube Needs Glasses: The Prophecy Has Been Fulfilled](https://jayd.ml/2025/11/10/someone-at-youtube-needs-glasses-prophecy-fulfilled.html)
* [2025-11-25, 22:00:00](https://news.slashdot.org/story/25/11/25/2138249/us-banks-scramble-to-assess-data-theft-after-hackers-breach-financial-tech-firm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Banks Scramble To Assess Data Theft After Hackers Breach Financial Tech Firm](https://news.slashdot.org/story/25/11/25/2138249/us-banks-scramble-to-assess-data-theft-after-hackers-breach-financial-tech-firm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 21:25:27](https://lobste.rs/s/wtwnbk/stop_putting_your_passwords_into_random) - [Stop Putting Your Passwords Into Random Websites (Yes, Seriously, You Are The Problem)](https://labs.watchtowr.com/stop-putting-your-passwords-into-random-websites-yes-seriously-you-are-the-problem/)
* [2025-11-25, 21:22:00](https://news.slashdot.org/story/25/11/25/193251/ai-could-replace-3-million-low-skilled-jobs-in-the-uk-by-2035-research-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Could Replace 3 Million Low-Skilled Jobs in the UK By 2035, Research Warns](https://news.slashdot.org/story/25/11/25/193251/ai-could-replace-3-million-low-skilled-jobs-in-the-uk-by-2035-research-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 20:41:00](https://news.slashdot.org/story/25/11/25/1842246/american-influencers-cant-stop-praising-chinese-evs-they-cant-buy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [American Influencers Can&apos;t Stop Praising Chinese EVs They Can&apos;t Buy](https://news.slashdot.org/story/25/11/25/1842246/american-influencers-cant-stop-praising-chinese-evs-they-cant-buy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 20:01:00](https://news.slashdot.org/story/25/11/25/1827251/realpage-agrees-to-settle-federal-rent-collusion-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [RealPage Agrees To Settle Federal Rent-Collusion Case](https://news.slashdot.org/story/25/11/25/1827251/realpage-agrees-to-settle-federal-rent-collusion-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 19:53:20](https://news.ycombinator.com/item?id=46049932) - [A new bridge links the math of infinity to computer science](https://www.quantamagazine.org/a-new-bridge-links-the-strange-math-of-infinity-to-computer-science-20251121/)
* [2025-11-25, 19:43:42](https://news.ycombinator.com/item?id=46049835) - [The Bughouse Effect](https://tsvibt.blogspot.com/2025/11/the-bughouse-effect.html)
* [2025-11-25, 19:40:40](https://lobste.rs/s/0rvqxt/look_at_rust_from_2012) - [A look at Rust from 2012](https://purplesyringa.moe/blog/a-look-at-rust-from-2012/)
* [2025-11-25, 19:26:40](https://lobste.rs/s/ykoj5k/announcing_unison_1_0) - [Announcing Unison 1.0](https://www.unison-lang.org/unison-1-0/)
* [2025-11-25, 19:21:00](https://news.slashdot.org/story/25/11/25/1820249/jakarta-moves-ahead-of-tokyo-as-worlds-most-populated-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jakarta Moves Ahead of Tokyo As World&apos;s Most Populated City](https://news.slashdot.org/story/25/11/25/1820249/jakarta-moves-ahead-of-tokyo-as-worlds-most-populated-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 18:41:00](https://yro.slashdot.org/story/25/11/25/1816245/cisa-warns-spyware-crews-are-breaking-into-signal-and-whatsapp-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CISA Warns Spyware Crews Are Breaking Into Signal and WhatsApp Accounts](https://yro.slashdot.org/story/25/11/25/1816245/cisa-warns-spyware-crews-are-breaking-into-signal-and-whatsapp-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 18:31:16](https://news.ycombinator.com/item?id=46048996) - [Google Antigravity exfiltrates data via indirect prompt injection attack](https://www.promptarmor.com/resources/google-antigravity-exfiltrates-data)
* [2025-11-25, 18:12:00](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss) - [In 1982, a Physics Joke Gone Wrong Sparked the Invention of the Emoticon](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss)
* [2025-11-25, 18:01:00](https://hardware.slashdot.org/story/25/11/25/175213/mumbai-families-suffer-as-data-centers-keep-the-city-hooked-on-coal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mumbai Families Suffer As Data Centers Keep the City Hooked on Coal](https://hardware.slashdot.org/story/25/11/25/175213/mumbai-families-suffer-as-data-centers-keep-the-city-hooked-on-coal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 17:57:20](https://lobste.rs/s/ll7jys/whatsapp_from_you_know_where) - [WhatsApp from you know where](https://xenodium.com/whatsapp-from-you-know-where)
* [2025-11-25, 17:47:05](https://lobste.rs/s/8inolx/we_rewrote_our_startup_from_php_gleam_3) - [We Rewrote Our Startup from PHP to Gleam in 3 Weeks](https://www.radical-elements.com/minor-epiphanies/we-rewrote-our-startup-from-php-to-gleam-in-3-weeks)
* [2025-11-25, 17:33:50](https://news.ycombinator.com/item?id=46048252) - [Show HN: We built an open source, zero webhooks payment processor](https://github.com/flowglad/flowglad)
* [2025-11-25, 17:28:00](https://slashdot.org/story/25/11/25/1728213/nvidia-claims-generation-ahead-advantage-after-200-billion-sell-off-on-google-fears?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Claims &apos;Generation Ahead&apos; Advantage After $200 Billion Sell-off on Google Fears](https://slashdot.org/story/25/11/25/1728213/nvidia-claims-generation-ahead-advantage-after-200-billion-sell-off-on-google-fears?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 17:21:52](https://news.ycombinator.com/item?id=46048125) - [Ilya Sutskever: We&apos;re moving from the age of scaling to the age of research](https://www.dwarkesh.com/p/ilya-sutskever-2)
* [2025-11-25, 17:16:15](https://lobste.rs/s/gbjsmn/how_draw_high_fidelity_graphics_when_all) - [How to draw high fidelity graphics when all you have is an x and y coordinate](https://www.makingsoftware.com/chapters/shaders)
* [2025-11-25, 17:07:06](https://news.ycombinator.com/item?id=46047958) - [Unifying our mobile and desktop domains](https://techblog.wikimedia.org/2025/11/21/unifying-mobile-and-desktop-domains/)
* [2025-11-25, 17:05:43](https://lobste.rs/s/iq1zrm/unifying_wikipedia_mobile_desktop) - [Unifying Wikipedia mobile and desktop domains](https://techblog.wikimedia.org/2025/11/21/unifying-mobile-and-desktop-domains/)
* [2025-11-25, 16:39:23](https://lobste.rs/s/igvnnq/stop_telling_us_xmpp_should_use_json) - [Stop Telling Us XMPP Should Use JSON](https://www.process-one.net/blog/stop-telling-us-xmpp-should-use-json/)
* [2025-11-25, 16:17:55](https://lobste.rs/s/qfsjp9/mobile_browsers_see_telephone_numbers) - [Mobile browsers see telephone numbers everywhere](https://sethmlarson.dev/mobile-browsers-and-telephone-numbers)
* [2025-11-25, 16:13:54](https://lobste.rs/s/90inaz/orion_1_0) - [Orion 1.0](https://blog.kagi.com/orion)
* [2025-11-25, 15:57:54](https://news.ycombinator.com/item?id=46047053) - [Brand New Layouts with CSS Subgrid](https://www.joshwcomeau.com/css/subgrid/)
* [2025-11-25, 15:47:14](https://news.ycombinator.com/item?id=46046916) - [FLUX.2: Frontier Visual Intelligence](https://bfl.ai/blog/flux-2)
* [2025-11-25, 14:57:45](https://lobste.rs/s/2zlrjv/ai_smells_on_medium) - [AI Smells on Medium](https://rmoff.net/2025/11/25/ai-smells-on-medium/)
* [2025-11-25, 14:42:27](https://lobste.rs/s/qzrous/promise_p_graphs) - [The Promise of P-Graphs](https://pavpanchekha.com/blog/p-graphs.html)
* [2025-11-25, 14:39:51](https://lobste.rs/s/jgzpxs/towards_pen_paper_style_equational) - [Towards Pen-and-Paper-Style Equational Reasoning in Interactive Theorem Provers by Equality Saturation](https://steuwer.info/files/publications/2026/POPL-Lean-Egg.pdf)
* [2025-11-25, 14:26:14](https://lobste.rs/s/pcv94o/what_does_it_mean_be_massively_against_ai) - [What does it mean to be massively against AI?](https://pythonbynight.com/blog/massively-against-ai)
* [2025-11-25, 14:20:30](https://news.ycombinator.com/item?id=46045987) - [Launch HN: Onyx (YC W24) – Open-source chat UI](https://news.ycombinator.com/item?id=46045987)
* [2025-11-25, 14:16:22](https://lobste.rs/s/jcjp34/apt_rust_requirement_raises_questions) - [APT Rust requirement raises questions](https://lwn.net/SubscriberLink/1046841/5bbf1fc049a18947/)
* [2025-11-25, 14:03:08](https://lobste.rs/s/occlzx/constant_time_support_lands_llvm) - [Constant-time support lands in LLVM: Protecting cryptographic code at the compiler level](https://blog.trailofbits.com/2025/11/25/constant-time-support-lands-in-llvm-protecting-cryptographic-code-at-the-compiler-level/)
* [2025-11-25, 13:28:00](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss) - [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss)
* [2025-11-25, 13:02:06](https://news.ycombinator.com/item?id=46045385) - [Constant-time support coming to LLVM: Protecting cryptographic code](https://blog.trailofbits.com/2025/11/25/constant-time-support-coming-to-llvm-protecting-cryptographic-code-at-the-compiler-level/)
* [2025-11-25, 12:18:19](https://lobste.rs/s/6zjgo7/hp_dell_disable_hevc_support_built_into) - [HP and Dell disable HEVC support built into their laptops’ CPUs](https://arstechnica.com/gadgets/2025/11/hp-and-dell-disable-hevc-support-built-into-their-laptops-cpus/)
* [2025-11-25, 12:14:11](https://news.ycombinator.com/item?id=46045085) - [Trillions spent and big software projects are still failing](https://spectrum.ieee.org/it-management-software-failures)
* [2025-11-25, 11:36:07](https://lobste.rs/s/solqpi/how_good_are_chinese_cpus_benchmarking) - [How good are Chinese CPUs? Benchmarking the Loongson 3A6000](https://lemire.me/blog/2025/11/23/how-good-are-chinese-cpus-benchmarking-the-loongson-3a6000/)
* [2025-11-25, 09:31:45](https://lobste.rs/s/hzvyyv/lambda_papers_transcribed) - [The Lambda Papers (transcribed)](https://research.scheme.org/)
* [2025-11-25, 08:41:00](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss) - [I Set a Trap to Catch My Students Cheating With AI and the Results Were Shocking](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss)
* [2025-11-25, 07:58:27](https://lobste.rs/s/d4dvnk/emacs_for_code_editing) - [emacs for code editing](https://redpenguin101.github.io/html/posts/2025_11_23_emacs_for_code_editing.html)
* [2025-11-25, 06:32:57](https://lobste.rs/s/w05xid/world_s_most_stable_raspberry_pi_81_better) - [World&apos;s Most Stable Raspberry Pi? 81% Better NTP with Thermal Management](https://austinsnerdythings.com/2025/11/24/worlds-most-stable-raspberry-pi-81-better-ntp-with-thermal-management/)
* [2025-11-25, 06:09:05](https://news.ycombinator.com/item?id=46042810) - [Jakarta is now the biggest city in the world](https://www.axios.com/2025/11/24/jakarta-tokyo-worlds-biggest-city-population)
* [2025-11-25, 05:17:10](https://lobste.rs/s/p9umds/memories_us) - [memories of .us](https://computer.rip/2025-11-11-dot-us.html)
* [2025-11-25, 04:00:00](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss) - [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss)
* [2025-11-24, 23:16:00](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss) - [Ring&apos;s New Feature Turns Your Doorbell Into a Biometric Spy](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss)
* [2025-11-24, 22:17:40](https://news.ycombinator.com/item?id=46040053) - [1,700-year-old Roman sarcophagus is unearthed in Budapest](https://apnews.com/article/hungary-roman-sarcophagus-discovery-budapest-77a41fe190bbcc167b43d05141536f54)
* [2025-11-24, 18:27:00](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss) - [Thieves Want Your iPhone, Not Your Android](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss)
* [2025-11-24, 13:42:00](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss) - [Magician Forgets Password to His Own Hand After RFID Chip Implant](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss)
* [2025-11-24, 08:53:00](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss) - [First-Ever Full Earth System Simulation Provides New Tool to Understand Climate Change](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss)
* [2025-11-24, 04:09:00](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss) - [Debian Libre Live Images Released for Software Freedom Lovers](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss)
* [2025-11-23, 23:42:22](https://news.ycombinator.com/item?id=46028548) - [The fall of Labubus and the mush of modern internet trends](https://www.michigandaily.com/arts/digital-culture/the-fall-of-labubus-and-the-mush-of-modern-internet-trends/)
* [2025-11-23, 23:26:00](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss) - [US Gives Local Police a Face-Scanning App Similar to One Used by ICE Agents](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss)
* [2025-11-23, 18:36:00](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss) - [U.S. Spy Agency Releases Amelia Earhart Records](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss)
* [2025-11-23, 13:52:00](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss) - [Maybe That&apos;s Not Liquid Water on Mars After All](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss)
* [2025-11-23, 09:10:00](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss) - [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss)
* [2025-11-23, 07:40:26](https://news.ycombinator.com/item?id=46021577) - [Surprisingly, Emacs on Android is pretty good](https://kristofferbalintona.me/posts/202505291438/)
* [2025-11-23, 04:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss) - [Mercury Pollution in Marine Mammals is Increasing, New Study Finds](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss)
* [2025-11-23, 03:38:22](https://news.ycombinator.com/item?id=46020564) - [The Definitive Classic Mac Pro (2006-2012) Upgrade Guide](https://blog.greggant.com/posts/2018/05/07/definitive-mac-pro-upgrade-guide.html)
* [2025-11-22, 23:41:00](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss) - [Icelandic is in Danger of Dying Out Because of AI and English-Language Media, Says Former PM](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss)
* [2025-11-22, 18:58:00](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss) - [First Large-Scale VR Use in the Classroom Extends the Boundaries of Education](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss)
* [2025-11-22, 18:16:59](https://news.ycombinator.com/item?id=46016902) - [How to repurpose your old phone into a web server](https://far.computer/how-to/)
* [2025-11-22, 17:44:12](https://news.ycombinator.com/item?id=46016579) - [Java Decompiler](http://java-decompiler.github.io)
* [2025-11-22, 14:09:00](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss) - [Microsoft Warns its New “AI” Agents in Windows Can Install Malware](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss)
* [2025-11-22, 09:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss) - [\&quot;Walk My AI Walk\&quot;, a #1 AI Country Song](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss)
* [2025-11-22, 04:42:00](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss) - [Join the the Newest Social Network and Party Like its 1987](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss)
