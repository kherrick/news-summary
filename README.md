# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [MicroUI – A tiny, portable, immediate-mode UI library written in ANSI C](https://github.com/rxi/microui) ([comments](https://news.ycombinator.com/item?id=48569205))

* [Show HN: I built 184 free browser tools – PDF, image, dev, AI tasks, no upload](https://brevio.pro) ([comments](https://news.ycombinator.com/item?id=48568023))

* [RFC 10008: The new HTTP Query Method](https://www.rfc-editor.org/info/rfc10008/) ([comments](https://news.ycombinator.com/item?id=48568502))

* [AI and Brain-Computer Interface Allow Speechless ALS Patient To Work a Full-Time Job](https://science.slashdot.org/story/26/06/16/2342243/ai-and-brain-computer-interface-allow-speechless-als-patient-to-work-a-full-time-job?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48566832))

* [GLM-5.2 is the new leading open weights model on Artificial Analysis](https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index) ([comments](https://news.ycombinator.com/item?id=48567759))

## Cybersecurity and Privacy

* [A 27-Year-Old Authentication Bypass in OpenBSD's PPP Stack](https://blog.argus-systems.ai/blog/openbsd-pap-27-year-auth-bypass.html) ([comments](https://lobste.rs/s/suaa0r/27_year_old_authentication_bypass))

* [“Atomic Arch”: Nearly 900 AUR Packages Backdoored with an Infostealer and eBPF Rootkit](https://soylentnews.org/article.pl?sid=26/06/13/1424211&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/06/13/1424211&amp;from=rss))

* [Humiliating IIS servers for fun and jail time](https://mll.sh/humiliating-iis-servers-for-fun-and-jail-time/) ([comments](https://news.ycombinator.com/item?id=48563394))

* [Making HTTP requests from a container that has no curl, using bash /dev/tcp](https://mareksuppa.com/til/bash-dev-tcp-http-without-curl/) ([comments](https://lobste.rs/s/6qwblq/making_http_requests_from_container_has))

## Open Source and Development

* [Color picking Oklch for mortals](https://hugodaniel.com/posts/color-picking-oklch/) ([comments](https://lobste.rs/s/hnoijy/color_picking_oklch_for_mortals))

* [Making GHC upgrades easy](https://blog.haskell.org/making-ghc-upgrades-easy/) ([comments](https://lobste.rs/s/njidax/making_ghc_upgrades_easy))

* [Build your project Zig-style](https://fnordig.de/2026/06/16/build-your-project-zig-style/) ([comments](https://lobste.rs/s/a1nops/build_your_project_zig_style))

## Science and Miscellaneous

* [I Could've Rickrolled the Entire FIFA World Cup. All I Needed Was My ID](https://bobdahacker.com/blog/fifa-hack) ([comments](https://lobste.rs/s/z5wfi9/i_could_ve_rickrolled_entire_fifa_world))

* [Scientists Gave an Octopus a Mirror. Here’s What Happened Next](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss))

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

* [2026-06-17, 13:05:03](https://news.ycombinator.com/item?id=48569954) - [Want your images back? Sure... That&apos;ll be $5!](https://www.lutr.dev/want-your-images-back-sure-that-ll-be-5-dollars)
* [2026-06-17, 12:20:21](https://lobste.rs/s/nh9q9g/r_core_team_wins_rousseeuw_prize_for) - [R Core team wins Rousseeuw Prize for Statistics 2026](https://rousseeuwprize.org/2026)
* [2026-06-17, 12:11:27](https://news.ycombinator.com/item?id=48569278) - [Sixty percent of US consumers say &apos;AI&apos; in brand messaging is a turnoff](https://wpvip.com/future-of-the-web-2026/)
* [2026-06-17, 12:04:28](https://news.ycombinator.com/item?id=48569205) - [MicroUI – A tiny, portable, immediate-mode UI library written in ANSI C](https://github.com/rxi/microui)
* [2026-06-17, 11:00:00](https://games.slashdot.org/story/26/06/17/0542212/stop-killing-games-fails-to-secure-eu-law-despite-13-million-signatures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stop Killing Games Fails To Secure EU Law Despite 1.3 Million Signatures](https://games.slashdot.org/story/26/06/17/0542212/stop-killing-games-fails-to-secure-eu-law-despite-13-million-signatures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 10:51:17](https://news.ycombinator.com/item?id=48568502) - [RFC 10008: The new HTTP Query Method](https://www.rfc-editor.org/info/rfc10008/)
* [2026-06-17, 10:45:54](https://lobste.rs/s/hnoijy/color_picking_oklch_for_mortals) - [Color picking Oklch for mortals](https://hugodaniel.com/posts/color-picking-oklch/)
* [2026-06-17, 10:22:27](https://lobste.rs/s/l6xs1q/2026_06_16_robinhood_layoff_translation) - [2026-06-16 Robinhood Layoff Translation](https://layoff-translator.pages.dev/layoffs/2026-06-16-robinhood)
* [2026-06-17, 09:48:59](https://news.ycombinator.com/item?id=48568023) - [Show HN: I built 184 free browser tools – PDF, image, dev, AI tasks, no upload](https://brevio.pro)
* [2026-06-17, 09:28:36](https://news.ycombinator.com/item?id=48567877) - [Show HN: High-Res Neural Cellular Automata](https://cells2pixels.github.io/)
* [2026-06-17, 09:25:00](https://soylentnews.org/article.pl?sid=26/06/16/0055252&amp;from=rss) - [EU Auto Giants Call For &apos;Made In Europe&apos; Incentives Amid Rising Chinese Competition](https://soylentnews.org/article.pl?sid=26/06/16/0055252&amp;from=rss)
* [2026-06-17, 09:12:00](https://news.ycombinator.com/item?id=48567759) - [GLM-5.2 is the new leading open weights model on Artificial Analysis](https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index)
* [2026-06-17, 08:31:43](https://lobste.rs/s/z5wfi9/i_could_ve_rickrolled_entire_fifa_world) - [I Could&apos;ve Rickrolled the Entire FIFA World Cup. All I Needed Was My ID](https://bobdahacker.com/blog/fifa-hack)
* [2026-06-17, 07:49:44](https://news.ycombinator.com/item?id=48567155) - [Hacker News but for Independent Blogs](https://bubbles.town/)
* [2026-06-17, 07:30:51](https://news.ycombinator.com/item?id=48567004) - [GLM 5.2 Performance Benchmarks](https://artificialanalysis.ai/models/glm-5-2)
* [2026-06-17, 07:30:42](https://lobste.rs/s/fxulig/impact_google_s_manifest_version_3_update) - [The Impact of Google&apos;s Manifest Version 3 Update on Ad Blocker Effectiveness](https://arxiv.org/abs/2503.01000)
* [2026-06-17, 07:04:42](https://news.ycombinator.com/item?id=48566832) - [The founder&apos;s playbook: Building an AI-native startup](https://claude.com/blog/the-founders-playbook)
* [2026-06-17, 07:00:00](https://science.slashdot.org/story/26/06/16/2342243/ai-and-brain-computer-interface-allow-speechless-als-patient-to-work-a-full-time-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI and Brain-Computer Interface Allow Speechless ALS Patient To Work a Full-Time Job](https://science.slashdot.org/story/26/06/16/2342243/ai-and-brain-computer-interface-allow-speechless-als-patient-to-work-a-full-time-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 06:50:47](https://news.ycombinator.com/item?id=48566727) - [From Chesterton&apos;s fence to Chesterton&apos;s gap](https://stephantul.github.io/blog/unfence/)
* [2026-06-17, 06:47:17](https://lobste.rs/s/njidax/making_ghc_upgrades_easy) - [Making GHC upgrades easy](https://blog.haskell.org/making-ghc-upgrades-easy/)
* [2026-06-17, 05:42:05](https://lobste.rs/s/vx4cnm/how_docker_desktop_networking_works) - [How Docker Desktop Networking Works Under the Hood (2022)](https://www.docker.com/blog/how-docker-desktop-networking-works-under-the-hood/)
* [2026-06-17, 05:29:46](https://lobste.rs/s/y3ra4s/game_engine_white_papers_commander_keen) - [Game Engine White Papers: Commander Keen](https://forgottenbytes.net/commander_keen.html)
* [2026-06-17, 05:14:19](https://lobste.rs/s/suaa0r/27_year_old_authentication_bypass) - [A 27-Year-Old Authentication Bypass in OpenBSD&apos;s PPP Stack](https://blog.argus-systems.ai/blog/openbsd-pap-27-year-auth-bypass.html)
* [2026-06-17, 04:33:00](https://soylentnews.org/article.pl?sid=26/06/16/0054257&amp;from=rss) - [Man Jailed for a Month Despite Flock Showing He Was 5 Miles From Crime Scene](https://soylentnews.org/article.pl?sid=26/06/16/0054257&amp;from=rss)
* [2026-06-17, 03:30:00](https://tech.slashdot.org/story/26/06/16/2334256/hpe-tempts-vmware-users-partners-with-year-of-free-virtualization-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HPE Tempts VMware Users, Partners With Year of Free Virtualization Software](https://tech.slashdot.org/story/26/06/16/2334256/hpe-tempts-vmware-users-partners-with-year-of-free-virtualization-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 03:25:51](https://news.ycombinator.com/item?id=48565326) - [Semiclassical Gravity Efficiently Solves NP-Complete Problems](https://arxiv.org/abs/2606.14806)
* [2026-06-17, 02:59:20](https://lobste.rs/s/bt3cq8/honda_civics_evil_valet) - [Honda Civics and the Evil Valet](https://juniperspring.org/posts/honda-evil-valet/)
* [2026-06-16, 23:50:00](https://soylentnews.org/article.pl?sid=26/06/16/0051200&amp;from=rss) - [Rivian Is Reusing Its Own Car Batteries In A Very Resourceful Way](https://soylentnews.org/article.pl?sid=26/06/16/0051200&amp;from=rss)
* [2026-06-16, 23:15:44](https://news.ycombinator.com/item?id=48563609) - [Wolfram Language and Mathematica version 15](https://writings.stephenwolfram.com/2026/06/launching-version-15-of-wolfram-language-mathematica-built-in-useful-ai-lots-of-new-core-functionality/)
* [2026-06-16, 23:00:00](https://mobile.slashdot.org/story/26/06/16/201248/commodores-callback-8020-is-a-499-flip-phone-that-blocks-social-media-and-browsers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Commodore&apos;s Callback 8020 Is a $499 Flip Phone That Blocks Social Media and Browsers](https://mobile.slashdot.org/story/26/06/16/201248/commodores-callback-8020-is-a-499-flip-phone-that-blocks-social-media-and-browsers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 22:53:34](https://news.ycombinator.com/item?id=48563394) - [Humiliating IIS servers for fun and jail time](https://mll.sh/humiliating-iis-servers-for-fun-and-jail-time/)
* [2026-06-16, 22:44:18](https://lobste.rs/s/6qwblq/making_http_requests_from_container_has) - [Making HTTP requests from a container that has no curl, using bash /dev/tcp](https://mareksuppa.com/til/bash-dev-tcp-http-without-curl/)
* [2026-06-16, 22:17:20](https://lobste.rs/s/j11pew/can_gzip_be_language_model) - [Can gzip be a language model?](https://nathan.rs/posts/gzip-lm/)
* [2026-06-16, 22:00:00](https://news.slashdot.org/story/26/06/16/1942225/binance-set-to-lose-permission-to-operate-in-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Binance Set To Lose Permission To Operate In EU](https://news.slashdot.org/story/26/06/16/1942225/binance-set-to-lose-permission-to-operate-in-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 21:00:00](https://it.slashdot.org/story/26/06/16/181236/france-to-stop-certifying-products-without-quantum-safe-encryption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France To Stop Certifying Products Without Quantum-Safe Encryption](https://it.slashdot.org/story/26/06/16/181236/france-to-stop-certifying-products-without-quantum-safe-encryption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 20:34:35](https://news.ycombinator.com/item?id=48561654) - [GrapheneOS has been ported to Android 17](https://discuss.grapheneos.org/d/36469-grapheneos-has-been-ported-to-android-17-and-official-releases-are-coming-soon)
* [2026-06-16, 20:00:00](https://tech.slashdot.org/story/26/06/16/1757207/mobileye-is-entering-the-us-robotaxi-market-with-standalone-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mobileye Is Entering the US Robotaxi Market With Standalone Service](https://tech.slashdot.org/story/26/06/16/1757207/mobileye-is-entering-the-us-robotaxi-market-with-standalone-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 19:33:20](https://lobste.rs/s/a1nops/build_your_project_zig_style) - [Build your project Zig-style](https://fnordig.de/2026/06/16/build-your-project-zig-style/)
* [2026-06-16, 19:18:46](https://lobste.rs/s/zpjomk/yak_shaving_is_fun) - [But yak shaving is fun](https://parksb.github.io/en/article/32.html)
* [2026-06-16, 19:08:00](https://soylentnews.org/politics/article.pl?sid=26/06/15/0344248&amp;from=rss) - [US Solar and Storage Defy Political Hostility to Dominate Q1 Power Installations](https://soylentnews.org/politics/article.pl?sid=26/06/15/0344248&amp;from=rss)
* [2026-06-16, 19:00:00](https://tech.slashdot.org/story/26/06/16/1712214/snaps-first-consumer-ai-glasses-are-coming-this-fall-for-2195?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Snap&apos;s First Consumer AI Glasses Are Coming This Fall For $2,195](https://tech.slashdot.org/story/26/06/16/1712214/snaps-first-consumer-ai-glasses-are-coming-this-fall-for-2195?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 18:42:26](https://lobste.rs/s/mneqgx/rfc_10008_http_query_method) - [RFC 10008: The HTTP QUERY Method](https://www.rfc-editor.org/info/rfc10008/)
* [2026-06-16, 18:00:00](https://science.slashdot.org/story/26/06/16/174209/spacex-to-acquire-ai-coding-startup-cursor-for-60-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX To Acquire AI Coding Startup Cursor For $60 Billion](https://science.slashdot.org/story/26/06/16/174209/spacex-to-acquire-ai-coding-startup-cursor-for-60-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 17:54:02](https://news.ycombinator.com/item?id=48559188) - [GPT‑NL: a sovereign language model for the Netherlands](https://www.tno.nl/en/digital/artificial-intelligence/gpt-nl/)
* [2026-06-16, 17:11:05](https://news.ycombinator.com/item?id=48558489) - [Has AI already killed self-help nonfiction books?](https://tim.blog/2026/06/12/has-ai-already-killed-nonfiction/)
* [2026-06-16, 17:00:00](https://yro.slashdot.org/story/26/06/16/1651237/the-us-governments-anthropic-models-ban-was-never-about-an-ai-jailbreak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Government&apos;s Anthropic Models Ban Was Never About an AI Jailbreak](https://yro.slashdot.org/story/26/06/16/1651237/the-us-governments-anthropic-models-ban-was-never-about-an-ai-jailbreak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 16:49:46](https://news.ycombinator.com/item?id=48558147) - [Stop Using JWTs](https://gist.github.com/samsch/0d1f3d3b4745d778f78b230cf6061452)
* [2026-06-16, 16:40:58](https://news.ycombinator.com/item?id=48558018) - [TIL: You can make HTTP requests without curl using Bash /dev/TCP](https://mareksuppa.com/til/bash-dev-tcp-http-without-curl/)
* [2026-06-16, 16:00:53](https://lobste.rs/s/hwqdvt/running_local_models_is_good_now) - [Running local models is good now](https://vickiboykis.com/2026/06/15/running-local-models-is-good-now/)
* [2026-06-16, 16:00:00](https://it.slashdot.org/story/26/06/16/0618239/russian-spam-and-profanities-are-now-plaguing-the-arch-linux-aur?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Spam and Profanities Are Now Plaguing the Arch Linux AUR](https://it.slashdot.org/story/26/06/16/0618239/russian-spam-and-profanities-are-now-plaguing-the-arch-linux-aur?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 15:55:29](https://lobste.rs/s/mxfd45/google_chrome_s_next_update_will_mark_end) - [Google Chrome&apos;s next update will mark the end of popular ad blockers](https://9to5google.com/2026/06/15/google-chromes-next-update-will-mark-the-end-of-popular-ad-blockers/)
* [2026-06-16, 15:44:44](https://news.ycombinator.com/item?id=48557079) - [Calvin and Hobbes and the price of integrity](https://therepublicofletters.substack.com/p/calvin-and-hobbes-and-the-price-of)
* [2026-06-16, 15:00:00](https://news.slashdot.org/story/26/06/16/062238/firefox-152-adds-jpeg-xl-support-redesigned-settings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox 152 Adds JPEG XL Support, Redesigned Settings](https://news.slashdot.org/story/26/06/16/062238/firefox-152-adds-jpeg-xl-support-redesigned-settings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 14:36:57](https://news.ycombinator.com/item?id=48555993) - [Running local models is good now](https://vickiboykis.com/2026/06/15/running-local-models-is-good-now/)
* [2026-06-16, 14:26:26](https://news.ycombinator.com/item?id=48555838) - [But yak shaving is fun (2019)](https://parksb.github.io/en/article/32.html)
* [2026-06-16, 14:22:00](https://soylentnews.org/article.pl?sid=26/06/15/0335259&amp;from=rss) - [AI Agents Favored $1,500 Sponsored Flights Over $500 Alternatives](https://soylentnews.org/article.pl?sid=26/06/15/0335259&amp;from=rss)
* [2026-06-16, 13:42:28](https://lobste.rs/s/zqc7bj/see_what_s_next_for_firefox) - [See what&apos;s next for Firefox](https://www.firefox.com/en-US/whatsnext/)
* [2026-06-16, 13:29:53](https://lobste.rs/s/erc2po/zlib_rs_firefox) - [zlib-rs in Firefox](https://trifectatech.org/blog/zlib-rs-in-firefox/)
* [2026-06-16, 12:58:11](https://lobste.rs/s/2u1z4w/backdoor_linkedin_job_offer) - [A backdoor in a LinkedIn job offer](https://roman.pt/posts/linkedin-backdoor/)
* [2026-06-16, 12:28:27](https://lobste.rs/s/tmeqrk/how_memory_safety_cves_differ_between) - [How memory safety CVEs differ between Rust and C/C++](https://kobzol.github.io/rust/2026/06/15/how-memory-safety-cves-differ-between-rust-and-c-cpp.html)
* [2026-06-16, 11:00:00](https://science.slashdot.org/story/26/06/16/0552251/venus-strange-rotation-was-likely-triggered-by-a-high-velocity-moon-sized-impactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Venus&apos; Strange Rotation Was Likely Triggered By a High Velocity Moon-Sized Impactor](https://science.slashdot.org/story/26/06/16/0552251/venus-strange-rotation-was-likely-triggered-by-a-high-velocity-moon-sized-impactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 10:44:24](https://news.ycombinator.com/item?id=48553224) - [SpaceX to buy Cursor for $60B](https://www.reuters.com/legal/transactional/spacex-buy-anysphere-60-billion-2026-06-16/)
* [2026-06-16, 10:19:19](https://lobste.rs/s/gqqw6z/kde_plasma_6_7_released) - [KDE Plasma 6.7 released](https://kde.org/announcements/plasma/6/6.7.0/)
* [2026-06-16, 09:37:00](https://soylentnews.org/article.pl?sid=26/06/15/0328205&amp;from=rss) - [Intel Reportedly Preparing Surprise Return to DDR4 Systems With &apos;Raptor Lake Next&apos;](https://soylentnews.org/article.pl?sid=26/06/15/0328205&amp;from=rss)
* [2026-06-16, 08:02:48](https://lobste.rs/s/lu0ue7/lobsters_interview_with_claudius) - [Lobsters Interview with Claudius](https://alexalejandre.com/programming/interview-with-claude-roux/)
* [2026-06-16, 07:00:00](https://science.slashdot.org/story/26/06/16/0539205/a-chinese-rocket-breaks-apart-dangerously-close-to-the-starlink-constellation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Chinese Rocket Breaks Apart Dangerously Close To the Starlink Constellation](https://science.slashdot.org/story/26/06/16/0539205/a-chinese-rocket-breaks-apart-dangerously-close-to-the-starlink-constellation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 05:23:57](https://lobste.rs/s/mjkp4m/time_x86_emulator_team_found_code_so_bad) - [The time the x86 emulator team found code so bad that they fixed it during emulation](https://devblogs.microsoft.com/oldnewthing/20260615-00/?p=112419)
* [2026-06-16, 04:51:00](https://soylentnews.org/article.pl?sid=26/06/15/0017250&amp;from=rss) - [What &apos;Emotional Labor&apos; Actually Means — and How Starbucks is Testing its Limits](https://soylentnews.org/article.pl?sid=26/06/15/0017250&amp;from=rss)
* [2026-06-16, 03:30:00](https://it.slashdot.org/story/26/06/15/2128216/cybersecurity-vets-protest-dangerous-us-government-ban-on-anthropics-most-powerful-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cybersecurity Vets Protest &apos;Dangerous&apos; US Government Ban On Anthropic&apos;s Most Powerful Models](https://it.slashdot.org/story/26/06/15/2128216/cybersecurity-vets-protest-dangerous-us-government-ban-on-anthropics-most-powerful-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 02:25:53](https://lobste.rs/s/jfo6xs/banned_book_library_wi_fi_lightbulb) - [Banned book library in a Wi-Fi lightbulb](https://www.richardosgood.com/posts/banned-book-library/)
* [2026-06-16, 00:05:00](https://soylentnews.org/article.pl?sid=26/06/15/0022216&amp;from=rss) - [Anthropic Warns Claude AI Is Building Itself Faster Than Expected](https://soylentnews.org/article.pl?sid=26/06/15/0022216&amp;from=rss)
* [2026-06-15, 19:24:00](https://soylentnews.org/article.pl?sid=26/06/15/0016203&amp;from=rss) - [How did Atari Apply Side Art to Arcade Cabinets?](https://soylentnews.org/article.pl?sid=26/06/15/0016203&amp;from=rss)
* [2026-06-15, 14:31:00](https://soylentnews.org/article.pl?sid=26/06/15/0013216&amp;from=rss) - [Influential Study Touting ChatGPT in Education Retracted Over Red Flags](https://soylentnews.org/article.pl?sid=26/06/15/0013216&amp;from=rss)
* [2026-06-15, 09:53:00](https://soylentnews.org/article.pl?sid=26/06/14/1921229&amp;from=rss) - [In First, California City Overwhelmingly Votes to Permanently Ban Datacenters](https://soylentnews.org/article.pl?sid=26/06/14/1921229&amp;from=rss)
* [2026-06-15, 05:08:00](https://soylentnews.org/article.pl?sid=26/06/14/1916201&amp;from=rss) - [The Adder at the Heart of Intel&apos;s 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/06/14/1916201&amp;from=rss)
* [2026-06-15, 04:37:42](https://news.ycombinator.com/item?id=48536660) - [A brief tour of the PDP-11, the most influential minicomputer of all time (2022)](https://arstechnica.com/gadgets/2022/03/a-brief-tour-of-the-pdp-11-the-most-influential-minicomputer-of-all-time/)
* [2026-06-15, 00:23:00](https://soylentnews.org/article.pl?sid=26/06/14/1914203&amp;from=rss) - [Physicists Refute Famous 2025 Study Claiming Daylight Saving Time Poses Severe Health Risks](https://soylentnews.org/article.pl?sid=26/06/14/1914203&amp;from=rss)
* [2026-06-14, 21:45:50](https://news.ycombinator.com/item?id=48533135) - [Making &apos;food out of thin air&apos; (2024)](https://www.noemamag.com/making-food-out-of-thin-air/)
* [2026-06-14, 19:35:00](https://soylentnews.org/article.pl?sid=26/06/13/1539217&amp;from=rss) - [How Can Technical Solutions Expose Mass Surveillance?](https://soylentnews.org/article.pl?sid=26/06/13/1539217&amp;from=rss)
* [2026-06-14, 19:25:21](https://news.ycombinator.com/item?id=48531590) - [Abandoned and Little-Known Airfields](https://airfields-freeman.com/)
* [2026-06-14, 14:47:00](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss) - [Scientists Gave an Octopus a Mirror. Here’s What Happened Next ](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss)
* [2026-06-14, 11:19:56](https://news.ycombinator.com/item?id=48526174) - [Show HN: Capacitor Alarm Clock](https://github.com/ArcaEge/capacitor-alarm-clock)
* [2026-06-14, 10:03:00](https://soylentnews.org/article.pl?sid=26/06/13/1438234&amp;from=rss) - [Tests Suggest Russian Satellites Can Jam GPS on a Continental Scale](https://soylentnews.org/article.pl?sid=26/06/13/1438234&amp;from=rss)
* [2026-06-14, 05:20:00](https://soylentnews.org/article.pl?sid=26/06/13/1424211&amp;from=rss) - [“Atomic Arch”: Nearly 900 AUR Packages Backdoored with an Infostealer and eBPF Rootkit](https://soylentnews.org/article.pl?sid=26/06/13/1424211&amp;from=rss)
* [2026-06-14, 00:37:00](https://soylentnews.org/article.pl?sid=26/06/12/178256&amp;from=rss) - [ASML Becomes Europe&apos;s Most Valuable Company Ever As Analysts Bet On Higher EUV Output](https://soylentnews.org/article.pl?sid=26/06/12/178256&amp;from=rss)
* [2026-06-14, 00:26:02](https://news.ycombinator.com/item?id=48522927) - [Image Compression](https://www.makingsoftware.com/chapters/image-compression)
* [2026-06-13, 19:54:00](https://soylentnews.org/article.pl?sid=26/06/12/1645227&amp;from=rss) - [Intel Intro&apos;d ‘The First Processor In The X86 Series And The First 8086 Microprocessor’ On This Day](https://soylentnews.org/article.pl?sid=26/06/12/1645227&amp;from=rss)
* [2026-06-13, 15:08:00](https://soylentnews.org/article.pl?sid=26/06/12/1339210&amp;from=rss) - [Researchers Put AI Chatbots in Charge of a Simulated World. This One Destroyed Everything in 4 Days](https://soylentnews.org/article.pl?sid=26/06/12/1339210&amp;from=rss)
* [2026-06-13, 10:25:00](https://soylentnews.org/article.pl?sid=26/06/12/1337219&amp;from=rss) - [Officials Powerless to Stop 8 New Data Centers That Could Transform Small Texas County](https://soylentnews.org/article.pl?sid=26/06/12/1337219&amp;from=rss)
* [2026-06-13, 06:12:52](https://news.ycombinator.com/item?id=48513920) - [Map Clustering Is Not My Favorite](https://blog.greg.technology/2026/06/12/map-clustering-is-not-my-favorite.html)
* [2026-06-13, 05:39:00](https://soylentnews.org/article.pl?sid=26/06/12/1141258&amp;from=rss) - [Cities Can&apos;t Figure Out How to Turn Off Flock Cameras, So They&apos;re Using Trash Bags](https://soylentnews.org/article.pl?sid=26/06/12/1141258&amp;from=rss)
* [2026-06-13, 00:56:00](https://soylentnews.org/article.pl?sid=26/06/12/1136247&amp;from=rss) - [Yoti Flagged a Playstation User to Authorities for Running GrapheneOS on Their Phone](https://soylentnews.org/article.pl?sid=26/06/12/1136247&amp;from=rss)
