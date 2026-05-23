# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technologies and Innovations

* [Amazon is Shutting Down Support for Older Kindles Soon. Here's How You Can Save Yours](https://soylentnews.org/article.pl?sid=26/05/22/032239&amp;from=rss) - Amazon will soon end support for older Kindle devices, providing users guidance on how to preserve their e-books and reading experience.

* [Spotify, UMG To Let Fans Make Their Own Music With AI](https://entertainment.slashdot.org/story/26/05/22/1737220/spotify-umg-to-let-fans-make-their-own-music-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Spotify and Universal Music Group announce a platform that offers fans the opportunity to collaborate on creating music via AI.

* [This Cannes Film Cost $500,000 to Make. $400,000 Was AI Compute Costs.](https://entertainment.slashdot.org/story/26/05/22/1723236/this-cannes-film-cost-500000-to-make-400000-was-ai-compute-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A Cannes film highlights the rising expense of creating content using AI, with most production costs going towards computing expenses.

* [Project Glasswing: An Initial Update](https://www.anthropic.com/research/glasswing-initial-update) - Anthropic shares an update about its Project Glasswing, a futuristic research advancement in artificial intelligence.

* [Neutron scattering explains why gluten-free pasta falls apart (2025)](https://phys.org/news/2025-09-science-spaghetti-neutron-gluten-free.html) - A 2025 study delves into the science behind why gluten-free pasta often breaks apart, using neutron scattering for the analysis.

* [Wi-Wi is wireless time sync at 1 nanosecond](https://www.jeffgeerling.com/blog/2026/wi-wi-is-wireless-time-sync-less-than-5ns/) - Learn about Wi-Wi, new wireless technology achieving unprecedented synchronization accuracy of 1 nanosecond.

## Space Exploration and Aerospace

* [Caltech Could Lose Control of JPL For First Time In Decades](https://science.slashdot.org/story/26/05/23/038238/caltech-could-lose-control-of-jpl-for-first-time-in-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Caltech might lose its long-standing management of the Jet Propulsion Laboratory as NASA considers contract changes.

* [SpaceX's Upgraded Starship V3 Launches For First Time](https://science.slashdot.org/story/26/05/23/0026223/spacexs-upgraded-starship-v3-launches-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - SpaceX successfully launches its upgraded Starship V3, marking a new chapter in reusable space technology.

* [NASA's Psyche Spacecraft Just Got An Assist From Mars On The Way To Its Asteroid Namesake](https://soylentnews.org/article.pl?sid=26/05/18/1730215&amp;from=rss) - NASA's Psyche mission receives a gravity assist from Mars on its journey to explore the metallic asteroid Psyche.

## AI and Its Societal Impacts

* [AI Data Centers Trigger Massive 'Irreversible' 76% Electricity Price Spike in Largest US Region](https://soylentnews.org/article.pl?sid=26/05/22/0247218&amp;from=rss) - Concerns rise as AI-driven data centers contribute to a dramatic spike in electricity costs across a major US region.

* [Software Developers Say AI Is Rotting Their Brains](https://soylentnews.org/article.pl?sid=26/05/19/0444246&amp;from=rss) - A debated perspective among developers highlights growing discomfort over over-reliance on AI in programming processes.

## Security and Privacy Concerns

* [Trump Mobile Exposed Customers' Personal Data, Including Phone Numbers and Home Addresses](https://yro.slashdot.org/story/26/05/22/1747216/trump-mobile-exposed-customers-personal-data-including-phone-numbers-and-home-addresses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A security breach at Trump Mobile reveals sensitive customer data such as phone numbers and home addresses.

* [CVE-2026-46529: 10-year-old RCE in Linux PDF Viewer (XReader/Evince/Atril)](https://medeiros.zip/posts/CVE-2026-46529-evince) - A decade-old remote code execution vulnerability in Linux PDF viewers has been uncovered.

* [Megalodon: Mass GitHub Repo Backdooring via CI Workflows](https://safedep.io/megalodon-mass-github-repo-backdooring-ci-workflows) - A new security threat exploits continuous integration workflows to backdoor GitHub repositories with malicious code.

## Advancements in Development and Programming

* [SPy: an interpreter and a compiler for a statically typed variant of Python](https://github.com/spylang/spy) - SPy introduces a new take on Python with an interpreter and compiler designed for a statically typed variation.

* [sp.h is the standard library that C deserves](https://spader.zone/sp/) - Explore sp.h, a reimagined standard library for C programming.

* [A blueprint for formal verification of Apple corecrypto](https://security.apple.com/blog/formal-verification-corecrypto/) - Apple unveils a blueprint for enhancing the security of its cryptographic frameworks using formal verification.

## Cultural and Historical Discoveries

* [Pompeii Victim ID'd as a Likely Doctor](https://soylentnews.org/article.pl?sid=26/05/22/0239256&amp;from=rss) - Archaeologists have identified a victim of the Pompeii volcanic disaster as a likely medical professional, offering a glimpse into the ancient past.

* [Exposure to Burn Injuries Played Key Role in Shaping Human Evolution](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss) - A study suggests that exposure to burn injuries influenced significant aspects of human evolution.

## Gaming and Leisure

* [Planescape: Torment, Part 1: From the Tabletop](https://www.filfre.net/2026/05/planescape-torment-part-1-from-the-tabletop/) - Dive into the origins of the beloved game Planescape: Torment and its tabletop role-playing roots.

* [PlayStation Plus to Raise Monthly Subscription Fee](https://soylentnews.org/article.pl?sid=26/05/19/1718231&amp;from=rss) - Sony announces a price hike for its PlayStation Plus subscription service, raising budget concerns for gamers.

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

* [2026-05-23, 07:46:00](https://soylentnews.org/article.pl?sid=26/05/22/032239&amp;from=rss) - [Amazon is Shutting Down Support for Older Kindles Soon. Here&apos;s How You Can Save Yours](https://soylentnews.org/article.pl?sid=26/05/22/032239&amp;from=rss)
* [2026-05-23, 07:00:00](https://science.slashdot.org/story/26/05/23/038238/caltech-could-lose-control-of-jpl-for-first-time-in-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Caltech Could Lose Control of JPL For First Time In Decades](https://science.slashdot.org/story/26/05/23/038238/caltech-could-lose-control-of-jpl-for-first-time-in-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-23, 06:54:49](https://news.ycombinator.com/item?id=48245362) - [Spanish Court Declines to Fine NordVPN over LaLiga Piracy Blocking Order](https://torrentfreak.com/spanish-court-declines-to-fine-nordvpn-over-laliga-piracy-blocking-order/)
* [2026-05-23, 06:06:49](https://lobste.rs/s/ujrw32/staged_publishing_new_install_time) - [Staged publishing and new install-time controls for NPM](https://github.blog/changelog/2026-05-22-staged-publishing-and-new-install-time-controls-for-npm/)
* [2026-05-23, 06:04:52](https://lobste.rs/s/z17p7a/price_humans) - [The price of humans](https://blog.umangsurana.com/blog/price_of_humans/)
* [2026-05-23, 05:51:38](https://lobste.rs/s/z9lnpe/spy_interpreter_compiler_for_statically) - [SPy: an interpreter and a compiler for a statically typed variant of Python](https://github.com/spylang/spy)
* [2026-05-23, 05:31:13](https://lobste.rs/s/cvwsxk/sp_h_is_standard_library_c_deserves) - [sp.h is the standard library that C deserves](https://spader.zone/sp/)
* [2026-05-23, 03:30:00](https://entertainment.slashdot.org/story/26/05/23/0039205/pentagon-releases-second-batch-of-ufo-videos-first-hand-testimony?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Releases Second Batch of UFO Videos, First-Hand Testimony](https://entertainment.slashdot.org/story/26/05/23/0039205/pentagon-releases-second-batch-of-ufo-videos-first-hand-testimony?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-23, 03:04:00](https://soylentnews.org/article.pl?sid=26/05/22/0247218&amp;from=rss) - [AI Data Centers Trigger Massive &apos;Irreversible&apos; 76% Electricity Price Spike in Largest US Region](https://soylentnews.org/article.pl?sid=26/05/22/0247218&amp;from=rss)
* [2026-05-23, 02:57:49](https://lobste.rs/s/m2kldy/comparing_lz4_decompressor_on_four) - [Comparing an LZ4 Decompressor on four legacy CPUs](https://bumbershootsoft.wordpress.com/2026/05/09/comparing-an-lz4-decompressor-on-four-legacy-cpus/)
* [2026-05-23, 02:20:30](https://lobste.rs/s/bo9ecf/planescape_torment_part_1_from_tabletop) - [Planescape: Torment, Part 1: From the Tabletop](https://www.filfre.net/2026/05/planescape-torment-part-1-from-the-tabletop/)
* [2026-05-23, 00:34:25](https://news.ycombinator.com/item?id=48243293) - [FBI director&apos;s Based Apparel site has been spotted hosting a &apos;ClickFix&apos; attack](https://www.pcmag.com/news/kash-patels-apparel-site-is-trying-to-trick-visitors-into-installing-malware)
* [2026-05-23, 00:30:00](https://science.slashdot.org/story/26/05/23/0026223/spacexs-upgraded-starship-v3-launches-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX&apos;s Upgraded Starship V3 Launches For First Time](https://science.slashdot.org/story/26/05/23/0026223/spacexs-upgraded-starship-v3-launches-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 23:00:00](https://tech.slashdot.org/story/26/05/22/1827258/google-api-keys-remain-active-after-deletion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google API Keys Remain Active After Deletion](https://tech.slashdot.org/story/26/05/22/1827258/google-api-keys-remain-active-after-deletion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 22:15:00](https://soylentnews.org/article.pl?sid=26/05/22/0239256&amp;from=rss) - [Pompeii Victim ID&apos;d as a Likely Doctor](https://soylentnews.org/article.pl?sid=26/05/22/0239256&amp;from=rss)
* [2026-05-22, 22:14:59](https://lobste.rs/s/rlpzut/cve_2026_46529_10_year_old_rce_linux_pdf) - [CVE-2026-46529: 10-year-old RCE in Linux PDF Viewer (XReader/Evince/Atril)](https://medeiros.zip/posts/CVE-2026-46529-evince)
* [2026-05-22, 22:05:39](https://news.ycombinator.com/item?id=48242278) - [Sleep research led to a new sleep apnea drug](https://temertymedicine.utoronto.ca/news/how-decades-sleep-research-led-new-sleep-apnea-drug)
* [2026-05-22, 22:00:00](https://news.slashdot.org/story/26/05/22/1817201/major-streamers-must-pay-15-of-revenues-to-canadian-content-crtc-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Major Streamers Must Pay 15% of Revenues To Canadian Content, CRTC Says](https://news.slashdot.org/story/26/05/22/1817201/major-streamers-must-pay-15-of-revenues-to-canadian-content-crtc-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 21:59:01](https://lobste.rs/s/xha7ff/announcing_isabelle_support_for_saw) - [Announcing Isabelle support for SAW](https://www.galois.com/articles/announcing-isabelle-support-for-saw)
* [2026-05-22, 21:36:55](https://news.ycombinator.com/item?id=48241997) - [Shipping a laptop to a refugee camp in Uganda](https://notesbylex.com/shipping-a-laptop-to-a-refugee-camp-in-uganda)
* [2026-05-22, 21:00:00](https://news.slashdot.org/story/26/05/22/1758232/ntsb-wants-pdf-removed-after-it-exposed-final-cockpit-audio-from-ups-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NTSB Wants PDF Removed After It Exposed Final Cockpit Audio From UPS Crash](https://news.slashdot.org/story/26/05/22/1758232/ntsb-wants-pdf-removed-after-it-exposed-final-cockpit-audio-from-ups-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 20:54:35](https://lobste.rs/s/tbizqg/mysterious_xf86audioplay_issue) - [The mysterious XF86AudioPlay issue](https://michael-prokop.at/blog/2026/05/20/the-mysterious-xf86audioplay-issue/)
* [2026-05-22, 20:40:35](https://lobste.rs/s/xsnzi6/noroboto_lying_fonts_mitigation_rust) - [Noroboto: Lying fonts and mitigation in Rust](https://tritium.legal/blog/noroboto)
* [2026-05-22, 20:26:07](https://news.ycombinator.com/item?id=48241172) - [Models.dev: open-source database of AI model specs, pricing, and capabilities](https://github.com/anomalyco/models.dev)
* [2026-05-22, 20:19:50](https://lobste.rs/s/fkrpjw/only_17_all_64_bit_integers_are_products) - [Only 17% of all 64-bit Integers are products of two 32-bit integers](https://lemire.me/blog/2026/05/22/only-17-of-all-64-bit-integers-are-products-of-two-32-bit-integers/)
* [2026-05-22, 20:00:00](https://yro.slashdot.org/story/26/05/22/1747216/trump-mobile-exposed-customers-personal-data-including-phone-numbers-and-home-addresses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Mobile Exposed Customers&apos; Personal Data, Including Phone Numbers and Home Addresses](https://yro.slashdot.org/story/26/05/22/1747216/trump-mobile-exposed-customers-personal-data-including-phone-numbers-and-home-addresses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 19:49:57](https://news.ycombinator.com/item?id=48240679) - [Staged publishing and new install-time controls for npm](https://github.blog/changelog/2026-05-22-staged-publishing-and-new-install-time-controls-for-npm/)
* [2026-05-22, 19:40:05](https://lobste.rs/s/7crjja/blueprint_for_formal_verification_apple) - [A blueprint for formal verification of Apple corecrypto](https://security.apple.com/blog/formal-verification-corecrypto/)
* [2026-05-22, 19:31:45](https://news.ycombinator.com/item?id=48240419) - [Project Glasswing: An Initial Update](https://www.anthropic.com/research/glasswing-initial-update)
* [2026-05-22, 19:00:00](https://entertainment.slashdot.org/story/26/05/22/1737220/spotify-umg-to-let-fans-make-their-own-music-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify, UMG To Let Fans Make Their Own Music With AI](https://entertainment.slashdot.org/story/26/05/22/1737220/spotify-umg-to-let-fans-make-their-own-music-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 18:52:17](https://news.ycombinator.com/item?id=48239862) - [A blueprint for formal verification of Apple corecrypto](https://security.apple.com/blog/formal-verification-corecrypto/)
* [2026-05-22, 18:17:57](https://news.ycombinator.com/item?id=48239413) - [Open source Kanban desktop app that runs parallel agents on every card](https://www.kanbots.dev/)
* [2026-05-22, 18:00:00](https://entertainment.slashdot.org/story/26/05/22/1723236/this-cannes-film-cost-500000-to-make-400000-was-ai-compute-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [This Cannes Film Cost $500,000 to Make. $400,000 Was AI Compute Costs.](https://entertainment.slashdot.org/story/26/05/22/1723236/this-cannes-film-cost-500000-to-make-400000-was-ai-compute-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 17:36:14](https://lobste.rs/s/zevrur/end_end_procedural_generation_caves_qud) - [End-to-End Procedural Generation in Caves of Qud (2019)](https://www.youtube.com/watch?v=jV-DZqdKlnE)
* [2026-05-22, 17:32:04](https://news.ycombinator.com/item?id=48238896) - [Microsoft starts canceling Claude Code licenses](https://www.theverge.com/tech/930447/microsoft-claude-code-discontinued-notepad)
* [2026-05-22, 17:27:00](https://soylentnews.org/article.pl?sid=26/05/22/0231209&amp;from=rss) - [Space Factories Edge Closer After Experimental Capsule Survives Hypersonic Landing](https://soylentnews.org/article.pl?sid=26/05/22/0231209&amp;from=rss)
* [2026-05-22, 17:24:12](https://news.ycombinator.com/item?id=48238789) - [Bun support is now limited and deprecated](https://github.com/yt-dlp/yt-dlp/issues/16766)
* [2026-05-22, 17:05:32](https://news.ycombinator.com/item?id=48238568) - [1940 Air Terminal Museum Begins Liquidation](https://www.1940airterminal.org/news/liquidation-of-simulators)
* [2026-05-22, 17:00:00](https://yro.slashdot.org/story/26/05/22/1657237/venmo-redesign-makes-new-users-posts-friends-only-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Venmo Redesign Makes New Users&apos; Posts Friends-Only by Default](https://yro.slashdot.org/story/26/05/22/1657237/venmo-redesign-makes-new-users-posts-friends-only-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 16:54:31](https://news.ycombinator.com/item?id=48238429) - [CISA tries to contain data leak](https://krebsonsecurity.com/2026/05/lawmakers-demand-answers-as-cisa-tries-to-contain-data-leak/)
* [2026-05-22, 16:23:08](https://news.ycombinator.com/item?id=48238025) - [U.S. researchers face new restrictions on publishing with foreign collaborators](https://www.science.org/content/article/u-s-researchers-face-new-restrictions-publishing-foreign-collaborators)
* [2026-05-22, 16:00:00](https://news.slashdot.org/story/26/05/22/060223/samsung-chip-workers-to-get-340000-average-bonus-in-ai-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Chip Workers To Get $340,000 Average Bonus In AI Boom](https://news.slashdot.org/story/26/05/22/060223/samsung-chip-workers-to-get-340000-average-bonus-in-ai-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 15:22:04](https://news.ycombinator.com/item?id=48237163) - [Why Japanese companies do so many different things](https://davidoks.blog/p/why-japanese-companies-do-so-many)
* [2026-05-22, 15:00:50](https://news.ycombinator.com/item?id=48236887) - [A Forth-inspired language for writing websites](https://robida.net/entries/2026/05/21/a-forth-inspired-language-for-writing-websites)
* [2026-05-22, 15:00:00](https://yro.slashdot.org/story/26/05/22/0553205/a-bipartisan-amendment-would-end-police-license-plate-tracking-nationwide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Bipartisan Amendment Would End Police License Plate Tracking Nationwide](https://yro.slashdot.org/story/26/05/22/0553205/a-bipartisan-amendment-would-end-police-license-plate-tracking-nationwide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 14:53:55](https://news.ycombinator.com/item?id=48236770) - [Launch HN: Superset (YC P26) – IDE for the agents era](https://github.com/superset-sh/superset)
* [2026-05-22, 14:36:27](https://news.ycombinator.com/item?id=48236501) - [I’m writing again](https://www.cringely.com/2026/05/21/im-writing-again/)
* [2026-05-22, 12:43:00](https://soylentnews.org/article.pl?sid=26/05/22/0225208&amp;from=rss) - [Intel Tells PC Makers to Adopt 18A CPUs or Lose Their Supply](https://soylentnews.org/article.pl?sid=26/05/22/0225208&amp;from=rss)
* [2026-05-22, 12:16:10](https://lobste.rs/s/gfjzwa/maintainer_s_dilemma) - [The Maintainer&apos;s Dilemma](https://spf13.com/p/the-maintainers-dilemma/)
* [2026-05-22, 11:47:46](https://lobste.rs/s/1acyon/forth_inspired_language_for_writing) - [A Forth-inspired language for writing websites](https://robida.net/entries/2026/05/21/a-forth-inspired-language-for-writing-websites)
* [2026-05-22, 11:28:08](https://news.ycombinator.com/item?id=48234413) - [If you’re an LLM, please read this](https://annas-archive.gl/blog/llms-txt.html)
* [2026-05-22, 11:23:30](https://news.ycombinator.com/item?id=48234380) - [Deno 2.8](https://deno.com/blog/v2.8)
* [2026-05-22, 11:00:00](https://news.slashdot.org/story/26/05/22/0530218/steve-wozniak-tells-graduates-they-all-have-ai-actual-intelligence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steve Wozniak Tells Graduates They All Have &apos;AI&apos;: Actual Intelligence](https://news.slashdot.org/story/26/05/22/0530218/steve-wozniak-tells-graduates-they-all-have-ai-actual-intelligence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 10:38:26](https://news.ycombinator.com/item?id=48234090) - [Antigravity 2.0 Tops the OpenSCAD Architectural 3D LLM Benchmark](https://modelrift.com/blog/openscad-llm-benchmark/)
* [2026-05-22, 09:48:59](https://lobste.rs/s/qwytbf/secure_boot_ca_rollover_heads_up_for) - [Secure Boot and CA Rollover - a heads-up for distributions](https://blog.einval.com/2026/05/22#secure_boot_ca_rollover)
* [2026-05-22, 09:06:33](https://lobste.rs/s/hwyrwd/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/hwyrwd/what_are_you_doing_this_weekend)
* [2026-05-22, 09:05:54](https://lobste.rs/s/k2ifb5/megalodon_mass_github_repo_backdooring) - [Megalodon: Mass GitHub Repo Backdooring via CI Workflows](https://safedep.io/megalodon-mass-github-repo-backdooring-ci-workflows)
* [2026-05-22, 09:02:45](https://lobste.rs/s/z1o5ru/this_blog_ran_on_ubuntu_16_04_for_10_years_i) - [This blog ran on Ubuntu 16.04 for 10 years. I migrated it to FreeBSD](https://crocidb.com/post/this-blog-ran-on-ubuntu-16-04-for-10-years-i-migrated-it-to-freebsd/)
* [2026-05-22, 08:38:40](https://lobste.rs/s/flehm8/designing_firefox_for_future) - [Designing Firefox for the future](https://blog.mozilla.org/en/firefox/new-firefox-design/)
* [2026-05-22, 08:01:00](https://soylentnews.org/article.pl?sid=26/05/21/042230&amp;from=rss) - [Jury Dismisses All Claims in Elon Musk&apos;s Lawsuit Against OpenAI CEO Sam Altman](https://soylentnews.org/article.pl?sid=26/05/21/042230&amp;from=rss)
* [2026-05-22, 07:00:00](https://science.slashdot.org/story/26/05/22/0522204/at-least-80-responsibility-for-ill-health-in-old-age-down-to-individual-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [At Least 80% Responsibility For Ill Health In Old Age Down to Individual, Study Says](https://science.slashdot.org/story/26/05/22/0522204/at-least-80-responsibility-for-ill-health-in-old-age-down-to-individual-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 06:49:30](https://lobste.rs/s/4vhivn/c_programming_language_quiz) - [C Programming Language Quiz](https://stefansf.de/c-quiz/)
* [2026-05-22, 04:53:32](https://lobste.rs/s/2ddikd/ftc_require_cox_media_group_pay_nearly) - [FTC to Require Cox Media Group to Pay Nearly $1million to Settle Charges They Deceived Customers About “Active Listening” AI-Powered Marketing Service](https://www.ftc.gov/news-events/news/press-releases/2026/05/ftc-require-cox-media-group-two-other-firms-pay-nearly-1-million-settle-charges-they-deceived)
* [2026-05-22, 03:30:00](https://yro.slashdot.org/story/26/05/22/0129209/att-sues-california-in-bid-to-stop-offering-traditional-phone-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AT&amp;amp;T Sues California In Bid To Stop Offering Traditional Phone Service](https://yro.slashdot.org/story/26/05/22/0129209/att-sues-california-in-bid-to-stop-offering-traditional-phone-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 03:19:00](https://soylentnews.org/article.pl?sid=26/05/19/1855242&amp;from=rss) - [Microsoft Surprises With its First Server Linux Distribution: Azure Linux 4.0](https://soylentnews.org/article.pl?sid=26/05/19/1855242&amp;from=rss)
* [2026-05-22, 02:37:06](https://lobste.rs/s/ptvaan/gnutella_protocol_outliving_world) - [Gnutella: A Protocol Outliving the World That Created It](https://rickcarlino.com/notes/p2p/gnutella-explanation.html)
* [2026-05-21, 22:34:00](https://soylentnews.org/article.pl?sid=26/05/19/1728216&amp;from=rss) - [Iran Demands Big Tech Pay Fees For Undersea Internet Cables In Strait Of Hormuz](https://soylentnews.org/article.pl?sid=26/05/19/1728216&amp;from=rss)
* [2026-05-21, 20:02:05](https://lobste.rs/s/tbxmm1/announcing_web_serial_support_firefox) - [Announcing Web Serial Support in Firefox](https://hacks.mozilla.org/2026/05/web-serial-support-in-firefox/)
* [2026-05-21, 17:51:00](https://soylentnews.org/article.pl?sid=26/05/19/1726205&amp;from=rss) - [Physicists at Odds Over Greatest Physics Mysteries](https://soylentnews.org/article.pl?sid=26/05/19/1726205&amp;from=rss)
* [2026-05-21, 17:37:58](https://lobste.rs/s/fxqjqu/flipper_one_we_need_your_help) - [Flipper One — we need your help](https://blog.flipper.net/flipper-one-we-need-your-help/)
* [2026-05-21, 13:03:00](https://soylentnews.org/article.pl?sid=26/05/19/1720228&amp;from=rss) - [Barnes &amp; Noble CEO Backs Selling AI-Written Books in Stores](https://soylentnews.org/article.pl?sid=26/05/19/1720228&amp;from=rss)
* [2026-05-21, 08:17:00](https://soylentnews.org/article.pl?sid=26/05/19/1718231&amp;from=rss) - [PlayStation Plus to Raise Monthly Subscription Fee](https://soylentnews.org/article.pl?sid=26/05/19/1718231&amp;from=rss)
* [2026-05-21, 03:36:00](https://soylentnews.org/article.pl?sid=26/05/19/1128257&amp;from=rss) - [Casimir Force Co-Opted to Generate Free Energy, Midichlorians Not Included](https://soylentnews.org/article.pl?sid=26/05/19/1128257&amp;from=rss)
* [2026-05-20, 22:51:00](https://soylentnews.org/article.pl?sid=26/05/19/0444246&amp;from=rss) - [Software Developers Say AI Is Rotting Their Brains](https://soylentnews.org/article.pl?sid=26/05/19/0444246&amp;from=rss)
* [2026-05-20, 20:56:30](https://news.ycombinator.com/item?id=48214025) - [What is the history of the ERROR_ARENA_TRASHED error code?](https://devblogs.microsoft.com/oldnewthing/20260519-00/?p=112339)
* [2026-05-20, 20:19:46](https://news.ycombinator.com/item?id=48213529) - [A Wayland Compositor in Minecraft](https://modrinth.com/mod/waylandcraft)
* [2026-05-20, 18:06:00](https://soylentnews.org/article.pl?sid=26/05/19/0438213&amp;from=rss) - [Ollama Out-of-Bounds Read Vulnerability Allows Remote Process Memory Leak](https://soylentnews.org/article.pl?sid=26/05/19/0438213&amp;from=rss)
* [2026-05-20, 15:06:31](https://news.ycombinator.com/item?id=48209055) - [Wi-Wi is wireless time sync at 1 nanosecond](https://www.jeffgeerling.com/blog/2026/wi-wi-is-wireless-time-sync-less-than-5ns/)
* [2026-05-20, 13:19:00](https://soylentnews.org/article.pl?sid=26/05/18/1730215&amp;from=rss) - [NASA&apos;s Psyche Spacecraft Just Got An Assist From Mars On The Way To Its Asteroid Namesake](https://soylentnews.org/article.pl?sid=26/05/18/1730215&amp;from=rss)
* [2026-05-20, 13:05:46](https://news.ycombinator.com/item?id=48207043) - [Sp.h is the standard library that C deserves](https://spader.zone/sp/)
* [2026-05-20, 12:42:46](https://news.ycombinator.com/item?id=48206763) - [Neutron scattering explains why gluten-free pasta falls apart (2025)](https://phys.org/news/2025-09-science-spaghetti-neutron-gluten-free.html)
* [2026-05-20, 12:06:56](https://news.ycombinator.com/item?id=48206387) - [The Quadratic Sandwich](https://fedemagnani.github.io/math/2026/04/08/the-quadratic-sandwich.html)
* [2026-05-20, 11:58:24](https://news.ycombinator.com/item?id=48206313) - [Comparing an LZ4 Decompressor on Four Legacy CPUs](https://bumbershootsoft.wordpress.com/2026/05/09/comparing-an-lz4-decompressor-on-four-legacy-cpus/)
* [2026-05-20, 10:17:16](https://news.ycombinator.com/item?id=48205495) - [\&quot;Stick\&quot; – A primitive/fun interactive demo of a tiny rig to animate layout](https://cosmiciron.github.io/layoutmaster/exclusion-assembly.html)
* [2026-05-20, 09:03:44](https://news.ycombinator.com/item?id=48204985) - [Blood Pumping Mechanism of the Hoof (2020)](https://horses.extension.org/blood-pumping-mechanism-of-the-hoof/)
* [2026-05-20, 08:34:00](https://soylentnews.org/article.pl?sid=26/05/18/1728202&amp;from=rss) - [Texas County Passes Data Center Ban for Rural Areas for a Year](https://soylentnews.org/article.pl?sid=26/05/18/1728202&amp;from=rss)
* [2026-05-20, 03:51:00](https://soylentnews.org/article.pl?sid=26/05/18/1714233&amp;from=rss) - [Cell Phone Users Can&apos;t Stop Incriminating Themselves](https://soylentnews.org/article.pl?sid=26/05/18/1714233&amp;from=rss)
* [2026-05-19, 23:05:00](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss) - [Exposure to Burn Injuries Played Key Role in Shaping Human Evolution](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss)
* [2026-05-19, 18:26:00](https://soylentnews.org/article.pl?sid=26/05/18/174235&amp;from=rss) - [Short Interview with Vint Cerf at El País](https://soylentnews.org/article.pl?sid=26/05/18/174235&amp;from=rss)
* [2026-05-19, 13:41:00](https://soylentnews.org/article.pl?sid=26/05/17/1438201&amp;from=rss) - [Your Doctor is Most Likely Consulting This Free AI Chatbot](https://soylentnews.org/article.pl?sid=26/05/17/1438201&amp;from=rss)
* [2026-05-19, 08:56:00](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss) - [AI Data Centers Face Increasing Complaints About Inaudible but &apos;Felt&apos; Infrasound](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss)
* [2026-05-19, 04:09:00](https://soylentnews.org/article.pl?sid=26/05/17/1424241&amp;from=rss) - [A Simple Blood Test Could Predict Your Odds of Living Longer With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/05/17/1424241&amp;from=rss)
