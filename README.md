# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI

* [Ads Are Coming To ChatGPT in the Coming Weeks](https://slashdot.org/story/26/01/16/1827203/ads-are-coming-to-chatgpt-in-the-coming-weeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Advertising will soon be integrated into ChatGPT, shaping the platform's monetization strategy. [Comments](https://slashdot.org/story/26/01/16/1827203/ads-are-coming-to-chatgpt-in-the-coming-weeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [AI Has Made Salesforce Engineers More Productive, So the Company Has Stopped Hiring Them, CEO Says](https://it.slashdot.org/story/26/01/16/1650206/ai-has-made-salesforce-engineers-more-productive-so-the-company-has-stopped-hiring-them-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Salesforce's CEO reveals how AI efficiencies are changing hiring practices. [Comments](https://it.slashdot.org/story/26/01/16/1650206/ai-has-made-salesforce-engineers-more-productive-so-the-company-has-stopped-hiring-them-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Launch HN: Indy (YC S21) – A support app designed for ADHD brains](https://www.shimmer.care/indy-redirect) - This app provides tools tailored for ADHD users. [Comments](https://news.ycombinator.com/item?id=46648144)

* [Ruby on Rails Creator Says AI Coding Tools Still Can't Match Most Junior Programmers](https://developers.slashdot.org/story/26/01/16/166254/ruby-on-rails-creator-says-ai-coding-tools-still-cant-match-most-junior-programmers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A critique on AI tools' coding capabilities from a leading developer. [Comments](https://developers.slashdot.org/story/26/01/16/166254/ruby-on-rails-creator-says-ai-coding-tools-still-cant-match-most-junior-programmers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Environment and Space

* [Earth from Space: The Fate of a Giant](https://www.esa.int/ESA_Multimedia/Images/2026/01/Earth_from_Space_The_fate_of_a_giant) - A look at Earth through space imaging and changes to its massive geographical features. [Comments](https://news.ycombinator.com/item?id=46649813)

* [Canada slashes 100% tariffs on Chinese EVs to 6%](https://electrek.co/2026/01/16/canada-breaks-with-us-slashes-100-tariffs-chinese-evs/) - A notable shift in tariff policies impacting electric vehicle imports from China. [Comments](https://news.ycombinator.com/item?id=46648778)

## Science and Innovation

* [Experimental High Dynamic Range video playback on Windows in Firefox Nightly 148](https://mozillagfx.wordpress.com/2026/01/16/experimental-high-dynamic-range-video-playback-on-windows-in-firefox-nightly-148/) - Firefox introduces experimental HDR video playback capabilities for Windows.

* [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss) - Remarkable discovery reveals ancient bee nesting behavior. [Comments](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss)

## Economy and Infrastructure

* [Seattle is Building Light Rail Like It's 1999](https://news.slashdot.org/story/26/01/16/1813239/seattle-is-building-light-rail-like-its-1999?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examining the delays and challenges in Seattle's light rail expansion. [Comments](https://news.slashdot.org/story/26/01/16/1813239/seattle-is-building-light-rail-like-its-1999?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [China Clamps Down on High-Speed Traders, Removing Servers](https://tech.slashdot.org/story/26/01/16/1526243/china-clamps-down-on-high-speed-traders-removing-servers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A crackdown on high-frequency trading servers by Chinese authorities to prevent market abuses. [Comments](https://tech.slashdot.org/story/26/01/16/1526243/china-clamps-down-on-high-speed-traders-removing-servers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Entertainment and Media

* ['Star Wars' Boss Kathleen Kennedy Steps Down From Lucasfilm](https://entertainment.slashdot.org/story/26/01/16/0410251/star-wars-boss-kathleen-kennedy-steps-down-from-lucasfilm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Major leadership change within Lucasfilm as Kathleen Kennedy departs. [Comments](https://entertainment.slashdot.org/story/26/01/16/0410251/star-wars-boss-kathleen-kennedy-steps-down-from-lucasfilm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2026-01-16, 18:45:00](https://slashdot.org/story/26/01/16/1827203/ads-are-coming-to-chatgpt-in-the-coming-weeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ads Are Coming To ChatGPT in the Coming Weeks](https://slashdot.org/story/26/01/16/1827203/ads-are-coming-to-chatgpt-in-the-coming-weeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 18:18:20](https://news.ycombinator.com/item?id=46649813) - [Earth from Space: The Fate of a Giant](https://www.esa.int/ESA_Multimedia/Images/2026/01/Earth_from_Space_The_fate_of_a_giant)
* [2026-01-16, 18:13:00](https://news.slashdot.org/story/26/01/16/1813239/seattle-is-building-light-rail-like-its-1999?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Seattle is Building Light Rail Like It&apos;s 1999](https://news.slashdot.org/story/26/01/16/1813239/seattle-is-building-light-rail-like-its-1999?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 17:32:40](https://news.ycombinator.com/item?id=46649142) - [STFU](https://github.com/Pankajtanwarbanna/stfu)
* [2026-01-16, 17:25:00](https://tech.slashdot.org/story/26/01/16/179214/verizon-offers-20-credit-after-nationwide-outage-stranded-users-in-sos-mode-for-hours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon Offers $20 Credit After Nationwide Outage Stranded Users in SOS Mode For Hours](https://tech.slashdot.org/story/26/01/16/179214/verizon-offers-20-credit-after-nationwide-outage-stranded-users-in-sos-mode-for-hours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 17:14:15](https://news.ycombinator.com/item?id=46648885) - [Dell UltraSharp 52 Thunderbolt Hub Monitor](https://www.dell.com/en-us/shop/dell-ultrasharp-52-thunderbolt-hub-monitor-u5226kw/apd/210-bthw/monitors-monitor-accessories)
* [2026-01-16, 17:05:28](https://news.ycombinator.com/item?id=46648778) - [Canada slashes 100% tariffs on Chinese EVs to 6%](https://electrek.co/2026/01/16/canada-breaks-with-us-slashes-100-tariffs-chinese-evs/)
* [2026-01-16, 17:00:29](https://news.ycombinator.com/item?id=46648714) - [Zep AI (Agent Context Engineering, YC W24) Is Hiring Forward Deployed Engineers](https://www.ycombinator.com/companies/zep-ai/jobs/)
* [2026-01-16, 16:49:00](https://it.slashdot.org/story/26/01/16/1650206/ai-has-made-salesforce-engineers-more-productive-so-the-company-has-stopped-hiring-them-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Has Made Salesforce Engineers More Productive, So the Company Has Stopped Hiring Them, CEO Says](https://it.slashdot.org/story/26/01/16/1650206/ai-has-made-salesforce-engineers-more-productive-so-the-company-has-stopped-hiring-them-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 16:22:31](https://lobste.rs/s/d1m8cw/openbsd_current_now_runs_as_guest_under) - [OpenBSD-current now runs as guest under Apple Hypervisor](https://www.undeadly.org/cgi?action=article;sid=20260115203619)
* [2026-01-16, 16:20:21](https://news.ycombinator.com/item?id=46648144) - [Launch HN: Indy (YC S21) – A support app designed for ADHD brains](https://www.shimmer.care/indy-redirect)
* [2026-01-16, 16:06:00](https://developers.slashdot.org/story/26/01/16/166254/ruby-on-rails-creator-says-ai-coding-tools-still-cant-match-most-junior-programmers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ruby on Rails Creator Says AI Coding Tools Still Can&apos;t Match Most Junior Programmers](https://developers.slashdot.org/story/26/01/16/166254/ruby-on-rails-creator-says-ai-coding-tools-still-cant-match-most-junior-programmers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 16:03:37](https://lobste.rs/s/boyarm/6_day_ip_address_certificates_are) - [6-day and IP Address Certificates are Generally Available](https://letsencrypt.org/2026/01/15/6day-and-ip-general-availability.html)
* [2026-01-16, 15:57:05](https://lobste.rs/s/ajmcb6/designated_initializers_best_feature_c) - [Designated Initializers, the best feature of C++20](https://mropert.github.io/2026/01/15/designed_initializers/)
* [2026-01-16, 15:37:19](https://news.ycombinator.com/item?id=46647491) - [6-Day and IP Address Certificates Are Generally Available](https://letsencrypt.org/2026/01/15/6day-and-ip-general-availability)
* [2026-01-16, 15:26:00](https://tech.slashdot.org/story/26/01/16/1526243/china-clamps-down-on-high-speed-traders-removing-servers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Clamps Down on High-Speed Traders, Removing Servers](https://tech.slashdot.org/story/26/01/16/1526243/china-clamps-down-on-high-speed-traders-removing-servers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 15:23:00](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss) - [You Need A Kitchen Slide Rule](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss)
* [2026-01-16, 15:04:22](https://news.ycombinator.com/item?id=46647059) - [Read_once(), Write_once(), but Not for Rust](https://lwn.net/SubscriberLink/1053142/8ec93e58d5d3cc06/)
* [2026-01-16, 15:01:31](https://lobste.rs/s/4seyoj/read_once_write_once_not_for_rust) - [READ_ONCE(), WRITE_ONCE(), but not for Rust](https://lwn.net/SubscriberLink/1053142/8ec93e58d5d3cc06/)
* [2026-01-16, 14:56:12](https://news.ycombinator.com/item?id=46646958) - [Can You Disable Spotlight and Siri in macOS Tahoe?](https://eclecticlight.co/2026/01/16/can-you-disable-spotlight-and-siri-in-macos-tahoe/)
* [2026-01-16, 14:48:03](https://lobste.rs/s/ahv2me/state_rust_cryptography_2026) - [The State of Rust Cryptography in 2026](https://kerkour.com/rust-cryptography-ecosystem-2026)
* [2026-01-16, 14:42:47](https://lobste.rs/s/dggcj3/astro_technology_company_joins) - [The Astro Technology Company joins Cloudflare](https://astro.build/blog/joining-cloudflare/)
* [2026-01-16, 14:40:00](https://hardware.slashdot.org/story/26/01/16/1332213/hard-drive-prices-have-surged-by-an-average-of-46-since-september?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hard Drive Prices Have Surged By an Average of 46% Since September](https://hardware.slashdot.org/story/26/01/16/1332213/hard-drive-prices-have-surged-by-an-average-of-46-since-september?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 14:37:49](https://news.ycombinator.com/item?id=46646777) - [Cursor&apos;s latest \&quot;browser experiment\&quot; implied success without evidence](https://embedding-shapes.github.io/cursor-implied-success-without-evidence/)
* [2026-01-16, 14:25:54](https://news.ycombinator.com/item?id=46646645) - [Cloudflare acquires Astro](https://astro.build/blog/joining-cloudflare/)
* [2026-01-16, 14:00:00](https://news.slashdot.org/story/26/01/16/1313243/codeorg-use-ai-in-an-interview-without-our-ok-and-youre-dead-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Code.org: Use AI In an Interview Without Our OK and You&apos;re Dead To Us](https://news.slashdot.org/story/26/01/16/1313243/codeorg-use-ai-in-an-interview-without-our-ok-and-youre-dead-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 13:44:25](https://news.ycombinator.com/item?id=46646263) - [Michelangelo&apos;s first painting, created when he was 12 or 13](https://www.openculture.com/2026/01/discover-michelangelos-first-painting.html)
* [2026-01-16, 13:39:31](https://news.ycombinator.com/item?id=46646226) - [Dev-owned testing: Why it fails in practice and succeeds in theory](https://dl.acm.org/doi/10.1145/3780063.3780066)
* [2026-01-16, 13:39:06](https://lobste.rs/s/nkss2q/ergonomic_abstractions_for_numerical) - [Ergonomic abstractions for numerical computing: My story so far](http://ocramz.github.io/posts/2026-01-16-ergonomics-numerical.html)
* [2026-01-16, 13:20:20](https://news.ycombinator.com/item?id=46646091) - [psc: The ps utility, with an eBPF twist and container context](https://github.com/loresuso/psc)
* [2026-01-16, 13:00:00](https://slashdot.org/story/26/01/16/0419230/amazon-is-buying-americas-first-new-copper-output-in-more-than-a-decade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Is Buying America&apos;s First New Copper Output In More Than a Decade](https://slashdot.org/story/26/01/16/0419230/amazon-is-buying-americas-first-new-copper-output-in-more-than-a-decade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 12:58:40](https://news.ycombinator.com/item?id=46645942) - [Show HN: mdto.page – Turn Markdown into a shareable webpage instantly](https://mdto.page)
* [2026-01-16, 12:55:44](https://lobste.rs/s/krjjdr/patching_wii_news_channel_serve_local) - [Patching the Wii News Channel to serve local news](https://raulnegron.me/2025/wii-news-pr/)
* [2026-01-16, 12:43:15](https://lobste.rs/s/bxwek7/glasgow_interface_explorer_code_conduct) - [Glasgow Interface Explorer Code of Conduct](https://glasgow-embedded.org/latest/conduct.html)
* [2026-01-16, 12:03:52](https://news.ycombinator.com/item?id=46645615) - [Just the Browser](https://justthebrowser.com/)
* [2026-01-16, 11:37:27](https://lobste.rs/s/vlzucv/experimental_high_dynamic_range_video) - [Experimental High Dynamic Range video playback on Windows in Firefox Nightly 148](https://mozillagfx.wordpress.com/2026/01/16/experimental-high-dynamic-range-video-playback-on-windows-in-firefox-nightly-148/)
* [2026-01-16, 10:57:38](https://news.ycombinator.com/item?id=46645176) - [Why DuckDB is my first choice for data processing](https://www.robinlinacre.com/recommend_duckdb/)
* [2026-01-16, 10:34:11](https://lobste.rs/s/xaxgtt/modern_java) - [Modern Java](https://javabook.mccue.dev)
* [2026-01-16, 10:30:00](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss) - [Over Half a Million Windows Users are Switching to Linux](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss)
* [2026-01-16, 10:01:31](https://lobste.rs/s/x59zd7/magic_better_software_conference) - [The Magic of the Better Software Conference](https://www.rfleury.com/p/the-magic-of-the-better-software)
* [2026-01-16, 10:00:00](https://entertainment.slashdot.org/story/26/01/16/0410251/star-wars-boss-kathleen-kennedy-steps-down-from-lucasfilm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Star Wars&apos; Boss Kathleen Kennedy Steps Down From Lucasfilm](https://entertainment.slashdot.org/story/26/01/16/0410251/star-wars-boss-kathleen-kennedy-steps-down-from-lucasfilm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 09:27:03](https://news.ycombinator.com/item?id=46644661) - [The spectrum of isolation: From bare metal to WebAssembly](https://buildsoftwaresystems.com/post/guide-to-execution-environments/)
* [2026-01-16, 09:25:55](https://lobste.rs/s/jkxpni/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/jkxpni/what_are_you_doing_this_weekend)
* [2026-01-16, 08:01:02](https://news.ycombinator.com/item?id=46644181) - [Interactive eBPF](https://ebpf.party/)
* [2026-01-16, 07:37:07](https://lobste.rs/s/gpvztk/stackwarp_vulnerability) - [StackWarp Vulnerability](https://stackwarpattack.com/)
* [2026-01-16, 07:00:00](https://news.slashdot.org/story/26/01/16/043253/us-carbon-pollution-rose-in-2025-a-reversal-from-prior-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Carbon Pollution Rose In 2025, a Reversal From Prior Years](https://news.slashdot.org/story/26/01/16/043253/us-carbon-pollution-rose-in-2025-a-reversal-from-prior-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 06:24:49](https://lobste.rs/s/go7hr7/histomat_f_oss_we_should_reclaim_llms_not) - [Histomat of F/OSS: We should reclaim LLMs, not reject them](https://writings.hongminhee.org/2026/01/histomat-foss-llm/)
* [2026-01-16, 05:47:00](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss) - [BreachForum Breach](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss)
* [2026-01-16, 03:30:00](https://tech.slashdot.org/story/26/01/15/2248249/study-finds-weak-evidence-linking-social-media-use-to-teen-mental-health-problems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Finds Weak Evidence Linking Social Media Use to Teen Mental Health Problems](https://tech.slashdot.org/story/26/01/15/2248249/study-finds-weak-evidence-linking-social-media-use-to-teen-mental-health-problems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 03:10:36](https://news.ycombinator.com/item?id=46642560) - [OpenBSD-current now runs as guest under Apple Hypervisor](https://www.undeadly.org/cgi?action=article;sid=20260115203619)
* [2026-01-16, 02:57:37](https://news.ycombinator.com/item?id=46642490) - [Show HN: Aventos – An experiment in cheap AI SEO](https://www.aventos.dev/)
* [2026-01-16, 02:14:15](https://lobste.rs/s/jqntdm/0_click_exploit_chain_for_pixel_9_part_1) - [A 0-click exploit chain for the Pixel 9, part 1: Decoding Dolby](https://projectzero.google/2026/01/pixel-0-click-part-1.html)
* [2026-01-16, 02:07:44](https://lobste.rs/s/xyiyri/integration_tests_are_best_tests) - [Integration tests are best tests](https://jayconrod.com/posts/133/integration-tests-are-best-tests)
* [2026-01-16, 02:02:00](https://entertainment.slashdot.org/story/26/01/15/2239246/amazon-is-making-a-fallout-shelter-competition-reality-tv-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Is Making a Fallout Shelter Competition Reality TV Show](https://entertainment.slashdot.org/story/26/01/15/2239246/amazon-is-making-a-fallout-shelter-competition-reality-tv-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 01:25:00](https://hardware.slashdot.org/story/26/01/15/2236205/new-york-introduces-legislation-to-crack-down-on-3d-printers-that-make-ghost-guns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New York Introduces Legislation To Crack Down On 3D Printers That Make Ghost Guns](https://hardware.slashdot.org/story/26/01/15/2236205/new-york-introduces-legislation-to-crack-down-on-3d-printers-that-make-ghost-guns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 01:06:00](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss) - [Survey: Even Meta And Microsoft Engineers Ditch Company AI For Claude](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss)
* [2026-01-16, 00:45:00](https://tech.slashdot.org/story/26/01/15/2228257/irans-internet-shutdown-is-now-one-of-the-longest-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran&apos;s Internet Shutdown Is Now One of the Longest Ever](https://tech.slashdot.org/story/26/01/15/2228257/irans-internet-shutdown-is-now-one-of-the-longest-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 00:15:53](https://lobste.rs/s/e3xhzq/why_is_zig_so_cool) - [Why is Zig so Cool?](https://nilostolte.github.io/tech/articles/ZigCool.html)
* [2026-01-16, 00:05:01](https://news.ycombinator.com/item?id=46641284) - [List of individual trees](https://en.wikipedia.org/wiki/List_of_individual_trees)
* [2026-01-16, 00:01:51](https://lobste.rs/s/esmvsj/http_ratelimit_headers) - [HTTP RateLimit headers](https://dotat.at/@/2026-01-13-http-ratelimit.html)
* [2026-01-15, 23:56:26](https://news.ycombinator.com/item?id=46641216) - [The Alignment Game](https://dmvaldman.github.io/alignment-game/)
* [2026-01-15, 20:17:00](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss) - [GNOME Dev Gives Fans of Linux&apos;s Middle-Click Paste the Middle Finger](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss)
* [2026-01-15, 19:38:02](https://news.ycombinator.com/item?id=46638013) - [Briar keeps Iran connected via Bluetooth and Wi-Fi when the internet goes dark](https://briarproject.org/manual/fa/)
* [2026-01-15, 19:20:48](https://news.ycombinator.com/item?id=46637723) - [Show HN: 1Code – Open-source Cursor-like UI for Claude Code](https://github.com/21st-dev/1code)
* [2026-01-15, 15:31:00](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss) - [Cray Customer Service – Memories (1979 to 2014) by Charles Clark](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss)
* [2026-01-15, 14:10:40](https://lobste.rs/s/ahdtzt/forgejo_v14_0_is_available) - [Forgejo v14.0 is available](https://forgejo.org/2026-01-release-v14-0/)
* [2026-01-15, 13:26:20](https://lobste.rs/s/xe6dnb/iterative_image_reconstruction_using) - [iterative image reconstruction using random cubic bézier strokes](https://tangled.org/luthenwald.tngl.sh/splined)
* [2026-01-15, 12:27:40](https://lobste.rs/s/pddded/why_senior_engineers_let_bad_projects) - [Why Senior Engineers Let Bad Projects Fail](https://lalitm.com/post/why-senior-engineers-let-bad-projects-fail/)
* [2026-01-15, 10:50:00](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss) - [A Fix for Frost: Engineers Use Electricity to Zap Ice Without Heat or Chemicals](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss)
* [2026-01-15, 08:38:27](https://lobste.rs/s/hshaq4/alternatives_minio_for_single_node_local) - [Alternatives to MinIO for single-node local S3](https://rmoff.net/2026/01/14/alternatives-to-minio-for-single-node-local-s3/)
* [2026-01-15, 08:10:06](https://lobste.rs/s/r7rdk7/lobsters_battlestations_screenshots) - [Lobsters Battlestations and Screenshots (2026)](https://lobste.rs/s/r7rdk7/lobsters_battlestations_screenshots)
* [2026-01-15, 06:12:00](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss) - [Resuscitating a 1934 Briggs &amp; Stratton Washing Machine Engine](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss)
* [2026-01-15, 05:14:08](https://news.ycombinator.com/item?id=46628329) - [Pocket TTS: A high quality TTS that gives your CPU a voice](https://kyutai.org/blog/2026-01-13-pocket-tts)
* [2026-01-15, 02:48:00](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss) - [RIP - &apos;Dilbert&apos; Creator Scott Adams Dies at 68 After Prostate Cancer Battle](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss)
* [2026-01-15, 01:25:00](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss) - [The AIdigest.org&apos;s AI Village](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss)
* [2026-01-14, 22:19:36](https://news.ycombinator.com/item?id=46624563) - [Training my smartwatch to track intelligence](https://dmvaldman.github.io/rooklift/)
* [2026-01-14, 20:52:21](https://lobste.rs/s/xa4ndh/selfci_minimalistic_local_first_unix) - [SelfCI - a minimalistic local-first Unix-philosophy-abiding CI](https://app.radicle.xyz/nodes/radicle.dpc.pw/rad:z2tDzYbAXxTQEKTGFVwiJPajkbeDU)
* [2026-01-14, 20:33:00](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss) - [Tech Bloggers Switching From Windows to Linux](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss)
* [2026-01-14, 15:49:00](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss) - [China Expected to Approve H200 Imports in Early 2026, Report Claims](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss)
* [2026-01-14, 11:06:00](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss) - [Some Dogs Eavesdrop on Their Owners to Learn New Words](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss)
* [2026-01-14, 06:24:00](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss) - [An Ultra-Fast Quantum Tunneling Device for the 6G Terahertz Era](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss)
* [2026-01-14, 01:41:00](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss) - [Volkswagen is Bringing Physical Buttons Back to the Dashboard With the Polo EV](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss)
* [2026-01-13, 20:52:00](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss) - [A Sit-Stand Ratio ‘Sweet Spot’ May Boost Office Productivity](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss)
* [2026-01-13, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss) - [Poul-Henning Kamp&apos;s Feedback to the EU on Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss)
* [2026-01-13, 11:26:00](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss) - [A 2,000-Year-Old Fingerprint May Solve Mystery of Scandinavia&apos;s Oldest Wooden Boat](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss)
* [2026-01-13, 06:45:00](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss) - [How Doubting Your Doubts May Increase Commitment to Goals](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss)
* [2026-01-13, 01:52:00](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss) - [The Book Only Gets 3 Stars, but is Considered Great Literature](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss)
* [2026-01-12, 21:11:00](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss) - [NASA Postponed ISS Spacewalk Over Medical Issue, Crew Will Return Early](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss)
* [2026-01-12, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss) - [Very Tough Microbes May Help Us Cement Our Future on Mars](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss)
* [2026-01-12, 13:58:23](https://news.ycombinator.com/item?id=46588584) - [Zorgdomein Integration: A Guide to Secure .NET and Azure Architecture](https://plakhlani.in/healthcare/bidirectional-patient-data-exchange-with-zorgdomein/)
* [2026-01-12, 13:42:42](https://news.ycombinator.com/item?id=46588379) - [Lock-Picking Robot](https://github.com/etinaude/Lock-Picking-Robot)
* [2026-01-12, 12:00:00](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss) - [Oceans Are Struggling To Absorb Carbon As Microplastics Flood Their Waters](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss)
* [2026-01-12, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss) - [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss)
* [2026-01-12, 02:33:00](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss) - [Bose Open-Sources its SoundTouch Home Theater Smart Speakers Ahead of End-of-Life](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss)
