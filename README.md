# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation Advancements

* [A Decade on Datomic - Davis Shepherd & Jonathan Indig (Netflix)](https://www.youtube.com/watch?v=gJ9UZlr6C6M) - Reflecting on 10 years of Datomic and how Netflix leveraged it.

* [Lite^3, a JSON-Compatible Zero-Copy Serialization Format](https://github.com/fastserial/lite3) - A cutting-edge format for zero-copy data serialization.

* [History LLMs: Models trained exclusively on pre-1913 texts](https://github.com/DGoettlich/history-llms) - Large language models with a historical focus.

* [The Tor Project is Making a Switch to Rust, Ditches C](https://soylentnews.org/article.pl?sid=25/12/17/0154226&amp;from=rss) - Tor upgrades its codebase for better security and performance.

## Software Development

* [Porting an HTML5 Parser to Swift](https://ikyle.me/blog/2025/swift-justhtml-porting-html5-parser-to-swift) - Bringing an HTML5 parser capability to Swift.

* [Exposing game servers over Tailscale](https://chameth.com/exposing-game-servers-over-tailscale) - A guide to securely host game servers via Tailscale.

* [Pedagogy Recommendations](https://parentheticallyspeaking.org/articles/pedagogy-recommendations/) - Effective ways to teach programming effectively.

## Corporate and Legal News

* [Google Sues SerpApi Over Scraping and Reselling Search Data](https://yro.slashdot.org/story/25/12/19/2317247/google-sues-serpapi-over-scraping-and-reselling-search-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google takes legal action to protect their data.

* [Airbus Moving Critical Systems Away From AWS, Google, and Microsoft Citing Data Sovereignty Concerns](https://slashdot.org/story/25/12/19/2252254/airbus-moving-critical-systems-away-from-aws-google-and-microsoft-citing-data-sovereignty-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Airbus shifts critical systems management for sovereignty.

* [FTC: Instacart To Refund $60M Over Deceptive Subscription Tactics](https://news.slashdot.org/story/25/12/19/1921253/ftc-instacart-to-refund-60m-over-deceptive-subscription-tactics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Instacart faces penalties for subscription missteps.

## Privacy and Security

* [TP-Link Tapo C200: Hardcoded Keys, Buffer Overflows and Privacy](https://www.evilsocket.net/2025/12/18/TP-Link-Tapo-C200-Hardcoded-Keys-Buffer-Overflows-and-Privacy-in-the-Era-of-AI-Assisted-Reverse-Engineering/) - Exploring vulnerabilities in modern IoT devices.

* [Reverse Engineering US Airline's PNR System and Accessing All Reservations](https://alexschapiro.com/security/vulnerability/2025/11/20/avelo-airline-reservation-api-vulnerability) - Security flaws in airline booking systems revealed.

* [British Billboards Are Watching You](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss) - Tracking technology hidden in public displays.

## Science and Space

* [This Star is Being Eaten Alive—and its Explosive Death Will be Visible in Broad Daylight](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss) - A star's dramatic final days could offer a celestial spectacle.

* [After 50 Years, MIT Chemists Finally Synthesize Elusive Anti-Cancer Compound](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss) - Groundbreaking progress in cancer treatment.

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

* [2025-12-20, 06:33:54](https://lobste.rs/s/cmlspo/decade_on_datomic_davis_shepherd) - [A Decade on Datomic - Davis Shepherd &amp; Jonathan Indig (Netflix)](https://www.youtube.com/watch?v=gJ9UZlr6C6M)
* [2025-12-20, 06:22:55](https://lobste.rs/s/rlnnbu/porting_html5_parser_swift) - [Porting an HTML5 Parser to Swift](https://ikyle.me/blog/2025/swift-justhtml-porting-html5-parser-to-swift)
* [2025-12-20, 06:09:17](https://news.ycombinator.com/item?id=46333983) - [Charles Proxy](https://www.charlesproxy.com/)
* [2025-12-20, 06:00:31](https://news.ycombinator.com/item?id=46333959) - [Data Bank – Nuforc – Latest UFO Sightings](https://nuforc.org/databank/)
* [2025-12-20, 05:58:49](https://lobste.rs/s/miqwof/understanding_dart_class_modifiers_by) - [Understanding Dart Class Modifiers by Using Lattices](https://modulovalue.com/blog/understanding-dart-class-modifiers-lattices/)
* [2025-12-20, 05:00:55](https://news.ycombinator.com/item?id=46333734) - [Android introduces $2-4 install fee and 10–20% cut for US external content links](https://support.google.com/googleplay/android-developer/answer/16470497?hl=en)
* [2025-12-20, 03:30:00](https://yro.slashdot.org/story/25/12/19/2317247/google-sues-serpapi-over-scraping-and-reselling-search-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Sues SerpApi Over Scraping and Reselling Search Data](https://yro.slashdot.org/story/25/12/19/2317247/google-sues-serpapi-over-scraping-and-reselling-search-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 03:27:00](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss) - [This Star is Being Eaten Alive—and its Explosive Death Will be Visible in Broad Daylight](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss)
* [2025-12-20, 02:39:37](https://lobste.rs/s/rf5t2n/pedagogy_recommendations) - [Pedagogy Recommendations](https://parentheticallyspeaking.org/articles/pedagogy-recommendations/)
* [2025-12-20, 02:19:19](https://lobste.rs/s/hgqgdt/introducing_css_grid_lanes) - [Introducing CSS Grid Lanes](https://webkit.org/blog/17660/introducing-css-grid-lanes/)
* [2025-12-20, 01:40:00](https://slashdot.org/story/25/12/19/2252254/airbus-moving-critical-systems-away-from-aws-google-and-microsoft-citing-data-sovereignty-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbus Moving Critical Systems Away From AWS, Google, and Microsoft Citing Data Sovereignty Concerns](https://slashdot.org/story/25/12/19/2252254/airbus-moving-critical-systems-away-from-aws-google-and-microsoft-citing-data-sovereignty-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 01:10:13](https://lobste.rs/s/xrjgqz/exposing_game_servers_over_tailscale) - [Exposing game servers over Tailscale](https://chameth.com/exposing-game-servers-over-tailscale/)
* [2025-12-20, 01:00:00](https://developers.slashdot.org/story/25/12/19/236259/stanford-computer-science-grads-find-their-degrees-no-longer-guarantee-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stanford Computer Science Grads Find Their Degrees No Longer Guarantee Jobs](https://developers.slashdot.org/story/25/12/19/236259/stanford-computer-science-grads-find-their-degrees-no-longer-guarantee-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 00:20:00](https://it.slashdot.org/story/25/12/19/2241221/ten-mistakes-marred-firewall-upgrade-at-australian-telco-contributing-to-two-deaths?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ten Mistakes Marred Firewall Upgrade At Australian Telco, Contributing To Two Deaths](https://it.slashdot.org/story/25/12/19/2241221/ten-mistakes-marred-firewall-upgrade-at-australian-telco-contributing-to-two-deaths?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 00:16:33](https://lobste.rs/s/jflix6/unix_v4_tape_from_university_utah) - [UNIX V4 tape from University of Utah](https://archive.org/details/utah_unix_v4_raw)
* [2025-12-20, 00:16:13](https://news.ycombinator.com/item?id=46332526) - [Build Your Own React](https://pomb.us/build-your-own-react/)
* [2025-12-19, 23:40:00](https://news.slashdot.org/story/25/12/19/2158235/strava-puts-popular-year-in-sport-recap-behind-an-80-paywall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Strava Puts Popular &apos;Year In Sport&apos; Recap Behind an $80 Paywall](https://news.slashdot.org/story/25/12/19/2158235/strava-puts-popular-year-in-sport-recap-behind-an-80-paywall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 23:00:00](https://tech.slashdot.org/story/25/12/19/2150202/tiktok-owner-signs-deal-to-avoid-us-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TikTok Owner Signs Deal To Avoid US Ban](https://tech.slashdot.org/story/25/12/19/2150202/tiktok-owner-signs-deal-to-avoid-us-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 22:47:30](https://lobste.rs/s/uo16ri/what_do_people_love_about_rust) - [What do people love about Rust?](https://blog.rust-lang.org/2025/12/19/what-do-people-love-about-rust/)
* [2025-12-19, 22:43:00](https://soylentnews.org/article.pl?sid=25/12/18/133249&amp;from=rss) - [Mozilla&apos;s New CEO: Firefox Will Become an “AI Browser”](https://soylentnews.org/article.pl?sid=25/12/18/133249&amp;from=rss)
* [2025-12-19, 22:20:00](https://yro.slashdot.org/story/25/12/19/2144258/youtubers-livestream-appears-on-white-house-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTuber&apos;s Livestream Appears On White House Website](https://yro.slashdot.org/story/25/12/19/2144258/youtubers-livestream-appears-on-white-house-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 22:13:06](https://news.ycombinator.com/item?id=46331586) - [CSS Grid Lanes](https://webkit.org/blog/17660/introducing-css-grid-lanes/)
* [2025-12-19, 21:40:00](https://hardware.slashdot.org/story/25/12/19/2135223/riot-games-is-making-an-anti-cheat-change-that-could-be-rough-on-older-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Riot Games Is Making an Anti-Cheat Change That Could Be Rough On Older PCs](https://hardware.slashdot.org/story/25/12/19/2135223/riot-games-is-making-an-anti-cheat-change-that-could-be-rough-on-older-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 21:34:10](https://news.ycombinator.com/item?id=46331216) - [A better zip bomb (2019)](https://www.bamsoftware.com/hacks/zipbomb/)
* [2025-12-19, 20:57:45](https://lobste.rs/s/lqvi24/rust_s_block_pattern) - [Rust’s Block Pattern](https://notgull.net/block-pattern/)
* [2025-12-19, 20:49:20](https://news.ycombinator.com/item?id=46330726) - [LLM Year in Review](https://karpathy.bearblog.dev/year-in-review-2025/)
* [2025-12-19, 20:41:00](https://slashdot.org/story/25/12/19/1932210/microsoft-made-another-copilot-ad-where-nothing-actually-works?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Made Another Copilot Ad Where Nothing Actually Works](https://slashdot.org/story/25/12/19/1932210/microsoft-made-another-copilot-ad-where-nothing-actually-works?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 20:29:53](https://news.ycombinator.com/item?id=46330522) - [The scariest boot loader code](http://miod.online.fr/software/openbsd/stories/boot_hppa.html)
* [2025-12-19, 20:26:47](https://lobste.rs/s/s5zoaj/scariest_boot_loader_code) - [The scariest boot loader code](http://miod.online.fr/software/openbsd/stories/boot_hppa.html)
* [2025-12-19, 20:02:00](https://slashdot.org/story/25/12/19/1925205/all-that-cheap-chinese-stuff-is-now-europes-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [All That Cheap Chinese Stuff Is Now Europe&apos;s Problem](https://slashdot.org/story/25/12/19/1925205/all-that-cheap-chinese-stuff-is-now-europes-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 19:30:00](https://news.slashdot.org/story/25/12/19/1921253/ftc-instacart-to-refund-60m-over-deceptive-subscription-tactics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC: Instacart To Refund $60M Over Deceptive Subscription Tactics](https://news.slashdot.org/story/25/12/19/1921253/ftc-instacart-to-refund-60m-over-deceptive-subscription-tactics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 18:52:00](https://slashdot.org/story/25/12/19/1852238/microsoft-ai-chief-staying-in-the-frontier-ai-race-will-cost-hundreds-of-billions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft AI Chief: Staying in the Frontier AI Race Will Cost Hundreds of Billions](https://slashdot.org/story/25/12/19/1852238/microsoft-ai-chief-staying-in-the-frontier-ai-race-will-cost-hundreds-of-billions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 18:36:23](https://lobste.rs/s/j2mrft/lite_3_json_compatible_zero_copy) - [Lite^3, a JSON-Compatible Zero-Copy Serialization Format](https://github.com/fastserial/lite3)
* [2025-12-19, 18:19:32](https://news.ycombinator.com/item?id=46329038) - [TP-Link Tapo C200: Hardcoded Keys, Buffer Overflows and Privacy](https://www.evilsocket.net/2025/12/18/TP-Link-Tapo-C200-Hardcoded-Keys-Buffer-Overflows-and-Privacy-in-the-Era-of-AI-Assisted-Reverse-Engineering/)
* [2025-12-19, 18:15:17](https://news.ycombinator.com/item?id=46328992) - [Reverse Engineering US Airline&apos;s PNR System and Accessing All Reservations](https://alexschapiro.com/security/vulnerability/2025/11/20/avelo-airline-reservation-api-vulnerability)
* [2025-12-19, 18:11:00](https://entertainment.slashdot.org/story/25/12/19/1734246/2025-was-the-beginning-of-the-end-of-the-tv-brightness-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2025 Was the Beginning of the End of the TV Brightness War](https://entertainment.slashdot.org/story/25/12/19/1734246/2025-was-the-beginning-of-the-end-of-the-tv-brightness-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 17:58:33](https://lobste.rs/s/txgnpv/8_bit_bolero_world_s_most_ambitious) - [8-bit Boléro (the world’s most ambitious chiptune?)](https://linusakesson.net/music/bolero/index.php)
* [2025-12-19, 17:55:00](https://soylentnews.org/article.pl?sid=25/12/18/046237&amp;from=rss) - [Resolving to Spend Less Time on Your Smartphone? Understanding Your Travel Habits Can Help](https://soylentnews.org/article.pl?sid=25/12/18/046237&amp;from=rss)
* [2025-12-19, 17:53:00](https://lobste.rs/s/3vdhci/help_my_website_is_too_small) - [Help my website is too small](https://lukeplant.me.uk/blog/posts/help-my-website-is-too-small/)
* [2025-12-19, 17:30:00](https://tech.slashdot.org/story/25/12/19/1717228/uber-is-hiring-more-engineers-because-ai-is-making-them-more-valuable-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber is Hiring More Engineers Because AI is Making Them More Valuable, CEO Says](https://tech.slashdot.org/story/25/12/19/1717228/uber-is-hiring-more-engineers-because-ai-is-making-them-more-valuable-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 17:14:42](https://news.ycombinator.com/item?id=46328274) - [Performance Hints (2023)](https://abseil.io/fast/hints.html)
* [2025-12-19, 17:11:56](https://lobste.rs/s/l854tb/love_letter_raycast) - [A love letter to Raycast](https://rmoff.net/2025/12/18/a-love-letter-to-raycast/)
* [2025-12-19, 16:54:00](https://slashdot.org/story/25/12/19/1654219/how-lina-khan-killed-irobot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;How Lina Khan Killed iRobot&apos;](https://slashdot.org/story/25/12/19/1654219/how-lina-khan-killed-irobot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 15:57:01](https://news.ycombinator.com/item?id=46327206) - [Graphite is joining Cursor](https://cursor.com/blog/graphite)
* [2025-12-19, 15:51:30](https://news.ycombinator.com/item?id=46327133) - [Believe the Checkbook](https://robertgreiner.com/believe-the-checkbook/)
* [2025-12-19, 15:49:00](https://lobste.rs/s/hqlyx2/building_transparent_keyserver) - [Building a Transparent Keyserver](https://words.filippo.io/keyserver-tlog/)
* [2025-12-19, 15:44:56](https://lobste.rs/s/1ey3pm/map_operator_should_be_nodiscard) - [map::operator[] should be nodiscard](https://quuxplusone.github.io/blog/2025/12/18/nodiscard-operator-bracket/)
* [2025-12-19, 15:40:46](https://lobste.rs/s/qebheg/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/qebheg/what_are_you_doing_this_weekend)
* [2025-12-19, 15:40:03](https://news.ycombinator.com/item?id=46326984) - [Garage – An S3 object store so reliable you can run it outside datacenters](https://garagehq.deuxfleurs.fr/)
* [2025-12-19, 14:56:05](https://news.ycombinator.com/item?id=46326519) - [The FreeBSD Foundation&apos;s Laptop Support and Usability Project](https://github.com/FreeBSDFoundation/proj-laptop)
* [2025-12-19, 14:20:45](https://lobste.rs/s/m1teof/wireguard_implementation_written_rust) - [WireGuard® implementation written in Rust](https://mullvad.net/en/blog/announcing-gotatun-the-future-of-wireguard-at-mullvad-vpn)
* [2025-12-19, 13:42:19](https://lobste.rs/s/jtgdye/leaseguard_raft_leases_done_right) - [LeaseGuard: Raft Leases Done Right](https://emptysqua.re/blog/leaseguard-raft-leader-leases-done-right/)
* [2025-12-19, 13:21:00](https://soylentnews.org/article.pl?sid=25/12/18/044218&amp;from=rss) - [UK to “Encourage” Apple and Google to Put Nudity-Blocking Systems on Phones](https://soylentnews.org/article.pl?sid=25/12/18/044218&amp;from=rss)
* [2025-12-19, 12:30:02](https://lobste.rs/s/phykxt/when_scope_lies_wildcard_pattern_drop) - [When Scope Lies: The Wildcard Pattern Drop Footgun in Rust](https://obeli.sk/blog/when-scope-lies/)
* [2025-12-19, 11:38:54](https://news.ycombinator.com/item?id=46324702) - [8-bit Boléro](https://linusakesson.net/music/bolero/index.php)
* [2025-12-19, 11:16:23](https://news.ycombinator.com/item?id=46324543) - [GotaTun – Mullvad&apos;s WireGuard Implementation in Rust](https://mullvad.net/en/blog/announcing-gotatun-the-future-of-wireguard-at-mullvad-vpn)
* [2025-12-19, 10:03:38](https://news.ycombinator.com/item?id=46324078) - [Amazon will allow ePub and PDF downloads for DRM-free eBooks](https://www.kdpcommunity.com/s/article/New-eBook-Download-Options-for-Readers-Coming-in-2026?language=en_US)
* [2025-12-19, 09:51:01](https://lobste.rs/s/e6zmjh/go_ahead_self_host_postgres) - [Go ahead, self-host Postgres](https://pierce.dev/notes/go-ahead-self-host-postgres)
* [2025-12-19, 08:14:00](https://soylentnews.org/article.pl?sid=25/12/18/0358200&amp;from=rss) - [Google Translate expands live translation to all earbuds on Android](https://soylentnews.org/article.pl?sid=25/12/18/0358200&amp;from=rss)
* [2025-12-19, 08:11:00](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss) - [British Billboards Are Watching You](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss)
* [2025-12-19, 04:56:13](https://news.ycombinator.com/item?id=46322391) - [Rust&apos;s Block Pattern](https://notgull.net/block-pattern/)
* [2025-12-19, 03:37:00](https://soylentnews.org/article.pl?sid=25/12/17/0218212&amp;from=rss) - [UK Strengthens Subsea Cables Against Russian Interference](https://soylentnews.org/article.pl?sid=25/12/17/0218212&amp;from=rss)
* [2025-12-19, 03:24:26](https://news.ycombinator.com/item?id=46321972) - [Qwen-Image-Layered: transparency and layer aware open diffusion model](https://huggingface.co/papers/2512.15603)
* [2025-12-19, 03:19:59](https://news.ycombinator.com/item?id=46321947) - [Brown/MIT shooting suspect found dead, officials say](https://www.washingtonpost.com/nation/2025/12/18/brown-university-shooting-person-of-interest/)
* [2025-12-19, 02:37:58](https://lobste.rs/s/3ktgvh/booleans_don_t_exist_ruby_2022) - [Booleans don&apos;t exist in Ruby (2022)](https://thoughtbot.com/blog/what-is-a-boolean)
* [2025-12-18, 22:51:00](https://soylentnews.org/article.pl?sid=25/12/17/027253&amp;from=rss) - [Forget Flowers: These Ancient Plants Attract Pollinators by Getting Hot](https://soylentnews.org/article.pl?sid=25/12/17/027253&amp;from=rss)
* [2025-12-18, 22:39:47](https://news.ycombinator.com/item?id=46319826) - [History LLMs: Models trained exclusively on pre-1913 texts](https://github.com/DGoettlich/history-llms)
* [2025-12-18, 19:23:56](https://lobste.rs/s/amzgrw/how_hack_discord_vercel_more_with_one_easy) - [how to hack discord, vercel and more with one easy trick](https://kibty.town/blog/mintlify/)
* [2025-12-18, 18:59:33](https://news.ycombinator.com/item?id=46316968) - [Show HN: TinyPDF – 3kb pdf library (70x smaller than jsPDF)](https://github.com/Lulzx/tinypdf)
* [2025-12-18, 18:04:00](https://soylentnews.org/article.pl?sid=25/12/17/0155253&amp;from=rss) - [Foxconn is Building a Massive Factory in KY, but Probably Not for Apple](https://soylentnews.org/article.pl?sid=25/12/17/0155253&amp;from=rss)
* [2025-12-18, 16:09:54](https://lobste.rs/s/t7dmam/your_job_is_deliver_code_you_have_proven) - [Your job is to deliver code you have proven to work](https://simonwillison.net/2025/Dec/18/code-proven-to-work/)
* [2025-12-18, 15:01:10](https://news.ycombinator.com/item?id=46313390) - [Mistral OCR 3](https://mistral.ai/news/mistral-ocr-3)
* [2025-12-18, 14:11:05](https://lobste.rs/s/h50lml/toml_1_1_0_released) - [TOML 1.1.0 released](https://github.com/toml-lang/toml/releases/tag/1.1.0)
* [2025-12-18, 13:15:00](https://soylentnews.org/article.pl?sid=25/12/17/0154226&amp;from=rss) - [The Tor Project is Making a Switch to Rust, Ditches C](https://soylentnews.org/article.pl?sid=25/12/17/0154226&amp;from=rss)
* [2025-12-18, 08:38:00](https://soylentnews.org/article.pl?sid=25/12/17/0149259&amp;from=rss) - [Ford Cancels Electric F-150](https://soylentnews.org/article.pl?sid=25/12/17/0149259&amp;from=rss)
* [2025-12-18, 03:46:00](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss) - [After 50 Years, MIT Chemists Finally Synthesize Elusive Anti-Cancer Compound](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss)
* [2025-12-17, 23:01:00](https://soylentnews.org/article.pl?sid=25/12/16/0745203&amp;from=rss) - [This Group Pays Bounties to Repair Broken Devices—Even If the Fix Breaks the Law](https://soylentnews.org/article.pl?sid=25/12/16/0745203&amp;from=rss)
* [2025-12-17, 18:18:00](https://soylentnews.org/article.pl?sid=25/12/16/0740251&amp;from=rss) - [Norovirus Cases Surging in U.S.](https://soylentnews.org/article.pl?sid=25/12/16/0740251&amp;from=rss)
* [2025-12-17, 13:34:00](https://soylentnews.org/article.pl?sid=25/12/16/0735240&amp;from=rss) - [Verizon Refused to Unlock Man&apos;s iPhone, So He Sued the Carrier and Won](https://soylentnews.org/article.pl?sid=25/12/16/0735240&amp;from=rss)
* [2025-12-17, 10:45:27](https://news.ycombinator.com/item?id=46300411) - [Vm.overcommit_memory=2 is the right setting for servers](https://ariadne.space/2025/12/16/vmovercommitmemory-is-always-the-right.html)
* [2025-12-17, 08:48:00](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss) - [A Simple Pill Could Replace Injections for Treating Gonorrhea](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss)
* [2025-12-17, 04:03:00](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss) - [Australians Install 100,000 Home Battery Systems in 17 Weeks, and They Are Getting Bigger](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss)
* [2025-12-16, 23:18:00](https://soylentnews.org/article.pl?sid=25/12/15/0110223&amp;from=rss) - [Breaking a 50-Year Law: New Evidence Challenges Fundamental Black Hole Physics](https://soylentnews.org/article.pl?sid=25/12/15/0110223&amp;from=rss)
* [2025-12-16, 18:27:00](https://soylentnews.org/article.pl?sid=25/12/15/018209&amp;from=rss) - [New Review Highlights Urgent Need for Worldwide Smell Screening](https://soylentnews.org/article.pl?sid=25/12/15/018209&amp;from=rss)
* [2025-12-16, 18:21:21](https://news.ycombinator.com/item?id=46292148) - [The pitfalls of partitioning Postgres yourself](https://hatchet.run/blog/postgres-partitioning)
* [2025-12-16, 15:44:33](https://news.ycombinator.com/item?id=46289955) - [Gh-actions-lockfile: generate and verify lockfiles for GitHub Actions](https://gh-actions-lockfile.net)
* [2025-12-16, 14:21:10](https://news.ycombinator.com/item?id=46288799) - [A tagging system for documentation review comments](https://blog.techdocs.studio/p/a-tagging-system-for-documentation-review-comments)
* [2025-12-16, 13:45:00](https://soylentnews.org/article.pl?sid=25/12/15/016245&amp;from=rss) - [Kali Linux 2025.4 Ethical Hacking Distro Released With KDE Plasma 6.5, GNOME 49](https://soylentnews.org/article.pl?sid=25/12/15/016245&amp;from=rss)
* [2025-12-16, 09:02:00](https://soylentnews.org/article.pl?sid=25/12/15/014215&amp;from=rss) - [Scientists Discover Early Alzheimer&apos;s Warning Sign Hiding in Routine Brain Scans](https://soylentnews.org/article.pl?sid=25/12/15/014215&amp;from=rss)
* [2025-12-16, 04:15:00](https://soylentnews.org/article.pl?sid=25/12/13/1648208&amp;from=rss) - [U.S. Approves First Device to Treat Depression With Brain Stimulation at Home](https://soylentnews.org/article.pl?sid=25/12/13/1648208&amp;from=rss)
