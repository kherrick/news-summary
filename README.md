# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [As US Communities Start Fighting Back, Many Datacenters are Blocked](https://news.slashdot.org/story/26/01/05/0445216/as-us-communities-start-fighting-back-many-datacenters-are-blocked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A look into the growing trend of communities resisting the establishment of datacenters in their localities, citing concerns over resource usage and environmental impact.

* [journal-guardian: JournalCTL Watcher with local LLM explanations for errors](https://github.com/delirehberi/journal-guardian) - An innovative tool that uses local machine learning models to explain system errors monitored via JournalCTL.

* [Using eBPF to load-balance traffic across UDP sockets with Go](https://vincent.bernat.ch/en/blog/2026-reuseport-ebpf-go) - A detailed guide to leveraging eBPF technology for effective traffic management in Go applications.

* [Building a Rust-style static analyzer for C++ with AI](http://mpaxos.com/blog/rusty-cpp.html) - Combining modern AI techniques with Rust-style principles to create a comprehensive static analyzer for C++.

## Creative Technologies and Perspectives

* [Decorative Cryptography](https://www.dlp.rip/decorative-cryptography) - Exploring the intersection of cryptography and art by incorporating cryptographic elements into decorative designs.

* [Everything You Need to Know About Email Encryption in 2026](https://soatok.blog/2026/01/04/everything-you-need-to-know-about-email-encryption-in-2026/) - A comprehensive guide to the state of email encryption technologies and practices in 2026.

* [A Practical guide to building a parser in Go](https://gagor.pro/2026/01/a-practical-guide-to-building-a-parser-in-go/) - A beginner-friendly resource on creating parsers in the Go programming language using modern approaches.

* [On scannerless parsing again](https://wareya.wordpress.com/2026/01/04/short-bit-on-scannerless-parsing-again/) - A technical examination of scannerless parsers and their benefits in different use cases.

## Cultural and Historical Highlights

* [2025 Ends With Release of J. R. R. Tolkien's Unpublished Story](https://entertainment.slashdot.org/story/26/01/05/0313224/2025-ends-with-release-of-j-r-r-tolkeins-unpublished-story?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Tolkien fans rejoice as an unpublished work by the legendary author becomes available posthumously, offering a fresh glimpse into his literary world.

* [In 1962, a Geologist Went Into a Cave. 2 Months Later, He'd Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss) - The fascinating story of a geologist's unexpected discovery that revolutionized an entire scientific field.

## Privacy and Security

* [39 Million Californians Can Now Legally Demand Data Brokers Delete Their Personal Data](https://yro.slashdot.org/story/26/01/05/0224249/39-million-californians-can-now-legally-demand-data-brokers-delete-their-personal-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A major step for personal privacy rights in California, allowing individuals to have their data erased from broker systems.

* [Anna's Archive Loses .Org Domain After Surprise Suspension](https://torrentfreak.com/annas-archive-loses-org-domain-after-surprise-suspension/) - The unexpected suspension of Anna’s Archive domain, raising questions about digital censorship and domain rights.

* [How Do We Hold Companies Accountable for 'Do as I Say, Not as I Do' Security Practices?](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss) - An exploration into the lack of accountability for companies that enforce security measures while neglecting them themselves.

## Science and Health

* [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss) - Featuring a significant upgrade, the Large Hadron Collider sets the stage for groundbreaking particle physics experiments in the upcoming years.

* [A Drug-Resistant 'Superbug' Fungus Infected 7,000 Americans in 2025](https://science.slashdot.org/story/26/01/04/1732257/a-drug-resistant-superbug-fungus-infected-7000-americans-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Highlighting a growing public health crisis caused by a rise in drug-resistant fungal infections.

* [A spider web unlike any seen before](https://www.nytimes.com/2025/11/08/science/biggest-spiderweb-sulfur-cave.html) - The discovery of a sulfur cave habited by spiders with unique web structures captivates scientists.

## Environmental Advances

* ['Fish Mouth' Filter Removes 99% of Microplastics From Laundry Waste](https://news.slashdot.org/story/26/01/04/1810209/fish-mouth-filter-removes-99-of-microplastics-from-laundry-waste?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A game-changing laundry filter that effectively reduces microplastic pollution in water.

* [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss) - Advances in material science pave the way for a fully ocean-degradable plastic, potentially reducing environmental impact.

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

* [2026-01-05, 12:34:00](https://news.slashdot.org/story/26/01/05/0445216/as-us-communities-start-fighting-back-many-datacenters-are-blocked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As US Communities Start Fighting Back, Many Datacenters are Blocked](https://news.slashdot.org/story/26/01/05/0445216/as-us-communities-start-fighting-back-many-datacenters-are-blocked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 12:10:34](https://lobste.rs/s/huhgn0/journal_guardian_journalctl_watcher) - [journal-guardian: JournalCTL Watcher with local LLM explanations for errors](https://github.com/delirehberi/journal-guardian)
* [2026-01-05, 12:09:03](https://lobste.rs/s/ik17dv/rate_limiting_bursty_workloads) - [Rate limiting bursty workloads](https://jean-lopes.github.io/blog/rate-limiting-bursty-workloads.html)
* [2026-01-05, 12:06:54](https://lobste.rs/s/abzzkn/sneaking_metadata_into_mako_templates) - [Sneaking Metadata into Mako Templates](https://bobrubbens.nl/post/sneaking-metadata-into-mako-templates/)
* [2026-01-05, 11:56:08](https://lobste.rs/s/cqaquz/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/cqaquz/what_are_you_doing_this_week)
* [2026-01-05, 11:51:42](https://news.ycombinator.com/item?id=46497712) - [It&apos;s hard to justify Tahoe icons](https://tonsky.me/blog/tahoe-icons/)
* [2026-01-05, 11:15:17](https://lobste.rs/s/uvx98g/using_ebpf_load_balance_traffic_across) - [Using eBPF to load-balance traffic across UDP sockets with Go](https://vincent.bernat.ch/en/blog/2026-reuseport-ebpf-go)
* [2026-01-05, 10:44:51](https://lobste.rs/s/bnovba/databases_2025_year_review) - [Databases in 2025: A Year in Review](https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html)
* [2026-01-05, 10:23:32](https://news.ycombinator.com/item?id=46497164) - [Anna&apos;s Archive Loses .Org Domain After Surprise Suspension](https://torrentfreak.com/annas-archive-loses-org-domain-after-surprise-suspension/)
* [2026-01-05, 09:15:15](https://lobste.rs/s/ifuhev/practical_guide_building_parser_go) - [A Practical guide to building a parser in Go](https://gagor.pro/2026/01/a-practical-guide-to-building-a-parser-in-go/)
* [2026-01-05, 09:03:00](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss) - [How Do We Hold Companies Accountable for \&quot;Do as I Say, Not as I Do\&quot; Security Practices?](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss)
* [2026-01-05, 08:34:00](https://entertainment.slashdot.org/story/26/01/05/0313224/2025-ends-with-release-of-j-r-r-tolkeins-unpublished-story?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2025 Ends With Release of J. R. R. Tolkein&apos;s Unpublished Story](https://entertainment.slashdot.org/story/26/01/05/0313224/2025-ends-with-release-of-j-r-r-tolkeins-unpublished-story?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 08:29:38](https://news.ycombinator.com/item?id=46496494) - [Decorative Cryptography](https://www.dlp.rip/decorative-cryptography)
* [2026-01-05, 08:28:53](https://lobste.rs/s/ba1o6s/decorative_cryptography) - [Decorative Cryptography](https://dlp.rip/decorative-cryptography)
* [2026-01-05, 07:14:30](https://news.ycombinator.com/item?id=46496103) - [Databases in 2025: A Year in Review](https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html)
* [2026-01-05, 07:06:22](https://news.ycombinator.com/item?id=46496054) - [A spider web unlike any seen before](https://www.nytimes.com/2025/11/08/science/biggest-spiderweb-sulfur-cave.html)
* [2026-01-05, 05:35:00](https://tech.slashdot.org/story/26/01/05/0520224/workstation-owner-sadly-marks-the-end-of-life-for-hp-ux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Workstation Owner Sadly Marks the End-of-Life for HP-UX](https://tech.slashdot.org/story/26/01/05/0520224/workstation-owner-sadly-marks-the-end-of-life-for-hp-ux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 05:11:59](https://news.ycombinator.com/item?id=46495539) - [Building a Rust-style static analyzer for C++ with AI](http://mpaxos.com/blog/rusty-cpp.html)
* [2026-01-05, 04:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss) - [In 1962, a Geologist Went Into a Cave. 2 Months Later, He&apos;d Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss)
* [2026-01-05, 02:36:20](https://news.ycombinator.com/item?id=46494734) - [During Helene, I just wanted a plain text website](https://sparkbox.com/foundry/helene_and_mobile_web_performance)
* [2026-01-05, 02:34:00](https://yro.slashdot.org/story/26/01/05/0224249/39-million-californians-can-now-legally-demand-data-brokers-delete-their-personal-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [39 Million Californians Can Now Legally Demand Data Brokers Delete Their Personal Data](https://yro.slashdot.org/story/26/01/05/0224249/39-million-californians-can-now-legally-demand-data-brokers-delete-their-personal-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 00:49:00](https://yro.slashdot.org/story/26/01/05/0027243/north-dakota-law-included-fake-critical-minerals-using-lawyers-last-names?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [North Dakota Law Included Fake Critical Minerals Using Lawyers&apos; Last Names](https://yro.slashdot.org/story/26/01/05/0027243/north-dakota-law-included-fake-critical-minerals-using-lawyers-last-names?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-05, 00:48:44](https://news.ycombinator.com/item?id=46494061) - [NeXTSTEP on Pa-RISC](https://www.openpa.net/nextstep_pa-risc.html)
* [2026-01-05, 00:31:11](https://lobste.rs/s/f8mhm9/everything_you_need_know_about_email) - [Everything You Need to Know About Email Encryption in 2026](https://soatok.blog/2026/01/04/everything-you-need-to-know-about-email-encryption-in-2026/)
* [2026-01-04, 23:49:00](https://hardware.slashdot.org/story/26/01/04/2346256/are-hybrid-cars-helping-america-transition-to-electric-vehicles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Hybrid Cars Helping America Transition to Electric Vehicles?](https://hardware.slashdot.org/story/26/01/04/2346256/are-hybrid-cars-helping-america-transition-to-electric-vehicles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 23:36:00](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss) - [He Made Beer That&apos;s Also a Vaccine. Now Controversy is Brewing](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss)
* [2026-01-04, 23:30:36](https://lobste.rs/s/nr6mqg/late_arrival_16_bit_cp_m) - [The Late Arrival of 16-bit CP/M](https://nemanjatrifunovic.substack.com/p/the-late-arrival-of-16-bit-cpm)
* [2026-01-04, 22:36:00](https://slashdot.org/story/26/01/04/2234236/fleischer-studios-criticized-for-claiming-betty-boop-is-not-public-domain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fleischer Studios Criticized for Claiming Betty Boop is Not Public Domain](https://slashdot.org/story/26/01/04/2234236/fleischer-studios-criticized-for-claiming-betty-boop-is-not-public-domain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 22:10:07](https://lobste.rs/s/eaxaac/stop_forwarding_errors_start_designing) - [Stop Forwarding Errors, Start Designing Them](https://fast.github.io/blog/stop-forwarding-errors-start-designing-them/)
* [2026-01-04, 21:18:20](https://lobste.rs/s/k4mejj/21_lessons_from_14_years_at_google) - [21 Lessons From 14 Years at Google](https://addyosmani.com/blog/21-lessons/)
* [2026-01-04, 21:10:22](https://lobste.rs/s/goynhr/what_is_pc_compatible) - [What is a PC compatible?](https://codon.org.uk/~mjg59/blog/p/what-is-a-pc-compatible/)
* [2026-01-04, 20:52:52](https://news.ycombinator.com/item?id=46492063) - [Eurostar AI vulnerability: When a chatbot goes off the rails](https://www.pentestpartners.com/security-blog/eurostar-ai-vulnerability-when-a-chatbot-goes-off-the-rails/)
* [2026-01-04, 20:34:00](https://news.slashdot.org/story/26/01/04/1810209/fish-mouth-filter-removes-99-of-microplastics-from-laundry-waste?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Fish Mouth&apos; Filter Removes 99% of Microplastics From Laundry Waste](https://news.slashdot.org/story/26/01/04/1810209/fish-mouth-filter-removes-99-of-microplastics-from-laundry-waste?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 20:25:30](https://news.ycombinator.com/item?id=46491821) - [Why does a least squares fit appear to have a bias when applied to simple data?](https://stats.stackexchange.com/questions/674129/why-does-a-linear-least-squares-fit-appear-to-have-a-bias-when-applied-to-simple)
* [2026-01-04, 20:17:22](https://news.ycombinator.com/item?id=46491749) - [Show HN: Terminal UI for AWS](https://github.com/huseyinbabal/taws)
* [2026-01-04, 19:48:20](https://news.ycombinator.com/item?id=46491486) - [Claude Code On-the-Go](https://granda.org/en/2026/01/02/claude-code-on-the-go/)
* [2026-01-04, 19:34:00](https://science.slashdot.org/story/26/01/04/1732257/a-drug-resistant-superbug-fungus-infected-7000-americans-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Drug-Resistant &apos;Superbug&apos; Fungus Infected 7,000 Americans in 2025](https://science.slashdot.org/story/26/01/04/1732257/a-drug-resistant-superbug-fungus-infected-7000-americans-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 19:30:07](https://lobste.rs/s/amhez5/cheribsd_freebsd_takes_advantage_cheri) - [CheriBSD: FreeBSD that takes advantage of CHERI](https://www.cheribsd.org/)
* [2026-01-04, 19:30:01](https://lobste.rs/s/kpzqim/utopian_scholastic) - [Utopian Scholastic](https://wol.fm/blog/utopian-scholastic.html)
* [2026-01-04, 19:24:47](https://news.ycombinator.com/item?id=46491244) - [Agentic Patterns](https://github.com/nibzard/awesome-agentic-patterns)
* [2026-01-04, 18:52:00](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss) - [HP-UX Hits End-of-Life](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss)
* [2026-01-04, 18:34:00](https://tech.slashdot.org/story/26/01/04/0054205/microsofts-risky-bet-that-windows-can-become-the-platform-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Risky Bet That Windows Can Become The Platform for AI Agents](https://tech.slashdot.org/story/26/01/04/0054205/microsofts-risky-bet-that-windows-can-become-the-platform-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 17:50:04](https://news.ycombinator.com/item?id=46490323) - [Ripple, a puzzle game about 2nd and 3rd order effects](https://ripplegame.app/)
* [2026-01-04, 17:34:00](https://mobile.slashdot.org/story/26/01/03/060203/trump-organizations-499-smartphone-delayed-again-now-until-the-end-of-january?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Organization&apos;s $499 Smartphone Delayed Again, Now Until the End of January](https://mobile.slashdot.org/story/26/01/03/060203/trump-organizations-499-smartphone-delayed-again-now-until-the-end-of-january?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 16:34:00](https://tech.slashdot.org/story/26/01/04/0432252/archboot-adds-cosmic-desktop-as-a-new-install-and-rescue-option?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Archboot Adds COSMIC Desktop as a New Install and Rescue Option](https://tech.slashdot.org/story/26/01/04/0432252/archboot-adds-cosmic-desktop-as-a-new-install-and-rescue-option?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 16:10:25](https://lobste.rs/s/gupujf/4_ways_improve_perfect_join_algorithm) - [4 Ways to Improve A Perfect Join Algorithm](https://remy.wang/blog/ya-fast.html)
* [2026-01-04, 15:38:55](https://lobste.rs/s/b19ydv/audio_dongles_ghost_usb_1) - [Audio dongles and the ghost of USB 1](http://epenguin.imalone.co.uk/2025/06/audio-dongles-and-ghost-of-usb-1.html)
* [2026-01-04, 15:34:00](https://hardware.slashdot.org/story/26/01/03/2220248/furiosas-energy-efficient-npu-ai-chips-start-mass-production-this-month-challenging-nvidia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Furiosa&apos;s Energy-Efficient &apos;NPU&apos; AI Chips Start Mass Production This Month, Challenging Nvidia](https://hardware.slashdot.org/story/26/01/03/2220248/furiosas-energy-efficient-npu-ai-chips-start-mass-production-this-month-challenging-nvidia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 15:32:54](https://lobste.rs/s/v4a1sp/win32_on_macos_2019) - [win32 on macOS (2019)](https://www.winehq.org/pipermail/wine-devel/2019-December/156602.html)
* [2026-01-04, 15:30:00](https://lobste.rs/s/ntkyts/on_scannerless_parsing_again) - [On scannerless parsing again](https://wareya.wordpress.com/2026/01/04/short-bit-on-scannerless-parsing-again/)
* [2026-01-04, 15:23:54](https://news.ycombinator.com/item?id=46488819) - [Lessons from 14 years at Google](https://addyosmani.com/blog/21-lessons/)
* [2026-01-04, 15:08:02](https://news.ycombinator.com/item?id=46488654) - [Show HN: An interactive guide to how browsers work](https://howbrowserswork.com/)
* [2026-01-04, 15:00:18](https://news.ycombinator.com/item?id=46488576) - [Web development is fun again](https://ma.ttias.be/web-development-is-fun-again/)
* [2026-01-04, 14:37:58](https://news.ycombinator.com/item?id=46488355) - [The unbearable joy of sitting alone in a café](https://candost.blog/the-unbearable-joy-of-sitting-alone-in-a-cafe/)
* [2026-01-04, 14:30:29](https://news.ycombinator.com/item?id=46488278) - [Street Fighter II, the World Warrier (2021)](https://fabiensanglard.net/sf2_warrier/)
* [2026-01-04, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss) - [Americans Lost $333 Million to Bitcoin ATM Fraud in 2025](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss)
* [2026-01-04, 14:03:22](https://lobste.rs/s/garkqn/maybe_comments_should_explain_what_2017) - [Maybe Comments SHOULD Explain &apos;What&apos; (2017)](https://www.hillelwayne.com/post/what-comments/)
* [2026-01-04, 13:29:51](https://lobste.rs/s/n9tev4/who_owns_memory_part_2_who_calls_free) - [Who Owns the Memory? Part 2: Who Calls Free?](https://lukefleed.xyz/posts/who-owns-the-memory-pt2/)
* [2026-01-04, 13:08:33](https://lobste.rs/s/rgkpv3/javascript_engines_zoo) - [JavaScript engines zoo](https://zoo.js.org/)
* [2026-01-04, 12:34:00](https://hardware.slashdot.org/story/26/01/04/0515201/the-us-effort-to-break-chinas-rare-earth-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Effort to Break China&apos;s Rare-Earth Monopoly](https://hardware.slashdot.org/story/26/01/04/0515201/the-us-effort-to-break-chinas-rare-earth-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 10:47:31](https://lobste.rs/s/gxiqwv/saying_goodbye_servers_at_our_physical) - [Saying goodbye to the servers at our physical datacenter](https://stackoverflow.blog/2025/12/24/the-great-unracking-saying-goodbye-to-the-servers-at-our-physical-datacenter/)
* [2026-01-04, 09:22:00](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss) - [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss)
* [2026-01-04, 08:34:00](https://tech.slashdot.org/story/26/01/04/0547242/reddit-surges-in-popularity-to-overtake-tiktok-in-the-uk---thanks-to-googles-algorithm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Surges in Popularity to Overtake TikTok in the UK - Thanks to Google&apos;s Algorithm?](https://tech.slashdot.org/story/26/01/04/0547242/reddit-surges-in-popularity-to-overtake-tiktok-in-the-uk---thanks-to-googles-algorithm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 08:11:07](https://lobste.rs/s/wewhgh/can_i_finally_start_using_wayland_2026) - [Can I finally start using Wayland in 2026?](https://michael.stapelberg.ch/posts/2026-01-04-wayland-sway-in-2026/)
* [2026-01-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss) - [Ozempic is Changing the Foods Americans Buy](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss)
* [2026-01-04, 03:28:32](https://lobste.rs/s/za0nkg/building_tls_1_3_implementation_pure) - [Building a TLS 1.3 Implementation in Pure Common Lisp](https://atgreen.github.io/repl-yell/posts/pure-tls/)
* [2026-01-03, 23:48:00](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss) - [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss)
* [2026-01-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss) - [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss)
* [2026-01-03, 14:19:00](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss) - [Start-Up Proposes Scaled Up AI Data Center &apos;Active Radio Cable&apos; Connectivity](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss)
* [2026-01-03, 09:30:00](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss) - [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss)
* [2026-01-03, 04:53:20](https://news.ycombinator.com/item?id=46472930) - [Revisiting the original Roomba and its simple architecture](https://robotsinplainenglish.com/e/2025-12-27-roomba.html)
* [2026-01-03, 04:45:00](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss) - [QNX Releases New Desktop-Focused Image: QNX 8.0 With Xfce on Wayland](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss)
* [2026-01-03, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss) - [For Computational Devices, Talk Isn&apos;t Cheap](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss)
* [2026-01-02, 21:54:56](https://news.ycombinator.com/item?id=46469877) - [I charged $18k for a Static HTML Page (2019)](https://idiallo.com/blog/18000-dollars-static-web-page)
* [2026-01-02, 19:18:00](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss) - [FDA Officially Confirms Kava is a Food Under Federal Law](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss)
* [2026-01-02, 15:44:24](https://news.ycombinator.com/item?id=46465866) - [Ask HN: Help with LLVM](https://news.ycombinator.com/item?id=46465866)
* [2026-01-02, 14:35:00](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss) - [Irish Gov’t to Push for European Union to Ban Anonymous Social Media Accounts](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss)
* [2026-01-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss) - [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss)
* [2026-01-02, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss) - [39C3: Multiple Vulnerabilities in GnuPG and Other Cryptographic Tools](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss)
* [2026-01-02, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss) - [Funding Agencies Can End Profit-First Science Publishing](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss)
* [2026-01-01, 20:02:09](https://news.ycombinator.com/item?id=46457488) - [Six Harmless Bugs Lead to Remote Code Execution](https://mehmetince.net/the-story-of-a-perfect-exploit-chain-six-bugs-that-looked-harmless-until-they-became-pre-auth-rce-in-a-security-appliance/)
* [2026-01-01, 19:38:00](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss) - [Aging Immune Cells May Rewrite Their Own DNA to Stay Inflammatory](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss)
* [2026-01-01, 18:45:02](https://news.ycombinator.com/item?id=46456787) - [Monads in C# (Part 2): Result](https://alexyorke.github.io/2025/09/13/monads-in-c-sharp-part-2-result/)
* [2026-01-01, 14:46:00](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss) - [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss)
* [2026-01-01, 13:48:27](https://news.ycombinator.com/item?id=46454085) - [Logos Language Guide: Compile English to Rust](https://logicaffeine.com/guide)
* [2026-01-01, 10:03:00](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss) - [D7VK Reaches Version 1.1 and Adds New Frontend and Experimental Direct3D 6 Support](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss)
* [2026-01-01, 10:02:00](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss) - [Study Reveals Just How Much AI Slop is on YouTube](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss)
* [2026-01-01, 09:42:02](https://news.ycombinator.com/item?id=46452696) - [Scientists Uncover the Universal Geometry of Geology (2020)](https://www.quantamagazine.org/scientists-uncover-the-universal-geometry-of-geology-20201119/)
* [2026-01-01, 05:15:00](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss) - [US Insurance Giant Aflac Says Hackers Stole Personal and Health Data of 22.6 Million People](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss)
* [2026-01-01, 00:37:00](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss) - [Not Everyone Reads the Room the Same](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss)
* [2026-01-01, 00:00:00](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss) - [Happy New Year 2026 !](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss)
