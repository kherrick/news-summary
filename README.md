# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software

* [Applied Cryptography: comprehensive, novel course materials released under Creative Commons](https://appliedcryptography.page) - [Comments](https://lobste.rs/s/axef4c/applied_cryptography_comprehensive)

* [Adding a feature because ChatGPT incorrectly thinks it exists](https://www.holovaty.com/writing/chatgpt-fake-feature/) - [Comments](https://lobste.rs/s/yctrpk/adding_feature_because_chatgpt)

* [OpenAI Says It Has No Plan To Use Google&apos;s In-house Chip](https://tech.slashdot.org/story/25/07/07/1740250/openai-says-it-has-no-plan-to-use-googles-in-house-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://tech.slashdot.org/story/25/07/07/1740250/openai-says-it-has-no-plan-to-use-googles-in-house-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Show HN: Ossia score – a sequencer for audio-visual artists](https://github.com/ossia/score) - [Comments](https://news.ycombinator.com/item?id=44492405)

* [Mercury: Ultra-fast language models based on diffusion](https://arxiv.org/abs/2506.17298) - [Comments](https://news.ycombinator.com/item?id=44489690)

## Science and Discovery

* [Citizen Scientists Just Helped Discover Nearly 8,000 New Eclipsing Binary Stars](https://science.slashdot.org/story/25/07/07/0140213/citizen-scientists-just-helped-discover-nearly-8000-new-eclipsing-binary-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://science.slashdot.org/story/25/07/07/0140213/citizen-scientists-just-helped-discover-nearly-8000-new-eclipsing-binary-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [New sphere-packing record stems from an unexpected source](https://www.quantamagazine.org/new-sphere-packing-record-stems-from-an-unexpected-source-20250707/) - [Comments](https://news.ycombinator.com/item?id=44493196)

* [See How the Herpes Virus Reshapes Our Cells’ DNA in Just Eight Hours](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss) - [Comments](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss)

## Environment and Energy

* [Poland&apos;s Clean Energy Usage Overtakes Coal For First Time](https://hardware.slashdot.org/story/25/07/07/1524200/polands-clean-energy-usage-overtakes-coal-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://hardware.slashdot.org/story/25/07/07/1524200/polands-clean-energy-usage-overtakes-coal-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [India&apos;s Battery Ambitions Run On Borrowed Volts](https://tech.slashdot.org/story/25/07/07/117229/indias-battery-ambitions-run-on-borrowed-volts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://tech.slashdot.org/story/25/07/07/117229/indias-battery-ambitions-run-on-borrowed-volts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cultural and Media Trends

* [Netflix Says 50% of Global Users Now Watch Anime](https://entertainment.slashdot.org/story/25/07/07/184247/netflix-says-50-of-global-users-now-watch-anime?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://entertainment.slashdot.org/story/25/07/07/184247/netflix-says-50-of-global-users-now-watch-anime?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Springer Nature Book on Machine Learning is Full of Made-Up Citations](https://science.slashdot.org/story/25/07/07/1354223/springer-nature-book-on-machine-learning-is-full-of-made-up-citations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://science.slashdot.org/story/25/07/07/1354223/springer-nature-book-on-machine-learning-is-full-of-made-up-citations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Infrastructure and Policy

* [New Delhi Forced To Withdraw Plan To Scrap Old Cars After Public Backlash](https://tech.slashdot.org/story/25/07/07/1930219/new-delhi-forced-to-withdraw-plan-to-scrap-old-cars-after-public-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://tech.slashdot.org/story/25/07/07/1930219/new-delhi-forced-to-withdraw-plan-to-scrap-old-cars-after-public-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [CISPE Warns EU Against Over-Regulation of Water](https://soylentnews.org/article.pl?sid=25/07/06/1250244&amp;from=rss) - [Comments](https://soylentnews.org/article.pl?sid=25/07/06/1250244&amp;from=rss)

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

* [2025-07-07, 21:30:00](https://games.slashdot.org/story/25/07/07/1937247/nintendo-wants-to-keep-traditional-approach-to-development-as-costs-skyrocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nintendo Wants To Keep &apos;Traditional Approach&apos; To Development as Costs Skyrocket](https://games.slashdot.org/story/25/07/07/1937247/nintendo-wants-to-keep-traditional-approach-to-development-as-costs-skyrocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 21:24:25](https://lobste.rs/s/axef4c/applied_cryptography_comprehensive) - [Applied Cryptography: comprehensive, novel course materials released under Creative Commons](https://appliedcryptography.page)
* [2025-07-07, 20:55:00](https://tech.slashdot.org/story/25/07/07/1930219/new-delhi-forced-to-withdraw-plan-to-scrap-old-cars-after-public-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Delhi Forced To Withdraw Plan To Scrap Old Cars After Public Backlash](https://tech.slashdot.org/story/25/07/07/1930219/new-delhi-forced-to-withdraw-plan-to-scrap-old-cars-after-public-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 20:48:55](https://lobste.rs/s/yctrpk/adding_feature_because_chatgpt) - [Adding a feature because ChatGPT incorrectly thinks it exists](https://www.holovaty.com/writing/chatgpt-fake-feature/)
* [2025-07-07, 20:36:54](https://news.ycombinator.com/item?id=44494430) - [You Should Run a Certificate Transparency Log](https://words.filippo.io/run-sunlight/)
* [2025-07-07, 20:18:30](https://news.ycombinator.com/item?id=44494255) - [How did X-Rays gain mass adoption?](https://www.aditharun.com/p/how-did-x-rays-gain-mass-adoption)
* [2025-07-07, 20:15:00](https://news.slashdot.org/story/25/07/07/1926225/brics-demand-wealthy-nations-fund-global-climate-transition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BRICS Demand Wealthy Nations Fund Global Climate Transition](https://news.slashdot.org/story/25/07/07/1926225/brics-demand-wealthy-nations-fund-global-climate-transition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 19:35:00](https://tech.slashdot.org/story/25/07/07/1923231/the-downside-of-a-digital-yes-man?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Downside of a Digital Yes-Man](https://tech.slashdot.org/story/25/07/07/1923231/the-downside-of-a-digital-yes-man?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 19:24:05](https://lobste.rs/s/9h88kc/iceberg_right_idea_wrong_spec_part_1_2) - [Iceberg, The Right Idea - The Wrong Spec - Part 1 of 2: History](https://database-doctor.com/posts/iceberg-is-wrong-1.html)
* [2025-07-07, 19:07:13](https://news.ycombinator.com/item?id=44493640) - [Tyr, a new Rust DRM driver targeting CSF-based ARM Mali GPUs](https://www.collabora.com/news-and-blog/news-and-events/introducing-tyr-a-new-rust-drm-driver.html)
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
* [2025-07-07, 17:07:05](https://news.ycombinator.com/item?id=44492405) - [Show HN: Ossia score – a sequencer for audio-visual artists](https://github.com/ossia/score)
* [2025-07-07, 17:01:53](https://lobste.rs/s/onmkay/defence_swap_common_misconceptions_2018) - [In defence of swap: common misconceptions (2018)](https://chrisdown.name/2018/01/02/in-defence-of-swap.html)
* [2025-07-07, 17:00:56](https://lobste.rs/s/cobucv/automatically_packaging_haskell) - [Automatically Packaging a Haskell Library as a Swift Binary XCFramework](https://alt-romes.github.io/posts/2025-07-05-packaging-a-haskell-library-as-a-swift-binary-xcframework.html)
* [2025-07-07, 16:49:00](https://news.slashdot.org/story/25/07/07/1649218/eu-holds-back-on-signing-climate-action-pledge-with-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Holds Back on Signing Climate Action Pledge With China](https://news.slashdot.org/story/25/07/07/1649218/eu-holds-back-on-signing-climate-action-pledge-with-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 16:24:19](https://news.ycombinator.com/item?id=44491938) - [Show HN: I Got Tired of Calculator Sites, So I Built My Own](https://news.ycombinator.com/item?id=44491938)
* [2025-07-07, 16:16:49](https://news.ycombinator.com/item?id=44491860) - [SUS Lang: The SUS Hardware Description Language](https://sus-lang.org/)
* [2025-07-07, 16:01:00](https://news.slashdot.org/story/25/07/07/1555255/america-has-two-labor-markets-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America Has Two Labor Markets Now](https://news.slashdot.org/story/25/07/07/1555255/america-has-two-labor-markets-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 15:38:07](https://lobste.rs/s/jp0blc/case_study_over_engineered_c_code) - [Case study of over-engineered C++ code](https://blog.kowalczyk.info/a-aiow/case-study-of-over-engineered-c-code.html)
* [2025-07-07, 15:23:57](https://news.ycombinator.com/item?id=44491333) - [The Era of Exploration](https://yidingjiang.github.io/blog/post/exploration/)
* [2025-07-07, 15:23:00](https://hardware.slashdot.org/story/25/07/07/1524200/polands-clean-energy-usage-overtakes-coal-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Poland&apos;s Clean Energy Usage Overtakes Coal For First Time](https://hardware.slashdot.org/story/25/07/07/1524200/polands-clean-energy-usage-overtakes-coal-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 15:03:54](https://lobste.rs/s/vaiijh/prompt_coding_no_code_edits_only_complete) - [Prompt Coding: No code edits, only complete rewrites](https://www.gibney.org/prompt_coding)
* [2025-07-07, 14:58:09](https://news.ycombinator.com/item?id=44491071) - [Adding a feature because ChatGPT incorrectly thinks it exists](https://www.holovaty.com/writing/chatgpt-fake-feature/)
* [2025-07-07, 14:40:45](https://news.ycombinator.com/item?id=44490863) - [Launch HN: Morph (YC S23) – Apply AI code edits at 4,500 tokens/sec](https://news.ycombinator.com/item?id=44490863)
* [2025-07-07, 14:40:00](https://science.slashdot.org/story/25/07/07/1354223/springer-nature-book-on-machine-learning-is-full-of-made-up-citations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Springer Nature Book on Machine Learning is Full of Made-Up Citations](https://science.slashdot.org/story/25/07/07/1354223/springer-nature-book-on-machine-learning-is-full-of-made-up-citations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 14:14:00](https://soylentnews.org/article.pl?sid=25/07/06/136235&amp;from=rss) - [The Terrifying Truth About Why Tesla&apos;s Cars Keep Crashing](https://soylentnews.org/article.pl?sid=25/07/06/136235&amp;from=rss)
* [2025-07-07, 14:13:56](https://news.ycombinator.com/item?id=44490588) - [Show HN: NYC Subway Simulator and Route Designer](https://buildmytransit.nyc)
* [2025-07-07, 14:00:00](https://tech.slashdot.org/story/25/07/07/117229/indias-battery-ambitions-run-on-borrowed-volts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India&apos;s Battery Ambitions Run On Borrowed Volts](https://tech.slashdot.org/story/25/07/07/117229/indias-battery-ambitions-run-on-borrowed-volts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 13:52:51](https://news.ycombinator.com/item?id=44490386) - [CPU-X: CPU-Z for Linux](https://thetumultuousunicornofdarkness.github.io/CPU-X/)
* [2025-07-07, 12:44:19](https://news.ycombinator.com/item?id=44489803) - [I used o3 to profile myself from my saved Pocket links](https://noperator.dev/posts/o3-pocket-profile/)
* [2025-07-07, 12:31:08](https://news.ycombinator.com/item?id=44489690) - [Mercury: Ultra-fast language models based on diffusion](https://arxiv.org/abs/2506.17298)
* [2025-07-07, 12:04:44](https://lobste.rs/s/ikxu0o/am_i_online) - [Am I online?](https://antonz.org/is-online/)
* [2025-07-07, 11:34:00](https://slashdot.org/story/25/07/06/2045246/the-startup-filled-coder-village-at-the-heart-of-chinas-ai-frenzy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Startup-Filled Coder &apos;Village&apos; at the Heart of China&apos;s AI Frenzy](https://slashdot.org/story/25/07/06/2045246/the-startup-filled-coder-village-at-the-heart-of-chinas-ai-frenzy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 10:43:29](https://lobste.rs/s/q7xynz/jepsen_tigerbeetle) - [Jepsen &amp; TigerBeetle](https://open.substack.com/pub/dtornow/p/jepsen-and-tigerbeetle?showWelcomeOnShare=false)
* [2025-07-07, 10:38:49](https://lobste.rs/s/fwmxc3/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/fwmxc3/what_are_you_doing_this_week)
* [2025-07-07, 10:15:03](https://lobste.rs/s/a55r0w/stop_using_nix_env) - [Stop using nix-env](https://stop-using-nix-env.privatevoid.net/)
* [2025-07-07, 09:50:07](https://lobste.rs/s/wnnymx/you_don_t_have_use_nix_manage_your_dotfiles) - [You don&apos;t have to use Nix to manage your dotfiles](https://jade.fyi/blog/use-nix-less/)
* [2025-07-07, 09:31:00](https://soylentnews.org/article.pl?sid=25/07/06/131253&amp;from=rss) - [How to Fully Incapacitate Google Tag Manager and Why You Should (2022)](https://soylentnews.org/article.pl?sid=25/07/06/131253&amp;from=rss)
* [2025-07-07, 09:20:38](https://news.ycombinator.com/item?id=44488331) - [Anthropic cut up millions of used books, and downloaded 7M pirated ones – judge](https://www.businessinsider.com/anthropic-cut-pirated-millions-used-books-train-claude-copyright-2025-6)
* [2025-07-07, 08:17:57](https://lobste.rs/s/yspcyx/building_personalized_micro_agents) - [Building personalized micro agents](https://blog.meain.io/2025/building-personalized-micro-agents/)
* [2025-07-07, 07:59:40](https://lobste.rs/s/vegxuh/afrinic_hope_hijack_harsh_lessons) - [AfriNIC: Hope, Hijack, and the Harsh Lessons of African Multistakeholderism](https://medium.com/@emmanuelvitus/afrinic-hope-hijack-and-the-harsh-lessons-of-african-multistakeholderism-8e8378797101)
* [2025-07-07, 07:36:00](https://science.slashdot.org/story/25/07/07/0140213/citizen-scientists-just-helped-discover-nearly-8000-new-eclipsing-binary-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Citizen Scientists Just Helped Discover Nearly 8,000 New Eclipsing Binary Stars](https://science.slashdot.org/story/25/07/07/0140213/citizen-scientists-just-helped-discover-nearly-8000-new-eclipsing-binary-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 06:10:45](https://lobste.rs/s/6ycaam/praise_contrarian_stack) - [In Praise of the Contrarian Stack](https://hackers.pub/@hongminhee/2025/contrarian-stack/en)
* [2025-07-07, 04:46:00](https://soylentnews.org/article.pl?sid=25/07/06/1250244&amp;from=rss) - [CISPE Warns EU Against Over-Regulation of Water](https://soylentnews.org/article.pl?sid=25/07/06/1250244&amp;from=rss)
* [2025-07-07, 04:36:00](https://science.slashdot.org/story/25/07/06/2124226/google-deepminds-spinoff-company-very-close-to-human-trials-for-its-ai-designed-drugs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google DeepMind&apos;s Spinoff Company &apos;Very Close&apos; to Human Trials for Its AI-Designed Drugs](https://science.slashdot.org/story/25/07/06/2124226/google-deepminds-spinoff-company-very-close-to-human-trials-for-its-ai-designed-drugs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 03:51:48](https://lobste.rs/s/mucqfb/ziglings_learn_zig_by_fixing_broken) - [Ziglings: Learn Zig by fixing broken programs](https://codeberg.org/ziglings/exercises)
* [2025-07-07, 02:16:57](https://lobste.rs/s/plqfqg/plasma_6_4_wayland_vs_x11_processor_power) - [Plasma 6.4 Wayland vs X11, processor and power benchmarks](https://www.dedoimedo.com/computers/plasma-6-4-performance-wayland-x11-power-cpu-kernel.html)
* [2025-07-07, 00:05:46](https://news.ycombinator.com/item?id=44485342) - [Bitchat – A decentralized messaging app that works over Bluetooth mesh networks](https://github.com/jackjackbits/bitchat)
* [2025-07-07, 00:00:00](https://soylentnews.org/article.pl?sid=25/07/06/1241242&amp;from=rss) - [Verizon Denies Legitimacy of 61 Million Records for Sale](https://soylentnews.org/article.pl?sid=25/07/06/1241242&amp;from=rss)
* [2025-07-06, 23:02:55](https://lobste.rs/s/im0hc6/russ_cox_solves_aoc_2021_day_24_using_go) - [Russ Cox solves AoC 2021 Day 24 using Go in Acme [Compiler Analysis]](https://www.youtube.com/watch?v=hmq6veCFo0Y)
* [2025-07-06, 22:26:44](https://news.ycombinator.com/item?id=44484682) - [A non-anthropomorphized view of LLMs](http://addxorrol.blogspot.com/2025/07/a-non-anthropomorphized-view-of-llms.html)
* [2025-07-06, 19:44:56](https://lobste.rs/s/fwdhpz/belgium_is_unsafe_for_cvd) - [Belgium is unsafe for CVD](https://floort.net/posts/belgium-unsafe-for-cvd/)
* [2025-07-06, 19:25:07](https://lobste.rs/s/bfswxu/real_genai_issue) - [The Real GenAI Issue](https://www.tbray.org/ongoing/When/202x/2025/07/06/AI-Manifesto)
* [2025-07-06, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/05/1910216&amp;from=rss) - [Inside Elon Musk&apos;s Stellar Year at the Texas Capitol](https://soylentnews.org/article.pl?sid=25/07/05/1910216&amp;from=rss)
* [2025-07-06, 18:32:55](https://news.ycombinator.com/item?id=44482965) - [Show HN: I wrote a \&quot;web OS\&quot; based on the Apple Lisa&apos;s UI, with 1-bit graphics](https://alpha.lisagui.com/)
* [2025-07-06, 17:29:57](https://lobste.rs/s/phfy8a/conventional_commits_makes_me_sad) - [Conventional Commits makes me sad](https://srazkvt.codeberg.page/posts/2025-07-06-conventional-commits-makes-me-sad.html)
* [2025-07-06, 14:30:00](https://soylentnews.org/article.pl?sid=25/07/05/1341208&amp;from=rss) - [Bezos-Funded Satellite Tracking Methane Emissions Loses Power in Space](https://soylentnews.org/article.pl?sid=25/07/05/1341208&amp;from=rss)
* [2025-07-06, 10:38:27](https://news.ycombinator.com/item?id=44479502) - [When Figma starts designing us](https://designsystems.international/ideas/when-figma-starts-designing-us/)
* [2025-07-06, 09:48:00](https://soylentnews.org/article.pl?sid=25/07/05/1339218&amp;from=rss) - [Ancient DNA Reveals Make-Up of Roman Empire&apos;s Favourite Sauce](https://soylentnews.org/article.pl?sid=25/07/05/1339218&amp;from=rss)
* [2025-07-06, 05:45:00](https://soylentnews.org/article.pl?sid=25/07/04/2251218&amp;from=rss) - [Where Does Time Actually Come From?](https://soylentnews.org/article.pl?sid=25/07/04/2251218&amp;from=rss)
* [2025-07-06, 01:30:00](https://soylentnews.org/article.pl?sid=25/07/04/2154255&amp;from=rss) - [On July 7 Google Gemini Will Have Access to Your Android Apps, Even If You Turned It Off](https://soylentnews.org/article.pl?sid=25/07/04/2154255&amp;from=rss)
* [2025-07-05, 23:28:30](https://news.ycombinator.com/item?id=44476382) - [Solving Wordle with uv&apos;s dependency resolver](https://mildbyte.xyz/blog/solving-wordle-with-uv-dependency-resolver/)
* [2025-07-05, 23:19:28](https://news.ycombinator.com/item?id=44476339) - [Show HN: From Photos to Positions: Prototyping VLM-Based Indoor Maps](https://arjo129.github.io/blog/5-7-2025-From-Photos-To-Positions-Prototyping.html)
* [2025-07-05, 21:12:00](https://soylentnews.org/article.pl?sid=25/07/03/1156244&amp;from=rss) - [MASH - and the Loretta Swit Obituary](https://soylentnews.org/article.pl?sid=25/07/03/1156244&amp;from=rss)
* [2025-07-05, 16:26:00](https://soylentnews.org/article.pl?sid=25/07/03/1127224&amp;from=rss) - [Release The Fish](https://soylentnews.org/article.pl?sid=25/07/03/1127224&amp;from=rss)
* [2025-07-05, 11:43:00](https://soylentnews.org/article.pl?sid=25/07/03/1124254&amp;from=rss) - [Candidatus Sukunaarchaeum Mirabile is a Novel Archaeon With an Unprecedentedly Small Genome](https://soylentnews.org/article.pl?sid=25/07/03/1124254&amp;from=rss)
* [2025-07-05, 08:02:56](https://news.ycombinator.com/item?id=44470942) - [The Miyawaki Method of micro-forestry](https://www.futureecologies.net/listen/fe-6-5-the-method)
* [2025-07-05, 07:00:00](https://soylentnews.org/article.pl?sid=25/07/03/0247205&amp;from=rss) - [Canada Orders Chinese CCTV Biz Hikvision To Quit The Country](https://soylentnews.org/article.pl?sid=25/07/03/0247205&amp;from=rss)
* [2025-07-05, 02:15:00](https://soylentnews.org/article.pl?sid=25/07/03/0230247&amp;from=rss) - [North Koreans Posing As Remote Workers stole $1M ](https://soylentnews.org/article.pl?sid=25/07/03/0230247&amp;from=rss)
* [2025-07-04, 23:15:18](https://news.ycombinator.com/item?id=44468753) - [Lightfastness Testing of Colored Pencils](https://sarahrenaeclark.com/lightfast-testing-pencils/)
* [2025-07-04, 21:23:00](https://soylentnews.org/article.pl?sid=25/07/02/170202&amp;from=rss) - [Mess is Best: Disordered Structure of Battery-Like Devices Improves Performance](https://soylentnews.org/article.pl?sid=25/07/02/170202&amp;from=rss)
* [2025-07-04, 20:58:53](https://news.ycombinator.com/item?id=44467838) - [Show HN: Piano Trainer – Learn piano scales, chords and more using MIDI](https://github.com/ZaneH/piano-trainer)
* [2025-07-04, 17:03:31](https://news.ycombinator.com/item?id=44466143) - [Charles Babbage and deciphering codes (1864)](https://mathshistory.st-andrews.ac.uk/Extras/Babbage_deciphering/)
* [2025-07-04, 16:41:00](https://soylentnews.org/article.pl?sid=25/07/02/1652201&amp;from=rss) - [SpaceX Launches UK Satellite To Create Semiconductors In Low Earth Orbit](https://soylentnews.org/article.pl?sid=25/07/02/1652201&amp;from=rss)
* [2025-07-04, 11:57:00](https://soylentnews.org/article.pl?sid=25/07/02/1648236&amp;from=rss) - [Two Years Later, Meta is Making DMs on Threads Official](https://soylentnews.org/article.pl?sid=25/07/02/1648236&amp;from=rss)
* [2025-07-04, 11:04:41](https://news.ycombinator.com/item?id=44463429) - [The chemical secrets that help keep honey fresh for so long](https://www.bbc.com/future/article/20250701-the-chemical-secrets-that-help-keep-honey-fresh-for-so-long)
* [2025-07-04, 07:11:00](https://soylentnews.org/article.pl?sid=25/07/02/1645202&amp;from=rss) - [Norwegian Northern Lights Operational ](https://soylentnews.org/article.pl?sid=25/07/02/1645202&amp;from=rss)
* [2025-07-04, 05:35:00](https://soylentnews.org/meta/article.pl?sid=25/07/04/0527252&amp;from=rss) - [Happy Independence Day !!!](https://soylentnews.org/meta/article.pl?sid=25/07/04/0527252&amp;from=rss)
* [2025-07-04, 04:16:12](https://news.ycombinator.com/item?id=44461082) - [Hymn to Babylon, missing for a millennium, has been discovered](https://phys.org/news/2025-07-hymn-babylon-millennium.html)
* [2025-07-04, 02:27:00](https://soylentnews.org/article.pl?sid=25/07/02/1640204&amp;from=rss) - [China Could Be The World&apos;s Top Semiconductor Foundry Hub By 2030](https://soylentnews.org/article.pl?sid=25/07/02/1640204&amp;from=rss)
* [2025-07-04, 01:45:15](https://news.ycombinator.com/item?id=44460498) - [Neanderthals operated prehistoric “fat factory” on German lakeshore](https://archaeologymag.com/2025/07/neanderthals-operated-fat-factory-125000-years-ago/)
* [2025-07-03, 21:43:00](https://soylentnews.org/article.pl?sid=25/07/02/1636207&amp;from=rss) - [Earthquake-Induced Electricity Offers Answer to Mystery of Gold Nugget Formation](https://soylentnews.org/article.pl?sid=25/07/02/1636207&amp;from=rss)
* [2025-07-03, 16:56:00](https://soylentnews.org/article.pl?sid=25/07/02/1214228&amp;from=rss) - [Why the Sun is So Good at Evaporating Water](https://soylentnews.org/article.pl?sid=25/07/02/1214228&amp;from=rss)
* [2025-07-03, 14:00:16](https://news.ycombinator.com/item?id=44455175) - [François Chollet: The Arc Prize and How We Get to AGI [video]](https://www.youtube.com/watch?v=5QcCeSsNRks)
* [2025-07-03, 12:11:00](https://soylentnews.org/article.pl?sid=25/07/02/1153235&amp;from=rss) - [Deutsche Bahn Train Hits 405 km/h Without Falling to Bits](https://soylentnews.org/article.pl?sid=25/07/02/1153235&amp;from=rss)
* [2025-07-03, 08:16:00](https://soylentnews.org/article.pl?sid=25/07/02/1148257&amp;from=rss) - [Arm-Based Servers to Grow 70% This Year](https://soylentnews.org/article.pl?sid=25/07/02/1148257&amp;from=rss)
* [2025-07-03, 03:33:00](https://soylentnews.org/article.pl?sid=25/07/02/1144216&amp;from=rss) - [Bruce Schneier on How Cybersecurity Fears Affect Confidence in Voting Systems](https://soylentnews.org/article.pl?sid=25/07/02/1144216&amp;from=rss)
