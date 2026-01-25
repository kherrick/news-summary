# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Introducing Kitty Cards](https://lmno.lol/alvaro/introducing-kitty-cards) - A new collectible card game with unique features for engaging gameplay. [Comments](https://lobste.rs/s/upkphl/introducing_kitty_cards)

* [Show HN: VM-curator – a TUI alternative to libvirt and virt-manager](https://github.com/mroboff/vm-curator) - A new text-based interface for managing virtual machines. [Comments](https://news.ycombinator.com/item?id=46750437)

* [Infotainment, EV Charger Exploits Earn $1M at Pwn2Own Automotive 2026](https://it.slashdot.org/story/26/01/25/0131222/infotainment-ev-charger-exploits-earn-1m-at-pwn2own-automotive-2026?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major hacking challenge exposes security flaws in automotive technologies. [Comments](https://it.slashdot.org/story/26/01/25/0131222/infotainment-ev-charger-exploits-earn-1m-at-pwn2own-automotive-2026?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Here&apos;s how to generate a truly random number with quantum physics](https://www.popsci.com/technology/free-random-number-generator/) - Explores the unique capabilities of quantum physics for true randomness. [Comments](https://lobste.rs/s/izkcdg/here_s_how_generate_truly_random_number)

## Artificial Intelligence

* [Google&apos;s &apos;AI Overviews&apos; Cite YouTube For Health Queries More Than Any Medical Sites, Study Suggests](https://news.slashdot.org/story/26/01/25/0043256/googles-ai-overviews-cite-youtube-for-health-queries-more-than-any-medical-sites-study-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Concerns arise over the credibility of YouTube as a primary medical reference. [Comments](https://news.slashdot.org/story/26/01/25/0043256/googles-ai-overviews-cite-youtube-for-health-queries-more-than-any-medical-sites-study-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [David Patterson: Challenges and Research Directions for LLM Inference Hardware](https://arxiv.org/abs/2601.05047) - A leading expert discusses computational challenges in scaling large language models. [Comments](https://news.ycombinator.com/item?id=46750214)

* [AI tribalism](https://nolanlawson.com/2026/01/24/ai-tribalism/) - A reflection on the division and discourse surrounding AI advancements. [Comments](https://lobste.rs/s/cw6f2s/ai_tribalism)

## Space and Scientific Advances

* [NASA Confident, But Some Critics Wonder if Its Orion Spacecraft is Safe to Fly](https://science.slashdot.org/story/26/01/24/0633252/nasa-confident-but-some-critics-wonder-if-its-orion-spacecraft-is-safe-to-fly?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Debates over the safety of NASA's ambitious Orion spacecraft build. [Comments](https://science.slashdot.org/story/26/01/24/0633252/nasa-confident-but-some-critics-wonder-if-its-orion-spacecraft-is-safe-to-fly?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Raspberry Pi Drag Race: Pi 1 to Pi 5 – Performance Comparison](https://the-diy-life.com/raspberry-pi-drag-race-pi-1-to-pi-5-performance-comparison/) - A detailed comparison of Raspberry Pi's evolving computational performance. [Comments](https://news.ycombinator.com/item?id=46745922)

* [A Billiard Ball as a Universal Computation Machine](https://soylentnews.org/article.pl?sid=26/01/22/124243&from=rss) - Creative exploration of simple physical systems and computing principles. [Comments](https://soylentnews.org/article.pl?sid=26/01/22/124243&from=rss)

## Social and Cultural Issues

* [Palantir has no place in UK public services](https://www.opendemocracy.net/en/zarah-sutlana-palantir-no-place-uk-public-services-ministry-of-defence/) - An analysis of why some argue Palantir should not be used in government services. [Comments](https://news.ycombinator.com/item?id=46750852)

* [Hollywood Tries To Take Pirate Sites Down Globally Through India Court](https://yro.slashdot.org/story/26/01/24/0124246/hollywood-tries-to-take-pirate-sites-down-globally-through-india-court?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A global crackdown on piracy platforms spearheaded by Hollywood. [Comments](https://yro.slashdot.org/story/26/01/24/0124246/hollywood-tries-to-take-pirate-sites-down-globally-through-india-court?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Airlines Cancel Over 10,000 US Flights Due To Massive Winter Storm](https://tech.slashdot.org/story/26/01/24/2223200/airlines-cancel-over-10000-us-flights-due-to-massive-winter-storm?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A significant impact on US travel due to severe weather conditions. [Comments](https://tech.slashdot.org/story/26/01/24/2223200/airlines-cancel-over-10000-us-flights-due-to-massive-winter-storm?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2026-01-25, 06:56:57](https://lobste.rs/s/upkphl/introducing_kitty_cards) - [Introducing Kitty Cards](https://lmno.lol/alvaro/introducing-kitty-cards)
* [2026-01-25, 06:11:57](https://lobste.rs/s/7hxrjv/home_router_recommendations) - [Home router recommendations](https://lobste.rs/s/7hxrjv/home_router_recommendations)
* [2026-01-25, 05:34:00](https://news.slashdot.org/story/26/01/25/0043256/googles-ai-overviews-cite-youtube-for-health-queries-more-than-any-medical-sites-study-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s &apos;AI Overviews&apos; Cite YouTube For Health Queries More Than Any Medical Sites, Study Suggests](https://news.slashdot.org/story/26/01/25/0043256/googles-ai-overviews-cite-youtube-for-health-queries-more-than-any-medical-sites-study-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 04:53:29](https://news.ycombinator.com/item?id=46750852) - [Palantir has no place in UK public services](https://www.opendemocracy.net/en/zarah-sutlana-palantir-no-place-uk-public-services-ministry-of-defence/)
* [2026-01-25, 04:46:41](https://lobste.rs/s/weixyl/value_things) - [The Value of Things](https://journal.stuffwithstuff.com/2026/01/24/the-value-of-things/)
* [2026-01-25, 03:44:28](https://news.ycombinator.com/item?id=46750485) - [The Responsibility of Intellectuals (1967)](https://www.nybooks.com/articles/1967/02/23/a-special-supplement-the-responsibility-of-intelle/)
* [2026-01-25, 03:41:46](https://news.ycombinator.com/item?id=46750470) - [Alex Honnold completes Taipei 101 skyscraper climb without ropes or safety net](https://www.cnn.com/sport/live-news/taiwan-alex-honnold-climb-taipei-101-01-25-26-intl-hnk)
* [2026-01-25, 03:38:00](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss) - [How Greenwashing Creates &apos;False Stability&apos; for Companies](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss)
* [2026-01-25, 03:36:38](https://news.ycombinator.com/item?id=46750437) - [Show HN: VM-curator – a TUI alternative to libvirt and virt-manager](https://github.com/mroboff/vm-curator)
* [2026-01-25, 03:33:20](https://news.ycombinator.com/item?id=46750425) - [nvidia-smi hangs indefinitely after ~66 days](https://github.com/NVIDIA/open-gpu-kernel-modules/issues/971)
* [2026-01-25, 03:17:43](https://news.ycombinator.com/item?id=46750358) - [Second Win11 emergency out of band update to address disastrous Patch Tuesday](https://www.windowscentral.com/microsoft/windows-11/windows-11-second-emergency-out-of-band-update-kb5078127-released-address-outlook-bugs)
* [2026-01-25, 02:48:36](https://news.ycombinator.com/item?id=46750214) - [David Patterson: Challenges and Research Directions for LLM Inference Hardware](https://arxiv.org/abs/2601.05047)
* [2026-01-25, 02:34:00](https://it.slashdot.org/story/26/01/25/0131222/infotainment-ev-charger-exploits-earn-1m-at-pwn2own-automotive-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Infotainment, EV Charger Exploits Earn $1M at Pwn2Own Automotive 2026](https://it.slashdot.org/story/26/01/25/0131222/infotainment-ev-charger-exploits-earn-1m-at-pwn2own-automotive-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 02:18:47](https://news.ycombinator.com/item?id=46750024) - [Vortex Support in DuckDB](https://duckdb.org/2026/01/23/duckdb-vortex-extension)
* [2026-01-25, 01:48:20](https://lobste.rs/s/izkcdg/here_s_how_generate_truly_random_number) - [Here&apos;s how to generate a truly random number with quantum physics](https://www.popsci.com/technology/free-random-number-generator/)
* [2026-01-25, 01:25:37](https://news.ycombinator.com/item?id=46749671) - [Two Weeks Until Tapeout](https://essenceia.github.io/projects/two_weeks_until_tapeout/)
* [2026-01-25, 01:01:05](https://lobste.rs/s/yd2csv/how_does_hedgehog_engine_2_work) - [How Does the Hedgehog Engine 2 Work?](https://www.youtube.com/watch?v=RLJQRccTwMs)
* [2026-01-25, 00:14:40](https://news.ycombinator.com/item?id=46749198) - [Adoption of EVs tied to real-world reductions in air pollution: study](https://keck.usc.edu/news/adoption-of-electric-vehicles-tied-to-real-world-reductions-in-air-pollution-study-finds/)
* [2026-01-24, 23:55:10](https://news.ycombinator.com/item?id=46749053) - [We X-Rayed a Suspicious FTDI USB Cable](https://eclypsium.com/blog/xray-counterfeit-usb-cable/)
* [2026-01-24, 23:34:00](https://it.slashdot.org/story/26/01/24/2146216/work-from-office-mandate-expect-top-talent-turnover-culture-rot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Work-From-Office Mandate? Expect Top Talent Turnover, Culture Rot](https://it.slashdot.org/story/26/01/24/2146216/work-from-office-mandate-expect-top-talent-turnover-culture-rot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 22:54:00](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss) - [Ancient “Mosaic” Fossils Found in Morocco Challenge the Timeline of Human Evolution](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss)
* [2026-01-24, 22:34:00](https://tech.slashdot.org/story/26/01/24/2223200/airlines-cancel-over-10000-us-flights-due-to-massive-winter-storm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airlines Cancel Over 10,000 US Flights Due To Massive Winter Storm](https://tech.slashdot.org/story/26/01/24/2223200/airlines-cancel-over-10000-us-flights-due-to-massive-winter-storm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 22:14:14](https://lobste.rs/s/pdsego/i_added_bluesky_comment_section_my_blog) - [I added a Bluesky comment section to my blog](https://micahcantor.com/blog/bluesky-comment-section.html)
* [2026-01-24, 21:50:44](https://lobste.rs/s/iuzuw1/doing_gigabit_ethernet_over_my_british) - [Doing Gigabit Ethernet Over My British Phone Wires](https://thehftguy.com/2026/01/22/doing-gigabit-ethernet-over-my-british-phone-wires/)
* [2026-01-24, 21:34:00](https://hardware.slashdot.org/story/26/01/24/1938220/cheap-green-tech-allows-faster-path-to-electrification-for-the-developing-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cheap Green Tech Allows Faster Path To Electrification For the Developing World](https://hardware.slashdot.org/story/26/01/24/1938220/cheap-green-tech-allows-faster-path-to-electrification-for-the-developing-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 21:31:36](https://lobste.rs/s/cw6f2s/ai_tribalism) - [AI tribalism](https://nolanlawson.com/2026/01/24/ai-tribalism/)
* [2026-01-24, 21:24:13](https://news.ycombinator.com/item?id=46747827) - [Poland&apos;s energy grid was targeted by never-before-seen wiper malware](https://arstechnica.com/security/2026/01/wiper-malware-targeted-poland-energy-grid-but-failed-to-knock-out-electricity/)
* [2026-01-24, 21:01:02](https://news.ycombinator.com/item?id=46747625) - [First Design Engineer Hire – Build Games at Gym Class (YC W22)](https://www.ycombinator.com/companies/gym-class-by-irl-studios/jobs/ywXHGBv-design-engineer-senior-staff-principal)
* [2026-01-24, 20:34:00](https://it.slashdot.org/story/26/01/24/2031221/microsoft-365-endured-9-hours-of-outages-thursday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft 365 Endured 9+ Hours of Outages Thursday](https://it.slashdot.org/story/26/01/24/2031221/microsoft-365-endured-9-hours-of-outages-thursday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 20:03:39](https://news.ycombinator.com/item?id=46747119) - [Postmortem: Our first VLEO satellite mission (with imagery and flight data)](https://albedo.com/post/clarity-1-what-worked-and-where-we-go-next)
* [2026-01-24, 19:34:00](https://slashdot.org/story/26/01/24/076228/ai-luminaries-clash-at-davos-over-how-close-human-level-intelligence-really-is?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Luminaries Clash At Davos Over How Close Human-Level Intelligence Really Is](https://slashdot.org/story/26/01/24/076228/ai-luminaries-clash-at-davos-over-how-close-human-level-intelligence-really-is?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 19:25:53](https://news.ycombinator.com/item?id=46746681) - [Agent orchestration for the timid](https://substack.com/inbox/post/185649875)
* [2026-01-24, 19:04:08](https://news.ycombinator.com/item?id=46746476) - [BirdyChat becomes first European chat app that is interoperable with WhatsApp](https://www.birdy.chat/blog/first-to-interoperate-with-whatsapp)
* [2026-01-24, 18:54:00](https://lobste.rs/s/i7zvfc/cua_bench_benchmark_for_ai_agents_gui) - [Cua-Bench – a benchmark for AI agents in GUI environments](https://github.com/trycua/cua-bench)
* [2026-01-24, 18:42:13](https://news.ycombinator.com/item?id=46746266) - [Understanding Rust Closures](https://antoine.vandecreme.net/blog/rust-closures/)
* [2026-01-24, 18:34:00](https://science.slashdot.org/story/26/01/24/0633252/nasa-confident-but-some-critics-wonder-if-its-orion-spacecraft-is-safe-to-fly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Confident, But Some Critics Wonder if Its Orion Spacecraft is Safe to Fly](https://science.slashdot.org/story/26/01/24/0633252/nasa-confident-but-some-critics-wonder-if-its-orion-spacecraft-is-safe-to-fly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 18:11:00](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss) - [Micron Acquires PSMC Fab Site in Taiwan for $1.8 Billion](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss)
* [2026-01-24, 18:06:00](https://news.ycombinator.com/item?id=46745922) - [Raspberry Pi Drag Race: Pi 1 to Pi 5 – Performance Comparison](https://the-diy-life.com/raspberry-pi-drag-race-pi-1-to-pi-5-performance-comparison/)
* [2026-01-24, 18:05:49](https://lobste.rs/s/abqeyo/obvious_things_c_should_do) - [Obvious Things C Should Do](https://www.digitalmars.com/articles/Cobvious.html)
* [2026-01-24, 17:58:06](https://lobste.rs/s/eahe0a/welcome_town_al_gasr) - [Welcome to Town Al-Gasr](http://muratbuffalo.blogspot.com/2026/01/welcome-to-town-al-gasr.html)
* [2026-01-24, 17:34:00](https://tech.slashdot.org/story/26/01/24/0736248/us-insurer-lemonade-cuts-rates-50-for-drivers-using-teslas-full-self-driving-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Insurer &apos;Lemonade&apos; Cuts Rates 50% for Drivers Using Tesla&apos;s &apos;Full Self-Driving&apos; Software](https://tech.slashdot.org/story/26/01/24/0736248/us-insurer-lemonade-cuts-rates-50-for-drivers-using-teslas-full-self-driving-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 16:39:37](https://lobste.rs/s/2qsmw8/e9p_pure_erlang_9p_implementation) - [e9p - pure Erlang 9p implementation](https://tangled.org/hauleth.dev/e9p)
* [2026-01-24, 16:34:00](https://games.slashdot.org/story/26/01/24/0535245/a-game-studios-fired-co-founder-hijacked-its-domain-name-a-new-lawsuit-alleges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Game Studio&apos;s Fired Co-Founder Hijacked Its Domain Name, a New Lawsuit Alleges](https://games.slashdot.org/story/26/01/24/0535245/a-game-studios-fired-co-founder-hijacked-its-domain-name-a-new-lawsuit-alleges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 16:16:02](https://news.ycombinator.com/item?id=46744807) - [Ask HN: Gmail spam filtering suddenly marking everything as spam?](https://news.ycombinator.com/item?id=46744807)
* [2026-01-24, 15:57:45](https://news.ycombinator.com/item?id=46744647) - [Memory layout in Zig with formulas](https://raymondtana.github.io/math/programming/2026/01/23/zig-alignment-and-sizing.html)
* [2026-01-24, 15:34:00](https://slashdot.org/story/26/01/24/0334206/anthropic-updates-claudes-constitution-just-in-case-chatbot-has-a-consciousness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Updates Claude&apos;s &apos;Constitution,&apos; Just In Case Chatbot Has a Consciousness](https://slashdot.org/story/26/01/24/0334206/anthropic-updates-claudes-constitution-just-in-case-chatbot-has-a-consciousness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 15:15:15](https://lobste.rs/s/sppr7m/coi_webassembly_for_modern_web) - [Coi - WebAssembly for the Modern Web](https://io-eric.github.io/coi/)
* [2026-01-24, 14:35:47](https://news.ycombinator.com/item?id=46743908) - [Claude Code&apos;s new hidden feature: Swarms](https://twitter.com/NicerInPerson/status/2014989679796347375)
* [2026-01-24, 13:51:22](https://lobste.rs/s/h6lbry/telegraph_key_singular_board_morse_for) - [Telegraph Key(singular)board:Morse for the modern era](https://hannahilea.com/blog/telegraph-key-singular-board/)
* [2026-01-24, 13:25:00](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss) - [Hygienic Conditions in Pompeii&apos;s Early Baths Were Poor](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss)
* [2026-01-24, 13:00:00](https://yro.slashdot.org/story/26/01/24/0124246/hollywood-tries-to-take-pirate-sites-down-globally-through-india-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hollywood Tries To Take Pirate Sites Down Globally Through India Court](https://yro.slashdot.org/story/26/01/24/0124246/hollywood-tries-to-take-pirate-sites-down-globally-through-india-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 10:00:00](https://science.slashdot.org/story/26/01/24/0114249/smartwatches-help-detect-abnormal-heart-rhythms-4x-more-often-in-clinical-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Smartwatches Help Detect Abnormal Heart Rhythms 4x More Often In Clinical Trial](https://science.slashdot.org/story/26/01/24/0114249/smartwatches-help-detect-abnormal-heart-rhythms-4x-more-often-in-clinical-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 08:42:00](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss) - [A Billiard Ball as a Universal Computation Machine](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss)
* [2026-01-24, 08:15:38](https://lobste.rs/s/mcaxcn/lispe_lisp_interpreter_with_data) - [lispE: Lisp interpreter with Data Structure, Pattern Programming, High level Functions, Lazy Evaluation](https://github.com/naver/lispe)
* [2026-01-24, 08:15:02](https://news.ycombinator.com/item?id=46741923) - [Shared Claude: A website controlled by the public](https://sharedclaude.com/)
* [2026-01-24, 08:12:27](https://lobste.rs/s/lk5qjr/modetc_move_your_dotfiles_from_kernel) - [modetc: Move your dotfiles from kernel space](https://maxwell.eurofusion.eu/git/rnhmjoj/modetc)
* [2026-01-24, 07:37:22](https://lobste.rs/s/kgdkq3/mikrotik_first_look_getting_started) - [MikroTik first look and getting started](https://rtfm.co.ua/en/mikrotik-first-look-and-getting-started/)
* [2026-01-24, 07:00:00](https://science.slashdot.org/story/26/01/24/014216/study-shows-how-earthquake-monitors-can-track-space-junk-through-sonic-booms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Shows How Earthquake Monitors Can Track Space Junk Through Sonic Booms](https://science.slashdot.org/story/26/01/24/014216/study-shows-how-earthquake-monitors-can-track-space-junk-through-sonic-booms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss) - [When Order Matters: How A Single DNS Change Broke The Internet For Millions](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss)
* [2026-01-24, 03:30:00](https://science.slashdot.org/story/26/01/24/002216/new-filtration-technology-could-be-gamechanger-in-removal-of-pfas-forever-chemicals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Filtration Technology Could Be Gamechanger In Removal of PFAS &apos;Forever Chemicals&apos;](https://science.slashdot.org/story/26/01/24/002216/new-filtration-technology-could-be-gamechanger-in-removal-of-pfas-forever-chemicals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 02:19:41](https://lobste.rs/s/z55cm5/considering_strictly_monotonic_time) - [Considering Strictly Monotonic Time](https://matklad.github.io/2026/01/23/strictly-monotonic-time.html)
* [2026-01-24, 02:14:40](https://lobste.rs/s/9nwumc/december_servo) - [December in Servo](https://servo.org/blog/2026/01/23/december-in-servo/)
* [2026-01-24, 01:28:30](https://lobste.rs/s/m8uv5t/why_god_can_t_play_link_past) - [Why a God Can&apos;t Play A Link to the Past](https://www.youtube.com/watch?v=nQ6e2_QKnmg)
* [2026-01-23, 23:55:27](https://lobste.rs/s/dspppf/how_i_estimate_work_as_staff_software) - [How I estimate work as a staff software engineer](https://www.seangoedecke.com/how-i-estimate-work/)
* [2026-01-23, 23:16:00](https://soylentnews.org/article.pl?sid=26/01/22/1148259&amp;from=rss) - [Caltech-Led Team Finds New Superconducting State](https://soylentnews.org/article.pl?sid=26/01/22/1148259&amp;from=rss)
* [2026-01-23, 20:07:49](https://news.ycombinator.com/item?id=46737202) - [Maze Algorithms (2017)](http://www.jamisbuck.org/mazes/)
* [2026-01-23, 18:32:00](https://soylentnews.org/article.pl?sid=26/01/22/1144249&amp;from=rss) - [Starlink in Iran: How the Regime Jams the Service and What Helps Against It](https://soylentnews.org/article.pl?sid=26/01/22/1144249&amp;from=rss)
* [2026-01-23, 13:45:00](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss) - [Physics of Foam Strangely Resembles AI Training](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss)
* [2026-01-23, 13:31:49](https://lobste.rs/s/5ogdk7/what_has_docker_become) - [What has Docker become?](https://tuananh.net/2026/01/20/what-has-docker-become/)
* [2026-01-23, 13:26:09](https://lobste.rs/s/x0qrlm/agents_md_as_dark_signal) - [AGENTS.md as a dark signal](https://joshmock.com/post/2026-agents-md-as-a-dark-signal/)
* [2026-01-23, 13:07:11](https://lobste.rs/s/zhsi80/gnu_guix_1_5_0_released) - [GNU Guix 1.5.0 released](https://guix.gnu.org/en/blog/2026/gnu-guix-1.5.0-released/)
* [2026-01-23, 08:59:00](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss) - [Wikipedia Volunteers Spent Years Cataloging AI Tells. Now There&apos;s a Plugin to Avoid Them.](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss)
* [2026-01-23, 04:12:00](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss) - [Nvidia Wanted Pirated Book Stash Access](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss)
* [2026-01-23, 00:12:09](https://lobste.rs/s/ijyacx/overrun_with_ai_slop_curl_scraps_bug) - [Overrun with AI slop, cURL scraps bug bounties to ensure \&quot;intact mental health\&quot;](https://arstechnica.com/security/2026/01/overrun-with-ai-slop-curl-scraps-bug-bounties-to-ensure-intact-mental-health/)
* [2026-01-22, 23:28:00](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss) - [Textbooks Were Wrong: Human Hair Doesn&apos;t Grow the Way Scientists Thought](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss)
* [2026-01-22, 18:40:00](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss) - [Cows Use Tools](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss)
* [2026-01-22, 16:27:22](https://news.ycombinator.com/item?id=46721421) - [Draig, a Welsh Programming Language](https://raku.land/zef:l10n/L10N::CY)
* [2026-01-22, 13:46:00](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss) - [AI Bathroom Monitors? Welcome To America’s New Surveillance High Schools](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss)
* [2026-01-22, 09:07:00](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss) - [France Records More Deaths Than Births for First Time Since End of Second World War](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss)
* [2026-01-22, 04:16:00](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss) - [Professors Issue Warning Over Surge in College Students Unable to Read](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss)
* [2026-01-21, 23:34:00](https://soylentnews.org/article.pl?sid=26/01/19/1628204&amp;from=rss) - [The Science That Casts Doubt on Claims About Microplastics](https://soylentnews.org/article.pl?sid=26/01/19/1628204&amp;from=rss)
* [2026-01-21, 18:49:00](https://soylentnews.org/article.pl?sid=26/01/19/1619249&amp;from=rss) - [Hobbies Don&apos;t Just Improve Personal Lives, They Can Boost Workplace Creativity Too](https://soylentnews.org/article.pl?sid=26/01/19/1619249&amp;from=rss)
* [2026-01-21, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss) - [IT Spending Set to Hit $1.4 Trillion in 2026 - but What Exactly Are We Spending It On?](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss)
* [2026-01-21, 09:20:00](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss) - [The Places We Make Memories Help Us Inscribe Them](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss)
* [2026-01-21, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss) - [Proton VPN Kills Off Legacy OpenVPN Configs in Push for Better Security](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss)
* [2026-01-21, 02:17:36](https://news.ycombinator.com/item?id=46700384) - [High-bandwidth flash progress and future](https://blocksandfiles.com/2026/01/19/a-window-into-hbf-progress/)
* [2026-01-21, 00:35:01](https://news.ycombinator.com/item?id=46699697) - [A Lament for Aperture](https://ikennd.ac/blog/2026/01/old-man-yells-at-modern-software-design/)
