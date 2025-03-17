# [News Summary](https://kherrick.github.io/news-summary/)

## Scientific Discoveries

* [Scientists discover first known animal that doesn't breathe](https://www.livescience.com/first-non-breathing-animal.html) ([comments](https://news.ycombinator.com/item?id=43387514))

* [Google's AI 'Co-Scientist' Solved a 10-Year Superbug Problem in Two Days](https://science.slashdot.org/story/25/03/17/039241/googles-ai-co-scientist-solved-a-10-year-superbug-problem-in-two-days?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43387514))

## Emerging Technologies

* [Pine64's RISC-V tablet now ships with a Debian-based Linux and improved hardware](https://liliputing.com/pine64s-risc-v-tablet-now-ships-with-a-debian-based-linux-distro-and-improved-hardware/) ([comments](https://news.ycombinator.com/item?id=43386856))

* [World's Smallest Microcontroller](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss))

## AI and Ethics

* [BlueSky Proposes 'New Standard' for When Scraping Data for AI Training](https://tech.slashdot.org/story/25/03/17/0434237/bluesky-proposes-new-standard-for-when-scraping-data-for-ai-training?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/03/17/0434237/bluesky-proposes-new-standard-for-when-scraping-data-for-ai-training?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [LLM crawlers continue to DDoS SourceHut](https://status.sr.ht/issues/2025-03-17-git.sr.ht-llms/) ([comments](https://lobste.rs/s/dmuad3/llm_crawlers_continue_ddos_sourcehut))

## Historical and Fun Programming Insights

* [The exceptional Jordan algebra (2020)](https://cp4space.hatsya.com/2020/10/28/the-exceptional-jordan-algebra/) ([comments](https://news.ycombinator.com/item?id=43386004))

* [I Was a 1980s Teenage Programmer (2022)](https://blog.startifact.com/posts/teenage-programmer-alphatronic/) ([comments](https://lobste.rs/s/12tkuj/i_was_1980s_teenage_programmer_2022))

## Open Source and Collaborative Tools

* [Docs – Open source alternative to Notion or Outline](https://github.com/suitenumerique/docs) ([comments](https://news.ycombinator.com/item?id=43378239))

* [Dioxus | Fullstack crossplatform app framework for Rust](https://dioxuslabs.com/) ([comments](https://lobste.rs/s/abizxl/dioxus_fullstack_crossplatform_app))

## Corporate and Industry Updates

* [Meta puts stop on promotion of tell-all book by former employee](https://www.theguardian.com/technology/2025/mar/13/meta-careless-people-book-former-employee) ([comments](https://news.ycombinator.com/item?id=43387325))

* [After Meta Blocks Whistleblower's Book Promotion, It Becomes an Amazon Bestseller](https://tech.slashdot.org/story/25/03/16/1836242/after-meta-blocks-whistleblowers-book-promotion-it-becomes-an-amazon-bestseller?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/03/16/1836242/after-meta-blocks-whistleblowers-book-promotion-it-becomes-an-amazon-bestseller?utm_source=rss1.0mainlinkanon&utm_medium=feed))

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

* [2025-03-17, 12:44:34](https://news.ycombinator.com/item?id=43387936) - [Bambu Labs launches 3D-printable toys with reusable electronics](https://www.theverge.com/news/631060/bambu-labs-makerworld-cyberbrick-3d-printed-toys-programmable-kickstarter)
* [2025-03-17, 12:10:04](https://news.ycombinator.com/item?id=43387626) - [Configure Azure Entra ID as IdP on Keycloak](https://blog.ght1pc9kc.fr/en/2023/configure-azure-entra-id-as-idp-on-keycloak/)
* [2025-03-17, 12:00:59](https://news.ycombinator.com/item?id=43387574) - [Nango (YC W23, Product Integrations Platform) Is Hiring Remote Engineers](https://www.nango.dev/careers)
* [2025-03-17, 11:53:47](https://news.ycombinator.com/item?id=43387514) - [Scientists discover first known animal that doesn't breathe](https://www.livescience.com/first-non-breathing-animal.html)
* [2025-03-17, 11:34:00](https://news.slashdot.org/story/25/03/17/0012207/fsfs-memorabilia-silent-auction-begins-today?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FSF's Memorabilia Silent Auction Begins Today](https://news.slashdot.org/story/25/03/17/0012207/fsfs-memorabilia-silent-auction-begins-today?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 11:29:04](https://news.ycombinator.com/item?id=43387334) - [Stupid Smart Pointers in C](http://blog.kevinalbs.com/stupid_smart_pointers)
* [2025-03-17, 11:27:19](https://news.ycombinator.com/item?id=43387325) - [Meta puts stop on promotion of tell-all book by former employee](https://www.theguardian.com/technology/2025/mar/13/meta-careless-people-book-former-employee)
* [2025-03-17, 11:10:11](https://lobste.rs/s/dmuad3/llm_crawlers_continue_ddos_sourcehut) - [LLM crawlers continue to DDoS SourceHut](https://status.sr.ht/issues/2025-03-17-git.sr.ht-llms/)
* [2025-03-17, 10:59:43](https://lobste.rs/s/0zz0ek/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/0zz0ek/what_are_you_doing_this_week)
* [2025-03-17, 10:22:40](https://news.ycombinator.com/item?id=43386856) - [Pine64's RISC-V tablet now ships with a Debian-based Linux and improved hardware](https://liliputing.com/pine64s-risc-v-tablet-now-ships-with-a-debian-based-linux-distro-and-improved-hardware/)
* [2025-03-17, 10:02:22](https://news.ycombinator.com/item?id=43386745) - [Show HN: Beyond Jira: Lightweight Project Management for Freelancers](https://enkitask.com/)
* [2025-03-17, 08:49:02](https://news.ycombinator.com/item?id=43386357) - [uv downloads overtake Poetry for Wagtail users](https://wagtail.org/blog/uv-overtakes-poetry/)
* [2025-03-17, 08:36:00](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss) - [World's Smallest Microcontroller](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss)
* [2025-03-17, 07:34:00](https://tech.slashdot.org/story/25/03/17/0434237/bluesky-proposes-new-standard-for-when-scraping-data-for-ai-training?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [BlueSky Proposes 'New Standard' for When Scraping Data for AI Training](https://tech.slashdot.org/story/25/03/17/0434237/bluesky-proposes-new-standard-for-when-scraping-data-for-ai-training?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 07:30:26](https://news.ycombinator.com/item?id=43386004) - [The exceptional Jordan algebra (2020)](https://cp4space.hatsya.com/2020/10/28/the-exceptional-jordan-algebra/)
* [2025-03-17, 07:03:59](https://news.ycombinator.com/item?id=43385857) - [Technical Mathematics (1954) [pdf]](https://sliderulemuseum.com/Manuals/TechnicalMathematics_RiceAndKnight.pdf)
* [2025-03-17, 05:18:36](https://lobste.rs/s/uz9tln/v6_shell) - [V6 Shell](https://v6sh.org/)
* [2025-03-17, 05:05:22](https://lobste.rs/s/8k6sws/writing_siggraph_paper_for_fun_2020) - [Writing a SIGGRAPH paper (for fun) (2020)](https://www.mattkeeter.com/projects/siggraph/)
* [2025-03-17, 04:41:49](https://news.ycombinator.com/item?id=43385268) - [The Alexa feature \"do not send voice recordings\" you enabled no longer available](https://discuss.systems/@dev/114161826926246661)
* [2025-03-17, 03:50:00](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss) - [ESA Cuts the Ribbon at 34,000-Core HPC Center](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss)
* [2025-03-17, 03:44:00](https://science.slashdot.org/story/25/03/17/039241/googles-ai-co-scientist-solved-a-10-year-superbug-problem-in-two-days?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google's AI 'Co-Scientist' Solved a 10-Year Superbug Problem in Two Days](https://science.slashdot.org/story/25/03/17/039241/googles-ai-co-scientist-solved-a-10-year-superbug-problem-in-two-days?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 03:25:26](https://news.ycombinator.com/item?id=43384894) - [Conducting forensics of mobile devices to find signs of a potential compromise](https://github.com/mvt-project/mvt)
* [2025-03-17, 03:19:52](https://lobste.rs/s/2wd2wt/learn_git_branching) - [Learn Git Branching](https://learngitbranching.js.org/)
* [2025-03-17, 03:15:40](https://lobste.rs/s/1kxvjz/from_languages_language_sets) - [From Languages to Language Sets](https://gist.github.com/xixixao/8e363dbd3663b6729cd5b6d74dbbf9d4)
* [2025-03-17, 03:09:28](https://news.ycombinator.com/item?id=43384826) - [Genomic study indicates our capacity for language emerged 135,000 years ago](https://phys.org/news/2025-03-genomic-capacity-language-emerged-years.html)
* [2025-03-17, 03:02:11](https://lobste.rs/s/12tkuj/i_was_1980s_teenage_programmer_2022) - [I Was a 1980s Teenage Programmer (2022)](https://blog.startifact.com/posts/teenage-programmer-alphatronic/)
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
* [2025-03-16, 22:24:56](https://lobste.rs/s/sn2gjh/inventing_on_principle_2012) - [Inventing On Principle (2012)](https://youtu.be/PUv66718DII)
* [2025-03-16, 21:34:17](https://lobste.rs/s/hi8hjp/6502_emulator_written_busybox_ash) - [A 6502 emulator written in busybox ash](https://social.treehouse.systems/@cas/114171610700263367)
* [2025-03-16, 21:21:00](https://news.slashdot.org/story/25/03/16/2119235/theres-a-good-chance-your-kid-uses-ai-to-cheat?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['There's a Good Chance Your Kid Uses AI To Cheat'](https://news.slashdot.org/story/25/03/16/2119235/theres-a-good-chance-your-kid-uses-ai-to-cheat?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 19:59:00](https://tech.slashdot.org/story/25/03/16/1957214/is-oracle-closer-to-running-tiktok?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Is Oracle Closer to Running TikTok?](https://tech.slashdot.org/story/25/03/16/1957214/is-oracle-closer-to-running-tiktok?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 19:35:07](https://news.ycombinator.com/item?id=43381512) - [Zlib-rs is faster than C](https://trifectatech.org/blog/zlib-rs-is-faster-than-c/)
* [2025-03-16, 18:39:00](https://tech.slashdot.org/story/25/03/16/1836242/after-meta-blocks-whistleblowers-book-promotion-it-becomes-an-amazon-bestseller?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [After Meta Blocks Whistleblower's Book Promotion, It Becomes an Amazon Bestseller](https://tech.slashdot.org/story/25/03/16/1836242/after-meta-blocks-whistleblowers-book-promotion-it-becomes-an-amazon-bestseller?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 18:20:00](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss) - [Apple Encrypted Data Row Case Begins in Secret](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss)
* [2025-03-16, 17:55:42](https://news.ycombinator.com/item?id=43380833) - [Teach, Don't Tell (2013)](https://stevelosh.com/blog/2013/09/teach-dont-tell/)
* [2025-03-16, 17:28:55](https://news.ycombinator.com/item?id=43380649) - [Amiga 600: From the Amiga No One Wanted to Retro Favorite](https://dfarq.homeip.net/amiga-600-the-amiga-no-one-wanted/)
* [2025-03-16, 17:28:08](https://lobste.rs/s/wsw3ue/what_s_best_git_tutorial) - [What’s the best git tutorial?](https://lobste.rs/s/wsw3ue/what_s_best_git_tutorial)
* [2025-03-16, 17:02:34](https://news.ycombinator.com/item?id=43380453) - [When the Dotcom Bubble Burst](https://dfarq.homeip.net/when-the-dotcom-bubble-burst/)
* [2025-03-16, 16:34:00](https://hardware.slashdot.org/story/25/03/16/0221248/startup-claims-its-upcoming-risc-v-isa-zeus-gpu-is-10x-faster-than-nvidias-rtx-5090?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Startup Claims Its Upcoming (RISC-V ISA) Zeus GPU is 10X Faster Than Nvidia's RTX 5090](https://hardware.slashdot.org/story/25/03/16/0221248/startup-claims-its-upcoming-risc-v-isa-zeus-gpu-is-10x-faster-than-nvidias-rtx-5090?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 16:18:21](https://lobste.rs/s/m1iuiq/docs_open_source_collaborative_notes) - [Docs: Open-source collaborative notes, wiki, and documentation platform by the French government](https://docs.numerique.gouv.fr/)
* [2025-03-16, 15:39:42](https://lobste.rs/s/ypn2zo/open_ui_maintain_open_standard_for_ui) - [open-ui: Maintain an open standard for UI and promote its adherence and adoption](https://github.com/openui/open-ui)
* [2025-03-16, 15:34:00](https://developers.slashdot.org/story/25/03/16/003225/codon-python-compiler-gets-faster---and-changes-to-apache-2-license?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Codon Python Compiler Gets Faster - and Changes to Apache 2 License](https://developers.slashdot.org/story/25/03/16/003225/codon-python-compiler-gets-faster---and-changes-to-apache-2-license?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 15:26:26](https://lobste.rs/s/corpgn/exploration_sbcl_internals) - [Exploration of SBCL Internals](https://simonsafar.com/2020/sbcl/)
* [2025-03-16, 15:03:12](https://lobste.rs/s/kj6fts/our_interfaces_have_lost_their_senses) - [Our interfaces have lost their senses](https://wattenberger.com/thoughts/our-interfaces-have-lost-their-senses)
* [2025-03-16, 14:34:00](https://yro.slashdot.org/story/25/03/15/2055230/cybersecurity-alert-warns-of-300-attacks-with-medusa-ransomware?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cybersecurity Alert Warns of 300 Attacks with 'Medusa' Ransomware ](https://yro.slashdot.org/story/25/03/15/2055230/cybersecurity-alert-warns-of-300-attacks-with-medusa-ransomware?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 13:34:00](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss) - [5 Years After Covid-19 Became a Pandemic, Are We Ready for What's Next?](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss)
* [2025-03-16, 13:30:36](https://news.ycombinator.com/item?id=43378925) - [Show HN: 10 teams are racing to build a pivotal tracker replacement](https://bye-tracker.net)
* [2025-03-16, 11:38:52](https://news.ycombinator.com/item?id=43378239) - [Docs – Open source alternative to Notion or Outline](https://github.com/suitenumerique/docs)
* [2025-03-16, 11:34:00](https://news.slashdot.org/story/25/03/15/0426222/ocean-levels-rise-to-a-30-year-high---and-faster-than-expected?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ocean Levels Rise to a 30-Year High - and Faster Than Expected](https://news.slashdot.org/story/25/03/15/0426222/ocean-levels-rise-to-a-30-year-high---and-faster-than-expected?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 11:05:42](https://lobste.rs/s/cpphd3/git_2_49_released_with_faster_packing_rust) - [Git 2.49 released with faster packing, Rust foreign language interface](https://www.phoronix.com/news/Git-2.49-Released)
* [2025-03-16, 10:29:01](https://lobste.rs/s/zbydaa/attacker_copied_github_project_added) - [Attacker Copied GitHub Project, Added Fake Stars and Malicious Code](https://www.reddit.com/r/golang/comments/1jbzuot/someone_copied_our_github_project_made_it_look/)
* [2025-03-16, 08:46:00](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss) - [Sidewinder Advanced Persistent Threat (APT) Shifts to Targeting of Nuclear, Maritime Orgs](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss)
* [2025-03-16, 07:37:20](https://news.ycombinator.com/item?id=43377463) - [Compression of Spectral Images Using Spectral JPEG XL](https://jcgt.org/published/0014/01/04/)
* [2025-03-16, 07:34:00](https://news.slashdot.org/story/25/03/16/0136229/amazon-forest-felled-to-build-road-for-climate-summit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Forest Felled To Build Road For Climate Summit](https://news.slashdot.org/story/25/03/16/0136229/amazon-forest-felled-to-build-road-for-climate-summit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 06:31:07](https://lobste.rs/s/miyoai/review_helix_after_1_5_years) - [A Review of Helix after 1.5 Years](https://felix-knorr.net/posts/2025-03-16-helix-review.html)
* [2025-03-16, 04:42:52](https://lobste.rs/s/1ula6k/defer_technical_specification_it_is_time) - [The Defer Technical Specification: It Is Time](https://thephd.dev/c2y-the-defer-technical-specification-its-time-go-go-go)
* [2025-03-16, 04:01:00](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss) - [SpaceX Launches Astronauts for Long-Awaited International Space Station Crew Swap](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss)
* [2025-03-16, 03:34:00](https://ask.slashdot.org/story/25/03/16/015209/ask-slashdot-where-are-the-open-source-local-only-ai-solutions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ask Slashdot: Where Are the Open-Source Local-Only AI Solutions?](https://ask.slashdot.org/story/25/03/16/015209/ask-slashdot-where-are-the-open-source-local-only-ai-solutions?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 23:17:00](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss) - [No Project is an Island: Why You Need SBOMs and Dependency Management](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss)
* [2025-03-15, 19:34:50](https://lobste.rs/s/v80mya/my_favorite_firefox_extensions) - [My Favorite Firefox Extensions](https://alexn.org/blog/2025/03/15/firefox-extensions/)
* [2025-03-15, 18:33:00](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss) - [How a Rapidly Growing Population of Crocs Has Been Impacting Northern Territories Ecosystem](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss)
* [2025-03-15, 18:22:15](https://news.ycombinator.com/item?id=43374278) - [That Time I Recreated Photoshop in C++](https://f055.net/technology/that-time-i/that-time-i-recreated-photoshop-in-c/)
* [2025-03-15, 15:08:40](https://lobste.rs/s/cclrkn/were_multiple_return_values_go_s_biggest) - [Were multiple return values Go's biggest mistake?](https://herecomesthemoon.net/2025/03/multiple-return-values-in-go/)
* [2025-03-15, 13:48:00](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss) - [Judge Calls Doge Firings A \"Sham\", Orders Thousands Of Workers To Be Reinstated Immediately](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss)
* [2025-03-15, 09:07:00](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss) - [Bad News for Low Orbit Satellites: Earth's Thermosphere is Shrinking](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss)
* [2025-03-15, 04:22:00](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss) - [AMD's Zen 6-Based Desktop Processors May Feature Up to 24 Cores](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss)
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
