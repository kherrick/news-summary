# [News Summary](https://kherrick.github.io/news-summary/)

## Astronomy and Space Exploration

* [EHT Astronomers Will Film Swirling of a Supermassive Black Hole for the First Time](https://science.slashdot.org/story/26/01/19/031222/eht-astronomers-will-film-swirling-of-a-supermassive-black-hole-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A groundbreaking project by the Event Horizon Telescope (EHT) collaboration to film the dynamic motions of a supermassive black hole.

* [SpaceX Launches New NASA Telescope to Help JWST Study Exoplanets](https://science.slashdot.org/story/26/01/18/2225232/spacex-launches-new-nasa-telescope-to-help-jwst-study-exoplanets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - NASA and SpaceX collaborate to enhance exoplanet research by launching a new space telescope for the James Webb Space Telescope (JWST).

## Automotive and Technology Advancements

* [Porsche Sold More Electrified Cars in Europe Last Year than Pure Gas-Powered Models](https://tech.slashdot.org/story/26/01/19/0057231/porsche-sold-more-electrified-cars-in-europe-last-year-than-pure-gas-powered-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Porsche achieves a milestone by selling more electrified than gas-powered cars in Europe, indicating a shift towards green transportation.

* [China Builds 'Hypergravity' Machine 2,000X Stronger Than Earth](https://science.slashdot.org/story/26/01/17/214244/china-builds-hypergravity-machine-2000x-stronger-than-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Scientists in China unveil an experimental machine capable of creating forces 2,000 times stronger than Earth's gravity.

## Gaming and Virtual Reality

* [CD Projekt issue DMCA takedown notice against popular Cyberpunk VR mod](https://www.patreon.com/posts/another-one-dust-148437771) - A DMCA takedown issued against a popular Cyberpunk VR modification opens discussion on modding rights.

* [CROW: CROBOTS robotic combat for training World Model AIs](https://github.com/dcgrigsby/crow) - A project exploring robotic combat simulators for advancing AI training in predictive modeling.

## Technology and Developer Insights

* [On the Coming Industrialisation of Exploit Generation with LLMs](https://sean.heelan.io/2026/01/18/on-the-coming-industrialisation-of-exploit-generation-with-llms/) - Exploring how Large Language Models (LLMs) can contribute to generating and industrializing software exploits.

* [Daniel's first 20,000 curl commits](https://daniel.haxx.se/blog/2026/01/17/my-first-20000-curl-commits/) - A personal reflection marking 20,000 contributions to the widely-used command-line tool, cURL.

## Innovations and Future Trends

* ['Society Cannot Function If No One is Accountable for AI' — Jaron Lanier](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss) - Jaron Lanier discusses ethical implications and accountability in the rapid rise of artificial intelligence.

* [2026's Breakthrough Technologies? MIT Technology Review Chooses Sodium-ion Batteries, Commercial Space Stations](https://science.slashdot.org/story/26/01/17/2317222/2026s-breakthrough-technologies-mit-technology-review-chooses-sodium-ion-batteries-commercial-space-stations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - MIT outlines promising advancements including sodium-ion batteries and progress in commercial space stations.

## Human Behavior and Society

* [People cannot "just pay attention" to (boring, routine) things](https://utcc.utoronto.ca/~cks/space/blog/tech/PeopleCannotPayAttention) - A deep dive into why humans struggle to focus on monotonous tasks.

* [How Screwed is Generation Alpha, and the Generations Which Will Depend on Them?](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss) - A thought-provoking piece on the challenges future generations may face in light of societal and environmental shifts.

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

* [2026-01-19, 03:05:00](https://science.slashdot.org/story/26/01/19/031222/eht-astronomers-will-film-swirling-of-a-supermassive-black-hole-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EHT Astronomers Will Film Swirling of a Supermassive Black Hole for the First Time](https://science.slashdot.org/story/26/01/19/031222/eht-astronomers-will-film-swirling-of-a-supermassive-black-hole-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 02:42:08](https://news.ycombinator.com/item?id=46674505) - [CD Projekt issue DMCA takedown notice against popular Cyberpunk VR mod](https://www.patreon.com/posts/another-one-dust-148437771)
* [2026-01-19, 02:28:21](https://news.ycombinator.com/item?id=46674424) - [All your OpenCodes belong to us](https://johncodes.com/archive/2026/01-18-all-your-opencodes/)
* [2026-01-19, 02:27:07](https://news.ycombinator.com/item?id=46674416) - [The Code-Only Agent](https://rijnard.com/blog/the-code-only-agent)
* [2026-01-19, 02:25:35](https://lobste.rs/s/docfzx/people_cannot_just_pay_attention_boring) - [People cannot \&quot;just pay attention\&quot; to (boring, routine) things](https://utcc.utoronto.ca/~cks/space/blog/tech/PeopleCannotPayAttention)
* [2026-01-19, 01:04:00](https://tech.slashdot.org/story/26/01/19/0057231/porsche-sold-more-electrified-cars-in-europe-last-year-than-pure-gas-powered-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Porsche Sold More Electrified Cars in Europe Last Year than Pure Gas-Powered Models](https://tech.slashdot.org/story/26/01/19/0057231/porsche-sold-more-electrified-cars-in-europe-last-year-than-pure-gas-powered-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 00:22:00](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss) - [Are You Dead?](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss)
* [2026-01-19, 00:04:00](https://it.slashdot.org/story/26/01/19/002212/young-us-college-graduates-suddenly-arent-finding-jobs-faster-than-non-college-graduates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Young US College Graduates Suddenly Aren&apos;t Finding Jobs Faster Than Non-College Graduates](https://it.slashdot.org/story/26/01/19/002212/young-us-college-graduates-suddenly-arent-finding-jobs-faster-than-non-college-graduates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 23:54:43](https://news.ycombinator.com/item?id=46673453) - [At least 21 killed in Spain after crash involving high-speed trains](https://www.bbc.com/news/articles/cedw6ylpynyo)
* [2026-01-18, 23:24:55](https://news.ycombinator.com/item?id=46673264) - [Prediction: Microsoft will eventually ship a Windows-themed Linux distro](https://gamesbymason.com/blog/2026/microsoft/)
* [2026-01-18, 23:23:56](https://lobste.rs/s/p21oso/river_classic_river_0_3_x_forever) - [river-classic: river 0.3.x forever](https://codeberg.org/river/river-classic)
* [2026-01-18, 22:34:20](https://lobste.rs/s/2nwmxo/everything_wrong_with_material_3) - [Everything Wrong with Material 3 Expressive](https://xylight.dev/posts/everything-wrong-with-m3e)
* [2026-01-18, 22:29:00](https://science.slashdot.org/story/26/01/18/2225232/spacex-launches-new-nasa-telescope-to-help-jwst-study-exoplanets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Launches New NASA Telescope to Help JWST Study Exoplanets](https://science.slashdot.org/story/26/01/18/2225232/spacex-launches-new-nasa-telescope-to-help-jwst-study-exoplanets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 22:18:31](https://lobste.rs/s/56ynjc/on_coming_industrialisation_exploit) - [On the Coming Industrialisation of Exploit Generation with LLMs](https://sean.heelan.io/2026/01/18/on-the-coming-industrialisation-of-exploit-generation-with-llms/)
* [2026-01-18, 21:10:08](https://news.ycombinator.com/item?id=46672181) - [Show HN: Beats, a web-based drum machine](https://beats.lasagna.pizza)
* [2026-01-18, 21:05:14](https://news.ycombinator.com/item?id=46672150) - [Police Invested Millions in Shadowy Phone-Tracking Software Won&apos;t Say How Used](https://www.texasobserver.org/texas-police-invest-tangles-sheriff-surveillance/)
* [2026-01-18, 20:57:00](https://news.slashdot.org/story/26/01/18/2054259/hundreds-answer-europes-public-call-for-evidence-on-an-open-digital-ecosystem-strategy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hundreds Answer Europe&apos;s &apos;Public Call for Evidence&apos; on an Open Digital Ecosystem Strategy](https://news.slashdot.org/story/26/01/18/2054259/hundreds-answer-europes-public-call-for-evidence-on-an-open-digital-ecosystem-strategy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 20:45:54](https://news.ycombinator.com/item?id=46671982) - [Stirling Cycle Machine Analysis](https://ohioopen.library.ohio.edu/opentextbooks/9/)
* [2026-01-18, 20:42:49](https://news.ycombinator.com/item?id=46671952) - [Show HN: Dock – Slack minus the bloat, tax, and 90-day memory loss](https://getdock.io/)
* [2026-01-18, 20:19:07](https://news.ycombinator.com/item?id=46671731) - [Dead Internet Theory](https://kudmitry.com/articles/dead-internet-theory/)
* [2026-01-18, 20:17:20](https://lobste.rs/s/fxcspf/writing_first_tooling_second) - [Writing First, Tooling Second](https://susam.net/writing-first-tooling-second.html)
* [2026-01-18, 20:01:33](https://lobste.rs/s/y5llsg/time_c_creating_your_own_clocks_with) - [Time in C++: Creating Your Own Clocks with &lt;chrono&gt;](https://www.sandordargo.com/blog/2026/01/14/clocks-part-7-custom-clocks)
* [2026-01-18, 19:34:00](https://tech.slashdot.org/story/26/01/18/1932246/microsoft-forced-to-issue-emergency-out-of-band-windows-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Forced to Issue Emergency Out-of-Band Windows Update](https://tech.slashdot.org/story/26/01/18/1932246/microsoft-forced-to-issue-emergency-out-of-band-windows-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss) - [How Screwed is Generation Alpha, and the Generations Which Will Depend on Them?](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss)
* [2026-01-18, 19:17:55](https://lobste.rs/s/yc77zp/crow_crobots_robotic_combat_for_training) - [CROW: CROBOTS robotic combat for training World Model AIs](https://github.com/dcgrigsby/crow)
* [2026-01-18, 18:01:58](https://news.ycombinator.com/item?id=46670279) - [Flux 2 Klein pure C inference](https://github.com/antirez/flux2.c)
* [2026-01-18, 17:53:21](https://news.ycombinator.com/item?id=46670181) - [Show HN: Lume 0.2 – Build and Run macOS VMs with unattended setup](https://cua.ai/docs/lume/guide/getting-started/introduction)
* [2026-01-18, 17:40:55](https://news.ycombinator.com/item?id=46670024) - [Gaussian Splatting – A$AP Rocky \&quot;Helicopter\&quot; music video](https://radiancefields.com/a-ap-rocky-releases-helicopter-music-video-featuring-gaussian-splatting)
* [2026-01-18, 17:34:00](https://science.slashdot.org/story/26/01/17/0525200/astronomers-finally-explain-how-molecules-from-earths-atmosphere-keep-winding-up-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Finally Explain How Molecules From Earth&apos;s Atmosphere Keep Winding Up On the Moon](https://science.slashdot.org/story/26/01/17/0525200/astronomers-finally-explain-how-molecules-from-earths-atmosphere-keep-winding-up-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 17:17:04](https://lobste.rs/s/ngwloq/how_lobsters_front_page_works) - [How the Lobsters front page works](https://atharvaraykar.com/lobsters/)
* [2026-01-18, 17:08:58](https://news.ycombinator.com/item?id=46669663) - [Sins of the Children](https://asteriskmag.com/issues/07/sins-of-the-children)
* [2026-01-18, 16:34:00](https://yro.slashdot.org/story/26/01/18/006222/acer-sues-verizon-att-and-t-mobile-alleging-infringment-on-acers-cellular-networking-patents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Acer Sues Verizon, AT&amp;amp;T, and T-Mobile, Alleging Infringment on Acer&apos;s Cellular Networking Patents](https://yro.slashdot.org/story/26/01/18/006222/acer-sues-verizon-att-and-t-mobile-alleging-infringment-on-acers-cellular-networking-patents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 16:12:35](https://lobste.rs/s/fttvmi/removal_gtk2_from_forky_debian_14) - [Removal of GTK2 from forky (Debian 14)](https://lists.debian.org/debian-devel/2026/01/msg00090.html)
* [2026-01-18, 16:11:31](https://lobste.rs/s/iz3wsu/installing_android_on_nintendo_switch) - [Installing Android on the Nintendo Switch](https://blog.omgmog.net/post/android-on-the-nintendo-switch/)
* [2026-01-18, 15:49:59](https://lobste.rs/s/b6veve/some_c_habits_i_employ_for_modern_day) - [some C habits I employ for the modern day](https://www.unix.dog/~yosh/blog/c-habits-for-me.html)
* [2026-01-18, 15:34:00](https://science.slashdot.org/story/26/01/17/214244/china-builds-hypergravity-machine-2000x-stronger-than-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Builds &apos;Hypergravity&apos; Machine 2,000X Stronger Than Earth](https://science.slashdot.org/story/26/01/17/214244/china-builds-hypergravity-machine-2000x-stronger-than-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 14:50:00](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss) - [Hobby FPV Drone Developer Breaks 400mph Limit With New World Record](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss)
* [2026-01-18, 14:25:49](https://news.ycombinator.com/item?id=46668021) - [Predicting OpenAI&apos;s ad strategy](https://ossa-ma.github.io/blog/openads)
* [2026-01-18, 12:34:00](https://science.slashdot.org/story/26/01/18/0035242/could-we-provide-better-cellphone-service-with-fewer-bigger-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could We Provide Better Cellphone Service With Fewer, Bigger Satellites?](https://science.slashdot.org/story/26/01/18/0035242/could-we-provide-better-cellphone-service-with-fewer-bigger-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 11:02:03](https://lobste.rs/s/0pxvyd/agent_psychosis_are_we_going_insane) - [Agent Psychosis: Are We Going Insane?](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/)
* [2026-01-18, 10:03:00](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss) - [Sorry, Eh](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss)
* [2026-01-18, 09:36:25](https://news.ycombinator.com/item?id=46666288) - [A free and open-source rootkit for Linux](https://lwn.net/SubscriberLink/1053099/19c2e8180aeb0438/)
* [2026-01-18, 09:35:02](https://lobste.rs/s/m5u098/clan_2025_wrap_up_from_infrastructure_new) - [Clan 2025 Wrap-Up: From Infrastructure to a New Computing Paradigm](https://clan.lol/blog/2025-wrap-up/)
* [2026-01-18, 09:26:39](https://lobste.rs/s/x6nwl5/daniel_s_first_20_000_curl_commits) - [Daniel&apos;s first 20,000 curl commits](https://daniel.haxx.se/blog/2026/01/17/my-first-20000-curl-commits/)
* [2026-01-18, 09:08:12](https://lobste.rs/s/aegd9e/gnome_village) - [The Gnome Village](https://happihacking.com/blog/posts/2025/the-gnome-village/)
* [2026-01-18, 08:58:40](https://news.ycombinator.com/item?id=46666085) - [Command-line Tools can be 235x Faster than your Hadoop Cluster (2014)](https://adamdrake.com/command-line-tools-can-be-235x-faster-than-your-hadoop-cluster.html)
* [2026-01-18, 08:54:00](https://slashdot.org/story/26/01/18/0631239/retailers-rush-to-implement-ai-assisted-shopping-and-orders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Retailers Rush to Implement AI-Assisted Shopping and Orders](https://slashdot.org/story/26/01/18/0631239/retailers-rush-to-implement-ai-assisted-shopping-and-orders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 08:18:36](https://news.ycombinator.com/item?id=46665839) - [A Social Filesystem](https://overreacted.io/a-social-filesystem/)
* [2026-01-18, 08:18:08](https://lobste.rs/s/4wr7ye/social_filesystem) - [A Social Filesystem](https://overreacted.io/a-social-filesystem/)
* [2026-01-18, 07:14:10](https://lobste.rs/s/cuvmci/air_traffic_control_ibm_9020) - [air traffic control: the IBM 9020](https://computer.rip/2026-01-17-air-traffic-control-9020.html)
* [2026-01-18, 05:59:00](https://news.slashdot.org/story/26/01/18/0556221/53-of-crypto-tokens-launched-since-2021-have-failed-most-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [53% of Crypto Tokens Launched Since 2021 Have Failed, Most in 2025](https://news.slashdot.org/story/26/01/18/0556221/53-of-crypto-tokens-launched-since-2021-have-failed-most-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 05:13:00](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss) - [Linux Kernel Bugs Hide for 2+ Years on Average](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss)
* [2026-01-18, 04:24:48](https://lobste.rs/s/vokwbo/jquery_4_0_0_released) - [jQuery 4.0.0 Released](https://blog.jquery.com/2026/01/17/jquery-4-0-0/)
* [2026-01-18, 02:34:00](https://slashdot.org/story/26/01/17/2350259/how-much-do-ai-models-resemble-a-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Much Do AI Models Resemble a Brain?](https://slashdot.org/story/26/01/17/2350259/how-much-do-ai-models-resemble-a-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 00:29:00](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss) - [Wormholes May Not Exist—We&apos;ve Found They Reveal Something Deeper About Time and the Universe](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss)
* [2026-01-18, 00:07:19](https://lobste.rs/s/evuzid/more_http_3_focus_one_backend_less) - [More HTTP/3 focus, one backend less](https://daniel.haxx.se/blog/2026/01/17/more-http-3-focus-one-backend-less/)
* [2026-01-17, 23:41:00](https://science.slashdot.org/story/26/01/17/2317222/2026s-breakthrough-technologies-mit-technology-review-chooses-sodium-ion-batteries-commercial-space-stations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2026&apos;s Breakthrough Technologies? MIT Technology Review Chooses Sodium-ion Batteries,  Commercial Space Stations](https://science.slashdot.org/story/26/01/17/2317222/2026s-breakthrough-technologies-mit-technology-review-chooses-sodium-ion-batteries-commercial-space-stations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 22:41:00](https://it.slashdot.org/story/26/01/17/2150219/predator-spyware-turns-failed-attacks-into-intelligence-for-future-exploits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Predator Spyware Turns Failed Attacks Into Intelligence For Future Exploits](https://it.slashdot.org/story/26/01/17/2150219/predator-spyware-turns-failed-attacks-into-intelligence-for-future-exploits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 22:39:28](https://lobste.rs/s/dtir1a/why_we_ve_tried_replace_developers_every) - [Why We&apos;ve Tried to Replace Developers Every Decade Since 1969](https://www.caimito.net/en/blog/2025/12/07/the-recurring-dream-of-replacing-developers.html)
* [2026-01-17, 21:07:03](https://lobste.rs/s/31iwyd/malware_peddlers_are_now_hijacking_snap) - [Malware Peddlers Are Now Hijacking Snap Publisher Domains](https://blog.popey.com/2026/01/malware-purveyors-taking-over-published-snap-email-domains/)
* [2026-01-17, 20:26:23](https://lobste.rs/s/xkgzk4/how_many_pixels_do_you_really_need) - [How Many Pixels Do You Really Need?](https://rldane.space/how-many-pixels-do-you-really-need.html)
* [2026-01-17, 19:43:00](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss) - [&apos;Society Cannot Function If No One is Accountable for AI&apos; — Jaron Lanier](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss)
* [2026-01-17, 18:54:14](https://lobste.rs/s/60yo7s/rust_s_culture_semantic_precision) - [Rust&apos;s Culture of Semantic Precision](https://www.alilleybrinker.com/mini/rusts-culture-of-semantic-precision/)
* [2026-01-17, 15:00:00](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss) - [Why Flies Matter, Their Vital Role in Ecosystems, and Surprising Diversity](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss)
* [2026-01-17, 14:34:17](https://lobste.rs/s/vp39cr/ascii_characters_are_not_pixels_deep_dive) - [ASCII characters are not pixels: a deep dive into ASCII rendering](https://alexharri.com/blog/ascii-rendering)
* [2026-01-17, 12:48:13](https://lobste.rs/s/kbkcbe/website_end_all_websites) - [A Website To End All Websites](https://henry.codes/writing/a-website-to-destroy-all-websites/)
* [2026-01-17, 11:15:26](https://news.ycombinator.com/item?id=46657122) - [ASCII characters are not pixels: a deep dive into ASCII rendering](https://alexharri.com/blog/ascii-rendering)
* [2026-01-17, 10:26:18](https://news.ycombinator.com/item?id=46656897) - [Don&apos;t waste your back pressure](https://banay.me/dont-waste-your-backpressure/)
* [2026-01-17, 10:18:00](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss) - [Researchers Expose WHILL Wheelchair Safety Risks Via Remote Hacking](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss)
* [2026-01-17, 05:30:00](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss) - [Signal Creator Moxie Marlinspike Wants to Do for AI What He Did for Messaging](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss)
* [2026-01-17, 00:42:00](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss) - [X Didn&apos;t Fix Grok&apos;s ‘Undressing’ Problem. It Just Makes People Pay for It](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss)
* [2026-01-16, 20:00:00](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss) - [Meta to Cut More than 1,000 Jobs as its Shifts Focus to AI Wearables](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss)
* [2026-01-16, 15:23:00](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss) - [You Need A Kitchen Slide Rule](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss)
* [2026-01-16, 13:19:03](https://news.ycombinator.com/item?id=46646080) - [Fil-Qt: A Qt Base build with Fil-C experience](https://git.qt.io/cradam/fil-qt)
* [2026-01-16, 10:30:00](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss) - [Over Half a Million Windows Users are Switching to Linux](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss)
* [2026-01-16, 05:47:00](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss) - [BreachForum Breach](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss)
* [2026-01-16, 01:06:00](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss) - [Survey: Even Meta And Microsoft Engineers Ditch Company AI For Claude](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss)
* [2026-01-15, 21:55:36](https://news.ycombinator.com/item?id=46639897) - [The Space and Motion of Communicating Agents (2008) [pdf]](https://www.cl.cam.ac.uk/archive/rm135/Bigraphs-draft.pdf)
* [2026-01-15, 20:17:00](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss) - [GNOME Dev Gives Fans of Linux&apos;s Middle-Click Paste the Middle Finger](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss)
* [2026-01-15, 19:33:32](https://news.ycombinator.com/item?id=46637937) - [Astrophotography visibility plotting and planning tool](https://airmass.org/)
* [2026-01-15, 15:31:00](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss) - [Cray Customer Service – Memories (1979 to 2014) by Charles Clark](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss)
* [2026-01-15, 12:01:18](https://news.ycombinator.com/item?id=46631281) - [Cardputer uLisp Machine (2024)](http://www.ulisp.com/show?52G4)
* [2026-01-15, 10:50:00](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss) - [A Fix for Frost: Engineers Use Electricity to Zap Ice Without Heat or Chemicals](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss)
* [2026-01-15, 06:12:00](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss) - [Resuscitating a 1934 Briggs &amp; Stratton Washing Machine Engine](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss)
* [2026-01-15, 02:48:00](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss) - [RIP - &apos;Dilbert&apos; Creator Scott Adams Dies at 68 After Prostate Cancer Battle](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss)
* [2026-01-15, 01:25:00](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss) - [The AIdigest.org&apos;s AI Village](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss)
