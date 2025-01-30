# [News Summary](https://kherrick.github.io/news-summary/)

## Investment and Developments in AI

* [SoftBank in Talks To Invest Up To $25 Billion in OpenAI](https://slashdot.org/story/25/01/30/1114205/softbank-in-talks-to-invest-up-to-25-billion-in-openai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - SoftBank appears poised to make a major play in the artificial intelligence sector with potentially the largest investment commitment in OpenAI.

* [The AI Fad Just Burned to the Waterline](http://charleshughsmith.blogspot.com/2025/01/the-ai-fad-just-burned-to-waterline.html) - This critical take challenges the sustainability of the AI industry's rapid ascent.

* [Has Europe's Great Hope For AI Missed Its Moment?](https://slashdot.org/story/25/01/30/117225/has-europes-great-hope-for-ai-missed-its-moment?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A commentary on whether Europe's ambitious AI initiatives will continue to lag behind global counterparts.

## Scientific and Space Discoveries

* [Asteroid Contains Building Blocks of Life, Say Scientists](https://science.slashdot.org/story/25/01/30/0520218/asteroid-contains-building-blocks-of-life-say-scientists?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Scientists uncover evidence on an asteroid offering insights into the origins of life on Earth.

* [Astronomers Discover 196-Foot Asteroid With 1-In-83 Chance of Hitting Earth In 2032](https://science.slashdot.org/story/25/01/30/0218237/astronomers-discover-196-foot-asteroid-with-1-in-83-chance-of-hitting-earth-in-2032?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A potentially hazardous asteroid raises discussions in the scientific community.

## Technology, Tools, and Programming

* [Mistral Small 3](https://mistral.ai/news/mistral-small-3/) - Introducing Mistral Small 3, an advancement in AI model efficiency.

* [JavaScript Temporal is coming](https://developer.mozilla.org/en-US/blog/javascript-temporal-is-coming/) - Updates on the anticipated Temporal API in JavaScript for improved date and time handling.

* [Execution in the Kingdom of Nouns](https://steve-yegge.blogspot.com/2006/03/execution-in-kingdom-of-nouns.html) - A classic deep dive into object-oriented programming paradigms and limitations.

## Cybersecurity and Law

* [Backdoor Infecting VPNs Used “Magic Packets” for Stealth and Security](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss) - Insights into a sophisticated backdoor affecting VPN security.

* [Democrat Teams Up With Movie Industry To Propose Website-Blocking Law](https://politics.slashdot.org/story/25/01/30/028201/democrat-teams-up-with-movie-industry-to-propose-website-blocking-law?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A proposed bill raising privacy and censorship concerns.

## Unique Innovations and Historical Highlights

* [Mice with Two Dads have been Created Using CRISPR](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss) - A landmark achievement in genetic research ignites questions about biology and ethics.

* [History of APL in the USSR](https://dl.acm.org/doi/10.1145/130647.130656) - Exploring the cultural and technological impact of APL programming language in the USSR.

## Gaming and Industry

* [Nintendo Loses Trademark Battle With a Costa Rican Grocery Store](https://games.slashdot.org/story/25/01/30/0532233/nintendo-loses-trademark-battle-with-a-costa-rican-grocery-store?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A David vs. Goliath moment in intellectual property law.

* [Atari Limited-Edition Asteroids Watches Sell Out Instantly For 45th Anniversary](https://games.slashdot.org/story/25/01/29/2234210/atari-limited-edition-asteroids-watches-sell-out-instantly-for-45th-anniversary?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Nostalgia meets demand as Atari's homage to classic gaming proves popular.

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

* [2025-01-30, 15:20:00](https://slashdot.org/story/25/01/30/1114205/softbank-in-talks-to-invest-up-to-25-billion-in-openai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [SoftBank in Talks To Invest Up To $25 Billion in OpenAI](https://slashdot.org/story/25/01/30/1114205/softbank-in-talks-to-invest-up-to-25-billion-in-openai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 15:17:44](https://news.ycombinator.com/item?id=42878532) - [The AI Fad Just Burned to the Waterline](http://charleshughsmith.blogspot.com/2025/01/the-ai-fad-just-burned-to-waterline.html)
* [2025-01-30, 14:40:00](https://slashdot.org/story/25/01/30/117225/has-europes-great-hope-for-ai-missed-its-moment?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Has Europe's Great Hope For AI Missed Its Moment?](https://slashdot.org/story/25/01/30/117225/has-europes-great-hope-for-ai-missed-its-moment?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 14:16:57](https://news.ycombinator.com/item?id=42877860) - [Mistral Small 3](https://mistral.ai/news/mistral-small-3/)
* [2025-01-30, 14:01:27](https://news.ycombinator.com/item?id=42877709) - [Note on the Relationship Between Artificial Intelligence and Human Intelligence](https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_ddf_doc_20250128_antiqua-et-nova_en.html)
* [2025-01-30, 14:00:00](https://slashdot.org/story/25/01/30/1058204/india-lauds-chinese-ai-lab-deepseek-plans-to-host-its-models-on-local-servers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [India Lauds Chinese AI Lab DeepSeek, Plans To Host Its Models on Local Servers](https://slashdot.org/story/25/01/30/1058204/india-lauds-chinese-ai-lab-deepseek-plans-to-host-its-models-on-local-servers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 13:37:14](https://lobste.rs/s/lozl1i/equinix_sunset_future_gitlab) - [Equinix Sunset, future of gitlab.freedesktop.org](https://gitlab.freedesktop.org/freedesktop/freedesktop/-/issues/2011)
* [2025-01-30, 13:34:00](https://soylentnews.org/article.pl?sid=25/01/29/124257&from=rss) - [Baltic Undersea Cable Likely Damaged by External Force, Latvia Says](https://soylentnews.org/article.pl?sid=25/01/29/124257&from=rss)
* [2025-01-30, 13:21:58](https://lobste.rs/s/yubalv/pointers_are_complicated_ii_we_need) - [Pointers Are Complicated II, or: We need better language specs](https://www.ralfj.de/blog/2020/12/14/provenance.html)
* [2025-01-30, 13:18:49](https://news.ycombinator.com/item?id=42877430) - [History of APL in the USSR (1991)](https://dl.acm.org/doi/10.1145/130647.130656)
* [2025-01-30, 13:17:19](https://lobste.rs/s/tn5w79/history_apl_ussr) - [History of APL in the USSR](https://dl.acm.org/doi/10.1145/130647.130656)
* [2025-01-30, 13:12:37](https://lobste.rs/s/pvhpvi/execution_kingdom_nouns) - [Execution in the Kingdom of Nouns](https://steve-yegge.blogspot.com/2006/03/execution-in-kingdom-of-nouns.html)
* [2025-01-30, 13:12:34](https://news.ycombinator.com/item?id=42877399) - [Audiocube – A 3D DAW for Spatial Audio](https://www.audiocube.app)
* [2025-01-30, 13:00:00](https://games.slashdot.org/story/25/01/30/0532233/nintendo-loses-trademark-battle-with-a-costa-rican-grocery-store?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nintendo Loses Trademark Battle With a Costa Rican Grocery Store](https://games.slashdot.org/story/25/01/30/0532233/nintendo-loses-trademark-battle-with-a-costa-rican-grocery-store?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 12:00:46](https://news.ycombinator.com/item?id=42877004) - [Codes Health (YC S24) Is Hiring](https://news.ycombinator.com/item?id=42877004)
* [2025-01-30, 11:28:31](https://news.ycombinator.com/item?id=42876840) - [JavaScript Temporal is coming](https://developer.mozilla.org/en-US/blog/javascript-temporal-is-coming/)
* [2025-01-30, 11:17:28](https://lobste.rs/s/u9dron/death_email_forwarding) - [The Death of Email Forwarding](https://www.mythic-beasts.com/blog/2025/01/29/the-death-of-email-forwarding/)
* [2025-01-30, 11:03:27](https://lobste.rs/s/gquymr/ux_login_codes) - [The UX of login codes](https://bradfrost.com/blog/post/the-ux-of-login-codes/)
* [2025-01-30, 10:23:18](https://lobste.rs/s/bark5a/preview_crates) - [Preview crates](https://smallcultfollowing.com/babysteps/blog/2025/01/29/preview-crates/)
* [2025-01-30, 10:14:32](https://lobste.rs/s/i2edlt/how_i_use_ai) - [How I Use \"AI\"](https://nicholas.carlini.com/writing/2024/how-i-use-ai.html)
* [2025-01-30, 10:00:00](https://science.slashdot.org/story/25/01/30/0520218/asteroid-contains-building-blocks-of-life-say-scientists?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Asteroid Contains Building Blocks of Life, Say Scientists](https://science.slashdot.org/story/25/01/30/0520218/asteroid-contains-building-blocks-of-life-say-scientists?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 09:33:20](https://lobste.rs/s/3pxctd/perforator_cluster_wide_continuous) - [Perforator - cluster-wide continuous profiling tool](https://github.com/yandex/perforator)
* [2025-01-30, 09:32:30](https://lobste.rs/s/7kq1bf/decompiling_2024_year_resurgance) - [Decompiling 2024: A Year of Resurgance in Decompilation Research](https://mahaloz.re/dec-progress-2024)
* [2025-01-30, 08:29:00](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss) - [Mice with Two Dads have been Created Using CRISPR](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss)
* [2025-01-30, 08:04:53](https://news.ycombinator.com/item?id=42875888) - [Investigating the case of human nose shape and climate adaptation (2017)](https://journals.plos.org/plosgenetics/article?id=10.1371/journal.pgen.1006616)
* [2025-01-30, 07:00:00](https://science.slashdot.org/story/25/01/30/0218237/astronomers-discover-196-foot-asteroid-with-1-in-83-chance-of-hitting-earth-in-2032?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Astronomers Discover 196-Foot Asteroid With 1-In-83 Chance of Hitting Earth In 2032](https://science.slashdot.org/story/25/01/30/0218237/astronomers-discover-196-foot-asteroid-with-1-in-83-chance-of-hitting-earth-in-2032?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 04:34:25](https://lobste.rs/s/mwxbm4/reversing_pixel_4a_battery_update) - [Reversing the Pixel 4a battery update](https://social.treehouse.systems/@marcan/113914172433692339)
* [2025-01-30, 04:33:25](https://news.ycombinator.com/item?id=42874885) - [PCBs, copper pours, ground planes, and you](https://lcamtuf.substack.com/p/pcbs-ground-planes-and-you)
* [2025-01-30, 04:23:28](https://lobste.rs/s/dybrex/ending_support_for_expiration) - [Ending Support for Expiration Notification Emails](https://letsencrypt.org/2025/01/22/ending-expiration-emails/)
* [2025-01-30, 03:45:00](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss) - [Complexity Physics Finds Crucial Tipping Points in Chess Games](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss)
* [2025-01-30, 03:30:00](https://politics.slashdot.org/story/25/01/30/028201/democrat-teams-up-with-movie-industry-to-propose-website-blocking-law?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Democrat Teams Up With Movie Industry To Propose Website-Blocking Law](https://politics.slashdot.org/story/25/01/30/028201/democrat-teams-up-with-movie-industry-to-propose-website-blocking-law?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 02:56:45](https://news.ycombinator.com/item?id=42874301) - [Commercial jet collides with Black Hawk helicopter near Reagan airport](https://www.mediaite.com/news/breaking-commercial-jet-collides-with-police-chopper-near-reagan-airport/)
* [2025-01-30, 02:02:00](https://yro.slashdot.org/story/25/01/30/0157258/ai-assisted-works-can-get-copyright-with-enough-human-creativity-says-us-copyright-office?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI-Assisted Works Can Get Copyright With Enough Human Creativity, Says US Copyright Office](https://yro.slashdot.org/story/25/01/30/0157258/ai-assisted-works-can-get-copyright-with-enough-human-creativity-says-us-copyright-office?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 01:48:17](https://news.ycombinator.com/item?id=42873825) - [Decompiling 2024: A Year of Resurgance in Decompilation Research](https://mahaloz.re/dec-progress-2024)
* [2025-01-30, 01:41:10](https://lobste.rs/s/w17cjs/will_i_ever_use_this_real_world) - [\"Will I ever use this in the real world?\"](https://blog.waleedkhan.name/will-i-ever-use-this/)
* [2025-01-30, 01:25:00](https://tech.slashdot.org/story/25/01/29/2242242/nordvpn-says-its-new-protocol-can-circumvent-vpn-blockers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NordVPN Says Its New Protocol Can Circumvent VPN Blockers](https://tech.slashdot.org/story/25/01/29/2242242/nordvpn-says-its-new-protocol-can-circumvent-vpn-blockers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 01:19:37](https://lobste.rs/s/h9ednl/hey_deepseek_can_you_reduce_junk_my_inbox) - [Hey DeepSeek, can you reduce junk in my inbox?](https://loshadki.app/blog/2025-01-29-protect-inbox-with-deepseek/)
* [2025-01-30, 00:45:00](https://games.slashdot.org/story/25/01/29/2234210/atari-limited-edition-asteroids-watches-sell-out-instantly-for-45th-anniversary?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Atari Limited-Edition Asteroids Watches Sell Out Instantly For 45th Anniversary](https://games.slashdot.org/story/25/01/29/2234210/atari-limited-edition-asteroids-watches-sell-out-instantly-for-45th-anniversary?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 00:31:53](https://news.ycombinator.com/item?id=42873312) - [Mathesar – an intutive spreadsheet-like interface to Postgres data](https://github.com/mathesar-foundation/mathesar)
* [2025-01-30, 00:02:00](https://games.slashdot.org/story/25/01/29/2224212/sony-removes-playstation-account-requirement-from-4-single-player-steam-games?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sony Removes PlayStation Account Requirement From 4 Single-Player Steam Games](https://games.slashdot.org/story/25/01/29/2224212/sony-removes-playstation-account-requirement-from-4-single-player-steam-games?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 23:33:46](https://lobste.rs/s/sn8buz/tv_setup) - [TV Setup](https://push.cx/tv-setup)
* [2025-01-29, 23:20:00](https://slashdot.org/story/25/01/29/2218253/microsoft-makes-deepseeks-r1-model-available-on-azure-ai-and-github?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Makes DeepSeek's R1 Model Available On Azure AI and GitHub](https://slashdot.org/story/25/01/29/2218253/microsoft-makes-deepseeks-r1-model-available-on-azure-ai-and-github?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 23:02:00](https://soylentnews.org/article.pl?sid=25/01/28/0319228&from=rss) - [Millions of Subarus Could be Remotely Unlocked, Tracked Due to Security Flaws](https://soylentnews.org/article.pl?sid=25/01/28/0319228&from=rss)
* [2025-01-29, 22:45:14](https://news.ycombinator.com/item?id=42872276) - [Advice for a friend who wants to start a blog](https://www.henrikkarlsson.xyz/p/start-a-blog)
* [2025-01-29, 22:40:00](https://it.slashdot.org/story/25/01/29/226219/zyxel-firewalls-borked-by-buggy-update-on-site-access-required-for-fix?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Zyxel Firewalls Borked By Buggy Update, On-Site Access Required For Fix](https://it.slashdot.org/story/25/01/29/226219/zyxel-firewalls-borked-by-buggy-update-on-site-access-required-for-fix?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 22:03:43](https://lobste.rs/s/nqy7uq/parametric_subtyping_for_structural) - [Parametric Subtyping for Structural Parametric Polymorphism](https://blog.sigplan.org/2025/01/29/parametric-subtyping-for-structural-parametric-polymorphism/)
* [2025-01-29, 22:00:00](https://tech.slashdot.org/story/25/01/29/2159203/alphabets-waymo-to-test-its-autonomous-driving-technology-in-over-10-new-cities?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Alphabet's Waymo To Test Its Autonomous Driving Technology In Over 10 New Cities](https://tech.slashdot.org/story/25/01/29/2159203/alphabets-waymo-to-test-its-autonomous-driving-technology-in-over-10-new-cities?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 21:56:11](https://news.ycombinator.com/item?id=42871743) - [From C++ to Clojure: Jank language promises best of both](https://thenewstack.io/from-c-to-clojure-new-language-promises-best-of-both/)
* [2025-01-29, 20:50:00](https://apple.slashdot.org/story/25/01/29/1848226/intel-did-not-know-how-to-be-a-foundry-tim-cook-told-tsmc-chief?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Intel 'Did Not Know How To Be a Foundry,' Tim Cook Told TSMC Chief](https://apple.slashdot.org/story/25/01/29/1848226/intel-did-not-know-how-to-be-a-foundry-tim-cook-told-tsmc-chief?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 20:39:11](https://lobste.rs/s/siaf0m/building_semantic_movie_search_demo_with) - [Building a semantic movie search demo with pgvector and Next.js](https://blog.6nok.org/building-a-semantic-movie-search-demo-with-pgvector-and-next.js/)
* [2025-01-29, 20:27:45](https://lobste.rs/s/0t3yqw/building_t1d_smartwatch_from_scratch) - [Building a (T1D) smartwatch from scratch](https://andrewchilds.com/posts/building-a-t1d-smartwatch-from-scratch)
* [2025-01-29, 18:17:00](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss) - [Linux is the Name That Shall Not be Spoken at Facebook](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss)
* [2025-01-29, 18:09:19](https://news.ycombinator.com/item?id=42868770) - [SmolGPT: A minimal PyTorch implementation for training a small LLM from scratch](https://github.com/Om-Alve/smolGPT)
* [2025-01-29, 17:44:45](https://news.ycombinator.com/item?id=42868390) - [An analysis of DeepSeek's R1-Zero and R1](https://arcprize.org/blog/r1-zero-r1-results-analysis)
* [2025-01-29, 16:57:59](https://news.ycombinator.com/item?id=42867657) - [A major Postgres upgrade with zero downtime](https://www.instantdb.com/essays/pg_upgrade)
* [2025-01-29, 16:37:05](https://lobste.rs/s/s89gxq/why_trees_without_branches_grow_faster) - [Why Trees Without Branches Grow Faster: The Case for Reducing Branches in Code](https://cedardb.com/blog/reducing_branches/)
* [2025-01-29, 16:22:10](https://lobste.rs/s/oxmxzl/using_v2ray_with_caddy_access_internet) - [Using v2ray with Caddy to Access the Internet in China](https://sequentialread.com/v2ray-caddy-to-access-the-internet-in-china/)
* [2025-01-29, 15:34:06](https://lobste.rs/s/f6frhd/hell_haskell_shell) - [Hell (Haskell shell)](https://chrisdone.com/posts/hell-year-in-review-2025/)
* [2025-01-29, 13:33:00](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss) - [Backdoor Infecting VPNs Used “Magic Packets” for Stealth and Security](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss)
* [2025-01-29, 12:47:17](https://news.ycombinator.com/item?id=42864272) - [Asteroid Impact on Earth 2032 with Probability 1% and 8Mt Energy](https://cneos.jpl.nasa.gov/sentry/details.html#?des=2024%20YR4)
* [2025-01-29, 08:49:00](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss) - [How Good is Tesla Full Self Driving, by a Motor Trend Road Tester](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss)
* [2025-01-29, 04:21:18](https://lobste.rs/s/pihql3/you_re_thinking_about_passkeys_wrong) - [You're thinking about passkeys wrong](https://dev.to/yawaramin/youre-thinking-about-passkeys-wrong-171o)
* [2025-01-29, 04:03:00](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss) - [5 Super Creepy New Technologies That Should Chill All Of Us To The Core](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss)
* [2025-01-29, 03:11:04](https://lobste.rs/s/tswf9y/modern_compiler_for_french_tax_code) - [A Modern Compiler for the French Tax Code](https://inria.hal.science/hal-03002266)
* [2025-01-28, 23:17:00](https://soylentnews.org/article.pl?sid=25/01/27/1659214&from=rss) - [Your Hollywood Career: How to Tell When the End Is Nigh](https://soylentnews.org/article.pl?sid=25/01/27/1659214&from=rss)
* [2025-01-28, 19:19:15](https://lobste.rs/s/4kvugz/sunsetting_cursed_terminal_emulation) - [Sunsetting Cursed Terminal Emulation](https://arcan-fe.com/2025/01/27/sunsetting-cursed-terminal-emulation/)
* [2025-01-28, 18:31:00](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss) - [The Invalid 68030 Instruction That Accidentally Allowed the Mac Classic II to Successfully Boot Up](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss)
* [2025-01-28, 16:33:32](https://news.ycombinator.com/item?id=42854291) - [Building a T1D smartwatch for my son from scratch](https://andrewchilds.com/posts/building-a-t1d-smartwatch-from-scratch)
* [2025-01-28, 13:45:00](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss) - [China's Second-Largest Foundry Hires Former Intel Executive to Lead Advanced Node Development](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss)
* [2025-01-28, 12:13:43](https://lobste.rs/s/noffmp/seven_things_i_know_after_25_years) - [Seven things I know after 25 years of development](https://zverok.space/blog/2025-01-27-7things-euruko.html)
* [2025-01-28, 09:01:00](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss) - [First-Ever Data Center On The Moon Set To Launch Next Month](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss)
* [2025-01-28, 04:14:00](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss) - [The Drunken Plagiarists: Working with Co-pilots](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss)
* [2025-01-27, 23:30:00](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss) - [Data Breach Hitting PowerSchool Looks Very, Very Bad](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss)
* [2025-01-27, 18:44:00](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss) - [Sleeping Pills Stop the Brain’s System for Cleaning Out Waste](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss)
* [2025-01-27, 16:25:00](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss) - [Linux Kernel 6.13 Announced](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss)
* [2025-01-27, 13:55:00](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss) - [Think It Takes 21 Days to Form a Habit? Science Says Think Again](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss)
* [2025-01-27, 09:10:00](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss) - [Medical Device Company Suddenly Stops Hospitals From Fixing Machines Themselves](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss)
* [2025-01-27, 04:22:00](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss) - [Mysterious Blobs Found Inside Cells Are Rewriting the Story of How Life Works](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss)
* [2025-01-27, 01:34:09](https://news.ycombinator.com/item?id=42836370) - [Rust’s worst feature](https://mina86.com/2025/rusts-worst-feature/)
* [2025-01-27, 00:15:29](https://news.ycombinator.com/item?id=42835808) - [Teemoji: Like Tee but with Emojis](https://github.com/willswire/teemoji)
* [2025-01-26, 23:34:00](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss) - [Florida Man Eats Diet of Butter, Cheese, Beef; Cholesterol Oozes From His Body](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss)
* [2025-01-26, 23:28:13](https://news.ycombinator.com/item?id=42835424) - [Detecting edges of images at the speed of light](https://phys.org/news/2025-01-edges-images.html)
* [2025-01-26, 22:50:39](https://news.ycombinator.com/item?id=42835054) - [Automating Git Bisect with Ephemeral Environments](https://qckfx.com/blog/automating-git-bisect-with-ephemeral-environments)
* [2025-01-26, 18:51:00](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss) - [Real Datacenter Emissions Are A Dirty Secret](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss)
* [2025-01-26, 17:57:50](https://news.ycombinator.com/item?id=42832114) - [Permission to Practise Medicine](https://blogs.bl.uk/digitisedmanuscripts/2025/01/permission-to-practise-medicine.html)
* [2025-01-26, 17:49:13](https://news.ycombinator.com/item?id=42832021) - [Goethe's \"Sorcerer's Apprentice\" – power over wisdom](https://wilderutopia.com/performance/literary/goethes-sorcerers-apprentice-power-over-wisdom/)
* [2025-01-26, 17:44:54](https://news.ycombinator.com/item?id=42831969) - [My home built pipe organ](https://www.sentex.ca/~mwandel/organ/organ.html)
* [2025-01-26, 17:41:09](https://news.ycombinator.com/item?id=42831935) - [Piled High: 17th-Century Dutch Banquet Scenes](https://publicdomainreview.org/collection/dutch-banquet-scenes/)
* [2025-01-26, 17:08:34](https://news.ycombinator.com/item?id=42831621) - [Digital Reality, Digital Shock: Growing Up at the Dawn of Cyberspace](https://www.chrbutler.com/digital-reality-digital-shock)
* [2025-01-26, 16:00:50](https://news.ycombinator.com/item?id=42830948) - [Proper decoupling capacitor practices, and why you should leave 100nF behind](https://codeinsecurity.wordpress.com/2025/01/25/proper-decoupling-practices-and-why-you-should-leave-100nf-behind/)
* [2025-01-26, 14:59:26](https://news.ycombinator.com/item?id=42830478) - [Analysis of 76,882 Product Hunt Products, from 2014 – 2021](https://components.one/posts/gamer-and-nihilist-product-hunt)
* [2025-01-26, 14:10:00](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss) - [Touchscreen Dashboards Have Finally Taken Over and Ruined Driving](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss)
* [2025-01-26, 09:25:00](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss) - [“Project Mini Rack” Wants Make Your Mini-Homelab a Reality](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss)
* [2025-01-26, 04:38:00](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss) - [Anthropic Chief Says AI Could Surpass “Almost All Humans at Almost Everything” Shortly After 2027](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss)
