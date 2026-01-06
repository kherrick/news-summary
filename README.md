# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Updates

* [Hyundai and Boston Dynamics Unveil Humanoid Robot Atlas At CES](https://hardware.slashdot.org/story/26/01/06/0420253/hyundai-and-boston-dynamics-unveil-humanoid-robot-atlas-at-ces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Exciting advancements in robotics as Hyundai and Boston Dynamics introduce the Humanoid Robot Atlas.

* [Lego's Smart Brick Gives the Iconic Analog Toy a New Digital Brain](https://games.slashdot.org/story/26/01/05/217258/legos-smart-brick-gives-the-iconic-analog-toy-a-new-digital-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Digital innovations bring new functionality to traditional toys.

* [Tube trains could navigate the Underground using the rules of Quantum Physics](https://www.ianvisits.co.uk/articles/tube-trains-could-navigate-the-underground-using-the-weird-rules-of-quantum-physics-86370/) - Explorations in quantum physics may revolutionize transportation navigation systems.

## Scientific Discoveries and Health Innovations

* [Mystery Solved: Scientists Discover Why Colorectal Cancer Defies Immune System Rules](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss) - A breakthrough in understanding colorectal cancer’s immune system resistance.

* [Flu Is Relentless. Crispr Might Be Able to Shut It Down](https://science.slashdot.org/story/26/01/05/183201/flu-is-relentless-crispr-might-be-able-to-shut-it-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - How CRISPR technology holds promise for combatting relentless influenza strains.

* [In 1962, a Geologist Went Into a Cave. 2 Months Later, He'd Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss) - The unexpected beginnings of a new geological field.

* [Six-decade math puzzle solved by Korean mathematician](https://www.koreaherald.com/article/10648326) - Korean mathematician resolves a mathematical conundrum that puzzled experts for six decades.

## AI and the Future of Work

* ['Godfather of SaaS' Says He Replaced Most of His Sales Team With AI Agents](https://slashdot.org/story/26/01/05/2317208/godfather-of-saas-says-he-replaced-most-of-his-sales-team-with-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The implications of AI-driven workforce transformations in the software industry.

* [Why didn't AI “join the workforce” in 2025?](https://calnewport.com/why-didnt-ai-join-the-workforce-in-2025/) - Analysis of why artificial intelligence has not yet achieved full integration into professional roles.

## Cybersecurity and Privacy

* [The Nation's Strictest Privacy Law Goes Into Effect](https://news.slashdot.org/story/26/01/05/2323220/the-nations-strictest-privacy-law-goes-into-effect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A landmark privacy regulation that ushers in stricter data controls.

* [VSCode IDE Forks Expose Users To 'Recommended Extension' Attacks](https://it.slashdot.org/story/26/01/05/1929255/vscode-ide-forks-expose-users-to-recommended-extension-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Security vulnerabilities discovered in popular development tools.

* [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss) - Major vulnerability in database systems highlights security risks.

## Digital Self-Reliance and Open Source Ecosystems

* [Owning a Domain Increases Digital Self-Reliance](https://chuck.is/self-reliant/) - Advocating for personal ownership of digital platforms for better independence.

* [How GitHub monopoly is destroying the open source ecosystem](https://ploum.net/2026-01-05-unteaching_github.html) - Insight into GitHub’s impact on the open-source movement and alternative approaches.

## Environmental Impacts and Technological Solutions

* [Parkinson's is the Canary in the Coal Mine Warning Us That Our Environment is Sick](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss) - A stark reminder of the environmental factors contributing to health issues.

* [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss) - Groundbreaking experiment paves the path for manufacturing chips in space.

## Quantum Computing and Technological Paradigms

* [The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks (2018)](https://arxiv.org/abs/1803.03635) - Revisiting the theory behind sparse, efficient neural networks.

* [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss) - Using polaritons to manage light at the tiniest scales, furthering quantum breakthroughs.

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

* [2026-01-06, 08:57:48](https://lobste.rs/s/eqcmik/no_microsoft_office_didn_t_just_get) - [No, Microsoft Office didn&apos;t just get renamed to Microsoft 365 Copilot](https://www.howtogeek.com/no-microsoft-office-didnt-just-get-renamed-to-microsoft-365-copilot/)
* [2026-01-06, 08:44:00](https://soylentnews.org/article.pl?sid=26/01/03/0135207&amp;from=rss) - [How Talking Slows Eye Movements Behind the Wheel](https://soylentnews.org/article.pl?sid=26/01/03/0135207&amp;from=rss)
* [2026-01-06, 08:26:23](https://news.ycombinator.com/item?id=46509967) - [Tube trains could navigate the Underground using the rules of Quantum Physics](https://www.ianvisits.co.uk/articles/tube-trains-could-navigate-the-underground-using-the-weird-rules-of-quantum-physics-86370/)
* [2026-01-06, 08:00:16](https://news.ycombinator.com/item?id=46509788) - [Mapping Protests in Iran](https://www.fdd.org/analysis/2025/06/25/mapping-the-protests-in-iran-2/)
* [2026-01-06, 07:59:56](https://lobste.rs/s/ep8rbp/i_switched_from_vscode_zed) - [I switched from VSCode to Zed](https://tenthousandmeters.com/blog/i-switched-from-vscode-to-zed/)
* [2026-01-06, 07:21:43](https://lobste.rs/s/zt9gsb/bgp_2025) - [BGP in 2025](https://www.potaroo.net/ispcol/2026-01/bgp2025.html)
* [2026-01-06, 07:00:00](https://hardware.slashdot.org/story/26/01/06/0420253/hyundai-and-boston-dynamics-unveil-humanoid-robot-atlas-at-ces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hyundai and Boston Dynamics Unveil Humanoid Robot Atlas At CES](https://hardware.slashdot.org/story/26/01/06/0420253/hyundai-and-boston-dynamics-unveil-humanoid-robot-atlas-at-ces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 06:01:57](https://news.ycombinator.com/item?id=46509211) - [enclose.horse](https://enclose.horse/)
* [2026-01-06, 05:20:40](https://news.ycombinator.com/item?id=46509019) - [The Post-American Internet](https://pluralistic.net/2026/01/01/39c3/)
* [2026-01-06, 04:59:46](https://lobste.rs/s/twojgq/time_travelling_fixing_bugs_with) - [Time Travelling and Fixing Bugs with Property-Based Testing (2019)](https://wickstrom.tech/2019-11-17-time-travelling-and-fixing-bugs-with-property-based-testing.html)
* [2026-01-06, 04:28:12](https://lobste.rs/s/9c952c/minimal_keyboard_key_effect_with_css) - [A minimal keyboard key effect with CSS](https://pjg1.site/kbd-css.html)
* [2026-01-06, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss) - [Mystery Solved: Scientists Discover Why Colorectal Cancer Defies Immune System Rules](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss)
* [2026-01-06, 03:54:19](https://lobste.rs/s/2kheyy/i_o_is_no_longer_bottleneck) - [I/O is no longer the bottleneck?](https://stoppels.ch/2022/11/27/io-is-no-longer-the-bottleneck.html)
* [2026-01-06, 03:32:41](https://news.ycombinator.com/item?id=46508441) - [GoGoGrandparent (YC S16) is hiring back end engineers](https://www.ycombinator.com/companies/gogograndparent/jobs/2vbzAw8-gogograndparent-yc-s16-is-hiring-backend-and-full-stack-engineers)
* [2026-01-06, 03:30:00](https://news.slashdot.org/story/26/01/05/2323220/the-nations-strictest-privacy-law-goes-into-effect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Nation&apos;s Strictest Privacy Law Goes Into Effect](https://news.slashdot.org/story/26/01/05/2323220/the-nations-strictest-privacy-law-goes-into-effect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 03:13:41](https://lobste.rs/s/eb73xx/so_you_want_chunk_really_fast) - [so, you want to chunk really fast?](https://minha.sh/posts/so,-you-want-to-chunk-really-fast)
* [2026-01-06, 03:07:08](https://lobste.rs/s/a8x19t/why_markdown_emphasis_fails_cjk_deep_dive) - [Why Markdown emphasis fails in CJK: A deep dive into CommonMark&apos;s delimiter rules](https://hackers.pub/@yurume/019b912a-cc3b-7e45-9227-d08f0d1eafe8)
* [2026-01-06, 02:20:00](https://news.ycombinator.com/item?id=46507963) - [GBC Boot Animation 88×31 Web Button](https://zakhary.dev/blog/gbc-web-button)
* [2026-01-06, 01:25:00](https://slashdot.org/story/26/01/05/2317208/godfather-of-saas-says-he-replaced-most-of-his-sales-team-with-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Godfather of SaaS&apos; Says He Replaced Most of His Sales Team With AI Agents](https://slashdot.org/story/26/01/05/2317208/godfather-of-saas-says-he-replaced-most-of-his-sales-team-with-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 00:45:00](https://yro.slashdot.org/story/26/01/05/2255256/annas-archive-loses-org-domain-after-surprise-suspension?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anna&apos;s Archive Loses&lt;nobr&gt; &lt;wbr&gt;&lt;/nobr&gt;.Org Domain After Surprise Suspension](https://yro.slashdot.org/story/26/01/05/2255256/annas-archive-loses-org-domain-after-surprise-suspension?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 00:22:00](https://entertainment.slashdot.org/story/26/01/05/235245/corporation-for-public-broadcasting-to-shut-down-after-58-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Corporation for Public Broadcasting To Shut Down After 58 Years](https://entertainment.slashdot.org/story/26/01/05/235245/corporation-for-public-broadcasting-to-shut-down-after-58-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-06, 00:02:18](https://news.ycombinator.com/item?id=46506994) - [I/O is no longer the bottleneck? (2022)](https://stoppels.ch/2022/11/27/io-is-no-longer-the-bottleneck.html)
* [2026-01-06, 00:02:00](https://games.slashdot.org/story/26/01/05/217258/legos-smart-brick-gives-the-iconic-analog-toy-a-new-digital-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lego&apos;s Smart Brick Gives the Iconic Analog Toy a New Digital Brain](https://games.slashdot.org/story/26/01/05/217258/legos-smart-brick-gives-the-iconic-analog-toy-a-new-digital-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 23:41:58](https://lobste.rs/s/uzh7cu/building_cpu_factorio_from_d_flip_flops) - [Building a CPU in Factorio - From D-Flip-Flops to an Operating System](https://www.youtube.com/watch?v=QcQYEAr0Yos)
* [2026-01-05, 23:20:00](https://tech.slashdot.org/story/26/01/05/2059225/gnome-and-firefox-consider-disabling-middle-click-paste-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GNOME and Firefox Consider Disabling Middle Click Paste By Default](https://tech.slashdot.org/story/26/01/05/2059225/gnome-and-firefox-consider-disabling-middle-click-paste-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 23:19:52](https://news.ycombinator.com/item?id=46506596) - [Strange.website](https://strange.website/)
* [2026-01-05, 23:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1627244&amp;from=rss) - [The Worst CPUs Ever Made](https://soylentnews.org/article.pl?sid=26/01/02/1627244&amp;from=rss)
* [2026-01-05, 22:40:00](https://tech.slashdot.org/story/26/01/05/2050220/viral-reddit-post-about-food-delivery-apps-was-an-ai-scam?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Viral Reddit Post About Food Delivery Apps Was an AI Scam](https://tech.slashdot.org/story/26/01/05/2050220/viral-reddit-post-about-food-delivery-apps-was-an-ai-scam?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 22:10:15](https://news.ycombinator.com/item?id=46505735) - [Why didn&apos;t AI “join the workforce” in 2025?](https://calnewport.com/why-didnt-ai-join-the-workforce-in-2025/)
* [2026-01-05, 22:08:01](https://lobste.rs/s/df8vju/owning_domain_increases_digital_self) - [Owning a Domain Increases Digital Self-Reliance](https://chuck.is/self-reliant/)
* [2026-01-05, 22:02:00](https://slashdot.org/story/26/01/05/2041210/amazons-ai-assistant-comes-to-the-web-with-alexacom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s AI Assistant Comes To the Web With Alexa.com](https://slashdot.org/story/26/01/05/2041210/amazons-ai-assistant-comes-to-the-web-with-alexacom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 21:52:22](https://news.ycombinator.com/item?id=46505518) - [Google broke my heart](https://perishablepress.com/google-broke-my-heart/)
* [2026-01-05, 21:26:00](https://hardware.slashdot.org/story/26/01/05/1957206/sandisk-says-goodbye-to-wd-blue-and-black-ssds-hello-to-new-optimus-drives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SanDisk Says Goodbye To WD Blue and Black SSDs, Hello To New &apos;Optimus&apos; Drives](https://hardware.slashdot.org/story/26/01/05/1957206/sandisk-says-goodbye-to-wd-blue-and-black-ssds-hello-to-new-optimus-drives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 21:05:50](https://news.ycombinator.com/item?id=46504963) - [There were BGP anomalies during the Venezuela blackout](https://loworbitsecurity.com/radar/radar16/)
* [2026-01-05, 20:48:00](https://it.slashdot.org/story/26/01/05/1929255/vscode-ide-forks-expose-users-to-recommended-extension-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VSCode IDE Forks Expose Users To &apos;Recommended Extension&apos; Attacks](https://it.slashdot.org/story/26/01/05/1929255/vscode-ide-forks-expose-users-to-recommended-extension-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 20:30:43](https://lobste.rs/s/exv2eq/go_sum_is_not_lockfile) - [go.sum Is Not a Lockfile](https://words.filippo.io/gosum/)
* [2026-01-05, 20:09:00](https://it.slashdot.org/story/26/01/05/1924237/uk-governments-new-pension-portal-operator-tells-users-to-wait-for-ai-before-complaining?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Government&apos;s New Pension Portal Operator Tells Users To Wait for AI Before Complaining](https://it.slashdot.org/story/26/01/05/1924237/uk-governments-new-pension-portal-operator-tells-users-to-wait-for-ai-before-complaining?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 19:30:00](https://it.slashdot.org/story/26/01/05/1915218/google-to-kill-gmails-pop3-mail-fetching?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google To Kill Gmail&apos;s POP3 Mail Fetching](https://it.slashdot.org/story/26/01/05/1915218/google-to-kill-gmails-pop3-mail-fetching?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 18:50:00](https://slashdot.org/story/26/01/05/1825213/microsoft-is-slowly-turning-edge-into-another-copilot-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is Slowly Turning Edge Into Another Copilot App](https://slashdot.org/story/26/01/05/1825213/microsoft-is-slowly-turning-edge-into-another-copilot-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 18:37:00](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss) - [Parkinson&apos;s is the Canary in the Coal Mine Warning Us That Our Environment is Sick](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss)
* [2026-01-05, 18:10:50](https://lobste.rs/s/7d6b5i/go_1_26_interactive_tour) - [Go 1.26 interactive tour](https://antonz.org/go-1-26/)
* [2026-01-05, 18:10:00](https://science.slashdot.org/story/26/01/05/183201/flu-is-relentless-crispr-might-be-able-to-shut-it-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Flu Is Relentless. Crispr Might Be Able to Shut It Down](https://science.slashdot.org/story/26/01/05/183201/flu-is-relentless-crispr-might-be-able-to-shut-it-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 17:38:48](https://lobste.rs/s/0lzrhf/uncloud_self_hosted_cloud_seen_by) - [Uncloud, self hosted Cloud, seen by a developer for developers](https://blog.garambrogne.net/uncloud-en.html)
* [2026-01-05, 17:34:33](https://news.ycombinator.com/item?id=46501894) - [Brave overhauled its Rust adblock engine with FlatBuffers, cutting memory 75%](https://brave.com/privacy-updates/36-adblock-memory-reduction/)
* [2026-01-05, 17:32:56](https://lobste.rs/s/l9gkjo/field_guide_sandboxes_for_ai) - [A field guide to sandboxes for AI](https://www.luiscardoso.dev/blog/sandboxes-for-ai)
* [2026-01-05, 17:20:01](https://news.ycombinator.com/item?id=46501677) - [How Y Combinator made it smart to trust founders](https://elbowgreasegames.substack.com/p/when-good-actors-can-trust-each-other)
* [2026-01-05, 16:47:23](https://news.ycombinator.com/item?id=46501137) - [Show HN: Tailsnitch – A security auditor for Tailscale](https://github.com/Adversis/tailsnitch)
* [2026-01-05, 16:30:38](https://lobste.rs/s/gykpyi/who_owns_memory_part_3_how_big_is_your_type) - [Who Owns the Memory? Part 3: How Big Is your Type?](https://lukefleed.xyz/posts/who-owns-the-memory-pt3/)
* [2026-01-05, 16:20:41](https://lobste.rs/s/fykeur/kelp_new_streaming_log_parser_algorithm) - [Kelp: A New Streaming Log Parser Algorithm](https://www.stonebucklabs.com/blog/kelp-log-parser)
* [2026-01-05, 15:27:10](https://lobste.rs/s/tvtppf/komorebi_financial_breakdown_for_2025) - [komorebi Financial Breakdown for 2025](https://lgug2z.com/articles/komorebi-financial-breakdown-for-2025/)
* [2026-01-05, 15:10:47](https://news.ycombinator.com/item?id=46499646) - [Show HN: DoNotNotify – Log and intelligently block notifications on Android](https://donotnotify.com/)
* [2026-01-05, 14:53:23](https://news.ycombinator.com/item?id=46499425) - [Dealing with abandonware (2024)](https://blog.hris.to/./dealing-with-abandonware.html)
* [2026-01-05, 14:36:12](https://lobste.rs/s/ylawx4/functors_applicatives_monads_scary) - [Functors, Applicatives, and Monads: The Scary Words You Already Understand](https://cekrem.github.io/posts/functors-applicatives-monads-elm/)
* [2026-01-05, 14:25:50](https://lobste.rs/s/seun8j/how_github_monopoly_is_destroying_open) - [How GitHub monopoly is destroying the open source ecosystem](https://ploum.net/2026-01-05-unteaching_github.html)
* [2026-01-05, 13:53:00](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss) - [U.S. Allows TSMC to Import Chipmaking Equipment to its China Fabs](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss)
* [2026-01-05, 13:52:17](https://news.ycombinator.com/item?id=46498735) - [I switched from VSCode to Zed](https://tenthousandmeters.com/blog/i-switched-from-vscode-to-zed/)
* [2026-01-05, 13:28:01](https://lobste.rs/s/2gvk2r/it_s_hard_justify_tahoe_icons) - [It’s hard to justify Tahoe icons](https://tonsky.me/blog/tahoe-icons/)
* [2026-01-05, 11:56:08](https://lobste.rs/s/cqaquz/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/cqaquz/what_are_you_doing_this_week)
* [2026-01-05, 10:44:51](https://lobste.rs/s/bnovba/databases_2025_year_review) - [Databases in 2025: A Year in Review](https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html)
* [2026-01-05, 09:03:00](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss) - [How Do We Hold Companies Accountable for \&quot;Do as I Say, Not as I Do\&quot; Security Practices?](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss)
* [2026-01-05, 07:14:30](https://news.ycombinator.com/item?id=46496103) - [Databases in 2025: A Year in Review](https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html)
* [2026-01-05, 04:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss) - [In 1962, a Geologist Went Into a Cave. 2 Months Later, He&apos;d Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss)
* [2026-01-05, 00:31:11](https://lobste.rs/s/f8mhm9/everything_you_need_know_about_email) - [Everything You Need to Know About Email Encryption in 2026](https://soatok.blog/2026/01/04/everything-you-need-to-know-about-email-encryption-in-2026/)
* [2026-01-04, 23:36:00](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss) - [He Made Beer That&apos;s Also a Vaccine. Now Controversy is Brewing](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss)
* [2026-01-04, 21:18:20](https://lobste.rs/s/k4mejj/21_lessons_from_14_years_at_google) - [21 Lessons From 14 Years at Google](https://addyosmani.com/blog/21-lessons/)
* [2026-01-04, 19:10:31](https://news.ycombinator.com/item?id=46491129) - [Six-decade math puzzle solved by Korean mathematician](https://www.koreaherald.com/article/10648326)
* [2026-01-04, 18:52:00](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss) - [HP-UX Hits End-of-Life](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss)
* [2026-01-04, 15:31:07](https://news.ycombinator.com/item?id=46488883) - [Adding insular script like it&apos;s 1626](https://www.djmurphy.net/blog/clo-gaelach/)
* [2026-01-04, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss) - [Americans Lost $333 Million to Bitcoin ATM Fraud in 2025](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss)
* [2026-01-04, 13:08:12](https://news.ycombinator.com/item?id=46487580) - [Show HN: I replaced Beads with a faster, simpler Markdown-based task tracker](https://github.com/wedow/ticket)
* [2026-01-04, 09:22:00](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss) - [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss)
* [2026-01-04, 08:11:07](https://lobste.rs/s/wewhgh/can_i_finally_start_using_wayland_2026) - [Can I finally start using Wayland in 2026?](https://michael.stapelberg.ch/posts/2026-01-04-wayland-sway-in-2026/)
* [2026-01-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss) - [Ozempic is Changing the Foods Americans Buy](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss)
* [2026-01-03, 23:48:00](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss) - [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss)
* [2026-01-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss) - [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss)
* [2026-01-03, 14:51:07](https://news.ycombinator.com/item?id=46477306) - [JavaScript&apos;s For-Of Loops Are Fast](https://waspdev.com/articles/2026-01-01/javascript-for-of-loops-are-actually-fast)
* [2026-01-03, 14:19:00](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss) - [Start-Up Proposes Scaled Up AI Data Center &apos;Active Radio Cable&apos; Connectivity](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss)
* [2026-01-03, 09:30:00](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss) - [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss)
* [2026-01-03, 04:45:00](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss) - [QNX Releases New Desktop-Focused Image: QNX 8.0 With Xfce on Wayland](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss)
* [2026-01-03, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss) - [For Computational Devices, Talk Isn&apos;t Cheap](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss)
* [2026-01-02, 22:53:53](https://news.ycombinator.com/item?id=46470513) - [The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks (2018)](https://arxiv.org/abs/1803.03635)
* [2026-01-02, 19:18:00](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss) - [FDA Officially Confirms Kava is a Food Under Federal Law](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss)
* [2026-01-02, 15:56:14](https://news.ycombinator.com/item?id=46466027) - [Try to take my position: The best promotion advice I ever got](https://andrew.grahamyooll.com/blog/Try-to-Take-My-Position/)
* [2026-01-02, 14:56:28](https://news.ycombinator.com/item?id=46465335) - [Pebble Round 2](https://repebble.com/blog/pebble-round-2-the-most-stylish-pebble-ever)
* [2026-01-02, 14:35:00](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss) - [Irish Gov’t to Push for European Union to Ban Anonymous Social Media Accounts](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss)
* [2026-01-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss) - [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss)
* [2026-01-02, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss) - [39C3: Multiple Vulnerabilities in GnuPG and Other Cryptographic Tools](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss)
* [2026-01-02, 03:01:50](https://news.ycombinator.com/item?id=46460930) - [Interpreter – Offline screen translator for Japanese retro games](https://github.com/bquenin/interpreter)
* [2026-01-02, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss) - [Funding Agencies Can End Profit-First Science Publishing](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss)
