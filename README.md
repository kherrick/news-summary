# [News Summary](https://kherrick.github.io/news-summary/)

## Environmental Concerns and Technological Innovations

* [Study of More Than 600 Animal and Plant Species Finds Genetic Diversity Has Declined Globally](https://science.slashdot.org/story/25/01/29/1754252/study-of-more-than-600-animal-and-plant-species-finds-genetic-diversity-has-declined-globally?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A comprehensive study highlights global declines in genetic diversity across both flora and fauna.

* [Microplastics Found In the Brains of Mice Within Hours of Consumption](https://science.slashdot.org/story/25/01/29/0115221/microplastics-found-in-the-brains-of-mice-within-hours-of-consumption?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Shocking findings demonstrate how quickly microplastics can travel to the brain after ingestion.

* [Technology For Lab-Grown Eggs Or Sperm On Brink of Viability, UK Watchdog Finds](https://science.slashdot.org/story/25/01/29/001209/technology-for-lab-grown-eggs-or-sperm-on-brink-of-viability-uk-watchdog-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Cutting-edge development could revolutionize human reproduction and infertility treatments.

## AI Advancements and Ethical Challenges

* [Chinese and Iranian Hackers Are Using US AI Products To Bolster Cyberattacks](https://it.slashdot.org/story/25/01/29/1730253/chinese-and-iranian-hackers-are-using-us-ai-products-to-bolster-cyberattacks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - U.S.-based AI tools reportedly being exploited in sophisticated global cyberattacks.

* [OpenAI Says It Has Evidence DeepSeek Used Its Model To Train Competitor](https://slashdot.org/story/25/01/29/1356236/openai-says-it-has-evidence-deepseek-used-its-model-to-train-competitor?utm_source=rss1.0mainlinkanon&utm_medium=feed) - OpenAI accuses rivals of unethical model use in a competitive AI arms race.

* [Cali's AG Tells AI Companies Almost Everything They're Doing Might Be Illegal](https://gizmodo.com/californias-ag-tells-ai-companies-practically-everything-theyre-doing-might-be-illegal-2000555896) - Sweeping warnings from California's Attorney General about AI firms' legal violations.

## Cutting-Edge Software and Computing Developments

* [A minimal PyTorch implementation for training your own small LLM from scratch](https://github.com/Om-Alve/smolGPT) - An accessible PyTorch-based solution for training small language models independently.

* [Bidirectional Typechecking is Bidirectional](https://cybercat-institute.github.io//2025/01/28/bidirectional-typechecking/) - Explains a novel perspective in typechecking for modern programming languages.

* [Astral – 'We're building a new static type checker for Python'](https://twitter.com/charliermarsh/status/1884651482009477368) - A promising tool aiming to improve Python code reliability.

## Gaming and Virtual Worlds

* [No Man's Sky's update introduces billions of new stars, planets, and more](https://blog.playstation.com/2025/01/29/no-mans-skys-latest-update-introduces-billions-of-new-stars-planets-and-more-today/) - Opens a new exploration chapter in the procedural universe game.

* [How Good is Tesla Full Self Driving, by a Motor Trend Road Tester](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss) - In-depth review of Tesla's controversial autonomous driving capabilities.

## Socio-Political Implications of Tech

* [Virgin Money Chatbot Scolds Customer Who Typed 'Virgin'](https://tech.slashdot.org/story/25/01/29/1520256/virgin-money-chatbot-scolds-customer-who-typed-virgin?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A cautionary tale on the pitfalls of poorly trained AI in customer service.

* [Paper Mills Have Flooded Science With 400,000 Fake Studies, Experts Warn](https://science.slashdot.org/story/25/01/29/1033227/paper-mills-have-flooded-science-with-400000-fake-studies-experts-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Revelations about deceptive academic practices undermining scientific integrity.

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

* [2025-01-29, 18:50:00](https://science.slashdot.org/story/25/01/29/1754252/study-of-more-than-600-animal-and-plant-species-finds-genetic-diversity-has-declined-globally?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Study of More Than 600 Animal and Plant Species Finds Genetic Diversity Has Declined Globally](https://science.slashdot.org/story/25/01/29/1754252/study-of-more-than-600-animal-and-plant-species-finds-genetic-diversity-has-declined-globally?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 18:20:49](https://news.ycombinator.com/item?id=42868942) - [Nvidia Shares Resume Fall](https://www.ft.com/content/68912f4f-c3a6-4ef7-9ca9-4f92a92600a3)
* [2025-01-29, 18:17:00](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss) - [Linux is the Name That Shall Not be Spoken at Facebook](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss)
* [2025-01-29, 18:10:00](https://tech.slashdot.org/story/25/01/29/1738249/comcast-is-rolling-out-ultra-low-lag-tech-that-could-fix-the-internet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comcast Is Rolling Out 'Ultra-Low Lag' Tech That Could Fix the Internet](https://tech.slashdot.org/story/25/01/29/1738249/comcast-is-rolling-out-ultra-low-lag-tech-that-could-fix-the-internet?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 18:09:19](https://news.ycombinator.com/item?id=42868770) - [A minimal PyTorch implementation for training your own small LLM from scratch](https://github.com/Om-Alve/smolGPT)
* [2025-01-29, 18:06:02](https://news.ycombinator.com/item?id=42868718) - [Adding iodine to salt played a role in cognitive improvements: research (2013)](https://www.discovermagazine.com/health/how-adding-iodine-to-salt-boosted-americans-iq)
* [2025-01-29, 17:59:28](https://news.ycombinator.com/item?id=42868618) - [No Man's Sky's update introduces billions of new stars, planets, and more](https://blog.playstation.com/2025/01/29/no-mans-skys-latest-update-introduces-billions-of-new-stars-planets-and-more-today/)
* [2025-01-29, 17:56:51](https://news.ycombinator.com/item?id=42868576) - [Astral – \"We're building a new static type checker for Python\"](https://twitter.com/charliermarsh/status/1884651482009477368)
* [2025-01-29, 17:53:53](https://news.ycombinator.com/item?id=42868531) - [Intel doesn't know how to be a foundry,\" Tim Cook reportedly told TSMC's CEO](https://www.tomshardware.com/tech-industry/tsmc-founder-says-tim-cook-told-him-intel-did-not-know-how-to-be-a-foundry)
* [2025-01-29, 17:49:16](https://news.ycombinator.com/item?id=42868464) - [Ötzi the Lyme Mummy (2019)](https://vetmed.illinois.edu/i-tick/2019/08/09/iceman-lyme-mummy-tattle-the-tick-blog/)
* [2025-01-29, 17:44:45](https://news.ycombinator.com/item?id=42868390) - [An analysis of DeepSeek's R1-Zero and R1](https://arcprize.org/blog/r1-zero-r1-results-analysis)
* [2025-01-29, 17:38:07](https://news.ycombinator.com/item?id=42868271) - [DeepSeek's Hidden Bias: How We Cut It by 76% Without Performance Loss](https://www.hirundo.io/blog/deepseek-r1-debiased)
* [2025-01-29, 17:30:00](https://it.slashdot.org/story/25/01/29/1730253/chinese-and-iranian-hackers-are-using-us-ai-products-to-bolster-cyberattacks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Chinese and Iranian Hackers Are Using US AI Products To Bolster Cyberattacks](https://it.slashdot.org/story/25/01/29/1730253/chinese-and-iranian-hackers-are-using-us-ai-products-to-bolster-cyberattacks?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 17:00:50](https://news.ycombinator.com/item?id=42867708) - [Frigade (YC W23) is hiring engineer #2](https://www.ycombinator.com/companies/frigade/jobs/KUwAluN-senior-full-stack-engineer)
* [2025-01-29, 16:45:00](https://news.slashdot.org/story/25/01/29/1622227/copyright-office-offers-assurances-on-ai-filmmaking-tools?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Copyright Office Offers Assurances on AI Filmmaking Tools](https://news.slashdot.org/story/25/01/29/1622227/copyright-office-offers-assurances-on-ai-filmmaking-tools?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 16:40:19](https://news.ycombinator.com/item?id=42867324) - [Society for Technical Communication to permanently close its doors](https://www.stc.org/)
* [2025-01-29, 16:37:05](https://lobste.rs/s/s89gxq/why_trees_without_branches_grow_faster) - [Why Trees Without Branches Grow Faster: The Case for Reducing Branches in Code](https://cedardb.com/blog/reducing_branches/)
* [2025-01-29, 16:30:37](https://lobste.rs/s/gexezf/picking_equatable_names) - [Picking Equatable Names](https://thunderseethe.dev/posts/debruijn-indices/)
* [2025-01-29, 16:22:10](https://lobste.rs/s/oxmxzl/using_v2ray_with_caddy_access_internet) - [Using v2ray with Caddy to Access the Internet in China](https://sequentialread.com/v2ray-caddy-to-access-the-internet-in-china/)
* [2025-01-29, 16:09:00](https://slashdot.org/story/25/01/29/169257/new-zealand-relaxes-visa-rules-to-lure-digital-nomads?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Zealand Relaxes Visa Rules To Lure Digital Nomads](https://slashdot.org/story/25/01/29/169257/new-zealand-relaxes-visa-rules-to-lure-digital-nomads?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 16:07:09](https://news.ycombinator.com/item?id=42866702) - [Effective AI code suggestions: less is more](https://www.qodo.ai/blog/effective-code-suggestions-llms-less-is-more/)
* [2025-01-29, 15:58:20](https://news.ycombinator.com/item?id=42866572) - [Case Study: ByteDance Uses eBPF to Enhance Networking Performance](https://ebpf.foundation/case-study-bytedance-uses-ebpf-to-enhance-networking-performance/)
* [2025-01-29, 15:37:31](https://news.ycombinator.com/item?id=42866201) - [Why DeepSeek had to be open source](https://www.getlago.com/blog/deepseek-open-source)
* [2025-01-29, 15:34:06](https://lobste.rs/s/f6frhd/hell_haskell_shell) - [Hell (Haskell shell)](https://chrisdone.com/posts/hell-year-in-review-2025/)
* [2025-01-29, 15:20:00](https://tech.slashdot.org/story/25/01/29/1520256/virgin-money-chatbot-scolds-customer-who-typed-virgin?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Virgin Money Chatbot Scolds Customer Who Typed 'Virgin'](https://tech.slashdot.org/story/25/01/29/1520256/virgin-money-chatbot-scolds-customer-who-typed-virgin?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 15:16:41](https://news.ycombinator.com/item?id=42865867) - [A story about restoring and upgrading a Commodore Amiga 1000](https://celso.io/posts/2025/01/26/the-first-perfect-computer/)
* [2025-01-29, 14:59:59](https://news.ycombinator.com/item?id=42865619) - [Google Pixel 4a old firmware is gone, trapping users on the buggy battery update](https://www.androidcentral.com/phones/google-pixel-4as-old-firmware-is-gone-trapping-users-on-the-buggy-battery-update)
* [2025-01-29, 14:56:57](https://news.ycombinator.com/item?id=42865575) - [Complete hardware and software setup for running Deepseek-R1 locally. ($6000)](https://twitter.com/carrigmat/status/1884244369907278106)
* [2025-01-29, 14:56:56](https://news.ycombinator.com/item?id=42865574) - [Only 1 in 10 Oracle Java users want to stay with Big Red](https://www.theregister.com/2025/01/29/only_one_in_ten_oracle/)
* [2025-01-29, 14:40:00](https://science.slashdot.org/story/25/01/29/1033227/paper-mills-have-flooded-science-with-400000-fake-studies-experts-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Paper Mills Have Flooded Science With 400,000 Fake Studies, Experts Warn](https://science.slashdot.org/story/25/01/29/1033227/paper-mills-have-flooded-science-with-400000-fake-studies-experts-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 14:21:54](https://news.ycombinator.com/item?id=42865174) - [Cali's AG Tells AI Companies Almost Everything They're Doing Might Be Illegal](https://gizmodo.com/californias-ag-tells-ai-companies-practically-everything-theyre-doing-might-be-illegal-2000555896)
* [2025-01-29, 14:06:33](https://news.ycombinator.com/item?id=42865018) - [Proof of concept WMI virus (zero-day)](https://github.com/pulpocaminante/Stuxnet)
* [2025-01-29, 14:00:00](https://slashdot.org/story/25/01/29/1356236/openai-says-it-has-evidence-deepseek-used-its-model-to-train-competitor?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Says It Has Evidence DeepSeek Used Its Model To Train Competitor](https://slashdot.org/story/25/01/29/1356236/openai-says-it-has-evidence-deepseek-used-its-model-to-train-competitor?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 13:42:03](https://news.ycombinator.com/item?id=42864788) - [Seagate: 'new' hard drives used for tens of thousands of hours](https://www.tomshardware.com/pc-components/hdds/german-seagate-customers-say-their-new-hard-drives-were-actually-used-resold-hdds-reportedly-used-for-tens-of-thousands-of-hours)
* [2025-01-29, 13:33:00](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss) - [Backdoor Infecting VPNs Used “Magic Packets” for Stealth and Security](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss)
* [2025-01-29, 12:55:07](https://lobste.rs/s/uysczu/portal_flow_brings_it_all_together) - [Portal flow brings it all together](https://30fps.net/pages/pvs-portal-flow/)
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
* [2025-01-29, 03:10:06](https://lobste.rs/s/gbxviz/statistical_process_control) - [Statistical Process Control: Practitioner's Guide](https://entropicthoughts.com/statistical-process-control-a-practitioners-guide)
* [2025-01-29, 02:03:11](https://lobste.rs/s/n9vtqo/my_history_with_forth_stack_machines_2010) - [My history with Forth & stack machines (2010)](https://yosefk.com/blog/my-history-with-forth-stack-machines.html)
* [2025-01-29, 01:30:00](https://science.slashdot.org/story/25/01/28/2352213/ghost-that-haunts-south-carolina-rail-line-may-be-caused-by-tiny-earthquakes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Ghost' That Haunts South Carolina Rail Line May Be Caused By Tiny Earthquakes](https://science.slashdot.org/story/25/01/28/2352213/ghost-that-haunts-south-carolina-rail-line-may-be-caused-by-tiny-earthquakes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 00:50:00](https://yro.slashdot.org/story/25/01/28/2225214/record-45-billion-eu-fine-punished-its-innovation-google-tells-eu-court?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Record $4.5 Billion EU Fine Punished Its Innovation, Google Tells EU Court](https://yro.slashdot.org/story/25/01/28/2225214/record-45-billion-eu-fine-punished-its-innovation-google-tells-eu-court?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 00:45:00](https://yro.slashdot.org/story/25/01/28/2218204/white-house-looking-into-national-security-implications-of-deepseeks-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [White House 'Looking Into' National Security Implications of DeepSeek's AI](https://yro.slashdot.org/story/25/01/28/2218204/white-house-looking-into-national-security-implications-of-deepseeks-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-29, 00:25:00](https://yro.slashdot.org/story/25/01/28/226206/opm-sued-over-privacy-concerns-with-new-government-wide-email-system?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OPM Sued Over Privacy Concerns With New Government-Wide Email System](https://yro.slashdot.org/story/25/01/28/226206/opm-sued-over-privacy-concerns-with-new-government-wide-email-system?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 23:17:00](https://soylentnews.org/article.pl?sid=25/01/27/1659214&from=rss) - [Your Hollywood Career: How to Tell When the End Is Nigh](https://soylentnews.org/article.pl?sid=25/01/27/1659214&from=rss)
* [2025-01-28, 22:38:14](https://lobste.rs/s/fzjejf/handwiki) - [Handwiki](https://handwiki.org/)
* [2025-01-28, 21:20:42](https://news.ycombinator.com/item?id=42858187) - [The ancient discovery that put a Silk Road city back on the map](https://www.bbc.com/travel/article/20250127-one-of-the-last-traders-on-the-silk-road)
* [2025-01-28, 19:19:15](https://lobste.rs/s/4kvugz/sunsetting_cursed_terminal_emulation) - [Sunsetting Cursed Terminal Emulation](https://arcan-fe.com/2025/01/27/sunsetting-cursed-terminal-emulation/)
* [2025-01-28, 18:57:19](https://lobste.rs/s/pzo2xo/speculation_attacks_on_apple_m3_slap_flop) - [Speculation Attacks on Apple M3: SLAP and FLOP](https://predictors.fail/)
* [2025-01-28, 18:31:34](https://news.ycombinator.com/item?id=42856023) - [New speculative attacks on Apple CPUs](https://predictors.fail/)
* [2025-01-28, 18:31:00](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss) - [The Invalid 68030 Instruction That Accidentally Allowed the Mac Classic II to Successfully Boot Up](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss)
* [2025-01-28, 18:19:04](https://lobste.rs/s/bkpqln/marginalia_search_engine_prioritizing) - [Marginalia - A search engine prioritizing non-commercial content](https://marginalia-search.com/)
* [2025-01-28, 15:46:53](https://news.ycombinator.com/item?id=42853633) - [Boom XB-1 First Supersonic Flight [video]](https://www.youtube.com/watch?v=-qisIViAHwI)
* [2025-01-28, 13:45:00](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss) - [China's Second-Largest Foundry Hires Former Intel Executive to Lead Advanced Node Development](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss)
* [2025-01-28, 12:13:43](https://lobste.rs/s/noffmp/seven_things_i_know_after_25_years) - [Seven things I know after 25 years of development](https://zverok.space/blog/2025-01-27-7things-euruko.html)
* [2025-01-28, 11:37:41](https://lobste.rs/s/utwbwv/can_we_retain_benefits_transitive) - [Can We Retain the Benefits of Transitive Dependencies Without Undermining Security?](https://tratt.net/laurie/blog/2024/can_we_retain_the_benefits_of_transitive_dependencies_without_undermining_security.html)
* [2025-01-28, 09:01:00](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss) - [First-Ever Data Center On The Moon Set To Launch Next Month](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss)
* [2025-01-28, 07:35:08](https://lobste.rs/s/wb8pzw/deepseek_faq) - [DeepSeek FAQ](https://stratechery.com/2025/deepseek-faq/)
* [2025-01-28, 06:34:56](https://lobste.rs/s/y1eqnf/clone2leak_your_git_credentials_belong) - [Clone2Leak: Your Git Credentials Belong To Us](https://flatt.tech/research/posts/clone2leak-your-git-credentials-belong-to-us/)
* [2025-01-28, 04:14:00](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss) - [The Drunken Plagiarists: Working with Co-pilots](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss)
* [2025-01-27, 23:30:00](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss) - [Data Breach Hitting PowerSchool Looks Very, Very Bad](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss)
* [2025-01-27, 21:42:11](https://lobste.rs/s/qczsgz/building_personal_software_with_claude) - [Building personal software with Claude](https://blog.nelhage.com/post/personal-software-with-claude/)
* [2025-01-27, 20:28:36](https://lobste.rs/s/yqx2sx/pebble_smartwatches_open_sourced) - [Pebble smartwatches open-sourced](https://opensource.googleblog.com/2025/01/see-code-that-powered-pebble-smartwatches.html)
* [2025-01-27, 18:44:00](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss) - [Sleeping Pills Stop the Brain’s System for Cleaning Out Waste](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss)
* [2025-01-27, 16:25:00](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss) - [Linux Kernel 6.13 Announced](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss)
* [2025-01-27, 14:22:06](https://lobste.rs/s/j9iugq/is_nixos_truly_reproducible) - [Is NixOS truly reproducible?](https://luj.fr/blog/is-nixos-truly-reproducible.html)
* [2025-01-27, 13:55:00](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss) - [Think It Takes 21 Days to Form a Habit? Science Says Think Again](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss)
* [2025-01-27, 09:10:00](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss) - [Medical Device Company Suddenly Stops Hospitals From Fixing Machines Themselves](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss)
* [2025-01-27, 04:22:00](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss) - [Mysterious Blobs Found Inside Cells Are Rewriting the Story of How Life Works](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss)
* [2025-01-26, 23:34:00](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss) - [Florida Man Eats Diet of Butter, Cheese, Beef; Cholesterol Oozes From His Body](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss)
* [2025-01-26, 18:51:00](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss) - [Real Datacenter Emissions Are A Dirty Secret](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss)
* [2025-01-26, 14:10:00](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss) - [Touchscreen Dashboards Have Finally Taken Over and Ruined Driving](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss)
* [2025-01-26, 09:25:00](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss) - [“Project Mini Rack” Wants Make Your Mini-Homelab a Reality](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss)
* [2025-01-26, 09:08:56](https://news.ycombinator.com/item?id=42828883) - [Composable SQL](https://borretti.me/article/composable-sql)
* [2025-01-26, 04:38:00](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss) - [Anthropic Chief Says AI Could Surpass “Almost All Humans at Almost Everything” Shortly After 2027](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss)
* [2025-01-25, 23:53:00](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss) - [Not an Asteroid, Just Elon's Car](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss)
* [2025-01-25, 19:08:00](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss) - [How Many Sexes Are There?](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss)
* [2025-01-25, 14:23:00](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss) - [Wine 10.0 Brings Arm Windows Apps to Linux, Still Isn't an Emulator](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss)
* [2025-01-25, 09:40:00](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss) - [Trump Pardons Dark Web Silk Road Marketplace Founder Ross Ulbricht](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss)
* [2025-01-25, 04:54:00](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss) - [Opinion: We Need to Protect the Protocol That Runs Bluesky](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss)
* [2025-01-25, 00:09:00](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss) - [AI Workloads Spur Bigger Memory Drives](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss)
