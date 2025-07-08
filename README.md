# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI

* [People Are Using AI Chatbots To Guide Their Psychedelic Trips](https://slashdot.org/story/25/07/07/2232250/people-are-using-ai-chatbots-to-guide-their-psychedelic-trips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) (comments: [link](https://slashdot.org/story/25/07/07/2232250/people-are-using-ai-chatbots-to-guide-their-psychedelic-trips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - Explores the unconventional use of AI chatbots in facilitating psychedelic experiences.

* [Tennis Players Criticize AI Technology Used By Wimbledon](https://slashdot.org/story/25/07/07/2254236/tennis-players-criticize-ai-technology-used-by-wimbledon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) (comments: [link](https://slashdot.org/story/25/07/07/2254236/tennis-players-criticize-ai-technology-used-by-wimbledon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - Critiques the impact of AI officiating on tennis match fairness and accuracy.

* [The Open-Source Software Saving the Internet From AI Bot Scrapers](https://news.slashdot.org/story/25/07/07/2146228/the-open-source-software-saving-the-internet-from-ai-bot-scrapers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) (comments: [link](https://news.slashdot.org/story/25/07/07/2146228/the-open-source-software-saving-the-internet-from-ai-bot-scrapers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - Introduces a tool to protect web content from overreach by AI bots.

## Programming and Tools

* [My first verified (imperative) program](https://markushimmel.de/blog/my-first-verified-imperative-program/) (comments: [link](https://lobste.rs/s/giycc1/my_first_verified_imperative_program)) - A journey into the creation of a verified imperative program.

* [SIMD.info – Reference tool for C intrinsics of all major SIMD engines](https://simd.info/) (comments: [link](https://news.ycombinator.com/item?id=44496229)) - A handy reference for leveraging SIMD in C.

* [How Janet&apos;s PEG module works](https://bakpakin.com/writing/how-janets-peg-works.html) (comments: [link](https://lobste.rs/s/kvgdjh/how_janet_s_peg_module_works)) - A deep dive into parsing expression grammars in Janet.

## Legal and Ethics in Technology

* [UK Eyes New Laws Over Cable Sabotage](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss) (comments: [link](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss)) - Details potential legislative responses to increased risks of undersea cable attacks.

* [Fubo Pays $3.4 Million To Settle Claims It Illegally Shared User Data With Advertisers](https://yro.slashdot.org/story/25/07/07/2250222/fubo-pays-34-million-to-settle-claims-it-illegally-shared-user-data-with-advertisers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) (comments: [link](https://yro.slashdot.org/story/25/07/07/2250222/fubo-pays-34-million-to-settle-claims-it-illegally-shared-user-data-with-advertisers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - Examines the legal penalties for violating user privacy.

## Cultural and Historical Insights

* [Neanderthals operated prehistoric “fat factory” on German lakeshore](https://archaeologymag.com/2025/07/neanderthals-operated-fat-factory-125000-years-ago/) (comments: [link](https://news.ycombinator.com/item?id=44460498)) - Reveals Neanderthals' innovative processing techniques for survival.

## Science and Breakthroughs

* [See How the Herpes Virus Reshapes Our Cells’ DNA in Just Eight Hours](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss) (comments: [link](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss)) - A detailed look at the transformative effects of the herpes virus on cellular DNA.

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

* [2025-07-08, 06:06:41](https://lobste.rs/s/r9urjr/all_programming_languages_are_fast) - [All Programming Languages are Fast](https://orgpad.info/blog/all-programming-langs-are-fast)
* [2025-07-08, 05:40:28](https://lobste.rs/s/giycc1/my_first_verified_imperative_program) - [My first verified (imperative) program](https://markushimmel.de/blog/my-first-verified-imperative-program/)
* [2025-07-08, 04:31:00](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss) - [UK Eyes New Laws Over Cable Sabotage](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss)
* [2025-07-08, 03:30:00](https://slashdot.org/story/25/07/07/2232250/people-are-using-ai-chatbots-to-guide-their-psychedelic-trips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [People Are Using AI Chatbots To Guide Their Psychedelic Trips](https://slashdot.org/story/25/07/07/2232250/people-are-using-ai-chatbots-to-guide-their-psychedelic-trips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 02:45:57](https://news.ycombinator.com/item?id=44496502) - [Trying to find meaning in owning an old Mac](https://blog.decryption.net.au/posts/macse30.html)
* [2025-07-08, 02:10:00](https://slashdot.org/story/25/07/07/2254236/tennis-players-criticize-ai-technology-used-by-wimbledon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tennis Players Criticize AI Technology Used By Wimbledon](https://slashdot.org/story/25/07/07/2254236/tennis-players-criticize-ai-technology-used-by-wimbledon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 01:44:59](https://news.ycombinator.com/item?id=44496229) - [SIMD.info – Reference tool for C intrinsics of all major SIMD engines](https://simd.info/)
* [2025-07-08, 01:30:00](https://yro.slashdot.org/story/25/07/07/2250222/fubo-pays-34-million-to-settle-claims-it-illegally-shared-user-data-with-advertisers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fubo Pays $3.4 Million To Settle Claims It Illegally Shared User Data With Advertisers](https://yro.slashdot.org/story/25/07/07/2250222/fubo-pays-34-million-to-settle-claims-it-illegally-shared-user-data-with-advertisers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 01:09:50](https://lobste.rs/s/kvgdjh/how_janet_s_peg_module_works) - [How Janet&apos;s PEG module works](https://bakpakin.com/writing/how-janets-peg-works.html)
* [2025-07-08, 00:50:00](https://apple.slashdot.org/story/25/07/07/2243248/apple-just-added-more-frost-to-its-liquid-glass-design?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Just Added More Frost To Its Liquid Glass Design](https://apple.slashdot.org/story/25/07/07/2243248/apple-just-added-more-frost-to-its-liquid-glass-design?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 00:10:00](https://news.slashdot.org/story/25/07/07/2146228/the-open-source-software-saving-the-internet-from-ai-bot-scrapers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Open-Source Software Saving the Internet From AI Bot Scrapers](https://news.slashdot.org/story/25/07/07/2146228/the-open-source-software-saving-the-internet-from-ai-bot-scrapers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 23:45:00](https://soylentnews.org/article.pl?sid=25/07/06/1317252&amp;from=rss) - [Sniffnet - Comfortably Monitor Your Internet Traffic](https://soylentnews.org/article.pl?sid=25/07/06/1317252&amp;from=rss)
* [2025-07-07, 23:31:56](https://lobste.rs/s/xenlje/you_should_run_certificate_transparency) - [You Should Run a Certificate Transparency Log](https://words.filippo.io/run-sunlight/)
* [2025-07-07, 23:30:00](https://tech.slashdot.org/story/25/07/07/2136225/waymo-starts-robotaxi-testing-in-philadelphia-and-nyc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Starts Robotaxi Testing In Philadelphia and NYC](https://tech.slashdot.org/story/25/07/07/2136225/waymo-starts-robotaxi-testing-in-philadelphia-and-nyc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 22:50:00](https://mobile.slashdot.org/story/25/07/07/2132201/jack-dorsey-launches-a-whatsapp-messaging-rival-built-on-bluetooth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey Launches a WhatsApp Messaging Rival Built On Bluetooth](https://mobile.slashdot.org/story/25/07/07/2132201/jack-dorsey-launches-a-whatsapp-messaging-rival-built-on-bluetooth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 22:11:58](https://news.ycombinator.com/item?id=44495154) - [LookingGlass: Generative Anamorphoses via Laplacian Pyramid Warping](https://studios.disneyresearch.com/2025/06/09/lookingglass-generative-anamorphoses-via-laplacian-pyramid-warping/)
* [2025-07-07, 22:10:26](https://lobste.rs/s/oapkjg/code_trust_vibrators_pacemakers) - [CODE AND TRUST: vibrators to pacemakers](https://punkx.org/jackdoe/code-and-trust.html)
* [2025-07-07, 22:10:00](https://yro.slashdot.org/story/25/07/07/2128217/samsung-and-epic-games-call-a-truce-in-app-store-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung and Epic Games Call a Truce In App Store Lawsuit](https://yro.slashdot.org/story/25/07/07/2128217/samsung-and-epic-games-call-a-truce-in-app-store-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 21:30:00](https://games.slashdot.org/story/25/07/07/1937247/nintendo-wants-to-keep-traditional-approach-to-development-as-costs-skyrocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nintendo Wants To Keep &apos;Traditional Approach&apos; To Development as Costs Skyrocket](https://games.slashdot.org/story/25/07/07/1937247/nintendo-wants-to-keep-traditional-approach-to-development-as-costs-skyrocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 21:24:25](https://lobste.rs/s/axef4c/applied_cryptography_comprehensive) - [Applied Cryptography: comprehensive, novel course materials released under Creative Commons](https://appliedcryptography.page)
* [2025-07-07, 20:55:00](https://tech.slashdot.org/story/25/07/07/1930219/new-delhi-forced-to-withdraw-plan-to-scrap-old-cars-after-public-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Delhi Forced To Withdraw Plan To Scrap Old Cars After Public Backlash](https://tech.slashdot.org/story/25/07/07/1930219/new-delhi-forced-to-withdraw-plan-to-scrap-old-cars-after-public-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 20:48:55](https://lobste.rs/s/yctrpk/adding_feature_because_chatgpt) - [Adding a feature because ChatGPT incorrectly thinks it exists](https://www.holovaty.com/writing/chatgpt-fake-feature/)
* [2025-07-07, 20:36:54](https://news.ycombinator.com/item?id=44494430) - [Running a Certificate Transparency log](https://words.filippo.io/run-sunlight/)
* [2025-07-07, 20:15:00](https://news.slashdot.org/story/25/07/07/1926225/brics-demand-wealthy-nations-fund-global-climate-transition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BRICS Demand Wealthy Nations Fund Global Climate Transition](https://news.slashdot.org/story/25/07/07/1926225/brics-demand-wealthy-nations-fund-global-climate-transition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 19:35:00](https://tech.slashdot.org/story/25/07/07/1923231/the-downside-of-a-digital-yes-man?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Downside of a Digital Yes-Man](https://tech.slashdot.org/story/25/07/07/1923231/the-downside-of-a-digital-yes-man?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 18:59:00](https://apple.slashdot.org/story/25/07/07/1859211/apple-links-directly-to-web-in-full-screen-tv-app-ad-ignoring-rules-for-other-developers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Links Directly To Web in Full-Screen TV App Ad, Ignoring Rules for Other Developers](https://apple.slashdot.org/story/25/07/07/1859211/apple-links-directly-to-web-in-full-screen-tv-app-ad-ignoring-rules-for-other-developers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 18:58:00](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss) - [See How the Herpes Virus Reshapes Our Cells’ DNA in Just Eight Hours](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss)
* [2025-07-07, 18:28:04](https://lobste.rs/s/nm5lho/stop_putting_nix_setup_your_checked_envrc) - [Stop putting nix setup in your checked-in .envrc files](https://offby1.website/posts/stop-putting-nix-setup-in-your-checked-in-envrc-files.html)
* [2025-07-07, 18:19:13](https://news.ycombinator.com/item?id=44493196) - [New sphere-packing record stems from an unexpected source](https://www.quantamagazine.org/new-sphere-packing-record-stems-from-an-unexpected-source-20250707/)
* [2025-07-07, 18:15:00](https://entertainment.slashdot.org/story/25/07/07/184247/netflix-says-50-of-global-users-now-watch-anime?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix Says 50% of Global Users Now Watch Anime](https://entertainment.slashdot.org/story/25/07/07/184247/netflix-says-50-of-global-users-now-watch-anime?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 17:58:04](https://news.ycombinator.com/item?id=44492986) - [My first verified imperative program](https://markushimmel.de/blog/my-first-verified-imperative-program/)
* [2025-07-07, 17:48:22](https://lobste.rs/s/w6q3d1/future_forums_is_lies_i_guess) - [The Future of Forums is Lies, I Guess](https://aphyr.com/posts/389-the-future-of-forums-is-lies-i-guess)
* [2025-07-07, 17:40:00](https://tech.slashdot.org/story/25/07/07/1740250/openai-says-it-has-no-plan-to-use-googles-in-house-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Says It Has No Plan To Use Google&apos;s In-house Chip](https://tech.slashdot.org/story/25/07/07/1740250/openai-says-it-has-no-plan-to-use-googles-in-house-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 17:37:35](https://lobste.rs/s/rgw1t7/inverse_triangle_inequality) - [Inverse Triangle Inequality](https://matklad.github.io/2025/07/07/inverse-triangle-inequality.html)
* [2025-07-07, 17:36:21](https://lobste.rs/s/9f2dnb/generic_interfaces) - [Generic interfaces](https://go.dev/blog/generic-interfaces)
* [2025-07-07, 17:01:53](https://lobste.rs/s/onmkay/defence_swap_common_misconceptions_2018) - [In defence of swap: common misconceptions (2018)](https://chrisdown.name/2018/01/02/in-defence-of-swap.html)
* [2025-07-07, 17:00:56](https://lobste.rs/s/cobucv/automatically_packaging_haskell) - [Automatically Packaging a Haskell Library as a Swift Binary XCFramework](https://alt-romes.github.io/posts/2025-07-05-packaging-a-haskell-library-as-a-swift-binary-xcframework.html)
* [2025-07-07, 15:23:57](https://news.ycombinator.com/item?id=44491333) - [The era of exploration](https://yidingjiang.github.io/blog/post/exploration/)
* [2025-07-07, 15:03:54](https://lobste.rs/s/vaiijh/prompt_coding_no_code_edits_only_complete) - [Prompt Coding: No code edits, only complete rewrites](https://www.gibney.org/prompt_coding)
* [2025-07-07, 14:58:09](https://news.ycombinator.com/item?id=44491071) - [Adding a feature because ChatGPT incorrectly thinks it exists](https://www.holovaty.com/writing/chatgpt-fake-feature/)
* [2025-07-07, 14:40:45](https://news.ycombinator.com/item?id=44490863) - [Launch HN: Morph (YC S23) – Apply AI code edits at 4,500 tokens/sec](https://news.ycombinator.com/item?id=44490863)
* [2025-07-07, 14:14:00](https://soylentnews.org/article.pl?sid=25/07/06/136235&amp;from=rss) - [The Terrifying Truth About Why Tesla&apos;s Cars Keep Crashing](https://soylentnews.org/article.pl?sid=25/07/06/136235&amp;from=rss)
* [2025-07-07, 14:13:56](https://news.ycombinator.com/item?id=44490588) - [Show HN: NYC Subway Simulator and Route Designer](https://buildmytransit.nyc)
* [2025-07-07, 12:44:19](https://news.ycombinator.com/item?id=44489803) - [I used o3 to profile myself from my saved Pocket links](https://noperator.dev/posts/o3-pocket-profile/)
* [2025-07-07, 12:31:08](https://news.ycombinator.com/item?id=44489690) - [Mercury: Ultra-fast language models based on diffusion](https://arxiv.org/abs/2506.17298)
* [2025-07-07, 12:04:44](https://lobste.rs/s/ikxu0o/am_i_online) - [Am I online?](https://antonz.org/is-online/)
* [2025-07-07, 10:43:29](https://lobste.rs/s/q7xynz/jepsen_tigerbeetle) - [Jepsen &amp; TigerBeetle](https://open.substack.com/pub/dtornow/p/jepsen-and-tigerbeetle?showWelcomeOnShare=false)
* [2025-07-07, 10:38:49](https://lobste.rs/s/fwmxc3/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/fwmxc3/what_are_you_doing_this_week)
* [2025-07-07, 10:15:03](https://lobste.rs/s/a55r0w/stop_using_nix_env) - [Stop using nix-env](https://stop-using-nix-env.privatevoid.net/)
* [2025-07-07, 09:50:07](https://lobste.rs/s/wnnymx/you_don_t_have_use_nix_manage_your_dotfiles) - [You don&apos;t have to use Nix to manage your dotfiles](https://jade.fyi/blog/use-nix-less/)
* [2025-07-07, 09:31:00](https://soylentnews.org/article.pl?sid=25/07/06/131253&amp;from=rss) - [How to Fully Incapacitate Google Tag Manager and Why You Should (2022)](https://soylentnews.org/article.pl?sid=25/07/06/131253&amp;from=rss)
* [2025-07-07, 08:17:57](https://lobste.rs/s/yspcyx/building_personalized_micro_agents) - [Building personalized micro agents](https://blog.meain.io/2025/building-personalized-micro-agents/)
* [2025-07-07, 06:10:45](https://lobste.rs/s/6ycaam/praise_contrarian_stack) - [In Praise of the Contrarian Stack](https://hackers.pub/@hongminhee/2025/contrarian-stack/en)
* [2025-07-07, 04:46:00](https://soylentnews.org/article.pl?sid=25/07/06/1250244&amp;from=rss) - [CISPE Warns EU Against Over-Regulation of Water](https://soylentnews.org/article.pl?sid=25/07/06/1250244&amp;from=rss)
* [2025-07-07, 02:16:57](https://lobste.rs/s/plqfqg/plasma_6_4_wayland_vs_x11_processor_power) - [Plasma 6.4 Wayland vs X11, processor and power benchmarks](https://www.dedoimedo.com/computers/plasma-6-4-performance-wayland-x11-power-cpu-kernel.html)
* [2025-07-07, 00:00:00](https://soylentnews.org/article.pl?sid=25/07/06/1241242&amp;from=rss) - [Verizon Denies Legitimacy of 61 Million Records for Sale](https://soylentnews.org/article.pl?sid=25/07/06/1241242&amp;from=rss)
* [2025-07-06, 23:02:55](https://lobste.rs/s/im0hc6/russ_cox_solves_aoc_2021_day_24_using_go) - [Russ Cox solves AoC 2021 Day 24 using Go in Acme [Compiler Analysis]](https://www.youtube.com/watch?v=hmq6veCFo0Y)
* [2025-07-06, 19:44:56](https://lobste.rs/s/fwdhpz/belgium_is_unsafe_for_cvd) - [Belgium is unsafe for CVD](https://floort.net/posts/belgium-unsafe-for-cvd/)
* [2025-07-06, 19:25:07](https://lobste.rs/s/bfswxu/real_genai_issue) - [The Real GenAI Issue](https://www.tbray.org/ongoing/When/202x/2025/07/06/AI-Manifesto)
* [2025-07-06, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/05/1910216&amp;from=rss) - [Inside Elon Musk&apos;s Stellar Year at the Texas Capitol](https://soylentnews.org/article.pl?sid=25/07/05/1910216&amp;from=rss)
* [2025-07-06, 14:30:00](https://soylentnews.org/article.pl?sid=25/07/05/1341208&amp;from=rss) - [Bezos-Funded Satellite Tracking Methane Emissions Loses Power in Space](https://soylentnews.org/article.pl?sid=25/07/05/1341208&amp;from=rss)
* [2025-07-06, 10:38:27](https://news.ycombinator.com/item?id=44479502) - [When Figma starts designing us](https://designsystems.international/ideas/when-figma-starts-designing-us/)
* [2025-07-06, 09:48:00](https://soylentnews.org/article.pl?sid=25/07/05/1339218&amp;from=rss) - [Ancient DNA Reveals Make-Up of Roman Empire&apos;s Favourite Sauce](https://soylentnews.org/article.pl?sid=25/07/05/1339218&amp;from=rss)
* [2025-07-06, 05:45:00](https://soylentnews.org/article.pl?sid=25/07/04/2251218&amp;from=rss) - [Where Does Time Actually Come From?](https://soylentnews.org/article.pl?sid=25/07/04/2251218&amp;from=rss)
* [2025-07-06, 01:30:00](https://soylentnews.org/article.pl?sid=25/07/04/2154255&amp;from=rss) - [On July 7 Google Gemini Will Have Access to Your Android Apps, Even If You Turned It Off](https://soylentnews.org/article.pl?sid=25/07/04/2154255&amp;from=rss)
* [2025-07-05, 23:28:30](https://news.ycombinator.com/item?id=44476382) - [Solving Wordle with uv&apos;s dependency resolver](https://mildbyte.xyz/blog/solving-wordle-with-uv-dependency-resolver/)
* [2025-07-05, 21:12:00](https://soylentnews.org/article.pl?sid=25/07/03/1156244&amp;from=rss) - [MASH - and the Loretta Swit Obituary](https://soylentnews.org/article.pl?sid=25/07/03/1156244&amp;from=rss)
* [2025-07-05, 19:25:43](https://news.ycombinator.com/item?id=44474919) - [The Two Towers MUD](https://t2tmud.org/)
* [2025-07-05, 16:26:00](https://soylentnews.org/article.pl?sid=25/07/03/1127224&amp;from=rss) - [Release The Fish](https://soylentnews.org/article.pl?sid=25/07/03/1127224&amp;from=rss)
* [2025-07-05, 11:43:00](https://soylentnews.org/article.pl?sid=25/07/03/1124254&amp;from=rss) - [Candidatus Sukunaarchaeum Mirabile is a Novel Archaeon With an Unprecedentedly Small Genome](https://soylentnews.org/article.pl?sid=25/07/03/1124254&amp;from=rss)
* [2025-07-05, 09:06:14](https://news.ycombinator.com/item?id=44471251) - [CU Randomness Beacon](https://random.colorado.edu/)
* [2025-07-05, 08:02:56](https://news.ycombinator.com/item?id=44470942) - [The Miyawaki Method of micro-forestry](https://www.futureecologies.net/listen/fe-6-5-the-method)
* [2025-07-05, 07:00:00](https://soylentnews.org/article.pl?sid=25/07/03/0247205&amp;from=rss) - [Canada Orders Chinese CCTV Biz Hikvision To Quit The Country](https://soylentnews.org/article.pl?sid=25/07/03/0247205&amp;from=rss)
* [2025-07-05, 02:15:00](https://soylentnews.org/article.pl?sid=25/07/03/0230247&amp;from=rss) - [North Koreans Posing As Remote Workers stole $1M ](https://soylentnews.org/article.pl?sid=25/07/03/0230247&amp;from=rss)
* [2025-07-05, 00:52:38](https://news.ycombinator.com/item?id=44469254) - [Integrated photonic source of Gottesman–Kitaev–Preskill qubits](https://www.nature.com/articles/s41586-025-09044-5)
* [2025-07-04, 23:15:18](https://news.ycombinator.com/item?id=44468753) - [Lightfastness Testing of Colored Pencils](https://sarahrenaeclark.com/lightfast-testing-pencils/)
* [2025-07-04, 23:10:11](https://news.ycombinator.com/item?id=44468718) - [What Microchip doesn&apos;t (officially) tell you about the VSC8512](https://serd.es/2025/07/04/Switch-project-pt3.html)
* [2025-07-04, 21:23:00](https://soylentnews.org/article.pl?sid=25/07/02/170202&amp;from=rss) - [Mess is Best: Disordered Structure of Battery-Like Devices Improves Performance](https://soylentnews.org/article.pl?sid=25/07/02/170202&amp;from=rss)
* [2025-07-04, 20:56:17](https://news.ycombinator.com/item?id=44467826) - [Analysing Roman itineraries using GIS tooling](https://link.springer.com/article/10.1007/s12520-025-02175-w)
* [2025-07-04, 20:31:59](https://news.ycombinator.com/item?id=44467657) - [# [derive(Clone)] Is Broken](https://rgbcu.be/blog/derive-broken/)
* [2025-07-04, 19:55:27](https://news.ycombinator.com/item?id=44467379) - [Why are there no good dinosaur films?](https://briannazigler.substack.com/p/why-are-there-no-good-dinosaur-films)
* [2025-07-04, 17:03:31](https://news.ycombinator.com/item?id=44466143) - [Charles Babbage and deciphering codes (1864)](https://mathshistory.st-andrews.ac.uk/Extras/Babbage_deciphering/)
* [2025-07-04, 16:41:00](https://soylentnews.org/article.pl?sid=25/07/02/1652201&amp;from=rss) - [SpaceX Launches UK Satellite To Create Semiconductors In Low Earth Orbit](https://soylentnews.org/article.pl?sid=25/07/02/1652201&amp;from=rss)
* [2025-07-04, 13:57:19](https://news.ycombinator.com/item?id=44464628) - [Epanet-JS](https://macwright.com/2025/07/03/epanet-placemark)
* [2025-07-04, 11:57:00](https://soylentnews.org/article.pl?sid=25/07/02/1648236&amp;from=rss) - [Two Years Later, Meta is Making DMs on Threads Official](https://soylentnews.org/article.pl?sid=25/07/02/1648236&amp;from=rss)
* [2025-07-04, 11:04:41](https://news.ycombinator.com/item?id=44463429) - [The chemical secrets that help keep honey fresh for so long](https://www.bbc.com/future/article/20250701-the-chemical-secrets-that-help-keep-honey-fresh-for-so-long)
* [2025-07-04, 07:11:00](https://soylentnews.org/article.pl?sid=25/07/02/1645202&amp;from=rss) - [Norwegian Northern Lights Operational ](https://soylentnews.org/article.pl?sid=25/07/02/1645202&amp;from=rss)
* [2025-07-04, 06:25:11](https://news.ycombinator.com/item?id=44461666) - [What is going on in Unix with errno&apos;s limited nature](https://utcc.utoronto.ca/~cks/space/blog/unix/ErrnoWhySoLimited)
* [2025-07-04, 05:35:00](https://soylentnews.org/meta/article.pl?sid=25/07/04/0527252&amp;from=rss) - [Happy Independence Day !!!](https://soylentnews.org/meta/article.pl?sid=25/07/04/0527252&amp;from=rss)
* [2025-07-04, 04:16:12](https://news.ycombinator.com/item?id=44461082) - [Hymn to Babylon, missing for a millennium, has been discovered](https://phys.org/news/2025-07-hymn-babylon-millennium.html)
* [2025-07-04, 02:27:00](https://soylentnews.org/article.pl?sid=25/07/02/1640204&amp;from=rss) - [China Could Be The World&apos;s Top Semiconductor Foundry Hub By 2030](https://soylentnews.org/article.pl?sid=25/07/02/1640204&amp;from=rss)
* [2025-07-04, 01:45:15](https://news.ycombinator.com/item?id=44460498) - [Neanderthals operated prehistoric “fat factory” on German lakeshore](https://archaeologymag.com/2025/07/neanderthals-operated-fat-factory-125000-years-ago/)
