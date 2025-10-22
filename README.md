# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Releases and Updates

* [OpenBSD 7.8 Released](https://cdn.openbsd.org/pub/OpenBSD/7.8/ANNOUNCEMENT) ([comments](https://news.ycombinator.com/item?id=45664147))

* [KDE Plasma 6.5 Released](https://tech.slashdot.org/story/25/10/21/1948244/kde-plasma-65-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://lobste.rs/s/pstg9w/plasma_6_5))

* [Servo 0.0.1 Release](https://servo.org/blog/2025/10/20/servo-0.0.1-release/) ([comments](https://lobste.rs/s/63tgtm/servo_0_0_1_release))

## Digital Security and Incidents

* [Amazon Error Creates Massive Internet Outage](https://soylentnews.org/article.pl?sid=25/10/21/1218221&amp;from=rss) ([comments](https://lobste.rs/s/hxwjvp/aws_experiences_12_hour_multi_service))

* [Fake Homebrew Google Ads Push Malware Onto macOS](https://it.slashdot.org/story/25/10/21/2256241/fake-homebrew-google-ads-push-malware-onto-macos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Foreign hackers breached a US nuclear weapons plant via SharePoint flaws](https://www.csoonline.com/article/4074962/foreign-hackers-breached-a-us-nuclear-weapons-plant-via-sharepoint-flaws.html) ([comments](https://news.ycombinator.com/item?id=45657287))

* [GlassWorm: First Self-Propagating Worm Using Invisible Code Hits OpenVSX Marketplace](https://www.koi.ai/blog/glassworm-first-self-propagating-worm-using-invisible-code-hits-openvsx-marketplace) ([comments](https://lobste.rs/s/degq8m/glassworm_first_self_propagating_worm))

## AI and Automation

* [OpenAI Debuts AI-Powered Browser With Memory and Agent Features](https://tech.slashdot.org/story/25/10/21/1725235/openai-debuts-ai-powered-browser-with-memory-and-agent-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [YouTube's Likeness Detection Has Arrived To Help Stop AI Doppelgangers](https://news.slashdot.org/story/25/10/21/2250229/youtubes-likeness-detection-has-arrived-to-help-stop-ai-doppelgangers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Scientific and Medical Advances

* [Rectal oxygen delivery might soon be a real medical treatment](https://arstechnica.com/science/2025/10/butt-breathing-might-soon-be-a-real-medical-treatment/) ([comments](https://news.ycombinator.com/item?id=45662831))

* [60k kids have avoided peanut allergies due to 2015 advice, study finds](https://www.cbsnews.com/news/peanut-allergies-60000-kids-avoided-2015-advice/) ([comments](https://news.ycombinator.com/item?id=45652307))

## Innovative Tools and Software

* [rlsw – Raylib software OpenGL renderer in less than 5k LOC](https://github.com/raysan5/raylib/blob/master/src/external/rlsw.h) ([comments](https://news.ycombinator.com/item?id=45661638))

* [Build your own database](https://www.nan.fyi/database) ([comments](https://news.ycombinator.com/item?id=45657827))

* [ChatGPT Atlas](https://chatgpt.com/atlas) ([comments](https://news.ycombinator.com/item?id=45658479))

## Environmental and Political Developments

* [British Columbia to Permanently Ban New Crypto Mining Projects From Grid](https://hardware.slashdot.org/story/25/10/21/237254/british-columbia-to-permanently-ban-new-crypto-mining-projects-from-grid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [France and Spain Call on EU To Uphold 2035 Combustion Engine Ban](https://news.slashdot.org/story/25/10/21/1759230/france-and-spain-call-on-eu-to-uphold-2035-combustion-engine-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cultural and Historical Perspectives

* [The Hidden Engineering of Niagara Falls](https://practical.engineering/blog/2025/10/21/the-hidden-engineering-of-niagara-falls) ([comments](https://news.ycombinator.com/item?id=45662668))

* [The Greatness of Text Adventures](https://entropicthoughts.com/the-greatness-of-text-adventures) ([comments](https://lobste.rs/s/lo8r1s/greatness_text_adventures))

* [Modal editing is a weird historical contingency we have through sheer happenstance](https://buttondown.com/hillelwayne/archive/modal-editing-is-a-weird-historical-contingency/) ([comments](https://lobste.rs/s/ac4ab5/modal_editing_is_weird_historical))

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

* [2025-10-22, 02:02:58](https://news.ycombinator.com/item?id=45664147) - [OpenBSD 7.8 Released](https://cdn.openbsd.org/pub/OpenBSD/7.8/ANNOUNCEMENT)
* [2025-10-22, 02:00:00](https://hardware.slashdot.org/story/25/10/21/237254/british-columbia-to-permanently-ban-new-crypto-mining-projects-from-grid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [British Columbia to Permanently Ban New Crypto Mining Projects From Grid](https://hardware.slashdot.org/story/25/10/21/237254/british-columbia-to-permanently-ban-new-crypto-mining-projects-from-grid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 01:30:00](https://tech.slashdot.org/story/25/10/21/2324239/internet-archive-celebrates-1-trillion-web-pages-archived?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internet Archive Celebrates 1 Trillion Web Pages Archived](https://tech.slashdot.org/story/25/10/21/2324239/internet-archive-celebrates-1-trillion-web-pages-archived?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 01:00:00](https://it.slashdot.org/story/25/10/21/2256241/fake-homebrew-google-ads-push-malware-onto-macos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fake Homebrew Google Ads Push Malware Onto macOS](https://it.slashdot.org/story/25/10/21/2256241/fake-homebrew-google-ads-push-malware-onto-macos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 00:20:00](https://news.slashdot.org/story/25/10/21/2250229/youtubes-likeness-detection-has-arrived-to-help-stop-ai-doppelgangers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube&apos;s Likeness Detection Has Arrived To Help Stop AI Doppelgangers](https://news.slashdot.org/story/25/10/21/2250229/youtubes-likeness-detection-has-arrived-to-help-stop-ai-doppelgangers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 00:11:09](https://news.ycombinator.com/item?id=45663435) - [Cdb: Add support for cdb64](https://cdb.cr.yp.to/download.html)
* [2025-10-21, 23:40:00](https://tech.slashdot.org/story/25/10/21/2244249/us-investigates-waymo-robotaxis-over-safety-around-school-buses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Investigates Waymo Robotaxis Over Safety Around School Buses](https://tech.slashdot.org/story/25/10/21/2244249/us-investigates-waymo-robotaxis-over-safety-around-school-buses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 23:26:00](https://soylentnews.org/article.pl?sid=25/10/21/1218221&amp;from=rss) - [Amazon Error Creates Massive Internet Outage](https://soylentnews.org/article.pl?sid=25/10/21/1218221&amp;from=rss)
* [2025-10-21, 23:18:27](https://lobste.rs/s/lo8r1s/greatness_text_adventures) - [The Greatness of Text Adventures](https://entropicthoughts.com/the-greatness-of-text-adventures)
* [2025-10-21, 23:13:29](https://lobste.rs/s/ymcbwl/what_s_problem_with_pipe_curl_into_sh) - [What’s the problem with pipe-curl-into-sh?](https://lobste.rs/s/ymcbwl/what_s_problem_with_pipe_curl_into_sh)
* [2025-10-21, 23:05:00](https://tech.slashdot.org/story/25/10/21/2138208/isp-deceived-customers-about-fiber-internet-german-court-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ISP Deceived Customers About Fiber Internet, German Court Finds](https://tech.slashdot.org/story/25/10/21/2138208/isp-deceived-customers-about-fiber-internet-german-court-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 23:00:40](https://news.ycombinator.com/item?id=45662831) - [Rectal oxygen delivery might soon be a real medical treatment](https://arstechnica.com/science/2025/10/butt-breathing-might-soon-be-a-real-medical-treatment/)
* [2025-10-21, 22:43:07](https://news.ycombinator.com/item?id=45662668) - [The Hidden Engineering of Niagara Falls](https://practical.engineering/blog/2025/10/21/the-hidden-engineering-of-niagara-falls)
* [2025-10-21, 22:25:00](https://developers.slashdot.org/story/25/10/21/2132259/jetbrains-survey-declares-php-declining-then-says-it-isnt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [JetBrains Survey Declares PHP Declining, Then Says It Isn&apos;t](https://developers.slashdot.org/story/25/10/21/2132259/jetbrains-survey-declares-php-declining-then-says-it-isnt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 21:45:00](https://tech.slashdot.org/story/25/10/21/2125252/tiktoks-new-policies-remove-promise-to-notify-users-before-government-data-disclosure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TikTok&apos;s New Policies Remove Promise To Notify Users Before Government Data Disclosure](https://tech.slashdot.org/story/25/10/21/2125252/tiktoks-new-policies-remove-promise-to-notify-users-before-government-data-disclosure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 21:05:00](https://apple.slashdot.org/story/25/10/21/2047227/apples-planned-foldable-ipad-with-18-inch-screen-hits-development-snags?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Planned Foldable iPad With 18-inch Screen Hits Development Snags](https://apple.slashdot.org/story/25/10/21/2047227/apples-planned-foldable-ipad-with-18-inch-screen-hits-development-snags?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 21:00:10](https://news.ycombinator.com/item?id=45661638) - [rlsw – Raylib software OpenGL renderer in less than 5k LOC](https://github.com/raysan5/raylib/blob/master/src/external/rlsw.h)
* [2025-10-21, 20:31:47](https://news.ycombinator.com/item?id=45661306) - [Erowid - Documenting the Complex Relationship Between Humans and Psychoactives](https://www.erowid.org)
* [2025-10-21, 20:28:15](https://news.ycombinator.com/item?id=45661253) - [Replacing a $3000/mo Heroku bill with a $55/mo server](https://disco.cloud/blog/how-idealistorg-replaced-a-3000mo-heroku-bill-with-a-55-server/)
* [2025-10-21, 20:25:00](https://tech.slashdot.org/story/25/10/21/1948244/kde-plasma-65-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE Plasma 6.5 Released](https://tech.slashdot.org/story/25/10/21/1948244/kde-plasma-65-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 20:14:22](https://news.ycombinator.com/item?id=45661084) - [Doomsday scoreboard](https://doomsday.march1studios.com/)
* [2025-10-21, 19:45:00](https://slashdot.org/story/25/10/21/1942240/amazons-dns-problem-knocked-out-half-the-web-likely-costing-billions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s DNS Problem Knocked Out Half the Web, Likely Costing Billions](https://slashdot.org/story/25/10/21/1942240/amazons-dns-problem-knocked-out-half-the-web-likely-costing-billions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 18:51:58](https://lobste.rs/s/9u7xpi/why_ssa) - [Why SSA?](https://mcyoung.xyz/2025/10/21/ssa-1/)
* [2025-10-21, 18:41:00](https://soylentnews.org/article.pl?sid=25/10/20/2129245&amp;from=rss) - [Are We Living in a Golden Age of Stupidity?](https://soylentnews.org/article.pl?sid=25/10/20/2129245&amp;from=rss)
* [2025-10-21, 18:36:10](https://lobste.rs/s/rhmh7d/magit_is_amazing) - [Magit is Amazing](https://heiwiper.com/posts/magit-is-awesome/)
* [2025-10-21, 18:05:00](https://news.slashdot.org/story/25/10/21/1759230/france-and-spain-call-on-eu-to-uphold-2035-combustion-engine-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France and Spain Call on EU To Uphold 2035 Combustion Engine Ban](https://news.slashdot.org/story/25/10/21/1759230/france-and-spain-call-on-eu-to-uphold-2035-combustion-engine-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 17:44:22](https://lobste.rs/s/ac4ab5/modal_editing_is_weird_historical) - [Modal editing is a weird historical contingency we have through sheer happenstance](https://buttondown.com/hillelwayne/archive/modal-editing-is-a-weird-historical-contingency/)
* [2025-10-21, 17:25:00](https://tech.slashdot.org/story/25/10/21/1725235/openai-debuts-ai-powered-browser-with-memory-and-agent-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Debuts AI-Powered Browser With Memory and Agent Features](https://tech.slashdot.org/story/25/10/21/1725235/openai-debuts-ai-powered-browser-with-memory-and-agent-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 17:18:13](https://news.ycombinator.com/item?id=45658479) - [ChatGPT Atlas](https://chatgpt.com/atlas)
* [2025-10-21, 17:01:02](https://news.ycombinator.com/item?id=45658221) - [Flexport Is Hiring SDRs in Chicago](https://job-boards.greenhouse.io/flexport/jobs/5690976?gh_jid=5690976)
* [2025-10-21, 17:00:29](https://lobste.rs/s/wmcl4k/yet_another_year_with_decker_v1_44_v1_60) - [Yet Another Year With Decker (v1.44 - v1.60)](http://beyondloom.com/blog/unionstate3.html)
* [2025-10-21, 16:45:00](https://apple.slashdot.org/story/25/10/21/1634248/apple-attacks-eu-crackdown-in-digital-laws-biggest-court-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Attacks EU Crackdown in Digital Law&apos;s Biggest Court Test](https://apple.slashdot.org/story/25/10/21/1634248/apple-attacks-eu-crackdown-in-digital-laws-biggest-court-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 16:33:33](https://lobste.rs/s/c6hkyp/design_scheme_78_lisp_based) - [Design of the SCHEME-78 Lisp-based microprocessor (1980)](https://dl.acm.org/doi/10.1145/359024.359031)
* [2025-10-21, 16:31:51](https://news.ycombinator.com/item?id=45657827) - [Build your own database](https://www.nan.fyi/database)
* [2025-10-21, 16:29:32](https://lobste.rs/s/ppakny/how_minecraft_servers_can_track_you) - [How Minecraft servers can track you across accounts and IPs using resource packs](https://alaggydev.github.io/posts/cytooxien/)
* [2025-10-21, 16:29:03](https://lobste.rs/s/degq8m/glassworm_first_self_propagating_worm) - [GlassWorm: First Self-Propagating Worm Using Invisible Code Hits OpenVSX Marketplace](https://www.koi.ai/blog/glassworm-first-self-propagating-worm-using-invisible-code-hits-openvsx-marketplace)
* [2025-10-21, 16:02:00](https://news.slashdot.org/story/25/10/21/1557254/london-became-a-global-hub-for-phone-theft-now-we-know-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [London Became a Global Hub for Phone Theft. Now We Know Why.](https://news.slashdot.org/story/25/10/21/1557254/london-became-a-global-hub-for-phone-theft-now-we-know-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 15:55:41](https://news.ycombinator.com/item?id=45657345) - [Ask HN: Our AWS account got compromised after their outage](https://news.ycombinator.com/item?id=45657345)
* [2025-10-21, 15:51:33](https://news.ycombinator.com/item?id=45657287) - [Foreign hackers breached a US nuclear weapons plant via SharePoint flaws](https://www.csoonline.com/article/4074962/foreign-hackers-breached-a-us-nuclear-weapons-plant-via-sharepoint-flaws.html)
* [2025-10-21, 15:22:25](https://news.ycombinator.com/item?id=45656952) - [Show HN: Katakate – Dozens of VMs per node for safe code exec](https://github.com/Katakate/k7)
* [2025-10-21, 15:17:38](https://lobste.rs/s/pstg9w/plasma_6_5) - [Plasma 6.5](https://kde.org/announcements/plasma/6/6.5.0/)
* [2025-10-21, 15:13:55](https://lobste.rs/s/2mjimw/fast_bytecode_vm_for_arithmetic_virtual) - [A Fast Bytecode VM for Arithmetic: The Virtual Machine](https://abhinavsarkar.net/posts/arithmetic-bytecode-vm/)
* [2025-10-21, 15:13:11](https://lobste.rs/s/4ozeaf/openbsd_7_8) - [OpenBSD 7.8](https://www.openbsd.org/78.html)
* [2025-10-21, 14:24:26](https://news.ycombinator.com/item?id=45656223) - [LLMs can get \&quot;brain rot\&quot;](https://llm-brain-rot.github.io/)
* [2025-10-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/10/20/1245230&amp;from=rss) - [Drone Tech Company DroneShield to Build 13m Facility in Australia](https://soylentnews.org/article.pl?sid=25/10/20/1245230&amp;from=rss)
* [2025-10-21, 13:11:42](https://lobste.rs/s/o8acsz/streaming_live_video_as_macos) - [Streaming live video as a macOS screensaver using AVFoundation and yt-dlp](https://github.com/hauxir/macos-live-screensaver)
* [2025-10-21, 13:11:24](https://lobste.rs/s/6hfg9a/tracking_time_without_clock) - [Tracking Time Without Clock](https://tigerbeetle.com/blog/2025-10-21-clockless-time/)
* [2025-10-21, 13:09:45](https://lobste.rs/s/kltrqx/just_use_curl) - [Just use cURL](https://justuse.org/curl/)
* [2025-10-21, 13:05:21](https://news.ycombinator.com/item?id=45655263) - [Ilo – a Forth system running on UEFI](https://asciinema.org/a/Lbxa2w9R5IbaJqW3INqVrbX8E)
* [2025-10-21, 12:58:43](https://news.ycombinator.com/item?id=45655188) - [NASA chief suggests SpaceX may be booted from moon mission](https://www.cnn.com/2025/10/20/science/nasa-spacex-moon-landing-contract-sean-duffy)
* [2025-10-21, 12:55:59](https://news.ycombinator.com/item?id=45655161) - [Neural audio codecs: how to get audio into LLMs](https://kyutai.org/next/codec-explainer)
* [2025-10-21, 12:30:27](https://lobste.rs/s/bsckho/6_months_tangled) - [6 months of Tangled](https://blog.tangled.org/6-months)
* [2025-10-21, 11:58:06](https://lobste.rs/s/znhl2p/stargrid_brand_new_palm_os_strategy_game) - [StarGrid: Brand-New Palm OS Strategy Game in 2025](https://quarters.captaintouch.com/blog/posts/2025-10-21-stargrid-has-arrived,-a-brand-new-palm-os-strategy-game-in-2025.html)
* [2025-10-21, 11:16:34](https://news.ycombinator.com/item?id=45654512) - [Diamond Thermal Conductivity: A New Era in Chip Cooling](https://spectrum.ieee.org/diamond-thermal-conductivity)
* [2025-10-21, 11:15:02](https://lobste.rs/s/9s7f00/forging_fedora_s_future_with_forgejo) - [Forging Fedora’s Future with Forgejo](https://communityblog.fedoraproject.org/forging-fedoras-future-with-forgejo/)
* [2025-10-21, 11:12:03](https://lobste.rs/s/0zqebs/my_most_popular_application) - [My most popular application](https://blog.6nok.org/my-most-popular-application/)
* [2025-10-21, 09:15:00](https://soylentnews.org/article.pl?sid=25/10/20/1236216&amp;from=rss) - [Lifespan of AI Chips: The $300 Billion Question](https://soylentnews.org/article.pl?sid=25/10/20/1236216&amp;from=rss)
* [2025-10-21, 04:27:00](https://soylentnews.org/article.pl?sid=25/10/20/1229240&amp;from=rss) - [GNOME Has a New Security Threat Scanner Powered by VirusTotal](https://soylentnews.org/article.pl?sid=25/10/20/1229240&amp;from=rss)
* [2025-10-21, 03:53:20](https://news.ycombinator.com/item?id=45652307) - [60k kids have avoided peanut allergies due to 2015 advice, study finds](https://www.cbsnews.com/news/peanut-allergies-60000-kids-avoided-2015-advice/)
* [2025-10-21, 01:29:03](https://news.ycombinator.com/item?id=45651485) - [Wikipedia says traffic is falling due to AI search summaries and social video](https://techcrunch.com/2025/10/18/wikipedia-says-traffic-is-falling-due-to-ai-search-summaries-and-social-video/)
* [2025-10-21, 00:14:55](https://lobste.rs/s/lhkipb/judo_jujutsu_gui) - [Judo (Jujutsu GUI)](https://judojj.com/)
* [2025-10-20, 23:40:00](https://soylentnews.org/article.pl?sid=25/10/20/0111228&amp;from=rss) - [Russia, AI and the Future of Disinformation Warfare](https://soylentnews.org/article.pl?sid=25/10/20/0111228&amp;from=rss)
* [2025-10-20, 22:38:23](https://lobste.rs/s/xdljm2/joy_rediscovering_perl) - [The joy of rediscovering Perl](https://blog.zerodogg.org/2025/10/13/the-joy-of-rediscovering-perl/)
* [2025-10-20, 21:19:19](https://news.ycombinator.com/item?id=45649510) - [The death of thread per core](https://buttondown.com/jaffray/archive/the-death-of-thread-per-core/)
* [2025-10-20, 20:13:31](https://lobste.rs/s/kqczws/measuring_engineering_productivity) - [Measuring Engineering Productivity](https://justoffbyone.com/posts/measuring-engineering-productivity/)
* [2025-10-20, 19:57:22](https://lobste.rs/s/hxwjvp/aws_experiences_12_hour_multi_service) - [AWS experiences 12+ hour multi-service outage](https://health.aws.amazon.com/health/status?ts=20251020)
* [2025-10-20, 18:58:00](https://soylentnews.org/article.pl?sid=25/10/18/1822203&amp;from=rss) - [Oops! It&apos;s a Kernel Stack Use-After-Free: Exploiting NVIDIA&apos;s GPU Linux Drivers](https://soylentnews.org/article.pl?sid=25/10/18/1822203&amp;from=rss)
* [2025-10-20, 17:39:00](https://soylentnews.org/meta/article.pl?sid=25/10/20/098210&amp;from=rss) - [Soylent Update](https://soylentnews.org/meta/article.pl?sid=25/10/20/098210&amp;from=rss)
* [2025-10-20, 17:25:56](https://lobste.rs/s/xyg1fu/fil_c) - [Fil-C](https://fil-c.org)
* [2025-10-20, 17:24:49](https://news.ycombinator.com/item?id=45646559) - [Getting DeepSeek-OCR working on an Nvidia Spark via brute force with Claude Code](https://simonwillison.net/2025/Oct/20/deepseek-ocr-claude-code/)
* [2025-10-20, 17:13:44](https://news.ycombinator.com/item?id=45646414) - [What do we do if SETI is successful?](https://www.universetoday.com/articles/what-do-we-do-if-seti-is-successful)
* [2025-10-20, 14:08:00](https://soylentnews.org/article.pl?sid=25/10/18/180239&amp;from=rss) - [Quantum Crystals Offer a Blueprint for the Future of Computing and Chemistry](https://soylentnews.org/article.pl?sid=25/10/18/180239&amp;from=rss)
* [2025-10-20, 13:22:48](https://lobste.rs/s/63tgtm/servo_0_0_1_release) - [Servo 0.0.1 Release](https://servo.org/blog/2025/10/20/servo-0.0.1-release/)
* [2025-10-20, 09:26:00](https://soylentnews.org/article.pl?sid=25/10/18/1749235&amp;from=rss) - [JPMorgan Requires Staff to Hand Over Biometric Data to Access New Headquarters](https://soylentnews.org/article.pl?sid=25/10/18/1749235&amp;from=rss)
* [2025-10-20, 04:41:00](https://soylentnews.org/article.pl?sid=25/10/16/1551203&amp;from=rss) - [Tech Billionaires Seem to be Doom Prepping. Should We All be Worried?](https://soylentnews.org/article.pl?sid=25/10/16/1551203&amp;from=rss)
* [2025-10-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/10/18/004205&amp;from=rss) - [Poverty in Australia Increases to 1 in 7 People, According to Report](https://soylentnews.org/article.pl?sid=25/10/18/004205&amp;from=rss)
* [2025-10-19, 19:06:00](https://soylentnews.org/article.pl?sid=25/10/18/002218&amp;from=rss) - [Windows 11 Update Breaks Localhost, Prompting Mass Uninstall Workaround](https://soylentnews.org/article.pl?sid=25/10/18/002218&amp;from=rss)
* [2025-10-19, 14:22:00](https://soylentnews.org/article.pl?sid=25/10/18/000230&amp;from=rss) - [Is AI Running Out of Training Data?](https://soylentnews.org/article.pl?sid=25/10/18/000230&amp;from=rss)
* [2025-10-19, 09:36:00](https://soylentnews.org/article.pl?sid=25/10/17/2341221&amp;from=rss) - [New Psychology Research Looks at Why We Help Our Friends When They Need It](https://soylentnews.org/article.pl?sid=25/10/17/2341221&amp;from=rss)
* [2025-10-19, 04:48:00](https://soylentnews.org/article.pl?sid=25/10/17/1219257&amp;from=rss) - [Understanding Volcanoes Better: Scientists Find Exact Locations of Magma Movement](https://soylentnews.org/article.pl?sid=25/10/17/1219257&amp;from=rss)
* [2025-10-19, 00:01:00](https://soylentnews.org/article.pl?sid=25/10/18/1745254&amp;from=rss) - [Comet Lemmon (Not Lemon) Nearing Peak](https://soylentnews.org/article.pl?sid=25/10/18/1745254&amp;from=rss)
* [2025-10-18, 19:16:00](https://soylentnews.org/article.pl?sid=25/10/16/1547215&amp;from=rss) - [GM to Take $1.6 Billion Hit as It Scales Back Electric Vehicle Operations](https://soylentnews.org/article.pl?sid=25/10/16/1547215&amp;from=rss)
* [2025-10-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/10/16/1545234&amp;from=rss) - [Thousands of Customers Imperiled After Nation-State Ransacks F5’s Network](https://soylentnews.org/article.pl?sid=25/10/16/1545234&amp;from=rss)
* [2025-10-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/10/16/1543247&amp;from=rss) - [Lasers and Gold Nanoparticles Enable on-Demand Crystal Growth for New Materials](https://soylentnews.org/article.pl?sid=25/10/16/1543247&amp;from=rss)
* [2025-10-18, 04:57:00](https://soylentnews.org/article.pl?sid=25/10/16/1538252&amp;from=rss) - [Why Signal&apos;s Post-Quantum Makeover is an Amazing Engineering Achievement](https://soylentnews.org/article.pl?sid=25/10/16/1538252&amp;from=rss)
* [2025-10-18, 00:18:00](https://soylentnews.org/article.pl?sid=25/10/16/1534249&amp;from=rss) - [FSF Librephone](https://soylentnews.org/article.pl?sid=25/10/16/1534249&amp;from=rss)
