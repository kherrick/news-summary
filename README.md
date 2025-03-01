# [News Summary](https://kherrick.github.io/news-summary/)

## Space Exploration and Innovations

* [SpaceX: Actually, Dying Starlink Satellites Don't Always Fully Burn Up](https://soylentnews.org/article.pl?sid=25/03/01/0115227&from=rss)

* [New Research Suggests Ancient Ocean on Mars](https://science.slashdot.org/story/25/03/01/0719208/new-research-suggests-ancient-ocean-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Chinese Scientists Developing Mars Drone That Can Roll and Fly](https://science.slashdot.org/story/25/03/01/0116201/chinese-scientists-developing-mars-drone-that-can-roll-and-fly?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Technology and Software

* [Mozilla Revises Firefox's Terms of Use, Clarifies That They Don't Own Your Data](https://news.slashdot.org/story/25/03/01/2111254/mozilla-revises-firefoxs-terms-of-use-clarifies-that-they-dont-own-your-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Xcode constantly phones home](https://lapcatsoftware.com/articles/2025/2/5.html?__readwiseLocation=)

* [Tesla Moves Towards Launching an Uber Competitor](https://tech.slashdot.org/story/25/03/01/0346205/tesla-moves-towards-launching-an-uber-competitor?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Scientific Developments

* [Five Days of Ultra-Processed Food: Study Finds That's Enough to Alter the Brain](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss)

* [Anti-Aging Pill for Dogs Clears Key FDA Hurdle](https://science.slashdot.org/story/25/03/01/0424235/anti-aging-pill-for-dogs-clears-key-fda-hurdle?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Water Chlorination Might Be Raising Our Risk Of Certain Cancers](https://soylentnews.org/article.pl?sid=25/02/28/0647213&from=rss)

## Gaming and Entertainment

* [Nearly 25 years later, Terminator 2 is getting a new video game](https://gizmodo.com/nearly-25-years-later-terminator-2-is-getting-a-new-video-game-2000570123)

* [Magnus Carlsen Auctions Jeans, Admits He Can't Beat Chess Engines](https://games.slashdot.org/story/25/03/01/051200/magnus-carlsen-auctions-jeans-admits-he-cant-beat-chess-engines?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [EA open sourced Command & Conquer, Red Alert, Renegade and Generals](https://store.steampowered.com/news/app/2229890/view/502818210084553731)

## AI and Machine Learning

* [Infinite Retrieval: Attention enhanced LLMs in long-context processing](https://arxiv.org/abs/2502.12962)

* [Copilot for Everything: Training your AI replacement one keystroke at a time](https://substack.com/home/post/p-158101095)

* [Structured data extraction from unstructured content using LLM schemas](https://simonwillison.net/2025/Feb/28/llm-schemas/)

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

* [2025-03-01, 21:49:00](https://soylentnews.org/article.pl?sid=25/03/01/0115227&from=rss) - [SpaceX: Actually, Dying Starlink Satellites Don't Always Fully Burn Up](https://soylentnews.org/article.pl?sid=25/03/01/0115227&from=rss)
* [2025-03-01, 21:34:00](https://news.slashdot.org/story/25/03/01/2111254/mozilla-revises-firefoxs-terms-of-use-clarifies-that-they-dont-own-your-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mozilla Revises Firefox's Terms of Use, Clarifies That They Don't Own Your Data](https://news.slashdot.org/story/25/03/01/2111254/mozilla-revises-firefoxs-terms-of-use-clarifies-that-they-dont-own-your-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 21:11:26](https://news.ycombinator.com/item?id=43223718) - [Show HN: Berlin Swapfest – Electronics flea market](https://www.swapfest.berlin/)
* [2025-03-01, 20:58:18](https://lobste.rs/s/nvoykv/making_o1_o3_sonnet_3_7_hallucinate_for) - [Making o1, o3, and Sonnet 3.7 Hallucinate for Everyone](https://bengarcia.dev/making-o1-o3-and-sonnet-3-7-hallucinate-for-everyone)
* [2025-03-01, 20:34:00](https://science.slashdot.org/story/25/03/01/0719208/new-research-suggests-ancient-ocean-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Research Suggests Ancient Ocean on Mars](https://science.slashdot.org/story/25/03/01/0719208/new-research-suggests-ancient-ocean-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 20:06:02](https://news.ycombinator.com/item?id=43223106) - [Nearly 25 years later, Terminator 2 is getting a new video game](https://gizmodo.com/nearly-25-years-later-terminator-2-is-getting-a-new-video-game-2000570123)
* [2025-03-01, 20:03:06](https://news.ycombinator.com/item?id=43223075) - [Xcode constantly phones home](https://lapcatsoftware.com/articles/2025/2/5.html?__readwiseLocation=)
* [2025-03-01, 19:55:43](https://lobste.rs/s/nzjtop/user_defined_order_sql_2018) - [User-defined Order in SQL (2018)](https://begriffs.com/posts/2018-03-20-user-defined-order.html)
* [2025-03-01, 19:37:49](https://news.ycombinator.com/item?id=43222834) - [Infinite Retrieval: Attention enhanced LLMs in long-context processing](https://arxiv.org/abs/2502.12962)
* [2025-03-01, 19:34:00](https://developers.slashdot.org/story/25/03/01/0548217/perls-cpan-security-group-is-now-a-cna-can-assign-cves?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Perl's CPAN Security Group is Now a CNA, Can Assign CVEs](https://developers.slashdot.org/story/25/03/01/0548217/perls-cpan-security-group-is-now-a-cna-can-assign-cves?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 19:33:41](https://news.ycombinator.com/item?id=43222791) - [GLP-1 drugs – the biggest economic disruptor since the internet? (2024)](https://wildfirelabs.substack.com/p/the-100-trillion-disruption-the-unforeseen)
* [2025-03-01, 19:07:21](https://lobste.rs/s/pul56b/nginx_explorer_upload) - [Nginx Explorer - Upload](https://blog.izissise.net/posts/ngxp-upload/)
* [2025-03-01, 18:37:09](https://news.ycombinator.com/item?id=43222168) - [Efabless – Shutdown Notice](https://efabless.com/notice)
* [2025-03-01, 18:34:00](https://science.slashdot.org/story/25/03/01/0424235/anti-aging-pill-for-dogs-clears-key-fda-hurdle?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anti-Aging Pill for Dogs Clears Key FDA Hurdle](https://science.slashdot.org/story/25/03/01/0424235/anti-aging-pill-for-dogs-clears-key-fda-hurdle?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 18:24:22](https://news.ycombinator.com/item?id=43222027) - [Making o1, o3, and Sonnet 3.7 hallucinate for everyone](https://bengarcia.dev/making-o1-o3-and-sonnet-3-7-hallucinate-for-everyone)
* [2025-03-01, 18:20:43](https://lobste.rs/s/g9uepw/lisp_your_language) - [Lisp in Your Language](https://danthedev.com/lisp-in-your-language)
* [2025-03-01, 18:09:00](https://lobste.rs/s/jhj07m/get_loser_we_re_rewinding_stack) - [Get in loser. We're rewinding the stack. (Sandboxing Perl with WASM.)](https://andrews.substack.com/p/get-in-loser-were-rewinding-the-stack)
* [2025-03-01, 17:54:55](https://news.ycombinator.com/item?id=43221697) - [The most unhinged video wall, made out of Chromebooks](https://varun.ch/posts/videowall/)
* [2025-03-01, 17:34:00](https://games.slashdot.org/story/25/03/01/051200/magnus-carlsen-auctions-jeans-admits-he-cant-beat-chess-engines?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Magnus Carlsen Auctions Jeans, Admits He Can't Beat Chess Engines](https://games.slashdot.org/story/25/03/01/051200/magnus-carlsen-auctions-jeans-admits-he-cant-beat-chess-engines?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 17:01:00](https://soylentnews.org/article.pl?sid=25/03/01/0055211&from=rss) - [Pandas \"Tricked\" Into Becoming the World's Biggest Bamboo Fans](https://soylentnews.org/article.pl?sid=25/03/01/0055211&from=rss)
* [2025-03-01, 16:49:44](https://lobste.rs/s/ifczmp/pinning_nixos_with_npins_how_kill) - [Pinning NixOS with npins, or how to kill channels forever without flakes](https://jade.fyi/blog/pinning-nixos-with-npins/)
* [2025-03-01, 16:34:00](https://tech.slashdot.org/story/25/03/01/0346205/tesla-moves-towards-launching-an-uber-competitor?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Tesla Moves Towards Launching an Uber Competitor](https://tech.slashdot.org/story/25/03/01/0346205/tesla-moves-towards-launching-an-uber-competitor?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 16:33:03](https://news.ycombinator.com/item?id=43220938) - [Copilot for Everything: Training your AI replacement one keystroke at a time](https://substack.com/home/post/p-158101095)
* [2025-03-01, 16:02:58](https://lobste.rs/s/m0mwil/hardware_discovery_acpi_device_tree) - [Hardware discovery: ACPI & Device Tree](https://blogsystem5.substack.com/p/hardware-autoconfiguration)
* [2025-03-01, 15:34:00](https://developers.slashdot.org/story/25/02/28/0340214/google-calls-for-measurable-memory-safety-standards-for-software?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Calls for Measurable Memory-Safety Standards for Software](https://developers.slashdot.org/story/25/02/28/0340214/google-calls-for-measurable-memory-safety-standards-for-software?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 15:11:56](https://lobste.rs/s/uai6m2/ai_assisted_creativity_race_claim_future) - [AI-assisted creativity and the race to claim the future](https://kyefox.com/ai-assisted-creativity/)
* [2025-03-01, 15:01:29](https://news.ycombinator.com/item?id=43219865) - [Become a sponsor to Servo](https://github.com/sponsors/servo)
* [2025-03-01, 14:56:03](https://lobste.rs/s/xmlv0z/your_next_two_zeroes) - [Your Next Two Zeroes](https://taylor.town/next-two-zeroes)
* [2025-03-01, 13:24:30](https://news.ycombinator.com/item?id=43218998) - [OpenGL to WASM, learning from my mistakes](https://uds5501.github.io/mindpalace/2025/03/01/opengl-webgl-porting.html)
* [2025-03-01, 12:17:00](https://soylentnews.org/article.pl?sid=25/03/01/0049207&from=rss) - [Skype is Shutting Down After Two Decades](https://soylentnews.org/article.pl?sid=25/03/01/0049207&from=rss)
* [2025-03-01, 10:18:31](https://lobste.rs/s/d8amk0/is_rust_good_fit_for_business_apps) - [Is Rust a good fit for business apps?](https://www.bartoszsypytkowski.com/is-rust-a-good-fit-for-business-apps/)
* [2025-03-01, 10:00:00](https://tech.slashdot.org/story/25/03/01/0059224/cosmic-desktop-alpha-6-released?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [COSMIC Desktop Alpha 6 Released](https://tech.slashdot.org/story/25/03/01/0059224/cosmic-desktop-alpha-6-released?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 09:21:21](https://lobste.rs/s/vgbpbc/4_mains_nothing_at_all) - [4 mains or nothing at all](https://andrews.substack.com/p/4-mains-or-nothing-at-all)
* [2025-03-01, 08:17:02](https://lobste.rs/s/8wmhlu/cost_go_s_panic_recover) - [The cost of Go's panic and recover](https://jub0bs.com/posts/2025-02-28-cost-of-panic-recover/)
* [2025-03-01, 07:36:00](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss) - [Five Days of Ultra-Processed Food: Study Finds That's Enough to Alter the Brain](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss)
* [2025-03-01, 07:00:00](https://science.slashdot.org/story/25/03/01/0116201/chinese-scientists-developing-mars-drone-that-can-roll-and-fly?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Chinese Scientists Developing Mars Drone That Can Roll and Fly](https://science.slashdot.org/story/25/03/01/0116201/chinese-scientists-developing-mars-drone-that-can-roll-and-fly?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 04:12:12](https://lobste.rs/s/suy0fp/deno_shows_us_there_s_better_way) - [Deno shows us there's a better way](https://www.macchaffee.com/blog/2025/deno/)
* [2025-03-01, 04:10:46](https://news.ycombinator.com/item?id=43215781) - [Zen 5's AVX-512 Frequency Behavior](https://chipsandcheese.com/p/zen-5s-avx-512-frequency-behavior)
* [2025-03-01, 03:30:00](https://it.slashdot.org/story/25/03/01/019202/serbian-students-android-phone-compromised-by-exploit-from-cellebrite?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Serbian Student's Android Phone Compromised By Exploit From Cellebrite](https://it.slashdot.org/story/25/03/01/019202/serbian-students-android-phone-compromised-by-exploit-from-cellebrite?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 02:53:00](https://soylentnews.org/article.pl?sid=25/02/28/0654225&from=rss) - [Internet Society Wants to Improve Terrestrial Fibre Maps](https://soylentnews.org/article.pl?sid=25/02/28/0654225&from=rss)
* [2025-03-01, 02:10:00](https://tech.slashdot.org/story/25/02/28/2231210/googles-taara-hopes-to-usher-in-a-new-era-of-internet-powered-by-light?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google's Taara Hopes To Usher in a New Era of Internet Powered by Light](https://tech.slashdot.org/story/25/02/28/2231210/googles-taara-hopes-to-usher-in-a-new-era-of-internet-powered-by-light?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 01:30:00](https://slashdot.org/story/25/03/01/0049256/3d-software-company-autodesk-cuts-1350-jobs-to-boost-ai-investment?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [3D Software Company Autodesk Cuts 1,350 Jobs To Boost AI Investment](https://slashdot.org/story/25/03/01/0049256/3d-software-company-autodesk-cuts-1350-jobs-to-boost-ai-investment?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 01:26:34](https://lobste.rs/s/kmsjd8/nine_c64_sprite_demo_explained) - [Nine C64 sprite demo explained](https://www.linusakesson.net/scene/nine/explanation.php)
* [2025-03-01, 00:59:13](https://news.ycombinator.com/item?id=43214263) - [The Housing Theory of Everything (2021)](https://worksinprogress.co/issue/the-housing-theory-of-everything/)
* [2025-03-01, 00:50:00](https://apple.slashdot.org/story/25/02/28/2222213/apple-accused-of-misleading-consumers-with-apple-watch-carbon-neutral-claims?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Accused of Misleading Consumers With Apple Watch 'Carbon Neutral' Claims](https://apple.slashdot.org/story/25/02/28/2222213/apple-accused-of-misleading-consumers-with-apple-watch-carbon-neutral-claims?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 00:30:00](https://tech.slashdot.org/story/25/02/28/2230252/microsoft-begins-turning-off-ublock-origin-other-extensions-in-edge?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Begins Turning Off uBlock Origin, Other Extensions In Edge](https://tech.slashdot.org/story/25/02/28/2230252/microsoft-begins-turning-off-ublock-origin-other-extensions-in-edge?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 00:10:00](https://slashdot.org/story/25/02/28/2220221/benioff-says-salesforce-wont-hire-engineers-this-year-due-to-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Benioff Says Salesforce Won't Hire Engineers This Year Due To AI](https://slashdot.org/story/25/02/28/2220221/benioff-says-salesforce-wont-hire-engineers-this-year-due-to-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 23:33:50](https://lobste.rs/s/mpkdpt/it_is_no_longer_safe_move_our_governments) - [It is no longer safe to move our governments and societies to US clouds](https://berthub.eu/articles/posts/you-can-no-longer-base-your-government-and-society-on-us-clouds/)
* [2025-02-28, 23:20:38](https://news.ycombinator.com/item?id=43213143) - [Inheriting is becoming nearly as important as working](https://www.economist.com/leaders/2025/02/27/inheriting-is-becoming-nearly-as-important-as-working)
* [2025-02-28, 23:05:21](https://news.ycombinator.com/item?id=43212952) - [Why it's so hard to build a jet engine](https://www.construction-physics.com/p/why-its-so-hard-to-build-a-jet-engine)
* [2025-02-28, 22:05:00](https://soylentnews.org/article.pl?sid=25/02/28/0647213&from=rss) - [Water Chlorination Might Be Raising Our Risk Of Certain Cancers](https://soylentnews.org/article.pl?sid=25/02/28/0647213&from=rss)
* [2025-02-28, 21:57:03](https://lobste.rs/s/edcrrx/enough_with_all_raft) - [Enough with all the Raft](https://www.hytradboi.com/2025/2016d6c4-b08d-40b3-af2f-67926ca8521f-enough-with-all-the-raft)
* [2025-02-28, 21:32:35](https://lobste.rs/s/zian90/how_gain_code_execution_on_millions) - [how to gain code execution on millions of people and hundreds of popular apps](https://kibty.town/blog/todesktop/)
* [2025-02-28, 21:05:35](https://news.ycombinator.com/item?id=43210858) - [How to gain code execution on hundreds of millions of people and popular apps](https://kibty.town/blog/todesktop/)
* [2025-02-28, 20:04:35](https://lobste.rs/s/2ah6bi/programming_without_pointers) - [Programming without pointers](https://www.hytradboi.com/2025/05c72e39-c07e-41bc-ac40-85e8308f2917-programming-without-pointers)
* [2025-02-28, 19:19:20](https://lobste.rs/s/uzx2be/windows_nt_for_gamecube_wii) - [Windows NT for GameCube/Wii](https://github.com/Wack0/entii-for-workcubes)
* [2025-02-28, 17:53:11](https://lobste.rs/s/xhssly/thoughts_about_rustdoc) - [Thoughts about rustdoc](https://lobste.rs/s/xhssly/thoughts_about_rustdoc)
* [2025-02-28, 17:40:06](https://lobste.rs/s/h38zur/structured_data_extraction_from) - [Structured data extraction from unstructured content using LLM schemas](https://simonwillison.net/2025/Feb/28/llm-schemas/)
* [2025-02-28, 17:17:00](https://soylentnews.org/article.pl?sid=25/02/28/0643220&from=rss) - [US Investigates Whether Deepseek Obtained NVidia Chips Through Singapore to Bypass Restrictions](https://soylentnews.org/article.pl?sid=25/02/28/0643220&from=rss)
* [2025-02-28, 17:01:43](https://news.ycombinator.com/item?id=43207831) - [3,200% CPU Utilization](https://josephmate.github.io/2025-02-26-3200p-cpu-util/)
* [2025-02-28, 14:35:12](https://lobste.rs/s/ccazb3/let_s_hold_hands) - [Let's Hold Hands](https://untested.sonnet.io/notes/lets-hold-hands/)
* [2025-02-28, 13:37:45](https://lobste.rs/s/983aqv/leader_election_with_s3_if_match) - [Leader election with S3 and If-Match](https://quanttype.net/posts/2025-02-25-leader-election-with-s3-and-if-match.html)
* [2025-02-28, 12:34:58](https://lobste.rs/s/xwaqpt/ea_open_sourced_command_conquer_red_alert) - [EA open sourced Command & Conquer, Red Alert, Renegade and Generals](https://store.steampowered.com/news/app/2229890/view/502818210084553731)
* [2025-02-28, 12:32:00](https://soylentnews.org/article.pl?sid=25/02/28/0640209&from=rss) - [PSA: Amazon Kills “Download & Transfer Via USB” Option for Kindles This Week](https://soylentnews.org/article.pl?sid=25/02/28/0640209&from=rss)
* [2025-02-28, 12:19:00](https://news.ycombinator.com/item?id=43204796) - [Type++: Prohibiting Type Confusion with Inline Type Information [pdf]](https://www.ndss-symposium.org/wp-content/uploads/2025-53-paper.pdf)
* [2025-02-28, 10:31:00](https://news.ycombinator.com/item?id=43204032) - [Drone captures narwhals using their tusks to explore, forage and play](https://phys.org/news/2025-02-drone-captures-narwhals-tusks-explore.html)
* [2025-02-28, 10:29:31](https://lobste.rs/s/nzz7an/mouseless_tale_trying_for_keyboard) - [A mouseless tale: trying for a keyboard-driven desktop](https://lwn.net/Articles/1005332/)
* [2025-02-28, 07:47:00](https://soylentnews.org/article.pl?sid=25/02/27/1641235&from=rss) - [NASA's James Webb Space Telescope Faces Potential 20% Budget Cut Just 4 Years Into its Mission](https://soylentnews.org/article.pl?sid=25/02/27/1641235&from=rss)
* [2025-02-28, 04:33:26](https://news.ycombinator.com/item?id=43201720) - [Video encoding requires using your eyes](https://redvice.org/2025/encoding-requires-eyes/)
* [2025-02-28, 03:05:00](https://soylentnews.org/article.pl?sid=25/02/27/1633200&from=rss) - [Piezoelectric Catalyst Destroys Forever Chemicals](https://soylentnews.org/article.pl?sid=25/02/27/1633200&from=rss)
* [2025-02-27, 22:19:00](https://soylentnews.org/article.pl?sid=25/02/26/190229&from=rss) - [Right to Repair Laws Have Now Been Introduced in All 50 US States](https://soylentnews.org/article.pl?sid=25/02/26/190229&from=rss)
* [2025-02-27, 17:35:00](https://soylentnews.org/article.pl?sid=25/02/26/1856235&from=rss) - [Robot With 1,000 Muscles Twitches Like Human While Dangling From Ceiling](https://soylentnews.org/article.pl?sid=25/02/26/1856235&from=rss)
* [2025-02-27, 13:17:43](https://news.ycombinator.com/item?id=43194100) - [The Rake and its Prongs (2024)](https://christiantietze.de/posts/2024/06/the-rake-and-its-prongs/)
* [2025-02-27, 12:51:00](https://soylentnews.org/article.pl?sid=25/02/26/1852225&from=rss) - [Physx Feature Unlocked For RTX 5090 With RTX 3050 'Helper' To Enable Full Performance](https://soylentnews.org/article.pl?sid=25/02/26/1852225&from=rss)
* [2025-02-27, 08:08:00](https://soylentnews.org/article.pl?sid=25/02/26/1850240&from=rss) - [Bubbles That Break Rules: A Fluid Discovery That Defies Logic](https://soylentnews.org/article.pl?sid=25/02/26/1850240&from=rss)
* [2025-02-27, 02:27:00](https://soylentnews.org/article.pl?sid=25/02/26/0210231&from=rss) - [As the Kernel Turns: Rust in Linux Saga Reaches the “Linus in All-Caps” Phase](https://soylentnews.org/article.pl?sid=25/02/26/0210231&from=rss)
* [2025-02-26, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/25/0655200&from=rss) - [Software Engineering Job Openings Hit 5-Year Low Amid Industry Shift](https://soylentnews.org/article.pl?sid=25/02/25/0655200&from=rss)
* [2025-02-26, 16:53:00](https://soylentnews.org/article.pl?sid=25/02/25/0646226&from=rss) - [Chinese Hackers Compromised Organizations in 70 Nations, Warn US Federal Agencies](https://soylentnews.org/article.pl?sid=25/02/25/0646226&from=rss)
* [2025-02-26, 13:58:24](https://news.ycombinator.com/item?id=43183635) - [Show HN: I made a website where you can create your own \"Life in Weeks\" timeline](https://lifeweeks.app/)
* [2025-02-26, 12:05:00](https://soylentnews.org/article.pl?sid=25/02/25/0640214&from=rss) - [Seagate's Fraudulent HDD Scandal Expands: Ironwolf Pro Hard Drives Reportedly Also Affected](https://soylentnews.org/article.pl?sid=25/02/25/0640214&from=rss)
* [2025-02-26, 07:20:00](https://soylentnews.org/article.pl?sid=25/02/25/0633257&from=rss) - [The Secretive X-37B Space Plane Snapped This Picture of Earth From Orbit](https://soylentnews.org/article.pl?sid=25/02/25/0633257&from=rss)
* [2025-02-26, 02:33:00](https://soylentnews.org/article.pl?sid=25/02/24/1625242&from=rss) - [US Treasury Beneficial Ownership Information Reporting is Back On (Again)](https://soylentnews.org/article.pl?sid=25/02/24/1625242&from=rss)
* [2025-02-25, 22:23:56](https://news.ycombinator.com/item?id=43178337) - [Curious Correspondence with Edward Gorey](https://www.tcj.com/the-curious-correspondence/)
* [2025-02-25, 21:50:00](https://soylentnews.org/article.pl?sid=25/02/24/1621220&from=rss) - [Polish Treasure Hunters Unearth Seriously Badass Two-Handed Medieval Sword](https://soylentnews.org/article.pl?sid=25/02/24/1621220&from=rss)
* [2025-02-25, 19:42:51](https://news.ycombinator.com/item?id=43176358) - [Depending in Common Lisp – Using the CLOS dependent maintenance protocol (2022)](https://stevelosh.com/blog/2022/08/depending-in-common-lisp/)
* [2025-02-25, 19:19:19](https://news.ycombinator.com/item?id=43176091) - [Our Search for Life in the Clouds](https://www.smithsonianmag.com/science-nature/a-brief-and-amazing-history-of-our-search-for-life-in-the-clouds-180985981/)
* [2025-02-25, 18:52:59](https://news.ycombinator.com/item?id=43175793) - [Certificate Transparency in Firefox](https://blog.transparency.dev/ct-in-firefox)
* [2025-02-25, 17:06:00](https://soylentnews.org/article.pl?sid=25/02/24/1617229&from=rss) - [21st Century C++](https://soylentnews.org/article.pl?sid=25/02/24/1617229&from=rss)
* [2025-02-25, 17:01:13](https://news.ycombinator.com/item?id=43174453) - [Maestro – Next generation mobile UI automation](https://github.com/mobile-dev-inc/Maestro)
* [2025-02-25, 16:18:11](https://news.ycombinator.com/item?id=43173808) - [Resident physicians' exam scores tied to patient survival](https://hms.harvard.edu/news/resident-physicians-exam-scores-tied-patient-survival)
* [2025-02-25, 12:27:30](https://news.ycombinator.com/item?id=43171007) - [What do people see when they're tripping? Analyzing Erowid's trip reports](https://themicrodose.substack.com/p/what-do-people-see-when-theyre-tripping)
* [2025-02-25, 12:23:00](https://soylentnews.org/politics/article.pl?sid=25/02/24/1615209&from=rss) - [Trump Threatens Tariffs On Any Nation That Taxes Big Tech](https://soylentnews.org/politics/article.pl?sid=25/02/24/1615209&from=rss)
* [2025-02-25, 12:03:04](https://news.ycombinator.com/item?id=43170843) - [Troubleshooting: A skill that never goes obsolete](https://www.autodidacts.io/troubleshooting/)
* [2025-02-25, 07:37:00](https://soylentnews.org/article.pl?sid=25/02/24/0728229&from=rss) - [Building a Chipmaking Fab in the US Costs Twice as Much, Takes Twice as Long as in Taiwan](https://soylentnews.org/article.pl?sid=25/02/24/0728229&from=rss)
* [2025-02-25, 02:51:00](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss) - [Astronomers Uncover The Topsy-Turvy Atmosphere Of A Distant Planet](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss)
