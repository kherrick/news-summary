# [News Summary](https://kherrick.github.io/news-summary/)

## Scientific and Technological Advancements

* [Superagers' 'Secret Ingredient' May Be the Growth of New Brain Cells](https://science.slashdot.org/story/26/03/03/048214/superagers-secret-ingredient-may-be-the-growth-of-new-brain-cells?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A study reveals that the secret to longer cognitive health among 'superagers' might be linked to the growth of new brain cells.

* [Physics Girl: Super-Kamiokande – Imaging the sun by detecting neutrinos [video]](https://www.youtube.com/watch?v=B3m3AMRlYfc) - The fascinating process of using the Super-Kamiokande to observe and study the sun through neutrino detection is explained in this engaging video.

## Innovations in AI and Machine Learning

* [Voxile: A ray-traced game made in its own engine and programming language](https://elbowgreasegames.substack.com/p/voxray-games-pushes-major-update) - Introducing a groundbreaking ray-traced game developed in its proprietary engine and programming language.

* [TorchLean: Formalizing Neural Networks in Lean](https://leandojo.org/torchlean.html) - An exploration of TorchLean and its approach to formalizing neural networks using Lean.

## Privacy and Security Concerns

* [Meta's AI Display Glasses Reportedly Share Intimate Videos With Human Moderators](https://yro.slashdot.org/story/26/03/03/1926214/metas-ai-display-glasses-reportedly-share-intimate-videos-with-human-moderators?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Meta's AI-powered smart glasses may compromise privacy by sharing personal videos with human moderators.

* [Hacked Tehran Traffic Cameras Fed Israeli Intelligence Before Strike On Khamenei](https://tech.slashdot.org/story/26/03/03/0512224/hacked-tehran-traffic-cameras-fed-israeli-intelligence-before-strike-on-khamenei?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Allegations have emerged that hacked Tehran traffic cameras were utilized in intelligence operations prior to an attack on Iran's Supreme Leader.

## Tech Industry Updates

* [Apple Launches New M5 Chips, MacBook Pro, and First New Monitors In Years](https://apple.slashdot.org/story/26/03/03/1635208/apple-launches-new-m5-chips-macbook-pro-and-first-new-monitors-in-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Apple releases a new generation of M5 chips, updated MacBook Pro, and innovative monitors.

* [Lenovo's New ThinkPads Score 10/10 for Repairability](https://www.ifixit.com/News/115827/new-thinkpads-score-perfect-10-repairability) - The new ThinkPads earn top marks for repairability, setting new standards in laptop design.

## Environmental and Global Developments

* [Satellites Found a 'Brown Ribbon' Near Africa – Now Scientists Are Sounding Alarms](https://soylentnews.org/article.pl?sid=26/03/02/2018219&from=rss) - A mysterious brown ribbon discovered near Africa raises environmental concerns and prompts scientific investigations.

* [Cleaner Ship Fuel is Reducing Lightning in Key Shipping Lanes](https://soylentnews.org/article.pl?sid=26/03/02/1659243&from=rss) - New research reveals the environmental impact of cleaner ship fuel on lightning patterns in significant marine routes.

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

* [2026-03-04, 01:52:21](https://news.ycombinator.com/item?id=47241976) - [Weave – A language aware merge algorithm based on entities](https://github.com/Ataraxy-Labs/weave)
* [2026-03-04, 01:42:43](https://news.ycombinator.com/item?id=47241910) - [Show HN: AgentBus – Centralized AI Agent-to-Agent Messaging via REST API](https://agentbus.org/)
* [2026-03-04, 01:30:43](https://news.ycombinator.com/item?id=47241813) - [Marcus AI Claims Dataset](https://github.com/davegoldblatt/marcus-claims-dataset)
* [2026-03-04, 01:27:06](https://news.ycombinator.com/item?id=47241788) - [The largest acidic geyser has been putting on quite a show](https://www.usgs.gov/observatories/yvo/news/echinus-geyser-back-action-now)
* [2026-03-04, 00:58:31](https://news.ycombinator.com/item?id=47241551) - [Motorola GrapheneOS devices will be bootloader unlockable/relockable](https://grapheneos.social/@GrapheneOS/116160393783585567)
* [2026-03-04, 00:56:59](https://news.ycombinator.com/item?id=47241536) - [You can&apos;t use a code editor when you&apos;re under 18 now?](https://mastodon.online/@marekfort/116164253291515471)
* [2026-03-04, 00:30:00](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss) - [Entry-Level PC Market To ‘Disappear’ By 2028 — Rising Memory Prices Pile More Strain On Consumer PC ](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss)
* [2026-03-03, 23:38:21](https://news.ycombinator.com/item?id=47240736) - [My take on vibe coding for PMs](https://www.ddmckinnon.com/2026/02/11/my-%f0%9f%8c%b6-take-on-vibe-coding-for-pms/)
* [2026-03-03, 23:34:05](https://news.ycombinator.com/item?id=47240694) - [Lenovo&apos;s New ThinkPads Score 10/10 for Repairability](https://www.ifixit.com/News/115827/new-thinkpads-score-perfect-10-repairability)
* [2026-03-03, 23:29:32](https://lobste.rs/s/hu6tos/markless_document_markup_standard) - [The Markless Document Markup Standard](https://shirakumo.org/docs/markless/)
* [2026-03-03, 23:17:24](https://news.ycombinator.com/item?id=47240504) - [130k Lines of Formal Topology: Simple and Cheap Autoformalization for Everyone?](https://arxiv.org/abs/2601.03298)
* [2026-03-03, 23:00:00](https://tech.slashdot.org/story/26/03/03/2040230/google-chrome-is-switching-to-a-two-week-release-cycle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Chrome Is Switching To a Two-Week Release Cycle](https://tech.slashdot.org/story/26/03/03/2040230/google-chrome-is-switching-to-a-two-week-release-cycle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 22:31:14](https://lobste.rs/s/g6moku/four_months_ruby_central_moving_ruby) - [Four months of Ruby Central moving Ruby backward](https://andre.arko.net/2026/03/03/four-months-of-ruby-central-moving-ruby-backward/)
* [2026-03-03, 22:00:00](https://tech.slashdot.org/story/26/03/03/1951222/libreoffice-says-its-ui-is-way-better-than-microsoft-offices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LibreOffice Says Its UI Is Way Better Than Microsoft Office&apos;s](https://tech.slashdot.org/story/26/03/03/1951222/libreoffice-says-its-ui-is-way-better-than-microsoft-offices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 21:53:54](https://lobste.rs/s/oe6l1z/interactive_intro_crdts) - [An Interactive Intro to CRDTs](https://jakelazaroff.com/words/an-interactive-intro-to-crdts/)
* [2026-03-03, 21:17:00](https://lobste.rs/s/tahkfr/yj_nearbyglasses_attempting_detect) - [yj_nearbyglasses: attempting to detect smart glasses nearby and warn you](https://github.com/yjeanrenaud/yj_nearbyglasses)
* [2026-03-03, 21:10:27](https://news.ycombinator.com/item?id=47239042) - [Voxile: A ray-traced game made in its own engine and programming language](https://elbowgreasegames.substack.com/p/voxray-games-pushes-major-update)
* [2026-03-03, 21:00:00](https://yro.slashdot.org/story/26/03/03/1926214/metas-ai-display-glasses-reportedly-share-intimate-videos-with-human-moderators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s AI Display Glasses Reportedly Share Intimate Videos With Human Moderators](https://yro.slashdot.org/story/26/03/03/1926214/metas-ai-display-glasses-reportedly-share-intimate-videos-with-human-moderators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 20:58:01](https://lobste.rs/s/teexox/don_knuth_s_claude_like_directed) - [Don Knuth&apos;s \&quot;Claude-like\&quot; directed Hamiltonian cycles decompositions](https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf)
* [2026-03-03, 20:34:58](https://lobste.rs/s/5cuaiv/anthropic_is_untrustworthy) - [Anthropic is untrustworthy](https://anthropic.ml/)
* [2026-03-03, 20:14:18](https://news.ycombinator.com/item?id=47238279) - [We&apos;ve freed Cookie&apos;s Bustle from copyright hell](https://gamehistory.org/cookies-bustle/)
* [2026-03-03, 20:00:27](https://lobste.rs/s/2gwqlh/rust_zero_cost_abstractions_vs_simd) - [Rust zero-cost abstractions vs. SIMD](https://turbopuffer.com/blog/zero-cost)
* [2026-03-03, 20:00:00](https://yro.slashdot.org/story/26/03/03/1918247/openai-amends-pentagon-deal-as-sam-altman-admits-it-looks-sloppy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Amends Pentagon Deal As Sam Altman Admits It Looks &apos;Sloppy&apos;](https://yro.slashdot.org/story/26/03/03/1918247/openai-amends-pentagon-deal-as-sam-altman-admits-it-looks-sloppy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 19:54:00](https://soylentnews.org/article.pl?sid=26/03/02/2022221&amp;from=rss) - [Across Cultures, People Combine Reference Frames to Orient Themselves](https://soylentnews.org/article.pl?sid=26/03/02/2022221&amp;from=rss)
* [2026-03-03, 19:34:37](https://news.ycombinator.com/item?id=47237692) - [Possible US Government iPhone-Hacking Toolkit in foreign spy and criminal hands](https://www.wired.com/story/coruna-iphone-hacking-toolkit-us-government/)
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
* [2026-03-03, 14:42:30](https://news.ycombinator.com/item?id=47233110) - [Physics Girl: Super-Kamiokande – Imaging the sun by detecting neutrinos [video]](https://www.youtube.com/watch?v=B3m3AMRlYfc)
* [2026-03-03, 14:30:58](https://news.ycombinator.com/item?id=47232903) - [Launch HN: Cekura (YC F24) – Testing and monitoring for voice and chat AI agents](https://news.ycombinator.com/item?id=47232903)
* [2026-03-03, 14:22:25](https://news.ycombinator.com/item?id=47232768) - [I&apos;m reluctant to verify my identity or age for any online services](https://neilzone.co.uk/2026/03/im-struggling-to-think-of-any-online-services-for-which-id-be-willing-to-verify-my-identity-or-age/)
* [2026-03-03, 14:19:14](https://news.ycombinator.com/item?id=47232727) - [Don&apos;t become an engineering manager](https://newsletter.manager.dev/p/dont-become-an-engineering-manager)
* [2026-03-03, 14:09:45](https://lobste.rs/s/of77cp/us_supreme_court_declines_hear_dispute) - [US Supreme Court declines to hear dispute over copyrights for AI-generated material](https://www.reuters.com/legal/government/us-supreme-court-declines-hear-dispute-over-copyrights-ai-generated-material-2026-03-02/)
* [2026-03-03, 14:04:56](https://news.ycombinator.com/item?id=47232502) - [MacBook Air with M5](https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-macbook-air-with-m5/)
* [2026-03-03, 14:02:06](https://news.ycombinator.com/item?id=47232453) - [MacBook Pro with M5 Pro and M5 Max](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)
* [2026-03-03, 14:00:00](https://tech.slashdot.org/story/26/03/03/0512224/hacked-tehran-traffic-cameras-fed-israeli-intelligence-before-strike-on-khamenei?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hacked Tehran Traffic Cameras Fed Israeli Intelligence Before Strike On Khamenei](https://tech.slashdot.org/story/26/03/03/0512224/hacked-tehran-traffic-cameras-fed-israeli-intelligence-before-strike-on-khamenei?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 13:07:38](https://lobste.rs/s/ooupsr/arm_s_cortex_x925_reaching_desktop) - [Arm&apos;s Cortex X925: Reaching Desktop Performance](https://chipsandcheese.com/p/arms-cortex-x925-reaching-desktop)
* [2026-03-03, 13:00:00](https://tech.slashdot.org/story/26/03/03/0423206/amazon-cloud-units-data-centers-in-uae-bahrain-damaged-in-drone-strikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Cloud Unit&apos;s Data Centers In UAE, Bahrain Damaged In Drone Strikes](https://tech.slashdot.org/story/26/03/03/0423206/amazon-cloud-units-data-centers-in-uae-bahrain-damaged-in-drone-strikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 12:05:06](https://lobste.rs/s/6h04uj/announcing_npmx_fast_modern_browser_for) - [Announcing npmx: a fast, modern browser for the npm registry](https://npmx.dev/blog/alpha-release)
* [2026-03-03, 10:57:42](https://news.ycombinator.com/item?id=47230710) - [Claude&apos;s Cycles [pdf]](https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf)
* [2026-03-03, 10:56:52](https://news.ycombinator.com/item?id=47230704) - [The Xkcd thing, now interactive](https://editor.p5js.org/isohedral/full/vJa5RiZWs)
* [2026-03-03, 10:28:00](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss) - [Satellites Found a &apos;Brown Ribbon&apos; Near Africa – Now Scientists Are Sounding Alarms](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss)
* [2026-03-03, 10:21:16](https://lobste.rs/s/8tjldu/dos_memory_management) - [DOS Memory Management](https://www.os2museum.com/wp/dos-memory-management/)
* [2026-03-03, 10:00:00](https://hardware.slashdot.org/story/26/03/03/0439237/the-19th-century-silent-film-that-first-captured-a-robot-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The 19th Century Silent Film That First Captured a Robot Attack](https://hardware.slashdot.org/story/26/03/03/0439237/the-19th-century-silent-film-that-first-captured-a-robot-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 08:31:13](https://lobste.rs/s/ifhrnb/webhaptics_haptic_feedback_for_mobile) - [WebHaptics – Haptic feedback for the mobile web](https://haptics.lochie.me/)
* [2026-03-03, 07:00:00](https://science.slashdot.org/story/26/03/03/048214/superagers-secret-ingredient-may-be-the-growth-of-new-brain-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Superagers&apos; &apos;Secret Ingredient&apos; May Be the Growth of New Brain Cells](https://science.slashdot.org/story/26/03/03/048214/superagers-secret-ingredient-may-be-the-growth-of-new-brain-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 05:43:00](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss) - [Datacenters in Space Are a Terrible, Horrible, No Good Idea.](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss)
* [2026-03-03, 04:49:32](https://lobste.rs/s/0pyshw/i_put_full_jvm_inside_browser_tab) - [I Put a Full JVM Inside a Browser Tab](https://bmarti44.substack.com/p/i-put-a-full-jvm-inside-a-browser)
* [2026-03-03, 03:00:00](https://news.slashdot.org/story/26/03/02/2210232/iowa-county-rolls-out-extensive-zoning-rules-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iowa County Rolls Out Extensive Zoning Rules For Data Centers](https://news.slashdot.org/story/26/03/02/2210232/iowa-county-rolls-out-extensive-zoning-rules-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 01:38:24](https://lobste.rs/s/og7ihk/evolving_typst) - [Evolving Typst](https://laurmaedje.github.io/posts/evolving-typst/)
* [2026-03-03, 01:00:00](https://yro.slashdot.org/story/26/03/02/2151248/british-columbia-to-end-time-changes-adopt-year-round-daylight-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [British Columbia To End Time Changes, Adopt Year-Round Daylight Time](https://yro.slashdot.org/story/26/03/02/2151248/british-columbia-to-end-time-changes-adopt-year-round-daylight-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 00:58:00](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss) - [Cleaner Ship Fuel is Reducing Lightning in Key Shipping Lanes](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss)
* [2026-03-02, 20:58:48](https://lobste.rs/s/3cq649/two_kinds_error) - [The two kinds of error](https://evanhahn.com/the-two-kinds-of-error/)
* [2026-03-02, 20:12:00](https://soylentnews.org/article.pl?sid=26/03/01/0744215&amp;from=rss) - [Hail Protection Using Solar Panels](https://soylentnews.org/article.pl?sid=26/03/01/0744215&amp;from=rss)
* [2026-03-02, 18:14:02](https://lobste.rs/s/bvkanl/quantifying_swiss_marriage_tax) - [Quantifying the Swiss marriage tax](https://gendx.dev/blog/2026/03/02/swiss-marriage-tax.html)
* [2026-03-02, 15:24:03](https://lobste.rs/s/txfaym/gram_1_0_released) - [Gram 1.0 released](https://gram.liten.app/posts/first-release/)
* [2026-03-02, 15:23:00](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss) - [Whoops: US Military Laser Strike Takes Down CBP Drone Near Mexican Border](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss)
* [2026-03-02, 10:41:00](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss) - [Trump Bans Anthropic AI From Federal Agencies While OpenAI Eager to Fill the Void](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss)
* [2026-03-02, 08:16:47](https://lobste.rs/s/awwhqz/motorola_s_new_partnership_with) - [Motorola&apos;s new partnership with GrapheneOS](https://motorolanews.com/motorola-three-new-b2b-solutions-at-mwc-2026/)
* [2026-03-02, 08:12:13](https://lobste.rs/s/yyqowj/gram_zed_fork_without_all_ai) - [GRAM: A Zed fork without all the AI](https://gram.liten.app/)
* [2026-03-02, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss) - [Researchers Discover Massive Wi-Fi Vulnerability Affecting Multiple Access Points](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss)
* [2026-03-02, 01:11:00](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss) - [Removable Batteries in Mobile Phones May be Making a Comeback](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss)
* [2026-03-01, 20:22:00](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss) - [Neanderthals Seemed To Have A Thing For Modern Human Women](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss)
* [2026-03-01, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss) - [US States Are Getting Tougher on Drivers Who Refuse to Move Over](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss)
* [2026-03-01, 10:52:00](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss) - [Human Brain Cells on a Chip Learned to Play Doom in a Week](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss)
* [2026-03-01, 08:15:27](https://news.ycombinator.com/item?id=47204754) - [What’s in a name? (2014)](https://sailsandcommas.com/2014/02/03/whats-in-a-name/)
* [2026-03-01, 06:10:00](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss) - [Block Lays Off 40% Of Workforce As It Goes All-In On AI Tools](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss)
* [2026-03-01, 05:36:58](https://news.ycombinator.com/item?id=47204027) - [Textadept](https://orbitalquark.github.io/textadept/)
* [2026-03-01, 03:03:46](https://news.ycombinator.com/item?id=47203219) - [TorchLean: Formalizing Neural Networks in Lean](https://leandojo.org/torchlean.html)
* [2026-03-01, 01:27:00](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss) - [The US Military Just Made History With A C-17 Plane &amp; A Nuclear Reactor](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss)
* [2026-02-28, 23:24:57](https://news.ycombinator.com/item?id=47201598) - [You can use newline characters in URLs](https://lemire.me/blog/2026/02/28/you-can-use-newline-characters-in-urls/)
* [2026-02-28, 20:41:00](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss) - [OpenAI Secures Record $110 Billion Funding Round Backed By Amazon, Nvidia, and SoftBank](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss)
* [2026-02-28, 15:59:00](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss) - [OsmAnd&apos;s Faster Offline Navigation](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss)
* [2026-02-28, 11:11:00](https://soylentnews.org/article.pl?sid=26/02/27/2232251&amp;from=rss) - [Why LLM-Generated Passwords Are Dangerously Insecure](https://soylentnews.org/article.pl?sid=26/02/27/2232251&amp;from=rss)
* [2026-02-28, 06:30:00](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss) - [A Hacker Used Claude to Breach Mexico&apos;s Government and Steal 150GB of Data](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss)
* [2026-02-28, 06:12:10](https://news.ycombinator.com/item?id=47191114) - [Time, Space, and Life as We Know It (2017)](https://raganwald.com/2017/01/12/time-space-life-as-we-know-it.html)
* [2026-02-28, 05:18:22](https://news.ycombinator.com/item?id=47190782) - [Disable Your SSH access accidentally with scp](https://sny.sh/hypha/blog/scp)
* [2026-02-28, 01:40:00](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss) - [Hackers Expose the Massive Surveillance Stack Hiding Inside Your “Age Verification” Check](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss)
