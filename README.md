# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Developments

* [Microsoft is open sourcing Windows 11's UI framework](https://www.neowin.net/news/microsoft-is-taking-steps-to-open-sourcing-windows-11-user-interface-framework/) - This move reveals a commitment to transparency and collaboration by Microsoft as they open-source their UI framework.

* [purgatorio – the WIP 64-bit port of Inferno](https://git.9front.org/plan9front/purgatorio/HEAD/info.html) - An exciting development for the Inferno operating system with efforts to create a 64-bit port.

* [New Steam on Linux Market Share Stats 'Likely the Largest Surveyed Figure Ever'](https://linux.slashdot.org/story/25/08/02/0551235/new-steam-on-linux-market-share-stats-likely-the-largest-surveyed-figure-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A significant milestone in Linux gaming, reflecting its growing presence in the market.

* [candyfloss: an ergonomic python library for running video pipelines](https://git.hella.cheap/bob/candyfloss) - A Python library tailored for streamlined video pipeline processes.

* [Unikernel Guide: Build & Deploy Lightweight, Secure Apps](https://tallysolutions.com/technology/introduction-to-unikernel-2/) - Insight into using unikernels for building efficient and secure applications.

## Space and Science

* [Early Universe's 'Little Red Dots' May Be Black Hole Stars](https://science.slashdot.org/story/25/08/02/0516214/early-universes-little-red-dots-may-be-black-hole-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A fascinating hypothesis exploring potential black hole stars in the early universe.

* [NASA’s Webb Finds Possible 'Direct Collapse' Black Hole](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss) - The Webb Telescope reveals intriguing discoveries about black holes.

* [For Sale: a 1990 Airstream Trailer/NASA Command Vehicle for Space Shuttle Landings](https://science.slashdot.org/story/25/08/02/0426200/for-sale-a-1990-airstream-trailernasa-command-vehicle-for-space-shuttle-landings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - This unique NASA relic is up for grabs, blending space history with everyday use.

## AI, Chips, and Data

* [Top AI Salaries Dwarf Those of the Manhattan Project and the Space Race](https://news.slashdot.org/story/25/08/01/237243/top-ai-salaries-dwarf-those-of-the-manhattan-project-and-the-space-race?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - AI's booming field showcases salaries outmatching historic scientific projects.

* [Facing US Chip Restrictions, China Pitches Global Cooperation on AI](https://news.slashdot.org/story/25/08/02/030232/facing-us-chip-restrictions-china-pitches-global-cooperation-on-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - China's call for global AI collaboration amid geopolitical restrictions.

* [Microsoft Research Tries to Predict Jobs Most Impacted (i.e., Lost) by AI](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss) - Research into the sectors and careers AI might disrupt the most.

* [A.I. researchers are negotiating $250M pay packages](https://www.nytimes.com/2025/07/31/technology/ai-researchers-nba-stars.html) - A look at monumental pay negotiations by AI researchers in a competitive landscape.

## Innovation and Curious Scientific Discoveries

* [Peacock Feathers Can Emit Laser Beams](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss) - A groundbreaking discovery about the structural properties of peacock feathers.

* [Rubik's Cube Perfect Scramble](https://www.solutionslookingforproblems.com/post/the-rubik-s-cube-perfect-scramble) - A deep dive into achieving the perfect scramble for Rubik's cubes.

* [Radioactive Wasp Nest Found at Site Where US Once Made Nuclear Bombs](https://soylentnews.org/article.pl?sid=25/08/01/1139259&amp;from=rss) - An unusual and potentially dangerous discovery at a historic US site.

* [Show HN: WebGPU enables local LLM in the browser – demo site with AI chat](https://andreinwald.github.io/browser-llm/) - Demonstrates running AI-powered large language models directly in browsers via WebGPU.

## Economy and Workforce

* [Palantir Lands $10 Billion Army Software and Data Contract](https://tech.slashdot.org/story/25/08/01/2055248/palantir-lands-10-billion-army-software-and-data-contract?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Palantir's substantial government contract cements its role in military tech.

* [Intel Confirms It Will Dramatically Cut Its Workforce By The End Of 2025](https://soylentnews.org/article.pl?sid=25/07/30/1511218&amp;from=rss) - Intel prepares for significant workforce reductions, altering its labor landscape.

* [Atlassian Terminates 150 Staff With Pre-Recorded Video](https://slashdot.org/story/25/08/01/2049255/atlassian-terminates-150-staff-with-pre-recorded-video?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A controversial method of workforce downsizing.

* [Financial lessons from my family's experience with long-term care insurance](https://www.whitecoatinvestor.com/financial-lessons-father-long-term-care-insurance/) - Insights into managing long-term care insurance rooted in real-life experiences.

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

* [2025-08-02, 18:34:00](https://news.slashdot.org/story/25/08/02/0059225/satellites-drones-and-ai-the-new-high-tech-quest-to-fight-wildfires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Satellites, Drones, and AI:  the New &apos;High-Tech Quest to Fight Wildfires&apos;](https://news.slashdot.org/story/25/08/02/0059225/satellites-drones-and-ai-the-new-high-tech-quest-to-fight-wildfires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 18:31:50](https://lobste.rs/s/lwufi3/rubik_s_cube_perfect_scramble) - [The Rubik&apos;s Cube Perfect Scramble](https://www.solutionslookingforproblems.com/post/the-rubik-s-cube-perfect-scramble)
* [2025-08-02, 17:37:38](https://lobste.rs/s/bf14oh/how_reverse_engineer_analog_chip_tda7000) - [How to reverse engineer an analog chip: the TDA7000 FM radio receiver](http://www.righto.com/2025/08/reverse-engineering-analog-TDA7000.html)
* [2025-08-02, 17:34:00](https://linux.slashdot.org/story/25/08/02/0551235/new-steam-on-linux-market-share-stats-likely-the-largest-surveyed-figure-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Steam on Linux Market Share Stats &apos;Likely the Largest Surveyed Figure Ever&apos;](https://linux.slashdot.org/story/25/08/02/0551235/new-steam-on-linux-market-share-stats-likely-the-largest-surveyed-figure-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 17:11:39](https://news.ycombinator.com/item?id=44769338) - [Show HN: Wordle-style game for Fermi questions](https://www.fermiquestions.org/)
* [2025-08-02, 17:00:36](https://news.ycombinator.com/item?id=44769231) - [Great Question (YC W21) Is Hiring a VP of Engineering (Remote)](https://www.ycombinator.com/companies/great-question/jobs/ONBQUqe-vp-of-engineering)
* [2025-08-02, 16:52:57](https://news.ycombinator.com/item?id=44769145) - [Linear Types for Programmers (2023)](https://twey.io/for-programmers/linear-types/)
* [2025-08-02, 16:40:51](https://news.ycombinator.com/item?id=44769039) - [Telo MT1](https://www.telotrucks.com/)
* [2025-08-02, 16:34:00](https://science.slashdot.org/story/25/08/02/0516214/early-universes-little-red-dots-may-be-black-hole-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Early Universe&apos;s &apos;Little Red Dots&apos; May Be Black Hole Stars](https://science.slashdot.org/story/25/08/02/0516214/early-universes-little-red-dots-may-be-black-hole-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 16:03:31](https://news.ycombinator.com/item?id=44768714) - [Browser extension and local backend that automatically archives YouTube videos](https://github.com/andrewarrow/starchive)
* [2025-08-02, 16:02:16](https://news.ycombinator.com/item?id=44768704) - [Why Exercise Is a Miracle Drug](https://www.derekthompson.org/p/the-sunday-morning-post-why-exercise)
* [2025-08-02, 15:59:51](https://news.ycombinator.com/item?id=44768677) - [How to reverse engineer an analog chip: the TDA7000 FM radio receiver](https://www.righto.com/2025/08/reverse-engineering-analog-TDA7000.html)
* [2025-08-02, 15:53:00](https://soylentnews.org/article.pl?sid=25/08/01/1511227&amp;from=rss) - [Microsoft Bans LibreOffice Developer&apos;s Account Without Warning, Rejects Appeal](https://soylentnews.org/article.pl?sid=25/08/01/1511227&amp;from=rss)
* [2025-08-02, 15:34:00](https://news.slashdot.org/story/25/08/02/030232/facing-us-chip-restrictions-china-pitches-global-cooperation-on-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Facing US Chip Restrictions, China Pitches Global Cooperation on AI](https://news.slashdot.org/story/25/08/02/030232/facing-us-chip-restrictions-china-pitches-global-cooperation-on-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 14:37:51](https://news.ycombinator.com/item?id=44767959) - [The /o in Ruby regex stands for \&quot;oh the humanity \&quot;](https://jpcamara.com/2025/08/02/the-o-in-ruby-regex.html)
* [2025-08-02, 14:36:18](https://lobste.rs/s/efn1an/o_ruby_regex_stands_for_oh_humanity) - [The /o in Ruby regex stands for “oh the humanity!”](https://jpcamara.com/2025/08/02/the-o-in-ruby-regex.html)
* [2025-08-02, 14:34:00](https://science.slashdot.org/story/25/08/02/0426200/for-sale-a-1990-airstream-trailernasa-command-vehicle-for-space-shuttle-landings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [For Sale: a 1990 Airstream Trailer/NASA Command Vehicle for Space Shuttle Landings](https://science.slashdot.org/story/25/08/02/0426200/for-sale-a-1990-airstream-trailernasa-command-vehicle-for-space-shuttle-landings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 14:32:32](https://lobste.rs/s/fpljpw/unikernel_guide_build_deploy) - [Unikernel Guide: Build &amp; Deploy Lightweight, Secure Apps](https://tallysolutions.com/technology/introduction-to-unikernel-2/)
* [2025-08-02, 14:31:58](https://news.ycombinator.com/item?id=44767928) - [The Rubik&apos;s Cube Perfect Scramble (2024)](https://www.solutionslookingforproblems.com/post/the-rubik-s-cube-perfect-scramble)
* [2025-08-02, 14:26:37](https://news.ycombinator.com/item?id=44767888) - [Iceberg, the right idea – the wrong spec – Part 2 of 2: The spec](https://www.database-doctor.com/posts/iceberg-is-wrong-2.html)
* [2025-08-02, 14:22:11](https://news.ycombinator.com/item?id=44767858) - [The case for having roommates even when you can afford to live alone](https://supernuclear.substack.com/p/the-case-for-having-roommates-even)
* [2025-08-02, 14:09:12](https://news.ycombinator.com/item?id=44767775) - [Show HN: WebGPU enables local LLM in the browser – demo site with AI chat](https://andreinwald.github.io/browser-llm/)
* [2025-08-02, 14:00:28](https://news.ycombinator.com/item?id=44767702) - [Financial lessons from my family&apos;s experience with long-term care insurance](https://www.whitecoatinvestor.com/financial-lessons-father-long-term-care-insurance/)
* [2025-08-02, 13:43:10](https://news.ycombinator.com/item?id=44767555) - [The Art of Multiprocessor Programming 2nd Edition Book Club](https://eatonphil.com/2025-art-of-multiprocessor-programming.html)
* [2025-08-02, 13:12:39](https://lobste.rs/s/0jfjcg/executing_arbitrary_python_code_from) - [Executing arbitrary Python code from a comment](https://www.hacktron.ai/blog/posts/python-zip-confusion/)
* [2025-08-02, 13:00:00](https://news.slashdot.org/story/25/08/01/237243/top-ai-salaries-dwarf-those-of-the-manhattan-project-and-the-space-race?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Top AI Salaries Dwarf Those of the Manhattan Project and the Space Race](https://news.slashdot.org/story/25/08/01/237243/top-ai-salaries-dwarf-those-of-the-manhattan-project-and-the-space-race?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 12:40:11](https://news.ycombinator.com/item?id=44767125) - [ThinkPad designer David Hill on unreleased models](https://www.theregister.com/2025/08/02/thinkpad_david_hill_interview/)
* [2025-08-02, 12:34:19](https://lobste.rs/s/rjfxop/bytecode_vm_for_arithmetic_parser) - [A Bytecode VM for Arithmetic: The Parser](https://abhinavsarkar.net/posts/arithmetic-bytecode-vm-parser/)
* [2025-08-02, 12:12:27](https://news.ycombinator.com/item?id=44766962) - [At a Loss for Words: A flawed idea is teaching kids to be poor readers (2019)](https://www.apmreports.org/episode/2019/08/22/whats-wrong-how-schools-teach-reading)
* [2025-08-02, 11:34:39](https://news.ycombinator.com/item?id=44766758) - [A.I. researchers are negotiating $250M pay packages](https://www.nytimes.com/2025/07/31/technology/ai-researchers-nba-stars.html)
* [2025-08-02, 11:28:33](https://news.ycombinator.com/item?id=44766718) - [Compressing Icelandic name declension patterns into a 3.27 kB trie](https://alexharri.com/blog/icelandic-name-declension-trie)
* [2025-08-02, 11:08:00](https://soylentnews.org/article.pl?sid=25/08/01/1139259&amp;from=rss) - [Radioactive Wasp Nest Found at Site Where US Once Made Nuclear Bombs](https://soylentnews.org/article.pl?sid=25/08/01/1139259&amp;from=rss)
* [2025-08-02, 11:07:31](https://lobste.rs/s/8ygkg5/how_help_someone_use_computer) - [How to help someone use a computer](https://pages.gseis.ucla.edu/faculty/agre/how-to-help.html)
* [2025-08-02, 11:02:40](https://lobste.rs/s/nxde0i/less_glue_more_product_why_elixir_shrinks) - [Less Glue, More Product: Why Elixir Shrinks Architectural Complexity](https://iamkonstantin.eu/blog/less-glue-more-product-why-elixir-shrinks-architectural-complexity/)
* [2025-08-02, 11:02:15](https://lobste.rs/s/ogd44u/purgatorio_wip_64_bit_port_inferno) - [purgatorio – the WIP 64-bit port of Inferno](https://git.9front.org/plan9front/purgatorio/HEAD/info.html)
* [2025-08-02, 10:59:12](https://lobste.rs/s/jf7ldc/this_month_ladybird_july_2025) - [This Month in Ladybird - July 2025](https://ladybird.org/newsletter/2025-07-31/)
* [2025-08-02, 10:52:36](https://news.ycombinator.com/item?id=44766508) - [We may not like what we become if A.I. solves loneliness](https://www.newyorker.com/magazine/2025/07/21/ai-is-about-to-solve-loneliness-thats-a-problem)
* [2025-08-02, 10:18:46](https://news.ycombinator.com/item?id=44766326) - [North Korea sent him abroad to be a secret IT worker](https://www.bbc.com/news/articles/c15wk77zxngo)
* [2025-08-02, 10:00:00](https://hardware.slashdot.org/story/25/08/01/2313250/researchers-map-where-solar-energy-delivers-the-biggest-climate-payoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Map Where Solar Energy Delivers the Biggest Climate Payoff](https://hardware.slashdot.org/story/25/08/01/2313250/researchers-map-where-solar-energy-delivers-the-biggest-climate-payoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 07:52:40](https://news.ycombinator.com/item?id=44765600) - [Microsoft is open sourcing Windows 11&apos;s UI framework](https://www.neowin.net/news/microsoft-is-taking-steps-to-open-sourcing-windows-11-user-interface-framework/)
* [2025-08-02, 07:00:00](https://science.slashdot.org/story/25/08/01/2254211/lying-increases-trust-in-science-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lying Increases Trust In Science, Study Finds](https://science.slashdot.org/story/25/08/01/2254211/lying-increases-trust-in-science-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 06:20:00](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss) - [Peacock Feathers Can Emit Laser Beams](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss)
* [2025-08-02, 05:23:40](https://lobste.rs/s/pm9hcp/keep_calm_carry_on) - [Keep calm and carry on](https://boston.conman.org/2025/08/01.1)
* [2025-08-02, 04:26:53](https://lobste.rs/s/6b3ete/jujutsu_for_busy_devs_part_2_how_do_i) - [Jujutsu For Busy Devs, Part 2: \&quot;How Do I...?\&quot;](https://maddie.wtf/posts/2025-07-21-jujutsu-for-busy-devs/entry/1)
* [2025-08-02, 03:30:00](https://developers.slashdot.org/story/25/08/01/2237220/anthropic-revokes-openais-access-to-claude-over-terms-of-service-violation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Revokes OpenAI&apos;s Access To Claude Over Terms of Service Violation](https://developers.slashdot.org/story/25/08/01/2237220/anthropic-revokes-openais-access-to-claude-over-terms-of-service-violation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 02:02:00](https://hardware.slashdot.org/story/25/08/01/2120225/peak-energy-ships-americas-first-grid-scale-sodium-ion-battery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Peak Energy Ships America&apos;s First Grid-Scale Sodium-Ion Battery](https://hardware.slashdot.org/story/25/08/01/2120225/peak-energy-ships-americas-first-grid-scale-sodium-ion-battery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 01:37:00](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss) - [Microsoft Research Tries to Predict Jobs Most Impacted (i.e., Lost) by AI](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss)
* [2025-08-02, 01:25:00](https://tech.slashdot.org/story/25/08/01/2242247/auroras-self-driving-trucks-are-now-driving-at-night?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Aurora&apos;s Self-Driving Trucks Are Now Driving At Night](https://tech.slashdot.org/story/25/08/01/2242247/auroras-self-driving-trucks-are-now-driving-at-night?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 00:45:00](https://tech.slashdot.org/story/25/08/01/2116210/skipping-over-the-air-car-updates-could-be-costly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Skipping Over-The-Air Car Updates Could Be Costly](https://tech.slashdot.org/story/25/08/01/2116210/skipping-over-the-air-car-updates-could-be-costly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 00:22:14](https://lobste.rs/s/houeoz/candyfloss_ergonomic_python_library_for) - [candyfloss: an ergonomic python library for running video pipelines](https://git.hella.cheap/bob/candyfloss)
* [2025-08-02, 00:02:00](https://yro.slashdot.org/story/25/08/01/219227/a-luggage-services-web-bugs-exposed-the-travel-plans-of-every-user?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Luggage Service&apos;s Web Bugs Exposed the Travel Plans of Every User](https://yro.slashdot.org/story/25/08/01/219227/a-luggage-services-web-bugs-exposed-the-travel-plans-of-every-user?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 23:20:00](https://tech.slashdot.org/story/25/08/01/2055248/palantir-lands-10-billion-army-software-and-data-contract?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Palantir Lands $10 Billion Army Software and Data Contract](https://tech.slashdot.org/story/25/08/01/2055248/palantir-lands-10-billion-army-software-and-data-contract?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 22:40:00](https://slashdot.org/story/25/08/01/2049255/atlassian-terminates-150-staff-with-pre-recorded-video?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Atlassian Terminates 150 Staff With Pre-Recorded Video](https://slashdot.org/story/25/08/01/2049255/atlassian-terminates-150-staff-with-pre-recorded-video?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-01, 22:04:38](https://news.ycombinator.com/item?id=44762959) - [Cerebras Code](https://www.cerebras.ai/blog/introducing-cerebras-code)
* [2025-08-01, 21:51:33](https://lobste.rs/s/gijhis/unit_testing_principles) - [Unit Testing Principles](https://olano.dev/blog/unit-testing-principles/)
* [2025-08-01, 20:52:00](https://soylentnews.org/article.pl?sid=25/07/30/1511218&amp;from=rss) - [Intel Confirms It Will Dramatically Cut Its Workforce By The End Of 2025](https://soylentnews.org/article.pl?sid=25/07/30/1511218&amp;from=rss)
* [2025-08-01, 20:47:01](https://lobste.rs/s/mlnvoy/it_s_rude_show_ai_output_people) - [It&apos;s rude to show AI output to people](https://distantprovince.by/posts/its-rude-to-show-ai-output-to-people/)
* [2025-08-01, 19:27:43](https://lobste.rs/s/muk05v/reflections_on_matrix_criticism_over) - [Reflections on Matrix criticism over the last week](https://youtu.be/OyuqM7RbX5E)
* [2025-08-01, 18:06:07](https://lobste.rs/s/xkynzw/what_declarative_languages_are_2013) - [What Declarative Languages Are (2013)](https://semantic-domain.blogspot.com/2013/07/what-declarative-languages-are.html)
* [2025-08-01, 16:58:10](https://lobste.rs/s/2vfx6w/lobsters_interview_with_icefox) - [Lobsters Interview with Icefox](https://lobste.rs/s/2vfx6w/lobsters_interview_with_icefox)
* [2025-08-01, 16:12:00](https://soylentnews.org/politics/article.pl?sid=25/07/30/158210&amp;from=rss) - [Trump Caving on Nvidia H20 Export Curbs May Disrupt His Bigger Trade War](https://soylentnews.org/politics/article.pl?sid=25/07/30/158210&amp;from=rss)
* [2025-08-01, 14:53:05](https://lobste.rs/s/ku3kej/wayback_0_2_released) - [Wayback 0.2 released](https://wayback.freedesktop.org/news/2025/07/31/wayback-0.2-released/)
* [2025-08-01, 14:27:31](https://lobste.rs/s/9fwqhg/long_term_support) - [Long Term Support](https://www.sqlite.org/lts.html)
* [2025-08-01, 14:22:45](https://news.ycombinator.com/item?id=44757249) - [Introduction to Unikernel: Building, deploying lightweight, secure applications](https://tallysolutions.com/technology/introduction-to-unikernel-2/)
* [2025-08-01, 12:22:55](https://lobste.rs/s/jdk9z8/vibe_code_is_legacy_code) - [Vibe code is legacy code](https://blog.val.town/vibe-code)
* [2025-08-01, 11:24:00](https://soylentnews.org/article.pl?sid=25/07/30/1457215&amp;from=rss) - [From Apple to Greek Defense Start-up](https://soylentnews.org/article.pl?sid=25/07/30/1457215&amp;from=rss)
* [2025-08-01, 11:03:44](https://lobste.rs/s/nv7a9k/how_nixos_is_built) - [How NixOS is built](https://blog.erethon.com/blog/2025/07/31/how-nixos-is-built/)
* [2025-08-01, 09:44:07](https://lobste.rs/s/qsrdnn/agendafs_filesystem_for_syncing_notes) - [agendafs: A filesystem for syncing notes to your calendar](https://sr.ht/~marcc/agendafs/)
* [2025-08-01, 08:52:00](https://lobste.rs/s/dsmzzu/if_odin_had_macros) - [If Odin Had Macros](https://www.gingerbill.org/article/2025/07/31/if-odin-had-macros/)
* [2025-08-01, 06:41:00](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss) - [X37B is Set to Launch and Test Quantum Navigation Technology](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss)
* [2025-08-01, 06:37:09](https://lobste.rs/s/axr1la/age_verification_doesn_t_need_be_privacy) - [Age Verification Doesn’t Need to Be a Privacy Footgun](https://soatok.blog/2025/07/31/age-verification-doesnt-need-to-be-a-privacy-footgun/)
* [2025-08-01, 01:55:00](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss) - [Anthropic Unveils New Rate Limits to Curb Claude Code Power Users](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss)
* [2025-07-31, 21:10:00](https://soylentnews.org/article.pl?sid=25/07/30/0143216&amp;from=rss) - [Meta Pirated and Seeded Porn for Years to Train AI, Lawsuit Says](https://soylentnews.org/article.pl?sid=25/07/30/0143216&amp;from=rss)
* [2025-07-31, 16:29:00](https://soylentnews.org/article.pl?sid=25/07/30/0133228&amp;from=rss) - [Why We Need a Right Not to be Manipulated](https://soylentnews.org/article.pl?sid=25/07/30/0133228&amp;from=rss)
* [2025-07-31, 15:25:49](https://news.ycombinator.com/item?id=44746621) - [6 Weeks of Claude Code](https://blog.puzzmo.com/posts/2025/07/30/six-weeks-of-claude-code/)
* [2025-07-31, 12:41:50](https://news.ycombinator.com/item?id=44745067) - [Helion begins work on Washington nuclear fusion plant](https://www.nucnet.org/news/microsoft-backed-fusion-company-begins-work-on-washington-nuclear-fusion-plant-7-4-2025)
* [2025-07-31, 11:45:00](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss) - [We Are Undergoing Unprecedented Loss of Freshwater Across the Planet](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss)
* [2025-07-31, 08:00:19](https://news.ycombinator.com/item?id=44743432) - [Double-slit experiment holds up when stripped to its quantum essentials](https://news.mit.edu/2025/famous-double-slit-experiment-holds-when-stripped-to-quantum-essentials-0728)
* [2025-07-31, 07:01:00](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss) - [Manuel Moreale on Why Blogs Matter](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss)
* [2025-07-31, 06:45:02](https://news.ycombinator.com/item?id=44743034) - [Caches: LRU vs. Random](https://danluu.com/2choices-eviction/)
* [2025-07-31, 03:34:33](https://news.ycombinator.com/item?id=44742092) - [&apos;Communities&apos; of extreme life seen for first time in deep ocean](https://www.bbc.com/news/articles/c3wnqe5j99do)
* [2025-07-31, 02:17:00](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss) - [FreeBSD 15.0’S Installer to Gain Option to Install a Full KDE Plasma Desktop Environment](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss)
* [2025-07-30, 21:32:00](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss) - [OpenAI’s ChatGPT Agent Casually Clicks Through “I am not a robot” Verification Test](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss)
* [2025-07-30, 16:48:00](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss) - [NASA’s Webb Finds Possible &apos;Direct Collapse&apos; Black Hole](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss)
* [2025-07-30, 16:40:41](https://news.ycombinator.com/item?id=44736428) - [The Garlic Bread Hack](https://suntreeapps.com/blog/posts/garlic-bread-hack/)
* [2025-07-30, 11:57:00](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss) - [EU-US Draft 15Pc Tariff Agreement Appears To Include Pharma, Chips](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss)
* [2025-07-30, 07:13:00](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss) - [China Advances Toward Tech Independence With New Homegrown 6nm Gaming And AI GPUs](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss)
* [2025-07-30, 02:53:10](https://news.ycombinator.com/item?id=44730544) - [Online Collection of Keygen Music](https://keygenmusic.tk)
* [2025-07-30, 02:32:00](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss) - [Nasa May Lose Close To 4,000 Employees After Latest Deferred Resignation Round](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss)
* [2025-07-29, 21:44:00](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss) - [Senator Demands Mandiant Hand Over Telco Salt Typhoon Probes](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss)
* [2025-07-29, 17:02:00](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss) - [Hacker Injects Malicious, Potentially Disk-Wiping Prompt Into Amazon&apos;s Ai Coding Assistant](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss)
* [2025-07-29, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss) - [Gold Can be Heated to 14 Times its Melting Point Without Melting](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss)
* [2025-07-29, 07:27:00](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss) - [Discovery Alert: Flaring Star, Toasted Planet](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss)
* [2025-07-29, 02:40:00](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss) - [Chinese Hackers Breached U.S. Army National Guard to Steal Network Configurations](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss)
