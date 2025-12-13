# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [OpenAI are quietly adopting skills, now available in ChatGPT and Codex CLI](https://simonwillison.net/2025/Dec/12/openai-skills/) - OpenAI introduced new skills for ChatGPT and Codex CLI, suggesting advanced AI integration within these tools. [Comments](https://news.ycombinator.com/item?id=46250332)

* [Google Translate Expands Live Translation To All Earbuds On Android](https://tech.slashdot.org/story/25/12/12/2125205/google-translate-expands-live-translation-to-all-earbuds-on-android) - Live translation feature becomes universally available across all supported Android earbuds. [Comments](https://tech.slashdot.org/story/25/12/12/2125205/google-translate-expands-live-translation-to-all-earbuds-on-android)

* [The (Mostly) Complete Unicode Spiral (2022)](https://shkspr.mobi/blog/2022/07/the-mostly-complete-unicode-spiral/) - Explore a fascinating visual representation of the Unicode character set. [Comments](https://lobste.rs/s/klxjty/mostly_complete_unicode_spiral_2022)

* [Bill Gates' Daughter Secures $30 Million For AI App Built In Stanford Dorm](https://tech.slashdot.org/story/25/12/12/2136246/bill-gates-daughter-secures-30-million-for-ai-app-built-in-stanford-dorm) - An innovative AI application in its early stages achieves substantial funding. [Comments](https://tech.slashdot.org/story/25/12/12/2136246/bill-gates-daughter-secures-30-million-for-ai-app-built-in-stanford-dorm)

## Security and Privacy

* [Doxers Posing as Cops Are Tricking Big Tech Firms into Sharing People's Data](https://www.wired.com/story/doxers-posing-as-cops-are-tricking-big-tech-firms-into-sharing-peoples-private-data/) - Malicious individuals exploit system gaps to access sensitive user data from tech firms. [Comments](https://news.ycombinator.com/item?id=46252171)

* [Chinese Whistleblower Living In US Is Being Hunted By Beijing With US Tech](https://yro.slashdot.org/story/25/12/12/2341230/chinese-whistleblower-living-in-us-is-being-hunted-by-beijing-with-us-tech?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Surveillance technology enables foreign nations to monitor whistleblowers abroad. [Comments](https://yro.slashdot.org/story/25/12/12/2341230/chinese-whistleblower-living-in-us-is-being-hunted-by-beijing-with-us-tech)

* [US To Mandate AI Vendors Measure Political Bias For Federal Sales](https://yro.slashdot.org/story/25/12/12/2148210/us-to-mandate-ai-vendors-measure-political-bias-for-federal-sales?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Federal policies encourage transparency in AI systems by evaluating their biases. [Comments](https://yro.slashdot.org/story/25/12/12/2148210/us-to-mandate-ai-vendors-measure-political-bias-for-federal-sales)

## Legal and Political

* [Ukrainians Sue US Chip Firms For Powering Russian Drones, Missiles](https://yro.slashdot.org/story/25/12/12/2254245/ukrainians-sue-us-chip-firms-for-powering-russian-drones-missiles?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Hold chipmakers accountable for supplying technologies allegedly used in international conflicts. [Comments](https://yro.slashdot.org/story/25/12/12/2254245/ukrainians-sue-us-chip-firms-for-powering-russian-drones-missiles)

* [Berlin Approves New Expansion of Police Surveillance Powers](https://yro.slashdot.org/story/25/12/12/1830239/berlin-approves-new-expansion-of-police-surveillance-powers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Germany enhances security efforts, sparking debates on privacy concerns. [Comments](https://yro.slashdot.org/story/25/12/12/1830239/berlin-approves-new-expansion-of-police-surveillance-powers)

## Pop Culture and Entertainment

* [Computer Animator and Amiga fanatic Dick Van Dyke turns 100](https://news.ycombinator.com/item?id=46252993) - Celebrating a tech enthusiast's milestone birthday and his legendary contributions. [Comments](https://news.ycombinator.com/item?id=46252993)

* [1300 Still Images from the Animated Films of Hayao Miyazaki's Studio Ghibli (2023)](https://www.ghibli.jp/info/013772/) - A visual treat for Studio Ghibli fans showcasing iconic animation stills. [Comments](https://news.ycombinator.com/item?id=46251582)

## Science and Future Technologies

* [Improved Truncated Wigner Approximation Makes Quantum Calcs on Classical Computers More Accessible](https://soylentnews.org/article.pl?sid=25/12/07/1532244&from=rss) - Delving into potential breakthroughs in quantum-classical computations. [Comments](https://soylentnews.org/article.pl?sid=25/12/07/1532244&from=rss)

* [Complex Life Started Nearly a Billion Years Earlier Than We Thought](https://soylentnews.org/article.pl?sid=25/12/08/0152232&from=rss) - Upending timelines for life's appearance in Earth's history. [Comments](https://soylentnews.org/article.pl?sid=25/12/08/0152232&from=rss)

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

* [2025-12-13, 08:15:48](https://news.ycombinator.com/item?id=46252993) - [Computer Animator and Amiga fanatic Dick Van Dyke turns 100](https://news.ycombinator.com/item?id=46252993)
* [2025-12-13, 08:06:41](https://lobste.rs/s/jkwpjw/what_s_point_lightweight_code_with_modern) - [What&apos;s the point of lightweight code with modern computers?](https://liam-on-linux.dreamwidth.org/97426.html)
* [2025-12-13, 07:35:47](https://lobste.rs/s/sikol2/20_years_digital_life_gone_instant_thanks) - [20 Years of Digital Life, Gone in an Instant, thanks to Apple](https://hey.paris/posts/appleid/)
* [2025-12-13, 07:22:53](https://lobste.rs/s/ds24fd/oss_friday_update_fibers_are_future_ruby) - [OSS Friday Update - Fibers are the Future of Ruby](https://noteflakes.com/articles/2025-12-12-friday-update)
* [2025-12-13, 07:19:31](https://lobste.rs/s/klxjty/mostly_complete_unicode_spiral_2022) - [The (Mostly) Complete Unicode Spiral (2022)](https://shkspr.mobi/blog/2022/07/the-mostly-complete-unicode-spiral/)
* [2025-12-13, 07:00:00](https://yro.slashdot.org/story/25/12/12/2341230/chinese-whistleblower-living-in-us-is-being-hunted-by-beijing-with-us-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Whistleblower Living In US Is Being Hunted By Beijing With US Tech](https://yro.slashdot.org/story/25/12/12/2341230/chinese-whistleblower-living-in-us-is-being-hunted-by-beijing-with-us-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 06:55:58](https://lobste.rs/s/npbaul/crypto_fido_security_tokens) - [Crypto, FIDO and Security Tokens](https://docs.google.com/spreadsheets/d/1XlwmreiBkt82F4HG965Yp9ncULkgnFpNyfe7WAAtYPk/edit?gid=0#gid=0)
* [2025-12-13, 05:06:59](https://news.ycombinator.com/item?id=46252171) - [Doxers Posing as Cops Are Tricking Big Tech Firms into Sharing People&apos;s Data](https://www.wired.com/story/doxers-posing-as-cops-are-tricking-big-tech-firms-into-sharing-peoples-private-data/)
* [2025-12-13, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss) - [USA Wants Your Social Media History If You Visit](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss)
* [2025-12-13, 04:55:59](https://news.ycombinator.com/item?id=46252114) - [Apple has locked my Apple ID, and I have no recourse. A plea for help](https://hey.paris/posts/appleid/)
* [2025-12-13, 04:10:48](https://lobste.rs/s/dndrsh/indices_point_between_elements_2015) - [Indices point between elements (2015)](https://blog.nelhage.com/2015/08/indices-point-between-elements/)
* [2025-12-13, 03:30:00](https://yro.slashdot.org/story/25/12/12/2254245/ukrainians-sue-us-chip-firms-for-powering-russian-drones-missiles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ukrainians Sue US Chip Firms For Powering Russian Drones, Missiles](https://yro.slashdot.org/story/25/12/12/2254245/ukrainians-sue-us-chip-firms-for-powering-russian-drones-missiles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 03:21:32](https://news.ycombinator.com/item?id=46251684) - [Google Removes Sci-Hub Domains from U.S. Search Results Due to Dated Court Order](https://torrentfreak.com/google-removes-sci-hub-domains-from-u-s-search-results-due-to-dated-court-order/)
* [2025-12-13, 03:17:18](https://news.ycombinator.com/item?id=46251667) - [The Coming Need for Formal Specification](https://benjamincongdon.me/blog/2025/12/12/The-Coming-Need-for-Formal-Specification/)
* [2025-12-13, 03:15:36](https://lobste.rs/s/52nkjo/cycle_accurate_ym2149_psg_emulator) - [Cycle-accurate YM2149 PSG emulator](https://github.com/slippyex/ym2149-rs)
* [2025-12-13, 03:00:36](https://lobste.rs/s/vpdzua/coming_need_for_formal_specification) - [The Coming Need for Formal Specification](https://benjamincongdon.me/blog/2025/12/12/The-Coming-Need-for-Formal-Specification/)
* [2025-12-13, 02:56:49](https://news.ycombinator.com/item?id=46251582) - [1300 Still Images from the Animated Films of Hayao Miyazaki&apos;s Studio Ghibli (2023)](https://www.ghibli.jp/info/013772/)
* [2025-12-13, 02:20:00](https://news.slashdot.org/story/25/12/12/234225/arizona-city-rejects-data-center-after-lobbying-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arizona City Rejects Data Center After Lobbying Push](https://news.slashdot.org/story/25/12/12/234225/arizona-city-rejects-data-center-after-lobbying-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 02:06:05](https://lobste.rs/s/zhfh4t/vacuum_is_lie_about_your_indexes) - [VACUUM Is a Lie: About Your Indexes](https://boringsql.com/posts/vacuum-is-lie/)
* [2025-12-13, 01:40:00](https://hardware.slashdot.org/story/25/12/12/2258200/framework-raises-ddr5-memory-prices-by-50-for-diy-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Framework Raises DDR5 Memory Prices By 50% For DIY Laptops](https://hardware.slashdot.org/story/25/12/12/2258200/framework-raises-ddr5-memory-prices-by-50-for-diy-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 01:20:00](https://games.slashdot.org/story/25/12/12/2316202/doom-studio-id-software-forms-wall-to-wall-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Doom Studio id Software Forms &apos;Wall-To-Wall&apos; Union](https://games.slashdot.org/story/25/12/12/2316202/doom-studio-id-software-forms-wall-to-wall-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 01:00:00](https://yro.slashdot.org/story/25/12/12/2148210/us-to-mandate-ai-vendors-measure-political-bias-for-federal-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US To Mandate AI Vendors Measure Political Bias For Federal Sales](https://yro.slashdot.org/story/25/12/12/2148210/us-to-mandate-ai-vendors-measure-political-bias-for-federal-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-13, 00:50:47](https://news.ycombinator.com/item?id=46250862) - [The Checkerboard](https://99percentinvisible.org/episode/650-the-checkerboard/)
* [2025-12-13, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss) - [Man Dies of Rabies After Kidney Transplant From Donor Who Saved Kitten From Skunk](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss)
* [2025-12-13, 00:20:00](https://it.slashdot.org/story/25/12/12/2140258/russian-hackers-debut-simple-ransomware-service-but-store-keys-in-plain-text?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Hackers Debut Simple Ransomware Service, But Store Keys In Plain Text](https://it.slashdot.org/story/25/12/12/2140258/russian-hackers-debut-simple-ransomware-service-but-store-keys-in-plain-text?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 23:40:00](https://tech.slashdot.org/story/25/12/12/2136246/bill-gates-daughter-secures-30-million-for-ai-app-built-in-stanford-dorm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bill Gates&apos; Daughter Secures $30 Million For AI App Built In Stanford Dorm](https://tech.slashdot.org/story/25/12/12/2136246/bill-gates-daughter-secures-30-million-for-ai-app-built-in-stanford-dorm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 23:30:19](https://news.ycombinator.com/item?id=46250332) - [OpenAI are quietly adopting skills, now available in ChatGPT and Codex CLI](https://simonwillison.net/2025/Dec/12/openai-skills/)
* [2025-12-12, 23:26:26](https://news.ycombinator.com/item?id=46250309) - [50 years of proof assistants](https://lawrencecpaulson.github.io//2025/12/05/History_of_Proof_Assistants.html)
* [2025-12-12, 23:00:00](https://tech.slashdot.org/story/25/12/12/2125205/google-translate-expands-live-translation-to-all-earbuds-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Translate Expands Live Translation To All Earbuds On Android](https://tech.slashdot.org/story/25/12/12/2125205/google-translate-expands-live-translation-to-all-earbuds-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 22:22:00](https://yro.slashdot.org/story/25/12/12/2054200/the-data-breach-that-hit-two-thirds-of-a-country?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Data Breach That Hit Two-Thirds of a Country](https://yro.slashdot.org/story/25/12/12/2054200/the-data-breach-that-hit-two-thirds-of-a-country?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 22:02:14](https://news.ycombinator.com/item?id=46249538) - [Show HN: Tiny VM sandbox in C with apps in Rust, C and Zig](https://github.com/ringtailsoftware/uvm32)
* [2025-12-12, 21:42:04](https://news.ycombinator.com/item?id=46249337) - [Capsudo: Rethinking sudo with object capabilities](https://ariadne.space/2025/12/12/rethinking-sudo-with-object-capabilities.html)
* [2025-12-12, 21:40:00](https://news.slashdot.org/story/25/12/12/2046226/new-kindle-feature-uses-ai-to-answer-questions-about-books---and-authors-cant-opt-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Kindle Feature Uses AI To Answer Questions About Books - And Authors Can&apos;t Opt Out](https://news.slashdot.org/story/25/12/12/2046226/new-kindle-feature-uses-ai-to-answer-questions-about-books---and-authors-cant-opt-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 21:00:54](https://news.ycombinator.com/item?id=46248892) - [Motion (YC W20) Is Hiring Senior Staff Front End Engineers](https://jobs.ashbyhq.com/motion/715d9646-27d4-44f6-9229-61eb0380ae39)
* [2025-12-12, 21:00:00](https://entertainment.slashdot.org/story/25/12/12/2040247/arkansas-becoming-1st-state-to-sever-ties-with-pbs-effective-july-1?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arkansas Becoming 1st State To Sever Ties With PBS, Effective July 1](https://entertainment.slashdot.org/story/25/12/12/2040247/arkansas-becoming-1st-state-to-sever-ties-with-pbs-effective-july-1?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 20:57:34](https://news.ycombinator.com/item?id=46248859) - [GNU Unifont](https://unifoundry.com/unifont/index.html)
* [2025-12-12, 20:41:38](https://news.ycombinator.com/item?id=46248644) - [macOS 26.2 enables fast AI clusters with RDMA over Thunderbolt](https://developer.apple.com/documentation/macos-release-notes/macos-26_2-release-notes#RDMA-over-Thunderbolt)
* [2025-12-12, 20:41:16](https://lobste.rs/s/fkbmwj/pure_vs_impure_iterators_go) - [Pure vs. impure iterators in Go](https://jub0bs.com/posts/2025-05-29-pure-vs-impure-iterators-in-go/)
* [2025-12-12, 20:36:00](https://entertainment.slashdot.org/story/25/12/12/2036218/amazon-prime-video-pulls-ai-powered-recaps-after-fallout-flub?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Prime Video Pulls AI-Powered Recaps After Fallout Flub](https://entertainment.slashdot.org/story/25/12/12/2036218/amazon-prime-video-pulls-ai-powered-recaps-after-fallout-flub?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 20:26:57](https://lobste.rs/s/lwmaa9/security_issues_with_electronic) - [Security Issues with Electronic Invoices](https://invoice.secvuln.info/)
* [2025-12-12, 20:15:58](https://news.ycombinator.com/item?id=46248323) - [Rats Play DOOM](https://ratsplaydoom.com/)
* [2025-12-12, 19:36:00](https://soylentnews.org/article.pl?sid=25/12/11/0157235&amp;from=rss) - [ICEBlock App Sues Trump Administration for Censorship and &apos;Unlawful Threats&apos;](https://soylentnews.org/article.pl?sid=25/12/11/0157235&amp;from=rss)
* [2025-12-12, 18:32:39](https://lobste.rs/s/oo7ovk/my_python_setup_december_2025) - [My Python setup, December 2025](https://chrisamico.com/blog/2025-12-07/uv-new-python-setup/)
* [2025-12-12, 18:30:00](https://yro.slashdot.org/story/25/12/12/1830239/berlin-approves-new-expansion-of-police-surveillance-powers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Berlin Approves New Expansion of Police Surveillance Powers](https://yro.slashdot.org/story/25/12/12/1830239/berlin-approves-new-expansion-of-police-surveillance-powers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 18:21:22](https://lobste.rs/s/23lzm2/50_years_proof_assistants) - [50 years of proof assistants](https://lawrencecpaulson.github.io//2025/12/05/History_of_Proof_Assistants.html)
* [2025-12-12, 18:12:05](https://lobste.rs/s/aeu3bf/yocaml_framework_used_describe_static) - [YOCaml a framework used to describe static site generator](https://yocaml.github.io/tutorial/index.html)
* [2025-12-12, 17:25:00](https://news.slashdot.org/story/25/12/12/1655239/apple-tax-is-dead-in-the-usa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Apple Tax is Dead in the USA&apos;](https://news.slashdot.org/story/25/12/12/1655239/apple-tax-is-dead-in-the-usa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 17:18:19](https://lobste.rs/s/s9uxqa/django_what_s_new_6_0) - [Django: what’s new in 6.0](https://adamj.eu/tech/2025/12/03/django-whats-new-6.0/)
* [2025-12-12, 16:25:49](https://lobste.rs/s/2dh57o/async_dns) - [async dns](https://flak.tedunangst.com/post/async-dns)
* [2025-12-12, 16:23:10](https://news.ycombinator.com/item?id=46245622) - [String theory inspires a brilliant, baffling new math proof](https://www.quantamagazine.org/string-theory-inspires-a-brilliant-baffling-new-math-proof-20251212/)
* [2025-12-12, 15:44:31](https://lobste.rs/s/ouph7k/i_couldn_t_find_logging_library_worked_for) - [I couldn&apos;t find a logging library that worked for my library, so I made one](https://hackers.pub/@hongminhee/2025/logtape-fedify-case-study)
* [2025-12-12, 14:54:00](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss) - [Ubuntu to Offer AMD ROCm Packages for AI Processing](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss)
* [2025-12-12, 13:37:05](https://lobste.rs/s/ytelgx/rethinking_sudo_with_object) - [Rethinking sudo with object capabilities](https://ariadne.space/2025/12/12/rethinking-sudo-with-object-capabilities.html)
* [2025-12-12, 12:51:40](https://news.ycombinator.com/item?id=46243655) - [Sick of smart TVs? Here are your best options](https://arstechnica.com/gadgets/2025/12/the-ars-technica-guide-to-dumb-tvs/)
* [2025-12-12, 10:50:22](https://news.ycombinator.com/item?id=46242871) - [Koralm Railway](https://infrastruktur.oebb.at/en/projects-for-austria/railway-lines/southern-line-vienna-villach/koralm-railway)
* [2025-12-12, 10:46:40](https://lobste.rs/s/zi1xf6/building_smaller_docker_images_faster) - [Building smaller Docker images faster](https://sgt.hootr.club/blog/docker-protips/)
* [2025-12-12, 10:07:00](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss) - [Porsche Panic in Russia as Pricey Status Symbols Forget How to Car](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss)
* [2025-12-12, 06:17:28](https://news.ycombinator.com/item?id=46241368) - [Freeing a Xiaomi humidifier from the cloud](https://0l.de/blog/2025/11/xiaomi-humidifier/)
* [2025-12-12, 06:15:48](https://lobste.rs/s/cxhdjd/freeing_xiaomi_humidifier_from_cloud) - [Freeing a Xiaomi Humidifier from the Cloud](https://0l.de/blog/2025/11/xiaomi-humidifier/)
* [2025-12-12, 05:56:21](https://lobste.rs/s/g1o2t8/guarding_my_git_forge_against_ai_scrapers) - [Guarding My Git Forge Against AI Scrapers](https://vulpinecitrus.info/blog/guarding-git-forge-ai-scrapers/)
* [2025-12-12, 05:22:00](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss) - [Pebble Index 01 Arrives as a Private Open Source Voice Capture Ring](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss)
* [2025-12-12, 03:35:25](https://lobste.rs/s/lzmklx/being_sysadmin_is_hard) - [Being a SysAdmin is hard](https://about.tree.ht/blog/treehut-outages-december-2025)
* [2025-12-12, 00:39:00](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss) - [Russia Says It Might Build its Own Linux Community After Removal of Several Kernel Maintainers](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss)
* [2025-12-11, 23:56:10](https://news.ycombinator.com/item?id=46239076) - [Ensuring a National Policy Framework for Artificial Intelligence](https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/)
* [2025-12-11, 22:23:20](https://lobste.rs/s/lchmal/oils_0_37_0_alpine_linux_ysh_mycpp) - [Oils 0.37.0 - Alpine Linux, YSH, and mycpp](https://oils.pub/blog/2025/12/release-0.37.0.html)
* [2025-12-11, 20:48:49](https://lobste.rs/s/v5umfb/bidicalc_bidirectional_calculator) - [bidicalc: a bidirectional calculator](https://victorpoughon.github.io/bidicalc/)
* [2025-12-11, 19:56:00](https://soylentnews.org/article.pl?sid=25/12/10/2248258&amp;from=rss) - [ER Doctors Are Sounding the Alarm on a Fast-Growing Cannabis Illness](https://soylentnews.org/article.pl?sid=25/12/10/2248258&amp;from=rss)
* [2025-12-11, 19:48:06](https://lobste.rs/s/u7yz80/installing_every_nixos_package) - [Installing Every NixOS Package](https://unnamed.website/posts/installing-every-nixos-package/)
* [2025-12-11, 18:00:55](https://news.ycombinator.com/item?id=46234734) - [Show HN: I made a spreadsheet where formulas also update backwards](https://victorpoughon.github.io/bidicalc/)
* [2025-12-11, 15:07:00](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss) - [AI Favors Texts Written by Other AIs, Even When They&apos;re Worse Than Human Ones](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss)
* [2025-12-11, 10:25:00](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss) - [Proton Launches Encrypted Sheets as a Privacy-First Alternative to Google, Microsoft Excel](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss)
* [2025-12-11, 05:48:00](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss) - [This German State Decides to Save €15 Million Each Year By Kicking Out Microsoft for Open Source](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss)
* [2025-12-11, 00:52:00](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss) - [Chattanooga&apos;s Municipal Fiber Network Has Delivered $5.3 Billion in Community Benefits](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss)
* [2025-12-10, 20:11:00](https://soylentnews.org/article.pl?sid=25/12/10/023246&amp;from=rss) - [Planned Satellite Constellations May Swamp Future Orbiting Telescopes](https://soylentnews.org/article.pl?sid=25/12/10/023246&amp;from=rss)
* [2025-12-10, 15:25:00](https://soylentnews.org/article.pl?sid=25/12/08/1621249&amp;from=rss) - [Germany Bets Billions on Nuclear Fusion for Energy Future](https://soylentnews.org/article.pl?sid=25/12/08/1621249&amp;from=rss)
* [2025-12-10, 10:43:00](https://soylentnews.org/article.pl?sid=25/12/08/1614203&amp;from=rss) - [A Therapeutic HPV Vaccine Shrank Cervical Tumors in Mice](https://soylentnews.org/article.pl?sid=25/12/08/1614203&amp;from=rss)
* [2025-12-10, 05:52:00](https://soylentnews.org/article.pl?sid=25/12/08/1611257&amp;from=rss) - [Zig Quits GitHub, Says Microsoft&apos;s AI Obsession Has Ruined the Service](https://soylentnews.org/article.pl?sid=25/12/08/1611257&amp;from=rss)
* [2025-12-10, 01:09:00](https://soylentnews.org/article.pl?sid=25/12/08/0456233&amp;from=rss) - [This Cellular Trick Helps Cancer Spread, but Could Also Stop It](https://soylentnews.org/article.pl?sid=25/12/08/0456233&amp;from=rss)
* [2025-12-09, 20:23:00](https://soylentnews.org/article.pl?sid=25/12/08/0455213&amp;from=rss) - [Samsung&apos;s First Tri-Fold Phone is Here: Everything You Need to Know](https://soylentnews.org/article.pl?sid=25/12/08/0455213&amp;from=rss)
* [2025-12-09, 20:16:15](https://news.ycombinator.com/item?id=46210044) - [Beautiful Abelian Sandpiles](https://eavan.blog/posts/beautiful-sandpiles.html)
* [2025-12-09, 15:39:00](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss) - [Complex Life Started Nearly a Billion Years Earlier Than We Thought](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss)
* [2025-12-09, 10:51:00](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss) - [US Wants Laws to Force App Store Age Checks, Despite Apple&apos;s Existing Protections](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss)
* [2025-12-09, 06:03:00](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss) - [Common Desktop Environment \&quot;CDE\&quot; 2.5.3 Released After Two Years](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss)
* [2025-12-09, 01:21:00](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss) - [Improved Truncated Wigner Approximation Makes Quantum Calcs on Classical Computers More Accessible](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss)
* [2025-12-09, 01:20:08](https://news.ycombinator.com/item?id=46200157) - [Easel Now Has Stencils](https://easel.games/blog/2025-dec-update)
