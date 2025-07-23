# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Developments and Insights

* [Humans Can Be Tracked With Unique 'Fingerprint' Based On How Their Bodies Block Wi-Fi Signals](https://mobile.slashdot.org/story/25/07/22/2112203/humans-can-be-tracked-with-unique-fingerprint-based-on-how-their-bodies-block-wi-fi-signals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A fascinating look into how Wi-Fi signals can uniquely identify individuals based on how their bodies interact with the signal. [Comments](https://mobile.slashdot.org/story/25/07/22/2112203/humans-can-be-tracked-with-unique-fingerprint-based-on-how-their-bodies-block-wi-fi-signals?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [Amazon Buys Bee AI Wearable That Listens To Everything You Say](https://slashdot.org/story/25/07/22/2116255/amazon-buys-bee-ai-wearable-that-listens-to-everything-you-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Amazon takes steps into wearables with the acquisition of Bee AI, a device capable of capturing vast amounts of verbal data. [Comments](https://slashdot.org/story/25/07/22/2116255/amazon-buys-bee-ai-wearable-that-listens-to-everything-you-say?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [Nvidia's CUDA Platform Now Support RISC-V](https://hardware.slashdot.org/story/25/07/22/2042234/nvidias-cuda-platform-now-support-risc-v?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NVIDIA expands support for its CUDA platform to RISC-V processors, a significant move in the hardware domain. [Comments](https://hardware.slashdot.org/story/25/07/22/2042234/nvidias-cuda-platform-now-support-risc-v?utm_source=rss1.0mainlinkanon&utm_medium=feed).

## Science and Research

* [11,000-Year-Old Feast Uncovered: Why Hunters Hauled Wild Boars Across Mountains](https://soylentnews.org/article.pl?sid=25/07/21/225220&from=rss) - Archaeologists reveal insights into ancient feasting and the lengths prehistoric humans went to for ceremonial gatherings. [Comments](https://soylentnews.org/article.pl?sid=25/07/21/225220&from=rss).

* [Popular Sugar Substitute Linked to Brain Cell Damage and Stroke Risk](https://soylentnews.org/article.pl?sid=25/07/21/2142206&from=rss) - Alarming research uncovers potential serious health risks associated with common sugar substitutes. [Comments](https://soylentnews.org/article.pl?sid=25/07/21/2142206&from=rss).

* [Many Lung Cancers Are Now in Nonsmokers. Scientists Want to Know Why.](https://science.slashdot.org/story/25/07/22/163219/many-lung-cancers-are-now-in-nonsmokers-scientists-want-to-know-why?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Surge in lung cancer cases in nonsmokers prompts researchers to investigate potential causes. [Comments](https://science.slashdot.org/story/25/07/22/163219/many-lung-cancers-are-now-in-nonsmokers-scientists-want-to-know-why?utm_source=rss1.0mainlinkanon&utm_medium=feed).

## Cybersecurity and Technology Challenges

* [TapTrap: Animation‑Driven Tapjacking on Android](https://taptrap.click/) - Analysis of the TapTrap vulnerability, an exploit targeting Android devices. [Comments](https://news.ycombinator.com/item?id=44654299).

* [A media company demanded a license fee for an Open Graph image I used](https://alistairshepherd.uk/writing/open-graph-licensing/) - A personal account of licensing complexities related to Open Graph images. [Comments](https://news.ycombinator.com/item?id=44654494).

* [Fun with gzip bombs and email clients](https://www.grepular.com/Fun_with_Gzip_Bombs_and_Email_Clients) - Exploration of vulnerabilities and fun chaos caused by gzip bombs in email systems. [Comments](https://news.ycombinator.com/item?id=44651536).

## Cultural and Historical Stories

* [Thelonious Monk, the Teenage Weirdo, and the Battle Over a Lost Sonic Masterpiece](https://soylentnews.org/article.pl?sid=25/07/21/1617239&from=rss) - A compelling narrative about a lost musical masterpiece and its impact on jazz history. [Comments](https://soylentnews.org/article.pl?sid=25/07/21/1617239&from=rss).

* [My favourite German word](https://vurt.org/articles/my-favourite-german-word/) - A delightful exploration of a linguistic favorite in German vocabulary. [Comments](https://news.ycombinator.com/item?id=44613268).

* [Science Confirms What We All Suspected: Four-Day Weeks Rule](https://slashdot.org/story/25/07/22/2027203/science-confirms-what-we-all-suspected-four-day-weeks-rule?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Research supports the benefits of a four-day workweek, affirming popular sentiment. [Comments](https://slashdot.org/story/25/07/22/2027203/science-confirms-what-we-all-suspected-four-day-weeks-rule?utm_source=rss1.0mainlinkanon&utm_medium=feed).

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

* [2025-07-23, 01:40:00](https://yro.slashdot.org/story/25/07/22/2245236/the-escobar-phone-scam-saga-has-finally-come-to-an-end?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Escobar Phone Scam Saga Has Finally Come To an End](https://yro.slashdot.org/story/25/07/22/2245236/the-escobar-phone-scam-saga-has-finally-come-to-an-end?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 01:10:00](https://mobile.slashdot.org/story/25/07/22/2112203/humans-can-be-tracked-with-unique-fingerprint-based-on-how-their-bodies-block-wi-fi-signals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humans Can Be Tracked With Unique &apos;Fingerprint&apos; Based On How Their Bodies Block Wi-Fi Signals](https://mobile.slashdot.org/story/25/07/22/2112203/humans-can-be-tracked-with-unique-fingerprint-based-on-how-their-bodies-block-wi-fi-signals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 00:54:00](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss) - [11,000-Year-Old Feast Uncovered: Why Hunters Hauled Wild Boars Across Mountains](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss)
* [2025-07-23, 00:40:10](https://news.ycombinator.com/item?id=44654569) - [CAMARA: Open-source API for telecom and 5G networks](https://www.gsma.com/solutions-and-impact/technologies/networks/operator-platform-hp/camara-2/)
* [2025-07-23, 00:30:00](https://slashdot.org/story/25/07/22/2116255/amazon-buys-bee-ai-wearable-that-listens-to-everything-you-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Buys Bee AI Wearable That Listens To Everything You Say](https://slashdot.org/story/25/07/22/2116255/amazon-buys-bee-ai-wearable-that-listens-to-everything-you-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-23, 00:27:43](https://news.ycombinator.com/item?id=44654494) - [A media company demanded a license fee for an Open Graph image I used](https://alistairshepherd.uk/writing/open-graph-licensing/)
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
* [2025-07-22, 20:16:18](https://news.ycombinator.com/item?id=44652482) - [NonRAID – fork of unRAID array kernel module](https://github.com/qvr/nonraid)
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
* [2025-07-22, 18:58:23](https://news.ycombinator.com/item?id=44651536) - [Fun with gzip bombs and email clients](https://www.grepular.com/Fun_with_Gzip_Bombs_and_Email_Clients)
* [2025-07-22, 18:56:31](https://lobste.rs/s/6feg1a/introducing_swift_erlang_actor_system) - [Introducing swift-erlang-actor-system](https://forums.swift.org/t/introducing-swift-erlang-actor-system/81248)
* [2025-07-22, 18:54:05](https://news.ycombinator.com/item?id=44651485) - [I watched Gemini CLI hallucinate and delete my files](https://anuraag2601.github.io/gemini_cli_disaster.html)
* [2025-07-22, 18:48:00](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss) - [RIP - Ozzy Osborne](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss)
* [2025-07-22, 18:23:14](https://news.ycombinator.com/item?id=44651092) - [Android Earthquake Alerts: A global system for early warning](https://research.google/blog/android-earthquake-alerts-a-global-system-for-early-warning/)
* [2025-07-22, 18:02:11](https://news.ycombinator.com/item?id=44650840) - [Subliminal learning: Models transmit behaviors via hidden signals in data](https://alignment.anthropic.com/2025/subliminal-learning/)
* [2025-07-22, 18:01:10](https://lobste.rs/s/mmdeza/asymmetry_verification_verifier_s_law) - [Asymmetry of verification and verifier’s law](https://www.jasonwei.net/blog/asymmetry-of-verification-and-verifiers-law)
* [2025-07-22, 17:44:33](https://news.ycombinator.com/item?id=44650622) - [Show HN: Phind.design – Image editor &amp; design tool powered by 4o / custom models](https://phind.design)
* [2025-07-22, 17:27:00](https://slashdot.org/story/25/07/22/1727252/microsoft-poaches-top-google-deepmind-staff-in-ai-talent-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Poaches Top Google DeepMind Staff in AI Talent War](https://slashdot.org/story/25/07/22/1727252/microsoft-poaches-top-google-deepmind-staff-in-ai-talent-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 16:50:09](https://lobste.rs/s/5u6ydr/tailwind_is_worst_all_worlds) - [Tailwind is the Worst of All Worlds](https://colton.dev/blog/tailwind-is-the-worst-of-all-worlds/)
* [2025-07-22, 16:41:32](https://news.ycombinator.com/item?id=44649653) - [First Hubble telescope images of interstellar comet 3I/ATLAS](https://bsky.app/profile/astrafoxen.bsky.social/post/3luiwnar3j22o)
* [2025-07-22, 16:41:31](https://news.ycombinator.com/item?id=44649651) - [Gemini North telescope discovers long-predicted stellar companion of Betelgeuse](https://www.science.org/content/article/betelgeuse-s-long-predicted-stellar-companion-may-have-been-found-last)
* [2025-07-22, 16:40:00](https://tech.slashdot.org/story/25/07/22/1629240/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results-pew-research-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Users Are Less Likely To Click on Links When an AI Summary Appears in the Results, Pew Research Finds](https://tech.slashdot.org/story/25/07/22/1629240/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results-pew-research-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 16:22:51](https://news.ycombinator.com/item?id=44649319) - [Tiny Code Reader: a $7 QR code sensor](https://excamera.substack.com/p/tiny-code-reader-a-7-qr-code-sensor)
* [2025-07-22, 16:03:00](https://science.slashdot.org/story/25/07/22/163219/many-lung-cancers-are-now-in-nonsmokers-scientists-want-to-know-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Many Lung Cancers Are Now in Nonsmokers. Scientists Want to Know Why.](https://science.slashdot.org/story/25/07/22/163219/many-lung-cancers-are-now-in-nonsmokers-scientists-want-to-know-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 15:22:00](https://slashdot.org/story/25/07/22/1451201/banks-view-heavy-buy-now-pay-later-use-as-red-flag-for-loan-approvals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Banks View Heavy &apos;Buy Now, Pay Later&apos; Use as Red Flag for Loan Approvals](https://slashdot.org/story/25/07/22/1451201/banks-view-heavy-buy-now-pay-later-use-as-red-flag-for-loan-approvals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 15:22:00](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss) - [A Strange Fossil at the Edge of the Solar System Just Shook Up Planet Nine Theories](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss)
* [2025-07-22, 15:18:56](https://news.ycombinator.com/item?id=44648144) - [Many lung cancers are now in nonsmokers](https://www.nytimes.com/2025/07/22/well/lung-cancer-nonsmokers.html)
* [2025-07-22, 14:40:00](https://yro.slashdot.org/story/25/07/22/140208/mike-lynchs-estate-and-business-partner-owe-hp-944m-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mike Lynch&apos;s Estate and Business Partner Owe HP $944M, Court Rules](https://yro.slashdot.org/story/25/07/22/140208/mike-lynchs-estate-and-business-partner-owe-hp-944m-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 14:17:05](https://news.ycombinator.com/item?id=44647190) - [Font Comparison: Atkinson Hyperlegible Mono vs. JetBrains Mono and Fira Code](https://www.anthes.is/font-comparison-review-atkinson-hyperlegible-mono.html)
* [2025-07-22, 14:04:00](https://tech.slashdot.org/story/25/07/22/144239/google-launches-oss-rebuild?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches OSS Rebuild](https://tech.slashdot.org/story/25/07/22/144239/google-launches-oss-rebuild?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 14:02:48](https://lobste.rs/s/iodpgb/library_babel) - [Library of Babel](https://libraryofbabel.app/about)
* [2025-07-22, 13:53:46](https://news.ycombinator.com/item?id=44646925) - [OSS Rebuild: open-source, rebuilt to last](https://security.googleblog.com/2025/07/introducing-oss-rebuild-open-source.html)
* [2025-07-22, 13:43:16](https://news.ycombinator.com/item?id=44646801) - [TODOs aren&apos;t for doing](https://sophiebits.com/2025/07/21/todos-arent-for-doing)
* [2025-07-22, 13:40:34](https://lobste.rs/s/j1hijj/todos_aren_t_for_doing) - [TODOs aren’t for doing](https://sophiebits.com/2025/07/21/todos-arent-for-doing)
* [2025-07-22, 13:36:20](https://lobste.rs/s/d5ugox/detecting_organic_contaminants_with) - [Detecting Organic Contaminants With Less Data](https://mirawelner.com/posts/spectroscopy.html)
* [2025-07-22, 13:34:49](https://lobste.rs/s/tbyuze/fedora_must_carefully_embrace_flathub) - [Fedora Must (Carefully) Embrace Flathub](https://blogs.gnome.org/mcatanzaro/2025/07/21/fedora-must-carefully-embrace-flathub/)
* [2025-07-22, 10:50:17](https://lobste.rs/s/0ab7g3/comparing_glove80_maltron_keyboards) - [Comparing the Glove80 and Maltron keyboards](https://tratt.net/laurie/blog/2025/comparing_the_glove80_and_maltron_keyboards.html)
* [2025-07-22, 10:33:00](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss) - [Microsoft Says It Will No Longer Use Engineers in China for Department of Defense Work](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss)
* [2025-07-22, 10:16:55](https://lobste.rs/s/lenqkc/self_hosted_bsd_native_gemini_protocol) - [A Self-hosted, BSD-native Gemini Protocol Server Stack](https://journal.bsd.cafe/2025/07/22/a-self-hosted-bsd-native-gemini-protocol-server-stack/)
* [2025-07-22, 10:05:16](https://lobste.rs/s/2m8sl6/foreword_for_fuzz_testing_book) - [Foreword for Fuzz Testing Book](https://pages.cs.wisc.edu/~bart/fuzz/Foreword1.html)
* [2025-07-22, 05:47:00](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss) - [Thelonious Monk, the Teenage Weirdo, and the Battle Over a Lost Sonic Masterpiece](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss)
* [2025-07-22, 04:27:28](https://lobste.rs/s/r79s3w/devenv_1_8_progress_tui_secretspec) - [devenv 1.8: Progress TUI, SecretSpec Integration, Listing Tasks, and Smaller Containers](https://devenv.sh/blog/2025/07/22/devenv-18-progress-tui-secretspec-integration-listing-tasks-and-smaller-containers)
* [2025-07-22, 01:04:00](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss) - [Meta is Building “Several” Multi-Gigawatt Compute Clusters](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss)
* [2025-07-21, 23:41:28](https://lobste.rs/s/j5ahk8/jujutsu_for_busy_devs) - [Jujutsu For Busy Devs](https://maddie.wtf/posts/2025-07-21-jujutsu-for-busy-devs)
* [2025-07-21, 21:53:24](https://lobste.rs/s/brxlbh/advanced_version_gemini_with_deep_think) - [Advanced version of Gemini with Deep Think officially achieves gold-medal standard at the International Mathematical Olympiad](https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/)
* [2025-07-21, 21:49:28](https://lobste.rs/s/h8bfgy/sapling) - [Sapling](https://sapling-scm.com/)
* [2025-07-21, 21:16:10](https://lobste.rs/s/cvhdvw/garbage_collection_for_systems) - [Garbage Collection for Systems Programmers (2023)](https://bitbashing.io/gc-for-systems-programmers.html)
* [2025-07-21, 21:10:55](https://lobste.rs/s/obhc4f/working_on_programming_language_age_llms) - [Working on a Programming Language in the Age of LLMs](https://ryelang.org/blog/posts/programming-language-in-age-of-llms/)
* [2025-07-21, 20:19:00](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss) - [Weird Space Weather Seems to Have Influenced Human Behavior 41,000 years ago](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss)
* [2025-07-21, 15:48:48](https://lobste.rs/s/sdpydb/connmap_x11_desktop_widget_shows) - [connmap: X11 desktop widget that shows location of your current network peers on a world map in real-time](https://github.com/h2337/connmap)
* [2025-07-21, 15:39:00](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss) - [HP is Going to Monitor PC Usage With a \&quot;Carfax for PCs\&quot; ](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss)
* [2025-07-21, 15:23:25](https://news.ycombinator.com/item?id=44636277) - [Hegel Dust](https://www.bookforum.com/print/3201/hegel-dust-62209)
* [2025-07-21, 12:34:37](https://lobste.rs/s/qykvpg/deeper_theories_program_design) - [Deeper theories of program design](https://typesanitizer.com/blog/deeper-theories.html)
* [2025-07-21, 12:13:19](https://lobste.rs/s/adii2s/dissertation_typesetting) - [Dissertation Typesetting Considerations](https://tony-zorman.com/posts/phd-typesetting.html)
* [2025-07-21, 10:55:00](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss) - [Delta Air Lines is Using AI to Set the Maximum Price You’re Willing to Pay](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss)
* [2025-07-21, 08:21:42](https://news.ycombinator.com/item?id=44632904) - [Can Dave Hurwitz Save Classical Recording?](https://www.newyorker.com/culture/persons-of-interest/can-dave-hurwitz-save-classical-recording)
* [2025-07-21, 06:09:00](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss) - [For Algorithms, a Little Memory Outweighs a Lot of Time](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss)
* [2025-07-21, 01:22:00](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss) - [Open, Free, and Completely Ignored: The Strange Afterlife of Symbian](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss)
* [2025-07-20, 20:35:00](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss) - [Iran Seeks Three Cloud Providers To Power Its Government](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss)
* [2025-07-20, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss) - [Remote Access Trojan (RAT) Found in the AUR (Arch Linux User Repository)](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss)
* [2025-07-20, 15:49:00](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss) - [Intel Has Discontinued Clear Linux, Effective Immediately](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss)
* [2025-07-20, 12:47:34](https://news.ycombinator.com/item?id=44624702) - [Gitea Private, Fast, Reliable DevOps Platform](https://about.gitea.com/)
* [2025-07-20, 11:04:00](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss) - [The Latest Windows PCs Remember Everything](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss)
* [2025-07-20, 06:18:00](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss) - [Infographic: Every Microsoft Acquisition Since 1986](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss)
* [2025-07-20, 01:33:00](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss) - [Is Tor Trustworthy and Safe?](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss)
* [2025-07-19, 20:44:19](https://news.ycombinator.com/item?id=44619206) - [Don&apos;t animate height](https://www.granola.ai/blog/dont-animate-height)
* [2025-07-19, 20:33:00](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss) - [The Fascinating Science of Pain – and Why Everyone Feels it Differently](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss)
* [2025-07-19, 15:50:00](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss) - [FuguIta: OpenBSD Live CD - Desktop Environment Demo Version with XFCE v.4.20.0](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss)
* [2025-07-19, 11:08:00](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss) - [Most Warming This Century May Be Due To Air Pollution Cuts](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss)
* [2025-07-19, 07:48:15](https://news.ycombinator.com/item?id=44613438) - [Show HN: Compass CNC – Open-source handheld CNC router](https://www.compassrouter.com)
* [2025-07-19, 07:11:14](https://news.ycombinator.com/item?id=44613268) - [My favourite German word](https://vurt.org/articles/my-favourite-german-word/)
* [2025-07-19, 06:20:00](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss) - [Two Guys Hated Using Comcast, So They Built Their Own Fiber ISP](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss)
* [2025-07-19, 01:37:00](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss) - [Radio Hobbyists, Rejoice! Good News for LoRa &amp; Mesh](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss)
