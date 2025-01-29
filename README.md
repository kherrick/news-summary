# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Parametric Subtyping for Structural Parametric Polymorphism](https://blog.sigplan.org/2025/01/29/parametric-subtyping-for-structural-parametric-polymorphism/) explores advanced type system concepts for software programming. [Comments](https://lobste.rs/s/nqy7uq/parametric_subtyping_for_structural).

* [Building a semantic movie search demo with pgvector and Next.js](https://blog.6nok.org/building-a-semantic-movie-search-demo-with-pgvector-and-next.js/) presents a method to enhance search capabilities using semantic AI. [Comments](https://lobste.rs/s/siaf0m/building_semantic_movie_search_demo_with).

* [SmolGPT: A minimal PyTorch implementation for training a small LLM from scratch](https://github.com/Om-Alve/smolGPT) introduces a lightweight approach to building language models. [Comments](https://news.ycombinator.com/item?id=42868770).

* [Astral – "We're building a new static type checker for Python"](https://twitter.com/charliermarsh/status/1884651482009477368) discusses developing robust tools for Python programming. [Comments](https://news.ycombinator.com/item?id=42868576).

* [MLX — Distributed Computing for Apple Silicon](https://ml-explore.github.io/mlx/build/html/index.html) demonstrates innovations in distributed computing on Apple's hardware. [Comments](https://lobste.rs/s/esqs7z/mlx_distributed_computing_for_apple).

* [A Modern Compiler for the French Tax Code](https://inria.hal.science/hal-03002266) describes efforts to digitize and simplify tax regulations via programming. [Comments](https://lobste.rs/s/tswf9y/modern_compiler_for_french_tax_code).

## Artificial Intelligence

* [DeepSeek R1 Is Now Available on Azure AI Foundry and GitHub](https://azure.microsoft.com/en-us/blog/deepseek-r1-is-now-available-on-azure-ai-foundry-and-github/) announces new AI developments on Microsoft's platform. [Comments](https://news.ycombinator.com/item?id=42870750).

* [OpenAI Says It Has Evidence DeepSeek Used Its Model To Train Competitor](https://slashdot.org/story/25/01/29/1356236/openai-says-it-has-evidence-deepseek-used-its-model-to-train-competitor) discusses potential ethical issues in AI model training. [Comments](https://news.ycombinator.com/item?id=42861475).

* [Alibaba Unveils Rival AI Model That Uses Less Computing Power](https://slashdot.org/story/25/01/29/184223/after-deepseek-shock-alibaba-unveils-rival-ai-model-that-uses-less-computing-power?utm_source=rss1.0mainlinkanon&utm_medium=feed) reveals advances in efficient AI model designs. [Comments](https://news.ycombinator.com/item?id=42870230).

## Science and Health

* [Mice With Two Dads Have Been Created Using CRISPR](https://science.slashdot.org/story/25/01/29/1831245/mice-with-two-dads-have-been-created-using-crispr?utm_source=rss1.0mainlinkanon&utm_medium=feed) explores groundbreaking genetic engineering techniques. [Comments](https://news.ycombinator.com/item?id=42868770).

* [Microplastics Found In the Brains of Mice Within Hours of Consumption](https://science.slashdot.org/story/25/01/29/0115221/microplastics-found-in-the-brains-of-mice-within-hours-of-consumption?utm_source=rss1.0mainlinkanon&utm_medium=feed) raises concerns about environmental pollutants' effects on health. [Comments](https://news.ycombinator.com/item?id=42862246).

* [Study of More Than 600 Animal and Plant Species Finds Genetic Diversity Has Declined Globally](https://science.slashdot.org/story/25/01/29/1754252/study-of-more-than-600-animal-and-plant-species-finds-genetic-diversity-has-declined-globally?utm_source=rss1.0mainlinkanon&utm_medium=feed) spotlights a troubling trend in biodiversity. [Comments](https://news.ycombinator.com/item?id=42868219).

## Business and Industry

* [Intel 'Did Not Know How To Be a Foundry,' Tim Cook Told TSMC Chief](https://apple.slashdot.org/story/25/01/29/1848226/intel-did-not-know-how-to-be-a-foundry-tim-cook-told-tsmc-chief?utm_source=rss1.0mainlinkanon&utm_medium=feed) highlights challenges in Intel's strategic operations. [Comments](https://news.ycombinator.com/item?id=42868531).

* [Waymo to test its autonomous driving technology in over 10 new cities](https://www.reuters.com/business/autos-transportation/alphabets-waymo-test-its-autonomous-driving-technology-over-10-new-cities-2025-01-29/) expands ambitions for self-driving technology. [Comments](https://news.ycombinator.com/item?id=42870056).

* [Seagate: 'new' hard drives used for tens of thousands of hours](https://www.tomshardware.com/pc-components/hdds/german-seagate-customers-say-their-new-hard-drives-were-actually-used-resold-hdds-reportedly-used-for-tens-of-thousands-of-hours) sparks debates in product transparency. [Comments](https://news.ycombinator.com/item?id=42864788).

## Miscellaneous

* [Making the Video That Made Gorillaz](https://animationobsessive.substack.com/p/making-the-video-that-made-gorillaz) reflects on the creative process behind a groundbreaking music video. [Comments](https://news.ycombinator.com/item?id=42870990).

* [Dead Games](https://garry.net/posts/dead-games) provides a retrospective on influential but abandoned video games. [Comments](https://news.ycombinator.com/item?id=42870230).

* [A story about restoring and upgrading a Commodore Amiga 1000](https://celso.io/posts/2025/01/26/the-first-perfect-computer/) captures the nostalgia and challenges of retro computing. [Comments](https://news.ycombinator.com/item?id=42865867).

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

* [2025-01-29, 22:03:43](https://lobste.rs/s/nqy7uq/parametric_subtyping_for_structural) - [Parametric Subtyping for Structural Parametric Polymorphism](https://blog.sigplan.org/2025/01/29/parametric-subtyping-for-structural-parametric-polymorphism/)
* [2025-01-29, 21:41:55](https://lobste.rs/s/i6dcix/why_sorting_is_harder_than_it_seems) - [Why sorting is harder than it seems](https://mill.plainopen.com/why-sorting-is-harder-than-it-seems.html)
* [2025-01-29, 21:05:28](https://news.ycombinator.com/item?id=42871143) - [Parsing PDFs (and more) in Elixir using Rust](https://www.chriis.dev/opinion/parsing-pdfs-in-elixir-using-rust)
* [2025-01-29, 20:55:43](https://lobste.rs/s/ugg12c/senders_receivers_introduction) - [Senders/Receivers: An Introduction](https://accu.org/journals/overload/32/184/teodorescu/)
* [2025-01-29, 20:54:01](https://lobste.rs/s/gtuz66/keymapper_cross_platform_context_aware) - [keymapper: A cross-platform context-aware key remapper](https://github.com/houmain/keymapper)
* [2025-01-29, 20:50:53](https://news.ycombinator.com/item?id=42870990) - [Making the Video That Made Gorillaz](https://animationobsessive.substack.com/p/making-the-video-that-made-gorillaz)
* [2025-01-29, 20:50:00](https://apple.slashdot.org/story/25/01/29/1848226/intel-did-not-know-how-to-be-a-foundry-tim-cook-told-tsmc-chief?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Intel 'Did Not Know How To Be a Foundry,' Tim Cook Told TSMC Chief](https://apple.slashdot.org/story/25/01/29/1848226/intel-did-not-know-how-to-be-a-foundry-tim-cook-told-tsmc-chief?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 20:39:11](https://lobste.rs/s/siaf0m/building_semantic_movie_search_demo_with) - [Building a semantic movie search demo with pgvector and Next.js](https://blog.6nok.org/building-a-semantic-movie-search-demo-with-pgvector-and-next.js/)
* [2025-01-29, 20:30:55](https://news.ycombinator.com/item?id=42870750) - [DeepSeek R1 Is Now Available on Azure AI Foundry and GitHub](https://azure.microsoft.com/en-us/blog/deepseek-r1-is-now-available-on-azure-ai-foundry-and-github/)
* [2025-01-29, 20:27:45](https://lobste.rs/s/0t3yqw/building_t1d_smartwatch_from_scratch) - [Building a (T1D) smartwatch from scratch](https://andrewchilds.com/posts/building-a-t1d-smartwatch-from-scratch)
* [2025-01-29, 20:10:00](https://science.slashdot.org/story/25/01/29/1831245/mice-with-two-dads-have-been-created-using-crispr?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mice With Two Dads Have Been Created Using CRISPR](https://science.slashdot.org/story/25/01/29/1831245/mice-with-two-dads-have-been-created-using-crispr?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 19:52:27](https://news.ycombinator.com/item?id=42870230) - [Dead Games](https://garry.net/posts/dead-games)
* [2025-01-29, 19:49:37](https://news.ycombinator.com/item?id=42870190) - [Fed leaves rates unchanged, drops reference to inflation 'progress'](https://www.reuters.com/markets/rates-bonds/fed-likely-keep-rates-steady-it-awaits-more-data-clarity-trump-policies-2025-01-29/)
* [2025-01-29, 19:47:51](https://news.ycombinator.com/item?id=42870171) - [Airflow – Stream media files directly from macOS to AirPlay devices](https://airflow.app/)
* [2025-01-29, 19:38:18](https://news.ycombinator.com/item?id=42870056) - [Waymo to test its autonomous driving technology in over 10 new cities](https://www.reuters.com/business/autos-transportation/alphabets-waymo-test-its-autonomous-driving-technology-over-10-new-cities-2025-01-29/)
* [2025-01-29, 19:30:00](https://slashdot.org/story/25/01/29/184223/after-deepseek-shock-alibaba-unveils-rival-ai-model-that-uses-less-computing-power?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [After DeepSeek Shock, Alibaba Unveils Rival AI Model That Uses Less Computing Power](https://slashdot.org/story/25/01/29/184223/after-deepseek-shock-alibaba-unveils-rival-ai-model-that-uses-less-computing-power?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 18:50:00](https://science.slashdot.org/story/25/01/29/1754252/study-of-more-than-600-animal-and-plant-species-finds-genetic-diversity-has-declined-globally?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Study of More Than 600 Animal and Plant Species Finds Genetic Diversity Has Declined Globally](https://science.slashdot.org/story/25/01/29/1754252/study-of-more-than-600-animal-and-plant-species-finds-genetic-diversity-has-declined-globally?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 18:17:00](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss) - [Linux is the Name That Shall Not be Spoken at Facebook](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss)
* [2025-01-29, 18:10:00](https://tech.slashdot.org/story/25/01/29/1738249/comcast-is-rolling-out-ultra-low-lag-tech-that-could-fix-the-internet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comcast Is Rolling Out 'Ultra-Low Lag' Tech That Could Fix the Internet](https://tech.slashdot.org/story/25/01/29/1738249/comcast-is-rolling-out-ultra-low-lag-tech-that-could-fix-the-internet?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 18:09:19](https://news.ycombinator.com/item?id=42868770) - [SmolGPT: A minimal PyTorch implementation for training a small LLM from scratch](https://github.com/Om-Alve/smolGPT)
* [2025-01-29, 18:06:02](https://news.ycombinator.com/item?id=42868718) - [Adding iodine to salt played a role in cognitive improvements: research (2013)](https://www.discovermagazine.com/health/how-adding-iodine-to-salt-boosted-americans-iq)
* [2025-01-29, 17:56:51](https://news.ycombinator.com/item?id=42868576) - [Astral – \"We're building a new static type checker for Python\"](https://twitter.com/charliermarsh/status/1884651482009477368)
* [2025-01-29, 17:53:53](https://news.ycombinator.com/item?id=42868531) - [Intel doesn't know how to be a foundry,\" Tim Cook reportedly told TSMC's CEO](https://www.tomshardware.com/tech-industry/tsmc-founder-says-tim-cook-told-him-intel-did-not-know-how-to-be-a-foundry)
* [2025-01-29, 17:49:16](https://news.ycombinator.com/item?id=42868464) - [Ötzi the Lyme Mummy (2019)](https://vetmed.illinois.edu/i-tick/2019/08/09/iceman-lyme-mummy-tattle-the-tick-blog/)
* [2025-01-29, 17:44:45](https://news.ycombinator.com/item?id=42868390) - [An analysis of DeepSeek's R1-Zero and R1](https://arcprize.org/blog/r1-zero-r1-results-analysis)
* [2025-01-29, 17:30:00](https://it.slashdot.org/story/25/01/29/1730253/chinese-and-iranian-hackers-are-using-us-ai-products-to-bolster-cyberattacks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Chinese and Iranian Hackers Are Using US AI Products To Bolster Cyberattacks](https://it.slashdot.org/story/25/01/29/1730253/chinese-and-iranian-hackers-are-using-us-ai-products-to-bolster-cyberattacks?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 17:00:50](https://news.ycombinator.com/item?id=42867708) - [Frigade (YC W23) is hiring engineer #2](https://www.ycombinator.com/companies/frigade/jobs/KUwAluN-senior-full-stack-engineer)
* [2025-01-29, 16:57:59](https://news.ycombinator.com/item?id=42867657) - [A major Postgres upgrade with zero downtime](https://www.instantdb.com/essays/pg_upgrade)
* [2025-01-29, 16:45:00](https://news.slashdot.org/story/25/01/29/1622227/copyright-office-offers-assurances-on-ai-filmmaking-tools?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Copyright Office Offers Assurances on AI Filmmaking Tools](https://news.slashdot.org/story/25/01/29/1622227/copyright-office-offers-assurances-on-ai-filmmaking-tools?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 16:40:19](https://news.ycombinator.com/item?id=42867324) - [Society for Technical Communication to permanently close its doors](https://www.stc.org/)
* [2025-01-29, 16:37:05](https://lobste.rs/s/s89gxq/why_trees_without_branches_grow_faster) - [Why Trees Without Branches Grow Faster: The Case for Reducing Branches in Code](https://cedardb.com/blog/reducing_branches/)
* [2025-01-29, 16:30:37](https://lobste.rs/s/gexezf/picking_equatable_names) - [Picking Equatable Names](https://thunderseethe.dev/posts/debruijn-indices/)
* [2025-01-29, 16:26:07](https://news.ycombinator.com/item?id=42867050) - [Show HN: Mcp-Agent – Build effective agents with Model Context Protocol](https://github.com/lastmile-ai/mcp-agent)
* [2025-01-29, 16:22:10](https://lobste.rs/s/oxmxzl/using_v2ray_with_caddy_access_internet) - [Using v2ray with Caddy to Access the Internet in China](https://sequentialread.com/v2ray-caddy-to-access-the-internet-in-china/)
* [2025-01-29, 16:09:00](https://slashdot.org/story/25/01/29/169257/new-zealand-relaxes-visa-rules-to-lure-digital-nomads?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Zealand Relaxes Visa Rules To Lure Digital Nomads](https://slashdot.org/story/25/01/29/169257/new-zealand-relaxes-visa-rules-to-lure-digital-nomads?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 16:07:09](https://news.ycombinator.com/item?id=42866702) - [Effective AI code suggestions: less is more](https://www.qodo.ai/blog/effective-code-suggestions-llms-less-is-more/)
* [2025-01-29, 15:58:20](https://news.ycombinator.com/item?id=42866572) - [Case Study: ByteDance Uses eBPF to Enhance Networking Performance](https://ebpf.foundation/case-study-bytedance-uses-ebpf-to-enhance-networking-performance/)
* [2025-01-29, 15:34:06](https://lobste.rs/s/f6frhd/hell_haskell_shell) - [Hell (Haskell shell)](https://chrisdone.com/posts/hell-year-in-review-2025/)
* [2025-01-29, 15:20:00](https://tech.slashdot.org/story/25/01/29/1520256/virgin-money-chatbot-scolds-customer-who-typed-virgin?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Virgin Money Chatbot Scolds Customer Who Typed 'Virgin'](https://tech.slashdot.org/story/25/01/29/1520256/virgin-money-chatbot-scolds-customer-who-typed-virgin?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 15:16:41](https://news.ycombinator.com/item?id=42865867) - [A story about restoring and upgrading a Commodore Amiga 1000](https://celso.io/posts/2025/01/26/the-first-perfect-computer/)
* [2025-01-29, 14:59:59](https://news.ycombinator.com/item?id=42865619) - [Google Pixel 4a's old firmware is gone, trapping users on buggy battery update](https://www.androidcentral.com/phones/google-pixel-4as-old-firmware-is-gone-trapping-users-on-the-buggy-battery-update)
* [2025-01-29, 14:40:00](https://science.slashdot.org/story/25/01/29/1033227/paper-mills-have-flooded-science-with-400000-fake-studies-experts-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Paper Mills Have Flooded Science With 400,000 Fake Studies, Experts Warn](https://science.slashdot.org/story/25/01/29/1033227/paper-mills-have-flooded-science-with-400000-fake-studies-experts-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 14:00:00](https://slashdot.org/story/25/01/29/1356236/openai-says-it-has-evidence-deepseek-used-its-model-to-train-competitor?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Says It Has Evidence DeepSeek Used Its Model To Train Competitor](https://slashdot.org/story/25/01/29/1356236/openai-says-it-has-evidence-deepseek-used-its-model-to-train-competitor?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 13:42:03](https://news.ycombinator.com/item?id=42864788) - [Seagate: 'new' hard drives used for tens of thousands of hours](https://www.tomshardware.com/pc-components/hdds/german-seagate-customers-say-their-new-hard-drives-were-actually-used-resold-hdds-reportedly-used-for-tens-of-thousands-of-hours)
* [2025-01-29, 13:33:00](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss) - [Backdoor Infecting VPNs Used “Magic Packets” for Stealth and Security](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss)
* [2025-01-29, 12:55:07](https://lobste.rs/s/uysczu/portal_flow_brings_it_all_together) - [Portal flow brings it all together](https://30fps.net/pages/pvs-portal-flow/)
* [2025-01-29, 12:47:17](https://news.ycombinator.com/item?id=42864272) - [Asteroid Impact on Earth 2032 with Probability 1% and 8Mt Energy](https://cneos.jpl.nasa.gov/sentry/details.html#?des=2024%20YR4)
* [2025-01-29, 12:30:37](https://news.ycombinator.com/item?id=42864122) - [Preserves: An Expressive Data Language](https://preserves.dev/)
* [2025-01-29, 12:06:55](https://lobste.rs/s/ig8asl/things_you_might_not_need_your_tests) - [Things you might not need in your tests](https://thoughtbot.com/blog/things-you-might-not-need-in-your-tests)
* [2025-01-29, 11:52:02](https://news.ycombinator.com/item?id=42863901) - [Adding concurrent read/write to DuckDB with Arrow Flight](https://www.definite.app/blog/duck-takes-flight)
* [2025-01-29, 10:00:00](https://mobile.slashdot.org/story/25/01/29/0122208/cvs-might-let-you-open-locked-shelves-with-your-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [CVS Might Let You Open Locked Shelves With Your Phone](https://mobile.slashdot.org/story/25/01/29/0122208/cvs-might-let-you-open-locked-shelves-with-your-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 09:54:33](https://news.ycombinator.com/item?id=42863262) - [Bacteria (and Their Metabolites) and Depression](https://www.science.org/content/blog-post/bacteria-and-their-metabolites-and-depression)
* [2025-01-29, 09:39:04](https://lobste.rs/s/o7vr0v/how_set_webgl_shader_colors_with_css) - [How to Set WebGL Shader Colors with CSS and JavaScript](https://www.nmattia.com/posts/2025-01-29-shader-css-properties/)
* [2025-01-29, 09:17:44](https://lobste.rs/s/lpl09r/we_got_hit_by_alarmingly_well_prepared) - [We got hit by an alarmingly well-prepared phish spammer](https://utcc.utoronto.ca/~cks/space/blog/spam/WellPreparedPhishSpammer)
* [2025-01-29, 08:49:00](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss) - [How Good is Tesla Full Self Driving, by a Motor Trend Road Tester](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss)
* [2025-01-29, 07:00:00](https://science.slashdot.org/story/25/01/29/0115221/microplastics-found-in-the-brains-of-mice-within-hours-of-consumption?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microplastics Found In the Brains of Mice Within Hours of Consumption](https://science.slashdot.org/story/25/01/29/0115221/microplastics-found-in-the-brains-of-mice-within-hours-of-consumption?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 06:43:43](https://news.ycombinator.com/item?id=42862246) - [I still like Sublime Text](https://ohdoylerules.com/workflows/why-i-still-like-sublime-text-in-2025/)
* [2025-01-29, 06:06:59](https://lobste.rs/s/adcodp/bidirectional_typechecking_is) - [Bidirectional Typechecking is Bidirectional](https://cybercat-institute.github.io//2025/01/28/bidirectional-typechecking/)
* [2025-01-29, 04:21:20](https://news.ycombinator.com/item?id=42861475) - [OpenAI says it has evidence DeepSeek used its model to train competitor](https://www.ft.com/content/a0dfedd1-5255-4fa9-8ccc-1fe01de87ea6)
* [2025-01-29, 04:21:18](https://lobste.rs/s/pihql3/you_re_thinking_about_passkeys_wrong) - [You're thinking about passkeys wrong](https://dev.to/yawaramin/youre-thinking-about-passkeys-wrong-171o)
* [2025-01-29, 04:03:00](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss) - [5 Super Creepy New Technologies That Should Chill All Of Us To The Core](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss)
* [2025-01-29, 03:49:27](https://lobste.rs/s/esqs7z/mlx_distributed_computing_for_apple) - [MLX — Distributed Computing for Apple Silicon](https://ml-explore.github.io/mlx/build/html/index.html)
* [2025-01-29, 03:30:00](https://science.slashdot.org/story/25/01/29/001209/technology-for-lab-grown-eggs-or-sperm-on-brink-of-viability-uk-watchdog-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Technology For Lab-Grown Eggs Or Sperm On Brink of Viability, UK Watchdog Finds](https://science.slashdot.org/story/25/01/29/001209/technology-for-lab-grown-eggs-or-sperm-on-brink-of-viability-uk-watchdog-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 03:11:04](https://lobste.rs/s/tswf9y/modern_compiler_for_french_tax_code) - [A Modern Compiler for the French Tax Code](https://inria.hal.science/hal-03002266)
* [2025-01-29, 02:03:11](https://lobste.rs/s/n9vtqo/my_history_with_forth_stack_machines_2010) - [My history with Forth & stack machines (2010)](https://yosefk.com/blog/my-history-with-forth-stack-machines.html)
* [2025-01-29, 01:30:00](https://science.slashdot.org/story/25/01/28/2352213/ghost-that-haunts-south-carolina-rail-line-may-be-caused-by-tiny-earthquakes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Ghost' That Haunts South Carolina Rail Line May Be Caused By Tiny Earthquakes](https://science.slashdot.org/story/25/01/28/2352213/ghost-that-haunts-south-carolina-rail-line-may-be-caused-by-tiny-earthquakes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 23:17:00](https://soylentnews.org/article.pl?sid=25/01/27/1659214&from=rss) - [Your Hollywood Career: How to Tell When the End Is Nigh](https://soylentnews.org/article.pl?sid=25/01/27/1659214&from=rss)
* [2025-01-28, 22:38:14](https://lobste.rs/s/fzjejf/handwiki) - [Handwiki](https://handwiki.org/)
* [2025-01-28, 19:19:15](https://lobste.rs/s/4kvugz/sunsetting_cursed_terminal_emulation) - [Sunsetting Cursed Terminal Emulation](https://arcan-fe.com/2025/01/27/sunsetting-cursed-terminal-emulation/)
* [2025-01-28, 18:57:19](https://lobste.rs/s/pzo2xo/speculation_attacks_on_apple_m3_slap_flop) - [Speculation Attacks on Apple M3: SLAP and FLOP](https://predictors.fail/)
* [2025-01-28, 18:31:00](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss) - [The Invalid 68030 Instruction That Accidentally Allowed the Mac Classic II to Successfully Boot Up](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss)
* [2025-01-28, 18:19:04](https://lobste.rs/s/bkpqln/marginalia_search_engine_prioritizing) - [Marginalia - A search engine prioritizing non-commercial content](https://marginalia-search.com/)
* [2025-01-28, 16:33:32](https://news.ycombinator.com/item?id=42854291) - [Building a T1D smartwatch for my son from scratch](https://andrewchilds.com/posts/building-a-t1d-smartwatch-from-scratch)
* [2025-01-28, 13:45:00](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss) - [China's Second-Largest Foundry Hires Former Intel Executive to Lead Advanced Node Development](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss)
* [2025-01-28, 12:13:43](https://lobste.rs/s/noffmp/seven_things_i_know_after_25_years) - [Seven things I know after 25 years of development](https://zverok.space/blog/2025-01-27-7things-euruko.html)
* [2025-01-28, 09:01:00](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss) - [First-Ever Data Center On The Moon Set To Launch Next Month](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss)
* [2025-01-28, 07:35:08](https://lobste.rs/s/wb8pzw/deepseek_faq) - [DeepSeek FAQ](https://stratechery.com/2025/deepseek-faq/)
* [2025-01-28, 04:14:00](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss) - [The Drunken Plagiarists: Working with Co-pilots](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss)
* [2025-01-27, 23:30:00](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss) - [Data Breach Hitting PowerSchool Looks Very, Very Bad](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss)
* [2025-01-27, 18:44:00](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss) - [Sleeping Pills Stop the Brain’s System for Cleaning Out Waste](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss)
* [2025-01-27, 16:25:00](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss) - [Linux Kernel 6.13 Announced](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss)
* [2025-01-27, 13:55:00](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss) - [Think It Takes 21 Days to Form a Habit? Science Says Think Again](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss)
* [2025-01-27, 09:10:00](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss) - [Medical Device Company Suddenly Stops Hospitals From Fixing Machines Themselves](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss)
* [2025-01-27, 04:22:00](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss) - [Mysterious Blobs Found Inside Cells Are Rewriting the Story of How Life Works](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss)
* [2025-01-26, 23:34:00](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss) - [Florida Man Eats Diet of Butter, Cheese, Beef; Cholesterol Oozes From His Body](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss)
* [2025-01-26, 18:51:00](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss) - [Real Datacenter Emissions Are A Dirty Secret](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss)
* [2025-01-26, 14:14:59](https://news.ycombinator.com/item?id=42830208) - [Over Engineered Cars Are Pushing Technicians Away](https://news.ycombinator.com/item?id=42830208)
* [2025-01-26, 14:10:00](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss) - [Touchscreen Dashboards Have Finally Taken Over and Ruined Driving](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss)
* [2025-01-26, 09:25:00](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss) - [“Project Mini Rack” Wants Make Your Mini-Homelab a Reality](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss)
* [2025-01-26, 04:38:00](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss) - [Anthropic Chief Says AI Could Surpass “Almost All Humans at Almost Everything” Shortly After 2027](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss)
* [2025-01-25, 23:53:00](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss) - [Not an Asteroid, Just Elon's Car](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss)
* [2025-01-25, 19:08:00](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss) - [How Many Sexes Are There?](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss)
* [2025-01-25, 14:23:00](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss) - [Wine 10.0 Brings Arm Windows Apps to Linux, Still Isn't an Emulator](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss)
* [2025-01-25, 09:40:00](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss) - [Trump Pardons Dark Web Silk Road Marketplace Founder Ross Ulbricht](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss)
* [2025-01-25, 04:54:00](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss) - [Opinion: We Need to Protect the Protocol That Runs Bluesky](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss)
* [2025-01-25, 00:09:00](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss) - [AI Workloads Spur Bigger Memory Drives](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss)
