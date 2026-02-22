# [News Summary](https://kherrick.github.io/news-summary/)

## Law, Technology, and Criminal Investigations

* [DNA Technology Convicts a 64-Year-Old for Murdering a Teenager in 1982](https://yro.slashdot.org/story/26/02/22/004205/dna-technology-convicts-a-64-year-old-for-murdering-a-teenager-in-1982?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Artificial Intelligence Developments

* [How and Why Local LLMs Perform On Framework 13 AMD Strix Point](https://msf.github.io/blogpost/local-llm-performance-framework13.html)

* [Hit Piece-Writing AI Deleted. But Is This a Warning About AI-Generated Harassment?](https://developers.slashdot.org/story/26/02/21/2220205/hit-piece-writing-ai-deleted-but-is-this-a-warning-about-ai-generated-harassment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [America's Peace Corps Announces 'Tech Corps' Volunteers to Help Bring AI to Foreign Countries](https://yro.slashdot.org/story/26/02/21/2140216/americas-peace-corps-announces-tech-corps-volunteers-to-help-bring-ai-to-foreign-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Science and Health Insights

* [Researchers Discover Ancient Bacteria Strain That Resists 10 Modern Antibiotics](https://science.slashdot.org/story/26/02/21/0614256/researchers-discover-ancient-bacteria-strain-that-resists-10-modern-antibiotics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Did We Just See a Black Hole Explode?](https://soylentnews.org/article.pl?sid=26/02/21/137227&amp;from=rss)

## Gaming Trends and Developments

* [Pro-Gamer Consumer Movement 'Stop Killing Games' Will Launch NGOs in America and the EU](https://yro.slashdot.org/story/26/02/21/2316255/pro-gamer-consumer-movement-stop-killing-games-will-launch-ngos-in-america-and-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Inputlag.science – Repository of knowledge about input lag in gaming](https://inputlag.science)

## Programming and Software Innovation

* [Parse, Don't Validate and Type-Driven Design in Rust](https://www.harudagondi.space/blog/parse-dont-validate-and-type-driven-design-in-rust/)

* [DUMPLING: Fine-grained Differential JavaScript Engine Fuzzing](https://www.ndss-symposium.org/ndss-paper/dumpling-fine-grained-differential-javascript-engine-fuzzing/)

## Engineering, Technology, and Tools

* [ThunderKittens 2.0: Even Faster Kernels for Your GPUs](https://hazyresearch.stanford.edu/blog/2026-02-19-tk-2)

* [MeshTNC is a tool for turning consumer grade LoRa radios into KISS TNC compatible packet radio modems](https://github.com/datapartyjs/MeshTNC)

## Environmental and Energy Innovations

* [US Particle Accelerators Turn Nuclear Waste Into Electricity, Cut Radioactive Life By 99.7%](https://hardware.slashdot.org/story/26/02/21/0043212/us-particle-accelerators-turn-nuclear-waste-into-electricity-cut-radioactive-life-by-997?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cultural and Societal Dynamics

* [The Salvation Army Opens a Digital Thrift Store On Roblox](https://games.slashdot.org/story/26/02/21/0632214/the-salvation-army-opens-a-digital-thrift-store-on-roblox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Fury Over Discord's Age Checks Explodes After Shady Persona Test In UK](https://tech.slashdot.org/story/26/02/20/232201/fury-over-discords-age-checks-explodes-after-shady-persona-test-in-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2026-02-22, 02:34:00](https://yro.slashdot.org/story/26/02/22/004205/dna-technology-convicts-a-64-year-old-for-murdering-a-teenager-in-1982?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DNA Technology Convicts a 64-Year-Old for Murdering a Teenager in 1982](https://yro.slashdot.org/story/26/02/22/004205/dna-technology-convicts-a-64-year-old-for-murdering-a-teenager-in-1982?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 00:37:47](https://lobste.rs/s/awr4cx/how_why_local_llms_perform_on_framework_13) - [How and Why Local LLMs Perform On Framework 13 AMD Strix Point](https://msf.github.io/blogpost/local-llm-performance-framework13.html)
* [2026-02-22, 00:37:36](https://lobste.rs/s/5ax0gx/future_math_research_age_ai) - [The Future of Math Research in the Age of AI](https://siliconreckoner.substack.com/p/the-future-of-math-research-in-the)
* [2026-02-22, 00:29:05](https://news.ycombinator.com/item?id=47106686) - [How I use Claude Code: Separation of planning and execution](https://boristane.com/blog/how-i-use-claude-code/)
* [2026-02-22, 00:21:05](https://news.ycombinator.com/item?id=47106626) - [Are compilers deterministic?](https://blog.onepatchdown.net/2026/02/22/are-compilers-deterministic-nerd-version/)
* [2026-02-21, 23:43:00](https://yro.slashdot.org/story/26/02/21/2316255/pro-gamer-consumer-movement-stop-killing-games-will-launch-ngos-in-america-and-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pro-Gamer Consumer Movement &apos;Stop Killing Games&apos; Will Launch NGOs in America and the EU](https://yro.slashdot.org/story/26/02/21/2316255/pro-gamer-consumer-movement-stop-killing-games-will-launch-ngos-in-america-and-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 22:43:00](https://developers.slashdot.org/story/26/02/21/2220205/hit-piece-writing-ai-deleted-but-is-this-a-warning-about-ai-generated-harassment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hit Piece-Writing AI Deleted. But Is This a Warning About AI-Generated Harassment?](https://developers.slashdot.org/story/26/02/21/2220205/hit-piece-writing-ai-deleted-but-is-this-a-warning-about-ai-generated-harassment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 22:39:33](https://lobste.rs/s/uwdci4/hemmi_post_1460_versalog_sliderule) - [Hemmi/Post 1460 Versalog (Sliderule emulator)](https://thingsabove.github.io/Sliderule-Simulator-with-Solver/react/hemmi_versalog.html)
* [2026-02-21, 22:32:00](https://soylentnews.org/article.pl?sid=26/02/21/137227&amp;from=rss) - [Did We Just See a Black Hole Explode?](https://soylentnews.org/article.pl?sid=26/02/21/137227&amp;from=rss)
* [2026-02-21, 22:00:24](https://lobste.rs/s/0blzao/loon_lisp_flies) - [Loon — A LISP that flies](https://loonlang.com)
* [2026-02-21, 21:53:26](https://lobste.rs/s/i3sveh/thunderkittens_2_0_even_faster_kernels) - [ThunderKittens 2.0: Even Faster Kernels for Your GPUs](https://hazyresearch.stanford.edu/blog/2026-02-19-tk-2)
* [2026-02-21, 21:51:58](https://news.ycombinator.com/item?id=47105198) - [Evidence of the bouba-kiki effect in naïve baby chicks](https://www.science.org/doi/10.1126/science.adq7188)
* [2026-02-21, 21:43:06](https://lobste.rs/s/9jpa8d/dumpling_fine_grained_differential) - [DUMPLING: Fine-grained Differential JavaScript Engine Fuzzing](https://www.ndss-symposium.org/ndss-paper/dumpling-fine-grained-differential-javascript-engine-fuzzing/)
* [2026-02-21, 21:43:00](https://yro.slashdot.org/story/26/02/21/2140216/americas-peace-corps-announces-tech-corps-volunteers-to-help-bring-ai-to-foreign-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Peace Corps Announces &apos;Tech Corps&apos; Volunteers to Help Bring AI to Foreign Countries](https://yro.slashdot.org/story/26/02/21/2140216/americas-peace-corps-announces-tech-corps-volunteers-to-help-bring-ai-to-foreign-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 21:30:11](https://lobste.rs/s/oz7ebk/lobste_rs_migrates_from_mariadb_sqlite) - [lobste.rs migrates from MariaDB to SQLite](https://lobste.rs/s/oz7ebk/lobste_rs_migrates_from_mariadb_sqlite)
* [2026-02-21, 21:28:13](https://news.ycombinator.com/item?id=47104973) - [Why is Claude an Electron app?](https://www.dbreunig.com/2026/02/21/why-is-claude-an-electron-app.html)
* [2026-02-21, 21:03:28](https://lobste.rs/s/xgd19m/prefer_if_statements_polymorphism) - [Prefer If Statements To Polymorphism](https://htmx.org/essays/prefer-if-statements/)
* [2026-02-21, 20:57:30](https://news.ycombinator.com/item?id=47104667) - [Show HN: Llama 3.1 70B on a single RTX 3090 via NVMe-to-GPU bypassing the CPU](https://github.com/xaskasdf/ntransformer)
* [2026-02-21, 20:50:46](https://news.ycombinator.com/item?id=47104613) - [Online Pebble Development](https://cloudpebble.repebble.com/)
* [2026-02-21, 20:35:00](https://news.slashdot.org/story/26/02/21/1932253/codeorg-president-steps-down-citing-upending-of-cs-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Code.org President Steps Down Citing &apos;Upending&apos; of CS By AI](https://news.slashdot.org/story/26/02/21/1932253/codeorg-president-steps-down-citing-upending-of-cs-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 20:14:00](https://news.ycombinator.com/item?id=47104223) - [MeshTNC is a tool for turning consumer grade LoRa radios into KISS TNC compatib](https://github.com/datapartyjs/MeshTNC)
* [2026-02-21, 20:12:54](https://lobste.rs/s/o1i3rf/meshtnc_is_tool_for_turning_consumer) - [MeshTNC is a tool for turning consumer grade LoRa radios into KISS TNC compatible packet radio modems](https://github.com/datapartyjs/MeshTNC)
* [2026-02-21, 20:10:13](https://news.ycombinator.com/item?id=47104185) - [EDuke32 – Duke Nukem 3D (Open-Source)](https://www.eduke32.com/)
* [2026-02-21, 19:41:52](https://news.ycombinator.com/item?id=47103945) - [Inputlag.science – Repository of knowledge about input lag in gaming](https://inputlag.science)
* [2026-02-21, 19:40:06](https://news.ycombinator.com/item?id=47103931) - [Parse, Don&apos;t Validate and Type-Driven Design in Rust](https://www.harudagondi.space/blog/parse-dont-validate-and-type-driven-design-in-rust/)
* [2026-02-21, 19:37:47](https://lobste.rs/s/ssfatg/parse_don_t_validate_type_driven_design) - [Parse, don&apos;t Validate and Type-Driven Design in Rust](https://www.harudagondi.space/blog/parse-dont-validate-and-type-driven-design-in-rust/)
* [2026-02-21, 19:35:00](https://linux.slashdot.org/story/26/02/21/0752214/t2-linux-restores-xaa-in-xorg-making-2d-graphics-fast-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [T2 Linux Restores XAA In Xorg, Making 2D Graphics Fast Again](https://linux.slashdot.org/story/26/02/21/0752214/t2-linux-restores-xaa-in-xorg-making-2d-graphics-fast-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 19:05:31](https://news.ycombinator.com/item?id=47103649) - [Cloudflare outage on February 20, 2026](https://blog.cloudflare.com/cloudflare-outage-february-20-2026/)
* [2026-02-21, 18:50:19](https://news.ycombinator.com/item?id=47103506) - [Canvas_ity: A tiny, single-header &lt;canvas&gt;-like 2D rasterizer for C++](https://github.com/a-e-k/canvas_ity)
* [2026-02-21, 18:34:00](https://games.slashdot.org/story/26/02/21/0632214/the-salvation-army-opens-a-digital-thrift-store-on-roblox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Salvation Army Opens a Digital Thrift Store On Roblox](https://games.slashdot.org/story/26/02/21/0632214/the-salvation-army-opens-a-digital-thrift-store-on-roblox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 18:09:24](https://news.ycombinator.com/item?id=47103136) - [Toyota Mirai hydrogen car depreciation: 65% value loss in a year](https://carbuzz.com/toyota-mirai-massive-depreciation-one-year/)
* [2026-02-21, 17:49:02](https://news.ycombinator.com/item?id=47102975) - [Personal Statement of a CIA Analyst](https://antipolygraph.org/statements/statement-038.shtml)
* [2026-02-21, 17:49:00](https://soylentnews.org/article.pl?sid=26/02/21/0130244&amp;from=rss) - [AIRD -  a New Term for Workers Freaking Out Over Being Replaced by AI](https://soylentnews.org/article.pl?sid=26/02/21/0130244&amp;from=rss)
* [2026-02-21, 17:34:00](https://science.slashdot.org/story/26/02/21/0614256/researchers-discover-ancient-bacteria-strain-that-resists-10-modern-antibiotics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Discover Ancient Bacteria Strain That Resists 10 Modern Antibiotics](https://science.slashdot.org/story/26/02/21/0614256/researchers-discover-ancient-bacteria-strain-that-resists-10-modern-antibiotics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 17:08:12](https://news.ycombinator.com/item?id=47102576) - [What not to write on your security clearance form (1988)](https://milk.com/wall-o-shame/security_clearance.html)
* [2026-02-21, 16:45:03](https://lobste.rs/s/reslsr/ipv6_address_assignment) - [IPv6 address assignment](https://lpar.ATH0.com/posts/2026/02/ipv6-address-assignment/)
* [2026-02-21, 16:34:00](https://tech.slashdot.org/story/26/02/21/0530202/is-brain-rot-real-how-too-much-time-online-can-affect-your-mind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is &apos;Brain Rot&apos; Real? How Too Much Time Online Can Affect Your Mind.](https://tech.slashdot.org/story/26/02/21/0530202/is-brain-rot-real-how-too-much-time-online-can-affect-your-mind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 15:52:20](https://news.ycombinator.com/item?id=47101890) - [Show HN: Iron-Wolf – Wolfenstein 3D source port in Rust](https://github.com/Ragnaroek/iron-wolf)
* [2026-02-21, 15:34:00](https://developers.slashdot.org/story/26/02/21/064205/how-pythons-security-response-team-keeps-python-users-safe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Python&apos;s Security Response Team Keeps Python Users Safe](https://developers.slashdot.org/story/26/02/21/064205/how-pythons-security-response-team-keeps-python-users-safe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 15:07:03](https://lobste.rs/s/wplgka/whale_fall) - [Whale Fall](https://nesbitt.io/2026/02/21/whale-fall.html)
* [2026-02-21, 14:32:16](https://news.ycombinator.com/item?id=47101171) - [CXMT has been offering DDR4 chips at about half the prevailing market rate](https://www.koreaherald.com/article/10679206)
* [2026-02-21, 13:00:00](https://science.slashdot.org/story/26/02/21/0056213/hazardous-substances-found-in-all-headphones-tested-by-toxfree-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hazardous Substances Found In All Headphones Tested By ToxFREE Project](https://science.slashdot.org/story/26/02/21/0056213/hazardous-substances-found-in-all-headphones-tested-by-toxfree-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 12:55:54](https://lobste.rs/s/l0gv3h/fastest_way_board_airplane) - [The Fastest Way to Board an Airplane](https://navendu.me/posts/airlines-hate-this-trick/)
* [2026-02-21, 12:55:00](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss) - [Hackers Expose Age-Verification Software Powering Surveillance Web](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss)
* [2026-02-21, 12:37:52](https://news.ycombinator.com/item?id=47100232) - [zclaw: personal AI assistant in under 888 KB, running on an ESP32](https://github.com/tnm/zclaw)
* [2026-02-21, 11:18:57](https://lobste.rs/s/haqwn0/wikipedia_blacklists_archive_today) - [Wikipedia blacklists Archive.today, starts removing 695,000 archive links](https://arstechnica.com/tech-policy/2026/02/wikipedia-bans-archive-today-after-site-executed-ddos-and-altered-web-captures/)
* [2026-02-21, 10:00:00](https://hardware.slashdot.org/story/26/02/21/0049226/openais-first-chatgpt-gadget-could-be-a-smart-speaker-with-a-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s First ChatGPT Gadget Could Be a Smart Speaker With a Camera](https://hardware.slashdot.org/story/26/02/21/0049226/openais-first-chatgpt-gadget-could-be-a-smart-speaker-with-a-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 08:12:00](https://soylentnews.org/article.pl?sid=26/02/21/0123209&amp;from=rss) - [Visualizing the Internet in 2026](https://soylentnews.org/article.pl?sid=26/02/21/0123209&amp;from=rss)
* [2026-02-21, 07:13:38](https://news.ycombinator.com/item?id=47098296) - [Acme Weather](https://acmeweather.com/blog/introducing-acme-weather)
* [2026-02-21, 07:06:18](https://news.ycombinator.com/item?id=47098245) - [I verified my LinkedIn identity. Here&apos;s what I handed over](https://thelocalstack.eu/posts/linkedin-identity-verification-privacy/)
* [2026-02-21, 07:00:00](https://hardware.slashdot.org/story/26/02/21/0043212/us-particle-accelerators-turn-nuclear-waste-into-electricity-cut-radioactive-life-by-997?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Particle Accelerators Turn Nuclear Waste Into Electricity, Cut Radioactive Life By 99.7%](https://hardware.slashdot.org/story/26/02/21/0043212/us-particle-accelerators-turn-nuclear-waste-into-electricity-cut-radioactive-life-by-997?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 06:26:12](https://lobste.rs/s/rcewff/ajail_basic_jail_for_programs_you_don_t) - [ajail: a basic jail for programs you don&apos;t completely trust](https://github.com/jtolio/ajail)
* [2026-02-21, 03:30:00](https://science.slashdot.org/story/26/02/20/238201/nasa-eyes-march-6-to-launch-4-astronauts-to-the-moon-on-artemis-ii-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Eyes March 6 To Launch 4 Astronauts To the Moon On Artemis II Mission](https://science.slashdot.org/story/26/02/20/238201/nasa-eyes-march-6-to-launch-4-astronauts-to-the-moon-on-artemis-ii-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 03:20:00](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss) - [Palo Alto CEO Says AI Isn&apos;t Great for Business, Yet](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss)
* [2026-02-21, 02:02:00](https://tech.slashdot.org/story/26/02/20/232201/fury-over-discords-age-checks-explodes-after-shady-persona-test-in-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fury Over Discord&apos;s Age Checks Explodes After Shady Persona Test In UK](https://tech.slashdot.org/story/26/02/20/232201/fury-over-discords-age-checks-explodes-after-shady-persona-test-in-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 00:56:29](https://news.ycombinator.com/item?id=47096253) - [Claws are now a new layer on top of LLM agents](https://twitter.com/karpathy/status/2024987174077432126)
* [2026-02-21, 00:35:31](https://lobste.rs/s/slfm4t/joinirc_at_link_your_irc_server_on_any) - [joinirc.at: Link to your IRC server on any client to onboard new users](https://joinirc.at)
* [2026-02-20, 23:35:33](https://news.ycombinator.com/item?id=47095597) - [Be wary of Bluesky](https://kevinak.se/blog/be-wary-of-bluesky)
* [2026-02-20, 22:47:58](https://news.ycombinator.com/item?id=47095105) - [A16Z partner says that the theory that we&apos;ll vibe code everything is &apos; wrong&apos;](https://www.aol.com/articles/a16z-partner-says-theory-well-050150534.html)
* [2026-02-20, 22:40:00](https://soylentnews.org/article.pl?sid=26/02/19/1712216&amp;from=rss) - [Bacteria Frozen Inside 5,000-Year-Old Ice Cave is Crazy Resistant to Antibiotics ](https://soylentnews.org/article.pl?sid=26/02/19/1712216&amp;from=rss)
* [2026-02-20, 20:40:14](https://lobste.rs/s/vpxzhe/i_found_vulnerability_they_found_lawyer) - [I found a Vulnerability. They found a Lawyer](https://dixken.de/blog/i-found-a-vulnerability-they-found-a-lawyer)
* [2026-02-20, 20:31:39](https://lobste.rs/s/gscaw3/turn_dependabot_off) - [Turn Dependabot Off](https://words.filippo.io/dependabot/)
* [2026-02-20, 19:44:29](https://lobste.rs/s/t760l8/beginner_s_guide_split_keyboards) - [A Beginner’s Guide to Split Keyboards](https://justinmklam.com/posts/2026/02/beginners-guide-split-keyboards/)
* [2026-02-20, 19:18:35](https://lobste.rs/s/w1bsle/lobsters_interview_with_steveklabnik) - [Lobsters Interview with steveklabnik](https://alexalejandre.com/programming/steve-klabnik-interview/)
* [2026-02-20, 18:11:02](https://news.ycombinator.com/item?id=47091557) - [Uncovering insiders and alpha on Polymarket with AI](https://twitter.com/peterjliu/status/2024901585806225723)
* [2026-02-20, 17:58:51](https://news.ycombinator.com/item?id=47091419) - [Keep Android Open](https://f-droid.org/2026/02/20/twif.html)
* [2026-02-20, 17:56:00](https://soylentnews.org/article.pl?sid=26/02/19/178226&amp;from=rss) - [OpenClaw Security Fears Lead Meta, Other AI Firms to Restrict its Use](https://soylentnews.org/article.pl?sid=26/02/19/178226&amp;from=rss)
* [2026-02-20, 16:58:16](https://lobste.rs/s/bi9wsi/death_scroll_fade) - [Death to Scroll Fade](https://dbushell.com/2026/01/09/death-to-scroll-fade/)
* [2026-02-20, 16:57:52](https://lobste.rs/s/wul2hi/brat_parallel_tap_testing_harness_for) - [Brat, a parallel TAP testing harness for the POSIX shell](https://codeberg.org/sstephenson/brat)
* [2026-02-20, 15:52:15](https://lobste.rs/s/rxsphs/ipv6_adoption_2026) - [IPv6 Adoption in 2026](https://www.netmeister.org/blog/ipv6-adoption.html)
* [2026-02-20, 14:03:18](https://lobste.rs/s/6yjefp/ebpf_on_hard_mode) - [eBPF on Hard Mode](https://feyor.sh/blog/ebpf-on-hard-mode/)
* [2026-02-20, 14:01:24](https://lobste.rs/s/5iucri/made_eu_it_was_harder_than_i_thought) - [\&quot;Made in EU\&quot; - it was harder than I thought](https://www.coinerella.com/made-in-eu-it-was-harder-than-i-thought/)
* [2026-02-20, 13:13:00](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss) - [Texas Sues Wi-Fi Router Maker Over Alleged China Links](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss)
* [2026-02-20, 08:25:00](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss) - [Data Centres Consider Backing Uranium Projects, NexGen CEO Says](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss)
* [2026-02-20, 03:49:00](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss) - [Password Managers Less Secure Than Promised](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss)
* [2026-02-19, 22:56:00](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss) - [Streaming Service Crunchyroll Raises Prices Weeks After Killing its Free Tier](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss)
* [2026-02-19, 18:10:00](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss) - [Ring Cancels Flock Deal After Dystopian Super Bowl Ad Prompts Mass Outrage](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss)
* [2026-02-19, 13:24:00](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss) - [What in the World Is Going on in Our Public Schools?](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss)
* [2026-02-19, 08:32:00](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss) - [Western Digital Has No More HDD Capacity Left, as CEO Reveals Massive AI Deals](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss)
* [2026-02-19, 03:55:00](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss) - [Incredible Chinese Humanoid Robot Show on CCTV Chinese New Year TV Gala this Week](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss)
* [2026-02-18, 23:08:00](https://soylentnews.org/article.pl?sid=26/02/17/1849228&amp;from=rss) - [How to Incentivize Problem Solving in Groups](https://soylentnews.org/article.pl?sid=26/02/17/1849228&amp;from=rss)
* [2026-02-18, 18:21:00](https://soylentnews.org/article.pl?sid=26/02/17/1842234&amp;from=rss) - [This Bonobo Just Did Something Scientists Thought Only Humans Could Do](https://soylentnews.org/article.pl?sid=26/02/17/1842234&amp;from=rss)
* [2026-02-18, 14:56:58](https://news.ycombinator.com/item?id=47061614) - [How far back in time can you understand English?](https://www.deadlanguagesociety.com/p/how-far-back-in-time-understand-english)
* [2026-02-18, 13:39:00](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss) - [A Fluid Can Store Solar Energy and Then Release It as Heat Months Later](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss)
* [2026-02-18, 09:42:40](https://news.ycombinator.com/item?id=47059147) - [I Don&apos;t Like Magic](https://adactio.com/journal/22399)
* [2026-02-18, 08:57:00](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss) - [New ClickFix Attack Abuses Nslookup to Retrieve PowerShell Payload Via DNS](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss)
* [2026-02-18, 04:09:00](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss) - [Instruction Decoding in the Intel 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss)
