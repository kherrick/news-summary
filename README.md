# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Developments

* [Bjarne fix your freaking language](https://marler8997.github.io/blog/bjarne-fix-your-language/) ([comments](https://news.ycombinator.com/item?id=45896733))

* [Hard drives on backorder for two years as AI data centers trigger HDD shortage](https://www.tomshardware.com/pc-components/hdds/ai-triggers-hard-drive-shortage-amidst-dram-squeeze-enterprise-hard-drives-on-backorder-by-2-years-as-hyperscalers-switch-to-qlc-ssds) ([comments](https://news.ycombinator.com/item?id=45896707))

* [Google Is Introducing Its Own Version of Apple's Private AI Cloud Compute](https://tech.slashdot.org/story/25/11/12/0137208/google-is-introducing-its-own-version-of-apples-private-ai-cloud-compute?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/11/12/0137208/google-is-introducing-its-own-version-of-apples-private-ai-cloud-compute?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [YouTube TV Blackout Is Costing Disney an Estimated $4.3 Million Per Day In Lost Revenue](https://news.slashdot.org/story/25/11/11/2242218/youtube-tv-blackout-is-costing-disney-an-estimated-43-million-per-day-in-lost-revenue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/11/11/2242218/youtube-tv-blackout-is-costing-disney-an-estimated-43-million-per-day-in-lost-revenue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Programming and Software Tools

* [Abstractions for asynchronously working with series of data](https://worm-blossom.org/ufotofu) ([comments](https://lobste.rs/s/wf3oia/abstractions_for_asynchronously))

* [Perkeep – Personal storage system for life](https://perkeep.org/) ([comments](https://news.ycombinator.com/item?id=45896130))

* [Wordle in LibreOffice](https://bojidar-bg.dev/blog/2025-11-11-wordle-libreoffice/) ([comments](https://lobste.rs/s/wfxruv/wordle_libreoffice))

## Product Releases and Updates

* [Perkeep v0.12 released](https://github.com/perkeep/perkeep/releases/tag/v0.12) ([comments](https://lobste.rs/s/jghwoj/perkeep_v0_12_released))

* [New Physical Attacks Are Quickly Diluting Secure Enclave Defenses From Nvidia, AMD, and Intel](https://soylentnews.org/article.pl?sid=25/11/10/1130222&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/11/10/1130222&amp;from=rss))

## AI and Ethics

* [Why Nietzsche matters in the age of artificial intelligence](https://cacm.acm.org/blogcacm/why-nietzsche-matters-in-the-age-of-artificial-intelligence/) ([comments](https://news.ycombinator.com/item?id=45894588))

* [OpenAI Used Song Lyrics In Violation of Copyright Laws, German Court Says](https://yro.slashdot.org/story/25/11/11/2124206/openai-used-song-lyrics-in-violation-of-copyright-laws-german-court-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/11/11/2124206/openai-used-song-lyrics-in-violation-of-copyright-laws-german-court-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Notable Discussions

* [The Department of War just shot the accountants and opted for speed](https://steveblank.com/2025/11/11/the-department-of-war-just-shot-the-accountants-and-opted-for-speed/) ([comments](https://news.ycombinator.com/item?id=45887699))

* [Google Announces Even More AI In Photos App, Powered By Nano Banana](https://tech.slashdot.org/story/25/11/11/2119221/google-announces-even-more-ai-in-photos-app-powered-by-nano-banana?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/11/11/2119221/google-announces-even-more-ai-in-photos-app-powered-by-nano-banana?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

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

* [2025-11-12, 06:13:17](https://lobste.rs/s/wf3oia/abstractions_for_asynchronously) - [Abstractions for asynchronously working with series of data](https://worm-blossom.org/ufotofu)
* [2025-11-12, 05:44:10](https://news.ycombinator.com/item?id=45896733) - [Bjarne fix your freaking language](https://marler8997.github.io/blog/bjarne-fix-your-language/)
* [2025-11-12, 05:36:41](https://news.ycombinator.com/item?id=45896707) - [Hard drives on backorder for two years as AI data centers trigger HDD shortage](https://www.tomshardware.com/pc-components/hdds/ai-triggers-hard-drive-shortage-amidst-dram-squeeze-enterprise-hard-drives-on-backorder-by-2-years-as-hyperscalers-switch-to-qlc-ssds)
* [2025-11-12, 05:35:27](https://lobste.rs/s/wfxruv/wordle_libreoffice) - [Wordle in LibreOffice](https://bojidar-bg.dev/blog/2025-11-11-wordle-libreoffice/)
* [2025-11-12, 03:34:32](https://news.ycombinator.com/item?id=45896130) - [Perkeep – Personal storage system for life](https://perkeep.org/)
* [2025-11-12, 03:01:18](https://lobste.rs/s/7zogyb/reproachfully_presenting_resilient) - [Reproachfully Presenting Resilient Recursive Descent Parsing](https://thunderseethe.dev/posts/parser-base/)
* [2025-11-12, 02:58:29](https://lobste.rs/s/jghwoj/perkeep_v0_12_released) - [Perkeep v0.12 released](https://github.com/perkeep/perkeep/releases/tag/v0.12)
* [2025-11-12, 02:51:00](https://soylentnews.org/article.pl?sid=25/11/10/122217&amp;from=rss) - [The Art and Science of Negotiation](https://soylentnews.org/article.pl?sid=25/11/10/122217&amp;from=rss)
* [2025-11-12, 01:40:00](https://tech.slashdot.org/story/25/11/12/0137208/google-is-introducing-its-own-version-of-apples-private-ai-cloud-compute?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Is Introducing Its Own Version of Apple&apos;s Private AI Cloud Compute](https://tech.slashdot.org/story/25/11/12/0137208/google-is-introducing-its-own-version-of-apples-private-ai-cloud-compute?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-12, 00:30:00](https://news.slashdot.org/story/25/11/11/2242218/youtube-tv-blackout-is-costing-disney-an-estimated-43-million-per-day-in-lost-revenue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube TV Blackout Is Costing Disney an Estimated $4.3 Million Per Day In Lost Revenue](https://news.slashdot.org/story/25/11/11/2242218/youtube-tv-blackout-is-costing-disney-an-estimated-43-million-per-day-in-lost-revenue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 23:59:49](https://news.ycombinator.com/item?id=45894588) - [Why Nietzsche matters in the age of artificial intelligence](https://cacm.acm.org/blogcacm/why-nietzsche-matters-in-the-age-of-artificial-intelligence/)
* [2025-11-11, 23:55:18](https://lobste.rs/s/n0btpj/how_arch_delta_saves_80_bandwidth_on) - [How arch-delta Saves 80+% Of Bandwidth On Upgrades](https://djugei.github.io/how-arch-delta-works/)
* [2025-11-11, 23:50:00](https://it.slashdot.org/story/25/11/11/2233201/clickfix-may-be-the-biggest-security-threat-your-family-has-never-heard-of?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ClickFix May Be the Biggest Security Threat Your Family Has Never Heard Of](https://it.slashdot.org/story/25/11/11/2233201/clickfix-may-be-the-biggest-security-threat-your-family-has-never-heard-of?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 23:40:54](https://lobste.rs/s/bjbyt9/servo_new_web_engine_written_rust) - [Servo: A new web engine written in Rust](https://blogs.igalia.com/mrego/servo-a-new-web-engine-written-in-rust/)
* [2025-11-11, 23:20:00](https://developers.slashdot.org/story/25/11/11/2213205/visual-studio-2026-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Visual Studio 2026 Released](https://developers.slashdot.org/story/25/11/11/2213205/visual-studio-2026-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 22:51:12](https://lobste.rs/s/egoqqc/ffmpeg_google_fund_us_stop_sending_bugs) - [FFmpeg to Google: Fund Us or Stop Sending Bugs](https://thenewstack.io/ffmpeg-to-google-fund-us-or-stop-sending-bugs/)
* [2025-11-11, 22:50:32](https://news.ycombinator.com/item?id=45893986) - [.NET MAUI is coming to Linux and the browser](https://avaloniaui.net/blog/net-maui-is-coming-to-linux-and-the-browser-powered-by-avalonia)
* [2025-11-11, 22:50:00](https://games.slashdot.org/story/25/11/11/2131217/ps5-has-now-officially-outsold-every-xbox-console-ever-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PS5 Has Now Officially Outsold Every Xbox Console Ever Released](https://games.slashdot.org/story/25/11/11/2131217/ps5-has-now-officially-outsold-every-xbox-console-ever-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 22:49:27](https://lobste.rs/s/yvtunz/sudo_rs_update_address_two_moderate) - [sudo-rs update to address two moderate vulnerabilities](https://bugs.launchpad.net/ubuntu/+source/rust-sudo-rs/+bug/2130623)
* [2025-11-11, 22:31:41](https://news.ycombinator.com/item?id=45893795) - [Four strange places to see London&apos;s Roman Wall](https://diamondgeezer.blogspot.com/2025/11/odd-places-to-see-londons-roman-wall.html)
* [2025-11-11, 22:18:17](https://news.ycombinator.com/item?id=45893646) - [Heroku Support for .NET 10](https://www.heroku.com/blog/support-for-dotnet-10-lts-what-developers-need-know/)
* [2025-11-11, 22:10:00](https://yro.slashdot.org/story/25/11/11/2124206/openai-used-song-lyrics-in-violation-of-copyright-laws-german-court-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Used Song Lyrics In Violation of Copyright Laws, German Court Says](https://yro.slashdot.org/story/25/11/11/2124206/openai-used-song-lyrics-in-violation-of-copyright-laws-german-court-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 22:03:00](https://soylentnews.org/article.pl?sid=25/11/10/1159252&amp;from=rss) - [MX Linux 25 “Infinity” Is Now Available for Download, Based on Debian 13 “Trixie”](https://soylentnews.org/article.pl?sid=25/11/10/1159252&amp;from=rss)
* [2025-11-11, 21:30:00](https://tech.slashdot.org/story/25/11/11/2119221/google-announces-even-more-ai-in-photos-app-powered-by-nano-banana?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Announces Even More AI In Photos App, Powered By Nano Banana](https://tech.slashdot.org/story/25/11/11/2119221/google-announces-even-more-ai-in-photos-app-powered-by-nano-banana?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 21:25:19](https://news.ycombinator.com/item?id=45893095) - [I didn&apos;t reverse-engineer the protocol for my blood pressure monitor in 24 hours](https://james.belchamber.com/articles/blood-pressure-monitor-reverse-engineering/)
* [2025-11-11, 21:24:42](https://lobste.rs/s/nr2reg/readonly_characters_are_big_deal) - [Readonly Characters Are a Big Deal](https://matklad.github.io/2025/11/10/readonly-characters.html)
* [2025-11-11, 21:18:26](https://news.ycombinator.com/item?id=45893004) - [X5.1 solar flare, G4 geomagnetic storm watch](https://www.spaceweatherlive.com/en/news/view/593/20251111-x5-1-solar-flare-g4-geomagnetic-storm-watch.html)
* [2025-11-11, 21:00:35](https://news.ycombinator.com/item?id=45892773) - [Meticulous (YC S21) is hiring to redefine software dev](https://jobs.ashbyhq.com/meticulous/3197ae3d-bb26-4750-9ed7-b830f640515e)
* [2025-11-11, 20:48:00](https://news.slashdot.org/story/25/11/11/1947215/ffmpeg-to-google-fund-us-or-stop-sending-bugs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FFmpeg To Google: Fund Us or Stop Sending Bugs](https://news.slashdot.org/story/25/11/11/1947215/ffmpeg-to-google-fund-us-or-stop-sending-bugs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 20:27:38](https://news.ycombinator.com/item?id=45892394) - [Collaboration sucks](https://newsletter.posthog.com/p/collaboration-sucks)
* [2025-11-11, 20:11:33](https://news.ycombinator.com/item?id=45892191) - [The terminal of the future](https://jyn.dev/the-terminal-of-the-future)
* [2025-11-11, 20:11:04](https://lobste.rs/s/ic1xkj/terminal_future) - [the terminal of the future](https://jyn.dev/the-terminal-of-the-future)
* [2025-11-11, 20:09:00](https://news.slashdot.org/story/25/11/11/1917226/us-senator-challenges-defense-industry-on-right-to-repair-opposition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Senator Challenges Defense Industry on Right-to-Repair Opposition](https://news.slashdot.org/story/25/11/11/1917226/us-senator-challenges-defense-industry-on-right-to-repair-opposition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 19:52:55](https://news.ycombinator.com/item?id=45891968) - [Adk-go: code-first Go toolkit for building, evaluating, and deploying AI agents](https://github.com/google/adk-go)
* [2025-11-11, 19:48:19](https://news.ycombinator.com/item?id=45891907) - [A modern 35mm film scanner for home](https://www.soke.engineering/)
* [2025-11-11, 19:44:49](https://news.ycombinator.com/item?id=45891868) - [A catalog of side effects](https://bernsteinbear.com/blog/compiler-effects/)
* [2025-11-11, 19:40:15](https://news.ycombinator.com/item?id=45891817) - [Agentic pelican on a bicycle](https://www.robert-glaser.de/agentic-pelican-on-a-bicycle/)
* [2025-11-11, 19:37:40](https://lobste.rs/s/yc3vr8/agentic_pelican_on_bicycle) - [Agentic Pelican on a Bicycle](https://www.robert-glaser.de/agentic-pelican-on-a-bicycle/)
* [2025-11-11, 19:30:00](https://slashdot.org/story/25/11/11/1857233/chinas-new-scientist-visa-is-a-serious-bid-for-the-worlds-top-talent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s New Scientist Visa is a &apos;Serious Bid&apos; For the World&apos;s Top Talent](https://slashdot.org/story/25/11/11/1857233/chinas-new-scientist-visa-is-a-serious-bid-for-the-worlds-top-talent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 19:04:50](https://lobste.rs/s/f5phay/catalog_side_effects) - [A catalog of side effects](https://bernsteinbear.com/blog/compiler-effects/)
* [2025-11-11, 18:54:00](https://news.slashdot.org/story/25/11/11/1854230/uk-unveils-plan-to-cut-animal-testing-through-greater-use-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Unveils Plan To Cut Animal Testing Through Greater Use of AI](https://news.slashdot.org/story/25/11/11/1854230/uk-unveils-plan-to-cut-animal-testing-through-greater-use-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 18:32:11](https://news.ycombinator.com/item?id=45891016) - [FFmpeg to Google: Fund us or stop sending bugs](https://thenewstack.io/ffmpeg-to-google-fund-us-or-stop-sending-bugs/)
* [2025-11-11, 18:24:40](https://lobste.rs/s/nyd4p0/rtc_rk808_compensate_for_rockchip) - [rtc: rk808: Compensate for Rockchip calendar deviation on November 31st (2015)](https://github.com/torvalds/linux/commit/f076ef44a44d02ed91543f820c14c2c7dff53716)
* [2025-11-11, 18:24:09](https://lobste.rs/s/hw54as/domain_for_queer_community_by_queer) - [A domain for the Queer Community, by the Queer Community](https://www.dotmeow.org/en/what)
* [2025-11-11, 18:10:00](https://news.slashdot.org/story/25/11/11/1757229/firefox-145-drops-support-for-32-bit-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox 145 Drops Support For 32-bit Linux](https://news.slashdot.org/story/25/11/11/1757229/firefox-145-drops-support-for-32-bit-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 17:30:00](https://slashdot.org/story/25/11/11/1730232/ais-5-trillion-cost-needs-every-debt-market-jpmorgan-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI&apos;s $5 Trillion Cost Needs Every Debt Market, JPMorgan Says](https://slashdot.org/story/25/11/11/1730232/ais-5-trillion-cost-needs-every-debt-market-jpmorgan-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 17:26:54](https://news.ycombinator.com/item?id=45890186) - [We ran over 600 image generations to compare AI image models](https://latenitesoft.com/blog/evaluating-frontier-ai-image-generation-models/)
* [2025-11-11, 17:18:00](https://soylentnews.org/article.pl?sid=25/11/10/1130222&amp;from=rss) - [New Physical Attacks Are Quickly Diluting Secure Enclave Defenses From Nvidia, AMD, and Intel](https://soylentnews.org/article.pl?sid=25/11/10/1130222&amp;from=rss)
* [2025-11-11, 17:09:40](https://lobste.rs/s/sag4i3/cache_friendly_low_memory_lanczos) - [Cache-Friendly, Low-Memory Lanczos Algorithm in Rust](https://lukefleed.xyz/posts/cache-friendly-low-memory-lanczos/)
* [2025-11-11, 16:42:00](https://apple.slashdot.org/story/25/11/11/1618220/the-ipad-pro-at-10-a-decade-of-unrealized-potential?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The iPad Pro at 10: a Decade of Unrealized Potential](https://apple.slashdot.org/story/25/11/11/1618220/the-ipad-pro-at-10-a-decade-of-unrealized-potential?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 16:32:31](https://lobste.rs/s/digwsv/query_plan_caching) - [Query Plan Caching](https://buttondown.com/jaffray/archive/query-plan-caching/)
* [2025-11-11, 16:02:00](https://apple.slashdot.org/story/25/11/11/1533206/apples-230-iphone-sock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s $230 iPhone Sock](https://apple.slashdot.org/story/25/11/11/1533206/apples-230-iphone-sock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-11, 15:51:31](https://lobste.rs/s/uzihto/announcing_net_10) - [Announcing .NET 10](https://devblogs.microsoft.com/dotnet/announcing-dotnet-10/)
* [2025-11-11, 15:09:36](https://lobste.rs/s/btdj9j/grebedoc_static_site_hosting_for_git) - [Grebedoc — static site hosting for git forges](https://grebedoc.dev)
* [2025-11-11, 14:59:05](https://lobste.rs/s/socihf/firefox_expands_fingerprint) - [Firefox expands fingerprint protections: advancing towards a more private web](https://blog.mozilla.org/en/firefox/fingerprinting-protections/)
* [2025-11-11, 14:58:47](https://news.ycombinator.com/item?id=45887957) - [Pikaday: A friendly guide to front-end date pickers](https://pikaday.dbushell.com)
* [2025-11-11, 14:43:35](https://lobste.rs/s/9skgxp/scaling_hnsws) - [Scaling HNSWs](https://antirez.com/news/156)
* [2025-11-11, 14:34:54](https://news.ycombinator.com/item?id=45887699) - [The Department of War just shot the accountants and opted for speed](https://steveblank.com/2025/11/11/the-department-of-war-just-shot-the-accountants-and-opted-for-speed/)
* [2025-11-11, 14:11:49](https://news.ycombinator.com/item?id=45887466) - [Scaling HNSWs](https://antirez.com/news/156)
* [2025-11-11, 12:37:00](https://soylentnews.org/article.pl?sid=25/11/09/141240&amp;from=rss) - [Watch Out for These Recent Windows and NPM Vulnerabilities](https://soylentnews.org/article.pl?sid=25/11/09/141240&amp;from=rss)
* [2025-11-11, 11:36:06](https://lobste.rs/s/0zfxtn/zig_c_interop) - [Zig / C++ Interop](https://tuple.app/blog/zig-cpp-interop)
* [2025-11-11, 10:17:57](https://news.ycombinator.com/item?id=45885813) - [iPhone Pocket](https://www.apple.com/newsroom/2025/11/introducing-iphone-pocket-a-beautiful-way-to-wear-and-carry-iphone/)
* [2025-11-11, 09:04:03](https://lobste.rs/s/k427fe/just_call_clone_alias) - [Just call clone (or alias)](https://smallcultfollowing.com/babysteps/blog/2025/11/10/just-call-clone/)
* [2025-11-11, 07:50:00](https://soylentnews.org/article.pl?sid=25/11/09/1352235&amp;from=rss) - [UK Carriers to Block Spoofed Phone Numbers in Fraud Crackdown](https://soylentnews.org/article.pl?sid=25/11/09/1352235&amp;from=rss)
* [2025-11-11, 04:34:21](https://lobste.rs/s/ciu0j1/decompression_is_up_30_faster_cpython_3_15) - [Decompression is up to 30% faster in CPython 3.15](https://emmatyping.dev/decompression-is-up-to-30-faster-in-cpython-315.html)
* [2025-11-11, 03:04:00](https://soylentnews.org/article.pl?sid=25/11/09/1338227&amp;from=rss) - [AI Sets Up Kodak Moment for Global Consultants](https://soylentnews.org/article.pl?sid=25/11/09/1338227&amp;from=rss)
* [2025-11-10, 22:22:00](https://soylentnews.org/article.pl?sid=25/11/08/2137231&amp;from=rss) - [EBikes Banned from NSW Trains Due To Fire Hazard](https://soylentnews.org/article.pl?sid=25/11/08/2137231&amp;from=rss)
* [2025-11-10, 21:36:00](https://lobste.rs/s/nmcdan/reimagine_date_picker) - [Reimagine the Date Picker](https://dbushell.com/2025/11/10/pikaday/)
* [2025-11-10, 17:40:00](https://soylentnews.org/article.pl?sid=25/11/08/2128227&amp;from=rss) - [Australian Wine Industry Battles Fakes With Smart Bottle Caps](https://soylentnews.org/article.pl?sid=25/11/08/2128227&amp;from=rss)
* [2025-11-10, 13:00:00](https://soylentnews.org/article.pl?sid=25/11/08/2122221&amp;from=rss) - [Plumbing the Universe for Dark Matter](https://soylentnews.org/article.pl?sid=25/11/08/2122221&amp;from=rss)
* [2025-11-10, 11:59:50](https://lobste.rs/s/vbv9il/vibe_code_warning_from_1k_10k_lines) - [Vibe Code Warning – from 1k to 10k lines, a personal casestudy](https://github.com/jackdoe/pico2-swd-riscv?tab=readme-ov-file#0-vibe-code-warning)
* [2025-11-10, 08:21:00](https://soylentnews.org/article.pl?sid=25/11/08/214219&amp;from=rss) - [The Chemistry Behind That Pricey Cup of Civet Coffee](https://soylentnews.org/article.pl?sid=25/11/08/214219&amp;from=rss)
* [2025-11-10, 03:47:00](https://soylentnews.org/article.pl?sid=25/11/08/1723229&amp;from=rss) - [Blame game over Air India crash goes on](https://soylentnews.org/article.pl?sid=25/11/08/1723229&amp;from=rss)
* [2025-11-09, 23:06:00](https://soylentnews.org/article.pl?sid=25/11/08/1721215&amp;from=rss) - [The 2026 Farmers’ Almanac Will Be Its Last Edition](https://soylentnews.org/article.pl?sid=25/11/08/1721215&amp;from=rss)
* [2025-11-09, 18:17:00](https://soylentnews.org/article.pl?sid=25/11/07/0311239&amp;from=rss) - [Microsoft AI Chief Warns Pursuing Machine Consciousness is a Gigantic Waste of Time](https://soylentnews.org/article.pl?sid=25/11/07/0311239&amp;from=rss)
* [2025-11-09, 13:35:00](https://soylentnews.org/article.pl?sid=25/11/07/036254&amp;from=rss) - [Ford CEO Jim Farley strikes a Cautious Tone on Apple’s New CarPlay Ultra](https://soylentnews.org/article.pl?sid=25/11/07/036254&amp;from=rss)
* [2025-11-09, 08:46:00](https://soylentnews.org/article.pl?sid=25/11/07/032255&amp;from=rss) - [Nvidia Will Help Build 7 AI Supercomputers for DoE](https://soylentnews.org/article.pl?sid=25/11/07/032255&amp;from=rss)
* [2025-11-09, 04:10:00](https://soylentnews.org/article.pl?sid=25/11/07/0255249&amp;from=rss) - [Gen Z is Ditching the Tie for a Toolbelt, and it’s the Smartest Rebellion Yet](https://soylentnews.org/article.pl?sid=25/11/07/0255249&amp;from=rss)
* [2025-11-08, 23:18:00](https://soylentnews.org/article.pl?sid=25/11/06/0740218&amp;from=rss) - [Does Academia Need a Wake Up Call on Wikibooks?](https://soylentnews.org/article.pl?sid=25/11/06/0740218&amp;from=rss)
* [2025-11-08, 22:16:40](https://news.ycombinator.com/item?id=45860552) - [The history of Casio watches](https://www.casio.com/us/watches/50th/Heritage/1970s/)
* [2025-11-08, 18:34:00](https://soylentnews.org/article.pl?sid=25/11/06/0735234&amp;from=rss) - [OpenAI Looking for Taxpayers to Bail Them Out If the Bubble Bursts](https://soylentnews.org/article.pl?sid=25/11/06/0735234&amp;from=rss)
* [2025-11-08, 13:48:00](https://soylentnews.org/article.pl?sid=25/11/06/0723234&amp;from=rss) - [FuguIta 7.8 - OpenBSD-based Live System - Released!](https://soylentnews.org/article.pl?sid=25/11/06/0723234&amp;from=rss)
* [2025-11-08, 09:06:00](https://soylentnews.org/article.pl?sid=25/11/06/0715239&amp;from=rss) - [Uncle Sam Wants to Scan Your Iris and Collect Your DNA, Citizen or Not](https://soylentnews.org/article.pl?sid=25/11/06/0715239&amp;from=rss)
* [2025-11-08, 04:19:00](https://soylentnews.org/article.pl?sid=25/11/06/0710228&amp;from=rss) - [Study Concludes Cybersecurity Training Doesn&apos;t Work](https://soylentnews.org/article.pl?sid=25/11/06/0710228&amp;from=rss)
