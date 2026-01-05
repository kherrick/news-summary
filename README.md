# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Developments

* [Using iperf3 and Prometheus for WAN link monitoring](https://freebsd.uw.cz/2026/01/using-iperf3-and-prometheus-for-wan.html) - A guide to utilizing iperf3 and Prometheus to monitor Wide Area Network (WAN) links efficiently.

* [Building a Rust-style static analyzer for C++ with AI](http://mpaxos.com/blog/rusty-cpp.html) - An exploration into creating a Rust-inspired static analyzer for C++ using artificial intelligence techniques.

* [Show HN: An LLM-Powered PCB Schematic Checker (Major Update)](https://traceformer.io/) - A major update for a large language model (LLM)-powered tool designed to check printed circuit board (PCB) schematics.

* [My LLM coding workflow going into 2026](https://addyosmani.com/blog/ai-coding-workflow/) - Insights into an AI-enhanced coding workflow by a seasoned developer.

* [KDE onboarding is good now](https://rabbitictranslator.com/kde-onboarding/) - A look at improvements in KDE onboarding processes for new users.

## Privacy and Security

* [California residents can now request all data brokers delete personal info](https://consumer.drop.privacy.ca.gov/) - California enables its residents to delete personal information held by data brokers.

* [39 Million Californians Can Now Legally Demand Data Brokers Delete Their Personal Data](https://yro.slashdot.org/story/26/01/05/0224249/39-million-californians-can-now-legally-demand-data-brokers-delete-their-personal-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A guide to the new legislation empowering millions in California with more control over personal data.

* [ICE Is Using Facial-Recognition Technology to Quickly Arrest People](https://www.wsj.com/politics/policy/ice-facial-recognition-app-mobile-fortify-dfdd00bf) - Investigation into the use of facial recognition technology by the Immigration and Customs Enforcement (ICE).

* [Six Harmless Bugs Lead to Remote Code Execution](https://mehmetince.net/the-story-of-a-perfect-exploit-chain-six-bugs-that-looked-harmless-until-they-became-pre-auth-rce-in-a-security-appliance/) - A report detailing how seemingly harmless software bugs combined to enable a critical security exploit.

* [NASA outlines how to control light at the atomic scale using polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&from=rss) - Insights into manipulating light at atomic scales through polaritons for advanced technologies.

* [Eurostar AI vulnerability: When a chatbot goes off the rails](https://www.pentestpartners.com/security-blog/eurostar-ai-vulnerability-when-a-chatbot-goes-off-the-rails/) - A blog on critical vulnerabilities discovered within Eurostar's AI chatbot system.

## Cultural Insights and Legacy

* [Fleischer Studios Criticized for Claiming Betty Boop is Not Public Domain](https://slashdot.org/story/26/01/04/2234236/fleischer-studios-criticized-for-claiming-betty-boop-is-not-public-domain?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Public claims and controversies surrounding the intellectual property status of the iconic character Betty Boop.

* [Irish Gov’t to Push for European Union to Ban Anonymous Social Media Accounts](https://soylentnews.org/article.pl?sid=25/12/31/1856202&from=rss) - Discussion about Ireland's push for increased regulation of online anonymity.

* [The unbearable joy of sitting alone in a café](https://candost.blog/the-unbearable-joy-of-sitting-alone-in-a-cafe/) - A tribute to the simplicity and pleasure of solitary moments in public spaces.

* [In 1962, a Geologist Went Into a Cave. 2 Months Later, He'd Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss) - The accidental birth of a new geological field through a prolonged cave exploration.

## Environment and Sustainability

* ['Fish Mouth' Filter Removes 99% of Microplastics From Laundry Waste](https://news.slashdot.org/story/26/01/04/1810209/fish-mouth-filter-removes-99-of-microplastics-from-laundry-waste?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Innovation in filtering technology capable of drastically reducing microplastic pollution from laundry waste.

* [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&from=rss) - Development of environmentally friendly plastic that offers both recyclability and ocean-degradable benefits.

* [Are Hybrid Cars Helping America Transition to Electric Vehicles?](https://hardware.slashdot.org/story/26/01/04/2346256/are-hybrid-cars-helping-america-transition-to-electric-vehicles?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Analysis of hybrid vehicles' efficacy in easing the transition to all-electric transportation.

## Science and Innovation

* [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&from=rss) - A study uncovering mechanisms within the brain responsible for measuring spatial distances.

* [Anti-aging injection regrows knee cartilage and prevents arthritis](https://scitechdaily.com/anti-aging-injection-regrows-knee-cartilage-and-prevents-arthritis/) - The potential of an anti-aging injection to regrow cartilage and combat arthritis is explored.

* [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss) - Details on a major upgrade to the Large Hadron Collider, enhancing its capabilities.

* [He Made Beer That's Also a Vaccine. Now Controversy is Brewing](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss) - The daring conception of a beer that serves as a vaccine and the controversies surrounding it.

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

* [2026-01-05, 05:43:24](https://lobste.rs/s/dvhjht/using_iperf3_prometheus_for_wan_link) - [Using iperf3 and Prometheus for WAN link monitoring](https://freebsd.uw.cz/2026/01/using-iperf3-and-prometheus-for-wan.html)
* [2026-01-05, 05:35:00](https://tech.slashdot.org/story/26/01/05/0520224/workstation-owner-sadly-marks-the-end-of-life-for-hp-ux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Workstation Owner Sadly Marks the End-of-Life for HP-UX](https://tech.slashdot.org/story/26/01/05/0520224/workstation-owner-sadly-marks-the-end-of-life-for-hp-ux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 05:16:37](https://news.ycombinator.com/item?id=46495560) - [ICE Is Using Facial-Recognition Technology to Quickly Arrest People](https://www.wsj.com/politics/policy/ice-facial-recognition-app-mobile-fortify-dfdd00bf)
* [2026-01-05, 05:11:59](https://news.ycombinator.com/item?id=46495539) - [Building a Rust-style static analyzer for C++ with AI](http://mpaxos.com/blog/rusty-cpp.html)
* [2026-01-05, 04:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss) - [In 1962, a Geologist Went Into a Cave. 2 Months Later, He&apos;d Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss)
* [2026-01-05, 04:00:38](https://news.ycombinator.com/item?id=46495220) - [California residents can now request all data brokers delete personal info](https://consumer.drop.privacy.ca.gov/)
* [2026-01-05, 02:36:20](https://news.ycombinator.com/item?id=46494734) - [During Helene, I just wanted a plain text website](https://sparkbox.com/foundry/helene_and_mobile_web_performance)
* [2026-01-05, 02:34:00](https://yro.slashdot.org/story/26/01/05/0224249/39-million-californians-can-now-legally-demand-data-brokers-delete-their-personal-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [39 Million Californians Can Now Legally Demand Data Brokers Delete Their Personal Data](https://yro.slashdot.org/story/26/01/05/0224249/39-million-californians-can-now-legally-demand-data-brokers-delete-their-personal-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 00:49:00](https://yro.slashdot.org/story/26/01/05/0027243/north-dakota-law-included-fake-critical-minerals-using-lawyers-last-names?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [North Dakota Law Included Fake Critical Minerals Using Lawyers&apos; Last Names](https://yro.slashdot.org/story/26/01/05/0027243/north-dakota-law-included-fake-critical-minerals-using-lawyers-last-names?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 00:48:44](https://news.ycombinator.com/item?id=46494061) - [NeXTSTEP on Pa-RISC](https://www.openpa.net/nextstep_pa-risc.html)
* [2026-01-05, 00:31:11](https://lobste.rs/s/f8mhm9/everything_you_need_know_about_email) - [Everything You Need to Know About Email Encryption in 2026](https://soatok.blog/2026/01/04/everything-you-need-to-know-about-email-encryption-in-2026/)
* [2026-01-04, 23:49:00](https://hardware.slashdot.org/story/26/01/04/2346256/are-hybrid-cars-helping-america-transition-to-electric-vehicles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Hybrid Cars Helping America Transition to Electric Vehicles?](https://hardware.slashdot.org/story/26/01/04/2346256/are-hybrid-cars-helping-america-transition-to-electric-vehicles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 23:43:48](https://news.ycombinator.com/item?id=46493623) - [Millennium Challenge: A corrupted military exercise and its legacy (2015)](https://warontherocks.com/2015/11/millennium-challenge-the-real-story-of-a-corrupted-military-exercise-and-its-legacy/)
* [2026-01-04, 23:36:00](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss) - [He Made Beer That&apos;s Also a Vaccine. Now Controversy is Brewing](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss)
* [2026-01-04, 23:30:36](https://lobste.rs/s/nr6mqg/late_arrival_16_bit_cp_m) - [The Late Arrival of 16-bit CP/M](https://nemanjatrifunovic.substack.com/p/the-late-arrival-of-16-bit-cpm)
* [2026-01-04, 22:36:00](https://slashdot.org/story/26/01/04/2234236/fleischer-studios-criticized-for-claiming-betty-boop-is-not-public-domain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fleischer Studios Criticized for Claiming Betty Boop is Not Public Domain](https://slashdot.org/story/26/01/04/2234236/fleischer-studios-criticized-for-claiming-betty-boop-is-not-public-domain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 22:10:07](https://lobste.rs/s/eaxaac/stop_forwarding_errors_start_designing) - [Stop Forwarding Errors, Start Designing Them](https://fast.github.io/blog/stop-forwarding-errors-start-designing-them/)
* [2026-01-04, 21:43:26](https://news.ycombinator.com/item?id=46492601) - [Show HN: An LLM-Powered PCB Schematic Checker (Major Update)](https://traceformer.io/)
* [2026-01-04, 21:18:20](https://lobste.rs/s/k4mejj/21_lessons_from_14_years_at_google) - [21 Lessons From 14 Years at Google](https://addyosmani.com/blog/21-lessons/)
* [2026-01-04, 21:10:22](https://lobste.rs/s/goynhr/what_is_pc_compatible) - [What is a PC compatible?](https://codon.org.uk/~mjg59/blog/p/what-is-a-pc-compatible/)
* [2026-01-04, 20:52:52](https://news.ycombinator.com/item?id=46492063) - [Eurostar AI vulnerability: When a chatbot goes off the rails](https://www.pentestpartners.com/security-blog/eurostar-ai-vulnerability-when-a-chatbot-goes-off-the-rails/)
* [2026-01-04, 20:34:00](https://news.slashdot.org/story/26/01/04/1810209/fish-mouth-filter-removes-99-of-microplastics-from-laundry-waste?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Fish Mouth&apos; Filter Removes 99% of Microplastics From Laundry Waste](https://news.slashdot.org/story/26/01/04/1810209/fish-mouth-filter-removes-99-of-microplastics-from-laundry-waste?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 20:25:30](https://news.ycombinator.com/item?id=46491821) - [Why does a least squares fit appear to have a bias when applied to simple data?](https://stats.stackexchange.com/questions/674129/why-does-a-linear-least-squares-fit-appear-to-have-a-bias-when-applied-to-simple)
* [2026-01-04, 20:17:22](https://news.ycombinator.com/item?id=46491749) - [Show HN: Terminal UI for AWS](https://github.com/huseyinbabal/taws)
* [2026-01-04, 19:48:20](https://news.ycombinator.com/item?id=46491486) - [Claude Code On-the-Go](https://granda.org/en/2026/01/02/claude-code-on-the-go/)
* [2026-01-04, 19:45:38](https://lobste.rs/s/o6ildd/claude_code_on_go) - [Claude Code On-The-Go](https://granda.org/en/2026/01/02/claude-code-on-the-go/)
* [2026-01-04, 19:34:00](https://science.slashdot.org/story/26/01/04/1732257/a-drug-resistant-superbug-fungus-infected-7000-americans-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Drug-Resistant &apos;Superbug&apos; Fungus Infected 7,000 Americans in 2025](https://science.slashdot.org/story/26/01/04/1732257/a-drug-resistant-superbug-fungus-infected-7000-americans-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 19:30:07](https://lobste.rs/s/amhez5/cheribsd_freebsd_takes_advantage_cheri) - [CheriBSD: FreeBSD that takes advantage of CHERI](https://www.cheribsd.org/)
* [2026-01-04, 19:30:01](https://lobste.rs/s/kpzqim/utopian_scholastic) - [Utopian Scholastic](https://wol.fm/blog/utopian-scholastic.html)
* [2026-01-04, 19:24:47](https://news.ycombinator.com/item?id=46491244) - [Agentic Patterns](https://github.com/nibzard/awesome-agentic-patterns)
* [2026-01-04, 19:23:35](https://lobste.rs/s/lgfui2/signals_vs_query_based_compilers) - [Signals vs Query-Based Compilers](https://marvinh.dev/blog/signals-vs-query-based-compilers/)
* [2026-01-04, 18:52:00](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss) - [HP-UX Hits End-of-Life](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss)
* [2026-01-04, 18:34:00](https://tech.slashdot.org/story/26/01/04/0054205/microsofts-risky-bet-that-windows-can-become-the-platform-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Risky Bet That Windows Can Become The Platform for AI Agents](https://tech.slashdot.org/story/26/01/04/0054205/microsofts-risky-bet-that-windows-can-become-the-platform-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 17:50:04](https://news.ycombinator.com/item?id=46490323) - [Ripple, a puzzle game about 2nd and 3rd order effects](https://ripplegame.app/)
* [2026-01-04, 17:34:00](https://mobile.slashdot.org/story/26/01/03/060203/trump-organizations-499-smartphone-delayed-again-now-until-the-end-of-january?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Organization&apos;s $499 Smartphone Delayed Again, Now Until the End of January](https://mobile.slashdot.org/story/26/01/03/060203/trump-organizations-499-smartphone-delayed-again-now-until-the-end-of-january?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 16:34:00](https://tech.slashdot.org/story/26/01/04/0432252/archboot-adds-cosmic-desktop-as-a-new-install-and-rescue-option?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Archboot Adds COSMIC Desktop as a New Install and Rescue Option](https://tech.slashdot.org/story/26/01/04/0432252/archboot-adds-cosmic-desktop-as-a-new-install-and-rescue-option?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 16:10:25](https://lobste.rs/s/gupujf/4_ways_improve_perfect_join_algorithm) - [4 Ways to Improve A Perfect Join Algorithm](https://remy.wang/blog/ya-fast.html)
* [2026-01-04, 15:49:36](https://lobste.rs/s/gmtpog/my_llm_coding_workflow_going_into_2026) - [My LLM coding workflow going into 2026](https://addyosmani.com/blog/ai-coding-workflow/)
* [2026-01-04, 15:38:55](https://lobste.rs/s/b19ydv/audio_dongles_ghost_usb_1) - [Audio dongles and the ghost of USB 1](http://epenguin.imalone.co.uk/2025/06/audio-dongles-and-ghost-of-usb-1.html)
* [2026-01-04, 15:34:00](https://hardware.slashdot.org/story/26/01/03/2220248/furiosas-energy-efficient-npu-ai-chips-start-mass-production-this-month-challenging-nvidia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Furiosa&apos;s Energy-Efficient &apos;NPU&apos; AI Chips Start Mass Production This Month, Challenging Nvidia](https://hardware.slashdot.org/story/26/01/03/2220248/furiosas-energy-efficient-npu-ai-chips-start-mass-production-this-month-challenging-nvidia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 15:32:54](https://lobste.rs/s/v4a1sp/win32_on_macos_2019) - [win32 on macOS (2019)](https://www.winehq.org/pipermail/wine-devel/2019-December/156602.html)
* [2026-01-04, 15:30:00](https://lobste.rs/s/ntkyts/on_scannerless_parsing_again) - [On scannerless parsing again](https://wareya.wordpress.com/2026/01/04/short-bit-on-scannerless-parsing-again/)
* [2026-01-04, 15:23:54](https://news.ycombinator.com/item?id=46488819) - [Lessons from 14 years at Google](https://addyosmani.com/blog/21-lessons/)
* [2026-01-04, 15:13:18](https://news.ycombinator.com/item?id=46488711) - [Anti-aging injection regrows knee cartilage and prevents arthritis](https://scitechdaily.com/anti-aging-injection-regrows-knee-cartilage-and-prevents-arthritis/)
* [2026-01-04, 15:08:02](https://news.ycombinator.com/item?id=46488654) - [Show HN: An interactive guide to how browsers work](https://howbrowserswork.com/)
* [2026-01-04, 15:00:18](https://news.ycombinator.com/item?id=46488576) - [Web development is fun again](https://ma.ttias.be/web-development-is-fun-again/)
* [2026-01-04, 14:37:58](https://news.ycombinator.com/item?id=46488355) - [The unbearable joy of sitting alone in a café](https://candost.blog/the-unbearable-joy-of-sitting-alone-in-a-cafe/)
* [2026-01-04, 14:30:29](https://news.ycombinator.com/item?id=46488278) - [Street Fighter II, the World Warrier (2021)](https://fabiensanglard.net/sf2_warrier/)
* [2026-01-04, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss) - [Americans Lost $333 Million to Bitcoin ATM Fraud in 2025](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss)
* [2026-01-04, 14:03:22](https://lobste.rs/s/garkqn/maybe_comments_should_explain_what_2017) - [Maybe Comments SHOULD Explain &apos;What&apos; (2017)](https://www.hillelwayne.com/post/what-comments/)
* [2026-01-04, 13:29:51](https://lobste.rs/s/n9tev4/who_owns_memory_part_2_who_calls_free) - [Who Owns the Memory? Part 2: Who Calls Free?](https://lukefleed.xyz/posts/who-owns-the-memory-pt2/)
* [2026-01-04, 13:08:33](https://lobste.rs/s/rgkpv3/javascript_engines_zoo) - [JavaScript engines zoo](https://zoo.js.org/)
* [2026-01-04, 12:54:20](https://news.ycombinator.com/item?id=46487472) - [Moiré Explorer](https://play.ertdfgcvb.xyz/#/src/demos/moire_explorer)
* [2026-01-04, 12:34:00](https://hardware.slashdot.org/story/26/01/04/0515201/the-us-effort-to-break-chinas-rare-earth-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Effort to Break China&apos;s Rare-Earth Monopoly](https://hardware.slashdot.org/story/26/01/04/0515201/the-us-effort-to-break-chinas-rare-earth-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 11:52:41](https://lobste.rs/s/jxub7u/freebsd_home_nas_part_3_wireguard_vpn) - [FreeBSD Home NAS, part 3: WireGuard VPN, routing, and Linux peers](https://rtfm.co.ua/en/freebsd-home-nas-part-3-wireguard-vpn-linux-peer-and-routing/)
* [2026-01-04, 10:47:31](https://lobste.rs/s/gxiqwv/saying_goodbye_servers_at_our_physical) - [Saying goodbye to the servers at our physical datacenter](https://stackoverflow.blog/2025/12/24/the-great-unracking-saying-goodbye-to-the-servers-at-our-physical-datacenter/)
* [2026-01-04, 09:22:00](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss) - [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss)
* [2026-01-04, 08:34:00](https://tech.slashdot.org/story/26/01/04/0547242/reddit-surges-in-popularity-to-overtake-tiktok-in-the-uk---thanks-to-googles-algorithm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Surges in Popularity to Overtake TikTok in the UK - Thanks to Google&apos;s Algorithm?](https://tech.slashdot.org/story/26/01/04/0547242/reddit-surges-in-popularity-to-overtake-tiktok-in-the-uk---thanks-to-googles-algorithm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 08:11:07](https://lobste.rs/s/wewhgh/can_i_finally_start_using_wayland_2026) - [Can I finally start using Wayland in 2026?](https://michael.stapelberg.ch/posts/2026-01-04-wayland-sway-in-2026/)
* [2026-01-04, 05:34:00](https://hardware.slashdot.org/story/26/01/03/238257/new-tesla-video-shows-tesla-semi-electric-truck-charging-at-12-mw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Tesla Video Shows Tesla Semi Electric Truck Charging at 1.2 MW](https://hardware.slashdot.org/story/26/01/03/238257/new-tesla-video-shows-tesla-semi-electric-truck-charging-at-12-mw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss) - [Ozempic is Changing the Foods Americans Buy](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss)
* [2026-01-04, 03:28:32](https://lobste.rs/s/za0nkg/building_tls_1_3_implementation_pure) - [Building a TLS 1.3 Implementation in Pure Common Lisp](https://atgreen.github.io/repl-yell/posts/pure-tls/)
* [2026-01-04, 02:34:00](https://science.slashdot.org/story/26/01/03/2114246/what-happened-when-alaskas-court-system-tried-answering-questions-with-an-ai-chatbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happened When Alaska&apos;s Court System Tried Answering Questions with an AI Chatbot?](https://science.slashdot.org/story/26/01/03/2114246/what-happened-when-alaskas-court-system-tried-answering-questions-with-an-ai-chatbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 00:30:46](https://lobste.rs/s/52bxvq/kde_onboarding_is_good_now) - [KDE onboarding is good now](https://rabbitictranslator.com/kde-onboarding/)
* [2026-01-03, 23:48:00](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss) - [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss)
* [2026-01-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss) - [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss)
* [2026-01-03, 17:16:24](https://lobste.rs/s/o5e7gm/who_owns_memory_part_1_what_is_object) - [Who Owns the Memory? Part 1: What is an Object?](https://lukefleed.xyz/posts/who-owns-the-memory-pt1/)
* [2026-01-03, 14:19:00](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss) - [Start-Up Proposes Scaled Up AI Data Center &apos;Active Radio Cable&apos; Connectivity](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss)
* [2026-01-03, 11:47:26](https://lobste.rs/s/9zqi2z/who_s_hiring_q1_2026) - [Who&apos;s Hiring? Q1 2026](https://lobste.rs/s/9zqi2z/who_s_hiring_q1_2026)
* [2026-01-03, 09:30:00](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss) - [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss)
* [2026-01-03, 04:45:00](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss) - [QNX Releases New Desktop-Focused Image: QNX 8.0 With Xfce on Wayland](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss)
* [2026-01-03, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss) - [For Computational Devices, Talk Isn&apos;t Cheap](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss)
* [2026-01-02, 21:54:56](https://news.ycombinator.com/item?id=46469877) - [I charged $18k for a Static HTML Page (2019)](https://idiallo.com/blog/18000-dollars-static-web-page)
* [2026-01-02, 19:18:00](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss) - [FDA Officially Confirms Kava is a Food Under Federal Law](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss)
* [2026-01-02, 14:35:00](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss) - [Irish Gov’t to Push for European Union to Ban Anonymous Social Media Accounts](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss)
* [2026-01-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss) - [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss)
* [2026-01-02, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss) - [39C3: Multiple Vulnerabilities in GnuPG and Other Cryptographic Tools](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss)
* [2026-01-02, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss) - [Funding Agencies Can End Profit-First Science Publishing](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss)
* [2026-01-01, 20:02:09](https://news.ycombinator.com/item?id=46457488) - [Six Harmless Bugs Lead to Remote Code Execution](https://mehmetince.net/the-story-of-a-perfect-exploit-chain-six-bugs-that-looked-harmless-until-they-became-pre-auth-rce-in-a-security-appliance/)
* [2026-01-01, 19:38:00](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss) - [Aging Immune Cells May Rewrite Their Own DNA to Stay Inflammatory](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss)
* [2026-01-01, 14:46:00](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss) - [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss)
* [2026-01-01, 13:48:27](https://news.ycombinator.com/item?id=46454085) - [Logos Language Guide: Compile English to Rust](https://logicaffeine.com/guide)
* [2026-01-01, 10:03:00](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss) - [D7VK Reaches Version 1.1 and Adds New Frontend and Experimental Direct3D 6 Support](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss)
* [2026-01-01, 10:02:00](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss) - [Study Reveals Just How Much AI Slop is on YouTube](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss)
* [2026-01-01, 05:15:00](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss) - [US Insurance Giant Aflac Says Hackers Stole Personal and Health Data of 22.6 Million People](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss)
* [2026-01-01, 02:19:14](https://news.ycombinator.com/item?id=46450625) - [The great shift of English prose](https://www.worksinprogress.news/p/english-prose-has-become-much-easier)
* [2026-01-01, 00:37:00](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss) - [Not Everyone Reads the Room the Same](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss)
* [2026-01-01, 00:00:00](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss) - [Happy New Year 2026 !](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss)
