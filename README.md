# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [New Smartphone Labels For Battery Life and Repairability Are Coming To the EU](https://it.slashdot.org/story/25/04/24/1521224/new-smartphone-labels-for-battery-life-and-repairability-are-coming-to-the-eu?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The EU is taking steps to standardize smartphone labels, focusing on battery life and repairability metrics.

* [What If We Could Rebuild Kafka From Scratch?](https://www.morling.dev/blog/what-if-we-could-rebuild-kafka-from-scratch/) - Blog explores the possibility of designing Kafka from the ground up, tackling longstanding challenges in real-time processing.

* [AMD Publishes Open-Source Driver for GPU Virtualization, Radeon 'In the Roadmap'](https://www.phoronix.com/news/AMD-GIM-Open-Source) - AMD releases an open-source tool facilitating GPU virtualization, a step forward for Radeon technologies.

* [Quantum Messages Travel 254 km Using Existing Infrastructure For the First Time](https://science.slashdot.org/story/25/04/23/2227211/quantum-messages-travel-254-km-using-existing-infrastructure-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers achieve a quantum communication milestone over existing fiber infrastructure.

## Cybersecurity Risks

* [Hackers Can Now Bypass Linux Security Thanks To Terrifying New Curing Rootkit](https://linux.slashdot.org/story/25/04/24/142249/hackers-can-now-bypass-linux-security-thanks-to-terrifying-new-curing-rootkit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A new rootkit threatens Linux systems, bypassing established security protocols.

* [Sophisticated Gmail Attack Highlights Dangers of Trusting Big Tech with Personal Data](https://soylentnews.org/article.pl?sid=25/04/23/1515240&from=rss) - A targeted attack showcases the vulnerabilities faced by Gmail users.

## Science and Exploration

* [Hubble Celebrates 35th Year In Orbit](https://science.slashdot.org/story/25/04/23/2244236/hubble-celebrates-35th-year-in-orbit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The iconic Hubble Space Telescope marks its 35th anniversary in orbit, continuing to contribute to astronomical discoveries.

* [Lone Black Hole Discovered](https://soylentnews.org/article.pl?sid=25/04/23/0353259&from=rss) - Astronomers uncover a rare, isolated black hole in deep space.

* [First Successful Lightning Triggering and Guiding Using a Drone](https://group.ntt/en/newsrelease/2025/04/18/250418a.html) - Scientists deploy drones to successfully guide and trigger lightning strikes.

## Business and Policy

* [Microsoft Offers Underperformers Cash To Quit](https://slashdot.org/story/25/04/24/1442222/microsoft-offers-underperformers-cash-to-quit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft introduces a program to pay employees deemed underperforming for voluntary resignation.

* [New Jersey Sues Property Management Software Firm RealPage, Says Collusion With Landlords Drives Up Rents](https://yro.slashdot.org/story/25/04/23/2215203/new-jersey-sues-property-management-software-firm-realpage-says-collusion-with-landlords-drives-up-rents?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A legal challenge accusing RealPage of aiding inflation of rental markets draws significant attention.

## Unique Developments

* [Show HN: My from-scratch OS kernel that runs DOOM](https://github.com/UnmappedStack/TacOS) - A developer showcases a custom-built operating system kernel capable of running DOOM.

* [Shortest-possible walking tour to 81,998 bars in South Korea](https://www.math.uwaterloo.ca/tsp/korea/index.html) - Mathematical optimization is used to create the ideal walking route to cover thousands of bars in South Korea.

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

* [2025-04-24, 15:38:00](https://soylentnews.org/article.pl?sid=25/04/23/1521205&amp;from=rss) - [Open Home passes 2 million homes equipped](https://soylentnews.org/article.pl?sid=25/04/23/1521205&amp;from=rss)
* [2025-04-24, 15:22:00](https://it.slashdot.org/story/25/04/24/1521224/new-smartphone-labels-for-battery-life-and-repairability-are-coming-to-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Smartphone Labels For Battery Life and Repairability Are Coming To the EU](https://it.slashdot.org/story/25/04/24/1521224/new-smartphone-labels-for-battery-life-and-repairability-are-coming-to-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-24, 14:52:46](https://lobste.rs/s/8s6cxz/what_if_we_could_rebuild_kafka_from) - [What If We Could Rebuild Kafka From Scratch?](https://www.morling.dev/blog/what-if-we-could-rebuild-kafka-from-scratch/)
* [2025-04-24, 14:42:03](https://news.ycombinator.com/item?id=43783416) - [Three Fundamental Flaws of SIMD ISAs (2023)](https://www.bitsnbites.eu/three-fundamental-flaws-of-simd/)
* [2025-04-24, 14:41:00](https://slashdot.org/story/25/04/24/1442222/microsoft-offers-underperformers-cash-to-quit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Offers Underperformers Cash To Quit](https://slashdot.org/story/25/04/24/1442222/microsoft-offers-underperformers-cash-to-quit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-24, 14:02:00](https://linux.slashdot.org/story/25/04/24/142249/hackers-can-now-bypass-linux-security-thanks-to-terrifying-new-curing-rootkit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Can Now Bypass Linux Security Thanks To Terrifying New Curing Rootkit](https://linux.slashdot.org/story/25/04/24/142249/hackers-can-now-bypass-linux-security-thanks-to-terrifying-new-curing-rootkit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-24, 13:44:48](https://lobste.rs/s/t4oq5z/oniguruma_popular_regex_library_is) - [Oniguruma, a popular regex library, is archived, the project \&quot;ended\&quot;](https://github.com/kkos/oniguruma)
* [2025-04-24, 13:35:57](https://lobste.rs/s/uhyijm/github_potential_leaking_private_emails) - [GitHub potential leaking of private emails and Hacker One](https://omarabid.com/hacker-one)
* [2025-04-24, 13:27:33](https://lobste.rs/s/zgj0jz/requirements_change_until_they_don_t) - [Requirements change until they don&apos;t](https://buttondown.com/hillelwayne/archive/requirements-change-until-they-dont/)
* [2025-04-24, 13:23:26](https://news.ycombinator.com/item?id=43782406) - [Instant SQL for results as you type in DuckDB UI](https://motherduck.com/blog/introducing-instant-sql/)
* [2025-04-24, 13:00:00](https://science.slashdot.org/story/25/04/23/2238225/scientists-say-they-can-calculate-the-cost-of-oil-giants-role-in-global-warming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Say They Can Calculate the Cost of Oil Giants&apos; Role In Global Warming](https://science.slashdot.org/story/25/04/23/2238225/scientists-say-they-can-calculate-the-cost-of-oil-giants-role-in-global-warming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-24, 12:35:04](https://lobste.rs/s/dtaae5/avoid_continue) - [Avoid continue](https://www.teamten.com/lawrence/programming/avoid-continue.html)
* [2025-04-24, 12:26:38](https://news.ycombinator.com/item?id=43781888) - [I wrote to the address in the GPLv2 license notice (2022)](https://code.mendhak.com/gpl-v2-address-letter/)
* [2025-04-24, 12:00:10](https://news.ycombinator.com/item?id=43781663) - [Tenjin (YC S14) Is Hiring a Senior Ad Attribution Engineer (Ruby, Go)](https://www.ycombinator.com/companies/tenjin/jobs/7qwVnEp-senior-backend-engineer-ad-attribution)
* [2025-04-24, 11:54:44](https://lobste.rs/s/avp6rw/towards_vortex_1_0) - [Towards Vortex 1.0](https://spiraldb.com/post/towards-vortex-10)
* [2025-04-24, 11:34:10](https://news.ycombinator.com/item?id=43781465) - [Show HN: I made my own TRMNL e-ink device](https://www.stavros.io/posts/making-a-trmnl-device/)
* [2025-04-24, 10:53:00](https://soylentnews.org/article.pl?sid=25/04/23/1515240&amp;from=rss) - [Sophisticated Gmail Attack Highlights Dangers of Trusting Big Tech with Personal Data](https://soylentnews.org/article.pl?sid=25/04/23/1515240&amp;from=rss)
* [2025-04-24, 10:18:50](https://lobste.rs/s/trthse/first_successful_lightning_triggering) - [First Successful Lightning Triggering and Guiding Using a Drone](https://group.ntt/en/newsrelease/2025/04/18/250418a.html)
* [2025-04-24, 10:00:00](https://science.slashdot.org/story/25/04/23/2244236/hubble-celebrates-35th-year-in-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hubble Celebrates 35th Year In Orbit](https://science.slashdot.org/story/25/04/23/2244236/hubble-celebrates-35th-year-in-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-24, 09:53:22](https://news.ycombinator.com/item?id=43780876) - [Cars and Key Fobs: Attacks on Car Remotes](https://web.stanford.edu/class/ee26n/Assignments/Assignment5.html)
* [2025-04-24, 09:43:48](https://news.ycombinator.com/item?id=43780815) - [On loyalty to Your Employer](https://www.talentstuff.com/blog/on-loyalty-to-your-employer)
* [2025-04-24, 09:37:57](https://news.ycombinator.com/item?id=43780785) - [Creating your own federated microblog](https://fedify.dev/tutorial/microblog)
* [2025-04-24, 09:11:35](https://lobste.rs/s/s0jqjx/bluefish) - [Bluefish](https://bluefishjs.org/)
* [2025-04-24, 08:19:23](https://news.ycombinator.com/item?id=43780377) - [Mark Zuckerberg Says Social Media Is Over](https://www.newyorker.com/culture/infinite-scroll/mark-zuckerberg-says-social-media-is-over)
* [2025-04-24, 08:17:11](https://news.ycombinator.com/item?id=43780363) - [Careless People](https://pluralistic.net/2025/04/23/zuckerstreisand/#zdgaf)
* [2025-04-24, 07:43:15](https://news.ycombinator.com/item?id=43780176) - [Show HN: Colanode, open-source and local-first Slack and Notion alternative](https://github.com/colanode/colanode)
* [2025-04-24, 07:00:00](https://science.slashdot.org/story/25/04/23/2227211/quantum-messages-travel-254-km-using-existing-infrastructure-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Quantum Messages Travel 254 km Using Existing Infrastructure For the First Time](https://science.slashdot.org/story/25/04/23/2227211/quantum-messages-travel-254-km-using-existing-infrastructure-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-24, 06:58:05](https://news.ycombinator.com/item?id=43779953) - [AMD Publishes Open-Source Driver for GPU Virtualization, Radeon \&quot;In the Roadmap\&quot;](https://www.phoronix.com/news/AMD-GIM-Open-Source)
* [2025-04-24, 06:13:35](https://news.ycombinator.com/item?id=43779766) - [Daily driving a Linux phone, but why?](https://thefoggiest.dev/2025/04/24/daily-driving-a-linux-phone-but-why)
* [2025-04-24, 06:11:00](https://soylentnews.org/article.pl?sid=25/04/23/0422241&amp;from=rss) - [World&apos;s First Drone System for Fighting Lightning Protects Cities and Infrastructure](https://soylentnews.org/article.pl?sid=25/04/23/0422241&amp;from=rss)
* [2025-04-24, 03:58:29](https://lobste.rs/s/fkw9va/tools_i_love_are_made_by_awful_people) - [The tools I love are made by awful people](https://ankursethi.com/blog/the-tools-i-love-are-made-by-awful-people/)
* [2025-04-24, 03:30:00](https://science.slashdot.org/story/25/04/23/2122204/stroke-patients-have-high-levels-of-microplastics-clogging-their-arteries-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stroke Patients Have High Levels of Microplastics Clogging Their Arteries, Researchers Find](https://science.slashdot.org/story/25/04/23/2122204/stroke-patients-have-high-levels-of-microplastics-clogging-their-arteries-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-24, 01:40:00](https://tech.slashdot.org/story/25/04/23/2218244/google-forcing-some-remote-workers-to-come-back-3-days-a-week-or-lose-their-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Forcing Some Remote Workers To Come Back 3 Days a Week or Lose Their Jobs](https://tech.slashdot.org/story/25/04/23/2218244/google-forcing-some-remote-workers-to-come-back-3-days-a-week-or-lose-their-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-24, 01:26:00](https://soylentnews.org/article.pl?sid=25/04/23/0353259&amp;from=rss) - [Lone Black Hole Discovered](https://soylentnews.org/article.pl?sid=25/04/23/0353259&amp;from=rss)
* [2025-04-24, 01:24:22](https://news.ycombinator.com/item?id=43778436) - [Yaakov Kirschen’s other legacy](https://www.jns.org/yaakov-kirschens-other-legacy/)
* [2025-04-24, 01:00:00](https://yro.slashdot.org/story/25/04/23/2215203/new-jersey-sues-property-management-software-firm-realpage-says-collusion-with-landlords-drives-up-rents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Jersey Sues Property Management Software Firm RealPage, Says Collusion With Landlords Drives Up Rents](https://yro.slashdot.org/story/25/04/23/2215203/new-jersey-sues-property-management-software-firm-realpage-says-collusion-with-landlords-drives-up-rents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-24, 00:20:40](https://news.ycombinator.com/item?id=43778105) - [Shortest-possible walking tour to 81,998 bars in South Korea](https://www.math.uwaterloo.ca/tsp/korea/index.html)
* [2025-04-24, 00:20:00](https://news.slashdot.org/story/25/04/23/2112226/draft-executive-order-outlines-plan-to-integrate-ai-into-k-12-schools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Draft Executive Order Outlines Plan To Integrate AI Into K-12 Schools](https://news.slashdot.org/story/25/04/23/2112226/draft-executive-order-outlines-plan-to-integrate-ai-into-k-12-schools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-24, 00:15:22](https://news.ycombinator.com/item?id=43778081) - [Show HN: My from-scratch OS kernel that runs DOOM](https://github.com/UnmappedStack/TacOS)
* [2025-04-23, 23:47:06](https://lobste.rs/s/qzu1yx/qemu_version_10_0_0_released) - [QEMU version 10.0.0 released](https://www.qemu.org/2025/04/23/qemu-10-0-0/)
* [2025-04-23, 23:40:00](https://tech.slashdot.org/story/25/04/23/211229/google-gemini-has-350-million-monthly-users-reveals-court-hearing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Gemini Has 350 Million Monthly Users, Reveals Court Hearing](https://tech.slashdot.org/story/25/04/23/211229/google-gemini-has-350-million-monthly-users-reveals-court-hearing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-23, 23:19:32](https://news.ycombinator.com/item?id=43777731) - [CubeCL: GPU Kernels in Rust for CUDA, ROCm, and WGPU](https://github.com/tracel-ai/cubecl)
* [2025-04-23, 23:10:19](https://lobste.rs/s/lwrpus/echo_open_hardware_music_player) - [Echo - Open Hardware Music Player](https://github.com/amachronic/echoplayer)
* [2025-04-23, 23:03:13](https://lobste.rs/s/okm5za/how_make_android_tablet_respect_my_wish) - [How to make an Android tablet respect my wish to stay on a WiFi with no internet access?](https://lobste.rs/s/okm5za/how_make_android_tablet_respect_my_wish)
* [2025-04-23, 23:00:00](https://yro.slashdot.org/story/25/04/23/2055229/whatsapp-blocks-people-from-exporting-your-entire-chat-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WhatsApp Blocks People From Exporting Your Entire Chat History](https://yro.slashdot.org/story/25/04/23/2055229/whatsapp-blocks-people-from-exporting-your-entire-chat-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-23, 22:20:00](https://games.slashdot.org/story/25/04/23/2050237/dd-updates-core-rules-sticks-with-cc-license?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [D&amp;amp;D Updates Core Rules, Sticks With CC License](https://games.slashdot.org/story/25/04/23/2050237/dd-updates-core-rules-sticks-with-cc-license?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-23, 22:12:23](https://lobste.rs/s/8yyawr/linux_syscall_tables) - [Linux syscall tables](https://syscalls.mebeim.net/?table=x86/64/x64/latest)
* [2025-04-23, 21:47:27](https://news.ycombinator.com/item?id=43776967) - [YAGRI: You are gonna read it](https://www.scottantipa.com/yagri)
* [2025-04-23, 21:40:00](https://slashdot.org/story/25/04/23/2040251/discords-ceo-and-co-founder-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Discord&apos;s CEO and Co-Founder Is Stepping Down](https://slashdot.org/story/25/04/23/2040251/discords-ceo-and-co-founder-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-23, 21:00:00](https://meta.slashdot.org/story/25/04/23/2033218/meta-rolls-out-live-translations-to-all-ray-ban-smart-glasses-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Rolls Out Live Translations To All Ray-Ban Smart Glasses Users](https://meta.slashdot.org/story/25/04/23/2033218/meta-rolls-out-live-translations-to-all-ray-ban-smart-glasses-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-23, 20:52:19](https://news.ycombinator.com/item?id=43776512) - [Google contract prevented Motorola from setting Perplexity as default assistant](https://www.bloomberg.com/news/articles/2025-04-23/perplexity-executive-says-google-blocked-motorola-s-use-of-ai-assistant)
* [2025-04-23, 20:48:57](https://news.ycombinator.com/item?id=43776477) - [How much math is knowable? [video]](https://www.youtube.com/watch?v=VplMHWSZf5c)
* [2025-04-23, 20:41:00](https://soylentnews.org/article.pl?sid=25/04/23/0343211&amp;from=rss) - [Hosting a Blog on a Nintendo Wii](https://soylentnews.org/article.pl?sid=25/04/23/0343211&amp;from=rss)
* [2025-04-23, 19:55:55](https://lobste.rs/s/bny5ko/minc_openbsd_flavored_cygwin_alike_for) - [MinC - OpenBSD-flavored cygwin-alike for running UNIX-y things on Windows](https://minc.commandlinerevolution.nl/english/home.html)
* [2025-04-23, 19:54:44](https://lobste.rs/s/le4pvw/searchable_linux_syscall_table_for_x86_64) - [Searchable Linux Syscall Table for x86_64](https://filippo.io/linux-syscall-table/)
* [2025-04-23, 19:42:36](https://news.ycombinator.com/item?id=43775926) - [You wouldn&apos;t steal a font](https://fedi.rib.gay/notes/a6xqityngfubsz0f)
* [2025-04-23, 19:40:43](https://lobste.rs/s/5wvnry/you_wouldn_t_steal_font) - [You wouldn&apos;t steal a font](https://fedi.rib.gay/notes/a6xqityngfubsz0f)
* [2025-04-23, 19:24:58](https://news.ycombinator.com/item?id=43775766) - [First Successful Lightning Triggering and Guiding Using a Drone](https://group.ntt/en/newsrelease/2025/04/18/250418a.html)
* [2025-04-23, 19:12:52](https://lobste.rs/s/t1lbrg/c_26_more_constexpr_core_language) - [C++26: more constexpr in the core language](https://www.sandordargo.com/blog/2025/04/23/cpp26-constexpr-language-changes)
* [2025-04-23, 18:44:47](https://news.ycombinator.com/item?id=43775358) - [The hidden cost of AI coding](https://terriblesoftware.org/2025/04/23/the-hidden-cost-of-ai-coding/)
* [2025-04-23, 18:13:43](https://news.ycombinator.com/item?id=43774990) - [Teaching LLMs how to solid model](https://willpatrick.xyz/technology/2025/04/23/teaching-llms-how-to-solid-model.html)
* [2025-04-23, 17:53:30](https://lobste.rs/s/f2pe0w/paean_programming) - [A paean to programming](https://bertrandmeyer.com/2025/04/23/a-paean-to-programming/)
* [2025-04-23, 17:48:20](https://news.ycombinator.com/item?id=43774726) - [Graphics livecoding in Common Lisp](https://kevingal.com/blog/cl-livecoding.html)
* [2025-04-23, 16:19:56](https://news.ycombinator.com/item?id=43773813) - [AI Horseless Carriages](https://koomen.dev/essays/horseless-carriages/)
* [2025-04-23, 15:56:00](https://soylentnews.org/article.pl?sid=25/04/22/015230&amp;from=rss) - [Laser Stimulation of Photoreceptors Reveals New Colors](https://soylentnews.org/article.pl?sid=25/04/22/015230&amp;from=rss)
* [2025-04-23, 15:55:05](https://news.ycombinator.com/item?id=43773563) - [Launch HN: Cua (YC X25) – Open-Source Docker Container for Computer-Use Agents](https://github.com/trycua/cua)
* [2025-04-23, 15:13:13](https://lobste.rs/s/ycnsi3/what_is_cosh_list_bool_beyond_algebra) - [What is cosh(List(Bool))? Or beyond algebra: analysis of data types](https://nikitadanilov.github.io/aodt.html)
* [2025-04-23, 15:02:31](https://lobste.rs/s/bhlpgi/cheerpj_4_0_webassembly_jvm_for_browser) - [CheerpJ 4.0: WebAssembly JVM for the browser, now with Java 11 and JNI support](https://labs.leaningtech.com/blog/cheerpj-4.0)
* [2025-04-23, 14:47:45](https://lobste.rs/s/vsjb87/how_20_year_old_bug_gta_san_andreas) - [How a 20 year old bug in GTA San Andreas surfaced in Windows 11 24H2](https://cookieplmonster.github.io/2025/04/23/gta-san-andreas-win11-24h2-bug/)
* [2025-04-23, 14:00:11](https://news.ycombinator.com/item?id=43772311) - [How a 20 year old bug in GTA San Andreas surfaced in Windows 11 24H2](https://cookieplmonster.github.io/2025/04/23/gta-san-andreas-win11-24h2-bug/)
* [2025-04-23, 12:35:49](https://news.ycombinator.com/item?id=43771365) - [Show HN: Node.js video tutorials where you can edit and run the code](https://news.ycombinator.com/item?id=43771365)
* [2025-04-23, 12:16:04](https://lobste.rs/s/zjnc6g/does_using_rust_really_make_your_software) - [Does using Rust really make your software safer?](https://tweedegolf.nl/en/blog/152/does-using-rust-really-make-your-software-safer)
* [2025-04-23, 11:36:07](https://lobste.rs/s/jvvlpb/14_advanced_python_features) - [14 Advanced Python Features](https://blog.edward-li.com/tech/advanced-python-features/)
* [2025-04-23, 11:13:00](https://soylentnews.org/article.pl?sid=25/04/22/011227&amp;from=rss) - [ChatGPT is Now a Potent Tool for Finding the Locations of Photos, Raising Doxxing Concerns](https://soylentnews.org/article.pl?sid=25/04/22/011227&amp;from=rss)
* [2025-04-23, 08:25:59](https://lobste.rs/s/ffq9te/coding_as_craft_going_back_old_gym) - [Coding as Craft: Going Back to the Old Gym](https://cekrem.github.io/posts/coding-as-craft-going-back-to-the-old-gym/)
* [2025-04-23, 06:27:00](https://soylentnews.org/article.pl?sid=25/04/22/0055253&amp;from=rss) - [Major Blow For Cheap Handhelds As Anbernic No Longer Ships To The US](https://soylentnews.org/article.pl?sid=25/04/22/0055253&amp;from=rss)
* [2025-04-23, 01:42:00](https://soylentnews.org/article.pl?sid=25/04/22/0052214&amp;from=rss) - [Cancer-Causing Arsenic is Building Up in the World&apos;s Rice](https://soylentnews.org/article.pl?sid=25/04/22/0052214&amp;from=rss)
* [2025-04-22, 20:57:00](https://soylentnews.org/article.pl?sid=25/04/22/0038216&amp;from=rss) - [CA/Browser Forum Votes to Reduce the Maximum Validity Term of SSL/TLS Certs to 47 Days by 2029](https://soylentnews.org/article.pl?sid=25/04/22/0038216&amp;from=rss)
* [2025-04-22, 20:47:37](https://lobste.rs/s/q5vfvv/nine_reasons_use_osh) - [Nine Reasons to Use OSH](https://oils.pub/osh.html)
* [2025-04-22, 16:10:00](https://soylentnews.org/article.pl?sid=25/04/22/0023201&amp;from=rss) - [Tesla Accused of Speeding Up Odometers So Their Warranties Expire Faster](https://soylentnews.org/article.pl?sid=25/04/22/0023201&amp;from=rss)
* [2025-04-22, 12:58:43](https://news.ycombinator.com/item?id=43761572) - [I Tried to Buy an Actual Barrel of Crude Oil (2015)](https://www.bloomberg.com/news/articles/2015-11-03/that-time-i-tried-to-buy-some-crude-oil)
* [2025-04-22, 11:27:00](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss) - [Oldest Serving US Astronaut Returns to Earth on 70th Birthday](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss)
* [2025-04-22, 06:44:00](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss) - [Scientists Can Tell Healthy And Cancerous Cells Apart By How They Move](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss)
* [2025-04-22, 06:28:00](https://soylentnews.org/meta/article.pl?sid=25/04/22/0619254&amp;from=rss) - [ \&quot;Only 2 submissions in the queue.\&quot;](https://soylentnews.org/meta/article.pl?sid=25/04/22/0619254&amp;from=rss)
* [2025-04-22, 02:01:00](https://soylentnews.org/article.pl?sid=25/04/20/1820252&amp;from=rss) - [Jim Zemlin on Taking a &apos;Portfolio Approach&apos; to Linux Foundation Projects](https://soylentnews.org/article.pl?sid=25/04/20/1820252&amp;from=rss)
* [2025-04-21, 21:13:00](https://soylentnews.org/article.pl?sid=25/04/20/0513237&amp;from=rss) - [Deepseek Open Source model Promotes Fast Innovation and Extensive Application in China](https://soylentnews.org/article.pl?sid=25/04/20/0513237&amp;from=rss)
* [2025-04-21, 16:28:00](https://soylentnews.org/article.pl?sid=25/04/20/059216&amp;from=rss) - [The Universe Isn&apos;t Just Expanding—It May be Spinning](https://soylentnews.org/article.pl?sid=25/04/20/059216&amp;from=rss)
* [2025-04-21, 11:41:00](https://soylentnews.org/article.pl?sid=25/04/20/051250&amp;from=rss) - [Google Introduces Firebase Studio, an End-to-End Platform That Builds Custom Apps in-Browser](https://soylentnews.org/article.pl?sid=25/04/20/051250&amp;from=rss)
* [2025-04-21, 09:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss) - [Pope Francis Has Died on Easter Monday Aged 88](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss)
* [2025-04-21, 06:53:00](https://soylentnews.org/article.pl?sid=25/04/20/0455204&amp;from=rss) - [Intel Agrees to Sell Controlling Stake in Altera Chip Business](https://soylentnews.org/article.pl?sid=25/04/20/0455204&amp;from=rss)
* [2025-04-21, 02:08:00](https://soylentnews.org/article.pl?sid=25/04/20/0452238&amp;from=rss) - [Google Has Illegal Advertising Monopoly, Judge Rules](https://soylentnews.org/article.pl?sid=25/04/20/0452238&amp;from=rss)
* [2025-04-20, 21:22:00](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss) - [Astronomers Say They’ve Recorded the Strongest Sign Yet of Life Beyond Earth](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss)
* [2025-04-20, 16:39:00](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss) - [Some Tropical Trees Act as Lightning Rods to Fend Off Rivals](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss)
* [2025-04-20, 11:55:00](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss) - [Spyware Maker NSO Group is Paving a Path Back Into Trump’s America](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss)
* [2025-04-20, 07:13:00](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss) - [Here&apos;s How a Satellite Ended Up as a Ghostly Apparition on Google Earth](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss)
* [2025-04-20, 02:28:00](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss) - [Everyone in AI is Talking About Manus. We Put It to the Test.](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss)
