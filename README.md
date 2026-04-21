# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements and Innovations

* [256 Lines or Less: Test Case Minimization](https://matklad.github.io/2026/04/20/test-case-minimization.html)

* [How to make a fast dynamic language interpreter](https://zef-lang.dev/implementation)

* [Effectful Recursion Schemes](https://effekt-lang.org/blog/recursion-schemes/)

* [Transpiling from Python into Lisp](https://github.com/naver/lispe/wiki/6.22-Transpiling-Python-into-LispE)

* [Jujutsu megamerges for fun and profit](https://isaaccorbrey.com/notes/jujutsu-megamerges-for-fun-and-profit)

* [Kimi K2.6: Advancing open-source coding](https://www.kimi.com/blog/kimi-k2-6)

* [Jujutsu megamerges for fun and profit](https://isaaccorbrey.com/notes/jujutsu-megamerges-for-fun-and-profit)

## AI and Machine Learning

* [In the Face of Rampant AI, is ‘Data Poisoning’ a New Form of Civil Disobedience?](https://soylentnews.org/article.pl?sid=26/04/19/120245&from=rss)

* [OpenAI ad partner now selling ChatGPT ad placements based on “prompt relevance”](https://www.adweek.com/media/exclusive-leaked-deck-reveals-stackadapts-playbook-for-chatgpt-ads/)

* [Zoom Partners With Sam Altman's Iris-Scanning Company To Offer Callers Verifications of Humanness](https://it.slashdot.org/story/26/04/20/066225/zoom-partners-with-sam-altmans-iris-scanning-company-to-offer-callers-verifications-of-humanness?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Atomian enables default data collection to train AI](https://letsdatascience.com/news/atlassian-enables-default-data-collection-to-train-ai-f71343d8)

## Corporate and Technology Industry Updates

* [Apple CEO Tim Cook Is Stepping Down](https://apple.slashdot.org/story/26/04/20/221244/apple-ceo-tim-cook-is-stepping-down?utm_source=rss1.0mainlinkanon&utm_medium=feed

* etc

* [object Object]

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

* [2026-04-21, 03:38:21](https://lobste.rs/s/eu5n2j/256_lines_less_test_case_minimization) - [256 Lines or Less: Test Case Minimization](https://matklad.github.io/2026/04/20/test-case-minimization.html)
* [2026-04-21, 03:30:00](https://games.slashdot.org/story/26/04/20/2357225/playstation-to-require-age-verification-for-messages-and-voice-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PlayStation To Require Age Verification For Messages and Voice Chat](https://games.slashdot.org/story/26/04/20/2357225/playstation-to-require-age-verification-for-messages-and-voice-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 02:47:00](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss) - [In the Face of Rampant AI, is ‘Data Poisoning’ a New Form of Civil Disobedience?](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss)
* [2026-04-21, 01:45:20](https://lobste.rs/s/axllpn/good_egg_trust_scoring_for_github_pr) - [good-egg: Trust scoring for GitHub PR authors based on contribution history](https://github.com/2ndSetAI/good-egg)
* [2026-04-21, 01:14:08](https://lobste.rs/s/jnl6e7/signal_shot_project_verify_signal) - [Signal Shot: a project to verify the Signal protocol and its Rust implementation using Lean](https://leodemoura.github.io/blog/2026-4-20-signal-shot-the-platform-is-ready/)
* [2026-04-21, 00:48:07](https://news.ycombinator.com/item?id=47843194) - [How to make a fast dynamic language interpreter](https://zef-lang.dev/implementation)
* [2026-04-20, 23:00:00](https://mobile.slashdot.org/story/26/04/20/2014246/mobile-phones-to-be-banned-in-schools-in-england-under-new-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mobile Phones To Be Banned In Schools In England Under New Plans](https://mobile.slashdot.org/story/26/04/20/2014246/mobile-phones-to-be-banned-in-schools-in-england-under-new-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 22:08:39](https://lobste.rs/s/etrtmp/jujutsu_megamerges_for_fun_profit) - [Jujutsu megamerges for fun and profit](https://isaaccorbrey.com/notes/jujutsu-megamerges-for-fun-and-profit)
* [2026-04-20, 22:05:00](https://apple.slashdot.org/story/26/04/20/221244/apple-ceo-tim-cook-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple CEO Tim Cook Is Stepping Down](https://apple.slashdot.org/story/26/04/20/221244/apple-ceo-tim-cook-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 22:02:00](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss) - [The Quiet Colossus](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss)
* [2026-04-20, 21:32:10](https://news.ycombinator.com/item?id=47841129) - [Jujutsu megamerges for fun and profit](https://isaaccorbrey.com/notes/jujutsu-megamerges-for-fun-and-profit)
* [2026-04-20, 21:20:52](https://news.ycombinator.com/item?id=47840980) - [OpenAI ad partner now selling ChatGPT ad placements based on “prompt relevance”](https://www.adweek.com/media/exclusive-leaked-deck-reveals-stackadapts-playbook-for-chatgpt-ads/)
* [2026-04-20, 21:00:00](https://yro.slashdot.org/story/26/04/20/204204/former-palantir-employee-running-for-congress-unveils-ai-dividend-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former Palantir Employee Running For Congress Unveils &apos;AI Dividend&apos; Plan](https://yro.slashdot.org/story/26/04/20/204204/former-palantir-employee-running-for-congress-unveils-ai-dividend-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 20:54:37](https://lobste.rs/s/47iclr/stalwart_v0_16_new_foundation) - [Stalwart v0.16: A New Foundation](https://stalw.art/blog/stalwart-0-16)
* [2026-04-20, 20:39:32](https://news.ycombinator.com/item?id=47840219) - [John Ternus to become Apple CEO](https://www.apple.com/newsroom/2026/04/tim-cook-to-become-apple-executive-chairman-john-ternus-to-become-apple-ceo/)
* [2026-04-20, 20:07:35](https://news.ycombinator.com/item?id=47839835) - [F-35 is built for the wrong war](https://warontherocks.com/cogs-of-war/the-f-35-is-a-masterpiece-built-for-the-wrong-war/)
* [2026-04-20, 20:00:00](https://entertainment.slashdot.org/story/26/04/20/1947211/deezer-says-44-of-songs-uploaded-to-its-platform-daily-are-ai-generated?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Deezer Says 44% of Songs Uploaded To Its Platform Daily Are AI-Generated](https://entertainment.slashdot.org/story/26/04/20/1947211/deezer-says-44-of-songs-uploaded-to-its-platform-daily-are-ai-generated?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 19:51:07](https://news.ycombinator.com/item?id=47839645) - [Soul Player C64 – A real transformer running on a 1 MHz Commodore 64](https://github.com/gizmo64k/soulplayer-c64)
* [2026-04-20, 19:00:00](https://news.slashdot.org/story/26/04/20/1711231/trump-administration-begins-refunding-166-billion-in-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration Begins Refunding $166 Billion In Tariffs](https://news.slashdot.org/story/26/04/20/1711231/trump-administration-begins-refunding-166-billion-in-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 18:40:55](https://lobste.rs/s/ea0xug/quantum_computers_are_not_threat_128_bit) - [Quantum Computers Are Not a Threat to 128-bit Symmetric Keys](https://words.filippo.io/128-bits/)
* [2026-04-20, 18:39:53](https://news.ycombinator.com/item?id=47838703) - [Kimi vendor verifier – verify accuracy of inference providers](https://www.kimi.com/blog/kimi-vendor-verifier)
* [2026-04-20, 18:00:00](https://tech.slashdot.org/story/26/04/20/1654212/palantir-posts-bond-villain-manifesto-on-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Palantir Posts Bond Villain Manifesto On X](https://tech.slashdot.org/story/26/04/20/1654212/palantir-posts-bond-villain-manifesto-on-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 17:16:00](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss) - [How Much Does Chatbot Bias Influence Users? A Lot, It Turns Out](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss)
* [2026-04-20, 17:07:22](https://lobste.rs/s/7mqzck/journey_optimising_elixir_application) - [Journey in optimising Elixir application](https://hauleth.dev/post/things-about-elixir-you-probably-will-never-need/)
* [2026-04-20, 17:00:45](https://news.ycombinator.com/item?id=47837176) - [Bloom (YC P26) Is Hiring](https://www.ycombinator.com/companies/trybloom/jobs)
* [2026-04-20, 17:00:00](https://slashdot.org/story/26/04/20/1647258/allbirds-move-to-ai-has-echoes-of-the-dot-com-frenzy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Allbirds&apos; Move To AI Has Echoes of the Dot-Com Frenzy](https://slashdot.org/story/26/04/20/1647258/allbirds-move-to-ai-has-echoes-of-the-dot-com-frenzy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 16:37:48](https://news.ycombinator.com/item?id=47836784) - [Quantum Computers Are Not a Threat to 128-Bit Symmetric Keys](https://words.filippo.io/128-bits/)
* [2026-04-20, 16:16:54](https://lobste.rs/s/ky2eoq/effectful_recursion_schemes) - [Effectful Recursion Schemes](https://effekt-lang.org/blog/recursion-schemes/)
* [2026-04-20, 16:02:35](https://lobste.rs/s/ugbrsp/pytexas_2026_recap) - [PyTexas 2026 Recap](https://bernat.tech/posts/pytexas-2026-recap/)
* [2026-04-20, 16:00:00](https://yro.slashdot.org/story/26/04/20/0353220/nsa-using-anthropics-mythos-despite-blacklist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NSA Using Anthropic&apos;s Mythos Despite Blacklist](https://yro.slashdot.org/story/26/04/20/0353220/nsa-using-anthropics-mythos-despite-blacklist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 15:53:24](https://lobste.rs/s/xeb6yb/transpiling_from_python_into_lisp) - [Transpiling from Python into Lisp](https://github.com/naver/lispe/wiki/6.22-Transpiling-Python-into-LispE)
* [2026-04-20, 15:41:02](https://news.ycombinator.com/item?id=47835928) - [Deezer says 44% of songs uploaded to its platform daily are AI-generated](https://techcrunch.com/2026/04/20/deezer-says-44-of-songs-uploaded-to-its-platform-daily-are-ai-generated/)
* [2026-04-20, 15:32:47](https://lobste.rs/s/tf7ngv/ggsql_grammar_graphics_for_sql) - [ggsql: A grammar of graphics for SQL](https://opensource.posit.co/blog/2026-04-20_ggsql_alpha_release/)
* [2026-04-20, 15:28:13](https://news.ycombinator.com/item?id=47835735) - [Kimi K2.6: Advancing open-source coding](https://www.kimi.com/blog/kimi-k2-6)
* [2026-04-20, 15:00:00](https://hardware.slashdot.org/story/26/04/20/0346215/robots-beat-human-records-at-beijing-half-marathon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robots Beat Human Records At Beijing Half-Marathon](https://hardware.slashdot.org/story/26/04/20/0346215/robots-beat-human-records-at-beijing-half-marathon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 14:18:56](https://lobste.rs/s/hqfiqi/building_opnsense_router) - [Building an OPNsense router](https://clintonboys.com/projects/homelab/04-router/)
* [2026-04-20, 14:05:34](https://news.ycombinator.com/item?id=47834565) - [Qwen3.6-Max-Preview: Smarter, Sharper, Still Evolving](https://qwen.ai/blog?id=qwen3.6-max-preview)
* [2026-04-20, 13:41:25](https://news.ycombinator.com/item?id=47834195) - [All phones sold in the EU to have replaceable batteries from 2027](https://www.theolivepress.es/spain-news/2026/04/20/eu-to-force-replaceable-batteries-in-phones-and-tablets-from-2027/)
* [2026-04-20, 13:40:28](https://news.ycombinator.com/item?id=47834184) - [Sauna effect on heart rate](https://tryterra.co/research/sauna-effect-on-heart-rate)
* [2026-04-20, 13:06:15](https://lobste.rs/s/uxkvmr/forgejo_v15_0_is_available) - [Forgejo v15.0 is available](https://forgejo.org/2026-04-release-v15-0/)
* [2026-04-20, 12:51:20](https://news.ycombinator.com/item?id=47833558) - [ggsql: A Grammar of Graphics for SQL](https://opensource.posit.co/blog/2026-04-20_ggsql_alpha_release/)
* [2026-04-20, 12:37:45](https://lobste.rs/s/41tx1p/418_i_m_teapot) - [418 I&apos;m a teapot](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/418)
* [2026-04-20, 12:30:39](https://lobste.rs/s/b14yf4/creusot_0_11_0_verifythis_winner) - [Creusot 0.11.0: VerifyThis winner](https://devlog.creusot.rs/2026-04-20/)
* [2026-04-20, 12:29:00](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss) - [Russia Hits European Thermal Power Plant in Attempted ‘Destructive’ Cyberattack](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss)
* [2026-04-20, 12:23:39](https://news.ycombinator.com/item?id=47833247) - [Atlassian enables default data collection to train AI](https://letsdatascience.com/news/atlassian-enables-default-data-collection-to-train-ai-f71343d8)
* [2026-04-20, 11:51:38](https://lobste.rs/s/hagsaq/webusb_extension_for_firefox) - [WebUSB extension for Firefox](https://github.com/ArcaneNibble/awawausb)
* [2026-04-20, 11:51:04](https://news.ycombinator.com/item?id=47832969) - [WebUSB Extension for Firefox](https://github.com/ArcaneNibble/awawausb)
* [2026-04-20, 11:34:00](https://tech.slashdot.org/story/26/04/20/0729233/videos-catch-amazon-delivery-drones-dropping-packages-from-10-feet-in-the-air?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Videos Catch Amazon Delivery Drones Dropping Packages From 10 Feet in the Air](https://tech.slashdot.org/story/26/04/20/0729233/videos-catch-amazon-delivery-drones-dropping-packages-from-10-feet-in-the-air?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 11:05:54](https://lobste.rs/s/cjbxjv/your_engineering_team_looks_healthy_it) - [Your engineering team looks healthy. It probably isn&apos;t](https://dbarabashh.com/thoughts-and-experience/your-engineering-team-looks-healthy)
* [2026-04-20, 10:04:40](https://news.ycombinator.com/item?id=47832248) - [M 7.4 earthquake – 100 km ENE of Miyako, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us6000sri7/)
* [2026-04-20, 09:16:49](https://lobste.rs/s/4p1oys/diagnosing_random_mariadb_freezes) - [Diagnosing Random MariaDB Freezes](https://frappe.io/blog/frappe-cloud/diagnosing-random-mariadb-freezes-on-frappe-cloud)
* [2026-04-20, 09:07:49](https://lobste.rs/s/y5nowq/modern_frontend_complexity_essential) - [Modern Frontend Complexity: essential or accidental?](https://binaryigor.com/modern-frontend-complexity.html)
* [2026-04-20, 08:49:22](https://news.ycombinator.com/item?id=47831742) - [Brussels launched an age checking app. Hackers took 2 minutes to break it](https://www.politico.eu/article/eu-brussels-launched-age-checking-app-hackers-say-took-them-2-minutes-break-it/)
* [2026-04-20, 08:08:15](https://lobste.rs/s/hqvxoj/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/hqvxoj/what_are_you_doing_this_week)
* [2026-04-20, 07:43:00](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss) - [How Two Motorola Transistors Became the World&apos;s Default NPNs](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss)
* [2026-04-20, 07:34:00](https://it.slashdot.org/story/26/04/20/066225/zoom-partners-with-sam-altmans-iris-scanning-company-to-offer-callers-verifications-of-humanness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Zoom Partners With Sam Altman&apos;s Iris-Scanning Company To Offer Callers Verifications of Humanness](https://it.slashdot.org/story/26/04/20/066225/zoom-partners-with-sam-altmans-iris-scanning-company-to-offer-callers-verifications-of-humanness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 04:34:00](https://slashdot.org/story/26/04/20/0423212/brave-browser-introduces-origin-a-pay-once-minimalist-browser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brave Browser Introduces &apos;Origin&apos;, a Pay-Once &apos;Minimalist&apos; Browser](https://slashdot.org/story/26/04/20/0423212/brave-browser-introduces-origin-a-pay-once-minimalist-browser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 03:27:54](https://lobste.rs/s/pfqxak/claude_desktop_installs_undocumented) - [Claude Desktop installs undocumented browser extensions for Chrome and other browsers](https://www.thatprivacyguy.com/blog/anthropic-spyware/)
* [2026-04-20, 03:01:00](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss) - [10 Math Books That Sharpen Your Thinking](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss)
* [2026-04-20, 02:50:00](https://science.slashdot.org/story/26/04/20/0248201/blue-origin-rocket-launches-successfully-reuses-booster---but-loses-satellite?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blue Origin Rocket Launches, Successfully Reuses Booster - But Loses Satellite](https://science.slashdot.org/story/26/04/20/0248201/blue-origin-rocket-launches-successfully-reuses-booster---but-loses-satellite?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 00:43:12](https://lobste.rs/s/dfe90i/theseus_static_windows_emulator) - [Theseus, a static Windows emulator](https://neugierig.org/software/blog/2026/04/theseus.html)
* [2026-04-19, 23:49:00](https://science.slashdot.org/story/26/04/19/2346255/voyager-1-is-running-out-of-power-nasa-just-switched-part-of-it-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Voyager 1 is Running Out of Power.  NASA Just Switched Part of It Off](https://science.slashdot.org/story/26/04/19/2346255/voyager-1-is-running-out-of-power-nasa-just-switched-part-of-it-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-19, 22:16:00](https://soylentnews.org/article.pl?sid=26/04/18/2348241&amp;from=rss) - [“TotalRecall Reloaded” Tool Finds a Side Entrance to the Windows 11 Recall Database](https://soylentnews.org/article.pl?sid=26/04/18/2348241&amp;from=rss)
* [2026-04-19, 19:19:48](https://news.ycombinator.com/item?id=47826839) - [10 years ago, someone wrote a test for Servo that included an expiry in 2026](https://mastodon.social/@jdm_/116429380667467307)
* [2026-04-19, 18:06:29](https://lobste.rs/s/uevqfc/introducing_glyph_protocol_for) - [Introducing Glyph Protocol for Terminals](https://rapha.land/introducing-glyph-protocol-for-terminals/)
* [2026-04-19, 17:34:00](https://soylentnews.org/article.pl?sid=26/04/18/195238&amp;from=rss) - [Pentagon Reportedly Asks Detroit to Use More Car Factories as Arms Factories](https://soylentnews.org/article.pl?sid=26/04/18/195238&amp;from=rss)
* [2026-04-19, 15:27:10](https://lobste.rs/s/ktmwly/what_we_once_had_at_height_xmpp_era) - [What we once had (at the height of the XMPP era of the Internet) (2023)](https://www.kirsle.net/what-we-once-had-at-the-height-of-the-xmpp-era-of-the-internet)
* [2026-04-19, 12:51:00](https://soylentnews.org/article.pl?sid=26/04/18/192211&amp;from=rss) - [The \&quot;Passive Income\&quot; Trap Ate a Generation of Entrepreneurs](https://soylentnews.org/article.pl?sid=26/04/18/192211&amp;from=rss)
* [2026-04-19, 12:22:45](https://news.ycombinator.com/item?id=47823777) - [Real-Time Visualization of Human Finger Joint Cavitation (2015)](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0119470)
* [2026-04-19, 08:03:00](https://soylentnews.org/article.pl?sid=26/04/18/1855201&amp;from=rss) - [Why the Phrase &apos;Super El Niño&apos; Makes Australian Climate Scientists Roll Their Eyes](https://soylentnews.org/article.pl?sid=26/04/18/1855201&amp;from=rss)
* [2026-04-19, 07:54:11](https://news.ycombinator.com/item?id=47822549) - [Modern Rendering Culling Techniques](https://krupitskas.com/posts/modern_culling_techniques/)
* [2026-04-19, 07:32:29](https://lobste.rs/s/na7cxg/yojam_macos_default_browser_shim_routes) - [Yojam: a macOS default-browser shim that routes URLs through a rule engine](https://github.com/fluffypony/yojam)
* [2026-04-19, 03:14:00](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss) - [Irish Bog Plant Revives Ancient Remedy as a New Weapon Vs Superbugs](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss)
* [2026-04-18, 22:26:00](https://soylentnews.org/article.pl?sid=26/04/17/0348237&amp;from=rss) - [Netgear Routers Seemingly Won&apos;t be Banned in the US After All](https://soylentnews.org/article.pl?sid=26/04/17/0348237&amp;from=rss)
* [2026-04-18, 17:42:00](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss) - [Scientists Invented a Fake Disease. AI Told People It Was Real](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss)
* [2026-04-18, 12:54:00](https://soylentnews.org/article.pl?sid=26/04/17/0336248&amp;from=rss) - [Online Response to the Attack on Sam Altman&apos;s House Shows a Generational Divide](https://soylentnews.org/article.pl?sid=26/04/17/0336248&amp;from=rss)
* [2026-04-18, 08:12:00](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss) - [Meet Orpheus—a Hopper Mission Built to Hunt for Life in Martian Volcanoes](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss)
* [2026-04-18, 03:30:00](https://soylentnews.org/article.pl?sid=26/04/17/0318245&amp;from=rss) - [IPv6 Adoption Reaches 50% - The Long Journey Toward Internet&apos;s Next Generation](https://soylentnews.org/article.pl?sid=26/04/17/0318245&amp;from=rss)
* [2026-04-18, 02:51:34](https://news.ycombinator.com/item?id=47812749) - [Ternary Bonsai: Top Intelligence at 1.58 Bits](https://prismml.com/news/ternary-bonsai)
* [2026-04-17, 23:22:38](https://news.ycombinator.com/item?id=47811668) - [Japan&apos;s Cherry Blossom Database, 1,200 Years Old, Has a New Keeper](https://www.nytimes.com/2026/04/17/climate/japan-cherry-blossom-database-scientist.html)
* [2026-04-17, 22:50:00](https://soylentnews.org/article.pl?sid=26/04/16/1142203&amp;from=rss) - [Back Button Hijacking to be Penalised in Google Crackdown](https://soylentnews.org/article.pl?sid=26/04/16/1142203&amp;from=rss)
* [2026-04-17, 22:12:59](https://news.ycombinator.com/item?id=47811154) - [Kefir C17/C23 Compiler](https://sr.ht/~jprotopopov/kefir/)
* [2026-04-17, 18:58:36](https://news.ycombinator.com/item?id=47809338) - [Year of the IPv6 Overlay Network](https://www.defined.net/blog/year-of-the-ipv6-overlay-network/)
* [2026-04-17, 18:06:00](https://soylentnews.org/article.pl?sid=26/04/16/1137236&amp;from=rss) - [Physicists Think They&apos;ve Resolved the Proton Size Puzzle](https://soylentnews.org/article.pl?sid=26/04/16/1137236&amp;from=rss)
* [2026-04-17, 16:22:36](https://news.ycombinator.com/item?id=47807609) - [Writing string.h functions using string instructions in asm x86-64 (2025)](https://pmasschelier.github.io/x86_64_strings/)
* [2026-04-17, 13:20:00](https://soylentnews.org/article.pl?sid=26/04/15/1730255&amp;from=rss) - [Claude Mythos Preview Has Officially Frightened the British](https://soylentnews.org/article.pl?sid=26/04/15/1730255&amp;from=rss)
* [2026-04-17, 08:36:00](https://soylentnews.org/article.pl?sid=26/04/15/1727239&amp;from=rss) - [Meta Zuckerberg Becomes the New Clippy](https://soylentnews.org/article.pl?sid=26/04/15/1727239&amp;from=rss)
* [2026-04-17, 03:52:00](https://soylentnews.org/article.pl?sid=26/04/15/1723257&amp;from=rss) - [Ukraine&apos;s Military Robot Surge Aims to Offset Drone Risks to Humans](https://soylentnews.org/article.pl?sid=26/04/15/1723257&amp;from=rss)
