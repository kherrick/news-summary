# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements and Updates

* [SanDisk Says Goodbye To WD Blue and Black SSDs, Hello To New 'Optimus' Drives](https://hardware.slashdot.org/story/26/01/05/1957206/sandisk-says-goodbye-to-wd-blue-and-black-ssds-hello-to-new-optimus-drives?utm_source=rss1.0mainlinkanon&utm_medium=feed) - SanDisk introduces its new 'Optimus' drives, phasing out the WD Blue and Black SSDs.

* [Boston Dynamics and DeepMind form new AI partnership](https://bostondynamics.com/blog/boston-dynamics-google-deepmind-form-new-ai-partnership/) - Boston Dynamics and Google DeepMind team up for advancements in AI and robotics.

* [Microsoft is Slowly Turning Edge Into Another Copilot App](https://slashdot.org/story/26/01/05/1825213/microsoft-is-slowly-turning-edge-into-another-copilot-app?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft's browser Edge introduces new features, transforming into an AI-driven Copilot application.

* [Brave overhauled its Rust adblock engine with FlatBuffers, cutting memory 75%](https://brave.com/privacy-updates/36-adblock-memory-reduction/) - Brave browser dramatically reduces memory usage with an overhaul of its Rust-based adblock engine.

## Advances and Ideas in Science and Technology

* [Flu Is Relentless. Crispr Might Be Able to Shut It Down](https://science.slashdot.org/story/26/01/05/183201/flu-is-relentless-crispr-might-be-able-to-shut-it-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Scientists explore using Crispr technology to combat the relentless flu virus.

* [Parkinson's is the Canary in the Coal Mine Warning Us That Our Environment is Sick](https://soylentnews.org/article.pl?sid=26/01/02/1618258&from=rss) - New insights link environmental health to the rise of neurodegenerative diseases.

* [A spider web unlike any seen before](https://www.nytimes.com/2025/11/08/science/biggest-spiderweb-sulfur-cave.html) - Researchers discover a massive spider web in a sulfur cave that defies expectations.

## Emerging Social and Economic Trends

* [Murder-suicide case shows OpenAI selectively hides data after users die](https://arstechnica.com/tech-policy/2025/12/openai-refuses-to-say-where-chatgpt-logs-go-when-users-die/) - OpenAI's data handling policies face scrutiny following a high-profile tragedy.

* [People of Dubious Character Are More Likely To Enter Public Service](https://slashdot.org/story/26/01/05/1452249/people-of-dubious-character-are-more-likely-to-enter-public-service?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A new study finds a troubling trend in public service recruitment.

* [As US Communities Start Fighting Back, Many Datacenters are Blocked](https://news.slashdot.org/story/26/01/05/0445216/as-us-communities-start-fighting-back-many-datacenters-are-blocked?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Resistance to massive datacenter construction grows within US communities.

## Tributes and Reflections

* [Sega co-founder David Rosen has died](https://www.theguardian.com/games/2026/jan/05/sega-co-founder-david-rosen-dies) - Obituary highlights the life and legacy of Sega's co-founder David Rosen.

* [21 Lessons From 14 Years at Google](https://addyosmani.com/blog/21-lessons/) - Veteran shares invaluable lessons from over a decade at Google.

* [In 1962, a Geologist Went Into a Cave. 2 Months Later, He'd Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&from=rss) - The story of a geologist's discovery that led to the birth of speleology.

## Industrial and Market Dynamics

* [How GitHub monopoly is destroying the open source ecosystem](https://ploum.net/2026-01-05-unteaching_github.html) - An analysis of GitHub’s impact on the diversity of the open source ecosystem.

* [U.S. Allows TSMC to Import Chipmaking Equipment to its China Fabs](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&from=rss) - The United States makes a notable exception for TSMC's operations in China.

* [Samsung&apos;s CES Concepts Disguise AI Speakers as Turntables and Cassette Players](https://entertainment.slashdot.org/story/26/01/05/1530247/samsungs-ces-concepts-disguise-ai-speakers-as-turntables-and-cassette-players?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Samsung unveils nostalgic designs for its modern AI speakers.

## Innovative Tools and Developments

* [Show HN: WOLS – Open standard for mushroom cultivation tracking](https://github.com/wemush/open-standard) - A new open standard for managing and tracking mushroom cultivation.

* [Stop Forwarding Errors, Start Designing Them](https://fast.github.io/blog/stop-forwarding-errors-start-designing-them/) - Advocating for a better approach to error handling in software design.

* [Show HN: A simulator for engineers transitioning from IC to management](https://apmcommunication.com/scenario/backchannel-vp) - An online tool aimed at helping engineers step into managerial roles.

## Retrospectives and Insights

* [Databases in 2025: A Year in Review](https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html) - Comprehensive overview of database innovations and trends in 2025.

* [Maybe Comments SHOULD Explain 'What' (2017)](https://www.hillelwayne.com/post/what-comments/) - Reconsidering the purpose and content of comments in code.

* [Not Everyone Reads the Room the Same](https://soylentnews.org/article.pl?sid=25/12/31/0148238&from=rss) - Exploration of differing perspectives in communication and understanding.

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

* [2026-01-05, 21:26:00](https://hardware.slashdot.org/story/26/01/05/1957206/sandisk-says-goodbye-to-wd-blue-and-black-ssds-hello-to-new-optimus-drives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SanDisk Says Goodbye To WD Blue and Black SSDs, Hello To New &apos;Optimus&apos; Drives](https://hardware.slashdot.org/story/26/01/05/1957206/sandisk-says-goodbye-to-wd-blue-and-black-ssds-hello-to-new-optimus-drives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 21:06:13](https://news.ycombinator.com/item?id=46504966) - [Boston Dynamics and DeepMind form new AI partnership](https://bostondynamics.com/blog/boston-dynamics-google-deepmind-form-new-ai-partnership/)
* [2026-01-05, 21:05:50](https://news.ycombinator.com/item?id=46504963) - [There were BGP anomalies during the Venezuela blackout](https://loworbitsecurity.com/radar/radar16/)
* [2026-01-05, 20:48:00](https://it.slashdot.org/story/26/01/05/1929255/vscode-ide-forks-expose-users-to-recommended-extension-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VSCode IDE Forks Expose Users To &apos;Recommended Extension&apos; Attacks](https://it.slashdot.org/story/26/01/05/1929255/vscode-ide-forks-expose-users-to-recommended-extension-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 20:24:25](https://lobste.rs/s/a4ywjn/nullbrook_archive) - [Nullbrook Archive](https://nullbrook.org/disks)
* [2026-01-05, 20:13:03](https://news.ycombinator.com/item?id=46504198) - [A Year of Clean Energy Milestones](https://e360.yale.edu/digest/2025-energy-review)
* [2026-01-05, 20:09:00](https://it.slashdot.org/story/26/01/05/1924237/uk-governments-new-pension-portal-operator-tells-users-to-wait-for-ai-before-complaining?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Government&apos;s New Pension Portal Operator Tells Users To Wait for AI Before Complaining](https://it.slashdot.org/story/26/01/05/1924237/uk-governments-new-pension-portal-operator-tells-users-to-wait-for-ai-before-complaining?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 19:41:00](https://news.ycombinator.com/item?id=46503685) - [O-Ring Automation](https://www.nber.org/papers/w34639)
* [2026-01-05, 19:30:00](https://it.slashdot.org/story/26/01/05/1915218/google-to-kill-gmails-pop3-mail-fetching?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google To Kill Gmail&apos;s POP3 Mail Fetching](https://it.slashdot.org/story/26/01/05/1915218/google-to-kill-gmails-pop3-mail-fetching?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 19:23:56](https://news.ycombinator.com/item?id=46503439) - [Refactoring – Not on the backlog (2014)](https://ronjeffries.com/xprog/articles/refactoring-not-on-the-backlog/)
* [2026-01-05, 18:55:37](https://news.ycombinator.com/item?id=46503006) - [Pipe Dreams – The life and times of Yahoo Pipes (2023)](https://retool.com/pipes)
* [2026-01-05, 18:50:00](https://slashdot.org/story/26/01/05/1825213/microsoft-is-slowly-turning-edge-into-another-copilot-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is Slowly Turning Edge Into Another Copilot App](https://slashdot.org/story/26/01/05/1825213/microsoft-is-slowly-turning-edge-into-another-copilot-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 18:45:14](https://lobste.rs/s/6x0nut/change_is_root_all_evil_bugs) - [Change is the root of all (evil) bugs](https://fhur.me/posts/2026/change-is-the-root-of-all-evil-bugs)
* [2026-01-05, 18:37:00](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss) - [Parkinson&apos;s is the Canary in the Coal Mine Warning Us That Our Environment is Sick](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss)
* [2026-01-05, 18:35:17](https://news.ycombinator.com/item?id=46502736) - [Gatekeepers of Law: Inside the Westlaw and LexisNexis Duopoly](https://www.thebignewsletter.com/p/gatekeepers-of-law-inside-the-westlaw)
* [2026-01-05, 18:30:29](https://news.ycombinator.com/item?id=46502665) - [Show HN: WOLS – Open standard for mushroom cultivation tracking](https://github.com/wemush/open-standard)
* [2026-01-05, 18:29:28](https://news.ycombinator.com/item?id=46502652) - [Utopian Scholastic](https://wol.fm/blog/utopian-scholastic.html)
* [2026-01-05, 18:10:50](https://lobste.rs/s/7d6b5i/go_1_26_interactive_tour) - [Go 1.26 interactive tour](https://antonz.org/go-1-26/)
* [2026-01-05, 18:10:00](https://science.slashdot.org/story/26/01/05/183201/flu-is-relentless-crispr-might-be-able-to-shut-it-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Flu Is Relentless. Crispr Might Be Able to Shut It Down](https://science.slashdot.org/story/26/01/05/183201/flu-is-relentless-crispr-might-be-able-to-shut-it-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 18:00:32](https://news.ycombinator.com/item?id=46502239) - [Sega co-founder David Rosen has died](https://www.theguardian.com/games/2026/jan/05/sega-co-founder-david-rosen-dies)
* [2026-01-05, 17:46:51](https://news.ycombinator.com/item?id=46502051) - [Show HN: Open-Source 8-Ch BCI Board (ESP32 and ADS1299 and OpenBCI GUI)](https://github.com/Cerelog-ESP-EEG/ESP-EEG)
* [2026-01-05, 17:38:48](https://lobste.rs/s/0lzrhf/uncloud_self_hosted_cloud_seen_by) - [Uncloud, self hosted Cloud, seen by a developer for developers](https://blog.garambrogne.net/uncloud-en.html)
* [2026-01-05, 17:34:33](https://news.ycombinator.com/item?id=46501894) - [Brave overhauled its Rust adblock engine with FlatBuffers, cutting memory 75%](https://brave.com/privacy-updates/36-adblock-memory-reduction/)
* [2026-01-05, 17:32:56](https://lobste.rs/s/l9gkjo/field_guide_sandboxes_for_ai) - [A field guide to sandboxes for AI](https://www.luiscardoso.dev/blog/sandboxes-for-ai)
* [2026-01-05, 17:30:00](https://news.slashdot.org/story/26/01/05/1730218/the-college-backlash-is-a-mirage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The College Backlash is a Mirage&apos;](https://news.slashdot.org/story/26/01/05/1730218/the-college-backlash-is-a-mirage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 17:20:01](https://news.ycombinator.com/item?id=46501677) - [How Y Combinator made it smart to trust founders](https://elbowgreasegames.substack.com/p/when-good-actors-can-trust-each-other)
* [2026-01-05, 17:19:33](https://news.ycombinator.com/item?id=46501665) - [So, you want to chunk really fast?](https://minha.sh/posts/so,-you-want-to-chunk-really-fast)
* [2026-01-05, 16:47:23](https://news.ycombinator.com/item?id=46501137) - [Show HN: Tailsnitch – A security auditor for Tailscale](https://github.com/Adversis/tailsnitch)
* [2026-01-05, 16:41:00](https://tech.slashdot.org/story/26/01/05/166232/influencers-and-onlyfans-models-dominate-us-extraordinary-artist-visas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Influencers and OnlyFans Models Dominate US &apos;Extraordinary&apos; Artist Visas](https://tech.slashdot.org/story/26/01/05/166232/influencers-and-onlyfans-models-dominate-us-extraordinary-artist-visas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 16:30:38](https://lobste.rs/s/gykpyi/who_owns_memory_part_3_how_big_is_your_type) - [Who Owns the Memory? Part 3: How Big Is your Type?](https://lukefleed.xyz/posts/who-owns-the-memory-pt3/)
* [2026-01-05, 16:20:41](https://lobste.rs/s/fykeur/kelp_new_streaming_log_parser_algorithm) - [Kelp: A New Streaming Log Parser Algorithm](https://www.stonebucklabs.com/blog/kelp-log-parser)
* [2026-01-05, 16:01:00](https://entertainment.slashdot.org/story/26/01/05/1530247/samsungs-ces-concepts-disguise-ai-speakers-as-turntables-and-cassette-players?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung&apos;s CES Concepts Disguise AI Speakers as Turntables and Cassette Players](https://entertainment.slashdot.org/story/26/01/05/1530247/samsungs-ces-concepts-disguise-ai-speakers-as-turntables-and-cassette-players?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 15:49:27](https://lobste.rs/s/zyumo7/detect_go_s_silent_arithmetic_bugs_with_go) - [Detect Go’s silent arithmetic bugs with go-panikint](https://blog.trailofbits.com/2025/12/31/detect-gos-silent-arithmetic-bugs-with-go-panikint/)
* [2026-01-05, 15:34:40](https://news.ycombinator.com/item?id=46499983) - [Murder-suicide case shows OpenAI selectively hides data after users die](https://arstechnica.com/tech-policy/2025/12/openai-refuses-to-say-where-chatgpt-logs-go-when-users-die/)
* [2026-01-05, 15:34:14](https://news.ycombinator.com/item?id=46499976) - [RevisionDojo, a YC startup, is running astroturfing campaigns targeting kids](https://news.ycombinator.com/item?id=46499976)
* [2026-01-05, 15:27:10](https://lobste.rs/s/tvtppf/komorebi_financial_breakdown_for_2025) - [komorebi Financial Breakdown for 2025](https://lgug2z.com/articles/komorebi-financial-breakdown-for-2025/)
* [2026-01-05, 15:21:00](https://slashdot.org/story/26/01/05/1452249/people-of-dubious-character-are-more-likely-to-enter-public-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [People of Dubious Character Are More Likely To Enter Public Service](https://slashdot.org/story/26/01/05/1452249/people-of-dubious-character-are-more-likely-to-enter-public-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 15:13:59](https://news.ycombinator.com/item?id=46499694) - [Show HN: A simulator for engineers transitioning from IC to management](https://apmcommunication.com/scenario/backchannel-vp)
* [2026-01-05, 15:10:47](https://news.ycombinator.com/item?id=46499646) - [Show HN: DoNotNotify – log and intelligently block notifications on Android](https://donotnotify.com/)
* [2026-01-05, 14:40:00](https://developers.slashdot.org/story/26/01/05/1431212/stack-overflow-went-from-200000-monthly-questions-to-nearly-zero?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stack Overflow Went From 200,000 Monthly Questions To Nearly Zero](https://developers.slashdot.org/story/26/01/05/1431212/stack-overflow-went-from-200000-monthly-questions-to-nearly-zero?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 14:36:12](https://lobste.rs/s/ylawx4/functors_applicatives_monads_scary) - [Functors, Applicatives, and Monads: The Scary Words You Already Understand](https://cekrem.github.io/posts/functors-applicatives-monads-elm/)
* [2026-01-05, 14:25:50](https://lobste.rs/s/seun8j/how_github_monopoly_is_destroying_open) - [How GitHub monopoly is destroying the open source ecosystem](https://ploum.net/2026-01-05-unteaching_github.html)
* [2026-01-05, 14:04:00](https://mobile.slashdot.org/story/26/01/05/144211/samsung-co-ceo-says-soaring-memory-chip-prices-will-inevitably-impact-smartphone-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Co-CEO Says Soaring Memory Chip Prices Will &apos;Inevitably&apos; Impact Smartphone Costs](https://mobile.slashdot.org/story/26/01/05/144211/samsung-co-ceo-says-soaring-memory-chip-prices-will-inevitably-impact-smartphone-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 13:53:00](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss) - [U.S. Allows TSMC to Import Chipmaking Equipment to its China Fabs](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss)
* [2026-01-05, 13:52:17](https://news.ycombinator.com/item?id=46498735) - [I switched from VSCode to Zed](https://tenthousandmeters.com/blog/i-switched-from-vscode-to-zed/)
* [2026-01-05, 13:45:50](https://news.ycombinator.com/item?id=46498658) - [Singularity Rootkit: SELinux bypass and netlink filter (ss/conntrack hidden)](https://github.com/MatheuZSecurity/Singularity)
* [2026-01-05, 13:28:01](https://lobste.rs/s/2gvk2r/it_s_hard_justify_tahoe_icons) - [It’s hard to justify Tahoe icons](https://tonsky.me/blog/tahoe-icons/)
* [2026-01-05, 12:34:00](https://news.slashdot.org/story/26/01/05/0445216/as-us-communities-start-fighting-back-many-datacenters-are-blocked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As US Communities Start Fighting Back, Many Datacenters are Blocked](https://news.slashdot.org/story/26/01/05/0445216/as-us-communities-start-fighting-back-many-datacenters-are-blocked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 12:09:03](https://lobste.rs/s/ik17dv/rate_limiting_bursty_workloads) - [Rate limiting bursty workloads](https://jean-lopes.github.io/blog/rate-limiting-bursty-workloads.html)
* [2026-01-05, 11:56:08](https://lobste.rs/s/cqaquz/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/cqaquz/what_are_you_doing_this_week)
* [2026-01-05, 11:51:42](https://news.ycombinator.com/item?id=46497712) - [It&apos;s hard to justify Tahoe icons](https://tonsky.me/blog/tahoe-icons/)
* [2026-01-05, 11:15:17](https://lobste.rs/s/uvx98g/using_ebpf_load_balance_traffic_across) - [Using eBPF to load-balance traffic across UDP sockets with Go](https://vincent.bernat.ch/en/blog/2026-reuseport-ebpf-go)
* [2026-01-05, 10:44:51](https://lobste.rs/s/bnovba/databases_2025_year_review) - [Databases in 2025: A Year in Review](https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html)
* [2026-01-05, 09:03:00](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss) - [How Do We Hold Companies Accountable for \&quot;Do as I Say, Not as I Do\&quot; Security Practices?](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss)
* [2026-01-05, 08:34:00](https://entertainment.slashdot.org/story/26/01/05/0313224/2025-ends-with-release-of-j-r-r-tolkeins-unpublished-story?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2025 Ends With Release of J. R. R. Tolkein&apos;s Unpublished Story](https://entertainment.slashdot.org/story/26/01/05/0313224/2025-ends-with-release-of-j-r-r-tolkeins-unpublished-story?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 08:28:53](https://lobste.rs/s/ba1o6s/decorative_cryptography) - [Decorative Cryptography](https://dlp.rip/decorative-cryptography)
* [2026-01-05, 07:14:30](https://news.ycombinator.com/item?id=46496103) - [Databases in 2025: A Year in Review](https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html)
* [2026-01-05, 07:06:22](https://news.ycombinator.com/item?id=46496054) - [A spider web unlike any seen before](https://www.nytimes.com/2025/11/08/science/biggest-spiderweb-sulfur-cave.html)
* [2026-01-05, 05:35:00](https://tech.slashdot.org/story/26/01/05/0520224/workstation-owner-sadly-marks-the-end-of-life-for-hp-ux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Workstation Owner Sadly Marks the End-of-Life for HP-UX](https://tech.slashdot.org/story/26/01/05/0520224/workstation-owner-sadly-marks-the-end-of-life-for-hp-ux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 04:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss) - [In 1962, a Geologist Went Into a Cave. 2 Months Later, He&apos;d Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss)
* [2026-01-05, 00:31:11](https://lobste.rs/s/f8mhm9/everything_you_need_know_about_email) - [Everything You Need to Know About Email Encryption in 2026](https://soatok.blog/2026/01/04/everything-you-need-to-know-about-email-encryption-in-2026/)
* [2026-01-04, 23:36:00](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss) - [He Made Beer That&apos;s Also a Vaccine. Now Controversy is Brewing](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss)
* [2026-01-04, 22:10:07](https://lobste.rs/s/eaxaac/stop_forwarding_errors_start_designing) - [Stop Forwarding Errors, Start Designing Them](https://fast.github.io/blog/stop-forwarding-errors-start-designing-them/)
* [2026-01-04, 21:18:20](https://lobste.rs/s/k4mejj/21_lessons_from_14_years_at_google) - [21 Lessons From 14 Years at Google](https://addyosmani.com/blog/21-lessons/)
* [2026-01-04, 18:52:00](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss) - [HP-UX Hits End-of-Life](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss)
* [2026-01-04, 15:38:55](https://lobste.rs/s/b19ydv/audio_dongles_ghost_usb_1) - [Audio dongles and the ghost of USB 1](http://epenguin.imalone.co.uk/2025/06/audio-dongles-and-ghost-of-usb-1.html)
* [2026-01-04, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss) - [Americans Lost $333 Million to Bitcoin ATM Fraud in 2025](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss)
* [2026-01-04, 14:03:22](https://lobste.rs/s/garkqn/maybe_comments_should_explain_what_2017) - [Maybe Comments SHOULD Explain &apos;What&apos; (2017)](https://www.hillelwayne.com/post/what-comments/)
* [2026-01-04, 13:29:51](https://lobste.rs/s/n9tev4/who_owns_memory_part_2_who_calls_free) - [Who Owns the Memory? Part 2: Who Calls Free?](https://lukefleed.xyz/posts/who-owns-the-memory-pt2/)
* [2026-01-04, 10:47:31](https://lobste.rs/s/gxiqwv/saying_goodbye_servers_at_our_physical) - [Saying goodbye to the servers at our physical datacenter](https://stackoverflow.blog/2025/12/24/the-great-unracking-saying-goodbye-to-the-servers-at-our-physical-datacenter/)
* [2026-01-04, 09:22:00](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss) - [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss)
* [2026-01-04, 08:11:07](https://lobste.rs/s/wewhgh/can_i_finally_start_using_wayland_2026) - [Can I finally start using Wayland in 2026?](https://michael.stapelberg.ch/posts/2026-01-04-wayland-sway-in-2026/)
* [2026-01-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss) - [Ozempic is Changing the Foods Americans Buy](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss)
* [2026-01-03, 23:48:00](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss) - [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss)
* [2026-01-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss) - [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss)
* [2026-01-03, 14:50:58](https://news.ycombinator.com/item?id=46477305) - [Zeit v1](https://xn--gckvb8fzb.com/zeit-v1/)
* [2026-01-03, 14:19:00](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss) - [Start-Up Proposes Scaled Up AI Data Center &apos;Active Radio Cable&apos; Connectivity](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss)
* [2026-01-03, 09:30:00](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss) - [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss)
* [2026-01-03, 04:45:00](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss) - [QNX Releases New Desktop-Focused Image: QNX 8.0 With Xfce on Wayland](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss)
* [2026-01-03, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss) - [For Computational Devices, Talk Isn&apos;t Cheap](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss)
* [2026-01-02, 19:18:00](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss) - [FDA Officially Confirms Kava is a Food Under Federal Law](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss)
* [2026-01-02, 15:56:14](https://news.ycombinator.com/item?id=46466027) - [Try to take my position: The best promotion advice I ever got](https://andrew.grahamyooll.com/blog/Try-to-Take-My-Position/)
* [2026-01-02, 14:56:28](https://news.ycombinator.com/item?id=46465335) - [Pebble Round 2](https://repebble.com/blog/pebble-round-2-the-most-stylish-pebble-ever)
* [2026-01-02, 14:35:00](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss) - [Irish Gov’t to Push for European Union to Ban Anonymous Social Media Accounts](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss)
* [2026-01-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss) - [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss)
* [2026-01-02, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss) - [39C3: Multiple Vulnerabilities in GnuPG and Other Cryptographic Tools](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss)
* [2026-01-02, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss) - [Funding Agencies Can End Profit-First Science Publishing](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss)
* [2026-01-01, 19:38:00](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss) - [Aging Immune Cells May Rewrite Their Own DNA to Stay Inflammatory](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss)
* [2026-01-01, 14:46:00](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss) - [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss)
* [2026-01-01, 14:41:00](https://news.ycombinator.com/item?id=46454488) - [Darwin the Man of His Times](https://aethermug.com/posts/darwin-the-man-of-his-times)
* [2026-01-01, 10:03:00](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss) - [D7VK Reaches Version 1.1 and Adds New Frontend and Experimental Direct3D 6 Support](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss)
* [2026-01-01, 10:02:00](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss) - [Study Reveals Just How Much AI Slop is on YouTube](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss)
* [2026-01-01, 05:15:00](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss) - [US Insurance Giant Aflac Says Hackers Stole Personal and Health Data of 22.6 Million People](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss)
* [2026-01-01, 00:37:00](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss) - [Not Everyone Reads the Room the Same](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss)
* [2026-01-01, 00:00:00](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss) - [Happy New Year 2026 !](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss)
