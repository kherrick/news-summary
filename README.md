# [News Summary](https://kherrick.github.io/news-summary/)

## Cryptocurrency and Blockchain Developments

* [Binance Set To Lose Permission To Operate In EU](https://news.slashdot.org/story/26/06/16/1942225/binance-set-to-lose-permission-to-operate-in-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Binance faces regulatory hurdles as it may lose the permission to operate in the EU. This development adds to the ongoing scrutiny of cryptocurrency exchanges.

## Quantum and Technology Advancements

* [France To Stop Certifying Products Without Quantum-Safe Encryption](https://it.slashdot.org/story/26/06/16/181236/france-to-stop-certifying-products-without-quantum-safe-encryption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The French government takes a significant step in cybersecurity by requiring quantum-safe encryption standards for certification of products.

## Innovations in AI and Automation

* [SpaceX To Acquire AI Coding Startup Cursor For $60 Billion](https://science.slashdot.org/story/26/06/16/174209/spacex-to-acquire-ai-coding-startup-cursor-for-60-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - SpaceX makes a bold move to acquire AI startup Cursor, signaling a push into AI development.

* [Mobileye Is Entering the US Robotaxi Market With Standalone Service](https://tech.slashdot.org/story/26/06/16/1757207/mobileye-is-entering-the-us-robotaxi-market-with-standalone-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Mobileye expands its autonomous vehicle endeavors with a new robotaxi service in the United States.

## Software and System Innovations

* [GrapheneOS has been ported to Android 17 and official releases are coming soon](https://discuss.grapheneos.org/d/36469-grapheneos-has-been-ported-to-android-17-and-official-releases-are-coming-soon) - The secure and privacy-respecting Android alternative, GrapheneOS, announces compatibility with Android 17.

* [Show HN: cuTile Rust: Safe, data-race-free GPU kernels in Rust](https://github.com/nvlabs/cutile-rs) - A novel approach to building safe and data-race-free GPU kernels using Rust emerges with the cuTile library.

* [Making ast.walk 220x Faster](https://reflex.dev/blog/why-ast-walk-when-you-can-ast-sprint/) - A significant performance improvement in Python's Abstract Syntax Tree (AST) processing has been achieved, promising more efficient code analysis.

## Consumer Electronics

* [Snap's First Consumer AI Glasses Are Coming This Fall For $2,195](https://tech.slashdot.org/story/26/06/16/1712214/snaps-first-consumer-ai-glasses-are-coming-this-fall-for-2195?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Snap enters the hardware game with its first consumer augmented reality glasses set to hit the market this fall for $2,195.

## Cybersecurity Threats and Challenges

* [Malware in Arch Linux AURs now inserting Russian spam into shell configs](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/message/2YQSHTC27MOKDDKHZTH2BJGTEN2CYC7W/) - Reports emerge of malware in Arch Linux AUR, capable of inserting Russian spam into shell configurations.

* [RFC 10008: The HTTP QUERY Method](https://www.rfc-editor.org/info/rfc10008/) - A new RFC introduces the HTTP QUERY method, offering new functionalities for web applications.

## Tech Industry and Developer Community

* [Stop Using JWTs](https://gist.github.com/samsch/0d1f3d3b4745d778f78b230cf6061452) - A developer argues why JWTs should not be used and discusses alternative systems for secure token exchange.

* [How Developers React to AI-Scented Blog Posts](https://writethatblog.substack.com/p/dev-reaction-to-ai-blog-posts) - Reflects on developers' reactions to the rise of AI-generated content and their implications for the tech community.

## Scientific Discoveries and Space Exploration

* [Venus' Strange Rotation Was Likely Triggered By a High Velocity Moon-Sized Impactor](https://science.slashdot.org/story/26/06/16/0552251/venus-strange-rotation-was-likely-triggered-by-a-high-velocity-moon-sized-impactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Research suggests that Venus' unusual rotational behavior may be a consequence of a collision with a moon-sized object.

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

* [2026-06-16, 22:00:00](https://news.slashdot.org/story/26/06/16/1942225/binance-set-to-lose-permission-to-operate-in-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Binance Set To Lose Permission To Operate In EU](https://news.slashdot.org/story/26/06/16/1942225/binance-set-to-lose-permission-to-operate-in-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 21:18:36](https://news.ycombinator.com/item?id=48562274) - [Total Iran Economic Damage Estimate](https://www.fdd.org/analysis/2026/04/23/total-iran-economic-damage-estimate/)
* [2026-06-16, 21:00:00](https://it.slashdot.org/story/26/06/16/181236/france-to-stop-certifying-products-without-quantum-safe-encryption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France To Stop Certifying Products Without Quantum-Safe Encryption](https://it.slashdot.org/story/26/06/16/181236/france-to-stop-certifying-products-without-quantum-safe-encryption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 20:34:35](https://news.ycombinator.com/item?id=48561654) - [GrapheneOS has been ported to Android 17 and official releases are coming soon](https://discuss.grapheneos.org/d/36469-grapheneos-has-been-ported-to-android-17-and-official-releases-are-coming-soon)
* [2026-06-16, 20:17:42](https://news.ycombinator.com/item?id=48561410) - [Show HN: cuTile Rust: Safe, data-race-free GPU kernels in Rust](https://github.com/nvlabs/cutile-rs)
* [2026-06-16, 20:17:04](https://news.ycombinator.com/item?id=48561402) - [Frood, an Alpine Initramfs NAS (2024)](https://words.filippo.io/frood/)
* [2026-06-16, 20:00:00](https://tech.slashdot.org/story/26/06/16/1757207/mobileye-is-entering-the-us-robotaxi-market-with-standalone-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mobileye Is Entering the US Robotaxi Market With Standalone Service](https://tech.slashdot.org/story/26/06/16/1757207/mobileye-is-entering-the-us-robotaxi-market-with-standalone-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 19:13:30](https://news.ycombinator.com/item?id=48560454) - [Show HN: VoiceDraw – Talk system design out loud, the diagrams draw themselves](https://voicedraw.com/)
* [2026-06-16, 19:08:00](https://soylentnews.org/politics/article.pl?sid=26/06/15/0344248&amp;from=rss) - [US Solar and Storage Defy Political Hostility to Dominate Q1 Power Installations](https://soylentnews.org/politics/article.pl?sid=26/06/15/0344248&amp;from=rss)
* [2026-06-16, 19:00:00](https://tech.slashdot.org/story/26/06/16/1712214/snaps-first-consumer-ai-glasses-are-coming-this-fall-for-2195?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Snap&apos;s First Consumer AI Glasses Are Coming This Fall For $2,195](https://tech.slashdot.org/story/26/06/16/1712214/snaps-first-consumer-ai-glasses-are-coming-this-fall-for-2195?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 18:42:26](https://lobste.rs/s/mneqgx/rfc_10008_http_query_method) - [RFC 10008: The HTTP QUERY Method](https://www.rfc-editor.org/info/rfc10008/)
* [2026-06-16, 18:37:21](https://news.ycombinator.com/item?id=48559935) - [Apple is about to make Hide My Email useless](https://arseniyshestakov.com/2026/06/16/apple-is-about-to-make-hide-my-email-useless/)
* [2026-06-16, 18:36:47](https://lobste.rs/s/zaejgn/malware_arch_linux_aurs_now_inserting) - [Malware in Arch Linux AURs now inserting Russian spam into shell configs](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/message/2YQSHTC27MOKDDKHZTH2BJGTEN2CYC7W/)
* [2026-06-16, 18:00:00](https://science.slashdot.org/story/26/06/16/174209/spacex-to-acquire-ai-coding-startup-cursor-for-60-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX To Acquire AI Coding Startup Cursor For $60 Billion](https://science.slashdot.org/story/26/06/16/174209/spacex-to-acquire-ai-coding-startup-cursor-for-60-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 17:54:02](https://news.ycombinator.com/item?id=48559188) - [GPT‑NL: a sovereign language model for the Netherlands](https://www.tno.nl/en/digital/artificial-intelligence/gpt-nl/)
* [2026-06-16, 17:48:42](https://news.ycombinator.com/item?id=48559083) - [10Gb/s Ethernet: switching to a Broadcom SFP+ module](https://www.gilesthomas.com/2026/06/10g-ethernet-switching-to-broadcom-sfp-plus)
* [2026-06-16, 17:11:05](https://news.ycombinator.com/item?id=48558489) - [Has AI already killed self-help nonfiction books?](https://tim.blog/2026/06/12/has-ai-already-killed-nonfiction/)
* [2026-06-16, 17:01:12](https://news.ycombinator.com/item?id=48558338) - [&apos;Ghost jobs&apos; could soon be illegal in New York](https://www.fastcompany.com/91558427/ghost-jobs-could-soon-be-illegal-in-new-york)
* [2026-06-16, 17:00:59](https://news.ycombinator.com/item?id=48558337) - [Specs Augmented Reality Glasses](https://newsroom.snap.com/introducing-specs-augmented-reality-glasses)
* [2026-06-16, 17:00:00](https://yro.slashdot.org/story/26/06/16/1651237/the-us-governments-anthropic-models-ban-was-never-about-an-ai-jailbreak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Government&apos;s Anthropic Models Ban Was Never About an AI Jailbreak](https://yro.slashdot.org/story/26/06/16/1651237/the-us-governments-anthropic-models-ban-was-never-about-an-ai-jailbreak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 16:49:46](https://news.ycombinator.com/item?id=48558147) - [Stop Using JWTs](https://gist.github.com/samsch/0d1f3d3b4745d778f78b230cf6061452)
* [2026-06-16, 16:42:32](https://news.ycombinator.com/item?id=48558045) - [Is Meta destroying its engineering organization?](https://newsletter.pragmaticengineer.com/p/why-is-meta-destroying-its-engineering)
* [2026-06-16, 16:40:58](https://news.ycombinator.com/item?id=48558018) - [TIL: You can make HTTP requests without curl using Bash /dev/TCP](https://mareksuppa.com/til/bash-dev-tcp-http-without-curl/)
* [2026-06-16, 16:25:28](https://news.ycombinator.com/item?id=48557768) - [Making ast.walk 220x Faster](https://reflex.dev/blog/why-ast-walk-when-you-can-ast-sprint/)
* [2026-06-16, 16:12:06](https://news.ycombinator.com/item?id=48557530) - [Apple&apos;s weird anti-nausea dots cured my car sickness](https://www.theverge.com/tech/942854/apple-vehicle-motion-cues-review-really-work)
* [2026-06-16, 16:00:53](https://lobste.rs/s/hwqdvt/running_local_models_is_good_now) - [Running local models is good now](https://vickiboykis.com/2026/06/15/running-local-models-is-good-now/)
* [2026-06-16, 16:00:00](https://it.slashdot.org/story/26/06/16/0618239/russian-spam-and-profanities-are-now-plaguing-the-arch-linux-aur?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Spam and Profanities Are Now Plaguing the Arch Linux AUR](https://it.slashdot.org/story/26/06/16/0618239/russian-spam-and-profanities-are-now-plaguing-the-arch-linux-aur?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 15:55:29](https://lobste.rs/s/mxfd45/google_chrome_s_next_update_will_mark_end) - [Google Chrome&apos;s next update will mark the end of popular ad blockers](https://9to5google.com/2026/06/15/google-chromes-next-update-will-mark-the-end-of-popular-ad-blockers/)
* [2026-06-16, 15:44:44](https://news.ycombinator.com/item?id=48557079) - [Calvin and Hobbes and the price of integrity](https://therepublicofletters.substack.com/p/calvin-and-hobbes-and-the-price-of)
* [2026-06-16, 15:00:00](https://news.slashdot.org/story/26/06/16/062238/firefox-152-adds-jpeg-xl-support-redesigned-settings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox 152 Adds JPEG XL Support, Redesigned Settings](https://news.slashdot.org/story/26/06/16/062238/firefox-152-adds-jpeg-xl-support-redesigned-settings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 14:50:10](https://news.ycombinator.com/item?id=48556163) - [SubQ 1.1 Small](https://subq.ai/subq-1-1-small-technical-report)
* [2026-06-16, 14:36:57](https://news.ycombinator.com/item?id=48555993) - [Running local models is good now](https://vickiboykis.com/2026/06/15/running-local-models-is-good-now/)
* [2026-06-16, 14:26:26](https://news.ycombinator.com/item?id=48555838) - [But yak shaving is fun (2019)](https://parksb.github.io/en/article/32.html)
* [2026-06-16, 14:22:00](https://soylentnews.org/article.pl?sid=26/06/15/0335259&amp;from=rss) - [AI Agents Favored $1,500 Sponsored Flights Over $500 Alternatives](https://soylentnews.org/article.pl?sid=26/06/15/0335259&amp;from=rss)
* [2026-06-16, 14:15:28](https://lobste.rs/s/pxqwxy/how_developers_react_ai_scented_blog) - [How Developers React to AI-Scented Blog Posts](https://writethatblog.substack.com/p/dev-reaction-to-ai-blog-posts)
* [2026-06-16, 13:42:28](https://lobste.rs/s/zqc7bj/see_what_s_next_for_firefox) - [See what&apos;s next for Firefox](https://www.firefox.com/en-US/whatsnext/)
* [2026-06-16, 13:29:53](https://lobste.rs/s/erc2po/zlib_rs_firefox) - [zlib-rs in Firefox](https://trifectatech.org/blog/zlib-rs-in-firefox/)
* [2026-06-16, 13:15:15](https://news.ycombinator.com/item?id=48554814) - [Qwen-Robot Suite: A Foundation Model Suite for Physical World Intelligence](https://qwen.ai/blog?id=qwen-robotsuite)
* [2026-06-16, 13:11:18](https://lobste.rs/s/0i8vld/async_task_locals_from_scratch) - [Async Task Locals From Scratch](https://wolfgirl.dev/blog/2026-06-16-async-task-locals-from-scratch/)
* [2026-06-16, 12:58:11](https://lobste.rs/s/2u1z4w/backdoor_linkedin_job_offer) - [A backdoor in a LinkedIn job offer](https://roman.pt/posts/linkedin-backdoor/)
* [2026-06-16, 12:28:27](https://lobste.rs/s/tmeqrk/how_memory_safety_cves_differ_between) - [How memory safety CVEs differ between Rust and C/C++](https://kobzol.github.io/rust/2026/06/15/how-memory-safety-cves-differ-between-rust-and-c-cpp.html)
* [2026-06-16, 11:26:27](https://news.ycombinator.com/item?id=48553550) - [Mechanical Watch (2022)](https://ciechanow.ski/mechanical-watch/)
* [2026-06-16, 11:00:00](https://science.slashdot.org/story/26/06/16/0552251/venus-strange-rotation-was-likely-triggered-by-a-high-velocity-moon-sized-impactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Venus&apos; Strange Rotation Was Likely Triggered By a High Velocity Moon-Sized Impactor](https://science.slashdot.org/story/26/06/16/0552251/venus-strange-rotation-was-likely-triggered-by-a-high-velocity-moon-sized-impactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 10:44:24](https://news.ycombinator.com/item?id=48553224) - [SpaceX to buy Cursor for $60B](https://www.reuters.com/legal/transactional/spacex-buy-anysphere-60-billion-2026-06-16/)
* [2026-06-16, 10:30:25](https://lobste.rs/s/cyj3wa/when_float_division_beats_integer) - [When float division beats integer division](https://blog.andr2i.com/posts/2026-06-08-optimization-catalog-when-float-division-beats-integer-division)
* [2026-06-16, 10:19:19](https://lobste.rs/s/gqqw6z/kde_plasma_6_7_released) - [KDE Plasma 6.7 released](https://kde.org/announcements/plasma/6/6.7.0/)
* [2026-06-16, 09:46:49](https://news.ycombinator.com/item?id=48552844) - [Correlated randomness in Slay the Spire 2](https://tck.mn/blog/correlated-randomness-sts2/)
* [2026-06-16, 09:37:00](https://soylentnews.org/article.pl?sid=26/06/15/0328205&amp;from=rss) - [Intel Reportedly Preparing Surprise Return to DDR4 Systems With &apos;Raptor Lake Next&apos;](https://soylentnews.org/article.pl?sid=26/06/15/0328205&amp;from=rss)
* [2026-06-16, 09:22:57](https://lobste.rs/s/qkli6l/oxygen_6_7_is_here_breath_fresh_air_for_kde_s) - [Oxygen 6.7 is here: a breath of fresh air for KDE’s classic theme](https://filipfila.wordpress.com/2026/06/16/oxygen-6-7-is-here-a-breath-of-fresh-air-for-kdes-classic-theme/)
* [2026-06-16, 08:02:48](https://lobste.rs/s/lu0ue7/lobsters_interview_with_claudius) - [Lobsters Interview with Claudius](https://alexalejandre.com/programming/interview-with-claude-roux/)
* [2026-06-16, 07:00:00](https://science.slashdot.org/story/26/06/16/0539205/a-chinese-rocket-breaks-apart-dangerously-close-to-the-starlink-constellation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Chinese Rocket Breaks Apart Dangerously Close To the Starlink Constellation](https://science.slashdot.org/story/26/06/16/0539205/a-chinese-rocket-breaks-apart-dangerously-close-to-the-starlink-constellation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 05:23:57](https://lobste.rs/s/mjkp4m/time_x86_emulator_team_found_code_so_bad) - [The time the x86 emulator team found code so bad that they fixed it during emulation](https://devblogs.microsoft.com/oldnewthing/20260615-00/?p=112419)
* [2026-06-16, 04:51:00](https://soylentnews.org/article.pl?sid=26/06/15/0017250&amp;from=rss) - [What &apos;Emotional Labor&apos; Actually Means — and How Starbucks is Testing its Limits](https://soylentnews.org/article.pl?sid=26/06/15/0017250&amp;from=rss)
* [2026-06-16, 04:30:18](https://lobste.rs/s/irws5p/correlated_randomness_slay_spire_2) - [Correlated randomness in Slay the Spire 2](https://tck.mn/blog/correlated-randomness-sts2/)
* [2026-06-16, 03:30:00](https://it.slashdot.org/story/26/06/15/2128216/cybersecurity-vets-protest-dangerous-us-government-ban-on-anthropics-most-powerful-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cybersecurity Vets Protest &apos;Dangerous&apos; US Government Ban On Anthropic&apos;s Most Powerful Models](https://it.slashdot.org/story/26/06/15/2128216/cybersecurity-vets-protest-dangerous-us-government-ban-on-anthropics-most-powerful-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 02:52:58](https://lobste.rs/s/rcazen/llms_will_replace_8_track_duplication) - [LLMs Will Replace 8-Track Duplication Engineers](https://bbenchoff.github.io/pages/8Tracks.html)
* [2026-06-16, 02:41:09](https://lobste.rs/s/k6qon4/what_job_interviews_taught_me_about) - [What job interviews taught me about Kubernetes](https://notnotp.com/notes/what-job-interviews-taught-me-about-kubernetes/)
* [2026-06-16, 02:25:53](https://lobste.rs/s/jfo6xs/banned_book_library_wi_fi_lightbulb) - [Banned book library in a Wi-Fi lightbulb](https://www.richardosgood.com/posts/banned-book-library/)
* [2026-06-16, 00:05:00](https://soylentnews.org/article.pl?sid=26/06/15/0022216&amp;from=rss) - [Anthropic Warns Claude AI Is Building Itself Faster Than Expected](https://soylentnews.org/article.pl?sid=26/06/15/0022216&amp;from=rss)
* [2026-06-15, 23:00:00](https://yro.slashdot.org/story/26/06/15/2017215/the-us-government-is-letting-a-key-data-center-regulation-expire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Government Is Letting a Key Data Center Regulation Expire](https://yro.slashdot.org/story/26/06/15/2017215/the-us-government-is-letting-a-key-data-center-regulation-expire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-15, 22:00:00](https://yro.slashdot.org/story/26/06/15/209242/fbi-issues-urgent-kali365-security-warning-for-teams-outlook-onedrive-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Issues Urgent Kali365 Security Warning For Teams, Outlook, OneDrive Users](https://yro.slashdot.org/story/26/06/15/209242/fbi-issues-urgent-kali365-security-warning-for-teams-outlook-onedrive-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-15, 21:00:00](https://tech.slashdot.org/story/26/06/15/205219/google-chromes-next-update-will-mark-the-end-of-popular-ad-blockers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Chrome&apos;s Next Update Will Mark the End of Popular Ad Blockers](https://tech.slashdot.org/story/26/06/15/205219/google-chromes-next-update-will-mark-the-end-of-popular-ad-blockers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-15, 20:23:48](https://lobste.rs/s/0mximk/netnewswire_status) - [NetNewsWire Status](https://inessential.com/2026/06/15/netnewswire-status.html)
* [2026-06-15, 20:02:00](https://hardware.slashdot.org/story/26/06/15/200234/users-cry-foul-after-amd-stripped-memory-crypto-from-its-consumer-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Users Cry Foul After AMD Stripped Memory Crypto From Its Consumer CPUs](https://hardware.slashdot.org/story/26/06/15/200234/users-cry-foul-after-amd-stripped-memory-crypto-from-its-consumer-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-15, 19:26:25](https://lobste.rs/s/vodqhe/freebsd_15_on_laptop) - [FreeBSD 15 on a Laptop](https://www.sacredheartsc.com/blog/freebsd-15-on-a-laptop/)
* [2026-06-15, 19:24:00](https://soylentnews.org/article.pl?sid=26/06/15/0016203&amp;from=rss) - [How did Atari Apply Side Art to Arcade Cabinets?](https://soylentnews.org/article.pl?sid=26/06/15/0016203&amp;from=rss)
* [2026-06-15, 17:14:19](https://lobste.rs/s/fkoa80/typst_0_15_contains_multitudes) - [Typst 0.15 contains multitudes](https://typst.app/blog/2026/typst-0.15/)
* [2026-06-15, 15:35:08](https://lobste.rs/s/cslljn/iroh_1_0_dial_keys_not_ips) - [Iroh 1.0 - Dial Keys, not IPs](https://www.iroh.computer/blog/v1)
* [2026-06-15, 14:31:00](https://soylentnews.org/article.pl?sid=26/06/15/0013216&amp;from=rss) - [Influential Study Touting ChatGPT in Education Retracted Over Red Flags](https://soylentnews.org/article.pl?sid=26/06/15/0013216&amp;from=rss)
* [2026-06-15, 10:23:34](https://lobste.rs/s/guyifg/removing_my_nix_flakes_vs_guix_post) - [Removing my nix flakes vs guix post](https://coopi.neocities.org/posts/taking-down-nix-flakes-vs-guix)
* [2026-06-15, 09:53:00](https://soylentnews.org/article.pl?sid=26/06/14/1921229&amp;from=rss) - [In First, California City Overwhelmingly Votes to Permanently Ban Datacenters](https://soylentnews.org/article.pl?sid=26/06/14/1921229&amp;from=rss)
* [2026-06-15, 07:53:52](https://lobste.rs/s/uqagn2/curl_summer_bliss) - [curl summer of bliss](https://daniel.haxx.se/blog/2026/06/15/curl-summer-of-bliss/)
* [2026-06-15, 05:08:00](https://soylentnews.org/article.pl?sid=26/06/14/1916201&amp;from=rss) - [The Adder at the Heart of Intel&apos;s 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/06/14/1916201&amp;from=rss)
* [2026-06-15, 00:23:00](https://soylentnews.org/article.pl?sid=26/06/14/1914203&amp;from=rss) - [Physicists Refute Famous 2025 Study Claiming Daylight Saving Time Poses Severe Health Risks](https://soylentnews.org/article.pl?sid=26/06/14/1914203&amp;from=rss)
* [2026-06-14, 19:35:00](https://soylentnews.org/article.pl?sid=26/06/13/1539217&amp;from=rss) - [How Can Technical Solutions Expose Mass Surveillance?](https://soylentnews.org/article.pl?sid=26/06/13/1539217&amp;from=rss)
* [2026-06-14, 14:47:00](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss) - [Scientists Gave an Octopus a Mirror. Here’s What Happened Next ](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss)
* [2026-06-14, 10:03:00](https://soylentnews.org/article.pl?sid=26/06/13/1438234&amp;from=rss) - [Tests Suggest Russian Satellites Can Jam GPS on a Continental Scale](https://soylentnews.org/article.pl?sid=26/06/13/1438234&amp;from=rss)
* [2026-06-14, 08:33:22](https://news.ycombinator.com/item?id=48525340) - [Show HN: Sabela – A Reactive Notebook for Haskell](https://sabela.datahaskell.com/)
* [2026-06-14, 05:20:00](https://soylentnews.org/article.pl?sid=26/06/13/1424211&amp;from=rss) - [“Atomic Arch”: Nearly 900 AUR Packages Backdoored with an Infostealer and eBPF Rootkit](https://soylentnews.org/article.pl?sid=26/06/13/1424211&amp;from=rss)
* [2026-06-14, 00:37:00](https://soylentnews.org/article.pl?sid=26/06/12/178256&amp;from=rss) - [ASML Becomes Europe&apos;s Most Valuable Company Ever As Analysts Bet On Higher EUV Output](https://soylentnews.org/article.pl?sid=26/06/12/178256&amp;from=rss)
* [2026-06-13, 22:55:39](https://news.ycombinator.com/item?id=48522316) - [Getting Creative with Perlin Noise Fields](https://sighack.com/post/getting-creative-with-perlin-noise-fields)
* [2026-06-13, 22:14:53](https://news.ycombinator.com/item?id=48522037) - [W.H. Auden and James Schuyler in life and literature](https://hedgehogreview.com/web-features/thr/posts/companions-on-parnassus)
* [2026-06-13, 19:54:00](https://soylentnews.org/article.pl?sid=26/06/12/1645227&amp;from=rss) - [Intel Intro&apos;d ‘The First Processor In The X86 Series And The First 8086 Microprocessor’ On This Day](https://soylentnews.org/article.pl?sid=26/06/12/1645227&amp;from=rss)
* [2026-06-13, 17:56:47](https://news.ycombinator.com/item?id=48519723) - [An interview with an Apple emoji designer](https://shadycharacters.co.uk/2026/06/ollie-wagner/)
* [2026-06-13, 15:08:00](https://soylentnews.org/article.pl?sid=26/06/12/1339210&amp;from=rss) - [Researchers Put AI Chatbots in Charge of a Simulated World. This One Destroyed Everything in 4 Days](https://soylentnews.org/article.pl?sid=26/06/12/1339210&amp;from=rss)
* [2026-06-13, 10:25:00](https://soylentnews.org/article.pl?sid=26/06/12/1337219&amp;from=rss) - [Officials Powerless to Stop 8 New Data Centers That Could Transform Small Texas County](https://soylentnews.org/article.pl?sid=26/06/12/1337219&amp;from=rss)
* [2026-06-13, 05:39:00](https://soylentnews.org/article.pl?sid=26/06/12/1141258&amp;from=rss) - [Cities Can&apos;t Figure Out How to Turn Off Flock Cameras, So They&apos;re Using Trash Bags](https://soylentnews.org/article.pl?sid=26/06/12/1141258&amp;from=rss)
* [2026-06-13, 00:56:00](https://soylentnews.org/article.pl?sid=26/06/12/1136247&amp;from=rss) - [Yoti Flagged a Playstation User to Authorities for Running GrapheneOS on Their Phone](https://soylentnews.org/article.pl?sid=26/06/12/1136247&amp;from=rss)
* [2026-06-12, 20:12:00](https://soylentnews.org/article.pl?sid=26/06/12/1133204&amp;from=rss) - [Finland Deploys New System to Detect Threats to Undersea Cables](https://soylentnews.org/article.pl?sid=26/06/12/1133204&amp;from=rss)
* [2026-06-12, 15:29:00](https://soylentnews.org/article.pl?sid=26/06/11/0213228&amp;from=rss) - [Google Liable for AI Overview Falsehoods](https://soylentnews.org/article.pl?sid=26/06/11/0213228&amp;from=rss)
* [2026-06-12, 10:43:00](https://soylentnews.org/article.pl?sid=26/06/11/022206&amp;from=rss) - [You Can Now Get a Religious Exemption From Using AI at Work](https://soylentnews.org/article.pl?sid=26/06/11/022206&amp;from=rss)
* [2026-06-12, 05:51:00](https://soylentnews.org/article.pl?sid=26/06/11/027248&amp;from=rss) - [Lexar Regional Manager Says That RAM Prices Are Expected To Double By The End Of The Year ](https://soylentnews.org/article.pl?sid=26/06/11/027248&amp;from=rss)
* [2026-06-12, 02:04:55](https://news.ycombinator.com/item?id=48498981) - [ASM Shader Toy](https://wegfawefgawefg.github.io/asm-shader-toy/)
* [2026-06-12, 01:18:00](https://soylentnews.org/article.pl?sid=26/06/11/020204&amp;from=rss) - [62 Year Old Dutch Man Marries The Chatbot Of His Dreams](https://soylentnews.org/article.pl?sid=26/06/11/020204&amp;from=rss)
