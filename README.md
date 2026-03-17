# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Technology Advancements

* [Ryugu asteroid samples contain all DNA and RNA building blocks](https://phys.org/news/2026-03-ryugu-asteroid-samples-dna-rna.html) ([comments](https://news.ycombinator.com/item?id=47411480))

* [Magnetars Drag Spacetime to Power Superluminous Supernovae](https://soylentnews.org/article.pl?sid=26/03/15/1351230&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/15/1351230&from=rss))

## Innovative Open Source and Tools

* [Leanstral: Open-Source foundation for trustworthy vibe-coding | Mistral AI](https://mistral.ai/news/leanstral) ([comments](https://lobste.rs/s/tcn4gl/leanstral_open_source_foundation_for))

* [Building a Shell](https://healeycodes.com/building-a-shell) ([comments](https://news.ycombinator.com/item?id=47410532))

* [Reverse-engineering Viktor and making it Open Source](https://matijacniacki.com/blog/openviktor) ([comments](https://news.ycombinator.com/item?id=47409885))

## Artificial Intelligence and AI Applications

* [New 'Vibe Coded' AI Translation Tool Splits the Video Game Preservation Community](https://developers.slashdot.org/story/26/03/16/2125242/new-vibe-coded-ai-translation-tool-splits-the-video-game-preservation-community?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://developers.slashdot.org/story/26/03/16/2125242/new-vibe-coded-ai-translation-tool-splits-the-video-game-preservation-community?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Meta’s renewed commitment to jemalloc](https://engineering.fb.com/2026/03/02/data-infrastructure/investing-in-infrastructure-metas-renewed-commitment-to-jemalloc/) ([comments](https://news.ycombinator.com/item?id=47402640))

## Social Impact and Policy

* [Bills Would Ban Liability Lawsuits For Climate Change](https://yro.slashdot.org/story/26/03/16/2222200/bills-would-ban-liability-lawsuits-for-climate-change?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://yro.slashdot.org/story/26/03/16/2222200/bills-would-ban-liability-lawsuits-for-climate-change?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [The Silent Struggle: Anxiety in Software Development](https://caio.ca/blog/anxiety-software-development.html) ([comments](https://lobste.rs/s/3sxwnf/silent_struggle_anxiety_software))

## Space and Future Tech

* [SpaceX’s 2Africa undersea cable delayed due to politics](https://soylentnews.org/article.pl?sid=26/03/15/0111236&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/15/0111236&from=rss))

* [Gitana 18: the new flying Ultim trimaran](https://www.boatnews.com/story/50717/gitana-18-radical-technical-choices-for-the-new-flying-ultim-trimaran) ([comments](https://news.ycombinator.com/item?id=47360293))

## Health and Well-being

* [A proposal to classify happiness as a psychiatric disorder](https://pmc.ncbi.nlm.nih.gov/articles/PMC1376114/) ([comments](https://news.ycombinator.com/item?id=47412097))

* [New Study Challenges Notion That Aging Means Decline, Finds Many Older Adults Improve Over Time](https://soylentnews.org/article.pl?sid=26/03/14/1740249&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/14/1740249&from=rss))

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

* [2026-03-17, 13:03:38](https://news.ycombinator.com/item?id=47412097) - [A proposal to classify happiness as a psychiatric disorder](https://pmc.ncbi.nlm.nih.gov/articles/PMC1376114/)
* [2026-03-17, 12:56:59](https://news.ycombinator.com/item?id=47412023) - [Silicon Valley&apos;s \&quot;Pronatalists\&quot; Killed WFH. The Strait of Hormuz Brought It Back](https://www.governance.fyi/p/silicon-valleys-pronatalists-killed)
* [2026-03-17, 12:07:40](https://lobste.rs/s/tcn4gl/leanstral_open_source_foundation_for) - [Leanstral: Open-Source foundation for trustworthy vibe-coding | Mistral AI](https://mistral.ai/news/leanstral)
* [2026-03-17, 12:01:05](https://news.ycombinator.com/item?id=47411480) - [Ryugu asteroid samples contain all DNA and RNA building blocks](https://phys.org/news/2026-03-ryugu-asteroid-samples-dna-rna.html)
* [2026-03-17, 11:58:40](https://lobste.rs/s/jtp62p/yes_all_longest_regex_matches_linear_time) - [yes, all longest regex matches in linear time is possible](https://iev.ee/blog/all-longest-regex-matches-in-linear-time/)
* [2026-03-17, 11:37:19](https://lobste.rs/s/wqy4el/self_hosted_search) - [Self Hosted Search](https://blog.kemonine.info/blog/2026-03-10-self-hosted-search/)
* [2026-03-17, 11:32:26](https://lobste.rs/s/sfvqfr/ways_seeing_web) - [Ways of Seeing the Web](https://inkdroid.org/2026/03/16/seeing-the-web/)
* [2026-03-17, 11:00:00](https://yro.slashdot.org/story/26/03/16/2222200/bills-would-ban-liability-lawsuits-for-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bills Would Ban Liability Lawsuits For Climate Change](https://yro.slashdot.org/story/26/03/16/2222200/bills-would-ban-liability-lawsuits-for-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-17, 10:53:54](https://lobste.rs/s/3hojx1/age_gating_isn_t_about_kids_it_s_about) - [Age-Gating Isn’t About Kids, It’s About Control](https://www.eff.org/deeplinks/2026/03/rep-finke-was-right-age-gating-isnt-about-kids-its-about-control)
* [2026-03-17, 10:39:48](https://news.ycombinator.com/item?id=47410870) - [Reddit User Uncovers Who Is Behind Meta&apos;s $2B Lobbying for Age Verification Tech](https://www.gadgetreview.com/reddit-user-uncovers-who-is-behind-metas-2b-lobbying-for-invasive-age-verification-tech)
* [2026-03-17, 10:19:55](https://lobste.rs/s/xr2lv8/linkedin_speak_was_added_kagi_translate) - [\&quot;LinkedIn Speak\&quot; was added to Kagi Translate](https://bsky.app/profile/kagi.com/post/3mh7v3y6m2c2d)
* [2026-03-17, 09:53:53](https://news.ycombinator.com/item?id=47410542) - [Kagi Small Web](https://kagi.com/smallweb/)
* [2026-03-17, 09:52:34](https://news.ycombinator.com/item?id=47410532) - [Building a Shell](https://healeycodes.com/building-a-shell)
* [2026-03-17, 08:38:00](https://soylentnews.org/article.pl?sid=26/03/15/1351230&amp;from=rss) - [Magnetars Drag Spacetime to Power Superluminous Supernovae](https://soylentnews.org/article.pl?sid=26/03/15/1351230&amp;from=rss)
* [2026-03-17, 08:15:34](https://news.ycombinator.com/item?id=47409885) - [Reverse-engineering Viktor and making it Open Source](https://matijacniacki.com/blog/openviktor)
* [2026-03-17, 07:00:00](https://hardware.slashdot.org/story/26/03/16/2212248/hydropower-line-from-quebec-could-power-a-million-nyc-homes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hydropower Line From Quebec Could Power a Million NYC Homes](https://hardware.slashdot.org/story/26/03/16/2212248/hydropower-line-from-quebec-could-power-a-million-nyc-homes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-17, 06:26:20](https://lobste.rs/s/wa5ghq/few_notes_about_macbook_neo) - [A few notes about the MacBook Neo](https://morrick.me/archives/10286)
* [2026-03-17, 05:32:09](https://lobste.rs/s/3sxwnf/silent_struggle_anxiety_software) - [The Silent Struggle: Anxiety in Software Development](https://caio.ca/blog/anxiety-software-development.html)
* [2026-03-17, 05:13:50](https://lobste.rs/s/gjmri9/memory_allocation_strategies) - [Memory Allocation Strategies](https://www.gingerbill.org/series/memory-allocation-strategies/)
* [2026-03-17, 04:58:19](https://lobste.rs/s/elfva4/every_layer_review_makes_you_10x_slower) - [Every layer of review makes you 10x slower](https://apenwarr.ca/log/20260316)
* [2026-03-17, 04:39:42](https://news.ycombinator.com/item?id=47408703) - [Kagi Translate now supports LinkedIn Speak as an output language](https://translate.kagi.com/?from=en&amp;to=LinkedIn+speak)
* [2026-03-17, 03:57:00](https://soylentnews.org/article.pl?sid=26/03/15/1339231&amp;from=rss) - [Musk Fails To Block California Data Disclosure Law He Fears Will Ruin XAI](https://soylentnews.org/article.pl?sid=26/03/15/1339231&amp;from=rss)
* [2026-03-17, 03:52:05](https://lobste.rs/s/3ezrbn/road_not_taken_world_where_ipv4_evolved) - [The Road Not Taken: A World Where IPv4 Evolved](https://owl.billpg.com/ipv4x/)
* [2026-03-17, 03:46:34](https://lobste.rs/s/7olqjk/jepsen_mariadb_galera_cluster_12_1_2) - [Jepsen: MariaDB Galera Cluster 12.1.2](https://jepsen.io/analyses/mariadb-galera-cluster-12.1.2)
* [2026-03-17, 03:30:00](https://developers.slashdot.org/story/26/03/16/2125242/new-vibe-coded-ai-translation-tool-splits-the-video-game-preservation-community?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New &apos;Vibe Coded&apos; AI Translation Tool Splits the Video Game Preservation Community](https://developers.slashdot.org/story/26/03/16/2125242/new-vibe-coded-ai-translation-tool-splits-the-video-game-preservation-community?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-17, 03:20:36](https://news.ycombinator.com/item?id=47408205) - [Every layer of review makes you 10x slower](https://apenwarr.ca/log/20260316)
* [2026-03-17, 02:20:55](https://lobste.rs/s/wskuet/building_software_protection_system) - [building a software protection system from first principles](https://seg6.space/posts/software-protection-system/)
* [2026-03-17, 00:40:32](https://lobste.rs/s/hh3pyy/oxyde_orm_django_like_pydantic_driven) - [Oxyde ORM - Django-like Pydantic-driven Async ORM](https://oxyde.fatalyst.dev/0.5/)
* [2026-03-17, 00:02:35](https://news.ycombinator.com/item?id=47406779) - [US SEC preparing to scrap quarterly reporting requirement](https://www.reuters.com/business/finance/us-sec-preparing-eliminate-quarterly-reporting-requirement-wsj-says-2026-03-16/)
* [2026-03-16, 23:09:00](https://soylentnews.org/article.pl?sid=26/03/15/1330233&amp;from=rss) - [11-Month Old Russian Outfit Claims It Has Developed 16-Core and 32-Core Processors, Flaunts Cyrillic](https://soylentnews.org/article.pl?sid=26/03/15/1330233&amp;from=rss)
* [2026-03-16, 23:00:00](https://hardware.slashdot.org/story/26/03/16/2136229/pokemon-go-players-unknowingly-trained-delivery-robots-with-30-billion-images?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Pokemon Go&apos; Players Unknowingly Trained Delivery Robots With 30 Billion Images](https://hardware.slashdot.org/story/26/03/16/2136229/pokemon-go-players-unknowingly-trained-delivery-robots-with-30-billion-images?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-16, 22:49:25](https://lobste.rs/s/p6ihyc/avian_physics_0_6) - [Avian Physics 0.6](https://joonaa.dev/blog/12/avian-0-6)
* [2026-03-16, 22:16:34](https://lobste.rs/s/h6ntut/typenix_full_typing_for_nix_based_on) - [typenix: Full typing for Nix based on TypeScript](https://github.com/ryanrasti/typenix)
* [2026-03-16, 22:00:00](https://news.slashdot.org/story/26/03/16/2116252/nvidia-bets-on-openclaw-but-adds-a-security-layer-via-nemoclaw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Bets On OpenClaw, But Adds a Security Layer Via NemoClaw](https://news.slashdot.org/story/26/03/16/2116252/nvidia-bets-on-openclaw-but-adds-a-security-layer-via-nemoclaw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-16, 21:33:41](https://lobste.rs/s/eoj99q/gemini_protocol_2026) - [The Gemini Protocol in 2026](https://kevinboone.me/gemini_2026.html)
* [2026-03-16, 21:01:10](https://lobste.rs/s/1br6fz/free_airport_ride_exchange_platform) - [Free airport ride exchange platform](https://airportswap.com/)
* [2026-03-16, 21:00:00](https://news.slashdot.org/story/26/03/16/210211/polymarket-gamblers-threaten-to-kill-journalist-over-iran-missile-story?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Polymarket Gamblers Threaten To Kill Journalist Over Iran Missile Story](https://news.slashdot.org/story/26/03/16/210211/polymarket-gamblers-threaten-to-kill-journalist-over-iran-missile-story?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-16, 20:59:49](https://news.ycombinator.com/item?id=47404798) - [Beyond has dropped “meat” from its name and expanded its high-protein drink line](https://plantbasednews.org/news/alternative-protein/beyond-meat-not-the-moment-rebrand/)
* [2026-03-16, 20:59:40](https://news.ycombinator.com/item?id=47404796) - [Leanstral: Open-source agent for trustworthy coding and formal proof engineering](https://mistral.ai/news/leanstral)
* [2026-03-16, 20:00:00](https://yro.slashdot.org/story/26/03/16/182217/encyclopedia-britannica-sues-openai-for-copyright-trademark-infringement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Encyclopedia Britannica Sues OpenAI For Copyright, Trademark Infringement](https://yro.slashdot.org/story/26/03/16/182217/encyclopedia-britannica-sues-openai-for-copyright-trademark-infringement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-16, 19:00:00](https://entertainment.slashdot.org/story/26/03/16/1751207/apple-launches-airpods-max-2-with-better-anc-live-translation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Launches AirPods Max 2 With Better ANC, Live Translation](https://entertainment.slashdot.org/story/26/03/16/1751207/apple-launches-airpods-max-2-with-better-anc-live-translation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-16, 18:33:47](https://lobste.rs/s/mnkmag/when_perfection_is_table_stakes) - [When perfection is table stakes](https://lukeplant.me.uk/blog/posts/when-perfection-is-table-stakes/)
* [2026-03-16, 18:26:00](https://soylentnews.org/article.pl?sid=26/03/15/1328200&amp;from=rss) - [Google Fiber Will be Sold to Private Equity Firm and Merge With Cable Company](https://soylentnews.org/article.pl?sid=26/03/15/1328200&amp;from=rss)
* [2026-03-16, 18:12:32](https://news.ycombinator.com/item?id=47402640) - [Meta’s renewed commitment to jemalloc](https://engineering.fb.com/2026/03/02/data-infrastructure/investing-in-infrastructure-metas-renewed-commitment-to-jemalloc/)
* [2026-03-16, 18:00:00](https://meta.slashdot.org/story/26/03/16/1743259/meta-signs-27-billion-ai-infrastructure-deal-with-nebius?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Signs $27 Billion AI Infrastructure Deal With Nebius](https://meta.slashdot.org/story/26/03/16/1743259/meta-signs-27-billion-ai-infrastructure-deal-with-nebius?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-16, 17:17:57](https://news.ycombinator.com/item?id=47401879) - [The “small web” is bigger than you might think](https://kevinboone.me/small_web_is_big.html)
* [2026-03-16, 17:13:27](https://news.ycombinator.com/item?id=47401809) - [The American Healthcare Conundrum](https://github.com/rexrodeo/american-healthcare-conundrum)
* [2026-03-16, 17:07:11](https://lobste.rs/s/bpeg4o/gleam_v1_15_0_released) - [Gleam v1.15.0 released](https://gleam.run/news/upgrading-hex-security/)
* [2026-03-16, 17:00:00](https://news.slashdot.org/story/26/03/16/1548242/data-centers-overtake-offices-in-us-construction-spending-shift?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Data Centers Overtake Offices In US Construction-Spending Shift](https://news.slashdot.org/story/26/03/16/1548242/data-centers-overtake-offices-in-us-construction-spending-shift?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-16, 16:02:25](https://lobste.rs/s/gahsrj/hacking_xbox_one) - [Hacking the Xbox One](https://www.youtube.com/watch?v=FTFn4UZsA5U)
* [2026-03-16, 16:00:00](https://yro.slashdot.org/story/26/03/16/0332239/court-rules-tcls-qled-tvs-arent-truly-qled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Court Rules TCL&apos;s &apos;QLED&apos; TVs Aren&apos;t Truly QLED](https://yro.slashdot.org/story/26/03/16/0332239/court-rules-tcls-qled-tvs-arent-truly-qled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-16, 15:02:32](https://lobste.rs/s/8is8ya/reviewing_large_changes_with_jujutsu) - [Reviewing large changes with Jujutsu](https://ben.gesoff.uk/posts/reviewing-large-changes-with-jj/)
* [2026-03-16, 15:00:00](https://entertainment.slashdot.org/story/26/03/16/032254/animated-firefly-reboot-in-development-with-nathan-fillion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Animated &apos;Firefly&apos; Reboot In Development With Nathan Fillion](https://entertainment.slashdot.org/story/26/03/16/032254/animated-firefly-reboot-in-development-with-nathan-fillion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-16, 13:37:00](https://soylentnews.org/article.pl?sid=26/03/15/1319251&amp;from=rss) - [Why the World&apos;s Militaries Are Scrambling to Create Their Own Starlink](https://soylentnews.org/article.pl?sid=26/03/15/1319251&amp;from=rss)
* [2026-03-16, 13:22:03](https://news.ycombinator.com/item?id=47398681) - [AirPods Max 2](https://www.apple.com/airpods-max/)
* [2026-03-16, 13:09:58](https://news.ycombinator.com/item?id=47398534) - [My Journey to a reliable and enjoyable locally hosted voice assistant (2025)](https://community.home-assistant.io/t/my-journey-to-a-reliable-and-enjoyable-locally-hosted-voice-assistant/944860)
* [2026-03-16, 11:36:00](https://hardware.slashdot.org/story/26/03/16/0320222/sodium-ion-battery-tested-for-grid-scale-storage-in-wisconsin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sodium-Ion Battery Tested for Grid-Scale Storage in Wisconsin](https://hardware.slashdot.org/story/26/03/16/0320222/sodium-ion-battery-tested-for-grid-scale-storage-in-wisconsin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-16, 11:23:14](https://news.ycombinator.com/item?id=47397574) - [Why I love FreeBSD](https://it-notes.dragas.net/2026/03/16/why-i-love-freebsd/)
* [2026-03-16, 08:55:00](https://soylentnews.org/article.pl?sid=26/03/15/0111236&amp;from=rss) - [Iran Conflict Delays Meta&apos;s 2Africa Undersea Cable Project — Cable Layer Declares Force Majeure](https://soylentnews.org/article.pl?sid=26/03/15/0111236&amp;from=rss)
* [2026-03-16, 08:07:29](https://news.ycombinator.com/item?id=47396264) - [Starlink Mini as a failover](https://www.jackpearce.co.uk/posts/starlink-failover/)
* [2026-03-16, 08:03:03](https://lobste.rs/s/bzllmf/why_i_love_freebsd) - [Why I Love FreeBSD](https://it-notes.dragas.net/2026/03/16/why-i-love-freebsd/)
* [2026-03-16, 07:34:00](https://news.slashdot.org/story/26/03/16/0255231/android-epic-and-whats-really-behind-googles-existential-threat-to-f-droid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android, Epic, and What&apos;s Really Behind Google&apos;s &apos;Existential&apos; Threat to F-Droid](https://news.slashdot.org/story/26/03/16/0255231/android-epic-and-whats-really-behind-googles-existential-threat-to-f-droid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-16, 06:16:34](https://lobste.rs/s/yhc5ug/try_not_get_scammed_while_looking_for_work) - [Try not to get scammed while looking for work](https://trysound.io/try-not-to-get-scammed-while-looking-for-work/)
* [2026-03-16, 05:43:00](https://news.slashdot.org/story/26/03/16/0539240/fsf-threatens-anthropic-over-infringed-copyright-share-your-llms-freely?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF Threatens Anthropic Over Infringed Copyright:  Share Your LLMs Freely](https://news.slashdot.org/story/26/03/16/0539240/fsf-threatens-anthropic-over-infringed-copyright-share-your-llms-freely?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-16, 04:07:00](https://soylentnews.org/article.pl?sid=26/03/15/016219&amp;from=rss) - [Nvidia Is Reportedly Planning Its Own Open Source OpenClaw Competitor](https://soylentnews.org/article.pl?sid=26/03/15/016219&amp;from=rss)
* [2026-03-15, 23:35:00](https://soylentnews.org/article.pl?sid=26/03/14/1755235&amp;from=rss) - [How Much Sleep Do Teens Get? Six-Seven Hours](https://soylentnews.org/article.pl?sid=26/03/14/1755235&amp;from=rss)
* [2026-03-15, 18:51:00](https://soylentnews.org/article.pl?sid=26/03/14/1750228&amp;from=rss) - [AI Medical Advice - Both Sides](https://soylentnews.org/article.pl?sid=26/03/14/1750228&amp;from=rss)
* [2026-03-15, 14:00:00](https://soylentnews.org/article.pl?sid=26/03/14/1740249&amp;from=rss) - [New Study Challenges Notion That Aging Means Decline, Finds Many Older Adults Improve Over Time](https://soylentnews.org/article.pl?sid=26/03/14/1740249&amp;from=rss)
* [2026-03-15, 13:59:00](https://lobste.rs/s/pk2axu/separating_wayland_compositor_window) - [Separating the Wayland Compositor and Window Manager](https://isaacfreund.com/blog/river-window-management/)
* [2026-03-15, 09:20:00](https://soylentnews.org/article.pl?sid=26/03/14/0932244&amp;from=rss) - [OpenAI Wants Everyone To Have A Monthly AI Bill](https://soylentnews.org/article.pl?sid=26/03/14/0932244&amp;from=rss)
* [2026-03-15, 04:37:00](https://soylentnews.org/article.pl?sid=26/03/14/0928215&amp;from=rss) - [Why Are Some Animal and Human Signals Honest, While Others Are Deceptive?](https://soylentnews.org/article.pl?sid=26/03/14/0928215&amp;from=rss)
* [2026-03-14, 22:52:00](https://soylentnews.org/article.pl?sid=26/03/13/0443231&amp;from=rss) - [A 1,300-Pound NASA Satellite Just Made a Fiery Return to Earth](https://soylentnews.org/article.pl?sid=26/03/13/0443231&amp;from=rss)
* [2026-03-14, 18:06:00](https://soylentnews.org/article.pl?sid=26/03/13/0438246&amp;from=rss) - [Americans Are Quietly Installing DIY Solar to Fight Skyrocketing Energy Bills](https://soylentnews.org/article.pl?sid=26/03/13/0438246&amp;from=rss)
* [2026-03-14, 13:19:00](https://soylentnews.org/article.pl?sid=26/03/13/0430253&amp;from=rss) - [Adobe Plunges to 7 Year Low on CEO Resignation, Muted Forecast](https://soylentnews.org/article.pl?sid=26/03/13/0430253&amp;from=rss)
* [2026-03-14, 08:38:00](https://soylentnews.org/article.pl?sid=26/03/13/0421208&amp;from=rss) - [14,000 Routers Are Infected by Malware That&apos;s Highly Resistant to Takedowns](https://soylentnews.org/article.pl?sid=26/03/13/0421208&amp;from=rss)
* [2026-03-14, 03:51:00](https://soylentnews.org/article.pl?sid=26/03/13/0413211&amp;from=rss) - [As Frank Yeary Retires From Intel, the Company Picks an Engineer to Chair its Board](https://soylentnews.org/article.pl?sid=26/03/13/0413211&amp;from=rss)
* [2026-03-13, 23:02:00](https://soylentnews.org/article.pl?sid=26/03/12/1111206&amp;from=rss) - [After Outages, Amazon to Make Senior Engineers Sign Off on AI-Assisted Changes](https://soylentnews.org/article.pl?sid=26/03/12/1111206&amp;from=rss)
* [2026-03-13, 19:31:56](https://news.ycombinator.com/item?id=47368660) - [Gummy Geometry](https://newkrok.github.io/nape-js/examples.html?open=soft-body&amp;mode=3d&amp;outline=0)
* [2026-03-13, 18:19:00](https://soylentnews.org/article.pl?sid=26/03/12/1023220&amp;from=rss) - [Online Intelligence Dashboards (Aka, More AI Slop?)](https://soylentnews.org/article.pl?sid=26/03/12/1023220&amp;from=rss)
* [2026-03-13, 17:34:45](https://news.ycombinator.com/item?id=47367298) - [Pyodide: a Python distribution based on WebAssembly](https://github.com/pyodide/pyodide)
* [2026-03-13, 16:35:44](https://news.ycombinator.com/item?id=47366616) - [Font Smuggler – copy hidden brand fonts into Google Docs](https://brianmoore.com/fontsmuggler/)
* [2026-03-13, 16:20:00](https://news.ycombinator.com/item?id=47366435) - [The unlikely story of Teardown Multiplayer](https://blog.voxagon.se/2026/03/13/teardown-multiplayer.html)
* [2026-03-13, 14:53:10](https://news.ycombinator.com/item?id=47365299) - [Claude Tips for 3D Work](https://www.davesnider.com/posts/claude-3d)
* [2026-03-13, 13:37:00](https://soylentnews.org/article.pl?sid=26/03/12/1011221&amp;from=rss) - [LEGO&apos;s 0.002mm Specification and It&apos;s Implications for Manufacturing](https://soylentnews.org/article.pl?sid=26/03/12/1011221&amp;from=rss)
* [2026-03-13, 13:35:12](https://news.ycombinator.com/item?id=47364260) - [Show HN: Oxyde – Pydantic-native async ORM with a Rust core](https://github.com/mr-fatalyst/oxyde)
* [2026-03-13, 11:44:27](https://news.ycombinator.com/item?id=47363133) - [Sci-Fi Short Film “There Is No Antimemetics Division” [video]](https://www.youtube.com/watch?v=3v8AsTHfAG0)
* [2026-03-13, 08:52:00](https://soylentnews.org/article.pl?sid=26/03/12/107259&amp;from=rss) - [Infinity Train Got 14.5 MWh Battery That, Ideally, Never Needs Charging](https://soylentnews.org/article.pl?sid=26/03/12/107259&amp;from=rss)
* [2026-03-13, 06:00:07](https://news.ycombinator.com/item?id=47361151) - [Fatal Core Dump Game](https://www.robopenguins.com/core-dump-game/)
* [2026-03-13, 04:09:00](https://soylentnews.org/article.pl?sid=26/03/11/2010247&amp;from=rss) - [Ig Nobels Ceremony Moves to Europe Over Security Concerns](https://soylentnews.org/article.pl?sid=26/03/11/2010247&amp;from=rss)
* [2026-03-13, 03:16:08](https://news.ycombinator.com/item?id=47360293) - [Gitana 18: the new flying Ultim trimaran](https://www.boatnews.com/story/50717/gitana-18-radical-technical-choices-for-the-new-flying-ultim-trimaran)
