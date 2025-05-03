# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Eric Schmidt Apparently Bought Relativity Space To Put Data Centers in Orbit](https://science.slashdot.org/story/25/05/02/1839250/eric-schmidt-apparently-bought-relativity-space-to-put-data-centers-in-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A bold move to utilize space for data storage and management, paving potentially new paths in cloud computing.

* [Driverless semis have started running regular longhaul routes](https://www.cnn.com/2025/05/01/business/first-driverless-semis-started-regular-routes) - Driverless trucks are entering regular use, marking a significant step in autonomous vehicle integration into the logistics industry.

* [GitDroid: A third party Android app manager for apps uploaded to GitHub releases](https://github.com/TechnicJelle/GitDroid) - A new tool empowering developers to manage GitHub-hosted apps on Android.

* [Redis Returns To Open Source After Year-Long Proprietary Detour](https://news.slashdot.org/story/25/05/02/0825249/redis-returns-to-open-source-after-year-long-proprietary-detour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Redis rejoins the open-source community, marking a significant move for software transparency and accessibility.

* [Apple, Anthropic Team Up To Build AI-Powered 'Vibe-Coding' Platform](https://apple.slashdot.org/story/25/05/02/181227/apple-anthropic-team-up-to-build-ai-powered-vibe-coding-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Tech giants collaborate to fuse AI into coding platforms, exploring an innovative method of coding efficiency.

## Space and Astronomy

* [Old Soviet Venus descent craft nearing Earth reentry](https://www.leonarddavid.com/old-soviet-venus-descent-craft-nearing-earth-reentry/) - A historical spacecraft is reencountering Earth, offering unique research opportunities.

* [Scientists Discover Massive Molecular Cloud Close To Earth](https://science.slashdot.org/story/25/05/02/0515209/scientists-discover-massive-molecular-cloud-close-to-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A significant cosmic discovery reveals new insights about our celestial neighborhood.

* [A Gas Clump in the Milky Way’s Neighborhood Might be a ‘Dark Galaxy’](https://soylentnews.org/article.pl?sid=25/04/30/1527224&amp;from=rss) - Researchers identify a mysterious gas clump potentially representing a dark galaxy, deepening our understanding of galactic formations.

## Regulation and Privacy

* [UK Preparing To Ban Consumers From Buying Crypto With Borrowed Funds](https://news.slashdot.org/story/25/05/02/1832253/uk-preparing-to-ban-consumers-from-buying-crypto-with-borrowed-funds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The UK government takes a firm stance on crypto regulation, aiming to mitigate financial risks.

* [Irish Privacy Watchdog Fines TikTok $600 Million For China Data Transfers](https://yro.slashdot.org/story/25/05/02/2032203/irish-privacy-watchdog-fines-tiktok-600-million-for-china-data-transfers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - TikTok faces consequences over data-sharing practices, highlighting increasing scrutiny on tech giants' privacy policies.

* [W3C Draft TAG Finding to Remove 3rd Party Cookies](https://w3ctag.github.io/web-without-3p-cookies/) - A significant step towards privacy-conscious web standards by reducing reliance on third-party cookies.

## Cultural Highlights and Achievements

* [Monty Python and the Holy Grail Turns 50](https://soylentnews.org/article.pl?sid=25/05/02/064235&amp;from=rss) - Celebrating the 50th anniversary of a highly influential cult classic in film and humor.

* [Schrödinger's Cat Paradox Marks 90 Years as Quantum Question Endures](https://science.slashdot.org/story/25/05/02/0551203/schrodingers-cat-paradox-marks-90-years-as-quantum-question-endures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Reflecting on the foundational quantum mechanics paradox that continues to challenge our understanding.

* [The History of Album Art](https://matthewstrom.com/writing/album-art/) - Explore the evolution and significance of album art in shaping music culture.

## Scientific Breakthroughs

* [US Approves CRISPR Pigs For Food](https://science.slashdot.org/story/25/05/02/1651254/us-approves-crispr-pigs-for-food?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - CRISPR-edited pigs gain FDA approval, a milestone in genetically modified food.

* [Flying Squirrel-Inspired Drone With Foldable Wings Demonstrates High Maneuverability](https://soylentnews.org/article.pl?sid=25/05/02/0551254&amp;from=rss) - A groundbreaking drone design takes cues from nature to achieve unprecedented agility.

* [Fusion Reactor Called ‘Norm’ Could Outperform Everything We’ve Built So Far](https://soylentnews.org/article.pl?sid=25/04/30/154230&amp;from=rss) - Promising advancements in fusion technology present a potential game changer for energy.

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

* [2025-05-03, 00:45:00](https://it.slashdot.org/story/25/05/02/2251200/microsoft-appoints-deputy-ciso-for-europe-to-reassure-european-it-leaders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Appoints Deputy CISO For Europe To Reassure European IT leaders](https://it.slashdot.org/story/25/05/02/2251200/microsoft-appoints-deputy-ciso-for-europe-to-reassure-european-it-leaders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-03, 00:02:00](https://yro.slashdot.org/story/25/05/02/2243229/us-asks-judge-to-break-up-googles-ad-tech-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Asks Judge To Break Up Google&apos;s Ad Tech Business](https://yro.slashdot.org/story/25/05/02/2243229/us-asks-judge-to-break-up-googles-ad-tech-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 23:20:00](https://news.slashdot.org/story/25/05/02/2121218/temu-to-stop-selling-goods-from-china-directly-to-us-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Temu To Stop Selling Goods From China Directly To US Customers](https://news.slashdot.org/story/25/05/02/2121218/temu-to-stop-selling-goods-from-china-directly-to-us-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 23:10:03](https://news.ycombinator.com/item?id=43875416) - [GitDroid: A third party Android app manager for apps uploaded to GitHub releases](https://github.com/TechnicJelle/GitDroid)
* [2025-05-02, 23:10:00](https://soylentnews.org/article.pl?sid=25/05/02/064235&amp;from=rss) - [Monty Python and the Holy Grail Turns 50](https://soylentnews.org/article.pl?sid=25/05/02/064235&amp;from=rss)
* [2025-05-02, 22:40:00](https://tech.slashdot.org/story/25/05/02/2113240/uber-inks-robotaxi-deal-with-chinese-startup-momenta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Inks Robotaxi Deal With Chinese Startup Momenta](https://tech.slashdot.org/story/25/05/02/2113240/uber-inks-robotaxi-deal-with-chinese-startup-momenta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 22:25:22](https://lobste.rs/s/avzgat/kate_python_language_server) - [Kate and Python language server](https://akselmo.dev/posts/kate-python-lsp/)
* [2025-05-02, 22:06:30](https://lobste.rs/s/ilmhdr/cross_platform_software_development_yes) - [Cross-Platform Software Development – Yes, Bytes Can Be 9 Bits](https://www.reddit.com/r/aethernet/comments/1kd79g7/crossplatform_software_development_part_1_yes/)
* [2025-05-02, 22:00:00](https://tech.slashdot.org/story/25/05/02/216223/pinterest-users-left-confused-by-mass-account-suspensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pinterest Users Left Confused By Mass Account Suspensions](https://tech.slashdot.org/story/25/05/02/216223/pinterest-users-left-confused-by-mass-account-suspensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 21:20:00](https://yro.slashdot.org/story/25/05/02/2032203/irish-privacy-watchdog-fines-tiktok-600-million-for-china-data-transfers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Irish Privacy Watchdog Fines TikTok $600 Million For China Data Transfers](https://yro.slashdot.org/story/25/05/02/2032203/irish-privacy-watchdog-fines-tiktok-600-million-for-china-data-transfers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 21:00:14](https://news.ycombinator.com/item?id=43874534) - [OneText (YC W23) Is Hiring a DevOps/DBA Lead Engineer](https://news.ycombinator.com/item?id=43874534)
* [2025-05-02, 20:45:00](https://science.slashdot.org/story/25/05/02/1839250/eric-schmidt-apparently-bought-relativity-space-to-put-data-centers-in-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Eric Schmidt Apparently Bought Relativity Space To Put Data Centers in Orbit](https://science.slashdot.org/story/25/05/02/1839250/eric-schmidt-apparently-bought-relativity-space-to-put-data-centers-in-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 20:01:00](https://news.slashdot.org/story/25/05/02/1832253/uk-preparing-to-ban-consumers-from-buying-crypto-with-borrowed-funds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Preparing To Ban Consumers From Buying Crypto With Borrowed Funds](https://news.slashdot.org/story/25/05/02/1832253/uk-preparing-to-ban-consumers-from-buying-crypto-with-borrowed-funds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 19:45:22](https://lobste.rs/s/ofm4ex/adaptive_hashing) - [Adaptive Hashing](https://quotenil.com/adaptive-hashing.html)
* [2025-05-02, 19:20:00](https://apple.slashdot.org/story/25/05/02/181227/apple-anthropic-team-up-to-build-ai-powered-vibe-coding-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple, Anthropic Team Up To Build AI-Powered &apos;Vibe-Coding&apos; Platform](https://apple.slashdot.org/story/25/05/02/181227/apple-anthropic-team-up-to-build-ai-powered-vibe-coding-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 19:16:38](https://news.ycombinator.com/item?id=43873679) - [VR Design Unpacked: The secret to Beat Saber&apos;s fun](https://www.roadtovr.com/beat-saber-instructed-motion-until-you-fall-inside-xr-design/)
* [2025-05-02, 19:09:22](https://news.ycombinator.com/item?id=43873604) - [A proof of concept tool to verify estimates](https://terrytao.wordpress.com/2025/05/01/a-proof-of-concept-tool-to-verify-estimates/)
* [2025-05-02, 19:02:01](https://news.ycombinator.com/item?id=43873531) - [Old Soviet Venus descent craft nearing Earth reentry](https://www.leonarddavid.com/old-soviet-venus-descent-craft-nearing-earth-reentry/)
* [2025-05-02, 18:48:05](https://lobste.rs/s/qmhxwf/seeking_answer_why_can_t_html_alone_do) - [Seeking an Answer: Why can’t HTML alone do includes?](https://frontendmasters.com/blog/seeking-an-answer-why-cant-html-alone-do-includes/)
* [2025-05-02, 18:40:00](https://it.slashdot.org/story/25/05/02/1724245/pinterest-users-left-confused-by-mass-account-suspensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pinterest Users Left Confused By Mass Account Suspensions](https://it.slashdot.org/story/25/05/02/1724245/pinterest-users-left-confused-by-mass-account-suspensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 18:25:00](https://soylentnews.org/article.pl?sid=25/05/02/0551254&amp;from=rss) - [Flying Squirrel-Inspired Drone With Foldable Wings Demonstrates High Maneuverability](https://soylentnews.org/article.pl?sid=25/05/02/0551254&amp;from=rss)
* [2025-05-02, 18:12:15](https://news.ycombinator.com/item?id=43873074) - [Show HN: I built a synthesizer based on 3D physics](https://anukari.com)
* [2025-05-02, 18:02:51](https://news.ycombinator.com/item?id=43872990) - [Driverless semis have started running regular longhaul routes](https://www.cnn.com/2025/05/01/business/first-driverless-semis-started-regular-routes)
* [2025-05-02, 18:01:12](https://lobste.rs/s/jnleid/starting_on_seamless_c_interop_jank) - [Starting on seamless C++ interop in jank](https://jank-lang.org/blog/2025-05-02-starting-seamless-interop/)
* [2025-05-02, 18:00:00](https://science.slashdot.org/story/25/05/02/1651254/us-approves-crispr-pigs-for-food?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Approves CRISPR Pigs For Food](https://science.slashdot.org/story/25/05/02/1651254/us-approves-crispr-pigs-for-food?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 17:42:28](https://news.ycombinator.com/item?id=43872761) - [Show HN: Blast – Fast, multi-threaded serving engine for web browsing AI agents](https://github.com/stanford-mast/blast)
* [2025-05-02, 17:39:00](https://lobste.rs/s/z4bimm/full_network_atproto_relay_for_34_month) - [A Full-Network ATProto Relay for $34 a Month](https://whtwnd.com/bnewbold.net/3lo7a2a4qxg2l)
* [2025-05-02, 17:36:54](https://lobste.rs/s/dsczpg/prompt_chaining_reimagined_with_type) - [Prompt chaining reimagined with type inference](https://www.haskellforall.com/2025/05/prompt-chaining-reimagined-with-type_2.html)
* [2025-05-02, 17:30:08](https://news.ycombinator.com/item?id=43872625) - [The History of Album Art](https://matthewstrom.com/writing/album-art/)
* [2025-05-02, 17:20:00](https://science.slashdot.org/story/25/05/02/0515209/scientists-discover-massive-molecular-cloud-close-to-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Discover Massive Molecular Cloud Close To Earth](https://science.slashdot.org/story/25/05/02/0515209/scientists-discover-massive-molecular-cloud-close-to-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 16:45:29](https://news.ycombinator.com/item?id=43872094) - [Building Burstables: CPU slicing with cgroups](https://www.ubicloud.com/blog/building-burstables-cpu-slicing-with-cgroups)
* [2025-05-02, 16:40:00](https://news.slashdot.org/story/25/05/02/0825249/redis-returns-to-open-source-after-year-long-proprietary-detour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Redis Returns To Open Source After Year-Long Proprietary Detour](https://news.slashdot.org/story/25/05/02/0825249/redis-returns-to-open-source-after-year-long-proprietary-detour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 16:08:41](https://lobste.rs/s/b2itx4/reading_zanzibar) - [Reading Zanzibar](https://macwright.com/2025/05/02/reading-zanzibar)
* [2025-05-02, 16:00:00](https://news.slashdot.org/story/25/05/02/0558256/solar-panels-to-be-fitted-on-all-new-build-homes-in-england-by-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Solar Panels To Be Fitted On All New-Build Homes in England By 2027](https://news.slashdot.org/story/25/05/02/0558256/solar-panels-to-be-fitted-on-all-new-build-homes-in-england-by-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 15:21:49](https://news.ycombinator.com/item?id=43870998) - [Show HN: GPT-2 implemented using graphics shaders](https://github.com/nathan-barry/gpt2-webgl)
* [2025-05-02, 15:20:00](https://science.slashdot.org/story/25/05/02/0551203/schrodingers-cat-paradox-marks-90-years-as-quantum-question-endures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Schrodinger&apos;s Cat Paradox Marks 90 Years as Quantum Question Endures](https://science.slashdot.org/story/25/05/02/0551203/schrodingers-cat-paradox-marks-90-years-as-quantum-question-endures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-02, 15:19:22](https://news.ycombinator.com/item?id=43870969) - [The language brain matters more for programming than the math brain? (2020)](https://massivesci.com/articles/programming-math-language-python-women-in-science/)
* [2025-05-02, 15:14:45](https://lobste.rs/s/wt6rqx/cost_poison) - [The cost of poison](https://chronicles.mad-scientist.club/tales/the-cost-of-poison/)
* [2025-05-02, 15:07:29](https://news.ycombinator.com/item?id=43870819) - [Expanding on what we missed with sycophancy](https://openai.com/index/expanding-on-sycophancy/)
* [2025-05-02, 13:45:08](https://lobste.rs/s/utekbr/rye_principles) - [Rye principles](https://ryelang.org/#rye-principles)
* [2025-05-02, 13:42:00](https://soylentnews.org/article.pl?sid=25/05/02/0534212&amp;from=rss) - [China&apos;s &apos;2D&apos; Chip Could Soon be Used to Make Silicon-Free Chips](https://soylentnews.org/article.pl?sid=25/05/02/0534212&amp;from=rss)
* [2025-05-02, 13:24:16](https://lobste.rs/s/bifofa/common_lisp_jq_replacement) - [A Common Lisp jq replacement](https://world-playground-deceit.net/blog/2025/03/a-common-lisp-jq-replacement.html)
* [2025-05-02, 13:18:26](https://news.ycombinator.com/item?id=43869353) - [Suno v4.5](https://suno.com/explore/)
* [2025-05-02, 13:11:16](https://news.ycombinator.com/item?id=43869288) - [The Cannae Problem](https://www.joanwestenberg.com/the-cannae-problem/)
* [2025-05-02, 12:59:18](https://lobste.rs/s/9jn3jg/reflecting_on_year_gamedev_zig) - [Reflecting on a year of Gamedev in Zig](https://bgthompson.codeberg.page/blog/one-year-zig-gamedev-reflections/)
* [2025-05-02, 12:15:48](https://news.ycombinator.com/item?id=43868737) - [A Common Lisp jq replacement](https://world-playground-deceit.net/blog/2025/03/a-common-lisp-jq-replacement.html)
* [2025-05-02, 11:09:52](https://news.ycombinator.com/item?id=43868273) - [Webflow makes GSAP 100% free – plus more updates](https://webflow.com/blog/gsap-becomes-free)
* [2025-05-02, 10:58:10](https://news.ycombinator.com/item?id=43868192) - [How to live an intellectually rich life](https://utsavmamoria.substack.com/p/how-to-live-an-intellectually-rich)
* [2025-05-02, 10:46:26](https://news.ycombinator.com/item?id=43868130) - [The Totalitarian Buddhist Who Beat SIM City (2010)](https://web.archive.org/web/20211117094441/https://www.vice.com/en/article/4w4kg3/the-totalitarian-buddhist-who-beat-sim-city)
* [2025-05-02, 10:45:46](https://lobste.rs/s/ljtwfv/what_i_ve_learned_from_jj) - [What I’ve learned from jj](https://zerowidth.com/2025/what-ive-learned-from-jj/)
* [2025-05-02, 10:37:36](https://lobste.rs/s/wdtxhm/one_ring_problem_abstraction_our_quest) - [The one ring problem: abstraction and our quest for power (2018)](https://www.tedinski.com/2018/01/30/the-one-ring-problem-abstraction-and-power.html)
* [2025-05-02, 10:35:38](https://lobste.rs/s/vubugi/optimizing_guile_scheme) - [Optimizing Guile Scheme](https://dthompson.us/posts/optimizing-guile-scheme.html)
* [2025-05-02, 09:52:45](https://lobste.rs/s/ndvt4n/bloom_filters) - [Bloom filters](https://eli.thegreenplace.net/2025/bloom-filters/)
* [2025-05-02, 08:54:00](https://soylentnews.org/article.pl?sid=25/04/30/1527224&amp;from=rss) - [A Gas Clump in the Milky Way’s Neighborhood Might be a ‘Dark Galaxy’](https://soylentnews.org/article.pl?sid=25/04/30/1527224&amp;from=rss)
* [2025-05-02, 08:21:43](https://news.ycombinator.com/item?id=43867403) - [What I&apos;ve learned from jj](https://zerowidth.com/2025/what-ive-learned-from-jj/)
* [2025-05-02, 07:48:11](https://news.ycombinator.com/item?id=43867211) - [Just redesigned my personal site with a TTY-style interface](https://www.abdisa.me/)
* [2025-05-02, 07:23:47](https://lobste.rs/s/ioyjfm/my_tips_on_giving_technical_talks) - [My tips on giving technical talks](https://marcusnoble.co.uk/2025-04-30-my-tips-on-giving-technical-talks/)
* [2025-05-02, 05:37:00](https://soylentnews.org/meta/article.pl?sid=25/05/02/0531214&amp;from=rss) - [janrinok - Resignation](https://soylentnews.org/meta/article.pl?sid=25/05/02/0531214&amp;from=rss)
* [2025-05-02, 04:49:02](https://news.ycombinator.com/item?id=43866303) - [Don&apos;t watermark your legal PDFs with purple dragons in suits](https://arstechnica.com/tech-policy/2025/05/dont-watermark-your-legal-pdfs-with-purple-dragons-in-suits/)
* [2025-05-02, 04:13:00](https://soylentnews.org/article.pl?sid=25/04/30/1513218&amp;from=rss) - [Google is Killing Software Support for Early Nest Thermostats](https://soylentnews.org/article.pl?sid=25/04/30/1513218&amp;from=rss)
* [2025-05-02, 02:58:44](https://lobste.rs/s/yfahhy/apple_library_primer) - [An Apple Library Primer](https://developer.apple.com/forums/thread/715385)
* [2025-05-02, 02:15:58](https://lobste.rs/s/qqrrga/w3c_draft_tag_finding_remove_3rd_party) - [W3C Draft TAG Finding to Remove 3rd Party Cookies](https://w3ctag.github.io/web-without-3p-cookies/)
* [2025-05-02, 02:15:12](https://lobste.rs/s/67ijih/day_anubis_saved_our_websites_from_ddos) - [The Day Anubis Saved Our Websites From a DDoS Attack](https://fabulous.systems/posts/2025/05/anubis-saved-our-websites-from-a-ddos-attack/)
* [2025-05-02, 00:39:45](https://news.ycombinator.com/item?id=43864986) - [Normalizing Ratings](http://hopefullyintersting.blogspot.com/2025/05/normalizing-ratings.html)
* [2025-05-01, 23:32:00](https://soylentnews.org/article.pl?sid=25/04/30/1511234&amp;from=rss) - [OIN Marks 20 Years Of Defending Linux And Open Source From Patent Trolls](https://soylentnews.org/article.pl?sid=25/04/30/1511234&amp;from=rss)
* [2025-05-01, 22:46:45](https://lobste.rs/s/psklqi/deno_s_decline_6_regions_falling) - [Deno’s Decline (6 Regions and Falling)](https://dbushell.com/2025/04/28/denos-decline/)
* [2025-05-01, 21:11:04](https://news.ycombinator.com/item?id=43863414) - [Derivation and Intuition behind Poisson distribution](https://antaripasaha.notion.site/Derivation-and-Intuition-behind-Poisson-distribution-1255314a56398062bf9dd9049fb1c396)
* [2025-05-01, 18:52:00](https://soylentnews.org/article.pl?sid=25/04/30/157220&amp;from=rss) - [Left or Right Arm? New Research Reveals Why Vaccination Site Matters for Immune Response](https://soylentnews.org/article.pl?sid=25/04/30/157220&amp;from=rss)
* [2025-05-01, 18:03:33](https://news.ycombinator.com/item?id=43861207) - [Achieving Human Level Competitive Robot Table Tennis](https://sites.google.com/view/competitive-robot-table-tennis/home?pli=1)
* [2025-05-01, 18:02:10](https://news.ycombinator.com/item?id=43861189) - [You could just choose optimism](https://quarter--mile.com/You-Could-Just-Choose-Optimism)
* [2025-05-01, 16:16:10](https://lobste.rs/s/1cpl6v/redis_is_open_source_again) - [Redis is open source again](https://antirez.com/news/151)
* [2025-05-01, 15:56:35](https://news.ycombinator.com/item?id=43859446) - [Redis is open source again](https://antirez.com/news/151)
* [2025-05-01, 14:30:42](https://news.ycombinator.com/item?id=43858183) - [Doom GPU Flame Graphs](https://www.brendangregg.com/blog/2025-05-01/doom-gpu-flame-graphs.html)
* [2025-05-01, 14:23:03](https://lobste.rs/s/ctenw6/e_book_reader_for_e_ink_devices) - [E-book reader for e-ink devices](https://github.com/koreader/koreader)
* [2025-05-01, 14:12:06](https://lobste.rs/s/hyuadu/faster_way_copy_sqlite_databases_between) - [A faster way to copy SQLite databases between computers](https://alexwlchan.net/2025/copying-sqlite-databases/)
* [2025-05-01, 14:03:00](https://soylentnews.org/article.pl?sid=25/04/30/154230&amp;from=rss) - [Fusion Reactor Called ‘Norm’ Could Outperform Everything We’ve Built So Far](https://soylentnews.org/article.pl?sid=25/04/30/154230&amp;from=rss)
* [2025-05-01, 13:16:39](https://lobste.rs/s/hetkdt/elm_test_distributions) - [Elm test distributions](https://martin.janiczek.cz/2025/05/01/elm-test-distributions.html)
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
