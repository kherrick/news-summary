# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Datavizta: environmental impacts of digital technology](https://datavizta.boavizta.org/) examines the ecological cost of digital tech, presenting data visualizations to increase awareness. [Comments](https://lobste.rs/s/gyfsaq/datavizta_environmental_impacts)

* [InventWood Is About To Mass-Produce Wood That&apos;s Stronger Than Steel](https://science.slashdot.org/story/25/05/14/0049202/inventwood-is-about-to-mass-produce-wood-thats-stronger-than-steel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) highlights a pioneering material innovation set to revolutionize industries. [Comments](https://news.ycombinator.com/item?id=43982777)

## Digital Advancements and AI

* [ZJIT has been merged into Ruby](https://railsatscale.com/2025-05-14-merge-zjit/) describes a significant advancement in Ruby&apos;s performance capabilities via its JIT compiler integration. [Comments](https://lobste.rs/s/w9eg2a/zjit_has_been_merged_into_ruby)

* [Meta Threatens To Pull Facebook And Instagram Out Of Nigeria Over $290 Million Fine](https://tech.slashdot.org/story/25/05/13/2226214/meta-threatens-to-pull-facebook-and-instagram-out-of-nigeria-over-290-million-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) details the social media giant&apos;s legal struggles and its threat to exit the Nigerian market. [Comments](https://news.ycombinator.com/item?id=43972425)

## Environment and Energy

* [GM Says New Battery Chemistry Will Enable 400-Mile Range EVs](https://hardware.slashdot.org/story/25/05/14/0056248/gm-says-new-battery-chemistry-will-enable-400-mile-range-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) showcases promising breakthroughs in electric vehicle battery technology. [Comments](https://news.ycombinator.com/item?id=43981680)

* [Urine-Powered Electrolysis Systems Offer Energy-Efficient Green Hydrogen Production](https://soylentnews.org/article.pl?sid=25/05/11/1335239&amp;from=rss) investigates sustainable solutions for hydrogen generation. [Comments](https://lobste.rs/s/b4o1h8/programming_language_made_for_me)

## Programming and Software

* [Lock-Free Rust: How to Build a Rollercoaster While It’s on Fire](https://yeet.cx/blog/lock-free-rust/) dives into advanced concurrency programming challenges and solutions in Rust. [Comments](https://lobste.rs/s/zcpnge/lock_free_rust_how_build_rollercoaster)

* [FlowG - Distributed Systems without Raft (part 2)](https://david-delassus.medium.com/distributed-systems-without-raft-part-2-81ca31eae4db) explores innovative alternatives to the Raft consensus protocol. [Comments](https://lobste.rs/s/xmvjel/flowg_distributed_systems_without_raft)

## Society and Ethics

* [The Viking Age is Undergoing a Revisionist Transformation](https://soylentnews.org/article.pl?sid=25/05/13/0234223&amp;from=rss) delves into the ongoing shift in historical interpretations of Viking society. [Comments](https://lobste.rs/s/nu19ul/apple_unveils_powerful_accessibility)

* [‘Tone Deaf’: US Tech Company Responsible for Global IT Outage to Cut Jobs and Use AI](https://soylentnews.org/article.pl?sid=25/05/11/1335201&amp;from=rss) critiques the ethics of risk management and automation in tech. [Comments](https://lobste.rs/s/c5mpmx/accessibility_update)

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

* [2025-05-14, 12:44:49](https://lobste.rs/s/gyfsaq/datavizta_environmental_impacts) - [Datavizta: environmental impacts of digital technology](https://datavizta.boavizta.org/)
* [2025-05-14, 12:19:54](https://lobste.rs/s/w9eg2a/zjit_has_been_merged_into_ruby) - [ZJIT has been merged into Ruby](https://railsatscale.com/2025-05-14-merge-zjit/)
* [2025-05-14, 12:17:57](https://lobste.rs/s/rmx28b/running_modified_containers_with_podman) - [Running modified containers with podman](https://www.die-welt.net/2025/05/running-modified-containers-with-podman/)
* [2025-05-14, 11:59:41](https://news.ycombinator.com/item?id=43983455) - [E-COM: The time the USPS spent $40M subsidizing junk (e)mail](https://buttondown.com/blog/the-e-com-story)
* [2025-05-14, 11:53:10](https://lobste.rs/s/xmvjel/flowg_distributed_systems_without_raft) - [FlowG - Distributed Systems without Raft (part 2)](https://david-delassus.medium.com/distributed-systems-without-raft-part-2-81ca31eae4db)
* [2025-05-14, 11:14:40](https://lobste.rs/s/gkpmli/if_ai_is_so_good_at_coding_where_are_open) - [If AI is so good at coding … where are the open source contributions?](https://pivot-to-ai.com/2025/05/13/if-ai-is-so-good-at-coding-where-are-the-open-source-contributions/)
* [2025-05-14, 11:11:42](https://lobste.rs/s/mt7ijj/database_row_did_didn_t_exist) - [The Database Row That Did and Didn&apos;t Exist](http://mistys-internet.website/blog/blog/2025/05/13/the-database-row-that-did-and-didnt-exist)
* [2025-05-14, 10:44:33](https://news.ycombinator.com/item?id=43982941) - [Show HN: acmsg (automated commit message generator)](https://github.com/quinneden/acmsg)
* [2025-05-14, 10:37:00](https://soylentnews.org/article.pl?sid=25/05/13/0245205&amp;from=rss) - [You Think Ransomware is Bad Now? Wait Until It Infects CPUs](https://soylentnews.org/article.pl?sid=25/05/13/0245205&amp;from=rss)
* [2025-05-14, 10:11:56](https://news.ycombinator.com/item?id=43982784) - [UK&apos;s Ancient Tree Inventory](https://ati.woodlandtrust.org.uk/)
* [2025-05-14, 10:10:00](https://news.ycombinator.com/item?id=43982777) - [Databricks and Neon](https://www.databricks.com/blog/databricks-neon)
* [2025-05-14, 10:00:00](https://science.slashdot.org/story/25/05/14/0049202/inventwood-is-about-to-mass-produce-wood-thats-stronger-than-steel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [InventWood Is About To Mass-Produce Wood That&apos;s Stronger Than Steel](https://science.slashdot.org/story/25/05/14/0049202/inventwood-is-about-to-mass-produce-wood-thats-stronger-than-steel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 08:55:16](https://lobste.rs/s/watrbl/avian_physics_0_3) - [Avian Physics 0.3](https://joonaa.dev/blog/08/avian-0-3)
* [2025-05-14, 08:54:07](https://lobste.rs/s/msvjge/ai_is_like_crappy_consultant) - [AI Is Like a Crappy Consultant](https://lukekanies.com/writing/ai-is-like-a-crappy-consultant/)
* [2025-05-14, 08:29:35](https://lobste.rs/s/wvkq5b/20k_bounty_offered_for_optimizing_rust) - [$20K Bounty Offered for Optimizing Rust Code in rav1d AV1 Decoder](https://www.memorysafety.org/blog/rav1d-perf-bounty/)
* [2025-05-14, 08:29:16](https://lobste.rs/s/1muhyf/minus_100_points) - [Minus 100 points](https://learn.microsoft.com/en-us/archive/blogs/ericgu/minus-100-points)
* [2025-05-14, 07:02:54](https://news.ycombinator.com/item?id=43981680) - [How to Build a Smartwatch: Picking a Chip](https://ericmigi.com/blog/how-to-build-a-smartwatch-picking-a-chip/)
* [2025-05-14, 07:00:00](https://hardware.slashdot.org/story/25/05/14/0056248/gm-says-new-battery-chemistry-will-enable-400-mile-range-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GM Says New Battery Chemistry Will Enable 400-Mile Range EVs](https://hardware.slashdot.org/story/25/05/14/0056248/gm-says-new-battery-chemistry-will-enable-400-mile-range-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 06:37:01](https://lobste.rs/s/yixtsg/my_djangocon_europe_2025) - [My DjangoCon Europe 2025](https://www.paulox.net/2025/05/13/my-djangocon-europe-2025/)
* [2025-05-14, 05:51:00](https://soylentnews.org/article.pl?sid=25/05/13/0234223&amp;from=rss) - [The Viking Age is Undergoing a Revisionist Transformation](https://soylentnews.org/article.pl?sid=25/05/13/0234223&amp;from=rss)
* [2025-05-14, 05:38:00](https://news.ycombinator.com/item?id=43981170) - [The recently lost file upload feature in the Nextcloud app for Android](https://nextcloud.com/blog/nextcloud-android-file-upload-issue-google/)
* [2025-05-14, 05:30:00](https://yro.slashdot.org/story/25/05/14/001249/a-ripe-target-for-identity-thieves-prisoners-on-death-row?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Ripe Target For Identity Thieves: Prisoners on Death Row](https://yro.slashdot.org/story/25/05/14/001249/a-ripe-target-for-identity-thieves-prisoners-on-death-row?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 04:33:21](https://news.ycombinator.com/item?id=43980845) - [Bus stops here: Shanghai lets riders design their own routes](https://www.sixthtone.com/news/1017072)
* [2025-05-14, 04:19:00](https://news.ycombinator.com/item?id=43980760) - [Writing that changed how I think about programming languages](https://bernsteinbear.com/blog/pl-writing/)
* [2025-05-14, 03:30:00](https://mobile.slashdot.org/story/25/05/13/2247256/fcc-threatens-echostar-licenses-for-spectrum-thats-ripe-for-sharing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Threatens EchoStar Licenses For Spectrum That&apos;s &apos;Ripe For Sharing&apos;](https://mobile.slashdot.org/story/25/05/13/2247256/fcc-threatens-echostar-licenses-for-spectrum-thats-ripe-for-sharing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 01:55:59](https://news.ycombinator.com/item?id=43979916) - [Replicube: A puzzle game about writing code to create shapes](https://store.steampowered.com/app/3401490/Replicube/)
* [2025-05-14, 01:25:00](https://tech.slashdot.org/story/25/05/13/2342248/google-tests-ai-search-on-its-homepage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Tests AI Search on Its Homepage](https://tech.slashdot.org/story/25/05/13/2342248/google-tests-ai-search-on-its-homepage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 01:04:00](https://soylentnews.org/article.pl?sid=25/05/13/020213&amp;from=rss) - [Nvidia NeMo Microservices to Embed AI Agents in Workflows](https://soylentnews.org/article.pl?sid=25/05/13/020213&amp;from=rss)
* [2025-05-14, 00:45:00](https://yro.slashdot.org/story/25/05/13/2234225/qatars-400-million-jet-for-trump-is-a-gold-plated-security-nightmare?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Qatar&apos;s $400 Million Jet For Trump Is a Gold-Plated Security Nightmare&apos;](https://yro.slashdot.org/story/25/05/13/2234225/qatars-400-million-jet-for-trump-is-a-gold-plated-security-nightmare?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-14, 00:02:00](https://tech.slashdot.org/story/25/05/13/2226214/meta-threatens-to-pull-facebook-and-instagram-out-of-nigeria-over-290-million-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Threatens To Pull Facebook And Instagram Out Of Nigeria Over $290 Million Fine](https://tech.slashdot.org/story/25/05/13/2226214/meta-threatens-to-pull-facebook-and-instagram-out-of-nigeria-over-290-million-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 23:34:07](https://news.ycombinator.com/item?id=43979063) - [Fingers wrinkle the same way every time they’re in the water too long](https://www.binghamton.edu/news/story/5547/do-your-fingers-wrinkle-the-same-way-every-time-youre-in-the-water-too-long-new-research-says-yes)
* [2025-05-13, 23:20:00](https://news.slashdot.org/story/25/05/13/228206/audible-is-giving-publishers-ai-tools-to-quickly-make-more-audiobooks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Audible Is Giving Publishers AI Tools To Quickly Make More Audiobooks](https://news.slashdot.org/story/25/05/13/228206/audible-is-giving-publishers-ai-tools-to-quickly-make-more-audiobooks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 22:40:00](https://hardware.slashdot.org/story/25/05/13/213239/students-robot-obliterates-4x4-rubiks-cube-world-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Student&apos;s Robot Obliterates 4x4 Rubik&apos;s Cube World Record](https://hardware.slashdot.org/story/25/05/13/213239/students-robot-obliterates-4x4-rubiks-cube-world-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 22:25:29](https://news.ycombinator.com/item?id=43978435) - [Flattening Rust’s learning curve](https://corrode.dev/blog/flattening-rusts-learning-curve/)
* [2025-05-13, 22:15:30](https://news.ycombinator.com/item?id=43978357) - [Type-constrained code generation with language models](https://arxiv.org/abs/2504.09246)
* [2025-05-13, 22:02:00](https://mobile.slashdot.org/story/25/05/13/2056206/google-wants-to-make-stolen-android-phones-basically-unsellable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Wants To Make Stolen Android Phones Basically Unsellable](https://mobile.slashdot.org/story/25/05/13/2056206/google-wants-to-make-stolen-android-phones-basically-unsellable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 21:50:54](https://lobste.rs/s/9a0x7c/penultimate_conditional_syntax) - [The penultimate conditional syntax](https://dotat.at/@/2025-05-13-if-is.html)
* [2025-05-13, 21:20:00](https://tech.slashdot.org/story/25/05/13/2045258/nextcloud-cries-foul-over-google-play-store-app-rejection?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nextcloud Cries Foul Over Google Play Store App Rejection](https://tech.slashdot.org/story/25/05/13/2045258/nextcloud-cries-foul-over-google-play-store-app-rejection?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 20:40:00](https://politics.slashdot.org/story/25/05/13/2033237/republicans-try-to-cram-decade-long-ai-regulation-ban-into-budget-reconciliation-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Republicans Try To Cram Decade-Long AI Regulation Ban Into Budget Reconciliation Bill](https://politics.slashdot.org/story/25/05/13/2033237/republicans-try-to-cram-decade-long-ai-regulation-ban-into-budget-reconciliation-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 20:19:00](https://soylentnews.org/article.pl?sid=25/05/13/0140243&amp;from=rss) - [Wikipedia Launches Legal Challenge Against UK Government](https://soylentnews.org/article.pl?sid=25/05/13/0140243&amp;from=rss)
* [2025-05-13, 20:09:54](https://news.ycombinator.com/item?id=43977147) - [Using obscure graph theory to solve programming languages problems](https://reasonablypolymorphic.com/blog/solving-lcsa/)
* [2025-05-13, 19:48:04](https://news.ycombinator.com/item?id=43976895) - [Build real-time knowledge graph for documents with LLM](https://cocoindex.io/blogs/knowledge-graph-for-docs/)
* [2025-05-13, 19:48:01](https://lobste.rs/s/kpkczj/first_year_free_threaded_python) - [The first year of free-threaded Python](https://labs.quansight.org/blog/free-threaded-one-year-recap)
* [2025-05-13, 19:17:54](https://news.ycombinator.com/item?id=43976557) - [Airbnb is in midlife crisis mode](https://www.wired.com/story/airbnb-is-in-midlife-crisis-mode-reinvention-app-services/)
* [2025-05-13, 19:10:00](https://it.slashdot.org/story/25/05/13/1839205/usenix-sunsets-annual-technical-conference-after-30-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [USENIX Sunsets Annual Technical Conference After 30 Years](https://it.slashdot.org/story/25/05/13/1839205/usenix-sunsets-annual-technical-conference-after-30-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 18:35:00](https://tech.slashdot.org/story/25/05/13/1835253/google-says-over-1-billion-rcs-messages-sent-in-the-us-daily?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says Over 1 Billion RCS Messages Sent in the US Daily](https://tech.slashdot.org/story/25/05/13/1835253/google-says-over-1-billion-rcs-messages-sent-in-the-us-daily?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 18:33:29](https://lobste.rs/s/g48gjs/cracking_dave_buster_s_anomaly) - [Cracking The Dave &amp; Buster’s Anomaly](https://rambo.codes/posts/2025-05-12-cracking-the-dave-and-busters-anomaly)
* [2025-05-13, 17:26:38](https://news.ycombinator.com/item?id=43975423) - [Show HN: HelixDB – Open-source vector-graph database for AI applications (Rust)](https://github.com/HelixDB/helix-db/)
* [2025-05-13, 17:21:00](https://it.slashdot.org/story/25/05/13/177238/office-apps-on-windows-10-no-longer-tied-to-october-2025-end-of-support-date?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Office Apps on Windows 10 No Longer Tied To October 2025 End-of-Support Date](https://it.slashdot.org/story/25/05/13/177238/office-apps-on-windows-10-no-longer-tied-to-october-2025-end-of-support-date?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 16:57:44](https://lobste.rs/s/v2zmv3/writing_changed_how_i_think_about_pl) - [Writing that changed how I think about PL](https://bernsteinbear.com/blog/pl-writing/)
* [2025-05-13, 16:44:51](https://news.ycombinator.com/item?id=43974891) - [Branch Privilege Injection: Exploiting branch predictor race conditions](https://comsec.ethz.ch/research/microarch/branch-privilege-injection/)
* [2025-05-13, 15:35:00](https://soylentnews.org/article.pl?sid=25/05/13/0133228&amp;from=rss) - [Charting the Future of Biotechnology and AI](https://soylentnews.org/article.pl?sid=25/05/13/0133228&amp;from=rss)
* [2025-05-13, 15:27:47](https://news.ycombinator.com/item?id=43974005) - [It Awaits Your Experiments](https://www.rifters.com/crawl/?p=11511)
* [2025-05-13, 15:01:09](https://news.ycombinator.com/item?id=43973721) - [PDF to Text, a challenging problem](https://www.marginalia.nu/log/a_119_pdf/)
* [2025-05-13, 14:47:30](https://lobste.rs/s/nu19ul/apple_unveils_powerful_accessibility) - [Apple unveils powerful accessibility features coming later this year](https://www.apple.com/newsroom/2025/05/apple-unveils-powerful-accessibility-features-coming-later-this-year/)
* [2025-05-13, 14:30:35](https://news.ycombinator.com/item?id=43973395) - [Google is building its own DeX: First look at Android&apos;s Desktop Mode](https://www.androidauthority.com/android-desktop-mode-leak-3550321/)
* [2025-05-13, 14:24:21](https://lobste.rs/s/elnrrz/librewolf_browser) - [LibreWolf Browser](https://librewolf.net/)
* [2025-05-13, 13:55:12](https://lobste.rs/s/ubqsls/policy_transience) - [Policy of transience](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/transience/)
* [2025-05-13, 13:04:06](https://lobste.rs/s/0er0sj/firefox_moves_github) - [Firefox moves to GitHub](https://github.com/mozilla-firefox/firefox)
* [2025-05-13, 12:56:42](https://news.ycombinator.com/item?id=43972425) - [Launch HN: Miyagi (YC W25) turns YouTube videos into online, interactive courses](https://news.ycombinator.com/item?id=43972425)
* [2025-05-13, 11:35:49](https://lobste.rs/s/o4rqpo/preventing_outages_with_pkill_s_new) - [Preventing outages with pkill&apos;s new --require-handler flag](https://chrisdown.name/2025/05/13/safer-signal-sending-with-pkill-require-handler.html)
* [2025-05-13, 11:28:49](https://news.ycombinator.com/item?id=43971716) - [Multiple security issues in GNU Screen](https://www.openwall.com/lists/oss-security/2025/05/12/1)
* [2025-05-13, 11:20:33](https://lobste.rs/s/c5mpmx/accessibility_update) - [An accessibility update](https://blog.gtk.org/2025/05/12/an-accessibility-update/)
* [2025-05-13, 10:46:00](https://soylentnews.org/article.pl?sid=25/05/12/1123248&amp;from=rss) - [75 Zero-Days Exploited in 2024 With Focus on Enterprise Tech](https://soylentnews.org/article.pl?sid=25/05/12/1123248&amp;from=rss)
* [2025-05-13, 10:31:09](https://news.ycombinator.com/item?id=43971464) - [The world could run on older hardware if software optimization was a priority](https://twitter.com/ID_AA_Carmack/status/1922100771392520710)
* [2025-05-13, 08:34:08](https://lobste.rs/s/b4o1h8/programming_language_made_for_me) - [A programming language made for me](https://zylinski.se/posts/a-programming-language-for-me/)
* [2025-05-13, 07:29:19](https://lobste.rs/s/zcpnge/lock_free_rust_how_build_rollercoaster) - [Lock-Free Rust: How to Build a Rollercoaster While It’s on Fire](https://yeet.cx/blog/lock-free-rust/)
* [2025-05-13, 07:01:04](https://lobste.rs/s/bxgmid/fx_v36_json_terminal_viewer) - [Fx v36 - JSON terminal viewer](https://github.com/antonmedv/fx/releases/tag/36.0.0)
* [2025-05-13, 06:01:00](https://soylentnews.org/article.pl?sid=25/05/12/1114249&amp;from=rss) - [People Who Use AI at Work Are Perceived by Colleagues as Lazier and Less Competent, Study Finds](https://soylentnews.org/article.pl?sid=25/05/12/1114249&amp;from=rss)
* [2025-05-13, 01:16:00](https://soylentnews.org/article.pl?sid=25/05/11/1440209&amp;from=rss) - [China&apos;s Daring Cloud Sample Mission to Venus](https://soylentnews.org/article.pl?sid=25/05/11/1440209&amp;from=rss)
* [2025-05-12, 19:33:00](https://soylentnews.org/article.pl?sid=25/05/11/1444208&amp;from=rss) - [Reverse Engineering the 386 Processor&apos;s Prefetch Queue Circuitry](https://soylentnews.org/article.pl?sid=25/05/11/1444208&amp;from=rss)
* [2025-05-12, 16:35:42](https://news.ycombinator.com/item?id=43964896) - [The Internet 1997–2021](https://www.opte.org/the-internet)
* [2025-05-12, 15:46:00](https://soylentnews.org/article.pl?sid=25/05/11/1335239&amp;from=rss) - [Urine-Powered Electrolysis Systems Offer Energy-Efficient Green Hydrogen Production](https://soylentnews.org/article.pl?sid=25/05/11/1335239&amp;from=rss)
* [2025-05-12, 14:20:45](https://lobste.rs/s/ysluw7/audio_stack_is_crime_scene) - [The Audio Stack Is a Crime Scene](https://fireborn.mataroa.blog/blog/i-want-to-love-linux-it-doesnt-love-me-back-post-2-the-audio-stack-is-a-crime-scene/)
* [2025-05-12, 10:57:00](https://soylentnews.org/article.pl?sid=25/05/11/1335201&amp;from=rss) - [‘Tone Deaf’: US Tech Company Responsible for Global IT Outage to Cut Jobs and Use AI](https://soylentnews.org/article.pl?sid=25/05/11/1335201&amp;from=rss)
* [2025-05-12, 06:12:00](https://soylentnews.org/article.pl?sid=25/05/11/1323217&amp;from=rss) - [Into the Ethical AI Bush](https://soylentnews.org/article.pl?sid=25/05/11/1323217&amp;from=rss)
* [2025-05-12, 01:28:00](https://soylentnews.org/article.pl?sid=25/05/10/0222240&amp;from=rss) - [Skype is Officially Dead](https://soylentnews.org/article.pl?sid=25/05/10/0222240&amp;from=rss)
* [2025-05-11, 20:43:00](https://soylentnews.org/article.pl?sid=25/05/10/0150220&amp;from=rss) - [openSUSE Removes Deepin After Long String of Security Issues and Unauthorised Security Bypass](https://soylentnews.org/article.pl?sid=25/05/10/0150220&amp;from=rss)
* [2025-05-11, 15:58:00](https://soylentnews.org/article.pl?sid=25/05/10/0134211&amp;from=rss) - [The Bayeux Penis Count](https://soylentnews.org/article.pl?sid=25/05/10/0134211&amp;from=rss)
* [2025-05-11, 11:11:00](https://soylentnews.org/article.pl?sid=25/05/10/0031230&amp;from=rss) - [Curl Project Founder Snaps over Deluge of Time-Sucking AI Slop Bug Reports](https://soylentnews.org/article.pl?sid=25/05/10/0031230&amp;from=rss)
* [2025-05-11, 06:34:00](https://soylentnews.org/article.pl?sid=25/05/09/1729255&amp;from=rss) - [Sunscreen Might Have Helped Early Humans Outlive Neanderthals](https://soylentnews.org/article.pl?sid=25/05/09/1729255&amp;from=rss)
* [2025-05-11, 05:17:14](https://news.ycombinator.com/item?id=43951604) - [Mipmap selection in too much detail](https://pema.dev/2025/05/09/mipmaps-too-much-detail/)
* [2025-05-11, 01:49:00](https://soylentnews.org/article.pl?sid=25/05/09/1211227&amp;from=rss) - [How Hungry Fat Cells Could Someday Starve Cancer to Death](https://soylentnews.org/article.pl?sid=25/05/09/1211227&amp;from=rss)
* [2025-05-10, 21:07:00](https://soylentnews.org/article.pl?sid=25/05/09/1123216&amp;from=rss) - [Kuwait Declares Cryptocurrency Mining Illegal Amid Power Crisis Crackdown](https://soylentnews.org/article.pl?sid=25/05/09/1123216&amp;from=rss)
* [2025-05-10, 16:22:00](https://soylentnews.org/article.pl?sid=25/05/09/0353243&amp;from=rss) - [Astronomers Used Old &apos;Maps&apos; to Find What Could be a 9th Planet in Our Solar System](https://soylentnews.org/article.pl?sid=25/05/09/0353243&amp;from=rss)
* [2025-05-10, 14:05:14](https://news.ycombinator.com/item?id=43945733) - [Interferometer Device Sees Text from a Mile Away](https://physics.aps.org/articles/v18/99)
* [2025-05-10, 13:51:53](https://news.ycombinator.com/item?id=43945628) - [Failed Soviet Venus lander Kosmos 482 crashes to Earth after 53 years in orbit](https://www.space.com/space-exploration/launches-spacecraft/failed-soviet-venus-lander-kosmos-482-crashes-to-earth-after-53-years-in-orbit)
* [2025-05-10, 13:32:00](https://news.ycombinator.com/item?id=43945477) - [Ash Framework – Model your domain, derive the rest](https://ash-hq.org/)
* [2025-05-10, 11:36:00](https://soylentnews.org/article.pl?sid=25/05/09/0327207&amp;from=rss) - [Washington the Eighth State to Pass ‘Right to Repair’ Law](https://soylentnews.org/article.pl?sid=25/05/09/0327207&amp;from=rss)
* [2025-05-10, 08:52:47](https://news.ycombinator.com/item?id=43944199) - [RPG in a Box](https://rpginabox.com/)
* [2025-05-10, 07:49:18](https://news.ycombinator.com/item?id=43943928) - [EM-LLM: Human-Inspired Episodic Memory for Infinite Context LLMs](https://github.com/em-llm/EM-LLM-model)
* [2025-05-10, 06:52:00](https://soylentnews.org/article.pl?sid=25/05/09/0324231&amp;from=rss) - [Mathematical Beauty, Truth and Proof in the Age of AI](https://soylentnews.org/article.pl?sid=25/05/09/0324231&amp;from=rss)
* [2025-05-10, 02:04:00](https://soylentnews.org/article.pl?sid=25/05/08/137234&amp;from=rss) - [DOJ Confirms It Wants To Break Up Google&apos;s Advertising Tech Monopoly](https://soylentnews.org/article.pl?sid=25/05/08/137234&amp;from=rss)
