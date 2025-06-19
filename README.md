# [News Summary](https://kherrick.github.io/news-summary/)

## Tech and Innovation

* [Six-month-old, solo-owned vibe coder Base44 sells to Wix for $80M cash](https://techcrunch.com/2025/06/18/6-month-old-solo-owned-vibe-coder-base44-sells-to-wix-for-80m-cash/) ([comments](https://news.ycombinator.com/item?id=44316920))

* [Liberux Nexx: An interview with Liberux about their made-in-EU OSHW Linux Phone](https://linmob.net/liberux-nexx-an-interview-with-liberux/) ([comments](https://news.ycombinator.com/item?id=44316665))

* [Agentic Engineering in Action with Mitchell Hashimoto](https://www.youtube.com/watch?v=XyQ4ZTS5dGw) ([comments](https://lobste.rs/s/op2gn3/agentic_engineering_action_with))

* [The Zed Debugger Is Here](https://zed.dev/blog/debugger) ([comments](https://news.ycombinator.com/item?id=44314977))

* [Elliptic Curves as Art](https://elliptic-curves.art/) ([comments](https://news.ycombinator.com/item?id=44315321))

## Business and Investments

* [TI to invest $60B to manufacture foundational semiconductors in the U.S.](https://www.ti.com/about-ti/newsroom/news-releases/2025/texas-instruments-plans-to-invest-more-than--60-billion-to-manufacture-billions-of-foundational-semiconductors-in-the-us.html) ([comments](https://news.ycombinator.com/item?id=44314759))

* [Texas Instruments To Invest $60 Billion To Make Semiconductors In US](https://news.slashdot.org/story/25/06/18/2310223/texas-instruments-to-invest-60-billion-to-make-semiconductors-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44314759))

## Security and Cyber Threats

* [New Linux Flaws Enable Full Root Access via PAM and Udisks Across Major Distributions](https://thehackernews.com/2025/06/new-linux-flaws-enable-full-root-access.html) ([comments](https://lobste.rs/s/h0x2za/new_linux_flaws_enable_full_root_access))

* [Zero-Click AI Vulnerability Exposes Microsoft 365 Copilot Data Without User Interaction](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss))

* [Websites are tracking you via browser fingerprinting](https://engineering.tamu.edu/news/2025/06/websites-are-tracking-you-via-browser-fingerprinting.html) ([comments](https://news.ycombinator.com/item?id=44313206))

## AI and Machine Learning

* [Midjourney Launches Its First AI Video Generation Model, V1](https://slashdot.org/story/25/06/18/1935234/midjourney-launches-its-first-ai-video-generation-model-v1?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/25/06/18/1935234/midjourney-launches-its-first-ai-video-generation-model-v1?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Andrej Karpathy: Software in the era of AI [video]](https://www.youtube.com/watch?v=LCEmiRjPEtQ) ([comments](https://news.ycombinator.com/item?id=44314423))

## Space and Science

* [SpaceX Starship 36 Anomaly](https://twitter.com/NASASpaceflight/status/1935548909805601020) ([comments](https://news.ycombinator.com/item?id=44315529))

* [Behold the First Images of the Sun’s South Pole](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss))

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

* [2025-06-19, 09:54:00](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss) - [Reddit User Surprised When 1960s Computer Panel Emerged From Collapsed Family Garage](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss)
* [2025-06-19, 09:31:14](https://news.ycombinator.com/item?id=44316920) - [Six-month-old, solo-owned vibe coder Base44 sells to Wix for $80M cash](https://techcrunch.com/2025/06/18/6-month-old-solo-owned-vibe-coder-base44-sells-to-wix-for-80m-cash/)
* [2025-06-19, 08:41:34](https://news.ycombinator.com/item?id=44316665) - [Liberux Nexx: An interview with Liberux about their made-in-EU OSHW Linux Phone](https://linmob.net/liberux-nexx-an-interview-with-liberux/)
* [2025-06-19, 07:26:04](https://lobste.rs/s/6wndbg/files_repository_file_generation_flake) - [files: In-repository file generation flake-parts module](https://github.com/mightyiam/files)
* [2025-06-19, 07:10:03](https://lobste.rs/s/tmwtbd/more_frontend_web_tricks) - [More Frontend Web Tricks](https://kaiwenwang.com/writing/more-frontend-web-tricks)
* [2025-06-19, 07:00:00](https://tech.slashdot.org/story/25/06/19/0046242/silicon-valley-execs-join-the-army-as-officers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Silicon Valley Execs Join the Army As Officers](https://tech.slashdot.org/story/25/06/19/0046242/silicon-valley-execs-join-the-army-as-officers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 06:38:13](https://lobste.rs/s/op2gn3/agentic_engineering_action_with) - [Agentic Engineering in Action with Mitchell Hashimoto](https://www.youtube.com/watch?v=XyQ4ZTS5dGw)
* [2025-06-19, 06:37:21](https://lobste.rs/s/yrqfcz/now_might_be_best_time_learn_software) - [Now might be the best time to learn software development](https://substack.com/home/post/p-165655726)
* [2025-06-19, 06:37:07](https://lobste.rs/s/blwshw/charmbracelet_fang_cli_starter_kit) - [charmbracelet/fang: The CLI starter kit](https://github.com/charmbracelet/fang)
* [2025-06-19, 06:35:48](https://lobste.rs/s/rs7a1v/i_feel_open_source_has_turned_into_two) - [I feel open source has turned into two worlds](https://utcc.utoronto.ca/~cks/space/blog/tech/OpenSourceTwoWorlds)
* [2025-06-19, 06:28:32](https://lobste.rs/s/h0x2za/new_linux_flaws_enable_full_root_access) - [New Linux Flaws Enable Full Root Access via PAM and Udisks Across Major Distributions](https://thehackernews.com/2025/06/new-linux-flaws-enable-full-root-access.html)
* [2025-06-19, 05:08:00](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss) - [Zero-Click AI Vulnerability Exposes Microsoft 365 Copilot Data Without User Interaction](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss)
* [2025-06-19, 04:49:32](https://news.ycombinator.com/item?id=44315529) - [SpaceX Starship 36 Anomaly](https://twitter.com/NASASpaceflight/status/1935548909805601020)
* [2025-06-19, 04:02:27](https://news.ycombinator.com/item?id=44315321) - [Elliptic Curves as Art](https://elliptic-curves.art/)
* [2025-06-19, 03:30:00](https://tech.slashdot.org/story/25/06/18/2317216/scammers-use-google-ads-to-inject-phony-help-lines-on-apple-microsoft-sites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scammers Use Google Ads To Inject Phony Help Lines On Apple, Microsoft Sites](https://tech.slashdot.org/story/25/06/18/2317216/scammers-use-google-ads-to-inject-phony-help-lines-on-apple-microsoft-sites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 03:27:39](https://news.ycombinator.com/item?id=44315185) - [Dr. Demento Announces Retirement After 55-Year Radio Career](https://sopghreporter.com/2025/06/01/dr-demento-announces-retirement/)
* [2025-06-19, 02:42:15](https://news.ycombinator.com/item?id=44314977) - [The Zed Debugger Is Here](https://zed.dev/blog/debugger)
* [2025-06-19, 01:50:47](https://news.ycombinator.com/item?id=44314759) - [TI to invest $60B to manufacture foundational semiconductors in the U.S.](https://www.ti.com/about-ti/newsroom/news-releases/2025/texas-instruments-plans-to-invest-more-than--60-billion-to-manufacture-billions-of-foundational-semiconductors-in-the-us.html)
* [2025-06-19, 01:20:00](https://news.slashdot.org/story/25/06/18/2310223/texas-instruments-to-invest-60-billion-to-make-semiconductors-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Texas Instruments To Invest $60 Billion To Make Semiconductors In US](https://news.slashdot.org/story/25/06/18/2310223/texas-instruments-to-invest-60-billion-to-make-semiconductors-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 00:41:00](https://yro.slashdot.org/story/25/06/18/1951212/major-oil-companies-face-first-climate-death-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Major Oil Companies Face First &apos;Climate Death&apos; Lawsuit](https://yro.slashdot.org/story/25/06/18/1951212/major-oil-companies-face-first-climate-death-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 00:33:21](https://news.ycombinator.com/item?id=44314423) - [Andrej Karpathy: Software in the era of AI [video]](https://www.youtube.com/watch?v=LCEmiRjPEtQ)
* [2025-06-19, 00:22:00](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss) - [Honda Shows Low Speed, Narrow BEV for City Delivery](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss)
* [2025-06-19, 00:07:26](https://lobste.rs/s/7l446f/should_we_design_for_iffy_internet) - [Should we design for iffy internet?](https://bytes.zone/posts/should-we-design-for-iffy-internet/)
* [2025-06-19, 00:02:00](https://mobile.slashdot.org/story/25/06/18/1945255/apple-posts-strongest-two-month-iphone-growth-since-pandemic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Posts Strongest Two-Month iPhone Growth Since Pandemic](https://mobile.slashdot.org/story/25/06/18/1945255/apple-posts-strongest-two-month-iphone-growth-since-pandemic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 23:59:47](https://news.ycombinator.com/item?id=44314289) - [MCP Specification – version 2025-06-18 changes](https://modelcontextprotocol.io/specification/2025-06-18/changelog)
* [2025-06-18, 23:31:32](https://lobste.rs/s/s0inoo/accessibility_programming_doesn_t_feel) - [Accessibility Programming Doesn&apos;t Feel Accessible](https://acidiclight.dev/blog/accessibility-does-not-feel-accessible/)
* [2025-06-18, 23:20:00](https://slashdot.org/story/25/06/18/1935234/midjourney-launches-its-first-ai-video-generation-model-v1?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Midjourney Launches Its First AI Video Generation Model, V1](https://slashdot.org/story/25/06/18/1935234/midjourney-launches-its-first-ai-video-generation-model-v1?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 23:17:10](https://news.ycombinator.com/item?id=44314085) - [Show HN: Unregistry – “docker push” directly to servers without a registry](https://github.com/psviderski/unregistry)
* [2025-06-18, 23:11:03](https://news.ycombinator.com/item?id=44314054) - [New US visa rules will force foreign students to unlock social media profiles](https://www.theguardian.com/us-news/2025/jun/18/social-media-student-visa-screening)
* [2025-06-18, 22:53:08](https://lobste.rs/s/tuze84/s7_scheme) - [s7 scheme](https://ccrma.stanford.edu/software/snd/snd/s7.html)
* [2025-06-18, 22:40:32](https://news.ycombinator.com/item?id=44313901) - [Fang, the CLI Starter Kit](https://github.com/charmbracelet/fang)
* [2025-06-18, 22:40:00](https://it.slashdot.org/story/25/06/18/1930216/austrian-government-agrees-on-plan-to-allow-monitoring-of-secure-messaging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Austrian Government Agrees On Plan To Allow Monitoring of Secure Messaging](https://it.slashdot.org/story/25/06/18/1930216/austrian-government-agrees-on-plan-to-allow-monitoring-of-secure-messaging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 22:00:00](https://yro.slashdot.org/story/25/06/18/1921253/napster-and-sonos-sued-for-millions-in-unpaid-music-royalties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Napster and Sonos Sued For Millions In Unpaid Music Royalties](https://yro.slashdot.org/story/25/06/18/1921253/napster-and-sonos-sued-for-millions-in-unpaid-music-royalties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 21:45:46](https://news.ycombinator.com/item?id=44313550) - [The Missing 11th of the Month](https://drhagen.com/blog/the-missing-11th-of-the-month/)
* [2025-06-18, 21:39:09](https://lobste.rs/s/1nyzfj/it_s_true_we_don_t_care_about_accessibility) - [It’s True, “We” Don’t Care About Accessibility on Linux](https://tesk.page/2025/06/18/its-true-we-dont-care-about-accessibility-on-linux/)
* [2025-06-18, 21:21:26](https://news.ycombinator.com/item?id=44313379) - [Bento: A Steam Deck in a Keyboard](https://github.com/lunchbox-computer/bento)
* [2025-06-18, 21:20:00](https://yro.slashdot.org/story/25/06/18/1917222/facebook-now-supports-passkeys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Now Supports Passkeys](https://yro.slashdot.org/story/25/06/18/1917222/facebook-now-supports-passkeys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 21:08:20](https://lobste.rs/s/5moehg/quick_notes_on_brief_agentic_coding) - [Quick notes on a brief agentic coding experience](https://olano.dev/blog/agentic-coding-experience/)
* [2025-06-18, 20:55:06](https://news.ycombinator.com/item?id=44313206) - [Websites are tracking you via browser fingerprinting](https://engineering.tamu.edu/news/2025/06/websites-are-tracking-you-via-browser-fingerprinting.html)
* [2025-06-18, 20:40:00](https://tech.slashdot.org/story/25/06/18/1912202/waymos-robotaxis-are-coming-back-to-new-york-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo&apos;s Robotaxis Are Coming Back to New York City](https://tech.slashdot.org/story/25/06/18/1912202/waymos-robotaxis-are-coming-back-to-new-york-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 20:16:53](https://lobste.rs/s/ncg3v3/lisp_icing_cake) - [Lisp: Icing or Cake?](https://dthompson.us/posts/lisp-icing-or-cake.html)
* [2025-06-18, 20:00:00](https://news.slashdot.org/story/25/06/18/197203/googles-frighteningly-good-veo-3-ai-videos-to-be-integrated-with-youtube-shorts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Frighteningly Good Veo 3 AI Videos To Be Integrated With YouTube Shorts](https://news.slashdot.org/story/25/06/18/197203/googles-frighteningly-good-veo-3-ai-videos-to-be-integrated-with-youtube-shorts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 19:38:23](https://lobste.rs/s/qgmjfe/gcc_glibc_stack_unwinding_relocations) - [GCC, glibc, stack unwinding and relocations – A war story](https://blog.sergiodj.net/posts/gcc-glibc-stack-unwinding-relocations-bug/)
* [2025-06-18, 19:38:00](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss) - [Trump&apos;s Cuts to NASA and the National Science Foundation Will Have Huge Consequences](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss)
* [2025-06-18, 19:22:00](https://it.slashdot.org/story/25/06/18/1855243/microsoft-planning-thousands-more-job-cuts-aimed-at-salespeople?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Planning Thousands More Job Cuts Aimed at Salespeople](https://it.slashdot.org/story/25/06/18/1855243/microsoft-planning-thousands-more-job-cuts-aimed-at-salespeople?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 18:41:00](https://news.slashdot.org/story/25/06/18/1759205/boeing-787s-emergency-power-system-likely-active-before-air-india-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boeing 787&apos;s Emergency-Power System Likely Active Before Air India Crash](https://news.slashdot.org/story/25/06/18/1759205/boeing-787s-emergency-power-system-likely-active-before-air-india-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 18:11:35](https://lobste.rs/s/tdlede/deep_dive_explainer_on_ink_switch_s_beekem) - [A deep-dive explainer on Ink and Switch&apos;s BeeKEM protocol](https://meri.garden/a-deep-dive-explainer-on-beekem-protocol/)
* [2025-06-18, 18:00:00](https://mobile.slashdot.org/story/25/06/18/1640225/nfc-release-15-extends-tap-to-pay-range-from-05cm-to-2cm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NFC Release 15 Extends Tap-to-Pay Range From 0.5cm To 2cm](https://mobile.slashdot.org/story/25/06/18/1640225/nfc-release-15-extends-tap-to-pay-range-from-05cm-to-2cm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 17:57:32](https://lobste.rs/s/rwbtwd/zed_debugger_is_here) - [The Zed Debugger is Here](https://zed.dev/blog/debugger)
* [2025-06-18, 17:32:00](https://news.ycombinator.com/item?id=44311781) - [PWM flicker: Invisible light that&apos;s harming our health?](https://caseorganic.medium.com/the-invisible-light-thats-harming-our-health-and-how-we-can-light-things-better-d3916de90521)
* [2025-06-18, 17:26:22](https://lobste.rs/s/mwdh7t/analysing_rust_crates_for_weekend) - [Analysing Rust crates for weekend (hobbyist) vs weekday (working-dev) downloads](https://boydkane.com/projects/crates-download-ratio)
* [2025-06-18, 17:20:00](https://games.slashdot.org/story/25/06/18/174256/xbox-president-were-working-to-ensure-windows-is-the-number-one-platform-for-gaming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xbox President: We&apos;re Working To Ensure Windows Is the Number One Platform For Gaming](https://games.slashdot.org/story/25/06/18/174256/xbox-president-were-working-to-ensure-windows-is-the-number-one-platform-for-gaming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 17:19:31](https://news.ycombinator.com/item?id=44311682) - [Game Hacking – Valve Anti-Cheat (VAC)](https://codeneverdies.github.io/posts/gh-2/)
* [2025-06-18, 16:26:35](https://news.ycombinator.com/item?id=44311241) - [The unreasonable effectiveness of fuzzing for porting programs](https://rjp.io/blog/2025-06-17-unreasonable-effectiveness-of-fuzzing)
* [2025-06-18, 16:23:46](https://news.ycombinator.com/item?id=44311217) - [Writing documentation for AI: best practices](https://docs.kapa.ai/improving/writing-best-practices)
* [2025-06-18, 15:49:53](https://news.ycombinator.com/item?id=44310944) - [My iPhone 8 Refuses to Die: Now It&apos;s a Solar-Powered Vision OCR Server](https://terminalbytes.com/iphone-8-solar-powered-vision-ocr-server/)
* [2025-06-18, 15:22:49](https://lobste.rs/s/boq7tt/cock_li_email_provider_data_leak_from) - [Cock.li email provider data leak from roundcube](https://mail.cock.li/)
* [2025-06-18, 15:06:53](https://lobste.rs/s/lalc7r/moving_on_from_nix) - [Moving on from Nix](https://carlosbecker.com/posts/bye-nix/)
* [2025-06-18, 14:50:00](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss) - [Google&apos;s Advanced Protection Arrives on Android: Should You Use It?](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss)
* [2025-06-18, 14:05:58](https://lobste.rs/s/8t6uxp/server_doesn_t_render_anything) - [The Server Doesn&apos;t Render Anything](https://unplannedobsolescence.com/blog/the-server-doesnt-render/)
* [2025-06-18, 13:49:12](https://lobste.rs/s/h08v9z/plight_misunderstood_memory_ordering) - [The plight of the misunderstood memory ordering](https://www.grayolson.me/blog/posts/misunderstood-memory-ordering/)
* [2025-06-18, 12:59:58](https://news.ycombinator.com/item?id=44309520) - [Homomorphically Encrypting CRDTs](https://jakelazaroff.com/words/homomorphically-encrypted-crdts/)
* [2025-06-18, 12:33:49](https://news.ycombinator.com/item?id=44309320) - [Show HN: Workout.cool – Open-source fitness coaching platform](https://github.com/Snouzy/workout-cool)
* [2025-06-18, 10:04:00](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss) - [The Effect of Physical Fitness on Mortality is Overestimated](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss)
* [2025-06-18, 05:17:00](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss) - [SmartAttack Uses Smartwatches to Steal Data From Air-Gapped Systems](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss)
* [2025-06-18, 04:24:56](https://lobste.rs/s/imjzlb/why_i_won_t_use_ai) - [Why I Won&apos;t Use AI](https://agentultra.com/blog/why-i-wont-use-ai/index.html)
* [2025-06-18, 00:32:00](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss) - [Kali Linux 2025.2 released with 13 new tools, car hacking updates](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss)
* [2025-06-18, 00:14:02](https://lobste.rs/s/cy2x77/building_json_on_command_line_is) - [Building JSON on the Command Line is Obnoxious](https://blog.stulta.dev/posts/annoying_json/)
* [2025-06-17, 21:01:41](https://lobste.rs/s/i4cjur/kicad_wayland_support) - [KiCad and Wayland Support](https://www.kicad.org/blog/2025/06/KiCad-and-Wayland-Support/)
* [2025-06-17, 20:48:04](https://lobste.rs/s/jamcvc/resurrecting_dead_torrent_tracker) - [Resurrecting a dead torrent tracker and finding 3 million peers](https://kianbradley.com/2025/06/15/resurrecting-a-dead-tracker.html)
* [2025-06-17, 19:45:00](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss) - [You Don&apos;t Have to Almost Die to be Happy at Work, but It Helps](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss)
* [2025-06-17, 15:05:00](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss) - [4Chan Under Investigation by Uk Ofcom Over Online Safety Concerns](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss)
* [2025-06-17, 14:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss) - [This Is Not A Drill](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss)
* [2025-06-17, 13:51:20](https://news.ycombinator.com/item?id=44299233) - [Visual History of the Latin Alphabet](https://uclab.fh-potsdam.de/arete/en)
* [2025-06-17, 10:18:00](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss) - [Behold the First Images of the Sun’s South Pole](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss)
* [2025-06-17, 05:30:00](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss) - [Can We Stop Big Tech From Controlling the Internet With AI Agents?](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss)
* [2025-06-17, 02:53:55](https://news.ycombinator.com/item?id=44295333) - [Law as Rhetoric, Rhetoric as Law: The Arts of Cultural and Communal Life (1985) [pdf]](https://www.lwionline.org/sites/default/files/2016-09/v5%20White.pdf)
* [2025-06-17, 00:43:00](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss) - [TSMC Slows Down Global Plans Due to Soft Demand, but Accelerates Arizona Fab Plans by Six Months](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss)
* [2025-06-16, 19:56:00](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss) - [Washington Post in Talks With Substack About Using its Writers](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss)
* [2025-06-16, 15:11:00](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss) - [Huawei CEO Says Washington Has Exaggerated its Achievements, Saying the Company Isn&apos;t That Powerful](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss)
* [2025-06-16, 13:23:05](https://news.ycombinator.com/item?id=44289276) - [3D printable 6\&quot; f/5 compact travel telescope model](https://www.printables.com/model/1325533-smallest-telescope-kit-for-150750)
* [2025-06-16, 12:32:59](https://news.ycombinator.com/item?id=44288941) - [Show HN: VS Code extension to share code snippets instantly](https://snippetshare.dev)
* [2025-06-16, 10:25:22](https://news.ycombinator.com/item?id=44288154) - [Citizen science illuminates the nature of city lights](https://www.nature.com/articles/s44284-025-00239-5)
* [2025-06-16, 10:25:00](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss) - [Buried Under 2 Kilometers of Antarctic Ice, Scientists Find a 34-Million-Year-Old Lost World](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss)
* [2025-06-16, 09:48:30](https://news.ycombinator.com/item?id=44287964) - [The Matrix (1999) Filming Locations – Shot-for-Shot – Sydney, Australia [video]](https://www.youtube.com/watch?v=UVf7rMqnwI0)
* [2025-06-16, 07:02:40](https://news.ycombinator.com/item?id=44287248) - [Getting Started Strudel](https://strudel.cc/workshop/getting-started/)
* [2025-06-16, 05:41:00](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss) - [Photonic Processor Could Streamline 6G Wireless Signal Processing](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss)
* [2025-06-16, 00:58:00](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss) - [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss)
* [2025-06-15, 20:12:00](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss) - [Nematode Tower Power](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss)
* [2025-06-15, 15:26:00](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss) - [\&quot;Impossible\&quot; Particle That Hit Earth May Have Been Dark Matter](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss)
* [2025-06-15, 10:41:00](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss) - [RIP: Bill Atkinson, Co-Creator Of Apple Lisa And Mac](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss)
* [2025-06-15, 05:57:00](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss) - [Navy Backs Right to Repair After $13B Carrier Goes Half-Fed](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss)
* [2025-06-15, 01:13:00](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss) - [Stay Hungry,  Stay Foolish ... 20 Years on](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss)
