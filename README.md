# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology

* [Call Center Workers Are Tired of Being Mistaken for AI](https://it.slashdot.org/story/25/06/28/1740215/call-center-workers-are-tired-of-being-mistaken-for-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Researchers Accuse Uber of Using Opaque Algorithm To Dramatically Boost Its Profits](https://tech.slashdot.org/story/25/06/28/0427240/researchers-accuse-uber-of-using-opaque-algorithm-to-dramatically-boost-its-profits?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [BYU study: Why some people choose not to use artificial intelligence](https://news.byu.edu/intellect/byu-study-finds-the-real-reasons-why-some-people-choose-not-to-use-artificial-intelligence)

* [Republican governors oppose 10-year moratorium on state AI laws in GOP tax bill](https://www.politico.com/live-updates/2025/06/27/congress/gop-govs-urge-thune-to-nix-ai-moratorium-00430083)

* [AI Manager - The Future of Management](https://aimanagers.app)

* [How a Crewless, AI-Enhanced Vessel Will Patrol Denmark's and NATO's Waters](https://tech.slashdot.org/story/25/06/28/047250/how-a-crewless-ai-enhanced-vessel-will-patrol-denmarks-and-natos-waters?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cybersecurity and Data Privacy

* [Canada Orders Chinese Firm Hikvision To Cease Canadian Operations Over National Security Concerns](https://news.slashdot.org/story/25/06/28/0439206/canada-orders-chinese-firm-hikvision-to-cease-canadian-operations-over-national-security-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Denmark To Tackle Deepfakes By Giving People Copyright To Their Own Features](https://tech.slashdot.org/story/25/06/27/2050240/denmark-to-tackle-deepfakes-by-giving-people-copyright-to-their-own-features?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [New Research Provides First Evidence of the Use of Browser Fingerprints for Online Tracking](https://soylentnews.org/article.pl?sid=25/06/24/1256227&from=rss)

* [Tech Firms Warn 'Scattered Spider' Hacks Are Targeting Aviation Sector](https://it.slashdot.org/story/25/06/27/2347206/tech-firms-warn-scattered-spider-hacks-are-targeting-aviation-sector?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Open Source and Software Development

* [Memory Safe Languages: Reducing Vulnerabilities in Modern Software Development](https://media.defense.gov/2025/Jun/23/2003742198/-1/-1/0/CSI_MEMORY_SAFE_LANGUAGES_REDUCING_VULNERABILITIES_IN_MODERN_SOFTWARE_DEVELOPMENT.PDF)

* [Parsing JSON in Forty Lines of Awk](https://akr.am/blog/posts/parsing-json-in-forty-lines-of-awk)

* [ZeQLplus: Terminal SQLite Database Browser](https://github.com/ZetloStudio/ZeQLplus)

* [The Medley Interlisp Project: Reviving a Historical Software System](https://interlisp.org/documentation/young-ccece2025.pdf)

* [X11 Fork XLibre Released For Testing On Systemd-Free Artix Linux](https://linux.slashdot.org/story/25/06/28/054245/x11-fork-xlibre-released-for-testing-on-systemd-free-artix-linux?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cultural and Historical Discoveries

* [Unheard works by Erik Satie to premiere 100 years after his death](https://www.theguardian.com/music/2025/jun/26/unheard-works-by-erik-satie-to-premiere-100-years-after-his-death)

* [Computer and coding books from Usborne (1982-1985)](https://usborne.com/us/books/computer-and-coding-books)

* [Peru Gas Workers Find Thousand-Year-Old Mummy](https://soylentnews.org/article.pl?sid=25/06/24/0032246&from=rss)

* [After 27 Years, Engineer Discovers How To Display Secret Photo In Power Mac ROM](https://apple.slashdot.org/story/25/06/27/2358259/after-27-years-engineer-discovers-how-to-display-secret-photo-in-power-mac-rom?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Innovations and Future Trends

* [No One Is in Charge at the US Copyright Office](https://www.wired.com/story/us-copyright-office-chaos-doge/)

* [7 People Now Have Neuralink Brain Implant](https://science.slashdot.org/story/25/06/27/2353222/7-people-now-have-neuralink-brain-implant?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Modified Bacteria Convert Plastic Waste Into Pain Reliever](https://soylentnews.org/article.pl?sid=25/06/26/0223205&from=rss)

* [JWST reveals its first direct image discovery of an exoplanet](https://www.smithsonianmag.com/smart-news/james-webb-space-telescope-reveals-its-first-direct-image-discovery-of-an-exoplanet-180986886/)

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

* [2025-06-28, 18:34:00](https://it.slashdot.org/story/25/06/28/1740215/call-center-workers-are-tired-of-being-mistaken-for-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Call Center Workers Are Tired of Being Mistaken for AI](https://it.slashdot.org/story/25/06/28/1740215/call-center-workers-are-tired-of-being-mistaken-for-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 17:59:26](https://news.ycombinator.com/item?id=44406750) - [US Justice Department settles antitrust case for HPE&apos;s $14B takeover of Juniper](https://www.reuters.com/business/us-doj-settles-antitrust-case-hpes-14-billion-takeover-juniper-2025-06-28/)
* [2025-06-28, 17:59:11](https://news.ycombinator.com/item?id=44406749) - [BYU study: Why some people choose not to use artificial intelligence](https://news.byu.edu/intellect/byu-study-finds-the-real-reasons-why-some-people-choose-not-to-use-artificial-intelligence)
* [2025-06-28, 17:50:58](https://lobste.rs/s/yvkyke/memory_safe_languages_reducing) - [Memory Safe Languages: Reducing Vulnerabilities in Modern Software Development](https://media.defense.gov/2025/Jun/23/2003742198/-1/-1/0/CSI_MEMORY_SAFE_LANGUAGES_REDUCING_VULNERABILITIES_IN_MODERN_SOFTWARE_DEVELOPMENT.PDF)
* [2025-06-28, 17:39:22](https://lobste.rs/s/ptsrso/emacsconf_2025_call_for_participation) - [EmacsConf 2025 Call for Participation](https://emacsconf.org/2025/cfp/)
* [2025-06-28, 17:36:16](https://news.ycombinator.com/item?id=44406549) - [Boeing uses potatoes to test wi-fi (2012)](https://www.bbc.com/news/technology-20813441)
* [2025-06-28, 17:34:00](https://tech.slashdot.org/story/25/06/28/0427240/researchers-accuse-uber-of-using-opaque-algorithm-to-dramatically-boost-its-profits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Accuse Uber of Using Opaque Algorithm To Dramatically Boost Its Profits](https://tech.slashdot.org/story/25/06/28/0427240/researchers-accuse-uber-of-using-opaque-algorithm-to-dramatically-boost-its-profits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 17:20:17](https://news.ycombinator.com/item?id=44406400) - [No One Is in Charge at the US Copyright Office](https://www.wired.com/story/us-copyright-office-chaos-doge/)
* [2025-06-28, 17:15:27](https://news.ycombinator.com/item?id=44406360) - [Lima Site 85: How a CIA Helicopter Defended a Secret U.S. Radar Facility](https://www.aviacionline.com/lima-site-85-how-a-cia-helicopter-defended-a-secret-us-radar-facility)
* [2025-06-28, 16:55:31](https://news.ycombinator.com/item?id=44406186) - [Republican governors oppose 10-year moratorium on state AI laws in GOP tax bill](https://www.politico.com/live-updates/2025/06/27/congress/gop-govs-urge-thune-to-nix-ai-moratorium-00430083)
* [2025-06-28, 16:53:56](https://news.ycombinator.com/item?id=44406171) - [BusyBeaver(6) Is Quite Large](https://scottaaronson.blog/?p=8972)
* [2025-06-28, 16:50:19](https://news.ycombinator.com/item?id=44406140) - [Is being bilingual good for your brain?](https://www.economist.com/science-and-technology/2025/06/27/is-being-bilingual-good-for-your-brain)
* [2025-06-28, 16:34:00](https://linux.slashdot.org/story/25/06/28/054245/x11-fork-xlibre-released-for-testing-on-systemd-free-artix-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [X11 Fork XLibre Released For Testing On Systemd-Free Artix Linux](https://linux.slashdot.org/story/25/06/28/054245/x11-fork-xlibre-released-for-testing-on-systemd-free-artix-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 15:34:00](https://tech.slashdot.org/story/25/06/28/047250/how-a-crewless-ai-enhanced-vessel-will-patrol-denmarks-and-natos-waters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How a Crewless, AI-Enhanced Vessel Will Patrol Denmark&apos;s and NATO&apos;s Waters](https://tech.slashdot.org/story/25/06/28/047250/how-a-crewless-ai-enhanced-vessel-will-patrol-denmarks-and-natos-waters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 15:23:48](https://news.ycombinator.com/item?id=44405342) - [Parsing JSON in Forty Lines of Awk](https://akr.am/blog/posts/parsing-json-in-forty-lines-of-awk)
* [2025-06-28, 15:19:54](https://lobste.rs/s/66rxz9/ai_manager_future_management) - [AI Manager - The Future of Management](https://aimanagers.app)
* [2025-06-28, 14:45:43](https://news.ycombinator.com/item?id=44405057) - [Addictions Are Being Engineered](https://masonyarbrough.substack.com/p/engineered-addictions)
* [2025-06-28, 14:34:00](https://tech.slashdot.org/story/25/06/28/0342219/mercedes-amg-to-drop-four-cylinder-for-inline-sixes-and-v-8s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mercedes-AMG to Drop Four-Cylinder for Inline-Sixes and V-8s](https://tech.slashdot.org/story/25/06/28/0342219/mercedes-amg-to-drop-four-cylinder-for-inline-sixes-and-v-8s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 14:22:10](https://news.ycombinator.com/item?id=44404905) - [MCP: An (Accidentally) Universal Plugin System](https://worksonmymachine.substack.com/p/mcp-an-accidentally-universal-plugin)
* [2025-06-28, 14:18:18](https://news.ycombinator.com/item?id=44404876) - [Sirius: A GPU-native SQL engine](https://github.com/sirius-db/sirius)
* [2025-06-28, 14:09:24](https://lobste.rs/s/6zbrhj/i_really_like_helix_editor) - [I really like the Helix editor](https://herecomesthemoon.net/2025/06/i-like-helix/)
* [2025-06-28, 13:57:13](https://lobste.rs/s/l6nfum/computer_coding_books_from_usborne_1982) - [Computer and coding books from Usborne (1982-1985)](https://usborne.com/us/books/computer-and-coding-books)
* [2025-06-28, 13:00:00](https://apple.slashdot.org/story/25/06/27/2358259/after-27-years-engineer-discovers-how-to-display-secret-photo-in-power-mac-rom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After 27 Years, Engineer Discovers How To Display Secret Photo In Power Mac ROM](https://apple.slashdot.org/story/25/06/27/2358259/after-27-years-engineer-discovers-how-to-display-secret-photo-in-power-mac-rom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 12:32:02](https://news.ycombinator.com/item?id=44404224) - [ZeQLplus: Terminal SQLite Database Browser](https://github.com/ZetloStudio/ZeQLplus)
* [2025-06-28, 12:20:08](https://news.ycombinator.com/item?id=44404164) - [We ran a Unix-like OS Xv6 on our home-built CPU with a home-built C compiler](https://fuel.edby.coffee/posts/how-we-ported-xv6-os-to-a-home-built-cpu-with-a-home-built-c-compiler/)
* [2025-06-28, 12:00:47](https://news.ycombinator.com/item?id=44404045) - [Lago (Open-Source Usage Based Billing) is hiring for ten roles](https://www.ycombinator.com/companies/lago/jobs)
* [2025-06-28, 12:00:00](https://news.slashdot.org/story/25/06/28/0439206/canada-orders-chinese-firm-hikvision-to-cease-canadian-operations-over-national-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada Orders Chinese Firm Hikvision To Cease Canadian Operations Over National Security Concerns](https://news.slashdot.org/story/25/06/28/0439206/canada-orders-chinese-firm-hikvision-to-cease-canadian-operations-over-national-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 11:52:40](https://lobste.rs/s/xontfe/medley_interlisp_project_reviving) - [The Medley Interlisp Project: Reviving a Historical Software System](https://interlisp.org/documentation/young-ccece2025.pdf)
* [2025-06-28, 11:45:00](https://soylentnews.org/article.pl?sid=25/06/26/1527200&amp;from=rss) - [Canonical to Remove GPU Exploit Mitigation to Gain 20% Performance Boost](https://soylentnews.org/article.pl?sid=25/06/26/1527200&amp;from=rss)
* [2025-06-28, 10:19:44](https://news.ycombinator.com/item?id=44403594) - [Unheard works by Erik Satie to premiere 100 years after his death](https://www.theguardian.com/music/2025/jun/26/unheard-works-by-erik-satie-to-premiere-100-years-after-his-death)
* [2025-06-28, 10:00:00](https://tech.slashdot.org/story/25/06/27/2343245/graphics-artists-in-china-push-back-on-ai-and-its-averaging-effect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Graphics Artists In China Push Back On AI and Its Averaging Effect](https://tech.slashdot.org/story/25/06/27/2343245/graphics-artists-in-china-push-back-on-ai-and-its-averaging-effect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 09:32:43](https://news.ycombinator.com/item?id=44403383) - [History of Cycling Maps](https://cyclemaps.blogspot.com/)
* [2025-06-28, 08:45:05](https://news.ycombinator.com/item?id=44403195) - [Untangling Lifetimes: The Arena Allocator](https://www.rfleury.com/p/untangling-lifetimes-the-arena-allocator)
* [2025-06-28, 08:26:27](https://lobste.rs/s/d6hcll/wait_who_s_new_ceo_commodore_let_s_buy) - [Wait… Who’s the New CEO of Commodore?! • Let&apos;s Buy Commodore Part 2](https://www.youtube.com/watch?v=ke-Ao-CpI7E)
* [2025-06-28, 08:01:00](https://slashdot.org/story/25/06/27/2354246/japans-civil-war-over-surnames?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan&apos;s Civil War Over Surnames](https://slashdot.org/story/25/06/27/2354246/japans-civil-war-over-surnames?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 07:58:01](https://lobste.rs/s/7d4on3/newbie_s_first_contribution_rust_for) - [A Newbie&apos;s First Contribution to (Rust for) Linux](https://blog.buenzli.dev/rust-for-linux-first-contrib/)
* [2025-06-28, 07:03:00](https://soylentnews.org/article.pl?sid=25/06/26/158255&amp;from=rss) - [Edit is Back](https://soylentnews.org/article.pl?sid=25/06/26/158255&amp;from=rss)
* [2025-06-28, 07:00:00](https://science.slashdot.org/story/25/06/27/2353222/7-people-now-have-neuralink-brain-implant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [7 People Now Have Neuralink Brain Implant](https://science.slashdot.org/story/25/06/27/2353222/7-people-now-have-neuralink-brain-implant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 06:38:39](https://lobste.rs/s/39mnhf/bcachefs_may_be_headed_out_kernel) - [Bcachefs may be headed out of the kernel](https://lwn.net/Articles/1027289/)
* [2025-06-28, 05:27:29](https://news.ycombinator.com/item?id=44402470) - [I deleted my second brain](https://www.joanwestenberg.com/p/i-deleted-my-second-brain)
* [2025-06-28, 03:30:00](https://tech.slashdot.org/story/25/06/27/2050240/denmark-to-tackle-deepfakes-by-giving-people-copyright-to-their-own-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Denmark To Tackle Deepfakes By Giving People Copyright To Their Own Features](https://tech.slashdot.org/story/25/06/27/2050240/denmark-to-tackle-deepfakes-by-giving-people-copyright-to-their-own-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 02:17:00](https://soylentnews.org/article.pl?sid=25/06/26/153208&amp;from=rss) - [Trump Administration Moves to Count Crypto as a Federal Mortgage Asset](https://soylentnews.org/article.pl?sid=25/06/26/153208&amp;from=rss)
* [2025-06-28, 01:40:05](https://lobste.rs/s/ts1uyb/omarchy_opinionated_arch_hyprland_setup) - [omarchy: Opinionated Arch/Hyprland Setup](https://github.com/basecamp/omarchy)
* [2025-06-28, 01:40:00](https://it.slashdot.org/story/25/06/27/2347206/tech-firms-warn-scattered-spider-hacks-are-targeting-aviation-sector?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Firms Warn &apos;Scattered Spider&apos; Hacks Are Targeting Aviation Sector](https://it.slashdot.org/story/25/06/27/2347206/tech-firms-warn-scattered-spider-hacks-are-targeting-aviation-sector?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-28, 01:00:00](https://linux.slashdot.org/story/25/06/27/2326226/the-year-of-the-eu-linux-desktop-may-finally-arrive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The Year of the EU Linux Desktop May Finally Arrive&apos;](https://linux.slashdot.org/story/25/06/27/2326226/the-year-of-the-eu-linux-desktop-may-finally-arrive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 23:53:35](https://lobste.rs/s/zyhphz/cross_compiling_common_lisp_for_windows) - [Cross-compiling Common Lisp for Windows](https://www.fosskers.ca/en/blog/cl-windows)
* [2025-06-27, 23:50:01](https://lobste.rs/s/14xytr/go_is_80_20_language) - [Go is an 80/20 language](https://blog.kowalczyk.info/article/d-2025-06-26/go-is-8020-language.html)
* [2025-06-27, 23:40:00](https://tech.slashdot.org/story/25/06/27/233212/cars-forward-blind-zones-are-worse-now-than-25-years-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cars&apos; Forward Blind Zones Are Worse Now Than 25 Years Ago](https://tech.slashdot.org/story/25/06/27/233212/cars-forward-blind-zones-are-worse-now-than-25-years-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 23:00:00](https://news.slashdot.org/story/25/06/27/2044239/fed-chair-powell-says-ai-is-coming-for-your-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fed Chair Powell Says AI Is Coming For Your Job](https://news.slashdot.org/story/25/06/27/2044239/fed-chair-powell-says-ai-is-coming-for-your-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 21:54:36](https://lobste.rs/s/kwrdic/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/kwrdic/what_are_you_doing_this_weekend)
* [2025-06-27, 21:33:00](https://soylentnews.org/article.pl?sid=25/06/26/0234223&amp;from=rss) - [A Solid-State Battery Breakthrough May be Taking Shape in Maryland](https://soylentnews.org/article.pl?sid=25/06/26/0234223&amp;from=rss)
* [2025-06-27, 20:50:10](https://news.ycombinator.com/item?id=44400105) - [Normalizing Flows Are Capable Generative Models](https://machinelearning.apple.com/research/normalizing-flows)
* [2025-06-27, 20:48:18](https://lobste.rs/s/pnfosx/shell_startup_scripts_2020) - [Shell startup scripts (2020)](https://blog.flowblok.id.au/2013-02/shell-startup-scripts.html)
* [2025-06-27, 20:38:11](https://lobste.rs/s/oztn3e/android_phones_could_soon_warn_you) - [Android phones could soon warn you of “Stingrays” snooping on your communications](https://arstechnica.com/gadgets/2025/06/future-android-phones-could-warn-you-about-data-stealing-fake-cell-towers/)
* [2025-06-27, 20:01:41](https://lobste.rs/s/6oqgv7/python_can_run_mojo_now) - [Python can run Mojo now](https://koaning.io/posts/giving-mojo-a-spin/)
* [2025-06-27, 19:59:29](https://lobste.rs/s/wcxasn/avoiding_postgresql_pitfalls_hidden) - [Avoiding PostgreSQL Pitfalls: The Hidden Cost of Failing Inserts](https://johnnymetz.com/posts/postgresql-failing-insert/)
* [2025-06-27, 19:53:33](https://lobste.rs/s/iwoipn/structuring_arrays_with_algebraic) - [Structuring Arrays with Algebraic Shapes](https://dl.acm.org/doi/abs/10.1145/3736112.3736141)
* [2025-06-27, 17:44:32](https://news.ycombinator.com/item?id=44398756) - [JWST reveals its first direct image discovery of an exoplanet](https://www.smithsonianmag.com/smart-news/james-webb-space-telescope-reveals-its-first-direct-image-discovery-of-an-exoplanet-180986886/)
* [2025-06-27, 17:35:59](https://lobste.rs/s/orj2th/parameterized_types_c_using_new_tag) - [Parameterized types in C using the new tag compatibility rule](https://nullprogram.com/blog/2025/06/26/)
* [2025-06-27, 17:00:56](https://lobste.rs/s/96xzbg/transmitting_data_via_ultrasound) - [Transmitting data via ultrasound without any special equipment](https://halcy.de/blog/2025/06/27/transmitting-data-via-ultrasound-without-any-special-equipment/)
* [2025-06-27, 16:47:00](https://soylentnews.org/article.pl?sid=25/06/26/0227253&amp;from=rss) - [Greek Man Sentenced to Prison for Running a Private Torrent Site 10 Years Ago](https://soylentnews.org/article.pl?sid=25/06/26/0227253&amp;from=rss)
* [2025-06-27, 13:34:46](https://lobste.rs/s/2le5gj/richard_feldman_on_new_language_adoption) - [Richard Feldman on new language adoption in the LLM age](https://youtu.be/ZsBHc-J9f8o)
* [2025-06-27, 13:06:54](https://news.ycombinator.com/item?id=44396518) - [Show HN: I&apos;m an airline pilot – I built interactive graphs/globes of my flights](https://jameshard.ing/pilot)
* [2025-06-27, 12:04:00](https://soylentnews.org/article.pl?sid=25/06/26/0225203&amp;from=rss) - [An Updated PNG Spec](https://soylentnews.org/article.pl?sid=25/06/26/0225203&amp;from=rss)
* [2025-06-27, 11:14:54](https://lobste.rs/s/nkizry/conferences_clarity_smokescreens) - [Conferences, Clarity, and Smokescreens](https://infrequently.org/2025/06/conferences-clarity-and-smokescreens/)
* [2025-06-27, 11:07:53](https://lobste.rs/s/pibyff/my_lights_run_on_bash) - [My Lights Run on Bash](https://kramkow.ski/article/2025/06/27/my_lights_run_on_bash.html)
* [2025-06-27, 10:48:35](https://lobste.rs/s/33tzjt/lispmfpga_goal_this_project_is_create) - [LispmFPGA: the goal of this project is to create a small Lisp-Machine in an FPGA](http://www.aviduratas.de/lisp/lispmfpga/index.html)
* [2025-06-27, 07:14:00](https://soylentnews.org/article.pl?sid=25/06/26/0223205&amp;from=rss) - [Modified Bacteria Convert Plastic Waste Into Pain Reliever](https://soylentnews.org/article.pl?sid=25/06/26/0223205&amp;from=rss)
* [2025-06-27, 02:29:00](https://soylentnews.org/article.pl?sid=25/06/26/0210246&amp;from=rss) - [Why Geoengineering is No Longer a Complete Taboo for Scientists](https://soylentnews.org/article.pl?sid=25/06/26/0210246&amp;from=rss)
* [2025-06-26, 21:43:00](https://soylentnews.org/article.pl?sid=25/06/25/1717228&amp;from=rss) - [Apple&apos;s A19 May Be Powerful, But Leans Towards Saving Power](https://soylentnews.org/article.pl?sid=25/06/25/1717228&amp;from=rss)
* [2025-06-26, 18:58:39](https://lobste.rs/s/llgmmr/announcing_rust_1_88_0) - [Announcing Rust 1.88.0](https://blog.rust-lang.org/2025/06/26/Rust-1.88.0/)
* [2025-06-26, 16:53:00](https://soylentnews.org/article.pl?sid=25/06/25/1715224&amp;from=rss) - [Rubin Telescope To Collect Up To 500,000 Tb Of Data From 3,200-Megapixel Camera Over Ten Years](https://soylentnews.org/article.pl?sid=25/06/25/1715224&amp;from=rss)
* [2025-06-26, 12:11:00](https://soylentnews.org/article.pl?sid=25/06/25/1712202&amp;from=rss) - [Key Fair Use Ruling Clarifies When Books Can be Used for AI Training](https://soylentnews.org/article.pl?sid=25/06/25/1712202&amp;from=rss)
* [2025-06-26, 07:23:00](https://soylentnews.org/article.pl?sid=25/06/25/0358212&amp;from=rss) - [Blaze Sends Ship Carrying Hundreds Of Chinese EVs To Bottom Of Pacific](https://soylentnews.org/article.pl?sid=25/06/25/0358212&amp;from=rss)
* [2025-06-26, 02:38:00](https://soylentnews.org/article.pl?sid=25/06/24/2342222&amp;from=rss) - [Judge Denies Creating “Mass Surveillance Program” Harming All ChatGPT Users](https://soylentnews.org/article.pl?sid=25/06/24/2342222&amp;from=rss)
* [2025-06-25, 22:17:00](https://soylentnews.org/article.pl?sid=25/06/24/1258205&amp;from=rss) - [Creating AI Based Entirely on Ethically-Sourced Data](https://soylentnews.org/article.pl?sid=25/06/24/1258205&amp;from=rss)
* [2025-06-25, 17:30:00](https://soylentnews.org/article.pl?sid=25/06/24/1256227&amp;from=rss) - [New Research Provides First Evidence of the Use of Browser Fingerprints for Online Tracking](https://soylentnews.org/article.pl?sid=25/06/24/1256227&amp;from=rss)
* [2025-06-25, 16:11:40](https://news.ycombinator.com/item?id=44378916) - [C++ Seeding Surprises (2015)](https://www.pcg-random.org/posts/cpp-seeding-surprises.html)
* [2025-06-25, 12:45:00](https://soylentnews.org/article.pl?sid=25/06/24/0336243&amp;from=rss) - [Apple to Australians: You&apos;re Too Stupid to Choose Your Own Apps](https://soylentnews.org/article.pl?sid=25/06/24/0336243&amp;from=rss)
* [2025-06-25, 12:41:06](https://news.ycombinator.com/item?id=44376616) - [Verifiably Correct Lifting of Position-Independent x86-64 Binaries (2024)](https://dl.acm.org/doi/10.1145/3658644.3690244)
* [2025-06-25, 12:23:24](https://news.ycombinator.com/item?id=44376471) - [After successfully entering Earth&apos;s atmosphere, a European spacecraft is lost](https://arstechnica.com/space/2025/06/a-european-spacecraft-company-flies-its-vehicle-then-loses-it-after-reentry/)
* [2025-06-25, 11:34:38](https://news.ycombinator.com/item?id=44376075) - [Show HN: A Go service that exposes a FIFO message queue in RAM](https://github.com/raiyanyahya/zapq)
* [2025-06-25, 10:55:14](https://news.ycombinator.com/item?id=44375795) - [LLMs Bring New Nature of Abstraction](https://martinfowler.com/articles/2025-nature-abstraction.html)
* [2025-06-25, 08:02:00](https://soylentnews.org/article.pl?sid=25/06/24/0044241&amp;from=rss) - [UK Retail&apos;s Estimated Cyberattack Costs Pegged at $500M](https://soylentnews.org/article.pl?sid=25/06/24/0044241&amp;from=rss)
* [2025-06-25, 03:18:00](https://soylentnews.org/article.pl?sid=25/06/24/0039212&amp;from=rss) - [BEV Battery Swapping in Shanghai](https://soylentnews.org/article.pl?sid=25/06/24/0039212&amp;from=rss)
* [2025-06-24, 22:36:00](https://soylentnews.org/article.pl?sid=25/06/24/0032246&amp;from=rss) - [Peru Gas Workers Find Thousand-Year-Old Mummy](https://soylentnews.org/article.pl?sid=25/06/24/0032246&amp;from=rss)
* [2025-06-24, 17:51:00](https://soylentnews.org/article.pl?sid=25/06/24/0030208&amp;from=rss) - [Breathprints?](https://soylentnews.org/article.pl?sid=25/06/24/0030208&amp;from=rss)
* [2025-06-24, 16:18:07](https://news.ycombinator.com/item?id=44367811) - [Lossless LLM 3x Throughput Increase by LMCache](https://github.com/LMCache/LMCache)
* [2025-06-24, 14:29:59](https://news.ycombinator.com/item?id=44366670) - [Reinforcement learning, explained with a minimum of math and jargon](https://www.understandingai.org/p/reinforcement-learning-explained)
* [2025-06-24, 13:09:00](https://soylentnews.org/article.pl?sid=25/06/24/0021200&amp;from=rss) - [Cloudflare CEO Warns AI Crawlers and Summaries Are Eroding the Internet&apos;s Business Model](https://soylentnews.org/article.pl?sid=25/06/24/0021200&amp;from=rss)
* [2025-06-24, 08:23:00](https://soylentnews.org/article.pl?sid=25/06/23/194255&amp;from=rss) - [Massive DDoS Attack Delivered 37.4Tb In 45 Seconds, Equivalent To 10,000 Hd Movies, To One Victim IP](https://soylentnews.org/article.pl?sid=25/06/23/194255&amp;from=rss)
* [2025-06-24, 03:36:00](https://soylentnews.org/article.pl?sid=25/06/22/1718247&amp;from=rss) - [US Tech Czar: China Just Two Years Behind On Chip Design](https://soylentnews.org/article.pl?sid=25/06/22/1718247&amp;from=rss)
