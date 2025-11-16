# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Research

* [Waiting for SQL:202y: GROUP BY ALL](http://peter.eisentraut.org/blog/2025/11/11/waiting-for-sql-202y-group-by-all) - A discussion on the awaited SQL:202y standard, focusing on the introduction of the GROUP BY ALL functionality.

* [AMD vs. Intel: a Unicode benchmark](https://lemire.me/blog/2025/11/16/amd-vs-intel-a-unicode-benchmark/) - An exploration of Unicode performance benchmarks between AMD and Intel processors.

* [InterpN: Fast Interpolation](https://jlogan.dev/blog/2025/11/10/2025-11-10-interpn-fast-interpolation/) - Advances in fast interpolation through the InterpN method.

* [Penrose: From Mathematical Notation to Beautiful Diagrams](https://www.youtube.com/watch?v=OyD4LIv2PDc) - A tool to transform mathematical notation into elegant diagrams.

* [Brimstone: ES2025 JavaScript engine written in Rust](https://github.com/Hans-Halverson/brimstone) - Introducing a Rust-based JavaScript engine tailored for ES2025 standards.

* [Vintage Large Language Models](https://owainevans.github.io/talk-transcript.html) - An overview of early large language models and their significance.

* [Could C# Overtake Java in TIOBE's Programming Language Popularity Rankings?](https://developers.slashdot.org/story/25/11/16/0516224/could-c-overtake-java-in-tiobes-programming-language-popularity-rankings?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Exploring the competition between C# and Java in programming language rankings.

* [A Quantum Error Correction Breakthrough?](https://tech.slashdot.org/story/25/11/16/004220/a-quantum-error-correction-breakthrough?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A potential milestone in quantum error correction technology.

* [Solar and Wind are Covering All New Power Demand in 2025](https://hardware.slashdot.org/story/25/11/15/0633205/solar-and-wind-are-covering-all-new-power-demand-in-2025?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Renewable energy sources take on the global power demand for 2025.

## Cybersecurity and Privacy

* [Tracking users with favicons, even in incognito mode](https://github.com/jonasstrehle/supercookie) - A novel technique threatening user privacy in private browsing modes.

* [Deaths Linked to Antibiotic-Resistant Superbugs Rose 17% in England in 2024](https://science.slashdot.org/story/25/11/16/2042254/deaths-linked-to-antibiotic-resistant-superbugs-rose-17-in-england-in-2024?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Rising fatalities due to superbug resistance highlight global healthcare concerns.

* [Security Researchers Spot 150,000 Function-less npm Packages in Automated 'Token Farming' Scheme](https://developers.slashdot.org/story/25/11/16/0712239/security-researchers-spot-150000-function-less-npm-packages-in-automated-token-farming-scheme?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A fraudulent npm package scheme uncovered by researchers.

* [Google Begins Aggresively Using the Law To Stop Text Message Scams](https://yro.slashdot.org/story/25/11/16/0112236/google-begins-aggresively-using-the-law-to-stop-text-message-scams?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google's legal moves to combat text messaging scams.

* [Copy-and-Paste Now Exceeds File Transferring as the Top Corporate Data Exfiltration Vector](https://it.slashdot.org/story/25/11/16/0355217/copy-and-paste-now-exceeds-file-transferring-as-the-top-corporate-data-exfiltration-vector?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A surprising rise in copy-paste as a method of corporate data theft.

## Open Source and Programming

* [Oblique Strategies: Prompts for Programmers](https://kevinlawler.com/prompts) - Creative prompting tool for programmers based on Oblique Strategies.

* [The fate of "small" open source](https://nolanlawson.com/2025/11/16/the-fate-of-small-open-source/) - An investigation into the challenges faced by small-scale open source projects.

* [Production-Grade Container Deployment with Podman Quadlets](https://blog.hofstede.it/production-grade-container-deployment-with-podman-quadlets/) - Enhancing container deployment using Podman Quadlets.

* [Blocking LLM crawlers, without JavaScript](https://www.owl.is/blogg/blocking-crawlers-without-javascript/) - Techniques to prevent Large Language Model crawlers sans JavaScript.

* [Jonathan Blow On Programming Language Design](https://youtu.be/e6crOMC9WCE) - Insights into programming language design philosophies from Jonathan Blow.

## AI and Machine Learning

* [Peter Thiel sells off all Nvidia stock, stirring bubble fears](https://www.thestreet.com/investing/peter-thiel-dumps-top-ai-stock-stirring-bubble-fears) - Concerns over the hype bubble in AI following Nvidia stock sell-off.

* [The Internet Archive Now Captures AI-Generated Content (Including Google's AI Overviews)](https://tech.slashdot.org/story/25/11/16/1852218/the-internet-archive-now-captures-ai-generated-content-including-googles-ai-overviews?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Inclusion of AI-generated works in the Internet Archive.

* [Fear Drives the AI 'Cold War' Between America and China](https://news.slashdot.org/story/25/11/15/2123207/fear-drives-the-ai-cold-war-between-america-and-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Tensions in AI research driven by geopolitical competition.

* [AI Resistance: Who Says No to AI and Why?](https://soylentnews.org/article.pl?sid=25/11/15/045217&from=rss) - Exploring resistance against AI adoption and its roots.

* [Google Confirms AI Search Will Have Ads, but They May Look Different](https://soylentnews.org/article.pl?sid=25/11/13/0325258&from=rss) - Updates to Google's AI-driven search integrations.

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

* [2025-11-16, 21:47:13](https://lobste.rs/s/zwn6vn/waiting_for_sql_202y_group_by_all) - [Waiting for SQL:202y: GROUP BY ALL](http://peter.eisentraut.org/blog/2025/11/11/waiting-for-sql-202y-group-by-all)
* [2025-11-16, 21:19:08](https://news.ycombinator.com/item?id=45948477) - [Peter Thiel sells off all Nvidia stock, stirring bubble fears](https://www.thestreet.com/investing/peter-thiel-dumps-top-ai-stock-stirring-bubble-fears)
* [2025-11-16, 21:16:16](https://lobste.rs/s/5t0ing/amd_vs_intel_unicode_benchmark) - [AMD vs. Intel: a Unicode benchmark](https://lemire.me/blog/2025/11/16/amd-vs-intel-a-unicode-benchmark/)
* [2025-11-16, 21:10:50](https://lobste.rs/s/iysyaf/interpn_fast_interpolation) - [InterpN: Fast Interpolation](https://jlogan.dev/blog/2025/11/10/2025-11-10-interpn-fast-interpolation/)
* [2025-11-16, 20:51:10](https://lobste.rs/s/hzzm6k/6502_emulator_labview) - [A 6502 emulator in LabVIEW](https://www.crossover-eng.it/view.php?post=post_4)
* [2025-11-16, 20:47:00](https://science.slashdot.org/story/25/11/16/2042254/deaths-linked-to-antibiotic-resistant-superbugs-rose-17-in-england-in-2024?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Deaths Linked to Antibiotic-Resistant Superbugs Rose 17% in England in 2024](https://science.slashdot.org/story/25/11/16/2042254/deaths-linked-to-antibiotic-resistant-superbugs-rose-17-in-england-in-2024?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-16, 20:46:30](https://news.ycombinator.com/item?id=45948254) - [The Pragmatic Programmer: 20th Anniversary Edition](https://www.ahalbert.com/technology/2023/12/19/the_pragmatic_programmer.html)
* [2025-11-16, 20:44:22](https://lobste.rs/s/iqsvk2/bundle_configuration_with_binaries) - [Bundle Configuration with Binaries using Nix](https://www.robw.fyi/2025/11/15/bundle-configuration-with-binaries-using-nix/)
* [2025-11-16, 20:28:00](https://soylentnews.org/article.pl?sid=25/11/15/0726208&amp;from=rss) - [Youtube Ads - Legal Advice Required](https://soylentnews.org/article.pl?sid=25/11/15/0726208&amp;from=rss)
* [2025-11-16, 20:18:10](https://news.ycombinator.com/item?id=45948058) - [I have recordings proving Coinbase knew about breach months before disclosure](https://jonathanclark.com/posts/coinbase-breach-timeline.html)
* [2025-11-16, 20:14:04](https://lobste.rs/s/bqwcjk/penrose_from_mathematical_notation) - [Penrose: From Mathematical Notation to Beautiful Diagrams](https://www.youtube.com/watch?v=OyD4LIv2PDc)
* [2025-11-16, 19:46:28](https://news.ycombinator.com/item?id=45947827) - [Adding an imaginary unit to a finite field](https://www.johndcook.com/blog/2025/11/16/finite-field-i/)
* [2025-11-16, 19:45:36](https://news.ycombinator.com/item?id=45947822) - [Linux mode setting, from the comfort of OCaml](https://roscidus.com/blog/blog/2025/11/16/libdrm-ocaml/)
* [2025-11-16, 19:44:27](https://news.ycombinator.com/item?id=45947810) - [Open-source Zig book](https://www.zigbook.net)
* [2025-11-16, 19:39:52](https://news.ycombinator.com/item?id=45947770) - [Tracking users with favicons, even in incognito mode](https://github.com/jonasstrehle/supercookie)
* [2025-11-16, 19:38:49](https://news.ycombinator.com/item?id=45947761) - [Dark Pattern Games](https://www.darkpattern.games)
* [2025-11-16, 19:21:13](https://news.ycombinator.com/item?id=45947639) - [The fate of \&quot;small\&quot; open source](https://nolanlawson.com/2025/11/16/the-fate-of-small-open-source/)
* [2025-11-16, 19:19:18](https://lobste.rs/s/sdtywr/fate_small_open_source) - [The fate of “small” open source](https://nolanlawson.com/2025/11/16/the-fate-of-small-open-source/)
* [2025-11-16, 18:58:10](https://news.ycombinator.com/item?id=45947444) - [What if you don&apos;t need MCP at all?](https://mariozechner.at/posts/2025-11-02-what-if-you-dont-need-mcp/)
* [2025-11-16, 18:55:00](https://tech.slashdot.org/story/25/11/16/1852218/the-internet-archive-now-captures-ai-generated-content-including-googles-ai-overviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Internet Archive Now Captures AI-Generated Content (Including Google&apos;s AI Overviews)](https://tech.slashdot.org/story/25/11/16/1852218/the-internet-archive-now-captures-ai-generated-content-including-googles-ai-overviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-16, 18:47:40](https://news.ycombinator.com/item?id=45947374) - [Decoding Leibniz Notation (2024)](https://www.spakhm.com/leibniz)
* [2025-11-16, 18:38:37](https://news.ycombinator.com/item?id=45947301) - [Z3 API in Python: From Sudoku to N-Queens in Under 20 Lines](https://ericpony.github.io/z3py-tutorial/guide-examples.htm)
* [2025-11-16, 18:12:42](https://lobste.rs/s/4nocg8/new_online_accounts_system_for_kde) - [A new online accounts system [for KDE]?](https://nicolasfella.de/posts/a-new-online-accounts-system/)
* [2025-11-16, 18:11:01](https://lobste.rs/s/9zkul4/how_foss_won_why_it_matters) - [How FOSS Won and Why It Matters](https://www.softwaremaxims.com/blog/how-foss-won-consequences)
* [2025-11-16, 17:50:29](https://news.ycombinator.com/item?id=45946937) - [The Man Who Keeps Predicting the Web&apos;s Death](https://tedium.co/2025/10/25/web-dead-predictions-george-colony/)
* [2025-11-16, 17:47:44](https://lobste.rs/s/fak69p/oblique_strategies_prompts_for) - [Oblique Strategies: Prompts for Programmers](https://kevinlawler.com/prompts)
* [2025-11-16, 17:39:43](https://news.ycombinator.com/item?id=45946865) - [I finally understand Cloudflare Zero Trust tunnels](https://david.coffee/cloudflare-zero-trust-tunnels)
* [2025-11-16, 17:34:00](https://news.slashdot.org/story/25/11/15/2242238/could-firefox-be-the-browser-that-protects-the-privacy-of-ai-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could Firefox Be the Browser That Protects the Privacy of AI Users?](https://news.slashdot.org/story/25/11/15/2242238/could-firefox-be-the-browser-that-protects-the-privacy-of-ai-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-16, 16:39:57](https://lobste.rs/s/grands/i_think_nobody_wants_ai_firefox_mozilla) - [I think nobody wants AI in Firefox, Mozilla](https://manualdousuario.net/en/mozilla-firefox-window-ai/)
* [2025-11-16, 16:34:00](https://news.slashdot.org/story/25/11/15/069251/are-data-centers-raising-americas-electricity-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Data Centers Raising America&apos;s Electricity Prices?](https://news.slashdot.org/story/25/11/15/069251/are-data-centers-raising-americas-electricity-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-16, 16:12:52](https://lobste.rs/s/qku1qr/living_my_best_sun_microsystems) - [Living my best Sun Microsystems ecosystem life in 2025](https://www.osnews.com/story/143570/living-my-best-sun-microsystems-ecosystem-life-in-2025/)
* [2025-11-16, 15:50:54](https://news.ycombinator.com/item?id=45945960) - [Dissecting Flock Safety: The Cameras Tracking You Are a Security Nightmare [video]](https://www.youtube.com/watch?v=uB0gr7Fh6lY)
* [2025-11-16, 15:45:00](https://soylentnews.org/article.pl?sid=25/11/15/0419235&amp;from=rss) - [This Rare ‘Mad Honey’ is Only Found in Two Places in the World](https://soylentnews.org/article.pl?sid=25/11/15/0419235&amp;from=rss)
* [2025-11-16, 15:34:00](https://developers.slashdot.org/story/25/11/16/0712239/security-researchers-spot-150000-function-less-npm-packages-in-automated-token-farming-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Security Researchers Spot 150,000 Function-less npm Packages in Automated &apos;Token Farming&apos; Scheme](https://developers.slashdot.org/story/25/11/16/0712239/security-researchers-spot-150000-function-less-npm-packages-in-automated-token-farming-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-16, 15:26:24](https://news.ycombinator.com/item?id=45945784) - [FPGA Based IBM-PC-XT](https://bit-hack.net/2025/11/10/fpga-based-ibm-pc-xt/)
* [2025-11-16, 15:22:16](https://news.ycombinator.com/item?id=45945750) - [De Bruijn Numerals](https://text.marvinborner.de/2023-08-22-22.html)
* [2025-11-16, 15:00:24](https://news.ycombinator.com/item?id=45945587) - [Heretic: Automatic censorship removal for language models](https://github.com/p-e-w/heretic)
* [2025-11-16, 14:44:59](https://lobste.rs/s/2a2rud/godbolt_s_rule) - [Godbolt&apos;s Rule](https://corecursive.com/godbolt-rule-matt-godbolt/)
* [2025-11-16, 14:30:59](https://lobste.rs/s/3gjcip/tiny_character_level_language_diffusion) - [A Tiny, Character-Level Language Diffusion Model Trained on Shakespeare](https://github.com/nathan-barry/tiny-diffusion)
* [2025-11-16, 14:29:30](https://lobste.rs/s/ddhd8c/brimstone_new_javascript_engine_written) - [brimstone: New JavaScript engine written in Rust](https://github.com/Hans-Halverson/brimstone)
* [2025-11-16, 13:59:19](https://news.ycombinator.com/item?id=45945202) - [Running the \&quot;Reflections on Trusting Trust\&quot; Compiler (2023)](https://research.swtch.com/nih)
* [2025-11-16, 13:58:06](https://lobste.rs/s/9vqlf8/production_grade_container_deployment) - [Production-Grade Container Deployment with Podman Quadlets](https://blog.hofstede.it/production-grade-container-deployment-with-podman-quadlets/)
* [2025-11-16, 13:25:32](https://news.ycombinator.com/item?id=45944969) - [Garbage collection is useful](https://dubroy.com/blog/garbage-collection-is-useful/)
* [2025-11-16, 13:15:50](https://news.ycombinator.com/item?id=45944906) - [Vintage Large Language Models](https://owainevans.github.io/talk-transcript.html)
* [2025-11-16, 12:34:00](https://hardware.slashdot.org/story/25/11/15/0633205/solar-and-wind-are-covering-all-new-power-demand-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Solar and Wind are Covering All New Power Demand in 2025](https://hardware.slashdot.org/story/25/11/15/0633205/solar-and-wind-are-covering-all-new-power-demand-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-16, 11:41:10](https://news.ycombinator.com/item?id=45944337) - [Brimstone: ES2025 JavaScript engine written in Rust](https://github.com/Hans-Halverson/brimstone)
* [2025-11-16, 11:32:39](https://news.ycombinator.com/item?id=45944296) - [Anthropic’s paper smells like bullshit](https://djnn.sh/posts/anthropic-s-paper-smells-like-bullshit/)
* [2025-11-16, 11:07:34](https://lobste.rs/s/50jlhk/programming_languages_age_ai_agents) - [Programming Languages in the Age of \&quot;AI\&quot; Agents](https://alexn.org/blog/2025/11/16/programming-languages-in-the-age-of-ai-agents/)
* [2025-11-16, 10:58:00](https://soylentnews.org/article.pl?sid=25/11/15/045217&amp;from=rss) - [AI Resistance: Who Says No to AI and Why?](https://soylentnews.org/article.pl?sid=25/11/15/045217&amp;from=rss)
* [2025-11-16, 10:15:50](https://lobste.rs/s/vh4tzd/librepods_airpods_liberated_from_apple_s) - [librepods: AirPods liberated from Apple&apos;s ecosystem](https://github.com/kavishdevar/librepods)
* [2025-11-16, 08:43:22](https://lobste.rs/s/m7jvhl/jonathan_blow_on_programming_language) - [Jonathan Blow On Programming Language Design](https://youtu.be/e6crOMC9WCE)
* [2025-11-16, 08:34:00](https://entertainment.slashdot.org/story/25/11/16/0827245/holy-winamp-opera-puts-a-music-visualizer-inside-its-browser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Holy Winamp! Opera Puts a Music Visualizer Inside Its Browser&apos;](https://entertainment.slashdot.org/story/25/11/16/0827245/holy-winamp-opera-puts-a-music-visualizer-inside-its-browser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-16, 06:17:00](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss) - [Australians to Get Three Hours of Free Electricity Every Day Under Solar Scheme](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss)
* [2025-11-16, 05:58:00](https://developers.slashdot.org/story/25/11/16/0516224/could-c-overtake-java-in-tiobes-programming-language-popularity-rankings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could C# Overtake Java in TIOBE&apos;s Programming Language Popularity Rankings?](https://developers.slashdot.org/story/25/11/16/0516224/could-c-overtake-java-in-tiobes-programming-language-popularity-rankings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-16, 03:58:00](https://it.slashdot.org/story/25/11/16/0355217/copy-and-paste-now-exceeds-file-transferring-as-the-top-corporate-data-exfiltration-vector?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Copy-and-Paste Now Exceeds File Transferring as the Top Corporate Data Exfiltration Vector](https://it.slashdot.org/story/25/11/16/0355217/copy-and-paste-now-exceeds-file-transferring-as-the-top-corporate-data-exfiltration-vector?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-16, 02:04:05](https://lobste.rs/s/iszli1/when_did_people_favor_composition_over) - [When did people favor composition over inheritance?](https://www.sicpers.info/2025/11/when-did-people-favor-composition-over-inheritance/)
* [2025-11-16, 01:36:00](https://soylentnews.org/article.pl?sid=25/11/15/0341210&amp;from=rss) - [FreeBSD: Reproducible Rootless Builds and Moving From Windows to This Linux Chaos Alternative](https://soylentnews.org/article.pl?sid=25/11/15/0341210&amp;from=rss)
* [2025-11-16, 01:34:00](https://yro.slashdot.org/story/25/11/16/0112236/google-begins-aggresively-using-the-law-to-stop-text-message-scams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Begins Aggresively Using the Law To Stop Text Message Scams](https://yro.slashdot.org/story/25/11/16/0112236/google-begins-aggresively-using-the-law-to-stop-text-message-scams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-16, 01:02:55](https://lobste.rs/s/uyqvhe/finding_cpu_design_bug_xbox_360_2018) - [Finding a CPU Design Bug in the Xbox 360 (2018)](https://randomascii.wordpress.com/2018/01/07/finding-a-cpu-design-bug-in-the-xbox-360/)
* [2025-11-16, 00:22:00](https://tech.slashdot.org/story/25/11/16/004220/a-quantum-error-correction-breakthrough?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Quantum Error Correction Breakthrough?](https://tech.slashdot.org/story/25/11/16/004220/a-quantum-error-correction-breakthrough?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-16, 00:01:25](https://news.ycombinator.com/item?id=45941596) - [AirPods libreated from Apple&apos;s ecosystem](https://github.com/kavishdevar/librepods)
* [2025-11-15, 23:27:18](https://lobste.rs/s/d1jdeu/blocking_llm_crawlers_without) - [Blocking LLM crawlers, without JavaScript](https://www.owl.is/blogg/blocking-crawlers-without-javascript/)
* [2025-11-15, 23:22:00](https://news.slashdot.org/story/25/11/15/2123207/fear-drives-the-ai-cold-war-between-america-and-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fear Drives the AI &apos;Cold War&apos; Between America and China](https://news.slashdot.org/story/25/11/15/2123207/fear-drives-the-ai-cold-war-between-america-and-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 22:22:00](https://hardware.slashdot.org/story/25/11/15/1943200/ev-sales-are-still-rising-they-have-not-slumped?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EV Sales Are Still Rising.  They Have Not Slumped](https://hardware.slashdot.org/story/25/11/15/1943200/ev-sales-are-still-rising-they-have-not-slumped?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 22:11:53](https://lobste.rs/s/rowk9p/1900_bug_bounty_fix_lenovo_legion_pro_7) - [$1900 Bug Bounty to Fix the Lenovo Legion Pro 7 16IAX10H&apos;s Speakers on Linux](https://github.com/nadimkobeissi/16iax10h-linux-sound-saga)
* [2025-11-15, 21:22:00](https://tech.slashdot.org/story/25/11/15/2023242/while-meta-crawls-the-web-for-ai-training-data-bruce-ediger-pranks-them-with-endless-bad-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [While Meta Crawls the Web for AI Training Data, Bruce Ediger Pranks Them with Endless Bad Data](https://tech.slashdot.org/story/25/11/15/2023242/while-meta-crawls-the-web-for-ai-training-data-bruce-ediger-pranks-them-with-endless-bad-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 20:51:00](https://soylentnews.org/article.pl?sid=25/11/13/2136225&amp;from=rss) - [Lego: The Final Frontier. Star Trek&apos;s First Set Beams Down in 3,600 Pieces](https://soylentnews.org/article.pl?sid=25/11/13/2136225&amp;from=rss)
* [2025-11-15, 20:22:00](https://games.slashdot.org/story/25/11/15/0521203/sony-killed-this-game-in-2024-three-developers-reverse-engineered-it-back-to-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Killed This Game in 2024.  Three Developers Reverse-Engineered It Back to Life](https://games.slashdot.org/story/25/11/15/0521203/sony-killed-this-game-in-2024-three-developers-reverse-engineered-it-back-to-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 16:08:00](https://soylentnews.org/article.pl?sid=25/11/13/2125207&amp;from=rss) - [New Project Brings Strong Linux Compatibility to More Classic Windows Games](https://soylentnews.org/article.pl?sid=25/11/13/2125207&amp;from=rss)
* [2025-11-15, 14:27:42](https://lobste.rs/s/4soie8/inconceivable_types_rust_how_make_self) - [The Inconceivable Types of Rust: How to Make Self-Borrows Safe](https://blog.polybdenum.com/2024/06/07/the-inconceivable-types-of-rust-how-to-make-self-borrows-safe.html)
* [2025-11-15, 13:55:31](https://lobste.rs/s/uc3a3b/how_write_type_safe_generics_c) - [How to write type-safe generics in C](https://raphgl.github.io/blog/generics-in-c.html)
* [2025-11-15, 12:31:20](https://news.ycombinator.com/item?id=45936999) - [Your Land, My Land (Offrange) – Lithium vs. Lettuce in the Imperial Valley, CA](https://ambrook.com/offrange/photo-essay/lithium-v-lettuce)
* [2025-11-15, 11:23:00](https://soylentnews.org/article.pl?sid=25/11/13/2130222&amp;from=rss) - [Gary McKinnon: He Was Looking for Aliens - and Became the No. 1 Enemy of the State](https://soylentnews.org/article.pl?sid=25/11/13/2130222&amp;from=rss)
* [2025-11-15, 06:36:00](https://soylentnews.org/article.pl?sid=25/11/13/0410238&amp;from=rss) - [Brussels Knifes Privacy to Feed the AI Boom](https://soylentnews.org/article.pl?sid=25/11/13/0410238&amp;from=rss)
* [2025-11-15, 01:54:00](https://soylentnews.org/article.pl?sid=25/11/13/0359225&amp;from=rss) - [How to Declutter, Quiet Down, and Take the AI Out of Windows 11 25H2](https://soylentnews.org/article.pl?sid=25/11/13/0359225&amp;from=rss)
* [2025-11-14, 21:12:00](https://soylentnews.org/article.pl?sid=25/11/13/0353240&amp;from=rss) - [What Do We Do If SETI is Successful?](https://soylentnews.org/article.pl?sid=25/11/13/0353240&amp;from=rss)
* [2025-11-14, 16:31:00](https://soylentnews.org/article.pl?sid=25/11/13/0325258&amp;from=rss) - [Google Confirms AI Search Will Have Ads, but They May Look Different](https://soylentnews.org/article.pl?sid=25/11/13/0325258&amp;from=rss)
* [2025-11-14, 11:47:00](https://soylentnews.org/article.pl?sid=25/11/13/0318258&amp;from=rss) - [Russian Hackers Abuse Hyper-V to Hide Malware in Linux VMs](https://soylentnews.org/article.pl?sid=25/11/13/0318258&amp;from=rss)
* [2025-11-14, 06:59:00](https://soylentnews.org/article.pl?sid=25/11/13/0314253&amp;from=rss) - [Your Worn-Out Keyboard Keys Reveal More About You Than You Think](https://soylentnews.org/article.pl?sid=25/11/13/0314253&amp;from=rss)
* [2025-11-14, 02:12:00](https://soylentnews.org/article.pl?sid=25/11/13/033247&amp;from=rss) - [Bombshell Report Exposes How Meta Relied on Scam Ad Profits to Fund AI](https://soylentnews.org/article.pl?sid=25/11/13/033247&amp;from=rss)
* [2025-11-14, 01:42:01](https://news.ycombinator.com/item?id=45922907) - [Holes (1970) [pdf]](https://rintintin.colorado.edu/~vancecd/phil375/Lewis1.pdf)
* [2025-11-13, 21:23:00](https://soylentnews.org/article.pl?sid=25/11/12/1214254&amp;from=rss) - [Google&apos;s Gemini Deep Research Can Now Read Your Gmail and Rummage Through Google Drive](https://soylentnews.org/article.pl?sid=25/11/12/1214254&amp;from=rss)
* [2025-11-13, 16:41:00](https://soylentnews.org/article.pl?sid=25/11/12/124239&amp;from=rss) - [Microsoft Task Manager Bug Spawns New Processes](https://soylentnews.org/article.pl?sid=25/11/12/124239&amp;from=rss)
* [2025-11-13, 11:57:00](https://soylentnews.org/article.pl?sid=25/11/11/0337247&amp;from=rss) - [Want to be More Persuasive? Talk With Your Hands, Study Finds](https://soylentnews.org/article.pl?sid=25/11/11/0337247&amp;from=rss)
* [2025-11-13, 07:05:00](https://soylentnews.org/article.pl?sid=25/11/11/0336223&amp;from=rss) - [Hyundai&apos;s New EV Training Center Opens Amid Market Turmoil](https://soylentnews.org/article.pl?sid=25/11/11/0336223&amp;from=rss)
* [2025-11-13, 02:33:00](https://soylentnews.org/article.pl?sid=25/11/11/0334251&amp;from=rss) - [Sun: First Glimpse of Polar Magnetic Field in Motion](https://soylentnews.org/article.pl?sid=25/11/11/0334251&amp;from=rss)
* [2025-11-12, 21:49:00](https://soylentnews.org/article.pl?sid=25/11/10/1942230&amp;from=rss) - [Brewing Controversy: How Coffee Sparked Fierce Debate in the 16th-Century](https://soylentnews.org/article.pl?sid=25/11/10/1942230&amp;from=rss)
* [2025-11-12, 17:05:00](https://soylentnews.org/article.pl?sid=25/11/10/1939208&amp;from=rss) - [NASA Confirms Voyager Spacecraft Has Encountered a “Wall of Fire” at the Edge of the Solar System](https://soylentnews.org/article.pl?sid=25/11/10/1939208&amp;from=rss)
* [2025-11-12, 12:24:00](https://soylentnews.org/article.pl?sid=25/11/10/1931219&amp;from=rss) - [FBI Tries to Unmask Owner of Infamous Archive.is Site](https://soylentnews.org/article.pl?sid=25/11/10/1931219&amp;from=rss)
* [2025-11-12, 07:34:00](https://soylentnews.org/article.pl?sid=25/11/10/1925212&amp;from=rss) - [Trinity Desktop Environment R14.1.5 Released with Support for Debian Trixie](https://soylentnews.org/article.pl?sid=25/11/10/1925212&amp;from=rss)
* [2025-11-12, 02:51:00](https://soylentnews.org/article.pl?sid=25/11/10/122217&amp;from=rss) - [The Art and Science of Negotiation](https://soylentnews.org/article.pl?sid=25/11/10/122217&amp;from=rss)
