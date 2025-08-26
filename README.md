# [News Summary](https://kherrick.github.io/news-summary/)

## Tech and Innovations

* [Farmers Insurance Data Breach Impacts 1.1 Million People After Salesforce Attack](https://it.slashdot.org/story/25/08/25/2154254/farmers-insurance-data-breach-impacts-11-million-people-after-salesforce-attack?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A Salesforce attack has reportedly impacted millions of people, exposing data vulnerabilities among major enterprises.

* [WiFi-3D-Fusion – Real-time 3D motion sensing with Wi-Fi](https://github.com/MaliosDark/wifi-3d-fusion) - This project demonstrates innovative uses of Wi-Fi for real-time motion sensing in 3D spaces.

* [Scientists Develop Interface That ‘Reads’ Thoughts From Speech-Impaired Patients](https://soylentnews.org/article.pl?sid=25/08/22/073206&from=rss) - Cutting-edge research creates new hope in communication for speech-impaired individuals.

* [Precision-Encoded Pixels: a tiny yet powerful pixel art compression method](https://github.com/ENDESGA/PEP) - A novel approach to compressing pixel art that could redefine efficiency in digital design.

## Science Discoveries and Nature

* [Climbing catfish filmed scaling waterfalls](https://www.science.org/content/article/thousands-climbing-catfish-filmed-scaling-waterfalls) - A fascinating look at how catfish adapt to extreme environments.

* [Oops! Earendel, Most Distant Star Ever Discovered, May Not Actually be a Star](https://soylentnews.org/article.pl?sid=25/08/25/1234216&from=rss) - Scientists question if the 'most distant star' could actually be something else.

* [Tree Species Face Unprecedented Climate Shifts Across Their Ranges](https://soylentnews.org/article.pl?sid=25/08/21/1213229&from=rss) - Climate change's effects on tree species and their ecosystems reveal alarming trends.

* [Webb Discovers a New Moon Orbiting Uranus](https://soylentnews.org/article.pl?sid=25/08/22/0551243&from=rss) - NASA's Webb telescope unveils a potential new moon around Uranus.

## Technology Security and Ethics

* [FTC Warns Tech Giants Not To Bow To Foreign Pressure on Encryption](https://news.slashdot.org/story/25/08/25/1939221/ftc-warns-tech-giants-not-to-bow-to-foreign-pressure-on-encryption?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The FTC takes a firm stance on encryption, warning against foreign influence.

* [Apple Accuses Former Apple Watch Staffer of Conspiring to Steal Trade Secrets for Oppo](https://yro.slashdot.org/story/25/08/25/2023259/apple-accuses-former-apple-watch-staffer-of-conspiring-to-steal-trade-secrets-for-oppo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Apple embroiled in legal battles over alleged intellectual property theft.

* [Perplexity's AI Browser Comet Vulnerable To Prompt Injection Attacks That Hijack User Accounts](https://it.slashdot.org/story/25/08/25/1654220/perplexitys-ai-browser-comet-vulnerable-to-prompt-injection-attacks-that-hijack-user-accounts?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Security flaws in AI-related browsers raise concerns regarding account safety.

## Environmental Developments

* [Study Shows Which Vehicles Pollute the Least In Every US County](https://tech.slashdot.org/story/25/08/25/220258/study-shows-which-vehicles-pollute-the-least-in-every-us-county?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Detailed analysis ranks vehicle emissions across U.S. counties.

* [The 8,000-Year History of Great Salt Lake and its Watershed is Recorded in Sediments](https://soylentnews.org/article.pl?sid=25/08/25/0225208&from=rss) - Sediment layers in the Great Salt Lake tell stories of climate and environmental change.

## Tech Innovation and Engineering

* [Nvidia's New 'Robot Brain' Goes On Sale](https://hardware.slashdot.org/story/25/08/25/207231/nvidias-new-robot-brain-goes-on-sale?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Nvidia releases advanced robotics hardware for innovation and automation.

* [Reverse Engineering All the Raspberry Pis](https://www.jeffgeerling.com/blog/2025/reverse-engineering-all-raspberry-pis) - Detailed breakdown of identifying, understanding, and applying Raspberry Pi models.

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

* [2025-08-26, 03:30:00](https://tech.slashdot.org/story/25/08/25/220258/study-shows-which-vehicles-pollute-the-least-in-every-us-county?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Shows Which Vehicles Pollute the Least In Every US County](https://tech.slashdot.org/story/25/08/25/220258/study-shows-which-vehicles-pollute-the-least-in-every-us-county?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-26, 03:03:03](https://lobste.rs/s/x6sye6/inside_windows_3) - [Inside Windows 3](https://www.xtof.info/inside-windows3.html)
* [2025-08-26, 01:37:28](https://news.ycombinator.com/item?id=45021300) - [Apple vs. Facebook Is Kayfabe](https://infrequently.org/2025/08/apple-vs-fb-kayfabe/)
* [2025-08-26, 01:02:59](https://news.ycombinator.com/item?id=45021078) - [The Limits of NTP Accuracy on Linux](https://scottstuff.net/posts/2025/05/19/ntp-limits/)
* [2025-08-26, 00:37:42](https://news.ycombinator.com/item?id=45020903) - [Climbing catfish filmed scaling waterfalls](https://www.science.org/content/article/thousands-climbing-catfish-filmed-scaling-waterfalls)
* [2025-08-26, 00:31:00](https://soylentnews.org/article.pl?sid=25/08/25/1234216&amp;from=rss) - [Oops! Earendel, Most Distant Star Ever Discovered, May Not Actually be a Star](https://soylentnews.org/article.pl?sid=25/08/25/1234216&amp;from=rss)
* [2025-08-26, 00:20:00](https://it.slashdot.org/story/25/08/25/2154254/farmers-insurance-data-breach-impacts-11-million-people-after-salesforce-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Farmers Insurance Data Breach Impacts 1.1 Million People After Salesforce Attack](https://it.slashdot.org/story/25/08/25/2154254/farmers-insurance-data-breach-impacts-11-million-people-after-salesforce-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-26, 00:06:16](https://lobste.rs/s/aurzu2/structural_vs_mathematical_under_2023) - [Structural vs. Mathematical “Under” (2023)](https://www.dyalog.com/blog/2023/01/structural-vs-mathematical-under/)
* [2025-08-26, 00:03:25](https://news.ycombinator.com/item?id=45020685) - [macOS 26 Tahoe&apos;s Dead Canary Utility App Icons](https://daringfireball.net/2025/08/macos_26_tahoes_dead_canary_utility_app_icons)
* [2025-08-25, 23:40:00](https://linux.slashdot.org/story/25/08/25/2149223/linux-turns-34?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Turns 34](https://linux.slashdot.org/story/25/08/25/2149223/linux-turns-34?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-25, 23:26:42](https://news.ycombinator.com/item?id=45020457) - [WiFi-3D-Fusion – Real-time 3D motion sensing with Wi-Fi](https://github.com/MaliosDark/wifi-3d-fusion)
* [2025-08-25, 23:00:00](https://science.slashdot.org/story/25/08/25/2145230/biotechs-turn-to-digital-coins-crypto-to-boost-stock-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Biotechs Turn to Digital Coins, Crypto to Boost Stock Prices](https://science.slashdot.org/story/25/08/25/2145230/biotechs-turn-to-digital-coins-crypto-to-boost-stock-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-25, 22:31:50](https://news.ycombinator.com/item?id=45019950) - [Exploring the tragedy of the Counter-Strike 2 server browser](https://bphilip.uk/blog/2025-08-25-the-cs2-server-browser-where-community-goes-to-die/)
* [2025-08-25, 22:20:00](https://hardware.slashdot.org/story/25/08/25/2013208/amd-blames-motherboard-makers-for-burnt-out-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMD Blames Motherboard Makers For Burnt-Out CPUs](https://hardware.slashdot.org/story/25/08/25/2013208/amd-blames-motherboard-makers-for-burnt-out-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-25, 21:40:00](https://yro.slashdot.org/story/25/08/25/2023259/apple-accuses-former-apple-watch-staffer-of-conspiring-to-steal-trade-secrets-for-oppo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Accuses Former Apple Watch Staffer of Conspiring to Steal Trade Secrets for Oppo](https://yro.slashdot.org/story/25/08/25/2023259/apple-accuses-former-apple-watch-staffer-of-conspiring-to-steal-trade-secrets-for-oppo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-25, 21:12:58](https://lobste.rs/s/8mw7xt/precision_encoded_pixels_tiny_yet) - [Precision-Encoded Pixels: a tiny yet powerful pixel art compression method](https://github.com/ENDESGA/PEP)
* [2025-08-25, 21:00:00](https://hardware.slashdot.org/story/25/08/25/207231/nvidias-new-robot-brain-goes-on-sale?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia&apos;s New &apos;Robot Brain&apos; Goes On Sale](https://hardware.slashdot.org/story/25/08/25/207231/nvidias-new-robot-brain-goes-on-sale?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-25, 20:47:10](https://news.ycombinator.com/item?id=45018773) - [Blacksky grew to millions of users without spending a dollar](https://newpublic.substack.com/p/how-blacksky-grew-to-millions-of)
* [2025-08-25, 20:40:39](https://news.ycombinator.com/item?id=45018708) - [Llama Fund: Crowdfund AI Models](https://llama.fund)
* [2025-08-25, 20:31:25](https://lobste.rs/s/xetwz2/google_wants_make_sideloading_android) - [Google wants to make sideloading Android apps safer by verifying developers’ identities](https://www.androidauthority.com/android-developer-verification-requirements-3590911/)
* [2025-08-25, 20:20:35](https://news.ycombinator.com/item?id=45018509) - [Reverse Engineering All the Raspberry Pis](https://www.jeffgeerling.com/blog/2025/reverse-engineering-all-raspberry-pis)
* [2025-08-25, 20:20:00](https://search.slashdot.org/story/25/08/25/201210/perplexity-launches-subscription-program-that-includes-revenue-sharing-with-publishers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Perplexity Launches Subscription Program That Includes Revenue Sharing With Publishers](https://search.slashdot.org/story/25/08/25/201210/perplexity-launches-subscription-program-that-includes-revenue-sharing-with-publishers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-25, 19:45:00](https://soylentnews.org/article.pl?sid=25/08/25/0225208&amp;from=rss) - [The 8,000-Year History of Great Salt Lake and its Watershed is Recorded in Sediments](https://soylentnews.org/article.pl?sid=25/08/25/0225208&amp;from=rss)
* [2025-08-25, 19:41:51](https://news.ycombinator.com/item?id=45018081) - [Fenster: Most minimal cross-platform GUI library](https://github.com/zserge/fenster)
* [2025-08-25, 19:39:00](https://news.slashdot.org/story/25/08/25/1939221/ftc-warns-tech-giants-not-to-bow-to-foreign-pressure-on-encryption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC Warns Tech Giants Not To Bow To Foreign Pressure on Encryption](https://news.slashdot.org/story/25/08/25/1939221/ftc-warns-tech-giants-not-to-bow-to-foreign-pressure-on-encryption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-25, 18:45:00](https://slashdot.org/story/25/08/25/1831240/intel-warns-us-equity-stake-could-trigger-adverse-reactions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Warns US Equity Stake Could Trigger &apos;Adverse Reactions&apos;](https://slashdot.org/story/25/08/25/1831240/intel-warns-us-equity-stake-could-trigger-adverse-reactions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-25, 18:25:36](https://lobste.rs/s/yiga8c/nullable_vs_nullable_c) - [Nullable vs nullable in C#](https://einarwh.no/blog/2025/08/25/nullable-vs-nullable/)
* [2025-08-25, 18:18:18](https://news.ycombinator.com/item?id=45017028) - [Google to require developer verification to install and sideload Android apps](https://9to5google.com/2025/08/25/android-apps-developer-verification/)
* [2025-08-25, 18:05:00](https://news.slashdot.org/story/25/08/25/184250/in-a-hotter-world-some-people-age-faster-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In a Hotter World, Some People Age Faster, Researchers Find](https://news.slashdot.org/story/25/08/25/184250/in-a-hotter-world-some-people-age-faster-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-25, 18:02:51](https://news.ycombinator.com/item?id=45016794) - [How RubyGems.org protects OSS infrastructure](https://blog.rubygems.org/2025/08/25/rubygems-security-response.html)
* [2025-08-25, 17:57:18](https://news.ycombinator.com/item?id=45016720) - [Google&apos;s Liquid Cooling](https://chipsandcheese.com/p/googles-liquid-cooling-at-hot-chips)
* [2025-08-25, 17:25:00](https://tech.slashdot.org/story/25/08/25/1716213/google-to-require-identity-verification-for-all-android-app-developers-by-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google To Require Identity Verification for All Android App Developers by 2027](https://tech.slashdot.org/story/25/08/25/1716213/google-to-require-identity-verification-for-all-android-app-developers-by-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-25, 16:54:00](https://it.slashdot.org/story/25/08/25/1654220/perplexitys-ai-browser-comet-vulnerable-to-prompt-injection-attacks-that-hijack-user-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Perplexity&apos;s AI Browser Comet Vulnerable To Prompt Injection Attacks That Hijack User Accounts](https://it.slashdot.org/story/25/08/25/1654220/perplexitys-ai-browser-comet-vulnerable-to-prompt-injection-attacks-that-hijack-user-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-25, 16:21:25](https://lobste.rs/s/cvoqyn/barking_up_ratchet_tree_mls_is_neither) - [Barking Up The Ratchet Tree – MLS Is Neither Royal Nor Nude](https://soatok.blog/2025/08/25/barking-up-the-ratchet-tree-mls-is-neither-royal-nor-nude/)
* [2025-08-25, 16:06:24](https://news.ycombinator.com/item?id=45015354) - [FCC bars providers for non-compliance with robocall protections](https://docs.fcc.gov/public/attachments/DOC-414073A1.txt)
* [2025-08-25, 16:06:03](https://lobste.rs/s/nyj82p/sharing_is_scaring_why_is_cloud_file) - [Sharing is Scaring: Why is Cloud File-Sharing Hard?](https://blog.brownplt.org/2025/08/25/cloud-sharing.html)
* [2025-08-25, 16:05:00](https://news.slashdot.org/story/25/08/25/162240/stock-exchanges-urge-regulators-to-crack-down-on-tokenised-stocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stock Exchanges Urge Regulators To Crack Down on &apos;Tokenised Stocks&apos;](https://news.slashdot.org/story/25/08/25/162240/stock-exchanges-urge-regulators-to-crack-down-on-tokenised-stocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-25, 15:59:22](https://lobste.rs/s/a6wfg2/making_software_what_is_color_space) - [Making Software: What is a color space?](https://www.makingsoftware.com/chapters/color-spaces-models-and-gamuts)
* [2025-08-25, 15:56:26](https://news.ycombinator.com/item?id=45015230) - [Launch HN: April (YC S25) – Voice AI to manage your email and calendar](https://news.ycombinator.com/item?id=45015230)
* [2025-08-25, 15:34:50](https://news.ycombinator.com/item?id=45014993) - [Building the mouse Logitech won&apos;t make](https://samwilkinson.io/posts/2025-08-24-mx-ergo-mods)
* [2025-08-25, 15:28:00](https://apple.slashdot.org/story/25/08/25/1528251/musks-xai-sues-apple-and-openai-over-alleged-antitrust-violations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Musk&apos;s xAI Sues Apple and OpenAI Over Alleged Antitrust Violations](https://apple.slashdot.org/story/25/08/25/1528251/musks-xai-sues-apple-and-openai-over-alleged-antitrust-violations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-25, 14:59:42](https://lobste.rs/s/iv17mx/macos_dotfiles_should_not_go_library) - [macOS dotfiles should not go in ~/Library/Application Support](https://becca.ooo/blog/macos-dotfiles/)
* [2025-08-25, 14:59:00](https://soylentnews.org/article.pl?sid=25/08/24/2253216&amp;from=rss) - [What Happens When AI Comes for Our Fonts?](https://soylentnews.org/article.pl?sid=25/08/24/2253216&amp;from=rss)
* [2025-08-25, 14:17:38](https://news.ycombinator.com/item?id=45014131) - [Show HN: Base, an SQLite database editor for macOS](https://menial.co.uk/base/)
* [2025-08-25, 13:40:11](https://news.ycombinator.com/item?id=45013737) - [A small change to improve browsers for keyboard navigation](https://b.43z.one/2025-07-22/)
* [2025-08-25, 13:24:53](https://lobste.rs/s/8q8odf/limits_ntp_accuracy_on_linux) - [The Limits of NTP Accuracy on Linux](https://scottstuff.net/posts/2025/05/19/ntp-limits/)
* [2025-08-25, 12:39:36](https://lobste.rs/s/q6exlw/how_much_power_does_gzip_save_on_iot_web) - [How much power does gzip save on IoT web access?](https://bitbanksoftware.blogspot.com/2025/06/how-much-power-does-gzip-save-on-iot.html)
* [2025-08-25, 12:33:13](https://news.ycombinator.com/item?id=45013154) - [What is a color space?](https://www.makingsoftware.com/chapters/color-spaces-models-and-gamuts)
* [2025-08-25, 11:18:35](https://lobste.rs/s/g3piaw/teletext_north_america) - [teletext in north america](https://computer.rip/2025-08-25-teletext-in-north-america.html)
* [2025-08-25, 11:14:18](https://lobste.rs/s/sh8bqg/what_are_oklch_colors) - [What are OKLCH colors?](https://jakub.kr/components/oklch-colors)
* [2025-08-25, 10:54:47](https://lobste.rs/s/0czhsv/who_s_afraid_hard_page_load) - [Who&apos;s Afraid of a Hard Page Load?](https://unplannedobsolescence.com/blog/hard-page-load/)
* [2025-08-25, 10:15:00](https://soylentnews.org/article.pl?sid=25/08/24/136245&amp;from=rss) - [NASA Challenge Winners Cook Up New Industry Developments](https://soylentnews.org/article.pl?sid=25/08/24/136245&amp;from=rss)
* [2025-08-25, 09:11:26](https://lobste.rs/s/btxegl/why_i_read_technical_books) - [Why I Read Technical Books](https://ratfactor.com/b/technical-books)
* [2025-08-25, 08:51:35](https://lobste.rs/s/yskpd6/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/yskpd6/what_are_you_doing_this_week)
* [2025-08-25, 07:20:14](https://lobste.rs/s/n7bchj/once_upon_pipe_west_working_adapter_from) - [Once Upon a Pipe in the West: A working adapter from HDMI to Gardena](https://jhauser.de/once-upon-a-pipe-in-the-west-hdmi-gardena)
* [2025-08-25, 06:32:04](https://news.ycombinator.com/item?id=45010876) - [What are OKLCH colors?](https://jakub.kr/components/oklch-colors)
* [2025-08-25, 05:30:00](https://soylentnews.org/article.pl?sid=25/08/24/1253242&amp;from=rss) - [Radio Waves Can Strengthen Sense of Smell](https://soylentnews.org/article.pl?sid=25/08/24/1253242&amp;from=rss)
* [2025-08-25, 05:22:15](https://news.ycombinator.com/item?id=45010484) - [Capture Checking in Scala](https://nrinaudo.github.io/articles/capture_checking.html)
* [2025-08-25, 05:17:44](https://news.ycombinator.com/item?id=45010461) - [Show HN: Timep – A next-gen profiler and flamegraph-generator for bash code](https://github.com/jkool702/timep)
* [2025-08-25, 04:28:20](https://lobste.rs/s/pmfuza/bro_ban_me_at_ip_level_if_you_don_t_like_me) - [Bro, ban me at the IP level if you don&apos;t like me](https://boston.conman.org/2025/08/21.1)
* [2025-08-25, 02:42:09](https://lobste.rs/s/hvub48/regular_expression_matching_can_be) - [Regular Expression Matching Can Be Simple And Fast (2007)](https://swtch.com/~rsc/regexp/regexp1.html)
* [2025-08-25, 02:12:55](https://lobste.rs/s/uq43gz/don_t_pick_weird_subnets_for_embedded) - [Don&apos;t pick weird subnets for embedded networks, use VRFs](https://blog.brixit.nl/dont-pick-weird-subnets-for-embedded-networks/)
* [2025-08-25, 00:50:00](https://soylentnews.org/article.pl?sid=25/08/23/2218218&amp;from=rss) - [Creative Commons Becomes an Official UNESCO NGO Partner](https://soylentnews.org/article.pl?sid=25/08/23/2218218&amp;from=rss)
* [2025-08-24, 23:26:47](https://lobste.rs/s/bk3cyd/ghrc_io_appears_be_malicious) - [ghrc.io Appears to be Malicious](https://bmitch.net/blog/2025-08-22-ghrc-appears-malicious/)
* [2025-08-24, 21:16:35](https://lobste.rs/s/cya9ki/i_don_t_like_imports) - [I Don&apos;t Like Imports](https://kevincox.ca/2025/07/20/no-imports/)
* [2025-08-24, 20:39:15](https://lobste.rs/s/ypffje/anubis_offload_userscript_offload) - [anubis_offload: userscript to offload Anubis PoW to native CPU or GPU code](https://github.com/DavidBuchanan314/anubis_offload)
* [2025-08-24, 20:03:00](https://soylentnews.org/article.pl?sid=25/08/23/2216200&amp;from=rss) - [U.S. Government Now Holds 10% Stake in Intel](https://soylentnews.org/article.pl?sid=25/08/23/2216200&amp;from=rss)
* [2025-08-24, 15:34:26](https://news.ycombinator.com/item?id=45005016) - [Playing every game of Wordle simultaneously](https://chriskw.xyz/2025/08/24/Hyper-Wordle/)
* [2025-08-24, 15:18:00](https://soylentnews.org/article.pl?sid=25/08/23/1053236&amp;from=rss) - [‘Quiet Cracking’ is Spreading in Offices: Half of Workers are at Breaking Point](https://soylentnews.org/article.pl?sid=25/08/23/1053236&amp;from=rss)
* [2025-08-24, 15:09:04](https://lobste.rs/s/kxlsdz/comparing_nitro_runit) - [Comparing nitro to runit](https://leahneukirchen.org/blog/archive/2025/08/comparing-nitro-to-runit.html)
* [2025-08-24, 11:58:10](https://lobste.rs/s/ynezsm/german_isp_tampered_with_their_dns) - [A German ISP tampered with their DNS - specifically to sabotage my website](https://lina.sh/blog/telefonica-sabotages-me)
* [2025-08-24, 10:36:00](https://soylentnews.org/article.pl?sid=25/08/22/079224&amp;from=rss) - [Turning the Lights Back on](https://soylentnews.org/article.pl?sid=25/08/22/079224&amp;from=rss)
* [2025-08-24, 09:58:13](https://news.ycombinator.com/item?id=45002896) - [The Annotated Transformer (2022)](https://nlp.seas.harvard.edu/annotated-transformer/)
* [2025-08-24, 07:39:36](https://news.ycombinator.com/item?id=45002182) - [A visual introduction to big O notation](https://samwho.dev/big-o/)
* [2025-08-24, 07:23:30](https://news.ycombinator.com/item?id=45002092) - [DeepWiki: Understand Any Codebase](https://www.aitidbits.ai/p/deepwiki)
* [2025-08-24, 07:09:53](https://news.ycombinator.com/item?id=45002048) - [How to Fix Your Context](https://www.dbreunig.com/2025/06/26/how-to-fix-your-context.html)
* [2025-08-24, 06:13:33](https://news.ycombinator.com/item?id=45001815) - [Turning a Decommissioned iPhone into a UniFi Protect Camera](https://www.caseyliss.com/2025/8/15/a-rube-goldberg-camera)
* [2025-08-24, 05:52:00](https://soylentnews.org/article.pl?sid=25/08/22/073206&amp;from=rss) - [Scientists Develop Interface That ‘Reads’ Thoughts From Speech-Impaired Patients](https://soylentnews.org/article.pl?sid=25/08/22/073206&amp;from=rss)
* [2025-08-24, 05:45:13](https://news.ycombinator.com/item?id=45001710) - [Mob Programming (2018)](https://mobprogramming.org/)
* [2025-08-24, 05:10:10](https://news.ycombinator.com/item?id=45001556) - [How to make things slower so they go faster](https://www.gojiberries.io/how-to-make-things-slower-so-they-go-faster-a-jitter-design-manual/)
* [2025-08-24, 01:12:00](https://soylentnews.org/article.pl?sid=25/08/22/0656227&amp;from=rss) - [AWS CEO Says Using AI to Replace Junior Staff is &apos;Dumbest Thing I&apos;ve Ever Heard&apos;](https://soylentnews.org/article.pl?sid=25/08/22/0656227&amp;from=rss)
* [2025-08-23, 20:25:00](https://soylentnews.org/article.pl?sid=25/08/22/0551243&amp;from=rss) - [Webb Discovers a New Moon Orbiting Uranus](https://soylentnews.org/article.pl?sid=25/08/22/0551243&amp;from=rss)
* [2025-08-23, 15:35:00](https://soylentnews.org/article.pl?sid=25/08/22/0547201&amp;from=rss) - [Congressman Proposes Bringing Back Letters of Marque for Cyber Privateers](https://soylentnews.org/article.pl?sid=25/08/22/0547201&amp;from=rss)
* [2025-08-23, 11:00:00](https://soylentnews.org/article.pl?sid=25/08/22/0544206&amp;from=rss) - [Heat-Styling Hair Care Products Release Billions of Nanoparticles That Can Accumulate in Lungs](https://soylentnews.org/article.pl?sid=25/08/22/0544206&amp;from=rss)
* [2025-08-23, 06:10:00](https://soylentnews.org/article.pl?sid=25/08/22/019206&amp;from=rss) - [New Research Ferments the Perfect Recipe for Fine Chocolate Flavour](https://soylentnews.org/article.pl?sid=25/08/22/019206&amp;from=rss)
* [2025-08-23, 01:25:00](https://soylentnews.org/article.pl?sid=25/08/22/010203&amp;from=rss) - [T-Mobile Claimed Selling Location Data Without Consent is Legal—Judges Disagree](https://soylentnews.org/article.pl?sid=25/08/22/010203&amp;from=rss)
* [2025-08-22, 20:39:00](https://soylentnews.org/article.pl?sid=25/08/21/1213229&amp;from=rss) - [Tree Species Face Unprecedented Climate Shifts Across Their Ranges](https://soylentnews.org/article.pl?sid=25/08/21/1213229&amp;from=rss)
* [2025-08-22, 15:56:00](https://soylentnews.org/article.pl?sid=25/08/21/123255&amp;from=rss) - [Adult Sites Are Stashing Exploit Code Inside Racy .svg Files](https://soylentnews.org/article.pl?sid=25/08/21/123255&amp;from=rss)
* [2025-08-22, 11:11:00](https://soylentnews.org/article.pl?sid=25/08/21/1154233&amp;from=rss) - [Teenagers Are Choosing to Study STEM Subjects. It&apos;s a Sign of the Times](https://soylentnews.org/article.pl?sid=25/08/21/1154233&amp;from=rss)
* [2025-08-22, 06:22:00](https://soylentnews.org/article.pl?sid=25/08/20/2255245&amp;from=rss) - [VW Introduces Monthly Subscription to Increase Car Power](https://soylentnews.org/article.pl?sid=25/08/20/2255245&amp;from=rss)
* [2025-08-22, 01:35:00](https://soylentnews.org/article.pl?sid=25/08/20/2242220&amp;from=rss) - [We Need to Become Unoptomizable](https://soylentnews.org/article.pl?sid=25/08/20/2242220&amp;from=rss)
