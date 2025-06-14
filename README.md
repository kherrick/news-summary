# [News Summary](https://kherrick.github.io/news-summary/)

## Space and Scientific Exploration

* [Inside the Apollo "8-Ball" FDAI (Flight Director / Attitude Indicator)](https://www.righto.com/2025/06/inside-apollo-fdai.html) - An in-depth exploration of the Apollo spacecraft's innovative flight instrument for indicating attitude.

* [Strange Radio Pulses Detected Coming From Ice In Antarctica](https://tech.slashdot.org/story/25/06/13/2115249/strange-radio-pulses-detected-coming-from-ice-in-antarctica?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Unusual radio pulses observed emanating from Antarctic ice, raising intriguing scientific questions.

* [Solar Orbiter gets world-first views of the Sun's poles](https://www.esa.int/Science_Exploration/Space_Science/Solar_Orbiter/Solar_Orbiter_gets_world-first_views_of_the_Sun_s_poles) - Historic new imaging offers unprecedented perspectives of the solar poles.

* [1.5Tb of James Webb Space Telescope Data Dumped On The Internet - New Searchable Database](https://soylentnews.org/article.pl?sid=25/06/12/159242&from=rss) - Unlocked vast datasets from the James Webb Space Telescope for public use and exploration.

## Technology and Innovation

* [Stolen iPhones from an Apple Store Remotely Disabled, Started Blaring Alarms](https://apple.slashdot.org/story/25/06/14/0549236/stolen-iphones-from-an-apple-store-remotely-disabled-started-blaring-alarms?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Apple demonstrates strong security measures by remotely disabling stolen devices.

* [IBM Says It's Cracked Quantum Error Correction](https://tech.slashdot.org/story/25/06/13/218205/ibm-says-its-cracked-quantum-error-correction?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Major advancement in quantum computing resilience announced by IBM.

* [Hypershell: A Type-Level DSL for Shell-Scripting in Rust powered by Context-Generic Programming](https://contextgeneric.dev/blog/hypershell-release/) - An innovative shell-scripting approach leveraging Rust's powerful features.

* [Chinese AI Companies Dodge US Chip Curbs Flying Suitcases of Hard Drives Abroad](https://hardware.slashdot.org/story/25/06/13/2134246/chinese-ai-companies-dodge-us-chip-curbs-flying-suitcases-of-hard-drives-abroad?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Creative approaches by Chinese AI firms to navigate international chip sanctions.

## Artificial Intelligence and Data Science

* [I have reimplemented Stable Diffusion 3.5 from scratch in pure PyTorch](https://github.com/yousef-rafat/miniDiffusion) - A new implementation of the advanced Stable Diffusion model in PyTorch.

* [Ask HN: How do you teach your kids about AI?](https://news.ycombinator.com/item?id=44276552) - A discussion exploring methods to introduce children to AI concepts.

* [Model Once, Represent Everywhere: UDA (Unified Data Architecture) at Netflix](https://netflixtechblog.com/uda-unified-data-architecture-6a6aee261d8d) - Netflix shares its data modeling strategy enabling unified representations.

* [Self-Adapting Language Models](https://arxiv.org/abs/2506.10943) - Research on language models' adaptability and evolving capabilities.

## Environmental and Climate Issues

* [Climate Change Is Coming For Your Cheese](https://soylentnews.org/article.pl?sid=25/06/13/0159230&from=rss) - Climate disruptions raise alarms for cheese makers due to changing resource availability.

* [Toyota Math: 9 Million EVs Are Just as Polluting as 27 Million Hybrids](https://soylentnews.org/article.pl?sid=25/06/13/1243246&from=rss) - An assessment juxtaposing the environmental impact of electric vehicles vs hybrids.

* [There Aren't Enough Cables To Meet Growing Electricity Demand](https://hardware.slashdot.org/story/25/06/13/207259/there-arent-enough-cables-to-meet-growing-electricity-demand?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Infrastructure challenges due to the increasing global electrical demand.

## Software and Programming

* [A meta-analysis of three different notions of software complexity](https://typesanitizer.com/blog/complexity-definitions.html) - Insights into varied interpretations and measurements of software complexity.

* [filedb: Disk Based Key-Value Store Inspired by Bitcask](https://github.com/rajivharlalka/filedb) - Introduction to a new efficient disk-based storage solution.

* [Last fifty years of integer linear programming: Recent practical advances](https://inria.hal.science/hal-04776866v1) - A retrospective on progress in solving computationally complex programming problems.

* [APL Style: Patterns/Anti-patterns](https://sway.cloud.microsoft/b1pRwmzuGjqB30On) - Exploring the best practices and pitfalls in APL coding style.

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

* [2025-06-14, 15:43:03](https://news.ycombinator.com/item?id=44277051) - [Inside the Apollo \&quot;8-Ball\&quot; FDAI (Flight Director / Attitude Indicator)](https://www.righto.com/2025/06/inside-apollo-fdai.html)
* [2025-06-14, 15:42:00](https://soylentnews.org/article.pl?sid=25/06/13/1243246&amp;from=rss) - [Toyota Math: 9 Million EVs Are Just as Polluting as 27 Million Hybrids](https://soylentnews.org/article.pl?sid=25/06/13/1243246&amp;from=rss)
* [2025-06-14, 15:34:00](https://apple.slashdot.org/story/25/06/14/0549236/stolen-iphones-from-an-apple-store-remotely-disabled-started-blaring-alarms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stolen iPhones from an Apple Store Remotely Disabled, Started Blaring Alarms](https://apple.slashdot.org/story/25/06/14/0549236/stolen-iphones-from-an-apple-store-remotely-disabled-started-blaring-alarms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-14, 14:34:00](https://it.slashdot.org/story/25/06/14/0512258/anthropics-ceo-is-wrong-ai-wont-eliminate-half-of-white-collar-jobs-says-nvidias-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s CEO is Wrong, AI Won&apos;t Eliminate Half of White-Collar Jobs, Says NVIDIA&apos;s CEO](https://it.slashdot.org/story/25/06/14/0512258/anthropics-ceo-is-wrong-ai-wont-eliminate-half-of-white-collar-jobs-says-nvidias-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-14, 14:12:29](https://news.ycombinator.com/item?id=44276552) - [Ask HN: How do you teach your kids about AI?](https://news.ycombinator.com/item?id=44276552)
* [2025-06-14, 13:56:46](https://news.ycombinator.com/item?id=44276476) - [I have reimplemented Stable Diffusion 3.5 from scratch in pure PyTorch](https://github.com/yousef-rafat/miniDiffusion)
* [2025-06-14, 13:05:59](https://lobste.rs/s/riogyw/meta_analysis_three_different_notions) - [A meta-analysis of three different notions of software complexity](https://typesanitizer.com/blog/complexity-definitions.html)
* [2025-06-14, 13:00:00](https://hardware.slashdot.org/story/25/06/13/2134246/chinese-ai-companies-dodge-us-chip-curbs-flying-suitcases-of-hard-drives-abroad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese AI Companies Dodge US Chip Curbs Flying Suitcases of Hard Drives Abroad](https://hardware.slashdot.org/story/25/06/13/2134246/chinese-ai-companies-dodge-us-chip-curbs-flying-suitcases-of-hard-drives-abroad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-14, 12:43:52](https://lobste.rs/s/rrzmo1/exploring_amiga_blog_series_2018) - [\&quot;Exploring the Amiga\&quot; blog series (2018)](https://www.thedigitalcatonline.com/categories/amiga/)
* [2025-06-14, 12:32:20](https://news.ycombinator.com/item?id=44276041) - [Unsupervised Elicitation of Language Models](https://arxiv.org/abs/2506.10139)
* [2025-06-14, 12:21:33](https://lobste.rs/s/az487i/adding_public_transport_data_transitous) - [Adding public transport data to Transitous](https://www.volkerkrause.eu/2025/06/14/transitous-adding-data.html)
* [2025-06-14, 12:00:07](https://news.ycombinator.com/item?id=44275843) - [Solidroad (YC W25) Is Hiring](https://solidroad.com/careers)
* [2025-06-14, 10:57:00](https://soylentnews.org/article.pl?sid=25/06/13/0159230&amp;from=rss) - [Climate Change Is Coming For Your Cheese](https://soylentnews.org/article.pl?sid=25/06/13/0159230&amp;from=rss)
* [2025-06-14, 10:56:52](https://news.ycombinator.com/item?id=44275575) - [Model Once, Represent Everywhere: UDA (Unified Data Architecture) at Netflix](https://netflixtechblog.com/uda-unified-data-architecture-6a6aee261d8d)
* [2025-06-14, 10:54:12](https://lobste.rs/s/lwiqw7/model_once_represent_everywhere_uda) - [Model Once, Represent Everywhere: UDA (Unified Data Architecture) at Netflix](https://netflixtechblog.com/uda-unified-data-architecture-6a6aee261d8d)
* [2025-06-14, 10:53:13](https://news.ycombinator.com/item?id=44275559) - [How to Build Conscious Machines](https://osf.io/preprints/thesiscommons/wehmg_v1)
* [2025-06-14, 10:19:03](https://lobste.rs/s/qz1njr/html_spec_change_escaping_attributes) - [HTML spec change: escaping &lt; and &gt; in attributes](https://developer.chrome.com/blog/escape-attributes)
* [2025-06-14, 10:00:00](https://tech.slashdot.org/story/25/06/13/2115249/strange-radio-pulses-detected-coming-from-ice-in-antarctica?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Strange Radio Pulses Detected Coming From Ice In Antarctica](https://tech.slashdot.org/story/25/06/13/2115249/strange-radio-pulses-detected-coming-from-ice-in-antarctica?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-14, 07:15:44](https://lobste.rs/s/1swikb/hypershell_type_level_dsl_for_shell) - [Hypershell: A Type-Level DSL for Shell-Scripting in Rust powered by Context-Generic Programming](https://contextgeneric.dev/blog/hypershell-release/)
* [2025-06-14, 07:00:00](https://science.slashdot.org/story/25/06/13/2123253/nasa-delays-commercial-crew-launch-to-assess-iss-air-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Delays Commercial Crew Launch To Assess ISS Air Leak](https://science.slashdot.org/story/25/06/13/2123253/nasa-delays-commercial-crew-launch-to-assess-iss-air-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-14, 06:17:48](https://lobste.rs/s/btlkeb/datalog_rust) - [Datalog in Rust](https://github.com/frankmcsherry/blog/blob/master/posts/2025-06-03.md)
* [2025-06-14, 06:15:20](https://lobste.rs/s/4tmzdy/implementing_logic_programming) - [Implementing Logic Programming](https://btmc.substack.com/p/implementing-logic-programming)
* [2025-06-14, 06:15:19](https://lobste.rs/s/ftjjs7/resa_transparent_reasoning_models_via) - [Resa: Transparent Reasoning Models via SAEs](https://arxiv.org/abs/2506.09967)
* [2025-06-14, 06:15:08](https://news.ycombinator.com/item?id=44274567) - [Last fifty years of integer linear programming: Recent practical advances](https://inria.hal.science/hal-04776866v1)
* [2025-06-14, 06:12:00](https://soylentnews.org/article.pl?sid=25/06/13/0152245&amp;from=rss) - [Mistral Releases a Vibe Coding Client, Mistral Code](https://soylentnews.org/article.pl?sid=25/06/13/0152245&amp;from=rss)
* [2025-06-14, 04:57:59](https://lobste.rs/s/knxypp/apl_style_patterns_anti_patterns) - [APL Style: Patterns/Anti-patterns](https://sway.cloud.microsoft/b1pRwmzuGjqB30On)
* [2025-06-14, 03:31:18](https://news.ycombinator.com/item?id=44274001) - [SIMD-friendly algorithms for substring searching (2018)](http://0x80.pl/notesen/2016-11-28-simd-strfind.html)
* [2025-06-14, 03:30:00](https://tech.slashdot.org/story/25/06/13/2050230/smart-tires-will-report-on-the-health-of-roads-in-new-pilot-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Smart Tires Will Report On the Health of Roads In New Pilot Program](https://tech.slashdot.org/story/25/06/13/2050230/smart-tires-will-report-on-the-health-of-roads-in-new-pilot-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-14, 02:45:03](https://news.ycombinator.com/item?id=44273857) - [Filedb: Disk-based key-value store inspired by Bitcask](https://github.com/rajivharlalka/filedb)
* [2025-06-14, 02:42:47](https://lobste.rs/s/bqo4pq/filedb_disk_based_key_value_store) - [filedb: Disk Based Key-Value Store Inspired by Bitcask](https://github.com/rajivharlalka/filedb)
* [2025-06-14, 01:30:00](https://tech.slashdot.org/story/25/06/13/218205/ibm-says-its-cracked-quantum-error-correction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM Says It&apos;s Cracked Quantum Error Correction](https://tech.slashdot.org/story/25/06/13/218205/ibm-says-its-cracked-quantum-error-correction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-14, 01:25:00](https://soylentnews.org/article.pl?sid=25/06/13/0146252&amp;from=rss) - [Vital Chipmaking Software Access Restored to China After High-Level Call Between Trump/Xi Jinping](https://soylentnews.org/article.pl?sid=25/06/13/0146252&amp;from=rss)
* [2025-06-14, 01:18:11](https://lobste.rs/s/wkrxtl/c2y_hitting_ground_running) - [C2y: Hitting the Ground Running](https://thephd.dev/c2y-hitting-the-ground-running)
* [2025-06-14, 00:50:00](https://news.slashdot.org/story/25/06/13/210224/enterprise-ai-adoption-stalls-as-inferencing-costs-confound-cloud-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Enterprise AI Adoption Stalls As Inferencing Costs Confound Cloud Customers](https://news.slashdot.org/story/25/06/13/210224/enterprise-ai-adoption-stalls-as-inferencing-costs-confound-cloud-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-14, 00:10:00](https://hardware.slashdot.org/story/25/06/13/207259/there-arent-enough-cables-to-meet-growing-electricity-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [There Aren&apos;t Enough Cables To Meet Growing Electricity Demand](https://hardware.slashdot.org/story/25/06/13/207259/there-arent-enough-cables-to-meet-growing-electricity-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-13, 23:30:00](https://developers.slashdot.org/story/25/06/13/2034219/uk-universities-sign-133-million-deal-to-avoid-oracle-java-back-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Universities Sign $13.3 Million Deal To Avoid Oracle Java Back Fees](https://developers.slashdot.org/story/25/06/13/2034219/uk-universities-sign-133-million-deal-to-avoid-oracle-java-back-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-13, 22:50:00](https://hardware.slashdot.org/story/25/06/13/2025259/anker-recalls-more-than-11-million-power-banks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anker Recalls More Than 1.1 Million Power Banks](https://hardware.slashdot.org/story/25/06/13/2025259/anker-recalls-more-than-11-million-power-banks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-13, 22:40:22](https://news.ycombinator.com/item?id=44272933) - [Endometriosis is an interesting disease](https://www.owlposting.com/p/endometriosis-is-an-incredibly-interesting)
* [2025-06-13, 22:10:00](https://hardware.slashdot.org/story/25/06/13/2021236/macos-tahoe-brings-a-new-disk-image-format?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [macOS Tahoe Brings a New Disk Image Format](https://hardware.slashdot.org/story/25/06/13/2021236/macos-tahoe-brings-a-new-disk-image-format?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-13, 21:32:21](https://news.ycombinator.com/item?id=44272467) - [Implementing Logic Programming](https://btmc.substack.com/p/implementing-logic-programming)
* [2025-06-13, 21:30:00](https://slashdot.org/story/25/06/13/2015216/ai-therapy-bots-are-conducting-illegal-behavior-digital-rights-organizations-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Therapy Bots Are Conducting &apos;Illegal Behavior&apos;, Digital Rights Organizations Say](https://slashdot.org/story/25/06/13/2015216/ai-therapy-bots-are-conducting-illegal-behavior-digital-rights-organizations-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-13, 20:50:00](https://science.slashdot.org/story/25/06/13/2046239/23andmes-founder-anne-wojcicki-wins-bid-for-dna-testing-firm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [23andMe&apos;s Founder Anne Wojcicki Wins Bid For DNA Testing Firm](https://science.slashdot.org/story/25/06/13/2046239/23andmes-founder-anne-wojcicki-wins-bid-for-dna-testing-firm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-13, 20:41:00](https://soylentnews.org/article.pl?sid=25/06/13/0143245&amp;from=rss) - [The Federal Government in the Age of Artificial Intelligence](https://soylentnews.org/article.pl?sid=25/06/13/0143245&amp;from=rss)
* [2025-06-13, 20:10:00](https://games.slashdot.org/story/25/06/13/1940258/gamestop-ceo-says-the-companys-future-isnt-in-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GameStop CEO Says The Company&apos;s Future Isn&apos;t In Games](https://games.slashdot.org/story/25/06/13/1940258/gamestop-ceo-says-the-companys-future-isnt-in-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-13, 19:03:42](https://news.ycombinator.com/item?id=44271284) - [Self-Adapting Language Models](https://arxiv.org/abs/2506.10943)
* [2025-06-13, 18:33:35](https://lobste.rs/s/lied71/fastest_way_detect_vowel_string) - [The fastest way to detect a vowel in a string](https://austinhenley.com/blog/vowels.html)
* [2025-06-13, 18:23:08](https://lobste.rs/s/c7udeu/strace_tips_for_better_debugging) - [strace tips for better debugging](https://rrampage.github.io/2025/06/13/strace-tips-for-better-debugging/)
* [2025-06-13, 18:03:30](https://news.ycombinator.com/item?id=44270709) - [I convinced HP&apos;s board to buy Palm and watched them kill it](https://philmckinney.substack.com/p/i-convinced-hps-board-to-buy-palm)
* [2025-06-13, 16:10:38](https://news.ycombinator.com/item?id=44269822) - [Peano arithmetic is enough, because Peano arithmetic  encodes computation](https://math.stackexchange.com/a/5075056/6708)
* [2025-06-13, 15:58:00](https://soylentnews.org/article.pl?sid=25/06/13/0135229&amp;from=rss) - [Starlink Shut Down on United Regional Jets - Reports of Radio Interference on Embraer E175](https://soylentnews.org/article.pl?sid=25/06/13/0135229&amp;from=rss)
* [2025-06-13, 15:44:42](https://lobste.rs/s/tdjxvv/modularizing_george_cave_s_eink_energy) - [Modularizing George Cave&apos;s eInk Energy Dashboard](https://slipway.co/blog/eink-energy-dashboard)
* [2025-06-13, 14:44:09](https://lobste.rs/s/ztnvjl/introducing_twom_database_format) - [Introducing the twom database format](https://www.fastmail.com/blog/introducing-twom/)
* [2025-06-13, 14:44:03](https://lobste.rs/s/kbcp5p/100_years_zermelo_s_axiom_choice_what_was) - [100 years of Zermelo’s axiom of choice: What was the problem with it?](https://research.mietek.io/mi.MartinLof2006.html)
* [2025-06-13, 14:23:45](https://lobste.rs/s/unsbmk/oxcaml_jane_street_s_extension_ocaml_is) - [OxCaml, Jane Street&apos;s extension of OCaml is now open-source](https://oxcaml.org)
* [2025-06-13, 14:06:38](https://lobste.rs/s/bcxcju/tattoy_text_based_terminal_compositor) - [Tattoy: a text-based terminal compositor](https://tattoy.sh/)
* [2025-06-13, 13:51:42](https://news.ycombinator.com/item?id=44268547) - [The Army’s Newest Recruits: Tech Execs From Meta, OpenAI and More](https://www.wsj.com/tech/army-reserve-tech-executives-meta-palantir-796f5360)
* [2025-06-13, 13:28:21](https://lobste.rs/s/zuadfv/design_patterns_for_securing_llm_agents) - [Design Patterns for Securing LLM Agents against Prompt Injections](https://simonwillison.net/2025/Jun/13/prompt-injection-design-patterns/)
* [2025-06-13, 11:13:00](https://soylentnews.org/article.pl?sid=25/06/13/0124202&amp;from=rss) - [Google Brute-Force Attack Exposes Phone Numbers in Minutes](https://soylentnews.org/article.pl?sid=25/06/13/0124202&amp;from=rss)
* [2025-06-13, 08:40:05](https://news.ycombinator.com/item?id=44266828) - [If the moon were only 1 pixel: A tediously accurate solar system model (2014)](https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html)
* [2025-06-13, 08:12:05](https://lobste.rs/s/yy5auy/radicle_desktop_graphical_user) - [Radicle Desktop: a graphical user interface for the Radicle peer-to-peer code forge](https://radicle.xyz/desktop)
* [2025-06-13, 06:29:00](https://soylentnews.org/article.pl?sid=25/06/12/159242&amp;from=rss) - [1.5Tb of James Webb Space Telescope Data Dumped On The Internet - New Searchable Database](https://soylentnews.org/article.pl?sid=25/06/12/159242&amp;from=rss)
* [2025-06-13, 05:54:55](https://lobste.rs/s/1xxn8f/if_moon_were_only_1_pixel_tediously) - [If the Moon Were Only 1 Pixel - A tediously accurate map of the solar system](https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html)
* [2025-06-13, 03:58:47](https://lobste.rs/s/xe4m4f/asterinas_linux_abi_compatible_rust) - [Asterinas: A Linux ABI-compatible, Rust-based framekernel OS](https://asterinas.github.io/2025/06/04/kernel-memory-safety-mission-accomplished.html)
* [2025-06-13, 01:43:00](https://soylentnews.org/article.pl?sid=25/06/12/075226&amp;from=rss) - [Making Hydrogen With Soda Cans and Seawater](https://soylentnews.org/article.pl?sid=25/06/12/075226&amp;from=rss)
* [2025-06-13, 01:38:58](https://lobste.rs/s/thpska/jemalloc_postmortem) - [jemalloc Postmortem](https://jasone.github.io/2025/06/12/jemalloc-postmortem/)
* [2025-06-12, 21:01:00](https://soylentnews.org/article.pl?sid=25/06/11/1726256&amp;from=rss) - [ChessGPT \&quot;Wrecked\&quot; by Atari 2600](https://soylentnews.org/article.pl?sid=25/06/11/1726256&amp;from=rss)
* [2025-06-12, 20:16:58](https://lobste.rs/s/wo7nug/cursor_yolo_deleted_everything_my) - [Cursor YOLO deleted everything in my computer](https://forum.cursor.com/t/cursor-yolo-deleted-everything-in-my-computer/103131)
* [2025-06-12, 16:16:00](https://soylentnews.org/article.pl?sid=25/06/11/1627232&amp;from=rss) - [Cyberattack Cripples North America&apos;s Largest Grocery Distributor, Threatening Supply Chain](https://soylentnews.org/article.pl?sid=25/06/11/1627232&amp;from=rss)
* [2025-06-12, 15:02:23](https://news.ycombinator.com/item?id=44258633) - [The international standard for identifying postal items](https://www.akpain.net/blog/s10-upu/)
* [2025-06-12, 11:31:00](https://soylentnews.org/article.pl?sid=25/06/10/2233256&amp;from=rss) - [Dolphin LLM](https://soylentnews.org/article.pl?sid=25/06/10/2233256&amp;from=rss)
* [2025-06-12, 06:45:00](https://soylentnews.org/article.pl?sid=25/06/11/0156201&amp;from=rss) - [The Xerox Alto, Smalltalk, and Rewriting a Running GUI](https://soylentnews.org/article.pl?sid=25/06/11/0156201&amp;from=rss)
* [2025-06-12, 01:56:00](https://soylentnews.org/article.pl?sid=25/06/11/0154240&amp;from=rss) - [The Bethesda Declaration](https://soylentnews.org/article.pl?sid=25/06/11/0154240&amp;from=rss)
* [2025-06-11, 23:40:10](https://news.ycombinator.com/item?id=44252999) - [Mollusk shell assemblages as a tool for identifying unaltered seagrass beds](https://www.int-res.com/abstracts/meps/v760/meps14839)
* [2025-06-11, 23:00:50](https://news.ycombinator.com/item?id=44252717) - [Solar Orbiter gets world-first views of the Sun&apos;s poles](https://www.esa.int/Science_Exploration/Space_Science/Solar_Orbiter/Solar_Orbiter_gets_world-first_views_of_the_Sun_s_poles)
* [2025-06-11, 21:11:00](https://soylentnews.org/article.pl?sid=25/06/11/0136231&amp;from=rss) - [New Way to Track Covertly Android Users](https://soylentnews.org/article.pl?sid=25/06/11/0136231&amp;from=rss)
* [2025-06-11, 16:37:09](https://news.ycombinator.com/item?id=44249338) - [Whatever Happened to Sandboxfs?](https://blogsystem5.substack.com/p/whatever-happened-to-sandboxfs)
* [2025-06-11, 16:33:38](https://news.ycombinator.com/item?id=44249305) - [Texting myself the weather every day](https://bensilverman.co.uk/posts/daily-weather-sms/)
* [2025-06-11, 16:26:00](https://soylentnews.org/article.pl?sid=25/06/11/0127250&amp;from=rss) - [OpenAI Slams Court Order to Save All ChatGPT Logs, Including Deleted Chats](https://soylentnews.org/article.pl?sid=25/06/11/0127250&amp;from=rss)
* [2025-06-11, 14:03:46](https://news.ycombinator.com/item?id=44247759) - [\&quot;Language and Image Minus Cognition.\&quot; Leif Weatherby on LLMs](https://www.jhiblog.org/2025/06/11/language-and-image-minus-cognition-an-interview-with-leif-weatherby/)
* [2025-06-11, 11:40:00](https://soylentnews.org/article.pl?sid=25/06/11/0022207&amp;from=rss) - [Hasta La Vista, Google Baby](https://soylentnews.org/article.pl?sid=25/06/11/0022207&amp;from=rss)
* [2025-06-11, 06:58:00](https://soylentnews.org/article.pl?sid=25/06/10/1731239&amp;from=rss) - [‘We&apos;re Definitely on the Back Foot’: U.S. Risks Losing Fusion Energy Race to China, Industry Leaders](https://soylentnews.org/article.pl?sid=25/06/10/1731239&amp;from=rss)
* [2025-06-11, 02:14:00](https://soylentnews.org/article.pl?sid=25/06/10/1727213&amp;from=rss) - [Ubuntu Dropping GNOME&apos;s X11 Session](https://soylentnews.org/article.pl?sid=25/06/10/1727213&amp;from=rss)
* [2025-06-11, 00:36:00](https://news.ycombinator.com/item?id=44243059) - [Student discovers fungus predicted by Albert Hoffman](https://wvutoday.wvu.edu/stories/2025/06/02/wvu-student-makes-long-awaited-discovery-of-mystery-fungus-sought-by-lsd-s-inventor)
* [2025-06-10, 21:32:00](https://soylentnews.org/article.pl?sid=25/06/09/1724212&amp;from=rss) - [The Linux Mint Team is Testing a New Application for Providing Fingerprint Authentication](https://soylentnews.org/article.pl?sid=25/06/09/1724212&amp;from=rss)
* [2025-06-10, 20:37:46](https://news.ycombinator.com/item?id=44241209) - [Protecting your code from other people&apos;s bugs](https://doi.org/10.1145/3733699)
* [2025-06-10, 20:07:41](https://news.ycombinator.com/item?id=44240909) - [Slowing the flow of core-dump-related CVEs](https://lwn.net/SubscriberLink/1024160/f18b880c8cd1eef1/)
* [2025-06-10, 16:47:00](https://soylentnews.org/article.pl?sid=25/06/09/1718210&amp;from=rss) - [Nice Ocean Conference You Have There](https://soylentnews.org/article.pl?sid=25/06/09/1718210&amp;from=rss)
* [2025-06-10, 15:00:54](https://news.ycombinator.com/item?id=44237654) - [Me an&apos; Algernon – grappling with (temporary) cognitive decline](https://tidyfirst.substack.com/p/me-an-algernon)
* [2025-06-10, 12:07:00](https://soylentnews.org/article.pl?sid=25/06/09/1710253&amp;from=rss) - [U.S. Immigration Authorities Are Adding Children&apos;s DNA to a Criminal Database](https://soylentnews.org/article.pl?sid=25/06/09/1710253&amp;from=rss)
* [2025-06-10, 11:48:47](https://news.ycombinator.com/item?id=44235612) - [Liquid Glass – WWDC25 [video]](https://developer.apple.com/videos/play/wwdc2025/219)
* [2025-06-10, 07:19:00](https://soylentnews.org/article.pl?sid=25/06/09/1152234&amp;from=rss) - [FDA Rushed Out Agency-Wide AI Tool](https://soylentnews.org/article.pl?sid=25/06/09/1152234&amp;from=rss)
* [2025-06-10, 05:56:23](https://news.ycombinator.com/item?id=44233063) - [TimeGuessr](https://timeguessr.com/)
* [2025-06-10, 02:31:00](https://soylentnews.org/article.pl?sid=25/06/08/1422259&amp;from=rss) - [American Science &amp; Surplus is Fighting for its Life and Here&apos;s Why You Should Care](https://soylentnews.org/article.pl?sid=25/06/08/1422259&amp;from=rss)
