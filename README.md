# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Security Issues

* [Linux Kernel Flaw Lets Unprivileged Users Access Root-Only Files, Execute Arbitrary Commands as Root](https://linux.slashdot.org/story/26/05/23/0727241/linux-kernel-flaw-lets-unprivileged-users-access-root-only-files-execute-arbitrary-commands-as-root?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A critical vulnerability in the Linux kernel is allowing unprivileged users to access root-only files and execute commands as root. This raises serious concerns over security in systems relying on Linux.

* [In Stunning Display Of Stupid, Secret CISA Credentials Found In Public GitHub Repo](https://soylentnews.org/article.pl?sid=26/05/22/0545221&amp;from=rss) - A massive security blunder reveals that secret CISA credentials were left exposed on a public GitHub repository, raising concerns over cybersecurity protocols.

* [Oura says it gets government demands for user data](https://this.weekinsecurity.com/oura-says-it-gets-government-demands-for-user-data-will-it-share-how-many/) - Oura, the company behind the smart ring, admits to receiving numerous government requests for user data but has yet to disclose specific details.

* [Project Glasswing: An Initial Update](https://www.anthropic.com/research/glasswing-initial-update) - Anthropic provides an update on Project Glasswing, an initiative aiming to strengthen AI safety and alignment with human values.

* [Google API Keys Remain Active After Deletion](https://tech.slashdot.org/story/26/05/22/1827258/google-api-keys-remain-active-after-deletion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Investigation reveals that deleted Google API keys may remain active, presenting risks for hackers to exploit API services.

* [Ollama Out-of-Bounds Read Vulnerability Allows Remote Process Memory Leak](https://soylentnews.org/article.pl?sid=26/05/19/0438213&amp;from=rss) - A vulnerability in the Ollama system allows remote attackers to exploit process memory leaks, raising critical questions over security in AI-driven systems.

## Open Source and Software Innovations

* [z386: An Open-Source 80386 Built Around Original Microcode - Small Things Retro](https://nand2mario.github.io/posts/2026/z386/) - A fascinating dive into an open-source IBM 80386 project crafted using the original microcode for retro computing enthusiasts.

* [Rubish: A Unix shell written in pure Ruby](https://github.com/amatsuda/rubish) - Check out Rubish, an innovative Unix shell entirely built in Ruby, showing the versatility of the programming language.

* [SPy: an interpreter and a compiler for a statically typed variant of Python](https://github.com/spylang/spy) - Dive into SPy, a new language offering a unique blend of Python syntax and static typing for developers.

* [mvm - a fast virtual machine for Go](https://mvm.sh/) - Explore the cutting-edge 'mvm,' a high-performance virtual machine designed specifically for the Go programming language.

## AI's Expanding Role

* [AI Data Centers Trigger Massive 'Irreversible' 76% Electricity Price Spike in Largest US Region](https://soylentnews.org/article.pl?sid=26/05/22/0247218&amp;from=rss) - The growing demands of AI data centers have led to a significant surge in electricity prices, sparking debate on sustainability.

* [This Cannes Film Cost $500,000 to Make. $400,000 Was AI Compute Costs.](https://entertainment.slashdot.org/story/26/05/22/1723236/this-cannes-film-cost-500000-to-make-400000-was-ai-compute-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A remarkable example of AI's economic impact in the creative industry is demonstrated by a Cannes film with the bulk of its production cost spent on AI compute.

* [Spotify, UMG To Let Fans Make Their Own Music With AI](https://entertainment.slashdot.org/story/26/05/22/1737220/spotify-umg-to-let-fans-make-their-own-music-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Spotify partners with Universal Music Group to enable fans to create personalized music using AI-based tools.

## Space and Aerospace Developments

* [SpaceX's Upgraded Starship V3 Launches For First Time](https://science.slashdot.org/story/26/05/23/0026223/spacexs-upgraded-starship-v3-launches-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - SpaceX achieves a new milestone with the inaugural launch of its upgraded Starship V3, a testament to rapid advancements in space exploration technology.

* [NASA's Psyche Spacecraft Just Got An Assist From Mars On The Way To Its Asteroid Namesake](https://soylentnews.org/article.pl?sid=26/05/18/1730215&amp;from=rss) - NASA's Psyche spacecraft utilized Mars' gravitational field to assist its journey to an asteroid, showcasing innovative mission trajectory planning.

## Cultural and Social Insights

* [HP bought Hyperspace, & once offered 3 different pre-boot or in-boot OSs, including Quickweb](https://gekk.info/articles/hp-quickweb.htm) - Delve into the intriguing history of HP's innovative approach to offering three distinct pre-boot or in-boot operating systems.

* [Why Japanese companies do so many different things](https://davidoks.blog/p/why-japanese-companies-do-so-many) - Discover the cultural and historical context explaining why Japanese corporations excel in multiple industries.

## Legal and Government Actions

* [Iran Demands Big Tech Pay Fees For Undersea Internet Cables In Strait Of Hormuz](https://soylentnews.org/article.pl?sid=26/05/19/1728216&amp;from=rss) - In a controversial move, Iran demands that technology giants pay fees for using undersea internet cables in a key global trade route.

* [NTSB Wants PDF Removed After It Exposed Final Cockpit Audio From UPS Crash](https://news.slashdot.org/story/26/05/22/1758232/ntsb-wants-pdf-removed-after-it-exposed-final-cockpit-audio-from-ups-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The National Transportation Safety Board is demanding the removal of a leaked PDF containing sensitive audio from a UPS crash.

## Science and Research

* [What Do Gödel's Incompleteness Theorems Truly Mean?](https://soylentnews.org/article.pl?sid=26/05/22/0314250&amp;from=rss) - Unravel the deep philosophical and mathematical implications of Gödel's incompleteness theorems in this intriguing exploration.

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

* [2026-05-23, 19:34:00](https://tech.slashdot.org/story/26/05/23/1840256/air-france-airbus-guilty-of-corporate-manslaughter-in-2009-air-france-447-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Air France, Airbus Guilty of Corporate Manslaughter In 2009 Air France 447 Crash](https://tech.slashdot.org/story/26/05/23/1840256/air-france-airbus-guilty-of-corporate-manslaughter-in-2009-air-france-447-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-23, 18:57:06](https://lobste.rs/s/dqig3h/on_dl) - [On the &lt;dl&gt;](https://benmyers.dev/blog/on-the-dl/)
* [2026-05-23, 18:55:05](https://lobste.rs/s/6rwldo/jira_is_turing_complete) - [Jira is Turing-Complete](https://seriot.ch/computation/jira.html)
* [2026-05-23, 18:45:37](https://news.ycombinator.com/item?id=48250144) - [It&apos;s time to talk about my writerdeck](https://veronicaexplains.net/my-first-writerdeck/)
* [2026-05-23, 18:34:00](https://news.slashdot.org/story/26/05/23/0639208/free-software-foundations-call-for-librelocals-answered-on-six-continents---with-more-coming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Free Software Foundation&apos;s Call for &apos;LibreLocals&apos; Answered on Six Continents - With More Coming](https://news.slashdot.org/story/26/05/23/0639208/free-software-foundations-call-for-librelocals-answered-on-six-continents---with-more-coming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-23, 18:02:42](https://news.ycombinator.com/item?id=48249747) - [Texas woman arrested for Facebook post about town water quality](https://reclaimthenet.org/texas-woman-arrested-for-facebook-post-about-town-water-quality)
* [2026-05-23, 17:34:00](https://tech.slashdot.org/story/26/05/23/1647242/friday-googles-ai-powered-search-results-glitched-on-the-word-disregard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Friday Google&apos;s AI-Powered Search Results Glitched on the Word &apos;Disregard&apos;](https://tech.slashdot.org/story/26/05/23/1647242/friday-googles-ai-powered-search-results-glitched-on-the-word-disregard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-23, 17:20:00](https://soylentnews.org/article.pl?sid=26/05/22/0545221&amp;from=rss) - [In Stunning Display Of Stupid, Secret CISA Credentials Found In Public GitHub Repo](https://soylentnews.org/article.pl?sid=26/05/22/0545221&amp;from=rss)
* [2026-05-23, 16:34:00](https://news.slashdot.org/story/26/05/23/0320215/researchers-say-the-worst-climate-future-is-less-likely-but-the-best-one-is-also-slipping-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Say the Worst Climate Future is Less Likely. But the Best One is Also Slipping Away](https://news.slashdot.org/story/26/05/23/0320215/researchers-say-the-worst-climate-future-is-less-likely-but-the-best-one-is-also-slipping-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-23, 16:24:50](https://news.ycombinator.com/item?id=48248954) - [Reverse engineering circuitry in a Spacelab computer from 1980](https://www.righto.com/2026/05/reverse-engineering-spacelab-computer.html)
* [2026-05-23, 16:13:22](https://news.ycombinator.com/item?id=48248861) - [Evaluating Spec CPU2026](https://chipsandcheese.com/p/evaluating-spec-cpu2026)
* [2026-05-23, 16:02:43](https://news.ycombinator.com/item?id=48248775) - [Italy Cancels Boeing Pegasus Order, Shifting to Airbus A330 MRTT](https://www.euronews.com/my-europe/2026/05/21/italy-moves-to-airbus-a330-tankers-in-major-nato-aligned-shift)
* [2026-05-23, 15:50:15](https://lobste.rs/s/ilahdq/hershey_is_textual_vector_font_format) - [Hershey is a textual vector font format](https://wiki.xxiivv.com/site/hershey.html)
* [2026-05-23, 15:34:00](https://linux.slashdot.org/story/26/05/23/0727241/linux-kernel-flaw-lets-unprivileged-users-access-root-only-files-execute-arbitrary-commands-as-root?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Kernel Flaw Lets Unprivileged Users Access Root-Only Files, Execute Arbitrary Commands as Root](https://linux.slashdot.org/story/26/05/23/0727241/linux-kernel-flaw-lets-unprivileged-users-access-root-only-files-execute-arbitrary-commands-as-root?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-23, 15:24:02](https://lobste.rs/s/lcrlcb/z386_open_source_80386_built_around) - [z386: An Open-Source 80386 Built Around Original Microcode - Small Things Retro](https://nand2mario.github.io/posts/2026/z386/)
* [2026-05-23, 15:18:35](https://lobste.rs/s/za6jjo/c_constructs_still_don_t_work_c_few_changed) - [C Constructs That Still Don’t Work in C++ — and a Few That Changed](https://lospino.so/blog/c-constructs-that-still-dont-work-in-cpp/)
* [2026-05-23, 15:05:29](https://lobste.rs/s/5zonsl/cuneiforth_forth_for_your_chifir) - [Cuneiforth: A Forth for your Chifir](https://gopher.floodgap.com/gopher/gw?a=gopher%3A%2F%2Fthelambdalab.xyz%2F1cuneiforth%2F)
* [2026-05-23, 14:55:59](https://news.ycombinator.com/item?id=48248238) - [Lisp in Vim (2019)](https://susam.net/lisp-in-vim.html)
* [2026-05-23, 14:34:00](https://yro.slashdot.org/story/26/05/23/055224/tech-ceos-call-for-a-universal-basic-income-but-what-are-the-alternatives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech CEOs Call for a Universal Basic Income. But What are the Alternatives?](https://yro.slashdot.org/story/26/05/23/055224/tech-ceos-call-for-a-universal-basic-income-but-what-are-the-alternatives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-23, 14:25:30](https://news.ycombinator.com/item?id=48248014) - [z386: An Open-Source 80386 Built Around Original Microcode](https://nand2mario.github.io/posts/2026/z386/)
* [2026-05-23, 14:09:57](https://news.ycombinator.com/item?id=48247876) - [Oura says it gets government demands for user data](https://this.weekinsecurity.com/oura-says-it-gets-government-demands-for-user-data-will-it-share-how-many/)
* [2026-05-23, 14:07:31](https://lobste.rs/s/yvkqco/wayland_compositor_implemented_as_mod) - [Wayland compositor implemented as a mod in Minecraft](https://modrinth.com/project/9yAfrPwH)
* [2026-05-23, 13:47:12](https://lobste.rs/s/8k4omy/dropping_privileges_go) - [Dropping Privileges in Go](https://log.0x21.biz/posts/go-privdrop/)
* [2026-05-23, 13:03:43](https://news.ycombinator.com/item?id=48247325) - [On The &lt;dl&gt; (2021)](https://benmyers.dev/blog/on-the-dl/)
* [2026-05-23, 12:52:23](https://lobste.rs/s/yq1t6f/baby_s_first_dds_signal_generator) - [Baby&apos;s First DDS Signal Generator](https://tomscii.sig7.se/2026/05/Babys-First-DDS-Signal-Generator)
* [2026-05-23, 12:48:02](https://news.ycombinator.com/item?id=48247208) - [The Art of Money Getting](https://kk.org/cooltools/book-freak-210-the-art-of-money-getting/)
* [2026-05-23, 12:35:00](https://soylentnews.org/article.pl?sid=26/05/22/0314250&amp;from=rss) - [What Do Gödel&apos;s Incompleteness Theorems Truly Mean?](https://soylentnews.org/article.pl?sid=26/05/22/0314250&amp;from=rss)
* [2026-05-23, 12:11:43](https://news.ycombinator.com/item?id=48247004) - [80386 Microcode Disassembled](https://www.reenigne.org/blog/80386-microcode-disassembled/)
* [2026-05-23, 11:57:36](https://lobste.rs/s/whdhza/highest_random_weight_elixir) - [Highest Random Weight in Elixir](https://jola.dev/posts/highest-random-weight-in-elixir)
* [2026-05-23, 11:54:39](https://news.ycombinator.com/item?id=48246917) - [Electrobun 2.0 will be decoupled from Bun due to the Rust rewrite](https://twitter.com/i/status/2058064720553222567)
* [2026-05-23, 11:50:22](https://news.ycombinator.com/item?id=48246889) - [Making Deep Learning Go Brrrr from First Principles (2022)](https://horace.io/brrr_intro.html)
* [2026-05-23, 11:11:03](https://lobste.rs/s/ip7rdd/hp_bought_hyperspace_once_offered_3) - [HP bought Hyperspace, &amp; once offered 3 different pre-boot or in-boot OSs, including Quickweb](https://gekk.info/articles/hp-quickweb.htm)
* [2026-05-23, 10:39:09](https://lobste.rs/s/fms0x0/mvm_fast_virtual_machine_for_go) - [mvm - a fast virtual machine for Go](https://mvm.sh/)
* [2026-05-23, 09:57:28](https://lobste.rs/s/arfalj/one_time_i_used_go_panics_for_flow_control) - [That one time I used Go panics for flow control](https://noncrab.net/posts/panic-as-flow-control/)
* [2026-05-23, 09:37:16](https://news.ycombinator.com/item?id=48246232) - [- -dangerously-skip-reading-code](https://olano.dev/blog/dangerously-skip/)
* [2026-05-23, 07:53:07](https://lobste.rs/s/luyrv4/new_suite_modern_tools_coming_for_editing) - [A new suite of modern tools coming for editing and publishing RFCs](https://www.ietf.org/blog/new-tools-coming-for-editing-and-publishing-rfcs/)
* [2026-05-23, 07:46:00](https://soylentnews.org/article.pl?sid=26/05/22/032239&amp;from=rss) - [Amazon is Shutting Down Support for Older Kindles Soon. Here&apos;s How You Can Save Yours](https://soylentnews.org/article.pl?sid=26/05/22/032239&amp;from=rss)
* [2026-05-23, 07:44:27](https://lobste.rs/s/ztam3w/don_t_roll_your_own) - [Don&apos;t Roll Your Own …](https://susam.net/do-not-roll-your-own.html)
* [2026-05-23, 07:00:00](https://science.slashdot.org/story/26/05/23/038238/caltech-could-lose-control-of-jpl-for-first-time-in-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Caltech Could Lose Control of JPL For First Time In Decades](https://science.slashdot.org/story/26/05/23/038238/caltech-could-lose-control-of-jpl-for-first-time-in-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-23, 06:32:00](https://news.ycombinator.com/item?id=48245262) - [Rubish: A Unix shell written in pure Ruby](https://github.com/amatsuda/rubish)
* [2026-05-23, 06:04:52](https://lobste.rs/s/z17p7a/price_humans) - [The price of humans](https://blog.umangsurana.com/blog/price_of_humans/)
* [2026-05-23, 05:51:38](https://lobste.rs/s/z9lnpe/spy_interpreter_compiler_for_statically) - [SPy: an interpreter and a compiler for a statically typed variant of Python](https://github.com/spylang/spy)
* [2026-05-23, 05:31:13](https://lobste.rs/s/cvwsxk/sp_h_is_standard_library_c_deserves) - [sp.h is the standard library that C deserves](https://spader.zone/sp/)
* [2026-05-23, 03:30:00](https://entertainment.slashdot.org/story/26/05/23/0039205/pentagon-releases-second-batch-of-ufo-videos-first-hand-testimony?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Releases Second Batch of UFO Videos, First-Hand Testimony](https://entertainment.slashdot.org/story/26/05/23/0039205/pentagon-releases-second-batch-of-ufo-videos-first-hand-testimony?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-23, 03:04:00](https://soylentnews.org/article.pl?sid=26/05/22/0247218&amp;from=rss) - [AI Data Centers Trigger Massive &apos;Irreversible&apos; 76% Electricity Price Spike in Largest US Region](https://soylentnews.org/article.pl?sid=26/05/22/0247218&amp;from=rss)
* [2026-05-23, 02:20:30](https://lobste.rs/s/bo9ecf/planescape_torment_part_1_from_tabletop) - [Planescape: Torment, Part 1: From the Tabletop](https://www.filfre.net/2026/05/planescape-torment-part-1-from-the-tabletop/)
* [2026-05-23, 00:30:00](https://science.slashdot.org/story/26/05/23/0026223/spacexs-upgraded-starship-v3-launches-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX&apos;s Upgraded Starship V3 Launches For First Time](https://science.slashdot.org/story/26/05/23/0026223/spacexs-upgraded-starship-v3-launches-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 23:41:55](https://news.ycombinator.com/item?id=48242959) - [SpaceX launches Starship v3 rocket](https://www.space.com/space-exploration/launches-spacecraft/spacex-starship-v3-megarocket-first-test-flight)
* [2026-05-22, 23:00:00](https://tech.slashdot.org/story/26/05/22/1827258/google-api-keys-remain-active-after-deletion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google API Keys Remain Active After Deletion](https://tech.slashdot.org/story/26/05/22/1827258/google-api-keys-remain-active-after-deletion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 22:15:00](https://soylentnews.org/article.pl?sid=26/05/22/0239256&amp;from=rss) - [Pompeii Victim ID&apos;d as a Likely Doctor](https://soylentnews.org/article.pl?sid=26/05/22/0239256&amp;from=rss)
* [2026-05-22, 22:00:00](https://news.slashdot.org/story/26/05/22/1817201/major-streamers-must-pay-15-of-revenues-to-canadian-content-crtc-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Major Streamers Must Pay 15% of Revenues To Canadian Content, CRTC Says](https://news.slashdot.org/story/26/05/22/1817201/major-streamers-must-pay-15-of-revenues-to-canadian-content-crtc-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 21:36:55](https://news.ycombinator.com/item?id=48241997) - [Shipping a laptop to a refugee camp in Uganda](https://notesbylex.com/shipping-a-laptop-to-a-refugee-camp-in-uganda)
* [2026-05-22, 21:27:12](https://news.ycombinator.com/item?id=48241890) - [Green card seekers must leave U.S. to apply, Trump administration says](https://www.nytimes.com/2026/05/22/us/politics/green-card-changes-trump.html)
* [2026-05-22, 21:00:00](https://news.slashdot.org/story/26/05/22/1758232/ntsb-wants-pdf-removed-after-it-exposed-final-cockpit-audio-from-ups-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NTSB Wants PDF Removed After It Exposed Final Cockpit Audio From UPS Crash](https://news.slashdot.org/story/26/05/22/1758232/ntsb-wants-pdf-removed-after-it-exposed-final-cockpit-audio-from-ups-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 20:54:35](https://lobste.rs/s/tbizqg/mysterious_xf86audioplay_issue) - [The mysterious XF86AudioPlay issue](https://michael-prokop.at/blog/2026/05/20/the-mysterious-xf86audioplay-issue/)
* [2026-05-22, 20:39:42](https://news.ycombinator.com/item?id=48241335) - [Hengefinder: Finding When the Sun Aligns with Your Street](https://victoriaritvo.com/blog/hengefinder/)
* [2026-05-22, 20:00:00](https://yro.slashdot.org/story/26/05/22/1747216/trump-mobile-exposed-customers-personal-data-including-phone-numbers-and-home-addresses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Mobile Exposed Customers&apos; Personal Data, Including Phone Numbers and Home Addresses](https://yro.slashdot.org/story/26/05/22/1747216/trump-mobile-exposed-customers-personal-data-including-phone-numbers-and-home-addresses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 19:40:05](https://lobste.rs/s/7crjja/blueprint_for_formal_verification_apple) - [A blueprint for formal verification of Apple corecrypto](https://security.apple.com/blog/formal-verification-corecrypto/)
* [2026-05-22, 19:31:45](https://news.ycombinator.com/item?id=48240419) - [Project Glasswing: An Initial Update](https://www.anthropic.com/research/glasswing-initial-update)
* [2026-05-22, 19:00:00](https://entertainment.slashdot.org/story/26/05/22/1737220/spotify-umg-to-let-fans-make-their-own-music-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify, UMG To Let Fans Make Their Own Music With AI](https://entertainment.slashdot.org/story/26/05/22/1737220/spotify-umg-to-let-fans-make-their-own-music-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 18:00:00](https://entertainment.slashdot.org/story/26/05/22/1723236/this-cannes-film-cost-500000-to-make-400000-was-ai-compute-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [This Cannes Film Cost $500,000 to Make. $400,000 Was AI Compute Costs.](https://entertainment.slashdot.org/story/26/05/22/1723236/this-cannes-film-cost-500000-to-make-400000-was-ai-compute-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 17:27:00](https://soylentnews.org/article.pl?sid=26/05/22/0231209&amp;from=rss) - [Space Factories Edge Closer After Experimental Capsule Survives Hypersonic Landing](https://soylentnews.org/article.pl?sid=26/05/22/0231209&amp;from=rss)
* [2026-05-22, 15:22:04](https://news.ycombinator.com/item?id=48237163) - [Why Japanese companies do so many different things](https://davidoks.blog/p/why-japanese-companies-do-so-many)
* [2026-05-22, 12:43:00](https://soylentnews.org/article.pl?sid=26/05/22/0225208&amp;from=rss) - [Intel Tells PC Makers to Adopt 18A CPUs or Lose Their Supply](https://soylentnews.org/article.pl?sid=26/05/22/0225208&amp;from=rss)
* [2026-05-22, 11:47:46](https://lobste.rs/s/1acyon/forth_inspired_language_for_writing) - [A Forth-inspired language for writing websites](https://robida.net/entries/2026/05/21/a-forth-inspired-language-for-writing-websites)
* [2026-05-22, 08:38:40](https://lobste.rs/s/flehm8/designing_firefox_for_future) - [Designing Firefox for the future](https://blog.mozilla.org/en/firefox/new-firefox-design/)
* [2026-05-22, 08:01:00](https://soylentnews.org/article.pl?sid=26/05/21/042230&amp;from=rss) - [Jury Dismisses All Claims in Elon Musk&apos;s Lawsuit Against OpenAI CEO Sam Altman](https://soylentnews.org/article.pl?sid=26/05/21/042230&amp;from=rss)
* [2026-05-22, 06:49:30](https://lobste.rs/s/4vhivn/c_programming_language_quiz) - [C Programming Language Quiz](https://stefansf.de/c-quiz/)
* [2026-05-22, 03:19:00](https://soylentnews.org/article.pl?sid=26/05/19/1855242&amp;from=rss) - [Microsoft Surprises With its First Server Linux Distribution: Azure Linux 4.0](https://soylentnews.org/article.pl?sid=26/05/19/1855242&amp;from=rss)
* [2026-05-22, 02:37:06](https://lobste.rs/s/ptvaan/gnutella_protocol_outliving_world) - [Gnutella: A Protocol Outliving the World That Created It](https://rickcarlino.com/notes/p2p/gnutella-explanation.html)
* [2026-05-21, 22:34:00](https://soylentnews.org/article.pl?sid=26/05/19/1728216&amp;from=rss) - [Iran Demands Big Tech Pay Fees For Undersea Internet Cables In Strait Of Hormuz](https://soylentnews.org/article.pl?sid=26/05/19/1728216&amp;from=rss)
* [2026-05-21, 17:51:00](https://soylentnews.org/article.pl?sid=26/05/19/1726205&amp;from=rss) - [Physicists at Odds Over Greatest Physics Mysteries](https://soylentnews.org/article.pl?sid=26/05/19/1726205&amp;from=rss)
* [2026-05-21, 16:54:48](https://news.ycombinator.com/item?id=48225782) - [Improving C# Memory Safety](https://devblogs.microsoft.com/dotnet/improving-csharp-memory-safety/)
* [2026-05-21, 15:41:18](https://news.ycombinator.com/item?id=48224623) - [Reflections on Building Forum Software](https://www.counting-stuff.com/reflections-on-building-forum-software/)
* [2026-05-21, 13:48:29](https://news.ycombinator.com/item?id=48222492) - [Highest Random Weight in Elixir](https://jola.dev/posts/highest-random-weight-in-elixir)
* [2026-05-21, 13:03:00](https://soylentnews.org/article.pl?sid=26/05/19/1720228&amp;from=rss) - [Barnes &amp; Noble CEO Backs Selling AI-Written Books in Stores](https://soylentnews.org/article.pl?sid=26/05/19/1720228&amp;from=rss)
* [2026-05-21, 08:17:00](https://soylentnews.org/article.pl?sid=26/05/19/1718231&amp;from=rss) - [PlayStation Plus to Raise Monthly Subscription Fee](https://soylentnews.org/article.pl?sid=26/05/19/1718231&amp;from=rss)
* [2026-05-21, 03:36:00](https://soylentnews.org/article.pl?sid=26/05/19/1128257&amp;from=rss) - [Casimir Force Co-Opted to Generate Free Energy, Midichlorians Not Included](https://soylentnews.org/article.pl?sid=26/05/19/1128257&amp;from=rss)
* [2026-05-20, 22:51:00](https://soylentnews.org/article.pl?sid=26/05/19/0444246&amp;from=rss) - [Software Developers Say AI Is Rotting Their Brains](https://soylentnews.org/article.pl?sid=26/05/19/0444246&amp;from=rss)
* [2026-05-20, 21:21:14](https://news.ycombinator.com/item?id=48214311) - [My two-part desk setup](https://arslan.io/2025/11/18/my-two-part-desk-setup/)
* [2026-05-20, 18:06:00](https://soylentnews.org/article.pl?sid=26/05/19/0438213&amp;from=rss) - [Ollama Out-of-Bounds Read Vulnerability Allows Remote Process Memory Leak](https://soylentnews.org/article.pl?sid=26/05/19/0438213&amp;from=rss)
* [2026-05-20, 13:19:00](https://soylentnews.org/article.pl?sid=26/05/18/1730215&amp;from=rss) - [NASA&apos;s Psyche Spacecraft Just Got An Assist From Mars On The Way To Its Asteroid Namesake](https://soylentnews.org/article.pl?sid=26/05/18/1730215&amp;from=rss)
* [2026-05-20, 13:05:46](https://news.ycombinator.com/item?id=48207043) - [sp.h: Fixing C by giving it a high quality, ultra portable standard library](https://spader.zone/sp/)
* [2026-05-20, 08:34:00](https://soylentnews.org/article.pl?sid=26/05/18/1728202&amp;from=rss) - [Texas County Passes Data Center Ban for Rural Areas for a Year](https://soylentnews.org/article.pl?sid=26/05/18/1728202&amp;from=rss)
* [2026-05-20, 03:51:00](https://soylentnews.org/article.pl?sid=26/05/18/1714233&amp;from=rss) - [Cell Phone Users Can&apos;t Stop Incriminating Themselves](https://soylentnews.org/article.pl?sid=26/05/18/1714233&amp;from=rss)
* [2026-05-19, 23:05:00](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss) - [Exposure to Burn Injuries Played Key Role in Shaping Human Evolution](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss)
* [2026-05-19, 20:41:48](https://news.ycombinator.com/item?id=48199314) - [PHP&apos;s Oddities](https://flowtwo.io/post/php%27s-oddities)
* [2026-05-19, 19:56:58](https://news.ycombinator.com/item?id=48198615) - [Solving the “Zork” Mystery](https://www.dpolakovic.space/blogs/zork-part2)
* [2026-05-19, 18:26:00](https://soylentnews.org/article.pl?sid=26/05/18/174235&amp;from=rss) - [Short Interview with Vint Cerf at El País](https://soylentnews.org/article.pl?sid=26/05/18/174235&amp;from=rss)
* [2026-05-19, 18:01:23](https://news.ycombinator.com/item?id=48196831) - [We made our filesystem 47× faster by deleting it](https://microsandbox.dev/blog/oci-filesystem-47x-faster)
* [2026-05-19, 15:30:01](https://news.ycombinator.com/item?id=48194645) - [Kindle loyalists scramble as Amazon turns page on old e-readers](https://www.reuters.com/business/retail-consumer/kindle-loyalists-scramble-amazon-turns-page-old-e-readers-2026-05-19/)
* [2026-05-19, 13:41:00](https://soylentnews.org/article.pl?sid=26/05/17/1438201&amp;from=rss) - [Your Doctor is Most Likely Consulting This Free AI Chatbot](https://soylentnews.org/article.pl?sid=26/05/17/1438201&amp;from=rss)
* [2026-05-19, 08:56:00](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss) - [AI Data Centers Face Increasing Complaints About Inaudible but &apos;Felt&apos; Infrasound](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss)
* [2026-05-19, 04:09:00](https://soylentnews.org/article.pl?sid=26/05/17/1424241&amp;from=rss) - [A Simple Blood Test Could Predict Your Odds of Living Longer With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/05/17/1424241&amp;from=rss)
