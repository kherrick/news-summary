# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Microsoft is Slowly Turning Edge Into Another Copilot App](https://slashdot.org/story/26/01/05/1825213/microsoft-is-slowly-turning-edge-into-another-copilot-app?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Flu Is Relentless. Crispr Might Be Able to Shut It Down](https://science.slashdot.org/story/26/01/05/183201/flu-is-relentless-crispr-might-be-able-to-shut-it-down?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Show HN: Open-Source 8-Ch BCI Board (ESP32 and ADS1299 and OpenBCI GUI)](https://github.com/Cerelog-ESP-EEG/ESP-EEG)

* [Show HN: Tailsnitch – A Security Auditor for Tailscale](https://github.com/Adversis/tailsnitch)

* [Samsung's CES Concepts Disguise AI Speakers as Turntables and Cassette Players](https://entertainment.slashdot.org/story/26/01/05/1530247/samsungs-ces-concepts-disguise-ai-speakers-as-turntables-and-cassette-players?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Observability's past, present, and future](https://blog.sherwoodcallaway.com/observability-s-past-present-and-future/)

* [Databases in 2025: A Year in Review](https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html)

## Health and Science

* [Parkinson's is the Canary in the Coal Mine Warning Us That Our Environment is Sick](https://soylentnews.org/article.pl?sid=26/01/02/1618258&from=rss)

* [In 1962, a Geologist Went Into a Cave. 2 Months Later, He'd Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&from=rss)

* [A spider web unlike any seen before](https://www.nytimes.com/2025/11/08/science/biggest-spiderweb-sulfur-cave.html)

## Social Trends and Culture

* [Influencers and OnlyFans Models Dominate US 'Extraordinary' Artist Visas](https://tech.slashdot.org/story/26/01/05/166232/influencers-and-onlyfans-models-dominate-us-extraordinary-artist-visas?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [All AI Videos Are Harmful (2025)](https://idiallo.com/blog/all-ai-videos-are-harmful)

* [39 Million Californians Can Now Legally Demand Data Brokers Delete Their Personal Data](https://yro.slashdot.org/story/26/01/05/0224249/39-million-californians-can-now-legally-demand-data-brokers-delete-their-personal-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Business and Economy

* [How Y Combinator made it smart to trust founders](https://elbowgreasegames.substack.com/p/when-good-actors-can-trust-each-other)

* [The last supported version of HP-UX is no more](https://www.theregister.com/2026/01/05/hpux_end_of_life/)

* [Samsung Co-CEO Says Soaring Memory Chip Prices Will 'Inevitably' Impact Smartphone Costs](https://mobile.slashdot.org/story/26/01/05/144211/samsung-co-ceo-says-soaring-memory-chip-prices-will-inevitably-impact-smartphone-costs?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cybersecurity

* [Anna's Archive loses .org domain after surprise suspension](https://torrentfreak.com/annas-archive-loses-org-domain-after-surprise-suspension/)

* [Singularity Rootkit: SELinux bypass and netlink filter (ss/conntrack hidden)](https://github.com/MatheuZSecurity/Singularity)

## Arts and Media

* [2025 Ends With Release of J. R. R. Tolkein's Unpublished Story](https://entertainment.slashdot.org/story/26/01/05/0313224/2025-ends-with-release-of-j-r-r-tolkeins-unpublished-story?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2026-01-05, 18:50:00](https://slashdot.org/story/26/01/05/1825213/microsoft-is-slowly-turning-edge-into-another-copilot-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is Slowly Turning Edge Into Another Copilot App](https://slashdot.org/story/26/01/05/1825213/microsoft-is-slowly-turning-edge-into-another-copilot-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 18:37:00](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss) - [Parkinson&apos;s is the Canary in the Coal Mine Warning Us That Our Environment is Sick](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss)
* [2026-01-05, 18:10:00](https://science.slashdot.org/story/26/01/05/183201/flu-is-relentless-crispr-might-be-able-to-shut-it-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Flu Is Relentless. Crispr Might Be Able to Shut It Down](https://science.slashdot.org/story/26/01/05/183201/flu-is-relentless-crispr-might-be-able-to-shut-it-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 17:46:51](https://news.ycombinator.com/item?id=46502051) - [Show HN: Open-Source 8-Ch BCI Board (ESP32 and ADS1299 and OpenBCI GUI)](https://github.com/Cerelog-ESP-EEG/ESP-EEG)
* [2026-01-05, 17:41:17](https://news.ycombinator.com/item?id=46501987) - [Calibrating My Turtle](https://clabs.org/blog/CalibratingMyTurtle)
* [2026-01-05, 17:30:00](https://news.slashdot.org/story/26/01/05/1730218/the-college-backlash-is-a-mirage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The College Backlash is a Mirage&apos;](https://news.slashdot.org/story/26/01/05/1730218/the-college-backlash-is-a-mirage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 17:20:01](https://news.ycombinator.com/item?id=46501677) - [How Y Combinator made it smart to trust founders](https://elbowgreasegames.substack.com/p/when-good-actors-can-trust-each-other)
* [2026-01-05, 17:19:35](https://news.ycombinator.com/item?id=46501667) - [The last supported version of HP-UX is no more](https://www.theregister.com/2026/01/05/hpux_end_of_life/)
* [2026-01-05, 17:19:33](https://news.ycombinator.com/item?id=46501665) - [So, you want to chunk really fast?](https://minha.sh/posts/so,-you-want-to-chunk-really-fast)
* [2026-01-05, 16:47:23](https://news.ycombinator.com/item?id=46501137) - [Show HN: Tailsnitch – A Security Auditor for Tailscale](https://github.com/Adversis/tailsnitch)
* [2026-01-05, 16:41:00](https://tech.slashdot.org/story/26/01/05/166232/influencers-and-onlyfans-models-dominate-us-extraordinary-artist-visas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Influencers and OnlyFans Models Dominate US &apos;Extraordinary&apos; Artist Visas](https://tech.slashdot.org/story/26/01/05/166232/influencers-and-onlyfans-models-dominate-us-extraordinary-artist-visas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 16:34:22](https://news.ycombinator.com/item?id=46500900) - [Observability&apos;s past, present, and future](https://blog.sherwoodcallaway.com/observability-s-past-present-and-future/)
* [2026-01-05, 16:11:44](https://news.ycombinator.com/item?id=46500510) - [Sandboxing Untrusted Python](https://gist.github.com/mavdol/2c68acb408686f1e038bf89e5705b28c)
* [2026-01-05, 16:01:00](https://entertainment.slashdot.org/story/26/01/05/1530247/samsungs-ces-concepts-disguise-ai-speakers-as-turntables-and-cassette-players?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung&apos;s CES Concepts Disguise AI Speakers as Turntables and Cassette Players](https://entertainment.slashdot.org/story/26/01/05/1530247/samsungs-ces-concepts-disguise-ai-speakers-as-turntables-and-cassette-players?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 15:37:38](https://news.ycombinator.com/item?id=46500022) - [CSS sucks because we don&apos;t bother learning it (2022)](https://idiallo.com/blog/learn-css)
* [2026-01-05, 15:34:40](https://news.ycombinator.com/item?id=46499983) - [Murder-suicide case shows OpenAI selectively hides data after users die](https://arstechnica.com/tech-policy/2025/12/openai-refuses-to-say-where-chatgpt-logs-go-when-users-die/)
* [2026-01-05, 15:34:14](https://news.ycombinator.com/item?id=46499976) - [RevisionDojo, a YC startup, is running astroturfing campaigns targeting kids](https://news.ycombinator.com/item?id=46499976)
* [2026-01-05, 15:21:00](https://slashdot.org/story/26/01/05/1452249/people-of-dubious-character-are-more-likely-to-enter-public-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [People of Dubious Character Are More Likely To Enter Public Service](https://slashdot.org/story/26/01/05/1452249/people-of-dubious-character-are-more-likely-to-enter-public-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 15:10:47](https://news.ycombinator.com/item?id=46499646) - [Show HN: DoNotNotify – log and intelligently block notifications on Android](https://donotnotify.com/)
* [2026-01-05, 14:40:00](https://developers.slashdot.org/story/26/01/05/1431212/stack-overflow-went-from-200000-monthly-questions-to-nearly-zero?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stack Overflow Went From 200,000 Monthly Questions To Nearly Zero](https://developers.slashdot.org/story/26/01/05/1431212/stack-overflow-went-from-200000-monthly-questions-to-nearly-zero?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 14:04:00](https://mobile.slashdot.org/story/26/01/05/144211/samsung-co-ceo-says-soaring-memory-chip-prices-will-inevitably-impact-smartphone-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Co-CEO Says Soaring Memory Chip Prices Will &apos;Inevitably&apos; Impact Smartphone Costs](https://mobile.slashdot.org/story/26/01/05/144211/samsung-co-ceo-says-soaring-memory-chip-prices-will-inevitably-impact-smartphone-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 13:57:08](https://news.ycombinator.com/item?id=46498775) - [GOG Patrons- Join gamers keeping classics alive](https://www.gog.com/en/patrons)
* [2026-01-05, 13:53:00](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss) - [U.S. Allows TSMC to Import Chipmaking Equipment to its China Fabs](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss)
* [2026-01-05, 13:46:12](https://news.ycombinator.com/item?id=46498662) - [Imagine 130M Washing Machines](https://scottsumner.substack.com/p/imagine-130000000-washing-machines)
* [2026-01-05, 13:45:50](https://news.ycombinator.com/item?id=46498658) - [Singularity Rootkit: SELinux bypass and netlink filter (ss/conntrack hidden)](https://github.com/MatheuZSecurity/Singularity)
* [2026-01-05, 13:44:59](https://news.ycombinator.com/item?id=46498651) - [All AI Videos Are Harmful (2025)](https://idiallo.com/blog/all-ai-videos-are-harmful)
* [2026-01-05, 13:02:52](https://news.ycombinator.com/item?id=46498309) - [Jensen: &apos;We&apos;ve done our country a great disservice&apos; by offshoring](https://www.barchart.com/story/news/36862423/weve-done-our-country-a-great-disservice-by-offshoring-nvidias-jensen-huang-says-we-have-to-create-prosperity-for-all-not-just-phds)
* [2026-01-05, 12:34:00](https://news.slashdot.org/story/26/01/05/0445216/as-us-communities-start-fighting-back-many-datacenters-are-blocked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As US Communities Start Fighting Back, Many Datacenters are Blocked](https://news.slashdot.org/story/26/01/05/0445216/as-us-communities-start-fighting-back-many-datacenters-are-blocked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 11:51:42](https://news.ycombinator.com/item?id=46497712) - [It&apos;s hard to justify Tahoe icons](https://tonsky.me/blog/tahoe-icons/)
* [2026-01-05, 11:32:58](https://news.ycombinator.com/item?id=46497589) - [Cigarette smoke effect using shaders](https://garden.bradwoods.io/notes/javascript/three-js/shaders/shaders-103-smoke)
* [2026-01-05, 10:23:32](https://news.ycombinator.com/item?id=46497164) - [Anna&apos;s Archive loses .org domain after surprise suspension](https://torrentfreak.com/annas-archive-loses-org-domain-after-surprise-suspension/)
* [2026-01-05, 09:07:50](https://news.ycombinator.com/item?id=46496718) - [How Twitch tamed a million lines of TypeScript](https://www.joshribakoff.com/blog/lint-snapshots/)
* [2026-01-05, 09:03:00](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss) - [How Do We Hold Companies Accountable for \&quot;Do as I Say, Not as I Do\&quot; Security Practices?](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss)
* [2026-01-05, 08:34:00](https://entertainment.slashdot.org/story/26/01/05/0313224/2025-ends-with-release-of-j-r-r-tolkeins-unpublished-story?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2025 Ends With Release of J. R. R. Tolkein&apos;s Unpublished Story](https://entertainment.slashdot.org/story/26/01/05/0313224/2025-ends-with-release-of-j-r-r-tolkeins-unpublished-story?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 08:29:38](https://news.ycombinator.com/item?id=46496494) - [Decorative Cryptography](https://www.dlp.rip/decorative-cryptography)
* [2026-01-05, 07:14:30](https://news.ycombinator.com/item?id=46496103) - [Databases in 2025: A Year in Review](https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html)
* [2026-01-05, 07:06:22](https://news.ycombinator.com/item?id=46496054) - [A spider web unlike any seen before](https://www.nytimes.com/2025/11/08/science/biggest-spiderweb-sulfur-cave.html)
* [2026-01-05, 05:35:00](https://tech.slashdot.org/story/26/01/05/0520224/workstation-owner-sadly-marks-the-end-of-life-for-hp-ux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Workstation Owner Sadly Marks the End-of-Life for HP-UX](https://tech.slashdot.org/story/26/01/05/0520224/workstation-owner-sadly-marks-the-end-of-life-for-hp-ux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 04:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss) - [In 1962, a Geologist Went Into a Cave. 2 Months Later, He&apos;d Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss)
* [2026-01-05, 02:34:00](https://yro.slashdot.org/story/26/01/05/0224249/39-million-californians-can-now-legally-demand-data-brokers-delete-their-personal-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [39 Million Californians Can Now Legally Demand Data Brokers Delete Their Personal Data](https://yro.slashdot.org/story/26/01/05/0224249/39-million-californians-can-now-legally-demand-data-brokers-delete-their-personal-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 00:49:00](https://yro.slashdot.org/story/26/01/05/0027243/north-dakota-law-included-fake-critical-minerals-using-lawyers-last-names?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [North Dakota Law Included Fake Critical Minerals Using Lawyers&apos; Last Names](https://yro.slashdot.org/story/26/01/05/0027243/north-dakota-law-included-fake-critical-minerals-using-lawyers-last-names?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 23:49:00](https://hardware.slashdot.org/story/26/01/04/2346256/are-hybrid-cars-helping-america-transition-to-electric-vehicles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Hybrid Cars Helping America Transition to Electric Vehicles?](https://hardware.slashdot.org/story/26/01/04/2346256/are-hybrid-cars-helping-america-transition-to-electric-vehicles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 23:36:00](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss) - [He Made Beer That&apos;s Also a Vaccine. Now Controversy is Brewing](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss)
* [2026-01-04, 22:36:00](https://slashdot.org/story/26/01/04/2234236/fleischer-studios-criticized-for-claiming-betty-boop-is-not-public-domain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fleischer Studios Criticized for Claiming Betty Boop is Not Public Domain](https://slashdot.org/story/26/01/04/2234236/fleischer-studios-criticized-for-claiming-betty-boop-is-not-public-domain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 19:48:20](https://news.ycombinator.com/item?id=46491486) - [Claude Code On-the-Go](https://granda.org/en/2026/01/02/claude-code-on-the-go/)
* [2026-01-04, 18:52:00](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss) - [HP-UX Hits End-of-Life](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss)
* [2026-01-04, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss) - [Americans Lost $333 Million to Bitcoin ATM Fraud in 2025](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss)
* [2026-01-04, 09:22:00](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss) - [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss)
* [2026-01-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss) - [Ozempic is Changing the Foods Americans Buy](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss)
* [2026-01-03, 23:48:00](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss) - [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss)
* [2026-01-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss) - [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss)
* [2026-01-03, 14:19:00](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss) - [Start-Up Proposes Scaled Up AI Data Center &apos;Active Radio Cable&apos; Connectivity](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss)
* [2026-01-03, 09:30:00](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss) - [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss)
* [2026-01-03, 04:45:00](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss) - [QNX Releases New Desktop-Focused Image: QNX 8.0 With Xfce on Wayland](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss)
* [2026-01-03, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss) - [For Computational Devices, Talk Isn&apos;t Cheap](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss)
* [2026-01-02, 19:18:00](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss) - [FDA Officially Confirms Kava is a Food Under Federal Law](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss)
* [2026-01-02, 14:35:00](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss) - [Irish Gov’t to Push for European Union to Ban Anonymous Social Media Accounts](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss)
* [2026-01-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss) - [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss)
* [2026-01-02, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss) - [39C3: Multiple Vulnerabilities in GnuPG and Other Cryptographic Tools](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss)
* [2026-01-02, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss) - [Funding Agencies Can End Profit-First Science Publishing](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss)
* [2026-01-01, 19:38:00](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss) - [Aging Immune Cells May Rewrite Their Own DNA to Stay Inflammatory](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss)
* [2026-01-01, 14:46:00](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss) - [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss)
* [2026-01-01, 14:41:00](https://news.ycombinator.com/item?id=46454488) - [Darwin the Man of His Times](https://aethermug.com/posts/darwin-the-man-of-his-times)
* [2026-01-01, 10:03:00](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss) - [D7VK Reaches Version 1.1 and Adds New Frontend and Experimental Direct3D 6 Support](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss)
* [2026-01-01, 10:02:00](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss) - [Study Reveals Just How Much AI Slop is on YouTube](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss)
* [2026-01-01, 09:42:02](https://news.ycombinator.com/item?id=46452696) - [Scientists Uncover the Universal Geometry of Geology (2020)](https://www.quantamagazine.org/scientists-uncover-the-universal-geometry-of-geology-20201119/)
* [2026-01-01, 05:15:00](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss) - [US Insurance Giant Aflac Says Hackers Stole Personal and Health Data of 22.6 Million People](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss)
* [2026-01-01, 00:37:00](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss) - [Not Everyone Reads the Room the Same](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss)
* [2026-01-01, 00:00:00](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss) - [Happy New Year 2026 !](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss)
