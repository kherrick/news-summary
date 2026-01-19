# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Computing

* [Follow-Up: New Sponsors Strengthen Alpine Linux’s Infrastructure and CI Ecosystem | Alpine Linux](https://alpinelinux.org/posts/2026-01-18-new-sponsors-strenghten-infrastructure.html) - New sponsorship boosts Alpine Linux's infrastructure and continuous integration ecosystem.

* [RISC-V is coming along quite speedily: Milk-V Titan Mini-ITX 8-core board](https://www.tomshardware.com/pc-components/cpus/milk-v-titan-mini-ix-board-with-ur-dp1000-processor-shows-risc-v-ecosystem-taking-shape-m-2-ddr4-and-pcie-card-support-form-a-kit-that-you-can-use-out-of-the-box) - RISC-V ecosystem sees advancements with new Milk-V Titan Mini-ITX board.

* [Wikipedia: WikiProject AI Cleanup](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_AI_Cleanup) - Efforts to enhance AI-related content on Wikipedia.

* [TPM on Embedded Systems: Pitfalls and Caveats](https://sigma-star.at/blog/2026/01/tpm-on-embedded-systems-pitfalls-and-caveats/) - Analysis of Trusted Platform Modules on embedded systems highlights challenges.

* [Simulating the Ladybug Clock Puzzle](https://austinhenley.com/blog/ladybugclock.html) - Exploring a computational simulation of a clock-inspired puzzle.

* [Balanced allocation: considerations from large scale service environments](https://arxiv.org/pdf/2601.10874) - Insights into allocation strategies for large-scale services.

* [Cardputer uLisp Machine](http://www.ulisp.com/show?52G4) - Introducing the compact and novel uLisp Cardputer device.

* [AVX-512: First impressions on performance and programmability](https://shihab-shahriar.github.io//blog/2026/AVX-512-First-Impressions-on-Performance-and-Programmability/) - Evaluating the capabilities and developer experience of AVX-512.

* [Removal of GTK2 from forky (Debian 14)](https://lists.debian.org/debian-devel/2026/01/msg00090.html) - Plans to phase out GTK2 in an upcoming Debian release.

## Artificial Intelligence

* [The Code-Only Agent](https://rijnard.com/blog/the-code-only-agent) - Discussion on the minimalistic approach to AI agents.

* [AI and the Corporate Capture of Knowledge](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss) - Analyzing AI's impact on knowledge accessibility and control.

* [Is the Possibility of Conscious AI a Dangerous Myth?](https://slashdot.org/story/26/01/19/0539218/is-the-possibility-of-conscious-ai-a-dangerous-myth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Exploring the concept and implications of AI consciousness.

* [On the Coming Industrialisation of Exploit Generation with LLMs](https://sean.heelan.io/2026/01/18/on-the-coming-industrialisation-of-exploit-generation-with-llms/) - Examining security challenges posed by large language models.

* [Show HN: I quit coding years ago. AI brought me back](https://calquio.com/finance/compound-interest) - A personal story about re-entering tech due to AI-driven innovations.

## Environmental and Energy Developments

* [Greenpeace pilot brings heat pumps and solar to Ukrainian community](https://www.pveurope.eu/power2heat/greenpeace-pilot-brings-heat-pumps-and-solar-ukrainian-community) - Renewable energy pilot project aids Ukraine.

* [China Consumed 10.4 Trillion Kilowatt-Hours of Electricity In 2025 - Double the US](https://hardware.slashdot.org/story/26/01/19/063227/china-consumed-104-trillion-kilowatt-hours-of-electricity-in-2025---double-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - China's electricity consumption surges in 2025.

* [More US States are Putting Bitcoin on Public Balance Sheets](https://yro.slashdot.org/story/26/01/19/076259/more-us-states-are-putting-bitcoin-on-public-balance-sheets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Bitcoin adoption extends into state financial systems.

* [Porsche Sold More Electrified Cars in Europe Last Year than Pure Gas-Powered Models](https://tech.slashdot.org/story/26/01/19/0057231/porsche-sold-more-electrified-cars-in-europe-last-year-than-pure-gas-powered-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Porsche electric vehicle sales edge out traditional models in Europe.

## Space and Astronomical Achievements

* [SpaceX Launches New NASA Telescope to Help JWST Study Exoplanets](https://science.slashdot.org/story/26/01/18/2225232/spacex-launches-new-nasa-telescope-to-help-jwst-study-exoplanets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - SpaceX launches a NASA telescope for advanced exoplanet study.

* [EHT Astronomers Will Film Swirling of a Supermassive Black Hole for the First Time](https://science.slashdot.org/story/26/01/19/031222/eht-astronomers-will-film-swirling-of-a-supermassive-black-hole-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Groundbreaking mission to capture black hole activity on film.

## Security and Privacy Concerns

* [AWS Flips Switch on Euro Cloud as Customers Fret About Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss) - Addressing concerns about data sovereignty in Europe.

* [Malware Peddlers Are Now Hijacking Snap Publisher Domains](https://blog.popey.com/2026/01/malware-purveyors-taking-over-published-snap-email-domains/) - New malware schemes target snap domains.

* [Agent Psychosis: Are We Going Insane?](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/) - A critical look into the psychological impacts of digital agents.

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

* [2026-01-19, 13:16:39](https://lobste.rs/s/zagyj5/follow_up_new_sponsors_strengthen_alpine) - [Follow-Up: New Sponsors Strengthen Alpine Linux’s Infrastructure and CI Ecosystem | Alpine Linux](https://alpinelinux.org/posts/2026-01-18-new-sponsors-strenghten-infrastructure.html)
* [2026-01-19, 13:12:42](https://news.ycombinator.com/item?id=46678612) - [Fire Shuts GTA 6 Developer Rockstar North, Following Report of Explosion](https://www.ign.com/articles/fire-shuts-gta-6-developer-rockstar-north-following-report-of-explosion)
* [2026-01-19, 13:05:42](https://news.ycombinator.com/item?id=46678550) - [Ask HN: COBOL devs, how are AI coding affecting your work?](https://news.ycombinator.com/item?id=46678550)
* [2026-01-19, 12:53:28](https://news.ycombinator.com/item?id=46678430) - [Article by article, how Big Tech shaped the EU&apos;s roll-back of digital rights](https://corporateeurope.org/en/2026/01/article-article-how-big-tech-shaped-eus-roll-back-digital-rights)
* [2026-01-19, 12:34:00](https://hardware.slashdot.org/story/26/01/19/063227/china-consumed-104-trillion-kilowatt-hours-of-electricity-in-2025---double-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Consumed 10.4 Trillion Kilowatt-Hours of Electricity In 2025 - Double the US](https://hardware.slashdot.org/story/26/01/19/063227/china-consumed-104-trillion-kilowatt-hours-of-electricity-in-2025---double-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 12:24:14](https://news.ycombinator.com/item?id=46678205) - [Amazon is ending all inventory commingling as of March 31, 2026](https://twitter.com/ghhughes/status/2012824754319753456)
* [2026-01-19, 11:21:45](https://lobste.rs/s/8nv2w5/tale_udp_tracking_hytale_server_auto_stop) - [A Tale of UDP tracking: Hytale server auto stop and start with systemd](https://nwildner.com/posts/2026-01-19-hytale/)
* [2026-01-19, 11:11:58](https://lobste.rs/s/mesp1d/2025_medley_interlisp_annual_report) - [2025 Medley Interlisp Annual Report](https://interlisp.org/project/status/2025medleyannualreport/)
* [2026-01-19, 10:46:54](https://news.ycombinator.com/item?id=46677436) - [Nuclear elements detected in West Philippine Sea](https://www.philstar.com/headlines/2026/01/18/2501750/nuclear-elements-detected-west-philippine-sea)
* [2026-01-19, 10:23:15](https://lobste.rs/s/oek5so/balanced_allocation_considerations) - [Balanced allocation: considerations from large scale service environments](https://arxiv.org/pdf/2601.10874)
* [2026-01-19, 10:20:39](https://news.ycombinator.com/item?id=46677212) - [RISC-V is coming along quite speedily: Milk-V Titan Mini-ITX 8-core board](https://www.tomshardware.com/pc-components/cpus/milk-v-titan-mini-ix-board-with-ur-dp1000-processor-shows-risc-v-ecosystem-taking-shape-m-2-ddr4-and-pcie-card-support-form-a-kit-that-you-can-use-out-of-the-box)
* [2026-01-19, 10:09:38](https://news.ycombinator.com/item?id=46677106) - [Wikipedia: WikiProject AI Cleanup](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_AI_Cleanup)
* [2026-01-19, 10:01:03](https://lobste.rs/s/cqp4m6/avx_512_first_impressions_on_performance) - [AVX-512: First impressions on performance and programmability](https://shihab-shahriar.github.io//blog/2026/AVX-512-First-Impressions-on-Performance-and-Programmability/)
* [2026-01-19, 09:45:00](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss) - [AI and the Corporate Capture of Knowledge](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss)
* [2026-01-19, 09:40:21](https://lobste.rs/s/2j0llr/tpm_on_embedded_systems_pitfalls_caveats) - [TPM on Embedded Systems: Pitfalls and Caveats](https://sigma-star.at/blog/2026/01/tpm-on-embedded-systems-pitfalls-and-caveats/)
* [2026-01-19, 09:33:50](https://news.ycombinator.com/item?id=46676824) - [Greenpeace pilot brings heat pumps and solar to Ukrainian community](https://www.pveurope.eu/power2heat/greenpeace-pilot-brings-heat-pumps-and-solar-ukrainian-community)
* [2026-01-19, 09:02:00](https://yro.slashdot.org/story/26/01/19/076259/more-us-states-are-putting-bitcoin-on-public-balance-sheets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More US States are Putting Bitcoin on Public Balance Sheets](https://yro.slashdot.org/story/26/01/19/076259/more-us-states-are-putting-bitcoin-on-public-balance-sheets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 08:23:04](https://news.ycombinator.com/item?id=46676276) - [Radboud University selects Fairphone as standard smartphone for employees](https://www.ru.nl/en/staff/news/radboud-university-selects-fairphone-as-standard-smartphone-for-employees)
* [2026-01-19, 07:14:19](https://news.ycombinator.com/item?id=46675853) - [A decentralized peer-to-peer messaging application that operates over Bluetooth](https://bitchat.free/)
* [2026-01-19, 06:28:55](https://lobste.rs/s/f6zsyd/are_arrays_functions) - [Are arrays functions?](https://futhark-lang.org/blog/2026-01-16-are-arrays-functions.html)
* [2026-01-19, 05:45:00](https://slashdot.org/story/26/01/19/0539218/is-the-possibility-of-conscious-ai-a-dangerous-myth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the Possibility of Conscious AI a Dangerous Myth?](https://slashdot.org/story/26/01/19/0539218/is-the-possibility-of-conscious-ai-a-dangerous-myth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 05:35:58](https://lobste.rs/s/25bxlc/simulating_ladybug_clock_puzzle) - [Simulating the ladybug clock puzzle](https://austinhenley.com/blog/ladybugclock.html)
* [2026-01-19, 05:20:42](https://lobste.rs/s/nssu3g/cardputer_ulisp_machine) - [Cardputer uLisp Machine](http://www.ulisp.com/show?52G4)
* [2026-01-19, 05:03:00](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss) - [AWS Flips Switch on Euro Cloud as Customers Fret About Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss)
* [2026-01-19, 04:08:49](https://lobste.rs/s/txknsm/my_thoughts_on_gas_town_after_10_000_hours) - [My thoughts on Gas Town after 10,000 hours of Claude Code](https://simonhartcher.com/posts/2026-01-19-my-thoughts-on-gas-town-after-10000-hours-of-claude-code)
* [2026-01-19, 03:05:00](https://science.slashdot.org/story/26/01/19/031222/eht-astronomers-will-film-swirling-of-a-supermassive-black-hole-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EHT Astronomers Will Film Swirling of a Supermassive Black Hole for the First Time](https://science.slashdot.org/story/26/01/19/031222/eht-astronomers-will-film-swirling-of-a-supermassive-black-hole-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 02:27:07](https://news.ycombinator.com/item?id=46674416) - [The Code-Only Agent](https://rijnard.com/blog/the-code-only-agent)
* [2026-01-19, 02:25:35](https://lobste.rs/s/docfzx/people_cannot_just_pay_attention_boring) - [People cannot \&quot;just pay attention\&quot; to (boring, routine) things](https://utcc.utoronto.ca/~cks/space/blog/tech/PeopleCannotPayAttention)
* [2026-01-19, 01:04:00](https://tech.slashdot.org/story/26/01/19/0057231/porsche-sold-more-electrified-cars-in-europe-last-year-than-pure-gas-powered-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Porsche Sold More Electrified Cars in Europe Last Year than Pure Gas-Powered Models](https://tech.slashdot.org/story/26/01/19/0057231/porsche-sold-more-electrified-cars-in-europe-last-year-than-pure-gas-powered-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-19, 00:50:20](https://news.ycombinator.com/item?id=46673809) - [Show HN: I quit coding years ago. AI brought me back](https://calquio.com/finance/compound-interest)
* [2026-01-19, 00:22:00](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss) - [Are You Dead?](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss)
* [2026-01-19, 00:04:00](https://it.slashdot.org/story/26/01/19/002212/young-us-college-graduates-suddenly-arent-finding-jobs-faster-than-non-college-graduates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Young US College Graduates Suddenly Aren&apos;t Finding Jobs Faster Than Non-College Graduates](https://it.slashdot.org/story/26/01/19/002212/young-us-college-graduates-suddenly-arent-finding-jobs-faster-than-non-college-graduates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 23:54:43](https://news.ycombinator.com/item?id=46673453) - [High-speed train collision in Spain kills at least 39](https://www.bbc.com/news/articles/cedw6ylpynyo)
* [2026-01-18, 23:23:56](https://lobste.rs/s/p21oso/river_classic_river_0_3_x_forever) - [river-classic: river 0.3.x forever](https://codeberg.org/river/river-classic)
* [2026-01-18, 22:34:20](https://lobste.rs/s/2nwmxo/everything_wrong_with_material_3) - [Everything Wrong with Material 3 Expressive](https://xylight.dev/posts/everything-wrong-with-m3e)
* [2026-01-18, 22:29:00](https://science.slashdot.org/story/26/01/18/2225232/spacex-launches-new-nasa-telescope-to-help-jwst-study-exoplanets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Launches New NASA Telescope to Help JWST Study Exoplanets](https://science.slashdot.org/story/26/01/18/2225232/spacex-launches-new-nasa-telescope-to-help-jwst-study-exoplanets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 22:18:31](https://lobste.rs/s/56ynjc/on_coming_industrialisation_exploit) - [On the Coming Industrialisation of Exploit Generation with LLMs](https://sean.heelan.io/2026/01/18/on-the-coming-industrialisation-of-exploit-generation-with-llms/)
* [2026-01-18, 20:57:00](https://news.slashdot.org/story/26/01/18/2054259/hundreds-answer-europes-public-call-for-evidence-on-an-open-digital-ecosystem-strategy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hundreds Answer Europe&apos;s &apos;Public Call for Evidence&apos; on an Open Digital Ecosystem Strategy](https://news.slashdot.org/story/26/01/18/2054259/hundreds-answer-europes-public-call-for-evidence-on-an-open-digital-ecosystem-strategy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 20:19:07](https://news.ycombinator.com/item?id=46671731) - [Dead Internet Theory](https://kudmitry.com/articles/dead-internet-theory/)
* [2026-01-18, 20:17:20](https://lobste.rs/s/fxcspf/writing_first_tooling_second) - [Writing First, Tooling Second](https://susam.net/writing-first-tooling-second.html)
* [2026-01-18, 19:34:00](https://tech.slashdot.org/story/26/01/18/1932246/microsoft-forced-to-issue-emergency-out-of-band-windows-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Forced to Issue Emergency Out-of-Band Windows Update](https://tech.slashdot.org/story/26/01/18/1932246/microsoft-forced-to-issue-emergency-out-of-band-windows-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss) - [How Screwed is Generation Alpha, and the Generations Which Will Depend on Them?](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss)
* [2026-01-18, 19:17:55](https://lobste.rs/s/yc77zp/crow_crobots_robotic_combat_for_training) - [CROW: CROBOTS robotic combat for training World Model AIs](https://github.com/dcgrigsby/crow)
* [2026-01-18, 18:01:58](https://news.ycombinator.com/item?id=46670279) - [Flux 2 Klein pure C inference](https://github.com/antirez/flux2.c)
* [2026-01-18, 17:40:55](https://news.ycombinator.com/item?id=46670024) - [Gaussian Splatting – A$AP Rocky \&quot;Helicopter\&quot; music video](https://radiancefields.com/a-ap-rocky-releases-helicopter-music-video-featuring-gaussian-splatting)
* [2026-01-18, 17:34:00](https://science.slashdot.org/story/26/01/17/0525200/astronomers-finally-explain-how-molecules-from-earths-atmosphere-keep-winding-up-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Finally Explain How Molecules From Earth&apos;s Atmosphere Keep Winding Up On the Moon](https://science.slashdot.org/story/26/01/17/0525200/astronomers-finally-explain-how-molecules-from-earths-atmosphere-keep-winding-up-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 17:17:04](https://lobste.rs/s/ngwloq/how_lobsters_front_page_works) - [How the Lobsters front page works](https://atharvaraykar.com/lobsters/)
* [2026-01-18, 16:34:00](https://yro.slashdot.org/story/26/01/18/006222/acer-sues-verizon-att-and-t-mobile-alleging-infringment-on-acers-cellular-networking-patents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Acer Sues Verizon, AT&amp;amp;T, and T-Mobile, Alleging Infringment on Acer&apos;s Cellular Networking Patents](https://yro.slashdot.org/story/26/01/18/006222/acer-sues-verizon-att-and-t-mobile-alleging-infringment-on-acers-cellular-networking-patents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 16:12:35](https://lobste.rs/s/fttvmi/removal_gtk2_from_forky_debian_14) - [Removal of GTK2 from forky (Debian 14)](https://lists.debian.org/debian-devel/2026/01/msg00090.html)
* [2026-01-18, 15:49:59](https://lobste.rs/s/b6veve/some_c_habits_i_employ_for_modern_day) - [some C habits I employ for the modern day](https://www.unix.dog/~yosh/blog/c-habits-for-me.html)
* [2026-01-18, 15:34:00](https://science.slashdot.org/story/26/01/17/214244/china-builds-hypergravity-machine-2000x-stronger-than-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Builds &apos;Hypergravity&apos; Machine 2,000X Stronger Than Earth](https://science.slashdot.org/story/26/01/17/214244/china-builds-hypergravity-machine-2000x-stronger-than-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 14:50:00](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss) - [Hobby FPV Drone Developer Breaks 400mph Limit With New World Record](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss)
* [2026-01-18, 12:34:00](https://science.slashdot.org/story/26/01/18/0035242/could-we-provide-better-cellphone-service-with-fewer-bigger-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could We Provide Better Cellphone Service With Fewer, Bigger Satellites?](https://science.slashdot.org/story/26/01/18/0035242/could-we-provide-better-cellphone-service-with-fewer-bigger-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 11:02:03](https://lobste.rs/s/0pxvyd/agent_psychosis_are_we_going_insane) - [Agent Psychosis: Are We Going Insane?](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/)
* [2026-01-18, 10:03:00](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss) - [Sorry, Eh](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss)
* [2026-01-18, 09:08:12](https://lobste.rs/s/aegd9e/gnome_village) - [The Gnome Village](https://happihacking.com/blog/posts/2025/the-gnome-village/)
* [2026-01-18, 08:54:00](https://slashdot.org/story/26/01/18/0631239/retailers-rush-to-implement-ai-assisted-shopping-and-orders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Retailers Rush to Implement AI-Assisted Shopping and Orders](https://slashdot.org/story/26/01/18/0631239/retailers-rush-to-implement-ai-assisted-shopping-and-orders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 08:18:36](https://news.ycombinator.com/item?id=46665839) - [A Social Filesystem](https://overreacted.io/a-social-filesystem/)
* [2026-01-18, 08:18:08](https://lobste.rs/s/4wr7ye/social_filesystem) - [A Social Filesystem](https://overreacted.io/a-social-filesystem/)
* [2026-01-18, 05:59:00](https://news.slashdot.org/story/26/01/18/0556221/53-of-crypto-tokens-launched-since-2021-have-failed-most-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [53% of Crypto Tokens Launched Since 2021 Have Failed, Most in 2025](https://news.slashdot.org/story/26/01/18/0556221/53-of-crypto-tokens-launched-since-2021-have-failed-most-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-18, 05:13:00](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss) - [Linux Kernel Bugs Hide for 2+ Years on Average](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss)
* [2026-01-18, 04:24:48](https://lobste.rs/s/vokwbo/jquery_4_0_0_released) - [jQuery 4.0.0 Released](https://blog.jquery.com/2026/01/17/jquery-4-0-0/)
* [2026-01-18, 00:29:00](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss) - [Wormholes May Not Exist—We&apos;ve Found They Reveal Something Deeper About Time and the Universe](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss)
* [2026-01-17, 21:07:03](https://lobste.rs/s/31iwyd/malware_peddlers_are_now_hijacking_snap) - [Malware Peddlers Are Now Hijacking Snap Publisher Domains](https://blog.popey.com/2026/01/malware-purveyors-taking-over-published-snap-email-domains/)
* [2026-01-17, 20:19:46](https://news.ycombinator.com/item?id=46661644) - [Simulating the Ladybug Clock Puzzle](https://austinhenley.com/blog/ladybugclock.html)
* [2026-01-17, 19:43:00](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss) - [&apos;Society Cannot Function If No One is Accountable for AI&apos; — Jaron Lanier](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss)
* [2026-01-17, 18:54:14](https://lobste.rs/s/60yo7s/rust_s_culture_semantic_precision) - [Rust&apos;s Culture of Semantic Precision](https://www.alilleybrinker.com/mini/rusts-culture-of-semantic-precision/)
* [2026-01-17, 15:00:00](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss) - [Why Flies Matter, Their Vital Role in Ecosystems, and Surprising Diversity](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss)
* [2026-01-17, 10:26:18](https://news.ycombinator.com/item?id=46656897) - [Provide agents with automated feedback](https://banay.me/dont-waste-your-backpressure/)
* [2026-01-17, 10:18:00](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss) - [Researchers Expose WHILL Wheelchair Safety Risks Via Remote Hacking](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss)
* [2026-01-17, 05:30:00](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss) - [Signal Creator Moxie Marlinspike Wants to Do for AI What He Did for Messaging](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss)
* [2026-01-17, 00:42:00](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss) - [X Didn&apos;t Fix Grok&apos;s ‘Undressing’ Problem. It Just Makes People Pay for It](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss)
* [2026-01-16, 20:21:50](https://news.ycombinator.com/item?id=46651691) - [Gladys West&apos;s vital contributions to GPS technology](https://en.wikipedia.org/wiki/Gladys_West)
* [2026-01-16, 20:00:00](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss) - [Meta to Cut More than 1,000 Jobs as its Shifts Focus to AI Wearables](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss)
* [2026-01-16, 15:23:00](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss) - [You Need A Kitchen Slide Rule](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss)
* [2026-01-16, 13:19:03](https://news.ycombinator.com/item?id=46646080) - [Fil-Qt: A Qt Base build with Fil-C experience](https://git.qt.io/cradam/fil-qt)
* [2026-01-16, 10:30:00](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss) - [Over Half a Million Windows Users are Switching to Linux](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss)
* [2026-01-16, 05:47:00](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss) - [BreachForum Breach](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss)
* [2026-01-16, 01:06:00](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss) - [Survey: Even Meta And Microsoft Engineers Ditch Company AI For Claude](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss)
* [2026-01-15, 20:17:00](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss) - [GNOME Dev Gives Fans of Linux&apos;s Middle-Click Paste the Middle Finger](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss)
* [2026-01-15, 19:33:32](https://news.ycombinator.com/item?id=46637937) - [Astrophotography visibility plotting and planning tool](https://airmass.org/)
* [2026-01-15, 15:31:00](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss) - [Cray Customer Service – Memories (1979 to 2014) by Charles Clark](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss)
* [2026-01-15, 14:31:04](https://news.ycombinator.com/item?id=46633025) - [Self Sanitizing Door Handle](https://www.jamesdysonaward.org/en-US/2019/project/self-sanitizing-door-handle/)
* [2026-01-15, 10:50:00](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss) - [A Fix for Frost: Engineers Use Electricity to Zap Ice Without Heat or Chemicals](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss)
* [2026-01-15, 06:12:00](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss) - [Resuscitating a 1934 Briggs &amp; Stratton Washing Machine Engine](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss)
* [2026-01-15, 02:48:00](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss) - [RIP - &apos;Dilbert&apos; Creator Scott Adams Dies at 68 After Prostate Cancer Battle](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss)
* [2026-01-15, 02:47:16](https://news.ycombinator.com/item?id=46627410) - [Nepal&apos;s Mountainside Teahouses Elevate the Experience for Trekkers](https://www.smithsonianmag.com/travel/nepal-mountainside-teahouses-elevate-experience-trekkers-heading-to-top-world-180987844/)
* [2026-01-15, 01:25:00](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss) - [The AIdigest.org&apos;s AI Village](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss)
* [2026-01-15, 00:57:18](https://news.ycombinator.com/item?id=46626441) - [Vm0](https://github.com/vm0-ai/vm0)
