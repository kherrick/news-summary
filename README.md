# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Innovation

* [Record-Setting Dark Matter Detector Comes Up Empty -- and That&apos;s Good News](https://science.slashdot.org/story/25/07/08/2255240/record-setting-dark-matter-detector-comes-up-empty----and-thats-good-news?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The latest results from a cutting-edge dark matter detector offer implications for particle physics, even in their lack of discoveries. [Comments](https://science.slashdot.org/story/25/07/08/2255240/record-setting-dark-matter-detector-comes-up-empty----and-thats-good-news?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [4.6B Years On, the Sun Is Having a Moment](https://www.newyorker.com/news/annals-of-a-warming-planet/46-billion-years-on-the-sun-is-having-a-moment) - A reflective look at our relationship with the Sun amidst climate challenges. [Comments](https://news.ycombinator.com/item?id=44509254).

* [Peter Jackson Backs Long Shot De-Extinction Plan, Starring New Zealand&apos;s Lost Moa](https://science.slashdot.org/story/25/07/08/2232217/peter-jackson-backs-long-shot-de-extinction-plan-starring-new-zealands-lost-moa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The visionary filmmaker steps into the scientific realm by supporting an ambitious project to bring back the extinct moa. [Comments](https://science.slashdot.org/story/25/07/08/2232217/peter-jackson-backs-long-shot-de-extinction-plan-starring-new-zealands-lost-moa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Tech and Software Development

* [Just say no to broken JSON](https://lemire.me/blog/2025/07/04/just-say-no-to-broken-json/) - An exploration into the common pitfalls of working with malformed JSON. [Comments](https://lobste.rs/s/nby00p/just_say_no_broken_json).

* [IKEA ditches Zigbee for Thread going all in on Matter smart homes](https://www.theverge.com/smart-home/701697/ikea-matter-thread-new-products-new-smart-home-strategy) - IKEA repositions its smart home technology to embrace the Thread protocol and Matter standard. [Comments](https://news.ycombinator.com/item?id=44507971).

* [Supabase MCP can leak your entire SQL database](https://www.generalanalysis.com/blog/supabase-mcp-blog) - Highlighting a significant security vulnerability in Supabase MCP. [Comments](https://news.ycombinator.com/item?id=44502318).

* [eSIM security](https://security-explorations.com/esim-security.html) - An analysis of the growing security challenges posed by eSIM technology. [Comments](https://news.ycombinator.com/item?id=44507830).

## Privacy and Security

* [Helm local code execution via a malicious chart](https://github.com/helm/helm/security/advisories/GHSA-557j-xg8c-q2mm) - A newly discovered exploit in Helm highlighting local code execution risks. [Comments](https://news.ycombinator.com/item?id=44506696).

* [Breaking Git with a carriage return and cloning RCE](https://dgl.cx/2025/07/git-clone-submodule-cve-2025-48384) - Details on the implications of CVE-2025-48384, a Git security flaw. [Comments](https://news.ycombinator.com/item?id=44502330).

## Unique Historical and Cultural Insights

* [Frame of preference – A history of Mac settings, 1984–2004](https://aresluna.org/frame-of-preference/) - A nostalgic exploration of Mac's settings evolution over two decades. [Comments](https://lobste.rs/s/vwlbig/frame_preference_history_mac_settings).

* [Where can I see Hokusai&apos;s Great Wave today?](https://greatwavetoday.com/) - Insights into the iconic artwork's presence and preservation. [Comments](https://news.ycombinator.com/item?id=44506117).

## Environmental and Societal Developments

* [Chinese Satellites Complete First High-Altitude Rendezvous For Possible Groundbreaking Refueling](https://tech.slashdot.org/story/25/07/08/2239218/chinese-satellites-complete-first-high-altitude-rendezvous-for-possible-groundbreaking-refueling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A technical milestone in satellite technology that opens doors to in-space refueling. [Comments](https://tech.slashdot.org/story/25/07/08/2239218/chinese-satellites-complete-first-high-altitude-rendezvous-for-possible-groundbreaking-refueling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [The Military Might Finally Win the Right To Repair](https://yro.slashdot.org/story/25/07/08/226213/the-military-might-finally-win-the-right-to-repair?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examining the push for equipment repair rights in military contexts. [Comments](https://yro.slashdot.org/story/25/07/08/226213/the-military-might-finally-win-the-right-to-repair?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

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

* [2025-07-09, 13:00:00](https://science.slashdot.org/story/25/07/08/2255240/record-setting-dark-matter-detector-comes-up-empty----and-thats-good-news?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Record-Setting Dark Matter Detector Comes Up Empty -- and That&apos;s Good News](https://science.slashdot.org/story/25/07/08/2255240/record-setting-dark-matter-detector-comes-up-empty----and-thats-good-news?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 12:31:56](https://news.ycombinator.com/item?id=44509254) - [4.6B Years On, the Sun Is Having a Moment](https://www.newyorker.com/news/annals-of-a-warming-planet/46-billion-years-on-the-sun-is-having-a-moment)
* [2025-07-09, 12:04:45](https://lobste.rs/s/nby00p/just_say_no_broken_json) - [Just say no to broken JSON](https://lemire.me/blog/2025/07/04/just-say-no-to-broken-json/)
* [2025-07-09, 11:52:29](https://news.ycombinator.com/item?id=44508866) - [Using MPC for Anonymous and Private DNA Analysis](https://vishakh.blog/2025/07/08/using-mpc-for-anonymous-and-private-dna-analysis/)
* [2025-07-09, 11:49:21](https://news.ycombinator.com/item?id=44508837) - [Million Times Million](https://susam.net/million-times-million.html)
* [2025-07-09, 11:29:05](https://lobste.rs/s/cga7nb/oregon_programming_languages_summer) - [Oregon Programming Languages Summer School (OPLSS) 2025: Types, Logic, and Formal Methods](https://www.cs.uoregon.edu/research/summerschool/summer25/topics.php)
* [2025-07-09, 10:13:28](https://lobste.rs/s/1tzmmj/client_side_epub_generation) - [Client-side epub generation](https://little.webby.press/)
* [2025-07-09, 10:00:00](https://hardware.slashdot.org/story/25/07/08/220238/uk-police-dangle-102-million-to-digitize-its-vhs-tape-archives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Police Dangle $102 Million To Digitize Its VHS Tape Archives](https://hardware.slashdot.org/story/25/07/08/220238/uk-police-dangle-102-million-to-digitize-its-vhs-tape-archives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 09:42:17](https://news.ycombinator.com/item?id=44507971) - [IKEA ditches Zigbee for Thread going all in on Matter smart homes](https://www.theverge.com/smart-home/701697/ikea-matter-thread-new-products-new-smart-home-strategy)
* [2025-07-09, 09:18:06](https://news.ycombinator.com/item?id=44507854) - [Astro is a return to the fundamentals of the web](https://websmith.studio/blog/astro-is-a-developers-dream/)
* [2025-07-09, 09:18:01](https://lobste.rs/s/v1jkvd/infinite_mac_construction_set) - [Infinite Mac Construction Set](https://blog.persistent.info/2025/07/infinite-mac-embedding.html)
* [2025-07-09, 09:13:10](https://news.ycombinator.com/item?id=44507830) - [ESIM Security](https://security-explorations.com/esim-security.html)
* [2025-07-09, 09:10:03](https://lobste.rs/s/mpvwna/esim_security) - [eSIM security](https://security-explorations.com/esim-security.html)
* [2025-07-09, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/07/2242255&amp;from=rss) - [Stop Killing Games Finally Reaches One Million Signature Milestone, but There&apos;s a Pretty Big Catch](https://soylentnews.org/article.pl?sid=25/07/07/2242255&amp;from=rss)
* [2025-07-09, 08:20:49](https://lobste.rs/s/baio5y/tree_borrows_paper_is_finally_published) - [The Tree Borrows paper is finally published](https://www.ralfj.de/blog/2025/07/07/tree-borrows-paper.html)
* [2025-07-09, 08:16:47](https://lobste.rs/s/1riirw/supabase_mcp_can_leak_your_entire_sql) - [Supabase MCP can leak your entire SQL database](https://www.generalanalysis.com/blog/supabase-mcp-blog)
* [2025-07-09, 07:38:29](https://news.ycombinator.com/item?id=44507244) - [Is the doc bot docs, or not?](https://www.robinsloan.com/lab/what-are-we-even-doing-here/)
* [2025-07-09, 07:29:52](https://news.ycombinator.com/item?id=44507200) - [Bug Stories](https://500mile.email/)
* [2025-07-09, 07:27:51](https://lobste.rs/s/vwlbig/frame_preference_history_mac_settings) - [Frame of preference – A history of Mac settings, 1984–2004](https://aresluna.org/frame-of-preference/)
* [2025-07-09, 07:24:13](https://news.ycombinator.com/item?id=44507166) - [SUSE launches new European digital sovereignty service to meet surging demand](https://www.zdnet.com/article/suse-launches-new-european-digital-sovereignty-support-service-to-meet-surging-demand/)
* [2025-07-09, 07:07:44](https://news.ycombinator.com/item?id=44507084) - [Show HN: I rewrote an outdated React Native map clustering library](https://github.com/suwi-lanji/rn-maps-clustering)
* [2025-07-09, 07:04:36](https://news.ycombinator.com/item?id=44507076) - [Most RESTful APIs aren&apos;t really RESTful](https://florian-kraemer.net//software-architecture/2025/07/07/Most-RESTful-APIs-are-not-really-RESTful.html)
* [2025-07-09, 07:00:00](https://tech.slashdot.org/story/25/07/08/2239218/chinese-satellites-complete-first-high-altitude-rendezvous-for-possible-groundbreaking-refueling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Satellites Complete First High-Altitude Rendezvous For Possible Groundbreaking Refueling](https://tech.slashdot.org/story/25/07/08/2239218/chinese-satellites-complete-first-high-altitude-rendezvous-for-possible-groundbreaking-refueling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 05:49:52](https://news.ycombinator.com/item?id=44506696) - [Helm local code execution via a malicious chart](https://github.com/helm/helm/security/advisories/GHSA-557j-xg8c-q2mm)
* [2025-07-09, 04:04:45](https://news.ycombinator.com/item?id=44506251) - [Phrase origin: Why do we \&quot;call\&quot; functions?](https://quuxplusone.github.io/blog/2025/04/04/etymology-of-call/)
* [2025-07-09, 03:53:59](https://lobste.rs/s/8ixtyt/agents_don_t_have_agency) - [Agents don&apos;t have agency](https://kconner.com/2025/07/08/agents-dont-have-agency.html)
* [2025-07-09, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/07/2215236&amp;from=rss) - [Inside the Australian Lab Growing a Biological Computer](https://soylentnews.org/article.pl?sid=25/07/07/2215236&amp;from=rss)
* [2025-07-09, 03:34:37](https://news.ycombinator.com/item?id=44506117) - [Where can I see Hokusai&apos;s Great Wave today?](https://greatwavetoday.com/)
* [2025-07-09, 03:30:00](https://science.slashdot.org/story/25/07/08/2232217/peter-jackson-backs-long-shot-de-extinction-plan-starring-new-zealands-lost-moa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Peter Jackson Backs Long Shot De-Extinction Plan, Starring New Zealand&apos;s Lost Moa](https://science.slashdot.org/story/25/07/08/2232217/peter-jackson-backs-long-shot-de-extinction-plan-starring-new-zealands-lost-moa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 02:55:35](https://lobste.rs/s/zjlygh/phrase_origin_why_do_we_call_functions) - [Phrase origin: Why do we “call” functions?](https://quuxplusone.github.io/blog/2025/04/04/etymology-of-call/)
* [2025-07-09, 02:37:28](https://news.ycombinator.com/item?id=44505876) - [RapidRAW: A non-destructive and GPU-accelerated RAW image editor](https://github.com/CyberTimon/RapidRAW)
* [2025-07-09, 01:45:55](https://news.ycombinator.com/item?id=44505610) - [Libpostal: C library for parsing/normalizing street addresses around the world](https://github.com/openvenues/libpostal)
* [2025-07-09, 01:25:00](https://science.slashdot.org/story/25/07/08/2220223/hybrid-model-reveals-people-act-less-rationally-in-complex-games-more-predictably-in-simple-ones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hybrid Model Reveals People Act Less Rationally In Complex Games, More Predictably In Simple Ones](https://science.slashdot.org/story/25/07/08/2220223/hybrid-model-reveals-people-act-less-rationally-in-complex-games-more-predictably-in-simple-ones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 01:11:12](https://lobste.rs/s/tp5eoc/hippocratic_license) - [Hippocratic License](https://firstdonoharm.dev/version/3/0/cl-eco-media-my-tal-xuar.txt)
* [2025-07-09, 00:55:00](https://lobste.rs/s/xjttka/toml_v0_9) - [toml v0.9](https://epage.github.io/blog/2025/07/toml-09/)
* [2025-07-09, 00:45:00](https://yro.slashdot.org/story/25/07/08/226213/the-military-might-finally-win-the-right-to-repair?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Military Might Finally Win the Right To Repair](https://yro.slashdot.org/story/25/07/08/226213/the-military-might-finally-win-the-right-to-repair?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 00:14:19](https://news.ycombinator.com/item?id=44505171) - [Frame of preference A history of Mac settings, 1984–2004](https://aresluna.org/frame-of-preference/)
* [2025-07-09, 00:02:00](https://tech.slashdot.org/story/25/07/08/2153243/gmails-new-manage-subscriptions-tool-will-help-declutter-your-inbox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gmail&apos;s New &apos;Manage Subscriptions&apos; Tool Will Help Declutter Your Inbox](https://tech.slashdot.org/story/25/07/08/2153243/gmails-new-manage-subscriptions-tool-will-help-declutter-your-inbox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 23:20:00](https://meta.slashdot.org/story/25/07/08/2147252/meta-invests-35-billion-in-worlds-largest-eye-wear-maker-in-ai-glasses-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Invests $3.5 Billion in World&apos;s Largest Eye-Wear Maker in AI Glasses Push](https://meta.slashdot.org/story/25/07/08/2147252/meta-invests-35-billion-in-worlds-largest-eye-wear-maker-in-ai-glasses-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 23:02:00](https://soylentnews.org/article.pl?sid=25/07/07/0143225&amp;from=rss) - [A New Diabetes Treatment Could Free People From Insulin Injections](https://soylentnews.org/article.pl?sid=25/07/07/0143225&amp;from=rss)
* [2025-07-08, 22:42:39](https://news.ycombinator.com/item?id=44504699) - [US Court nullifies FTC requirement for click-to-cancel](https://arstechnica.com/tech-policy/2025/07/us-court-cancels-ftc-rule-that-would-have-made-canceling-subscriptions-easier/)
* [2025-07-08, 22:40:00](https://apple.slashdot.org/story/25/07/08/2124250/apple-taps-sabih-khan-as-new-coo-as-jeff-williams-plans-retirement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Taps Sabih Khan As New COO As Jeff Williams Plans Retirement](https://apple.slashdot.org/story/25/07/08/2124250/apple-taps-sabih-khan-as-new-coo-as-jeff-williams-plans-retirement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 22:20:00](https://slashdot.org/story/25/07/08/2211200/intel-cuts-over-500-jobs-in-oregon-as-part-of-layoff-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Cuts Over 500 Jobs in Oregon as Part of Layoff Plan](https://slashdot.org/story/25/07/08/2211200/intel-cuts-over-500-jobs-in-oregon-as-part-of-layoff-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 22:15:16](https://lobste.rs/s/gnah5t/aoc_2021_day_1_using_ivy_5m00) - [AoC 2021 Day 1 using Ivy (5m00)](https://www.youtube.com/watch?v=ek1yjc9sSag)
* [2025-07-08, 22:02:00](https://linux.slashdot.org/story/25/07/08/2122224/linux-foundation-adopts-a2a-protocol-to-help-solve-one-of-ais-most-pressing-challenges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Foundation Adopts A2A Protocol To Help Solve One of AI&apos;s Most Pressing Challenges](https://linux.slashdot.org/story/25/07/08/2122224/linux-foundation-adopts-a2a-protocol-to-help-solve-one-of-ais-most-pressing-challenges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 21:32:13](https://lobste.rs/s/1wv8nd/c3_0_7_3_small_improvements) - [C3 0.7.3 - Small improvements](https://c3-lang.org/blog/c3-0-7-3-small-improvements/)
* [2025-07-08, 21:25:00](https://news.slashdot.org/story/25/07/08/2013257/un-passes-climate-change-motion-after-marshall-islands-drops-fossil-fuels-focus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UN Passes Climate Change Motion After Marshall Islands Drops Fossil Fuels Focus](https://news.slashdot.org/story/25/07/08/2013257/un-passes-climate-change-motion-after-marshall-islands-drops-fossil-fuels-focus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 21:14:37](https://lobste.rs/s/os54bi/systemd_has_been_complete_utter) - [systemd has been a complete, utter, unmitigated success](https://blog.tjll.net/the-systemd-revolution-has-been-a-success/)
* [2025-07-08, 20:45:00](https://it.slashdot.org/story/25/07/08/2021225/activision-took-down-call-of-duty-game-after-pc-players-hacked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Activision Took Down Call of Duty Game After PC Players Hacked](https://it.slashdot.org/story/25/07/08/2021225/activision-took-down-call-of-duty-game-after-pc-players-hacked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 20:02:00](https://slashdot.org/story/25/07/08/202255/amazon-asks-corporate-workers-to-volunteer-help-with-grocery-deliveries-as-prime-day-frenzy-approaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Asks Corporate Workers To &apos;Volunteer&apos; Help With Grocery Deliveries as Prime Day Frenzy Approaches](https://slashdot.org/story/25/07/08/202255/amazon-asks-corporate-workers-to-volunteer-help-with-grocery-deliveries-as-prime-day-frenzy-approaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 19:27:00](https://slashdot.org/story/25/07/08/1927222/music-pioneer-napster-tries-again-this-time-with-ai-chatbots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Music Pioneer Napster Tries Again, This Time With AI Chatbots](https://slashdot.org/story/25/07/08/1927222/music-pioneer-napster-tries-again-this-time-with-ai-chatbots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 19:16:08](https://lobste.rs/s/awmqgc/cve_2025_48384_breaking_git_with_carriage) - [CVE-2025-48384: Breaking git with a carriage return and cloning RCE](https://dgl.cx/2025/07/git-clone-submodule-cve-2025-48384)
* [2025-07-08, 19:06:11](https://lobste.rs/s/s468u9/ibm_power11_hits_market_this_month) - [IBM Power11 hits the market this month](https://www.talospace.com/2025/07/power11-hits-market-this-month.html)
* [2025-07-08, 18:11:00](https://soylentnews.org/article.pl?sid=25/07/07/0139229&amp;from=rss) - [Why Don’t Bats Get Cancer? Researchers Discover Protection From Genes and Strong Immune Systems](https://soylentnews.org/article.pl?sid=25/07/07/0139229&amp;from=rss)
* [2025-07-08, 17:48:29](https://news.ycombinator.com/item?id=44502330) - [Breaking Git with a carriage return and cloning RCE](https://dgl.cx/2025/07/git-clone-submodule-cve-2025-48384)
* [2025-07-08, 17:46:55](https://news.ycombinator.com/item?id=44502318) - [Supabase MCP can leak your entire SQL database](https://www.generalanalysis.com/blog/supabase-mcp-blog)
* [2025-07-08, 17:44:35](https://news.ycombinator.com/item?id=44502298) - [Radium Music Editor](http://users.notam02.no/~kjetism/radium/)
* [2025-07-08, 17:20:10](https://lobste.rs/s/l6hadj/multiple_vulnerabilities_fixed_git) - [Multiple vulnerabilities fixed in Git](https://www.openwall.com/lists/oss-security/2025/07/08/4)
* [2025-07-08, 16:37:55](https://lobste.rs/s/sd5w2g/announcing_foks_federated_open_key) - [Announcing FOKS, the Federated Open Key Service](https://blog.foks.pub/posts/introducing/)
* [2025-07-08, 16:13:40](https://news.ycombinator.com/item?id=44501413) - [Smollm3: Smol, multilingual, long-context reasoner LLM](https://huggingface.co/blog/smollm3)
* [2025-07-08, 15:37:56](https://news.ycombinator.com/item?id=44501034) - [Zorin OS](https://zorin.com/os/)
* [2025-07-08, 14:39:45](https://lobste.rs/s/wazjzq/bitchat_is_decentralized_peer_peer) - [bitchat is a decentralized, peer-to-peer messaging application that operates over Bluetooth Low Energy (BLE) mesh networks](https://github.com/jackjackbits/bitchat/blob/main/WHITEPAPER.md)
* [2025-07-08, 14:21:56](https://lobste.rs/s/zlm4fp/how_i_build_software_quickly) - [How I build software quickly](https://evanhahn.com/how-i-build-software-quickly/)
* [2025-07-08, 13:30:00](https://soylentnews.org/article.pl?sid=25/07/06/2318236&amp;from=rss) - [The European Commission&apos;s Call for Technical Advisors: Save Privacy](https://soylentnews.org/article.pl?sid=25/07/06/2318236&amp;from=rss)
* [2025-07-08, 10:40:03](https://news.ycombinator.com/item?id=44498766) - [Why LLMs Can&apos;t Write Q/Kdb+: Writing Code Right-to-Left](https://medium.com/@gabiteodoru/why-llms-cant-write-q-kdb-writing-code-right-to-left-ea6df68af443)
* [2025-07-08, 10:14:02](https://lobste.rs/s/9vvhzr/two_weeks_wayback) - [Two weeks of wayback](https://ariadne.space/2025/07/07/two-weeks-of-wayback.html)
* [2025-07-08, 09:33:55](https://lobste.rs/s/s8kjrr/derive_clone_is_broken) - [#[derive(Clone)] is broken](https://rgbcu.be/blog/derive-broken/)
* [2025-07-08, 08:45:00](https://soylentnews.org/article.pl?sid=25/07/06/2238227&amp;from=rss) - [First Leisure Swim for Parisians Into the Seine in More Than a Century](https://soylentnews.org/article.pl?sid=25/07/06/2238227&amp;from=rss)
* [2025-07-08, 08:32:45](https://lobste.rs/s/cyxkzl/webassembly_yes_for_what) - [WebAssembly: Yes, but for What?](https://queue.acm.org/detail.cfm?id=3746171)
* [2025-07-08, 04:31:00](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss) - [UK Eyes New Laws Over Cable Sabotage](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss)
* [2025-07-07, 23:45:00](https://soylentnews.org/article.pl?sid=25/07/06/1317252&amp;from=rss) - [Sniffnet - Comfortably Monitor Your Internet Traffic](https://soylentnews.org/article.pl?sid=25/07/06/1317252&amp;from=rss)
* [2025-07-07, 22:58:45](https://news.ycombinator.com/item?id=44495428) - [Bootstrapping a side project into a profitable seven-figure business](https://projectionlab.com/blog/we-reached-1m-arr-with-zero-funding)
* [2025-07-07, 20:48:55](https://lobste.rs/s/yctrpk/adding_feature_because_chatgpt) - [Adding a feature because ChatGPT incorrectly thinks it exists](https://www.holovaty.com/writing/chatgpt-fake-feature/)
* [2025-07-07, 18:58:00](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss) - [See How the Herpes Virus Reshapes Our Cells’ DNA in Just Eight Hours](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss)
* [2025-07-07, 18:16:36](https://news.ycombinator.com/item?id=44493174) - [Serving a half billion requests per day with Rust and CGI](https://jacob.gold/posts/serving-half-billion-requests-with-rust-cgi/)
* [2025-07-07, 14:14:00](https://soylentnews.org/article.pl?sid=25/07/06/136235&amp;from=rss) - [The Terrifying Truth About Why Tesla&apos;s Cars Keep Crashing](https://soylentnews.org/article.pl?sid=25/07/06/136235&amp;from=rss)
* [2025-07-07, 11:52:10](https://news.ycombinator.com/item?id=44489359) - [7-Zip for Windows can now use more than 64 CPU threads for compression](https://www.7-zip.org/history.txt)
* [2025-07-07, 10:33:14](https://news.ycombinator.com/item?id=44488742) - [I&apos;m Building LLM for Satellite Data EarthGPT.app](https://www.earthgpt.app/)
* [2025-07-07, 09:31:00](https://soylentnews.org/article.pl?sid=25/07/06/131253&amp;from=rss) - [How to Fully Incapacitate Google Tag Manager and Why You Should (2022)](https://soylentnews.org/article.pl?sid=25/07/06/131253&amp;from=rss)
* [2025-07-07, 04:46:00](https://soylentnews.org/article.pl?sid=25/07/06/1250244&amp;from=rss) - [CISPE Warns EU Against Over-Regulation of Water](https://soylentnews.org/article.pl?sid=25/07/06/1250244&amp;from=rss)
* [2025-07-07, 00:00:00](https://soylentnews.org/article.pl?sid=25/07/06/1241242&amp;from=rss) - [Verizon Denies Legitimacy of 61 Million Records for Sale](https://soylentnews.org/article.pl?sid=25/07/06/1241242&amp;from=rss)
* [2025-07-06, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/05/1910216&amp;from=rss) - [Inside Elon Musk&apos;s Stellar Year at the Texas Capitol](https://soylentnews.org/article.pl?sid=25/07/05/1910216&amp;from=rss)
* [2025-07-06, 14:30:00](https://soylentnews.org/article.pl?sid=25/07/05/1341208&amp;from=rss) - [Bezos-Funded Satellite Tracking Methane Emissions Loses Power in Space](https://soylentnews.org/article.pl?sid=25/07/05/1341208&amp;from=rss)
* [2025-07-06, 09:58:26](https://news.ycombinator.com/item?id=44479302) - [Ruby 3.4 frozen string literals: What Rails developers need to know](https://www.prateekcodes.dev/ruby-34-frozen-string-literals-rails-upgrade-guide/)
* [2025-07-06, 09:48:00](https://soylentnews.org/article.pl?sid=25/07/05/1339218&amp;from=rss) - [Ancient DNA Reveals Make-Up of Roman Empire&apos;s Favourite Sauce](https://soylentnews.org/article.pl?sid=25/07/05/1339218&amp;from=rss)
* [2025-07-06, 05:45:00](https://soylentnews.org/article.pl?sid=25/07/04/2251218&amp;from=rss) - [Where Does Time Actually Come From?](https://soylentnews.org/article.pl?sid=25/07/04/2251218&amp;from=rss)
* [2025-07-06, 01:30:00](https://soylentnews.org/article.pl?sid=25/07/04/2154255&amp;from=rss) - [On July 7 Google Gemini Will Have Access to Your Android Apps, Even If You Turned It Off](https://soylentnews.org/article.pl?sid=25/07/04/2154255&amp;from=rss)
* [2025-07-05, 21:12:00](https://soylentnews.org/article.pl?sid=25/07/03/1156244&amp;from=rss) - [MASH - and the Loretta Swit Obituary](https://soylentnews.org/article.pl?sid=25/07/03/1156244&amp;from=rss)
* [2025-07-05, 18:37:00](https://news.ycombinator.com/item?id=44474620) - [Proposal: GUI-first, text-based mechanical CAD inspired by software engineering](https://news.ycombinator.com/item?id=44474620)
* [2025-07-05, 16:26:00](https://soylentnews.org/article.pl?sid=25/07/03/1127224&amp;from=rss) - [Release The Fish](https://soylentnews.org/article.pl?sid=25/07/03/1127224&amp;from=rss)
* [2025-07-05, 11:43:00](https://soylentnews.org/article.pl?sid=25/07/03/1124254&amp;from=rss) - [Candidatus Sukunaarchaeum Mirabile is a Novel Archaeon With an Unprecedentedly Small Genome](https://soylentnews.org/article.pl?sid=25/07/03/1124254&amp;from=rss)
* [2025-07-05, 07:00:00](https://soylentnews.org/article.pl?sid=25/07/03/0247205&amp;from=rss) - [Canada Orders Chinese CCTV Biz Hikvision To Quit The Country](https://soylentnews.org/article.pl?sid=25/07/03/0247205&amp;from=rss)
* [2025-07-05, 02:15:00](https://soylentnews.org/article.pl?sid=25/07/03/0230247&amp;from=rss) - [North Koreans Posing As Remote Workers stole $1M ](https://soylentnews.org/article.pl?sid=25/07/03/0230247&amp;from=rss)
