# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Privacy

* [Cops say criminals use a Google Pixel with GrapheneOS – I say that's freedom](https://www.androidauthority.com/why-i-use-grapheneos-on-pixel-3575477/) ([comments](https://news.ycombinator.com/item?id=44658908))

* [Humans Can Be Tracked With Unique 'Fingerprint' Based On How Their Bodies Block Wi-Fi Signals](https://mobile.slashdot.org/story/25/07/22/2112203/humans-can-be-tracked-with-unique-fingerprint-based-on-how-their-bodies-block-wi-fi-signals?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://mobile.slashdot.org/story/25/07/22/2112203/humans-can-be-tracked-with-unique-fingerprint-based-on-how-their-bodies-block-wi-fi-signals))

* [Why you can't color calibrate deep space photos](https://maurycyz.com/misc/cc/) ([comments](https://news.ycombinator.com/item?id=44654444))

## Artificial Intelligence and Workforce Disruption

* [OpenAI CEO Tells Federal Reserve Confab That Entire Job Categories Will Disappear Due To AI](https://slashdot.org/story/25/07/23/0317227/openai-ceo-tells-federal-reserve-confab-that-entire-job-categories-will-disappear-due-to-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/07/23/0317227/openai-ceo-tells-federal-reserve-confab-that-entire-job-categories-will-disappear-due-to-ai))

* [AI Coding Agents Are Removing Programming Language Barriers](https://railsatscale.com/2025-07-19-ai-coding-agents-are-removing-programming-language-barriers/) ([comments](https://lobste.rs/s/gsvrwc/ai_coding_agents_are_removing))

## Innovations and Advances

* [TrackWeight: Use your Mac trackpad as a weighing scale](https://github.com/KrishKrosh/TrackWeight) ([comments](https://lobste.rs/s/dtmziw/trackweight_use_your_mac_trackpad_as))

* [Cerebras Launches Qwen3-235B, Achieving 1,500 Tokens per Second](https://www.cerebras.ai/press-release/cerebras-launches-qwen3-235b-world-s-fastest-frontier-ai-model-with-full-131k-context-support) ([comments](https://news.ycombinator.com/item?id=44657727))

## Cybersecurity and Digital Reality

* [UK To Ban Public Sector Orgs From Paying Ransomware Gangs](https://news.slashdot.org/story/25/07/22/232218/uk-to-ban-public-sector-orgs-from-paying-ransomware-gangs?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/07/22/232218/uk-to-ban-public-sector-orgs-from-paying-ransomware-gangs))

* [The Atomic Bomb Marker Inside Your Body](https://soylentnews.org/article.pl?sid=25/07/22/079200&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/07/22/079200))

## Science and Discoveries

* [In World First, CCTV Captures Supershear Velocity Earthquake](https://science.slashdot.org/story/25/07/23/038237/in-world-first-cctv-captures-supershear-velocity-earthquake?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/07/23/038237/in-world-first-cctv-captures-supershear-velocity-earthquake))

* [11,000-Year-Old Feast Uncovered: Why Hunters Hauled Wild Boars Across Mountains](https://soylentnews.org/article.pl?sid=25/07/21/225220&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/07/21/225220))

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

* [2025-07-23, 13:17:38](https://news.ycombinator.com/item?id=44658908) - [Cops say criminals use a Google Pixel with GrapheneOS – I say that&apos;s freedom](https://www.androidauthority.com/why-i-use-grapheneos-on-pixel-3575477/)
* [2025-07-23, 13:09:01](https://news.ycombinator.com/item?id=44658820) - [Using Radicle CI](https://radicle.xyz/2025/07/23/using-radicle-ci-for-development)
* [2025-07-23, 13:03:22](https://news.ycombinator.com/item?id=44658770) - [20 years of Linux on the Desktop (part 4)](https://ploum.net/2025-07-23-linux_desktop4.html)
* [2025-07-23, 13:00:55](https://lobste.rs/s/c53kzb/20_years_linux_on_desktop_part_4) - [20 years of Linux on the Desktop (part 4)](https://ploum.net/2025-07-23-linux_desktop4.html)
* [2025-07-23, 13:00:00](https://slashdot.org/story/25/07/23/0317227/openai-ceo-tells-federal-reserve-confab-that-entire-job-categories-will-disappear-due-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI CEO Tells Federal Reserve Confab That Entire Job Categories Will Disappear Due To AI](https://slashdot.org/story/25/07/23/0317227/openai-ceo-tells-federal-reserve-confab-that-entire-job-categories-will-disappear-due-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 12:42:55](https://news.ycombinator.com/item?id=44658573) - [How younger people interact with the modern internet](https://social.restless.systems/@CursedSilicon/114899888735166987)
* [2025-07-23, 12:41:23](https://news.ycombinator.com/item?id=44658547) - [Apple Introduces AppleCare One](https://www.apple.com/newsroom/2025/07/apple-introduces-applecare-one-streamlining-coverage-into-a-single-plan/)
* [2025-07-23, 12:28:59](https://news.ycombinator.com/item?id=44658458) - [Are we Trek yet? – A guide for how close we are to Star Trek technology](https://arewetrekyet.com/)
* [2025-07-23, 12:24:54](https://lobste.rs/s/dtmziw/trackweight_use_your_mac_trackpad_as) - [TrackWeight: Use your Mac trackpad as a weighing scale](https://github.com/KrishKrosh/TrackWeight)
* [2025-07-23, 12:00:36](https://news.ycombinator.com/item?id=44658233) - [QuestDB (YC S20) Is Hiring a Technical Content Lead](https://questdb.com/careers/technical-content-lead/)
* [2025-07-23, 11:46:09](https://news.ycombinator.com/item?id=44658103) - [Apple&apos;s Liquid Glass: When Aesthetics Beat Function](https://www.maxvanijsselmuiden.nl/liquid-glass)
* [2025-07-23, 11:36:33](https://news.ycombinator.com/item?id=44658027) - [Show HN: Header-only GIF decoder in pure C – no malloc, easy to use](https://news.ycombinator.com/item?id=44658027)
* [2025-07-23, 11:32:31](https://lobste.rs/s/ixfukh/font_size_adjust_is_useful) - [font-size-adjust Is Useful](https://matklad.github.io/2025/07/16/font-size-adjust.html)
* [2025-07-23, 11:19:26](https://lobste.rs/s/lsww5q/building_systems_simply) - [Building Systems, Simply](https://www.youtube.com/watch?v=jVC4DP-8xLM)
* [2025-07-23, 10:51:51](https://news.ycombinator.com/item?id=44657727) - [Cerebras Launches Qwen3-235B, Achieving 1,500 Tokens per Second](https://www.cerebras.ai/press-release/cerebras-launches-qwen3-235b-world-s-fastest-frontier-ai-model-with-full-131k-context-support)
* [2025-07-23, 10:24:00](https://soylentnews.org/article.pl?sid=25/07/22/079200&amp;from=rss) - [The Atomic Bomb Marker Inside Your Body](https://soylentnews.org/article.pl?sid=25/07/22/079200&amp;from=rss)
* [2025-07-23, 10:19:00](https://lobste.rs/s/25kvql/what_is_x_forwarded_for_when_can_you_trust) - [What is X-Forwarded-For and when can you trust it?](https://httptoolkit.com/blog/what-is-x-forwarded-for/)
* [2025-07-23, 10:01:00](https://news.slashdot.org/story/25/07/22/232218/uk-to-ban-public-sector-orgs-from-paying-ransomware-gangs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK To Ban Public Sector Orgs From Paying Ransomware Gangs](https://news.slashdot.org/story/25/07/22/232218/uk-to-ban-public-sector-orgs-from-paying-ransomware-gangs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 09:57:25](https://news.ycombinator.com/item?id=44657433) - [Checking Out CPython 3.14&apos;s remote debugging protocol](https://rtpg.co/2025/06/28/checking-out-sys-remote-exec/)
* [2025-07-23, 09:33:23](https://news.ycombinator.com/item?id=44657291) - [Brave blocks Microsoft Recall by default](https://brave.com/privacy-updates/35-block-recall/)
* [2025-07-23, 09:00:29](https://lobste.rs/s/9tmoou/what_expect_from_debian_trixie) - [What to expect from Debian/trixie](https://michael-prokop.at/blog/2025/07/20/what-to-expect-from-debian-trixie-newintrixie/)
* [2025-07-23, 08:36:33](https://lobste.rs/s/v1i4i3/reverse_proxy_deep_dive) - [Reverse proxy deep dive](https://startwithawhy.com/reverseproxy/2024/01/15/ReverseProxy-Deep-Dive.html)
* [2025-07-23, 08:35:57](https://lobste.rs/s/z7l40q/reverse_proxy_deep_dive_part_2_why_http) - [Reverse Proxy Deep Dive Part 2: Why HTTP Parsing at the Edge Is Harder Than It Looks](https://startwithawhy.com/reverseproxy/2025/07/20/ReverseProxy-Deep-Dive-Part2.html)
* [2025-07-23, 08:30:00](https://science.slashdot.org/story/25/07/23/038237/in-world-first-cctv-captures-supershear-velocity-earthquake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In World First, CCTV Captures Supershear Velocity Earthquake](https://science.slashdot.org/story/25/07/23/038237/in-world-first-cctv-captures-supershear-velocity-earthquake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 07:46:12](https://lobste.rs/s/zvmpbq/fun_with_gzip_bombs_email_clients) - [Fun with Gzip Bombs and Email Clients](https://www.grepular.com/Fun_with_Gzip_Bombs_and_Email_Clients)
* [2025-07-23, 07:46:00](https://lobste.rs/s/iasb9a/display_next_hackfest_2025) - [Display Next Hackfest 2025](https://zamundaaa.github.io/wayland/2025/07/22/display-next-hackfest-2025.html)
* [2025-07-23, 07:01:00](https://tech.slashdot.org/story/25/07/22/2259204/conspiracy-theorists-dont-realize-theyre-on-the-fringe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Conspiracy Theorists Don&apos;t Realize They&apos;re On the Fringe](https://tech.slashdot.org/story/25/07/22/2259204/conspiracy-theorists-dont-realize-theyre-on-the-fringe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 06:02:40](https://news.ycombinator.com/item?id=44656105) - [Rescuing two PDP-11s from a former British Telecom underground shelter (2023)](https://forum.vcfed.org/index.php?threads/rescuing-two-pdp-11-systems-in-uk-from-a-former-big-british-telecom-underground-shelter-in-central-london.1244723/page-2)
* [2025-07-23, 05:54:21](https://news.ycombinator.com/item?id=44656073) - [Extending Emacs with Fennel (2024)](https://andreyor.st/posts/2024-12-20-extending-emacs-with-fennel/)
* [2025-07-23, 05:52:14](https://lobste.rs/s/wghfos/extending_emacs_with_fennel) - [Extending Emacs with Fennel](https://andreyor.st/posts/2024-12-20-extending-emacs-with-fennel/)
* [2025-07-23, 05:35:00](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss) - [Matson Suspends Shipping EVs Citing Hazards of Lithium-ion Batteries](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss)
* [2025-07-23, 04:20:00](https://news.slashdot.org/story/25/07/22/2250221/funding-for-program-to-stop-next-stuxnet-from-hitting-us-expired-sunday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Funding For Program To Stop Next Stuxnet From Hitting US Expired Sunday](https://news.slashdot.org/story/25/07/22/2250221/funding-for-program-to-stop-next-stuxnet-from-hitting-us-expired-sunday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 04:08:10](https://lobste.rs/s/txrjel/is_it_feasible_start_local_forum_2025) - [Is it feasible to start a local forum in 2025?](https://lobste.rs/s/txrjel/is_it_feasible_start_local_forum_2025)
* [2025-07-23, 03:47:18](https://news.ycombinator.com/item?id=44655565) - [Mathematics for Computer Science (2024)](https://ocw.mit.edu/courses/6-1200j-mathematics-for-computer-science-spring-2024/)
* [2025-07-23, 03:36:36](https://lobste.rs/s/gsvrwc/ai_coding_agents_are_removing) - [AI Coding Agents Are Removing Programming Language Barriers](https://railsatscale.com/2025-07-19-ai-coding-agents-are-removing-programming-language-barriers/)
* [2025-07-23, 03:30:00](https://science.slashdot.org/story/25/07/22/214228/covid-pandemic-aged-brains-by-an-average-of-55-months-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [COVID Pandemic Aged Brains By an Average of 5.5 Months, Study Finds](https://science.slashdot.org/story/25/07/22/214228/covid-pandemic-aged-brains-by-an-average-of-55-months-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 03:09:20](https://news.ycombinator.com/item?id=44655385) - [Org tutorials](https://orgmode.org/worg/org-tutorials/index.html)
* [2025-07-23, 01:40:00](https://yro.slashdot.org/story/25/07/22/2245236/the-escobar-phone-scam-saga-has-finally-come-to-an-end?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Escobar Phone Scam Saga Has Finally Come To an End](https://yro.slashdot.org/story/25/07/22/2245236/the-escobar-phone-scam-saga-has-finally-come-to-an-end?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 01:10:00](https://mobile.slashdot.org/story/25/07/22/2112203/humans-can-be-tracked-with-unique-fingerprint-based-on-how-their-bodies-block-wi-fi-signals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humans Can Be Tracked With Unique &apos;Fingerprint&apos; Based On How Their Bodies Block Wi-Fi Signals](https://mobile.slashdot.org/story/25/07/22/2112203/humans-can-be-tracked-with-unique-fingerprint-based-on-how-their-bodies-block-wi-fi-signals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 00:54:00](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss) - [11,000-Year-Old Feast Uncovered: Why Hunters Hauled Wild Boars Across Mountains](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss)
* [2025-07-23, 00:30:00](https://slashdot.org/story/25/07/22/2116255/amazon-buys-bee-ai-wearable-that-listens-to-everything-you-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Buys Bee AI Wearable That Listens To Everything You Say](https://slashdot.org/story/25/07/22/2116255/amazon-buys-bee-ai-wearable-that-listens-to-everything-you-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 00:16:18](https://news.ycombinator.com/item?id=44654444) - [Why you can&apos;t color calibrate deep space photos](https://maurycyz.com/misc/cc/)
* [2025-07-22, 23:50:00](https://hardware.slashdot.org/story/25/07/22/2042234/nvidias-cuda-platform-now-support-risc-v?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia&apos;s CUDA Platform Now Support RISC-V](https://hardware.slashdot.org/story/25/07/22/2042234/nvidias-cuda-platform-now-support-risc-v?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 23:10:00](https://yro.slashdot.org/story/25/07/22/2033221/brave-browser-blocks-microsoft-recall-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brave Browser Blocks Microsoft Recall By Default](https://yro.slashdot.org/story/25/07/22/2033221/brave-browser-blocks-microsoft-recall-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 22:56:55](https://news.ycombinator.com/item?id=44653965) - [Algorithms for Modern Processor Architectures](https://lemire.github.io/talks/2025/sea/sea2025.html)
* [2025-07-22, 22:30:00](https://slashdot.org/story/25/07/22/2027203/science-confirms-what-we-all-suspected-four-day-weeks-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Science Confirms What We All Suspected: Four-Day Weeks Rule](https://slashdot.org/story/25/07/22/2027203/science-confirms-what-we-all-suspected-four-day-weeks-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 22:22:15](https://lobste.rs/s/itpokq/python_3_14_release_candidate_1_is_go) - [Python 3.14 release candidate 1 is go](https://pythoninsider.blogspot.com/2025/07/python-314-release-candidate-1-is-go.html)
* [2025-07-22, 21:53:00](https://apple.slashdot.org/story/25/07/22/2016222/apple-set-to-stave-off-daily-fines-eu-to-accept-app-store-changes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Set To Stave Off Daily Fines, EU To Accept App Store Changes](https://apple.slashdot.org/story/25/07/22/2016222/apple-set-to-stave-off-daily-fines-eu-to-accept-app-store-changes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 21:12:30](https://news.ycombinator.com/item?id=44653072) - [Qwen3-Coder: Agentic coding in the world](https://qwenlm.github.io/blog/qwen3-coder/)
* [2025-07-22, 20:50:25](https://lobste.rs/s/rwl6s2/kelp_ui_library_for_people_who_love_html) - [Kelp: A UI library for people who love HTML, powered by modern CSS and Web Components](https://kelpui.com/)
* [2025-07-22, 20:15:00](https://yro.slashdot.org/story/25/07/22/2013209/california-wont-force-isps-to-offer-15-broadband?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Won&apos;t Force ISPs To Offer $15 Broadband](https://yro.slashdot.org/story/25/07/22/2013209/california-wont-force-isps-to-offer-15-broadband?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 20:09:00](https://soylentnews.org/article.pl?sid=25/07/21/2142206&amp;from=rss) - [Popular Sugar Substitute Linked to Brain Cell Damage and Stroke Risk](https://soylentnews.org/article.pl?sid=25/07/21/2142206&amp;from=rss)
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
* [2025-07-22, 16:50:09](https://lobste.rs/s/5u6ydr/tailwind_is_worst_all_worlds) - [Tailwind is the Worst of All Worlds](https://colton.dev/blog/tailwind-is-the-worst-of-all-worlds/)
* [2025-07-22, 15:22:00](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss) - [A Strange Fossil at the Edge of the Solar System Just Shook Up Planet Nine Theories](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss)
* [2025-07-22, 14:02:48](https://lobste.rs/s/iodpgb/library_babel) - [Library of Babel](https://libraryofbabel.app/about)
* [2025-07-22, 13:40:34](https://lobste.rs/s/j1hijj/todos_aren_t_for_doing) - [TODOs aren’t for doing](https://sophiebits.com/2025/07/21/todos-arent-for-doing)
* [2025-07-22, 13:34:49](https://lobste.rs/s/tbyuze/fedora_must_carefully_embrace_flathub) - [Fedora Must (Carefully) Embrace Flathub](https://blogs.gnome.org/mcatanzaro/2025/07/21/fedora-must-carefully-embrace-flathub/)
* [2025-07-22, 10:50:17](https://lobste.rs/s/0ab7g3/comparing_glove80_maltron_keyboards) - [Comparing the Glove80 and Maltron keyboards](https://tratt.net/laurie/blog/2025/comparing_the_glove80_and_maltron_keyboards.html)
* [2025-07-22, 10:33:00](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss) - [Microsoft Says It Will No Longer Use Engineers in China for Department of Defense Work](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss)
* [2025-07-22, 05:47:00](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss) - [Thelonious Monk, the Teenage Weirdo, and the Battle Over a Lost Sonic Masterpiece](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss)
* [2025-07-22, 01:04:00](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss) - [Meta is Building “Several” Multi-Gigawatt Compute Clusters](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss)
* [2025-07-21, 23:41:28](https://lobste.rs/s/j5ahk8/jujutsu_for_busy_devs) - [Jujutsu For Busy Devs](https://maddie.wtf/posts/2025-07-21-jujutsu-for-busy-devs)
* [2025-07-21, 21:10:55](https://lobste.rs/s/obhc4f/working_on_programming_language_age_llms) - [Working on a Programming Language in the Age of LLMs](https://ryelang.org/blog/posts/programming-language-in-age-of-llms/)
* [2025-07-21, 20:19:00](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss) - [Weird Space Weather Seems to Have Influenced Human Behavior 41,000 years ago](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss)
* [2025-07-21, 17:59:23](https://news.ycombinator.com/item?id=44638304) - [SQL Injection as a Feature](https://idiallo.com/blog/sql-injection-as-a-feature)
* [2025-07-21, 15:39:00](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss) - [HP is Going to Monitor PC Usage With a \&quot;Carfax for PCs\&quot; ](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss)
* [2025-07-21, 10:55:00](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss) - [Delta Air Lines is Using AI to Set the Maximum Price You’re Willing to Pay](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss)
* [2025-07-21, 06:09:00](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss) - [For Algorithms, a Little Memory Outweighs a Lot of Time](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss)
* [2025-07-21, 01:42:22](https://news.ycombinator.com/item?id=44631042) - [Geocities Backgrounds](https://pixelmoondust.neocities.org/archives/archivedtiles)
* [2025-07-21, 01:22:00](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss) - [Open, Free, and Completely Ignored: The Strange Afterlife of Symbian](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss)
* [2025-07-20, 20:35:00](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss) - [Iran Seeks Three Cloud Providers To Power Its Government](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss)
* [2025-07-20, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss) - [Remote Access Trojan (RAT) Found in the AUR (Arch Linux User Repository)](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss)
* [2025-07-20, 15:49:00](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss) - [Intel Has Discontinued Clear Linux, Effective Immediately](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss)
* [2025-07-20, 14:24:28](https://news.ycombinator.com/item?id=44625500) - [I&apos;m Unsatisfied with Easing Functions](https://www.davepagurek.com/blog/easing-functions/)
* [2025-07-20, 11:04:00](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss) - [The Latest Windows PCs Remember Everything](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss)
* [2025-07-20, 07:02:03](https://news.ycombinator.com/item?id=44622637) - [AI groups spend to replace low-cost &apos;data labellers&apos; with high-paid experts](https://www.ft.com/content/e17647f0-4c3b-49b4-a031-b56158bbb3b8)
* [2025-07-20, 06:18:00](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss) - [Infographic: Every Microsoft Acquisition Since 1986](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss)
* [2025-07-20, 01:33:00](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss) - [Is Tor Trustworthy and Safe?](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss)
* [2025-07-19, 21:15:56](https://news.ycombinator.com/item?id=44619485) - [Managing EFI boot loaders for Linux: Controlling secure boot (2015)](https://www.rodsbooks.com/efi-bootloaders/controlling-sb.html)
* [2025-07-19, 20:44:19](https://news.ycombinator.com/item?id=44619206) - [Don&apos;t animate height](https://www.granola.ai/blog/dont-animate-height)
* [2025-07-19, 20:33:00](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss) - [The Fascinating Science of Pain – and Why Everyone Feels it Differently](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss)
* [2025-07-19, 15:50:00](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss) - [FuguIta: OpenBSD Live CD - Desktop Environment Demo Version with XFCE v.4.20.0](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss)
* [2025-07-19, 11:08:00](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss) - [Most Warming This Century May Be Due To Air Pollution Cuts](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss)
* [2025-07-19, 06:20:00](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss) - [Two Guys Hated Using Comcast, So They Built Their Own Fiber ISP](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss)
* [2025-07-19, 01:37:00](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss) - [Radio Hobbyists, Rejoice! Good News for LoRa &amp; Mesh](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss)
