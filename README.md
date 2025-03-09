# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Programming Innovations

* [Why the alleged ESP32 backdoor couldn’t happen on CHERIOT](https://cheriot.org/auditing/backdoor/2025/03/09/no-esp32-style-backdoor.html) - A deep dive into why the ESP32 backdoor issue is structurally implausible on CHERIOT systems.

* [Gleam v1.9.0 Released](https://gleam.run/news/hello-echo-hello-git/) - Latest features and enhancements in the Gleam programming language with the v1.9.0 release.

* [Online Embedded Rust Simulator](https://wokwi.com/rust) - A browser-based simulator for embedded systems using Rust.

* [The zinc systems programming language](https://sr.ht/~oconnor0/zinc/) - Introduction to Zinc, a new systems programming language focused on minimalism.

* [H3: For indexing geographies into a hexagonal grid, by Uber](https://h3geo.org/) - Details on how H3, Uber's open-source library, indexes geographical locations with hexagonal grids.

* [Refinement in Rust: optimization, arithmetic, and stateful predicates](https://jordankaye.dev/posts/refined_0_0_4/) - Strengthening Rust programs with the Refined library for enhanced safety and optimization.

## Hardware and Engineering Breakthroughs

* [Asteroid Mining Startup Loses its Spacecraft Somewhere Beyond the Moon](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss) - A groundbreaking attempt to harvest resources in space meets unexpected setbacks.

* [Undocumented 'Backdoor' Found In Chinese Bluetooth Chip Used By a Billion Devices](https://hardware.slashdot.org/story/25/03/08/2027216/undocumented-backdoor-found-in-chinese-bluetooth-chip-used-by-a-billion-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discovery and implications of a serious security flaw in a widely-used Bluetooth chip.

* [NASA's SPHEREx Is Poised To Launch Mission To Map 450 Million Galaxies In Color](https://science.slashdot.org/story/25/03/08/0152240/nasas-spherex-is-poised-to-launch-mission-to-map-450-million-galaxies-in-color?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NASA prepares to launch an ambitious project to survey the universe in unprecedented detail.

## Cultural and Industry Trends

* [Ignoring Protests, Christie's Holds AI Art Auction, Makes Big Money](https://slashdot.org/story/25/03/09/0132251/ignoring-protests-christies-holds-ai-art-auction-makes-big-money?utm_source=rss1.0mainlinkanon&utm_medium=feed) - AI-generated art continues to stir debate in the creative and collector communities.

* [Snack Makers Are Removing Fake Colors From Processed Foods](https://science.slashdot.org/story/25/03/08/033219/snack-makers-are-removing-fake-colors-from-processed-foods?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Processed food manufacturers respond to health and consumer demands for cleaner products.

* [Volkswagen reintroducing physical controls for vital functions](https://www.autocar.co.uk/car-news/new-cars/volkswagen-reintroducing-physical-controls-vital-functions) - Automaker pivots back to tactile controls in a nod to user experience preferences.

## Scientific Discoveries and Medical Advances

* [Stem cell therapy trial reverses "irreversible" damage to cornea](https://newatlas.com/biology/stem-cell-therapy-reverses-irreversible-damage-cornea/) - Revolutionary stem cell treatments show promise in restoring vision.

* [Some of Earth's Meteors Are Probably Coming All the Way From a Neighboring Star System](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss) - Evidence suggests interstellar origins for certain terrestrial meteorites.

* [Man's Brain Turned to Glass by Vesuvius Volcano Ash Cloud](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss) - Extraordinary fossilization process captures the traumatic moment of a volcanic eruption.

## Policy, Ethics, and Global Impact

* [America's Justice Department Still Wants Google to Sell Chrome](https://tech.slashdot.org/story/25/03/09/0232250/americas-justice-department-still-wants-google-to-sell-chrome?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Ongoing antitrust battles challenge Google's browser dominance.

* [15 Republican AGs Urge The Supreme Court To Make Affordable Broadband For Poor People Illegal](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss) - Legal pushback against initiatives aimed at bridging the digital divide.

* [BP Shuns Renewables in Return to Oil and Gas](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss) - A major energy company makes a controversial strategy shift amid volatile markets.

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

* [2025-03-09, 12:15:58](https://lobste.rs/s/yffppm/why_alleged_esp32_backdoor_couldn_t) - [Why the alleged ESP32 backdoor couldn’t happen on CHERIOT](https://cheriot.org/auditing/backdoor/2025/03/09/no-esp32-style-backdoor.html)
* [2025-03-09, 12:01:11](https://news.ycombinator.com/item?id=43308332) - [Helpcare AI (YC F24) Fullstack Engineer](https://docs.google.com/forms/d/e/1FAIpQLScpzOyP_mk3muEpbKrnW8UTZB_yP5SJwjbeT8_6A6fhdvpJCg/viewform?usp=preview)
* [2025-03-09, 11:34:00](https://tech.slashdot.org/story/25/03/09/0232250/americas-justice-department-still-wants-google-to-sell-chrome?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [America's Justice Department Still Wants Google to Sell Chrome](https://tech.slashdot.org/story/25/03/09/0232250/americas-justice-department-still-wants-google-to-sell-chrome?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 11:29:36](https://lobste.rs/s/eetdq8/kubernetes_home_what_do_you_do_if_your_isp) - [Kubernetes@Home – what do you do if your ISP changes your IP addresses?](https://vegard.blog.engen.priv.no/?p=423)
* [2025-03-09, 11:15:12](https://news.ycombinator.com/item?id=43308033) - [Why Go's Error Handling Is Awesome](https://rauljordan.com/why-go-error-handling-is-awesome/)
* [2025-03-09, 11:06:38](https://news.ycombinator.com/item?id=43307987) - [Gleam v1.9.0 Released](https://gleam.run/news/hello-echo-hello-git/)
* [2025-03-09, 11:05:33](https://lobste.rs/s/lvsiz8/gleam_v1_9_0_released) - [Gleam v1.9.0 released](https://gleam.run/news/hello-echo-hello-git/)
* [2025-03-09, 10:57:29](https://news.ycombinator.com/item?id=43307941) - [How to know when it's time to go](https://bitfieldconsulting.com/posts/when-its-time-to-go)
* [2025-03-09, 10:55:39](https://news.ycombinator.com/item?id=43307933) - [This blog post passed unit tests](https://www.sealambda.com/blog/this-post-passed-unit-tests/)
* [2025-03-09, 10:07:01](https://news.ycombinator.com/item?id=43307755) - [Why Layoffs Don't Work](https://thehustle.co/originals/why-layoffs-dont-work)
* [2025-03-09, 09:53:00](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss) - [Asteroid Mining Startup Loses its Spacecraft Somewhere Beyond the Moon](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss)
* [2025-03-09, 09:47:28](https://news.ycombinator.com/item?id=43307659) - [Understanding Memory Management, Part 2: C++ and RAII](https://educatedguesswork.org/posts/memory-management-2/)
* [2025-03-09, 09:07:12](https://lobste.rs/s/tohpnt/lfortran_can_now_compile_prima) - [LFortran can now compile PRIMA](https://lfortran.org/blog/2025/03/lfortran-compiles-prima/)
* [2025-03-09, 09:05:34](https://lobste.rs/s/nm2feq/spacetimedb) - [SpacetimeDB](https://spacetimedb.com/)
* [2025-03-09, 08:34:00](https://news.slashdot.org/story/25/03/09/0359219/is-america-closer-to-ending-daylight-saving-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Is America Closer to Ending Daylight Saving Time?](https://news.slashdot.org/story/25/03/09/0359219/is-america-closer-to-ending-daylight-saving-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 06:35:06](https://news.ycombinator.com/item?id=43306797) - [Goravel: A Go framework inspired by Laravel](https://www.goravel.dev)
* [2025-03-09, 06:29:34](https://lobste.rs/s/dslris/what_s_cooking_on_sourcehut_q1_2025) - [What's cooking on SourceHut? Q1 2025](https://sourcehut.org/blog/2025-03-07-whats-cooking-q1-25/)
* [2025-03-09, 06:23:02](https://news.ycombinator.com/item?id=43306734) - [Stem cell therapy trial reverses \"irreversible\" damage to cornea](https://newatlas.com/biology/stem-cell-therapy-reverses-irreversible-damage-cornea/)
* [2025-03-09, 05:34:00](https://slashdot.org/story/25/03/09/0132251/ignoring-protests-christies-holds-ai-art-auction-makes-big-money?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ignoring Protests, Christie's Holds AI Art Auction, Makes Big Money](https://slashdot.org/story/25/03/09/0132251/ignoring-protests-christies-holds-ai-art-auction-makes-big-money?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 05:14:26](https://lobste.rs/s/csr4mw/building_websites_with_lots_little_html) - [Building Websites With Lots of Little HTML Pages](https://blog.jim-nielsen.com/2025/lots-of-little-html-pages/)
* [2025-03-09, 05:07:00](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss) - [Amid a Growing Measles Outbreak, Doctors Worry RFK is Sending the Wrong Message](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss)
* [2025-03-09, 03:40:51](https://news.ycombinator.com/item?id=43305973) - [Online Embedded Rust Simulator](https://wokwi.com/rust)
* [2025-03-09, 03:40:35](https://lobste.rs/s/chn8zg/online_embedded_rust_simulator) - [Online embedded Rust simulator](https://wokwi.com/rust)
* [2025-03-09, 03:32:04](https://news.ycombinator.com/item?id=43305920) - [H3: For indexing geographies into a hexagonal grid, by Uber](https://h3geo.org/)
* [2025-03-09, 03:30:52](https://news.ycombinator.com/item?id=43305919) - [Posthog/.cursorrules](https://github.com/PostHog/posthog/blob/master/.cursorrules)
* [2025-03-09, 03:27:53](https://lobste.rs/s/zv7gj9/openssl_does_quic_api) - [OpenSSL does a QUIC API](https://daniel.haxx.se/blog/2025/02/16/openssl-does-a-quic-api/)
* [2025-03-09, 03:08:12](https://news.ycombinator.com/item?id=43305803) - [My 16-month theanine self-experiment](https://dynomight.net/theanine/)
* [2025-03-09, 03:06:41](https://lobste.rs/s/d96z4t/zinc_systems_programming_language) - [The zinc systems programming language](https://sr.ht/~oconnor0/zinc/)
* [2025-03-09, 01:59:00](https://tech.slashdot.org/story/25/03/08/2252242/reddit-and-digg-cofounders-plan-relaunch-of-human-centered-digg-with-ai-innovations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Reddit and Digg Cofounders Plan Relaunch of 'Human-Centered' Digg With AI Innovations](https://tech.slashdot.org/story/25/03/08/2252242/reddit-and-digg-cofounders-plan-relaunch-of-human-centered-digg-with-ai-innovations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 01:33:23](https://lobste.rs/s/epyn4f/how_i_write_generics) - [How I Write Generics](https://aartaka.me/my-generics.html)
* [2025-03-09, 00:39:00](https://news.slashdot.org/story/25/03/08/0613217/free-software-foundation-rides-to-defend-agplv3-against-neo4j-license-add-ons?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Free Software Foundation Rides To Defend AGPLv3 Against Neo4j License Add-ons](https://news.slashdot.org/story/25/03/08/0613217/free-software-foundation-rides-to-defend-agplv3-against-neo4j-license-add-ons?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 00:32:56](https://news.ycombinator.com/item?id=43304962) - [Building an open-source Wi-Fi Mac layer for the ESP32](https://esp32-open-mac.be)
* [2025-03-09, 00:23:00](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss) - [Some DOGE Staffers Are Drawing Six-Figure Government Salaries](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss)
* [2025-03-09, 00:04:47](https://news.ycombinator.com/item?id=43304785) - [Show HN: I built an app to get daily wisdom from Mr. Worldwide](https://daale.club/)
* [2025-03-08, 23:36:07](https://lobste.rs/s/p0wauf/cutting_edge_web_scraping_techniques) - [Cutting-edge web scraping techniques](https://github.com/simonw/nicar-2025-scraping/blob/main/README.md)
* [2025-03-08, 23:21:32](https://lobste.rs/s/43kaeh/freebsd_13_5_release_iso_images_available) - [FreeBSD 13.5-RELEASE ISO Images Available](https://download.freebsd.org/releases/ISO-IMAGES/13.5/)
* [2025-03-08, 23:04:16](https://lobste.rs/s/og8hrs/lynx_unlock_native_for_more) - [Lynx: unlock native for more](https://lynxjs.org/)
* [2025-03-08, 22:34:00](https://linux.slashdot.org/story/25/03/08/205225/axiom-space-and-red-hat-will-bring-edge-computing-to-the-international-space-station?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Axiom Space and Red Hat Will Bring Edge Computing to the International Space Station](https://linux.slashdot.org/story/25/03/08/205225/axiom-space-and-red-hat-will-bring-edge-computing-to-the-international-space-station?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 22:30:34](https://lobste.rs/s/4cktbm/socially_self_hosting_source_code_with) - [Socially self-hosting source code with Tangled on Bluesky](https://anil.recoil.org/notes/disentangling-git-with-bluesky)
* [2025-03-08, 21:36:53](https://news.ycombinator.com/item?id=43303752) - [Presenterm: Markdown Slideshows in the Terminal](https://github.com/mfontanini/presenterm)
* [2025-03-08, 21:34:00](https://science.slashdot.org/story/25/03/08/033219/snack-makers-are-removing-fake-colors-from-processed-foods?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Snack Makers Are Removing Fake Colors From Processed Foods](https://science.slashdot.org/story/25/03/08/033219/snack-makers-are-removing-fake-colors-from-processed-foods?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 21:21:05](https://lobste.rs/s/uaw2fo/using_zig_from_common_lisp) - [Using Zig from Common Lisp](https://jagg.github.io/posts/lisp_zig/)
* [2025-03-08, 20:34:00](https://hardware.slashdot.org/story/25/03/08/2027216/undocumented-backdoor-found-in-chinese-bluetooth-chip-used-by-a-billion-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Undocumented 'Backdoor' Found In Chinese Bluetooth Chip Used By a Billion Devices](https://hardware.slashdot.org/story/25/03/08/2027216/undocumented-backdoor-found-in-chinese-bluetooth-chip-used-by-a-billion-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 19:41:00](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss) - [Alphabet's Taara Chip Uses Light Beams To Provide High-Speed Internet](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss)
* [2025-03-08, 19:34:00](https://science.slashdot.org/story/25/03/08/0523212/america-lost-22-of-its-butterflies-within-two-decades?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [America Lost 22% of Its Butterflies Within Two Decades](https://science.slashdot.org/story/25/03/08/0523212/america-lost-22-of-its-butterflies-within-two-decades?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 19:17:33](https://lobste.rs/s/jcsfbx/program_is_database_is_interface) - [The program is the database is the interface](https://www.scattered-thoughts.net/writing/the-program-is-the-database-is-the-interface/)
* [2025-03-08, 18:54:17](https://news.ycombinator.com/item?id=43302495) - [Deploy from local to production (self-hosted)](https://github.com/bypirob/airo)
* [2025-03-08, 18:34:00](https://yro.slashdot.org/story/25/03/08/183254/sam-bankman-fried-gives-a-jailhouse-interview-seeking-a-pardon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sam Bankman-Fried Gives a Jailhouse Interview, Seeking a Pardon](https://yro.slashdot.org/story/25/03/08/183254/sam-bankman-fried-gives-a-jailhouse-interview-seeking-a-pardon?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 18:13:35](https://lobste.rs/s/0twsmb/undocumented_backdoor_found_bluetooth) - [Undocumented \"backdoor\" found in Bluetooth chip used by a billion devices](https://www.bleepingcomputer.com/news/security/undocumented-backdoor-found-in-bluetooth-chip-used-by-a-billion-devices/)
* [2025-03-08, 17:34:00](https://news.slashdot.org/story/25/03/08/0652240/open-source-initiative-ai-debate-roils-board-elections?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Open Source Initiative: AI Debate Roils Board Elections?](https://news.slashdot.org/story/25/03/08/0652240/open-source-initiative-ai-debate-roils-board-elections?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 16:34:00](https://mobile.slashdot.org/story/25/03/08/0346250/rayhunter-a-cheap-new-tool-from-eff-to-detect-cellular-spying?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Rayhunter: A Cheap New Tool from EFF to Detect Cellular Spying](https://mobile.slashdot.org/story/25/03/08/0346250/rayhunter-a-cheap-new-tool-from-eff-to-detect-cellular-spying?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 16:27:00](https://news.ycombinator.com/item?id=43301342) - [Discovering errors in Donald Knuth's TAOCP](https://glthr.com/discovering-errors-in-donald-knuths-taocp)
* [2025-03-08, 15:37:00](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss) - [Temporary Problem with Stripe](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss)
* [2025-03-08, 15:34:00](https://entertainment.slashdot.org/story/25/03/08/0740211/remembering-space-ghost-voice-actor-george-lowe?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Remembering 'Space Ghost' Voice Actor George Lowe](https://entertainment.slashdot.org/story/25/03/08/0740211/remembering-space-ghost-voice-actor-george-lowe?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 14:52:00](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss) - [Hugging Face's Chief Science Officer Worries AI is Becoming 'Yes-Men on Servers'](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss)
* [2025-03-08, 14:22:16](https://lobste.rs/s/lrc6cm/wlroots_add_hdr10_support) - [wlroots: Add HDR10 support](https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/5002)
* [2025-03-08, 13:38:17](https://lobste.rs/s/mamyha/refinement_rust_optimization) - [Refinement in Rust: optimization, arithmetic, and stateful predicates](https://jordankaye.dev/posts/refined_0_0_4/)
* [2025-03-08, 13:27:37](https://lobste.rs/s/7wwmui/introducing_command_commandfor_html) - [Introducing command And commandfor In HTML](https://developer.chrome.com/blog/command-and-commandfor)
* [2025-03-08, 13:00:00](https://linux.slashdot.org/story/25/03/08/0158226/google-introduces-debian-linux-terminal-app-for-android?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Introduces Debian Linux Terminal App For Android](https://linux.slashdot.org/story/25/03/08/0158226/google-introduces-debian-linux-terminal-app-for-android?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 12:57:18](https://news.ycombinator.com/item?id=43299886) - [The DOJ still wants Google to sell off Chrome](https://www.wired.com/story/the-doj-still-wants-google-to-divest-chrome/)
* [2025-03-08, 12:48:11](https://news.ycombinator.com/item?id=43299815) - [Discworld Rules](https://contraptions.venkateshrao.com/p/discworld-rules)
* [2025-03-08, 11:57:42](https://lobste.rs/s/v8izex/list_brave_browser_controversies) - [List of Brave browser controversies](https://old.reddit.com/r/browsers/comments/1j1pq7b/list_of_brave_browser_controversies)
* [2025-03-08, 10:07:00](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss) - [Eerily Realistic AI Voice Demo Sparks Amazement and Discomfort Online](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss)
* [2025-03-08, 10:00:00](https://science.slashdot.org/story/25/03/08/0152240/nasas-spherex-is-poised-to-launch-mission-to-map-450-million-galaxies-in-color?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA's SPHEREx Is Poised To Launch Mission To Map 450 Million Galaxies In Color](https://science.slashdot.org/story/25/03/08/0152240/nasas-spherex-is-poised-to-launch-mission-to-map-450-million-galaxies-in-color?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 07:32:19](https://lobste.rs/s/az2qlz/epic_treatise_on_error_models_for_systems) - [An epic treatise on error models for systems programming languages](https://typesanitizer.com/blog/errors.html)
* [2025-03-08, 07:25:49](https://news.ycombinator.com/item?id=43298271) - [Volkswagen reintroducing physical controls for vital functions](https://www.autocar.co.uk/car-news/new-cars/volkswagen-reintroducing-physical-controls-vital-functions)
* [2025-03-08, 05:22:00](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss) - [Apple Refuses to Break Encryption, Seeks Reversal of UK Demand for Backdoor](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss)
* [2025-03-08, 00:37:00](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss) - [The International Space Station Lacks Microbial Diversity. Is It Too Clean?](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss)
* [2025-03-08, 00:16:26](https://lobste.rs/s/9sscit/why_i_choose_lua_for_this_blog) - [Why I choose Lua for this blog](https://andregarzia.com/2025/03/why-i-choose-lua-for-this-blog.html)
* [2025-03-07, 22:54:58](https://news.ycombinator.com/item?id=43295692) - [AI tools are spotting errors in research papers](https://www.nature.com/articles/d41586-025-00648-5)
* [2025-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss) - [Massive Supereruptions Might Not Trigger the Apocalypse, Just Decades of Chaos](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss)
* [2025-03-07, 15:10:00](https://soylentnews.org/article.pl?sid=25/03/07/041244&from=rss) - [Your Kitchen Utensils May be Poisoning You](https://soylentnews.org/article.pl?sid=25/03/07/041244&from=rss)
* [2025-03-07, 14:38:26](https://lobste.rs/s/su44v6/balatro_timeline) - [The Balatro Timeline](https://localthunk.com/blog/balatro-timeline-3aarh)
* [2025-03-07, 10:26:00](https://soylentnews.org/article.pl?sid=25/03/05/1610259&from=rss) - [How We Added Interlaced Video to Raspberry Pi 5](https://soylentnews.org/article.pl?sid=25/03/05/1610259&from=rss)
* [2025-03-07, 05:42:00](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss) - [BP Shuns Renewables in Return to Oil and Gas](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss)
* [2025-03-07, 00:53:00](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss) - [15 Republican AGs Urge The Supreme Court To Make Affordable Broadband For Poor People Illegal](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss)
* [2025-03-06, 20:10:00](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss) - [World's First \"Synthetic Biological Intelligence\" Runs on Living Human Cells](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss)
* [2025-03-06, 19:49:42](https://news.ycombinator.com/item?id=43284399) - [Spark Texture Compression 1.2](https://www.ludicon.com/castano/blog/2025/03/spark-1-2/)
* [2025-03-06, 15:25:00](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss) - [Google Cofounder Exhorts Employees to Work 60-Hour Weeks to Create AI Designed to Replace Them](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss)
* [2025-03-06, 15:00:23](https://news.ycombinator.com/item?id=43280985) - [LFortran Compiles Prima](https://lfortran.org/blog/2025/03/lfortran-compiles-prima/)
* [2025-03-06, 10:42:00](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss) - [First Petawatt Electron Beam Arrives, Ready to Rip Apart Matter and Space](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss)
* [2025-03-06, 05:59:00](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss) - ['Fire the Intel Board and Rehire Pat Gelsinger,' Argues Former Intel Ceo Craig Barrett](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss)
* [2025-03-06, 03:58:04](https://news.ycombinator.com/item?id=43276251) - [Commodore 64 PETSCII Image (2022)](https://medium.com/@8bitsten/commodore-64-petscii-image-f608225714ec)
* [2025-03-06, 01:13:00](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss) - [Some of Earth's Meteors Are Probably Coming All the Way From a Neighboring Star System](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss)
* [2025-03-05, 22:47:52](https://news.ycombinator.com/item?id=43273828) - [\"Big 3\" science fiction magazines including Asimov's and Analog acquired](https://jasonsanford.substack.com/p/genre-grapevine-for-last-half-of)
* [2025-03-05, 20:27:00](https://soylentnews.org/article.pl?sid=25/03/04/028230&from=rss) - [Robots Are Gaining New Capabilities Thanks to Plants and Fungi](https://soylentnews.org/article.pl?sid=25/03/04/028230&from=rss)
* [2025-03-05, 19:05:09](https://news.ycombinator.com/item?id=43270781) - [Constantly Divisionless Random Numbers](https://dotat.at/@/2025-03-05-lemire-inline.html)
* [2025-03-05, 17:30:44](https://news.ycombinator.com/item?id=43269614) - [SMBC Parts Ways with Hiveworks](https://www.smbc-comics.com/comic/announcement-2)
* [2025-03-05, 16:26:01](https://news.ycombinator.com/item?id=43268713) - [Reducing latency with esoteric Linux process flags](https://www.recall.ai/post/reducing-latency-by-83-with-esoteric-linux-process-flags)
* [2025-03-05, 15:44:00](https://soylentnews.org/article.pl?sid=25/03/04/023230&from=rss) - [Meet the Ice-Hunting Robots Headed for the Moon Right Now](https://soylentnews.org/article.pl?sid=25/03/04/023230&from=rss)
* [2025-03-05, 13:29:45](https://news.ycombinator.com/item?id=43266129) - [Roald Dahl on the death of his daughter (2015)](https://www.telegraph.co.uk/books/authors/roald-dahls-darkest-hour/)
* [2025-03-05, 11:01:00](https://soylentnews.org/article.pl?sid=25/03/03/1622232&from=rss) - [The UEFI Hype and Microsoft's Lies](https://soylentnews.org/article.pl?sid=25/03/03/1622232&from=rss)
* [2025-03-05, 06:17:00](https://soylentnews.org/article.pl?sid=25/03/02/1643244&from=rss) - [Ancient Humans Evolved New Blood Types After Leaving Africa](https://soylentnews.org/article.pl?sid=25/03/02/1643244&from=rss)
* [2025-03-05, 01:33:00](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss) - [Man's Brain Turned to Glass by Vesuvius Volcano Ash Cloud](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss)
