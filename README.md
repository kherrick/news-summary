# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Programming Innovations

* [Vine: A programming language based on Interaction Nets](https://vine.dev/) ([comments](https://news.ycombinator.com/item?id=43144040) or [comments](https://lobste.rs/s/ctpdvb/vine_programming_language_based_on))

* [The FFmpeg School of Assembly Language](https://github.com/FFmpeg/asm-lessons/blob/main/lesson_01/index.md) ([comments](https://news.ycombinator.com/item?id=43144415) or [comments](https://lobste.rs/s/nlv92i/ffmpeg_school_assembly_language))

* [Sparse Voxels Rasterization: Real-time High-fidelity Radiance Field Rendering](https://svraster.github.io/) ([comments](https://lobste.rs/s/tgyqp7/sparse_voxels_rasterization_real_time))

* [Building a 3D modelling app with Bevy](https://www.youtube.com/watch?v=-m4GXG67sG4) ([comments](https://lobste.rs/s/niqvid/building_3d_modelling_app_with_bevy))

* [llm-commit: A plugin for llm that generates commit messages](https://github.com/GNtousakis/llm-commit) ([comments](https://lobste.rs/s/bjngsz/llm_commit_plugin_for_llm_generates))

## Data, Privacy, and Security Issues

* [Will Consumer Data Collection Lead to Algorithm-Adjusted 'Surveillance Pricing'?](https://yro.slashdot.org/story/25/02/22/230253/will-consumer-data-collection-lead-to-algorithm-adjusted-surveillance-pricing?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/02/22/230253/will-consumer-data-collection-lead-to-algorithm-adjusted-surveillance-pricing?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [California Sues Data-Harvesting Company NPD, Enforcing Strict Privacy Law](https://yro.slashdot.org/story/25/02/22/1512258/california-sues-data-harvesting-company-npd-enforcing-strict-privacy-law?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/02/22/1512258/california-sues-data-harvesting-company-npd-enforcing-strict-privacy-law?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Encrypted Messages Are Being Targeted, Google Security Group Warns](https://it.slashdot.org/story/25/02/22/0724228/encrypted-messages-are-being-targeted-google-security-group-warns?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://it.slashdot.org/story/25/02/22/0724228/encrypted-messages-are-being-targeted-google-security-group-warns?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Scientific Discoveries

* [NASA Rover Discovers Liquid Water 'Ripples' Carved Into Mars Rock](https://science.slashdot.org/story/25/02/22/013239/nasa-rover-discovers-liquid-water-ripples-carved-into-mars-rock?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/02/22/013239/nasa-rover-discovers-liquid-water-ripples-carved-into-mars-rock?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Scientists Use Crystals to Cram Terabytes of Data Into Millimeter-Sized Memory](https://soylentnews.org/article.pl?sid=25/02/20/1249208&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/02/20/1249208&from=rss))

## Historical and Cultural Insights

* [Richard Feynman's blackboard at the time of his death (1988)](https://digital.archives.caltech.edu/collections/Images/1.10-29/) ([comments](https://news.ycombinator.com/item?id=43131017))

* [1561 Celestial Phenomenon over Nuremberg](https://en.wikipedia.org/wiki/1561_celestial_phenomenon_over_Nuremberg) ([comments](https://news.ycombinator.com/item?id=43097799))

* [The tyranny of apps: those without smartphones are unfairly penalised](https://www.theguardian.com/money/2025/feb/22/the-tyranny-of-apps-those-without-smartphones-are-unfairly-penalised-say-campaigners) ([comments](https://news.ycombinator.com/item?id=43137488))

## Open Source and Software Development

* [Exult: Recreating Ultima VII for modern operating systems](https://exult.sourceforge.io/index.php) ([comments](https://news.ycombinator.com/item?id=43140645))

* [Open Source Maintainers Are Feeling The Squeeze](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss))

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

* [2025-02-22, 23:32:00](https://news.ycombinator.com/item?id=43144415) - [Our Big Oops](https://www.overcomingbias.com/p/our-big-oops)
* [2025-02-22, 23:30:34](https://lobste.rs/s/nlv92i/ffmpeg_school_assembly_language) - [The FFmpeg School of Assembly Language](https://github.com/FFmpeg/asm-lessons/blob/main/lesson_01/index.md)
* [2025-02-22, 23:03:00](https://yro.slashdot.org/story/25/02/22/230253/will-consumer-data-collection-lead-to-algorithm-adjusted-surveillance-pricing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Will Consumer Data Collection Lead to Algorithm-Adjusted 'Surveillance Pricing'?](https://yro.slashdot.org/story/25/02/22/230253/will-consumer-data-collection-lead-to-algorithm-adjusted-surveillance-pricing?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 22:43:36](https://news.ycombinator.com/item?id=43144040) - [Vine: A programming language based on Interaction Nets](https://vine.dev/)
* [2025-02-22, 22:41:39](https://lobste.rs/s/ctpdvb/vine_programming_language_based_on) - [Vine: A programming language based on Interaction Nets](https://vine.dev/)
* [2025-02-22, 22:40:00](https://soylentnews.org/article.pl?sid=25/02/22/1622206&from=rss) - [HP  Deliberately Adds 15 Minutes Wait Time for Support Calls](https://soylentnews.org/article.pl?sid=25/02/22/1622206&from=rss)
* [2025-02-22, 22:34:00](https://hardware.slashdot.org/story/25/02/22/1840228/new-ev-batteries-are-making-electric-cars-cheaper-and-safer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New EV Batteries are Making Electric Cars Cheaper and Safer](https://hardware.slashdot.org/story/25/02/22/1840228/new-ev-batteries-are-making-electric-cars-cheaper-and-safer?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 22:22:03](https://news.ycombinator.com/item?id=43143871) - [Gig workers worked more but earned less in 2024: study](https://www.businessinsider.com/uber-lyft-instacart-gig-workers-saw-earnings-fall-2024-2025-2)
* [2025-02-22, 22:13:03](https://news.ycombinator.com/item?id=43143806) - [Official sequel to Cracking the Coding Interview is out](https://interviewing.io/blog/we-co-wrote-the-official-sequel-to-cracking-the-coding-interview-introducing-beyond-ctci)
* [2025-02-22, 22:08:42](https://news.ycombinator.com/item?id=43143777) - [OpenBSD Innovations](https://www.openbsd.org/innovations.html)
* [2025-02-22, 21:34:00](https://developers.slashdot.org/story/25/02/22/042227/rust-developer-survey-finds-increasing-usage-especially-on-linux?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Rust Developer Survey Finds Increasing Usage, Especially on Linux](https://developers.slashdot.org/story/25/02/22/042227/rust-developer-survey-finds-increasing-usage-especially-on-linux?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 20:52:01](https://news.ycombinator.com/item?id=43143097) - [Kaneo – An open source project management platform](https://kaneo.app/)
* [2025-02-22, 20:40:26](https://news.ycombinator.com/item?id=43142989) - [In Defense of Text Labels](https://www.chrbutler.com/in-defense-of-text-labels)
* [2025-02-22, 20:34:00](https://tech.slashdot.org/story/25/02/22/183257/glitches-for-windows-11-update-include-breaking-file-explorer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Glitches for Windows 11 Update Include Breaking File Explorer](https://tech.slashdot.org/story/25/02/22/183257/glitches-for-windows-11-update-include-breaking-file-explorer?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 19:34:00](https://yro.slashdot.org/story/25/02/22/1512258/california-sues-data-harvesting-company-npd-enforcing-strict-privacy-law?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [California Sues Data-Harvesting Company NPD, Enforcing Strict Privacy Law](https://yro.slashdot.org/story/25/02/22/1512258/california-sues-data-harvesting-company-npd-enforcing-strict-privacy-law?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 19:19:57](https://lobste.rs/s/niqvid/building_3d_modelling_app_with_bevy) - [Building a 3D modelling app with Bevy](https://www.youtube.com/watch?v=-m4GXG67sG4)
* [2025-02-22, 19:04:01](https://news.ycombinator.com/item?id=43141993) - [The Birth of Chipzilla](https://www.abortretry.fail/p/the-birth-of-chipzilla)
* [2025-02-22, 19:01:41](https://news.ycombinator.com/item?id=43141966) - [A map of torii around the world](https://www.google.com/maps/d/viewer?mid=1RNaaTlz7U2FgjlvFARZQWHsMeWsTc2S1&hl=en)
* [2025-02-22, 18:50:06](https://news.ycombinator.com/item?id=43141825) - [Amazon now discloses you're buying a license to view Kindle eBooks](https://blog.the-ebook-reader.com/2025/02/22/amazon-now-openly-discloses-youre-buying-a-license-to-view-kindle-ebooks/)
* [2025-02-22, 18:40:40](https://lobste.rs/s/vtufn0/scrap_your_orm_replace_your_orm_with) - [Scrap Your ORM—Replace Your ORM With Relational Algebra](https://youtu.be/SKXEppEZp9M)
* [2025-02-22, 18:34:00](https://tech.slashdot.org/story/25/02/22/0748224/arcaos-os2-warp-oem-511-has-been-released?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [ArcaOS (OS/2 Warp OEM) 5.1.1 Has Been Released](https://tech.slashdot.org/story/25/02/22/0748224/arcaos-os2-warp-oem-511-has-been-released?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 18:00:16](https://lobste.rs/s/tgyqp7/sparse_voxels_rasterization_real_time) - [Sparse Voxels Rasterization: Real-time High-fidelity Radiance Field Rendering](https://svraster.github.io/)
* [2025-02-22, 17:55:00](https://soylentnews.org/article.pl?sid=25/02/21/056231&from=rss) - [Webcomic Author AndyOh of TMI-Comic Has Died](https://soylentnews.org/article.pl?sid=25/02/21/056231&from=rss)
* [2025-02-22, 17:34:00](https://it.slashdot.org/story/25/02/22/0724228/encrypted-messages-are-being-targeted-google-security-group-warns?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Encrypted Messages Are Being Targeted, Google Security Group Warns](https://it.slashdot.org/story/25/02/22/0724228/encrypted-messages-are-being-targeted-google-security-group-warns?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 17:30:13](https://news.ycombinator.com/item?id=43141038) - [Private antitrust cases are going through the courts](https://www.thebignewsletter.com/p/the-people-take-antitrust-into-their)
* [2025-02-22, 17:13:17](https://lobste.rs/s/bjngsz/llm_commit_plugin_for_llm_generates) - [llm-commit: A plugin for llm that generates commit messages](https://github.com/GNtousakis/llm-commit)
* [2025-02-22, 17:03:42](https://lobste.rs/s/n9fhi8/1_5b_bybit_hack_era_operational_security) - [The $1.5B Bybit Hack: The Era of Operational Security Failures Has Arrived](https://blog.trailofbits.com/2025/02/21/the-1.5b-bybit-hack-the-era-of-operational-security-failures-has-arrived/)
* [2025-02-22, 16:56:09](https://news.ycombinator.com/item?id=43140645) - [Exult: Recreating Ultima VII for modern operating systems](https://exult.sourceforge.io/index.php)
* [2025-02-22, 16:52:49](https://news.ycombinator.com/item?id=43140614) - [FFmpeg School of Assembly Language](https://github.com/FFmpeg/asm-lessons/blob/main/lesson_01/index.md)
* [2025-02-22, 16:45:45](https://news.ycombinator.com/item?id=43140547) - [Recovering priceless audio and lost languages from old decaying tapes](https://theconversation.com/how-were-recovering-priceless-audio-and-lost-languages-from-old-decaying-tapes-248116)
* [2025-02-22, 16:40:38](https://lobste.rs/s/fgzitm/bookmarklets_custom_url_schemes_are) - [Bookmarklets (and Custom URL Schemes) Are Criminally Underrated](https://silly.business/blog/bookmarklets-and-custom-url-schemes-are-criminally-underrated/)
* [2025-02-22, 16:34:00](https://entertainment.slashdot.org/story/25/02/22/0638211/james-bonds-next-assignment-amazon-pays-1-billion-for-full-creative-control?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [James Bond's Next Assignment: Amazon Pays $1 Billion for Full Creative Control](https://entertainment.slashdot.org/story/25/02/22/0638211/james-bonds-next-assignment-amazon-pays-1-billion-for-full-creative-control?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 16:12:03](https://lobste.rs/s/zaurni/concurrency_bugs_lucene_how_fix) - [Concurrency bugs in Lucene: How to fix optimistic concurrency failures](https://www.elastic.co/search-labs/blog/optimistic-concurrency-lucene-debugging)
* [2025-02-22, 16:06:49](https://lobste.rs/s/qu6kay/solving_jit_calculator_challenge) - [Solving the JIT calculator challenge](https://ochagavia.nl/blog/solving-the-jit-calculator-challenge/)
* [2025-02-22, 15:54:00](https://linux.slashdot.org/story/25/02/22/0524210/torvalds-rust-kernel-code-isnt-forced-in-over-maintainers-objections?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Torvalds: Rust Kernel Code Isn't Forced In Over Maintainers' Objections](https://linux.slashdot.org/story/25/02/22/0524210/torvalds-rust-kernel-code-isnt-forced-in-over-maintainers-objections?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 15:42:40](https://news.ycombinator.com/item?id=43139953) - [Discover the IndieWeb, one blog post at a time](https://indieblog.page)
* [2025-02-22, 15:28:22](https://lobste.rs/s/nigu0x/systemv_filesystem_being_removed_from) - [SystemV filesystem being removed from the Linux kernel](https://www.phoronix.com/news/Removing-SystemV-Filesystem)
* [2025-02-22, 13:14:00](https://soylentnews.org/article.pl?sid=25/02/21/055211&from=rss) - [Google's New AI Generates Hypotheses for Researchers](https://soylentnews.org/article.pl?sid=25/02/21/055211&from=rss)
* [2025-02-22, 12:03:22](https://news.ycombinator.com/item?id=43138238) - [DOGE's only public ledger is riddled with mistakes](https://www.nytimes.com/2025/02/21/upshot/doge-musk-trump-errors.html)
* [2025-02-22, 12:00:00](https://games.slashdot.org/story/25/02/22/0244244/game-developers-revolt-against-microsofts-new-ai-gaming-tool?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Game Developers Revolt Against Microsoft's New AI Gaming Tool](https://games.slashdot.org/story/25/02/22/0244244/game-developers-revolt-against-microsofts-new-ai-gaming-tool?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 11:10:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss) - [Adoption of Site Documentation - THIS IS THE VOTE - RESTORED](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss)
* [2025-02-22, 10:54:28](https://news.ycombinator.com/item?id=43137910) - [The Internet's longest-serving PC email system, still being updated](https://www.pmail.com/)
* [2025-02-22, 10:35:39](https://lobste.rs/s/yclvqy/ring_is_unmaintained) - [Ring is unmaintained](https://rustsec.org/advisories/RUSTSEC-2025-0007.html)
* [2025-02-22, 10:00:00](https://science.slashdot.org/story/25/02/22/013239/nasa-rover-discovers-liquid-water-ripples-carved-into-mars-rock?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA Rover Discovers Liquid Water 'Ripples' Carved Into Mars Rock](https://science.slashdot.org/story/25/02/22/013239/nasa-rover-discovers-liquid-water-ripples-carved-into-mars-rock?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 09:18:47](https://news.ycombinator.com/item?id=43137488) - ['The tyranny of apps': those without smartphones are unfairly penalised](https://www.theguardian.com/money/2025/feb/22/the-tyranny-of-apps-those-without-smartphones-are-unfairly-penalised-say-campaigners)
* [2025-02-22, 08:59:13](https://lobste.rs/s/nsawha/notes_from_code_walking_kubelet) - [Notes from code walking kubelet initialization](https://samof76.space/kubelet-initialization.html)
* [2025-02-22, 08:31:00](https://soylentnews.org/article.pl?sid=25/02/21/0455231&from=rss) - [Gnome 48 Goes Into Beta, Should Launch in a Month](https://soylentnews.org/article.pl?sid=25/02/21/0455231&from=rss)
* [2025-02-22, 08:04:03](https://lobste.rs/s/bcy6zi/invoker_commands_explainer) - [Invoker Commands (Explainer)](https://open-ui.org/components/invokers.explainer/)
* [2025-02-22, 07:00:00](https://science.slashdot.org/story/25/02/22/0056236/first-look-at-secretive-x-37b-space-plane-in-orbit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [First Look At Secretive X-37B Space Plane In Orbit](https://science.slashdot.org/story/25/02/22/0056236/first-look-at-secretive-x-37b-space-plane-in-orbit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 03:52:56](https://news.ycombinator.com/item?id=43135934) - [DigiKey's Tariff Resources](https://www.digikey.com/en/resources/tariff-resources)
* [2025-02-22, 03:48:00](https://soylentnews.org/article.pl?sid=25/02/21/0429228&from=rss) - [DRAM and NAND Prices Are Expected to Rise in the Second Half of 2025](https://soylentnews.org/article.pl?sid=25/02/21/0429228&from=rss)
* [2025-02-22, 03:30:00](https://tech.slashdot.org/story/25/02/22/0048209/mark-zuckerbergs-makeover-didnt-make-people-like-him-study-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mark Zuckerberg's Makeover Didn't Make People Like Him, Study Shows](https://tech.slashdot.org/story/25/02/22/0048209/mark-zuckerbergs-makeover-didnt-make-people-like-him-study-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 02:33:00](https://science.slashdot.org/story/25/02/22/0232239/scientists-question-microsofts-quantum-computing-claims?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Scientists Question Microsoft's Quantum Computing Claims](https://science.slashdot.org/story/25/02/22/0232239/scientists-question-microsofts-quantum-computing-claims?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 02:04:53](https://lobste.rs/s/ncy6sm/how_swift_s_server_support_powers_things) - [How Swift's server support powers Things Cloud](https://swift.org/blog/how-swifts-server-support-powers-things-cloud/)
* [2025-02-22, 01:30:00](https://slashdot.org/story/25/02/22/006233/data-is-very-valuable-just-dont-ask-us-to-measure-it-leaders-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Data Is Very Valuable, Just Don't Ask Us To Measure It, Leaders Say](https://slashdot.org/story/25/02/22/006233/data-is-very-valuable-just-dont-ask-us-to-measure-it-leaders-say?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 01:27:08](https://lobste.rs/s/02778a/nyx_space_rust_power_firefly_s_blue_ghost) - [Nyx Space and Rust Power Firefly's Blue Ghost Lunar Landing](https://nyxspace.com/blog/2025/02/21/nyx-space-and-rust-power-fireflys-blue-ghost-lunar-landing/)
* [2025-02-22, 00:15:30](https://lobste.rs/s/ypu9f8/start_computer_club) - [Start a computer club](https://startacomputer.club/)
* [2025-02-21, 23:01:00](https://soylentnews.org/article.pl?sid=25/02/20/181218&from=rss) - [12VHPWR Adapters Sporting Heatsinks and Thermal Pads Show How Problematic the Connector Is](https://soylentnews.org/article.pl?sid=25/02/20/181218&from=rss)
* [2025-02-21, 22:49:37](https://lobste.rs/s/9a3noh/nixos_power_vm_tests) - [NixOS: the power of VM tests](https://bmcgee.ie/posts/2025/02/nixos-the-power-of-vm-tests/)
* [2025-02-21, 19:45:18](https://lobste.rs/s/oxkl4d/open_letter_browser_os_makers) - [Open letter to browser and OS makers](https://medium.com/@boblord/open-letter-to-browser-and-os-makers-12d65aa314f7)
* [2025-02-21, 18:46:58](https://lobste.rs/s/w668mg/gdscript_notes) - [GDScript Notes](https://wiki.alopex.li/GDScriptNotes)
* [2025-02-21, 18:22:59](https://news.ycombinator.com/item?id=43131017) - [Richard Feynman's blackboard at the time of his death (1988)](https://digital.archives.caltech.edu/collections/Images/1.10-29/)
* [2025-02-21, 18:17:00](https://soylentnews.org/article.pl?sid=25/02/20/169239&from=rss) - [Intel's Head of Datacenter and AI Unit Leaves to Lead Nokia](https://soylentnews.org/article.pl?sid=25/02/20/169239&from=rss)
* [2025-02-21, 17:46:15](https://news.ycombinator.com/item?id=43130546) - [Why Ruby on Rails still matters](https://www.contraption.co/rails-versus-nextjs/)
* [2025-02-21, 17:44:13](https://lobste.rs/s/mazfvy/neut_programming_language) - [Neut Programming Language](https://vekatze.github.io/neut/overview.html)
* [2025-02-21, 16:19:52](https://lobste.rs/s/ux76xy/apple_pulls_encryption_feature_from_uk) - [Apple pulls encryption feature from UK over government spying demands](https://www.theverge.com/news/617273/apple-removes-encryption-advanced-data-protection-adp-uk-spying-backdoor)
* [2025-02-21, 15:05:24](https://news.ycombinator.com/item?id=43128253) - [Apple pulls data protection tool after UK government security row](https://www.bbc.com/news/articles/cgj54eq4vejo)
* [2025-02-21, 14:20:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1414222&from=rss) - [Soylent Update - Adoption of Proposed Documents - How the Vote Will be Managed](https://soylentnews.org/meta/article.pl?sid=25/02/21/1414222&from=rss)
* [2025-02-21, 13:32:00](https://soylentnews.org/article.pl?sid=25/02/20/165216&from=rss) - [What Would Happen If a (Small) Black Hole Passed Through Your Body ?](https://soylentnews.org/article.pl?sid=25/02/20/165216&from=rss)
* [2025-02-21, 12:31:10](https://lobste.rs/s/zcsxzn/first_wasm_ocaml_release_is_out) - [The First Wasm_of_ocaml Release is Out](https://tarides.com/blog/2025-02-19-the-first-wasm-of-ocaml-release-is-out/)
* [2025-02-21, 07:44:00](https://soylentnews.org/article.pl?sid=25/02/20/137208&from=rss) - [A Single Protein May Have Helped Shape the Emergence of Spoken Language](https://soylentnews.org/article.pl?sid=25/02/20/137208&from=rss)
* [2025-02-21, 07:40:41](https://lobste.rs/s/s3re6r/docker_limits_unauthenticated_pulls_10) - [Docker limits unauthenticated pulls to 10/hr/ip from Docker Hub, from March 1](https://docs.docker.com/docker-hub/usage/)
* [2025-02-21, 02:59:00](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss) - [Burning in Woman's Legs Turned Out to be Slug Parasites Migrating to Her Brain](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss)
* [2025-02-21, 00:32:19](https://lobste.rs/s/ymrfir/crustacean_for_lobste_rs) - [Crustacean for Lobste.rs](https://crustacean.optionalstudio.work)
* [2025-02-20, 22:12:00](https://soylentnews.org/article.pl?sid=25/02/20/1255237&from=rss) - [10 Years on After 'Data and Goliath' Warned of Data Collection](https://soylentnews.org/article.pl?sid=25/02/20/1255237&from=rss)
* [2025-02-20, 17:27:00](https://soylentnews.org/article.pl?sid=25/02/20/1249208&from=rss) - [Scientists Use Crystals to Cram Terabytes of Data Into Millimeter-Sized Memory](https://soylentnews.org/article.pl?sid=25/02/20/1249208&from=rss)
* [2025-02-20, 12:45:00](https://soylentnews.org/article.pl?sid=25/02/20/1244255&from=rss) - [Noise-Cancelling Headphones Possible Source of Hearing Problems](https://soylentnews.org/article.pl?sid=25/02/20/1244255&from=rss)
* [2025-02-20, 07:53:00](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss) - [Scientists Just Discovered ‘Quipu,’ the New Largest Structure in Our Cosmos](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss)
* [2025-02-20, 04:59:17](https://news.ycombinator.com/item?id=43111294) - [Reliably Replicating Data Between PostgreSQL and ClickHouse](https://benjaminwootton.com/insights/clickhouse-peerdb-cdc/)
* [2025-02-20, 03:10:00](https://soylentnews.org/article.pl?sid=25/02/19/033237&from=rss) - [Arm Poaching Talent to Produce Their Own Chips](https://soylentnews.org/article.pl?sid=25/02/19/033237&from=rss)
* [2025-02-19, 22:23:00](https://soylentnews.org/article.pl?sid=25/02/18/224256&from=rss) - [Scented Products Cause Indoor Air Pollution on Par With Car Exhaust](https://soylentnews.org/article.pl?sid=25/02/18/224256&from=rss)
* [2025-02-19, 19:22:01](https://news.ycombinator.com/item?id=43106245) - [One Head, Two Brains: The origins of split-brain research (2015)](https://www.theatlantic.com/health/archive/2015/07/split-brain-research-sperry-gazzaniga/399290/)
* [2025-02-19, 18:54:00](https://soylentnews.org/meta/article.pl?sid=25/02/19/1852221&from=rss) - [SITE PROBLEMS](https://soylentnews.org/meta/article.pl?sid=25/02/19/1852221&from=rss)
* [2025-02-19, 17:41:00](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss) - [Record-Breaking Neutrino is Most Energetic Ever Detected](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss)
* [2025-02-19, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss) - [Open Source Maintainers Are Feeling The Squeeze](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss)
* [2025-02-19, 09:24:02](https://news.ycombinator.com/item?id=43100260) - [Show HN: AI-native browser game that users can craft unlimited 3D items](https://0.space/about)
* [2025-02-19, 08:27:50](https://news.ycombinator.com/item?id=43099894) - [Tetris in PostScript](https://github.com/nst/PSTris)
* [2025-02-19, 08:10:00](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss) - [AI Study: AI Can Clone Itself Under the Right Conditions](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss)
* [2025-02-19, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss) - [New OpenSSH Flaws Enable Man-in-the-Middle and DoS Attacks](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss)
* [2025-02-19, 02:16:04](https://news.ycombinator.com/item?id=43097799) - [1561 Celestial Phenomenon over Nuremberg](https://en.wikipedia.org/wiki/1561_celestial_phenomenon_over_Nuremberg)
