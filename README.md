# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Innovations and Hardware

* [Mysterious Antimatter Physics Discovered at the Large Hadron Collider](https://science.slashdot.org/story/25/07/21/0430256/mysterious-antimatter-physics-discovered-at-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Recent findings at the Large Hadron Collider shed light on antimatter's surprising properties. [Comments](https://news.ycombinator.com/item?id=44633344).

* [For Algorithms, a Little Memory Outweighs a Lot of Time](https://soylentnews.org/article.pl?sid=25/07/20/0228244&from=rss) - An exploration of algorithm efficiency by leveraging memory to reduce computational overhead. [Comments](https://lobste.rs/s/tpcm7h).

* [Next-generation Peltier cooling: Staying cool without refrigerants](https://news.samsung.com/global/interview-staying-cool-without-refrigerants-how-samsung-is-pioneering-next-generation-peltier-cooling) - Samsung pioneers a new approach to cooling with Peltier technology. [Comments](https://news.ycombinator.com/item?id=44628930).

* [Holographic Ribbon Aims To Oust Magnetic Tape With 50-Year Life Span And 200Tb Per Cartridge](https://soylentnews.org/article.pl?sid=25/07/16/182208&from=rss) - An alternative to magnetic tape with massive storage and longevity is in development. [Comments](https://news.ycombinator.com/item?id=44592456).

## Software and Programming

* [Safe Cell field projection in Rust (2020)](https://www.abubalay.com/blog/2020/01/05/cell-field-projection) - Technical dive into safe cell field projection within the Rust programming language. [Comments](https://lobste.rs/s/hxgrd2/safe_cell_field_projection_rust_2020).

* [Why Some Satellites Use NetBSD?](https://machaddr.substack.com/p/why-some-satellites-use-netbsd) - Insights into why a lightweight OS like NetBSD is preferred for some satellite systems. [Comments](https://lobste.rs/s/w2prn3/why_some_satellites_use_netbsd).

* [How do you bundle application data in different languages?](https://lobste.rs/s/dvzkbd/how_do_you_bundle_application_data) - Best practices and tools developers use across various languages to package application data. [Comments](https://lobste.rs/s/dvzkbd).

## Cybersecurity and Risks

* [Tens of Thousands of SharePoint Servers at Risk. Microsoft Issues No Patch](https://it.slashdot.org/story/25/07/20/2340220/tens-of-thousands-of-sharepoint-servers-at-risk-microsoft-issues-no-patch?utm_source=rss1.0mainlinkanon&utm_medium=feed) - SharePoint vulnerability leaves organizations exposed without official fix. [Comments](https://lobste.rs/s/bikfyw).

* [Remote Access Trojan (RAT) Found in the AUR (Arch Linux User Repository)](https://soylentnews.org/article.pl?sid=25/07/20/1854256&from=rss) - Trojan identified in Arch Linux repositories highlighting resource trust challenges. [Comments](https://lobste.rs/s/xldll9).

* [Vibe coding service Replit deleted production database, faked data, told fibs](https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/) - Allegations surface on mishandling of production data by Replit. [Comments](https://news.ycombinator.com/item?id=44632575).

## Space Exploration and Discoveries

* ['Fossil' Discovered Beyond Pluto Implies 'Something Dramatic' Happened 400M Years Ago](https://science.slashdot.org/story/25/07/21/0120233/fossil-discovered-beyond-pluto-implies-something-dramatic-happened-400m-years-ago?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New discovery beyond Pluto suggests historic cosmic events. [Comments](https://news.ycombinator.com/item?id=44631853).

* [Merger of Two Massive Black Holes is One for the Record Books](https://soylentnews.org/article.pl?sid=25/07/15/1735235&from=rss) - Astronomical records document colossal black hole merger event. [Comments](https://news.ycombinator.com/item?id=44597512).

## Historical Perspectives

* [Open, Free, and Completely Ignored: The Strange Afterlife of Symbian](https://soylentnews.org/article.pl?sid=25/07/19/1538201&from=rss) - A look back at the rise and fall of the Symbian OS in the mobile market. [Comments](https://news.ycombinator.com/item?id=44631547).

* [Two Guys Hated Using Comcast, So They Built Their Own Fiber ISP](https://soylentnews.org/article.pl?sid=25/07/18/0136203&from=rss) - A story of persistence: building an alternative to corporate ISPs. [Comments](https://lobste.rs/s/fibop8).

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

* [2025-07-21, 10:03:07](https://lobste.rs/s/hxgrd2/safe_cell_field_projection_rust_2020) - [Safe Cell field projection in Rust (2020)](https://www.abubalay.com/blog/2020/01/05/cell-field-projection)
* [2025-07-21, 08:14:44](https://lobste.rs/s/dvzkbd/how_do_you_bundle_application_data) - [How do you bundle application data in different languages?](https://lobste.rs/s/dvzkbd/how_do_you_bundle_application_data)
* [2025-07-21, 08:04:00](https://news.slashdot.org/story/25/07/21/0557216/should-californias-grid-join-a-larger-regional-electricity-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should California&apos;s Grid Join a Larger Regional Electricity Market?](https://news.slashdot.org/story/25/07/21/0557216/should-californias-grid-join-a-larger-regional-electricity-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 07:20:55](https://news.ycombinator.com/item?id=44632575) - [Vibe coding service Replit deleted production database, faked data, told fibs](https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/)
* [2025-07-21, 06:15:05](https://news.ycombinator.com/item?id=44632240) - [How to handle people dismissing io_uring as insecure?](https://github.com/axboe/liburing/discussions/1047)
* [2025-07-21, 06:14:13](https://lobste.rs/s/w2prn3/why_some_satellites_use_netbsd) - [Why Some Satellites Use NetBSD?](https://machaddr.substack.com/p/why-some-satellites-use-netbsd)
* [2025-07-21, 06:09:00](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss) - [For Algorithms, a Little Memory Outweighs a Lot of Time](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss)
* [2025-07-21, 04:34:00](https://science.slashdot.org/story/25/07/21/0430256/mysterious-antimatter-physics-discovered-at-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mysterious Antimatter Physics Discovered at the Large Hadron Collider](https://science.slashdot.org/story/25/07/21/0430256/mysterious-antimatter-physics-discovered-at-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 03:41:23](https://news.ycombinator.com/item?id=44631594) - [ESP32-Faikin: ESP32 based module to control Daikin aircon units](https://github.com/revk/ESP32-Faikin)
* [2025-07-21, 03:38:31](https://lobste.rs/s/zqttvz/esp32_faikin_esp32_based_module_control) - [ESP32-Faikin: ESP32 based module to control Daikin aircon units](https://github.com/revk/ESP32-Faikin)
* [2025-07-21, 01:44:00](https://science.slashdot.org/story/25/07/21/0120233/fossil-discovered-beyond-pluto-implies-something-dramatic-happened-400m-years-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Fossil&apos; Discovered Beyond Pluto Implies &apos;Something Dramatic&apos; Happened 400M Years Ago](https://science.slashdot.org/story/25/07/21/0120233/fossil-discovered-beyond-pluto-implies-something-dramatic-happened-400m-years-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 01:40:05](https://lobste.rs/s/25zyzd/tools_trade) - [Tools of the Trade](https://www.youtube.com/watch?v=YNtoDGS4uak)
* [2025-07-21, 01:22:00](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss) - [Open, Free, and Completely Ignored: The Strange Afterlife of Symbian](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss)
* [2025-07-21, 01:15:55](https://news.ycombinator.com/item?id=44630927) - [Log by time, not by count](https://johnscolaro.xyz/blog/log-by-time-not-by-count)
* [2025-07-21, 00:59:34](https://lobste.rs/s/bd2ssn/is_there_any_good_onboarding_saas_tool_for) - [Is there any good onboarding SaaS tool for iOS apps?](https://lobste.rs/s/bd2ssn/is_there_any_good_onboarding_saas_tool_for)
* [2025-07-21, 00:33:04](https://news.ycombinator.com/item?id=44630724) - [Agents built from alloys](https://xbow.com/blog/alloy-agents/)
* [2025-07-21, 00:16:25](https://news.ycombinator.com/item?id=44630648) - [Show HN: X11 desktop widget that shows location of your network peers on a map](https://github.com/h2337/connmap)
* [2025-07-20, 23:44:00](https://it.slashdot.org/story/25/07/20/2340220/tens-of-thousands-of-sharepoint-servers-at-risk-microsoft-issues-no-patch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Tens of Thousands&apos; of SharePoint Servers at Risk. Microsoft Issues No Patch](https://it.slashdot.org/story/25/07/20/2340220/tens-of-thousands-of-sharepoint-servers-at-risk-microsoft-issues-no-patch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 23:37:07](https://lobste.rs/s/upfxm3/bad_apple_cd_g_on_karaoke_machine) - [Bad Apple!! CD+G on a karaoke machine](https://gashlin.net/blog/pages/2025-07-19-bad-apple-cdg.html)
* [2025-07-20, 23:32:43](https://lobste.rs/s/tpmdss/why_lexing_parsing_should_be_separate) - [Why Lexing and Parsing Should Be Separate](https://github.com/oils-for-unix/oils/wiki/Why-Lexing-and-Parsing-Should-Be-Separate)
* [2025-07-20, 23:15:11](https://lobste.rs/s/yhhecn/type_level_programming_for_safer) - [Type-level programming for safer resource management](https://frasertweedale.github.io/blog-fp/posts/2025-07-19-type-nats-and-constraints.html)
* [2025-07-20, 22:29:04](https://news.ycombinator.com/item?id=44629962) - [IPv6 Based Canvas](https://canvas.openbased.org/)
* [2025-07-20, 22:03:00](https://entertainment.slashdot.org/story/25/07/20/220200/after-superman-scores-400m-globally-how-will-marvel-respond?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After &apos;Superman&apos; Scores $400M Globally, How Will Marvel Respond?](https://entertainment.slashdot.org/story/25/07/20/220200/after-superman-scores-400m-globally-how-will-marvel-respond?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 21:54:25](https://lobste.rs/s/dbbau4/how_i_found_myself_game_industry) - [How I Found Myself In the Game Industry](https://nothings.org/gamedev/how_i_found_myself_in_the_game_industry.html)
* [2025-07-20, 21:00:52](https://lobste.rs/s/hqbhxk/exploring_secrets_layoutpriority) - [Exploring the Secrets of layoutPriority in SwiftUI ZStack](https://fatbobman.com/en/posts/exploring-the-secrets-of-layoutpriority-in-zstack/)
* [2025-07-20, 20:51:41](https://news.ycombinator.com/item?id=44629206) - [FFmpeg devs boast of another 100x leap thanks to handwritten assembly code](https://www.tomshardware.com/software/the-biggest-speedup-ive-seen-so-far-ffmpeg-devs-boast-of-another-100x-leap-thanks-to-handwritten-assembly-code)
* [2025-07-20, 20:44:00](https://slashdot.org/story/25/07/20/2041256/how-did-amazon-spin-this-years-prime-day-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Did Amazon Spin This Year&apos;s Prime Day Sales?](https://slashdot.org/story/25/07/20/2041256/how-did-amazon-spin-this-years-prime-day-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 20:35:00](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss) - [Iran Seeks Three Cloud Providers To Power Its Government](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss)
* [2025-07-20, 20:18:54](https://news.ycombinator.com/item?id=44628930) - [Staying cool without refrigerants: Next-generation Peltier cooling](https://news.samsung.com/global/interview-staying-cool-without-refrigerants-how-samsung-is-pioneering-next-generation-peltier-cooling)
* [2025-07-20, 19:34:00](https://tech.slashdot.org/story/25/07/20/1714257/kill-russian-soldiers-win-points-is-ukraines-new-drone-scheme-gamifying-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kill Russian Soldiers, Win Points: Is Ukraine&apos;s New Drone Scheme Gamifying War?](https://tech.slashdot.org/story/25/07/20/1714257/kill-russian-soldiers-win-points-is-ukraines-new-drone-scheme-gamifying-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 19:27:01](https://lobste.rs/s/04g8ge/foo_archive) - [The Foo Archive](https://soda.privatevoid.net/foo/)
* [2025-07-20, 19:14:55](https://lobste.rs/s/tfc3cb/stdio_3_change_file_is_now_opaque) - [stdio(3) change: FILE is now opaque](https://undeadly.org/cgi?action=article;sid=20250717103345)
* [2025-07-20, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss) - [Remote Access Trojan (RAT) Found in the AUR (Arch Linux User Repository)](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss)
* [2025-07-20, 18:46:14](https://news.ycombinator.com/item?id=44628082) - [Subreply – An open source text-only social network](https://github.com/lucianmarin/subreply)
* [2025-07-20, 18:34:00](https://yro.slashdot.org/story/25/07/20/1559242/how-gmail-server-evidence-led-to-a-jury-verdict-of-232-million-for-wrongful-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Gmail Server Evidence Led to a Jury Verdict of $23.2 Million For Wrongful Death](https://yro.slashdot.org/story/25/07/20/1559242/how-gmail-server-evidence-led-to-a-jury-verdict-of-232-million-for-wrongful-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 18:18:40](https://news.ycombinator.com/item?id=44627793) - [Stdio(3) change: FILE is now opaque](https://undeadly.org/cgi?action=article;sid=20250717103345)
* [2025-07-20, 17:34:00](https://tech.slashdot.org/story/25/07/20/1421220/deltas-boeing-767-makes-emergency-landing-as-engine-catches-fire-moments-after-takeoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Delta&apos;s Boeing 767 Makes Emergency Landing as Engine Catches Fire Moments After Takeoff](https://tech.slashdot.org/story/25/07/20/1421220/deltas-boeing-767-makes-emergency-landing-as-engine-catches-fire-moments-after-takeoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 17:00:46](https://lobste.rs/s/ihmxdn/they_re_putting_blue_food_coloring) - [They&apos;re putting blue food coloring in everything](https://blog.foxtrotluna.social/theyre-putting-blue-food-coloring-in-everything/)
* [2025-07-20, 16:34:00](https://science.slashdot.org/story/25/07/19/0457201/inside-the-silicon-valley-push-to-breed-super-babies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Inside the Silicon Valley Push to Breed Super-Babies&apos;](https://science.slashdot.org/story/25/07/19/0457201/inside-the-silicon-valley-push-to-breed-super-babies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 16:15:17](https://lobste.rs/s/9pp08h/i_m_tired_talking_about_ai) - [I’m Tired of Talking About AI](https://paddy.carvers.com/posts/2025/07/ai/)
* [2025-07-20, 15:51:44](https://news.ycombinator.com/item?id=44626363) - [Speeding up my ZSH shell](https://scottspence.com/posts/speeding-up-my-zsh-shell)
* [2025-07-20, 15:49:00](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss) - [Intel Has Discontinued Clear Linux, Effective Immediately](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss)
* [2025-07-20, 15:18:26](https://lobste.rs/s/bj5yad/tour_microsoft_s_macbu_lab_2006) - [A tour of Microsoft&apos;s MacBU lab (2006)](https://davidweiss.blogspot.com/2006/04/tour-of-microsofts-mac-lab.html)
* [2025-07-20, 14:34:07](https://lobste.rs/s/hikcqp/rust_clippy_performance_status_update) - [Rust Clippy performance status update](https://blog.goose.love/posts/clippy-performance-status-update/)
* [2025-07-20, 14:33:56](https://lobste.rs/s/xx0k66/responsible_ai_enterprise_applications) - [Responsible AI in Enterprise Applications: A Practitioner&apos;s View](https://www.jjude.com/responsible-ai-in-enterprise-apps/)
* [2025-07-20, 14:17:00](https://slashdot.org/story/25/07/20/0557204/why-ibms-amazing-sliding-keyboard-thinkpad-701-never-survived-past-1995?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why IBM&apos;s Amazing &apos;Sliding Keyboard&apos; ThinkPad 701 Never Survived Past 1995](https://slashdot.org/story/25/07/20/0557204/why-ibms-amazing-sliding-keyboard-thinkpad-701-never-survived-past-1995?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 14:04:12](https://lobste.rs/s/7ykaux/introducing_xmlui) - [Introducing XMLUI](https://blog.jonudell.net/2025/07/18/introducing-xmlui/)
* [2025-07-20, 14:03:39](https://news.ycombinator.com/item?id=44625292) - [XMLUI](https://blog.jonudell.net/2025/07/18/introducing-xmlui/)
* [2025-07-20, 12:22:09](https://lobste.rs/s/6ifojq/coding_with_llms_summer_2025_update) - [Coding with LLMs in the summer of 2025 (an update)](https://antirez.com/news/154)
* [2025-07-20, 11:34:00](https://tech.slashdot.org/story/25/07/20/0119236/kde-plasma-finally-gets-rounded-bottom-window-corners?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE Plasma Finally Gets Rounded Bottom Window Corners ](https://tech.slashdot.org/story/25/07/20/0119236/kde-plasma-finally-gets-rounded-bottom-window-corners?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 11:26:09](https://news.ycombinator.com/item?id=44624114) - [Digital vassals? French Government ‘exposes citizens’ data to US&apos;](https://brusselssignal.eu/2025/07/digital-vassals-french-government-exposes-citizens-data-to-us/)
* [2025-07-20, 11:04:02](https://news.ycombinator.com/item?id=44623953) - [Coding with LLMs in the summer of 2025 – an update](https://antirez.com/news/154)
* [2025-07-20, 11:04:00](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss) - [The Latest Windows PCs Remember Everything](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss)
* [2025-07-20, 09:40:45](https://lobste.rs/s/szcq9k/async_i_o_on_linux_durability) - [Async I/O on Linux and durability](https://blog.canoozie.net/async-i-o-on-linux-and-durability/)
* [2025-07-20, 09:33:48](https://news.ycombinator.com/item?id=44623361) - [AI is killing the web – can anything save it?](https://www.economist.com/business/2025/07/14/ai-is-killing-the-web-can-anything-save-it)
* [2025-07-20, 08:02:00](https://news.slashdot.org/story/25/07/20/058235/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey Pumps $10M Into a Nonprofit Focused on Open Source Social Media](https://news.slashdot.org/story/25/07/20/058235/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 06:18:00](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss) - [Infographic: Every Microsoft Acquisition Since 1986](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss)
* [2025-07-20, 04:02:00](https://science.slashdot.org/story/25/07/20/0328203/healthy-babies-born-in-britain-after-scientists-used-dna-from-three-people-to-avoid-genetic-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Healthy Babies Born in Britain After Scientists Used DNA From Three People to Avoid Genetic Disease](https://science.slashdot.org/story/25/07/20/0328203/healthy-babies-born-in-britain-after-scientists-used-dna-from-three-people-to-avoid-genetic-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 02:23:00](https://games.slashdot.org/story/25/07/20/0219213/that-coldplay-kiss-cam-couple-just-became-a-vibe-coded-videogame---and-then-an-nft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [That Coldplay &apos;Kiss Cam&apos; Couple Just Became a Vibe-Coded Videogame - and Then an NFT](https://games.slashdot.org/story/25/07/20/0219213/that-coldplay-kiss-cam-couple-just-became-a-vibe-coded-videogame---and-then-an-nft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 01:33:00](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss) - [Is Tor Trustworthy and Safe?](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss)
* [2025-07-19, 23:35:08](https://lobste.rs/s/jtd0b1/giving_up_on_element_matrix_org) - [Giving Up on Element &amp; Matrix.org](https://xn--gckvb8fzb.com/giving-up-on-element-and-matrixorg/)
* [2025-07-19, 22:50:40](https://lobste.rs/s/z2ehwo/borrowchecker_is_what_i_like_least_about) - [The borrowchecker is what I like the least about Rust](https://viralinstruction.com/posts/borrowchecker/)
* [2025-07-19, 22:11:12](https://lobste.rs/s/pv4vxu/why_you_should_choose_htmx_for_your_next) - [Why you should choose HTMX for your next web-based side project - and ditch the crufty MPA and complex SPA](https://hamy.xyz/blog/2024-02_htmx-for-side-projects)
* [2025-07-19, 20:33:00](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss) - [The Fascinating Science of Pain – and Why Everyone Feels it Differently](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss)
* [2025-07-19, 15:50:00](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss) - [FuguIta: OpenBSD Live CD - Desktop Environment Demo Version with XFCE v.4.20.0](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss)
* [2025-07-19, 11:17:48](https://news.ycombinator.com/item?id=44614510) - [SIOF (Scheme in One File) – A Minimal R7RS Scheme System](https://github.com/false-schemers/siof)
* [2025-07-19, 11:08:00](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss) - [Most Warming This Century May Be Due To Air Pollution Cuts](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss)
* [2025-07-19, 11:03:00](https://lobste.rs/s/cwmt11/do_you_understand_f_strings) - [Do you understand f-strings?](https://fstrings.wtf/)
* [2025-07-19, 10:52:43](https://news.ycombinator.com/item?id=44614372) - [The sumerian game early computer game](https://spillhistorie.no/2025/07/10/the-sumerian-game-the-ancestor-of-modern-city-builders/)
* [2025-07-19, 06:20:00](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss) - [Two Guys Hated Using Comcast, So They Built Their Own Fiber ISP](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss)
* [2025-07-19, 01:37:00](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss) - [Radio Hobbyists, Rejoice! Good News for LoRa &amp; Mesh](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss)
* [2025-07-18, 20:55:00](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss) - [Drones, AI and Robot Pickers: Meet the Fully Autonomous Farm](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss)
* [2025-07-18, 16:10:00](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss) - [DOGE Staffer With Access to Americans&apos; Personal Data Leaked Private xAI API Key](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss)
* [2025-07-18, 14:08:12](https://news.ycombinator.com/item?id=44604808) - [Hexanitrogen Energies](https://www.science.org/content/blog-post/hexanitrogen-energies)
* [2025-07-18, 13:13:33](https://news.ycombinator.com/item?id=44604311) - [Using the Matrix Cores of AMD RDNA 4 architecture GPUs](https://gpuopen.com/learn/using_matrix_core_amd_rdna4/)
* [2025-07-18, 12:48:49](https://news.ycombinator.com/item?id=44604127) - [Structuring Arrays with Algebraic Shapes [video]](https://www.youtube.com/watch?v=3Lbs0pJ_OHI)
* [2025-07-18, 11:26:00](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss) - [Intel Axes Thousands of Technicians and Engineers in Sweeping U.S. Layoffs](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss)
* [2025-07-18, 11:09:07](https://news.ycombinator.com/item?id=44603349) - [“Dynamic Programming” is not referring to “computer programming”](https://www.vidarholen.net/contents/blog/?p=1172)
* [2025-07-18, 06:49:00](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss) - [Engineering the Origin of the Wheel](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss)
* [2025-07-18, 02:05:00](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss) - [Nvidia Chips Become the First GPUs to Fall to Rowhammer Bit-Flip Attacks](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss)
* [2025-07-17, 21:43:23](https://news.ycombinator.com/item?id=44598578) - [What my mother didn’t talk about (2020)](https://www.buzzfeednews.com/article/karolinawaclawiak/what-my-mother-didnt-talk-about-karolina-waclawiak)
* [2025-07-17, 21:14:00](https://soylentnews.org/article.pl?sid=25/07/16/188244&amp;from=rss) - [Belkin Shows Tech Firms Getting Too Comfortable With Bricking Customers’ Stuff](https://soylentnews.org/article.pl?sid=25/07/16/188244&amp;from=rss)
* [2025-07-17, 20:54:02](https://news.ycombinator.com/item?id=44598090) - [The Daily Life of a Medieval King](https://www.medievalists.net/2025/07/medieval-king-daily-life/)
* [2025-07-17, 16:32:00](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss) - [Holographic Ribbon Aims To Oust Magnetic Tape With 50-Year Life Span And 200Tb Per Cartridge](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss)
* [2025-07-17, 16:01:17](https://news.ycombinator.com/item?id=44594808) - [New colors without shooting lasers into your eyes](https://dynomight.net/colors/)
* [2025-07-17, 15:43:04](https://news.ycombinator.com/item?id=44594584) - [Show HN: Conductor, a Mac app that lets you run a bunch of Claude Codes at once](https://conductor.build/)
* [2025-07-17, 15:34:29](https://news.ycombinator.com/item?id=44594486) - [How slow motion became cinema’s dominant special effect](https://newrepublic.com/article/196262/slow-motion-became-cinema-dominant-special-effect-downtime)
* [2025-07-17, 12:51:28](https://news.ycombinator.com/item?id=44592797) - [Debugging Bash Like a Sire](https://blog.brujordet.no/post/bash/debugging_bash_like_a_sire/)
* [2025-07-17, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss) - [AI Slows Down Some Experienced Software Developers](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss)
* [2025-07-17, 09:35:37](https://news.ycombinator.com/item?id=44591439) - [JOVE – Jonathan’s Own Version of Emacs](https://github.com/jonmacs/jove/)
* [2025-07-17, 09:12:26](https://news.ycombinator.com/item?id=44591305) - [Simulating hand-drawn motion with SVG filters](https://camillovisini.com/coding/simulating-hand-drawn-motion-with-svg-filters)
* [2025-07-17, 07:07:00](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss) - [Industrial Waste is Turning Into Rock in Just Decades, Study Suggests](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss)
* [2025-07-17, 02:22:00](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss) - [Merger of Two Massive Black Holes is One for the Record Books](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss)
