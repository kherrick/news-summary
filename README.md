undefined

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

* [2026-04-09, 10:19:00](https://soylentnews.org/article.pl?sid=26/04/08/0231247&amp;from=rss) - [Plan 9 is a Uniquely Complete Operating System](https://soylentnews.org/article.pl?sid=26/04/08/0231247&amp;from=rss)
* [2026-04-09, 09:56:58](https://lobste.rs/s/tbd39w/internet_needs_antibotty_immune_system) - [The Internet needs an antibotty immune system, stat](https://anil.recoil.org/notes/internet-immune-system)
* [2026-04-09, 09:25:28](https://news.ycombinator.com/item?id=47701233) - [Claude mixes up who said what and that&apos;s not OK](https://dwyer.co.za/static/claude-mixes-up-who-said-what-and-thats-not-ok.html)
* [2026-04-09, 09:11:37](https://news.ycombinator.com/item?id=47701100) - [Creating the Futurescape for the Fifth Element [2019]](https://theasc.com/articles/fantastic-voyage-creating-the-futurescape-for-the-fifth-element)
* [2026-04-09, 08:55:25](https://lobste.rs/s/gns27z/what_are_your_programming_hunches_you) - [What are your programming \&quot;hunches\&quot; you haven&apos;t yet investigated?](https://lobste.rs/s/gns27z/what_are_your_programming_hunches_you)
* [2026-04-09, 08:55:18](https://news.ycombinator.com/item?id=47700972) - [Reallocating $100/Month Claude Code Spend to Zed and OpenRouter](https://braw.dev/blog/2026-04-06-reallocating-100-month-claude-spend/)
* [2026-04-09, 07:28:26](https://lobste.rs/s/4ipmr0/how_much_linear_memory_access_is_enough) - [How Much Linear Memory Access Is Enough?](https://solidean.com/blog/2026/how-much-linear-memory-access-is-enough/)
* [2026-04-09, 07:27:25](https://news.ycombinator.com/item?id=47700388) - [Help Keep Thunderbird Alive](https://updates.thunderbird.net/en-US/thunderbird/140.0/apr26-1e/donate/)
* [2026-04-09, 07:00:00](https://apple.slashdot.org/story/26/04/09/0017250/apples-foldable-iphone-is-on-track-to-launch-in-september?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Foldable iPhone Is &apos;On Track&apos; To Launch In September](https://apple.slashdot.org/story/26/04/09/0017250/apples-foldable-iphone-is-on-track-to-launch-in-september?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-09, 06:18:12](https://lobste.rs/s/nwpcjt/understanding_traceroute) - [Understanding Traceroute](https://tech.stonecharioteer.com/posts/2026/traceroute/)
* [2026-04-09, 06:01:08](https://lobste.rs/s/w6bwob/wikimapped_1_3m_geolocated_wikipedia) - [WikiMapped – 1.3M geolocated Wikipedia articles on an interactive world map](https://wikimapped.mukul-mehta.in/)
* [2026-04-09, 06:00:55](https://news.ycombinator.com/item?id=47699814) - [Process Manager for Autonomous AI Agents](https://botctl.dev/)
* [2026-04-09, 05:38:00](https://soylentnews.org/article.pl?sid=26/04/07/2126219&amp;from=rss) - [Big Tech Knows New AI Models Ripe For Cyberattacks — But Plans To Release Them Anyway](https://soylentnews.org/article.pl?sid=26/04/07/2126219&amp;from=rss)
* [2026-04-09, 04:43:58](https://lobste.rs/s/nmhkdl/ai_great_leap_forward) - [The AI Great Leap Forward](https://leehanchung.github.io/blogs/2026/04/05/the-ai-great-leap-forward/)
* [2026-04-09, 04:11:55](https://news.ycombinator.com/item?id=47699181) - [Open Source Security at Astral](https://astral.sh/blog/open-source-security-at-astral)
* [2026-04-09, 03:30:00](https://yro.slashdot.org/story/26/04/08/2156254/john-deere-to-pay-99-million-in-monumental-right-to-repair-settlement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [John Deere To Pay $99 Million In Monumental Right-To-Repair Settlement](https://yro.slashdot.org/story/26/04/08/2156254/john-deere-to-pay-99-million-in-monumental-right-to-repair-settlement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-09, 02:21:46](https://lobste.rs/s/cjbxsj/flatpak_complete_sandbox_escape) - [Flatpak: Complete Sandbox Escape](https://github.com/flatpak/flatpak/security/advisories/GHSA-cc2q-qc34-jprg)
* [2026-04-09, 00:56:00](https://soylentnews.org/article.pl?sid=26/04/07/2124219&amp;from=rss) - [OkCupid Gave 3M Users’ Photos to AI Firm, FTC Says](https://soylentnews.org/article.pl?sid=26/04/07/2124219&amp;from=rss)
* [2026-04-09, 00:26:08](https://news.ycombinator.com/item?id=47697870) - [LittleSnitch for Linux](https://obdev.at/products/littlesnitch-linux/index.html)
* [2026-04-09, 00:17:14](https://lobste.rs/s/9gzcnv/how_pizza_tycoon_simulated_traffic_on_25) - [How Pizza Tycoon simulated traffic on a 25 MHz CPU](https://pizzalegacy.nl/blog/traffic-system.html)
* [2026-04-08, 23:00:00](https://slashdot.org/story/26/04/08/2126247/survivor-style-corporate-retreat-descends-into-hellish-nightmare?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Survivor&apos; Style Corporate Retreat Descends Into Hellish Nightmare](https://slashdot.org/story/26/04/08/2126247/survivor-style-corporate-retreat-descends-into-hellish-nightmare?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 22:35:43](https://lobste.rs/s/uambkp/keychron_keyboards_hardware_design_all) - [Keychron-Keyboards-Hardware-Design: All the industrial design files for Keychron keyboards and mice](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design)
* [2026-04-08, 22:00:00](https://it.slashdot.org/story/26/04/08/2139228/iran-linked-hackers-disrupted-us-oil-gas-water-sites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran-Linked Hackers Disrupted US Oil, Gas, Water Sites](https://it.slashdot.org/story/26/04/08/2139228/iran-linked-hackers-disrupted-us-oil-gas-water-sites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 21:39:09](https://lobste.rs/s/fu9wcm/giving_llms_formal_reasoning_engine_for) - [Giving LLMs a Formal Reasoning Engine for Code Analysis](https://yogthos.net/posts/2026-04-08-neurosymbolic-mcp.html)
* [2026-04-08, 21:00:00](https://slashdot.org/story/26/04/08/213203/nyt-claims-adam-back-is-bitcoin-creator-satoshi-nakamoto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYT Claims Adam Back Is Bitcoin Creator Satoshi Nakamoto](https://slashdot.org/story/26/04/08/213203/nyt-claims-adam-back-is-bitcoin-creator-satoshi-nakamoto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 20:46:27](https://news.ycombinator.com/item?id=47696035) - [John Deere to pay $99M in right-to-repair settlement](https://www.thedrive.com/news/john-deere-to-pay-99-million-in-monumental-right-to-repair-settlement)
* [2026-04-08, 20:18:34](https://lobste.rs/s/2zrhn4/little_snitch_for_linux) - [Little Snitch for Linux](https://obdev.at/blog/little-snitch-for-linux/)
* [2026-04-08, 20:11:00](https://soylentnews.org/article.pl?sid=26/04/06/234206&amp;from=rss) - [Sweden Goes Back to Basics, Swapping Screens for Books in the Classroom](https://soylentnews.org/article.pl?sid=26/04/06/234206&amp;from=rss)
* [2026-04-08, 20:00:00](https://news.slashdot.org/story/26/04/08/1751257/amazon-is-ending-support-for-older-kindles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Is Ending Support For Older Kindles](https://news.slashdot.org/story/26/04/08/1751257/amazon-is-ending-support-for-older-kindles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 19:23:34](https://news.ycombinator.com/item?id=47695012) - [USB for Software Developers: An introduction to writing userspace USB drivers](https://werwolv.net/posts/usb_for_sw_devs/)
* [2026-04-08, 19:21:41](https://news.ycombinator.com/item?id=47694983) - [Expanding Swift&apos;s IDE Support](https://swift.org/blog/expanding-swift-ide-support/)
* [2026-04-08, 19:00:00](https://slashdot.org/story/26/04/08/1746237/iran-demands-bitcoin-for-ships-passing-hormuz-during-ceasefire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran Demands Bitcoin For Ships Passing Hormuz During Ceasefire](https://slashdot.org/story/26/04/08/1746237/iran-demands-bitcoin-for-ships-passing-hormuz-during-ceasefire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 18:27:30](https://lobste.rs/s/6k8cyc/zsh_select_generated_files_with_om_1_glob) - [Zsh: select generated files with (om[1]) glob qualifiers](https://adamj.eu/tech/2026/01/27/zsh-om1-glob-qualifiers/)
* [2026-04-08, 18:00:00](https://tech.slashdot.org/story/26/04/08/1731245/meta-debuts-muse-spark-first-ai-model-under-alexandr-wang?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Debuts &apos;Muse Spark&apos;, First AI Model Under Alexandr Wang](https://tech.slashdot.org/story/26/04/08/1731245/meta-debuts-muse-spark-first-ai-model-under-alexandr-wang?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 17:46:45](https://lobste.rs/s/i32p79/aws_engineer_reports_postgresql) - [AWS Engineer Reports PostgreSQL Performance Halved By Linux 7.0, But A Fix May Not Be Easy](https://www.phoronix.com/news/Linux-7.0-AWS-PostgreSQL-Drop)
* [2026-04-08, 17:37:29](https://lobste.rs/s/lgdejq/borrow_checking_surprises) - [Borrow-checking surprises](https://www.scattered-thoughts.net/writing/borrow-checking-surprises/)
* [2026-04-08, 17:11:46](https://news.ycombinator.com/item?id=47693153) - [Understanding the Kalman filter with a simple radar example](https://kalmanfilter.net)
* [2026-04-08, 17:11:40](https://lobste.rs/s/9pipxp/tailslayer_library_for_reducing_tail) - [tailslayer: Library for reducing tail latency in RAM reads](https://github.com/LaurieWired/tailslayer)
* [2026-04-08, 17:00:00](https://tech.slashdot.org/story/26/04/08/1715213/microsoft-abruptly-terminates-veracrypt-account-halting-windows-updates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Abruptly Terminates VeraCrypt Account, Halting Windows Updates](https://tech.slashdot.org/story/26/04/08/1715213/microsoft-abruptly-terminates-veracrypt-account-halting-windows-updates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 16:16:57](https://lobste.rs/s/i0vvrs/porting_mac_os_x_nintendo_wii) - [Porting Mac OS X to the Nintendo Wii](https://bryankeller.github.io/2026/04/08/porting-mac-os-x-nintendo-wii.html)
* [2026-04-08, 16:01:32](https://news.ycombinator.com/item?id=47692043) - [Muse Spark: Scaling towards personal superintelligence](https://ai.meta.com/blog/introducing-muse-spark-msl/?_fb_noscript=1)
* [2026-04-08, 16:00:00](https://games.slashdot.org/story/26/04/08/0554203/valve-releases-native-steam-link-app-for-apples-vision-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Releases Native Steam Link App For Apple&apos;s Vision Pro](https://games.slashdot.org/story/26/04/08/0554203/valve-releases-native-steam-link-app-for-apples-vision-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 15:40:00](https://news.ycombinator.com/item?id=47691730) - [I ported Mac OS X to the Nintendo Wii](https://bryankeller.github.io/2026/04/08/porting-mac-os-x-nintendo-wii.html)
* [2026-04-08, 15:35:46](https://lobste.rs/s/fdybbj/verifying_human_authorship_with_human) - [Verifying human authorship with human.json](https://joelchrono.xyz/blog/implementing-human-json/)
* [2026-04-08, 15:25:29](https://lobste.rs/s/qayr1f/open_source_security_at_astral) - [Open source security at Astral](https://astral.sh/blog/open-source-security-at-astral)
* [2026-04-08, 15:20:42](https://lobste.rs/s/itjrwp/on_vinyl_cache_varnish_cache) - [On Vinyl Cache and Varnish Cache](https://vinyl-cache.org/organization/on_vinyl_cache_and_varnish_cache.html)
* [2026-04-08, 15:00:00](https://hardware.slashdot.org/story/26/04/08/0543217/apple-and-lenovo-have-the-least-repairable-laptops-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple and Lenovo Have the Least Repairable Laptops, Analysis Finds](https://hardware.slashdot.org/story/26/04/08/0543217/apple-and-lenovo-have-the-least-repairable-laptops-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 14:04:03](https://lobste.rs/s/phhjvs/future_everything_is_lies_i_guess) - [The Future of Everything is Lies, I Guess](https://aphyr.com/posts/411-the-future-of-everything-is-lies-i-guess)
* [2026-04-08, 13:35:34](https://lobste.rs/s/oh8rgj/audio_reactive_led_strips_are) - [Audio Reactive LED Strips Are Diabolically Hard](https://scottlawsonbc.com/post/audio-led)
* [2026-04-08, 13:35:27](https://lobste.rs/s/9xjhfm/full_text_search_with_indexeddb) - [Full Text Search with IndexedDB](https://blog.jmp.chat/b/2026-full-text-search-indexeddb)
* [2026-04-08, 13:06:33](https://news.ycombinator.com/item?id=47689648) - [ML promises to be profoundly weird](https://aphyr.com/posts/411-the-future-of-everything-is-lies-i-guess)
* [2026-04-08, 12:19:00](https://news.ycombinator.com/item?id=47689174) - [MegaTrain: Full Precision Training of 100B+ Parameter LLMs on a Single GPU](https://arxiv.org/abs/2604.05091)
* [2026-04-08, 11:20:50](https://news.ycombinator.com/item?id=47688678) - [They&apos;re made out of meat (1991)](http://www.terrybisson.com/theyre-made-out-of-meat-2/)
* [2026-04-08, 11:00:00](https://tech.slashdot.org/story/26/04/08/0152253/cia-reportedly-used-secret-quantum-tool-to-find-downed-airman-in-iran?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CIA Reportedly Used Secret Quantum Tool To Find Downed Airman in Iran](https://tech.slashdot.org/story/26/04/08/0152253/cia-reportedly-used-secret-quantum-tool-to-find-downed-airman-in-iran?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 10:48:00](https://soylentnews.org/article.pl?sid=26/04/06/2256234&amp;from=rss) - [The Three Ways Big Tech Made The Human Mind Weaker](https://soylentnews.org/article.pl?sid=26/04/06/2256234&amp;from=rss)
* [2026-04-08, 09:20:30](https://lobste.rs/s/kz6rvd/under_hood_mdn_s_new_frontend) - [Under the hood of MDN&apos;s new frontend](https://developer.mozilla.org/en-US/blog/mdn-front-end-deep-dive/)
* [2026-04-08, 08:53:42](https://news.ycombinator.com/item?id=47687273) - [Git commands I run before reading any code](https://piechowski.io/post/git-commands-before-reading-code/)
* [2026-04-08, 07:40:46](https://lobste.rs/s/ejaimk/applying_programming_without_pointers) - [Applying \&quot;Programming Without Pointers\&quot; to an mbox indexer using Zig](https://simonhartcher.com/posts/2026-04-08-applying-programming-without-pointers-to-an-mbox-indexer-using-zig)
* [2026-04-08, 07:00:00](https://tech.slashdot.org/story/26/04/08/0145220/planet-labs-tests-ai-powered-object-detection-on-satellite?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Planet Labs Tests AI-Powered Object Detection On Satellite](https://tech.slashdot.org/story/26/04/08/0145220/planet-labs-tests-ai-powered-object-detection-on-satellite?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 05:56:00](https://soylentnews.org/article.pl?sid=26/04/06/2247253&amp;from=rss) - [Democracy Was Not Just a Greco-Roman Affair in the Ancient World](https://soylentnews.org/article.pl?sid=26/04/06/2247253&amp;from=rss)
* [2026-04-08, 04:37:57](https://news.ycombinator.com/item?id=47685320) - [Who is Satoshi Nakamoto? My quest to unmask Bitcoin&apos;s creator](https://www.nytimes.com/2026/04/08/business/bitcoin-satoshi-nakamoto-identity-adam-back.html)
* [2026-04-08, 03:30:00](https://it.slashdot.org/story/26/04/07/2326240/russian-government-hackers-broke-into-thousands-of-home-routers-to-steal-passwords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Government Hackers Broke Into Thousands of Home Routers To Steal Passwords](https://it.slashdot.org/story/26/04/07/2326240/russian-government-hackers-broke-into-thousands-of-home-routers-to-steal-passwords?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-08, 01:12:00](https://soylentnews.org/article.pl?sid=26/04/06/2246200&amp;from=rss) - [Astronomers Say Recent Rash of Meteor Sightings ‘Warrants Serious Investigation’](https://soylentnews.org/article.pl?sid=26/04/06/2246200&amp;from=rss)
* [2026-04-07, 23:00:00](https://hardware.slashdot.org/story/26/04/07/2157238/apple-faces-massive-dilemma-with-success-of-the-macbook-neo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Faces &apos;Massive Dilemma&apos; With Success of the MacBook Neo](https://hardware.slashdot.org/story/26/04/07/2157238/apple-faces-massive-dilemma-with-success-of-the-macbook-neo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-07, 20:28:00](https://soylentnews.org/article.pl?sid=26/04/05/0859242&amp;from=rss) - [Google&apos;s New Compression Drastically Shrinks AI Memory Use While Quietly Speeding Up Performance](https://soylentnews.org/article.pl?sid=26/04/05/0859242&amp;from=rss)
* [2026-04-07, 19:19:09](https://lobste.rs/s/enkaal/last_quiet_thing) - [The Last Quiet Thing](https://www.terrygodier.com/the-last-quiet-thing)
* [2026-04-07, 17:34:13](https://news.ycombinator.com/item?id=47678690) - [Six (and a half) intuitions for KL divergence](https://www.perfectlynormal.co.uk/blog-kl-divergence)
* [2026-04-07, 15:43:00](https://soylentnews.org/article.pl?sid=26/04/05/0854218&amp;from=rss) - [When Earth&apos;s Magnetic Field Took its Time Flipping](https://soylentnews.org/article.pl?sid=26/04/05/0854218&amp;from=rss)
* [2026-04-07, 11:01:00](https://soylentnews.org/article.pl?sid=26/04/05/0852233&amp;from=rss) - [$500 Fiber Optic HDMI Cable Delivers Flawless 48 Gbps Performance Across a Staggering 990 Feet](https://soylentnews.org/article.pl?sid=26/04/05/0852233&amp;from=rss)
* [2026-04-07, 06:18:00](https://soylentnews.org/article.pl?sid=26/04/05/0849255&amp;from=rss) - [The Brain Uses Eye Movements to See in 3D](https://soylentnews.org/article.pl?sid=26/04/05/0849255&amp;from=rss)
* [2026-04-07, 01:33:00](https://soylentnews.org/article.pl?sid=26/04/05/0335237&amp;from=rss) - [RIP Mac Pro: Apple Officially Kills its Tower Computer](https://soylentnews.org/article.pl?sid=26/04/05/0335237&amp;from=rss)
* [2026-04-06, 20:52:00](https://soylentnews.org/article.pl?sid=26/04/05/0233233&amp;from=rss) - [Pentagon Formalizes Palantir&apos;s Maven AI as a Core Military System With Multi-Year Funding](https://soylentnews.org/article.pl?sid=26/04/05/0233233&amp;from=rss)
* [2026-04-06, 20:33:03](https://news.ycombinator.com/item?id=47666639) - [The Importance of Being Idle](https://theamericanscholar.org/the-importance-of-being-idle/)
* [2026-04-06, 20:14:16](https://news.ycombinator.com/item?id=47666398) - [Show HN: A (marginally) useful x86-64 ELF executable in 301 bytes](https://github.com/meribold/btry)
* [2026-04-06, 17:09:40](https://news.ycombinator.com/item?id=47663743) - [Show HN: Moon simulator game, ray-casting](https://mooncraft2000.com)
* [2026-04-06, 16:11:00](https://soylentnews.org/article.pl?sid=26/04/05/0226201&amp;from=rss) - [Claude Source Code Leaked?  But Watch Out for What You Might be Downloading](https://soylentnews.org/article.pl?sid=26/04/05/0226201&amp;from=rss)
* [2026-04-06, 13:08:17](https://news.ycombinator.com/item?id=47660434) - [C# in Unity 2026: Features Most Developers Still Don&apos;t Use](https://darkounity.com/blog/c-in-unity-2026-features-most-developers-still-dont-use)
* [2026-04-06, 11:23:00](https://soylentnews.org/article.pl?sid=26/04/05/0214222&amp;from=rss) - [Fossils Reveal Many Complex Animals Existed Before the Cambrian Explosion](https://soylentnews.org/article.pl?sid=26/04/05/0214222&amp;from=rss)
* [2026-04-06, 10:09:00](https://news.ycombinator.com/item?id=47658950) - [Haunted Paper Toys](http://ravensblight.com/papertoys.html)
* [2026-04-06, 06:35:00](https://soylentnews.org/article.pl?sid=26/04/05/026223&amp;from=rss) - [AMD&apos;s New Desktop CPU Oozes Cache Out of All 16 Cores](https://soylentnews.org/article.pl?sid=26/04/05/026223&amp;from=rss)
* [2026-04-06, 03:40:31](https://news.ycombinator.com/item?id=47656730) - [Understanding Traceroute](https://tech.stonecharioteer.com/posts/2026/traceroute/)
* [2026-04-06, 01:54:00](https://soylentnews.org/article.pl?sid=26/04/05/021235&amp;from=rss) - [The &apos;Engineering of Addiction&apos;  - 3 Ways Meta and YouTube Are Claimed to Have Harmed  Users](https://soylentnews.org/article.pl?sid=26/04/05/021235&amp;from=rss)
* [2026-04-05, 21:30:19](https://news.ycombinator.com/item?id=47654062) - [Ask HN: Any interesting niche hobbies?](https://news.ycombinator.com/item?id=47654062)
* [2026-04-05, 21:04:00](https://soylentnews.org/article.pl?sid=26/04/04/0231228&amp;from=rss) - [‘Shockingly Bad’: Nissan Leaf Drivers Voice Anger Over App Shutdown](https://soylentnews.org/article.pl?sid=26/04/04/0231228&amp;from=rss)
* [2026-04-05, 16:13:00](https://soylentnews.org/article.pl?sid=26/04/04/0228218&amp;from=rss) - [Data Centers Causing Huge Temperature Spikes for Miles Around Them, Study Suggests](https://soylentnews.org/article.pl?sid=26/04/04/0228218&amp;from=rss)
* [2026-04-05, 12:08:55](https://news.ycombinator.com/item?id=47648538) - [I imported the full Linux kernel git history into pgit](https://oseifert.ch/blog/linux-kernel-pgit)
* [2026-04-05, 11:41:00](https://soylentnews.org/article.pl?sid=26/04/04/0223207&amp;from=rss) - [Security Researchers Scoured the Web and Found Hundreds of Valid API Keys](https://soylentnews.org/article.pl?sid=26/04/04/0223207&amp;from=rss)
* [2026-04-05, 06:49:00](https://soylentnews.org/article.pl?sid=26/04/03/040255&amp;from=rss) - [VitruvianOS 0.3 Debuts as Haiku-Inspired Linux OS Without X11 or Wayland](https://soylentnews.org/article.pl?sid=26/04/03/040255&amp;from=rss)
* [2026-04-05, 05:37:00](https://soylentnews.org/breakingnews/article.pl?sid=26/04/05/0541233&amp;from=rss) - [2nd Crew Member of F15E Has Been Rescued.](https://soylentnews.org/breakingnews/article.pl?sid=26/04/05/0541233&amp;from=rss)
* [2026-04-05, 02:02:00](https://soylentnews.org/article.pl?sid=26/04/03/0357220&amp;from=rss) - [Investigating 3D-Printed Metals for Aeronautical Engineering](https://soylentnews.org/article.pl?sid=26/04/03/0357220&amp;from=rss)
* [2026-04-05, 00:37:57](https://news.ycombinator.com/item?id=47645010) - [Dr. Dobb&apos;s Developer Library DVD 6](https://archive.org/details/DDJDVD6)
