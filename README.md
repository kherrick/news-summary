# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Open Source

* [Don&apos;t tug on that, you never know what it might be attached to](https://blog.plover.com/2016/07/01/#tmpdir) explores humorous and unexpected software behaviors.

* [A Repository with 44 Years of Unix Evolution](https://www.spinellis.gr/pubs/conf/2015-MSR-Unix-History/html/Spi15c.html) provides an extensive archive of Unix's history and development.

* [SQLite as an Application File Format](https://sqlite.org/appfileformat.html) discusses the versatility of SQLite beyond databases.

* [Bruce Schneier contemplates the impact of AI-authored peer reviews](https://news.slashdot.org/story/25/11/28/139247/major-ai-conference-flooded-with-peer-reviews-written-fully-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) and its potential consequences for academia.

* [Bringing Emacs Support to OCaml&apos;s LSP Server with ocaml-eglot](https://tarides.com/blog/2025-11-27-bringing-emacs-support-to-ocaml-s-lsp-server-with-ocaml-eglot/) dives into enhancing developer tools for OCaml with Emacs integration.

## Science and Environment

* [The mysterious black fungus from Chernobyl that may eat radiation](https://www.bbc.com/future/article/20251125-the-mysterious-black-fungus-from-chernobyl-that-appears-to-eat-radiation) showcases nature&apos;s adaptability to nuclear disaster environments.

* [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) celebrates a milestone for retro gaming and software freedom.

* [First-Ever Full Earth System Simulation Provides New Tool to Understand Climate Change](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss) introduces innovative modeling to predict environmental changes.

## Policy, Ethics, and Society

* [Swedish publishers file police report against Meta&apos;s Zuckerberg for fraud](https://www.sverigesradio.se/artikel/swedish-publishers-file-police-report-against-metas-zuckerberg-for-fraud) highlights ongoing battles regarding platform responsibilities.

* [Violent Conflict Over Water Hit a Record Last Year](https://news.slashdot.org/story/25/11/28/1356212/violent-conflict-over-water-hit-a-record-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) discusses alarming trends connected to resource scarcity.

* [US Patent Office Issues New Guidelines For AI-Assisted Inventions](https://yro.slashdot.org/story/25/11/28/0037205/us-patent-office-issues-new-guidelines-for-ai-assisted-inventions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) outlines regulatory adaptations to advances in AI innovation.

* [Ring&apos;s New Feature Turns Your Doorbell Into a Biometric Spy](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss) raises privacy concerns over new home security features.

* [Canada Rolls Back Climate Rules To Boost Investments](https://news.slashdot.org/story/25/11/28/0042205/canada-rolls-back-climate-rules-to-boost-investments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) explores contentious policies prioritizing development over environmental considerations.

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

* [2025-11-28, 15:59:49](https://lobste.rs/s/0i4chy/don_t_tug_on_you_never_know_what_it_might_be) - [Don&apos;t tug on that, you never know what it might be attached to](https://blog.plover.com/2016/07/01/#tmpdir)
* [2025-11-28, 15:27:49](https://news.ycombinator.com/item?id=46079460) - [Swedish publishers file police report against Meta&apos;s Zuckerberg for fraud](https://www.sverigesradio.se/artikel/swedish-publishers-file-police-report-against-metas-zuckerberg-for-fraud)
* [2025-11-28, 15:00:00](https://news.slashdot.org/story/25/11/28/1356212/violent-conflict-over-water-hit-a-record-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Violent Conflict Over Water Hit a Record Last Year](https://news.slashdot.org/story/25/11/28/1356212/violent-conflict-over-water-hit-a-record-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 14:41:53](https://news.ycombinator.com/item?id=46079067) - [Louvre to hike ticket prices for most non-EU tourists by 45%](https://www.bbc.com/news/articles/clyd4llgrego)
* [2025-11-28, 14:14:25](https://lobste.rs/s/bhoqqp/1_million_dollar_apple_macintosh) - [A $1 Million Dollar Apple Macintosh PowerBook 170](https://www.ebay.ca/itm/326104837538)
* [2025-11-28, 14:08:14](https://news.ycombinator.com/item?id=46078770) - [Petition to formally recognize open source work as civic service in Germany](https://www.openpetition.de/petition/online/anerkennung-von-open-source-arbeit-als-ehrenamt-in-deutschland#petition-main)
* [2025-11-28, 14:00:00](https://news.slashdot.org/story/25/11/28/139247/major-ai-conference-flooded-with-peer-reviews-written-fully-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Major AI Conference Flooded With Peer Reviews Written Fully By AI](https://news.slashdot.org/story/25/11/28/139247/major-ai-conference-flooded-with-peer-reviews-written-fully-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 13:57:54](https://lobste.rs/s/l77zlu/update_on_farphone_s_battery) - [An update on the farphone&apos;s battery](https://far.computer/battery-update/)
* [2025-11-28, 13:21:17](https://news.ycombinator.com/item?id=46078407) - [A trillion dollars (potentially) wasted on gen-AI](https://garymarcus.substack.com/p/a-trillion-dollars-is-a-terrible)
* [2025-11-28, 12:41:32](https://news.ycombinator.com/item?id=46078138) - [A Remarkable Assertion from A16Z](https://nealstephenson.substack.com/p/a-remarkable-assertion-from-a16z)
* [2025-11-28, 12:30:00](https://slashdot.org/story/25/11/28/0135214/why-cant-chatgpt-tell-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Can&apos;t ChatGPT Tell Time?](https://slashdot.org/story/25/11/28/0135214/why-cant-chatgpt-tell-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 12:17:15](https://news.ycombinator.com/item?id=46077992) - [The mysterious black fungus from Chernobyl that may eat radiation](https://www.bbc.com/future/article/20251125-the-mysterious-black-fungus-from-chernobyl-that-appears-to-eat-radiation)
* [2025-11-28, 12:15:29](https://lobste.rs/s/t8afff/is_anyone_using_project_hummingbird) - [Is anyone using Project Hummingbird?](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux/hummingbird)
* [2025-11-28, 12:11:39](https://news.ycombinator.com/item?id=46077964) - [A Tale of Four Fuzzers](https://tigerbeetle.com/blog/2025-11-28-tale-of-four-fuzzers/)
* [2025-11-28, 12:00:35](https://news.ycombinator.com/item?id=46077885) - [Switzerland: Data Protection Officers Impose Broad Cloud Ban for Authorities](https://www.heise.de/en/news/Switzerland-Data-Protection-Officers-Impose-Broad-Cloud-Ban-for-Authorities-11093477.html)
* [2025-11-28, 11:16:06](https://lobste.rs/s/ogf9hk/help_my_java_object_vanished_gc_is_not_at) - [Help, My Java Object Vanished (and the GC is Not at Fault)](https://arraying.de/posts/markword/)
* [2025-11-28, 10:58:18](https://lobste.rs/s/gnpury/fort_knox_for_your_secrets_manage_secrets) - [Fort Knox for your secrets -  Manage secrets with encryption or cloud providers](https://fnox.jdx.dev/guide/what-is-fnox.html)
* [2025-11-28, 10:46:09](https://lobste.rs/s/60v35g/crdt_dictionary_field_guide_conflict) - [The CRDT Dictionary: A Field Guide to Conflict-Free Replicated Data Types](https://www.iankduncan.com/engineering/2025-11-27-crdt-dictionary)
* [2025-11-28, 10:36:08](https://news.ycombinator.com/item?id=46077393) - [EU Council Approves New \&quot;Chat Control\&quot; Mandate Pushing Mass Surveillance](https://reclaimthenet.org/eu-council-approves-new-chat-control-mandate-pushing-mass-surveillance)
* [2025-11-28, 10:01:00](https://it.slashdot.org/story/25/11/28/0118256/aws-introduces-dns-failover-feature-for-its-notoriously-unreliable-us-east-region?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AWS Introduces DNS Failover Feature for Its Notoriously Unreliable US East Region](https://it.slashdot.org/story/25/11/28/0118256/aws-introduces-dns-failover-feature-for-its-notoriously-unreliable-us-east-region?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 09:55:11](https://lobste.rs/s/9rpx3i/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/9rpx3i/what_are_you_doing_this_weekend)
* [2025-11-28, 09:32:38](https://news.ycombinator.com/item?id=46077106) - [A Repository with 44 Years of Unix Evolution](https://www.spinellis.gr/pubs/conf/2015-MSR-Unix-History/html/Spi15c.html)
* [2025-11-28, 09:21:55](https://news.ycombinator.com/item?id=46077038) - [Tech Titans Amass Multimillion-Dollar War Chests to Fight AI Regulation](https://www.wsj.com/tech/ai/tech-titans-amass-multimillion-dollar-war-chests-to-fight-ai-regulation-88c600e1)
* [2025-11-28, 08:45:32](https://lobste.rs/s/ybp9wx/is_matrix_multiplication_ugly) - [Is Matrix Multiplication Ugly?](https://mathenchant.wordpress.com/2025/11/21/is-matrix-multiplication-ugly/)
* [2025-11-28, 08:15:50](https://news.ycombinator.com/item?id=46076642) - [SQLite as an Application File Format](https://sqlite.org/appfileformat.html)
* [2025-11-28, 07:47:50](https://lobste.rs/s/9c4iun/foundation_for_building_tools_on_at) - [A foundation for building tools on the AT Protocol using Unison](https://notes.kaushikc.org/3m6kc5nudgc2x)
* [2025-11-28, 07:31:00](https://it.slashdot.org/story/25/11/28/019235/seven-years-later-airbus-is-still-trying-to-kick-its-microsoft-habit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Seven Years Later, Airbus is Still Trying To Kick Its Microsoft Habit](https://it.slashdot.org/story/25/11/28/019235/seven-years-later-airbus-is-still-trying-to-kick-its-microsoft-habit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 06:44:17](https://lobste.rs/s/ihf3a1/million_ways_die_from_data_race_go) - [A million ways to die from a data race in Go](https://gaultier.github.io/blog/a_million_ways_to_data_race_in_go.html)
* [2025-11-28, 05:52:38](https://news.ycombinator.com/item?id=46075882) - [Show HN: Glasses to detect smart-glasses that have cameras](https://github.com/NullPxl/banrays)
* [2025-11-28, 05:19:45](https://news.ycombinator.com/item?id=46075746) - [How to use Linux vsock for fast VM communication](https://popovicu.com/posts/how-to-use-linux-vsock-for-fast-vm-communication/)
* [2025-11-28, 05:01:00](https://news.slashdot.org/story/25/11/28/0042205/canada-rolls-back-climate-rules-to-boost-investments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada Rolls Back Climate Rules To Boost Investments](https://news.slashdot.org/story/25/11/28/0042205/canada-rolls-back-climate-rules-to-boost-investments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 05:00:00](https://lobste.rs/s/v6ct3o/ml_kem_mythbusting) - [ML-KEM Mythbusting](https://keymaterial.net/2025/11/27/ml-kem-mythbusting/)
* [2025-11-28, 04:53:07](https://news.ycombinator.com/item?id=46075628) - [Tiger Style: Coding philosophy (2024)](https://tigerstyle.dev/)
* [2025-11-28, 04:12:55](https://lobste.rs/s/df9h1t/brief_thoughts_on_recent_cloudflare) - [Brief thoughts on the recent Cloudflare outage](https://surfingcomplexity.blog/2025/11/26/brief-thoughts-on-the-recent-cloudflare-outage/)
* [2025-11-28, 03:45:04](https://news.ycombinator.com/item?id=46075320) - [Pocketbase – open-source realtime back end in 1 file](https://pocketbase.io/)
* [2025-11-28, 02:52:32](https://lobste.rs/s/skdenp/what_s_button) - [What&apos;s in a Button?](https://belkadan.com/blog/2025/11/Whats-in-a-Button/)
* [2025-11-28, 02:30:00](https://yro.slashdot.org/story/25/11/28/0037205/us-patent-office-issues-new-guidelines-for-ai-assisted-inventions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Patent Office Issues New Guidelines For AI-Assisted Inventions](https://yro.slashdot.org/story/25/11/28/0037205/us-patent-office-issues-new-guidelines-for-ai-assisted-inventions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 01:10:00](https://games.slashdot.org/story/25/11/28/0033246/epics-sweeney-says-platforms-should-stop-tagging-games-made-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Epic&apos;s Sweeney Says Platforms Should Stop Tagging Games Made With AI](https://games.slashdot.org/story/25/11/28/0033246/epics-sweeney-says-platforms-should-stop-tagging-games-made-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 00:28:00](https://tech.slashdot.org/story/25/11/28/0028207/social-media-giants-liable-for-financial-scams-under-new-eu-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Social Media Giants Liable For Financial Scams Under New EU Law](https://tech.slashdot.org/story/25/11/28/0028207/social-media-giants-liable-for-financial-scams-under-new-eu-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 00:10:38](https://news.ycombinator.com/item?id=46074362) - [How Charles M Schulz created Charlie Brown and Snoopy (2024)](https://www.bbc.com/culture/article/20241205-how-charles-m-schulz-created-charlie-brown-and-snoopy)
* [2025-11-27, 23:30:11](https://news.ycombinator.com/item?id=46074111) - [Vsora Jotunn-8 5nm European inference chip](https://vsora.com/products/jotunn-8/)
* [2025-11-27, 22:48:44](https://news.ycombinator.com/item?id=46073855) - [250MWh &apos;Sand Battery&apos; to start construction in Finland](https://www.energy-storage.news/250mwh-sand-battery-to-start-construction-in-finland-for-both-heating-and-ancillary-services/)
* [2025-11-27, 22:01:03](https://lobste.rs/s/fynjhj/bauble) - [Bauble](https://bauble.studio/)
* [2025-11-27, 21:00:00](https://slashdot.org/story/25/11/27/2013252/australia-spent-62-million-to-update-its-weather-web-site-and-made-it-worse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia Spent $62 Million To Update Its Weather Web Site and Made It Worse](https://slashdot.org/story/25/11/27/2013252/australia-spent-62-million-to-update-its-weather-web-site-and-made-it-worse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 20:57:47](https://lobste.rs/s/24vb6t/setting_secrets_env_vars) - [Setting secrets in env vars](https://hugovk.dev/blog/2025/secrets-in-env-vars/)
* [2025-11-27, 20:30:43](https://lobste.rs/s/uiueai/bending_emacs_episode_6_overlays) - [Bending Emacs - Episode 6: Overlays](https://xenodium.com/bending-emacs-episode-6-overlays)
* [2025-11-27, 20:00:00](https://science.slashdot.org/story/25/11/27/202228/face-transplants-promised-hope-patients-were-put-through-the-unthinkable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Face Transplants Promised Hope. Patients Were Put Through the Unthinkable](https://science.slashdot.org/story/25/11/27/202228/face-transplants-promised-hope-patients-were-put-through-the-unthinkable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 18:36:20](https://lobste.rs/s/7ketee/same_day_upstream_linux_support_for) - [Same-day upstream Linux support for Snapdragon 8 Elite Gen 5 mobile platform](https://www.qualcomm.com/developer/blog/2025/10/same-day-snapdragon-8-elite-gen-5-upstream-linux-support)
* [2025-11-27, 18:02:00](https://news.slashdot.org/story/25/11/27/1332209/uk-to-tax-electric-cars-by-the-mile-starting-2028?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK To Tax Electric Cars by the Mile Starting 2028](https://news.slashdot.org/story/25/11/27/1332209/uk-to-tax-electric-cars-by-the-mile-starting-2028?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 17:44:55](https://lobste.rs/s/ipk4lg/pointer_pop_quiz) - [Pointer pop quiz](https://dave.cheney.net/2025/11/27/pointer-pop-quiz)
* [2025-11-27, 17:41:20](https://lobste.rs/s/zzy9fy/electron_vs_tauri) - [Electron vs. Tauri](https://www.dolthub.com/blog/2025-11-13-electron-vs-tauri/)
* [2025-11-27, 17:01:00](https://mobile.slashdot.org/story/25/11/27/1255245/androids-new-dual-band-hotspot-mode-pairs-6-ghz-speed-with-24-ghz-compatibility?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android&apos;s New Dual-Band Hotspot Mode Pairs 6 GHz Speed With 2.4 GHz Compatibility](https://mobile.slashdot.org/story/25/11/27/1255245/androids-new-dual-band-hotspot-mode-pairs-6-ghz-speed-with-24-ghz-compatibility?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 16:19:03](https://news.ycombinator.com/item?id=46070668) - [Same-day upstream Linux support for Snapdragon 8 Elite Gen 5](https://www.qualcomm.com/developer/blog/2025/10/same-day-snapdragon-8-elite-gen-5-upstream-linux-support)
* [2025-11-27, 16:01:00](https://tech.slashdot.org/story/25/11/27/095202/defense-contractors-lobby-to-kill-military-right-to-repair-push-pay-per-use-data-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Defense Contractors Lobby To Kill Military Right-to-Repair, Push Pay-Per-Use Data Model](https://tech.slashdot.org/story/25/11/27/095202/defense-contractors-lobby-to-kill-military-right-to-repair-push-pay-per-use-data-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 15:36:56](https://news.ycombinator.com/item?id=46070203) - [GitLab discovers widespread NPM supply chain attack](https://about.gitlab.com/blog/gitlab-discovers-widespread-npm-supply-chain-attack/)
* [2025-11-27, 15:01:00](https://science.slashdot.org/story/25/11/27/0856219/nasa-reduces-flights-on-boeings-starliner-after-botched-astronaut-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Reduces Flights on Boeing&apos;s Starliner After Botched Astronaut Mission](https://science.slashdot.org/story/25/11/27/0856219/nasa-reduces-flights-on-boeings-starliner-after-botched-astronaut-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 14:53:22](https://lobste.rs/s/iro8m3/lowtype_elegant_types_ruby) - [Lowtype: Elegant types in Ruby](https://codeberg.org/Iow/type)
* [2025-11-27, 13:40:20](https://lobste.rs/s/ju12fl/bringing_emacs_support_ocaml_s_lsp_server) - [Bringing Emacs Support to OCaml&apos;s LSP Server with ocaml-eglot](https://tarides.com/blog/2025-11-27-bringing-emacs-support-to-ocaml-s-lsp-server-with-ocaml-eglot/)
* [2025-11-27, 13:29:28](https://lobste.rs/s/cbcksu/unbrickable_pledge) - [The Unbrickable Pledge](https://usetrmnl.com/blog/the-unbrickable-pledge)
* [2025-11-27, 11:10:51](https://news.ycombinator.com/item?id=46068138) - [Show HN: Spikelog – A simple metrics service for scripts, cron jobs, and MVPs](https://spikelog.com)
* [2025-11-27, 09:39:17](https://lobste.rs/s/qbu8jl/lazy_linearity_for_core_functional) - [Lazy Linearity for a Core Functional Language](https://alt-romes.github.io/posts/2025-11-26-lazy-linearity-popl26.html)
* [2025-11-27, 03:26:00](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss) - [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss)
* [2025-11-27, 01:47:36](https://lobste.rs/s/tvkddz/migrating_zig_organization_from_github) - [Migrating The Zig Organization from GitHub to Codeberg](https://ziglang.org/news/migrating-from-github-to-codeberg/)
* [2025-11-26, 22:43:00](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss) - [The Escape Room Challenge: How One Person&apos;s Narcissism Can Undermine a Whole Team](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss)
* [2025-11-26, 17:55:00](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss) - [Mozilla Resolves 21-Year-Old Bug, Adds Full XDG Directory Support](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss)
* [2025-11-26, 13:11:00](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss) - [The Reshoring Initiative - Real Reasons to Bring Jobs Back to USA From Asia](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss)
* [2025-11-26, 08:24:00](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) - [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss)
* [2025-11-26, 03:41:00](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss) - [HP and Dell Disable HEVC Support Built Into Their Laptops’ CPUs](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss)
* [2025-11-25, 22:57:00](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss) - [Is Matrix Multiplication Ugly?](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss)
* [2025-11-25, 18:12:00](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss) - [In 1982, a Physics Joke Gone Wrong Sparked the Invention of the Emoticon](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss)
* [2025-11-25, 13:28:00](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss) - [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss)
* [2025-11-25, 08:41:00](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss) - [I Set a Trap to Catch My Students Cheating With AI and the Results Were Shocking](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss)
* [2025-11-25, 04:00:00](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss) - [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss)
* [2025-11-24, 23:16:00](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss) - [Ring&apos;s New Feature Turns Your Doorbell Into a Biometric Spy](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss)
* [2025-11-24, 21:06:39](https://news.ycombinator.com/item?id=46039317) - [Atuin’s New Runbook Execution Engine](https://blog.atuin.sh/introducing-the-new-runbook-execution-engine/)
* [2025-11-24, 20:15:53](https://news.ycombinator.com/item?id=46038684) - [Implementing Bluetooth LE Audio and Auracast on Linux Systems](https://www.collabora.com/news-and-blog/blog/2025/11/24/implementing-bluetooth-le-audio-and-auracast-on-linux-systems/)
* [2025-11-24, 18:27:00](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss) - [Thieves Want Your iPhone, Not Your Android](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss)
* [2025-11-24, 13:42:00](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss) - [Magician Forgets Password to His Own Hand After RFID Chip Implant](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss)
* [2025-11-24, 12:28:44](https://news.ycombinator.com/item?id=46033386) - [Open (Apache 2.0) TTS model for streaming conversational audio in realtime](https://github.com/nari-labs/dia2)
* [2025-11-24, 10:52:37](https://news.ycombinator.com/item?id=46032623) - [OS Malevich – how we made a system that embodies the idea of simplicity (2017)](https://www.ajax-systems.uz/blog/hub-os-malevich-story/)
* [2025-11-24, 09:51:45](https://news.ycombinator.com/item?id=46032230) - [A fast EDN (Extensible Data Notation) reader written in C11 with SIMD boost](https://github.com/DotFox/edn.c)
* [2025-11-24, 08:53:00](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss) - [First-Ever Full Earth System Simulation Provides New Tool to Understand Climate Change](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss)
* [2025-11-24, 04:09:00](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss) - [Debian Libre Live Images Released for Software Freedom Lovers](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss)
