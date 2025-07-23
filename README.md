# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Nvidia's CUDA Platform Now Supports RISC-V](https://hardware.slashdot.org/story/25/07/22/2042234/nvidias-cuda-platform-now-support-risc-v?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Insight into how Nvidia’s CUDA software now accommodates RISC-V processors, opening avenues for more diverse computing platforms.

* [Amazon Buys Bee AI Wearable That Listens To Everything You Say](https://slashdot.org/story/25/07/22/2116255/amazon-buys-bee-ai-wearable-that-listens-to-everything-you-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Details on Amazon's acquisition of a cutting-edge AI wearable designed to monitor speech continuously.

* [AI Coding Agents Are Removing Programming Language Barriers](https://railsatscale.com/2025-07-19-ai-coding-agents-are-removing-programming-language-barriers/) - A look at how AI coding tools are dismantling the walls between programming languages to boost software development efficiency.

## Historic and Scientific Discoveries

* [11,000-Year-Old Feast Uncovered: Why Hunters Hauled Wild Boars Across Mountains](https://soylentnews.org/article.pl?sid=25/07/21/225220&from=rss) - Archaeologists uncover clues about ancient feasting practices, shedding light on prehistoric human behavior.

* [Gemini North Telescope Discovers Long-Predicted Stellar Companion of Betelgeuse](https://www.science.org/content/article/betelgeuse-s-long-predicted-stellar-companion-may-have-been-found-last) - After years of speculation, scientists reveal the discovery of Betelgeuse's elusive stellar companion.

* [COVID Pandemic Aged Brains By an Average of 5.5 Months, Study Finds](https://science.slashdot.org/story/25/07/22/214228/covid-pandemic-aged-brains-by-an-average-of-55-months-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A startling study analyzes how the pandemic impacted cognitive aging on a widespread scale.

## Cybersecurity and Digital Threats

* [Funding For Program To Stop Next Stuxnet From Hitting US Expired Sunday](https://news.slashdot.org/story/25/07/22/2250221/funding-for-program-to-stop-next-stuxnet-from-hitting-us-expired-sunday?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A report on the expiration of critical funding for a cybersecurity initiative aimed at averting similar threats to Stuxnet.

* [Remote Access Trojan (RAT) Found in the AUR (Arch Linux User Repository)](https://soylentnews.org/article.pl?sid=25/07/20/1854256&from=rss) - Discovery of a trojan embedded in the popular Arch Linux User Repository raises alarms for system administrators.

## Programming and Tools

* [Extending Emacs with Fennel](https://andreyor.st/posts/2024-12-20-extending-emacs-with-fennel/) - Exploration of how Fennel, a Lisp-like language for Lua, can extend the Emacs functionalities effectively.

* [WTFfmpeg – Natural Language to FFmpeg Translator](https://github.com/scottvr/wtffmpeg) - A novel tool for converting natural language descriptions into FFmpeg commands, aimed at simplifying multimedia tasks.

## Environmental and Social Challenges

* [Countries Across the World See Food Price Shocks From Climate Extremes](https://www.bsc.es/news/bsc-news/countries-across-the-world-see-food-price-shocks-climate-extremes-research-involving-bsc-shows) - A discussion on how severe weather events linked to climate change are influencing global food prices.

* [Humans Can Be Tracked With Unique 'Fingerprint' Based On How Their Bodies Block Wi-Fi Signals](https://mobile.slashdot.org/story/25/07/22/2112203/humans-can-be-tracked-with-unique-fingerprint-based-on-how-their-bodies-block-wi-fi-signals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers discover a novel way to identify individuals by analyzing disruptions in Wi-Fi signals produced by their bodies.

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

* [2025-07-23, 07:01:00](https://tech.slashdot.org/story/25/07/22/2259204/conspiracy-theorists-dont-realize-theyre-on-the-fringe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Conspiracy Theorists Don&apos;t Realize They&apos;re On the Fringe](https://tech.slashdot.org/story/25/07/22/2259204/conspiracy-theorists-dont-realize-theyre-on-the-fringe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 06:02:40](https://news.ycombinator.com/item?id=44656105) - [Rescuing two PDP-11s from a former British Telecom underground shelter (2023)](https://forum.vcfed.org/index.php?threads/rescuing-two-pdp-11-systems-in-uk-from-a-former-big-british-telecom-underground-shelter-in-central-london.1244723/page-2)
* [2025-07-23, 05:54:21](https://news.ycombinator.com/item?id=44656073) - [Extending Emacs with Fennel (2024)](https://andreyor.st/posts/2024-12-20-extending-emacs-with-fennel/)
* [2025-07-23, 05:52:14](https://lobste.rs/s/wghfos/extending_emacs_with_fennel) - [Extending Emacs with Fennel](https://andreyor.st/posts/2024-12-20-extending-emacs-with-fennel/)
* [2025-07-23, 05:35:00](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss) - [Matson Suspends Shipping EVs Citing Hazards of Lithium-ion Batteries](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss)
* [2025-07-23, 05:16:24](https://news.ycombinator.com/item?id=44655921) - [When Is WebAssembly Going to Get DOM Support?](https://queue.acm.org/detail.cfm?id=3746174)
* [2025-07-23, 05:04:57](https://news.ycombinator.com/item?id=44655866) - [Ask HN: What software subscriptions are worth paying for?](https://news.ycombinator.com/item?id=44655866)
* [2025-07-23, 04:31:47](https://news.ycombinator.com/item?id=44655741) - [Project Lyra – Exploring Interstellar Objects](https://i4is.org/what-we-do/technical/project-lyra/)
* [2025-07-23, 04:20:00](https://news.slashdot.org/story/25/07/22/2250221/funding-for-program-to-stop-next-stuxnet-from-hitting-us-expired-sunday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Funding For Program To Stop Next Stuxnet From Hitting US Expired Sunday](https://news.slashdot.org/story/25/07/22/2250221/funding-for-program-to-stop-next-stuxnet-from-hitting-us-expired-sunday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 04:08:10](https://lobste.rs/s/txrjel/is_it_feasible_start_local_forum_2025) - [Is it feasible to start a local forum in 2025?](https://lobste.rs/s/txrjel/is_it_feasible_start_local_forum_2025)
* [2025-07-23, 04:03:53](https://news.ycombinator.com/item?id=44655632) - [Show HN: WTFfmpeg – Natural Language to FFmpeg Translator](https://github.com/scottvr/wtffmpeg)
* [2025-07-23, 03:57:02](https://news.ycombinator.com/item?id=44655600) - [Countries across the world see food price shocks from climate extremes](https://www.bsc.es/news/bsc-news/countries-across-the-world-see-food-price-shocks-climate-extremes-research-involving-bsc-shows)
* [2025-07-23, 03:47:18](https://news.ycombinator.com/item?id=44655565) - [Mathematics for Computer Science (2024)](https://ocw.mit.edu/courses/6-1200j-mathematics-for-computer-science-spring-2024/)
* [2025-07-23, 03:39:13](https://news.ycombinator.com/item?id=44655515) - [AI coding agents are removing programming language barriers](https://railsatscale.com/2025-07-19-ai-coding-agents-are-removing-programming-language-barriers/)
* [2025-07-23, 03:36:36](https://lobste.rs/s/gsvrwc/ai_coding_agents_are_removing) - [AI Coding Agents Are Removing Programming Language Barriers](https://railsatscale.com/2025-07-19-ai-coding-agents-are-removing-programming-language-barriers/)
* [2025-07-23, 03:30:00](https://science.slashdot.org/story/25/07/22/214228/covid-pandemic-aged-brains-by-an-average-of-55-months-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [COVID Pandemic Aged Brains By an Average of 5.5 Months, Study Finds](https://science.slashdot.org/story/25/07/22/214228/covid-pandemic-aged-brains-by-an-average-of-55-months-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 03:09:20](https://news.ycombinator.com/item?id=44655385) - [Org tutorials](https://orgmode.org/worg/org-tutorials/index.html)
* [2025-07-23, 01:40:00](https://yro.slashdot.org/story/25/07/22/2245236/the-escobar-phone-scam-saga-has-finally-come-to-an-end?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Escobar Phone Scam Saga Has Finally Come To an End](https://yro.slashdot.org/story/25/07/22/2245236/the-escobar-phone-scam-saga-has-finally-come-to-an-end?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 01:10:00](https://mobile.slashdot.org/story/25/07/22/2112203/humans-can-be-tracked-with-unique-fingerprint-based-on-how-their-bodies-block-wi-fi-signals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humans Can Be Tracked With Unique &apos;Fingerprint&apos; Based On How Their Bodies Block Wi-Fi Signals](https://mobile.slashdot.org/story/25/07/22/2112203/humans-can-be-tracked-with-unique-fingerprint-based-on-how-their-bodies-block-wi-fi-signals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 00:54:00](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss) - [11,000-Year-Old Feast Uncovered: Why Hunters Hauled Wild Boars Across Mountains](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss)
* [2025-07-23, 00:30:00](https://slashdot.org/story/25/07/22/2116255/amazon-buys-bee-ai-wearable-that-listens-to-everything-you-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Buys Bee AI Wearable That Listens To Everything You Say](https://slashdot.org/story/25/07/22/2116255/amazon-buys-bee-ai-wearable-that-listens-to-everything-you-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 00:16:18](https://news.ycombinator.com/item?id=44654444) - [Why you can&apos;t color calibrate deep space photos](https://maurycyz.com/misc/cc/)
* [2025-07-22, 23:55:19](https://news.ycombinator.com/item?id=44654299) - [TapTrap: Animation‑Driven Tapjacking on Android](https://taptrap.click/)
* [2025-07-22, 23:53:32](https://lobste.rs/s/of4j17/taptrap_animation_driven_tapjacking_on) - [TapTrap: Animation‑Driven Tapjacking on Android](https://taptrap.click/)
* [2025-07-22, 23:50:00](https://hardware.slashdot.org/story/25/07/22/2042234/nvidias-cuda-platform-now-support-risc-v?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia&apos;s CUDA Platform Now Support RISC-V](https://hardware.slashdot.org/story/25/07/22/2042234/nvidias-cuda-platform-now-support-risc-v?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 23:10:00](https://yro.slashdot.org/story/25/07/22/2033221/brave-browser-blocks-microsoft-recall-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brave Browser Blocks Microsoft Recall By Default](https://yro.slashdot.org/story/25/07/22/2033221/brave-browser-blocks-microsoft-recall-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 22:56:55](https://news.ycombinator.com/item?id=44653965) - [Algorithms for Modern Processor Architectures](https://lemire.github.io/talks/2025/sea/sea2025.html)
* [2025-07-22, 22:30:00](https://slashdot.org/story/25/07/22/2027203/science-confirms-what-we-all-suspected-four-day-weeks-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Science Confirms What We All Suspected: Four-Day Weeks Rule](https://slashdot.org/story/25/07/22/2027203/science-confirms-what-we-all-suspected-four-day-weeks-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 22:22:15](https://lobste.rs/s/itpokq/python_3_14_release_candidate_1_is_go) - [Python 3.14 release candidate 1 is go](https://pythoninsider.blogspot.com/2025/07/python-314-release-candidate-1-is-go.html)
* [2025-07-22, 22:12:25](https://news.ycombinator.com/item?id=44653586) - [Comparing the Glove80 and Maltron Keyboards](https://tratt.net/laurie/blog/2025/comparing_the_glove80_and_maltron_keyboards.html)
* [2025-07-22, 21:53:00](https://apple.slashdot.org/story/25/07/22/2016222/apple-set-to-stave-off-daily-fines-eu-to-accept-app-store-changes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Set To Stave Off Daily Fines, EU To Accept App Store Changes](https://apple.slashdot.org/story/25/07/22/2016222/apple-set-to-stave-off-daily-fines-eu-to-accept-app-store-changes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 21:12:30](https://news.ycombinator.com/item?id=44653072) - [Qwen3-Coder: Agentic coding in the world](https://qwenlm.github.io/blog/qwen3-coder/)
* [2025-07-22, 21:00:34](https://news.ycombinator.com/item?id=44652938) - [Firebender (YC W24) Is Hiring](https://www.ycombinator.com/companies/firebender/jobs/yisDXr5-founding-engineer-generalist)
* [2025-07-22, 20:50:25](https://lobste.rs/s/rwl6s2/kelp_ui_library_for_people_who_love_html) - [Kelp: A UI library for people who love HTML, powered by modern CSS and Web Components](https://kelpui.com/)
* [2025-07-22, 20:15:00](https://yro.slashdot.org/story/25/07/22/2013209/california-wont-force-isps-to-offer-15-broadband?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Won&apos;t Force ISPs To Offer $15 Broadband](https://yro.slashdot.org/story/25/07/22/2013209/california-wont-force-isps-to-offer-15-broadband?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 20:09:00](https://soylentnews.org/article.pl?sid=25/07/21/2142206&amp;from=rss) - [Popular Sugar Substitute Linked to Brain Cell Damage and Stroke Risk](https://soylentnews.org/article.pl?sid=25/07/21/2142206&amp;from=rss)
* [2025-07-22, 19:56:26](https://lobste.rs/s/xfppsr/nvidia_announced_this_week_they_are) - [NVIDIA announced this week that they are bringing their CUDA software to RISC-V processors](https://www.phoronix.com/news/NVIDIA-CUDA-Coming-To-RISC-V)
* [2025-07-22, 19:49:56](https://lobste.rs/s/qvdmm8/approximate_first_principal_component) - [Approximate first principal component](https://30fps.net/pages/approximate-first-pc/)
* [2025-07-22, 19:17:38](https://news.ycombinator.com/item?id=44651770) - [More than you wanted to know about how Game Boy cartridges work](https://abc.decontextualize.com/more-than-you-wanted-to-know/)
* [2025-07-22, 19:17:32](https://news.ycombinator.com/item?id=44651766) - [We built an air-gapped Jira alternative for regulated industries](https://plane.so/blog/everything-you-need-to-know-about-plane-air-gapped)
* [2025-07-22, 19:14:59](https://lobste.rs/s/3eonsv/more_than_you_wanted_know_about_how_game) - [More than you wanted to know about how Game Boy cartridges work](https://abc.decontextualize.com/more-than-you-wanted-to-know/)
* [2025-07-22, 19:07:34](https://lobste.rs/s/91ukor/monads_as_graphs_2019) - [Monads as Graphs (2019)](http://neilmitchell.blogspot.com/2019/10/monads-as-graphs.html)
* [2025-07-22, 19:00:00](https://developers.slashdot.org/story/25/07/22/190242/surge-ceo-says-100x-engineers-are-here?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Surge CEO Says &apos;100x Engineers&apos; Are Here](https://developers.slashdot.org/story/25/07/22/190242/surge-ceo-says-100x-engineers-are-here?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 18:59:04](https://news.ycombinator.com/item?id=44651539) - [Swift-erlang-actor-system](https://forums.swift.org/t/introducing-swift-erlang-actor-system/81248)
* [2025-07-22, 18:56:31](https://lobste.rs/s/6feg1a/introducing_swift_erlang_actor_system) - [Introducing swift-erlang-actor-system](https://forums.swift.org/t/introducing-swift-erlang-actor-system/81248)
* [2025-07-22, 18:54:05](https://news.ycombinator.com/item?id=44651485) - [I watched Gemini CLI hallucinate and delete my files](https://anuraag2601.github.io/gemini_cli_disaster.html)
* [2025-07-22, 18:48:00](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss) - [RIP - Ozzy Osborne](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss)
* [2025-07-22, 18:23:14](https://news.ycombinator.com/item?id=44651092) - [Android Earthquake Alerts: A global system for early warning](https://research.google/blog/android-earthquake-alerts-a-global-system-for-early-warning/)
* [2025-07-22, 18:02:11](https://news.ycombinator.com/item?id=44650840) - [Subliminal learning: Models transmit behaviors via hidden signals in data](https://alignment.anthropic.com/2025/subliminal-learning/)
* [2025-07-22, 18:01:10](https://lobste.rs/s/mmdeza/asymmetry_verification_verifier_s_law) - [Asymmetry of verification and verifier’s law](https://www.jasonwei.net/blog/asymmetry-of-verification-and-verifiers-law)
* [2025-07-22, 17:27:00](https://slashdot.org/story/25/07/22/1727252/microsoft-poaches-top-google-deepmind-staff-in-ai-talent-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Poaches Top Google DeepMind Staff in AI Talent War](https://slashdot.org/story/25/07/22/1727252/microsoft-poaches-top-google-deepmind-staff-in-ai-talent-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 16:50:09](https://lobste.rs/s/5u6ydr/tailwind_is_worst_all_worlds) - [Tailwind is the Worst of All Worlds](https://colton.dev/blog/tailwind-is-the-worst-of-all-worlds/)
* [2025-07-22, 16:41:31](https://news.ycombinator.com/item?id=44649651) - [Gemini North telescope discovers long-predicted stellar companion of Betelgeuse](https://www.science.org/content/article/betelgeuse-s-long-predicted-stellar-companion-may-have-been-found-last)
* [2025-07-22, 16:40:00](https://tech.slashdot.org/story/25/07/22/1629240/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results-pew-research-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Users Are Less Likely To Click on Links When an AI Summary Appears in the Results, Pew Research Finds](https://tech.slashdot.org/story/25/07/22/1629240/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results-pew-research-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 16:03:00](https://science.slashdot.org/story/25/07/22/163219/many-lung-cancers-are-now-in-nonsmokers-scientists-want-to-know-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Many Lung Cancers Are Now in Nonsmokers. Scientists Want to Know Why.](https://science.slashdot.org/story/25/07/22/163219/many-lung-cancers-are-now-in-nonsmokers-scientists-want-to-know-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 15:22:00](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss) - [A Strange Fossil at the Edge of the Solar System Just Shook Up Planet Nine Theories](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss)
* [2025-07-22, 14:17:05](https://news.ycombinator.com/item?id=44647190) - [Font Comparison: Atkinson Hyperlegible Mono vs. JetBrains Mono and Fira Code](https://www.anthes.is/font-comparison-review-atkinson-hyperlegible-mono.html)
* [2025-07-22, 14:02:48](https://lobste.rs/s/iodpgb/library_babel) - [Library of Babel](https://libraryofbabel.app/about)
* [2025-07-22, 13:43:16](https://news.ycombinator.com/item?id=44646801) - [TODOs aren&apos;t for doing](https://sophiebits.com/2025/07/21/todos-arent-for-doing)
* [2025-07-22, 13:40:34](https://lobste.rs/s/j1hijj/todos_aren_t_for_doing) - [TODOs aren’t for doing](https://sophiebits.com/2025/07/21/todos-arent-for-doing)
* [2025-07-22, 13:36:20](https://lobste.rs/s/d5ugox/detecting_organic_contaminants_with) - [Detecting Organic Contaminants With Less Data](https://mirawelner.com/posts/spectroscopy.html)
* [2025-07-22, 13:34:49](https://lobste.rs/s/tbyuze/fedora_must_carefully_embrace_flathub) - [Fedora Must (Carefully) Embrace Flathub](https://blogs.gnome.org/mcatanzaro/2025/07/21/fedora-must-carefully-embrace-flathub/)
* [2025-07-22, 11:31:24](https://news.ycombinator.com/item?id=44645597) - [Show HN: A word of the day that doesn&apos;t suck](https://news.ycombinator.com/item?id=44645597)
* [2025-07-22, 10:50:17](https://lobste.rs/s/0ab7g3/comparing_glove80_maltron_keyboards) - [Comparing the Glove80 and Maltron keyboards](https://tratt.net/laurie/blog/2025/comparing_the_glove80_and_maltron_keyboards.html)
* [2025-07-22, 10:33:00](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss) - [Microsoft Says It Will No Longer Use Engineers in China for Department of Defense Work](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss)
* [2025-07-22, 10:16:55](https://lobste.rs/s/lenqkc/self_hosted_bsd_native_gemini_protocol) - [A Self-hosted, BSD-native Gemini Protocol Server Stack](https://journal.bsd.cafe/2025/07/22/a-self-hosted-bsd-native-gemini-protocol-server-stack/)
* [2025-07-22, 05:47:00](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss) - [Thelonious Monk, the Teenage Weirdo, and the Battle Over a Lost Sonic Masterpiece](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss)
* [2025-07-22, 04:27:28](https://lobste.rs/s/r79s3w/devenv_1_8_progress_tui_secretspec) - [devenv 1.8: Progress TUI, SecretSpec Integration, Listing Tasks, and Smaller Containers](https://devenv.sh/blog/2025/07/22/devenv-18-progress-tui-secretspec-integration-listing-tasks-and-smaller-containers)
* [2025-07-22, 01:04:00](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss) - [Meta is Building “Several” Multi-Gigawatt Compute Clusters](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss)
* [2025-07-21, 23:41:28](https://lobste.rs/s/j5ahk8/jujutsu_for_busy_devs) - [Jujutsu For Busy Devs](https://maddie.wtf/posts/2025-07-21-jujutsu-for-busy-devs)
* [2025-07-21, 21:49:28](https://lobste.rs/s/h8bfgy/sapling) - [Sapling](https://sapling-scm.com/)
* [2025-07-21, 21:16:10](https://lobste.rs/s/cvhdvw/garbage_collection_for_systems) - [Garbage Collection for Systems Programmers (2023)](https://bitbashing.io/gc-for-systems-programmers.html)
* [2025-07-21, 21:10:55](https://lobste.rs/s/obhc4f/working_on_programming_language_age_llms) - [Working on a Programming Language in the Age of LLMs](https://ryelang.org/blog/posts/programming-language-in-age-of-llms/)
* [2025-07-21, 20:19:00](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss) - [Weird Space Weather Seems to Have Influenced Human Behavior 41,000 years ago](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss)
* [2025-07-21, 15:39:00](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss) - [HP is Going to Monitor PC Usage With a \&quot;Carfax for PCs\&quot; ](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss)
* [2025-07-21, 12:13:19](https://lobste.rs/s/adii2s/dissertation_typesetting) - [Dissertation Typesetting Considerations](https://tony-zorman.com/posts/phd-typesetting.html)
* [2025-07-21, 10:55:00](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss) - [Delta Air Lines is Using AI to Set the Maximum Price You’re Willing to Pay](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss)
* [2025-07-21, 07:05:40](https://news.ycombinator.com/item?id=44632500) - [Java is still worth learning](https://empatheticdeveloper.wordpress.com/2025/07/20/why-java-is-still-worth-learning-in-2025-a-developers-25-year-journey/)
* [2025-07-21, 06:09:00](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss) - [For Algorithms, a Little Memory Outweighs a Lot of Time](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss)
* [2025-07-21, 01:22:00](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss) - [Open, Free, and Completely Ignored: The Strange Afterlife of Symbian](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss)
* [2025-07-20, 20:35:00](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss) - [Iran Seeks Three Cloud Providers To Power Its Government](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss)
* [2025-07-20, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss) - [Remote Access Trojan (RAT) Found in the AUR (Arch Linux User Repository)](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss)
* [2025-07-20, 16:35:57](https://news.ycombinator.com/item?id=44626807) - [Fourier lightfield multiview stereoscope for large field-of-view 3D imaging](https://www.spiedigitallibrary.org/journals/advanced-photonics-nexus/volume-4/issue-04/046008/Fourier-lightfield-multiview-stereoscope-for-large-field-of-view-3D/10.1117/1.APN.4.4.046008.full)
* [2025-07-20, 15:49:00](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss) - [Intel Has Discontinued Clear Linux, Effective Immediately](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss)
* [2025-07-20, 11:04:00](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss) - [The Latest Windows PCs Remember Everything](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss)
* [2025-07-20, 06:18:00](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss) - [Infographic: Every Microsoft Acquisition Since 1986](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss)
* [2025-07-20, 01:33:00](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss) - [Is Tor Trustworthy and Safe?](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss)
* [2025-07-19, 21:15:56](https://news.ycombinator.com/item?id=44619485) - [Managing EFI boot loaders for Linux: Controlling secure boot (2015)](https://www.rodsbooks.com/efi-bootloaders/controlling-sb.html)
* [2025-07-19, 20:44:19](https://news.ycombinator.com/item?id=44619206) - [Don&apos;t animate height](https://www.granola.ai/blog/dont-animate-height)
* [2025-07-19, 20:33:00](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss) - [The Fascinating Science of Pain – and Why Everyone Feels it Differently](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss)
* [2025-07-19, 15:50:00](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss) - [FuguIta: OpenBSD Live CD - Desktop Environment Demo Version with XFCE v.4.20.0](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss)
* [2025-07-19, 11:08:00](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss) - [Most Warming This Century May Be Due To Air Pollution Cuts](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss)
* [2025-07-19, 06:20:00](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss) - [Two Guys Hated Using Comcast, So They Built Their Own Fiber ISP](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss)
* [2025-07-19, 01:37:00](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss) - [Radio Hobbyists, Rejoice! Good News for LoRa &amp; Mesh](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss)
