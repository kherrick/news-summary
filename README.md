# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Advances and Insights

* [Gravel Map](https://www.gravelmap.com/map#_=10/45.5424/-122.6544) - A tool for exploring and sharing gravel routes around the world. [Comments](https://news.ycombinator.com/item?id=43085718)

* [ACCESS.bus: The Forgotten USB Competitor](https://tedium.co/2025/02/17/access-bus-i2c-usb-competitor-history/) - A historical dive into ACCESS.bus, an alternative to USB that faded into obscurity. [Comments](https://lobste.rs/s/a83yzz/access_bus_forgotten_usb_competitor)

* [A web platform for using YouTube as a drum sequencer](https://youtubesequencer.com/) - Innovatively turning YouTube into a tool for creating rhythm sequences. [Comments](https://news.ycombinator.com/item?id=43085492)

* [nes86: x86 emulation on the NES](https://github.com/decrazyo/nes86) - An exploration of how to emulate x86 architecture on the limited NES hardware. [Comments](https://lobste.rs/s/dfhwq1/nes86_x86_emulation_on_nes)

* [Octet Of ESP32s Lets You See WiFi Like Never Before](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss) - A project enabling visualization of WiFi networks using an array of ESP32 devices. [Comments](https://lobste.rs/s/tkgkfd/this_esp32_antenna_array_can_see_wifi)

## Cultural Reflections and Historical Discoveries

* [Dedekind's Subtle Knife](https://mathenchant.wordpress.com/2025/02/17/dedekinds-subtle-knife/) - A mathematical essay exploring the elegant conceptual tool attributed to mathematician Richard Dedekind. [Comments](https://news.ycombinator.com/item?id=43084200)

* [George Eliot's reflections on AGI from 1879](https://www.learningfromexamples.com/p/reflections-on-superintelligence) - Revisiting the surprising insights into artificial intelligence from a celebrated 19th-century novelist. [Comments](https://news.ycombinator.com/item?id=43053403)

* [Who carved South America's mysterious ancient tunnels? [pdf]](https://www.clp.unesp.br/Modulos/Noticias/401/paleoburrows-nature-2025.pdf) - Investigating the enigmatic man-made tunnels in South America. [Comments](https://news.ycombinator.com/item?id=43082287)

## Cybersecurity and Privacy Developments

* [WireGuard iOS Not Available in Germany](https://old.reddit.com/r/WireGuard/comments/1irsbgi/wireguard_ios_not_available_in_germany/) - Discussions around the unexplained absence of a popular VPN application in Germany. [Comments](https://news.ycombinator.com/item?id=43085637)

* [Hackers Leak Cop Manuals for Departments Nationwide After Breaching Major Provider](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss) - Sensitive law enforcement documents made public following a large-scale data breach. [Comments](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss)

## Scientific and Futuristic Explorations

* [670nm red light exposure improved aged mitochondrial function, colour vision](https://www.nature.com/articles/s41598-021-02311-1) - A study on how red light may counteract some effects of aging in mitochondria and vision. [Comments](https://news.ycombinator.com/item?id=43066394)

* [AI Reveals Hidden Interior Design Rules of the Cell](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss) - Using artificial intelligence to decipher the organizational principles within living cells. [Comments](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss)

## Economic and Political Shifts

* [Mexico Threatens To Sue Google Over Gulf Renaming](https://tech.slashdot.org/story/25/02/18/0252258/mexico-threatens-to-sue-google-over-gulf-renaming?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Geopolitical tensions arise as Mexico addresses Google's depiction of territorial names. [Comments](https://tech.slashdot.org/story/25/02/18/0252258/mexico-threatens-to-sue-google-over-gulf-renaming)

* [The 'White Collar' Recession is Pummeling Office Workers](https://slashdot.org/story/25/02/17/1916201/the-white-collar-recession-is-pummeling-office-workers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Analyzing the current economic trend affecting salaried professionals. [Comments](https://slashdot.org/story/25/02/17/1916201/the-white-collar-recession-is-pummeling-office-workers)

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

* [2025-02-18, 03:14:54](https://news.ycombinator.com/item?id=43085718) - [Gravel Map](https://www.gravelmap.com/map#_=10/45.5424/-122.6544)
* [2025-02-18, 03:03:09](https://lobste.rs/s/a83yzz/access_bus_forgotten_usb_competitor) - [ACCESS.bus: The Forgotten USB Competitor](https://tedium.co/2025/02/17/access-bus-i2c-usb-competitor-history/)
* [2025-02-18, 03:00:00](https://tech.slashdot.org/story/25/02/18/0252258/mexico-threatens-to-sue-google-over-gulf-renaming?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mexico Threatens To Sue Google Over Gulf Renaming](https://tech.slashdot.org/story/25/02/18/0252258/mexico-threatens-to-sue-google-over-gulf-renaming?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-18, 02:58:57](https://news.ycombinator.com/item?id=43085637) - [WireGuard iOS Not Available in Germany](https://old.reddit.com/r/WireGuard/comments/1irsbgi/wireguard_ios_not_available_in_germany/)
* [2025-02-18, 02:34:37](https://news.ycombinator.com/item?id=43085492) - [A web platform for using YouTube as a drum sequencer](https://youtubesequencer.com/)
* [2025-02-18, 02:29:00](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss) - [DOGE as a National Cyberattack](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss)
* [2025-02-18, 01:57:00](https://news.slashdot.org/story/25/02/18/0156241/when-a-lifetime-subscription-can-save-you-money---and-when-its-risky?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [When a Lifetime Subscription Can Save You Money - and When It's Risky](https://news.slashdot.org/story/25/02/18/0156241/when-a-lifetime-subscription-can-save-you-money---and-when-its-risky?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 23:18:52](https://news.ycombinator.com/item?id=43084200) - [Dedekind's Subtle Knife](https://mathenchant.wordpress.com/2025/02/17/dedekinds-subtle-knife/)
* [2025-02-17, 23:11:33](https://news.ycombinator.com/item?id=43084145) - [On David Lynch's Revenge of the Jedi](https://www.benningtonreview.org/adam-golaski)
* [2025-02-17, 22:11:33](https://lobste.rs/s/ch64l3/new_junior_developers_can_t_actually_code) - [New Junior Developers Can’t Actually Code](https://nmn.gl/blog/ai-and-learning)
* [2025-02-17, 22:09:09](https://news.ycombinator.com/item?id=43083772) - [List of DRM-Free Bookshops](https://libreture.com/bookshops/)
* [2025-02-17, 21:59:14](https://news.ycombinator.com/item?id=43083687) - [Setting up a trusted, self-signed SSL/TLS certificate authority in Linux](https://previnder.com/tls-ca-linux/)
* [2025-02-17, 21:57:07](https://lobste.rs/s/hv9gxk/what_s_ring_buffer_using_them_rust) - [What's in a ring buffer? And using them in Rust](https://ntietz.com/blog/whats-in-a-ring-buffer/#ring)
* [2025-02-17, 21:32:00](https://tech.slashdot.org/story/25/02/17/2133224/chase-will-soon-block-zelle-payments-to-sellers-on-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Chase Will Soon Block Zelle Payments To Sellers on Social Media](https://tech.slashdot.org/story/25/02/17/2133224/chase-will-soon-block-zelle-payments-to-sellers-on-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 21:22:38](https://lobste.rs/s/gsyz6c/swift_evolution_proposal_inlinearray) - [Swift Evolution Proposal:  InlineArray, a fixed-size array](https://github.com/swiftlang/swift-evolution/blob/main/proposals/0453-vector.md)
* [2025-02-17, 21:14:03](https://news.ycombinator.com/item?id=43083345) - [Find Your 2%Ers](https://joyarbitrage.substack.com/p/find-your-2ers)
* [2025-02-17, 21:05:48](https://news.ycombinator.com/item?id=43083295) - [NLRB acting general counsel rescinds non-compete labor policy](https://natlawreview.com/article/nlrb-acting-general-counsel-rescinds-non-compete-labor-policy)
* [2025-02-17, 21:00:29](https://news.ycombinator.com/item?id=43083255) - [TestRigor (YC S21) Is Hiring VP of Engineering](https://www.ycombinator.com/companies/testrigor/jobs/AuTkpC9-vp-of-engineering)
* [2025-02-17, 20:44:00](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss) - [Octet Of ESP32s Lets You See WiFi Like Never Before](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss)
* [2025-02-17, 20:43:08](https://lobste.rs/s/dfhwq1/nes86_x86_emulation_on_nes) - [nes86: x86 emulation on the NES](https://github.com/decrazyo/nes86)
* [2025-02-17, 20:30:04](https://news.ycombinator.com/item?id=43083012) - [Plane crashes, overturns during landing at Toronto airport](https://www.cbc.ca/news/canada/toronto/toronto-pearson-overturned-airplane-1.7461227)
* [2025-02-17, 20:29:53](https://lobste.rs/s/zm1g8r/why_i_m_writing_scheme_implementation) - [Why I'm Writing a Scheme Implementation in 2025 (The Answer is Async Rust)](https://maplant.com/2025-02-17-Why-I'm-Writing-a-Scheme-Implementation-in-2025-(The-Answer-is-Async-Rust).html)
* [2025-02-17, 19:57:16](https://news.ycombinator.com/item?id=43082739) - [NES86 – IBM PC Emulator for the NES](https://github.com/decrazyo/nes86)
* [2025-02-17, 19:56:23](https://lobste.rs/s/ckjevs/choosing_browser) - [Choosing a browser](https://eligrey.com/blog/choosing-a-browser/)
* [2025-02-17, 19:15:00](https://slashdot.org/story/25/02/17/1916201/the-white-collar-recession-is-pummeling-office-workers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The 'White Collar' Recession is Pummeling Office Workers](https://slashdot.org/story/25/02/17/1916201/the-white-collar-recession-is-pummeling-office-workers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 19:12:48](https://lobste.rs/s/1xykzf/debugging_undebuggable_app) - [Debugging An Undebuggable App](https://bryce.co/undebuggable/)
* [2025-02-17, 19:12:14](https://news.ycombinator.com/item?id=43082287) - [Who carved South America's mysterious ancient tunnels? [pdf]](https://www.clp.unesp.br/Modulos/Noticias/401/paleoburrows-nature-2025.pdf)
* [2025-02-17, 18:10:35](https://news.ycombinator.com/item?id=43081713) - [Debugging an Undebuggable App](https://bryce.co/undebuggable/)
* [2025-02-17, 18:03:01](https://lobste.rs/s/5damlp/how_browsers_really_load_web_pages) - [How browsers really load Web pages](https://fosdem.org/2025/schedule/event/fosdem-2025-4852-how-browsers-really-load-web-pages/)
* [2025-02-17, 18:01:00](https://tech.slashdot.org/story/25/02/17/1733222/reddit-mods-are-fighting-to-keep-ai-slop-off-subreddits?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Reddit Mods Are Fighting To Keep AI Slop Off Subreddits](https://tech.slashdot.org/story/25/02/17/1733222/reddit-mods-are-fighting-to-keep-ai-slop-off-subreddits?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 17:49:24](https://lobste.rs/s/c6rk0l/14_years_systemd) - [14 years of systemd](https://lwn.net/SubscriberLink/1008721/7c31808d76480012/)
* [2025-02-17, 17:36:02](https://news.ycombinator.com/item?id=43081378) - [Small Tech](https://www.scattered-thoughts.net/writing/small-tech/)
* [2025-02-17, 17:28:48](https://lobste.rs/s/8zd1tm/mac_menubar_swiftui) - [The Mac Menubar and SwiftUI](https://troz.net/post/2025/mac_menu_data/)
* [2025-02-17, 17:20:00](https://apple.slashdot.org/story/25/02/17/1720232/hardware-mod-showcases-an-iphone-se-3-in-the-body-of-a-windows-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hardware Mod Showcases an iPhone SE 3 in the Body of a Windows Phone](https://apple.slashdot.org/story/25/02/17/1720232/hardware-mod-showcases-an-iphone-se-3-in-the-body-of-a-windows-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 16:54:52](https://news.ycombinator.com/item?id=43080895) - [Launch HN: Roark (YC W25) – Taking the pain out of voice AI testing](https://news.ycombinator.com/item?id=43080895)
* [2025-02-17, 16:23:07](https://news.ycombinator.com/item?id=43080531) - [Watch R1 \"think\" with animated chains of thought](https://github.com/dhealy05/frames_of_mind)
* [2025-02-17, 16:09:47](https://news.ycombinator.com/item?id=43080378) - [Open source projects could sell SBOM fragments](https://www.thomas-huehn.com/open-source-projects-could-sell-sbom-fragments/)
* [2025-02-17, 16:02:00](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss) - [Women Speak Some 3000ish Words More Per Day Than Men](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss)
* [2025-02-17, 16:01:00](https://yro.slashdot.org/story/25/02/17/1557220/nearly-10-years-after-data-and-goliath-bruce-schneier-says-privacys-still-screwed?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nearly 10 Years After Data and Goliath, Bruce Schneier Says: Privacy's Still Screwed](https://yro.slashdot.org/story/25/02/17/1557220/nearly-10-years-after-data-and-goliath-bruce-schneier-says-privacys-still-screwed?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 15:36:24](https://lobste.rs/s/y713xl/accessible_color_palette_tester) - [Accessible color palette tester](https://palette-tester.9elements.com/)
* [2025-02-17, 15:29:07](https://lobste.rs/s/yipk5r/can_i_ethically_use_llms) - [Can I ethically use LLMs?](https://ntietz.com/blog/can-i-ethically-use-llms/)
* [2025-02-17, 15:20:00](https://apple.slashdot.org/story/25/02/17/1520242/apple-weighs-adding-paid-business-listings-to-maps-app?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Weighs Adding Paid Business Listings To Maps App](https://apple.slashdot.org/story/25/02/17/1520242/apple-weighs-adding-paid-business-listings-to-maps-app?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 14:00:00](https://developers.slashdot.org/story/25/02/17/1317210/new-junior-developers-cant-actually-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['New Junior Developers Can't Actually Code'](https://developers.slashdot.org/story/25/02/17/1317210/new-junior-developers-cant-actually-code?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 13:54:40](https://news.ycombinator.com/item?id=43079023) - [Espargos: ESP32-based WiFi sensing array](https://espargos.net/)
* [2025-02-17, 13:27:34](https://lobste.rs/s/evay67/design_build_some_elegant_fully) - [Design/build of some elegant, fully parametric speaker cabinets](https://calbryant.uk/blog/speakers/)
* [2025-02-17, 13:11:35](https://lobste.rs/s/b5dnjh/0_0_0_c_thread_local_storage_performance) - [0+0 > 0: C++ thread-local storage performance](https://yosefk.com/blog/cxx-thread-local-storage-performance.html)
* [2025-02-17, 12:42:07](https://lobste.rs/s/5hmdqi/searchcode_com_s_sqlite_database_is) - [searchcode.com’s SQLite database is probably 6 terabytes bigger than yours](https://boyter.org/posts/searchcode-bigger-sqlite-than-you/)
* [2025-02-17, 12:34:00](https://it.slashdot.org/story/25/02/17/0713230/will-amazons-return-to-office-mandate-revitalize-downtown-seattle?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Will Amazon's Return-to-Office Mandate Revitalize Downtown Seattle?](https://it.slashdot.org/story/25/02/17/0713230/will-amazons-return-to-office-mandate-revitalize-downtown-seattle?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 11:29:06](https://lobste.rs/s/y2xa9n/ux_design_rework_1_reworking_my) - [UX Design Rework #1 - reworking my university hoarding](https://bhoot.dev/2025/ux-design-rework-1-i-love-vnsgu/)
* [2025-02-17, 11:20:29](https://lobste.rs/s/ffceax/why_test_first_development_is_so_damn_hard) - [Why Test-First Development Is So Damn Hard](https://jarosz.dev/atomicessay/why-test-first-development-is-so-damn-hard/)
* [2025-02-17, 11:18:29](https://news.ycombinator.com/item?id=43077675) - [0+0 > 0: C++ thread-local storage performance](https://yosefk.com/blog/cxx-thread-local-storage-performance.html)
* [2025-02-17, 11:15:00](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss) - [Wiggling Ears May Have Once Helped Us Hear](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss)
* [2025-02-17, 10:21:54](https://lobste.rs/s/mfmvmj/tutorial_introduction_lambda_calculus) - [A Tutorial Introduction to the Lambda Calculus (2015)](https://arxiv.org/pdf/1503.09060)
* [2025-02-17, 08:34:00](https://yro.slashdot.org/story/25/02/17/064219/deepseek-removed-from-south-korea-app-stores-pending-privacy-review?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek Removed from South Korea App Stores Pending Privacy Review](https://yro.slashdot.org/story/25/02/17/064219/deepseek-removed-from-south-korea-app-stores-pending-privacy-review?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 08:00:25](https://lobste.rs/s/qpjxpb/f8_8_bit_architecture_designed_for_c) - [f8 - an 8 bit architecture designed for C and memory efficiency](https://fosdem.org/2025/schedule/event/fosdem-2025-4902-f8-an-8-bit-architecture-designed-for-c-and-memory-efficiency/)
* [2025-02-17, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss) - [AUKUS Blasts Holes In Lockbit's Bulletproof Hosting Provider](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss)
* [2025-02-17, 05:22:00](https://tech.slashdot.org/story/25/02/17/0511251/california-considers-taking-over-some-oil-refineries?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [California Considers Taking Over Some Oil Refineries](https://tech.slashdot.org/story/25/02/17/0511251/california-considers-taking-over-some-oil-refineries?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 03:22:00](https://tech.slashdot.org/story/25/02/17/0318229/why-a-maintainer-of-the-linux-graphics-driver-nouveau-stepped-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Why A Maintainer of the Linux Graphics Driver Nouveau Stepped Down](https://tech.slashdot.org/story/25/02/17/0318229/why-a-maintainer-of-the-linux-graphics-driver-nouveau-stepped-down?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 02:05:28](https://lobste.rs/s/sag0p3/making_web_more_readable_with_stylus) - [Making the Web More Readable With Stylus](https://www.wezm.net/v2/posts/2025/stylus/)
* [2025-02-17, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss) - [Ignorance Bliss When You’Re Drowning In Information](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss)
* [2025-02-17, 01:09:00](https://news.slashdot.org/story/25/02/17/016217/697-page-book-publishes-a-poets-2000-amazon-reviews-posthumously?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [697-Page Book Publishes a Poet's 2,000 Amazon Reviews Posthumously](https://news.slashdot.org/story/25/02/17/016217/697-page-book-publishes-a-poets-2000-amazon-reviews-posthumously?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 00:26:04](https://news.ycombinator.com/item?id=43073377) - [Making Markets on Kalshi](https://rlafuente.com/post?post=2025-2-16-marketmaking-on-kalshi)
* [2025-02-17, 00:14:47](https://lobste.rs/s/yyju3z/when_is_oop_more_useful_modelling) - [When is OOP a More Useful Modelling Approach than Other Paradigms?](https://lobste.rs/s/yyju3z/when_is_oop_more_useful_modelling)
* [2025-02-17, 00:06:09](https://lobste.rs/s/tkgkfd/this_esp32_antenna_array_can_see_wifi) - [This ESP32 antenna array can see WiFi](https://www.youtube.com/watch?v=sXwDrcd1t-E)
* [2025-02-16, 23:13:00](https://tech.slashdot.org/story/25/02/16/2311215/are-technologies-of-connection-tearing-us-apart?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Are Technologies of Connection Tearing Us Apart?](https://tech.slashdot.org/story/25/02/16/2311215/are-technologies-of-connection-tearing-us-apart?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 21:42:03](https://news.ycombinator.com/item?id=43071983) - [I helped fix sleep-wake hangs on Linux with AMD GPUs](https://nyanpasu64.gitlab.io/blog/amdgpu-sleep-wake-hang/)
* [2025-02-16, 20:54:00](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss) - [The Guy Who Accidentally Threw Away $700 Million in Bitcoin Wants to Buy the Landfill to Find It](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss)
* [2025-02-16, 17:29:01](https://lobste.rs/s/mk577n/civic_tech_s_third_wave) - [Civic Tech's Third Wave](https://www.jpt.sh/posts/third-wave-civic-tech/)
* [2025-02-16, 17:14:25](https://lobste.rs/s/xjrlj2/how_android_s_calculator_works_with_real) - [How Android's calculator works with real numbers](https://chadnauseam.com/coding/random/calculator-app)
* [2025-02-16, 16:12:00](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss) - [Waste Surveillance at Just 20 Airports Could Spot the Next Pandemic](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss)
* [2025-02-16, 11:27:00](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss) - [AI Reveals Hidden Interior Design Rules of the Cell](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss)
* [2025-02-16, 08:33:47](https://news.ycombinator.com/item?id=43066394) - [670nm red light exposure improved aged mitochondrial function, colour vision](https://www.nature.com/articles/s41598-021-02311-1)
* [2025-02-16, 06:42:00](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss) - [Key Takeaways From The Paris AI Summit](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss)
* [2025-02-16, 01:58:00](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss) - [If You Ever Stacked Cups In Gym Class, Blame My Dad](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss)
* [2025-02-15, 21:09:00](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss) - [Let’s Buy California from Trump – Denmark’s Next Big Adventure ](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss)
* [2025-02-15, 16:24:00](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss) - [Flies Play Too, Carousel Study Suggests](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss)
* [2025-02-15, 11:38:00](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss) - [Anyone Can Push Updates to the DOGE.gov Website](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss)
* [2025-02-15, 06:52:00](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss) - [RTX5090 Cable Overheats to 150 C Where Uneven Current Distribution Likely the Culprit](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss)
* [2025-02-15, 02:10:04](https://news.ycombinator.com/item?id=43055191) - [The San Francisco stadium that fog killed](https://www.sfgate.com/sports/article/sf-thought-built-stadium-future-fog-ewing-field-20051971.php)
* [2025-02-15, 02:08:00](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss) - [EU Will Put Over $200 Billion Toward AI Development](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss)
* [2025-02-14, 21:43:50](https://news.ycombinator.com/item?id=43053403) - [George Eliot's reflections on AGI from 1879](https://www.learningfromexamples.com/p/reflections-on-superintelligence)
* [2025-02-14, 21:25:00](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss) - [8 Million Requests Later, We Made The SolarWinds Supply Chain Attack Look Amateur](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss)
* [2025-02-14, 20:16:10](https://news.ycombinator.com/item?id=43052635) - [Visualize Ownership and Lifetimes in Rust](https://github.com/cordx56/rustowl)
* [2025-02-14, 19:38:38](https://news.ycombinator.com/item?id=43052185) - [New Technology Reveals Details About Indigenous Habitations in Desert Canyons](https://www.smithsonianmag.com/history/canyon-of-the-ancestors-180985955/)
* [2025-02-14, 16:17:00](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss) - [Judge Agrees Trump's Removal Of Health Websites Threatens The Public](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss)
* [2025-02-14, 11:36:39](https://news.ycombinator.com/item?id=43047341) - [You're not a senior engineer until you've worked on a legacy project (2023)](https://www.infobip.com/developers/blog/seniors-working-on-a-legacy-project)
* [2025-02-14, 11:34:00](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss) - [Earth's Inner Core is Less Solid Than Previously Thought: Study Reveals Structural Transformation](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss)
* [2025-02-14, 09:42:05](https://news.ycombinator.com/item?id=43046631) - [Why Quantum Cryptanalysis is Bollocks [pdf]](https://www.cs.auckland.ac.nz/~pgut001/pubs/bollocks.pdf)
* [2025-02-14, 06:50:00](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss) - [Hackers Leak Cop Manuals for Departments Nationwide After Breaching Major Provider](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss)
* [2025-02-14, 02:04:00](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss) - [The Science of Why There's Less Passing in the Daytona 500](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss)
