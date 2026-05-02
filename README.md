# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Emerging Technologies

* [The $19B "Nuclear AI" Energy Startup That Couldn't Sign a Single Client](https://hardware.slashdot.org/story/26/05/02/1828217/the-19b-nuclear-ai-energy-startup-that-couldnt-sign-a-single-client?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - This article explores the pitfalls of an ambitious 'Nuclear AI' energy startup that, despite a hefty valuation, failed to secure any clients.

* [An Amateur Just Solved a 60-Year-Old Math Problem - by Asking AI](https://science.slashdot.org/story/26/05/02/0433231/an-amateur-just-solved-a-60-year-old-math-problem---by-asking-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The story of how AI helped solve a long-standing mathematical conundrum by enabling an amateur to crack the problem.

* [Pentagon Reaches Agreements With Top AI Companies, But Not Anthropic](https://yro.slashdot.org/story/26/05/01/1913249/pentagon-reaches-agreements-with-top-ai-companies-but-not-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An intriguing look into the Pentagon's collaborations with top AI companies while leaving some out of the deal.

* [AI Agent Designed To Speed Up Company's Coding Wipes Entire Database In 9 Seconds](https://developers.slashdot.org/story/26/05/01/1924222/ai-agent-designed-to-speed-up-companys-coding-wipes-entire-database-in-9-seconds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A cautionary tale of an AI coding tool causing unexpected damage in its attempt to optimize processes.

## Technology and Science Breakthroughs

* [New Lithium-Plasma Engine Passes Key Mars Propulsion Test](https://science.slashdot.org/story/26/05/02/0017222/new-lithium-plasma-engine-passes-key-mars-propulsion-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A groundbreaking development in space technology as a lithium-powered plasma engine proves its potential for Mars exploration.

* [Retina Scan for Diabetes Could Also Reduce Deaths During Pregnancy in Developing Countries](https://science.slashdot.org/story/26/04/30/1548214/retina-scan-for-diabetes-could-also-reduce-deaths-during-pregnancy-in-developing-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Innovations in medical tech unveil a new retina scan for diagnosing diabetes, potentially reducing maternal mortality in developing regions.

* [Electric Field Tunes Vibrations to Ease Heat Transfer](https://soylentnews.org/article.pl?sid=26/04/26/1727213&amp;from=rss) - Scientists explore how electric fields can manipulate vibrations to enhance heat transfer capabilities.

* [Raccoons Solve Puzzles for the Fun of It](https://soylentnews.org/article.pl?sid=26/04/26/1758257&amp;from=rss) - Insight into raccoons' cognitive behavior and their natural inclination to solve puzzles.

## Internet and Digital Ecosystems

* [Using Drones for Cloud-Seeding Can Trigger Rain, Company Claims](https://news.slashdot.org/story/26/05/02/1556244/using-drones-for-cloud-seeding-can-trigger-rain-company-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Unveiling a company's innovative approach to using drones for rain-making through cloud-seeding technology.

* [Firefox Has Quietly Integrated Brave's Adblock Engine](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss) - Mozilla Firefox makes a stealthy upgrade by adding Brave browser's advanced ad-blocking engine.

* [ICANN Opens Applications For New Generic Top-Level Domains](https://tech.slashdot.org/story/26/05/01/1838209/icann-opens-applications-for-new-generic-top-level-domains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An update on ICANN's decision to allow applications for new top-level domains, redefining internet space.

## Society and Policy

* [NHS Goes To War Against Open Source](https://shkspr.mobi/blog/2026/05/nhs-goes-to-war-against-open-source/) - A look at the National Health Service's controversial stance against open-source technologies.

* [California to begin ticketing driverless cars that violate traffic laws](https://www.bbc.com/news/articles/clypjx3rg2go) - California implements a measure to regulate the traffic behavior of driverless cars through ticketing.

* [Colorado's Anti-Repair Bill is Dead](https://soylentnews.org/article.pl?sid=26/04/30/1227212&amp;from=rss) - Colorado residents rejoice as a proposed anti-repair legislation is halted.

* [America's Expanding Domestic Surveillance](https://www.wsj.com/articles/americas-expanding-domestic-surveillance-08b73187) - An exploration of the increasing scope of domestic surveillance in the United States.

## Gaming and Entertainment

* [NetHack 5.0.0](https://nethack.org/v500/release.html) — A major release for NetHack, the classic open-source dungeon crawl game.

* [Microsoft's Xbox Mode Is Now Available For All Windows 11 PCs](https://games.slashdot.org/story/26/05/01/1936256/microsofts-xbox-mode-is-now-available-for-all-windows-11-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Windows 11 users can now enjoy the new Xbox gaming mode for an optimized gaming experience.

* [Marvel, DC, Game Publishers Launch Rival Events Saturday for Free Giveaways](https://news.slashdot.org/story/26/05/02/0257206/marvel-dc-game-publishers-launch-rival-events-saturday-for-free-giveaways?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Major players in entertainment and gaming announce free giveaway events for fans.

## Environmental and Health Challenges

* [Antarctica Just Saw the Fastest Glacier Collapse Ever Recorded](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss) - Shocking data details an unprecedented collapse of a glacier in Antarctica, emphasizing the urgency of addressing climate change.

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

* [2026-05-02, 21:34:00](https://hardware.slashdot.org/story/26/05/02/1828217/the-19b-nuclear-ai-energy-startup-that-couldnt-sign-a-single-client?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The $19B \&quot;Nuclear AI\&quot; Energy Startup That Couldn&apos;t Sign a Single Client](https://hardware.slashdot.org/story/26/05/02/1828217/the-19b-nuclear-ai-energy-startup-that-couldnt-sign-a-single-client?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 21:25:05](https://news.ycombinator.com/item?id=47990708) - [Show HN: State of the Art of Coding Models, According to Hacker News Commenters](https://hnup.date/hn-sota)
* [2026-05-02, 21:21:27](https://news.ycombinator.com/item?id=47990675) - [The agent harness belongs outside the sandbox](https://www.mendral.com/blog/agent-harness-belongs-outside-sandbox)
* [2026-05-02, 21:14:29](https://news.ycombinator.com/item?id=47990606) - [Six Years Perfecting Maps on WatchOS](https://www.david-smith.org/blog/2026/04/29/maps-on-watchos/)
* [2026-05-02, 21:04:50](https://lobste.rs/s/5knn5x/onionlink_2_5k_lines_c_connect_v3_onion) - [onionlink: 2.5k lines of C++ to connect to v3 onion services, using only libsodium and mbedTLS](https://github.com/h2337/onionlink)
* [2026-05-02, 20:46:30](https://news.ycombinator.com/item?id=47990318) - [This Month in Ladybird - April 2026](https://ladybird.org/newsletter/2026-04-30/)
* [2026-05-02, 20:42:20](https://news.ycombinator.com/item?id=47990284) - [Neanderthals ran &apos;fat factories&apos; 125,000 years ago](https://www.universiteitleiden.nl/en/news/2025/07/neanderthals-ran-fat-factories-125000-years-ago)
* [2026-05-02, 20:34:00](https://news.slashdot.org/story/26/05/02/1556244/using-drones-for-cloud-seeding-can-trigger-rain-company-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Using Drones for Cloud-Seeding Can Trigger Rain, Company Claims](https://news.slashdot.org/story/26/05/02/1556244/using-drones-for-cloud-seeding-can-trigger-rain-company-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 19:57:26](https://news.ycombinator.com/item?id=47989883) - [VS Code inserting &apos;Co-Authored-by Copilot&apos; into commits regardless of usage](https://github.com/microsoft/vscode/pull/310226)
* [2026-05-02, 19:49:07](https://lobste.rs/s/vk8as6/fabrica_terminal_based_minimal_coding) - [fabrica - A terminal-based minimal coding agent harness](https://github.com/Endi1/fabrica)
* [2026-05-02, 19:42:00](https://soylentnews.org/article.pl?sid=26/05/01/0645211&amp;from=rss) - [Drone Pilot Makes US Rescind No-Fly Zones Around Unmarked, Moving ICE Vehicles](https://soylentnews.org/article.pl?sid=26/05/01/0645211&amp;from=rss)
* [2026-05-02, 19:34:00](https://it.slashdot.org/story/26/05/02/0338227/what-if-tech-company-layoffs-arent-all-about-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What if Tech Company Layoffs Aren&apos;t All About AI?](https://it.slashdot.org/story/26/05/02/0338227/what-if-tech-company-layoffs-arent-all-about-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 18:41:09](https://lobste.rs/s/imuls4/age_fast_food) - [The age of fast food](https://www.abareplace.com/blog/ai_fastfood/)
* [2026-05-02, 18:34:00](https://science.slashdot.org/story/26/05/02/0433231/an-amateur-just-solved-a-60-year-old-math-problem---by-asking-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An Amateur Just Solved a 60-Year-Old Math Problem - by Asking AI](https://science.slashdot.org/story/26/05/02/0433231/an-amateur-just-solved-a-60-year-old-math-problem---by-asking-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 18:13:57](https://lobste.rs/s/qp0vi5/nhs_goes_war_against_open_source) - [NHS Goes To War Against Open Source](https://shkspr.mobi/blog/2026/05/nhs-goes-to-war-against-open-source/)
* [2026-05-02, 18:03:42](https://news.ycombinator.com/item?id=47988776) - [NetHack 5.0.0](https://nethack.org/v500/release.html)
* [2026-05-02, 17:59:18](https://news.ycombinator.com/item?id=47988742) - [California to begin ticketing driverless cars that violate traffic laws](https://www.bbc.com/news/articles/clypjx3rg2go)
* [2026-05-02, 17:57:43](https://lobste.rs/s/s1yqiu/debian_adds_spf_record_debian_org) - [Debian adds an SPF record to debian.org](https://lists.debian.org/debian-devel-announce/2026/04/msg00010.html)
* [2026-05-02, 17:40:55](https://news.ycombinator.com/item?id=47988592) - [Do_not_track](https://donottrack.sh/)
* [2026-05-02, 17:34:00](https://tech.slashdot.org/story/26/05/02/0552238/costumed-crowd-speedruns-scientology-building-for-social-media-trend?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Costumed Crowd &apos;Speedruns&apos; Scientology Building For Social Media Trend](https://tech.slashdot.org/story/26/05/02/0552238/costumed-crowd-speedruns-scientology-building-for-social-media-trend?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 17:32:29](https://news.ycombinator.com/item?id=47988504) - [Dav2d](https://code.videolan.org/videolan/dav2d)
* [2026-05-02, 17:32:07](https://news.ycombinator.com/item?id=47988501) - [Flue is a TypeScript framework for building the next generation of agents](https://flueframework.com/)
* [2026-05-02, 17:26:59](https://lobste.rs/s/mi9xrw/pep_661_sentinel_values_accepted_5_years) - [PEP 661 – Sentinel Values, accepted 5 years later](https://peps.python.org/pep-0661/)
* [2026-05-02, 17:25:54](https://news.ycombinator.com/item?id=47988441) - [Welcome to Hell Developer](https://noahclements.com/Wahoo-Bolt-Hidden-Debug-Mode/)
* [2026-05-02, 17:10:18](https://news.ycombinator.com/item?id=47988261) - [Roblox shares plummet 18% as child safety measures weigh on bookings](https://www.cnbc.com/2026/05/01/roblox-rblx-stock-child-safety-earnings.html)
* [2026-05-02, 17:05:19](https://lobste.rs/s/ncngka/what_fun_websites_do_you_know) - [What fun websites do you know?](https://lobste.rs/s/ncngka/what_fun_websites_do_you_know)
* [2026-05-02, 16:40:29](https://news.ycombinator.com/item?id=47987931) - [Modern C++ Programming: Busato](https://github.com/federico-busato/Modern-CPP-Programming)
* [2026-05-02, 16:34:51](https://lobste.rs/s/k3delj/agentic_coding_is_burning_me_out) - [Agentic Coding is Burning Me Out](https://0xsid.com/blog/agentic-coding-fatigue)
* [2026-05-02, 16:34:00](https://science.slashdot.org/story/26/04/30/1548214/retina-scan-for-diabetes-could-also-reduce-deaths-during-pregnancy-in-developing-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Retina Scan for Diabetes Could Also Reduce Deaths During Pregnancy in Developing Countries](https://science.slashdot.org/story/26/04/30/1548214/retina-scan-for-diabetes-could-also-reduce-deaths-during-pregnancy-in-developing-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 15:38:17](https://news.ycombinator.com/item?id=47987333) - [Uber wants to turn its drivers into a sensor grid for self-driving companies](https://techcrunch.com/2026/05/01/uber-wants-to-turn-its-millions-of-drivers-into-a-sensor-grid-for-self-driving-companies/)
* [2026-05-02, 15:34:00](https://linux.slashdot.org/story/26/05/02/0625247/linux-percentage-of-steam-users-doubled-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Percentage of Steam Users Doubled in One Year](https://linux.slashdot.org/story/26/05/02/0625247/linux-percentage-of-steam-users-doubled-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 15:02:13](https://news.ycombinator.com/item?id=47987006) - [America&apos;s Expanding Domestic Surveillance](https://www.wsj.com/articles/americas-expanding-domestic-surveillance-08b73187)
* [2026-05-02, 14:56:00](https://soylentnews.org/article.pl?sid=26/05/01/0637252&amp;from=rss) - [Linux Cryptographic Code Flaw Offers Fast Route to Root](https://soylentnews.org/article.pl?sid=26/05/01/0637252&amp;from=rss)
* [2026-05-02, 14:34:00](https://news.slashdot.org/story/26/05/02/0257206/marvel-dc-game-publishers-launch-rival-events-saturday-for-free-giveaways?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Marvel, DC, Game Publishers Launch Rival Events Saturday for Free Giveaways](https://news.slashdot.org/story/26/05/02/0257206/marvel-dc-game-publishers-launch-rival-events-saturday-for-free-giveaways?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 14:17:11](https://lobste.rs/s/a0jdo0/servers_with_personality) - [Servers with Personality](https://caolan.uk/links/servers/)
* [2026-05-02, 13:15:23](https://news.ycombinator.com/item?id=47986136) - [Refusal in Language Models Is Mediated by a Single Direction](https://arxiv.org/abs/2406.11717)
* [2026-05-02, 12:59:53](https://lobste.rs/s/c2xlzf/libera_bot_llm_policy_update) - [Libera Bot/LLM policy update](https://libera.chat/news/bot-policy-update)
* [2026-05-02, 12:34:13](https://lobste.rs/s/3gnkeu/letter_from_dijkstra_on_apl_1982) - [A Letter from Dijkstra on APL(1982)](https://www.jsoftware.com/papers/Dijkstra_Letter.htm)
* [2026-05-02, 12:25:14](https://lobste.rs/s/ebqqq8/kirigami_forms_configurations) - [Kirigami forms and configurations](https://notmart.org/blog/2026/04/kirigami-forms-and-configurations/)
* [2026-05-02, 12:18:38](https://lobste.rs/s/aunywc/screw_you_realtek) - [Screw you Realtek](https://www.growse.com/2026/05/02/screw-you-realtek.html)
* [2026-05-02, 12:16:16](https://news.ycombinator.com/item?id=47985750) - [Open Design: Use Your Coding Agent as a Design Engine](https://github.com/nexu-io/open-design)
* [2026-05-02, 11:00:00](https://slashdot.org/story/26/05/02/0010242/gamestop-is-preparing-offer-for-ebay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GameStop Is Preparing Offer For eBay](https://slashdot.org/story/26/05/02/0010242/gamestop-is-preparing-offer-for-ebay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 10:42:15](https://lobste.rs/s/le8yxh/programmer_s_guide_common_lisp_1987) - [A Programmer&apos;s Guide to COMMON LISP (1987)](https://archive.org/details/a-programmers-guide-to-common-lisp)
* [2026-05-02, 10:29:49](https://lobste.rs/s/jtzbv8/protect_your_shed) - [Protect Your Shed](https://dylanbutler.dev/blog/protect-your-shed/)
* [2026-05-02, 10:23:22](https://lobste.rs/s/rz9ayu/fast16_high_precision_software_sabotage) - [fast16 | High-Precision Software Sabotage 5 Years Before Stuxnet](https://www.sentinelone.com/labs/fast16-mystery-shadowbrokers-reference-reveals-high-precision-software-sabotage-5-years-before-stuxnet/)
* [2026-05-02, 10:17:09](https://lobste.rs/s/quulrs/why_tuis_are_back) - [Why TUIs are back](https://wiki.alcidesfonseca.com/blog/why-tuis-are-back/)
* [2026-05-02, 10:07:00](https://soylentnews.org/article.pl?sid=26/04/30/1239239&amp;from=rss) - [Apple Wants to Kill Your Time Capsule, but They Run NetBSD So They Can&apos;t](https://soylentnews.org/article.pl?sid=26/04/30/1239239&amp;from=rss)
* [2026-05-02, 09:30:49](https://news.ycombinator.com/item?id=47984852) - [How fast is a macOS VM, and how small could it be?](https://eclecticlight.co/2026/05/02/how-fast-is-a-macos-vm-and-how-small-could-it-be/)
* [2026-05-02, 08:23:23](https://news.ycombinator.com/item?id=47984522) - [Why are there both TMP and TEMP environment variables? (2015)](https://devblogs.microsoft.com/oldnewthing/20150417-00/?p=44213)
* [2026-05-02, 07:00:00](https://science.slashdot.org/story/26/05/02/0017222/new-lithium-plasma-engine-passes-key-mars-propulsion-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Lithium-Plasma Engine Passes Key Mars Propulsion Test](https://science.slashdot.org/story/26/05/02/0017222/new-lithium-plasma-engine-passes-key-mars-propulsion-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 06:39:18](https://lobste.rs/s/miwd1w/i_do_not_recommend_bitwarden) - [I Do Not Recommend Bitwarden](https://マリウス.com/i-do-not-recommend-bitwarden/)
* [2026-05-02, 06:33:50](https://lobste.rs/s/gm1hcc/stackless_coroutines_for_gamedev_200) - [stackless coroutines for gamedev in ~200 lines of C++](https://vittorioromeo.com/index/blog/sfex_coroutine.html)
* [2026-05-02, 05:21:00](https://soylentnews.org/article.pl?sid=26/04/30/1235210&amp;from=rss) - [Google and Pentagon Reportedly Agree on Deal for ‘Any Lawful’ Use of AI](https://soylentnews.org/article.pl?sid=26/04/30/1235210&amp;from=rss)
* [2026-05-02, 04:49:00](https://lobste.rs/s/ixqnxw/reducing_ml_kem_768_encapsulation_key) - [Reducing ML-KEM-768 encapsulation key sizes by 24 octets](https://runxiyu.org/comp/mlkem768pack/)
* [2026-05-02, 04:38:04](https://news.ycombinator.com/item?id=47983352) - [Why does it take so long to release black fan versions?](https://www.noctua.at/en/expertise/blog/how-can-it-take-so-long-to-release-black-fan-versions)
* [2026-05-02, 03:30:00](https://news.slashdot.org/story/26/05/02/006240/amazon-stuck-with-months-of-repairs-after-drone-strikes-on-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Stuck With Months of Repairs After Drone Strikes On Data Centers](https://news.slashdot.org/story/26/05/02/006240/amazon-stuck-with-months-of-repairs-after-drone-strikes-on-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 00:38:00](https://soylentnews.org/article.pl?sid=26/04/30/1229213&amp;from=rss) - [How Linux 7.0 Broke PostgreSQL](https://soylentnews.org/article.pl?sid=26/04/30/1229213&amp;from=rss)
* [2026-05-02, 00:31:22](https://lobste.rs/s/rtnzfj/what_conferences_are_you_excited_attend) - [What Conferences are You Excited to Attend in the Next 12 Months?](https://lobste.rs/s/rtnzfj/what_conferences_are_you_excited_attend)
* [2026-05-02, 00:12:00](https://news.ycombinator.com/item?id=47981979) - [A Physics Engine with Incremental Rollback for Multiplayer Games](https://easel.games/blog/2026-rollback-physics)
* [2026-05-01, 23:00:00](https://games.slashdot.org/story/26/05/01/1936256/microsofts-xbox-mode-is-now-available-for-all-windows-11-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Xbox Mode Is Now Available For All Windows 11 PCs](https://games.slashdot.org/story/26/05/01/1936256/microsofts-xbox-mode-is-now-available-for-all-windows-11-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 22:00:00](https://developers.slashdot.org/story/26/05/01/1924222/ai-agent-designed-to-speed-up-companys-coding-wipes-entire-database-in-9-seconds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Agent Designed To Speed Up Company&apos;s Coding Wipes Entire Database In 9 Seconds](https://developers.slashdot.org/story/26/05/01/1924222/ai-agent-designed-to-speed-up-companys-coding-wipes-entire-database-in-9-seconds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 21:00:00](https://yro.slashdot.org/story/26/05/01/1913249/pentagon-reaches-agreements-with-top-ai-companies-but-not-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Reaches Agreements With Top AI Companies, But Not Anthropic](https://yro.slashdot.org/story/26/05/01/1913249/pentagon-reaches-agreements-with-top-ai-companies-but-not-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 20:56:02](https://lobste.rs/s/hb9tdr/inverse_sapir_whorf_programming) - [Inverse Sapir-Whorf and programming languages](https://lukeplant.me.uk/blog/posts/inverse-sapir-whorf-and-programming-languages/)
* [2026-05-01, 20:00:00](https://tech.slashdot.org/story/26/05/01/1838209/icann-opens-applications-for-new-generic-top-level-domains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ICANN Opens Applications For New Generic Top-Level Domains](https://tech.slashdot.org/story/26/05/01/1838209/icann-opens-applications-for-new-generic-top-level-domains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 19:55:00](https://soylentnews.org/article.pl?sid=26/04/30/1227212&amp;from=rss) - [Colorado&apos;s Anti-Repair Bill is Dead](https://soylentnews.org/article.pl?sid=26/04/30/1227212&amp;from=rss)
* [2026-05-01, 17:17:13](https://lobste.rs/s/kghyn5/combat_llm_spam_by_building_web_trust) - [combat LLM spam by building a web of trust](https://blog.tangled.org/vouching/)
* [2026-05-01, 16:52:43](https://news.ycombinator.com/item?id=47977026) - [DeepSeek V4—almost on the frontier](https://simonwillison.net/2026/Apr/24/deepseek-v4/)
* [2026-05-01, 15:11:00](https://soylentnews.org/article.pl?sid=26/04/30/0232227&amp;from=rss) - [Vibe Coding Will Break Your Company      ](https://soylentnews.org/article.pl?sid=26/04/30/0232227&amp;from=rss)
* [2026-05-01, 14:22:46](https://lobste.rs/s/vwmojf/why_i_don_t_vibe_code) - [Why I Don’t Vibe Code](https://jacobharr.is/personal/i-dont-vibe-code)
* [2026-05-01, 12:10:28](https://lobste.rs/s/x8z1yc/life_update_from_zach_oakes_zig_ai) - [A life update from Zach Oakes: Zig, AI, unemployment, and more](https://www.youtube.com/watch?v=DhhPUrizZcw)
* [2026-05-01, 10:25:00](https://soylentnews.org/article.pl?sid=26/04/30/0229207&amp;from=rss) - [Google Ad Income Per User - With Demographic Breakdown](https://soylentnews.org/article.pl?sid=26/04/30/0229207&amp;from=rss)
* [2026-05-01, 05:41:00](https://soylentnews.org/article.pl?sid=26/04/30/0224241&amp;from=rss) - [Microsoft Pushes Out Experienced American Talent to Fuel AI Ambitions](https://soylentnews.org/article.pl?sid=26/04/30/0224241&amp;from=rss)
* [2026-05-01, 00:58:00](https://soylentnews.org/article.pl?sid=26/04/30/0223202&amp;from=rss) - [Your Phone is About to Stop Being Yours. Keep Android Open!](https://soylentnews.org/article.pl?sid=26/04/30/0223202&amp;from=rss)
* [2026-04-30, 20:13:00](https://soylentnews.org/article.pl?sid=26/04/29/1243245&amp;from=rss) - [Gone in Nine Seconds](https://soylentnews.org/article.pl?sid=26/04/29/1243245&amp;from=rss)
* [2026-04-30, 16:33:24](https://news.ycombinator.com/item?id=47964957) - [Dotcl: Common Lisp Implementation on .NET](https://github.com/dotcl/dotcl)
* [2026-04-30, 15:24:00](https://soylentnews.org/article.pl?sid=26/04/29/1156248&amp;from=rss) - [Electrical Current Might be the Key to a Better Cup of Coffee](https://soylentnews.org/article.pl?sid=26/04/29/1156248&amp;from=rss)
* [2026-04-30, 14:03:43](https://news.ycombinator.com/item?id=47962681) - [Little Magazines Are Back](https://wsjfreeexpression.substack.com/p/little-magazines-are-back)
* [2026-04-30, 13:15:04](https://news.ycombinator.com/item?id=47961935) - [Show HN: Pollen – distributed WASM runtime, no control plane, single binary](https://github.com/sambigeara/pollen)
* [2026-04-30, 10:38:00](https://soylentnews.org/article.pl?sid=26/04/28/0620241&amp;from=rss) - [NASAs Incredible New Telescope Will Offer an Atlas of the Universe](https://soylentnews.org/article.pl?sid=26/04/28/0620241&amp;from=rss)
* [2026-04-30, 09:12:23](https://news.ycombinator.com/item?id=47960015) - [Inventions for battery reuse and recycling increase seven-fold in last decade](https://www.epo.org/en/news-events/news/inventions-battery-reuse-and-recycling-increase-more-seven-fold-last-decade)
* [2026-04-30, 05:53:00](https://soylentnews.org/article.pl?sid=26/04/28/0613243&amp;from=rss) - [Microsoft Reportedly Looking at Rebasing Azure Linux on Fedora](https://soylentnews.org/article.pl?sid=26/04/28/0613243&amp;from=rss)
* [2026-04-30, 01:08:00](https://soylentnews.org/article.pl?sid=26/04/28/0610224&amp;from=rss) - [China&apos;s Biggest Streaming Platform Wants Most of its New Films to be AI-Generated](https://soylentnews.org/article.pl?sid=26/04/28/0610224&amp;from=rss)
* [2026-04-29, 20:48:17](https://news.ycombinator.com/item?id=47954394) - [Artemis II Photo Timeline](https://artemistimeline.com/#artemis-ii-walkout-nhq202604010003)
* [2026-04-29, 20:22:00](https://soylentnews.org/article.pl?sid=26/04/28/062230&amp;from=rss) - [Tails Linux 7.7 Anonymous Distro Adds Detection of Outdated Secure Boot Certificates](https://soylentnews.org/article.pl?sid=26/04/28/062230&amp;from=rss)
* [2026-04-29, 16:49:13](https://news.ycombinator.com/item?id=47950993) - [The USB Situation](https://randsinrepose.com/archives/the-usb-situation/)
* [2026-04-29, 15:41:00](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss) - [Antarctica Just Saw the Fastest Glacier Collapse Ever Recorded](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss)
* [2026-04-29, 13:54:48](https://news.ycombinator.com/item?id=47948526) - [Barman – Backup and Recovery Manager for PostgreSQL](https://github.com/EnterpriseDB/barman)
* [2026-04-29, 10:54:00](https://soylentnews.org/article.pl?sid=26/04/28/0555211&amp;from=rss) - [Meta Signs Multibillion-Dollar Deal With Amazon to Use its CPU Chips for AI](https://soylentnews.org/article.pl?sid=26/04/28/0555211&amp;from=rss)
* [2026-04-29, 06:09:00](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss) - [Firefox Has Quietly Integrated Brave&apos;s Adblock Engine](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss)
* [2026-04-29, 01:26:00](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss) - [NASA Shut Down Voyager 1 Science Instrument After Unexpected Power Drop](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss)
* [2026-04-28, 18:40:00](https://soylentnews.org/article.pl?sid=26/04/26/1853229&amp;from=rss) - [Someone Made a Windows 95 Subsystem for Linux](https://soylentnews.org/article.pl?sid=26/04/26/1853229&amp;from=rss)
* [2026-04-28, 14:00:00](https://soylentnews.org/article.pl?sid=26/04/26/1758257&amp;from=rss) - [Raccoons Solve Puzzles for the Fun of It](https://soylentnews.org/article.pl?sid=26/04/26/1758257&amp;from=rss)
* [2026-04-28, 09:22:00](https://soylentnews.org/article.pl?sid=26/04/26/1740233&amp;from=rss) - [A Sun is Not Required to Generate Conditions Suitable for Life on Exoplanet Moons](https://soylentnews.org/article.pl?sid=26/04/26/1740233&amp;from=rss)
* [2026-04-28, 05:46:00](https://soylentnews.org/article.pl?sid=26/04/26/1727213&amp;from=rss) - [Electric Field Tunes Vibrations to Ease Heat Transfer](https://soylentnews.org/article.pl?sid=26/04/26/1727213&amp;from=rss)
* [2026-04-28, 01:04:00](https://soylentnews.org/article.pl?sid=26/04/26/0035245&amp;from=rss) - [Why Do I Feel Like, Somebody&apos;s Watching Me?](https://soylentnews.org/article.pl?sid=26/04/26/0035245&amp;from=rss)
