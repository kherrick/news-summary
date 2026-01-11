# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and its Impacts

* [LLM poetry and the "greatness" question: Experiments by Gwern and Mercor](https://hollisrobbinsanecdotal.substack.com/p/llm-poetry-and-the-greatness-question) - This article explores the intersection of AI and poetry, probing the question of AI's ability to create 'great' art. [Comments](https://news.ycombinator.com/item?id=46575268)

* [Google: Don't make "bite-sized" content for LLMs](https://arstechnica.com/google/2026/01/google-dont-make-bite-sized-content-for-llms-if-you-care-about-search-rank/) - Google issues guidance against creating short, concise content tailored for large language models (LLMs). [Comments](https://news.ycombinator.com/item?id=46575127)

* [AI Fails at Most Remote Work, Researchers Find](https://it.slashdot.org/story/26/01/10/1926209/ai-fails-at-most-remote-work-researchers-find?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A study reveals AI struggles with tasks related to remote work. [Comments](https://it.slashdot.org/story/26/01/10/1926209/ai-fails-at-most-remote-work-researchers-find?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Innovative Technology and Development

* [Nature-Inspired Computers Are Shockingly Good At Math](https://science.slashdot.org/story/26/01/10/0628251/nature-inspired-computers-are-shockingly-good-at-math?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A study showcases how nature-inspired computational models excel in solving complex mathematical problems. [Comments](https://science.slashdot.org/story/26/01/10/0628251/nature-inspired-computers-are-shockingly-good-at-math?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [China's 'Artificial Sun' Breaks Nuclear Fusion Limit Thought to Be Impossible](https://hardware.slashdot.org/story/26/01/10/0556228/chinas-artificial-sun-breaks-nuclear-fusion-limit-thought-to-be-impossible?utm_source=rss1.0mainlinkanon&utm_medium=feed) - China's progress in nuclear fusion reveals new benchmarks in energy research. [Comments](https://hardware.slashdot.org/story/26/01/10/0556228/chinas-artificial-sun-breaks-nuclear-fusion-limit-thought-to-be-impossible?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [A Unique Performance Optimization for a 3D Geometry Language](https://cprimozic.net/notes/posts/persistent-expr-memo-optimization-for-geoscript/) - An innovative optimization technique brings new performance enhancements to 3D geometry programming.

## Science and Health

* [Some People Get Drunk Without Drinking and Scientists Finally Know Why](https://soylentnews.org/article.pl?sid=26/01/09/1830221&from=rss) - Scientists uncover the cause of auto-brewery syndrome, where individuals get drunk without consuming alcohol.

* [Scientists Create a 'Periodic Table' for Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/01/06/1126220&from=rss) - A new framework maps AI development and categorization processes.

## Software and Programming Insights

* [Markdown Is a Disaster: Why and What to Do Instead](https://www.karl-voit.at/2025/08/17/Markdown-disaster/) - A critique of Markdown highlighting its limitations and suggestions for alternatives. [Comments](https://lobste.rs/s/qdmztk/markdown_is_disaster_why_what_do_instead)

* [I Replaced Redis with PostgreSQL (And It's Faster)](https://dev.to/polliog/i-replaced-redis-with-postgresql-and-its-faster-4942) - An analysis of PostgreSQL's surprising performance benefits over Redis in certain use-cases. [Comments](https://lobste.rs/s/weiyij/i_replaced_redis_with_postgresql_it_s)

## Environmental and Energy Developments

* [Busting the 5 Biggest Myths About Renewable Energy](https://soylentnews.org/article.pl?sid=26/01/09/1828213&from=rss) - A breakdown of common misconceptions about renewable energy technologies.

* [While the World Cools on EVs, Norway Pushes to 96% Electric Sales](https://soylentnews.org/article.pl?sid=26/01/07/1228222&from=rss) - Norway's ambitious strides towards near-total electric vehicle sales prove noteworthy in a skeptical global market.

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

* [2026-01-11, 12:51:19](https://lobste.rs/s/k7xslg/pmu_counters_on_apple_silicon) - [PMU Counters on Apple Silicon](https://blog.bugsiki.dev/posts/apple-pmu/)
* [2026-01-11, 12:44:04](https://news.ycombinator.com/item?id=46575268) - [LLM poetry and the \&quot;greatness\&quot; question: Experiments by Gwern and Mercor](https://hollisrobbinsanecdotal.substack.com/p/llm-poetry-and-the-greatness-question)
* [2026-01-11, 12:34:00](https://news.slashdot.org/story/26/01/11/0223235/cory-doctorow-legalising-reverse-engineering-could-end-enshittification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cory Doctorow: Legalising Reverse Engineering Could End &apos;Enshittification&apos;](https://news.slashdot.org/story/26/01/11/0223235/cory-doctorow-legalising-reverse-engineering-could-end-enshittification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 12:26:00](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss) - [Finding Runaway Stars to Help Map Dark Matter in the Milky Way](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss)
* [2026-01-11, 12:22:05](https://news.ycombinator.com/item?id=46575127) - [Google: Don&apos;t make \&quot;bite-sized\&quot; content for LLMs](https://arstechnica.com/google/2026/01/google-dont-make-bite-sized-content-for-llms-if-you-care-about-search-rank/)
* [2026-01-11, 11:46:18](https://news.ycombinator.com/item?id=46574823) - [Why Selling WhatsApp to Facebook Would Be the Biggest Mistake (2012)](https://www.forbes.com/sites/ericjackson/2012/12/03/why-selling-whatsapp-to-facebook-would-be-the-biggest-mistake-of-jan-koums-and-brian-actons-lives/)
* [2026-01-11, 11:31:22](https://news.ycombinator.com/item?id=46574707) - [I dumped Windows 11 for Linux, and you should too](https://www.notebookcheck.net/I-dumped-Windows-11-for-Linux-and-you-should-too.1190961.0.html)
* [2026-01-11, 11:20:57](https://lobste.rs/s/ftwkvo/hobbyist_maintainer_economic_gravity) - [The Hobbyist Maintainer Economic Gravity Well](https://softwaremaxims.com/blog/hobbyist-gravity-well)
* [2026-01-11, 11:03:06](https://news.ycombinator.com/item?id=46574475) - [Think of Pavlov](https://boz.com/articles/think-pavlov)
* [2026-01-11, 10:41:50](https://lobste.rs/s/djvda5/create_semi_working_desktop_only_based_on) - [Create a semi-working desktop only based on runtime Windows 3.10 shipped with Windows 95 installer](https://tech.lgbt/@nina_kali_nina/115871854239918291)
* [2026-01-11, 10:23:20](https://lobste.rs/s/cmsfbu/don_t_fall_into_anti_ai_hype) - [Don&apos;t fall into the anti-AI hype](https://antirez.com/news/158)
* [2026-01-11, 10:03:30](https://lobste.rs/s/weiyij/i_replaced_redis_with_postgresql_it_s) - [I Replaced Redis with PostgreSQL (And It&apos;s Faster)](https://dev.to/polliog/i-replaced-redis-with-postgresql-and-its-faster-4942)
* [2026-01-11, 09:13:05](https://lobste.rs/s/q4zgly/how_safe_is_rust_ecosystem_deep_dive_into) - [How Safe is the Rust Ecosystem? A Deep Dive into crates.io](https://mr-leshiy-blog.web.app/blog/crates_io_analysis/)
* [2026-01-11, 08:34:00](https://developers.slashdot.org/story/26/01/11/0532214/c-and-c-grew-in-popularity-in-2025-says-tiobe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [C# (and C) Grew in Popularity in 2025, Says TIOBE](https://developers.slashdot.org/story/26/01/11/0532214/c-and-c-grew-in-popularity-in-2025-says-tiobe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 08:22:44](https://news.ycombinator.com/item?id=46573688) - [More than one hundred years of Film Sizes](https://wichm.home.xs4all.nl/filmsize.html)
* [2026-01-11, 08:07:57](https://lobste.rs/s/fr9pyv/whenwords_relative_time_formatting) - [whenwords: A relative time formatting library, with no code](https://github.com/dbreunig/whenwords)
* [2026-01-11, 07:59:28](https://lobste.rs/s/kc88fv/unique_performance_optimization_for_3d) - [A Unique Performance Optimization for a 3D Geometry Language](https://cprimozic.net/notes/posts/persistent-expr-memo-optimization-for-geoscript/)
* [2026-01-11, 07:57:02](https://lobste.rs/s/qdmztk/markdown_is_disaster_why_what_do_instead) - [Markdown Is a Disaster: Why and What to Do Instead](https://www.karl-voit.at/2025/08/17/Markdown-disaster/)
* [2026-01-11, 07:28:52](https://lobste.rs/s/r1wjyf/80_rye_20_time_1_3) - [80% of Rye in 20% of the Time [1/3]](https://ryelang.org/blog/posts/learn_80_rye_in_20_time_code/)
* [2026-01-11, 07:24:00](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss) - [Virginia&apos;s Datacenter Tax Breaks Cost State $1.6B in 2025](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss)
* [2026-01-11, 05:42:03](https://news.ycombinator.com/item?id=46573001) - [The Concise TypeScript Book](https://github.com/gibbok/typescript-book)
* [2026-01-11, 05:34:00](https://tech.slashdot.org/story/26/01/11/038252/elon-musk-xs-new-algorithm-will-be-made-open-source-in-seven-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Elon Musk: X&apos;s New Algorithm Will Be Made Open Source in Seven Days](https://tech.slashdot.org/story/26/01/11/038252/elon-musk-xs-new-algorithm-will-be-made-open-source-in-seven-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 04:45:27](https://news.ycombinator.com/item?id=46572769) - [A battle over Canada’s mystery brain disease](https://www.bbc.com/news/articles/c623r47d67lo)
* [2026-01-11, 04:32:47](https://news.ycombinator.com/item?id=46572723) - [Ripple: The Elegant TypeScript UI Framework](https://jsdev.space/meet-ripple/)
* [2026-01-11, 03:43:44](https://news.ycombinator.com/item?id=46572523) - [Max Payne – two decades later – Graphics Critique (2021)](https://darkcephas.blogspot.com/2021/07/max-payne-two-decades-later-graphics.html)
* [2026-01-11, 02:54:00](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss) - [Some People Get Drunk Without Drinking and Scientists Finally Know Why](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss)
* [2026-01-11, 02:34:00](https://science.slashdot.org/story/26/01/10/0628251/nature-inspired-computers-are-shockingly-good-at-math?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nature-Inspired Computers Are Shockingly Good At Math](https://science.slashdot.org/story/26/01/10/0628251/nature-inspired-computers-are-shockingly-good-at-math?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 02:33:18](https://lobste.rs/s/k9dwgt/16_best_practices_for_reducing) - [16 Best Practices for Reducing Dependabot Noise](https://nesbitt.io/2026/01/10/16-best-practices-for-reducing-dependabot-noise.html)
* [2026-01-11, 02:08:14](https://news.ycombinator.com/item?id=46572060) - [A Year of Work on the Arch Linux Package Management (ALPM) Project](https://devblog.archlinux.page/2026/a-year-of-work-on-the-alpm-project/)
* [2026-01-11, 02:00:45](https://news.ycombinator.com/item?id=46572032) - [Sisyphus Now Lives in Oh My Claude](https://github.com/Yeachan-Heo/oh-my-claude-sisyphus)
* [2026-01-11, 01:50:01](https://news.ycombinator.com/item?id=46571980) - [Show HN: Ferrite – Markdown editor in Rust with native Mermaid diagram rendering](https://github.com/OlaProeis/Ferrite)
* [2026-01-11, 00:38:54](https://lobste.rs/s/xjiqml/code_let_live) - [Code And Let Live](https://fly.io/blog/code-and-let-live/)
* [2026-01-10, 23:45:25](https://news.ycombinator.com/item?id=46571149) - [Show HN: Librario, a book metadata API that aggregates G Books, ISBNDB, and more](https://news.ycombinator.com/item?id=46571149)
* [2026-01-10, 23:29:57](https://lobste.rs/s/ty9jft/writing_mutexes_from_scratch_go) - [Writing mutexes from scratch in Go](https://rybicki.io/blog/2026/01/01/mutexes-from-scratch-in-go.html)
* [2026-01-10, 22:34:00](https://linux.slashdot.org/story/26/01/10/2231218/four-more-tech-bloggers-are-switching-to-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Four More Tech Bloggers Are Switching to Linux](https://linux.slashdot.org/story/26/01/10/2231218/four-more-tech-bloggers-are-switching-to-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 22:10:00](https://soylentnews.org/article.pl?sid=26/01/09/1828213&amp;from=rss) - [Busting the 5 Biggest Myths About Renewable Energy](https://soylentnews.org/article.pl?sid=26/01/09/1828213&amp;from=rss)
* [2026-01-10, 21:34:00](https://tech.slashdot.org/story/26/01/10/217207/ai-powered-social-media-app-hopes-to-build-more-purposeful-lives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI-Powered Social Media App Hopes To Build More Purposeful Lives](https://tech.slashdot.org/story/26/01/10/217207/ai-powered-social-media-app-hopes-to-build-more-purposeful-lives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 20:34:00](https://it.slashdot.org/story/26/01/10/1926209/ai-fails-at-most-remote-work-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Fails at Most Remote Work, Researchers Find](https://it.slashdot.org/story/26/01/10/1926209/ai-fails-at-most-remote-work-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 20:05:25](https://lobste.rs/s/vlzg2m/finding_fixing_ghostty_s_largest_memory) - [Finding and Fixing Ghostty&apos;s Largest Memory Leak](https://mitchellh.com/writing/ghostty-memory-leak-fix)
* [2026-01-10, 19:54:49](https://news.ycombinator.com/item?id=46569312) - [Overdose deaths are falling in America because of a &apos;supply shock&apos;: study](https://www.economist.com/united-states/2026/01/08/why-overdose-deaths-are-falling-in-america)
* [2026-01-10, 19:34:00](https://slashdot.org/story/26/01/10/0652218/amazon-plans-massive-superstore-larger-than-a-walmart-supercenter-near-chicago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Plans Massive Superstore Larger Than a Walmart Supercenter Near Chicago](https://slashdot.org/story/26/01/10/0652218/amazon-plans-massive-superstore-larger-than-a-walmart-supercenter-near-chicago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 19:27:39](https://news.ycombinator.com/item?id=46569061) - [Show HN: Play poker with LLMs, or watch them play against each other](https://llmholdem.com/)
* [2026-01-10, 19:16:07](https://lobste.rs/s/fr9s2n/v16_beacon_full_uplink_conversation) - [V16 beacon full uplink conversation](https://destevez.net/2026/01/v16-beacon-full-uplink-conversation/)
* [2026-01-10, 18:58:37](https://news.ycombinator.com/item?id=46568794) - [Finding and fixing Ghostty&apos;s largest memory leak](https://mitchellh.com/writing/ghostty-memory-leak-fix)
* [2026-01-10, 18:44:45](https://lobste.rs/s/zi022d/jj_tug) - [jj tug](https://shaddy.dev/notes/jj-tug/)
* [2026-01-10, 18:34:00](https://hardware.slashdot.org/story/26/01/10/0556228/chinas-artificial-sun-breaks-nuclear-fusion-limit-thought-to-be-impossible?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s &apos;Artificial Sun&apos; Breaks Nuclear Fusion Limit Thought to Be Impossible](https://hardware.slashdot.org/story/26/01/10/0556228/chinas-artificial-sun-breaks-nuclear-fusion-limit-thought-to-be-impossible?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 17:34:00](https://tech.slashdot.org/story/26/01/10/0429250/meta-announces-new-smartglasses-features-delays-international-rollout-claiming-unprecedented-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Announces New Smartglasses Features, Delays International Rollout Claiming &apos;Unprecedented&apos; Demand&apos;](https://tech.slashdot.org/story/26/01/10/0429250/meta-announces-new-smartglasses-features-delays-international-rollout-claiming-unprecedented-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 17:27:00](https://soylentnews.org/article.pl?sid=26/01/09/1824225&amp;from=rss) - [Bali Wants Three Months of Bank Account Statements to Visit ](https://soylentnews.org/article.pl?sid=26/01/09/1824225&amp;from=rss)
* [2026-01-10, 17:01:04](https://lobste.rs/s/j5poff/openchaos_dev) - [OpenChaos.dev](https://www.openchaos.dev/)
* [2026-01-10, 16:56:55](https://news.ycombinator.com/item?id=46567400) - [Show HN: I used Claude Code to discover connections between 100 books](https://trails.pieterma.es/)
* [2026-01-10, 16:56:34](https://news.ycombinator.com/item?id=46567392) - [AI is a business model stress test](https://dri.es/ai-is-a-business-model-stress-test)
* [2026-01-10, 16:34:00](https://science.slashdot.org/story/26/01/10/168224/medical-evacuation-from-space-station-next-week-for-astronaut-in-stable-condition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Medical Evacuation from Space Station Next Week for Astronaut in Stable Condition](https://science.slashdot.org/story/26/01/10/168224/medical-evacuation-from-space-station-next-week-for-astronaut-in-stable-condition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 16:03:55](https://news.ycombinator.com/item?id=46566812) - [Open Chaos: A self-evolving open-source project](https://www.openchaos.dev/)
* [2026-01-10, 15:34:00](https://yro.slashdot.org/story/26/01/10/054252/more-us-states-are-preparing-age-verification-laws-for-app-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More US States Are Preparing Age-Verification Laws for App Stores](https://yro.slashdot.org/story/26/01/10/054252/more-us-states-are-preparing-age-verification-laws-for-app-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 14:41:15](https://lobste.rs/s/tkq2bb/pulling_new_proof_from_knuth_s_fixed_point) - [Pulling a New Proof from Knuth’s Fixed-Point Printer](https://research.swtch.com/fp-knuth)
* [2026-01-10, 14:34:00](https://news.slashdot.org/story/26/01/10/0539228/how-the-free-software-foundation-kept-a-videoconferencing-software-free?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How the Free Software Foundation Kept a Videoconferencing Software Free](https://news.slashdot.org/story/26/01/10/0539228/how-the-free-software-foundation-kept-a-videoconferencing-software-free?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 14:11:57](https://lobste.rs/s/njgulu/learn_c_itanium_symbol_mangling) - [Learn C++ Itanium Symbol Mangling](https://noratrieb.github.io/womangling/)
* [2026-01-10, 13:00:00](https://tech.slashdot.org/story/26/01/09/2349211/french-uk-starlink-rival-pitches-canada-on-sovereign-satellite-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [French-UK Starlink Rival Pitches Canada On &apos;Sovereign&apos; Satellite Service](https://tech.slashdot.org/story/26/01/09/2349211/french-uk-starlink-rival-pitches-canada-on-sovereign-satellite-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 12:42:00](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss) - [Microsoft Silently Kills Windows and Office Phone Activation and Forces Online Activation](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss)
* [2026-01-10, 12:15:20](https://lobste.rs/s/i9nrlh/continuous_snapshotting_filesystem) - [Continuous Snapshotting Filesystem](https://nilfs.sourceforge.io/en/index.html)
* [2026-01-10, 11:55:32](https://lobste.rs/s/osmrzx/how_i_use_jujutsu) - [How I use Jujutsu](https://abhinavsarkar.net/posts/jj-usage/)
* [2026-01-10, 10:00:00](https://science.slashdot.org/story/26/01/09/2343237/scientists-tried-to-break-einsteins-speed-of-light-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Tried To Break Einstein&apos;s Speed of Light Rule](https://science.slashdot.org/story/26/01/09/2343237/scientists-tried-to-break-einsteins-speed-of-light-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 09:16:26](https://lobste.rs/s/bstbd6/hongdown_opinionated_markdown) - [Hongdown: An opinionated Markdown formatter in Rust](https://github.com/dahlia/hongdown)
* [2026-01-10, 07:53:00](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss) - [Renowned Mathematician Joel David Hamkins Declares AI Models Useless for Solving Math](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss)
* [2026-01-10, 03:09:00](https://soylentnews.org/article.pl?sid=26/01/08/0331227&amp;from=rss) - [The Nation&apos;s Strictest Privacy Law Just Took Effect, to Data Brokers’ Chagrin](https://soylentnews.org/article.pl?sid=26/01/08/0331227&amp;from=rss)
* [2026-01-09, 22:20:00](https://soylentnews.org/article.pl?sid=26/01/08/0325201&amp;from=rss) - [Scientists Found a Way to Help the Brain Bounce Back From Alzheimer&apos;s](https://soylentnews.org/article.pl?sid=26/01/08/0325201&amp;from=rss)
* [2026-01-09, 20:27:03](https://lobste.rs/s/zdwvdw/prompting_101_show_don_t_tell) - [Prompting 101: Show, don’t tell](https://www.haskellforall.com/2026/01/prompting-101-show-dont-tell.html)
* [2026-01-09, 19:11:59](https://news.ycombinator.com/item?id=46557825) - [Code and Let Live](https://fly.io/blog/code-and-let-live/)
* [2026-01-09, 17:36:00](https://soylentnews.org/article.pl?sid=26/01/08/0319211&amp;from=rss) - [Palo Alto Networks Security-Intel Boss Calls AI Agents 2026&apos;S Biggest Insider Threat](https://soylentnews.org/article.pl?sid=26/01/08/0319211&amp;from=rss)
* [2026-01-09, 14:57:14](https://lobste.rs/s/e7lpyy/i_cannot_ssh_into_my_server_anymore_s_fine) - [I Cannot SSH Into My Server Anymore (And That’s Fine)](https://soap.coffee/~lthms/posts/i-cannot-ssh-into-my-server-anymore.html)
* [2026-01-09, 14:47:06](https://lobste.rs/s/jo3dnh/str) - [&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;str](https://ohadravid.github.io/posts/2026-01-09-fourteen-ref/)
* [2026-01-09, 12:53:00](https://soylentnews.org/article.pl?sid=26/01/07/1246247&amp;from=rss) - [OpenAI Bets Big on Audio as Silicon Valley Declares War on Screens](https://soylentnews.org/article.pl?sid=26/01/07/1246247&amp;from=rss)
* [2026-01-09, 09:01:33](https://news.ycombinator.com/item?id=46551602) - [C++ std::move doesn&apos;t move anything: A deep dive into Value Categories](https://0xghost.dev/blog/std-move-deep-dive/)
* [2026-01-09, 08:07:00](https://soylentnews.org/article.pl?sid=26/01/07/1228222&amp;from=rss) - [While the World Cools on EVs, Norway Pushes to 96% Electric Sales](https://soylentnews.org/article.pl?sid=26/01/07/1228222&amp;from=rss)
* [2026-01-09, 03:24:00](https://soylentnews.org/article.pl?sid=26/01/06/1126220&amp;from=rss) - [Scientists Create a “Periodic Table” for Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/01/06/1126220&amp;from=rss)
* [2026-01-08, 22:44:45](https://news.ycombinator.com/item?id=46547580) - [Show HN: Yellopages – New tab Chrome extension](https://yellopages.kawaicheung.io/)
* [2026-01-08, 22:38:00](https://soylentnews.org/article.pl?sid=26/01/06/1123219&amp;from=rss) - [Ford Wants to Turn Your Sun Visor Into a Head-Up Display](https://soylentnews.org/article.pl?sid=26/01/06/1123219&amp;from=rss)
* [2026-01-08, 17:53:00](https://soylentnews.org/article.pl?sid=26/01/06/1120251&amp;from=rss) - [The French University Where Spies Go for Training](https://soylentnews.org/article.pl?sid=26/01/06/1120251&amp;from=rss)
* [2026-01-08, 13:08:00](https://soylentnews.org/article.pl?sid=26/01/06/1049201&amp;from=rss) - [A Post-American, Enshittification-Resistant Internet](https://soylentnews.org/article.pl?sid=26/01/06/1049201&amp;from=rss)
* [2026-01-08, 08:19:00](https://soylentnews.org/article.pl?sid=26/01/06/1042201&amp;from=rss) - [The Search for Gravitons: Modifying Gravity Waves With Light](https://soylentnews.org/article.pl?sid=26/01/06/1042201&amp;from=rss)
* [2026-01-08, 08:18:17](https://news.ycombinator.com/item?id=46538628) - [ASCII-Driven Development](https://medium.com/@calufa/ascii-driven-development-850f66661351)
* [2026-01-08, 03:36:00](https://soylentnews.org/article.pl?sid=26/01/06/0751234&amp;from=rss) - [How Do I Make Clear Ice at Home? a Food Scientist Shares Easy Tips](https://soylentnews.org/article.pl?sid=26/01/06/0751234&amp;from=rss)
* [2026-01-07, 22:47:00](https://soylentnews.org/article.pl?sid=26/01/06/0744236&amp;from=rss) - [Scientists Say Ozempic Could Change How You Feel After Drinking Alcohol](https://soylentnews.org/article.pl?sid=26/01/06/0744236&amp;from=rss)
* [2026-01-07, 18:00:00](https://soylentnews.org/article.pl?sid=26/01/06/0740234&amp;from=rss) - [China Leads Research in 90% of Crucial Technologies](https://soylentnews.org/article.pl?sid=26/01/06/0740234&amp;from=rss)
* [2026-01-07, 13:17:00](https://soylentnews.org/article.pl?sid=26/01/06/0727248&amp;from=rss) - [Stingless Bees from the Amazon Granted Legal Rights in World First](https://soylentnews.org/article.pl?sid=26/01/06/0727248&amp;from=rss)
* [2026-01-07, 11:43:26](https://news.ycombinator.com/item?id=46525271) - [Vojtux – Unofficial Linux Distribution Aimed at Visually Impaired Users](https://github.com/vojtapolasek/vojtux)
* [2026-01-07, 11:39:33](https://news.ycombinator.com/item?id=46525236) - [CPU Counters on Apple Silicon: article + tool](https://blog.bugsiki.dev/posts/apple-pmu/)
* [2026-01-07, 09:53:03](https://news.ycombinator.com/item?id=46524483) - [An Experimental Approach to Printf in HLSL](https://www.abolishcrlf.org//2025/12/31/Printf.html)
* [2026-01-07, 08:31:00](https://soylentnews.org/article.pl?sid=26/01/06/0722246&amp;from=rss) - [Lisuan&apos;s G100 Series Has Reportedly Begun Shipping Out to Customers in First Batch of Deliveries](https://soylentnews.org/article.pl?sid=26/01/06/0722246&amp;from=rss)
* [2026-01-07, 03:47:00](https://soylentnews.org/article.pl?sid=26/01/05/1230257&amp;from=rss) - [China Mandates 50% Domestic Equipment Rule for Chipmakers](https://soylentnews.org/article.pl?sid=26/01/05/1230257&amp;from=rss)
