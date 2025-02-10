# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI Innovations

* [Kaspersky finds hardware backdoor in 5 generations of Apple Silicon (2024)](https://www.xstore.co.za/stuff/2024/01/kaspersky-finds-hardware-backdoor-in-5-generations-of-apple-silicon/) ([comments](https://news.ycombinator.com/item?id=43003230))

* [Microsoft Study Finds AI Makes Human Cognition 'Atrophied and Unprepared'](https://slashdot.org/story/25/02/10/1752233/microsoft-study-finds-ai-makes-human-cognition-atrophied-and-unprepared?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/02/10/1752233/microsoft-study-finds-ai-makes-human-cognition-atrophied-and-unprepared?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [OpenAI Set To Finalize First Custom Chip Design This Year](https://tech.slashdot.org/story/25/02/10/162234/openai-set-to-finalize-first-custom-chip-design-this-year?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/02/10/162234/openai-set-to-finalize-first-custom-chip-design-this-year?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [DeepMind Chief Dismisses DeepSeek's AI Breakthrough as 'Known Techniques'](https://tech.slashdot.org/story/25/02/10/0855244/deepmind-chief-dismisses-deepseeks-ai-breakthrough-as-known-techniques?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/02/10/0855244/deepmind-chief-dismisses-deepseeks-ai-breakthrough-as-known-techniques?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Aaron Swartz Sculpture's Unveiling at Internet Archive Attended by 300](https://yro.slashdot.org/story/25/02/10/0456219/aaron-swartz-sculptures-unveiling-at-internet-archive-attended-by-300?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/02/10/0456219/aaron-swartz-sculptures-unveiling-at-internet-archive-attended-by-300?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Privacy and Security Concerns

* [Kaspersky Researchers Find Screenshot-Reading Malware on the App Store and Google Play](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss))

* [WhatsApp Says Journalists and Civil Society Members Were Targets of Israeli Spyware](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss))

* [UK demands Apple break encryption to allow gov’t spying worldwide, reports say](https://arstechnica.com/tech-policy/2025/02/uk-demands-apple-break-encryption-to-allow-govt-spying-worldwide-reports-say) ([comments](https://lobste.rs/s/07jh0c/uk_demands_apple_break_encryption_allow))

## Breakthroughs in Science and Health

* [Euclid Telescope Captures Einstein Ring Revealing Warping of Space](https://science.slashdot.org/story/25/02/10/0834236/euclid-telescope-captures-einstein-ring-revealing-warping-of-space?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/02/10/0834236/euclid-telescope-captures-einstein-ring-revealing-warping-of-space?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Earth's inner core may have changed shape, say scientists](https://www.bbc.co.uk/news/articles/c4gx37ky3gyo) ([comments](https://news.ycombinator.com/item?id=43002130))

* [Thomas Aquinas' skull reveals appearance and cause of death](https://www.ncregister.com/blog/face-of-aquinas-revealed-after-750-years) ([comments](https://news.ycombinator.com/item?id=42996671))

## Unique and Curious Developments

* [Man Who Lost Bitcoin Fortune In Welsh Tip Explores Purchase of Entire Landfill](https://news.slashdot.org/story/25/02/10/1721224/man-who-lost-bitcoin-fortune-in-welsh-tip-explores-purchase-of-entire-landfill?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/02/10/1721224/man-who-lost-bitcoin-fortune-in-welsh-tip-explores-purchase-of-entire-landfill?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Show HN: Global 3D Topography Explorer](https://topography.jessekv.com) ([comments](https://news.ycombinator.com/item?id=43001688))

* [I built an open source AI tool to find my autoimmune disease](https://old.reddit.com/r/selfhosted/comments/1ij7s4m/how_i_built_an_open_source_ai_tool_to_find_my/) ([comments](https://news.ycombinator.com/item?id=42999632))

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

* [2025-02-10, 18:07:24](https://news.ycombinator.com/item?id=43003230) - [Kaspersky finds hardware backdoor in 5 generations of Apple Silicon (2024)](https://www.xstore.co.za/stuff/2024/01/kaspersky-finds-hardware-backdoor-in-5-generations-of-apple-silicon/)
* [2025-02-10, 18:01:00](https://slashdot.org/story/25/02/10/1752233/microsoft-study-finds-ai-makes-human-cognition-atrophied-and-unprepared?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Study Finds AI Makes Human Cognition 'Atrophied and Unprepared'](https://slashdot.org/story/25/02/10/1752233/microsoft-study-finds-ai-makes-human-cognition-atrophied-and-unprepared?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 17:47:45](https://news.ycombinator.com/item?id=43002999) - [1% Equity for Founding Engineers Is BS](https://fetchfox.ai/a/founding-engineer-compensation)
* [2025-02-10, 17:34:56](https://lobste.rs/s/jgd69p/3d_gaussian_splatting_webgl_viewer) - [3D Gaussian Splatting WebGL viewer](https://gsplat.tech/)
* [2025-02-10, 17:22:00](https://news.slashdot.org/story/25/02/10/1721224/man-who-lost-bitcoin-fortune-in-welsh-tip-explores-purchase-of-entire-landfill?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Man Who Lost Bitcoin Fortune In Welsh Tip Explores Purchase of Entire Landfill](https://news.slashdot.org/story/25/02/10/1721224/man-who-lost-bitcoin-fortune-in-welsh-tip-explores-purchase-of-entire-landfill?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 16:58:20](https://news.ycombinator.com/item?id=43002426) - [A story about USB floppy drives (2004)](https://devblogs.microsoft.com/oldnewthing/20040409-00/?p=39873)
* [2025-02-10, 16:44:00](https://tech.slashdot.org/story/25/02/10/1646207/lyft-eyes-robotaxi-launch-in-2026?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Lyft Eyes Robotaxi Launch in 2026](https://tech.slashdot.org/story/25/02/10/1646207/lyft-eyes-robotaxi-launch-in-2026?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 16:31:59](https://news.ycombinator.com/item?id=43002130) - [Earth's inner core may have changed shape, say scientists](https://www.bbc.co.uk/news/articles/c4gx37ky3gyo)
* [2025-02-10, 16:26:49](https://lobste.rs/s/j5ggtw/pkarr_public_key_addressable_resource) - [pkarr: Public Key Addressable Resource Records (sovereign TLDs)](https://github.com/pubky/pkarr)
* [2025-02-10, 16:02:00](https://tech.slashdot.org/story/25/02/10/162234/openai-set-to-finalize-first-custom-chip-design-this-year?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Set To Finalize First Custom Chip Design This Year](https://tech.slashdot.org/story/25/02/10/162234/openai-set-to-finalize-first-custom-chip-design-this-year?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 15:54:45](https://news.ycombinator.com/item?id=43001688) - [Show HN: Global 3D Topography Explorer](https://topography.jessekv.com)
* [2025-02-10, 15:43:08](https://lobste.rs/s/jpa59v/sandboxing_perl_with_webassembly) - [Sandboxing Perl with WebAssembly](https://andrews.substack.com/p/zeroperl-sandboxed-perl-with-webassembly)
* [2025-02-10, 15:34:00](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss) - [Kaspersky Researchers Find Screenshot-Reading Malware on the App Store and Google Play](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss)
* [2025-02-10, 15:32:10](https://news.ycombinator.com/item?id=43001441) - [Bank CEO: Retract your debanking piece? Me: No](https://www.kalzumeus.com/2025/02/10/retraction-request-denied/)
* [2025-02-10, 15:20:00](https://science.slashdot.org/story/25/02/10/0834236/euclid-telescope-captures-einstein-ring-revealing-warping-of-space?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Euclid Telescope Captures Einstein Ring Revealing Warping of Space](https://science.slashdot.org/story/25/02/10/0834236/euclid-telescope-captures-einstein-ring-revealing-warping-of-space?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 14:46:00](https://lobste.rs/s/omfzao/peerauth) - [PeerAuth](https://ksze.github.io/PeerAuth/)
* [2025-02-10, 14:40:00](https://tech.slashdot.org/story/25/02/10/0855244/deepmind-chief-dismisses-deepseeks-ai-breakthrough-as-known-techniques?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepMind Chief Dismisses DeepSeek's AI Breakthrough as 'Known Techniques'](https://tech.slashdot.org/story/25/02/10/0855244/deepmind-chief-dismisses-deepseeks-ai-breakthrough-as-known-techniques?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 14:18:45](https://lobste.rs/s/j3ggjx/yucan_ui_engine) - [Yucan UI Engine](https://yucan-ui.com/)
* [2025-02-10, 14:14:22](https://news.ycombinator.com/item?id=43000529) - [The Anthropic Economic Index](https://www.anthropic.com/news/the-anthropic-economic-index)
* [2025-02-10, 14:07:16](https://lobste.rs/s/fsc1ej/what_about_k) - [What about k?](https://xpqz.github.io/kbook/Introduction.html)
* [2025-02-10, 14:00:00](https://news.slashdot.org/story/25/02/10/0841200/trump-orders-treasury-secretary-to-stop-minting-pennies?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Trump Orders Treasury Secretary To Stop Minting Pennies](https://news.slashdot.org/story/25/02/10/0841200/trump-orders-treasury-secretary-to-stop-minting-pennies?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 13:54:38](https://news.ycombinator.com/item?id=43000316) - [Surnames from nicknames nobody has any more](https://blog.plover.com/lang/etym/nickname-names.html)
* [2025-02-10, 13:52:53](https://news.ycombinator.com/item?id=43000303) - [Show HN: HTML visualization of a PDF file's internal structure](https://github.com/desgeeko/pdfsyntax/blob/main/docs/browse.md)
* [2025-02-10, 13:22:39](https://lobste.rs/s/g1icvq/feature_demo_surface_stable_fractal) - [Feature Demo of Surface-Stable Fractal Dithering](https://www.youtube.com/watch?v=EzjWBmhO_1E)
* [2025-02-10, 13:21:50](https://lobste.rs/s/blxbqn/computing_tricky_probabilities) - [Computing Tricky Probabilities](https://www.msoos.org/2025/02/computing-tricky-probabilities/)
* [2025-02-10, 13:20:55](https://lobste.rs/s/ymszmx/i_blog_with_raw_txt) - [I blog with raw txt](https://misc.l3m.in/txt/raw_txt.txt)
* [2025-02-10, 13:01:18](https://lobste.rs/s/lupmsm/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/lupmsm/what_are_you_doing_this_week)
* [2025-02-10, 12:51:34](https://news.ycombinator.com/item?id=42999650) - [What about K?](https://xpqz.github.io/kbook/Introduction.html)
* [2025-02-10, 12:48:24](https://news.ycombinator.com/item?id=42999632) - [I built an open source AI tool to find my autoimmune disease](https://old.reddit.com/r/selfhosted/comments/1ij7s4m/how_i_built_an_open_source_ai_tool_to_find_my/)
* [2025-02-10, 12:32:14](https://lobste.rs/s/er2p8q/harmonyos_deep_blue_insight_is_most) - [HarmonyOS: \"Deep Blue Insight\" is the most unique new security ecology in 2024](https://www.harmony-developers.com/p/deep-blue-insight-is-the-most-unique)
* [2025-02-10, 12:09:00](https://news.slashdot.org/story/25/02/10/0614233/server-attack-stops-the-presses-at-us-newspaper-chain?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Server Attack Stops the Presses at US Newspaper Chain](https://news.slashdot.org/story/25/02/10/0614233/server-attack-stops-the-presses-at-us-newspaper-chain?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 12:01:57](https://news.ycombinator.com/item?id=42999312) - [PermitFlow (YC W22) Is Hiring Senior/Staff Engineers in NYC](https://jobs.ashbyhq.com/permitflow?departmentId=d33195eb-8978-4439-abc6-5a8a072de808)
* [2025-02-10, 11:19:21](https://lobste.rs/s/wkgof6/sqlite_wasm_http) - [sqlite-wasm-http](https://github.com/mmomtchev/sqlite-wasm-http/blob/main/README.md)
* [2025-02-10, 10:52:38](https://lobste.rs/s/n8uork/naming_sum_types_is_often_hard) - [Naming sum types is often hard](https://chrisdone.com/posts/naming-is-hard/)
* [2025-02-10, 10:52:00](https://soylentnews.org/article.pl?sid=25/02/09/1336213&from=rss) - [Your AI Can't See Gorillas](https://soylentnews.org/article.pl?sid=25/02/09/1336213&from=rss)
* [2025-02-10, 10:24:29](https://lobste.rs/s/nlsgaq/residential_networking_over_telephone) - [residential networking over telephone](https://computer.rip/2025-02-02-residential-networking-over-telephone.html)
* [2025-02-10, 08:59:08](https://lobste.rs/s/aopsjo/obsidian_publish_directory_enumeration) - [Obsidian Publish Directory Enumeration](https://ezrizhu.com/blog/obsidian-dir-enum)
* [2025-02-10, 08:30:54](https://news.ycombinator.com/item?id=42998061) - [The state of Rust trying to catch up with Ada [video]](https://fosdem.org/2025/schedule/event/fosdem-2025-5356-the-state-of-rust-trying-to-catch-up-with-ada/)
* [2025-02-10, 08:21:55](https://lobste.rs/s/hvgsc0/linux_patches_adjust_ac_plug_unplug) - [Linux Patches Adjust AC Plug/Unplug Behavior During s2idle To Match Windows](https://www.phoronix.com/news/Linux-Patches-AC-Plug-s2idle)
* [2025-02-10, 08:08:00](https://yro.slashdot.org/story/25/02/10/0456219/aaron-swartz-sculptures-unveiling-at-internet-archive-attended-by-300?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Aaron Swartz Sculpture's Unveiling at Internet Archive Attended by 300](https://yro.slashdot.org/story/25/02/10/0456219/aaron-swartz-sculptures-unveiling-at-internet-archive-attended-by-300?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 06:10:00](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss) - [WhatsApp Says Journalists and Civil Society Members Were Targets of Israeli Spyware](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss)
* [2025-02-10, 05:58:36](https://lobste.rs/s/t8dfcw/how_does_ada_s_memory_safety_compare) - [How Does Ada's Memory Safety Compare Against Rust?](https://ajxs.me/blog/How_Does_Adas_Memory_Safety_Compare_Against_Rust.html)
* [2025-02-10, 04:09:00](https://mobile.slashdot.org/story/25/02/10/043208/free-t-mobile-starlink-for-six-months-announced-during-super-bowl-also-available-to-verizon-and-att-customers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Free 'T-Mobile Starlink' for Six Months Announced During Super Bowl. Also Available to Verizon and AT&amp;T Customers](https://mobile.slashdot.org/story/25/02/10/043208/free-t-mobile-starlink-for-six-months-announced-during-super-bowl-also-available-to-verizon-and-att-customers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-10, 03:38:29](https://news.ycombinator.com/item?id=42996671) - [Thomas Aquinas' skull reveals appearance and cause of death](https://www.ncregister.com/blog/face-of-aquinas-revealed-after-750-years)
* [2025-02-10, 01:46:15](https://lobste.rs/s/7imsbb/rostra_p2p_rather_f2f_social_network) - [Rostra - a p2p (or rather f2f) social network](https://github.com/dpc/rostra)
* [2025-02-10, 01:25:05](https://news.ycombinator.com/item?id=42995991) - [Show HN: Infinite Horizontal Array of Text Editors](https://zeminary.com/arrays/app.html)
* [2025-02-10, 01:23:00](https://soylentnews.org/article.pl?sid=25/02/08/1514221&from=rss) - [Facebook Torrents 81TB of Data to Feed their Models](https://soylentnews.org/article.pl?sid=25/02/08/1514221&from=rss)
* [2025-02-10, 00:34:00](https://it.slashdot.org/story/25/02/09/2257225/job-search-sites-try-shaming-companies-that-ghost-job-seekers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Job-Search Sites Try Shaming Companies That 'Ghost' Job-Seekers](https://it.slashdot.org/story/25/02/09/2257225/job-search-sites-try-shaming-companies-that-ghost-job-seekers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-09, 23:33:27](https://lobste.rs/s/tznsyt/postmarketos_powered_kubernetes) - [postmarketOS-powered Kubernetes cluster](https://blog.denv.it/posts/pmos-k3s-cluster/)
* [2025-02-09, 23:17:54](https://lobste.rs/s/13xmna/birdie_snapshot_testing) - [Birdie - Snapshot Testing](https://hexdocs.pm/birdie/)
* [2025-02-09, 22:34:00](https://news.slashdot.org/story/25/02/09/2212238/bill-gates-remembers-lsd-trips-smoking-pot-and-how-the-smartphone-os-market-was-ours-for-the-taking?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bill Gates Remembers LSD Trips, Smoking Pot, and How the Smartphone OS Market 'Was Ours for the Taking'](https://news.slashdot.org/story/25/02/09/2212238/bill-gates-remembers-lsd-trips-smoking-pot-and-how-the-smartphone-os-market-was-ours-for-the-taking?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-09, 22:21:49](https://lobste.rs/s/07jh0c/uk_demands_apple_break_encryption_allow) - [UK demands Apple break encryption to allow gov’t spying worldwide, reports say](https://arstechnica.com/tech-policy/2025/02/uk-demands-apple-break-encryption-to-allow-govt-spying-worldwide-reports-say/)
* [2025-02-09, 21:34:00](https://it.slashdot.org/story/25/02/09/2021244/how-to-make-any-amd-zen-cpu-always-generate-4-as-a-random-number?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [How To Make Any AMD Zen CPU Always Generate 4 As a Random Number](https://it.slashdot.org/story/25/02/09/2021244/how-to-make-any-amd-zen-cpu-always-generate-4-as-a-random-number?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-09, 20:36:00](https://soylentnews.org/article.pl?sid=25/02/08/1511237&from=rss) - [NASA Scientists Want to Solve a Mystery: Why Did Life \"Turn Left?\"](https://soylentnews.org/article.pl?sid=25/02/08/1511237&from=rss)
* [2025-02-09, 20:34:00](https://developers.slashdot.org/story/25/02/09/1922236/this-was-cs50-crying-poor-yale-to-stop-offering-harvards-famed-cs50-course?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [This Was CS50: Crying Poor, Yale To Stop Offering Harvard's Famed CS50 Course](https://developers.slashdot.org/story/25/02/09/1922236/this-was-cs50-crying-poor-yale-to-stop-offering-harvards-famed-cs50-course?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-09, 19:42:35](https://lobste.rs/s/qhhnvd/blip_tool_for_seeing_your_internet) - [blip: A tool for seeing your Internet latency](https://github.com/apenwarr/blip)
* [2025-02-09, 19:34:00](https://it.slashdot.org/story/25/02/09/1754229/americas-it-unemployment-rises-to-57-is-ai-hitting-tech-jobs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [America's IT Unemployment Rises To 5.7%. Is AI Hitting Tech Jobs?](https://it.slashdot.org/story/25/02/09/1754229/americas-it-unemployment-rises-to-57-is-ai-hitting-tech-jobs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-09, 18:14:01](https://news.ycombinator.com/item?id=42992336) - [PhD Knowledge Not Required: A Reasoning Challenge for Large Language Models](https://arxiv.org/abs/2502.01584)
* [2025-02-09, 16:33:28](https://news.ycombinator.com/item?id=42991676) - [LIMO: Less Is More for Reasoning](https://arxiv.org/abs/2502.03387)
* [2025-02-09, 15:52:00](https://soylentnews.org/article.pl?sid=25/02/08/155232&from=rss) - [U.K. Orders Apple to Let It Spy on Users’ Encrypted Accounts](https://soylentnews.org/article.pl?sid=25/02/08/155232&from=rss)
* [2025-02-09, 14:15:02](https://lobste.rs/s/01i5mu/baffled_by_generational_garbage) - [baffled by generational garbage collection](https://wingolog.org/archives/2025/02/09/baffled-by-generational-garbage-collection)
* [2025-02-09, 14:05:26](https://lobste.rs/s/ruwnqn/building_personal_private_ai_computer_on) - [Building a personal, private AI computer on a budget](https://ewintr.nl/posts/2025/building-a-personal-private-ai-computer-on-a-budget/)
* [2025-02-09, 13:29:01](https://news.ycombinator.com/item?id=42990546) - [Common mistakes in architecture diagrams (2020)](https://www.ilograph.com/blog/posts/diagram-mistakes/)
* [2025-02-09, 12:42:54](https://news.ycombinator.com/item?id=42990324) - [Don't \"optimize\" conditional moves in shaders with mix()+step()](https://iquilezles.org/articles/gpuconditionals/)
* [2025-02-09, 11:08:00](https://soylentnews.org/article.pl?sid=25/02/08/1249225&from=rss) - [Fixing E.T. the Extra-Terrestrial for the Atari 2600](https://soylentnews.org/article.pl?sid=25/02/08/1249225&from=rss)
* [2025-02-09, 08:24:17](https://news.ycombinator.com/item?id=42989320) - [Modern-Day Oracles or Bullshit Machines? How to thrive in a ChatGPT world](https://thebullshitmachines.com)
* [2025-02-09, 08:18:28](https://lobste.rs/s/3rqmav/how_we_are_defending_software_freedom) - [How we are defending Software Freedom against Apple at the EU's highest court](https://fosdem.org/2025/schedule/event/fosdem-2025-5084-how-we-are-defending-software-freedom-against-apple-at-the-eu-s-highest-court/)
* [2025-02-09, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/08/1244232&from=rss) - [ 'Cracked' and 'Nulled' Crime Forums,Closed Down In European Cyber Bust](https://soylentnews.org/article.pl?sid=25/02/08/1244232&from=rss)
* [2025-02-09, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss) - [Mysterious Radiation Belts Detected Around Earth After Epic Solar Storm](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss)
* [2025-02-08, 20:49:00](https://soylentnews.org/article.pl?sid=25/02/07/1312257&from=rss) - [Meta Says This is the Make or Break Year for the Metaverse](https://soylentnews.org/article.pl?sid=25/02/07/1312257&from=rss)
* [2025-02-08, 16:07:00](https://soylentnews.org/article.pl?sid=25/02/07/048232&from=rss) - [Catalytic Converters: How Much Platinum Do They Contain?](https://soylentnews.org/article.pl?sid=25/02/07/048232&from=rss)
* [2025-02-08, 11:20:00](https://soylentnews.org/article.pl?sid=25/02/07/044225&from=rss) - [Cloudflare Browser Integrity Check Blocking Many Non-Mainstream Browsers Again](https://soylentnews.org/article.pl?sid=25/02/07/044225&from=rss)
* [2025-02-08, 08:45:00](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss) - [Soylent Update - February 2025](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss)
* [2025-02-08, 06:32:00](https://soylentnews.org/politics/article.pl?sid=25/02/07/0354212&from=rss) - [US ICE Updates Immigration Raid Timestamps to Game Goggle Search Results](https://soylentnews.org/politics/article.pl?sid=25/02/07/0354212&from=rss)
* [2025-02-08, 01:49:00](https://soylentnews.org/article.pl?sid=25/02/07/0350219&from=rss) - [Piecing Together the Puzzle of the World's Earliest Datable Rune Stone](https://soylentnews.org/article.pl?sid=25/02/07/0350219&from=rss)
* [2025-02-07, 21:02:00](https://soylentnews.org/article.pl?sid=25/02/06/1054246&from=rss) - [Deepfake Videos are Getting Shockingly Good](https://soylentnews.org/article.pl?sid=25/02/06/1054246&from=rss)
* [2025-02-07, 19:06:44](https://news.ycombinator.com/item?id=42976244) - [Explainable Linear Programs](https://www.jeremykun.com/shortform/2025-02-06-2124/)
* [2025-02-07, 16:14:00](https://soylentnews.org/article.pl?sid=25/02/06/1043254&from=rss) - [As Internet Enshittification Marches On, Here are Some of the Worst Offenders](https://soylentnews.org/article.pl?sid=25/02/06/1043254&from=rss)
* [2025-02-07, 16:10:46](https://news.ycombinator.com/item?id=42974278) - [Two Grand Canyon-size valleys on far side of the moon formed within 10 minutes](https://www.cnn.com/2025/02/05/science/lunar-grand-canyons-far-side-moon/index.html)
* [2025-02-07, 14:37:46](https://news.ycombinator.com/item?id=42973049) - [Mapping Antarctica’s hidden ice-free lands: a blueprint for conservation](https://www.unsw.edu.au/newsroom/news/2025/01/mapping-antarcticas-hidden-ice-free-lands-a-blueprint-for-conservation)
* [2025-02-07, 14:04:14](https://news.ycombinator.com/item?id=42972622) - [Perma.cc – Permanent Link Service](https://perma.cc/)
* [2025-02-07, 11:28:00](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss) - [Russia VPN Crackdown Revelation - VPN Sites Hide Their IP Addresses ](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss)
* [2025-02-07, 11:25:19](https://news.ycombinator.com/item?id=42971442) - [Revenge of the GPT Wrappers: Defensibility in a world of commoditized AI models](https://andrewchen.substack.com/p/revenge-of-the-gpt-wrappers-defensibility)
* [2025-02-07, 09:57:57](https://news.ycombinator.com/item?id=42971038) - [Memory profilers, call graphs, exception reports, and telemetry](https://www.nuanced.dev/blog/system-wide-context)
* [2025-02-07, 06:43:00](https://soylentnews.org/article.pl?sid=25/02/06/0534246&from=rss) - [Educated but Easily Fooled? Who Falls for Misinformation and Why](https://soylentnews.org/article.pl?sid=25/02/06/0534246&from=rss)
* [2025-02-07, 03:30:10](https://news.ycombinator.com/item?id=42969038) - [Ancient-DNA Study Identifies Originators of Indo-European Language Family](https://hms.harvard.edu/news/ancient-dna-study-identifies-originators-indo-european-language-family)
* [2025-02-07, 01:55:00](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss) - [Google Removes Pledge to Not Use AI for Weapons From Website](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss)
* [2025-02-06, 21:12:00](https://soylentnews.org/article.pl?sid=25/02/04/1537254&from=rss) - [Warmer, More Crowded Cities Bring Out the Rats](https://soylentnews.org/article.pl?sid=25/02/04/1537254&from=rss)
* [2025-02-06, 16:24:00](https://soylentnews.org/article.pl?sid=25/02/04/1528253&from=rss) - [Who's Your Pick?  Eagles or Chiefs? Or Statistics?](https://soylentnews.org/article.pl?sid=25/02/04/1528253&from=rss)
* [2025-02-06, 14:03:39](https://news.ycombinator.com/item?id=42962394) - [Douglas McIlroy responds to Unix spell article with new implementation details](https://twitter.com/abhi9u/status/1887010136155414602)
* [2025-02-06, 12:23:10](https://news.ycombinator.com/item?id=42961684) - [Out of Africa: celebrating 100 years of human-origins research](https://www.nature.com/articles/d41586-025-00282-1)
* [2025-02-06, 11:40:00](https://soylentnews.org/article.pl?sid=25/02/04/1521226&from=rss) - [Google Offering ‘Voluntary Exit’ for Employees Working on Pixel, Android](https://soylentnews.org/article.pl?sid=25/02/04/1521226&from=rss)
* [2025-02-06, 06:59:20](https://news.ycombinator.com/item?id=42959824) - [Some terminal frustrations](https://jvns.ca/blog/2025/02/05/some-terminal-frustrations/)
* [2025-02-06, 06:55:00](https://soylentnews.org/article.pl?sid=25/02/04/1518208&from=rss) - [Cooking Flawless Pasta - it's Science!](https://soylentnews.org/article.pl?sid=25/02/04/1518208&from=rss)
* [2025-02-06, 02:13:00](https://soylentnews.org/article.pl?sid=25/02/04/1511202&from=rss) - [These Smart Glasses Help People With Macular Degeneration By Eliminating Blind Spots](https://soylentnews.org/article.pl?sid=25/02/04/1511202&from=rss)
