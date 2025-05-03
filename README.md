# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Space Exploration

* [Evidence of Controversial Planet 9 Uncovered In Sky Surveys Taken 23 Years Apart](https://science.slashdot.org/story/25/05/03/0118242/evidence-of-controversial-planet-9-uncovered-in-sky-surveys-taken-23-years-apart?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An analysis of sky surveys spanning 23 years has revealed potential evidence of the elusive and controversial Planet 9.

* [A Strange Phrase Keeps Turning Up in Scientific Papers, but Why?](https://soylentnews.org/article.pl?sid=25/05/03/0154209&from=rss) - A peculiar recurring phrase in scientific papers is sparking curiosity about its origins and implications.

* [Scientists Discover Massive Molecular Cloud Close To Earth](https://science.slashdot.org/story/25/05/02/0515209/scientists-discover-massive-molecular-cloud-close-to-earth?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers have identified a significant molecular cloud near Earth, offering new insights into cosmic formations.

## Technology and Security

* [Post-Quantum Cryptography on NetBSD](https://www.netmeister.org/blog/netbsd-pqc.html) - NetBSD is embracing post-quantum cryptography techniques, ensuring its readiness for the future of computing.

* [Microsoft Appoints Deputy CISO For Europe To Reassure European IT Leaders](https://it.slashdot.org/story/25/05/02/2251200/microsoft-appoints-deputy-ciso-for-europe-to-reassure-european-it-leaders?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft appoints a Deputy CISO to address IT leaders' concerns in Europe amidst growing cybersecurity challenges.

* [US Asks Judge To Break Up Google's Ad Tech Business](https://yro.slashdot.org/story/25/05/02/2243229/us-asks-judge-to-break-up-googles-ad-tech-business?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A legal challenge sees the US government urging the breakup of Google's powerful ad tech empire.

## Space Innovation

* [We know a little more about Amazon's super-secret satellites](https://arstechnica.com/space/2025/05/we-finally-know-a-little-more-about-amazons-super-secret-satellites/) - Amazon lifts the veil on aspects of its clandestine satellite venture, sparking interest in its potential capabilities.

* [Eric Schmidt Apparently Bought Relativity Space To Put Data Centers in Orbit](https://science.slashdot.org/story/25/05/02/1839250/eric-schmidt-apparently-bought-relativity-space-to-put-data-centers-in-orbit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Eric Schmidt explores innovative logistics by planning to locate data centers in orbit using Relativity Space.

## Programming and Development

* [Using C++ type aliasing to avoid the ODR problem with conditional compilation, part 1](https://devblogs.microsoft.com/oldnewthing/20250501-00/?p=111134) - A deep dive into mitigating the One Definition Rule issue in C++ with conditional compilation.

* [ePub-utils: A Python library and CLI tool for inspecting ePub from the terminal](https://github.com/ernestofgonzalez/epub-utils) - A new tool for Python developers to manage ePub file inspection via terminal.

* [GitDroid: A third party Android app manager for apps uploaded to GitHub releases](https://github.com/TechnicJelle/GitDroid) - A GitHub-driven app manager tailored for Android users to streamline third-party application management.

## Ethics and AI

* [Stop treating 'AGI' as the north-star goal of AI research](https://arxiv.org/abs/2502.03689) - A study raises ethical and philosophical questions about the persistent pursuit of Artificial General Intelligence.

* [Adaptive Hashing](https://quotenil.com/adaptive-hashing.html) - Discussing the nuances and potential implications of adaptive hashing in artificial intelligence.

## Cultural and Historical Highlights

* [Monty Python and the Holy Grail Turns 50](https://soylentnews.org/article.pl?sid=25/05/02/064235&from=rss) - Celebrating half a century of one of comedy's most timeless and influential films.

* [Depictions of the Milky Way found in ancient Egyptian imagery](https://phys.org/news/2025-04-depictions-milky-ancient-egyptian-imagery.html) - A look at how ancient Egyptians depicted celestial phenomena, including the Milky Way.

## Environmental and Social Innovations

* [Flying Squirrel-Inspired Drone With Foldable Wings Demonstrates High Maneuverability](https://soylentnews.org/article.pl?sid=25/05/02/0551254&from=rss) - Bio-inspired drones are utilizing foldable wing technology for enhanced mobility and efficiency.

* [New Framework Suggests Stars Dissolve Into Neutrons to Forge Heavy Elements](https://soylentnews.org/article.pl?sid=25/04/29/0655255&from=rss) - A revolutionary framework suggesting how stars transition into forgers of heavier atomic elements.

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

* [2025-05-03, 11:52:13](https://lobste.rs/s/j03wkv/post_quantum_cryptography_on_netbsd) - [Post-Quantum Cryptography on NetBSD](https://www.netmeister.org/blog/netbsd-pqc.html)
* [2025-05-03, 10:54:24](https://news.ycombinator.com/item?id=43878191) - [Speedrunning and Modding the Incredibles: Rise of the Underminer](https://farlow.dev/2025/05/02/rotu)
* [2025-05-03, 10:00:00](https://yro.slashdot.org/story/25/05/03/0126234/man-pleads-guilty-to-stealing-11-terabytes-of-disneys-slack-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Man Pleads Guilty To Stealing 1.1 Terabytes of Disney&apos;s Slack Data ](https://yro.slashdot.org/story/25/05/03/0126234/man-pleads-guilty-to-stealing-11-terabytes-of-disneys-slack-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-03, 09:38:40](https://lobste.rs/s/eebdvu/using_c_type_aliasing_avoid_odr_problem) - [Using C++ type aliasing to avoid the ODR problem with conditional compilation, part 1](https://devblogs.microsoft.com/oldnewthing/20250501-00/?p=111134)
* [2025-05-03, 09:37:14](https://news.ycombinator.com/item?id=43877907) - [We know a little more about Amazon&apos;s super-secret satellites](https://arstechnica.com/space/2025/05/we-finally-know-a-little-more-about-amazons-super-secret-satellites/)
* [2025-05-03, 09:24:41](https://lobste.rs/s/iwedy4/don_t_make_google_sell_chrome) - [Don&apos;t make Google sell Chrome](https://world.hey.com/dhh/don-t-make-google-sell-chrome-93cefbc6)
* [2025-05-03, 09:08:31](https://news.ycombinator.com/item?id=43877797) - [Minimum Viable Blog](https://ostwilkens.se/blog/setting-up-blog)
* [2025-05-03, 08:37:00](https://soylentnews.org/article.pl?sid=25/05/03/0154209&amp;from=rss) - [A Strange Phrase Keeps Turning Up in Scientific Papers, but Why?](https://soylentnews.org/article.pl?sid=25/05/03/0154209&amp;from=rss)
* [2025-05-03, 07:00:00](https://science.slashdot.org/story/25/05/03/0118242/evidence-of-controversial-planet-9-uncovered-in-sky-surveys-taken-23-years-apart?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Evidence of Controversial Planet 9 Uncovered In Sky Surveys Taken 23 Years Apart](https://science.slashdot.org/story/25/05/03/0118242/evidence-of-controversial-planet-9-uncovered-in-sky-surveys-taken-23-years-apart?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-03, 06:58:27](https://news.ycombinator.com/item?id=43877338) - [The number of new apartments is at a 50-year high, but states expect a slowdown](https://oregoncapitalchronicle.com/2025/05/02/the-number-of-new-apartments-is-at-a-50-year-high-but-states-expect-a-slowdown/)
* [2025-05-03, 06:45:00](https://news.ycombinator.com/item?id=43877301) - [Accountability Sinks](https://250bpm.substack.com/p/accountability-sinks)
* [2025-05-03, 06:41:13](https://lobste.rs/s/1m6hnb/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/1m6hnb/what_are_you_doing_this_weekend)
* [2025-05-03, 06:26:26](https://lobste.rs/s/gz5x1z/replacing_kubernetes_with_systemd_2024) - [Replacing Kubernetes with systemd (2024)](https://blog.yaakov.online/replacing-kubernetes-with-systemd/)
* [2025-05-03, 06:17:35](https://lobste.rs/s/emiixp/projecting_sheet_music_onto_smart) - [Projecting sheet music onto smart glasses](https://www.youtube.com/watch?v=j36u2i7PKKE)
* [2025-05-03, 04:22:56](https://lobste.rs/s/kfadjc/stop_treating_agi_as_north_star_goal_ai) - [Stop treating `AGI&apos; as the north-star goal of AI research](https://arxiv.org/abs/2502.03689)
* [2025-05-03, 03:52:00](https://soylentnews.org/article.pl?sid=25/05/02/0710252&amp;from=rss) - [\&quot;Aerial Urination\&quot;](https://soylentnews.org/article.pl?sid=25/05/02/0710252&amp;from=rss)
* [2025-05-03, 03:36:01](https://lobste.rs/s/4e4fp7/progressive_enhancement_is_moral) - [Progressive enhancement is a moral argument (2016)](https://web.archive.org/web/20220316060312/https://whalecoiner.com/articles/progressive-enhancement)
* [2025-05-03, 03:30:00](https://tech.slashdot.org/story/25/05/02/2258206/first-driverless-semis-have-started-running-regular-longhaul-routes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Driverless Semis Have Started Running Regular Longhaul Routes](https://tech.slashdot.org/story/25/05/02/2258206/first-driverless-semis-have-started-running-regular-longhaul-routes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-03, 03:04:41](https://news.ycombinator.com/item?id=43876566) - [Connomore64: Cycle exact emulation of the C64 using parallel microcontrollers](https://github.com/c1570/Connomore64)
* [2025-05-03, 01:46:54](https://news.ycombinator.com/item?id=43876243) - [I put sheet music into smart glasses [video]](https://www.youtube.com/watch?v=j36u2i7PKKE)
* [2025-05-03, 00:45:00](https://it.slashdot.org/story/25/05/02/2251200/microsoft-appoints-deputy-ciso-for-europe-to-reassure-european-it-leaders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Appoints Deputy CISO For Europe To Reassure European IT leaders](https://it.slashdot.org/story/25/05/02/2251200/microsoft-appoints-deputy-ciso-for-europe-to-reassure-european-it-leaders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-03, 00:02:00](https://yro.slashdot.org/story/25/05/02/2243229/us-asks-judge-to-break-up-googles-ad-tech-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Asks Judge To Break Up Google&apos;s Ad Tech Business](https://yro.slashdot.org/story/25/05/02/2243229/us-asks-judge-to-break-up-googles-ad-tech-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 23:27:47](https://lobste.rs/s/harp4z/java_strings_just_got_faster) - [Java Strings Just Got Faster](https://inside.java/2025/05/01/strings-just-got-faster/)
* [2025-05-02, 23:26:12](https://news.ycombinator.com/item?id=43875505) - [ePub-utils: A Python library and CLI tool for inspecting ePub from the terminal](https://github.com/ernestofgonzalez/epub-utils)
* [2025-05-02, 23:20:00](https://news.slashdot.org/story/25/05/02/2121218/temu-to-stop-selling-goods-from-china-directly-to-us-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Temu To Stop Selling Goods From China Directly To US Customers](https://news.slashdot.org/story/25/05/02/2121218/temu-to-stop-selling-goods-from-china-directly-to-us-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 23:10:03](https://news.ycombinator.com/item?id=43875416) - [GitDroid: A third party Android app manager for apps uploaded to GitHub releases](https://github.com/TechnicJelle/GitDroid)
* [2025-05-02, 23:10:00](https://soylentnews.org/article.pl?sid=25/05/02/064235&amp;from=rss) - [Monty Python and the Holy Grail Turns 50](https://soylentnews.org/article.pl?sid=25/05/02/064235&amp;from=rss)
* [2025-05-02, 22:40:00](https://tech.slashdot.org/story/25/05/02/2113240/uber-inks-robotaxi-deal-with-chinese-startup-momenta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Inks Robotaxi Deal With Chinese Startup Momenta](https://tech.slashdot.org/story/25/05/02/2113240/uber-inks-robotaxi-deal-with-chinese-startup-momenta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 22:25:22](https://lobste.rs/s/avzgat/kate_python_language_server) - [Kate and Python language server](https://akselmo.dev/posts/kate-python-lsp/)
* [2025-05-02, 22:06:30](https://lobste.rs/s/ilmhdr/cross_platform_software_development_yes) - [Cross-Platform Software Development – Yes, Bytes Can Be 9 Bits](https://old.reddit.com/r/aethernet/comments/1kd79g7/crossplatform_software_development_part_1_yes/)
* [2025-05-02, 22:00:00](https://tech.slashdot.org/story/25/05/02/216223/pinterest-users-left-confused-by-mass-account-suspensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pinterest Users Left Confused By Mass Account Suspensions](https://tech.slashdot.org/story/25/05/02/216223/pinterest-users-left-confused-by-mass-account-suspensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 21:20:00](https://yro.slashdot.org/story/25/05/02/2032203/irish-privacy-watchdog-fines-tiktok-600-million-for-china-data-transfers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Irish Privacy Watchdog Fines TikTok $600 Million For China Data Transfers](https://yro.slashdot.org/story/25/05/02/2032203/irish-privacy-watchdog-fines-tiktok-600-million-for-china-data-transfers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 20:45:00](https://science.slashdot.org/story/25/05/02/1839250/eric-schmidt-apparently-bought-relativity-space-to-put-data-centers-in-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Eric Schmidt Apparently Bought Relativity Space To Put Data Centers in Orbit](https://science.slashdot.org/story/25/05/02/1839250/eric-schmidt-apparently-bought-relativity-space-to-put-data-centers-in-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 20:01:00](https://news.slashdot.org/story/25/05/02/1832253/uk-preparing-to-ban-consumers-from-buying-crypto-with-borrowed-funds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Preparing To Ban Consumers From Buying Crypto With Borrowed Funds](https://news.slashdot.org/story/25/05/02/1832253/uk-preparing-to-ban-consumers-from-buying-crypto-with-borrowed-funds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 19:45:22](https://lobste.rs/s/ofm4ex/adaptive_hashing) - [Adaptive Hashing](https://quotenil.com/adaptive-hashing.html)
* [2025-05-02, 19:20:00](https://apple.slashdot.org/story/25/05/02/181227/apple-anthropic-team-up-to-build-ai-powered-vibe-coding-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple, Anthropic Team Up To Build AI-Powered &apos;Vibe-Coding&apos; Platform](https://apple.slashdot.org/story/25/05/02/181227/apple-anthropic-team-up-to-build-ai-powered-vibe-coding-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 19:09:22](https://news.ycombinator.com/item?id=43873604) - [A proof of concept tool to verify estimates](https://terrytao.wordpress.com/2025/05/01/a-proof-of-concept-tool-to-verify-estimates/)
* [2025-05-02, 19:02:01](https://news.ycombinator.com/item?id=43873531) - [Old Soviet Venus descent craft nearing Earth reentry](https://www.leonarddavid.com/old-soviet-venus-descent-craft-nearing-earth-reentry/)
* [2025-05-02, 18:48:05](https://lobste.rs/s/qmhxwf/seeking_answer_why_can_t_html_alone_do) - [Seeking an Answer: Why can’t HTML alone do includes?](https://frontendmasters.com/blog/seeking-an-answer-why-cant-html-alone-do-includes/)
* [2025-05-02, 18:40:00](https://it.slashdot.org/story/25/05/02/1724245/pinterest-users-left-confused-by-mass-account-suspensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pinterest Users Left Confused By Mass Account Suspensions](https://it.slashdot.org/story/25/05/02/1724245/pinterest-users-left-confused-by-mass-account-suspensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 18:25:00](https://soylentnews.org/article.pl?sid=25/05/02/0551254&amp;from=rss) - [Flying Squirrel-Inspired Drone With Foldable Wings Demonstrates High Maneuverability](https://soylentnews.org/article.pl?sid=25/05/02/0551254&amp;from=rss)
* [2025-05-02, 18:12:15](https://news.ycombinator.com/item?id=43873074) - [Show HN: I built a synthesizer based on 3D physics](https://anukari.com)
* [2025-05-02, 18:01:12](https://lobste.rs/s/jnleid/starting_on_seamless_c_interop_jank) - [Starting on seamless C++ interop in jank](https://jank-lang.org/blog/2025-05-02-starting-seamless-interop/)
* [2025-05-02, 18:00:00](https://science.slashdot.org/story/25/05/02/1651254/us-approves-crispr-pigs-for-food?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Approves CRISPR Pigs For Food](https://science.slashdot.org/story/25/05/02/1651254/us-approves-crispr-pigs-for-food?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 17:42:28](https://news.ycombinator.com/item?id=43872761) - [Show HN: Blast – Fast, multi-threaded serving engine for web browsing AI agents](https://github.com/stanford-mast/blast)
* [2025-05-02, 17:39:00](https://lobste.rs/s/z4bimm/full_network_atproto_relay_for_34_month) - [A Full-Network ATProto Relay for $34 a Month](https://whtwnd.com/bnewbold.net/3lo7a2a4qxg2l)
* [2025-05-02, 17:20:00](https://science.slashdot.org/story/25/05/02/0515209/scientists-discover-massive-molecular-cloud-close-to-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Discover Massive Molecular Cloud Close To Earth](https://science.slashdot.org/story/25/05/02/0515209/scientists-discover-massive-molecular-cloud-close-to-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 16:45:29](https://news.ycombinator.com/item?id=43872094) - [Building Burstables: CPU slicing with cgroups](https://www.ubicloud.com/blog/building-burstables-cpu-slicing-with-cgroups)
* [2025-05-02, 15:21:49](https://news.ycombinator.com/item?id=43870998) - [Show HN: GPT-2 implemented using graphics shaders](https://github.com/nathan-barry/gpt2-webgl)
* [2025-05-02, 15:19:22](https://news.ycombinator.com/item?id=43870969) - [The language brain matters more for programming than the math brain? (2020)](https://massivesci.com/articles/programming-math-language-python-women-in-science/)
* [2025-05-02, 15:14:45](https://lobste.rs/s/wt6rqx/cost_poison) - [The cost of poison](https://chronicles.mad-scientist.club/tales/the-cost-of-poison/)
* [2025-05-02, 15:07:29](https://news.ycombinator.com/item?id=43870819) - [Expanding on what we missed with sycophancy](https://openai.com/index/expanding-on-sycophancy/)
* [2025-05-02, 13:45:08](https://lobste.rs/s/utekbr/rye_principles) - [Rye principles](https://ryelang.org/#rye-principles)
* [2025-05-02, 13:42:00](https://soylentnews.org/article.pl?sid=25/05/02/0534212&amp;from=rss) - [China&apos;s &apos;2D&apos; Chip Could Soon be Used to Make Silicon-Free Chips](https://soylentnews.org/article.pl?sid=25/05/02/0534212&amp;from=rss)
* [2025-05-02, 13:24:16](https://lobste.rs/s/bifofa/common_lisp_jq_replacement) - [A Common Lisp jq replacement](https://world-playground-deceit.net/blog/2025/03/a-common-lisp-jq-replacement.html)
* [2025-05-02, 13:18:26](https://news.ycombinator.com/item?id=43869353) - [Suno v4.5](https://suno.com/explore/)
* [2025-05-02, 13:11:16](https://news.ycombinator.com/item?id=43869288) - [The Cannae Problem](https://www.joanwestenberg.com/the-cannae-problem/)
* [2025-05-02, 12:59:18](https://lobste.rs/s/9jn3jg/reflecting_on_year_gamedev_zig) - [Reflecting on a year of Gamedev in Zig](https://bgthompson.codeberg.page/blog/one-year-zig-gamedev-reflections/)
* [2025-05-02, 10:45:46](https://lobste.rs/s/ljtwfv/what_i_ve_learned_from_jj) - [What I’ve learned from jj](https://zerowidth.com/2025/what-ive-learned-from-jj/)
* [2025-05-02, 10:35:38](https://lobste.rs/s/vubugi/optimizing_guile_scheme) - [Optimizing Guile Scheme](https://dthompson.us/posts/optimizing-guile-scheme.html)
* [2025-05-02, 09:52:45](https://lobste.rs/s/ndvt4n/bloom_filters) - [Bloom filters](https://eli.thegreenplace.net/2025/bloom-filters/)
* [2025-05-02, 08:54:00](https://soylentnews.org/article.pl?sid=25/04/30/1527224&amp;from=rss) - [A Gas Clump in the Milky Way’s Neighborhood Might be a ‘Dark Galaxy’](https://soylentnews.org/article.pl?sid=25/04/30/1527224&amp;from=rss)
* [2025-05-02, 08:21:43](https://news.ycombinator.com/item?id=43867403) - [What I&apos;ve learned from jj](https://zerowidth.com/2025/what-ive-learned-from-jj/)
* [2025-05-02, 07:48:11](https://news.ycombinator.com/item?id=43867211) - [Just redesigned my personal site with a TTY-style interface](https://www.abdisa.me/)
* [2025-05-02, 05:37:00](https://soylentnews.org/meta/article.pl?sid=25/05/02/0531214&amp;from=rss) - [janrinok - Resignation](https://soylentnews.org/meta/article.pl?sid=25/05/02/0531214&amp;from=rss)
* [2025-05-02, 04:13:00](https://soylentnews.org/article.pl?sid=25/04/30/1513218&amp;from=rss) - [Google is Killing Software Support for Early Nest Thermostats](https://soylentnews.org/article.pl?sid=25/04/30/1513218&amp;from=rss)
* [2025-05-02, 02:15:12](https://lobste.rs/s/67ijih/day_anubis_saved_our_websites_from_ddos) - [The Day Anubis Saved Our Websites From a DDoS Attack](https://fabulous.systems/posts/2025/05/anubis-saved-our-websites-from-a-ddos-attack/)
* [2025-05-01, 23:32:00](https://soylentnews.org/article.pl?sid=25/04/30/1511234&amp;from=rss) - [OIN Marks 20 Years Of Defending Linux And Open Source From Patent Trolls](https://soylentnews.org/article.pl?sid=25/04/30/1511234&amp;from=rss)
* [2025-05-01, 22:46:45](https://lobste.rs/s/psklqi/deno_s_decline_6_regions_falling) - [Deno’s Decline (6 Regions and Falling)](https://dbushell.com/2025/04/28/denos-decline/)
* [2025-05-01, 21:11:04](https://news.ycombinator.com/item?id=43863414) - [Derivation and Intuition behind Poisson distribution](https://antaripasaha.notion.site/Derivation-and-Intuition-behind-Poisson-distribution-1255314a56398062bf9dd9049fb1c396)
* [2025-05-01, 19:58:06](https://news.ycombinator.com/item?id=43862643) - [Why Is the Kiwi&apos;s Egg So Big?](https://www.audubon.org/magazine/why-kiwis-egg-so-big)
* [2025-05-01, 18:52:00](https://soylentnews.org/article.pl?sid=25/04/30/157220&amp;from=rss) - [Left or Right Arm? New Research Reveals Why Vaccination Site Matters for Immune Response](https://soylentnews.org/article.pl?sid=25/04/30/157220&amp;from=rss)
* [2025-05-01, 18:29:43](https://news.ycombinator.com/item?id=43861566) - [Open-source AI platform for ear-based sensing applications](https://open-earable.teco.edu/)
* [2025-05-01, 18:06:49](https://news.ycombinator.com/item?id=43861253) - [The future of solar doesn&apos;t track the sun](https://terraformindustries.wordpress.com/2025/04/29/the-future-of-solar-doesnt-track-the-sun/)
* [2025-05-01, 18:03:33](https://news.ycombinator.com/item?id=43861207) - [Achieving Human Level Competitive Robot Table Tennis](https://sites.google.com/view/competitive-robot-table-tennis/home?pli=1)
* [2025-05-01, 16:16:10](https://lobste.rs/s/1cpl6v/redis_is_open_source_again) - [Redis is open source again](https://antirez.com/news/151)
* [2025-05-01, 14:26:55](https://news.ycombinator.com/item?id=43858136) - [PScientists reveal how bats learn to identify which prey is safe to eat](https://phys.org/news/2025-04-palatable-poisonous-scientists-reveal-prey.html)
* [2025-05-01, 14:03:00](https://soylentnews.org/article.pl?sid=25/04/30/154230&amp;from=rss) - [Fusion Reactor Called ‘Norm’ Could Outperform Everything We’ve Built So Far](https://soylentnews.org/article.pl?sid=25/04/30/154230&amp;from=rss)
* [2025-05-01, 13:30:01](https://news.ycombinator.com/item?id=43857405) - [Depictions of the Milky Way found in ancient Egyptian imagery](https://phys.org/news/2025-04-depictions-milky-ancient-egyptian-imagery.html)
* [2025-05-01, 09:21:00](https://soylentnews.org/article.pl?sid=25/04/30/0213229&amp;from=rss) - [Here’s How We Might Generate Electricity From Rain](https://soylentnews.org/article.pl?sid=25/04/30/0213229&amp;from=rss)
* [2025-05-01, 06:33:45](https://news.ycombinator.com/item?id=43854337) - [Strings Just Got Faster](https://inside.java/2025/05/01/strings-just-got-faster/)
* [2025-05-01, 04:34:00](https://soylentnews.org/article.pl?sid=25/04/30/025225&amp;from=rss) - [Wired on Protecting Your Phone — and Your Privacy — at the US Border](https://soylentnews.org/article.pl?sid=25/04/30/025225&amp;from=rss)
* [2025-04-30, 23:48:00](https://soylentnews.org/article.pl?sid=25/04/30/022200&amp;from=rss) - [Amazon&apos;s Starlink Rival Sees the First 27 Satellites Successfully Reach Low-Earth Orbit](https://soylentnews.org/article.pl?sid=25/04/30/022200&amp;from=rss)
* [2025-04-30, 19:06:00](https://soylentnews.org/article.pl?sid=25/04/30/0157233&amp;from=rss) - [Trinity Desktop Environment 14.1.4 Released](https://soylentnews.org/article.pl?sid=25/04/30/0157233&amp;from=rss)
* [2025-04-30, 14:23:00](https://soylentnews.org/article.pl?sid=25/04/30/0155235&amp;from=rss) - [Volcanic Eruption Warnings Are Now Possible With Fiber-Optic Cables](https://soylentnews.org/article.pl?sid=25/04/30/0155235&amp;from=rss)
* [2025-04-30, 09:38:00](https://soylentnews.org/article.pl?sid=25/04/30/0150205&amp;from=rss) - [Congress Passes TAKE IT DOWN Act](https://soylentnews.org/article.pl?sid=25/04/30/0150205&amp;from=rss)
* [2025-04-30, 04:54:00](https://soylentnews.org/article.pl?sid=25/04/30/0137239&amp;from=rss) - [Europe Stays Tough on Tech Regulation](https://soylentnews.org/article.pl?sid=25/04/30/0137239&amp;from=rss)
* [2025-04-30, 00:10:00](https://soylentnews.org/article.pl?sid=25/04/29/0840259&amp;from=rss) - [The Agonizing Task of Turning Iberia&apos;s Power Back On](https://soylentnews.org/article.pl?sid=25/04/29/0840259&amp;from=rss)
* [2025-04-29, 19:26:00](https://soylentnews.org/article.pl?sid=25/04/29/0827244&amp;from=rss) - [A New Kali Linux Archive Signing Key](https://soylentnews.org/article.pl?sid=25/04/29/0827244&amp;from=rss)
* [2025-04-29, 14:41:00](https://soylentnews.org/article.pl?sid=25/04/29/0824210&amp;from=rss) - [AI-Powered, Non-Intrusive Terminal Assistant ](https://soylentnews.org/article.pl?sid=25/04/29/0824210&amp;from=rss)
* [2025-04-29, 10:01:00](https://soylentnews.org/article.pl?sid=25/04/29/0655255&amp;from=rss) - [New Framework Suggests Stars Dissolve Into Neutrons to Forge Heavy Elements](https://soylentnews.org/article.pl?sid=25/04/29/0655255&amp;from=rss)
* [2025-04-29, 05:15:00](https://soylentnews.org/article.pl?sid=25/04/28/0428200&amp;from=rss) - [Differential Equations and Urine](https://soylentnews.org/article.pl?sid=25/04/28/0428200&amp;from=rss)
* [2025-04-29, 00:28:00](https://soylentnews.org/article.pl?sid=25/04/28/0420232&amp;from=rss) - [Ice Age Pyrotechnology: This is How Humans Made Fire Tens of Thousands of Years Ago](https://soylentnews.org/article.pl?sid=25/04/28/0420232&amp;from=rss)
