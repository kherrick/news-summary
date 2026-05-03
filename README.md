# [News Summary](https://kherrick.github.io/news-summary/)

## Tech and Science Achievements

* [New Lithium-Plasma Engine Passes Key Mars Propulsion Test](https://science.slashdot.org/story/26/05/02/0017222/new-lithium-plasma-engine-passes-key-mars-propulsion-test?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The latest advancement in space exploration as a lithium-plasma engine successfully passes significant Mars propulsion tests, paving the way for potential future missions.

* [Microsoft Pushes Out Experienced American Talent to Fuel AI Ambitions](https://soylentnews.org/article.pl?sid=26/04/30/0224241&from=rss) - Discussion on Microsoft's controversial workforce overhaul focusing on AI innovations.

* [An Amateur Just Solved a 60-Year-Old Math Problem - by Asking AI](https://science.slashdot.org/story/26/05/02/0433231/an-amateur-just-solved-a-60-year-old-math-problem---by-asking-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A groundbreaking mathematics problem, unresolved for decades, was solved by using artificial intelligence.

## Software and Programming Innovations

* [Quickheap: the fastest comparison-based heap?](https://curiouscoding.nl/posts/quickheap/) - A dive into 'Quickheap', a newly introduced data structure that claims to be the fastest comparison-based heap algorithm.

* [Kimi K2.6 just beat Claude, GPT-5.5, and Gemini in a coding challenge](https://thinkpol.ca/2026/04/30/an-open-weights-chinese-model-just-beat-claude-gpt-5-5-and-gemini-in-a-programming-challenge/) - A new coding model, Kimi K2.6, outperforms leading AI models like GPT-5.5 and Claude in a coding competition.

* [A Couple Million Lines of Haskell: Production Engineering at Mercury](https://blog.haskell.org/a-couple-million-lines-of-haskell/) - Exploring the challenges and victories of leveraging Haskell for production-scale software engineering.

## Gaming and Entertainment

* [NetHack 5.0.0 Released](https://github.com/NetHack/NetHack/releases/tag/NetHack-5.0.0_Released) - The iconic game 'NetHack' sees its first major update in years, version 5.0.0, which includes several bug fixes and new content.

* [Marvel, DC, Game Publishers Launch Rival Events Saturday for Free Giveaways](https://news.slashdot.org/story/26/05/02/0257206/marvel-dc-game-publishers-launch-rival-events-saturday-for-free-giveaways?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A look into the competitive free giveaway events being hosted by entertainment giants like Marvel and DC.

* [The Resurrected Commodore 64 is Getting a Facelift Like the Original](https://soylentnews.org/article.pl?sid=26/05/01/0648229&from=rss) - The iconic Commodore 64 is making a comeback with a modern facelift aimed at invoking nostalgia for fans.

## Cultural and Ethical Perspectives

* [Open source does not imply open community](https://blog.feld.me/posts/2026/04/open-source-does-not-imply-open-community/) - A thought-provoking piece examining the misconceptions surrounding open-source software and community dynamics.

* [AI, Intimacy, and the Data You Never Meant to Share](https://fshot.org/techzone/the-algorithm-knows.php) - Insights into AI's growing role in shaping human relationships and the unintentional data that users expose.

* [Inverse Sapir-Whorf and programming languages](https://lukeplant.me.uk/blog/posts/inverse-sapir-whorf-and-programming-languages/) - Exploring how language structures, including programming code, influence thought patterns and problem-solving strategies.

## Human Impact and Global Challenges

* [Chinese Exports of Green Technologies Surged to Record Levels After Iran War Began](https://hardware.slashdot.org/story/26/05/03/0112257/chinese-exports-of-green-technologies-surged-to-record-levels-after-iran-war-began?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The impact of geopolitical conflicts on the green technology market, with a spotlight on China's role.

* [Former NASA Engineers Create Ingenious Way To Save Homes From Wildfires Using Noise](https://science.slashdot.org/story/26/05/02/2252228/former-nasa-engineers-create-ingenious-way-to-save-homes-from-wildfires-using-noise?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NASA engineers develop a novel method using soundwaves to protect homes from wildfire damage.

## Privacy, Security, and Ethical Tech

* [I Do Not Recommend Bitwarden](https://マリウス.com/i-do-not-recommend-bitwarden/) - A security critique examining the potential pitfalls of Bitwarden's data storage approach.

* [Maryland to ban A.I.-driven price increases in grocery stores](https://www.nytimes.com/2026/05/01/business/surveillance-pricing-groceries-maryland.html) - Maryland aims to implement legislation banning AI-driven price manipulation in grocery stores.

* [NHS Goes To War Against Open Source](https://shkspr.mobi/blog/2026/05/nhs-goes-to-war-against-open-source/) - The UK's National Health Service is criticized for its stance against using open-source solutions in healthcare.

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

* [2026-05-03, 07:59:44](https://lobste.rs/s/85wpyb/quickheap_fastest_comparison_based_heap) - [Quickheap: the fastest comparison-based heap?](https://curiouscoding.nl/posts/quickheap/)
* [2026-05-03, 06:52:34](https://lobste.rs/s/bnfmcw/testing_macos_on_apple_network_server_2_0) - [Testing MacOS on the Apple Network Server 2.0 ROMs](http://oldvcr.blogspot.com/2026/05/testing-macos-on-apple-network-server.html)
* [2026-05-03, 06:33:38](https://news.ycombinator.com/item?id=47994012) - [Specsmaxxing – On overcoming AI psychosis, and why I write specs in YAML](https://acai.sh/blog/specsmaxxing)
* [2026-05-03, 05:10:00](https://soylentnews.org/article.pl?sid=26/05/01/0658214&amp;from=rss) - [Round Up of Latest OS and Browser Releases](https://soylentnews.org/article.pl?sid=26/05/01/0658214&amp;from=rss)
* [2026-05-03, 04:18:45](https://lobste.rs/s/jmxtiq/nethack_5_0_0_released) - [NetHack 5.0.0 Released](https://github.com/NetHack/NetHack/releases/tag/NetHack-5.0.0_Released)
* [2026-05-03, 04:05:28](https://news.ycombinator.com/item?id=47993235) - [Kimi K2.6 just beat Claude, GPT-5.5, and Gemini in a coding challenge](https://thinkpol.ca/2026/04/30/an-open-weights-chinese-model-just-beat-claude-gpt-5-5-and-gemini-in-a-programming-challenge/)
* [2026-05-03, 03:34:00](https://hardware.slashdot.org/story/26/05/03/0112257/chinese-exports-of-green-technologies-surged-to-record-levels-after-iran-war-began?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Exports of Green Technologies Surged to Record Levels After Iran War Began](https://hardware.slashdot.org/story/26/05/03/0112257/chinese-exports-of-green-technologies-surged-to-record-levels-after-iran-war-began?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 03:26:59](https://lobste.rs/s/crcktq/adding_author_context_rss) - [Adding author context to RSS](https://coywolf.com/notes/adding-author-context-to-rss/)
* [2026-05-03, 02:42:43](https://news.ycombinator.com/item?id=47992802) - [AI, Intimacy, and the Data You Never Meant to Share](https://fshot.org/techzone/the-algorithm-knows.php)
* [2026-05-03, 02:40:11](https://lobste.rs/s/7cwjub/spec_cpu_2026_overview_what_s_new) - [SPEC CPU 2026 Overview / What&apos;s New?](https://www.spec.org/auto/cpu2026/Docs/overview.html)
* [2026-05-03, 02:36:09](https://news.ycombinator.com/item?id=47992772) - [Open source does not imply open community](https://blog.feld.me/posts/2026/04/open-source-does-not-imply-open-community/)
* [2026-05-03, 01:38:38](https://news.ycombinator.com/item?id=47992446) - [Care homes and hotels in Japan shut as expansion strategy unravels](https://www.newsonjapan.com/article/149075.php)
* [2026-05-03, 01:34:00](https://science.slashdot.org/story/26/05/02/2252228/former-nasa-engineers-create-ingenious-way-to-save-homes-from-wildfires-using-noise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former NASA Engineers Create Ingenious Way To Save Homes From Wildfires Using Noise](https://science.slashdot.org/story/26/05/02/2252228/former-nasa-engineers-create-ingenious-way-to-save-homes-from-wildfires-using-noise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 01:28:31](https://lobste.rs/s/jhuf5a/nethack_5_0_0) - [NetHack 5.0.0](https://nethack.org/v500/release.html)
* [2026-05-03, 01:27:10](https://lobste.rs/s/ba3cac/this_month_ladybird_april_2026) - [This Month in Ladybird - April 2026](https://ladybird.org/newsletter/2026-04-30/)
* [2026-05-03, 01:24:09](https://news.ycombinator.com/item?id=47992349) - [Maryland to ban A.I.-driven price increases in grocery stores](https://www.nytimes.com/2026/05/01/business/surveillance-pricing-groceries-maryland.html)
* [2026-05-03, 00:35:18](https://lobste.rs/s/bwppor/github_for_maintainers) - [A GitHub for maintainers](https://nesbitt.io/2026/05/02/a-github-for-maintainers.html)
* [2026-05-03, 00:27:00](https://soylentnews.org/article.pl?sid=26/05/01/0648229&amp;from=rss) - [The Resurrected Commodore 64 is Getting a Facelift Like the Original](https://soylentnews.org/article.pl?sid=26/05/01/0648229&amp;from=rss)
* [2026-05-03, 00:01:14](https://news.ycombinator.com/item?id=47991802) - [A Couple Million Lines of Haskell: Production Engineering at Mercury](https://blog.haskell.org/a-couple-million-lines-of-haskell/)
* [2026-05-02, 22:34:00](https://news.slashdot.org/story/26/05/02/1914208/ask-slashdot-are-youtubes-subtitles-appallingly-bad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot: Are YouTube&apos;s Subtitles &apos;Appallingly Bad&apos;?](https://news.slashdot.org/story/26/05/02/1914208/ask-slashdot-are-youtubes-subtitles-appallingly-bad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 22:11:49](https://lobste.rs/s/bzltqt/unsigned_sizes_five_year_mistake) - [Unsigned sizes: a five year mistake](https://c3-lang.org/blog/unsigned-sizes-a-five-year-mistake/)
* [2026-05-02, 22:06:04](https://lobste.rs/s/rp1lti/open_source_does_not_imply_open_community) - [Open Source Does Not Imply Open Community](https://blog.feld.me/posts/2026/04/open-source-does-not-imply-open-community/)
* [2026-05-02, 21:34:49](https://news.ycombinator.com/item?id=47990789) - [Clojurists Together – Q2 2026 Open Source Funding Announcement](https://www.clojuriststogether.org/news/q2-2026-funding-announcement/)
* [2026-05-02, 21:34:00](https://hardware.slashdot.org/story/26/05/02/1828217/the-19b-nuclear-ai-energy-startup-that-couldnt-sign-a-single-client?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The $19B \&quot;Nuclear AI\&quot; Energy Startup That Couldn&apos;t Sign a Single Client](https://hardware.slashdot.org/story/26/05/02/1828217/the-19b-nuclear-ai-energy-startup-that-couldnt-sign-a-single-client?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 21:25:05](https://news.ycombinator.com/item?id=47990708) - [Show HN: State of the Art of Coding Models, According to Hacker News Commenters](https://hnup.date/hn-sota)
* [2026-05-02, 21:21:27](https://news.ycombinator.com/item?id=47990675) - [The agent harness belongs outside the sandbox](https://www.mendral.com/blog/agent-harness-belongs-outside-sandbox)
* [2026-05-02, 21:14:29](https://news.ycombinator.com/item?id=47990606) - [Six Years Perfecting Maps on WatchOS](https://www.david-smith.org/blog/2026/04/29/maps-on-watchos/)
* [2026-05-02, 21:04:50](https://lobste.rs/s/5knn5x/onionlink_2_5k_lines_c_connect_v3_onion) - [onionlink: 2.5k lines of C++ to connect to v3 onion services, using only libsodium and mbedTLS](https://github.com/h2337/onionlink)
* [2026-05-02, 20:46:30](https://news.ycombinator.com/item?id=47990318) - [This Month in Ladybird - April 2026](https://ladybird.org/newsletter/2026-04-30/)
* [2026-05-02, 20:42:20](https://news.ycombinator.com/item?id=47990284) - [Neanderthals ran &apos;fat factories&apos; 125,000 years ago (2025)](https://www.universiteitleiden.nl/en/news/2025/07/neanderthals-ran-fat-factories-125000-years-ago)
* [2026-05-02, 20:34:00](https://news.slashdot.org/story/26/05/02/1556244/using-drones-for-cloud-seeding-can-trigger-rain-company-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Using Drones for Cloud-Seeding Can Trigger Rain, Company Claims](https://news.slashdot.org/story/26/05/02/1556244/using-drones-for-cloud-seeding-can-trigger-rain-company-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 19:57:26](https://news.ycombinator.com/item?id=47989883) - [VS Code inserting &apos;Co-Authored-by Copilot&apos; into commits regardless of usage](https://github.com/microsoft/vscode/pull/310226)
* [2026-05-02, 19:42:00](https://soylentnews.org/article.pl?sid=26/05/01/0645211&amp;from=rss) - [Drone Pilot Makes US Rescind No-Fly Zones Around Unmarked, Moving ICE Vehicles](https://soylentnews.org/article.pl?sid=26/05/01/0645211&amp;from=rss)
* [2026-05-02, 19:34:00](https://it.slashdot.org/story/26/05/02/0338227/what-if-tech-company-layoffs-arent-all-about-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What if Tech Company Layoffs Aren&apos;t All About AI?](https://it.slashdot.org/story/26/05/02/0338227/what-if-tech-company-layoffs-arent-all-about-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 18:41:09](https://lobste.rs/s/imuls4/age_fast_food) - [The age of fast food](https://www.abareplace.com/blog/ai_fastfood/)
* [2026-05-02, 18:34:00](https://science.slashdot.org/story/26/05/02/0433231/an-amateur-just-solved-a-60-year-old-math-problem---by-asking-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An Amateur Just Solved a 60-Year-Old Math Problem - by Asking AI](https://science.slashdot.org/story/26/05/02/0433231/an-amateur-just-solved-a-60-year-old-math-problem---by-asking-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 18:13:57](https://lobste.rs/s/qp0vi5/nhs_goes_war_against_open_source) - [NHS Goes To War Against Open Source](https://shkspr.mobi/blog/2026/05/nhs-goes-to-war-against-open-source/)
* [2026-05-02, 18:03:42](https://news.ycombinator.com/item?id=47988776) - [NetHack 5.0.0](https://nethack.org/v500/release.html)
* [2026-05-02, 17:57:43](https://lobste.rs/s/s1yqiu/debian_adds_spf_record_debian_org) - [Debian adds an SPF record to debian.org](https://lists.debian.org/debian-devel-announce/2026/04/msg00010.html)
* [2026-05-02, 17:40:55](https://news.ycombinator.com/item?id=47988592) - [Do_not_track](https://donottrack.sh/)
* [2026-05-02, 17:34:00](https://tech.slashdot.org/story/26/05/02/0552238/costumed-crowd-speedruns-scientology-building-for-social-media-trend?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Costumed Crowd &apos;Speedruns&apos; Scientology Building For Social Media Trend](https://tech.slashdot.org/story/26/05/02/0552238/costumed-crowd-speedruns-scientology-building-for-social-media-trend?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 17:32:29](https://news.ycombinator.com/item?id=47988504) - [Dav2d](https://code.videolan.org/videolan/dav2d)
* [2026-05-02, 17:26:59](https://lobste.rs/s/mi9xrw/pep_661_sentinel_values_accepted_5_years) - [PEP 661 – Sentinel Values, accepted 5 years later](https://peps.python.org/pep-0661/)
* [2026-05-02, 17:05:19](https://lobste.rs/s/ncngka/what_fun_websites_do_you_know) - [What fun websites do you know?](https://lobste.rs/s/ncngka/what_fun_websites_do_you_know)
* [2026-05-02, 16:34:51](https://lobste.rs/s/k3delj/agentic_coding_is_burning_me_out) - [Agentic Coding is Burning Me Out](https://0xsid.com/blog/agentic-coding-fatigue)
* [2026-05-02, 16:34:00](https://science.slashdot.org/story/26/04/30/1548214/retina-scan-for-diabetes-could-also-reduce-deaths-during-pregnancy-in-developing-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Retina Scan for Diabetes Could Also Reduce Deaths During Pregnancy in Developing Countries](https://science.slashdot.org/story/26/04/30/1548214/retina-scan-for-diabetes-could-also-reduce-deaths-during-pregnancy-in-developing-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 15:34:00](https://linux.slashdot.org/story/26/05/02/0625247/linux-percentage-of-steam-users-doubled-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Percentage of Steam Users Doubled in One Year](https://linux.slashdot.org/story/26/05/02/0625247/linux-percentage-of-steam-users-doubled-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 14:56:00](https://soylentnews.org/article.pl?sid=26/05/01/0637252&amp;from=rss) - [Linux Cryptographic Code Flaw Offers Fast Route to Root](https://soylentnews.org/article.pl?sid=26/05/01/0637252&amp;from=rss)
* [2026-05-02, 14:34:00](https://news.slashdot.org/story/26/05/02/0257206/marvel-dc-game-publishers-launch-rival-events-saturday-for-free-giveaways?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Marvel, DC, Game Publishers Launch Rival Events Saturday for Free Giveaways](https://news.slashdot.org/story/26/05/02/0257206/marvel-dc-game-publishers-launch-rival-events-saturday-for-free-giveaways?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 14:17:11](https://lobste.rs/s/a0jdo0/servers_with_personality) - [Servers with Personality](https://caolan.uk/links/servers/)
* [2026-05-02, 12:18:38](https://lobste.rs/s/aunywc/screw_you_realtek) - [Screw you Realtek](https://www.growse.com/2026/05/02/screw-you-realtek.html)
* [2026-05-02, 11:00:00](https://slashdot.org/story/26/05/02/0010242/gamestop-is-preparing-offer-for-ebay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GameStop Is Preparing Offer For eBay](https://slashdot.org/story/26/05/02/0010242/gamestop-is-preparing-offer-for-ebay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 10:29:49](https://lobste.rs/s/jtzbv8/protect_your_shed) - [Protect Your Shed](https://dylanbutler.dev/blog/protect-your-shed/)
* [2026-05-02, 10:17:09](https://lobste.rs/s/quulrs/why_tuis_are_back) - [Why TUIs are back](https://wiki.alcidesfonseca.com/blog/why-tuis-are-back/)
* [2026-05-02, 10:07:00](https://soylentnews.org/article.pl?sid=26/04/30/1239239&amp;from=rss) - [Apple Wants to Kill Your Time Capsule, but They Run NetBSD So They Can&apos;t](https://soylentnews.org/article.pl?sid=26/04/30/1239239&amp;from=rss)
* [2026-05-02, 09:30:49](https://news.ycombinator.com/item?id=47984852) - [How fast is a macOS VM, and how small could it be?](https://eclecticlight.co/2026/05/02/how-fast-is-a-macos-vm-and-how-small-could-it-be/)
* [2026-05-02, 08:37:39](https://news.ycombinator.com/item?id=47984589) - [Dabbling in Erlang, part 2: A minimal introduction (2013)](https://agis.io/post/dabbling-in-erlang-a-minimal-introduction/)
* [2026-05-02, 07:00:00](https://science.slashdot.org/story/26/05/02/0017222/new-lithium-plasma-engine-passes-key-mars-propulsion-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Lithium-Plasma Engine Passes Key Mars Propulsion Test](https://science.slashdot.org/story/26/05/02/0017222/new-lithium-plasma-engine-passes-key-mars-propulsion-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 06:39:18](https://lobste.rs/s/miwd1w/i_do_not_recommend_bitwarden) - [I Do Not Recommend Bitwarden](https://マリウス.com/i-do-not-recommend-bitwarden/)
* [2026-05-02, 05:21:00](https://soylentnews.org/article.pl?sid=26/04/30/1235210&amp;from=rss) - [Google and Pentagon Reportedly Agree on Deal for ‘Any Lawful’ Use of AI](https://soylentnews.org/article.pl?sid=26/04/30/1235210&amp;from=rss)
* [2026-05-02, 03:30:00](https://news.slashdot.org/story/26/05/02/006240/amazon-stuck-with-months-of-repairs-after-drone-strikes-on-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Stuck With Months of Repairs After Drone Strikes On Data Centers](https://news.slashdot.org/story/26/05/02/006240/amazon-stuck-with-months-of-repairs-after-drone-strikes-on-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 00:38:00](https://soylentnews.org/article.pl?sid=26/04/30/1229213&amp;from=rss) - [How Linux 7.0 Broke PostgreSQL](https://soylentnews.org/article.pl?sid=26/04/30/1229213&amp;from=rss)
* [2026-05-02, 00:31:22](https://lobste.rs/s/rtnzfj/what_conferences_are_you_excited_attend) - [What Conferences are You Excited to Attend in the Next 12 Months?](https://lobste.rs/s/rtnzfj/what_conferences_are_you_excited_attend)
* [2026-05-02, 00:12:00](https://news.ycombinator.com/item?id=47981979) - [A physics engine with incremental rollback for multiplayer games](https://easel.games/blog/2026-rollback-physics)
* [2026-05-01, 23:00:00](https://games.slashdot.org/story/26/05/01/1936256/microsofts-xbox-mode-is-now-available-for-all-windows-11-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Xbox Mode Is Now Available For All Windows 11 PCs](https://games.slashdot.org/story/26/05/01/1936256/microsofts-xbox-mode-is-now-available-for-all-windows-11-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 20:56:02](https://lobste.rs/s/hb9tdr/inverse_sapir_whorf_programming) - [Inverse Sapir-Whorf and programming languages](https://lukeplant.me.uk/blog/posts/inverse-sapir-whorf-and-programming-languages/)
* [2026-05-01, 19:55:00](https://soylentnews.org/article.pl?sid=26/04/30/1227212&amp;from=rss) - [Colorado&apos;s Anti-Repair Bill is Dead](https://soylentnews.org/article.pl?sid=26/04/30/1227212&amp;from=rss)
* [2026-05-01, 17:17:13](https://lobste.rs/s/kghyn5/combat_llm_spam_by_building_web_trust) - [combat LLM spam by building a web of trust](https://blog.tangled.org/vouching/)
* [2026-05-01, 15:11:00](https://soylentnews.org/article.pl?sid=26/04/30/0232227&amp;from=rss) - [Vibe Coding Will Break Your Company      ](https://soylentnews.org/article.pl?sid=26/04/30/0232227&amp;from=rss)
* [2026-05-01, 10:25:00](https://soylentnews.org/article.pl?sid=26/04/30/0229207&amp;from=rss) - [Google Ad Income Per User - With Demographic Breakdown](https://soylentnews.org/article.pl?sid=26/04/30/0229207&amp;from=rss)
* [2026-05-01, 08:36:19](https://news.ycombinator.com/item?id=47972481) - [When Dawkins met Claude – Could this AI be conscious?](https://unherd.com/2026/04/is-ai-the-next-phase-of-evolution/)
* [2026-05-01, 07:28:55](https://news.ycombinator.com/item?id=47972114) - [A more efficient implementation of Shor&apos;s algorithm](https://lwn.net/Articles/1066156/)
* [2026-05-01, 05:41:00](https://soylentnews.org/article.pl?sid=26/04/30/0224241&amp;from=rss) - [Microsoft Pushes Out Experienced American Talent to Fuel AI Ambitions](https://soylentnews.org/article.pl?sid=26/04/30/0224241&amp;from=rss)
* [2026-05-01, 00:58:00](https://soylentnews.org/article.pl?sid=26/04/30/0223202&amp;from=rss) - [Your Phone is About to Stop Being Yours. Keep Android Open!](https://soylentnews.org/article.pl?sid=26/04/30/0223202&amp;from=rss)
* [2026-04-30, 23:54:36](https://news.ycombinator.com/item?id=47969850) - [Simple and correct snapshot isolation](https://remy.wang/blog/si.html)
* [2026-04-30, 22:25:16](https://news.ycombinator.com/item?id=47969045) - [San Francisco streets with confusingly similar names](https://j-nelson.net/san-francisco-streets-with-similar-names/)
* [2026-04-30, 20:13:00](https://soylentnews.org/article.pl?sid=26/04/29/1243245&amp;from=rss) - [Gone in Nine Seconds](https://soylentnews.org/article.pl?sid=26/04/29/1243245&amp;from=rss)
* [2026-04-30, 15:24:00](https://soylentnews.org/article.pl?sid=26/04/29/1156248&amp;from=rss) - [Electrical Current Might be the Key to a Better Cup of Coffee](https://soylentnews.org/article.pl?sid=26/04/29/1156248&amp;from=rss)
* [2026-04-30, 14:03:43](https://news.ycombinator.com/item?id=47962681) - [Little magazines are back](https://wsjfreeexpression.substack.com/p/little-magazines-are-back)
* [2026-04-30, 14:01:26](https://news.ycombinator.com/item?id=47962645) - [The IBM Granite 4.1 family of models](https://research.ibm.com/blog/granite-4-1-ai-foundation-models)
* [2026-04-30, 10:38:00](https://soylentnews.org/article.pl?sid=26/04/28/0620241&amp;from=rss) - [NASAs Incredible New Telescope Will Offer an Atlas of the Universe](https://soylentnews.org/article.pl?sid=26/04/28/0620241&amp;from=rss)
* [2026-04-30, 09:12:23](https://news.ycombinator.com/item?id=47960015) - [Inventions for battery reuse and recycling increase seven-fold in last decade](https://www.epo.org/en/news-events/news/inventions-battery-reuse-and-recycling-increase-more-seven-fold-last-decade)
* [2026-04-30, 05:53:00](https://soylentnews.org/article.pl?sid=26/04/28/0613243&amp;from=rss) - [Microsoft Reportedly Looking at Rebasing Azure Linux on Fedora](https://soylentnews.org/article.pl?sid=26/04/28/0613243&amp;from=rss)
* [2026-04-30, 01:08:00](https://soylentnews.org/article.pl?sid=26/04/28/0610224&amp;from=rss) - [China&apos;s Biggest Streaming Platform Wants Most of its New Films to be AI-Generated](https://soylentnews.org/article.pl?sid=26/04/28/0610224&amp;from=rss)
* [2026-04-29, 20:22:00](https://soylentnews.org/article.pl?sid=26/04/28/062230&amp;from=rss) - [Tails Linux 7.7 Anonymous Distro Adds Detection of Outdated Secure Boot Certificates](https://soylentnews.org/article.pl?sid=26/04/28/062230&amp;from=rss)
* [2026-04-29, 16:49:13](https://news.ycombinator.com/item?id=47950993) - [The USB Situation](https://randsinrepose.com/archives/the-usb-situation/)
* [2026-04-29, 16:42:13](https://news.ycombinator.com/item?id=47950880) - [Because It Doesn&apos;t Have To](https://blog.computationalcomplexity.org/2026/04/because-it-doesnt-have-to.html)
* [2026-04-29, 15:41:00](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss) - [Antarctica Just Saw the Fastest Glacier Collapse Ever Recorded](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss)
* [2026-04-29, 13:54:48](https://news.ycombinator.com/item?id=47948526) - [Barman – Backup and Recovery Manager for PostgreSQL](https://github.com/EnterpriseDB/barman)
* [2026-04-29, 10:54:00](https://soylentnews.org/article.pl?sid=26/04/28/0555211&amp;from=rss) - [Meta Signs Multibillion-Dollar Deal With Amazon to Use its CPU Chips for AI](https://soylentnews.org/article.pl?sid=26/04/28/0555211&amp;from=rss)
* [2026-04-29, 06:09:00](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss) - [Firefox Has Quietly Integrated Brave&apos;s Adblock Engine](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss)
* [2026-04-29, 01:26:00](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss) - [NASA Shut Down Voyager 1 Science Instrument After Unexpected Power Drop](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss)
