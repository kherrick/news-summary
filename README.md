# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence Developments

* [Google's AI 'Co-Scientist' Solved a 10-Year Superbug Problem in Two Days](https://science.slashdot.org/story/25/03/17/039241/googles-ai-co-scientist-solved-a-10-year-superbug-problem-in-two-days?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Innovations in Technology

* [ESA Cuts the Ribbon at 34,000-Core HPC Center](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss)

* [Startup Claims Its Upcoming (RISC-V ISA) Zeus GPU is 10X Faster Than Nvidia's RTX 5090](https://hardware.slashdot.org/story/25/03/16/0221248/startup-claims-its-upcoming-risc-v-isa-zeus-gpu-is-10x-faster-than-nvidias-rtx-5090?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Programming Trends and Tools

* [Learn Git Branching](https://learngitbranching.js.org/)

* [Git 2.49 released with faster packing, Rust foreign language interface](https://www.phoronix.com/news/Git-2.49-Released)

* [Dioxus | Fullstack crossplatform app framework for Rust](https://dioxuslabs.com/)

## Security and Privacy

* [Attacker Copied GitHub Project, Added Fake Stars and Malicious Code](https://www.reddit.com/r/golang/comments/1jbzuot/someone_copied_our_github_project_made_it_look/)

* [Sidewinder Advanced Persistent Threat (APT) Shifts to Targeting of Nuclear, Maritime Orgs](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss)

## Sustainability and Environment

* [Remote Working Saved Zillow Money, Helped Recruiting, and Maintained Productivity](https://it.slashdot.org/story/25/03/16/2333228/remote-working-saved-zillow-money-helped-recruiting-and-maintained-productivity?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [A New Age for Geothermal](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss)

## Historical and Retrospective Highlights

* [I Was a 1980s Teenage Programmer (2022)](https://blog.startifact.com/posts/teenage-programmer-alphatronic/)

* [Microsoft's 1986 IPO](https://dfarq.homeip.net/microsofts-1986-ipo/)

## Space and Exploration

* [Firefly's 'Athena' Lander Watched Friday's Eclipse - from the Moon](https://science.slashdot.org/story/25/03/15/2217247/fireflys-athena-lander-watched-fridays-eclipse---from-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [SpaceX Launches Astronauts for Long-Awaited International Space Station Crew Swap](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss)

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

* [2025-03-17, 03:50:00](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss) - [ESA Cuts the Ribbon at 34,000-Core HPC Center](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss)
* [2025-03-17, 03:44:00](https://science.slashdot.org/story/25/03/17/039241/googles-ai-co-scientist-solved-a-10-year-superbug-problem-in-two-days?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google's AI 'Co-Scientist' Solved a 10-Year Superbug Problem in Two Days](https://science.slashdot.org/story/25/03/17/039241/googles-ai-co-scientist-solved-a-10-year-superbug-problem-in-two-days?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 03:25:26](https://news.ycombinator.com/item?id=43384894) - [Conducting forensics of mobile devices to find signs of a potential compromise](https://github.com/mvt-project/mvt)
* [2025-03-17, 03:19:52](https://lobste.rs/s/2wd2wt/learn_git_branching) - [Learn Git Branching](https://learngitbranching.js.org/)
* [2025-03-17, 03:15:40](https://lobste.rs/s/1kxvjz/from_languages_language_sets) - [From Languages to Language Sets](https://gist.github.com/xixixao/8e363dbd3663b6729cd5b6d74dbbf9d4)
* [2025-03-17, 03:02:11](https://lobste.rs/s/12tkuj/i_was_1980s_teenage_programmer_2022) - [I Was a 1980s Teenage Programmer (2022)](https://blog.startifact.com/posts/teenage-programmer-alphatronic/)
* [2025-03-17, 03:00:44](https://news.ycombinator.com/item?id=43384786) - [Let's knock down social media's walled gardens – Tim Berners-Lee](https://www.ft.com/content/79d2d19a-08df-48fc-9a6f-a9dbef58f642)
* [2025-03-17, 01:55:00](https://yro.slashdot.org/story/25/03/17/0126204/consumer-groups-push-new-law-fighting-zombie-iot-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Consumer Groups Push New Law Fighting 'Zombie' IoT Devices](https://yro.slashdot.org/story/25/03/17/0126204/consumer-groups-push-new-law-fighting-zombie-iot-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 01:43:38](https://lobste.rs/s/abizxl/dioxus_fullstack_crossplatform_app) - [Dioxus | Fullstack crossplatform app framework for Rust](https://dioxuslabs.com/)
* [2025-03-17, 00:48:48](https://news.ycombinator.com/item?id=43384069) - [Sunsetting Whois](https://www.icann.org/en/announcements/details/icann-update-launching-rdap-sunsetting-whois-27-01-2025-en)
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
* [2025-03-16, 21:09:46](https://news.ycombinator.com/item?id=43382344) - [Who Is Free Software For?](https://tante.cc/2025/03/03/who-is-free-software-for/)
* [2025-03-16, 21:00:22](https://news.ycombinator.com/item?id=43382261) - [Kastle (YC S24) Is Hiring Engineer #3](https://www.ycombinator.com/companies/kastle/jobs/XSq5nJT-founding-applied-ai-engineer-at-kastle)
* [2025-03-16, 19:59:00](https://tech.slashdot.org/story/25/03/16/1957214/is-oracle-closer-to-running-tiktok?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Is Oracle Closer to Running TikTok?](https://tech.slashdot.org/story/25/03/16/1957214/is-oracle-closer-to-running-tiktok?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 19:49:02](https://news.ycombinator.com/item?id=43381627) - [Everything Picolisp can do, and more](https://picolisp.com/wiki/?Documentation)
* [2025-03-16, 19:35:07](https://news.ycombinator.com/item?id=43381512) - [Zlib-rs is faster than C](https://trifectatech.org/blog/zlib-rs-is-faster-than-c/)
* [2025-03-16, 19:32:38](https://news.ycombinator.com/item?id=43381497) - [Tänzer: The lovable web server framework for Tcl](https://tanzer.io/)
* [2025-03-16, 18:48:39](https://news.ycombinator.com/item?id=43381195) - [Tcl Tutorial](https://www.tcl-lang.org/man/tcl8.5/tutorial/tcltutorial.html)
* [2025-03-16, 18:41:30](https://news.ycombinator.com/item?id=43381141) - [Microsoft's 1986 IPO](https://dfarq.homeip.net/microsofts-1986-ipo/)
* [2025-03-16, 18:39:00](https://tech.slashdot.org/story/25/03/16/1836242/after-meta-blocks-whistleblowers-book-promotion-it-becomes-an-amazon-bestseller?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [After Meta Blocks Whistleblower's Book Promotion, It Becomes an Amazon Bestseller](https://tech.slashdot.org/story/25/03/16/1836242/after-meta-blocks-whistleblowers-book-promotion-it-becomes-an-amazon-bestseller?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 18:20:00](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss) - [Apple Encrypted Data Row Case Begins in Secret](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss)
* [2025-03-16, 18:11:11](https://news.ycombinator.com/item?id=43380930) - [Our interfaces have lost their senses](https://wattenberger.com/thoughts/our-interfaces-have-lost-their-senses)
* [2025-03-16, 17:55:42](https://news.ycombinator.com/item?id=43380833) - [Teach, Don't Tell (2013)](https://stevelosh.com/blog/2013/09/teach-dont-tell/)
* [2025-03-16, 17:28:55](https://news.ycombinator.com/item?id=43380649) - [Amiga 600: From the Amiga No One Wanted to Retro Favorite](https://dfarq.homeip.net/amiga-600-the-amiga-no-one-wanted/)
* [2025-03-16, 17:28:08](https://lobste.rs/s/wsw3ue/what_s_best_git_tutorial) - [What’s the best git tutorial?](https://lobste.rs/s/wsw3ue/what_s_best_git_tutorial)
* [2025-03-16, 17:02:34](https://news.ycombinator.com/item?id=43380453) - [When the Dotcom Bubble Burst](https://dfarq.homeip.net/when-the-dotcom-bubble-burst/)
* [2025-03-16, 16:34:00](https://hardware.slashdot.org/story/25/03/16/0221248/startup-claims-its-upcoming-risc-v-isa-zeus-gpu-is-10x-faster-than-nvidias-rtx-5090?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Startup Claims Its Upcoming (RISC-V ISA) Zeus GPU is 10X Faster Than Nvidia's RTX 5090](https://hardware.slashdot.org/story/25/03/16/0221248/startup-claims-its-upcoming-risc-v-isa-zeus-gpu-is-10x-faster-than-nvidias-rtx-5090?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 16:18:21](https://lobste.rs/s/m1iuiq/docs_open_source_collaborative_notes) - [Docs: Open-source collaborative notes, wiki, and documentation platform by the French government](https://docs.numerique.gouv.fr/)
* [2025-03-16, 15:39:42](https://lobste.rs/s/ypn2zo/open_ui_maintain_open_standard_for_ui) - [open-ui: Maintain an open standard for UI and promote its adherence and adoption](https://github.com/openui/open-ui)
* [2025-03-16, 15:34:00](https://developers.slashdot.org/story/25/03/16/003225/codon-python-compiler-gets-faster---and-changes-to-apache-2-license?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Codon Python Compiler Gets Faster - and Changes to Apache 2 License](https://developers.slashdot.org/story/25/03/16/003225/codon-python-compiler-gets-faster---and-changes-to-apache-2-license?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 15:26:26](https://lobste.rs/s/corpgn/exploration_sbcl_internals) - [Exploration of SBCL Internals](https://simonsafar.com/2020/sbcl/)
* [2025-03-16, 15:15:57](https://lobste.rs/s/kaffqk/grove_bidirectionally_typed) - [Grove: A Bidirectionally typed collaborative structure editor calculus](https://www.youtube.com/live/Jff0pIbj8PM?t=7267)
* [2025-03-16, 15:03:12](https://lobste.rs/s/kj6fts/our_interfaces_have_lost_their_senses) - [Our interfaces have lost their senses](https://wattenberger.com/thoughts/our-interfaces-have-lost-their-senses)
* [2025-03-16, 14:34:00](https://yro.slashdot.org/story/25/03/15/2055230/cybersecurity-alert-warns-of-300-attacks-with-medusa-ransomware?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cybersecurity Alert Warns of 300 Attacks with 'Medusa' Ransomware ](https://yro.slashdot.org/story/25/03/15/2055230/cybersecurity-alert-warns-of-300-attacks-with-medusa-ransomware?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 14:20:02](https://news.ycombinator.com/item?id=43379262) - [DiceDB](https://dicedb.io/)
* [2025-03-16, 13:34:00](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss) - [5 Years After Covid-19 Became a Pandemic, Are We Ready for What's Next?](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss)
* [2025-03-16, 13:30:36](https://news.ycombinator.com/item?id=43378925) - [Show HN: 10 teams are racing to build a pivotal tracker replacement](https://bye-tracker.net)
* [2025-03-16, 13:27:05](https://news.ycombinator.com/item?id=43378900) - [Comet open source remote KVM from GL-iNet](https://www.gl-inet.com/products/gl-rm1/)
* [2025-03-16, 12:13:24](https://news.ycombinator.com/item?id=43378401) - [Big LLMs weights are a piece of history](https://antirez.com/news/147)
* [2025-03-16, 11:40:27](https://lobste.rs/s/zhaa9h/context_switching_performance_what) - [Context Switching and Performance: What Every Developer Should Know](https://blog.codingconfessions.com/p/context-switching-and-performance)
* [2025-03-16, 11:38:52](https://news.ycombinator.com/item?id=43378239) - [Docs – Open source alternative to Notion or Outline](https://github.com/suitenumerique/docs)
* [2025-03-16, 11:34:00](https://news.slashdot.org/story/25/03/15/0426222/ocean-levels-rise-to-a-30-year-high---and-faster-than-expected?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ocean Levels Rise to a 30-Year High - and Faster Than Expected](https://news.slashdot.org/story/25/03/15/0426222/ocean-levels-rise-to-a-30-year-high---and-faster-than-expected?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 11:05:42](https://lobste.rs/s/cpphd3/git_2_49_released_with_faster_packing_rust) - [Git 2.49 released with faster packing, Rust foreign language interface](https://www.phoronix.com/news/Git-2.49-Released)
* [2025-03-16, 10:29:01](https://lobste.rs/s/zbydaa/attacker_copied_github_project_added) - [Attacker Copied GitHub Project, Added Fake Stars and Malicious Code](https://www.reddit.com/r/golang/comments/1jbzuot/someone_copied_our_github_project_made_it_look/)
* [2025-03-16, 08:46:00](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss) - [Sidewinder Advanced Persistent Threat (APT) Shifts to Targeting of Nuclear, Maritime Orgs](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss)
* [2025-03-16, 07:34:00](https://news.slashdot.org/story/25/03/16/0136229/amazon-forest-felled-to-build-road-for-climate-summit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Forest Felled To Build Road For Climate Summit](https://news.slashdot.org/story/25/03/16/0136229/amazon-forest-felled-to-build-road-for-climate-summit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 06:31:07](https://lobste.rs/s/miyoai/review_helix_after_1_5_years) - [A Review of Helix after 1.5 Years](https://felix-knorr.net/posts/2025-03-16-helix-review.html)
* [2025-03-16, 04:42:52](https://lobste.rs/s/1ula6k/defer_technical_specification_it_is_time) - [The Defer Technical Specification: It Is Time](https://thephd.dev/c2y-the-defer-technical-specification-its-time-go-go-go)
* [2025-03-16, 04:01:00](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss) - [SpaceX Launches Astronauts for Long-Awaited International Space Station Crew Swap](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss)
* [2025-03-16, 03:34:00](https://ask.slashdot.org/story/25/03/16/015209/ask-slashdot-where-are-the-open-source-local-only-ai-solutions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ask Slashdot: Where Are the Open-Source Local-Only AI Solutions?](https://ask.slashdot.org/story/25/03/16/015209/ask-slashdot-where-are-the-open-source-local-only-ai-solutions?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 02:31:38](https://lobste.rs/s/rzgqt3/more_pro_for_dec_professional_380) - [More pro for the DEC Professional 380 (featuring PRO/VENIX)](https://oldvcr.blogspot.com/2025/03/more-pro-for-dec-professional-380.html)
* [2025-03-16, 01:34:00](https://science.slashdot.org/story/25/03/15/2217247/fireflys-athena-lander-watched-fridays-eclipse---from-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Firefly's 'Athena' Lander Watched Friday's Eclipse - from the Moon](https://science.slashdot.org/story/25/03/15/2217247/fireflys-athena-lander-watched-fridays-eclipse---from-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 23:53:52](https://lobste.rs/s/9lj3ri/year_picotron_desktop) - [The Year of the Picotron Desktop](https://arnaught.neocities.org/blog/2025/03/14/year-of-the-picotron-desktop)
* [2025-03-15, 23:48:00](https://tech.slashdot.org/story/25/03/15/236215/cloudflare-accused-of-blocking-niche-browsers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cloudflare Accused of Blocking Niche Browsers](https://tech.slashdot.org/story/25/03/15/236215/cloudflare-accused-of-blocking-niche-browsers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 23:17:00](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss) - [No Project is an Island: Why You Need SBOMs and Dependency Management](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss)
* [2025-03-15, 19:34:50](https://lobste.rs/s/v80mya/my_favorite_firefox_extensions) - [My Favorite Firefox Extensions](https://alexn.org/blog/2025/03/15/firefox-extensions/)
* [2025-03-15, 18:33:00](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss) - [How a Rapidly Growing Population of Crocs Has Been Impacting Northern Territories Ecosystem](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss)
* [2025-03-15, 18:22:15](https://news.ycombinator.com/item?id=43374278) - [That Time I Recreated Photoshop in C++](https://f055.net/technology/that-time-i/that-time-i-recreated-photoshop-in-c/)
* [2025-03-15, 15:08:40](https://lobste.rs/s/cclrkn/were_multiple_return_values_go_s_biggest) - [Were multiple return values Go's biggest mistake?](https://herecomesthemoon.net/2025/03/multiple-return-values-in-go/)
* [2025-03-15, 13:48:00](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss) - [Judge Calls Doge Firings A \"Sham\", Orders Thousands Of Workers To Be Reinstated Immediately](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss)
* [2025-03-15, 09:07:00](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss) - [Bad News for Low Orbit Satellites: Earth's Thermosphere is Shrinking](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss)
* [2025-03-15, 04:22:00](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss) - [AMD's Zen 6-Based Desktop Processors May Feature Up to 24 Cores](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss)
* [2025-03-14, 23:34:00](https://soylentnews.org/article.pl?sid=25/03/14/0056219&from=rss) - [The Cheapest Way to Supercharge America's Power Grid](https://soylentnews.org/article.pl?sid=25/03/14/0056219&from=rss)
* [2025-03-14, 19:12:12](https://news.ycombinator.com/item?id=43366124) - [Edgar Allan Poe's life was a mess. But his work was in his command](https://www.washingtonpost.com/books/2025/03/13/edgar-allan-poe-biography-kopley-review/)
* [2025-03-14, 18:47:00](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss) - [Humans Have a Third Set of Teeth: Scientists Discover Medicine to Grow Them](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss)
* [2025-03-14, 14:01:00](https://soylentnews.org/article.pl?sid=25/03/13/150217&from=rss) - [Why Attention Limitations Let Idea Thieves Thrive in Workplaces](https://soylentnews.org/article.pl?sid=25/03/13/150217&from=rss)
* [2025-03-14, 14:00:34](https://news.ycombinator.com/item?id=43362725) - [Local-First and Ejectable](https://thymer.com/local-first-ejectable)
* [2025-03-14, 09:14:00](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss) - [General Fusion Fires Up its Newest Steampunk Fusion Reactor](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss)
* [2025-03-14, 07:12:43](https://news.ycombinator.com/item?id=43360287) - [From Languages to Language Sets](https://gist.github.com/xixixao/8e363dbd3663b6729cd5b6d74dbbf9d4)
* [2025-03-14, 04:29:00](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss) - [This ‘Dune’ Isn't Fiction. It's the Longest Conveyer Belt in the US and Moving Sand in Texas](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss)
* [2025-03-14, 00:37:50](https://news.ycombinator.com/item?id=43358593) - [My Journey Back to Math: A Short Review of MathAcademy](https://www.staszewski.xyz/blog/math-academy-review/)
* [2025-03-13, 23:42:00](https://soylentnews.org/article.pl?sid=25/03/12/196239&from=rss) - [ASML To Open Beijing Facility Despite US Sanctions On China](https://soylentnews.org/article.pl?sid=25/03/12/196239&from=rss)
* [2025-03-13, 18:57:00](https://soylentnews.org/article.pl?sid=25/03/12/193232&from=rss) - [Psychological 'Booster Shots' Can Strengthen Resistance to Misinformation Over Time](https://soylentnews.org/article.pl?sid=25/03/12/193232&from=rss)
* [2025-03-13, 18:36:05](https://news.ycombinator.com/item?id=43356068) - [Artificial photosynthesis directed toward organic synthesis](https://www.nature.com/articles/s41467-025-56374-z)
* [2025-03-13, 15:03:08](https://news.ycombinator.com/item?id=43354084) - [A 62M-year-old skeleton sheds light on an enigmatic mammal](https://www.sciencedaily.com/releases/2025/03/250311121514.htm)
* [2025-03-13, 14:49:06](https://news.ycombinator.com/item?id=43353947) - [Did the Particle Go Through the Two Slits, or Did the Wave Function?](https://profmattstrassler.com/2025/03/13/did-the-particle-go-through-the-two-slits-or-did-the-wave-function/)
* [2025-03-13, 14:10:00](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss) - [Mozilla Warns Users to Update Firefox Before Certificate Expires](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss)
* [2025-03-13, 13:38:26](https://news.ycombinator.com/item?id=43353223) - [Going down the rabbit hole of Git's new bundle-URI](https://blog.gitbutler.com/going-down-the-rabbit-hole-of-gits-new-bundle-uri/)
* [2025-03-13, 12:16:33](https://news.ycombinator.com/item?id=43352503) - [A Guide to Undefined Behavior in C and C++ (2010)](https://blog.regehr.org/archives/213)
* [2025-03-13, 09:21:00](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss) - [Woolly Mice Are Cute and Impressive – but They Won't Bring Back Mammoths](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss)
* [2025-03-13, 04:37:00](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss) - [Rust Drivers Expected to Become More Common in Linux Kernel](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss)
* [2025-03-13, 00:30:19](https://news.ycombinator.com/item?id=43349204) - [Laplacian Mesh Smoothing by Throwing Vertices](https://nosferalatu.com/./LaplacianMeshSmoothing.html)
