# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Machine Learning

* [R-Zero: Self-Evolving Reasoning LLM from Zero Data](https://arxiv.org/abs/2508.05004) - A breakthrough exploration into a self-evolving large language model requiring zero preloaded data. [Comments](https://news.ycombinator.com/item?id=45192194)

* [Microsoft To Use Some AI From Anthropic In Shift From OpenAI](https://slashdot.org/story/25/09/09/238208/microsoft-to-use-some-ai-from-anthropic-in-shift-from-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft pivots to integrate Anthropic AI into its offerings, signaling a strategic move away from OpenAI. [Comments](https://slashdot.org/story/25/09/09/238208/microsoft-to-use-some-ai-from-anthropic-in-shift-from-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [How Google Is Already Monetizing Its AI Services To Generate Revenue](https://tech.slashdot.org/story/25/09/09/2118248/how-google-is-already-monetizing-its-ai-services-to-generate-revenue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A look at Google's strategies for turning its AI developments into profitable ventures. [Comments](https://tech.slashdot.org/story/25/09/09/2118248/how-google-is-already-monetizing-its-ai-services-to-generate-revenue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Space Exploration and Science

* [NASA finds Titan's lakes may be creating vesicles with primitive cell walls](https://www.sciencedaily.com/releases/2025/08/250831112449.htm) - Research suggests Titan's lakes are capable of forming structures resembling primitive cells, deepening our understanding of life's origins. [Comments](https://news.ycombinator.com/item?id=45191347)

* [Congress and Trump May Compromise on the SLS Rocket by Axing its Costly Upper Stage](https://soylentnews.org/article.pl?sid=25/09/09/1559244&amp;from=rss) - A budget-related compromise could significantly reshape NASA's deep-space exploration ambitions. [Comments](https://soylentnews.org/article.pl?sid=25/09/09/1559244&amp;from=rss)

## Cutting-Edge Technology Innovations

* [The Weird OS Built Around a Database](https://www.youtube.com/watch?v=pWZBQMRmW7k) - Discover a unique operating system that integrates directly with a database, challenging conventional OS designs. [Comments](https://lobste.rs/s/cwdcve/weird_os_built_around_database)

* [Hypervisor in 1k Lines](https://1000hv.seiya.me/en) - A minimalistic take on creating a functional hypervisor with only 1,000 lines of code. [Comments](https://news.ycombinator.com/item?id=45190777)

* [E-paper display reaches the realm of LCD screens](https://spectrum.ieee.org/e-paper-display-modos) - A breakthrough in e-paper technology could make it as vibrant and practical as conventional LCDs. [Comments](https://news.ycombinator.com/item?id=45185756)

## Innovative Applications of Technology

* [I replaced Animal Crossing's dialogue with a live LLM by hacking GameCube memory](https://joshfonseca.com/blogs/animal-crossing-llm) - An inventive integration of modern LLMs into a retro GameCube game creates dynamic in-game dialogue. [Comments](https://news.ycombinator.com/item?id=45192655)

* [Building a DOOM-like multiplayer shooter in pure SQL](https://cedardb.com/blog/doomql/) - An exploration of database capabilities by replicating a DOOM-like game entirely in SQL. [Comments](https://lobste.rs/s/qkborx/building_doom_like_multiplayer_shooter)

## Health and Medicine

* [Immunotherapy drug clinical trial results: half of tumors shrink or disappear](https://www.rockefeller.edu/news/38120-immunotherapy-drug-eliminates-aggressive-cancers-in-clinical-trial/) - Promising results from a clinical trial show dramatic success in treating aggressive cancers. [Comments](https://news.ycombinator.com/item?id=45188945)

## Historical and Cultural Insights

* [Bill Gates’ 48-Year-Old Microsoft 6502 BASIC Goes Open Source](https://soylentnews.org/article.pl?sid=25/09/05/0544216&amp;from=rss) - The software that kicked off Microsoft is now available as open source, offering a glimpse into computing history. [Comments](https://soylentnews.org/article.pl?sid=25/09/05/0544216&amp;from=rss)

* [All 54 lost clickwheel iPod games have now been preserved for posterity](https://arstechnica.com/gaming/2025/09/all-54-lost-clickwheel-ipod-games-have-now-been-preserved-for-posterity/) - A celebration of digital preservation as rare iPod games are archived for future generations. [Comments](https://news.ycombinator.com/item?id=45171733)

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

* [2025-09-10, 06:13:00](https://soylentnews.org/article.pl?sid=25/09/09/1559244&amp;from=rss) - [Congress and Trump May Compromise on the SLS Rocket by Axing its Costly Upper Stage](https://soylentnews.org/article.pl?sid=25/09/09/1559244&amp;from=rss)
* [2025-09-10, 06:10:50](https://lobste.rs/s/cwdcve/weird_os_built_around_database) - [The Weird OS Built Around a Database](https://www.youtube.com/watch?v=pWZBQMRmW7k)
* [2025-09-10, 02:59:48](https://news.ycombinator.com/item?id=45192655) - [I replaced Animal Crossing&apos;s dialogue with a live LLM by hacking GameCube memory](https://joshfonseca.com/blogs/animal-crossing-llm)
* [2025-09-10, 02:02:17](https://news.ycombinator.com/item?id=45192194) - [R-Zero: Self-Evolving Reasoning LLM from Zero Data](https://arxiv.org/abs/2508.05004)
* [2025-09-10, 01:28:00](https://soylentnews.org/article.pl?sid=25/09/09/1229205&amp;from=rss) - [Your Red is My Red, at Least to Our Brains](https://soylentnews.org/article.pl?sid=25/09/09/1229205&amp;from=rss)
* [2025-09-10, 01:25:00](https://yro.slashdot.org/story/25/09/09/2314209/executive-director-cindy-cohn-will-step-down-after-25-years-with-eff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Executive Director Cindy Cohn Will Step Down After 25 Years With EFF](https://yro.slashdot.org/story/25/09/09/2314209/executive-director-cindy-cohn-will-step-down-after-25-years-with-eff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-10, 00:45:00](https://slashdot.org/story/25/09/09/238208/microsoft-to-use-some-ai-from-anthropic-in-shift-from-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft To Use Some AI From Anthropic In Shift From OpenAI](https://slashdot.org/story/25/09/09/238208/microsoft-to-use-some-ai-from-anthropic-in-shift-from-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-10, 00:10:40](https://news.ycombinator.com/item?id=45191347) - [NASA finds Titan&apos;s lakes may be creating vesicles with primitive cell walls](https://www.sciencedaily.com/releases/2025/08/250831112449.htm)
* [2025-09-10, 00:02:00](https://yro.slashdot.org/story/25/09/09/2129252/hhs-asks-all-employees-to-start-using-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HHS Asks All Employees To Start Using ChatGPT](https://yro.slashdot.org/story/25/09/09/2129252/hhs-asks-all-employees-to-start-using-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 23:20:00](https://tech.slashdot.org/story/25/09/09/2118248/how-google-is-already-monetizing-its-ai-services-to-generate-revenue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Google Is Already Monetizing Its AI Services To Generate Revenue](https://tech.slashdot.org/story/25/09/09/2118248/how-google-is-already-monetizing-its-ai-services-to-generate-revenue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 23:13:59](https://news.ycombinator.com/item?id=45190777) - [Hypervisor in 1k Lines](https://1000hv.seiya.me/en)
* [2025-09-09, 22:40:00](https://science.slashdot.org/story/25/09/09/218227/us-high-school-students-lose-ground-in-math-and-reading-continuing-yearslong-decline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US High School Students Lose Ground In Math and Reading, Continuing Yearslong Decline](https://science.slashdot.org/story/25/09/09/218227/us-high-school-students-lose-ground-in-math-and-reading-continuing-yearslong-decline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 22:02:00](https://slashdot.org/story/25/09/09/213214/intel-ousts-ceo-of-products-ending-30-year-career?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Ousts CEO of Products, Ending 30-Year Career](https://slashdot.org/story/25/09/09/213214/intel-ousts-ceo-of-products-ending-30-year-career?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 21:25:00](https://apple.slashdot.org/story/25/09/09/2054205/apple-adds-hypertension-and-sleep-quality-monitoring-to-watch-ultra-3-series-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Adds Hypertension and Sleep-Quality Monitoring To Watch Ultra 3, Series 11](https://apple.slashdot.org/story/25/09/09/2054205/apple-adds-hypertension-and-sleep-quality-monitoring-to-watch-ultra-3-series-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 21:13:12](https://lobste.rs/s/jz3eml/last_programmers) - [The Last Programmers](https://www.xipu.li/posts/the-last-programmers)
* [2025-09-09, 20:55:16](https://news.ycombinator.com/item?id=45188945) - [Immunotherapy drug clinical trial results: half of tumors shrink or disappear](https://www.rockefeller.edu/news/38120-immunotherapy-drug-eliminates-aggressive-cancers-in-clinical-trial/)
* [2025-09-09, 20:45:00](https://hardware.slashdot.org/story/25/09/09/2043237/airpods-pro-3-arrive-with-heart-rate-sensing-live-translation-using-apple-intelligence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AirPods Pro 3 Arrive With Heart-Rate Sensing, Live Translation Using Apple Intelligence](https://hardware.slashdot.org/story/25/09/09/2043237/airpods-pro-3-arrive-with-heart-rate-sensing-live-translation-using-apple-intelligence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 20:43:00](https://soylentnews.org/article.pl?sid=25/09/08/1814241&amp;from=rss) - [Microsoft Software Reselling Dispute Heads Back to UK Court](https://soylentnews.org/article.pl?sid=25/09/08/1814241&amp;from=rss)
* [2025-09-09, 20:24:10](https://lobste.rs/s/pf12ga/i_don_t_want_ai_agents_controlling_my) - [I don’t want AI agents controlling my laptop](https://sophiebits.com/2025/09/09/ai-agents-security)
* [2025-09-09, 20:17:32](https://lobste.rs/s/zmwje4/bloat_edge_case_first_libraries) - [The bloat of edge-case first libraries](https://43081j.com/2025/09/bloat-of-edge-case-libraries)
* [2025-09-09, 19:31:00](https://it.slashdot.org/story/25/09/09/1932201/canon-is-bringing-back-a-point-and-shoot-from-2016-with-fewer-features-and-a-higher-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canon is Bringing Back a Point-and-Shoot From 2016 With Fewer Features and a Higher Price ](https://it.slashdot.org/story/25/09/09/1932201/canon-is-bringing-back-a-point-and-shoot-from-2016-with-fewer-features-and-a-higher-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 19:20:39](https://lobste.rs/s/816ygs/how_prove_false_statements_practical) - [How to Prove False Statements: Practical Attacks on Fiat-Shamir](https://eprint.iacr.org/2025/118.pdf)
* [2025-09-09, 18:43:00](https://mobile.slashdot.org/story/25/09/09/1844201/apple-launches-iphone-17-lineup-featuring-ultra-thin-56mm-iphone-air?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Launches iPhone 17 Lineup Featuring Ultra-Thin 5.6mm iPhone Air](https://mobile.slashdot.org/story/25/09/09/1844201/apple-launches-iphone-17-lineup-featuring-ultra-thin-56mm-iphone-air?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 18:25:03](https://news.ycombinator.com/item?id=45186265) - [Memory Integrity Enforcement](https://security.apple.com/blog/memory-integrity-enforcement/)
* [2025-09-09, 18:12:51](https://news.ycombinator.com/item?id=45186015) - [iPhone Air](https://www.apple.com/newsroom/2025/09/introducing-iphone-air-a-powerful-new-iphone-with-a-breakthrough-design/)
* [2025-09-09, 18:12:28](https://news.ycombinator.com/item?id=45186011) - [Dropbox Paper mobile App Discontinuation](https://help.dropbox.com/installs/paper-mobile-discontinuation)
* [2025-09-09, 18:11:00](https://news.slashdot.org/story/25/09/09/1811238/reuters-withdraws-xi-putin-longevity-video-after-china-state-tv-pulls-legal-permission-to-use-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reuters Withdraws Xi, Putin Longevity Video After China State TV Pulls Legal Permission To Use It](https://news.slashdot.org/story/25/09/09/1811238/reuters-withdraws-xi-putin-longevity-video-after-china-state-tv-pulls-legal-permission-to-use-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 18:04:49](https://news.ycombinator.com/item?id=45185875) - [Tomorrow&apos;s emoji today: Unicode 17.0](https://jenniferdaniel.substack.com/p/tomorrows-emoji-today-unicode-170)
* [2025-09-09, 17:57:35](https://news.ycombinator.com/item?id=45185756) - [E-paper display reaches the realm of LCD screens](https://spectrum.ieee.org/e-paper-display-modos)
* [2025-09-09, 17:42:09](https://lobste.rs/s/nut4i6/testing_compiler_optimizations_your) - [Testing the compiler optimizations your code relies on](https://pythonspeed.com/articles/testing-compiler-optimizations/)
* [2025-09-09, 17:21:00](https://it.slashdot.org/story/25/09/09/177221/microsoft-forces-workers-back-to-the-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Forces Workers Back To the Office](https://it.slashdot.org/story/25/09/09/177221/microsoft-forces-workers-back-to-the-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 16:40:00](https://news.slashdot.org/story/25/09/09/1535229/the-renewed-bid-to-end-quarterly-earnings-reports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Renewed Bid To End Quarterly Earnings Reports](https://news.slashdot.org/story/25/09/09/1535229/the-renewed-bid-to-end-quarterly-earnings-reports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 16:31:17](https://news.ycombinator.com/item?id=45184432) - [Microsoft is officially sending employees back to the office](https://www.businessinsider.com/microsoft-send-employees-back-to-office-rto-remote-work-2025-9)
* [2025-09-09, 16:27:41](https://news.ycombinator.com/item?id=45184368) - [ICE is using fake cell towers to spy on people&apos;s phones](https://www.forbes.com/sites/the-wiretap/2025/09/09/how-ice-is-using-fake-cell-towers-to-spy-on-peoples-phones/)
* [2025-09-09, 16:27:25](https://lobste.rs/s/h4j1vk/formatting_code_should_be_unnecessary) - [Formatting code should be unnecessary](https://maxleiter.com/blog/formatting)
* [2025-09-09, 16:11:39](https://lobste.rs/s/ukpdhb/new_experimental_go_api_for_json) - [A new experimental Go API for JSON](https://go.dev/blog/jsonv2-exp)
* [2025-09-09, 16:01:00](https://news.slashdot.org/story/25/09/09/1513203/us-created-911000-fewer-jobs-than-previously-thought-in-the-12-months-through-march?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Created 911,000 Fewer Jobs Than Previously Thought in the 12 Months Through March](https://news.slashdot.org/story/25/09/09/1513203/us-created-911000-fewer-jobs-than-previously-thought-in-the-12-months-through-march?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 15:59:00](https://soylentnews.org/article.pl?sid=25/09/08/1810222&amp;from=rss) - [Multiple Undersea Cable Cuts in the Red Sea, Hampering Internet Performance](https://soylentnews.org/article.pl?sid=25/09/08/1810222&amp;from=rss)
* [2025-09-09, 15:42:32](https://news.ycombinator.com/item?id=45183589) - [An attacker’s blunder gave us a look into their operations](https://www.huntress.com/blog/rare-look-inside-attacker-operation)
* [2025-09-09, 15:37:56](https://lobste.rs/s/xcbjqt/rich_already_answered) - [Rich Already Answered That](https://gist.github.com/reborg/dc8b0c96c397a56668905e2767fd697f)
* [2025-09-09, 15:34:48](https://lobste.rs/s/qkborx/building_doom_like_multiplayer_shooter) - [Building a DOOM-like multiplayer shooter in pure SQL](https://cedardb.com/blog/doomql/)
* [2025-09-09, 15:34:30](https://lobste.rs/s/n7i9vb/how_i_made_ruby_faster_than_ruby) - [How I Made Ruby Faster than Ruby](https://noteflakes.com/articles/2025-08-18-how-to-make-ruby-faster)
* [2025-09-09, 15:20:00](https://slashdot.org/story/25/09/09/1126247/no-alpha-left-in-public-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [No Alpha Left in Public Markets](https://slashdot.org/story/25/09/09/1126247/no-alpha-left-in-public-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 15:16:35](https://lobste.rs/s/vclmlx/apple_event_for_september_9th_2025) - [Apple Event for September 9th, 2025](https://www.apple.com/apple-events/)
* [2025-09-09, 15:12:18](https://news.ycombinator.com/item?id=45183050) - [Building a DOOM-like multiplayer shooter in pure SQL](https://cedardb.com/blog/doomql/)
* [2025-09-09, 15:11:26](https://news.ycombinator.com/item?id=45183029) - [We all dodged a bullet](https://xeiaso.net/notes/2025/we-dodged-a-bullet/)
* [2025-09-09, 15:04:54](https://lobste.rs/s/h7xdec/unauthorized_windows_386) - [Unauthorized Windows/386](https://virtuallyfun.com/2025/09/06/unauthorized-windows-386/)
* [2025-09-09, 14:54:32](https://news.ycombinator.com/item?id=45182770) - [A new experimental Go API for JSON](https://go.dev/blog/jsonv2-exp)
* [2025-09-09, 14:45:46](https://news.ycombinator.com/item?id=45182657) - [US High school students&apos; scores fall in reading and math](https://apnews.com/article/naep-reading-math-scores-12th-grade-c18d6e3fbc125f12948cc70cb85a520a)
* [2025-09-09, 14:25:55](https://news.ycombinator.com/item?id=45182381) - [Claude now has access to a server-side container environment](https://www.anthropic.com/news/create-files)
* [2025-09-09, 14:04:28](https://lobste.rs/s/imp0qy/all_you_need_is_ssh) - [All You Need Is SSH](https://wrongthink.link/posts/all-you-need-is-ssh/)
* [2025-09-09, 13:54:56](https://lobste.rs/s/s19nri/writing_book_age_open_source) - [Writing a book in the age of open source](https://blog.incrementalforgetting.tech/p/sculpting-a-book-the-chisel)
* [2025-09-09, 13:24:56](https://lobste.rs/s/aleuv7/how_build_python_code_with_bazel_why) - [How to Build Python Code with Bazel (and Why)](https://ohadravid.github.io/posts/2025-09-hello-bazel/)
* [2025-09-09, 13:23:15](https://lobste.rs/s/mn6ce3/replacing_sgx_with_github_actions_how) - [Replacing SGX with GitHub Actions: Or how to turn GitHub Actions into a trusted computing oracle](https://www.ethanheilman.com/x/35/index.html)
* [2025-09-09, 13:20:30](https://lobste.rs/s/9m1tto/term_everything_run_any_gui_app_terminal) - [term.everything: Run any GUI app in the terminal](https://github.com/mmulet/term.everything)
* [2025-09-09, 11:14:00](https://soylentnews.org/article.pl?sid=25/09/08/1210241&amp;from=rss) - [Recreating &apos;The Magnificient Ambersons&apos; With AI](https://soylentnews.org/article.pl?sid=25/09/08/1210241&amp;from=rss)
* [2025-09-09, 10:55:04](https://lobste.rs/s/fumoq5/batched_critical_sections) - [Batched Critical Sections](http://kprotty.me/2025/09/08/batched-critical-sections.html)
* [2025-09-09, 10:10:15](https://news.ycombinator.com/item?id=45179939) - [DuckDB NPM packages 1.3.3 and 1.29.2 compromised with malware](https://github.com/duckdb/duckdb-node/security/advisories/GHSA-w62p-hx95-gf2c)
* [2025-09-09, 08:46:53](https://news.ycombinator.com/item?id=45179304) - [Anthropic judge rejects $1.5B AI copyright settlement](https://news.bloomberglaw.com/ip-law/anthropic-judge-blasts-copyright-pact-as-nowhere-close-to-done)
* [2025-09-09, 06:27:00](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss) - [The World&apos;s Largest Iceberg is Rapidly Breaking Apart and Melting Away](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss)
* [2025-09-09, 06:10:15](https://news.ycombinator.com/item?id=45178041) - [Mistral raises 1.7B€, partners with ASML](https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai)
* [2025-09-09, 05:16:23](https://news.ycombinator.com/item?id=45177683) - [YouTube is a mysterious monopoly](https://anderegg.ca/2025/09/08/youtube-is-a-mysterious-monopoly)
* [2025-09-09, 03:08:00](https://lobste.rs/s/9oneuy/liquid_glass_browser_refraction_with_css) - [Liquid Glass in the Browser: Refraction with CSS and SVG](https://kube.io/blog/liquid-glass-css-svg/)
* [2025-09-09, 01:39:00](https://soylentnews.org/article.pl?sid=25/09/08/0254218&amp;from=rss) - [Mazda Patents Six-Stroke Gas Engine](https://soylentnews.org/article.pl?sid=25/09/08/0254218&amp;from=rss)
* [2025-09-08, 22:47:55](https://lobste.rs/s/vjuviw/first_ziglang_org_outage) - [The First ziglang.org Outage](https://ziglang.org/news/first-outage/)
* [2025-09-08, 20:53:00](https://soylentnews.org/article.pl?sid=25/09/07/1713251&amp;from=rss) - [Chagas Disease, Which Can be Deadly, is Now Considered Endemic in the U.S.](https://soylentnews.org/article.pl?sid=25/09/07/1713251&amp;from=rss)
* [2025-09-08, 19:55:15](https://lobste.rs/s/tiutfj/wikimedia_sunsets_separate_mobile) - [Wikimedia sunsets separate mobile domains](https://www.mediawiki.org/wiki/Requests_for_comment/Mobile_domain_sunsetting/2025_Announcement)
* [2025-09-08, 18:09:25](https://news.ycombinator.com/item?id=45171733) - [All 54 lost clickwheel iPod games have now been preserved for posterity](https://arstechnica.com/gaming/2025/09/all-54-lost-clickwheel-ipod-games-have-now-been-preserved-for-posterity/)
* [2025-09-08, 16:56:26](https://lobste.rs/s/w9nx3l/introducing_signal_secure_backups) - [Introducing Signal Secure Backups](https://signal.org/blog/introducing-secure-backups/)
* [2025-09-08, 16:10:00](https://soylentnews.org/article.pl?sid=25/09/07/141204&amp;from=rss) - [SpaceX Dragon Reboosts the International Space Station](https://soylentnews.org/article.pl?sid=25/09/07/141204&amp;from=rss)
* [2025-09-08, 16:07:27](https://lobste.rs/s/rojvul/fixing_my_gripes_with_github_using_gleam) - [Fixing my gripes with GitHub using Gleam and a Raspberry Pi](https://giacomocavalieri.me/posts/fixing-my-gripes-with-github-using-gleam-and-a-raspberry-pi)
* [2025-09-08, 12:55:13](https://lobste.rs/s/zvdtdn/package_managers_are_evil) - [Package Managers are Evil](https://www.gingerbill.org/article/2025/09/08/package-managers-are-evil/)
* [2025-09-08, 12:26:15](https://news.ycombinator.com/item?id=45167436) - [Go for Bash Programmers – Part II: CLI Tools](https://github.com/go-monk/from-bash-to-go-part-ii)
* [2025-09-08, 11:25:00](https://soylentnews.org/article.pl?sid=25/09/07/1358242&amp;from=rss) - [New China-Aligned Crew Poisons Windows Servers for SEO Fraud](https://soylentnews.org/article.pl?sid=25/09/07/1358242&amp;from=rss)
* [2025-09-08, 09:29:36](https://news.ycombinator.com/item?id=45166245) - [Anscombe&apos;s Quartet](https://en.wikipedia.org/wiki/Anscombe%27s_quartet)
* [2025-09-08, 06:43:00](https://soylentnews.org/article.pl?sid=25/09/07/1352214&amp;from=rss) - [Trump Family&apos;s Crypto Token Just Made Them $5 Billion Richer](https://soylentnews.org/article.pl?sid=25/09/07/1352214&amp;from=rss)
* [2025-09-08, 02:00:00](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss) - [Microsoft Shows Off its Latest Analog Optical Computer](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss)
* [2025-09-07, 21:26:00](https://soylentnews.org/article.pl?sid=25/09/07/005257&amp;from=rss) - [This Unlikely Chemical Could be a Powerful Weapon Against Climate Change](https://soylentnews.org/article.pl?sid=25/09/07/005257&amp;from=rss)
* [2025-09-07, 16:47:00](https://soylentnews.org/article.pl?sid=25/09/07/001206&amp;from=rss) - [What the Hell is Going on Right Now?](https://soylentnews.org/article.pl?sid=25/09/07/001206&amp;from=rss)
* [2025-09-07, 13:48:25](https://news.ycombinator.com/item?id=45158118) - [Show HN: Bottlefire – Build single-executable microVMs from Docker images](https://bottlefire.dev/)
* [2025-09-07, 11:56:00](https://soylentnews.org/article.pl?sid=25/09/06/1527240&amp;from=rss) - [France Fines Google, SHEIN for Undercooked Cookie Policies](https://soylentnews.org/article.pl?sid=25/09/06/1527240&amp;from=rss)
* [2025-09-07, 09:20:56](https://news.ycombinator.com/item?id=45156671) - [Cassette Logic: technology that never dies but is already dead](https://www.differentshelf.com/cassette-logic/)
* [2025-09-07, 08:22:54](https://news.ycombinator.com/item?id=45156414) - [Things you can do with a debugger but not with print debugging](https://mahesh-hegde.github.io/posts/what_debugger_can/)
* [2025-09-07, 07:11:00](https://soylentnews.org/article.pl?sid=25/09/06/1514247&amp;from=rss) - [Nvidia&apos;s Next-Gen AI Chip Could Be Double  the Price of H20 If China Export is Approved](https://soylentnews.org/article.pl?sid=25/09/06/1514247&amp;from=rss)
* [2025-09-07, 02:27:00](https://soylentnews.org/article.pl?sid=25/09/06/1510251&amp;from=rss) - [Porsche&apos;s New Cayenne Will Charge Itself Like No Other EV](https://soylentnews.org/article.pl?sid=25/09/06/1510251&amp;from=rss)
* [2025-09-07, 00:25:00](https://news.ycombinator.com/item?id=45154142) - [Axial twist theory](https://en.wikipedia.org/wiki/Axial_twist_theory)
* [2025-09-06, 21:42:00](https://soylentnews.org/article.pl?sid=25/09/05/0544216&amp;from=rss) - [Bill Gates’ 48-Year-Old Microsoft 6502 BASIC Goes Open Source](https://soylentnews.org/article.pl?sid=25/09/05/0544216&amp;from=rss)
* [2025-09-06, 19:39:00](https://news.ycombinator.com/item?id=45152252) - [How to study people who are drunk](https://www.economist.com/science-and-technology/2025/09/03/how-to-study-people-who-are-very-drunk)
* [2025-09-06, 16:59:00](https://soylentnews.org/article.pl?sid=25/09/05/0540222&amp;from=rss) - [Jury Orders Google to Pay $425 Million for Unlawfully Tracking Millions of Users](https://soylentnews.org/article.pl?sid=25/09/05/0540222&amp;from=rss)
* [2025-09-06, 12:13:00](https://soylentnews.org/article.pl?sid=25/09/05/0536245&amp;from=rss) - [China Likely to Land on Moon Before US Does Again](https://soylentnews.org/article.pl?sid=25/09/05/0536245&amp;from=rss)
* [2025-09-06, 07:29:00](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss) - [New Hollow-Core Fiber Outperforms Glass, Pushing Data Closer to Light Speed](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss)
* [2025-09-06, 02:45:00](https://soylentnews.org/article.pl?sid=25/09/05/0259211&amp;from=rss) - [The Fight Against Labeling Long-Term Streaming Rentals as “Purchases” You “Buy”](https://soylentnews.org/article.pl?sid=25/09/05/0259211&amp;from=rss)
