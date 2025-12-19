# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advances and Experimentation

* [The lightest notes app implementation in 99 loc](https://medv.io/notes/#HcmxDcIwEAXQ3lP8LMASNNCzwAl9bCtOzvJdkOhS0VAhpaHKAGyVCTICEq99Jz467Ov7FcJFekJQVHuIwxNRJRKmU7sS27zAUzZk-1_JMTnNMarTkIdaOHB08awjztv8uRN1crhGemKDKW7SDtjX7zOEYyKbdT8=)

* [Pi 5 NAS With Custom Carbon Fibre Panels, Made on the Makera Z1](https://www.the-diy-life.com/pi-5-nas-with-custom-carbon-fibre-panels-made-on-the-makera-z1/)

* [Garage – An S3 object store so reliable you can run it outside datacenters](https://garagehq.deuxfleurs.fr/)

* [8-bit Boléro (the world’s most ambitious chiptune?)](https://linusakesson.net/music/bolero/index.php)

* [Reinventing the dial-up modem (2019)](https://saket.me/dtmf-tones/)

## Cybersecurity and Privacy Challenges

* [TP-Link Tapo C200: Hardcoded Keys, Buffer Overflows and Privacy](https://www.evilsocket.net/2025/12/18/TP-Link-Tapo-C200-Hardcoded-Keys-Buffer-Overflows-and-Privacy-in-the-Era-of-AI-Assisted-Reverse-Engineering/)

* [Reverse Engineering US Airline's PNR System and Accessing All Reservations](https://alexschapiro.com/security/vulnerability/2025/11/20/avelo-airline-reservation-api-vulnerability)

* [Denmark Says Russia Was Behind Two 'Destructive and Disruptive' Cyberattacks](https://news.slashdot.org/story/25/12/19/1356239/denmark-says-russia-was-behind-two-destructive-and-disruptive-cyberattacks?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## AI and Software Progress

* [Microsoft AI Chief: Staying in the Frontier AI Race Will Cost Hundreds of Billions](https://slashdot.org/story/25/12/19/1852238/microsoft-ai-chief-staying-in-the-frontier-ai-race-will-cost-hundreds-of-billions?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [History LLMs: Models trained exclusively on pre-1913 texts](https://github.com/DGoettlich/history-llms)

* [Lite^3, a JSON-Compatible Zero-Copy Serialization Format](https://github.com/fastserial/lite3)

* [Graphite is joining Cursor](https://cursor.com/blog/graphite)

## Gaming and Entertainment Trends

* [Riot Games Is Making an Anti-Cheat Change That Could Be Rough On Older PCs](https://hardware.slashdot.org/story/25/12/19/2135223/riot-games-is-making-an-anti-cheat-change-that-could-be-rough-on-older-pcs?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [You can now play Grand Theft Auto Vice City in the browser](https://dos.zone/grand-theft-auto-vice-city/)

* [2025 Was the Beginning of the End of the TV Brightness War](https://entertainment.slashdot.org/story/25/12/19/1734246/2025-was-the-beginning-of-the-end-of-the-tv-brightness-war?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Legal and Financial Developments

* [FTC: Instacart To Refund $60M Over Deceptive Subscription Tactics](https://news.slashdot.org/story/25/12/19/1921253/ftc-instacart-to-refund-60m-over-deceptive-subscription-tactics?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Apple Becomes a Debt Collector With Its New Developer Agreement](https://apple.slashdot.org/story/25/12/19/1422210/apple-becomes-a-debt-collector-with-its-new-developer-agreement?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Miscellaneous Developments

* [Show HN: Stickerbox, a kid-safe, AI-powered voice to sticker printer](https://stickerbox.com/)

* [Help my website is too small](https://lukeplant.me.uk/blog/posts/help-my-website-is-too-small/)

* [A Speed Camera for the Universe](https://soylentnews.org/article.pl?sid=25/12/13/1627258&amp;from=rss)

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

* [2025-12-19, 21:46:19](https://lobste.rs/s/xbry8q/lightest_notes_app_implementation_99_loc) - [The lightest notes app implementation in 99 loc](https://medv.io/notes/#HcmxDcIwEAXQ3lP8LMASNNCzwAl9bCtOzvJdkOhS0VAhpaHKAGyVCTICEq99Jz467Ov7FcJFekJQVHuIwxNRJRKmU7sS27zAUzZk-1_JMTnNMarTkIdaOHB08awjztv8uRN1crhGemKDKW7SDtjX7zOEYyKbdT8=)
* [2025-12-19, 21:40:00](https://hardware.slashdot.org/story/25/12/19/2135223/riot-games-is-making-an-anti-cheat-change-that-could-be-rough-on-older-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Riot Games Is Making an Anti-Cheat Change That Could Be Rough On Older PCs](https://hardware.slashdot.org/story/25/12/19/2135223/riot-games-is-making-an-anti-cheat-change-that-could-be-rough-on-older-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 20:41:00](https://slashdot.org/story/25/12/19/1932210/microsoft-made-another-copilot-ad-where-nothing-actually-works?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Made Another Copilot Ad Where Nothing Actually Works](https://slashdot.org/story/25/12/19/1932210/microsoft-made-another-copilot-ad-where-nothing-actually-works?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 20:26:47](https://lobste.rs/s/s5zoaj/scariest_boot_loader_code) - [The scariest boot loader code](http://miod.online.fr/software/openbsd/stories/boot_hppa.html)
* [2025-12-19, 20:02:00](https://slashdot.org/story/25/12/19/1925205/all-that-cheap-chinese-stuff-is-now-europes-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [All That Cheap Chinese Stuff Is Now Europe&apos;s Problem](https://slashdot.org/story/25/12/19/1925205/all-that-cheap-chinese-stuff-is-now-europes-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 19:44:48](https://news.ycombinator.com/item?id=46330013) - [Show HN: Stickerbox, a kid-safe, AI-powered voice to sticker printer](https://stickerbox.com/)
* [2025-12-19, 19:30:00](https://news.slashdot.org/story/25/12/19/1921253/ftc-instacart-to-refund-60m-over-deceptive-subscription-tactics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC: Instacart To Refund $60M Over Deceptive Subscription Tactics](https://news.slashdot.org/story/25/12/19/1921253/ftc-instacart-to-refund-60m-over-deceptive-subscription-tactics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 19:25:58](https://lobste.rs/s/yyrioz/pi_5_nas_with_custom_carbon_fibre_panels) - [Pi 5 NAS With Custom Carbon Fibre Panels, Made on the Makera Z1](https://www.the-diy-life.com/pi-5-nas-with-custom-carbon-fibre-panels-made-on-the-makera-z1/)
* [2025-12-19, 19:12:57](https://news.ycombinator.com/item?id=46329696) - [You can now play Grand Theft Auto Vice City in the browser](https://dos.zone/grand-theft-auto-vice-city/)
* [2025-12-19, 18:59:40](https://news.ycombinator.com/item?id=46329536) - [Wall Street Ruined the Roomba and Then Blamed Lina Khan](https://www.thebignewsletter.com/p/how-wall-street-ruined-the-roomba)
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
* [2025-12-19, 17:08:32](https://news.ycombinator.com/item?id=46328203) - [Show HN: I Made Loom for Mobile](https://demoscope.app)
* [2025-12-19, 16:54:00](https://slashdot.org/story/25/12/19/1654219/how-lina-khan-killed-irobot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;How Lina Khan Killed iRobot&apos;](https://slashdot.org/story/25/12/19/1654219/how-lina-khan-killed-irobot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 16:08:00](https://news.slashdot.org/story/25/12/19/168225/acm-to-make-its-entire-digital-library-open-access-starting-january-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ACM To Make Its Entire Digital Library Open Access Starting January 2026](https://news.slashdot.org/story/25/12/19/168225/acm-to-make-its-entire-digital-library-open-access-starting-january-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 15:57:01](https://news.ycombinator.com/item?id=46327206) - [Graphite is joining Cursor](https://cursor.com/blog/graphite)
* [2025-12-19, 15:51:30](https://news.ycombinator.com/item?id=46327133) - [Believe the Checkbook](https://robertgreiner.com/believe-the-checkbook/)
* [2025-12-19, 15:49:00](https://lobste.rs/s/hqlyx2/building_transparent_keyserver) - [Building a Transparent Keyserver](https://words.filippo.io/keyserver-tlog/)
* [2025-12-19, 15:44:56](https://lobste.rs/s/1ey3pm/map_operator_should_be_nodiscard) - [map::operator[] should be nodiscard](https://quuxplusone.github.io/blog/2025/12/18/nodiscard-operator-bracket/)
* [2025-12-19, 15:40:46](https://lobste.rs/s/qebheg/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/qebheg/what_are_you_doing_this_weekend)
* [2025-12-19, 15:40:03](https://news.ycombinator.com/item?id=46326984) - [Garage – An S3 object store so reliable you can run it outside datacenters](https://garagehq.deuxfleurs.fr/)
* [2025-12-19, 15:33:00](https://science.slashdot.org/story/25/12/19/1533240/food-becoming-more-calorific-but-less-nutritious-due-to-rising-carbon-dioxide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Food Becoming More Calorific But Less Nutritious Due To Rising Carbon Dioxide](https://science.slashdot.org/story/25/12/19/1533240/food-becoming-more-calorific-but-less-nutritious-due-to-rising-carbon-dioxide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 14:56:05](https://news.ycombinator.com/item?id=46326519) - [The FreeBSD Foundation&apos;s Laptop Support and Usability Project](https://github.com/FreeBSDFoundation/proj-laptop)
* [2025-12-19, 14:54:50](https://news.ycombinator.com/item?id=46326506) - [Building a Transparent Keyserver](https://words.filippo.io/keyserver-tlog/)
* [2025-12-19, 14:42:00](https://apple.slashdot.org/story/25/12/19/1422210/apple-becomes-a-debt-collector-with-its-new-developer-agreement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Becomes a Debt Collector With Its New Developer Agreement](https://apple.slashdot.org/story/25/12/19/1422210/apple-becomes-a-debt-collector-with-its-new-developer-agreement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 14:20:51](https://lobste.rs/s/4f4bd9/finite_state_transducers_for) - [Finite-state transducers for substitution tilings](https://arxiv.org/abs/2512.16595)
* [2025-12-19, 14:20:45](https://lobste.rs/s/m1teof/wireguard_implementation_written_rust) - [WireGuard® implementation written in Rust](https://mullvad.net/en/blog/announcing-gotatun-the-future-of-wireguard-at-mullvad-vpn)
* [2025-12-19, 14:01:00](https://news.slashdot.org/story/25/12/19/1356239/denmark-says-russia-was-behind-two-destructive-and-disruptive-cyberattacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Denmark Says Russia Was Behind Two &apos;Destructive and Disruptive&apos; Cyberattacks](https://news.slashdot.org/story/25/12/19/1356239/denmark-says-russia-was-behind-two-destructive-and-disruptive-cyberattacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 13:42:19](https://lobste.rs/s/jtgdye/leaseguard_raft_leases_done_right) - [LeaseGuard: Raft Leases Done Right](https://emptysqua.re/blog/leaseguard-raft-leader-leases-done-right/)
* [2025-12-19, 13:21:00](https://soylentnews.org/article.pl?sid=25/12/18/044218&amp;from=rss) - [UK to “Encourage” Apple and Google to Put Nudity-Blocking Systems on Phones](https://soylentnews.org/article.pl?sid=25/12/18/044218&amp;from=rss)
* [2025-12-19, 13:00:00](https://tech.slashdot.org/story/25/12/18/220216/most-parked-domains-now-serving-malicious-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Most Parked Domains Now Serving Malicious Content](https://tech.slashdot.org/story/25/12/18/220216/most-parked-domains-now-serving-malicious-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 12:30:02](https://lobste.rs/s/phykxt/when_scope_lies_wildcard_pattern_drop) - [When Scope Lies: The Wildcard Pattern Drop Footgun in Rust](https://obeli.sk/blog/when-scope-lies/)
* [2025-12-19, 11:38:54](https://news.ycombinator.com/item?id=46324702) - [8-bit Boléro](https://linusakesson.net/music/bolero/index.php)
* [2025-12-19, 11:16:23](https://news.ycombinator.com/item?id=46324543) - [GotaTun -- Mullvad&apos;s WireGuard Implementation in Rust](https://mullvad.net/en/blog/announcing-gotatun-the-future-of-wireguard-at-mullvad-vpn)
* [2025-12-19, 10:03:38](https://news.ycombinator.com/item?id=46324078) - [Amazon will allow ePub and PDF downloads for DRM-free eBooks](https://www.kdpcommunity.com/s/article/New-eBook-Download-Options-for-Readers-Coming-in-2026?language=en_US)
* [2025-12-19, 10:00:00](https://tech.slashdot.org/story/25/12/18/2152215/google-ai-summaries-are-ruining-the-livelihoods-of-recipe-writers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google AI Summaries Are Ruining the Livelihoods of Recipe Writers](https://tech.slashdot.org/story/25/12/18/2152215/google-ai-summaries-are-ruining-the-livelihoods-of-recipe-writers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 09:51:01](https://lobste.rs/s/e6zmjh/go_ahead_self_host_postgres) - [Go ahead, self-host Postgres](https://pierce.dev/notes/go-ahead-self-host-postgres)
* [2025-12-19, 08:14:00](https://soylentnews.org/article.pl?sid=25/12/18/0358200&amp;from=rss) - [Google Translate expands live translation to all earbuds on Android](https://soylentnews.org/article.pl?sid=25/12/18/0358200&amp;from=rss)
* [2025-12-19, 08:11:00](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss) - [British Billboards Are Watching You](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss)
* [2025-12-19, 07:00:00](https://news.slashdot.org/story/25/12/18/2137259/trumps-social-media-business-is-merging-with-a-nuclear-fusion-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump&apos;s Social Media Business Is Merging With a Nuclear Fusion Company](https://news.slashdot.org/story/25/12/18/2137259/trumps-social-media-business-is-merging-with-a-nuclear-fusion-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-19, 05:35:34](https://news.ycombinator.com/item?id=46322540) - [Getting bitten by Intel&apos;s poor naming schemes](https://lorendb.dev/posts/getting-bitten-by-poor-naming-schemes/)
* [2025-12-19, 04:56:13](https://news.ycombinator.com/item?id=46322391) - [Rust&apos;s Block Pattern](https://notgull.net/block-pattern/)
* [2025-12-19, 04:50:40](https://lobste.rs/s/1k5vwr/reinventing_dial_up_modem_2019) - [Reinventing the dial-up modem (2019)](https://saket.me/dtmf-tones/)
* [2025-12-19, 03:37:00](https://soylentnews.org/article.pl?sid=25/12/17/0218212&amp;from=rss) - [UK Strengthens Subsea Cables Against Russian Interference](https://soylentnews.org/article.pl?sid=25/12/17/0218212&amp;from=rss)
* [2025-12-19, 02:37:58](https://lobste.rs/s/3ktgvh/booleans_don_t_exist_ruby_2022) - [Booleans don&apos;t exist in Ruby (2022)](https://thoughtbot.com/blog/what-is-a-boolean)
* [2025-12-19, 01:02:15](https://lobste.rs/s/aop0pm/prompt_caching_10x_cheaper_llm_tokens_how) - [Prompt caching: 10x cheaper LLM tokens, but how?](https://ngrok.com/blog/prompt-caching/)
* [2025-12-18, 22:51:00](https://soylentnews.org/article.pl?sid=25/12/17/027253&amp;from=rss) - [Forget Flowers: These Ancient Plants Attract Pollinators by Getting Hot](https://soylentnews.org/article.pl?sid=25/12/17/027253&amp;from=rss)
* [2025-12-18, 22:39:47](https://news.ycombinator.com/item?id=46319826) - [History LLMs: Models trained exclusively on pre-1913 texts](https://github.com/DGoettlich/history-llms)
* [2025-12-18, 19:43:17](https://lobste.rs/s/dicrsi/please_just_try_htmx) - [Please Just Try HTMX](https://pleasejusttryhtmx.com/)
* [2025-12-18, 19:23:56](https://lobste.rs/s/amzgrw/how_hack_discord_vercel_more_with_one_easy) - [how to hack discord, vercel and more with one easy trick](https://kibty.town/blog/mintlify/)
* [2025-12-18, 18:59:33](https://news.ycombinator.com/item?id=46316968) - [Show HN: TinyPDF – 3kb pdf library (70x smaller than jsPDF)](https://github.com/Lulzx/tinypdf)
* [2025-12-18, 18:28:28](https://news.ycombinator.com/item?id=46316562) - [Ask HN: Who here is not working on web apps/server code?](https://news.ycombinator.com/item?id=46316562)
* [2025-12-18, 18:04:00](https://soylentnews.org/article.pl?sid=25/12/17/0155253&amp;from=rss) - [Foxconn is Building a Massive Factory in KY, but Probably Not for Apple](https://soylentnews.org/article.pl?sid=25/12/17/0155253&amp;from=rss)
* [2025-12-18, 16:38:41](https://lobste.rs/s/v139bi/i_got_hacked_my_server_started_mining) - [I got hacked, my server started mining Monero this morning](https://blog.jakesaunders.dev/my-server-started-mining-monero-this-morning/)
* [2025-12-18, 16:31:33](https://lobste.rs/s/8caabc/hardware_attested_nix_builds) - [Hardware-Attested Nix Builds](https://garnix.io/blog/attested-nix-builds/)
* [2025-12-18, 16:19:48](https://news.ycombinator.com/item?id=46314684) - [Response Healing: Reduce JSON defects by 80%+](https://openrouter.ai/announcements/response-healing-reduce-json-defects-by-80percent)
* [2025-12-18, 16:09:54](https://lobste.rs/s/t7dmam/your_job_is_deliver_code_you_have_proven) - [Your job is to deliver code you have proven to work](https://simonwillison.net/2025/Dec/18/code-proven-to-work/)
* [2025-12-18, 15:01:10](https://news.ycombinator.com/item?id=46313390) - [Mistral OCR 3](https://mistral.ai/news/mistral-ocr-3)
* [2025-12-18, 14:11:05](https://lobste.rs/s/h50lml/toml_1_1_0_released) - [TOML 1.1.0 released](https://github.com/toml-lang/toml/releases/tag/1.1.0)
* [2025-12-18, 13:52:39](https://lobste.rs/s/hlqzhx/dear_acm_you_re_doing_ai_wrong_you_can_still) - [Dear ACM, you&apos;re doing AI wrong but you can still get it right](https://anil.recoil.org/notes/acm-ai-recs)
* [2025-12-18, 13:15:00](https://soylentnews.org/article.pl?sid=25/12/17/0154226&amp;from=rss) - [The Tor Project is Making a Switch to Rust, Ditches C](https://soylentnews.org/article.pl?sid=25/12/17/0154226&amp;from=rss)
* [2025-12-18, 08:38:00](https://soylentnews.org/article.pl?sid=25/12/17/0149259&amp;from=rss) - [Ford Cancels Electric F-150](https://soylentnews.org/article.pl?sid=25/12/17/0149259&amp;from=rss)
* [2025-12-18, 03:46:00](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss) - [After 50 Years, MIT Chemists Finally Synthesize Elusive Anti-Cancer Compound](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss)
* [2025-12-17, 23:01:00](https://soylentnews.org/article.pl?sid=25/12/16/0745203&amp;from=rss) - [This Group Pays Bounties to Repair Broken Devices—Even If the Fix Breaks the Law](https://soylentnews.org/article.pl?sid=25/12/16/0745203&amp;from=rss)
* [2025-12-17, 22:32:19](https://news.ycombinator.com/item?id=46306497) - [NOAA deploys new generation of AI-driven global weather models](https://www.noaa.gov/news-release/noaa-deploys-new-generation-of-ai-driven-global-weather-models)
* [2025-12-17, 18:18:00](https://soylentnews.org/article.pl?sid=25/12/16/0740251&amp;from=rss) - [Norovirus Cases Surging in U.S.](https://soylentnews.org/article.pl?sid=25/12/16/0740251&amp;from=rss)
* [2025-12-17, 13:34:00](https://soylentnews.org/article.pl?sid=25/12/16/0735240&amp;from=rss) - [Verizon Refused to Unlock Man&apos;s iPhone, So He Sued the Carrier and Won](https://soylentnews.org/article.pl?sid=25/12/16/0735240&amp;from=rss)
* [2025-12-17, 08:48:00](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss) - [A Simple Pill Could Replace Injections for Treating Gonorrhea](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss)
* [2025-12-17, 04:03:00](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss) - [Australians Install 100,000 Home Battery Systems in 17 Weeks, and They Are Getting Bigger](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss)
* [2025-12-16, 23:18:00](https://soylentnews.org/article.pl?sid=25/12/15/0110223&amp;from=rss) - [Breaking a 50-Year Law: New Evidence Challenges Fundamental Black Hole Physics](https://soylentnews.org/article.pl?sid=25/12/15/0110223&amp;from=rss)
* [2025-12-16, 18:54:37](https://news.ycombinator.com/item?id=46292682) - [Ask HN: How are you LLM-coding in an established code base?](https://news.ycombinator.com/item?id=46292682)
* [2025-12-16, 18:27:00](https://soylentnews.org/article.pl?sid=25/12/15/018209&amp;from=rss) - [New Review Highlights Urgent Need for Worldwide Smell Screening](https://soylentnews.org/article.pl?sid=25/12/15/018209&amp;from=rss)
* [2025-12-16, 18:21:21](https://news.ycombinator.com/item?id=46292148) - [The pitfalls of partitioning Postgres yourself](https://hatchet.run/blog/postgres-partitioning)
* [2025-12-16, 16:32:27](https://news.ycombinator.com/item?id=46290620) - [Prompt caching for cheaper LLM tokens](https://ngrok.com/blog/prompt-caching/)
* [2025-12-16, 13:45:00](https://soylentnews.org/article.pl?sid=25/12/15/016245&amp;from=rss) - [Kali Linux 2025.4 Ethical Hacking Distro Released With KDE Plasma 6.5, GNOME 49](https://soylentnews.org/article.pl?sid=25/12/15/016245&amp;from=rss)
* [2025-12-16, 12:17:08](https://news.ycombinator.com/item?id=46287626) - [Detailed balance in large language model-driven agents](https://arxiv.org/abs/2512.10047)
* [2025-12-16, 09:02:00](https://soylentnews.org/article.pl?sid=25/12/15/014215&amp;from=rss) - [Scientists Discover Early Alzheimer&apos;s Warning Sign Hiding in Routine Brain Scans](https://soylentnews.org/article.pl?sid=25/12/15/014215&amp;from=rss)
* [2025-12-16, 04:15:00](https://soylentnews.org/article.pl?sid=25/12/13/1648208&amp;from=rss) - [U.S. Approves First Device to Treat Depression With Brain Stimulation at Home](https://soylentnews.org/article.pl?sid=25/12/13/1648208&amp;from=rss)
* [2025-12-15, 23:39:00](https://soylentnews.org/article.pl?sid=25/12/13/1642242&amp;from=rss) - [To Bop or to Sway? the Music Will Tell You](https://soylentnews.org/article.pl?sid=25/12/13/1642242&amp;from=rss)
* [2025-12-15, 19:01:00](https://soylentnews.org/article.pl?sid=25/12/13/1627258&amp;from=rss) - [A Speed Camera for the Universe](https://soylentnews.org/article.pl?sid=25/12/13/1627258&amp;from=rss)
* [2025-12-15, 14:11:00](https://soylentnews.org/article.pl?sid=25/12/13/1625224&amp;from=rss) - [Scientists Thought Parkinson’s Was in Our Genes. It Might Be in the Water](https://soylentnews.org/article.pl?sid=25/12/13/1625224&amp;from=rss)
* [2025-12-15, 09:22:00](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss) - [The State of Open Source Software in 2025](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss)
* [2025-12-15, 04:45:00](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss) - [What Time is It on Mars? NIST Physicists Have the Answer](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss)
