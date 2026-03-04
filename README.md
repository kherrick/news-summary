# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Cybersecurity

* [NASA Repairs Artemis 2 Rocket, Continues Eyeing April Moon Launch](https://science.slashdot.org/story/26/03/03/2358209/nasa-repairs-artemis-2-rocket-continues-eyeing-april-moon-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [A Possible US Government iPhone-Hacking Toolkit Is Now In the Hands of Foreign Spies, Criminals](https://apple.slashdot.org/story/26/03/03/2049253/a-possible-us-government-iphone-hacking-toolkit-is-now-in-the-hands-of-foreign-spies-criminals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Motorola GrapheneOS devices will be bootloader unlockable/relockable](https://grapheneos.social/@GrapheneOS/116160393783585567)

* [AI-Generated Art Can&apos;t Be Copyrighted After Supreme Court Declines To Review the Rule](https://yro.slashdot.org/story/26/03/03/0545246/ai-generated-art-cant-be-copyrighted-after-supreme-court-declines-to-review-the-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cyber Threats and Exploits

* [Coruna: The Mysterious Journey of a Powerful iOS Exploit Kit](https://cloud.google.com/blog/topics/threat-intelligence/coruna-powerful-ios-exploit-kit)

* [Hacked Tehran Traffic Cameras Fed Israeli Intelligence Before Strike On Khamenei](https://tech.slashdot.org/story/26/03/03/0512224/hacked-tehran-traffic-cameras-fed-israeli-intelligence-before-strike-on-khamenei?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Hackers Expose the Massive Surveillance Stack Hiding Inside Your “Age Verification” Check](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss)

## Innovative Technologies and Research

* [A CPU that runs entirely on GPU](https://github.com/robertcprice/nCPU)

* [Better JIT for Postgres](https://github.com/vladich/pg_jitter)

* [Weave – A language aware merge algorithm based on entities](https://github.com/Ataraxy-Labs/weave)

* [I Put a Full JVM Inside a Browser Tab](https://bmarti44.substack.com/p/i-put-a-full-jvm-inside-a-browser)

## Public Policy and Corporate Actions

* [Trump Bans Anthropic AI From Federal Agencies While OpenAI Eager to Fill the Void](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss)

* [ChatGPT Uninstalls Surged By 295% After Pentagon Deal](https://yro.slashdot.org/story/26/03/03/0527220/chatgpt-uninstalls-surged-by-295-after-pentagon-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [California&apos;s Digital Age Assurance Act, and FOSS](https://runxiyu.org/comp/ab1043/)

## Environmental and Space Research

* [Cleaner Ship Fuel is Reducing Lightning in Key Shipping Lanes](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss)

* [Satellites Found a &apos;Brown Ribbon&apos; Near Africa – Now Scientists Are Sounding Alarms](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss)

* [The largest acidic geyser has been putting on quite a show](https://www.usgs.gov/observatories/yvo/news/echinus-geyser-back-action-now)

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

* [2026-03-04, 10:07:00](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss) - [Medical Journal the Lancet Blasts RFK Jr.’s Health Work as a Failure](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss)
* [2026-03-04, 10:00:00](https://entertainment.slashdot.org/story/26/03/04/0013218/game-of-thrones-movie-in-the-works?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Game of Thrones&apos; Movie In the Works](https://entertainment.slashdot.org/story/26/03/04/0013218/game-of-thrones-movie-in-the-works?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 08:54:08](https://lobste.rs/s/2ng9uk/rtl_wtf_read_web_like_right_left_readers_do) - [RTL: WTF: Read the web like Right-to-Left readers do](https://rtl.wtf/)
* [2026-03-04, 08:24:51](https://lobste.rs/s/ya5b5h/meta_add_guix_tag) - [Meta: Add `Guix` tag](https://lobste.rs/s/ya5b5h/meta_add_guix_tag)
* [2026-03-04, 07:25:24](https://news.ycombinator.com/item?id=47244291) - [RFC 9849. TLS Encrypted Client Hello](https://www.rfc-editor.org/rfc/rfc9849.html)
* [2026-03-04, 07:00:00](https://science.slashdot.org/story/26/03/03/2358209/nasa-repairs-artemis-2-rocket-continues-eyeing-april-moon-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Repairs Artemis 2 Rocket, Continues Eyeing April Moon Launch](https://science.slashdot.org/story/26/03/03/2358209/nasa-repairs-artemis-2-rocket-continues-eyeing-april-moon-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 06:17:10](https://news.ycombinator.com/item?id=47243804) - [Better JIT for Postgres](https://github.com/vladich/pg_jitter)
* [2026-03-04, 05:22:00](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss) - [&apos;Cancel ChatGPT&apos;: AI Boycott Surges After OpenAI-Pentagon Military Deal](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss)
* [2026-03-04, 05:00:37](https://news.ycombinator.com/item?id=47243272) - [Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/)
* [2026-03-04, 04:30:32](https://news.ycombinator.com/item?id=47243069) - [A CPU that runs entirely on GPU](https://github.com/robertcprice/nCPU)
* [2026-03-04, 04:25:20](https://news.ycombinator.com/item?id=47243036) - [Indefinite Book Club Hiatus](https://whatever.scalzi.com/2026/03/03/indefinite-book-club-hiatus/)
* [2026-03-04, 04:19:56](https://lobste.rs/s/ftnuxf/coruna_mysterious_journey_powerful_ios) - [Coruna: The Mysterious Journey of a Powerful iOS Exploit Kit](https://cloud.google.com/blog/topics/threat-intelligence/coruna-powerful-ios-exploit-kit)
* [2026-03-04, 03:49:04](https://lobste.rs/s/isuqoa/never_snooze_future) - [Never snooze a future](https://jacko.io/snooze.html)
* [2026-03-04, 03:32:02](https://lobste.rs/s/hz6vhv/california_s_digital_age_assurance_act) - [California&apos;s Digital Age Assurance Act, and FOSS](https://runxiyu.org/comp/ab1043/)
* [2026-03-04, 03:24:20](https://news.ycombinator.com/item?id=47242637) - [Speculative Speculative Decoding (SSD)](https://arxiv.org/abs/2603.03251)
* [2026-03-04, 03:00:00](https://apple.slashdot.org/story/26/03/03/2049253/a-possible-us-government-iphone-hacking-toolkit-is-now-in-the-hands-of-foreign-spies-criminals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Possible US Government iPhone-Hacking Toolkit Is Now In the Hands of Foreign Spies, Criminals](https://apple.slashdot.org/story/26/03/03/2049253/a-possible-us-government-iphone-hacking-toolkit-is-now-in-the-hands-of-foreign-spies-criminals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 02:34:06](https://news.ycombinator.com/item?id=47242277) - [Number Research Inc](https://numberresearch.xyz/)
* [2026-03-04, 02:23:01](https://news.ycombinator.com/item?id=47242193) - [Graphics Programming Resources](https://develop--gpvm-website.netlify.app/resources/)
* [2026-03-04, 01:52:21](https://news.ycombinator.com/item?id=47241976) - [Weave – A language aware merge algorithm based on entities](https://github.com/Ataraxy-Labs/weave)
* [2026-03-04, 01:31:05](https://news.ycombinator.com/item?id=47241817) - [TikTok will not introduce end-to-end encryption, saying it makes users less safe](https://www.bbc.com/news/articles/cly2m5e5ke4o)
* [2026-03-04, 01:27:06](https://news.ycombinator.com/item?id=47241788) - [The largest acidic geyser has been putting on quite a show](https://www.usgs.gov/observatories/yvo/news/echinus-geyser-back-action-now)
* [2026-03-04, 01:00:00](https://developers.slashdot.org/story/26/03/04/0039214/openai-is-developing-an-alternative-to-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Is Developing an Alternative To GitHub](https://developers.slashdot.org/story/26/03/04/0039214/openai-is-developing-an-alternative-to-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 00:58:31](https://news.ycombinator.com/item?id=47241551) - [Motorola GrapheneOS devices will be bootloader unlockable/relockable](https://grapheneos.social/@GrapheneOS/116160393783585567)
* [2026-03-04, 00:30:00](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss) - [Entry-Level PC Market To ‘Disappear’ By 2028 — Rising Memory Prices Pile More Strain On Consumer PC ](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss)
* [2026-03-03, 23:38:21](https://news.ycombinator.com/item?id=47240736) - [My spicy take on vibe coding for PMs](https://www.ddmckinnon.com/2026/02/11/my-%f0%9f%8c%b6-take-on-vibe-coding-for-pms/)
* [2026-03-03, 23:29:32](https://lobste.rs/s/hu6tos/markless_document_markup_standard) - [The Markless Document Markup Standard](https://shirakumo.org/docs/markless/)
* [2026-03-03, 23:00:00](https://tech.slashdot.org/story/26/03/03/2040230/google-chrome-is-switching-to-a-two-week-release-cycle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Chrome Is Switching To a Two-Week Release Cycle](https://tech.slashdot.org/story/26/03/03/2040230/google-chrome-is-switching-to-a-two-week-release-cycle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 22:31:14](https://lobste.rs/s/g6moku/four_months_ruby_central_moving_ruby) - [Four months of Ruby Central moving Ruby backward](https://andre.arko.net/2026/03/03/four-months-of-ruby-central-moving-ruby-backward/)
* [2026-03-03, 22:10:20](https://lobste.rs/s/1f56jd/what_if_code_wasn_t_text_document) - [What if code wasn&apos;t a text document?](https://joethephish.me/blog/visual-programming/)
* [2026-03-03, 22:00:00](https://tech.slashdot.org/story/26/03/03/1951222/libreoffice-says-its-ui-is-way-better-than-microsoft-offices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LibreOffice Says Its UI Is Way Better Than Microsoft Office&apos;s](https://tech.slashdot.org/story/26/03/03/1951222/libreoffice-says-its-ui-is-way-better-than-microsoft-offices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 21:53:54](https://lobste.rs/s/oe6l1z/interactive_intro_crdts) - [An Interactive Intro to CRDTs](https://jakelazaroff.com/words/an-interactive-intro-to-crdts/)
* [2026-03-03, 21:17:00](https://lobste.rs/s/tahkfr/yj_nearbyglasses_attempting_detect) - [yj_nearbyglasses: attempting to detect smart glasses nearby and warn you](https://github.com/yjeanrenaud/yj_nearbyglasses)
* [2026-03-03, 21:10:27](https://news.ycombinator.com/item?id=47239042) - [Voxile: A ray-traced game made in its own engine and programming language](https://elbowgreasegames.substack.com/p/voxray-games-pushes-major-update)
* [2026-03-03, 21:00:00](https://yro.slashdot.org/story/26/03/03/1926214/metas-ai-display-glasses-reportedly-share-intimate-videos-with-human-moderators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s AI Display Glasses Reportedly Share Intimate Videos With Human Moderators](https://yro.slashdot.org/story/26/03/03/1926214/metas-ai-display-glasses-reportedly-share-intimate-videos-with-human-moderators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 20:58:01](https://lobste.rs/s/teexox/don_knuth_s_claude_like_directed) - [Don Knuth&apos;s \&quot;Claude-like\&quot; directed Hamiltonian cycles decompositions](https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf)
* [2026-03-03, 20:34:58](https://lobste.rs/s/5cuaiv/anthropic_is_untrustworthy) - [Anthropic is untrustworthy](https://anthropic.ml/)
* [2026-03-03, 20:00:27](https://lobste.rs/s/2gwqlh/rust_zero_cost_abstractions_vs_simd) - [Rust zero-cost abstractions vs. SIMD](https://turbopuffer.com/blog/zero-cost)
* [2026-03-03, 20:00:00](https://yro.slashdot.org/story/26/03/03/1918247/openai-amends-pentagon-deal-as-sam-altman-admits-it-looks-sloppy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Amends Pentagon Deal As Sam Altman Admits It Looks &apos;Sloppy&apos;](https://yro.slashdot.org/story/26/03/03/1918247/openai-amends-pentagon-deal-as-sam-altman-admits-it-looks-sloppy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 19:54:00](https://soylentnews.org/article.pl?sid=26/03/02/2022221&amp;from=rss) - [Across Cultures, People Combine Reference Frames to Orient Themselves](https://soylentnews.org/article.pl?sid=26/03/02/2022221&amp;from=rss)
* [2026-03-03, 19:33:30](https://lobste.rs/s/tznewb/nobody_gets_promoted_for_simplicity) - [Nobody Gets Promoted for Simplicity](https://terriblesoftware.org/2026/03/03/nobody-gets-promoted-for-simplicity/)
* [2026-03-03, 19:22:32](https://news.ycombinator.com/item?id=47237460) - [An Interactive Intro to CRDTs (2023)](https://jakelazaroff.com/words/an-interactive-intro-to-crdts/)
* [2026-03-03, 19:00:00](https://news.slashdot.org/story/26/03/03/1825201/accenture-acquires-ookla-downdetector-as-part-of-12-billion-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Accenture Acquires Ookla, Downdetector As Part of $1.2 Billion Deal](https://news.slashdot.org/story/26/03/03/1825201/accenture-acquires-ookla-downdetector-as-part-of-12-billion-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 18:54:06](https://news.ycombinator.com/item?id=47236958) - [Intel&apos;s make-or-break 18A process node debuts for data center with 288-core Xeon](https://www.tomshardware.com/pc-components/cpus/intels-make-or-break-18a-process-node-debuts-for-data-center-with-288-core-xeon-6-cpu-multi-chip-monster-sports-12-channels-of-ddr5-8000-foveros-direct-3d-packaging-tech)
* [2026-03-03, 18:34:32](https://lobste.rs/s/bry484/deprecate_confusing_apis_like_os_path) - [Deprecate confusing APIs like “os.path.commonprefix()”](https://sethmlarson.dev/deprecate-confusing-apis-like-os-path-commonprefix)
* [2026-03-03, 18:07:49](https://lobste.rs/s/uclhr1/hoot_0_8_0_released_scheme_wasm) - [Hoot 0.8.0 released! - Scheme in WASM](https://spritely.institute/news/hoot-0-8-0-released.html)
* [2026-03-03, 18:00:00](https://yro.slashdot.org/story/26/03/03/175221/indias-top-court-angry-after-junior-judge-cites-fake-ai-generated-orders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India&apos;s Top Court Angry After Junior Judge Cites Fake AI-Generated Orders](https://yro.slashdot.org/story/26/03/03/175221/indias-top-court-angry-after-junior-judge-cites-fake-ai-generated-orders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 17:57:33](https://news.ycombinator.com/item?id=47236169) - [GPT‑5.3 Instant](https://openai.com/index/gpt-5-3-instant/)
* [2026-03-03, 17:00:00](https://apple.slashdot.org/story/26/03/03/1635208/apple-launches-new-m5-chips-macbook-pro-and-first-new-monitors-in-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Launches New M5 Chips, MacBook Pro, and First New Monitors In Years](https://apple.slashdot.org/story/26/03/03/1635208/apple-launches-new-m5-chips-macbook-pro-and-first-new-monitors-in-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 16:34:53](https://news.ycombinator.com/item?id=47234917) - [When AI writes the software, who verifies it?](https://leodemoura.github.io/blog/2026/02/28/when-ai-writes-the-worlds-software.html)
* [2026-03-03, 16:08:22](https://lobste.rs/s/r8kjli/claude_is_electron_app_because_we_ve_lost) - [Claude is an Electron App because we’ve lost native](https://tonsky.me/blog/fall-of-native/)
* [2026-03-03, 16:00:00](https://yro.slashdot.org/story/26/03/03/0545246/ai-generated-art-cant-be-copyrighted-after-supreme-court-declines-to-review-the-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI-Generated Art Can&apos;t Be Copyrighted After Supreme Court Declines To Review the Rule](https://yro.slashdot.org/story/26/03/03/0545246/ai-generated-art-cant-be-copyrighted-after-supreme-court-declines-to-review-the-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 15:58:52](https://lobste.rs/s/zv0pyh/when_ai_writes_world_s_software_who) - [When AI Writes the World&apos;s Software, Who Verifies It?](https://leodemoura.github.io/blog/2026/02/28/when-ai-writes-the-worlds-software.html)
* [2026-03-03, 15:13:00](https://soylentnews.org/article.pl?sid=26/03/02/2020204&amp;from=rss) - [Pathways to a Fair Technological Future](https://soylentnews.org/article.pl?sid=26/03/02/2020204&amp;from=rss)
* [2026-03-03, 15:06:27](https://lobste.rs/s/boot5m/lilaq_advanced_data_visualization_typst) - [Lilaq: Advanced data visualization in Typst](https://lilaq.org/)
* [2026-03-03, 15:00:00](https://yro.slashdot.org/story/26/03/03/0527220/chatgpt-uninstalls-surged-by-295-after-pentagon-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Uninstalls Surged By 295% After Pentagon Deal](https://yro.slashdot.org/story/26/03/03/0527220/chatgpt-uninstalls-surged-by-295-after-pentagon-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 14:30:58](https://news.ycombinator.com/item?id=47232903) - [Launch HN: Cekura (YC F24) – Testing and monitoring for voice and chat AI agents](https://news.ycombinator.com/item?id=47232903)
* [2026-03-03, 14:09:45](https://lobste.rs/s/of77cp/us_supreme_court_declines_hear_dispute) - [US Supreme Court declines to hear dispute over copyrights for AI-generated material](https://www.reuters.com/legal/government/us-supreme-court-declines-hear-dispute-over-copyrights-ai-generated-material-2026-03-02/)
* [2026-03-03, 14:02:06](https://news.ycombinator.com/item?id=47232453) - [MacBook Pro with M5 Pro and M5 Max](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)
* [2026-03-03, 14:00:00](https://tech.slashdot.org/story/26/03/03/0512224/hacked-tehran-traffic-cameras-fed-israeli-intelligence-before-strike-on-khamenei?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hacked Tehran Traffic Cameras Fed Israeli Intelligence Before Strike On Khamenei](https://tech.slashdot.org/story/26/03/03/0512224/hacked-tehran-traffic-cameras-fed-israeli-intelligence-before-strike-on-khamenei?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 13:07:38](https://lobste.rs/s/ooupsr/arm_s_cortex_x925_reaching_desktop) - [Arm&apos;s Cortex X925: Reaching Desktop Performance](https://chipsandcheese.com/p/arms-cortex-x925-reaching-desktop)
* [2026-03-03, 13:00:00](https://tech.slashdot.org/story/26/03/03/0423206/amazon-cloud-units-data-centers-in-uae-bahrain-damaged-in-drone-strikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Cloud Unit&apos;s Data Centers In UAE, Bahrain Damaged In Drone Strikes](https://tech.slashdot.org/story/26/03/03/0423206/amazon-cloud-units-data-centers-in-uae-bahrain-damaged-in-drone-strikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 12:05:06](https://lobste.rs/s/6h04uj/announcing_npmx_fast_modern_browser_for) - [Announcing npmx: a fast, modern browser for the npm registry](https://npmx.dev/blog/alpha-release)
* [2026-03-03, 10:57:42](https://news.ycombinator.com/item?id=47230710) - [Claude&apos;s Cycles [pdf]](https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf)
* [2026-03-03, 10:28:00](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss) - [Satellites Found a &apos;Brown Ribbon&apos; Near Africa – Now Scientists Are Sounding Alarms](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss)
* [2026-03-03, 05:43:00](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss) - [Datacenters in Space Are a Terrible, Horrible, No Good Idea.](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss)
* [2026-03-03, 04:49:32](https://lobste.rs/s/0pyshw/i_put_full_jvm_inside_browser_tab) - [I Put a Full JVM Inside a Browser Tab](https://bmarti44.substack.com/p/i-put-a-full-jvm-inside-a-browser)
* [2026-03-03, 01:38:24](https://lobste.rs/s/og7ihk/evolving_typst) - [Evolving Typst](https://laurmaedje.github.io/posts/evolving-typst/)
* [2026-03-03, 00:58:00](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss) - [Cleaner Ship Fuel is Reducing Lightning in Key Shipping Lanes](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss)
* [2026-03-02, 20:58:48](https://lobste.rs/s/3cq649/two_kinds_error) - [The two kinds of error](https://evanhahn.com/the-two-kinds-of-error/)
* [2026-03-02, 20:12:00](https://soylentnews.org/article.pl?sid=26/03/01/0744215&amp;from=rss) - [Hail Protection Using Solar Panels](https://soylentnews.org/article.pl?sid=26/03/01/0744215&amp;from=rss)
* [2026-03-02, 15:23:00](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss) - [Whoops: US Military Laser Strike Takes Down CBP Drone Near Mexican Border](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss)
* [2026-03-02, 10:41:00](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss) - [Trump Bans Anthropic AI From Federal Agencies While OpenAI Eager to Fill the Void](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss)
* [2026-03-02, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss) - [Researchers Discover Massive Wi-Fi Vulnerability Affecting Multiple Access Points](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss)
* [2026-03-02, 01:11:00](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss) - [Removable Batteries in Mobile Phones May be Making a Comeback](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss)
* [2026-03-01, 21:47:51](https://news.ycombinator.com/item?id=47211034) - [Reverse-Engineering the Wetware: Spiking Networks and the End of Matrix Math](https://metaduck.com/reverse-engineering-the-wetware-spiking-networks-td-errors-and-the-end-of-matrix-math/)
* [2026-03-01, 20:22:00](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss) - [Neanderthals Seemed To Have A Thing For Modern Human Women](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss)
* [2026-03-01, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss) - [US States Are Getting Tougher on Drivers Who Refuse to Move Over](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss)
* [2026-03-01, 12:54:30](https://news.ycombinator.com/item?id=47206275) - [Circle Games (2019)](https://srconstantin.wordpress.com/2019/06/06/circle-games/)
* [2026-03-01, 11:02:55](https://news.ycombinator.com/item?id=47205650) - [Show HN: Rust compiler in PHP emitting x86-64 executables](https://github.com/mrconter1/rustc-php)
* [2026-03-01, 10:56:17](https://news.ycombinator.com/item?id=47205603) - [Welcoming Elizabeth Barron as the New Executive Director of the PHP Foundation](https://thephp.foundation/blog/2026/02/27/welcoming-elizabeth-barron-new-executive-director/)
* [2026-03-01, 10:52:00](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss) - [Human Brain Cells on a Chip Learned to Play Doom in a Week](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss)
* [2026-03-01, 09:09:04](https://news.ycombinator.com/item?id=47205031) - [On the Design of Programming Languages (1974) [pdf]](https://web.cs.ucdavis.edu/~su/teaching/ecs240-w17/readings/PLHistoryGoodDesign.PDF)
* [2026-03-01, 06:25:10](https://news.ycombinator.com/item?id=47204203) - [Mount Mayhem at Netflix: Scaling Containers on Modern CPUs](https://netflixtechblog.com/mount-mayhem-at-netflix-scaling-containers-on-modern-cpus-f3b09b68beac)
* [2026-03-01, 06:10:00](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss) - [Block Lays Off 40% Of Workforce As It Goes All-In On AI Tools](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss)
* [2026-03-01, 05:36:58](https://news.ycombinator.com/item?id=47204027) - [Textadept](https://orbitalquark.github.io/textadept/)
* [2026-03-01, 01:27:00](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss) - [The US Military Just Made History With A C-17 Plane &amp; A Nuclear Reactor](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss)
* [2026-02-28, 23:24:57](https://news.ycombinator.com/item?id=47201598) - [You can use newline characters in URLs](https://lemire.me/blog/2026/02/28/you-can-use-newline-characters-in-urls/)
* [2026-02-28, 20:41:00](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss) - [OpenAI Secures Record $110 Billion Funding Round Backed By Amazon, Nvidia, and SoftBank](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss)
* [2026-02-28, 16:28:54](https://news.ycombinator.com/item?id=47197218) - [Show HN: Stacked Game of Life](https://stacked-game-of-life.koenvangilst.nl/)
* [2026-02-28, 15:59:00](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss) - [OsmAnd&apos;s Faster Offline Navigation](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss)
* [2026-02-28, 11:11:00](https://soylentnews.org/article.pl?sid=26/02/27/2232251&amp;from=rss) - [Why LLM-Generated Passwords Are Dangerously Insecure](https://soylentnews.org/article.pl?sid=26/02/27/2232251&amp;from=rss)
* [2026-02-28, 06:30:00](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss) - [A Hacker Used Claude to Breach Mexico&apos;s Government and Steal 150GB of Data](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss)
* [2026-02-28, 01:40:00](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss) - [Hackers Expose the Massive Surveillance Stack Hiding Inside Your “Age Verification” Check](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss)
