# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Open Source Innovations

* [Ubuntu's AI Plans Have Linux Users Looking For a 'Kill Switch'](https://news.slashdot.org/story/26/04/29/197205/ubuntus-ai-plans-have-linux-users-looking-for-a-kill-switch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Ubuntu's introduction of artificial intelligence tools has sparked concern among Linux users, who are seeking more control over its implementation, including the potential need for a 'kill switch'.

* [Show HN: A new benchmark for testing LLMs for deterministic outputs](https://interfaze.ai/blog/introducing-structured-output-benchmark) - An innovative benchmark has been introduced to evaluate the capability of Large Language Models (LLMs) to produce deterministic outputs, aiding developers in assessing AI reliability.

* [Letting AI play my game – building an agentic test harness to help play-testing](https://blog.jeffschomay.com/letting-ai-play-my-game) - A developer's intriguing experiment showcases how AI can assist in play-testing their games by serving as an autonomous agent.

## Environment and Climate Change

* [Kyoto cherry blossoms now bloom earlier than at any point in 1,200 years](https://jivx.com/kyoto-bloom) - A study reveals that Kyoto's iconic cherry blossoms are now blooming earlier than in over a millennium, attributed to climate change.

* [Antarctica Just Saw the Fastest Glacier Collapse Ever Recorded](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss) - Scientists record an unprecedented glacier collapse in Antarctica, raising concerns about accelerating global warming impact.

## Technological Advancements and Challenges

* [Humanoid Robots Start Sorting Luggage In Tokyo Airport Test Amid Labor Shortage](https://hardware.slashdot.org/story/26/04/29/0347242/humanoid-robots-start-sorting-luggage-in-tokyo-airport-test-amid-labor-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Japan's Tokyo airport is piloting humanoid robots for luggage sorting, addressing challenges posed by labor shortages.

* [Firefox Has Quietly Integrated Brave's Adblock Engine](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss) - Firefox integrates Brave's ad-blocking engine, highlighting an unusual collaboration in the browser competition.

* [Meta Signs Multibillion-Dollar Deal With Amazon to Use its CPU Chips for AI](https://soylentnews.org/article.pl?sid=26/04/28/0555211&amp;from=rss) - Meta partners with Amazon in a multibillion-dollar agreement to leverage Amazon's CPU chips for AI advancements.

* [Why I Still Reach for Lisp (& Scheme) Instead of Haskell](https://jointhefreeworld.org/blog/articles/lisps/why-i-still-reach-for-scheme-instead-of-haskell/index.html) - A developer shares a perspective on why Lisp and Scheme remain preferable choices over Haskell for certain applications.

## Privacy and Regulation Updates

* [Maryland becomes first state to ban surveillance pricing in grocery stores](https://www.theguardian.com/technology/2026/apr/29/maryland-grocery-stores-ban-surveillance-pricing) - In a landmark decision, Maryland takes the lead in banning the controversial practice of surveillance-based pricing in retail stores.

* [Colorado's Anti-Repair Bill Is Dead](https://news.slashdot.org/story/26/04/29/1621248/colorados-anti-repair-bill-is-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A victory for repair advocates as Colorado rejects a bill that aimed to limit the right-to-repair movement.

## Scientific Discoveries and Space Exploration

* [Physicists Witness Pinpricks of Darkness Moving Faster Than the Speed of Light](https://soylentnews.org/article.pl?sid=26/04/24/1220209&amp;from=rss) - Researchers observe unique phenomena resembling 'pinpricks of darkness' in light moving faster than the speed of light, offering fresh insights into physics.

* [NASA Shut Down Voyager 1 Science Instrument After Unexpected Power Drop](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss) - NASA deactivates a science instrument on Voyager 1 following a surprising power failure, aiming to extend its mission.

## Innovative Tech Designs

* [An open-source stethoscope that costs between $2.5 and $5 to produce](https://github.com/GliaX/Stethoscope) - A project introduces an open-source, affordable stethoscope model costing only $2.5–$5, increasing global access to medical tools.

* [Using a 1978 terminal in 2026 (DEC VT-100)](https://nikhiljha.com/posts/vt100/) - A nostalgic dive into the functionality and relevance of a 1978 DEC VT-100 terminal.

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

* [2026-04-29, 22:00:00](https://news.slashdot.org/story/26/04/29/197205/ubuntus-ai-plans-have-linux-users-looking-for-a-kill-switch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ubuntu&apos;s AI Plans Have Linux Users Looking For a &apos;Kill Switch&apos;](https://news.slashdot.org/story/26/04/29/197205/ubuntus-ai-plans-have-linux-users-looking-for-a-kill-switch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 21:58:46](https://news.ycombinator.com/item?id=47955297) - [Germany has become the largest ammunition producer in the world](https://prm.ua/en/the-us-is-no-longer-the-leader-germany-has-become-the-largest-ammunition-producer-in-the-world/)
* [2026-04-29, 21:50:57](https://news.ycombinator.com/item?id=47955226) - [Gooseworks (YC W23) Is Hiring a Founding Growth Engineer](https://www.ycombinator.com/companies/gooseworks/jobs/ztgY6bD-founding-growth-engineer)
* [2026-04-29, 21:08:48](https://lobste.rs/s/eeifdc/copy_fail_732_bytes_root) - [Copy Fail — 732 Bytes to Root](https://copy.fail/)
* [2026-04-29, 21:00:00](https://tech.slashdot.org/story/26/04/29/1917219/joby-demos-its-air-taxi-in-nyc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Joby Demos Its Air Taxi In NYC](https://tech.slashdot.org/story/26/04/29/1917219/joby-demos-its-air-taxi-in-nyc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 20:30:57](https://lobste.rs/s/p4nlr3/how_linux_7_0_broke_postgresql_preemption) - [How Linux 7.0 Broke PostgreSQL: The Preemption Regression Explained](https://read.thecoder.cafe/p/linux-broke-postgresql)
* [2026-04-29, 20:22:00](https://soylentnews.org/article.pl?sid=26/04/28/062230&amp;from=rss) - [Tails Linux 7.7 Anonymous Distro Adds Detection of Outdated Secure Boot Certificates](https://soylentnews.org/article.pl?sid=26/04/28/062230&amp;from=rss)
* [2026-04-29, 20:00:00](https://apple.slashdot.org/story/26/04/29/1925205/apple-gives-up-on-the-vision-pro-after-m5-refresh-flop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Gives Up On the Vision Pro After M5 Refresh Flop](https://apple.slashdot.org/story/26/04/29/1925205/apple-gives-up-on-the-vision-pro-after-m5-refresh-flop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 19:49:30](https://news.ycombinator.com/item?id=47953541) - [OpenTrafficMap](https://opentrafficmap.org/)
* [2026-04-29, 19:32:36](https://news.ycombinator.com/item?id=47953275) - [Kyoto cherry blossoms now bloom earlier than at any point in 1,200 years](https://jivx.com/kyoto-bloom)
* [2026-04-29, 19:00:00](https://tech.slashdot.org/story/26/04/29/1627235/california-high-speed-rail-price-tag-jumps-to-231-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California High-Speed Rail Price Tag Jumps To $231 Billion](https://tech.slashdot.org/story/26/04/29/1627235/california-high-speed-rail-price-tag-jumps-to-231-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 18:58:11](https://lobste.rs/s/b57uhm/functional_programmers_need_take_look_at) - [Functional Programmers need to take a look at Zig](https://pure-systems.org/posts/2026-04-29-functional-programmers-need-to-take-a-look-at-zig.html)
* [2026-04-29, 18:54:31](https://news.ycombinator.com/item?id=47952722) - [HERMES.md in commit messages causes requests to route to extra usage billing](https://github.com/anthropics/claude-code/issues/53262)
* [2026-04-29, 18:13:53](https://news.ycombinator.com/item?id=47952181) - [Copy Fail – CVE-2026-31431](https://copy.fail/)
* [2026-04-29, 18:00:00](https://news.slashdot.org/story/26/04/29/1621248/colorados-anti-repair-bill-is-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Colorado&apos;s Anti-Repair Bill Is Dead](https://news.slashdot.org/story/26/04/29/1621248/colorados-anti-repair-bill-is-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 17:58:14](https://lobste.rs/s/wsmc8s/copy_fail_732_bytes_root_on_every_major) - [Copy Fail: 732 Bytes to Root on Every Major Linux Distributions](https://xint.io/blog/copy-fail-linux-distributions)
* [2026-04-29, 17:44:21](https://news.ycombinator.com/item?id=47951786) - [Ramp&apos;s Sheets AI Exfiltrates Financials](https://www.promptarmor.com/resources/ramps-sheets-ai-exfiltrates-financials)
* [2026-04-29, 17:27:20](https://lobste.rs/s/m6z3gm/fastcgi_30_years_old_still_better) - [FastCGI: 30 Years Old and Still the Better Protocol for Reverse Proxies](https://www.agwa.name/blog/post/fastcgi_is_the_better_protocol_for_reverse_proxies)
* [2026-04-29, 17:03:12](https://lobste.rs/s/htkb9t/early_impressions_chrome_from_firefox) - [Early Impressions of Chrome from a Firefox User](https://www.abefehr.com/posts/early-impressions-of-chrome)
* [2026-04-29, 17:00:00](https://games.slashdot.org/story/26/04/29/169218/github-no-longer-a-place-for-serious-work-says-hashicorp-co-founder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GitHub &apos;No Longer a Place For Serious Work&apos;, Says Hashicorp Co-Founder](https://games.slashdot.org/story/26/04/29/169218/github-no-longer-a-place-for-serious-work-says-hashicorp-co-founder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 16:58:13](https://news.ycombinator.com/item?id=47951137) - [Laws of UX](https://lawsofux.com/)
* [2026-04-29, 16:51:38](https://news.ycombinator.com/item?id=47951037) - [Virtualisation on Apple Silicon Macs is different](https://eclecticlight.co/2026/04/29/virtualisation-on-apple-silicon-macs-is-different/)
* [2026-04-29, 16:50:01](https://news.ycombinator.com/item?id=47951007) - [Maryland becomes first state to ban surveillance pricing in grocery stores](https://www.theguardian.com/technology/2026/apr/29/maryland-grocery-stores-ban-surveillance-pricing)
* [2026-04-29, 16:20:56](https://news.ycombinator.com/item?id=47950575) - [At Protocol: Building the Social Internet](https://atproto.com/)
* [2026-04-29, 16:16:39](https://news.ycombinator.com/item?id=47950510) - [FastCGI: 30 years old and still the better protocol for reverse proxies](https://www.agwa.name/blog/post/fastcgi_is_the_better_protocol_for_reverse_proxies)
* [2026-04-29, 16:12:55](https://lobste.rs/s/ifcyr1/contributor_poker_zig_s_ai_ban) - [Contributor Poker and Zig&apos;s AI Ban](https://kristoff.it/blog/contributor-poker-and-ai/)
* [2026-04-29, 16:08:37](https://lobste.rs/s/szqcwk/how_many_frames_per_second_do_you_need) - [How Many Frames Per Second Do You Need?](https://hooby.blog/posts/how-many-frames-per-second-do-you-need/)
* [2026-04-29, 16:01:51](https://news.ycombinator.com/item?id=47950283) - [Show HN: A new benchmark for testing LLMs for deterministic outputs](https://interfaze.ai/blog/introducing-structured-output-benchmark)
* [2026-04-29, 16:00:00](https://news.slashdot.org/story/26/04/29/0357216/should-schools-get-rid-of-homework?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should Schools Get Rid of Homework?](https://news.slashdot.org/story/26/04/29/0357216/should-schools-get-rid-of-homework?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 15:49:57](https://news.ycombinator.com/item?id=47950091) - [Online age verification is the hill to die on](https://x.com/GlennMeder/status/2049088498163216560)
* [2026-04-29, 15:45:25](https://news.ycombinator.com/item?id=47950022) - [Third Editor Fired in Elsevier&apos;s Citation Cartel Crackdown](https://www.chrisbrunet.com/p/third-editor-fired-in-elseviers-citation)
* [2026-04-29, 15:41:00](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss) - [Antarctica Just Saw the Fastest Glacier Collapse Ever Recorded](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss)
* [2026-04-29, 15:39:43](https://news.ycombinator.com/item?id=47949939) - [Cursor Camp](https://neal.fun/cursor-camp/)
* [2026-04-29, 15:17:46](https://news.ycombinator.com/item?id=47949642) - [Mistral Medium 3.5](https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5)
* [2026-04-29, 15:16:21](https://lobste.rs/s/djfjlg/kde_s_30th_anniversary) - [KDE’s 30th anniversary](https://kde.org/anniversaries/30/)
* [2026-04-29, 15:00:00](https://hardware.slashdot.org/story/26/04/29/0347242/humanoid-robots-start-sorting-luggage-in-tokyo-airport-test-amid-labor-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humanoid Robots Start Sorting Luggage In Tokyo Airport Test Amid Labor Shortage](https://hardware.slashdot.org/story/26/04/29/0347242/humanoid-robots-start-sorting-luggage-in-tokyo-airport-test-amid-labor-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 14:51:56](https://lobste.rs/s/dsomuk/end_responsive_images) - [The end of responsive images](https://piccalil.li/blog/the-end-of-responsive-images/)
* [2026-04-29, 14:47:31](https://news.ycombinator.com/item?id=47949204) - [An open-source stethoscope that costs between $2.5 and $5 to produce](https://github.com/GliaX/Stethoscope)
* [2026-04-29, 14:40:20](https://lobste.rs/s/ddrcj1/zed_is_1_0) - [Zed is 1.0](https://zed.dev/blog/zed-1-0)
* [2026-04-29, 14:34:19](https://news.ycombinator.com/item?id=47949027) - [Zed 1.0](https://zed.dev/blog/zed-1-0)
* [2026-04-29, 14:05:42](https://news.ycombinator.com/item?id=47948664) - [How to Build the Future: Demis Hassabis [video]](https://www.youtube.com/watch?v=JNyuX1zoOgU)
* [2026-04-29, 14:00:59](https://news.ycombinator.com/item?id=47948603) - [We need a federation of forges](https://blog.tangled.org/federation/)
* [2026-04-29, 13:36:08](https://lobste.rs/s/ghmidi/secure_signatures_without_private_key) - [Secure signatures without a private key](https://katexochen.aro.bz/posts/reproducible-secure-signatures/)
* [2026-04-29, 12:43:12](https://news.ycombinator.com/item?id=47947525) - [Letting AI play my game – building an agentic test harness to help play-testing](https://blog.jeffschomay.com/letting-ai-play-my-game)
* [2026-04-29, 12:24:02](https://lobste.rs/s/ejsrso/blessed_syntax_ergonomics) - [Blessed Syntax and Ergonomics](https://www.gingerbill.org/article/2026/04/29/blessed-syntax-and-ergonomics/)
* [2026-04-29, 11:25:12](https://news.ycombinator.com/item?id=47946813) - [GitHub – DOS 1.0: Transcription of Tim Paterson&apos;s DOS Printouts](https://github.com/DOS-History/Paterson-Listings)
* [2026-04-29, 11:00:00](https://science.slashdot.org/story/26/04/29/0340243/fda-grants-quick-review-for-3-psychedelic-drug-trials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FDA Grants Quick Review For 3 Psychedelic Drug Trials](https://science.slashdot.org/story/26/04/29/0340243/fda-grants-quick-review-for-3-psychedelic-drug-trials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 10:54:00](https://soylentnews.org/article.pl?sid=26/04/28/0555211&amp;from=rss) - [Meta Signs Multibillion-Dollar Deal With Amazon to Use its CPU Chips for AI](https://soylentnews.org/article.pl?sid=26/04/28/0555211&amp;from=rss)
* [2026-04-29, 10:16:11](https://lobste.rs/s/ewwdm4/ripe_ncc_rpki_exploit_chain) - [RIPE NCC RPKI exploit chain](https://mxsasha.eu/posts/ripe-ncc-rpki-exploit-chain/)
* [2026-04-29, 09:14:37](https://news.ycombinator.com/item?id=47945918) - [Soft launch of open-source code platform for government](https://www.nldigitalgovernment.nl/news/soft-launch-for-government-open-source-code-platform/)
* [2026-04-29, 09:10:49](https://lobste.rs/s/fxwarz/stable_specialization_rust) - [Stable specialization in Rust](https://goldstein.lol/posts/stable-specialization/)
* [2026-04-29, 08:43:45](https://lobste.rs/s/tzqafn/why_i_still_reach_for_lisp_scheme_instead) - [Why I Still Reach for Lisp (&amp; Scheme) Instead of Haskell](https://jointhefreeworld.org/blog/articles/lisps/why-i-still-reach-for-scheme-instead-of-haskell/index.html)
* [2026-04-29, 08:43:17](https://news.ycombinator.com/item?id=47945707) - [Why I still reach for Lisp and Scheme instead of Haskell](https://jointhefreeworld.org/blog/articles/lisps/why-i-still-reach-for-scheme-instead-of-haskell/index.html)
* [2026-04-29, 08:07:16](https://lobste.rs/s/9bkq7o/day_i_logged_1_every_2000_public_ipv4) - [The Day I Logged 1 In Every 2000 Public IPv4: Visualizing The AI Scraper DDoS](https://vulpinecitrus.info/blog/one-in-every-2000-ipv4-visualizing-ddos-ai-web-scrapers/)
* [2026-04-29, 07:00:00](https://mobile.slashdot.org/story/26/04/29/0334222/new-report-finds-some-babies-spend-up-to-eight-hours-a-day-on-screens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Report Finds Some Babies Spend Up To Eight Hours a Day on Screens](https://mobile.slashdot.org/story/26/04/29/0334222/new-report-finds-some-babies-spend-up-to-eight-hours-a-day-on-screens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 06:09:00](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss) - [Firefox Has Quietly Integrated Brave&apos;s Adblock Engine](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss)
* [2026-04-29, 04:17:13](https://lobste.rs/s/yn7tfr/bugs_rust_won_t_catch) - [Bugs Rust Won&apos;t Catch](https://corrode.dev/blog/bugs-rust-wont-catch/)
* [2026-04-29, 03:30:00](https://yro.slashdot.org/story/26/04/29/0311202/musk-testifies-openai-was-created-as-nonprofit-to-counter-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Musk Testifies OpenAI Was Created As Nonprofit To Counter Google](https://yro.slashdot.org/story/26/04/29/0311202/musk-testifies-openai-was-created-as-nonprofit-to-counter-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 03:16:18](https://lobste.rs/s/ccbjxb/warp_is_now_open_source) - [Warp is now open-source](https://www.warp.dev/blog/warp-is-now-open-source)
* [2026-04-29, 03:01:06](https://lobste.rs/s/lpozc6/apple_wants_kill_your_time_capsule_they) - [Apple wants to kill your Time Capsule, but they run NetBSD so they can’t](https://www.osnews.com/story/144845/apple-wants-to-kill-your-time-capsule-but-they-run-netbsd-so-they-cant/)
* [2026-04-29, 02:19:11](https://news.ycombinator.com/item?id=47943499) - [Bugs Rust won&apos;t catch](https://corrode.dev/blog/bugs-rust-wont-catch/)
* [2026-04-29, 01:26:00](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss) - [NASA Shut Down Voyager 1 Science Instrument After Unexpected Power Drop](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss)
* [2026-04-29, 01:11:54](https://lobste.rs/s/a50exb/code_golfing_riki_s_html_templating) - [Code-golfing riki&apos;s HTML templating engine in Julia](https://gist.github.com/OTDE/96584a4a83c73fb02e463eef83170cc3)
* [2026-04-28, 23:00:00](https://developers.slashdot.org/story/26/04/28/1935206/electrical-current-might-be-the-key-to-a-better-cup-of-coffee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Electrical Current Might Be the Key To a Better Cup of Coffee](https://developers.slashdot.org/story/26/04/28/1935206/electrical-current-might-be-the-key-to-a-better-cup-of-coffee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 22:37:54](https://news.ycombinator.com/item?id=47941807) - [Blaster Beam (Musical Instrument)](https://en.wikipedia.org/wiki/Blaster_beam)
* [2026-04-28, 22:00:00](https://science.slashdot.org/story/26/04/28/1923255/apple-vision-pro-used-in-world-first-cataract-surgery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Vision Pro Used In World-First Cataract Surgery](https://science.slashdot.org/story/26/04/28/1923255/apple-vision-pro-used-in-world-first-cataract-surgery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 21:18:39](https://lobste.rs/s/lm0mlt/i_built_my_own_hair_electrolysis_machine) - [I Built My Own Hair Electrolysis Machine](https://www.scd31.com/posts/diy-hair-electrolysis-machine)
* [2026-04-28, 21:17:40](https://news.ycombinator.com/item?id=47940921) - [Before GitHub](https://lucumr.pocoo.org/2026/4/28/before-github/)
* [2026-04-28, 21:00:00](https://games.slashdot.org/story/26/04/28/1919200/sony-rolls-out-30-day-online-drm-check-in-for-playstation-digital-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Rolls Out 30-Day Online DRM Check-In For PlayStation Digital Games](https://games.slashdot.org/story/26/04/28/1919200/sony-rolls-out-30-day-online-drm-check-in-for-playstation-digital-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 20:58:56](https://lobste.rs/s/swbkcl/carrot_disclosure_forgejo) - [Carrot disclosure: Forgejo](https://dustri.org/b/carrot-disclosure-forgejo.html)
* [2026-04-28, 20:00:00](https://news.slashdot.org/story/26/04/28/1913247/apple-introduces-a-cheaper-option-for-app-store-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Introduces a Cheaper Option For App Store Subscriptions](https://news.slashdot.org/story/26/04/28/1913247/apple-introduces-a-cheaper-option-for-app-store-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 19:44:52](https://news.ycombinator.com/item?id=47939579) - [Ghostty is leaving GitHub](https://mitchellh.com/writing/ghostty-leaving-github)
* [2026-04-28, 19:19:50](https://lobste.rs/s/nrbfzz/using_1978_terminal_2026_dec_vt_100) - [Using a 1978 terminal in 2026 (DEC VT-100)](https://nikhiljha.com/posts/vt100/)
* [2026-04-28, 18:40:00](https://soylentnews.org/article.pl?sid=26/04/26/1853229&amp;from=rss) - [Someone Made a Windows 95 Subsystem for Linux](https://soylentnews.org/article.pl?sid=26/04/26/1853229&amp;from=rss)
* [2026-04-28, 14:00:00](https://soylentnews.org/article.pl?sid=26/04/26/1758257&amp;from=rss) - [Raccoons Solve Puzzles for the Fun of It](https://soylentnews.org/article.pl?sid=26/04/26/1758257&amp;from=rss)
* [2026-04-28, 09:43:40](https://lobste.rs/s/exlogg/jjj) - [jjj](https://oppi.li/posts/jjj/)
* [2026-04-28, 09:22:00](https://soylentnews.org/article.pl?sid=26/04/26/1740233&amp;from=rss) - [A Sun is Not Required to Generate Conditions Suitable for Life on Exoplanet Moons](https://soylentnews.org/article.pl?sid=26/04/26/1740233&amp;from=rss)
* [2026-04-28, 05:46:00](https://soylentnews.org/article.pl?sid=26/04/26/1727213&amp;from=rss) - [Electric Field Tunes Vibrations to Ease Heat Transfer](https://soylentnews.org/article.pl?sid=26/04/26/1727213&amp;from=rss)
* [2026-04-28, 01:04:00](https://soylentnews.org/article.pl?sid=26/04/26/0035245&amp;from=rss) - [Why Do I Feel Like, Somebody&apos;s Watching Me?](https://soylentnews.org/article.pl?sid=26/04/26/0035245&amp;from=rss)
* [2026-04-27, 20:20:00](https://soylentnews.org/politics/article.pl?sid=26/04/26/0032224&amp;from=rss) - [Big Tech Group Jumps The Gun On Unreleased Bill, Raising Questions About Cozy Ties With Lawmakers](https://soylentnews.org/politics/article.pl?sid=26/04/26/0032224&amp;from=rss)
* [2026-04-27, 15:33:00](https://soylentnews.org/article.pl?sid=26/04/26/0029226&amp;from=rss) - [Privacy Email Service Tuta Now Also Has Cloud Storage with Quantum-Resistant Encryption](https://soylentnews.org/article.pl?sid=26/04/26/0029226&amp;from=rss)
* [2026-04-27, 14:07:25](https://news.ycombinator.com/item?id=47921802) - [Postgres&apos;s lateral joins allow for quite the good eDSL](https://bensimms.moe/postgres-lateral-makes-quite-a-good-dsl/)
* [2026-04-27, 10:49:00](https://soylentnews.org/article.pl?sid=26/04/25/1736211&amp;from=rss) - [Surveillance Pricing Set to be Banned in Maryland. Could This be the End of the Predatory Retail?](https://soylentnews.org/article.pl?sid=26/04/25/1736211&amp;from=rss)
* [2026-04-27, 06:04:00](https://soylentnews.org/article.pl?sid=26/04/25/1727249&amp;from=rss) - [NASA&apos;s Curiosity Rover Found Promising Organic Chemicals on Mars](https://soylentnews.org/article.pl?sid=26/04/25/1727249&amp;from=rss)
* [2026-04-27, 01:20:00](https://soylentnews.org/article.pl?sid=26/04/25/1722204&amp;from=rss) - [The Newest Influencer Health Hack? Nicotine](https://soylentnews.org/article.pl?sid=26/04/25/1722204&amp;from=rss)
* [2026-04-26, 20:34:00](https://soylentnews.org/article.pl?sid=26/04/25/1336233&amp;from=rss) - [Chinese Scientists Aim to Save Moore&apos;s Law by Mass-Growing 2D Materials That &apos;Outclass Silicon&apos;](https://soylentnews.org/article.pl?sid=26/04/25/1336233&amp;from=rss)
* [2026-04-26, 15:53:00](https://soylentnews.org/article.pl?sid=26/04/25/1332245&amp;from=rss) - [The Surprising Origin of 4 Features That Superglue Kids and Adults to Screens](https://soylentnews.org/article.pl?sid=26/04/25/1332245&amp;from=rss)
* [2026-04-26, 11:05:00](https://soylentnews.org/article.pl?sid=26/04/24/1514234&amp;from=rss) - [A New Liquid Battery Stores Solar Heat for Weeks](https://soylentnews.org/article.pl?sid=26/04/24/1514234&amp;from=rss)
* [2026-04-26, 06:20:00](https://soylentnews.org/article.pl?sid=26/04/24/1241239&amp;from=rss) - [European Civil Servants Are Being Forced Off WhatsApp](https://soylentnews.org/article.pl?sid=26/04/24/1241239&amp;from=rss)
* [2026-04-26, 01:36:00](https://soylentnews.org/article.pl?sid=26/04/24/1238217&amp;from=rss) - [The Dumbest Hack of the Year Exposed a Very Real Problem](https://soylentnews.org/article.pl?sid=26/04/24/1238217&amp;from=rss)
* [2026-04-25, 20:54:00](https://soylentnews.org/article.pl?sid=26/04/24/1234243&amp;from=rss) - [US Wants Rare Earth Independence From China — but Can DARPA Actually Make It Work?](https://soylentnews.org/article.pl?sid=26/04/24/1234243&amp;from=rss)
* [2026-04-25, 16:08:00](https://soylentnews.org/article.pl?sid=26/04/24/1232232&amp;from=rss) - [Contrary to Popular Superstition, AES 128 is Just Fine in a Post](https://soylentnews.org/article.pl?sid=26/04/24/1232232&amp;from=rss)
* [2026-04-25, 11:22:00](https://soylentnews.org/article.pl?sid=26/04/24/1227222&amp;from=rss) - [France Keeps Breaking the Internet to Stop Piracy, Even Though It&apos;s Not Working](https://soylentnews.org/article.pl?sid=26/04/24/1227222&amp;from=rss)
* [2026-04-25, 06:38:00](https://soylentnews.org/article.pl?sid=26/04/24/1220209&amp;from=rss) - [Physicists Witness Pinpricks of Darkness Moving Faster Than the Speed of Light ‪](https://soylentnews.org/article.pl?sid=26/04/24/1220209&amp;from=rss)
* [2026-04-25, 01:56:00](https://soylentnews.org/article.pl?sid=26/04/24/0247228&amp;from=rss) - [Linux Mint Plans for Longer Development Cycle](https://soylentnews.org/article.pl?sid=26/04/24/0247228&amp;from=rss)
