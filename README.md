# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [Introducing Intel® Advanced Performance Extensions (Intel® APX)](https://www.intel.com/content/www/us/en/developer/articles/technical/advanced-performance-extensions-apx.html) - Intel unveils their latest processing extensions aimed at boosting computational capabilities.

* [HTTP/3 is everywhere but nowhere](https://httptoolkit.com/blog/http3-quic-open-source-support-nowhere/) - Analysis of the paradox of HTTP/3's rapid adoption but limited practical implementation.

* [Undergraduate Disproves 40-Year-Old Conjecture, Invents New Kind of Hash Table](https://www.wired.com/story/undergraduate-upends-a-40-year-old-data-science-conjecture/) - A groundbreaking development in computer science by an undergraduate student challenges a longstanding theory.

* [I built myself a watch](https://www.thewkblog.com/2025/03/16/i-built-myself-a-watch/) - A personal journey of designing and building a functional wristwatch from scratch.

* [Chaos in the Cloudflare Lisbon Office](https://blog.cloudflare.com/chaos-in-cloudflare-lisbon-office-securing-the-internet-with-wave-motion/) - A behind-the-scenes look at innovative challenges and solutions from Cloudflare's Lisbon team.

* [NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss) - A key development in cryptography to protect data against quantum computing threats.

## Environment and Science

* [Heat Can Age You As Much As Smoking, a New Study Finds](https://news.slashdot.org/story/25/03/17/1435237/heat-can-age-you-as-much-as-smoking-a-new-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Research highlights the potential long-term health impacts of climate-related factors.

* [Genomic study: our capacity for language emerged at least 135k years ago](https://phys.org/news/2025-03-genomic-capacity-language-emerged-years.html) - Findings from genomic research trace the evolutionary history of human linguistic capabilities.

* [Google's AI 'Co-Scientist' Solved a 10-Year Superbug Problem in Two Days](https://science.slashdot.org/story/25/03/17/039241/googles-ai-co-scientist-solved-a-10-year-superbug-problem-in-two-days?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A significant achievement in healthcare using artificial intelligence to tackle antibiotic resistance.

* [World's Smallest Microcontroller](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss) - Breakthrough in microelectronics with the development of the tiniest microcontroller ever made.

* [A New Age for Geothermal](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss) - Innovations in tapping geothermal energy could reshape future energy sources.

* [SpaceX Launches Astronauts for Long-Awaited International Space Station Crew Swap](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss) - Space exploration milestone with SpaceX ferrying astronauts to the ISS.

## Cybersecurity and Privacy

* [Akira ransomware can be cracked with sixteen RTX 4090 GPUs in around ten hours](https://www.tomshardware.com/tech-industry/cyber-security/akira-ransomware-cracked-with-rtx-4090-new-exploit-to-brute-force-encryption-attack) - Insights into vulnerabilities and solutions for the Akira ransomware.

* [Consumer Groups Push New Law Fighting 'Zombie' IoT Devices](https://yro.slashdot.org/story/25/03/17/0126204/consumer-groups-push-new-law-fighting-zombie-iot-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Advocacy for stronger IoT device regulations to prevent lasting security risks.

* [Converting C to ASM to specs and then to a working Z/80 Speccy tape](https://ghuntley.com/z80/) - A technical exploration of retrocomputing and security through Z/80 architecture.

* [Attacker Copied GitHub Project, Added Fake Stars and Malicious Code](https://www.reddit.com/r/golang/comments/1jbzuot/someone_copied_our_github_project_made_it_look/) - A cautionary tale in open-source development and cybersecurity.

## Corporate and Industry Developments

* [HR Tech Firm Rippling Sues Rival Deel for Corporate Espionage](https://yro.slashdot.org/story/25/03/17/146214/hr-tech-firm-rippling-sues-rival-deel-for-corporate-espionage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Ongoing legal battle over alleged misconduct in the HR technology sector.

* [Remote Working Saved Zillow Money, Helped Recruiting, and Maintained Productivity](https://it.slashdot.org/story/25/03/16/2333228/remote-working-saved-zillow-money-helped-recruiting-and-maintained-productivity?utm_source=rss1.0mainlinkanon&utm_medium=feed) - How remote work policies proved economically beneficial for Zillow.

* [Intel's Stock Jumps 18.8% - But What's In Its Future?](https://hardware.slashdot.org/story/25/03/16/2226230/intels-stock-jumps-188---but-whats-in-its-future?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Examination of Intel's financial movements and technological prospects.

* [Nango (YC W23, Product Integrations Platform) Is Hiring Remote Engineers](https://www.nango.dev/careers) - Opportunities in the tech industry with a focus on product integration platforms.

## Programming and Open-Source Tools

* [LLM crawlers continue to DDoS SourceHut](https://status.sr.ht/issues/2025-03-17-git.sr.ht-llms/) - Challenges of large language model crawlers impacting developer platforms.

* [Zlib-rs is faster than C](https://trifectatech.org/blog/zlib-rs-is-faster-than-c/) - Benchmarking a Rust library that outperforms C implementations.

* [Docs: Open-source collaborative notes, wiki, and documentation platform by the French government](https://docs.numerique.gouv.fr/) - Introducing an open-source platform for collaborative documentation.

* [Learn Git Branching](https://learngitbranching.js.org/) - A visual and interactive tool to learn Git effectively.

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

* [2025-03-17, 15:25:49](https://lobste.rs/s/zmreeg/introducing_intel_advanced_performance) - [Introducing Intel® Advanced Performance Extensions (Intel® APX)](https://www.intel.com/content/www/us/en/developer/articles/technical/advanced-performance-extensions-apx.html)
* [2025-03-17, 15:20:00](https://news.slashdot.org/story/25/03/17/0749239/should-friday-be-the-new-saturday?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Should Friday be the New Saturday? ](https://news.slashdot.org/story/25/03/17/0749239/should-friday-be-the-new-saturday?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 15:10:25](https://lobste.rs/s/r8mdl9/http_3_is_everywhere_nowhere) - [HTTP/3 is everywhere but nowhere](https://httptoolkit.com/blog/http3-quic-open-source-support-nowhere/)
* [2025-03-17, 15:02:04](https://lobste.rs/s/d69ogy/installing_sassc_ruby_gem_on_mac) - [Installing the sassc Ruby gem on a Mac. A debugging story](https://www.schneems.com/2025/03/17/installing-the-sassc-ruby-gem-on-a-mac-a-debugging-story/)
* [2025-03-17, 14:40:00](https://news.slashdot.org/story/25/03/17/1435237/heat-can-age-you-as-much-as-smoking-a-new-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Heat Can Age You As Much As Smoking, a New Study Finds](https://news.slashdot.org/story/25/03/17/1435237/heat-can-age-you-as-much-as-smoking-a-new-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 14:38:18](https://news.ycombinator.com/item?id=43389064) - [Chaos in the Cloudflare Lisbon Office](https://blog.cloudflare.com/chaos-in-cloudflare-lisbon-office-securing-the-internet-with-wave-motion/)
* [2025-03-17, 14:06:00](https://yro.slashdot.org/story/25/03/17/146214/hr-tech-firm-rippling-sues-rival-deel-for-corporate-espionage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [HR Tech Firm Rippling Sues Rival Deel for Corporate Espionage](https://yro.slashdot.org/story/25/03/17/146214/hr-tech-firm-rippling-sues-rival-deel-for-corporate-espionage?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 13:32:32](https://lobste.rs/s/tb9lr7/optimal_bounds_for_open_addressing) - [Optimal Bounds for Open Addressing Without Reordering](https://arxiv.org/abs/2501.02305)
* [2025-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss) - [NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss)
* [2025-03-17, 13:21:24](https://lobste.rs/s/w05k9f/i_built_myself_watch) - [I built myself a watch](https://www.thewkblog.com/2025/03/16/i-built-myself-a-watch/)
* [2025-03-17, 13:19:37](https://news.ycombinator.com/item?id=43388296) - [Undergraduate Disproves 40-Year-Old Conjecture, Invents New Kind of Hash Table](https://www.wired.com/story/undergraduate-upends-a-40-year-old-data-science-conjecture/)
* [2025-03-17, 13:11:33](https://news.ycombinator.com/item?id=43388221) - [Raspberry Pi RP2350 Now Available for Purchase, Stacked Memory Variant Coming](https://www.phoronix.com/news/Raspberry-Pi-RP2350-Buy)
* [2025-03-17, 12:35:16](https://news.ycombinator.com/item?id=43387834) - [Show HN: A bi-directional, persisted KV store that is faster than Redis](https://hpkv.io)
* [2025-03-17, 12:00:59](https://news.ycombinator.com/item?id=43387574) - [Nango (YC W23, Product Integrations Platform) Is Hiring Remote Engineers](https://www.nango.dev/careers)
* [2025-03-17, 11:34:00](https://news.slashdot.org/story/25/03/17/0012207/fsfs-memorabilia-silent-auction-begins-today?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FSF's Memorabilia Silent Auction Begins Today](https://news.slashdot.org/story/25/03/17/0012207/fsfs-memorabilia-silent-auction-begins-today?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 11:17:09](https://news.ycombinator.com/item?id=43387259) - [Converting C to ASM to specs and then to a working Z/80 Speccy tape](https://ghuntley.com/z80/)
* [2025-03-17, 11:10:11](https://lobste.rs/s/dmuad3/llm_crawlers_continue_ddos_sourcehut) - [LLM crawlers continue to DDoS SourceHut](https://status.sr.ht/issues/2025-03-17-git.sr.ht-llms/)
* [2025-03-17, 11:06:24](https://news.ycombinator.com/item?id=43387188) - [Akira ransomware can be cracked with sixteen RTX 4090 GPUs in around ten hours](https://www.tomshardware.com/tech-industry/cyber-security/akira-ransomware-cracked-with-rtx-4090-new-exploit-to-brute-force-encryption-attack)
* [2025-03-17, 10:59:43](https://lobste.rs/s/0zz0ek/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/0zz0ek/what_are_you_doing_this_week)
* [2025-03-17, 10:02:22](https://news.ycombinator.com/item?id=43386745) - [Show HN: EnkiTask: Lightweight Project Management for Freelancers](https://enkitask.com/)
* [2025-03-17, 09:29:33](https://news.ycombinator.com/item?id=43386578) - [Underware 2.0 – Open Source Infinite Cable Management](https://makerworld.com/en/models/783010-underware-2-0-infinite-cable-management)
* [2025-03-17, 08:36:00](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss) - [World's Smallest Microcontroller](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss)
* [2025-03-17, 07:34:00](https://tech.slashdot.org/story/25/03/17/0434237/bluesky-proposes-new-standard-for-when-scraping-data-for-ai-training?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [BlueSky Proposes 'New Standard' for When Scraping Data for AI Training](https://tech.slashdot.org/story/25/03/17/0434237/bluesky-proposes-new-standard-for-when-scraping-data-for-ai-training?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 07:30:26](https://news.ycombinator.com/item?id=43386004) - [The exceptional Jordan algebra (2020)](https://cp4space.hatsya.com/2020/10/28/the-exceptional-jordan-algebra/)
* [2025-03-17, 05:18:36](https://lobste.rs/s/uz9tln/v6_shell) - [V6 Shell](https://v6sh.org/)
* [2025-03-17, 05:05:22](https://lobste.rs/s/8k6sws/writing_siggraph_paper_for_fun_2020) - [Writing a SIGGRAPH paper (for fun) (2020)](https://www.mattkeeter.com/projects/siggraph/)
* [2025-03-17, 04:41:49](https://news.ycombinator.com/item?id=43385268) - [The Alexa feature \"do not send voice recordings\" you enabled no longer available](https://discuss.systems/@dev/114161826926246661)
* [2025-03-17, 03:50:00](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss) - [ESA Cuts the Ribbon at 34,000-Core HPC Center](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss)
* [2025-03-17, 03:44:00](https://science.slashdot.org/story/25/03/17/039241/googles-ai-co-scientist-solved-a-10-year-superbug-problem-in-two-days?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google's AI 'Co-Scientist' Solved a 10-Year Superbug Problem in Two Days](https://science.slashdot.org/story/25/03/17/039241/googles-ai-co-scientist-solved-a-10-year-superbug-problem-in-two-days?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 03:25:26](https://news.ycombinator.com/item?id=43384894) - [Conducting forensics of mobile devices to find signs of a potential compromise](https://github.com/mvt-project/mvt)
* [2025-03-17, 03:19:52](https://lobste.rs/s/2wd2wt/learn_git_branching) - [Learn Git Branching](https://learngitbranching.js.org/)
* [2025-03-17, 03:15:40](https://lobste.rs/s/1kxvjz/from_languages_language_sets) - [From Languages to Language Sets](https://gist.github.com/xixixao/8e363dbd3663b6729cd5b6d74dbbf9d4)
* [2025-03-17, 03:09:28](https://news.ycombinator.com/item?id=43384826) - [Genomic study: our capacity for language emerged at least 135k years ago](https://phys.org/news/2025-03-genomic-capacity-language-emerged-years.html)
* [2025-03-17, 01:55:00](https://yro.slashdot.org/story/25/03/17/0126204/consumer-groups-push-new-law-fighting-zombie-iot-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Consumer Groups Push New Law Fighting 'Zombie' IoT Devices](https://yro.slashdot.org/story/25/03/17/0126204/consumer-groups-push-new-law-fighting-zombie-iot-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 01:43:38](https://lobste.rs/s/abizxl/dioxus_fullstack_crossplatform_app) - [Dioxus | Fullstack crossplatform app framework for Rust](https://dioxuslabs.com/)
* [2025-03-17, 00:48:48](https://news.ycombinator.com/item?id=43384069) - [Launching RDAP; sunsetting WHOIS](https://www.icann.org/en/announcements/details/icann-update-launching-rdap-sunsetting-whois-27-01-2025-en)
* [2025-03-17, 00:45:12](https://lobste.rs/s/grpayi/zest_programming_language_for_malleable) - [Zest: a programming language for malleable and legible systems](https://github.com/jamii/zest)
* [2025-03-16, 23:59:15](https://lobste.rs/s/lnliwt/6502_sh_6502_emulator_bourne_shell) - [6502.sh: a 6502 emulator in Bourne shell](https://codeberg.org/calebccff/6502.sh)
* [2025-03-16, 23:56:37](https://lobste.rs/s/2a8x3n/why_we_ditched_next_js_never_looked_back) - [Why we ditched Next.js and never looked back](https://northflank.com/blog/why-we-ditched-next-js-and-never-looked-back)
* [2025-03-16, 23:36:00](https://it.slashdot.org/story/25/03/16/2333228/remote-working-saved-zillow-money-helped-recruiting-and-maintained-productivity?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Remote Working Saved Zillow Money, Helped Recruiting, and Maintained Productivity](https://it.slashdot.org/story/25/03/16/2333228/remote-working-saved-zillow-money-helped-recruiting-and-maintained-productivity?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 23:07:00](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss) - [A New Age for Geothermal](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss)
* [2025-03-16, 23:05:15](https://lobste.rs/s/jagp47/going_down_rabbit_hole_git_s_new_bundle_uri) - [Going down the rabbit hole of Git's new bundle-uri](https://blog.gitbutler.com/going-down-the-rabbit-hole-of-gits-new-bundle-uri/)
* [2025-03-16, 22:29:00](https://hardware.slashdot.org/story/25/03/16/2226230/intels-stock-jumps-188---but-whats-in-its-future?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Intel's Stock Jumps 18.8% - But What's In Its Future?](https://hardware.slashdot.org/story/25/03/16/2226230/intels-stock-jumps-188---but-whats-in-its-future?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 21:34:17](https://lobste.rs/s/hi8hjp/6502_emulator_written_busybox_ash) - [A 6502 emulator written in busybox ash](https://social.treehouse.systems/@cas/114171610700263367)
* [2025-03-16, 21:21:00](https://news.slashdot.org/story/25/03/16/2119235/theres-a-good-chance-your-kid-uses-ai-to-cheat?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['There's a Good Chance Your Kid Uses AI To Cheat'](https://news.slashdot.org/story/25/03/16/2119235/theres-a-good-chance-your-kid-uses-ai-to-cheat?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 19:59:00](https://tech.slashdot.org/story/25/03/16/1957214/is-oracle-closer-to-running-tiktok?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Is Oracle Closer to Running TikTok?](https://tech.slashdot.org/story/25/03/16/1957214/is-oracle-closer-to-running-tiktok?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 19:35:07](https://news.ycombinator.com/item?id=43381512) - [Zlib-rs is faster than C](https://trifectatech.org/blog/zlib-rs-is-faster-than-c/)
* [2025-03-16, 18:39:00](https://tech.slashdot.org/story/25/03/16/1836242/after-meta-blocks-whistleblowers-book-promotion-it-becomes-an-amazon-bestseller?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [After Meta Blocks Whistleblower's Book Promotion, It Becomes an Amazon Bestseller](https://tech.slashdot.org/story/25/03/16/1836242/after-meta-blocks-whistleblowers-book-promotion-it-becomes-an-amazon-bestseller?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 18:20:00](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss) - [Apple Encrypted Data Row Case Begins in Secret](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss)
* [2025-03-16, 17:55:42](https://news.ycombinator.com/item?id=43380833) - [Teach, Don't Tell (2013)](https://stevelosh.com/blog/2013/09/teach-dont-tell/)
* [2025-03-16, 17:28:08](https://lobste.rs/s/wsw3ue/what_s_best_git_tutorial) - [What’s the best git tutorial?](https://lobste.rs/s/wsw3ue/what_s_best_git_tutorial)
* [2025-03-16, 17:02:34](https://news.ycombinator.com/item?id=43380453) - [When the Dotcom Bubble Burst](https://dfarq.homeip.net/when-the-dotcom-bubble-burst/)
* [2025-03-16, 16:34:00](https://hardware.slashdot.org/story/25/03/16/0221248/startup-claims-its-upcoming-risc-v-isa-zeus-gpu-is-10x-faster-than-nvidias-rtx-5090?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Startup Claims Its Upcoming (RISC-V ISA) Zeus GPU is 10X Faster Than Nvidia's RTX 5090](https://hardware.slashdot.org/story/25/03/16/0221248/startup-claims-its-upcoming-risc-v-isa-zeus-gpu-is-10x-faster-than-nvidias-rtx-5090?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 16:18:21](https://lobste.rs/s/m1iuiq/docs_open_source_collaborative_notes) - [Docs: Open-source collaborative notes, wiki, and documentation platform by the French government](https://docs.numerique.gouv.fr/)
* [2025-03-16, 15:34:00](https://developers.slashdot.org/story/25/03/16/003225/codon-python-compiler-gets-faster---and-changes-to-apache-2-license?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Codon Python Compiler Gets Faster - and Changes to Apache 2 License](https://developers.slashdot.org/story/25/03/16/003225/codon-python-compiler-gets-faster---and-changes-to-apache-2-license?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 15:26:26](https://lobste.rs/s/corpgn/exploration_sbcl_internals) - [Exploration of SBCL Internals](https://simonsafar.com/2020/sbcl/)
* [2025-03-16, 15:03:12](https://lobste.rs/s/kj6fts/our_interfaces_have_lost_their_senses) - [Our interfaces have lost their senses](https://wattenberger.com/thoughts/our-interfaces-have-lost-their-senses)
* [2025-03-16, 14:34:00](https://yro.slashdot.org/story/25/03/15/2055230/cybersecurity-alert-warns-of-300-attacks-with-medusa-ransomware?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cybersecurity Alert Warns of 300 Attacks with 'Medusa' Ransomware ](https://yro.slashdot.org/story/25/03/15/2055230/cybersecurity-alert-warns-of-300-attacks-with-medusa-ransomware?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 13:34:00](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss) - [5 Years After Covid-19 Became a Pandemic, Are We Ready for What's Next?](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss)
* [2025-03-16, 12:50:56](https://news.ycombinator.com/item?id=43378627) - [Extracting content from an LCP \"protected\" ePub](https://shkspr.mobi/blog/2025/03/towards-extracting-content-from-an-lcp-protected-epub/)
* [2025-03-16, 11:38:52](https://news.ycombinator.com/item?id=43378239) - [Docs – Open source alternative to Notion or Outline](https://github.com/suitenumerique/docs)
* [2025-03-16, 11:05:42](https://lobste.rs/s/cpphd3/git_2_49_released_with_faster_packing_rust) - [Git 2.49 released with faster packing, Rust foreign language interface](https://www.phoronix.com/news/Git-2.49-Released)
* [2025-03-16, 10:29:01](https://lobste.rs/s/zbydaa/attacker_copied_github_project_added) - [Attacker Copied GitHub Project, Added Fake Stars and Malicious Code](https://www.reddit.com/r/golang/comments/1jbzuot/someone_copied_our_github_project_made_it_look/)
* [2025-03-16, 08:46:00](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss) - [Sidewinder Advanced Persistent Threat (APT) Shifts to Targeting of Nuclear, Maritime Orgs](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss)
* [2025-03-16, 08:42:01](https://news.ycombinator.com/item?id=43377665) - [Take a New Look at CSS Shapes (2018)](https://www.smashingmagazine.com/2018/09/css-shapes/)
* [2025-03-16, 07:37:20](https://news.ycombinator.com/item?id=43377463) - [Compression of Spectral Images Using Spectral JPEG XL](https://jcgt.org/published/0014/01/04/)
* [2025-03-16, 06:31:07](https://lobste.rs/s/miyoai/review_helix_after_1_5_years) - [A Review of Helix after 1.5 Years](https://felix-knorr.net/posts/2025-03-16-helix-review.html)
* [2025-03-16, 04:42:52](https://lobste.rs/s/1ula6k/defer_technical_specification_it_is_time) - [The Defer Technical Specification: It Is Time](https://thephd.dev/c2y-the-defer-technical-specification-its-time-go-go-go)
* [2025-03-16, 04:01:00](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss) - [SpaceX Launches Astronauts for Long-Awaited International Space Station Crew Swap](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss)
* [2025-03-15, 23:17:00](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss) - [No Project is an Island: Why You Need SBOMs and Dependency Management](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss)
* [2025-03-15, 18:33:00](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss) - [How a Rapidly Growing Population of Crocs Has Been Impacting Northern Territories Ecosystem](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss)
* [2025-03-15, 18:22:15](https://news.ycombinator.com/item?id=43374278) - [That Time I Recreated Photoshop in C++](https://f055.net/technology/that-time-i/that-time-i-recreated-photoshop-in-c/)
* [2025-03-15, 13:48:00](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss) - [Judge Calls Doge Firings A \"Sham\", Orders Thousands Of Workers To Be Reinstated Immediately](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss)
* [2025-03-15, 09:07:00](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss) - [Bad News for Low Orbit Satellites: Earth's Thermosphere is Shrinking](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss)
* [2025-03-15, 04:22:00](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss) - [AMD's Zen 6-Based Desktop Processors May Feature Up to 24 Cores](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss)
* [2025-03-15, 03:28:39](https://news.ycombinator.com/item?id=43369739) - [Ogres Are Cool](https://www.lrb.co.uk/the-paper/v47/n05/colin-burrow/ogres-are-cool)
* [2025-03-14, 23:34:00](https://soylentnews.org/article.pl?sid=25/03/14/0056219&from=rss) - [The Cheapest Way to Supercharge America's Power Grid](https://soylentnews.org/article.pl?sid=25/03/14/0056219&from=rss)
* [2025-03-14, 20:05:53](https://news.ycombinator.com/item?id=43366671) - [Recommendations for designing magic numbers of binary file formats](https://hackers.town/@zwol/114155595855705796)
* [2025-03-14, 18:47:00](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss) - [Humans Have a Third Set of Teeth: Scientists Discover Medicine to Grow Them](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss)
* [2025-03-14, 17:17:50](https://news.ycombinator.com/item?id=43364776) - [Checkers written in Rust and exported to WASM](https://kevinalbs.com/checkers/)
* [2025-03-14, 14:01:00](https://soylentnews.org/article.pl?sid=25/03/13/150217&from=rss) - [Why Attention Limitations Let Idea Thieves Thrive in Workplaces](https://soylentnews.org/article.pl?sid=25/03/13/150217&from=rss)
* [2025-03-14, 09:14:00](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss) - [General Fusion Fires Up its Newest Steampunk Fusion Reactor](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss)
* [2025-03-14, 07:02:39](https://news.ycombinator.com/item?id=43360251) - [HTTP/3 is everywhere but nowhere](https://httptoolkit.com/blog/http3-quic-open-source-support-nowhere/)
* [2025-03-14, 04:29:00](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss) - [This ‘Dune’ Isn't Fiction. It's the Longest Conveyer Belt in the US and Moving Sand in Texas](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss)
* [2025-03-14, 03:30:33](https://news.ycombinator.com/item?id=43359343) - [Image Processing in C – Dwayne Phillips [pdf]](https://homepages.inf.ed.ac.uk/rbf/BOOKS/PHILLIPS/cips2ed.pdf)
* [2025-03-13, 23:42:00](https://soylentnews.org/article.pl?sid=25/03/12/196239&from=rss) - [ASML To Open Beijing Facility Despite US Sanctions On China](https://soylentnews.org/article.pl?sid=25/03/12/196239&from=rss)
* [2025-03-13, 18:57:00](https://soylentnews.org/article.pl?sid=25/03/12/193232&from=rss) - [Psychological 'Booster Shots' Can Strengthen Resistance to Misinformation Over Time](https://soylentnews.org/article.pl?sid=25/03/12/193232&from=rss)
* [2025-03-13, 18:36:05](https://news.ycombinator.com/item?id=43356068) - [Artificial photosynthesis directed toward organic synthesis](https://www.nature.com/articles/s41467-025-56374-z)
* [2025-03-13, 14:49:06](https://news.ycombinator.com/item?id=43353947) - [Did the Particle Go Through the Two Slits, or Did the Wave Function?](https://profmattstrassler.com/2025/03/13/did-the-particle-go-through-the-two-slits-or-did-the-wave-function/)
* [2025-03-13, 14:10:00](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss) - [Mozilla Warns Users to Update Firefox Before Certificate Expires](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss)
* [2025-03-13, 13:38:26](https://news.ycombinator.com/item?id=43353223) - [Going down the rabbit hole of Git's new bundle-URI](https://blog.gitbutler.com/going-down-the-rabbit-hole-of-gits-new-bundle-uri/)
* [2025-03-13, 09:21:00](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss) - [Woolly Mice Are Cute and Impressive – but They Won't Bring Back Mammoths](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss)
* [2025-03-13, 04:37:00](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss) - [Rust Drivers Expected to Become More Common in Linux Kernel](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss)
